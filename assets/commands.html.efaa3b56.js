import{_ as p,r as e,o as r,c as i,a as n,b as t,w as l,d as s,e as a}from"./app.c0ce12a9.js";const d={},u=n("h1",{id:"commands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),s(" Commands")],-1),m=n("p",null,"Commands \u662F Telegram \u4FE1\u606F\u4E2D\u7684\u7279\u6B8A\u5BF9\u8C61\uFF0C\u4F5C\u4E3A bot \u7684\u6307\u4EE4\u5B58\u5728\u3002",-1),k=n("h2",{id:"\u4F7F\u7528\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u65B9\u6CD5")],-1),b=s("\u91CD\u6E29 Telegram \u56E2\u961F\u7F16\u5199\u7684 "),_={href:"https://core.telegram.org/bots#commands",target:"_blank",rel:"noopener noreferrer"},h=s("Introduction for Developers"),g=s("\u4E2D\u7684 Commands \u90E8\u5206\u3002"),v=a(`<p>grammY \u4E3A\u547D\u4EE4\uFF08\u4F8B\u5982 <code>/start</code> \u548C <code>/help</code> \uFF09\u63D0\u4F9B\u4E86\u7279\u6B8A\u5904\u7406\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7 <code>bot<wbr>.command()</code> \u76F4\u63A5\u4E3A\u67D0\u4E9B\u547D\u4EE4\u6CE8\u518C\u76D1\u542C\u5668\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u54CD\u5E94 /start \u547D\u4EE4\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u54CD\u5E94 /help \u547D\u4EE4\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u54CD\u5E94 /a, /b, /c \u548C /d \u547D\u4EE4\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6CE8\u610F\uFF0C\u53EA\u6709\u90A3\u4E9B\u5728\u6D88\u606F\u5F00\u5934\u7684\u547D\u4EE4\u624D\u4F1A\u88AB\u5904\u7406\uFF0C\u6240\u4EE5\u5982\u679C\u4E00\u4E2A\u7528\u6237\u53D1\u9001 <code>\u8BF7\u4E0D\u8981\u5411\u90A3\u4E2A bot \u53D1\u9001 <wbr>/start \uFF01</code>\uFF0C\u90A3\u4E48\u4F60\u7684\u76D1\u542C\u5668\u5C06\u4E0D\u4F1A\u88AB\u8C03\u7528\uFF0C\u5373\u4F7F <code>/start</code> \u547D\u4EE4 <em>\u662F</em> \u5305\u542B\u5728\u6D88\u606F\u4E2D\u3002</p><p>Telegram \u652F\u6301\u5411 bot \u53D1\u9001\u76EE\u6807\u547D\u4EE4\uFF0C\u5373\u4EE5 <code>@your<wbr>_bot<wbr>_name</code> \u7ED3\u5C3E\u7684\u547D\u4EE4\u3002 grammY \u4F1A\u4E3A\u4F60\u81EA\u52A8\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5 <code>bot<wbr>.command(&quot;start&quot;)</code> \u5C06\u5339\u914D\u5E26\u6709 <code>/start</code> \u548C\u5E26\u6709 <code>/start@your<wbr>_bot<wbr>_name</code> \u7684\u547D\u4EE4\u4FE1\u606F\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A <code>bot<wbr>.command(&quot;start@your<wbr>_bot<wbr>_name&quot;)</code> \u6765\u9009\u62E9\u53EA\u5339\u914D\u76EE\u6807\u547D\u4EE4\u3002</p>`,4),w={class:"custom-container tip"},q=a(`<p class="custom-container-title">\u5411\u7528\u6237\u63A8\u8350\u4F60\u7684\u547D\u4EE4</p><p>\u4F60\u53EF\u4EE5\u8FD9\u6837\u8C03\u7528\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">setMyCommands</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Start the bot&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Show help text&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;settings&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Open settings&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4F7F Telegram \u5BA2\u6237\u7AEF\u5728\u6587\u672C\u8F93\u5165\u680F\u4E2D\u663E\u793A\u5EFA\u8BAE\u7684\u547D\u4EE4\u5217\u8868\u3002</p>`,4),f=s("\u6216\u8005\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E0E "),x={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},y=s("@Bot"),T=n("wbr",null,null,-1),C=s("Father"),L=s(" \u4EA4\u8C08\u6765\u8BBE\u7F6E\u8FD9\u4E9B\u4FE1\u606F\u3002"),R=a('<h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u7528\u6237\u53EF\u4EE5\u5C06<strong>\u53C2\u6570</strong>\u4E0E\u4ED6\u4EEC\u7684\u547D\u4EE4\u4E00\u8D77\u53D1\u9001\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7 <code>ctx<wbr>.match</code> \u8BBF\u95EE\u53C2\u6570\u5B57\u7B26\u4E32\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// `item` \u5C06\u88AB\u8D4B\u503C\u4E3A `apple pie` \uFF0C \u5982\u679C\u4E00\u4E2A\u7528\u6237\u8F93\u5165\u4E86 `/add apple pie`\u3002</span>\n  <span class="token keyword">const</span> item <span class="token operator">=</span> ctx<span class="token punctuation">.</span>match<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u4F60\u603B\u662F\u53EF\u4EE5\u901A\u8FC7 <code>ctx<wbr>.msg<wbr>.text</code> \u8BBF\u95EE\u6574\u4E2A\u6D88\u606F\u7684\u6587\u672C\u3002</p><h2 id="\u6DF1\u5EA6\u94FE\u63A5\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u94FE\u63A5\u652F\u6301" aria-hidden="true">#</a> \u6DF1\u5EA6\u94FE\u63A5\u652F\u6301</h2>',5),B=s("\u91CD\u65B0\u6E29\u4E60 Telegram \u56E2\u961F\u7684 "),S={href:"https://core.telegram.org/bots#deep-linking",target:"_blank",rel:"noopener noreferrer"},I=s("Introduction for Developers"),N=s(" \u4E2D\u5173\u4E8E\u6DF1\u5EA6\u94FE\u63A5\u7684\u90E8\u5206\u3002"),V=a("<p>\u5F53\u7528\u6237\u8FD4\u56DE <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>payload</code> \u65F6\uFF0C\u4ED6\u4EEC\u7684 <code>Telegram</code> \u5BA2\u6237\u7AEF\u5C06\u663E\u793A\u4E00\u4E2A <code>START</code> \u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5C06 URL \u53C2\u6570\u4E2D\u7684\u5B57\u7B26\u4E32\u4E0E\u4FE1\u606F\u4E00\u8D77\u53D1\u9001\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6D88\u606F\u6587\u672C\u5C06\u662F <code>start payload</code> \u3002 Telegram \u5BA2\u6237\u7AEF\u4E0D\u4F1A\u5411\u7528\u6237\u663E\u793A <code>payload</code>\uFF08\u4ED6\u4EEC\u53EA\u4F1A\u5728\u9875\u9762\u4E2D\u770B\u5230 <code>start</code>\uFF09\u3002\u4F46\u662F\uFF0C\u4F60\u7684 bot \u4F1A\u6536\u5230\u5B83\u3002 grammY \u4E3A\u4F60\u63D0\u53D6\u8FD9\u4E2A <code>payload</code>\uFF0C\u5E76\u5728 <code>ctx<wbr>.match</code> \u4E0B\u63D0\u4F9B\u3002 \u5728\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>ctx<wbr>.match</code> \u5C06\u5305\u542B\u5B57\u7B26\u4E32 <code>payload</code>\u3002</p>",1),E=s("\u5982\u679C\u4F60\u60F3\u5EFA\u7ACB\u4E00\u4E2A\u63A8\u8350\u7CFB\u7EDF\uFF0C\u6216\u8DDF\u8E2A\u7528\u6237\u5728\u54EA\u91CC\u53D1\u73B0\u4F60\u7684 bot \uFF0C\u90A3\u4E48\u6DF1\u5EA6\u94FE\u63A5\u662F\u5F88\u6709\u7528\u7684\u3002 \u4F8B\u5982\uFF0C\u4F60\u7684 bot \u53EF\u4EE5\u53D1\u9001\u4E00\u4E2A\u5E26\u6709 "),Y=s("inline keyboard"),A=a(" \u6309\u94AE\u7684 channel post\u3002 \u8BE5\u6309\u94AE\u5305\u542B\u4E00\u4E2A\u7C7B\u4F3C\u4E0A\u8FF0\u7684 URL\uFF0C\u4F8B\u5982 <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>awesome<wbr>-channel<wbr>-post<wbr>-12345</code>\u3002 \u5F53\u7528\u6237\u70B9\u51FB\u5E16\u5B50\u4E0B\u9762\u7684\u6309\u94AE\u65F6\uFF0C\u4ED6\u4EEC\u7684 Telegram \u5BA2\u6237\u7AEF\u5C06\u6253\u5F00\u4E0E\u4F60\u7684 bot \u7684\u804A\u5929\uFF0C\u5E76\u663E\u793A\u4E0A\u8FF0\u7684 START \u6309\u94AE\u3002 \u8FD9\u6837\uFF0C\u4F60\u7684 bot \u53EF\u4EE5\u8BC6\u522B\u7528\u6237\u6765\u81EA\u54EA\u91CC\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u70B9\u51FB\u4E86\u54EA\u4E2A\u7279\u5B9A\u9891\u9053\u5E16\u5B50\u4E0B\u7684\u6309\u94AE\u3002",3),D=n("p",null,"\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u5176\u4ED6\u4EFB\u4F55\u5730\u65B9\u5D4C\u5165\u8FD9\u6837\u7684\u94FE\u63A5\uFF1A\u5728\u7F51\u7EDC\u4E0A\u3001\u4FE1\u606F\u4E2D\u3001\u4E8C\u7EF4\u7801\u4E2D\u7B49\u7B49\u3002",-1);function F(U,z){const o=e("ExternalLinkIcon"),c=e("RouterLink");return r(),i("div",null,[u,m,k,n("blockquote",null,[n("p",null,[b,n("a",_,[h,t(o)]),g])]),v,n("div",w,[q,n("p",null,[f,n("a",x,[y,T,C,t(o)]),L])]),R,n("blockquote",null,[n("p",null,[B,n("a",S,[I,t(o)]),N])]),V,n("p",null,[E,t(c,{to:"/zh/plugins/keyboard.html#inline-keyboards"},{default:l(()=>[Y]),_:1}),A]),D])}const O=p(d,[["render",F],["__file","commands.html.vue"]]);export{O as default};
