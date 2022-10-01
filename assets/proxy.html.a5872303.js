import{_ as o,r as p,o as c,c as i,a as s,b as e,d as n,e as t}from"./app.ff0cf306.js";const l={},r=s("h1",{id:"soporte-proxy",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#soporte-proxy","aria-hidden":"true"},"#"),n(" Soporte Proxy")],-1),u=n("grammY le permite configurar una serie de cosas sobre c\xF3mo se realizan las peticiones de red. Esto incluye inyectar un payload personalizado en cada petici\xF3n, que puede ser usado para instalar un agente proxy. Mira las "),d=s("code",null,[n("Api"),s("wbr"),n("Client"),s("wbr"),n("Options")],-1),k=n(" en la "),m={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/ApiClientOptions",target:"_blank",rel:"noopener noreferrer"},v=n("referencia de la API de grammY"),b=n("."),_=t(`<p>En Deno, as\xED es como se usar\xEDa un proxy <code>http</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">createHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;http://host:port/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token constant">TOKEN</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-ignore</span>
      client<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that you need to run this with the <code>-<wbr>-unstable</code> flag.</p></blockquote>`,3),h=n("En Node.js, as\xED es como usar\xEDas un proxy con el paquete "),g=s("code",null,[n("socks5"),s("wbr"),n("-https"),s("wbr"),n("-client")],-1),y=n(" ("),f={href:"https://www.npmjs.com/package/socks5-https-client",target:"_blank",rel:"noopener noreferrer"},w=n("npm"),x=n("):"),q=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SocksAgent <span class="token keyword">from</span> <span class="token string">&quot;socks5-https-client/lib/Agent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> socksAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocksAgent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  socksHost<span class="token operator">:</span> proxyHost<span class="token punctuation">,</span> <span class="token comment">// proxy host</span>
  socksPort<span class="token operator">:</span> proxyPort<span class="token punctuation">,</span> <span class="token comment">// proxy port</span>
  socksUsername<span class="token operator">:</span> proxyUser<span class="token punctuation">,</span> <span class="token comment">// nombre usuario</span>
  socksPassword<span class="token operator">:</span> proxyPassword<span class="token punctuation">,</span> <span class="token comment">// contrase\xF1a</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      agent<span class="token operator">:</span> socksAgent<span class="token punctuation">,</span>
      compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Tenga en cuenta que especificar <code>compress:<wbr> true</code> es una optimizaci\xF3n de rendimiento opcional. No tiene nada que ver con el soporte de proxy. Es parte del valor por defecto de <code>base<wbr>Fetch<wbr>Config</code>, as\xED que si todav\xEDa lo quieres, debes especificarlo de nuevo.</p></blockquote>`,2),C=n("Conseguir que un proxy funcione puede ser dif\xEDcil. Contacta con nosotros en el "),A={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},E=n("chat de Telegram"),N=n(" si tienes problemas, o si necesitas que grammY soporte m\xE1s opciones de configuraci\xF3n. Tambi\xE9n tenemos un "),B={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},P=n("chat ruso de Telegram"),T=n(".");function j(S,V){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,s("p",null,[u,d,k,s("a",m,[v,e(a)]),b]),_,s("p",null,[h,g,y,s("a",f,[w,e(a)]),x]),q,s("p",null,[C,s("a",A,[E,e(a)]),N,s("a",B,[P,e(a)]),T])])}const F=o(l,[["render",j],["__file","proxy.html.vue"]]);export{F as default};
