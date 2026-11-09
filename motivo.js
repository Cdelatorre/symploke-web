/* página de cada terapia: la monta a partir de maqueta/motivos-data.js.
   motivo.html?m=slug, o una página fija (ansiedad.html) con <body data-m="slug"> */
(function(){
'use strict';
var fija=document.body.getAttribute('data-m');   // página fija: ansiedad.html lleva data-m="ansiedad"
var q=/[?&]m=([a-z]+)/.exec(location.search), m=motivoBySlug(fija||(q?q[1]:'ansiedad'))||MOTIVOS[0];
if(!fija&&m.pagina){location.replace(m.pagina+location.hash);return;}   // motivo.html?m=ansiedad → ansiedad.html (una sola dirección para Google)
var D='', CITA='contacto.html', ARR=' <span class="arr" aria-hidden="true">→</span>';
var WA='<a class="btn ghost" href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>Consultar por WhatsApp</a>';
document.title=m.seoTitle||(m.name+' · Psicólogo en Madrid centro y online · Symploké');   // seoTitle y seoDesc: lo que sale en la pestaña y en Google
if(m.seoDesc&&!document.querySelector('meta[name="description"]')){var md=document.createElement('meta');md.name='description';md.content=m.seoDesc;document.head.appendChild(md);}
var h='';

var CRUMBS='<nav class="crumbs" aria-label="Migas de pan"><a href="test1.html">Inicio</a><span aria-hidden="true">›</span><a href="terapia.html">Terapias</a><span aria-hidden="true">›</span><span>'+m.name+'</span></nav>';
if(m.h1){   // encabezado largo: en una línea, a todo el ancho y por encima del texto y el dibujo
  h+=CRUMBS+'<h1 class="wide">'+m.h1+'</h1><section class="mhero"><div>';
}else{
  h+='<section class="mhero"><div>'+CRUMBS+'<h1>'+m.name+'</h1>';
}
h+='<p class="lead">'+m.intro+(m.revisada?'':D)+'</p>';   // «borrador» solo en las terapias aún sin revisar
if(m.how)h+='<p class="lead how">'+m.how+'</p>';
h+='<p class="help">'+m.cta+'</p>';
h+='<div class="cta"><a class="btn primary" href="'+CITA+'">Pedir cita'+ARR+'</a>'+WA+'</div>';
if(m.subs)h+='<div class="subs-top"><p class="layer">¿Te pasa algo de esto?</p><ul class="subs">'+m.subs.map(function(s){
  var t=[].concat(s), href=null;
  if(t[1]&&t[1].charAt(0)==='#')href=t[1];   // ['Ansiedad social','#social']: lleva a su desplegable en esta misma página y lo abre
  else{var o=t[1]&&motivoBySlug(t[1]); if(o)href=motivoUrl(o);}   // ['Insomnio por ansiedad','insomnio']: lleva a otra terapia
  return href?'<li class="enl"><a href="'+href+'">'+t[0]+'</a></li>':'<li>'+t[0]+'</li>';
}).join('')+'</ul></div>';
h+='</div><div class="art">'+ILUS[m.slug]('h'+m.slug)+'</div></section>';

h+='<section class="feel" aria-labelledby="suene"><div>';
h+='<h2 id="suene">Quizá te suene</h2>';
h+='<p class="note">'+(m.feelNote||'Frases con las que mucha gente cuenta lo que le pasa.')+'</p>';
h+='</div><div><ul>'+m.feel.map(function(f){return '<li>«'+f+'»</li>';}).join('')+'</ul>';
h+='<div class="reco"><p>'+(m.reco||'¿Te reconoces? No tienes por qué pasarlo solo.')+'</p><a class="btn primary small" href="'+CITA+'">Pedir cita'+ARR+'</a></div>';
if(m.alert)h+='<p class="alert">'+m.alert+'</p>';
h+='</div></section>';

h+='<div class="read">';
if(m.bases){
  h+='<section><h2>Un enfoque multidimensional'+(m.enfoqueDe?' '+m.enfoqueDe:'')+'</h2>';   // enfoqueDe: «de la ansiedad»…
  [].concat(m.basesIntro||'Lo que te pasa es <strong>multicausal</strong>: ninguna ciencia lo explica todo por sí sola. Cada una ilumina una dimensión del problema, y en cada persona se entretejen de una manera.').forEach(function(p){h+=(p&&p.voz?'<p class="voz">«'+p.voz+'»</p>':'<p>'+p+'</p>');});   // basesIntro: un párrafo o varios; {voz:'…'} pone ahí una frase verde
  var voz=m.quotes||[];
  m.bases.forEach(function(b,i){
    h+='<p>'+b+'</p>';
    if(i<m.bases.length-1&&voz[i]){   // frase destacada entre párrafo y párrafo; [texto, autor] si es una cita
      var q=voz[i], vz=(q.texto?[q.texto,q.autor]:[].concat(q));   // {texto, autor, grande} para destacarla más
      h+='<p class="voz'+(q.grande?' grande':'')+'">«'+vz[0]+'»'+(vz[1]?'<span class="quien">— '+vz[1]+'</span>':'')+'</p>';
    }
  });
  h+=(m.refs?'<p class="refs">'+m.refs+'</p>':'')+'</section>';
  h+='<section><h2>Pensarlo juntos</h2><p class="beyond">'+m.together+'</p></section>';
}else{
  h+='<section><p class="layer">Qué dice la ciencia</p><h2>Qué sabemos</h2><p>'+m.science+'</p>'+(m.refs?'<p class="refs">'+m.refs+'</p>':'')+'</section>';
  h+='<section><p class="layer">Más allá de la etiqueta</p><h2>No eres un diagnóstico</h2><p class="beyond">'+m.beyond+'</p></section>';
}
/* apartados de tratamiento (2026-11-09, tras el estudio de competencia): proceso por pasos, enfoques, modalidad y quién te atiende */
if(m.tipos){   // {titulo, intro, items:[[nombre, texto]]}: tipos o cuadros, cada uno con su nombre como subtítulo
  h+='<section class="tipos"><h2>'+m.tipos.titulo+'</h2>'+(m.tipos.intro?'<p>'+m.tipos.intro+'</p>':'');
  m.tipos.items.forEach(function(e){h+='<details'+(e[2]?' id="'+e[2]+'"':'')+'><summary><h3>'+e[0]+'</h3></summary><p>'+e[1]+'</p></details>';});   // e[2]: ancla para las etiquetas de arriba   // desplegables (opción C, 2026-11-09): el texto sigue en la página para Google
  h+='</section>';
}
if(m.proceso){   // {titulo, pasos:[[título corto, texto]]}: lista numerada (Google la lee como pasos)
  h+='<section class="proceso"><h2>'+m.proceso.titulo+'</h2><ol class="pasos">';
  m.proceso.pasos.forEach(function(p){h+='<li><p><strong>'+p[0]+'</strong> '+p[1]+'</p></li>';});
  h+='</ol></section>';
}
if(m.enfoques){   // {titulo, items:[[nombre, texto]]}: cada enfoque con su nombre como subtítulo
  h+='<section class="enfoques"><h2>'+m.enfoques.titulo+'</h2>';
  m.enfoques.items.forEach(function(e){h+='<h3>'+e[0]+'</h3><p>'+e[1]+'</p>';});
  h+='</section>';
}
if(m.modalidad)h+='<section class="modalidad"><h2>'+m.modalidad.titulo+'</h2><p>'+m.modalidad.texto+'</p></section>';
if(m.quien)h+='<section class="quien"><h2>'+m.quien.titulo+'</h2><p>'+m.quien.texto+'</p></section>';
if(m.faq){   // preguntas frecuentes: [pregunta, respuesta]
  h+='<section class="faq'+(m.faqDesplegable?' desplegable':'')+'"><h2>Preguntas frecuentes</h2>';
  m.faq.forEach(function(f){h+=m.faqDesplegable?'<details'+(f[2]?' id="'+f[2]+'"':'')+'><summary><h3>'+f[0]+'</h3></summary><p>'+f[1]+'</p></details>':'<h3>'+f[0]+'</h3><p>'+f[1]+'</p>';});   // faqDesplegable: preguntas cerradas que se abren al pulsar
  h+='</section>';
}
h+='</div>';

if(m.delicate||m.coord||m.consent){
  h+='<div class="care"><h3>'+(m.consent?'Menores y familia':'Con cuidado')+'</h3>';
  if(m.delicate)h+='<p>Formación en este ámbito: <span class="gap">[ ]</span></p>';
  if(m.coord)h+='<p>'+m.coord+'</p>';
  if(m.consent)h+='<p>'+m.consent+'</p>';
  h+='<p>No prometemos resultados: cada proceso es distinto.</p></div>';
}

h+='<section class="band"><div class="pic">'+ILUS.portada('band')+'</div><div class="t">';
h+='<h2>Podemos ayudarte</h2>';
h+='<p>Trabajamos para aliviar el sufrimiento, paso a paso. Empezamos con una valoración inicial: nos cuentas qué te pasa, lo pensamos juntos y buscamos cómo resolverlo.</p>';
h+='<a class="btn primary" href="'+CITA+'">Pide cita y lo vemos juntos'+ARR+'</a>';
h+='<p class="donde">Puedes visitarnos en nuestro centro sanitario de la calle Martín de Vargas, 5 (Madrid centro) o elegir la terapia online.</p>';   // Madrid en el texto visible (búsquedas locales)
h+='<p class="urg">Si estás en una urgencia, llama al <strong>112</strong>. Si tienes pensamientos de suicidio, llama al <strong>024</strong>.</p>';
h+='</div></section>';

document.getElementById('main').innerHTML=h;
drawIn(document.querySelector('.mhero .art svg'));

/* etiquetas que llevan a un desplegable de esta página (#social…): lo abren y bajan hasta él */
function abrirAncla(id){
  var d=id&&document.getElementById(id);
  if(!d||d.tagName!=='DETAILS')return false;
  d.open=true;
  d.scrollIntoView({behavior:'smooth',block:'center'});
  return true;
}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href^="#"]');
  if(a&&abrirAncla(a.getAttribute('href').slice(1))){e.preventDefault();history.replaceState(null,'',a.getAttribute('href'));}
});
if(location.hash)setTimeout(function(){abrirAncla(location.hash.slice(1));},300);   // ansiedad.html#social desde otra página

/* encabezado largo en una línea: si no cabe a su tamaño, se reduce lo justo para que quepa */
function ajustarH1(){
  var e=document.querySelector('h1.wide');
  if(!e)return;
  e.style.fontSize='';
  if(window.innerWidth<861)return;   // en móvil puede partirse en dos líneas
  var fs=parseFloat(getComputedStyle(e).fontSize);
  while(e.scrollWidth>e.clientWidth+1&&fs>24){fs-=1;e.style.fontSize=fs+'px';}
}
ajustarH1();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(ajustarH1);
window.addEventListener('resize',ajustarH1);
})();
