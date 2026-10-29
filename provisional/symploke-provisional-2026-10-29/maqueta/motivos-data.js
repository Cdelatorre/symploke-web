/* Symploké · contenido de los motivos de consulta (maqueta).
   Todo es BORRADOR. Las frases del síntoma están escritas como las teclea la gente en Google
   (autocompletado de Google España, consultado el 28/10/2026); falta contrastarlas con Google Trends.
   Lo científico va marcado [VERIFICAR]. Fotos provisionales de Wikimedia Commons (créditos en FOTOS).
   Cada motivo tiene tres capas: lo que se siente, qué dice la ciencia y más allá de la etiqueta. */
(function(){
'use strict';
var V='<span class="verify">[VERIFICAR]</span>';
function v(t){return '<span class="verify">[VERIFICAR '+t+']</span>';}

window.MOTIVOS=[
{
  slug:'ansiedad', name:'Ansiedad y estrés', sym:'Le doy vueltas a todo',
  k:'ansiedad estres nervios angustia le doy vueltas a todo pienso demasiado ataque de ansiedad me falta el aire taquicardia panico agobio miedo fobia obsesiones psicosomatico trabajo laboral autocontrol burnout',
  feel:['Le doy vueltas a todo','Pienso demasiado las cosas','Me falta el aire y se me acelera el corazón','Me da miedo que me vuelva a dar un ataque de ansiedad'],
  cta:'Podemos ayudarte a dejar de darle vueltas a todo y a que la ansiedad no decida por ti.',
  intro:'La ansiedad es una respuesta de alarma ante algo que anticipamos como amenaza. Es útil cuando se ajusta a lo que pasa; se convierte en un problema cuando aparece sin motivo claro, dura demasiado o empieza a decidir por ti.',
  science:'Se suele distinguir el miedo, ante un peligro presente, de la ansiedad, ante uno anticipado. Cuando se mantiene y limita la vida diaria, los manuales clínicos describen varios cuadros: ansiedad generalizada, pánico, ansiedad social o fobias, entre otros. Es uno de los motivos de consulta más frecuentes. '+V,
  refs:'GuíaSalud (SNS): guía de práctica clínica sobre el manejo de los trastornos de ansiedad en atención primaria. '+v('edición vigente y enlace'),
  beyond:'Decir «tengo ansiedad» la convierte en una pieza averiada que llevamos dentro. Suele ser más útil verla como algo que hacemos —anticipar— y preguntarse hacia dónde: casi siempre tiene dirección postal (el trabajo, la familia, la pareja, el dinero). A veces la anticipación se vuelve sobre sí misma: vigilar cada latido, pensar en cómo estoy pensando. Y las ideas que parecen «irracionales» también tienen sus razones.',
  approaches:[
    ['Cognitivo-conductual','Exposición gradual a lo que se evita y revisión de las anticipaciones que mantienen el miedo.','amplia en varios cuadros de ansiedad'],
    ['Contextuales y ACT','Dejar de pelear con la ansiedad para volver a hacer lo que importa, aunque esté presente.','creciente'],
    ['Psicodinámica breve','Entender los conflictos y patrones de relación que alimentan la angustia.','parcial']
  ],
  subs:['Ataque de ansiedad y pánico','Ansiedad social','Obsesiones','Miedos y fobias','Estrés laboral y burnout','Psicosomático'],
  alt:'Mujer caminando tranquila por un paseo arbolado con luz de tarde'
},
{
  slug:'depresion', name:'Depresión y estado de ánimo', sym:'No tengo ganas de nada',
  k:'depresion estado de animo tristeza no tengo ganas de nada sin ganas solo quiero dormir me siento vacio vacia solo sola triste apatia desanimo cansancio',
  feel:['No tengo ganas de nada','No tengo ganas de hacer nada, solo quiero dormir','Me siento vacío por dentro','Me siento solo y triste'],
  cta:'Podemos ayudarte a dar los primeros pasos, también cuando no tienes ganas de nada.',
  intro:'Hablamos de depresión cuando la tristeza, el desánimo o la falta de interés se mantienen durante semanas y empiezan a afectar al trabajo, a las relaciones o al cuidado de uno mismo.',
  science:'Los manuales clínicos la describen por un conjunto de síntomas mantenidos en el tiempo: ánimo bajo, pérdida de interés, cambios en el sueño o el apetito, cansancio, culpa. Las guías recomiendan la psicoterapia, sola o junto con medicación según la intensidad. '+V,
  refs:'GuíaSalud (SNS): guía de práctica clínica sobre el manejo de la depresión en el adulto. '+v('edición vigente y enlace'),
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
  slug:'insomnio', name:'Insomnio y sueño', sym:'No puedo dormir',
  k:'insomnio sueno no puedo dormir duermo mal me despierto por la noche madrugada me cuesta dormir mi cabeza no deja de pensar higiene del sueno cansancio',
  feel:['No puedo dormir por las noches','Me despierto muchas veces por la noche','Me despierto a las 5 y ya no puedo dormir','No puedo dormir: mi cabeza no deja de pensar'],
  cta:'Trabajamos contigo para que la noche deje de ser una pelea.',
  intro:'El insomnio es la dificultad para conciliar el sueño, mantenerlo o que sea reparador, cuando se repite y se nota al día siguiente.',
  science:'La terapia cognitivo-conductual para el insomnio es el tratamiento psicológico de primera elección en las guías clínicas. Incluye la higiene del sueño, pero no se reduce a ella. '+V,
  refs:'GuíaSalud (SNS): guía de práctica clínica para el manejo de pacientes con insomnio en atención primaria. '+v('edición vigente y enlace'),
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
  slug:'alimentacion', name:'Problemas de alimentación', sym:'No puedo parar de comer', delicate:true,
  k:'alimentacion comida comer no puedo parar de comer como por ansiedad atracones dieta peso cuerpo vomitar restriccion imagen',
  feel:['No puedo parar de comer','Como por ansiedad','Pienso en la comida y en mi cuerpo casi todo el día','Me salto comidas y luego me doy un atracón'],
  cta:'Trabajamos contigo, con calma y sin juicios, para que la comida vuelva a ocupar su sitio.',
  intro:'Hablamos de problemas de alimentación cuando la comida, el peso o la figura ocupan tanto espacio que condicionan el día a día: restricciones, atracones, compensaciones o una preocupación constante.',
  science:'Los manuales clínicos describen varios cuadros (anorexia, bulimia, trastorno por atracón, entre otros). Pueden tener consecuencias médicas, por eso el tratamiento suele requerir coordinación con medicina y nutrición. '+V,
  refs:'GuíaSalud (SNS): guía de práctica clínica sobre trastornos de la conducta alimentaria. '+v('edición vigente y enlace'),
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
  cta:'Os ayudamos a pensar juntos qué os pasa, decidáis lo que decidáis.',
  intro:'La terapia de pareja es un espacio para entender qué os está pasando y probar otras maneras de relacionaros, tanto si queréis seguir como si estáis pensando en separaros. También atendemos a una sola persona que quiere trabajar su relación.',
  science:'Hay enfoques de terapia de pareja con estudios controlados, como la terapia conductual integrativa o la centrada en las emociones. '+V,
  refs:'Estudios concretos por añadir. '+v('referencias'),
  beyond:'Una relación no es la suma de dos personas: es un entramado de hábitos, familias, trabajo y expectativas. Palabras como «narcisista» o «apego ansioso» pueden ayudar a nombrar algo, pero también pueden cerrar la conversación antes de empezarla.',
  approaches:[
    ['Conductual integrativa','Cambiar lo que se puede cambiar y aceptar lo que forma parte del otro.','buena'],
    ['Centrada en las emociones','Entender los ciclos de reproche y distancia que se repiten.','buena'],
    ['Sistémica','Mirar la pareja dentro de su familia y su contexto.','variable']
  ],
  subs:['Apego','Narcisismo (pareja o progenitor)','Dependencia emocional','Rupturas e infidelidad'],
  alt:'Pareja riendo junta sentada junto a un coche'
},
{
  slug:'tdah', name:'TDAH y atención', sym:'No me puedo concentrar en nada',
  k:'tdah atencion no me puedo concentrar no consigo concentrarme me cuesta concentrarme se me olvidan las cosas estudiar como saber si tengo tdah adulto hiperactividad despiste impulsividad infancia colegio ayudar a mi hijo',
  feel:['No me puedo concentrar en nada','Me cuesta concentrarme y se me olvidan las cosas','¿Y si tengo TDAH de adulto?','No sé cómo ayudar a mi hijo con TDAH'],
  cta:'Podemos ayudarte a organizarte con lo que tienes, sin quedarte en la etiqueta.',
  intro:'El TDAH es el nombre que se da a dificultades persistentes de atención, inquietud o impulsividad que afectan a los estudios, al trabajo o a la vida diaria. Atendemos a adultos y, con el consentimiento de la familia, a menores.',
  science:'No hay un marcador biológico para diagnosticarlo: el diagnóstico es clínico, a partir de la conducta en distintos contextos. Hay estudios genéticos que encuentran muchas variantes de efecto pequeño. '+V,
  refs:'GuíaSalud (SNS): guía de práctica clínica sobre el TDAH en niños y adolescentes. '+v('edición vigente y enlace'),
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
  cta:'Podemos ayudarte a dar el paso, a tu ritmo y sin sermones.',
  intro:'Hablamos de adicción cuando algo —alcohol, juego, pantallas u otras sustancias— se repite aunque te esté haciendo daño y cuesta dejarlo aunque quieras.',
  science:'Las guías combinan intervenciones psicológicas (entrevista motivacional, terapia cognitivo-conductual, manejo de contingencias) y, en las sustancias, tratamiento médico. '+V,
  refs:'Estudios y guías por añadir. '+v('referencias'),
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
  cta:'Podemos ayudarte a tratarte de otra manera.',
  intro:'Hablamos de autoestima cuando la forma de valorarte te hace sufrir: te comparas, te exiges sin descanso o dependes de la aprobación de los demás.',
  science:'La autoestima no es un diagnóstico, sino un concepto psicológico muy estudiado. Su relación con el bienestar es real, pero más modesta de lo que suele decirse. '+V,
  refs:'Estudios concretos por añadir. '+v('referencias'),
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
  cta:'Podemos acompañarte a hacer sitio a la pérdida, sin prisas.',
  intro:'El duelo es la respuesta a una pérdida: la muerte de alguien querido, también de un animal, pero también una separación o un cambio de vida. No es una enfermedad, aunque a veces se complica y conviene acompañarlo.',
  science:'La mayoría de los duelos siguen su curso sin tratamiento. Se habla de duelo prolongado cuando el malestar intenso se mantiene mucho tiempo y bloquea la vida. '+V,
  refs:'Estudios concretos por añadir. '+v('referencias'),
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
  cta:'Podemos ayudaros, a vuestro hijo o hija y a vosotros, a entender qué está pasando.',
  intro:'Atendemos a niños, niñas y adolescentes con el consentimiento de la familia, y trabajamos también con madres, padres o tutores: lo que le pasa a un menor casi nunca le pasa solo a él.',
  science:'En la infancia, las intervenciones con más apoyo suelen incluir a la familia; en la adolescencia, la terapia cognitivo-conductual adaptada a la edad. '+V,
  refs:'Estudios y guías por añadir. '+v('referencias'),
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
  cta:'Podemos ayudarte a entender tus patrones y a probar otros.',
  intro:'Hablamos de problemas de personalidad cuando hay formas de sentir, pensar y relacionarse muy estables que te hacen sufrir a ti o a quienes te rodean, y que se repiten en distintos ámbitos.',
  science:'Los manuales describen varios tipos, pero la clasificación por categorías está en revisión y las propuestas recientes van hacia dimensiones. '+V,
  refs:'Estudios y guías por añadir. '+v('referencias'),
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
  cta:'Podemos hablar de ello con calma, sin vergüenza y sin prisas.',
  intro:'Hablamos de problemas sexuales cuando algo de la vida sexual —el deseo, la excitación, el dolor o el orgasmo— te preocupa o afecta a tu pareja. Cuesta hablar de ello, y por eso mismo merece un espacio tranquilo.',
  science:'Muchas dificultades sexuales tienen a la vez componentes físicos y psicológicos; por eso a veces conviene descartar antes una causa médica. '+V,
  refs:'Estudios concretos por añadir. '+v('referencias'),
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
  ['Estrés postraumático',null,'estres postraumatico trauma'],
  ['Fobias','ansiedad','fobias miedos fobia'],
  ['Ira y autocontrol','ansiedad','ira autocontrol enfado rabia impulsividad no controlo mis emociones'],
  ['Obsesiones','ansiedad','obsesiones obsesivo pensamientos intrusivos manias'],
  ['Problemas laborales','ansiedad','problemas laborales trabajo jefe no tengo ganas de ir a trabajar'],
  ['Rupturas y divorcio','pareja','rupturas divorcio separacion superar a mi ex']
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

/* imagen de un motivo: la ilustración (ilustraciones.js) y, si no está cargada, la foto provisional */
window.motivoArt=function(slug,uid,fill){
  if(!window.ILUS||!ILUS[slug])return '<img src="img/'+slug+'.jpg" alt="" loading="lazy">';
  var s=ILUS[slug](uid);
  return fill?s.replace('<svg ','<svg preserveAspectRatio="xMidYMid slice" '):s;
};

/* recuadro de un motivo con su imagen: lo usan la portada y la página de motivos */
window.motivoCard=function(m){
  return '<a class="card mcard" href="motivo.html?m='+m.slug+'" data-k="'+m.k+'"><span class="mimg">'+motivoArt(m.slug,'c'+m.slug)+'</span><span class="mtxt"><h3>'+m.name+'</h3><p class="sym">«'+m.sym+'»</p><span class="ar" aria-hidden="true">→</span></span></a>';
};
})();
