import{_ as d,r as i,o as l,c as r,a as n,b as t,w as o,d as e}from"./app.1137d7ac.js";const _={},u=n("h1",{id:"daftar-periksa-deployment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#daftar-periksa-deployment","aria-hidden":"true"},"#"),e(" Daftar Periksa Deployment")],-1),h=n("p",null,"Berikut hal-hal yang perlu diperhatikan ketika meng-hosting bot dengan skala yang besar.",-1),c=n("blockquote",null,[n("p",null,[e("Kamu mungkin juga tertarik dengan panduan kami mengenai hosting sebuah bot. Lihat tab "),n("strong",null,"Hosting / Tutorial"),e(" di bagian atas halaman untuk melihat beberapa platform yang sudah memiliki panduan khusus.")])],-1),m=n("h2",{id:"error",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#error","aria-hidden":"true"},"#"),e(" Error")],-1),k=e("Pasang "),g=n("code",null,"error handler",-1),p=e(" menggunakan "),b=n("code",null,[e("bot"),n("wbr"),e(".catch")],-1),f=e(" (long polling) atau pada web framework-mu (webhooks)."),y=n("li",null,[e("Gunakan "),n("code",null,"await"),e(" di semua "),n("code",null,"promise"),e(" dan install "),n("strong",null,"linting"),e(" yang mewajibkan penerapan aturan tersebut agar kamu tidak lupa untuk menggunakan dua syntax ini.")],-1),w=n("h2",{id:"pengiriman-pesan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pengiriman-pesan","aria-hidden":"true"},"#"),e(" Pengiriman Pesan")],-1),j=e("Kirim file mengunakan "),x=n("code",null,"path",-1),P=e(" atau "),v=n("code",null,"buffer",-1),B=e(", bukan dengan "),I=n("code",null,"stream",-1),q=e(", atau setidaknya kamu "),G=e("tahu jebakan"),L=n("wbr",null,null,-1),S=e("-jebakannya"),C=e("."),T=e("Gunakan "),U=n("code",null,[e("bot"),n("wbr"),e('.on("callback'),n("wbr"),e("_query:"),n("wbr"),e('data")')],-1),z=e(" sebagai penanganan "),A=n("em",null,"fallback",-1),E=e(" untuk "),K=e("menanggapi semua callback query"),R=e("."),H=e("Gunakan "),J=e("plugin "),M=n("code",null,[e("transformer"),n("wbr"),e("-throttler")],-1),N=e(" agar terhindari dari rate limit."),V=n("strong",null,"Opsional.",-1),Y=e(" Gunakan "),D=e("plugin "),F=n("code",null,[e("auto"),n("wbr"),e("-retry")],-1),O=e(" untuk menangani error "),W=n("code",null,"flood wait",-1),Q=e(" secara otomatis."),X=n("h2",{id:"penskalaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#penskalaan","aria-hidden":"true"},"#"),e(" Penskalaan")],-1),Z=n("p",null,"Ini tergantung dari jenis deployment kamu.",-1),$=n("h3",{id:"long-polling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),e(" Long Polling")],-1),ee=e("Gunakan grammY runner"),ne=e("."),te=e("Gunakan "),ae=n("code",null,"sequentialize",-1),oe=e(" dengan "),se=n("em",null,"session key",-1),ie=e(" dari "),de=n("em",null,"resolver function",-1),le=e(" yang sama sebagai "),re=n("em",null,"session middleware",-1),_e=e(" kamu"),ue=e("."),he=e("Periksa konfigurasi "),ce=n("code",null,"run",-1),me=e(" ("),ke={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/run",target:"_blank",rel:"noopener noreferrer"},ge=e("Referensi API"),pe=e(") dan pastikan sesuai dengan kebutuhanmu, atau bahkan pertimbangkan untuk membuat runner-mu sendiri dari "),be={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSource",target:"_blank",rel:"noopener noreferrer"},fe=e("source"),ye=e(" dan "),we={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSink",target:"_blank",rel:"noopener noreferrer"},je=e("sink"),xe=e(". Hal utama yang perlu dipertimbangkan adalah beban maksimum yang ingin diterapkan ke servermu, misal: berapa banyak update yang dapat diproses secara bersamaan."),Pe=e("Implementasikan "),ve=e("graceful shutdown"),Be=e(" ketika hendak menghentikan bot (misalnya untuk beralih ke versi baru)."),Ie=n("h3",{id:"webhooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),e(" Webhooks")],-1),qe=e("Pastikan tidak melakukan operasi yang berjalan lama di middleware, seperti pengiriman file dalam jumlah besar. "),Ge=e("Hal ini akan mengakibatkan error timeout"),Le=e(" pada webhooks serta pemrosesan update yang sama berulang kali karena Telegram terus mengirim kembali update yang tidak direspon. Untuk menghindari hal tersebut, sebaiknya gunakan sistem "),Se=n("em",null,"task queuing",-1),Ce=e("."),Te=e("Buat dirimu terbiasa dengan konfigurasi "),Ue=n("code",null,[e("webhook"),n("wbr"),e("Callback")],-1),ze=e(" ("),Ae={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/webhookCallback",target:"_blank",rel:"noopener noreferrer"},Ee=e("Referensi API"),Ke=e(")."),Re=e("Jika hendak mengatur opsi "),He=n("code",null,[e("get"),n("wbr"),e("Session"),n("wbr"),e("Key")],-1),Je=e(" untuk session, "),Me=e("Gunakan "),Ne=n("code",null,"sequentialize",-1),Ve=e(" dengan "),Ye=n("em",null,"session key",-1),De=e(" dari "),Fe=n("em",null,"resolver function",-1),Oe=e(" yang sama sebagai "),We=n("em",null,"session middleware",-1),Qe=e(" kamu."),Xe=e("."),Ze=e("Jika menjalankan bot di platform serverless atau autoscaling, "),$e={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotConfig",target:"_blank",rel:"noopener noreferrer"},en=e("atur informasi bot"),nn=e(" untuk mencegah panggilan "),tn=n("code",null,[e("get"),n("wbr"),e("Me")],-1),an=e(" yang berlebihan."),on=e("Pertimbangkan untuk menggunakan "),sn=e("webhook reply"),dn=e("."),ln=n("h2",{id:"session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#session","aria-hidden":"true"},"#"),e(" Session")],-1),rn=e("Pertimbangkan menggunakan "),_n=n("code",null,[e("lazy"),n("wbr"),e("Sessions")],-1),un=e(" seperti yang sudah dijelaskan "),hn=e("di sini"),cn=e("."),mn=n("li",null,[e("Gunakan opsi "),n("code",null,"storage"),e(" untuk mengatur tempat penyimpanan. Jika tidak dilakukan, semua data akan hilang ketika bot berhenti bekerja.")],-1),kn=n("h2",{id:"pengujian",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pengujian","aria-hidden":"true"},"#"),e(" Pengujian")],-1),gn=n("p",null,"Lakukan berbagai pengujian untuk bot. Berikut cara melakukannya dengan grammY:",-1),pn=n("em",null,"Mock",-1),bn=e(" request API yang keluar menggunakan "),fn=e("function transformer"),yn=e("."),wn=e("Tentukan dan kirim berbagai sampel object update ke bot melalui "),jn=n("code",null,[e("bot"),n("wbr"),e(".handle"),n("wbr"),e("Update")],-1),xn=e(" ("),Pn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},vn=e("referensi API"),Bn=e("). Pertimbangkan untuk mengambil beberapa inspirasi dari "),In={href:"https://core.telegram.org/bots/webhooks#testing-your-bot-with-updates",target:"_blank",rel:"noopener noreferrer"},qn=e("object update"),Gn=e(" yang telah disediakan oleh tim Telegram."),Ln={class:"custom-container tip"},Sn=n("p",{class:"custom-container-title"},"Berkontribusi untuk Pengujian Framework",-1),Cn=n("p",null,"Meskipun grammY sudah menyediakan sarana yang diperlukan untuk membuat pengujian, tetapi akan sangat membantu jika kita memiliki framework pengujian tersendiri untuk berbagai bot. Ini adalah wilayah baru, framework pengujian secara masal seperti itu belum pernah ada. Kami menantikan kontribusimu!",-1),Tn=e("Salah satu contoh bagaimana pengujian dilakukan "),Un={href:"https://github.com/PavelPolyakov/grammy-with-tests",target:"_blank",rel:"noopener noreferrer"},zn=e("bisa ditemukan di sini"),An=e(".");function En(Kn,Rn){const a=i("RouterLink"),s=i("ExternalLinkIcon");return l(),r("div",null,[u,h,c,m,n("ol",null,[n("li",null,[t(a,{to:"/id/guide/errors.html"},{default:o(()=>[k,g,p,b,f]),_:1})]),y]),w,n("ol",null,[n("li",null,[j,x,P,v,B,I,q,t(a,{to:"/id/advanced/transformers.html#penggunaan-function-transformer"},{default:o(()=>[G,L,S]),_:1}),C]),n("li",null,[T,U,z,A,E,t(a,{to:"/id/plugins/keyboard.html#merespon-ketika-tombol-ditekan"},{default:o(()=>[K]),_:1}),R]),n("li",null,[H,t(a,{to:"/id/plugins/transformer-throttler.html"},{default:o(()=>[J,M]),_:1}),N]),n("li",null,[V,Y,t(a,{to:"/id/plugins/auto-retry.html"},{default:o(()=>[D,F]),_:1}),O,W,Q])]),X,Z,$,n("ol",null,[n("li",null,[t(a,{to:"/id/plugins/runner.html"},{default:o(()=>[ee]),_:1}),ne]),n("li",null,[t(a,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:o(()=>[te,ae,oe,se,ie,de,le,re,_e]),_:1}),ue]),n("li",null,[he,ce,me,n("a",ke,[ge,t(s)]),pe,n("a",be,[fe,t(s)]),ye,n("a",we,[je,t(s)]),xe]),n("li",null,[Pe,t(a,{to:"/id/advanced/reliability.html#graceful-shutdown"},{default:o(()=>[ve]),_:1}),Be])]),Ie,n("ol",null,[n("li",null,[qe,t(a,{to:"/id/guide/deployment-types.html#mengakhiri-request-webhook-tepat-waktu"},{default:o(()=>[Ge]),_:1}),Le,Se,Ce]),n("li",null,[Te,Ue,ze,n("a",Ae,[Ee,t(s)]),Ke]),n("li",null,[Re,He,Je,t(a,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:o(()=>[Me,Ne,Ve,Ye,De,Fe,Oe,We,Qe]),_:1}),Xe]),n("li",null,[Ze,n("a",$e,[en,t(s)]),nn,tn,an]),n("li",null,[on,t(a,{to:"/id/guide/deployment-types.html#webhook-reply"},{default:o(()=>[sn]),_:1}),dn])]),ln,n("ol",null,[n("li",null,[rn,_n,un,t(a,{to:"/id/plugins/session.html#lazy-session"},{default:o(()=>[hn]),_:1}),cn]),mn]),kn,gn,n("ol",null,[n("li",null,[pn,bn,t(a,{to:"/id/advanced/transformers.html"},{default:o(()=>[fn]),_:1}),yn]),n("li",null,[wn,jn,xn,n("a",Pn,[vn,t(s)]),Bn,n("a",In,[qn,t(s)]),Gn])]),n("div",Ln,[Sn,Cn,n("p",null,[Tn,n("a",Un,[zn,t(s)]),An])])])}const Jn=d(_,[["render",En],["__file","deployment.html.vue"]]);export{Jn as default};
