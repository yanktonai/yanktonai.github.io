import{_ as c,r as p,o as l,c as r,a,b as s,w as i,e as t,d as n}from"./app.ff0cf306.js";const u={},d=t(`<h1 id="mengirim-dan-menerima-pesan" tabindex="-1"><a class="header-anchor" href="#mengirim-dan-menerima-pesan" aria-hidden="true">#</a> Mengirim dan Menerima Pesan</h1><p>Begitu kamu menjalankan bot dengan <code>bot<wbr>.start()</code>, grammY akan menyuplai listener dengan pesan-pesan yang telah dikirim oleh user ke bot kamu. grammY juga menyediakan cara yang mudah untuk membalas pesan-pesan tersebut.</p><h2 id="menerima-pesan" tabindex="-1"><a class="header-anchor" href="#menerima-pesan" aria-hidden="true">#</a> Menerima Pesan</h2><p>Cara termudah untuk menyimak pesan adalah melalui</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">;</span> <span class="token comment">// object pesan</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Selain itu, opsi-opsi lainnya juga tersedia:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Menangani perintah, misal /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Mencocokkan teks pesan dengan sebuah string atau regular expression (regex).</span>
bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">echo *(.+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m=n("Kamu bisa menggunakan fitur auto-complete di code editor untuk melihat semua pilihan yang tersedia, ataupun melihat secara manual "),k={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},_=n("daftar method"),h=n(" dari sebuah class "),g=a("code",null,"Composer",-1),b=n("."),v=n("Baca lebih lanjut"),y=n(" tentang pemfilteran untuk jenis pesan tertentu menggunakan "),f=a("code",null,[n("bot"),a("wbr"),n(".on()")],-1),w=n("."),x=a("h2",{id:"mengirim-pesan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mengirim-pesan","aria-hidden":"true"},"#"),n(" Mengirim Pesan")],-1),q=n("Semua method yang dapat digunakan oleh bot ("),j={href:"https://core.telegram.org/bots/api#available-methods",target:"_blank",rel:"noopener noreferrer"},M=n("daftar penting"),L=n(") tersedia di object "),T=a("code",null,[n("bot"),a("wbr"),n(".api")],-1),S=n("."),H=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Mengirim sebuah pesan ke pengguna 12345.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Halo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Selain itu, kamu bisa menambahkan opsi ke object.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Halo!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token comment">/* opsi lainnya */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Memperoleh informasi tentang bot itu sendiri.</span>
<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">getMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dan lain-lain</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K=n("Setiap method memiliki opsi tambahan untuk object type "),P=a("code",null,"Other",-1),B=n(", yang memungkinkan kamu untuk menetapkan opsi tambahan ketika memanggil API. Opsi-opsi dari object ini sama persis dengan opsi yang ada di daftar method di link atas tadi. Kamu juga dapat menggunakan fitur auto-complete di code editor untuk melihat semua opsi yang tersedia, ataupun melihat secara manual "),A={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api",target:"_blank",rel:"noopener noreferrer"},R=n("daftar method"),C=n(" dari sebuah class "),V=a("code",null,"Api",-1),F=n("."),N=n("Selain itu, coba lihat "),I=n("materi selanjutnya"),Y=n(" untuk mempelajari bagaimana object context dari suatu listener bisa membuat pengiriman pesan menjadi sangat mudah dilakukan!"),E=a("h2",{id:"mengirim-pesan-dengan-reply",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mengirim-pesan-dengan-reply","aria-hidden":"true"},"#"),n(" Mengirim Pesan dengan Reply")],-1),O=n("Catatan penerjemah: Kami membedakan kata \u201Cbalas\u201D dan \u201Creply\u201D agar tidak rancu. "),U=a("em",null,"Balas",-1),D=n(" berarti membalas chat seperti pada umumnya. Sedangkan "),z=a("em",null,"reply",-1),G=n(" merujuk ke "),J={href:"https://telegram.org/blog/replies-mentions-hashtags#replies",target:"_blank",rel:"noopener noreferrer"},Q=n("membalas pesan secara spesifik"),W=n("."),X=t(`<p>Kamu dapat menggunakan fitur <code>reply<wbr>-to</code> milik Telegram dengan menentukan id pesan yang akan di-reply menggunakan <code>reply<wbr>_to<wbr>_message<wbr>_id</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`reply\` adalah alias dari \`sendMessage\` (lihat materi selanjutnya).</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \`reply_to_message_id\` akan menentukan untuk me-reply pesan yang mana.</span>
    reply_to_message_id<span class="token operator">:</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Z=t("Perhatikan bahwa dengan mengirim pesan melalui <code>ctx<wbr>.reply</code> <strong>BUKAN</strong> berarti kamu secara otomatis me-reply pesan begitu saja. Sebaliknya, kamu harus mengisi <code>reply<wbr>_to<wbr>_message<wbr>_id</code> untuk menentukan pesan mana yang mau di-reply. Function <code>ctx<wbr>.reply</code> cuma alias dari <code>ctx<wbr>.api<wbr>.send<wbr>Message</code>, lihat ",11),$=n("materi berikutnya"),nn=n("."),an=a("h2",{id:"mengirim-pesan-dengan-format-tertentu",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mengirim-pesan-dengan-format-tertentu","aria-hidden":"true"},"#"),n(" Mengirim Pesan dengan Format Tertentu")],-1),sn=n("Lihat "),en={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},tn=n("bagian opsi pemformatan"),on=n(" di Referensi API Bot Telegram yang ditulis oleh tim Telegram."),pn=n("Kamu dapat mengirim pesan dengan teks "),cn=a("strong",null,"bold",-1),ln=n(", "),rn=a("em",null,"italic",-1),un=n(", format URL, dan banyak lagi. Ada dua cara untuk melakukannya: Markdown dan HTML. Referensinya bisa dilihat "),dn={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},mn=n("di sini"),kn=a("h3",{id:"markdown",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),_n=n("Lihat juga "),hn={href:"https://core.telegram.org/bots/api#markdownv2-style",target:"_blank",rel:"noopener noreferrer"},gn=n("https://"),bn=a("wbr",null,null,-1),vn=n("core"),yn=a("wbr",null,null,-1),fn=n(".telegram"),wn=a("wbr",null,null,-1),xn=n(".org"),qn=a("wbr",null,null,-1),jn=n("/bots"),Mn=a("wbr",null,null,-1),Ln=n("/api"),Tn=a("wbr",null,null,-1),Sn=n("#markdownv2"),Hn=a("wbr",null,null,-1),Kn=n("-style"),Pn=t(`<p>Kirim pesan dengan markdown di dalamnya, lalu cantumkan <code>parse<wbr>_mode:<wbr> &quot;MarkdownV2&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&quot;*Halo\\\\!* _Selamat datang_ di [grammY](https://grammy.dev)\\\\.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;MarkdownV2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3>`,3),Bn=n("Lihat juga "),An={href:"https://core.telegram.org/bots/api#html-style",target:"_blank",rel:"noopener noreferrer"},Rn=n("https://"),Cn=a("wbr",null,null,-1),Vn=n("core"),Fn=a("wbr",null,null,-1),Nn=n(".telegram"),In=a("wbr",null,null,-1),Yn=n(".org"),En=a("wbr",null,null,-1),On=n("/bots"),Un=a("wbr",null,null,-1),Dn=n("/api"),zn=a("wbr",null,null,-1),Gn=n("#html"),Jn=a("wbr",null,null,-1),Qn=n("-style"),Wn=t(`<p>Kirim pesan dengan element HTML di dalamnya, lalu cantumkan <code>parse<wbr>_mode:<wbr> &quot;HTML&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;b&gt;Halo!&lt;/b&gt; &lt;i&gt;Selamat datang&lt;/i&gt; di &lt;a href=&quot;https://grammy.dev&quot;&gt;grammY&lt;/a&gt;.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mengirim-file" tabindex="-1"><a class="header-anchor" href="#mengirim-file" aria-hidden="true">#</a> Mengirim File</h2>`,3),Xn=n("Pemrosesan file dijelaskan secara lengkap di "),Zn=n("materi lain"),$n=n("."),na=a("h2",{id:"reply-paksa-force-reply",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#reply-paksa-force-reply","aria-hidden":"true"},"#"),n(" Reply Paksa (Force Reply)")],-1),aa=n("Force reply berguna jika bot kamu berjalan dalam "),sa={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},ea=n("mode privasi"),ta=n(" di chat grup."),oa=n("Saat mengirim pesan, kamu dapat membuat aplikasi Telegram pengguna secara otomatis me-reply pesan tersebut. Artinya, pengguna akan \u201Cdipaksa\u201D me-reply pesan bot tadi (kecuali mereka menghapus reply tersebut secara manual). Keuntungannya, bot masih bisa menerima pesan dari pengguna di dalam chat grup meskipun sedang berjalan dalam "),ia={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},pa=n("mode privasi"),ca=n("."),la=t(`<p>Kamu dapat menggunakan force reply seperti ini:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>
    <span class="token string">&quot;Halo! Aku hanya bisa membaca pesan yang secara khusus ditujukan untuk aku!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// Buat aplikasi Telegram pengguna menunjukkan tampilan reply secara otomatis.</span>
      reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function ra(ua,da){const e=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r("div",null,[d,a("p",null,[m,a("a",k,[_,s(e)]),h,g,b]),a("blockquote",null,[a("p",null,[s(o,{to:"/id/guide/filter-queries.html"},{default:i(()=>[v]),_:1}),y,f,w])]),x,a("p",null,[q,a("strong",null,[a("a",j,[M,s(e)])]),L,T,S]),H,a("p",null,[K,P,B,a("a",A,[R,s(e)]),C,V,F]),a("p",null,[N,s(o,{to:"/id/guide/context.html"},{default:i(()=>[I]),_:1}),Y]),E,a("blockquote",null,[a("p",null,[O,U,D,z,G,a("a",J,[Q,s(e)]),W])]),X,a("blockquote",null,[a("p",null,[Z,s(o,{to:"/id/guide/context.html#aksi-yang-tersedia"},{default:i(()=>[$]),_:1}),nn])]),an,a("blockquote",null,[a("p",null,[sn,a("a",en,[tn,s(e)]),on])]),a("p",null,[pn,cn,ln,rn,un,a("a",dn,[mn,s(e)])]),kn,a("blockquote",null,[a("p",null,[_n,a("a",hn,[gn,bn,vn,yn,fn,wn,xn,qn,jn,Mn,Ln,Tn,Sn,Hn,Kn,s(e)])])]),Pn,a("blockquote",null,[a("p",null,[Bn,a("a",An,[Rn,Cn,Vn,Fn,Nn,In,Yn,En,On,Un,Dn,zn,Gn,Jn,Qn,s(e)])])]),Wn,a("p",null,[Xn,s(o,{to:"/id/guide/files.html#mengirim-file"},{default:i(()=>[Zn]),_:1}),$n]),na,a("blockquote",null,[a("p",null,[aa,a("a",sa,[ea,s(e)]),ta])]),a("p",null,[oa,a("a",ia,[pa,s(e)]),ca]),la])}const ka=c(u,[["render",ra],["__file","basics.html.vue"]]);export{ka as default};
