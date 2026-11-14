/* página de cada terapia: la monta a partir de maqueta/motivos-data.js.
   motivo.html?m=slug, o una página fija (ansiedad.html) con <body data-m="slug"> */
(function(){
'use strict';
var fija=document.body.getAttribute('data-m');   // página fija: ansiedad.html lleva data-m="ansiedad"
var q=/[?&]m=([a-z]+)/.exec(location.search), m=motivoBySlug(fija||(q?q[1]:'ansiedad'))||MOTIVOS[0];
if(!fija&&m.pagina){location.replace(m.pagina+location.hash);return;}   // motivo.html?m=ansiedad → ansiedad.html (una sola dirección para Google)
var D='', CITA='contacto.html', ARR=' <span class="arr" aria-hidden="true">→</span>';
var WA='<a class="btn ghost" href="https://wa.me/34696519162" target="_blank" rel="noopener"><svg class="wa-logo" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Consultar por WhatsApp</a>';
document.title=m.seoTitle||(m.name+' · Psicólogo en Madrid centro y online · Symploké');   // seoTitle y seoDesc: lo que sale en la pestaña y en Google
if(m.seoDesc&&!document.querySelector('meta[name="description"]')){var md=document.createElement('meta');md.name='description';md.content=m.seoDesc;document.head.appendChild(md);}
var h='';
var c=m.corta||null;   // VERSIÓN CARLOS: página resumida (sin etiquetas, enfoque recortado, tipos en lista, un solo «Cómo trabajamos», preguntas aparte)

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
if(m.subs&&!c)h+='<div class="subs-top"><p class="layer">¿Te pasa algo de esto?</p><ul class="subs">'+m.subs.map(function(s){
  var t=[].concat(s), href=null;
  if(t[1]&&t[1].charAt(0)==='#')href=t[1];   // ['Ansiedad social','#social']: lleva a su desplegable en esta misma página y lo abre
  else{var o=t[1]&&motivoBySlug(t[1]); if(o)href=motivoUrl(o);}   // ['Insomnio por ansiedad','insomnio']: lleva a otra terapia
  return href?'<li class="enl"><a href="'+href+'">'+t[0]+'</a></li>':'<li>'+t[0]+'</li>';
}).join('')+'</ul></div>';
h+='</div><div class="art">'+ILUS[m.slug]('h'+m.slug)+'</div></section>';

h+='<section class="feel" aria-labelledby="suene"><div>';
h+='<h2 id="suene">'+(m.sueneTitulo||'Quizá te suene')+'</h2>';   // pareja e infancia: «Quizá os suene»
h+='<p class="note">'+(m.feelNote||'Frases con las que mucha gente cuenta lo que le pasa.')+'</p>';
h+='</div><div><ul>'+m.feel.map(function(f){return '<li>«'+f+'»</li>';}).join('')+'</ul>';
h+='<div class="reco"><p>'+(m.reco||'¿Te reconoces? No tienes por qué pasarlo a solas.')+'</p><a class="btn primary small" href="'+CITA+'">Pedir cita'+ARR+'</a></div>';
var aviso=(c&&c.alert)||m.alert;
if(aviso)h+='<p class="alert">'+aviso+'</p>';
h+='</div></section>';

h+='<div class="read">';
if(m.bases){
  h+='<section><h2>Un enfoque multidimensional'+(m.enfoqueDe?' '+m.enfoqueDe:'')+'</h2>';   // enfoqueDe: «de la ansiedad»…
  [].concat((c&&c.basesIntro)||m.basesIntro||'Lo que te pasa es <strong>multicausal</strong>: ninguna ciencia lo explica todo por sí sola. Cada una ilumina una dimensión del problema, y en cada persona se entretejen de una manera.').forEach(function(p){h+=(p&&p.voz?'<p class="voz">«'+p.voz+'»</p>':'<p>'+p+'</p>');});   // basesIntro: un párrafo o varios; {voz:'…'} pone ahí una frase verde
  var voz=m.quotes||[], bs=(c&&c.bases)||m.bases;
  bs.forEach(function(b,i){
    h+='<p>'+b+'</p>';
    if(i<bs.length-1&&voz[i]){   // frase destacada entre párrafo y párrafo; [texto, autor] si es una cita
      var q=voz[i], vz=(q.texto?[q.texto,q.autor]:[].concat(q));   // {texto, autor, grande} para destacarla más
      h+='<p class="voz'+(q.grande?' grande':'')+'">«'+vz[0]+'»'+(vz[1]?'<span class="quien">— '+vz[1]+'</span>':'')+'</p>';
    }
  });
  h+=(m.refs?'<p class="refs">'+m.refs+'</p>':'')+'</section>';
  h+='<section><h2>Pensarlo juntos</h2><p class="beyond">'+((c&&c.together)||m.together)+'</p></section>';
}else{
  h+='<section><p class="layer">Qué dice la ciencia</p><h2>Qué sabemos</h2><p>'+m.science+'</p>'+(m.refs?'<p class="refs">'+m.refs+'</p>':'')+'</section>';
  h+='<section><p class="layer">Más allá de la etiqueta</p><h2>No eres un diagnóstico</h2><p class="beyond">'+m.beyond+'</p></section>';
}
/* apartados de tratamiento (2026-11-09, tras el estudio de competencia): proceso por pasos, enfoques, modalidad y quién te atiende */
if(c){   // VERSIÓN CARLOS: tipos en lista corta, un solo bloque «Cómo trabajamos» y las preguntas en un desplegable (preguntas.html se borró el 2026-11-11)
  if(c.tipos){
    h+='<section class="tipos corta"><h2>'+c.tipos.titulo+'</h2>'+(c.tipos.intro?'<p>'+c.tipos.intro+'</p>':'')+'<ul class="tipos-lista">';
    c.tipos.items.forEach(function(e){h+='<li'+(e[2]?' id="'+e[2]+'"':'')+'><strong>'+e[0]+':</strong> '+e[1]+'</li>';});
    h+='</ul></section>';
  }
  if(c.trabajo){
    h+='<section class="proceso"><h2>'+c.trabajo.titulo+'</h2>';
    if(c.trabajo.pasos.length){h+='<ol class="pasos">';c.trabajo.pasos.forEach(function(p){h+='<li><p><strong>'+p[0]+'</strong> '+p[1]+'</p></li>';});h+='</ol>';}   // 2026-11-11: sin pasos, solo el párrafo
    h+=(c.trabajo.texto?'<p class="trabajo-mas">'+c.trabajo.texto+'</p>':'')+'</section>';
  }
  if(m.faq){   // preguntas en un desplegable de una sola línea (opción A, 2026-11-10): se ve igual de ligero y Google lee las preguntas como parte de la página
    h+='<details class="a-preguntas"><summary><span class="qi" aria-hidden="true">?</span><span class="t">Preguntas frecuentes sobre '+(/^[A-ZÁÉÍÓÚ][a-záéíóúñ]/.test(m.name)?m.name.charAt(0).toLowerCase()+m.name.slice(1):m.name)+' <span class="arr" aria-hidden="true">→</span></span></summary><div class="faq desplegable">';
    m.faq.forEach(function(f){h+='<details'+(f[2]?' id="'+f[2]+'"':'')+'><summary><h3>'+f[0]+'</h3></summary><p>'+f[1]+'</p></details>';});
    h+='</div></details>';
  }
}else{
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
}   // fin de la página larga
h+='</div>';

if(!c&&(m.delicate||m.coord||m.consent)){   // en la página resumida no sale este recuadro: formación y consentimientos se ven en el despacho (2026-11-10)
  h+='<div class="care"><h3>'+(m.consent?'Menores y familia':'Con cuidado')+'</h3>';
  if(m.delicate)h+='<p>Formación en este ámbito: <span class="gap">[ ]</span></p>';
  if(m.coord)h+='<p>'+m.coord+'</p>';
  if(m.consent)h+='<p>'+m.consent+'</p>';
  h+='<p>No prometemos resultados: cada proceso es distinto.</p></div>';
}

if(c&&c.relacionadas){   // VERSIÓN CARLOS: otras terapias en tarjetas con dibujo, como en terapia.html
  h+='<section class="relacionadas"><h2>Otras terapias que pueden interesarte</h2><div class="rel-grid">';
  c.relacionadas.forEach(function(r){
    var o=motivoBySlug(r[0]); if(!o)return;
    h+='<a class="card" href="'+motivoUrl(o)+'"><span class="img">'+ILUS[o.slug]('r'+o.slug)+'</span><span class="txt"><h3>'+o.name+'</h3><p>'+r[1]+'</p><span class="go">Ver la terapia'+ARR+'</span></span></a>';
  });
  h+='</div></section>';
}

h+='<section class="band"><div class="pic">'+ILUS.portada('band')+'</div><div class="t">';
h+='<h2>'+(m.bandaTitulo||'Podemos ayudarte')+'</h2>';   // pareja e infancia: «Podemos ayudaros»
h+='<p>'+(m.bandaTexto||'Trabajamos para aliviar el sufrimiento, paso a paso: nos cuentas qué te pasa, lo pensamos juntos y buscamos cómo resolverlo.')+'</p>';   // pareja lo dice en vosotros
h+='<a class="btn primary" href="'+CITA+'">'+(m.bandaBoton||'Pide cita y lo vemos juntos')+ARR+'</a>';   // infancia: «Pedid»
h+='<p class="donde">'+(m.bandaDonde||'Puedes visitarnos')+' en <a href="presencial.html">nuestro centro sanitario</a> de la calle Martín de Vargas, 5 (Madrid centro) o elegir la <a href="online.html">terapia online</a>.</p>';   // Madrid en el texto visible (búsquedas locales)
h+='<p class="urg">Si estás en una urgencia, llama al <strong>112</strong>. Si tienes pensamientos de suicidio, llama al <strong>024</strong>.</p>';
h+='</div></section>';

var MAIN=document.getElementById('main');
MAIN.innerHTML=h; MAIN.classList.remove('pre');   // .pre: texto ya escrito en el HTML para Google (herramientas/prerender.py), oculto hasta montar este
if(/prerender/.test(location.search+location.hash)){   // lo usa herramientas/prerender.py: entrega el HTML limpio y las preguntas en texto plano
  var tmp=document.createElement('div'), txt=function(x){tmp.innerHTML=x;return tmp.textContent;};
  var out=document.createElement('textarea'); out.id='prerender-out';
  out.textContent=JSON.stringify({html:h, faq:(m.faq||[]).map(function(f){return [txt(f[0]),txt(f[1])];})});
  document.body.appendChild(out);
}
drawIn(document.querySelector('.mhero .art svg'));

/* etiquetas que llevan a un desplegable de esta página (#social…): lo abren y bajan hasta él */
function abrirAncla(id){   // abre el desplegable y los que lo contienen (p. ej., una pregunta dentro de «Preguntas frecuentes»)
  var d=id&&document.getElementById(id), abierto=false;
  for(var e=d;e;e=e.parentElement){if(e.tagName==='DETAILS'){e.open=true;abierto=true;}}
  if(!abierto)return false;
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
