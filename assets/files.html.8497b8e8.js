import{_ as k,r as o,o as d,c as m,b as a,w as t,a as n,d as s,e as c}from"./app.ff0cf306.js";const b={},h=n("h1",{id:"file-handling-simplified-in-grammy-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#file-handling-simplified-in-grammy-files","aria-hidden":"true"},"#"),s(" File Handling Simplified in grammY ("),n("code",null,"files"),s(")")],-1),v=n("p",null,"This plugin allows you to easily download files from Telegram servers, and to obtain a URL so you can download the file yourself.",-1),y=n("h2",{id:"downloading-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#downloading-files","aria-hidden":"true"},"#"),s(" Downloading Files")],-1),f=n("p",null,[s("You need to pass your bot token to this plugin because it must authenticate as your bot when it downloads files. This plugin then installs the "),n("code",null,"download"),s(" method on "),n("code",null,[s("get"),n("wbr"),s("File")]),s(" call results. Example:")],-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" FileFlavor"),n("span",{class:"token punctuation"},","),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Transformative Context flavor"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Use the plugin."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Download videos and GIFs to temporary locations."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Prepare the file for download."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Download the file to a temporary location."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Print the file path."),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File saved at "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Use the plugin."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Download videos and GIFs to temporary locations."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Prepare the file for download."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Download the file to a temporary location."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Print the file path."),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File saved at "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  FileFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateFiles`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_files@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Transformative Context flavor"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create a bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Use the plugin."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Download videos and GIFs to temporary locations."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Prepare the file for download."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Download the file to a temporary location."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Print the file path."),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File saved at "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=c('<p>You can pass a string with a file path to <code>download</code> if you don\u2019t want to create a temporary file. Just do <code>await file<wbr>.download(&quot;<wbr>/path<wbr>/to<wbr>/file&quot;)</code>.</p><p>If you only want to get the URL of the file so you can download it yourself, use <code>file<wbr>.get<wbr>Url</code>. This will return an HTTPS link to your file that is valid for at least one hour.</p><h2 id="local-bot-api-server" tabindex="-1"><a class="header-anchor" href="#local-bot-api-server" aria-hidden="true">#</a> Local Bot API Server</h2>',3),F=s("If you are using a "),C={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},T=s("local Bot API server"),B=s(", then the "),A=n("code",null,[s("get"),n("wbr"),s("File")],-1),I=s(" call effectively downloads the file to your disk already."),M=c('<p>In turn, you can call <code>file<wbr>.get<wbr>Url()</code> to access that file path. Note that <code>await file<wbr>.download()</code> will now simply copy that locally present file to a temporary location (or to the given path if specified).</p><h2 id="supporting-bot-api-calls" tabindex="-1"><a class="header-anchor" href="#supporting-bot-api-calls" aria-hidden="true">#</a> Supporting <code>bot<wbr>.api</code> Calls</h2>',2),P=s("By default, the results of "),j=n("code",null,[s("await bot"),n("wbr"),s(".api"),n("wbr"),s(".get"),n("wbr"),s("File()")],-1),N=s(" will also be equipped with "),D=n("code",null,"download",-1),G=s(" and "),S=n("code",null,[s("get"),n("wbr"),s("Url")],-1),U=s(" methods. However, this is not reflected in the types. If you need these calls, you should also install an "),E=s("API flavor"),L=s(" on the bot object called "),O=n("code",null,[s("File"),n("wbr"),s("Api"),n("wbr"),s("Flavor")],-1),R=s(":"),V=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" FileApiFlavor"),n("span",{class:"token punctuation"},","),s(" FileFlavor"),n("span",{class:"token punctuation"},","),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" FileApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  FileApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  FileFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateFiles`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_files@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" FileApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"plugin-summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-summary","aria-hidden":"true"},"#"),s(" Plugin Summary")],-1),H=n("li",null,[s("Name: "),n("code",null,"files")],-1),K=s("Source: "),J={href:"https://github.com/grammyjs/files",target:"_blank",rel:"noopener noreferrer"},z=s("https://"),Q=n("wbr",null,null,-1),W=s("github"),X=n("wbr",null,null,-1),Z=s(".com"),$=n("wbr",null,null,-1),nn=s("/grammyjs"),sn=n("wbr",null,null,-1),an=s("/files"),tn=s("Reference: "),on={href:"https://doc.deno.land/https://deno.land/x/grammy_files/mod.ts",target:"_blank",rel:"noopener noreferrer"},en=c("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_files<wbr>/mod<wbr>.ts",23);function ln(cn,pn){const p=o("Tag"),u=o("TagGroup"),e=o("CodeGroupItem"),i=o("CodeGroup"),l=o("ExternalLinkIcon"),r=o("RouterLink");return d(),m("div",null,[h,a(u,null,{default:t(()=>[a(p,{type:"official",desc:"This plugin is published and maintained by grammY"})]),_:1}),v,y,f,a(i,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[w]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[_]),_:1}),a(e,{title:"Deno"},{default:t(()=>[g]),_:1})]),_:1}),x,n("p",null,[F,n("a",C,[T,a(l)]),B,A,I]),M,n("p",null,[P,j,N,D,G,S,U,a(r,{to:"/advanced/transformers.html#api-flavoring"},{default:t(()=>[E]),_:1}),L,O,R]),a(i,null,{default:t(()=>[a(e,{title:"Node.js",active:""},{default:t(()=>[V]),_:1}),a(e,{title:"Deno"},{default:t(()=>[Y]),_:1})]),_:1}),q,n("ul",null,[H,n("li",null,[K,n("a",J,[z,Q,W,X,Z,$,nn,sn,an,a(l)])]),n("li",null,[tn,n("a",on,[en,a(l)])])])])}const rn=k(b,[["render",ln],["__file","files.html.vue"]]);export{rn as default};
