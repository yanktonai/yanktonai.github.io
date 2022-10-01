import{_ as r,r as t,o as k,c as d,b as a,w as e,a as n,d as s,e as l}from"./app.ff0cf306.js";const m={},b=n("h1",{id:"plugin-parse-mode-parse-mode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-parse-mode-parse-mode","aria-hidden":"true"},"#"),s(" Plugin Parse Mode ("),n("code",null,[s("parse"),n("wbr"),s("-mode")]),s(")")],-1),w=l('<p>Plugin ini menyediakan sebuah transformer untuk mengatur setting-an bawaan <code>parse<wbr>_mode</code> dan sebuah middleware untuk menghidrasi <code>Context</code> dengan varian method <code>reply</code> yang lebih familiar, contohnya: <code>reply<wbr>WithHTML</code>, <code>reply<wbr>With<wbr>Markdown</code>, dll.</p><h2 id="penggunaan" tabindex="-1"><a class="header-anchor" href="#penggunaan" aria-hidden="true">#</a> Penggunaan</h2>',2),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateReply"),n("span",{class:"token punctuation"},","),s(" parseMode "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ParseModeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("ParseModeContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateReply"),n("span",{class:"token punctuation"},","),s(" parseMode "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateReply`),n("span",{class:"token punctuation"},","),s(`
  parseMode`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_parse_mode@1.4.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ParseModeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_parse_mode@1.4.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("ParseModeContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),s(" Ringkasan Plugin")],-1),h=n("li",null,[s("Nama: "),n("code",null,[s("parse"),n("wbr"),s("-mode")])],-1),f=s("Sumber: "),x={href:"https://github.com/grammyjs/parse-mode",target:"_blank",rel:"noopener noreferrer"},M=s("https://"),R=n("wbr",null,null,-1),V=s("github"),W=n("wbr",null,null,-1),T=s(".com"),C=n("wbr",null,null,-1),B=s("/grammyjs"),G=n("wbr",null,null,-1),L=s("/parse"),P=n("wbr",null,null,-1),j=s("-mode"),H=s("Referensi: "),I={href:"https://doc.deno.land/https://deno.land/x/grammy_parse_mode/mod.ts",target:"_blank",rel:"noopener noreferrer"},N=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_parse<wbr>_mode<wbr>/mod<wbr>.ts",25);function S(E,A){const p=t("Tag"),i=t("TagGroup"),o=t("CodeGroupItem"),u=t("CodeGroup"),c=t("ExternalLinkIcon");return k(),d("div",null,[b,a(i,null,{default:e(()=>[a(p,{type:"official",text:"RESMI"})]),_:1}),w,a(u,null,{default:e(()=>[a(o,{title:"TypeScript",active:""},{default:e(()=>[g]),_:1}),a(o,{title:"JavaScript"},{default:e(()=>[y]),_:1}),a(o,{title:"Deno"},{default:e(()=>[v]),_:1})]),_:1}),_,n("ul",null,[h,n("li",null,[f,n("a",x,[M,R,V,W,T,C,B,G,L,P,j,a(c)])]),n("li",null,[H,n("a",I,[N,a(c)])])])])}const D=r(m,[["render",S],["__file","parse-mode.html.vue"]]);export{D as default};
