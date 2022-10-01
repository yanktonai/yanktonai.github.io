import{_ as l,r as i,o as h,c as d,a as t,b as o,w as n,e as r,d as e}from"./app.ff0cf306.js";const c={},p=r('<h1 id="how-grammy-compares-to-other-bot-frameworks" tabindex="-1"><a class="header-anchor" href="#how-grammy-compares-to-other-bot-frameworks" aria-hidden="true">#</a> How grammY Compares to Other Bot Frameworks</h1><p>While grammY uses some concepts known from other bot frameworks (and web frameworks), it was written from scratch for optimal readability and performance. In other words, it does not use any code of competing projects, but it will still feel familiar to users of some frameworks.</p><blockquote><p>Please assume that this comparison is biased, even though we\u2019re trying to provide you with an objective description of the advantages and disadvantages of using grammY over using other libraries. We are trying to keep things in this article up-to-date. If you notice that anything is outdated, please edit this page using the link at the bottom.</p></blockquote><h2 id="comparison-with-other-javascript-frameworks" tabindex="-1"><a class="header-anchor" href="#comparison-with-other-javascript-frameworks" aria-hidden="true">#</a> Comparison With Other JavaScript Frameworks</h2><div class="custom-container tip"><p class="custom-container-title">Choose Your Programming Language First</p><p>Given that you\u2019re reading the docs of a framework within the JavaScript ecosystem, you are likely looking for something to run on Node.js (or Deno). However, if that\u2019s not you, <a href="#comparison-with-frameworks-in-other-programming-languages">scroll down</a> for a comparison of what programming languages are suited for bot development. Naturally, you will also find a brief comparison against frameworks of other languages (mainly Python).</p></div>',5),m=e("There are two main projects that grammY takes inspiration from, namely "),u={href:"https://github.com/telegraf/telegraf",target:"_blank",rel:"noopener noreferrer"},g=e("Telegraf"),f=e(" and "),y={href:"https://github.com/yagop/node-telegram-bot-api",target:"_blank",rel:"noopener noreferrer"},_=e("NTBA"),w=e(". We will focus on them for now, but we (or you?) may add other comparisons in the future."),b=t("h3",{id:"telegraf",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#telegraf","aria-hidden":"true"},"#"),e(" Telegraf")],-1),v=t("p",null,"grammY has its roots in Telegraf, so here is a brief summary of how these frameworks relate historically.",-1),k=t("h4",{id:"some-history",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#some-history","aria-hidden":"true"},"#"),e(" Some History")],-1),T=t("p",null,"Telegraf is an amazing library, and grammY would not be where it is without it. However, Telegraf used to be written in JavaScript (in v3). The rare type annotations were manually added and poorly maintained, so they were incomplete, incorrect, and outdated. Strong type annotations are a crucial aspect of any serious library for the tooling support they enable, and because it allows you to iterate significantly faster on your code base. Many people prefer to have type safety when developing a complex bot, and for some it\u2019s a deal-breaker not to offer it.",-1),x=e("Telegraf v4 attempted to fix this by migrating the entire code base to TypeScript. Unfortunately, many of the resulting types were so complex that they were too hard to understand (but correct). Moreover, the migration revealed countless oddities ("),Y={href:"https://github.com/telegraf/telegraf/issues/1076",target:"_blank",rel:"noopener noreferrer"},I=e("example"),P=e(") in the code base that made it painful to even find correct typings for the existing code at all."),S=t("p",null,[e("As a result, even though version 4.0 tried to "),t("em",null,"improve"),e(" correctness and tooling support, it ended up making Telegraf substantially "),t("em",null,"harder to use"),e(" than its untyped predecessor. Understandably, many existing users of Telegraf 3 were unwilling to upgrade. It also got harder for new users to get started.")],-1),j=t("strong",null,"grammY takes a step back and rethinks a type-safe bot framework with approachability first.",-1),A=e(" This allowed to skip a lot of the frustrating discussions around how to cope with strange internal typings. It enabled the project to have clean, consistent, compiling code that provides users with excellent types (=editor support). Type safety in turn permits more advanced features that fundamentally change how we think about bot development, such as "),B=e("API transformers"),N=e("."),H=t("p",null,"Today, Telegraf 3 is outdated. There are some unofficial forks out there that try to keep the legacy code base up to date with the evolvement of the Bot API, but their compatibility is unknown. Furthermore, the plugin ecosystem of Telegraf has moved on to Telegraf 4. Most plugins developers do not maintain versions for third-party forks of old Telegraf versions.",-1),W=t("p",null,"Based on the fact that Telegraf hangs somewhere between version 3 and 4, it makes sense to compare grammY to both versions individually.",-1),C=t("h4",{id:"comparison-to-v3",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comparison-to-v3","aria-hidden":"true"},"#"),e(" Comparison to v3")],-1),q=e("Given their shared history, grammY and Telegraf have a lot in common. They both have a "),E=e("middleware system"),F=e(" in their core. They also share a lot of their basic syntax:"),J=r(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Works with both grammY and Telegraf.</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Any code written in Telegraf will work in grammY with minimal changes. (Note that the opposite is not true as many grammY features are not available to Telegraf users.)</p><p>The main advantage of grammY over Telegraf 3.x is <strong>substantially better tooling support</strong>. Telegraf 3 is written in JavaScript. The shipped types are incorrect and incomplete, and the consumed Bot API types are outdated by several years. As a result, there is no reliable support for auto-complete or spell-checking bot code. Experience shows that you often have to run your bot to find out whether your code works.</p><p>In contrast, grammY is written in pure TypeScript. This allows your code editor (e.g. VSCode) to analyze your code while you are typing, and assist you. In addition, it can show the complete Telegram Bot API inline\u2014the website\u2019s documentation will be available right at your fingertips when hovering your mouse over any name or element of your code.</p><p>Another remarkable advantage is that you are finally able to <strong>write your own bots in TypeScript</strong>. This was hard to do because the wrong type annotations of Telegraf were preventing perfectly correct code from compiling, thus effectively encouraging users not to check their code in the first place. However, type-safe code is a major advantage for any non-trivial code base.</p>`,5),M=e("grammY and Telegraf have distinct code bases. Being freed from the legacy, grammY could also make substantial contributions to the underlying middleware system, enabling exciting use cases such as "),O=e("filter queries"),D=e(", "),L=e("error boundaries"),V=e(", "),G=e("API transformers"),U=e(", and many more. This also enables the development of valuable plugins that are impossible to work under Telegraf."),R=t("p",null,[e("The main advantage of Telegraf over grammY is that it is still "),t("strong",null,"known by a lot more people"),e(". The Telegraf community may be divided between the versions, but most of these groups have created more bots with their version of Telegraf than there are grammY bots. This also means that you can find more stories on the internet about Telegraf users, and you will find more unofficial tutorials by other coders.")],-1),z=t("h4",{id:"comparison-to-v4",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comparison-to-v4","aria-hidden":"true"},"#"),e(" Comparison to v4")],-1),K=t("p",null,[e("The main advantage of grammY over Telegraf 4.x is that "),t("strong",null,"it is simply a lot easier"),e(". For example:")],-1),Q=e("grammY has a "),X=e("documentation"),Z=e(". Telegraf does not (it was replaced by a generated API reference that lacks explanations)."),$=t("li",null,[e("Types in grammY "),t("em",null,"just work"),e(" and they will follow your code. In Telegraf, you will often need to write your code a certain way, otherwise it does not compile (even though it would actually work fine).")],-1),ee=e("grammY integrates hints from the "),te={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},oe=e("official Bot API reference"),ae=e(" inline that help you while you\u2019re coding. Telegraf does not give you any explanations on your code."),se=r('<h4 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h4><h5 id="advantages-of-grammy" tabindex="-1"><a class="header-anchor" href="#advantages-of-grammy" aria-hidden="true">#</a> Advantages of grammY</h5><ul><li>Easier to use than Telegraf 3 and 4</li><li>Proper TypeScript support</li><li>Has both a documentation and a generated API reference</li><li>Significantly faster on long polling (with grammY runner)</li><li>United community and ecosystem</li><li>More plugins</li><li>Better integrations with databases and web frameworks</li><li>More actively developed</li><li>Helpful error messages</li><li>Much harder to run into dangerous race conditions</li><li>Designed to protect you from making programming mistakes</li><li>Runs on Node.js, but also on Deno and in the browser</li></ul><h5 id="advantages-of-telegraf" tabindex="-1"><a class="header-anchor" href="#advantages-of-telegraf" aria-hidden="true">#</a> Advantages of Telegraf</h5><ul><li>Older, thus more mature</li><li>Many more example bots, both in the repository and in the wild</li></ul><h3 id="ntba" tabindex="-1"><a class="header-anchor" href="#ntba" aria-hidden="true">#</a> NTBA</h3>',6),ne=e("The "),re=t("code",null,[e("node"),t("wbr"),e("-telegram"),t("wbr"),e("-bot"),t("wbr"),e("-api")],-1),ie=e(" package is the second big project that impacted the development of grammY. Its main advantage over other frameworks is that it just is dead simple. Its architecture can be described in a single sentence, while grammY needs a "),le=e("guide"),he=e(" on its documentation website to do the same. We believe that all these explanations on the grammY website help people to get started easily, but it is tempting to have a library which does not need any explanations in the first place."),de=t("p",null,[e("On the downside, this is only good in the short-term perspective. The idea of putting everything in a gigantic file, and using a primitive "),t("code",null,[e("Event"),t("wbr"),e("Emitter")]),e(" to process streams of complex objects (aka. web requests) has brought a lot of pain to the world of Telegram bots, and it certainly prevented a number of good ideas from being implemented.")],-1),ce=t("p",null,"Bots always start small, but a responsible framework must provide them a clear path to grow, and to scale up. Unfortunately, NTBA fails horribly at doing that. Any code base with more than 50 lines that uses NTBA ends up being a terrible mess of spaghetti-like cross-references. You don\u2019t want that.",-1),pe=t("h3",{id:"other-frameworks",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#other-frameworks","aria-hidden":"true"},"#"),e(" Other Frameworks")],-1),me=e("Do you think that your favorite framework is better than grammY in some respect? Feel free to edit this page and add a comparison\u2014or tell us what you think in the "),ue={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},ge=e("group chat"),fe=e("!"),ye=t("h2",{id:"comparison-with-frameworks-in-other-programming-languages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comparison-with-frameworks-in-other-programming-languages","aria-hidden":"true"},"#"),e(" Comparison With Frameworks in Other Programming Languages")],-1),_e=t("p",null,"There are reasons to favor a different programming language over TypeScript. The most important thing is that you like working with your tools and languages. If you are determined to stick with something else, then you can stop reading here.",-1),we=t("p",null,"Given that you\u2019re still reading, you may want to know why grammY is written in TypeScript, and why you should maybe consider picking this language for your bot, too.",-1),be=t("p",null,"This section will outline how TypeScript has a few advantages over other languages when it comes to developing Telegram bots. The main other language that is used to develop chat bots for Telegram is Python, so we will limit ourselves to this for now. Some of the following points are rather personal opinions than objective facts. People have different taste, so take this section with a grain of salt.",-1),ve=r("<li><p><strong>Better editor tooling.</strong> The type annotations of grammY are outstanding. While Python did introduce types in its 3.5 release, they are not used as commonly in the ecosystem as it is the case with JavaScript/TypeScript. Hence, they cannot compare to what you get out of the box with grammY and its accompanying libraries. With the types come auto-completion at every step of development, as well as helpful tooltips with explanations and links.</p></li><li><p><strong>Easier to scale up code base.</strong> The type system has a second advantage\u2014it lets you scale the code base of your bot. This is much harder to do for projects written in a language with worse type safety.</p></li><li><p><strong>Easier to scale up load.</strong> If your bot actually starts to get popular, it is significantly easier to scale bots written in JS rather than in Python.</p></li><li><p><strong>Higher responsiveness of your bot.</strong> The V8 engine makes JavaScript the fastest scripting language in the observable universe. If you like your bot to be as fast as possible while still enjoying a dynamic language, then grammY is your best bet.</p></li>",4),ke=t("strong",null,[t("code",null,"async"),e("/"),t("code",null,"await"),e(" support.")],-1),Te=e(" This is a very popular programming pattern to tame concurrency. The recent years show a strong trend towards asynchronous programming. The largest bot framework for Python, PTB, "),xe={href:"https://t.me/pythontelegrambotchannel/94",target:"_blank",rel:"noopener noreferrer"},Ye=e("announced its migration"),Ie=e(" to asynchronous programming in January 2021, which is expected to maybe take \u201C2 years\u201D. grammY is already there. (Other less-known Python frameworks may be faster at transitioning. Disregard this point if you are using a Python framework that has support for "),Pe=t("code",null,"async",-1),Se=e("/"),je=t("code",null,"await",-1),Ae=e(".)"),Be=t("h2",{id:"how-to-disagree-with-this-comparison",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#how-to-disagree-with-this-comparison","aria-hidden":"true"},"#"),e(" How to Disagree With This Comparison")],-1),Ne=e("If you think that something is wrong on this page, don\u2019t despair! Please let us know in the "),He={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},We=e("group chat"),Ce=e("! We\u2019d love for you to educate us about your perspective. Naturally, you can also just edit this page on GitHub, or file an issue there to point out mistakes or suggest other things. This page will always have room to be more objective, and more fair.");function qe(Ee,Fe){const a=i("ExternalLinkIcon"),s=i("RouterLink");return h(),d("div",null,[p,t("p",null,[m,t("a",u,[g,o(a)]),f,t("a",y,[_,o(a)]),w]),b,v,k,T,t("p",null,[x,t("a",Y,[I,o(a)]),P]),S,t("p",null,[j,A,o(s,{to:"/advanced/transformers.html"},{default:n(()=>[B]),_:1}),N]),H,W,C,t("p",null,[q,o(s,{to:"/guide/middleware.html"},{default:n(()=>[E]),_:1}),F]),J,t("p",null,[M,o(s,{to:"/guide/filter-queries.html"},{default:n(()=>[O]),_:1}),D,o(s,{to:"/guide/errors.html#error-boundaries"},{default:n(()=>[L]),_:1}),V,o(s,{to:"/advanced/transformers.html"},{default:n(()=>[G]),_:1}),U]),R,z,K,t("ul",null,[t("li",null,[Q,o(s,{to:"/"},{default:n(()=>[X]),_:1}),Z]),$,t("li",null,[ee,t("a",te,[oe,o(a)]),ae])]),se,t("p",null,[ne,re,ie,o(s,{to:"/guide/"},{default:n(()=>[le]),_:1}),he]),de,ce,pe,t("p",null,[me,t("a",ue,[ge,o(a)]),fe]),ye,_e,we,be,t("ol",null,[ve,t("li",null,[t("p",null,[ke,Te,t("a",xe,[Ye,o(a)]),Ie,Pe,Se,je,Ae])])]),Be,t("p",null,[Ne,t("a",He,[We,o(a)]),Ce])])}const Me=l(c,[["render",qe],["__file","comparison.html.vue"]]);export{Me as default};
