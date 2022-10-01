import{_ as d}from"./ratelimiter-role.f0e3b430.js";import{_ as k,r as i,o as m,c as h,b as t,w as a,a as n,d as s,e as c}from"./app.1137d7ac.js";const b={},v=n("h1",{id:"rate-limit-users-ratelimiter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rate-limit-users-ratelimiter","aria-hidden":"true"},"#"),s(" Rate Limit Users ("),n("code",null,"ratelimiter"),s(")")],-1),f=s("ratelimiter is a rate-limiting middleware for Telegram bots made with grammY or "),g={href:"https://github.com/telegraf/telegraf",target:"_blank",rel:"noopener noreferrer"},_=s("Telegraf"),y=s(" bot frameworks. In simple terms, it is a plugin that helps you deflect heavy spamming in your bots. To understand ratelimiter better, you can take a look at the following illustration:"),w=c('<p><img src="'+d+'" alt="ratelimiter&#39;s role in deflecting spam"></p><h2 id="how-does-it-work-exactly" tabindex="-1"><a class="header-anchor" href="#how-does-it-work-exactly" aria-hidden="true">#</a> How Does It Work Exactly?</h2><p>Under normal circumstances every request will be processed and answered by your bot which means spamming it will not be that difficult. Each user might send multiple requests per second and your script has to process each request, but how can you stop it? With ratelimiter!</p><div class="custom-container warning"><p class="custom-container-title">Rate-Limiting Users, Not Telegram Servers!</p><p>You should note that this package <strong>DOES NOT</strong> rate limit the incoming requests from Telegram servers, instead, it tracks the incoming requests by <code>from<wbr>.id</code> and dismisses them on arrival, so no further processing load is added to your servers.</p></div><h2 id="customizability" tabindex="-1"><a class="header-anchor" href="#customizability" aria-hidden="true">#</a> Customizability</h2><p>This plugin exposes 5 customizable options:</p>',6),x=c("<li><code>time<wbr>Frame</code>: The time frame during which the requests will be monitored (defaults to <code>1000</code> ms).</li><li><code>limit</code>: The number of requests allowed within each <code>time<wbr>Frame</code> (defaults to <code>1</code>).</li>",2),T=n("code",null,[s("storage"),n("wbr"),s("Client")],-1),R=s(": The type of storage to use for keeping track of users and their requests. The default value is "),q=n("code",null,[s("MEMORY"),n("wbr"),s("_STORE")],-1),S=s(" which uses an in-memory "),j={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",target:"_blank",rel:"noopener noreferrer"},E=s("Map"),C=s(", but you can also pass in a Redis client as well (more info at "),N=n("a",{href:"#about-storageclient"},[s("About storage"),n("wbr"),s("Client")],-1),O=s(")."),G=n("li",null,[n("code",null,[s("on"),n("wbr"),s("Limit"),n("wbr"),s("Exceeded")]),s(": A function that describes what to do if the user exceeds the limit (ignores the extra requests by default).")],-1),L=n("li",null,[n("code",null,[s("key"),n("wbr"),s("Generator")]),s(": A function that returns a unique key generated for each user (it uses "),n("code",null,[s("from"),n("wbr"),s(".id")]),s(" by default). This key is used to identify the user, therefore it should be unique, user specific and in string format.")],-1),M=n("h3",{id:"about-storageclient",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#about-storageclient","aria-hidden":"true"},"#"),s(" About "),n("code",null,[s("storage"),n("wbr"),s("Client")])],-1),I=s("The "),A=n("code",null,[s("MEMORY"),n("wbr"),s("_STORE")],-1),Y=s(" or the in-memory tracking is suitable for most bots, however if you implement clustering for your bot you will not be able to use the in-memory storage effectively. That\u2019s why the Redis option is provided as well. You can pass a Redis client from "),D={href:"https://github.com/luin/ioredis",target:"_blank",rel:"noopener noreferrer"},F=s("ioredis"),P=s(" or "),z={href:"https://deno.land/x/redis",target:"_blank",rel:"noopener noreferrer"},U=s("redis"),J=s(" in case you use Deno. In reality, any Redis driver that implements the "),V=n("code",null,"incr",-1),B=s(" and "),W=n("code",null,"pexpire",-1),H=s(" methods should work just fine. ratelimiter is driver agnostic."),K=c('<blockquote><p>Note: You must have redis-server <strong>2.6.0</strong> and above on your server to use Redis storage client with ratelimiter. Older versions of Redis are not supported.</p></blockquote><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use</h2><p>There are two ways of using ratelimiter:</p><ul><li>Accepting the defaults (<a href="#default-configuration">Default Configuration</a>).</li><li>Passing a custom object containing your settings (<a href="#manual-configuration">Manual Configuration</a>).</li></ul><h3 id="default-configuration" tabindex="-1"><a class="header-anchor" href="#default-configuration" aria-hidden="true">#</a> Default Configuration</h3><p>This snippet demonstrates the easiest way of using ratelimiter, which is accepting the default behavior:</p>',6),Q=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Limits message handling to a message per second for each user."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Limits message handling to a message per second for each user."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Limits message handling to a message per second for each user."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("h3",{id:"manual-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#manual-configuration","aria-hidden":"true"},"#"),s(" Manual Configuration")],-1),nn=n("p",null,[s("As mentioned earlier, you can pass an "),n("code",null,"Options"),s(" object to the "),n("code",null,"limit()"),s(" method to alter the limiter\u2019s behavior.")],-1),sn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" Redis "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Allow only 3 messages to be handled every 2 seconds."),s(`
    timeFrame`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    limit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" is the default value. If you do not want to use Redis, do not pass storageClient at all.'),s(`
    storageClient`),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// This is called when the limit is exceeded."),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// Note that the key should be a number in string format such as "123456789".'),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("from"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Allow only 3 messages to be handled every 2 seconds."),s(`
    `),n("span",{class:"token literal-property property"},"timeFrame"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" is the default value. If you do not want to use Redis, do not pass storageClient at all.'),s(`
    `),n("span",{class:"token literal-property property"},"storageClient"),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// This is called when the limit is exceeded."),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// Note that the key should be a number in string format such as "123456789".'),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("from"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" connect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/redis/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Allow only 3 messages to be handled every 2 seconds."),s(`
    timeFrame`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    limit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" is the default value. If you do not want to use Redis, do not pass storageClient at all.'),s(`
    storageClient`),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// This is called when the limit is exceeded."),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// Note that the key should be a number in string format such as "123456789".'),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("from"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=s("As you can see in the example above, each user is allowed to send 3 requests every 2 seconds. If said user sends more requests, the bot replies with "),on=n("em",null,"Please refrain from sending too many requests",-1),cn=s(". That request will not travel further and dies immediately as we do not call "),ln=s("next()"),un=s(" in the middleware."),rn=n("blockquote",null,[n("p",null,[s("Note: To avoid flooding Telegram servers, "),n("code",null,[s("on"),n("wbr"),s("Limit"),n("wbr"),s("Exceeded")]),s(" is only executed once in every "),n("code",null,[s("time"),n("wbr"),s("Frame")]),s(".")])],-1),pn=n("p",null,"Another use case would be limiting the incoming requests from a chat instead of a specific user:",-1),dn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"group"'),s(),n("span",{class:"token operator"},"||"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},'// Note that the key should be a number in string format, such as "123456789".'),s(`
        `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"group"'),s(),n("span",{class:"token operator"},"||"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},'// Note that the key should be a number in string format, such as "123456789".'),s(`
        `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"group"'),s(),n("span",{class:"token operator"},"||"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},'// Note that the key should be a number in string format, such as "123456789".'),s(`
        `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("p",null,[s("In this example, I have used "),n("code",null,[s("chat"),n("wbr"),s(".id")]),s(" as the unique key for rate-limiting.")],-1),bn=n("h2",{id:"plugin-summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-summary","aria-hidden":"true"},"#"),s(" Plugin Summary")],-1),vn=n("li",null,[s("Name: "),n("code",null,"ratelimiter")],-1),fn=s("Source: "),gn={href:"https://github.com/grammyjs/ratelimiter",target:"_blank",rel:"noopener noreferrer"},_n=s("https://"),yn=n("wbr",null,null,-1),wn=s("github"),xn=n("wbr",null,null,-1),Tn=s(".com"),Rn=n("wbr",null,null,-1),qn=s("/grammyjs"),Sn=n("wbr",null,null,-1),jn=s("/ratelimiter"),En=s("Reference: "),Cn={href:"https://doc.deno.land/https://deno.land/x/grammy_ratelimiter/mod.ts",target:"_blank",rel:"noopener noreferrer"},Nn=c("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_ratelimiter<wbr>/mod<wbr>.ts",23);function On(Gn,Ln){const u=i("Tag"),r=i("TagGroup"),o=i("ExternalLinkIcon"),e=i("CodeGroupItem"),l=i("CodeGroup"),p=i("RouterLink");return m(),h("div",null,[v,t(r,null,{default:a(()=>[t(u,{type:"official",desc:"This plugin is published and maintained by grammY"})]),_:1}),n("p",null,[f,n("a",g,[_,t(o)]),y]),w,n("ul",null,[x,n("li",null,[T,R,q,S,n("a",j,[E,t(o)]),C,N,O]),G,L]),M,n("p",null,[I,A,Y,n("a",D,[F,t(o)]),P,n("a",z,[U,t(o)]),J,V,B,W,H]),K,t(l,null,{default:a(()=>[t(e,{title:"TypeScript",active:""},{default:a(()=>[Q]),_:1}),t(e,{title:"JavaScript"},{default:a(()=>[X]),_:1}),t(e,{title:"Deno"},{default:a(()=>[Z]),_:1})]),_:1}),$,nn,t(l,null,{default:a(()=>[t(e,{title:"TypeScript",active:""},{default:a(()=>[sn]),_:1}),t(e,{title:"JavaScript"},{default:a(()=>[tn]),_:1}),t(e,{title:"Deno"},{default:a(()=>[an]),_:1})]),_:1}),n("p",null,[en,on,cn,t(p,{to:"/guide/middleware.html#the-middleware-stack"},{default:a(()=>[ln]),_:1}),un]),rn,pn,t(l,null,{default:a(()=>[t(e,{title:"TypeScript",active:""},{default:a(()=>[dn]),_:1}),t(e,{title:"JavaScript"},{default:a(()=>[kn]),_:1}),t(e,{title:"Deno"},{default:a(()=>[mn]),_:1})]),_:1}),hn,bn,n("ul",null,[vn,n("li",null,[fn,n("a",gn,[_n,yn,wn,xn,Tn,Rn,qn,Sn,jn,t(o)])]),n("li",null,[En,n("a",Cn,[Nn,t(o)])])])])}const An=k(b,[["render",On],["__file","ratelimiter.html.vue"]]);export{An as default};
