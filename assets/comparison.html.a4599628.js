import{_ as i,r as l,o as h,c as a,a as t,b as o,w as d,d as e,e as r}from"./app.ff0cf306.js";const _={},u=t("h1",{id:"comparison-of-hosting-providers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comparison-of-hosting-providers","aria-hidden":"true"},"#"),e(" Comparison of Hosting Providers")],-1),c=t("p",null,"There are many different hosting providers that allow you to run your bot. It can sometimes be hard to keep track of how much they cost and how good their performance is. This is why the grammY community is collecting their experiences on this page.",-1),m=t("h2",{id:"what-is-a-hosting-provider",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what-is-a-hosting-provider","aria-hidden":"true"},"#"),e(" What is a Hosting Provider?")],-1),p=e("In order to keep a bot online 24 hours a day, you need to run a computer 24 hours a day. As "),b=e("mentioned in the introduction"),f=e(", you most likely don\u2019t want to do that with your laptop or home computer. Instead, you can ask a company to run the bot in the cloud."),g=r('<p>In other words, you just run it on someone else\u2019s computer.</p><h2 id="comparison-tables" tabindex="-1"><a class="header-anchor" href="#comparison-tables" aria-hidden="true">#</a> Comparison Tables</h2><blockquote><p>Please click the edit button at the bottom of the page to add more providers or to edit existing ones!</p></blockquote><p>We have two comparison tables: one for <a href="#serverless">serverless</a> hosting and one for <a href="#vps">VPS</a>.</p><h3 id="serverless" tabindex="-1"><a class="header-anchor" href="#serverless" aria-hidden="true">#</a> Serverless</h3><p>Serverless means that you do not control a single machine on which your bot is run. Instead, these hosting providers will rather allow you to upload your code, and then start and stop different machines as necessary to make sure that your bot always works.</p>',6),y=e("This has the downside that your bot does not have access to a persistent storage by default, such as a local file system. Instead, you will often have to have a database separately and connect to it if you need to store data permanently. We therefore recommend you to use a different kind of hosting for more complex bots, e.g. a "),w=e("VPS"),v=e("."),k=e("The main thing to know about them is that on serverless infrastructures you are required to use "),B=e("webhooks"),S=e("."),C=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Min. price"),t("th",null,"Pricing"),t("th",null,"Limits"),t("th",null,"Node.js"),t("th",null,"Deno"),t("th",null,"Web"),t("th",null,"Notes")])],-1),x=t("tr",null,[t("td",null,"Deta"),t("td",null,"Free"),t("td",null,"No paid plans yet"),t("td",null,"No specific limits"),t("td",null,"\u2705"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),P=t("td",null,"Deno Deploy",-1),U=t("td",null,"Free",-1),G=t("td",null,"$10/mo subscription for 5M req and 100 GB; $2/1M req, $0.3/GB network",-1),q={href:"https://deno.com/deploy/pricing",target:"_blank",rel:"noopener noreferrer"},N=e("100K req"),M=t("wbr",null,null,-1),F=e("/day"),D=t("wbr",null,null,-1),I=e(", 100 GB"),K=t("wbr",null,null,-1),O=e("/mo"),E=t("wbr",null,null,-1),T=e(", 10 ms CPU"),V=t("wbr",null,null,-1),$=e("-time limit"),A=t("td",null,"\u274C",-1),R=t("td",null,"\u2705",-1),W=t("td",null,"\u274C",-1),H=t("td",null,null,-1),L=t("td",null,"DigitalOcean Functions",-1),Y=t("td",null,"Free",-1),j=t("td",null,"$1.85/100K GB-s",-1),z={href:"https://docs.digitalocean.com/products/functions/details/pricing/",target:"_blank",rel:"noopener noreferrer"},Q=e("90K GB"),J=t("wbr",null,null,-1),X=e("-s"),Z=t("wbr",null,null,-1),tt=e("/mo"),et=t("td",null,"\u2705",-1),ot=t("td",null,"\u274C",-1),nt=t("td",null,"\u2753",-1),st=t("td",null,null,-1),dt=t("td",null,"Cloudflare Workers",-1),lt=t("td",null,"Free",-1),rt=t("td",null,"$5/10M req",-1),it={href:"https://workers.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},ht=e("100K req"),at=t("wbr",null,null,-1),_t=e("/day"),ut=t("wbr",null,null,-1),ct=e(", 10 ms CPU"),mt=t("wbr",null,null,-1),pt=e("-time limit"),bt=t("td",null,"\u274C",-1),ft={href:"https://denoflare.dev/",target:"_blank",rel:"noopener noreferrer"},gt=e("\u2705"),yt=t("td",null,"\u2705",-1),wt=t("td",null,null,-1),vt=t("td",null,"Heroku",-1),kt=t("td",null,"Free",-1),Bt=t("td",null,"It\u2019s complicated",-1),St={href:"https://www.heroku.com/pricing",target:"_blank",rel:"noopener noreferrer"},Ct=e("550"),xt=t("wbr",null,null,-1),Pt=e("-1000 h"),Ut=t("wbr",null,null,-1),Gt=e("/mo"),qt=t("td",null,"\u2705",-1),Nt=t("td",null,"\u2753",-1),Mt=t("td",null,"\u2753",-1),Ft=t("td",null,null,-1),Dt=t("td",null,"Vercel",-1),It=t("td",null,"Free",-1),Kt=t("td",null,"$20/mo subscription",-1),Ot={href:"https://vercel.com/pricing",target:"_blank",rel:"noopener noreferrer"},Et=e("Unlimited invocations"),Tt=t("wbr",null,null,-1),Vt=e(", 100 GB"),$t=t("wbr",null,null,-1),At=e("-h"),Rt=t("wbr",null,null,-1),Wt=e(", 10 s time limit"),Ht=t("td",null,"\u2753",-1),Lt=t("td",null,"\u2753",-1),Yt=t("td",null,"\u2753",-1),jt=t("td",null,"Not intended for non-websites?",-1),zt=t("td",null,"Scaleway Functions",-1),Qt=t("td",null,"Free",-1),Jt=t("td",null,"\u20AC0.15/1M req, \u20AC1.2/100K GB-s",-1),Xt={href:"https://www.scaleway.com/en/pricing/#serverless-functions",target:"_blank",rel:"noopener noreferrer"},Zt=e("1M requests"),te=t("wbr",null,null,-1),ee=e(", 400K GB"),oe=t("wbr",null,null,-1),ne=e("-s"),se=t("wbr",null,null,-1),de=e("/mo"),le=t("td",null,"\u2753",-1),re=t("td",null,"\u2753",-1),ie=t("td",null,"\u2753",-1),he=t("td",null,null,-1),ae=t("td",null,"Scaleway Containers",-1),_e=t("td",null,"Free",-1),ue=t("td",null,"\u20AC0.10/100K GB-s, \u20AC1.0/100K vCPU-s",-1),ce={href:"https://www.scaleway.com/en/pricing/#serverless-containers",target:"_blank",rel:"noopener noreferrer"},me=e("400K GB"),pe=t("wbr",null,null,-1),be=e("-s"),fe=t("wbr",null,null,-1),ge=e(", 200K vCPU"),ye=t("wbr",null,null,-1),we=e("-s"),ve=t("wbr",null,null,-1),ke=e("/mo"),Be=t("td",null,"\u2753",-1),Se=t("td",null,"\u2753",-1),Ce=t("td",null,"\u2753",-1),xe=t("td",null,null,-1),Pe=t("td",null,"Vercel Edge Functions",-1),Ue=t("td",null,"Free",-1),Ge=t("td",null,"$20/mo subscription for 500K",-1),qe={href:"https://vercel.com/pricing",target:"_blank",rel:"noopener noreferrer"},Ne=e("100K req"),Me=t("wbr",null,null,-1),Fe=e("/day"),De=t("td",null,"\u2753",-1),Ie=t("td",null,"\u2753",-1),Ke=t("td",null,"\u2753",-1),Oe=t("td",null,null,-1),Ee=t("tr",null,[t("td",null,"serverless.com"),t("td",null,"Free"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),Te=t("tr",null,[t("td",null,"DigitalOcean Apps"),t("td",null,"$5"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"Not tested")],-1),Ve=t("tr",null,[t("td",null,"Fastly Compute@Edge"),t("td"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),$e=t("h3",{id:"vps",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vps","aria-hidden":"true"},"#"),e(" VPS")],-1),Ae=e("A virtual private server is a virtual machine that you have full control over. You can usually access it via "),Re={href:"https://en.wikipedia.org/wiki/Secure_Shell",target:"_blank",rel:"noopener noreferrer"},We=e("SSH"),He=e(". You can install any software there, and you are responsible for system upgrades and so on."),Le=t("p",null,"On a VPS, you can run bots using both long polling or webhooks.",-1),Ye=e("Check out the "),je=e("tutorial"),ze=e(" on how to host grammY bots on a VPS."),Qe=r('<table><thead><tr><th>Name</th><th>Min. price</th><th>Ping to Bot API</th><th>Cheapest option</th></tr></thead><tbody><tr><td>Contabo</td><td></td><td>15 ms \u{1F1E9}\u{1F1EA} Nuremberg</td><td></td></tr><tr><td>DigitalOcean</td><td>$5</td><td>1-15 ms \u{1F1F3}\u{1F1F1} AMS, 19 ms \u{1F1E9}\u{1F1EA} FRA</td><td>1 vCPU, 1 GB RAM, 25 GB SSD, 1 TB</td></tr><tr><td>Hetzner Cloud</td><td>\u20AC4.15</td><td>~42 ms \u{1F1E9}\u{1F1EA}</td><td>1 vCPU, 2 GB RAM, 20 GB SSD, 20 TB</td></tr><tr><td>IONOS VPS</td><td>\u20AC1 or $2</td><td>15 ms \u{1F1E9}\u{1F1EA} Baden-Baden</td><td>1 vCPU, 0.5 GB RAM, 8 GB SSD</td></tr><tr><td>Scaleway</td><td>\u20AC~7</td><td></td><td>2 cores, 2 GB RAM, 20 GB SSD</td></tr></tbody></table><h2 id="unit-explanations" tabindex="-1"><a class="header-anchor" href="#unit-explanations" aria-hidden="true">#</a> Unit Explanations</h2><h3 id="base-units" tabindex="-1"><a class="header-anchor" href="#base-units" aria-hidden="true">#</a> Base Units</h3><table><thead><tr><th>Unit</th><th>In Words</th><th>Explanation</th></tr></thead><tbody><tr><td>K</td><td>thousand</td><td>1,000 of something.</td></tr><tr><td>M</td><td>million</td><td>1,000,000 of something.</td></tr><tr><td>\u20AC</td><td>Euro</td><td>The currency EUR.</td></tr><tr><td>$</td><td>US-Dollar</td><td>The currency USD.</td></tr><tr><td>req</td><td>request</td><td>Number of HTTP requests.</td></tr><tr><td>vCPU</td><td>virtual CPU</td><td>Computing power of one virtual CPU, a part of a real CPU.</td></tr><tr><td>ms</td><td>millisecond</td><td>0.001 seconds.</td></tr><tr><td>s</td><td>second</td><td>One second (SI unit for time).</td></tr><tr><td>min</td><td>minute</td><td>One minute, 60 seconds.</td></tr><tr><td>h</td><td>hours</td><td>One hour, 60 minutes.</td></tr><tr><td>day</td><td>day</td><td>One day, 24 hours.</td></tr><tr><td>mo</td><td>month</td><td>One month, approximately 30 days.</td></tr><tr><td>GB</td><td>gigabytes</td><td>1,000,000,000 bytes of storage.</td></tr></tbody></table><h3 id="example-unit-combinations" tabindex="-1"><a class="header-anchor" href="#example-unit-combinations" aria-hidden="true">#</a> Example Unit Combinations</h3><table><thead><tr><th>Unit</th><th>Quantity</th><th>In Words</th><th>Explanation</th></tr></thead><tbody><tr><td>$/mo</td><td>cost</td><td>US-Dollars per month</td><td>Monthly cost.</td></tr><tr><td>\u20AC/M req</td><td>cost</td><td>Euros per million requests</td><td>Cost for handling one million request.</td></tr><tr><td>req/min</td><td>throughput</td><td>requests per minute</td><td>Number of requests handled in one minute.</td></tr><tr><td>GB/s</td><td>throughput</td><td>gigabytes per second</td><td>Number of gigabytes transferred in one second.</td></tr><tr><td>GB-s</td><td>memory usage</td><td>gigabyte seconds</td><td>One gigabyte used for one second.</td></tr><tr><td>GB-h</td><td>memory usage</td><td>gigabyte hours</td><td>One gigabyte used for one hour.</td></tr><tr><td>h/mo</td><td>time fraction</td><td>hours per month</td><td>Number of hours in one month.</td></tr><tr><td>K vCPU-s/mo</td><td>processing time fraction</td><td>thousand virtual CPU seconds per month</td><td>Monthly seconds of processing time with one virtual CPU.</td></tr></tbody></table>',6);function Je(Xe,Ze){const s=l("RouterLink"),n=l("ExternalLinkIcon");return h(),a("div",null,[u,c,m,t("p",null,[p,o(s,{to:"/guide/introduction.html#how-to-keep-a-bot-running"},{default:d(()=>[b]),_:1}),f]),g,t("p",null,[y,o(s,{to:"/hosting/vps.html"},{default:d(()=>[w]),_:1}),v]),t("p",null,[k,o(s,{to:"/guide/deployment-types.html"},{default:d(()=>[B]),_:1}),S]),t("table",null,[C,t("tbody",null,[x,t("tr",null,[P,U,G,t("td",null,[t("a",q,[N,M,F,D,I,K,O,E,T,V,$,o(n)])]),A,R,W,H]),t("tr",null,[L,Y,j,t("td",null,[t("a",z,[Q,J,X,Z,tt,o(n)])]),et,ot,nt,st]),t("tr",null,[dt,lt,rt,t("td",null,[t("a",it,[ht,at,_t,ut,ct,mt,pt,o(n)])]),bt,t("td",null,[t("a",ft,[gt,o(n)])]),yt,wt]),t("tr",null,[vt,kt,Bt,t("td",null,[t("a",St,[Ct,xt,Pt,Ut,Gt,o(n)])]),qt,Nt,Mt,Ft]),t("tr",null,[Dt,It,Kt,t("td",null,[t("a",Ot,[Et,Tt,Vt,$t,At,Rt,Wt,o(n)])]),Ht,Lt,Yt,jt]),t("tr",null,[zt,Qt,Jt,t("td",null,[t("a",Xt,[Zt,te,ee,oe,ne,se,de,o(n)])]),le,re,ie,he]),t("tr",null,[ae,_e,ue,t("td",null,[t("a",ce,[me,pe,be,fe,ge,ye,we,ve,ke,o(n)])]),Be,Se,Ce,xe]),t("tr",null,[Pe,Ue,Ge,t("td",null,[t("a",qe,[Ne,Me,Fe,o(n)])]),De,Ie,Ke,Oe]),Ee,Te,Ve])]),$e,t("p",null,[Ae,t("a",Re,[We,o(n)]),He]),Le,t("p",null,[Ye,o(s,{to:"/hosting/vps.html"},{default:d(()=>[je]),_:1}),ze]),Qe])}const eo=i(_,[["render",Je],["__file","comparison.html.vue"]]);export{eo as default};
