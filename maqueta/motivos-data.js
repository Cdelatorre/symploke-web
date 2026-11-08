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
var V='<span class="verify">[VERIFICAR]</span>';
function v(t){return '<span class="verify">[VERIFICAR '+t+']</span>';}

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
    'Ante una amenaza, el cuerpo se prepara para huir o defenderse: se acelera el corazón, cambia la respiración, se tensan los músculos. Por eso la ansiedad puede notarse como presión en el pecho, sensación de ahogo, mareo o nudo en el estómago, y si se mantiene, insomnio o irritabilidad. <strong>Los estudios de biología y neurología</strong> muestran que ese aviso llega muy deprisa, antes de que lo pensemos; de ahí que a veces aparezca «sin saber por qué». Es lo que se vive en un ataque de ansiedad o de pánico. Pero sería <strong>reduccionista</strong> instalarse ahí: no es el cerebro el que se angustia por su cuenta, sino la persona entera en unas situaciones concretas.',
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
  feel:['No tengo ganas de levantarme de la cama','No veo futuro posible','No tengo ganas de vivir'],
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
    'El ánimo bajo no está solo en la cabeza. Hoy sabemos, <strong>por los estudios de biología</strong>, que la depresión afecta al sueño, al apetito, al cansancio y al cuerpo entero. También influyen el estrés mantenido, la falta de luz y de movimiento o algunas enfermedades, así que a veces conviene una revisión médica.',
    'No se ha demostrado que un desequilibrio químico sea su causa: como mucho, es un componente más. La explicación de «me falta serotonina» es una simplificación que <strong>los estudios de neurología</strong> no sostienen tal cual; el ánimo va ligado a nuestra vida y es mucho más complejo. Lo que sí muestran es que se apagan los sistemas que nos hacen anticipar lo bueno y movernos hacia ello, y eso ayuda a entender la falta de ganas.',
    'Cuando el ánimo baja, hacemos menos; al hacer menos, hay menos cosas que nos llenen, y el ánimo baja más. <strong>Los estudios de psicología</strong> muestran que esperar a tener ganas para moverse suele alargar el círculo. Así, la terapia busca que actúes de acuerdo con tus objetivos y con lo que te interesa, en vez de según cómo te encuentres ese día. No se trata de hacer por hacer ni de rellenar el tiempo por estar ocupado, sino de hacer cosas que tengan sentido para ti, con pequeños avances.',
    'Las pérdidas, la soledad no deseada, el paro o la precariedad aumentan el riesgo de depresión, como han documentado <strong>los estudios de sociología</strong>. No es debilidad de nadie: el malestar también habla de cómo vivimos. Hay etapas especialmente desgastantes —un posparto, un duelo, los intensos ritmos de vida, el cansancio acumulado— tras las que el ánimo puede venirse abajo.'
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
  k:'insomnio sueno me agobia no poder dormirme me paso la noche dando vueltas me paso el dia agotado agotada no puedo dormir duermo mal me despierto por la noche madrugada me cuesta dormir mi cabeza no deja de pensar higiene del sueno cansancio',
  feel:['Me agobia no poder dormirme','Me paso la noche dando vueltas','Me paso el día agotado'],
  /* citas: Núria Roure, psicóloga del sueño, en entrevista (titular de Moncloa.com, 11/12/2025, canal «Mentes Indomables»);
     Cervantes, citado en Pérez Álvarez (2005) «Psicología del Quijote», pág. 4 del PDF;
     Pérez Álvarez y Fernández Hermida (1984) «Cómo llegar a ser un mejor terapeuta» (ver citas-para-la-web.md) */
  quotes:[
    'Dormir no es lo mismo que descansar. Necesitamos llegar a ese sueño profundo',
    'Del poco dormir y del mucho leer, se le secó el celebro de manera que vino a perder el juicio',
    'El circuito de preocupación por no dormir —no dormir— más preocupación por no dormir […] que caracteriza al insomne'
  ],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:[
    'Dormir bien no es un lujo. El sueño es descanso, y del descanso dependen la atención, la memoria, el humor y, en general, cómo nos desenvolvemos en la vida. Por eso el insomnio importa tanto: muchas veces está en el centro de otros problemas psicológicos, como la ansiedad o la depresión, y los agrava.',
    'Una de sus características es el <strong>círculo de preocupación por no dormir</strong>: nos obsesionamos con no poder dormir, esa preocupación nos quita el sueño, y no dormir aumenta la preocupación.',
    'Como casi todo lo que nos pasa, el insomnio es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el sueño depende de dos relojes: uno es el ritmo circadiano, que marca la luz del día, y el otro la presión de sueño, que se acumula mientras estamos despiertos. Las pantallas por la noche, la cafeína o los horarios cambiantes los desajustan. Además, no basta con dormir: para descansar hay que llegar al sueño profundo, y durante la fase REM se producen muchos procesos que nos ayudan a reestructurar y organizar la información cognitiva y emocional. '+V,
    'Para dormirse, el cerebro tiene que bajar la guardia. <strong>Los estudios de neurología</strong> muestran que en el insomnio suele quedarse en estado de alerta: el cuerpo cansado y la mente despierta. Por eso no basta con estar agotado. '+V,
    'El sueño no se puede forzar: cuanto más se intenta, más se aleja. La cama acaba asociada a dar vueltas, y la preocupación por no dormir se convierte en el problema. <strong>Los estudios de psicología</strong> muestran que la terapia cognitivo-conductual para el insomnio es el tratamiento de primera elección. Parte de ella es la <strong>higiene del sueño</strong>: horarios regulares, luz natural por la mañana, menos pantallas y cafeína por la tarde, la cama solo para dormir y levantarse si el sueño no llega. Son estrategias sencillas que ayudan a recuperar el descanso, aunque por sí solas a veces se quedan cortas. '+V,
    'Dormir mal también tiene que ver con cómo está organizado el día. <strong>Los estudios de sociología</strong> señalan que los turnos, las jornadas largas y nuestros horarios, con cenas y pantallas hasta tarde, recortan el sueño de mucha gente. '+V
  ],
  together:'El insomnio suele mantenerse por la propia anticipación («¿y si esta noche tampoco?») y por cómo vamos reorganizando el día entero alrededor de la noche. Lo pensamos junto con lo que pasa de día —el trabajo, las preocupaciones, los hábitos— y entretejemos lo que sabemos del cuerpo y de la psicología para romper el círculo y encontrar lo que te funcione a ti: qué hábitos ajustar, qué dejar de forzar y cómo volver a confiar en el sueño.',
  refs:'Pérez Álvarez y Fernández Hermida (1984), «Cómo llegar a ser un mejor terapeuta»; Pérez Álvarez (2005), «Psicología del Quijote»; Núria Roure, entrevista en Moncloa.com (2025). '+v('referencias completas'),
  cta:'Trabajamos contigo para que la noche deje de ser una pelea.',
  intro:'El insomnio es la dificultad para conciliar el sueño, mantenerlo o que sea reparador, cuando se repite y se nota al día siguiente.',
  how:'Lo abordamos desde un enfoque multidimensional, sobre todo con terapia cognitivo-conductual para el insomnio, terapia de aceptación y compromiso (ACT) y otras terapias contextuales: ajustar horarios y hábitos, y dejar de pelear por dormir.',
  science:'La terapia cognitivo-conductual para el insomnio es el tratamiento psicológico de primera elección en las guías clínicas. Incluye la higiene del sueño, pero no se reduce a ella. '+V,
  beyond:'Dormir no se puede forzar: cuanto más se intenta, más se aleja. El insomnio suele mantenerse por la propia anticipación («¿y si esta noche tampoco?») y por cómo vamos reorganizando el día entero alrededor de la noche.',
  approaches:[
    ['Cognitivo-conductual para el insomnio','Ajustar horarios, cama y pensamientos que mantienen el problema.','amplia'],
    ['Contextuales y ACT','Dejar de luchar por dormir y reducir la vigilancia sobre el sueño.','preliminar'],
    ['Higiene del sueño','Hábitos de base útiles, aunque por sí solos suelen quedarse cortos.','limitada como tratamiento único']
  ],
  subs:['Higiene del sueño','Pesadillas'],
  alt:'Mujer descansando al sol de la mañana con una taza de café'
},
{
  slug:'alimentacion', name:'Problemas de alimentación', sym:'Como y después me culpo', delicate:true,
  k:'alimentacion comida comer como y despues me culpo me siento horrible conmigo como mucho y despues me castigo solo comiendo alivio la ansiedad no puedo parar de comer como por ansiedad atracones dieta peso cuerpo vomitar restriccion imagen culpa',
  feel:['Como y después me culpo','Me siento horrible conmigo','Como mucho y después me castigo','Solo comiendo alivio la ansiedad'],
  quotes:['No puedo parar de comer','Como por ansiedad'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  basesIntro:[
    'Es un problema en el que aparecen el <strong>control</strong>, la <strong>culpa</strong> y la obsesión por controlar nuestro cuerpo, hasta convertirse en el foco alrededor del cual acaba girando nuestra vida.',
    'Y ocurre algo paradójico: lo que hacemos para controlar la comida —dietas estrictas, saltarse comidas, compensar lo que se ha comido— acaba siendo parte del problema. La comida termina siendo una <strong>prisión</strong>.',
    'Como casi todo lo que nos pasa, es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    'Saltarse comidas o hacer dietas muy estrictas aumenta el hambre y hace que la comida ocupe más espacio en la cabeza. <strong>Los estudios de biología</strong> muestran que muchas veces el atracón no es falta de voluntad, sino la respuesta de un cuerpo que se ha sentido privado. '+V,
    'Comer activa los sistemas de recompensa del cerebro y calma durante un rato; <strong>los estudios de neurología</strong> lo describen bien. Por eso la comida puede convertirse en una forma rápida de aliviar la ansiedad o la tristeza: funciona en el momento y deja peor después. '+V,
    'Es frecuente un círculo: comer para calmarse, sentir culpa y <strong>compensar</strong> —hacer ejercicio de más, saltarse comidas, dejar de comer o vomitar— y volver a comer. <strong>Los estudios de psicología</strong> muestran que la culpa no frena el círculo: lo alimenta. A veces el vómito empieza como una forma de compensar y, con la repetición, se convierte en una <strong>compulsión</strong> que acaba dando placer; por eso no se frena solo con fuerza de voluntad. Entender qué función cumple la comida en tu vida ayuda a salir del círculo. '+V,
    'Además, vivimos rodeados de mensajes sobre cuerpos ideales, dietas y control. <strong>Los estudios de sociología</strong> señalan cuánto pesan las redes sociales y los juicios sobre el peso, sobre todo en adolescentes y mujeres jóvenes. '+V
  ],
  together:'La comida rara vez es solo comida: se entreteje con el control, la imagen, las emociones, la familia o las redes. Preferimos no reducirlo a una sigla. Lo pensamos juntos, con calma y sin juicios, y combinamos lo que haga falta —psicología, medicina, nutrición— para que la comida vuelva a ocupar su sitio.',
  cta:'Trabajamos contigo, con calma y sin juicios, para que la comida vuelva a ocupar su sitio.',
  intro:'Hablamos de problemas de alimentación cuando la comida, el peso o la figura ocupan tanto espacio que condicionan el día a día: restricciones, atracones, compensaciones o una preocupación constante.',
  how:'Lo abordamos desde un enfoque multidimensional, sobre todo con terapia cognitivo-conductual, terapia de aceptación y compromiso (ACT) y otras terapias contextuales: regularizar la alimentación, entender qué función cumple la comida en tu vida y relacionarte de otra manera con tu cuerpo.',
  science:'Los manuales clínicos describen varios cuadros (anorexia, bulimia, trastorno por atracón, entre otros). Pueden tener consecuencias médicas, por eso el tratamiento suele requerir coordinación con medicina y nutrición. '+V,
  beyond:'La comida rara vez es solo comida: se entreteje con el control, la imagen, la familia o las redes. Preferimos no reducirlo a una sigla y entender qué función cumple ese comportamiento en tu vida.',
  approaches:[
    ['Cognitivo-conductual','Regularizar la alimentación y trabajar las ideas sobre peso y figura.','buena en bulimia y atracones'],
    ['Terapia basada en la familia','La familia como parte activa del tratamiento, sobre todo en adolescentes.','buena en adolescentes'],
    ['Contextuales y ACT','Relacionarse de otra manera con el cuerpo y los pensamientos sobre él.','en estudio']
  ],
  coord:'Si hay pérdida de peso importante, vómitos, mareos o desmayos, hace falta valoración médica. Nos coordinamos con medicina y nutrición cuando hace falta.',
  alt:'Amigos compartiendo un desayuno en una mesa, vista desde arriba'
},
{
  slug:'pareja', name:'Terapia de pareja', sym:'Mi pareja y yo no paramos de discutir',
  k:'pareja terapia de pareja mi pareja y yo no paramos de discutir siempre discutimos no nos entendemos nos queremos pero no funciona superar una ruptura apego narcisismo narcisista dependencia emocional relacion celos infidelidad separacion divorcio',
  feel:['Mi pareja y yo no paramos de discutir','Siempre discutimos, no nos entendemos','Nos queremos, pero no funciona','No consigo superar una ruptura'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* ideas del Gottman Institute (gottman.com: «The Four Horsemen», sus antídotos y «The magic relationship ratio»), en traducción nuestra */
  quotes:[
    'Criticar a tu pareja no es lo mismo que expresar una queja',
    'El antídoto del desprecio es construir una cultura de aprecio y respeto en la relación'
  ],
  basesIntro:[
    'Los conflictos aparecen en todas las relaciones: discutir no es el problema. Lo importante es cómo se discute y si sabemos <strong>reparar</strong> después.',
    'Una relación no es la suma de dos personas: es un entramado de hábitos, familias, trabajo y expectativas.',
    'También trabajamos la <strong>dependencia emocional</strong>, cuando la relación ocupa tanto espacio que uno se pierde en ella, y los momentos de <strong>ruptura, separación o divorcio</strong>, para atravesarlos de la mejor manera posible, también cuando hay hijos.',
    'Como casi todo lo que nos pasa, los problemas de pareja son <strong>multicausales</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que, en una discusión intensa, el cuerpo entra en alerta: el corazón se acelera y cuesta escuchar y pensar con claridad. Por eso, a veces, lo mejor es parar, calmarse y retomar la conversación después. '+V,
    '<strong>Los estudios de psicología</strong>, sobre todo los del equipo de John Gottman, muestran que hay cuatro formas de discutir que más dañan una relación y que conviene saber detectar: la <strong>crítica</strong> que ataca a la persona, el <strong>desprecio</strong>, la <strong>actitud defensiva</strong> y la <strong>evasión</strong>, es decir, cerrarse y dejar de responder. De todas, el desprecio —o sentirse despreciado— es la que más pesa: es el mayor predictor de ruptura. Criticar a la pareja no es lo mismo que expresar una queja: una crítica constructiva habla de algo concreto que nos molesta; la que no lo es ataca a la persona. Y en las parejas que funcionan hay unos <strong>cinco momentos buenos por cada uno malo</strong>. '+V,
    '<strong>Los estudios de sociología</strong> señalan el peso del trabajo, la crianza, el dinero o las familias de origen en la vida en pareja: muchos conflictos tienen que ver con esas circunstancias, y no solo con los dos. '+V
  ],
  together:'Por eso trabajamos la <strong>comunicación</strong>: aprender a detectar esas formas de discutir, a quejarse sin atacar y a reparar los conflictos cuando aparecen. Para ello necesitamos construir una base de <strong>aprecio y respeto mutuo</strong>, que es el mejor antídoto contra el desprecio. Palabras como «narcisista» o «apego ansioso» pueden ayudar a nombrar algo, pero también pueden cerrar la conversación antes de empezarla. Lo pensamos juntos, decidáis lo que decidáis.',
  cta:'Os ayudamos a pensar juntos qué os pasa, decidáis lo que decidáis.',
  intro:'La terapia de pareja es un espacio para entender qué os está pasando y probar otras maneras de relacionaros, tanto si queréis seguir como si estáis pensando en separaros. También atendemos a una sola persona que quiere trabajar su relación.',
  science:'Hay enfoques de terapia de pareja con estudios controlados, como la terapia conductual integrativa o la centrada en las emociones. '+V,
  refs:'The Gottman Institute, «The Four Horsemen: criticism, contempt, defensiveness and stonewalling», «The Four Horsemen: the antidotes» y «The magic relationship ratio, according to science» (gottman.com). '+v('referencias completas'),
  beyond:'Una relación no es la suma de dos personas: es un entramado de hábitos, familias, trabajo y expectativas. Palabras como «narcisista» o «apego ansioso» pueden ayudar a nombrar algo, pero también pueden cerrar la conversación antes de empezarla.',
  approaches:[
    ['Conductual integrativa','Cambiar lo que se puede cambiar y aceptar lo que forma parte del otro.','buena'],
    ['Centrada en las emociones','Entender los ciclos de reproche y distancia que se repiten.','buena'],
    ['Sistémica','Mirar la pareja dentro de su familia y su contexto.','variable']
  ],
  subs:['Apego','Narcisismo (pareja o progenitor)','Dependencia emocional','Rupturas, separaciones y divorcios','Infidelidad'],
  alt:'Pareja riendo junta sentada junto a un coche'
},
{
  slug:'tdah', name:'TDAH y atención', sym:'No me puedo concentrar en nada',
  k:'tdah atencion no me puedo concentrar no consigo concentrarme me cuesta concentrarme se me olvidan las cosas estudiar como saber si tengo tdah adulto hiperactividad despiste impulsividad infancia colegio ayudar a mi hijo',
  feel:['No me puedo concentrar en nada','Me cuesta concentrarme y se me olvidan las cosas','¿Y si tengo TDAH de adulto?','No sé cómo ayudar a mi hijo con TDAH'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* citas literales de Marino Pérez Álvarez: (2014) entrevista en Infocop «Los intereses que hay detrás del diagnóstico del TDAH»;
     (2017) «The Four Causes of ADHD: Aristotle in the Classroom», pág. 11 del PDF (en inglés: la traducción es nuestra) */
  quotes:[
    'Sin negar el problema, su solución no debiera ser a costa de “enfermar” a los niños',
    {texto:'Cualquier problema relacionado con la «atención», la «actividad» y la «impulsividad» no queda fuera del aprendizaje, como aspectos del desarrollo del autocontrol. Algunos niños pueden necesitar un «entrenamiento» adicional (no un tratamiento)', grande:true},
    'Resituar el problema en su contexto que no es otro que el del aprendizaje y educación de la atención y la actividad de los niños, seguramente una tarea más difícil de lo que se pensaba, sobre todo, en el mundo de hoy'
  ],
  basesIntro:[
    'El TDAH es un problema, pero no una enfermedad. Podemos verlo como una <strong>forma de ser</strong>, con sus dificultades y también con sus cualidades. Vemos a la persona entera: sus ritmos, su curiosidad, su alta actividad y sus dificultades.',
    'Por eso preferimos hablar de <strong>problemas</strong> en vez de síntomas, y de <strong>ayudas y entrenamiento</strong> en vez de tratamiento. Los problemas de atención y de inquietud existen y hay que atenderlos. Pero a veces, con la mejor intención, los adultos convierten estas formas de ser en algo problemático, y convertir al niño en enfermo no es la única salida ni la mejor. Tratamos de ayudar sin poner etiquetas.',
    'Como casi todo lo que nos pasa, es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> no han encontrado un marcador que permita diagnosticarlo: el diagnóstico es clínico, a partir de la conducta en distintos contextos. Los estudios genéticos encuentran muchas variantes de efecto pequeño, que influyen pero no deciden por sí solas. '+V,
    '<strong>Los estudios de neurología</strong> no permiten hablar de un cerebro «típico» y otro «atípico», sino de diversidad entre personas. Por eso no tiene sentido explicarlo como una avería neuroquímica ni como una disfunción ejecutiva: el cerebro participa, como en todo lo que hacemos, pero quien aprende a atender es la persona. '+V,
    'Prestar atención es algo que se aprende, y hoy es más difícil que nunca. <strong>Los estudios de psicología</strong> muestran que poder esperar, concentrarse y aceptar el aburrimiento no vienen de serie: se aprenden si hay ocasiones para practicarlos. Y que la solución pase por aprender significa que se puede cambiar. Puede que los padres necesiten asesoramiento e incluso entrenamiento; trabajamos con el niño, la familia y el colegio para que lo consiga. '+V,
    '<strong>Los estudios de sociología</strong> señalan que vivimos a un ritmo acelerado, impulsivo y pendiente de muchas cosas a la vez, con pantallas que reclaman la atención a cada momento y niños acostumbrados a tenerlo todo al instante. Esa forma de vida choca con lo que piden la escuela o el trabajo. '+V
  ],
  together:'Muchos adultos también tienen TDAH, y resulta muy difícil diagnosticarlo. Viven a otro ritmo: piensan deprisa, el cuerpo les pide moverse y no encajan en el compás de los demás. No se trata de cambiar quién eres, sino de trabajar para que esos ritmos encajen mejor con tu vida. Con los niños, trabajamos con ellos, con la familia y con el colegio; con los adultos, contigo y con lo que te pide tu día a día. Lo pensamos juntos.',
  refs:'Pérez Álvarez (2014), «Los intereses que hay detrás del diagnóstico del TDAH» (entrevista, Infocop); (2017), «The Four Causes of ADHD: Aristotle in the Classroom»; (2018), «El TDAH es un problema, pero no una enfermedad»; Ubieto y Pérez Álvarez (2018), «Infancias hiperpautadas y al tiempo desreguladas» (entrevista, Infocop). '+v('referencias completas'),
  cta:'Podemos ayudarte a organizarte con lo que tienes, sin quedarte en la etiqueta.',
  intro:'El TDAH es el nombre que se da a dificultades persistentes de atención, inquietud o impulsividad que afectan a los estudios, al trabajo o a la vida diaria. Atendemos a adultos y, con el consentimiento de la familia, a menores.',
  science:'No hay un marcador biológico para diagnosticarlo: el diagnóstico es clínico, a partir de la conducta en distintos contextos. Hay estudios genéticos que encuentran muchas variantes de efecto pequeño. '+V,
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
  k:'adicciones alcohol beber juego apuestas casino tragaperras pantallas movil enganchado videojuegos redes no puedo dejar de beber no puedo dejar de jugar no puedo dejar el movil consumo drogas',
  feel:['No puedo dejar de beber','No puedo dejar de jugar','No puedo dejar el móvil','Me prometo que es la última vez'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta (no son citas de autor). Citas dentro del texto: Ovidio, citado por Pérez Jara en la charla «¿Existe la libertad?» (2026, ~23:00);
     «controlar las condiciones que nos controlan»: Marino Pérez Álvarez resumiendo a Skinner en el coloquio de esa charla (~1:13:00);
     el móvil como «última voluntad»: Pérez Álvarez (2015), «Reflexividad, escritura y génesis del sujeto moderno», pág. 27 del PDF */
  quotes:[
    'Una adicción te quita libertad. El objetivo de la terapia es que vuelvas a tener opciones',
    'No se trata solo de dejar la adicción, sino de llenar ese hueco con otros proyectos',
    'Las palabras, los apoyos y los proyectos son los que dan fuerza. Nosotros te ayudamos a trabajarlos'
  ],
  basesIntro:[
    'Una adicción te quita <strong>libertad</strong>: cada vez eliges menos. Por eso dejarla no es solo cuestión de fuerza de voluntad, y el objetivo de la terapia es que vuelvas a tener opciones.',
    'Para poder hacer lo que quieres, antes tienes que soltar lo que te ata. Liberarte de una adicción es lo que te deja libre para todo lo demás: tu familia, tu trabajo, tus proyectos.',
    'Como casi todo lo que nos pasa, una adicción es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que algunas sustancias, como el alcohol, crean dependencia física: el cuerpo se acostumbra y, al dejarlas, protesta. Por eso a veces hace falta acompañamiento médico. '+V,
    '<strong>Los estudios de neurología</strong> muestran que el consumo, el juego o las pantallas activan los sistemas de recompensa del cerebro. Pero explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, en qué momentos aparece y qué lo mantiene. '+V,
    'Ya lo escribió Ovidio hace dos mil años: «veo lo mejor y lo apruebo, pero sigo lo peor». Saber lo que nos conviene no basta. Las adicciones están muy relacionadas con la <strong>ansiedad</strong>: muchas veces caemos en ellas para cortar un momento de ansiedad, y funciona a corto plazo, pero alimenta el círculo. <strong>Los estudios de psicología</strong> muestran que el autocontrol no consiste en apretar los dientes, sino en cambiar las situaciones que nos empujan a consumir y que alimentan esos círculos viciosos: se trata, como planteaba Skinner, de aprender a «controlar las condiciones que nos controlan». Eso se aprende, y te enseñamos a hacerlo. '+V,
    '<strong>Los estudios de sociología</strong> señalan que las pantallas y el móvil empeoran el malestar de muchas personas, pero no son la única causa: hay que mirar también la vida que se lleva. Consultar el móvil se ha convertido en «la última voluntad antes de emprender el vuelo y lo primero que se hace una vez a salvo». Si el móvil se ha convertido en lo primero y lo último de tu día, no estás solo. Te ayudamos a que vuelva a ser una herramienta y no el centro de tu vida. '+V
  ],
  together:'El autocontrol no nace de dentro: lo construimos con el lenguaje y con los demás, que nos dan una identidad y un futuro por el que merece la pena esforzarse. Nadie sale solo de una adicción. Las palabras, los apoyos y los proyectos son los que dan fuerza, y te ayudamos a construirlos. Dejar el alcohol, el juego, las drogas o las pantallas es el primer paso. El segundo, y el más importante, es llenar ese hueco con una vida que merezca la pena.',
  cta:'Podemos ayudarte a dar el paso, a tu ritmo y sin sermones.',
  intro:'Hablamos de adicción cuando algo —alcohol, juego, pantallas u otras sustancias— se repite aunque te esté haciendo daño y cuesta dejarlo aunque quieras.',
  science:'Las guías combinan intervenciones psicológicas (entrevista motivacional, terapia cognitivo-conductual, manejo de contingencias) y, en las sustancias, tratamiento médico. '+V,
  refs:'Pérez Jara y Camprubí (2026), «¿Existe la libertad? Psicología y filosofía de nuestras decisiones» (charla, con coloquio de Marino Pérez Álvarez); Pérez Álvarez (2015), «Reflexividad, escritura y génesis del sujeto moderno»; (2025), «La salud mental de los adolescentes: un síntoma de la sociedad». '+v('referencias completas'),
  beyond:'Explicarlo solo por «el cerebro enganchado» deja fuera casi todo: para qué sirve ese consumo, en qué momentos aparece y qué lo mantiene. Mirarlo así no quita responsabilidad: da más sitios por donde intervenir.',
  approaches:[
    ['Entrevista motivacional','Trabajar la ambivalencia entre seguir y dejarlo.','buena'],
    ['Cognitivo-conductual y prevención de recaídas','Detectar situaciones de riesgo y ensayar alternativas.','buena'],
    ['Contextuales y ACT','Convivir con el deseo de consumir sin obedecerlo.','creciente']
  ],
  coord:'Con alcohol u otras sustancias puede hacer falta un tratamiento médico: no conviene dejarlo de golpe sin valoración. Nos coordinamos con medicina y con los servicios especializados cuando hace falta.',
  alt:'Corredor sonriente con su medalla al terminar una carrera'
},
{
  slug:'autoestima', name:'Autoestima', sym:'No soy suficiente',
  k:'autoestima no soy suficiente me comparo con los demas me cuesta decir que no no me siento bien conmigo mismo inseguridad valer confianza exigencia aprobacion',
  feel:['No soy suficiente','Me comparo mucho con los demás','Me cuesta decir que no','No me siento bien conmigo mismo'],
  basesIntro:'La palabra «autoestima» pone el foco en uno mismo, como si la estima fuera un depósito que cada uno lleva dentro y que sube o baja. Nosotros preferimos hablar de <strong>estimarse</strong>: algo que se hace, con otros y entre otros. Como casi todo lo que nos pasa, es <strong>multicausal</strong>: no hay una sola explicación, y ninguna disciplina lo explica todo por sí sola.',
  bases:[
    'La idea de autoestima, tal como la usamos hoy, es reciente. <strong>La historia de la psicología</strong> la remonta a William James, a finales del siglo XIX, y su gran difusión llega en la segunda mitad del XX, con la promesa de que bastaba con quererse más para estar bien. Una estima que cada uno fabrica a solas es más una creencia de época que un hallazgo. '+V,
    '<strong>Los estudios de psicología</strong> encuentran que la relación entre la estima y el bienestar es real, pero más modesta de lo que suele decirse, y que repetirse frases positivas sirve de poco. Lo que más la mueve es lo que hacemos: cumplir con lo que nos importa, poner límites, atrevernos con lo que evitamos. En terapia lo vemos a menudo: la estima llega después de la <strong>praxis</strong>, no antes. '+V,
    '<strong>Los estudios de sociología</strong> señalan cómo pesan la comparación constante, las redes sociales o una cultura que pide valerse por uno mismo y rendir sin descanso. Nadie se estima en el vacío: la estima depende también de dónde y con quién vivimos. '+V
  ],
  together:'Ninguna estima es solo «auto»: la aprendemos de cómo nos han mirado y nos miran. Por eso la promesa de que «no te importe lo que piensen los demás» suele frustrar. Lo que sí se puede trabajar es cómo te importa y qué haces con ello. Estimarse es, en buena parte, la capacidad de relacionarte y de influir en esa estima que te llega de los demás: elegir con quién estás, decir que no, pedir lo que necesitas, cuidar los vínculos que te sostienen. Eso se practica, y lo pensamos juntos.',
  cta:'Podemos ayudarte a tratarte de otra manera.',
  intro:'Hablamos de autoestima cuando la forma de valorarte te hace sufrir: te comparas, te exiges sin descanso o dependes de la aprobación de los demás.',
  science:'La autoestima no es un diagnóstico, sino un concepto psicológico muy estudiado. Su relación con el bienestar es real, pero más modesta de lo que suele decirse. '+V,
  refs:'Baumeister y otros (2003), revisión sobre la autoestima y el bienestar; Wood, Perunovic y Lee (2009), sobre las frases positivas. '+v('referencias completas'),
  beyond:'Ninguna estima es solo «auto»: la aprendemos de cómo nos han mirado y nos miran (heteroestima). Por eso la promesa de que «no te importe lo que piensen los demás» suele frustrar. Lo que sí se puede trabajar es cómo te importa.',
  approaches:[
    ['Cognitivo-conductual','Revisar la autocrítica y las reglas de exigencia.','moderada'],
    ['Contextuales, ACT y compasión','Tratarte de otra manera sin esperar a «quererte» primero.','creciente'],
    ['Interpersonal','Trabajar los límites y la dependencia de la aprobación.','variable']
  ],
  alt:'Mujer sonriendo junto a una ventana mientras habla por teléfono'
},
{
  slug:'duelo', name:'Duelo', sym:'No consigo superar su muerte',
  k:'duelo perdida muerte fallecimiento no consigo superar la muerte de mi madre padre ser querido mascota perro echo de menos como superar un duelo separacion',
  feel:['No consigo superar la muerte de mi madre','Echo de menos a mi padre cada día','No consigo superar la muerte de mi perro','Siento que todo el mundo ha seguido menos yo'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta, a partir de ideas de Bueno (la muerte llega cuando la persona está implicada en planes que no la contemplan,
     Diccionario de García Sierra, entrada 502), Pérez Jara («Meditatio mortis», 2016: «ya nunca más…») y Pérez Álvarez (2007: las pérdidas como inicio de la depresión) */
  quotes:[
    'Perder a alguien es enfrentarse a todos los «nunca más»',
    'Atender a tiempo una pérdida ayuda a que el bajón no se alargue'
  ],
  basesIntro:[
    'El duelo es la respuesta a una pérdida, y hay distintos tipos de duelo: por la muerte de alguien querido, también de un animal, pero también por una separación, por un despido o por un cambio de vida.',
    'La muerte llega en mitad de algo: de planes, de conversaciones, de proyectos en común. Por eso desordena tanto la vida de los que quedan.',
    'Cada duelo es distinto y se entreteje con muchas cosas a la vez: el cuerpo, la historia con quien se ha ido, la familia, el trabajo. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el duelo también se vive en el cuerpo: cansancio, cambios en el sueño y en el apetito, una tristeza que pesa físicamente. Es normal, y suele ir cediendo con el tiempo. '+V,
    '<strong>Los estudios de psicología</strong> muestran que la mayoría de los duelos siguen su curso, pero que las pérdidas —una muerte, una ruptura, un despido— pueden ser el inicio de un bajón que se alarga. Atenderlas a tiempo ayuda. No se trata de «superar» a nadie ni de pasar por unas fases en orden, sino de ir encontrando un sitio para la pérdida en una vida que sigue. '+V,
    '<strong>Los estudios de sociología</strong> señalan que hoy se habla poco de la muerte y que el duelo tiene cada vez menos espacio: al poco tiempo, alrededor ya no se habla de la pérdida, aunque uno siga dentro de ella. '+V
  ],
  together:'El <strong>acompañamiento</strong> puede marcar la diferencia. Perder a alguien es enfrentarse a todos los «nunca más»: lo que ya no se podrá hacer, decir ni compartir. En terapia hay sitio para nombrarlos y para aprender a convivir con ellos, a tu ritmo y sin prisas. Lo pensamos juntos.',
  cta:'Podemos acompañarte a hacer sitio a la pérdida, sin prisas.',
  intro:'El duelo es la respuesta a una pérdida: la muerte de alguien querido, también de un animal, pero también una separación o un cambio de vida. No es una enfermedad, aunque a veces se complica y conviene acompañarlo.',
  science:'La mayoría de los duelos siguen su curso sin tratamiento. Se habla de duelo prolongado cuando el malestar intenso se mantiene mucho tiempo y bloquea la vida. '+V,
  refs:'Bueno (1996), «El sentido de la vida», en el Diccionario filosófico de García Sierra, entrada 502; Pérez Jara (2016), «Meditatio mortis y filosofía: sobre el legado de Gustavo Bueno»; Pérez Álvarez (2007), «La activación conductual y la desmedicalización de la depresión». '+v('referencias completas'),
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
  k:'infancia adolescencia mi hijo adolescente no quiere estudiar ni hacer nada no me habla no me respeta no tiene amigos no quiere ir al colegio hija menores ninos adolescentes escolar familia conducta',
  feel:['Mi hijo adolescente no quiere estudiar ni hacer nada','Mi hijo adolescente no me habla','Mi hijo no tiene amigos','Mi hijo no quiere ir al colegio'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta (no son citas de autor); las citas de Marino descartadas están en citas-para-la-web.md */
  quotes:[
    'El sufrimiento de los niños y de los adolescentes es real y merece ayuda',
    'Muchas veces los protegemos tanto que cualquier contratiempo los hunde',
    'Mucha exigencia y poca tolerancia a la frustración'
  ],
  basesIntro:[
    'No se trata de quitarle todas las piedras del camino, sino de ayudarle a andar por él. Confiamos en lo que tu hijo o hija puede hacer, y le ayudamos a demostrárselo.',
    'No todo malestar es un trastorno. Muchas veces hay que hablar de la familia, del colegio, de los amigos o de las preguntas propias de la edad. El sufrimiento de los niños y de los adolescentes es real y merece ayuda; la mejor ayuda lo entiende dentro de su vida —su casa, su clase, sus amigos, las pantallas— y busca qué se puede cambiar de sus circunstancias.',
    'Como casi todo lo que nos pasa, el malestar en la infancia y la adolescencia es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que la infancia y la adolescencia son etapas de grandes cambios: el cuerpo, el sueño y el desarrollo influyen en el ánimo y en la conducta. Conviene tenerlo en cuenta sin convertirlo en la explicación de todo. '+V,
    '<strong>Los estudios de neurología</strong> muestran que el cerebro sigue madurando hasta bien entrada la juventud, y que esa maduración depende en buena parte de la experiencia: de lo que se practica y se aprende. Por eso un menor no es un adulto pequeño ni un diagnóstico. '+V,
    '<strong>Los estudios de psicología</strong> muestran que proteger a los chicos de todo no hace desaparecer los problemas: tarde o temprano se encuentran con el mundo real, y conviene que lleguen preparados. Hoy les pedimos que sean brillantes en todo y, a la vez, los protegemos tanto que cualquier contratiempo los hunde: mucha exigencia y poca tolerancia a la frustración. Les ayudamos a encontrar un equilibrio entre esforzarse y aguantar los tropiezos. '+V,
    '<strong>Los estudios de sociología</strong> señalan el peso de la sobreprotección, de la cultura del diagnóstico y de las redes sociales, que agravan el malestar aunque no lo crean. El mundo real sigue ahí cuando nuestros hijos salen de casa: les ayudamos a llegar a él y a relacionarse con él con recursos propios. '+V
  ],
  together:'Ante el malestar de un niño o de un adolescente hay que escuchar y explorar con calma, sin precipitarse, y ayudar según lo que necesite. Trabajamos con él o con ella, y también con vosotros: proponemos a padres y profesores estrategias sencillas para afrontar estas situaciones en casa y en clase. Lo que le pasa a un menor casi nunca le pasa solo a él; por eso lo pensamos juntos.',
  cta:'Podemos ayudaros, a vuestro hijo o hija y a vosotros, a entender qué está pasando.',
  intro:'Atendemos a niños, niñas y adolescentes con el consentimiento de la familia, y trabajamos también con madres, padres o tutores: lo que le pasa a un menor casi nunca le pasa solo a él.',
  science:'En la infancia, las intervenciones con más apoyo suelen incluir a la familia; en la adolescencia, la terapia cognitivo-conductual adaptada a la edad. '+V,
  refs:'Pérez Álvarez (2025), «La salud mental de los adolescentes: un síntoma de una sociedad vulnerable» (The Conversation) y «La salud mental de los adolescentes: un síntoma de la sociedad» (Telos); Ubieto y Pérez Álvarez (2018), «Infancias hiperpautadas y al tiempo desreguladas» (entrevista, Infocop). '+v('referencias completas'),
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
  k:'trastornos de la personalidad no me entiendo ni yo cambios de humor repentinos me siento vacio emocionalmente me cuesta relacionarme con la gente relaciones inestabilidad impulsividad emociones intensas',
  feel:['No me entiendo ni yo','Tengo cambios de humor repentinos','Me siento vacío emocionalmente','Me cuesta relacionarme con la gente'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* frases propias de la consulta, a partir de ideas de Marino Pérez Álvarez (ver referencias y citas-para-la-web.md) */
  quotes:[
    'Nadie nace siendo ya la persona que es',
    'Lo aprendido se puede revisar y cambiar',
    'Saber quién eres y qué quieres sostener en tu vida'
  ],
  basesIntro:[
    'Un síntoma no flota en el aire: es de alguien, con su historia y su forma de ser, y solo se entiende desde esa persona.',
    'La forma de ser no viene dada de nacimiento. Nadie nace siendo ya la persona que es: nos vamos haciendo con los demás y con lo que vivimos. Por eso también se puede trabajar.',
    'Como casi todo lo que nos pasa, es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que nacemos con un temperamento —más o menos sensibles, intensos o activos—, pero el temperamento todavía no es una forma de ser: esa se construye a lo largo de la vida. '+V,
    '<strong>Los estudios de neurología</strong> muestran que el cerebro cambia con la experiencia y con las relaciones durante toda la vida: lo que somos no queda fijado de una vez para siempre. '+V,
    '<strong>Los estudios de psicología</strong> muestran que muchas formas de sufrir son maneras de relacionarse con los demás que hemos aprendido en nuestro entorno, no defectos de fábrica. Las relaciones que se repiten y nos hacen daño suelen ser formas aprendidas de protegernos. Y lo aprendido se puede revisar y cambiar. '+V,
    '<strong>Los estudios de sociología</strong> señalan que vivimos rodeados de estímulos, cambios y exigencias que nos llenan de cosas y, a la vez, pueden dejarnos una sensación de vacío. Si te sientes lleno de cosas y a la vez vacío, trabajamos para que ganes <strong>consistencia</strong>: saber quién eres y qué quieres sostener en tu vida. '+V
  ],
  together:'No hay un yo de verdad escondido dentro y distinto de lo que hacemos: somos también lo que hacemos y cómo tratamos a los demás. Por eso, cuando uno no se entiende a sí mismo, buscar dentro no basta. Cuando tu vida parece hecha a trozos que no encajan, ponerla en palabras ayuda a encontrarle un hilo y un sentido. Podemos ayudarte a hacerlo, y lo pensamos juntos.',
  cta:'Podemos ayudarte a entender tus patrones y a probar otros.',
  intro:'Hablamos de problemas de personalidad cuando hay formas de sentir, pensar y relacionarse muy estables que te hacen sufrir a ti o a quienes te rodean, y que se repiten en distintos ámbitos.',
  science:'Los manuales describen varios tipos, pero la clasificación por categorías está en revisión y las propuestas recientes van hacia dimensiones. '+V,
  refs:'García Montes y Pérez Álvarez (2003), «Reivindicación de la persona en la esquizofrenia»; Pérez Álvarez (2001), «Psicoterapia de la postmodernidad»; (2003), «The Schizoid Personality of Our Time»; (2015), «Reflexividad, escritura y génesis del sujeto moderno». '+v('referencias completas'),
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
  k:'problemas sexuales sexualidad no tengo deseo sexual por mi pareja no me siento deseada mi pareja no me desea vida sexual ereccion dolor orgasmo',
  feel:['No tengo deseo sexual','No tengo deseo sexual por mi pareja','No me siento deseada por mi pareja','Me da vergüenza hablar de esto'],
  feelNote:'Frases con las que mucha gente cuenta lo que le pasa.',
  /* ideas y datos del Gottman Institute (gottman.com, «Relationship intimacy» y «Weekend homework assignment: have great sex»),
     en traducción nuestra; el 9 % lo atribuye el instituto a John Gottman sin citar el estudio */
  quotes:[
    'La intimidad real empieza con conversaciones reales sobre sexo',
    'Menos del 10 % de las parejas que no pueden hablar de sexo con comodidad está satisfecha con su vida sexual',
    'Las parejas que hablan abiertamente de sus necesidades y deseos tienen vínculos más fuertes y una vida sexual más satisfactoria'
  ],
  basesIntro:[
    'La sexualidad no es una función mecánica que falla: se entreteje con la pareja, el estrés, la historia de cada uno y las expectativas. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.',
    'La intimidad real empieza con <strong>conversaciones reales</strong> sobre sexo: poder decir qué nos pasa, qué necesitamos y qué deseamos.',
    'Como casi todo lo que nos pasa, es <strong>multicausal</strong>: no hay una sola explicación. Por eso nuestro enfoque es <strong>pluralista</strong>: tenemos en cuenta lo que aportan distintas disciplinas y nos quedamos con lo mejor de cada una, sin que ninguna lo explique todo por sí sola.'
  ],
  bases:[
    '<strong>Los estudios de biología</strong> muestran que el deseo y la respuesta sexual dependen también del cuerpo: las hormonas, el cansancio, algunas enfermedades o algunos medicamentos influyen. Por eso a veces conviene descartar antes una causa médica. '+V,
    '<strong>Los estudios de neurología</strong> muestran que el estrés y la ansiedad frenan la respuesta sexual: cuando el cuerpo está en alerta, el deseo se apaga. Por eso la presión por «rendir» suele empeorar las cosas. '+V,
    '<strong>Los estudios de psicología</strong>, entre ellos los del equipo de John Gottman, muestran que poder hablar de sexo es clave: menos del 10 % de las parejas que no pueden hablar de sexo con comodidad dice estar satisfecha con su vida sexual. En cambio, las parejas que hablan abiertamente de sus necesidades y deseos sexuales tienen vínculos emocionales más fuertes y vidas sexuales más satisfactorias. '+V,
    '<strong>Los estudios de sociología</strong> señalan el peso de los modelos de sexualidad que vemos en los medios y en la pornografía, que crean expectativas poco realistas, y de la vergüenza que todavía rodea al sexo. '+V
  ],
  together:'Esas conversaciones, y las nuevas formas de encontrarse en la intimidad que surgen de ellas, ayudan a construir una base de amistad y de conexión emocional. Te ayudamos a hablar de ello con calma, sin vergüenza y sin prisas, a solas o en pareja, y lo pensamos juntos.',
  cta:'Podemos hablar de ello con calma, sin vergüenza y sin prisas.',
  intro:'Hablamos de problemas sexuales cuando algo de la vida sexual —el deseo, la excitación, el dolor o el orgasmo— te preocupa o afecta a tu pareja. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.',
  science:'Muchas dificultades sexuales tienen a la vez componentes físicos y psicológicos; por eso a veces conviene descartar antes una causa médica. '+V,
  refs:'The Gottman Institute, «Relationship intimacy» y «Weekend homework assignment: have great sex» (gottman.com). '+v('estudio original del dato del 9 %'),
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
