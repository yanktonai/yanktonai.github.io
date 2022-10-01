import{_ as d,r as a,o as m,c as _,b as t,w as s,a as e,d as n,e as r}from"./app.ff0cf306.js";const b={},k=e("h1",{id:"reintentar-solicitudes-de-la-api-auto-retry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reintentar-solicitudes-de-la-api-auto-retry","aria-hidden":"true"},"#"),n(" Reintentar solicitudes de la API ("),e("code",null,[n("auto"),e("wbr"),n("-retry")]),n(")")],-1),g=n("Considera usar el "),h=n("plugin throttler"),f=n(" en su lugar."),y=n("Este plugin es una "),v=n("funci\xF3n transformadora de la API"),w=n(", lo que significa que le permite interceptar y modificar las peticiones HTTP salientes sobre la marcha. M\xE1s concretamente, este plugin detectar\xE1 autom\xE1ticamente si una petici\xF3n de la API falla con un valor "),x=e("code",null,[n("retry"),e("wbr"),n("_after")],-1),j=n(", es decir, debido a la limitaci\xF3n de velocidad. Entonces atrapar\xE1 el error, esperar\xE1 el per\xEDodo de tiempo especificado, y luego reintentar\xE1 la solicitud."),R=r('<div class="custom-container warning"><p class="custom-container-title">Sea amable con el servidor de la API del bot</p><p>Telegram proporciona generosamente informaci\xF3n sobre cu\xE1nto tiempo debe esperar tu bot antes de la siguiente solicitud. Usar el plugin <code>auto<wbr>-retry</code> permitir\xE1 a tu bot rendir mejor durante los picos de carga, ya que las peticiones no fallar\xE1n simplemente por el l\xEDmite de inundaci\xF3n. Sin embargo, <strong>auto-retry no deber\xEDa ser usado</strong> si quieres evitar golpear los l\xEDmites de velocidad de forma regular. Si regularmente cruzas el umbral de la cantidad de solicitudes que puedes realizar, Telegram puede tomar medidas como restringir o prohibir tu bot.</p></div><p>Puedes instalar este plugin en el objeto <code>bot<wbr>.api</code>:</p>',2),T=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" autoRetry "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"@grammyjs/auto-retry"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Usa el plugin."),n(`
bot`),e("span",{class:"token punctuation"},"."),n("api"),e("span",{class:"token punctuation"},"."),n("config"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"autoRetry"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),n(),e("span",{class:"token punctuation"},"{"),n(" autoRetry "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"@grammyjs/auto-retry"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Usa el plugin."),n(`
bot`),e("span",{class:"token punctuation"},"."),n("api"),e("span",{class:"token punctuation"},"."),n("config"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"autoRetry"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" autoRetry "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"https://esm.sh/@grammyjs/auto-retry"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"// Usa el plugin."),n(`
bot`),e("span",{class:"token punctuation"},"."),n("api"),e("span",{class:"token punctuation"},"."),n("config"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"use"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"autoRetry"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=r(`<p>Si ahora llama, por ejemplo, a <code>send<wbr>Message</code> y se encuentra con un l\xEDmite de velocidad, parecer\xE1 que la petici\xF3n tarda un tiempo inusual. Bajo el cap\xF3, se est\xE1n realizando m\xFAltiples peticiones HTTP, con los retrasos apropiados entre ellas.</p><p>Puede pasar un objeto de opciones que especifique un n\xFAmero m\xE1ximo de reintentos (<code>max<wbr>Retry<wbr>Attempts</code>, por defecto: 3), o un umbral para un tiempo m\xE1ximo de espera (<code>max<wbr>Delay<wbr>Seconds</code>, por defecto: 1 hora).</p><p>Tan pronto como se agote el n\xFAmero m\xE1ximo de reintentos, los siguientes errores para la misma petici\xF3n no se volver\xE1n a intentar. En su lugar, se pasa el objeto de error de Telegram, fallando efectivamente la petici\xF3n con un [<code>Grammy<wbr>Error</code>] (/guide/errors.md#the-grammyerror-object).</p><p>De forma similar, si la petici\xF3n falla con <code>retry<wbr>_after</code> mayor que lo especificado por la opci\xF3n <code>max<wbr>Delay<wbr>Seconds</code>, la petici\xF3n fallar\xE1 inmediatamente.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">autoRetry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  maxRetryAttempts<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// S\xF3lo se repiten las peticiones una vez</span>
  maxDelaySeconds<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// Falla inmediatamente si tenemos que esperar &gt;5 segundos</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resumen-del-plugin" tabindex="-1"><a class="header-anchor" href="#resumen-del-plugin" aria-hidden="true">#</a> Resumen del plugin</h2>`,6),C=e("li",null,[n("Nombre: "),e("code",null,[n("auto"),e("wbr"),n("-retry")])],-1),P=n("Fuente: "),A={href:"https://github.com/grammyjs/auto-retry",target:"_blank",rel:"noopener noreferrer"},E=n("https://"),G=e("wbr",null,null,-1),D=n("github"),L=e("wbr",null,null,-1),N=n(".com"),z=e("wbr",null,null,-1),B=n("/grammyjs"),U=e("wbr",null,null,-1),V=n("/auto"),F=e("wbr",null,null,-1),H=n("-retry"),M=n("Reference: "),J={href:"https://doc.deno.land/https://raw.githubusercontent.com/grammyjs/auto-retry/main/src/index.ts",target:"_blank",rel:"noopener noreferrer"},O=r("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>raw<wbr>.githubusercontent<wbr>.com<wbr>/grammyjs<wbr>/auto<wbr>-retry<wbr>/main<wbr>/src<wbr>/index<wbr>.ts",29);function K(Q,W){const l=a("Tag"),u=a("TagGroup"),i=a("RouterLink"),o=a("CodeGroupItem"),p=a("CodeGroup"),c=a("ExternalLinkIcon");return m(),_("div",null,[k,t(u,null,{default:s(()=>[t(l,{type:"official",text:"OFICIAL"})]),_:1}),e("blockquote",null,[e("p",null,[g,t(i,{to:"/es/plugins/transformer-throttler.html"},{default:s(()=>[h]),_:1}),f])]),e("p",null,[y,t(i,{to:"/es/advanced/transformers.html"},{default:s(()=>[v]),_:1}),w,x,j]),R,t(p,null,{default:s(()=>[t(o,{title:"TypeScript",active:""},{default:s(()=>[T]),_:1}),t(o,{title:"JavaScript"},{default:s(()=>[q]),_:1}),t(o,{title:"Deno"},{default:s(()=>[S]),_:1})]),_:1}),I,e("ul",null,[C,e("li",null,[P,e("a",A,[E,G,D,L,N,z,B,U,V,F,H,t(c)])]),e("li",null,[M,e("a",J,[O,t(c)])])])])}const Y=d(b,[["render",K],["__file","auto-retry.html.vue"]]);export{Y as default};
