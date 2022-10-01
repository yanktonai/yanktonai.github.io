import{_ as p,r as c,o as i,c as u,a as n,t as r,b as t,w as a,d as s}from"./app.34388d32.js";const d={},k={align:"right"},m=n("h2",{id:"quickstart",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quickstart","aria-hidden":"true"},"#"),s(" Quickstart")],-1),_=s("Bots est\xE1n escritos en "),h={href:"https://www.typescriptlang.org",target:"_blank",rel:"noopener noreferrer"},b=s("Type"),g=n("wbr",null,null,-1),v=s("Script"),f=s(" (o JavaScript) y corren en varias plataformas, incluyendo "),y={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},w=s("Node"),x=n("wbr",null,null,-1),B=s(".js"),q=s("."),j=n("p",null,[n("code",null,"npm install grammy"),s(" y copia el siguiente c\xF3digo:")],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// <-- Pon el token del bot aqu\xED (https://t.me/BotFather)"),s(`

`),n("span",{class:"token comment"},'// Responde a cualquier mensaje con "\xA1Hola a todos!".'),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\xA1Hola a todos!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// <-- Pon el token del bot aqu\xED (https://t.me/BotFather)"),s(`

`),n("span",{class:"token comment"},'// Responde a cualquier mensaje con "\xA1Hola a todos!".'),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\xA1Hola a todos!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// <-- Pon el token del bot aqu\xED (https://t.me/BotFather)"),s(`

`),n("span",{class:"token comment"},'// Responde a cualquier mensaje con "\xA1Hola a todos!".'),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\xA1Hola a todos!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("p",null,"\xA1Funciona! \u{1F389}",-1),E=n("hr",null,null,-1),F=s("grammY es compatible con la API 6.2 de Telegram Bot que fue "),G={href:"https://core.telegram.org/bots/api#august-12-2022",target:"_blank",rel:"noopener noreferrer"},N=s("lanzada"),P=s(" el 12 de Agosto de 2022. (\xDAltimo punto destacado: Emojis personalizados)");function T(z,R){const e=c("ExternalLinkIcon"),o=c("CodeGroupItem"),l=c("CodeGroup");return i(),u("div",null,[n("h6",k,"\u2026 "+r(["piensa en el por qu\xE9","la nueva era del desarrollo de bots","se ejecuta m\xE1s r\xE1pido que t\xFA","una actualizaci\xF3n por delante","puede hacer todo menos lavar los platos","f\xE1cil de exprimir limones","cientos de millones de peticiones"][Math.floor(Math.random()*7)])+".",1),m,n("p",null,[_,n("a",h,[b,g,v,t(e)]),f,n("a",y,[w,x,B,t(e)]),q]),j,t(l,null,{default:a(()=>[t(o,{title:"TypeScript",active:""},{default:a(()=>[C]),_:1}),t(o,{title:"JavaScript"},{default:a(()=>[H]),_:1}),t(o,{title:"Deno"},{default:a(()=>[I]),_:1})]),_:1}),S,E,n("p",null,[F,n("a",G,[N,t(e)]),P])])}const A=p(d,[["render",T],["__file","index.html.vue"]]);export{A as default};
