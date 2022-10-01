import{_ as l,r as c,o as p,c as r,a as n,b as s,w as t,d as a,e as k}from"./app.ff0cf306.js";const d={},m=n("h1",{id:"peningkatan-iii-reliabilitas",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#peningkatan-iii-reliabilitas","aria-hidden":"true"},"#"),a(" Peningkatan III: Reliabilitas")],-1),g=a("Sebelum memulai, pastikan kamu sudah memasang "),b=a("error handler"),h=a(" yang sesuai dengan bot-mu. Semua error yang kemungkinan besar bisa terjadi (pemanggilan API yang gagal, koneksi yang tidak tersambung, query database yang gagal dilakukan, middleware yang tidak berjalan dengan baik, dsb) harus bisa ditangkap dan ditangani dengan baik."),_=n("p",null,[a("Kamu juga sebaiknya menggunakan "),n("code",null,"await"),a(" di setiap promise. Jika masih bersikeras untuk tidak menggunakan "),n("code",null,"await"),a(", setidaknya pasang "),n("code",null,"catch"),a(" sebagai gantinya. Pakai "),n("em",null,"linting rule"),a(" supaya kamu tidak lupa menggunakannya.")],-1),y=n("h2",{id:"graceful-shutdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#graceful-shutdown","aria-hidden":"true"},"#"),a(" Graceful shutdown")],-1),f=a("Ada satu hal yang harus diperhatikan khusus untuk bot-bot yang menggunakan long polling. Sebelum mematikan bot atau instance yang sedang berjalan, kamu sebaiknya menangkap event "),v=n("code",null,"SIGTERM",-1),w=a(" dan "),j=n("code",null,"SIGINT",-1),I=a(" terlebih dahulu, kemudian panggil "),S=n("code",null,[a("bot"),n("wbr"),a(".stop")],-1),x=a(" (built-in di long polling) atau hentikan bot menggunakan "),R={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/RunnerHandle#stop",target:"_blank",rel:"noopener noreferrer"},T=a("handle"),G=a(" (grammY runner)"),B=n("h3",{id:"long-polling-sederhana",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling-sederhana","aria-hidden":"true"},"#"),a(" Long Polling Sederhana")],-1),N=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Deno akan dimatikan"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h3",{id:"menggunakan-grammy-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menggunakan-grammy-runner","aria-hidden":"true"},"#"),a(" Menggunakan grammY Runner")],-1),M=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Deno akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("p",null,"Itulah tips-tips untuk menjaga reliabilitas bot kamu. Jika diterapkan dengan benar, seharusnya tidak akan terjadi crash lagi di bot kamu.",-1),K=n("h2",{id:"menjamin-reliabilitas",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menjamin-reliabilitas","aria-hidden":"true"},"#"),a(" Menjamin Reliabilitas")],-1),C=a("Bagaimana jika suatu saat bot kamu sedang menangani transaksi pembayaran, lalu kamu dihadapkan "),Y={href:"https://stackoverflow.com/questions/43724467/what-is-the-difference-between-kill-and-kill-9",target:"_blank",rel:"noopener noreferrer"},U=a("skenario "),A=n("code",null,[a("kill"),n("wbr"),a("-9")],-1),J=a(" karena CPU tiba-tiba terbakar atau terjadi pemadaman listrik secara tiba-tiba. Masalah akan menjadi sedikit rumit ketika dihadapkan dengan kondisi yang mengharuskan proses bot dihentikan secara paksa di saat itu juga."),V=a("Akibatnya, bot tidak bisa menjamin eksekusi middleware kamu dijalankan tepat satu kali. Simak "),O={href:"https://github.com/tdlib/telegram-bot-api/issues/126",target:"_blank",rel:"noopener noreferrer"},W=a("diskusi di Git"),z=n("wbr",null,null,-1),F=a("Hub ini"),Q=a(" untuk mengetahui "),X=n("strong",null,"kenapa",-1),Z=a(" bot kamu mengirim pesan duplikat (atau bahkan tidak mengirim pesan sama kali) di suatu kondisi tertentu. Di materi ini kita akan memahami "),$=n("strong",null,"bagaimana",-1),nn=a(" grammY bertindak di kondisi yang tidak biasa tersebut, serta bagaimana kita bisa mengatasinya dengan baik."),an=a("Apakah kamu cuma tertarik untuk membuat bot Telegram? Silahkan "),sn=a("lewati sisa halaman ini"),tn=n("wbr",null,null,-1),en=a("."),on=k('<h3 id="webhook" tabindex="-1"><a class="header-anchor" href="#webhook" aria-hidden="true">#</a> Webhook</h3><p>Kalau kamu menjalankan bot menggunakan webhook, server API Bot akan terus mengirim ulang update ke bot kamu ketika ia tidak menerima respon <code>OK</code>. Itulah kenapa bot kamu akan mengirim pesan duplikat ketika ia dijalankan kembali dari proses penghentian yang tidak wajar. Kalau kamu ingin mencegah hal tersebut terjadi, kamu harus membuat pencegah duplikasimu sendiri berdasarkan <code>update<wbr>_id</code> karena grammY belum menyediakan fitur tersebut. Tetapi, jika kamu merasa seseorang akan terbantu dengan pencegah duplikasi buatanmu, silahkan kirim pull request ke repositori kami.</p><h3 id="long-polling" tabindex="-1"><a class="header-anchor" href="#long-polling" aria-hidden="true">#</a> Long Polling</h3><p>Long polling lebih menarik lagi. Polling bawaan pada dasarnya memproses kembali <em>batch</em> update terbaru yang sebelumnya gagal diproses.</p>',4),cn=a("Perlu diingat bahwa jika kamu menghentikan bot menggunakan "),un=n("code",null,[a("bot"),n("wbr"),a(".stop")],-1),ln=a(", "),pn={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},rn=a("offset dari update"),kn=a(" tersebut akan disinkronkan dengan server Telegram dengan cara memanggil "),dn=n("code",null,[a("get"),n("wbr"),a("Updates")],-1),mn=a(" beserta offset yang benar, namun data update-nya tidak diproses kembali."),gn=n("p",null,[a("Dengan kata lain, kamu tidak akan kehilangan update sama sekali, tetapi besar kemungkinan bot kamu akan memproses 100 update yang sudah diproses sebelumnya. Karena pemanggilan "),n("code",null,[a("send"),n("wbr"),a("Message")]),a(" dilakukan sama persis, maka user akan menerima pesan duplikat dari bot kamu. Tetapi, dengan cara demikian "),n("em",null,"setidaknya satu"),a(" pemrosesan bisa terjamin.")],-1),bn=n("h3",{id:"grammy-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grammy-runner","aria-hidden":"true"},"#"),a(" grammY Runner")],-1),hn=a("Kalau kamu menggunakan "),_n=a("grammY runner"),yn=a(" di mode "),fn=n("em",null,"concurrent",-1),vn=a(", pemanggilan "),wn=n("code",null,[a("get"),n("wbr"),a("Updates")],-1),jn=a(" berikutnya berpotensi dilakukan sebelum middleware kamu selesai memproses update pertama dari "),In=n("em",null,"batch",-1),Sn=a(" tersebut. Itulah kenapa, "),xn={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},Rn=a("update offset"),Tn=a("-nya terkonfirmasi sebelum waktunya. Ini adalah efek dari penggunaan concurrency secara maksimal, dan sayangnya, kita tidak bisa menghindarinya tanpa mengurangi responsifitas dan jumlah output-nya. Dampaknya, jika bot kamu dihentikan di momen yang tidak tepat, 100 update yang sebelumnya sudah diminta tetapi belum diproses, tidak bisa diminta lagi karena Telegram telah menandainya sebagai sudah diproses. Sehingga, data-data update tadi akan hilang selamanya."),Gn=n("p",null,[a("Untuk menghindari hal tersebut terjadi, kamu harus menggunakan "),n("em",null,"source"),a(" dan "),n("em",null,"sink"),a(" dari package grammy runner untuk membuat jalur update-mu sendiri yang meneruskan semua update ke antrian pesan atau queue terlebih dahulu.")],-1),Bn=a("Buat sebuah "),Nn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSink",target:"_blank",rel:"noopener noreferrer"},Dn=a("sink"),qn=a(" sebagai jalur untuk meneruskan update ke queue, lalu mulai satu runner yang bertugas menyuplai pesan-pesan tersebut ke queue."),Ln=a("Kemudian, buat sebuah "),Mn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSource",target:"_blank",rel:"noopener noreferrer"},En=a("source"),Pn=a(" untuk mengambil pesan dari queue."),Hn=a("Dengan begitu, kamu menjalankan dua instance grammY runner yang berbeda. Konsep tadi adalah sebuah ide berdasarkan pengetahuan yang kami punya, tetapi ide tersebut belum pernah diterapkan. Silahkan "),Kn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},Cn=a("hubungi grup Telegram kami"),Yn=a(" kalau kamu mempunyai beberapa pertanyaan atau bahkan kamu berhasil melakukannya dan ingin membagikannya ke kami."),Un=a("Di sisi lain, kalau bot kamu sedang mengalami beban tinggi yang mengakibatkan polling update menjadi terlambat karena "),An=a("pembatasan beban yang dilakukan secara otomatis"),Jn=a(", maka kemungkinan besar beberapa update akan di-fetch lagi, yang mengakibatkan pemrosesan pesan duplikat. Oleh karena itu, efek yang dihasilkan dari penggunaan concurency secara penuh adalah tidak ada yang bisa menjamin pemrosesan dilakukan baik "),Vn=n("em",null,"setidaknya sekali",-1),On=a(" ataupun "),Wn=n("em",null,"paling banyak sekali",-1),zn=a(".");function Fn(Qn,Xn){const i=c("RouterLink"),e=c("ExternalLinkIcon"),o=c("CodeGroupItem"),u=c("CodeGroup");return p(),r("div",null,[m,n("p",null,[g,s(i,{to:"/id/guide/errors.html"},{default:t(()=>[b]),_:1}),h]),_,y,n("p",null,[f,v,w,j,I,S,x,n("a",R,[T,s(e)]),G]),B,s(u,null,{default:t(()=>[s(o,{title:"TypeScript",active:""},{default:t(()=>[N]),_:1}),s(o,{title:"JavaScript"},{default:t(()=>[D]),_:1}),s(o,{title:"Deno"},{default:t(()=>[q]),_:1})]),_:1}),L,s(u,null,{default:t(()=>[s(o,{title:"TypeScript",active:""},{default:t(()=>[M]),_:1}),s(o,{title:"JavaScript"},{default:t(()=>[E]),_:1}),s(o,{title:"Deno"},{default:t(()=>[P]),_:1})]),_:1}),H,K,n("p",null,[C,n("a",Y,[U,A,s(e)]),J]),n("p",null,[V,n("a",O,[W,z,F,s(e)]),Q,X,Z,$,nn]),n("blockquote",null,[n("p",null,[an,s(i,{to:"/id/advanced/flood.html"},{default:t(()=>[sn,tn,en]),_:1})])]),on,n("blockquote",null,[n("p",null,[cn,un,ln,n("a",pn,[rn,s(e)]),kn,dn,mn])]),gn,bn,n("p",null,[hn,s(i,{to:"/id/plugins/runner.html"},{default:t(()=>[_n]),_:1}),yn,fn,vn,wn,jn,In,Sn,n("a",xn,[Rn,s(e)]),Tn]),Gn,n("ol",null,[n("li",null,[Bn,n("a",Nn,[Dn,s(e)]),qn]),n("li",null,[Ln,n("a",Mn,[En,s(e)]),Pn])]),n("p",null,[Hn,n("a",Kn,[Cn,s(e)]),Yn]),n("p",null,[Un,s(i,{to:"/id/plugins/runner.html#sink"},{default:t(()=>[An]),_:1}),Jn,Vn,On,Wn,zn])])}const $n=l(d,[["render",Fn],["__file","reliability.html.vue"]]);export{$n as default};
