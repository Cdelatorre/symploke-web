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
  seoTitle:'Psicólogo para la ansiedad en Madrid y online · Symploké',
  seoDesc:'¿Tienes ansiedad y no sabes por qué? Ataques de ansiedad, estrés, miedos u obsesiones: te ayudamos a entender a qué responde. En Madrid u online.',
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
    'Darle vueltas a todo, comprobar una y otra vez, evitar lo que asusta… <strong>Los estudios de psicología</strong> muestran que son intentos de control que alivian un momento pero alimentan el círculo: así se mantienen muchos miedos, fobias y obsesiones. A veces aparece además la <strong>hiperreflexividad</strong>: estar pendientes de cada latido, de cada pensamiento. Cuanto más nos miramos por dentro, menos espacio queda para vivir hacia fuera.',
    'No es que la ansiedad esté dentro de ti como una pieza averiada: eres tú quien está dentro de una situación, o de varias a la vez, que te generan ansiedad. <strong>Los estudios de sociología</strong> la asocian a la precariedad, la prisa o la presión por rendir. Por eso incluimos aquí el <strong>estrés laboral o burnout</strong>. También puede ocurrir que, después de una experiencia muy dura, el cuerpo siga en alerta como si el peligro no hubiera pasado: es lo que se conoce como <strong>estrés postraumático</strong>.'
  ],
  faq:[
    ['¿Cuándo conviene ir al psicólogo por ansiedad?','Cuando dura semanas, te impide hacer cosas que antes hacías o aparece en forma de ataques que te asustan. No hace falta esperar a que sea grave.'],
    ['¿Se cura la ansiedad?','La ansiedad en sí no es una enfermedad, y hay partes de ella que nos son útiles. Lo que sí es necesario es entenderla y saber de dónde viene, para que no nos genere sufrimiento.'],
    ['¿Cuántas sesiones hacen falta?','Depende de cada caso. En la primera cita valoramos juntos qué te pasa y te proponemos cómo trabajarlo.'],
    ['¿La terapia online funciona igual?','Para la ansiedad, la terapia online logra progresos comparables a la presencial.'],
    ['¿Hace falta tomar medicación?','En terapia psicológica no se recetan fármacos. Si ya tomas medicación o conviene valorarla, nos coordinamos con tu médico.']
  ],
  together:'La ansiedad es <strong>multicausal</strong>, es decir, se produce por diversas causas. Lo que nos interesa es saber cómo se entretejen en tu caso: qué te pasa en el cuerpo, qué te dices, qué está ocurriendo en tu vida. La ansiedad casi siempre tiene dirección —el trabajo, la familia, la pareja, los amigos, los proyectos personales—, aunque al principio no se vea. Te ayudamos a aclarar a qué situaciones responde y de qué te está avisando, para que puedas relacionarte con ella de otra manera. Se trata de dejar la lucha contra los síntomas y volver a orientarte e involucrarte en los distintos ámbitos de tu vida. Buscamos juntos qué partes de la ansiedad te están <strong>amordazando</strong> y cómo transformarlas en <strong>habilitadores</strong> que encajen con tus esferas vitales y te permitan avanzar.',
  cta:'Podemos ayudarte a dejar de darle vueltas a todo y a que la ansiedad no decida por ti.',
  intro:'Para trabajar la ansiedad hace falta un enfoque <strong>multidimensional</strong>, porque no tiene una sola cara: está en el cuerpo, en lo que hacemos y en las situaciones que vivimos. Por eso no hay una sola explicación: tenemos en cuenta lo que aporta cada disciplina y tratamos de entretejerlas.',
  science:'Se suele distinguir el miedo, ante un peligro presente, de la ansiedad, ante uno anticipado. Cuando se mantiene y limita la vida diaria, los manuales clínicos describen varios cuadros: ansiedad generalizada, pánico, ansiedad social o fobias, entre otros. Es uno de los motivos de consulta más frecuentes. '+V,
  refs:'',   /* retiradas el 2026-11-08 a petición del usuario; eran: Pérez Álvarez (2006), «La terapia de conducta de tercera generación»; (2008), «Hyperreflexivity as a condition of mental disorder»; (2012), «La psicología positiva: magia simpática»; (2019), «Diagnóstico más allá de los síntomas» */
  beyond:'Decir «tengo ansiedad» la convierte en una pieza averiada que llevamos dentro. Suele ser más útil verla como algo que hacemos —anticipar— y preguntarse hacia dónde: casi siempre tiene dirección postal (el trabajo, la familia, la pareja, el dinero). A veces la anticipación se vuelve sobre sí misma: vigilar cada latido, pensar en cómo estoy pensando. Y las ideas que parecen «irracionales» también tienen sus razones.',
  approaches:[
    ['Terapia cognitivo-conductual','Exposición gradual a lo que se evita y revisión de las anticipaciones que mantienen el miedo.','amplia en varios cuadros de ansiedad'],
    ['Terapias contextualistas y ACT','Dejar de pelear con la ansiedad para volver a hacer lo que importa, aunque esté presente.','creciente'],
  ],
  subs:['Ansiedad generalizada','Ataques de ansiedad y pánico','Agorafobia','Ansiedad social','Obsesiones y TOC','Miedos y fobias','Hipocondría o ansiedad por la salud','Estrés laboral y burnout','Estrés postraumático',['Insomnio por ansiedad','insomnio'],'Ansiedad que se nota en el cuerpo'],
  alt:'Mujer caminando tranquila por un paseo arbolado con luz de tarde'
},
{
  slug:'depresion', name:'Depresión y estado de ánimo', sym:'No tengo ganas de levantarme de la cama',
  seoTitle:'Psicólogo para la depresión en Madrid y online · Symploké',
  seoDesc:'¿Sin ganas de nada, tristeza que no se va o sensación de vacío? Te ayudamos a entender tu depresión y a dar los primeros pasos. En Madrid u online.',
  h1:'Terapia para la depresión y el estado de ánimo',   /* encabezado a todo el ancho, en una línea, como en ansiedad */
  pagina:'depresion.html',   /* página fija; motivo.html?m=depresion lleva a ella */
  enfoqueDe:'de la depresión',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',   /* frase junto a «Quizá te suene»; si falta, «Es frecuente sentirse así» */
  revisada:true,   /* sin la marca «borrador» */
  k:'depresion estado de animo tristeza no tengo ganas de levantarme de la cama no veo futuro no tengo ganas de vivir no tengo ganas de nada sin ganas solo quiero dormir me siento vacio vacia solo sola triste apatia desanimo cansancio depresion mayor distimia depresion posparto depresion estacional anhedonia no disfruto de nada falta de motivacion soledad no deseada crisis existencial ansiedad y depresion',
  subs:['Depresión mayor','Distimia o tristeza que dura años',['Ansiedad y depresión','ansiedad'],'Apatía y falta de motivación','No disfrutar de nada (anhedonia)','Sensación de vacío','Soledad no deseada','Crisis existencial','Depresión posparto','Depresión estacional',['Depresión tras una pérdida','duelo'],'Depresión en personas mayores'],
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
    'El ánimo bajo no está solo en la cabeza. Hoy sabemos, <strong>por los estudios de biología</strong>, que la depresión afecta al <a href="insomnio.html">sueño</a>, al apetito, al cansancio y al cuerpo entero. También influyen el estrés mantenido, la falta de luz y de movimiento o algunas enfermedades, así que a veces conviene una revisión médica.',
    'No se ha demostrado que un desequilibrio químico sea su causa: como mucho, es un componente más. La explicación de «me falta serotonina» es una simplificación que <strong>los estudios de neurología</strong> no sostienen tal cual; el ánimo va ligado a nuestra vida y es mucho más complejo. Lo que sí muestran es que se apagan los sistemas que nos hacen anticipar lo bueno y movernos hacia ello, y eso ayuda a entender la falta de ganas.',
    'Cuando el ánimo baja, hacemos menos; al hacer menos, hay menos cosas que nos llenen, y el ánimo baja más. <strong>Los estudios de psicología</strong> muestran que esperar a tener ganas para moverse suele alargar el círculo. Así, la terapia busca que actúes de acuerdo con tus objetivos y con lo que te interesa, en vez de según cómo te encuentres ese día. No se trata de hacer por hacer ni de rellenar el tiempo por estar ocupado, sino de hacer cosas que tengan sentido para ti, con pequeños avances.',
    'Las pérdidas, la soledad no deseada, el paro o la precariedad aumentan el riesgo de depresión, como han documentado <strong>los estudios de sociología</strong>. No es debilidad de nadie: el malestar también habla de cómo vivimos. Hay etapas especialmente desgastantes —un posparto, <a href="motivo.html?m=duelo">un duelo</a>, los intensos ritmos de vida, el cansancio acumulado— tras las que el ánimo puede venirse abajo.'
  ],
  /* preguntas frecuentes (2026-11-08). La de antidepresivos sigue las guías clínicas (p. ej., NICE NG222, 2022): psicoterapia como primera opción en la depresión menos grave; en la más grave, combinada con medicación */
  faq:[
    ['¿Cuándo conviene ir al psicólogo por depresión?','Cuando la tristeza, el desánimo o la falta de interés duran semanas y empiezan a afectar al trabajo, a las relaciones o al cuidado de ti. No hace falta esperar a tocar fondo.'],
    ['¿Qué diferencia hay entre tristeza y depresión?','La tristeza es una emoción normal ante una pérdida o un problema, y suele ir cediendo. Hablamos de depresión cuando se mantiene durante semanas, se apaga el interés por casi todo y empieza a afectar al sueño, al apetito, al trabajo o a las relaciones.'],
    ['¿Se cura la depresión?','Más que “curarse”, de la depresión se sale cambiando poco a poco la situación en la que uno está, y eso se puede trabajar. Cada proceso es distinto: no prometemos plazos, pero sí acompañarte para entender cómo has llegado ahí y para ir haciendo progresos.'],
    ['¿Hace falta tomar antidepresivos?','En terapia psicológica no se recetan fármacos. Las guías clínicas recomiendan la psicoterapia como primera opción en la depresión leve o moderada y, en la más grave, combinada con medicación. Si ya tomas antidepresivos o conviene valorarlos, nos coordinamos con tu médico o psiquiatra.'],
    ['¿La terapia online funciona para la depresión?','Sí. La terapia online logra resultados comparables a la presencial, y a veces facilita empezar cuando cuesta salir de casa.']
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
  alt:'Grupo de amigas compartiendo una mesa al aire libre'
},
{
  slug:'insomnio', name:'Insomnio y sueño', sym:'Me agobia no poder dormirme',
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Psicólogo para el insomnio en Madrid y online · Symploké',
  seoDesc:'¿No puedes dormir, te despiertas de madrugada o te agobia la noche? Te ayudamos con terapia psicológica para el insomnio. En Madrid u online.',
  h1:'Terapia para el insomnio y los problemas de sueño',   /* encabezado a todo el ancho, en una línea, como en ansiedad y depresión */
  pagina:'insomnio.html',   /* página fija; motivo.html?m=insomnio lleva a ella */
  enfoqueDe:'del insomnio',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  k:'insomnio sueno me agobia no poder dormirme me paso la noche dando vueltas me paso el dia agotado agotada no puedo dormir duermo mal me despierto por la noche madrugada me cuesta dormir mi cabeza no deja de pensar higiene del sueno cansancio insomnio de conciliacion despertares nocturnos me despierto a las 4 sueno no reparador insomnio cronico pastillas para dormir somniferos dejar los somniferos menopausia turnos pesadillas insomnio por ansiedad estres',
  subs:['Insomnio de conciliación','Despertares nocturnos','Despertarse de madrugada','Sueño no reparador','Insomnio crónico',['Insomnio por ansiedad o estrés','ansiedad'],['Insomnio y depresión','depresion'],'Pesadillas','Higiene del sueño','Dependencia de pastillas para dormir','Insomnio en la menopausia','Trabajo a turnos',['Sueño en niños y adolescentes','infancia']],
  /* preguntas frecuentes (2026-11-08). Pastillas: las guías (p. ej., la europea de insomnio de 2023, Riemann y cols.) proponen la TCC-I como primera opción y los hipnóticos solo a corto plazo */
  faq:[
    ['¿Cuándo conviene ir al psicólogo por insomnio?','Cuando duermes mal varias noches por semana durante semanas y lo notas de día: cansancio, irritabilidad o problemas para concentrarte. No hace falta esperar a que se vuelva crónico.'],
    ['¿Qué hago si no puedo dormir?','Si llevas un rato en la cama sin dormir y empiezas a agobiarte, suele ayudar levantarte, hacer algo tranquilo con poca luz y volver cuando tengas sueño. Mirar el reloj o el móvil alimenta la alerta. Si se repite a menudo, conviene consultarlo.'],
    ['¿Se cura el insomnio?','En muchos casos mejora con terapia psicológica, que es lo que recomiendan las guías clínicas. Cada proceso es distinto; no prometemos plazos, pero sí trabajar contigo para que vuelvas a dormir sin pelearte con la noche.'],
    ['¿Las pastillas para dormir solucionan el insomnio?','En terapia psicológica no se recetan fármacos. Los somníferos pueden ayudar de forma puntual, pero las guías clínicas no los recomiendan como solución a largo plazo. Si los tomas o quieres dejarlos, nos coordinamos con tu médico.'],
    ['¿La terapia online funciona para el insomnio?','Sí. La terapia cognitivo-conductual para el insomnio se adapta bien al formato online y logra resultados comparables a la presencial.']
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
    '<strong>Los estudios de biología</strong> muestran que el sueño depende de dos relojes: uno es el ritmo circadiano, que marca la luz del día, y el otro la presión de sueño, que se acumula mientras estamos despiertos. Las pantallas por la noche, la cafeína o los horarios cambiantes los desajustan, y otras cosas, como la menopausia o las pesadillas, interrumpen el sueño. Además, no basta con dormir horas: el sueño profundo es el más reparador para el cuerpo, y durante la fase REM se consolidan los recuerdos y se procesan las emociones.',
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
  alt:'Mujer descansando al sol de la mañana con una taza de café'
},
{
  slug:'alimentacion', name:'Problemas de alimentación', sym:'Como y después me culpo', delicate:true,
  h1:'Terapia para los problemas de alimentación',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Psicólogo para TCA y atracones en Madrid y online · Symploké',
  seoDesc:'¿Atracones, culpa después de comer u obsesión por el peso? Terapia para los problemas de alimentación, con calma y sin juicios. En Madrid u online.',
  pagina:'alimentacion.html',   /* página fija; motivo.html?m=alimentacion lleva a ella */
  enfoqueDe:'de los problemas de alimentación',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  subs:['Atracones','Bulimia','Anorexia',['Comer por ansiedad','ansiedad'],'Hambre emocional','Obsesión por el peso o la figura','Insatisfacción con el cuerpo','Dietas restrictivas','Culpa después de comer','Ejercicio compulsivo','Ortorexia: obsesión por comer sano','Vigorexia','Trastornos de la conducta alimentaria (TCA)',['Problemas con la comida en adolescentes','infancia']],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo conviene ir al psicólogo por problemas con la comida?','Cuando la comida, el peso o la figura ocupan buena parte de tus pensamientos, hay atracones, restricciones o vómitos, o la culpa después de comer te condiciona el día. Cuanto antes se pida ayuda, mejor.'],
    ['¿Qué es un atracón?','Comer en poco tiempo una cantidad grande de comida con la sensación de no poder parar, y sentir después culpa o vergüenza. Si se repite, no basta con intentar aguantar: suele cumplir una función, como aliviar el malestar, y eso se puede trabajar.'],
    ['¿Se puede superar un trastorno de la conducta alimentaria?','Es posible, aunque suele llevar tiempo. Cada proceso es distinto: no prometemos plazos, pero sí acompañarte para que la comida deje de ocupar el centro de tu vida y puedas relacionarte con ella sin miedo ni culpa.'],
    ['¿Trabajáis con médicos y nutricionistas?','Sí. Si hay pérdida de peso importante, vómitos, mareos o desmayos, hace falta una valoración médica, y a menudo conviene trabajar junto a nutrición. Nos coordinamos con ellos cuando hace falta.'],
    ['¿La terapia online funciona para los problemas de alimentación?','Puede funcionar bien, sobre todo con atracones o hambre emocional. Si hay riesgo físico, valoramos contigo si conviene combinarla con seguimiento presencial y médico.']
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
    'Además, vivimos rodeados de mensajes sobre cuerpos ideales, dietas y autocontrol. <strong>Los estudios de sociología</strong> señalan cuánto pesan las redes sociales y los juicios sobre el peso, sobre todo en <a href="motivo.html?m=infancia">adolescentes</a> y mujeres jóvenes, y cada vez más en hombres jóvenes, con la presión por tener un cuerpo musculado.'
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
  alt:'Amigos compartiendo un desayuno en una mesa, vista desde arriba'
},
{
  slug:'pareja', name:'Terapia de pareja', sym:'Mi pareja y yo no paramos de discutir',
  h1:'Terapia de pareja',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Terapia de pareja en Madrid y online · Symploké',
  seoDesc:'Discusiones, celos, infidelidad o distancia: terapia de pareja para aprender a hablar sin haceros daño. También si vienes solo. En Madrid u online.',
  pagina:'pareja.html',   /* página fija; motivo.html?m=pareja lleva a ella */
  enfoqueDe:'de la pareja',
  reco:'¿Te reconoces? No tienes por qué pasarlo solo.',
  subs:['Discusiones constantes','Problemas de comunicación','Crisis de pareja','Celos','Infidelidad','Dependencia emocional','Apego','Narcisismo en la pareja',['Falta de deseo en la pareja','sexual'],'La pareja tras tener hijos','Rupturas, separaciones y divorcios'],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo conviene ir a terapia de pareja?','Cuando las discusiones se repiten sin salida, atravesáis una crisis, cuesta hablar sin haceros daño o sentís que os habéis distanciado. No hace falta esperar a estar al borde de la ruptura: cuanto antes, más margen hay.'],
    ['¿Puedo ir a terapia de pareja sin mi pareja?','Sí. A veces solo una de las dos personas quiere empezar, y trabajar tu parte de la relación ya puede cambiar cosas.'],
    ['¿Sirve si estamos pensando en separarnos?','Sí. Puede ayudaros a tomar la decisión con calma y, si os separáis, a hacerlo con menos daño, sobre todo si hay hijos.'],
    ['¿Y si hay violencia en la pareja?','Cuando hay violencia, la terapia de pareja no es el recurso adecuado. Si la sufres, puedes llamar al <strong>016</strong>, gratuito y confidencial, y en una urgencia, al <strong>112</strong>.'],
    ['¿Se puede hacer terapia de pareja online?','Sí, por videollamada, incluso si cada uno se conecta desde un sitio distinto.']
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
    'Una relación no es la suma de dos personas: es un entramado de hábitos, rutinas, <a href="motivo.html?m=sexual">deseos</a> y expectativas.',
    'También acompañamos la <strong>dependencia emocional</strong> y las <a href="motivo.html?m=duelo">rupturas, separaciones o divorcios</a>, con o sin hijos de por medio.',
    'Cada pareja es distinta: en cada una se cruzan historias, familias, esferas vitales y contextos diferentes. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que, en una discusión intensa, el cuerpo entra en <a href="ansiedad.html">alerta</a>: el corazón se acelera y cuesta escuchar y pensar con claridad. Por eso, a veces, lo mejor es parar, calmarse y retomar la conversación después.',
    '<strong>Los estudios de psicología</strong>, sobre todo los del equipo de John Gottman, muestran que hay cuatro formas de discutir que más dañan una relación y que conviene saber detectar: la <strong>crítica</strong>, el <strong>desprecio</strong>, la <strong>actitud defensiva</strong> y la <strong>evasión</strong>, es decir, cerrarse y dejar de responder. De todas, el desprecio —o sentirse despreciado— es la que más pesa: es uno de los mejores predictores de ruptura.',
    'Quejarse no es lo mismo que criticar: la queja habla de algo concreto («me molesta que llegues tarde sin avisar»); la crítica ataca a la persona («eres un egoísta»).',
    '<strong>Los estudios de sociología</strong> señalan el peso del trabajo, la <a href="motivo.html?m=infancia">crianza</a>, el dinero o las familias de origen en la vida en pareja: muchos conflictos —celos, infidelidades, reparto de tareas— tienen que ver con lo que pasa alrededor.'
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
  alt:'Pareja riendo junta sentada junto a un coche'
},
{
  slug:'tdah', name:'TDAH y atención', sym:'No me puedo concentrar en nada',
  h1:'Terapia para el TDAH y los problemas de atención',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoDesc:'¿Te cuesta concentrarte, se te olvida todo o te preocupa tu hijo? Te ayudamos con el TDAH mirando a la persona, no solo la etiqueta. En Madrid u online.',
  pagina:'tdah.html',   /* página fija; motivo.html?m=tdah lleva a ella */
  enfoqueDe:'del TDAH',
  subs:['TDAH en adultos',['TDAH en niños y adolescentes','infancia'],'Falta de concentración','Procrastinación','Impulsividad','Inquietud','Hiperactividad','Desorganización','Olvidos y despistes','Dificultades en los estudios',['Uso excesivo del móvil y las pantallas','adicciones']],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cómo saber si tengo TDAH?','Despistarse o aplazar tareas de vez en cuando es normal. Se habla de TDAH cuando las dificultades de atención, inquietud o impulsividad vienen de la infancia, se mantienen y afectan a los estudios, al trabajo o a las relaciones. Un cuestionario en internet no basta: hace falta una valoración profesional.'],
    ['¿Existe el TDAH en adultos?','Sí. A veces se descubre después de que diagnostiquen a un hijo. En los adultos se nota más en la desorganización, los olvidos, la procrastinación o la inquietud interna que en la hiperactividad.'],
    ['¿Atendéis a niños y adolescentes?','Sí, con el consentimiento de la familia. Trabajamos también con madres y padres y, cuando hace falta, nos coordinamos con el colegio.'],
    ['¿Hace falta medicación para el TDAH?','En terapia psicológica no se recetan fármacos. En algunos casos la medicación ayuda, y esa valoración corresponde a psiquiatría o neurología. Si la tomas o se está valorando, nos coordinamos con quien la lleve.'],
    ['¿La terapia online funciona para el TDAH?','En adultos funciona bien y ayuda a mantener la constancia. Con niños pequeños solemos preferir la consulta presencial y el trabajo con la familia.']
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
    'Prestar atención es algo que se aprende, y la vida actual no lo pone fácil. <strong>Los estudios de psicología</strong> muestran que poder esperar, concentrarse y aceptar el aburrimiento no vienen de serie: se aprenden si hay ocasiones para practicarlos. A veces la ayuda pasa también por orientar a <a href="motivo.html?m=infancia">la familia</a> y al colegio.',
    '<strong>Los estudios de sociología</strong> señalan que vivimos a un ritmo acelerado, impulsivo y pendiente de muchas cosas a la vez, con <a href="motivo.html?m=adicciones">pantallas</a> que reclaman la atención a cada momento y niños acostumbrados a tenerlo todo al instante. Esa forma de vida choca con lo que piden la escuela o el trabajo.'
  ],
  together:'En los adultos también pasa, aunque a menudo se identifica tarde: muchos se reconocen en esto después de toda una vida sin ponerle nombre. Viven a otro ritmo: piensan deprisa, el cuerpo les pide moverse y no encajan en el compás de los demás. La idea no es cambiar quién eres, sino trabajar para que esos ritmos encajen mejor con tu vida y con lo que te pide tu día a día. Lo trabajamos contigo, paso a paso.',
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
  alt:'Mujer estudiando con un portátil y apuntes en una habitación luminosa'
},
{
  slug:'adicciones', name:'Adicciones', sym:'Estoy enganchado y no puedo dejarlo', delicate:true,
  h1:'Terapia para las adicciones',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoDesc:'¿Bebes más de lo que quieres o no puedes dejar de apostar o de mirar el móvil? Terapia para las adicciones, sin sermones y a tu ritmo. En Madrid u online.',
  pagina:'adicciones.html',   /* página fija; motivo.html?m=adicciones lleva a ella */
  enfoqueDe:'de las adicciones',
  subs:['Alcohol','Juego y apuestas online','Adicción al móvil','Redes sociales','Videojuegos','Cannabis','Cocaína','Pornografía','Compras compulsivas',['Dependencia de pastillas para dormir','insomnio'],['Dependencia emocional','pareja'],'Recaídas','Familiares de personas con adicción'],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo es una adicción y no solo un hábito?','Cuando lo haces aunque te esté haciendo daño, cada vez necesitas más, te cuesta parar aunque quieras o va ocupando el lugar de otras cosas importantes. No hace falta tocar fondo para pedir ayuda.'],
    ['¿Tratáis la adicción al móvil, a las redes o al juego?','Sí. Además del alcohol y otras sustancias, trabajamos las adicciones sin sustancia: juego y apuestas online, móvil, redes sociales, videojuegos o pornografía.'],
    ['¿Se puede dejar una adicción?','Sí, aunque suele llevar tiempo. Si hay caídas —lo que mucha gente llama recaídas—, también se trabajan. No prometemos plazos, pero sí acompañarte para entender qué papel cumple en tu vida y construir alternativas.'],
    ['¿Puedo dejar el alcohol de golpe?','Si bebes a diario o en cantidad, no conviene dejarlo de golpe sin valoración médica, porque la abstinencia puede ser peligrosa. Nos coordinamos con medicina y con los servicios especializados.'],
    ['¿Qué hago si mi familiar no quiere pedir ayuda?','Puedes venir tú. Trabajar con la familia ayuda a cuidarse, a no alimentar el problema sin querer y a facilitar que la persona dé el paso.']
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
    '<strong>Los estudios de biología</strong> muestran que algunas sustancias, como el alcohol o ciertas <a href="insomnio.html">pastillas para dormir</a>, crean dependencia física: el cuerpo se acostumbra y, cuando faltan, protesta. Es lo que se conoce como <strong>síndrome de abstinencia</strong>, así que a veces hace falta acompañamiento médico. Otras, como el cannabis o la cocaína, enganchan sobre todo por lo que alivian o prometen.',
    '<strong>Los estudios de neurología</strong> muestran que el consumo, el juego, las compras compulsivas o las pantallas activan los sistemas de recompensa del cerebro. Pero explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, en qué momentos aparece y qué lo mantiene.',
    'Ya lo escribió Ovidio hace dos mil años: «veo lo mejor y lo apruebo, pero sigo lo peor». Saber lo que nos conviene no basta. Las adicciones están muy relacionadas con la <a href="ansiedad.html"><strong>ansiedad</strong></a>: muchas veces caemos en ellas buscando justo eso, y funciona a corto plazo, pero a la larga lo empeora. <strong>Los estudios de psicología</strong> muestran que el autocontrol no consiste en apretar los dientes, sino en cambiar las situaciones que nos empujan a consumir y que alimentan esos círculos viciosos: se trata, como planteaba Skinner, de aprender a «controlar las condiciones que nos controlan». Eso se aprende, y lo trabajamos contigo.',
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
  alt:'Corredor sonriente con su medalla al terminar una carrera'
},
{
  slug:'autoestima', name:'Autoestima', sym:'No soy suficiente',
  h1:'Terapia para fortalecer la autoestima',   /* encabezado a todo el ancho, en una línea */
  revisada:true,   /* sin la marca «borrador» */
  seoTitle:'Terapia para la autoestima en Madrid y online · Symploké',
  seoDesc:'Inseguridad, perfeccionismo, miedo al rechazo o síndrome del impostor: terapia para tratarte de otra manera. En Madrid u online.',
  pagina:'autoestima.html',   /* página fija; motivo.html?m=autoestima lleva a ella */
  enfoqueDe:'de la autoestima',
  subs:['Baja autoestima','Inseguridad','Perfeccionismo','Autoexigencia','Síndrome del impostor','Miedo al rechazo','Necesidad de aprobación','Compararse con los demás','Autocrítica','Aprender a decir que no',['Dependencia emocional','pareja'],['Imagen corporal','alimentacion']],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cómo saber si tengo baja autoestima?','Si te comparas sin parar, te cuesta aceptar un halago, te exiges como si nada fuera suficiente o dependes de lo que opinen los demás para sentirte bien, es probable que la forma en que te valoras te esté haciendo sufrir.'],
    ['¿Se puede mejorar la autoestima?','Sí. Suele cambiar cuando cambia la manera de tratarte, de relacionarte y de actuar en lo que te importa. No prometemos plazos, pero sí trabajar contigo.'],
    ['¿El perfeccionismo es un problema de autoestima?','A menudo van juntos: cuando el valor propio depende de hacerlo todo bien, cualquier fallo se vive como un fracaso personal. Aprender a exigirse sin maltratarse ayuda también a la estima.'],
    ['¿Qué es el síndrome del impostor?','Es la sensación de no merecer lo que has logrado y el miedo a que los demás “descubran” que no vales tanto. Es frecuente en personas exigentes y suele aliviarse cuando el propio valor deja de medirse solo por los logros.'],
    ['¿La terapia online funciona para la autoestima?','Sí. La terapia online logra resultados comparables a la presencial, y a muchas personas les resulta más fácil empezar desde casa.']
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
    '<strong>Los estudios de biología</strong> muestran que el cuerpo también participa: el cansancio, el mal sueño o el estrés mantenido tiñen cómo nos vemos. La estima se siente dentro, pero gran parte de sus piezas vienen de fuera.',
    'La idea de autoestima, tal como la usamos hoy, es reciente. <strong>La historia de la psicología</strong> la remonta a William James, a finales del siglo XIX, y su gran difusión llega en la segunda mitad del XX, con la promesa de que bastaba con quererse más para estar bien. Una estima que cada uno fabrica a solas tiene más de creencia de época que de hallazgo científico.',
    '<strong>Los estudios de psicología</strong> encuentran que la estima alta se asocia a sentirse mejor, pero no causa por sí sola mejores resultados en los estudios, el trabajo o las relaciones. Y repetirse frases positivas, a quien se valora poco, puede hacerle sentir peor. Lo que más la mueve es lo que hacemos: cumplir con lo que nos importa, poner límites, atrevernos con lo que evitamos aunque nos gane la inseguridad o la autocrítica. En terapia lo vemos a menudo: la estima se construye haciendo; llega después de actuar, no antes.',
    '<strong>Los estudios de sociología</strong> señalan cómo pesan la comparación constante, la imagen corporal, las redes sociales o una cultura que pide valerse por uno mismo y rendir sin descanso. Nadie se estima en el vacío: cómo nos valoramos depende también de dónde y con quién vivimos.'
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
  alt:'Mujer sonriendo junto a una ventana mientras habla por teléfono'
},
{
  slug:'duelo', name:'Duelo', sym:'No consigo superar su muerte',
  h1:'Terapia de duelo',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Terapia de duelo en Madrid y online · Symploké',
  seoDesc:'Psicólogo para el duelo: muerte de un ser querido, de una mascota, duelo perinatal o por una ruptura. Te acompañamos en el proceso. En Madrid u online.',
  pagina:'duelo.html',   /* página fija; motivo.html?m=duelo lleva a ella */
  enfoqueDe:'del duelo',
  subs:['Muerte de un ser querido','Muerte de un padre o una madre','Duelo perinatal','Duelo por suicidio','Duelo complicado o prolongado','Duelo anticipado por una enfermedad grave','Duelo por una mascota',['Duelo por una ruptura','pareja'],'Pérdida del trabajo',['Duelo en niños','infancia'],['Depresión tras una pérdida','depresion']],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo conviene ir al psicólogo por un duelo?','El duelo no es una enfermedad y no siempre necesita terapia. Conviene pedir ayuda cuando, pasados muchos meses, sigues sin poder retomar tu día a día, sientes que te has quedado atascado o te cuesta sostenerlo con tu entorno.'],
    ['¿Cómo superar la muerte de un padre o una madre?','Más que superarla, se trata de aprender a vivir con su ausencia. No conseguir superar la muerte de tu madre o echar de menos a tu padre cada día es frecuente, sobre todo los primeros meses. Ayuda poder hablar de ello, mantener algún ritual que te una a esa persona y pedir acompañamiento si el dolor no te deja vivir.'],
    ['¿Cuánto dura un duelo?','No hay un plazo fijo. Los manuales clínicos hablan de duelo prolongado cuando, pasados entre seis y doce meses según el manual, el dolor sigue siendo tan intenso que lo ocupa todo.'],
    ['¿Es normal sentir culpa tras una muerte?','Sí. Lo que no se dijo o no se hizo suele volver una y otra vez. Hablarlo ayuda a que la culpa no ocupe el lugar del recuerdo.'],
    ['¿Es normal pensar todo el tiempo en la persona que ha muerto?','Sí, sobre todo al principio. Pensar en quien se ha ido, soñar con esa persona o sentir su presencia forma parte del duelo. Preocupa más cuando la vida se detiene por completo durante mucho tiempo.'],
    ['¿Atendéis el duelo por una mascota o por una ruptura?','Sí. También duele perder a un animal, una relación, un trabajo o una etapa de la vida, y ese dolor merece un espacio.'],
    ['¿Ayudáis a niños en duelo?','Sí, con la familia. Los niños viven el duelo a su manera, y a menudo ayuda acompañar a los adultos para que sepan cómo hablarles.']
  ],
  k:'duelo perdida muerte fallecimiento no consigo superar la muerte de mi madre padre ser querido mascota perro echo de menos como superar un duelo separacion',
  feel:['Nunca me dejará de doler','Me arrepiento de aquello que hice o no hice','¿Cómo voy a vivir sin él o sin ella?','Nunca conoceré a nadie como él o como ella'],   /* 2026-11-08; antes: «No consigo superar la muerte de mi madre», «Echo de menos a mi padre cada día», «No consigo superar la muerte de mi perro», «Siento que todo el mundo ha seguido menos yo» */
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta, a partir de ideas de Bueno (la muerte llega cuando la persona está implicada en planes que no la contemplan,
     Diccionario de García Sierra, entrada 502), Pérez Jara («Meditatio mortis», 2016: «ya nunca más…») y Pérez Álvarez (2007: las pérdidas como inicio de la depresión) */
  quotes:[
    'Atender a tiempo una pérdida —hablarla, compartirla, pedir ayuda si hace falta— ayuda a que el duelo no se complique',   /* tras biología */
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
    '<strong>Los estudios de biología</strong> muestran que el duelo también se vive en el cuerpo: cansancio, cambios en el sueño y en el apetito, una tristeza que pesa físicamente. Es normal, y suele ir cediendo con el tiempo. '+V,
    '<strong>Los estudios de neurología</strong> muestran que al cerebro le cuesta asumir una ausencia: por eso, a veces, esperamos oír su voz o que entre por la puerta. Hacerse a la pérdida también es un aprendizaje.',
    '<strong>Los estudios de psicología</strong> muestran que la mayoría de los duelos siguen su curso, pero que las pérdidas —una muerte, una ruptura, un despido— pueden ser el inicio de un dolor difícil de soportar. No se trata de «superar» a nadie ni de pasar por unas fases en orden, sino de ir encontrando un sitio para la pérdida en una vida que sigue. '+V,
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
  alt:'Familia corriendo por un prado en un parque'
},
{
  slug:'infancia', name:'Infancia y adolescencia', sym:'Mi hijo adolescente no quiere hacer nada',
  h1:'Terapia para niños y adolescentes',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Psicólogo infantil y de adolescentes en Madrid · Symploké',
  seoDesc:'¿Tu hijo no habla, no quiere ir al colegio o tiene rabietas que no ceden? Psicólogo infantil y para adolescentes, con la familia. En Madrid u online.',
  pagina:'infancia.html',   /* página fija; motivo.html?m=infancia lleva a ella */
  enfoqueDe:'de la infancia y la adolescencia',
  subs:['Rabietas y problemas de conducta','Comunicación con adolescentes',['Ansiedad y miedos infantiles','ansiedad'],'Tristeza o aislamiento','Acoso escolar (bullying)','Bajo rendimiento escolar',['TDAH en niños','tdah'],['Uso excesivo de pantallas','adicciones'],['Problemas con la comida','alimentacion'],['Problemas de sueño','insomnio'],'Separación de los padres',['Duelo en niños','duelo'],'Orientación a familias'],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo llevar a mi hijo al psicólogo?','Cuando notáis cambios que duran semanas: tristeza, aislamiento, miedos, rabietas que no ceden o problemas en el colegio, con la comida o con el sueño. Si dudáis, una primera cita con la familia ayuda a valorarlo.'],
    ['¿Cómo es la primera cita?','La primera cita es con la madre, el padre o los tutores, sin el menor. Nos contáis qué pasa y decidimos juntos cómo seguir.'],
    ['¿Hace falta el consentimiento de los dos progenitores?','En general se pide por escrito el consentimiento de quienes tienen la patria potestad. Si hay separación o desacuerdo, lo vemos en la primera cita.'],
    ['¿Trabajáis también con los padres?','Sí. Trabajamos con madres, padres o tutores y, si hace falta, nos coordinamos con el colegio.'],
    ['¿Y si mi hijo adolescente no quiere venir?','Ayuda que quiera, pero al principio no siempre es así. Podemos empezar con la familia y buscar juntos cómo plantearle la primera cita.']
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
    '<strong>Los estudios de psicología</strong> muestran que proteger a los chicos de todo no hace desaparecer los problemas: tarde o temprano se encuentran con el mundo real, y conviene que lleguen preparados. Hoy les pedimos que sean brillantes en todo y, a la vez, les ahorramos cualquier dificultad: mucha exigencia y poca tolerancia a la frustración. Trabajamos con ellos un equilibrio entre esforzarse y aguantar los tropiezos.',
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
  alt:'Grupo de jóvenes riendo juntos en un taller'
},
{
  slug:'personalidad', name:'Trastornos de la personalidad', sym:'No me entiendo ni yo', delicate:true,
  h1:'Terapia para los trastornos de la personalidad',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Terapia para el TLP y la personalidad en Madrid · Symploké',
  seoDesc:'Emociones muy intensas, miedo al abandono, relaciones inestables o vacío: terapia para el TLP y los trastornos de la personalidad. En Madrid u online.',
  pagina:'personalidad.html',   /* página fija; motivo.html?m=personalidad lleva a ella */
  enfoqueDe:'de la personalidad',
  subs:['Trastorno límite de la personalidad (TLP)','Inestabilidad emocional','Miedo al abandono','Relaciones intensas e inestables','Impulsividad','Ira y explosiones emocionales',['Sensación de vacío','depresion'],'Rasgos obsesivos o perfeccionistas','Personalidad evitativa','Personalidad dependiente','Rasgos narcisistas'],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Qué es un trastorno de la personalidad?','Es el nombre que se da a formas de sentir, pensar y relacionarse muy estables que hacen sufrir a la persona o a quienes la rodean, y que se repiten en distintos ámbitos. Desde 2022, la clasificación de la OMS (CIE-11) los describe por grados de gravedad más que por tipos cerrados.'],
    ['¿Qué es el trastorno límite de la personalidad (TLP)?','Se caracteriza por emociones muy intensas y cambiantes, miedo al abandono, relaciones inestables, impulsividad y, a veces, sensación de vacío o autolesiones. Hay tratamientos psicológicos específicos que ayudan, como la terapia dialéctico-conductual.'],
    ['¿La personalidad se puede cambiar?','Los rasgos de fondo cambian despacio, pero la manera de manejar las emociones y de relacionarse sí puede cambiar mucho con terapia. No prometemos plazos: suele ser un proceso largo.'],
    ['¿Qué hago si hay autolesiones o ideas de suicidio?','Pide ayuda cuanto antes: llama al <strong>024</strong> si tienes pensamientos de suicidio y al <strong>112</strong> en una urgencia.'],
    ['¿Puede participar mi familia?','Sí. A menudo ayuda que la familia o la pareja entienda qué pasa y aprenda a acompañar sin desgastarse.']
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
    'Usamos «trastorno de la personalidad» porque es como se busca y se diagnostica, aunque preferimos hablar de formas de ser muy marcadas —inestables, evitativas, dependientes, perfeccionistas o muy centradas en uno mismo— que hacen sufrir. Un síntoma no flota en el aire: es de alguien, con su historia y su forma de ser, y solo se entiende desde esa persona.',
    'Nos vamos haciendo con los demás y con lo que vivimos. Por eso también se puede trabajar.',
    {voz:'Nadie nace siendo la persona que es hoy'},   /* frase verde dentro de la entrada */
    'Cada persona es distinta: en cada una se cruzan el cuerpo, su historia, sus relaciones y el entorno. Por eso nuestro enfoque es <strong>pluralista</strong>.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que nacemos con un temperamento —más o menos sensibles, intensos o activos—, pero el temperamento todavía no es una forma de ser: esa se construye a lo largo de la vida.',
    '<strong>Los estudios de neurología</strong> muestran que el cerebro cambia con la experiencia y con las relaciones durante toda la vida: lo que somos no queda fijado de una vez para siempre.',
    '<strong>Los estudios de psicología</strong> muestran que muchas formas de sufrir son maneras de relacionarse con los demás que hemos aprendido en nuestro entorno, más que «defectos de fábrica». Las relaciones que se repiten y nos hacen daño suelen ser estrategias aprendidas para protegernos. Y lo aprendido se puede revisar y cambiar. En el trastorno límite (TLP), por ejemplo, aprender a regular la ira o el miedo al abandono cambia mucho el día a día.',
    '<strong>Los estudios de sociología</strong> señalan que vivimos rodeados de estímulos, cambios y exigencias que nos llenan de cosas y, a la vez, pueden dejarnos una sensación de vacío. Si te reconoces en esa sensación, trabajamos para que ganes <strong>consistencia</strong>: saber quién eres y qué quieres sostener en tu vida.'
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
  alt:'Hombre sonriente cargando plantas en una tienda'
},
{
  slug:'sexual', name:'Problemas sexuales', sym:'No tengo deseo sexual',
  h1:'Terapia para los problemas sexuales',   /* encabezado a todo el ancho, en una línea */
  seoTitle:'Terapia sexual en Madrid y online · Symploké',
  seoDesc:'Psicólogo para problemas sexuales: falta de deseo, disfunción eréctil, eyaculación precoz, anorgasmia o dolor. Solo o en pareja. En Madrid u online.',
  pagina:'sexual.html',   /* página fija; motivo.html?m=sexual lleva a ella */
  enfoqueDe:'de la sexualidad',
  subs:['Falta de deseo sexual','Disfunción eréctil','Eyaculación precoz','Anorgasmia','Dolor en las relaciones sexuales','Vaginismo',['Ansiedad ante el sexo','ansiedad'],['Diferencias de deseo en la pareja','pareja'],['Adicción al sexo o a la pornografía','adicciones'],'Sexualidad tras el parto','Sexualidad en la menopausia'],
  /* preguntas frecuentes (2026-11-08) */
  faq:[
    ['¿Cuándo conviene ir a terapia sexual?','Cuando algo de tu vida sexual —el deseo, la excitación, el dolor o el orgasmo— te preocupa o afecta a tu pareja y se mantiene en el tiempo. No hace falta esperar a que sea grave.'],
    ['¿Por qué no tengo deseo sexual?','Las causas suelen ser varias a la vez: el cansancio, el estrés, la relación de pareja, algunos medicamentos, cambios hormonales o experiencias pasadas. Por eso miramos el cuerpo, la relación y el momento vital.'],
    ['¿Hace falta ir antes al médico?','En problemas como la disfunción eréctil o el dolor en las relaciones conviene descartar una causa física. Nos coordinamos con medicina, urología o ginecología cuando hace falta.'],
    ['¿Puedo ir solo o con mi pareja?','Las dos cosas. Puedes venir solo o sola, o en pareja si el problema es de los dos.'],
    ['¿Se puede hacer terapia sexual online?','Sí. A muchas personas les resulta más fácil hablar de sexualidad desde casa, y la terapia online logra resultados comparables a la presencial.']
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
    '<strong>Los estudios de neurología</strong> muestran que el estrés y la ansiedad frenan la respuesta sexual: cuando el cuerpo está en alerta, el deseo se apaga. De ahí que la presión por «rendir» suela empeorar las cosas.',
    '<strong>Los estudios de psicología</strong> muestran que poder hablar de sexo con comodidad se asocia a una vida sexual más satisfactoria y a vínculos más fuertes.',
    '<strong>Los estudios de sociología</strong> señalan el peso de los modelos de sexualidad que vemos en los medios y en la pornografía, que crean expectativas poco realistas, y de la vergüenza que todavía rodea al sexo.'
  ],
  together:'Hablar de lo que nos pasa en la intimidad, y las nuevas formas de encontrarnos que surgen de ello, ayuda a construir una base de amistad y de conexión emocional. Podemos trabajarlo tanto si vienes solo o sola como si venís en pareja.',
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
  alt:'Pareja riendo relajada en un sofá'
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
