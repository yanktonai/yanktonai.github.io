import{_ as u,r as t,o as r,c as d,b as e,w as i,a as n,d as a,e as o}from"./app.81c9d145.js";const k={},h=n("h1",{id:"hosting-deno-deploy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hosting-deno-deploy","aria-hidden":"true"},"#"),a(" Hosting: Deno Deploy")],-1),m=a("Halaman ini berisi panduan mengenai cara-cara meng-hosting bot di "),b={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},_=a("Deno Deploy"),g=a("."),y=a("Perlu diperhatikan bahwa panduan ini hanya berlaku untuk pengguna Deno. Kamu diharuskan memiliki akun "),v={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},f=a("Git"),w=n("wbr",null,null,-1),D=a("Hub"),j=a(" untuk membuat akun "),q={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},x=a("Deno Deploy"),M=a("."),P=n("p",null,"Deno Deploy cocok dipakai untuk bot yang sederhana. Selain itu, kamu harus tahu bahwa tidak semua fitur Deno tersedia untuk beberapa aplikasi\u2014termasuk bot kamu\u2014yang berjalan di Deno Deploy. Contohnya, file system di Deno Deploy tidak tersedia. Deno Deploy mirip seperti platform serverless lainnya, tetapi hanya didedikasikan untuk aplikasi Deno saja.",-1),L=a("Hasil dari tutorial disini dapat dilihat di "),R={href:"https://github.com/grammyjs/examples/tree/main/deno-deploy",target:"_blank",rel:"noopener noreferrer"},U=a("repositori bot kami"),G=a("."),H=n("h2",{id:"menyiapkan-kode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menyiapkan-kode","aria-hidden":"true"},"#"),a(" Menyiapkan Kode")],-1),K=a("Ingat! Kamu perlu "),B=a("menjalankan bot dengan webhooks"),C=a(", jadi kamu harus menggunakan "),T=n("code",null,[a("webhook"),n("wbr"),a("Callback")],-1),E=a(" alih-alih memanggil "),N=n("code",null,[a("bot"),n("wbr"),a(".start()")],-1),S=a(" di kodemu."),V=o(`<ol><li>Pastikan kamu meng-export object <code>Bot</code> di dalam sebuah file agar nantinya bisa di-import ketika ingin menjalankannya.</li><li>Buat sebuah file dengan nama <code>mod<wbr>.ts</code> atau <code>mod<wbr>.js</code>, ataupun nama lainnya sesuai dengan keinginanmu (tetapi kamu harus mengingatnya karena nanti file tersebut akan digunakan sebagai file deploy utama). File tersebut berisikan:</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Kamu mungkin perlu mengubah ini agar object bot-mu bisa di-import</span>
<span class="token keyword">import</span> bot <span class="token keyword">from</span> <span class="token string">&quot;./bot.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kami menganjurkan kamu untuk menaruh handler di direktori rahasia alih-alih menempatkanya di root (<code>/</code>). Di contoh kali ini, kita menggunakan token bot (<code>/&lt;token bot&gt;</code>) sebagai direktori rahasianya.</p><h2 id="men-deploy-bot" tabindex="-1"><a class="header-anchor" href="#men-deploy-bot" aria-hidden="true">#</a> Men-deploy Bot</h2><h3 id="metode-1-menggunakan-github" tabindex="-1"><a class="header-anchor" href="#metode-1-menggunakan-github" aria-hidden="true">#</a> Metode 1: Menggunakan GitHub</h3><blockquote><p>Metode ini sangat direkomendasikan karena mudah untuk digunakan. Kelebihannya adalah Deno Deploy akan selalu memantau perubahan di repositori tempat kamu menaruh kode bot. Ketika terjadi perubahan, kode tersebut akan di-deploy secara otomatis ke versi yang lebih baru.</p></blockquote><ol><li>Buat sebuah repositori di GitHub, bisa dalam bentuk private ataupun publik.</li><li>Taruh kodemu di dalam repositori tersebut.</li></ol><blockquote><p>Direkomendasikan untuk mempunyai satu branch stabil dan branch lain untuk pengetesan supaya branch utama kamu terhindar dari hal-hal yang tidak diinginkan.</p></blockquote>`,8),A={start:"3"},I=a("Kunjungi "),F={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},J=a("dashboard Deno Deploy"),O=a("."),W=n("li",null,"Pilih \u201CNew Project\u201D, lalu pergi ke bagian \u201CDeploy from GitHub repository\u201D.",-1),z=n("li",null,"Pasang aplikasi GitHub di akun atau organisasimu, kemudian pilih repositori kode bot kamu berada.",-1),Q=n("li",null,[a("Pilih branch dan file "),n("code",null,[a("mod"),n("wbr"),a(".ts")]),a(" yang akan di-deploy.")],-1),X=n("h3",{id:"metode-2-menggunakan-deployctl",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#metode-2-menggunakan-deployctl","aria-hidden":"true"},"#"),a(" Metode 2: Menggunakan "),n("code",null,"deployctl")],-1),Y=n("blockquote",null,[n("p",null,"Metode ini diperuntukkan kepada pengguna tingkat lanjut yang nantinya proyek akan di-deploy melalui command line atau GitHub Actions.")],-1),Z=a("Kunjungi "),$={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},nn=a("dashboard Deno Deploy"),an=a("."),en=n("li",null,"Pilih \u201CNew Project\u201D, kemudian pilih \u201CEmpty Project\u201D.",-1),sn=a("Pasang "),tn={href:"https://github.com/denoland/deployctl",target:"_blank",rel:"noopener noreferrer"},on=n("code",null,"deployctl",-1),ln=a("."),pn=a("Buat "),cn={href:"https://dash.deno.com/user/access-tokens",target:"_blank",rel:"noopener noreferrer"},un=a("token akses"),rn=a(" baru."),dn=n("li",null,"Jalankan dengan perintah:",-1),kn=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deployctl deploy <span class="token parameter variable">--project</span> <span class="token operator">&lt;</span>project<span class="token operator">&gt;</span> ./mod.ts <span class="token parameter variable">--prod</span> <span class="token parameter variable">--token</span> <span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),hn={start:"6"},mn=a("Untuk menyiapkan GitHub Actions, dapat merujuk ke "),bn={href:"https://github.com/denoland/deployctl/blob/main/action/README.md",target:"_blank",rel:"noopener noreferrer"},_n=a("sini"),gn=a("."),yn=o(`<h3 id="metode-3-menggunakan-url" tabindex="-1"><a class="header-anchor" href="#metode-3-menggunakan-url" aria-hidden="true">#</a> Metode 3: Menggunakan URL</h3><blockquote><p>Kamu memerlukan URL publik yang mengarah ke file <code>mod<wbr>.ts</code>-mu untuk menggunakan metode ini.</p></blockquote><ol><li>Buat proyek baru di Deno Deploy.</li><li>Pilih \u201CDeploy URL\u201D</li><li>Masukkan URL publik file <code>mod<wbr>.ts</code>-mu, lalu pilih \u201CDeploy\u201D.</li></ol><h3 id="catatan" tabindex="-1"><a class="header-anchor" href="#catatan" aria-hidden="true">#</a> Catatan</h3><p>Setelah mendapati bot-mu dapat berjalan, kamu harus melakukan konfigurasi pada pengaturan webhook untuk menggunakan URL bot-mu yang baru. Untuk melakukannya, kirim sebuah request ke</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>https://api.telegram.org/bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>token</span><span class="token punctuation">&gt;</span></span>/setWebhook?url=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Ganti <code>&lt;token&gt;</code> dengan token bot-mu, dan <code>&lt;url&gt;</code> dengan URL lengkap bot kamu.</p>`,7);function vn(fn,wn){const l=t("Tag"),p=t("TagGroup"),s=t("ExternalLinkIcon"),c=t("RouterLink");return r(),d("div",null,[h,e(p,null,{default:i(()=>[e(l,{type:"deno"})]),_:1}),n("p",null,[m,n("a",b,[_,e(s)]),g]),n("p",null,[y,n("a",v,[f,w,D,e(s)]),j,n("a",q,[x,e(s)]),M]),P,n("p",null,[L,n("a",R,[U,e(s)]),G]),H,n("blockquote",null,[n("p",null,[K,e(c,{to:"/id/guide/deployment-types.html#bagaimana-cara-menggunakan-webhook"},{default:i(()=>[B]),_:1}),C,T,E,N,S])]),V,n("ol",A,[n("li",null,[I,n("a",F,[J,e(s)]),O]),W,z,Q]),X,Y,n("ol",null,[n("li",null,[Z,n("a",$,[nn,e(s)]),an]),en,n("li",null,[sn,n("a",tn,[on,e(s)]),ln]),n("li",null,[pn,n("a",cn,[un,e(s)]),rn]),dn]),kn,n("ol",hn,[n("li",null,[mn,n("a",bn,[_n,e(s)]),gn])]),yn])}const jn=u(k,[["render",vn],["__file","deno-deploy.html.vue"]]);export{jn as default};
