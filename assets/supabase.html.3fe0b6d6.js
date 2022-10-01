import{_ as i,r as e,o as r,c as d,b as a,w as o,a as s,d as n,e as c}from"./app.1137d7ac.js";const k={},b=s("h1",{id:"\u6258\u7BA1-supabase-edge-functions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6258\u7BA1-supabase-edge-functions","aria-hidden":"true"},"#"),n(" \u6258\u7BA1\uFF1ASupabase Edge Functions")],-1),h=n("\u8FD9\u4E2A\u6307\u5357\u544A\u8BC9\u4F60\u5982\u4F55\u5C06\u4F60\u7684 grammY bots \u6258\u7BA1\u5230 "),_={href:"https://supabase.com/",target:"_blank",rel:"noopener noreferrer"},m=n("Supabase"),g=n("."),v=n("\u8BF7\u6CE8\u610F\uFF0C\u5728\u4F7F\u7528 "),f={href:"https://supabase.com/docs/guides/functions",target:"_blank",rel:"noopener noreferrer"},w=n("Supabase Edge Functions"),y=n(" \u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u6709\u4E00\u4E2A "),q={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},x=n("Git"),E=s("wbr",null,null,-1),T=n("Hub"),S=n(" \u8D26\u6237\u3002 \u6B64\u5916\uFF0CSupabase Edge Functions \u662F\u57FA\u4E8E"),B={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},O=n("Deno Deploy"),D=n("\uFF0C\u6240\u4EE5\u5C31\u50CF "),F=n("\u6211\u4EEC\u7684Deno Deploy\u6307\u5357"),N=n(" \u4E00\u6837\uFF0C\u672C\u6307\u5357\u53EA\u9488\u5BF9\u4F7F\u7528 Deno \u7684 grammY \u7528\u6237\u3002"),C=s("p",null,"Supabase Edge Functions \u662F\u5927\u591A\u6570\u7B80\u5355 bot \u7684\u7406\u60F3\u9009\u62E9\uFF0C\u5E76\u4E14\u4F60\u5E94\u8BE5\u6CE8\u610F\uFF0CSupabase Edge Functions \u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u4E0D\u4E00\u5B9A\u5B8C\u6574\u652F\u6301 Deno \u7684\u6240\u6709\u529F\u80FD\u3002 \u4F8B\u5982\uFF0CSupabase Edge Functions \u4E0A\u6CA1\u6709\u6587\u4EF6\u7CFB\u7EDF\u3002 \u5B83\u5C31\u50CF\u5176\u4ED6\u8BB8\u591A serverless \u5E73\u53F0\u4E00\u6837\uFF0C\u4F46\u4E13\u95E8\u7528\u4E8E Deno \u5E94\u7528\u7A0B\u5E8F\u3002",-1),L=n("\u8FD9\u4E2A\u6559\u7A0B\u7684\u7ED3\u679C "),R={href:"https://github.com/grammyjs/examples/tree/main/supabase-edge-functions",target:"_blank",rel:"noopener noreferrer"},K=n("\u53EF\u4EE5\u5728\u6211\u4EEC\u7684\u793A\u4F8B bot \u4ED3\u5E93\u4E2D\u770B\u5230"),j=n("\u3002"),U=s("h2",{id:"\u8BBE\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8BBE\u7F6E","aria-hidden":"true"},"#"),n(" \u8BBE\u7F6E")],-1),W=n("\u4E3A\u4E86\u90E8\u7F72 Supabase Edge Functions\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A Supabase \u8D26\u6237\uFF0C\u5B89\u88C5\u4ED6\u4EEC\u7684 CLI\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A Supabase \u9879\u76EE\u3002 \u4F60\u5E94\u8BE5\u9996\u5148 "),A={href:"https://supabase.com/docs/guides/functions#prerequisites",target:"_blank",rel:"noopener noreferrer"},P=n("\u6309\u7167\u4ED6\u4EEC\u7684\u6587\u6863"),V=n(" \u6765\u8FDB\u884C\u8BBE\u7F6E\u3002"),G=c(`<p>\u901A\u8FC7\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Supabase Function\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions new telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E00\u65E6\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A Supabase Function \u9879\u76EE\uFF0C\u4F60\u5C31\u53EF\u4EE5\u5F00\u59CB\u7F16\u5199\u4F60\u7684 bot\u3002</p><h2 id="\u51C6\u5907\u4F60\u7684\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u4F60\u7684\u4EE3\u7801" aria-hidden="true">#</a> \u51C6\u5907\u4F60\u7684\u4EE3\u7801</h2>`,4),I=n("\u8BF7\u6CE8\u610F\uFF0C\u4F60\u9700\u8981 "),J=n("\u5728 webhooks \u4E0A\u8FD0\u884C\u4F60\u7684 bot"),z=n("\uFF0C\u6240\u4EE5\u4F60\u5E94\u8BE5\u8C03\u7528 "),M=s("code",null,[n("webhook"),s("wbr"),n("Callback")],-1),Y=n("\uFF0C\u800C\u4E0D\u662F "),H=s("code",null,[n("bot"),s("wbr"),n(".start()")],-1),$=n("\u3002"),Q=c(`<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u7B80\u5355\u7684\u793A\u4F8B bot \u4F5C\u4E3A\u4E00\u4E2A\u8D77\u70B9\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>Deno<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;BOT_TOKEN&quot;</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome! Up and running.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;not allowed&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">405</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><p>\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4F60\u7684 bot \u90E8\u7F72\u5230 Supabase\u3002 \u8BF7\u6CE8\u610F\uFF0C\u4F60\u9700\u8981\u7981\u7528 JWT \u6388\u6743\uFF0C\u56E0\u4E3A Telegram \u4F7F\u7528\u4E86\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u786E\u4FDD\u8BF7\u6C42\u6765\u81EA\u4E8E Telegram\u3002 \u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u6765\u90E8\u7F72\u51FD\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions deploy --no-verify-jwt telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u4F60\u9700\u8981\u5C06\u4F60\u7684 bot token \u6DFB\u52A0\u5230\u4F60\u7684 Supabase \u9879\u76EE\u4E2D\uFF0C\u8FD9\u6837\u4F60\u7684\u4EE3\u7801\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u6765\u83B7\u53D6\u5B83\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06 123:aBcDeF-gh \u66FF\u6362\u4E3A\u4F60\u7684 bot \u7684 token\u3002</span>
supabase secrets <span class="token builtin class-name">set</span> <span class="token assign-left variable">BOT_TOKEN</span><span class="token operator">=</span><span class="token number">123</span>:aBcDeF-gh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u7684 Supabase \u51FD\u6570\u73B0\u5728\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u4E86\u3002 \u5269\u4E0B\u7684\u4E8B\u60C5\u662F\u544A\u8BC9 Telegram \u4F60\u7684 bot \u7684 webhook \u5730\u5740\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 <code>set<wbr>Webhook</code> \u6765\u5B9E\u73B0\u3002 \u4F8B\u5982\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u6807\u7B7E\u9875\uFF0C\u5E76\u8BBF\u95EE\u8FD9\u4E2A URL\uFF1A</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>https://api.telegram.org/bot&lt;BOT_TOKEN&gt;/setWebhook?url=https://&lt;PROJECT_NAME&gt;.functions.supabase.co/telegram-bot?secret=&lt;BOT_TOKEN&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06 <code>&lt;BOT<wbr>_TOKEN&gt;</code> \u66FF\u6362\u4E3A\u4F60\u7684 bot \u7684 token\u3002 \u540C\u65F6\uFF0C\u5C06\u7B2C\u4E8C\u6B21\u51FA\u73B0\u7684 <code>&lt;BOT<wbr>_TOKEN&gt;</code> \u66FF\u6362\u4E3A\u4F60\u7684 bot \u7684 token\u3002 \u5C06 <code>PROJECT<wbr>_NAME</code> \u66FF\u6362\u4E3A\u4F60\u7684 Supabase \u9879\u76EE\u540D\u3002</p><p>\u4F60\u5E94\u8BE5\u4F1A\u5728\u4F60\u7684\u6D4F\u89C8\u5668\u7A97\u53E3\u4E2D\u770B\u5230\u8FD9\u4E2A\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;ok&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Webhook was set&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6210\uFF01 \u4F60\u7684 bot \u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u4E86\u3002 \u73B0\u5728\uFF0C\u8F6C\u5230 Telegram \u4E2D\uFF0C\u770B\u770B\u5B83\u662F\u5982\u4F55\u56DE\u5E94\u6D88\u606F\u7684\uFF01</p>`,13);function X(Z,nn){const l=e("Tag"),u=e("TagGroup"),t=e("ExternalLinkIcon"),p=e("RouterLink");return r(),d("div",null,[b,a(u,null,{default:o(()=>[a(l,{type:"deno"})]),_:1}),s("p",null,[h,s("a",_,[m,a(t)]),g]),s("p",null,[v,s("a",f,[w,a(t)]),y,s("a",q,[x,E,T,a(t)]),S,s("a",B,[O,a(t)]),D,a(p,{to:"/zh/hosting/deno-deploy.html"},{default:o(()=>[F]),_:1}),N]),C,s("p",null,[L,s("a",R,[K,a(t)]),j]),U,s("p",null,[W,s("a",A,[P,a(t)]),V]),G,s("blockquote",null,[s("p",null,[I,a(p,{to:"/zh/guide/deployment-types.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-webhooks"},{default:o(()=>[J]),_:1}),z,M,Y,H,$])]),Q])}const an=i(k,[["render",X],["__file","supabase.html.vue"]]);export{an as default};
