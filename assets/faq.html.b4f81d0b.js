import{_ as d,r as s,o as u,c as l,a as e,b as n,w as r,d as a,e as o}from"./app.ff0cf306.js";const m={},h=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),a(" FAQ")],-1),k=e("p",null,[a("Berikut ini adalah kumpulan pertanyaan yang sering diajukan mengenai "),e("a",{href:"#kenapa-saya-mengalami-error-ini"},"beberapa error yang sering terjadi"),a(" dan "),e("a",{href:"#pertanyaan-seputar-deno"},[a("hal"),e("wbr"),a("-hal seputar Deno")]),a(".")],-1),c=a("Jika FAQ ini tidak menjawab pertanyaanmu, sebaiknya kamu juga membaca "),_={href:"https://core.telegram.org/bots/faq",target:"_blank",rel:"noopener noreferrer"},p=a("FAQ Bot"),b=a(" yang ditulis oleh tim Telegram."),g=e("h2",{id:"kenapa-saya-mengalami-error-ini",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kenapa-saya-mengalami-error-ini","aria-hidden":"true"},"#"),a(" Kenapa Saya Mengalami Error Ini?")],-1),y=e("h3",{id:"_400-bad-request-cannot-parse-entities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_400-bad-request-cannot-parse-entities","aria-hidden":"true"},"#"),a(" 400 Bad Request: Cannot parse entities")],-1),f=a("Error ini terjadi karena kamu sedang mengirim sebuah pesan menggunakan format tertentu, misal kamu menggunakan "),j=e("code",null,[a("parse"),e("wbr"),a("_mode")],-1),w=a(" ketika mengirim pesan. Tetapi, format tersebut ada yang keliru, sehingga Telegram tidak bisa menguraikannya. Sebaiknya kamu membaca kembali dokumentasi Telegram di "),x={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},B=a("bagian pemformatan"),q=a(". "),K=e("code",null,"Byte offsite",-1),T=a(" yang ditampilan di pesan error akan memberi tahu kamu dimana letak kesalahannya."),M=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Menggunakan Entities Alih-Alih Formatting"),e("p",null,[a("Kamu bisa menyusun entities dengan mengirim pesan terkait menggunakan opsi "),e("code",null,"entities"),a(". Teks pesanmu kemudian akan berisi string biasa, sehingga tidak perlu lagi menyaring karakter teks yang aneh. Meski kita jadi perlu menambahkan beberapa baris kode lagi, cara ini jauh lebih handal dan merupakan solusi yang cukup aman untuk permasalahan ini.")])],-1),F=e("h3",{id:"_401-unauthorized",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_401-unauthorized","aria-hidden":"true"},"#"),a(" 401 Unauthorized")],-1),S=a("Token bot kamu salah. Mungkin kamu berpikir ini hanyalah masalah sepele. Oh, boy! Kamu salah besar. Segera hubungi "),A={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},C=a("@Bot"),D=e("wbr",null,null,-1),N=a("Father"),v=a(" untuk melihat token bot kamu."),E=o('<h3 id="_403-forbidden-bot-was-blocked-by-the-user" tabindex="-1"><a class="header-anchor" href="#_403-forbidden-bot-was-blocked-by-the-user" aria-hidden="true">#</a> 403 Forbidden: bot was blocked by the user</h3><p>Kamu mungkin menemui error ini ketika mengirim sebuah pesan ke seorang user.</p><p>Ketika seorang user memblokir bot kamu, kamu tidak bisa mengirim pesan ataupun berinteraksi dengan mereka (kecuali jika bot dan user tersebut berada di grup yang sama). Telegram sengaja melakukannya untuk melindungi para user. Kamu tidak bisa melakukan apa-apa dengan pemblokiran tersebut.</p><p>Setidaknya, kamu bisa melakukan tindakan-tindakan berikut:</p><ul><li>Merespon error tersebut, misalnya dengan menghapus data user dari database.</li><li>Mengabaikan error-nya.</li><li>Menyimak update <code>my<wbr>_chat<wbr>_member</code> melalui <code>bot<wbr>.on(&quot;my<wbr>_chat<wbr>_member&quot;)</code> untuk mendapatkan notifikasi ketika user memblokir bot kamu dengan cara membandingkan field <code>status</code> <em>new chat member</em> yang lama dengan yang baru.</li></ul><h3 id="_404-not-found" tabindex="-1"><a class="header-anchor" href="#_404-not-found" aria-hidden="true">#</a> 404 Not found</h3>',6),I=a("Jika kamu menemui error ini ketika mengaktifkan bot, berarti ada yang salah dengan token bot kamu. Chat dengan "),J={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},P=a("@Bot"),R=e("wbr",null,null,-1),L=a("Father"),z=a(" untuk melihat tokennya."),V=a("Jika bot sebelumnya berjalan dengan baik-baik saja, kemudian secara tiba-tiba mendapatkan error 404, berarti ada yang salah dengan coding-an bot kamu. Kamu bisa bertanya kepada kami "),Q={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},G=a("di grup"),U=a(" (atau "),O={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},X=a("chat grup Rusia"),Y=a(")."),H=e("h3",{id:"_409-conflict-terminated-by-other-getupdates-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_409-conflict-terminated-by-other-getupdates-request","aria-hidden":"true"},"#"),a(" 409 Conflict: terminated by other getUpdates request")],-1),W=e("p",null,"Kamu secara tidak sengaja menjalankan bot sebanyak dua kali saat menggunakan long polling. Kamu hanya diizinkan menjalankan satu instance bot.",-1),Z=a("Jika kamu merasa sudah menjalankan bot sebanyak sekali saja, kamu perlu mengganti token bot-nya. Ketika token diganti, instance yang lain akan terhenti dengan sendirinya. Chat dengan "),$={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},aa=a("@Bot"),ea=e("wbr",null,null,-1),na=a("Father"),ta=a(" untuk mengganti token bot."),ia=o('<h3 id="_429-too-many-requests-retry-after-x" tabindex="-1"><a class="header-anchor" href="#_429-too-many-requests-retry-after-x" aria-hidden="true">#</a> 429: Too Many Requests: retry after X</h3><p>Selamat! Kamu telah mendapatkan salah satu error yang paling sulit untuk diperbaiki.</p><p>Ada dua kemungkinan yang terjadi:</p><p><strong>Pertama:</strong> Bot kamu tidak memiliki banyak user. Jika kasusnya seperti itu, berarti kamu sedang melakukan spam dengan cara mengirim request ke server Telegram secara berlebihan. Solusinya, jangan lakukan itu. Kamu harus mencari cara untuk mengurangi jumlah pemanggilan API tersebut seminimal mungkin.</p><p><strong>Kedua:</strong> Bot kamu sangat populer dan memiliki banyak sekali user (ratusan ribu). Kamu sudah berupaya untuk melakukan pemanggilan API seminimal mungkin, tetapi <em>tetap saja</em> kamu menemui error ini (error flood wait).</p><p>Ada beberapa cara yang bisa kamu lakukan:</p>',6),ra=a("Baca "),oa=a("materi ini"),sa=a(" supaya paham dengan situasi yang dialami."),da=a("Gunakan "),ua=a("plugin "),la=e("code",null,[a("transformer"),e("wbr"),a("-throttler")],-1),ma=a("."),ha=a("Gunakan "),ka=a("plugin "),ca=e("code",null,[a("auto"),e("wbr"),a("-retry")],-1),_a=a("."),pa=a("Minta bantuan kami "),ba={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},ga=a("di grup"),ya=a(". Kami memiliki beberapa orang yang berpengalaman di sana."),fa=e("li",null,"Meminta Telegram untuk meningkatkan batasan tersebut. Cara ini kemungkinan besar tidak akan berhasil jika kamu tidak melakukan langkah 1\u20133 terlebih dahulu.",-1),ja=o('<h3 id="cannot-find-type-definition-file-for-node-fetch" tabindex="-1"><a class="header-anchor" href="#cannot-find-type-definition-file-for-node-fetch" aria-hidden="true">#</a> Cannot find type definition file for \u2018node-fetch\u2019</h3><p>Error ini dihasilkan karena beberapa type declaration tidak ditemukan.</p><p>Cara yang direkomendasikan untuk memperbaikinya adalah dengan mengubah <code>skip<wbr>Lib<wbr>Check</code> menjadi <code>true</code> di opsi compile TypeScript kamu.</p><p>Jka kamu merasa perlu untuk tetap menggunakan opsi ini di mode <code>false</code>, kamu bisa menginstal type definition yang hilang dengan cara menjalankan <code>npm i <wbr>-D @types<wbr>/node<wbr>-fetch@2</code>.</p><h2 id="pertanyaan-seputar-deno" tabindex="-1"><a class="header-anchor" href="#pertanyaan-seputar-deno" aria-hidden="true">#</a> Pertanyaan Seputar Deno</h2><h3 id="kenapa-kami-mendukung-deno" tabindex="-1"><a class="header-anchor" href="#kenapa-kami-mendukung-deno" aria-hidden="true">#</a> Kenapa kami mendukung Deno?</h3><p>Berikut beberapa alasan kenapa kami lebih menyukai Deno dibandingkan dengan Node.js:</p><ul><li>Pembuatannya lebih simpel dan cepat.</li><li>Peralatan yang disediakan lebih baik.</li><li>Secara bawaan mampu menjalankan TypeScript.</li><li>Tidak perlu mengurus <code>package<wbr>.json</code> dan <code>node<wbr>_modules</code>.</li><li>Ia memiliki sebuah library standar yang sudah di-review.</li></ul>',8),wa=a("Deno diciptakan oleh Ryan Dahl\u2014orang yang sama yang menciptakan Node.js. Dia mengutarakan 10 penyesalannya mengenai Node.js di "),xa={href:"https://youtu.be/M3BM9TB-8yA",target:"_blank",rel:"noopener noreferrer"},Ba=a("video ini"),qa=a("."),Ka=e("p",null,"grammY sendiri lebih memprioritaskan Deno, dari situ ia disusun ulang agar dapat mendukung Node.js sama baiknya.",-1);function Ta(Ma,Fa){const t=s("ExternalLinkIcon"),i=s("RouterLink");return u(),l("div",null,[h,k,e("p",null,[c,e("a",_,[p,n(t)]),b]),g,y,e("p",null,[f,j,w,e("a",x,[B,n(t)]),q,K,T]),M,F,e("p",null,[S,e("a",A,[C,D,N,n(t)]),v]),E,e("p",null,[I,e("a",J,[P,R,L,n(t)]),z]),e("p",null,[V,e("a",Q,[G,n(t)]),U,e("a",O,[X,n(t)]),Y]),H,W,e("p",null,[Z,e("a",$,[aa,ea,na,n(t)]),ta]),ia,e("ol",null,[e("li",null,[ra,n(i,{to:"/id/advanced/flood.html"},{default:r(()=>[oa]),_:1}),sa]),e("li",null,[da,n(i,{to:"/id/plugins/transformer-throttler.html"},{default:r(()=>[ua,la]),_:1}),ma]),e("li",null,[ha,n(i,{to:"/id/plugins/auto-retry.html"},{default:r(()=>[ka,ca]),_:1}),_a]),e("li",null,[pa,e("a",ba,[ga,n(t)]),ya]),fa]),ja,e("blockquote",null,[e("p",null,[wa,e("a",xa,[Ba,n(t)]),qa])]),Ka])}const Aa=d(m,[["render",Ta],["__file","faq.html.vue"]]);export{Aa as default};
