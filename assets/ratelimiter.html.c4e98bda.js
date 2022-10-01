import{_ as k}from"./ratelimiter-role.f0e3b430.js";import{_ as d,r as i,o as m,c as b,b as s,w as t,a as n,d as a,e as c}from"./app.ff0cf306.js";const g={},h=n("h1",{id:"rate-limit-pengguna-ratelimiter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rate-limit-pengguna-ratelimiter","aria-hidden":"true"},"#"),a(" Rate Limit Pengguna ("),n("code",null,"ratelimiter"),a(")")],-1),_=a("ratelimiter adalah sebuah middleware yang dibuat dari framework bot grammY ataupun "),v={href:"https://github.com/telegraf/telegraf",target:"_blank",rel:"noopener noreferrer"},y=a("Telegraf"),f=a(" yang berfungsi untuk mengatur rate-limit pengguna bot. Simpelnya, plugin ini dapat membantu kamu dalam mencegah serangan spam ke bot. Supaya lebih paham, coba lihat ilustrasi berikut:"),w=c('<p><img src="'+k+'" alt="Peran ratelimiter dalam menangkis spam"></p><h2 id="bagaimana-cara-kerjanya" tabindex="-1"><a class="header-anchor" href="#bagaimana-cara-kerjanya" aria-hidden="true">#</a> Bagaimana Cara Kerjanya?</h2><p>Dalam keadaan normal, setiap request akan langsung diproses dan dijawab oleh bot kamu. Artinya, user bisa dengan mudah melakukan spam ke bot kamu. Mereka bisa saja mengirim banyak sekali request setiap detiknya, lalu bot kamu akan memproses semua request tersebut. Lantas, bagaimana cara kita menghentikannya? Solusinya adalah dengan menggunakan ratelimiter!</p><div class="custom-container warning"><p class="custom-container-title">Batasi User, Bukan Server Telegram!</p><p>Perlu diketahui, package ini <strong>TIDAK</strong> membatasi request yang datang dari server Telegram. Sebaliknya, ia memantau <code>from<wbr>.id</code> dari setiap request yang diterima lalu mengabaikannya begitu saja. Dengan begitu, server kamu tidak terbebani oleh pemrosesan pesan yang tidak perlu.</p></div><h2 id="opsi-pengaturan" tabindex="-1"><a class="header-anchor" href="#opsi-pengaturan" aria-hidden="true">#</a> Opsi Pengaturan</h2><p>Plugin ini menyediakan 5 opsi yang bisa diatur:</p>',6),x=c("<li><code>time<wbr>Frame</code>: Rentang waktu pemantauan request (bawaanya <code>1000</code> ms).</li><li><code>limit</code>: Jumlah request yang diperbolehkan untuk setiap <code>time<wbr>Frame</code> (bawaannya <code>1</code>).</li>",2),j=n("code",null,[a("storage"),n("wbr"),a("Client")],-1),R=a(": Jenis penyimpanan yang dipakai untuk menyimpan hasil pemantauan user beserta request-nya. Nilai bawaanya adalah "),S=n("code",null,[a("MEMORY"),n("wbr"),a("_STORE")],-1),q=a(" yang mana ia akan memakai in-memory "),T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",target:"_blank",rel:"noopener noreferrer"},C=a("Map"),E=a(". Kamu juga bisa menggantinya dengan Redis, serta penyimpanan-penyimpanan lain yang telah dijelaskan di bagian "),K=n("a",{href:"#tentang-storageclient"},[a("Tentang storage"),n("wbr"),a("Client")],-1),M=a("."),B=n("li",null,[n("code",null,[a("on"),n("wbr"),a("Limit"),n("wbr"),a("Exceeded")]),a(": Sebuah function yang menentukan aksi apa yang akan dilakukan ketika user melampaui batas (bawaanya mengabaikan request tersebut).")],-1),G=n("li",null,[n("code",null,[a("key"),n("wbr"),a("Generator")]),a(": Sebuah function yang mengembalikan key unik yang dibuat untuk setiap user (bawaanya menggunakan "),n("code",null,[a("from"),n("wbr"),a(".id")]),a("). Key ini digunakan untuk mengidentifikasi user, oleh karenanya ia harus unik, spesifik untuk satu user, dan dalam format string.")],-1),O=n("h3",{id:"tentang-storageclient",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tentang-storageclient","aria-hidden":"true"},"#"),a(" Tentang "),n("code",null,[a("storage"),n("wbr"),a("Client")])],-1),L=n("code",null,[a("MEMORY"),n("wbr"),a("_STORE")],-1),D=a(" atau in-memory tracking cocok digunakan di sebagian besar bot. Namun, kalau kamu menggunakan cluster untuk bot kamu, maka kamu tidak bisa menggunakan penyimpanan in-memory secara efektif. Itulah kenapa kami juga menyediakan opsi Redis. Kamu bisa menerapkan Redis dengan "),I={href:"https://github.com/luin/ioredis",target:"_blank",rel:"noopener noreferrer"},J=a("ioredis"),N=a(" atau "),P={href:"https://deno.land/x/redis",target:"_blank",rel:"noopener noreferrer"},F=a("redis"),Y=a(" jika kamu menggunakan Deno. Semua driver Redis yang menggunakan method "),V=n("code",null,"incr",-1),A=a(" dan "),H=n("code",null,"pexpire",-1),U=a(" seharusnya juga dapat bekerja sama baiknya. ratelimiter tidak berorientasi pada driver."),z=c('<blockquote><p>Catatan: Kamu harus memiliki redis-server <strong>2.6.0</strong> ke atas untuk menggunakan penyimpanan Redis bersama dengan ratelimiter. Versi Redis yang di bawah itu tidak didukung.</p></blockquote><h2 id="cara-penggunaan" tabindex="-1"><a class="header-anchor" href="#cara-penggunaan" aria-hidden="true">#</a> Cara Penggunaan</h2><p>Ada dua cara dalam menggunakan ratelimiter:</p><ul><li>Menggunakan pengaturan bawaan (<a href="#konfigurasi-bawaan">Konfigurasi Bawaan</a>),</li><li>Menentukan object khusus yang berisi konfigurasimu (<a href="#konfigurasi-manual">Konfigurasi Manual</a>).</li></ul><h3 id="konfigurasi-bawaan" tabindex="-1"><a class="header-anchor" href="#konfigurasi-bawaan" aria-hidden="true">#</a> Konfigurasi Bawaan</h3><p>Berikut cara termudah dalam menggunakan ratelimiter dengan menerapkan perilaku bawaan:</p>',6),W=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Batasi menjadi 1 pesan per detik untuk setiap user."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Batasi menjadi 1 pesan per detik untuk setiap user."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Batasi menjadi 1 pesan per detik untuk setiap user."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("h3",{id:"konfigurasi-manual",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#konfigurasi-manual","aria-hidden":"true"},"#"),a(" Konfigurasi Manual")],-1),$=n("p",null,[a("Seperti yang sudah disebutkan di awal, kamu bisa menentukan object "),n("code",null,"Options"),a(" ke method "),n("code",null,"limit()"),a(" untuk mengatur perilaku limiter.")],-1),nn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" Redis "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" redis "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Hanya 3 pesan yang akan diproses dalam rentang waktu 2 detik."),a(`
    timeFrame`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),a(`
    limit`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" adalah nilai bawaanya.'),a(`
    `),n("span",{class:"token comment"},"// Kamu tidak perlu mengatur storageClient jika tidak ingin menggunakan Redis."),a(`
    storageClient`),n("span",{class:"token operator"},":"),a(" redis"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// Berikut akan dijalankan ketika limit terlampaui."),a(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Tolong jangan kirim request berlebihan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("from"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(" Redis "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" redis "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Hanya 3 pesan yang akan diproses dalam rentang waktu 2 detik."),a(`
    `),n("span",{class:"token literal-property property"},"timeFrame"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" adalah nilai bawaanya.'),a(`
    `),n("span",{class:"token comment"},"// Kamu tidak perlu mengatur storageClient jika tidak ingin menggunakan Redis."),a(`
    `),n("span",{class:"token literal-property property"},"storageClient"),n("span",{class:"token operator"},":"),a(" redis"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// Berikut akan dijalankan ketika limit terlampaui."),a(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Tolong jangan kirim request berlebihan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("from"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" connect "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/redis/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" redis "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Hanya 3 pesan yang akan diproses dalam rentang waktu 2 detik."),a(`
    timeFrame`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),a(`
    limit`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" adalah nilai bawaanya.'),a(`
    `),n("span",{class:"token comment"},"// Kamu tidak perlu mengatur storageClient jika tidak ingin menggunakan Redis."),a(`
    storageClient`),n("span",{class:"token operator"},":"),a(" redis"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// Berikut akan dijalankan ketika limit terlampaui."),a(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Tolong jangan kirim request berlebihan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("from"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=a("Seperti yang kamu lihat dari contoh di atas, setiap user hanya diperbolehkan mengirim 3 request setiap 2 detik. Jika user tersebut mengirim request melebihi batas yang telah kita tentukan, bot akan membalas dengan, "),en=n("em",null,"\u201CTolong jangan kirim request berlebihan\u201D",-1),on=a(". Request tersebut kemudian akan diabaikan begitu saja karena kita tidak memanggil "),cn=a("next()"),ln=a(" di middleware."),un=n("blockquote",null,[n("p",null,[a("Catatan: Untuk menghindari flooding ke server Telegram, "),n("code",null,[a("on"),n("wbr"),a("Limit"),n("wbr"),a("Exceeded")]),a(" hanya akan dieksekusi sekali untuk setiap "),n("code",null,[a("time"),n("wbr"),a("Frame")]),a(".")])],-1),pn=n("p",null,"Contoh penggunaan lainnya adalah dengan membatasi request yang datang dari sebuah chat, alih-alih dari user tertentu:",-1),rn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"group"'),a(),n("span",{class:"token operator"},"||"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
        `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"group"'),a(),n("span",{class:"token operator"},"||"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
        `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" limit "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"group"'),a(),n("span",{class:"token operator"},"||"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},'// Key ini harus berupa angka dalam format string, misal "123456".'),a(`
        `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("p",null,[a("Dari contoh di atas, kita menggunakan "),n("code",null,[a("chat"),n("wbr"),a(".id")]),a(" sebagai key unik untuk melakukan rate-limit.")],-1),bn=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),gn=n("li",null,[a("Nama: "),n("code",null,"ratelimiter")],-1),hn=a("Sumber: "),_n={href:"https://github.com/grammyjs/ratelimiter",target:"_blank",rel:"noopener noreferrer"},vn=a("https://"),yn=n("wbr",null,null,-1),fn=a("github"),wn=n("wbr",null,null,-1),xn=a(".com"),jn=n("wbr",null,null,-1),Rn=a("/grammyjs"),Sn=n("wbr",null,null,-1),qn=a("/ratelimiter"),Tn=a("Referensi: "),Cn={href:"https://doc.deno.land/https://deno.land/x/grammy_ratelimiter/mod.ts",target:"_blank",rel:"noopener noreferrer"},En=c("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_ratelimiter<wbr>/mod<wbr>.ts",23);function Kn(Mn,Bn){const u=i("Tag"),p=i("TagGroup"),o=i("ExternalLinkIcon"),e=i("CodeGroupItem"),l=i("CodeGroup"),r=i("RouterLink");return m(),b("div",null,[h,s(p,null,{default:t(()=>[s(u,{type:"official",text:"RESMI"})]),_:1}),n("p",null,[_,n("a",v,[y,s(o)]),f]),w,n("ul",null,[x,n("li",null,[j,R,S,q,n("a",T,[C,s(o)]),E,K,M]),B,G]),O,n("p",null,[L,D,n("a",I,[J,s(o)]),N,n("a",P,[F,s(o)]),Y,V,A,H,U]),z,s(l,null,{default:t(()=>[s(e,{title:"TypeScript",active:""},{default:t(()=>[W]),_:1}),s(e,{title:"JavaScript"},{default:t(()=>[Q]),_:1}),s(e,{title:"Deno"},{default:t(()=>[X]),_:1})]),_:1}),Z,$,s(l,null,{default:t(()=>[s(e,{title:"TypeScript",active:""},{default:t(()=>[nn]),_:1}),s(e,{title:"JavaScript"},{default:t(()=>[an]),_:1}),s(e,{title:"Deno"},{default:t(()=>[sn]),_:1})]),_:1}),n("p",null,[tn,en,on,s(r,{to:"/id/guide/middleware.html#middleware-stack"},{default:t(()=>[cn]),_:1}),ln]),un,pn,s(l,null,{default:t(()=>[s(e,{title:"TypeScript",active:""},{default:t(()=>[rn]),_:1}),s(e,{title:"JavaScript"},{default:t(()=>[kn]),_:1}),s(e,{title:"Deno"},{default:t(()=>[dn]),_:1})]),_:1}),mn,bn,n("ul",null,[gn,n("li",null,[hn,n("a",_n,[vn,yn,fn,wn,xn,jn,Rn,Sn,qn,s(o)])]),n("li",null,[Tn,n("a",Cn,[En,s(o)])])])])}const Ln=d(g,[["render",Kn],["__file","ratelimiter.html.vue"]]);export{Ln as default};
