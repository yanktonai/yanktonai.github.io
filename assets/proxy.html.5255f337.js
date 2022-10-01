import{_ as o,r as p,o as c,c as i,a as s,b as t,d as n,e}from"./app.ff0cf306.js";const l={},u=s("h1",{id:"dukungan-proxy",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dukungan-proxy","aria-hidden":"true"},"#"),n(" Dukungan Proxy")],-1),r=n("Di grammY, kamu bisa mengatur bagaimana network request dilakukan. Termasuk menambahkan payload khusus ke setiap request yang akan digunakan untuk pemasangan proxy agent. Lihat "),k=s("code",null,[n("Api"),s("wbr"),n("Client"),s("wbr"),n("Options")],-1),d=n(" di "),m={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/ApiClientOptions",target:"_blank",rel:"noopener noreferrer"},b=n("Referensi API grammY"),v=n("."),g=e(`<p>Berikut cara menggunakan proxy <code>http</code> di Deno:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ingat! Gunakan flag <code>-<wbr>-unstable</code> supaya script di atas bisa berjalan.</p></blockquote>`,3),h=n("Berikut cara menggunakan proxy dengan package "),_=s("code",null,[n("socks5"),s("wbr"),n("-https"),s("wbr"),n("-client")],-1),y=n(" ("),w={href:"https://www.npmjs.com/package/socks-proxy-agent",target:"_blank",rel:"noopener noreferrer"},x=n("npm"),f=n(") di Node.js:"),q=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SocksProxyAgent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;socks-proxy-agent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> socksAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocksProxyAgent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  host<span class="token operator">:</span> host<span class="token punctuation">,</span> <span class="token comment">// Masukkan host proxy</span>
  port<span class="token operator">:</span> port<span class="token punctuation">,</span> <span class="token comment">// Masukkan port proxy</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      agent<span class="token operator">:</span> socksAgent<span class="token punctuation">,</span>
      compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Perlu diketahui bahwa menambahkan <code>compress:<wbr> true</code> merupakan pilihan opsional untuk optimisasi performa. Opsi tersebut tidak ada kaitannya dengan proxy. Ia adalah salah satu bagian dari value bawaan untuk <code>base<wbr>Fetch<wbr>Config</code>, jadi jika kamu tetap menginginkannya, kamu harus menetapkan opsi tersebut lagi.</p></blockquote>`,2),j=n("Membuat sebuah proxy supaya bisa berjalan dengan baik bukanlah pekerjaan yang mudah. Hubungi kami di "),B={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},A=n("chat Telegram"),C=n(" kalau kamu mengalami kendala atau jika kamu ingin grammY untuk menambahkan opsi-opsi konfigurasi proxy lainnya. Kami juga punya "),N={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},I=n("chat Telegram Rusia"),P=n(".");function T(D,E){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,s("p",null,[r,k,d,s("a",m,[b,t(a)]),v]),g,s("p",null,[h,_,y,s("a",w,[x,t(a)]),f]),q,s("p",null,[j,s("a",B,[A,t(a)]),C,s("a",N,[I,t(a)]),P])])}const V=o(l,[["render",T],["__file","proxy.html.vue"]]);export{V as default};
