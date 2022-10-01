import{_ as p,r as o,o as r,c as d,a as n,b as e,w as t,d as s,e as l}from"./app.34388d32.js";const k={},m=n("h1",{id:"scaling-up-ii-high-load",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scaling-up-ii-high-load","aria-hidden":"true"},"#"),s(" Scaling Up II: High Load")],-1),h=s("Making your bot able to handle high load depends on whether you run your bot "),b=s("via long polling or via webhooks"),g=s(". Either way, you should read up on some pitfalls "),f=n("a",{href:"#concurrency-is-hard"},"below",-1),_=s("."),y=n("h2",{id:"long-polling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),s(" Long Polling")],-1),v=n("p",null,"Most bots never need to process more than a handful of messages per minute (during \u201Cpeak load\u201D). In other words, scalability is not a concern for them. In order to be predictable, grammY is processing updates sequentially. This is the order of operations:",-1),w=s("Fetch up to 100 updates via "),x=n("code",null,[s("get"),n("wbr"),s("Updates")],-1),q=s(" ("),B={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},S=s("Telegram Bot API Reference"),C=s(")"),I=n("li",null,[s("For every update, "),n("code",null,"await"),s(" the middleware stack for it")],-1),A=n("p",null,"However, if your bot processes one message per second (or something like that) during load peaks, this can begin to impact the responsiveness negatively. For instance, the message of Bob has to wait until the message of Alice is done processing.",-1),z=n("p",null,"This can be solved by not waiting for Alice\u2019s message to be done processing, i.e. processing both messages concurrently. In order to achieve maximum responsiveness, we\u2019d also like to pull in new messages while the messages of Bob and Alice are still processing. Ideally, we would also like to limit the concurrency to some fixed number to constrain the maximum server load.",-1),T=s("Concurrent processing is not shipped with the grammY core package. Instead, "),Y=s("the "),K=s("grammY runner"),j=s(" package can be used"),G=s(" to run your bot. It supports all of the above out of the box, and it is extremely simple to use."),L=l(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Previously</span>
bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// With grammY runner, which exports \`run\`.</span>
<span class="token function">run</span><span class="token punctuation">(</span>bot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=s("The default concurrency limit is 500. If you want to dig deeper into the package, check out "),F=s("this page"),H=s("."),E=n("p",null,[s("Concurrency is hard, so check out the "),n("a",{href:"#concurrency-is-hard"},"subsection below"),s(" to find out what you should keep in mind when using grammY runner.")],-1),R=n("h2",{id:"webhooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),s(" Webhooks")],-1),V=s("If you run your bot on webhooks, it will automatically process updates concurrently as soon as they are received. Naturally, in order for this to work well under high load, you should make yourself familiar with "),W=s("using webhooks"),M=s(". This means that you still have to be aware of some consequences of concurrency, confer the "),P=n("a",{href:"#concurrency-is-hard"},"subsection below",-1),U=s("."),D=s("Also, "),J=s("remember that"),O=s(" Telegram will deliver updates from the same chat in sequence, but updates from different chats concurrently."),Q=n("h2",{id:"concurrency-is-hard",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concurrency-is-hard","aria-hidden":"true"},"#"),s(" Concurrency Is Hard")],-1),X=n("p",null,[s("If your bot processes all updates concurrently, this can cause a number of problems that need special attention. For example, if two messages from the same chat end up being received by the same "),n("code",null,[s("get"),n("wbr"),s("Updates")]),s(" call, they would be processed concurrently. The order of messages inside the same chat can no longer be guaranteed.")],-1),Z=s("The main point where this can clash is when you use "),$=s("sessions"),nn=s(", which may run into a write-after-read hazard. Imagine this sequence of events:"),sn=l("<ol><li>Alice sends message A</li><li>Bot begins processing A</li><li>Bot reads session data for Alice from database</li><li>Alice sends message B</li><li>Bot begins processing B</li><li>Bot reads session data for Alice from database</li><li>Bot is done processing A, and writes new session to database</li><li>Bot is done processing B, and writes new session to database, hence overwriting the changes performed during processing A. Data loss due to WAR hazard!</li></ol><blockquote><p>Note: You could try use database transactions for your sessions, but then you can only detect the hazard and not prevent it. Trying to use a lock instead would effectively eliminate all concurrency. It is much easier to avoid the hazard in the first place.</p></blockquote><p>Most other session systems of web frameworks simply accept the risk of race conditions, as they do not happen too frequently on the web. However, we do not want this because Telegram bots are much more likely to experience clashes of parallel requests for the same session key. Hence, we have to make sure that updates that access the same session data are processed in sequence in order to avoid this dangerous race condition.</p><p>grammY runner ships with <code>sequentialize()</code> middleware which makes sure that updates that clash are processed in sequence. You can configure it with the very same function that you use to determine the session key. It will then avoid the above race condition by slowing down those (and only those) updates that would cause a collision.</p>",4),en=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Build a unique identifier for the `Context` object."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Sequentialize before accessing session data!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Add the usual middleware, now with safe session support."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Still run it concurrently!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Build a unique identifier for the `Context` object."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Sequentialize before accessing session data!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Add the usual middleware, now with safe session support."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Still run it concurrently!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Build a unique identifier for the `Context` object."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Sequentialize before accessing session data!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Add the usual middleware, now with safe session support."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Still run it concurrently!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=s("Feel free to join the "),cn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},ln=s("Telegram chat"),un=s(" to discuss how to use grammY runner with your bot. We are always happy to hear from people who maintain large bots so we can improve grammY based on their experience with the package.");function pn(rn,dn){const a=o("RouterLink"),i=o("ExternalLinkIcon"),c=o("CodeGroupItem"),u=o("CodeGroup");return r(),d("div",null,[m,n("p",null,[h,e(a,{to:"/guide/deployment-types.html"},{default:t(()=>[b]),_:1}),g,f,_]),y,v,n("ol",null,[n("li",null,[w,x,q,n("a",B,[S,e(i)]),C]),I]),A,z,n("p",null,[T,n("strong",null,[Y,e(a,{to:"/plugins/runner.html"},{default:t(()=>[K]),_:1}),j]),G]),L,n("p",null,[N,e(a,{to:"/plugins/runner.html"},{default:t(()=>[F]),_:1}),H]),E,R,n("p",null,[V,e(a,{to:"/guide/deployment-types.html#how-to-use-webhooks"},{default:t(()=>[W]),_:1}),M,P,U]),n("p",null,[D,e(a,{to:"/guide/deployment-types.html#ending-webhook-requests-in-time"},{default:t(()=>[J]),_:1}),O]),Q,X,n("p",null,[Z,e(a,{to:"/plugins/session.html"},{default:t(()=>[$]),_:1}),nn]),sn,e(u,null,{default:t(()=>[e(c,{title:"TypeScript",active:""},{default:t(()=>[en]),_:1}),e(c,{title:"JavaScript"},{default:t(()=>[tn]),_:1}),e(c,{title:"Deno"},{default:t(()=>[an]),_:1})]),_:1}),n("p",null,[on,n("a",cn,[ln,e(i)]),un])])}const mn=p(k,[["render",pn],["__file","scaling.html.vue"]]);export{mn as default};
