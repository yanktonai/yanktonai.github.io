import{_ as c,r as i,o as l,c as d,a,b as o,w as r,e as t,d as e}from"./app.ff0cf306.js";const u={},p=t('<h1 id="como-se-compara-grammy-con-otros-frameworks-de-bots" tabindex="-1"><a class="header-anchor" href="#como-se-compara-grammy-con-otros-frameworks-de-bots" aria-hidden="true">#</a> C\xF3mo se compara grammY con otros frameworks de bots</h1><p>Aunque grammY utiliza algunos conceptos conocidos de otros frameworks de bots (y frameworks web), fue escrito desde cero para una \xF3ptima legibilidad y rendimiento. En otras palabras, no utiliza ning\xFAn c\xF3digo de proyectos de la competencia, pero a\xFAn as\xED resultar\xE1 familiar a los usuarios de algunos frameworks.</p><blockquote><p>Por favor, asuma que esta comparaci\xF3n est\xE1 sesgada, aunque estamos tratando de proporcionarle una descripci\xF3n objetiva de las ventajas y desventajas de usar grammY sobre el uso de otras bibliotecas. Estamos tratando de mantener las cosas en este art\xEDculo actualizadas. Si notas que algo est\xE1 desactualizado, por favor edita esta p\xE1gina usando el enlace al final.</p></blockquote><h2 id="comparacion-con-otros-frameworks-de-javascript" tabindex="-1"><a class="header-anchor" href="#comparacion-con-otros-frameworks-de-javascript" aria-hidden="true">#</a> Comparaci\xF3n con otros Frameworks de JavaScript</h2><div class="custom-container tip"><p class="custom-container-title">Elige primero tu lenguaje de programaci\xF3n</p><p>Dado que est\xE1s leyendo la documentaci\xF3n de un framework dentro del ecosistema JavaScript, es probable que est\xE9s buscando algo que funcione en Node.js (o Deno). Sin embargo, si ese no es tu caso, <a href="#comparaci%C3%B3n-con-frameworks-en-otros-lenguajes-de-programaci%C3%B3n">despl\xE1zate hacia abajo</a> para ver una comparaci\xF3n de qu\xE9 lenguajes de programaci\xF3n son adecuados para el desarrollo de bots. Naturalmente, tambi\xE9n encontrar\xE1s una breve comparaci\xF3n con frameworks de otros lenguajes (principalmente Python).</p></div>',5),m=e("Hay dos proyectos principales en los que grammY se inspira, a saber, "),g={href:"https://github.com/telegraf/telegraf",target:"_blank",rel:"noopener noreferrer"},h=e("Telegraf"),_=e(" y "),b={href:"https://github.com/yagop/node-telegram-bot-api",target:"_blank",rel:"noopener noreferrer"},f=e("NTBA"),q=e(". Nos centraremos en ellos por ahora, pero nosotros (\xBFo t\xFA?) podemos a\xF1adir otras comparaciones en el futuro."),v=a("h3",{id:"telegraf",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#telegraf","aria-hidden":"true"},"#"),e(" Telegraf")],-1),y=a("p",null,"grammY tiene sus ra\xEDces en Telegraf, as\xED que aqu\xED hay un breve resumen de c\xF3mo estos marcos se relacionan hist\xF3ricamente.",-1),j=a("h4",{id:"algo-de-historia",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#algo-de-historia","aria-hidden":"true"},"#"),e(" Algo de historia")],-1),k=a("p",null,"Telegraf es una biblioteca incre\xEDble, y grammY no estar\xEDa donde est\xE1 sin ella. Sin embargo, Telegraf sol\xEDa estar escrito en JavaScript (en la v3). Las raras anotaciones de tipo eran a\xF1adidas manualmente y mal mantenidas, por lo que estaban incompletas, incorrectas y anticuadas. Las anotaciones de tipo fuertes son un aspecto crucial de cualquier biblioteca seria por el soporte de herramientas que permiten, y porque le permite iterar significativamente m\xE1s r\xE1pido en su base de c\xF3digo. Mucha gente prefiere tener seguridad de tipos cuando se desarrolla un bot complejo, y para algunos es un punto de inflexi\xF3n no ofrecerla.",-1),T=e("Telegraf v4 intent\xF3 arreglar esto migrando todo el c\xF3digo base a TypeScript. Desgraciadamente, muchos de los tipos resultantes eran tan complejos que resultaban demasiado dif\xEDciles de entender (pero correctos). Adem\xE1s, la migraci\xF3n revel\xF3 innumerables rarezas ("),w={href:"https://github.com/telegraf/telegraf/issues/1076",target:"_blank",rel:"noopener noreferrer"},x=e("ejemplo"),Y=e(") en la base de c\xF3digo que hizo que fuera doloroso incluso encontrar tipos correctos para el c\xF3digo existente."),S=a("p",null,[e("Como resultado, aunque la versi\xF3n 4.0 intent\xF3 "),a("em",null,"mejorar"),e(" la correcci\xF3n y el soporte de herramientas, termin\xF3 haciendo a Telegraf sustancialmente "),a("em",null,"m\xE1s dif\xEDcil de usar"),e(" que su predecesor no tipado. Es comprensible que muchos usuarios de Telegraf 3 no quisieran actualizarse. Tambi\xE9n se hizo m\xE1s dif\xEDcil para los nuevos usuarios empezar.")],-1),z=a("strong",null,"grammY da un paso atr\xE1s y replantea un marco de trabajo de bots de tipo seguro con la accesibilidad en primer lugar.",-1),E=e(" Esto permiti\xF3 saltarse muchas de las frustrantes discusiones sobre c\xF3mo lidiar con extra\xF1as tipograf\xEDas internas. Permiti\xF3 al proyecto tener un c\xF3digo limpio, consistente y compilable que proporciona a los usuarios excelentes tipos (=soporte de editores). La seguridad tipogr\xE1fica a su vez permite caracter\xEDsticas m\xE1s avanzadas que cambian fundamentalmente la forma en que pensamos sobre el desarrollo de bots, como los "),L=e("transformadores de la API"),A=e("."),P=a("p",null,"Hoy en d\xEDa, Telegraf 3 es obsoleto. Hay algunos forks no oficiales por ah\xED que tratan de mantener la base de c\xF3digo heredada al d\xEDa con la evoluci\xF3n de la API de bots, pero su compatibilidad es desconocida. Adem\xE1s, el ecosistema de plugins de Telegraf ha pasado a Telegraf 4. La mayor\xEDa de los desarrolladores de plugins no mantienen versiones para forks de terceros de versiones antiguas de Telegraf.",-1),C=a("p",null,"Bas\xE1ndonos en el hecho de que Telegraf se encuentra en alg\xFAn lugar entre la versi\xF3n 3 y la 4, tiene sentido comparar grammY con ambas versiones individualmente.",-1),N=a("h4",{id:"comparacion-con-la-v3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#comparacion-con-la-v3","aria-hidden":"true"},"#"),e(" Comparaci\xF3n con la v3")],-1),B=e("Dada su historia compartida, grammY y Telegraf tienen mucho en com\xFAn. Ambos tienen un "),I=e("sistema de middleware"),M=e(" en su n\xFAcleo. Tambi\xE9n comparten gran parte de su sintaxis b\xE1sica:"),D=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Funciona tanto con grammY como con Telegraf.</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Hola!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Cualquier c\xF3digo escrito en Telegraf funcionar\xE1 en grammY con cambios m\xEDnimos. (Tenga en cuenta que lo contrario no es cierto, ya que muchas caracter\xEDsticas de grammY no est\xE1n disponibles para los usuarios de Telegraf).</p><p>La principal ventaja de grammY sobre Telegraf 3.x es <strong>un mejor soporte de herramientas</strong>. Telegraf 3 est\xE1 escrito en JavaScript. Los tipos enviados son incorrectos e incompletos, y los tipos consumidos de la API de Bot est\xE1n desactualizados por varios a\xF1os. Como resultado, no hay un soporte fiable para el autocompletado o la correcci\xF3n ortogr\xE1fica del c\xF3digo del bot. La experiencia demuestra que a menudo tienes que ejecutar tu bot para averiguar si tu c\xF3digo funciona.</p><p>En cambio, grammY est\xE1 escrito en TypeScript puro. Esto permite que tu editor de c\xF3digo (por ejemplo, VSCode) analice tu c\xF3digo mientras est\xE1s escribiendo, y te ayude. Adem\xE1s, puede mostrar la API completa de Telegram Bot inline -la documentaci\xF3n del sitio web estar\xE1 disponible al alcance de tu mano cuando pases el rat\xF3n sobre cualquier nombre o elemento de tu c\xF3digo.</p><p>Otra ventaja notable es que por fin puedes <strong>escribir tus propios bots en TypeScript</strong>. Esto era dif\xEDcil de hacer porque las anotaciones de tipo err\xF3neas de Telegraf estaban impidiendo que el c\xF3digo perfectamente correcto se compilara, animando as\xED efectivamente a los usuarios a no comprobar su c\xF3digo en primer lugar. Sin embargo, el c\xF3digo de tipo seguro es una gran ventaja para cualquier base de c\xF3digo no trivial.</p>`,5),V=e("grammY y Telegraf tienen bases de c\xF3digo distintas. Al ser liberado del legado, grammY tambi\xE9n podr\xEDa hacer contribuciones sustanciales al sistema de middleware subyacente, permitiendo emocionantes casos de uso como "),J=e("consultas de filtro"),H=e(", "),F=e("l\xEDmites de error"),O=e(", "),R=e("transformadores de API"),G=e(", y muchos m\xE1s. Esto tambi\xE9n permite el desarrollo de valiosos plugins que son imposibles de trabajar bajo Telegraf."),U=a("p",null,[e("La principal ventaja de Telegraf sobre grammY es que sigue siendo "),a("strong",null,"conocido por mucha m\xE1s gente"),e(". La comunidad de Telegraf puede estar dividida entre las versiones, pero en este punto inicial la mayor\xEDa de estos grupos son todav\xEDa m\xE1s grandes que el grupo unido de usuarios de grammY. Esto tambi\xE9n significa que puedes encontrar m\xE1s historias en internet sobre usuarios de Telegraf, y encontrar\xE1s m\xE1s tutoriales no oficiales de otros codificadores, que pueden ayudarte si la documentaci\xF3n oficial de una librer\xEDa tiene deficiencias.")],-1),K=a("h4",{id:"comparacion-con-v4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#comparacion-con-v4","aria-hidden":"true"},"#"),e(" Comparaci\xF3n con v4")],-1),Q=a("p",null,[e("La principal ventaja de grammY sobre Telegraf 4.x es que "),a("strong",null,"es simplemente mucho m\xE1s f\xE1cil"),e(". Por ejemplo")],-1),W=e("grammY tiene una "),X=e("documentaci\xF3n"),Z=e(". Telegraf no la tiene (fue reemplazada por una referencia de la API generada que carece de explicaciones)."),$=a("li",null,[e("Los tipos en grammY "),a("em",null,"s\xF3lo funcionan"),e(" y seguir\xE1n tu c\xF3digo. En Telegraf, a menudo necesitar\xE1s escribir tu c\xF3digo de cierta manera, de lo contrario no compila (aunque en realidad funcione bien).")],-1),ee=e("grammY integra sugerencias de la "),ae={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},oe=e("referencia oficial de la API del Bot"),se=e(" en l\xEDnea que te ayudan mientras est\xE1s codificando. Telegraf no te da ninguna explicaci\xF3n sobre tu c\xF3digo."),ne=t('<h4 id="resumen" tabindex="-1"><a class="header-anchor" href="#resumen" aria-hidden="true">#</a> Resumen</h4><h5 id="ventajas-de-grammy" tabindex="-1"><a class="header-anchor" href="#ventajas-de-grammy" aria-hidden="true">#</a> Ventajas de grammY</h5><ul><li>M\xE1s f\xE1cil de usar que Telegraf 3 y 4</li><li>Soporte adecuado para TypeScript</li><li>Tiene tanto una documentaci\xF3n como una referencia de la API generada</li><li>Significativamente m\xE1s r\xE1pido en los sondeos largos (con el corredor de grammY)</li><li>Comunidad y ecosistema unidos</li><li>M\xE1s plugins</li><li>Mejores integraciones con bases de datos y frameworks web</li><li>Se desarrolla m\xE1s activamente</li><li>Mensajes de error \xFAtiles</li><li>Es mucho m\xE1s dif\xEDcil encontrarse con condiciones de carrera peligrosas</li><li>Dise\xF1ado para evitar que se cometan errores de programaci\xF3n</li><li>Se ejecuta en Node.js, pero tambi\xE9n en Deno y en el navegador</li></ul><h5 id="ventajas-de-telegraf" tabindex="-1"><a class="header-anchor" href="#ventajas-de-telegraf" aria-hidden="true">#</a> Ventajas de Telegraf</h5><ul><li>M\xE1s antiguo, por lo tanto m\xE1s maduro</li><li>Muchos m\xE1s ejemplos de bots, tanto en el repositorio como en la naturaleza</li></ul><h3 id="ntba" tabindex="-1"><a class="header-anchor" href="#ntba" aria-hidden="true">#</a> NTBA</h3>',6),re=e("El paquete "),te=a("code",null,[e("node"),a("wbr"),e("-telegram"),a("wbr"),e("-bot"),a("wbr"),e("-api")],-1),ie=e(" es el segundo gran proyecto que impact\xF3 en el desarrollo de grammY. Su principal ventaja sobre otros frameworks es que es muy simple. Su arquitectura se puede describir en una sola frase, mientras que grammY necesita una "),ce=e("gu\xEDa"),le=e(" en su sitio web de documentaci\xF3n para hacer lo mismo. Creemos que todas estas explicaciones en el sitio web de grammY ayudan a la gente a empezar f\xE1cilmente, pero es tentador tener una biblioteca que no necesita ninguna explicaci\xF3n en primer lugar."),de=a("p",null,[e("Lo malo es que esto s\xF3lo es bueno a corto plazo. La idea de poner todo en un archivo gigantesco, y usar un primitivo "),a("code",null,[e("Event"),a("wbr"),e("Emitter")]),e(" para procesar flujos de objetos complejos (aka. peticiones web) ha tra\xEDdo mucho dolor al mundo de los bots de Telegram, y ciertamente impidi\xF3 que un n\xFAmero de buenas ideas fueran implementadas.")],-1),ue=a("p",null,"Los bots siempre empiezan siendo peque\xF1os, pero un marco de trabajo responsable debe proporcionarles un camino claro para crecer, y para escalar. Desgraciadamente, la NTBA falla horriblemente en eso. Cualquier base de c\xF3digo con m\xE1s de 50 l\xEDneas que utilice NTBA acaba siendo un terrible l\xEDo de referencias cruzadas tipo espagueti. Usted no quiere eso.",-1),pe=a("h3",{id:"otros-frameworks",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#otros-frameworks","aria-hidden":"true"},"#"),e(" Otros Frameworks")],-1),me=e("\xBFCrees que tu framework favorito es mejor que grammY en alg\xFAn aspecto? No dudes en editar esta p\xE1gina y a\xF1adir una comparaci\xF3n, o dinos lo que piensas en el "),ge={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},he=e("chat de grupo"),_e=e("."),be=a("h2",{id:"comparacion-con-frameworks-en-otros-lenguajes-de-programacion",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#comparacion-con-frameworks-en-otros-lenguajes-de-programacion","aria-hidden":"true"},"#"),e(" Comparaci\xF3n con Frameworks en otros lenguajes de programaci\xF3n")],-1),fe=a("p",null,"Hay razones para favorecer un lenguaje de programaci\xF3n diferente a TypeScript. Lo m\xE1s importante es que te guste trabajar con tus herramientas y lenguajes. Si est\xE1s decidido a seguir con otra cosa, entonces puedes dejar de leer aqu\xED.",-1),qe=a("p",null,"Dado que todav\xEDa est\xE1s leyendo, es posible que quieras saber por qu\xE9 grammY est\xE1 escrito en TypeScript, y por qu\xE9 tal vez deber\xEDas considerar elegir este lenguaje para tu bot, tambi\xE9n.",-1),ve=a("p",null,"Esta secci\xF3n resumir\xE1 c\xF3mo TypeScript tiene algunas ventajas sobre otros lenguajes cuando se trata de desarrollar bots para Telegram. El otro lenguaje principal que se utiliza para desarrollar bots de chat para Telegram es Python, as\xED que nos limitaremos a \xE9l por ahora. Algunos de los siguientes puntos son m\xE1s bien opiniones personales que hechos objetivos. La gente tiene diferentes gustos, as\xED que toma esta secci\xF3n con un grano de sal.",-1),ye=t("<li><p><strong>Mejores herramientas de edici\xF3n.</strong> Las anotaciones de tipo de grammY son excepcionales. Aunque Python introdujo tipos en su versi\xF3n 3.5, no se utilizan tan com\xFAnmente en el ecosistema como es el caso de JavaScript/TypeScript. Por lo tanto, no se pueden comparar con lo que se obtiene fuera de la caja con grammY y las bibliotecas que lo acompa\xF1an. Con los tipos viene el autocompletado en cada paso del desarrollo, as\xED como \xFAtiles tooltips con explicaciones y enlaces.</p></li><li><p><strong>M\xE1s f\xE1cil de escalar la base de c\xF3digo.</strong> El sistema de tipos tiene una segunda ventaja: te permite escalar la base de c\xF3digo de tu bot. Esto es mucho m\xE1s dif\xEDcil de hacer para proyectos escritos en un lenguaje con peor seguridad de tipos.</p></li><li><p><strong>M\xE1s f\xE1cil de escalar la carga.</strong> Si tu bot empieza a ser realmente popular, es significativamente m\xE1s f\xE1cil escalar bots escritos en JS que en Python.</p></li><li><p><strong>Mayor capacidad de respuesta de tu bot.</strong> El motor V8 hace que JavaScript sea el lenguaje de scripting m\xE1s r\xE1pido del universo observable. Si quieres que tu bot sea lo m\xE1s r\xE1pido posible sin dejar de disfrutar de un lenguaje din\xE1mico, entonces grammY es tu mejor opci\xF3n.</p></li>",4),je=a("strong",null,[e("Soporte de "),a("code",null,"async"),e("/"),a("code",null,"await"),e(".")],-1),ke=e(" Este es un patr\xF3n de programaci\xF3n muy popular para domar la concurrencia. Los \xFAltimos a\xF1os muestran una fuerte tendencia hacia la programaci\xF3n as\xEDncrona. El mayor framework de bots para Python, PTB, "),Te={href:"https://t.me/pythontelegrambotchannel/94",target:"_blank",rel:"noopener noreferrer"},we=e("anunci\xF3 su migraci\xF3n"),xe=e(" a la programaci\xF3n as\xEDncrona en enero de 2021, que se espera que tal vez lleve \u201C2 a\xF1os\u201D. grammY ya est\xE1 ah\xED. (Otros frameworks de Python menos conocidos pueden ser m\xE1s r\xE1pidos en la transici\xF3n. Ignora este punto si est\xE1s usando un framework de Python que tiene soporte para "),Ye=a("code",null,"async",-1),Se=e("/"),ze=a("code",null,"await",-1),Ee=e(")."),Le=a("h2",{id:"como-estar-en-desacuerdo-con-esta-comparacion",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#como-estar-en-desacuerdo-con-esta-comparacion","aria-hidden":"true"},"#"),e(" C\xF3mo estar en desacuerdo con esta comparaci\xF3n")],-1),Ae=e("Si crees que algo est\xE1 mal en esta p\xE1gina, \xA1no desesperes! \xA1Por favor, h\xE1znoslo saber en el "),Pe={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},Ce=e("chat de grupo"),Ne=e("! Nos encantar\xEDa que nos informaras sobre tu perspectiva. Naturalmente, tambi\xE9n puedes editar esta p\xE1gina en GitHub, o presentar una incidencia all\xED para se\xF1alar errores o sugerir otras cosas. Esta p\xE1gina siempre tendr\xE1 espacio para ser m\xE1s objetiva, y m\xE1s justa.");function Be(Ie,Me){const s=i("ExternalLinkIcon"),n=i("RouterLink");return l(),d("div",null,[p,a("p",null,[m,a("a",g,[h,o(s)]),_,a("a",b,[f,o(s)]),q]),v,y,j,k,a("p",null,[T,a("a",w,[x,o(s)]),Y]),S,a("p",null,[z,E,o(n,{to:"/es/advanced/transformers.html"},{default:r(()=>[L]),_:1}),A]),P,C,N,a("p",null,[B,o(n,{to:"/es/guide/middleware.html"},{default:r(()=>[I]),_:1}),M]),D,a("p",null,[V,o(n,{to:"/es/guide/filter-queries.html"},{default:r(()=>[J]),_:1}),H,o(n,{to:"/es/guide/errors.html#error-boundaries"},{default:r(()=>[F]),_:1}),O,o(n,{to:"/es/advanced/transformers.html"},{default:r(()=>[R]),_:1}),G]),U,K,Q,a("ul",null,[a("li",null,[W,o(n,{to:"/es/"},{default:r(()=>[X]),_:1}),Z]),$,a("li",null,[ee,a("a",ae,[oe,o(s)]),se])]),ne,a("p",null,[re,te,ie,o(n,{to:"/es/guide/"},{default:r(()=>[ce]),_:1}),le]),de,ue,pe,a("p",null,[me,a("a",ge,[he,o(s)]),_e]),be,fe,qe,ve,a("ol",null,[ye,a("li",null,[a("p",null,[je,ke,a("a",Te,[we,o(s)]),xe,Ye,Se,ze,Ee])])]),Le,a("p",null,[Ae,a("a",Pe,[Ce,o(s)]),Ne])])}const Ve=c(u,[["render",Be],["__file","comparison.html.vue"]]);export{Ve as default};
