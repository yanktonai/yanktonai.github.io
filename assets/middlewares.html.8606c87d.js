import{_ as c,r as s,o as d,c as r,b as e,w as o,a as n,d as a,e as p}from"./app.c0ce12a9.js";const m={},h=n("h1",{id:"kumpulan-middleware-yang-berguna",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kumpulan-middleware-yang-berguna","aria-hidden":"true"},"#"),a(" Kumpulan Middleware yang Berguna")],-1),k=n("p",null,"Capek menulis middleware yang sama berulang kali? Yup, begitu juga dengan kami. Oleh karena itu, kali ini kami memutuskan untuk mengumpulkan berbagai middleware ke dalam sebuah package terpisah.",-1),_=n("h2",{id:"instalasi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instalasi","aria-hidden":"true"},"#"),a(" Instalasi")],-1),b=n("p",null,[n("code",null,[a("yarn add grammy"),n("wbr"),a("-middlewares")])],-1),g=n("h2",{id:"penggunaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#penggunaan","aria-hidden":"true"},"#"),a(" Penggunaan")],-1),y=a("Semua middleware "),w={href:"https://www.codepolitan.com/sedikit-lebih-dalam-dengan-accessor-dan-mutator-58a192fa846f3/",target:"_blank",rel:"noopener noreferrer"},v=a("accessor"),f=a(" dapat memproduksi sesuatu, meskipun tidak semua middleware diharuskan seperti itu. Kita bisa menganggapnya sebagai "),x=n("em",null,"factory",-1),q=a(". Kami memutuskan untuk membuat API menjadi seragam."),A=p(`<p>Beberapa factory bisa menggunakan parameter wajib ataupun opsional.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ignoreOld<span class="token punctuation">,</span>
  onlyAdmin<span class="token punctuation">,</span>
  onlyPublic<span class="token punctuation">,</span>
  onlySuperAdmin<span class="token punctuation">,</span>
  sequentialize<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy-middlewares&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">ignoreOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyAdmin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Hanya admin yang bisa melakukan ini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyPublic</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Kamu hanya bisa menggunakan chat publik&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlySuperAdmin</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">SUPER_ADMIN_ID</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h2><h3 id="ignoreold" tabindex="-1"><a class="header-anchor" href="#ignoreold" aria-hidden="true">#</a> <code>ignore<wbr>Old</code></h3><p>Abaikan update yang telah usang. Ini berguna ketika bot mengalami down untuk beberapa saat. Kamu juga bisa menentukan waktu timeout-nya dalam satuan detik (bawaanya selama 5 menit).</p><h3 id="onlyadmin" tabindex="-1"><a class="header-anchor" href="#onlyadmin" aria-hidden="true">#</a> <code>only<wbr>Admin</code></h3><p>Periksa apakah user tersebut adalah seorang admin. Kamu bisa menentukan <code>error<wbr>Handler</code> yang nantinya akan dipanggil bersama dengan context-nya jika user tersebut bukan seorang admin.</p><h3 id="onlypublic" tabindex="-1"><a class="header-anchor" href="#onlypublic" aria-hidden="true">#</a> <code>only<wbr>Public</code></h3><p>Periksa apakah ia sebuah grup atau channel. Kamu bisa menentukan <code>error<wbr>Handler</code> yang nantinya akan dipanggil bersama dengan context-nya jika ia bukan sebuah grup ataupun channel.</p><h3 id="onlysuperadmin" tabindex="-1"><a class="header-anchor" href="#onlysuperadmin" aria-hidden="true">#</a> <code>only<wbr>Super<wbr>Admin</code></h3><p>Periksa apakah user tersebut adalah seorang super admin. Kamu perlu menyediakan id super admin-nya</p><h3 id="sequentialize" tabindex="-1"><a class="header-anchor" href="#sequentialize" aria-hidden="true">#</a> <code>sequentialize</code></h3>`,12),P=a("Middleware "),z=a("sequentialize"),K=a(" sederhana yang menggunakan chat id sebagai identifier-nya sequential."),I=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),j=n("li",null,[a("Nama: "),n("code",null,[a("grammy"),n("wbr"),a("-middlewares")])],-1),S=a("Sumber: "),N={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},T=a("https://"),B=n("wbr",null,null,-1),E=a("github"),R=n("wbr",null,null,-1),H=a(".com"),L=n("wbr",null,null,-1),M=a("/backmeupplz"),O=n("wbr",null,null,-1),V=a("/grammy"),C=n("wbr",null,null,-1),G=a("-middlewares"),D=a("Referensi: "),U={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},Y=a("https://"),F=n("wbr",null,null,-1),J=a("github"),Q=n("wbr",null,null,-1),W=a(".com"),X=n("wbr",null,null,-1),Z=a("/backmeupplz"),$=n("wbr",null,null,-1),nn=a("/grammy"),an=n("wbr",null,null,-1),en=a("-middlewares");function sn(tn,on){const i=s("Tag"),l=s("TagGroup"),t=s("ExternalLinkIcon"),u=s("RouterLink");return d(),r("div",null,[h,e(l,null,{default:o(()=>[e(i,{type:"thirdparty",text:"PIHAK KETIGA"}),e(i,{type:"nodejs"})]),_:1}),k,_,b,g,n("p",null,[y,n("a",w,[v,e(t)]),f,x,q]),A,n("p",null,[P,e(u,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:o(()=>[z]),_:1}),K]),I,n("ul",null,[j,n("li",null,[S,n("a",N,[T,B,E,R,H,L,M,O,V,C,G,e(t)])]),n("li",null,[D,n("a",U,[Y,F,J,Q,W,X,Z,$,nn,an,en,e(t)])])])])}const un=c(m,[["render",sn],["__file","middlewares.html.vue"]]);export{un as default};
