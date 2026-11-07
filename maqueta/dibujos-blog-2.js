/* Symploké · dibujos para el blog, segunda tanda (61–120): personas dibujadas a mano en código, sin bibliotecas,
   con línea fina, pelo y prendas en negro, estampados, pliegues y puños, como las ilustraciones de la web.
   Cada persona es un esqueleto articulado (FIG.person) con ropa, peinado y expresión; los objetos usan el mismo trazo.
   Se carga después de dibujos-blog.js y añade sus escenas a DIB.list. */
(function(){
'use strict';
var K='#151515', W='#FFFFFF', SW=1.45;
var NS=' vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"';

/* ---------- geometría ---------- */
function F(n){return Math.round(n*100)/100;}
function P(p){return F(p[0])+' '+F(p[1]);}
function add(a,b){return [a[0]+b[0],a[1]+b[1]];}
function sub(a,b){return [a[0]-b[0],a[1]-b[1]];}
function mul(a,k){return [a[0]*k,a[1]*k];}
function len(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]);}
function nrm(a){var l=len(a)||1;return [a[0]/l,a[1]/l];}
function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];}
function rot(v,deg){var a=deg*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return [v[0]*c-v[1]*s,v[0]*s+v[1]*c];}
/* dirección a partir de un ángulo medido desde «hacia abajo»; positivo = hacia delante (hacia donde mira) */
function dv(ang){var a=ang*Math.PI/180;return [Math.sin(a),Math.cos(a)];}
function perp(v){return [-v[1],v[0]];}
/* Catmull-Rom → Bézier */
function crSeg(pts,closed,t){
  t=t===undefined?1:t; var n=pts.length,d='',m=closed?n:n-1;
  function g(i){return closed?pts[(i+n)%n]:pts[Math.max(0,Math.min(n-1,i))];}
  for(var i=0;i<m;i++){var p0=g(i-1),p1=g(i),p2=g(i+1),p3=g(i+2);
    d+=' C'+P([p1[0]+(p2[0]-p0[0])/6*t,p1[1]+(p2[1]-p0[1])/6*t])+' '+P([p2[0]-(p3[0]-p1[0])/6*t,p2[1]-(p3[1]-p1[1])/6*t])+' '+P(p2);}
  return d;
}
function cr(pts,closed,t){return 'M'+P(pts[0])+crSeg(pts,closed,t)+(closed?'Z':'');}
function tr(pts,o,deg,k){k=k||1;return pts.map(function(p){return add(o,rot(mul(p,k),deg));});}

/* contorno de una extremidad que pasa por las articulaciones J con medio ancho Wd */
function limbSides(J,Wd){
  var n=J.length,L=[],R=[];
  for(var i=0;i<n;i++){
    var din=nrm(i>0?sub(J[i],J[i-1]):sub(J[1],J[0])), dout=nrm(i<n-1?sub(J[i+1],J[i]):din);
    var n1=perp(din),n2=perp(dout),w=Wd[i], dot=din[0]*dout[0]+din[1]*dout[1], ang=Math.acos(Math.max(-1,Math.min(1,dot)));
    if(i===0||i===n-1||ang<0.3){var m=nrm(add(n1,n2));L.push(add(J[i],mul(m,w)));R.push(sub(J[i],mul(m,w)));continue;}
    var mm=nrm(add(n1,n2)), ml=Math.min(w/Math.cos(ang/2),w*1.6), turn=sub(dout,din), inL=(turn[0]*n1[0]+turn[1]*n1[1])>0;
    if(inL){L.push(add(J[i],mul(mm,ml)));R.push(sub(J[i],mul(n1,w)),sub(J[i],mul(mm,w*1.02)),sub(J[i],mul(n2,w)));}
    else{R.push(sub(J[i],mul(mm,ml)));L.push(add(J[i],mul(n1,w)),add(J[i],mul(mm,w*1.02)),add(J[i],mul(n2,w)));}
  }
  return {L:L,R:R};
}
function limbPath(J,Wd,capS,capE){
  var s=limbSides(J,Wd),n=J.length,L=s.L,R=s.R.slice().reverse();
  var d0=nrm(sub(J[1],J[0])),d1=nrm(sub(J[n-1],J[n-2]));
  var pts=L.slice();
  if(capE==='round')pts.push(add(J[n-1],mul(d1,Wd[n-1]*0.95)));
  pts=pts.concat(R);
  if(capS==='round'){pts.push(sub(J[0],mul(d0,Wd[0]*0.95)));return cr(pts,true);}
  if(capE==='round')return cr(pts,false)+'Z';
  return 'M'+P(L[0])+crSeg(L,false)+' L'+P(R[0])+crSeg(R,false)+'Z';
}
/* trozo de una polilínea entre las fracciones de longitud a y b, con anchos interpolados */
function cut(J,Wd,a,b){
  var segs=[],tot=0,i;for(i=1;i<J.length;i++){var l=len(sub(J[i],J[i-1]));segs.push(l);tot+=l;}
  function at(t){var d=t*tot,acc=0;for(var k=0;k<segs.length;k++){if(acc+segs[k]>=d-1e-6){var u=(d-acc)/segs[k];return {p:lerp(J[k],J[k+1],u),w:Wd[k]+(Wd[k+1]-Wd[k])*u,k:k};}acc+=segs[k];}return {p:J[J.length-1],w:Wd[Wd.length-1],k:segs.length-1};}
  var A=at(a),B=at(b),PJ=[A.p],PW=[A.w];
  for(i=A.k+1;i<=B.k;i++){PJ.push(J[i]);PW.push(Wd[i]);}
  PJ.push(B.p);PW.push(B.w);
  if(PJ.length>2&&len(sub(PJ[1],PJ[0]))<0.4){PJ.splice(1,1);PW.splice(1,1);}
  if(PJ.length>2&&len(sub(PJ[PJ.length-1],PJ[PJ.length-2]))<0.4){PJ.splice(PJ.length-2,1);PW.splice(PW.length-2,1);}
  return {J:PJ,W:PW};
}
function pointAt(J,t){return cut(J,J.map(function(){return 1;}),0,t).J.slice(-1)[0];}

/* ---------- trazos ---------- */
function fillOf(f){return f==='k'?K:f==='dots'?'url(#symDots)':f==='stripes'?'url(#symStripes)':f==='check'?'url(#symCheck)':f==='grey'?'url(#symGrey)':f==='v'?'url(#symV)':W;}
function inkOn(f){return f==='k'?W:K;}
function path(d,fill,w,stroke){return '<path d="'+d+'" fill="'+(fill||'none')+'" stroke="'+(stroke||K)+'" stroke-width="'+(w||SW)+'"'+NS+'/>';}
function line(d,col,w){return '<path d="'+d+'" fill="none" stroke="'+(col||K)+'" stroke-width="'+(w||SW*0.8)+'"'+NS+'/>';}
function dot(p,r,col){return '<circle cx="'+F(p[0])+'" cy="'+F(p[1])+'" r="'+r+'" fill="'+(col||K)+'"/>';}
var DEFS='<defs>'+
  '<pattern id="symDots" width="4.2" height="4.2" patternUnits="userSpaceOnUse"><rect width="4.2" height="4.2" fill="#fff"/><circle cx="1.05" cy="1.05" r="0.62" fill="'+K+'"/><circle cx="3.15" cy="3.15" r="0.62" fill="'+K+'"/></pattern>'+
  '<pattern id="symStripes" width="6" height="3.4" patternUnits="userSpaceOnUse"><rect width="6" height="3.4" fill="#fff"/><rect y="0" width="6" height="1.25" fill="'+K+'"/></pattern>'+
  '<pattern id="symCheck" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#fff"/><rect width="2.5" height="5" fill="'+K+'" opacity=".55"/><rect width="5" height="2.5" fill="'+K+'" opacity=".55"/></pattern>'+
  '<pattern id="symV" width="3.2" height="4" patternUnits="userSpaceOnUse"><rect width="3.2" height="4" fill="#fff"/><rect width="0.9" height="4" fill="'+K+'"/></pattern>'+
  '<pattern id="symGrey" width="3" height="3" patternUnits="userSpaceOnUse"><rect width="3" height="3" fill="#fff"/><path d="M0 3 L3 0" stroke="'+K+'" stroke-width=".5"/></pattern>'+
  '</defs>';

/* ---------- cabeza (coordenadas propias: centro del cráneo en 0,0, mira a la derecha) ---------- */
var SKULL=[[-5.4,0.4],[-5.2,-3.4],[-3.0,-6.5],[0.6,-7.3],[3.9,-6.2],[5.3,-3.6],[5.6,-1.2],[5.8,0.5],[6.5,2.0],[5.7,2.7],[5.5,3.6],[4.7,5.3],[3.0,6.7],[1.0,6.8],[-1.4,5.6],[-3.2,3.6],[-4.8,2.2]];
/* casquete corto: nacimiento del pelo alto en la frente, patilla delante de la oreja y vuelta por encima de ella */
var CAP='M5.3 -3.8 C4.0 -3.0 2.4 -2.8 1.0 -2.4 C-0.2 -2.0 -0.8 -1.0 -1.0 0.6 L-1.5 0.6 C-1.6 -0.6 -2.4 -1.4 -3.4 -1.2 C-4.4 -1.0 -4.6 0.4 -4.4 1.6 L-4.6 3.0 C-5.8 1.6 -6.4 -1.0 -6.0 -3.4 C-5.4 -6.8 -2.6 -8.6 0.4 -8.6 C3.4 -8.6 5.4 -7.2 5.9 -5.4 C6.0 -4.8 5.8 -4.2 5.3 -3.8 Z';
var CAPF='M5.2 -3.4 C3.4 -3.8 1.4 -3.0 0.0 -1.6 C-0.9 -0.4 -1.2 1.4 -1.3 3.4 L-3.6 3.8 C-5.0 2.6 -6.4 0.0 -6.2 -3.2 C-5.8 -7.0 -2.8 -8.8 0.6 -8.8 C3.8 -8.8 5.8 -7.0 6.0 -5.0 C6.0 -4.2 5.7 -3.6 5.2 -3.4 Z';
var HAIR={
  short:{front:CAP,det:'M4.4 -7.0 C3.0 -6.2 1.8 -5.0 1.2 -3.4 M1.0 -8.2 C-0.4 -7.0 -1.2 -5.6 -1.6 -3.8 M-3.4 -7.2 C-4.4 -5.8 -4.8 -4.2 -4.8 -2.4'},
  side:{front:'M5.6 -3.2 C4.4 -2.4 2.8 -2.6 1.6 -2.4 C0 -2.0 -0.8 -1.0 -1.0 0.6 L-1.5 0.6 C-1.6 -0.6 -2.4 -1.4 -3.4 -1.2 C-4.4 -1.0 -4.6 0.4 -4.4 1.6 L-4.6 3.0 C-5.8 1.6 -6.4 -1.0 -6.0 -3.4 C-5.4 -7.0 -2.4 -9.0 0.8 -9.0 C4.0 -9.0 6.4 -7.0 6.6 -5.0 C6.6 -4.2 6.2 -3.6 5.6 -3.2 Z',det:'M-1.6 -8.6 C1.0 -7.6 3.6 -6.4 5.8 -4.2 M-3.8 -7.4 C-1.6 -6.8 0.6 -5.4 2.0 -3.4 M-5.2 -5.0 C-3.6 -4.6 -2.4 -3.4 -1.8 -1.8'},
  curlyShort:{front:'curly',cx:-0.4,cy:-4.6,rx:6.2,ry:4.4},
  long:{back:'M-4.8 -5.0 C-7.6 -1.6 -8.0 4.4 -7.2 10.6 C-6.2 12.6 -4.8 13.6 -3.0 13.8 C-2.0 11.4 -1.6 8.4 -1.6 5.8 Z',front:CAPF+' M-1.2 2.4 C-1.4 5.6 -2.0 8.4 -3.0 10.6 L-4.4 10.8 C-4.0 8.0 -3.8 5.0 -3.6 3.0 Z',det:'M0.6 -8.4 C-1.6 -6.6 -2.8 -3.6 -3.2 0.6 M3.4 -7.8 C2.0 -6.6 1.2 -5.0 0.6 -2.6 M-4.6 -6.0 C-5.6 -3.0 -5.8 1.0 -5.2 5.0'},
  bob:{back:'M-5.2 -4.4 C-7.4 -1.0 -7.6 4.0 -6.4 7.6 C-5.0 8.4 -3.4 8.4 -2.0 8.0 C-2.0 6.0 -2.2 4.0 -2.6 2.6 Z',front:CAPF+' M-1.2 2.4 C-1.2 4.8 -1.6 6.8 -2.2 8.2 L-3.6 8.2 C-3.4 6.4 -3.4 4.6 -3.6 3.0 Z',det:'M1.6 -8.4 C-0.6 -6.8 -2.2 -4.2 -2.8 -0.6 M-4.4 -6.4 C-5.4 -3.6 -5.6 0.4 -5.0 4.4'},
  bun:{bun:[-2.8,-8.6,3.0],front:CAP,det:'M4.6 -6.4 C2.6 -6.6 0.2 -6.0 -1.6 -4.4 M2.2 -8.2 C0.4 -7.6 -1.4 -6.4 -2.8 -4.8 M-3.6 -7.0 C-4.4 -5.6 -4.8 -4.0 -4.8 -2.2',tieAt:[-2.4,-6.4]},
  ponytail:{back:'M-4.6 -5.2 C-8.4 -5.0 -10.0 -0.6 -9.6 5.6 C-9.4 8.8 -8.6 11.0 -7.2 12.4 C-7.6 8.6 -7.2 4.4 -5.6 0.6 Z',front:CAP,det:'M4.6 -6.4 C2.0 -7.0 -1.4 -6.6 -4.4 -5.2 M3.0 -4.2 C0.4 -5.0 -2.6 -5.0 -5.2 -3.6 M-2.0 -8.2 C-3.6 -7.6 -4.8 -6.6 -5.4 -5.4',tie:[-5.4,-4.4]},
  afro:{front:'curly',cx:-0.8,cy:-3.6,rx:7.6,ry:6.2},
  curlyLong:{back:'curlyBack',front:'curly',cx:-1.0,cy:-3.4,rx:7.0,ry:5.6},
  grey:{front:CAP,fill:'w',det:'M4.4 -7.0 C3.0 -6.2 1.8 -5.0 1.2 -3.4 M1.0 -8.2 C-0.4 -7.0 -1.2 -5.6 -1.6 -3.8 M-3.4 -7.2 C-4.4 -5.8 -4.8 -4.2 -4.8 -2.4'},
  greyBun:{bun:[-3.0,-8.2,2.7],front:CAP,fill:'w',det:'M4.6 -6.4 C2.6 -6.6 0.2 -6.0 -1.6 -4.4 M2.2 -8.2 C0.4 -7.6 -1.4 -6.4 -2.8 -4.8 M-3.6 -7.0 C-4.4 -5.6 -4.8 -4.0 -4.8 -2.2'},
  bald:{front:'M-1.0 0.6 L-1.5 0.6 C-1.6 -0.6 -2.4 -1.4 -3.4 -1.2 C-4.4 -1.0 -4.6 0.4 -4.4 1.6 L-4.6 3.0 C-5.6 1.8 -6.0 0.2 -5.9 -1.6 C-5.0 -2.6 -3.0 -2.6 -1.6 -2.2 C-1.2 -1.4 -1.0 -0.4 -1.0 0.6 Z',fill:'w',det:'M-4.6 -1.6 C-5.2 -0.8 -5.4 0.4 -5.2 1.4'},
  hijab:{back:'M-6.2 -2.0 C-7.6 3.0 -7.4 8.4 -5.6 12.4 C-1.6 14.0 3.2 13.2 6.4 11.4 C5.6 9.8 4.6 8.6 3.8 7.8 Z',front:'M6.0 -2.4 C6.6 -6.6 3.8 -9.2 -0.2 -9.2 C-4.8 -9.2 -7.2 -5.6 -6.8 -0.6 C-6.6 3.2 -5.6 6.4 -3.4 8.4 C-0.6 9.6 2.2 9.0 3.9 7.8 C2.8 7.4 1.4 7.6 0.2 7.2 C-1.6 6.6 -2.8 4.8 -3.0 2.6 C-3.2 0.0 -2.4 -2.0 -0.6 -2.8 C1.4 -3.6 3.8 -3.2 6.0 -2.4 Z',fill:'w',det:'M-4.6 -6.4 C-5.8 -2.0 -5.4 3.0 -3.2 7.2 M4.4 9.4 C2.2 10.8 -1.6 11.2 -4.6 10.4 M1.0 -8.6 C-1.8 -7.0 -3.4 -4.4 -4.0 -1.0'},
  cap:{front:'M5.4 -3.2 C5.6 -6.6 3.2 -8.6 -0.2 -8.6 C-4.0 -8.6 -6.0 -6.0 -6.0 -3.0 C-6.0 -0.4 -5.4 1.4 -4.6 3.0 L-4.4 1.6 C-4.6 0.4 -4.4 -1.0 -3.4 -1.2 C-2.4 -1.4 -1.6 -0.6 -1.5 0.6 L-1.0 0.6 C-0.8 -1.0 -0.4 -2.2 0.6 -2.8 C2.0 -3.2 3.8 -3.2 5.4 -3.2 Z M4.8 -3.6 C7.0 -3.8 9.0 -3.2 10.0 -2.4 C8.4 -1.6 6.6 -1.8 4.8 -2.0 Z',det:'M-0.6 -8.4 C0.8 -6.4 1.4 -4.6 1.2 -2.8'}
};
function curly(cx,cy,rx,ry){return bumpy(cx,cy,rx,ry,Math.round(rx*2.8),rx>6.5?1.0:0.8);}
function bumpy(cx,cy,rx,ry,n,amp){
  var d='',pts=[];for(var i=0;i<n;i++){var a=i/n*Math.PI*2;pts.push([cx+Math.cos(a)*rx,cy+Math.sin(a)*ry]);}
  d='M'+P(pts[0]);
  for(i=0;i<n;i++){var a1=pts[i],a2=pts[(i+1)%n],m=lerp(a1,a2,0.5),o=nrm(sub(m,[cx,cy]));d+=' Q'+P(add(m,mul(o,amp)))+' '+P(a2);}
  return d+'Z';
}
var FACE={
  calm:{eyes:'dot',brow:'soft',mouth:'M2.6 4.2 q0.9 0.5 1.8 0'},
  smile:{eyes:'dot',brow:'soft',mouth:'M2.2 3.9 q1.3 1.3 2.6 0'},
  laugh:{eyes:'happy',brow:'up',mouthFill:'M2.0 3.6 q1.6 0.4 3.0 -0.2 q-0.2 2.4 -1.6 2.6 q-1.2 0 -1.4 -2.4 Z'},
  talk:{eyes:'dot',brow:'soft',mouthFill:'M2.6 3.8 q0.9 0.1 1.6 -0.1 q-0.1 1.2 -0.8 1.3 q-0.7 0 -0.8 -1.2 Z'},
  sad:{eyes:'dot',brow:'sad',mouth:'M2.6 4.7 q0.9 -0.7 1.8 0'},
  worried:{eyes:'dot',brow:'sad',mouth:'M2.4 4.4 q0.5 -0.4 1.0 0 q0.5 0.4 1.0 0'},
  closed:{eyes:'closed',brow:'soft',mouth:'M2.6 4.1 q0.9 0.5 1.8 0'},
  down:{eyes:'down',brow:'soft',mouth:'M2.7 4.3 h1.6'},
  downSad:{eyes:'down',brow:'sad',mouth:'M2.7 4.6 q0.8 -0.5 1.6 0'},
  tired:{eyes:'tired',brow:'flat',mouth:'M2.7 4.4 h1.5'},
  surprised:{eyes:'big',brow:'up',mouthFill:'M3.0 3.8 q0.7 0 0.8 0.8 q0 0.8 -0.8 0.8 q-0.7 0 -0.7 -0.8 q0 -0.8 0.7 -0.8 Z'},
  angry:{eyes:'dot',brow:'angry',mouth:'M2.6 4.6 q0.9 -0.4 1.8 0'},
  focused:{eyes:'dot',brow:'flat',mouth:'M2.8 4.3 h1.3'}
};
var EYE={n:[1.3,0.3],f:[4.45,0.2]};
function eyePair(fn){return fn(EYE.n,1)+fn(EYE.f,0.82);}
function faceSvg(name,ink){
  var f=FACE[name]||FACE.calm,s='';
  function at(c,k,d){return '<path d="'+d+'" transform="translate('+c[0]+' '+c[1]+') scale('+k+' 1)" fill="none" stroke="'+ink+'" stroke-width="1.05"'+NS+'/>';}
  if(f.eyes==='dot')s+=eyePair(function(c,k){return '<ellipse cx="'+c[0]+'" cy="'+c[1]+'" rx="'+(0.5*k)+'" ry="0.62" fill="'+ink+'"/>';});
  else if(f.eyes==='big')s+=eyePair(function(c,k){return '<ellipse cx="'+c[0]+'" cy="'+c[1]+'" rx="'+(0.68*k)+'" ry="0.8" fill="'+ink+'"/>';});
  else if(f.eyes==='happy')s+=eyePair(function(c,k){return at(c,k,'M-0.9 0.5 Q0 -0.7 0.9 0.5');});
  else if(f.eyes==='closed')s+=eyePair(function(c,k){return at(c,k,'M-0.9 0 Q0 0.9 0.9 0');});
  else if(f.eyes==='down')s+=eyePair(function(c,k){return at(c,k,'M-0.8 0.5 Q0 1.0 0.8 0.5');});
  else if(f.eyes==='tired')s+=eyePair(function(c,k){return at(c,k,'M-0.8 0 H0.8')+'<ellipse cx="'+c[0]+'" cy="'+(c[1]+0.45)+'" rx="'+(0.42*k)+'" ry="0.4" fill="'+ink+'"/>';});
  var b={soft:['M-1.0 -1.4 Q0 -2.0 1.0 -1.5'],sad:['M-1.0 -1.2 Q0 -1.4 0.9 -2.1','M-0.9 -2.1 Q0 -1.5 1.0 -1.2'],up:['M-1.0 -2.0 Q0 -2.6 1.0 -2.1'],flat:['M-1.0 -1.5 H1.0'],angry:['M-1.0 -2.1 L0.9 -1.3','M-0.9 -1.3 L1.0 -2.1']}[f.brow];
  if(b){s+=at(EYE.n,1,b[0])+at(EYE.f,0.82,b[1]||b[0]);}
  if(f.mouth)s+='<path d="'+f.mouth+'" transform="translate(0.5 0)" fill="none" stroke="'+ink+'" stroke-width="1.05"'+NS+'/>';
  if(f.mouthFill)s+='<path d="'+f.mouthFill+'" transform="translate(0.5 0)" fill="'+ink+'" stroke="'+ink+'" stroke-width="0.7"'+NS+'/>';
  return s;
}
/* la cabeza en dos capas: back (pelo por detrás, se pinta antes que la cara) y front (cara, rasgos y pelo de delante) */
function headSvg(o){
  var hair=HAIR[o.hair||'short'], hf=fillOf(hair.fill||'k'), hi=hair.fill==='w'?K:W, b='', s='';
  if(hair.back==='curlyBack')b+=path(curly(-2.4,2.6,6.0,9.0),K);
  else if(hair.back)b+=path(hair.back,hf)+(hair.fill==='w'?'':line('M-5.4 -1 C-6.2 3 -6.0 7 -5.0 11',W,0.7));
  if(hair.front==='curly')b+=path(curly(hair.cx,hair.cy,hair.rx,hair.ry),K);
  if(hair.bun)b+=path(curly(hair.bun[0],hair.bun[1],hair.bun[2],hair.bun[2]*0.92),hf);
  if(o.hair==='hijab')b='';
  if(o.hair==='hijab')s+=path(hair.back,W)+line('M-5.0 1 C-5.4 5 -4.6 9 -3.0 12',K,0.7);
  /* cara */
  s+=path(cr(SKULL,true),W);
  /* oreja */
  s+=path('M-1.5 -0.9 C-3.5 -1.6 -4.3 0.8 -3.3 2.4 C-2.7 3.2 -1.9 3.2 -1.4 2.8',W)+line('M-2.1 0.0 c-0.8 0 -1 1.2 -0.4 1.6',K,0.8);
  /* nariz: aleta */
  s+=line('M5.3 2.3 q0.4 0.3 0.9 0.1',K,0.8);
  if(o.beard){
    if(o.beard==='stubble')s+=line('M4.6 4.6 l0.2 0.3 M3.6 5.6 l0.2 0.3 M2.4 6.0 l0.1 0.3 M1.2 5.8 l0 0.3 M0 5.4 l-0.1 0.3 M-1.0 4.8 l-0.1 0.3',K,0.7);
    else s+=path('M5.5 2.9 C5.8 6.0 4.2 8.0 1.8 8.0 C-0.8 8.0 -2.6 5.8 -3.2 3.0 L-1.6 2.4 C-1.0 4.4 0.4 5.4 2.4 5.2 C3.4 5.1 3.8 4.4 3.8 3.6 C4.4 3.6 5.0 3.3 5.5 2.9 Z',K)+path('M3.0 3.5 C3.8 3.0 4.8 3.0 5.6 3.1 C5.4 3.8 4.2 4.0 3.0 3.9 Z',K);
  }
  s+=faceSvg(o.face,K);
  if(o.blush)s+=line('M4.2 2.6 l0.4 -0.5 M4.8 2.6 l0.4 -0.5 M0.4 2.8 l0.4 -0.5 M1.1 2.8 l0.4 -0.5',K,0.55);
  if(o.tear)s+=path('M1.6 1.5 q0.5 0.9 0.2 1.4 q-0.5 0.4 -0.8 -0.1 q-0.1 -0.5 0.6 -1.3 Z',W,0.8);
  /* pelo de delante */
  if(hair.front==='curly'){
    s+=path('M5.4 -3.4 C4.4 -2.6 3.2 -3.4 2.2 -2.6 C1.2 -2.6 0.4 -2.0 0 -1.2 C-0.6 -1.2 -1.0 -0.2 -1.0 0.6 L-1.5 0.6 C-1.6 -0.6 -2.4 -1.4 -3.4 -1.2 L-4.0 -4.0 L0 -6.6 L5.0 -5.6 Z',K);
    s+=line('M3.6 -5.6 q0.8 -0.6 1.4 0.2 M0.4 -6.4 q0.9 -0.6 1.6 0.3 M-2.6 -5.0 q0.8 -0.8 1.6 0 M-4.6 -2.6 q0.6 -0.8 1.4 -0.2',W,0.7);
  }else if(hair.front)s+=path(hair.front,hf);
  if(hair.det)s+=line(hair.det,hi,0.75);
  if(hair.tie)s+=path('M'+hair.tie[0]+' '+hair.tie[1]+' m-0.8 -1 l1.4 0.2 l-0.2 1.8 l-1.4 -0.2 Z',W,0.7);
  if(o.glasses)s+=path('M-0.5 0.3 a1.8 1.7 0 1 0 3.6 0 a1.8 1.7 0 1 0 -3.6 0 Z','none')+path('M3.4 0.2 a1.25 1.6 0 1 0 2.5 0 a1.25 1.6 0 1 0 -2.5 0 Z','none')+line('M3.1 0.1 h0.3 M-0.5 0.0 L-1.8 -0.4',K,1.0);
  if(o.headphones)s+=line('M-3.0 1.6 C-6.6 -9.8 6.6 -12.0 5.6 -3.6',K,2.4)+line('M-3.0 1.6 C-6.6 -9.8 6.6 -12.0 5.6 -3.6',W,0.8)+path('M-4.8 -0.8 h3.2 a0.8 0.8 0 0 1 0.8 0.8 v3.4 a0.8 0.8 0 0 1 -0.8 0.8 h-3.2 Z',K);
  if(o.earring)s+=dot([-2.4,3.8],0.55,K);
  return {back:b,front:s};
}

/* ---------- manos y pies (coordenadas propias: muñeca en 0,0, eje x a lo largo del antebrazo) ---------- */
var HAND={
  open:[[0,-1.6],[1.8,-1.9],[3.6,-1.9],[5.3,-1.4],[6.1,-0.5],[5.9,0.5],[4.8,1.0],[3.6,1.1],[3.1,2.0],[2.1,2.6],[1.1,2.2],[0,1.5]],
  fist:[[0,-1.7],[1.8,-2.1],[3.6,-2.0],[4.6,-1.0],[4.6,0.7],[3.8,1.7],[2.2,2.3],[0.5,1.8]],
  point:[[0,-1.6],[2.2,-1.9],[3.8,-1.5],[7.2,-1.1],[7.4,-0.3],[4.2,0.2],[3.8,1.4],[2.8,2.2],[1.3,2.0],[0,1.5]],
  flat:[[0,-1.4],[2.0,-1.6],[4.0,-1.5],[5.8,-0.9],[6.2,0.1],[5.6,0.8],[3.4,1.2],[1.4,1.4],[0,1.3]]
};
var HANDLINES={open:'M3.6 -0.6 L5.4 -0.4 M3.4 0.4 L4.9 0.5',fist:'M2.4 -0.6 Q3.6 -0.4 4.2 0.2 M2.2 0.7 Q3.2 0.9 3.8 1.2',point:'',flat:'M3.6 -0.3 L5.8 -0.1 M3.4 0.6 L5.2 0.6'};
function handSvg(w,dir,kind,side){
  kind=kind||'open'; var a=Math.atan2(dir[1],dir[0])*180/Math.PI, sc=side||1;
  var pts=HAND[kind].map(function(p){return add(w,rot([p[0],p[1]*sc],a));});
  var ls=HANDLINES[kind]?'<path d="'+HANDLINES[kind]+'" transform="translate('+P(w)+') rotate('+F(a)+') scale(1 '+sc+')" fill="none" stroke="'+K+'" stroke-width="0.8"'+NS+'/>':'';
  return path(cr(pts,true),W)+ls;
}
var SHOE=[[-2.2,-1.6],[-3.0,0.8],[-2.9,3.4],[0,4.1],[6.0,4.1],[8.4,3.6],[8.8,2.3],[7.6,1.0],[4.6,-0.2],[2.0,-1.8]];
var BOOT=[[-2.4,-3.6],[-3.0,0.8],[-3.0,3.6],[0,4.2],[6.2,4.2],[8.4,3.6],[8.6,2.2],[6.8,0.8],[3.6,-0.2],[2.6,-3.6]];
var FOOT=[[-1.8,-1.2],[-2.4,1.2],[-2.0,3.2],[1,3.6],[6.6,3.7],[8.0,3.2],[7.8,2.0],[5.0,0.8],[2.2,-0.6],[1.6,-1.6]];
function footSvg(a,ang,kind,ctx){
  var pts=tr(kind==='bare'?FOOT:kind==='boot'?BOOT:SHOE,a,ang), s;
  pts.forEach(function(p){if(p[1]>ctx.maxY)ctx.maxY=p[1];});
  if(kind==='bare')s=path(cr(pts,true),W)+line('M'+P(add(a,rot([6.4,1.6],ang)))+' l0.6 1.6',K,0.7);
  else if(kind==='white')s=path(cr(pts,true),W)+line('M'+P(add(a,rot([-2.8,2.6],ang)))+' L'+P(add(a,rot([8.6,2.6],ang))),K,0.8);
  else s=path(cr(pts,true),K)+line('M'+P(add(a,rot([-2.4,2.7],ang)))+' L'+P(add(a,rot([8.0,2.7],ang))),W,0.8);
  return s;
}

/* ---------- la persona ----------
   o: x, y (suelo o asiento), h (altura de pie), flip (-1 mira a la izquierda), pose (objeto de ángulos o nombre de POSES),
      top {kind tee|sweater|shirt|coat|dress|hoodie|blouse|vest, fill w|k|dots|stripes|check, sleeve long|short|rolled},
      bottom {kind trousers|skirt|shorts|jeans, fill}, shoes black|white|bare|boot, hair, face, beard, glasses, female, kid, teen, old */
var POSES={
  stand:{lean:0,tilt:0,armN:[-4,-2],armF:[6,4],legN:[-3,-3],legF:[4,4],hN:'open',hF:'open'},
  standHands:{lean:0,armN:[-3,40],armF:[10,60],legN:[-3,-3],legF:[4,4]},
  walk:{lean:3,tilt:0,armN:[-18,-6],armF:[22,40],legN:[24,8],legF:[-16,-34],footF:-28,footN:4},
  walkPhone:{lean:5,tilt:12,armN:[-10,-4],armF:[16,128],hF:'fist',legN:[22,6],legF:[-14,-30],footF:-24},
  sitChair:{sit:true,lean:-2,tilt:0,armN:[8,72],armF:[14,80],hN:'flat',hF:'flat',legN:[88,4],legF:[86,0]},
  sitTalk:{sit:true,lean:4,tilt:-2,armN:[10,70],armF:[24,118],hN:'flat',hF:'open',legN:[86,2],legF:[84,-2]},
  sitForward:{sit:true,lean:20,tilt:8,armN:[22,96],armF:[26,100],hN:'flat',hF:'flat',legN:[82,-4],legF:[80,-8]},
  sitSlump:{sit:true,lean:-14,tilt:10,armN:[2,58],armF:[8,64],hN:'flat',hF:'flat',legN:[76,16],legF:[72,20]},
  sitHead:{sit:true,lean:26,tilt:24,armN:[40,170],armF:[46,172],hN:'fist',hF:'fist',legN:[84,-2],legF:[82,-4]},
  sitChin:{sit:true,lean:16,tilt:6,armN:[30,166],armF:[12,82],hN:'fist',hF:'flat',legN:[84,0],legF:[82,0]},
  sitPhone:{sit:true,lean:10,tilt:20,armN:[12,120],armF:[18,124],hN:'fist',hF:'fist',legN:[86,0],legF:[84,-4]},
  sitCup:{sit:true,lean:2,tilt:0,armN:[8,70],armF:[20,126],hN:'flat',hF:'fist',legN:[86,2],legF:[84,0]},
  sitBack:{sit:true,lean:-14,tilt:-6,armN:[-6,40],armF:[10,60],hN:'flat',hF:'flat',legN:[80,20],legF:[78,22]},
  sitWrite:{sit:true,lean:16,tilt:16,armN:[20,96],armF:[26,94],hN:'fist',hF:'flat',legN:[86,0],legF:[84,-2]},
  sitKnees:{sit:true,floor:true,lean:6,tilt:10,armN:[24,92],armF:[28,96],hN:'flat',hF:'flat',legN:[128,-12],legF:[124,-16],footN:0,footF:0},
  sitFloor:{sit:true,floor:true,lean:-6,tilt:0,armN:[-30,-30],armF:[20,70],hN:'flat',hF:'flat',legN:[92,40],legF:[88,0]},
  sitFloorLegs:{sit:true,floor:true,lean:-4,tilt:4,armN:[-24,-28],armF:[18,60],hN:'flat',hF:'flat',legN:[90,90],legF:[92,90],footN:-60,footF:-60},
  kneel:{lean:6,tilt:8,armN:[20,60],armF:[30,80],legN:[60,-82],legF:[-6,-90],footN:-90,footF:-90},
  crouch:{lean:20,tilt:6,armN:[30,80],armF:[40,90],legN:[130,-20],legF:[110,-30],footF:0},
  lean:{lean:-4,tilt:0,armN:[-14,-10],armF:[-6,20],legN:[-6,-6],legF:[14,-6]},
  armsCross:{lean:0,armN:[8,96],armF:[14,92],hN:'fist',hF:'fist',legN:[-3,-3],legF:[4,4],cross:true},
  pockets:{lean:-2,armN:[-6,-2],armF:[4,6],hN:'none',hF:'none',legN:[-3,-3],legF:[5,5]},
  talkStand:{lean:2,armN:[-4,-2],armF:[22,110],hF:'open',legN:[-3,-3],legF:[4,4]},
  wave:{lean:0,armN:[-4,-2],armF:[150,176],hF:'open',legN:[-3,-3],legF:[4,4]},
  carry:{lean:0,armN:[24,92],armF:[30,96],hN:'flat',hF:'flat',legN:[-3,-3],legF:[4,4]},
  phoneStand:{lean:2,tilt:16,armN:[-4,-2],armF:[16,140],hF:'fist',legN:[-3,-3],legF:[4,4]},
  phoneEar:{lean:0,tilt:-4,armN:[-4,-2],armF:[24,168],hF:'fist',legN:[-3,-3],legF:[4,4]},
  reach:{lean:4,armN:[-2,0],armF:[70,80],hF:'open',legN:[-3,-3],legF:[4,4]},
  lieBack:{sit:true,lean:-90,tilt:-62,armN:[84,92],armF:[80,96],hN:'flat',hF:'flat',legN:[90,90],legF:[92,92],footN:-90,footF:-90},
  lieSide:{sit:true,lean:-90,tilt:-84,armN:[-40,10],armF:[-10,30],hN:'flat',hF:'flat',legN:[110,60],legF:[100,70],footN:-30,footF:-20}
};
var UID=0;
function person(o){
  var po=typeof o.pose==='string'?POSES[o.pose]:o.pose; po=Object.assign({},POSES.stand,po||{},o.adj||{});
  var kidK=o.kid?0.78:o.teen?0.94:1, hk=o.kid?1.22:o.teen?1.05:1;
  var UA=16*kidK,FA=13.5*kidK,TH=23*kidK,SH=22*kidK,T=32*kidK;
  var fem=!!o.female, top=Object.assign({kind:'sweater',fill:'w',sleeve:'long'},o.top||{}), bot=Object.assign({kind:'trousers',fill:'k'},o.bottom||{});
  var shoes=o.shoes||'black', ctx={maxY:-1e9};
  var lean=po.lean||0;
  function T_(p){return rot(p,lean);}
  /* torso */
  var tw=o.kid?0.86:1, bw=fem?0.94:1;
  var torsoPts={
    back:[[-2.2*tw,-T-0.6],[-6.6*tw*bw,-T+1.2],[-8.4*tw*bw,-T+4.4],[-8.2*tw*bw,-T+11],[-6.8*tw*(fem?0.96:1),-11],[-7.4*tw,-1.5],[-7.6*tw,3.2]],
    front:[[6.4*tw,3.2],[6.1*tw,-1.5],[(fem?5.0:5.7)*tw,-11],[(fem?7.6:6.6)*tw,-T+(fem?11.5:10)],[5.6*tw,-T+3],[2.6*tw,-T+0.2]]
  };
  var shN=T_([-5.4*tw*bw,-T+4.6]), shF=T_([3.6*tw,-T+4.2]);
  var hipN=[-2.6*tw,0], hipF=[2.4*tw,0];
  function arm(sh,ang){var e=add(sh,mul(dv(ang[0]),UA*(ang[2]||1))),w=add(e,mul(dv(ang[1]),FA*(ang[3]||1)));return [sh,e,w];}
  function leg(hp,ang){var k=add(hp,mul(dv(ang[0]),TH*(ang[2]||1))),a=add(k,mul(dv(ang[1]),SH*(ang[3]||1)));return [hp,k,a];}
  var aN=arm(shN,po.armN),aF=arm(shF,po.armF),lN=leg(hipN,po.legN),lF=leg(hipF,po.legF);
  var s='';
  /* --- piernas --- */
  var legW=bot.kind==='skirt'||bot.kind==='shorts'||bot.kind==='dress'?[5.2*tw,3.5,2.5]:[5.5*tw,4.1,3.6];
  var skinLeg=[5.2*tw,3.5,2.5];
  function legSvg(J,footAng,isN){
    var g='', fill=fillOf(bot.fill), ink=inkOn(bot.fill), sitting=Math.abs(J[1][0]-J[0][0])>Math.abs(J[1][1]-J[0][1]);
    if(bot.kind==='trousers'||bot.kind==='jeans'){
      g+=footSvg(J[2],footAng,shoes,ctx);
      var t=cut(J,legW,0,0.985);
      g+=path(limbPath(t.J,t.W,'round','flat'),fill);
      /* pliegues */
      var kd=nrm(sub(J[1],J[0])),sd=nrm(sub(J[2],J[1])),bend=Math.acos(Math.max(-1,Math.min(1,kd[0]*sd[0]+kd[1]*sd[1])));
      if(bend>0.5){var turn=sub(sd,kd),pn=perp(kd);if(turn[0]*pn[0]+turn[1]*pn[1]<0)pn=mul(pn,-1);
        var k0=add(J[1],mul(pn,legW[1]*0.7));g+=line('M'+P(add(k0,mul(kd,-2.6)))+' Q'+P(add(k0,mul(pn,-1.2)))+' '+P(add(k0,mul(sd,2.8))),ink,0.8);}
      else{var km=lerp(J[1],J[2],0.12);g+=line('M'+P(add(km,mul(perp(sd),-legW[1]*0.5)))+' q1 1.2 2.2 0.4',ink,0.7);}
      var cuffP=pointAt(J,0.94),cn=perp(sd);
      if(bot.cuff!==false)g+=line('M'+P(add(cuffP,mul(cn,legW[2]*0.98)))+' L'+P(sub(cuffP,mul(cn,legW[2]*0.98))),ink,0.8);
      if(bot.kind==='jeans'&&!sitting){var sm=lerp(J[0],J[1],0.5);g+=line('M'+P(add(sm,mul(perp(kd),legW[0]*0.4)))+' l'+P(mul(kd,5)),ink,0.6);}
    }else{
      g+=footSvg(J[2],footAng,shoes,ctx);
      g+=path(limbPath(J,skinLeg,'round','flat'),W);
      if(bot.kind==='shorts'){var u=cut(J,[6.4*tw,5.2,4],0,0.4);g+=path(limbPath(u.J,u.W,'round','flat'),fillOf(bot.fill));}
      if(bot.kind==='skirt'&&sitting){var u2=cut(J,[7.0*tw,5.6,4],0,0.48);g+=path(limbPath(u2.J,u2.W,'round','flat'),fillOf(bot.fill));}
      if(o.socks)g+=line('M'+P(pointAt(J,0.9))+' l0 0',K,0.6);
    }
    return g;
  }
  /* --- brazos --- */
  var slW=top.kind==='coat'?[4.0,3.4,3.2]:[3.5,3.0,2.8], skA=o.kid?[2.6,2.1,1.7]:[2.8,2.2,1.75];
  function armSvg(J,hand,side){
    var g='', fill=fillOf(top.fill), ink=inkOn(top.fill);
    var fd=nrm(sub(J[2],J[1]));
    var hs='';
    if(hand!=='none')hs=handSvg(add(J[2],mul(fd,-0.6)),fd,hand,side);
    if(top.sleeve==='short'||top.kind==='vest'||top.kind==='dress'&&top.sleeve==='none'){
      g+=path(limbPath(J,skA,'flat','flat'),W)+hs;
      if(top.kind!=='vest'&&top.sleeve!=='none'){var t=cut(J,slW,0,0.38);g+=path(limbPath(t.J,t.W,'round','flat'),fill);}
    }else{
      var endT=top.sleeve==='rolled'?0.7:0.97;
      if(top.sleeve==='rolled'){g+=path(limbPath(J,skA,'flat','flat'),W);}
      g+=hs;
      var t2=cut(J,slW,0,endT);g+=path(limbPath(t2.J,t2.W,'round','flat'),fill);
      var eb=sub(J[1],J[0]),ed=nrm(eb),bend=Math.acos(Math.max(-1,Math.min(1,ed[0]*fd[0]+ed[1]*fd[1])));
      if(bend>0.5){var turn=sub(fd,ed),pn=perp(ed);if(turn[0]*pn[0]+turn[1]*pn[1]<0)pn=mul(pn,-1);
        var e0=add(J[1],mul(pn,slW[1]*0.55));g+=line('M'+P(add(e0,mul(ed,-2)))+' Q'+P(add(e0,mul(pn,-1)))+' '+P(add(e0,mul(fd,2.2))),ink,0.75);}
      var cp=pointAt(J,endT-(top.sleeve==='rolled'?0.07:0.08)),cn=perp(fd);
      if(top.kind==='sweater'||top.kind==='hoodie'||top.sleeve==='rolled'||top.kind==='shirt'||top.kind==='coat')
        g+=line('M'+P(add(cp,mul(cn,slW[2]*0.96)))+' L'+P(sub(cp,mul(cn,slW[2]*0.96))),ink,0.75);
    }
    return g;
  }
  /* --- orden de dibujo --- */
  var hair=HAIR[o.hair||'short'];
  if(!po.cross)s+=armSvg(aF,po.hF||'open',1);
  s+=legSvg(lF,po.footF||0,false);
  s+=legSvg(lN,po.footN||0,true);
  /* falda o vestido de pie */
  var standingSkirt=(bot.kind==='skirt'||top.kind==='dress')&&!po.sit&&!po.floor;
  /* torso */
  var long=top.kind==='coat'?14:top.kind==='dress'?(po.sit?6:22):0;
  var front=torsoPts.front.map(T_), back=torsoPts.back.map(T_);
  if(long){
    var hemF=[6.4*tw+long*0.26,3.2+long],hemB=[-7.6*tw-long*0.22,3.2+long];
    if(po.sit){hemF=add(lN[0],mul(nrm(sub(lN[1],lN[0])),TH*(top.kind==='dress'?0.95:0.6)));hemF=add(hemF,[0,2.5]);hemB=[-8.4*tw,5];}
    front[0]=hemF;front[1]=po.sit?lerp(front[1],hemF,0.4):[6.4*tw+long*0.1,3.2+long*0.5];
    back[back.length-1]=hemB;back[back.length-2]=po.sit?back[back.length-2]:[-7.8*tw-long*0.1,3.2+long*0.4];
  }
  if(standingSkirt&&top.kind!=='dress'){
    var sk=[[-7.4*tw,-1],[-9.0*tw,18],[8.6*tw,18],[6.2*tw,-1]];
    s+=path('M'+P(sk[0])+' L'+P(sk[1])+' Q0 19.6 '+P(sk[2])+' L'+P(sk[3])+'Z',fillOf(bot.fill))+line('M-2 2 l-1.2 14 M3 2 l1.4 14',inkOn(bot.fill),0.7);
  }
  if(hair.back&&(o.hair==='long'||o.hair==='curlyLong'))s+='';
  var torsoD='M'+P(front[0])+crSeg(front,false)+' Q'+P(T_([0.4,-T-1.6]))+' '+P(back[0])+crSeg(back,false)+(long&&po.sit?' Q'+P(lerp(back[back.length-1],front[0],0.5))+' '+P(front[0]):' L'+P(front[0]))+'Z';
  var tf=fillOf(top.fill), ti=inkOn(top.fill);
  s+=path(torsoD,tf);
  /* detalles del torso */
  var neckL=T_([-2.0*tw,-T+0.2]), neckR=T_([2.6*tw,-T+0.4]);
  if(top.kind==='sweater'||top.kind==='tee'||top.kind==='hoodie')s+=line('M'+P(T_([-2.4*tw,-T-0.4]))+' Q'+P(T_([0.6,-T+2.6]))+' '+P(T_([3.0*tw,-T-0.2])),ti,0.8);
  if(top.kind==='sweater')s+=line('M'+P(T_([-7.6*tw,1.4]))+' L'+P(T_([6.4*tw,1.4])),ti,0.75);
  if(top.kind==='hoodie')s+=path('M'+P(T_([-2.8*tw,-T-0.6]))+' C'+P(T_([-8,-T-2]))+' '+P(T_([-8.8,-T+6]))+' '+P(T_([-5.2,-T+6.4]))+' C'+P(T_([-3,-T+4]))+' '+P(T_([-2,-T+2]))+' '+P(T_([-2.8*tw,-T-0.6]))+'Z',tf)+line('M'+P(T_([1.0,-T+2.4]))+' l0 6 M'+P(T_([2.6,-T+2.2]))+' l0.2 5.6',ti,0.7)+line('M'+P(T_([-3,-12]))+' L'+P(T_([5.4,-12]))+' L'+P(T_([5.6,-3]))+' L'+P(T_([-3.4,-3])),ti,0.7);
  if(top.kind==='shirt'||top.kind==='blouse'||top.kind==='coat'){
    var c1=T_([-2.6*tw,-T-0.2]),c2=T_([0.8,-T+3.4]),c3=T_([3.4*tw,-T+0.2]),c4=T_([0.4,-T+1.2]);
    s+=path('M'+P(c1)+' L'+P(T_([-0.6,-T+4.2]))+' L'+P(c4)+' Z',tf)+path('M'+P(c3)+' L'+P(T_([2.8,-T+4.6]))+' L'+P(c4)+' Z',tf);
    var bx=top.kind==='coat'?2.2:1.2;
    if(top.kind!=='blouse')for(var bi=0;bi<(top.kind==='coat'?3:4);bi++)s+=dot(T_([bx,-T+8+bi*(top.kind==='coat'?8:6.6)]),top.kind==='coat'?0.55:0.35,ti);
    s+=line('M'+P(T_([bx-0.8,-T+4.6]))+' L'+P(T_([bx-1.0,(long?2+long:2)]))+'',ti,0.6);
    if(top.kind==='shirt'&&!long)s+=line('M'+P(T_([3.4,-T+11]))+' h2.4 v2.6 h-2.4 Z',ti,0.6);
    if(top.kind==='coat')s+=line('M'+P(T_([-5.6,-6]))+' l3.6 0',ti,0.7);
  }
  if(top.kind==='dress'||top.kind==='blouse')s+='';
  if(top.kind==='vest')s+=line('M'+P(T_([-2.4*tw,-T-0.4]))+' L'+P(T_([1.0,-T+7]))+' L'+P(T_([3.2*tw,-T-0.2])),ti,0.8);
  /* cuello y cabeza */
  var nb=T_([0.6,-T]), tilt=(po.tilt||0), hc=add(nb,rot([0.9*hk,-8.6*hk],lean*0.6+tilt*0.4));
  var neckTop=add(nb,rot([0.6,-4.2*hk],lean*0.6+tilt*0.3));
  var neck=path(limbPath([add(nb,[0,1.0]),neckTop],[1.8*hk*(o.kid?0.85:1),1.8*hk*(o.kid?0.85:1)],'flat','flat'),W);
  var H=headSvg({hair:o.hair,face:o.face,beard:o.beard,glasses:o.glasses,headphones:o.headphones,blush:o.blush,tear:o.tear,earring:o.earring});
  var hT='<g transform="translate('+P(hc)+') rotate('+F(lean*0.3+tilt)+') scale('+hk+')">';
  if(H.back)s+=hT+H.back+'</g>';
  /* brazo cercano */
  if(po.cross){
    s+=armSvg(aF,'none',1);
    s+=armSvg(aN,'fist',-1);
  }else s+=armSvg(aN,po.hN||'open',-1);
  if(po.cross)s+=handSvg(aF[2],nrm(sub(aF[2],aF[1])),'fist',1);
  var collar='';
  if(top.kind==='sweater'||top.kind==='tee'||top.kind==='hoodie'){
    collar=path('M'+P(T_([-2.6*tw,-T-0.5]))+' Q'+P(T_([0.4,-T+2.8]))+' '+P(T_([3.2*tw,-T-0.3]))+' L'+P(T_([2.6,-T-1.4]))+' Q'+P(T_([0.4,-T+1.1]))+' '+P(T_([-2.0,-T-1.4]))+'Z',tf);
  }
  if(top.kind==='shirt'||top.kind==='coat'||top.kind==='blouse'){
    var c1b=T_([-2.4*tw,-T-1.2]),c4b=T_([0.6,-T+2.2]),c3b=T_([3.2*tw,-T-0.8]);
    collar=path('M'+P(c1b)+' L'+P(T_([-0.4,-T+4.0]))+' L'+P(c4b)+' Z',tf)+path('M'+P(c3b)+' L'+P(T_([2.6,-T+4.2]))+' L'+P(c4b)+' Z',tf);
  }
  s+=neck+collar+hT+H.front+'</g>';
  if(o.over)s+=o.over;
  /* colocación */
  var sc=(o.h||180)/100, flip=o.flip||1, anchor, gx=o.x||200, gy=o.y===undefined?236:o.y;
  if(po.sit){anchor=[0,po.floor?Math.max(5.4,ctx.maxY):5.6];}else{anchor=[0,ctx.maxY];}
  if(o.measure)return (ctx.maxY-anchor[1])*sc;
  var rotA=o.rot||0;
  var toS=function(q){var v=[(q[0]-anchor[0])*sc*flip,(q[1]-anchor[1])*sc];v=rot(v,rotA);return [gx+v[0],gy+v[1]];};
  person.last={wN:toS(aN[2]),wF:toS(aF[2]),eN:toS(aN[1]),eF:toS(aF[1]),head:toS(hc),neck:toS(nb),P:toS([0,0]),kN:toS(lN[1]),kF:toS(lF[1]),fN:toS(lN[2]),fF:toS(lF[2]),sc:sc,flip:flip};
  return '<g transform="translate('+F(gx)+' '+F(gy)+') rotate('+rotA+') scale('+F(sc*flip)+' '+F(sc)+') translate('+F(-anchor[0])+' '+F(-anchor[1])+')">'+s+'</g>';
}

/* ---------- lienzo y objetos ---------- */
function svg(body,label){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" role="img" aria-label="'+(label||'').replace(/"/g,'&quot;')+'">'+DEFS+body+'</svg>';}
function p(d,fill,w){return path(d,fill,w);}
function l(d,w,c){return line(d,c,w||1.1);}
function ground(x1,x2,y){y=y||236;return l('M'+x1+' '+y+' H'+x2,SW);}

/* ---------- objetos (en coordenadas de la escena, 400×250; suelo en G) ---------- */
var G=236;
function R(x,y,w,h,rx,fill,sw){if(w<0){x+=w;w=-w;}if(h<0){y+=h;h=-h;}return '<rect x="'+F(x)+'" y="'+F(y)+'" width="'+F(w)+'" height="'+F(h)+'" rx="'+(rx||0)+'" fill="'+(fill||W)+'" stroke="'+K+'" stroke-width="'+(sw||SW)+'"'+NS+'/>';}
function C(cx,cy,r,fill,sw){return '<circle cx="'+F(cx)+'" cy="'+F(cy)+'" r="'+F(r)+'" fill="'+(fill||W)+'" stroke="'+K+'" stroke-width="'+(sw||SW)+'"'+NS+'/>';}
function E(cx,cy,rx,ry,fill,sw){return '<ellipse cx="'+F(cx)+'" cy="'+F(cy)+'" rx="'+F(rx)+'" ry="'+F(ry)+'" fill="'+(fill||W)+'" stroke="'+K+'" stroke-width="'+(sw||SW)+'"'+NS+'/>';}
function floorLine(y,x1,x2){return l('M'+(x1||0)+' '+(y||G)+' H'+(x2===undefined?400:x2),1.3);}
function who(o){return person(o);}
function seatFor(o,gy){var m=Object.assign({},o,{measure:true,y:0});return gy-person(m);}
function last(){return person.last;}
function g(tr,body){return '<g transform="'+tr+'">'+body+'</g>';}

/* muebles */
function chair(x,sy,gy,d,o){d=d||1;o=o||{};var b=x-d*17,f=x+d*17,s='';
  s+=R(b-d*1,sy-52,d*13,24,3);
  s+=R(d>0?b:b-4,sy-54,4,gy-sy+54,1.5);
  s+=R(d>0?f-4:f,sy+3,4,gy-sy-3,1.5);
  s+=l('M'+b+' '+(gy-16)+' L'+f+' '+(gy-16),1.1);
  s+=R(Math.min(b,f)-3,sy,40,5,2);
  if(o.clothes)s+=p('M'+(b-d*3)+' '+(sy-56)+' q'+(d*6)+' -5 '+(d*15)+' -1 l'+(d*2)+' 24 q'+(-d*8)+' 4 '+(-d*15)+' 0 Z',W)+l('M'+(b+d*3)+' '+(sy-48)+' l'+(d*1)+' 14',0.9)+p('M'+(b+d*1)+' '+(sy+1)+' q'+(d*10)+' -9 '+(d*24)+' -5 q'+(d*10)+' 2 '+(d*13)+' 5 Z',K)+p('M'+(b+d*8)+' '+(sy-4)+' q'+(d*8)+' -6 '+(d*16)+' -2 l'+(d*2)+' 4 Z',W,1.1);
  return s;}
function stool(x,sy,gy){return l('M'+(x-11)+' '+(sy+5)+' L'+(x-15)+' '+gy+' M'+(x+11)+' '+(sy+5)+' L'+(x+15)+' '+gy+' M'+x+' '+(sy+5)+' L'+x+' '+(gy-2)+' M'+(x-13)+' '+(gy-18)+' H'+(x+13),1.5)+R(x-16,sy,32,5,2.5);}
function armchair(x,sy,gy,d){d=d||1;var s='';
  s+=R(x-d*36,sy-66,d*18,80,9);
  s+=R(x-d*32,sy-24,d*58,40,8);
  s+=R(x-d*30,sy-2,d*58,14,5);
  s+=R(x-d*34,sy+12,d*62,gy-sy-19,4);
  s+=p('M'+(x-d*28)+' '+(gy-7)+' l'+(-d*2)+' 7 h'+(d*4)+' l'+(d*1)+' -7 M'+(x+d*22)+' '+(gy-7)+' l'+(d*2)+' 7 h'+(-d*4)+' l'+(-d*1)+' -7',W,1.2);
  s+=l('M'+(x-d*24)+' '+(sy-58)+' q'+(-d*2)+' 30 0 54',0.8);
  return s;}
function sofa(x1,x2,sy,gy,o){o=o||{};var s='',m=(x1+x2)/2;
  s+=R(x1+8,sy-52,x2-x1-16,56,10);
  if(!o.one)s+=l('M'+m+' '+(sy-50)+' V'+(sy+2),1.1);
  s+=R(x1+10,sy-2,x2-x1-20,15,5);
  s+=R(x1+6,sy+13,x2-x1-12,gy-sy-21,4);
  s+=R(x1,sy-28,22,gy-sy+20,9)+R(x2-22,sy-28,22,gy-sy+20,9);
  s+=p('M'+(x1+10)+' '+(gy-8)+' l-1 8 h4 l1 -8 M'+(x2-10)+' '+(gy-8)+' l1 8 h-4 l-1 -8',W,1.2);
  if(o.blanket)s+=p('M'+(x2-30)+' '+(sy-50)+' q12 -4 22 4 l2 44 q-10 6 -24 0 Z',fillOf(o.blanket))+l('M'+(x2-22)+' '+(sy-44)+' l-1 34',0.8,o.blanket==='k'?W:K);
  if(o.cushion)s+=p('M'+(x1+24)+' '+(sy-38)+' q14 -4 26 2 q2 12 -2 24 q-12 2 -24 -2 q-4 -12 0 -24 Z',fillOf(o.cushion));
  return s;}
function table(x1,x2,ty,gy,o){o=o||{};var s='';
  if(o.cloth)s+=p('M'+(x1-4)+' '+ty+' H'+(x2+4)+' l2 24 q-6 3 -10 0 q-6 3 -12 0 H'+(x1+6)+' q-6 3 -12 0 Z',fillOf(o.cloth===true?'w':o.cloth));
  s+=R(x1-2,ty,x2-x1+4,5,2);
  if(!o.cloth)s+=R(x1+6,ty+5,4,gy-ty-5,1.2)+R(x2-10,ty+5,4,gy-ty-5,1.2);
  else s+=R(x1+6,ty+26,4,gy-ty-26,1.2)+R(x2-10,ty+26,4,gy-ty-26,1.2);
  if(o.drawer)s+=R(o.drawer>0?x2-50:x1+12,ty+5,38,16,1.5)+l('M'+((o.drawer>0?x2-50:x1+12)+15)+' '+(ty+13)+' h8',1.3);
  return s;}
function roundTable(x,ty,gy,r){return R(x-3,ty+5,6,gy-ty-10,1)+p('M'+(x-18)+' '+gy+' q18 -10 36 0 Z',W)+E(x,ty+2,r,5);}
function sideTable(x,gy,h,r){r=r||17;return R(x-2.5,gy-h+4,5,h-8,1)+p('M'+(x-14)+' '+gy+' q14 -9 28 0 Z',W)+E(x,gy-h+2,r,4.5);}
function nightstand(x,gy,w,h){w=w||40;h=h||44;return R(x-w/2,gy-h,w,h,3)+l('M'+(x-w/2)+' '+(gy-h/2)+' h'+w,1.1)+C(x,gy-h*0.75,1.4,K,0.8)+C(x,gy-h*0.25,1.4,K,0.8);}
function bed(x1,x2,mt,gy,o){o=o||{};var s='';
  s+=R(x1,mt-52,14,gy-mt+52,6);
  s+=R(x1+8,mt+14,x2-x1-10,gy-mt-22,3);
  s+=R(x1+10,mt,x2-x1-12,16,5);
  s+=p('M'+(x1+16)+' '+(mt-14)+' q22 -6 40 0 q4 8 0 14 q-22 4 -40 0 q-4 -6 0 -14 Z',W)+l('M'+(x1+22)+' '+(mt-10)+' q14 -3 26 0',0.8);
  if(o.messy)s+=p('M'+(x1+58)+' '+(mt+2)+' q20 -14 46 -6 q24 -10 50 0 q10 6 6 14 L'+(x2-4)+' '+(mt+30)+' q-40 6 -84 0 q-12 -8 -18 -16 Z',fillOf(o.messy===true?'w':o.messy))+l('M'+(x1+76)+' '+(mt-2)+' q10 8 30 6 M'+(x1+120)+' '+(mt-4)+' q6 10 20 12',0.9);
  else if(o.quilt)s+=p('M'+(x1+66)+' '+(mt-1)+' H'+(x2+2)+' V'+(mt+30)+' H'+(x1+66)+' Z',fillOf(o.quilt))+l('M'+(x1+66)+' '+(mt+6)+' H'+(x2+2),1,o.quilt==='k'?W:K);
  s+=p('M'+(x1+12)+' '+(gy-8)+' v8 h4 v-8 M'+(x2-8)+' '+(gy-8)+' v8 h4 v-8',W,1.2);
  return s;}
function dresser(x,gy,w,h){var s=R(x,gy-h,w,h,3);for(var i=1;i<3;i++)s+=l('M'+x+' '+(gy-h+h*i/3)+' h'+w,1.1);for(i=0;i<3;i++)s+=l('M'+(x+w/2-6)+' '+(gy-h+h*(i+0.5)/3)+' h12',1.4);return s;}

/* luz y pared */
function tableLamp(x,y,on){return l('M'+x+' '+(y-16)+' V'+(y-3),1.5)+p('M'+(x-8)+' '+y+' q8 -6 16 0 Z',W)+p('M'+(x-10)+' '+(y-31)+' L'+(x+10)+' '+(y-31)+' L'+(x+14)+' '+(y-16)+' L'+(x-14)+' '+(y-16)+' Z',W)+(on?l('M'+(x-20)+' '+(y-10)+' l-5 4 M'+(x+20)+' '+(y-10)+' l5 4 M'+(x-17)+' '+(y-30)+' l-4 -4 M'+(x+17)+' '+(y-30)+' l4 -4',1):'');}
function floorLamp(x,gy,h){h=h||150;return l('M'+x+' '+(gy-h+24)+' V'+(gy-3),1.6)+p('M'+(x-12)+' '+gy+' q12 -6 24 0 Z',W)+p('M'+(x-14)+' '+(gy-h)+' L'+(x+14)+' '+(gy-h)+' L'+(x+18)+' '+(gy-h+24)+' L'+(x-18)+' '+(gy-h+24)+' Z',W);}
function deskLamp(x,y,d){d=d||1;return l('M'+(x-8)+' '+y+' h16',2.2)+l('M'+x+' '+y+' l'+(d*8)+' -22 l'+(d*14)+' 8',1.6)+p('M'+(x+d*18)+' '+(y-20)+' l'+(d*12)+' 6 l'+(-d*6)+' 9 Z',W);}
function windowW(x,y,w,h,o){o=o||{};var s='';
  if(o.curtains)s+=p('M'+(x-12)+' '+(y-6)+' q4 '+(h/2)+' -2 '+(h+10)+' h14 q-6 -'+(h/2)+' 2 -'+(h+10)+' Z',W)+p('M'+(x+w+12)+' '+(y-6)+' q-4 '+(h/2)+' 2 '+(h+10)+' h-14 q6 -'+(h/2)+' -2 -'+(h+10)+' Z',W);
  s+=R(x,y,w,h,2)+R(x+4,y+4,w-8,h-8,1,W,1.1)+l('M'+(x+w/2)+' '+(y+4)+' V'+(y+h-4)+' M'+(x+4)+' '+(y+h/2)+' H'+(x+w-4),1.1);
  if(o.night)s+=p('M'+(x+w*0.74)+' '+(y+h*0.16)+' a7 7 0 1 0 6 10 a5.5 5.5 0 1 1 -6 -10 Z',K,1)+C(x+w*0.25,y+h*0.25,0.9,K,0.6)+C(x+w*0.3,y+h*0.72,0.9,K,0.6)+C(x+w*0.7,y+h*0.7,0.7,K,0.6);
  if(o.sun)s+=C(x+w*0.72,y+h*0.28,5,W,1)+birds(x+w*0.18,y+h*0.72);
  if(o.blind){var bh=(h-8)*o.blind,t='';for(var i=1;i<bh/5;i++)t+='M'+(x+4)+' '+(y+4+i*5)+' H'+(x+w-4)+' ';s+=R(x+4,y+4,w-8,bh,1,W,1.1)+l(t,0.7)+l('M'+(x+w/2)+' '+(y+4+bh)+' v7',1);}
  s+=R(x-4,y+h,w+8,4,1);
  if(o.plant)s+=pot(x+w-16,y+h,10,'leafy');
  return s;}
function frame(x,y,w,h,kind){var s=R(x,y,w,h,1.5)+R(x+3,y+3,w-6,h-6,0.5,W,0.9);
  if(kind==='mount')s+=l('M'+(x+5)+' '+(y+h-6)+' L'+(x+w*0.4)+' '+(y+h*0.4)+' L'+(x+w*0.6)+' '+(y+h*0.65)+' L'+(x+w*0.75)+' '+(y+h*0.5)+' L'+(x+w-5)+' '+(y+h-6),0.9)+C(x+w*0.72,y+h*0.28,2,W,0.8);
  else if(kind==='face')s+=C(x+w/2,y+h*0.42,w*0.16,W,0.8)+p('M'+(x+w*0.25)+' '+(y+h-3)+' q'+(w*0.25)+' -'+(h*0.4)+' '+(w*0.5)+' 0',W,0.8);
  else if(kind==='two')s+=C(x+w*0.36,y+h*0.42,w*0.12,W,0.8)+C(x+w*0.64,y+h*0.45,w*0.11,W,0.8)+p('M'+(x+w*0.14)+' '+(y+h-3)+' q'+(w*0.22)+' -'+(h*0.36)+' '+(w*0.44)+' 0 M'+(x+w*0.46)+' '+(y+h-3)+' q'+(w*0.2)+' -'+(h*0.34)+' '+(w*0.4)+' 0',W,0.8);
  else if(kind==='abs')s+=C(x+w*0.35,y+h*0.45,h*0.18,K,0.6)+l('M'+(x+w*0.5)+' '+(y+h*0.7)+' q'+(w*0.15)+' -'+(h*0.4)+' '+(w*0.32)+' -'+(h*0.2),0.9);
  else if(kind==='diploma')s+=l('M'+(x+8)+' '+(y+9)+' h'+(w-16)+' M'+(x+10)+' '+(y+15)+' h'+(w-20)+' M'+(x+12)+' '+(y+20)+' h'+(w-24),0.8)+C(x+w/2,y+h-9,3,K,0.6);
  return s;}
function clock(x,y,r,hh,mm){var a=(hh%12+mm/60)*30,b=mm*6,rd=Math.PI/180;return C(x,y,r)+C(x,y,r-2.4,W,0.8)+l('M'+x+' '+y+' l'+F(Math.sin(a*rd)*r*0.5)+' '+F(-Math.cos(a*rd)*r*0.5)+' M'+x+' '+y+' l'+F(Math.sin(b*rd)*r*0.72)+' '+F(-Math.cos(b*rd)*r*0.72),1.4)+C(x,y,1,K,0.5);}
function books(x,y,n){var s='',bx=x,hs=[18,22,16,20,24,15,19,21],fs=['w','k','w','w','k','w','w','k'];for(var i=0;i<n;i++){var bw=i%3===2?7:5.5;s+=R(bx,y-hs[i%8],bw,hs[i%8],0.8,fillOf(fs[i%8]),1.1);bx+=bw+0.6;}return s;}
function shelf(x,y,w,n){n=n===undefined?6:n;return books(x+4,y,n)+(n<8?pot(x+w-12,y,9,'round'):'')+R(x,y,w,3.5,1);}
function bookcase(x,y,w,h){var s=R(x,y,w,h,2),n=Math.max(1,Math.round(h/34)),st=h/n;for(var i=1;i<=n;i++){var yy=y+i*st;s+=books(x+4,yy-2,Math.min(i%2?6:4,Math.floor((w-8)/6.4)));if(i%2===0)s+=pot(x+w-12,yy-2,8,'round');if(i<n)s+=l('M'+x+' '+(yy-2)+' h'+w,1.2);}return s;}
function pot(x,y,s,kind){s=s||12;var t='';
  if(kind==='round'){t+=E(x,y-s*1.5,s*0.85,s*0.75,W,1.1)+l('M'+x+' '+(y-s*2.1)+' v'+(s*0.9)+' M'+(x-s*0.4)+' '+(y-s*1.9)+' l'+(s*0.3)+' '+(s*0.5)+' M'+(x+s*0.4)+' '+(y-s*1.9)+' l'+(-s*0.3)+' '+(s*0.5),0.8);}
  else if(kind==='tall'){for(var i=-2;i<=2;i++){var hh=s*(3.2-Math.abs(i)*0.4);t+=p('M'+x+' '+(y-s*0.8)+' q'+F(i*s*0.4)+' -'+F(hh*0.5)+' '+F(i*s*0.8)+' -'+F(hh)+' q'+F(-i*s*0.1+(i===0?-1:0))+' '+F(hh*0.5)+' '+F(-i*s*0.8+(i===0?2:0))+' '+F(hh)+'Z',i%2?K:W,1.1);}}
  else {var L=[[-1,-2.2,-0.55],[0.2,-2.8,0.05],[1.1,-2.1,0.6],[-0.4,-1.6,-0.2],[0.7,-1.4,0.3]];L.forEach(function(q,j){var tx=x+q[0]*s,ty=y-s*0.7+q[1]*s*0.7;t+='<ellipse cx="'+F(tx)+'" cy="'+F(ty)+'" rx="'+F(s*0.55)+'" ry="'+F(s*0.26)+'" transform="rotate('+F(-60+q[2]*60)+' '+F(tx)+' '+F(ty)+')" fill="'+(j===1?K:W)+'" stroke="'+K+'" stroke-width="1.1"'+NS+'/>';});}
  t+=p('M'+(x-s*0.7)+' '+(y-s*0.85)+' H'+(x+s*0.7)+' L'+(x+s*0.55)+' '+y+' H'+(x-s*0.55)+' Z',W);
  return t;}
function plantBig(x,gy,h){h=h||70;var s='',rd=Math.PI/180;for(var i=0;i<7;i++){var a=-66+i*22,lx=x+Math.sin(a*rd)*h*0.5,ly=gy-26-Math.cos(a*rd)*h*0.6;s+=l('M'+x+' '+(gy-22)+' Q'+F(x+(lx-x)*0.2)+' '+F(ly+14)+' '+F(lx)+' '+F(ly),1.1)+'<ellipse cx="'+F(lx)+'" cy="'+F(ly)+'" rx="10" ry="4.4" transform="rotate('+F(a-90)+' '+F(lx)+' '+F(ly)+')" fill="'+(i%3===1?K:W)+'" stroke="'+K+'" stroke-width="1.1"'+NS+'/>';}
  return s+p('M'+(x-13)+' '+(gy-24)+' H'+(x+13)+' L'+(x+10)+' '+gy+' H'+(x-10)+' Z',W)+l('M'+(x-12)+' '+(gy-19)+' H'+(x+12),0.9);}
function rug(x1,x2,y){var m=(x1+x2)/2;return E(m,y,(x2-x1)/2,6,W,1.1)+E(m,y,(x2-x1)/2-8,3.4,W,0.8);}

/* objetos pequeños */
function mug(x,y,k){k=k||1;return g('translate('+x+' '+y+') scale('+k+')',p('M5 -8 q4 0 4 3 q0 3 -4 3',null,1.2)+p('M-5 -11 H5 V-1 q0 1 -1 1 H-4 q-1 0 -1 -1 Z',W,1.2));}
function glass(x,y,milk){return p('M'+(x-4)+' '+(y-15)+' H'+(x+4)+' L'+(x+3.2)+' '+y+' H'+(x-3.2)+' Z',W,1.2)+(milk?p('M'+(x-3.7)+' '+(y-11)+' H'+(x+3.7)+' L'+(x+3.2)+' '+y+' H'+(x-3.2)+' Z',fillOf('grey'),0.8):l('M'+(x-3.6)+' '+(y-9)+' H'+(x+3.6),0.8));}
function plate(x,y,w){w=w||22;return E(x,y-1.5,w/2,2.6)+E(x,y-2,w/2-4,1.2,W,0.8);}
function laptop(x,y,d){d=d||1;return p('M'+(x-d*15)+' '+(y-2.6)+' L'+(x-d*21)+' '+(y-24)+' l'+(-d*2.6)+' 1 L'+(x-d*17.6)+' '+(y-2.6)+' Z',K,1.2)+p('M'+(x-d*16)+' '+y+' H'+(x+d*14)+' l'+(d*2)+' -2.6 H'+(x-d*15)+' Z',W,1.2);}
function laptopClosed(x,y){return R(x-15,y-3.4,30,3.4,1);}
function screenBack(x,y,w,h){return R(x-w/2,y-h,w,h,2)+R(x-3,y,6,8,1)+R(x-10,y+8,20,3,1);}
function phone(x,y,a,glow){return g('translate('+F(x)+' '+F(y)+') rotate('+(a||0)+')',R(-2.6,-4.6,5.2,9.2,1.2,K,0.8)+(glow?l('M-6 -8 l-2 -2 M0 -9 v-3 M6 -8 l2 -2',0.8):''));}
function book(x,y,w,h,fill,a){return g('translate('+F(x)+' '+F(y)+') rotate('+(a||0)+')',R(-w/2,-h/2,w,h,1,fillOf(fill||'w'),1.1)+l('M'+(-w/2+2)+' '+(-h/2)+' v'+h,0.8,fill==='k'?W:K));}
function openBook(x,y,w){w=w||22;return p('M'+x+' '+y+' q'+(-w*0.25)+' -4 '+(-w/2)+' -1 v-9 q'+(w*0.25)+' -3 '+(w/2)+' 1 q'+(w*0.25)+' -4 '+(w/2)+' -1 v9 q'+(-w*0.25)+' -3 '+(-w/2)+' 1 Z',W,1.1)+l('M'+x+' '+y+' v-9',0.8);}
function paper(x,y,w,h,a,lines){return g('translate('+F(x)+' '+F(y)+') rotate('+(a||0)+')',R(-w/2,-h/2,w,h,0.6,W,1)+(lines?l('M'+(-w/2+2)+' '+(-h/2+3)+' h'+(w-4)+' M'+(-w/2+2)+' '+(-h/2+6)+' h'+(w-6)+' M'+(-w/2+2)+' '+(-h/2+9)+' h'+(w-5),0.6):''));}
function crumpled(x,y,r){r=r||4;return C(x,y,r,W,1.1)+l('M'+(x-r*0.6)+' '+(y-r*0.2)+' l'+(r*0.5)+' '+(r*0.4)+' l'+(r*0.5)+' '+(-r*0.6)+' M'+(x-r*0.2)+' '+(y+r*0.5)+' l'+(r*0.6)+' '+(-r*0.2),0.7);}
function shopBag(x,y,w,h,fill,stuff){w=w||20;h=h||24;var s='';if(stuff)s+=p('M'+(x-5)+' '+(y+6)+' l-2 -15 l5 0 Z',W,1)+C(x+4,y+3,4.5,W,1)+p('M'+(x-1)+' '+(y+5)+' q1 -10 4 -12 l2 1 q-3 3 -3 11 Z',W,1);s+=p('M'+(x-w/2)+' '+(y+4)+' L'+(x-w/2-1)+' '+(y+h+4)+' H'+(x+w/2+1)+' L'+(x+w/2)+' '+(y+4)+' Z',fillOf(fill||'w'))+p('M'+(x-w*0.3)+' '+(y+4)+' C'+(x-w*0.3)+' '+(y-4)+' '+(x+w*0.3)+' '+(y-4)+' '+(x+w*0.3)+' '+(y+4),null,1.2);return s;}
function sneaker(x,y,d,fill){d=d||1;return g('translate('+x+' '+y+') scale('+(d*1.9)+' 1.9)',path(cr(SHOE,true),fillOf(fill||'k'))+line('M-2.4 2.7 L8 2.7',fill==='w'?K:W,0.8));}
function cushion(x,y,w,h,fill,a){return g('translate('+x+' '+y+') rotate('+(a||0)+')',p('M'+(-w/2)+' '+(-h/2)+' q'+(w/2)+' 4 '+w+' 0 q-3 '+(h/2)+' 0 '+h+' q'+(-w/2)+' -4 '+(-w)+' 0 q3 '+(-h/2)+' 0 '+(-h)+' Z',fillOf(fill||'w')));}

/* exterior */
function tree(x,gy,h){h=h||150;var r=h*0.32,s='';
  s+=p('M'+(x-5)+' '+gy+' C'+(x-4)+' '+(gy-h*0.25)+' '+(x-5)+' '+(gy-h*0.45)+' '+(x-14)+' '+(gy-h*0.62)+' M'+(x+5)+' '+gy+' C'+(x+4)+' '+(gy-h*0.3)+' '+(x+6)+' '+(gy-h*0.48)+' '+(x+14)+' '+(gy-h*0.6),null,1.3);
  s+=p('M'+(x-5)+' '+gy+' C'+(x-4)+' '+(gy-h*0.25)+' '+(x-5)+' '+(gy-h*0.45)+' '+(x-14)+' '+(gy-h*0.62)+' L'+(x+14)+' '+(gy-h*0.6)+' C'+(x+6)+' '+(gy-h*0.48)+' '+(x+4)+' '+(gy-h*0.3)+' '+(x+5)+' '+gy+' Z',W,1.3);
  s+=path(bumpy(x,gy-h+r,r*1.1,r*0.95,13,r*0.16),W)+l('M'+F(x-r*0.5)+' '+F(gy-h+r*0.8)+' q4 4 10 2 M'+F(x+r*0.2)+' '+F(gy-h+r*1.4)+' q4 4 10 0 M'+F(x-r*0.1)+' '+F(gy-h+r*0.4)+' q3 3 8 2',0.8);
  return s;}
function hedge(x1,x2,gy,h){h=h||30;return path(bumpy((x1+x2)/2,gy-h/2,(x2-x1)/2,h/2,Math.max(6,Math.round((x2-x1)/10)),3),W)+l('M'+(x1+12)+' '+(gy-h*0.5)+' q4 3 8 0 M'+((x1+x2)/2)+' '+(gy-h*0.6)+' q4 3 8 0 M'+(x2-24)+' '+(gy-h*0.4)+' q4 3 8 0',0.8);}
function streetLamp(x,gy,h){h=h||170;return R(x-2.5,gy-h,5,h,1)+R(x-6,gy-12,12,12,1.5)+p('M'+(x-9)+' '+(gy-h)+' L'+(x+9)+' '+(gy-h)+' L'+(x+5)+' '+(gy-h-16)+' L'+(x-5)+' '+(gy-h-16)+' Z',W)+p('M'+(x-7)+' '+(gy-h-16)+' h14 l-7 -6 Z',K,1);}
function building(x,y,w,gy,o){o=o||{};var s=R(x,y,w,gy-y,0,W,1.2),cols=o.cols||2,rows=o.rows||3,ww=o.ww||22,wh=o.wh||28;
  for(var r=0;r<rows;r++)for(var c=0;c<cols;c++){var wx=x+(c+0.5)*w/cols-ww/2,wy=y+12+r*(wh+18);if(o.door&&wy+wh>gy-46&&Math.abs(wx+ww/2-(x+w/2))<30)continue;if(wy+wh>gy-4)continue;s+=R(wx,wy,ww,wh,1,W,1.1)+l('M'+(wx+ww/2)+' '+wy+' V'+(wy+wh),0.8);if(o.balcony)s+=R(wx-4,wy+wh-9,ww+8,10,0.5,W,1.1)+l('M'+(wx+1)+' '+(wy+wh-9)+' v10 M'+(wx+7)+' '+(wy+wh-9)+' v10 M'+(wx+ww-7)+' '+(wy+wh-9)+' v10 M'+(wx+ww-1)+' '+(wy+wh-9)+' v10',0.7);}
  if(o.door)s+=R(x+w/2-13,gy-42,26,42,1)+l('M'+(x+w/2)+' '+(gy-42)+' V'+gy,0.9)+C(x+w/2-3,gy-21,0.9,K,0.6)+C(x+w/2+3,gy-21,0.9,K,0.6);
  if(o.bricks){var t='';for(var i=0;i<o.bricks;i++){var bx=x+8+((i*37)%(w-24)),by=y+16+((i*53)%(gy-y-30));t+='M'+bx+' '+by+' h10 M'+(bx+5)+' '+(by+4)+' h10 ';}s+=l(t,0.7);}
  return s;}
function bench(x,gy,w){w=w||90;return l('M'+(x+8)+' '+(gy-17)+' V'+gy+' M'+(x+w-8)+' '+(gy-17)+' V'+gy,1.8)+R(x,gy-44,w,6,2)+R(x,gy-34,w,6,2)+R(x+2,gy-22,w-4,5,2);}
function birds(x,y){return l('M'+x+' '+y+' q4 -4 7 0 q3 -4 7 0 M'+(x+16)+' '+(y-8)+' q3 -3 5 0 q3 -3 5 0',1);}
function cloud(x,y,k){k=k||1;return g('translate('+x+' '+y+') scale('+k+')',p('M-24 6 q-8 -10 4 -12 q2 -12 16 -8 q8 -10 18 -1 q14 -2 12 10 q8 4 0 11 Z',W,1.2));}
function door(x,y,w,h,o){o=o||{};var s=R(x-4,y-4,w+8,h+4,1);if(o.open){s+=R(x,y,w,h,0,'url(#symGrey)',1.1)+p('M'+(x+w)+' '+y+' L'+(x+w+o.open)+' '+(y+8)+' V'+(y+h+6)+' L'+(x+w)+' '+(y+h)+' Z',W);}else{s+=R(x,y,w,h,0,W,1.1)+R(x+6,y+8,w-12,h*0.35,1,W,0.9)+R(x+6,y+h*0.5,w-12,h*0.4,1,W,0.9)+C(x+w-6,y+h*0.48,1.6,K,0.8);}return s;}
function ball(x,y,r){return C(x,y,r,W,1.1)+l('M'+F(x-r*0.7)+' '+F(y-r*0.3)+' q'+F(r*0.7)+' '+F(r*0.6)+' '+F(r*1.4)+' 0 M'+F(x)+' '+F(y-r)+' v'+F(r*2),0.8);}
function grass(x,y){return l('M'+(x-6)+' '+y+' q2 -8 -2 -12 M'+x+' '+y+' q-1 -10 2 -15 M'+(x+6)+' '+y+' q2 -6 6 -9',1);}
/* ---------- escenas 61–120 ---------- */
var DIB=window.DIB||(window.DIB={list:[]}), N2=[];
function scene(key,title,uses,fn){N2.push([key,title,uses]);DIB[key]=fn;}
var M={female:true}, H=192;
function X(o,base){return Object.assign({},base||{},o);}

scene('b-alerta','Cuerpo en alerta','Ansiedad: síntomas físicos, tensión, hiperalerta',function(){
  var o={pose:'sitForward',x:178,h:H,female:true,hair:'bob',face:'worried',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},shoes:'black',
    adj:{lean:12,tilt:-6,armN:[158,-100,1,0.5],hN:'open',armF:[18,96],hF:'flat'}};
  var sy=seatFor(o,G); o.y=sy;
  return svg(floorLine(G,90,320)+chair(166,sy,G,1)+who(o)+sideTable(282,G,58)+glass(276,G-58)+mug(292,G-57,0.9)+l('M152 70 q-6 -6 -4 -14 M142 78 q-8 -4 -10 -12',1.1),
    'Mujer sentada al borde de una silla, tensa, con una mano en la nuca; a su lado, una mesita con un vaso de agua');});

scene('b-gente','Agobio entre la gente','Ansiedad en sitios concurridos, agorafobia, ataques de pánico',function(){
  var s=building(-4,30,170,226,{cols:2,rows:2,ww:44,wh:46})+building(166,14,238,226,{cols:3,rows:2,ww:40,wh:40});
  s+=R(14,150,140,64,1,W,1.2)+l('M84 150 V214',1)+R(186,140,110,74,1,W,1.2)+R(312,150,60,76,1)+C(318,190,1.2,K,0.6);
  s+=p('M180 126 h122 l-6 12 h-110 Z','url(#symStripes)',1.1)+R(8,132,152,12,1)+l('M30 138 h40 M90 138 h50',0.8);
  s+=streetLamp(378,226,180)+floorLine(226)+l('M0 240 H400',1);
  s+=who({pose:'walk',x:46,y:228,h:176,flip:1,hair:'short',face:'calm',top:{kind:'coat',fill:'k'},bottom:{fill:'w'}});
  s+=who({pose:'walkPhone',x:300,y:228,h:174,flip:-1,female:true,hair:'ponytail',face:'down',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'}});
  var o={pose:'stand',x:182,y:232,h:196,female:true,hair:'long',face:'closed',top:{kind:'coat',fill:'w'},bottom:{fill:'k'},adj:{armN:[16,132,1,0.62],hN:'flat',armF:[6,4]},
    over:l('M-3 -30 L6 -2',1.1)+R(3,-5,8,7,1.5,K,1)};
  s+=who(o)+l('M206 62 q6 -4 12 0 M210 54 q8 -6 16 0',1)+l('M152 64 q-6 -4 -12 0',1);
  return svg(s,'Mujer joven de pie en una calle comercial, con los ojos cerrados y una mano en el pecho, mientras pasa gente');});

scene('b-cargar','Cargar con todo','Estrés, carga mental, sobrecarga en la crianza',function(){
  var s=floorLine(G,60,340);
  s+=l('M300 236 V66 M286 236 h28 M300 72 l-12 -4 M300 72 l12 -4 M300 88 l-12 -6 M300 88 l12 -6',1.6);
  s+=p('M300 80 q-14 0 -18 18 l-4 54 h28 l4 -54 q-2 -16 -10 -18 Z',W)+l('M292 104 l-2 44',0.8)+p('M306 82 q12 2 14 16 l2 40 h-14 Z','url(#symCheck)',1.1);
  var o={pose:'stand',x:178,h:196,female:true,hair:'bun',face:'tired',top:{kind:'sweater',fill:'stripes'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armN:[-8,-6],armF:[12,8],tilt:6}};
  s+=who(o);var L=last();
  s+=shopBag(L.wN[0]+2,L.wN[1]-1,24,30,'w',true)+shopBag(L.wF[0]+1,L.wF[1]-1,22,28,'k',false);
  s+=p('M'+(L.neck[0]-16)+' '+(L.neck[1]+10)+' q-10 2 -10 16 l0 22 q8 6 16 0 l2 -34 Z',W)+C(L.neck[0]-20,L.neck[1]+30,3.4,W,1)+l('M'+(L.neck[0]-12)+' '+(L.neck[1]+6)+' l-4 10',1.2);
  s+=l('M150 78 q-4 -6 -2 -12 M142 84 q-6 -2 -10 -8',1);
  return svg(s,'Mujer de pie, cansada, con bolsas de la compra en las dos manos y una mochila infantil al hombro, junto a un perchero');});

scene('b-sin-fuerzas','Mañana sin fuerzas','Depresión: falta de energía, dificultad para empezar el día',function(){
  var o={pose:'sitForward',x:216,h:H,hair:'curlyShort',face:'downSad',top:{kind:'hoodie',fill:'w'},bottom:{fill:'k'},shoes:'bare',adj:{lean:24,tilt:18,armN:[34,58],armF:[38,62],hN:'flat',hF:'flat'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(270,40,90,90,{blind:0.62})+nightstand(26,G,34,40)+tableLamp(26,G-40,false)+bed(48,236,sy,G,{messy:true});
  s+=who(o)+chair(350,sy+4,G,-1,{clothes:true});
  return svg(s,'Hombre sentado en el borde de una cama deshecha, con los brazos sobre las rodillas y la mirada en el suelo; persiana medio bajada y una silla con ropa');});

scene('b-paso','Un paso pequeño','Depresión: activación conductual, pequeños logros, volver a moverse',function(){
  var o={pose:'sitForward',x:184,h:H,female:true,hair:'greyBun',face:'smile',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'white',
    adj:{lean:34,tilt:22,legN:[70,-6],legF:[84,4],armN:[30,40],armF:[36,50],hN:'flat',hF:'flat',footN:-4}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G,80,330)+stool(178,sy,G)+who(o);
  s+=sneaker(268,G-7.8,1,'w')+l('M276 222 q4 -6 10 -4',1)+pot(318,G,13,'tall');
  return svg(s,'Mujer madura sentada en un taburete, inclinada para atarse las zapatillas, con media sonrisa; la otra zapatilla en el suelo');});

scene('b-movil-fuera','El móvil, fuera del cuarto','Insomnio: higiene del sueño, pantallas antes de dormir',function(){
  var s=floorLine(G)+door(36,70,64,166,{open:20})+tableLamp(70,200,true).replace(/^/,'')+frame(258,52,50,38,'mount');
  s+=dresser(222,G,116,70)+R(218,G-74,124,6,2)+pot(330,G-74,10,'round');
    var o={pose:'reach',x:188,h:196,hair:'side',face:'calm',top:{kind:'shirt',fill:'v'},bottom:{kind:'trousers',fill:'v'},shoes:'bare',adj:{armF:[44,66],hF:'fist'}};
  s+=who(o);var L=last();s+=phone(L.wF[0]+4,L.wF[1]+1,80)+l('M244 162 q-6 -4 -12 2 q-4 6 4 9',0.9)+R(234,165,8,4,1,W,0.9);
  return svg(s,'Hombre en pijama deja el móvil cargando en una cómoda del pasillo antes de irse a dormir');});

scene('b-levantarse','Levantarse si no duermes','Insomnio: estrategias cuando no llega el sueño',function(){
  var o={pose:'sitCup',x:168,h:186,female:true,hair:'greyBun',face:'tired',top:{kind:'coat',fill:'dots'},bottom:{fill:'w'},shoes:'white',glasses:true,adj:{armF:[16,120],hF:'fist'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G,60,340)+windowW(56,44,64,76,{night:true,curtains:true})+chair(156,sy,G,1)+who(o);
  var L=last(); s+=mug(L.wF[0]+4,L.wF[1]+5,0.85);
  s+=table(236,320,G-76,G)+tableLamp(300,G-76,true)+glass(256,G-76,true)+book(278,G-79,18,5,'k');
  return svg(s,'Mujer mayor en bata, sentada de madrugada junto a una mesa con una lamparita y un vaso de leche');});

scene('b-mercado','Compra en el mercado','Alimentación: relación sana con la comida, comer con calma',function(){
  var s=floorLine(G);
  s+=R(206,20,6,216,1)+R(386,20,6,216,1);
  s+=p('M196 24 H402 V52 H196 Z','url(#symStripes)',1.2)+p('M196 52 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0 q9 10 17 0',W,1.1);
  s+=R(212,150,176,86,2)+l('M212 168 H388',1);
  [[230,1],[272,0],[314,1],[356,0]].forEach(function(c,i){var x=c[0];s+=R(x-18,128,38,24,1.5);for(var j=0;j<5;j++)s+=C(x-12+j*7.4,124+(j%2)*1.2,4,i===2?W:(j%2?W:W),1);if(i===2)s+=l('M'+(x-14)+' 122 l2 -2 M'+(x+2)+' 121 l2 -2',0.8);});
  s+=R(298,92,40,20,1)+l('M304 100 h28 M304 106 h20',0.8);
  var a={pose:'reach',x:150,h:188,female:true,hair:'curlyLong',face:'smile',top:{kind:'coat',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{armF:[66,74],hF:'open'}};
  s+=who(a);var La=last();s+=C(La.wF[0]+8,La.wF[1]+1,4,W,1.1);
  var b={pose:'talkStand',x:76,h:180,female:true,hair:'hijab',face:'laugh',top:{kind:'blouse',fill:'w'},bottom:{kind:'skirt',fill:'k'},adj:{armF:[30,110],hF:'open',armN:[-6,-4]}};
  s+=who(b);var Lb=last();s+=C(Lb.wF[0]+7,Lb.wF[1]-3,4,W,1.1)+bagCloth(Lb.wN[0],Lb.wN[1]);
  return svg(s,'Dos amigas eligen fruta en un puesto del mercado, sonrientes y sin prisas');});
function bagCloth(x,y){return p('M'+(x-11)+' '+(y+6)+' h22 l-1 26 h-20 Z',W)+p('M'+(x-6)+' '+(y+6)+' q6 -10 12 0',null,1.2)+l('M'+(x-6)+' '+(y+16)+' q6 4 12 0',0.8);}

scene('b-sobremesa','Sobremesa con papá','Alimentación en la adolescencia: hablar en casa, comidas en familia',function(){
  var d={pose:'sitTalk',x:300,h:180,flip:-1,teen:true,female:true,hair:'ponytail',face:'talk',top:{kind:'hoodie',fill:'k'},bottom:{kind:'jeans',fill:'w'},shoes:'white',adj:{armF:[30,104],hF:'open'}};
  var sy=seatFor(d,G); d.y=sy;
  var s=floorLine(G)+R(20,120,90,4,1)+mug(40,120)+pot(84,120,10,'round')+clock(66,60,13,9,10);
  s+=chair(304,sy,G,-1)+who(d)+table(196,286,G-80,G)+glass(230,G-80);
  var f={pose:'carry',x:126,h:198,hair:'grey',face:'smile',beard:'stubble',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},adj:{armN:[24,88],armF:[30,96],tilt:4}};
  s+=who(f);var L=last();
  s+=g('translate('+F((L.wN[0]+L.wF[0])/2+6)+' '+F((L.wN[1]+L.wF[1])/2-2)+') rotate(-14)',E(0,0,13,3.4,W,1.2)+E(0,0,8,1.6,W,0.8))+p('M'+F(L.wF[0]+2)+' '+F(L.wF[1]-4)+' q4 12 -2 22 l8 2 q6 -12 2 -22 Z','url(#symCheck)',1);
  return svg(s,'Un padre de pie seca un plato con un paño mientras escucha a su hija adolescente, sentada a la mesa');});

scene('b-perdon-puerta','Pedir perdón en la puerta','Pareja: reparar después de una discusión',function(){
  var s=floorLine(G)+R(34,52,74,184,1,W,1.3)+R(40,58,62,178,0,'url(#symGrey)',1);
  s+=shelf(230,70,120,7)+deskLamp(354,G-80,-1)+frame(176,46,34,42,'abs');
  var w={pose:'sitTalk',x:300,h:184,flip:-1,female:true,hair:'long',face:'focused',glasses:true,top:{kind:'sweater',fill:'w'},bottom:{fill:'k'},adj:{lean:-2,armF:[20,84],hF:'flat',armN:[10,64]}};
  var sy=seatFor(w,G); w.y=sy;
  s+=chair(304,sy,G,-1)+who(w)+table(312,404,G-80,G)+laptop(372,G-80,-1)+mug(398,G-80,0.85);
  var m={pose:'lean',x:118,h:198,hair:'short',face:'worried',beard:'full',top:{kind:'sweater',fill:'stripes'},bottom:{kind:'jeans',fill:'k'},adj:{lean:-6,armN:[-30,10,0.9],armF:[158,-100,1,0.5],hF:'open',hN:'flat'}};
  s+=who(m);
  return svg(s,'Hombre apoyado en el marco de la puerta, tímido y conciliador, habla con su pareja, que se gira desde su escritorio');});

scene('b-dinero','Hablar de dinero','Pareja: conversaciones difíciles, decisiones compartidas',function(){
  var a={pose:'sitForward',x:132,h:186,female:true,hair:'bob',face:'focused',top:{kind:'blouse',fill:'dots'},bottom:{fill:'k'},adj:{lean:16,tilt:14,armF:[54,76],hF:'point',armN:[16,80]}};
  var sy=seatFor(a,G); a.y=sy;
  var b={pose:'sitChin',x:262,y:sy,h:194,flip:-1,hair:'side',face:'worried',beard:'stubble',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{lean:6,tilt:4}};
  var s=floorLine(G)+frame(150,24,40,30,'mount')+frame(198,30,26,22,'abs')+sofa(62,330,sy,G,{});
  s+=who(a)+who(b);
  s+=R(150,G-40,104,5,2)+R(156,G-35,4,35,1)+R(244,G-35,4,35,1)+openBook(190,G-40,30)+l('M180 '+(G-46)+' h8 M180 '+(G-43)+' h6 M196 '+(G-46)+' h8',0.6)+R(214,G-49,12,9,1.2)+l('M216 '+(G-46)+' h8',0.8)+C(218,G-42.5,0.7,K,0.4)+C(222,G-42.5,0.7,K,0.4);
  return svg(s,'Pareja sentada en el sofá revisa un cuaderno de cuentas; ella señala una cifra y él se rasca la barbilla');});

scene('b-bailar','Bailar en el salón','Pareja: complicidad, cuidar el vínculo con los años',function(){
  var s=floorLine(G)+rug(110,300,G-2)+floorLamp(370,G,160);
  s+=R(10,130,70,4,1)+R(10,160,70,76,2)+l('M45 160 V236',1)+C(26,198,1.3,K,0.6)+C(64,198,1.3,K,0.6)+R(14,112,46,18,2)+C(37,118,8,K,1)+C(37,118,1.6,W,0.6)+l('M52 112 l-8 6',1.2);
  s+=frame(120,40,44,34,'two')+frame(246,48,30,40,'face');
  var m={pose:'stand',x:166,h:196,hair:'bald',face:'closed',glasses:true,top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},adj:{armF:[60,96],armN:[40,74],hF:'flat',hN:'flat',tilt:6,legF:[8,8]}};
  var w={pose:'stand',x:236,h:184,flip:-1,female:true,hair:'greyBun',face:'smile',top:{kind:'blouse',fill:'w'},bottom:{kind:'skirt',fill:'dots'},shoes:'black',adj:{armF:[132,96,1,0.9],armN:[30,70],hF:'flat',legN:[-6,-6],tilt:-6}};
  s+=who(m)+who(w);
  s+=note(310,96,1)+note(326,80,0.8);
  return svg(s,'Pareja mayor baila despacio en el salón, abrazados, con una lámpara de pie y un tocadiscos');});
function note(x,y,k){k=k||1;return g('translate('+x+' '+y+') scale('+k+')','<ellipse rx="3.6" ry="2.6" transform="rotate(-20)" fill="'+K+'"/>'+l('M3.2 -1 V-16 q5 2 6 7',1.3));}

scene('b-notas','Notas por todas partes','TDAH en adultos: organización, memoria de trabajo, recordatorios',function(){
  var s=floorLine(G,40,360);
  s+=R(206,36,96,200,6)+l('M206 100 H302',1.2)+R(214,62,4,26,2,W,1)+R(214,112,4,40,2,W,1);
  var notes=[[230,48,-6,0],[262,46,8,1],[288,58,-4,0],[240,72,4,0],[272,80,-8,0],[232,112,6,1],[262,118,-3,0],[290,110,9,0],[240,146,-7,0],[276,150,5,1],[252,180,-4,0],[286,186,6,0],[226,206,3,0]];
  notes.forEach(function(n){s+=g('translate('+n[0]+' '+n[1]+') rotate('+n[2]+')',R(-8,-8,16,16,0.5,n[3]?K:W,1)+(n[3]?'':l('M-5 -3 h10 M-5 1 h7',0.7)));});
  s+=pot(330,36,12,'round')+R(312,36,40,0.1,0)+mug(344,36,0.8);
  var o={pose:'stand',x:140,h:192,female:true,hair:'bun',face:'laugh',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armF:[100,96],hF:'point',armN:[16,150,1,0.5],hN:'fist',tilt:-6}};
  s+=who(o);
  return svg(s,'Mujer con moño señala, entre divertida y abrumada, una nevera cubierta de notas adhesivas');});

scene('b-temporizador','Deberes con temporizador','TDAH en la infancia: rutinas, deberes, apoyo en casa',function(){
  var mo={pose:'sitTalk',x:270,h:182,flip:-1,female:true,hair:'long',face:'smile',top:{kind:'sweater',fill:'w'},bottom:{fill:'k'},adj:{armF:[24,96],hF:'open'}};
  var sy=seatFor(mo,G); mo.y=sy;
  var s=floorLine(G)+R(250,34,96,64,2)+R(254,38,88,56,0,'url(#symGrey)',0.8);
  s+=R(262,46,22,18,0.5,W,0.9)+C(273,54,4,W,0.7)+R(292,44,20,24,0.5,W,0.9)+l('M296 60 l4 -8 l4 8 l4 -6',0.7)+R(318,52,18,16,0.5,W,0.9)+C(322,48,1.2,K,0.5)+C(302,42,1.2,K,0.5)+C(268,44,1.2,K,0.5);
  s+=shelf(26,96,104,8);
  s+=chair(278,sy,G,-1)+who(mo);
  s+=table(110,224,G-72,G);
  s+=openBook(150,G-72,28)+l('M140 '+(G-77)+' l6 -1 M156 '+(G-78)+' l6 1',0.6)+C(196,G-79,7,W,1.2)+p('M192 '+(G-87)+' q4 -4 8 0 q-4 3 -8 0 Z',K,1)+l('M196 '+(G-79)+' l3 -3',1);
  var k={pose:'stand',x:96,h:138,kid:true,hair:'curlyShort',face:'worried',top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'shorts',fill:'k'},shoes:'white',adj:{armN:[150,-100,1,0.5],hN:'open',armF:[40,90],hF:'flat',legN:[-4,-4],legF:[18,-10],footF:-10}};
  s+=who(k)+l('M84 '+(G-142)+' q-4 -6 -2 -12 M76 '+(G-136)+' q-6 -2 -10 -8',1);
  return svg(s,'Niño inquieto de pie junto a la mesa de estudio, con un cuaderno y un temporizador de cocina; su madre, sentada, lo anima');});

scene('b-llaves','¿Dónde están las llaves?','TDAH: despistes cotidianos, olvidos, organización',function(){
  var s=floorLine(G)+R(214,G-80,120,6,2)+R(220,G-74,4,74,1)+R(324,G-74,4,74,1)+R(236,G-74,76,16,1)+R(248,G-64,52,20,1,W,1.2)+l('M268 '+(G-52)+' h12',1.2);
  s+=p('M296 '+(G-80)+' q12 -8 24 0 Z',W)+mirrorRound(274,60,30);
  s+=l('M354 92 h18',2)+C(358,99,3.4,W,1)+p('M358 102 l0 10 l3 -2 l0 -2',null,1)+C(366,99,3,W,1)+p('M366 102 l0 8 l2 -1',null,1)+l('M356 92 v6 M366 92 v6',0.8);
  var o={pose:'stand',x:150,h:198,hair:'short',face:'surprised',beard:'full',top:{kind:'coat',fill:'k'},bottom:{kind:'jeans',fill:'w'},shoes:'boot',adj:{armN:[-18,24],armF:[-4,30],hN:'flat',hF:'flat',tilt:-4}};
  s+=who(o)+l('M180 50 l4 -6 M186 58 l6 -2 M172 46 l1 -7',1.1);
  return svg(s,'Hombre con prisa se palpa los bolsillos del abrigo junto al mueble de la entrada; las llaves cuelgan detrás, en la pared');});
function mirrorRound(x,y,r){return C(x,y,r)+C(x,y,r-4,W,0.9)+l('M'+(x-r*0.4)+' '+(y-r*0.3)+' l'+(r*0.3)+' '+(-r*0.3)+' M'+(x-r*0.3)+' '+(y)+' l'+(r*0.5)+' '+(-r*0.5),0.8);}

scene('b-apagar','Hora de apagar','Adicciones tecnológicas: videojuegos, límites con adolescentes',function(){
  var t={pose:'sitForward',x:250,h:178,teen:true,hair:'short',face:'angry',headphones:true,top:{kind:'hoodie',fill:'k'},bottom:{kind:'trousers',fill:'w'},shoes:'white',adj:{lean:14,tilt:-14,armF:[40,104],armN:[34,110],hN:'fist',hF:'fist'}};
  var sy=seatFor(t,G); t.y=sy;
  var s=floorLine(G)+R(14,48,76,188,1,W,1.3)+R(20,54,64,182,0,'url(#symGrey)',1);
  s+=R(176,40,40,56,1)+l('M184 52 l12 14 l10 -8 M184 82 h24',0.9)+C(200,62,4,K,0.6);
  s+=R(228,G-36,6,36,1)+p('M210 '+G+' l20 -6 l20 6',null,1.2)+R(222,sy-2,44,6,2)+R(228,sy-50,10,46,4);
  s+=who(t);var L=last();s+=R(L.wN[0]-2,L.wN[1]-5,14,8,3,K,1)+C(L.wN[0]+3,L.wN[1]-1,1,W,0.5);
  s+=table(300,404,G-82,G)+screenBack(352,G-90,58,40)+l('M330 '+(G-120)+' l10 8 l8 -6 l12 10',0.9);
  var d={pose:'talkStand',x:104,h:200,hair:'grey',face:'calm',glasses:true,top:{kind:'shirt',fill:'w'},bottom:{fill:'k'},adj:{armF:[22,100],hF:'open',armN:[-8,-4]}};
  s+=who(d);
  return svg(s,'Padre sereno en la puerta del cuarto habla con su hijo adolescente, que juega a la consola con cara de fastidio');});

scene('b-pantalla-noche','Atrapado en la pantalla','Adicciones: uso compulsivo del móvil, apuestas, juego online',function(){
  var o={pose:'sitPhone',x:198,h:188,hair:'curlyShort',face:'focused',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{lean:22,tilt:22}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(250,30,80,84,{night:true})+sofa(70,290,sy,G,{one:true})+floorLamp(40,G,170);
  s+=who(o);var L=last();s+=phone(L.wF[0]+3,L.wF[1]-2,-60)+l('M'+F(L.wF[0]+4)+' '+F(L.wF[1]-10)+' L'+F(L.head[0]+4)+' '+F(L.head[1]+4),0.7)+l('M'+F(L.wF[0]+10)+' '+F(L.wF[1]-6)+' l6 -4 M'+F(L.wF[0]+12)+' '+F(L.wF[1]+2)+' l7 0',0.9);
  s+=sideTable(330,G,52)+mug(330,G-52,0.9);
  return svg(s,'Chico encorvado en el sofá de noche, absorto en la luz del móvil, con la lámpara apagada');});

scene('b-elogio','No sé aceptar un elogio','Autoestima: aceptar reconocimiento, autocrítica en el trabajo',function(){
  var m={pose:'sitWrite',x:150,h:190,hair:'side',face:'downSad',top:{kind:'shirt',fill:'w'},bottom:{fill:'k'},adj:{tilt:24,lean:8}};
  var sy=seatFor(m,G); m.y=sy;
  var s=floorLine(G)+windowW(26,30,70,80,{})+plantBig(372,G,80);
  s+=R(118,sy-4,40,6,2)+R(118,sy-54,10,52,4)+R(134,sy+2,4,G-sy-2,1)+p('M120 '+G+' l16 -6 l16 6',null,1.2);
  s+=who(m);
  s+=table(186,330,G-84,G,{drawer:1})+screenBack(296,G-92,56,40)+mug(226,G-84,0.9)+paper(256,G-86,22,3,0)+pot(206,G-84,8,'round');
  var w={pose:'stand',x:96,h:186,female:true,hair:'grey',face:'smile',glasses:true,top:{kind:'coat',fill:'w'},bottom:{kind:'trousers',fill:'k'},adj:{armF:[60,74,1,0.9],hF:'flat'}};
  s+=who(w);
  return svg(s,'En la oficina, una compañera le pone la mano en el hombro y le sonríe a un hombre que, incómodo, baja la mirada');});

scene('b-ceramica','Atreverse con la cerámica','Autoestima: probar cosas nuevas, competencia, disfrutar',function(){
  var o={pose:'sitForward',x:150,h:192,hair:'grey',beard:'full',face:'smile',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},adj:{lean:22,tilt:14,armN:[38,74],armF:[44,80],hN:'open',hF:'open'},
    over:p('M-4 -29 L4 -29 L6 -14 L7 -3 L25 -3 L25 5 L-4 5 Z',W,1.1)+R(9,-1,8,4,0.5,W,0.8)+l('M-4 -29 L-1 -33 M4 -29 L2 -33 M-6 -14 L6 -14',0.9)};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G,40,360)+stool(146,sy,G);
  s+=p('M208 '+(G-60)+' h70 l-6 60 h-58 Z',W)+E(243,G-62,42,6)+E(243,G-64,30,4,W,1);
  s+=p('M228 '+(G-66)+' q-2 -16 4 -24 h22 q6 8 4 24 Z',fillOf('grey'),1.2)+E(243,G-90,11,2.4,W,1);
  s+=who(o);
  s+=R(300,G-110,72,4,1)+p('M312 '+(G-110)+' q-4 -14 6 -18 q10 4 6 18 Z',W,1.1)+p('M336 '+(G-110)+' q-6 -8 0 -12 h10 q6 4 0 12 Z',K,1.1)+p('M356 '+(G-110)+' q-2 -10 6 -10 q8 0 6 10 Z',W,1.1);
  return svg(s,'Hombre maduro con delantal sentado ante un torno de alfarero, con las manos en el barro y una sonrisa tímida y orgullosa');});

scene('b-armario','Vestirse para una misma','Autoestima e imagen: cuidarse, gustarse, decidir por una misma',function(){
  var s=floorLine(G)+windowW(26,40,70,82,{curtains:true,sun:true});
  s+=bed(150,250,G-50,G,{quilt:'stripes'}).replace(/^/,'');
  s+=R(272,30,116,206,3)+R(278,36,50,194,1,W,1.1)+l('M282 50 H324',1.4);
  [290,300,312].forEach(function(x,i){s+=p('M'+x+' 50 l-6 8 h12 Z',null,0.9)+R(x-7,58,14,40+i*8,2,i===1?K:W,1);});
  s+=p('M328 36 L384 46 V222 L328 230 Z',W)+C(334,130,1.4,K,0.6)+C(322,130,1.4,K,0.6);
  var o={pose:'stand',x:208,h:186,flip:1,female:true,hair:'grey',face:'smile',top:{kind:'sweater',fill:'w'},bottom:{fill:'k'},adj:{armF:[78,96],armN:[16,140,1,0.6],hF:'fist',hN:'flat',tilt:-4}};
  s+=who(o);var L=last();
  var cx=L.wF[0]+6,cy=L.wF[1]-6;
  s+=p('M'+F(cx-2)+' '+F(cy+2)+' q0 -6 3 -6 q3 0 3 3',null,1)+l('M'+F(cx-12)+' '+F(cy+8)+' L'+F(cx)+' '+F(cy+2)+' L'+F(cx+12)+' '+F(cy+8),1.2)+p('M'+F(cx-9)+' '+F(cy+8)+' h18 l2 18 l9 44 h-44 l9 -44 Z',fillOf('dots'),1.2)+l('M'+F(cx-11)+' '+F(cy+26)+' h22',1);
  return svg(s,'Mujer mayor de pelo corto canoso sostiene ante el armario un vestido de lunares, con una sonrisa decidida');});

scene('b-recuerdos','Ordenar sus cosas','Duelo: despedirse de los objetos, los primeros meses',function(){
  var o={pose:{sit:true,floor:true,lean:10,tilt:18,legN:[112,-24],legF:[104,-34],armN:[40,92],armF:[46,96],hN:'flat',hF:'flat',footN:0,footF:0},x:150,y:G,h:188,female:true,hair:'bob',face:'downSad',top:{kind:'coat',fill:'w'},bottom:{fill:'k'},shoes:'bare'};
  var s=floorLine(G,40,360);
  s+=who(o);var L=last();
  s+=g('translate('+F(L.wF[0]-4)+' '+F(L.wF[1]-4)+')',p('M-14 -2 q14 -6 28 0 l0 9 q-14 4 -28 0 Z','url(#symStripes)',1.1)+l('M-14 2 q14 3 28 0',0.8));
  s+=p('M236 '+(G-56)+' h76 v56 h-76 Z',W)+p('M236 '+(G-56)+' l-14 -14 h70 l14 14 Z',W)+p('M312 '+(G-56)+' l14 -18 l-6 -4 l-22 22 Z',W)+l('M236 '+(G-40)+' h76',0.8);
  s+=p('M248 '+(G-56)+' q8 -12 20 -6 q6 -8 14 0 l2 6 Z',K,1)+R(286,G-70,16,16,1,W,1.1)+C(294,G-62,4,W,0.8);
  s+=frame(330,G-28,20,26,'face').replace(/<rect/,'<rect transform="rotate(-8 340 '+(G-14)+')"');
  return svg(s,'Mujer sentada en el suelo junto a una caja de cartón abierta, con un jersey de hombre doblado en el regazo');});

scene('b-silla-vacia','La silla vacía','Duelo: la ausencia en lo cotidiano, viudedad',function(){
  var o={pose:'sitCup',x:110,h:184,hair:'bald',face:'sad',glasses:true,beard:'stubble',top:{kind:'coat',fill:'k'},bottom:{fill:'w'},adj:{armF:[22,98],hF:'flat',armN:[14,92],hN:'flat',tilt:6}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G);
  s+=R(150,30,250,40,1)+l('M210 30 V70 M270 30 V70 M330 30 V70',1)+l('M196 50 h8 M216 50 h8 M256 50 h8 M276 50 h8 M316 50 h8 M336 50 h8',1.3);
  s+=windowW(36,30,70,70,{});
  s+=chair(104,sy,G,1)+who(o);
  s+=table(140,268,G-80,G,{cloth:'check'})+mug(186,G-80)+plate(220,G-80,20);
  s+=p('M348 '+(G-128)+' h22 v30 h-22 Z',W)+p('M350 '+(G-98)+' h18 l-2 8 h-14 Z',K,1)+R(344,G-130,30,4,1)+R(330,G-90,70,4,1)+R(334,G-86,62,86,1);
  s+=chair(296,sy,G,-1);
  return svg(s,'Hombre mayor sentado solo a la mesa de la cocina con una taza; enfrente, una silla vacía');});

scene('b-mascota','Adiós a la mascota','Duelo infantil: explicar la muerte de un animal, acompañar',function(){
  var sy=G-34;
  var s=floorLine(G)+R(40,sy,320,8,1)+R(46,sy+8,308,G-sy-8,1,W,1.2)+R(20,sy-160,380,4,0)+l('M20 '+(sy-156)+' V'+sy,1.2);
  var k={pose:{sit:true,lean:12,tilt:22,legN:[80,4],legF:[78,0],armN:[30,84],armF:[34,88],hN:'fist',hF:'fist'},x:206,y:sy,h:132,kid:true,hair:'short',face:'downSad',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'shorts',fill:'k'},shoes:'white'};
  s+=pot(330,sy,14,'leafy');
  var m={pose:'sitForward',x:136,y:sy,h:182,female:true,hair:'long',face:'calm',top:{kind:'sweater',fill:'stripes'},bottom:{kind:'jeans',fill:'k'},adj:{lean:18,tilt:16,armF:[70,96,1,0.9],hF:'flat'}};
  s+=who(k);var L=last();
  s+=who(m);
  s+=p('M'+F(L.wF[0]-6)+' '+F(L.wF[1]+2)+' q8 8 18 0',null,2.4)+p('M'+F(L.wF[0]-6)+' '+F(L.wF[1]+2)+' q8 8 18 0',null,0.8).replace('#151515','#FFFFFF')+C(L.wF[0]+3,L.wF[1]+7,2,W,0.9);
  return svg(s,'Niño sentado en un escalón con el collar de su perro en las manos; su madre, a su lado, se inclina hacia él');});

scene('b-primer-dia','Primer día de cole','Infancia: adaptación escolar, separación, nervios',function(){
  var s=building(150,40,250,G,{cols:3,rows:2,ww:34,wh:38})+R(150,30,250,10,1)+R(232,52,86,16,1)+l('M244 60 h62',0.9);
  s+=R(136,96,6,140,1)+R(392,96,6,140,1)+l('M142 110 H200 M142 226 H200',1.3)+(function(){var t='';for(var x=148;x<200;x+=8)t+='M'+x+' 110 V226 ';return l(t,1.1);})();
  s+=tree(70,G,170)+floorLine(G);
  var d={pose:'kneel',x:198,h:196,hair:'short',face:'smile',beard:'full',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},flip:-1,adj:{armF:[70,100],hF:'flat',armN:[20,60]}};
  var k={pose:'stand',x:150,h:120,kid:true,female:true,hair:'ponytail',face:'worried',top:{kind:'dress',fill:'dots',sleeve:'short'},bottom:{kind:'skirt',fill:'dots'},shoes:'black',adj:{armF:[14,30],armN:[-4,-2]}};
  s+=who(k);var L=last();
  s+=p('M'+F(L.neck[0]-28)+' '+F(L.neck[1]+2)+' q-6 0 -6 10 l0 34 q0 6 6 6 h20 q4 0 4 -6 l0 -40 q0 -4 -4 -4 Z',W)+R(L.neck[0]-30,L.neck[1]+24,16,12,3,W,1.1)+l('M'+F(L.neck[0]-8)+' '+F(L.neck[1]+2)+' l2 30',1.2);
  s+=who(d);
  return svg(s,'Niña con una mochila enorme ante la verja del colegio; su padre, agachado a su lado, la anima');});

scene('b-rabieta','Acompañar una rabieta','Crianza: rabietas, regulación emocional, estar sin juzgar',function(){
  var s=floorLine(G,30,370)+rug(60,340,G-2);
  var k={pose:{sit:true,floor:true,lean:-2,tilt:-4,legN:[86,6],legF:[90,20],armN:[8,96],armF:[14,92],cross:true,footN:-6,footF:-10},x:236,y:G-2,h:118,kid:true,flip:-1,hair:'curlyShort',face:'angry',top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'shorts',fill:'k'},shoes:'white'};
  var m={pose:{sit:true,floor:true,lean:6,tilt:10,legN:[100,-30],legF:[86,-100,1,0.7],armN:[30,80],armF:[50,70],hN:'flat',hF:'flat',footN:0,footF:-30},x:140,y:G-2,h:182,female:true,hair:'curlyLong',face:'calm',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},shoes:'bare'};
  s+=cushion(320,G-14,30,20,'dots',8)+ball(350,G-8,7);
  s+=who(m)+who(k)+l('M260 '+(G-100)+' l6 -6 M266 '+(G-90)+' l8 -2 M254 '+(G-104)+' l2 -8',1.1);
  return svg(s,'Niño pequeño enfadado en el suelo, con los brazos cruzados; su madre se sienta a su lado y lo acompaña con calma');});

scene('b-patio','Solo en el patio','Adolescencia: aislamiento, acoso escolar, timidez',function(){
  var s=building(-10,26,170,G,{cols:2,rows:2,ww:40,wh:40});
  s+=l('M160 200 H400',1)+R(334,70,6,130,1)+R(312,62,50,34,1)+R(328,82,18,12,0.5,W,1)+p('M330 96 l4 14 h6 l4 -14',null,1);
  var a={pose:'walk',x:244,y:200,h:96,teen:true,hair:'short',face:'smile',top:{kind:'hoodie',fill:'k'},bottom:{fill:'w'}};
  var b={pose:'talkStand',x:270,y:200,h:94,flip:-1,teen:true,female:true,hair:'ponytail',face:'laugh',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{fill:'k'}};
  s+=who(a)+who(b)+ball(300,194,5);
  s+=floorLine(G);
  var k={pose:'lean',x:178,h:172,teen:true,hair:'side',face:'downSad',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{lean:-6,tilt:22,armN:[-14,-4],armF:[6,30],hF:'flat'}};
  s+=who(k)+p('M200 '+(G-26)+' q-2 -8 6 -10 h16 q8 2 6 10 v24 h-28 Z',K)+l('M206 '+(G-14)+' h16',0.8,W);
  return svg(s,'Chico de unos doce años apoyado en la pared del patio con la cabeza baja; al fondo, otros alumnos juegan');});

scene('b-tormenta','Después de la tormenta','Trastornos de la personalidad: familia, regulación emocional, reparar',function(){
  var a={pose:{sit:true,lean:6,tilt:12,armN:[24,100],armF:[30,104],hN:'flat',hF:'flat',legN:[96,-14],legF:[90,-10]},x:110,h:182,female:true,hair:'curlyLong',face:'downSad',tear:true,top:{kind:'sweater',fill:'k'},bottom:{fill:'w'},shoes:'bare'};
  var sy=seatFor(a,G); a.y=sy;
  var b={pose:'sitTalk',x:282,y:sy,h:184,flip:-1,female:true,hair:'bob',face:'worried',top:{kind:'shirt',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armF:[34,70],hF:'flat'}};
  var s=floorLine(G)+frame(170,30,58,40,'mount')+sofa(50,350,sy,G,{one:true})+who(a);
  var L=last();s+=cushion(L.wF[0]+2,L.wF[1]-6,24,26,'dots',-6);
  s+=who(b);
  return svg(s,'Dos hermanas en el sofá, separadas por un hueco: una abraza un cojín con los ojos llorosos y la otra le habla con calma');});

scene('b-invitacion','Una invitación que asusta','Personalidad evitativa, ansiedad social, miedo al rechazo',function(){
  var o={pose:'sitChin',x:206,h:190,hair:'curlyShort',face:'worried',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{lean:10,tilt:6,armN:[12,140,1,0.85],hN:'fist',armF:[34,100],hF:'fist'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(300,36,74,82,{plant:true})+bookcase(20,60,70,176);
  s+=chair(196,sy,G,1).replace(/$/,'')+p('M172 '+(sy-58)+' q6 -4 14 0 l4 40 q-10 6 -20 0 Z',K)+l('M178 '+(sy-50)+' l1 26',0.8,W);
  s+=who(o);var L=last();
  s+=g('translate('+F(L.wF[0]+5)+' '+F(L.wF[1]-4)+') rotate(-18)',R(-8,-5,16,10,0.6,W,1)+l('M-8 -5 l8 6 l8 -6',0.8));
  s+=table(240,350,G-82,G)+laptopClosed(300,G-82)+mug(270,G-82,0.9);
  return svg(s,'Hombre sentado ante su escritorio mira, inseguro, una tarjeta de invitación que tiene en la mano');});

scene('b-antes-dormir','Hablar antes de dormir','Sexualidad y pareja: hablar del deseo, intimidad, confianza',function(){
  var mt=176;
  var s=floorLine(G)+R(20,32,46,58,1)+R(24,36,38,50,0.5,W,0.9)+l('M30 76 l10 -16 l8 10 l6 -6 l6 12',0.8);
  s+=nightstand(366,G,40,46)+tableLamp(366,G-46,true);
  s+=R(30,mt-60,16,G-mt+60,6)+R(36,mt+14,310,G-mt-22,3)+R(38,mt,308,16,5);
  s+=p('M48 '+(mt-12)+' q24 -6 46 0 q4 8 0 12 q-24 4 -46 0 q-4 -6 0 -12 Z',W);
  var a={pose:'lieBack',x:150,y:mt-4,h:178,hair:'side',face:'talk',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'trousers',fill:'v'},shoes:'bare'};
  var b={pose:'lieBack',x:166,y:mt+4,h:172,female:true,hair:'bob',face:'calm',top:{kind:'shirt',fill:'v'},bottom:{kind:'trousers',fill:'v'},shoes:'bare'};
  s+=who(a)+who(b);
  s+=p('M150 '+(mt+6)+' q100 -10 194 -2 V'+(mt+30)+' H150 Z',W)+l('M150 '+(mt+12)+' q100 -8 194 -2',0.9);
  s+=p('M48 '+(G-8)+' v8 h4 v-8 M336 '+(G-8)+' v8 h4 v-8',W,1.2);
  return svg(s,'Pareja en pijama tumbada en la cama, mirando al techo y hablando con calma antes de dormir');});

scene('b-cita','Una cita de nuevo','Sexualidad y pareja: reencontrarse, recuperar el deseo, tiempo juntos',function(){
  var a={pose:'sitTalk',x:118,h:186,female:true,hair:'long',face:'smile',earring:true,top:{kind:'blouse',fill:'k'},bottom:{kind:'skirt',fill:'w'},shoes:'black',adj:{armF:[56,94],hF:'flat'}};
  var sy=seatFor(a,G); a.y=sy;
  var b={pose:'sitTalk',x:282,y:sy,h:196,flip:-1,hair:'grey',face:'smile',beard:'stubble',top:{kind:'shirt',fill:'w'},bottom:{fill:'k'},adj:{armF:[56,94],hF:'flat'}};
  var s=floorLine(G)+windowW(150,26,100,70,{curtains:true,night:true});
  s+=chair(112,sy,G,1)+chair(288,sy,G,-1)+who(a)+who(b);
  s+=table(160,240,G-84,G,{cloth:true});
  s+=R(196,G-100,8,16,1.5)+p('M200 '+(G-100)+' q-4 -6 0 -12 q4 6 0 12 Z',W,1)+l('M194 '+(G-110)+' l-4 -4 M206 '+(G-110)+' l4 -4',0.9);
  s+=glass(176,G-84)+glass(224,G-84);
  s+=l('M'+F(184)+' '+(G-90)+' q16 -6 32 0',0.1);
  s+=table(330,410,G-84,G,{cloth:true})+R(360,G-96,6,12,1.5);
  return svg(s,'Pareja de mediana edad cenando en un restaurante, con una vela en la mesa, sonriéndose');});

scene('b-borrar-app','Borrar la app','Redes sociales: desconexión digital, uso consciente del móvil',function(){
  var o={pose:'sitPhone',x:180,y:G-36,h:184,hair:'curlyShort',face:'smile',top:{kind:'hoodie',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{lean:4,tilt:12,legN:[70,-20],legF:[60,-30],footF:-10}};
  var s=floorLine(G,40,370)+p('M146 '+(G-38)+' q34 -12 68 0 q8 18 0 36 q-34 8 -68 0 q-8 -18 0 -36 Z','url(#symV)',1.3)+l('M146 '+(G-38)+' q34 10 68 0',1);
  s+=who(o);var L=last();s+=phone(L.wF[0]+3,L.wF[1]-3,-50)+l('M'+F(L.wF[0]+12)+' '+F(L.wF[1]-14)+' l4 -4 M'+F(L.wF[0]+14)+' '+F(L.wF[1]-6)+' l6 0',1);
  s+=plantBig(300,G,90)+l('M206 64 q6 -6 12 -2 M212 54 q6 -4 12 0',1);
  return svg(s,'Chico sentado en un puf, a punto de borrar una aplicación del móvil, con cara de alivio');});

scene('b-decir-no','Decir no en Navidad','Límites con la familia, asertividad, culpa en las fiestas',function(){
  var s=floorLine(G)+R(230,30,170,206,0,W,1.2)+R(262,54,72,182,1,W,1.3)+R(268,60,60,176,0,'url(#symGrey)',1);
  s+=path(bumpy(370,100,14,14,14,1.8),W)+C(370,100,8,W,1)+p('M366 112 l-6 10 M374 112 l6 10',null,1.2)+p('M364 110 q6 -4 12 0 q-6 4 -12 0 Z',K,1);
  s+=R(240,G-6,110,6,1,'url(#symCheck)',1);
  var m={pose:'standHands',x:296,h:180,flip:-1,female:true,hair:'greyBun',face:'sad',glasses:true,top:{kind:'coat',fill:'dots'},bottom:{kind:'skirt',fill:'k'},adj:{armN:[10,60],armF:[14,70],hN:'flat',hF:'flat'}};
  var d={pose:'wave',x:150,h:194,female:true,hair:'long',face:'smile',top:{kind:'coat',fill:'k'},bottom:{kind:'jeans',fill:'w'},shoes:'boot',adj:{armF:[112,164,1,0.9]}};
  s+=who(m)+who(d);var L=last();
  s+=bag(L.wN[0]+2,L.wN[1]+2);
  s+=tree(50,G,150).replace(/^/,'');
  return svg(s,'Una mujer se despide en la puerta de casa de su madre en Navidad, amable y firme; la madre, algo contrariada');});
function bag(x,y){return p('M'+(x-10)+' '+(y+2)+' h20 l2 20 h-24 Z',W)+p('M'+(x-5)+' '+(y+2)+' q5 -8 10 0',null,1.2)+l('M'+(x-8)+' '+(y+9)+' h16',0.8);}

scene('b-lista','La lista invisible','Maternidad: carga mental, reparto de tareas, agotamiento',function(){
  var o={pose:'sitWrite',x:160,h:188,female:true,hair:'bun',face:'tired',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{lean:4,tilt:2,armF:[40,140,1,0.8],hF:'fist',armN:[24,96],hN:'fist'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+chair(150,sy,G,1)+who(o);var L=last();
  s+=table(196,330,G-82,G)+mug(310,G-82,0.9)+R(264,G-86,30,4,1,W,1);
  var x0=L.wF[0]+2,y0=L.wF[1]-4;
  s+=p('M'+F(x0)+' '+F(y0)+' l10 -2 C'+F(x0+12)+' '+F(y0+40)+' '+F(x0+30)+' '+F(G-20)+' '+F(x0+70)+' '+F(G-6)+' l-4 6 C'+F(x0+20)+' '+F(G-16)+' '+F(x0)+' '+F(y0+40)+' '+F(x0)+' '+F(y0)+' Z',W,1.1);
  for(var i=0;i<7;i++)s+=l('M'+F(x0+3+i*3)+' '+F(y0+8+i*12)+' l5 -0.5',0.7);
  s+=p('M'+F(x0+70)+' '+F(G-6)+' q12 4 24 0 l-2 6 q-12 2 -26 0 Z',W,1)+l('M108 70 q-6 -6 -4 -12',1);
  s+=l('M'+F(L.wN[0]+4)+' '+F(L.wN[1]-2)+' l8 -8',1.6);
  return svg(s,'Mujer sentada a la mesa con una lista de tareas larguísima que llega hasta el suelo, agotada e irónica');});

scene('b-guarderia','Despedida en la guardería','Maternidad y paternidad: culpa, conciliación, adaptación',function(){
  var s=floorLine(G)+R(176,90,224,4,1);
  [196,236,276,316,356].forEach(function(x,i){s+=l('M'+x+' 94 v8',1.4)+(i%2?p('M'+(x-8)+' 102 h16 l2 30 h-20 Z',i===1?K:W,1.1):p('M'+(x-6)+' 102 h12 q4 10 0 22 h-12 q-4 -12 0 -22 Z',W,1.1));});
  s+=R(190,30,40,34,1,W,1)+C(204,44,5,W,0.8)+l('M196 58 l10 -6 l12 4',0.8)+R(240,24,34,40,1,W,1)+l('M246 54 q10 -20 22 0 M252 40 l4 4',0.8)+R(284,32,40,30,1,W,1)+C(296,46,6,K,0.6)+l('M308 54 h10',0.8);
  var t={pose:'talkStand',x:296,h:186,flip:-1,female:true,hair:'ponytail',face:'smile',top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'trousers',fill:'k'},shoes:'white',adj:{armF:[40,30],hF:'flat'}};
  var k={pose:'wave',x:250,h:86,kid:true,flip:-1,hair:'curlyShort',face:'surprised',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'trousers',fill:'k'},shoes:'white',adj:{armF:[110,160,1,0.9]}};
  var m={pose:'wave',x:110,h:198,female:true,hair:'bob',face:'sad',top:{kind:'coat',fill:'k'},bottom:{kind:'skirt',fill:'k'},shoes:'black',adj:{armF:[108,164,1,0.9]}};
  s+=who(t)+who(k)+who(m);var L=last();
  s+=p('M'+F(L.wN[0]-8)+' '+F(L.wN[1]+2)+' h24 v20 h-24 Z',K)+p('M'+F(L.wN[0]-2)+' '+F(L.wN[1]+2)+' q6 -6 12 0',null,1.2);
  return svg(s,'Una madre vestida para el trabajo dice adiós a su hijo pequeño en la guardería, mientras una educadora lo coge de la mano');});

scene('b-primeras-semanas','Las primeras semanas','Paternidad: posparto, cansancio, vínculo con el bebé',function(){
  var o={pose:'sitBack',x:166,h:190,hair:'short',face:'tired',beard:'stubble',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'trousers',fill:'check'},shoes:'bare',adj:{tilt:24,lean:-10,armN:[16,110],armF:[22,104],hN:'flat',hF:'flat'}};
  var sy=seatFor(o,G-8); o.y=sy;
  var s=floorLine(G)+windowW(40,36,70,80,{night:true,curtains:true});
  s+=p('M120 '+(G-4)+' q50 12 100 -2',null,2.2)+l('M136 '+(sy+4)+' L132 '+(G-2)+' M200 '+(sy+4)+' L204 '+(G-4),1.6)+R(130,sy,76,5,2)+R(132,sy-74,10,78,4)+l('M137 '+(sy-60)+' v50',0.8);
  s+=who(o);var L=last();
  var bx=(L.wN[0]+L.wF[0])/2,by=(L.wN[1]+L.wF[1])/2-6;
  s+=g('translate('+F(bx)+' '+F(by)+') rotate(-16)',p('M-14 -6 q14 -6 26 0 q4 6 0 12 q-14 6 -26 0 q-4 -6 0 -12 Z',fillOf('dots'),1.1)+C(-14,-2,6.4,W,1.1)+l('M-17 -2 q1.2 1 2.4 0 M-13 -3 q1.2 1 2.4 0',0.8)+p('M-19 -6 q4 -6 10 -2',null,1));
  s+=R(270,G-110,110,110,2)+(function(){var t='';for(var x=280;x<380;x+=10)t+='M'+x+' '+(G-104)+' V'+(G-20)+' ';return l(t,1);})()+l('M270 '+(G-104)+' H380 M270 '+(G-20)+' H380',1.2)+R(276,G-60,98,40,2,W,1.1)+l('M286 '+(G-60)+' q40 -10 80 0',0.8);
  s+=g('translate(320 '+(G-150)+')',l('M0 0 V24 M-14 10 h28',1.2)+C(-14,18,4,K,0.8)+C(14,18,4,W,0.8)+C(0,34,4,W,0.8));
  s+=l('M310 '+(G-150)+' V'+(G-160),1.2);
  return svg(s,'Padre cansado en una mecedora con su bebé dormido en brazos, junto a la cuna');});

scene('b-cerrar-portatil','Cerrar el portátil','Teletrabajo: desconectar, horarios, separar casa y trabajo',function(){
  var o={pose:'sitBack',x:236,h:188,flip:-1,female:true,hair:'afro',face:'closed',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{kind:'jeans',fill:'k'},adj:{lean:-16,tilt:-14,armF:[150,176,1,0.8],hF:'open',armN:[40,90],hN:'flat',legN:[86,4],legF:[84,0]}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+clock(210,48,16,6,0)+sofa(256,404,sy+6,G,{one:true,blanket:'stripes'});
  s+=shelf(20,74,110,7);
  s+=chair(240,sy,G,-1)+who(o);
  s+=table(64,196,G-80,G)+laptopClosed(172,G-80)+mug(96,G-80,0.9)+paper(130,G-81,24,3,0)+pot(118,G-80,8,'round');
  return svg(s,'Mujer que teletrabaja cierra el portátil a las seis y se estira con alivio; detrás, un reloj de pared y el sofá');});

scene('b-vuelta-vacaciones','Vuelta de vacaciones','Cambios: síndrome posvacacional, volver a la rutina',function(){
  var o={pose:{sit:true,floor:true,lean:4,tilt:10,legN:[100,-30],legF:[92,-100,1,0.7],armN:[30,80],armF:[70,96],hN:'flat',hF:'fist',footN:0,footF:-30},x:146,y:G,h:186,female:true,hair:'long',face:'sad',top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'shorts',fill:'w'},shoes:'bare'};
  var s=floorLine(G,40,370);
  s+=R(220,G-14,120,14,3)+R(228,G-60,104,48,4,W)+R(234,G-54,92,36,2,W,1)+p('M246 '+(G-30)+' q10 -10 24 -4 q10 -6 22 2 q4 6 0 12 h-44 Z',W,1)+p('M292 '+(G-36)+' h26 v18 h-26 Z','url(#symStripes)',1);
  s+=who(o);var L=last();
  s+=g('translate('+F(L.wF[0]+6)+' '+F(L.wF[1]-4)+') rotate(-18)',E(0,4,18,4.4,W,1.2)+p('M-9 3 q0 -12 9 -12 q9 0 9 12 Z',W,1.2)+R(-9,-1,18,4,0,K,1));
  return svg(s,'Mujer sentada en el suelo junto a la maleta abierta, con un sombrero de paja en la mano y cara de nostalgia');});

scene('b-turno','Al final del turno','Burnout en sanitarios, estrés laboral, agotamiento',function(){
  var s=floorLine(G);
  for(var i=0;i<6;i++){var x=24+i*62;s+=R(x,24,60,G-50,2)+R(x+10,36,40,10,1,W,1)+l('M'+(x+14)+' 41 h32',0.7)+R(x+50,110,4,16,1,K,0.8)+l('M'+(x+8)+' 70 h44 M'+(x+8)+' 76 h44',0.8);}
  s+=R(10,G-26,380,4,1)+l('M10 '+(G-26)+' V'+G+' M390 '+(G-26)+' V'+G,1);
  s+=R(60,G-56,280,8,2)+R(80,G-48,6,48,1)+R(312,G-48,6,48,1);
  var o={pose:'sitSlump',x:150,y:G-56,h:188,female:true,hair:'bun',face:'tired',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'trousers',fill:'w'},shoes:'white',adj:{lean:-18,tilt:-22,armF:[30,40],hF:'fist'},
    over:l('M-2 -30 L1 -24 L4 -30',1)+R(2,-22,6,6,1,W,0.8)};
  s+=who(o);var L=last();
  s+=g('translate('+F(L.wF[0]+6)+' '+F(L.wF[1]+8)+')',p('M-8 -4 h14 q5 0 5 5 v3 h-19 Z',W,1.1)+C(-4,-1,0.8,K,0.4)+C(0,-1,0.8,K,0.4));
  s+=p('M236 '+(G-6)+' h16 q5 0 5 5 v1 h-21 Z',W,1.1);
  return svg(s,'Enfermera exhausta sentada en el banco del vestuario, con la cabeza apoyada en la taquilla y los zuecos en la mano');});

scene('b-esperar-llamada','Esperar la llamada','Vínculos: hijos que viven lejos, soledad en la madurez',function(){
  var o={pose:'sitChin',x:150,h:182,female:true,hair:'grey',face:'sad',glasses:true,top:{kind:'sweater',fill:'dots'},bottom:{kind:'skirt',fill:'k'},shoes:'black',adj:{lean:4,tilt:8,armN:[10,70],armF:[16,68],hN:'flat',hF:'flat'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(286,34,80,84,{curtains:true});
  s+=armchair(150,sy,G,1)+who(o);var L=last();
  s+=phone(L.wF[0]+6,L.wF[1]-1,90);
  s+=sideTable(254,G,70)+R(240,G-96,26,26,1)+R(243,G-93,20,20,0.5,W,0.8)+C(250,G-84,3.4,W,0.7)+C(257,G-83,3,W,0.7)+p('M244 '+(G-74)+' q6 -6 12 0 q4 -5 8 0',null,0.7)+p('M240 '+(G-70)+' l-6 4 h4',null,1)+pot(270,G-70,8,'round');
  return svg(s,'Mujer mayor en su sillón, con el móvil en el regazo, mira una foto enmarcada de su familia');});

scene('b-siesta','Siesta en el jardín','Autocuidado: descanso, pausas, bajar el ritmo',function(){
  var s=floorLine(G)+tree(40,G,200)+tree(372,G,196)+grass(130,G)+grass(200,G)+grass(268,G);
  s+=l('M50 110 Q206 200 362 110',1.4)+l('M50 110 L84 150 M362 110 L326 150',1.1);
  s+=p('M84 150 Q206 210 326 150 Q206 186 84 150 Z',fillOf('stripes'),1.2);
  var o={pose:'lieBack',x:220,y:168,h:170,rot:-4,female:true,hair:'bob',face:'closed',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'trousers',fill:'k'},shoes:'bare',adj:{armN:[60,130],armF:[56,124],hN:'flat',hF:'flat',legN:[84,96],legF:[88,92]}};
  s+=who(o);var L=last();
  s+=g('translate('+F(L.head[0]+2)+' '+F(L.head[1]-8)+') rotate(-30)',E(0,4,16,4,W,1.2)+p('M-8 3 q0 -11 8 -11 q8 0 8 11 Z',W,1.2)+R(-8,0,16,3,0,K,1));
  s+=p('M300 '+(G-16)+' h22 l-2 16 h-18 Z',W)+l('M322 '+(G-12)+' l14 -10',1.4)+p('M302 '+(G-16)+' q8 -12 18 0',null,1.1);
  return svg(s,'Mujer dormida en una hamaca entre dos árboles del jardín, con un sombrero sobre la cara');});

scene('b-dejarlo-ir','Cuesta dejarlo ir','Dependencia emocional, rupturas, soltar',function(){
  var sy=G-30;
  var s=floorLine(G);
  for(var i=0;i<5;i++)s+=R(10+i*0,sy-i*30,150-i*28,30,0,W,1.2);
  var o={pose:'sitKnees',x:110,y:sy,h:180,female:true,hair:'long',face:'sad',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'bare',adj:{lean:10,tilt:-4,armN:[34,64],armF:[40,70],hN:'flat',hF:'flat'}};
  s+=who(o);
  s+=l('M314 236 V70 M298 236 h32 M314 76 l-12 -4 M314 76 l12 -4 M314 90 l-12 -6 M314 90 l12 -6',1.6);
  s+=p('M314 82 q-18 0 -22 16 l-6 62 q4 4 10 2 l2 -40 l4 50 h26 l2 -50 l4 40 q6 2 10 -2 l-6 -62 q-4 -16 -24 -16 Z',K)+l('M306 86 l6 20 l6 -20 M312 106 v40',0.9,W);
  s+=l('M178 74 q6 -4 12 0',1);
  return svg(s,'Mujer sentada en un escalón, con las rodillas recogidas, mira un perchero del que cuelga la chaqueta de su ex');});

scene('b-amistad-pesa','Una amistad que pesa','Vínculos: amistades desequilibradas, poner límites, cansancio',function(){
  var s=floorLine(G)+R(0,G-14,400,14,0,W,1.1)+R(0,G-28,400,14,0,W,1.1)+R(0,G-42,400,14,0,W,1.1);
  s+=streetLamp(34,G-42,150)+streetLamp(370,G-42,150);
  s+=p('M150 '+(G-64)+' h100 v22 h-100 Z',W)+E(200,G-64,50,7)+R(194,G-104,12,40,2)+E(200,G-104,20,4)+p('M200 '+(G-112)+' q-16 -8 -28 14 M200 '+(G-112)+' q16 -8 28 14',null,1.1)+l('M170 '+(G-84)+' l-2 8 M230 '+(G-84)+' l2 8',0.9);
  var a={pose:'sitTalk',x:126,y:G-42,h:180,female:true,hair:'afro',face:'talk',top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armF:[40,140],hF:'open',armN:[20,100],hN:'open',legN:[70,20],legF:[66,24]}};
  var b={pose:'sitSlump',x:274,y:G-42,h:182,flip:-1,female:true,hair:'ponytail',face:'tired',top:{kind:'coat',fill:'w'},bottom:{fill:'k'},shoes:'black',adj:{armN:[30,120,1,0.8],armF:[36,100],hN:'fist',hF:'flat',legN:[70,20],legF:[66,24]}};
  s+=who(a)+l('M88 98 l-6 -4 M84 108 l-8 0 M92 90 l-3 -7',1.1)+who(b);var L=last();
  s+=C(L.wF[0],L.wF[1]+2,2.4,W,1)+l('M'+F(L.wF[0])+' '+F(L.wF[1]+2)+' v-1.4 M'+F(L.wF[0])+' '+F(L.wF[1]+2)+' h1.2',0.6);
  return svg(s,'Dos amigas en la escalinata de una plaza: una habla sin parar y la otra, cansada, mira el reloj');});

scene('b-jubilado','Primer lunes jubilado','Jubilación: nuevos ritmos, sentido, organizar el tiempo',function(){
  var s=floorLine(G,40,370)+R(238,40,92,108,2)+R(238,40,92,20,2,K,1.2)+l('M262 50 h44',1.2,W)+R(256,34,4,10,1,W,0.8)+R(308,34,4,10,1,W,0.8);
  var t='';for(var r=0;r<5;r++)for(var c=0;c<7;c++)t+=R(244+c*12,66+r*15,9,11,0.5,W,0.7);s+=t;
  s+=pot(350,G,14,'tall');
  var o={pose:'sitCup',x:170,h:194,hair:'bald',glasses:true,face:'surprised',beard:'full',top:{kind:'coat',fill:'v'},bottom:{fill:'w'},shoes:'bare',adj:{sit:false,lean:0,tilt:-10,legN:[-3,-3],legF:[4,4],armF:[24,120],hF:'fist',armN:[-4,-2],hN:'open'}};
  s+=who(o);var L=last();s+=mug(L.wF[0]+5,L.wF[1]+5,0.9)+p('M'+F(L.wF[0]+4)+' '+F(L.wF[1]-10)+' q-2 -6 2 -10 M'+F(L.wF[0]+9)+' '+F(L.wF[1]-10)+' q-2 -6 2 -10',null,0.8);
  s+=l('M210 64 q4 -6 2 -12',1);
  return svg(s,'Hombre recién jubilado, en bata y con una taza en la mano, mira desconcertado un calendario en blanco');});

scene('b-cena-tele','Cenar con la tele','Soledad en la vejez, rutinas, aislamiento',function(){
  var o={pose:'sitBack',x:144,h:184,hair:'grey',face:'tired',glasses:true,top:{kind:'sweater',fill:'w'},bottom:{fill:'k'},shoes:'boot',adj:{lean:-6,tilt:6,armN:[20,84],armF:[24,96],hN:'fist',hF:'flat',legN:[86,6],legF:[84,4]}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(28,30,64,80,{curtains:true,night:true});
  s+=armchair(144,sy,G,1)+who(o);var L=last();
  s+=R(L.P[0]+10,sy-22,46,4,1.5)+plate(L.P[0]+30,sy-22,20)+glass(L.P[0]+48,sy-22);
  s+=R(276,G-56,110,56,2)+l('M276 '+(G-30)+' H386 M331 '+(G-56)+' V'+G,1)+C(320,G-43,1.2,K,0.6)+C(342,G-43,1.2,K,0.6)+C(320,G-17,1.2,K,0.6)+C(342,G-17,1.2,K,0.6);
  s+=R(286,G-130,92,70,3)+R(292,G-125,80,60,1,W,0.9)+R(326,G-60,12,4,1);
  s+=l('M298 '+(G-110)+' q14 -10 26 0 t26 0 M300 '+(G-90)+' h40',0.8)+C(352,G-100,6,W,0.8)+l('M268 '+(G-110)+' l-6 -2 M268 '+(G-96)+' l-7 2',0.9);
  return svg(s,'Hombre mayor cena solo en su sillón con una bandeja sobre las rodillas, delante de la televisión');});

scene('b-paquete-casa','Un paquete de casa','Migración: añoranza, duelo migratorio, raíces',function(){
  var o={pose:{sit:true,floor:true,lean:8,tilt:6,legN:[100,-30],legF:[92,-100,1,0.7],armN:[30,120,1,0.8],armF:[56,120,1,0.85],hN:'fist',hF:'fist',footN:0,footF:-30},x:136,y:G,h:186,female:true,hair:'curlyLong',face:'smile',tear:true,top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{fill:'k'},shoes:'bare'};
  var s=floorLine(G,30,370);
  s+=p('M226 '+(G-52)+' h80 v52 h-80 Z',W)+p('M226 '+(G-52)+' l-10 -14 h70 l20 14 Z',W)+p('M306 '+(G-52)+' l12 -16 l-6 -4 l-18 20 Z',W)+l('M240 '+(G-30)+' h50 M240 '+(G-22)+' h36',0.8)+R(256,G-14,24,8,0.5,W,0.8);
  s+=p('M244 '+(G-60)+' h22 v-22 l-4 -4 h-14 l-4 4 Z',K,1.1)+l('M250 '+(G-72)+' h10',0.8,W)+p('M272 '+(G-58)+' q14 -14 30 -6 q4 10 -4 14 Z','url(#symStripes)',1.1)+p('M296 '+(G-50)+' l6 10 M300 '+(G-52)+' l8 8',null,1);
  s+=who(o);var L=last();
  s+=g('translate('+F(L.wF[0]+8)+' '+F(L.wF[1]-10)+') rotate(-8)',R(-11,-14,22,28,0.6,W,1.1)+l('M-7 -8 h14 M-7 -4 h12 M-7 0 h14 M-7 4 h10 M-7 8 h8',0.6));
  return svg(s,'Mujer sentada en el suelo lee emocionada una carta de su familia junto a una caja abierta con café y una bufanda');});

scene('b-cuarto-vacio','El cuarto vacío','Nido vacío: cuando los hijos se van de casa',function(){
  var s=floorLine(G)+R(150,28,250,208,0,W,1.1);
  s+=R(180,44,30,40,1)+l('M186 74 l8 -14 l6 8 l6 -6',0.8)+R(222,40,26,36,1)+C(235,52,5,K,0.6)+l('M226 70 h18',0.8);
  s+=R(300,60,80,3.5,1)+p('M316 60 v-8 h12 v8 M314 44 h16 q0 8 -8 8 q-8 0 -8 -8 Z',W,1.1)+books(340,60,4);
  s+=R(262,G-60,120,16,4)+R(258,G-80,12,80,4)+R(266,G-44,116,36,2)+p('M276 '+(G-72)+' q16 -4 30 0 q2 6 0 12 q-16 2 -30 0 Z',W)+l('M300 '+(G-58)+' H380',0.8);
  s+=R(130,24,20,212,0,W,1.2);
  var w={pose:'lean',x:118,h:184,female:true,hair:'bob',face:'sad',top:{kind:'sweater',fill:'k'},bottom:{kind:'skirt',fill:'w'},shoes:'black',adj:{lean:-8,armF:[30,140,1,0.6],hF:'flat',armN:[-24,-10]}};
  var m={pose:'stand',x:72,h:196,hair:'grey',beard:'stubble',face:'calm',glasses:true,top:{kind:'shirt',fill:'w'},bottom:{fill:'k'},adj:{armF:[72,84,0.95,0.9],hF:'flat'}};
  s+=who(m)+who(w);
  return svg(s,'Pareja madura en la puerta del dormitorio vacío de su hijo, con la cama hecha y los pósteres en la pared');});

scene('b-respiro','El respiro del cuidador','Cuidadores: descanso, autocuidado, sobrecarga',function(){
  var o={pose:'sitCup',x:150,h:184,female:true,hair:'greyBun',face:'closed',top:{kind:'sweater',fill:'stripes'},bottom:{fill:'k'},shoes:'white',adj:{lean:-8,tilt:-6,armF:[18,104],armN:[14,104],hF:'fist',hN:'fist'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G);
  var wx=290;s+=C(wx,G-30,30,W,1.4)+C(wx,G-30,24,W,0.9)+l('M'+(wx-24)+' '+(G-30)+' h48 M'+wx+' '+(G-54)+' v48',0.7)+R(wx-30,G-86,6,58,2)+R(wx-30,G-62,60,6,2)+R(wx+22,G-94,6,64,2)+C(wx+38,G-6,6,W,1.2)+l('M'+(wx+28)+' '+(G-94)+' l12 -2',1.6);
  s+=p('M100 '+(sy-60)+' q50 -12 100 0 l-6 60 h-88 Z','url(#symCheck)',1.2)+p('M104 '+sy+' h92 l-4 '+(G-sy)+' h-6 l-2 -'+(G-sy-10)+' h-66 l-2 '+(G-sy-10)+' h-6 Z',W,1.2)+R(100,sy-4,100,8,3,W);
  s+=who(o);var L=last();s+=mug(L.wF[0]+6,L.wF[1]+6,0.9)+p('M'+F(L.wF[0]+5)+' '+F(L.wF[1]-6)+' q-2 -6 2 -10',null,0.8);
  return svg(s,'Cuidadora descansa con los ojos cerrados y una taza entre las manos en un sillón de mimbre; detrás, una silla de ruedas vacía');});

scene('b-ciudad-nueva','Una ciudad nueva','Migración: llegar a otro país, empezar de cero',function(){
  var s=building(-6,20,136,214,{cols:2,rows:3,ww:26,wh:30,balcony:true})+building(250,10,156,214,{cols:2,rows:3,ww:28,wh:32,balcony:true});
  s+=building(132,60,116,214,{cols:2,rows:2,ww:22,wh:26});
  s+=floorLine(214)+l('M0 236 H400',1.2);
  s+=R(352,70,4,144,1)+R(330,76,48,12,1,W,1.1)+l('M336 82 h36',0.8);
  var o={pose:'phoneStand',x:110,y:228,h:194,hair:'short',beard:'full',face:'worried',top:{kind:'coat',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'white'};
  s+=who(o);var L=last();s+=phone(L.wF[0]+3,L.wF[1]-3,-30);
  var sx=L.wN[0]-26;s+=l('M'+F(sx+20)+' 166 L'+F(L.wN[0])+' '+F(L.wN[1]),1.8)+R(sx,166,40,56,6,K)+R(sx+8,172,24,44,3,W,0.9)+C(sx+7,225,3,W,1)+C(sx+33,225,3,W,1);
  return svg(s,'Hombre recién llegado con una maleta de ruedas consulta el mapa en el móvil en una esquina de una ciudad nueva');});

scene('b-devolver-libro','Pedir perdón a un amigo','Culpa: reparar, disculparse, asumir errores',function(){
  var s=floorLine(G,40,360)+plantBig(330,G,84);
  var a={pose:'stand',x:132,h:196,hair:'curlyShort',face:'worried',beard:'stubble',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armF:[66,90],hF:'flat',armN:[158,-100,1,0.5],hN:'open',tilt:6}};
  var b={pose:'stand',x:250,h:192,flip:-1,hair:'side',face:'smile',glasses:true,top:{kind:'shirt',fill:'check'},bottom:{fill:'k'},adj:{armF:[66,96],hF:'flat'}};
  s+=who(a);var L=last();s+=who(b);
  s+=book(L.wF[0]+12,L.wF[1]-3,22,6,'k',0);
  return svg(s,'Un hombre devuelve un libro a su amigo rascándose la nuca, apurado; el otro lo recoge con media sonrisa');});

scene('b-piso-compartido','Decir lo que necesito','Comunicación asertiva, convivencia, compañeros de piso',function(){
  var s=floorLine(G);
  s+=R(210,G-86,190,86,2)+R(206,G-90,196,6,2)+l('M276 '+(G-84)+' V'+G+' M340 '+(G-84)+' V'+G,1)+l('M262 '+(G-60)+' h8 M282 '+(G-60)+' h8 M346 '+(G-60)+' h8',1.4);
  s+=R(230,30,166,44,2)+l('M286 30 V74 M342 30 V74',1);
  s+=p('M232 '+(G-90)+' q10 -14 24 -12 l6 12 Z',W,1.1)+E(250,G-94,12,3)+E(248,G-99,11,3)+E(252,G-104,10,3)+mug(276,G-90,0.9);
  s+=R(14,40,64,196,4)+l('M14 110 H78',1.2)+R(66,60,4,30,2)+R(66,122,4,50,2);
  s+=g('translate(32 56) rotate(-6)',R(-6,-6,12,12,0.5,W,0.9))+g('translate(50 76) rotate(5)',R(-6,-6,12,12,0.5,K,0.9));
  var a={pose:'talkStand',x:132,h:186,female:true,hair:'bob',face:'talk',top:{kind:'tee',fill:'w',sleeve:'short'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armF:[30,96],hF:'open'}};
  var b={pose:'lean',x:236,h:198,flip:-1,hair:'cap',face:'calm',top:{kind:'hoodie',fill:'k'},bottom:{fill:'w'},adj:{armN:[-30,10,0.9],armF:[14,130,1,0.8],hF:'fist',lean:-6}};
  s+=who(a)+who(b);
  return svg(s,'En la cocina de un piso compartido, una chica habla con calma y firmeza a su compañero, apoyado en la encimera');});

scene('b-desde-cero','Otra vez desde cero','Perfeccionismo: autoexigencia, miedo al error, bloqueo',function(){
  var o={pose:'sitWrite',x:150,h:188,female:true,hair:'ponytail',face:'angry',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{kind:'jeans',fill:'k'},adj:{lean:20,tilt:14}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G,30,380)+chair(140,sy,G,1)+who(o);var L=last();
  s+=table(186,330,G-82,G)+paper(L.wF[0]+14,G-83.5,30,3,0)+l('M'+F(L.wF[0]+2)+' '+F(L.wF[1]-2)+' l8 -10',1.8)+deskLamp(312,G-82,-1);
  s+=crumpled(250,G-89,5)+crumpled(262,G-88,4.4)+crumpled(240,G-6,5)+crumpled(268,G-5,4.4)+crumpled(296,G-6,5)+crumpled(212,G-5,4)+crumpled(320,G-5,4.6)+crumpled(344,G-6,5);
  s+=p('M356 '+G+' l-4 -30 h28 l-4 30 Z',W)+crumpled(364,G-34,5)+l('M118 68 l-4 -8 M110 76 l-8 -4',1.1);
  return svg(s,'Mujer en su escritorio, rodeada de bolas de papel arrugado, empieza otra hoja con gesto tenso y exigente');});

scene('b-impostor','No me lo merezco','Síndrome del impostor: dudar de los propios logros',function(){
  var s=floorLine(G)+windowW(300,30,80,86,{})+frame(154,44,58,42,'diploma')+bookcase(20,70,72,166);
  s+=table(240,390,G-82,G,{drawer:1})+laptop(300,G-82,1)+mug(370,G-82,0.9);
  var o={pose:'stand',x:200,h:198,flip:-1,hair:'side',face:'worried',top:{kind:'coat',fill:'k'},bottom:{fill:'k'},shoes:'black',adj:{armF:[40,166,1,0.72],hF:'open',armN:[-4,-2],tilt:8},
    over:p('M-1 -32 L1.6 -24 L4.2 -32',null,1,W)};
  s+=who(o);
  return svg(s,'Joven con americana en su despacho, junto a su diploma enmarcado, se tapa media cara, inseguro');});

scene('b-manana-hago','Mañana lo hago','Procrastinación: posponer, culpa, motivación',function(){
  var sy=G-44;
  var s=floorLine(G)+sofa(40,330,sy,G,{one:true})+R(268,30,64,72,2)+R(268,30,64,14,2,K)+l('M286 36 h28',1,W);
  var t='';for(var r=0;r<4;r++)for(var c=0;c<5;c++)t+=R(272+c*12,50+r*12,9,9,0.4,W,0.7);s+=t+C(308,74,7,'none',1.6);
  var o={pose:'lieBack',x:160,y:sy-2,h:178,hair:'curlyShort',face:'tired',top:{kind:'hoodie',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'white',adj:{armN:[70,150,1,0.8],armF:[160,120,1,0.6],legN:[70,110],legF:[80,96]}};
  s+=who(o);var L=last();
  s+=g('translate('+F(L.P[0]-30)+' '+F(sy-32)+') rotate(-6)',p('M-14 0 L0 -12 L14 0 Z',fillOf('k'),1.1)+l('M0 -12 V0',0.8,W));
  s+=book(346,G-4,22,6,'w',0)+book(350,G-10,20,6,'k',4);
  return svg(s,'Estudiante tumbado en el sofá con un libro abierto boca abajo sobre el pecho; en la pared, un calendario con una fecha marcada');});

scene('b-garaje','Discrepar sin discutir','Familia: padres mayores, paciencia, discrepar con cariño',function(){
  var s=floorLine(G)+R(20,34,170,90,1,'url(#symGrey)',1);
  s+=l('M40 54 v20 M60 52 l8 24 M84 50 v28 M110 54 l-4 22 M140 52 v22 M164 56 l6 18',1.6)+C(84,82,3,W,1)+p('M134 74 h12 l-2 6 h-8 Z',W,1);
  s+=R(150,G-80,200,8,2)+R(160,G-72,6,72,1)+R(334,G-72,6,72,1)+R(260,G-60,70,30,2)+l('M290 '+(G-48)+' h10',1.2);
  s+=p('M224 '+(G-80)+' q-4 -26 8 -40 l18 -2 q8 18 0 42 Z',W)+l('M236 '+(G-120)+' l-14 -10',1.4)+p('M216 '+(G-142)+' l10 -8 l14 10 l-10 10 Z',W);
  s+=C(46,G-22,22,W,1.2)+C(46,G-22,3,K,0.6)+C(128,G-22,22,W,1.2)+C(128,G-22,3,K,0.6)+l('M46 '+(G-22)+' L76 '+(G-58)+' L118 '+(G-58)+' L128 '+(G-22)+' M76 '+(G-58)+' L92 '+(G-22)+' L46 '+(G-22)+' M76 '+(G-58)+' l-4 -10 h10 M118 '+(G-58)+' l2 -12 l8 -2',1.4);
  var f={pose:'talkStand',x:372,h:180,flip:-1,hair:'bald',beard:'full',face:'talk',glasses:true,top:{kind:'sweater',fill:'w'},bottom:{fill:'k'},shoes:'boot',adj:{armF:[60,70],hF:'point',lean:6,tilt:6}};
  var son={pose:'stand',x:196,h:196,hair:'short',face:'smile',top:{kind:'shirt',fill:'check',sleeve:'rolled'},bottom:{kind:'jeans',fill:'k'},adj:{armF:[50,100],hF:'fist',armN:[30,70],hN:'flat',tilt:8}};
  s+=who(son);var L=last();s+=l('M'+F(L.wF[0]+3)+' '+F(L.wF[1]-3)+' l14 -2',2.4)+l('M'+F(L.wF[0]+17)+' '+F(L.wF[1]-5)+' l6 -1',1);
  s+=who(f);
  return svg(s,'Un hijo y su padre mayor arreglan una lámpara en el banco de trabajo del garaje; el padre señala y el hijo sostiene el destornillador con paciencia');});

scene('b-abanico','Cambios hormonales','Salud y emociones: menopausia, sofocos, autocuidado',function(){
  var o={pose:'sitBack',x:160,h:184,female:true,hair:'bob',face:'smile',earring:true,top:{kind:'blouse',fill:'stripes'},bottom:{fill:'k'},shoes:'black',adj:{lean:-10,tilt:-6,armF:[30,160,1,0.7],hF:'fist',armN:[10,70],hN:'flat'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+frame(256,40,46,56,'face')+armchair(160,sy,G,1)+who(o);var L=last();
  var fx=L.wF[0]+4,fy=L.wF[1]-8;s+=p('M'+F(fx)+' '+F(fy+8)+' L'+F(fx-12)+' '+F(fy-10)+' A22 22 0 0 1 '+F(fx+16)+' '+F(fy-12)+' Z',W,1.2)+l('M'+F(fx)+' '+F(fy+8)+' L'+F(fx-4)+' '+F(fy-14)+' M'+F(fx)+' '+F(fy+8)+' L'+F(fx+5)+' '+F(fy-15)+' M'+F(fx)+' '+F(fy+8)+' L'+F(fx+11)+' '+F(fy-14),0.8);
  s+=l('M'+F(fx+22)+' '+F(fy-6)+' q4 -4 0 -8 M'+F(fx+28)+' '+F(fy-2)+' q4 -4 0 -8',1);
  s+=sideTable(290,G,64)+glass(284,G-64)+pot(300,G-64,8,'round');
  return svg(s,'Mujer de unos cincuenta años sentada en su sillón se abanica con humor; al lado, un vaso de agua');});

scene('b-ruido','Demasiado ruido','Infancia y neurodiversidad: sobrecarga sensorial, autismo',function(){
  var s=floorLine(G);
  for(var i=0;i<2;i++){var x=i?250:20,w=i?150:120;s+=R(x,24,w,212,1);for(var r=0;r<5;r++){var y=60+r*36;s+=R(x,y,w,4,0.5);for(var c=0;c<Math.floor(w/16);c++){var bx=x+6+c*16;s+=(c+r)%3===0?R(bx,y-20,11,20,1,W,0.9):(c+r)%3===1?C(bx+5.5,y-7,6,W,0.9):R(bx,y-14,12,14,1,(c+r)%4?W:K,0.9);}}}
  s+=R(318,G-74,60,36,2,W,1.2)+(function(){var t='';for(var x=326;x<378;x+=8)t+='M'+x+' '+(G-74)+' v36 ';return l(t,0.8);})()+l('M318 '+(G-74)+' l-10 -12 h-8 M322 '+(G-38)+' l4 30 M372 '+(G-38)+' l-2 30',1.4)+C(326,G-6,5,W,1.2)+C(368,G-6,5,W,1.2);
  var k={pose:'sitKnees',x:186,y:G,h:128,kid:true,hair:'short',face:'closed',headphones:true,top:{kind:'tee',fill:'stripes',sleeve:'short'},bottom:{kind:'trousers',fill:'k'},shoes:'white',adj:{tilt:14,armN:[36,140,1,0.6],armF:[40,144,1,0.6],hN:'flat',hF:'flat'}};
  var m={pose:'kneel',x:262,h:186,flip:-1,female:true,hair:'long',face:'calm',top:{kind:'coat',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{armF:[30,50],armN:[24,60],hF:'flat',hN:'flat'}};
  s+=who(k)+who(m);
  return svg(s,'Niño con cascos antirruido sentado en el suelo al final del pasillo del supermercado; su madre, agachada a su lado, espera sin tocarlo');});

scene('b-contarselo','Contárselo a mis padres','Comunicación en familia: hablar de salud mental, pedir ayuda',function(){
  var a={pose:'sitTalk',x:110,h:182,teen:false,female:true,hair:'curlyLong',face:'talk',top:{kind:'sweater',fill:'w'},bottom:{kind:'jeans',fill:'k'},adj:{armF:[50,110],hF:'open',armN:[40,100],hN:'open',lean:10}};
  var sy=seatFor(a,G); a.y=sy;
  var mo={pose:'sitChin',x:286,y:sy,h:176,flip:-1,female:true,hair:'greyBun',face:'worried',glasses:true,top:{kind:'blouse',fill:'dots'},bottom:{kind:'skirt',fill:'k'},shoes:'black'};
  var fa={pose:'sitForward',x:250,y:sy-4,h:188,flip:-1,hair:'grey',face:'focused',beard:'stubble',top:{kind:'shirt',fill:'w'},bottom:{fill:'k'},adj:{lean:12,armF:[60,96],armN:[56,100],hN:'flat',hF:'flat'}};
  var s=floorLine(G)+R(150,30,60,46,1)+R(154,34,52,38,0.5,W,0.8)+l('M160 66 l12 -16 l10 10 l8 -8 l8 14',0.8)+floorLamp(370,G,160);
  s+=chair(104,sy,G,1)+chair(290,sy,G,-1)+who(mo)+who(fa)+who(a);
  s+=p('M148 '+(G-82)+' H260 l6 72 q-62 10 -124 0 Z','url(#symCheck)',1.2)+E(204,G-82,58,5)+mug(186,G-87,0.85)+mug(226,G-87,0.85);
  return svg(s,'Una hija adulta, sentada a la mesa camilla con sus padres, les explica algo con las manos abiertas; la madre escucha preocupada');});

scene('b-hermanito','Llega un hermanito','Crianza: celos entre hermanos, llegada de un bebé',function(){
  var mo={pose:'sitBack',x:110,h:184,female:true,hair:'bun',face:'smile',top:{kind:'shirt',fill:'w',sleeve:'rolled'},bottom:{kind:'jeans',fill:'k'},adj:{lean:-8,armN:[10,60],armF:[20,70],hN:'flat',hF:'flat'}};
  var sy=seatFor(mo,G); mo.y=sy;
  var s=floorLine(G)+rug(120,370,G-2)+sofa(20,200,sy,G,{one:true,cushion:'stripes'})+who(mo);
  s+=l('M262 '+G+' L280 '+(G-60)+' M330 '+G+' L312 '+(G-60)+' M262 '+(G-60)+' L330 '+G+' M330 '+(G-60)+' L262 '+G,1.4);
  s+=p('M256 '+(G-64)+' q40 18 80 0 l-2 -26 q-38 10 -76 0 Z',W)+p('M256 '+(G-90)+' q4 -20 26 -26 q-4 16 -2 30 q-12 0 -24 -4 Z','url(#symGrey)',1.1)+C(296,G-82,5.6,W,1)+l('M293 '+(G-83)+' q1 1 2 0 M297 '+(G-83)+' q1 1 2 0',0.7)+p('M286 '+(G-78)+' q20 -6 40 0',W,1);
  var k={pose:'stand',x:226,h:110,kid:true,female:true,hair:'bob',face:'angry',top:{kind:'dress',fill:'stripes',sleeve:'short'},bottom:{kind:'skirt',fill:'stripes'},shoes:'black',adj:{cross:true,armN:[8,96],armF:[14,92]}};
  s+=who(k);
  return svg(s,'Niña pequeña de pie junto al moisés mira seria a su hermanito recién nacido; su madre, desde el sofá, sonríe');});

scene('b-ia','Desahogarse con la IA','Tecnología y salud mental: soledad, chatbots, buscar apoyo',function(){
  var o={pose:'sitForward',x:150,h:190,hair:'side',face:'focused',beard:'stubble',top:{kind:'hoodie',fill:'k'},bottom:{fill:'w'},shoes:'white',adj:{lean:16,tilt:6,armF:[50,92],armN:[46,96],hN:'flat',hF:'flat'}};
  var sy=seatFor(o,G); o.y=sy;
  var s=floorLine(G)+windowW(26,34,70,82,{night:true});
  s+=chair(140,sy,G,1)+who(o);var L=last();
  s+=table(186,320,G-82,G)+laptop(250,G-82,-1)+mug(296,G-82,0.9);
  s+=l('M'+F(L.head[0]+12)+' '+F(L.head[1]+2)+' L232 '+(G-104)+' M'+F(L.head[0]+12)+' '+F(L.head[1]+10)+' L232 '+(G-92),0.6);
  s+=R(268,40,60,18,8,W,1.1)+p('M278 58 l-4 7 l10 -7',W,1.1)+l('M276 49 h44',0.8)+R(300,68,64,18,8,K,1.1)+l('M308 77 h48',0.8,W)+R(276,96,46,18,8,W,1.1)+l('M284 105 h30',0.8);
  return svg(s,'Hombre sentado de noche ante el portátil escribe en un chat, solo y absorto, iluminado por la pantalla');});

scene('b-dos-casas','Fin de semana alterno','Separación y divorcio: custodia compartida, cambios de casa',function(){
  var s=building(240,20,166,G,{cols:2,rows:2,ww:30,wh:36,door:true})+R(372,150,24,30,1)+l('M376 158 h16 M376 166 h16 M376 174 h16',0.8)+tree(40,G,170)+floorLine(G);
  var mo={pose:'walk',x:136,h:190,female:true,hair:'long',face:'calm',top:{kind:'coat',fill:'w'},bottom:{kind:'jeans',fill:'k'},shoes:'boot',adj:{armF:[18,10],hF:'flat'}};
  s+=who(mo);var Lm=last();
  var k={pose:'walk',x:180,h:126,kid:true,hair:'curlyShort',face:'focused',top:{kind:'hoodie',fill:'k'},bottom:{kind:'trousers',fill:'w'},shoes:'white',adj:{armN:[-36,-14],hN:'flat'}};
  s+=who(k);var Lk=last();
  s+=p('M'+F(Lk.neck[0]-24)+' '+F(Lk.neck[1]+4)+' q-6 0 -6 10 v26 q0 4 4 4 h18 v-40 Z',W)+R(Lk.neck[0]-28,Lk.neck[1]+20,12,10,2,W,1);
  var d={pose:'stand',x:300,h:198,flip:-1,hair:'curlyShort',beard:'full',face:'smile',top:{kind:'sweater',fill:'stripes'},bottom:{kind:'jeans',fill:'k'},adj:{armF:[100,120,1,0.9],armN:[70,130,1,0.8],hF:'open',hN:'open'}};
  s+=who(d);
  return svg(s,'Un niño con mochila camina de la mano de su madre hacia su padre, que lo espera ante el portal con los brazos abiertos');});

N2.forEach(function(it){DIB.list.push(it);});
DIB.list2=N2;
window.FIG={person:person,svg:svg,POSES:POSES};
})();
