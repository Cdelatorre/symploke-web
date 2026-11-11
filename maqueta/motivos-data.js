/* Symploké · contenido de los motivos de consulta (maqueta).
   Todo es BORRADOR. Las frases del síntoma están escritas como las teclea la gente en Google
   (autocompletado de Google España, consultado el 28/10/2026); falta contrastarlas con Google Trends.
   Lo científico va marcado [VERIFICAR]. Fotos provisionales de Wikimedia Commons (créditos en FOTOS).
   Cada motivo tiene tres capas: lo que se siente, qué dice la ciencia y más allá de la etiqueta.
   bases: párrafos de «Qué dice la ciencia»; cada ciencia se nombra de pasada, en negrita, dentro del texto.
   basesIntro (opcional): entrada propia de esa sección (texto o lista de párrafos); si falta, motivo.html pone una genérica.
   quotes: frases destacadas que se intercalan entre los párrafos de «Qué dice la ciencia» (de momento,
   del mismo autocompletado de Google; se añadirán otras frases luminosas). Una cita con autor va como
   ['texto literal','autor'] y motivo.html pone la firma debajo; '' deja ese hueco sin frase. */
(function(){
'use strict';
var V='';   /* 2026-11-08: marcas [VERIFICAR] retiradas de la web a petición del usuario (antes: '<span class="verify">[VERIFICAR]</span>') */
function v(t){return '';}   /* antes devolvía la marca [VERIFICAR …] */

window.MOTIVOS=[
{
  slug:'ansiedad', name:'Ansiedad y estrés', sym:'Tengo ansiedad y no sé por qué',
  /* posicionamiento: título y descripción para Google, y encabezado de la página */
  seoTitle:'Tratamiento de la ansiedad y el estrés en Madrid y online',
  seoDesc:'¿Ansiedad sin saber por qué? Ataques de ansiedad, estrés o ansiedad y depresión: te ayudamos a entender qué te pasa. Centro sanitario en Madrid y online.',
  h1:'Terapia para la ansiedad y el estrés',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  revisada:true,   /* texto ya revisado: sin la marca «borrador» */
  pagina:'ansiedad.html',   /* página fija con dirección limpia; motivo.html?m=ansiedad lleva a ella */
  enfoqueDe:'de la ansiedad',
  k:'ansiedad estres nervios angustia no puedo parar de pensar estoy todo el dia pensando me obsesiono con las ideas tengo ansiedad y no se por que le doy vueltas a todo pienso demasiado ataque de ansiedad me falta el aire taquicardia panico agobio miedo fobia obsesiones psicosomatico trabajo laboral autocontrol burnout estres laboral estres postraumatico trauma',
  feel:['Tengo ansiedad y no sé por qué','No puedo parar de pensar','Estoy todo el día pensando','Me obsesiono con las ideas'],
  /* frases propias (2026-11-08); antes eran citas literales de Marino Pérez Álvarez, guardadas en citas-para-la-web.md */
  quotes:[
    'Dividir las emociones en “negativas” y “positivas” es una visión demasiado simplista. Las emociones, en todo su espectro, pueden ser adaptativas y útiles para orientarnos',
    'La ansiedad puede ser una señal de alerta ante una situación conflictiva ante la que actuar'
  ],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:'Sentir ansiedad es normal. La necesitamos para reaccionar ante lo que nos rodea: nos pone en alerta, nos prepara y nos empuja a actuar. El problema empieza cuando se vuelve insostenible, cuando no encontramos su foco o cuando no podemos hacer nada con ella.',
  bases:[
    'Ante una amenaza, el cuerpo se prepara para huir o defenderse: se acelera el corazón, cambia la respiración, se tensan los músculos. Por eso la ansiedad puede notarse como presión en el pecho, sensación de ahogo, mareo o nudo en el estómago, y si se mantiene, <a href="insomnio.html">insomnio</a> o irritabilidad. <strong>Los estudios de biología y neurología</strong> muestran que ese aviso llega muy deprisa, antes de que lo pensemos; de ahí que a veces aparezca «sin saber por qué». Es lo que se vive en un ataque de ansiedad o de pánico. Pero sería <strong>reduccionista</strong> instalarse ahí: no es el cerebro el que se angustia por su cuenta, sino la persona entera en unas situaciones concretas.',
    'Darle vueltas a todo, comprobar una y otra vez, evitar lo que asusta… <strong>Los estudios de psicología</strong> muestran que son intentos de control que alivian un momento pero alimentan el círculo: así se mantienen muchos miedos, fobias y obsesiones. A veces aparece además la <strong>hiperreflexividad</strong>: estar pendientes de cada latido, de cada pensamiento. Cuanto más nos miramos por dentro, menos espacio queda para vivir hacia fuera. Muchas veces esto desemboca en el aislamiento y la <a href="depresion.html">depresión</a>.',
    'No es que la ansiedad esté dentro de ti como una pieza averiada: eres tú quien está dentro de una situación, o de varias a la vez, que te generan ansiedad. <strong>Los estudios de sociología</strong> la asocian a la precariedad, la prisa o la presión por rendir. Por eso incluimos aquí el <strong>estrés laboral o burnout</strong>. También puede ocurrir que, después de una experiencia muy dura, el cuerpo siga en alerta como si el peligro no hubiera pasado: es lo que se conoce como <strong>estrés postraumático</strong>.'
  ],
  /* apartados de tratamiento (2026-11-09, elegidos por el usuario tras el estudio de competencia: 1B, 2A, 3B, 4A sin grupos, 5B) */
  /* PRUEBA (2026-11-09): tipos de ansiedad, para ver cómo queda; pendiente de que el usuario la apruebe */
  tipos:{titulo:'Tipos de ansiedad',
    intro:'Los manuales clínicos distinguen varios cuadros. Los nombramos porque así se buscan y se diagnostican, pero en cada persona se mezclan, y lo que más nos importa es en qué situaciones aparecen.',
    items:[
    ['Ansiedad generalizada','Preocupación constante por muchas cosas a la vez (el trabajo, la salud, la familia, el dinero), difícil de frenar, con tensión, cansancio y problemas de sueño. Se habla de ella cuando dura meses.','generalizada'],
    ['Ataques de ansiedad y pánico','Una subida brusca de miedo intenso, con palpitaciones, ahogo, mareo o sensación de irrealidad, que llega a su punto máximo en pocos minutos. Después, lo que más pesa suele ser el miedo a que vuelva.','panico'],
    ['Agorafobia','Miedo a lugares o situaciones de los que sería difícil salir o recibir ayuda: el metro, las multitudes, las colas, salir solo de casa. A menudo va unida al pánico.','agorafobia'],
    ['Ansiedad social','Miedo a ser juzgado o a hacer el ridículo delante de otros: hablar en público, las reuniones, comer acompañado. Muchas veces se confunde con timidez.','social'],
    ['Fobias','Miedo intenso a algo concreto (volar, la sangre, los animales, las alturas) que lleva a evitarlo, aunque sepamos que no es tan peligroso.','fobias'],
    ['Obsesiones y TOC','Pensamientos que se imponen y causan malestar, y rituales (comprobar, lavar, ordenar) para calmarlos que acaban alimentándolos. Hoy los manuales lo clasifican aparte, pero lo incluimos aquí porque se vive como ansiedad.','toc'],
    ['Hipocondría o ansiedad por la salud','Miedo persistente a tener una enfermedad grave, con revisiones del cuerpo, búsquedas en internet y visitas al médico que tranquilizan durante poco tiempo.','hipocondria'],
    ['Estrés laboral y burnout','Agotamiento, distancia con el trabajo y sensación de no rendir, después de mucho tiempo bajo presión.','burnout'],
    ['Estrés postraumático','Tras una experiencia muy dura, el cuerpo sigue en alerta: recuerdos que vuelven, pesadillas, sobresaltos y evitar todo lo que lo recuerda.','postraumatico']
  ]},
  proceso:{titulo:'Cómo trabajamos la ansiedad', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender tu ansiedad.','Buscamos a qué situaciones responde, qué la mantiene y de qué te está avisando.'],
    ['Trabajarla.','Con las herramientas que encajan contigo, en sesión y en tu día a día. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas medicación o conviene valorarla, nos coordinamos con tu médico o psiquiatra.'],   /* añadido 2026-11-09, como en depresión e insomnio */
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando la ansiedad deja de mandar, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual','Exposición gradual a lo que evitas y revisión de las anticipaciones que mantienen el miedo.'],
    ['Terapia de aceptación y compromiso (ACT)','Dejar la lucha contra los síntomas para volver a lo que te importa.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también las situaciones en las que aparece la ansiedad (el trabajo, la familia, la pareja) y los conflictos entre ellas.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades.'},   /* grupos de ansiedad: habrá en el futuro; de momento, solo terapia individual */
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas: 6 nuevas (2026-11-09: 6.1B, 6.2A, 6.3B, 6.4A provisional, 6.5A, 6.6B), ordenadas de más a menos buscadas */
  faqDesplegable:true,   /* PRUEBA 2026-11-09: preguntas en desplegables (opción A, todas cerradas), solo en ansiedad para verlo */
  faq:[
    ['¿Cómo sé si lo que tengo es ansiedad?','Suele notarse en el cuerpo (palpitaciones, presión en el pecho, ahogo, mareo, nudo en el estómago), en la cabeza (preocupación constante, darle vueltas a todo, miedo a perder el control) y en lo que haces (evitar sitios o situaciones, comprobar una y otra vez). Si te pasa a menudo y te limita, merece la pena consultarlo. Conviene descartar antes otras causas con tu médico.','sintomas'],
    ['¿Por qué tengo ansiedad sin motivo?','Que no encuentres el motivo no significa que no lo haya. La ansiedad casi siempre tiene dirección: el trabajo, la familia, la pareja, una decisión pendiente. Lo que ocurre es que el aviso llega antes que la explicación. Buscar ese foco es una de las primeras cosas que hacemos.'],
    ['¿Qué hago si me da un ataque de ansiedad?','Durante el ataque, lo más útil suele ser no luchar contra él: dejar que suba y baje, respirar despacio y quedarte donde estás si puedes. Huir alivia en el momento, pero refuerza el miedo para la próxima vez. Si es la primera vez o el dolor en el pecho no cede, llama al 112.'],
    ['¿Por qué la ansiedad empeora por la noche?','Por la noche se acaban las distracciones y quedan los pensamientos. El cansancio baja la tolerancia y, al intentar dormir, prestamos más atención al cuerpo. Si se repite, puede convertirse en <a href="insomnio.html">insomnio por ansiedad</a>.'],
    ['¿Cuándo conviene ir al psicólogo por ansiedad?','Cuando dura semanas, te impide hacer cosas que antes hacías o aparece en forma de ataques que te asustan. No hace falta esperar a que sea grave.'],
    ['¿Se cura la ansiedad?','La ansiedad en sí no es una enfermedad, y hay partes de ella que nos son útiles. Lo que sí es necesario es entenderla y saber de dónde viene, para que no nos genere sufrimiento.'],
    ['¿Cuántas sesiones hacen falta?','Depende de cada caso. Muchas personas notan cambios en las primeras semanas, cuando empiezan a entender su ansiedad. Empezamos con sesiones semanales y, cuando notas avances, las espaciamos. En la primera entrevista te damos una idea orientativa y la revisamos sobre la marcha.'],
    ['¿La terapia online funciona igual?','Para la ansiedad, la terapia online logra progresos comparables a la presencial.'],
    ['¿Hace falta tomar medicación?','En terapia psicológica no se recetan fármacos. Si ya tomas medicación o conviene valorarla, nos coordinamos con tu médico.'],
    ['¿La ansiedad y la depresión van juntas?','A menudo sí: cuando la ansiedad dura mucho, puede acabar en desgana, aislamiento y tristeza. Cuando aparecen las dos, las trabajamos a la vez.'],   /* añadida 2026-11-09 («ansiedad y depresión» se busca mucho) */
    ['¿Puedo pedir la baja por ansiedad?','Sí. La baja laboral la da tu médico de atención primaria, no el psicólogo. Nosotros podemos acompañarte durante ese tiempo, preparar la vuelta al trabajo y, si hace falta, hacer un informe psicológico. Si la ansiedad tiene que ver con un conflicto laboral o con acoso y hace falta un informe pericial, podemos hacerlo desde la psicología forense, con un profesional distinto de tu terapeuta, para que sea imparcial.'],   /* 6.4 B, elegida 2026-11-09: aprovechar que Daniel es psicólogo forense */
    ['¿Atendéis la ansiedad cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  together:'La ansiedad es <strong>multicausal</strong>, es decir, se produce por diversas causas. Lo que nos interesa es saber cómo se entretejen en tu caso: qué te pasa en el cuerpo, qué te dices, qué está ocurriendo en tu vida. La ansiedad casi siempre tiene dirección —el trabajo, la familia, <a href="pareja.html">la pareja</a>, los amigos, los proyectos personales—, aunque al principio no se vea. Te ayudamos a aclarar a qué situaciones responde y de qué te está avisando, para que puedas relacionarte con ella de otra manera. Se trata de dejar la lucha contra los síntomas y volver a orientarte e involucrarte en los distintos ámbitos de tu vida. Buscamos juntos qué partes de la ansiedad te están <strong>amordazando</strong> y cómo transformarlas en <strong>habilitadores</strong> que encajen con tus esferas vitales y te permitan avanzar.',
  cta:'Podemos ayudarte a dejar de darle vueltas a todo y a que la ansiedad no decida por ti.',
  intro:'Para trabajar la ansiedad hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  science:'Se suele distinguir el miedo, ante un peligro presente, de la ansiedad, ante uno anticipado. Cuando se mantiene y limita la vida diaria, los manuales clínicos describen varios cuadros: ansiedad generalizada, pánico, ansiedad social o fobias, entre otros. Es uno de los motivos de consulta más frecuentes. '+V,
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Pérez Álvarez (2006), «La terapia de conducta de tercera generación»; (2008), «Hyperreflexivity as a condition of mental disorder»; (2012), «La psicología positiva: magia simpática»; (2019), «Diagnóstico más allá de los síntomas» */
  beyond:'Decir «tengo ansiedad» la convierte en una pieza averiada que llevamos dentro. Suele ser más útil verla como algo que hacemos —anticipar— y preguntarse hacia dónde: casi siempre tiene dirección postal (el trabajo, la familia, la pareja, el dinero). A veces la anticipación se vuelve sobre sí misma: vigilar cada latido, pensar en cómo estoy pensando. Y las ideas que parecen «irracionales» también tienen sus razones.',
  approaches:[
    ['Terapia cognitivo-conductual','Exposición gradual a lo que se evita y revisión de las anticipaciones que mantienen el miedo.','amplia en varios cuadros de ansiedad'],
    ['Terapias contextualistas y ACT','Dejar de pelear con la ansiedad para volver a hacer lo que importa, aunque esté presente.','creciente'],
  ],
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable en esta página (tipos o preguntas); un slug lleva a otra terapia */
  subs:[['Ansiedad generalizada','#generalizada'],['Ataques de ansiedad y pánico','#panico'],['Agorafobia','#agorafobia'],['Ansiedad social','#social'],['Obsesiones y TOC','#toc'],['Miedos y fobias','#fobias'],['Hipocondría o ansiedad por la salud','#hipocondria'],['Estrés laboral y burnout','#burnout'],['Estrés postraumático','#postraumatico'],['Insomnio por ansiedad','insomnio'],['Ansiedad que se nota en el cuerpo','#sintomas']],
  alt:'Mujer caminando tranquila por un paseo arbolado con luz de tarde',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:'Sentir ansiedad es normal: nos pone en alerta y nos empuja a actuar. El problema empieza cuando se vuelve insostenible, cuando no encontramos su foco o cuando no podemos hacer nada con ella.',
    bases:[
      '<strong>Los estudios de biología y neurología</strong> muestran que, ante una amenaza, el cuerpo se prepara para huir o defenderse, y ese aviso llega antes de que lo pensemos. Por eso la ansiedad se nota como presión en el pecho, ahogo o nudo en el estómago, y a veces aparece «sin saber por qué». Pero no es el cerebro el que se angustia por su cuenta, sino la persona entera en unas situaciones concretas.',
      'Darle vueltas a todo, comprobar, evitar lo que asusta… <strong>Los estudios de psicología</strong> muestran que son intentos de control que alivian un momento pero alimentan el círculo. Cuanto más nos miramos por dentro, menos espacio queda para vivir hacia fuera, y a veces eso desemboca en la <a href="depresion.html">depresión</a>.',
      '<strong>Los estudios de sociología</strong> la asocian a la precariedad, la prisa o la presión por rendir. La ansiedad no es una pieza averiada dentro de ti: eres tú quien está dentro de unas situaciones que te la generan.'
    ],
    together:'La ansiedad es <strong>multicausal</strong>: lo que nos interesa es cómo se entretejen sus causas en tu caso. Casi siempre tiene dirección —el trabajo, la familia, <a href="pareja.html">la pareja</a>, los proyectos personales—, aunque al principio no se vea. Te ayudamos a aclarar a qué responde y de qué te está avisando, para dejar la lucha contra los síntomas y transformar lo que te <strong>amordaza</strong> en <strong>habilitadores</strong> que te permitan avanzar.',
    tipos:{titulo:'Tipos de ansiedad más frecuentes', intro:'En cada persona se mezclan; lo que más nos importa es en qué situaciones aparecen.', items:[
      ['Ansiedad generalizada','preocupación constante por muchas cosas a la vez, difícil de frenar.','generalizada'],
      ['Ataques de ansiedad y pánico','una subida brusca de miedo intenso, con palpitaciones o ahogo, y después el miedo a que vuelva.','panico'],
      ['Agorafobia','miedo a sitios de los que sería difícil salir, como el metro o las multitudes.','agorafobia'],
      ['Ansiedad social','miedo a ser juzgado o a hacer el ridículo delante de otros.','social'],
      ['Miedos y fobias','miedo intenso a algo concreto (volar, la sangre, las alturas) que lleva a evitarlo.','fobias'],
      ['Obsesiones y TOC','pensamientos que se imponen y rituales para calmarlos que acaban alimentándolos.','toc'],
      ['Hipocondría o ansiedad por la salud','miedo persistente a tener una enfermedad grave, que las revisiones solo calman un rato.','hipocondria'],
      ['Estrés laboral y burnout','agotamiento y distancia con el trabajo tras mucho tiempo bajo presión.','burnout'],
      ['Estrés postraumático','después de una experiencia muy dura, el cuerpo sigue en alerta.','postraumatico'],
      ['Insomnio por ansiedad','las preocupaciones no te dejan dormir; lo trabajamos también en <a href="insomnio.html">insomnio</a>.','insomnio-ansiedad']
    ]},
    trabajo:{titulo:'Cómo trabajamos la ansiedad',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender tu ansiedad.','A qué situaciones responde, qué la mantiene y de qué te está avisando.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando notas avances. Si tomas medicación, nos coordinamos con tu médico.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual y las terapias contextuales, como la de aceptación y compromiso (ACT). Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'depresion', name:'Depresión y estado de ánimo', sym:'No tengo ganas de levantarme de la cama',
  seoTitle:'Psicólogo y tratamiento de la depresión en Madrid y online',
  seoDesc:'¿Sin ganas de nada, tristeza que no se va o sensación de vacío? Tratamiento psicológico de la depresión y la ansiedad. Centro sanitario en Madrid y online.',
  h1:'Terapia para la depresión y el estado de ánimo',   /* encabezado a todo el ancho, en una línea, como en ansiedad */
  pagina:'depresion.html',   /* página fija; motivo.html?m=depresion lleva a ella */
  enfoqueDe:'de la depresión',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',   /* frase junto a «Quizá te suene»; si falta, «Es frecuente sentirse así» */
  revisada:true,   /* sin la marca «borrador» */
  k:'depresion estado de animo tristeza no tengo ganas de levantarme de la cama no veo futuro no tengo ganas de vivir no tengo ganas de nada sin ganas solo quiero dormir me siento vacio vacia solo sola triste apatia desanimo cansancio depresion mayor distimia depresion posparto depresion estacional anhedonia no disfruto de nada falta de motivacion soledad no deseada crisis existencial ansiedad y depresion',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su tipo en esta página; ansiedad y duelo llevan a su terapia */
  subs:[['Depresión mayor','#mayor'],['Distimia o tristeza que dura años','#distimia'],['Ansiedad y depresión','ansiedad'],['Apatía y falta de motivación','#apatia'],['No disfrutar de nada (anhedonia)','#apatia'],['Sensación de vacío','#vacio'],['Soledad no deseada','#soledad'],['Crisis existencial','#existencial'],['Depresión posparto','#posparto'],['Depresión estacional','#estacional'],['Depresión tras una pérdida','duelo'],['Depresión en personas mayores','#mayores']],
  feel:['No tengo ganas de levantarme de la cama','No veo futuro posible','No valgo para nada','No tengo ganas de vivir'],
  /* citas literales de Marino Pérez Álvarez: (2019) «Diagnóstico más allá de los síntomas», pág. 34 del PDF;
     (2007) «La activación conductual y la desmedicalización de la depresión», págs. 5 y 7 del PDF (ver citas-para-la-web.md) */
  quotes:[
    'La depresión no podemos verla exclusivamente como algo que tenemos, sino como una serie de situaciones adversas en las que estamos inmersos y que generan esa respuesta',   /* frase propia (2026-11-08); antes, la cita literal de Pérez Álvarez (2019): «La depresión no es algo que uno tiene, según a menudo se da a entender, como si uno tuviera dentro de sí una condición patógena […] sino una situación en la que uno está» */
    'La terapia nos enseña a seguir involucrados en nuestras esferas vitales, a pesar de nuestros estados emocionales',
    'Muchas veces la situación depresiva puede suponer un momento de “descanso forzoso” tras periodos de alto estrés'
  ],
  /* frases propias (2026-11-08); antes, citas literales de Pérez Álvarez (2007): «La terapia trata de enseñar al cliente a ser activo, a pesar de sus estados emocionales»
     y «La situación depresiva misma puede suponer un respiro, tregua, descanso, “ahorro de energía” en esfuerzos inútiles» */
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:[
    'Cuando estamos inundados por la depresión, nada tiene sentido y el futuro parece cerrado. Y no es pereza ni debilidad: la depresión cambia cómo se vive el mundo y cómo lo concebimos. Nada nos atrae y el cuerpo pesa como una mochila llena de piedras, de forma que cuesta mucho levantarse, aunque uno quiera.',
    'La depresión no es algo que uno tiene dentro: es una situación en la que uno está. Tiene que ver con lo que te ha pasado y con lo que te pasa, y precisamente por eso podemos hacer algo con ella.',
    'Como casi todo lo que nos pasa, la depresión es <strong>multicausal</strong>. Por lo tanto, nuestro enfoque es <strong>pluralista</strong>: nos quedamos con lo mejor de cada disciplina, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    'El ánimo bajo no está solo en la cabeza. Hoy sabemos, <strong>por los estudios de biología</strong>, que la depresión afecta al <a href="insomnio.html">sueño</a>, al apetito, al cansancio y al cuerpo entero. También influyen el <a href="ansiedad.html">estrés mantenido</a>, la falta de luz y de movimiento o algunas enfermedades, así que a veces conviene una revisión médica.',
    'No se ha demostrado que un desequilibrio químico sea su causa: como mucho, es un componente más. La explicación de «me falta serotonina» es una simplificación que <strong>los estudios de neurología</strong> no sostienen tal cual; el ánimo va ligado a nuestra vida y es mucho más complejo. Lo que sí muestran es que se apagan los sistemas que nos hacen anticipar lo bueno y movernos hacia ello, y eso ayuda a entender la falta de ganas.',
    'Cuando el ánimo baja, hacemos menos; al hacer menos, hay menos cosas que nos llenen, y el ánimo baja más. <strong>Los estudios de psicología</strong> muestran que esperar a tener ganas para moverse suele alargar el círculo. Así, la terapia busca que actúes de acuerdo con tus objetivos y con lo que te interesa, en vez de según cómo te encuentres ese día. No se trata de hacer por hacer ni de rellenar el tiempo por estar ocupado, sino de hacer cosas que tengan sentido para ti, con pequeños avances.',
    'Las pérdidas, la soledad no deseada, el paro o la precariedad aumentan el riesgo de depresión, como han documentado <strong>los estudios de sociología</strong>. No es debilidad de nadie: el malestar también habla de cómo vivimos. Hay etapas especialmente desgastantes —un posparto, <a href="duelo.html">un duelo</a>, los intensos ritmos de vida, el cansancio acumulado— tras las que el ánimo puede venirse abajo.'
  ],
  /* apartados nuevos (2026-11-09, elegidos por el usuario tras el estudio de competencia: 1B, 2B, 3A, 4B, 5 como en ansiedad) */
  tipos:{titulo:'Tipos de depresión',
    intro:'Los manuales clínicos distinguen varios tipos, y cada persona nombra también la depresión a su manera. Recogemos las dos cosas, porque así se busca, pero en cada caso se mezclan, y lo que más nos importa es la situación en la que estás.',
    items:[
    ['Depresión mayor','Ánimo bajo o pérdida de interés casi todos los días durante al menos dos semanas, con cambios en el sueño, el apetito, la energía o la concentración, y a menudo culpa.','mayor'],
    ['Distimia o tristeza que dura años','Un ánimo bajo menos intenso, pero que se mantiene durante años, hasta el punto de confundirse con «mi forma de ser».','distimia'],
    ['Ansiedad y depresión','A menudo van juntas: la <a href="ansiedad.html">ansiedad</a> mantenida desgasta y acaba en desánimo. Cuando aparecen las dos, las trabajamos a la vez.','ansiedad'],
    ['Apatía y anhedonia','No disfrutar de lo que antes te gustaba, a veces sin sentirte triste: «no tengo ganas de nada, pero no estoy triste».','apatia'],
    ['Sensación de vacío','Sentir que nada llena, como si faltara algo por dentro, aunque desde fuera todo parezca en orden. Cuando acompaña a emociones muy cambiantes, puede tener que ver también con <a href="personalidad.html">la personalidad</a>.','vacio'],
    ['Soledad no deseada','Cuando faltan vínculos o los que hay no sostienen. Es uno de los factores que más pesan en el ánimo.','soledad'],
    ['Crisis existencial','Preguntas sobre el sentido de lo que hacemos, a menudo tras un cambio vital: una edad, un trabajo, una pérdida.','existencial'],
    ['Depresión posparto','Aparece en el embarazo o en los meses tras el parto, y también puede afectar a la otra persona de la pareja. No es lo mismo que la tristeza pasajera de los primeros días.','posparto'],
    ['Depresión estacional','Se repite en otoño e invierno, con menos luz: más sueño, más apetito y menos energía.','estacional'],
    ['Depresión tras una pérdida','Cuando un <a href="duelo.html">duelo</a> se alarga y el ánimo no se recupera.','perdida'],
    ['Depresión en personas mayores','A veces no se nota como tristeza, sino como cansancio, quejas físicas, olvidos o aislamiento, y se confunde con «cosas de la edad».','mayores']
  ]},
  proceso:{titulo:'Cómo trabajamos la depresión', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender cómo has llegado hasta aquí.','Lo que has perdido, lo que te pesa y lo que se ha ido estrechando en tu vida.'],
    ['Dar los primeros pasos.','Pequeñas actividades con sentido para ti, sin esperar a tener ganas. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas medicación o conviene valorarla, nos coordinamos con tu médico o psiquiatra.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando el ánimo se sostiene, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Activación conductual','Recuperar poco a poco actividades con sentido, para salir del círculo de hacer menos y sentirse peor.'],
    ['Terapia cognitivo-conductual','Revisar los pensamientos que hunden y la forma en que nos hablamos.'],
    ['Terapia de aceptación y compromiso (ACT)','Moverse hacia lo que importa sin esperar a tener ganas.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también lo que te ha pasado y lo que te pasa (las pérdidas, el trabajo, la soledad) y cómo se entretejen.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades. Si te cuesta salir de casa, la terapia online puede ayudarte a empezar.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08). La de antidepresivos sigue las guías clínicas (p. ej., NICE NG222, 2022): psicoterapia como primera opción en la depresión menos grave; en la más grave, combinada con medicación.
     2026-11-09: 7 nuevas (6.1A, 6.2B, 6.3A, 6.4B, 6.5 baja con peritaje, 6.6B, 6.7 local), en desplegables como en ansiedad */
  faqDesplegable:true,
  faq:[
    ['¿Cómo sé si tengo depresión?','Suele notarse en el ánimo (tristeza o sensación de vacío casi a diario), en el interés (dejar de disfrutar de lo que antes te gustaba), en el cuerpo (cansancio, cambios en el sueño y en el apetito) y en la cabeza (culpa, dificultad para concentrarte, ver el futuro cerrado). Si dura más de dos semanas y te limita, merece la pena consultarlo. Conviene descartar también otras causas con tu médico.'],
    ['No tengo ganas de nada, pero no estoy triste. ¿Es depresión?','Puede serlo. La depresión no siempre se nota como tristeza: a veces aparece como apatía, como no disfrutar de nada o como un cansancio que no se va. Esperar a tener ganas suele alargarlo; empezar por algo pequeño, aunque no apetezca, ayuda a salir del círculo.'],
    ['¿La depresión es por falta de serotonina?','No está demostrado. Es una explicación muy extendida, pero la investigación no la sostiene tal cual: el ánimo va ligado a la vida concreta, al cuerpo y a las situaciones que atraviesas. Por eso lo miramos todo en conjunto.'],
    ['¿Cuándo conviene ir al psicólogo por depresión?','Cuando la tristeza, el desánimo o la falta de interés duran semanas y empiezan a afectar al trabajo, a las relaciones o al cuidado de ti. No hace falta esperar a tocar fondo.'],
    ['¿Qué diferencia hay entre tristeza y depresión?','La tristeza es una emoción normal ante una pérdida o un problema, y suele ir cediendo. Hablamos de depresión cuando se mantiene durante semanas, se apaga el interés por casi todo y empieza a afectar al sueño, al apetito, al trabajo o a las relaciones.'],
    ['¿Se cura la depresión?','Más que “curarse”, de la depresión se sale cambiando poco a poco la situación en la que uno está, y eso se puede trabajar. Cada proceso es distinto: no prometemos plazos, pero sí acompañarte para entender cómo has llegado ahí y para ir haciendo progresos.'],
    ['¿Hace falta tomar antidepresivos?','En terapia psicológica no se recetan fármacos. Las guías clínicas recomiendan la psicoterapia como primera opción en la depresión leve o moderada y, en la más grave, combinada con medicación. Si ya tomas antidepresivos o conviene valorarlos, nos coordinamos con tu médico o psiquiatra.'],
    ['¿La terapia online funciona para la depresión?','Sí. La terapia online logra resultados comparables a la presencial, y a veces facilita empezar cuando cuesta salir de casa.'],
    ['¿Puedo dejar los antidepresivos?','Nunca de golpe ni por tu cuenta: la retirada debe ser gradual y pautada por tu médico o psiquiatra, porque dejarlos bruscamente puede provocar síntomas de retirada. La terapia psicológica puede acompañarte durante ese proceso, y trabajar lo que te llevó a la depresión ayuda a que el cambio se sostenga.'],
    ['¿Puedo pedir la baja por depresión?','Sí. La baja laboral la da tu médico de atención primaria, no el psicólogo. Nosotros podemos acompañarte durante ese tiempo, preparar la vuelta al trabajo y, si hace falta, hacer un informe psicológico. Si la depresión tiene que ver con un conflicto laboral o con acoso y hace falta un informe pericial, podemos hacerlo desde la psicología forense, con un profesional distinto de tu terapeuta, para que sea imparcial.'],
    ['¿Cómo ayudar a alguien con depresión?','Escúchale sin juzgar y sin dar consejos rápidos; evita el «anímate», que suele hacer sentir peor. Proponle cosas pequeñas para hacer juntos y anímale a pedir ayuda profesional. Si habla de morir o de hacerse daño, llamad al <strong>024</strong>. Y cuídate también tú: acompañar desgasta.'],
    ['¿Atendéis la depresión cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  together:'Ninguna de estas miradas basta sola. Pensamos la depresión entretejida con tu vida concreta: lo que has perdido, lo que te pesa, lo que se ha ido estrechando. No ver salida es lo que más paraliza: todo se ve oscuro y parece que no hay esperanza de cambio. Por eso ayuda pensarlo con alguien; no para tener la respuesta hecha, sino para buscar juntos por dónde empezar y avanzar poco a poco hacia lo que te importa.',
  cta:'Podemos ayudarte a dar los primeros pasos, también cuando no tienes ganas de nada.',
  intro:'Para trabajar la depresión hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08), por si se aprovecha más abajo: «Hablamos de depresión cuando la tristeza, el desánimo o la falta de interés se mantienen durante semanas y empiezan a afectar al trabajo, a las relaciones o al cuidado de uno mismo.»
     y el «how»: «Lo abordamos desde un enfoque multidimensional, sobre todo con terapia cognitivo-conductual, terapia de aceptación y compromiso (ACT) y otras terapias contextuales: recuperar poco a poco actividades con sentido, revisar los pensamientos que hunden y moverte hacia lo que importa sin esperar a tener ganas.» */
  science:'Los manuales clínicos la describen por un conjunto de síntomas mantenidos en el tiempo: ánimo bajo, pérdida de interés, cambios en el sueño o el apetito, cansancio, culpa. Las guías recomiendan la psicoterapia, sola o junto con medicación según la intensidad.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario (ya no hay citas suyas); eran: Pérez Álvarez (2007), «La activación conductual y la desmedicalización de la depresión»; (2019), «Diagnóstico más allá de los síntomas» */
  beyond:'El ánimo no es una sustancia que se agota dentro de la cabeza: va ligado a la vida concreta —pérdidas, trabajo, soledad, rutinas que se han ido estrechando—. La explicación de «me falta serotonina» es una simplificación que la investigación no sostiene tal cual '+V+'. Mirar la vida concreta no quita importancia al malestar: le da por dónde empezar.',
  approaches:[
    ['Cognitivo-conductual y activación conductual','Recuperar poco a poco actividades con sentido y revisar los pensamientos que hunden.','amplia'],
    ['Contextuales y ACT','Moverse hacia lo que importa sin esperar a tener ganas.','creciente'],
    ['Interpersonal','Trabajar las relaciones y los cambios de rol ligados al ánimo.','buena']
  ],
  alert:'Si tienes pensamientos de muerte o de hacerte daño, llama al <strong>024</strong>. En una urgencia, al <strong>112</strong>.',
  alt:'Grupo de amigas compartiendo una mesa al aire libre',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Cuando estamos inundados por la depresión, nada tiene sentido y el futuro parece cerrado. No es pereza ni debilidad: el cuerpo pesa como una mochila llena de piedras y cuesta mucho levantarse, aunque uno quiera.',
      'La depresión no es algo que uno tiene dentro: es una situación en la que uno está. Por eso podemos hacer algo con ella, y por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que la depresión afecta al <a href="insomnio.html">sueño</a>, al apetito, al cansancio y al cuerpo entero. También influyen el <a href="ansiedad.html">estrés mantenido</a>, la falta de luz y de movimiento o algunas enfermedades, así que a veces conviene una revisión médica.',
      'La explicación de «me falta serotonina» es una simplificación que <strong>los estudios de neurología</strong> no sostienen tal cual. Lo que sí muestran es que se apagan los sistemas que nos hacen anticipar lo bueno y movernos hacia ello, y eso ayuda a entender la falta de ganas.',
      'Cuando el ánimo baja, hacemos menos, y al hacer menos, el ánimo baja más. <strong>Los estudios de psicología</strong> muestran que esperar a tener ganas para moverse suele alargar el círculo. No se trata de hacer por hacer, sino de hacer cosas que tengan sentido para ti, con pequeños avances.',
      'Las pérdidas, la soledad no deseada, el paro o la precariedad aumentan el riesgo de depresión, como han documentado <strong>los estudios de sociología</strong>. No es debilidad de nadie: el malestar también habla de cómo vivimos.'
    ],
    together:'Ninguna de estas miradas basta sola. Pensamos la depresión entretejida con tu vida concreta: lo que has perdido, lo que te pesa, lo que se ha ido estrechando. No ver salida es lo que más paraliza; por eso ayuda pensarlo con alguien, no para tener la respuesta hecha, sino para buscar juntos por dónde empezar y avanzar poco a poco hacia lo que te importa.',
    tipos:{titulo:'Tipos de depresión más frecuentes', intro:'En cada persona se mezclan; lo que más nos importa es la situación en la que estás.', items:[
      ['Depresión mayor','ánimo bajo o pérdida de interés casi a diario durante al menos dos semanas, con cambios en el sueño, el apetito o la energía.','mayor'],
      ['Distimia o tristeza que dura años','un ánimo bajo menos intenso que se confunde con «mi forma de ser».','distimia'],
      ['Ansiedad y depresión','a menudo van juntas; cuando aparecen las dos, trabajamos también la <a href="ansiedad.html">ansiedad</a>.','ansiedad'],
      ['Apatía, anhedonia y vacío','no disfrutar de lo que antes te gustaba o sentir que nada llena, aunque desde fuera todo parezca en orden.','apatia'],   /* 2026-11-10: unida a «Sensación de vacío» (máximo 10 líneas) */
      ['Soledad no deseada','cuando faltan vínculos o los que hay no sostienen.','soledad'],
      ['Crisis existencial','preguntas sobre el sentido de lo que hacemos, a menudo tras un cambio vital.','existencial'],
      ['Depresión posparto','en el embarazo o en los meses tras el parto, también en la otra persona de la pareja.','posparto'],
      ['Depresión estacional','se repite en otoño e invierno, con menos luz.','estacional'],
      ['Depresión tras una pérdida','cuando un <a href="duelo.html">duelo</a> se alarga y el ánimo no se recupera.','perdida'],
      ['Depresión en personas mayores','a veces se nota como cansancio, olvidos o aislamiento, y se confunde con «cosas de la edad».','mayores']
    ]},
    trabajo:{titulo:'Cómo trabajamos la depresión',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender cómo has llegado hasta aquí.','Lo que has perdido, lo que te pesa y lo que se ha ido estrechando en tu vida.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando el ánimo se sostiene. Si tomas medicación o conviene valorarla, nos coordinamos con tu médico o psiquiatra.']
      ],
      texto:'Trabajamos con la activación conductual, la terapia cognitivo-conductual y las terapias contextuales, como la de aceptación y compromiso (ACT). Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España; si te cuesta salir de casa, puede ayudarte a empezar. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'insomnio', name:'Insomnio y sueño', sym:'Me agobia no poder dormirme',
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Psicólogo y tratamiento del insomnio en Madrid y online',
  seoDesc:'¿No puedes dormir o te despiertas de madrugada? Tratamiento psicológico del insomnio, también crónico o por ansiedad. Centro sanitario en Madrid y online.',
  h1:'Terapia para el insomnio y los problemas de sueño',   /* encabezado a todo el ancho, en una línea, como en ansiedad y depresión */
  pagina:'insomnio.html',   /* página fija; motivo.html?m=insomnio lleva a ella */
  enfoqueDe:'del insomnio',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  k:'insomnio sueno me agobia no poder dormirme me paso la noche dando vueltas me paso el dia agotado agotada no puedo dormir duermo mal me despierto por la noche madrugada me cuesta dormir mi cabeza no deja de pensar higiene del sueno cansancio insomnio de conciliacion despertares nocturnos me despierto a las 4 sueno no reparador insomnio cronico pastillas para dormir somniferos dejar los somniferos menopausia turnos pesadillas insomnio por ansiedad estres',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable en esta página (tipos o la pregunta de higiene del sueño); las demás llevan a su terapia */
  subs:[['Insomnio de conciliación','#conciliacion'],['Despertares nocturnos','#despertares'],['Despertarse de madrugada','#madrugada'],['Sueño no reparador','#noreparador'],['Insomnio crónico','#cronico'],['Insomnio por ansiedad o estrés','ansiedad'],['Insomnio y depresión','depresion'],['Pesadillas','#pesadillas'],['Higiene del sueño','#higiene'],['Dependencia de pastillas para dormir','adicciones'],['Insomnio en la menopausia','#menopausia'],['Trabajo a turnos','#turnos'],['Sueño en niños y adolescentes','infancia']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1B, 2B con diario de sueño y coordinación médica, 3A sin higiene del sueño como enfoque, 4 y 5 como en ansiedad) */
  tipos:{titulo:'Tipos de insomnio y problemas de sueño',
    intro:'El insomnio no es uno solo: no es lo mismo no poder dormirse que despertarse de madrugada. Distinguirlos ayuda a saber por dónde empezar, aunque a menudo se combinan.',
    items:[
    ['Insomnio de conciliación','Te acuestas y no llega el sueño: pasan los minutos, empiezas a pensar y, cuanto más lo intentas, más despierto estás.','conciliacion'],
    ['Despertares nocturnos','Te duermes, pero te despiertas varias veces durante la noche y te cuesta volver a dormirte.','despertares'],
    ['Despertarse de madrugada','Te despiertas a las 4 o a las 5 y ya no vuelves a dormirte. A menudo va unido a preocupaciones o al <a href="depresion.html">ánimo bajo</a>.','madrugada'],
    ['Sueño no reparador','Duermes horas, pero te levantas igual de cansado. No basta con dormir: el sueño tiene que llegar a ser reparador. Si además roncas, alguien nota pausas en tu respiración o te duermes de día, consulta a tu médico: puede ser apnea del sueño.','noreparador'],
    ['Insomnio crónico','Se habla de él cuando duermes mal al menos tres noches por semana durante tres meses y lo notas de día.','cronico'],
    ['Pesadillas','Sueños que despiertan con angustia. Son frecuentes después de experiencias muy duras, como ocurre en el <a href="ansiedad.html#postraumatico">estrés postraumático</a>.','pesadillas'],
    ['Insomnio en la menopausia','Los sofocos, los sudores nocturnos y los cambios hormonales interrumpen el sueño. También aquí la terapia ayuda a dormir mejor.','menopausia'],
    ['Trabajo a turnos','Cambiar de horario desajusta el reloj interno. Buscamos cómo proteger el sueño dentro de los turnos que tienes.','turnos']
  ]},
  proceso:{titulo:'Cómo trabajamos el insomnio', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Un diario de sueño.','Durante una o dos semanas apuntas cómo duermes, para ver qué pasa de verdad por la noche y no solo lo que recordamos.'],
    ['Ajustar hábitos y horarios.','El uso de la cama, el tiempo que pasas en ella y lo que haces de día. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas pastillas para dormir o quieres dejarlas, nos coordinamos con tu médico.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando el sueño se sostiene, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual para el insomnio (TCC-I)','Es el tratamiento de primera elección en las guías clínicas: control de estímulos, ajuste del tiempo en la cama y revisión de las preocupaciones que mantienen la alerta.'],
    ['Terapia de aceptación y compromiso (ACT)','Dejar de pelear por dormir y bajar la vigilancia sobre el sueño. Está menos estudiada en el insomnio y la usamos como complemento.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también lo que pasa de día (el trabajo, los turnos, las preocupaciones, los hábitos) y cómo se cuela en la noche.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08). Pastillas: las guías (p. ej., la europea de insomnio de 2023, Riemann y cols.) proponen la TCC-I como primera opción y los hipnóticos solo a corto plazo.
     2026-11-09: 6 nuevas (6.1A higiene, 6.2B despertar de madrugada, 6.3A horas, 6.4 dejar pastillas, 6.5A sesiones con cifra, 6.6 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Por qué me despierto a las 3 o a las 4 de la mañana?','En la segunda mitad de la noche el sueño es más ligero, y cualquier preocupación nos despierta con más facilidad. Si se repite, puede estar ligado al estrés, a la <a href="ansiedad.html">ansiedad</a> o al ánimo bajo. Si no vuelves a dormirte en un rato, levántate y haz algo tranquilo con poca luz hasta que vuelva el sueño.'],
    ['¿Qué hago si no puedo dormir?','Si llevas un rato en la cama sin dormir y empiezas a agobiarte, suele ayudar levantarte, hacer algo tranquilo con poca luz y volver cuando tengas sueño. Mirar el reloj o el móvil alimenta la alerta. Si se repite a menudo, conviene consultarlo.'],
    ['¿Cuántas horas hay que dormir?','La mayoría de los adultos necesita entre 7 y 9 horas, pero no hay una cifra exacta para todos: lo que más importa es cómo te encuentras de día. Obsesionarse con las horas también quita el sueño.'],
    ['¿Qué es la higiene del sueño?','Son hábitos que ayudan a dormir: horarios regulares, luz natural por la mañana, menos pantallas y cafeína por la tarde, y una habitación tranquila y oscura. Es una buena base, pero por sí sola suele quedarse corta en el insomnio.','higiene'],
    ['¿Cuándo conviene ir al psicólogo por insomnio?','Cuando duermes mal varias noches por semana durante semanas y lo notas de día: cansancio, irritabilidad o problemas para concentrarte. No hace falta esperar a que se vuelva crónico.'],
    ['¿Se cura el insomnio?','En muchos casos mejora con terapia psicológica, que es lo que recomiendan las guías clínicas. Cada proceso es distinto; no prometemos plazos, pero sí trabajar contigo para que vuelvas a dormir sin pelearte con la noche.'],
    ['¿Cuántas sesiones hacen falta?','La terapia cognitivo-conductual para el insomnio suele necesitar pocas sesiones, a menudo entre 4 y 8. Cada caso es distinto: en la primera entrevista te damos una idea orientativa y la revisamos sobre la marcha.'],
    ['¿Las pastillas para dormir solucionan el insomnio?','En terapia psicológica no se recetan fármacos. Los somníferos pueden ayudar de forma puntual, pero las guías clínicas no los recomiendan como solución a largo plazo, entre otras cosas por el riesgo de <a href="adicciones.html">dependencia</a>. Si los tomas o quieres dejarlos, nos coordinamos con tu médico.'],
    ['¿Puedo dejar las pastillas para dormir?','Nunca de golpe ni por tu cuenta: la retirada debe ser gradual y pautada por tu médico, porque dejarlas bruscamente puede empeorar el sueño y causar síntomas de abstinencia. La terapia cognitivo-conductual para el insomnio facilita dejarlas y reduce el riesgo de que el insomnio vuelva.'],
    ['¿La terapia online funciona para el insomnio?','Sí. La terapia cognitivo-conductual para el insomnio se adapta bien al formato online y logra resultados comparables a la presencial.'],
    ['¿Tratáis el insomnio cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  feel:['Me agobia no poder dormirme','Me paso la noche dando vueltas','Miro cómo pasan las horas y no me duermo','Me siento cansado todo el tiempo'],
  /* citas: Núria Roure, psicóloga del sueño, en entrevista (titular de Moncloa.com, 11/12/2025, canal «Mentes Indomables»);
     Cervantes, citado en Pérez Álvarez (2005) «Psicología del Quijote», pág. 4 del PDF;
     Pérez Álvarez y Fernández Hermida (1984) «Cómo llegar a ser un mejor terapeuta» (ver citas-para-la-web.md) */
  quotes:[
    'No se trata solo de cuántas horas dormimos, sino de que el sueño llegue a ser reparador. Pasar horas en la cama no es lo mismo que descansar',
    'El sueño no se busca: llega cuando dejamos de perseguirlo. Dormir es, sobre todo, dejar de vigilar, sentirse a salvo',
    'En muchas ocasiones el problema no es únicamente no poder conciliar el sueño: a esto se suman la preocupación y la obsesión por no dormir, que caracterizan el insomnio'
  ],
  /* frases propias (2026-11-08); antes eran citas literales: Núria Roure (2025), «Dormir no es lo mismo que descansar. Necesitamos llegar a ese sueño profundo»; Cervantes (vía Pérez Álvarez, 2005), «Del poco dormir y del mucho leer, se le secó el celebro de manera que vino a perder el juicio»; y Pérez Álvarez y Fernández Hermida (1984): «El circuito de preocupación por no dormir —no dormir— más preocupación por no dormir […] que caracteriza al insomne» */
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:[
    'Dormir bien no es un lujo. El sueño es descanso, y del descanso dependen la atención, la memoria, el humor y, en general, cómo nos desenvolvemos en la vida. Por eso el insomnio importa tanto: muchas veces está en el centro de otros problemas psicológicos, como <a href="ansiedad.html">la ansiedad</a> o <a href="depresion.html">la depresión</a>, y los agrava.',
    'Una de sus características es el <strong>círculo de preocupación por no dormir</strong>: nos obsesionamos con no poder dormir, esa preocupación nos quita el sueño, y no dormir aumenta la preocupación.',
    'Como casi todo lo que nos pasa, el insomnio es <strong>multicausal</strong>. Por lo tanto, nuestro enfoque es <strong>pluralista</strong>: nos quedamos con lo mejor de cada disciplina, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el sueño depende de dos relojes: uno es el ritmo circadiano, que marca la luz del día, y el otro la presión de sueño, que se acumula mientras estamos despiertos. Las pantallas por la noche, la cafeína o los horarios cambiantes los desajustan, y otras cosas, como la menopausia o las pesadillas, interrumpen el sueño. Además, no basta con dormir horas: el sueño profundo es el más reparador para el cuerpo y ayuda a consolidar los recuerdos, y durante la fase REM se procesan las emociones.',
    'Para dormirse, el cerebro tiene que bajar la guardia. <strong>Los estudios de neurología</strong> muestran que en el insomnio suele quedarse en estado de alerta: el cuerpo cansado y la mente despierta. Por eso el cansancio, por sí solo, no garantiza dormir.',
    'La cama acaba asociada a dar vueltas. <strong>Los estudios de psicología</strong> muestran que la terapia cognitivo-conductual para el insomnio es el tratamiento de primera elección. Sus piezas principales son el <strong>control de estímulos</strong> —usar la cama solo para dormir y levantarse si el sueño no llega— y ajustar el tiempo que pasamos en la cama. La <strong>higiene del sueño</strong> —horarios regulares, luz natural por la mañana, menos pantallas y cafeína por la tarde— la acompaña, aunque por sí sola suele quedarse corta.',
    'Dormir mal también tiene que ver con cómo está organizado el día. <strong>Los estudios de sociología</strong> señalan que los turnos, las jornadas largas y nuestros horarios recortan el sueño de mucha gente.'
  ],
  together:'El insomnio suele mantenerse por la propia anticipación («¿y si esta noche tampoco?») y por cómo vamos reorganizando el día entero alrededor de la noche. Lo pensamos junto con lo que pasa de día —el trabajo, las preocupaciones, los hábitos— y entretejemos lo que sabemos del cuerpo, de lo que haces y de cómo está organizada tu vida para romper el círculo y encontrar lo que te funcione a ti: qué hábitos ajustar, qué dejar de forzar y cómo volver a confiar en el sueño.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario (ya no hay citas); eran: Pérez Álvarez y Fernández Hermida (1984), «Cómo llegar a ser un mejor terapeuta»; Pérez Álvarez (2005), «Psicología del Quijote»; Núria Roure, entrevista en Moncloa.com (2025) */
  cta:'Trabajamos contigo para que la noche deje de ser una pelea.',
  intro:'Para trabajar el insomnio hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «El insomnio es la dificultad para conciliar el sueño, mantenerlo o que sea reparador, cuando se repite y se nota al día siguiente.»
     y el «how»: «Lo abordamos desde un enfoque multidimensional, sobre todo con terapia cognitivo-conductual para el insomnio, terapia de aceptación y compromiso (ACT) y otras terapias contextuales: ajustar horarios y hábitos, y dejar de pelear por dormir.» */
  science:'La terapia cognitivo-conductual para el insomnio es el tratamiento psicológico de primera elección en las guías clínicas. Incluye la higiene del sueño, pero no se reduce a ella.',
  beyond:'Dormir no se puede forzar: cuanto más se intenta, más se aleja. El insomnio suele mantenerse por la propia anticipación («¿y si esta noche tampoco?») y por cómo vamos reorganizando el día entero alrededor de la noche.',
  approaches:[
    ['Cognitivo-conductual para el insomnio','Ajustar horarios, cama y pensamientos que mantienen el problema.','amplia'],
    ['Contextuales y ACT','Dejar de luchar por dormir y reducir la vigilancia sobre el sueño.','preliminar'],
    ['Higiene del sueño','Hábitos de base útiles, aunque por sí solos suelen quedarse cortos.','limitada como tratamiento único']
  ],
  /* etiquetas: ahora arriba, junto al h1 */
  alt:'Mujer descansando al sol de la mañana con una taza de café',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Dormir bien no es un lujo: del descanso dependen la atención, la memoria y el humor. Por eso el insomnio importa tanto, y muchas veces agrava otros problemas, como <a href="ansiedad.html">la ansiedad</a> o <a href="depresion.html">la depresión</a>.',
      'Una de sus características es el <strong>círculo de preocupación por no dormir</strong>: nos obsesionamos con no poder dormir, esa preocupación nos quita el sueño, y no dormir aumenta la preocupación.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que el sueño depende de dos relojes: el ritmo circadiano, que marca la luz del día, y la presión de sueño, que se acumula mientras estamos despiertos. Las pantallas por la noche, la cafeína o los horarios cambiantes los desajustan.',
      'Para dormirse, el cerebro tiene que bajar la guardia. <strong>Los estudios de neurología</strong> muestran que en el insomnio suele quedarse en alerta: el cuerpo cansado y la mente despierta.',
      'La cama acaba asociada a dar vueltas. <strong>Los estudios de psicología</strong> muestran que la terapia cognitivo-conductual para el insomnio es el tratamiento de primera elección: usar la cama solo para dormir, levantarse si el sueño no llega y ajustar el tiempo en la cama. La <strong>higiene del sueño</strong> la acompaña, aunque por sí sola suele quedarse corta.',
      'Dormir mal también tiene que ver con cómo está organizado el día. <strong>Los estudios de sociología</strong> señalan que los turnos, las jornadas largas y nuestros horarios recortan el sueño de mucha gente.'
    ],
    together:'El insomnio suele mantenerse por la propia anticipación («¿y si esta noche tampoco?») y por cómo vamos reorganizando el día entero alrededor de la noche. Lo pensamos junto con lo que pasa de día —el trabajo, las preocupaciones, los hábitos— para romper el círculo y encontrar lo que te funcione a ti: qué ajustar, qué dejar de forzar y cómo volver a confiar en el sueño.',
    tipos:{titulo:'Problemas de sueño más frecuentes', intro:'No es lo mismo no poder dormirse que despertarse de madrugada, aunque a menudo se combinan.', items:[
      ['Insomnio de conciliación','te acuestas y no llega el sueño; cuanto más lo intentas, más despierto estás.','conciliacion'],
      ['Despertares nocturnos','te despiertas varias veces y te cuesta volver a dormirte.','despertares'],
      ['Despertarse de madrugada','a las 4 o a las 5 y ya no vuelves a dormirte; a menudo va unido a preocupaciones o al <a href="depresion.html">ánimo bajo</a>.','madrugada'],
      ['Sueño no reparador','duermes horas, pero te levantas igual de cansado; si roncas o te duermes de día, consulta a tu médico.','noreparador'],
      ['Insomnio crónico','duermes mal al menos tres noches por semana durante tres meses y lo notas de día.','cronico'],
      ['Pesadillas','sueños que despiertan con angustia, frecuentes tras experiencias muy duras, como en el <a href="ansiedad.html#postraumatico">estrés postraumático</a>.','pesadillas'],
      ['Insomnio en la menopausia','los sofocos y los cambios hormonales interrumpen el sueño.','menopausia'],
      ['Trabajo a turnos','cambiar de horario desajusta el reloj interno.','turnos'],
      ['Dependencia de pastillas para dormir','ayudan de forma puntual, pero no como solución a largo plazo; se dejan poco a poco, con tu médico. Lo vemos también en <a href="adicciones.html">adicciones</a>.','pastillas']
    ]},
    trabajo:{titulo:'Cómo trabajamos el insomnio',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Un diario de sueño.','Durante una o dos semanas apuntas cómo duermes, para ver qué pasa de verdad por la noche.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando el sueño se sostiene. Si tomas pastillas para dormir o quieres dejarlas, nos coordinamos con tu médico.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual para el insomnio (TCC-I) y, de complemento, las terapias contextuales, como la de aceptación y compromiso (ACT). Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'alimentacion', name:'Problemas de alimentación', sym:'Como y después me culpo', delicate:true,
  alert:'Si hay desmayos, dolor en el pecho o vómitos muy frecuentes, acude a urgencias o llama al <strong>112</strong>. Si piensas en hacerte daño, llama al <strong>024</strong>.',   /* revisión 2026-11-09, punto 5B */
  h1:'Terapia para los problemas de alimentación',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Psicólogo para TCA, anorexia y bulimia en Madrid y online',
  seoDesc:'Tratamiento psicológico de TCA: anorexia, bulimia, atracones u obsesión por el peso, junto a medicina y nutrición. Centro sanitario en Madrid y online.',
  pagina:'alimentacion.html',   /* página fija; motivo.html?m=alimentacion lleva a ella */
  enfoqueDe:'de los problemas de alimentación',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (tipos o la pregunta «¿Qué es un TCA?»); ansiedad, cuerpo y adolescentes llevan a su terapia */
  subs:[['Atracones','#atracones'],['Bulimia','#bulimia'],['Anorexia','#anorexia'],['Comer por ansiedad','ansiedad'],['Hambre emocional','#hambre'],['Obsesión por el peso o la figura','#peso'],['Insatisfacción con el cuerpo','autoestima'],['Dietas restrictivas','#dietas'],['Culpa después de comer','#culpa'],['Ejercicio compulsivo','#ejercicio'],['Ortorexia: obsesión por comer sano','#ortorexia'],['Vigorexia','#vigorexia'],['Trastornos de la conducta alimentaria (TCA)','#tca'],['Problemas con la comida en adolescentes','infancia']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A, 2 único, 3B —TCC como base, también con familias, ACT complemento—, 4 con el aviso de riesgo físico, 5 como en las demás) */
  tipos:{titulo:'Tipos de TCA y problemas con la comida',
    intro:'Los manuales clínicos distinguen varios trastornos de la conducta alimentaria, y hay otros problemas con la comida que no encajan en ninguno pero también hacen sufrir. A menudo se mezclan o pasan de uno a otro.',
    items:[
    ['Atracones','Comer en poco tiempo mucha cantidad, con la sensación de no poder parar, y después culpa o vergüenza. Cuando se repite sin compensar, se habla de trastorno por atracón.','atracones'],
    ['Bulimia','Atracones seguidos de compensaciones (vomitar, ayunar, hacer ejercicio en exceso o tomar laxantes) para contrarrestar lo comido. Suele vivirse en secreto.','bulimia'],
    ['Anorexia','Restringir mucho la comida por miedo intenso a engordar, con una imagen del cuerpo que no coincide con lo que ven los demás. Puede tener consecuencias médicas graves, por eso siempre la trabajamos junto a medicina.','anorexia'],
    ['Hambre emocional','Comer para calmar el malestar, el aburrimiento o la tristeza, más que por hambre. Alivia un rato, pero no resuelve lo que preocupa.','hambre'],
    ['Obsesión por el peso o la figura','Pesarse a diario, mirarse una y otra vez, comparar el cuerpo: el peso decide cómo va el día.','peso'],
    ['Dietas restrictivas','Dieta tras dieta, prohibiciones y reglas rígidas que aumentan el hambre y suelen acabar en atracones.','dietas'],
    ['Culpa después de comer','Sentirte mal, castigarte o prometerte compensar después de comer, aunque hayas comido con normalidad.','culpa'],
    ['Ejercicio compulsivo','Hacer ejercicio para compensar lo comido, sentir angustia si no puedes entrenar o seguir aunque haya dolor o una lesión.','ejercicio'],
    ['Ortorexia','Obsesión por comer «sano» o «limpio» que va dejando fuera alimentos, situaciones y personas.','ortorexia'],
    ['Vigorexia','Preocupación constante por no ser lo bastante musculado, con entrenamiento, dietas y a veces sustancias. Cada vez más frecuente en hombres jóvenes.','vigorexia']
  ]},
  proceso:{titulo:'Cómo trabajamos los problemas de alimentación', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender qué función cumple la comida.','Qué alivia, qué intenta controlar y cuándo aparece, en tu vida concreta.'],
    ['Regularizar y trabajar la culpa y el cuerpo.','Volver a comer con regularidad, sin prohibiciones, y relacionarte de otra manera con tu cuerpo. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con medicina y nutrición.','Si hay pérdida de peso, vómitos o mareos, o tomas medicación, trabajamos junto a tu médico, tu psiquiatra o tu nutricionista.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando la comida vuelve a su sitio, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual','Es la base del tratamiento y la que tiene más respaldo, sobre todo en la bulimia y los atracones: regularizar la alimentación y trabajar las ideas sobre el peso y la figura.'],
    ['Trabajo con la familia','Con adolescentes, la familia es parte activa del tratamiento: aprende a acompañar las comidas y a sostener los cambios en casa.'],
    ['Terapia de aceptación y compromiso (ACT)','Relacionarte de otra manera con el cuerpo y con los pensamientos sobre él. La usamos como complemento.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también la exigencia, las redes, la familia y los mensajes sobre el cuerpo que te rodean.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades. Si hay riesgo físico, valoramos combinarla con seguimiento presencial y médico.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1A qué es un TCA, 6.2A comer por ansiedad, 6.3A cómo ayudar, 6.4 local; el usuario no dictó las letras de 6.1-6.3: se pusieron mis recomendaciones), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cuándo conviene ir al psicólogo por problemas con la comida?','Cuando la comida, el peso o la figura ocupan buena parte de tus pensamientos, hay atracones, restricciones o vómitos, o la culpa después de comer te condiciona el día. Cuanto antes se pida ayuda, mejor.'],
    ['¿Qué es un TCA?','Son las siglas de trastorno de la conducta alimentaria: anorexia, bulimia, trastorno por atracón y otros. La sigla ayuda a ponerle nombre y a buscar ayuda, pero no explica a nadie: detrás hay una persona y una historia.','tca'],
    ['¿Qué es un atracón?','Comer en poco tiempo una cantidad grande de comida con la sensación de no poder parar, y sentir después culpa o vergüenza. Si se repite, no basta con intentar aguantar: suele cumplir una función, como aliviar el malestar, y eso se puede trabajar.'],
    ['¿Cómo dejar de comer por ansiedad?','Prohibirse comer suele empeorarlo. Ayuda más comer con regularidad, sin saltarse comidas; entender qué malestar intentas calmar y buscar otras formas de atenderlo. Si la <a href="ansiedad.html">ansiedad</a> está detrás, la trabajamos a la vez.'],
    ['¿Se puede superar un trastorno de la conducta alimentaria?','Es posible, aunque suele llevar tiempo. Cada proceso es distinto: no prometemos plazos, pero sí acompañarte para que la comida deje de ocupar el centro de tu vida y puedas relacionarte con ella sin miedo ni culpa.'],
    ['¿Cómo ayudar a alguien con un TCA?','Habla desde la preocupación, sin juicios sobre su peso ni su cuerpo; evita los comentarios sobre lo que come y anímale a pedir ayuda profesional. Si es menor, la familia tiene un papel en el tratamiento y os orientaremos sobre cómo acompañar las comidas. Si notas pérdida de peso importante, desmayos o vómitos frecuentes, hace falta una valoración médica cuanto antes.'],
    ['¿Trabajáis con médicos y nutricionistas?','Sí. Si hay pérdida de peso importante, vómitos, mareos o desmayos, hace falta una valoración médica, y a menudo conviene trabajar junto a nutrición. Nos coordinamos con ellos cuando hace falta.'],
    ['¿La terapia online funciona para los problemas de alimentación?','Puede funcionar bien, sobre todo con atracones o hambre emocional. Si hay riesgo físico, valoramos contigo si conviene combinarla con seguimiento presencial y médico.'],
    ['¿Tratáis los TCA cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'alimentacion comida comer como y despues me culpo me siento horrible conmigo como mucho y despues me castigo solo comiendo alivio la ansiedad no puedo parar de comer como por ansiedad atracones dieta peso cuerpo vomitar restriccion imagen culpa',
  feel:['Como y después me culpo','Me siento horrible conmigo','Como mucho y después me castigo','Solo comiendo alivio la ansiedad'],
  quotes:[
    'Cuanto más se prohíbe un alimento, más nos obsesiona. Las restricciones suelen alimentar justo lo que intentamos frenar',
    'La comida puede aliviar a corto plazo, pero no resuelve lo que nos preocupa. Cuando la comida se convierte en un refugio, deja de ser solo comida',
    'Comer no debería ser un examen diario. Lo que se hace para controlar la comida acaba controlándonos'
  ],
  /* frases propias (2026-11-08); antes: «No puedo parar de comer» y «Como por ansiedad» */
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:[
    'Es un problema en el que aparecen la <strong>culpa</strong> y una <strong>vigilancia constante</strong> del cuerpo, que poco a poco se vuelven el centro de nuestra vida. A veces son <strong>atracones</strong>; otras, <strong>restricción</strong> (<strong>anorexia</strong>) o compensaciones tras comer (<strong>bulimia</strong>); otras, <strong>ejercicio compulsivo</strong> o la obsesión por comer «sano» (<strong>ortorexia</strong>) o por el músculo (<strong>vigorexia</strong>).',
    'Y ocurre algo paradójico: lo que hacemos para intentar tener una relación sana con la alimentación —dietas estrictas, saltarse comidas, contar cada caloría, prohibirse alimentos, pesarse a diario— acaba siendo parte del problema. La comida termina siendo una <strong>prisión</strong>.',
    'Cada caso es distinto: en cada persona se cruzan el cuerpo, su historia, los distintos ámbitos de la vida y el entorno. Por esto nuestro enfoque es <strong>pluralista</strong>.'   /* alimentación (2026-11-08) */
  ],
  bases:[
    'Pasar muchas horas sin comer o seguir reglas muy rígidas con la comida aumenta el hambre. <strong>Los estudios de biología</strong> muestran que muchas veces el atracón no es falta de voluntad, sino la respuesta de un cuerpo que se ha sentido privado.',
    '<strong>Los estudios de neurología</strong> muestran que comer activa los sistemas de recompensa del cerebro y tranquiliza durante un rato. Por eso la comida puede convertirse en una forma rápida de aliviar <a href="ansiedad.html">la ansiedad</a> o <a href="depresion.html">la tristeza</a>.',
    'Es frecuente una espiral: comer para calmarse, sentir culpa y <strong>compensar</strong> —con ejercicio, dejando de comer o vomitando— y volver a comer. <strong>Los estudios de psicología</strong> muestran que la culpa no frena la espiral: la alimenta. A veces el vómito empieza como un recurso puntual y, con la repetición, se convierte en una <strong>compulsión</strong> que apaga la angustia por un momento; por eso no se frena solo con proponérselo. Entender qué función cumple la comida en tu vida ayuda a romperla.',
    'Además, vivimos rodeados de mensajes sobre cuerpos ideales, dietas y autocontrol. <strong>Los estudios de sociología</strong> señalan cuánto pesan las redes sociales y los juicios sobre el peso, sobre todo en <a href="infancia.html">adolescentes</a> y mujeres jóvenes, y cada vez más en hombres jóvenes, con la presión por tener un cuerpo musculado.'
  ],
  together:'Detrás de la comida suele haber más cosas: la exigencia, la imagen, las emociones, la familia o las redes. La sigla TCA ayuda a ponerle nombre y a buscar ayuda, pero no explica a nadie: preferimos no reducirlo a ella. Te acompañamos con calma y sin juicios, y combinamos lo que haga falta —psicología, medicina, nutrición— para que la comida vuelva a ocupar su sitio.',
  cta:'Podemos ayudarte a salir del círculo de comer, culparte y compensar.',
  intro:'Para trabajar los problemas de alimentación hace falta un enfoque <strong>multidimensional</strong>, porque no tienen una sola cara: están en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Hablamos de problemas de alimentación cuando la comida, el peso o la figura ocupan tanto espacio que condicionan el día a día: restricciones, atracones, compensaciones o una preocupación constante.» */
  /* «how» anterior (2026-11-08): «Lo abordamos desde un enfoque multidimensional, sobre todo con terapia cognitivo-conductual, terapia de aceptación y compromiso (ACT) y otras terapias contextuales: regularizar la alimentación, entender qué función cumple la comida en tu vida y relacionarte de otra manera con tu cuerpo.» */
  science:'Los manuales clínicos describen varios cuadros (anorexia, bulimia, trastorno por atracón, entre otros). Pueden tener consecuencias médicas, por eso el tratamiento suele requerir coordinación con medicina y nutrición. '+V,
  beyond:'La comida rara vez es solo comida: se entreteje con la exigencia, la imagen, la familia o las redes. Preferimos no reducirlo a una sigla y entender qué función cumple ese comportamiento en tu vida.',
  approaches:[
    ['Cognitivo-conductual','Regularizar la alimentación y trabajar las ideas sobre peso y figura.','buena en bulimia y atracones'],
    ['Terapia basada en la familia','La familia como parte activa del tratamiento, sobre todo en adolescentes.','buena en adolescentes'],
    ['Contextuales y ACT','Relacionarse de otra manera con el cuerpo y los pensamientos sobre él.','en estudio']
  ],
  coord:'Si hay pérdida de peso importante, vómitos, mareos o desmayos, es necesaria una valoración médica. Nos coordinamos con medicina y nutrición cuando hace falta.',
  alt:'Amigos compartiendo un desayuno en una mesa, vista desde arriba',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Es un problema en el que aparecen la <strong>culpa</strong> y una <strong>vigilancia constante</strong> del cuerpo, que poco a poco se vuelven el centro de nuestra vida. Y ocurre algo paradójico: lo que hacemos para controlar la comida —dietas estrictas, saltarse comidas, prohibirse alimentos, pesarse a diario— acaba siendo parte del problema. La comida termina siendo una <strong>prisión</strong>.',
      'En cada persona se cruzan el cuerpo, su historia, los distintos ámbitos de la vida y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      'Pasar muchas horas sin comer o seguir reglas muy rígidas aumenta el hambre. <strong>Los estudios de biología</strong> muestran que muchas veces el atracón no es falta de voluntad, sino la respuesta de un cuerpo que se ha sentido privado.',
      '<strong>Los estudios de neurología</strong> muestran que comer activa los sistemas de recompensa del cerebro y tranquiliza durante un rato. Por eso la comida puede convertirse en una forma rápida de aliviar <a href="ansiedad.html">la ansiedad</a> o <a href="depresion.html">la tristeza</a>.',
      'Es frecuente una espiral: comer para calmarse, sentir culpa, <strong>compensar</strong> y volver a comer. <strong>Los estudios de psicología</strong> muestran que la culpa no frena la espiral: la alimenta. Entender qué función cumple la comida en tu vida ayuda a romperla.',
      '<strong>Los estudios de sociología</strong> señalan cuánto pesan las redes sociales y los juicios sobre el peso, sobre todo en <a href="infancia.html">adolescentes</a> y mujeres jóvenes, y cada vez más en hombres jóvenes, con la presión por tener un cuerpo musculado.'
    ],
    together:'Detrás de la comida suele haber más cosas: la exigencia, la imagen, las emociones, la familia o las redes. La sigla TCA ayuda a ponerle nombre, pero no explica a nadie. Te acompañamos con calma y sin juicios, y combinamos lo que haga falta —psicología, medicina, nutrición— para que la comida vuelva a ocupar su sitio.',
    tipos:{titulo:'Problemas con la comida más frecuentes', intro:'A menudo se mezclan o pasan de uno a otro.', items:[
      ['Atracones','comer mucho en poco tiempo, sin poder parar, y después culpa o vergüenza.','atracones'],
      ['Bulimia','atracones seguidos de compensaciones, como vomitar, ayunar o hacer ejercicio en exceso.','bulimia'],
      ['Anorexia','restringir mucho la comida por miedo intenso a engordar; siempre la trabajamos junto a medicina.','anorexia'],
      ['Hambre emocional','comer para calmar el malestar más que por hambre.','hambre'],
      ['Obsesión por el peso y la figura','pesarte y mirarte una y otra vez, y no gustarte aunque comas con normalidad; suele ir unida a la <a href="autoestima.html">autoestima</a>.','peso'],   /* 2026-11-10: unida a «Insatisfacción con el cuerpo» (máximo 10 líneas) */
      ['Dietas restrictivas','dieta tras dieta y reglas rígidas que suelen acabar en atracones.','dietas'],
      ['Culpa después de comer','castigarte o prometerte compensar, aunque hayas comido con normalidad.','culpa'],
      ['Ejercicio compulsivo','entrenar para compensar lo comido o seguir aunque haya dolor.','ejercicio'],
      ['Ortorexia','obsesión por comer «sano» que va dejando fuera alimentos, situaciones y personas.','ortorexia'],
      ['Vigorexia','preocupación constante por no ser lo bastante musculado.','vigorexia']
    ]},
    trabajo:{titulo:'Cómo trabajamos los problemas de alimentación',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender qué función cumple la comida.','Qué alivia, qué intenta controlar y cuándo aparece, en tu vida concreta.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando la comida vuelve a su sitio. Si hay pérdida de peso, vómitos o mareos, o tomas medicación, nos coordinamos con tu médico, tu psiquiatra o tu nutricionista.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual como base, con la familia en el caso de adolescentes y, de complemento, con las terapias contextuales, como la de aceptación y compromiso (ACT). Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España; si hay riesgo físico, valoramos combinarla con seguimiento presencial y médico. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'pareja', name:'Terapia de pareja', sym:'Mi pareja y yo no paramos de discutir',
  h1:'Terapia de pareja',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Terapia de pareja en Madrid y online · Psicólogo de pareja',
  seoDesc:'Discusiones, celos, infidelidad o crisis de pareja: terapia de pareja para aprender a hablar sin haceros daño. Centro sanitario en Madrid y online.',
  pagina:'pareja.html',   /* página fija; motivo.html?m=pareja lleva a ella */
  enfoqueDe:'de la pareja',
  reco:'¿Os reconocéis? No tenéis por qué pasarlo solos.',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable en esta página; la falta de deseo lleva a sexual */
  subs:[['Discusiones constantes','#discusiones'],['Problemas de comunicación','#comunicacion'],['Crisis de pareja','#crisis'],['Celos','#celos'],['Infidelidad','#infidelidad'],['Dependencia emocional','#dependencia'],['Apego','#apego'],['Narcisismo en la pareja','#narcisismo'],['Falta de deseo en la pareja','sexual'],['La pareja tras tener hijos','#hijos'],['Rupturas, separaciones y divorcios','#rupturas']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A, 2B con sesión individual con cada uno, 3 mezcla sin Gottman ni sistémica, 4 y 5 como en ansiedad) */
  tipos:{titulo:'Problemas de pareja más frecuentes',
    intro:'Estos son los motivos por los que más nos consultan las parejas. Casi nunca llegan solos: unos tiran de otros, y en cada pareja se entretejen de una manera.',
    items:[
    ['Discusiones constantes','Discutís por todo, o siempre por lo mismo, y cada discusión deja más distancia que la anterior.','discusiones'],
    ['Problemas de comunicación','Hablar se ha vuelto difícil: uno ataca, el otro se cierra, y lo importante no llega a decirse.','comunicacion'],
    ['Crisis de pareja','Una etapa en la que la relación se tambalea: un cambio, una pérdida, el desgaste o la sensación de haberse alejado.','crisis'],
    ['Celos','Desconfianza, comprobaciones y preguntas que alivian un momento pero alimentan el miedo, como ocurre en <a href="ansiedad.html">la ansiedad</a>.','celos'],
    ['Infidelidad','Después de una infidelidad se rompe la confianza. Se puede reconstruir o decidir separarse, pero conviene hacerlo con ayuda.','infidelidad'],
    ['Dependencia emocional','Sentir que no puedes estar sin la otra persona, aunque la relación te haga daño. Suele ir unida a la <a href="autoestima.html">autoestima</a>.','dependencia'],
    ['Apego','Cómo aprendimos a querer y a pedir cercanía, y cómo se repite en la pareja: miedo al abandono o necesidad de distancia.','apego'],
    ['Narcisismo en la pareja','Cuando sientes que la relación gira siempre alrededor del otro. Usamos la palabra para empezar a hablar, no para diagnosticar a nadie.','narcisismo'],
    ['Falta de deseo en la pareja','El deseo cambia con los años, el estrés o la crianza, y no siempre al mismo ritmo en los dos. Lo trabajamos también en <a href="sexual.html">terapia sexual</a>.','deseo'],
    ['La pareja tras tener hijos','Menos tiempo, menos sueño y nuevos roles: la crianza pone a prueba hasta a las parejas más sólidas. También cambia el deseo, que trabajamos en <a href="sexual.html">terapia sexual</a>.','hijos'],
    ['Rupturas, separaciones y divorcios','Acompañamos la decisión y el después, para que haya menos daño, sobre todo si hay hijos. Y si la ruptura duele mucho tiempo, trabajamos también el <a href="duelo.html">duelo</a>.','rupturas']
  ]},
  proceso:{titulo:'Cómo trabajamos en terapia de pareja', pasos:[
    ['Primera entrevista, gratuita.','Con los dos. La hace siempre Daniel de la Torre, director del centro. Nos contáis qué os pasa y lo pensamos juntos.'],
    ['Una sesión individual con cada uno.','Para escuchar a cada persona por separado, con calma, lo que quizá cuesta decir delante del otro.'],
    ['Entender qué os pasa.','Cómo discutís, qué se repite y qué está ocurriendo alrededor de la relación.'],
    ['Trabajarlo juntos.','La comunicación, la forma de discutir y de reparar después. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Revisar y decidir.','Vemos cómo vais y os acompañamos en vuestras decisiones, también si decidís separaros.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia conductual integrativa de pareja','Cambiar lo que se puede cambiar y aceptar lo que forma parte del otro, sin convertirlo en una batalla.'],
    ['Terapia centrada en las emociones','Entender los ciclos de reproche y distancia que se repiten, y lo que cada uno necesita debajo de ellos.'],
    ['Terapia de aceptación y compromiso (ACT)','Dejar de pelear con lo que sentís para moveros hacia la relación que queréis tener.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también lo que pasa alrededor de la pareja (el trabajo, la crianza, el dinero, las familias de origen) y cómo choca entre sí.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Podéis venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También podéis hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque viváis fuera de España. Online podéis conectaros desde sitios distintos, incluso si vivís en ciudades diferentes. La sesión dura lo mismo en las dos modalidades.'},
  quien:{titulo:'Quién os atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 5 nuevas (6.1B infidelidad, 6.2B de parte de uno, 6.3 sesiones, 6.4A precio sin cifra, 6.5 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Se puede superar una infidelidad?','Sí, muchas parejas lo consiguen, aunque lleva tiempo. Hace falta entender qué pasó, reparar la confianza poco a poco y decidir juntos si queréis seguir. También acompañamos a quien decide no seguir, para que la ruptura haga menos daño.'],
    ['¿Cuándo conviene ir a terapia de pareja?','Cuando las discusiones se repiten sin salida, atravesáis una crisis, cuesta hablar sin haceros daño o sentís que os habéis distanciado. No hace falta esperar a estar al borde de la ruptura: cuanto antes, más margen hay.'],
    ['¿El psicólogo se pone de parte de uno?','No. Escuchamos a los dos por igual; lo que está en el centro es la relación y cómo os tratáis, no quién tiene razón. Por eso, además de las sesiones conjuntas, hacemos una sesión individual con cada uno.'],
    ['¿Puedo ir a terapia de pareja sin mi pareja?','Sí. A veces solo una de las dos personas quiere empezar, y trabajar tu parte de la relación ya puede cambiar cosas.'],
    ['¿Sirve si estamos pensando en separarnos?','Sí. Puede ayudaros a tomar la decisión con calma y, si os separáis, a hacerlo con menos daño, sobre todo si hay hijos.'],
    ['¿Cuántas sesiones hacen falta?','Depende de cada pareja. Empezamos con sesiones semanales de 60 minutos y, cuando notáis avances, las espaciamos. En la primera entrevista os damos una idea orientativa y la revisamos sobre la marcha.'],
    ['¿Cuánto cuesta la terapia de pareja?','La primera entrevista es gratuita. El precio de las sesiones te lo contamos cuando nos llames o nos escribas.'],   /* sin cifra: el usuario prefiere que llamen y pregunten */
    ['¿Y si hay violencia en la pareja?','Cuando hay violencia, la terapia de pareja no es el recurso adecuado. Si sufres violencia de género, puedes llamar al <strong>016</strong> o escribir por WhatsApp al <strong>600 000 016</strong>: es gratuito, confidencial y no deja rastro en la factura. En cualquier caso, en una urgencia, llama al <strong>112</strong>.'],
    ['¿Se puede hacer terapia de pareja online?','Sí, por videollamada, incluso si cada uno se conecta desde un sitio distinto.'],
    ['¿Hacéis terapia de pareja cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no podéis venir, hacemos la <a href="online.html">terapia online</a>, incluso desde sitios distintos.']
  ],
  k:'pareja terapia de pareja mi pareja y yo no paramos de discutir siempre discutimos no nos entendemos nos queremos pero no funciona superar una ruptura apego narcisismo narcisista dependencia emocional relacion celos infidelidad separacion divorcio',
  feel:['Mi pareja y yo no paramos de discutir','Siempre discutimos, no nos entendemos','Nos queremos, pero no funciona','No consigo superar una ruptura'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* ideas del Gottman Institute (gottman.com: «The Four Horsemen», sus antídotos y «The magic relationship ratio»), en traducción nuestra */
  quotes:[
    'La comunicación es el hilo principal que sostiene una relación. Cuando se rompe, hasta lo más pequeño se convierte en un problema',
    'No solo importa lo que decimos, sino desde dónde lo decimos. Hablar desde el respeto y el cariño cambia por completo una conversación difícil',
    'Cada uno llega a la relación con sus deseos, sus límites y sus circunstancias. Ponerlos en palabras ayuda a ver que muchos problemas no son de la pareja, sino de todo lo que la rodea'
  ],
  /* frases propias (2026-11-08); antes: «Criticar a tu pareja no es lo mismo que expresar una queja» y «El antídoto del desprecio es construir una cultura de aprecio y respeto en la relación» */
  basesIntro:[
    'Los conflictos aparecen en todas las relaciones: discutir no es el problema. Lo importante es cómo se discute y si sabemos <strong>reparar</strong> después.',
    'Una relación no es la suma de dos personas: es un entramado de hábitos, rutinas, <a href="sexual.html">deseos</a> y expectativas.',
    'También acompañamos la <strong>dependencia emocional</strong> y las <a href="duelo.html">rupturas, separaciones o divorcios</a>, con o sin hijos de por medio.',
    'Cada pareja es distinta: en cada una se cruzan historias, familias, esferas vitales y contextos diferentes. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que, en una discusión intensa, el cuerpo entra en alerta, como en <a href="ansiedad.html">la ansiedad</a>: el corazón se acelera y cuesta escuchar y pensar con claridad. Por eso, a veces, lo mejor es parar, calmarse y retomar la conversación después.',
    '<strong>Los estudios de psicología</strong> muestran que hay cuatro formas de discutir que más dañan una relación y que conviene saber detectar: la <strong>crítica</strong>, el <strong>desprecio</strong>, la <strong>actitud defensiva</strong> y la <strong>evasión</strong>, es decir, cerrarse y dejar de responder. De todas, el desprecio —o sentirse despreciado— es la que más pesa: es uno de los mejores predictores de ruptura.',
    'Quejarse no es lo mismo que criticar: la queja habla de algo concreto («me molesta que llegues tarde sin avisar»); la crítica ataca a la persona («eres un egoísta»).',
    '<strong>Los estudios de sociología</strong> señalan el peso del trabajo, la crianza, el dinero o las familias de origen en la vida en pareja: muchos conflictos —celos, infidelidades, reparto de tareas— tienen que ver con lo que pasa alrededor.'
  ],
  together:'En terapia trabajamos la <strong>comunicación</strong>: aprender a reconocer esas formas de discutir, a quejarse sin atacar y a reparar después de una discusión. Para ello necesitamos construir una base de <strong>cariño y respeto mutuo</strong>, que es el mejor antídoto contra el desprecio. Palabras como «narcisista» o «apego ansioso» pueden ayudar a nombrar algo, y las usamos como punto de partida, pero no como sentencia. Lo trabajamos con vosotros, acompañándoos en vuestras decisiones.',
  cta:'Os ayudamos a entender lo que os pasa desde la comprensión y la compasión, construyendo una base de aprecio y confianza.',
  intro:'Para trabajar los problemas de pareja hace falta un enfoque <strong>multidimensional</strong>, porque no tienen una sola cara: están en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «La terapia de pareja es un espacio para entender qué os está pasando y probar otras maneras de relacionaros, tanto si queréis seguir como si estáis pensando en separaros. También atendemos a una sola persona que quiere trabajar su relación.» */
  science:'Hay enfoques de terapia de pareja con estudios controlados, como la terapia conductual integrativa o la centrada en las emociones. '+V,
  refs:'',   /* retirada el 2026-11-08 a petición del usuario; era: The Gottman Institute, «The Four Horsemen: criticism, contempt, defensiveness and stonewalling» y «The Four Horsemen: the antidotes» (gottman.com) */
  beyond:'Una relación no es la suma de dos personas: es un entramado de hábitos, familias, trabajo y expectativas. Palabras como «narcisista» o «apego ansioso» pueden ayudar a nombrar algo, pero también pueden cerrar la conversación antes de empezarla.',
  approaches:[
    ['Conductual integrativa','Cambiar lo que se puede cambiar y aceptar lo que forma parte del otro.','buena'],
    ['Centrada en las emociones','Entender los ciclos de reproche y distancia que se repiten.','buena'],
    ['Sistémica','Mirar la pareja dentro de su familia y su contexto.','variable']
  ],
  alt:'Pareja riendo junta sentada junto a un coche',
  /* VERSIÓN CARLOS (2026-11-09): página resumida (1A sin etiquetas, 2C enfoque recortado, 3A tipos en lista, 4A un solo bloque
     «Cómo trabajamos», 5A preguntas en preguntas.html). Si existe «corta», motivo.js usa estos textos en vez de los largos de arriba,
     que se quedan intactos (las preguntas de arriba las usa preguntas.html). Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Los conflictos aparecen en todas las relaciones: discutir no es el problema. Lo importante es cómo se discute y si sabemos <strong>reparar</strong> después.',
      'Una relación no es la suma de dos personas: es un entramado de hábitos, <a href="sexual.html">deseos</a> y expectativas, y en cada pareja se cruzan historias, familias y contextos distintos. Por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que, en una discusión intensa, el cuerpo entra en alerta, como en <a href="ansiedad.html">la ansiedad</a>, y cuesta escuchar. A veces lo mejor es parar y retomar la conversación después.',
      '<strong>Los estudios de psicología</strong> señalan cuatro formas de discutir que más dañan una relación: la <strong>crítica</strong>, el <strong>desprecio</strong>, la <strong>actitud defensiva</strong> y la <strong>evasión</strong>. De todas, el desprecio es la que más pesa.',
      'Quejarse no es lo mismo que criticar: la queja habla de algo concreto («me molesta que llegues tarde sin avisar»); la crítica ataca a la persona («eres un egoísta»).',
      '<strong>Los estudios de sociología</strong> señalan el peso del trabajo, la crianza, el dinero o las familias de origen: muchos conflictos tienen que ver con lo que pasa alrededor de la pareja.'
    ],
    together:'En terapia trabajamos la <strong>comunicación</strong>: reconocer esas formas de discutir, quejarse sin atacar y reparar después, sobre una base de <strong>cariño y respeto mutuo</strong>. Palabras como «narcisista» o «apego ansioso» nos sirven como punto de partida, no como sentencia. Y os acompañamos en vuestras decisiones.',
    tipos:{titulo:'Problemas de pareja más frecuentes', intro:'Casi nunca llegan solos: unos tiran de otros.', items:[
      ['Discusiones y problemas de comunicación','discutís por todo o siempre por lo mismo; uno ataca, el otro se cierra, y lo importante no llega a decirse.','discusiones'],   /* 2026-11-10: dos líneas en una (máximo 10) */
      ['Crisis de pareja','un cambio, una pérdida o el desgaste hacen que la relación se tambalee.','crisis'],
      ['Celos','comprobaciones y preguntas que alivian un momento pero alimentan el miedo.','celos'],
      ['Infidelidad','se rompe la confianza; se puede reconstruir o decidir separarse.','infidelidad'],
      ['Dependencia emocional','no poder estar sin la otra persona aunque te haga daño; suele ir unida a la <a href="autoestima.html">autoestima</a>.','dependencia'],
      ['Apego','cómo aprendimos a querer se repite en la pareja: miedo al abandono o necesidad de distancia.','apego'],
      ['Narcisismo en la pareja','la relación gira siempre alrededor del otro; usamos la palabra para hablar, no para diagnosticar.','narcisismo'],
      ['Falta de deseo','cambia con los años, el estrés o la crianza; lo trabajamos también en terapia sexual.','deseo'],
      ['La pareja tras tener hijos','menos tiempo, menos sueño y nuevos roles.','hijos'],
      ['Rupturas, separaciones y divorcios','acompañamos la decisión y el después, para que haya menos daño, también en el <a href="duelo.html">duelo</a>.','rupturas']
    ]},
    trabajo:{titulo:'Cómo trabajamos en terapia de pareja',
      pasos:[
        ['Primera entrevista, gratuita, con los dos.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Una sesión individual con cada uno.','Para escuchar con calma lo que cuesta decir delante del otro.'],
        ['Sesiones conjuntas de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando notáis avances.']
      ],
      texto:'Trabajamos con la terapia conductual integrativa de pareja, la centrada en las emociones y las terapias contextuales, como la de aceptación y compromiso (ACT). Podéis venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a>, también si vivís fuera de España o en ciudades distintas. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    },
    /* otras terapias al final de la página, en tarjetas con dibujo (opción B, 2026-11-09): [slug, una línea] */
    /* «Otras terapias que pueden interesarte» quitado el 2026-11-10 (menos scroll); se puede recuperar renombrando a relacionadas */
    relacionadasQuitadas:[
      ['autoestima','Cuando la dependencia o las dudas sobre ti pesan en la relación.'],
      ['duelo','Si una ruptura sigue doliendo mucho tiempo después.'],
      ['sexual','Cuando el deseo o la intimidad se han vuelto un problema.']
    ],
    alert:'Si hay violencia en la pareja, la terapia de pareja no es el recurso adecuado. Si sufres violencia de género, llama al <strong>016</strong> o escribe por WhatsApp al <strong>600 000 016</strong> (gratuito, confidencial y sin rastro en la factura); en una urgencia, al <strong>112</strong>.'
  }
},
{
  slug:'tdah', name:'TDAH y atención', sym:'No me puedo concentrar en nada',
  h1:'Terapia para el TDAH y los problemas de atención',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'TDAH en adultos y niños: psicólogo en Madrid y online',
  revisada:true,   /* sin la marca «borrador» */
  seoDesc:'¿Te cuesta concentrarte o te preocupa tu hijo? TDAH en adultos y niños, mirando a la persona y no solo la etiqueta. Centro sanitario en Madrid y online.',
  pagina:'tdah.html',   /* página fija; motivo.html?m=tdah lleva a ella */
  enfoqueDe:'del TDAH',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable en esta página; niños y pantallas llevan a su terapia */
  subs:[['TDAH en adultos','#adultos'],['TDAH en niños y adolescentes','infancia'],['Falta de concentración','#concentracion'],['Procrastinación','#procrastinacion'],['Impulsividad','#impulsividad'],['Inquietud','#inquietud'],['Hiperactividad','#hiperactividad'],['Desorganización','#desorganizacion'],['Olvidos y despistes','#olvidos'],['Dificultades en los estudios','#estudios'],['Uso excesivo del móvil y las pantallas','adicciones']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A «Cómo se nota» en vez de «Síntomas», 2A con valoración —sí la hace, con entrevista y cuestionarios—, 3B con ACT y atención plena —sí las usa—, 4 y 5 como en ansiedad) */
  tipos:{titulo:'Cómo se nota el TDAH',
    intro:'Lo que los manuales llaman síntomas del TDAH son, en la vida diaria, dificultades concretas que no aparecen igual en todas las personas ni en todos los ámbitos. Estas son las más frecuentes.',
    items:[
    ['TDAH en adultos','Se nota menos en el movimiento y más en la desorganización, los olvidos, la procrastinación o una inquietud por dentro. Muchos adultos se reconocen tarde, a veces cuando diagnostican a un hijo.','adultos'],
    ['Falta de concentración','Empezar algo y perder el hilo, sobre todo en tareas largas o poco interesantes. En cambio, en lo que apasiona, la atención puede ser muy intensa.','concentracion'],
    ['Procrastinación','Aplazar lo importante hasta el último momento. No es pereza: cuesta arrancar si no hay una urgencia que empuje.','procrastinacion'],
    ['Impulsividad','Hablar o actuar antes de pensarlo, interrumpir, decidir deprisa. Cuando afecta sobre todo a las emociones y a las relaciones, puede tener que ver también con <a href="personalidad.html">la personalidad</a>.','impulsividad'],
    ['Inquietud','En los adultos, más que moverse, es una inquietud por dentro: cuesta estar quieto, esperar o descansar.','inquietud'],
    ['Hiperactividad','Se ve más en la infancia: no parar, levantarse, moverse sin descanso. Con los años suele convertirse en inquietud.','hiperactividad'],
    ['Desorganización','Cuesta planificar, ordenar el tiempo y los espacios y calcular cuánto lleva cada cosa.','desorganizacion'],
    ['Olvidos y despistes','Perder cosas, olvidar citas o encargos, dejar tareas a medias.','olvidos'],
    ['Dificultades en los estudios','Estudiar cuesta más por la atención y la organización que por la capacidad. Trabajamos también con <a href="infancia.html">la familia</a> y, si hace falta, con el centro educativo.','estudios']
  ]},
  proceso:{titulo:'Cómo trabajamos el TDAH', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Una valoración cuidadosa.','Tu historia desde la infancia, cuestionarios y cómo se nota en los distintos ámbitos de tu vida, sin prisa por poner la etiqueta.'],
    ['Entrenar lo que cuesta.','La organización, la planificación, las rutinas y el manejo de la impulsividad en tu día a día. Con niños, trabajamos también con la familia y, si hace falta, con el colegio. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas medicación o se está valorando, nos coordinamos con tu psiquiatra o neurólogo.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando te organizas con más soltura, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual','En adultos, entrenar la organización, la planificación y el manejo de la impulsividad en la vida real.'],
    ['Entrenamiento a familias','Pautas para madres, padres y colegio, para que la ayuda no se quede en la consulta.'],
    ['ACT y atención plena','Aprender a notar dónde está la atención y volver a lo que importa, sin pelearse con la inquietud. Las usamos como complemento.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también el ritmo de vida, las pantallas y lo que te piden la escuela o el trabajo.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades. Con niños pequeños solemos preferir la consulta presencial.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1B diagnóstico en adultos, 6.2A TDAH o ansiedad, 6.3A con la edad, 6.4 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cómo saber si tengo TDAH?','Despistarse o aplazar tareas de vez en cuando es normal. Se habla de TDAH cuando las dificultades de atención, inquietud o impulsividad vienen de la infancia, se mantienen y afectan a los estudios, al trabajo o a las relaciones. Un cuestionario en internet no basta: hace falta una valoración profesional.'],
    ['¿Cómo se diagnostica el TDAH en adultos?','Con una valoración clínica: una entrevista sobre tu historia desde la infancia, cuestionarios y, si es posible, lo que cuentan personas cercanas. No hay un análisis ni una prueba de imagen que lo detecte. Lo hacemos con calma y sin prisa por poner una etiqueta.'],
    ['¿Existe el TDAH en adultos?','Sí. A veces se descubre después de que diagnostiquen a un hijo. En los adultos se nota más en la desorganización, los olvidos, la procrastinación o la inquietud interna que en la hiperactividad.'],
    ['¿Es TDAH o es ansiedad?','La <a href="ansiedad.html">ansiedad</a> también dispersa la atención: cuando hay preocupación, cuesta concentrarse. La diferencia es que en el TDAH las dificultades vienen de la infancia y aparecen en varios ámbitos (casa, estudios, trabajo). A veces se dan las dos.'],
    ['¿El TDAH se quita con la edad?','En muchas personas las dificultades disminuyen con los años; en otras siguen, aunque cambian de forma: la hiperactividad suele convertirse en inquietud. Con ayuda se aprende a organizarse.'],
    ['¿Atendéis a niños y adolescentes?','Sí, con el consentimiento por escrito de quienes tienen la patria potestad y, desde los 16 años, el del propio adolescente. Trabajamos también con madres y padres y, cuando hace falta, nos coordinamos con el colegio.'],
    ['¿Hace falta medicación para el TDAH?','En terapia psicológica no se recetan fármacos. En algunos casos la medicación ayuda, y esa valoración corresponde a psiquiatría o neurología. Si la tomas o se está valorando, nos coordinamos con quien la lleve.'],
    ['¿La terapia online funciona para el TDAH?','En adultos funciona bien y ayuda a mantener la constancia. Con niños pequeños solemos preferir la consulta presencial y el trabajo con la familia.'],
    ['¿Atendéis el TDAH en adultos cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'tdah atencion no me puedo concentrar no consigo concentrarme me cuesta concentrarme se me olvidan las cosas estudiar como saber si tengo tdah adulto hiperactividad despiste impulsividad infancia colegio ayudar a mi hijo',
  feel:['No me puedo concentrar en nada','Me cuesta concentrarme y se me olvidan las cosas','¿Y si tengo TDAH de adulto?','No sé cómo ayudar a mi hijo con TDAH'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* citas literales de Marino Pérez Álvarez: (2014) entrevista en Infocop «Los intereses que hay detrás del diagnóstico del TDAH»;
     (2017) «The Four Causes of ADHD: Aristotle in the Classroom», pág. 11 del PDF (en inglés: la traducción es nuestra) */
  /* frases propias (2026-11-08); las de arriba eran las citas literales anteriores:
     «Sin negar el problema, su solución no debiera ser a costa de “enfermar” a los niños»;
     «Cualquier problema relacionado con la «atención», la «actividad» y la «impulsividad» no queda fuera del aprendizaje, como aspectos del desarrollo del autocontrol. Algunos niños pueden necesitar un «entrenamiento» adicional (no un tratamiento)»;
     «Resituar el problema en su contexto que no es otro que el del aprendizaje y educación de la atención y la actividad de los niños, seguramente una tarea más difícil de lo que se pensaba, sobre todo, en el mundo de hoy» */
  quotes:[
    'Un diagnóstico describe lo que pasa, pero no explica quién eres. Detrás de cada etiqueta hay una persona con su historia y su manera de vivir',
    'Un niño inquieto no es un niño enfermo, ni un adulto disperso es un adulto disfuncional. Esa inquietud también puede ser energía, curiosidad y ganas de descubrir',
    'La paciencia, la constancia y la tolerancia a la frustración también se entrenan. No se trata de convertir a nadie en enfermo, sino de darle herramientas'
  ],
  basesIntro:[
    'Usamos la palabra TDAH porque es como se busca y se diagnostica, pero no nos quedamos en ella. El TDAH es un problema, pero no una enfermedad. Podemos verlo como una <strong>forma de ser</strong>, con sus dificultades y también con sus cualidades. Vemos a la persona entera: su manera de estar en el mundo, su curiosidad, su energía y lo que le cuesta.',
    'Por eso preferimos hablar de <strong>problemas</strong> en vez de síntomas, y de <strong>ayudas y entrenamiento</strong> en vez de tratamiento. Las dificultades y especificidades de la atención y la inquietud existen y hay que entenderlas en su amplitud, sin medicalizar antes de tiempo lo que a veces es una forma de ser. Tratamos de ayudar mirando a la persona, no solo el diagnóstico.',
    'Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, los distintos ámbitos de la vida y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> no han encontrado un marcador que permita diagnosticarlo: el diagnóstico es clínico, a partir de la conducta en distintos contextos. Los estudios genéticos muestran que el TDAH tiene un peso hereditario importante, pero repartido en muchas variantes de efecto pequeño que influyen sin decidir por sí solas.',
    '<strong>Los estudios de neurología</strong> encuentran diferencias entre grupos de personas y mucha diversidad entre ellas, pero no un patrón que sirva para diagnosticar a nadie en concreto. Así que preferimos no explicarlo solo como una avería neuroquímica: el cerebro participa, como en todo lo que hacemos, pero quien aprende a atender es la persona.',
    'Prestar atención es algo que se aprende, y la vida actual no lo pone fácil. <strong>Los estudios de psicología</strong> muestran que poder esperar, concentrarse y aceptar el aburrimiento no vienen de serie: se aprenden si hay ocasiones para practicarlos. A veces la ayuda pasa también por orientar a <a href="infancia.html">la familia</a> y al colegio.',
    '<strong>Los estudios de sociología</strong> señalan que vivimos a un ritmo acelerado, impulsivo y pendiente de muchas cosas a la vez, con <a href="adicciones.html">pantallas</a> que reclaman la atención a cada momento y niños acostumbrados a tenerlo todo al instante. Esa forma de vida choca con lo que piden la escuela o el trabajo.'
  ],
  together:'En los adultos también pasa, aunque a menudo se identifica tarde: muchos se reconocen en esto después de toda una vida sin ponerle nombre, y a veces con la <a href="autoestima.html">autoestima</a> dañada tras años de escuchar que eran vagos o despistados. Viven a otro ritmo: piensan deprisa, el cuerpo les pide moverse y no encajan en el compás de los demás. La idea no es cambiar quién eres, sino trabajar para que esos ritmos encajen mejor con tu vida y con lo que te pide tu día a día. Lo trabajamos contigo, paso a paso.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Pérez Álvarez (2014), «Los intereses que hay detrás del diagnóstico del TDAH» (entrevista, Infocop); (2017), «The Four Causes of ADHD: Aristotle in the Classroom»; (2018), «El TDAH es un problema, pero no una enfermedad»; Ubieto y Pérez Álvarez (2018), «Infancias hiperpautadas y al tiempo desreguladas» (entrevista, Infocop) */
  cta:'Podemos ayudarte a organizarte con lo que vives, sin quedarte en la etiqueta.',
  intro:'Para trabajar el TDAH hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «El TDAH es el nombre que se da a dificultades persistentes de atención, inquietud o impulsividad que afectan a los estudios, al trabajo o a la vida diaria. Atendemos a adultos y, con el consentimiento de la familia, a menores.» */
  science:'No hay un marcador biológico para diagnosticarlo: el diagnóstico es clínico, a partir de la conducta en distintos contextos. Hay estudios genéticos que encuentran muchas variantes de efecto pequeño.',
  beyond:'Cuidado con la explicación circular: «no atiende porque tiene TDAH, y tiene TDAH porque no atiende». La atención no es solo algo que está dentro de la cabeza: también es lo que piden la escuela o el trabajo. Ni solo naturaleza ni solo crianza. El diagnóstico puede aliviar —por fin un nombre— y a la vez convertirse en identidad; la idea es no quitar ese alivio sin ofrecer otro.',
  approaches:[
    ['Cognitivo-conductual (adultos)','Organización, planificación y manejo de la impulsividad en la vida real.','moderada'],
    ['Entrenamiento a familias','Pautas para madres, padres y escuela.','buena en infancia'],
    ['Medicación','Es un tratamiento médico: si la hay, nos coordinamos con quien la prescribe.','depende del caso']
  ],
  alt:'Mujer estudiando con un portátil y apuntes en una habitación luminosa',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Usamos la palabra TDAH porque es como se busca y se diagnostica, pero no nos quedamos en ella. El TDAH es un problema, pero no una enfermedad: podemos verlo como una <strong>forma de ser</strong>, con sus dificultades y también con sus cualidades.',
      'Por eso preferimos hablar de <strong>problemas</strong> en vez de síntomas, y de <strong>ayudas y entrenamiento</strong> en vez de tratamiento. En cada persona se cruzan el cuerpo, su historia y el entorno: por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> no han encontrado un marcador que permita diagnosticarlo: el diagnóstico es clínico. El TDAH tiene un peso hereditario importante, pero repartido en muchas variantes de efecto pequeño que influyen sin decidir por sí solas.',
      '<strong>Los estudios de neurología</strong> encuentran diferencias entre grupos de personas, pero no un patrón que sirva para diagnosticar a nadie en concreto. El cerebro participa, como en todo lo que hacemos, pero quien aprende a atender es la persona.',
      'Prestar atención es algo que se aprende. <strong>Los estudios de psicología</strong> muestran que poder esperar, concentrarse y aceptar el aburrimiento no vienen de serie: se aprenden si hay ocasiones para practicarlos. A veces la ayuda pasa también por orientar a <a href="infancia.html">la familia</a> y al colegio.',
      '<strong>Los estudios de sociología</strong> señalan que vivimos a un ritmo acelerado, con <a href="adicciones.html">pantallas</a> que reclaman la atención a cada momento. Esa forma de vida choca con lo que piden la escuela o el trabajo.'
    ],
    together:'En los adultos a menudo se identifica tarde, a veces con la <a href="autoestima.html">autoestima</a> dañada tras años de escuchar que eran vagos o despistados. La idea no es cambiar quién eres, sino trabajar para que tus ritmos encajen mejor con tu vida y con lo que te pide tu día a día. Lo trabajamos contigo, paso a paso.',
    tipos:{titulo:'Cómo se nota el TDAH', intro:'No aparece igual en todas las personas ni en todos los ámbitos.', items:[
      ['TDAH en adultos','se nota más en la desorganización, los olvidos o una inquietud por dentro que en el movimiento.','adultos'],
      ['Falta de concentración','perder el hilo en tareas largas o poco interesantes, y atender mucho en lo que apasiona.','concentracion'],
      ['Procrastinación','aplazar lo importante hasta el último momento; no es pereza.','procrastinacion'],
      ['Impulsividad','hablar o actuar antes de pensarlo, interrumpir, decidir deprisa.','impulsividad'],
      ['Inquietud','en los adultos, más que moverse, cuesta estar quieto, esperar o descansar.','inquietud'],
      ['Hiperactividad','no parar, sobre todo en la infancia; con los años suele convertirse en inquietud.','hiperactividad'],
      ['Desorganización','cuesta planificar, ordenar el tiempo y calcular cuánto lleva cada cosa.','desorganizacion'],
      ['Olvidos y despistes','perder cosas, olvidar citas o dejar tareas a medias.','olvidos'],
      ['Dificultades en los estudios','más por la atención y la organización que por la capacidad; trabajamos también con <a href="infancia.html">la familia</a>.','estudios'],
      ['TDAH en niños y adolescentes','se nota en clase y en casa; trabajamos también con la familia y el colegio, como en <a href="infancia.html">infancia y adolescencia</a>.','ninos']
    ]},
    trabajo:{titulo:'Cómo trabajamos el TDAH',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Una valoración cuidadosa.','Tu historia desde la infancia, cuestionarios y cómo se nota en tu vida, sin prisa por poner la etiqueta.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando te organizas con más soltura. Si tomas medicación, nos coordinamos con tu psiquiatra o neurólogo.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual, el entrenamiento a familias, la atención plena y las terapias contextuales, como la ACT. Con niños, trabajamos también con la familia y, si hace falta, con el colegio. Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España; con niños pequeños solemos preferir la consulta presencial. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'adicciones', name:'Adicciones', sym:'Estoy enganchado y no puedo dejarlo', delicate:true,
  h1:'Terapia para las adicciones',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Adicciones: tratamiento psicológico en Madrid y online',
  revisada:true,   /* sin la marca «borrador» */
  seoDesc:'¿Quieres dejar el alcohol, el juego o el móvil? Tratamiento psicológico de adicciones, también para familias. Centro sanitario en Madrid y online.',
  pagina:'adicciones.html',   /* página fija; motivo.html?m=adicciones lleva a ella */
  enfoqueDe:'de las adicciones',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (tipos o las preguntas de recaídas y familiares); pastillas y dependencia emocional llevan a su terapia */
  subs:[['Alcohol','#alcohol'],['Juego y apuestas online','#juego'],['Adicción al móvil','#movil'],['Redes sociales','#redes'],['Videojuegos','#videojuegos'],['Cannabis','#cannabis'],['Cocaína','#cocaina'],['Pornografía','#pornografia'],['Compras compulsivas','#compras'],['Dependencia de pastillas para dormir','insomnio'],['Dependencia emocional','pareja'],['Recaídas','#recaidas'],['Familiares de personas con adicción','#familiares']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A, 2 único con prevención de recaídas al final, 3A + trabajo con la familia, 4 y 5 como en las demás) */
  tipos:{titulo:'Tipos de adicciones',
    intro:'Hay adicciones con sustancia, como el alcohol o la cocaína, y sin sustancia, como el juego o el móvil. Cambia el objeto, pero el círculo se parece: lo que alivia hoy es lo que ata mañana.',
    items:[
    ['Alcohol','Beber para relajarte, para dormir o para estar con otros, y notar que cada vez cuesta más parar. Si bebes a diario o en cantidad, dejarlo necesita valoración médica.','alcohol'],
    ['Juego y apuestas online','Apuestas deportivas, casinos online o tragaperras: perseguir las pérdidas, mentir sobre lo que juegas o pedir dinero para seguir. Con el móvil, el juego está siempre a mano.','juego'],
    ['Adicción al móvil','Mirarlo nada más despertar, al acostarte y cada pocos minutos, aunque quieras dejar de hacerlo.','movil'],
    ['Redes sociales','Horas que se van sin darte cuenta, comparaciones que te dejan peor y la sensación de no poder desconectar. Afecta también a la <a href="autoestima.html">autoestima</a>.','redes'],
    ['Videojuegos','Cuando el juego ocupa el lugar del sueño, de los estudios, del trabajo o de las relaciones, y dejarlo genera irritabilidad.','videojuegos'],
    ['Cannabis','Empieza para relajarse o para dormir, y acaba siendo difícil pasar un día sin él. Puede afectar a la motivación, a la memoria y al ánimo.','cannabis'],
    ['Cocaína','Engancha por la euforia y la energía que promete, y deja detrás bajones, ansiedad y gastos. Con frecuencia va unida al alcohol.','cocaina'],
    ['Pornografía','Cuando su consumo se vuelve compulsivo, ocupa mucho tiempo o afecta a la vida sexual y a la pareja. También la trabajamos en <a href="sexual.html">terapia sexual</a>.','pornografia'],
    ['Compras compulsivas','Comprar para aliviar el malestar, con un alivio que dura poco y deja culpa y deudas.','compras']
  ]},
  proceso:{titulo:'Cómo trabajamos las adicciones', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender qué te aporta.','Para qué sirve el consumo, en qué momentos aparece y qué lo mantiene.'],
    ['Cambiar las condiciones y construir alternativas.','Las situaciones que te empujan a consumir, otras formas de conseguir lo que buscas y proyectos que llenen ese hueco. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con medicina y servicios especializados.','Si hay sustancias, abstinencia o medicación, trabajamos junto a tu médico o a los servicios de adicciones.'],
    ['Prevenir recaídas y cerrar.','Aprendemos de las caídas y, cuando el cambio se sostiene, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Entrevista motivacional','Trabajar las dudas entre seguir y dejarlo, sin sermones ni presiones.'],
    ['Terapia cognitivo-conductual y prevención de recaídas','Detectar las situaciones de riesgo, ensayar alternativas y prepararse para las caídas.'],
    ['Terapia de aceptación y compromiso (ACT)','Convivir con el deseo de consumir sin obedecerlo. La usamos como complemento.'],
    ['Trabajo con la familia','Ayudar a la familia a cuidarse, a no alimentar el problema sin querer y a acompañar el cambio.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también la vida que llevas, las personas con las que estás y los proyectos que te dan fuerza.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1A recaídas, 6.2A juego, 6.3A móvil, 6.4 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cuándo es una adicción y no solo un hábito?','Cuando lo haces aunque te esté haciendo daño, cada vez necesitas más, te cuesta parar aunque quieras o va ocupando el lugar de otras cosas importantes. No hace falta tocar fondo para pedir ayuda.'],
    ['¿Cómo saber si tengo un problema con el juego?','Algunas señales: jugar más dinero o más tiempo del que pensabas, intentar recuperar lo perdido, mentir sobre lo que juegas, pedir dinero o sentir irritabilidad cuando no puedes jugar. Si te reconoces en varias, merece la pena consultarlo.'],
    ['¿Tratáis la adicción al móvil, a las redes o al juego?','Sí. Además del alcohol y otras sustancias, trabajamos las adicciones sin sustancia: juego y apuestas online, móvil, redes sociales, videojuegos o <a href="sexual.html">pornografía</a>.'],
    ['¿Cómo reducir el uso del móvil?','Más que fuerza de voluntad, ayuda cambiar las condiciones: quitar notificaciones, dejar el móvil fuera del dormitorio, fijar momentos sin pantalla y recuperar actividades que te llenen. Si aun así no puedes, lo trabajamos contigo.'],
    ['¿Se puede dejar una adicción?','Sí, aunque suele llevar tiempo. Si hay caídas —lo que mucha gente llama recaídas—, también se trabajan. No prometemos plazos, pero sí acompañarte para entender qué papel cumple en tu vida y construir alternativas.'],
    ['¿Qué pasa si tengo una recaída?','Una caída no es una recaída, y no borra el camino recorrido: forma parte del proceso y también se aprende de ella. Lo importante es pedir ayuda pronto y ver qué la provocó.','recaidas'],
    ['¿Puedo dejar el alcohol de golpe?','Si bebes a diario o en cantidad, no conviene dejarlo de golpe sin valoración médica, porque la abstinencia puede ser peligrosa. Lo mismo vale para las pastillas para dormir o los tranquilizantes: se dejan poco a poco y con pauta médica. Nos coordinamos con medicina y con los servicios especializados.'],
    ['¿Qué hago si mi familiar no quiere pedir ayuda?','Puedes venir tú. Trabajar con la familia ayuda a cuidarse, a no alimentar el problema sin querer y a facilitar que la persona dé el paso.','familiares'],
    ['¿Tratáis las adicciones cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'adicciones alcohol beber juego apuestas casino tragaperras pantallas movil enganchado videojuegos redes no puedo dejar de beber no puedo dejar de jugar no puedo dejar el movil consumo drogas',
  feel:['No puedo dejar de beber','No puedo dejar de jugar','No puedo dejar el móvil','Me prometo que es la última vez'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta (no son citas de autor). Citas dentro del texto: Ovidio, citado por Pérez Jara en la charla «¿Existe la libertad?» (2026, ~23:00);
     «controlar las condiciones que nos controlan»: Marino Pérez Álvarez resumiendo a Skinner en el coloquio de esa charla (~1:13:00);
     el móvil como «última voluntad»: Pérez Álvarez (2015), «Reflexividad, escritura y génesis del sujeto moderno», pág. 27 del PDF */
  quotes:[
    'Nadie se engancha a algo que no le aporta nada. Entender qué le aporta es el comienzo para poder dejarlo',
    'Detrás de cada consumo hay algo que se busca: calma, compañía, olvido o un respiro. Encontrar otras maneras de conseguirlo es parte del camino',
    'Una caída no es una recaída. Las caídas no borran el camino recorrido: forman parte del proceso, y también se aprende de ellas. Pedir ayuda no es rendirse, es la forma más realista de recuperar el control'
  ],
  /* frases nuevas (2026-11-08); antes: «Una adicción te quita libertad. El objetivo de la terapia es que vuelvas a tener opciones»; «No se trata solo de dejar la adicción, sino de llenar ese hueco con otros proyectos»; «Las palabras, los apoyos y los proyectos son los que dan fuerza. Nosotros te ayudamos a trabajarlos» */
  basesIntro:[
    'Una adicción te quita <strong>libertad</strong>: cada vez eliges menos. Por eso dejarla no es solo cuestión de fuerza de voluntad, y el objetivo de la terapia es que vuelvas a tener opciones.',
    'Para poder hacer lo que quieres, antes tienes que soltar lo que te ata. Salir de una adicción abre la puerta a todo lo demás: tu familia, tu trabajo, tus amigos, tus proyectos personales.',
    'Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, los distintos ámbitos de la vida y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que algunas sustancias, como el alcohol o ciertas <a href="insomnio.html">pastillas para dormir</a>, crean dependencia física: el cuerpo se acostumbra y, cuando faltan, protesta. Es lo que se conoce como <strong>síndrome de abstinencia</strong>, así que a veces hace falta acompañamiento médico. Otras, como el cannabis o la cocaína, enganchan sobre todo por lo que alivian o prometen, aunque al dejarlas también puede haber malestar físico.',
    '<strong>Los estudios de neurología</strong> muestran que el consumo, el juego, las compras compulsivas o las pantallas activan los sistemas de recompensa del cerebro. Pero explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, en qué momentos aparece y qué lo mantiene.',
    'Ya lo escribió Ovidio hace dos mil años: «veo lo mejor y lo apruebo, pero sigo lo peor». Saber lo que nos conviene no basta. Las adicciones están muy relacionadas con la <a href="ansiedad.html">ansiedad</a>: muchas veces caemos en ellas buscando calmarla, y funciona a corto plazo, pero a la larga la empeora. <strong>Los estudios de psicología</strong> muestran que el autocontrol no consiste en apretar los dientes, sino en cambiar las situaciones que nos empujan a consumir y que alimentan esos círculos viciosos: se trata, como planteaba Skinner, de aprender a «controlar las condiciones que nos controlan». Eso se aprende, y lo trabajamos contigo.',
    '<strong>Los estudios de sociología</strong> señalan que las pantallas y el móvil empeoran el malestar de muchas personas, pero no son la única causa: hay que mirar también la vida que se lleva. Consultar el móvil se ha vuelto una respuesta casi automática. Podríamos decir que no lo decidimos del todo y que no somos del todo libres en la relación que tenemos con estas tecnologías. Si el móvil se ha convertido en lo primero y lo último de tu día, le pasa a mucha gente, y podemos acompañarte para que vuelva a ser una herramienta y no el centro de tu vida.'
  ],
  together:'La capacidad de elegir no nace de dentro: la construimos con el lenguaje y con los demás, que nos dan una identidad y un futuro por el que esforzarse. Nadie sale solo de una adicción. Las palabras, los apoyos y los proyectos son los que dan fuerza, y te ayudamos a construirlos. Dejar el alcohol, el juego, las drogas o las pantallas es necesario, pero no suficiente: lo más importante es llenar ese hueco con una vida que merezca la pena.',
  cta:'Podemos ayudarte a dar el primer paso y acompañarte en cada parte del proceso.',
  intro:'Para trabajar una adicción hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Hablamos de adicción cuando algo —alcohol, juego, pantallas u otras sustancias— se repite aunque te esté haciendo daño y cuesta dejarlo aunque quieras.» */
  science:'Las guías combinan intervenciones psicológicas (entrevista motivacional, terapia cognitivo-conductual, manejo de contingencias) y, en las sustancias, tratamiento médico.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Pérez Jara y Camprubí (2026), «¿Existe la libertad?» (charla); Pérez Álvarez (2015), «Reflexividad, escritura y génesis del sujeto moderno»; (2025), «La salud mental de los adolescentes: un síntoma de la sociedad» */
  beyond:'Explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, en qué momentos aparece y qué lo mantiene. Mirarlo así no quita responsabilidad: da más sitios por donde intervenir.',
  approaches:[
    ['Entrevista motivacional','Trabajar la ambivalencia entre seguir y dejarlo.','buena'],
    ['Cognitivo-conductual y prevención de recaídas','Detectar situaciones de riesgo y ensayar alternativas.','buena'],
    ['Contextuales y ACT','Convivir con el deseo de consumir sin obedecerlo.','creciente']
  ],
  coord:'Con alcohol u otras sustancias puede hacer falta un tratamiento médico. Nos coordinamos con medicina y con los servicios especializados.',
  alt:'Corredor sonriente con su medalla al terminar una carrera',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Una adicción te quita <strong>libertad</strong>: cada vez eliges menos. Por eso dejarla no es solo cuestión de fuerza de voluntad, y el objetivo de la terapia es que vuelvas a tener opciones.',
      'Salir de una adicción abre la puerta a todo lo demás: tu familia, tu trabajo, tus amigos, tus proyectos. En cada persona se cruzan el cuerpo, su historia y el entorno: por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[   /* cuatro párrafos, en el mismo orden que los largos, para que las frases verdes (quotes) sigan en su sitio */
      '<strong>Los estudios de biología</strong> muestran que algunas sustancias, como el alcohol o ciertas <a href="insomnio.html">pastillas para dormir</a>, crean dependencia física: cuando faltan, aparece el <strong>síndrome de abstinencia</strong>, y a veces hace falta acompañamiento médico.',
      '<strong>Los estudios de neurología</strong> muestran que el consumo, el juego o las pantallas activan los sistemas de recompensa del cerebro. Pero explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, cuándo aparece y qué lo mantiene.',
      'Ya lo escribió Ovidio: «veo lo mejor y lo apruebo, pero sigo lo peor». Muchas veces caemos en una adicción buscando calmar la <a href="ansiedad.html">ansiedad</a>, y a la larga la empeora. <strong>Los estudios de psicología</strong> muestran que el autocontrol no consiste en apretar los dientes, sino en aprender a «controlar las condiciones que nos controlan».',
      '<strong>Los estudios de sociología</strong> señalan que las pantallas y el móvil empeoran el malestar de muchas personas, aunque no son la única causa: hay que mirar también la vida que se lleva. Si el móvil se ha convertido en lo primero y lo último de tu día, podemos acompañarte para que vuelva a ser una herramienta.'
    ],
    together:'Nadie sale solo de una adicción. Las palabras, los apoyos y los proyectos son los que dan fuerza, y te ayudamos a construirlos. Dejar el alcohol, el juego, las drogas o las pantallas es necesario, pero no suficiente: lo más importante es llenar ese hueco con una vida que merezca la pena.',
    tipos:{titulo:'Adicciones más frecuentes', intro:'Con sustancia o sin ella, el círculo se parece: lo que alivia hoy es lo que ata mañana.', items:[
      ['Alcohol','beber para relajarte, para dormir o para estar con otros, y notar que cada vez cuesta más parar.','alcohol'],
      ['Juego y apuestas online','perseguir las pérdidas, mentir sobre lo que juegas o pedir dinero para seguir.','juego'],
      ['Adicción al móvil','mirarlo al despertar, al acostarte y cada pocos minutos, aunque quieras dejarlo.','movil'],
      ['Redes sociales','horas que se van sin darte cuenta y comparaciones que dañan la <a href="autoestima.html">autoestima</a>.','redes'],
      ['Videojuegos','cuando el juego ocupa el lugar del sueño, los estudios o las relaciones.','videojuegos'],
      ['Cannabis','empieza para relajarse o para dormir, y acaba siendo difícil pasar un día sin él.','cannabis'],
      ['Cocaína','engancha por la euforia que promete y deja bajones, ansiedad y gastos.','cocaina'],
      ['Pornografía','cuando su consumo se vuelve compulsivo; la trabajamos también en <a href="sexual.html">terapia sexual</a>.','pornografia'],
      ['Compras compulsivas','comprar para aliviar el malestar, con un alivio que dura poco y deja culpa y deudas.','compras'],
      ['Familiares de personas con adicción','si alguien cercano no quiere pedir ayuda, puedes venir tú; te ayudamos a cuidarte y a facilitar que dé el paso.','familiares']
    ]},
    trabajo:{titulo:'Cómo trabajamos las adicciones',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender qué te aporta.','Para qué sirve el consumo, en qué momentos aparece, qué lo mantiene y qué otras formas hay de conseguir lo que buscas.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando el cambio se sostiene. Si hay sustancias o medicación, nos coordinamos con tu médico o con los servicios de adicciones.']
      ],
      texto:'Trabajamos con la entrevista motivacional, la terapia cognitivo-conductual y la prevención de recaídas, el trabajo con la familia y las terapias contextuales, como la de aceptación y compromiso (ACT). Si es un familiar quien tiene la adicción y no quiere pedir ayuda, puedes venir tú. Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'autoestima', name:'Autoestima', sym:'No soy suficiente',
  h1:'Terapia para fortalecer la autoestima',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Baja autoestima e inseguridad: terapia en Madrid y online',
  seoDesc:'¿Baja autoestima, inseguridad o perfeccionismo? Terapia para estimarte de otra manera, sin compararte tanto. Centro sanitario en Madrid y online.',
  pagina:'autoestima.html',   /* página fija; motivo.html?m=autoestima lleva a ella */
  enfoqueDe:'de la autoestima',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (problemas o la pregunta del síndrome del impostor); dependencia e imagen corporal llevan a su terapia */
  subs:[['Baja autoestima','#baja'],['Inseguridad','#inseguridad'],['Perfeccionismo','#perfeccionismo'],['Autoexigencia','#autoexigencia'],['Síndrome del impostor','#impostor'],['Miedo al rechazo','#rechazo'],['Necesidad de aprobación','#aprobacion'],['Compararse con los demás','#compararse'],['Autocrítica','#autocritica'],['Aprender a decir que no','#decirno'],['Dependencia emocional','pareja'],['Imagen corporal','alimentacion']],
  /* apartados nuevos (2026-11-09, recomendaciones aceptadas por el usuario: 1A, 2 único, 3A sin interpersonal, 4 y 5 como en las demás) */
  tipos:{titulo:'Problemas de autoestima más frecuentes',
    intro:'Estos son los motivos por los que más nos consultan cuando la forma de valorarse hace sufrir. Casi nunca llegan solos: unos tiran de otros.',
    items:[
    ['Baja autoestima','Sentir que vales poco, que no eres suficiente o que los demás lo hacen todo mejor.','baja'],
    ['Inseguridad','Dudar de ti antes de decidir, de hablar o de intentarlo, y necesitar que te lo confirmen una y otra vez.','inseguridad'],
    ['Perfeccionismo','Que nada esté nunca lo bastante bien. Cuando se vuelve rígido y lo invade todo, puede tener que ver también con <a href="personalidad.html">la personalidad</a>.','perfeccionismo'],
    ['Autoexigencia','Pedirte siempre más, sin descanso, y vivir cualquier fallo como un fracaso personal.','autoexigencia'],
    ['Miedo al rechazo','Evitar decir lo que piensas o pedir lo que necesitas por miedo a que te dejen de querer.','rechazo'],
    ['Necesidad de aprobación','Sentirte bien solo cuando los demás te dan el visto bueno.','aprobacion'],
    ['Compararse con los demás','Medirte sin parar con otros, muchas veces con lo que enseñan <a href="adicciones.html">las redes</a>, y salir siempre perdiendo.','compararse'],
    ['Autocrítica','Una voz interna que te juzga con una dureza que nunca usarías con nadie.','autocritica'],
    ['Aprender a decir que no','Decir que sí a todo para no decepcionar, aunque te desgaste. Poner límites también es estimarse.','decirno']
  ]},
  proceso:{titulo:'Cómo trabajamos la autoestima', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender cómo te valoras y de dónde viene.','Tu historia, cómo te han tratado y los contextos en los que vives.'],
    ['Practicar.','Poner límites, decir que no, atreverte con lo que evitas y cuidar los vínculos que te sostienen. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas medicación o conviene valorarla, nos coordinamos con tu médico o psiquiatra.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando te tratas de otra manera, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual','Revisar la autocrítica y las reglas de exigencia que te hacen sufrir.'],
    ['ACT y compasión','Tratarte de otra manera sin esperar a «quererte» primero, y moverte hacia lo que te importa.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también tus vínculos, las comparaciones, las redes y lo que te piden el trabajo o los estudios.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades. A muchas personas les resulta más fácil empezar desde casa.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1A cómo mejorarla, 6.2A de dónde viene, 6.3 ansiedad y depresión, 6.4 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cómo saber si tengo baja autoestima?','Si te comparas sin parar, te cuesta aceptar un halago, te exiges como si nada fuera suficiente o dependes de lo que opinen los demás para sentirte bien, es probable que la forma en que te valoras te esté haciendo sufrir.'],
    ['¿De dónde viene la baja autoestima?','De cómo nos han tratado y nos tratan: críticas repetidas, comparaciones, experiencias de acoso o de rechazo, y contextos que piden rendir sin descanso. Nadie se estima en el vacío.'],
    ['¿Se puede mejorar la autoestima?','Sí. Suele cambiar cuando cambia la manera de tratarte, de relacionarte y de actuar en lo que te importa. No prometemos plazos, pero sí trabajar contigo.'],
    ['¿Cómo mejorar la autoestima?','Más que pensar mejor de ti, ayuda actuar de otra manera: cumplir con lo que te importa, poner límites, atreverte con lo que evitas y cuidar los vínculos que te sostienen. Repetirse frases positivas, a quien se valora poco, puede hacerle sentir peor.'],
    ['¿El perfeccionismo es un problema de autoestima?','A menudo van juntos: cuando el valor propio depende de hacerlo todo bien, cualquier fallo se vive como un fracaso personal. Aprender a exigirse sin maltratarse ayuda también a la estima.'],
    ['¿Qué es el síndrome del impostor?','Es la sensación de no merecer lo que has logrado y el miedo a que los demás “descubran” que no vales tanto. Es frecuente en personas exigentes y suele aliviarse cuando el propio valor deja de medirse solo por los logros.','impostor'],
    ['¿La baja autoestima tiene que ver con la ansiedad o la depresión?','A menudo van juntas: valorarse poco alimenta la <a href="ansiedad.html">ansiedad</a> y el <a href="depresion.html">ánimo bajo</a>, y estos a su vez empeoran cómo nos vemos. Cuando aparecen juntas, las trabajamos a la vez.'],
    ['¿La terapia online funciona para la autoestima?','Sí. La terapia online logra resultados comparables a la presencial, y a muchas personas les resulta más fácil empezar desde casa.'],
    ['¿Trabajáis la autoestima cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'autoestima no soy suficiente me comparo con los demas me cuesta decir que no no me siento bien conmigo mismo inseguridad valer confianza exigencia aprobacion',
  feel:['No soy suficiente','Me comparo mucho con los demás','Me cuesta decir que no','No me siento bien conmigo mismo'],
  /* frases propias (2026-11-08): la estima no viene solo de uno mismo / depende de cómo nos tratan / estimarse es algo que se hace */
  quotes:[
    'Nadie puede construirse solo, y solo desde sí mismo, el valor que siente. Esa estima depende de los demás y de múltiples contextos',
    'Nos vemos, en buena parte, como nos han tratado. Por eso cambiar cómo nos tratan, y cómo tratamos, también cambia cómo nos valoramos',
    'Estimarse se ejercita: la estima se fortalece cuando actuamos, cuando nos cuidamos y cuando cuidamos a los nuestros'
  ],
  basesIntro:'Usamos la palabra «autoestima» porque es la que todos conocemos, aunque pone el foco en uno mismo, como si la estima fuera un depósito que cada uno lleva dentro y que sube o baja. Nosotros preferimos hablar de <strong>estimarse</strong>: un verbo, que se practica con otros y entre otros. Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, los distintos ámbitos de la vida y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.',
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el cuerpo también participa: el cansancio, <a href="insomnio.html">el mal sueño</a> o <a href="ansiedad.html">el estrés mantenido</a> tiñen cómo nos vemos. La estima se siente dentro, pero gran parte de sus piezas vienen de fuera.',
    'La idea de autoestima, tal como la usamos hoy, es reciente. <strong>La historia de la psicología</strong> la remonta a William James, a finales del siglo XIX, y su gran difusión llega en la segunda mitad del XX, con la promesa de que bastaba con quererse más para estar bien. Una estima que cada uno fabrica a solas tiene más de creencia de época que de hallazgo científico.',
    '<strong>Los estudios de psicología</strong> encuentran que la estima alta se asocia a sentirse mejor, pero no causa por sí sola mejores resultados en los estudios, el trabajo o las relaciones. Y repetirse frases positivas, a quien se valora poco, puede hacerle sentir peor. Lo que más la mueve es lo que hacemos: cumplir con lo que nos importa, poner límites, atrevernos con lo que evitamos aunque nos gane la inseguridad o la autocrítica. En terapia lo vemos a menudo: la estima se construye haciendo; llega después de actuar, no antes.',
    '<strong>Los estudios de sociología</strong> señalan cómo pesan la comparación constante, la imagen corporal, <a href="adicciones.html">las redes sociales</a> o una cultura que pide valerse por uno mismo y rendir sin descanso. Nadie se estima en el vacío: cómo nos valoramos depende también de dónde y con quién vivimos.'
  ],
  together:'Ninguna estima es solo «auto»: la aprendemos de cómo nos han mirado y nos miran. De ahí que la promesa de que «no te importe lo que piensen los demás» suela frustrar. Lo que sí se puede trabajar es cómo te importa y qué haces con ello. Estimarse es, en buena parte, la capacidad de relacionarte y de influir en esa mirada que te llega de los demás: elegir con quién estás, decir que no aunque dé miedo el rechazo, pedir lo que necesitas, mantener y fortalecer los vínculos que te sostienen sin caer en la dependencia emocional. Eso se practica, y lo trabajamos contigo.',
  cta:'Podemos ayudarte a estimarte de otra manera, sin compararte ni exigirte a todas horas.',
  intro:'Para trabajar la autoestima hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: se siente en el cuerpo, pero no depende solo de él, sino también de lo que hacemos, de nuestras relaciones y de los contextos en los que nos encontramos; es decir, también de cómo nos estiman desde fuera. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Hablamos de autoestima cuando la forma de valorarte te hace sufrir: te comparas, te exiges sin descanso o dependes de la aprobación de los demás.» */
  science:'La autoestima no es un diagnóstico, sino un concepto psicológico muy estudiado. Su relación con el bienestar es real, pero más modesta de lo que suele decirse.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Baumeister y otros (2003), revisión sobre la autoestima y el bienestar; Wood, Perunovic y Lee (2009), sobre las frases positivas */
  beyond:'Ninguna estima es solo «auto»: la aprendemos de cómo nos han mirado y nos miran (heteroestima). De ahí que la promesa de que «no te importe lo que piensen los demás» suela frustrar. Lo que sí se puede trabajar es cómo te importa.',
  approaches:[
    ['Cognitivo-conductual','Revisar la autocrítica y las reglas de exigencia.','moderada'],
    ['Contextuales, ACT y compasión','Tratarte de otra manera sin esperar a «quererte» primero.','creciente'],
    ['Interpersonal','Trabajar los límites y la dependencia de la aprobación.','variable']
  ],
  alt:'Mujer sonriendo junto a una ventana mientras habla por teléfono',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:'Usamos la palabra «autoestima» porque es la que todos conocemos, aunque pone el foco en uno mismo, como si la estima fuera un depósito que cada uno lleva dentro. Nosotros preferimos hablar de <strong>estimarse</strong>: un verbo, que se practica con otros y entre otros. Por eso nuestro enfoque es <strong>pluralista</strong>.',
    bases:[   /* cuatro párrafos, en el mismo orden que los largos, para que las frases verdes (quotes) sigan en su sitio */
      '<strong>Los estudios de biología</strong> muestran que el cuerpo también participa: el cansancio, <a href="insomnio.html">el mal sueño</a> o <a href="ansiedad.html">el estrés mantenido</a> tiñen cómo nos vemos.',
      'La idea de autoestima, tal como la usamos hoy, es reciente. <strong>La historia de la psicología</strong> muestra que se difundió en la segunda mitad del siglo XX, con la promesa de que bastaba con quererse más para estar bien. Una estima que cada uno fabrica a solas tiene más de creencia de época que de hallazgo científico.',
      '<strong>Los estudios de psicología</strong> encuentran que repetirse frases positivas, a quien se valora poco, puede hacerle sentir peor. Lo que más mueve la estima es lo que hacemos: cumplir con lo que nos importa, poner límites, atrevernos con lo que evitamos. La estima llega después de actuar, no antes.',
      '<strong>Los estudios de sociología</strong> señalan cómo pesan la comparación constante, la imagen corporal o <a href="adicciones.html">las redes sociales</a>. Nadie se estima en el vacío: cómo nos valoramos depende también de dónde y con quién vivimos.'
    ],
    together:'Ninguna estima es solo «auto»: la aprendemos de cómo nos han mirado y nos miran. Lo que sí se puede trabajar es cómo te importa esa mirada y qué haces con ella: elegir con quién estás, decir que no aunque dé miedo el rechazo, pedir lo que necesitas y cuidar los vínculos que te sostienen sin caer en la dependencia emocional. Eso se practica, y lo trabajamos contigo.',
    tipos:{titulo:'Problemas de autoestima más frecuentes', intro:'Casi nunca llegan solos: unos tiran de otros.', items:[
      ['Baja autoestima','sentir que vales poco, que no eres suficiente o que los demás lo hacen todo mejor.','baja'],
      ['Inseguridad','dudar de ti antes de decidir o de intentarlo, y necesitar que te lo confirmen una y otra vez.','inseguridad'],
      ['Perfeccionismo','que nada esté nunca lo bastante bien.','perfeccionismo'],
      ['Autoexigencia','pedirte siempre más y vivir cualquier fallo como un fracaso personal.','autoexigencia'],
      ['Síndrome del impostor','sentir que no mereces lo que has logrado y temer que los demás lo «descubran».','impostor'],
      ['Miedo al rechazo','callar lo que piensas o lo que necesitas por miedo a que te dejen de querer.','rechazo'],
      ['Necesidad de aprobación','sentirte bien solo cuando los demás te dan el visto bueno.','aprobacion'],
      ['Compararse con los demás','medirte sin parar con otros, muchas veces con lo que enseñan <a href="adicciones.html">las redes</a>.','compararse'],
      ['Autocrítica','una voz interna que te juzga con una dureza que nunca usarías con nadie.','autocritica'],
      ['Aprender a decir que no','decir que sí a todo para no decepcionar; poner límites también es estimarse.','decirno']
    ]},
    trabajo:{titulo:'Cómo trabajamos la autoestima',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender cómo te valoras y de dónde viene.','Tu historia, cómo te han tratado y los contextos en los que vives.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando te tratas de otra manera. Si tomas medicación, nos coordinamos con tu médico.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual, el trabajo con la compasión y las terapias contextuales, como la ACT. Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España; a muchas personas les resulta más fácil empezar desde casa. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'duelo', name:'Duelo', sym:'No consigo superar su muerte',
  alert:'Si tienes pensamientos de muerte o de hacerte daño, llama al <strong>024</strong>. En una urgencia, al <strong>112</strong>.',   /* revisión 2026-11-09, punto 5B */
  h1:'Terapia de duelo',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Terapia de duelo y duelo perinatal en Madrid y online',
  seoDesc:'Psicólogo para el duelo: muerte de un ser querido, duelo perinatal, por una mascota o una ruptura. Te acompañamos. Centro sanitario en Madrid y online.',
  pagina:'duelo.html',   /* página fija; motivo.html?m=duelo lleva a ella */
  enfoqueDe:'del duelo',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (tipos o la pregunta del padre o la madre); ruptura, niños y depresión llevan a su terapia */
  subs:[['Muerte de un ser querido','#serquerido'],['Muerte de un padre o una madre','#padres'],['Duelo perinatal','#perinatal'],['Duelo por suicidio','#suicidio'],['Duelo complicado o prolongado','#prolongado'],['Duelo anticipado por una enfermedad grave','#anticipado'],['Duelo por una mascota','#mascota'],['Duelo por una ruptura','pareja'],['Pérdida del trabajo','#trabajo'],['Duelo en niños','infancia'],['Depresión tras una pérdida','depresion']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A, 2 único, 3A con acompañamiento en vez de «tu contexto», 4 y 5 como en las demás) */
  tipos:{titulo:'Tipos de duelo',
    intro:'Cada pérdida es única, pero hay duelos que tienen rasgos propios y que conviene acompañar con especial cuidado.',
    items:[
    ['Muerte de un ser querido','La pérdida de alguien cercano (una pareja, un hermano, un amigo) desordena la vida entera: las rutinas, los planes, la forma de estar con los demás.','serquerido'],
    ['Duelo perinatal','La pérdida de un hijo durante el embarazo o poco después del parto. Es un duelo a menudo silenciado, porque alrededor no siempre se reconoce, y merece el mismo espacio que cualquier otro.','perinatal'],
    ['Duelo por suicidio','Suele traer preguntas sin respuesta, culpa y, a veces, el peso del silencio. Acompañarlo con cuidado ayuda a no cargarlo a solas. Si tú también tienes pensamientos de muerte, llama al <strong>024</strong>.','suicidio'],
    ['Duelo complicado o prolongado','Cuando, pasados muchos meses, el dolor sigue ocupándolo todo y la vida no consigue retomarse. Es cuando más ayuda la terapia.','prolongado'],
    ['Duelo anticipado','El que empieza antes de la muerte, cuando una enfermedad grave avanza y se va perdiendo a la persona poco a poco. También agota a quien cuida.','anticipado'],
    ['Duelo por una mascota','Perder a un animal con el que has compartido la vida duele de verdad, aunque alrededor no siempre se entienda.','mascota'],
    ['Pérdida del trabajo','Un despido o el final de una etapa profesional también es una pérdida: de rutinas, de identidad, de seguridad. A veces viene acompañada de <a href="ansiedad.html">ansiedad</a>.','trabajo']
  ]},
  proceso:{titulo:'Cómo trabajamos el duelo', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Hablar de la pérdida.','Quién era, qué pasó y qué ha cambiado desde entonces, sin prisa.'],
    ['Hacer sitio a la pérdida.','Los recuerdos, los rituales y la vuelta poco a poco a la vida que sigue. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con tu médico.','Si tomas medicación o conviene valorarla, nos coordinamos con tu médico o psiquiatra.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando la pérdida encuentra su sitio, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia cognitivo-conductual para el duelo prolongado','Es la que tiene más respaldo cuando el duelo se atasca: ayuda a afrontar lo que se evita y a ir reconstruyendo la vida.'],
    ['Terapia de aceptación y compromiso (ACT)','Hacer sitio al dolor sin que ocupe toda la vida.'],
    ['Acompañamiento','Un espacio para hablar de la pérdida cuando alrededor ya no se habla de ella.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 3 nuevas (6.1A fases, 6.2A no llorar, 6.3 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cuándo conviene ir al psicólogo por un duelo?','El duelo no es una enfermedad y no siempre necesita terapia. Conviene pedir ayuda cuando, pasados muchos meses, sigues sin poder retomar tu día a día, sientes que te has quedado atascado o te cuesta sostenerlo con tu entorno. Y no hace falta esperar si, desde el principio, el dolor te impide funcionar, te faltan apoyos o tienes pensamientos de morir; en ese caso, llama al <strong>024</strong>.'],
    ['¿Cuánto dura un duelo?','No hay un plazo fijo. Los manuales clínicos hablan de duelo prolongado cuando, pasados entre seis y doce meses según el manual, el dolor sigue siendo tan intenso que lo ocupa todo.'],
    ['¿Cuáles son las fases del duelo?','Se habla mucho de cinco fases: negación, ira, negociación, tristeza y aceptación. Pero la investigación no ha confirmado que el duelo siga ese orden: cada persona lo vive a su manera, y es normal ir y volver.'],
    ['¿Cómo superar la muerte de un padre o una madre?','Más que superarla, se trata de aprender a vivir con su ausencia. No conseguir superar la muerte de tu madre o echar de menos a tu padre cada día es frecuente, sobre todo los primeros meses. Ayuda poder hablar de ello, mantener algún ritual que te una a esa persona y pedir acompañamiento si el dolor no te deja vivir.','padres'],
    ['¿Es normal sentir culpa tras una muerte?','Sí. Lo que no se dijo o no se hizo suele volver una y otra vez. Hablarlo ayuda a que la culpa no ocupe el lugar del recuerdo.'],
    ['¿Es normal no llorar en un duelo?','Sí. No todo el mundo llora, ni lo hace en el momento que se espera. El dolor puede notarse como cansancio, como irritabilidad o como un vacío, y no por eso es menor.'],
    ['¿Es normal pensar todo el tiempo en la persona que ha muerto?','Sí, sobre todo al principio. Pensar en quien se ha ido, soñar con esa persona o sentir su presencia forma parte del duelo. Preocupa más cuando la vida se detiene por completo durante mucho tiempo.'],
    ['¿Atendéis el duelo por una mascota o por una ruptura?','Sí. También duele perder a un animal, una relación, un trabajo o una etapa de la vida, y ese dolor merece un espacio.'],
    ['¿Ayudáis a niños en duelo?','Sí, con la familia. Los niños viven el duelo a su manera, y a menudo ayuda acompañar a los adultos para que sepan cómo hablarles.'],
    ['¿Hacéis terapia de duelo cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'duelo perdida muerte fallecimiento no consigo superar la muerte de mi madre padre ser querido mascota perro echo de menos como superar un duelo separacion',
  feel:['Nunca me dejará de doler','Me arrepiento de aquello que hice o no hice','¿Cómo voy a vivir sin él o sin ella?','Nunca conoceré a nadie como él o como ella'],   /* 2026-11-08; antes: «No consigo superar la muerte de mi madre», «Echo de menos a mi padre cada día», «No consigo superar la muerte de mi perro», «Siento que todo el mundo ha seguido menos yo» */
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta, a partir de ideas de Bueno (la muerte llega cuando la persona está implicada en planes que no la contemplan,
     Diccionario de García Sierra, entrada 502), Pérez Jara («Meditatio mortis», 2016: «ya nunca más…») y Pérez Álvarez (2007: las pérdidas como inicio de la depresión) */
  quotes:[
    'Atender una pérdida —hablarla, compartirla, pedir ayuda cuando pesa demasiado— ayuda a no vivirla a solas',   /* tras biología */
    '',   /* tras neurología: sin frase */
    'La culpa y los “ojalá hubiera…” forman parte del duelo, y también se pueden hablar'   /* tras psicología */
  ],
  basesIntro:[
    'El duelo es la respuesta a una pérdida, y hay distintos tipos de duelo: por la muerte de alguien querido o de un animal, por una separación, por un despido o por un cambio de vida. Algunos duelos son especialmente difíciles: el de un hijo, incluso antes de nacer, el que deja un suicidio o el que empieza antes de la muerte, cuando la enfermedad avanza.',
    'La muerte llega en mitad de algo: de planes, de conversaciones, de proyectos en común. De ahí que desordene tanto la vida de los que quedan.',
    {voz:'Perder a alguien es enfrentarse a todos los “nunca más”'},   /* frase verde dentro de la entrada */
    'Cada duelo es distinto y se entreteje con muchas cosas a la vez: el cuerpo, la historia con quien se ha ido, la familia, el trabajo. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el duelo también se vive en el cuerpo: cansancio, <a href="insomnio.html">cambios en el sueño</a> y en el apetito, <a href="depresion.html">una tristeza que pesa físicamente</a>. Es normal, y suele ir cediendo con el tiempo. '+V,
    '<strong>Los estudios de neurología</strong> muestran que al cerebro le cuesta asumir una ausencia: por eso, a veces, esperamos oír su voz o que entre por la puerta. Hacerse a la pérdida también es un aprendizaje.',
    '<strong>Los estudios de psicología</strong> muestran que la mayoría de los duelos siguen su curso, pero que las pérdidas —una muerte, <a href="pareja.html">una ruptura</a>, un despido— pueden ser el inicio de un dolor difícil de soportar. No se trata de «superar» a nadie ni de pasar por unas fases en orden, sino de ir encontrando un sitio para la pérdida en una vida que sigue. '+V,
    '<strong>Los estudios de sociología</strong> señalan que hoy se habla poco de la muerte y que el duelo tiene cada vez menos lugar: al poco tiempo, alrededor ya no se habla de la pérdida, aunque uno siga dentro de ella. '+V
  ],
  together:'El <strong>acompañamiento</strong> puede marcar la diferencia. Lo que ya no se podrá hacer, decir ni compartir necesita su espacio. En terapia podemos ponerle nombre y aprender a convivir con ello. Te acompañamos a conseguirlo.',
  cta:'Ante la pérdida, podemos acompañarte en el proceso, haciéndolo más llevadero.',
  intro:'Para trabajar el duelo hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «El duelo es la respuesta a una pérdida: la muerte de alguien querido, también de un animal, pero también una separación o un cambio de vida. No es una enfermedad, aunque a veces se complica y conviene acompañarlo.» */
  science:'La mayoría de los duelos siguen su curso sin tratamiento. Se habla de duelo prolongado cuando el malestar intenso se mantiene mucho tiempo y bloquea la vida. '+V,
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Bueno (1996), «El sentido de la vida»; Pérez Jara (2016), «Meditatio mortis y filosofía: sobre el legado de Gustavo Bueno»; Pérez Álvarez (2007), «La activación conductual y la desmedicalización de la depresión» */
  beyond:'Mucha gente busca cómo «superar» una muerte. No se trata de superar a nadie ni de pasar por unas fases en orden: se trata de ir encontrando un sitio para la pérdida en una vida que sigue.',
  approaches:[
    ['Terapia específica para el duelo prolongado','Basada en la terapia cognitivo-conductual, para cuando el duelo se atasca.','buena'],
    ['Contextuales y ACT','Hacer sitio al dolor sin que ocupe toda la vida.','en estudio'],
    ['Acompañamiento','Un espacio para hablar de la pérdida cuando alrededor ya no se habla.','—']
  ],
  alt:'Familia corriendo por un prado en un parque',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'El duelo es la respuesta a una pérdida: la muerte de alguien querido o de un animal, una separación, un despido o un cambio de vida. La muerte llega en mitad de algo —planes, conversaciones, proyectos en común—, y por eso desordena tanto la vida de los que quedan.',
      {voz:'Perder a alguien es enfrentarse a todos los “nunca más”'},
      'Cada duelo se entreteje con muchas cosas a la vez: el cuerpo, la historia con quien se ha ido, la familia, el trabajo. Por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[   /* cuatro párrafos, en el mismo orden que los largos, para que las frases verdes (quotes) sigan en su sitio */
      '<strong>Los estudios de biología</strong> muestran que el duelo también se vive en el cuerpo: cansancio, <a href="insomnio.html">cambios en el sueño</a> y en el apetito, <a href="depresion.html">una tristeza que pesa físicamente</a>. Es normal, y suele ir cediendo con el tiempo.',
      '<strong>Los estudios de neurología</strong> muestran que al cerebro le cuesta asumir una ausencia: por eso, a veces, esperamos oír su voz o que entre por la puerta.',
      '<strong>Los estudios de psicología</strong> muestran que la mayoría de los duelos siguen su curso. No se trata de «superar» a nadie ni de pasar por unas fases en orden, sino de ir encontrando un sitio para la pérdida en una vida que sigue.',
      '<strong>Los estudios de sociología</strong> señalan que hoy se habla poco de la muerte: al poco tiempo, alrededor ya no se habla de la pérdida, aunque uno siga dentro de ella.'
    ],
    together:'El <strong>acompañamiento</strong> puede marcar la diferencia. Lo que ya no se podrá hacer, decir ni compartir necesita su espacio. En terapia podemos ponerle nombre y aprender a convivir con ello. Te acompañamos a conseguirlo.',
    tipos:{titulo:'Tipos de duelo', intro:'Cada pérdida es única, pero hay duelos que conviene acompañar con especial cuidado.', items:[
      ['Muerte de un ser querido','la pérdida de alguien cercano desordena la vida entera: las rutinas, los planes, la forma de estar con los demás.','serquerido'],
      ['Muerte de un padre o una madre','más que superarla, se trata de aprender a vivir con su ausencia.','padres'],
      ['Duelo perinatal','la pérdida de un hijo durante el embarazo o poco después del parto, un duelo a menudo silenciado.','perinatal'],
      ['Duelo por suicidio','preguntas sin respuesta, culpa y, a veces, silencio. Si tú también tienes pensamientos de muerte, llama al <strong>024</strong>.','suicidio'],
      ['Duelo complicado o prolongado','cuando, pasados muchos meses, el dolor sigue ocupándolo todo y la vida no consigue retomarse.','prolongado'],
      ['Duelo anticipado','el que empieza antes de la muerte, cuando una enfermedad grave avanza; también agota a quien cuida.','anticipado'],
      ['Duelo por una mascota','perder a un animal con el que has compartido la vida duele de verdad.','mascota'],
      ['Pérdida del trabajo','un despido también es una pérdida de rutinas, de identidad y de seguridad.','trabajo'],
      ['Duelo por una ruptura','también duele perder una relación; lo acompañamos aquí y en <a href="pareja.html">terapia de pareja</a>.','ruptura'],
      ['Duelo en niños','los niños también viven el duelo, a su manera; orientamos a la familia y lo trabajamos también en <a href="infancia.html">infancia y adolescencia</a>.','ninos']
    ]},
    trabajo:{titulo:'Cómo trabajamos el duelo',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Hablar de la pérdida.','Quién era, qué pasó y qué ha cambiado desde entonces, sin prisa.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando la pérdida encuentra su sitio. Si tomas medicación, nos coordinamos con tu médico.']
      ],
      texto:'Trabajamos con la terapia cognitivo-conductual para el duelo prolongado, la terapia de aceptación y compromiso (ACT) y el acompañamiento: un espacio para hablar de la pérdida cuando alrededor ya no se habla de ella. Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'infancia', name:'Infancia y adolescencia', sym:'Mi hijo adolescente no quiere hacer nada',
  h1:'Terapia para niños y adolescentes',
  reco:'¿Os suena? No tenéis por qué pasarlo solos.',   /* habla a la familia (2026-11-10) */   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Psicólogo infantil y de adolescentes en Madrid y online',
  seoDesc:'Psicólogo infantil y de adolescentes: rabietas, miedos, TDAH, acoso escolar o problemas en el colegio, con la familia. Centro sanitario en Madrid y online.',
  pagina:'infancia.html',   /* página fija; motivo.html?m=infancia lleva a ella */
  enfoqueDe:'de la infancia y la adolescencia',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable en esta página; las demás llevan a su terapia */
  subs:[['Rabietas y problemas de conducta','#rabietas'],['Comunicación con adolescentes','#comunicacion'],['Ansiedad y miedos infantiles','ansiedad'],['Tristeza o aislamiento','#tristeza'],['Acoso escolar (bullying)','#acoso'],['Bajo rendimiento escolar','#rendimiento'],['TDAH en niños','tdah'],['Uso excesivo de pantallas','adicciones'],['Problemas con la comida','alimentacion'],['Problemas de sueño','insomnio'],['Separación de los padres','#separacion'],['Duelo en niños','duelo'],['Orientación a familias','#familias']],
  /* apartados nuevos (2026-11-09, elegidos por el usuario: 1A, 2 único, 3B sin sistémica —no la trabaja— y con ACT como complemento, 4 y 5 como en las demás; edades de 6 a 17 años) */
  tipos:{titulo:'Problemas más frecuentes en niños y adolescentes',
    intro:'Estos son los motivos por los que más nos consultan las familias. No todo malestar es un trastorno: muchas veces forma parte de crecer, pero conviene mirarlo a tiempo.',
    items:[
    ['Rabietas y problemas de conducta','Enfados que no ceden, desobediencia o peleas que desbordan a la familia. Casi siempre hay algo que entender detrás.','rabietas'],
    ['Comunicación con adolescentes','Monosílabos, puertas cerradas, discusiones. Es normal que tomen distancia, pero a veces se rompe el puente y cuesta reconstruirlo.','comunicacion'],
    ['Tristeza o aislamiento','Dejar de quedar con los amigos, encerrarse o perder el interés por todo. Si dura semanas, conviene mirarlo, porque también puede ser <a href="depresion.html">depresión</a>.','tristeza'],
    ['Acoso escolar (bullying)','Burlas, exclusión o agresiones repetidas, también por redes. Muchos niños no lo cuentan: los cambios de ánimo o no querer ir al colegio pueden ser señales.','acoso'],
    ['Bajo rendimiento escolar','Suspensos o desmotivación que no se explican solo por la capacidad: la atención, el ánimo, la organización o lo que pasa en clase pesan mucho.','rendimiento'],
    ['Separación de los padres','Una separación cambia la vida de los hijos. Les ayuda que los adultos les expliquen lo que pasa y les mantengan fuera del conflicto.','separacion'],
    ['Orientación a familias','A veces lo que más ayuda es trabajar con los padres: pautas concretas para casa y para el colegio.','familias']
  ]},
  proceso:{titulo:'Cómo trabajamos con niños y adolescentes', pasos:[
    ['Primera entrevista, gratuita, con la familia.','Con la madre, el padre o los tutores, sin el menor. La hace siempre Daniel de la Torre, director del centro. Nos contáis qué pasa y decidimos juntos cómo seguir.'],
    ['Conocer a vuestro hijo o hija.','En sesiones adaptadas a su edad, para escuchar cómo vive lo que le pasa.'],
    ['Trabajar con él o ella, y con vosotros.','Con pautas concretas para casa y, si hace falta, en coordinación con el colegio. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con su médico.','Si toma medicación o conviene valorarla, nos coordinamos con su pediatra o su psiquiatra infantil.'],
    ['Revisar y cerrar.','Vemos juntos cómo va y, cuando las cosas se asientan, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Entrenamiento a familias','Pautas concretas para casa y coordinación con el colegio, para que la ayuda no se quede en la consulta.'],
    ['Terapia cognitivo-conductual adaptada a la edad','Para la ansiedad, el ánimo o la conducta, con herramientas pensadas para cada etapa.'],
    ['ACT con adolescentes','Aprender a convivir con lo que sienten sin que decida por ellos, y moverse hacia lo que les importa. La usamos como complemento.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también lo que pasa en casa, en clase, con los amigos y en las pantallas.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Podéis venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También podéis hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque viváis fuera de España. La sesión dura lo mismo en las dos modalidades. Con niños pequeños solemos preferir la consulta presencial; con adolescentes, la terapia online también funciona.'},
  quien:{titulo:'Quién os atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1 edades 6-17, 6.2A adolescente que no quiere hacer nada, 6.3A acoso con ANAR, 6.4 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cuándo llevar a mi hijo al psicólogo?','Cuando notáis cambios que duran semanas: tristeza, aislamiento, <a href="ansiedad.html">miedos</a>, rabietas que no ceden o problemas en el colegio, con la comida o <a href="insomnio.html">con el sueño</a>. Si dudáis, una primera cita con la familia ayuda a valorarlo.'],
    ['¿A partir de qué edad atendéis?','Atendemos a niños, niñas y adolescentes de 6 a 17 años. A partir de los 18, ya en la terapia de adultos.'],
    ['¿Cómo es la primera cita?','La primera cita es con la madre, el padre o los tutores, sin el menor. Nos contáis qué pasa y decidimos juntos cómo seguir.'],
    ['Mi hijo adolescente no quiere hacer nada. ¿Es normal?','En parte, sí: la adolescencia trae cansancio, cambios de sueño y ganas de distancia. Conviene consultarlo si dura semanas, si deja también a los amigos o lo que antes le gustaba, o si notáis tristeza o aislamiento.'],
    ['¿Qué hago si mi hijo sufre acoso escolar?','Escúchale, créele y no le quites importancia. Comunicadlo al colegio: los centros tienen la obligación de activar su protocolo contra el acoso. Vosotros podéis llamar a la línea ANAR para familias (<strong>600 50 51 52</strong>), y vuestro hijo o hija a la suya (<strong>900 20 20 10</strong>); las dos son gratuitas. Y si hay peligro, al <strong>112</strong>.'],
    ['¿Qué hacemos si nuestro hijo habla de hacerse daño?','Tomadlo en serio y no le dejéis solo. Hablad con calma, sin juzgar, y pedid ayuda pronto. El <strong>024</strong> atiende las 24 horas, y también podéis llamar a la línea ANAR para familias (<strong>600 50 51 52</strong>). Si hay peligro inmediato, llamad al <strong>112</strong>.'],
    ['¿Hace falta el consentimiento de los dos progenitores?','Pedimos por escrito el consentimiento de quienes tienen la patria potestad y, desde los 16 años, el del propio adolescente. Si hay separación o desacuerdo, os explicamos en la primera cita cómo hacerlo.'],
    ['¿Trabajáis también con los padres?','Sí. Trabajamos con madres, padres o tutores y, si hace falta, nos coordinamos con el colegio.'],
    ['¿Y si mi hijo adolescente no quiere venir?','Ayuda que quiera, pero al principio no siempre es así. Podemos empezar con la familia y buscar juntos cómo plantearle la primera cita.'],
    ['¿Hay psicólogo infantil cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no podéis venir, con adolescentes hacemos también la <a href="online.html">terapia online</a>.']
  ],
  k:'infancia adolescencia mi hijo adolescente no quiere estudiar ni hacer nada no me habla no me respeta no tiene amigos no quiere ir al colegio hija menores ninos adolescentes escolar familia conducta',
  feel:['Mi hijo adolescente no quiere estudiar ni hacer nada','Mi hijo adolescente no me habla','Mi hijo no tiene amigos','Mi hijo no quiere ir al colegio'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta (no son citas de autor); las citas de Marino descartadas están en citas-para-la-web.md */
  quotes:[
    'Crecer también tiene sus partes dolorosas, y no por ello es un trastorno. Muchas veces es parte del camino',   /* 2026-11-08; antes: «El sufrimiento de los niños y de los adolescentes es real y merece ayuda» */
    'Muchas veces los protegemos tanto que cualquier contratiempo los hunde',
    'Acompañar no es resolverlo todo por ellos, sino estar cerca mientras aprenden a hacerlo'   /* 2026-11-08; antes: «Mucha exigencia y poca tolerancia a la frustración» */
  ],
  basesIntro:[
    'No se trata de quitarle todas las piedras del camino, sino de ayudarle a andar por él. Confiamos en lo que tu hijo o hija puede hacer, y le ayudamos a comprobarlo por sí mismo.',
    'No todo malestar es un trastorno. Muchas veces hay que hablar de la familia, del colegio —el rendimiento, el acoso escolar—, de los amigos, de una separación de los padres o de las preguntas propias de la edad. El sufrimiento de los niños y de los adolescentes es real y merece atención; la mejor respuesta lo entiende dentro de su vida —su casa, su clase, su grupo, las pantallas— y busca qué se puede cambiar de sus circunstancias.',
    'Cada niño y cada adolescente es distinto: en cada uno se cruzan el cuerpo, su historia, la familia, el colegio y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que la infancia y la adolescencia son etapas de grandes cambios: el cuerpo, el sueño y el desarrollo influyen en el ánimo y en la conducta. Conviene tenerlo en cuenta sin convertirlo en la explicación de todo.',
    '<strong>Los estudios de neurología</strong> muestran que el cerebro sigue madurando hasta bien entrada la juventud, y que esa maduración depende en buena parte de la experiencia: de lo que se practica y se aprende. Por eso un menor no es un adulto pequeño ni un diagnóstico.',
    '<strong>Los estudios de psicología</strong> muestran que proteger a los chicos de todo no hace desaparecer los problemas: tarde o temprano se encuentran con el mundo real, y conviene que lleguen preparados. Hoy les pedimos que sean brillantes en todo y, a la vez, les ahorramos cualquier dificultad: mucha exigencia y poca tolerancia a la frustración. A veces se confunde con un <a href="tdah.html">TDAH</a> lo que es falta de práctica para esperar o concentrarse. Trabajamos con ellos un equilibrio entre esforzarse y aguantar los tropiezos.',
    '<strong>Los estudios de sociología</strong> señalan el peso de la sobreprotección, de la cultura del diagnóstico y de las redes sociales, que agravan el malestar aunque no lo crean. La vida sigue ahí fuera cuando los hijos salen de casa: los acompañamos a llegar a ella y a relacionarse con ella con recursos propios.'
  ],
  together:'Ante el malestar de un niño o de un adolescente hay que escuchar y explorar sin precipitarse, y responder según lo que necesite. Trabajamos con él o con ella (siempre con el consentimiento de sus tutores), y también con vosotros: proponemos estrategias sencillas para afrontar estas situaciones en casa y en clase. Lo que le pasa a un menor casi nunca le pasa solo a él; por eso trabajamos en equipo con la familia y con los centros educativos.',
  cta:'Podemos ayudaros, a vuestro hijo o hija y a vosotros, a entender qué está pasando.',
  intro:'Para trabajar lo que les pasa a niños y adolescentes hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Atendemos a niños, niñas y adolescentes con el consentimiento de la familia, y trabajamos también con madres, padres o tutores: lo que le pasa a un menor casi nunca le pasa solo a él.» */
  science:'En la infancia, las intervenciones con más apoyo suelen incluir a la familia; en la adolescencia, la terapia cognitivo-conductual adaptada a la edad.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario (no hay citas textuales); eran: Pérez Álvarez (2025), «La salud mental de los adolescentes» (The Conversation y Telos); Ubieto y Pérez Álvarez (2018), «Infancias hiperpautadas y al tiempo desreguladas» */
  beyond:'Un menor no es un adulto pequeño ni un diagnóstico: está creciendo dentro de una familia, una escuela y un grupo de amigos. Antes de ponerle una etiqueta, conviene mirar ese entramado.',
  approaches:[
    ['Entrenamiento a familias','Pautas concretas para casa y coordinación con el colegio.','buena'],
    ['Cognitivo-conductual adaptada','Para ansiedad, ánimo o conducta en adolescentes.','buena'],
    ['Familiar y sistémica','Trabajar con toda la familia cuando el problema es de todos.','variable']
  ],
  consent:'Cómo se hace: la primera cita es con la familia; el consentimiento se recoge por escrito. <span class="gap">[Detalle: progenitores, custodia, edad]</span> '+v('con el Colegio'),
  alt:'Grupo de jóvenes riendo juntos en un taller',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'No se trata de quitarle todas las piedras del camino, sino de ayudarle a andar por él. Confiamos en lo que tu hijo o hija puede hacer, y le ayudamos a comprobarlo por sí mismo.',
      'No todo malestar es un trastorno: muchas veces hay que hablar de la familia, del colegio, de los amigos o de las preguntas propias de la edad. En cada niño y cada adolescente se cruzan el cuerpo, su historia y su entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que la infancia y la adolescencia son etapas de grandes cambios: el cuerpo, el sueño y el desarrollo influyen en el ánimo y en la conducta, sin ser la explicación de todo.',
      '<strong>Los estudios de neurología</strong> muestran que el cerebro sigue madurando hasta bien entrada la juventud, y que esa maduración depende en buena parte de lo que se practica y se aprende. Un menor no es un adulto pequeño ni un diagnóstico.',
      '<strong>Los estudios de psicología</strong> muestran que proteger a los chicos de todo no hace desaparecer los problemas. Mucha exigencia y poca tolerancia a la frustración: a veces se confunde con un <a href="tdah.html">TDAH</a> lo que es falta de práctica para esperar o concentrarse.',
      '<strong>Los estudios de sociología</strong> señalan el peso de la sobreprotección, de la cultura del diagnóstico y de las redes sociales, que agravan el malestar aunque no lo crean. Los acompañamos a relacionarse con el mundo con recursos propios.'
    ],
    together:'Ante el malestar de un niño o de un adolescente hay que escuchar y explorar sin precipitarse. Trabajamos con él o con ella (siempre con el consentimiento de sus tutores) y también con vosotros, con estrategias sencillas para casa y para clase. Lo que le pasa a un menor casi nunca le pasa solo a él: por eso trabajamos en equipo con la familia y con los centros educativos.',
    tipos:{titulo:'Problemas más frecuentes en niños y adolescentes', intro:'No todo malestar es un trastorno: muchas veces forma parte de crecer, pero conviene mirarlo a tiempo. Casi siempre trabajamos también con la familia.', items:[
      ['Rabietas y problemas de conducta','enfados que no ceden, desobediencia o peleas que desbordan a la familia.','rabietas'],
      ['Comunicación con adolescentes','monosílabos, puertas cerradas y discusiones, hasta que se rompe el puente.','comunicacion'],
      ['Tristeza o aislamiento','dejar a los amigos o perder el interés por todo; si dura semanas, puede ser <a href="depresion.html">depresión</a>.','tristeza'],
      ['Miedos y ansiedad','miedos o preocupaciones que no ceden y le frenan; los trabajamos como en <a href="ansiedad.html">la ansiedad</a>.','miedos'],
      ['Problemas con la comida','comer muy poco, a escondidas o con culpa, o preocuparse demasiado por el cuerpo; lo vemos también en <a href="alimentacion.html">alimentación</a>.','comida'],
      ['Problemas de sueño','cuesta dormirse, hay despertares o miedos por la noche; lo vemos también en <a href="insomnio.html">insomnio</a>.','sueno'],
      ['Acoso escolar (bullying)','burlas, exclusión o agresiones repetidas, también por redes; muchos niños no lo cuentan.','acoso'],
      ['Estudios y atención','suspensos, desmotivación o dificultad para concentrarse; antes de hablar de <a href="tdah.html">TDAH</a>, miramos su vida, su práctica y su entorno.','rendimiento'],   /* 2026-11-10: rendimiento escolar + atención (máximo 10) */
      ['Uso excesivo de pantallas','cuando el móvil o los videojuegos ocupan el centro del día; lo vemos también en <a href="adicciones.html">adicciones</a>.','pantallas'],
      ['Separación de los padres','les ayuda que los adultos les expliquen lo que pasa y les mantengan fuera del conflicto.','separacion'],
      ['Duelo en niños','los niños también viven el duelo, a su manera; orientamos a la familia y lo trabajamos también en <a href="duelo.html">duelo</a>.','duelo']   /* 2026-11-10: «Orientación a familias» pasa a la frase de entrada */
    ]},
    trabajo:{titulo:'Cómo trabajamos con niños y adolescentes',
      pasos:[
        ['Primera entrevista, gratuita, con la familia.','Con la madre, el padre o los tutores, sin el menor. La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Conocer a vuestro hijo o hija.','En sesiones adaptadas a su edad, para escuchar cómo vive lo que le pasa.'],
        ['Sesiones de 60 minutos, con él o ella y con vosotros.','Al principio, semanales y, como mínimo, dos al mes; las espaciamos cuando las cosas se asientan. Si hace falta, nos coordinamos con el colegio y con su pediatra o psiquiatra infantil.']
      ],
      texto:'Atendemos de 6 a 17 años. Trabajamos con entrenamiento a familias, terapia cognitivo-conductual adaptada a la edad y las terapias contextuales, como la ACT con adolescentes. Podéis venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o, con adolescentes, hacer la <a href="online.html">terapia online</a>, también si vivís fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'personalidad', name:'Trastornos de la personalidad', sym:'No me entiendo ni yo', delicate:true,
  h1:'Terapia para los trastornos de la personalidad',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'TLP y trastornos de personalidad: terapia en Madrid y online',
  seoDesc:'Emociones muy intensas, miedo al abandono o vacío: terapia para el TLP y los trastornos de la personalidad. Centro sanitario en Madrid y online.',
  pagina:'personalidad.html',   /* página fija; motivo.html?m=personalidad lleva a ella */
  enfoqueDe:'de la personalidad',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (tipos o la pregunta del TLP); el vacío lleva a depresión */
  subs:[['Trastorno límite de la personalidad (TLP)','#tlp'],['Inestabilidad emocional','#inestabilidad'],['Miedo al abandono','#abandono'],['Relaciones intensas e inestables','#relaciones'],['Impulsividad','#impulsividad'],['Ira y explosiones emocionales','#ira'],['Sensación de vacío','depresion'],['Rasgos obsesivos o perfeccionistas','#obsesivos'],['Personalidad evitativa','#evitativa'],['Personalidad dependiente','#dependiente'],['Rasgos narcisistas','#narcisistas']],
  /* apartados nuevos (2026-11-09, recomendaciones aceptadas por el usuario: 1A con entrada que matiza la CIE-11, 2 único, 3A —dialéctico-conductual, ACT, tu contexto—, 4 y 5 como en las demás) */
  tipos:{titulo:'Tipos de trastornos de la personalidad',
    intro:'Los manuales hablan de tipos, aunque desde 2022 la CIE-11 los describe por grados. Preferimos verlos como formas de ser muy marcadas que hacen sufrir, a uno mismo o a quienes le rodean. Estas son las que más nos consultan.',
    items:[
    ['Inestabilidad emocional','Emociones que suben y bajan muy deprisa y con mucha intensidad, a veces por cosas que a otros les parecerían pequeñas.','inestabilidad'],
    ['Miedo al abandono','Sentir que te van a dejar y hacer lo que sea por evitarlo, aunque eso acabe tensando la relación.','abandono'],
    ['Relaciones intensas e inestables','Pasar de idealizar a alguien a sentirte decepcionado o herido, en relaciones que se viven con mucha intensidad.','relaciones'],
    ['Impulsividad','Actuar sin pensar cuando la emoción aprieta: gastar, comer, beber o decir cosas de las que luego te arrepientes. Cuando viene desde la infancia y afecta sobre todo a la atención, puede tener que ver con el <a href="tdah.html">TDAH</a>.','impulsividad'],
    ['Ira y explosiones emocionales','Enfados muy intensos que cuesta frenar y que después dejan culpa o vergüenza.','ira'],
    ['Rasgos obsesivos o perfeccionistas','Necesidad de orden, control y reglas que, cuando se vuelve rígida, hace sufrir a uno y a quienes le rodean. No es lo mismo que el <a href="ansiedad.html#toc">TOC</a>, aunque a veces se confundan.','obsesivos'],
    ['Personalidad evitativa','Evitar el contacto con los demás por miedo a ser rechazado o criticado, aunque desees esa cercanía.','evitativa'],
    ['Personalidad dependiente','Necesitar que otros decidan por ti y sentir angustia al quedarte solo. A menudo se vive en la <a href="pareja.html">pareja</a> como dependencia emocional.','dependiente'],
    ['Rasgos narcisistas','Una necesidad intensa de admiración y una imagen de uno mismo que se resiente mucho con la crítica. Detrás suele haber más fragilidad de la que se ve.','narcisistas']
  ]},
  proceso:{titulo:'Cómo trabajamos los problemas de personalidad', pasos:[
    ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender tus patrones.','Tu historia, tus relaciones y lo que se repite, sin poner etiquetas antes de tiempo.'],
    ['Regular las emociones y probar otras formas de relacionarte.','Con herramientas concretas para los momentos en que la emoción desborda. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con psiquiatría.','Si hay autolesiones, ideas de suicidio o medicación, trabajamos junto a tu psiquiatra.'],
    ['Revisar y avanzar.','Es un proceso que lleva su tiempo: vemos juntos cómo vas y avanzamos paso a paso.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia basada en la dialéctico-conductual','Es el enfoque con más respaldo en el TLP. Usamos sus herramientas para regular emociones intensas, tolerar el malestar sin hacerse daño y mejorar las relaciones.'],
    ['Terapia de aceptación y compromiso (ACT)','Hacer sitio a lo que sientes sin que decida por ti, y moverte hacia lo que te importa. La usamos como complemento.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también tu historia, tus relaciones y los entornos en los que te mueves.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 3 nuevas (6.1A cómo saber si es TLP, 6.2A cómo ayudar, 6.3 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Qué es un trastorno de la personalidad?','Es el nombre que se da a formas de sentir, pensar y relacionarse muy estables que hacen sufrir a la persona o a quienes la rodean, y que se repiten en distintos ámbitos. Desde 2022, la clasificación de la OMS (CIE-11) los describe por grados de gravedad más que por tipos cerrados.'],
    ['¿Qué es el trastorno límite de la personalidad (TLP)?','Se caracteriza por emociones muy intensas y cambiantes, miedo al abandono, relaciones inestables, impulsividad y, a veces, sensación de vacío o autolesiones. Hay tratamientos psicológicos específicos que ayudan, como la terapia dialéctico-conductual.','tlp'],
    ['¿Cómo saber si tengo TLP?','Si las emociones te desbordan a menudo, temes mucho que te abandonen, tus relaciones pasan de un extremo a otro y a veces actúas por impulso o sientes un gran vacío, merece la pena consultarlo. Un test en internet no basta: hace falta una valoración profesional, sin prisa por poner etiquetas.'],
    ['¿La personalidad se puede cambiar?','Los rasgos de fondo cambian despacio, pero la manera de manejar las emociones y de relacionarse sí puede cambiar mucho con terapia. No prometemos plazos: suele ser un proceso largo.'],
    ['¿Cómo ayudar a alguien con TLP?','Validar lo que siente sin darle la razón en todo, mantener límites claros con calma, no entrar en la escalada cuando la emoción sube y cuidarte también tú. Si hay riesgo de autolesión, llama al <strong>024</strong> o al <strong>112</strong>.'],
    ['¿Puede participar mi familia?','Sí. A menudo ayuda que la familia o la pareja entienda qué pasa y aprenda a acompañar sin desgastarse.'],
    ['¿Qué hago si hay autolesiones o ideas de suicidio?','Pide ayuda cuanto antes: llama al <strong>024</strong> si tienes pensamientos de suicidio y al <strong>112</strong> en una urgencia.'],
    ['¿Tratáis los trastornos de la personalidad cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'trastornos de la personalidad no me entiendo ni yo cambios de humor repentinos me siento vacio emocionalmente me cuesta relacionarme con la gente relaciones inestabilidad impulsividad emociones intensas',
  feel:['No me entiendo ni yo','Tengo cambios de humor repentinos','Me siento vacío emocionalmente','Me cuesta relacionarme con la gente'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta, a partir de ideas de Marino Pérez Álvarez (ver referencias y citas-para-la-web.md) */
  quotes:[
    '',   /* tras biología: sin frase (la primera va arriba, en la entrada) */
    'Nadie está totalmente predeterminado: seguimos haciéndonos toda la vida',   /* tras neurología */
    'Vivir la vida de forma muy intensa no tiene por qué ser un problema'   /* tras psicología */
  ],
  basesIntro:[
    'Usamos «trastorno de la personalidad» porque es como se busca y se diagnostica, aunque preferimos hablar de formas de ser muy marcadas —inestables, evitativas, dependientes, <a href="autoestima.html">perfeccionistas</a> o muy centradas en uno mismo— que hacen sufrir. Un síntoma no flota en el aire: es de alguien, con su historia y su forma de ser, y solo se entiende desde esa persona.',
    'Nos vamos haciendo con los demás y con lo que vivimos. Por eso también se puede trabajar.',
    {voz:'Nadie nace siendo la persona que es hoy'},   /* frase verde dentro de la entrada */
    'Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, sus relaciones y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que nacemos con un temperamento —más o menos sensibles, intensos o activos—, pero el temperamento todavía no es una forma de ser: esa se construye a lo largo de la vida.',
    '<strong>Los estudios de neurología</strong> muestran que el cerebro cambia con la experiencia y con las relaciones durante toda la vida: lo que somos no queda fijado de una vez para siempre.',
    '<strong>Los estudios de psicología</strong> muestran que muchas formas de sufrir son maneras de relacionarse con los demás que hemos aprendido en nuestro entorno, más que «defectos de fábrica». <a href="pareja.html">Las relaciones que se repiten y nos hacen daño</a> suelen ser estrategias aprendidas para protegernos. Y lo aprendido se puede revisar y cambiar. En el trastorno límite (TLP), por ejemplo, aprender a regular la ira o el miedo al abandono cambia mucho el día a día.',
    '<strong>Los estudios de sociología</strong> señalan que vivimos rodeados de estímulos, cambios y exigencias que nos llenan de cosas y, a la vez, pueden dejarnos <a href="depresion.html">una sensación de vacío</a>. Si te reconoces en esa sensación, trabajamos para que ganes <strong>consistencia</strong>: saber quién eres y qué quieres sostener en tu vida.'
  ],
  together:'No hay un yo verdadero escondido dentro: somos también lo que hacemos, lo que hemos hecho, cómo nos relacionamos con los demás y nuestros contextos. Por eso, cuando uno no se entiende a sí mismo, buscar dentro no basta. Cuando tu vida parece hecha a trozos que no encajan, ponerla en palabras ayuda a encontrarle un hilo y un sentido. Te acompañamos a hacerlo, paso a paso.',
  cta:'Podemos ayudarte a entender tus patrones y a probar otros.',
  intro:'Para trabajar los problemas de personalidad hace falta un enfoque <strong>multidimensional</strong>, porque no tienen una sola cara: están en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Hablamos de problemas de personalidad cuando hay formas de sentir, pensar y relacionarse muy estables que te hacen sufrir a ti o a quienes te rodean, y que se repiten en distintos ámbitos.» */
  science:'Los manuales describen varios tipos, pero la clasificación por categorías está en revisión y las propuestas recientes van hacia dimensiones.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario (no hay citas textuales); eran: García Montes y Pérez Álvarez (2003); Pérez Álvarez (2001), (2003) y (2015) */
  beyond:'La personalidad no es una esencia fija: es un patrón aprendido en una historia concreta, y los patrones pueden cambiar. No usamos siglas como etiqueta de nadie.',
  approaches:[
    ['Dialéctico-conductual','Regular emociones intensas y reducir conductas de riesgo.','buena en desregulación emocional'],
    ['Basada en la mentalización','Entender lo que uno y los demás sienten y piensan.','moderada'],
    ['Terapia de esquemas','Trabajar patrones aprendidos que se repiten.','moderada']
  ],
  coord:'Si hay autolesiones o ideas de suicidio, nos coordinamos con psiquiatría. En una urgencia, llama al <strong>112</strong>; si tienes pensamientos de suicidio, al <strong>024</strong>.',
  alt:'Hombre sonriente cargando plantas en una tienda',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'Usamos «trastorno de la personalidad» porque es como se busca y se diagnostica, aunque preferimos hablar de formas de ser muy marcadas —inestables, evitativas, dependientes, <a href="autoestima.html">perfeccionistas</a>— que hacen sufrir. Un síntoma no flota en el aire: es de alguien, con su historia y su forma de ser.',
      {voz:'Nadie nace siendo la persona que es hoy'},
      'Nos vamos haciendo con los demás y con lo que vivimos, y por eso también se puede trabajar. En cada persona se cruzan el cuerpo, su historia, sus relaciones y el entorno: nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que nacemos con un temperamento —más o menos sensibles, intensos o activos—, pero el temperamento todavía no es una forma de ser: esa se construye a lo largo de la vida.',
      '<strong>Los estudios de neurología</strong> muestran que el cerebro cambia con la experiencia y con las relaciones durante toda la vida: lo que somos no queda fijado de una vez para siempre.',
      '<strong>Los estudios de psicología</strong> muestran que muchas formas de sufrir son maneras de relacionarse aprendidas en nuestro entorno, más que «defectos de fábrica». <a href="pareja.html">Las relaciones que se repiten y nos hacen daño</a> suelen ser estrategias para protegernos, y lo aprendido se puede revisar y cambiar.',
      '<strong>Los estudios de sociología</strong> señalan que vivimos rodeados de estímulos y exigencias que pueden dejarnos <a href="depresion.html">una sensación de vacío</a>. Trabajamos para que ganes <strong>consistencia</strong>: saber quién eres y qué quieres sostener en tu vida.'
    ],
    together:'No hay un yo verdadero escondido dentro: somos también lo que hacemos, cómo nos relacionamos y nuestros contextos. Por eso, cuando uno no se entiende a sí mismo, buscar dentro no basta. Cuando tu vida parece hecha a trozos que no encajan, ponerla en palabras ayuda a encontrarle un hilo y un sentido. Te acompañamos a hacerlo, paso a paso.',
    tipos:{titulo:'Problemas de personalidad más frecuentes', intro:'Preferimos verlos como formas de ser muy marcadas que hacen sufrir, más que como tipos cerrados.', items:[
      ['Trastorno límite de la personalidad (TLP)','emociones muy intensas y cambiantes, miedo al abandono, relaciones inestables e impulsividad.','tlp'],
      ['Inestabilidad emocional','emociones que suben y bajan muy deprisa y con mucha intensidad.','inestabilidad'],
      ['Miedo al abandono','sentir que te van a dejar y hacer lo que sea por evitarlo.','abandono'],
      ['Relaciones intensas e inestables','pasar de idealizar a alguien a sentirte decepcionado o herido.','relaciones'],
      ['Impulsividad','actuar sin pensar cuando la emoción aprieta; si viene desde la infancia, puede tener que ver con el <a href="tdah.html">TDAH</a>.','impulsividad'],
      ['Ira y explosiones emocionales','enfados muy intensos que cuesta frenar y que después dejan culpa o vergüenza.','ira'],
      ['Rasgos obsesivos o perfeccionistas','necesidad rígida de orden y control; no es lo mismo que el <a href="ansiedad.html#toc">TOC</a>.','obsesivos'],
      ['Personalidad evitativa','evitar a los demás por miedo al rechazo, aunque desees esa cercanía.','evitativa'],
      ['Personalidad dependiente','necesitar que otros decidan por ti; a menudo se vive en la <a href="pareja.html">pareja</a>.','dependiente'],
      ['Rasgos narcisistas','necesidad intensa de admiración y mucha fragilidad ante la crítica.','narcisistas']
    ]},
    trabajo:{titulo:'Cómo trabajamos los problemas de personalidad',
      pasos:[
        ['Primera entrevista, gratuita.','La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender tus patrones.','Tu historia, tus relaciones y lo que se repite, sin poner etiquetas antes de tiempo.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes; es un proceso que lleva su tiempo. Si hay autolesiones, ideas de suicidio o medicación, trabajamos junto a tu psiquiatra.']
      ],
      texto:'Trabajamos con herramientas de la terapia dialéctico-conductual y las terapias contextuales, como la de aceptación y compromiso (ACT). Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a> desde cualquier lugar, también si vives fuera de España. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
},
{
  slug:'sexual', name:'Problemas sexuales', sym:'No tengo deseo sexual',
  h1:'Terapia para los problemas sexuales',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Terapia sexual en Madrid y online · Sexología y pareja',
  seoDesc:'Psicólogo para problemas sexuales: falta de deseo, disfunción eréctil, eyaculación precoz o dolor. Solo o en pareja. Centro sanitario en Madrid y online.',
  pagina:'sexual.html',   /* página fija; motivo.html?m=sexual lleva a ella */
  enfoqueDe:'de la sexualidad',
  /* etiquetas enlazadas (2026-11-09): '#ancla' abre su desplegable (problemas o la pregunta del deseo); ansiedad, pareja y adicciones llevan a su terapia */
  subs:[['Falta de deseo sexual','#deseo'],['Disfunción eréctil','#erectil'],['Eyaculación precoz','#precoz'],['Anorgasmia','#anorgasmia'],['Dolor en las relaciones sexuales','#dolor'],['Vaginismo','#vaginismo'],['Ansiedad ante el sexo','ansiedad'],['Diferencias de deseo en la pareja','pareja'],['Adicción al sexo o a la pornografía','adicciones'],['Sexualidad tras el parto','#parto'],['Sexualidad en la menopausia','#menopausia']],
  /* apartados nuevos (2026-11-09, recomendaciones aceptadas por el usuario: 1A, 2 único, 3A —TCC sexual, atención plena, pareja, tu contexto—, 4 y 5 como en las demás) */
  tipos:{titulo:'Problemas sexuales más frecuentes',
    intro:'Estos son los motivos por los que más nos consultan. Casi siempre se mezclan el cuerpo, la relación y la historia de cada persona, y por eso no hay una sola manera de entenderlos.',
    items:[
    ['Disfunción eréctil','Dificultad para conseguir o mantener la erección. Conviene descartar causas físicas, pero muy a menudo pesan la ansiedad y la presión por «rendir».','erectil'],
    ['Eyaculación precoz','Eyacular antes de lo que se desea, con poco control y malestar. Es una de las consultas más frecuentes y se trabaja con ejercicios concretos.','precoz'],
    ['Anorgasmia','Dificultad para llegar al orgasmo, o no llegar nunca, aunque haya deseo y excitación.','anorgasmia'],
    ['Dolor en las relaciones sexuales','Dolor durante o después de la penetración. Siempre conviene una valoración ginecológica o urológica, y trabajamos coordinados.','dolor'],
    ['Vaginismo','Contracción involuntaria de los músculos de la vagina que dificulta o impide la penetración. Suele ir unido al miedo al dolor, y se trabaja de forma gradual.','vaginismo'],
    ['Sexualidad tras el parto','El cansancio, los cambios del cuerpo y los nuevos roles cambian el deseo. Es frecuente, y se trabaja también en <a href="pareja.html">pareja</a>.','parto'],
    ['Sexualidad en la menopausia','Los cambios hormonales pueden afectar al deseo, a la lubricación y al bienestar sexual. Combinamos la mirada médica con la psicológica.','menopausia']
  ]},
  proceso:{titulo:'Cómo trabajamos los problemas sexuales', pasos:[
    ['Primera entrevista, gratuita.','Solo, sola o en pareja. La hace siempre Daniel de la Torre, director del centro. Nos cuentas qué te pasa y lo pensamos juntos.'],
    ['Entender qué pasa.','El cuerpo, la relación, tu historia y las expectativas que pesan sobre el sexo.'],
    ['Trabajarlo paso a paso.','Con ejercicios graduales, sin presión por el resultado, y mejorando la comunicación. Las sesiones duran 60 minutos; al principio suelen ser semanales y, como mínimo, dos al mes.'],
    ['Coordinarnos con medicina.','Si hace falta descartar una causa física o tomas medicación, trabajamos junto a tu médico, urólogo o ginecóloga.'],
    ['Revisar y cerrar.','Vemos juntos cómo vas y, cuando la sexualidad vuelve a ser un espacio tranquilo, espaciamos las sesiones.']
  ]},
  enfoques:{titulo:'Con qué enfoques trabajamos', items:[
    ['Terapia sexual cognitivo-conductual','Ejercicios graduales y trabajo con la ansiedad de ejecución y las ideas que la alimentan.'],
    ['Atención plena','Atender al cuerpo y a las sensaciones sin presión por el resultado. Hay estudios prometedores, sobre todo en la falta de deseo en mujeres.'],
    ['Terapia de pareja','Cuando la dificultad es de los dos, la trabajamos juntos, como en la <a href="pareja.html">terapia de pareja</a>.'],
    ['Terapias contextuales','Las técnicas solas no bastan: trabajamos también el estrés, la crianza, la relación y los modelos de sexualidad que nos rodean.']
  ]},
  modalidad:{titulo:'Presencial u online', texto:'Puedes venir a nuestro centro sanitario en la calle Martín de Vargas, 5, junto al metro de Embajadores (línea 3) y cerca de Lavapiés: es la <a href="presencial.html">terapia presencial</a>. También puedes hacer la <a href="online.html">terapia online</a>, por videollamada, desde cualquier lugar, aunque vivas fuera de España. La sesión dura lo mismo en las dos modalidades. A muchas personas les resulta más fácil hablar de sexualidad desde casa.'},
  quien:{titulo:'Quién te atiende', texto:'Symploké es nuestro proyecto de psicoterapia y lleva en marcha desde 2012. Nuestro centro sanitario, Koiné Psicología, está autorizado por la Comunidad de Madrid (CS19975), y la primera entrevista, gratuita, la hace siempre su director, Daniel de la Torre Díaz, psicólogo general sanitario y forense (colegiado M-28688). <a href="quienes-somos.html">Conócenos</a>.'},
  /* preguntas frecuentes (2026-11-08); 2026-11-09: 4 nuevas (6.1A disfunción eréctil psicológica, 6.2A eyaculación precoz, 6.3A deseo con los años, 6.4 local), en desplegables */
  faqDesplegable:true,
  faq:[
    ['¿Cuándo conviene ir a terapia sexual?','Cuando algo de tu vida sexual —el deseo, la excitación, el dolor o el orgasmo— te preocupa o afecta a tu pareja y se mantiene en el tiempo. No hace falta esperar a que sea grave.'],
    ['¿Por qué no tengo deseo sexual?','Las causas suelen ser varias a la vez: el cansancio, el estrés, la relación de pareja, algunos medicamentos, cambios hormonales o experiencias pasadas. Por eso miramos el cuerpo, la relación y el momento vital.','deseo'],
    ['¿Y si ha habido abuso o violencia?','La terapia puede ayudarte, y no estás sola. El <strong>016</strong> atiende las 24 horas, es gratuito y no deja rastro en la factura; en una urgencia, llama al <strong>112</strong>.'],
    ['¿La disfunción eréctil es psicológica?','Puede ser física, psicológica o las dos cosas a la vez. Una pista: si hay erecciones por la mañana o en la masturbación, suele pesar más lo psicológico. En cualquier caso, conviene una revisión médica.'],
    ['¿Cómo se trata la eyaculación precoz?','Con ejercicios graduales para ganar control, trabajando la ansiedad y, si es posible, con la pareja. Si hace falta, nos coordinamos con urología.'],
    ['¿Es normal que el deseo cambie con los años?','Sí. El deseo cambia con la edad, el estrés, la crianza o la relación, y no siempre al mismo ritmo en los dos. Que cambie no es un problema; lo es cuando te hace sufrir a ti o a tu pareja.'],
    ['¿Hace falta ir antes al médico?','En problemas como la disfunción eréctil o el dolor en las relaciones conviene descartar una causa física. Nos coordinamos con medicina, urología o ginecología cuando hace falta.'],
    ['¿Puedo ir solo o con mi pareja?','Las dos cosas. Puedes venir solo o sola, o en pareja si el problema es de los dos.'],
    ['¿Se puede hacer terapia sexual online?','Sí. A muchas personas les resulta más fácil hablar de sexualidad desde casa, y la terapia online logra resultados comparables a la presencial.'],
    ['¿Hacéis terapia sexual cerca de Lavapiés o Embajadores?','Sí. Nuestro centro sanitario está en la calle Martín de Vargas, 5, junto al metro de Embajadores. Si no puedes venir, hacemos la <a href="online.html">terapia online</a>.']
  ],
  k:'problemas sexuales sexualidad no tengo deseo sexual por mi pareja no me siento deseada mi pareja no me desea vida sexual ereccion dolor orgasmo',
  feel:['No tengo deseo sexual','Me agobia no estar a la altura','No me siento deseada por mi pareja','Me da vergüenza hablar de esto'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases verdes (2026-11-08): la de la entrada parte de ideas del Gottman Institute (traducción nuestra);
     el dato del 10 % se retiró por no tener estudio detrás */
  quotes:[
    'Sentir seguridad, compartir nuevos proyectos y tener una comunicación abierta también despiertan el deseo',   /* tras biología; se apoya en los estudios sobre apego, autoexpansión y comunicación sexual */
    '',   /* tras neurología: sin frase */
    'No hay un único modelo: cada persona y cada pareja encuentra su manera de vivir sus relaciones sexoafectivas'   /* tras psicología, antes de sociología */
  ],
  basesIntro:[
    'La sexualidad no es una función mecánica que falla, aunque a veces se viva así, como en la eyaculación precoz o el vaginismo: se entreteje con la pareja, el estrés, la historia de cada persona y las expectativas. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.',
    'La intimidad real empieza con <strong>conversaciones reales</strong> sobre sexo: poder decir qué nos pasa, qué necesitamos y qué deseamos.',
    {voz:'Las parejas que hablan abiertamente de sus necesidades y deseos tienen vínculos más fuertes y una vida sexual más satisfactoria'},   /* frase verde dentro de la entrada (antes iba tras psicología) */
    'Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, la relación y el contexto. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el deseo y la respuesta sexual dependen también del cuerpo: las hormonas —tras el parto o en la menopausia—, el cansancio, ciertas enfermedades o algunos medicamentos influyen. A veces conviene descartar antes una causa médica.',
    '<strong>Los estudios de neurología</strong> muestran que el estrés y <a href="ansiedad.html">la ansiedad</a> frenan la respuesta sexual: cuando el cuerpo está en alerta, el deseo se apaga. De ahí que la presión por «rendir» suela empeorar las cosas.',
    '<strong>Los estudios de psicología</strong> muestran que poder hablar de sexo con comodidad se asocia a una vida sexual más satisfactoria y a vínculos más fuertes.',
    '<strong>Los estudios de sociología</strong> señalan el peso de los modelos de sexualidad que vemos en los medios y en <a href="adicciones.html">la pornografía</a>, que crean expectativas poco realistas, y de la vergüenza que todavía rodea al sexo.'
  ],
  together:'Hablar de lo que nos pasa en la intimidad, y las nuevas formas de encontrarnos que surgen de ello, ayuda a construir una base de amistad y de conexión emocional. Podemos trabajarlo tanto si vienes solo o sola como si <a href="pareja.html">venís en pareja</a>.',
  cta:'Un espacio para hablar de sexualidad sin juicios.',
  intro:'Para trabajar los problemas sexuales hace falta un enfoque <strong>multidimensional</strong>, porque no tienen una sola cara: están en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  /* entrada anterior (2026-11-08): «Hablamos de problemas sexuales cuando algo de la vida sexual —el deseo, la excitación, el dolor o el orgasmo— te preocupa o afecta a tu pareja. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.» */
  science:'Muchas dificultades sexuales tienen a la vez componentes físicos y psicológicos; por eso a veces conviene descartar antes una causa médica.',
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: The Gottman Institute, «Relationship intimacy» y «Weekend homework assignment: have great sex» (gottman.com) */
  beyond:'La sexualidad no es una función mecánica que falla: se entreteje con la pareja, el estrés, la historia de cada uno y las expectativas.',
  approaches:[
    ['Terapia sexual cognitivo-conductual','Ejercicios graduales y revisión de la ansiedad de ejecución.','moderada'],
    ['Basadas en mindfulness','Atención al cuerpo sin presión por el resultado.','en estudio'],
    ['Terapia de pareja','Cuando la dificultad es de los dos.','variable']
  ],
  alt:'Pareja riendo relajada en un sofá',
  /* VERSIÓN CARLOS (2026-11-10): página resumida, como en ansiedad y pareja (sin etiquetas, enfoque recortado, tipos en lista,
     un solo «Cómo trabajamos», preguntas en preguntas.html). Los textos largos de arriba se quedan intactos. Para volver a la página larga, borrar «corta». */
  corta:{
    basesIntro:[
      'La sexualidad no es una función mecánica que falla, aunque a veces se viva así: se entreteje con la pareja, el estrés, la historia de cada persona y las expectativas. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.',
      'La intimidad real empieza con <strong>conversaciones reales</strong> sobre sexo. Cada persona es distinta, y por eso nuestro enfoque es <strong>pluralista</strong>.'
    ],
    bases:[
      '<strong>Los estudios de biología</strong> muestran que el deseo y la respuesta sexual dependen también del cuerpo: las hormonas —tras el parto o en la menopausia—, el cansancio, ciertas enfermedades o algunos medicamentos. A veces conviene descartar antes una causa médica.',
      '<strong>Los estudios de neurología</strong> muestran que el estrés y <a href="ansiedad.html">la ansiedad</a> frenan la respuesta sexual: cuando el cuerpo está en alerta, el deseo se apaga. Por eso la presión por «rendir» suele empeorar las cosas.',
      '<strong>Los estudios de psicología</strong> muestran que poder hablar de sexo con comodidad se asocia a una vida sexual más satisfactoria y a vínculos más fuertes.',
      '<strong>Los estudios de sociología</strong> señalan el peso de los modelos de sexualidad de los medios y de <a href="adicciones.html">la pornografía</a>, que crean expectativas poco realistas, y de la vergüenza que todavía rodea al sexo.'
    ],
    together:'Hablar de lo que nos pasa en la intimidad, y las nuevas formas de encontrarnos que surgen de ello, ayuda a construir una base de amistad y de conexión emocional. Podemos trabajarlo tanto si vienes solo o sola como si <a href="pareja.html">venís en pareja</a>.',
    tipos:{titulo:'Problemas sexuales más frecuentes', intro:'Casi siempre se mezclan el cuerpo, la relación y la historia de cada persona.', items:[
      ['Falta de deseo sexual','cambia con el cansancio, el estrés, la relación, algunos medicamentos o los cambios hormonales.','deseo'],
      ['Disfunción eréctil','dificultad para conseguir o mantener la erección; a menudo pesan la ansiedad y la presión por «rendir».','erectil'],
      ['Eyaculación precoz','eyacular antes de lo que se desea; se trabaja con ejercicios concretos.','precoz'],
      ['Anorgasmia','dificultad para llegar al orgasmo aunque haya deseo y excitación.','anorgasmia'],
      ['Dolor en las relaciones sexuales','conviene una valoración ginecológica o urológica, y trabajamos coordinados.','dolor'],
      ['Vaginismo','contracción involuntaria que dificulta la penetración; se trabaja de forma gradual.','vaginismo'],
      ['Sexualidad tras el parto','el cansancio, el cuerpo y los nuevos roles cambian el deseo; se trabaja también en <a href="pareja.html">pareja</a>.','parto'],
      ['Sexualidad en la menopausia','los cambios hormonales afectan al deseo y al bienestar sexual; combinamos la mirada médica y la psicológica.','menopausia']
    ]},
    trabajo:{titulo:'Cómo trabajamos los problemas sexuales',
      pasos:[
        ['Primera entrevista, gratuita.','Solo, sola o en pareja. La hace siempre Daniel de la Torre Díaz, director del centro, psicólogo general sanitario y forense (colegiado M-28688).'],
        ['Entender qué pasa.','El cuerpo, la relación, tu historia y las expectativas que pesan sobre el sexo.'],
        ['Sesiones de 60 minutos.','Al principio, semanales y, como mínimo, dos al mes, con ejercicios graduales y sin presión por el resultado. Si hace falta, nos coordinamos con tu médico, urólogo o ginecóloga.']
      ],
      texto:'Trabajamos con la terapia sexual cognitivo-conductual, la atención plena, la <a href="pareja.html">terapia de pareja</a> cuando la dificultad es de los dos y las terapias contextuales. Puedes venir a <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (metro Embajadores, línea 3, y Acacias, línea 5, junto a Lavapiés) o hacer la <a href="online.html">terapia online</a>, también si vives fuera de España; a muchas personas les resulta más fácil hablar de sexualidad desde casa. La sesión dura lo mismo. <a href="quienes-somos.html">Quiénes somos</a>.'
    }
  }
}
];

window.OTROS=[
  ['Burnout','ansiedad','burnout quemado agotamiento trabajo laboral'],
  ['Dependencia emocional','pareja','dependencia emocional pareja apego'],
  ['Estrés postraumático','ansiedad','estres postraumatico trauma'],
  ['Fobias','ansiedad','fobias miedos fobia'],
  ['Ira y autocontrol','ansiedad','ira autocontrol enfado rabia impulsividad no controlo mis emociones'],
  ['Obsesiones','ansiedad','obsesiones obsesivo pensamientos intrusivos manias'],
  ['Problemas laborales','ansiedad','problemas laborales trabajo jefe no tengo ganas de ir a trabajar'],
  ['Rupturas, separaciones y divorcios','pareja','rupturas divorcio separacion separarse superar a mi ex']
];

/* fotos provisionales (Wikimedia Commons): autor, licencia y página de origen */
window.FOTOS={
  portada:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Smiling_woman_with_curly_hair_drinking_coffee_in_her_retro_living_room.jpg'],
  ansiedad:['Biel Morro','CC0','https://commons.wikimedia.org/wiki/File:Woman_walking_down_path_(Unsplash).jpg'],
  depresion:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Friends_gather_at_a_table_outdoors_for_crafts.jpg'],
  insomnio:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Relaxing_woman_enjoys_morning_coffee_on_a_wooden_bench.jpg'],
  alimentacion:['Ali Inay','CC0','https://commons.wikimedia.org/wiki/File:Brunching_with_Friends_(Unsplash).jpg'],
  pareja:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Two_friends_sit_on_gravel_beside_a_classic_car,_laughing_and_engaging.jpg'],
  tdah:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Woman_studies_at_a_desk_with_a_laptop_notebook_and_drink_in_a_bright_room.jpg'],
  adicciones:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Runner_celebrates_finish_at_race_event_in_city_park_with_medal_around_neck_and_smiling_at_friends_and_family.jpg'],
  autoestima:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Woman_smiling_while_talking_on_the_phone_by_the_window.jpg'],
  duelo:['John Dean (Friends of Gwynns Falls / Leakin Park)','CC BY-SA 3.0','https://commons.wikimedia.org/wiki/File:A_family_in_Gwynns_Falls-Leakin_Park.png'],
  infancia:['Eugenia García','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Taller_con_jovenes_-_tallerconjovenes7.jpeg'],
  personalidad:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Man_smiling_while_carrying_potted_plants_in_a_home_decor_store.jpg'],
  sexual:['Shixart1985','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Friends_enjoy_music_on_a_cozy_couch.jpg']
};
window.creditLine=function(slug){if(window.ILUS&&ILUS[slug])return '';var f=FOTOS[slug];return f?'Foto provisional: '+f[0]+' · <a href="'+f[2]+'" rel="noopener">'+f[1]+'</a>':'';};

window.motivoBySlug=function(s){for(var i=0;i<MOTIVOS.length;i++)if(MOTIVOS[i].slug===s)return MOTIVOS[i];return null;};

/* dirección de la página de un motivo: la fija si la tiene (ansiedad.html) o motivo.html?m=slug */
window.motivoUrl=function(m){return m.pagina||('motivo.html?m='+m.slug);};

/* imagen de un motivo: la ilustración (ilustraciones.js) y, si no está cargada, la foto provisional */
window.motivoArt=function(slug,uid,fill){
  if(!window.ILUS||!ILUS[slug])return '<img src="img/'+slug+'.jpg" alt="" loading="lazy">';
  var s=ILUS[slug](uid);
  return fill?s.replace('<svg ','<svg preserveAspectRatio="xMidYMid slice" '):s;
};

/* recuadro de un motivo con su imagen: lo usan la portada y la página de motivos */
window.motivoCard=function(m){
  return '<a class="card mcard" href="'+motivoUrl(m)+'" data-k="'+m.k+'"><span class="mimg">'+motivoArt(m.slug,'c'+m.slug)+'</span><span class="mtxt"><h3>'+m.name+'</h3><p class="sym">«'+m.sym+'»</p><span class="ar" aria-hidden="true">→</span></span></a>';
};
})();
