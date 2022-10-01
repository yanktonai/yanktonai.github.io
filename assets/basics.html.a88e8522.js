import{_ as p,r as c,o as l,c as r,a as n,b as e,w as i,e as t,d as s}from"./app.34388d32.js";const u={},d=t(`<h1 id="sending-and-receiving-messages" tabindex="-1"><a class="header-anchor" href="#sending-and-receiving-messages" aria-hidden="true">#</a> Sending and Receiving Messages</h1><p>As soon as you start your bot with <code>bot<wbr>.start()</code>, grammY will supply your listeners with the messages that users send to your bot. grammY also provides methods to easily reply to these messages.</p><h2 id="receiving-messages" tabindex="-1"><a class="header-anchor" href="#receiving-messages" aria-hidden="true">#</a> Receiving Messages</h2><p>The easiest way to listen for messages is via</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">;</span> <span class="token comment">// the message object</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, there are a number of other options, too.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Handles commands, such as /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Matches the message text against a string or a regular expression.</span>
bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">echo *(.+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h=s("You can use auto-complete in your code editor to see all available options, or check out "),m={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},_=s("all methods"),k=s(" of the "),g=n("code",null,"Composer",-1),b=s(" class."),v=s("Read more"),y=s(" about filtering for specific message types with "),f=n("code",null,[s("bot"),n("wbr"),s(".on()")],-1),w=s("."),x=n("h2",{id:"sending-messages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sending-messages","aria-hidden":"true"},"#"),s(" Sending Messages")],-1),q=s("All methods that bots can use ("),M={href:"https://core.telegram.org/bots/api#available-methods",target:"_blank",rel:"noopener noreferrer"},T=s("important list"),H=s(") are available on the "),A=n("code",null,[s("bot"),n("wbr"),s(".api")],-1),L=s(" object."),R=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Send a text message to user 12345.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Optionally, you can pass an options object.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token comment">/* more options */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get information about the bot itself.</span>
<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">getMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// etc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=s("Every method takes an optional options object of type "),Y=n("code",null,"Other",-1),j=s(", which allows you to set further options for your API calls. These options objects correspond exactly with the options that you can find in list of methods linked above. You can also use auto-complete in your code editor to see all available options, or check out "),I={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api",target:"_blank",rel:"noopener noreferrer"},N=s("all methods"),V=s(" of the "),C=n("code",null,"Api",-1),W=s(" class. The rest of this page shows some examples for this."),B=s("Also, check out the "),E=s("next section"),F=s(" to learn how the context object of a listener makes sending messages a breeze!"),O=t(`<h2 id="sending-messages-with-reply" tabindex="-1"><a class="header-anchor" href="#sending-messages-with-reply" aria-hidden="true">#</a> Sending Messages With Reply</h2><p>You can use the Telegram reply-to feature by specifying the message identifier to reply to using <code>reply<wbr>_to<wbr>_message<wbr>_id</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`reply\` is an alias for \`sendMessage\` in the same chat (see next section).</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \`reply_to_message_id\` specifies the actual reply feature.</span>
    reply_to_message_id<span class="token operator">:</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>message_id<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),P=t("Note that only sending a message via <code>ctx<wbr>.reply</code> does <strong>NOT</strong> mean you are automatically replying to anything. Instead, you should specify <code>reply<wbr>_to<wbr>_message<wbr>_id</code> for this. The function <code>ctx<wbr>.reply</code> is just an alias for <code>ctx<wbr>.api<wbr>.send<wbr>Message</code>, see the ",11),z=s("next section"),G=s("."),U=n("h2",{id:"sending-message-with-formatting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sending-message-with-formatting","aria-hidden":"true"},"#"),s(" Sending Message With Formatting")],-1),D=s("Check out the "),J={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},K=s("section about formatting options"),Q=s(" in the Telegram Bot API Reference written by the Telegram team."),X=s("You can send messages with "),Z=n("strong",null,"bold",-1),$=s(" or "),ss=n("em",null,"italic",-1),ns=s(" text, use URLs, and more. There are two ways to do this, as described in the "),es={href:"https://core.telegram.org/bots/api#formatting-options",target:"_blank",rel:"noopener noreferrer"},as=s("section about formatting options"),ts=s(", namely Markdown and HTML."),os=n("h3",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),s(" Markdown")],-1),is=s("Also see "),cs={href:"https://core.telegram.org/bots/api#markdownv2-style",target:"_blank",rel:"noopener noreferrer"},ps=s("https://"),ls=n("wbr",null,null,-1),rs=s("core"),us=n("wbr",null,null,-1),ds=s(".telegram"),hs=n("wbr",null,null,-1),ms=s(".org"),_s=n("wbr",null,null,-1),ks=s("/bots"),gs=n("wbr",null,null,-1),bs=s("/api"),vs=n("wbr",null,null,-1),ys=s("#markdownv2"),fs=n("wbr",null,null,-1),ws=s("-style"),xs=t(`<p>Send your message with markdown in the text, and specify <code>parse<wbr>_mode:<wbr> &quot;MarkdownV2&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&quot;*Hi\\\\!* _Welcome_ to [grammY](https://grammy.dev)\\\\.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;MarkdownV2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3>`,3),qs=s("Also see "),Ms={href:"https://core.telegram.org/bots/api#html-style",target:"_blank",rel:"noopener noreferrer"},Ts=s("https://"),Hs=n("wbr",null,null,-1),As=s("core"),Ls=n("wbr",null,null,-1),Rs=s(".telegram"),Ss=n("wbr",null,null,-1),Ys=s(".org"),js=n("wbr",null,null,-1),Is=s("/bots"),Ns=n("wbr",null,null,-1),Vs=s("/api"),Cs=n("wbr",null,null,-1),Ws=s("#html"),Bs=n("wbr",null,null,-1),Es=s("-style"),Fs=t(`<p>Send your message with HTML elements in the text, and specify <code>parse<wbr>_mode:<wbr> &quot;HTML&quot;</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;b&gt;Hi!&lt;/b&gt; &lt;i&gt;Welcome&lt;/i&gt; to &lt;a href=&quot;https://grammy.dev&quot;&gt;grammY&lt;/a&gt;.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sending-files" tabindex="-1"><a class="header-anchor" href="#sending-files" aria-hidden="true">#</a> Sending Files</h2>`,3),Os=s("File handling is explained in greater depth in a "),Ps=s("later section"),zs=s("."),Gs=n("h2",{id:"force-reply",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#force-reply","aria-hidden":"true"},"#"),s(" Force Reply")],-1),Us=s("This can be useful if your bot is running in "),Ds={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},Js=s("privacy mode"),Ks=s(" in group chats."),Qs=s("When you send a message, you can make the user\u2019s Telegram client automatically specify the message as reply. That means that the user will reply to your bot\u2019s message automatically (unless they remove the reply manually). As a result, your bot will receive the user\u2019s message even when running in "),Xs={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},Zs=s("privacy mode"),$s=s(" in group chats."),sn=t(`<p>You can force a reply like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Hi! I can only read messages that explicitly reply to me!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// Make Telegram clients automatically show a reply interface to the user.</span>
    reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function nn(en,an){const a=c("ExternalLinkIcon"),o=c("RouterLink");return l(),r("div",null,[d,n("p",null,[h,n("a",m,[_,e(a)]),k,g,b]),n("blockquote",null,[n("p",null,[e(o,{to:"/guide/filter-queries.html"},{default:i(()=>[v]),_:1}),y,f,w])]),x,n("p",null,[q,n("strong",null,[n("a",M,[T,e(a)])]),H,A,L]),R,n("p",null,[S,Y,j,n("a",I,[N,e(a)]),V,C,W]),n("p",null,[B,e(o,{to:"/guide/context.html"},{default:i(()=>[E]),_:1}),F]),O,n("blockquote",null,[n("p",null,[P,e(o,{to:"/guide/context.html#available-actions"},{default:i(()=>[z]),_:1}),G])]),U,n("blockquote",null,[n("p",null,[D,n("a",J,[K,e(a)]),Q])]),n("p",null,[X,Z,$,ss,ns,n("a",es,[as,e(a)]),ts]),os,n("blockquote",null,[n("p",null,[is,n("a",cs,[ps,ls,rs,us,ds,hs,ms,_s,ks,gs,bs,vs,ys,fs,ws,e(a)])])]),xs,n("blockquote",null,[n("p",null,[qs,n("a",Ms,[Ts,Hs,As,Ls,Rs,Ss,Ys,js,Is,Ns,Vs,Cs,Ws,Bs,Es,e(a)])])]),Fs,n("p",null,[Os,e(o,{to:"/guide/files.html#sending-files"},{default:i(()=>[Ps]),_:1}),zs]),Gs,n("blockquote",null,[n("p",null,[Us,n("a",Ds,[Js,e(a)]),Ks])]),n("p",null,[Qs,n("a",Xs,[Zs,e(a)]),$s]),sn])}const on=p(u,[["render",nn],["__file","basics.html.vue"]]);export{on as default};
