import{_ as l,r as t,o as p,c,b as a,w as r,a as n,d as s,e as d}from"./app.81c9d145.js";const u={},m=n("h1",{id:"registro-en-la-consola-mientras-se-depura",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#registro-en-la-consola-mientras-se-depura","aria-hidden":"true"},"#"),s(" Registro en la consola mientras se depura")],-1),k=s("Si est\xE1s familiarizado con JavaScript / TypeScript probablemente hayas utilizado "),v={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,[s("console"),n("wbr"),s(".log")],-1),_=s(" o "),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/time",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,[s("console"),n("wbr"),s(".time")],-1),f=s(" para comprobar lo que est\xE1 sucediendo mientras depuras algo. Mientras trabajas en tu bot o middleware puede que quieras comprobar algo similar: \xBFQu\xE9 ha pasado y cu\xE1nto tiempo ha tardado?"),w=d(`<p>Este plugin est\xE1 interesado en peticiones individuales para depurar problemas individuales. Estando en un entorno de producci\xF3n, probablemente quieras algo opuesto para tener una visi\xF3n general. Por ejemplo: al depurar por qu\xE9 falla <code>/start</code> comprobar\xE1s la actualizaci\xF3n individual de Telegram. En un contexto de producci\xF3n est\xE1s m\xE1s interesado en todos los mensajes <code>/start</code> que est\xE1n ocurriendo. Esta librer\xEDa est\xE1 pensada para ayudar con las actualizaciones individuales.</p><h2 id="depurar-tu-implementacion" tabindex="-1"><a class="header-anchor" href="#depurar-tu-implementacion" aria-hidden="true">#</a> Depurar tu implementaci\xF3n</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateUpdateMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateUpdateMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Tu implementaci\xF3n</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>que dar\xE1 salida a cosas como esta:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>2020-03-31T14:32:36.974Z 490af message text Edgar 6 /start: 926.247ms
2020-03-31T14:32:57.750Z 490ag message text Edgar 6 /start: 914.764ms
2020-03-31T14:33:01.188Z 490ah message text Edgar 5 /stop: 302.666ms
2020-03-31T14:46:11.385Z 490ai message text Edgar 6 /start: 892.452ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El <code>490af</code> es el <code>update<wbr>_id</code>.</p><p>El n\xFAmero que precede a los comandos es la longitud total del contenido. Esto es \xFAtil cuando se considera la longitud m\xE1xima para cosas como los datos de devoluci\xF3n de llamada.</p><p>El contenido en s\xED se acorta para evitar el spam de los registros.</p><h2 id="depurar-tu-middleware" tabindex="-1"><a class="header-anchor" href="#depurar-tu-middleware" aria-hidden="true">#</a> Depurar tu middleware</h2><p>Cuando creas tu propio middleware o asumes los tiempos lentos de otro middleware puedes usar estos middlewares para crear un perfil de tiempos.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  generateAfterMiddleware<span class="token punctuation">,</span>
  generateBeforeMiddleware<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Utiliza BeforeMiddleware antes de cargar el middleware probado.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateBeforeMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Middleware a probar</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Usar AfterMiddleware despu\xE9s de cargar el middleware que se est\xE1 probando (con la misma etiqueta).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateAfterMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Otros middleware/implementaciones (tomar\xE1n la cantidad de tiempo &quot;interna&quot; cuando se usen).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El resultado ser\xE1 algo as\xED:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>490ai foo before: 304.185ms
490ai foo inner: 83.122ms
490ai foo after: 501.028ms
490ai foo total: 891.849ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto indica que el middleware comprobado por s\xED solo tard\xF3 800ms y no tiene el rendimiento que quiz\xE1s se necesita.</p><h2 id="resumen-del-plugin" tabindex="-1"><a class="header-anchor" href="#resumen-del-plugin" aria-hidden="true">#</a> Resumen del plugin</h2>`,15),q=s("Fuente: "),x={href:"https://github.com/EdJoPaTo/telegraf-middleware-console-time",target:"_blank",rel:"noopener noreferrer"},E=s("https://"),y=n("wbr",null,null,-1),T=s("github"),M=n("wbr",null,null,-1),z=s(".com"),B=n("wbr",null,null,-1),S=s("/Ed"),C=n("wbr",null,null,-1),N=s("JoPaTo"),U=n("wbr",null,null,-1),A=s("/telegraf"),P=n("wbr",null,null,-1),V=s("-middleware"),j=n("wbr",null,null,-1),D=s("-console"),I=n("wbr",null,null,-1),R=s("-time");function Z(J,O){const o=t("Tag"),i=t("TagGroup"),e=t("ExternalLinkIcon");return p(),c("div",null,[m,a(i,null,{default:r(()=>[a(o,{type:"thirdparty",text:"DE TERCEROS"}),a(o,{type:"nodejs"})]),_:1}),n("p",null,[k,n("a",v,[b,a(e)]),_,n("a",g,[h,a(e)]),f]),w,n("ul",null,[n("li",null,[q,n("a",x,[E,y,T,M,z,B,S,C,N,U,A,P,V,j,D,I,R,a(e)])])])])}const L=l(u,[["render",Z],["__file","console-time.html.vue"]]);export{L as default};
