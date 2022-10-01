import{_ as u,r as p,o as d,c as r,a as n,b as s,w as e,e as t,d as a}from"./app.81c9d145.js";const k={},m=t('<h1 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h1><p>Middleware adalah sebuah sebutan untuk function-function listener yang dipasang di <code>bot<wbr>.on()</code>, <code>bot<wbr>.command</code>, serta <em>sibling-sibling</em> lain yang serupa. Memanggilnya dengan sebutan \u201Clistener\u201D hanyalah sebuah penyederhanaan saja, meskipun tidak sepenuhnya salah juga karena mereka memang menyimak\u2014atau <em>listening</em>\u2014sebuah update.</p>',2),b=a("Materi ini berisi penjelasan apa itu middleware, serta menggunakan grammY sebagai contoh ilustrasi bagaimana suatu middleware dapat digunakan. Kalau kamu mencari dokumentasi khusus mengenai keistimewaan middleware buatan grammY, silahkan baca materi "),g=a("Membangkitkan Middleware"),h=a(" di bab Tingkat Lanjut."),w=t(`<h2 id="middleware-stack" tabindex="-1"><a class="header-anchor" href="#middleware-stack" aria-hidden="true">#</a> Middleware Stack</h2><p>Anggaplah kamu menulis bot seperti ini:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Mulai!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Teks bantuan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Teks!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (*)</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Foto!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ketika sebuah update yang berisi pesan teks biasa tiba, tindakan-tindakan berikut akan dilakukan:</p><ol><li>Kamu mengirim <code>&quot;Halo botku sayang!&quot;</code> ke bot.</li><li>Middleware session menerima update tersebut, kemudian melakukan tugasnya.</li><li>Update akan dicocokkan dengan command <code>/start</code>, yang mana tidak cocok.</li><li>Update akan dicocokkan dengan command <code>/help</code>, yang mana tidak cocok.</li><li>Update akan dicocokkan dengan pesan atau postingan channel yang mengandung teks, yang mana terdapat kecocokkan.</li><li>Middleware di <code>(*)</code> akan dipanggil, kemudian bot akan membalas dengan <code>&quot;Teks!&quot;</code>.</li></ol><p>Update <strong>tidak</strong> dicocokkan dengan konten foto karena middleware di <code>(*)</code> sudah menangani update tersebut.</p><p>Kok bisa itu terjadi? Mari cari tahu!</p>`,7),_=a("Klik "),v={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Middleware",target:"_blank",rel:"noopener noreferrer"},y=a("di sini"),x=a(" untuk melihat type "),f=n("code",null,"Middleware",-1),j=a(" di referensi grammY:"),q=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Menghilangkan beberapa type parameter supaya ringkas.</span>
<span class="token keyword">type</span> <span class="token class-name">Middleware</span> <span class="token operator">=</span> MiddlewareFn <span class="token operator">|</span> MiddlewareObj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),M=a("Aha! Middleware bisa berupa sebuah function ataupun object. Sejauh ini, kita cuma menggunakan function ("),K=n("code",null,[a("(ctx) "),n("wbr"),a("="),n("wbr"),a("> { "),n("wbr"),a(".."),n("wbr"),a(". }")],-1),T=a("). Mari kita abaikan object middleware untuk saat ini, dan menyelam lebih dalam menuju type "),P=n("code",null,[a("Middleware"),n("wbr"),a("Fn")],-1),S=a(" ("),C={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/MiddlewareFn",target:"_blank",rel:"noopener noreferrer"},A=a("referensi"),B=a("):"),D=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Menghilangkan type parameter lagi.</span>
<span class="token keyword">type</span> <span class="token class-name">MiddlewareFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MaybePromise<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// Dengan</span>
<span class="token keyword">type</span> <span class="token class-name">NextFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=a("Ternyata, middleware mengambil dua buah parameter! Kita cuma memakai satu sejauh ini, yaitu object context "),R=n("code",null,"ctx",-1),U=a(". Kita "),I=a("sudah tahu"),N=a(" apa itu "),L=n("code",null,"ctx",-1),Y=a(". Tetapi, kita juga melihat sebuah function dengan nama "),O=n("code",null,"next",-1),E=a(". Supaya bisa mengerti apa itu "),G=n("code",null,"next",-1),V=a(", kita harus melihat secara keseluruhan middleware yang kamu pasang pada object bot-mu."),W=t(`<p>Kamu bisa membayangkan semua function middleware yang terpasang sebagai lapisan-lapisan yang ditumpuk di atas satu sama lain. Midleware pertama\u2014<code>session</code> berdasarkan contoh kita tadi\u2014adalah lapisan teratas, sehingga ia akan menerima setiap update terlebih dahulu. Kemudian, ia akan memutuskan apakah update tersebut akan diproses atau diteruskan ke lapisan berikutnya (handler command <code>/start</code>). Function <code>next</code> dapat digunakan untuk memanggil middleware berikutnya, yang sering kali disebut <em>downstream middleware</em> atau middleware hilir. Artinya, kalau kamu tidak memanggil <code>next</code> di middleware, maka lapisan middleware di bawahnya tidak akan dipanggil.</p><p>Tumpukan-tumpukan function tadi disebut <em>middleware stack</em>.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014 middleware hulu dari X (upstream)
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...        &lt;\u2014 middleware X. Memanggil \`next\` untuk meneruskan update
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014 middleware hilir dari X (downstream)
(ctx, next) =&gt; ...    |
</code></pre></div><p>Dari contoh sebelumnya, kita sekarang tahu mengapa <code>bot<wbr>.on(&quot;:<wbr>photo&quot;)</code> tidak ikut diperiksa. Itu karena middleware di <code>bot<wbr>.on(&quot;:<wbr>text&quot;<wbr>, (ctx) <wbr>=<wbr>&gt; { <wbr>..<wbr>. })</code> sudah menangani update-nya, sehingga tidak perlu memanggil <code>next</code>. Bahkan, <code>next</code> sama sekali tidak dinyatakan di parameter-nya. Ia mengabaikan <code>next</code> begitu saja, sehingga update tidak diteruskan.</p><p>Mari kita coba sesuatu yang lain dengan pengetahuan baru kita!</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Teks!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Command!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kalau kamu menjalankan bot di atas, lalu mengirim pesan <code>/start</code>, kamu tidak akan pernah mendapatkan respon <code>Command!</code>. Mari kita telusuri apa yang terjadi:</p><ol><li>Kamu mengirim <code>&quot;<wbr>/start&quot;</code> ke bot.</li><li>Middleware <code>&quot;:<wbr>text&quot;</code> menerima update tersebut lalu mencocokkan dengan teks, yang mana terdapat kecocokkan karena command adalah sebuah pesan teks juga. Update diambil alih oleh middleware pertama dan bot kamu merespon dengan \u201CTeks!\u201D.</li></ol><p>Pesan tersebut bahkan tidak diperiksa apakah mengandung perintah <code>/start</code> atau tidak. Urutan pemasangan middleware akan sangat berpengaruh karena ia juga mempengaruhi urutan lapisan di middleware stack. Kamu bisa memperbaiki permasalahan di atas dengan membalik urutan pada baris kode 3 dan 4. Kalau kamu memanggil <code>next</code> di baris 3, dua respon akan dikirim.</p><p><strong>Function <code>bot<wbr>.use()</code> menerima semua update yang akan diteruskan ke middleware terkait.</strong> Itulah kenapa <code>session()</code> dipasang ke <code>bot<wbr>.use()</code> karena kita ingin plugin tersebut beroperasi di semua update, tidak peduli apapun isinya.</p><p>Middleware stack merupakan properti yang benar-benar berguna untuk framework web manapun, dan model yang seperti ini sangat populer digunakan di berbagai tempat\u2014tidak hanya untuk bot Telegram.</p><p>Sekarang, mari kita coba membuat sendiri potongan kecil middleware untuk mengilustrasikan dengan lebih baik bagaimana cara kerjanya.</p><h2 id="membuat-middleware-sendiri" tabindex="-1"><a class="header-anchor" href="#membuat-middleware-sendiri" aria-hidden="true">#</a> Membuat Middleware Sendiri</h2><p>Kami akan mengilustrasikan konsep dari middleware dengan membuat function middleware sederhana yang dapat mengukur waktu respon bot, yaitu berapa lama waktu yang dibutuhkan sebuah bot untuk memproses pesan.</p><p>Berikut adalah <em>function signature</em> untuk middleware kita. Kamu bisa membandingkannya dengan type middleware di atas, dan memastikan bahwa kita benar-benar sudah membuat sebuah middleware di sini.</p>`,15),X=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Ukur waktu respon bot, kemudian catat di `console` */"),a(`
`),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"waktuRespon"),n("span",{class:"token punctuation"},"("),a(`
  ctx`),n("span",{class:"token operator"},":"),a(" Context"),n("span",{class:"token punctuation"},","),a(`
  next`),n("span",{class:"token operator"},":"),a(" NextFunction"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Alias dari: () => Promise<void>"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// TODO: Tulis implementasinya disini"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Ukur waktu respon bot, kemudian catat di `console` */"),a(`
`),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"waktuRespon"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("ctx"),n("span",{class:"token punctuation"},","),a(" next")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// TODO: Tulis implementasinya disini"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=t(`<p>Lalu, kita bisa memasangnya ke instance <code>bot</code> dengan <code>bot<wbr>.use()</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>waktuRespon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sekarang, mari kita tulis implementasinya. Berikut yang akan kita lakukan:</p><ol><li>Ketika update datang, simpan <code>Date<wbr>.now()</code> di dalam sebuah variabel.</li><li>Kita panggil middleware hilir, lalu biarkan semua proses penanganan pesan terjadi. Ini termasuk pencocokan perintah, membalas pesan, dan semua tindakan lain yang perlu dilakukan oleh bot.</li><li>Ketika semua proses sudah selesai dilakukan, kita ambil <code>Date<wbr>.now()</code> sekali lagi, lalu membandingkannya dengan nilai yang lama, kemudian <code>console<wbr>.log</code> selisih waktunya.</li></ol><p>Penting untuk memasang middleware <code>waktu<wbr>Respon</code> di urutan <em>pertama</em> (di middleware stack paling atas) agar semua operasi yang dilakukan tercatat dalam pengukuran.</p>`,5),$=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Ukur waktu respon bot, kemudian catat di `console` */"),a(`
`),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"waktuRespon"),n("span",{class:"token punctuation"},"("),a(`
  ctx`),n("span",{class:"token operator"},":"),a(" Context"),n("span",{class:"token punctuation"},","),a(`
  next`),n("span",{class:"token operator"},":"),a(" NextFunction"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Alias dari: () => Promise<void>"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// Ambil waktu awal"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" awal "),n("span",{class:"token operator"},"="),a(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Milidetik"),a(`
  `),n("span",{class:"token comment"},"// Panggil middleware hilir"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Pastikan untuk `await`!"),a(`
  `),n("span",{class:"token comment"},"// Ambil waktu akhir"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" akhir "),n("span",{class:"token operator"},"="),a(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Milidetik"),a(`
  `),n("span",{class:"token comment"},"// Catat selisihnya"),a(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Waktu respon: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("akhir "),n("span",{class:"token operator"},"-"),a(" awal"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," milidetik"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("waktuRespon"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Ukur waktu respon bot, kemudian catat di `console` */"),a(`
`),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"waktuRespon"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("ctx"),n("span",{class:"token punctuation"},","),a(" next")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// Ambil waktu awal"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" awal "),n("span",{class:"token operator"},"="),a(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Milidetik"),a(`
  `),n("span",{class:"token comment"},"// Panggil middleware hilir"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Pastikan untuk `await`!"),a(`
  `),n("span",{class:"token comment"},"// Ambil waktu akhir"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" akhir "),n("span",{class:"token operator"},"="),a(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// Milidetik"),a(`
  `),n("span",{class:"token comment"},"// Catat selisihnya"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Waktu respon: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("akhir "),n("span",{class:"token operator"},"-"),a(" awal"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," milidetik"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("waktuRespon"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("p",null,"Sempurna! \u2714\uFE0F",-1),Z=n("p",null,"Silahkan gunakan middleware ini pada object bot kamu, pasang lebih banyak listener, dan bermain-main dengan contoh tadi supaya dapat memahami sepenuhnya apa itu middleware.",-1),nn={class:"custom-container danger"},an=n("p",{class:"custom-container-title"},"BAHAYA: Selalu Pastikan untuk Menunggu Next!",-1),sn=n("p",null,[a("Kalau kamu memanggil "),n("code",null,"next()"),a(" tanpa "),n("code",null,"await"),a(", beberapa hal tidak akan berjalan dengan baik:")],-1),en=t("<li>\u274C Susunan middleware-mu akan dieksekusi dengan urutan yang salah.</li><li>\u274C Data kamu bisa saja hilang.</li><li>\u274C Beberapa pesan tidak akan terkirim.</li><li>\u274C Bot kamu akan crash secara acak yang sulit untuk direproduksi kembali.</li><li>\u274C Saat terjadi error, <em>error handler</em> tidak akan dipanggil. Akibatnya, kamu akan melihat sebuah <code>Unhandled<wbr>Promise<wbr>Rejection<wbr>Warning</code> yang membuat bot menjadi crash.</li>",5),tn=a("\u274C Mekanisme backpressure "),on=a("grammY runner"),cn=a("\u2014yang berfungsi untuk melindungi server dari beban yang terlalu tinggi, misalnya saat terjadi lonjakan beban\u2014menjadi tidak berfungsi."),pn=n("li",null,"\u{1F480} Terkadang, juga dapat membunuh kucing imut yang tidak berdosa. \u{1F63F}",-1),ln=t("<p>Aturannya adalah kamu harus menggunakan <code>await</code>, khususnya untuk <code>next()</code>. Tetapi, ini juga berlaku untuk expression lain pada umumnya yang mengembalikan sebuah <code>Promise</code>. Termasuk <code>bot<wbr>.api<wbr>.send<wbr>Message</code>, <code>ctx<wbr>.reply</code>, dan pemanggilan koneksi lainnya. Kalau proyek yang sedang kamu kerjakan memang serius, sebaiknya gunakan <em>linting tool</em> yang akan mengingatkan disaat kamu lupa menggunakan <code>await</code> di dalam sebuah <code>Promise</code>.</p>",1),un={class:"custom-container tip"},dn=n("p",{class:"custom-container-title"},"Aktifkan no-floating-promises",-1),rn=a("Pertimbangkan untuk menggunakan "),kn={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},mn=a("ESLint"),bn=a(" dan menerapkan aturan "),gn={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md",target:"_blank",rel:"noopener noreferrer"},hn=a("no"),wn=n("wbr",null,null,-1),_n=a("-floating"),vn=n("wbr",null,null,-1),yn=a("-promises"),xn=a(". Ini akan memastikan kamu supaya tidak lupa menggunakan "),fn=n("code",null,"await",-1),jn=a(" (dengan cara mengomel ke kamu)."),qn=t('<h2 id="property-middleware-grammy" tabindex="-1"><a class="header-anchor" href="#property-middleware-grammy" aria-hidden="true">#</a> Property Middleware grammY</h2><p>Di grammY, middleware mengembalikan sebuah <code>Promise</code> yang nantinya akan di-<code>await</code>. Tetapi, ia juga bisa di-<em>synchronous</em>.</p><p>Berbanding terbalik dengan sistem middleware lainnya,\u2014contohnya di <code>express</code>\u2014kamu tidak bisa meneruskan <em>error value</em> ke <code>next</code>. <code>next</code> tidak mengambil argument apapun. Kalau ingin menghasilkan error, kamu cukup <code>throw</code> error. Perbedaan lainnya, tidak peduli berapapun argument yang diambil oleh middleware kamu, <code>() <wbr>=<wbr>&gt; {}</code> akan diberlakukan layaknya sebuah <code>(ctx) <wbr>=<wbr>&gt; {}</code> atau <code>(ctx<wbr>, next) <wbr>=<wbr>&gt; {}</code>.</p>',3),Mn=a("Terdapat dua macam type middleware: function dan object. Object middleware simpelnya adalah sebuah pembungkus dari suatu function middleware. Kebanyakan cuma digunakan di internal, tetapi terkadang juga bisa membantu library pihak ketiga, atau digunakan untuk kasus tingkat lanjut, contohnya "),Kn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},Tn=a("Composer"),Pn=a(":"),Sn=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// composer adalah sebuah object middleware!</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Cn=a("Kalau ingin mempelajari lebih lanjut bagaimana grammY mengimplementasikan middleware, silahkan baca materi "),An=a("Membangkitkan Middleware"),Bn=a(" di bab Tingkat Lanjut.");function Dn(Fn,Rn){const i=p("RouterLink"),o=p("ExternalLinkIcon"),c=p("CodeGroupItem"),l=p("CodeGroup");return d(),r("div",null,[m,n("blockquote",null,[n("p",null,[b,s(i,{to:"/id/advanced/middleware.html"},{default:e(()=>[g]),_:1}),h])]),w,n("p",null,[_,n("a",v,[y,s(o)]),x,f,j]),q,n("p",null,[M,K,T,P,S,n("a",C,[A,s(o)]),B]),D,n("p",null,[F,R,U,s(i,{to:"/id/guide/context.html"},{default:e(()=>[I]),_:1}),N,L,Y,O,E,G,V]),W,s(l,null,{default:e(()=>[s(c,{title:"TypeScript",active:""},{default:e(()=>[X]),_:1}),s(c,{title:"JavaScript"},{default:e(()=>[H]),_:1})]),_:1}),J,s(l,null,{default:e(()=>[s(c,{title:"TypeScript",active:""},{default:e(()=>[$]),_:1}),s(c,{title:"JavaScript"},{default:e(()=>[z]),_:1})]),_:1}),Q,Z,n("div",nn,[an,sn,n("ul",null,[en,n("li",null,[tn,s(i,{to:"/id/plugins/runner.html"},{default:e(()=>[on]),_:1}),cn]),pn])]),ln,n("div",un,[dn,n("p",null,[rn,n("a",kn,[mn,s(o)]),bn,n("a",gn,[hn,wn,_n,vn,yn,s(o)]),xn,fn,jn])]),qn,n("p",null,[Mn,n("a",Kn,[Tn,s(o)]),Pn]),Sn,n("p",null,[Cn,s(i,{to:"/id/advanced/middleware.html"},{default:e(()=>[An]),_:1}),Bn])])}const In=u(k,[["render",Dn],["__file","middleware.html.vue"]]);export{In as default};
