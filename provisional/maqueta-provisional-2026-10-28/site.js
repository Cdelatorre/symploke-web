/* Symploké · comportamiento común: logo que se teje al cargar y banner de cookies */
(function(){
'use strict';

/* ---------- logo de la cabecera: «se teje en el telar» al cargar ---------- */
(function(){
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var svg=document.querySelector('.nav .brand svg'); if(!svg)return;
  var FINAL=svg.innerHTML;   // el logo estático, para dejarlo exacto al terminar
  var W=28, HALO=2.5, R=W/2+HALO+2, LOGO=[58,100,142];
  var SPEED=1.6, T_END=4.0;   // 4 s de la propuesta, a 1,6× → unos 2,5 s
  function cl(x){return Math.max(0,Math.min(1,x));}
  function e(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function vp(x,a,b){return 'M'+x+','+a.toFixed(1)+'V'+b.toFixed(1);}
  function hp(y,a,b){return 'M'+a.toFixed(1)+','+y+'H'+b.toFixed(1);}
  function weave(t){
    var V=[],H=[],out='',i,j;
    for(i=0;i<3;i++){
      V.push(32+136*e(cl((t-0.1-0.28*i)/0.85)));    // urdimbre: cae de arriba abajo
      H.push(32+136*e(cl((t-1.15-0.35*i)/0.95)));   // trama: entra de izquierda a derecha
    }
    for(j=0;j<3;j++)if(V[j]>32.5)out+='<path d="'+vp(LOGO[j],32,V[j])+'" class="cv" stroke-width="'+W+'"/>';
    for(i=0;i<3;i++)if(H[i]>32.5)out+='<path d="'+hp(LOGO[i],32,H[i])+'" class="halo" stroke-width="'+(W+2*HALO)+'"/><path d="'+hp(LOGO[i],32,H[i])+'" class="ch" stroke-width="'+W+'"/>';
    for(i=0;i<3;i++)for(j=0;j<3;j++){
      if((i+j)%2!==0||V[j]<LOGO[i]||H[i]<LOGO[j]-W/2-HALO)continue;   // aquí la vertical pasa por encima
      var y=LOGO[i];
      out+='<path d="'+vp(LOGO[j],y-R,Math.min(V[j],y+R))+'" class="halo" stroke-width="'+(W+2*HALO)+'"/><path d="'+vp(LOGO[j],y-R-3,Math.min(V[j],y+R+3))+'" class="cv" stroke-width="'+W+'"/>';
    }
    var r=e(cl((t-2.95)/1.05)), k=1.08-0.08*r;
    svg.innerHTML='<g transform="rotate('+(45*r).toFixed(2)+' 100 100) translate(100 100) scale('+k.toFixed(3)+') translate(-100 -100)">'+out+'</g>';
  }
  var t0=0;
  function tick(now){
    if(!t0)t0=now;
    var t=(now-t0)/1000*SPEED;
    if(t>=T_END){svg.innerHTML=FINAL;return;}
    weave(t);
    requestAnimationFrame(tick);
  }
  var HT=/[#&]logo=([\d.]+)/.exec(location.hash);   // #logo=2 congela el logo en ese segundo (para revisar)
  if(HT){ var ft=parseFloat(HT[1]); if(ft<T_END)weave(ft); return; }
  weave(0);
  requestAnimationFrame(tick);
})();

/* ---------- hueco de foto: tejido de marca (bandas por encima y por debajo) mientras no haya foto real ---------- */
[].forEach.call(document.querySelectorAll('svg[data-weave]'),function(svg){
  var NS='http://www.w3.org/2000/svg', w=1260, h=540, s=96, b=56, gap=6, o=+svg.getAttribute('data-weave')||0, g=document.createElementNS(NS,'g'), cols=[], rows=[], i, j, x, y;
  svg.setAttribute('viewBox','0 0 '+w+' '+h); svg.setAttribute('preserveAspectRatio','xMidYMid slice');
  function rect(x,y,rw,rh,fill){var r=document.createElementNS(NS,'rect');r.setAttribute('x',x);r.setAttribute('y',y);r.setAttribute('width',rw);r.setAttribute('height',rh);r.setAttribute('rx',10);r.style.fill=fill;g.appendChild(r);}
  for(x=-s/2+o*23;x<w+s;x+=s)cols.push(x);
  for(y=-s/3+o*17;y<h+s;y+=s)rows.push(y);
  cols.forEach(function(cx){rect(cx,-20,b,h+40,'var(--mid)');});
  rows.forEach(function(ry){rect(-20,ry-gap,w+40,b+2*gap,'var(--soft)');rect(-20,ry,w+40,b,'var(--pale)');});
  for(i=0;i<cols.length;i++)for(j=0;j<rows.length;j++){
    if((i+j+o)%2===0){rect(cols[i]-gap,rows[j],b+2*gap,b,'var(--soft)');rect(cols[i],rows[j]-gap,b,b+2*gap,'var(--mid)');}
  }
  svg.appendChild(g);
});

/* ---------- «Pedir cita» flotante: aparece al bajar y se oculta cuando ya se ve el bloque de cita ---------- */
(function(){
  var href=document.body.getAttribute('data-cita')||'index.html#contacto';
  var a=document.createElement('a'); a.className='floatcta'; a.href=href;
  a.innerHTML='Pedir cita <small>· presencial u online</small> <span aria-hidden="true">→</span>';
  document.body.appendChild(a);
  var near=false, block=document.querySelector('#contacto, #cita');
  if(block&&'IntersectionObserver' in window){ new IntersectionObserver(function(es){near=es[0].isIntersecting; upd();}).observe(block); }
  function upd(){ a.classList.toggle('show',(window.pageYOffset||0)>420&&!near); }
  window.addEventListener('scroll',upd,{passive:true}); upd();
})();

/* ---------- créditos de las fotos provisionales, al pie ---------- */
(function(){
  var f=document.querySelector('footer.site'); if(!f||!window.FOTOS||window.ILUS)return;   // con ilustraciones ya no hay fotos que acreditar
  var li=Object.keys(FOTOS).map(function(k){var x=FOTOS[k];return '<li>'+k+': '+x[0]+' · <a href="'+x[2]+'" rel="noopener">'+x[1]+'</a></li>';}).join('');
  var d=document.createElement('details'); d.className='credits';
  d.innerHTML='<summary>Fotos provisionales (Wikimedia Commons): créditos y licencias</summary><ul>'+li+'</ul>';
  f.insertBefore(d,f.querySelector('.legal'));
})();

/* ---------- banner de cookies (maqueta): se recuerda la elección solo en este navegador ---------- */
(function(){
  var c=document.querySelector('.cookie'); if(!c)return;
  var seen=null; try{seen=sessionStorage.getItem('symploke-cookies');}catch(err){}
  if(seen){c.hidden=true;return;}
  c.addEventListener('click',function(ev){
    var b=ev.target.closest('button'); if(!b)return;
    try{sessionStorage.setItem('symploke-cookies',b.getAttribute('data-c'));}catch(err){}
    c.hidden=true;
  });
})();

/* ---------- #y=1200 abre la página desplazada a esa altura (para revisar) ---------- */
if(/[#&]flat\b/.test(location.hash))document.documentElement.classList.add('flat');   // #flat: portada sin cabecera animada (para revisar)
var HY=/[#&]y=(\d+)/.exec(location.hash);
if(HY)window.addEventListener('load',function(){ document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0,parseInt(HY[1],10)); window.dispatchEvent(new Event('scroll')); });

/* ---------- formularios de la maqueta: no se envían ---------- */
[].forEach.call(document.querySelectorAll('form.form'),function(f){
  f.addEventListener('submit',function(ev){ev.preventDefault(); var m=f.querySelector('.sent'); if(m)m.hidden=false;});
});
})();
