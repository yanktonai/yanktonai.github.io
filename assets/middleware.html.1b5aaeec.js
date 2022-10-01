import{_ as l,r as c,o as i,c as u,a as s,b as a,w as o,d as n,e as t}from"./app.1137d7ac.js";const d={},r=s("h1",{id:"middleware-redux",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#middleware-redux","aria-hidden":"true"},"#"),n(" Middleware Redux")],-1),m=n("En est\xE1 gu\xEDa, "),k=n("introdujimos el middleware"),v=n(" como un stack de funciones. Aunque no est\xE1 mal que se pueda utilizar el middleware de esta forma lineal (tambi\xE9n en grammY), llamarlo s\xF3lo stack es una simplificaci\xF3n."),b=t(`<h2 id="middleware-en-grammy" tabindex="-1"><a class="header-anchor" href="#middleware-en-grammy" aria-hidden="true">#</a> Middleware en grammY</h2><p>Normalmente, se ve el siguiente patr\xF3n.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=n("Se parece bastante a un stack, excepto que, detr\xE1s de las escenas, es realmente un \xE1rbol. El coraz\xF3n de esta funcionalidad es la clase "),h=s("code",null,"Composer",-1),f=n(" ("),g={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},w=n("referencia"),q=n(") que construye este \xE1rbol."),y=s("p",null,[n("En primer lugar, cada instancia de "),s("code",null,"Bot"),n(" es una instancia de "),s("code",null,"Composer"),n(". Es s\xF3lo una subclase, as\xED que "),s("code",null,"class Bot extends Composer"),n(".")],-1),C=n("Adem\xE1s, debes saber que cada m\xE9todo de "),x=s("code",null,"Composer",-1),A=n(" llama internamente a "),B=s("code",null,"use",-1),E=n(". Por ejemplo, "),j=s("code",null,"filter",-1),z=n(" s\xF3lo llama a "),L=s("code",null,"use",-1),D=n(" con alg\xFAn middleware de bifurcaci\xF3n, mientras que "),N=s("code",null,"on",-1),P=n(" s\xF3lo llama a "),R=s("code",null,"filter",-1),S=n(" de nuevo con alguna funci\xF3n de predicado que compara las actualizaciones con la "),I=n("consulta de filtro dada"),V=n(". Por lo tanto, podemos limitarnos a mirar "),M=s("code",null,"use",-1),Y=n(" por ahora, y el resto sigue."),H=t(`<p>Ahora tenemos que sumergirnos un poco en los detalles de lo que hace <code>Composer</code> con sus llamadas <code>use</code>, y en qu\xE9 se diferencia de otros sistemas de middleware que existen. La diferencia puede parecer sutil, pero espera hasta la siguiente subsecci\xF3n para descubrir por qu\xE9 tiene consecuencias notables.</p><h2 id="augmenting-composer" tabindex="-1"><a class="header-anchor" href="#augmenting-composer" aria-hidden="true">#</a> Augmenting <code>Composer</code></h2><p>Puede instalar m\xE1s middlewares en una instancia de <code>Composer</code> incluso despu\xE9s de instalar el propio <code>Composer</code> en alg\xFAn lugar.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// subclase de \`Composer\`</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Esto va a ejecutar:</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se ejecutar\xE1n los programas <code>A</code>, <code>B</code> y <code>C</code>. Todo esto dice que una vez que has instalado una instancia de <code>Composer</code>, puedes seguir llamando a <code>use</code> sobre ella y este middleware se seguir\xE1 ejecutando. (Esto no es nada espectacular, pero ya es una diferencia principal con los frameworks populares de la competencia que simplemente ignoran las operaciones posteriores).</p><p>Puede que te preguntes d\xF3nde est\xE1 la estructura de \xE1rbol. Echemos un vistazo a este snippet:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* D */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* E */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* F */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* G */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* H */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* I */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* J */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* K */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* L */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\xBFPuedes verlo?</p><p>Como puedes adivinar, todo el middleware se ejecutar\xE1 en orden de <code>A</code> a <code>L</code>.</p><p>Otras bibliotecas aplanar\xEDan internamente este c\xF3digo para que fuera equivalente a <code>composer<wbr>.use(<wbr>/* A *<wbr>/)<wbr>.use(<wbr>/* B *<wbr>/)<wbr>.use(<wbr>/* C *<wbr>/)<wbr>.use(<wbr>/* D *<wbr>/)<wbr>..<wbr>.</code> y as\xED sucesivamente. Por el contrario, grammY conserva el \xE1rbol especificado: un nodo ra\xEDz (<code>compositor</code>) tiene cinco hijos (<code>A</code>, <code>B</code>, <code>D</code>, <code>H</code>, <code>J</code>), mientras que el hijo <code>B</code> tiene otro hijo, <code>C</code>, etc. Este \xE1rbol ser\xE1 atravesado por cada actualizaci\xF3n en orden de profundidad, por lo tanto, pasando a trav\xE9s de \u201CA\u201D a \u201CL\u201D en orden lineal, al igual que lo que usted sabe de otros sistemas.</p><p>Esto es posible gracias a la creaci\xF3n de una nueva instancia de <code>Composer</code> cada vez que se llama a <code>use</code>, que a su vez se extender\xE1 (como se ha explicado anteriormente).</p><h2 id="concatenacion-de-llamadas-use" tabindex="-1"><a class="header-anchor" href="#concatenacion-de-llamadas-use" aria-hidden="true">#</a> Concatenaci\xF3n de llamadas <code>use</code></h2><p>Si s\xF3lo utiliz\xE1ramos <code>use</code>, esto no ser\xEDa demasiado \xFAtil. La cosa se pone m\xE1s interesante cuando, por ejemplo, entra en juego <code>filter</code>.</p><p>Mira esto:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 1 */</span><span class="token punctuation">,</span> <span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 2 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">,</span> <span class="token comment">/* D */</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En la l\xEDnea 3, registramos \u201CA\u201D detr\xE1s de una funci\xF3n de predicado \u201C1\u201D. La funci\xF3n <code>A</code> s\xF3lo se evaluar\xE1 para las actualizaciones que pasen la condici\xF3n <code>1</code>. Sin embargo, <code>filter</code> devuelve una instancia de <code>Composer</code> que aumentamos con la llamada <code>use</code> de la l\xEDnea 3, por lo que <code>B</code> sigue siendo vigilada por <code>1</code>, aunque se instale en una llamada <code>use</code> completamente diferente.</p><p>La l\xEDnea 5 es equivalente a la l\xEDnea 3 en el sentido de que tanto <code>C</code> como <code>D</code> s\xF3lo se ejecutar\xE1n si <code>2</code> se mantiene.</p><p>\xBFRecuerdas c\xF3mo las llamadas a <code>bot<wbr>.on()</code> pod\xEDan encadenarse para concatenar consultas de filtro con AND?</p><p>Imagina esto:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 1 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 2 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>2</code> s\xF3lo se comprobar\xE1 si <code>1</code> se mantiene, y <code>A</code> s\xF3lo se ejecutar\xE1 si <code>2</code> (y por tanto <code>1</code>) se mantiene.</p>`,21),J=n("Revisa la secci\xF3n sobre "),T=n("combinar consultas de filtro"),F=n(" con tus nuevos conocimientos y siente tu nuevo poder."),G=t("<p>Un caso especial es <code>fork</code>, ya que inicia dos c\xE1lculos que son concurrentes, es decir, intercalados en el bucle de eventos. En lugar de devolver la instancia de <code>Composer</code> creada por la llamada subyacente <code>use</code>, devuelve un <code>Composer</code> que refleja el c\xE1lculo bifurcado. Esto permite patrones concisos como <code>bot<wbr>.fork()<wbr>.on(&quot;:<wbr>text&quot;)<wbr>.use(<wbr>/* A *<wbr>/)</code>. A&quot; se ejecutar\xE1 ahora en la rama de computaci\xF3n paralela.</p>",1);function K(O,U){const e=c("RouterLink"),p=c("ExternalLinkIcon");return i(),u("div",null,[r,s("p",null,[m,a(e,{to:"/es/guide/middleware.html"},{default:o(()=>[k]),_:1}),v]),b,s("p",null,[_,h,f,s("a",g,[w,a(p)]),q]),y,s("p",null,[C,x,A,B,E,j,z,L,D,N,P,R,S,a(e,{to:"/es/guide/filter-queries.html"},{default:o(()=>[I]),_:1}),V,M,Y]),H,s("p",null,[J,a(e,{to:"/es/guide/filter-queries.html#combinaci%C3%B3n-de-varias-consultas"},{default:o(()=>[T]),_:1}),F]),G])}const W=l(d,[["render",K],["__file","middleware.html.vue"]]);export{W as default};
