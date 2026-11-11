/* Symploké · piezas comunes: scroll suave con Lenis, aparición de los elementos al hacer scroll
   y variante del acento en los dibujos de las tarjetas. Se carga al final del <body>, después de lenis.min.js. */
(function(){
'use strict';
var REDUCED=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var NAV=72;   // alto de la cabecera ya compactada (más un margen), para que los enlaces internos no queden tapados

/* ---------- cabecera: se compacta en cuanto se empieza a bajar ---------- */
var root=document.documentElement, compact=false;
function navSize(){
  var y=window.pageYOffset||root.scrollTop||0;
  if(!compact&&y>24){compact=true;root.classList.add('scrolled');}
  else if(compact&&y<8){compact=false;root.classList.remove('scrolled');}   // dos umbrales para que no parpadee
}
window.addEventListener('scroll',navSize,{passive:true});
navSize();

/* ---------- modo noche: interruptor en la cabecera. Sin elección guardada sigue al tema del sistema;
   al pulsarlo se guarda en localStorage y una línea en el <head> de cada página la aplica antes de pintar ---------- */
var DARK=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)');
function isDark(){var t=root.getAttribute('data-theme'); return t?t==='dark':!!(DARK&&DARK.matches);}
var nav=document.querySelector('.nav');
if(nav){
  var sw=document.createElement('button');
  sw.type='button'; sw.className='theme-sw'; sw.setAttribute('role','switch'); sw.setAttribute('aria-label','Modo noche');
  sw.innerHTML='<svg class="ico sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
    +'<svg class="ico moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>'
    +'<span class="knob" aria-hidden="true"></span>';
  var syncSw=function(){sw.setAttribute('aria-checked',String(isDark()));};
  sw.addEventListener('click',function(){
    var t=isDark()?'light':'dark';
    root.setAttribute('data-theme',t); syncSw();
    try{localStorage.setItem('symploke-tema',t);}catch(e){}
  });
  if(DARK&&DARK.addEventListener)DARK.addEventListener('change',syncSw);   // cambia el tema del sistema y no hay elección guardada
  nav.appendChild(sw);   // en la esquina superior derecha, después de «Pedir primera cita»
  syncSw();
}

/* ---------- menú: en la portada, el enlace de la sección que estás viendo queda marcado (.on);
   data-spy marca con otra sección un enlace que lleva a otra página («Terapias» con «¿Qué hacemos?») ---------- */
var spy=[].slice.call(document.querySelectorAll('.nav .links a[href^="#"],.nav .links a[data-spy]')).map(function(a){return {a:a,el:document.getElementById(a.getAttribute('data-spy')||a.getAttribute('href').slice(1))};}).filter(function(s){return s.el;});
function navSpy(){
  var line=NAV+80, cur=null;
  spy.forEach(function(s){var r=s.el.getBoundingClientRect(); if(r.top<=line&&r.bottom>line)cur=s;});
  spy.forEach(function(s){s.a.classList.toggle('on',s===cur);});
}
if(spy.length){window.addEventListener('scroll',navSpy,{passive:true});window.addEventListener('load',navSpy);navSpy();}

/* ---------- scroll suave ---------- */
var lenis=null;
if(!REDUCED&&window.Lenis){
  lenis=new Lenis({duration:1.35,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t));},smoothWheel:true,wheelMultiplier:0.9});
  (function raf(time){lenis.raf(time);requestAnimationFrame(raf);})(performance.now());
  window.__lenis=lenis;
}
/* si el destino es una sección (p. ej. #como), se baja hasta su título, para que no asome lo de arriba (2026-11-11) */
function destino(el){return el.tagName==='SECTION'?(el.querySelector('h2')||el):el;}
if(location.hash){var h0=document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if(h0&&h0.tagName==='SECTION')addEventListener('load',function(){setTimeout(function(){var t=destino(h0);
    if(lenis)lenis.scrollTo(t,{offset:-NAV-30,immediate:true});else{t.scrollIntoView();scrollBy(0,-NAV-30);}},60);});}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="#"]');
  if(!a||a.origin!==location.origin||a.pathname!==location.pathname)return;
  var id=decodeURIComponent(a.hash.slice(1)), el=id?document.getElementById(id):null;
  if(!el)return;
  el=destino(el);
  e.preventDefault();
  if(lenis)lenis.scrollTo(el,{offset:-NAV-30,duration:1.6});
  else el.scrollIntoView({behavior:REDUCED?'auto':'smooth'});
  history.replaceState(null,'',a.hash);
});

/* ---------- aparición al hacer scroll ---------- */
var SEL='main h1, main h2, main .eyebrow, main .lead, main .cta, main .where, .card, .qwin, .band, .bmore, .ct-form > *, .ct-art';
var els=[].slice.call(document.querySelectorAll(SEL));
if(!REDUCED&&'IntersectionObserver' in window){
  var io=new IntersectionObserver(function(entries){
    var batch=entries.filter(function(en){return en.isIntersecting;});
    batch.forEach(function(en,i){
      en.target.style.setProperty('--d',Math.min(i*0.09,0.45).toFixed(2)+'s');   // los que entran a la vez, uno detrás de otro
      en.target.classList.add('in'); io.unobserve(en.target);
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  els.forEach(function(el){el.classList.add('rv');io.observe(el);});
  /* raya de «Pensarlo juntos»: se dibuja de arriba abajo, una vez, en cuanto asoma el párrafo */
  var rio=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('dibujada');rio.unobserve(en.target);}});
  },{threshold:0});
  [].slice.call(document.querySelectorAll('.beyond')).forEach(function(el){el.classList.add('raya');rio.observe(el);});
}

/* ---------- acento en los dibujos de las tarjetas ---------- */
var HV=['mancha','ropa','entorno','fondo'], NAMES={mancha:'Mancha',ropa:'Ropa',entorno:'Entorno',fondo:'Fondo'};
var hv='mancha';
try{var saved=localStorage.getItem('symploke-hover2'); if(HV.indexOf(saved)>=0)hv=saved;}catch(e){}
document.documentElement.setAttribute('data-hover',hv);
var pick=document.querySelector('[data-hvpick]');
if(pick){
  pick.className='hvpick';
  pick.innerHTML='<span>Color al pasar el ratón:</span>'+HV.map(function(k){return '<button type="button" data-v="'+k+'" aria-pressed="'+(k===hv)+'">'+NAMES[k]+'</button>';}).join('');
  pick.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b)return;
    hv=b.getAttribute('data-v'); document.documentElement.setAttribute('data-hover',hv);
    [].forEach.call(pick.querySelectorAll('button'),function(x){x.setAttribute('aria-pressed',String(x===b));});
    try{localStorage.setItem('symploke-hover2',hv);}catch(err){}
  });
}
})();
