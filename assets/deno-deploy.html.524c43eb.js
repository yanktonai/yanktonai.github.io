import{_ as i,r as o,o as d,c as u,b as s,w as c,a as e,d as n,e as t}from"./app.1137d7ac.js";const k={},h=e("h1",{id:"alojamiento-deno-deploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#alojamiento-deno-deploy","aria-hidden":"true"},"#"),n(" Alojamiento: Deno Deploy")],-1),_=n("Esta gu\xEDa le informa sobre las formas de alojar sus bots de grammY en "),m={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},b=n("Deno Deploy"),g=n("."),v=n("Ten en cuenta que esta gu\xEDa es s\xF3lo para usuarios de Deno, y que necesitas tener una cuenta de "),y={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},f=n("Git"),q=e("wbr",null,null,-1),w=n("Hub"),D=n(" para crear una cuenta de "),j={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},x=n("Deno Deploy"),E=n("."),C=e("p",null,"Deno Deploy es ideal para la mayor\xEDa de los bots simples, y debe tener en cuenta que no todas las caracter\xEDsticas de Deno est\xE1n disponibles para las aplicaciones que se ejecutan en Deno Deploy. Por ejemplo, no hay sistema de archivos en Deno Deploy. Es igual que las dem\xE1s plataformas sin servidor, pero dedicado a las aplicaciones de Deno.",-1),L=n("El resultado de este tutorial "),R={href:"https://github.com/grammyjs/examples/tree/main/deno-deploy",target:"_blank",rel:"noopener noreferrer"},G=n("puede verse en nuestro repositorio de bots de ejemplo"),T=n("."),H=e("h2",{id:"preparacion-de-su-codigo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preparacion-de-su-codigo","aria-hidden":"true"},"#"),n(" Preparaci\xF3n de su c\xF3digo")],-1),U=n("Recuerda que necesitas "),z=n("ejecutar tu bot en webhhoks"),N=n(", por lo que debes usar "),P=e("code",null,[n("webhook"),e("wbr"),n("Callback")],-1),B=n(" y no llamar a "),V=e("code",null,[n("bot"),e("wbr"),n(".start()")],-1),I=n(" en tu c\xF3digo."),A=t(`<ol><li>Aseg\xFArate de que tienes un archivo que exporta tu objeto <code>Bot</code>, para que puedas importarlo despu\xE9s para ejecutarlo.</li><li>Crea un archivo llamado <code>mod<wbr>.ts</code> o <code>mod<wbr>.js</code>, o en realidad cualquier nombre que te guste (pero deber\xEDas recordar y usar este como el archivo principal para desplegar), con el siguiente contenido:</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Puedes modificar esto a la forma correcta de importar tu objeto \`Bot\`.</span>
<span class="token keyword">import</span> bot <span class="token keyword">from</span> <span class="token string">&quot;./bot.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Le aconsejamos que tenga su manejador en alguna ruta secreta en lugar de la ra\xEDz (<code>/</code>). Aqu\xED, estamos usando el token del bot (<code>/&lt;bot token&gt;</code>).</p><h2 id="despliegue" tabindex="-1"><a class="header-anchor" href="#despliegue" aria-hidden="true">#</a> Despliegue</h2><h3 id="metodo-1-con-github" tabindex="-1"><a class="header-anchor" href="#metodo-1-con-github" aria-hidden="true">#</a> M\xE9todo 1: Con GitHub</h3><blockquote><p>Este es el m\xE9todo recomendado, y el m\xE1s f\xE1cil de seguir. La principal ventaja de seguir este m\xE9todo es que Deno Deploy estar\xE1 atento a los cambios en tu repositorio que incluya el c\xF3digo de tu bot, y desplegar\xE1 las nuevas versiones autom\xE1ticamente.</p></blockquote><ol><li>Crea un repositorio en GitHub, puede ser privado o p\xFAblico.</li><li>Empuja tu c\xF3digo.</li></ol><blockquote><p>Es recomendable que tengas una \xFAnica rama estable y que hagas tus pruebas en otras ramas, para que no te ocurran cosas inesperadas.</p></blockquote>`,8),M={start:"3"},S=n("Visita tu "),Y={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},O=n("Deno Deploy dashboard"),W=n("."),F=e("li",null,"Haz clic en \u201CNuevo proyecto\u201D, y ve a la secci\xF3n \u201CDespliegue desde el repositorio de GitHub\u201D.",-1),J=e("li",null,"Instala la app de GitHub en tu cuenta u organizaci\xF3n, y elige tu repositorio.",-1),K=e("li",null,[n("Selecciona la rama que quieres desplegar, y luego elige tu archivo "),e("code",null,[n("mod"),e("wbr"),n(".ts")]),n(" para ser desplegado.")],-1),Q=e("h3",{id:"metodo-2-con-deployctl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metodo-2-con-deployctl","aria-hidden":"true"},"#"),n(" M\xE9todo 2: Con "),e("code",null,"deployctl")],-1),X=e("blockquote",null,[e("p",null,"Este es un m\xE9todo para usuarios m\xE1s avanzados. Te permite desplegar el proyecto a trav\xE9s de la l\xEDnea de comandos o de las acciones de Github.")],-1),Z=n("Visita tu "),$={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},ee=n("Deno Deploy dashboard"),ne=n("."),se=e("li",null,"Haz clic en \u201CNuevo proyecto\u201D, y luego en \u201CProyecto vac\xEDo\u201D.",-1),ae=n("Instale "),oe={href:"https://github.com/denoland/deployctl",target:"_blank",rel:"noopener noreferrer"},te=e("code",null,"deployctl",-1),ce=n("."),le={href:"https://dash.deno.com/user/access-tokens",target:"_blank",rel:"noopener noreferrer"},pe=n("Crear un token de acceso"),re=n("."),ie=e("li",null,"Ejecuta el siguiente comando:",-1),de=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deployctl deploy <span class="token parameter variable">--project</span> <span class="token operator">&lt;</span>project<span class="token operator">&gt;</span> ./mod.ts <span class="token parameter variable">--prod</span> <span class="token parameter variable">--token</span> <span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),ue={start:"6"},ke=n("Para configurar las acciones de Github, consulte "),he={href:"https://github.com/denoland/deployctl/blob/main/action/README.md",target:"_blank",rel:"noopener noreferrer"},_e=n("esto"),me=n("."),be=t(`<h3 id="metodo-3-con-url" tabindex="-1"><a class="header-anchor" href="#metodo-3-con-url" aria-hidden="true">#</a> M\xE9todo 3: Con URL</h3><blockquote><p>Todo lo que necesitas para seguir este m\xE9todo para desplegar tu bot de grammY, es una URL p\xFAblica a tu archivo <code>mod<wbr>.ts</code>.</p></blockquote><ol><li>Crea un nuevo proyecto en Deno Deploy.</li><li>Haz clic en \u201CDesplegar URL\u201D.</li><li>Introduzca la URL p\xFAblica de su archivo <code>mod<wbr>.ts</code> y haga clic en \u201CDeploy\u201D.</li></ol><h3 id="nota" tabindex="-1"><a class="header-anchor" href="#nota" aria-hidden="true">#</a> Nota</h3><p>Despu\xE9s de poner en marcha tu aplicaci\xF3n, debes configurar los ajustes de los webhooks de tu bot para que apunten a tu aplicaci\xF3n. Para ello, env\xEDa una petici\xF3n a</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>https://api.telegram.org/bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>token</span><span class="token punctuation">&gt;</span></span>/setWebhook?url=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>sustituyendo <code>&lt;token&gt;</code> por el token de tu bot, y <code>&lt;url&gt;</code> por la URL completa de tu aplicaci\xF3n junto con la ruta al manejador del webhook.</p>`,7);function ge(ve,ye){const l=o("Tag"),p=o("TagGroup"),a=o("ExternalLinkIcon"),r=o("RouterLink");return d(),u("div",null,[h,s(p,null,{default:c(()=>[s(l,{type:"deno"})]),_:1}),e("p",null,[_,e("a",m,[b,s(a)]),g]),e("p",null,[v,e("a",y,[f,q,w,s(a)]),D,e("a",j,[x,s(a)]),E]),C,e("p",null,[L,e("a",R,[G,s(a)]),T]),H,e("blockquote",null,[e("p",null,[U,s(r,{to:"/es/guide/deployment-types.html#como-usar-webhooks"},{default:c(()=>[z]),_:1}),N,P,B,V,I])]),A,e("ol",M,[e("li",null,[S,e("a",Y,[O,s(a)]),W]),F,J,K]),Q,X,e("ol",null,[e("li",null,[Z,e("a",$,[ee,s(a)]),ne]),se,e("li",null,[ae,e("a",oe,[te,s(a)]),ce]),e("li",null,[e("a",le,[pe,s(a)]),re]),ie]),de,e("ol",ue,[e("li",null,[ke,e("a",he,[_e,s(a)]),me])]),be])}const qe=i(k,[["render",ge],["__file","deno-deploy.html.vue"]]);export{qe as default};
