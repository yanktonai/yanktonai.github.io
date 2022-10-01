import{_ as r,r as p,o as u,c,a as n,b as e,w as i,d as a,e as o}from"./app.ff0cf306.js";const d={},l=n("h1",{id:"api-bot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api-bot","aria-hidden":"true"},"#"),a(" API Bot")],-1),m=n("h2",{id:"informasi-umum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#informasi-umum","aria-hidden":"true"},"#"),a(" Informasi Umum")],-1),k=a("Bot Telegram berkomunikasi dengan server Telegram melalui HTTP request. API Bot Telegram adalah salah satu bentuk spesifikasi dari interface tersebut. Isinya berupa "),g={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},h=a("daftar panjang"),b=a(" dari berbagai method dan data type, yang biasa disebut dengan referensi atau "),_=n("em",null,"reference",-1),y=a(". API ini mendefinisikan aksi apa saja yang bisa dilakukan oleh bot Telegram. Kamu dapat menemukannya tertaut di tab Sumber Daya di atas halaman."),v=n("p",null,"Pemasangannya bisa dianalogikan seperti ini:",-1),f=n("div",{class:"language-asciiart ext-asciiart"},[n("pre",{class:"language-asciiart"},[n("code",null,`( ( ( Telegram ) API MTProto ) API HTTP Bot ) <-- bot melakukan koneksi ke sini
`)])],-1),w=a("Jadi, ketika bot mengirim pesan, pesan tersebut akan dikirim sebagai HTTP request ke "),j=n("em",null,"server API Bot",-1),x=a(" (entah itu server milik tim Telegram, atau "),P={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},T=a("server milikmu sendiri"),q=a("). Server ini akan menerjemahkan request tadi menjadi protokol utama Telegram yang disebut MTProto, lalu meneruskannya ke backend Telegram yang bertugas mengirim pesan ke pengguna yang dituju."),A=n("p",null,"Analogi yang sama juga berlaku ketika pengguna mengirim pesan ke bot, hanya saja alurnya dibalik.",-1),I={class:"custom-container tip"},M=n("p",{class:"custom-container-title"},"Mengatasi Limitasi Ukuran File",-1),B=a("Backend Telegram memungkinkan bot untuk "),N=a("mengirim file"),H=a(" berukuran hingga 2000 MB. Namun, server API Bot\u2014yang bertanggung jawab untuk menerjemahkan request ke HTTP\u2014membatasi ukuran file hanya sebesar 50 MB untuk unduhan dan 20 MB untuk unggahan."),S=a("Untuk menyiasati batasan tersebut, kamu bisa "),Y={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},D=a("meng"),O=n("wbr",null,null,-1),R=a("-hosting server API Bot sendiri"),C=a(" supaya bot kamu bisa mengirim file dengan ukuran hingga 2000 MB."),J=a("Catatan: Jika menangani file-file berukuran besar menggunakan "),K=a("long polling"),L=a(", kamu sebaiknya menggunakan "),V=a("grammY runner"),E=a("."),U=n("h2",{id:"memanggil-api-bot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#memanggil-api-bot","aria-hidden":"true"},"#"),a(" Memanggil API Bot")],-1),z=a("Setiap method API Bot juga identik dengan method milik grammY. Contohnya, "),F=n("code",null,[a("send"),n("wbr"),a("Message")],-1),G=a(" baik di "),Q={href:"https://core.telegram.org/bots/api#sendmessage",target:"_blank",rel:"noopener noreferrer"},W=a("Referensi API Bot Telegram"),X=a(" maupun di "),Z={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api#sendMessage",target:"_blank",rel:"noopener noreferrer"},$=a("Referensi Api grammY"),aa=a(" keduanya sama-sama identik."),na=n("h3",{id:"memanggil-method",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#memanggil-method","aria-hidden":"true"},"#"),a(" Memanggil Method")],-1),ea=a("Kamu dapat memanggil method API melalui "),sa=n("code",null,[a("bot"),n("wbr"),a(".api")],-1),ta=a(", atau "),ia=a("dengan cara yang sama"),oa=a(" melalui "),pa=n("code",null,[a("ctx"),n("wbr"),a(".api")],-1),ra=a(":"),ua=o(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">kirimHaloKe12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Kirim pesan ke 12345.</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Halo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Kirim pesan kemudian simpan hasil responnya.</span>
  <span class="token comment">// Respon tersebut berisi informasi mengenai pesan yang terkirim.</span>
  <span class="token keyword">const</span> sentMessage <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Halo lagi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sentMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Meskipun <code>bot<wbr>.api</code> mencakup seluruh API Bot, ia terkadang mengubah sedikit <em>signatures function</em>-nya agar lebih mudah digunakan. Sejatinya, semua method API Bot mengharapkan sebuah object JSON dengan sejumlah property tertentu. Namun, coba perhatikan bagaimana <code>send<wbr>Message</code> dalam contoh di atas hanya menerima dua argument: id chat dan sebuah string. grammY paham bahwa kedua nilai ini adalah property <code>chat<wbr>_id</code> dan <code>text</code>, dari situ ia akan menyusun object JSON yang sesuai untukmu.</p>`,2),ca=a("Seperti yang telah disebutkan "),da=a("sebelumnya"),la=a(", kamu bisa menentukan opsi lain di argument ketiga type "),ma=n("code",null,"Other",-1),ka=a(":"),ga=o(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">kirimHaloKe12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;i&gt;Halo!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- opsi tambahan type \`Other\`</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Disamping itu, grammY juga menyederhanakan hal-hal teknis lainnya agar kamu bisa dengan mudah menggunakan API ini. Sebagai contoh, beberapa property di method tertentu diharuskan melalui proses <code>JSON<wbr>.stringify</code> terlebih dahulu sebelum dikirim. Proses ini seringkali terlupakan, sulit untuk di-debug, dan dapat merusak <em>type interface</em>. Tetapi, grammY memudahkan kamu untuk menentukan berbagai object secara konsisten di seluruh API, serta memastikan property-property tersebut sudah di-serialized di balik layar sebelum dikirim.</p><h3 id="type-definition-untuk-api" tabindex="-1"><a class="header-anchor" href="#type-definition-untuk-api" aria-hidden="true">#</a> Type Definition untuk API</h3>`,3),ha=a("grammY dilengkapi dengan berbagai macam type API Bot. Repositori "),ba={href:"https://github.com/grammyjs/types",target:"_blank",rel:"noopener noreferrer"},_a=n("code",null,[a("@grammyjs"),n("wbr"),a("/types")],-1),ya=a(" ini berisi type definition yang digunakan oleh grammY. Type definition tersebut juga sudah di-export supaya bisa digunakan di kode kamu."),va=o(`<h4 id="type-definition-di-node-js" tabindex="-1"><a class="header-anchor" href="#type-definition-di-node-js" aria-hidden="true">#</a> Type Definition di Node.js</h4><p>Di Node.js, kamu perlu meng-import type dari <code>grammy<wbr>/types</code>. Contohnya, untuk mengakses type <code>Chat</code>, lakukan hal berikut:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy/types&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Node.js baru bisa meng-import dari sub-path semenjak versi Node.js 16. Oleh karena itu, kamu harus mengeset <code>module<wbr>Resolution</code> menjadi <code>node16</code> atau <code>nodenext</code>. Atur <code>tsconfig<wbr>.json</code> secara benar dan tandai barisnya:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node16&quot;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Meski begitu, terkadang ia juga bisa bekerja tanpa harus mengatur konfigurasi Typescript-nya dulu.</p><div class="custom-container warning"><p class="custom-container-title">Auto-complete Salah</p><p>Jika kamu tidak mengubah file <code>tsconfig<wbr>.json</code> seperti yang telah dijelaskan di atas, kemungkinan besar auto-complete code editor kamu akan menyarankan untuk meng-import types dari <code>grammy<wbr>/out<wbr>/client</code> atau semacamnya. <strong>Semua path yang dimulai dengan <code>grammy<wbr>/out</code> adalah file-file internal. Jangan digunakan!</strong> File-file tersebut dapat berubah sewaktu-waktu. Oleh karena itu, kami sangat menyarankan kamu untuk meng-import dari <code>grammy<wbr>/types</code>.</p></div><h4 id="type-definition-di-deno" tabindex="-1"><a class="header-anchor" href="#type-definition-di-deno" aria-hidden="true">#</a> Type Definition di Deno</h4><p>Di Deno, kamu cukup meng-import type definition dari <code>types<wbr>.ts</code>, yang mana bersebelahan dengan file <code>mod<wbr>.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/types.ts&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="membuat-panggilan-raw-api" tabindex="-1"><a class="header-anchor" href="#membuat-panggilan-raw-api" aria-hidden="true">#</a> Membuat Panggilan Raw API</h3><p>Ada kalanya kamu ingin menggunakan <em>function signature</em> yang asli, tetapi masih ingin mengandalkan kenyamanan yang API grammY tawarkan, misal melakukan serialize JSON saat diperlukan. grammY bisa melakukannya melalui property <code>bot<wbr>.api<wbr>.raw</code> (atau <code>ctx<wbr>.api<wbr>.raw</code>).</p><p>Kamu dapat memanggil <em>raw method</em> seperti ini:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    chat_id<span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">&quot;&lt;i&gt;Halo!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pada dasarnya, semua parameter <em>function signature</em> disatukan satu dengan berbagai opsi object lainnya ketika kamu menggunakan <em>raw API</em>.</p>`,15);function fa(wa,ja){const s=p("ExternalLinkIcon"),t=p("RouterLink");return u(),c("div",null,[l,m,n("p",null,[k,n("a",g,[h,e(s)]),b,_,y]),v,f,n("p",null,[w,j,x,n("a",P,[T,e(s)]),q]),A,n("div",I,[M,n("p",null,[B,e(t,{to:"/id/guide/files.html"},{default:i(()=>[N]),_:1}),H]),n("p",null,[S,n("a",Y,[D,O,R,e(s)]),C]),n("blockquote",null,[n("p",null,[J,e(t,{to:"/id/guide/deployment-types.html"},{default:i(()=>[K]),_:1}),L,e(t,{to:"/id/plugins/runner.html"},{default:i(()=>[V]),_:1}),E])])]),U,n("p",null,[z,F,G,n("a",Q,[W,e(s)]),X,n("a",Z,[$,e(s)]),aa]),na,n("p",null,[ea,sa,ta,e(t,{to:"/id/guide/context.html#aksi-yang-tersedia"},{default:i(()=>[ia]),_:1}),oa,pa,ra]),ua,n("p",null,[ca,e(t,{to:"/id/guide/basics.html#mengirim-pesan"},{default:i(()=>[da]),_:1}),la,ma,ka]),ga,n("p",null,[ha,n("a",ba,[_a,e(s)]),ya]),va])}const Pa=r(d,[["render",fa],["__file","api.html.vue"]]);export{Pa as default};
