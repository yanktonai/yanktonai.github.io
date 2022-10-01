import{_ as c,r as p,o as l,c as u,a as s,b as a,w as o,e as i,d as n}from"./app.81c9d145.js";const r={},d=i('<h1 id="games" tabindex="-1"><a class="header-anchor" href="#games" aria-hidden="true">#</a> Games</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Telegram Games is a very interesting feature and it is great fun to play with. What can you do with it? The answer is anything, any HTML5 game that you have developed you can provide to users on Telegram with the help of this feature. (Yes, this means that you will have to develop a real website-based game that is publicly accessible on the internet before you can integrate it into your Telegram bot.)</p><h2 id="setting-up-a-game-with-your-bot-via-botfather" tabindex="-1"><a class="header-anchor" href="#setting-up-a-game-with-your-bot-via-botfather" aria-hidden="true">#</a> Setting Up a Game With Your Bot via @BotFather</h2>',4),h=n("For simplicity, let\u2019s assume that by now you must have set up a bot and a game associated with your bot on "),m={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},k=n("@Bot"),b=s("wbr",null,null,-1),g=n("Father"),v=n(". If you haven\u2019t already, check out this "),_={href:"https://core.telegram.org/bots/games",target:"_blank",rel:"noopener noreferrer"},y=n("article"),w=n(" by the Telegram team."),f=s("blockquote",null,[s("p",null,"Note: We will only learn the bot side development. Developing the game is entirely up to the developer. All we need here is a link of the HTML5 game hosted on the internet.")],-1),x=s("h2",{id:"sending-the-game-via-a-bot",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sending-the-game-via-a-bot","aria-hidden":"true"},"#"),n(" Sending the Game via a Bot")],-1),q=n("We can send the game in grammY via the "),G=s("code",null,[n("reply"),s("wbr"),n("With"),s("wbr"),n("Game")],-1),B=n(" method which takes the name of the game you created with BotFather as argument. Alternatively, we can also use the "),W=s("code",null,[n("api"),s("wbr"),n(".send"),s("wbr"),n("Game")],-1),T=n(" method (grammY provides all the official "),F={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},L=n("Bot API"),I=n(" methods). An advantage of using the "),S=s("code",null,[n("api"),s("wbr"),n(".send"),s("wbr"),n("Game")],-1),Y=n(" method is you can specify the "),A=s("code",null,[n("chat"),s("wbr"),n(".id")],-1),C=n(" of a specific user to send it to."),N=i(`<ol><li><p>Sending Game via <code>reply<wbr>With<wbr>Game</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// We will be using the start command to invoke the game reply method.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Pass the name of the game you created in BotFather, for example &quot;my_game&quot;.</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Sending a Game via <code>api<wbr>.send<wbr>Game</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// You can get the chat identifier of the user to send your game to with \`ctx.from.id\`.</span>
  <span class="token comment">// which gives you the chat identifier of the user who invoked the start command.</span>
  <span class="token keyword">const</span> chatId <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendGame</span><span class="token punctuation">(</span>chatid<span class="token punctuation">,</span> <span class="token string">&quot;my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),V=n("Remember"),O=n(" that you can specify further options when sending messages by using the options object of type "),P=s("code",null,"Other",-1),R=n("."),E=n("You can also specify a custom "),H=n("inline keyboard"),Q=n(" for the game to show buttons. By default, it will be sent with a button with name as "),D=s("code",null,[n("Play my"),s("wbr"),n("_game")],-1),M=n(", where "),j=s("em",null,"my_game",-1),K=n(" is the name of your game."),U=i(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Define a new inline keyboard. You can write any text to be shown</span>
<span class="token comment">// on the button, but make sure that the first button should always</span>
<span class="token comment">// be the play button!</span>

<span class="token keyword">const</span> keyboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InlineKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">game</span><span class="token punctuation">(</span><span class="token string">&quot;Start my_game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Notice that we have used game() unlike a normal inline keyboard</span>
<span class="token comment">// where we use url() or text()</span>

<span class="token comment">// Via the \`replyWithGame\` method</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> reply_markup<span class="token operator">:</span> keyboard <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Via the \`api.sendGame\` method</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendGame</span><span class="token punctuation">(</span>chatId<span class="token punctuation">,</span> <span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> reply_markup<span class="token operator">:</span> keyboard <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listening-to-the-callback-of-our-game-button" tabindex="-1"><a class="header-anchor" href="#listening-to-the-callback-of-our-game-button" aria-hidden="true">#</a> Listening to the Callback of Our Game Button</h2><p>For providing logic to the button when it is pressed, and to redirect our users to our game and many more, we listen to the event <code>callback<wbr>_query:<wbr>game<wbr>_short<wbr>_name</code> which tells us that a game button has been pressed by the user. All we need to do is:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Pass your game url here that should be already hosted on the web.</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;callback_query:game_short_name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerCallbackQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;your_game_url&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="our-final-code-should-look-something-like-this" tabindex="-1"><a class="header-anchor" href="#our-final-code-should-look-something-like-this" aria-hidden="true">#</a> Our Final Code Should Look Something Like This</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;callback_query:game_short_name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">answerCallbackQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;your_game_url&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithGame</span><span class="token punctuation">(</span><span class="token string">&quot;my_game&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    reply_markup<span class="token operator">:</span> keyboard<span class="token punctuation">,</span>
    <span class="token comment">// Or you can use the api method here, according to your needs.</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),z=n("Remember to add proper "),J=n("error handling"),X=n(" to your bot before going live."),Z=s("p",null,"We may extend this article in the future by further advanced sections and FAQ\u2019s, but this is already all you need to start your game in Telegram. Have fun playing! \u{1F47E}",-1);function $(nn,sn){const t=p("ExternalLinkIcon"),e=p("RouterLink");return l(),u("div",null,[d,s("p",null,[h,s("a",m,[k,b,g,a(t)]),v,s("a",_,[y,a(t)]),w]),f,x,s("p",null,[q,G,B,W,T,s("a",F,[L,a(t)]),I,S,Y,A,C]),N,s("blockquote",null,[s("p",null,[a(e,{to:"/guide/basics.html#sending-messages"},{default:o(()=>[V]),_:1}),O,P,R])]),s("p",null,[E,a(e,{to:"/plugins/keyboard.html#inline-keyboards"},{default:o(()=>[H]),_:1}),Q,D,M,j,K]),U,s("blockquote",null,[s("p",null,[z,a(e,{to:"/guide/errors.html"},{default:o(()=>[J]),_:1}),X])]),Z])}const tn=c(r,[["render",$],["__file","games.html.vue"]]);export{tn as default};
