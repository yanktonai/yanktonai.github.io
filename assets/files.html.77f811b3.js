import{_ as r,r as c,o as u,c as d,a as n,b as e,w as a,e as t,d as s}from"./app.1137d7ac.js";const h={},k=t('<h1 id="file-handling" tabindex="-1"><a class="header-anchor" href="#file-handling" aria-hidden="true">#</a> File Handling</h1><p>Telegram bots can not only send and receive text messages, but also many other kinds of messages, such as photos and videos. This involves handling the files that are attached to the messages.</p><h2 id="how-files-work-for-telegram-bots" tabindex="-1"><a class="header-anchor" href="#how-files-work-for-telegram-bots" aria-hidden="true">#</a> How Files Work for Telegram Bots</h2><blockquote><p>This section explains how files work for Telegram bots. If you want to know how you can work with files in grammY scroll down for <a href="#receiving-files">downloading</a> and <a href="#sending-files">uploading</a> files.</p></blockquote><p>Files are stored separately from messages. A file on the Telegram servers is identified by a <code>file<wbr>_id</code>, which is just a long string of characters.</p><p><code>AgADBAADZRAx<wbr>GyhM3FKSE4q<wbr>Ka<wbr>-RODckQHxsoABDHe0BDC1GzpGACAAEC</code> is an example of a <code>file<wbr>_id</code>.</p>',6),m=s("Whenever your bot "),f=n("strong",null,"receives",-1),b=s(" a message with a file, it will in fact not directly receive the complete file data, but only the "),g=n("code",null,[s("file"),n("wbr"),s("_id")],-1),w=s(" instead. If your bot actually wants to download the file, then it can do so by calling the "),_=n("code",null,[s("get"),n("wbr"),s("File")],-1),y=s(" method ("),v={href:"https://core.telegram.org/bots/api#getfile",target:"_blank",rel:"noopener noreferrer"},x=s("Telegram Bot API reference"),I=s("). This method enables you to download the file by constructing a special, temporary, URL. Note that this URL is only guaranteed to be valid for 60 minutes, after which it may expire. In this case, you can simply call "),F=n("code",null,[s("get"),n("wbr"),s("File")],-1),A=s(" again."),B=n("p",null,[s("Whenever your bot "),n("strong",null,"sends"),s(" a message with a file, it will receive information about the sent message, including the "),n("code",null,[s("file"),n("wbr"),s("_id")]),s(" of the sent file. This means that all files the bot sees, both via sending or receiving, will make a "),n("code",null,[s("file"),n("wbr"),s("_id")]),s(" available to the bot.")],-1),T=t('When a bot sends a message, it can <strong>specify a <code>file<wbr>_id</code> that it has seen before</strong>. This will allow it to send the identified file, without needing to upload the data for it. (To see how to upload your own files, <a href="#sending-files">scroll down</a>.) You can reuse the same <code>file<wbr>_id</code> as often as you want, so you could send the same file to five different chats, using the same <code>file<wbr>_id</code>. However, you must make sure to use the correct method\u2014for example, you cannot use a <code>file<wbr>_id</code> that identifies a photo when calling ',11),q={href:"https://core.telegram.org/bots/api#sendvideo",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,[s("send"),n("wbr"),s("Video")],-1),R=s("."),C=t(`<p>Every bot has its own set of <code>file<wbr>_id</code>s for the files that it can access. You cannot reliably use a <code>file<wbr>_id</code> from your friend\u2019s bot, to access a file with <em>your</em> bot. Each bot will use different identifiers for the same file. This implies that you cannot simply guess a <code>file<wbr>_id</code> and access some random person\u2019s file, because Telegram keeps track of which <code>file<wbr>_id</code>s are valid for your bot.</p><div class="custom-container warning"><p class="custom-container-title">Using Foreign file_ids</p><p>Note that in some cases it <em>is</em> technically possible that a <code>file<wbr>_id</code> from another bot seems to work correctly. <strong>However</strong>, using a foreign <code>file<wbr>_id</code> like this is dangerous as it can stop working at any time, without warning. So, always ensure that any <code>file<wbr>_id</code>s you use were originally for your bot.</p></div><p>On the other hand, it is possible that a bot eventually sees the same file identified by different <code>file<wbr>_id</code>s. This means that you cannot rely on comparing <code>file<wbr>_id</code>s to check if two files are the same. If you need to identify the same file over time (or across multiple bots), you should use the <code>file<wbr>_unique<wbr>_id</code> value that your bot receives along with every <code>file<wbr>_id</code>. The <code>file<wbr>_unique<wbr>_id</code> cannot be used to download files, but will be the same for any given file, across every bot.</p><h2 id="receiving-files" tabindex="-1"><a class="header-anchor" href="#receiving-files" aria-hidden="true">#</a> Receiving Files</h2><p>You can handle files just like any other message. For example, if you want to listen for voice messages, you can do this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message:voice&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> voice <span class="token operator">=</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>voice<span class="token punctuation">;</span>

  <span class="token keyword">const</span> duration <span class="token operator">=</span> voice<span class="token punctuation">.</span>duration<span class="token punctuation">;</span> <span class="token comment">// in seconds</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Your voice message is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>duration<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> seconds long.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> fileId <span class="token operator">=</span> voice<span class="token punctuation">.</span>file_id<span class="token punctuation">;</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;The file identifier of your voice message is: &quot;</span> <span class="token operator">+</span> fileId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">getFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// valid for at least 1 hour</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> file<span class="token punctuation">.</span>file_path<span class="token punctuation">;</span> <span class="token comment">// file path on Bot API server</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Download your own file again: &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S={class:"custom-container tip"},P=n("p",{class:"custom-container-title"},"Passing a Custom file_id to getFile",-1),U=s("On the context object, "),D=n("code",null,[s("get"),n("wbr"),s("File")],-1),L=s(" is a "),j=s("shortcut"),W=s(", and will fetch information for a file on the current message. If you want to get a different file while handling a message, use "),N=n("code",null,[s("ctx"),n("wbr"),s(".api"),n("wbr"),s(".get"),n("wbr"),s("File(file"),n("wbr"),s("_id)")],-1),V=s(" instead."),H=s("Check out the "),z=n("code",null,[s(":"),n("wbr"),s("media")],-1),E=s(" and "),G=n("code",null,[s(":"),n("wbr"),s("file")],-1),O=s(" shortcuts"),M=s(" for filter queries if you want to receive any kind of file."),K=t("<p>Once you have called <code>get<wbr>File</code>, you can use the returned <code>file<wbr>_path</code> to download the file using this URL <code>https://<wbr>api<wbr>.telegram<wbr>.org<wbr>/file<wbr>/bot&lt;token&gt;<wbr>/&lt;file<wbr>_path&gt;</code>, where <code>&lt;token&gt;</code> must be replaced by your bot token.</p>",1),Q={class:"custom-container tip"},Z=n("p",{class:"custom-container-title"},"Files Plugin",-1),$=s("grammY does not come bundled with its own file downloader, but you can install the "),J=s("official files plugin"),X=s(". This allows you to download files via "),nn=n("code",null,[s("await file"),n("wbr"),s(".download()")],-1),sn=s(", and to obtain a constructed download URL for them via "),en=n("code",null,[s("file"),n("wbr"),s(".get"),n("wbr"),s("Url()")],-1),an=s("."),tn=n("h2",{id:"sending-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sending-files","aria-hidden":"true"},"#"),s(" Sending Files")],-1),on=s("Telegram bots have "),ln={href:"https://core.telegram.org/bots/api#sending-files",target:"_blank",rel:"noopener noreferrer"},cn=s("three ways"),pn=s(" to send files:"),rn=t(`<ol><li>Via <code>file<wbr>_id</code>, i.e. by sending a file by an identifier that is already known to the bot.</li><li>Via URL, i.e. by passing a public file URL, which Telegram downloads and sends for you.</li><li>Via uploading your own file.</li></ol><p>In all cases, the methods you need to call are named the same. Depending on which of the three ways you pick to send your file, the parameters to these functions will vary. For example, to send a photo, you can use <code>ctx<wbr>.reply<wbr>With<wbr>Photo</code> (or <code>send<wbr>Photo</code> if you use <code>ctx<wbr>.api</code> or <code>bot<wbr>.api</code>).</p><p>You can send other types of files by simply renaming the method and changing the type of the data you pass to it. In order to send a video, you can use <code>ctx<wbr>.reply<wbr>With<wbr>Video</code>. It\u2019s the same case for a document: <code>ctx<wbr>.reply<wbr>With<wbr>Document</code>. You get the idea.</p><p>Let\u2019s dive into what the three ways of sending a file are.</p><h3 id="via-file-id-or-url" tabindex="-1"><a class="header-anchor" href="#via-file-id-or-url" aria-hidden="true">#</a> Via <code>file<wbr>_id</code> or URL</h3><p>The first two methods are simple: you just pass the respective value as a <code>string</code>, and you\u2019re done.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Send via file_id.</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span>existingFileId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Send via URL.</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span><span class="token string">&quot;https://grammy.dev/Y.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Alternatively, you use bot.api.sendPhoto() or ctx.api.sendPhoto().</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uploading-your-own-files" tabindex="-1"><a class="header-anchor" href="#uploading-your-own-files" aria-hidden="true">#</a> Uploading Your Own Files</h3>`,8),un=s("grammY has good support for uploading your own files. You can do this by importing and using the "),dn=n("code",null,[s("Input"),n("wbr"),s("File")],-1),hn=s(" class ("),kn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/InputFile",target:"_blank",rel:"noopener noreferrer"},mn=s("grammY API Reference"),fn=s(")."),bn=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Send a file via local path</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputFile</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/picture.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// alternatively, use bot.api.sendPhoto() or ctx.api.sendPhoto()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>Input<wbr>File</code> constructor not only takes file paths, but also streams, <code>Buffer</code> objects, async iterators, and\u2014depending on your platform\u2014more. All you need to remember is: <strong>create an instance of <code>Input<wbr>File</code> and pass it to any method to send a file</strong>. Instances of <code>Input<wbr>File</code> can be passed to all methods that accept sending files by upload.</p><p>Here are some examples on how you can construct <code>Input<wbr>File</code>s.</p><h4 id="uploading-a-file-from-disk" tabindex="-1"><a class="header-anchor" href="#uploading-a-file-from-disk" aria-hidden="true">#</a> Uploading a File From Disk</h4><p>If you already have a file stored on your machine, you can let grammY upload this file.</p>`,5),gn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createReadStream "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"fs"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Send a local file."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/to/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Send from a read stream."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"createReadStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/to/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Send a local file."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/to/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Send a `Deno.FsFile` instance."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),s(" Deno"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/to/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_n=n("h4",{id:"uploading-raw-binary-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uploading-raw-binary-data","aria-hidden":"true"},"#"),s(" Uploading Raw Binary Data")],-1),yn=n("p",null,[s("You can also send a "),n("code",null,"Buffer"),s(" object, or an iterator that yields "),n("code",null,"Buffer"),s(" objects. On Deno, you can send "),n("code",null,"Blob"),s(" objects, too.")],-1),vn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Send a buffer or a byte array."),s(`
`),n("span",{class:"token keyword"},"const"),s(" buffer "),n("span",{class:"token operator"},"="),s(" Uint8Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"67"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),s("buffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "ABC"'),s(`
`),n("span",{class:"token comment"},"// Send an iterable."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// "ABCABCABCABC"'),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"yield"),s(" buffer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Send a blob."),s(`
`),n("span",{class:"token keyword"},"const"),s(" blob "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Blob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ABC"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"text/plain"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),s("blob"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// Send a buffer or a byte array."),s(`
`),n("span",{class:"token keyword"},"const"),s(" buffer "),n("span",{class:"token operator"},"="),s(" Uint8Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"67"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),s("buffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "ABC"'),s(`
`),n("span",{class:"token comment"},"// Send an iterable."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// "ABCABCABCABC"'),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"yield"),s(" buffer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),In=n("h4",{id:"downloading-and-reuploading-a-file",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#downloading-and-reuploading-a-file","aria-hidden":"true"},"#"),s(" Downloading and Reuploading a File")],-1),Fn=n("p",null,"You can even make grammY download a file from the internet. This will not actually save the file on your disk. Instead, grammY will only pipe through the data, and only keep a small chunk of it in memory. This is very efficient.",-1),An=n("blockquote",null,[n("p",null,[s("Note that Telegram supports downloading the file for you in many methods. If possible, you should prefer to "),n("a",{href:"#via-file-id-or-url"},"send the file via URL"),s(", instead of using "),n("code",null,[s("Input"),n("wbr"),s("File")]),s(" to stream the file contents through your server.")])],-1),Bn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token constant"},"URL"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"url"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Download a file, and stream the response to Telegram."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[n("span",{class:"token constant"},"URL")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// equivalent"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Download a file, and stream the response to Telegram."),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[n("span",{class:"token constant"},"URL")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// equivalent"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn=n("h3",{id:"adding-a-caption",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#adding-a-caption","aria-hidden":"true"},"#"),s(" Adding a Caption")],-1),Yn=s("When sending files, you can specify further options in an options object of type "),Rn=n("code",null,"Other",-1),Cn=s(", exactly as explained "),Sn=s("earlier"),Pn=s(". For example, this lets you send captions."),Un=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Send a photo from a local file to user 1235 with the caption &quot;photo.jpg&quot;.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendPhoto</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">InputFile</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/photo.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  caption<span class="token operator">:</span> <span class="token string">&quot;photo.jpg&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As always, just like with all other API methods, you can send files via <code>ctx</code> (easiest), <code>ctx<wbr>.api</code>, or <code>bot<wbr>.api</code>.</p><h2 id="file-size-limits" tabindex="-1"><a class="header-anchor" href="#file-size-limits" aria-hidden="true">#</a> File Size Limits</h2>`,3),Dn=s("grammY itself can send files without any size limits, however, Telegram restricts file sizes as documented "),Ln={href:"https://core.telegram.org/bots/api#sending-files",target:"_blank",rel:"noopener noreferrer"},jn=s("here"),Wn=s(". This means that your bot cannot download files larger than 20 MB, or upload files larger than 50 MB. Some combinations have even stricter limits, such as photos sent by URL (5 MB)."),Nn=s("If you want to support uploading and downloading files up to 2000 MB (maximum file size on Telegram), you must host your own Bot API server in addition to hosting your bot. Refer to the official documentation about this "),Vn={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},Hn=s("here"),zn=s("."),En=n("p",null,"Hosting your own Bot API server has, in and of itself, nothing to do with grammY. However, grammY supports all of the methods that are needed to configure your bot to use your own Bot API Server.",-1),Gn=s("Also, you may want to revisit an earlier chapter of this guide about the setup of the Bot API "),On=s("here"),Mn=s(".");function Kn(Qn,Zn){const o=c("ExternalLinkIcon"),l=c("RouterLink"),i=c("CodeGroupItem"),p=c("CodeGroup");return u(),d("div",null,[k,n("p",null,[m,f,b,g,w,_,y,n("a",v,[x,e(o)]),I,F,A]),B,n("p",null,[T,n("a",q,[Y,e(o)]),R]),C,n("div",S,[P,n("p",null,[U,D,L,e(l,{to:"/guide/context.html#shortcuts"},{default:a(()=>[j]),_:1}),W,N,V])]),n("blockquote",null,[n("p",null,[H,e(l,{to:"/guide/filter-queries.html#shortcuts"},{default:a(()=>[z,E,G,O]),_:1}),M])]),K,n("div",Q,[Z,n("p",null,[$,e(l,{to:"/plugins/files.html"},{default:a(()=>[J]),_:1}),X,nn,sn,en,an])]),tn,n("p",null,[on,n("a",ln,[cn,e(o)]),pn]),rn,n("p",null,[un,dn,hn,n("a",kn,[mn,e(o)]),fn]),bn,e(p,null,{default:a(()=>[e(i,{title:"Node.js",active:""},{default:a(()=>[gn]),_:1}),e(i,{title:"Deno"},{default:a(()=>[wn]),_:1})]),_:1}),_n,yn,e(p,null,{default:a(()=>[e(i,{title:"Node.js",active:""},{default:a(()=>[vn]),_:1}),e(i,{title:"Deno"},{default:a(()=>[xn]),_:1})]),_:1}),In,Fn,An,e(p,null,{default:a(()=>[e(i,{title:"Node.js",active:""},{default:a(()=>[Bn]),_:1}),e(i,{title:"Deno"},{default:a(()=>[Tn]),_:1})]),_:1}),qn,n("p",null,[Yn,Rn,Cn,e(l,{to:"/guide/basics.html#sending-messages"},{default:a(()=>[Sn]),_:1}),Pn]),Un,n("p",null,[Dn,n("a",Ln,[jn,e(o)]),Wn]),n("p",null,[Nn,n("a",Vn,[Hn,e(o)]),zn]),En,n("p",null,[Gn,e(l,{to:"/guide/api.html"},{default:a(()=>[On]),_:1}),Mn])])}const Jn=r(h,[["render",Kn],["__file","files.html.vue"]]);export{Jn as default};
