import{_ as u,r as i,o as d,c as p,a as e,b as n,w as t,e as o,d as a}from"./app.1137d7ac.js";const m={},_=o(`<h1 id="long-polling-vs-webhooks" tabindex="-1"><a class="header-anchor" href="#long-polling-vs-webhooks" aria-hidden="true">#</a> Long Polling vs. Webhooks</h1><p>Hay dos formas en las que tu bot puede recibir mensajes de los servidores de Telegram. Se denominan <em>long polling</em> y <em>webhooks</em>. grammY soporta ambas formas, mientras que el long polling es el predeterminado.</p><p>Esta secci\xF3n describe primero lo que es el long polling y los webhooks, y a su vez describe algunas de las ventajas y desventajas de usar uno u otro m\xE9todo de despliegue. Tambi\xE9n cubrir\xE1 c\xF3mo usarlos con grammY.</p><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducci\xF3n</h2><p>Puedes pensar en toda la discusi\xF3n de webhooks vs. long polling como una cuesti\xF3n de qu\xE9 <em>tipo de despliegue</em> usar. En otras palabras, hay dos formas fundamentalmente diferentes de alojar tu bot (ejecutarlo en alg\xFAn servidor), y difieren en la forma en que los mensajes llegan a tu bot, y pueden ser procesados por grammY.</p><p>Esta elecci\xF3n es muy importante cuando tienes que decidir d\xF3nde alojar tu bot. Por ejemplo, algunos proveedores de infraestructura s\xF3lo admiten uno de los dos tipos de despliegue.</p><p>Tu bot puede atraerlos (long polling), o los servidores de Telegram pueden empujarlos a tu bot (webhooks).</p><blockquote><p>Si ya sabes c\xF3mo funcionan estas cosas, despl\xE1zate hacia abajo para ver c\xF3mo usar <a href="#c%C3%B3mo-utilizar-el-long-polling">long polling</a> o <a href="#c%C3%B3mo-usar-webhooks">webhooks</a> con grammY.</p></blockquote><h2 id="\xBFcomo-funciona-el-long-polling" tabindex="-1"><a class="header-anchor" href="#\xBFcomo-funciona-el-long-polling" aria-hidden="true">#</a> \xBFC\xF3mo funciona el Long Polling?</h2><p>Imag\xEDnese que est\xE1 comprando una bola de helado en su helader\xEDa de confianza. Te acercas al empleado y le pides tu tipo de helado favorito. Desgraciadamente, te avisa de que se han agotado las existencias.</p><p>Al d\xEDa siguiente, vuelves a tener antojo de ese delicioso helado, as\xED que vuelves al mismo sitio y pides el mismo helado. Buenas noticias. Han repuesto durante la noche para que puedas disfrutar hoy de tu helado de caramelo salado. Qu\xE9 rico.</p><p><strong>Polling</strong> significa que grammY env\xEDa proactivamente una solicitud a Telegram, pidiendo nuevas actualizaciones (piensa: mensajes). Si no hay mensajes, Telegram devolver\xE1 una lista vac\xEDa, indicando que no se han enviado nuevos mensajes a su bot desde la \xFAltima vez que pregunt\xF3.</p><p>Cuando grammY env\xEDa una petici\xF3n a Telegram y se han enviado nuevos mensajes a tu bot mientras tanto, Telegram los devolver\xE1 como un array de hasta 100 objetos de actualizaci\xF3n.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            |   &lt;---   \xBFhay mensajes?    ---    |           |
|            |    ---        no           ---&gt;   |           |
|            |                                   |           |
|            |   &lt;---   \xBFhay mensajes?    ---    |           |
|  Telegram  |    ---        no           ---&gt;   |    Bot    |
|            |                                   |           |
|            |   &lt;---   \xBFhay mensajes?    ---    |           |
|            |    ---   s\xED, aqu\xED tienes   ---&gt;   |           |
|            |                                   |           |
|____________|                                   |___________|
</code></pre></div><p>Es inmediatamente obvio que esto tiene algunos inconvenientes. Tu bot s\xF3lo recibe nuevos mensajes cada vez que pregunta, es decir, cada pocos segundos m\xE1s o menos. Para que tu bot responda m\xE1s r\xE1pido, podr\xEDas enviar m\xE1s peticiones y no esperar tanto tiempo entre ellas. Por ejemplo, \xA1podr\xEDamos pedir nuevos mensajes cada milisegundo! Lo que podr\xEDa salir mal\u2026</p><p>En vez de decidir hacer spam a los servidores de Telegram, usaremos el <em>long polling</em> en vez del regular (short) polling.</p><p><strong>Long polling</strong> significa que grammY env\xEDa proactivamente una solicitud a Telegram, pidiendo nuevas actualizaciones. Si no hay mensajes, Telegram mantendr\xE1 la conexi\xF3n abierta hasta que lleguen nuevos mensajes, y entonces responder\xE1 a la petici\xF3n con esos nuevos mensajes.</p><p><em>\xA1Hora de volver a tomar un helado! El empleado ya te saluda con tu nombre de pila. Al preguntarle por un helado de su tipo favorito, el empleado le sonr\xEDe y se queda helado. De hecho, no obtiene ninguna respuesta. As\xED que decides esperar, devolviendo la sonrisa con firmeza. Y esperas. Y esperas.</em></p><p><em>Unas horas antes del siguiente amanecer, llega un cami\xF3n de una empresa local de reparto de alimentos y trae un par de cajas grandes al almac\xE9n del sal\xF3n. En ellas se lee <strong>helado</strong> en el exterior. El empleado por fin se pone en marcha de nuevo. \u201C\xA1Claro que tenemos caramelo salado! Dos cucharadas con virutas, lo de siempre\u201D.</em></p><p><em>Como si no hubiera pasado nada, disfrutas de tu helado mientras sales de la helader\xEDa m\xE1s irreal del mundo.</em></p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            |   &lt;---   \xBFhay mensajes?    ---    |           |
|            |   .                               |           |
|            |   .                               |           |
|            |   .     *ambos esperando*         |           |
|  Telegram  |   .                               |    Bot    |
|            |   .                               |           |
|            |   .                               |           |
|            |    ---  s\xED, aqu\xED tienes    ---&gt;   |           |
|            |                                   |           |
|____________|                                   |___________|
</code></pre></div>`,21),g=a("Tenga en cuenta que, en realidad, ninguna conexi\xF3n se mantendr\xEDa abierta durante horas. Las solicitudes de long polling ienen un tiempo de espera por defecto de 30 segundos (para evitar una serie de "),h={href:"https://tools.ietf.org/id/draft-loreto-http-bidirectional-07.html#timeouts",target:"_blank",rel:"noopener noreferrer"},b=a("problemas t\xE9cnicos"),k=a("). Si no se devuelven nuevos mensajes despu\xE9s de este per\xEDodo de tiempo, la solicitud se cancelar\xE1 y se volver\xE1 a enviar, pero el concepto general sigue siendo el mismo."),v=o(`<p>Usando un long polling, no necesitas enviar spam a los servidores de Telegram, \xA1y a\xFAn as\xED recibes nuevos mensajes inmediatamente! Muy ingenioso. Esto es lo que hace grammY por defecto cuando ejecutas <code>bot<wbr>.start()</code>.</p><h2 id="\xBFcomo-funcionan-los-webhooks" tabindex="-1"><a class="header-anchor" href="#\xBFcomo-funcionan-los-webhooks" aria-hidden="true">#</a> \xBFC\xF3mo funcionan los Webhooks?</h2><p>Despu\xE9s de esta aterradora experiencia (\xA1una noche entera sin helado!), prefieres no volver a preguntar a nadie por el helado. \xBFNo ser\xEDa genial si el helado pudiera venir a ti?_</p><p>Configurar un <strong>webhook</strong> significa que proporcionar\xE1s a Telegram una URL que sea accesible desde el internet p\xFAblico. Cada vez que se env\xEDe un nuevo mensaje a tu bot, Telegram (y no t\xFA) tomar\xE1 la iniciativa y enviar\xE1 una petici\xF3n con el objeto de actualizaci\xF3n a tu servidor. Bonito, \xBFno?</p><p>Decides ir a la helader\xEDa por \xFAltima vez. Le dices a tu amigo del mostrador d\xF3nde vives. \xC9l promete ir personalmente a tu apartamento cada vez que haya un nuevo helado (porque se derretir\xEDa en el correo). Un tipo genial._</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            |                                   |           |
|            |                                   |           |
|            |        *ambos esperando*          |           |
|            |                                   |           |
|  Telegram  |                                   |    Bot    |
|            |                                   |           |
|            |                                   |           |
|            |    --- hola, nuevo mensaje ---&gt;   |           |
|            |   &lt;---    gracias amigo    ---    |           |
|____________|                                   |___________|
</code></pre></div><h2 id="comparacion" tabindex="-1"><a class="header-anchor" href="#comparacion" aria-hidden="true">#</a> Comparaci\xF3n</h2><p><strong>La principal ventaja de long polling sobre los webhooks es que es m\xE1s sencillo.</strong> No necesitas un dominio o una URL p\xFAblica. No es necesario que te pongas a jugar con la configuraci\xF3n de certificados SSL en caso de que est\xE9s ejecutando tu bot en un VPS. Usa <code>bot<wbr>.start()</code> y todo funcionar\xE1, sin necesidad de m\xE1s configuraci\xF3n. Bajo carga, tienes el control total de cu\xE1ntos mensajes puedes procesar.</p><p>Los lugares donde el long polling funciona bien incluyen:</p><ul><li>Durante el desarrollo en su m\xE1quina local.</li><li>En la mayor\xEDa de los servidores.</li><li>En instancias \u201Cbackend\u201D alojadas, es decir, m\xE1quinas que ejecutan activamente su bot 24/7.</li></ul><p><strong>La principal ventaja de los webhooks sobre el long polling es que son m\xE1s baratos.</strong> YTe ahorras un mont\xF3n de peticiones superfluas. No necesitas mantener una conexi\xF3n de red abierta en todo momento. Puedes utilizar servicios que reduzcan autom\xE1ticamente tu infraestructura a cero cuando no haya peticiones. Si quieres, puedes incluso <a href="#webhook-reply">hacer una llamada a la API al responder a la petici\xF3n de Telegram</a>, aunque esto tiene una serie de inconvenientes.</p>`,11),f=a("Consulta la opci\xF3n de configuraci\xF3n "),q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/ApiClientOptions#canUseWebhookReply",target:"_blank",rel:"noopener noreferrer"},w=a("aqu\xED"),y=a("."),j=e("p",null,"Los lugares donde los webhooks funcionan bien incluyen:",-1),z=e("ul",null,[e("li",null,"En servidores con certificados SSL."),e("li",null,"En instancias \u201Cfrontales\u201D alojadas que escalan seg\xFAn su carga."),e("li",null,"En plataformas sin servidor, como funciones en la nube o redes de borde programables.")],-1),x=e("h2",{id:"aun-no-tengo-idea-de-que-usar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aun-no-tengo-idea-de-que-usar","aria-hidden":"true"},"#"),a(" A\xFAn no tengo idea de qu\xE9 usar")],-1),T=e("p",null,[a("Entonces opte por el long polling. Si no tienes una buena raz\xF3n para usar webhooks, entonces ten en cuenta que no hay mayores inconvenientes en el long polling, y -seg\xFAn nuestra experiencia- pasar\xE1s mucho menos tiempo arreglando cosas. Los webhooks pueden ser un poco desagradables de vez en cuando (ver "),e("a",{href:"#terminar-las-solicitudes-de-webhooks-a-tiempo"},"abajo"),a(").")],-1),C=a("Elijas lo que elijas, si alguna vez te encuentras con problemas serios, no deber\xEDa ser demasiado dif\xEDcil cambiar al otro tipo de despliegue despu\xE9s del hecho. Con grammY, s\xF3lo tienes que tocar unas pocas l\xEDneas de c\xF3digo. La configuraci\xF3n de su "),E=a("middleware"),P=a(" es la misma."),S=o(`<h2 id="como-utilizar-el-long-polling" tabindex="-1"><a class="header-anchor" href="#como-utilizar-el-long-polling" aria-hidden="true">#</a> C\xF3mo utilizar el Long Polling</h2><p>LLame a</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para ejecutar su bot con una forma muy simple de long polling. Procesa todas las actualizaciones secuencialmente. Esto hace que tu bot sea muy f\xE1cil de depurar, y todo el comportamiento muy predecible, porque no hay concurrencia involucrada.</p>`,4),L=a("Si quieres que tus mensajes sean manejados concurrentemente por grammY, o te preocupa el rendimiento, revisa la secci\xF3n sobre "),A=a("grammY runner"),Y=a("."),B=o('<h2 id="como-usar-webhooks" tabindex="-1"><a class="header-anchor" href="#como-usar-webhooks" aria-hidden="true">#</a> C\xF3mo usar Webhooks</h2><p>Si quieres ejecutar grammY con webhooks, puedes integrar tu bot en un servidor web. Por lo tanto, esperamos que seas capaz de poner en marcha un servidor web simple con un framework de tu elecci\xF3n.</p><p>Cada bot de grammY puede convertirse en un middleware para un n\xFAmero de frameworks web, incluyendo <code>express</code>, <code>koa</code>/<code>oak</code>, y m\xE1s. Puedes importar la funci\xF3n <code>webhook<wbr>Callback</code> de grammY para convertir tu bot en middleware para el respectivo framework.</p>',3),N=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),a(" express "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},'"express"'),e("span",{class:"token punctuation"},";"),a(`

`),e("span",{class:"token keyword"},"const"),a(" app "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token function"},"express"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"// o lo que sea que est\xE9s usando"),a(`
app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),a("express"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"json"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"// analiza el cuerpo de la petici\xF3n JSON"),a(`

`),e("span",{class:"token comment"},'// "express" tambi\xE9n se utiliza por defecto si no se da ning\xFAn argumento.'),a(`
app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"webhookCallback"),e("span",{class:"token punctuation"},"("),a("bot"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"express"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),a(" express "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token function"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"express"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(`

`),e("span",{class:"token keyword"},"const"),a(" app "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token function"},"express"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"// o lo que sea que est\xE9s usando"),a(`
app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),a("express"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"json"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"// analiza el cuerpo de la petici\xF3n JSON"),a(`

`),e("span",{class:"token comment"},'// "express" tambi\xE9n se utiliza por defecto si no se da ning\xFAn argumento.'),a(`
app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"webhookCallback"),e("span",{class:"token punctuation"},"("),a("bot"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"express"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token punctuation"},"{"),a(" Application "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},'"https://deno.land/x/oak/mod.ts"'),e("span",{class:"token punctuation"},";"),a(`

`),e("span",{class:"token keyword"},"const"),a(" app "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"Application"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"// o lo que sea que est\xE9s usando"),a(`

`),e("span",{class:"token comment"},"// Aseg\xFArese de especificar el framework que utiliza."),a(`
app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"webhookCallback"),e("span",{class:"token punctuation"},"("),a("bot"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"oak"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=a("Aseg\xFArate de leer "),I={href:"https://core.telegram.org/bots/webhooks",target:"_blank",rel:"noopener noreferrer"},O=a("Marvin\u2019s Marvellous Guide to All Things Webhook"),D=a(" escrita por el equipo de Telegram si consideras ejecutar tu bot con webhooks en un VPS."),H=o('<h3 id="webhook-reply" tabindex="-1"><a class="header-anchor" href="#webhook-reply" aria-hidden="true">#</a> Webhook Reply</h3><p>Cuando se recibe una solicitud de webhook, tu bot puede llamar hasta un m\xE9todo en la respuesta. Como ventaja, esto evita que tu bot tenga que hacer hasta una petici\xF3n HTTP por actualizaci\xF3n. Sin embargo, hay una serie de inconvenientes al utilizar esto:</p><ol><li>No podr\xE1s manejar los posibles errores de la respectiva llamada a la API. Esto incluye los errores de limitaci\xF3n de velocidad, por lo que en realidad no tendr\xE1s la garant\xEDa de que tu petici\xF3n tenga alg\xFAn efecto.</li><li>M\xE1s importante a\xFAn, tampoco tendr\xE1s acceso al objeto de respuesta. Por ejemplo, llamar a <code>send<wbr>Message</code> no te dar\xE1 acceso al mensaje que env\xEDes.</li><li>Adem\xE1s, no es posible cancelar la petici\xF3n. La se\xF1al <code>Abort<wbr>Signal</code> no ser\xE1 tenida en cuenta.</li><li>\xA1Ten en cuenta tambi\xE9n que los tipos en grammY no reflejan las consecuencias de una devoluci\xF3n de llamada de webhooks realizada! Por ejemplo, indican que siempre se recibe un objeto de respuesta, por lo que es tu propia responsabilidad asegurarte de que no est\xE1s metiendo la pata al utilizar esta peque\xF1a optimizaci\xF3n de rendimiento.</li></ol>',3),V=a("Si quieres usar las respuestas de los webhooks, puedes especificar la opci\xF3n "),G=e("code",null,[a("can"),e("wbr"),a("Use"),e("wbr"),a("Webhook"),e("wbr"),a("Reply")],-1),M=a(" en la opci\xF3n "),J=e("code",null,"client",-1),Q=a(" de tu "),F=e("code",null,[a("Bot"),e("wbr"),a("Config")],-1),K=a(" ("),X={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotConfig",target:"_blank",rel:"noopener noreferrer"},Z=a("Referencia API"),$=a("). Pasar una funci\xF3n que determine si se utiliza o no la respuesta del webhook para la solicitud dada, identificada por el m\xE9todo."),ee=o(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Aceptamos el inconveniente de las respuestas del webhook para escribir el estado.</span>
    <span class="token function-variable function">canUseWebhookReply</span><span class="token operator">:</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> method <span class="token operator">===</span> <span class="token string">&quot;sendChatAction&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As\xED es como funcionan las respuestas de los webhooks bajo el cap\xF3.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            |                                   |           |
|            |                                   |           |
|            |         *ambos esperando*         |           |
|            |                                   |           |
|  Telegram  |                                   |    Bot    |
|            |                                   |           |
|            |                                   |           |
|            |   ---  hola, nuevo mensaje  ---&gt;  |           |
|            |  &lt;--- vale, y sendChatAction ---  |           |
|____________|                                   |___________|
</code></pre></div><h3 id="terminar-las-solicitudes-de-webhooks-a-tiempo" tabindex="-1"><a class="header-anchor" href="#terminar-las-solicitudes-de-webhooks-a-tiempo" aria-hidden="true">#</a> Terminar las solicitudes de Webhooks a tiempo</h3><blockquote><p>Puedes ignorar el resto de esta p\xE1gina si todo tu middleware se completa r\xE1pidamente, es decir, en pocos segundos. Esta secci\xF3n es principalmente para la gente que quiere hacer transferencias de archivos en respuesta a los mensajes, u otras operaciones que necesitan m\xE1s tiempo.</p></blockquote>`,5),ae=a("Cuando Telegram env\xEDa una actualizaci\xF3n de un chat a tu bot, esperar\xE1 a que termines la solicitud antes de entregar la siguiente actualizaci\xF3n que pertenece a ese chat. En otras palabras, Telegram entregar\xE1 las actualizaciones del mismo chat en secuencia, y las actualizaciones de diferentes chats se env\xEDan de forma concurrente. (La fuente de esta informaci\xF3n es "),ne={href:"https://github.com/tdlib/telegram-bot-api/issues/75#issuecomment-755436496",target:"_blank",rel:"noopener noreferrer"},oe=a("aqu\xED"),se=a(".)"),te=o(`<p>Telegram intenta asegurarse de que tu bot reciba todas las actualizaciones. Esto significa que si la entrega de una actualizaci\xF3n falla para un chat, las actualizaciones posteriores se pondr\xE1n en cola hasta que la primera actualizaci\xF3n tenga \xE9xito.</p><h4 id="por-que-no-terminar-una-solicitud-de-webhook-es-peligroso" tabindex="-1"><a class="header-anchor" href="#por-que-no-terminar-una-solicitud-de-webhook-es-peligroso" aria-hidden="true">#</a> Por qu\xE9 no terminar una solicitud de webhook es peligroso</h4><p>Telegram tiene un tiempo de espera para cada actualizaci\xF3n que env\xEDa a tu endpoint de webhook. Si no terminas una solicitud de webhook lo suficientemente r\xE1pido, Telegram volver\xE1 a enviar la actualizaci\xF3n, asumiendo que no fue entregada. Como resultado, tu bot puede procesar inesperadamente la misma actualizaci\xF3n varias veces. Esto significa que realizar\xE1 todo el manejo de la actualizaci\xF3n, incluyendo el env\xEDo de cualquier mensaje de respuesta, m\xFAltiples veces.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            | ---   hola, nuevo mensaje  ---&gt;   |           |
|            |                              .    |           |
|            |        *bot procesando*      .    |           |
|            |                              .    |           |
|  Telegram  | --- \xA1He dicho nuevo mensaje! ---&gt; |    Bot    |
|            |                              ..   |           |
|            |    *bot procesando ambos*    ..   |           |
|            |                              ..   |           |
|            | ---      HOOOOLAAAAA      ---&gt;    |           |
|            |                              ...  |           |
|            |   *bot procesando todos *    ...  |           |
|____________|                              ...  |___________|
</code></pre></div><p>Por eso grammY tiene su propio tiempo de espera, m\xE1s corto, dentro de <code>webhook<wbr>Callback</code> (por defecto: 10 segundos). Si tu middleware termina antes de eso, la funci\xF3n <code>webhook<wbr>Callback</code> responder\xE1 al webhook autom\xE1ticamente. En ese caso, todo est\xE1 bien. Sin embargo, si tu middleware no termina antes del tiempo de espera de grammY, <code>webhook<wbr>Callback</code> lanzar\xE1 un error. Esto significa que puedes manejar el error en tu framework web. Si no tienes ese manejo de errores, Telegram enviar\xE1 la misma actualizaci\xF3n de nuevo, pero al menos tendr\xE1s registros de errores ahora, para decirte que algo est\xE1 mal.</p><p>Una vez que Telegram env\xEDa una actualizaci\xF3n a tu bot por segunda vez, es poco probable que su manejo sea m\xE1s r\xE1pido que la primera vez. Como resultado, es probable que se agote el tiempo de espera de nuevo, y que Telegram env\xEDe la actualizaci\xF3n de nuevo. As\xED, tu bot no s\xF3lo ver\xE1 la actualizaci\xF3n dos veces, sino unas cuantas docenas de veces, hasta que Telegram deje de reintentar. Puedes observar que tu bot comienza a enviar spam a los usuarios mientras intenta manejar todas esas actualizaciones (que de hecho son las mismas cada vez).</p><h4 id="por-que-terminar-una-peticion-de-webhook-antes-de-tiempo-tambien-es-peligroso" tabindex="-1"><a class="header-anchor" href="#por-que-terminar-una-peticion-de-webhook-antes-de-tiempo-tambien-es-peligroso" aria-hidden="true">#</a> Por qu\xE9 terminar una petici\xF3n de webhook antes de tiempo tambi\xE9n es peligroso</h4><p>Puedes configurar <code>webhook<wbr>Callback</code> para que no lance un error despu\xE9s del tiempo de espera, sino que termine la petici\xF3n de webhook antes de tiempo, aunque tu middleware siga funcionando. Puedes hacer esto pasando <code>&quot;return&quot;</code> como tercer argumento a <code>webhook<wbr>Callback</code>, en lugar del valor por defecto <code>&quot;throw&quot;</code>. Sin embargo, aunque este comportamiento tiene algunos casos de uso v\xE1lidos, esta soluci\xF3n suele causar m\xE1s problemas de los que resuelve.</p>`,8),ie=a("Recuerda que una vez que respondas a una solicitud de webhook, Telegram enviar\xE1 la siguiente actualizaci\xF3n para ese chat. Sin embargo, como la antigua actualizaci\xF3n todav\xEDa se est\xE1 procesando, dos actualizaciones que antes se procesaban secuencialmente, de repente se procesan en paralelo. Esto puede llevar a condiciones de carrera. Por ejemplo, el plugin de sesi\xF3n se romper\xE1 inevitablemente debido a los peligros de "),re={href:"https://en.wikipedia.org/wiki/Hazard_(computer_architecture)#Write_after_read_(WAR)",target:"_blank",rel:"noopener noreferrer"},le=a("WAR"),ce=a(". "),ue=e("strong",null,"Esto provoca la p\xE9rdida de datos.",-1),de=a(" Otros plugins e incluso su propio middleware pueden romperse tambi\xE9n. El alcance de esto es desconocido y depende de tu bot."),pe=o(`<h4 id="como-resolver-este-problema" tabindex="-1"><a class="header-anchor" href="#como-resolver-este-problema" aria-hidden="true">#</a> C\xF3mo resolver este problema</h4><p>Esta respuesta es m\xE1s f\xE1cil de decir que de hacer. <strong>Es tu trabajo asegurarte de que tu middleware termine lo suficientemente r\xE1pido.</strong> No utilices middleware de larga duraci\xF3n. S\xED, sabemos que tal vez <em>quieras</em> tener tareas de larga duraci\xF3n. Sin embargo. No lo hagas. No en tu middleware.</p><p>En su lugar, utiliza una cola (hay un mont\xF3n de sistemas de cola por ah\xED, desde los m\xE1s simples hasta los m\xE1s sofisticados). En lugar de intentar realizar todo el trabajo en la peque\xF1a ventana de tiempo de espera del webhook, simplemente a\xF1ade la tarea a la cola para que se gestione por separado, y deja que tu middleware la complete. La cola puede utilizar todo el tiempo que quiera. Cuando haya terminado, puede enviar un mensaje de vuelta al chat. Esto es sencillo de hacer si se utiliza una simple cola en memoria. Puede ser un poco m\xE1s desafiante si est\xE1s usando un sistema de colas externo tolerante a fallos, que persiste el estado de todas las tareas, y puede reintentar las cosas incluso si tu servidor muere repentinamente.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>______________                                   _____________
|            |                                   |           |
|            |   ---  hola, nuevo mensaje ---&gt;   |           |
|            |  &lt;---    gracias amigo     ---.   |           |
|            |                               .   |           |
|            |                               .   |           |
|  Telegram  |   *cola del bot funcionando*  .   |    Bot    |
|            |                               .   |           |
|            |                               .   |           |
|            | &lt;--- mensaje con el resultado --- |           |
|            |   ---       muy bien       ---&gt;   |           |
|____________|                                   |___________|
</code></pre></div><h4 id="por-que-return-es-generalmente-peor-que-throw" tabindex="-1"><a class="header-anchor" href="#por-que-return-es-generalmente-peor-que-throw" aria-hidden="true">#</a> Por qu\xE9 <code>&quot;return&quot;</code> es generalmente peor que <code>&quot;throw&quot;</code></h4><p>Puede que te preguntes por qu\xE9 la acci\xF3n por defecto de <code>webhook<wbr>Callback</code> es lanzar un error, en lugar de terminar la petici\xF3n con \xE9xito. Esta elecci\xF3n de dise\xF1o se hizo por las siguientes razones.</p><p>Las condiciones de carrera son muy dif\xEDciles de reproducir y pueden ocurrir muy raramente o de forma espor\xE1dica. La soluci\xF3n a esto es <em>asegurarse de no encontrarse con timeouts</em> en primer lugar. Pero, si lo hace, realmente quiere saber que esto est\xE1 ocurriendo, para poder investigar y solucionar el problema. Por esa raz\xF3n, usted quiere que el error ocurra en sus registros. Configurar el manejador de tiempo de espera como <code>&quot;return&quot;</code>, suprimiendo as\xED el tiempo de espera y pretendiendo que no ha pasado nada, es exactamente lo contrario de un comportamiento \xFAtil.</p><p>Si haces esto, en cierto sentido est\xE1s usando la cola de actualizaci\xF3n en la entrega de webhooks de Telegram como tu cola de tareas. Esto es una mala idea por todas las razones descritas anteriormente. S\xF3lo porque grammY <em>pueda</em> suprimir errores que pueden hacerte perder tus datos, no significa que <em>deber\xEDas</em> dec\xEDrselo. Este ajuste de configuraci\xF3n no debe ser utilizado en los casos en que su middleware simplemente toma demasiado tiempo para completar. T\xF3mese el tiempo necesario para solucionar correctamente este problema, y su futuro yo (y los usuarios) se lo agradecer\xE1n.</p>`,8);function me(_e,ge){const s=i("ExternalLinkIcon"),l=i("RouterLink"),r=i("CodeGroupItem"),c=i("CodeGroup");return d(),p("div",null,[_,e("blockquote",null,[e("p",null,[g,e("a",h,[b,n(s)]),k])]),v,e("p",null,[f,e("a",q,[w,n(s)]),y]),j,z,x,T,e("p",null,[C,n(l,{to:"/es/guide/middleware.html"},{default:t(()=>[E]),_:1}),P]),S,e("p",null,[L,n(l,{to:"/es/plugins/runner.html"},{default:t(()=>[A]),_:1}),Y]),B,n(c,null,{default:t(()=>[n(r,{title:"TypeScript",active:""},{default:t(()=>[N]),_:1}),n(r,{title:"JavaScript"},{default:t(()=>[R]),_:1}),n(r,{title:"Deno"},{default:t(()=>[W]),_:1})]),_:1}),e("p",null,[U,e("a",I,[O,n(s)]),D]),H,e("p",null,[V,G,M,J,Q,F,K,e("a",X,[Z,n(s)]),$]),ee,e("p",null,[ae,e("a",ne,[oe,n(s)]),se]),te,e("p",null,[ie,e("a",re,[le,n(s)]),ce,ue,de]),pe])}const be=u(m,[["render",me],["__file","deployment-types.html.vue"]]);export{be as default};
