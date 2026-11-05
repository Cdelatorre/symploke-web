/* Symploké · dibujos para el blog: línea negra, blanco y negro macizo, sin mancha verde.
   Personas: cuerpos de Open Peeps (Pablo Stanley, CC0) cambiados con otros peinados, caras, barbas, gafas y ropa,
   más caras propias (triste, preocupada, pensativa, seria, cansada) y cabezas más grandes para los niños.
   Objetos y escenarios: dibujados aquí con el mismo trazo. Necesita peeps-data.js.
   DIB.list = [[clave, título, para qué entradas], …]; DIB[clave]() devuelve un <svg> de 400×250, como las ilustraciones de la web. */
(function(){
'use strict';
var K='#151515', W='#FFFFFF', GY='#D9D9D9', GROUND=236;

/* ---------- caras propias (en coordenadas de la cara de Open Peeps) ---------- */
var LN=' fill="none" stroke="@@S@@" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"';
var EYES='<ellipse cx="106" cy="132" rx="8" ry="12" fill="@@S@@"/><ellipse cx="222" cy="130" rx="8" ry="12" fill="@@S@@"/>';
var NOSE='<path d="M188 150 q26 6 14 26 q-8 9 -24 3"'+LN+'/>';
var FACES={
  Sad:EYES+NOSE+'<path d="M68 104 Q96 84 128 80 M198 80 Q230 84 256 104 M146 236 Q175 212 206 236"'+LN+'/>',
  Worried:EYES+NOSE+'<path d="M70 102 Q96 84 128 82 M198 82 Q230 84 254 102 M146 228 q15 -10 30 0 q15 10 30 0"'+LN+'/>',
  Pensive:NOSE+'<path d="M90 134 q16 10 32 0 M206 132 q16 10 32 0 M76 94 h48 M200 92 h48 M154 226 h38"'+LN+'/>',
  Serious:EYES+NOSE+'<path d="M72 86 L128 98 M198 98 L252 86 M150 228 h46"'+LN+'/>',
  Tired:NOSE+'<path d="M90 128 h34 M206 126 h34 M78 90 q22 -8 46 0 M200 88 q22 -8 46 0 M158 228 q12 -6 26 0"'+LN+'/><ellipse cx="108" cy="138" rx="7" ry="6" fill="@@S@@"/><ellipse cx="224" cy="136" rx="7" ry="6" fill="@@S@@"/>'
};
/* complementos de la cabeza (en coordenadas de la cabeza) */
var EXTRA={
  headphones:'<path d="M70 330 C60 30 430 10 440 300" fill="none" stroke="@@S@@" stroke-width="40" stroke-linecap="round"/><path d="M70 330 C60 30 430 10 440 300" fill="none" stroke="@@B@@" stroke-width="16" stroke-linecap="round"/><rect x="30" y="290" width="84" height="124" rx="34" fill="@@B@@" stroke="@@S@@" stroke-width="14"/>',
  scarf:''
};

/* ---------- personas ---------- */
function col(s){return s.replace(/@@S@@/g,K).replace(/@@B@@/g,W);}
function head(o){
  var P=window.PEEPS, f=FACES[o.face]||P.face[o.face||'Calm']||'';
  var h='<g transform="translate(225 0)"><g>'+(P.hair[o.hair||'Short']||'')+'</g>'+
    '<g transform="translate(159 186)">'+f+'</g>'+
    (o.beard?'<g transform="translate(123 338)">'+P.facialHair[o.beard]+'</g>':'')+
    (o.glasses?'<g transform="translate(47 241)">'+P.accessories[o.glasses]+'</g>':'')+
    (o.extra?EXTRA[o.extra]:'')+'</g>';
  if(o.kid)h='<g transform="translate(450 420) scale(1.32) translate(-450 -420)">'+h+'</g>';
  return h;
}
var BB={};
function measure(pose){
  if(BB[pose])return BB[pose];
  var NS='http://www.w3.org/2000/svg', s=document.createElementNS(NS,'svg');
  s.setAttribute('width','10');s.setAttribute('height','10');s.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden';
  s.innerHTML='<g>'+col(PEEPS.pose[pose]+head({hair:'Short'}))+'</g>';
  document.body.appendChild(s); var b=s.firstChild.getBBox(); document.body.removeChild(s);
  return (BB[pose]={x:b.x,y:b.y,w:b.width,h:b.height});
}
/* x = centro, y = suelo (o cintura en los bustos), h = altura; flip -1 = mira a la izquierda; op = opacidad */
function peep(o){
  var b=measure(o.pose), sc=o.h/b.h, fl=o.flip||1, y=o.y===undefined?GROUND:o.y;
  return '<g'+(o.op?' opacity="'+o.op+'"':'')+' transform="translate('+o.x+' '+y+') scale('+(fl*sc).toFixed(4)+' '+sc.toFixed(4)+') translate('+(-(b.x+b.w/2)).toFixed(1)+' '+(-(b.y+b.h)).toFixed(1)+')">'+col(PEEPS.pose[o.pose]+head(o))+'</g>';
}
/* dónde cae el trasero de una persona sentada en silla (CrossedLegs) o en asiento bajo (ClosedLeg) */
function seat(o){var low=/ClosedLeg/.test(o.pose), fl=o.flip||1, gy=o.y===undefined?GROUND:o.y;
  return {x:o.x-fl*(low?0.13:0.13)*o.h, y:gy-(low?0.17:0.37)*o.h};}

/* ---------- trazo ---------- */
function st(w){return ' stroke="'+K+'" stroke-width="'+(w||2)+'" stroke-linecap="round" stroke-linejoin="round"';}
function p(d,fill,w){return '<path d="'+d+'" fill="'+(fill||'none')+'"'+st(w)+'/>';}
function r(x,y,w,h,rx,fill,sw){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(rx||0)+'" fill="'+(fill||W)+'"'+st(sw)+'/>';}
function c(x,y,rad,fill,sw){return '<circle cx="'+x+'" cy="'+y+'" r="'+rad+'" fill="'+(fill||W)+'"'+st(sw)+'/>';}
function e(x,y,rx,ry,fill,sw){return '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+(fill||W)+'"'+st(sw)+'/>';}
function svg(body,label){return '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+label+'"><rect width="400" height="250" fill="'+W+'"/>'+body+'</svg>';}
function ground(x1,x2,y){y=y||GROUND;var s='',x=x1;while(x<x2){var l=Math.min(18+((x*7)%23),x2-x);s+='M'+x+' '+y+' h'+l+' ';x+=l+8+((x*3)%9);}return p(s,null,1.8);}
function floor(y){return p('M0 '+(y||GROUND)+' H400',null,2);}
function wallLine(y){return p('M0 '+y+' H400',null,1.4);}

/* ---------- cielo y naturaleza ---------- */
function birds(x,y){return p('M'+x+' '+y+' q4 -5 8 0 q4 -5 8 0 M'+(x+24)+' '+(y+9)+' q3 -4 6 0 q3 -4 6 0',null,1.6);}
function sun(x,y,rad){var s=c(x,y,rad,W,2);for(var i=0;i<8;i++){var a=i*Math.PI/4;s+=p('M'+(x+Math.cos(a)*(rad+5)).toFixed(1)+' '+(y+Math.sin(a)*(rad+5)).toFixed(1)+' L'+(x+Math.cos(a)*(rad+11)).toFixed(1)+' '+(y+Math.sin(a)*(rad+11)).toFixed(1),null,2);}return s;}
function moon(x,y,rad){return p('M'+x+' '+(y-rad)+' A'+rad+' '+rad+' 0 1 0 '+(x+rad*0.9)+' '+(y+rad*0.45)+' A'+(rad*0.8)+' '+(rad*0.8)+' 0 0 1 '+x+' '+(y-rad)+'Z',K,1.6);}
function star(x,y,k){k=k||1;return p('M'+x+' '+(y-5*k)+' V'+(y+5*k)+' M'+(x-5*k)+' '+y+' H'+(x+5*k),null,1.6);}
function stars(list){return list.map(function(s){return star(s[0],s[1],s[2]);}).join('');}
function cloud(x,y,k){k=k||1;return p('M'+(x-30*k)+' '+y+' q-2 -14 14 -14 q4 -14 20 -10 q10 -10 22 0 q14 -2 12 14 q8 4 2 10 Z',W,1.8);}
function rain(x1,x2,y1,y2){var s='';for(var x=x1;x<x2;x+=17)for(var y=y1+((x*7)%23);y<y2;y+=34)s+='M'+x+' '+y+' l-4 9 ';return p(s,null,1.4);}
function tree(x,y,h,rad,bare){
  var cy=y-h-rad*0.5, s='';
  s+=p('M'+(x-5)+' '+y+' C'+(x-4)+' '+(y-h*0.5)+' '+(x-6)+' '+(y-h*0.8)+' '+(x-3)+' '+(cy+rad*0.5)+' L'+(x+4)+' '+(cy+rad*0.5)+' C'+(x+6)+' '+(y-h*0.8)+' '+(x+4)+' '+(y-h*0.5)+' '+(x+6)+' '+y,W,2);
  if(bare){return p('M'+(x-2)+' '+(cy+rad*0.5)+' L'+(x-2)+' '+(cy-rad*0.6)+' M'+x+' '+(y-h*0.4)+' L'+(x+rad*0.8)+' '+(cy-rad*0.1)+' M'+(x+rad*0.4)+' '+(cy+rad*0.3)+' l10 -14 M'+(x-2)+' '+(y-h*0.6)+' L'+(x-rad*0.9)+' '+(cy)+' M'+(x-rad*0.5)+' '+(cy+rad*0.35)+' l-4 -16 M'+(x-2)+' '+(cy-rad*0.1)+' l-14 -12 M'+(x-2)+' '+(cy+rad*0.1)+' l16 -18',null,2.6)+s;}
  s+=p('M'+x+' '+(y-h*0.6)+' l14 -16 M'+(x-1)+' '+(y-h*0.75)+' l-12 -12',null,1.8);
  var n=9, d='';
  for(var i=0;i<=n;i++){var a=Math.PI*2*i/n, rr=rad*(0.86+0.14*((i*5)%3)/2), px=x+Math.cos(a)*rr*1.15, py=cy+Math.sin(a)*rr*0.9;
    if(i===0)d='M'+px.toFixed(1)+' '+py.toFixed(1);else{var am=Math.PI*2*(i-0.5)/n;d+=' Q'+(x+Math.cos(am)*rr*1.45).toFixed(1)+' '+(cy+Math.sin(am)*rr*1.15).toFixed(1)+' '+px.toFixed(1)+' '+py.toFixed(1);}}
  s+=p(d+'Z',W,2);
  for(var j=0;j<6;j++){var b=j*1.1+0.4, lx=x+Math.cos(b)*rad*0.6, ly=cy+Math.sin(b)*rad*0.5;s+=p('M'+lx.toFixed(1)+' '+ly.toFixed(1)+' q4 -5 9 -2',null,1.5);}
  return s;
}
function pine(x,y,h){var w=h*0.32;return p('M'+x+' '+y+' V'+(y-h*0.2),null,3)+p('M'+x+' '+(y-h)+' L'+(x+w)+' '+(y-h*0.2)+' H'+(x-w)+'Z',K,2)+p('M'+(x-w*0.45)+' '+(y-h*0.45)+' l'+(w*0.35)+' -6 M'+(x+w*0.1)+' '+(y-h*0.6)+' l'+(w*0.3)+' -5',null,1.4).replace(K+'" stroke-width="1.4"',W+'" stroke-width="1.4"');}
function bush(x,y,w){
  var h=w*0.45, d='M'+(x-w/2)+' '+y+' Q'+(x-w/2-4)+' '+(y-h*0.7)+' '+(x-w*0.25)+' '+(y-h*0.75)+' Q'+(x-w*0.2)+' '+(y-h*1.15)+' '+x+' '+(y-h)+' Q'+(x+w*0.25)+' '+(y-h*1.15)+' '+(x+w*0.28)+' '+(y-h*0.7)+' Q'+(x+w/2+4)+' '+(y-h*0.65)+' '+(x+w/2)+' '+y+'Z';
  return p(d,W,2)+p('M'+(x-w*0.2)+' '+(y-h*0.45)+' q4 -4 8 -1 M'+(x+w*0.1)+' '+(y-h*0.6)+' q4 -4 8 -1',null,1.5);
}
function grass(x,y){return p('M'+x+' '+y+' l-3 -9 M'+(x+4)+' '+y+' l1 -12 M'+(x+8)+' '+y+' l4 -8',null,1.5);}
function mountains(y){return p('M0 '+y+' L70 '+(y-70)+' L105 '+(y-38)+' L170 '+(y-110)+' L250 '+(y-20)+' L300 '+(y-62)+' L400 '+(y+6),W,2)+p('M160 '+(y-98)+' l10 -12 l14 16 l-8 -2 l-6 6 z M62 '+(y-62)+' l8 -8 l9 10 l-6 -1z',K,1.4);}
function sea(y){var s='M0 '+y+' H400',d='';for(var x=10;x<390;x+=46)d+='M'+x+' '+(y+12+((x*3)%10))+' q6 -5 12 0 q6 5 12 0 ';return p(s,null,2)+p(d,null,1.5);}
function flowers(x,y){var s='';[[-8,-16],[0,-22],[9,-15]].forEach(function(f){s+=p('M'+x+' '+y+' L'+(x+f[0])+' '+(y+f[1]),null,1.5)+c(x+f[0],y+f[1]-3,3.5,K,1.2);});return s;}
function leaves(list){return list.map(function(l){return p('M'+l[0]+' '+l[1]+' q5 -6 11 -1 q-5 6 -11 1z',W,1.4);}).join('');}

/* ---------- calle ---------- */
function lamp(x,y,h){
  return p('M'+x+' '+y+' V'+(y-h),null,3)+p('M'+(x-7)+' '+y+' h14',null,3)+
    p('M'+(x-9)+' '+(y-h)+' L'+(x-6)+' '+(y-h-16)+' H'+(x+6)+' L'+(x+9)+' '+(y-h)+'Z',K,2)+p('M'+(x-11)+' '+(y-h)+' h22',null,2.4);
}
function busStop(x,y){return p('M'+x+' '+y+' V'+(y-170),null,3)+c(x,y-180,16,W,2)+p('M'+(x-7)+' '+(y-186)+' v12 M'+(x-7)+' '+(y-186)+' h6 q5 0 5 3 q0 3 -5 3 h-6 M'+(x-7)+' '+(y-180)+' h7 q5 0 5 3 q0 3 -5 3 h-7',null,1.8)+r(x-14,y-150,28,40,2,W,2)+p('M'+(x-8)+' '+(y-140)+' h16 M'+(x-8)+' '+(y-132)+' h16 M'+(x-8)+' '+(y-124)+' h10',null,1.4);}
function building(x,y,w,h){var s=r(x,y-h,w,h,0,W,2);for(var yy=y-h+14;yy<y-30;yy+=28)for(var xx=x+10;xx<x+w-16;xx+=24)s+=r(xx,yy,12,16,1,W,1.6);return s;}
function door(x,y,w,h,open){return r(x,y-h,w,h,2,W,2)+c(x+w-8,y-h/2,2.2,K,1)+(open?p('M'+(x+w)+' '+(y-h)+' l14 8 v'+(h-6)+' l-14 -2',W,2):'');}
function steps(x,y,w,n,sh){var s='';for(var i=0;i<n;i++)s+=r(x+i*6,y-(i+1)*sh,w-i*12,sh,0,W,2);return s;}
function umbrella(x,y,w,beach){return p('M'+(x-w/2)+' '+y+' Q'+x+' '+(y-w*0.6)+' '+(x+w/2)+' '+y+' q-'+(w/8)+' -6 -'+(w/4)+' 0 q-'+(w/8)+' -6 -'+(w/4)+' 0 q-'+(w/8)+' -6 -'+(w/4)+' 0 q-'+(w/8)+' -6 -'+(w/4)+' 0z',K,2)+(beach?'':p('M'+x+' '+(y-w*0.3)+' V'+(y+w*0.55)+' q0 7 -6 7 q-5 0 -5 -5',null,2.2));}
function puddle(x,y,w){return e(x,y,w,3,W,1.6);}
function bicycle(x,y,k){k=k||1;var rw=20*k;return c(x-30*k,y-rw,rw,'none',2.2)+c(x+30*k,y-rw,rw,'none',2.2)+p('M'+(x-30*k)+' '+(y-rw)+' L'+(x-6*k)+' '+(y-rw)+' L'+(x+16*k)+' '+(y-rw-26*k)+' L'+(x-14*k)+' '+(y-rw-26*k)+' Z M'+(x+16*k)+' '+(y-rw-26*k)+' L'+(x+30*k)+' '+(y-rw)+' M'+(x+16*k)+' '+(y-rw-26*k)+' l-3 -10 h10 M'+(x-14*k)+' '+(y-rw-26*k)+' l-4 -8 M'+(x-24*k)+' '+(y-rw-34*k)+' h14',null,2.2);}
function suitcase(x,y){return r(x-16,y-44,32,44,4,K,2)+p('M'+(x-6)+' '+(y-44)+' v-8 h12 v8',null,2.4)+p('M'+(x-8)+' '+(y-36)+' v28 M'+(x+8)+' '+(y-36)+' v28',null,1.4).replace(K+'" stroke-width="1.4"',W+'" stroke-width="1.4"')+c(x-10,y+2,3,W,1.6)+c(x+10,y+2,3,W,1.6);}
function stationClock(x,y){return p('M'+x+' '+(y+24)+' V'+(y+90),null,3)+c(x,y,22,W,2.2)+p('M'+x+' '+y+' V'+(y-14)+' M'+x+' '+y+' l10 6',null,2.2)+c(x,y,2,K,1);}
function parkBench(x1,x2,seatY,gy){
  var s='';
  s+=r(x1+6,seatY-44,x2-x1-12,8,2,W,2)+r(x1+6,seatY-30,x2-x1-12,8,2,W,2);
  s+=p('M'+(x1+20)+' '+(seatY-48)+' V'+seatY+' M'+(x2-20)+' '+(seatY-48)+' V'+seatY,null,3.2);
  s+=r(x1,seatY,x2-x1,7,2,W,2);
  s+=p('M'+(x1+20)+' '+(seatY+7)+' L'+(x1+16)+' '+gy+' M'+(x2-20)+' '+(seatY+7)+' L'+(x2-16)+' '+gy,null,3.2);
  s+=p('M'+(x1+13)+' '+gy+' h8 M'+(x2-21)+' '+gy+' h8',null,3.2);
  return s;
}
function railing(x1,x2,y,h){var s=p('M'+x1+' '+(y-h)+' H'+x2+' M'+x1+' '+(y-h+8)+' H'+x2,null,2.4);for(var x=x1+6;x<x2;x+=22)s+=p('M'+x+' '+(y-h)+' V'+y,null,2.2);return s;}

/* ---------- dentro de casa ---------- */
function bag(x,y){return p('M'+(x-11)+' '+y+' L'+(x-9)+' '+(y-16)+' H'+(x+9)+' L'+(x+11)+' '+y+'Z',K,2)+p('M'+(x-5)+' '+(y-16)+' C'+(x-5)+' '+(y-27)+' '+(x+5)+' '+(y-27)+' '+(x+5)+' '+(y-16),null,1.8);}
function cupOn(x,y){return p('M'+(x-4)+' '+(y-14)+' H'+(x+4)+' L'+(x+3)+' '+y+' H'+(x-3)+'Z',W,1.6)+p('M'+(x-5)+' '+(y-14)+' h10 v-3 h-10z',K,1.4)+p('M'+(x-3.5)+' '+(y-9)+' h7',null,1.2);}
function mug(x,y,steam){return r(x-6,y-12,12,12,2,W,1.8)+p('M'+(x+6)+' '+(y-9)+' q5 0 5 4 q0 4 -5 4',null,1.6)+(steam?p('M'+(x-2)+' '+(y-16)+' q-3 -4 0 -8 M'+(x+3)+' '+(y-16)+' q-3 -4 0 -8',null,1.4):'');}
function glass(x,y){return p('M'+(x-5)+' '+(y-16)+' L'+(x-4)+' '+y+' H'+(x+4)+' L'+(x+5)+' '+(y-16),W,1.6)+p('M'+(x-4.5)+' '+(y-9)+' h9',null,1.2);}
function plate(x,y){return e(x,y-2,15,4,W,1.8)+p('M'+(x-7)+' '+(y-5)+' q7 -9 14 0',W,1.6);}
function tissues(x,y){return r(x-11,y-11,22,11,1.5,W,1.6)+p('M'+(x-3)+' '+(y-11)+' q2 -9 6 -6 q-1 3 1 6',W,1.4);}
function books(x,y,n){var s='',hh=0;for(var i=0;i<n;i++){var w=34-((i*7)%10),h=6+(i%2)*2;s+=r(x-w/2+((i*5)%7)-3,y-hh-h,w,h,1,i%2?K:W,1.6);hh+=h;}return s;}
function openBook(x,y,w){w=w||30;return p('M'+x+' '+y+' Q'+(x-w*0.5)+' '+(y-8)+' '+(x-w)+' '+(y-2)+' V'+(y-16)+' Q'+(x-w*0.5)+' '+(y-22)+' '+x+' '+(y-14)+' Q'+(x+w*0.5)+' '+(y-22)+' '+(x+w)+' '+(y-16)+' V'+(y-2)+' Q'+(x+w*0.5)+' '+(y-8)+' '+x+' '+y+'Z M'+x+' '+y+' V'+(y-14),W,1.6)+p('M'+(x-w*0.8)+' '+(y-12)+' q'+(w*0.3)+' -4 '+(w*0.6)+' 0 M'+(x+w*0.2)+' '+(y-12)+' q'+(w*0.3)+' -4 '+(w*0.6)+' 0',null,1);}
function notebookPen(x,y){return r(x-14,y-5,28,5,1,W,1.6)+p('M'+(x+8)+' '+(y-7)+' l18 -6',null,2.2);}
function pottedPlant(x,y,k){
  k=k||1; var s='';
  function leaf(a,len){var ex=x+Math.cos(a)*len*k, ey=y-24*k+Math.sin(a)*len*k, mx=x+Math.cos(a)*len*0.5*k, my=y-24*k+Math.sin(a)*len*0.5*k, nx=-Math.sin(a)*9*k, ny=Math.cos(a)*9*k;
    return p('M'+x+' '+(y-24*k)+' Q'+(mx+nx).toFixed(1)+' '+(my+ny).toFixed(1)+' '+ex.toFixed(1)+' '+ey.toFixed(1)+' Q'+(mx-nx).toFixed(1)+' '+(my-ny).toFixed(1)+' '+x+' '+(y-24*k)+'Z',W,1.8)+p('M'+x+' '+(y-24*k)+' L'+(mx+(ex-mx)*0.6).toFixed(1)+' '+(my+(ey-my)*0.6).toFixed(1),null,1.2);}
  [-2.6,-2.2,-1.85,-1.57,-1.25,-0.9,-0.5].forEach(function(a,i){s+=leaf(a,40+((i*13)%17));});
  s+=p('M'+(x-14*k)+' '+(y-26*k)+' H'+(x+14*k)+' L'+(x+11*k)+' '+y+' H'+(x-11*k)+'Z',K,2);
  return s;
}
function cactus(x,y){return p('M'+(x-5)+' '+(y-12)+' V'+(y-34)+' q5 -8 10 0 V'+(y-12)+' M'+(x+5)+' '+(y-24)+' h5 v-6',W,1.6)+p('M'+(x-9)+' '+(y-12)+' h18 l-3 12 h-12z',K,1.6);}
function hangingLamp(x,y,len){return p('M'+x+' 0 V'+len,null,1.6)+p('M'+(x-18)+' '+(len+16)+' Q'+x+' '+(len-8)+' '+(x+18)+' '+(len+16)+'Z',K,2);}
function floorLamp(x,y,h){
  return p('M'+x+' '+y+' V'+(y-h),null,2.4)+p('M'+(x-12)+' '+y+' Q'+x+' '+(y-6)+' '+(x+12)+' '+y,null,2.4)+
    p('M'+(x-16)+' '+(y-h)+' L'+(x-10)+' '+(y-h-26)+' H'+(x+10)+' L'+(x+16)+' '+(y-h)+'Z',W,2);
}
function deskLamp(x,y,dir){dir=dir||1;return p('M'+(x-10)+' '+y+' h20 M'+x+' '+y+' l'+(dir*10)+' -26 l'+(-dir*14)+' -16',null,2.4)+p('M'+(x-dir*4)+' '+(y-42)+' l'+(-dir*18)+' 6 l'+(dir*4)+' 12z',K,2);}
function frame(x,y,w,h){
  return r(x,y,w,h,1,W,2)+p('M'+(x+5)+' '+(y+h-5)+' L'+(x+w*0.38)+' '+(y+h*0.4)+' L'+(x+w*0.55)+' '+(y+h*0.62)+' L'+(x+w*0.7)+' '+(y+h*0.48)+' L'+(x+w-5)+' '+(y+h-5)+'Z',K,1.4)+'<circle cx="'+(x+w*0.75)+'" cy="'+(y+h*0.28)+'" r="3" fill="none"'+st(1.4)+'/>';
}
function drawing(x,y,w,h,kind){var s=r(x,y,w,h,0,W,1.6);if(kind==='house')s+=p('M'+(x+w*0.25)+' '+(y+h*0.85)+' V'+(y+h*0.5)+' L'+(x+w*0.5)+' '+(y+h*0.25)+' L'+(x+w*0.75)+' '+(y+h*0.5)+' V'+(y+h*0.85)+'Z',null,1.4);else s+=c(x+w/2,y+h*0.42,h*0.2,'none',1.4)+p('M'+(x+w/2)+' '+(y+h*0.62)+' v'+(h*0.2)+' M'+(x+w*0.3)+' '+(y+h*0.7)+' h'+(w*0.4),null,1.4);return s;}
function wallClock(x,y,rad,hh){hh=hh||0;var a=hh/12*Math.PI*2-Math.PI/2;return c(x,y,rad,W,2)+p('M'+x+' '+y+' L'+(x+Math.cos(a)*rad*0.5).toFixed(1)+' '+(y+Math.sin(a)*rad*0.5).toFixed(1)+' M'+x+' '+y+' V'+(y-rad*0.75),null,2)+c(x,y,1.6,K,1);}
function windowBox(x,y,w,h,inside){return r(x,y,w,h,1,W,2.2)+(inside||'')+p('M'+(x+w/2)+' '+y+' V'+(y+h)+' M'+x+' '+(y+h/2)+' H'+(x+w),null,2)+r(x-5,y+h,w+10,5,1,W,2);}
function curtains(x,y,w,h){return p('M'+(x-12)+' '+(y-8)+' H'+(x+w+12),null,2.4)+p('M'+(x-10)+' '+(y-6)+' q8 '+(h*0.5)+' 0 '+(h+12)+' h16 q-12 -'+(h*0.4)+' 4 -'+(h+12)+'Z M'+(x+w+10)+' '+(y-6)+' q-8 '+(h*0.5)+' 0 '+(h+12)+' h-16 q12 -'+(h*0.4)+' -4 -'+(h+12)+'Z',W,1.8);}
function bookshelf(x,y,w,h){var s=r(x,y-h,w,h,0,W,2.2),rows=Math.floor(h/36);for(var i=1;i<=rows;i++){var yy=y-h+i*(h/rows);s+=p('M'+x+' '+yy+' H'+(x+w),null,2);var xx=x+5,j=0;while(xx<x+w-10){var bw=6+((i*3+j*5)%5),bh=(h/rows)-8-((j*7)%9);s+=r(xx,yy-bh,bw,bh,0.5,(i+j)%3===0?K:W,1.4);xx+=bw+1+((j%4===3)?6:0);j++;}}return s;}
function rug(x,y,w){return e(x,y,w,7,W,1.6)+e(x,y,w*0.75,4.5,'none',1.2);}
function sideTable(x,topY,gy){return r(x-20,topY,40,6,2,W,2)+p('M'+(x-14)+' '+(topY+6)+' L'+(x-17)+' '+gy+' M'+(x+14)+' '+(topY+6)+' L'+(x+17)+' '+gy,null,2.6);}
function tableSide(x1,x2,topY,gy){return r(x1,topY,x2-x1,6,1.5,W,2)+p('M'+(x1+8)+' '+(topY+6)+' V'+gy+' M'+(x2-8)+' '+(topY+6)+' V'+gy,null,3);}
/* mesa vista de frente: se dibuja DESPUÉS de los bustos para taparles la cintura */
function tableFront(x1,x2,topY,gy,cloth){return (cloth?p('M'+(x1-4)+' '+topY+' H'+(x2+4)+' L'+(x2+8)+' '+(topY+34)+' q-'+((x2-x1)/8)+' 6 -'+((x2-x1)/4)+' 0 q-'+((x2-x1)/8)+' 6 -'+((x2-x1)/4)+' 0 q-'+((x2-x1)/8)+' 6 -'+((x2-x1)/4)+' 0 q-'+((x2-x1)/8)+' 6 -'+((x2-x1)/4+16)+' 0Z',W,2):r(x1,topY,x2-x1,9,2,W,2))+p('M'+(x1+12)+' '+(topY+(cloth?34:9))+' V'+gy+' M'+(x2-12)+' '+(topY+(cloth?34:9))+' V'+gy,null,3.2);}
function roundTable(x,topY,gy,w){return e(x,topY,w,6,W,2)+p('M'+x+' '+(topY+6)+' V'+(gy-4)+' M'+(x-16)+' '+gy+' Q'+x+' '+(gy-8)+' '+(x+16)+' '+gy,null,3);}
function chairSide(x,seatY,gy,back){return r(x-18,seatY,36,6,1.5,W,2)+p('M'+(x-14)+' '+(seatY+6)+' V'+gy+' M'+(x+14)+' '+(seatY+6)+' V'+gy+' M'+(x+back*17)+' '+seatY+' V'+(seatY-48),null,2.8)+p('M'+(x+back*17)+' '+(seatY-44)+' v14',null,6);}
function armchair(x,seatY,gy,back,w){
  w=w||64; var s='', bx=x+back*w/2, h=seatY-62;
  s+=p('M'+(bx-back*4)+' '+(seatY+4)+' L'+(bx-back*2)+' '+(h+10)+' Q'+(bx)+' '+h+' '+(bx+back*10)+' '+h+' Q'+(bx+back*18)+' '+h+' '+(bx+back*18)+' '+(h+12)+' L'+(bx+back*16)+' '+(seatY+24)+' Z',W,2);
  s+=p('M'+(x-w/2)+' '+(seatY)+' Q'+(x-w/2)+' '+(seatY-6)+' '+(x-w/2+8)+' '+(seatY-6)+' H'+(x+w/2-8)+' Q'+(x+w/2)+' '+(seatY-6)+' '+(x+w/2)+' '+seatY+' V'+(seatY+24)+' H'+(x-w/2)+'Z',W,2);
  var ax=x-back*w/2;
  s+=p('M'+(ax-back*10)+' '+(seatY+24)+' V'+(seatY-16)+' Q'+(ax-back*10)+' '+(seatY-24)+' '+(ax)+' '+(seatY-24)+' Q'+(ax+back*10)+' '+(seatY-24)+' '+(ax+back*10)+' '+(seatY-16)+' V'+(seatY+24)+'Z',W,2);
  s+=p('M'+(x-w/2+2)+' '+(seatY+24)+' L'+(x-w/2)+' '+gy+' M'+(x+w/2+back*14)+' '+(seatY+24)+' L'+(x+w/2+back*16)+' '+gy,null,3);
  return s;
}
function sofa(x1,x2,seatY,gy){
  var s='';
  s+=p('M'+(x1+6)+' '+(seatY)+' V'+(seatY-48)+' Q'+(x1+6)+' '+(seatY-58)+' '+(x1+18)+' '+(seatY-58)+' H'+(x2-18)+' Q'+(x2-6)+' '+(seatY-58)+' '+(x2-6)+' '+(seatY-48)+' V'+seatY+'Z',W,2);
  var m=(x1+x2)/2; s+=p('M'+m+' '+(seatY-54)+' V'+(seatY-4),null,1.6);
  s+=r(x1+10,seatY-4,x2-x1-20,20,5,W,2);
  s+=p('M'+(x1-6)+' '+(seatY+20)+' V'+(seatY-26)+' Q'+(x1-6)+' '+(seatY-34)+' '+(x1+5)+' '+(seatY-34)+' Q'+(x1+16)+' '+(seatY-34)+' '+(x1+16)+' '+(seatY-26)+' V'+(seatY+20)+'Z',W,2);
  s+=p('M'+(x2+6)+' '+(seatY+20)+' V'+(seatY-26)+' Q'+(x2+6)+' '+(seatY-34)+' '+(x2-5)+' '+(seatY-34)+' Q'+(x2-16)+' '+(seatY-34)+' '+(x2-16)+' '+(seatY-26)+' V'+(seatY+20)+'Z',W,2);
  s+=p('M'+(x1+2)+' '+(seatY+20)+' L'+x1+' '+gy+' M'+(x2-2)+' '+(seatY+20)+' L'+x2+' '+gy,null,3);
  return s;
}
/* sofá visto de frente, en dos capas: back (detrás de los bustos) y front (delante) */
function sofaBack(x1,x2,topY){return p('M'+x1+' '+(topY+70)+' V'+(topY+10)+' Q'+x1+' '+topY+' '+(x1+12)+' '+topY+' H'+(x2-12)+' Q'+x2+' '+topY+' '+x2+' '+(topY+10)+' V'+(topY+70)+'Z',W,2)+p('M'+((x1+x2)/2)+' '+(topY+4)+' V'+(topY+66),null,1.6);}
function sofaFront(x1,x2,seatY,gy){return r(x1+4,seatY,x2-x1-8,24,5,W,2)+p('M'+((x1+x2)/2)+' '+(seatY+3)+' V'+(seatY+21),null,1.4)+
  p('M'+(x1-14)+' '+(seatY+34)+' V'+(seatY-26)+' Q'+(x1-14)+' '+(seatY-36)+' '+(x1-2)+' '+(seatY-36)+' Q'+(x1+10)+' '+(seatY-36)+' '+(x1+10)+' '+(seatY-26)+' V'+(seatY+34)+'Z',W,2)+
  p('M'+(x2+14)+' '+(seatY+34)+' V'+(seatY-26)+' Q'+(x2+14)+' '+(seatY-36)+' '+(x2+2)+' '+(seatY-36)+' Q'+(x2-10)+' '+(seatY-36)+' '+(x2-10)+' '+(seatY-26)+' V'+(seatY+34)+'Z',W,2)+
  r(x1-14,seatY+24,x2-x1+28,10,2,W,2)+p('M'+(x1-6)+' '+(seatY+34)+' L'+(x1-8)+' '+gy+' M'+(x2+6)+' '+(seatY+34)+' L'+(x2+8)+' '+gy,null,3);}
function bed(x1,x2,topY,gy,blanketY){return p('M'+x1+' '+gy+' V'+(topY-50)+' Q'+x1+' '+(topY-60)+' '+(x1+10)+' '+(topY-60)+' Q'+(x1+20)+' '+(topY-60)+' '+(x1+20)+' '+(topY-50)+' V'+topY,W,2.2)+r(x1+20,topY,x2-x1-20,22,3,W,2)+p('M'+x2+' '+(topY+22)+' V'+gy+' M'+(x1+26)+' '+(topY+22)+' V'+gy,null,3);}
function nightstand(x,gy,hh){return r(x-18,gy-44,36,44,2,W,2)+p('M'+(x-18)+' '+(gy-22)+' h36',null,1.6)+c(x,gy-30,1.8,K,1)+r(x-12,gy-62,24,18,3,W,1.8)+'<text x="'+x+'" y="'+(gy-49)+'" font-family="DM Sans,Arial" font-size="9" font-weight="700" text-anchor="middle" fill="'+K+'">'+(hh||'3:07')+'</text>';}
function counter(x1,x2,topY,gy){var s=r(x1,topY,x2-x1,gy-topY,0,W,2)+r(x1-4,topY-6,x2-x1+8,7,1,K,2);for(var x=x1;x<x2-10;x+=50){s+=r(x+4,topY+10,42,gy-topY-18,2,W,1.6)+p('M'+(x+18)+' '+(topY+18)+' h14',null,2.4);}return s;}
function pot(x,y){return r(x-16,y-18,32,18,3,K,2)+p('M'+(x-22)+' '+(y-14)+' h6 M'+(x+16)+' '+(y-14)+' h6 M'+(x-18)+' '+(y-18)+' h36',null,2.4)+p('M'+(x-6)+' '+(y-24)+' q-4 -6 0 -12 q4 -6 0 -12 M'+(x+5)+' '+(y-24)+' q-4 -6 0 -12 q4 -6 0 -12',null,1.6);}
function shelfJars(x1,x2,y){var s=p('M'+x1+' '+y+' H'+x2,null,2.4);for(var x=x1+8;x<x2-14;x+=26)s+=r(x,y-20,14,20,3,(x/26|0)%2?K:W,1.6)+r(x-1,y-24,16,4,1,W,1.4);return s;}
function mirror(x,y,w,h,inside){return p('M'+x+' '+(y+h)+' V'+(y+w/2)+' A'+(w/2)+' '+(w/2)+' 0 0 1 '+(x+w)+' '+(y+w/2)+' V'+(y+h)+'Z',W,3)+(inside||'')+p('M'+(x+w*0.25)+' '+(y+30)+' l14 -14 M'+(x+w*0.25)+' '+(y+44)+' l24 -24',null,1.4)+p('M'+(x+6)+' '+(y+h)+' l-6 10 M'+(x+w-6)+' '+(y+h)+' l6 10',null,2.4);}
function box(x,y,w,h,open){return r(x,y-h,w,h,1,W,2)+p('M'+x+' '+(y-h)+' l'+(w*0.5)+' 0 M'+(x+w*0.5)+' '+(y-h)+' v'+(h*0.3),null,1.4)+(open?p('M'+x+' '+(y-h)+' l-8 -10 M'+(x+w)+' '+(y-h)+' l8 -10',null,2):p('M'+(x+w*0.3)+' '+(y-h)+' h'+(w*0.4),null,4));}
function laptopBack(x,y,w){w=w||46;return p('M'+(x-w/2)+' '+y+' L'+(x-w/2+3)+' '+(y-w*0.62)+' H'+(x+w/2-3)+' L'+(x+w/2)+' '+y+'Z',W,2)+c(x,y-w*0.32,3,K,1)+r(x-w/2-6,y,w+12,4,1,K,1.6);}
function laptopSide(x,y,dir){return p('M'+x+' '+y+' h'+(dir*36)+' M'+x+' '+y+' l'+(-dir*8)+' -28',null,3);}
function monitor(x,y,w,h,inside){return r(x-w/2,y-h,w,h,4,W,2.2)+(inside||'')+p('M'+x+' '+y+' v12 M'+(x-14)+' '+(y+12)+' h28',null,3);}
function phoneGlow(x,y){return p('M'+(x-14)+' '+(y-10)+' l-8 -6 M'+(x)+' '+(y-16)+' v-9 M'+(x+14)+' '+(y-10)+' l8 -6',null,1.6);}
function whiteboard(x,y,w,h,kind){var s=r(x,y,w,h,2,W,2.2)+p('M'+(x+w*0.2)+' '+(y+h)+' l-10 '+(GROUND-y-h)+' M'+(x+w*0.8)+' '+(y+h)+' l10 '+(GROUND-y-h),null,2.6);
  if(kind==='chart')s+=r(x+14,y+h-36,12,26,0,K,1.6)+r(x+32,y+h-50,12,40,0,W,1.6)+r(x+50,y+h-62,12,52,0,K,1.6)+p('M'+(x+70)+' '+(y+h-14)+' l14 -20 l12 8 l16 -26',null,2);
  else if(kind==='heart')s+=p('M'+(x+w/2)+' '+(y+h*0.78)+' C'+(x+w*0.2)+' '+(y+h*0.5)+' '+(x+w*0.3)+' '+(y+h*0.15)+' '+(x+w/2)+' '+(y+h*0.35)+' C'+(x+w*0.7)+' '+(y+h*0.15)+' '+(x+w*0.8)+' '+(y+h*0.5)+' '+(x+w/2)+' '+(y+h*0.78)+'Z',null,2.2)+p('M'+(x+12)+' '+(y+14)+' h30 M'+(x+12)+' '+(y+24)+' h20',null,1.6);
  else s+=p('M'+(x+12)+' '+(y+16)+' h'+(w*0.5)+' M'+(x+12)+' '+(y+28)+' h'+(w*0.35)+' M'+(x+12)+' '+(y+40)+' h'+(w*0.6),null,1.8)+c(x+w-26,y+h-24,10,'none',1.8);
  return s;}
function blocks(x,y){return r(x,y-12,12,12,1,W,1.6)+r(x+13,y-12,12,12,1,K,1.6)+r(x+6,y-24,12,12,1,W,1.6)+p('M'+(x+9)+' '+(y-21)+' h6 v6',null,1.2);}
function ball(x,y,rad){rad=rad||9;return c(x,y-rad,rad,W,1.8)+p('M'+(x-rad)+' '+(y-rad)+' Q'+x+' '+(y-rad*1.6)+' '+(x+rad)+' '+(y-rad)+' M'+x+' '+(y-rad*2)+' V'+y,null,1.4);}
function toyCar(x,y){return p('M'+(x-14)+' '+(y-5)+' v-6 h8 l4 -6 h10 l4 6 h2 v6z',W,1.6)+c(x-8,y-3,3,K,1)+c(x+6,y-3,3,K,1);}
function crayons(x,y){return p('M'+x+' '+y+' l16 -4 M'+(x+2)+' '+(y+4)+' l16 -2',null,2.6);}
function paperSheet(x,y){return p('M'+(x-14)+' '+y+' l4 -10 h26 l-4 10z',W,1.4)+p('M'+(x-4)+' '+(y-5)+' q5 -4 9 0',null,1.2);}
function blanket(x1,x2,y){return p('M'+x1+' '+y+' L'+(x1+16)+' '+(y-12)+' H'+(x2-10)+' L'+x2+' '+y+'Z',W,2)+p('M'+(x1+30)+' '+(y-12)+' l-10 12 M'+(x1+60)+' '+(y-12)+' l-8 12 M'+(x2-40)+' '+(y-12)+' l6 12',null,1.4);}
function basket(x,y){return p('M'+(x-16)+' '+(y-14)+' h32 l-4 14 h-24z',K,1.8)+p('M'+(x-10)+' '+(y-14)+' q10 -16 20 0',null,2);}
function cake(x,y){return r(x-18,y-18,36,18,3,W,2)+p('M'+(x-18)+' '+(y-10)+' q4.5 4 9 0 q4.5 4 9 0 q4.5 4 9 0 q4.5 4 9 0',null,1.6)+p('M'+(x-8)+' '+(y-18)+' v-8 M'+x+' '+(y-18)+' v-8 M'+(x+8)+' '+(y-18)+' v-8',null,2)+p('M'+(x-8)+' '+(y-30)+' q-2 -3 0 -5 q2 2 0 5 M'+x+' '+(y-30)+' q-2 -3 0 -5 q2 2 0 5 M'+(x+8)+' '+(y-30)+' q-2 -3 0 -5 q2 2 0 5',K,1.2);}
function balloon(x,y,fill){return e(x,y,11,14,fill||W,2)+p('M'+x+' '+(y+14)+' l-2 4 h4z M'+x+' '+(y+18)+' q-5 14 2 26 q6 12 -2 22',null,1.2);}
function garland(x1,x2,y){var s=p('M'+x1+' '+y+' Q'+((x1+x2)/2)+' '+(y+22)+' '+x2+' '+y,null,1.4),n=7;for(var i=1;i<n;i++){var t=i/n,x=x1+(x2-x1)*t,yy=y+22*2*t*(1-t)*1;s+=p('M'+(x-6)+' '+(yy)+' L'+x+' '+(yy+12)+' L'+(x+6)+' '+yy+'Z',i%2?K:W,1.4);}return s;}
function candle(x,y){return r(x-4,y-16,8,16,1,W,1.6)+p('M'+x+' '+(y-16)+' v-3 M'+x+' '+(y-22)+' q-3 -4 0 -8 q3 4 0 8',K,1.2);}
function mat(x1,x2,y){return p('M'+x1+' '+y+' L'+(x1+10)+' '+(y-8)+' H'+(x2+10)+' L'+x2+' '+y+'Z',K,1.8);}
function wateringCan(x,y){return p('M'+(x-12)+' '+y+' V'+(y-16)+' H'+(x+8)+' V'+y+'Z',W,1.8)+p('M'+(x+8)+' '+(y-12)+' l14 -10 M'+(x-12)+' '+(y-14)+' q-8 4 0 12 M'+(x-8)+' '+(y-16)+' q8 -10 16 0',null,1.8);}
function raisedBed(x1,x2,y){var s=r(x1,y-26,x2-x1,26,1,W,2)+p('M'+x1+' '+(y-13)+' H'+x2,null,1.4);for(var x=x1+12;x<x2-6;x+=20)s+=p('M'+x+' '+(y-26)+' q-6 -12 0 -20 q6 8 0 20 M'+x+' '+(y-26)+' q8 -8 10 -16',W,1.6);return s;}
function guitar(x,y){return p('M'+x+' '+y+' q-16 0 -16 -14 q0 -8 6 -12 q-4 -8 2 -14 q6 -6 14 0 q6 -6 12 0 q6 6 2 14 q6 4 6 12 q0 14 -16 14z',W,1.8)+c(x+1,y-18,4,K,1)+p('M'+(x+1)+' '+(y-34)+' V'+(y-80),null,3)+r(x-3,y-90,8,10,1,K,1.4);}

/* ---------- animales ---------- */
function dog(x,y,k,dir){k=k||1;dir=dir||1;var g='<g transform="translate('+x+' '+y+') scale('+(dir*k)+' '+k+')">';
  g+=p('M-26 -22 Q-28 -36 -10 -36 H14 Q22 -36 24 -42 L26 -50 Q30 -60 40 -56 L46 -52 Q50 -46 44 -42 L38 -40 Q32 -30 28 -22 Z',W,2);
  g+=p('M30 -58 q-6 2 -4 14 q6 -2 8 -10z',K,1.6)+c(38,-50,1.6,K,1)+c(47,-50,2,K,1);
  g+=p('M-20 -24 V0 M-12 -24 V0 M16 -24 V0 M24 -24 V0',null,3)+p('M-26 -32 q-10 -4 -12 -14',null,2.4);
  return g+'</g>';}
function dogLying(x,y,k,dir){k=k||1;dir=dir||1;var g='<g transform="translate('+x+' '+y+') scale('+(dir*k)+' '+k+')">';
  g+=p('M-34 0 Q-38 -20 -16 -20 H10 Q16 -30 28 -30 Q40 -30 42 -18 L46 -10 Q46 -4 38 -4 L30 -2 V0 Z',W,2)+p('M24 -30 q-6 4 -4 16 q6 -4 6 -12z',K,1.4)+c(34,-20,1.6,K,1)+c(45,-10,2,K,1)+p('M-34 -4 q-10 2 -14 -6 M0 0 h18',null,2);
  return g+'</g>';}
function cat(x,y,k,dir){k=k||1;dir=dir||1;return '<g transform="translate('+x+' '+y+') scale('+(dir*k)+' '+k+')">'+p('M-12 0 Q-16 -22 -6 -30 L-8 -42 L-2 -36 H4 L10 -42 L9 -30 Q16 -22 12 0 Z',K,1.6)+p('M12 -2 Q26 -2 24 -16',null,3)+'<circle cx="-3" cy="-30" r="1.3" fill="#fff"/><circle cx="5" cy="-30" r="1.3" fill="#fff"/></g>';}

/* ---------- bocadillos ---------- */
function bubble(x,y,w,h,tx,ty,dark){var s=p('M'+(x+8)+' '+y+' H'+(x+w-8)+' Q'+(x+w)+' '+y+' '+(x+w)+' '+(y+8)+' V'+(y+h-8)+' Q'+(x+w)+' '+(y+h)+' '+(x+w-8)+' '+(y+h)+' H'+(Math.min(Math.max(tx,x+14),x+w-14)+6)+' L'+tx+' '+ty+' L'+(Math.min(Math.max(tx,x+14),x+w-14)-6)+' '+(y+h)+' H'+(x+8)+' Q'+x+' '+(y+h)+' '+x+' '+(y+h-8)+' V'+(y+8)+' Q'+x+' '+y+' '+(x+8)+' '+y+'Z',dark?K:W,1.8);
  var ln='';for(var yy=y+9,i=0;yy<y+h-5;yy+=7,i++)ln+='M'+(x+8)+' '+yy+' h'+(w-16-((i*11)%14));
  return s+p(ln,null,1.6).replace(K+'" stroke-width="1.6"',(dark?W:K)+'" stroke-width="1.6"');}
function bubbleDots(x,y,w,tx,ty){return bubble(x,y,w,18,tx,ty).replace(/<path d="M[^"]*" fill="none"[^>]*\/>$/,'')+c(x+w/2-8,y+9,1.8,K,1)+c(x+w/2,y+9,1.8,K,1)+c(x+w/2+8,y+9,1.8,K,1);}
function thought(x,y,w,h,tx,ty,inner){var s='',n=10;var d='';for(var i=0;i<=n;i++){var a=Math.PI*2*i/n,px=x+w/2+Math.cos(a)*w/2,py=y+h/2+Math.sin(a)*h/2;if(!i)d='M'+px.toFixed(1)+' '+py.toFixed(1);else{var am=Math.PI*2*(i-0.5)/n;d+=' Q'+(x+w/2+Math.cos(am)*w*0.66).toFixed(1)+' '+(y+h/2+Math.sin(am)*h*0.66).toFixed(1)+' '+px.toFixed(1)+' '+py.toFixed(1);}}
  s+=p(d+'Z',W,1.8);var bx=x+w/2,by=y+h;s+=c(bx+(tx-bx)*0.35,by+(ty-by)*0.35+4,4,W,1.6)+c(bx+(tx-bx)*0.7,by+(ty-by)*0.7,2.6,W,1.4);
  if(inner==='scribble')s+=p('M'+(x+w*0.25)+' '+(y+h*0.5)+' c8 -14 14 10 22 -4 s10 12 18 -2 s8 10 14 0 M'+(x+w*0.3)+' '+(y+h*0.7)+' c6 -8 12 6 18 -2 s8 8 14 0',null,1.6);
  else if(inner==='heart')s+=p('M'+(x+w/2)+' '+(y+h*0.75)+' C'+(x+w*0.3)+' '+(y+h*0.55)+' '+(x+w*0.35)+' '+(y+h*0.25)+' '+(x+w/2)+' '+(y+h*0.4)+' C'+(x+w*0.65)+' '+(y+h*0.25)+' '+(x+w*0.7)+' '+(y+h*0.55)+' '+(x+w/2)+' '+(y+h*0.75)+'Z',K,1.6);
  else if(inner==='question')s+='<text x="'+(x+w/2)+'" y="'+(y+h*0.72)+'" font-family="DM Serif Display,Georgia,serif" font-size="'+(h*0.6)+'" text-anchor="middle" fill="'+K+'">?</text>';
  else if(inner==='house')s+=p('M'+(x+w*0.35)+' '+(y+h*0.78)+' V'+(y+h*0.48)+' L'+(x+w/2)+' '+(y+h*0.28)+' L'+(x+w*0.65)+' '+(y+h*0.48)+' V'+(y+h*0.78)+'Z',null,1.6);
  else if(inner==='sun')s+=c(x+w/2,y+h/2,h*0.18,W,1.6)+p('M'+(x+w*0.28)+' '+(y+h/2)+' h6 M'+(x+w*0.72)+' '+(y+h/2)+' h-6 M'+(x+w/2)+' '+(y+h*0.18)+' v5',null,1.6);
  return s;}
function note(x,y,k){k=k||1;return '<g transform="translate('+x+' '+y+') scale('+k+')">'+e(0,0,5,3.6,K,1.2).replace('<ellipse','<ellipse transform="rotate(-20)"')+p('M4.4 -1.5 V-20 q6 2 8 8',null,1.8)+'</g>';}
function hearts(x,y){return p('M'+x+' '+y+' c-6 -6 -10 -12 -4 -14 c3 -1 4 2 4 3 c0 -1 1 -4 4 -3 c6 2 2 8 -4 14z',K,1.2);}
function zzz(x,y){return '<text x="'+x+'" y="'+y+'" font-family="DM Sans,Arial" font-weight="700" font-size="12" fill="'+K+'">z<tspan font-size="9" dy="-6">z</tspan><tspan font-size="7" dy="-5">z</tspan></text>';}
function sparks(x,y){return p('M'+x+' '+y+' l-6 -6 M'+(x+6)+' '+(y-4)+' v-9 M'+(x+12)+' '+y+' l6 -6',null,1.6);}

/* ---------- pantallas y videollamadas ---------- */
var CLIP=0;
function screenWith(x,y,w,h,inner){var id='dbclip'+(++CLIP);return '<clipPath id="'+id+'"><rect x="'+(x+3)+'" y="'+(y+3)+'" width="'+(w-6)+'" height="'+(h-6)+'" rx="2"/></clipPath><g clip-path="url(#'+id+')">'+inner+'</g>';}

/* ================= las 60 escenas ================= */
var DIB={}, LIST=[];
function add(key,title,uses,fn){LIST.push([key,title,uses]);DIB[key]=fn;}

/* 1 */ add('banco','Conversación en el banco','Hablar, pedir ayuda, soledad, vínculos',function(){
  var s=GROUND-Math.round(0.37*176);
  return svg(tree(62,GROUND,90,40)+lamp(370,GROUND,150)+birds(318,30)+parkBench(98,334,s,GROUND)+cupOn(214,s)+
    peep({pose:'sitting/CrossedLegs',x:146,h:176,hair:'GrayBun',face:'Smile',glasses:'GlassRound'})+
    peep({pose:'sitting/CrossedLegs',x:288,h:176,flip:-1,hair:'ShortCurly',face:'Calm',beard:'FullMedium'})+ground(14,388),
    'Una mujer mayor y un hombre joven con barba charlan sentados en un banco del parque');});

/* 2 */ add('paseo','Paseo charlando','Hábitos, movimiento, amistad, generaciones',function(){
  return svg(tree(64,GROUND,96,42)+bush(346,GROUND,70)+birds(300,40)+
    peep({pose:'standing/WalkingWB',x:178,h:206,hair:'GrayShort',face:'Smile',beard:'Full',glasses:'GlassClubmaster'})+
    peep({pose:'standing/WalkingBW',x:244,h:196,flip:-1,hair:'LongCurly',face:'Cheeky'})+ground(14,388),
    'Un hombre mayor con barba y una mujer joven pasean juntos charlando');});

/* 3 */ add('consulta','En la consulta','Cómo es una sesión, la primera visita',function(){
  var sS=GROUND-Math.round(0.17*176), aS=GROUND-Math.round(0.37*180);
  return svg(frame(178,40,60,40)+pottedPlant(40,GROUND,0.8)+floorLamp(374,GROUND,150)+sofa(76,192,sS,GROUND)+armchair(314,aS,GROUND,1,56)+
    sideTable(218,GROUND-40,GROUND)+glass(210,GROUND-40)+tissues(226,GROUND-40)+
    peep({pose:'sitting/ClosedLegWB',x:140,h:176,hair:'Bun',face:'Calm'})+
    peep({pose:'sitting/CrossedLegs',x:296,h:180,flip:-1,hair:'MediumStraight',face:'Smile',glasses:'GlassButterfly'})+ground(14,388),
    'En la consulta: una paciente en el sofá y su psicóloga en el sillón, conversando');});

/* 4 */ add('espera','La sala de espera','Antes de la primera sesión, nervios, dar el paso',function(){
  var a={pose:'sitting/CrossedLegs',x:150,h:170,hair:'MediumShort',face:'Worried'}, b={pose:'sitting/CrossedLegs',x:262,h:170,hair:'GrayMedium',face:'Smile',glasses:'GlassRound'};
  var sa=seat(a), sb=seat(b);
  return svg(wallLine(170)+wallClock(70,62,18,10)+door(318,GROUND,58,150)+r(330,96,34,10,1,K,1.4)+pottedPlant(36,GROUND,0.75)+
    chairSide(sa.x+6,sa.y,GROUND,-1)+chairSide(sb.x+6,sb.y,GROUND,-1)+peep(a)+peep(b)+floor(),
    'Dos personas esperan sentadas en la sala de espera; una está nerviosa y la otra tranquila');});

/* 5 */ add('online','Terapia online','Videollamadas, terapia a distancia',function(){
  var inner=r(232,70,128,84,0,W,0)+peep({pose:'bust/Sweater',x:296,y:156,h:80,flip:-1,hair:'LongBangs',face:'Smile'})+pottedPlant(340,152,0.4);
  return svg(wallLine(176)+frame(40,40,46,34)+peep({pose:'bust/Coffee',x:128,y:200,h:150,hair:'Pomp',face:'Smile',beard:'Goatee'})+
    tableFront(30,380,186,GROUND)+monitor(296,176,136,96,screenWith(228,80,136,96,inner))+mug(176,186,true),
    'Un hombre con un café habla por videollamada con su psicóloga, que aparece en la pantalla');});

/* 6 */ add('agobio','Agobio en el trabajo','Estrés laboral, burnout, exceso de tareas',function(){
  return svg(wallLine(170)+wallClock(60,56,18,7)+
    peep({pose:'bust/Hoodie',x:186,y:210,h:150,hair:'ShortMessy',face:'Worried',glasses:'GlassClubmaster'})+
    thought(250,40,74,46,222,82,'scribble')+
    tableFront(40,370,194,GROUND)+laptopBack(196,194,58)+books(92,194,5)+books(300,194,4)+paperSheet(346,194)+mug(122,194),
    'Un chico agobiado en su mesa entre pilas de papeles, con la cabeza llena de pensamientos');});

/* 7 */ add('insomnio','Desvelo','Insomnio, preocupaciones nocturnas, descanso',function(){
  var o={pose:'sitting/ClosedLegBW',x:206,h:170,hair:'MediumBangs',face:'Tired'}, s=seat(o);
  return svg(windowBox(46,40,82,80,moon(96,72,13)+stars([[66,60],[112,98,0.7]]))+
    bed(110,320,s.y,GROUND)+r(126,s.y-14,40,14,6,W,1.8)+peep(o)+nightstand(354,GROUND,'3:07')+floor(),
    'Una mujer sentada en el borde de la cama de madrugada, sin poder dormir; el reloj marca las 3:07');});

/* 8 */ add('lluvia-ventana','Días grises','Tristeza, melancolía, otoño, estado de ánimo',function(){
  return svg(wallLine(176)+windowBox(200,40,150,120,rain(206,348,44,156))+curtains(200,40,150,120)+
    peep({pose:'standing/RestingWB',x:130,h:206,hair:'Long',face:'Pensive'})+mug(266,160)+floor(),
    'Una mujer de pie mira por la ventana mientras llueve, pensativa');});

/* 9 */ add('sofa-cafe','Un rato para ti','Autocuidado, rutinas, descanso',function(){
  return svg(wallLine(150)+frame(60,40,50,40)+frame(300,30,40,52)+sofaBack(120,290,110)+
    peep({pose:'bust/Coffee',x:204,y:206,h:120,hair:'BunCurly',face:'EyesClosed'})+
    sofaFront(120,290,180,GROUND)+cat(282,144,0.9,-1)+floorLamp(356,GROUND,150)+pottedPlant(52,GROUND,0.9)+floor(),
    'Una mujer descansa en el sofá con una taza entre las manos y los ojos cerrados; un gato a su lado');});

/* 10 */ add('pantallas','Cada uno en su pantalla','Móviles en casa, desconexión en pareja',function(){
  return svg(wallLine(150)+frame(176,30,50,38)+sofaBack(70,330,110)+
    peep({pose:'bust/Device',x:140,y:206,h:116,hair:'ShortWavy',face:'Serious',beard:'Chin'})+
    peep({pose:'bust/Paper',x:262,y:206,h:112,flip:-1,hair:'Medium',face:'Calm'})+
    sofaFront(70,330,180,GROUND)+phoneGlow(160,140)+floor(),
    'Una pareja en el sofá, cada uno mirando su móvil sin hablarse');});

/* 11 */ add('cena','Cena en familia','Comer en familia, crianza, rutinas',function(){
  return svg(wallLine(150)+hangingLamp(200,0,36)+frame(326,40,46,36)+
    peep({pose:'bust/PoloSweater',x:100,y:200,h:116,hair:'Short',face:'Smile',beard:'MoustacheThin'})+
    peep({pose:'bust/StripedShirt',x:204,y:204,h:92,hair:'Bun',face:'SmileBig',kid:true})+
    peep({pose:'bust/Explaining',x:304,y:200,h:116,flip:-1,hair:'LongCurly',face:'Smile'})+
    tableFront(40,360,174,GROUND,true)+plate(110,176)+plate(204,176)+plate(296,176)+glass(150,174)+glass(252,174),
    'Un padre, una madre y su hija cenan juntos a la mesa');});

/* 12 */ add('desayuno','Desayuno en pareja','Rutinas de pareja, convivencia, comunicación',function(){
  return svg(windowBox(150,34,100,80,sun(200,74,12))+
    peep({pose:'bust/Coffee',x:110,y:206,h:130,hair:'Afro',face:'Smile'})+
    peep({pose:'bust/Paper',x:292,y:206,h:128,flip:-1,hair:'ShortCurly',face:'Cheeky',beard:'Goatee',glasses:'GlassRound'})+
    tableFront(30,370,190,GROUND)+mug(178,190,true)+plate(220,192)+r(240,174,12,16,2,W,1.6),
    'Una pareja desayuna junta por la mañana; él lee el móvil y ella toma café sonriendo');});

/* 13 */ add('cafeteria','Café con una amiga','Amistad, apoyo, desahogarse',function(){
  return svg(wallLine(150)+frame(40,30,40,30)+frame(330,26,44,34)+pottedPlant(46,150,0.7)+
    peep({pose:'bust/Sweater',x:110,y:214,h:140,hair:'Hijab',face:'Smile'})+
    peep({pose:'bust/Turtleneck',x:290,y:214,h:140,flip:-1,hair:'MediumStraight',face:'Explaining'})+
    roundTable(200,196,GROUND,82)+mug(180,196,true)+mug(222,196)+bubble(176,40,58,24,240,86),
    'Dos amigas charlan en una cafetería con un café delante');});

/* 14 */ add('mensajes','Mensajes a distancia','Relaciones a distancia, redes sociales, echar de menos',function(){
  return svg(p('M200 0 V250',null,1.6)+'<path d="M200 0 V250" stroke="#fff" stroke-width="10"/>'+p('M196 0 V250 M204 0 V250',null,1.6)+
    windowBox(36,34,58,52,moon(64,56,9))+windowBox(306,34,58,52,sun(336,58,9))+
    peep({pose:'bust/Device',x:110,y:250,h:170,hair:'Long',face:'Smile'})+
    peep({pose:'bust/Device',x:292,y:250,h:170,flip:-1,hair:'Pomp',face:'Smile',beard:'Full'})+
    bubble(150,40,40,18,166,70)+bubble(212,22,40,18,234,50,true)+hearts(180,104),
    'Dos personas en ciudades distintas, una de noche y otra de día, se escriben por el móvil');});

/* 15 */ add('rumiacion','Darle vueltas a todo','Rumiación, ansiedad, pensamientos que no paran',function(){
  var o={pose:'sitting/CrossedLegs',x:150,h:184,hair:'Bangs',face:'Worried'}, s=seat(o);
  return svg(armchair(s.x+6,s.y,GROUND,-1,60)+peep(o)+thought(214,24,150,86,176,74,'scribble')+
    thought(262,120,56,34,232,108,'question')+rug(170,GROUND,110)+floor(),
    'Una mujer sentada en el sillón con la cabeza llena de pensamientos enredados');});

/* 16 */ add('montana','Ver las cosas con perspectiva','Perspectiva, metas, tomar decisiones',function(){
  return svg(sun(330,44,14)+birds(60,40)+mountains(200)+pine(46,GROUND,70)+pine(78,GROUND,52)+
    peep({pose:'standing/CrossedArmsWB',x:250,h:156,hair:'Beanie',face:'Calm',beard:'Chin'})+grass(300,GROUND)+grass(120,GROUND)+ground(10,390),
    'Un hombre con gorro contempla las montañas con calma');});

/* 17 */ add('playa','Desconectar en la playa','Vacaciones, descanso, bajar el ritmo',function(){
  return svg(sun(70,58,16)+cloud(300,52,1)+birds(200,38)+sea(150)+
    peep({pose:'sitting/HandsBackWB',x:220,h:120,hair:'LongCurly',face:'EyesClosed'})+
    umbrella(110,140,90,true)+p('M110 120 V'+GROUND,null,2.4)+ground(10,390),
    'Una mujer sentada en la arena junto al mar, relajada, con los ojos cerrados');});

/* 18 */ add('picnic','Picnic con amigos','Amistad, red de apoyo, tiempo libre',function(){
  return svg(tree(342,GROUND,90,44)+sun(52,46,12)+blanket(70,320,GROUND)+
    peep({pose:'sitting/OneLegUpBW',x:130,h:126,hair:'Afro',face:'SmileLol',beard:'FullMedium'})+
    peep({pose:'sitting/MediumWB',x:262,h:126,flip:-1,hair:'BunCurly',face:'SmileBig'})+
    basket(196,GROUND-8)+plate(170,GROUND-8)+ground(10,390),
    'Dos amigos ríen sentados sobre una manta de picnic bajo un árbol');});

/* 19 */ add('estrellas','Hablar de lo importante','Conversaciones profundas, pareja, esperanza',function(){
  return svg('<rect width="400" height="250" fill="'+W+'"/>'+moon(320,50,18)+stars([[60,40],[120,70,0.7],[180,30],[250,80,0.7],[370,110,0.6],[30,100,0.6],[220,40,0.5]])+
    p('M0 200 Q200 180 400 205',null,2)+
    peep({pose:'sitting/HandsBackBW',x:160,y:206,h:116,hair:'MediumShort',face:'Smile'})+
    peep({pose:'sitting/HandsBackWB',x:246,y:206,h:116,flip:-1,hair:'ShortWavy',face:'Calm'})+grass(90,205)+grass(320,207),
    'Dos personas sentadas en la hierba de noche, mirando las estrellas y conversando');});

/* 20 */ add('paraguas','Atravesar una mala racha','Malas rachas, resiliencia, seguir adelante',function(){
  return svg(rain(10,390,10,230)+building(290,GROUND,90,150)+
    peep({pose:'standing/WalkingWB',x:170,h:190,hair:'MediumStraight',face:'Calm'})+umbrella(172,48,104)+
    puddle(110,GROUND+2,24)+puddle(250,GROUND+3,30)+ground(10,390),
    'Una mujer camina bajo la lluvia con su paraguas');});

/* 21 */ add('autobus','Esperar','Paciencia, incertidumbre, prisas',function(){
  return svg(busStop(56,GROUND)+building(300,GROUND,100,180)+
    peep({pose:'standing/CrossedArmsWB',x:124,h:186,hair:'Pomp',face:'Serious'})+
    peep({pose:'standing/PolkaDots',x:200,h:180,hair:'GrayBun',face:'Calm',glasses:'GlassButterfly'})+
    peep({pose:'standing/EasingBW',x:272,h:190,flip:-1,hair:'Twists',face:'Tired'})+ground(10,390),
    'Tres personas de distintas edades esperan el autobús en la parada');});

/* 22 */ add('discusion','Una discusión','Conflictos de pareja, comunicación, enfado',function(){
  return svg(wallLine(170)+frame(340,96,40,30)+pottedPlant(362,GROUND,0.7)+
    peep({pose:'standing/PointingFingerWB',x:126,h:200,hair:'ShortMessy',face:'Serious',beard:'Full'})+
    peep({pose:'standing/CrossedArmsWB',x:276,h:194,flip:-1,hair:'Long',face:'Serious'})+
    bubble(150,22,56,26,176,56,true)+bubble(296,10,52,20,290,40)+floor(),
    'Una pareja discute en casa: él señala y ella cruza los brazos');});

/* 23 */ add('amigos','Una tarde con amigos','Red de apoyo, vínculos, reír',function(){
  return svg(lamp(40,GROUND,150)+tree(360,GROUND,90,36)+
    peep({pose:'standing/EasingWB',x:116,h:196,hair:'ShortCurly',face:'SmileLol',beard:'Chin'})+
    peep({pose:'standing/RestingWB',x:200,h:188,hair:'LongBangs',face:'SmileBig'})+
    peep({pose:'standing/ShirtPantsBW',x:280,h:200,flip:-1,hair:'Short',face:'SmileTeeth',glasses:'GlassRound'})+
    bubbleDots(220,14,40,226,40)+ground(10,390),
    'Tres amigos se ríen juntos en la calle');});

/* 24 */ add('fiesta','Sola en la fiesta','Ansiedad social, timidez, sentirse fuera',function(){
  return svg(garland(0,400,16)+
    peep({pose:'standing/EasingWB',x:236,y:180,h:120,op:0.45,hair:'Afro',face:'SmileLol'})+
    peep({pose:'standing/PolkaDots',x:290,y:180,h:116,op:0.45,flip:-1,hair:'Long',face:'SmileBig'})+
    peep({pose:'standing/ShirtPantsWB',x:340,y:180,h:122,op:0.45,flip:-1,hair:'Pomp',face:'SmileTeeth'})+
    p('M200 180 H400',null,1.4)+
    peep({pose:'standing/CrossedArmsWB',x:110,h:214,hair:'MediumBangs',face:'Worried'})+cupOn(60,GROUND)+floor(),
    'Una chica con los brazos cruzados se siente sola mientras al fondo los demás ríen en la fiesta');});

/* 25 */ add('publico','Hablar en público','Miedo escénico, exposición, autoestima',function(){
  return svg(whiteboard(160,30,140,92,'chart')+
    peep({pose:'standing/PointingFingerWB',x:96,y:200,h:176,hair:'Bun',face:'Explaining',glasses:'GlassClubmaster'})+
    peep({pose:'bust/Hoodie',x:200,y:262,h:90,flip:-1,hair:'Medium',face:'Calm'})+
    peep({pose:'bust/Sweater',x:290,y:262,h:90,flip:-1,hair:'GrayShort',face:'Smile'})+
    peep({pose:'bust/StripedShirt',x:370,y:262,h:90,flip:-1,hair:'Bangs',face:'Calm'})+p('M0 200 H160 M300 200 H400',null,1.6),
    'Una mujer da una charla delante de una pizarra con gráficos; el público la escucha');});

/* 26 */ add('reunion','Reunión de equipo','Trabajo en equipo, clima laboral',function(){
  return svg(wallLine(150)+whiteboard(150,26,100,62,'lines').replace(/<path d="M[^"]*l-10[^>]*\/>/,'')+
    peep({pose:'bust/Explaining',x:90,y:206,h:120,hair:'FlatTop',face:'Explaining'})+
    peep({pose:'bust/PoloSweater',x:200,y:200,h:108,hair:'Hijab',face:'Smile'})+
    peep({pose:'bust/StripedShirt',x:310,y:206,h:120,flip:-1,hair:'GrayMedium',face:'Calm',glasses:'GlassRound'})+
    tableFront(24,376,186,GROUND)+laptopBack(250,186,44)+notebookPen(110,186)+mug(330,186),
    'Tres compañeros de trabajo reunidos alrededor de una mesa');});

/* 27 */ add('entrevista','Entrevista de trabajo','Ansiedad anticipatoria, buscar trabajo, autoestima',function(){
  return svg(wallLine(160)+bookshelf(150,150,100,110)+
    peep({pose:'bust/StripedShirt',x:100,y:206,h:128,hair:'ShortWavy',face:'Worried'})+
    peep({pose:'bust/Turtleneck',x:300,y:206,h:128,flip:-1,hair:'GrayBun',face:'Calm',glasses:'GlassClubmaster'})+
    tableFront(30,370,190,GROUND)+paperSheet(260,190)+glass(140,190)+sparks(140,62),
    'Un chico nervioso en una entrevista de trabajo frente a una entrevistadora');});

/* 28 */ add('jefe','Presión en el trabajo','Conflictos laborales, acoso, poner límites',function(){
  var o={pose:'sitting/CrossedLegs',x:128,h:170,hair:'Long',face:'Sad'}, s=seat(o);
  return svg(wallLine(160)+wallClock(70,50,16,4)+chairSide(s.x+6,s.y,GROUND,-1)+peep(o)+tableSide(190,300,150,GROUND)+laptopSide(220,150,1)+
    peep({pose:'standing/BlazerPantsWB',x:326,h:206,flip:-1,hair:'Short',face:'Serious',beard:'MoustacheThin'})+
    bubble(220,30,64,26,290,52,true)+floor(),
    'Un jefe de pie habla con dureza a una empleada sentada, que se encoge');});

/* 29 */ add('examenes','Época de exámenes','Estudiantes, presión académica, autoexigencia',function(){
  return svg(windowBox(280,30,82,72,moon(320,56,10)+stars([[298,46,0.6]]))+deskLamp(80,180,1)+
    peep({pose:'bust/Hoodie',x:190,y:206,h:132,hair:'BunCurly',face:'Tired',glasses:'GlassRound'})+
    tableFront(30,370,180,GROUND)+books(70,180,6)+openBook(200,182,36)+mug(300,180,true)+books(340,180,3),
    'Una estudiante cansada estudia de noche entre libros');});

/* 30 */ add('biblioteca','Aprender juntos','Educación, estudiar en grupo, adolescencia',function(){
  return svg(bookshelf(10,170,120,150)+bookshelf(270,170,120,150)+
    peep({pose:'bust/Sweater',x:140,y:210,h:110,hair:'ShortCurly',face:'Explaining',kid:true})+
    peep({pose:'bust/Hoodie',x:260,y:210,h:106,flip:-1,hair:'LongBangs',face:'Smile',kid:true})+
    tableFront(40,360,190,GROUND)+openBook(200,192,40)+books(90,190,3)+notebookPen(300,190),
    'Dos adolescentes estudian juntos en la biblioteca con un libro abierto');});

/* 31 */ add('grupo','Terapia de grupo','Grupos, compartir experiencias, sentirse comprendido',function(){
  var a={pose:'sitting/CrossedLegs',x:80,h:150,hair:'GrayShort',face:'Calm',beard:'Full'},
      b={pose:'sitting/CrossedLegs',x:180,h:150,hair:'Long',face:'Sad'},
      d={pose:'sitting/CrossedLegs',x:320,h:156,flip:-1,hair:'Bun',face:'Smile',glasses:'GlassRound'};
  var sa=seat(a),sb=seat(b),sd=seat(d);
  return svg(wallLine(130)+frame(180,30,44,34)+chairSide(sa.x+4,sa.y,GROUND,-1)+chairSide(sb.x+4,sb.y,GROUND,-1)+chairSide(sd.x-4,sd.y,GROUND,1)+peep(a)+peep(b)+peep(d)+
    bubble(232,46,50,20,226,78)+pottedPlant(376,GROUND,0.6)+floor(),
    'Un grupo de terapia sentado en círculo; la psicóloga escucha a una participante');});

/* 32 */ add('aula','Emociones en el aula','Educación emocional, colegio, infancia',function(){
  return svg(r(150,20,230,110,3,K,2)+p('M170 46 h50 M170 60 h80',null,2).replace(K+'" stroke-width="2"',W+'" stroke-width="2"')+
    '<g stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"><circle cx="300" cy="66" r="18"/><path d="M292 72 q8 7 16 0"/><circle cx="293" cy="61" r="1"/><circle cx="307" cy="61" r="1"/></g>'+
    peep({pose:'standing/EasingWB',x:96,h:200,hair:'GrayMedium',face:'Explaining',glasses:'GlassButterfly'})+
    peep({pose:'bust/StripedShirt',x:220,y:214,h:84,flip:-1,hair:'ShortCurly',face:'SmileBig',kid:true})+
    peep({pose:'bust/Sweater',x:330,y:214,h:84,flip:-1,hair:'BunCurly',face:'Smile',kid:true})+
    tableFront(180,262,196,GROUND)+tableFront(290,372,196,GROUND)+floor(),
    'Una maestra habla de emociones con dos niños; en la pizarra hay una cara sonriente');});

/* 33 */ add('abuela','Abuelos y nietos','Relaciones entre generaciones, familia',function(){
  var o={pose:'sitting/CrossedLegs',x:110,h:180,hair:'GrayBun',face:'SmileBig',glasses:'GlassRound'}, s=seat(o);
  return svg(wallLine(150)+frame(240,36,50,40)+armchair(s.x+6,s.y,GROUND,-1,60)+peep(o)+
    peep({pose:'sitting/MediumWB',x:264,h:96,flip:-1,hair:'ShortCurly',face:'SmileLol',kid:true})+
    blocks(318,GROUND)+toyCar(206,GROUND)+rug(250,GROUND,120)+floor(),
    'Una abuela sonríe en su sillón mientras su nieto juega en la alfombra');});

/* 34 */ add('padre-hijo','Paseo con papá','Crianza, paternidad, tiempo de calidad',function(){
  return svg(tree(330,GROUND,100,42)+sun(70,46,12)+birds(150,40)+
    peep({pose:'standing/WalkingBW',x:180,h:204,hair:'Pomp',face:'Smile',beard:'Full'})+
    peep({pose:'standing/WalkingWB',x:240,h:124,hair:'Short',face:'SmileBig',kid:true})+ball(276,GROUND)+ground(10,390),
    'Un padre pasea de la mano con su hijo pequeño, que lleva una pelota');});

/* 35 */ add('adolescente','Hablar con un adolescente','Adolescencia, comunicación familiar, límites',function(){
  return svg(wallLine(150)+frame(60,34,40,52)+sofaBack(70,330,110)+
    peep({pose:'bust/Explaining',x:140,y:206,h:122,hair:'MediumStraight',face:'Explaining'})+
    peep({pose:'bust/Device',x:268,y:206,h:116,flip:1,hair:'Medium',face:'Serious',extra:'headphones',kid:true})+
    sofaFront(70,330,180,GROUND)+bubble(150,30,52,22,160,62)+floor(),
    'Una madre intenta hablar con su hijo adolescente, que mira el móvil con los cascos puestos');});

/* 36 */ add('jugar','Jugar en el suelo','Juego, vínculo con los hijos, infancia',function(){
  return svg(wallLine(150)+windowBox(160,30,80,70,sun(200,64,10))+
    peep({pose:'sitting/OneLegUpWB',x:120,h:130,hair:'Long',face:'SmileBig'})+
    peep({pose:'sitting/HandsBackBW',x:280,h:96,flip:-1,hair:'BunCurly',face:'SmileLol',kid:true})+
    blocks(186,GROUND)+ball(230,GROUND,8)+toyCar(340,GROUND)+rug(200,GROUND,150)+floor(),
    'Una madre y su hija juegan sentadas en el suelo con bloques y una pelota');});

/* 37 */ add('pareja-terapia','Terapia de pareja','Pareja, comunicación, crisis',function(){
  var t={pose:'sitting/CrossedLegs',x:330,h:170,flip:-1,hair:'GrayShort',face:'Calm',glasses:'GlassClubmaster',beard:'Chin'}, s=seat(t);
  return svg(wallLine(150)+frame(150,30,40,34)+sofaBack(40,240,110)+
    peep({pose:'bust/Turtleneck',x:96,y:206,h:116,hair:'MediumShort',face:'Sad'})+
    peep({pose:'bust/PoloSweater',x:190,y:206,h:116,hair:'FlatTop',face:'Serious'})+
    sofaFront(40,240,180,GROUND)+armchair(s.x,s.y,GROUND,1,52)+peep(t)+floor(),
    'Una pareja en el sofá de la consulta, distanciada; el terapeuta los escucha desde su sillón');});

/* 38 */ add('infantil','Psicología infantil','Terapia con niños, juego, dibujo',function(){
  return svg(wallLine(140)+drawing(60,40,40,32,'house')+drawing(110,50,34,28,'person')+drawing(310,36,40,32,'person')+
    peep({pose:'sitting/HandsBackWB',x:130,h:96,hair:'Bangs',face:'Smile',kid:true})+
    peep({pose:'sitting/OneLegUpBW',x:276,h:132,flip:-1,hair:'LongCurly',face:'Smile',glasses:'GlassRound'})+
    paperSheet(200,GROUND-2)+crayons(186,GROUND-12)+blocks(56,GROUND)+rug(200,GROUND,160)+floor(),
    'Una psicóloga y una niña dibujan sentadas en el suelo de la consulta');});

/* 39 */ add('llamada','Pedir cita','Dar el primer paso, pedir ayuda',function(){
  return svg(wallLine(176)+windowBox(240,34,110,90,cloud(296,72,0.9)+birds(270,96))+
    peep({pose:'bust/Device',x:140,y:250,h:200,hair:'GrayMedium',face:'Calm'})+
    bubbleDots(196,40,40,180,70),
    'Una mujer mayor llama por teléfono para pedir cita');});

/* 40 */ add('diario','Escribir lo que sientes','Diario emocional, expresar, ordenar ideas',function(){
  return svg(windowBox(46,30,74,70,moon(80,56,10))+deskLamp(320,176,-1)+
    peep({pose:'bust/Paper',x:200,y:206,h:130,hair:'Bangs',face:'Pensive'})+
    tableFront(30,370,176,GROUND)+openBook(150,178,30)+notebookPen(250,176)+candle(100,176)+mug(282,176,true),
    'Una mujer escribe en su diario de noche a la luz de una lámpara');});

/* 41 */ add('cocina','Cocinar con calma','Alimentación, rutinas, cuidar el cuerpo',function(){
  return svg(shelfJars(30,150,70)+windowBox(272,26,96,74,sun(320,62,10))+
    peep({pose:'bust/Explaining',x:200,y:206,h:140,hair:'Short',face:'Smile',beard:'FullMedium'})+
    counter(20,380,170,GROUND)+pot(120,170)+r(220,164,40,6,2,W,1.8)+p('M228 160 h8 M242 158 h10',null,2)+pottedPlant(340,170,0.5),
    'Un hombre con barba cocina tranquilo en su cocina');});

/* 42 */ add('espejo','Frente al espejo','Autoestima, imagen corporal, aceptación',function(){
  var me={pose:'standing/ShirtPantsBW',x:130,h:200,hair:'LongCurly',face:'Pensive'};
  var ref=peep({pose:'standing/ShirtPantsBW',x:270,y:226,h:170,flip:-1,hair:'LongCurly',face:'Smile',op:0.35});
  return svg(wallLine(176)+mirror(212,30,116,196,screenWith(212,60,116,166,ref))+pottedPlant(364,GROUND,0.7)+peep(me)+floor(),
    'Una mujer se mira en el espejo; su reflejo sonríe');});

/* 43 */ add('mudanza','Mudanza','Cambios vitales, empezar de cero, duelo por lo que se deja',function(){
  return svg(wallLine(170)+windowBox(40,36,70,64,'')+
    box(170,GROUND,56,44)+box(176,GROUND-44,44,34,true)+box(232,GROUND,46,36)+pottedPlant(198,GROUND-78,0.5)+
    peep({pose:'standing/EasingBW',x:316,h:200,flip:-1,hair:'Twists',face:'Pensive'})+
    peep({pose:'standing/RestingWB',x:96,h:196,hair:'Beanie',face:'Smile'})+floor(),
    'Dos personas entre cajas de mudanza en una casa vacía');});

/* 44 */ add('estacion','Empezar de nuevo','Viajes, cambios, migrar, despedidas',function(){
  return svg(stationClock(320,60,0)+p('M0 150 H400',null,1.6)+r(40,40,110,26,2,K,1.8)+p('M52 53 h40 M100 53 h36',null,2).replace(K+'" stroke-width="2"',W+'" stroke-width="2"')+
    peep({pose:'standing/RestingBW',x:196,h:204,hair:'Bun',face:'Calm'})+suitcase(244,GROUND-4)+ground(10,390),
    'Una mujer espera en la estación con su maleta');});

/* 45 */ add('plantas','Cuidar las plantas','Autocuidado, paciencia, rutinas que sostienen',function(){
  return svg(wallLine(150)+shelfJars(250,380,60).replace(/<rect[^>]*>/g,'')+pottedPlant(276,60,0.5)+cactus(320,60)+pottedPlant(356,60,0.45)+
    peep({pose:'sitting/OneLegUpWB',x:170,h:136,hair:'ShortCurly',face:'Smile',beard:'Goatee'})+
    pottedPlant(260,GROUND,1)+pottedPlant(320,GROUND,0.8)+cactus(86,GROUND)+wateringCan(230,GROUND)+floor(),
    'Un chico sentado en el suelo cuida de sus plantas');});

/* 46 */ add('escalera','Una pausa en el portal','Hacer una pausa, cansancio, soledad urbana',function(){
  var o={pose:'sitting/ClosedLegBW',x:196,h:150,hair:'ShortWavy',face:'Tired'};
  return svg(r(96,14,208,GROUND-30-14,0,W,2)+windowBox(116,36,34,40,'')+windowBox(250,36,34,40,'')+door(171,GROUND-30,58,104)+steps(110,GROUND,180,2,15)+peep(Object.assign({},o,{y:GROUND-30}))+
    lamp(46,GROUND,150)+cat(340,GROUND,1,-1)+ground(10,390),
    'Un chico cansado sentado en los escalones del portal; un gato lo mira');});

/* 47 */ add('perro','Pasear al perro','Rutinas, mascotas, salir de casa',function(){
  return svg(tree(60,GROUND,100,40)+bush(360,GROUND,60)+
    peep({pose:'standing/WalkingWB',x:180,h:204,flip:-1,hair:'GrayShort',face:'Smile',glasses:'GlassRound'})+
    dog(270,GROUND,0.9,1)+p('M184 120 Q230 170 292 186',null,1.4)+ground(10,390),
    'Un hombre mayor pasea a su perro por el parque');});

/* 48 */ add('gato','Compañía en casa','Mascotas, soledad, compañía',function(){
  return svg(wallLine(170)+windowBox(220,30,120,100,cloud(280,70,1))+cat(300,130,1.1,-1)+
    peep({pose:'bust/Sweater',x:130,y:250,h:190,hair:'GrayBun',face:'Smile',glasses:'GlassButterfly'})+
    r(210,130,140,10,1,W,2),
    'Una mujer mayor sonríe a su gato, sentado en la ventana');});

/* 49 */ add('duelo','Duelo','Pérdidas, despedidas, recordar',function(){
  var o={pose:'sitting/CrossedLegs',x:186,h:176,hair:'MediumShort',face:'Sad'}, s=seat(o);
  return svg(tree(330,GROUND,110,40,true)+leaves([[300,180],[262,214],[340,226],[120,226]])+
    parkBench(96,264,s.y,GROUND)+flowers(124,s.y)+peep(o)+ground(10,390),
    'Una persona sola y triste en un banco, junto a un ramo de flores; un árbol sin hojas');});

/* 50 */ add('celebrar','Celebrar los avances','Logros, alta terapéutica, alegría',function(){
  return svg(garland(0,400,14)+balloon(40,70)+balloon(66,58,K)+balloon(352,64)+
    peep({pose:'bust/PointingUp',x:120,y:206,h:132,hair:'FlatTop',face:'SmileTeeth'})+
    peep({pose:'bust/Coffee',x:290,y:206,h:128,flip:-1,hair:'LongBangs',face:'LoveGrin'})+
    tableFront(30,370,184,GROUND,true)+cake(200,184)+glass(250,184)+glass(150,184),
    'Dos personas celebran con una tarta y globos');});

/* 51 */ add('respirar','Respirar','Relajación, mindfulness, ansiedad',function(){
  return svg(wallLine(150)+pottedPlant(330,GROUND,1.1)+candle(80,GROUND)+candle(96,GROUND)+
    mat(130,300,GROUND)+peep({pose:'sitting/HandsBackBW',x:214,h:126,hair:'Bun',face:'EyesClosed'})+
    floor(),
    'Una mujer sentada en una esterilla respira con los ojos cerrados');});

/* 52 */ add('moverse','Moverse','Ejercicio, energía, estado de ánimo',function(){
  return svg(sun(340,46,14)+tree(56,GROUND,90,36)+bicycle(330,GROUND,1)+
    peep({pose:'standing/WalkingBW',x:190,h:206,hair:'Pomp',face:'Driven'})+p('M150 120 h-24 M150 150 h-30 M150 180 h-20',null,1.6)+ground(10,390),
    'Un chico camina con energía por el parque');});

/* 53 */ add('medico','Cuerpo y mente','Salud, síntomas físicos, psicosomática',function(){
  var o={pose:'sitting/CrossedLegs',x:110,h:170,hair:'Afro',face:'Worried'}, s=seat(o);
  return svg(wallLine(150)+r(186,40,40,50,2,W,1.8)+p('M206 52 v26 M193 65 h26',null,4)+chairSide(s.x+6,s.y,GROUND,-1)+peep(o)+
    peep({pose:'standing/BlazerPantsWB',x:290,h:206,flip:-1,hair:'GrayShort',face:'Smile',beard:'FullMedium',glasses:'GlassRound'})+floor(),
    'Una paciente preocupada habla con su médico en la consulta');});

/* 54 */ add('huerto','El huerto','Naturaleza, ocuparse, tiempo libre en la jubilación',function(){
  return svg(sun(60,46,14)+cloud(320,40,0.9)+raisedBed(170,350,GROUND)+wateringCan(380,GROUND)+
    peep({pose:'standing/ShirtPantsWB',x:106,h:196,hair:'GrayShort',face:'SmileBig',beard:'Full'})+ground(10,390),
    'Un hombre mayor sonríe junto a su huerto');});

/* 55 */ add('musica','La música que te acompaña','Música, regular emociones, adolescencia',function(){
  return svg(wallLine(176)+frame(60,40,44,56)+guitar(330,GROUND)+
    peep({pose:'bust/Hoodie',x:200,y:250,h:200,hair:'ShortCurly',face:'EyesClosed',extra:'headphones'})+
    note(292,92,1.1)+note(316,64,0.8)+note(110,130,0.9)+note(84,150,0.7),
    'Un chico escucha música con los ojos cerrados y los cascos puestos');});

/* 56 */ add('bici','Ir en bici al trabajo','Hábitos saludables, rutinas, ciudad',function(){
  return svg(building(10,GROUND,90,170)+building(300,GROUND,90,150)+bicycle(250,GROUND,1.2)+
    peep({pose:'standing/RestingBW',x:166,h:200,hair:'Hijab',face:'Smile'})+ground(10,390),
    'Una mujer con hiyab junto a su bicicleta en la ciudad');});

/* 57 */ add('leer','Leer y desconectar','Lectura, tiempo para uno mismo, calma',function(){
  var o={pose:'sitting/CrossedLegs',x:178,h:186,hair:'MediumBangs',face:'Pensive',glasses:'GlassRound'}, s=seat(o);
  return svg(bookshelf(260,GROUND,120,170)+floorLamp(56,GROUND,156)+armchair(s.x+6,s.y,GROUND,-1,62)+peep(o)+openBook(206,s.y-34,22)+rug(180,GROUND,120)+floor(),
    'Una mujer con gafas lee tranquila en su sillón junto a la estantería');});

/* 58 */ add('movil-noche','El móvil en la cama','Pantallas e insomnio, hábitos de sueño',function(){
  return svg(windowBox(300,30,76,66,moon(338,58,11)+stars([[316,46,0.6]]))+
    p('M70 200 V96 Q70 80 86 80 H234 Q250 80 250 96 V200',W,2.2)+p('M80 186 V100 Q80 90 90 90 H230 Q240 90 240 100 V186',null,1.4)+
    r(96,120,64,26,12,W,1.8)+
    peep({pose:'bust/Device',x:172,y:214,h:124,hair:'MediumStraight',face:'Tired'})+
    p('M40 '+GROUND+' V190 Q120 176 200 184 Q280 192 300 180 Q312 178 312 192 V'+GROUND+'Z',W,2.2)+p('M90 206 q30 -8 60 0 M200 214 q30 -10 70 -2',null,1.4)+
    nightstand(350,GROUND,'1:42')+floor(),
    'Una chica en la cama de noche, despierta mirando el móvil');});

/* 59 */ add('cuidar','Cuidar a un familiar','Cuidadores, sobrecarga, dependencia',function(){
  var o={pose:'sitting/CrossedLegs',x:126,h:174,hair:'GrayShort',face:'Calm',beard:'MoustacheThin',glasses:'GlassClubmaster'}, s=seat(o);
  return svg(wallLine(150)+frame(40,40,44,36)+armchair(s.x+6,s.y,GROUND,-1,60)+peep(o)+sideTable(222,GROUND-44,GROUND)+mug(214,GROUND-44,true)+glass(232,GROUND-44)+
    peep({pose:'standing/EasingWB',x:300,h:204,flip:-1,hair:'Medium',face:'Tired'})+floor(),
    'Una mujer cansada cuida de su padre mayor, sentado en el sillón');});

/* 60 */ add('horizonte','Mirar hacia delante','Esperanza, futuro, cerrar una etapa',function(){
  return svg(p('M0 150 H400',null,2)+p('M150 150 A50 50 0 0 1 250 150',W,2)+p('M200 92 v-14 M160 108 l-10 -10 M240 108 l10 -10 M138 140 h-14 M262 140 h14',null,2)+
    sea(150).replace(/<path d="M0 150 H400"[^>]*\/>/,'')+birds(290,60)+birds(80,80)+railing(0,400,GROUND,46)+
    peep({pose:'standing/RestingWB',x:120,h:206,hair:'Twists',face:'Calm'})+
    peep({pose:'standing/CrossedArmsWB',x:300,h:200,flip:-1,hair:'MediumBangs',face:'Smile'}),
    'Dos personas junto a la barandilla miran la puesta de sol sobre el mar');});

DIB.list=LIST;
window.DIB=DIB;
})();
