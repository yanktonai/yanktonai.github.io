import{_ as r,r as c,o as p,c as l,a as s,b as a,w as t,d as e,e as i}from"./app.ff0cf306.js";const d={},u=s("h1",{id:"api-del-bot",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#api-del-bot","aria-hidden":"true"},"#"),e(" API del Bot")],-1),m=s("h2",{id:"informacion-general",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#informacion-general","aria-hidden":"true"},"#"),e(" Informaci\xF3n general")],-1),h=e("Los bots de Telegram se comunican con los servidores de Telegram a trav\xE9s de peticiones HTTP. La API del bot de Telegram es la especificaci\xF3n de esta interfaz, es decir, una "),b={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},_=e("lista larga"),k=e(" de m\xE9todos y tipos de datos, com\xFAnmente llamada referencia. Define todo lo que los bots de Telegram pueden hacer. Puedes encontrarla enlazada en la pesta\xF1a de Recursos."),g=s("p",null,"La configuraci\xF3n se puede visualizar as\xED:",-1),v=s("div",{class:"language-asciiart ext-asciiart"},[s("pre",{class:"language-asciiart"},[s("code",null,`( ( ( Telegram ) MTProto API ) Bot HTTP API ) <-- el bot se conecta aqu\xED
`)])],-1),f=e("En otras palabras: cuando tu bot env\xEDe un mensaje, ser\xE1 enviado como una petici\xF3n HTTP a un servidor "),y=s("em",null,"Bot API",-1),q=e(" (ya sea alojado por el equipo de Telegram, o "),w={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},j=e("alojado por ti"),P=e("). Este servidor traducir\xE1 la petici\xF3n al protocolo nativo de Telegram llamado MTProto, y enviar\xE1 una petici\xF3n al backend de Telegram que se encarga de enviar el mensaje al usuario."),x=s("p",null,"De forma an\xE1loga, cada vez que un usuario responde, se realiza el camino inverso.",-1),T={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"Rludir los l\xEDmites de tama\xF1o de los archivos",-1),I=e("El backend de Telegram permite a tu bot "),B=e("enviar archivos"),M=e(" de hasta 2000 MB. Sin embargo, el servidor de la API del bot que se encarga de traducir las peticiones a HTTP restringe el tama\xF1o de los archivos a 50 MB para las descargas y 20 MB para las subidas."),E=e("Por lo tanto, si evitas el servidor Bot API que Telegram ejecuta por ti, y simplemente "),H={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},N=e("alojas tu propio servidor Bot API"),L=e(", puedes permitir que tu bot env\xEDe archivos de hasta 2000 MB."),z=e("Nota: si est\xE1s trabajando con archivos grandes a trav\xE9s de "),S=e("long polling"),Y=e(", deber\xEDas usar "),C=e("grammY runner"),D=e("."),R=s("h2",{id:"llamar-a-la-api-del-bot",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#llamar-a-la-api-del-bot","aria-hidden":"true"},"#"),e(" Llamar a la API del Bot")],-1),O=e("Cada m\xE9todo de la API del Bot tiene un equivalente en grammY. Ejemplo: "),J=s("code",null,[e("send"),s("wbr"),e("Message")],-1),V=e(" en el "),F={href:"https://core.telegram.org/bots/api#sendmessage",target:"_blank",rel:"noopener noreferrer"},G=e("Telegram Bot API Reference"),K=e(" y en el "),Q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api#sendMessage",target:"_blank",rel:"noopener noreferrer"},U=e("grammY API Reference"),W=e("."),X=s("h3",{id:"llamar-a-un-metodo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#llamar-a-un-metodo","aria-hidden":"true"},"#"),e(" Llamar a un M\xE9todo")],-1),Z=e("Puedes llamar a los m\xE9todos de la API a trav\xE9s de "),$=s("code",null,[e("bot"),s("wbr"),e(".api")],-1),ee=e(", o "),se=e("equivalentemente"),ae=e(" a trav\xE9s de "),ne=s("code",null,[e("ctx"),s("wbr"),e(".api")],-1),oe=e(":"),te=i(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Env\xEDa un mensaje a 12345.</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;\xA1Hola!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Env\xEDa un mensaje y almacena la respuesta, que contiene informaci\xF3n sobre el mensaje enviado.</span>
  <span class="token keyword">const</span> sentMessage <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;\xA1Hola de nuevo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sentMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aunque <code>bot<wbr>.api</code> cubre toda la API del Bot, a veces cambia un poco las firmas de las funciones para hacerlas m\xE1s usables. Estrictamente hablando, todos los m\xE9todos de la API del Bot esperan un objeto JSON con una serie de propiedades. F\xEDjate, sin embargo, en que <code>send<wbr>Message</code> en el ejemplo anterior recibe dos argumentos, un identificador de chat y una cadena. grammY sabe que estos dos valores pertenecen a la propiedad <code>chat<wbr>_id</code> y <code>text</code>, respectivamente, y construir\xE1 el objeto JSON correcto para ti.</p>`,2),ie=e("Como se mencion\xF3 "),ce=e("anteriormente"),re=e(", puede especificar otras opciones en el tercer argumento de tipo "),pe=s("code",null,"Other",-1),le=e(":"),de=i(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;i&gt;\xA1Hola!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adem\xE1s, grammY se encarga de numerosos detalles t\xE9cnicos para simplificar el uso de la API. Por ejemplo, algunas propiedades espec\xEDficas en algunos m\xE9todos espec\xEDficos tienen que ser <code>JSON<wbr>.stringify</code> antes de ser enviados. Esto es f\xE1cil de olvidar, dif\xEDcil de depurar y rompe la inferencia de tipos. grammY te permite especificar objetos de forma consistente a trav\xE9s de la API, y se asegura de que las propiedades correctas se serialicen sobre la marcha antes de enviarlas.</p><h3 id="definiciones-de-tipos-para-la-api" tabindex="-1"><a class="header-anchor" href="#definiciones-de-tipos-para-la-api" aria-hidden="true">#</a> Definiciones de tipos para la API</h3>`,3),ue=e("grammY viene con una cobertura completa de tipos de la API del Bot. El repositorio "),me={href:"https://github.com/grammyjs/types",target:"_blank",rel:"noopener noreferrer"},he=s("code",null,[e("@grammyjs"),s("wbr"),e("/types")],-1),be=e(" contiene las definiciones de tipos que grammY utiliza internamente. Estas definiciones de tipos tambi\xE9n se exportan para que puedas usarlas en tu propio c\xF3digo."),_e=i(`<h4 id="definiciones-de-tipos-en-node-js" tabindex="-1"><a class="header-anchor" href="#definiciones-de-tipos-en-node-js" aria-hidden="true">#</a> Definiciones de tipos en Node.js</h4><p>En Node.js, necesitas importar los tipos desde <code>grammy<wbr>/types</code>. Por ejemplo, puedes acceder al tipo <code>Chat</code> de esta manera:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy/types&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Oficialmente, Node.js s\xF3lo soporta la importaci\xF3n desde sub-rutas correctamente desde Node.js 16. En consecuencia, TypeScript requiere que el <code>module<wbr>Resolution</code> se establezca en <code>node16</code> o <code>nodenext</code>. Ajusta tu <code>tsconfig<wbr>.json</code> en consecuencia y a\xF1ade la l\xEDnea resaltada:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node16&quot;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sin embargo, esto tambi\xE9n puede funcionar a veces sin ajustar la configuraci\xF3n de TypeScript.</p><div class="custom-container warning"><p class="custom-container-title">Autocompletar incorrecto</p><p>Si no cambias tu archivo <code>tsconfig<wbr>.json</code> como se ha descrito anteriormente, puede ocurrir que tu editor de c\xF3digo sugiera en el autocompletado importar tipos de <code>grammy<wbr>/out<wbr>/client</code> o algo as\xED. **Todas las rutas que comienzan con <code>grammy<wbr>/out</code> son internas. No las utilices. Podr\xEDan cambiarse arbitrariamente en cualquier momento, por lo que te aconsejamos encarecidamente que importes desde <code>grammy<wbr>/types</code> en su lugar.</p></div><h4 id="definiciones-de-tipos-en-deno" tabindex="-1"><a class="header-anchor" href="#definiciones-de-tipos-en-deno" aria-hidden="true">#</a> Definiciones de tipos en Deno</h4><p>En Deno, puedes simplemente importar definiciones de tipos desde <code>types<wbr>.ts</code> que est\xE1 justo al lado de <code>mod<wbr>.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/types.ts&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="haciendo-llamadas-a-la-api-en-bruto" tabindex="-1"><a class="header-anchor" href="#haciendo-llamadas-a-la-api-en-bruto" aria-hidden="true">#</a> Haciendo llamadas a la API en bruto</h3><p>Puede haber ocasiones en las que quieras usar las firmas de las funciones originales, pero seguir confiando en la comodidad de la API de grammY (por ejemplo, serializando JSON cuando sea apropiado). grammY soporta esto a trav\xE9s de las propiedades <code>bot<wbr>.api<wbr>.raw</code> (o <code>ctx<wbr>.api<wbr>.raw</code>).</p><p>Puedes llamar a los m\xE9todos raw as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    chat_id<span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">&quot;&lt;i&gt;\xA1Hola!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B\xE1sicamente, todos los par\xE1metros de la firma de la funci\xF3n se fusionan con el objeto de opciones cuando se utiliza la API en bruto.</p>`,15);function ke(ge,ve){const n=c("ExternalLinkIcon"),o=c("RouterLink");return p(),l("div",null,[u,m,s("p",null,[h,s("a",b,[_,a(n)]),k]),g,v,s("p",null,[f,y,q,s("a",w,[j,a(n)]),P]),x,s("div",T,[A,s("p",null,[I,a(o,{to:"/es/guide/files.html"},{default:t(()=>[B]),_:1}),M]),s("p",null,[E,s("a",H,[N,a(n)]),L]),s("blockquote",null,[s("p",null,[z,a(o,{to:"/es/guide/deployment-types.html"},{default:t(()=>[S]),_:1}),Y,a(o,{to:"/es/plugins/runner.html"},{default:t(()=>[C]),_:1}),D])])]),R,s("p",null,[O,J,V,s("a",F,[G,a(n)]),K,s("a",Q,[U,a(n)]),W]),X,s("p",null,[Z,$,ee,a(o,{to:"/es/guide/context.html#acciones-disponibles"},{default:t(()=>[se]),_:1}),ae,ne,oe]),te,s("p",null,[ie,a(o,{to:"/es/guide/basics.html#env%C3%ADo-de-mensajes"},{default:t(()=>[ce]),_:1}),re,pe,le]),de,s("p",null,[ue,s("a",me,[he,a(n)]),be]),_e])}const ye=r(d,[["render",ke],["__file","api.html.vue"]]);export{ye as default};
