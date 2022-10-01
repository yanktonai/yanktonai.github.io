import{_ as h,r as i,o as d,c as l,a as t,b as o,w as r,d as e,e as a}from"./app.1137d7ac.js";const u={},c=t("h1",{id:"faq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),e(" FAQ")],-1),_=t("p",null,[e("Here is a collection of frequently asked questions regarding "),t("a",{href:"#why-am-i-getting-this-error"},"common errors"),e(" and "),t("a",{href:"#questions-about-deno"},"Deno things"),e(".")],-1),p=e("If this FAQ does not answer your question, you should also have a look at the "),f={href:"https://core.telegram.org/bots/faq",target:"_blank",rel:"noopener noreferrer"},m=e("Bot FAQ"),b=e(" written by the Telegram team."),y=t("h2",{id:"why-am-i-getting-this-error",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#why-am-i-getting-this-error","aria-hidden":"true"},"#"),e(" Why Am I Getting This Error?")],-1),g=t("h3",{id:"_400-bad-request-cannot-parse-entities",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_400-bad-request-cannot-parse-entities","aria-hidden":"true"},"#"),e(" 400 Bad Request: Cannot parse entities")],-1),w=e("You are sending a message with formatting, i.e. you\u2019re setting "),k=t("code",null,[e("parse"),t("wbr"),e("_mode")],-1),x=e(" when sending a message. However, your formatting is broken, so Telegram does not know how to parse it. You should re-read the "),T={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},q=e("section about formatting"),v=e(" in the Telegram docs. The byte offset that is mentioned in the error message will tell you where exactly the error is in your string."),I=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"Passing entities instead of formatting"),t("p",null,[e("You can pre-parse the entities for Telegram if you want, and specify "),t("code",null,"entities"),e(" when sending your message. Your message text could then be a regular string. That way, you don\u2019t have to worry about escaping weird characters. This may look like it needs more code, but in fact it is the far more reliable and fool-proof solution to this problem.")])],-1),Y=t("h3",{id:"_401-unauthorized",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_401-unauthorized","aria-hidden":"true"},"#"),e(" 401 Unauthorized")],-1),B=e("Your bot token is wrong. Maybe you think it\u2019s right. It is not. Talk to "),j={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},F=e("@Bot"),N=t("wbr",null,null,-1),C=e("Father"),A=e(" to see what your token is."),D=a('<h3 id="_403-forbidden-bot-was-blocked-by-the-user" tabindex="-1"><a class="header-anchor" href="#_403-forbidden-bot-was-blocked-by-the-user" aria-hidden="true">#</a> 403 Forbidden: bot was blocked by the user</h3><p>You probably tried to send a message to a user and then you ran into this issue.</p><p>When a user blocks your bot, you are no able to send messages to them or interact with them in any other way (except if your bot was invited to a group chat where the user is a member). Telegram does this to protect their users. You cannot do anything about it.</p><p>You can either:</p><ul><li>Handle the error and for example delete the user\u2019s data from your database.</li><li>Ignore the error.</li><li>Listen for <code>my<wbr>_chat<wbr>_member</code> updates via <code>bot<wbr>.on(&quot;my<wbr>_chat<wbr>_member&quot;)</code> in order to be notified when the user blocks your bot. Hint: Compare the <code>status</code> fields of the old and the new chat member.</li></ul><h3 id="_404-not-found" tabindex="-1"><a class="header-anchor" href="#_404-not-found" aria-hidden="true">#</a> 404 Not found</h3>',6),R=e("If this happens while starting your bot, then your bot token is wrong. Talk to "),L={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},H=e("@Bot"),S=t("wbr",null,null,-1),z=e("Father"),E=e(" to see what your token is."),M=e("If your bot works fine most of the time, but then suddenly you\u2019re getting a 404, then you\u2019re doing something very funky. You can come ask us in the "),Q={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},U=e("group chat"),V=e(" (or the "),W={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},P=e("Russian"),G=t("wbr",null,null,-1),O=e("-speaking group chat"),X=e(")."),J=t("h3",{id:"_409-conflict-terminated-by-other-getupdates-request",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_409-conflict-terminated-by-other-getupdates-request","aria-hidden":"true"},"#"),e(" 409 Conflict: terminated by other getUpdates request")],-1),K=t("p",null,"You are accidentally running your bot twice on long polling. You can only run one instance of your bot.",-1),Z=e("If you think that you only run your bot once, you can just revoke the bot token. That will stop all other instances. Talk to "),$={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},ee=e("@Bot"),te=t("wbr",null,null,-1),oe=e("Father"),ne=e(" to do this."),se=a('<h3 id="_429-too-many-requests-retry-after-x" tabindex="-1"><a class="header-anchor" href="#_429-too-many-requests-retry-after-x" aria-hidden="true">#</a> 429: Too Many Requests: retry after X</h3><p>Congratulations! You ran into an error that is among the most difficult ones to fix.</p><p>There are two possible scenarios:</p><p><strong>One:</strong> Your bot does not have many users. In that case, you are just spamming the Telegram servers by sending too many requests. Solution: don\u2019t do that! You should seriously think about how to reduce the number of API calls substantially.</p><p><strong>Two:</strong> Your bot is getting very popular and it has a lot of users (hundreds of thousands). You have already made sure to use the minimum number of API calls for the most common operations of your bot, and <em>still</em> you\u2019re running into these errors (called flood wait).</p><p>There are a few things you can do:</p>',6),re=e("Read "),ae=e("this article in the docs"),ie=e(" to gain a basic understanding of the situation."),he=e("Use the "),de=t("code",null,[e("transformer"),t("wbr"),e("-throttler")],-1),le=e(" plugin"),ue=e("."),ce=e("Use the "),_e=t("code",null,[e("auto"),t("wbr"),e("-retry")],-1),pe=e(" plugin"),fe=e("."),me=e("Come ask us in the "),be={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},ye=e("group chat"),ge=e(" for help. We have experienced people there."),we=t("li",null,"It is possible to ask Telegram to increase the limits, but this is very unlikely to happen if you did not do steps 1-3 first.",-1),ke=a('<h3 id="cannot-find-type-definition-file-for-node-fetch" tabindex="-1"><a class="header-anchor" href="#cannot-find-type-definition-file-for-node-fetch" aria-hidden="true">#</a> Cannot find type definition file for \u2018node-fetch\u2019</h3><p>This is the result of some missing type declarations.</p><p>The recommended way to fix this is to set <code>skip<wbr>Lib<wbr>Check</code> to <code>true</code> in your TypeScript compile options.</p><p>If you are sure that you need this option to be kept to <code>false</code>, you can instead install the missing type definitions by running <code>npm i <wbr>-D @types<wbr>/node<wbr>-fetch@2</code>.</p><h2 id="questions-about-deno" tabindex="-1"><a class="header-anchor" href="#questions-about-deno" aria-hidden="true">#</a> Questions About Deno</h2><h3 id="why-do-you-support-deno" tabindex="-1"><a class="header-anchor" href="#why-do-you-support-deno" aria-hidden="true">#</a> Why do you support Deno?</h3><p>Some important reasons why we like Deno more than Node.js:</p><ul><li>It\u2019s simpler and faster to get started.</li><li>The tooling is substantially better.</li><li>It natively executes TypeScript.</li><li>No need to maintain <code>package<wbr>.json</code> or <code>node<wbr>_modules</code>.</li><li>It has a reviewed standard library.</li></ul>',8),xe=e("Deno was founded by Ryan Dahl\u2014the same person that invented Node.js. He summarized his 10 regrets about Node.js in "),Te={href:"https://youtu.be/M3BM9TB-8yA",target:"_blank",rel:"noopener noreferrer"},qe=e("this video"),ve=e("."),Ie=t("p",null,"grammY itself is Deno-first, and it is backported to support Node.js equally well.",-1);function Ye(Be,je){const n=i("ExternalLinkIcon"),s=i("RouterLink");return d(),l("div",null,[c,_,t("p",null,[p,t("a",f,[m,o(n)]),b]),y,g,t("p",null,[w,k,x,t("a",T,[q,o(n)]),v]),I,Y,t("p",null,[B,t("a",j,[F,N,C,o(n)]),A]),D,t("p",null,[R,t("a",L,[H,S,z,o(n)]),E]),t("p",null,[M,t("a",Q,[U,o(n)]),V,t("a",W,[P,G,O,o(n)]),X]),J,K,t("p",null,[Z,t("a",$,[ee,te,oe,o(n)]),ne]),se,t("ol",null,[t("li",null,[re,o(s,{to:"/advanced/flood.html"},{default:r(()=>[ae]),_:1}),ie]),t("li",null,[he,o(s,{to:"/plugins/transformer-throttler.html"},{default:r(()=>[de,le]),_:1}),ue]),t("li",null,[ce,o(s,{to:"/plugins/auto-retry.html"},{default:r(()=>[_e,pe]),_:1}),fe]),t("li",null,[me,t("a",be,[ye,o(n)]),ge]),we]),ke,t("blockquote",null,[t("p",null,[xe,t("a",Te,[qe,o(n)]),ve])]),Ie])}const Ne=h(u,[["render",Ye],["__file","faq.html.vue"]]);export{Ne as default};
