import{_ as k,r as e,o as d,c as m,b as a,w as t,a as n,d as s,e as c}from"./app.c0ce12a9.js";const y={},b=n("h1",{id:"hydration-hydrate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hydration-hydrate","aria-hidden":"true"},"#"),s(" Hydration\uFF08"),n("code",null,"hydrate"),s("\uFF09")],-1),v=c(`<p>\u8FD9\u4E2A\u63D2\u4EF6\u4F1A\u5B89\u88C5\u4E00\u4E9B\u6709\u7528\u7684\u65B9\u6CD5\u5728\u4E24\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5373</p><ol><li>API\u8C03\u7528\u7684\u7ED3\u679C, \u548C</li><li>\u4E0A\u4E0B\u6587\u5BF9\u8C61 <code>ctx</code> \u4E0A\u7684\u5BF9\u8C61\u3002</li></ol><p>\u4F60\u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5, \u5B83\u4EEC\u5C31\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u800C\u4E0D\u9700\u8981\u8C03\u7528 <code>ctx<wbr>.api</code> \u6216 <code>bot<wbr>.api</code>\uFF0C\u4E5F\u4E0D\u9700\u8981\u63D0\u4F9B\u5404\u79CD\u6807\u8BC6\u7B26\u3002 \u8FD9\u4E00\u70B9\u6700\u597D\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u3002</p><p>\u5728<strong>\u6CA1\u6709</strong>\u8FD9\u4E2A\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> statusMessage <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Processing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">doWork</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>photo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E00\u4E9B\u6F2B\u957F\u7684\u56FE\u50CF\u5904\u7406</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">editMessageText</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    statusMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
    <span class="token string">&quot;Done!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">deleteMessage</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>id<span class="token punctuation">,</span> statusMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u51FA\u9519\u65F6\u4EC0\u4E48\u4E5F\u4E0D\u505A\u3002</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<strong>\u6709</strong>\u8FD9\u4E2A\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> statusMessage <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Processing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">doWork</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>photo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E00\u4E9B\u6F2B\u957F\u7684\u56FE\u50CF\u5904\u7406</span>
  <span class="token keyword">await</span> statusMessage<span class="token punctuation">.</span><span class="token function">editText</span><span class="token punctuation">(</span><span class="token string">&quot;Done!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u770B\uFF0C\u5982\u6B64\u7B80\u5355\uFF01</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> statusMessage<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662F\u4E0D\u662F\u975E\u5E38\u7B80\u6D01\uFF1F</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u6709\u4E24\u79CD\u65B9\u5F0F\u5B89\u88C5\u8FD9\u4E2A\u63D2\u4EF6\u3002</p><h3 id="\u7B80\u5355\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B89\u88C5" aria-hidden="true">#</a> \u7B80\u5355\u5B89\u88C5</h3><p>\u8FD9\u4E2A\u63D2\u4EF6\u53EF\u4EE5\u7B80\u5355\u76F4\u63A5\u5730\u5B89\u88C5\uFF0C\u5E94\u8BE5\u53EF\u4EE5\u6EE1\u8DB3\u7EDD\u5927\u591A\u6570\u7528\u6237\u3002</p>`,12),h=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrate"),n("span",{class:"token punctuation"},","),s(" HydrateFlavor "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrate "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrate`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_hydrate@v1.2.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=c('<h3 id="\u9AD8\u7EA7\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u5B89\u88C5" aria-hidden="true">#</a> \u9AD8\u7EA7\u5B89\u88C5</h3><p>\u5F53\u4F7F\u7528\u7B80\u5355\u5B89\u88C5\u65F6\uFF0C\u53EA\u6709\u901A\u8FC7 <code>ctx<wbr>.api</code> \u7684 API \u8C03\u7528\u7ED3\u679C\u5C06\u88AB hydrated\uFF0C\u4F8B\u5982 <code>ctx<wbr>.reply</code>\u3002 \u8FD9\u662F\u5927\u591A\u6570 bot \u6700\u5E38\u7528\u7684\u8C03\u7528\u3002</p><p>\u7136\u800C\uFF0C\u6709\u4E9B bot \u53EF\u80FD\u9700\u8981\u8C03\u7528 <code>bot<wbr>.api</code>\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528\u9AD8\u7EA7\u5B89\u88C5\u3002</p>',3),f=s("\u5B83\u5C06\u4F1A\u5728\u4F60\u7684 bot \u4E2D\u5206\u522B\u96C6\u6210\u4E0A\u4E0B\u6587 hydration \u548C API \u8C03\u7528\u7ED3\u679C hydration\u3002 \u8BF7\u6CE8\u610F\uFF0C\u4F60\u8FD8\u9700\u8981\u5B89\u88C5\u4E00\u4E2A "),x=s("API \u8C03\u5473\u5242"),C=s("\u3002"),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateApi`),n("span",{class:"token punctuation"},","),s(`
  HydrateApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateContext`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" HydrateApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateApi"),n("span",{class:"token punctuation"},","),s(" hydrateContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/hydrate"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateApi`),n("span",{class:"token punctuation"},","),s(`
  HydrateApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateContext`),n("span",{class:"token punctuation"},","),s(`
  HydrateFlavor`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_hydrate@v1.2.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" HydrateFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" HydrateApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=c('<h2 id="\u4EC0\u4E48\u5BF9\u8C61\u4F1A\u88AB-hydrated" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u5BF9\u8C61\u4F1A\u88AB-hydrated" aria-hidden="true">#</a> \u4EC0\u4E48\u5BF9\u8C61\u4F1A\u88AB hydrated</h2><p>\u8FD9\u4E2A\u63D2\u4EF6\u76EE\u524D\u4F1A hydrates</p><ul><li>\u6D88\u606F\u548C\u9891\u9053\u6D88\u606F</li><li>\u7F16\u8F91\u8FC7\u7684\u6D88\u606F\u548C\u7F16\u8F91\u8FC7\u7684\u9891\u9053\u6D88\u606F</li><li>\u56DE\u8C03\u67E5\u8BE2</li><li>inline \u67E5\u8BE2</li><li>\u9009\u5B9A\u7684 inline \u7ED3\u679C</li><li>web \u5E94\u7528\u67E5\u8BE2</li><li>\u9884\u4ED8\u6B3E\u548C\u914D\u9001\u67E5\u8BE2</li><li>\u52A0\u5165\u804A\u5929\u8BF7\u6C42</li></ul><p>\u6240\u6709\u5BF9\u8C61\u90FD\u4F1A\u88AB hydrated \u5728</p><ul><li>\u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61 <code>ctx</code> \u4E2D\uFF0C</li><li>\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u7684 update \u5BF9\u8C61 <code>ctx<wbr>.update</code>\uFF0C</li><li>\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u5FEB\u6377\u65B9\u5F0F\uFF0C\u4F8B\u5982 <code>ctx<wbr>.msg</code>\uFF0C</li><li>\u9002\u7528\u7684 API \u8C03\u7528\u7ED3\u679C\u3002</li></ul><h2 id="\u63D2\u4EF6\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6982\u8FF0" aria-hidden="true">#</a> \u63D2\u4EF6\u6982\u8FF0</h2>',6),j=n("li",null,[s("\u540D\u5B57\uFF1A"),n("code",null,"hydrate")],-1),q=s("\u6E90\u7801\uFF1A"),F={href:"https://github.com/grammyjs/hydrate",target:"_blank",rel:"noopener noreferrer"},T=s("https://"),I=n("wbr",null,null,-1),P=s("github"),E=n("wbr",null,null,-1),G=s(".com"),S=n("wbr",null,null,-1),D=s("/grammyjs"),L=n("wbr",null,null,-1),N=s("/hydrate"),V=s("\u53C2\u8003\uFF1A"),J={href:"https://doc.deno.land/https://deno.land/x/grammy_hydrate/mod.ts",target:"_blank",rel:"noopener noreferrer"},R=c("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_hydrate<wbr>/mod<wbr>.ts",23);function W(z,K){const i=e("Tag"),u=e("TagGroup"),o=e("CodeGroupItem"),p=e("CodeGroup"),r=e("RouterLink"),l=e("ExternalLinkIcon");return d(),m("div",null,[b,a(u,null,{default:t(()=>[a(i,{type:"official",text:"\u5B98\u65B9\u7EF4\u62A4"})]),_:1}),v,a(p,null,{default:t(()=>[a(o,{title:"TypeScript",active:""},{default:t(()=>[h]),_:1}),a(o,{title:"JavaScript"},{default:t(()=>[g]),_:1}),a(o,{title:"Deno"},{default:t(()=>[_]),_:1})]),_:1}),w,n("p",null,[f,a(r,{to:"/zh/advanced/transformers.html#api-%E8%B0%83%E5%91%B3%E5%89%82"},{default:t(()=>[x]),_:1}),C]),a(p,null,{default:t(()=>[a(o,{title:"TypeScript",active:""},{default:t(()=>[A]),_:1}),a(o,{title:"JavaScript"},{default:t(()=>[M]),_:1}),a(o,{title:"Deno"},{default:t(()=>[B]),_:1})]),_:1}),H,n("ul",null,[j,n("li",null,[q,n("a",F,[T,I,P,E,G,S,D,L,N,a(l)])]),n("li",null,[V,n("a",J,[R,a(l)])])])])}const Q=k(y,[["render",W],["__file","hydrate.html.vue"]]);export{Q as default};
