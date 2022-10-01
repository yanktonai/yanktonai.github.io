import{_ as u,r as p,o as r,c as d,a as n,b as e,w as t,d as s,e as a}from"./app.81c9d145.js";const m={},k=n("h1",{id:"middleware",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#middleware","aria-hidden":"true"},"#"),s(" Middleware")],-1),h=n("p",null,[s("The listener functions that are being passed to "),n("code",null,[s("bot"),n("wbr"),s(".on()")]),s(", "),n("code",null,[s("bot"),n("wbr"),s(".command()")]),s(", and their siblings, are called "),n("em",null,"middleware"),s(". While it is not wrong to say that they are listening for updates, calling them \u201Clisteners\u201D is a simplification.")],-1),b=s("This section explains what middleware is, and uses grammY as an example to illustrate how it can be used. If you are looking for specific documentation about what makes grammY\u2019s implementation of middleware special, check out "),w=s("Middleware Redux"),v=s(" in the advanced section of the docs."),g=a(`<h2 id="the-middleware-stack" tabindex="-1"><a class="header-anchor" href="#the-middleware-stack" aria-hidden="true">#</a> The Middleware Stack</h2><p>Suppose you write a bot like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Started!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Help text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Text!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (*)</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Photo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When an update with a regular text message arrives, these steps will be performed:</p><ol><li>You send <code>&quot;Hi there!&quot;</code> to the bot.</li><li>The session middleware receives the update, and does its session things</li><li>The update will be checked for a <code>/start</code> command, which is not contained</li><li>The update will be checked for a <code>/help</code> command, which is not contained</li><li>The update will be checked for text in the message (or channel post), which succeeds.</li><li>The middleware at <code>(*)</code> will be invoked, it handles the update by replying with <code>&quot;Text!&quot;</code>.</li></ol><p>The update is <strong>not</strong> checked for a photo content, because the middleware at <code>(*)</code> already handled the update.</p><p>Now, how does this work? Let\u2019s find out.</p>`,7),f=s("We can inspect the "),_=n("code",null,"Middleware",-1),y=s(" type in grammY\u2019s reference "),x={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Middleware",target:"_blank",rel:"noopener noreferrer"},q=s("here"),T=s(":"),M=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Omitted some type parameters for brevity.</span>
<span class="token keyword">type</span> <span class="token class-name">Middleware</span> <span class="token operator">=</span> MiddlewareFn <span class="token operator">|</span> MiddlewareObj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=s("Aha! Middleware can be a function or an object. We only used functions ("),j=n("code",null,[s("(ctx) "),n("wbr"),s("="),n("wbr"),s("> { "),n("wbr"),s(".."),n("wbr"),s(". }")],-1),C=s(") so far, so let\u2019s ignore middleware objects for now, and dig deeper into the "),Y=n("code",null,[s("Middleware"),n("wbr"),s("Fn")],-1),S=s(" type ("),P={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/MiddlewareFn",target:"_blank",rel:"noopener noreferrer"},W=s("reference"),L=s("):"),D=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Omitted type parameters again.</span>
<span class="token keyword">type</span> <span class="token class-name">MiddlewareFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MaybePromise<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// with</span>
<span class="token keyword">type</span> <span class="token class-name">NextFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=s("So, middleware takes two parameters! We only used one so far, the context object "),F=n("code",null,"ctx",-1),O=s(". We "),R=s("already know"),B=s(" what "),E=n("code",null,"ctx",-1),G=s(" is, but we also see a function with the name "),H=n("code",null,"next",-1),A=s(". In order to understand what "),V=n("code",null,"next",-1),X=s(" is, we have to look at all middleware that you install on your bot object as a whole."),J=a(`<p>You can view all installed middleware functions as a number of layers that are stacked on top of each other. The first middleware (<code>session</code> in our example) is the uppermost layer, hence receiving each update first. It can then decide if it wants to handle the update, or pass it down to the next layer (the <code>/start</code> command handler). The function <code>next</code> can be used to invoke the subsequent middleware, often called <em>downstream middleware</em>. This also means that if you don\u2019t call <code>next</code> in your middleware, the underlying layers of middleware will not be invoked.</p><p>This stack of functions is the <em>middleware stack</em>.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014upstream middleware of X
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...       &lt;\u2014 middleware X. Call \`next\` to pass down updates
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014downstream middleware of X
(ctx, next) =&gt; ...    |
</code></pre></div><p>Looking back at our earlier example, we now know why <code>bot<wbr>.on(&quot;:<wbr>photo&quot;)</code> was never even checked: the middleware in <code>bot<wbr>.on(&quot;:<wbr>text&quot;<wbr>, (ctx) <wbr>=<wbr>&gt; { <wbr>..<wbr>. })</code> already handled the update, and it did not call <code>next</code>. In fact, it did not even specify <code>next</code> as a parameter. It simply ignored <code>next</code>, hence not passing on the update.</p><p>Let\u2019s try out something else with our new knowledge!</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Text!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Command!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run the above bot, and send <code>/start</code>, you will never get to see a response saying <code>Command!</code>. Let\u2019s inspect what happens:</p><ol><li>You send <code>&quot;<wbr>/start&quot;</code> to the bot.</li><li>The <code>&quot;:<wbr>text&quot;</code> middleware receives the update and checks for text, which succeeds because commands are text messages. The update is handled immediately by the first middleware and your bot replies with \u201CText!\u201D.</li></ol><p>The message is never even checked for if it contains the <code>/start</code> command! The order in which you register your middleware matters, because it determines the order of the layers in the middleware stack. You can fix the issue by flipping the order of lines 3 and 4. If you called <code>next</code> on line 3, two responses would be sent.</p><p><strong>The <code>bot<wbr>.use()</code> function simply registers middleware that receives all updates.</strong> This is why <code>session()</code> is installed via <code>bot<wbr>.use()</code>\u2014we want the plugin to operate on all updates, no matter what data is contained.</p><p>Having a middleware stack is an extremely powerful property of any web framework, and this pattern is widely popular (not just for Telegram bots).</p><p>Let\u2019s write our own little piece of middleware to better illustrate how it works.</p><h2 id="writing-custom-middleware" tabindex="-1"><a class="header-anchor" href="#writing-custom-middleware" aria-hidden="true">#</a> Writing Custom Middleware</h2><p>We will illustrate the concept of middleware by writing a simple middleware function that can measure the response time of your bot, i.e. how long it takes your bot to handle a message.</p><p>Here is the function signature for our middleware. You can compare it to the middleware type from above, and convince yourself that we actually have middleware here.</p>`,15),$=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Measures the response time of the bot, and logs it to `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),s(`
  ctx`),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},","),s(`
  next`),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// is an alias for: () => Promise<void>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO: implement"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Measures the response time of the bot, and logs it to `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO: implement"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=a(`<p>We can install it into our <code>bot</code> instance with <code>bot<wbr>.use()</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>responseTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Let\u2019s begin implementing it. Here is what we want to do:</p><ol><li>Once an update arrives, we store <code>Date<wbr>.now()</code> in a variable.</li><li>We invoke the downstream middleware, hence let all message handling happen. This includes command matching, replying, and everything else your bot does.</li><li>We take <code>Date<wbr>.now()</code> again, compare it to the old value, and <code>console<wbr>.log</code> the time difference.</li></ol><p>It is important to install our <code>response<wbr>Time</code> middleware <em>first</em> on the bot (at the top of the middleware stack) to make sure that all operations are included in the measurement.</p>`,5),K=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Measures the response time of the bot, and logs it to `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),s(`
  ctx`),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},","),s(`
  next`),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// is an alias for: () => Promise<void>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// take time before"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" before "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// invoke downstream middleware"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// make sure to `await`!"),s(`
  `),n("span",{class:"token comment"},"// take time after"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" after "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// log difference"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Response time: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("after "),n("span",{class:"token operator"},"-"),s(" before"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ms"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("responseTime"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Measures the response time of the bot, and logs it to `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// take time before"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" before "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// invoke downstream middleware"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// make sure to `await`!"),s(`
  `),n("span",{class:"token comment"},"// take time after"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" after "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// log difference"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Response time: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("after "),n("span",{class:"token operator"},"-"),s(" before"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ms"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("responseTime"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("p",null,"Complete, and works! \u2714\uFE0F",-1),nn=n("p",null,"Feel free to use this middleware on your bot object, register more listeners, and play around with the example. Doing so will help you to fully understand what middleware is.",-1),sn={class:"custom-container danger"},en=n("p",{class:"custom-container-title"},"DANGER: Always Make Sure to await next!",-1),tn=n("p",null,[s("If you ever call "),n("code",null,"next()"),s(" without the "),n("code",null,"await"),s(" keyword, several things will break:")],-1),an=n("li",null,"\u274C Your middleware stack will be executed in the wrong order.",-1),on=n("li",null,"\u274C You may experience data loss.",-1),cn=n("li",null,"\u274C Some messages may not be sent.",-1),pn=n("li",null,"\u274C Your bot may randomly crash in ways that are hard to reproduce.",-1),ln=n("li",null,[s("\u274C If an error happens, your error handler will not be called for it. Instead, you will see that an "),n("code",null,[s("Unhandled"),n("wbr"),s("Promise"),n("wbr"),s("Rejection"),n("wbr"),s("Warning")]),s(" will occur, which may crash your bot process.")],-1),un=s("\u274C The backpressure mechanism of "),rn=s("grammY runner"),dn=s(" breaks, which protects your server from overly-high load, such as during load spikes."),mn=n("li",null,"\u{1F480} Sometimes, it also kills all of your innocent kittens. \u{1F63F}",-1),kn=a("<p>The rule that you should use <code>await</code> is especially important for <code>next()</code>, but it actually applies to any expression in general that returns a <code>Promise</code>. This includes <code>bot<wbr>.api<wbr>.send<wbr>Message</code>, <code>ctx<wbr>.reply</code>, and all other network calls. If your project is important to you, then you use linting tools that warn you if you ever forget to use <code>await</code> on a <code>Promise</code>.</p>",1),hn={class:"custom-container tip"},bn=n("p",{class:"custom-container-title"},"Enable no-floating-promises",-1),wn=s("Consider using "),vn={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},gn=s("ESLint"),fn=s(" and configure it to use the "),_n={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md",target:"_blank",rel:"noopener noreferrer"},yn=s("no"),xn=n("wbr",null,null,-1),qn=s("-floating"),Tn=n("wbr",null,null,-1),Mn=s("-promises"),In=s(" rule. This will make sure that you never forget to use "),jn=n("code",null,"await",-1),Cn=s(" (by yelling at you)."),Yn=a('<h2 id="properties-of-middleware-in-grammy" tabindex="-1"><a class="header-anchor" href="#properties-of-middleware-in-grammy" aria-hidden="true">#</a> Properties of Middleware in grammY</h2><p>In grammY, middleware may return a <code>Promise</code> (which will be <code>await</code>ed), but it can also be synchronous.</p><p>In contrast to other middleware systems (such as the one from <code>express</code>), you cannot pass error values to <code>next</code>. <code>next</code> does not take any arguments. If you want to error, you can simply <code>throw</code> the error. Another difference is that it does not matter how many arguments your middleware takes: <code>() <wbr>=<wbr>&gt; {}</code> will be handled exactly as <code>(ctx) <wbr>=<wbr>&gt; {}</code>, or as <code>(ctx<wbr>, next) <wbr>=<wbr>&gt; {}</code>.</p>',3),Sn=s("There are two types of middleware: functions and objects. Middleware objects are simply a wrapper for middleware functions. They are mostly used internally, but can sometimes also help third-party libraries, or be used in advanced use cases, such as with "),Pn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},Wn=s("Composer"),Ln=s(":"),Dn=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// composer is a middleware object!</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Nn=s("If you want to dig deeper into how grammY implements middleware, check out "),Fn=s("Middleware Redux"),On=s(" in the advanced section of the docs.");function Rn(Bn,En){const c=p("RouterLink"),o=p("ExternalLinkIcon"),i=p("CodeGroupItem"),l=p("CodeGroup");return r(),d("div",null,[k,h,n("blockquote",null,[n("p",null,[b,e(c,{to:"/advanced/middleware.html"},{default:t(()=>[w]),_:1}),v])]),g,n("p",null,[f,_,y,n("a",x,[q,e(o)]),T]),M,n("p",null,[I,j,C,Y,S,n("a",P,[W,e(o)]),L]),D,n("p",null,[N,F,O,e(c,{to:"/guide/context.html"},{default:t(()=>[R]),_:1}),B,E,G,H,A,V,X]),J,e(l,null,{default:t(()=>[e(i,{title:"TypeScript",active:""},{default:t(()=>[$]),_:1}),e(i,{title:"JavaScript"},{default:t(()=>[U]),_:1})]),_:1}),z,e(l,null,{default:t(()=>[e(i,{title:"TypeScript",active:""},{default:t(()=>[K]),_:1}),e(i,{title:"JavaScript"},{default:t(()=>[Q]),_:1})]),_:1}),Z,nn,n("div",sn,[en,tn,n("ul",null,[an,on,cn,pn,ln,n("li",null,[un,e(c,{to:"/plugins/runner.html"},{default:t(()=>[rn]),_:1}),dn]),mn])]),kn,n("div",hn,[bn,n("p",null,[wn,n("a",vn,[gn,e(o)]),fn,n("a",_n,[yn,xn,qn,Tn,Mn,e(o)]),In,jn,Cn])]),Yn,n("p",null,[Sn,n("a",Pn,[Wn,e(o)]),Ln]),Dn,n("p",null,[Nn,e(c,{to:"/advanced/middleware.html"},{default:t(()=>[Fn]),_:1}),On])])}const Hn=u(m,[["render",Rn],["__file","middleware.html.vue"]]);export{Hn as default};
