import{_ as p,r as c,o as u,c as d,a as n,b as e,w as t,d as s,e as i}from"./app.81c9d145.js";const k={},m=n("h1",{id:"scaling-up-i-large-codebase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scaling-up-i-large-codebase","aria-hidden":"true"},"#"),s(" Scaling Up I: Large Codebase")],-1),h=n("p",null,"As soon as your bot grows in complexity, you are going to face the challenge of how to structure your application code base. Naturally, you can split it across files.",-1),_=n("h2",{id:"possible-solution",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#possible-solution","aria-hidden":"true"},"#"),s(" Possible Solution")],-1),b=s("grammY is still pretty young and does not provide any official integrations with DI containers yet. Subscribe to "),y={href:"https://t.me/grammyjs_news",target:"_blank",rel:"noopener noreferrer"},g=s("@grammyjs"),w=n("wbr",null,null,-1),v=s("_news"),f=s(" to be notified as soon as we support this."),x=n("p",null,"You are free to structure your code however you like, and there is no one-size-fits-all solution. That being said, a straightforward and proven strategy to structure your code is the following.",-1),C=n("li",null,"Group things that semantically belong together in the same file (or, depending on the code size, directory). Every single one of these parts exposes middleware that will handle the designated messages.",-1),M=n("li",null,"Create a bot instance centrally that merges all middleware by installing it onto the bot.",-1),q=s("(Optional.) Pre-filter the updates centrally, and send down updates the right way only. You may also want to check out "),N=n("code",null,[s("bot"),n("wbr"),s(".route")],-1),I=s(" ("),Q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#route",target:"_blank",rel:"noopener noreferrer"},j=s("API Reference"),T=s(") or alternatively the "),E=s("router plugin"),O=s(" for that."),A=s("A runnable example that implements the above strategy can be found in the "),B={href:"https://github.com/grammyjs/examples/tree/main/scaling",target:"_blank",rel:"noopener noreferrer"},D=s("Example Bot repository"),F=s("."),G=i(`<h2 id="example-structure" tabindex="-1"><a class="header-anchor" href="#example-structure" aria-hidden="true">#</a> Example Structure</h2><p>For a very simple bot that manages a TODO list, you could imagine this structure.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>src/
\u251C\u2500\u2500 bot.ts
\u2514\u2500\u2500 todo/
    \u251C\u2500\u2500 item.ts
    \u2514\u2500\u2500 list.ts
</code></pre></div><p><code>item<wbr>.ts</code> just defines some stuff about TODO items, and these code parts are used in <code>list<wbr>.ts</code>.</p><p>In <code>list<wbr>.ts</code>, you would then do something like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Register some handlers here that handle your middleware the usual way.</span>
lists<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),L=s("Optionally, you can use an "),S=s("error boundary"),Y=s(" to handle all errors that happen inside your module."),z=i(`<p>Now, in <code>bot<wbr>.ts</code>, you can install this module like so:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lists <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./todo/list&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ... maybe more modules like \`todo\` here</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P=s("Optionally, you can use the "),R=s("router plugin"),V=s(" or to bundle up the different modules, if you\u2019re able to determine which middleware is responsible upfront."),H=n("p",null,"However, remember that the exact way of how to structure your bot is very hard to say generically. As always in software, do it in a way that makes the most sense \u{1F609}",-1),U=n("h2",{id:"type-definitions-for-extracted-middleware",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-definitions-for-extracted-middleware","aria-hidden":"true"},"#"),s(" Type Definitions for Extracted Middleware")],-1),J=n("p",null,"The above structure using composers works well. However, sometimes you may find yourself in the situation that you want to extract a handler into a function, rather than creating a new composer and adding the logic to it. This requires you to add the correct middleware type definitions to your handlers because they can no longer be inferred through the composer.",-1),K=s("grammY exports type definitions for all "),W=n("strong",null,"narrowed types of middleware",-1),X=s(", such as the middleware that you can pass to command handlers. In addition, it exports the type definitions for the "),Z=n("strong",null,"narrowed context objects",-1),$=s(" that are being used in that middleware. Both types are parameterized with your "),nn=s("custom context object"),sn=s(". Hence, a command handler would have the type "),en=n("code",null,[s("Command"),n("wbr"),s("Middleware<My"),n("wbr"),s("Context>")],-1),tn=s(" and its context object "),an=n("code",null,[s("Command"),n("wbr"),s("Context<My"),n("wbr"),s("Context>")],-1),on=s(". They can be used as follows."),cn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"CallbackQueryMiddleware"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"CommandContext"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"NextFunction"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"commandMiddleware"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" CommandContext"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" next"),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// command handling"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" callbackQueryMiddleware"),n("span",{class:"token operator"},":"),s(" CallbackQueryMiddleware"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// callback query handling"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"help"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" commandMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"callbackQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"query-data"'),n("span",{class:"token punctuation"},","),s(" callbackQueryMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"CallbackQueryMiddleware"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"CommandContext"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"NextFunction"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"commandMiddleware"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" CommandContext"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" next"),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// command handling"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" callbackQueryMiddleware"),n("span",{class:"token operator"},":"),s(" CallbackQueryMiddleware"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// callback query handling"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"help"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" commandMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"callbackQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"query-data"'),n("span",{class:"token punctuation"},","),s(" callbackQueryMiddleware"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=s("Check out the "),pn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts#Type_Aliases",target:"_blank",rel:"noopener noreferrer"},un=s("type aliases API reference"),dn=s(" to see an overview over all type aliases that grammY exports.");function kn(mn,hn){const a=c("ExternalLinkIcon"),o=c("RouterLink"),l=c("CodeGroupItem"),r=c("CodeGroup");return u(),d("div",null,[m,h,_,n("blockquote",null,[n("p",null,[b,n("a",y,[g,w,v,e(a)]),f])]),x,n("ol",null,[C,M,n("li",null,[q,N,I,n("a",Q,[j,e(a)]),T,e(o,{to:"/plugins/router.html"},{default:t(()=>[E]),_:1}),O])]),n("p",null,[A,n("a",B,[D,e(a)]),F]),G,n("p",null,[L,e(o,{to:"/guide/errors.html#error-boundaries"},{default:t(()=>[S]),_:1}),Y]),z,n("p",null,[P,e(o,{to:"/plugins/router.html"},{default:t(()=>[R]),_:1}),V]),H,U,J,n("p",null,[K,W,X,Z,$,e(o,{to:"/guide/context.html#customizing-the-context-object"},{default:t(()=>[nn]),_:1}),sn,en,tn,an,on]),e(r,null,{default:t(()=>[e(l,{title:"Node.js",active:""},{default:t(()=>[cn]),_:1}),e(l,{title:"Deno"},{default:t(()=>[ln]),_:1})]),_:1}),n("p",null,[rn,n("a",pn,[un,e(a)]),dn])])}const bn=p(k,[["render",kn],["__file","structuring.html.vue"]]);export{bn as default};
