import{_ as i,r as e,o as c,c as u,b as a,w as l,a as n,d as s,e as r}from"./app.ff0cf306.js";const k={},d=n("h1",{id:"stateless-question-stateless-question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stateless-question-stateless-question","aria-hidden":"true"},"#"),s(" Stateless Question ("),n("code",null,[s("stateless"),n("wbr"),s("-question")]),s(")")],-1),m=n("blockquote",null,[n("p",null,"Membuat stateless question di mode privasi")],-1),_=s("Apakah kamu ingin mengirim pertanyaan menggunakan bahasa yang sedang digunakan user tanpa perlu mematikan "),h={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},g=s("mode privasi Telegram"),b=s(" serta tidak menyimpan statusnya saat ini?"),v=n("p",null,"Plugin ini bisa mengatasi masalah tersebut dengan mudah.",-1),y=s("Konsep dasarnya adalah dengan mengirim sebuah pertanyaan menggunakan "),f={href:"https://en.wikipedia.org/wiki/Zero-width_non-joiner",target:"_blank",rel:"noopener noreferrer"},q=s("teks spesial"),w=s(" di akhir kalimat. Teks spesial ini tidak terlihat oleh user, namun dapat dibaca oleh bot. Ketika user membalas pesan tersebut, maka pesan akan diperiksa apakah mengandung teks spesial di akhir kalimatnya. Jika ada, balasan pesan tersebut adalah jawaban dari pertanyaan yang kita berikan. Dengan demikian, kamu bisa memasukkan string berapapun jumlahnya ke pertanyaan yang sama ketika melakukan terjemahan. Kamu hanya perlu memastikan nilai "),x=n("code",null,[s("unique"),n("wbr"),s("Identifier")],-1),M=s("-nya benar-benar unik."),T=r(`<h2 id="penggunaan" tabindex="-1"><a class="header-anchor" href="#penggunaan" aria-hidden="true">#</a> Penggunaan</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatelessQuestion <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/stateless-question&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> unicornQuestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatelessQuestion</span><span class="token punctuation">(</span><span class="token string">&quot;unicorns&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User mengira unicorn sedang melakukan:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Jangan lupa gunakan middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>unicornQuestion<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;rainbows&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;Apa yang unicorn sedang lakukan?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;What are unicorns doing?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Atau kirim pertanyaanmu secara manual</span>
<span class="token comment">// (pastikan untuk menggunakan parse_mode dan force_reply!).</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithHTML</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j=s("Lihat "),Q={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},S=s("README repo plugin"),E=s(" untuk informasi lebih lanjut."),L=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),s(" Ringkasan Plugin")],-1),W=n("li",null,[s("Nama: "),n("code",null,[s("stateless"),n("wbr"),s("-question")])],-1),N=s("Sumber: "),A={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},B=s("https://"),I=n("wbr",null,null,-1),V=s("github"),H=n("wbr",null,null,-1),K=s(".com"),P=n("wbr",null,null,-1),R=s("/grammyjs"),C=n("wbr",null,null,-1),D=s("/stateless"),G=n("wbr",null,null,-1),J=s("-question");function U(Z,z){const o=e("Tag"),p=e("TagGroup"),t=e("ExternalLinkIcon");return c(),u("div",null,[d,a(p,null,{default:l(()=>[a(o,{type:"official",text:"RESMI"})]),_:1}),m,n("p",null,[_,n("a",h,[g,a(t)]),b]),v,n("p",null,[y,n("a",f,[q,a(t)]),w,x,M]),T,n("p",null,[j,n("a",Q,[S,a(t)]),E]),L,n("ul",null,[W,n("li",null,[N,n("a",A,[B,I,V,H,K,P,R,C,D,G,J,a(t)])])])])}const O=i(k,[["render",U],["__file","stateless-question.html.vue"]]);export{O as default};
