/* Symploké · ilustraciones de la maqueta con personajes de Open Peeps (Pablo Stanley, CC0),
   recoloreados con los verdes de la marca: verde oscuro para el trazo y verdes claros para los rellenos.
   Necesita peeps-data.js. ILUS[slug](uid) devuelve un <svg> de 400×250. */
(function(){
'use strict';
var DK='#0E4A36', W='#FFFFFF', F1='#E6F6EE', F2='#CDEEDD', F3='#A9E1C6', BLOB='#E3F5EC', MID='#5FBF95';

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
  return '<g class="pp" transform="translate('+o.x+' '+o.y+') scale('+(fl*sc).toFixed(4)+' '+sc.toFixed(4)+') translate('+(-(b.x+b.w/2)).toFixed(1)+' '+(-(b.y+b.h)).toFixed(1)+')">'+colour(PEEPS.pose[o.pose]+head(o),o.fill)+'</g>';
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

/* ---------- escenas (una por motivo, a partir de la foto que tenía) ---------- */
var ILUS={};
ILUS.portada=function(){
  return svg(blob(205,130,150,96)+ground(40,360,228)+plant(70,226,1.05)+
    p('M300 166 H356 M306 166 L302 228 M350 166 L354 228',null,3)+p('M316 166 L322 134 H340 L346 166 Z',F2,2.4)+p('M331 134 V112 M322 112 H340',null,2.4)+
    sofa(150,262,186,228)+peep({pose:'sitting/CrossedLegs',hair:'LongCurly',face:'Calm',x:206,y:228,h:150,fill:F1}),
    'Mujer tranquila sentada en su sillón');
};
ILUS.ansiedad=function(){
  return svg(blob(200,140,170,92)+sun(330,52,14)+tree(64,226,64,30)+tree(122,226,44,22)+tree(296,226,50,24)+ground(20,380,228)+
    peep({pose:'standing/WalkingWB',hair:'Long',face:'Calm',x:205,y:228,h:196,fill:F1}),
    'Mujer paseando tranquila por un parque');
};
ILUS.depresion=function(){
  return svg(blob(200,138,170,96)+sun(60,48,14)+ground(40,360,228)+
    peep({pose:'standing/PointingFingerWB',hair:'Bun',face:'SmileBig',x:156,y:228,h:192,fill:F1})+
    peep({pose:'standing/RestingBW',hair:'Afro',face:'SmileLol',x:262,y:228,h:196,fill:F2,flip:-1}),
    'Dos amigas riendo juntas');
};
ILUS.insomnio=function(){
  return svg(blob(210,140,160,90)+sun(70,52,16)+ground(30,370,228)+plant(352,226,0.8)+
    benchBack(130,300,188)+bench(130,300,188,228)+
    peep({pose:'sitting/ClosedLegBW',hair:'GrayBun',face:'EyesClosed',x:212,y:226,h:142,fill:F1}),
    'Mujer descansando al sol, con los ojos cerrados');
};
ILUS.alimentacion=function(){
  return svg(blob(200,140,168,92)+windowFrame(166,30,68,62)+ground(30,370,228)+chair(112,188,228,-1)+chair(290,188,228,1)+
    peep({pose:'sitting/ClosedLegWB',hair:'Medium',face:'EatingHappy',x:118,y:228,h:146,fill:F1})+
    peep({pose:'sitting/ClosedLegBW',hair:'ShortCurly',face:'SmileBig',beard:'Goatee',x:284,y:228,h:146,fill:F2,flip:-1})+
    table(150,250,164,228)+plate(180,160)+plate(222,160)+cup(202,160),
    'Dos amigos comiendo juntos y riendo');
};
ILUS.pareja=function(){
  return svg(blob(200,136,170,94)+tree(340,226,60,26)+ground(30,370,228)+benchBack(104,296,186)+bench(104,296,186,228)+
    peep({pose:'sitting/ClosedLegWB',hair:'Long',face:'LoveGrin',x:166,y:226,h:142,fill:F1})+
    peep({pose:'sitting/CrossedLegs',hair:'Short',face:'SmileTeeth',beard:'FullMedium',x:244,y:226,h:146,fill:F2,flip:-1}),
    'Pareja sonriente sentada en un banco');
};
ILUS.tdah=function(){
  return svg(blob(200,138,168,94)+windowFrame(270,30,84,72)+ground(30,370,228)+
    chair(140,188,228,-1)+peep({pose:'sitting/ClosedLegWB',hair:'MediumBangs',face:'Driven',glasses:'GlassRound',x:150,y:228,h:146,fill:F1})+
    table(176,330,160,228)+p('M232 160 L244 126 H286 L280 160 Z',F2,2.4)+'<circle cx="262" cy="142" r="5" fill="'+MID+'"/>'+p('M196 158 H222 L220 152 H198 Z',W,2)+cup(306,160),
    'Mujer concentrada estudiando con su portátil');
};
ILUS.adicciones=function(){
  return svg(blob(200,140,170,92)+p('M70 228 V44 M330 228 V44',null,3.4)+p('M58 30 H342 V62 H58 Z',MID,2.4)+'<text x="200" y="54" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="600" font-size="20" fill="'+W+'">META</text>'+ground(20,380,228)+
    [[104,90,F3],[300,96,MID],[132,72,MID],[270,74,F3],[96,128,MID],[312,130,F3]].map(function(c,i){return '<rect x="'+c[0]+'" y="'+c[1]+'" width="6" height="11" rx="1.5" fill="'+c[2]+'" transform="rotate('+(i*40)+' '+c[0]+' '+c[1]+')"/>';}).join('')+
    peep({pose:'standing/EasingWB',hair:'ShortWavy',face:'SmileTeeth',x:200,y:228,h:158,fill:F1}),
    'Hombre feliz cruzando la meta');
};
ILUS.autoestima=function(){
  return svg(blob(210,138,160,94)+windowFrame(60,34,92,120)+ground(30,370,228)+plant(330,226,0.95)+
    peep({pose:'standing/PolkaDots',hair:'LongCurly',face:'Cute',x:226,y:228,h:196,fill:F1}),
    'Mujer segura de sí misma, sonriendo');
};
ILUS.duelo=function(){
  return svg(blob(200,140,172,92)+tree(74,226,58,30)+tree(330,226,46,24)+birds(250,46)+ground(20,380,228)+
    peep({pose:'standing/EasingBW',hair:'GrayShort',face:'Calm',x:170,y:228,h:192,fill:F1})+
    peep({pose:'standing/WalkingBW',hair:'Bun',face:'SmileBig',x:236,y:228,h:132,fill:F2,flip:-1}),
    'Abuela y nieta paseando tranquilas por el parque');
};
ILUS.infancia=function(){
  return svg(blob(200,140,172,92)+tree(358,226,52,22)+ground(20,380,228)+
    peep({pose:'sitting/OneLegUpWB',hair:'Beanie',face:'SmileLol',x:118,y:228,h:128,fill:F1})+
    peep({pose:'sitting/MediumWB',hair:'Twists',face:'SmileTeeth',x:200,y:228,h:126,fill:F2})+
    peep({pose:'standing/CrossedArmsWB',hair:'MediumStraight',face:'Smile',x:310,y:228,h:194,fill:F1,flip:-1}),
    'Dos adolescentes riendo con su madre');
};
ILUS.personalidad=function(){
  return svg(blob(200,138,168,94)+p('M40 92 H140 M260 92 H360 M40 150 H140 M260 150 H360',null,3)+plant(70,92,0.5)+plant(110,92,0.42)+plant(300,92,0.45)+plant(338,150,0.5)+plant(76,150,0.46)+ground(20,380,228)+
    peep({pose:'standing/ShirtPantsWB',hair:'Pomp',face:'Smile',beard:'Full',glasses:'GlassClubmaster',x:200,y:228,h:196,fill:F1}),
    'Hombre sonriente y tranquilo entre plantas');
};
ILUS.sexual=function(){
  return svg(blob(200,138,170,92)+p('M346 228 V70 M332 70 H360 L354 50 H338 Z',null,2.4)+'<path d="M332 70 H360 L354 50 H338 Z" fill="'+F3+'"/>'+ground(20,380,228)+sofa(110,296,180,228)+
    peep({pose:'sitting/ClosedLegBW',hair:'MediumShort',face:'LoveGrin',x:166,y:226,h:140,fill:F1})+
    peep({pose:'sitting/CrossedLegs',hair:'ShortMessy',face:'Cheeky',beard:'Chin',x:242,y:226,h:144,fill:F2,flip:-1}),
    'Pareja relajada y cómplice en el sofá');
};

/* ---------- formatos de terapia ---------- */
/* sillón visto de lado: respaldo detrás de la espalda (back = -1 a la izquierda, 1 a la derecha) */
function armchair(x,seatY,yGround,back){
  var bx=x+back*34;
  return p('M'+(bx-9)+' '+(seatY+16)+' Q'+(bx-11)+' '+(seatY-64)+' '+bx+' '+(seatY-66)+' Q'+(bx+11)+' '+(seatY-64)+' '+(bx+9)+' '+(seatY+16)+' Z',F2,2.4)+
    p('M'+(x-40)+' '+(seatY-2)+' Q'+(x-42)+' '+(seatY+20)+' '+(x-30)+' '+(seatY+22)+' H'+(x+30)+' Q'+(x+42)+' '+(seatY+20)+' '+(x+40)+' '+(seatY-2)+' Z',F2,2.4)+
    p('M'+(x-28)+' '+(seatY+22)+' V'+yGround+' M'+(x+28)+' '+(seatY+22)+' V'+yGround,null,3);
}
ILUS.presencial=function(){
  return svg(blob(200,138,174,94)+windowFrame(166,26,68,58)+plant(366,226,0.72)+ground(24,376,228)+
    armchair(112,180,228,-1)+peep({pose:'sitting/ClosedLegWB',hair:'Medium',face:'Smile',x:118,y:228,h:146,fill:F1})+
    armchair(288,180,228,1)+peep({pose:'sitting/CrossedLegs',hair:'GrayShort',face:'Calm',glasses:'GlassRound',x:282,y:228,h:148,fill:F2,flip:-1})+
    p('M184 194 H216 M190 194 V228 M210 194 V228',null,3)+cup(200,192),
    'Terapia presencial: dos personas conversando en dos sillones');
};
ILUS.online=function(u){
  u=u||'on';
  var sx=226, sy=70, sw=112, sh=78;   // pantalla del ordenador
  var screen=p('M'+sx+' '+sy+' H'+(sx+sw)+' V'+(sy+sh)+' H'+sx+' Z',F1,2.6)+
    '<clipPath id="scr'+u+'"><rect x="'+(sx+2)+'" y="'+(sy+2)+'" width="'+(sw-4)+'" height="'+(sh-4)+'"/></clipPath>'+
    '<g clip-path="url(#scr'+u+')">'+blob(sx+sw/2,sy+sh/2+8,44,30)+peep({pose:'bust/Coffee',hair:'GrayShort',face:'Smile',glasses:'GlassRound',x:sx+sw/2,y:sy+sh+2,h:74,fill:W})+'</g>'+
    p('M'+(sx+sw/2)+' '+(sy+sh)+' V'+(sy+sh+12)+' M'+(sx+sw/2-16)+' '+(sy+sh+12)+' H'+(sx+sw/2+16),null,3)+
    '<circle cx="'+(sx+sw-10)+'" cy="'+(sy+10)+'" r="3" fill="'+MID+'"/>';
  return svg(blob(200,138,174,94)+windowFrame(40,26,70,58)+ground(24,376,228)+
    chair(130,188,228,-1)+peep({pose:'sitting/ClosedLegWB',hair:'Bun',face:'SmileBig',x:140,y:228,h:146,fill:F1})+
    table(170,356,160,228)+screen+p('M246 158 H316',null,4)+cup(340,160),
    'Terapia online: una persona en sesión por videollamada; en la pantalla, su psicólogo');
};
ILUS.grupos=function(){
  var g=blob(200,138,180,94)+ground(14,386,228);
  /* corro visto de frente: dos personas a cada lado mirando al centro y una silla libre en medio */
  [[56,'Afro','SmileBig',F1,1,null],[130,'Long','Smile',F2,1,null],[200,null],[270,'GrayBun','Calm',F1,-1,null],[344,'ShortWavy','LoveGrin',F2,-1,'Goatee']].forEach(function(c){
    if(!c[1]){g+=chair(c[0],198,228,-1)+p('M'+(c[0]-19)+' 198 V150 M'+(c[0]+19)+' 198 V150 M'+(c[0]-19)+' 160 H'+(c[0]+19),null,3);return;}
    g+=chair(c[0],198,228,c[4]>0?-1:1)+peep({pose:c[4]>0?'sitting/ClosedLegWB':'sitting/ClosedLegBW',hair:c[1],face:c[2],beard:c[5],x:c[0]+c[4]*7,y:228,h:116,fill:c[3],flip:c[4]});
  });
  return svg(g,'Grupo o taller: personas sentadas en corro, con una silla libre');
};
ILUS.talleres=function(){
  return svg(blob(200,138,170,94)+ground(30,370,228)+
    p('M300 228 L318 64 L336 228 M318 64 V40',null,2.6)+p('M262 56 H374 V146 H262 Z',W,2.4)+p('M276 78 H340 M276 96 H358 M276 114 H326',null,2.2)+'<circle cx="352" cy="120" r="9" fill="'+F3+'"'+st(1.8)+'/>'+
    chair(92,198,228,-1)+peep({pose:'sitting/ClosedLegWB',hair:'ShortCurly',face:'Smile',x:102,y:228,h:118,fill:F2})+
    peep({pose:'standing/PointingFingerWB',hair:'MediumStraight',face:'Explaining',x:210,y:228,h:182,fill:F1}),
    'Taller: una persona explica junto a una pizarra');
};
ILUS.charlas=function(){
  var aud='';
  [[60,206],[118,212],[176,206],[234,214]].forEach(function(a){aud+=p('M'+(a[0]-26)+' 250 C'+(a[0]-26)+' '+(a[1]+8)+' '+(a[0]+26)+' '+(a[1]+8)+' '+(a[0]+26)+' 250 Z',F2,2.4)+'<circle cx="'+a[0]+'" cy="'+(a[1]-6)+'" r="15" fill="'+F3+'"'+st(2.4)+'/>';});
  return svg(blob(220,124,170,92)+p('M40 30 H210 V120 H40 Z',W,2.4)+p('M58 52 H150 M58 72 H190 M58 92 H130',null,2.2)+
    p('M352 228 V150 M344 150 h16',null,2.6)+peep({pose:'standing/EasingWB',hair:'Bun',face:'SmileBig',x:300,y:228,h:176,fill:F1,flip:-1})+ground(260,380,228)+aud,
    'Charla: una ponente habla ante el público');
};

/* ---------- página de contacto: retrato grande con flechas a mano que señalan cómo trabajamos ---------- */
function arrowHead(x,y,deg,cls){
  var a=deg*Math.PI/180, l=16, s='';
  [-0.5,0.5].forEach(function(o){s+='M'+x+' '+y+' L'+(x-Math.cos(a+o)*l).toFixed(1)+' '+(y-Math.sin(a+o)*l).toFixed(1)+' ';});
  return '<path d="'+s+'" class="'+cls+'" fill="none" stroke-width="4" stroke-linecap="round"/>';
}
function arrow(d,x,y,deg,cls){return '<path d="'+d+'" class="'+cls+'" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+arrowHead(x,y,deg,cls);}
function label(x,y,anchor,t,s){return '<text x="'+x+'" y="'+y+'" text-anchor="'+anchor+'" fill="'+DK+'"><tspan font-family="DM Serif Display, Georgia, serif" font-size="30">'+t+'</tspan><tspan x="'+x+'" dy="24" font-family="DM Sans, sans-serif" font-size="15">'+s+'</tspan></text>';}
ILUS.contacto=function(){
  return '<svg viewBox="0 0 600 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Psicólogo sonriente rodeado de flechas dibujadas a mano: escucha, sin juicios, confidencial, a tu ritmo">'+
    '<style>.ar{stroke:'+DK+'}.ac{stroke:#5FE3A8}</style>'+
    blob(300,420,230,200)+
    peep({pose:'bust/Sweater',hair:'ShortCurly',face:'Smile',beard:'Full',glasses:'GlassRound',x:300,y:660,h:520,fill:F1})+
    label(16,92,'start','Escucha','sin prisas, con atención')+
    arrow('M30 150 C80 130 128 140 132 168 C136 192 104 196 100 176 C96 152 140 140 196 196',196,196,45,'ar')+
    label(16,300,'start','Sin juicios','lo que te pasa, tal cual')+
    arrow('M28 372 C100 376 160 354 196 310',196,310,-51,'ar')+
    label(584,92,'end','Confidencial','lo que hablamos, se queda aquí')+
    arrow('M570 146 C530 150 470 182 420 228',420,228,138,'ar')+
    label(584,300,'end','A tu ritmo','presencial u online')+
    arrow('M576 384 C540 396 504 384 512 360 C520 336 552 350 538 368 C522 388 470 374 420 350',420,350,205,'ac')+
    '</svg>';
};

window.ILUS=ILUS;
})();
