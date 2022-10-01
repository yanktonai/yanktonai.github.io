import{_ as o,r as p,o as c,c as i,a as s,b as t,d as n,e}from"./app.81c9d145.js";const l={},r=s("h1",{id:"proxy-support",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#proxy-support","aria-hidden":"true"},"#"),n(" Proxy Support")],-1),u=n("grammY let\u2019s you configure a number of things about how network requests are performed. This includes injecting a custom payload into every request, which can be used to install a proxy agent. Check out the "),d=s("code",null,[n("Api"),s("wbr"),n("Client"),s("wbr"),n("Options")],-1),k=n(" in the "),m={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/ApiClientOptions",target:"_blank",rel:"noopener noreferrer"},h=n("grammY API Reference"),v=n("."),_=e(`<p>In Deno, here is how you would use an <code>http</code> proxy:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that you need to run this with the <code>-<wbr>-unstable</code> flag.</p></blockquote>`,3),b=n("In Node.js, here is how you would use a proxy with the "),y=s("code",null,[n("socks5"),s("wbr"),n("-https"),s("wbr"),n("-client")],-1),g=n(" package ("),f={href:"https://www.npmjs.com/package/socks-proxy-agent",target:"_blank",rel:"noopener noreferrer"},w=n("npm"),x=n("):"),q=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SocksProxyAgent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;socks-proxy-agent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> socksAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocksProxyAgent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  host<span class="token operator">:</span> host<span class="token punctuation">,</span> <span class="token comment">// put in the proxy host</span>
  port<span class="token operator">:</span> port<span class="token punctuation">,</span> <span class="token comment">// put in the proxy port</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      agent<span class="token operator">:</span> socksAgent<span class="token punctuation">,</span>
      compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that specifying <code>compress:<wbr> true</code> is an optional performance optimization. It has nothing to do with proxy support. It is part of the default value for <code>base<wbr>Fetch<wbr>Config</code>, so if you still want it, you should specify it again.</p></blockquote>`,2),C=n("Getting a proxy to work can be difficult. Contact us in the "),N={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},A=n("Telegram chat"),B=n(" if you run into issues, or if you need grammY to support further configuration options. We also have a "),I={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},j=n("Russian Telegram chat"),T=n(".");function E(P,S){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,s("p",null,[u,d,k,s("a",m,[h,t(a)]),v]),_,s("p",null,[b,y,g,s("a",f,[w,t(a)]),x]),q,s("p",null,[C,s("a",N,[A,t(a)]),B,s("a",I,[j,t(a)]),T])])}const F=o(l,[["render",E],["__file","proxy.html.vue"]]);export{F as default};
