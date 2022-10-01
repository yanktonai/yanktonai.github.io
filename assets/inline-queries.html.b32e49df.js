import{_ as i,r as t,o as l,c,a as s,b as e,w as p,d as n,e as r}from"./app.ff0cf306.js";const u={},d=s("h1",{id:"inline-queries",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#inline-queries","aria-hidden":"true"},"#"),n(" Inline Queries")],-1),m=s("p",null,[n("Con las inline queries, los usuarios pueden buscar, navegar y enviar el contenido sugerido por tu bot en cualquier chat, incluso si no es un miembro del mismo. Para ello, inician un mensaje con "),s("code",null,[n("@tu"),s("wbr"),n("_nombre"),s("wbr"),n("_del"),s("wbr"),n("_bot")]),n(" y eligen uno de los resultados.")],-1),_={class:"custom-container tip"},k=s("p",{class:"custom-container-title"},"Habilitar el modo inline",-1),b=n("Por defecto, el soporte para el modo inline est\xE1 desactivado. Debes ponerte en contacto con "),v={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},h=n("@Bot"),g=s("wbr",null,null,-1),q=n("Father"),f=n(" y habilitar el modo inline para tu bot, para empezar a recibir consultas inline."),y=n("Revisa la secci\xF3n del modo inline en la "),x={href:"https://core.telegram.org/bots#inline-mode",target:"_blank",rel:"noopener noreferrer"},w=n("Introducci\xF3n para desarrolladores"),I=n(" escrita por el equipo de Telegram. Otros recursos son su "),j={href:"https://core.telegram.org/bots/inline",target:"_blank",rel:"noopener noreferrer"},T=n("descripci\xF3n detallada"),B=n(" de los bots en l\xEDnea, as\xED como el "),L={href:"https://telegram.org/blog/inline-bots",target:"_blank",rel:"noopener noreferrer"},P=n("post original del blog"),Q=n(" que anuncia la caracter\xEDstica, y la secci\xF3n del modo en l\xEDnea en la "),R={href:"https://core.telegram.org/bots/api#inline-mode",target:"_blank",rel:"noopener noreferrer"},z=n("Referencia de la API de los bots de Telegram"),Y=n(". Merece la pena leerlos todos antes de implementar las inline queries para tu bot."),A=n("Una vez que un usuario desencadena una consulta en l\xEDnea, es decir, inicia un mensaje escribiendo \u201C@tu_nombre_del_bot \u2026\u201D en el campo de entrada de texto, tu bot recibir\xE1 actualizaciones al respecto. grammY tiene un soporte especial para manejar las inline queries a trav\xE9s del m\xE9todo "),C=s("code",null,[n("bot"),s("wbr"),n(".inline"),s("wbr"),n("Query()")],-1),E=n(", como se documenta en la clase "),N=s("code",null,"Composer",-1),V=n(" en la "),F={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#inlineQuery",target:"_blank",rel:"noopener noreferrer"},D=n("Referencia de la API de grammY"),H=n(". Le permite escuchar inline queries espec\xEDficas que coincidan con cadenas o expresiones regulares. Si quieres manejar todas las inline queries gen\xE9ricamente, usa "),M=s("code",null,[n("bot"),s("wbr"),n('.on("inline'),s("wbr"),n('_query")')],-1),O=n("."),S=r(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// La autopublicidad descarada en la documentaci\xF3n de un proyecto</span>
<span class="token comment">// es el mejor tipo de publicidad.</span>
bot<span class="token punctuation">.</span><span class="token function">inlineQuery</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">best bot (framework|library)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerInlineQuery</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token string">&quot;grammy-website&quot;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&quot;grammY&quot;</span><span class="token punctuation">,</span>
        input_message_content<span class="token operator">:</span> <span class="token punctuation">{</span>
          message_text<span class="token operator">:</span>
<span class="token string">&quot;&lt;b&gt;grammY&lt;/b&gt; es la mejor manera de crear tus propios bots de Telegram. \\
\xA1Incluso tienen una bonita p\xE1gina web! \u{1F447}&quot;</span><span class="token punctuation">,</span>
          parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        reply_markup<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InlineKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>
          <span class="token string">&quot;grammY website&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;https://grammy.dev/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">&quot;https://grammy.dev/&quot;</span><span class="token punctuation">,</span>
        description<span class="token operator">:</span> <span class="token string">&quot;El Telegram Bot Framework.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> cache_time<span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// un mes en segundos</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Devuelve una lista de resultados vac\xEDa para otras consultas.</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;inline_query&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">answerInlineQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K=n("Recuerde"),U=n(" que siempre puede especificar m\xE1s opciones al llamar a los m\xE9todos de la API utilizando el objeto de opciones de tipo "),G=s("code",null,"Other",-1),J=n(". Por ejemplo, esto le permite realizar la paginaci\xF3n para las consultas en l\xEDnea a trav\xE9s de un desplazamiento."),W=n("Tenga en cuenta que grammY puede autocompletar todos los campos de la estructura anterior por usted. Adem\xE1s, aseg\xFArate de revisar las especificaciones exactas para los resultados en l\xEDnea en la "),X={href:"https://core.telegram.org/bots/api#inlinequeryresult",target:"_blank",rel:"noopener noreferrer"},Z=n("Referencia de la API de Telegram Bot"),$=n(".");function nn(sn,en){const a=t("ExternalLinkIcon"),o=t("RouterLink");return l(),c("div",null,[d,m,s("div",_,[k,s("p",null,[b,s("a",v,[h,g,q,e(a)]),f])]),s("blockquote",null,[s("p",null,[y,s("a",x,[w,e(a)]),I,s("a",j,[T,e(a)]),B,s("a",L,[P,e(a)]),Q,s("a",R,[z,e(a)]),Y])]),s("p",null,[A,C,E,N,V,s("a",F,[D,e(a)]),H,M,O]),S,s("blockquote",null,[s("p",null,[e(o,{to:"/es/guide/basics.html#sending-messages"},{default:p(()=>[K]),_:1}),U,G,J])]),s("p",null,[W,s("a",X,[Z,e(a)]),$])])}const tn=i(u,[["render",nn],["__file","inline-queries.html.vue"]]);export{tn as default};
