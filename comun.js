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

/* ---------- scroll suave ---------- */
var lenis=null;
if(!REDUCED&&window.Lenis){
  lenis=new Lenis({duration:1.35,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t));},smoothWheel:true,wheelMultiplier:0.9});
  (function raf(time){lenis.raf(time);requestAnimationFrame(raf);})(performance.now());
  window.__lenis=lenis;
}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="#"]');
  if(!a||a.origin!==location.origin||a.pathname!==location.pathname)return;
  var id=decodeURIComponent(a.hash.slice(1)), el=id?document.getElementById(id):null;
  if(!el)return;
  e.preventDefault();
  if(lenis)lenis.scrollTo(el,{offset:-NAV,duration:1.6});
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
