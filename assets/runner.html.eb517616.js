import{_ as p,r as o,o as m,c as _,b as s,w as t,a as e,d as n,e as r}from"./app.1137d7ac.js";const h={},k=e("h1",{id:"concurrencia-con-grammy-runner-runner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concurrencia-con-grammy-runner-runner","aria-hidden":"true"},"#"),n(" Concurrencia con grammY runner ("),e("code",null,"runner"),n(")")],-1),b=n("Este paquete se puede utilizar si ejecutas tu bot "),g=n("usando long polling"),f=n(", y quieres que los mensajes se procesen concurrentemente."),v=n("Aseg\xFArate de entender "),y=n("Scaling Up II"),w=n(" antes de usar el runner de grammY."),q=e("h2",{id:"por-que-necesitamos-un-bot-runner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#por-que-necesitamos-un-bot-runner","aria-hidden":"true"},"#"),n(" Por qu\xE9 necesitamos un Bot Runner")],-1),x=e("p",null,"Si est\xE1s alojando tu bot usando long polling y quieres hacerlo escalar, no hay forma de procesar las actualizaciones de forma concurrente ya que el procesamiento secuencial de las actualizaciones es demasiado lento. Como resultado, los bots se enfrentan a una serie de retos.",-1),j=e("ul",null,[e("li",null,"\xBFExisten condiciones de carrera?"),e("li",null,"\xBFPodemos seguir \u201Cesperando\u201D la pila de middleware? \xA1Debemos tener esto para el manejo de errores!"),e("li",null,"\xBFQu\xE9 pasa si el middleware nunca se resuelve por alguna raz\xF3n, esto bloquea al bot?"),e("li",null,"\xBFPodemos limitar la carga del servidor?")],-1),z=n("Como puedes ver, necesitamos una soluci\xF3n que pueda resolver todos los problemas anteriores para conseguir un sondeo largo adecuado para un bot. Este es un problema muy distinto al de componer middleware o enviar mensajes a Telegram. En consecuencia, no est\xE1 resuelto por el paquete central de grammY. En su lugar, puedes utilizar "),E={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},C=n("grammY runner"),P=n(". Tambi\xE9n tiene su propia "),A={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},I=n("Referencia API"),S=n("."),B=e("h2",{id:"uso",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uso","aria-hidden":"true"},"#"),n(" Uso")],-1),R=e("p",null,"He aqu\xED un ejemplo sencillo.",-1),T=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" Bot "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"grammy"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" run "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"@grammyjs/runner"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Crear un bot."),n(`
`),e("span",{class:"token keyword"},"const"),n(" bot "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"new"),n(),e("span",{class:"token class-name"},"Bot"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"<token>"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// A\xF1ade el middleware habitual"),n(`
bot`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"on"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"message"'),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token punctuation"},"("),n("ctx"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(" ctx"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"reply"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Got your message."'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Ejec\xFAtalo de forma concurrente."),n(`
`),e("span",{class:"token function"},"run"),e("span",{class:"token punctuation"},"("),n("bot"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"const"),n(),e("span",{class:"token punctuation"},"{"),n(" Bot "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"grammy"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"const"),n(),e("span",{class:"token punctuation"},"{"),n(" run "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"@grammyjs/runner"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Crear un bot."),n(`
`),e("span",{class:"token keyword"},"const"),n(" bot "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"new"),n(),e("span",{class:"token class-name"},"Bot"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"<token>"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// A\xF1ade el middleware habitual"),n(`
bot`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"on"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"message"'),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token punctuation"},"("),n("ctx"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(" ctx"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"reply"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Got your message."'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Ejec\xFAtalo de forma concurrente."),n(`
`),e("span",{class:"token function"},"run"),e("span",{class:"token punctuation"},"("),n("bot"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" Bot "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" run "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Crear un bot."),n(`
`),e("span",{class:"token keyword"},"const"),n(" bot "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"new"),n(),e("span",{class:"token class-name"},"Bot"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"<token>"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// A\xF1ade el middleware habitual"),n(`
bot`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"on"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"message"'),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token punctuation"},"("),n("ctx"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(" ctx"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"reply"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Got your message."'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Ejec\xFAtalo de forma concurrente."),n(`
`),e("span",{class:"token function"},"run"),e("span",{class:"token punctuation"},"("),n("bot"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=r(`<p>Por supuesto, aunque esto parece muy simple, hay muchas cosas que suceden bajo el cap\xF3.</p><h2 id="como-funciona-entre-bastidores" tabindex="-1"><a class="header-anchor" href="#como-funciona-entre-bastidores" aria-hidden="true">#</a> C\xF3mo funciona entre bastidores</h2><p>Cada corredor consta de tres partes diferentes.</p><ol><li>La <strong>source</strong> extrae las actualizaciones de Telegram.</li><li>El <strong>sink</strong> suministra las actualizaciones a la instancia del bot.</li><li>El componente <strong>runner</strong> conecta la fuente y el sumidero, y te permite iniciar y detener tu bot.</li></ol><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>api.telegram.org &lt;\u2014&gt; source &lt;\u2014&gt; runner &lt;\u2014&gt; sink &lt;\u2014&gt; bot
</code></pre></div><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h3>`,6),Y=n("El runner de grammY viene con una fuente por defecto que puede operar con cualquier "),N=e("code",null,[n("Update"),e("wbr"),n("Supplier")],-1),D=n(" ("),F={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSupplier",target:"_blank",rel:"noopener noreferrer"},H=n("referencia API"),V=n("). Dicho proveedor de actualizaciones es sencillo de crear a partir de una instancia del bot. Si quieres crear uno t\xFA mismo, aseg\xFArate de consultar "),J=e("code",null,[n("create"),e("wbr"),n("Update"),e("wbr"),n("Fetcher")],-1),O=n(" ("),Q={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createUpdateFetcher",target:"_blank",rel:"noopener noreferrer"},K=n("referencia de la API"),M=n(")."),W=e("p",null,[n("El origen es un iterador as\xEDncrono de lotes de actualizaci\xF3n, pero puede estar activo o inactivo, y puedes "),e("code",null,"cerrarlo"),n(" para desconectarte de los servidores de Telegram.")],-1),X=e("h3",{id:"sink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sink","aria-hidden":"true"},"#"),n(" Sink")],-1),Z=n("grammY runner viene con tres posibles implementaciones de sumideros, uno secuencial (el mismo comportamiento que "),$=e("code",null,[n("bot"),e("wbr"),n(".start()")],-1),ee=n("), uno por lotes (principalmente \xFAtil para la compatibilidad con otros frameworks), y uno totalmente concurrente (utilizado por "),ne=e("code",null,"run",-1),se=n("). Todos ellos operan con objetos "),ae=e("code",null,[n("Update"),e("wbr"),n("Consumer")],-1),te=n(" ("),oe={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateConsumer",target:"_blank",rel:"noopener noreferrer"},ce=n("referencia de la API"),re=n(") que son f\xE1ciles de crear a partir de una instancia del bot. Si quieres hacer uno t\xFA mismo, aseg\xFArate de revisar "),ie=e("code",null,[n("handle"),e("wbr"),n("Update")],-1),le=n(" en la instancia "),ue=e("code",null,"Bot",-1),de=n(" de grammY ("),pe={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},me=n("referencia API"),_e=n(")."),he=n("El sumidero contiene una cola ("),ke={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/DecayingDeque",target:"_blank",rel:"noopener noreferrer"},be=n("referencia de la API"),ge=n(") de actualizaciones individuales que se est\xE1n procesando actualmente. A\xF1adir nuevas actualizaciones a la cola har\xE1 que el consumidor de actualizaciones las maneje inmediatamente, y devolver\xE1 una promesa que se resuelve tan pronto como haya capacidad en la cola de nuevo. El n\xFAmero integral resuelto determina el espacio libre. Por lo tanto, el establecimiento de un l\xEDmite de concurrencia para el corredor grammY se respeta a trav\xE9s de la instancia de cola subyacente."),fe=r('<p>La cola tambi\xE9n arroja las actualizaciones que tardan demasiado en procesarse, y se puede especificar un <code>timeout<wbr>Handler</code> al crear el sumidero respectivo. Por supuesto, tambi\xE9n debes proporcionar un manejador de errores al crear un sumidero.</p><p>Si utilizas <code>run(bot)</code>, se utilizar\xE1 el gestor de errores de <code>bot<wbr>.catch</code>.</p><h3 id="runner" tabindex="-1"><a class="header-anchor" href="#runner" aria-hidden="true">#</a> Runner</h3><p>El runner es un bucle simple que extrae las actualizaciones del source y las suministra al sink. Una vez que el sumidero tiene espacio de nuevo, el runner obtendr\xE1 el siguiente lote de actualizaciones del source.</p>',4),ve=n("Cuando creas un runner con "),ye=e("code",null,[n("create"),e("wbr"),n("Runner")],-1),we=n(" ("),qe={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createRunner",target:"_blank",rel:"noopener noreferrer"},xe=n("referencia de la API"),je=n("), obtienes un manejador que puedes usar para controlar el runner. Por ejemplo, te permite iniciarlo y detenerlo, u obtener una promesa que resuelve si el runner se detiene. (Este handle tambi\xE9n es devuelto por "),ze=e("code",null,"run",-1),Ee=n("). Consulta la "),Ce={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/RunnerHandle",target:"_blank",rel:"noopener noreferrer"},Pe=n("referencia API"),Ae=n(" del "),Ie=e("code",null,[n("Runner"),e("wbr"),n("Handle")],-1),Se=n("."),Be=e("h2",{id:"procesamiento-secuencial-cuando-sea-necesario",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#procesamiento-secuencial-cuando-sea-necesario","aria-hidden":"true"},"#"),n(" Procesamiento secuencial cuando sea necesario")],-1),Re=n("Lo m\xE1s probable es que quieras tener la garant\xEDa de que los mensajes de un mismo chat se procesen en orden. Esto es \xFAtil cuando se instala "),Te=n("session middleware"),Ue=n(", pero tambi\xE9n asegura que tu bot no confunda el orden de los mensajes en el mismo chat."),Ge=n("grammY runner exporta el middleware "),Le=e("code",null,"sequentialize",-1),Ye=n(" que se encarga de esto. Puedes consultar "),Ne=n("esta secci\xF3n"),De=n(" para aprender a usarlo."),Fe=r(`<p>Ahora vamos a ver un uso m\xE1s avanzado del plugin.</p><p>La funci\xF3n de restricci\xF3n suministrada puede usarse no s\xF3lo para especificar el identificador del chat, o el identificador del usuario. En su lugar, puede devolver <em>una lista de cadenas de identificadores de restricciones</em> que determinan para cada actualizaci\xF3n individualmente qu\xE9 otros c\xE1lculos debe esperar antes de que pueda comenzar el procesamiento.</p><p>Por ejemplo, podr\xEDa devolver tanto el identificador de chat como el identificador de usuario del autor del mensaje.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> chat <span class="token operator">=</span> ctx<span class="token punctuation">.</span>chat<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>chat<span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> con <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto asegurar\xEDa que los mensajes en el mismo chat se ordenen correctamente. Adem\xE1s, si Alice env\xEDa un mensaje en un grupo, y luego env\xEDa un mensaje a tu bot en el chat privado, entonces estos dos mensajes se ordenan correctamente.</p><p>En cierto sentido, puedes especificar un gr\xE1fico de dependencias entre actualizaciones. El corredor de grammY resolver\xE1 todas las restricciones necesarias sobre la marcha y bloquear\xE1 esas actualizaciones todo el tiempo que sea necesario para garantizar un ordenamiento correcto de los mensajes.</p><p>La implementaci\xF3n de esto es muy eficiente. Necesita memoria constante (a menos que se especifique una concurrencia infinita), y necesita un tiempo de procesamiento constante (amortizado) por actualizaci\xF3n.</p><h2 id="graceful-shutdown" tabindex="-1"><a class="header-anchor" href="#graceful-shutdown" aria-hidden="true">#</a> Graceful shutdown</h2>`,8),He=n("Para que el bot complete su trabajo correctamente, debes "),Ve=n("indicarle"),Je=n(" que se detenga cuando el proceso est\xE9 a punto de ser destruido."),Oe=e("h2",{id:"resumen-del-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resumen-del-plugin","aria-hidden":"true"},"#"),n(" Resumen del plugin")],-1),Qe=e("li",null,[n("Nombre: "),e("code",null,"runner")],-1),Ke=n("Fuente: "),Me={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},We=n("https://"),Xe=e("wbr",null,null,-1),Ze=n("github"),$e=e("wbr",null,null,-1),en=n(".com"),nn=e("wbr",null,null,-1),sn=n("/grammyjs"),an=e("wbr",null,null,-1),tn=n("/runner"),on=n("Referencia: "),cn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},rn=r("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_runner<wbr>/mod<wbr>.ts",23);function ln(un,dn){const l=o("Tag"),u=o("TagGroup"),c=o("RouterLink"),a=o("ExternalLinkIcon"),i=o("CodeGroupItem"),d=o("CodeGroup");return m(),_("div",null,[k,s(u,null,{default:t(()=>[s(l,{type:"official",text:"OFICIAL"})]),_:1}),e("p",null,[b,s(c,{to:"/es/guide/deployment-types.html"},{default:t(()=>[g]),_:1}),f]),e("blockquote",null,[e("p",null,[v,s(c,{to:"/es/advanced/scaling.html#long-polling"},{default:t(()=>[y]),_:1}),w])]),q,x,j,e("p",null,[z,e("a",E,[C,s(a)]),P,e("a",A,[I,s(a)]),S]),B,R,s(d,null,{default:t(()=>[s(i,{title:"TypeScript",active:""},{default:t(()=>[T]),_:1}),s(i,{title:"JavaScript"},{default:t(()=>[U]),_:1}),s(i,{title:"Deno"},{default:t(()=>[G]),_:1})]),_:1}),L,e("p",null,[Y,N,D,e("a",F,[H,s(a)]),V,J,O,e("a",Q,[K,s(a)]),M]),W,X,e("p",null,[Z,$,ee,ne,se,ae,te,e("a",oe,[ce,s(a)]),re,ie,le,ue,de,e("a",pe,[me,s(a)]),_e]),e("p",null,[he,e("a",ke,[be,s(a)]),ge]),fe,e("p",null,[ve,ye,we,e("a",qe,[xe,s(a)]),je,ze,Ee,e("a",Ce,[Pe,s(a)]),Ae,Ie,Se]),Be,e("p",null,[Re,s(c,{to:"/es/plugins/session.html"},{default:t(()=>[Te]),_:1}),Ue]),e("p",null,[Ge,Le,Ye,s(c,{to:"/es/advanced/scaling.html#la-concurrencia-es-dificil"},{default:t(()=>[Ne]),_:1}),De]),Fe,e("p",null,[He,s(c,{to:"/es/advanced/reliability.html#usando-grammy-runner"},{default:t(()=>[Ve]),_:1}),Je]),Oe,e("ul",null,[Qe,e("li",null,[Ke,e("a",Me,[We,Xe,Ze,$e,en,nn,sn,an,tn,s(a)])]),e("li",null,[on,e("a",cn,[rn,s(a)])])])])}const mn=p(h,[["render",ln],["__file","runner.html.vue"]]);export{mn as default};
