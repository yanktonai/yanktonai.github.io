import{_ as p,r as i,o as r,c as d,a as n,b as s,w as e,d as a,e as l}from"./app.1137d7ac.js";const k={},m=n("h1",{id:"peningkatan-i-codebase-skala-besar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#peningkatan-i-codebase-skala-besar","aria-hidden":"true"},"#"),a(" Peningkatan I: Codebase Skala Besar")],-1),b=n("p",null,"Ketika bot-mu terus berkembang dan semakin kompleks, kamu akan mengalami kesulitan dalam mengatur struktur codebase untuk aplikasimu. Umumnya, kamu bisa membagi codebase menjadi beberapa file.",-1),g=n("h2",{id:"solusi-yang-tersedia",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#solusi-yang-tersedia","aria-hidden":"true"},"#"),a(" Solusi yang Tersedia")],-1),h=a("grammY masih cukup muda dan belum menyediakan integrasi resmi "),_=n("em",null,"DI container",-1),y=a(". Ikuti "),v={href:"https://t.me/grammyjs_news",target:"_blank",rel:"noopener noreferrer"},w=a("@grammyjs"),f=n("wbr",null,null,-1),x=a("_news"),C=a(" untuk mendapatkan notifikasi ketika integrasi sudah tersedia."),M=n("p",null,"Perlu dicatat bahwa tidak ada satu solusi yang cocok untuk semua orang, sehingga kamu dapat dengan bebas mengatur struktur kode sesukamu. Berikut strategi yang sudah terbukti sesuai dalam penyusunan struktur kode.",-1),j=n("li",null,"Kelompokkan hal-hal yang saling berkaitan di dalam file yang sama (atau di direktori yang sama, tergantung dari seberapa besar kode kamu).",-1),q=n("li",null,"Buat sebuah instance bot terpusat yang menggabungkan semua middleware dengan cara memasangnya ke dalam bot.",-1),Q=a("(Opsional) Filter update secara terpusat terlebih dahulu, lalu sebar update dengan cara yang sesuai. Untuk melakukannya, silahkan cek "),I=n("code",null,[a("bot"),n("wbr"),a(".route")],-1),N=a(" ("),S={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#route",target:"_blank",rel:"noopener noreferrer"},T=a("API Reference"),B=a(") atau bisa juga menggunakan "),D=a("plugin router"),O=a("."),F=a("Contoh siap pakai yang mengimplementasikan strategi-strategi di atas bisa ditemukan di "),P={href:"https://github.com/grammyjs/examples/tree/main/scaling",target:"_blank",rel:"noopener noreferrer"},G=a("Repositori Contoh Bot"),K=a("."),L=l(`<h2 id="contoh-struktur" tabindex="-1"><a class="header-anchor" href="#contoh-struktur" aria-hidden="true">#</a> Contoh Struktur</h2><p>Untuk bot sederhana yang menangani <em>TODO list</em>, kamu bisa menggunakan struktur berikut.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>src/
\u251C\u2500\u2500 bot.ts
\u2514\u2500\u2500 todo/
    \u251C\u2500\u2500 item.ts
    \u2514\u2500\u2500 list.ts
</code></pre></div><p><code>item<wbr>.ts</code> hanya diperuntukkan untuk mendefinisikan hal-hal yang berhubungan dengan item-item TODO, kemudian bagian kode tersebut akan digunakan di <code>list<wbr>.ts</code>.</p><p>Di <code>list<wbr>.ts</code>, kamu bisa melakukan hal seperti berikut:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Tambahkan beberapa handler di sini</span>
<span class="token comment">// yang fungsinya mengatur middleware kamu seperti biasanya.</span>
lists<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),R=a("Sebagai tambahan, kamu bisa menambahkan sebuah "),U=a("error boundary"),V=a(" untuk mengatasi semua error yang terjadi di dalam module-mu."),Y=l(`<p>Sekarang, kamu bisa memasang module-nya di <code>bot<wbr>.ts</code> seperti ini:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lists <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./todo/list&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ... kamu bisa menambahkan beberapa module seperti \`todo\` di sini</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A=a("Cara lainnya, kamu bisa menggunakan "),E=a("plugin router"),z=a(". Plugin ini juga bisa digunakan untuk menggabungkan modul-modul yang berbeda dengan menentukan middleware mana yang akan digunakan di awal."),H=n("p",null,"Yang perlu diingat adalah tidak ada satu cara mutlak untuk mengatur struktur bot kamu, karena masing-masing bot memiliki kasus yang berbeda. Seperti biasa, pilih cara yang menurutmu paling sesuai dan cocok untuk bot kamu, karena kamulah sebagai pencipta yang paham mengenai seluk-beluk dari bot kamu. \u{1F609}",-1),J=n("h2",{id:"type-definition-untuk-middleware-yang-telah-di-extract",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-definition-untuk-middleware-yang-telah-di-extract","aria-hidden":"true"},"#"),a(" Type Definition untuk Middleware yang Telah Di-extract")],-1),W=n("p",null,"Struktur di atas dapat bekerja dengan baik menggunakan sebuah composer. Tetapi, di situasi tertentu kamu mungkin ingin meng-extract sebuah handler ke dalam sebuah function, alih-alih membuat sebuah composer baru lalu menambahkan logika ke dalamnya. Untuk melakukannya, kamu perlu menambahkan type definition middleware yang sesuai ke handler terkait karena mereka tidak bisa lagi mengambilnya dari composer.",-1),X=a("grammY meng-export type definition untuk semua "),Z=n("strong",null,"type middleware yang telah dikerucutkan",-1),$=a(", misalnya sebuah middleware yang bisa kamu tambahkan ke command handler. Selain itu, ia juga meng-export type definition beberapa "),nn=n("strong",null,"context object yang telah dikerucutkan",-1),an=a(" yang digunakan di middleware tersebut. Kedua type tersebut parameternya ditulis ulang dengan "),sn=a("custom context object"),en=a(" kamu. Oleh karena itu, command handler akan memiliki type "),tn=n("code",null,[a("Command"),n("wbr"),a("Middleware<My"),n("wbr"),a("Context>")],-1),on=a(" serta "),cn=n("code",null,[a("Command"),n("wbr"),a("Context<My"),n("wbr"),a("Context>")],-1),ln=a(" di context objectnya. Mereka bisa digunakan dengan cara seperti ini:"),un=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"CallbackQueryMiddleware"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"CommandContext"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"NextFunction"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"commandMiddleware"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token operator"},":"),a(" CommandContext"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),a(" next"),n("span",{class:"token operator"},":"),a(" NextFunction"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// menangani command handling"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"const"),a(" callbackQueryMiddleware"),n("span",{class:"token operator"},":"),a(" CallbackQueryMiddleware"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// menangani callback query"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"help"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(" commandMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"callbackQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"query-data"'),n("span",{class:"token punctuation"},","),a(" callbackQueryMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"CallbackQueryMiddleware"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"CommandContext"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"NextFunction"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"commandMiddleware"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token operator"},":"),a(" CommandContext"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),a(" next"),n("span",{class:"token operator"},":"),a(" NextFunction"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// menangani command handling"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"const"),a(" callbackQueryMiddleware"),n("span",{class:"token operator"},":"),a(" CallbackQueryMiddleware"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// menangani callback query"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"help"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(" commandMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"callbackQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"query-data"'),n("span",{class:"token punctuation"},","),a(" callbackQueryMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=a("Kunjungi "),dn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts#Type_Aliases",target:"_blank",rel:"noopener noreferrer"},kn=a("referensi API type aliases"),mn=a(" untuk melihat gambaran umum semua type aliases yang telah di-export oleh grammY.");function bn(gn,hn){const t=i("ExternalLinkIcon"),o=i("RouterLink"),c=i("CodeGroupItem"),u=i("CodeGroup");return r(),d("div",null,[m,b,g,n("blockquote",null,[n("p",null,[h,_,y,n("a",v,[w,f,x,s(t)]),C])]),M,n("ol",null,[j,q,n("li",null,[Q,I,N,n("a",S,[T,s(t)]),B,s(o,{to:"/id/plugins/router.html"},{default:e(()=>[D]),_:1}),O])]),n("p",null,[F,n("a",P,[G,s(t)]),K]),L,n("p",null,[R,s(o,{to:"/id/guide/errors.html#error-boundary"},{default:e(()=>[U]),_:1}),V]),Y,n("p",null,[A,s(o,{to:"/id/plugins/router.html"},{default:e(()=>[E]),_:1}),z]),H,J,W,n("p",null,[X,Z,$,nn,an,s(o,{to:"/id/guide/context.html#memodifikasi-object-context"},{default:e(()=>[sn]),_:1}),en,tn,on,cn,ln]),s(u,null,{default:e(()=>[s(c,{title:"Node.js",active:""},{default:e(()=>[un]),_:1}),s(c,{title:"Deno"},{default:e(()=>[pn]),_:1})]),_:1}),n("p",null,[rn,n("a",dn,[kn,s(t)]),mn])])}const yn=p(k,[["render",bn],["__file","structuring.html.vue"]]);export{yn as default};
