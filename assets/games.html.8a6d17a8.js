import{_ as u,r as c,o as i,c as l,a,b as s,w as p,e as t,d as n}from"./app.c0ce12a9.js";const r={},d=t('<h1 id="juegos" tabindex="-1"><a class="header-anchor" href="#juegos" aria-hidden="true">#</a> Juegos</h1><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducci\xF3n</h2><p>Telegram Games es una funci\xF3n muy interesante y muy divertida para jugar. \xBFQu\xE9 puedes hacer con ella? La respuesta es cualquier cosa, cualquier juego HTML5 que hayas desarrollado puedes ofrecerlo a los usuarios en Telegram con la ayuda de esta funci\xF3n. (S\xED, esto significa que tendr\xE1s que desarrollar un juego real basado en un sitio web que sea accesible p\xFAblicamente en Internet antes de poder integrarlo en tu bot de Telegram).</p><h2 id="configurar-un-juego-con-tu-bot-via-botfather" tabindex="-1"><a class="header-anchor" href="#configurar-un-juego-con-tu-bot-via-botfather" aria-hidden="true">#</a> Configurar un juego con tu bot v\xEDa @BotFather</h2>',4),m=n("Para simplificar, vamos a suponer que a estas alturas debes haber configurado un bot y un juego asociado a tu bot en "),k={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},b=n("@Bot"),v=a("wbr",null,null,-1),h=n("Father"),g=n(". Si a\xFAn no lo has hecho, consulta este "),_={href:"https://core.telegram.org/bots/games",target:"_blank",rel:"noopener noreferrer"},y=n("art\xEDculo"),q=n(" del equipo de Telegram."),f=a("blockquote",null,[a("p",null,"Nota: S\xF3lo aprenderemos el desarrollo del lado del bot. El desarrollo del juego depende enteramente del desarrollador. Todo lo que necesitamos aqu\xED es un enlace del juego HTML5 alojado en internet.")],-1),w=a("h2",{id:"enviando-el-juego-a-traves-de-un-bot",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#enviando-el-juego-a-traves-de-un-bot","aria-hidden":"true"},"#"),n(" Enviando el juego a trav\xE9s de un bot")],-1),j=n("Podemos enviar el juego en grammY a trav\xE9s del m\xE9todo "),x=a("code",null,[n("reply"),a("wbr"),n("With"),a("wbr"),n("Game")],-1),G=n(" que toma como argumento el nombre del juego creado con BotFather. Alternativamente, tambi\xE9n podemos utilizar el m\xE9todo "),P=a("code",null,[n("api"),a("wbr"),n(".send"),a("wbr"),n("Game")],-1),T=n(" (grammY proporciona todos los m\xE9todos oficiales de la "),B={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},E=n("API del Bot"),I=n("). Una ventaja de usar el m\xE9todo "),z=a("code",null,[n("api"),a("wbr"),n(".send"),a("wbr"),n("Game")],-1),C=n(" es que puedes especificar el "),L=a("code",null,[n("chat"),a("wbr"),n(".id")],-1),N=n(" de un usuario espec\xEDfico al que enviarlo."),W=t(`<ol><li><p>Env\xEDo del juego a trav\xE9s de <code>reply<wbr>With<wbr>Game</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Usaremos el comando start para invocar el m\xE9todo de respuesta del juego.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Pasa el nombre del juego que has creado en BotFather, por ejemplo &quot;my_game&quot;.</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Env\xEDo de un juego por medio de <code>api<wbr>.send<wbr>Game</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Puedes obtener el identificador de chat del usuario al que enviar tu juego con \`ctx.from.id\`.</span>
  <span class="token comment">// que te da el identificador de chat del usuario que invoc\xF3 el comando de inicio.</span>
  <span class="token keyword">const</span> chatId <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendGame</span><span class="token punctuation">(</span>chatid<span class="token punctuation">,</span> <span class="token string">&quot;my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),A=n("Recuerde"),F=n(" que puede especificar m\xE1s opciones al enviar mensajes utilizando el objeto de opciones de tipo "),S=a("code",null,"Other",-1),R=n("."),V=t(`<p>Tambi\xE9n puedes especificar un [inline keyboard] personalizado (/plugins/keyboard.md#inline-keyboards) para que el juego muestre los botones. Por defecto, se enviar\xE1 con un bot\xF3n con nombre como <code>Play my<wbr>_game</code>, donde <em>my_game</em> es el nombre de su juego.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Definir un nuevo teclado en l\xEDnea. Puedes escribir cualquier texto que se muestre</span>
<span class="token comment">// en el bot\xF3n, \xA1pero aseg\xFArese de que el primer bot\xF3n debe ser siempre</span>
<span class="token comment">// sea el bot\xF3n de jugar!</span>

<span class="token keyword">const</span> keyboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InlineKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">game</span><span class="token punctuation">(</span><span class="token string">&quot;Start my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Observa que hemos utilizado game() a diferencia de un teclado en l\xEDnea normal</span>
<span class="token comment">// donde usamos url() o text()</span>

<span class="token comment">// A trav\xE9s del m\xE9todo \`replyWithGame\`</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> reply_markup<span class="token operator">:</span> keyboard <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// A trav\xE9s del m\xE9todo \`api.sendGame\`</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendGame</span><span class="token punctuation">(</span>chatId<span class="token punctuation">,</span> <span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> reply_markup<span class="token operator">:</span> keyboard <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="escuchando-el-callback-de-nuestro-boton-de-juego" tabindex="-1"><a class="header-anchor" href="#escuchando-el-callback-de-nuestro-boton-de-juego" aria-hidden="true">#</a> Escuchando el Callback de nuestro bot\xF3n de juego</h2><p>Para dotar de l\xF3gica al bot\xF3n cuando es pulsado, y para redirigir a nuestros usuarios a nuestro juego y muchas cosas m\xE1s, escuchamos el evento <code>callback<wbr>_query:<wbr>game<wbr>_short<wbr>_name</code> que nos indica que un bot\xF3n de juego ha sido pulsado por el usuario. Todo lo que tenemos que hacer es</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Pasa aqu\xED la url de tu juego que debe estar ya alojado en la web.</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;callback_query:game_short_name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerCallbackQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;your_game_url&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="nuestro-codigo-final-deberia-ser-algo-asi" tabindex="-1"><a class="header-anchor" href="#nuestro-codigo-final-deberia-ser-algo-asi" aria-hidden="true">#</a> Nuestro c\xF3digo final deber\xEDa ser algo as\xED</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;callback_query:game_short_name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerCallbackQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;your_game_url&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    reply_markup<span class="token operator">:</span> keyboard<span class="token punctuation">,</span>
    <span class="token comment">// O puede utilizar el m\xE9todo api aqu\xED, seg\xFAn sus necesidades.</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),D=n("Recuerda a\xF1adir un adecuado "),O=n("manejo de errores"),Q=n(" a tu bot antes de ponerlo en marcha."),H=a("p",null,"Puede que ampliemos este art\xEDculo en el futuro con m\xE1s secciones avanzadas y preguntas frecuentes, pero esto es ya todo lo que necesitas para empezar tu juego en Telegram. \xA1Divi\xE9rtete jugando! \u{1F47E}",-1);function M(U,Y){const e=c("ExternalLinkIcon"),o=c("RouterLink");return i(),l("div",null,[d,a("p",null,[m,a("a",k,[b,v,h,s(e)]),g,a("a",_,[y,s(e)]),q]),f,w,a("p",null,[j,x,G,P,T,a("a",B,[E,s(e)]),I,z,C,L,N]),W,a("blockquote",null,[a("p",null,[s(o,{to:"/es/guide/basics.html#env%C3%ADo-de-mensajes"},{default:p(()=>[A]),_:1}),F,S,R])]),V,a("blockquote",null,[a("p",null,[D,s(o,{to:"/es/guide/errors.html"},{default:p(()=>[O]),_:1}),Q])]),H])}const K=u(r,[["render",M],["__file","games.html.vue"]]);export{K as default};
