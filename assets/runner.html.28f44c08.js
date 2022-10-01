import{_ as d,r as o,o as k,c as m,b as e,w as t,a as n,d as a,e as r}from"./app.1137d7ac.js";const g={},h=n("h1",{id:"concurrency-menggunakan-grammy-runner-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concurrency-menggunakan-grammy-runner-runner","aria-hidden":"true"},"#"),a(" Concurrency Menggunakan grammY runner ("),n("code",null,"runner"),a(")")],-1),b=a("Plugin ini dapat digunakan untuk memproses berbagai pesan secara bersamaan ketika bot dijalankan "),_=a("menggunakan long polling"),y=a("."),f=a("Sebelum menggunakan grammY runner, pastikan kamu paham betul materi "),w=a("Peningkatan II"),v=a("."),x=n("h2",{id:"kenapa-kita-perlu-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kenapa-kita-perlu-runner","aria-hidden":"true"},"#"),a(" Kenapa Kita Perlu Runner")],-1),j=n("p",null,"Di saat kamu meng-hosting bot menggunakan long polling lalu kamu ingin melakukan scale up dengan cara mengubah pemrosesan update dari yang sebelumnya berurutan menjadi bersamaan, maka ada beberapa tantangan yang akan dihadapi oleh bot kamu:",-1),S=n("ul",null,[n("li",null,"Apakah nantinya akan terjadi race condition?"),n("li",null,[a("Masih bisakah kita menggunakan "),n("code",null,"await"),a(" untuk middleware stack? Kita memerlukannya untuk menangani error!")]),n("li",null,"Bagaimana jika middleware tidak dapat menyelesaikan tugasnya, apakah ia akan menghalangi tugas bot yang lain?"),n("li",null,"Masih bisakah kita mengendalikan beban server?")],-1),B=a("Seperti yang kamu lihat, kita perlu sebuah solusi untuk menyelesaikan permasalahan di atas agar long polling pada bot dapat berjalan dengan baik. Masalah ini sangat berbeda dibandingkan dengan menyusun sebuah middleware ataupun mengirim pesan ke Telegram. Karena alasan tersebut, package inti grammY tidak dapat menyelesaikannya. Sebagai gantinya, kamu bisa menggunakan "),I={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},P=a("grammY runner"),R=a(". Ia juga memiliki "),T={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},A=a("Referensi API"),C=a("-nya sendiri."),q=n("h2",{id:"cara-penggunaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cara-penggunaan","aria-hidden":"true"},"#"),a(" Cara Penggunaan")],-1),K=n("p",null,"Berikut contoh sederhananya:",-1),U=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=r(`<p>Tentu saja, meskipun terlihat sangat sederhana, sebenarnya banyak pemrosesan yang terjadi di balik layar.</p><h2 id="apa-yang-sebenarnya-terjadi-di-balik-layar" tabindex="-1"><a class="header-anchor" href="#apa-yang-sebenarnya-terjadi-di-balik-layar" aria-hidden="true">#</a> Apa yang Sebenarnya Terjadi di Balik Layar</h2><p>Setiap runner terdiri atas tiga bagian yang berbeda:</p><ol><li><strong>Source</strong> mengambil update dari Telegram.</li><li><strong>Sink</strong> menyuplai update ke bot instance.</li><li>Komponen <strong>runner</strong> menghubungkan source dan sink, serta memungkinkan kamu untuk memulai dan menghentikan bot.</li></ol><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>api.telegram.org &lt;\u2014&gt; source &lt;\u2014&gt; runner &lt;\u2014&gt; sink &lt;\u2014&gt; bot
</code></pre></div><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h3>`,6),D=a("grammY runner dilengkapi dengan satu source bawaan yang bisa beroperasi di berbagai "),J=n("code",null,[a("Update"),n("wbr"),a("Supplier")],-1),L=a(" ("),N={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSupplier",target:"_blank",rel:"noopener noreferrer"},E=a("API reference"),V=a("). Update supplier semacam itu sangat mudah dibuat dari bot instance. Jika kamu ingin membuatnya, pastikan untuk mempelajari "),z=n("code",null,[a("create"),n("wbr"),a("Update"),n("wbr"),a("Fetcher")],-1),H=a(" ("),F={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createUpdateFetcher",target:"_blank",rel:"noopener noreferrer"},Q=a("referensi API"),O=a(")."),W=n("p",null,[a("Source adalah sebuah async iterator untuk kumpulan update yang bisa diaktifkan ataupun dinonaktifkan. Selain itu, kamu bisa melakukan "),n("code",null,"close"),a(" untuk memutuskan sambungan dari server Telegram.")],-1),X=n("h3",{id:"sink",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sink","aria-hidden":"true"},"#"),a(" Sink")],-1),Z=a("grammY runner dilengkapi dengan tiga kemungkinan implementasi sink, yaitu berurutan (sama seperti "),$=n("code",null,[a("bot"),n("wbr"),a(".start()")],-1),nn=a("), perkelompok atau batch (berguna untuk kompatibilitas dengan framework lain), dan bersamaan (yang digunakan oleh "),an=n("code",null,"run",-1),en=a("). Semuanya beroperasi di object "),sn=n("code",null,[a("Update"),n("wbr"),a("Consumer")],-1),tn=a(" ("),on={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateConsumer",target:"_blank",rel:"noopener noreferrer"},rn=a("Referensi API"),un=a(") yang bisa dibuat dengan mudah dari sebuah bot instance. Jika kamu ingin membuatnya, pastikan untuk mempelajari "),ln=n("code",null,[a("handle"),n("wbr"),a("Update")],-1),cn=a(" di "),pn=n("code",null,"Bot",-1),dn=a(" instance grammY ("),kn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},mn=a("API reference"),gn=a(")."),hn=a("Sink berisi sebuah queue ("),bn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/DecayingDeque",target:"_blank",rel:"noopener noreferrer"},_n=a("referensi API"),yn=a(") untuk tiap-tiap update yang sedang diproses. Update baru yang ditambahkan ke queue akan langsung ditangani oleh update consumer, lalu ia akan mengembalikan sebuah promise yang akan terselesaikan segera setelah kapasitas queque tersedia lagi. Angka integral yang terselesaikan menentukan ruang kosong tersebut. Pengaturan batas concurrency untuk grammY runner akan dipatuhi melalui queue instance yang bersangkutan."),fn=r('<p>Queue juga membuang update yang membutuhkan waktu pemrosesan yang terlalu lama, untuk itu kamu bisa menentukan sebuah <code>timeout<wbr>Handler</code> ketika membuat sink yang bersangkutan. Tentu saja, kamu sebaiknya juga menyediakan sebuah error handler ketika membuat sebuah sink.</p><p>Kalau kamu menggunakan <code>run(bot)</code>, maka error handler dari <code>bot<wbr>.catch</code> akan digunakan.</p><h3 id="runner" tabindex="-1"><a class="header-anchor" href="#runner" aria-hidden="true">#</a> Runner</h3><p>Runner adalah sebuah loop biasa yang mengambil update dari source lalu menyuplainya ke sink. Ketika ruang kosong sink tersedia lagi, runner akan mengambil batch update selanjutnya dari source.</p>',4),wn=a("Ketika kamu membuat sebuah runner menggunakan "),vn=n("code",null,[a("create"),n("wbr"),a("Runner")],-1),xn=a(" ("),jn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createRunner",target:"_blank",rel:"noopener noreferrer"},Sn=a("referensi API"),Bn=a("), kamu akan memperoleh sebuah handle yang bisa digunakan untuk mengontrol runner tersebut. Misalnya, kamu bisa memulai dan menghentikan runner, atau memperoleh sebuah promise yang akan terselesaikan jika runner dihentikan. Selain itu, handle ini juga dikembalikan oleh "),In=n("code",null,"run",-1),Pn=a(", lihat "),Rn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/RunnerHandle",target:"_blank",rel:"noopener noreferrer"},Tn=a("Referensi API"),An=a(),Cn=n("code",null,[a("Runner"),n("wbr"),a("Handle")],-1),qn=a("."),Kn=n("h2",{id:"pemrosesan-secara-berurutan-jika-diperlukan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pemrosesan-secara-berurutan-jika-diperlukan","aria-hidden":"true"},"#"),a(" Pemrosesan Secara Berurutan jika Diperlukan")],-1),Un=a("Kemungkinan besar, kamu ingin memastikan pesan yang berasal dari chat yang sama diproses secara berurutan agar urutan pesan tidak berubah ketika "),Yn=a("session middleware"),Gn=a(" dipasang."),Mn=a("grammY runner meng-export "),Dn=n("code",null,"sequentialize",-1),Jn=a(" middleware yang akan menyelesaikan masalah tersebut. Kamu bisa membaca "),Ln=a("materi ini"),Nn=a(" untuk mempelajari cara penggunaannya."),En=r(`<p>Sekarang kita akan mempelajari lebih dalam penggunaan plugin ini.</p><p>Constraint function yang disuplai tidak hanya bisa digunakan untuk menentukan chat identifier ataupun user identifier. Sebaliknya, kamu bisa mengembalikan <em>daftar string dari constraint identifier</em> yang akan menentukan perhitungan lain apa yang harus ditunggu sebelum pemrosesan dapat dimulai untuk setiap update-nya.</p><p>Contohnya, kamu bisa mengembalikan chat identifier dan user identifier penulis pesan.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> chat <span class="token operator">=</span> ctx<span class="token punctuation">.</span>chat<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>chat<span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> con <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ini akan memastikan pesan yang berasal dari chat yang sama akan diproses dengan urutan yang tepat. Misalnya, jika Budi mengirim pesan di dalam sebuah grup, lalu mengirim sebuah pesan ke bot kamu di chat pribadi, maka kedua pesan tersebut akan diurutkan dengan benar.</p><p>Dengan demikian, kamu bisa menentukan grafik dependensi dari masing-masing update. grammY runner akan menyelesaikan semua constraint yang dibutuhkan dan menahan update-update tersebut selama itu diperlukan untuk memastikan urutan pesan tepat.</p><p>Implementasi ini sangat efisien. Ia membutuhkan memory yang konstan (kecuali kamu menggunakan concurrency tidak terbatas) dan memerlukan waktu pemrosesan yang konstant (amortized) untuk setiap update.</p><h2 id="graceful-shutdown" tabindex="-1"><a class="header-anchor" href="#graceful-shutdown" aria-hidden="true">#</a> Graceful Shutdown</h2>`,8),Vn=a("Agar bot menyelesaikan tugasnya dengan benar, kamu "),zn=a("harus memberi sinyal berhenti"),Hn=a(" ke bot ketika proses hendak dimatikan."),Fn=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),Qn=n("li",null,[a("Nama: "),n("code",null,"runner")],-1),On=a("Sumber: "),Wn={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},Xn=a("https://"),Zn=n("wbr",null,null,-1),$n=a("github"),na=n("wbr",null,null,-1),aa=a(".com"),ea=n("wbr",null,null,-1),sa=a("/grammyjs"),ta=n("wbr",null,null,-1),oa=a("/runner"),ia=a("Referensi: "),ra={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},ua=r("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_runner<wbr>/mod<wbr>.ts",23);function la(ca,pa){const l=o("Tag"),c=o("TagGroup"),i=o("RouterLink"),s=o("ExternalLinkIcon"),u=o("CodeGroupItem"),p=o("CodeGroup");return k(),m("div",null,[h,e(c,null,{default:t(()=>[e(l,{type:"official",text:"RESMI"})]),_:1}),n("p",null,[b,e(i,{to:"/id/guide/deployment-types.html"},{default:t(()=>[_]),_:1}),y]),n("blockquote",null,[n("p",null,[f,e(i,{to:"/id/advanced/scaling.html#long-polling"},{default:t(()=>[w]),_:1}),v])]),x,j,S,n("p",null,[B,n("a",I,[P,e(s)]),R,n("a",T,[A,e(s)]),C]),q,K,e(p,null,{default:t(()=>[e(u,{title:"TypeScript",active:""},{default:t(()=>[U]),_:1}),e(u,{title:"JavaScript"},{default:t(()=>[Y]),_:1}),e(u,{title:"Deno"},{default:t(()=>[G]),_:1})]),_:1}),M,n("p",null,[D,J,L,n("a",N,[E,e(s)]),V,z,H,n("a",F,[Q,e(s)]),O]),W,X,n("p",null,[Z,$,nn,an,en,sn,tn,n("a",on,[rn,e(s)]),un,ln,cn,pn,dn,n("a",kn,[mn,e(s)]),gn]),n("p",null,[hn,n("a",bn,[_n,e(s)]),yn]),fn,n("p",null,[wn,vn,xn,n("a",jn,[Sn,e(s)]),Bn,In,Pn,n("a",Rn,[Tn,e(s)]),An,Cn,qn]),Kn,n("p",null,[Un,e(i,{to:"/id/plugins/session.html"},{default:t(()=>[Yn]),_:1}),Gn]),n("p",null,[Mn,Dn,Jn,e(i,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:t(()=>[Ln]),_:1}),Nn]),En,n("p",null,[Vn,e(i,{to:"/id/advanced/reliability.html#menggunakan-grammy-runner"},{default:t(()=>[zn]),_:1}),Hn]),Fn,n("ul",null,[Qn,n("li",null,[On,n("a",Wn,[Xn,Zn,$n,na,aa,ea,sa,ta,oa,e(s)])]),n("li",null,[ia,n("a",ra,[ua,e(s)])])])])}const ka=d(g,[["render",la],["__file","runner.html.vue"]]);export{ka as default};
