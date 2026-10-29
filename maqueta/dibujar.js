/* Symploké · una ilustración «se dibuja» al entrar: primero se trazan sus líneas y luego aparecen los rellenos.
   Las piezas de Open Peeps son formas rellenas, así que se les pone un contorno provisional que se traza
   y se quita al llenarse. drawIn(svg) arranca la animación; la mancha y el fondo solo aparecen suavemente. */
(function(){
'use strict';
var INK='#0E4A36', LINE_PX=1.6, DRAW=0.85, SPREAD=0.6, FILL=0.4;   // segundos: cada trazo, reparto de los trazos, relleno
var REDUCED=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.drawIn=function(svg){
  if(!svg||REDUCED||!svg.getScreenCTM)return;
  var bg=[].slice.call(svg.querySelectorAll('svg > rect[width="400"], .bg, text'));
  var els=[].slice.call(svg.querySelectorAll('path,circle,ellipse,rect,line,polyline,polygon')).filter(function(el){
    return bg.indexOf(el)<0&&!el.closest('clipPath')&&typeof el.getTotalLength==='function';
  });
  var N=els.length||1, items=[];
  els.forEach(function(el,i){
    var len=0, ctm=el.getScreenCTM(); try{len=el.getTotalLength();}catch(e){}
    if(!len||!ctm)return;
    var cs=getComputedStyle(el), hasStroke=cs.stroke&&cs.stroke!=='none', hasFill=cs.fill&&cs.fill!=='none';
    var sc=Math.hypot(ctm.a,ctm.b)||1, d=(i/N*SPREAD).toFixed(3)+'s';
    var st=el.style;
    if(!hasStroke){st.stroke=INK;st.strokeWidth=(LINE_PX/sc).toFixed(3);st.strokeLinejoin='round';}
    st.strokeDasharray=len.toFixed(1); st.strokeDashoffset=len.toFixed(1);
    if(hasFill)st.fillOpacity='0';
    items.push({el:el,d:d,temp:!hasStroke,fill:hasFill});
  });
  bg.forEach(function(el){el.style.opacity='0';});
  svg.getBoundingClientRect();   // fija el estado inicial antes de animar
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    bg.forEach(function(el){el.style.transition='opacity .9s ease';el.style.opacity='';});
    items.forEach(function(it){
      var st=it.el.style;
      st.transition='stroke-dashoffset '+DRAW+'s cubic-bezier(.45,.05,.3,1) '+it.d+',fill-opacity '+FILL+'s ease '+(SPREAD+DRAW*0.75).toFixed(2)+'s,stroke-opacity '+FILL+'s ease '+(SPREAD+DRAW*0.75).toFixed(2)+'s';
      st.strokeDashoffset='0';
      if(it.fill)st.fillOpacity='';
      if(it.temp)st.strokeOpacity='0';
    });
    setTimeout(function(){   // al terminar, deja el dibujo tal cual era
      items.forEach(function(it){var st=it.el.style;st.transition=st.strokeDasharray=st.strokeDashoffset=st.strokeOpacity=st.fillOpacity='';if(it.temp){st.stroke=st.strokeWidth=st.strokeLinejoin='';}});
      bg.forEach(function(el){el.style.transition='';});
    },(SPREAD+DRAW+FILL+0.3)*1000);
  });});
};
})();
