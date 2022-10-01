import{_ as l,r as t,o as r,c as d,b as s,w as o,a,d as n,e as i}from"./app.34388d32.js";const k={},b=a("h1",{id:"hosting-supabase-edge-functions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#hosting-supabase-edge-functions","aria-hidden":"true"},"#"),n(" Hosting: Supabase Edge Functions")],-1),m=n("Halaman ini berisi panduan mengenai langkah-langkah meng-hosting bot grammY di "),g={href:"https://supabase.com/",target:"_blank",rel:"noopener noreferrer"},h=n("Supabase"),_=n("."),v=n("Kamu diharuskan memiliki sebuah akun "),y={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},f=n("Git"),w=a("wbr",null,null,-1),q=n("Hub"),x=n(" untuk menggunakan "),S={href:"https://supabase.com/docs/guides/functions",target:"_blank",rel:"noopener noreferrer"},T=n("Supabase Edge Functions"),j=n(". Supabase Edge Functions berbasiskan "),E={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},B=n("Deno Deploy"),O=n(", sehingga seperti "),K=n("panduan Deno Deploy"),N=n(" yang telah kami buat sebelumnya, panduan ini ditujukan untuk pengguna Deno grammY saja."),D=a("p",null,"Supabase Edge Functions cocok untuk sebagian besar bot yang memiliki fungsi sederhana, dan perlu kamu ketahui bahwa tidak semua fitur di Deno tersedia untuk aplikasi-aplikasi yang berjalan di Supabase Edge Functions. Contohnya, Supabase Edge Functions tidak menyediakan fitur file system. Ia serupa dengan platform serverless lainnya, namun hanya ditujukan untuk aplikasi Deno.",-1),F=n("Hasil dari tutorial ini bisa dilihat di "),C={href:"https://github.com/grammyjs/examples/tree/main/supabase-edge-functions",target:"_blank",rel:"noopener noreferrer"},L=n("repositori bot kami"),P=n("."),R=a("h2",{id:"pemasangan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pemasangan","aria-hidden":"true"},"#"),n(" Pemasangan")],-1),G=n("Untuk men-deploy bot ke Supabase Edge Functions, kamu harus membuat sebuah akun Supabase, menginstal CLI mereka, dan membuat sebuah proyek Supabase. Cara pemasangannya bisa dilihat di "),U={href:"https://supabase.com/docs/guides/functions#prerequisites",target:"_blank",rel:"noopener noreferrer"},A=n("dokumentasi yang mereka sediakan"),H=n("."),I=i(`<p>Buat sebuah Supabase Function dengan cara menjalankan perintah berikut:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions new telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Setelah berhasil membuat sebuah proyek Supabase Function, sekarang kamu bisa menulis bot-nya.</p><h2 id="siapkan-kodenya" tabindex="-1"><a class="header-anchor" href="#siapkan-kodenya" aria-hidden="true">#</a> Siapkan Kodenya</h2>`,4),J=n("Perlu diingat bahwa kamu harus "),V=n("menjalankan bot menggunakan webhooks"),W=n(". Oleh karena itu, gunakan "),Y=a("code",null,[n("webhook"),a("wbr"),n("Callback")],-1),M=n(" alih-alih "),$=a("code",null,[n("bot"),a("wbr"),n(".start()")],-1),z=n(" di kode kamu."),Q=i(`<p>Kamu bisa menggunakan contoh bot singkat ini sebagai entry point-nya.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>Deno<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;BOT_TOKEN&quot;</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span>
  <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Selamat datang! Bot sedang berjalan.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;not allowed&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">405</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="melakukan-deploy" tabindex="-1"><a class="header-anchor" href="#melakukan-deploy" aria-hidden="true">#</a> Melakukan Deploy</h2><p>Kamu sekarang bisa men-deploy bot ke Supabase. Perlu dicatat bahwa kamu diharuskan menonaktifkan otorisasi JWT karena Telegram menggunakan metode lain untuk memastikan request tersebut benar-benar berasal dari Telegram. Kamu bisa men-deploy function-nya dengan perintah ini:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions deploy --no-verify-jwt telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Selanjutnya, berikan token bot ke Supabase agar kode kamu bisa mengaksesnya sebagai sebuah environment variable.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Ganti 123:aBcDeF-gh dengan token bot-mu yang asli.</span>
supabase secrets <span class="token builtin class-name">set</span> <span class="token assign-left variable">BOT_TOKEN</span><span class="token operator">=</span><span class="token number">123</span>:aBcDeF-gh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Supabase Function kamu sekarang sudah berjalan. Sisanya, kita perlu memberi tahu Telegram ke mana ia harus mengirim update-update-nya. Kamu bisa melakukannya dengan memanggil <code>set<wbr>Webhook</code>. Contohnya, buka sebuah tab baru di browser lalu kunjungi URL berikut:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>https://api.telegram.org/bot&lt;TOKEN_BOT&gt;/setWebhook?url=https://&lt;NAMA_PROYEK&gt;.functions.supabase.co/telegram-bot?secret=&lt;TOKEN_BOT&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ganti <code>&lt;TOKEN<wbr>_BOT&gt;</code> dengan token bot kamu yang asli. Jangan lupa untuk mengganti <code>&lt;TOKEN<wbr>_BOT&gt;</code> yang kedua dengan token bot-mu juga. Ganti <code>&lt;NAMA<wbr>_PROYEK&gt;</code> dengan nama proyek Supabase kamu.</p><p>Jika berhasil, kamu akan melihat string JSON berikut di jendela browser:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;ok&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Webhook was set&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Selesai! Bot kamu sekarang sudah berjalan. Kirim sebuah pesan lalu bot akan membalas pesan tersebut!</p>`,13);function X(Z,nn){const u=t("Tag"),c=t("TagGroup"),e=t("ExternalLinkIcon"),p=t("RouterLink");return r(),d("div",null,[b,s(c,null,{default:o(()=>[s(u,{type:"deno"})]),_:1}),a("p",null,[m,a("a",g,[h,s(e)]),_]),a("p",null,[v,a("a",y,[f,w,q,s(e)]),x,a("a",S,[T,s(e)]),j,a("a",E,[B,s(e)]),O,s(p,{to:"/id/hosting/deno-deploy.html"},{default:o(()=>[K]),_:1}),N]),D,a("p",null,[F,a("a",C,[L,s(e)]),P]),R,a("p",null,[G,a("a",U,[A,s(e)]),H]),I,a("blockquote",null,[a("p",null,[J,s(p,{to:"/id/guide/deployment-types.html#bagaimana-cara-menggunakan-webhook"},{default:o(()=>[V]),_:1}),W,Y,M,$,z])]),Q])}const sn=l(k,[["render",X],["__file","supabase.html.vue"]]);export{sn as default};
