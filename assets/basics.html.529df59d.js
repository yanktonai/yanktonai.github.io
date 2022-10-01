import{_ as i,r as c,o as l,c as u,a as s,b as a,w as p,e,d as n}from"./app.ff0cf306.js";const r={},d=e(`<h1 id="\u53D1\u9001\u548C\u63A5\u6536\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u548C\u63A5\u6536\u4FE1\u606F" aria-hidden="true">#</a> \u53D1\u9001\u548C\u63A5\u6536\u4FE1\u606F</h1><p>\u4E00\u65E6\u4F60\u7528 <code>bot<wbr>.start()</code> \u542F\u52A8\u4F60\u7684 bot\uFF0CgrammY \u5C06\u4E3A\u4F60\u7684\u76D1\u542C\u5668\u63D0\u4F9B\u7528\u6237\u53D1\u9001\u7ED9\u4F60\u7684 bot \u7684\u4FE1\u606F\u3002 grammY \u8FD8\u63D0\u4F9B\u4E86\u65B9\u4FBF\u56DE\u590D\u7684\u65B9\u6CD5\u3002</p><h2 id="\u63A5\u6536\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u6536\u4FE1\u606F" aria-hidden="true">#</a> \u63A5\u6536\u4FE1\u606F</h2><p>\u76D1\u542C\u4FE1\u606F\u7684\u6700\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u662F\u8FD9\u6837\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">;</span> <span class="token comment">// \u6D88\u606F\u5BF9\u8C61</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4E5F\u6709\u4E00\u4E9B\u5176\u4ED6\u9009\u62E9\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5904\u7406 commands, \u6BD4\u5982 /start\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u628A\u4FE1\u606F\u6587\u672C\u4E0E\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u76F8\u5339\u914D\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">echo *+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),_=n("\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u4EE3\u7801\u7F16\u8F91\u5668\u4E2D\u4F7F\u7528\u81EA\u52A8\u5B8C\u6210\u6765\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684\u9009\u9879\uFF0C\u6216\u8005\u67E5\u770B "),k=s("code",null,"Composer",-1),h=n(" \u7C7B\u7684 "),m={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},b=n("\u6240\u6709\u65B9\u6CD5"),g=n("\u3002"),v=n("\u4E86\u89E3\u66F4\u591A"),w=n(" \u5173\u4E8E\u4F7F\u7528 "),f=s("code",null,[n("bot"),s("wbr"),n(".on()")],-1),y=n(" \u6765\u7B5B\u9009\u8BF7\u6C42\u7684\u5185\u5BB9\u3002"),x=s("h2",{id:"\u53D1\u9001\u4FE1\u606F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53D1\u9001\u4FE1\u606F","aria-hidden":"true"},"#"),n(" \u53D1\u9001\u4FE1\u606F")],-1),q=n("Bot \u53EF\u4EE5\u4F7F\u7528\u7684\u6240\u6709\u65B9\u6CD5\uFF08"),M={href:"https://core.telegram.org/bots/api#available-methods",target:"_blank",rel:"noopener noreferrer"},E=n("\u91CD\u8981\u7684\u5217\u8868"),T=n("\uFF09\u90FD\u53EF\u4EE5\u901A\u8FC7 "),H=s("code",null,[n("bot"),s("wbr"),n(".api")],-1),B=n(" \u5BF9\u8C61\u4E0A\u4F7F\u7528\u3002"),L=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5411\u7528\u6237 12345 \u53D1\u9001\u4E00\u6761\u6D88\u606F\u3002</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u4F20\u5165\u4E00\u4E2A\u9009\u9879\u5BF9\u8C61\u3002</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token comment">/* \u5176\u4ED6\u9009\u9879 */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u6709\u5173 bot \u672C\u8EAB\u7684\u4FE1\u606F\u3002</span>
<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">getMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53CA\u5176\u4ED6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=n("\u6BCF\u4E2A\u65B9\u6CD5\u90FD\u63A5\u53D7\u4E00\u4E2A\u53EF\u9009\u7684 "),V=s("code",null,"Other",-1),C=n(" \u7C7B\u578B\u7684\u9009\u9879\u5BF9\u8C61\uFF0C\u5B83\u5141\u8BB8\u4F60\u4E3A\u4F60\u7684 API \u8C03\u7528\u8BBE\u7F6E\u66F4\u591A\u9009\u9879\u3002 \u8FD9\u4E9B\u9009\u9879\u5BF9\u8C61\u4E0E\u4E0A\u9762\u5217\u51FA\u7684\u65B9\u6CD5\u7684\u9009\u9879\u5BF9\u8C61\u5B8C\u5168\u5BF9\u5E94\u3002 \u4F60\u4E5F\u53EF\u4EE5\u5728\u4F60\u7684\u4EE3\u7801\u7F16\u8F91\u5668\u4E2D\u4F7F\u7528\u81EA\u52A8\u5B8C\u6210\u6765\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684\u9009\u9879\uFF0C\u6216\u8005\u67E5\u770B "),z=s("code",null,"Api",-1),I=n(" \u7C7B\u7684 "),N={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api",target:"_blank",rel:"noopener noreferrer"},Y=n("\u6240\u6709\u65B9\u6CD5"),F=n("\u3002 \u672C\u9875\u7684\u5176\u4F59\u90E8\u5206\u5C55\u793A\u4E86\u4E00\u4E9B\u76F8\u5173\u793A\u4F8B\u3002"),D=n("\u540C\u65F6\uFF0C\u8BF7\u770B "),P=n("\u4E0B\u4E00\u8282"),R=n("\uFF0C\u4EE5\u4E86\u89E3\u76D1\u542C\u5668\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u5982\u4F55\u4F7F\u53D1\u9001\u6D88\u606F\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\uFF01"),W=e(`<h2 id="\u53D1\u9001\u5E26\u56DE\u590D\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u5E26\u56DE\u590D\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u53D1\u9001\u5E26\u56DE\u590D\u7684\u4FE1\u606F</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 Telegram \u7684\u56DE\u590D\u529F\u80FD\uFF0C\u4F7F\u7528 <code>reply<wbr>_to<wbr>_message<wbr>_id</code> \u6307\u5B9A\u8981\u56DE\u590D\u7684\u4FE1\u606F\u6807\u8BC6\u7B26\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`reply\` \u662F\u540C\u4E00\u804A\u5929\u4E2D \`sendMessage\` \u7684\u522B\u540D\uFF08\u89C1\u4E0B\u4E00\u8282\uFF09\u3002</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \`reply_to_message_id\` \u6307\u5B9A\u5B9E\u9645\u7684\u56DE\u590D\u54EA\u4E00\u6761\u4FE1\u606F\u3002</span>
    reply_to_message_id<span class="token operator">:</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O=e("\u6CE8\u610F\uFF0C\u53EA\u901A\u8FC7 <code>ctx<wbr>.reply</code> \u53D1\u9001\u6D88\u606F<strong>\u5E76\u4E0D</strong>\u610F\u5473\u7740\u4F60\u4F1A\u81EA\u52A8\u56DE\u590D\u4EFB\u4F55\u4E1C\u897F\u3002 \u76F8\u53CD\uFF0C\u4F60\u5E94\u8BE5\u4E3A\u6B64\u6307\u5B9A <code>reply<wbr>_to<wbr>_message<wbr>_id</code> \u3002 \u51FD\u6570 <code>ctx<wbr>.reply</code> \u53EA\u662F <code>ctx<wbr>.api<wbr>.send<wbr>Message</code> \u7684\u4E00\u4E2A\u522B\u540D\uFF0C\u89C1 ",11),S=n("\u4E0B\u4E00\u8282"),j=n("\u3002"),G=s("h2",{id:"\u53D1\u9001\u683C\u5F0F\u5316\u7684\u4FE1\u606F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53D1\u9001\u683C\u5F0F\u5316\u7684\u4FE1\u606F","aria-hidden":"true"},"#"),n(" \u53D1\u9001\u683C\u5F0F\u5316\u7684\u4FE1\u606F")],-1),J=n("\u67E5\u770B Telegram \u56E2\u961F\u7F16\u5199\u7684 Telegram Bot API \u53C2\u8003\u4E2D\u7684"),K={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},Q=n("\u5173\u4E8E\u683C\u5F0F\u5316\u9009\u9879\u7684\u90E8\u5206"),U=n("\u3002"),X=n("\u4F60\u53EF\u4EE5\u901A\u8FC7 "),Z=s("strong",null,"\u52A0\u7C97",-1),$=n(" \u6216 "),nn=s("em",null,"\u659C\u4F53",-1),sn=n(" \u6587\u5B57\uFF0C\u4F7F\u7528\u8D85\u94FE\u63A5\u4EE5\u53CA\u5176\u4ED6\u6765\u53D1\u9001\u6D88\u606F\u3002 \u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u5982 "),an={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},tn=n("\u5173\u4E8E\u683C\u5F0F\u5316\u9009\u9879\u7684\u90E8\u5206"),en=n(" \u6240\u8FF0\uFF0C\u5373 Markdown \u548C HTML \u3002"),on=s("h3",{id:"markdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),pn=n("\u67E5\u770B "),cn={href:"https://core.telegram.org/bots/api#markdownv2-style",target:"_blank",rel:"noopener noreferrer"},ln=n("https://"),un=s("wbr",null,null,-1),rn=n("core"),dn=s("wbr",null,null,-1),_n=n(".telegram"),kn=s("wbr",null,null,-1),hn=n(".org"),mn=s("wbr",null,null,-1),bn=n("/bots"),gn=s("wbr",null,null,-1),vn=n("/api"),wn=s("wbr",null,null,-1),fn=n("#markdownv2"),yn=s("wbr",null,null,-1),xn=n("-style"),qn=e(`<p>\u53D1\u9001\u4F60\u7684\u4FE1\u606F\u65F6\uFF0C\u5728\u6587\u672C\u4E2D\u52A0\u5165 markdown\uFF0C\u5E76\u6307\u5B9A <code>parse<wbr>_mode:<wbr> &quot;MarkdownV2&quot;</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&quot;*Hi\\\\!* _Welcome_ to [grammY](https://grammy.dev)\\\\.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;MarkdownV2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3>`,3),Mn=n("\u67E5\u770B "),En={href:"https://core.telegram.org/bots/api#html-style",target:"_blank",rel:"noopener noreferrer"},Tn=n("https://"),Hn=s("wbr",null,null,-1),Bn=n("core"),Ln=s("wbr",null,null,-1),An=n(".telegram"),Vn=s("wbr",null,null,-1),Cn=n(".org"),zn=s("wbr",null,null,-1),In=n("/bots"),Nn=s("wbr",null,null,-1),Yn=n("/api"),Fn=s("wbr",null,null,-1),Dn=n("#html"),Pn=s("wbr",null,null,-1),Rn=n("-style"),Wn=e(`<p>\u53D1\u9001\u4F60\u7684\u4FE1\u606F\uFF0C\u6587\u672C\u4E2D\u542B\u6709 HTML \u5143\u7D20\uFF0C\u5E76\u6307\u5B9A <code>parse<wbr>_mode:<wbr> &quot;HTML&quot;</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;b&gt;Hi!&lt;/b&gt; &lt;i&gt;Welcome&lt;/i&gt; to &lt;a href=&quot;https://grammy.dev&quot;&gt;grammY&lt;/a&gt;.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u9001\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u6587\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u6587\u4EF6</h2>`,3),On=n("\u6587\u4EF6\u5904\u7406\u5728 "),Sn=n("\u540E\u9762\u7684\u7AE0\u8282"),jn=n(" \u4E2D\u6709\u66F4\u6DF1\u5165\u7684\u89E3\u91CA\u3002"),Gn=s("h2",{id:"\u5F3A\u884C\u56DE\u590D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5F3A\u884C\u56DE\u590D","aria-hidden":"true"},"#"),n(" \u5F3A\u884C\u56DE\u590D")],-1),Jn=n("\u5982\u679C\u4F60\u7684 bot \u5728\u7FA4\u804A\u4E2D\u4EE5 "),Kn={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},Qn=n("\u9690\u79C1\u6A21\u5F0F"),Un=n(" \u8FD0\u884C\uFF0C\u8FD9\u5E94\u8BE5\u4F1A\u5F88\u6709\u7528\u3002"),Xn=n("\u5F53\u4F60\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8BA9\u7528\u6237\u7684 Telegram \u5BA2\u6237\u7AEF\u81EA\u52A8\u6307\u5B9A\u8BE5\u6D88\u606F\u4E3A\u56DE\u590D\u3002 \u8FD9\u610F\u5473\u7740\uFF0C\u7528\u6237\u4F1A\u81EA\u52A8\u56DE\u590D\u4F60 bot \u7684\u6D88\u606F\uFF08\u9664\u975E\u4ED6\u4EEC\u624B\u52A8\u5220\u9664\u56DE\u590D\uFF09\u3002 \u56E0\u6B64\uFF0C\u5373\u4F7F\u5728\u7FA4\u804A\u4E2D\u4EE5 "),Zn={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},$n=n("\u9690\u79C1\u6A21\u5F0F"),ns=n(" \u8FD0\u884C\uFF0C\u4F60\u7684 bot \u4E5F\u4F1A\u6536\u5230\u7528\u6237\u7684\u4FE1\u606F\u3002"),ss=e(`<p>\u4F60\u53EF\u4EE5\u50CF\u8FD9\u6837\u5F3A\u884C\u56DE\u590D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Hi\uFF01 \u6211\u53EA\u80FD\u6536\u5230\u660E\u786E\u56DE\u590D\u6211\u7684\u4FE1\u606F\uFF01&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BA9 Telegram \u5BA2\u6237\u7AEF\u81EA\u52A8\u5411\u7528\u6237\u663E\u793A\u56DE\u590D\u754C\u9762\u3002</span>
    reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function as(ts,es){const t=c("ExternalLinkIcon"),o=c("RouterLink");return l(),u("div",null,[d,s("p",null,[_,k,h,s("a",m,[b,a(t)]),g]),s("blockquote",null,[s("p",null,[a(o,{to:"/zh/guide/filter-queries.html"},{default:p(()=>[v]),_:1}),w,f,y])]),x,s("p",null,[q,s("strong",null,[s("a",M,[E,a(t)])]),T,H,B]),L,s("p",null,[A,V,C,z,I,s("a",N,[Y,a(t)]),F]),s("p",null,[D,a(o,{to:"/zh/guide/context.html"},{default:p(()=>[P]),_:1}),R]),W,s("blockquote",null,[s("p",null,[O,a(o,{to:"/zh/guide/context.html#%E5%8F%AF%E7%94%A8%E6%93%8D%E4%BD%9C"},{default:p(()=>[S]),_:1}),j])]),G,s("blockquote",null,[s("p",null,[J,s("a",K,[Q,a(t)]),U])]),s("p",null,[X,Z,$,nn,sn,s("a",an,[tn,a(t)]),en]),on,s("blockquote",null,[s("p",null,[pn,s("a",cn,[ln,un,rn,dn,_n,kn,hn,mn,bn,gn,vn,wn,fn,yn,xn,a(t)])])]),qn,s("blockquote",null,[s("p",null,[Mn,s("a",En,[Tn,Hn,Bn,Ln,An,Vn,Cn,zn,In,Nn,Yn,Fn,Dn,Pn,Rn,a(t)])])]),Wn,s("p",null,[On,a(o,{to:"/zh/guide/files.html#%E5%8F%91%E9%80%81%E6%96%87%E4%BB%B6"},{default:p(()=>[Sn]),_:1}),jn]),Gn,s("blockquote",null,[s("p",null,[Jn,s("a",Kn,[Qn,a(t)]),Un])]),s("p",null,[Xn,s("a",Zn,[$n,a(t)]),ns]),ss])}const ps=i(r,[["render",as],["__file","basics.html.vue"]]);export{ps as default};
