import{_ as k,r as e,o as r,c as d,b as a,w as t,a as n,d as s,e as u}from"./app.34388d32.js";const m={},b=n("h1",{id:"\u603B\u662F\u56DE\u590D\u6D88\u606F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u603B\u662F\u56DE\u590D\u6D88\u606F","aria-hidden":"true"},"#"),s(" \u603B\u662F\u56DE\u590D\u6D88\u606F")],-1),y=u('<p>\u6709\u65F6\u5019\u6709\u5FC5\u8981\u603B\u662F\u5C06\u6D88\u606F\u4F5C\u4E3A\u56DE\u590D\u53D1\u9001\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u90A3\u4E9B\u6253\u7B97\u8981\u5728\u7FA4\u7EC4\u4E2D\u4F7F\u7528\u7684 bot\u3002 \u6211\u4EEC\u901A\u5E38\u901A\u8FC7\u5728\u53D1\u9001\u6D88\u606F\u7684\u65B9\u6CD5\u4E2D\u6DFB\u52A0 <code>reply<wbr>_to<wbr>_message<wbr>_id</code> \u53C2\u6570\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF1A<code>send<wbr>Text</code>, <code>reply</code>, <code>send<wbr>Photo</code>, <code>reply<wbr>With<wbr>Photo</code> \u7B49\u7B49\u3002 \u7136\u800C\uFF0C\u5982\u679C\u4F60\u5BF9\u6BCF\u4E00\u6761\u6D88\u606F\u90FD\u8FD9\u6837\u505A\uFF0C\u8FD9\u4F1A\u4F7F\u5F97\u4EE3\u7801\u53D8\u5F97\u5F88\u65E0\u804A\u548C\u7E41\u7410\u3002</p><p>\u8FD9\u4E2A\u63D2\u4EF6\u5C06\u6240\u6709 <code>reply*</code> \u548C <code>send*</code> \u65B9\u6CD5\u7684 <code>reply<wbr>_to<wbr>_message<wbr>_id</code> \u53C2\u6570\u8BBE\u7F6E\u4E3A <code>ctx<wbr>.msg<wbr>.message<wbr>_id</code>\uFF0C\u4EE5\u4FBF\u6BCF\u6761\u6D88\u606F\u90FD\u662F\u5BF9\u89E6\u53D1\u8FD9\u6761\u6D88\u606F\u7684\u56DE\u590D\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><h3 id="\u5728\u6307\u5B9A\u7684\u8DEF\u7531\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728\u6307\u5B9A\u7684\u8DEF\u7531\u4E2D" aria-hidden="true">#</a> \u5728\u6307\u5B9A\u7684\u8DEF\u7531\u4E2D</h3><p>\u5982\u679C\u4F60\u60F3\u8BA9\u6240\u6709\u5728\u7279\u5B9A\u4E0A\u4E0B\u6587\u7684\u6D88\u606F\u8FDB\u884C\u56DE\u590D\uFF08\u6BD4\u5982\u7279\u5B9A\u7684\u547D\u4EE4\uFF09\uFF0C\u4F60\u53EF\u4EE5\u4E13\u95E8\u5E94\u7528\u8FD9\u4E2A\u63D2\u4EF6\u5230\u5B83\u4EEC\u4E0A\u9762\uFF1A</p>',5),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" addReplyParam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@roziscoding/grammy-autoquote"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"addReplyParam"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" addReplyParam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@roziscoding/grammy-autoquote"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"addReplyParam"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" addReplyParam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_autoquote@v1.1.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"addReplyParam"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h3",{id:"\u5728\u6240\u6709\u8DEF\u7531\u4E2D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5728\u6240\u6709\u8DEF\u7531\u4E2D","aria-hidden":"true"},"#"),s(" \u5728\u6240\u6709\u8DEF\u7531\u4E2D")],-1),h=n("p",null,"\u5982\u679C\u4F60\u5E0C\u671B\u6BCF\u6761\u53D1\u9001\u7684\u6D88\u606F\u90FD\u56DE\u590D\u89E6\u53D1\u5B83\u7684\u6D88\u606F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\u5E94\u7528\u8FD9\u4E2A\u63D2\u4EF6\uFF1A",-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" autoQuote "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@roziscoding/grammy-autoquote"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("autoQuote"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hi there :)"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u4E5F\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" autoQuote "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@roziscoding/grammy-autoquote"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("autoQuote"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hi there :)"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u4E5F\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" autoQuote "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_autoquote@v1.1.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("autoQuote"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Demo command!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u5C06\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hi there :)"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8FD9\u4E5F\u4F1A\u5F15\u7528\u7528\u6237\u7684\u6D88\u606F"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h2",{id:"\u63D2\u4EF6\u6982\u8FF0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D2\u4EF6\u6982\u8FF0","aria-hidden":"true"},"#"),s(" \u63D2\u4EF6\u6982\u8FF0")],-1),P=n("li",null,"\u540D\u5B57\uFF1AAutoquote",-1),D=s("\u6E90\u7801\uFF1A"),T={href:"https://github.com/roziscoding/grammy-autoquote",target:"_blank",rel:"noopener noreferrer"},j=s("https://"),z=n("wbr",null,null,-1),C=s("github"),G=n("wbr",null,null,-1),Q=s(".com"),R=n("wbr",null,null,-1),I=s("/roziscoding"),S=n("wbr",null,null,-1),N=s("/grammy"),V=n("wbr",null,null,-1),E=s("-autoquote"),H=s("API \u53C2\u8003\uFF1A"),A={href:"https://doc.deno.land/https://deno.land/x/grammy_autoquote/mod.ts",target:"_blank",rel:"noopener noreferrer"},J=u("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_autoquote<wbr>/mod<wbr>.ts",23);function L(W,F){const c=e("Tag"),i=e("TagGroup"),o=e("CodeGroupItem"),p=e("CodeGroup"),l=e("ExternalLinkIcon");return r(),d("div",null,[b,a(i,null,{default:t(()=>[a(c,{type:"thirdparty",text:"\u7B2C\u4E09\u65B9"}),a(c,{type:"deno"}),a(c,{type:"nodejs"})]),_:1}),y,a(p,null,{default:t(()=>[a(o,{title:"TypeScript",active:""},{default:t(()=>[v]),_:1}),a(o,{title:"JavaScript"},{default:t(()=>[_]),_:1}),a(o,{title:"Deno"},{default:t(()=>[g]),_:1})]),_:1}),w,h,a(p,null,{default:t(()=>[a(o,{title:"TypeScript",active:""},{default:t(()=>[f]),_:1}),a(o,{title:"JavaScript"},{default:t(()=>[x]),_:1}),a(o,{title:"Deno"},{default:t(()=>[q]),_:1})]),_:1}),B,n("ul",null,[P,n("li",null,[D,n("a",T,[j,z,C,G,Q,R,I,S,N,V,E,a(l)])]),n("li",null,[H,n("a",A,[J,a(l)])])])])}const M=k(m,[["render",L],["__file","autoquote.html.vue"]]);export{M as default};
