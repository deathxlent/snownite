(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lr="160",Fl=0,Qr=1,Bl=2,Na=1,Oa=2,en=3,Sn=0,Ae=1,Oe=2,gn=0,ci=1,to=2,eo=3,no=4,zl=5,Pn=100,Gl=101,Hl=102,io=103,so=104,kl=200,Vl=201,Wl=202,Xl=203,vr=204,xr=205,Yl=206,ql=207,Zl=208,Jl=209,Kl=210,jl=211,$l=212,Ql=213,tc=214,ec=0,nc=1,ic=2,gs=3,sc=4,rc=5,oc=6,ac=7,Fa=0,lc=1,cc=2,_n=0,hc=1,uc=2,dc=3,fc=4,pc=5,mc=6,Ba=300,ui=301,di=302,Mr=303,Sr=304,Ts=306,yr=1e3,ke=1001,Er=1002,we=1003,ro=1004,Fs=1005,Ue=1006,gc=1007,Ri=1008,vn=1009,_c=1010,vc=1011,Dr=1012,za=1013,fn=1014,pn=1015,Ci=1016,Ga=1017,Ha=1018,Dn=1020,xc=1021,Ve=1023,Mc=1024,Sc=1025,In=1026,fi=1027,yc=1028,ka=1029,Ec=1030,Va=1031,Wa=1033,Bs=33776,zs=33777,Gs=33778,Hs=33779,oo=35840,ao=35841,lo=35842,co=35843,Xa=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,vo=37813,xo=37814,Mo=37815,So=37816,yo=37817,Eo=37818,To=37819,wo=37820,Ao=37821,ks=36492,bo=36494,Ro=36495,Tc=36283,Co=36284,Po=36285,Lo=36286,Ya=3e3,Un=3001,wc=3200,Ac=3201,qa=0,bc=1,Fe="",ge="srgb",on="srgb-linear",Ir="display-p3",ws="display-p3-linear",_s="linear",Qt="srgb",vs="rec709",xs="p3",Gn=7680,Do=519,Rc=512,Cc=513,Pc=514,Za=515,Lc=516,Dc=517,Ic=518,Uc=519,Io=35044,Uo="300 es",Tr=1035,nn=2e3,Ms=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let No=1234567;const Ei=Math.PI/180,Pi=180/Math.PI;function Bn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function Ur(s,t){return(s%t+t)%t}function Nc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Oc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ti(s,t,e){return(1-e)*s+e*t}function Fc(s,t,e,n){return Ti(s,t,1-Math.exp(-e*n))}function Bc(s,t=1){return t-Math.abs(Ur(s,t*2)-t)}function zc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Hc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kc(s,t){return s+Math.random()*(t-s)}function Vc(s){return s*(.5-Math.random())}function Wc(s){s!==void 0&&(No=s);let t=No+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xc(s){return s*Ei}function Yc(s){return s*Pi}function wr(s){return(s&s-1)===0&&s!==0}function qc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ss(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oo={DEG2RAD:Ei,RAD2DEG:Pi,generateUUID:Bn,clamp:_e,euclideanModulo:Ur,mapLinear:Nc,inverseLerp:Oc,lerp:Ti,damp:Fc,pingpong:Bc,smoothstep:zc,smootherstep:Gc,randInt:Hc,randFloat:kc,randFloatSpread:Vc,seededRandom:Wc,degToRad:Xc,radToDeg:Yc,isPowerOfTwo:wr,ceilPowerOfTwo:qc,floorPowerOfTwo:Ss,setQuaternionFromProperEuler:Zc,normalize:Ee,denormalize:si};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],x=i[1],v=i[4],M=i[7],P=i[2],A=i[5],b=i[8];return r[0]=a*_+o*x+l*P,r[3]=a*p+o*v+l*A,r[6]=a*f+o*M+l*b,r[1]=c*_+h*x+u*P,r[4]=c*p+h*v+u*A,r[7]=c*f+h*M+u*b,r[2]=d*_+m*x+g*P,r[5]=d*p+m*v+g*A,r[8]=d*f+m*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Vt;function Ja(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jc(){const s=ys("canvas");return s.style.display="block",s}const Fo={};function wi(s){s in Fo||(Fo[s]=!0,console.warn(s))}const Bo=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zo=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[on]:{transfer:_s,primaries:vs,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:Qt,primaries:vs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ws]:{transfer:_s,primaries:xs,toReference:s=>s.applyMatrix3(zo),fromReference:s=>s.applyMatrix3(Bo)},[Ir]:{transfer:Qt,primaries:xs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zo),fromReference:s=>s.applyMatrix3(Bo).convertLinearToSRGB()}},Kc=new Set([on,ws]),Jt={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Kc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=zi[t].toReference,i=zi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return zi[s].primaries},getTransfer:function(s){return s===Fe?_s:zi[s].transfer}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hn;class Ka{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=ys("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jc=0;class ja{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Bn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xs(i[a].image)):r.push(Xs(i[a]))}else r=Xs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class be extends gi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=ke,i=ke,r=Ue,a=Ri,o=Ve,l=vn,c=be.DEFAULT_ANISOTROPY,h=Fe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Bn(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?ge:Fe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ba)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Un:Ya}set encoding(t){wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Un?ge:Fe}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Ba;be.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,P=(f+1)/2,A=(h+d)/4,b=(u+_)/4,F=(g+p)/4;return v>M&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=b/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=F/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=b/r,i=F/r),this.set(n,i,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?ge:Fe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $a extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,f*x);p=Math.sin(p*A)/P,o=Math.sin(o*A)/P}const M=o*x;if(l=l*p+d*M,c=c*p+m*M,h=h*p+g*M,u=u*p+_*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new C,Go=new Ui;class Ni{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xi),Hi.subVectors(this.max,xi),kn.subVectors(t.a,xi),Vn.subVectors(t.b,xi),Wn.subVectors(t.c,xi),ln.subVectors(Vn,kn),cn.subVectors(Wn,Vn),Tn.subVectors(kn,Wn);let e=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Tn.z,Tn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Tn.z,0,-Tn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Tn.y,Tn.x,0];return!qs(e,kn,Vn,Wn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,kn,Vn,Wn,Hi))?!1:(ki.crossVectors(ln,cn),e=[ki.x,ki.y,ki.z],qs(e,kn,Vn,Wn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new C,new C,new C,new C,new C,new C,new C,new C],Be=new C,Gi=new Ni,kn=new C,Vn=new C,Wn=new C,ln=new C,cn=new C,Tn=new C,xi=new C,Hi=new C,ki=new C,wn=new C;function qs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wn.fromArray(s,r);const o=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),l=t.dot(wn),c=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const eh=new Ni,Mi=new C,Zs=new C;class Oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):eh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Zs)),this.expandByPoint(Mi.copy(t.center).sub(Zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new C,Js=new C,Vi=new C,hn=new C,Ks=new C,Wi=new C,js=new C;class Nr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Js.copy(t).add(e).multiplyScalar(.5),Vi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Js);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Vi),o=hn.dot(this.direction),l=-hn.dot(Vi),c=hn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Js).addScaledVector(Vi,d),m}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),i=je.dot(je)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,i,r){Ks.subVectors(e,t),Wi.subVectors(n,t),js.crossVectors(Ks,Wi);let a=this.direction.dot(js),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const l=o*this.direction.dot(Wi.crossVectors(hn,Wi));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(hn));if(c<0||l+c>a)return null;const h=-o*hn.dot(js);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,p)}set(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xn.setFromMatrixColumn(t,0).length(),r=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nh,t,ih)}lookAt(t,e,n){const i=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),un.crossVectors(n,Ce),un.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),un.crossVectors(n,Ce)),un.normalize(),Xi.crossVectors(Ce,un),i[0]=un.x,i[4]=Xi.x,i[8]=Ce.x,i[1]=un.y,i[5]=Xi.y,i[9]=Ce.y,i[2]=un.z,i[6]=Xi.z,i[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],x=n[3],v=n[7],M=n[11],P=n[15],A=i[0],b=i[4],F=i[8],y=i[12],w=i[1],N=i[5],k=i[9],nt=i[13],D=i[2],O=i[6],H=i[10],Z=i[14],Y=i[3],q=i[7],J=i[11],it=i[15];return r[0]=a*A+o*w+l*D+c*Y,r[4]=a*b+o*N+l*O+c*q,r[8]=a*F+o*k+l*H+c*J,r[12]=a*y+o*nt+l*Z+c*it,r[1]=h*A+u*w+d*D+m*Y,r[5]=h*b+u*N+d*O+m*q,r[9]=h*F+u*k+d*H+m*J,r[13]=h*y+u*nt+d*Z+m*it,r[2]=g*A+_*w+p*D+f*Y,r[6]=g*b+_*N+p*O+f*q,r[10]=g*F+_*k+p*H+f*J,r[14]=g*y+_*nt+p*Z+f*it,r[3]=x*A+v*w+M*D+P*Y,r[7]=x*b+v*N+M*O+P*q,r[11]=x*F+v*k+M*H+P*J,r[15]=x*y+v*nt+M*Z+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*m-n*l*m)+_*(+e*l*m-e*c*d+r*a*d-i*a*m+i*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],x=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,v=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,M=h*_*c-g*u*c+g*o*m-a*_*m-h*o*f+a*u*f,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*p-a*u*p,A=e*x+n*v+i*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=x*b,t[1]=(_*d*r-u*p*r-_*i*m+n*p*m+u*i*f-n*d*f)*b,t[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*f+n*l*f)*b,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*m-n*l*m)*b,t[4]=v*b,t[5]=(h*p*r-g*d*r+g*i*m-e*p*m-h*i*f+e*d*f)*b,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*f-e*l*f)*b,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*m+e*l*m)*b,t[8]=M*b,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*b,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*b,t[12]=P*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,_=a*h,p=a*u,f=o*u,x=l*c,v=l*h,M=l*u,P=n.x,A=n.y,b=n.z;return i[0]=(1-(_+f))*P,i[1]=(m+M)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(d+f))*A,i[6]=(p+x)*A,i[7]=0,i[8]=(g+v)*b,i[9]=(p-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Xn.set(i[0],i[1],i[2]).length();const a=Xn.set(i[4],i[5],i[6]).length(),o=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const c=1/r,h=1/a,u=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=nn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===nn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ms)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=nn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,m=(n+i)*h;let g,_;if(o===nn)g=(a+r)*u,_=-2*u;else if(o===Ms)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new C,ze=new se,nh=new C(0,0,0),ih=new C(1,1,1),un=new C,Xi=new C,Ce=new C,Ho=new se,ko=new Ui;class As{constructor(t=0,e=0,n=0,i=As.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Qa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sh=0;const Vo=new C,Yn=new Ui,$e=new se,Yi=new C,Si=new C,rh=new C,oh=new Ui,Wo=new C(1,0,0),Xo=new C(0,1,0),Yo=new C(0,0,1),ah={type:"added"},lh={type:"removed"};class me extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new C,e=new As,n=new Ui,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Vt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Vo.copy(t).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(Si,Yi,this.up):$e.lookAt(Yi,Si,this.up),this.quaternion.setFromRotationMatrix($e),i&&($e.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix($e),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new C(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new C,Qe=new C,$s=new C,tn=new C,qn=new C,Zn=new C,qo=new C,Qs=new C,tr=new C,er=new C;let qi=!1;class He{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ge.subVectors(t,e),i.cross(Ge);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ge.subVectors(i,e),Qe.subVectors(n,e),$s.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(Qe),l=Ge.dot($s),c=Qe.dot(Qe),h=Qe.dot($s),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(t,e,n,i,r,a,o,l){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static isFrontFacing(t,e,n,i){return Ge.subVectors(n,e),Qe.subVectors(t,e),Ge.cross(Qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),Ge.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;qn.subVectors(i,n),Zn.subVectors(r,n),Qs.subVectors(t,n);const l=qn.dot(Qs),c=Zn.dot(Qs);if(l<=0&&c<=0)return e.copy(n);tr.subVectors(t,i);const h=qn.dot(tr),u=Zn.dot(tr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(qn,a);er.subVectors(t,r);const m=qn.dot(er),g=Zn.dot(er);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zn,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return qo.subVectors(r,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(qo,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(qn,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Ur(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nr(a,r,t+1/3),this.g=nr(a,r,t),this.b=nr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Jt.fromWorkingColorSpace(Me.copy(this),t),Math.round(_e(Me.r*255,0,255))*65536+Math.round(_e(Me.g*255,0,255))*256+Math.round(_e(Me.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ge){Jt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(Zi);const n=Ti(dn.h,Zi.h,e),i=Ti(dn.s,Zi.s,e),r=Ti(dn.l,Zi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Xt;Xt.NAMES=tl;let ch=0;class zn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=xr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vr&&(n.blendSrc=this.blendSrc),this.blendDst!==xr&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ri extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new C,Ji=new rt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}}class el extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nl extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hh=0;const De=new se,ir=new me,Jn=new C,Pe=new Ni,yi=new Ni,fe=new C;class le extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ja(t)?nl:el)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Pe.min,yi.min),Pe.expandByPoint(fe),fe.addVectors(Pe.max,yi.max),Pe.expandByPoint(fe)):(Pe.expandByPoint(yi.min),Pe.expandByPoint(yi.max))}Pe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(t,c),fe.add(Jn)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new C,h[w]=new C;const u=new C,d=new C,m=new C,g=new rt,_=new rt,p=new rt,f=new C,x=new C;function v(w,N,k){u.fromArray(i,w*3),d.fromArray(i,N*3),m.fromArray(i,k*3),g.fromArray(a,w*2),_.fromArray(a,N*2),p.fromArray(a,k*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const nt=1/(_.x*p.y-p.x*_.y);isFinite(nt)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(nt),x.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(nt),c[w].add(f),c[N].add(f),c[k].add(f),h[w].add(x),h[N].add(x),h[k].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,N=M.length;w<N;++w){const k=M[w],nt=k.start,D=k.count;for(let O=nt,H=nt+D;O<H;O+=3)v(n[O+0],n[O+1],n[O+2])}const P=new C,A=new C,b=new C,F=new C;function y(w){b.fromArray(r,w*3),F.copy(b);const N=c[w];P.copy(N),P.sub(b.multiplyScalar(b.dot(N))).normalize(),A.crossVectors(F,N);const nt=A.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=nt}for(let w=0,N=M.length;w<N;++w){const k=M[w],nt=k.start,D=k.count;for(let O=nt,H=nt+D;O<H;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new se,An=new Nr,Ki=new Oi,Jo=new C,Kn=new C,jn=new C,$n=new C,sr=new C,ji=new C,$i=new rt,Qi=new rt,ts=new rt,Ko=new C,jo=new C,$o=new C,es=new C,ns=new C;class Ft extends me{constructor(t=new le,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(sr.fromBufferAttribute(u,t),a?ji.addScaledVector(sr,h):ji.addScaledVector(sr.sub(e),h))}e.add(ji)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),An.copy(t.ray).recast(t.near),!(Ki.containsPoint(An.origin)===!1&&(An.intersectSphere(Ki,Jo)===null||An.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Zo.copy(r).invert(),An.copy(t.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,P=v;M<P;M+=3){const A=o.getX(M),b=o.getX(M+1),F=o.getX(M+2);i=is(this,f,t,n,c,h,u,A,b,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);i=is(this,a,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,P=v;M<P;M+=3){const A=M,b=M+1,F=M+2;i=is(this,f,t,n,c,h,u,A,b,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=p,v=p+1,M=p+2;i=is(this,a,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function uh(s,t,e,n,i,r,a,o){let l;if(t.side===Ae?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Sn,o),l===null)return null;ns.copy(o),ns.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ns);return c<e.near||c>e.far?null:{distance:c,point:ns.clone(),object:s}}function is(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Kn),s.getVertexPosition(l,jn),s.getVertexPosition(c,$n);const h=uh(s,t,e,n,Kn,jn,$n,es);if(h){i&&($i.fromBufferAttribute(i,o),Qi.fromBufferAttribute(i,l),ts.fromBufferAttribute(i,c),h.uv=He.getInterpolation(es,Kn,jn,$n,$i,Qi,ts,new rt)),r&&($i.fromBufferAttribute(r,o),Qi.fromBufferAttribute(r,l),ts.fromBufferAttribute(r,c),h.uv1=He.getInterpolation(es,Kn,jn,$n,$i,Qi,ts,new rt),h.uv2=h.uv1),a&&(Ko.fromBufferAttribute(a,o),jo.fromBufferAttribute(a,l),$o.fromBufferAttribute(a,c),h.normal=He.getInterpolation(es,Kn,jn,$n,Ko,jo,$o,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};He.getNormal(Kn,jn,$n,u.normal),h.face=u}return h}class an extends le{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(_,p,f,x,v,M,P,A,b,F,y){const w=M/b,N=P/F,k=M/2,nt=P/2,D=A/2,O=b+1,H=F+1;let Z=0,Y=0;const q=new C;for(let J=0;J<H;J++){const it=J*N-nt;for(let ot=0;ot<O;ot++){const V=ot*w-k;q[_]=V*x,q[p]=it*v,q[f]=D,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[f]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(ot/b),u.push(1-J/F),Z+=1}}for(let J=0;J<F;J++)for(let it=0;it<b;it++){const ot=d+it+O*J,V=d+it+O*(J+1),$=d+(it+1)+O*(J+1),ft=d+(it+1)+O*J;l.push(ot,V,ft),l.push(V,$,ft),Y+=6}o.addGroup(m,Y,y),m+=Y,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=pi(s[e]);for(const i in n)t[i]=n[i]}return t}function dh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function il(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const fh={clone:pi,merge:Te};var ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ph,this.fragmentShader=mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ei*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(Ei*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ei*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class gh extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(Qn,ti,t,e);i.layers=this.layers,this.add(i);const r=new Ne(Qn,ti,t,e);r.layers=this.layers,this.add(r);const a=new Ne(Qn,ti,t,e);a.layers=this.layers,this.add(a);const o=new Ne(Qn,ti,t,e);o.layers=this.layers,this.add(o);const l=new Ne(Qn,ti,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Qn,ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rl extends be{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _h extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Un?ge:Fe),this.texture=new rl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:gn});r.uniforms.tEquirect.value=e;const a=new Ft(i,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ue),new gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const rr=new C,vh=new C,xh=new Vt;class Rn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rr.subVectors(n,e).cross(vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xh.getNormalMatrix(t),i=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Oi,ss=new C;class Or{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,p-m,M-f).normalize(),n[1].setComponents(l+r,d+c,p+m,M+f).normalize(),n[2].setComponents(l+a,d+h,p+g,M+x).normalize(),n[3].setComponents(l-a,d-h,p-g,M-x).normalize(),n[4].setComponents(l-o,d-u,p-_,M-v).normalize(),e===nn)n[5].setComponents(l+o,d+u,p+_,M+v).normalize();else if(e===Ms)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(t){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Mh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class mi extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const x=f*d-a;for(let v=0;v<c;v++){const M=v*u-r;g.push(M,-x,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,M=x+c*(f+1),P=x+1+c*(f+1),A=x+1+c*f;m.push(v,M,A),m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ch=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Sh,alphahash_pars_fragment:yh,alphamap_fragment:Eh,alphamap_pars_fragment:Th,alphatest_fragment:wh,alphatest_pars_fragment:Ah,aomap_fragment:bh,aomap_pars_fragment:Rh,batching_pars_vertex:Ch,batching_vertex:Ph,begin_vertex:Lh,beginnormal_vertex:Dh,bsdfs:Ih,iridescence_fragment:Uh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Fh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:zh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:kh,color_vertex:Vh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:qh,displacementmap_vertex:Zh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Kh,colorspace_fragment:jh,colorspace_pars_fragment:$h,envmap_fragment:Qh,envmap_common_pars_fragment:tu,envmap_pars_fragment:eu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:pu,envmap_vertex:iu,fog_vertex:su,fog_pars_vertex:ru,fog_fragment:ou,fog_pars_fragment:au,gradientmap_pars_fragment:lu,lightmap_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:yu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:bu,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Iu,morphcolor_vertex:Uu,morphnormal_vertex:Nu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Fu,normal_fragment_begin:Bu,normal_fragment_maps:zu,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:ku,normalmap_pars_fragment:Vu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:qu,opaque_fragment:Zu,packing:Ju,premultiplied_alpha_fragment:Ku,project_vertex:ju,dithering_fragment:$u,dithering_pars_fragment:Qu,roughnessmap_fragment:td,roughnessmap_pars_fragment:ed,shadowmap_pars_fragment:nd,shadowmap_pars_vertex:id,shadowmap_vertex:sd,shadowmask_pars_fragment:rd,skinbase_vertex:od,skinning_pars_vertex:ad,skinning_vertex:ld,skinnormal_vertex:cd,specularmap_fragment:hd,specularmap_pars_fragment:ud,tonemapping_fragment:dd,tonemapping_pars_fragment:fd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:gd,uv_pars_vertex:_d,uv_vertex:vd,worldpos_vertex:xd,background_vert:Md,background_frag:Sd,backgroundCube_vert:yd,backgroundCube_frag:Ed,cube_vert:Td,cube_frag:wd,depth_vert:Ad,depth_frag:bd,distanceRGBA_vert:Rd,distanceRGBA_frag:Cd,equirect_vert:Pd,equirect_frag:Ld,linedashed_vert:Dd,linedashed_frag:Id,meshbasic_vert:Ud,meshbasic_frag:Nd,meshlambert_vert:Od,meshlambert_frag:Fd,meshmatcap_vert:Bd,meshmatcap_frag:zd,meshnormal_vert:Gd,meshnormal_frag:Hd,meshphong_vert:kd,meshphong_frag:Vd,meshphysical_vert:Wd,meshphysical_frag:Xd,meshtoon_vert:Yd,meshtoon_frag:qd,points_vert:Zd,points_frag:Jd,shadow_vert:Kd,shadow_frag:jd,sprite_vert:$d,sprite_frag:Qd},ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},qe={basic:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Te([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Te([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Te([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Te([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Te([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Te([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Te([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Te([ct.lights,ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};qe.physical={uniforms:Te([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const rs={r:0,b:0,g:0};function tf(s,t,e,n,i,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ts)?(h===void 0&&(h=new Ft(new an(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:pi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==Qt,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new mi(2,2),new On({name:"BackgroundMaterial",uniforms:pi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(rs,il(s)),n.buffers.color.setClear(rs.r,rs.g,rs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function ef(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function u(D,O,H,Z,Y){let q=!1;if(a){const J=_(Z,H,O);c!==J&&(c=J,m(c.object)),q=f(D,Z,H,Y),q&&x(D,Z,H,Y)}else{const J=O.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=J,q=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,F(D,O,H,Z),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,O,H){const Z=H.wireframe===!0;let Y=o[D.id];Y===void 0&&(Y={},o[D.id]=Y);let q=Y[O.id];q===void 0&&(q={},Y[O.id]=q);let J=q[Z];return J===void 0&&(J=p(d()),q[Z]=J),J}function p(D){const O=[],H=[],Z=[];for(let Y=0;Y<i;Y++)O[Y]=0,H[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:Z,object:D,attributes:{},index:null}}function f(D,O,H,Z){const Y=c.attributes,q=O.attributes;let J=0;const it=H.getAttributes();for(const ot in it)if(it[ot].location>=0){const $=Y[ot];let ft=q[ot];if(ft===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function x(D,O,H,Z){const Y={},q=O.attributes;let J=0;const it=H.getAttributes();for(const ot in it)if(it[ot].location>=0){let $=q[ot];$===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),Y[ot]=ft,J++}c.attributes=Y,c.attributesNum=J,c.index=Z}function v(){const D=c.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function M(D){P(D,0)}function P(D,O){const H=c.newAttributes,Z=c.enabledAttributes,Y=c.attributeDivisors;H[D]=1,Z[D]===0&&(s.enableVertexAttribArray(D),Z[D]=1),Y[D]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),Y[D]=O)}function A(){const D=c.newAttributes,O=c.enabledAttributes;for(let H=0,Z=O.length;H<Z;H++)O[H]!==D[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function b(D,O,H,Z,Y,q,J){J===!0?s.vertexAttribIPointer(D,O,H,Y,q):s.vertexAttribPointer(D,O,H,Z,Y,q)}function F(D,O,H,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=Z.attributes,q=H.getAttributes(),J=O.defaultAttributeValues;for(const it in q){const ot=q[it];if(ot.location>=0){let V=Y[it];if(V===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const $=V.normalized,ft=V.itemSize,Mt=e.get(V);if(Mt===void 0)continue;const gt=Mt.buffer,Rt=Mt.type,It=Mt.bytesPerElement,St=n.isWebGL2===!0&&(Rt===s.INT||Rt===s.UNSIGNED_INT||V.gpuType===za);if(V.isInterleavedBufferAttribute){const Lt=V.data,R=Lt.stride,at=V.offset;if(Lt.isInstancedInterleavedBuffer){for(let X=0;X<ot.locationSize;X++)P(ot.location+X,Lt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let X=0;X<ot.locationSize;X++)M(ot.location+X);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let X=0;X<ot.locationSize;X++)b(ot.location+X,ft/ot.locationSize,Rt,$,R*It,(at+ft/ot.locationSize*X)*It,St)}else{if(V.isInstancedBufferAttribute){for(let Lt=0;Lt<ot.locationSize;Lt++)P(ot.location+Lt,V.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Lt=0;Lt<ot.locationSize;Lt++)M(ot.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Lt=0;Lt<ot.locationSize;Lt++)b(ot.location+Lt,ft/ot.locationSize,Rt,$,ft*It,ft/ot.locationSize*Lt*It,St)}}else if(J!==void 0){const $=J[it];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ot.location,$);break;case 3:s.vertexAttrib3fv(ot.location,$);break;case 4:s.vertexAttrib4fv(ot.location,$);break;default:s.vertexAttrib1fv(ot.location,$)}}}}A()}function y(){k();for(const D in o){const O=o[D];for(const H in O){const Z=O[H];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete O[H]}delete o[D]}}function w(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const H in O){const Z=O[H];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete O[H]}delete o[D.id]}function N(D){for(const O in o){const H=o[O];if(H[D.id]===void 0)continue;const Z=H[D.id];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete H[D.id]}}function k(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function nf(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function sf(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),P=v&&M,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:A}}function rf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Rn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,v=x*4;let M=f.clippingState||null;l.value=M,M=h(g,d,v,m);for(let P=0;P!==v;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==_;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function of(s){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=ui:o===Sr&&(a.mapping=di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _h(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class al extends sl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,Qo=[.125,.215,.35,.446,.526,.582],Ln=20,or=new al,ta=new Xt;let ar=null,lr=0,cr=0;const Cn=(1+Math.sqrt(5))/2,ei=1/Cn,ea=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Cn,ei),new C(0,Cn,-ei),new C(ei,0,Cn),new C(-ei,0,Cn),new C(Cn,ei,0),new C(-Cn,ei,0)];class na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,lr,cr),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Ci,format:Ve,colorSpace:on,depthBuffer:!1},i=ia(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ia(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(r)),this._blurMaterial=lf(r,t,e)}return i}_compileMaterial(t){const e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,n,i){const o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ta),h.toneMapping=_n,h.autoClear=!1;const m=new ri({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new Ft(new an,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ta),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;os(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ui||t.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sa());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ea[(i-1)%ea.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const f=[];let x=0;for(let b=0;b<Ln;++b){const F=b/_,y=Math.exp(-F*F/2);f.push(y),b===0?x+=y:b<p&&(x+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],P=3*M*(i>v-oi?i-v+oi:0),A=4*(this._cubeSize-M);os(e,P,A,3*M,2*M),l.setRenderTarget(e),l.render(u,or)}}function af(s){const t=[],e=[],n=[];let i=s;const r=s-oi+1+Qo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-oi?l=Qo[a-s+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,F=A>2?0:-1,y=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];x.set(y,_*g*A),v.set(d,p*g*A);const w=[A,A,A,A,A,A];M.set(w,f*g*A)}const P=new le;P.setAttribute("position",new We(x,_)),P.setAttribute("uv",new We(v,p)),P.setAttribute("faceIndex",new We(M,f)),t.push(P),i>oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ia(s,t,e){const n=new Nn(s,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function lf(s,t,e){const n=new Float32Array(Ln),i=new C(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function sa(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ra(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mr||l===Sr,h=l===ui||l===di;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new na(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new na(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uf(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const P=x[v+0],A=x[v+1],b=x[v+2];d.push(P,A,A,b,b,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const P=v+0,A=v+1,b=v+2;d.push(P,A,A,b,b,P)}}else return;const p=new(Ja(d)?nl:el)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function df(s,t,e,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ff(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pf(s,t){return s[0]-t[0]}function mf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function gf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let O=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),P===!0&&(y=3);let w=h.attributes.position.count*y,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const k=new Float32Array(w*N*4*_),nt=new $a(k,w,N,_);nt.type=pn,nt.needsUpdate=!0;const D=y*4;for(let H=0;H<_;H++){const Z=A[H],Y=b[H],q=F[H],J=w*N*4*H;for(let it=0;it<Z.count;it++){const ot=it*D;v===!0&&(a.fromBufferAttribute(Z,it),k[J+ot+0]=a.x,k[J+ot+1]=a.y,k[J+ot+2]=a.z,k[J+ot+3]=0),M===!0&&(a.fromBufferAttribute(Y,it),k[J+ot+4]=a.x,k[J+ot+5]=a.y,k[J+ot+6]=a.z,k[J+ot+7]=0),P===!0&&(a.fromBufferAttribute(q,it),k[J+ot+8]=a.x,k[J+ot+9]=a.y,k[J+ot+10]=a.z,k[J+ot+11]=q.itemSize===4?a.w:1)}}p={count:_,texture:nt,size:new rt(w,N)},r.set(h,p),h.addEventListener("dispose",O)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const P=_[M];P[0]=M,P[1]=d[M]}_.sort(mf);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(pf);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const P=o[M],A=P[0],b=P[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+M)!==p[A]&&h.setAttribute("morphTarget"+M,p[A]),f&&h.getAttribute("morphNormal"+M)!==f[A]&&h.setAttribute("morphNormal"+M,f[A]),i[M]=b,x+=b):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function _f(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ll extends be{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:In,h!==In&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=fn),n===void 0&&h===fi&&(n=Dn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cl=new be,hl=new ll(1,1);hl.compareFunction=Za;const ul=new $a,dl=new th,fl=new rl,oa=[],aa=[],la=new Float32Array(16),ca=new Float32Array(9),ha=new Float32Array(4);function _i(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=oa[i];if(r===void 0&&(r=new Float32Array(i),oa[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function he(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bs(s,t){let e=aa[t];e===void 0&&(e=new Int32Array(t),aa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2fv(this.addr,t),he(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;s.uniform3fv(this.addr,t),he(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4fv(this.addr,t),he(e,t)}}function yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ha.set(n),s.uniformMatrix2fv(this.addr,!1,ha),he(e,n)}}function Ef(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),he(e,n)}}function Tf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;la.set(n),s.uniformMatrix4fv(this.addr,!1,la),he(e,n)}}function wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2iv(this.addr,t),he(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3iv(this.addr,t),he(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4iv(this.addr,t),he(e,t)}}function Cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2uiv(this.addr,t),he(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3uiv(this.addr,t),he(e,t)}}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4uiv(this.addr,t),he(e,t)}}function If(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?hl:cl;e.setTexture2D(t||r,i)}function Uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dl,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fl,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ul,i)}function Ff(s){switch(s){case 5126:return vf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return yf;case 35675:return Ef;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return bf;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return Lf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Of}}function Bf(s,t){s.uniform1fv(this.addr,t)}function zf(s,t){const e=_i(t,this.size,2);s.uniform2fv(this.addr,e)}function Gf(s,t){const e=_i(t,this.size,3);s.uniform3fv(this.addr,e)}function Hf(s,t){const e=_i(t,this.size,4);s.uniform4fv(this.addr,e)}function kf(s,t){const e=_i(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vf(s,t){const e=_i(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wf(s,t){const e=_i(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xf(s,t){s.uniform1iv(this.addr,t)}function Yf(s,t){s.uniform2iv(this.addr,t)}function qf(s,t){s.uniform3iv(this.addr,t)}function Zf(s,t){s.uniform4iv(this.addr,t)}function Jf(s,t){s.uniform1uiv(this.addr,t)}function Kf(s,t){s.uniform2uiv(this.addr,t)}function jf(s,t){s.uniform3uiv(this.addr,t)}function $f(s,t){s.uniform4uiv(this.addr,t)}function Qf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||cl,r[a])}function tp(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dl,r[a])}function ep(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fl,r[a])}function np(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ul,r[a])}function ip(s){switch(s){case 5126:return Bf;case 35664:return zf;case 35665:return Gf;case 35666:return Hf;case 35674:return kf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return Yf;case 35668:case 35672:return qf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Kf;case 36295:return jf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ff(e.type)}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function ua(s,t){s.seq.push(t),s.map[t.id]=t}function ap(s,t,e){const n=s.name,i=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),a=hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ua(e,c===void 0?new sp(o,s,t):new rp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new op(o),ua(e,u)),e=u}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);ap(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lp=37297;let cp=0;function hp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function up(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===xs&&e===vs?n="LinearDisplayP3ToLinearSRGB":t===vs&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),s){case on:case ws:return[n,"LinearTransferOETF"];case ge:case Ir:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+hp(s.getShaderSource(t),a)}else return i}function dp(s,t){const e=up(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fp(s,t){let e;switch(t){case hc:e="Linear";break;case uc:e="Reinhard";break;case dc:e="OptimizedCineon";break;case fc:e="ACESFilmic";break;case mc:e="AgX";break;case pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ai).join(`
`)}function gp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _p(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ai(s){return s!==""}function pa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ma(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(s){return s.replace(vp,Mp)}const xp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mp(s,t){let e=zt[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ar(e)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ga(s){return s.replace(Sp,yp)}function yp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _a(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ep(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Na?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oa?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Tp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function Ap(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fa:t="ENVMAP_BLENDING_MULTIPLY";break;case lc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function bp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ep(e),c=Tp(e),h=wp(e),u=Ap(e),d=bp(e),m=e.isWebGL2?"":pp(e),g=mp(e),_=gp(r),p=i.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ai).join(`
`),f.length>0&&(f+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ai).join(`
`),x.length>0&&(x+=`
`)):(f=[_a(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),x=[m,_a(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?zt.tonemapping_pars_fragment:"",e.toneMapping!==_n?fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,dp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ai).join(`
`)),a=Ar(a),a=pa(a,e),a=ma(a,e),o=Ar(o),o=pa(o,e),o=ma(o,e),a=ga(a),o=ga(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+f+a,P=v+x+o,A=da(i,i.VERTEX_SHADER,M),b=da(i,i.FRAGMENT_SHADER,P);i.attachShader(p,A),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function F(k){if(s.debug.checkShaderErrors){const nt=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(b).trim();let H=!0,Z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,b);else{const Y=fa(i,A,"vertex"),q=fa(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+Y+`
`+q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(D===""||O==="")&&(Z=!1);Z&&(k.diagnostics={runnable:H,programLog:nt,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:x}})}i.deleteShader(A),i.deleteShader(b),y=new ps(i,p),w=_p(i,p)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,lp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Cp++,this.code=t,this.usedTimes=0}}function Dp(s,t,e,n,i,r,a){const o=new Qa,l=new Pp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,w,N,k,nt){const D=k.fog,O=nt.geometry,H=y.isMeshStandardMaterial?k.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),Y=Z&&Z.mapping===Ts?Z.image.height:null,q=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=J!==void 0?J.length:0;let ot=0;O.morphAttributes.position!==void 0&&(ot=1),O.morphAttributes.normal!==void 0&&(ot=2),O.morphAttributes.color!==void 0&&(ot=3);let V,$,ft,Mt;if(q){const Se=qe[q];V=Se.vertexShader,$=Se.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),Mt=l.getFragmentShaderID(y);const gt=s.getRenderTarget(),Rt=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,St=!!y.map,Lt=!!y.matcap,R=!!Z,at=!!y.aoMap,X=!!y.lightMap,st=!!y.bumpMap,W=!!y.normalMap,Et=!!y.displacementMap,pt=!!y.emissiveMap,E=!!y.metalnessMap,S=!!y.roughnessMap,U=y.anisotropy>0,et=y.clearcoat>0,Q=y.iridescence>0,K=y.sheen>0,xt=y.transmission>0,ht=U&&!!y.anisotropyMap,_t=et&&!!y.clearcoatMap,wt=et&&!!y.clearcoatNormalMap,Nt=et&&!!y.clearcoatRoughnessMap,tt=Q&&!!y.iridescenceMap,Yt=Q&&!!y.iridescenceThicknessMap,Wt=K&&!!y.sheenColorMap,Dt=K&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,vt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,Zt=xt&&!!y.transmissionMap,ne=xt&&!!y.thicknessMap,Ht=!!y.gradientMap,lt=!!y.alphaMap,L=y.alphaTest>0,ut=!!y.alphaHash,dt=!!y.extensions,Ct=!!O.attributes.uv1,At=!!O.attributes.uv2,Kt=!!O.attributes.uv3;let jt=_n;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:It,instancing:Rt,instancingColor:Rt&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:on,map:St,matcap:Lt,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:X,bumpMap:st,normalMap:W,displacementMap:d&&Et,emissiveMap:pt,normalMapObjectSpace:W&&y.normalMapType===bc,normalMapTangentSpace:W&&y.normalMapType===qa,metalnessMap:E,roughnessMap:S,anisotropy:U,anisotropyMap:ht,clearcoat:et,clearcoatMap:_t,clearcoatNormalMap:wt,clearcoatRoughnessMap:Nt,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:Yt,sheen:K,sheenColorMap:Wt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:vt,specularIntensityMap:Bt,transmission:xt,transmissionMap:Zt,thicknessMap:ne,gradientMap:Ht,opaque:y.transparent===!1&&y.blending===ci,alphaMap:lt,alphaTest:L,alphaHash:ut,combine:y.combine,mapUv:St&&_(y.map.channel),aoMapUv:at&&_(y.aoMap.channel),lightMapUv:X&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:W&&_(y.normalMap.channel),displacementMapUv:Et&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Tt&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:Bt&&_(y.specularIntensityMap.channel),transmissionMapUv:Zt&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:lt&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(W||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:At,vertexUv3s:Kt,pointsUvs:nt.isPoints===!0&&!!O.attributes.uv&&(St||lt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===Ae,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:dt&&y.extensions.derivatives===!0,extensionFragDepth:dt&&y.extensions.fragDepth===!0,extensionDrawBuffers:dt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(w,y),v(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const w=g[y.type];let N;if(w){const k=qe[w];N=fh.clone(k.uniforms)}else N=y.uniforms;return N}function P(y,w){let N;for(let k=0,nt=c.length;k<nt;k++){const D=c[k];if(D.cacheKey===w){N=D,++N.usedTimes;break}}return N===void 0&&(N=new Rp(s,w,y,r),c.push(N)),N}function A(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:F}}function Ip(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Up(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function va(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,g,_,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Up),n.length>1&&n.sort(d||va),i.length>1&&i.sort(d||va)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Np(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xa,s.set(n,[a])):i>=r.length?(a=new xa,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Op(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Xt};break;case"SpotLight":e={position:new C,direction:new C,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bp=0;function zp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gp(s,t){const e=new Op,n=Fp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,a=new se,o=new se;function l(h,u){let d=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,f=0,x=0,v=0,M=0,P=0,A=0,b=0,F=0,y=0;h.sort(zp);const w=u===!0?Math.PI:1;for(let k=0,nt=h.length;k<nt;k++){const D=h[k],O=D.color,H=D.intensity,Z=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*H*w,m+=O.g*H*w,g+=O.b*H*w;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],H);y++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const J=D.shadow,it=n.get(D);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=D.shadow.matrix,M++}i.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(O).multiplyScalar(H*w),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[f]=q;const J=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&F++),i.spotLightMatrix[f]=J.matrix,D.castShadow){const it=n.get(D);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,i.spotShadow[f]=it,i.spotShadowMap[f]=Y,A++}f++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(O).multiplyScalar(H),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=q,x++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*w),q.distance=D.distance,q.decay=D.decay,D.castShadow){const J=D.shadow,it=n.get(D);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=D.shadow.matrix,P++}i.point[p]=q,p++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(H*w),q.groundColor.copy(D.groundColor).multiplyScalar(H*w),i.hemi[v]=q,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==f||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==P||N.numSpotShadows!==A||N.numSpotMaps!==b||N.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=y,N.directionalLength=_,N.pointLength=p,N.spotLength=f,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=P,N.numSpotShadows=A,N.numSpotMaps=b,N.numLightProbes=y,i.version=Bp++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(M.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Ma(s,t){const e=new Gp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Hp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Ma(s,t),e.set(r,[l])):a>=o.length?(l=new Ma(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class kp extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vp extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yp(s,t,e){let n=new Or;const i=new rt,r=new rt,a=new pe,o=new kp({depthPacking:Ac}),l=new Vp,c={},h=e.maxTextureSize,u={[Sn]:Ae,[Ae]:Sn,[Oe]:Oe},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let f=this.type;this.render=function(A,b,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),k=s.state;k.setBlending(gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const nt=f!==en&&this.type===en,D=f===en&&this.type!==en;for(let O=0,H=A.length;O<H;O++){const Z=A[O],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const q=Y.getFrameExtents();if(i.multiply(q),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||nt===!0||D===!0){const it=this.type!==en?{minFilter:we,magFilter:we}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nn(i.x,i.y,it),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const J=Y.getViewportCount();for(let it=0;it<J;it++){const ot=Y.getViewport(it);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),k.viewport(a),Y.updateMatrices(Z,it),n=Y.getFrustum(),M(b,F,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===en&&x(Y,F),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(y,w,N)};function x(A,b){const F=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,F,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,F,m,_,null)}function v(A,b,F,y){let w=null;const N=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)w=N;else if(w=F.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=w.uuid,nt=b.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let O=D[nt];O===void 0&&(O=w.clone(),D[nt]=O,b.addEventListener("dispose",P)),w=O}if(w.visible=b.visible,w.wireframe=b.wireframe,y===en?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=s.properties.get(w);k.light=F}return w}function M(A,b,F,y,w){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===en)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),D=A.material;if(Array.isArray(D)){const O=nt.groups;for(let H=0,Z=O.length;H<Z;H++){const Y=O[H],q=D[Y.materialIndex];if(q&&q.visible){const J=v(A,q,y,w);A.onBeforeShadow(s,A,b,F,nt,J,Y),s.renderBufferDirect(F,null,nt,J,A,Y),A.onAfterShadow(s,A,b,F,nt,J,Y)}}}else if(D.visible){const O=v(A,D,y,w);A.onBeforeShadow(s,A,b,F,nt,O,null),s.renderBufferDirect(F,null,nt,O,A,null),A.onAfterShadow(s,A,b,F,nt,O,null)}}const k=A.children;for(let nt=0,D=k.length;nt<D;nt++)M(k[nt],b,F,y,w)}function P(A){A.target.removeEventListener("dispose",P);for(const F in c){const y=c[F],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function qp(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const ut=new pe;let dt=null;const Ct=new pe(0,0,0,0);return{setMask:function(At){dt!==At&&!L&&(s.colorMask(At,At,At,At),dt=At)},setLocked:function(At){L=At},setClear:function(At,Kt,jt,ue,Se){Se===!0&&(At*=ue,Kt*=ue,jt*=ue),ut.set(At,Kt,jt,ue),Ct.equals(ut)===!1&&(s.clearColor(At,Kt,jt,ue),Ct.copy(ut))},reset:function(){L=!1,dt=null,Ct.set(-1,0,0,0)}}}function r(){let L=!1,ut=null,dt=null,Ct=null;return{setTest:function(At){At?It(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(At){ut!==At&&!L&&(s.depthMask(At),ut=At)},setFunc:function(At){if(dt!==At){switch(At){case ec:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case ic:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case rc:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case ac:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=At}},setLocked:function(At){L=At},setClear:function(At){Ct!==At&&(s.clearDepth(At),Ct=At)},reset:function(){L=!1,ut=null,dt=null,Ct=null}}}function a(){let L=!1,ut=null,dt=null,Ct=null,At=null,Kt=null,jt=null,ue=null,Se=null;return{setTest:function($t){L||($t?It(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function($t){ut!==$t&&!L&&(s.stencilMask($t),ut=$t)},setFunc:function($t,ye,Xe){(dt!==$t||Ct!==ye||At!==Xe)&&(s.stencilFunc($t,ye,Xe),dt=$t,Ct=ye,At=Xe)},setOp:function($t,ye,Xe){(Kt!==$t||jt!==ye||ue!==Xe)&&(s.stencilOp($t,ye,Xe),Kt=$t,jt=ye,ue=Xe)},setLocked:function($t){L=$t},setClear:function($t){Se!==$t&&(s.clearStencil($t),Se=$t)},reset:function(){L=!1,ut=null,dt=null,Ct=null,At=null,Kt=null,jt=null,ue=null,Se=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,M=null,P=null,A=null,b=null,F=null,y=new Xt(0,0,0),w=0,N=!1,k=null,nt=null,D=null,O=null,H=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=q>=2);let it=null,ot={};const V=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ft=new pe().fromArray(V),Mt=new pe().fromArray($);function gt(L,ut,dt,Ct){const At=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(L,Kt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<dt;jt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(ut+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Kt}const Rt={};Rt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(s.DEPTH_TEST),l.setFunc(gs),pt(!1),E(Qr),It(s.CULL_FACE),W(gn);function It(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function St(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Lt(L,ut){return m[L]!==ut?(s.bindFramebuffer(L,ut),m[L]=ut,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ut),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function R(L,ut){let dt=_,Ct=!1;if(L)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),L.isWebGLMultipleRenderTargets){const At=L.texture;if(dt.length!==At.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,jt=At.length;Kt<jt;Kt++)dt[Kt]=s.COLOR_ATTACHMENT0+Kt;dt.length=At.length,Ct=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Ct=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function at(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const X={[Pn]:s.FUNC_ADD,[Gl]:s.FUNC_SUBTRACT,[Hl]:s.FUNC_REVERSE_SUBTRACT};if(n)X[io]=s.MIN,X[so]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(X[io]=L.MIN_EXT,X[so]=L.MAX_EXT)}const st={[kl]:s.ZERO,[Vl]:s.ONE,[Wl]:s.SRC_COLOR,[vr]:s.SRC_ALPHA,[Kl]:s.SRC_ALPHA_SATURATE,[Zl]:s.DST_COLOR,[Yl]:s.DST_ALPHA,[Xl]:s.ONE_MINUS_SRC_COLOR,[xr]:s.ONE_MINUS_SRC_ALPHA,[Jl]:s.ONE_MINUS_DST_COLOR,[ql]:s.ONE_MINUS_DST_ALPHA,[jl]:s.CONSTANT_COLOR,[$l]:s.ONE_MINUS_CONSTANT_COLOR,[Ql]:s.CONSTANT_ALPHA,[tc]:s.ONE_MINUS_CONSTANT_ALPHA};function W(L,ut,dt,Ct,At,Kt,jt,ue,Se,$t){if(L===gn){f===!0&&(St(s.BLEND),f=!1);return}if(f===!1&&(It(s.BLEND),f=!0),L!==zl){if(L!==x||$t!==N){if((v!==Pn||A!==Pn)&&(s.blendEquation(s.FUNC_ADD),v=Pn,A=Pn),$t)switch(L){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case to:s.blendFunc(s.ONE,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case to:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,P=null,b=null,F=null,y.set(0,0,0),w=0,x=L,N=$t}return}At=At||ut,Kt=Kt||dt,jt=jt||Ct,(ut!==v||At!==A)&&(s.blendEquationSeparate(X[ut],X[At]),v=ut,A=At),(dt!==M||Ct!==P||Kt!==b||jt!==F)&&(s.blendFuncSeparate(st[dt],st[Ct],st[Kt],st[jt]),M=dt,P=Ct,b=Kt,F=jt),(ue.equals(y)===!1||Se!==w)&&(s.blendColor(ue.r,ue.g,ue.b,Se),y.copy(ue),w=Se),x=L,N=!1}function Et(L,ut){L.side===Oe?St(s.CULL_FACE):It(s.CULL_FACE);let dt=L.side===Ae;ut&&(dt=!dt),pt(dt),L.blending===ci&&L.transparent===!1?W(gn):W(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Ct=L.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?It(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){k!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),k=L)}function E(L){L!==Fl?(It(s.CULL_FACE),L!==nt&&(L===Qr?s.cullFace(s.BACK):L===Bl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),nt=L}function S(L){L!==D&&(Y&&s.lineWidth(L),D=L)}function U(L,ut,dt){L?(It(s.POLYGON_OFFSET_FILL),(O!==ut||H!==dt)&&(s.polygonOffset(ut,dt),O=ut,H=dt)):St(s.POLYGON_OFFSET_FILL)}function et(L){L?It(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+Z-1),it!==L&&(s.activeTexture(L),it=L)}function K(L,ut,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+Z-1:dt=it);let Ct=ot[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},ot[dt]=Ct),(Ct.type!==L||Ct.texture!==ut)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(L,ut||Rt[L]),Ct.type=L,Ct.texture=ut)}function xt(){const L=ot[it];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(L){ft.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function Zt(L){Mt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function ne(L,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Ct=dt.get(L);Ct===void 0&&(Ct=s.getUniformBlockIndex(ut,L.name),dt.set(L,Ct))}function Ht(L,ut){const Ct=u.get(ut).get(L);h.get(ut)!==Ct&&(s.uniformBlockBinding(ut,Ct,L.__bindingPointIndex),h.set(ut,Ct))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,ot={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,M=null,P=null,A=null,b=null,F=null,y=new Xt(0,0,0),w=0,N=!1,k=null,nt=null,D=null,O=null,H=null,ft.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:It,disable:St,bindFramebuffer:Lt,drawBuffers:R,useProgram:at,setBlending:W,setMaterial:Et,setFlipSided:pt,setCullFace:E,setLineWidth:S,setPolygonOffset:U,setScissorTest:et,activeTexture:Q,bindTexture:K,unbindTexture:xt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:Tt,texImage3D:vt,updateUBOMapping:ne,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:Dt,texSubImage2D:wt,texSubImage3D:Nt,compressedTexSubImage2D:tt,compressedTexSubImage3D:Yt,scissor:Bt,viewport:Zt,reset:lt}}function Zp(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return m?new OffscreenCanvas(E,S):ys("canvas")}function _(E,S,U,et){let Q=1;if((E.width>et||E.height>et)&&(Q=et/Math.max(E.width,E.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const K=S?Ss:Math.floor,xt=K(Q*E.width),ht=K(Q*E.height);u===void 0&&(u=g(xt,ht));const _t=U?g(xt,ht):u;return _t.width=xt,_t.height=ht,_t.getContext("2d").drawImage(E,0,0,xt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xt+"x"+ht+")."),_t}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return wr(E.width)&&wr(E.height)}function f(E){return o?!1:E.wrapS!==ke||E.wrapT!==ke||E.minFilter!==we&&E.minFilter!==Ue}function x(E,S){return E.generateMipmaps&&S&&E.minFilter!==we&&E.minFilter!==Ue}function v(E){s.generateMipmap(E)}function M(E,S,U,et,Q=!1){if(o===!1)return S;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=S;if(S===s.RED&&(U===s.FLOAT&&(K=s.R32F),U===s.HALF_FLOAT&&(K=s.R16F),U===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.R8UI),U===s.UNSIGNED_SHORT&&(K=s.R16UI),U===s.UNSIGNED_INT&&(K=s.R32UI),U===s.BYTE&&(K=s.R8I),U===s.SHORT&&(K=s.R16I),U===s.INT&&(K=s.R32I)),S===s.RG&&(U===s.FLOAT&&(K=s.RG32F),U===s.HALF_FLOAT&&(K=s.RG16F),U===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RGBA){const xt=Q?_s:Jt.getTransfer(et);U===s.FLOAT&&(K=s.RGBA32F),U===s.HALF_FLOAT&&(K=s.RGBA16F),U===s.UNSIGNED_BYTE&&(K=xt===Qt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function P(E,S,U){return x(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==Ue?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function A(E){return E===we||E===ro||E===Fs?s.NEAREST:s.LINEAR}function b(E){const S=E.target;S.removeEventListener("dispose",b),y(S),S.isVideoTexture&&h.delete(S)}function F(E){const S=E.target;S.removeEventListener("dispose",F),N(S)}function y(E){const S=n.get(E);if(S.__webglInit===void 0)return;const U=E.source,et=d.get(U);if(et){const Q=et[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(E),Object.keys(et).length===0&&d.delete(U)}n.remove(E)}function w(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const U=E.source,et=d.get(U);delete et[S.__cacheKey],a.memory.textures--}function N(E){const S=E.texture,U=n.get(E),et=n.get(S);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let K=0;K<U.__webglFramebuffer[Q].length;K++)s.deleteFramebuffer(U.__webglFramebuffer[Q][K]);else s.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)s.deleteFramebuffer(U.__webglFramebuffer[Q]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,K=S.length;Q<K;Q++){const xt=n.get(S[Q]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(E)}let k=0;function nt(){k=0}function D(){const E=k;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),k+=1,E}function O(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function H(E,S){const U=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(U,E,S);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ft(U,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function Y(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ft(U,E,S);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function q(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Mt(U,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}const J={[yr]:s.REPEAT,[ke]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},it={[we]:s.NEAREST,[ro]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Ue]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},ot={[Rc]:s.NEVER,[Uc]:s.ALWAYS,[Cc]:s.LESS,[Za]:s.LEQUAL,[Pc]:s.EQUAL,[Ic]:s.GEQUAL,[Lc]:s.GREATER,[Dc]:s.NOTEQUAL};function V(E,S,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,J[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,J[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,J[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,it[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,it[S.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==ke||S.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(S.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==we&&S.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===we||S.minFilter!==Fs&&S.minFilter!==Ri||S.type===pn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ci&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function $(E,S){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",b));const et=S.source;let Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));const K=O(S);if(K!==E.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[K].usedTimes++;const xt=Q[E.__cacheKey];xt!==void 0&&(Q[E.__cacheKey].usedTimes--,xt.usedTimes===0&&w(S)),E.__cacheKey=K,E.__webglTexture=Q[K].texture}return U}function ft(E,S,U){let et=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=s.TEXTURE_3D);const Q=$(E,S),K=S.source;e.bindTexture(et,E.__webglTexture,s.TEXTURE0+U);const xt=n.get(K);if(K.version!==xt.__version||Q===!0){e.activeTexture(s.TEXTURE0+U);const ht=Jt.getPrimaries(Jt.workingColorSpace),_t=S.colorSpace===Fe?null:Jt.getPrimaries(S.colorSpace),wt=S.colorSpace===Fe||ht===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Nt=f(S)&&p(S.image)===!1;let tt=_(S.image,Nt,!1,i.maxTextureSize);tt=pt(S,tt);const Yt=p(tt)||o,Wt=r.convert(S.format,S.colorSpace);let Dt=r.convert(S.type),Tt=M(S.internalFormat,Wt,Dt,S.colorSpace,S.isVideoTexture);V(et,S,Yt);let vt;const Bt=S.mipmaps,Zt=o&&S.isVideoTexture!==!0&&Tt!==Xa,ne=xt.__version===void 0||Q===!0,Ht=P(S,tt,Yt);if(S.isDepthTexture)Tt=s.DEPTH_COMPONENT,o?S.type===pn?Tt=s.DEPTH_COMPONENT32F:S.type===fn?Tt=s.DEPTH_COMPONENT24:S.type===Dn?Tt=s.DEPTH24_STENCIL8:Tt=s.DEPTH_COMPONENT16:S.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===In&&Tt===s.DEPTH_COMPONENT&&S.type!==Dr&&S.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fn,Dt=r.convert(S.type)),S.format===fi&&Tt===s.DEPTH_COMPONENT&&(Tt=s.DEPTH_STENCIL,S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Dn,Dt=r.convert(S.type))),ne&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,Wt,Dt,null));else if(S.isDataTexture)if(Bt.length>0&&Yt){Zt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ht,Tt,Bt[0].width,Bt[0].height);for(let lt=0,L=Bt.length;lt<L;lt++)vt=Bt[lt],Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Wt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,lt,Tt,vt.width,vt.height,0,Wt,Dt,vt.data);S.generateMipmaps=!1}else Zt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ht,Tt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,Wt,Dt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,Wt,Dt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Tt,Bt[0].width,Bt[0].height,tt.depth);for(let lt=0,L=Bt.length;lt<L;lt++)vt=Bt[lt],S.format!==Ve?Wt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,tt.depth,Wt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Tt,vt.width,vt.height,tt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,tt.depth,Wt,Dt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Tt,vt.width,vt.height,tt.depth,0,Wt,Dt,vt.data)}else{Zt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ht,Tt,Bt[0].width,Bt[0].height);for(let lt=0,L=Bt.length;lt<L;lt++)vt=Bt[lt],S.format!==Ve?Wt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Wt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Wt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,lt,Tt,vt.width,vt.height,0,Wt,Dt,vt.data)}else if(S.isDataArrayTexture)Zt?(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Tt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Wt,Dt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,Wt,Dt,tt.data);else if(S.isData3DTexture)Zt?(ne&&e.texStorage3D(s.TEXTURE_3D,Ht,Tt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Wt,Dt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,Wt,Dt,tt.data);else if(S.isFramebufferTexture){if(ne)if(Zt)e.texStorage2D(s.TEXTURE_2D,Ht,Tt,tt.width,tt.height);else{let lt=tt.width,L=tt.height;for(let ut=0;ut<Ht;ut++)e.texImage2D(s.TEXTURE_2D,ut,Tt,lt,L,0,Wt,Dt,null),lt>>=1,L>>=1}}else if(Bt.length>0&&Yt){Zt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ht,Tt,Bt[0].width,Bt[0].height);for(let lt=0,L=Bt.length;lt<L;lt++)vt=Bt[lt],Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Wt,Dt,vt):e.texImage2D(s.TEXTURE_2D,lt,Tt,Wt,Dt,vt);S.generateMipmaps=!1}else Zt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ht,Tt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Dt,tt)):e.texImage2D(s.TEXTURE_2D,0,Tt,Wt,Dt,tt);x(S,Yt)&&v(et),xt.__version=K.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Mt(E,S,U){if(S.image.length!==6)return;const et=$(E,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const K=n.get(Q);if(Q.version!==K.__version||et===!0){e.activeTexture(s.TEXTURE0+U);const xt=Jt.getPrimaries(Jt.workingColorSpace),ht=S.colorSpace===Fe?null:Jt.getPrimaries(S.colorSpace),_t=S.colorSpace===Fe||xt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const wt=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let lt=0;lt<6;lt++)!wt&&!Nt?tt[lt]=_(S.image[lt],!1,!0,i.maxCubemapSize):tt[lt]=Nt?S.image[lt].image:S.image[lt],tt[lt]=pt(S,tt[lt]);const Yt=tt[0],Wt=p(Yt)||o,Dt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),vt=M(S.internalFormat,Dt,Tt,S.colorSpace),Bt=o&&S.isVideoTexture!==!0,Zt=K.__version===void 0||et===!0;let ne=P(S,Yt,Wt);V(s.TEXTURE_CUBE_MAP,S,Wt);let Ht;if(wt){Bt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,vt,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){Ht=tt[lt].mipmaps;for(let L=0;L<Ht.length;L++){const ut=Ht[L];S.format!==Ve?Dt!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,ut.width,ut.height,Dt,Tt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,vt,ut.width,ut.height,0,Dt,Tt,ut.data)}}}else{Ht=S.mipmaps,Bt&&Zt&&(Ht.length>0&&ne++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,vt,tt[0].width,tt[0].height));for(let lt=0;lt<6;lt++)if(Nt){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,tt[lt].width,tt[lt].height,Dt,Tt,tt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,tt[lt].width,tt[lt].height,0,Dt,Tt,tt[lt].data);for(let L=0;L<Ht.length;L++){const dt=Ht[L].image[lt].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,dt.width,dt.height,Dt,Tt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,vt,dt.width,dt.height,0,Dt,Tt,dt.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt,Tt,tt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,Dt,Tt,tt[lt]);for(let L=0;L<Ht.length;L++){const ut=Ht[L];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,Dt,Tt,ut.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,vt,Dt,Tt,ut.image[lt])}}}x(S,Wt)&&v(s.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function gt(E,S,U,et,Q,K){const xt=r.convert(U.format,U.colorSpace),ht=r.convert(U.type),_t=M(U.internalFormat,xt,ht,U.colorSpace);if(!n.get(S).__hasExternalTextures){const Nt=Math.max(1,S.width>>K),tt=Math.max(1,S.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,_t,Nt,tt,S.depth,0,xt,ht,null):e.texImage2D(Q,K,_t,Nt,tt,0,xt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),W(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,n.get(U).__webglTexture,0,st(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,n.get(U).__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(E,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||W(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===pn?et=s.DEPTH_COMPONENT32F:Q.type===fn&&(et=s.DEPTH_COMPONENT24));const K=st(S);W(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,et,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,K,et,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){const et=st(S);U&&W(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,S.width,S.height):W(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<et.length;Q++){const K=et[Q],xt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),_t=M(K.internalFormat,xt,ht,K.colorSpace),wt=st(S);U&&W(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,_t,S.width,S.height):W(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const et=n.get(S.depthTexture).__webglTexture,Q=st(S);if(S.depthTexture.format===In)W(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===fi)W(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function St(E){const S=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,E)}else if(U){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=s.createRenderbuffer(),Rt(S.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Rt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,S,U){const et=n.get(E);S!==void 0&&gt(et.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&St(E)}function R(E){const S=E.texture,U=n.get(E),et=n.get(S);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=S.version,a.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,K=E.isWebGLMultipleRenderTargets===!0,xt=p(E)||o;if(Q){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ht]=[];for(let _t=0;_t<S.mipmaps.length;_t++)U.__webglFramebuffer[ht][_t]=s.createFramebuffer()}else U.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)U.__webglFramebuffer[ht]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(K)if(i.drawBuffers){const ht=E.texture;for(let _t=0,wt=ht.length;_t<wt;_t++){const Nt=n.get(ht[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&W(E)===!1){const ht=K?S:[S];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){const wt=ht[_t];U.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[_t]);const Nt=r.convert(wt.format,wt.colorSpace),tt=r.convert(wt.type),Yt=M(wt.internalFormat,Nt,tt,wt.colorSpace,E.isXRRenderTarget===!0),Wt=st(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Yt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,U.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),V(s.TEXTURE_CUBE_MAP,S,xt);for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)gt(U.__webglFramebuffer[ht][_t],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else gt(U.__webglFramebuffer[ht],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(S,xt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){const ht=E.texture;for(let _t=0,wt=ht.length;_t<wt;_t++){const Nt=ht[_t],tt=n.get(Nt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),V(s.TEXTURE_2D,Nt,xt),gt(U.__webglFramebuffer,E,Nt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),x(Nt,xt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ht=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,et.__webglTexture),V(ht,S,xt),o&&S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)gt(U.__webglFramebuffer[_t],E,S,s.COLOR_ATTACHMENT0,ht,_t);else gt(U.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,ht,0);x(S,xt)&&v(ht),e.unbindTexture()}E.depthBuffer&&St(E)}function at(E){const S=p(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,Q=U.length;et<Q;et++){const K=U[et];if(x(K,S)){const xt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(xt,ht),v(xt),e.unbindTexture()}}}function X(E){if(o&&E.samples>0&&W(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,et=E.height;let Q=s.COLOR_BUFFER_BIT;const K=[],xt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(E),_t=E.isWebGLMultipleRenderTargets===!0;if(_t)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){K.push(s.COLOR_ATTACHMENT0+wt),E.depthBuffer&&K.push(xt);const Nt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Nt===!1&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),_t){const tt=n.get(S[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,U,et,0,0,U,et,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]);const Nt=n.get(S[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function st(E){return Math.min(i.maxSamples,E.samples)}function W(E){const S=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(E){const S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function pt(E,S){const U=E.colorSpace,et=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Tr||U!==on&&U!==Fe&&(Jt.getTransfer(U)===Qt?o===!1?t.has("EXT_sRGB")===!0&&et===Ve?(E.format=Tr,E.minFilter=Ue,E.generateMipmaps=!1):S=Ka.sRGBToLinear(S):(et!==Ve||Q!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=D,this.resetTextureUnits=nt,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=W}function Jp(s,t,e){const n=e.isWebGL2;function i(r,a=Fe){let o;const l=Jt.getTransfer(a);if(r===vn)return s.UNSIGNED_BYTE;if(r===Ga)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ha)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_c)return s.BYTE;if(r===vc)return s.SHORT;if(r===Dr)return s.UNSIGNED_SHORT;if(r===za)return s.INT;if(r===fn)return s.UNSIGNED_INT;if(r===pn)return s.FLOAT;if(r===Ci)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xc)return s.ALPHA;if(r===Ve)return s.RGBA;if(r===Mc)return s.LUMINANCE;if(r===Sc)return s.LUMINANCE_ALPHA;if(r===In)return s.DEPTH_COMPONENT;if(r===fi)return s.DEPTH_STENCIL;if(r===Tr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===yc)return s.RED;if(r===ka)return s.RED_INTEGER;if(r===Ec)return s.RG;if(r===Va)return s.RG_INTEGER;if(r===Wa)return s.RGBA_INTEGER;if(r===Bs||r===zs||r===Gs||r===Hs)if(l===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===ao||r===lo||r===co)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xa)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ho||r===uo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ho)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===Mo||r===So||r===yo||r===Eo||r===To||r===wo||r===Ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===po)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_o)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===So)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===To)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ao)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ks||r===bo||r===Ro)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ks)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tc||r===Co||r===Po||r===Lo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ks)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Kp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sn extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jp={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $p extends gi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const x=[],v=[],M=new rt;let P=null;const A=new Ne;A.layers.enable(1),A.viewport=new pe;const b=new Ne;b.layers.enable(2),b.viewport=new pe;const F=[A,b],y=new Kp;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=x[V];return $===void 0&&($=new ur,x[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=x[V];return $===void 0&&($=new ur,x[V]=$),$.getGripSpace()},this.getHand=function(V){let $=x[V];return $===void 0&&($=new ur,x[V]=$),$.getHandSpace()};function k(V){const $=v.indexOf(V.inputSource);if($===-1)return;const ft=x[$];ft!==void 0&&(ft.update(V.inputSource,V.frame,c||a),ft.dispatchEvent({type:V.type,data:V.inputSource}))}function nt(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){const $=v[V];$!==null&&(v[V]=null,x[V].disconnect($))}w=null,N=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ft=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?fi:In,ft=_.stencil?Dn:fn);const gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Nn(d.textureWidth,d.textureHeight,{format:Ve,type:vn,depthTexture:new ll(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Rt=t.properties.get(f);Rt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(V){for(let $=0;$<V.removed.length;$++){const ft=V.removed[$],Mt=v.indexOf(ft);Mt>=0&&(v[Mt]=null,x[Mt].disconnect(ft))}for(let $=0;$<V.added.length;$++){const ft=V.added[$];let Mt=v.indexOf(ft);if(Mt===-1){for(let Rt=0;Rt<x.length;Rt++)if(Rt>=v.length){v.push(ft),Mt=Rt;break}else if(v[Rt]===null){v[Rt]=ft,Mt=Rt;break}if(Mt===-1)break}const gt=x[Mt];gt&&gt.connect(ft)}}const O=new C,H=new C;function Z(V,$,ft){O.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ft.matrixWorld);const Mt=O.distanceTo(H),gt=$.projectionMatrix.elements,Rt=ft.projectionMatrix.elements,It=gt[14]/(gt[10]-1),St=gt[14]/(gt[10]+1),Lt=(gt[9]+1)/gt[5],R=(gt[9]-1)/gt[5],at=(gt[8]-1)/gt[0],X=(Rt[8]+1)/Rt[0],st=It*at,W=It*X,Et=Mt/(-at+X),pt=Et*-at;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(pt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=It+Et,S=St+Et,U=st-pt,et=W+(Mt-pt),Q=Lt*St/S*E,K=R*St/S*E;V.projectionMatrix.makePerspective(U,et,Q,K,E,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=b.near=A.near=V.near,y.far=b.far=A.far=V.far,(w!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);const $=V.parent,ft=y.cameras;Y(y,$);for(let Mt=0;Mt<ft.length;Mt++)Y(ft[Mt],$);ft.length===2?Z(y,A,b):y.projectionMatrix.copy(A.projectionMatrix),q(V,y,$)};function q(V,$,ft){ft===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ft.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let J=null;function it(V,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let Mt=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,Mt=!0);for(let gt=0;gt<ft.length;gt++){const Rt=ft[gt];let It=null;if(m!==null)It=m.getViewport(Rt);else{const Lt=u.getViewSubImage(d,Rt);It=Lt.viewport,gt===0&&(t.setRenderTargetTextures(f,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(f))}let St=F[gt];St===void 0&&(St=new Ne,St.layers.enable(gt),St.viewport=new pe,F[gt]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(y.matrix.copy(St.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Mt===!0&&y.cameras.push(St)}}for(let ft=0;ft<x.length;ft++){const Mt=v[ft],gt=x[ft];Mt!==null&&gt!==void 0&&gt.update(Mt,$,c||a)}J&&J(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ot=new ol;ot.setAnimationLoop(it),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}function Qp(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,il(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ae&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ae&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const x=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tm(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(x,P);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const M=s.createBuffer(),P=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,b=M.length;A<b;A++){const F=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,w=F.length;y<w;y++){const N=F[y];if(m(N,A,y,P)===!0){const k=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let O=0;O<nt.length;O++){const H=nt[O],Z=_(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+D,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,M,P){const A=x.value,b=v+"_"+M;if(P[b]===void 0)return typeof A=="number"||typeof A=="boolean"?P[b]=A:P[b]=A.clone(),!0;{const F=P[b];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[b]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(x){const v=x.uniforms;let M=0;const P=16;for(let b=0,F=v.length;b<F;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,N=y.length;w<N;w++){const k=y[w],nt=Array.isArray(k.value)?k.value:[k.value];for(let D=0,O=nt.length;D<O;D++){const H=nt[D],Z=_(H),Y=M%P;Y!==0&&P-Y<Z.boundary&&(M+=P-Y),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Z.storage}}}const A=M%P;return A>0&&(M+=P-A),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class pl{constructor(t={}){const{canvas:e=Jc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const v=this;let M=!1,P=0,A=0,b=null,F=-1,y=null;const w=new pe,N=new pe;let k=null;const nt=new Xt(0);let D=0,O=e.width,H=e.height,Z=1,Y=null,q=null;const J=new pe(0,0,O,H),it=new pe(0,0,O,H);let ot=!1;const V=new Or;let $=!1,ft=!1,Mt=null;const gt=new se,Rt=new rt,It=new C,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return b===null?Z:1}let R=n;function at(T,I){for(let z=0;z<T.length;z++){const G=T[z],B=e.getContext(G,I);if(B!==null)return B}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lr}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),R=at(I,T),R===null)throw at(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,st,W,Et,pt,E,S,U,et,Q,K,xt,ht,_t,wt,Nt,tt,Yt,Wt,Dt,Tt,vt,Bt,Zt;function ne(){X=new hf(R),st=new sf(R,X,t),X.init(st),vt=new Jp(R,X,st),W=new qp(R,X,st),Et=new ff(R),pt=new Ip,E=new Zp(R,X,W,pt,st,vt,Et),S=new of(v),U=new cf(v),et=new Mh(R,st),Bt=new ef(R,X,et,st),Q=new uf(R,et,Et,Bt),K=new _f(R,Q,et,Et),Wt=new gf(R,st,E),Nt=new rf(pt),xt=new Dp(v,S,U,X,st,Bt,Nt),ht=new Qp(v,pt),_t=new Np,wt=new Hp(X,st),Yt=new tf(v,S,U,W,K,d,l),tt=new Yp(v,K,st),Zt=new tm(R,Et,st,W),Dt=new nf(R,X,Et,st),Tt=new df(R,X,Et,st),Et.programs=xt.programs,v.capabilities=st,v.extensions=X,v.properties=pt,v.renderLists=_t,v.shadowMap=tt,v.state=W,v.info=Et}ne();const Ht=new $p(v,R);this.xr=Ht,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(O,H,!1))},this.getSize=function(T){return T.set(O,H)},this.setSize=function(T,I,z=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,H=I,e.width=Math.floor(T*Z),e.height=Math.floor(I*Z),z===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(O*Z,H*Z).floor()},this.setDrawingBufferSize=function(T,I,z){O=T,H=I,Z=z,e.width=Math.floor(T*z),e.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,I,z,G){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,I,z,G),W.viewport(w.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,I,z,G){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,I,z,G),W.scissor(N.copy(it).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){W.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(T=!0,I=!0,z=!0){let G=0;if(T){let B=!1;if(b!==null){const mt=b.texture.format;B=mt===Wa||mt===Va||mt===ka}if(B){const mt=b.texture.type,yt=mt===vn||mt===fn||mt===Dr||mt===Dn||mt===Ga||mt===Ha,bt=Yt.getClearColor(),Pt=Yt.getClearAlpha(),Gt=bt.r,Ut=bt.g,Ot=bt.b;yt?(m[0]=Gt,m[1]=Ut,m[2]=Ot,m[3]=Pt,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Gt,g[1]=Ut,g[2]=Ot,g[3]=Pt,R.clearBufferiv(R.COLOR,0,g))}else G|=R.COLOR_BUFFER_BIT}I&&(G|=R.DEPTH_BUFFER_BIT),z&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),wt.dispose(),pt.dispose(),S.dispose(),U.dispose(),K.dispose(),Bt.dispose(),Zt.dispose(),xt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Se),Ht.removeEventListener("sessionend",$t),Mt&&(Mt.dispose(),Mt=null),ye.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Et.autoReset,I=tt.enabled,z=tt.autoUpdate,G=tt.needsUpdate,B=tt.type;ne(),Et.autoReset=T,tt.enabled=I,tt.autoUpdate=z,tt.needsUpdate=G,tt.type=B}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const I=T.target;I.removeEventListener("dispose",dt),Ct(I)}function Ct(T){At(T),pt.remove(T)}function At(T){const I=pt.get(T).programs;I!==void 0&&(I.forEach(function(z){xt.releaseProgram(z)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,G,B,mt){I===null&&(I=St);const yt=B.isMesh&&B.matrixWorld.determinant()<0,bt=Il(T,I,z,G,B);W.setMaterial(G,yt);let Pt=z.index,Gt=1;if(G.wireframe===!0){if(Pt=Q.getWireframeAttribute(z),Pt===void 0)return;Gt=2}const Ut=z.drawRange,Ot=z.attributes.position;let re=Ut.start*Gt,Re=(Ut.start+Ut.count)*Gt;mt!==null&&(re=Math.max(re,mt.start*Gt),Re=Math.min(Re,(mt.start+mt.count)*Gt)),Pt!==null?(re=Math.max(re,0),Re=Math.min(Re,Pt.count)):Ot!=null&&(re=Math.max(re,0),Re=Math.min(Re,Ot.count));const de=Re-re;if(de<0||de===1/0)return;Bt.setup(B,G,bt,z,Pt);let Je,te=Dt;if(Pt!==null&&(Je=et.get(Pt),te=Tt,te.setIndex(Je)),B.isMesh)G.wireframe===!0?(W.setLineWidth(G.wireframeLinewidth*Lt()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(B.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),W.setLineWidth(kt*Lt()),B.isLineSegments?te.setMode(R.LINES):B.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else B.isPoints?te.setMode(R.POINTS):B.isSprite&&te.setMode(R.TRIANGLES);if(B.isBatchedMesh)te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)te.renderInstances(re,de,B.count);else if(z.isInstancedBufferGeometry){const kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Is=Math.min(z.instanceCount,kt);te.renderInstances(re,de,Is)}else te.render(re,de)};function Kt(T,I,z){T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=Ae,T.needsUpdate=!0,Bi(T,I,z),T.side=Sn,T.needsUpdate=!0,Bi(T,I,z),T.side=Oe):Bi(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),p=wt.get(z),p.init(),x.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==z&&T.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const G=new Set;return T.traverse(function(B){const mt=B.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){const bt=mt[yt];Kt(bt,z,B),G.add(bt)}else Kt(mt,z,B),G.add(mt)}),x.pop(),p=null,G},this.compileAsync=function(T,I,z=null){const G=this.compile(T,I,z);return new Promise(B=>{function mt(){if(G.forEach(function(yt){pt.get(yt).currentProgram.isReady()&&G.delete(yt)}),G.size===0){B(T);return}setTimeout(mt,10)}X.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let jt=null;function ue(T){jt&&jt(T)}function Se(){ye.stop()}function $t(){ye.start()}const ye=new ol;ye.setAnimationLoop(ue),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(T){jt=T,Ht.setAnimationLoop(T),T===null?ye.stop():ye.start()},Ht.addEventListener("sessionstart",Se),Ht.addEventListener("sessionend",$t),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(I),I=Ht.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,b),p=wt.get(T,x.length),p.init(),x.push(p),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(gt),ft=this.localClippingEnabled,$=Nt.init(this.clippingPlanes,ft),_=_t.get(T,f.length),_.init(),f.push(_),Xe(T,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,q),this.info.render.frame++,$===!0&&Nt.beginShadows();const z=p.state.shadowsArray;if(tt.render(z,T,I),$===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,T),p.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let B=0,mt=G.length;B<mt;B++){const yt=G[B];qr(_,T,yt,yt.viewport)}}else qr(_,T,I);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,I),Bt.resetDefaultState(),F=-1,y=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Xe(T,I,z,G){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){G&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const yt=K.update(T),bt=T.material;bt.visible&&_.push(T,yt,bt,z,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const yt=K.update(T),bt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),It.copy(yt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(bt)){const Pt=yt.groups;for(let Gt=0,Ut=Pt.length;Gt<Ut;Gt++){const Ot=Pt[Gt],re=bt[Ot.materialIndex];re&&re.visible&&_.push(T,yt,re,z,It.z,Ot)}}else bt.visible&&_.push(T,yt,bt,z,It.z,null)}}const mt=T.children;for(let yt=0,bt=mt.length;yt<bt;yt++)Xe(mt[yt],I,z,G)}function qr(T,I,z,G){const B=T.opaque,mt=T.transmissive,yt=T.transparent;p.setupLightsView(z),$===!0&&Nt.setGlobalState(v.clippingPlanes,z),mt.length>0&&Dl(B,mt,I,z),G&&W.viewport(w.copy(G)),B.length>0&&Fi(B,I,z),mt.length>0&&Fi(mt,I,z),yt.length>0&&Fi(yt,I,z),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Dl(T,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const mt=st.isWebGL2;Mt===null&&(Mt=new Nn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Ci:vn,minFilter:Ri,samples:mt?4:0})),v.getDrawingBufferSize(Rt),mt?Mt.setSize(Rt.x,Rt.y):Mt.setSize(Ss(Rt.x),Ss(Rt.y));const yt=v.getRenderTarget();v.setRenderTarget(Mt),v.getClearColor(nt),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const bt=v.toneMapping;v.toneMapping=_n,Fi(T,z,G),E.updateMultisampleRenderTarget(Mt),E.updateRenderTargetMipmap(Mt);let Pt=!1;for(let Gt=0,Ut=I.length;Gt<Ut;Gt++){const Ot=I[Gt],re=Ot.object,Re=Ot.geometry,de=Ot.material,Je=Ot.group;if(de.side===Oe&&re.layers.test(G.layers)){const te=de.side;de.side=Ae,de.needsUpdate=!0,Zr(re,z,G,Re,de,Je),de.side=te,de.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(Mt),E.updateRenderTargetMipmap(Mt)),v.setRenderTarget(yt),v.setClearColor(nt,D),v.toneMapping=bt}function Fi(T,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let B=0,mt=T.length;B<mt;B++){const yt=T[B],bt=yt.object,Pt=yt.geometry,Gt=G===null?yt.material:G,Ut=yt.group;bt.layers.test(z.layers)&&Zr(bt,I,z,Pt,Gt,Ut)}}function Zr(T,I,z,G,B,mt){T.onBeforeRender(v,I,z,G,B,mt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,I,z,G,T,mt),B.transparent===!0&&B.side===Oe&&B.forceSinglePass===!1?(B.side=Ae,B.needsUpdate=!0,v.renderBufferDirect(z,I,G,B,T,mt),B.side=Sn,B.needsUpdate=!0,v.renderBufferDirect(z,I,G,B,T,mt),B.side=Oe):v.renderBufferDirect(z,I,G,B,T,mt),T.onAfterRender(v,I,z,G,B,mt)}function Bi(T,I,z){I.isScene!==!0&&(I=St);const G=pt.get(T),B=p.state.lights,mt=p.state.shadowsArray,yt=B.state.version,bt=xt.getParameters(T,B.state,mt,I,z),Pt=xt.getProgramCacheKey(bt);let Gt=G.programs;G.environment=T.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(T.isMeshStandardMaterial?U:S).get(T.envMap||G.environment),Gt===void 0&&(T.addEventListener("dispose",dt),Gt=new Map,G.programs=Gt);let Ut=Gt.get(Pt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===yt)return Kr(T,bt),Ut}else bt.uniforms=xt.getUniforms(T),T.onBuild(z,bt,v),T.onBeforeCompile(bt,v),Ut=xt.acquireProgram(bt,Pt),Gt.set(Pt,Ut),G.uniforms=bt.uniforms;const Ot=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=Nt.uniform),Kr(T,bt),G.needsLights=Nl(T),G.lightsStateVersion=yt,G.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function Jr(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ps.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Kr(T,I){const z=pt.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Il(T,I,z,G,B){I.isScene!==!0&&(I=St),E.resetTextureUnits();const mt=I.fog,yt=G.isMeshStandardMaterial?I.environment:null,bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:on,Pt=(G.isMeshStandardMaterial?U:S).get(G.envMap||yt),Gt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!z.morphAttributes.position,re=!!z.morphAttributes.normal,Re=!!z.morphAttributes.color;let de=_n;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(de=v.toneMapping);const Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=Je!==void 0?Je.length:0,kt=pt.get(G),Is=p.state.lights;if($===!0&&(ft===!0||T!==y)){const Le=T===y&&G.id===F;Nt.setState(G,T,Le)}let ie=!1;G.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Is.state.version||kt.outputColorSpace!==bt||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||kt.envMap!==Pt||G.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Nt.numPlanes||kt.numIntersection!==Nt.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Ut||kt.morphTargets!==Ot||kt.morphNormals!==re||kt.morphColors!==Re||kt.toneMapping!==de||st.isWebGL2===!0&&kt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,kt.__version=G.version);let yn=kt.currentProgram;ie===!0&&(yn=Bi(G,I,B));let jr=!1,vi=!1,Us=!1;const ve=yn.getUniforms(),En=kt.uniforms;if(W.useProgram(yn.program)&&(jr=!0,vi=!0,Us=!0),G.id!==F&&(F=G.id,vi=!0),jr||y!==T){ve.setValue(R,"projectionMatrix",T.projectionMatrix),ve.setValue(R,"viewMatrix",T.matrixWorldInverse);const Le=ve.map.cameraPosition;Le!==void 0&&Le.setValue(R,It.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&ve.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,vi=!0,Us=!0)}if(B.isSkinnedMesh){ve.setOptional(R,B,"bindMatrix"),ve.setOptional(R,B,"bindMatrixInverse");const Le=B.skeleton;Le&&(st.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),ve.setValue(R,"boneTexture",Le.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ve.setOptional(R,B,"batchingTexture"),ve.setValue(R,"batchingTexture",B._matricesTexture,E));const Ns=z.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&st.isWebGL2===!0)&&Wt.update(B,z,yn),(vi||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,ve.setValue(R,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(En.envMap.value=Pt,En.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),vi&&(ve.setValue(R,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ul(En,Us),mt&&G.fog===!0&&ht.refreshFogUniforms(En,mt),ht.refreshMaterialUniforms(En,G,Z,H,Mt),ps.upload(R,Jr(kt),En,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ps.upload(R,Jr(kt),En,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(R,"center",B.center),ve.setValue(R,"modelViewMatrix",B.modelViewMatrix),ve.setValue(R,"normalMatrix",B.normalMatrix),ve.setValue(R,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Le=G.uniformsGroups;for(let Os=0,Ol=Le.length;Os<Ol;Os++)if(st.isWebGL2){const $r=Le[Os];Zt.update($r,yn),Zt.bind($r,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function Ul(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Nl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,z){pt.get(T.texture).__webglTexture=I,pt.get(T.depthTexture).__webglTexture=z;const G=pt.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const z=pt.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){b=T,P=I,A=z;let G=!0,B=null,mt=!1,yt=!1;if(T){const Pt=pt.get(T);Pt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):Pt.__webglFramebuffer===void 0?E.setupRenderTarget(T):Pt.__hasExternalTextures&&E.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const Ut=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?B=Ut[I][z]:B=Ut[I],mt=!0):st.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?B=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[z]:B=Ut,w.copy(T.viewport),N.copy(T.scissor),k=T.scissorTest}else w.copy(J).multiplyScalar(Z).floor(),N.copy(it).multiplyScalar(Z).floor(),k=ot;if(W.bindFramebuffer(R.FRAMEBUFFER,B)&&st.drawBuffers&&G&&W.drawBuffers(T,B),W.viewport(w),W.scissor(N),W.setScissorTest(k),mt){const Pt=pt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,z)}else if(yt){const Pt=pt.get(T.texture),Gt=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,z||0,Gt)}F=-1},this.readRenderTargetPixels=function(T,I,z,G,B,mt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){W.bindFramebuffer(R.FRAMEBUFFER,bt);try{const Pt=T.texture,Gt=Pt.format,Ut=Pt.type;if(Gt!==Ve&&vt.convert(Gt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Ut===Ci&&(X.has("EXT_color_buffer_half_float")||st.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ut!==vn&&vt.convert(Ut)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===pn&&(st.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-G&&z>=0&&z<=T.height-B&&R.readPixels(I,z,G,B,vt.convert(Gt),vt.convert(Ut),mt)}finally{const Pt=b!==null?pt.get(b).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(T,I,z=0){const G=Math.pow(2,-z),B=Math.floor(I.image.width*G),mt=Math.floor(I.image.height*G);E.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,T.x,T.y,B,mt),W.unbindTexture()},this.copyTextureToTexture=function(T,I,z,G=0){const B=I.image.width,mt=I.image.height,yt=vt.convert(z.format),bt=vt.convert(z.type);E.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,T.x,T.y,B,mt,yt,bt,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,yt,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,G,T.x,T.y,yt,bt,I.image),G===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,bt=T.max.z-T.min.z+1,Pt=vt.convert(G.format),Gt=vt.convert(G.type);let Ut;if(G.isData3DTexture)E.setTexture3D(G,0),Ut=R.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ut=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Ot=R.getParameter(R.UNPACK_ROW_LENGTH),re=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Re=R.getParameter(R.UNPACK_SKIP_PIXELS),de=R.getParameter(R.UNPACK_SKIP_ROWS),Je=R.getParameter(R.UNPACK_SKIP_IMAGES),te=z.isCompressedTexture?z.mipmaps[B]:z.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,T.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,T.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?R.texSubImage3D(Ut,B,I.x,I.y,I.z,mt,yt,bt,Pt,Gt,te.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ut,B,I.x,I.y,I.z,mt,yt,bt,Pt,te.data)):R.texSubImage3D(Ut,B,I.x,I.y,I.z,mt,yt,bt,Pt,Gt,te),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,de),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Je),B===0&&G.generateMipmaps&&R.generateMipmap(Ut),W.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){P=0,A=0,b=null,W.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ir?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Un:Ya}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Un?ge:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class em extends pl{}em.prototype.isWebGL1Renderer=!0;class Br{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new Br(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nm extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ml extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new C,ya=new C,Ea=new se,dr=new Nr,as=new Oi;class im extends me{constructor(t=new le,e=new ml){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Sa.fromBufferAttribute(e,i-1),ya.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sa.distanceTo(ya);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=r,t.ray.intersectsSphere(as)===!1)return;Ea.copy(i).invert(),dr.copy(t.ray).applyMatrix4(Ea);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,M=x-1;v<M;v+=m){const P=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,A),dr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=f,M=x-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),dr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class ms extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ta=new se,br=new Nr,ls=new Oi,cs=new C;class fr extends me{constructor(t=new le,e=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;Ta.copy(i).invert(),br.copy(t.ray).applyMatrix4(Ta);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);cs.fromBufferAttribute(u,p),wa(cs,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)cs.fromBufferAttribute(u,g),wa(cs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wa(s,t,e,n,i,r,a){const o=br.distanceSqToPoint(s);if(o<e){const l=new C;br.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Aa extends be{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(a-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],a=[],o=new C,l=new se;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_e(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zr extends Ze{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sm extends zr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,i(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const hs=new C,pr=new Gr,mr=new Gr,gr=new Gr;class rm extends Ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(hs.subVectors(i[0],i[1]).add(i[0]),c=hs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(hs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=hs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),pr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),mr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),gr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(pr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),mr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),gr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(pr.calc(l),mr.calc(l),gr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ba(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function om(s,t){const e=1-s;return e*e*t}function am(s,t){return 2*(1-s)*s*t}function lm(s,t){return s*s*t}function Ai(s,t,e,n){return om(s,t)+am(s,e)+lm(s,n)}function cm(s,t){const e=1-s;return e*e*e*t}function hm(s,t){const e=1-s;return 3*e*e*s*t}function um(s,t){return 3*(1-s)*s*s*t}function dm(s,t){return s*s*s*t}function bi(s,t,e,n,i){return cm(s,t)+hm(s,e)+um(s,n)+dm(s,i)}class gl extends Ze{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bi(t,i.x,r.x,a.x,o.x),bi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fm extends Ze{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bi(t,i.x,r.x,a.x,o.x),bi(t,i.y,r.y,a.y,o.y),bi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _l extends Ze{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pm extends Ze{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends Ze{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ai(t,i.x,r.x,a.x),Ai(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mm extends Ze{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ai(t,i.x,r.x,a.x),Ai(t,i.y,r.y,a.y),Ai(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xl extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ba(o,l.x,c.x,h.x,u.x),ba(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Rr=Object.freeze({__proto__:null,ArcCurve:sm,CatmullRomCurve3:rm,CubicBezierCurve:gl,CubicBezierCurve3:fm,EllipseCurve:zr,LineCurve:_l,LineCurve3:pm,QuadraticBezierCurve:vl,QuadraticBezierCurve3:mm,SplineCurve:xl});class gm extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Rr[i.type]().fromJSON(i))}return this}}class Ra extends gm{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _l(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new vl(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new gl(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new zr(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hr extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mn extends le{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(m,2));function x(){const M=new C,P=new C;let A=0;const b=(e-t)/n;for(let F=0;F<=r;F++){const y=[],w=F/r,N=w*(e-t)+t;for(let k=0;k<=i;k++){const nt=k/i,D=nt*l+o,O=Math.sin(D),H=Math.cos(D);P.x=N*O,P.y=-w*n+p,P.z=N*H,u.push(P.x,P.y,P.z),M.set(O,b,H).normalize(),d.push(M.x,M.y,M.z),m.push(nt,1-w),y.push(g++)}_.push(y)}for(let F=0;F<i;F++)for(let y=0;y<r;y++){const w=_[y][F],N=_[y+1][F],k=_[y+1][F+1],nt=_[y][F+1];h.push(w,N,nt),h.push(N,k,nt),A+=6}c.addGroup(f,A,0),f+=A}function v(M){const P=g,A=new rt,b=new C;let F=0;const y=M===!0?t:e,w=M===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),g++;const N=g;for(let k=0;k<=i;k++){const D=k/i*l+o,O=Math.cos(D),H=Math.sin(D);b.x=y*H,b.y=p*w,b.z=y*O,u.push(b.x,b.y,b.z),d.push(0,w,0),A.x=O*.5+.5,A.y=H*.5*w+.5,m.push(A.x,A.y),g++}for(let k=0;k<i;k++){const nt=P+k,D=N+k;M===!0?h.push(D,D+1,nt):h.push(D+1,D,nt),F+=3}c.addGroup(f,F,M===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends mn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kr extends le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,M=new C,P=new C;for(let A=0;A<e.length;A+=3)m(e[A+0],v),m(e[A+1],M),m(e[A+2],P),l(v,M,P,x)}function l(x,v,M,P){const A=P+1,b=[];for(let F=0;F<=A;F++){b[F]=[];const y=x.clone().lerp(M,F/A),w=v.clone().lerp(M,F/A),N=A-F;for(let k=0;k<=N;k++)k===0&&F===A?b[F][k]=y:b[F][k]=y.clone().lerp(w,k/N)}for(let F=0;F<A;F++)for(let y=0;y<2*(A-F)-1;y++){const w=Math.floor(y/2);y%2===0?(d(b[F][w+1]),d(b[F+1][w]),d(b[F][w])):(d(b[F][w+1]),d(b[F+1][w+1]),d(b[F+1][w]))}}function c(x){const v=new C;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const M=p(x)/2/Math.PI+.5,P=f(x)/Math.PI+.5;a.push(M,1-P)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],M=a[x+2],P=a[x+4],A=Math.max(v,M,P),b=Math.min(v,M,P);A>.9&&b<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function m(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new C,v=new C,M=new C,P=new C,A=new rt,b=new rt,F=new rt;for(let y=0,w=0;y<r.length;y+=9,w+=6){x.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),A.set(a[w+0],a[w+1]),b.set(a[w+2],a[w+3]),F.set(a[w+4],a[w+5]),P.copy(x).add(v).add(M).divideScalar(3);const N=p(P);_(A,w+0,x,N),_(b,w+2,v,N),_(F,w+4,M,N)}}function _(x,v,M,P){P<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=P/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.vertices,t.indices,t.radius,t.details)}}class Cs extends Ra{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ra().fromJSON(i))}return this}}const _m={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ml(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=ym(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Li(r,a,e,o,l,m,0),a}};function Ml(s,t,e,n,i){let r,a;if(i===Im(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Ca(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ca(r,s[r],s[r+1],a);return a&&Ps(a,a.next)&&(Ii(a),a=a.next),a}function Fn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||ee(e.prev,e,e.next)===0)){if(Ii(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Li(s,t,e,n,i,r,a){if(!s)return;!a&&r&&bm(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?xm(s,n,i,r):vm(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ii(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Mm(Fn(s),t,e),Li(s,t,e,n,i,r,2)):a===2&&Sm(s,t,e,n,i,r):Li(Fn(s),t,e,n,i,r,1);break}}}function vm(s){const t=s.prev,e=s,n=s.next;if(ee(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&li(i,o,r,l,a,c,g.x,g.y)&&ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xm(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ee(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=Cr(m,g,t,e,n),x=Cr(_,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=f&&M&&M.z<=x;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&li(o,h,l,u,c,d,v.x,v.y)&&ee(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&li(o,h,l,u,c,d,M.x,M.y)&&ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&li(o,h,l,u,c,d,v.x,v.y)&&ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&li(o,h,l,u,c,d,M.x,M.y)&&ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ps(i,r)&&Sl(i,n,n.next,r)&&Di(i,r)&&Di(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ii(n),Ii(n.next),n=s=r),n=n.next}while(n!==s);return Fn(n)}function Sm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pm(a,o)){let l=yl(a,o);a=Fn(a,a.next),l=Fn(l,l.next),Li(a,t,e,n,i,r,0),Li(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ym(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Ml(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Cm(c));for(i.sort(Em),r=0;r<i.length;r++)e=Tm(i[r],e);return e}function Em(s,t){return s.x-t.x}function Tm(s,t){const e=wm(s,t);if(!e)return t;const n=yl(e,s);return Fn(n,n.next),Fn(e,e.next)}function wm(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&li(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Di(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Am(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Am(s,t){return ee(s.prev,s,t.prev)<0&&ee(t.next,s,s.next)<0}function bm(s,t,e,n){let i=s;do i.z===0&&(i.z=Cr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Rm(i)}function Rm(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Cr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Cm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function li(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Pm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Lm(s,t)&&(Di(s,t)&&Di(t,s)&&Dm(s,t)&&(ee(s.prev,s,t.prev)||ee(s,t.prev,t))||Ps(s,t)&&ee(s.prev,s,s.next)>0&&ee(t.prev,t,t.next)>0)}function ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ps(s,t){return s.x===t.x&&s.y===t.y}function Sl(s,t,e,n){const i=ds(ee(s,t,e)),r=ds(ee(s,t,n)),a=ds(ee(e,n,s)),o=ds(ee(e,n,t));return!!(i!==r&&a!==o||i===0&&us(s,e,t)||r===0&&us(s,n,t)||a===0&&us(e,s,n)||o===0&&us(e,t,n))}function us(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ds(s){return s>0?1:s<0?-1:0}function Lm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Sl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Di(s,t){return ee(s.prev,s,s.next)<0?ee(s,t,s.next)>=0&&ee(s,s.prev,t)>=0:ee(s,t,s.prev)<0||ee(s,s.next,t)<0}function Dm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function yl(s,t){const e=new Pr(s.i,s.x,s.y),n=new Pr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ca(s,t,e,n){const i=new Pr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ii(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Im(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class xn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return xn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Pa(t),La(n,t);let a=t.length;e.forEach(Pa);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,La(n,e[l]);const o=_m.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pa(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function La(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Vr extends le{constructor(t=new Cs([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Um;let v,M=!1,P,A,b,F;f&&(v=f.getSpacedPoints(h),M=!0,d=!1,P=f.computeFrenetFrames(h,!1),A=new C,b=new C,F=new C),d||(p=0,m=0,g=0,_=0);const y=o.extractPoints(c);let w=y.shape;const N=y.holes;if(!xn.isClockWise(w)){w=w.reverse();for(let R=0,at=N.length;R<at;R++){const X=N[R];xn.isClockWise(X)&&(N[R]=X.reverse())}}const nt=xn.triangulateShape(w,N),D=w;for(let R=0,at=N.length;R<at;R++){const X=N[R];w=w.concat(X)}function O(R,at,X){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(at,X)}const H=w.length,Z=nt.length;function Y(R,at,X){let st,W,Et;const pt=R.x-at.x,E=R.y-at.y,S=X.x-R.x,U=X.y-R.y,et=pt*pt+E*E,Q=pt*U-E*S;if(Math.abs(Q)>Number.EPSILON){const K=Math.sqrt(et),xt=Math.sqrt(S*S+U*U),ht=at.x-E/K,_t=at.y+pt/K,wt=X.x-U/xt,Nt=X.y+S/xt,tt=((wt-ht)*U-(Nt-_t)*S)/(pt*U-E*S);st=ht+pt*tt-R.x,W=_t+E*tt-R.y;const Yt=st*st+W*W;if(Yt<=2)return new rt(st,W);Et=Math.sqrt(Yt/2)}else{let K=!1;pt>Number.EPSILON?S>Number.EPSILON&&(K=!0):pt<-Number.EPSILON?S<-Number.EPSILON&&(K=!0):Math.sign(E)===Math.sign(U)&&(K=!0),K?(st=-E,W=pt,Et=Math.sqrt(et)):(st=pt,W=E,Et=Math.sqrt(et/2))}return new rt(st/Et,W/Et)}const q=[];for(let R=0,at=D.length,X=at-1,st=R+1;R<at;R++,X++,st++)X===at&&(X=0),st===at&&(st=0),q[R]=Y(D[R],D[X],D[st]);const J=[];let it,ot=q.concat();for(let R=0,at=N.length;R<at;R++){const X=N[R];it=[];for(let st=0,W=X.length,Et=W-1,pt=st+1;st<W;st++,Et++,pt++)Et===W&&(Et=0),pt===W&&(pt=0),it[st]=Y(X[st],X[Et],X[pt]);J.push(it),ot=ot.concat(it)}for(let R=0;R<p;R++){const at=R/p,X=m*Math.cos(at*Math.PI/2),st=g*Math.sin(at*Math.PI/2)+_;for(let W=0,Et=D.length;W<Et;W++){const pt=O(D[W],q[W],st);gt(pt.x,pt.y,-X)}for(let W=0,Et=N.length;W<Et;W++){const pt=N[W];it=J[W];for(let E=0,S=pt.length;E<S;E++){const U=O(pt[E],it[E],st);gt(U.x,U.y,-X)}}}const V=g+_;for(let R=0;R<H;R++){const at=d?O(w[R],ot[R],V):w[R];M?(b.copy(P.normals[0]).multiplyScalar(at.x),A.copy(P.binormals[0]).multiplyScalar(at.y),F.copy(v[0]).add(b).add(A),gt(F.x,F.y,F.z)):gt(at.x,at.y,0)}for(let R=1;R<=h;R++)for(let at=0;at<H;at++){const X=d?O(w[at],ot[at],V):w[at];M?(b.copy(P.normals[R]).multiplyScalar(X.x),A.copy(P.binormals[R]).multiplyScalar(X.y),F.copy(v[R]).add(b).add(A),gt(F.x,F.y,F.z)):gt(X.x,X.y,u/h*R)}for(let R=p-1;R>=0;R--){const at=R/p,X=m*Math.cos(at*Math.PI/2),st=g*Math.sin(at*Math.PI/2)+_;for(let W=0,Et=D.length;W<Et;W++){const pt=O(D[W],q[W],st);gt(pt.x,pt.y,u+X)}for(let W=0,Et=N.length;W<Et;W++){const pt=N[W];it=J[W];for(let E=0,S=pt.length;E<S;E++){const U=O(pt[E],it[E],st);M?gt(U.x,U.y+v[h-1].y,v[h-1].x+X):gt(U.x,U.y,u+X)}}}$(),ft();function $(){const R=i.length/3;if(d){let at=0,X=H*at;for(let st=0;st<Z;st++){const W=nt[st];Rt(W[2]+X,W[1]+X,W[0]+X)}at=h+p*2,X=H*at;for(let st=0;st<Z;st++){const W=nt[st];Rt(W[0]+X,W[1]+X,W[2]+X)}}else{for(let at=0;at<Z;at++){const X=nt[at];Rt(X[2],X[1],X[0])}for(let at=0;at<Z;at++){const X=nt[at];Rt(X[0]+H*h,X[1]+H*h,X[2]+H*h)}}n.addGroup(R,i.length/3-R,0)}function ft(){const R=i.length/3;let at=0;Mt(D,at),at+=D.length;for(let X=0,st=N.length;X<st;X++){const W=N[X];Mt(W,at),at+=W.length}n.addGroup(R,i.length/3-R,1)}function Mt(R,at){let X=R.length;for(;--X>=0;){const st=X;let W=X-1;W<0&&(W=R.length-1);for(let Et=0,pt=h+p*2;Et<pt;Et++){const E=H*Et,S=H*(Et+1),U=at+st+E,et=at+W+E,Q=at+W+S,K=at+st+S;It(U,et,Q,K)}}}function gt(R,at,X){l.push(R),l.push(at),l.push(X)}function Rt(R,at,X){St(R),St(at),St(X);const st=i.length/3,W=x.generateTopUV(n,i,st-3,st-2,st-1);Lt(W[0]),Lt(W[1]),Lt(W[2])}function It(R,at,X,st){St(R),St(at),St(st),St(at),St(X),St(st);const W=i.length/3,Et=x.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);Lt(Et[0]),Lt(Et[1]),Lt(Et[3]),Lt(Et[1]),Lt(Et[2]),Lt(Et[3])}function St(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function Lt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Rr[i.type]().fromJSON(i)),new Vr(n,t.options)}}const Um={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-u),new rt(d,1-g),new rt(_,1-f)]:[new rt(o,1-l),new rt(h,1-u),new rt(m,1-g),new rt(p,1-f)]}};function Nm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wr extends kr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wr(t.radius,t.detail)}}class Xr extends le{constructor(t=new Cs([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;xn.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const x=g[p];xn.isClockWise(x)===!0&&(g[p]=x.reverse())}const _=xn.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const x=g[p];m=m.concat(x)}for(let p=0,f=m.length;p<f;p++){const x=m[p];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let p=0,f=_.length;p<f;p++){const x=_[p],v=x[0]+u,M=x[1]+u,P=x[2]+u;n.push(v,M,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Om(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Xr(n,t.curveSegments)}}function Om(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ye extends le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+M,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],M=h[f][x],P=h[f+1][x],A=h[f+1][x+1];(f!==0||a>0)&&m.push(v,M,A),(f!==n-1||l<Math.PI)&&m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Es extends le{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,x=(i+1)*m+g;a.push(_,p,x),a.push(p,f,x)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oe extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fm extends ml{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class El extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const _r=new se,Da=new C,Ia=new C;class Bm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Da.setFromMatrixPosition(t.matrixWorld),e.position.copy(Da),Ia.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ia),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zm extends Bm{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends El{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new zm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hm extends El{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class km{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ua(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ua();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ua(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lr);const ni={houses:[{x:-20,z:-20,radius:2.5},{x:20,z:-20,radius:2.5},{x:-20,z:20,radius:2},{x:25,z:15,radius:2}],walls:[]},j={WORLD_SIZE:100,PLAYER_SPEED:8,PLAYER_RADIUS:.5,CAMERA_DISTANCE:4.5,CAMERA_HEIGHT:2.2,CAMERA_OFFSET_RIGHT:2.2,MOUSE_SENSITIVITY:.002,TOUCH_SENSITIVITY:.005,GAMEPAD_SENSITIVITY:.004,GAMEPAD_LOOK_SPEED:2,JOYSTICK_DEADZONE:.1,NETWORK_TICK_RATE:30,PLAYER_MAX_HP:100,SNOWBALL_DAMAGE:10,SNOWBALL_HEADSHOT_DAMAGE:25,CHARGED_SNOWBALL_DAMAGE:15,CHARGED_SNOWBALL_HEADSHOT_DAMAGE:40,CHARGED_KNOCKBACK_DISTANCE:2,HEAD_HIT_Y:2.1,GRID_CELL_SIZE:1,MAX_SNOW_UNIT:24,SNOW_RECOVERY_RATE:1,SNOW_RECOVERY_INTERVAL:3,SNOWBALL_COST:3,GATHER_DURATION:2,MIN_GATHER_DURATION:.8,GATHER_SPEEDUP_THRESHOLD:5,GATHER_SPEEDUP_PER_BALL:.1,MAX_SNOWBALLS:20,SNOW_THRESHOLD_FULL:12,SNOW_THRESHOLD_HALF:6,SNOW_THRESHOLD_SPARSE:1,COLOR_SNOW_FULL:16777215,COLOR_SNOW_HALF:13948128,COLOR_SNOW_SPARSE:11053240,COLOR_DIRT:9139029,THROW_SPEED:15,THROW_GRAVITY:20,THROW_CHARGE_TIME:1.5,THROW_CHARGED_SPEED_MULTIPLIER:2,THROW_TRAIL_LIFETIME:.3,THROW_SNOW_GROUND_BONUS:3,THROW_SNOWBALL_RADIUS:.15,WALL_COUNT:20,WALL_WIDTH:4,WALL_HEIGHT:1.5,WALL_THICKNESS:.5,WALL_MAX_SNOW_UNIT:50,WALL_SNOW_RECOVERY_RATE:.5,WALL_GATHER_RANGE:2,WALL_MIN_GAP:4},ii={PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYER_MOVE:"player_move",WORLD_STATE:"world_state",WELCOME:"welcome",PLAYER_NAME_UPDATE:"player_name_update"},Ie={SNOW:16777215,SNOW_HOUSE:15790335,TREE_TRUNK:9127187,CARROT:16737792,COAL:1710618,WALL:14739696,WALL_SNOW:16119295,CORE:16720418};class Vm{constructor(t){this.canvas=t,this.keys={},this.isPointerLocked=!1,this.pointerLockAvailable=!0,this.mouse={deltaX:0,deltaY:0},this.touch={moveJoystick:{active:!1,x:0,y:0,touchId:null},lookJoystick:{active:!1,x:0,y:0,touchId:null}},this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.gamepad={moveJoystick:{active:!1,x:0,y:0},lookJoystick:{active:!1,x:0,y:0}},this.gamepadConnected=!1,this.sprintPressed=!1,this.touchSprintPressed=!1,this.gatherPressed=!1,this.touchGatherPressed=!1,this.throwPressed=!1,this.throwPressStartTime=0,this.touchThrowPressed=!1,this._initKeyboard(),this._initMouse(),this._initGamepad(),this.isTouchDevice&&this._initTouch()}_initKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="Space"&&(t.preventDefault(),this.sprintPressed=!0)}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="Space"&&(this.sprintPressed=!1)})}_onPointerLockFailed(){this.pointerLockAvailable=!1;const t=document.getElementById("pointer-lock-hint");t&&(t.textContent="请在新标签页中打开以启用鼠标控制视角")}_requestPointerLock(){if(!(this.isPointerLocked||this.isTouchDevice||!this.pointerLockAvailable))try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{this._onPointerLockFailed()})}catch{this._onPointerLockFailed()}}_initMouse(){this.canvas.addEventListener("click",()=>{this._requestPointerLock()}),this.canvas.addEventListener("mousedown",e=>{e.button===2&&(this.gatherPressed=!0),e.button===0&&this.isPointerLocked&&(this.throwPressed=!0,this.throwPressStartTime=Date.now())}),this.canvas.addEventListener("mouseup",e=>{e.button===2&&(this.gatherPressed=!1),e.button===0&&(this.throwPressed=!1)});const t=document.getElementById("pointer-lock-hint");t&&t.addEventListener("click",()=>{this.pointerLockAvailable?this._requestPointerLock():window.open(window.location.href,"_blank")}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.canvas;const e=document.getElementById("pointer-lock-hint");e&&(this.isPointerLocked?e.classList.remove("active"):e.classList.add("active"))}),document.addEventListener("pointerlockerror",()=>{this._onPointerLockFailed()}),document.addEventListener("mousemove",e=>{this.isPointerLocked&&(this.mouse.deltaX-=e.movementX*j.MOUSE_SENSITIVITY,this.mouse.deltaY-=e.movementY*j.MOUSE_SENSITIVITY*.8)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}_initTouch(){const t=document.getElementById("move-joystick"),e=document.getElementById("move-knob"),n=document.getElementById("look-joystick"),i=document.getElementById("look-knob");if(!t||!n)return;const r=(c,h,u)=>{let d=0,m=0;c.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation();const p=_.changedTouches[0];u.touchId=p.identifier,u.active=!0,d=p.clientX,m=p.clientY},{passive:!1}),c.addEventListener("touchmove",_=>{if(_.preventDefault(),_.stopPropagation(),!u.active)return;const p=this._findTouch(_.changedTouches,u.touchId);if(!p)return;const f=40;let x=p.clientX-d,v=p.clientY-m;const M=Math.sqrt(x*x+v*v);M>f&&(x=x/M*f,v=v/M*f),u.x=x/f,u.y=v/f,Math.abs(u.x)<j.JOYSTICK_DEADZONE&&(u.x=0),Math.abs(u.y)<j.JOYSTICK_DEADZONE&&(u.y=0),h.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${v}px))`},{passive:!1});const g=_=>{_.preventDefault(),this._findTouch(_.changedTouches,u.touchId)&&(u.active=!1,u.x=0,u.y=0,u.touchId=null,h.style.transform="translate(-50%, -50%)")};c.addEventListener("touchend",g,{passive:!1}),c.addEventListener("touchcancel",g,{passive:!1})};r(t,e,this.touch.moveJoystick),r(n,i,this.touch.lookJoystick);const a=document.getElementById("sprint-btn");if(a){const c=d=>{d?a.classList.add("sprinting"):a.classList.remove("sprinting")};a.addEventListener("touchstart",d=>{d.preventDefault(),d.stopPropagation(),this.setTouchSprintPressed(!0),c(!0)},{passive:!1});const h=d=>{d.preventDefault(),this.setTouchSprintPressed(!1),c(!1)};a.addEventListener("touchend",h,{passive:!1}),a.addEventListener("touchcancel",h,{passive:!1}),a.addEventListener("mousedown",d=>{d.preventDefault(),this.setTouchSprintPressed(!0),c(!0)});const u=()=>{this.setTouchSprintPressed(!1),c(!1)};a.addEventListener("mouseup",u),a.addEventListener("mouseleave",u)}const o=document.getElementById("gather-btn");if(o){const c=d=>{d?o.classList.add("gathering"):o.classList.remove("gathering")};o.addEventListener("touchstart",d=>{d.preventDefault(),d.stopPropagation(),this.setTouchGatherPressed(!0),c(!0)},{passive:!1});const h=d=>{d.preventDefault(),this.setTouchGatherPressed(!1),c(!1)};o.addEventListener("touchend",h,{passive:!1}),o.addEventListener("touchcancel",h,{passive:!1}),o.addEventListener("mousedown",d=>{d.preventDefault(),this.setTouchGatherPressed(!0),c(!0)});const u=()=>{this.setTouchGatherPressed(!1),c(!1)};o.addEventListener("mouseup",u),o.addEventListener("mouseleave",u)}const l=document.getElementById("throw-btn");if(l){const c=d=>{d?l.classList.add("throwing"):l.classList.remove("throwing")};l.addEventListener("touchstart",d=>{d.preventDefault(),d.stopPropagation(),this.setTouchThrowPressed(!0),c(!0)},{passive:!1});const h=d=>{d.preventDefault(),this.setTouchThrowPressed(!1),c(!1)};l.addEventListener("touchend",h,{passive:!1}),l.addEventListener("touchcancel",h,{passive:!1}),l.addEventListener("mousedown",d=>{d.preventDefault(),this.setTouchThrowPressed(!0),c(!0)});const u=()=>{this.setTouchThrowPressed(!1),c(!1)};l.addEventListener("mouseup",u),l.addEventListener("mouseleave",u)}}_findTouch(t,e){for(let n=0;n<t.length;n++)if(t[n].identifier===e)return t[n];return null}_initGamepad(){window.addEventListener("gamepadconnected",t=>{this.gamepadConnected=!0,console.log("游戏手柄已连接:",t.gamepad.id)}),window.addEventListener("gamepaddisconnected",t=>{this.gamepadConnected=!1,console.log("游戏手柄已断开:",t.gamepad.id)})}_updateGamepadState(){if(!this.gamepadConnected)return;const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(let o=0;o<t.length;o++)if(t[o]){e=t[o];break}if(!e){this.gamepad.moveJoystick.x=0,this.gamepad.moveJoystick.y=0,this.gamepad.lookJoystick.x=0,this.gamepad.lookJoystick.y=0;return}let n=e.axes[0],i=e.axes[1],r=e.axes[2],a=e.axes[3];Math.abs(n)<j.JOYSTICK_DEADZONE&&(n=0),Math.abs(i)<j.JOYSTICK_DEADZONE&&(i=0),Math.abs(r)<j.JOYSTICK_DEADZONE&&(r=0),Math.abs(a)<j.JOYSTICK_DEADZONE&&(a=0),this.gamepad.moveJoystick.x=n,this.gamepad.moveJoystick.y=i,this.gamepad.lookJoystick.x=r,this.gamepad.lookJoystick.y=a,this.gamepad.moveJoystick.active=n!==0||i!==0,this.gamepad.lookJoystick.active=r!==0||a!==0,this.gamepad.buttonA=e.buttons[0]?e.buttons[0].pressed:!1,this.gamepad.buttonLT=e.buttons[6]?e.buttons[6].pressed:!1,this.gamepad.buttonRT=e.buttons[7]?e.buttons[7].pressed:!1,this.gamepad.buttonRT&&!this.gamepad.buttonRTPrev&&(this.throwPressStartTime=Date.now()),this.gamepad.buttonRTPrev=this.gamepad.buttonRT}isSprintPressed(){return this.isTouchDevice?this.touchSprintPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonA?!0:this.sprintPressed)}isGatherPressed(){return this.isTouchDevice?this.touchGatherPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonLT?!0:this.gatherPressed)}isThrowPressed(){return this.isTouchDevice?this.touchThrowPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonRT?!0:this.throwPressed)}getThrowChargeTime(){return this.isThrowPressed()?(Date.now()-this.throwPressStartTime)/1e3:0}resetThrowCharge(){this.throwPressStartTime=Date.now()}setTouchSprintPressed(t){this.touchSprintPressed=t}setTouchGatherPressed(t){this.touchGatherPressed=t}setTouchThrowPressed(t){t&&!this.touchThrowPressed&&(this.throwPressStartTime=Date.now()),this.touchThrowPressed=t}getMovementInput(){if(this.isTouchDevice){const t=this.touch.moveJoystick.x,e=this.touch.moveJoystick.y;return{forward:e<0?-e:0,backward:e>0?e:0,left:t<0?-t:0,right:t>0?t:0}}if(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.moveJoystick.active){const t=this.gamepad.moveJoystick.x,e=this.gamepad.moveJoystick.y;return{forward:e<0?-e:0,backward:e>0?e:0,left:t<0?-t:0,right:t>0?t:0}}return{forward:this.keys.KeyW||this.keys.ArrowUp?1:0,backward:this.keys.KeyS||this.keys.ArrowDown?1:0,left:this.keys.KeyA||this.keys.ArrowLeft?1:0,right:this.keys.KeyD||this.keys.ArrowRight?1:0}}getLookInput(){if(this.isTouchDevice)return{yaw:-this.touch.lookJoystick.x*j.TOUCH_SENSITIVITY*10,pitch:-this.touch.lookJoystick.y*j.TOUCH_SENSITIVITY*10*.8};if(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.lookJoystick.active)return{yaw:-this.gamepad.lookJoystick.x*j.GAMEPAD_SENSITIVITY*j.GAMEPAD_LOOK_SPEED*100*.25,pitch:-this.gamepad.lookJoystick.y*j.GAMEPAD_SENSITIVITY*j.GAMEPAD_LOOK_SPEED*100*.8};const t={yaw:this.mouse.deltaX,pitch:this.mouse.deltaY};return this.mouse.deltaX=0,this.mouse.deltaY=0,t}requestPointerLock(){this._requestPointerLock()}exitPointerLock(){this.isPointerLocked&&document.exitPointerLock()}showTouchControls(t){const e=document.getElementById("touch-controls");t&&this.isTouchDevice?e.classList.add("active"):e.classList.remove("active")}showPointerLockHint(t){if(this.isTouchDevice)return;const e=document.getElementById("pointer-lock-hint");e&&(t?e.classList.add("active"):e.classList.remove("active"))}}class Wm{constructor(t){this.scene=t,this.cellSize=j.GRID_CELL_SIZE,this.maxSU=j.MAX_SNOW_UNIT,this.worldSize=j.WORLD_SIZE,this.gridCount=Math.floor(this.worldSize/this.cellSize),this.halfWorld=this.worldSize/2,this.snowUnits=[],this.cellMeshes=[],this.recoveryTimer=0,this._initGrid(),this._createGroundMeshes()}_initGrid(){for(let t=0;t<this.gridCount;t++){this.snowUnits[t]=[],this.cellMeshes[t]=[];for(let e=0;e<this.gridCount;e++)this.snowUnits[t][e]=this.maxSU}}_getColorForSU(t){return t>=j.SNOW_THRESHOLD_FULL?j.COLOR_SNOW_FULL:t>=j.SNOW_THRESHOLD_HALF?j.COLOR_SNOW_HALF:t>=j.SNOW_THRESHOLD_SPARSE?j.COLOR_SNOW_SPARSE:j.COLOR_DIRT}_createGroundMeshes(){const t=new mi(this.cellSize,this.cellSize);for(let e=0;e<this.gridCount;e++)for(let n=0;n<this.gridCount;n++){const i=new oe({color:this._getColorForSU(this.maxSU),roughness:.9,metalness:0}),r=new Ft(t,i);r.rotation.x=-Math.PI/2,r.receiveShadow=!0;const a=-this.halfWorld+e*this.cellSize+this.cellSize/2,o=-this.halfWorld+n*this.cellSize+this.cellSize/2;r.position.set(a,0,o),this.scene.add(r),this.cellMeshes[e][n]=r}}_worldToGrid(t,e){const n=Math.floor((t+this.halfWorld)/this.cellSize),i=Math.floor((e+this.halfWorld)/this.cellSize);return{x:n,z:i}}_isValidGrid(t,e){return t>=0&&t<this.gridCount&&e>=0&&e<this.gridCount}getSU(t,e){const{x:n,z:i}=this._worldToGrid(t,e);return this._isValidGrid(n,i)?this.snowUnits[n][i]:0}setSU(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e);if(!this._isValidGrid(i,r))return;const a=Math.max(0,Math.min(this.maxSU,n));this.snowUnits[i][r]=a,this._updateCellVisual(i,r)}consumeSU(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e);if(!this._isValidGrid(i,r))return 0;const a=this.snowUnits[i][r],o=Math.min(a,n);return this.snowUnits[i][r]-=o,this._updateCellVisual(i,r),o}_updateCellVisual(t,e){if(!this._isValidGrid(t,e))return;const n=this.snowUnits[t][e],i=this.cellMeshes[t][e];i&&(i.material.color.setHex(this._getColorForSU(n)),i.material.needsUpdate=!0)}getSurroundingCells(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e),a={x:Math.sin(n),z:Math.cos(n)},o={x:Math.cos(n),z:-Math.sin(n)},l=[];l.push({gridX:i,gridZ:r,priority:0});for(let m=-1;m<=1;m++){const g=Math.round(a.x*1+o.x*m),_=Math.round(a.z*1+o.z*m);l.push({gridX:i+g,gridZ:r+_,priority:1})}const c=Math.round(-o.x*1),h=Math.round(-o.z*1),u=Math.round(o.x*1),d=Math.round(o.z*1);return l.push({gridX:i+c,gridZ:r+h,priority:2}),l.push({gridX:i+u,gridZ:r+d,priority:2}),l.filter(m=>this._isValidGrid(m.gridX,m.gridZ))}tryGatherSnow(t,e,n,i){const r=this.getSurroundingCells(t,e,n);r.sort((l,c)=>l.priority-c.priority);let a=i;for(const l of r){if(a<=0)break;const c=this.snowUnits[l.gridX][l.gridZ];if(c>0){const h=Math.min(c,a);this.snowUnits[l.gridX][l.gridZ]-=h,this._updateCellVisual(l.gridX,l.gridZ),a-=h}}return i-a>=i}update(t){if(this.recoveryTimer+=t,this.recoveryTimer>=j.SNOW_RECOVERY_INTERVAL){this.recoveryTimer=0;const e=j.SNOW_RECOVERY_RATE;for(let n=0;n<this.gridCount;n++)for(let i=0;i<this.gridCount;i++)this.snowUnits[n][i]<this.maxSU&&(this.snowUnits[n][i]=Math.min(this.maxSU,this.snowUnits[n][i]+e),this._updateCellVisual(n,i))}}}class Xm{constructor(t){this.scene=t,this.colliders=[],this.walls=[],this.gridGround=new Wm(t),this._generateWallPositions(),this._createSnowHouses(),this._createWalls(),this._createLighting(),this._createFog()}_seededRandom(t){const e=Math.sin(t)*1e4;return e-Math.floor(e)}_generateWallPositions(){if(ni.walls.length>0)return;const t=[],e=j.WALL_COUNT,n=j.WORLD_SIZE*.8;let i=54321;for(let r=0;r<e;r++){let a,o,l,c=!0,h=0;do{i++,a=(this._seededRandom(i)-.5)*n,i++,o=(this._seededRandom(i)-.5)*n,i++,l=this._seededRandom(i)*Math.PI,c=!0,h++;for(const u of t)if(Math.sqrt((a-u.x)**2+(o-u.z)**2)<j.WALL_MIN_GAP){c=!1;break}if(c){for(const u of ni.houses)if(Math.sqrt((a-u.x)**2+(o-u.z)**2)<u.radius+j.WALL_MIN_GAP){c=!1;break}}if(c&&Math.sqrt(a*a+o*o)<8&&(c=!1),c){const u={x:a,z:o,angle:l,width:j.WALL_WIDTH,thickness:j.WALL_THICKNESS};this._wouldCreateDeadEnd(u,t)&&(c=!1)}}while(!c&&h<100);if(c){const u={x:a,z:o,angle:l,width:j.WALL_WIDTH,thickness:j.WALL_THICKNESS,height:j.WALL_HEIGHT,snowUnits:j.WALL_MAX_SNOW_UNIT};t.push(u)}}ni.walls=t}_wouldCreateDeadEnd(t,e){const i=j.WORLD_SIZE/2,r=Math.floor(j.WORLD_SIZE/2),a=new Set;for(const g of ni.houses){const _=Math.floor((g.x+i)/2),p=Math.floor((g.z+i)/2),f=Math.ceil(g.radius/2);for(let x=-f;x<=f;x++)for(let v=-f;v<=f;v++)a.add(`${_+x},${p+v}`)}const o=[...e,t];for(const g of o)this._markWallCells(g,a,2,i);const l=Math.floor(i/2),c=Math.floor(i/2);if(a.has(`${l},${c}`))return!0;const h=new Set,u=[`${l},${c}`];h.add(`${l},${c}`);const d=new Set;for(let g=0;g<r;g++)for(let _=0;_<r;_++)d.add(`${g},${_}`);for(;u.length>0;){const g=u.shift(),[_,p]=g.split(",").map(Number),f=[`${_-1},${p}`,`${_+1},${p}`,`${_},${p-1}`,`${_},${p+1}`];for(const x of f){if(h.has(x)||a.has(x))continue;const[v,M]=x.split(",").map(Number);v<0||v>=r||M<0||M>=r||(h.add(x),u.push(x))}}const m=r*r-a.size;return h.size<m*.9}_markWallCells(t,e,n,i){const r=Math.cos(t.angle),a=Math.sin(t.angle),o=t.width/2,l=t.thickness/2,h=[{dx:-o,dz:-l},{dx:o,dz:-l},{dx:o,dz:l},{dx:-o,dz:l}].map(M=>({x:t.x+M.dx*r-M.dz*a,z:t.z+M.dx*a+M.dz*r}));let u=1/0,d=-1/0,m=1/0,g=-1/0;for(const M of h)u=Math.min(u,M.x),d=Math.max(d,M.x),m=Math.min(m,M.z),g=Math.max(g,M.z);const _=.5,p=Math.floor((u-_+i)/n),f=Math.ceil((d+_+i)/n),x=Math.floor((m-_+i)/n),v=Math.ceil((g+_+i)/n);for(let M=p;M<=f;M++)for(let P=x;P<=v;P++){const A=M*n-i+n/2,b=P*n-i+n/2;this._pointInWallRect(A,b,t)&&e.add(`${M},${P}`)}}_pointInWallRect(t,e,n){const i=Math.cos(-n.angle),r=Math.sin(-n.angle),a=t-n.x,o=e-n.z,l=a*i-o*r,c=a*r+o*i,h=.3;return Math.abs(l)<=n.width/2+h&&Math.abs(c)<=n.thickness/2+h}_createSnowHouses(){ni.houses.forEach((t,e)=>{this._createSnowHouse(t.x,t.z,e%2===0?1:.8)})}_createSnowHouse(t,e,n=1){const i=new sn;i.position.set(t,0,e),i.scale.setScalar(n);const r=new mn(2,2.5,2,16),a=new oe({color:Ie.SNOW_HOUSE,roughness:.7,metalness:0}),o=new Ft(r,a);o.position.y=1,o.castShadow=!0,o.receiveShadow=!0;const l=new Rs(2.8,2,16),c=new oe({color:15263999,roughness:.6}),h=new Ft(l,c);h.position.y=3,h.castShadow=!0;const u=new Cs;u.moveTo(-.5,0),u.lineTo(-.5,1.2),u.quadraticCurveTo(0,1.5,.5,1.2),u.lineTo(.5,0),u.lineTo(-.5,0);const d={depth:.1,bevelEnabled:!1},m=new Vr(u,d),g=new oe({color:9127187,roughness:.8}),_=new Ft(m,g);_.position.set(0,.1,2.45),_.rotation.x=-Math.PI/2;const p=new Hr(.3,16),f=new oe({color:16777164,emissive:16777130,emissiveIntensity:.3}),x=new Ft(p,f);x.position.set(1.5,1.5,2),x.rotation.y=-Math.PI/2;const v=new Ft(p,f.clone());v.position.set(-1.5,1.5,2),v.rotation.y=Math.PI/2,i.add(o),i.add(h),i.add(_),i.add(x),i.add(v),this.scene.add(i),this.colliders.push({type:"cylinder",x:t,z:e,radius:2.5*n})}_createWalls(){ni.walls.forEach(t=>{this._createWall(t)})}_createWall(t){const{x:e,z:n,angle:i,width:r,thickness:a,height:o,snowUnits:l}=t,c=new sn;c.position.set(e,0,n),c.rotation.y=i;const h=new an(r,o,a),u=new oe({color:Ie.WALL,roughness:.8,metalness:.05}),d=new Ft(h,u);d.position.y=o/2,d.castShadow=!0,d.receiveShadow=!0;const m=l/j.WALL_MAX_SNOW_UNIT,g=o*.3*m,_=new an(r+.2,Math.max(.05,g),a+.2),p=new oe({color:Ie.WALL_SNOW,roughness:.7,metalness:0}),f=new Ft(_,p);f.position.y=o+g/2,f.castShadow=!0,c.add(d),c.add(f),this.scene.add(c);const x={...t,group:c,wallMesh:d,snowMesh:f,snowUnits:l};this.walls.push(x),this.colliders.push({type:"wall",x:e,z:n,angle:i,width:r,thickness:a,wall:x})}updateWalls(t){if(this.walls.length!==0)for(const e of this.walls){e.snowUnits<j.WALL_MAX_SNOW_UNIT&&(e.snowUnits=Math.min(j.WALL_MAX_SNOW_UNIT,e.snowUnits+j.WALL_SNOW_RECOVERY_RATE*t));const n=e.snowUnits/j.WALL_MAX_SNOW_UNIT;e.height*.3*n,e.snowMesh&&(e.snowMesh.scale.y=Math.max(.01,n),e.snowMesh.position.y=e.height+e.height*.3*n/2)}}tryGatherFromWall(t,e,n,i){const r={x:Math.sin(n),z:Math.cos(n)},a=j.WALL_GATHER_RANGE;let o=null,l=1/0;for(const c of this.walls){const h=t-c.x,u=e-c.z,d=Math.sqrt(h*h+u*u);if(d>c.width/2+a)continue;const m=c.x-t,g=c.z-e;r.x*m+r.z*g<=0||d<l&&(l=d,o=c)}if(o&&o.snowUnits>=i)return o.snowUnits-=i,i;if(o&&o.snowUnits>0){const c=o.snowUnits;return o.snowUnits=0,c}return 0}checkCollision(t,e,n){const i=j.WORLD_SIZE/2;if(t<-i+n||t>i-n||e<-i+n||e>i-n)return!0;for(const r of this.colliders)if(r.type==="cylinder"){if(Math.sqrt((t-r.x)**2+(e-r.z)**2)<r.radius+n)return!0}else if(r.type==="wall"&&this._pointInWallRect(t,e,r))return!0;return!1}_createLighting(){const t=new Hm(16777215,.6);this.scene.add(t);const e=new Gm(16777215,.8);e.position.set(20,30,20),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,this.scene.add(e)}_createFog(){this.scene.fog=new Br(13691135,30,80),this.scene.background=new Xt(8900331)}}class fs{constructor(t,e=!1,n="blue",i=!1,r="",a=!1,o="blue"){this.scene=t,this.isLocalPlayer=e,this.team=n,this.isAI=a,this.localTeam=o,this.group=new sn,this.yaw=0,this.pitch=0,this.camera=null,this.hp=j.PLAYER_MAX_HP,this.maxHp=j.PLAYER_MAX_HP,this.isDead=!1,this.isHit=!1,this.hitTimer=0,this.hitDuration=.3,this.coreFlashTimer=0,this.knockbackActive=!1,this.knockbackVelocity=new C(0,0,0),this.knockbackDecay=6,this.knockbackMinSpeed=.5,this.bodyMeshes=[],this.faceMeshes=[],this.accessoryMeshes=[],this.outlineMeshes=[],this.speedMultiplier=1,this.snowballCount=5,this.deathCoreMesh=null,this.respawnTimer=0,this.isRespawning=!1,this._createBody(),this._createHead(),this._createFace(),this._createArms(),this._createScarf(),this._createHat(),this._createCore(),this._createIndicator(i,r,a),t.add(this.group),this.collider={type:"cylinder",x:0,z:0,radius:.75,snowman:this}}_createBody(){const t=new Ye(.75,32,32),e=new Ye(.58,32,32),n=new Ye(.45,32,32),i=new oe({color:Ie.SNOW,roughness:.85,metalness:.05});this.bottomSphere=new Ft(t,i),this.bottomSphere.position.y=.75,this.bottomSphere.castShadow=!0,this.bottomSphere.receiveShadow=!0,this.middleSphere=new Ft(e,i.clone()),this.middleSphere.position.y=1.7,this.middleSphere.castShadow=!0,this.middleSphere.receiveShadow=!0,this.headSphere=new Ft(n,i.clone()),this.headSphere.position.y=2.55,this.headSphere.castShadow=!0,this.headSphere.receiveShadow=!0,this.bodyMeshes=[this.bottomSphere,this.middleSphere,this.headSphere],this.group.add(this.bottomSphere),this.group.add(this.middleSphere),this.group.add(this.headSphere);const r=new Ye(.06,16,16),a=new oe({color:Ie.COAL,roughness:.3});for(let o=0;o<3;o++){const l=new Ft(r,a);l.position.set(0,1.75-o*.22,.52),this.group.add(l),this.faceMeshes.push(l)}}_createHead(){this.headGroup=new sn,this.headGroup.position.copy(this.headSphere.position),this.group.add(this.headGroup)}_createFace(){const t=new Ye(.08,16,16),e=new oe({color:Ie.COAL,roughness:.3}),n=new Ft(t,e);n.position.set(-.15,2.65,.38);const i=new Ft(t,e);i.position.set(.15,2.65,.38);const r=new Rs(.08,.4,16),a=new oe({color:Ie.CARROT,roughness:.6});this.nose=new Ft(r,a),this.nose.position.set(0,2.5,.55),this.nose.rotation.x=Math.PI/2;const o=new Es(.1,.03,8,16,Math.PI),l=new oe({color:Ie.COAL,roughness:.3}),c=new Ft(o,l);c.position.set(0,2.35,.4),c.rotation.x=Math.PI,c.rotation.z=Math.PI,this.faceMeshes.push(n,i,this.nose,c),this.group.add(n),this.group.add(i),this.group.add(this.nose),this.group.add(c)}_createArms(){const t=new mn(.035,.025,1.1,8),e=new oe({color:Ie.TREE_TRUNK,roughness:.9}),n=new Ft(t,e);n.position.set(-.55,1.7,0),n.rotation.z=Math.PI/5,n.castShadow=!0;const i=new Ft(t,e.clone());i.position.set(.55,1.7,0),i.rotation.z=-Math.PI/5,i.castShadow=!0;const r=new Ye(.05,8,8),a=new oe({color:5913899,roughness:.8}),o=new Ft(r,a);o.position.set(-.75,1.45,0);const l=new Ft(r,a.clone());l.position.set(.75,1.45,0),this.accessoryMeshes.push(n,i,o,l),this.group.add(n),this.group.add(i),this.group.add(o),this.group.add(l)}_createScarf(){let t;this.isAI?t=this.team==="blue"?1981023:9136404:t=this.team==="blue"?4886745:14240330;const e=new Es(.45,.08,16,32),n=new oe({color:t,roughness:.7,metalness:.1}),i=new Ft(e,n);i.position.set(0,2.1,0),i.rotation.x=Math.PI/2,i.castShadow=!0;const r=new an(.15,.4,.08),a=new Ft(r,n.clone());a.position.set(.15,1.85,.4),a.rotation.z=-.3,a.castShadow=!0,this.accessoryMeshes.push(i,a),this.group.add(i),this.group.add(a)}_createHat(){const t=new mn(.4,.4,.05,32),e=new mn(.28,.28,.45,32),n=2899536;let i;this.isAI?i=this.team==="blue"?1981023:9136404:i=this.team==="blue"?4886745:14240330;const r=new oe({color:n,roughness:.5,metalness:.1}),a=new oe({color:i,roughness:.6,metalness:.2}),o=new Ft(t,r);o.position.y=2.9,o.castShadow=!0;const l=new Ft(e,r.clone());l.position.y=3.15,l.castShadow=!0;const c=new mn(.29,.29,.08,32),h=new Ft(c,a);h.position.y=2.95,h.castShadow=!0,this.accessoryMeshes.push(o,l,h),this.group.add(o),this.group.add(l),this.group.add(h)}_createCore(){const t=new Ye(.15,16,16),e=new oe({color:Ie.CORE,emissive:Ie.CORE,emissiveIntensity:.6,roughness:.2,metalness:.6,transparent:!0,opacity:0});this.coreMesh=new Ft(t,e),this.coreMesh.position.set(0,2.55,0),this.group.add(this.coreMesh)}setPosition(t,e,n){this.group.position.set(t,e,n)}getPosition(){return this.group.position.clone()}setRotation(t){this.yaw=t,this.group.rotation.y=t}getRotation(){return this.yaw}updateLookRotation(t){this.pitch=Math.max(-.5,Math.min(.5,t)),this.headGroup.rotation.x=-this.pitch*.5}setCamera(t){this.camera=t}takeDamage(t,e=!1){if(this.isDead)return;this.hp=Math.max(0,this.hp-t),this.isHit=!0,this.hitTimer=this.hitDuration,[this.bottomSphere,this.middleSphere,this.headSphere].forEach(i=>{i.material&&(i.material.emissive=new Xt(e?16711680:16739179),i.material.emissiveIntensity=e?.8:.5)}),this._updateTransparency(),this.hp<=0&&(this.isDead=!0,this._onDeath())}_onDeath(){this._createDeathCore(),this._setVisibility(!1),this.isRespawning=!0,this.respawnTimer=5,this.knockbackActive=!1}_createDeathCore(){this.deathCoreMesh&&(this.scene.remove(this.deathCoreMesh),this.deathCoreMesh.geometry.dispose(),this.deathCoreMesh.material.dispose());const t=new Wr(.25,1),e=new oe({color:1710618,emissive:3342336,emissiveIntensity:.4,roughness:.3,metalness:.8});this.deathCoreMesh=new Ft(t,e),this.deathCoreMesh.position.set(this.group.position.x,.25,this.group.position.z),this.scene.add(this.deathCoreMesh)}_setVisibility(t){this.group.visible=t,this.indicatorGroup&&(this.indicatorGroup.visible=t)}updateSpeedMultiplier(){const e=this.snowballCount*.01,n=this.hp*.01;this.speedMultiplier=1.05-e+n}respawn(t,e){this.hp=j.PLAYER_MAX_HP,this.isDead=!1,this.isRespawning=!1,this.snowballCount=5,this.knockbackActive=!1,this.knockbackVelocity.set(0,0,0),this.group.position.set(t,0,e),this.collider.x=t,this.collider.z=e,this.deathCoreMesh&&(this.scene.remove(this.deathCoreMesh),this.deathCoreMesh.geometry.dispose(),this.deathCoreMesh.material.dispose(),this.deathCoreMesh=null),this._setVisibility(!0),this._updateTransparency(),this.updateSpeedMultiplier()}applyKnockback(t,e,n){this.knockbackVelocity.set(t*18,0,e*18),this.knockbackActive=!0}hit(){this.takeDamage(j.SNOWBALL_DAMAGE)}_updateTransparency(){const t=this.hp;this.maxHp;let e,n=1,i=1,r=0,a=!1;t>=70?e=1:t>=30?e=.3+(t-30)/40*.7:t>=10?(e=.1+(t-10)/20*.2,r=1):(e=.05,n=.1,i=.1,r=1,a=!0),this.bodyMeshes.forEach(o=>{o.material.transparent=e<1,o.material.opacity=e,o.material.depthWrite=e>=1,o.material.needsUpdate=!0}),this.faceMeshes.forEach(o=>{o.material.transparent=n<1,o.material.opacity=n,o.material.depthWrite=n>=1,o.material.needsUpdate=!0}),this.accessoryMeshes.forEach(o=>{o.material.transparent=i<1,o.material.opacity=i,o.material.depthWrite=i>=1,o.material.needsUpdate=!0}),this.coreMesh.material.opacity=r,this.coreMesh.material.transparent=r<1,this.coreMesh.material.depthWrite=r>=1,this.coreMesh.material.needsUpdate=!0,a&&this.outlineMeshes.length===0?this._createOutlines():!a&&this.outlineMeshes.length>0&&this._removeOutlines()}_createOutlines(){const t=new ri({color:Ie.SNOW,wireframe:!0,transparent:!0,opacity:.3});this.bodyMeshes.forEach(e=>{const n=new Ft(e.geometry,t.clone());n.position.copy(e.position),n.scale.multiplyScalar(1.05),this.group.add(n),this.outlineMeshes.push(n)})}_removeOutlines(){this.outlineMeshes.forEach(t=>{this.group.remove(t),t.material.dispose()}),this.outlineMeshes=[]}_createIndicator(t,e,n){this.indicatorGroup=new sn,this.indicatorGroup.position.y=4;const i=this.team===this.localTeam,r=this.isLocalPlayer||i;if(n){const a=new an(.3,.3,.3),o=this.team==="blue"?1981023:9136404,l=new oe({color:o,roughness:.7,metalness:.1}),c=new Ft(a,l);c.position.y=.15,this.indicatorGroup.add(c)}else if(r&&t){const a=new Cs;a.moveTo(0,-.05),a.lineTo(-.2,.35),a.lineTo(.2,.35),a.lineTo(0,-.05);const o=new Xr(a),l=new ri({color:9090296,side:Oe}),c=new Ft(o,l);if(c.position.y=.2,this.indicatorGroup.add(c),e){const h=document.createElement("canvas");h.width=512,h.height=64;const u=h.getContext("2d");u.fillStyle="rgba(138, 180, 248, 0.95)",u.fillRect(0,0,512,64),u.fillStyle="#ffffff",u.font="bold 32px Microsoft YaHei, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(e,256,32);const d=new Aa(h),m=new mi(3.2,.4),g=new ri({map:d,transparent:!0,side:Oe}),_=new Ft(m,g);_.position.y=-.2,this.indicatorGroup.add(_)}}this.scene.add(this.indicatorGroup)}update(t){if(this.collider.x=this.group.position.x,this.collider.z=this.group.position.z,this.isDead){this.isRespawning&&this.respawnTimer>0&&(this.respawnTimer-=t),this.deathCoreMesh&&(this.deathCoreMesh.rotation.y+=t*2,this.deathCoreMesh.rotation.x+=t*1.5,this.deathCoreMesh.position.y=.25+Math.sin(Date.now()*.003)*.05);return}if(this.updateSpeedMultiplier(),this.knockbackActive){const e=this.knockbackVelocity;if(Math.sqrt(e.x*e.x+e.z*e.z)<this.knockbackMinSpeed)this.knockbackActive=!1,e.set(0,0,0);else{const i=Math.max(0,1-this.knockbackDecay*t);e.x*=i,e.z*=i}}if(this.indicatorGroup&&(this.indicatorGroup.position.x=this.group.position.x,this.indicatorGroup.position.z=this.group.position.z,this.camera&&this.indicatorGroup.lookAt(this.camera.position)),this.isHit&&(this.hitTimer-=t,this.hitTimer<=0&&(this.isHit=!1,[this.bottomSphere,this.middleSphere,this.headSphere].forEach(n=>{n.material&&(n.material.emissiveIntensity=0)}))),this.hp<30&&this.hp>0){this.coreFlashTimer+=t;const e=this.hp<10?12:6,n=Math.sin(this.coreFlashTimer*e)*.5+.5;this.coreMesh.material.emissiveIntensity=.3+n*.7,this.coreMesh.material.needsUpdate=!0}}updateNameLabel(t){if(!this.indicatorGroup)return;const e=this.team===this.localTeam;if(!(this.isLocalPlayer||e))return;const i=this.indicatorGroup.children.find(r=>r.geometry&&r.geometry.type==="PlaneGeometry");if(i&&(this.indicatorGroup.remove(i),i.material&&i.material.map&&i.material.map.dispose()),t){const r=document.createElement("canvas");r.width=512,r.height=64;const a=r.getContext("2d");a.fillStyle="rgba(138, 180, 248, 0.95)",a.fillRect(0,0,512,64),a.fillStyle="#ffffff",a.font="bold 32px Microsoft YaHei, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,32);const o=new Aa(r),l=new mi(3.2,.4),c=new ri({map:o,transparent:!0,side:Oe}),h=new Ft(l,c);h.position.y=-.2,this.indicatorGroup.add(h)}}remove(){this.indicatorGroup&&this.scene.remove(this.indicatorGroup),this._removeOutlines(),this.scene.remove(this.group)}}class Ym{constructor(t,e){this.camera=t,this.target=e,this.yaw=0,this.pitch=0,this.desiredYaw=0,this.desiredPitch=0,this.distance=j.CAMERA_DISTANCE,this.height=j.CAMERA_HEIGHT,this.offsetRight=j.CAMERA_OFFSET_RIGHT,this.smoothness=15}updateLookInput(t,e){this.desiredYaw+=t,this.desiredPitch+=e,this.desiredPitch=Math.max(-1,Math.min(.6,this.desiredPitch))}setRotation(t,e){this.desiredYaw=t,this.desiredPitch=e||0,this.yaw=t,this.pitch=e||0}getYaw(){return this.yaw}getPitch(){return this.pitch}update(t){const e=Math.min(1,t*this.smoothness);this.yaw=Oo.lerp(this.yaw,this.desiredYaw,e),this.pitch=Oo.lerp(this.pitch,this.desiredPitch,e);const n=this.target.getPosition(),i=new C(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=new C(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=n.clone().sub(i.clone().multiplyScalar(this.distance)).add(r.clone().multiplyScalar(this.offsetRight)).add(new C(0,this.height,0)),o=new C(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),l=n.clone().add(new C(0,1.7,0)).add(o.clone().multiplyScalar(15));this.camera.position.lerp(a,e),this.camera.lookAt(l)}}class qm{constructor(t,e=null){this.gridGround=t,this.mapGenerator=e,this.snowballCount=5,this.maxSnowballs=j.MAX_SNOWBALLS,this.baseGatherDuration=j.GATHER_DURATION,this.minGatherDuration=j.MIN_GATHER_DURATION,this.speedupThreshold=j.GATHER_SPEEDUP_THRESHOLD,this.speedupPerBall=j.GATHER_SPEEDUP_PER_BALL,this.snowballCost=j.SNOWBALL_COST,this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null,this.gatherYaw=0,this.currentGatherDuration=this.baseGatherDuration,this.consecutiveCount=0,this.holdActive=!1}canGather(t,e,n){return!(this.snowballCount>=this.maxSnowballs||this.isGathering)}setHoldActive(t){!t&&this.holdActive&&this._resetConsecutive(),this.holdActive=t}startGather(t,e,n){return this.snowballCount>=this.maxSnowballs?!1:(this.isGathering=!0,this.gatherProgress=0,this.gatherPosition={x:t,z:e},this.gatherYaw=n,!0)}update(t,e,n,i){if(this.gridGround.update(t),this.mapGenerator&&this.mapGenerator.updateWalls(t),!this.isGathering){this.holdActive&&this.snowballCount<this.maxSnowballs&&this.startGather(e,n,i);return}this.gatherProgress+=t,this.gatherProgress>=this.currentGatherDuration&&this._completeGather()}_completeGather(){this.isGathering=!1;let t=!1;if(this.mapGenerator){const e=this.mapGenerator.tryGatherFromWall(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost);e>=this.snowballCost?t=!0:(t=this.gridGround.tryGatherSnow(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost-e),e>0&&t&&(t=!0))}else t=this.gridGround.tryGatherSnow(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost);t&&this.snowballCount<this.maxSnowballs&&(this.snowballCount++,this.consecutiveCount++,this._updateSpeed(),this._updateUI()),this.gatherProgress=0,this.gatherPosition=null}_updateSpeed(){if(this.consecutiveCount>=this.speedupThreshold){const e=(this.consecutiveCount-this.speedupThreshold)*this.speedupPerBall;this.currentGatherDuration=Math.max(this.minGatherDuration,this.baseGatherDuration-e)}else this.currentGatherDuration=this.baseGatherDuration}_resetConsecutive(){this.consecutiveCount=0,this.currentGatherDuration=this.baseGatherDuration}cancelGather(){this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null}getProgress(){return this.isGathering?Math.min(1,this.gatherProgress/this.currentGatherDuration):0}getRemainingTime(){return this.isGathering?Math.max(0,this.currentGatherDuration-this.gatherProgress):0}useSnowball(){return this.snowballCount>0?(this.snowballCount--,this._updateUI(),!0):!1}_updateUI(){const t=document.getElementById("snowball-count");t&&(t.textContent=`⚪ ${this.snowballCount} / ${this.maxSnowballs}`)}updateGatherUI(){const t=document.getElementById("gather-progress-bar"),e=document.getElementById("gather-progress-fill"),n=document.getElementById("gather-countdown"),i=document.getElementById("consecutive-count"),r=document.getElementById("gather-speed");if(t&&e)if(this.isGathering||this.holdActive){t.style.display="block",e.style.width=`${this.getProgress()*100}%`;const o=200-(this.baseGatherDuration-this.currentGatherDuration)/(this.baseGatherDuration-this.minGatherDuration)*100*1.2;e.style.background=`linear-gradient(90deg, hsl(${o}, 70%, 50%), hsl(${o-30}, 70%, 60%))`}else t.style.display="none";if(n&&(this.isGathering?(n.style.display="block",n.textContent=`${this.getRemainingTime().toFixed(1)}s`):n.style.display="none"),i)if(this.consecutiveCount>0&&this.holdActive)if(i.style.display="block",this.consecutiveCount>=this.speedupThreshold){i.classList.add("speedup");const a=((this.baseGatherDuration-this.currentGatherDuration)/this.baseGatherDuration*100).toFixed(0);i.textContent=`连续攒雪球 x${this.consecutiveCount}  ⚡ +${a}% 速度`}else i.classList.remove("speedup"),i.textContent=`连续攒雪球 x${this.consecutiveCount}`;else i.style.display="none";r&&(r.style.display="none")}reset(){this.snowballCount=5,this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null,this.consecutiveCount=0,this.currentGatherDuration=this.baseGatherDuration,this.holdActive=!1,this._updateUI()}}class Tl{constructor(t,e,n,i=!1,r=null,a=null,o=null){this.scene=t,this.velocity=n.clone(),this.isCharged=i,this.onHit=r,this.onGroundHit=a,this.ignoreSnowman=o,this.active=!0,this.lifetime=5,this.gravity=j.THROW_GRAVITY,this.radius=j.THROW_SNOWBALL_RADIUS,this.trailPoints=[],this.trailLifetime=j.THROW_TRAIL_LIFETIME,this._createMesh(e),this._createTrail()}_createMesh(t){const e=new Ye(this.radius,12,12),n=new oe({color:this.isCharged?13430527:16777215,roughness:.8,metalness:this.isCharged?.2:0});this.mesh=new Ft(e,n),this.mesh.position.copy(t),this.mesh.castShadow=!0,this.scene.add(this.mesh)}_createTrail(){const t=new le,e=new ms({color:this.isCharged?11197951:16777215,size:.08,transparent:!0,opacity:.6});this.trail=new fr(t,e),this.scene.add(this.trail)}_updateTrail(){this.trailPoints.push({position:this.mesh.position.clone(),time:0});const t=[];for(let e=this.trailPoints.length-1;e>=0;e--){const n=this.trailPoints[e];if(n.time+=.016,n.time>this.trailLifetime){this.trailPoints.splice(e,1);continue}t.push(n.position.x,n.position.y,n.position.z)}this.trail.geometry.setAttribute("position",new qt(t,3)),this.trail.geometry.attributes.position.needsUpdate=!0}_createShatterEffect(){const t=this.isCharged?20:12,e=new le,n=[],i=[];for(let c=0;c<t;c++)n.push(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),i.push((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4);e.setAttribute("position",new qt(n,3));const r=new ms({color:16777215,size:.1,transparent:!0,opacity:1}),a=new fr(e,r);this.scene.add(a);let o=.5;const l=()=>{if(o-=.016,o<=0){this.scene.remove(a),e.dispose(),r.dispose();return}const c=a.geometry.attributes.position;for(let h=0;h<t;h++)c.setX(h,c.getX(h)+i[h*3]*.016),c.setY(h,c.getY(h)+i[h*3+1]*.016),c.setZ(h,c.getZ(h)+i[h*3+2]*.016),i[h*3+1]-=this.gravity*.016;c.needsUpdate=!0,r.opacity=o*2,requestAnimationFrame(l)};l()}_createHitSplashEffect(){const e=new le,n=[],i=[],r=this.mesh.position,a=Math.sqrt(this.velocity.x**2+this.velocity.y**2+this.velocity.z**2),o=a>0?this.velocity.x/a:0,l=a>0?this.velocity.y/a:0,c=a>0?this.velocity.z/a:0;for(let _=0;_<25;_++){n.push(r.x,r.y,r.z);const p=.7,f=(Math.random()-.5)*p,x=(Math.random()-.5)*p,v=(Math.random()-.5)*p,M=.6+Math.random()*.4;i.push((-o*M+f)*(3+Math.random()*3),(-l*M+Math.abs(x))*(2+Math.random()*3),(-c*M+v)*(3+Math.random()*3))}e.setAttribute("position",new qt(n,3));const h=new ms({color:16777215,size:.08,transparent:!0,opacity:1}),u=new fr(e,h);this.scene.add(u);let d=.6;const m=25,g=()=>{if(d-=.016,d<=0){this.scene.remove(u),e.dispose(),h.dispose();return}const _=u.geometry.attributes.position;for(let p=0;p<25;p++)_.setX(p,_.getX(p)+i[p*3]*.016),_.setY(p,_.getY(p)+i[p*3+1]*.016),_.setZ(p,_.getZ(p)+i[p*3+2]*.016),i[p*3+1]-=m*.016;_.needsUpdate=!0,h.opacity=Math.max(0,d/.6),h.size=.08*(.5+d),requestAnimationFrame(g)};g()}update(t,e){if(this.active){if(this.lifetime-=t,this.lifetime<=0){this.destroy();return}if(this.velocity.y-=this.gravity*t,this.mesh.position.clone(),this.mesh.position.x+=this.velocity.x*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.z+=this.velocity.z*t,this._updateTrail(),this.mesh.position.y<=this.radius){this.mesh.position.y=this.radius,this._createShatterEffect(),this.onGroundHit&&this.onGroundHit(this.mesh.position.x,this.mesh.position.z),this.destroy();return}for(const n of e){const i=this._checkCollision(n);if(i){this._createShatterEffect(),n.snowman&&this._createHitSplashEffect(),this.onHit&&this.onHit(n,i),this.destroy();return}}}}_checkCollision(t){const e=this.mesh.position;if(t.type==="cylinder"){const n=e.x-t.x,i=e.z-t.z;if(Math.sqrt(n*n+i*i)<t.radius+this.radius&&e.y>0&&e.y<3.5)return!0}if(t.snowman){if(t.snowman===this.ignoreSnowman)return null;const n=t.snowman.getPosition(),i=e.x-n.x,r=e.z-n.z;if(Math.sqrt(i*i+r*r)<.75+this.radius&&e.y>.5&&e.y<3){const o=e.y>=j.HEAD_HIT_Y,l=this.velocity.x!==0||this.velocity.z!==0?this.velocity.x/Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z):0,c=this.velocity.x!==0||this.velocity.z!==0?this.velocity.z/Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z):0;return{isHeadshot:o,isCharged:this.isCharged,hitDirectionX:l,hitDirectionZ:c}}}return null}destroy(){this.active=!1,this.scene.remove(this.mesh),this.scene.remove(this.trail),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trail.geometry.dispose(),this.trail.material.dispose()}}class Zm{constructor(t,e,n=null){this.scene=t,this.gridGround=e,this.mapGenerator=n,this.projectiles=[],this.colliders=[],this.isCharging=!1,this.chargeTime=0,this.isCharged=!1,this.wantThrow=!1,this.wantThrowPrev=!1,this.baseSpeed=j.THROW_SPEED,this.gravity=j.THROW_GRAVITY,this.chargeThreshold=j.THROW_CHARGE_TIME,this.chargedMultiplier=j.THROW_CHARGED_SPEED_MULTIPLIER,this.snowBonus=j.THROW_SNOW_GROUND_BONUS,this._createTrajectoryPreview()}_createTrajectoryPreview(){const t=new le,e=new Fm({color:16777215,dashSize:.2,gapSize:.1,transparent:!0,opacity:.6});this.trajectoryLine=new im(t,e),this.trajectoryLine.visible=!1,this.scene.add(this.trajectoryLine),this.trajectoryTimer=0,this.trajectoryDuration=0}_updateTrajectoryPreview(t,e,n=2){const i=[],a=t.clone(),o=e.clone();for(let c=0;c<=n;c+=.05)if(i.push(a.clone()),o.y-=this.gravity*.05,a.add(o.clone().multiplyScalar(.05)),a.y<=.1){i.push(a.clone());break}const l=new Float32Array(i.length*3);for(let c=0;c<i.length;c++)l[c*3]=i[c].x,l[c*3+1]=i[c].y,l[c*3+2]=i[c].z;this.trajectoryLine.geometry.setAttribute("position",new We(l,3)),this.trajectoryLine.geometry.attributes.position.needsUpdate=!0,this.trajectoryLine.computeLineDistances()}_showTrajectoryTemporarily(t,e){this._updateTrajectoryPreview(t,e),this.trajectoryLine.visible=!0,this.trajectoryTimer=0,this.trajectoryDuration=.3}_getThrowVelocity(t,e,n){const i=n?this.baseSpeed*this.chargedMultiplier:this.baseSpeed,r=Math.PI/4.5,a=e+r;return new C(Math.sin(t)*Math.cos(a),Math.sin(a),Math.cos(t)*Math.cos(a)).normalize().multiplyScalar(i)}_getThrowStartPosition(t,e){const n=new C(Math.sin(e),0,Math.cos(e));return new C(t.x+n.x*1.2,2,t.z+n.z*1.2)}throw(t,e,n,i,r,a=null){if(!r.useSnowball())return!1;const o=this._getThrowStartPosition(t,e),l=this._getThrowVelocity(e,n,i);this._showTrajectoryTemporarily(o,l);const c=new Tl(this.scene,o,l,i,(h,u)=>this._onHit(h,u),(h,u)=>this._onGroundHit(h,u),a);return this.projectiles.push(c),!0}_onHit(t,e){if(t.snowman){const n=t.snowman;if(e&&typeof e=="object"){const{isHeadshot:i,isCharged:r,hitDirectionX:a,hitDirectionZ:o}=e;let l;r?l=i?j.CHARGED_SNOWBALL_HEADSHOT_DAMAGE:j.CHARGED_SNOWBALL_DAMAGE:l=i?j.SNOWBALL_HEADSHOT_DAMAGE:j.SNOWBALL_DAMAGE,n.takeDamage(l,i),r&&n.applyKnockback(a,o,j.CHARGED_KNOCKBACK_DISTANCE)}else n.takeDamage(j.SNOWBALL_DAMAGE,!1)}}_onGroundHit(t,e){if(this.gridGround){const n=this.gridGround.getSU(t,e),i=Math.min(j.MAX_SNOW_UNIT,n+this.snowBonus);this.gridGround.setSU(t,e,i)}}update(t,e,n,i,r,a,o,l=null){if(this.wantThrowPrev=this.wantThrow,this.wantThrow=r,this.wantThrow&&(this.chargeTime=a,this.isCharging=!0,this.isCharged=this.chargeTime>=this.chargeThreshold,this.isCharging)){const c=this._getThrowStartPosition(e,n),h=this._getThrowVelocity(n,i,this.isCharged);this._updateTrajectoryPreview(c,h,3),this.trajectoryLine.visible=!0;const u=this.trajectoryLine.material;this.isCharged?(u.color.setHex(16739179),u.opacity=.9):(u.color.setHex(16777215),u.opacity=.6)}if(!this.wantThrow&&this.wantThrowPrev&&this.isCharging){const c=this.isCharged;this.throw(e,n,i,c,o,l),this.isCharging=!1,this.isCharged=!1,this.chargeTime=0}!this.wantThrow&&!this.wantThrowPrev&&(this.trajectoryTimer+=t,this.trajectoryTimer>=this.trajectoryDuration&&(this.trajectoryLine.visible=!1));for(let c=this.projectiles.length-1;c>=0;c--){const h=this.projectiles[c];h.update(t,this.colliders),h.active||this.projectiles.splice(c,1)}this._updateUI()}_updateUI(){const t=document.getElementById("charge-indicator"),e=document.getElementById("charge-ring-visual"),n=document.getElementById("charge-text"),i=document.getElementById("throw-btn");if(t)if(this.isCharging){if(t.style.display="flex",e&&(this.isCharged?e.classList.add("charged"):e.classList.remove("charged")),n)if(this.isCharged)n.textContent="重击！松开发射",n.classList.add("charged");else{const r=Math.max(0,this.chargeThreshold-this.chargeTime).toFixed(1);n.textContent=`蓄力中... ${r}s`,n.classList.remove("charged")}}else t.style.display="none";i&&(this.isCharging?(i.classList.add("throwing"),this.isCharged?i.classList.add("charged"):i.classList.remove("charged")):i.classList.remove("throwing","charged"))}addCollider(t){this.colliders.push(t)}clear(){for(const t of this.projectiles)t.destroy();this.projectiles=[],this.scene.remove(this.trajectoryLine),this.trajectoryLine.geometry.dispose(),this.trajectoryLine.material.dispose()}}class wl{constructor(t,e=!1,n=null,i=""){this.canvas=t,this.isNetworked=e,this.networkClient=n,this.playerName=i,this.scene=null,this.camera=null,this.renderer=null,this.clock=null,this.inputSystem=null,this.mapGenerator=null,this.localPlayer=null,this.thirdPersonCamera=null,this.localTeam="blue",this.remotePlayers=new Map,this.aiPlayers=[],this.stamina=1,this.isSprinting=!1,this.isGathering=!1,this.snowballManager=null,this.snowballThrower=null,this.isRunning=!1,this.animationFrameId=null,this.lastNetworkUpdate=0,e&&n&&(this.localTeam=n.playerTeam||"blue"),this._init()}_init(){this.scene=new nm,this.camera=new Ne(70,window.innerWidth/window.innerHeight,.1,200),this.renderer=new pl({canvas:this.canvas,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oa,this.clock=new km,this.inputSystem=new Vm(this.canvas),this.mapGenerator=new Xm(this.scene),this.snowballManager=new qm(this.mapGenerator.gridGround,this.mapGenerator),this.snowballThrower=new Zm(this.scene,this.mapGenerator.gridGround,this.mapGenerator),this.localPlayer=new fs(this.scene,!0,this.localTeam,!0,this.playerName,!1,this.localTeam),this.localPlayer.setCamera(this.camera),this.isNetworked&&this.networkClient?(this.localPlayer.setPosition(this.networkClient.playerSpawnX,0,this.networkClient.playerSpawnZ),this.localPlayer.setRotation(this.networkClient.playerSpawnYaw)):(this.localPlayer.setPosition(0,0,0),this.localPlayer.setRotation(0)),this.thirdPersonCamera=new Ym(this.camera,this.localPlayer),this.thirdPersonCamera.setRotation(0,-.2),this.thirdPersonCamera.update(.016),this.camera.position.copy(this.camera.position),this._createAIPlayers(),this.snowballThrower.addCollider(this.localPlayer.collider),window.addEventListener("resize",()=>this._onResize()),this.isNetworked&&this.networkClient&&(this.networkClient.onPlayerJoin=t=>this._onPlayerJoin(t),this.networkClient.onPlayerLeave=t=>this._onPlayerLeave(t),this.networkClient.onWorldState=t=>this._onWorldState(t),this.networkClient.onPlayerNameUpdate=t=>this._onPlayerNameUpdate(t))}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}_checkPlayerCollision(t,e,n=null){const i=j.PLAYER_RADIUS*2;if(this.localPlayer&&this.localPlayer!==n){const r=this.localPlayer.getPosition(),a=t-r.x,o=e-r.z;if(a*a+o*o<i*i)return!0}for(const r of this.remotePlayers.values()){if(r.snowman===n)continue;const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<i*i)return!0}for(const r of this.aiPlayers){if(r.snowman===n)continue;const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<i*i)return!0}return!1}_checkAISpawnCollision(t,e,n){for(const r of n){const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<3*3)return!0}if(this.localPlayer){const r=this.localPlayer.getPosition(),a=t-r.x,o=e-r.z;if(a*a+o*o<3*3)return!0}return!1}_getAISpawnPosition(t,e){for(let a=0;a<50;a++){let o,l;if(t==="blue"?(o=-25+(Math.random()-.5)*10,l=(Math.random()-.5)*15):(o=25+(Math.random()-.5)*10,l=(Math.random()-.5)*15),!this._checkAISpawnCollision(o,l,e)&&!this.mapGenerator.checkCollision(o,l,j.PLAYER_RADIUS))return{x:o,z:l}}const r=t==="blue"?0:Math.PI;return{x:Math.cos(r)*25,z:Math.sin(r)*25}}_createAIPlayers(){const e=["blue","red"];for(let n=0;n<2;n++){const i=e[n],r=i===this.localTeam;for(let a=0;a<5;a++){const o=this._getAISpawnPosition(i,this.aiPlayers),l=i==="blue"?0:Math.PI,c=new fs(this.scene,!1,i,r,"",!0,this.localTeam);c.setCamera(this.camera),c.setPosition(o.x,0,o.z),c.setRotation(l);const h={snowman:c,team:i,isAlly:r,targetYaw:l+Math.PI,moveTimer:0,moveDirection:new rt((Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),state:"patrol",snowballCount:5,maxSnowballs:20,gatherTimer:0,gatherDuration:2,isGathering:!1,throwCooldown:0,gatherCooldown:0};this.aiPlayers.push(h),this.snowballThrower.addCollider(c.collider)}}this._updatePlayerCount()}_updateAI(t){for(const e of this.aiPlayers){if(e.snowman.snowballCount=e.snowballCount,e.snowman.isDead){if(e.snowman.update(t),e.snowman.isRespawning&&e.snowman.respawnTimer<=0){const d=this._getRandomSpawnPosition();e.snowman.respawn(d.x,d.z),e.snowballCount=5}continue}if(e.throwCooldown>0&&(e.throwCooldown-=t),e.gatherCooldown>0&&(e.gatherCooldown-=t),e.isGathering){e.gatherTimer+=t,e.gatherTimer>=e.gatherDuration&&(e.isGathering=!1,e.gatherTimer=0,e.snowballCount<e.maxSnowballs&&e.snowballCount++,e.gatherCooldown=.5+Math.random()*1.5),e.snowman.update(t);continue}if(e.gatherCooldown<=0&&e.snowballCount<e.maxSnowballs&&Math.random()<.01){e.isGathering=!0,e.gatherTimer=0,e.snowman.update(t);continue}if(e.snowballCount>0&&e.throwCooldown<=0&&Math.random()<.008){const d=e.snowman.getPosition(),m=e.snowman.getRotation(),g=new C(d.x+Math.sin(m)*1.2,2,d.z+Math.cos(m)*1.2),_=Math.PI/4.5,p=j.THROW_SPEED,f=new C(Math.sin(m)*Math.cos(_)*p,Math.sin(_)*p,Math.cos(m)*Math.cos(_)*p),x=new Tl(this.scene,g,f,!1,(v,M)=>this._onAIHit(v,M),(v,M)=>this._onAIGroundHit(v,M),e.snowman);this.snowballThrower.projectiles.push(x),e.snowballCount--,e.throwCooldown=1+Math.random()*2}if(e.moveTimer-=t,e.moveTimer<=0){e.moveTimer=2+Math.random()*3;const d=e.snowman.getPosition();let m=1/0,g=null;if(e.team!==this.localTeam){const _=this.localPlayer.getPosition(),p=_.x-d.x,f=_.z-d.z,x=Math.sqrt(p*p+f*f);x<m&&(m=x,g=new rt(p,f))}for(const _ of this.aiPlayers){if(_===e||_.team===e.team)continue;const p=_.snowman.getPosition(),f=p.x-d.x,x=p.z-d.z,v=Math.sqrt(f*f+x*x);v<m&&(m=v,g=new rt(f,x))}for(const _ of this.remotePlayers.values()){const p=_.data;if(!p||p.team===e.team)continue;const f=(p.x||0)-d.x,x=(p.z||0)-d.z,v=Math.sqrt(f*f+x*x);v<m&&(m=v,g=new rt(f,x))}g&&m<15&&Math.random()>.3?(g.normalize(),e.moveDirection.copy(g),e.targetYaw=Math.atan2(g.x,g.y),e.state="chase"):(e.moveDirection.set((Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),e.targetYaw=Math.atan2(e.moveDirection.x,e.moveDirection.y),e.state="patrol")}const n=e.snowman.getRotation();let i=e.targetYaw-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const r=n+i*Math.min(1,t*3);e.snowman.setRotation(r);const l=(e.state==="chase"?3.5:2.5)*e.snowman.speedMultiplier*t,c=e.snowman.getPosition();let h=c.x+e.moveDirection.x*l,u=c.z+e.moveDirection.y*l;if(!this.mapGenerator.checkCollision(h,c.z,j.PLAYER_RADIUS)&&!this._checkPlayerCollision(h,c.z,e.snowman)?c.x=h:(e.moveDirection.x*=-1,e.moveTimer=0),!this.mapGenerator.checkCollision(c.x,u,j.PLAYER_RADIUS)&&!this._checkPlayerCollision(c.x,u,e.snowman)?c.z=u:(e.moveDirection.y*=-1,e.moveTimer=0),e.snowman.setPosition(c.x,0,c.z),e.snowman.update(t),e.snowman.knockbackActive){const d=e.snowman.knockbackVelocity,m=e.snowman.getPosition();let g=m.x+d.x*t,_=m.z+d.z*t;this.mapGenerator.checkCollision(g,m.z,j.PLAYER_RADIUS)?d.x=0:m.x=g,this.mapGenerator.checkCollision(m.x,_,j.PLAYER_RADIUS)?d.z=0:m.z=_,e.snowman.setPosition(m.x,0,m.z)}}}_onAIHit(t,e){if(t.snowman){if(e&&typeof e=="object"){const{isHeadshot:n,isCharged:i,hitDirectionX:r,hitDirectionZ:a}=e;let o;i?o=n?j.CHARGED_SNOWBALL_HEADSHOT_DAMAGE:j.CHARGED_SNOWBALL_DAMAGE:o=n?j.SNOWBALL_HEADSHOT_DAMAGE:j.SNOWBALL_DAMAGE,t.snowman.takeDamage(o,n),i&&t.snowman.applyKnockback(r,a,j.CHARGED_KNOCKBACK_DISTANCE)}else t.snowman.takeDamage(j.SNOWBALL_DAMAGE,!1);this._updateHPUI()}}_onAIGroundHit(t,e){if(this.snowballThrower.gridGround){const n=this.snowballThrower.gridGround,i=n.getSU(t,e),r=Math.min(j.MAX_SNOW_UNIT,i+j.THROW_SNOW_GROUND_BONUS);n.setSU(t,e,r)}}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.inputSystem.showTouchControls(!0),this.inputSystem.showPointerLockHint(!0),this.snowballManager._updateUI(),this._gameLoop())}stop(){this.isRunning=!1,this.inputSystem.showTouchControls(!1),this.inputSystem.showPointerLockHint(!1),this.inputSystem.exitPointerLock(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}_gameLoop(){if(!this.isRunning)return;const t=this.clock.getDelta();this._update(t),this._render(),this.animationFrameId=requestAnimationFrame(()=>this._gameLoop())}_update(t){const e=this.inputSystem.getMovementInput(),n=this.inputSystem.getLookInput(),i=this.inputSystem.isSprintPressed(),r=this.inputSystem.isGatherPressed(),a=this.inputSystem.isThrowPressed(),o=this.inputSystem.getThrowChargeTime(),l=this.localPlayer.getPosition(),c=this.thirdPersonCamera.getYaw(),h=this.thirdPersonCamera.getPitch();this.snowballManager.setHoldActive(r),this.isGathering=this.snowballManager.isGathering||r&&this.snowballManager.snowballCount<this.snowballManager.maxSnowballs,this.localPlayer.snowballCount=this.snowballManager.snowballCount,this.snowballManager.update(t,l.x,l.z,c),this.snowballManager.updateGatherUI();const u=!r&&this.snowballManager.snowballCount>0;this.snowballThrower.update(t,l,c,h,u?a:!1,o,this.snowballManager,this.localPlayer),!u&&a&&this.inputSystem.resetThrowCharge(),this.thirdPersonCamera.updateLookInput(n.yaw,n.pitch);const d=this.thirdPersonCamera.getYaw();if(this.localPlayer.setRotation(d),this.localPlayer.update(t),this.localPlayer.isDead){this._updateRespawnUI(),this.localPlayer.isRespawning&&this.localPlayer.respawnTimer<=0&&this._respawnPlayer();return}if(this.localPlayer.knockbackActive){const f=this.localPlayer.knockbackVelocity,x=this.localPlayer.getPosition();let v=x.x+f.x*t,M=x.z+f.z*t;this.mapGenerator.checkCollision(v,x.z,j.PLAYER_RADIUS)?f.x=0:x.x=v,this.mapGenerator.checkCollision(x.x,M,j.PLAYER_RADIUS)?f.z=0:x.z=M,this.localPlayer.setPosition(x.x,0,x.z)}this._updateHPUI();const m=new rt(Math.sin(d),Math.cos(d)),g=new rt(Math.cos(d),-Math.sin(d)),_=new rt;this.isGathering||(_.add(m.clone().multiplyScalar(e.forward-e.backward)),_.add(g.clone().multiplyScalar(e.left-e.right)));const p=_.length()>0;if(i&&p&&this.stamina>0?(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-t/3)):(this.isSprinting=!1,(!i||!p)&&(this.stamina=Math.min(1,this.stamina+t/2))),this._updateStaminaUI(),p){_.normalize();let f=j.PLAYER_SPEED*this.localPlayer.speedMultiplier;this.isSprinting&&(f*=1.5),f*=t;const x=this.localPlayer.getPosition();let v=x.x+_.x*f,M=x.z+_.y*f;!this.mapGenerator.checkCollision(v,x.z,j.PLAYER_RADIUS)&&!this._checkPlayerCollision(v,x.z,this.localPlayer)&&(x.x=v),!this.mapGenerator.checkCollision(x.x,M,j.PLAYER_RADIUS)&&!this._checkPlayerCollision(x.x,M,this.localPlayer)&&(x.z=M),this.localPlayer.setPosition(x.x,0,x.z)}if(this.localPlayer.updateLookRotation(this.thirdPersonCamera.getPitch()),this.thirdPersonCamera.update(t),this._updateAI(t),this._updateSpeedUI(),this.isNetworked&&this.networkClient){const f=Date.now();f-this.lastNetworkUpdate>1e3/j.NETWORK_TICK_RATE&&(this.lastNetworkUpdate=f,this.networkClient.sendPlayerUpdate({x:this.localPlayer.getPosition().x,z:this.localPlayer.getPosition().z,yaw:this.localPlayer.getRotation()}))}}_render(){this.renderer.render(this.scene,this.camera)}_onPlayerJoin(t){if(t.id===this.networkClient.playerId)return;const e=t.team||"red",n=e===this.localTeam,i=t.name||"",r=new fs(this.scene,!1,e,n,i,!1,this.localTeam);r.setCamera(this.camera),r.setPosition(t.x||0,0,t.z||0),r.setRotation(t.yaw||0),this.remotePlayers.set(t.id,{snowman:r,data:t}),this._updatePlayerCount()}_onPlayerLeave(t){const e=this.remotePlayers.get(t);e&&(e.snowman.remove(),this.remotePlayers.delete(t)),this._updatePlayerCount()}_onWorldState(t){for(const e of t.players){if(e.id===this.networkClient.playerId)continue;let n=this.remotePlayers.get(e.id);if(n)e.name&&n.data&&e.name!==n.data.name&&n.snowman.updateNameLabel(e.name);else{const i=e.team||"red",r=i===this.localTeam,a=e.name||"",o=new fs(this.scene,!1,i,r,a,!1,this.localTeam);o.setCamera(this.camera),n={snowman:o,data:e},this.remotePlayers.set(e.id,n)}n.snowman.setPosition(e.x,0,e.z),n.snowman.setRotation(e.yaw),n.data=e}this._updatePlayerCount()}_onPlayerNameUpdate(t){const e=this.remotePlayers.get(t.id);e&&t.name&&(e.snowman.updateNameLabel(t.name),e.data&&(e.data.name=t.name))}_updatePlayerCount(){const t=1+this.remotePlayers.size+this.aiPlayers.length;document.getElementById("player-count").textContent=`玩家: ${t}`}_updateStaminaUI(){const t=document.getElementById("stamina-bar"),e=document.getElementById("stamina-fill");t&&e&&(t.style.display="block",e.style.width=`${this.stamina*100}%`,this.isSprinting?e.style.backgroundColor="#4a90d9":this.stamina<.3?e.style.backgroundColor="#d94a4a":e.style.backgroundColor="#2ecc71")}_updateHPUI(){if(!this.localPlayer)return;let t=document.getElementById("hp-bar"),e=document.getElementById("hp-fill"),n=document.getElementById("hp-text");if(!t){const o=document.getElementById("game-ui");if(!o)return;t=document.createElement("div"),t.id="hp-bar",t.style.cssText="position:absolute;bottom:80px;left:50%;transform:translateX(-50%);width:200px;height:20px;background:rgba(0,0,0,0.5);border-radius:10px;border:2px solid rgba(255,255,255,0.3);overflow:hidden;z-index:10;",e=document.createElement("div"),e.id="hp-fill",e.style.cssText="width:100%;height:100%;border-radius:8px;transition:width 0.3s,background-color 0.3s;",n=document.createElement("div"),n.id="hp-text",n.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:white;font-size:12px;font-weight:bold;text-shadow:0 0 3px rgba(0,0,0,0.8);",t.appendChild(e),t.appendChild(n),o.appendChild(t)}const i=this.localPlayer.hp,r=j.PLAYER_MAX_HP,a=i/r;e=document.getElementById("hp-fill"),n=document.getElementById("hp-text"),e&&(e.style.width=`${a*100}%`,i>=70?e.style.background="linear-gradient(90deg, #2ecc71, #27ae60)":i>=30?e.style.background="linear-gradient(90deg, #f1c40f, #e67e22)":i>=10?(e.style.background="linear-gradient(90deg, #e74c3c, #c0392b)",e.style.animation="hp-flash 0.5s infinite"):(e.style.background="linear-gradient(90deg, #8e44ad, #6c3483)",e.style.animation="hp-flash 0.3s infinite")),n&&(n.textContent=`${Math.ceil(i)} / ${r}`)}_updateRespawnUI(){if(!this.localPlayer)return;let t=document.getElementById("respawn-overlay");if(!t){const n=document.getElementById("game-ui");if(!n)return;t=document.createElement("div"),t.id="respawn-overlay",t.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100;color:white;font-family:"Microsoft YaHei",sans-serif;';const i=document.createElement("div");i.id="respawn-title",i.style.cssText="font-size:48px;font-weight:bold;margin-bottom:20px;color:#e74c3c;text-shadow:0 0 20px rgba(231,76,60,0.8);",i.textContent="你被淘汰了！";const r=document.createElement("div");r.id="respawn-timer",r.style.cssText="font-size:32px;color:#f39c12;",t.appendChild(i),t.appendChild(r),n.appendChild(t)}const e=document.getElementById("respawn-timer");if(e){const n=Math.ceil(this.localPlayer.respawnTimer);n>0?e.textContent=`${n} 秒后复活...`:e.textContent="复活中..."}}_hideRespawnUI(){const t=document.getElementById("respawn-overlay");t&&t.remove()}_respawnPlayer(){const t=this._getRandomSpawnPosition();this.localPlayer.respawn(t.x,t.z),this.snowballManager.reset(),this._hideRespawnUI(),this._updateHPUI(),this._updateSpeedUI()}_getRandomSpawnPosition(){const e=j.WORLD_SIZE*.8;for(let n=0;n<100;n++){const i=(Math.random()-.5)*e,r=(Math.random()-.5)*e;if(!(Math.sqrt(i*i+r*r)<8)&&!this.mapGenerator.checkCollision(i,r,j.PLAYER_RADIUS*2)&&!this._checkPlayerCollision(i,r,null))return{x:i,z:r}}return{x:0,z:0}}_updateSpeedUI(){if(!this.localPlayer||this.localPlayer.isDead)return;let t=document.getElementById("speed-indicator");if(!t){const i=document.getElementById("game-ui");if(!i)return;t=document.createElement("div"),t.id="speed-indicator",t.style.cssText='position:absolute;bottom:110px;left:50%;transform:translateX(-50%);color:white;font-size:14px;font-weight:bold;text-shadow:0 0 3px rgba(0,0,0,0.8);font-family:"Microsoft YaHei",sans-serif;z-index:11;',i.appendChild(t)}const e=Math.round(this.localPlayer.speedMultiplier*100);let n="#2ecc71";e>120?n="#e74c3c":e>100?n="#f39c12":e<90&&(n="#3498db"),t.style.color=n,t.textContent=`速度: ${e}%  |  HP: ${Math.ceil(this.localPlayer.hp)}  |  雪球: ${this.snowballManager.snowballCount}`}destroy(){this.stop();for(const t of this.remotePlayers.values())t.snowman.remove();this.remotePlayers.clear();for(const t of this.aiPlayers)t.snowman.remove();this.aiPlayers=[],this.localPlayer&&this.localPlayer.remove(),this.renderer&&this.renderer.dispose()}}class Jm{constructor(){this.ws=null,this.playerId=null,this.playerName="Player",this.playerTeam="blue",this.playerSpawnX=0,this.playerSpawnZ=0,this.playerSpawnYaw=0,this.isConnected=!1,this.onPlayerJoin=null,this.onPlayerLeave=null,this.onWorldState=null,this.onWelcome=null,this.onDisconnect=null,this.onPlayerNameUpdate=null}connect(t,e){return new Promise((n,i)=>{this.playerName=e;try{this.ws=new WebSocket(t)}catch(a){i(a);return}this.ws.onopen=()=>{console.log("Connected to server")},this.ws.onmessage=a=>{try{const o=JSON.parse(a.data);this._handleMessage(o)}catch(o){console.error("Error parsing message:",o)}},this.ws.onclose=()=>{console.log("Disconnected from server"),this.isConnected=!1,this.onDisconnect&&this.onDisconnect()},this.ws.onerror=a=>{console.error("WebSocket error event:",a),i(new Error("无法连接服务器，请检查地址是否正确"))};const r=setTimeout(()=>{i(new Error("Connection timeout"))},5e3);this._originalOnWelcome=this.onWelcome,this.onWelcome=a=>{clearTimeout(r),this.isConnected=!0,this.playerId=a.playerId,this.playerTeam=a.team||"blue",this.playerSpawnX=a.spawnX||0,this.playerSpawnZ=a.spawnZ||0,this.playerSpawnYaw=a.spawnYaw||0,this.sendPlayerUpdate({x:this.playerSpawnX,z:this.playerSpawnZ,yaw:this.playerSpawnYaw}),this._originalOnWelcome&&this._originalOnWelcome(a),n()}})}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.isConnected=!1,this.playerId=null}_handleMessage(t){switch(t.type){case ii.WELCOME:this.onWelcome&&this.onWelcome(t.data);break;case ii.PLAYER_JOIN:this.onPlayerJoin&&this.onPlayerJoin(t.data);break;case ii.PLAYER_LEAVE:this.onPlayerLeave&&this.onPlayerLeave(t.data);break;case ii.WORLD_STATE:this.onWorldState&&this.onWorldState(t.data);break;case ii.PLAYER_NAME_UPDATE:this.onPlayerNameUpdate&&this.onPlayerNameUpdate(t.data);break}}sendPlayerUpdate(t){!this.isConnected||!this.ws||this._send({type:ii.PLAYER_MOVE,data:{id:this.playerId,name:this.playerName,...t}})}_send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}}let rn=null,Mn=null;const Ls=document.getElementById("main-menu"),Yr=document.getElementById("connect-menu"),Ds=document.getElementById("game-ui"),Al=document.getElementById("loading"),bl=document.getElementById("game-canvas");function Km(){Cl(),setTimeout(()=>{Ll(),Ds.classList.add("active");try{rn=new wl(bl,!1,null,""),rn.start()}catch(s){console.error("Game init error:",s),alert("游戏初始化失败: "+s.message),Rl()}Pl()},100)}function jm(){Ls.classList.add("hidden"),Yr.style.display="flex";const s=document.getElementById("server-address");if(s&&s.value==="ws://localhost:8765"){const t=window.location.hostname;t&&t!=="localhost"&&t!=="127.0.0.1"&&(s.value=`ws://${t}:8765`)}}function Rl(){Yr.style.display="none",Ls.classList.remove("hidden")}function $m(s,t=8){let e=0,n="";for(const i of s){if(e>=t)break;n+=i,e++}return n}async function Qm(){const s=document.getElementById("server-address").value.trim();let t=document.getElementById("player-name").value.trim();if(!s){alert("请填写服务器地址");return}if(!t){alert("请输入你的名字");return}t=$m(t,8),Cl();try{Mn=new Jm,await Mn.connect(s,t),Ll(),Ds.classList.add("active"),rn=new wl(bl,!0,Mn,t),rn.start()}catch(e){console.error("Connection failed:",e),alert("连接服务器失败: "+e.message)}finally{Pl()}}function tg(){rn&&(rn.destroy(),rn=null),Mn&&(Mn.disconnect(),Mn=null),Ds.classList.remove("active"),Ls.classList.remove("hidden")}function Cl(){Al.classList.add("active")}function Pl(){Al.classList.remove("active")}function Ll(){Ls.classList.add("hidden"),Yr.style.display="none",Ds.classList.remove("active")}document.getElementById("btn-single").addEventListener("click",Km);document.getElementById("btn-multi").addEventListener("click",jm);document.getElementById("btn-connect").addEventListener("click",Qm);document.getElementById("btn-back").addEventListener("click",Rl);document.getElementById("back-btn").addEventListener("click",tg);window.addEventListener("beforeunload",()=>{rn&&rn.destroy(),Mn&&Mn.disconnect()});
