import{_ as i,r,o as d,c as l,a as o,b as s,w as n,d as e}from"./app.c0ce12a9.js";const c={},_=o("h1",{id:"lista-de-verificaciones-en-despliegues",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#lista-de-verificaciones-en-despliegues","aria-hidden":"true"},"#"),e(" Lista de verificaciones en despliegues")],-1),u=o("p",null,"Lista de cosas a tener en cuanta cuando vayas a alojar un bot grande.",-1),h=o("blockquote",null,[o("p",null,[e("Puede que estes interesado en nuestras gu\xEDas para alojar un bot. Mira "),o("strong",null,"Alojamiento / Tutoriales"),e(" en el principio de la p\xE1gina para ver algunas de las plataformas que ya tienen gu\xEDas dedicadas.")])],-1),p=o("h2",{id:"errores",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#errores","aria-hidden":"true"},"#"),e(" Errores")],-1),m=e("Instala un manejador de errores con "),g=o("code",null,[e("bot"),o("wbr"),e(".catch")],-1),f=e(" (long polling) o en tu web framework (webhooks)."),b=o("li",null,[e("Usa "),o("code",null,"await"),e(" en todas las promesas e instala "),o("strong",null,"linting"),e(", con reglas que obliguen a esto, as\xED nunca te olvidas.")],-1),v=o("h2",{id:"envio-de-mensajes",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#envio-de-mensajes","aria-hidden":"true"},"#"),e(" Env\xEDo de mensajes")],-1),w=e("Env\xEDa ficheros por ruta o "),k=o("code",null,"Buffer",-1),y=e(" en vez de "),x=o("code",null,"Stream",-1),q=e(",o al menos estate seguro de que "),z=e("conoces las trampas"),C=e("."),j=e("Usa "),E=o("code",null,[e("bot"),o("wbr"),e('.on("callback'),o("wbr"),e("_query:"),o("wbr"),e('data")')],-1),U=e(" como un manejador alternativo para "),A=e("reaccionar a todas las consultas de devoluci\xF3n de llamada"),S=e("."),L=e("Usa el "),B=o("code",null,[e("transformer"),o("wbr"),e("-throttler")],-1),I=e(" plugin"),P=e(" para prevenir llegar a los l\xEDmites."),T=o("strong",null,"Optional.",-1),D=e(" Considera usar el "),N=o("code",null,[e("auto"),o("wbr"),e("-retry")],-1),R=e(" plugin"),V=e(" para autom\xE1ticamente manejar los errores de espera."),Y=o("h2",{id:"escalando-servidores",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#escalando-servidores","aria-hidden":"true"},"#"),e(" Escalando servidores")],-1),M=o("p",null,"Esto depende del tipo de despliegue.",-1),F=o("h3",{id:"long-polling",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),e(" Long Polling")],-1),K=e("Usa grammY runner"),O=o("wbr",null,null,-1),W=e("."),G=e("Usa "),H=o("code",null,"sequentialize",-1),J=e(" con el mismo id de sesi\xF3n que tu middleware de sesi\xF3n."),Q=e("Revise las opciones de configuraci\xF3n de "),X=o("code",null,"run",-1),Z=e(" ("),$={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/run",target:"_blank",rel:"noopener noreferrer"},ee=e("referencia de la API"),oe=e(") y aseg\xFArese de que se ajustan a sus necesidades, o incluso considere la posibilidad de componer su propio corredor a partir de "),se={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSource",target:"_blank",rel:"noopener noreferrer"},te=e("sources"),ne=e(" y "),ae={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSink",target:"_blank",rel:"noopener noreferrer"},re=e("sinks"),ie=e(". Lo principal a tener en cuenta es la carga m\xE1xima que quiere aplicar a su servidor, es decir, cu\xE1ntas actualizaciones pueden procesarse al mismo tiempo."),de=e("Considere implementar un "),le=e("apagado gradual"),ce=e(" para parar tu bot cuando tu quieres terminar con \xE9l (e.j. cambiar a una nueva versi\xF3n)."),_e=o("h3",{id:"webhooks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),e(" Webhooks")],-1),ue=e("Aseg\xFArese de no realizar ninguna operaci\xF3n de larga duraci\xF3n en su middleware, como las transferencias de archivos de gran tama\xF1o. "),he=e("Esto lleva a errores de tiempo de espera"),pe=e(" para los webhooks, y el procesamiento de actualizaciones duplicadas, ya que Telegram reenviar\xE1 las actualizaciones no reconocidas. Considere la posibilidad de utilizar un sistema de cola de tareas en su lugar."),me=e("Familiar\xEDcese con la configuraci\xF3n de "),ge=o("code",null,[e("webhook"),o("wbr"),e("Callback")],-1),fe=e(" ("),be={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/webhookCallback",target:"_blank",rel:"noopener noreferrer"},ve=e("referencia de la API"),we=e(")."),ke=e("Si cambiaste la opci\xF3n "),ye=o("code",null,[e("get"),o("wbr"),e("Session"),o("wbr"),e("Key")],-1),xe=e(" por la de tu sesi\xF3n, "),qe=e("usa "),ze=o("code",null,"sequentialize",-1),Ce=e(" con la misma funci\xF3n de resoluci\xF3n de claves de sesi\xF3n que su middleware de sesi\xF3n"),je=e("."),Ee=e("Si se ejecuta en una plataforma sin servidor o de autoescalado, "),Ue={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotConfig",target:"_blank",rel:"noopener noreferrer"},Ae=e("establezca la informaci\xF3n del bot"),Se=e(" para prevenir excesivas llamadas "),Le=o("code",null,[e("get"),o("wbr"),e("Me")],-1),Be=e("."),Ie=e("Considere utilizar "),Pe=e("webhook replies"),Te=e("."),De=o("h2",{id:"sesiones",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#sesiones","aria-hidden":"true"},"#"),e(" Sesiones")],-1),Ne=e("Considere usar "),Re=o("code",null,[e("lazy"),o("wbr"),e("Sessions")],-1),Ve=e(" explicadas "),Ye=e("aqu\xED"),Me=e("."),Fe=o("li",null,[e("Use la opci\xF3n "),o("code",null,"storage"),e(" para configurar su adaptador de almacenamiento, de lo contrario todos los datos se perder\xE1n cuando el proceso del bot se detenga.")],-1),Ke=o("h2",{id:"tests",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#tests","aria-hidden":"true"},"#"),e(" Tests")],-1),Oe=o("p",null,"Escribe tests para tu bot. Esto se puede hacer con grammY as\xED",-1),We=e("Simular las peticiones salientes de la API utilizando "),Ge=e("funciones de transformaci\xF3n"),He=e("."),Je=e("Define y env\xEDa ejemplos de actualizaci\xF3n a tu bot via "),Qe=o("code",null,[e("bot"),o("wbr"),e(".handle"),o("wbr"),e("Update")],-1),Xe=e(" ("),Ze={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},$e=e("referencia API"),eo=e("). Considere inspirarse en "),oo={href:"https://core.telegram.org/bots/webhooks#testing-your-bot-with-updates",target:"_blank",rel:"noopener noreferrer"},so=e("estos ejemplos"),to=e(" proporcionados por el equipo de Telegram."),no=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"Contribuye al framework de testing."),o("p",null,"Aunque grammY proporciona lo necesario para empezar a escribir tests, ser\xEDa muy \xFAtil tener un framework para los bots. Este es un territorio novedoso, tales frameworks no existen en gran medida. \xA1Esperamos tus contribuciones!.")],-1);function ao(ro,io){const t=r("RouterLink"),a=r("ExternalLinkIcon");return d(),l("div",null,[_,u,h,p,o("ol",null,[o("li",null,[s(t,{to:"/es/guide/errors.html"},{default:n(()=>[m,g,f]),_:1})]),b]),v,o("ol",null,[o("li",null,[w,k,y,x,q,s(t,{to:"/es/advanced/transformers.html#casos-de-uso-de-las-funciones-de-transformaci%C3%B3n"},{default:n(()=>[z]),_:1}),C]),o("li",null,[j,E,U,s(t,{to:"/es/plugins/keyboard.html#respondiendo-a-los-clics"},{default:n(()=>[A]),_:1}),S]),o("li",null,[L,s(t,{to:"/es/plugins/transformer-throttler.html"},{default:n(()=>[B,I]),_:1}),P]),o("li",null,[T,D,s(t,{to:"/es/plugins/auto-retry.html"},{default:n(()=>[N,R]),_:1}),V])]),Y,M,F,o("ol",null,[o("li",null,[s(t,{to:"/es/plugins/runner.html"},{default:n(()=>[K,O,W]),_:1})]),o("li",null,[s(t,{to:"/es/advanced/scaling.html#la-concurrencia-es-dif%C3%ADcil"},{default:n(()=>[G,H,J]),_:1})]),o("li",null,[Q,X,Z,o("a",$,[ee,s(a)]),oe,o("a",se,[te,s(a)]),ne,o("a",ae,[re,s(a)]),ie]),o("li",null,[de,s(t,{to:"/es/advanced/reliability.html#apagado-correcto"},{default:n(()=>[le]),_:1}),ce])]),_e,o("ol",null,[o("li",null,[ue,s(t,{to:"/es/guide/deployment-types.html#terminar-las-solicitudes-de-webhooks-a-tiempo"},{default:n(()=>[he]),_:1}),pe]),o("li",null,[me,ge,fe,o("a",be,[ve,s(a)]),we]),o("li",null,[ke,ye,xe,s(t,{to:"/es/advanced/scaling.html#la-concurrencia-es-dif%C3%ADcil"},{default:n(()=>[qe,ze,Ce]),_:1}),je]),o("li",null,[Ee,o("a",Ue,[Ae,s(a)]),Se,Le,Be]),o("li",null,[Ie,s(t,{to:"/es/guide/deployment-types.html#webhook-reply"},{default:n(()=>[Pe]),_:1}),Te])]),De,o("ol",null,[o("li",null,[Ne,Re,Ve,s(t,{to:"/es/plugins/session.html#lazy-sessions"},{default:n(()=>[Ye]),_:1}),Me]),Fe]),Ke,Oe,o("ol",null,[o("li",null,[We,s(t,{to:"/es/advanced/transformers.html"},{default:n(()=>[Ge]),_:1}),He]),o("li",null,[Je,Qe,Xe,o("a",Ze,[$e,s(a)]),eo,o("a",oo,[so,s(a)]),to])]),no])}const co=i(c,[["render",ao],["__file","deployment.html.vue"]]);export{co as default};
