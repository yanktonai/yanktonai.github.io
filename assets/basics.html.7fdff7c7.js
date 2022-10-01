import{_ as i,r as p,o as l,c as r,a as s,b as e,w as c,e as t,d as n}from"./app.ff0cf306.js";const u={},d=t(`<h1 id="envio-y-recepcion-de-mensajes" tabindex="-1"><a class="header-anchor" href="#envio-y-recepcion-de-mensajes" aria-hidden="true">#</a> Env\xEDo y recepci\xF3n de mensajes</h1><p>Tan pronto como inicies tu bot con <code>bot<wbr>.start()</code>, grammY suministrar\xE1 a tus oyentes los mensajes que los usuarios env\xEDen a tu bot. grammY tambi\xE9n proporciona m\xE9todos para responder f\xE1cilmente a estos mensajes.</p><h2 id="recepcion-de-mensajes" tabindex="-1"><a class="header-anchor" href="#recepcion-de-mensajes" aria-hidden="true">#</a> Recepci\xF3n de mensajes</h2><p>La forma m\xE1s f\xE1cil de escuchar los mensajes es a trav\xE9s de:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">;</span> <span class="token comment">// el mensaje</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sin embargo, tambi\xE9n hay otras opciones:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Maneja comandos, como /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Compara el texto del mensaje con una cadena o una expresi\xF3n regular.</span>
bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">echo *(.+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m=n("Puedes utilizar la funci\xF3n de autocompletar en tu editor de c\xF3digo para ver todas las opciones disponibles, o consultar "),_={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},k=n("todos los m\xE9todos"),h=n(" de la clase "),b=s("code",null,"Composer",-1),v=n("."),g=n("Leer m\xE1s"),f=n(" sobre el filtrado de tipos de mensajes espec\xEDficos con "),w=s("code",null,[n("bot"),s("wbr"),n(".on()")],-1),y=n("."),x=s("h2",{id:"envio-de-mensajes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#envio-de-mensajes","aria-hidden":"true"},"#"),n(" Env\xEDo de mensajes")],-1),q=n("Todos los m\xE9todos que los bots pueden utilizar ("),j={href:"https://core.telegram.org/bots/api#available-methods",target:"_blank",rel:"noopener noreferrer"},M=n("lista importante"),E=n(") est\xE1n disponibles en el objeto "),T=s("code",null,[n("bot"),s("wbr"),n(".api")],-1),L=n("."),H=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Enviar un mensaje de texto al usuario 12345.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Opcionalmente, puedes pasar un objeto de opciones.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token comment">/* m\xE1s opciones */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Obtener informaci\xF3n sobre el propio bot.</span>
<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">getMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// etc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),z=n("Cada m\xE9todo toma un objeto opcional de opciones de tipo "),C=s("code",null,"Other",-1),V=n(", que le permite establecer otras opciones para sus llamadas a la API. Estos objetos de opciones se corresponden exactamente con las opciones que puedes encontrar en la lista de m\xE9todos enlazada anteriormente. Tambi\xE9n puedes utilizar el autocompletado en tu editor de c\xF3digo para ver todas las opciones disponibles, o consultar "),R={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api",target:"_blank",rel:"noopener noreferrer"},B=n("todos los m\xE9todos"),P=n(" de la clase "),A=s("code",null,"Api",-1),I=n(". El resto de esta p\xE1gina muestra algunos ejemplos para esto."),N=n("Tambi\xE9n, revisa la "),Y=n("siguiente secci\xF3n"),O=n(" para aprender c\xF3mo el objeto context de un listener hace que el env\xEDo de mensajes sea un juego de ni\xF1os."),S=t(`<h2 id="enviando-mensajes-con-respuesta" tabindex="-1"><a class="header-anchor" href="#enviando-mensajes-con-respuesta" aria-hidden="true">#</a> Enviando Mensajes con Respuesta</h2><p>Puedes usar la funci\xF3n de respuesta de Telegram especificando el identificador del mensaje al que se va a responder usando <code>reply<wbr>_to<wbr>_message<wbr>_id</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`reply\` es un alias de \`sendMessage\` en el mismo chat (ver siguiente secci\xF3n).</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \`reply_to_message_id\` especifica la funci\xF3n de respuesta real.</span>
    reply_to_message_id<span class="token operator">:</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),F=t("Tenga en cuenta que s\xF3lo el env\xEDo de un mensaje a trav\xE9s de <code>ctx<wbr>.reply</code> no **significa que usted est\xE1 respondiendo autom\xE1ticamente a cualquier cosa. En su lugar, debes especificar <code>reply<wbr>_to<wbr>_message<wbr>_id</code> para ello. La funci\xF3n <code>ctx<wbr>.reply</code> es s\xF3lo un alias de <code>ctx<wbr>.api<wbr>.send<wbr>Message</code>, ver la ",9),U=n("siguiente secci\xF3n"),D=n("."),G=s("h2",{id:"envio-de-mensajes-con-formato",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#envio-de-mensajes-con-formato","aria-hidden":"true"},"#"),n(" Env\xEDo de mensajes con formato")],-1),J=n("Revisa la "),K={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},Q=n("secci\xF3n sobre opciones de formato"),W=n(" en la Referencia de la API de Telegram Bot escrita por el equipo de Telegram."),X=n("Puedes enviar mensajes con texto en "),Z=s("strong",null,"negrita",-1),$=n(" o "),nn=s("em",null,"cursiva",-1),sn=n(", usar URLs, y m\xE1s. Hay dos formas de hacerlo, como se describe en la "),en={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},an=n("secci\xF3n sobre opciones de formato"),tn=n(", a saber, Markdown y HTML."),on=s("h3",{id:"markdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),cn=n("Ver tambi\xE9n "),pn={href:"https://core.telegram.org/bots/api#markdownv2-style",target:"_blank",rel:"noopener noreferrer"},ln=n("https://"),rn=s("wbr",null,null,-1),un=n("core"),dn=s("wbr",null,null,-1),mn=n(".telegram"),_n=s("wbr",null,null,-1),kn=n(".org"),hn=s("wbr",null,null,-1),bn=n("/bots"),vn=s("wbr",null,null,-1),gn=n("/api"),fn=s("wbr",null,null,-1),wn=n("#markdownv2"),yn=s("wbr",null,null,-1),xn=n("-style"),qn=t(`<p>Env\xEDa tu mensaje con markdown en el texto, y especifica <code>parse<wbr>_mode:<wbr> &quot;MarkdownV2&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&quot;*Hola\\\\!* Bienvenido a [grammY](https://grammy.dev)\\\\.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;MarkdownV2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3>`,3),jn=n("V\xE9ase tambi\xE9n "),Mn={href:"https://core.telegram.org/bots/api#html-style",target:"_blank",rel:"noopener noreferrer"},En=n("https://"),Tn=s("wbr",null,null,-1),Ln=n("core"),Hn=s("wbr",null,null,-1),zn=n(".telegram"),Cn=s("wbr",null,null,-1),Vn=n(".org"),Rn=s("wbr",null,null,-1),Bn=n("/bots"),Pn=s("wbr",null,null,-1),An=n("/api"),In=s("wbr",null,null,-1),Nn=n("#html"),Yn=s("wbr",null,null,-1),On=n("-style"),Sn=t(`<p>Env\xEDa tu mensaje con elementos HTML en el texto, y especifica <code>parse<wbr>_mode:<wbr> &quot;HTML&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;b&gt;\xA1Hola!&lt;/b&gt; &lt;i&gt;Bienvenido&lt;/i&gt; to &lt;a href=&quot;https://grammy.dev&quot;&gt;grammY&lt;/a&gt;.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="envio-de-archivos" tabindex="-1"><a class="header-anchor" href="#envio-de-archivos" aria-hidden="true">#</a> Env\xEDo de archivos</h2><p>El manejo de archivos se explica con mayor profundidad en una [secci\xF3n posterior] (./files.md#sending-files).</p><h2 id="forzar-respuesta" tabindex="-1"><a class="header-anchor" href="#forzar-respuesta" aria-hidden="true">#</a> Forzar respuesta</h2>`,5),Fn=n("Esto puede ser \xFAtil si tu bot est\xE1 funcionando en "),Un={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},Dn=n("modo privacidad"),Gn=n(" en los chats de grupo."),Jn=n("Cuando env\xEDes un mensaje, puedes hacer que el cliente de Telegram del usuario especifique autom\xE1ticamente el mensaje como respuesta. Esto significa que el usuario responder\xE1 al mensaje de tu bot autom\xE1ticamente (a menos que elimine la respuesta manualmente). Como resultado, tu bot recibir\xE1 el mensaje del usuario incluso cuando se ejecute en "),Kn={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},Qn=n("modo de privacidad"),Wn=n(" en los chats de grupo."),Xn=t(`<p>Puedes forzar una respuesta as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>
    <span class="token string">&quot;\xA1Hola! S\xF3lo puedo leer los mensajes que me responden expl\xEDcitamente!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// Haz que los clientes de Telegram muestren autom\xE1ticamente una interfaz de respuesta al usuario.</span>
      reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Zn($n,ns){const a=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r("div",null,[d,s("p",null,[m,s("a",_,[k,e(a)]),h,b,v]),s("blockquote",null,[s("p",null,[e(o,{to:"/es/guide/filter-queries.html"},{default:c(()=>[g]),_:1}),f,w,y])]),x,s("p",null,[q,s("strong",null,[s("a",j,[M,e(a)])]),E,T,L]),H,s("p",null,[z,C,V,s("a",R,[B,e(a)]),P,A,I]),s("p",null,[N,e(o,{to:"/es/guide/context.html"},{default:c(()=>[Y]),_:1}),O]),S,s("blockquote",null,[s("p",null,[F,e(o,{to:"/es/guide/context.html#acciones-disponibles"},{default:c(()=>[U]),_:1}),D])]),G,s("blockquote",null,[s("p",null,[J,s("a",K,[Q,e(a)]),W])]),s("p",null,[X,Z,$,nn,sn,s("a",en,[an,e(a)]),tn]),on,s("blockquote",null,[s("p",null,[cn,s("a",pn,[ln,rn,un,dn,mn,_n,kn,hn,bn,vn,gn,fn,wn,yn,xn,e(a)])])]),qn,s("blockquote",null,[s("p",null,[jn,s("a",Mn,[En,Tn,Ln,Hn,zn,Cn,Vn,Rn,Bn,Pn,An,In,Nn,Yn,On,e(a)])])]),Sn,s("blockquote",null,[s("p",null,[Fn,s("a",Un,[Dn,e(a)]),Gn])]),s("p",null,[Jn,s("a",Kn,[Qn,e(a)]),Wn]),Xn])}const es=i(u,[["render",Zn],["__file","basics.html.vue"]]);export{es as default};
