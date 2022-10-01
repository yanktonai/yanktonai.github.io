import{_ as k,r as o,o as d,c as m,b as a,w as t,a as n,d as s,e as p}from"./app.c0ce12a9.js";const b={},g=n("h1",{id:"plugin-hidrasi-untuk-grammy-hydrate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-hidrasi-untuk-grammy-hydrate","aria-hidden":"true"},"#"),s(" Plugin Hidrasi untuk grammY ("),n("code",null,"hydrate"),s(")")],-1),y=p(`<p>Plugin ini akan menginstal method-method yang berguna di dua macam object, yaitu</p><ul><li>hasil dari pemanggilan API; serta</li><li>object-object di context object <code>ctx</code>.</li></ul><p>Daripada memanggil <code>ctx<wbr>.api</code> atau <code>bot<wbr>.api</code> lalu menyuplainya dengan berbagai identifier, dengan plugin ini kamu cukup memanggil method di object. Mari kita lihat perbandingannya di contoh berikut.</p><p><strong>TANPA</strong> plugin:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> statusMessage <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Memproses&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">doWork</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>photo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pemrosesan gambar yang butuh waktu lama</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">editMessageText</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    statusMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
    <span class="token string">&quot;Selesai!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">deleteMessage</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>id<span class="token punctuation">,</span> statusMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// Abaikan saat terjadi error.</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DENGAN</strong> plugin:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> statusMessage <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Memproses&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">doWork</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>photo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pemrosesan gambar yang butuh waktu lama</span>
  <span class="token keyword">await</span> statusMessage<span class="token punctuation">.</span><span class="token function">editText</span><span class="token punctuation">(</span><span class="token string">&quot;Selesai!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mudah sekali!</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> statusMessage<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lebih rapi, bukan?</p><h2 id="instalasi" tabindex="-1"><a class="header-anchor" href="#instalasi" aria-hidden="true">#</a> Instalasi</h2><p>Ada dua cara untuk menginstal plugin ini:</p><h3 id="instalasi-sederhana" tabindex="-1"><a class="header-anchor" href="#instalasi-sederhana" aria-hidden="true">#</a> Instalasi Sederhana</h3><p>Plugin ini bisa diinstal secara langsung. Cara pemasangan yang seperti ini sudah cukup untuk kebanyakan pengguna.</p>`,12),h=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrate"),n("span",{class:"token punctuation"},","),s(" HydrateFlavor "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrate "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrate`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_hydrate@v1.2.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=p('<h3 id="pemasangan-tingkat-lanjut" tabindex="-1"><a class="header-anchor" href="#pemasangan-tingkat-lanjut" aria-hidden="true">#</a> Pemasangan Tingkat Lanjut</h3><p>Ketika menggunakan instalasi sederhana, hanya hasil dari pemanggilan API yang melalui <code>ctx<wbr>.api</code> yang akan dihidrasi, contohnya <code>ctx<wbr>.reply</code>. Pemanggilan ini yang paling sering digunakan oleh kebanyakan bot.</p><p>Namun, beberapa bot mungkin perlu untuk memanggil <code>bot<wbr>.api</code>. Untuk kasus seperti itu, kamu sebaiknya menggunakan instalasi tingkat lanjut ini.</p>',3),f=s("Instalasi ini akan mengintegrasikan context hydration dan hidrasi hasil pemanggilan API secara terpisah ke dalam bot kamu. Perlu diingat bahwa kamu sekarang perlu menginstal sebuah "),x=s("API flavor"),j=s("."),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateApi`),n("span",{class:"token punctuation"},","),s(`
  HydrateApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateContext`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" HydrateApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateApi"),n("span",{class:"token punctuation"},","),s(" hydrateContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateApi`),n("span",{class:"token punctuation"},","),s(`
  HydrateApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateContext`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_hydrate@v1.2.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" HydrateApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=p('<h2 id="object-apa-saja-yang-dihidrasi" tabindex="-1"><a class="header-anchor" href="#object-apa-saja-yang-dihidrasi" aria-hidden="true">#</a> Object Apa Saja yang Dihidrasi</h2><p>Untuk saat ini, plugin menghidrasi</p><ul><li>pesan dan postingan channel;</li><li>pesan yang diedit dan postingan channel yang diedit;</li><li>callback query;</li><li>inline query;</li><li>hasil inline yang dipilih;</li><li>web app query; dan</li><li>pre-checkout serta shipping query.</li></ul><p>Semua object dihidrasi di</p><ul><li>context object <code>ctx</code>;</li><li>update object <code>ctx<wbr>.update</code> di dalam context;</li><li>shortcut untuk context object, misal <code>ctx<wbr>.msg</code>; dan</li><li>hasil pemanggilan API ketika diterapkan.</li></ul><h2 id="ringkasan-plugin" tabindex="-1"><a class="header-anchor" href="#ringkasan-plugin" aria-hidden="true">#</a> Ringkasan Plugin</h2>',6),B=n("li",null,[s("Nama: "),n("code",null,"hydrate")],-1),P=s("Sumber: "),H={href:"https://github.com/grammyjs/hydrate",target:"_blank",rel:"noopener noreferrer"},I=s("https://"),T=n("wbr",null,null,-1),F=s("github"),S=n("wbr",null,null,-1),N=s(".com"),G=n("wbr",null,null,-1),L=s("/grammyjs"),D=n("wbr",null,null,-1),E=s("/hydrate"),R=s("Referensi: "),V={href:"https://doc.deno.land/https://deno.land/x/grammy_hydrate/mod.ts",target:"_blank",rel:"noopener noreferrer"},J=p("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_hydrate<wbr>/mod<wbr>.ts",23);function U(W,K){const l=o("Tag"),u=o("TagGroup"),e=o("CodeGroupItem"),c=o("CodeGroup"),r=o("RouterLink"),i=o("ExternalLinkIcon");return d(),m("div",null,[g,a(u,null,{default:t(()=>[a(l,{type:"official",text:"RESMI"})]),_:1}),y,a(c,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[h]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[v]),_:1}),a(e,{title:"Deno"},{default:t(()=>[_]),_:1})]),_:1}),w,n("p",null,[f,a(r,{to:"/id/advanced/transformers.html#menggunakan-api-flavor"},{default:t(()=>[x]),_:1}),j]),a(c,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[A]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[C]),_:1}),a(e,{title:"Deno"},{default:t(()=>[M]),_:1})]),_:1}),q,n("ul",null,[B,n("li",null,[P,n("a",H,[I,T,F,S,N,G,L,D,E,a(i)])]),n("li",null,[R,n("a",V,[J,a(i)])])])])}const Y=k(b,[["render",U],["__file","hydrate.html.vue"]]);export{Y as default};
