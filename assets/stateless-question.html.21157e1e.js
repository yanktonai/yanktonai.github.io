import{_ as c,r as e,o as i,c as u,b as a,w as l,a as n,d as s,e as r}from"./app.1137d7ac.js";const d={},k=n("h1",{id:"pregunta-sin-estado-stateless-question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pregunta-sin-estado-stateless-question","aria-hidden":"true"},"#"),s(" Pregunta sin estado ("),n("code",null,[s("stateless"),n("wbr"),s("-question")]),s(")")],-1),m=n("blockquote",null,[n("p",null,"Crear preguntas sin estado a los usuarios de Telegram que trabajan en modo de privacidad")],-1),_=s("\xBFQuieres mantener la privacidad del usuario con el "),v={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},b=s("modo de privacidad de Telegram activado (por defecto)"),h=s(", enviar a los usuarios preguntas traducidas en su idioma y no guardar el estado que los usuarios est\xE1n haciendo actualmente?"),g=n("p",null,"Este plugin quiere resolver este problema.",-1),f=s("La idea b\xE1sica es enviar su pregunta con un "),q={href:"https://en.wikipedia.org/wiki/Zero-width_non-joiner",target:"_blank",rel:"noopener noreferrer"},w=s("texto especial"),y=s(" al final. Este texto es invisible para el usuario pero visible para tu bot. Cuando el usuario responde a un mensaje, se comprueba el mensaje. Si contiene este texto especial al final, entonces es una respuesta a la pregunta. De esta manera puedes tener muchas cadenas para las mismas preguntas como cuando tienes traducciones. S\xF3lo tienes que asegurarte de que el "),x=n("code",null,[s("unique"),n("wbr"),s("Identifier")],-1),Q=s(" es \xFAnico dentro de tu bot."),T=r(`<h2 id="uso" tabindex="-1"><a class="header-anchor" href="#uso" aria-hidden="true">#</a> Uso</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatelessQuestion <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/stateless-question&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> unicornQuestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatelessQuestion</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token string">&quot;El usuario cree que los unicornios est\xE1n haciendo:&quot;</span><span class="token punctuation">,</span>
    ctx<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// No te olvides de utilizar el middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>unicornQuestion<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;arcoiris&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&quot;de&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;Was machen Einh\xF6rner?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// O env\xEDe su pregunta manualmente (\xA1aseg\xFArese de utilizar parse_mode y force_reply!).</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>
    <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithHTML</span><span class="token punctuation">(</span>
    <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E=s("Consulte el "),j={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},M=s("plugin README"),L=s(" para obtener m\xE1s informaci\xF3n."),S=n("h2",{id:"resumen-del-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resumen-del-plugin","aria-hidden":"true"},"#"),s(" Resumen del plugin")],-1),C=n("li",null,[s("Nombre: "),n("code",null,[s("stateless"),n("wbr"),s("-question")])],-1),N=s("Fuente: "),I={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},B=s("https://"),V=n("wbr",null,null,-1),W=s("github"),H=n("wbr",null,null,-1),z=s(".com"),A=n("wbr",null,null,-1),D=s("/grammyjs"),F=n("wbr",null,null,-1),G=s("/stateless"),O=n("wbr",null,null,-1),R=s("-question");function P(U,Z){const o=e("Tag"),p=e("TagGroup"),t=e("ExternalLinkIcon");return i(),u("div",null,[k,a(p,null,{default:l(()=>[a(o,{type:"official",text:"OFICIAL"})]),_:1}),m,n("p",null,[_,n("a",v,[b,a(t)]),h]),g,n("p",null,[f,n("a",q,[w,a(t)]),y,x,Q]),T,n("p",null,[E,n("a",j,[M,a(t)]),L]),S,n("ul",null,[C,n("li",null,[N,n("a",I,[B,V,W,H,z,A,D,F,G,O,R,a(t)])])])])}const K=c(d,[["render",P],["__file","stateless-question.html.vue"]]);export{K as default};
