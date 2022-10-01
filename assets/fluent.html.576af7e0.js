import{_ as p,r as t,o as u,c as d,b as a,w as o,a as n,d as e,e as l}from"./app.81c9d145.js";const m={},_=n("h1",{id:"internacionalizacion-con-fluent-fluent",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#internacionalizacion-con-fluent-fluent","aria-hidden":"true"},"#"),e(" Internacionalizaci\xF3n con Fluent ("),n("code",null,"fluent"),e(")")],-1),v={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},k=e("Fluent"),h=e(" es un sistema de localizaci\xF3n creado por la Fundaci\xF3n Mozilla para realizar traducciones naturales. Tiene una sintaxis muy potente y elegante que permite a cualquiera escribir traducciones eficientes y totalmente comprensibles. Este plugin aprovecha este incre\xEDble sistema de localizaci\xF3n para hacer que los bots alimentados por grammY sean fluidos con traducciones de alta calidad."),b={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"No se debe confundir",-1),f=e("No confundas esto con "),y=e("i18n"),x=e("."),w=e("i18n"),z=e(" es una versi\xF3n mejorada de este plugin que funciona tanto en Deno como en Node.js."),q=l(`<h2 id="inicializar-fluent" tabindex="-1"><a class="header-anchor" href="#inicializar-fluent" aria-hidden="true">#</a> Inicializar Fluent</h2><p>Lo primero que hay que hacer es inicializar una instancia de Fluent:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fluent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@moebius/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fluent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fluent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A continuaci\xF3n, tendr\xE1 que a\xF1adir al menos una traducci\xF3n a la instancia de Fluent:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> fluent<span class="token punctuation">.</span><span class="token function">addTranslation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Especifica una o m\xE1s localizaciones soportadas por tu traducci\xF3n:</span>
  locales<span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Puede especificar el contenido de la traducci\xF3n directamente:</span>
  source<span class="token operator">:</span> <span class="token string">&quot;{SU CONTENIDO DE ARCHIVO DE TRADUCCI\xD3N}&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// O los archivos de traducci\xF3n:</span>
  filePath<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-1/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-2/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Todos los aspectos de Fluent son altamente configurables:</span>
  bundleOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Utilice esta opci\xF3n para evitar los caracteres invisibles alrededor de los elementos colocables.</span>
    useIsolating<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="escribir-mensajes-de-traduccion" tabindex="-1"><a class="header-anchor" href="#escribir-mensajes-de-traduccion" aria-hidden="true">#</a> Escribir mensajes de traducci\xF3n</h2>`,6),j=e("La sintaxis de Fluent deber\xEDa ser f\xE1cil de dominar. Puedes empezar mirando los "),C={href:"https://projectfluent.org/#examples",target:"_blank",rel:"noopener noreferrer"},F=e("ejemplos oficiales"),E=e(" o estudiando la "),L={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},N=e("gu\xEDa completa de sintaxis"),T=e("."),A=l(`<p>Empecemos con este ejemplo por ahora:</p><div class="language-ftl ext-ftl line-numbers-mode"><pre class="language-ftl"><code>-bot-name = Apples Bot

welcome =
  Welcome, {$name}, to the {-bot-name}!
  You have { NUMBER($applesCount) -&gt;
    [0] no apples
    [one] {$applesCount} apple
    *[other] {$applesCount} apples
  }.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demuestra tres caracter\xEDsticas importantes de Fluent, a saber: <strong>t\xE9rminos</strong>, <strong>sustituci\xF3n de variables</strong> (tambi\xE9n conocidos como <em>placeables</em>) y <strong>pluralizaci\xF3n</strong>.</p><p>El <code>welcome</code> es el <strong>identificador del mensaje</strong>, que se utilizar\xE1 para referenciar su mensaje siempre que se renderice.</p><p>La sentencia <code>-bot<wbr>-name <wbr>=<wbr> Apples Bot</code> define un <strong>t\xE9rmino</strong> con nombre <code>bot<wbr>-name</code> y valor <code>Apples Bot</code>. La construcci\xF3n <code>{<wbr>-bot<wbr>-name}</code> hace referencia al t\xE9rmino previamente definido y ser\xE1 reemplazado por el valor del t\xE9rmino cuando se renderice.</p><p>La declaraci\xF3n <code>{$name}</code> ser\xE1 reemplazada por el valor de la variable <code>name</code> que tendr\xE1 que pasar a la funci\xF3n de traducci\xF3n usted mismo.</p>`,6),B=e("Y la \xFAltima sentencia ("),I=n("em",null,"l\xEDneas 5 a 9",-1),R=e(") define un "),D=n("strong",null,"selector",-1),M=e(" (muy similar a una sentencia switch) que toma el resultado de la funci\xF3n especial "),O=n("code",null,"NUMBER",-1),Y=e(" aplicada a la variable "),$=n("code",null,[e("apples"),n("wbr"),e("Count")],-1),P=e(" y selecciona uno de los tres posibles mensajes a renderizar bas\xE1ndose en el valor coincidente. La funci\xF3n "),S=n("code",null,"NUMBER",-1),U=e(" devolver\xE1 una "),V={href:"https://www.unicode.org/cldr/cldr-aux/charts/30/supplemental/language_plural_rules.md",target:"_blank",rel:"noopener noreferrer"},G=e("categor\xEDa plural CLDR"),H=e(" basada en el valor proporcionado y la configuraci\xF3n regional utilizada. Esto implementa efectivamente la pluralizaci\xF3n."),W=n("h2",{id:"grammy-configuracion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grammy-configuracion","aria-hidden":"true"},"#"),e(" grammY Configuraci\xF3n")],-1),J=n("p",null,"Ahora vamos a ver c\xF3mo este mensaje de arriba podr\xEDa ser renderizado por un bot. Pero primero, necesitaremos configurar grammY para usar el plugin.",-1),K=e("Antes que nada, necesitar\xE1s configurar tu bot para que utilice el sabor de contexto Fluent. Si no est\xE1s familiarizado con este concepto, deber\xEDas leer los documentos oficiales sobre "),Q=e("Context Flavors"),X=e("."),Z=l(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FluentContextFlavor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Extiende el context type de tu aplicaci\xF3n con la interfaz flavor proporcionada.</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MyAppContext</span> <span class="token operator">=</span> Context <span class="token operator">&amp;</span> FluentContextFlavor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tendr\xE1s que crear tu instancia de bot de la siguiente manera para poder utilizar el tipo de contexto aumentado:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot<span class="token operator">&lt;</span>MyAppContext<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y el \xFAltimo paso ser\xEDa registrar el propio plugin de Fluent con grammY:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">useFluent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fluent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aseg\xFArate de pasar la <a href="#inicializar-fluent">instancia de Fluent previamente creada</a>.</p><h2 id="renderizar-los-mensajes-localizados" tabindex="-1"><a class="header-anchor" href="#renderizar-los-mensajes-localizados" aria-hidden="true">#</a> Renderizar los mensajes localizados</h2><p>Genial, \xA1ya tenemos todo listo para renderizar nuestros mensajes! Vamos a hacerlo definiendo un comando de prueba en nuestro bot:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;i18n_test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Llama al helper &quot;translate&quot; o &quot;t&quot; para renderizar el</span>
  <span class="token comment">// mensaje especificando su ID y par\xE1metros adicionales:</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;welcome&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>first_name<span class="token punctuation">,</span>
      applesCount<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ahora puedes iniciar tu bot y utilizar el comando <code>/i18n<wbr>_test</code>. Deber\xEDa mostrar el siguiente mensaje:</p><div class="language-text ext-text"><pre class="language-text"><code>\xA1Bienvenido, Slava, al Bot de las Manzanas!
Tienes 1 manzana.
</code></pre></div><p>Por supuesto, ver\xE1s tu propio nombre en lugar de \u201CSlava\u201D. Prueba a cambiar el valor de la variable <code>apples<wbr>Count</code> para ver c\xF3mo cambia el mensaje renderizado.</p><p>Ten en cuenta que ahora puedes utilizar la funci\xF3n de traducci\xF3n en todos los lugares donde el <code>Contexto</code> est\xE9 disponible. La librer\xEDa determinar\xE1 autom\xE1ticamente la mejor localizaci\xF3n posible para cada usuario que interact\xFAe con tu bot, bas\xE1ndose en sus preferencias personales (el idioma establecido en la configuraci\xF3n del cliente de Telegram). S\xF3lo tendr\xE1s que crear varios archivos de traducci\xF3n y asegurarte de que todas las traducciones est\xE1n correctamente sincronizadas.</p><h2 id="otros-pasos" tabindex="-1"><a class="header-anchor" href="#otros-pasos" aria-hidden="true">#</a> Otros pasos</h2>`,14),nn=e("Completa la lectura de la "),en={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},an=e("documentaci\xF3n de Fluent"),sn=e(", especialmente la "),tn={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},on=e("gu\xEDa de sintaxis"),ln=e("."),cn={href:"https://github.com/grammyjs/fluent#i18n-plugin-replacement",target:"_blank",rel:"noopener noreferrer"},rn=e("Migrar desde el plugin "),pn=n("code",null,"i18n",-1),un=e("Familiar\xEDcese con "),dn={href:"https://github.com/the-moebius/fluent#readme",target:"_blank",rel:"noopener noreferrer"},mn=n("code",null,[e("@moebius"),n("wbr"),e("/fluent")],-1),_n=e("."),vn=n("h2",{id:"resumen-del-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resumen-del-plugin","aria-hidden":"true"},"#"),e(" Resumen del plugin")],-1),kn=n("li",null,[e("Nombre: "),n("code",null,"fluent")],-1),hn=e("Fuente: "),bn={href:"https://github.com/grammyjs/fluent",target:"_blank",rel:"noopener noreferrer"},gn=e("https://"),fn=n("wbr",null,null,-1),yn=e("github"),xn=n("wbr",null,null,-1),wn=e(".com"),zn=n("wbr",null,null,-1),qn=e("/grammyjs"),jn=n("wbr",null,null,-1),Cn=e("/fluent");function Fn(En,Ln){const c=t("Tag"),r=t("TagGroup"),s=t("ExternalLinkIcon"),i=t("RouterLink");return u(),d("div",null,[_,a(r,null,{default:o(()=>[a(c,{type:"official",text:"OFICIAL"})]),_:1}),n("p",null,[n("a",v,[k,a(s)]),h]),n("div",b,[g,n("p",null,[f,a(i,{to:"/es/plugins/i18n.html"},{default:o(()=>[y]),_:1}),x]),n("p",null,[a(i,{to:"/es/plugins/i18n.html"},{default:o(()=>[w]),_:1}),z])]),q,n("p",null,[j,n("a",C,[F,a(s)]),E,n("a",L,[N,a(s)]),T]),A,n("p",null,[B,I,R,D,M,O,Y,$,P,S,U,n("a",V,[G,a(s)]),H]),W,J,n("p",null,[K,a(i,{to:"/es/guide/context.html#context-flavors"},{default:o(()=>[Q]),_:1}),X]),Z,n("ul",null,[n("li",null,[nn,n("a",en,[an,a(s)]),sn,n("a",tn,[on,a(s)]),ln]),n("li",null,[n("a",cn,[rn,pn,a(s)])]),n("li",null,[un,n("a",dn,[mn,a(s)]),_n])]),vn,n("ul",null,[kn,n("li",null,[hn,n("a",bn,[gn,fn,yn,xn,wn,zn,qn,jn,Cn,a(s)])])])])}const Tn=p(m,[["render",Fn],["__file","fluent.html.vue"]]);export{Tn as default};
