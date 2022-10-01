import{_ as p,r as c,o as i,c as l,a as s,b as a,w as o,e,d as n}from"./app.c0ce12a9.js";const u={},d=e('<h1 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h1><p>Every single error caused by your middleware will be caught by grammY. You should install a custom error handler to handle errors.</p><p>Most importantly, this section will teach you <a href="#catching-errors">how to catch errors</a> that can be thrown.</p><p>Afterwards, we will look at all three types of errors that your bot can encounter.</p><table><thead><tr><th>Name</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="#the-boterror-object"><code>Bot<wbr>Error</code></a></td><td>Error object that wraps any error thrown in your middleware (for example, the two errors below)</td></tr><tr><td><a href="#the-grammyerror-object"><code>Grammy<wbr>Error</code></a></td><td>Thrown if the Bot API server returns <code>ok:<wbr> false</code>, indicating that your API request was invalid and failed</td></tr><tr><td><a href="#the-httperror-object"><code>Http<wbr>Error</code></a></td><td>Thrown if the Bot API server could not be reached</td></tr></tbody></table><p>A more advanced error handling mechanism can be found <a href="#error-boundaries">down here</a>.</p><h2 id="catching-errors" tabindex="-1"><a class="header-anchor" href="#catching-errors" aria-hidden="true">#</a> Catching Errors</h2><p>How you catch errors will depend on your setup.</p><h3 id="long-polling" tabindex="-1"><a class="header-anchor" href="#long-polling" aria-hidden="true">#</a> Long Polling</h3>',9),h=n("If you run your bot via "),k=s("code",null,[n("bot"),s("wbr"),n(".start()")],-1),m=n(", or if you are using "),b=n("grammY runner"),v=n(", then you should "),w=s("strong",null,[n("install an error handler via "),s("code",null,[n("bot"),s("wbr"),n(".catch")])],-1),f=n("."),y=e(`<p>grammY has a default error handler installed that stops the bot if it was started by <code>bot<wbr>.start()</code>. It then re-throws the error. It depends on the platform what will happen next. That is why <strong>you should install an error handler via <code>bot<wbr>.catch</code></strong>.</p><p>Example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webhooks" tabindex="-1"><a class="header-anchor" href="#webhooks" aria-hidden="true">#</a> Webhooks</h3><p>If you run your bot via webhooks, grammY will pass the error on to the web framework that you use, e.g. <code>express</code>. You should handle errors according to the conventions of that framework.</p><h2 id="the-boterror-object" tabindex="-1"><a class="header-anchor" href="#the-boterror-object" aria-hidden="true">#</a> The <code>Bot<wbr>Error</code> Object</h2>`,6),_=n("The "),g=s("code",null,[n("Bot"),s("wbr"),n("Error")],-1),x=n(" object bundles up a thrown error with the corresponding "),E=n("context object"),B=n(" that caused the error to be thrown. This works as follows."),I=e("<p>Whatever error occurs while processing an update, grammY will catch the thrown error for you. It is often useful to access the context object that caused the error.</p><p>grammY does not touch the thrown error in any way, but instead wraps it into an instance of <code>Bot<wbr>Error</code>. Given that object is named <code>err</code>, you can then access the original error via <code>err<wbr>.error</code>. You can access the respective context object via <code>err<wbr>.ctx</code>.</p>",2),q=n("Check out the "),Y=s("code",null,[n("Bot"),s("wbr"),n("Error")],-1),j=n(" class in the "),T={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotError",target:"_blank",rel:"noopener noreferrer"},H=n("grammY API Reference"),A=n("."),C=e('<h2 id="the-grammyerror-object" tabindex="-1"><a class="header-anchor" href="#the-grammyerror-object" aria-hidden="true">#</a> The <code>Grammy<wbr>Error</code> Object</h2><p>If an API method like <code>send<wbr>Message</code> fails, grammY will throw a <code>Grammy<wbr>Error</code>. Note that also <code>Grammy<wbr>Error</code> instances will be wrapped in <code>Bot<wbr>Error</code> objects if they are thrown in middleware.</p><p>A thrown <code>Grammy<wbr>Error</code> indicates that the corresponding API request failed. The error provides access to the error code returned by the Telegram backend, as well as the description.</p>',3),P=n("Check out the "),G=s("code",null,[n("Grammy"),s("wbr"),n("Error")],-1),N=n(" class in the "),R={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/GrammyError",target:"_blank",rel:"noopener noreferrer"},L=n("grammY API Reference"),O=n("."),V=e('<h2 id="the-httperror-object" tabindex="-1"><a class="header-anchor" href="#the-httperror-object" aria-hidden="true">#</a> The <code>Http<wbr>Error</code> Object</h2><p>An <code>Http<wbr>Error</code> is thrown if a network request fails. This means that grammY was unable to contact the Bot API server. The error object holds information about why the request failed, which are available under the <code>error</code> property.</p><p>You will rarely see this kind of error, unless your network infrastructure is unstable, or the Bot API server of your bot is temporarily offline.</p>',3),Q=n("Note that if the Bot API server can be contacted, but it returns "),X=s("code",null,[n("ok:"),s("wbr"),n(" false")],-1),Z=n(" for a given method call, a "),D=s("code",null,[n("Grammy"),s("wbr"),n("Error")],-1),F=n(" is thrown instead."),M=n("Check out the "),W=s("code",null,[n("Http"),s("wbr"),n("Error")],-1),S=n(" class in the "),U={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/HttpError",target:"_blank",rel:"noopener noreferrer"},$=n("grammY API Reference"),z=n("."),J=e(`<h2 id="error-boundaries" tabindex="-1"><a class="header-anchor" href="#error-boundaries" aria-hidden="true">#</a> Error Boundaries</h2><blockquote><p>This is an advanced topic that is mostly useful for larger bots. If you are relatively new to grammY, simply skip the remainder of this section.</p></blockquote><p>If you divide your code base into different parts, <em>error boundaries</em> allow you install different error handlers for different parts of your middleware. They achieve this by letting you fence errors in a part of your middleware. In other words, if an error is thrown in a specially protected part of middleware, it will not be able to escape from that part of the middleware system. Instead, a dedicated error handler is invoked, and the surrounded part of the middleware pretends to complete successfully. This is a feature of grammY\u2019s middleware system, so error boundaries don\u2019t care whether you\u2019re running your bot with webhooks or long polling.</p><p>Optionally, you may choose to instead let the middleware execution <em>resume</em> normally after the error was handled, continuing right outside the error boundary. In that case, the fenced middleware does not only act as if it had completed successfully, but it also passes on the control flow to the next middleware that was installed after the error boundary. Thus, it looks like the middleware inside the error boundary has called <code>next</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
   * You could call \`next\` if you want to run
   * the middleware at C in case of an error:
   */</span>
  <span class="token comment">// await next()</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in A, B, C, or D!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, the <code>boundary<wbr>Handler</code> will be invoked for</p><ol><li>all middlewares that are passed to <code>bot<wbr>.error<wbr>Boundary</code> after <code>boundary<wbr>Handler</code> (i.e. <code>Q</code>), and</li><li>all middlewares that are installed on subsequently installed composer instances (i.e. <code>X</code>, <code>Y</code>, and <code>Z</code>).</li></ol>`,7),K=n("Regarding point 2, you may want to skip ahead to the "),nn=n("advanced explanation"),sn=n(" of middleware to learn how chaining works in grammY."),an=e(`<p>You can also apply an error boundary to a composer without calling <code>bot<wbr>.error<wbr>Boundary</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>boundary<wbr>Handler</code> of the above example will be invoked for middlewares bound to <code>protected</code>.</p><p>If you actively want the error to cross a boundary (that is, pass it outside), you can re-throw the error inside your error handler. The error will then be passed to the next surrounding boundary.</p><p>In a sense, you can regard the error handler installed via <code>bot<wbr>.catch</code> as the outermost error boundary.</p>`,5);function en(tn,on){const t=c("RouterLink"),r=c("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[h,k,m,a(t,{to:"/plugins/runner.html"},{default:o(()=>[b]),_:1}),v,w,f]),y,s("p",null,[_,g,x,a(t,{to:"/guide/context.html"},{default:o(()=>[E]),_:1}),B]),I,s("p",null,[q,Y,j,s("a",T,[H,a(r)]),A]),C,s("p",null,[P,G,N,s("a",R,[L,a(r)]),O]),V,s("blockquote",null,[s("p",null,[Q,X,Z,a(t,{to:"/guide/errors.html#the-grammyerror-object"},{default:o(()=>[D]),_:1}),F])]),s("p",null,[M,W,S,s("a",U,[$,a(r)]),z]),J,s("blockquote",null,[s("p",null,[K,a(t,{to:"/advanced/middleware.html"},{default:o(()=>[nn]),_:1}),sn])]),an])}const cn=p(u,[["render",en],["__file","errors.html.vue"]]);export{cn as default};
