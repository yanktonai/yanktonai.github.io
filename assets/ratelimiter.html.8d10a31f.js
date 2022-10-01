import{_ as k}from"./ratelimiter-role.f0e3b430.js";import{_ as d,r as c,o as m,c as b,b as a,w as t,a as n,d as s,e as l}from"./app.81c9d145.js";const _={},v=n("h1",{id:"\u9650\u5236\u7528\u6237\u901F\u7387-ratelimiter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9650\u5236\u7528\u6237\u901F\u7387-ratelimiter","aria-hidden":"true"},"#"),s(" \u9650\u5236\u7528\u6237\u901F\u7387 ("),n("code",null,"ratelimiter"),s(")")],-1),h=s("ratelimiter \u662F\u7528 grammY \u6216 "),f={href:"https://github.com/telegraf/telegraf",target:"_blank",rel:"noopener noreferrer"},g=s("Telegraf"),y=s(" bot \u6846\u67B6\u5236\u4F5C\u7684\u4E00\u4E2A\u9650\u901F\u4E2D\u95F4\u4EF6\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u5B83\u662F\u4E00\u4E2A\u5E2E\u52A9\u4F60\u7684 bot \u963B\u585E\u5783\u573E\u4FE1\u606F\u7684\u63D2\u4EF6\u3002\u8981\u66F4\u597D\u5730\u7406\u89E3 ratelimiter\uFF0C\u4F60\u53EF\u4EE5\u770B\u4E0B\u9762\u7684\u56FE\u793A\uFF1A"),w=l('<p><img src="'+k+'" alt="\u901F\u7387\u9650\u5236\u5668\u5728\u62B5\u5FA1\u5783\u573E\u4FE1\u606F\u4E2D\u7684\u4F5C\u7528"></p><h2 id="\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F</h2><p>\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u4F1A\u88AB\u4F60\u7684 bot \u5904\u7406\uFF0C\u8FD9\u610F\u5473\u7740\u53D1\u9001\u5783\u573E\u4FE1\u606F\u4E0D\u4F1A\u5F88\u56F0\u96BE\u3002\u6BCF\u4E2A\u7528\u6237\u6BCF\u79D2\u53EF\u4EE5\u53D1\u9001\u591A\u6B21\u8BF7\u6C42\uFF0C\u4F60\u7684\u811A\u672C\u5FC5\u987B\u5904\u7406\u6BCF\u4E2A\u8BF7\u6C42\uFF0C\u4F46\u662F\u5982\u4F55\u963B\u6B62\u5B83\u5462\uFF1F\u7528 ratelimiter\uFF01</p><div class="custom-container warning"><p class="custom-container-title">\u9650\u5236\u7528\u6237\u901F\u7387\uFF0C\u800C\u4E0D\u662F Telegram \u670D\u52A1\u5668\uFF01</p><p>\u4F60\u5E94\u8BE5\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u63D2\u4EF6 <strong>\u4E0D\u4F1A</strong> \u9650\u5236\u6765\u81EA Telegram \u670D\u52A1\u5668\u7684\u8BF7\u6C42\uFF0C\u800C\u662F\u901A\u8FC7 <code>from<wbr>.id</code> \u8DDF\u8E2A\u8BF7\u6C42\uFF0C\u5F53\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u5B83\u4F1A\u88AB\u62D2\u7EDD\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u589E\u52A0\u5230\u4F60\u7684\u670D\u52A1\u5668\u7684\u5904\u7406\u8D1F\u8377\u3002</p></div><h2 id="\u53EF\u5B9A\u5236\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5B9A\u5236\u6027" aria-hidden="true">#</a> \u53EF\u5B9A\u5236\u6027</h2><p>\u8FD9\u4E2A\u63D2\u4EF6\u53EF\u4EE5\u5B9A\u5236\u7684\u9009\u9879\u6709 5 \u4E2A\uFF1A</p>',6),x=l("<li><code>time<wbr>Frame</code>\uFF1A\u5BF9\u8BF7\u6C42\u8FDB\u884C\u76D1\u6D4B\u7684\u65F6\u95F4\u8303\u56F4\uFF08\u9ED8\u8BA4\u4E3A <code>1000</code> \u6BEB\u79D2\uFF09\u3002</li><li><code>limit</code>\uFF1A\u5728\u6BCF\u4E2A <code>time<wbr>Frame</code> \u5185\u5141\u8BB8\u7684\u8BF7\u6C42\u6570\u91CF\uFF08\u9ED8\u8BA4\u4E3A <code>1</code>\uFF09\u3002</li>",2),E=n("code",null,[s("storage"),n("wbr"),s("Client")],-1),R=s("\uFF1A\u4E00\u4E2A\u7528\u4E8E\u8DDF\u8E2A\u7528\u6237\u548C\u4ED6\u4EEC\u7684\u8BF7\u6C42\u7684\u5B58\u50A8\u7C7B\u578B\u3002\u9ED8\u8BA4\u503C\u662F "),S=n("code",null,[s("MEMORY"),n("wbr"),s("_STORE")],-1),j=s("\uFF0C\u5B83\u4F7F\u7528\u5185\u5B58\u4E2D\u7684 "),T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",target:"_blank",rel:"noopener noreferrer"},B=s("Map"),C=s("\uFF0C\u4F46\u4F60\u4E5F\u53EF\u4EE5\u4F20\u5165 Redis \u5BA2\u6237\u7AEF\uFF08\u66F4\u591A\u4FE1\u606F\u5728 "),G=n("a",{href:"#%E5%85%B3%E4%BA%8E-storageclient"},[s("\u5173\u4E8E storage"),n("wbr"),s("Client")],-1),M=s(" \u4E2D\uFF09\u3002"),O=n("li",null,[n("code",null,[s("on"),n("wbr"),s("Limit"),n("wbr"),s("Exceeded")]),s("\uFF1A\u5982\u679C\u7528\u6237\u8D85\u51FA\u9650\u5236\uFF0C\u5219\u6267\u884C\u7684\u51FD\u6570\uFF08\u9ED8\u8BA4\u503C\u662F\u5FFD\u7565\u989D\u5916\u7684\u8BF7\u6C42\uFF09\u3002")],-1),q=n("li",null,[n("code",null,[s("key"),n("wbr"),s("Generator")]),s("\uFF1A\u7528\u4E8E\u751F\u6210\u6BCF\u4E2A\u7528\u6237\u7684\u552F\u4E00\u952E\u7684\u51FD\u6570\uFF08\u9ED8\u8BA4\u503C\u662F\u4F7F\u7528 "),n("code",null,[s("from"),n("wbr"),s(".id")]),s("\uFF09\u3002\u8FD9\u4E2A\u952E\u7528\u4E8E\u6807\u8BC6\u7528\u6237\uFF0C\u56E0\u6B64\u5B83\u5E94\u8BE5\u662F\u552F\u4E00\u7684\uFF0C\u7528\u6237\u7279\u5B9A\u7684\uFF0C\u5E76\u4E14\u662F\u5B57\u7B26\u4E32\u683C\u5F0F\u3002")],-1),A=n("h3",{id:"\u5173\u4E8E-storageclient",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5173\u4E8E-storageclient","aria-hidden":"true"},"#"),s(" \u5173\u4E8E "),n("code",null,[s("storage"),n("wbr"),s("Client")])],-1),D=n("code",null,[s("MEMORY"),n("wbr"),s("_STORE")],-1),L=s(" \u6216\u8005\u5185\u5B58\u4E2D\u7684\u8DDF\u8E2A\u662F\u9002\u7528\u4E8E\u5927\u591A\u6570 bot \u7684\uFF0C\u4F46\u5982\u679C\u4F60\u5B9E\u73B0\u4E86 bot \u96C6\u7FA4\uFF0C\u4F60\u5C06\u65E0\u6CD5\u6709\u6548\u5730\u4F7F\u7528\u5185\u5B58\u5B58\u50A8\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4E5F\u63D0\u4F9B\u4E86 Redis \u9009\u9879\u3002\u5982\u679C\u4F60\u4F7F\u7528 Deno\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165 "),F={href:"https://github.com/luin/ioredis",target:"_blank",rel:"noopener noreferrer"},Y=s("ioredis"),I=s(" \u6216 "),J={href:"https://deno.land/x/redis",target:"_blank",rel:"noopener noreferrer"},N=s("redis"),P=s(" \u7684\u5BA2\u6237\u7AEF\u3002\u4EFB\u4F55\u5B9E\u73B0\u4E86 "),V=n("code",null,"incr",-1),z=s(" \u548C "),U=n("code",null,"pexpire",-1),W=s(" \u65B9\u6CD5\u7684 Redis \u9A71\u52A8\u5668\u90FD\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u3002ratelimiter \u4E0E\u9A71\u52A8\u5668\u65E0\u5173\u3002"),H=l('<blockquote><p>\u8BF7\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4F7F\u7528 Redis \u5B58\u50A8\u7C7B\u578B\uFF0C\u4F60\u5FC5\u987B\u5728\u4F60\u7684\u670D\u52A1\u5668\u4E0A\u5B89\u88C5 Redis-server 2.6.0 \u53CA\u4EE5\u4E0A\u7248\u672C\u3002\u4E0D\u652F\u6301\u8001\u7248\u672C\u7684 Redis\u3002</p></blockquote><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><p>\u8FD9\u91CC\u6709\u4E24\u79CD\u65B9\u5F0F\u4F7F\u7528 ratelimiter\uFF1A</p><ul><li>\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF08<a href="#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE">\u9ED8\u8BA4\u914D\u7F6E</a>\uFF09\u3002</li><li>\u4F20\u5165\u4E00\u4E2A\u5305\u542B\u4F60\u7684\u8BBE\u7F6E\u7684\u81EA\u5B9A\u4E49\u5BF9\u8C61\uFF08<a href="#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE">\u624B\u52A8\u914D\u7F6E</a>\uFF09\u3002</li></ul><h3 id="\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E</h3><p>\u8FD9\u4E2A\u793A\u4F8B\u6F14\u793A\u4E86\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\u9ED8\u8BA4\u884C\u4E3A\u7684 ratelimiter\uFF1A</p>',6),K=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5C06\u6BCF\u4E2A\u7528\u6237\u7684\u4FE1\u606F\u5904\u7406\u9650\u5236\u5728\u6BCF\u79D2\u4E00\u6761\u4FE1\u606F\u3002"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5C06\u6BCF\u4E2A\u7528\u6237\u7684\u4FE1\u606F\u5904\u7406\u9650\u5236\u5728\u6BCF\u79D2\u4E00\u6761\u4FE1\u606F\u3002"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5C06\u6BCF\u4E2A\u7528\u6237\u7684\u4FE1\u606F\u5904\u7406\u9650\u5236\u5728\u6BCF\u79D2\u4E00\u6761\u4FE1\u606F\u3002"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("h3",{id:"\u624B\u52A8\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u624B\u52A8\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u624B\u52A8\u914D\u7F6E")],-1),$=n("p",null,[s("\u6B63\u5982\u524D\u9762\u6240\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u5411 "),n("code",null,"limit()"),s(" \u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A "),n("code",null,"Options"),s(" \u5BF9\u8C61\u6765\u6539\u53D8 ratelimiter \u7684\u884C\u4E3A\u3002")],-1),nn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" Redis "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u6BCF 2 \u79D2\u53EA\u5141\u8BB8\u5904\u7406 3 \u6761\u4FE1\u606F\u3002"),s(`
    timeFrame`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    limit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" \u662F\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528 Redis\uFF0C\u8BF7\u4E0D\u8981\u4F20\u5165 storageClient\u3002'),s(`
    storageClient`),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// \u5F53\u8D85\u8FC7\u9650\u5236\u65F6\u6267\u884C\u8C03\u7528\u3002"),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("from"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ioredis"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" redis "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Redis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u6BCF 2 \u79D2\u53EA\u5141\u8BB8\u5904\u7406 3 \u6761\u4FE1\u606F\u3002"),s(`
    `),n("span",{class:"token literal-property property"},"timeFrame"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" \u662F\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528 Redis\uFF0C\u8BF7\u4E0D\u8981\u4F20\u5165 storageClient\u3002'),s(`
    `),n("span",{class:"token literal-property property"},"storageClient"),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// \u5F53\u8D85\u8FC7\u9650\u5236\u65F6\u6267\u884C\u8C03\u7528\u3002"),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
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
    `),n("span",{class:"token comment"},"// \u6BCF 2 \u79D2\u53EA\u5141\u8BB8\u5904\u7406 3 \u6761\u4FE1\u606F\u3002"),s(`
    timeFrame`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
    limit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// "MEMORY_STORE" \u662F\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528 Redis\uFF0C\u8BF7\u4E0D\u8981\u4F20\u5165 storageClient\u3002'),s(`
    storageClient`),n("span",{class:"token operator"},":"),s(" redis"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// \u5F53\u8D85\u8FC7\u9650\u5236\u65F6\u6267\u884C\u8C03\u7528\u3002"),s(`
    `),n("span",{class:"token function-variable function"},"onLimitExceeded"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Please refrain from sending too many requests!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("from"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=s("\u6B63\u5982\u4F60\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\u770B\u5230\u7684\uFF0C\u6BCF\u4E2A\u7528\u6237\u6BCF 2 \u79D2\u949F\u6700\u591A\u53EA\u80FD\u53D1\u9001 3 \u6B21\u8BF7\u6C42\u3002\u5982\u679C\u8BE5\u7528\u6237\u53D1\u9001\u66F4\u591A\u8BF7\u6C42\uFF0C\u673A\u5668\u4EBA\u4F1A\u56DE\u590D "),en=n("em",null,"Please refrain from sending too many requests!",-1),on=s("\u3002 \u7531\u4E8E\u6211\u4EEC\u4E0D\u8C03\u7528 "),cn=s("next()"),ln=s("\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u5C06\u88AB\u7ACB\u5373\u5173\u95ED\u3002"),pn=n("blockquote",null,[n("p",null,[s("\u8BF7\u6CE8\u610F\uFF1A\u4E3A\u4E86\u907F\u514D Telegram \u670D\u52A1\u5668\u88AB\u8BF7\u6C42\u6DF9\u6CA1\uFF0C"),n("code",null,[s("on"),n("wbr"),s("Limit"),n("wbr"),s("Exceeded")]),s(" \u53EA\u4F1A\u5728\u6BCF\u4E2A "),n("code",null,[s("time"),n("wbr"),s("Frame")]),s(" \u4E2D\u6267\u884C\u4E00\u6B21\u3002")])],-1),un=n("p",null,"\u53E6\u4E00\u4E2A\u7528\u4F8B\u662F\u9650\u5236\u6765\u81EA\u804A\u5929\u5BA4\u7684\u8BF7\u6C42\u800C\u4E0D\u662F\u7279\u5B9A\u7528\u6237\u7684\u8BF7\u6C42\uFF1A",-1),rn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/ratelimiter"'),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"group"'),s(),n("span",{class:"token operator"},"||"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
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
        `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
        `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" limit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_ratelimiter@v1.1.6/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"limit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"keyGenerator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"group"'),s(),n("span",{class:"token operator"},"||"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"supergroup"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},'// \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u952E\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57\uFF0C\u5982 "123456789"\u3002'),s(`
        `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("p",null,[s("\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4F7F\u7528 "),n("code",null,[s("chat"),n("wbr"),s(".id")]),s(" \u4F5C\u4E3A\u9650\u5236\u7684\u552F\u4E00\u952E\u3002")],-1),bn=n("h2",{id:"\u63D2\u4EF6\u6982\u8FF0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D2\u4EF6\u6982\u8FF0","aria-hidden":"true"},"#"),s(" \u63D2\u4EF6\u6982\u8FF0")],-1),_n=n("li",null,[s("\u540D\u5B57\uFF1A"),n("code",null,"ratelimiter")],-1),vn=s("\u6E90\u7801\uFF1A"),hn={href:"https://github.com/grammyjs/ratelimiter",target:"_blank",rel:"noopener noreferrer"},fn=s("https://"),gn=n("wbr",null,null,-1),yn=s("github"),wn=n("wbr",null,null,-1),xn=s(".com"),En=n("wbr",null,null,-1),Rn=s("/grammyjs"),Sn=n("wbr",null,null,-1),jn=s("/ratelimiter"),Tn=s("\u53C2\u8003\uFF1A"),Bn={href:"https://doc.deno.land/https://deno.land/x/grammy_ratelimiter/mod.ts",target:"_blank",rel:"noopener noreferrer"},Cn=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_ratelimiter<wbr>/mod<wbr>.ts",23);function Gn(Mn,On){const p=c("Tag"),u=c("TagGroup"),o=c("ExternalLinkIcon"),e=c("CodeGroupItem"),i=c("CodeGroup"),r=c("RouterLink");return m(),b("div",null,[v,a(u,null,{default:t(()=>[a(p,{type:"official",text:"\u5B98\u65B9\u7EF4\u62A4"})]),_:1}),n("p",null,[h,n("a",f,[g,a(o)]),y]),w,n("ul",null,[x,n("li",null,[E,R,S,j,n("a",T,[B,a(o)]),C,G,M]),O,q]),A,n("p",null,[D,L,n("a",F,[Y,a(o)]),I,n("a",J,[N,a(o)]),P,V,z,U,W]),H,a(i,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[K]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[Q]),_:1}),a(e,{title:"Deno"},{default:t(()=>[X]),_:1})]),_:1}),Z,$,a(i,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[nn]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[sn]),_:1}),a(e,{title:"Deno"},{default:t(()=>[an]),_:1})]),_:1}),n("p",null,[tn,en,on,a(r,{to:"/zh/guide/middleware.html#%E4%B8%AD%E9%97%B4%E4%BB%B6%E6%A0%88"},{default:t(()=>[cn]),_:1}),ln]),pn,un,a(i,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[rn]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[kn]),_:1}),a(e,{title:"Deno"},{default:t(()=>[dn]),_:1})]),_:1}),mn,bn,n("ul",null,[_n,n("li",null,[vn,n("a",hn,[fn,gn,yn,wn,xn,En,Rn,Sn,jn,a(o)])]),n("li",null,[Tn,n("a",Bn,[Cn,a(o)])])])])}const Dn=d(_,[["render",Gn],["__file","ratelimiter.html.vue"]]);export{Dn as default};
