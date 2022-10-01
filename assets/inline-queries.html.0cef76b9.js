import{_ as i,r as a,o as c,c as p,a as s,b as e,w as r,d as n,e as l}from"./app.ff0cf306.js";const u={},d=s("h1",{id:"inline-queries",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#inline-queries","aria-hidden":"true"},"#"),n(" Inline Queries")],-1),m=s("p",null,[n("With inline queries, users can search for, browse, and send content suggested by your bot in any chat, even if it is not a member there. To do this, they start a message with "),s("code",null,[n("@your"),s("wbr"),n("_bot"),s("wbr"),n("_name")]),n(" and choose one of the results.")],-1),h={class:"custom-container tip"},_=s("p",{class:"custom-container-title"},"Enable Inline Mode",-1),k=n("By default, support for inline mode is disabled. You must contact "),b={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},g=n("@Bot"),v=s("wbr",null,null,-1),f=n("Father"),y=n(" and enable inline mode for your bot, to start receiving inline queries."),q=n("Revisit the Inline mode section in the "),w={href:"https://core.telegram.org/bots#inline-mode",target:"_blank",rel:"noopener noreferrer"},x=n("Introduction for Developers"),I=n(" written by the Telegram team. Further resources are their "),T={href:"https://core.telegram.org/bots/inline",target:"_blank",rel:"noopener noreferrer"},B=n("detailed description"),R=n(" of inline bots, as well as the "),Q={href:"https://telegram.org/blog/inline-bots",target:"_blank",rel:"noopener noreferrer"},Y=n("original blog post"),A=n(" announcing the feature, and the Inline mode section in the "),F={href:"https://core.telegram.org/bots/api#inline-mode",target:"_blank",rel:"noopener noreferrer"},L=n("Telegram Bot API Reference"),N=n(". They are all worth a read before implementing inline queries for your bot."),C=n("Once a user triggers an inline query, i.e. starts a message by typing \u201C@your_bot_name \u2026\u201D in the text input field, your bot will receive updates about this. grammY has special support for handling inline queries via the "),E=s("code",null,[n("bot"),s("wbr"),n(".inline"),s("wbr"),n("Query()")],-1),P=n(" method, as documented on the "),V=s("code",null,"Composer",-1),j=n(" class in the "),M={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#inlineQuery",target:"_blank",rel:"noopener noreferrer"},O=n("grammY API Reference"),S=n(". It allows you to listen for specific inline queries that match strings or regular expressions. If you want to handle all inline queries generically, use "),D=s("code",null,[n("bot"),s("wbr"),n('.on("inline'),s("wbr"),n('_query")')],-1),H=n("."),K=l(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Shameless self-advertising in one project&#39;s documentation</span>
<span class="token comment">// is the best kind of advertising.</span>
bot<span class="token punctuation">.</span><span class="token function">inlineQuery</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">best bot (framework|library)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerInlineQuery</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token string">&quot;grammy-website&quot;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&quot;grammY&quot;</span><span class="token punctuation">,</span>
        input_message_content<span class="token operator">:</span> <span class="token punctuation">{</span>
          message_text<span class="token operator">:</span>
<span class="token string">&quot;&lt;b&gt;grammY&lt;/b&gt; is the best way to create your own Telegram bots. \\
They even have a pretty website! \u{1F447}&quot;</span><span class="token punctuation">,</span>
          parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        reply_markup<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InlineKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>
          <span class="token string">&quot;grammY website&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;https://grammy.dev/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">&quot;https://grammy.dev/&quot;</span><span class="token punctuation">,</span>
        description<span class="token operator">:</span> <span class="token string">&quot;The Telegram Bot Framework.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> cache_time<span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// one month in seconds</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Return empty result list for other queries.</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;inline_query&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">answerInlineQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W=n("Remember"),z=n(" that you can always specify further options when calling API methods by using the options object of type "),G=s("code",null,"Other",-1),J=n(". For example, this allows you to perform pagination for inline queries via an offset."),U=n("Note that grammY can auto-complete all of the fields in the above structure for you. Also, be sure to check out the exact specifications for inline results in the "),X={href:"https://core.telegram.org/bots/api#inlinequeryresult",target:"_blank",rel:"noopener noreferrer"},Z=n("Telegram Bot API Reference"),$=n(".");function nn(sn,en){const t=a("ExternalLinkIcon"),o=a("RouterLink");return c(),p("div",null,[d,m,s("div",h,[_,s("p",null,[k,s("a",b,[g,v,f,e(t)]),y])]),s("blockquote",null,[s("p",null,[q,s("a",w,[x,e(t)]),I,s("a",T,[B,e(t)]),R,s("a",Q,[Y,e(t)]),A,s("a",F,[L,e(t)]),N])]),s("p",null,[C,E,P,V,j,s("a",M,[O,e(t)]),S,D,H]),K,s("blockquote",null,[s("p",null,[e(o,{to:"/guide/basics.html#sending-messages"},{default:r(()=>[W]),_:1}),z,G,J])]),s("p",null,[U,s("a",X,[Z,e(t)]),$])])}const an=i(u,[["render",nn],["__file","inline-queries.html.vue"]]);export{an as default};
