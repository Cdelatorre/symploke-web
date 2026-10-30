/* Symploké · ilustraciones de la web: personajes de Transhumans (Pablo Stanley, CC0) sobre una mancha verde.
   Necesita th-data.js (y peeps-data.js solo para las piezas antiguas de Open Peeps).
   ILUS[slug](uid) devuelve un <svg> de 400×250 (ILUS.contacto, uno vertical). */
(function(){
'use strict';
var DK='#0E4A36', W='#FFFFFF', F1='#E6F6EE', F2='#CDEEDD', F3='#A9E1C6', BLOB='#BFEBD7', MID='#5FBF95'; /* mancha de fondo en verde apagado; al pasar el ratón se enciende al acento del logo */

/* ---------- personajes ---------- */
function head(o){
  var P=window.PEEPS;
  return '<g transform="translate(225 0)"><g>'+(P.hair[o.hair]||'')+'</g>'+
    '<g transform="translate(159 186)">'+(P.face[o.face||'Smile']||'')+'</g>'+
    (o.beard?'<g transform="translate(123 338)">'+(P.facialHair[o.beard]||'')+'</g>':'')+
    (o.glasses?'<g transform="translate(47 241)">'+(P.accessories[o.glasses]||'')+'</g>':'')+'</g>';
}
function colour(s,fill){return s.replace(/@@S@@/g,DK).replace(/@@B@@/g,fill||F1);}
var BB={};
function measure(pose){ // caja de la postura con una cabeza estándar (se mide una vez en el navegador)
  if(BB[pose])return BB[pose];
  var NS='http://www.w3.org/2000/svg', s=document.createElementNS(NS,'svg');
  s.setAttribute('width','10');s.setAttribute('height','10');s.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden';
  s.innerHTML='<g>'+colour(PEEPS.pose[pose]+head({hair:'Short'}))+'</g>';
  document.body.appendChild(s); var b=s.firstChild.getBBox(); document.body.removeChild(s);
  return (BB[pose]={x:b.x,y:b.y,w:b.width,h:b.height});
}
/* coloca un personaje: x = centro, y = suelo (pies), h = altura en px; flip = 1 mira a su izquierda (original), -1 al revés */
function peep(o){
  var b=measure(o.pose), sc=o.h/b.h, fl=o.flip||1;
  return '<g class="pp" transform="translate('+o.x+' '+o.y+') scale('+(fl*sc).toFixed(4)+' '+sc.toFixed(4)+') translate('+(-(b.x+b.w/2)).toFixed(1)+' '+(-(b.y+b.h)).toFixed(1)+')">'+colour(PEEPS.pose[o.pose]+head(o),W)+'</g>';
}

/* ---------- objetos, en el mismo trazo ---------- */
function st(w){return ' stroke="'+DK+'" stroke-width="'+(w||2.4)+'" stroke-linecap="round" stroke-linejoin="round"';}
function p(d,fill,w){return '<path d="'+d+'" fill="'+(fill||'none')+'"'+st(w)+'/>';}
function blob(cx,cy,rx,ry){return '<path d="M'+(cx-rx)+' '+cy+' C'+(cx-rx)+' '+(cy-ry*1.05)+' '+(cx-rx*0.2)+' '+(cy-ry)+' '+(cx+rx*0.15)+' '+(cy-ry*0.95)+' C'+(cx+rx*0.85)+' '+(cy-ry*0.9)+' '+(cx+rx*1.02)+' '+(cy-ry*0.2)+' '+(cx+rx)+' '+(cy+ry*0.15)+' C'+(cx+rx*0.96)+' '+(cy+ry*0.9)+' '+(cx+rx*0.2)+' '+(cy+ry)+' '+(cx-rx*0.25)+' '+(cy+ry*0.95)+' C'+(cx-rx*0.9)+' '+(cy+ry*0.9)+' '+(cx-rx)+' '+(cy+ry*0.5)+' '+(cx-rx)+' '+cy+'Z" class="bg" fill="'+BLOB+'"/>';}
function ground(x1,x2,y){return p('M'+x1+' '+y+' H'+x2,null,2.4);}
function sun(x,y,r){var s='<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+F2+'"'+st(2.2)+'/>';for(var i=0;i<8;i++){var a=i*Math.PI/4;s+=p('M'+(x+Math.cos(a)*(r+6)).toFixed(1)+' '+(y+Math.sin(a)*(r+6)).toFixed(1)+' L'+(x+Math.cos(a)*(r+12)).toFixed(1)+' '+(y+Math.sin(a)*(r+12)).toFixed(1),null,2.2);}return s;}
function tree(x,y,h,r){return p('M'+x+' '+y+' V'+(y-h),null,3.2)+p('M'+x+' '+(y-h*0.55)+' l12 -12',null,2.4)+'<circle cx="'+x+'" cy="'+(y-h-r*0.55)+'" r="'+r+'" fill="'+F3+'"'+st(2.4)+'/>'+p('M'+(x-r*0.4)+' '+(y-h-r*0.7)+' q6 -6 12 0',null,1.8);}
function plant(x,y,k){k=k||1;function L(a,b,c,d,e,f){return p('M'+x+' '+(y-22*k)+' C'+(x+a*k)+' '+(y+b*k)+' '+(x+c*k)+' '+(y+d*k)+' '+(x+e*k)+' '+(y+f*k)+' C'+(x+e*k*0.5)+' '+(y+f*k*0.6)+' '+(x+2*k)+' '+(y-40*k)+' '+x+' '+(y-22*k)+'Z',F3,2.2);}
  return L(-30,-50,-26,-78,-8,-74)+L(26,-44,34,-70,16,-72)+L(-4,-62,6,-92,4,-98)+p('M'+(x-14*k)+' '+(y-24*k)+' H'+(x+14*k)+' L'+(x+10*k)+' '+y+' H'+(x-10*k)+'Z',W,2.4);}
function bench(x1,x2,yTop,yGround){return p('M'+x1+' '+yTop+' H'+x2+' V'+(yTop+9)+' H'+x1+' Z',F2,2.4)+p('M'+(x1+12)+' '+(yTop+9)+' V'+yGround+' M'+(x2-12)+' '+(yTop+9)+' V'+yGround,null,3);}
function benchBack(x1,x2,yTop){return p('M'+x1+' '+(yTop-46)+' H'+x2+' V'+(yTop-36)+' H'+x1+' Z',F2,2.4)+p('M'+x1+' '+(yTop-28)+' H'+x2+' V'+(yTop-18)+' H'+x1+' Z',F2,2.4)+p('M'+(x1+14)+' '+(yTop-46)+' V'+yTop+' M'+(x2-14)+' '+(yTop-46)+' V'+yTop,null,3);}
function table(x1,x2,yTop,yGround){return p('M'+x1+' '+yTop+' H'+x2,null,3.2)+p('M'+(x1+14)+' '+yTop+' V'+yGround+' M'+(x2-14)+' '+yTop+' V'+yGround,null,3);}
function chair(x,seatY,yGround,back){ // back: -1 respaldo a la izquierda, 1 a la derecha
  return p('M'+(x-20)+' '+seatY+' H'+(x+20)+' V'+(seatY+7)+' H'+(x-20)+' Z',F2,2.4)+p('M'+(x-15)+' '+(seatY+7)+' V'+yGround+' M'+(x+15)+' '+(seatY+7)+' V'+yGround,null,3)+p('M'+(x+back*19)+' '+seatY+' V'+(seatY-50),null,3.4);
}
function cup(x,y){return p('M'+(x-5)+' '+(y-12)+' H'+(x+5)+' L'+(x+4)+' '+y+' H'+(x-4)+'Z',W,2)+p('M'+(x-2)+' '+(y-16)+' q-3 -4 0 -8 M'+(x+3)+' '+(y-16)+' q-3 -4 0 -8',null,1.6);}
function plate(x,y){return '<ellipse cx="'+x+'" cy="'+y+'" rx="15" ry="4" fill="'+W+'"'+st(2)+'/>'+'<circle cx="'+(x-4)+'" cy="'+(y-3)+'" r="4" fill="'+F3+'"'+st(1.6)+'/><circle cx="'+(x+4)+'" cy="'+(y-3)+'" r="3.5" fill="'+MID+'"'+st(1.6)+'/>';}
function sofa(x1,x2,ySeat,yGround){return p('M'+(x1+10)+' '+(ySeat-2)+' C'+(x1+6)+' '+(ySeat-70)+' '+(x1+20)+' '+(ySeat-78)+' '+((x1+x2)/2)+' '+(ySeat-78)+' C'+(x2-20)+' '+(ySeat-78)+' '+(x2-6)+' '+(ySeat-70)+' '+(x2-10)+' '+(ySeat-2)+'Z',F2,2.4)+p('M'+(x1+8)+' '+ySeat+' H'+(x2-8)+' V'+(ySeat+20)+' H'+(x1+8)+'Z',F2,2.4)+p('M'+(x1-4)+' '+(ySeat+22)+' Q'+(x1-8)+' '+(ySeat-36)+' '+(x1+12)+' '+(ySeat-40)+' Q'+(x1+24)+' '+(ySeat-36)+' '+(x1+22)+' '+(ySeat-14)+' L'+(x1+20)+' '+(ySeat+22)+'Z',F2,2.4)+p('M'+(x2+4)+' '+(ySeat+22)+' Q'+(x2+8)+' '+(ySeat-36)+' '+(x2-12)+' '+(ySeat-40)+' Q'+(x2-24)+' '+(ySeat-36)+' '+(x2-22)+' '+(ySeat-14)+' L'+(x2-20)+' '+(ySeat+22)+'Z',F2,2.4)+p('M'+(x1+14)+' '+(ySeat+22)+' V'+yGround+' M'+(x2-14)+' '+(ySeat+22)+' V'+yGround,null,3);}
function windowFrame(x,y,w,h){return p('M'+x+' '+y+' H'+(x+w)+' V'+(y+h)+' H'+x+'Z',W,2.4)+p('M'+(x+w/2)+' '+y+' V'+(y+h)+' M'+x+' '+(y+h/2)+' H'+(x+w),null,2)+'<path d="M'+(x+8)+' '+(y+6)+' L'+(x+w*0.45)+' '+(y+6)+' L'+(x+w*0.2)+' '+(y+h-6)+' L'+(x+4)+' '+(y+h-6)+'Z" fill="'+BLOB+'"/>';}
function birds(x,y){return p('M'+x+' '+y+' q5 -5 10 0 q5 -5 10 0 M'+(x+30)+' '+(y+12)+' q4 -4 8 0 q4 -4 8 0',null,1.8);}
function svg(body,label){return '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+label+'"><rect width="400" height="250" fill="'+W+'"/>'+body+'</svg>';}

/* ---------- personajes de Transhumans (th-data.js): trazo a pincel en tinta casi negra y rellenos blancos ---------- */
var INK='#13231C', TB={};
function thBox(n){ // caja del dibujo dentro de su lienzo de 1080 (se mide una vez en el navegador)
  if(TB[n])return TB[n];
  var NS='http://www.w3.org/2000/svg', s=document.createElementNS(NS,'svg');
  s.setAttribute('width','10');s.setAttribute('height','10');s.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden';
  s.innerHTML='<g>'+TH[n]+'</g>';
  document.body.appendChild(s); var b=s.firstChild.getBBox(); document.body.removeChild(s);
  return (TB[n]={x:b.x,y:b.y,w:b.width,h:b.height});
}
/* coloca un personaje: n = nombre en TH, x = centro, y = suelo, h = altura en px; flip = -1 lo da la vuelta */
function th(o){
  if(!window.TH||!TH[o.n])return '';
  var b=thBox(o.n), sc=o.h/b.h, fl=o.flip||1;
  return '<g class="pp" transform="translate('+o.x+' '+o.y+') scale('+(fl*sc).toFixed(4)+' '+sc.toFixed(4)+') translate('+(-(b.x+b.w/2)).toFixed(1)+' '+(-(b.y+b.h)).toFixed(1)+')">'+TH[o.n].replace(/@@S@@/g,INK).replace(/@@B@@/g,W)+'</g>';
}
/* escena estándar: la mancha de fondo y uno o varios personajes con los pies en y = 236 */
function scene(figs,label){
  return svg(blob(200,132,168,96)+figs.map(function(f){if(f.y===undefined)f.y=236;if(f.x===undefined)f.x=200;return th(f);}).join(''),label);
}

/* ---------- ilustraciones propias (PNG en maqueta/img/ con el fondo exterior ya transparente) ----------
   la ruta se calcula desde este script, así funciona en cualquier página y abriendo el HTML como archivo;
   el blanco de dentro del dibujo (cara, ropa, sillón) se queda blanco, como en el resto de ilustraciones */
var HERE=(document.currentScript&&document.currentScript.src)||location.href;
function own(file,x,y,w,h){return '<image href="'+new URL('img/'+file,HERE).href+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" preserveAspectRatio="xMidYMid meet"/>';}

/* ---------- escenas (una por motivo) ---------- */
var ILUS={};
ILUS.portada=function(){return svg(blob(200,132,168,96)+own('lectora-sillon.png',46,10,308,230),'Mujer leyendo tranquila el periódico en su sillón, junto a una planta');};
ILUS.ansiedad=function(){return svg(blob(200,132,168,96)+own('ansiedad-mochila.png',144,24,113,212),'Chica caminando con una mochila muy cargada de libros');};
ILUS.depresion=function(){return svg(blob(200,132,168,96)+own('depresion-perrito.png',120,26,160,210),'Persona sentada en el suelo abrazando a un cachorro, con los ojos cerrados');};
ILUS.insomnio=function(){return svg(blob(200,132,168,96)+own('insomnio-ventana.png',81,28,238,200),'Hombre asomado a la ventana de noche, sin poder dormir');};
ILUS.alimentacion=function(){return svg(blob(200,132,168,96)+own('alimentacion-paseo.png',135,24,131,212),'Chica caminando con auriculares y mochila');};
ILUS.pareja=function(){return svg(blob(200,132,168,96)+own('pareja-cachorros.png',50,36,300,200),'Pareja sentada en el suelo, cada uno con un cachorro en brazos');};
ILUS.tdah=function(){return svg(blob(200,132,168,96)+own('tdah-lectora.png',104,36,193,200),'Chica sentada en el suelo leyendo un libro, con una pila de libros al lado');};
ILUS.adicciones=function(){return svg(blob(200,132,168,96)+own('adicciones-gato.png',172,24,56,212),'Chica de pie, tranquila, con las manos en los bolsillos');};
ILUS.autoestima=function(){return svg(blob(200,132,168,96)+own('autoestima-abrigo.png',134,24,131,212),'Mujer con abrigo blanco caminando segura mientras escucha música');};
ILUS.duelo=function(){return svg(blob(200,132,168,96)+own('duelo-sentado.png',96,26,209,210),'Chico sentado en el suelo abrazando sus rodillas, pensativo');};
ILUS.infancia=function(){return svg(blob(200,132,168,96)+own('infancia-juego.png',70,36,259,200),'Dos niños jugando juntos sentados en el suelo, con piezas de construcción y un ábaco');};
ILUS.personalidad=function(){return svg(blob(200,132,168,96)+own('personalidad-senala.png',142,24,116,212),'Chica que se tapa la boca mientras señala hacia otro lado');};
ILUS.sexual=function(){return svg(blob(200,132,168,96)+own('sexual-cama.png',35,30,330,206),'Dos mujeres sentadas en la cama, riendo juntas');};

/* ---------- formatos de terapia ---------- */
ILUS.presencial=function(){return svg(blob(200,132,168,96)+own('consulta-sillones.png',35,36,330,200),'Terapia presencial: psicólogo y paciente conversando, cada uno en su sillón');};
ILUS.online=function(){return svg(blob(200,132,168,96)+own('consulta-online.png',80,24,240,212),'Terapia online: una persona en su mesa en videollamada con su psicóloga');};
ILUS.grupos=function(){return svg(blob(200,132,168,96)+own('grupos-taller.png',20,40,360,196),'Grupo: una psicóloga explica en un rotafolio a tres personas sentadas');};
ILUS.talleres=function(){return scene([{n:'whoa',h:208}],'Taller: una persona explica señalando');};
ILUS.charlas=function(){return scene([{n:'entertainment',h:212,flip:-1}],'Charla: una ponente habla con soltura');};

/* ---------- página de contacto: el mismo dibujo de la lectora que en Terapias ---------- */
ILUS.contacto=function(){return ILUS.portada();};

window.ILUS=ILUS;
})();
