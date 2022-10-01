import{_ as r,r as c,o as i,c as l,a as s,b as a,w as e,e as t,d as n}from"./app.1137d7ac.js";const u={},d=t('<h1 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h1><p>\u7531\u4E2D\u95F4\u4EF6\u9020\u6210\u7684\u6BCF\u4E00\u4E2A\u9519\u8BEF\u90FD\u4F1A\u88AB grammY \u6355\u83B7\u3002 \u4F60\u5E94\u8BE5\u5B89\u88C5\u4E00\u4E2A\u4E13\u7528\u7684\u9519\u8BEF\u5904\u7406\u5668\u53BB\u5904\u7406\u8FD9\u4E9B\u9519\u8BEF\u3002</p><p>\u6700\u91CD\u8981\u7684\u662F, \u8FD9\u4E2A\u7AE0\u8282\u4F1A\u6559\u4F60 <a href="#%E9%94%99%E8%AF%AF%E6%8D%95%E6%8D%89">\u5982\u4F55\u5904\u7406\u629B\u51FA\u7684\u9519\u8BEF</a>\u3002</p><p>\u7136\u540E\uFF0C\u6211\u4EEC\u4F1A\u628A\u4F60\u9047\u5230\u7684\u9519\u8BEF\u5206\u4E3A\u4E09\u4E2A\u79CD\u7C7B\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7528\u9014</th></tr></thead><tbody><tr><td><a href="#boterror-%E5%AF%B9%E8%B1%A1"><code>Bot Errors</code></a></td><td>\u5305\u542B\u6240\u6709\u63D2\u4EF6\u629B\u51FA\u7684\u9519\u8BEF\u5BF9\u8C61\uFF08\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E24\u79CD\u9519\u8BEF\uFF09</td></tr><tr><td><a href="#grammyerror-%E5%AF%B9%E8%B1%A1"><code>Grammy Errors</code></a></td><td>\u5F53 Bot API \u8FD4\u56DE <code>ok:<wbr> false</code> \u65F6\u629B\u51FA, \u8868\u793A\u4F60\u7684API\u8BF7\u6C42\u662F\u65E0\u6548\u7684\u6216\u5931\u8D25\u7684</td></tr><tr><td><a href="#httperror-%E5%AF%B9%E8%B1%A1"><code>Http Errors</code></a></td><td>\u5F53 BOT API \u670D\u52A1\u5668\u65E0\u6CD5\u8FDE\u63A5\u65F6\u629B\u51FA</td></tr></tbody></table><p>\u66F4\u9AD8\u7EA7\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236 <a href="#error-%E8%BE%B9%E7%95%8C">\u94FE\u63A5</a>\u3002</p><h2 id="\u9519\u8BEF\u6355\u6349" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u6355\u6349" aria-hidden="true">#</a> \u9519\u8BEF\u6355\u6349</h2><p>\u8FD9\u53D6\u51B3\u4E8E\u4F60\u9519\u8BEF\u6355\u6349\u7684\u8BBE\u7F6E\u3002</p><h3 id="\u957F\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u957F\u8F6E\u8BE2" aria-hidden="true">#</a> \u957F\u8F6E\u8BE2</h3>',9),k=n("\u5982\u679C\u4F60\u8FD0\u884C bot \u901A\u8FC7 "),m=s("code",null,[n("bot"),s("wbr"),n(".start()")],-1),b=n(" \u6216\u8005\u4F60\u4F7F\u7528 "),h=n("grammY runner"),v=n(" \u8FD0\u884C, \u90A3\u4E48\u7136\u540E\u4F60\u5E94\u8BE5"),_=s("strong",null,[n("\u901A\u8FC7 "),s("code",null,[n("bot"),s("wbr"),n(".catch")]),n(" \u5B89\u88C5\u4E00\u4E2A\u9519\u8BEF\u5904\u7406\u5668")],-1),f=n("\u3002"),w=t(`<p>\u5982\u679C\u901A\u8FC7 <code>bot<wbr>.start()</code> \u542F\u52A8\uFF0C grammY \u4F1A\u5B89\u88C5\u4E00\u4E2A\u9ED8\u8BA4\u7684\u9519\u8BEF\u5904\u7406\u5668\u3002 \u4F60\u7684\u8BBE\u7F6E\u4F1A\u51B3\u5B9A\u7A0B\u5E8F\u5982\u4F55\u6355\u6349\u9519\u8BEF\u3002 \u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48 <strong>\u4F60\u8981\u5E94\u8BE5\u8981\u901A\u8FC7 <code>bot<wbr>.catch</code> \u5B89\u88C5\u4E00\u4E2A\u9519\u8BEF\u5904\u7406\u5668</strong>\u3002</p><p>\u793A\u4F8B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> err<span class="token punctuation">.</span>ctx<span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error while handling update </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>update<span class="token punctuation">.</span>update_id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> e <span class="token operator">=</span> err<span class="token punctuation">.</span>error<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">GrammyError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in request:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Could not contact Telegram:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Unknown error:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webhooks" tabindex="-1"><a class="header-anchor" href="#webhooks" aria-hidden="true">#</a> Webhooks</h3><p>\u5982\u679C\u4F60\u901A\u8FC7 webhooks \u6765\u8FD0\u884C\u4F60\u7684\u673A\u5668\u4EBA\uFF0CgrammY \u4F1A\u4F20\u9012\u9519\u8BEF\u5230\u4F60\u6240\u7528\u7684\u7F51\u7EDC\u6846\u67B6\u4E2D\uFF0C\u4F8B\u5982 <code>express</code>\u3002 \u4F60\u5E94\u8BE5\u66F4\u52A0\u6846\u67B6\u7684\u4E60\u60EF\u6765\u5904\u7406\u9519\u8BEF\u3002</p><h2 id="boterror-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#boterror-\u5BF9\u8C61" aria-hidden="true">#</a> <code>Bot<wbr>Error</code> \u5BF9\u8C61</h2>`,6),g=s("code",null,[n("Bot"),s("wbr"),n("Error")],-1),y=n(" \u5BF9\u8C61\u5C06\u629B\u51FA\u7684\u9519\u8BEF\u4E0E\u5BFC\u81F4\u8BE5\u9519\u8BEF\u7684\u5BF9\u5E94\u7684 "),E=n("\u4E0A\u4E0B\u6587\u5BF9\u8C61"),B=n(" \u7ED1\u5B9A\u5728\u4E00\u8D77\u3002"),x=t("<p>\u5176\u5DE5\u4F5C\u539F\u7406\u5982\u4E0B\uFF1A</p><p>\u65E0\u8BBA\u5728\u5904\u7406\u66F4\u65B0\u65F6\u53D1\u751F\u4EC0\u4E48\u9519\u8BEF\uFF0CgrammY \u90FD\u4F1A\u4E3A\u60A8\u6355\u83B7\u629B\u51FA\u7684\u9519\u8BEF\u3002 \u8FD9\u901A\u5E38\u5BF9\u4F60\u5B9A\u4F4D\u9519\u8BEF\u4E0A\u4E0B\u6587\u975E\u5E38\u6709\u6548\u3002</p><p>grammY \u4E0D\u4F1A\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u89E6\u53CA\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u800C\u662F\u628A\u5B83\u5305\u88C5\u6210\u4E00\u4E2A <code>Bot<wbr>Error</code> \u5B9E\u4F8B\uFF0C \u4F1A\u7ED9\u4F60\u4E00\u4E2A\u540D\u4E3A <code>err</code> \u7684\u5BF9\u8C61\uFF0C \u4F60\u53EF\u4EE5\u627E\u5230\u6700\u6839\u672C\u7684\u9519\u8BEF\u901A\u8FC7 <code>err<wbr>.error</code>\uFF0C \u540C\u6837\uFF0C\u4F60\u53EF\u4EE5\u5230\u8FBE\u76F8\u5E94\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u901A\u8FC7 <code>err<wbr>.ctx</code>\u3002</p>",3),A=n("\u5728 "),q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotError",target:"_blank",rel:"noopener noreferrer"},H=n("grammY API \u53C2\u8003"),Y=n(" \u4E2D\u4E86\u89E3 "),I=s("code",null,[n("Bot"),s("wbr"),n("Error")],-1),C=n(" \u7C7B\u3002"),P=t('<h2 id="grammyerror-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#grammyerror-\u5BF9\u8C61" aria-hidden="true">#</a> <code>Grammy<wbr>Error</code> \u5BF9\u8C61</h2><p>\u5982\u679C\u4E00\u4E2A\u50CF <code>send<wbr>Message</code> \u7684 API \u65B9\u6CD5\u5931\u8D25\u4E86\uFF0CgrammY \u4F1A\u629B\u51FA\u4E00\u4E2A <code>Grammy<wbr>Error</code> \u9519\u8BEF\u3002 \u540C\u6837\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u4E00\u4E2A <code>Grammy<wbr>Error</code> \u9519\u8BEF\u5B9E\u4F8B\u662F\u88AB\u4E2D\u95F4\u4EF6\u629B\u51FA\u7684\uFF0C\u90A3\u4E48\u5B83\u540C\u6837\u4F1A\u88AB\u5C01\u88C5\u6210 <code>Bot<wbr>Error</code> \u5BF9\u8C61\u3002</p><p>\u4E00\u4E2A\u88AB\u629B\u51FA\u7684<code>Grammy<wbr>Error</code> \u610F\u5473\u7740\u5BF9\u5E94\u7684 API \u65B9\u6CD5\u5931\u8D25\u4E86\u3002 \u8FD9\u4E2A\u9519\u8BEF\u5BF9\u8C61\u63D0\u4F9B\u8DEF\u5F84\u53BB\u67E5\u770B Telegram \u540E\u53F0\u8FD4\u56DE\u7684\u9519\u8BEF\u4EE3\u7801\u548C\u63CF\u8FF0\u3002</p>',3),G=n("\u5728 "),F={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/GrammyError",target:"_blank",rel:"noopener noreferrer"},N=n("grammY API \u53C2\u8003"),z=n(" \u4E2D\u4E86\u89E3 "),D=s("code",null,[n("Grammy"),s("wbr"),n("Error")],-1),L=n(" \u7C7B\u3002"),T=t('<h2 id="httperror-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#httperror-\u5BF9\u8C61" aria-hidden="true">#</a> <code>Http<wbr>Error</code> \u5BF9\u8C61</h2><p>\u5982\u679C\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u4E86\uFF0C\u90A3\u4E48\u4F1A\u629B\u51FA\u4E00\u4E2A <code>Http<wbr>Error</code>\u3002 \u8FD9\u610F\u5473\u7740 grammY \u4E0D\u80FD\u8FDE\u63A5\u5230 Bot API \u670D\u52A1\u5668\u3002 \u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u9519\u8BEF\u5BF9\u8C61\u7684 <code>error</code> \u5C5E\u6027\u4E2D\u627E\u5230\u4F60\u8BF7\u6C42\u5931\u8D25\u7684\u539F\u56E0\u3002</p><p>\u9664\u975E\u4F60\u7684\u7F51\u7EDC\u4E0D\u53EF\u7528\u4E86\u6216\u8005 \u4F60\u7684 Bot API \u670D\u52A1\u5668\u6682\u65F6\u4E0B\u7EBF\u4E86\uFF0C\u5426\u5219\u4F60\u57FA\u672C\u770B\u4E0D\u5230\u8FD9\u79CD\u7C7B\u578B\u7684\u9519\u8BEF\u3002</p>',3),V=n("\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C Bot API \u670D\u52A1\u5668\u80FD\u88AB\u94FE\u63A5\uFF0C\u4F46\u662F\u65B9\u6CD5\u56DE\u8C03\u8FD4\u56DE\u4E86 "),Q=s("code",null,[n("ok:"),s("wbr"),n(" false")],-1),X=n("\uFF0C\u8FD9\u65F6\u5C31\u4F1A\u629B\u51FA "),Z=s("code",null,[n("Grammy"),s("wbr"),n("Error")],-1),R=n(" \u4F5C\u4E3A\u4EE3\u66FF\u3002"),M=n("\u5728 "),O={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/HttpError",target:"_blank",rel:"noopener noreferrer"},S=n("grammY API \u53C2\u8003"),U=n(" \u4E2D\u4E86\u89E3 "),W=s("code",null,[n("Http"),s("wbr"),n("Error")],-1),$=n(" \u7C7B\u3002"),j=t(`<h2 id="error-\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#error-\u8FB9\u754C" aria-hidden="true">#</a> Error \u8FB9\u754C</h2><blockquote><p>\u8FD9\u662F\u4E00\u4E2A\u9AD8\u7EA7\u4E3B\u9898\uFF0C\u5BF9\u5927\u578B\u673A\u5668\u4EBA\u7A0B\u5E8F\u975E\u5E38\u6709\u7528 \u5982\u679C\u60A8\u5BF9 grammY \u8FD8\u6BD4\u8F83\u964C\u751F\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u672C\u8282\u7684\u5176\u4F59\u90E8\u5206\u3002</p></blockquote><p>\u5982\u679C\u4F60\u628A\u4F60\u7684\u4EE3\u7801\u5E93\u5212\u5206\u6210\u4E0D\u540C\u7684\u90E8\u5206\uFF0C<em>error \u8FB9\u754C</em> \u5141\u8BB8\u4F60\u5B89\u88C5\u4E0D\u540C\u7684\u9519\u8BEF\u5904\u7406\u5668\u5904\u7406\u4E0D\u540C\u7684\u4E2D\u95F4\u4EF6\u90E8\u5206\u3002 \u5B83\u4EEC\u901A\u8FC7\u8BA9\u60A8\u5728\u4E2D\u95F4\u4EF6\u7684\u4E00\u90E8\u5206\u4E2D\u9694\u79BB\u9519\u8BEF\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002 \u6362\u53E5\u8BDD\u8BF4\uFF0C\u5982\u679C\u4E00\u4E2A\u9519\u8BEF\u5728\u4E00\u4E2A\u7279\u6B8A\u9694\u79BB\u7684\u4E2D\u95F4\u4EF6\u88AB\u629B\u51FA\uFF0C\u4ED6\u4E0D\u80FD\u9003\u79BB\u4E2D\u95F4\u4EF6\u7CFB\u7EDF\u7684\u8BE5\u90E8\u5206\u3002 \u76F8\u53CD\uFF0C\u4E00\u4E2A\u4E13\u7528\u7684\u9519\u8BEF\u5904\u7406\u5668\u4F1A\u88AB\u8C03\u7528\uFF0C\u5E76\u4E14\u9694\u79BB\u7684\u4E2D\u95F4\u4EF6\u90E8\u5206\u4F1A\u5047\u8BBE\u6210\u529F\u7684\u8FD0\u884C\u3002 \u8FD9\u662F grammY \u4E2D\u95F4\u4EF6\u7CFB\u7EDF\u7684\u7279\u6027\uFF0C \u6240\u4EE5\u9519\u8BEF\u8FB9\u754C\u4E0D\u5728\u610F\u4F60\u662F\u5426\u8FD0\u884C\u4F60\u7684\u673A\u5668\u4EBA\u7A0B\u5E8F\u5728\u7F51\u7AD9\u51FD\u6570\u6216\u8005\u957F\u8F6E\u8BE2\u4E0A\u3002</p><p>\u6216\u8005\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u8BA9\u4E2D\u95F4\u4EF6\u6267\u884C\u5728\u9519\u8BEF\u5904\u7406\u540E\u6B63\u5E38\u6062\u590D\uFF0C\u5E76\u5728\u9519\u8BEF\u8FB9\u754C\u4E4B\u5916\u7EE7\u7EED\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C \u4E2D\u95F4\u4EF6\u9694\u79BB\u4E0D\u4EC5\u8868\u73B0\u5F97\u597D\u50CF\u5B83\u5DF2\u7ECF\u6210\u529F\u5B8C\u6210\u4E86\uFF0C\u5E76\u4E14\u4ED6\u4F1A\u4F20\u9012\u63A7\u5236\u6D41\u5230\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF08\u88AB\u5B89\u88C5\u5728\u8FD9\u4E2A\u9519\u8BEF\u8FB9\u754C\u4E4B\u5916\u7684\uFF09\u3002</p><p>\u56E0\u6B64\uFF0C\u770B\u8D77\u6765\u5C31\u597D\u50CF\u5305\u542B\u9519\u8BEF\u7684\u4E2D\u95F4\u4EF6\u8FD0\u884C\u4E86 <code>next</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* X */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* Y */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* Z */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">errorBoundary</span><span class="token punctuation">(</span>boundaryHandler <span class="token comment">/* , Q */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* D */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>errorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">boundaryHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in Q, X, Y, or Z!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*
   * \u5982\u679C\u4F60\u60F3\u5728 C \u5904\u8FD0\u884C\u4E2D\u95F4\u4EF6\u4EE5\u9632\u6B62\u51FA\u9519
   * \u4F60\u53EF\u4EE5\u8C03\u7528 \`next\`\uFF1A
   */</span>
  <span class="token comment">// await next()</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in A, B, C, or D!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C<code>boundary<wbr>Handler</code> \u5C06\u5728\u4E0B\u9762\u4E24\u79CD\u4E2D\u95F4\u4EF6\u4E2D\u88AB\u8C03\u7528\uFF1A</p><ol><li>\u5728 <code>bot<wbr>.error<wbr>Boundary</code>\uFF08\u5373 <code>Q</code>\uFF09\u4E4B\u540E\u4F20\u9012\u7ED9 <code>boundary<wbr>Handler</code> \u7684\u6240\u6709\u4E2D\u95F4\u4EF6</li><li>\u5B89\u88C5\u5728\u968F\u540E\u5B89\u88C5\u7684 composer \u5B9E\u4F8B\uFF08\u5373 <code>X</code>\uFF0C<code>Y</code>\uFF0C\u548C <code>Z</code>\uFF09\u4E0A\u7684\u6240\u6709\u4E2D\u95F4\u4EF6\u3002</li></ol>`,9),J=n("\u5173\u4E8E\u7B2C 2 \u70B9\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u8DF3\u8F6C\u5230\u4E2D\u95F4\u4EF6\u7684 "),K=n("\u9AD8\u7EA7\u89E3\u91CA"),nn=n(" \u4E2D\u53BB\u5B66\u4E60\u5982\u4F55\u5728 grammY \u4E2D\u8FDE\u63A5\u4E2D\u95F4\u4EF6\u3002"),sn=t(`<p>\u4F60\u8FD8\u53EF\u4EE5\u5C06\u9519\u8BEF\u8FB9\u754C\u5E94\u7528\u5230\u4E00\u4E2A\u6CA1\u6709\u8C03\u7528 <code>bot<wbr>.error<wbr>Boundary</code> \u7684 composer \u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">protected</span> <span class="token operator">=</span> composer<span class="token punctuation">.</span><span class="token function">errorBoundary</span><span class="token punctuation">(</span>boundaryHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>errorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">boundaryHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in B!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in C!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u7684 <code>boundary<wbr>Handler</code> \u5C06\u88AB\u7ED1\u5B9A\u5230 <code>protected</code> \u7684\u4E2D\u95F4\u4EF6\u8C03\u7528\u3002</p><p>\u5982\u679C\u4F60\u8FD8\u662F\u60F3\u8981\u4F60\u7684\u9519\u8BEF\u7A7F\u8D8A\u9519\u8BEF\u8FB9\u754C\uFF08\u5230\u8FBE\u8FB9\u754C\u5916\uFF09\uFF0C\u4F60\u53EF\u4EE5\u91CD\u65B0\u5728\u4F60\u7684\u9519\u8BEF\u5904\u7406\u5668\u91CC\u9762\u629B\u51FA\u8FD9\u4E2A\u9519\u8BEF\u3002</p><p>\u8FD9\u4E2A\u9519\u8BEF\u4F1A\u88AB\u4F20\u9012\u5230\u4E0B\u4E00\u4E2A\u5305\u56F4\u8FB9\u754C\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u666F\u4E2D\uFF0C \u4F60\u53EF\u4EE5\u5C06\u901A\u8FC7 <code>bot<wbr>.catch</code> \u5B89\u88C5\u7684\u9519\u8BEF\u5904\u7406\u5668\u89C6\u4E3A\u6700\u5916\u56F4\u7684\u9519\u8BEF\u8FB9\u754C\u3002</p>`,6);function an(tn,on){const o=c("RouterLink"),p=c("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[k,m,b,a(o,{to:"/zh/plugins/runner.html"},{default:e(()=>[h]),_:1}),v,_,f]),w,s("p",null,[g,y,a(o,{to:"/zh/guide/context.html"},{default:e(()=>[E]),_:1}),B]),x,s("p",null,[A,s("a",q,[H,a(p)]),Y,I,C]),P,s("p",null,[G,s("a",F,[N,a(p)]),z,D,L]),T,s("blockquote",null,[s("p",null,[V,Q,X,a(o,{to:"/zh/guide/errors.html#GrammyError%E5%AF%B9%E8%B1%A1"},{default:e(()=>[Z]),_:1}),R])]),s("p",null,[M,s("a",O,[S,a(p)]),U,W,$]),j,s("blockquote",null,[s("p",null,[J,a(o,{to:"/zh/advanced/middleware.html"},{default:e(()=>[K]),_:1}),nn])]),sn])}const pn=r(u,[["render",an],["__file","errors.html.vue"]]);export{pn as default};
