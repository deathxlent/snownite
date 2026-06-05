(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fr="160",Xl=0,ra=1,Yl=2,ko=1,Wo=2,rn=3,wn=0,Ce=1,Fe=2,xn=0,ui=1,aa=2,oa=3,la=4,ql=5,In=100,Zl=101,Jl=102,ca=103,ha=104,Kl=200,jl=201,$l=202,Ql=203,wr=204,Tr=205,tc=206,ec=207,nc=208,ic=209,sc=210,rc=211,ac=212,oc=213,lc=214,cc=0,hc=1,uc=2,ys=3,dc=4,fc=5,pc=6,mc=7,Vo=0,gc=1,_c=2,Sn=0,vc=1,xc=2,Sc=3,Mc=4,yc=5,Ec=6,Xo=300,pi=301,mi=302,Ar=303,br=304,Ls=306,Cr=1e3,We=1001,Rr=1002,Ae=1003,ua=1004,Vs=1005,Ne=1006,wc=1007,Ii=1008,Mn=1009,Tc=1010,Ac=1011,zr=1012,Yo=1013,gn=1014,_n=1015,Ui=1016,qo=1017,Zo=1018,Nn=1020,bc=1021,Ve=1023,Cc=1024,Rc=1025,On=1026,gi=1027,Lc=1028,Jo=1029,Pc=1030,Ko=1031,jo=1033,Xs=33776,Ys=33777,qs=33778,Zs=33779,da=35840,fa=35841,pa=35842,ma=35843,$o=36196,ga=37492,_a=37496,va=37808,xa=37809,Sa=37810,Ma=37811,ya=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,ba=37817,Ca=37818,Ra=37819,La=37820,Pa=37821,Js=36492,Da=36494,Ia=36495,Dc=36283,Ua=36284,Na=36285,Oa=36286,Qo=3e3,Fn=3001,Ic=3200,Uc=3201,tl=0,Nc=1,ze="",_e="srgb",cn="srgb-linear",Br="display-p3",Ps="display-p3-linear",Es="linear",Qt="srgb",ws="rec709",Ts="p3",Wn=7680,Fa=519,Oc=512,Fc=513,zc=514,el=515,Bc=516,Gc=517,Hc=518,kc=519,za=35044,Ba="300 es",Lr=1035,on=2e3,As=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const bi=Math.PI/180,Ni=180/Math.PI;function Hn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Gr(s,t){return(s%t+t)%t}function Wc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Vc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ci(s,t,e){return(1-e)*s+e*t}function Xc(s,t,e,n){return Ci(s,t,1-Math.exp(-e*n))}function Yc(s,t=1){return t-Math.abs(Gr(s,t*2)-t)}function qc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Jc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Kc(s,t){return s+Math.random()*(t-s)}function jc(s){return s*(.5-Math.random())}function $c(s){s!==void 0&&(Ga=s);let t=Ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qc(s){return s*bi}function th(s){return s*Ni}function Pr(s){return(s&s-1)===0&&s!==0}function eh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ha={DEG2RAD:bi,RAD2DEG:Ni,generateUUID:Hn,clamp:ve,euclideanModulo:Gr,mapLinear:Wc,inverseLerp:Vc,lerp:Ci,damp:Xc,pingpong:Yc,smoothstep:qc,smootherstep:Zc,randInt:Jc,randFloat:Kc,randFloatSpread:jc,seededRandom:$c,degToRad:Qc,radToDeg:th,isPowerOfTwo:Pr,ceilPowerOfTwo:eh,floorPowerOfTwo:bs,setQuaternionFromProperEuler:nh,normalize:we,denormalize:ai};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],S=i[1],v=i[4],x=i[7],C=i[2],A=i[5],b=i[8];return r[0]=a*_+o*S+l*C,r[3]=a*f+o*v+l*A,r[6]=a*p+o*x+l*b,r[1]=c*_+h*S+u*C,r[4]=c*f+h*v+u*A,r[7]=c*p+h*x+u*b,r[2]=d*_+m*S+g*C,r[5]=d*f+m*v+g*A,r[8]=d*p+m*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Wt;function nl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ih(){const s=Cs("canvas");return s.style.display="block",s}const ka={};function Ri(s){s in ka||(ka[s]=!0,console.warn(s))}const Wa=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Va=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xi={[cn]:{transfer:Es,primaries:ws,toReference:s=>s,fromReference:s=>s},[_e]:{transfer:Qt,primaries:ws,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ps]:{transfer:Es,primaries:Ts,toReference:s=>s.applyMatrix3(Va),fromReference:s=>s.applyMatrix3(Wa)},[Br]:{transfer:Qt,primaries:Ts,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Va),fromReference:s=>s.applyMatrix3(Wa).convertLinearToSRGB()}},sh=new Set([cn,Ps]),Jt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!sh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Xi[t].toReference,i=Xi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Xi[s].primaries},getTransfer:function(s){return s===ze?Es:Xi[s].transfer}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vn;class il{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=Cs("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rh=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Hn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($s(i[a].image)):r.push($s(i[a]))}else r=$s(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function $s(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?il.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ah=0;class Re extends xi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=We,i=We,r=Ne,a=Ii,o=Ve,l=Mn,c=Re.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Hn(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fn?_e:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?Fn:Qo}set encoding(t){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?_e:ze}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Xo;Re.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(m+1)/2,C=(p+1)/2,A=(h+d)/4,b=(u+_)/4,N=(g+f)/4;return v>x&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=b/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=N/r),this.set(n,i,r,e),this}let S=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?_e:ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lh extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-o;const p=l*d+c*m+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,p*S);f=Math.sin(f*A)/C,o=Math.sin(o*A)/C}const x=o*S;if(l=l*f+d*x,c=c*f+m*x,h=h*f+g*x,u=u*f+_*x,f===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new L,Xa=new Bi;class Gi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(t.matrixWorld),this.union(Yi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),qi.subVectors(this.max,Ei),Xn.subVectors(t.a,Ei),Yn.subVectors(t.b,Ei),qn.subVectors(t.c,Ei),hn.subVectors(Yn,Xn),un.subVectors(qn,Yn),bn.subVectors(Xn,qn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-bn.z,bn.y,hn.z,0,-hn.x,un.z,0,-un.x,bn.z,0,-bn.x,-hn.y,hn.x,0,-un.y,un.x,0,-bn.y,bn.x,0];return!tr(e,Xn,Yn,qn,qi)||(e=[1,0,0,0,1,0,0,0,1],!tr(e,Xn,Yn,qn,qi))?!1:(Zi.crossVectors(hn,un),e=[Zi.x,Zi.y,Zi.z],tr(e,Xn,Yn,qn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new L,new L,new L,new L,new L,new L,new L,new L],Be=new L,Yi=new Gi,Xn=new L,Yn=new L,qn=new L,hn=new L,un=new L,bn=new L,Ei=new L,qi=new L,Zi=new L,Cn=new L;function tr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Cn.fromArray(s,r);const o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ch=new Gi,wi=new L,er=new L;class Hi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ch.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(er)),this.expandByPoint(wi.copy(t.center).sub(er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new L,nr=new L,Ji=new L,dn=new L,ir=new L,Ki=new L,sr=new L;class Hr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nr.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ji),o=dn.dot(this.direction),l=-dn.dot(Ji),c=dn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nr).addScaledVector(Ji,d),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,r){ir.subVectors(e,t),Ki.subVectors(n,t),sr.crossVectors(ir,Ki);let a=this.direction.dot(sr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,t);const l=o*this.direction.dot(Ki.crossVectors(dn,Ki));if(l<0)return null;const c=o*this.direction.dot(ir.cross(dn));if(c<0||l+c>a)return null;const h=-o*dn.dot(sr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,f)}set(t,e,n,i,r,a,o,l,c,h,u,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zn.setFromMatrixColumn(t,0).length(),r=1/Zn.setFromMatrixColumn(t,1).length(),a=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hh,t,uh)}lookAt(t,e,n){const i=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),fn.crossVectors(n,Pe),fn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),fn.crossVectors(n,Pe)),fn.normalize(),ji.crossVectors(Pe,fn),i[0]=fn.x,i[4]=ji.x,i[8]=Pe.x,i[1]=fn.y,i[5]=ji.y,i[9]=Pe.y,i[2]=fn.z,i[6]=ji.z,i[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],S=n[3],v=n[7],x=n[11],C=n[15],A=i[0],b=i[4],N=i[8],y=i[12],T=i[1],O=i[5],k=i[9],nt=i[13],D=i[2],F=i[6],H=i[10],J=i[14],q=i[3],Z=i[7],K=i[11],it=i[15];return r[0]=a*A+o*T+l*D+c*q,r[4]=a*b+o*O+l*F+c*Z,r[8]=a*N+o*k+l*H+c*K,r[12]=a*y+o*nt+l*J+c*it,r[1]=h*A+u*T+d*D+m*q,r[5]=h*b+u*O+d*F+m*Z,r[9]=h*N+u*k+d*H+m*K,r[13]=h*y+u*nt+d*J+m*it,r[2]=g*A+_*T+f*D+p*q,r[6]=g*b+_*O+f*F+p*Z,r[10]=g*N+_*k+f*H+p*K,r[14]=g*y+_*nt+f*J+p*it,r[3]=S*A+v*T+x*D+C*q,r[7]=S*b+v*O+x*F+C*Z,r[11]=S*N+v*k+x*H+C*K,r[15]=S*y+v*nt+x*J+C*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*m-n*l*m)+_*(+e*l*m-e*c*d+r*a*d-i*a*m+i*c*h-r*l*h)+f*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],S=u*f*c-_*d*c+_*l*m-o*f*m-u*l*p+o*d*p,v=g*d*c-h*f*c-g*l*m+a*f*m+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*f-a*u*f,A=e*S+n*v+i*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=S*b,t[1]=(_*d*r-u*f*r-_*i*m+n*f*m+u*i*p-n*d*p)*b,t[2]=(o*f*r-_*l*r+_*i*c-n*f*c-o*i*p+n*l*p)*b,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*m-n*l*m)*b,t[4]=v*b,t[5]=(h*f*r-g*d*r+g*i*m-e*f*m-h*i*p+e*d*p)*b,t[6]=(g*l*r-a*f*r-g*i*c+e*f*c+a*i*p-e*l*p)*b,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*m+e*l*m)*b,t[8]=x*b,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*p-e*u*p)*b,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*b,t[12]=C*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*f+e*u*f)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*f-e*o*f)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,_=a*h,f=a*u,p=o*u,S=l*c,v=l*h,x=l*u,C=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*C,i[1]=(m+x)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(m-x)*A,i[5]=(1-(d+p))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(g+v)*b,i[9]=(f-S)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Zn.set(i[0],i[1],i[2]).length();const a=Zn.set(i[4],i[5],i[6]).length(),o=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const c=1/r,h=1/a,u=1/o;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=on){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===on)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===As)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=on){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,m=(n+i)*h;let g,_;if(o===on)g=(a+r)*u,_=-2*u;else if(o===As)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new L,Ge=new ae,hh=new L(0,0,0),uh=new L(1,1,1),fn=new L,ji=new L,Pe=new L,Ya=new ae,qa=new Bi;class Ds{constructor(t=0,e=0,n=0,i=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dh=0;const Za=new L,Jn=new Bi,en=new ae,$i=new L,Ti=new L,fh=new L,ph=new Bi,Ja=new L(1,0,0),Ka=new L(0,1,0),ja=new L(0,0,1),mh={type:"added"},gh={type:"removed"};class ge extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new L,e=new Ds,n=new Bi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Wt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Za.copy(t).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ti,$i,this.up):en.lookAt($i,Ti,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(en),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new L(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new L,nn=new L,rr=new L,sn=new L,Kn=new L,jn=new L,$a=new L,ar=new L,or=new L,lr=new L;let Qi=!1;class ke{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){He.subVectors(i,e),nn.subVectors(n,e),rr.subVectors(t,e);const a=He.dot(He),o=He.dot(nn),l=He.dot(rr),c=nn.dot(nn),h=nn.dot(rr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),nn.subVectors(t,e),He.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),He.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Kn.subVectors(i,n),jn.subVectors(r,n),ar.subVectors(t,n);const l=Kn.dot(ar),c=jn.dot(ar);if(l<=0&&c<=0)return e.copy(n);or.subVectors(t,i);const h=Kn.dot(or),u=jn.dot(or);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Kn,a);lr.subVectors(t,r);const m=Kn.dot(lr),g=jn.dot(lr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(jn,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return $a.subVectors(r,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector($a,o);const p=1/(f+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Kn,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function cr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Gr(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cr(a,r,t+1/3),this.g=cr(a,r,t),this.b=cr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Jt.fromWorkingColorSpace(Me.copy(this),t),Math.round(ve(Me.r*255,0,255))*65536+Math.round(ve(Me.g*255,0,255))*256+Math.round(ve(Me.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=_e){Jt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(ts);const n=Ci(pn.h,ts.h,e),i=Ci(pn.s,ts.s,e),r=Ci(pn.l,ts.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Xt;Xt.NAMES=ol;let _h=0;class kn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=ui,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Tr,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oi extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new L,es=new rt;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class ll extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vh=0;const Ue=new ae,hr=new ge,$n=new L,De=new Gi,Ai=new Gi,pe=new L;class le extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nl(t)?cl:ll)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return hr.lookAt(t),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(De.min,Ai.min),De.expandByPoint(pe),pe.addVectors(De.max,Ai.max),De.expandByPoint(pe)):(De.expandByPoint(Ai.min),De.expandByPoint(Ai.max))}De.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(t,c),pe.add($n)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new L,h[T]=new L;const u=new L,d=new L,m=new L,g=new rt,_=new rt,f=new rt,p=new L,S=new L;function v(T,O,k){u.fromArray(i,T*3),d.fromArray(i,O*3),m.fromArray(i,k*3),g.fromArray(a,T*2),_.fromArray(a,O*2),f.fromArray(a,k*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);const nt=1/(_.x*f.y-f.x*_.y);isFinite(nt)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(nt),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(nt),c[T].add(p),c[O].add(p),c[k].add(p),h[T].add(S),h[O].add(S),h[k].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let T=0,O=x.length;T<O;++T){const k=x[T],nt=k.start,D=k.count;for(let F=nt,H=nt+D;F<H;F+=3)v(n[F+0],n[F+1],n[F+2])}const C=new L,A=new L,b=new L,N=new L;function y(T){b.fromArray(r,T*3),N.copy(b);const O=c[T];C.copy(O),C.sub(b.multiplyScalar(b.dot(O))).normalize(),A.crossVectors(N,O);const nt=A.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=nt}for(let T=0,O=x.length;T<O;++T){const k=x[T],nt=k.start,D=k.count;for(let F=nt,H=nt+D;F<H;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new ae,Rn=new Hr,ns=new Hi,to=new L,Qn=new L,ti=new L,ei=new L,ur=new L,is=new L,ss=new rt,rs=new rt,as=new rt,eo=new L,no=new L,io=new L,os=new L,ls=new L;class Nt extends ge{constructor(t=new le,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ur.fromBufferAttribute(u,t),a?is.addScaledVector(ur,h):is.addScaledVector(ur.sub(e),h))}e.add(is)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(ns.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(ns,to)===null||Rn.origin.distanceToSquared(to)>(t.far-t.near)**2))&&(Qa.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=S,C=v;x<C;x+=3){const A=o.getX(x),b=o.getX(x+1),N=o.getX(x+2);i=cs(this,p,t,n,c,h,u,A,b,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=o.getX(f),v=o.getX(f+1),x=o.getX(f+2);i=cs(this,a,t,n,c,h,u,S,v,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=S,C=v;x<C;x+=3){const A=x,b=x+1,N=x+2;i=cs(this,p,t,n,c,h,u,A,b,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=f,v=f+1,x=f+2;i=cs(this,a,t,n,c,h,u,S,v,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function xh(s,t,e,n,i,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===wn,o),l===null)return null;ls.copy(o),ls.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:s}}function cs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Qn),s.getVertexPosition(l,ti),s.getVertexPosition(c,ei);const h=xh(s,t,e,n,Qn,ti,ei,os);if(h){i&&(ss.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,l),as.fromBufferAttribute(i,c),h.uv=ke.getInterpolation(os,Qn,ti,ei,ss,rs,as,new rt)),r&&(ss.fromBufferAttribute(r,o),rs.fromBufferAttribute(r,l),as.fromBufferAttribute(r,c),h.uv1=ke.getInterpolation(os,Qn,ti,ei,ss,rs,as,new rt),h.uv2=h.uv1),a&&(eo.fromBufferAttribute(a,o),no.fromBufferAttribute(a,l),io.fromBufferAttribute(a,c),h.normal=ke.getInterpolation(os,Qn,ti,ei,eo,no,io,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};ke.getNormal(Qn,ti,ei,u.normal),h.face=u}return h}class qe extends le{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,f,p,S,v,x,C,A,b,N,y){const T=x/b,O=C/N,k=x/2,nt=C/2,D=A/2,F=b+1,H=N+1;let J=0,q=0;const Z=new L;for(let K=0;K<H;K++){const it=K*O-nt;for(let at=0;at<F;at++){const V=at*T-k;Z[_]=V*S,Z[f]=it*v,Z[p]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[f]=0,Z[p]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(at/b),u.push(1-K/N),J+=1}}for(let K=0;K<N;K++)for(let it=0;it<b;it++){const at=d+it+F*K,V=d+it+F*(K+1),$=d+(it+1)+F*(K+1),ft=d+(it+1)+F*K;l.push(at,V,ft),l.push(V,$,ft),q+=6}o.addGroup(m,q,y),m+=q,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _i(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=_i(s[e]);for(const i in n)t[i]=n[i]}return t}function Sh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hl(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const Mh={clone:_i,merge:Te};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=Sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ul extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends ul{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class wh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Oe(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Oe(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Oe(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Oe(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Oe(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dl extends Re{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Th extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?_e:ze),this.texture=new dl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qe(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:xn});r.uniforms.tEquirect.value=e;const a=new Nt(i,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Ne),new wh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const dr=new L,Ah=new L,bh=new Wt;class Pn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=dr.subVectors(n,e).cross(Ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bh.getNormalMatrix(t),i=this.coplanarPoint(dr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Hi,hs=new L;class kr{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],S=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,f-m,x-p).normalize(),n[1].setComponents(l+r,d+c,f+m,x+p).normalize(),n[2].setComponents(l+a,d+h,f+g,x+S).normalize(),n[3].setComponents(l-a,d-h,f-g,x-S).normalize(),n[4].setComponents(l-o,d-u,f-_,x-v).normalize(),e===on)n[5].setComponents(l+o,d+u,f+_,x+v).normalize();else if(e===As)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(hs.x=i.normal.x>0?t.max.x:t.min.x,hs.y=i.normal.y>0?t.max.y:t.min.y,hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ch(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class vi extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const S=p*d-a;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-S,0),_.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;m.push(v,x,A),m.push(x,C,A)}this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
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
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Wh=`#ifdef USE_BUMPMAP
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
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$h=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tu=`vec3 transformedNormal = objectNormal;
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
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",au=`
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
}`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gu=`#ifdef USE_GRADIENTMAP
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
}`,_u=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
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
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#endif`,Cu=`struct PhysicalMaterial {
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
}`,Ru=`
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
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wu=`#ifdef USE_MORPHNORMALS
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
#endif`,Vu=`#ifdef USE_MORPHTARGETS
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
#endif`,Xu=`#ifdef USE_MORPHTARGETS
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
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
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
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rd=`uniform sampler2D t2D;
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,kd=`#include <common>
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Vd=`#define LAMBERT
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
}`,Xd=`#define LAMBERT
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
}`,Yd=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Jd=`#define NORMAL
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
}`,Kd=`#define PHONG
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
}`,jd=`#define PHONG
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
}`,$d=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
}`,tf=`#define TOON
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
}`,ef=`#define TOON
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
}`,nf=`uniform float size;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,af=`uniform vec3 color;
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
}`,of=`uniform float rotation;
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
}`,lf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Rh,alphahash_pars_fragment:Lh,alphamap_fragment:Ph,alphamap_pars_fragment:Dh,alphatest_fragment:Ih,alphatest_pars_fragment:Uh,aomap_fragment:Nh,aomap_pars_fragment:Oh,batching_pars_vertex:Fh,batching_vertex:zh,begin_vertex:Bh,beginnormal_vertex:Gh,bsdfs:Hh,iridescence_fragment:kh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Vh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:Yh,clipping_planes_vertex:qh,color_fragment:Zh,color_pars_fragment:Jh,color_pars_vertex:Kh,color_vertex:jh,common:$h,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:tu,displacementmap_pars_vertex:eu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:su,colorspace_fragment:ru,colorspace_pars_fragment:au,envmap_fragment:ou,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:yu,envmap_vertex:uu,fog_vertex:du,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:gu,lightmap_fragment:_u,lightmap_pars_fragment:vu,lights_lambert_fragment:xu,lights_lambert_pars_fragment:Su,lights_pars_begin:Mu,lights_toon_fragment:Eu,lights_toon_pars_fragment:wu,lights_phong_fragment:Tu,lights_phong_pars_fragment:Au,lights_physical_fragment:bu,lights_physical_pars_fragment:Cu,lights_fragment_begin:Ru,lights_fragment_maps:Lu,lights_fragment_end:Pu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Uu,logdepthbuf_vertex:Nu,map_fragment:Ou,map_pars_fragment:Fu,map_particle_fragment:zu,map_particle_pars_fragment:Bu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Hu,morphcolor_vertex:ku,morphnormal_vertex:Wu,morphtarget_pars_vertex:Vu,morphtarget_vertex:Xu,normal_fragment_begin:Yu,normal_fragment_maps:qu,normal_pars_fragment:Zu,normal_pars_vertex:Ju,normal_vertex:Ku,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:td,iridescence_pars_fragment:ed,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:dd,shadowmask_pars_fragment:fd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:xd,tonemapping_fragment:Sd,tonemapping_pars_fragment:Md,transmission_fragment:yd,transmission_pars_fragment:Ed,uv_pars_fragment:wd,uv_pars_vertex:Td,uv_vertex:Ad,worldpos_vertex:bd,background_vert:Cd,background_frag:Rd,backgroundCube_vert:Ld,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Id,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Od,distanceRGBA_frag:Fd,equirect_vert:zd,equirect_frag:Bd,linedashed_vert:Gd,linedashed_frag:Hd,meshbasic_vert:kd,meshbasic_frag:Wd,meshlambert_vert:Vd,meshlambert_frag:Xd,meshmatcap_vert:Yd,meshmatcap_frag:qd,meshnormal_vert:Zd,meshnormal_frag:Jd,meshphong_vert:Kd,meshphong_frag:jd,meshphysical_vert:$d,meshphysical_frag:Qd,meshtoon_vert:tf,meshtoon_frag:ef,points_vert:nf,points_frag:sf,shadow_vert:rf,shadow_frag:af,sprite_vert:of,sprite_frag:lf},ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Je={basic:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Te([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Te([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Te([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Te([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Te([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Te([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Te([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Te([ct.lights,ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Je.physical={uniforms:Te([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const us={r:0,b:0,g:0};function cf(s,t,e,n,i,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),S=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ls)?(h===void 0&&(h=new Nt(new qe(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:_i(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==Qt,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nt(new vi(2,2),new Bn({name:"BackgroundMaterial",uniforms:_i(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(us,hl(s)),n.buffers.color.setClear(us.r,us.g,us.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function hf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,h=!1;function u(D,F,H,J,q){let Z=!1;if(a){const K=_(J,H,F);c!==K&&(c=K,m(c.object)),Z=p(D,J,H,q),Z&&S(D,J,H,q)}else{const K=F.wireframe===!0;(c.geometry!==J.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=J.id,c.program=H.id,c.wireframe=K,Z=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,N(D,F,H,J),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,F,H){const J=H.wireframe===!0;let q=o[D.id];q===void 0&&(q={},o[D.id]=q);let Z=q[F.id];Z===void 0&&(Z={},q[F.id]=Z);let K=Z[J];return K===void 0&&(K=f(d()),Z[J]=K),K}function f(D){const F=[],H=[],J=[];for(let q=0;q<i;q++)F[q]=0,H[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:J,object:D,attributes:{},index:null}}function p(D,F,H,J){const q=c.attributes,Z=F.attributes;let K=0;const it=H.getAttributes();for(const at in it)if(it[at].location>=0){const $=q[at];let ft=Z[at];if(ft===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;K++}return c.attributesNum!==K||c.index!==J}function S(D,F,H,J){const q={},Z=F.attributes;let K=0;const it=H.getAttributes();for(const at in it)if(it[at].location>=0){let $=Z[at];$===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),q[at]=ft,K++}c.attributes=q,c.attributesNum=K,c.index=J}function v(){const D=c.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function x(D){C(D,0)}function C(D,F){const H=c.newAttributes,J=c.enabledAttributes,q=c.attributeDivisors;H[D]=1,J[D]===0&&(s.enableVertexAttribArray(D),J[D]=1),q[D]!==F&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),q[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let H=0,J=F.length;H<J;H++)F[H]!==D[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function b(D,F,H,J,q,Z,K){K===!0?s.vertexAttribIPointer(D,F,H,q,Z):s.vertexAttribPointer(D,F,H,J,q,Z)}function N(D,F,H,J){if(n.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=J.attributes,Z=H.getAttributes(),K=F.defaultAttributeValues;for(const it in Z){const at=Z[it];if(at.location>=0){let V=q[it];if(V===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const $=V.normalized,ft=V.itemSize,St=e.get(V);if(St===void 0)continue;const gt=St.buffer,Ct=St.type,It=St.bytesPerElement,Mt=n.isWebGL2===!0&&(Ct===s.INT||Ct===s.UNSIGNED_INT||V.gpuType===Yo);if(V.isInterleavedBufferAttribute){const Pt=V.data,R=Pt.stride,ot=V.offset;if(Pt.isInstancedInterleavedBuffer){for(let Y=0;Y<at.locationSize;Y++)C(at.location+Y,Pt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Y=0;Y<at.locationSize;Y++)x(at.location+Y);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Y=0;Y<at.locationSize;Y++)b(at.location+Y,ft/at.locationSize,Ct,$,R*It,(ot+ft/at.locationSize*Y)*It,Mt)}else{if(V.isInstancedBufferAttribute){for(let Pt=0;Pt<at.locationSize;Pt++)C(at.location+Pt,V.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Pt=0;Pt<at.locationSize;Pt++)x(at.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Pt=0;Pt<at.locationSize;Pt++)b(at.location+Pt,ft/at.locationSize,Ct,$,ft*It,ft/at.locationSize*Pt*It,Mt)}}else if(K!==void 0){const $=K[it];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(at.location,$);break;case 3:s.vertexAttrib3fv(at.location,$);break;case 4:s.vertexAttrib4fv(at.location,$);break;default:s.vertexAttrib1fv(at.location,$)}}}}A()}function y(){k();for(const D in o){const F=o[D];for(const H in F){const J=F[H];for(const q in J)g(J[q].object),delete J[q];delete F[H]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const F=o[D.id];for(const H in F){const J=F[H];for(const q in J)g(J[q].object),delete J[q];delete F[H]}delete o[D.id]}function O(D){for(const F in o){const H=o[F];if(H[D.id]===void 0)continue;const J=H[D.id];for(const q in J)g(J[q].object),delete J[q];delete H[D.id]}}function k(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function uf(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function df(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=a||t.has("OES_texture_float"),C=v&&x,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:A}}function ff(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Pn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const S=r?0:n,v=S*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,m);for(let C=0;C!==v;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function pf(s){let t=new WeakMap;function e(a,o){return o===Ar?a.mapping=pi:o===br&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ar||o===br)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Th(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class pl extends ul{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,so=[.125,.215,.35,.446,.526,.582],Un=20,fr=new pl,ro=new Xt;let pr=null,mr=0,gr=0;const Dn=(1+Math.sqrt(5))/2,si=1/Dn,ao=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Dn,si),new L(0,Dn,-si),new L(si,0,Dn),new L(-si,0,Dn),new L(Dn,si,0),new L(-Dn,si,0)];class oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pr,mr,gr),t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Ui,format:Ve,colorSpace:cn,depthBuffer:!1},i=lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,t,e)}return i}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,i){const o=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ro),h.toneMapping=Sn,h.autoClear=!1;const m=new oi({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new Nt(new qe,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(ro),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;ds(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pi||t.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ao[(i-1)%ao.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Un-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Un;f>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Un}`);const p=[];let S=0;for(let b=0;b<Un;++b){const N=b/_,y=Math.exp(-N*N/2);p.push(y),b===0?S+=y:b<f&&(S+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],C=3*x*(i>v-li?i-v+li:0),A=4*(this._cubeSize-x);ds(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(u,fr)}}function mf(s){const t=[],e=[],n=[];let i=s;const r=s-li+1+so.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-li?l=so[a-s+li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,S=new Float32Array(_*g*m),v=new Float32Array(f*g*m),x=new Float32Array(p*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,N=A>2?0:-1,y=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];S.set(y,_*g*A),v.set(d,f*g*A);const T=[A,A,A,A,A,A];x.set(T,p*g*A)}const C=new le;C.setAttribute("position",new Ye(S,_)),C.setAttribute("uv",new Ye(v,f)),C.setAttribute("faceIndex",new Ye(x,p)),t.push(C),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lo(s,t,e){const n=new zn(s,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function gf(s,t,e){const n=new Float32Array(Un),i=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function co(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ho(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Wr(){return`

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
	`}function _f(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ar||l===br,h=l===pi||l===mi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new oo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new oo(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xf(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,x=S.length;v<x;v+=3){const C=S[v+0],A=S[v+1],b=S[v+2];d.push(C,A,A,b,b,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const C=v+0,A=v+1,b=v+2;d.push(C,A,A,b,b,C)}}else return;const f=new(nl(d)?cl:ll)(d,1);f.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sf(s,t,e,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Mf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yf(s,t){return s[0]-t[0]}function Ef(s,t){return Math.abs(t[1])-Math.abs(s[1])}function wf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=r.get(h);if(f===void 0||f.count!==_){let F=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var m=F;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),C===!0&&(y=3);let T=h.attributes.position.count*y,O=1;T>t.maxTextureSize&&(O=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const k=new Float32Array(T*O*4*_),nt=new rl(k,T,O,_);nt.type=_n,nt.needsUpdate=!0;const D=y*4;for(let H=0;H<_;H++){const J=A[H],q=b[H],Z=N[H],K=T*O*4*H;for(let it=0;it<J.count;it++){const at=it*D;v===!0&&(a.fromBufferAttribute(J,it),k[K+at+0]=a.x,k[K+at+1]=a.y,k[K+at+2]=a.z,k[K+at+3]=0),x===!0&&(a.fromBufferAttribute(q,it),k[K+at+4]=a.x,k[K+at+5]=a.y,k[K+at+6]=a.z,k[K+at+7]=0),C===!0&&(a.fromBufferAttribute(Z,it),k[K+at+8]=a.x,k[K+at+9]=a.y,k[K+at+10]=a.z,k[K+at+11]=Z.itemSize===4?a.w:1)}}f={count:_,texture:nt,size:new rt(T,O)},r.set(h,f),h.addEventListener("dispose",F)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<g;x++){const C=_[x];C[0]=x,C[1]=d[x]}_.sort(Ef);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(yf);const f=h.morphAttributes.position,p=h.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const C=o[x],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(f&&h.getAttribute("morphTarget"+x)!==f[A]&&h.setAttribute("morphTarget"+x,f[A]),p&&h.getAttribute("morphNormal"+x)!==p[A]&&h.setAttribute("morphNormal"+x,p[A]),i[x]=b,S+=b):(f&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Tf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ml extends Re{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:On,h!==On&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=gn),n===void 0&&h===gi&&(n=Nn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gl=new Re,_l=new ml(1,1);_l.compareFunction=el;const vl=new rl,xl=new lh,Sl=new dl,uo=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),go=new Float32Array(4);function Si(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=uo[i];if(r===void 0&&(r=new Float32Array(i),uo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Is(s,t){let e=fo[t];e===void 0&&(e=new Int32Array(t),fo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function Lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;go.set(n),s.uniformMatrix2fv(this.addr,!1,go),ue(e,n)}}function Pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;mo.set(n),s.uniformMatrix3fv(this.addr,!1,mo),ue(e,n)}}function Df(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;po.set(n),s.uniformMatrix4fv(this.addr,!1,po),ue(e,n)}}function If(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function Of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function Ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function Hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?_l:gl;e.setTexture2D(t||r,i)}function kf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xl,i)}function Wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sl,i)}function Vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vl,i)}function Xf(s){switch(s){case 5126:return Af;case 35664:return bf;case 35665:return Cf;case 35666:return Rf;case 35674:return Lf;case 35675:return Pf;case 35676:return Df;case 5124:case 35670:return If;case 35667:case 35671:return Uf;case 35668:case 35672:return Nf;case 35669:case 35673:return Of;case 5125:return Ff;case 36294:return zf;case 36295:return Bf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Yf(s,t){s.uniform1fv(this.addr,t)}function qf(s,t){const e=Si(t,this.size,2);s.uniform2fv(this.addr,e)}function Zf(s,t){const e=Si(t,this.size,3);s.uniform3fv(this.addr,e)}function Jf(s,t){const e=Si(t,this.size,4);s.uniform4fv(this.addr,e)}function Kf(s,t){const e=Si(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jf(s,t){const e=Si(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $f(s,t){const e=Si(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Qf(s,t){s.uniform1iv(this.addr,t)}function tp(s,t){s.uniform2iv(this.addr,t)}function ep(s,t){s.uniform3iv(this.addr,t)}function np(s,t){s.uniform4iv(this.addr,t)}function ip(s,t){s.uniform1uiv(this.addr,t)}function sp(s,t){s.uniform2uiv(this.addr,t)}function rp(s,t){s.uniform3uiv(this.addr,t)}function ap(s,t){s.uniform4uiv(this.addr,t)}function op(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||gl,r[a])}function lp(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xl,r[a])}function cp(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Sl,r[a])}function hp(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||vl,r[a])}function up(s){switch(s){case 5126:return Yf;case 35664:return qf;case 35665:return Zf;case 35666:return Jf;case 35674:return Kf;case 35675:return jf;case 35676:return $f;case 5124:case 35670:return Qf;case 35667:case 35671:return tp;case 35668:case 35672:return ep;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xf(e.type)}}class fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=up(e.type)}}class pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function _o(s,t){s.seq.push(t),s.map[t.id]=t}function mp(s,t,e){const n=s.name,i=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),a=_r.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_o(e,c===void 0?new dp(o,s,t):new fp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new pp(o),_o(e,u)),e=u}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);mp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function vo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const gp=37297;let _p=0;function vp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function xp(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===Ts&&e===ws?n="LinearDisplayP3ToLinearSRGB":t===ws&&e===Ts&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case Ps:return[n,"LinearTransferOETF"];case _e:case Br:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+vp(s.getShaderSource(t),a)}else return i}function Sp(s,t){const e=xp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mp(s,t){let e;switch(t){case vc:e="Linear";break;case xc:e="Reinhard";break;case Sc:e="OptimizedCineon";break;case Mc:e="ACESFilmic";break;case Ec:e="AgX";break;case yc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function Ep(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ci).join(`
`)}function wp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ci(s){return s!==""}function So(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(s){return s.replace(Ap,Cp)}const bp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cp(s,t){let e=Bt[t];if(e===void 0){const n=bp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dr(e)}const Rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(Rp,Lp)}function Lp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Eo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ip(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Up(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case gc:t="ENVMAP_BLENDING_MIX";break;case _c:t="ENVMAP_BLENDING_ADD";break}return t}function Np(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Op(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pp(e),c=Dp(e),h=Ip(e),u=Up(e),d=Np(e),m=e.isWebGL2?"":yp(e),g=Ep(e),_=wp(r),f=i.createProgram();let p,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ci).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ci).join(`
`),S.length>0&&(S+=`
`)):(p=[Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),S=[m,Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Sp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ci).join(`
`)),a=Dr(a),a=So(a,e),a=Mo(a,e),o=Dr(o),o=So(o,e),o=Mo(o,e),a=yo(a),o=yo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const x=v+p+a,C=v+S+o,A=vo(i,i.VERTEX_SHADER,x),b=vo(i,i.FRAGMENT_SHADER,C);i.attachShader(f,A),i.attachShader(f,b),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function N(k){if(s.debug.checkShaderErrors){const nt=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(b).trim();let H=!0,J=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,A,b);else{const q=xo(i,A,"vertex"),Z=xo(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+q+`
`+Z)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(D===""||F==="")&&(J=!1);J&&(k.diagnostics={runnable:H,programLog:nt,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:S}})}i.deleteShader(A),i.deleteShader(b),y=new Ss(i,f),T=Tp(i,f)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(f,gp)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_p++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=b,this}let Fp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bp(t),e.set(t,n)),n}}class Bp{constructor(t){this.id=Fp++,this.code=t,this.usedTimes=0}}function Gp(s,t,e,n,i,r,a){const o=new al,l=new zp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function f(y,T,O,k,nt){const D=k.fog,F=nt.geometry,H=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),q=J&&J.mapping===Ls?J.image.height:null,Z=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=K!==void 0?K.length:0;let at=0;F.morphAttributes.position!==void 0&&(at=1),F.morphAttributes.normal!==void 0&&(at=2),F.morphAttributes.color!==void 0&&(at=3);let V,$,ft,St;if(Z){const ye=Je[Z];V=ye.vertexShader,$=ye.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const gt=s.getRenderTarget(),Ct=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,Mt=!!y.map,Pt=!!y.matcap,R=!!J,ot=!!y.aoMap,Y=!!y.lightMap,st=!!y.bumpMap,X=!!y.normalMap,Et=!!y.displacementMap,pt=!!y.emissiveMap,E=!!y.metalnessMap,M=!!y.roughnessMap,U=y.anisotropy>0,et=y.clearcoat>0,Q=y.iridescence>0,j=y.sheen>0,xt=y.transmission>0,ht=U&&!!y.anisotropyMap,_t=et&&!!y.clearcoatMap,Tt=et&&!!y.clearcoatNormalMap,Ot=et&&!!y.clearcoatRoughnessMap,tt=Q&&!!y.iridescenceMap,qt=Q&&!!y.iridescenceThicknessMap,Vt=j&&!!y.sheenColorMap,Dt=j&&!!y.sheenRoughnessMap,wt=!!y.specularMap,vt=!!y.specularColorMap,zt=!!y.specularIntensityMap,Zt=xt&&!!y.transmissionMap,se=xt&&!!y.thicknessMap,Ht=!!y.gradientMap,lt=!!y.alphaMap,P=y.alphaTest>0,ut=!!y.alphaHash,dt=!!y.extensions,Rt=!!F.attributes.uv1,At=!!F.attributes.uv2,Kt=!!F.attributes.uv3;let jt=Sn;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:It,instancing:Ct,instancingColor:Ct&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:cn,map:Mt,matcap:Pt,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:Y,bumpMap:st,normalMap:X,displacementMap:d&&Et,emissiveMap:pt,normalMapObjectSpace:X&&y.normalMapType===Nc,normalMapTangentSpace:X&&y.normalMapType===tl,metalnessMap:E,roughnessMap:M,anisotropy:U,anisotropyMap:ht,clearcoat:et,clearcoatMap:_t,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:Dt,specularMap:wt,specularColorMap:vt,specularIntensityMap:zt,transmission:xt,transmissionMap:Zt,thicknessMap:se,gradientMap:Ht,opaque:y.transparent===!1&&y.blending===ui,alphaMap:lt,alphaTest:P,alphaHash:ut,combine:y.combine,mapUv:Mt&&_(y.map.channel),aoMapUv:ot&&_(y.aoMap.channel),lightMapUv:Y&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:Et&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:wt&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:zt&&_(y.specularIntensityMap.channel),transmissionMapUv:Zt&&_(y.transmissionMap.channel),thicknessMapUv:se&&_(y.thicknessMap.channel),alphaMapUv:lt&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(X||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:At,vertexUv3s:Kt,pointsUvs:nt.isPoints===!0&&!!F.attributes.uv&&(Mt||lt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:dt&&y.extensions.derivatives===!0,extensionFragDepth:dt&&y.extensions.fragDepth===!0,extensionDrawBuffers:dt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)T.push(O),T.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(S(T,y),v(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function x(y){const T=g[y.type];let O;if(T){const k=Je[T];O=Mh.clone(k.uniforms)}else O=y.uniforms;return O}function C(y,T){let O;for(let k=0,nt=c.length;k<nt;k++){const D=c[k];if(D.cacheKey===T){O=D,++O.usedTimes;break}}return O===void 0&&(O=new Op(s,T,y,r),c.push(O)),O}function A(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:N}}function Hp(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function kp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function To(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,g,_,f){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function o(u,d,m,g,_,f){const p=a(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,d,m,g,_,f){const p=a(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||kp),n.length>1&&n.sort(d||wo),i.length>1&&i.sort(d||wo)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new To,s.set(n,[a])):i>=r.length?(a=new To,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Xp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Yp=0;function qp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Zp(s,t){const e=new Vp,n=Xp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,a=new ae,o=new ae;function l(h,u){let d=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,f=0,p=0,S=0,v=0,x=0,C=0,A=0,b=0,N=0,y=0;h.sort(qp);const T=u===!0?Math.PI:1;for(let k=0,nt=h.length;k<nt;k++){const D=h[k],F=D.color,H=D.intensity,J=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*H*T,m+=F.g*H*T,g+=F.b*H*T;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);y++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const K=D.shadow,it=n.get(D);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=Z,_++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(F).multiplyScalar(H*T),Z.distance=J,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[p]=Z;const K=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,K.updateMatrices(D),D.castShadow&&N++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const it=n.get(D);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.spotShadow[p]=it,i.spotShadowMap[p]=q,A++}p++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(F).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=Z,S++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const K=D.shadow,it=n.get(D);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=q,i.pointShadowMatrix[f]=D.shadow.matrix,C++}i.point[f]=Z,f++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H*T),Z.groundColor.copy(D.groundColor).multiplyScalar(H*T),i.hemi[v]=Z,v++}}S>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==f||O.spotLength!==p||O.rectAreaLength!==S||O.hemiLength!==v||O.numDirectionalShadows!==x||O.numPointShadows!==C||O.numSpotShadows!==A||O.numSpotMaps!==b||O.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=y,O.directionalLength=_,O.pointLength=f,O.spotLength=p,O.rectAreaLength=S,O.hemiLength=v,O.numDirectionalShadows=x,O.numPointShadows=C,O.numSpotShadows=A,O.numSpotMaps=b,O.numLightProbes=y,i.version=Yp++)}function c(h,u){let d=0,m=0,g=0,_=0,f=0;const p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const x=h[S];if(x.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(x.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),m++}else if(x.isHemisphereLight){const C=i.hemi[f];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Ao(s,t){const e=new Zp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Ao(s,t),e.set(r,[l])):a>=o.length?(l=new Ao(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Kp extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qp=`uniform sampler2D shadow_pass;
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
}`;function tm(s,t,e){let n=new kr;const i=new rt,r=new rt,a=new me,o=new Kp({depthPacking:Uc}),l=new jp,c={},h=e.maxTextureSize,u={[wn]:Ce,[Ce]:wn,[Fe]:Fe},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:$p,fragmentShader:Qp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let p=this.type;this.render=function(A,b,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),k=s.state;k.setBlending(xn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const nt=p!==rn&&this.type===rn,D=p===rn&&this.type!==rn;for(let F=0,H=A.length;F<H;F++){const J=A[F],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Z=q.getFrameExtents();if(i.multiply(Z),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,q.mapSize.y=r.y)),q.map===null||nt===!0||D===!0){const it=this.type!==rn?{minFilter:Ae,magFilter:Ae}:{};q.map!==null&&q.map.dispose(),q.map=new zn(i.x,i.y,it),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const K=q.getViewportCount();for(let it=0;it<K;it++){const at=q.getViewport(it);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),k.viewport(a),q.updateMatrices(J,it),n=q.getFrustum(),x(b,N,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===rn&&S(q,N),q.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(y,T,O)};function S(A,b){const N=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,N,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,N,m,_,null)}function v(A,b,N,y){let T=null;const O=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)T=O;else if(T=N.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=T.uuid,nt=b.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let F=D[nt];F===void 0&&(F=T.clone(),D[nt]=F,b.addEventListener("dispose",C)),T=F}if(T.visible=b.visible,T.wireframe=b.wireframe,y===rn?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:u[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=N}return T}function x(A,b,N,y,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),D=A.material;if(Array.isArray(D)){const F=nt.groups;for(let H=0,J=F.length;H<J;H++){const q=F[H],Z=D[q.materialIndex];if(Z&&Z.visible){const K=v(A,Z,y,T);A.onBeforeShadow(s,A,b,N,nt,K,q),s.renderBufferDirect(N,null,nt,K,A,q),A.onAfterShadow(s,A,b,N,nt,K,q)}}}else if(D.visible){const F=v(A,D,y,T);A.onBeforeShadow(s,A,b,N,nt,F,null),s.renderBufferDirect(N,null,nt,F,A,null),A.onAfterShadow(s,A,b,N,nt,F,null)}}const k=A.children;for(let nt=0,D=k.length;nt<D;nt++)x(k[nt],b,N,y,T)}function C(A){A.target.removeEventListener("dispose",C);for(const N in c){const y=c[N],T=A.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function em(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const ut=new me;let dt=null;const Rt=new me(0,0,0,0);return{setMask:function(At){dt!==At&&!P&&(s.colorMask(At,At,At,At),dt=At)},setLocked:function(At){P=At},setClear:function(At,Kt,jt,de,ye){ye===!0&&(At*=de,Kt*=de,jt*=de),ut.set(At,Kt,jt,de),Rt.equals(ut)===!1&&(s.clearColor(At,Kt,jt,de),Rt.copy(ut))},reset:function(){P=!1,dt=null,Rt.set(-1,0,0,0)}}}function r(){let P=!1,ut=null,dt=null,Rt=null;return{setTest:function(At){At?It(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(At){ut!==At&&!P&&(s.depthMask(At),ut=At)},setFunc:function(At){if(dt!==At){switch(At){case cc:s.depthFunc(s.NEVER);break;case hc:s.depthFunc(s.ALWAYS);break;case uc:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case fc:s.depthFunc(s.GEQUAL);break;case pc:s.depthFunc(s.GREATER);break;case mc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=At}},setLocked:function(At){P=At},setClear:function(At){Rt!==At&&(s.clearDepth(At),Rt=At)},reset:function(){P=!1,ut=null,dt=null,Rt=null}}}function a(){let P=!1,ut=null,dt=null,Rt=null,At=null,Kt=null,jt=null,de=null,ye=null;return{setTest:function($t){P||($t?It(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function($t){ut!==$t&&!P&&(s.stencilMask($t),ut=$t)},setFunc:function($t,Ee,Ze){(dt!==$t||Rt!==Ee||At!==Ze)&&(s.stencilFunc($t,Ee,Ze),dt=$t,Rt=Ee,At=Ze)},setOp:function($t,Ee,Ze){(Kt!==$t||jt!==Ee||de!==Ze)&&(s.stencilOp($t,Ee,Ze),Kt=$t,jt=Ee,de=Ze)},setLocked:function($t){P=$t},setClear:function($t){ye!==$t&&(s.clearStencil($t),ye=$t)},reset:function(){P=!1,ut=null,dt=null,Rt=null,At=null,Kt=null,jt=null,de=null,ye=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,v=null,x=null,C=null,A=null,b=null,N=null,y=new Xt(0,0,0),T=0,O=!1,k=null,nt=null,D=null,F=null,H=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Z>=2);let it=null,at={};const V=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ft=new me().fromArray(V),St=new me().fromArray($);function gt(P,ut,dt,Rt){const At=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(P,Kt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<dt;jt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(ut+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Kt}const Ct={};Ct[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(s.DEPTH_TEST),l.setFunc(ys),pt(!1),E(ra),It(s.CULL_FACE),X(xn);function It(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function Mt(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Pt(P,ut){return m[P]!==ut?(s.bindFramebuffer(P,ut),m[P]=ut,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ut),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function R(P,ut){let dt=_,Rt=!1;if(P)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),P.isWebGLMultipleRenderTargets){const At=P.texture;if(dt.length!==At.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,jt=At.length;Kt<jt;Kt++)dt[Kt]=s.COLOR_ATTACHMENT0+Kt;dt.length=At.length,Rt=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Rt=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Rt=!0);Rt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(P){return f!==P?(s.useProgram(P),f=P,!0):!1}const Y={[In]:s.FUNC_ADD,[Zl]:s.FUNC_SUBTRACT,[Jl]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[ca]=s.MIN,Y[ha]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(Y[ca]=P.MIN_EXT,Y[ha]=P.MAX_EXT)}const st={[Kl]:s.ZERO,[jl]:s.ONE,[$l]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[sc]:s.SRC_ALPHA_SATURATE,[nc]:s.DST_COLOR,[tc]:s.DST_ALPHA,[Ql]:s.ONE_MINUS_SRC_COLOR,[Tr]:s.ONE_MINUS_SRC_ALPHA,[ic]:s.ONE_MINUS_DST_COLOR,[ec]:s.ONE_MINUS_DST_ALPHA,[rc]:s.CONSTANT_COLOR,[ac]:s.ONE_MINUS_CONSTANT_COLOR,[oc]:s.CONSTANT_ALPHA,[lc]:s.ONE_MINUS_CONSTANT_ALPHA};function X(P,ut,dt,Rt,At,Kt,jt,de,ye,$t){if(P===xn){p===!0&&(Mt(s.BLEND),p=!1);return}if(p===!1&&(It(s.BLEND),p=!0),P!==ql){if(P!==S||$t!==O){if((v!==In||A!==In)&&(s.blendEquation(s.FUNC_ADD),v=In,A=In),$t)switch(P){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case aa:s.blendFunc(s.ONE,s.ONE);break;case oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case aa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case la:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,C=null,b=null,N=null,y.set(0,0,0),T=0,S=P,O=$t}return}At=At||ut,Kt=Kt||dt,jt=jt||Rt,(ut!==v||At!==A)&&(s.blendEquationSeparate(Y[ut],Y[At]),v=ut,A=At),(dt!==x||Rt!==C||Kt!==b||jt!==N)&&(s.blendFuncSeparate(st[dt],st[Rt],st[Kt],st[jt]),x=dt,C=Rt,b=Kt,N=jt),(de.equals(y)===!1||ye!==T)&&(s.blendColor(de.r,de.g,de.b,ye),y.copy(de),T=ye),S=P,O=!1}function Et(P,ut){P.side===Fe?Mt(s.CULL_FACE):It(s.CULL_FACE);let dt=P.side===Ce;ut&&(dt=!dt),pt(dt),P.blending===ui&&P.transparent===!1?X(xn):X(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Rt=P.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),U(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?It(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(P){k!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),k=P)}function E(P){P!==Xl?(It(s.CULL_FACE),P!==nt&&(P===ra?s.cullFace(s.BACK):P===Yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),nt=P}function M(P){P!==D&&(q&&s.lineWidth(P),D=P)}function U(P,ut,dt){P?(It(s.POLYGON_OFFSET_FILL),(F!==ut||H!==dt)&&(s.polygonOffset(ut,dt),F=ut,H=dt)):Mt(s.POLYGON_OFFSET_FILL)}function et(P){P?It(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Q(P){P===void 0&&(P=s.TEXTURE0+J-1),it!==P&&(s.activeTexture(P),it=P)}function j(P,ut,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+J-1:dt=it);let Rt=at[dt];Rt===void 0&&(Rt={type:void 0,texture:void 0},at[dt]=Rt),(Rt.type!==P||Rt.texture!==ut)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(P,ut||Ct[P]),Rt.type=P,Rt.texture=ut)}function xt(){const P=at[it];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(P){ft.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ft.copy(P))}function Zt(P){St.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),St.copy(P))}function se(P,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Rt=dt.get(P);Rt===void 0&&(Rt=s.getUniformBlockIndex(ut,P.name),dt.set(P,Rt))}function Ht(P,ut){const Rt=u.get(ut).get(P);h.get(ut)!==Rt&&(s.uniformBlockBinding(ut,Rt,P.__bindingPointIndex),h.set(ut,Rt))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,at={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,v=null,x=null,C=null,A=null,b=null,N=null,y=new Xt(0,0,0),T=0,O=!1,k=null,nt=null,D=null,F=null,H=null,ft.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:It,disable:Mt,bindFramebuffer:Pt,drawBuffers:R,useProgram:ot,setBlending:X,setMaterial:Et,setFlipSided:pt,setCullFace:E,setLineWidth:M,setPolygonOffset:U,setScissorTest:et,activeTexture:Q,bindTexture:j,unbindTexture:xt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:wt,texImage3D:vt,updateUBOMapping:se,uniformBlockBinding:Ht,texStorage2D:Vt,texStorage3D:Dt,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:tt,compressedTexSubImage3D:qt,scissor:zt,viewport:Zt,reset:lt}}function nm(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return m?new OffscreenCanvas(E,M):Cs("canvas")}function _(E,M,U,et){let Q=1;if((E.width>et||E.height>et)&&(Q=et/Math.max(E.width,E.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const j=M?bs:Math.floor,xt=j(Q*E.width),ht=j(Q*E.height);u===void 0&&(u=g(xt,ht));const _t=U?g(xt,ht):u;return _t.width=xt,_t.height=ht,_t.getContext("2d").drawImage(E,0,0,xt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xt+"x"+ht+")."),_t}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Pr(E.width)&&Pr(E.height)}function p(E){return o?!1:E.wrapS!==We||E.wrapT!==We||E.minFilter!==Ae&&E.minFilter!==Ne}function S(E,M){return E.generateMipmaps&&M&&E.minFilter!==Ae&&E.minFilter!==Ne}function v(E){s.generateMipmap(E)}function x(E,M,U,et,Q=!1){if(o===!1)return M;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=M;if(M===s.RED&&(U===s.FLOAT&&(j=s.R32F),U===s.HALF_FLOAT&&(j=s.R16F),U===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(j=s.R8UI),U===s.UNSIGNED_SHORT&&(j=s.R16UI),U===s.UNSIGNED_INT&&(j=s.R32UI),U===s.BYTE&&(j=s.R8I),U===s.SHORT&&(j=s.R16I),U===s.INT&&(j=s.R32I)),M===s.RG&&(U===s.FLOAT&&(j=s.RG32F),U===s.HALF_FLOAT&&(j=s.RG16F),U===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RGBA){const xt=Q?Es:Jt.getTransfer(et);U===s.FLOAT&&(j=s.RGBA32F),U===s.HALF_FLOAT&&(j=s.RGBA16F),U===s.UNSIGNED_BYTE&&(j=xt===Qt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function C(E,M,U){return S(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==Ne?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){return E===Ae||E===ua||E===Vs?s.NEAREST:s.LINEAR}function b(E){const M=E.target;M.removeEventListener("dispose",b),y(M),M.isVideoTexture&&h.delete(M)}function N(E){const M=E.target;M.removeEventListener("dispose",N),O(M)}function y(E){const M=n.get(E);if(M.__webglInit===void 0)return;const U=E.source,et=d.get(U);if(et){const Q=et[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(et).length===0&&d.delete(U)}n.remove(E)}function T(E){const M=n.get(E);s.deleteTexture(M.__webglTexture);const U=E.source,et=d.get(U);delete et[M.__cacheKey],a.memory.textures--}function O(E){const M=E.texture,U=n.get(E),et=n.get(M);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let j=0;j<U.__webglFramebuffer[Q].length;j++)s.deleteFramebuffer(U.__webglFramebuffer[Q][j]);else s.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)s.deleteFramebuffer(U.__webglFramebuffer[Q]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,j=M.length;Q<j;Q++){const xt=n.get(M[Q]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(E)}let k=0;function nt(){k=0}function D(){const E=k;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),k+=1,E}function F(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function H(E,M){const U=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(U,E,M);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+M)}function J(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ft(U,E,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+M)}function q(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ft(U,E,M);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+M)}function Z(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){St(U,E,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+M)}const K={[Cr]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[Rr]:s.MIRRORED_REPEAT},it={[Ae]:s.NEAREST,[ua]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},at={[Oc]:s.NEVER,[kc]:s.ALWAYS,[Fc]:s.LESS,[el]:s.LEQUAL,[zc]:s.EQUAL,[Hc]:s.GEQUAL,[Bc]:s.GREATER,[Gc]:s.NOTEQUAL};function V(E,M,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,K[M.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,it[M.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,it[M.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==We||M.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(M.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Ae&&M.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ae||M.minFilter!==Vs&&M.minFilter!==Ii||M.type===_n&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ui&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(E,M){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",b));const et=M.source;let Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));const j=F(M);if(j!==E.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[j].usedTimes++;const xt=Q[E.__cacheKey];xt!==void 0&&(Q[E.__cacheKey].usedTimes--,xt.usedTimes===0&&T(M)),E.__cacheKey=j,E.__webglTexture=Q[j].texture}return U}function ft(E,M,U){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const Q=$(E,M),j=M.source;e.bindTexture(et,E.__webglTexture,s.TEXTURE0+U);const xt=n.get(j);if(j.version!==xt.__version||Q===!0){e.activeTexture(s.TEXTURE0+U);const ht=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===ze?null:Jt.getPrimaries(M.colorSpace),Tt=M.colorSpace===ze||ht===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ot=p(M)&&f(M.image)===!1;let tt=_(M.image,Ot,!1,i.maxTextureSize);tt=pt(M,tt);const qt=f(tt)||o,Vt=r.convert(M.format,M.colorSpace);let Dt=r.convert(M.type),wt=x(M.internalFormat,Vt,Dt,M.colorSpace,M.isVideoTexture);V(et,M,qt);let vt;const zt=M.mipmaps,Zt=o&&M.isVideoTexture!==!0&&wt!==$o,se=xt.__version===void 0||Q===!0,Ht=C(M,tt,qt);if(M.isDepthTexture)wt=s.DEPTH_COMPONENT,o?M.type===_n?wt=s.DEPTH_COMPONENT32F:M.type===gn?wt=s.DEPTH_COMPONENT24:M.type===Nn?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:M.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===On&&wt===s.DEPTH_COMPONENT&&M.type!==zr&&M.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gn,Dt=r.convert(M.type)),M.format===gi&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,M.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Nn,Dt=r.convert(M.type))),se&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,Vt,Dt,null));else if(M.isDataTexture)if(zt.length>0&&qt){Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,wt,zt[0].width,zt[0].height);for(let lt=0,P=zt.length;lt<P;lt++)vt=zt[lt],Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Vt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,lt,wt,vt.width,vt.height,0,Vt,Dt,vt.data);M.generateMipmaps=!1}else Zt?(se&&e.texStorage2D(s.TEXTURE_2D,Ht,wt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,Vt,Dt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,Vt,Dt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,wt,zt[0].width,zt[0].height,tt.depth);for(let lt=0,P=zt.length;lt<P;lt++)vt=zt[lt],M.format!==Ve?Vt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,tt.depth,Vt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,wt,vt.width,vt.height,tt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,tt.depth,Vt,Dt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,wt,vt.width,vt.height,tt.depth,0,Vt,Dt,vt.data)}else{Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,wt,zt[0].width,zt[0].height);for(let lt=0,P=zt.length;lt<P;lt++)vt=zt[lt],M.format!==Ve?Vt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,vt.width,vt.height,Vt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,lt,wt,vt.width,vt.height,0,Vt,Dt,vt.data)}else if(M.isDataArrayTexture)Zt?(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,wt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Vt,Dt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,Vt,Dt,tt.data);else if(M.isData3DTexture)Zt?(se&&e.texStorage3D(s.TEXTURE_3D,Ht,wt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Vt,Dt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,Vt,Dt,tt.data);else if(M.isFramebufferTexture){if(se)if(Zt)e.texStorage2D(s.TEXTURE_2D,Ht,wt,tt.width,tt.height);else{let lt=tt.width,P=tt.height;for(let ut=0;ut<Ht;ut++)e.texImage2D(s.TEXTURE_2D,ut,wt,lt,P,0,Vt,Dt,null),lt>>=1,P>>=1}}else if(zt.length>0&&qt){Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,wt,zt[0].width,zt[0].height);for(let lt=0,P=zt.length;lt<P;lt++)vt=zt[lt],Zt?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Vt,Dt,vt):e.texImage2D(s.TEXTURE_2D,lt,wt,Vt,Dt,vt);M.generateMipmaps=!1}else Zt?(se&&e.texStorage2D(s.TEXTURE_2D,Ht,wt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Dt,tt)):e.texImage2D(s.TEXTURE_2D,0,wt,Vt,Dt,tt);S(M,qt)&&v(et),xt.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function St(E,M,U){if(M.image.length!==6)return;const et=$(E,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const j=n.get(Q);if(Q.version!==j.__version||et===!0){e.activeTexture(s.TEXTURE0+U);const xt=Jt.getPrimaries(Jt.workingColorSpace),ht=M.colorSpace===ze?null:Jt.getPrimaries(M.colorSpace),_t=M.colorSpace===ze||xt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let lt=0;lt<6;lt++)!Tt&&!Ot?tt[lt]=_(M.image[lt],!1,!0,i.maxCubemapSize):tt[lt]=Ot?M.image[lt].image:M.image[lt],tt[lt]=pt(M,tt[lt]);const qt=tt[0],Vt=f(qt)||o,Dt=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),vt=x(M.internalFormat,Dt,wt,M.colorSpace),zt=o&&M.isVideoTexture!==!0,Zt=j.__version===void 0||et===!0;let se=C(M,qt,Vt);V(s.TEXTURE_CUBE_MAP,M,Vt);let Ht;if(Tt){zt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,se,vt,qt.width,qt.height);for(let lt=0;lt<6;lt++){Ht=tt[lt].mipmaps;for(let P=0;P<Ht.length;P++){const ut=Ht[P];M.format!==Ve?Dt!==null?zt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P,0,0,ut.width,ut.height,Dt,wt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P,vt,ut.width,ut.height,0,Dt,wt,ut.data)}}}else{Ht=M.mipmaps,zt&&Zt&&(Ht.length>0&&se++,e.texStorage2D(s.TEXTURE_CUBE_MAP,se,vt,tt[0].width,tt[0].height));for(let lt=0;lt<6;lt++)if(Ot){zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,tt[lt].width,tt[lt].height,Dt,wt,tt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,tt[lt].width,tt[lt].height,0,Dt,wt,tt[lt].data);for(let P=0;P<Ht.length;P++){const dt=Ht[P].image[lt].image;zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P+1,0,0,dt.width,dt.height,Dt,wt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P+1,vt,dt.width,dt.height,0,Dt,wt,dt.data)}}else{zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt,wt,tt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,Dt,wt,tt[lt]);for(let P=0;P<Ht.length;P++){const ut=Ht[P];zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P+1,0,0,Dt,wt,ut.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,P+1,vt,Dt,wt,ut.image[lt])}}}S(M,Vt)&&v(s.TEXTURE_CUBE_MAP),j.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function gt(E,M,U,et,Q,j){const xt=r.convert(U.format,U.colorSpace),ht=r.convert(U.type),_t=x(U.internalFormat,xt,ht,U.colorSpace);if(!n.get(M).__hasExternalTextures){const Ot=Math.max(1,M.width>>j),tt=Math.max(1,M.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,_t,Ot,tt,M.depth,0,xt,ht,null):e.texImage2D(Q,j,_t,Ot,tt,0,xt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,n.get(U).__webglTexture,0,st(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,n.get(U).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(E,M,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||X(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===_n?et=s.DEPTH_COMPONENT32F:Q.type===gn&&(et=s.DEPTH_COMPONENT24));const j=st(M);X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,et,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,et,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const et=st(M);U&&X(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const et=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<et.length;Q++){const j=et[Q],xt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),_t=x(j.internalFormat,xt,ht,j.colorSpace),Tt=st(M);U&&X(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,_t,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,_t,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_t,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const et=n.get(M.depthTexture).__webglTexture,Q=st(M);if(M.depthTexture.format===On)X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(M.depthTexture.format===gi)X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Mt(E){const M=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,E)}else if(U){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=s.createRenderbuffer(),Ct(M.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ct(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(E,M,U){const et=n.get(E);M!==void 0&&gt(et.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Mt(E)}function R(E){const M=E.texture,U=n.get(E),et=n.get(M);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,a.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,j=E.isWebGLMultipleRenderTargets===!0,xt=f(E)||o;if(Q){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)U.__webglFramebuffer[ht][_t]=s.createFramebuffer()}else U.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)U.__webglFramebuffer[ht]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(j)if(i.drawBuffers){const ht=E.texture;for(let _t=0,Tt=ht.length;_t<Tt;_t++){const Ot=n.get(ht[_t]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&X(E)===!1){const ht=j?M:[M];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){const Tt=ht[_t];U.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[_t]);const Ot=r.convert(Tt.format,Tt.colorSpace),tt=r.convert(Tt.type),qt=x(Tt.internalFormat,Ot,tt,Tt.colorSpace,E.isXRRenderTarget===!0),Vt=st(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,qt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,U.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,xt);for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)gt(U.__webglFramebuffer[ht][_t],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else gt(U.__webglFramebuffer[ht],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(M,xt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){const ht=E.texture;for(let _t=0,Tt=ht.length;_t<Tt;_t++){const Ot=ht[_t],tt=n.get(Ot);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),V(s.TEXTURE_2D,Ot,xt),gt(U.__webglFramebuffer,E,Ot,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),S(Ot,xt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ht=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,et.__webglTexture),V(ht,M,xt),o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)gt(U.__webglFramebuffer[_t],E,M,s.COLOR_ATTACHMENT0,ht,_t);else gt(U.__webglFramebuffer,E,M,s.COLOR_ATTACHMENT0,ht,0);S(M,xt)&&v(ht),e.unbindTexture()}E.depthBuffer&&Mt(E)}function ot(E){const M=f(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,Q=U.length;et<Q;et++){const j=U[et];if(S(j,M)){const xt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(j).__webglTexture;e.bindTexture(xt,ht),v(xt),e.unbindTexture()}}}function Y(E){if(o&&E.samples>0&&X(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,et=E.height;let Q=s.COLOR_BUFFER_BIT;const j=[],xt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(E),_t=E.isWebGLMultipleRenderTargets===!0;if(_t)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){j.push(s.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&j.push(xt);const Ot=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ot===!1&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),_t){const tt=n.get(M[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,U,et,0,0,U,et,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]);const Ot=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function st(E){return Math.min(i.maxSamples,E.samples)}function X(E){const M=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Et(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function pt(E,M){const U=E.colorSpace,et=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Lr||U!==cn&&U!==ze&&(Jt.getTransfer(U)===Qt?o===!1?t.has("EXT_sRGB")===!0&&et===Ve?(E.format=Lr,E.minFilter=Ne,E.generateMipmaps=!1):M=il.sRGBToLinear(M):(et!==Ve||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}this.allocateTextureUnit=D,this.resetTextureUnits=nt,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=X}function im(s,t,e){const n=e.isWebGL2;function i(r,a=ze){let o;const l=Jt.getTransfer(a);if(r===Mn)return s.UNSIGNED_BYTE;if(r===qo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tc)return s.BYTE;if(r===Ac)return s.SHORT;if(r===zr)return s.UNSIGNED_SHORT;if(r===Yo)return s.INT;if(r===gn)return s.UNSIGNED_INT;if(r===_n)return s.FLOAT;if(r===Ui)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bc)return s.ALPHA;if(r===Ve)return s.RGBA;if(r===Cc)return s.LUMINANCE;if(r===Rc)return s.LUMINANCE_ALPHA;if(r===On)return s.DEPTH_COMPONENT;if(r===gi)return s.DEPTH_STENCIL;if(r===Lr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Lc)return s.RED;if(r===Jo)return s.RED_INTEGER;if(r===Pc)return s.RG;if(r===Ko)return s.RG_INTEGER;if(r===jo)return s.RGBA_INTEGER;if(r===Xs||r===Ys||r===qs||r===Zs)if(l===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ys)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===da||r===fa||r===pa||r===ma)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===da)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ma)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$o)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ga||r===_a)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ga)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_a)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===va||r===xa||r===Sa||r===Ma||r===ya||r===Ea||r===wa||r===Ta||r===Aa||r===ba||r===Ca||r===Ra||r===La||r===Pa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===va)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xa)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sa)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ma)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ya)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ea)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wa)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ta)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Aa)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ba)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ca)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ra)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===La)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pa)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Js||r===Da||r===Ia)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Js)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Da)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ia)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dc||r===Ua||r===Na||r===Oa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Js)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ua)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Na)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class sm extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ke extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class am extends xi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let f=null,p=null;const S=[],v=[],x=new rt;let C=null;const A=new Oe;A.layers.enable(1),A.viewport=new me;const b=new Oe;b.layers.enable(2),b.viewport=new me;const N=[A,b],y=new sm;y.layers.enable(1),y.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=S[V];return $===void 0&&($=new vr,S[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=S[V];return $===void 0&&($=new vr,S[V]=$),$.getGripSpace()},this.getHand=function(V){let $=S[V];return $===void 0&&($=new vr,S[V]=$),$.getHandSpace()};function k(V){const $=v.indexOf(V.inputSource);if($===-1)return;const ft=S[$];ft!==void 0&&(ft.update(V.inputSource,V.frame,c||a),ft.dispatchEvent({type:V.type,data:V.inputSource}))}function nt(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",D);for(let V=0;V<S.length;V++){const $=v[V];$!==null&&(v[V]=null,S[V].disconnect($))}T=null,O=null,t.setRenderTarget(f),m=null,d=null,u=null,i=null,p=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(x),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new zn(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ft=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?gi:On,ft=_.stencil?Nn:gn);const gt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new zn(d.textureWidth,d.textureHeight,{format:Ve,type:Mn,depthTexture:new ml(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ct=t.properties.get(p);Ct.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(V){for(let $=0;$<V.removed.length;$++){const ft=V.removed[$],St=v.indexOf(ft);St>=0&&(v[St]=null,S[St].disconnect(ft))}for(let $=0;$<V.added.length;$++){const ft=V.added[$];let St=v.indexOf(ft);if(St===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=v.length){v.push(ft),St=Ct;break}else if(v[Ct]===null){v[Ct]=ft,St=Ct;break}if(St===-1)break}const gt=S[St];gt&&gt.connect(ft)}}const F=new L,H=new L;function J(V,$,ft){F.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ft.matrixWorld);const St=F.distanceTo(H),gt=$.projectionMatrix.elements,Ct=ft.projectionMatrix.elements,It=gt[14]/(gt[10]-1),Mt=gt[14]/(gt[10]+1),Pt=(gt[9]+1)/gt[5],R=(gt[9]-1)/gt[5],ot=(gt[8]-1)/gt[0],Y=(Ct[8]+1)/Ct[0],st=It*ot,X=It*Y,Et=St/(-ot+Y),pt=Et*-ot;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(pt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=It+Et,M=Mt+Et,U=st-pt,et=X+(St-pt),Q=Pt*Mt/M*E,j=R*Mt/M*E;V.projectionMatrix.makePerspective(U,et,Q,j,E,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=b.near=A.near=V.near,y.far=b.far=A.far=V.far,(T!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,O=y.far);const $=V.parent,ft=y.cameras;q(y,$);for(let St=0;St<ft.length;St++)q(ft[St],$);ft.length===2?J(y,A,b):y.projectionMatrix.copy(A.projectionMatrix),Z(V,y,$)};function Z(V,$,ft){ft===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ft.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ni*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let K=null;function it(V,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let St=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let gt=0;gt<ft.length;gt++){const Ct=ft[gt];let It=null;if(m!==null)It=m.getViewport(Ct);else{const Pt=u.getViewSubImage(d,Ct);It=Pt.viewport,gt===0&&(t.setRenderTargetTextures(p,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(p))}let Mt=N[gt];Mt===void 0&&(Mt=new Oe,Mt.layers.enable(gt),Mt.viewport=new me,N[gt]=Mt),Mt.matrix.fromArray(Ct.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Ct.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(y.matrix.copy(Mt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(Mt)}}for(let ft=0;ft<S.length;ft++){const St=v[ft],gt=S[ft];St!==null&&gt!==void 0&&gt.update(St,$,c||a)}K&&K(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const at=new fl;at.setAnimationLoop(it),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function om(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,hl(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,x)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ce&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ce&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=t.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lm(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const x=v.program;n.uniformBlockBinding(S,x)}function c(S,v){let x=i[S.id];x===void 0&&(g(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",f));const C=v.program;n.updateUBOMapping(S,C);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const v=u();S.__bindingPointIndex=v;const x=s.createBuffer(),C=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],x=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,b=x.length;A<b;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,T=N.length;y<T;y++){const O=N[y];if(m(O,A,y,C)===!0){const k=O.__offset,nt=Array.isArray(O.value)?O.value:[O.value];let D=0;for(let F=0;F<nt.length;F++){const H=nt[F],J=_(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+D,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,v,x,C){const A=S.value,b=v+"_"+x;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const N=C[b];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[b]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(S){const v=S.uniforms;let x=0;const C=16;for(let b=0,N=v.length;b<N;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,O=y.length;T<O;T++){const k=y[T],nt=Array.isArray(k.value)?k.value:[k.value];for(let D=0,F=nt.length;D<F;D++){const H=nt[D],J=_(H),q=x%C;q!==0&&C-q<J.boundary&&(x+=C-q),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=J.storage}}}const A=x%C;return A>0&&(x+=C-A),S.__size=x,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function f(S){const v=S.target;v.removeEventListener("dispose",f);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ml{constructor(t={}){const{canvas:e=ih(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let x=!1,C=0,A=0,b=null,N=-1,y=null;const T=new me,O=new me;let k=null;const nt=new Xt(0);let D=0,F=e.width,H=e.height,J=1,q=null,Z=null;const K=new me(0,0,F,H),it=new me(0,0,F,H);let at=!1;const V=new kr;let $=!1,ft=!1,St=null;const gt=new ae,Ct=new rt,It=new L,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return b===null?J:1}let R=n;function ot(w,I){for(let B=0;B<w.length;B++){const G=w[B],z=e.getContext(G,I);if(z!==null)return z}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fr}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),R=ot(I,w),R===null)throw ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,st,X,Et,pt,E,M,U,et,Q,j,xt,ht,_t,Tt,Ot,tt,qt,Vt,Dt,wt,vt,zt,Zt;function se(){Y=new vf(R),st=new df(R,Y,t),Y.init(st),vt=new im(R,Y,st),X=new em(R,Y,st),Et=new Mf(R),pt=new Hp,E=new nm(R,Y,X,pt,st,vt,Et),M=new pf(v),U=new _f(v),et=new Ch(R,st),zt=new hf(R,Y,et,st),Q=new xf(R,et,Et,zt),j=new Tf(R,Q,et,Et),Vt=new wf(R,st,E),Ot=new ff(pt),xt=new Gp(v,M,U,Y,st,zt,Ot),ht=new om(v,pt),_t=new Wp,Tt=new Jp(Y,st),qt=new cf(v,M,U,X,j,d,l),tt=new tm(v,j,st),Zt=new lm(R,Et,st,X),Dt=new uf(R,Y,Et,st),wt=new Sf(R,Y,Et,st),Et.programs=xt.programs,v.capabilities=st,v.extensions=Y,v.properties=pt,v.renderLists=_t,v.shadowMap=tt,v.state=X,v.info=Et}se();const Ht=new am(v,R);this.xr=Ht,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(F,H,!1))},this.getSize=function(w){return w.set(F,H)},this.setSize=function(w,I,B=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,H=I,e.width=Math.floor(w*J),e.height=Math.floor(I*J),B===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(F*J,H*J).floor()},this.setDrawingBufferSize=function(w,I,B){F=w,H=I,J=B,e.width=Math.floor(w*B),e.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,I,B,G){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,B,G),X.viewport(T.copy(K).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,I,B,G){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,I,B,G),X.scissor(O.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){X.setScissorTest(at=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,I=!0,B=!0){let G=0;if(w){let z=!1;if(b!==null){const mt=b.texture.format;z=mt===jo||mt===Ko||mt===Jo}if(z){const mt=b.texture.type,yt=mt===Mn||mt===gn||mt===zr||mt===Nn||mt===qo||mt===Zo,bt=qt.getClearColor(),Lt=qt.getClearAlpha(),Gt=bt.r,Ut=bt.g,Ft=bt.b;yt?(m[0]=Gt,m[1]=Ut,m[2]=Ft,m[3]=Lt,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Gt,g[1]=Ut,g[2]=Ft,g[3]=Lt,R.clearBufferiv(R.COLOR,0,g))}else G|=R.COLOR_BUFFER_BIT}I&&(G|=R.DEPTH_BUFFER_BIT),B&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),Tt.dispose(),pt.dispose(),M.dispose(),U.dispose(),j.dispose(),zt.dispose(),Zt.dispose(),xt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ye),Ht.removeEventListener("sessionend",$t),St&&(St.dispose(),St=null),Ee.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Et.autoReset,I=tt.enabled,B=tt.autoUpdate,G=tt.needsUpdate,z=tt.type;se(),Et.autoReset=w,tt.enabled=I,tt.autoUpdate=B,tt.needsUpdate=G,tt.type=z}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const I=w.target;I.removeEventListener("dispose",dt),Rt(I)}function Rt(w){At(w),pt.remove(w)}function At(w){const I=pt.get(w).programs;I!==void 0&&(I.forEach(function(B){xt.releaseProgram(B)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,G,z,mt){I===null&&(I=Mt);const yt=z.isMesh&&z.matrixWorld.determinant()<0,bt=Hl(w,I,B,G,z);X.setMaterial(G,yt);let Lt=B.index,Gt=1;if(G.wireframe===!0){if(Lt=Q.getWireframeAttribute(B),Lt===void 0)return;Gt=2}const Ut=B.drawRange,Ft=B.attributes.position;let oe=Ut.start*Gt,Le=(Ut.start+Ut.count)*Gt;mt!==null&&(oe=Math.max(oe,mt.start*Gt),Le=Math.min(Le,(mt.start+mt.count)*Gt)),Lt!==null?(oe=Math.max(oe,0),Le=Math.min(Le,Lt.count)):Ft!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Ft.count));const fe=Le-oe;if(fe<0||fe===1/0)return;zt.setup(z,G,bt,B,Lt);let $e,ee=Dt;if(Lt!==null&&($e=et.get(Lt),ee=wt,ee.setIndex($e)),z.isMesh)G.wireframe===!0?(X.setLineWidth(G.wireframeLinewidth*Pt()),ee.setMode(R.LINES)):ee.setMode(R.TRIANGLES);else if(z.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),X.setLineWidth(kt*Pt()),z.isLineSegments?ee.setMode(R.LINES):z.isLineLoop?ee.setMode(R.LINE_LOOP):ee.setMode(R.LINE_STRIP)}else z.isPoints?ee.setMode(R.POINTS):z.isSprite&&ee.setMode(R.TRIANGLES);if(z.isBatchedMesh)ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ee.renderInstances(oe,fe,z.count);else if(B.isInstancedBufferGeometry){const kt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Gs=Math.min(B.instanceCount,kt);ee.renderInstances(oe,fe,Gs)}else ee.render(oe,fe)};function Kt(w,I,B){w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=Ce,w.needsUpdate=!0,Vi(w,I,B),w.side=wn,w.needsUpdate=!0,Vi(w,I,B),w.side=Fe):Vi(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),f=Tt.get(B),f.init(),S.push(f),B.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==B&&w.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(v._useLegacyLights);const G=new Set;return w.traverse(function(z){const mt=z.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){const bt=mt[yt];Kt(bt,B,z),G.add(bt)}else Kt(mt,B,z),G.add(mt)}),S.pop(),f=null,G},this.compileAsync=function(w,I,B=null){const G=this.compile(w,I,B);return new Promise(z=>{function mt(){if(G.forEach(function(yt){pt.get(yt).currentProgram.isReady()&&G.delete(yt)}),G.size===0){z(w);return}setTimeout(mt,10)}Y.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let jt=null;function de(w){jt&&jt(w)}function ye(){Ee.stop()}function $t(){Ee.start()}const Ee=new fl;Ee.setAnimationLoop(de),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(w){jt=w,Ht.setAnimationLoop(w),w===null?Ee.stop():Ee.start()},Ht.addEventListener("sessionstart",ye),Ht.addEventListener("sessionend",$t),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(I),I=Ht.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,b),f=Tt.get(w,S.length),f.init(),S.push(f),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(gt),ft=this.localClippingEnabled,$=Ot.init(this.clippingPlanes,ft),_=_t.get(w,p.length),_.init(),p.push(_),Ze(w,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Z),this.info.render.frame++,$===!0&&Ot.beginShadows();const B=f.state.shadowsArray;if(tt.render(B,w,I),$===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(_,w),f.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let z=0,mt=G.length;z<mt;z++){const yt=G[z];Qr(_,w,yt,yt.viewport)}}else Qr(_,w,I);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(v,w,I),zt.resetDefaultState(),N=-1,y=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ze(w,I,B,G){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){G&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);const yt=j.update(w),bt=w.material;bt.visible&&_.push(w,yt,bt,B,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const yt=j.update(w),bt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),It.copy(yt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(bt)){const Lt=yt.groups;for(let Gt=0,Ut=Lt.length;Gt<Ut;Gt++){const Ft=Lt[Gt],oe=bt[Ft.materialIndex];oe&&oe.visible&&_.push(w,yt,oe,B,It.z,Ft)}}else bt.visible&&_.push(w,yt,bt,B,It.z,null)}}const mt=w.children;for(let yt=0,bt=mt.length;yt<bt;yt++)Ze(mt[yt],I,B,G)}function Qr(w,I,B,G){const z=w.opaque,mt=w.transmissive,yt=w.transparent;f.setupLightsView(B),$===!0&&Ot.setGlobalState(v.clippingPlanes,B),mt.length>0&&Gl(z,mt,I,B),G&&X.viewport(T.copy(G)),z.length>0&&Wi(z,I,B),mt.length>0&&Wi(mt,I,B),yt.length>0&&Wi(yt,I,B),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Gl(w,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const mt=st.isWebGL2;St===null&&(St=new zn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Ui:Mn,minFilter:Ii,samples:mt?4:0})),v.getDrawingBufferSize(Ct),mt?St.setSize(Ct.x,Ct.y):St.setSize(bs(Ct.x),bs(Ct.y));const yt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(nt),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const bt=v.toneMapping;v.toneMapping=Sn,Wi(w,B,G),E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St);let Lt=!1;for(let Gt=0,Ut=I.length;Gt<Ut;Gt++){const Ft=I[Gt],oe=Ft.object,Le=Ft.geometry,fe=Ft.material,$e=Ft.group;if(fe.side===Fe&&oe.layers.test(G.layers)){const ee=fe.side;fe.side=Ce,fe.needsUpdate=!0,ta(oe,B,G,Le,fe,$e),fe.side=ee,fe.needsUpdate=!0,Lt=!0}}Lt===!0&&(E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St)),v.setRenderTarget(yt),v.setClearColor(nt,D),v.toneMapping=bt}function Wi(w,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let z=0,mt=w.length;z<mt;z++){const yt=w[z],bt=yt.object,Lt=yt.geometry,Gt=G===null?yt.material:G,Ut=yt.group;bt.layers.test(B.layers)&&ta(bt,I,B,Lt,Gt,Ut)}}function ta(w,I,B,G,z,mt){w.onBeforeRender(v,I,B,G,z,mt),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,I,B,G,w,mt),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=Ce,z.needsUpdate=!0,v.renderBufferDirect(B,I,G,z,w,mt),z.side=wn,z.needsUpdate=!0,v.renderBufferDirect(B,I,G,z,w,mt),z.side=Fe):v.renderBufferDirect(B,I,G,z,w,mt),w.onAfterRender(v,I,B,G,z,mt)}function Vi(w,I,B){I.isScene!==!0&&(I=Mt);const G=pt.get(w),z=f.state.lights,mt=f.state.shadowsArray,yt=z.state.version,bt=xt.getParameters(w,z.state,mt,I,B),Lt=xt.getProgramCacheKey(bt);let Gt=G.programs;G.environment=w.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(w.isMeshStandardMaterial?U:M).get(w.envMap||G.environment),Gt===void 0&&(w.addEventListener("dispose",dt),Gt=new Map,G.programs=Gt);let Ut=Gt.get(Lt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===yt)return na(w,bt),Ut}else bt.uniforms=xt.getUniforms(w),w.onBuild(B,bt,v),w.onBeforeCompile(bt,v),Ut=xt.acquireProgram(bt,Lt),Gt.set(Lt,Ut),G.uniforms=bt.uniforms;const Ft=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Ot.uniform),na(w,bt),G.needsLights=Wl(w),G.lightsStateVersion=yt,G.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function ea(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Ss.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function na(w,I){const B=pt.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Hl(w,I,B,G,z){I.isScene!==!0&&(I=Mt),E.resetTextureUnits();const mt=I.fog,yt=G.isMeshStandardMaterial?I.environment:null,bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cn,Lt=(G.isMeshStandardMaterial?U:M).get(G.envMap||yt),Gt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!B.morphAttributes.position,oe=!!B.morphAttributes.normal,Le=!!B.morphAttributes.color;let fe=Sn;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=v.toneMapping);const $e=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=$e!==void 0?$e.length:0,kt=pt.get(G),Gs=f.state.lights;if($===!0&&(ft===!0||w!==y)){const Ie=w===y&&G.id===N;Ot.setState(G,w,Ie)}let re=!1;G.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Gs.state.version||kt.outputColorSpace!==bt||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||kt.envMap!==Lt||G.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Ut||kt.morphTargets!==Ft||kt.morphNormals!==oe||kt.morphColors!==Le||kt.toneMapping!==fe||st.isWebGL2===!0&&kt.morphTargetsCount!==ee)&&(re=!0):(re=!0,kt.__version=G.version);let Tn=kt.currentProgram;re===!0&&(Tn=Vi(G,I,z));let ia=!1,yi=!1,Hs=!1;const xe=Tn.getUniforms(),An=kt.uniforms;if(X.useProgram(Tn.program)&&(ia=!0,yi=!0,Hs=!0),G.id!==N&&(N=G.id,yi=!0),ia||y!==w){xe.setValue(R,"projectionMatrix",w.projectionMatrix),xe.setValue(R,"viewMatrix",w.matrixWorldInverse);const Ie=xe.map.cameraPosition;Ie!==void 0&&Ie.setValue(R,It.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,yi=!0,Hs=!0)}if(z.isSkinnedMesh){xe.setOptional(R,z,"bindMatrix"),xe.setOptional(R,z,"bindMatrixInverse");const Ie=z.skeleton;Ie&&(st.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),xe.setValue(R,"boneTexture",Ie.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(xe.setOptional(R,z,"batchingTexture"),xe.setValue(R,"batchingTexture",z._matricesTexture,E));const ks=B.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&st.isWebGL2===!0)&&Vt.update(z,B,Tn),(yi||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,xe.setValue(R,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=Lt,An.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),yi&&(xe.setValue(R,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&kl(An,Hs),mt&&G.fog===!0&&ht.refreshFogUniforms(An,mt),ht.refreshMaterialUniforms(An,G,J,H,St),Ss.upload(R,ea(kt),An,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ss.upload(R,ea(kt),An,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(R,"center",z.center),xe.setValue(R,"modelViewMatrix",z.modelViewMatrix),xe.setValue(R,"normalMatrix",z.normalMatrix),xe.setValue(R,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ie=G.uniformsGroups;for(let Ws=0,Vl=Ie.length;Ws<Vl;Ws++)if(st.isWebGL2){const sa=Ie[Ws];Zt.update(sa,Tn),Zt.bind(sa,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function kl(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,I,B){pt.get(w.texture).__webglTexture=I,pt.get(w.depthTexture).__webglTexture=B;const G=pt.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const B=pt.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){b=w,C=I,A=B;let G=!0,z=null,mt=!1,yt=!1;if(w){const Lt=pt.get(w);Lt.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):Lt.__webglFramebuffer===void 0?E.setupRenderTarget(w):Lt.__hasExternalTextures&&E.rebindTextures(w,pt.get(w.texture).__webglTexture,pt.get(w.depthTexture).__webglTexture);const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const Ut=pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?z=Ut[I][B]:z=Ut[I],mt=!0):st.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?z=pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[B]:z=Ut,T.copy(w.viewport),O.copy(w.scissor),k=w.scissorTest}else T.copy(K).multiplyScalar(J).floor(),O.copy(it).multiplyScalar(J).floor(),k=at;if(X.bindFramebuffer(R.FRAMEBUFFER,z)&&st.drawBuffers&&G&&X.drawBuffers(w,z),X.viewport(T),X.scissor(O),X.setScissorTest(k),mt){const Lt=pt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Lt.__webglTexture,B)}else if(yt){const Lt=pt.get(w.texture),Gt=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,B||0,Gt)}N=-1},this.readRenderTargetPixels=function(w,I,B,G,z,mt,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){X.bindFramebuffer(R.FRAMEBUFFER,bt);try{const Lt=w.texture,Gt=Lt.format,Ut=Lt.type;if(Gt!==Ve&&vt.convert(Gt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ut===Ui&&(Y.has("EXT_color_buffer_half_float")||st.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Ut!==Mn&&vt.convert(Ut)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===_n&&(st.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-G&&B>=0&&B<=w.height-z&&R.readPixels(I,B,G,z,vt.convert(Gt),vt.convert(Ut),mt)}finally{const Lt=b!==null?pt.get(b).__webglFramebuffer:null;X.bindFramebuffer(R.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(w,I,B=0){const G=Math.pow(2,-B),z=Math.floor(I.image.width*G),mt=Math.floor(I.image.height*G);E.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,w.x,w.y,z,mt),X.unbindTexture()},this.copyTextureToTexture=function(w,I,B,G=0){const z=I.image.width,mt=I.image.height,yt=vt.convert(B.format),bt=vt.convert(B.type);E.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,w.x,w.y,z,mt,yt,bt,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,yt,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,G,w.x,w.y,yt,bt,I.image),G===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B,G,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=w.max.x-w.min.x+1,yt=w.max.y-w.min.y+1,bt=w.max.z-w.min.z+1,Lt=vt.convert(G.format),Gt=vt.convert(G.type);let Ut;if(G.isData3DTexture)E.setTexture3D(G,0),Ut=R.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ut=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Ft=R.getParameter(R.UNPACK_ROW_LENGTH),oe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Le=R.getParameter(R.UNPACK_SKIP_PIXELS),fe=R.getParameter(R.UNPACK_SKIP_ROWS),$e=R.getParameter(R.UNPACK_SKIP_IMAGES),ee=B.isCompressedTexture?B.mipmaps[z]:B.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,w.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,w.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?R.texSubImage3D(Ut,z,I.x,I.y,I.z,mt,yt,bt,Lt,Gt,ee.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ut,z,I.x,I.y,I.z,mt,yt,bt,Lt,ee.data)):R.texSubImage3D(Ut,z,I.x,I.y,I.z,mt,yt,bt,Lt,Gt,ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ft),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$e),z===0&&G.generateMipmaps&&R.generateMipmap(Ut),X.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),X.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,X.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Br?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ps?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?Fn:Qo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?_e:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class cm extends Ml{}cm.prototype.isWebGL1Renderer=!0;class Vr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hm extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class yl extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new L,Co=new L,Ro=new ae,xr=new Hr,fs=new Hi;class um extends ge{constructor(t=new le,e=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)bo.fromBufferAttribute(e,i-1),Co.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=bo.distanceTo(Co);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;Ro.copy(i).invert(),xr.copy(t.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=p,x=S-1;v<x;v+=m){const C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(f,C),h.fromBufferAttribute(f,A),xr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let v=p,x=S-1;v<x;v+=m){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),xr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Li extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lo=new ae,Ir=new Hr,ps=new Hi,ms=new L;class Ms extends ge{constructor(t=new le,e=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;Lo.copy(i).invert(),Ir.copy(t.ray).applyMatrix4(Lo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);ms.fromBufferAttribute(u,f),Po(ms,f,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)ms.fromBufferAttribute(u,g),Po(ms,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Po(s,t,e,n,i,r,a){const o=Ir.distanceSqToPoint(s);if(o<e){const l=new L;Ir.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Do extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(a-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new rt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],a=[],o=new L,l=new ae;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ve(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xr extends je{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dm extends Xr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yr(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,i(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const gs=new L,Sr=new Yr,Mr=new Yr,yr=new Yr;class fm extends je{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(gs.subVectors(i[0],i[1]).add(i[0]),c=gs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Sr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,f),Mr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,f),yr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Sr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Mr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sr.calc(l),Mr.calc(l),yr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Io(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function pm(s,t){const e=1-s;return e*e*t}function mm(s,t){return 2*(1-s)*s*t}function gm(s,t){return s*s*t}function Pi(s,t,e,n){return pm(s,t)+mm(s,e)+gm(s,n)}function _m(s,t){const e=1-s;return e*e*e*t}function vm(s,t){const e=1-s;return 3*e*e*s*t}function xm(s,t){return 3*(1-s)*s*s*t}function Sm(s,t){return s*s*s*t}function Di(s,t,e,n,i){return _m(s,t)+vm(s,e)+xm(s,n)+Sm(s,i)}class El extends je{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Di(t,i.x,r.x,a.x,o.x),Di(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mm extends je{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Di(t,i.x,r.x,a.x,o.x),Di(t,i.y,r.y,a.y,o.y),Di(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wl extends je{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ym extends je{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends je{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Pi(t,i.x,r.x,a.x),Pi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Em extends je{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Pi(t,i.x,r.x,a.x),Pi(t,i.y,r.y,a.y),Pi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Io(o,l.x,c.x,h.x,u.x),Io(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Ur=Object.freeze({__proto__:null,ArcCurve:dm,CatmullRomCurve3:fm,CubicBezierCurve:El,CubicBezierCurve3:Mm,EllipseCurve:Xr,LineCurve:wl,LineCurve3:ym,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:Em,SplineCurve:Al});class wm extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ur[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ur[i.type]().fromJSON(i))}return this}}class Uo extends wm{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wl(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Tl(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new El(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Xr(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qr extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vn extends le{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],f=n/2;let p=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(m,2));function S(){const x=new L,C=new L;let A=0;const b=(e-t)/n;for(let N=0;N<=r;N++){const y=[],T=N/r,O=T*(e-t)+t;for(let k=0;k<=i;k++){const nt=k/i,D=nt*l+o,F=Math.sin(D),H=Math.cos(D);C.x=O*F,C.y=-T*n+f,C.z=O*H,u.push(C.x,C.y,C.z),x.set(F,b,H).normalize(),d.push(x.x,x.y,x.z),m.push(nt,1-T),y.push(g++)}_.push(y)}for(let N=0;N<i;N++)for(let y=0;y<r;y++){const T=_[y][N],O=_[y+1][N],k=_[y+1][N+1],nt=_[y][N+1];h.push(T,O,nt),h.push(O,k,nt),A+=6}c.addGroup(p,A,0),p+=A}function v(x){const C=g,A=new rt,b=new L;let N=0;const y=x===!0?t:e,T=x===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,f*T,0),d.push(0,T,0),m.push(.5,.5),g++;const O=g;for(let k=0;k<=i;k++){const D=k/i*l+o,F=Math.cos(D),H=Math.sin(D);b.x=y*H,b.y=f*T,b.z=y*F,u.push(b.x,b.y,b.z),d.push(0,T,0),A.x=F*.5+.5,A.y=H*.5*T+.5,m.push(A.x,A.y),g++}for(let k=0;k<i;k++){const nt=C+k,D=O+k;x===!0?h.push(D,D+1,nt):h.push(D+1,D,nt),N+=3}c.addGroup(p,N,x===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Us extends vn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Us(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const v=new L,x=new L,C=new L;for(let A=0;A<e.length;A+=3)m(e[A+0],v),m(e[A+1],x),m(e[A+2],C),l(v,x,C,S)}function l(S,v,x,C){const A=C+1,b=[];for(let N=0;N<=A;N++){b[N]=[];const y=S.clone().lerp(x,N/A),T=v.clone().lerp(x,N/A),O=A-N;for(let k=0;k<=O;k++)k===0&&N===A?b[N][k]=y:b[N][k]=y.clone().lerp(T,k/O)}for(let N=0;N<A;N++)for(let y=0;y<2*(A-N)-1;y++){const T=Math.floor(y/2);y%2===0?(d(b[N][T+1]),d(b[N+1][T]),d(b[N][T])):(d(b[N][T+1]),d(b[N+1][T+1]),d(b[N+1][T]))}}function c(S){const v=new L;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const S=new L;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const x=f(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(x,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const v=a[S+0],x=a[S+2],C=a[S+4],A=Math.max(v,x,C),b=Math.min(v,x,C);A>.9&&b<.1&&(v<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,v){const x=S*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const S=new L,v=new L,x=new L,C=new L,A=new rt,b=new rt,N=new rt;for(let y=0,T=0;y<r.length;y+=9,T+=6){S.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),A.set(a[T+0],a[T+1]),b.set(a[T+2],a[T+3]),N.set(a[T+4],a[T+5]),C.copy(S).add(v).add(x).divideScalar(3);const O=f(C);_(A,T+0,S,O),_(b,T+2,v,O),_(N,T+4,x,O)}}function _(S,v,x,C){C<0&&S.x===1&&(a[v]=S.x-1),x.x===0&&x.z===0&&(a[v]=C/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class Ns extends Uo{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Uo().fromJSON(i))}return this}}const Tm={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=bl(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=Lm(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Oi(r,a,e,o,l,m,0),a}};function bl(s,t,e,n,i){let r,a;if(i===Hm(s,t,e,n)>0)for(r=t;r<e;r+=n)a=No(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=No(r,s[r],s[r+1],a);return a&&Os(a,a.next)&&(zi(a),a=a.next),a}function Gn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||ie(e.prev,e,e.next)===0)){if(zi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Nm(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?bm(s,n,i,r):Am(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),zi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Cm(Gn(s),t,e),Oi(s,t,e,n,i,r,2)):a===2&&Rm(s,t,e,n,i,r):Oi(Gn(s),t,e,n,i,r,1);break}}}function Am(s){const t=s.prev,e=s,n=s.next;if(ie(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&hi(i,o,r,l,a,c,g.x,g.y)&&ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bm(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ie(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,p=Nr(m,g,t,e,n),S=Nr(_,f,t,e,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=S;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&hi(o,h,l,u,c,d,v.x,v.y)&&ie(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==i&&x!==a&&hi(o,h,l,u,c,d,x.x,x.y)&&ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&hi(o,h,l,u,c,d,v.x,v.y)&&ie(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==i&&x!==a&&hi(o,h,l,u,c,d,x.x,x.y)&&ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Cm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Os(i,r)&&Cl(i,n,n.next,r)&&Fi(i,r)&&Fi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zi(n),zi(n.next),n=s=r),n=n.next}while(n!==s);return Gn(n)}function Rm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zm(a,o)){let l=Rl(a,o);a=Gn(a,a.next),l=Gn(l,l.next),Oi(a,t,e,n,i,r,0),Oi(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Lm(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=bl(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fm(c));for(i.sort(Pm),r=0;r<i.length;r++)e=Dm(i[r],e);return e}function Pm(s,t){return s.x-t.x}function Dm(s,t){const e=Im(s,t);if(!e)return t;const n=Rl(e,s);return Gn(n,n.next),Gn(e,e.next)}function Im(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Fi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Um(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Um(s,t){return ie(s.prev,s,t.prev)<0&&ie(t.next,s,s.next)<0}function Nm(s,t,e,n){let i=s;do i.z===0&&(i.z=Nr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Om(i)}function Om(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Nr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Fm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function zm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Bm(s,t)&&(Fi(s,t)&&Fi(t,s)&&Gm(s,t)&&(ie(s.prev,s,t.prev)||ie(s,t.prev,t))||Os(s,t)&&ie(s.prev,s,s.next)>0&&ie(t.prev,t,t.next)>0)}function ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function Cl(s,t,e,n){const i=vs(ie(s,t,e)),r=vs(ie(s,t,n)),a=vs(ie(e,n,s)),o=vs(ie(e,n,t));return!!(i!==r&&a!==o||i===0&&_s(s,e,t)||r===0&&_s(s,n,t)||a===0&&_s(e,s,n)||o===0&&_s(e,t,n))}function _s(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function vs(s){return s>0?1:s<0?-1:0}function Bm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Fi(s,t){return ie(s.prev,s,s.next)<0?ie(s,t,s.next)>=0&&ie(s,s.prev,t)>=0:ie(s,t,s.prev)<0||ie(s,s.next,t)<0}function Gm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Rl(s,t){const e=new Or(s.i,s.x,s.y),n=new Or(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function No(s,t,e,n){const i=new Or(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Or(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class yn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Oo(t),Fo(n,t);let a=t.length;e.forEach(Oo);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Fo(n,e[l]);const o=Tm.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Oo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Jr extends le{constructor(t=new Ns([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:km;let v,x=!1,C,A,b,N;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,C=p.computeFrenetFrames(h,!1),A=new L,b=new L,N=new L),d||(f=0,m=0,g=0,_=0);const y=o.extractPoints(c);let T=y.shape;const O=y.holes;if(!yn.isClockWise(T)){T=T.reverse();for(let R=0,ot=O.length;R<ot;R++){const Y=O[R];yn.isClockWise(Y)&&(O[R]=Y.reverse())}}const nt=yn.triangulateShape(T,O),D=T;for(let R=0,ot=O.length;R<ot;R++){const Y=O[R];T=T.concat(Y)}function F(R,ot,Y){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ot,Y)}const H=T.length,J=nt.length;function q(R,ot,Y){let st,X,Et;const pt=R.x-ot.x,E=R.y-ot.y,M=Y.x-R.x,U=Y.y-R.y,et=pt*pt+E*E,Q=pt*U-E*M;if(Math.abs(Q)>Number.EPSILON){const j=Math.sqrt(et),xt=Math.sqrt(M*M+U*U),ht=ot.x-E/j,_t=ot.y+pt/j,Tt=Y.x-U/xt,Ot=Y.y+M/xt,tt=((Tt-ht)*U-(Ot-_t)*M)/(pt*U-E*M);st=ht+pt*tt-R.x,X=_t+E*tt-R.y;const qt=st*st+X*X;if(qt<=2)return new rt(st,X);Et=Math.sqrt(qt/2)}else{let j=!1;pt>Number.EPSILON?M>Number.EPSILON&&(j=!0):pt<-Number.EPSILON?M<-Number.EPSILON&&(j=!0):Math.sign(E)===Math.sign(U)&&(j=!0),j?(st=-E,X=pt,Et=Math.sqrt(et)):(st=pt,X=E,Et=Math.sqrt(et/2))}return new rt(st/Et,X/Et)}const Z=[];for(let R=0,ot=D.length,Y=ot-1,st=R+1;R<ot;R++,Y++,st++)Y===ot&&(Y=0),st===ot&&(st=0),Z[R]=q(D[R],D[Y],D[st]);const K=[];let it,at=Z.concat();for(let R=0,ot=O.length;R<ot;R++){const Y=O[R];it=[];for(let st=0,X=Y.length,Et=X-1,pt=st+1;st<X;st++,Et++,pt++)Et===X&&(Et=0),pt===X&&(pt=0),it[st]=q(Y[st],Y[Et],Y[pt]);K.push(it),at=at.concat(it)}for(let R=0;R<f;R++){const ot=R/f,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=D.length;X<Et;X++){const pt=F(D[X],Z[X],st);gt(pt.x,pt.y,-Y)}for(let X=0,Et=O.length;X<Et;X++){const pt=O[X];it=K[X];for(let E=0,M=pt.length;E<M;E++){const U=F(pt[E],it[E],st);gt(U.x,U.y,-Y)}}}const V=g+_;for(let R=0;R<H;R++){const ot=d?F(T[R],at[R],V):T[R];x?(b.copy(C.normals[0]).multiplyScalar(ot.x),A.copy(C.binormals[0]).multiplyScalar(ot.y),N.copy(v[0]).add(b).add(A),gt(N.x,N.y,N.z)):gt(ot.x,ot.y,0)}for(let R=1;R<=h;R++)for(let ot=0;ot<H;ot++){const Y=d?F(T[ot],at[ot],V):T[ot];x?(b.copy(C.normals[R]).multiplyScalar(Y.x),A.copy(C.binormals[R]).multiplyScalar(Y.y),N.copy(v[R]).add(b).add(A),gt(N.x,N.y,N.z)):gt(Y.x,Y.y,u/h*R)}for(let R=f-1;R>=0;R--){const ot=R/f,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=D.length;X<Et;X++){const pt=F(D[X],Z[X],st);gt(pt.x,pt.y,u+Y)}for(let X=0,Et=O.length;X<Et;X++){const pt=O[X];it=K[X];for(let E=0,M=pt.length;E<M;E++){const U=F(pt[E],it[E],st);x?gt(U.x,U.y+v[h-1].y,v[h-1].x+Y):gt(U.x,U.y,u+Y)}}}$(),ft();function $(){const R=i.length/3;if(d){let ot=0,Y=H*ot;for(let st=0;st<J;st++){const X=nt[st];Ct(X[2]+Y,X[1]+Y,X[0]+Y)}ot=h+f*2,Y=H*ot;for(let st=0;st<J;st++){const X=nt[st];Ct(X[0]+Y,X[1]+Y,X[2]+Y)}}else{for(let ot=0;ot<J;ot++){const Y=nt[ot];Ct(Y[2],Y[1],Y[0])}for(let ot=0;ot<J;ot++){const Y=nt[ot];Ct(Y[0]+H*h,Y[1]+H*h,Y[2]+H*h)}}n.addGroup(R,i.length/3-R,0)}function ft(){const R=i.length/3;let ot=0;St(D,ot),ot+=D.length;for(let Y=0,st=O.length;Y<st;Y++){const X=O[Y];St(X,ot),ot+=X.length}n.addGroup(R,i.length/3-R,1)}function St(R,ot){let Y=R.length;for(;--Y>=0;){const st=Y;let X=Y-1;X<0&&(X=R.length-1);for(let Et=0,pt=h+f*2;Et<pt;Et++){const E=H*Et,M=H*(Et+1),U=ot+st+E,et=ot+X+E,Q=ot+X+M,j=ot+st+M;It(U,et,Q,j)}}}function gt(R,ot,Y){l.push(R),l.push(ot),l.push(Y)}function Ct(R,ot,Y){Mt(R),Mt(ot),Mt(Y);const st=i.length/3,X=S.generateTopUV(n,i,st-3,st-2,st-1);Pt(X[0]),Pt(X[1]),Pt(X[2])}function It(R,ot,Y,st){Mt(R),Mt(ot),Mt(st),Mt(ot),Mt(Y),Mt(st);const X=i.length/3,Et=S.generateSideWallUV(n,i,X-6,X-3,X-2,X-1);Pt(Et[0]),Pt(Et[1]),Pt(Et[3]),Pt(Et[1]),Pt(Et[2]),Pt(Et[3])}function Mt(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function Pt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ur[i.type]().fromJSON(i)),new Jr(n,t.options)}}const km={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[r*3],f=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-u),new rt(d,1-g),new rt(_,1-p)]:[new rt(o,1-l),new rt(h,1-u),new rt(m,1-g),new rt(f,1-p)]}};function Wm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kr extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kr(t.radius,t.detail)}}class jr extends le{constructor(t=new Ns([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(i,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;yn.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,p=g.length;f<p;f++){const S=g[f];yn.isClockWise(S)===!0&&(g[f]=S.reverse())}const _=yn.triangulateShape(m,g);for(let f=0,p=g.length;f<p;f++){const S=g[f];m=m.concat(S)}for(let f=0,p=m.length;f<p;f++){const S=m[f];i.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let f=0,p=_.length;f<p;f++){const S=_[f],v=S[0]+u,x=S[1]+u,C=S[2]+u;n.push(v,x,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Vm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new jr(n,t.curveSegments)}}function Vm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class an extends le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(A+x,1-v),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const v=h[p][S+1],x=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&m.push(v,x,A),(p!==n-1||l<Math.PI)&&m.push(x,C,A)}this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rs extends le{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,S=(i+1)*m+g;a.push(_,f,S),a.push(f,p,S)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ne extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xm extends yl{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Ll extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Er=new ae,zo=new L,Bo=new L;class Ym{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(zo),Bo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bo),e.updateMatrixWorld(),Er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qm extends Ym{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends Ll{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jm extends Ll{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Km{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Go();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Go(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fr);const mn={houses:[{x:-20,z:-20,radius:2.5},{x:20,z:-20,radius:2.5},{x:-20,z:20,radius:2},{x:25,z:15,radius:2}],walls:[]},W={WORLD_SIZE:100,PLAYER_SPEED:8,PLAYER_RADIUS:.5,CAMERA_DISTANCE:4.5,CAMERA_HEIGHT:2.2,CAMERA_OFFSET_RIGHT:2.2,MOUSE_SENSITIVITY:.002,TOUCH_SENSITIVITY:.005,GAMEPAD_SENSITIVITY:.004,GAMEPAD_LOOK_SPEED:2,JOYSTICK_DEADZONE:.1,NETWORK_TICK_RATE:30,PLAYER_MAX_HP:100,SNOWBALL_DAMAGE:10,SNOWBALL_HEADSHOT_DAMAGE:25,CHARGED_SNOWBALL_DAMAGE:15,CHARGED_SNOWBALL_HEADSHOT_DAMAGE:40,CHARGED_KNOCKBACK_DISTANCE:2,HEAD_HIT_Y:1.4,GRID_CELL_SIZE:1,MAX_SNOW_UNIT:24,SNOW_RECOVERY_RATE:1,SNOW_RECOVERY_INTERVAL:5,SNOWBALL_COST:3,HEAL_PER_SNOWBALL:2,SU_COST_SNOWBALL:5,SU_COST_SHORT_WALL:40,GATHER_DURATION:2,MIN_GATHER_DURATION:.8,GATHER_SPEEDUP_THRESHOLD:5,GATHER_SPEEDUP_PER_BALL:.1,MAX_SNOWBALLS:20,SNOW_THRESHOLD_FULL:12,SNOW_THRESHOLD_HALF:6,SNOW_THRESHOLD_SPARSE:1,COLOR_SNOW_FULL:16777215,COLOR_SNOW_HALF:13948128,COLOR_SNOW_SPARSE:11053240,COLOR_DIRT:9139029,THROW_SPEED:15,THROW_GRAVITY:20,THROW_CHARGE_TIME:1.5,THROW_CHARGED_SPEED_MULTIPLIER:2,THROW_TRAIL_LIFETIME:.3,THROW_SNOW_GROUND_BONUS:3,THROW_SNOWBALL_RADIUS:.15,WALL_COUNT:20,WALL_WIDTH:4,WALL_HEIGHT:2.25,WALL_THICKNESS:.5,WALL_MAX_SNOW_UNIT:50,WALL_SNOW_RECOVERY_RATE:.5,WALL_GATHER_RANGE:2,WALL_MIN_GAP:4,TALL_WALL_HP:50,TALL_WALL_HEIGHT:1.5,TALL_WALL_WIDTH:3,TALL_WALL_THICKNESS:.5,TALL_WALL_BUILD_COST:50,TALL_WALL_BUILD_DISTANCE:2.5},ri={PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYER_MOVE:"player_move",WORLD_STATE:"world_state",WELCOME:"welcome",PLAYER_NAME_UPDATE:"player_name_update"},be={SNOW:16777215,SNOW_HOUSE:15790335,TREE_TRUNK:9127187,CARROT:16737792,COAL:1710618,WALL:14739696,WALL_SNOW:16119295,TALL_WALL:12110040,CORE:16720418};class jm{constructor(t){this.canvas=t,this.keys={},this.isPointerLocked=!1,this.pointerLockAvailable=!0,this.mouse={deltaX:0,deltaY:0},this.touch={moveJoystick:{active:!1,x:0,y:0,touchId:null},lookJoystick:{active:!1,x:0,y:0,touchId:null}},this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.gamepad={moveJoystick:{active:!1,x:0,y:0},lookJoystick:{active:!1,x:0,y:0}},this.gamepadConnected=!1,this.sprintPressed=!1,this.touchSprintPressed=!1,this.gatherPressed=!1,this.touchGatherPressed=!1,this.throwPressed=!1,this.throwPressStartTime=0,this.touchThrowPressed=!1,this.quickBuildPressed=!1,this.touchQuickBuildPressed=!1,this.quickBuildConsumed=!1,this.healPressed=!1,this.touchHealPressed=!1,this.healConsumed=!1,this.suSnowballPressed=!1,this.touchSuSnowballPressed=!1,this.suSnowballConsumed=!1,this.suWallPressed=!1,this.touchSuWallPressed=!1,this.suWallConsumed=!1,this._initKeyboard(),this._initMouse(),this._initGamepad(),this.isTouchDevice&&this._initTouch()}_initKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="Space"&&(t.preventDefault(),this.sprintPressed=!0),t.code==="KeyF"&&(t.preventDefault(),this.quickBuildPressed=!0),t.code==="KeyE"&&(t.preventDefault(),this.healPressed=!0),t.code==="KeyQ"&&(t.preventDefault(),this.suSnowballPressed=!0),t.code==="KeyR"&&(t.preventDefault(),this.suWallPressed=!0)}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="Space"&&(this.sprintPressed=!1),t.code==="KeyF"&&(this.quickBuildPressed=!1,this.quickBuildConsumed=!1),t.code==="KeyE"&&(this.healPressed=!1,this.healConsumed=!1),t.code==="KeyQ"&&(this.suSnowballPressed=!1,this.suSnowballConsumed=!1),t.code==="KeyR"&&(this.suWallPressed=!1,this.suWallConsumed=!1)})}_onPointerLockFailed(){this.pointerLockAvailable=!1;const t=document.getElementById("pointer-lock-hint");t&&(t.textContent="请在新标签页中打开以启用鼠标控制视角")}_requestPointerLock(){if(!(this.isPointerLocked||this.isTouchDevice||!this.pointerLockAvailable))try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{this._onPointerLockFailed()})}catch{this._onPointerLockFailed()}}_initMouse(){this.canvas.addEventListener("click",()=>{this._requestPointerLock()}),this.canvas.addEventListener("mousedown",e=>{e.button===2&&(this.gatherPressed=!0),e.button===0&&this.isPointerLocked&&(this.throwPressed=!0,this.throwPressStartTime=Date.now())}),this.canvas.addEventListener("mouseup",e=>{e.button===2&&(this.gatherPressed=!1),e.button===0&&(this.throwPressed=!1)});const t=document.getElementById("pointer-lock-hint");t&&t.addEventListener("click",()=>{this.pointerLockAvailable?this._requestPointerLock():window.open(window.location.href,"_blank")}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.canvas;const e=document.getElementById("pointer-lock-hint");e&&(this.isPointerLocked?e.classList.remove("active"):e.classList.add("active"))}),document.addEventListener("pointerlockerror",()=>{this._onPointerLockFailed()}),document.addEventListener("mousemove",e=>{this.isPointerLocked&&(this.mouse.deltaX-=e.movementX*W.MOUSE_SENSITIVITY,this.mouse.deltaY-=e.movementY*W.MOUSE_SENSITIVITY*.8)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}_initTouch(){const t=document.getElementById("move-joystick"),e=document.getElementById("move-knob"),n=document.getElementById("look-joystick"),i=document.getElementById("look-knob");if(!t||!n)return;const r=(m,g,_)=>{let f=0,p=0;m.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation();const x=v.changedTouches[0];_.touchId=x.identifier,_.active=!0,f=x.clientX,p=x.clientY},{passive:!1}),m.addEventListener("touchmove",v=>{if(v.preventDefault(),v.stopPropagation(),!_.active)return;const x=this._findTouch(v.changedTouches,_.touchId);if(!x)return;const C=40;let A=x.clientX-f,b=x.clientY-p;const N=Math.sqrt(A*A+b*b);N>C&&(A=A/N*C,b=b/N*C),_.x=A/C,_.y=b/C,Math.abs(_.x)<W.JOYSTICK_DEADZONE&&(_.x=0),Math.abs(_.y)<W.JOYSTICK_DEADZONE&&(_.y=0),g.style.transform=`translate(calc(-50% + ${A}px), calc(-50% + ${b}px))`},{passive:!1});const S=v=>{v.preventDefault(),this._findTouch(v.changedTouches,_.touchId)&&(_.active=!1,_.x=0,_.y=0,_.touchId=null,g.style.transform="translate(-50%, -50%)")};m.addEventListener("touchend",S,{passive:!1}),m.addEventListener("touchcancel",S,{passive:!1})};r(t,e,this.touch.moveJoystick),r(n,i,this.touch.lookJoystick);const a=document.getElementById("sprint-btn");if(a){const m=f=>{f?a.classList.add("sprinting"):a.classList.remove("sprinting")};a.addEventListener("touchstart",f=>{f.preventDefault(),f.stopPropagation(),this.setTouchSprintPressed(!0),m(!0)},{passive:!1});const g=f=>{f.preventDefault(),this.setTouchSprintPressed(!1),m(!1)};a.addEventListener("touchend",g,{passive:!1}),a.addEventListener("touchcancel",g,{passive:!1}),a.addEventListener("mousedown",f=>{f.preventDefault(),this.setTouchSprintPressed(!0),m(!0)});const _=()=>{this.setTouchSprintPressed(!1),m(!1)};a.addEventListener("mouseup",_),a.addEventListener("mouseleave",_)}const o=document.getElementById("gather-btn");if(o){const m=f=>{f?o.classList.add("gathering"):o.classList.remove("gathering")};o.addEventListener("touchstart",f=>{f.preventDefault(),f.stopPropagation(),this.setTouchGatherPressed(!0),m(!0)},{passive:!1});const g=f=>{f.preventDefault(),this.setTouchGatherPressed(!1),m(!1)};o.addEventListener("touchend",g,{passive:!1}),o.addEventListener("touchcancel",g,{passive:!1}),o.addEventListener("mousedown",f=>{f.preventDefault(),this.setTouchGatherPressed(!0),m(!0)});const _=()=>{this.setTouchGatherPressed(!1),m(!1)};o.addEventListener("mouseup",_),o.addEventListener("mouseleave",_)}const l=document.getElementById("throw-btn");if(l){const m=f=>{f?l.classList.add("throwing"):l.classList.remove("throwing")};l.addEventListener("touchstart",f=>{f.preventDefault(),f.stopPropagation(),this.setTouchThrowPressed(!0),m(!0)},{passive:!1});const g=f=>{f.preventDefault(),this.setTouchThrowPressed(!1),m(!1)};l.addEventListener("touchend",g,{passive:!1}),l.addEventListener("touchcancel",g,{passive:!1}),l.addEventListener("mousedown",f=>{f.preventDefault(),this.setTouchThrowPressed(!0),m(!0)});const _=()=>{this.setTouchThrowPressed(!1),m(!1)};l.addEventListener("mouseup",_),l.addEventListener("mouseleave",_)}const c=document.getElementById("build-btn");if(c){c.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),this.touchQuickBuildPressed=!0,c.classList.add("building")},{passive:!1});const m=_=>{_.preventDefault(),this.touchQuickBuildPressed=!1,this.quickBuildConsumed=!1,c.classList.remove("building")};c.addEventListener("touchend",m,{passive:!1}),c.addEventListener("touchcancel",m,{passive:!1}),c.addEventListener("mousedown",_=>{_.preventDefault(),this.touchQuickBuildPressed=!0,c.classList.add("building")});const g=()=>{this.touchQuickBuildPressed=!1,this.quickBuildConsumed=!1,c.classList.remove("building")};c.addEventListener("mouseup",g),c.addEventListener("mouseleave",g)}const h=document.getElementById("heal-btn");if(h){h.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),this.touchHealPressed=!0,h.classList.add("healing")},{passive:!1});const m=_=>{_.preventDefault(),this.touchHealPressed=!1,this.healConsumed=!1,h.classList.remove("healing")};h.addEventListener("touchend",m,{passive:!1}),h.addEventListener("touchcancel",m,{passive:!1}),h.addEventListener("mousedown",_=>{_.preventDefault(),this.touchHealPressed=!0,h.classList.add("healing")});const g=()=>{this.touchHealPressed=!1,this.healConsumed=!1,h.classList.remove("healing")};h.addEventListener("mouseup",g),h.addEventListener("mouseleave",g)}const u=document.getElementById("su-snowball-btn");if(u){u.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),this.touchSuSnowballPressed=!0,u.classList.add("active")},{passive:!1});const m=_=>{_.preventDefault(),this.touchSuSnowballPressed=!1,this.suSnowballConsumed=!1,u.classList.remove("active")};u.addEventListener("touchend",m,{passive:!1}),u.addEventListener("touchcancel",m,{passive:!1}),u.addEventListener("mousedown",_=>{_.preventDefault(),this.touchSuSnowballPressed=!0,u.classList.add("active")});const g=()=>{this.touchSuSnowballPressed=!1,this.suSnowballConsumed=!1,u.classList.remove("active")};u.addEventListener("mouseup",g),u.addEventListener("mouseleave",g)}const d=document.getElementById("su-wall-btn");if(d){d.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),this.touchSuWallPressed=!0,d.classList.add("active")},{passive:!1});const m=_=>{_.preventDefault(),this.touchSuWallPressed=!1,this.suWallConsumed=!1,d.classList.remove("active")};d.addEventListener("touchend",m,{passive:!1}),d.addEventListener("touchcancel",m,{passive:!1}),d.addEventListener("mousedown",_=>{_.preventDefault(),this.touchSuWallPressed=!0,d.classList.add("active")});const g=()=>{this.touchSuWallPressed=!1,this.suWallConsumed=!1,d.classList.remove("active")};d.addEventListener("mouseup",g),d.addEventListener("mouseleave",g)}}_findTouch(t,e){for(let n=0;n<t.length;n++)if(t[n].identifier===e)return t[n];return null}_initGamepad(){window.addEventListener("gamepadconnected",t=>{this.gamepadConnected=!0,console.log("游戏手柄已连接:",t.gamepad.id)}),window.addEventListener("gamepaddisconnected",t=>{this.gamepadConnected=!1,console.log("游戏手柄已断开:",t.gamepad.id)})}_updateGamepadState(){if(!this.gamepadConnected)return;const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(let o=0;o<t.length;o++)if(t[o]){e=t[o];break}if(!e){this.gamepad.moveJoystick.x=0,this.gamepad.moveJoystick.y=0,this.gamepad.lookJoystick.x=0,this.gamepad.lookJoystick.y=0;return}let n=e.axes[0],i=e.axes[1],r=e.axes[2],a=e.axes[3];Math.abs(n)<W.JOYSTICK_DEADZONE&&(n=0),Math.abs(i)<W.JOYSTICK_DEADZONE&&(i=0),Math.abs(r)<W.JOYSTICK_DEADZONE&&(r=0),Math.abs(a)<W.JOYSTICK_DEADZONE&&(a=0),this.gamepad.moveJoystick.x=n,this.gamepad.moveJoystick.y=i,this.gamepad.lookJoystick.x=r,this.gamepad.lookJoystick.y=a,this.gamepad.moveJoystick.active=n!==0||i!==0,this.gamepad.lookJoystick.active=r!==0||a!==0,this.gamepad.buttonA=e.buttons[0]?e.buttons[0].pressed:!1,this.gamepad.buttonB=e.buttons[1]?e.buttons[1].pressed:!1,this.gamepad.buttonX=e.buttons[2]?e.buttons[2].pressed:!1,this.gamepad.buttonY=e.buttons[3]?e.buttons[3].pressed:!1,this.gamepad.buttonLB=e.buttons[4]?e.buttons[4].pressed:!1,this.gamepad.buttonLT=e.buttons[6]?e.buttons[6].pressed:!1,this.gamepad.buttonRT=e.buttons[7]?e.buttons[7].pressed:!1,this.gamepad.buttonRT&&!this.gamepad.buttonRTPrev&&(this.throwPressStartTime=Date.now()),this.gamepad.buttonRTPrev=this.gamepad.buttonRT}isSprintPressed(){return this.isTouchDevice?this.touchSprintPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonA?!0:this.sprintPressed)}isGatherPressed(){return this.isTouchDevice?this.touchGatherPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonLT?!0:this.gatherPressed)}isThrowPressed(){return this.isTouchDevice?this.touchThrowPressed:(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonRT?!0:this.throwPressed)}isQuickBuildPressed(){let t=!1;return this.quickBuildPressed&&(t=!0),this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonB&&(t=!0),this.touchQuickBuildPressed&&(t=!0),t&&!this.quickBuildConsumed?(this.quickBuildConsumed=!0,!0):!1}isHealPressed(){let t=!1;return this.healPressed&&(t=!0),this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonY&&(t=!0),this.touchHealPressed&&(t=!0),t&&!this.healConsumed?(this.healConsumed=!0,!0):!1}isSuSnowballPressed(){let t=!1;return this.suSnowballPressed&&(t=!0),this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonX&&(t=!0),this.touchSuSnowballPressed&&(t=!0),t&&!this.suSnowballConsumed?(this.suSnowballConsumed=!0,!0):!1}isSuWallPressed(){let t=!1;return this.suWallPressed&&(t=!0),this._updateGamepadState(),this.gamepadConnected&&this.gamepad.buttonLB&&(t=!0),this.touchSuWallPressed&&(t=!0),t&&!this.suWallConsumed?(this.suWallConsumed=!0,!0):!1}getThrowChargeTime(){return this.isThrowPressed()?(Date.now()-this.throwPressStartTime)/1e3:0}resetThrowCharge(){this.throwPressStartTime=Date.now()}setTouchSprintPressed(t){this.touchSprintPressed=t}setTouchGatherPressed(t){this.touchGatherPressed=t}setTouchThrowPressed(t){t&&!this.touchThrowPressed&&(this.throwPressStartTime=Date.now()),this.touchThrowPressed=t}getMovementInput(){if(this.isTouchDevice){const t=this.touch.moveJoystick.x,e=this.touch.moveJoystick.y;return{forward:e<0?-e:0,backward:e>0?e:0,left:t<0?-t:0,right:t>0?t:0}}if(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.moveJoystick.active){const t=this.gamepad.moveJoystick.x,e=this.gamepad.moveJoystick.y;return{forward:e<0?-e:0,backward:e>0?e:0,left:t<0?-t:0,right:t>0?t:0}}return{forward:this.keys.KeyW||this.keys.ArrowUp?1:0,backward:this.keys.KeyS||this.keys.ArrowDown?1:0,left:this.keys.KeyA||this.keys.ArrowLeft?1:0,right:this.keys.KeyD||this.keys.ArrowRight?1:0}}getLookInput(){if(this.isTouchDevice)return{yaw:-this.touch.lookJoystick.x*W.TOUCH_SENSITIVITY*10,pitch:-this.touch.lookJoystick.y*W.TOUCH_SENSITIVITY*10*.8};if(this._updateGamepadState(),this.gamepadConnected&&this.gamepad.lookJoystick.active)return{yaw:-this.gamepad.lookJoystick.x*W.GAMEPAD_SENSITIVITY*W.GAMEPAD_LOOK_SPEED*100*.25,pitch:-this.gamepad.lookJoystick.y*W.GAMEPAD_SENSITIVITY*W.GAMEPAD_LOOK_SPEED*100*.8};const t={yaw:this.mouse.deltaX,pitch:this.mouse.deltaY};return this.mouse.deltaX=0,this.mouse.deltaY=0,t}requestPointerLock(){this._requestPointerLock()}exitPointerLock(){this.isPointerLocked&&document.exitPointerLock()}showTouchControls(t){const e=document.getElementById("touch-controls");t&&this.isTouchDevice?e.classList.add("active"):e.classList.remove("active")}showPointerLockHint(t){if(this.isTouchDevice)return;const e=document.getElementById("pointer-lock-hint");e&&(t?e.classList.add("active"):e.classList.remove("active"))}}class $m{constructor(t){this.scene=t,this.cellSize=W.GRID_CELL_SIZE,this.maxSU=W.MAX_SNOW_UNIT,this.worldSize=W.WORLD_SIZE,this.gridCount=Math.floor(this.worldSize/this.cellSize),this.halfWorld=this.worldSize/2,this.snowUnits=[],this.cellMeshes=[],this.recoveryTimer=0,this._initGrid(),this._createGroundMeshes()}_initGrid(){for(let t=0;t<this.gridCount;t++){this.snowUnits[t]=[],this.cellMeshes[t]=[];for(let e=0;e<this.gridCount;e++)this.snowUnits[t][e]=this.maxSU}}_getColorForSU(t){return t>=W.SNOW_THRESHOLD_FULL?W.COLOR_SNOW_FULL:t>=W.SNOW_THRESHOLD_HALF?W.COLOR_SNOW_HALF:t>=W.SNOW_THRESHOLD_SPARSE?W.COLOR_SNOW_SPARSE:W.COLOR_DIRT}_createGroundMeshes(){const t=new vi(this.cellSize,this.cellSize);for(let e=0;e<this.gridCount;e++)for(let n=0;n<this.gridCount;n++){const i=new ne({color:this._getColorForSU(this.maxSU),roughness:.9,metalness:0}),r=new Nt(t,i);r.rotation.x=-Math.PI/2,r.receiveShadow=!0;const a=-this.halfWorld+e*this.cellSize+this.cellSize/2,o=-this.halfWorld+n*this.cellSize+this.cellSize/2;r.position.set(a,0,o),this.scene.add(r),this.cellMeshes[e][n]=r}}_worldToGrid(t,e){const n=Math.floor((t+this.halfWorld)/this.cellSize),i=Math.floor((e+this.halfWorld)/this.cellSize);return{x:n,z:i}}_isValidGrid(t,e){return t>=0&&t<this.gridCount&&e>=0&&e<this.gridCount}getSU(t,e){const{x:n,z:i}=this._worldToGrid(t,e);return this._isValidGrid(n,i)?this.snowUnits[n][i]:0}setSU(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e);if(!this._isValidGrid(i,r))return;const a=Math.max(0,Math.min(this.maxSU,n));this.snowUnits[i][r]=a,this._updateCellVisual(i,r)}consumeSU(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e);if(!this._isValidGrid(i,r))return 0;const a=this.snowUnits[i][r],o=Math.min(a,n);return this.snowUnits[i][r]-=o,this._updateCellVisual(i,r),o}_updateCellVisual(t,e){if(!this._isValidGrid(t,e))return;const n=this.snowUnits[t][e],i=this.cellMeshes[t][e];i&&(i.material.color.setHex(this._getColorForSU(n)),i.material.needsUpdate=!0)}getSurroundingCells(t,e,n){const{x:i,z:r}=this._worldToGrid(t,e),a={x:Math.sin(n),z:Math.cos(n)},o={x:Math.cos(n),z:-Math.sin(n)},l=[];l.push({gridX:i,gridZ:r,priority:0});for(let m=-1;m<=1;m++){const g=Math.round(a.x*1+o.x*m),_=Math.round(a.z*1+o.z*m);l.push({gridX:i+g,gridZ:r+_,priority:1})}const c=Math.round(-o.x*1),h=Math.round(-o.z*1),u=Math.round(o.x*1),d=Math.round(o.z*1);return l.push({gridX:i+c,gridZ:r+h,priority:2}),l.push({gridX:i+u,gridZ:r+d,priority:2}),l.filter(m=>this._isValidGrid(m.gridX,m.gridZ))}tryGatherSnow(t,e,n,i){const r=this.getSurroundingCells(t,e,n);r.sort((l,c)=>l.priority-c.priority);let a=i;for(const l of r){if(a<=0)break;const c=this.snowUnits[l.gridX][l.gridZ];if(c>0){const h=Math.min(c,a);this.snowUnits[l.gridX][l.gridZ]-=h,this._updateCellVisual(l.gridX,l.gridZ),a-=h}}return i-a>=i}update(t){if(this.recoveryTimer+=t,this.recoveryTimer>=W.SNOW_RECOVERY_INTERVAL){this.recoveryTimer=0;const e=W.SNOW_RECOVERY_RATE;for(let n=0;n<this.gridCount;n++)for(let i=0;i<this.gridCount;i++)this.snowUnits[n][i]<this.maxSU&&(this.snowUnits[n][i]=Math.min(this.maxSU,this.snowUnits[n][i]+e),this._updateCellVisual(n,i))}}}class Qm{constructor(t,e){this.scene=t,this.colliders=[],this.walls=[],this.gridGround=new $m(t),e?this._loadFromMapData(e):this._generateWallPositions(),this._createSnowHouses(),this._createWalls(),this._createLighting(),this._createFog()}_loadFromMapData(t){mn.houses=(t.houses||[]).map(e=>({x:e.x,z:e.z,radius:e.radius||2.5})),mn.walls=(t.walls||[]).map(e=>({x:e.x,z:e.z,angle:e.angle||0,width:e.width||W.WALL_WIDTH,thickness:e.thickness||W.WALL_THICKNESS,height:W.WALL_HEIGHT,snowUnits:W.WALL_MAX_SNOW_UNIT}))}_seededRandom(t){const e=Math.sin(t)*1e4;return e-Math.floor(e)}_generateWallPositions(){if(mn.walls.length>0)return;const t=[],e=W.WALL_COUNT,n=W.WORLD_SIZE*.8;let i=54321;for(let r=0;r<e;r++){let a,o,l,c=!0,h=0;do{i++,a=(this._seededRandom(i)-.5)*n,i++,o=(this._seededRandom(i)-.5)*n,i++,l=this._seededRandom(i)*Math.PI,c=!0,h++;for(const u of t)if(Math.sqrt((a-u.x)**2+(o-u.z)**2)<W.WALL_MIN_GAP){c=!1;break}if(c){for(const u of mn.houses)if(Math.sqrt((a-u.x)**2+(o-u.z)**2)<u.radius+W.WALL_MIN_GAP){c=!1;break}}if(c&&Math.sqrt(a*a+o*o)<8&&(c=!1),c){const u={x:a,z:o,angle:l,width:W.WALL_WIDTH,thickness:W.WALL_THICKNESS};this._wouldCreateDeadEnd(u,t)&&(c=!1)}}while(!c&&h<100);if(c){const u={x:a,z:o,angle:l,width:W.WALL_WIDTH,thickness:W.WALL_THICKNESS,height:W.WALL_HEIGHT,snowUnits:W.WALL_MAX_SNOW_UNIT};t.push(u)}}mn.walls=t}_wouldCreateDeadEnd(t,e){const i=W.WORLD_SIZE/2,r=Math.floor(W.WORLD_SIZE/2),a=new Set;for(const g of mn.houses){const _=Math.floor((g.x+i)/2),f=Math.floor((g.z+i)/2),p=Math.ceil(g.radius/2);for(let S=-p;S<=p;S++)for(let v=-p;v<=p;v++)a.add(`${_+S},${f+v}`)}const o=[...e,t];for(const g of o)this._markWallCells(g,a,2,i);const l=Math.floor(i/2),c=Math.floor(i/2);if(a.has(`${l},${c}`))return!0;const h=new Set,u=[`${l},${c}`];h.add(`${l},${c}`);const d=new Set;for(let g=0;g<r;g++)for(let _=0;_<r;_++)d.add(`${g},${_}`);for(;u.length>0;){const g=u.shift(),[_,f]=g.split(",").map(Number),p=[`${_-1},${f}`,`${_+1},${f}`,`${_},${f-1}`,`${_},${f+1}`];for(const S of p){if(h.has(S)||a.has(S))continue;const[v,x]=S.split(",").map(Number);v<0||v>=r||x<0||x>=r||(h.add(S),u.push(S))}}const m=r*r-a.size;return h.size<m*.9}_markWallCells(t,e,n,i){const r=Math.cos(t.angle),a=Math.sin(t.angle),o=t.width/2,l=t.thickness/2,h=[{dx:-o,dz:-l},{dx:o,dz:-l},{dx:o,dz:l},{dx:-o,dz:l}].map(x=>({x:t.x+x.dx*r-x.dz*a,z:t.z+x.dx*a+x.dz*r}));let u=1/0,d=-1/0,m=1/0,g=-1/0;for(const x of h)u=Math.min(u,x.x),d=Math.max(d,x.x),m=Math.min(m,x.z),g=Math.max(g,x.z);const _=.5,f=Math.floor((u-_+i)/n),p=Math.ceil((d+_+i)/n),S=Math.floor((m-_+i)/n),v=Math.ceil((g+_+i)/n);for(let x=f;x<=p;x++)for(let C=S;C<=v;C++){const A=x*n-i+n/2,b=C*n-i+n/2;this._pointInWallRect(A,b,t)&&e.add(`${x},${C}`)}}_pointInWallRect(t,e,n){const i=Math.cos(-n.angle),r=Math.sin(-n.angle),a=t-n.x,o=e-n.z,l=a*i-o*r,c=a*r+o*i,h=.3;return Math.abs(l)<=n.width/2+h&&Math.abs(c)<=n.thickness/2+h}_createSnowHouses(){mn.houses.forEach((t,e)=>{this._createSnowHouse(t.x,t.z,e%2===0?1:.8)})}_createSnowHouse(t,e,n=1){const i=new Ke;i.position.set(t,0,e),i.scale.setScalar(n);const r=new vn(2,2.5,2,16),a=new ne({color:be.SNOW_HOUSE,roughness:.7,metalness:0}),o=new Nt(r,a);o.position.y=1,o.castShadow=!0,o.receiveShadow=!0;const l=new Us(2.8,2,16),c=new ne({color:15263999,roughness:.6}),h=new Nt(l,c);h.position.y=3,h.castShadow=!0;const u=new Ns;u.moveTo(-.5,0),u.lineTo(-.5,1.2),u.quadraticCurveTo(0,1.5,.5,1.2),u.lineTo(.5,0),u.lineTo(-.5,0);const d={depth:.1,bevelEnabled:!1},m=new Jr(u,d),g=new ne({color:9127187,roughness:.8}),_=new Nt(m,g);_.position.set(0,.1,2.45),_.rotation.x=-Math.PI/2;const f=new qr(.3,16),p=new ne({color:16777164,emissive:16777130,emissiveIntensity:.3}),S=new Nt(f,p);S.position.set(1.5,1.5,2),S.rotation.y=-Math.PI/2;const v=new Nt(f,p.clone());v.position.set(-1.5,1.5,2),v.rotation.y=Math.PI/2,i.add(o),i.add(h),i.add(_),i.add(S),i.add(v),this.scene.add(i),this.colliders.push({type:"cylinder",x:t,z:e,radius:2.5*n})}_createWalls(){mn.walls.forEach(t=>{this._createWall(t)})}_createWall(t){const{x:e,z:n,angle:i,width:r,thickness:a,height:o,snowUnits:l}=t,c=new Ke;c.position.set(e,0,n),c.rotation.y=i;const h=new qe(r,o,a),u=new ne({color:be.WALL,roughness:.8,metalness:.05}),d=new Nt(h,u);d.position.y=o/2,d.castShadow=!0,d.receiveShadow=!0;const m=l/W.WALL_MAX_SNOW_UNIT,g=o*.3*m,_=new qe(r+.2,Math.max(.05,g),a+.2),f=new ne({color:be.WALL_SNOW,roughness:.7,metalness:0}),p=new Nt(_,f);p.position.y=o+g/2,p.castShadow=!0,c.add(d),c.add(p),this.scene.add(c);const S={...t,group:c,wallMesh:d,snowMesh:p,snowUnits:l};this.walls.push(S),this.colliders.push({type:"wall",x:e,z:n,angle:i,width:r,thickness:a,wall:S})}updateWalls(t){if(this.walls.length!==0)for(const e of this.walls){e.snowUnits<W.WALL_MAX_SNOW_UNIT&&(e.snowUnits=Math.min(W.WALL_MAX_SNOW_UNIT,e.snowUnits+W.WALL_SNOW_RECOVERY_RATE*t));const n=e.snowUnits/W.WALL_MAX_SNOW_UNIT;e.height*.3*n,e.snowMesh&&(e.snowMesh.scale.y=Math.max(.01,n),e.snowMesh.position.y=e.height+e.height*.3*n/2)}}tryGatherFromWall(t,e,n,i){const r={x:Math.sin(n),z:Math.cos(n)},a=W.WALL_GATHER_RANGE;let o=null,l=1/0;for(const c of this.walls){const h=t-c.x,u=e-c.z,d=Math.sqrt(h*h+u*u);if(d>c.width/2+a)continue;const m=c.x-t,g=c.z-e;r.x*m+r.z*g<=0||d<l&&(l=d,o=c)}if(o&&o.snowUnits>=i)return o.snowUnits-=i,i;if(o&&o.snowUnits>0){const c=o.snowUnits;return o.snowUnits=0,c}return 0}checkCollision(t,e,n){const i=W.WORLD_SIZE/2;if(t<-i+n||t>i-n||e<-i+n||e>i-n)return!0;for(const r of this.colliders)if(r.type==="cylinder"){if(Math.sqrt((t-r.x)**2+(e-r.z)**2)<r.radius+n)return!0}else if(r.type==="wall"&&this._pointInWallRect(t,e,r))return!0;return!1}_createLighting(){const t=new Jm(16777215,.6);this.scene.add(t);const e=new Zm(16777215,.8);e.position.set(20,30,20),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,this.scene.add(e)}_createFog(){this.scene.fog=new Vr(13691135,30,80),this.scene.background=new Xt(8900331)}}class xs{constructor(t,e=!1,n="blue",i=!1,r="",a=!1,o="blue"){this.scene=t,this.isLocalPlayer=e,this.team=n,this.isAI=a,this.localTeam=o,this.group=new Ke,this.yaw=0,this.pitch=0,this.camera=null,this.hp=W.PLAYER_MAX_HP,this.maxHp=W.PLAYER_MAX_HP,this.isDead=!1,this.isHit=!1,this.hitTimer=0,this.hitDuration=.3,this.coreFlashTimer=0,this.knockbackActive=!1,this.knockbackVelocity=new L(0,0,0),this.knockbackDecay=6,this.knockbackMinSpeed=.5,this.bodyMeshes=[],this.faceMeshes=[],this.accessoryMeshes=[],this.outlineMeshes=[],this.speedMultiplier=1,this.snowballCount=5,this.deathCoreMesh=null,this.respawnTimer=0,this.isRespawning=!1,this._createBody(),this._createHead(),this._createFace(),this._createArms(),this._createScarf(),this._createHat(),this._createCore(),this._createIndicator(i,r,a),t.add(this.group),this.collider={type:"cylinder",x:0,z:0,radius:.65,snowman:this}}_createBody(){const t=new an(.75,32,32),e=new an(.5,32,32),n=new ne({color:be.SNOW,roughness:.85,metalness:.05});this.bottomSphere=new Nt(t,n),this.bottomSphere.position.y=.75,this.bottomSphere.castShadow=!0,this.bottomSphere.receiveShadow=!0,this.headSphere=new Nt(e,n.clone()),this.headSphere.position.y=1.7,this.headSphere.castShadow=!0,this.headSphere.receiveShadow=!0,this.bodyMeshes=[this.bottomSphere,this.headSphere],this.group.add(this.bottomSphere),this.group.add(this.headSphere);const i=new an(.06,16,16),r=new ne({color:be.COAL,roughness:.3});for(let a=0;a<3;a++){const o=new Nt(i,r);o.position.set(0,1.1-a*.2,.65),this.group.add(o),this.faceMeshes.push(o)}}_createHead(){this.headGroup=new Ke,this.headGroup.position.copy(this.headSphere.position),this.group.add(this.headGroup)}_createFace(){const t=new an(.08,16,16),e=new ne({color:be.COAL,roughness:.3}),n=new Nt(t,e);n.position.set(-.15,1.8,.42);const i=new Nt(t,e);i.position.set(.15,1.8,.42);const r=new Us(.08,.4,16),a=new ne({color:be.CARROT,roughness:.6});this.nose=new Nt(r,a),this.nose.position.set(0,1.65,.55),this.nose.rotation.x=Math.PI/2;const o=new Rs(.1,.03,8,16,Math.PI),l=new ne({color:be.COAL,roughness:.3}),c=new Nt(o,l);c.position.set(0,1.5,.45),c.rotation.x=Math.PI,c.rotation.z=Math.PI,this.faceMeshes.push(n,i,this.nose,c),this.group.add(n),this.group.add(i),this.group.add(this.nose),this.group.add(c)}_createArms(){const t=new vn(.035,.025,1.1,8),e=new ne({color:be.TREE_TRUNK,roughness:.9}),n=new Nt(t,e);n.position.set(-.55,1.15,0),n.rotation.z=Math.PI/5,n.castShadow=!0;const i=new Nt(t,e.clone());i.position.set(.55,1.15,0),i.rotation.z=-Math.PI/5,i.castShadow=!0;const r=new an(.05,8,8),a=new ne({color:5913899,roughness:.8}),o=new Nt(r,a);o.position.set(-.75,.9,0);const l=new Nt(r,a.clone());l.position.set(.75,.9,0),this.accessoryMeshes.push(n,i,o,l),this.group.add(n),this.group.add(i),this.group.add(o),this.group.add(l)}_createScarf(){let t;this.isAI?t=this.team==="blue"?1981023:9136404:t=this.team==="blue"?4886745:14240330;const e=new Rs(.48,.08,16,32),n=new ne({color:t,roughness:.7,metalness:.1}),i=new Nt(e,n);i.position.set(0,1.45,0),i.rotation.x=Math.PI/2,i.castShadow=!0;const r=new qe(.15,.4,.08),a=new Nt(r,n.clone());a.position.set(.15,1.25,.4),a.rotation.z=-.3,a.castShadow=!0,this.accessoryMeshes.push(i,a),this.group.add(i),this.group.add(a)}_createHat(){const t=new vn(.42,.42,.05,32),e=new vn(.3,.3,.45,32),n=2899536;let i;this.isAI?i=this.team==="blue"?1981023:9136404:i=this.team==="blue"?4886745:14240330;const r=new ne({color:n,roughness:.5,metalness:.1}),a=new ne({color:i,roughness:.6,metalness:.2}),o=new Nt(t,r);o.position.y=2.1,o.castShadow=!0;const l=new Nt(e,r.clone());l.position.y=2.35,l.castShadow=!0;const c=new vn(.31,.31,.08,32),h=new Nt(c,a);h.position.y=2.15,h.castShadow=!0,this.accessoryMeshes.push(o,l,h),this.group.add(o),this.group.add(l),this.group.add(h)}_createCore(){const t=new an(.15,16,16),e=new ne({color:be.CORE,emissive:be.CORE,emissiveIntensity:.6,roughness:.2,metalness:.6,transparent:!0,opacity:0});this.coreMesh=new Nt(t,e),this.coreMesh.position.set(0,1.7,0),this.group.add(this.coreMesh)}setPosition(t,e,n){this.group.position.set(t,e,n)}getPosition(){return this.group.position.clone()}setRotation(t){this.yaw=t,this.group.rotation.y=t}getRotation(){return this.yaw}updateLookRotation(t){this.pitch=Math.max(-.5,Math.min(.5,t)),this.headGroup.rotation.x=-this.pitch*.5}setCamera(t){this.camera=t}takeDamage(t,e=!1){if(this.isDead)return;this.hp=Math.max(0,this.hp-t),this.isHit=!0,this.hitTimer=this.hitDuration,[this.bottomSphere,this.headSphere].forEach(i=>{i.material&&(i.material.emissive=new Xt(e?16711680:16739179),i.material.emissiveIntensity=e?.8:.5)}),this._updateTransparency(),this.hp<=0&&(this.isDead=!0,this._onDeath())}_onDeath(){this._createDeathCore(),this._setVisibility(!1),this.isRespawning=!0,this.respawnTimer=5,this.knockbackActive=!1}_createDeathCore(){this.deathCoreMesh&&(this.scene.remove(this.deathCoreMesh),this.deathCoreMesh.geometry.dispose(),this.deathCoreMesh.material.dispose());const t=new Kr(.25,1),e=new ne({color:1710618,emissive:3342336,emissiveIntensity:.4,roughness:.3,metalness:.8});this.deathCoreMesh=new Nt(t,e),this.deathCoreMesh.position.set(this.group.position.x,.25,this.group.position.z),this.scene.add(this.deathCoreMesh)}_setVisibility(t){this.group.visible=t,this.indicatorGroup&&(this.indicatorGroup.visible=t)}updateSpeedMultiplier(){const e=(this.maxHp-this.hp)*.01,n=this.snowballCount*.01;this.speedMultiplier=1.05+e-n}respawn(t,e){this.hp=W.PLAYER_MAX_HP,this.isDead=!1,this.isRespawning=!1,this.snowballCount=5,this.knockbackActive=!1,this.knockbackVelocity.set(0,0,0),this.group.position.set(t,0,e),this.collider.x=t,this.collider.z=e,this.deathCoreMesh&&(this.scene.remove(this.deathCoreMesh),this.deathCoreMesh.geometry.dispose(),this.deathCoreMesh.material.dispose(),this.deathCoreMesh=null),this._setVisibility(!0),this._updateTransparency(),this.updateSpeedMultiplier()}applyKnockback(t,e,n){this.knockbackVelocity.set(t*18,0,e*18),this.knockbackActive=!0}hit(){this.takeDamage(W.SNOWBALL_DAMAGE)}_updateTransparency(){const t=this.hp;this.maxHp;let e,n=1,i=1,r=0,a=!1;t>=70?e=1:t>=30?e=.3+(t-30)/40*.7:t>=10?(e=.1+(t-10)/20*.2,r=1):(e=.05,n=.1,i=.1,r=1,a=!0),this.bodyMeshes.forEach(o=>{o.material.transparent=e<1,o.material.opacity=e,o.material.depthWrite=e>=1,o.material.needsUpdate=!0}),this.faceMeshes.forEach(o=>{o.material.transparent=n<1,o.material.opacity=n,o.material.depthWrite=n>=1,o.material.needsUpdate=!0}),this.accessoryMeshes.forEach(o=>{o.material.transparent=i<1,o.material.opacity=i,o.material.depthWrite=i>=1,o.material.needsUpdate=!0}),this.coreMesh.material.opacity=r,this.coreMesh.material.transparent=r<1,this.coreMesh.material.depthWrite=r>=1,this.coreMesh.material.needsUpdate=!0,a&&this.outlineMeshes.length===0?this._createOutlines():!a&&this.outlineMeshes.length>0&&this._removeOutlines()}_createOutlines(){const t=new oi({color:be.SNOW,wireframe:!0,transparent:!0,opacity:.3});this.bodyMeshes.forEach(e=>{const n=new Nt(e.geometry,t.clone());n.position.copy(e.position),n.scale.multiplyScalar(1.05),this.group.add(n),this.outlineMeshes.push(n)})}_removeOutlines(){this.outlineMeshes.forEach(t=>{this.group.remove(t),t.material.dispose()}),this.outlineMeshes=[]}_createIndicator(t,e,n){this.indicatorGroup=new Ke,this.indicatorGroup.position.y=3.2;const i=this.team===this.localTeam,r=this.isLocalPlayer||i;if(n){const a=new qe(.3,.3,.3),o=this.team==="blue"?1981023:9136404,l=new ne({color:o,roughness:.7,metalness:.1}),c=new Nt(a,l);c.position.y=.15,this.indicatorGroup.add(c)}else if(r&&t){const a=new Ns;a.moveTo(0,-.05),a.lineTo(-.2,.35),a.lineTo(.2,.35),a.lineTo(0,-.05);const o=new jr(a),l=new oi({color:9090296,side:Fe}),c=new Nt(o,l);if(c.position.y=.2,this.indicatorGroup.add(c),e){const h=document.createElement("canvas");h.width=512,h.height=64;const u=h.getContext("2d");u.fillStyle="rgba(138, 180, 248, 0.95)",u.fillRect(0,0,512,64),u.fillStyle="#ffffff",u.font="bold 32px Microsoft YaHei, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(e,256,32);const d=new Do(h),m=new vi(3.2,.4),g=new oi({map:d,transparent:!0,side:Fe}),_=new Nt(m,g);_.position.y=-.2,this.indicatorGroup.add(_)}}this.scene.add(this.indicatorGroup)}update(t){if(this.collider.x=this.group.position.x,this.collider.z=this.group.position.z,this.isDead){this.isRespawning&&this.respawnTimer>0&&(this.respawnTimer-=t),this.deathCoreMesh&&(this.deathCoreMesh.rotation.y+=t*2,this.deathCoreMesh.rotation.x+=t*1.5,this.deathCoreMesh.position.y=.25+Math.sin(Date.now()*.003)*.05);return}if(this.updateSpeedMultiplier(),this.knockbackActive){const e=this.knockbackVelocity;if(Math.sqrt(e.x*e.x+e.z*e.z)<this.knockbackMinSpeed)this.knockbackActive=!1,e.set(0,0,0);else{const i=Math.max(0,1-this.knockbackDecay*t);e.x*=i,e.z*=i}}if(this.indicatorGroup&&(this.indicatorGroup.position.x=this.group.position.x,this.indicatorGroup.position.z=this.group.position.z,this.camera&&this.indicatorGroup.lookAt(this.camera.position)),this.isHit&&(this.hitTimer-=t,this.hitTimer<=0&&(this.isHit=!1,[this.bottomSphere,this.headSphere].forEach(n=>{n.material&&(n.material.emissiveIntensity=0)}))),this.hp<30&&this.hp>0){this.coreFlashTimer+=t;const e=this.hp<10?12:6,n=Math.sin(this.coreFlashTimer*e)*.5+.5;this.coreMesh.material.emissiveIntensity=.3+n*.7,this.coreMesh.material.needsUpdate=!0}}updateNameLabel(t){if(!this.indicatorGroup)return;const e=this.team===this.localTeam;if(!(this.isLocalPlayer||e))return;const i=this.indicatorGroup.children.find(r=>r.geometry&&r.geometry.type==="PlaneGeometry");if(i&&(this.indicatorGroup.remove(i),i.material&&i.material.map&&i.material.map.dispose()),t){const r=document.createElement("canvas");r.width=512,r.height=64;const a=r.getContext("2d");a.fillStyle="rgba(138, 180, 248, 0.95)",a.fillRect(0,0,512,64),a.fillStyle="#ffffff",a.font="bold 32px Microsoft YaHei, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,32);const o=new Do(r),l=new vi(3.2,.4),c=new oi({map:o,transparent:!0,side:Fe}),h=new Nt(l,c);h.position.y=-.2,this.indicatorGroup.add(h)}}remove(){this.indicatorGroup&&this.scene.remove(this.indicatorGroup),this._removeOutlines(),this.scene.remove(this.group)}}class tg{constructor(t,e){this.camera=t,this.target=e,this.yaw=0,this.pitch=0,this.desiredYaw=0,this.desiredPitch=0,this.distance=W.CAMERA_DISTANCE,this.height=W.CAMERA_HEIGHT,this.offsetRight=W.CAMERA_OFFSET_RIGHT,this.smoothness=15}updateLookInput(t,e){this.desiredYaw+=t,this.desiredPitch+=e,this.desiredPitch=Math.max(-1,Math.min(.6,this.desiredPitch))}setRotation(t,e){this.desiredYaw=t,this.desiredPitch=e||0,this.yaw=t,this.pitch=e||0}getYaw(){return this.yaw}getPitch(){return this.pitch}update(t){const e=Math.min(1,t*this.smoothness);this.yaw=Ha.lerp(this.yaw,this.desiredYaw,e),this.pitch=Ha.lerp(this.pitch,this.desiredPitch,e);const n=this.target.getPosition(),i=new L(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=n.clone().sub(i.clone().multiplyScalar(this.distance)).add(r.clone().multiplyScalar(this.offsetRight)).add(new L(0,this.height,0)),o=new L(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),l=n.clone().add(new L(0,1.2,0)).add(o.clone().multiplyScalar(15));this.camera.position.lerp(a,e),this.camera.lookAt(l)}}class eg{constructor(t,e=null){this.gridGround=t,this.mapGenerator=e,this.snowballCount=5,this.maxSnowballs=W.MAX_SNOWBALLS,this.baseGatherDuration=W.GATHER_DURATION,this.minGatherDuration=W.MIN_GATHER_DURATION,this.speedupThreshold=W.GATHER_SPEEDUP_THRESHOLD,this.speedupPerBall=W.GATHER_SPEEDUP_PER_BALL,this.snowballCost=W.SNOWBALL_COST,this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null,this.gatherYaw=0,this.currentGatherDuration=this.baseGatherDuration,this.consecutiveCount=0,this.holdActive=!1}canGather(t,e,n){return!(this.snowballCount>=this.maxSnowballs||this.isGathering)}setHoldActive(t){!t&&this.holdActive&&this._resetConsecutive(),this.holdActive=t}startGather(t,e,n){return this.snowballCount>=this.maxSnowballs?!1:(this.isGathering=!0,this.gatherProgress=0,this.gatherPosition={x:t,z:e},this.gatherYaw=n,!0)}update(t,e,n,i){if(this.gridGround.update(t),this.mapGenerator&&this.mapGenerator.updateWalls(t),!this.isGathering){this.holdActive&&this.snowballCount<this.maxSnowballs&&this.startGather(e,n,i);return}this.gatherProgress+=t,this.gatherProgress>=this.currentGatherDuration&&this._completeGather()}_completeGather(){this.isGathering=!1;let t=!1;if(this.mapGenerator){const e=this.mapGenerator.tryGatherFromWall(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost);e>=this.snowballCost?t=!0:(t=this.gridGround.tryGatherSnow(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost-e),e>0&&t&&(t=!0))}else t=this.gridGround.tryGatherSnow(this.gatherPosition.x,this.gatherPosition.z,this.gatherYaw,this.snowballCost);t&&this.snowballCount<this.maxSnowballs&&(this.snowballCount++,this.consecutiveCount++,this._updateSpeed(),this._updateUI()),this.gatherProgress=0,this.gatherPosition=null}_updateSpeed(){if(this.consecutiveCount>=this.speedupThreshold){const e=(this.consecutiveCount-this.speedupThreshold)*this.speedupPerBall;this.currentGatherDuration=Math.max(this.minGatherDuration,this.baseGatherDuration-e)}else this.currentGatherDuration=this.baseGatherDuration}_resetConsecutive(){this.consecutiveCount=0,this.currentGatherDuration=this.baseGatherDuration}cancelGather(){this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null}getProgress(){return this.isGathering?Math.min(1,this.gatherProgress/this.currentGatherDuration):0}getRemainingTime(){return this.isGathering?Math.max(0,this.currentGatherDuration-this.gatherProgress):0}useSnowball(){return this.snowballCount>0?(this.snowballCount--,this._updateUI(),!0):!1}_updateUI(){const t=document.getElementById("snowball-count");t&&(t.textContent=`⚪ ${this.snowballCount} / ${this.maxSnowballs}`)}updateGatherUI(){const t=document.getElementById("gather-progress-bar"),e=document.getElementById("gather-progress-fill"),n=document.getElementById("gather-countdown"),i=document.getElementById("consecutive-count"),r=document.getElementById("gather-speed");if(t&&e)if(this.isGathering||this.holdActive){t.style.display="block",e.style.width=`${this.getProgress()*100}%`;const o=200-(this.baseGatherDuration-this.currentGatherDuration)/(this.baseGatherDuration-this.minGatherDuration)*100*1.2;e.style.background=`linear-gradient(90deg, hsl(${o}, 70%, 50%), hsl(${o-30}, 70%, 60%))`}else t.style.display="none";if(n&&(this.isGathering?(n.style.display="block",n.textContent=`${this.getRemainingTime().toFixed(1)}s`):n.style.display="none"),i)if(this.consecutiveCount>0&&this.holdActive)if(i.style.display="block",this.consecutiveCount>=this.speedupThreshold){i.classList.add("speedup");const a=((this.baseGatherDuration-this.currentGatherDuration)/this.baseGatherDuration*100).toFixed(0);i.textContent=`连续攒雪球 x${this.consecutiveCount}  ⚡ +${a}% 速度`}else i.classList.remove("speedup"),i.textContent=`连续攒雪球 x${this.consecutiveCount}`;else i.style.display="none";r&&(r.style.display="none")}reset(){this.snowballCount=5,this.isGathering=!1,this.gatherProgress=0,this.gatherPosition=null,this.consecutiveCount=0,this.currentGatherDuration=this.baseGatherDuration,this.holdActive=!1,this._updateUI()}}class Pl{constructor(t,e,n,i=!1,r=null,a=null,o=null){this.scene=t,this.velocity=n.clone(),this.isCharged=i,this.onHit=r,this.onGroundHit=a,this.ignoreSnowman=o,this.active=!0,this.lifetime=5,this.gravity=W.THROW_GRAVITY,this.radius=W.THROW_SNOWBALL_RADIUS,this.trailPoints=[],this.trailLifetime=W.THROW_TRAIL_LIFETIME,this._createMesh(e),this._createTrail()}_createMesh(t){const e=new an(this.radius,12,12),n=new ne({color:this.isCharged?13430527:16777215,roughness:.8,metalness:this.isCharged?.2:0});this.mesh=new Nt(e,n),this.mesh.position.copy(t),this.mesh.castShadow=!0,this.scene.add(this.mesh)}_createTrail(){const t=new le,e=new Li({color:this.isCharged?11197951:16777215,size:.08,transparent:!0,opacity:.6});this.trail=new Ms(t,e),this.scene.add(this.trail)}_updateTrail(){this.trailPoints.push({position:this.mesh.position.clone(),time:0});const t=[];for(let e=this.trailPoints.length-1;e>=0;e--){const n=this.trailPoints[e];if(n.time+=.016,n.time>this.trailLifetime){this.trailPoints.splice(e,1);continue}t.push(n.position.x,n.position.y,n.position.z)}this.trail.geometry.setAttribute("position",new Yt(t,3)),this.trail.geometry.attributes.position.needsUpdate=!0}_createShatterEffect(){const t=this.isCharged?20:12,e=new le,n=[],i=[];for(let c=0;c<t;c++)n.push(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),i.push((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4);e.setAttribute("position",new Yt(n,3));const r=new Li({color:16777215,size:.1,transparent:!0,opacity:1}),a=new Ms(e,r);this.scene.add(a);let o=.5;const l=()=>{if(o-=.016,o<=0){this.scene.remove(a),e.dispose(),r.dispose();return}const c=a.geometry.attributes.position;for(let h=0;h<t;h++)c.setX(h,c.getX(h)+i[h*3]*.016),c.setY(h,c.getY(h)+i[h*3+1]*.016),c.setZ(h,c.getZ(h)+i[h*3+2]*.016),i[h*3+1]-=this.gravity*.016;c.needsUpdate=!0,r.opacity=o*2,requestAnimationFrame(l)};l()}_createHitSplashEffect(){const e=new le,n=[],i=[],r=this.mesh.position,a=Math.sqrt(this.velocity.x**2+this.velocity.y**2+this.velocity.z**2),o=a>0?this.velocity.x/a:0,l=a>0?this.velocity.y/a:0,c=a>0?this.velocity.z/a:0;for(let _=0;_<25;_++){n.push(r.x,r.y,r.z);const f=.7,p=(Math.random()-.5)*f,S=(Math.random()-.5)*f,v=(Math.random()-.5)*f,x=.6+Math.random()*.4;i.push((-o*x+p)*(3+Math.random()*3),(-l*x+Math.abs(S))*(2+Math.random()*3),(-c*x+v)*(3+Math.random()*3))}e.setAttribute("position",new Yt(n,3));const h=new Li({color:16777215,size:.08,transparent:!0,opacity:1}),u=new Ms(e,h);this.scene.add(u);let d=.6;const m=25,g=()=>{if(d-=.016,d<=0){this.scene.remove(u),e.dispose(),h.dispose();return}const _=u.geometry.attributes.position;for(let f=0;f<25;f++)_.setX(f,_.getX(f)+i[f*3]*.016),_.setY(f,_.getY(f)+i[f*3+1]*.016),_.setZ(f,_.getZ(f)+i[f*3+2]*.016),i[f*3+1]-=m*.016;_.needsUpdate=!0,h.opacity=Math.max(0,d/.6),h.size=.08*(.5+d),requestAnimationFrame(g)};g()}update(t,e){if(this.active){if(this.lifetime-=t,this.lifetime<=0){this.destroy();return}if(this.velocity.y-=this.gravity*t,this.mesh.position.clone(),this.mesh.position.x+=this.velocity.x*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.z+=this.velocity.z*t,this._updateTrail(),this.mesh.position.y<=this.radius){this.mesh.position.y=this.radius,this._createShatterEffect(),this.onGroundHit&&this.onGroundHit(this.mesh.position.x,this.mesh.position.z),this.destroy();return}for(const n of e){const i=this._checkCollision(n);if(i){this._createShatterEffect(),n.snowman&&this._createHitSplashEffect(),this.onHit&&this.onHit(n,i),this.destroy();return}}}}_checkCollision(t){const e=this.mesh.position;if(t.type==="wall"&&t.tallWall){const n=t.tallWall;if(n.destroyed)return null;const i=Math.cos(-t.angle),r=Math.sin(-t.angle),a=e.x-t.x,o=e.z-t.z,l=a*i-o*r,c=a*r+o*i;if(Math.abs(l)<=t.width/2+this.radius&&Math.abs(c)<=t.thickness/2+this.radius&&e.y>0&&e.y<n.height+.3)return n.takeDamage(this.isCharged?W.CHARGED_SNOWBALL_DAMAGE:W.SNOWBALL_DAMAGE),{hitWall:!0}}if(t.type==="cylinder"){const n=e.x-t.x,i=e.z-t.z;if(Math.sqrt(n*n+i*i)<t.radius+this.radius&&e.y>0&&e.y<3.5)return!0}if(t.snowman){if(t.snowman===this.ignoreSnowman)return null;const n=t.snowman.getPosition(),i=e.x-n.x,r=e.z-n.z;if(Math.sqrt(i*i+r*r)<.75+this.radius&&e.y>.5&&e.y<3){const o=e.y>=W.HEAD_HIT_Y,l=this.velocity.x!==0||this.velocity.z!==0?this.velocity.x/Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z):0,c=this.velocity.x!==0||this.velocity.z!==0?this.velocity.z/Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z):0;return{isHeadshot:o,isCharged:this.isCharged,hitDirectionX:l,hitDirectionZ:c}}}return null}destroy(){this.active=!1,this.scene.remove(this.mesh),this.scene.remove(this.trail),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trail.geometry.dispose(),this.trail.material.dispose()}}class ng{constructor(t,e,n=null){this.scene=t,this.gridGround=e,this.mapGenerator=n,this.projectiles=[],this.colliders=[],this.isCharging=!1,this.chargeTime=0,this.isCharged=!1,this.wantThrow=!1,this.wantThrowPrev=!1,this.baseSpeed=W.THROW_SPEED,this.gravity=W.THROW_GRAVITY,this.chargeThreshold=W.THROW_CHARGE_TIME,this.chargedMultiplier=W.THROW_CHARGED_SPEED_MULTIPLIER,this.snowBonus=W.THROW_SNOW_GROUND_BONUS,this._createTrajectoryPreview()}_createTrajectoryPreview(){const t=new le,e=new Xm({color:16777215,dashSize:.2,gapSize:.1,transparent:!0,opacity:.6});this.trajectoryLine=new um(t,e),this.trajectoryLine.visible=!1,this.scene.add(this.trajectoryLine),this.trajectoryTimer=0,this.trajectoryDuration=0}_updateTrajectoryPreview(t,e,n=2){const i=[],a=t.clone(),o=e.clone();for(let c=0;c<=n;c+=.05)if(i.push(a.clone()),o.y-=this.gravity*.05,a.add(o.clone().multiplyScalar(.05)),a.y<=.1){i.push(a.clone());break}const l=new Float32Array(i.length*3);for(let c=0;c<i.length;c++)l[c*3]=i[c].x,l[c*3+1]=i[c].y,l[c*3+2]=i[c].z;this.trajectoryLine.geometry.setAttribute("position",new Ye(l,3)),this.trajectoryLine.geometry.attributes.position.needsUpdate=!0,this.trajectoryLine.computeLineDistances()}_showTrajectoryTemporarily(t,e){this._updateTrajectoryPreview(t,e),this.trajectoryLine.visible=!0,this.trajectoryTimer=0,this.trajectoryDuration=.3}_getThrowVelocity(t,e,n){const i=n?this.baseSpeed*this.chargedMultiplier:this.baseSpeed,r=Math.PI/4.5,a=e+r;return new L(Math.sin(t)*Math.cos(a),Math.sin(a),Math.cos(t)*Math.cos(a)).normalize().multiplyScalar(i)}_getThrowStartPosition(t,e){const n=new L(Math.sin(e),0,Math.cos(e));return new L(t.x+n.x*1.2,1.4,t.z+n.z*1.2)}throw(t,e,n,i,r,a=null){if(!r.useSnowball())return!1;const o=this._getThrowStartPosition(t,e),l=this._getThrowVelocity(e,n,i);this._showTrajectoryTemporarily(o,l);const c=new Pl(this.scene,o,l,i,(h,u)=>this._onHit(h,u),(h,u)=>this._onGroundHit(h,u),a);return this.projectiles.push(c),!0}_onHit(t,e){if(t.snowman){const n=t.snowman;if(e&&typeof e=="object"){const{isHeadshot:i,isCharged:r,hitDirectionX:a,hitDirectionZ:o}=e;let l;r?l=i?W.CHARGED_SNOWBALL_HEADSHOT_DAMAGE:W.CHARGED_SNOWBALL_DAMAGE:l=i?W.SNOWBALL_HEADSHOT_DAMAGE:W.SNOWBALL_DAMAGE,n.takeDamage(l,i),r&&n.applyKnockback(a,o,W.CHARGED_KNOCKBACK_DISTANCE)}else n.takeDamage(W.SNOWBALL_DAMAGE,!1)}}_onGroundHit(t,e){if(this.gridGround){const n=this.gridGround.getSU(t,e),i=Math.min(W.MAX_SNOW_UNIT,n+this.snowBonus);this.gridGround.setSU(t,e,i)}}update(t,e,n,i,r,a,o,l=null){if(this.wantThrowPrev=this.wantThrow,this.wantThrow=r,this.wantThrow&&(this.chargeTime=a,this.isCharging=!0,this.isCharged=this.chargeTime>=this.chargeThreshold,this.isCharging)){const c=this._getThrowStartPosition(e,n),h=this._getThrowVelocity(n,i,this.isCharged);this._updateTrajectoryPreview(c,h,3),this.trajectoryLine.visible=!0;const u=this.trajectoryLine.material;this.isCharged?(u.color.setHex(16739179),u.opacity=.9):(u.color.setHex(16777215),u.opacity=.6)}if(!this.wantThrow&&this.wantThrowPrev&&this.isCharging){const c=this.isCharged;this.throw(e,n,i,c,o,l),this.isCharging=!1,this.isCharged=!1,this.chargeTime=0}!this.wantThrow&&!this.wantThrowPrev&&(this.trajectoryTimer+=t,this.trajectoryTimer>=this.trajectoryDuration&&(this.trajectoryLine.visible=!1));for(let c=this.projectiles.length-1;c>=0;c--){const h=this.projectiles[c];h.update(t,this.colliders),h.active||this.projectiles.splice(c,1)}this._updateUI()}_updateUI(){const t=document.getElementById("charge-indicator"),e=document.getElementById("charge-ring-visual"),n=document.getElementById("charge-text"),i=document.getElementById("throw-btn");if(t)if(this.isCharging){if(t.style.display="flex",e&&(this.isCharged?e.classList.add("charged"):e.classList.remove("charged")),n)if(this.isCharged)n.textContent="重击！松开发射",n.classList.add("charged");else{const r=Math.max(0,this.chargeThreshold-this.chargeTime).toFixed(1);n.textContent=`蓄力中... ${r}s`,n.classList.remove("charged")}}else t.style.display="none";i&&(this.isCharging?(i.classList.add("throwing"),this.isCharged?i.classList.add("charged"):i.classList.remove("charged")):i.classList.remove("throwing","charged"))}addCollider(t){this.colliders.push(t)}clear(){for(const t of this.projectiles)t.destroy();this.projectiles=[],this.scene.remove(this.trajectoryLine),this.trajectoryLine.geometry.dispose(),this.trajectoryLine.material.dispose()}}class Ho{constructor(t,e,n,i,r=null){this.scene=t,this.x=e,this.z=n,this.angle=i,this.hp=W.TALL_WALL_HP,this.maxHp=W.TALL_WALL_HP,this.destroyed=!1,this.onDestroy=r,this.width=W.TALL_WALL_WIDTH,this.height=W.TALL_WALL_HEIGHT,this.thickness=W.TALL_WALL_THICKNESS,this._createMesh()}_createMesh(){this.group=new Ke,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.angle;const t=new qe(this.width,this.height,this.thickness),e=new ne({color:be.TALL_WALL,roughness:.75,metalness:.1,transparent:!0,opacity:.95});this.wallMesh=new Nt(t,e),this.wallMesh.position.y=this.height/2,this.wallMesh.castShadow=!0,this.wallMesh.receiveShadow=!0;const n=new qe(this.width+.2,.15,this.thickness+.2),i=new ne({color:be.WALL_SNOW,roughness:.7,metalness:0});this.snowCapMesh=new Nt(n,i),this.snowCapMesh.position.y=this.height+.075,this.snowCapMesh.castShadow=!0,this.group.add(this.wallMesh),this.group.add(this.snowCapMesh),this.scene.add(this.group),this.collider={type:"wall",x:this.x,z:this.z,angle:this.angle,width:this.width,thickness:this.thickness,tallWall:this}}takeDamage(t){if(this.destroyed)return;this.hp=Math.max(0,this.hp-t);const e=this.hp/this.maxHp;this.wallMesh.material.opacity=.3+e*.65,e<.3&&(this.wallMesh.material.emissive=new Xt(4473924),this.wallMesh.material.emissiveIntensity=.3*(1-e),this.wallMesh.material.needsUpdate=!0),this.hp<=0&&this._onDestroy()}_onDestroy(){this.destroyed=!0,this._createDestroyEffect(),this.remove(),this.onDestroy&&this.onDestroy(this)}_createDestroyEffect(){const e=new le,n=[],i=[];for(let h=0;h<30;h++)n.push(this.x+(Math.random()-.5)*this.width,Math.random()*this.height,this.z+(Math.random()-.5)*this.thickness),i.push((Math.random()-.5)*5,Math.random()*4+1,(Math.random()-.5)*5);e.setAttribute("position",new Yt(n,3));const r=new Li({color:14739696,size:.15,transparent:!0,opacity:1}),a=new Ms(e,r);this.scene.add(a);let o=.8;const l=20,c=()=>{if(o-=.016,o<=0){this.scene.remove(a),e.dispose(),r.dispose();return}const h=a.geometry.attributes.position;for(let u=0;u<30;u++)h.setX(u,h.getX(u)+i[u*3]*.016),h.setY(u,h.getY(u)+i[u*3+1]*.016),h.setZ(u,h.getZ(u)+i[u*3+2]*.016),i[u*3+1]-=l*.016;h.needsUpdate=!0,r.opacity=Math.max(0,o/.8),requestAnimationFrame(c)};c()}update(t){this.destroyed}remove(){this.group&&(this.scene.remove(this.group),this.wallMesh.geometry.dispose(),this.wallMesh.material.dispose(),this.snowCapMesh.geometry.dispose(),this.snowCapMesh.material.dispose())}}class Dl{constructor(t,e=!1,n=null,i=""){this.canvas=t,this.isNetworked=e,this.networkClient=n,this.playerName=i,this.scene=null,this.camera=null,this.renderer=null,this.clock=null,this.inputSystem=null,this.mapGenerator=null,this.localPlayer=null,this.thirdPersonCamera=null,this.localTeam="blue",this.remotePlayers=new Map,this.aiPlayers=[],this.stamina=1,this.isSprinting=!1,this.isGathering=!1,this.snowballManager=null,this.snowballThrower=null,this.tallWalls=[],this.quickBuildCooldown=0,this.isRunning=!1,this.animationFrameId=null,this.lastNetworkUpdate=0,e&&n&&(this.localTeam=n.playerTeam||"blue"),this._init()}_init(){this.scene=new hm,this.camera=new Oe(70,window.innerWidth/window.innerHeight,.1,200),this.renderer=new Ml({canvas:this.canvas,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wo,this.clock=new Km,this.inputSystem=new jm(this.canvas);const t=window.__pendingMapData||null;window.__pendingMapData=null,this.mapGenerator=new Qm(this.scene,t),this.snowballManager=new eg(this.mapGenerator.gridGround,this.mapGenerator),this.snowballThrower=new ng(this.scene,this.mapGenerator.gridGround,this.mapGenerator),this.localPlayer=new xs(this.scene,!0,this.localTeam,!0,this.playerName,!1,this.localTeam),this.localPlayer.setCamera(this.camera),this.isNetworked&&this.networkClient?(this.localPlayer.setPosition(this.networkClient.playerSpawnX,0,this.networkClient.playerSpawnZ),this.localPlayer.setRotation(this.networkClient.playerSpawnYaw)):(this.localPlayer.setPosition(0,0,0),this.localPlayer.setRotation(0)),this.thirdPersonCamera=new tg(this.camera,this.localPlayer),this.thirdPersonCamera.setRotation(0,-.2),this.thirdPersonCamera.update(.016),this.camera.position.copy(this.camera.position),this._createAIPlayers(),this.snowballThrower.addCollider(this.localPlayer.collider),window.addEventListener("resize",()=>this._onResize()),this.isNetworked&&this.networkClient&&(this.networkClient.onPlayerJoin=e=>this._onPlayerJoin(e),this.networkClient.onPlayerLeave=e=>this._onPlayerLeave(e),this.networkClient.onWorldState=e=>this._onWorldState(e),this.networkClient.onPlayerNameUpdate=e=>this._onPlayerNameUpdate(e))}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}_checkPlayerCollision(t,e,n=null){const i=W.PLAYER_RADIUS*2;if(this.localPlayer&&this.localPlayer!==n){const r=this.localPlayer.getPosition(),a=t-r.x,o=e-r.z;if(a*a+o*o<i*i)return!0}for(const r of this.remotePlayers.values()){if(r.snowman===n)continue;const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<i*i)return!0}for(const r of this.aiPlayers){if(r.snowman===n)continue;const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<i*i)return!0}return!1}_checkAISpawnCollision(t,e,n){for(const r of n){const a=r.snowman.getPosition(),o=t-a.x,l=e-a.z;if(o*o+l*l<3*3)return!0}if(this.localPlayer){const r=this.localPlayer.getPosition(),a=t-r.x,o=e-r.z;if(a*a+o*o<3*3)return!0}return!1}_getAISpawnPosition(t,e){for(let a=0;a<50;a++){let o,l;if(t==="blue"?(o=-25+(Math.random()-.5)*10,l=(Math.random()-.5)*15):(o=25+(Math.random()-.5)*10,l=(Math.random()-.5)*15),!this._checkAISpawnCollision(o,l,e)&&!this.mapGenerator.checkCollision(o,l,W.PLAYER_RADIUS))return{x:o,z:l}}const r=t==="blue"?0:Math.PI;return{x:Math.cos(r)*25,z:Math.sin(r)*25}}_createAIPlayers(){const e=["blue","red"];for(let n=0;n<2;n++){const i=e[n],r=i===this.localTeam;for(let a=0;a<5;a++){const o=this._getAISpawnPosition(i,this.aiPlayers),l=i==="blue"?0:Math.PI,c=new xs(this.scene,!1,i,r,"",!0,this.localTeam);c.setCamera(this.camera),c.setPosition(o.x,0,o.z),c.setRotation(l);const h={snowman:c,team:i,isAlly:r,targetYaw:l+Math.PI,moveTimer:0,moveDirection:new rt((Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),state:"patrol",snowballCount:5,maxSnowballs:20,gatherTimer:0,gatherDuration:2,isGathering:!1,throwCooldown:0,gatherCooldown:0};this.aiPlayers.push(h),this.snowballThrower.addCollider(c.collider)}}this._updatePlayerCount()}_updateAI(t){for(const e of this.aiPlayers){if(e.snowman.snowballCount=e.snowballCount,e.snowman.isDead){if(e.snowman.update(t),e.snowman.isRespawning&&e.snowman.respawnTimer<=0){const d=this._getRandomSpawnPosition();e.snowman.respawn(d.x,d.z),e.snowballCount=5}continue}if(e.throwCooldown>0&&(e.throwCooldown-=t),e.gatherCooldown>0&&(e.gatherCooldown-=t),e.isGathering){e.gatherTimer+=t,e.gatherTimer>=e.gatherDuration&&(e.isGathering=!1,e.gatherTimer=0,e.snowballCount<e.maxSnowballs&&e.snowballCount++,e.gatherCooldown=.5+Math.random()*1.5),e.snowman.update(t);continue}if(e.gatherCooldown<=0&&e.snowballCount<e.maxSnowballs&&Math.random()<.01){e.isGathering=!0,e.gatherTimer=0,e.snowman.update(t);continue}if(e.snowballCount>0&&e.throwCooldown<=0&&Math.random()<.008){const d=e.snowman.getPosition(),m=e.snowman.getRotation(),g=new L(d.x+Math.sin(m)*1.2,1.4,d.z+Math.cos(m)*1.2),_=Math.PI/4.5,f=W.THROW_SPEED,p=new L(Math.sin(m)*Math.cos(_)*f,Math.sin(_)*f,Math.cos(m)*Math.cos(_)*f),S=new Pl(this.scene,g,p,!1,(v,x)=>this._onAIHit(v,x),(v,x)=>this._onAIGroundHit(v,x),e.snowman);this.snowballThrower.projectiles.push(S),e.snowballCount--,e.throwCooldown=1+Math.random()*2}if(e.moveTimer-=t,e.moveTimer<=0){e.moveTimer=2+Math.random()*3;const d=e.snowman.getPosition();let m=1/0,g=null;if(e.team!==this.localTeam){const _=this.localPlayer.getPosition(),f=_.x-d.x,p=_.z-d.z,S=Math.sqrt(f*f+p*p);S<m&&(m=S,g=new rt(f,p))}for(const _ of this.aiPlayers){if(_===e||_.team===e.team)continue;const f=_.snowman.getPosition(),p=f.x-d.x,S=f.z-d.z,v=Math.sqrt(p*p+S*S);v<m&&(m=v,g=new rt(p,S))}for(const _ of this.remotePlayers.values()){const f=_.data;if(!f||f.team===e.team)continue;const p=(f.x||0)-d.x,S=(f.z||0)-d.z,v=Math.sqrt(p*p+S*S);v<m&&(m=v,g=new rt(p,S))}g&&m<15&&Math.random()>.3?(g.normalize(),e.moveDirection.copy(g),e.targetYaw=Math.atan2(g.x,g.y),e.state="chase"):(e.moveDirection.set((Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),e.targetYaw=Math.atan2(e.moveDirection.x,e.moveDirection.y),e.state="patrol")}const n=e.snowman.getRotation();let i=e.targetYaw-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const r=n+i*Math.min(1,t*3);e.snowman.setRotation(r);const l=(e.state==="chase"?3.5:2.5)*e.snowman.speedMultiplier*t,c=e.snowman.getPosition();let h=c.x+e.moveDirection.x*l,u=c.z+e.moveDirection.y*l;if(!this.mapGenerator.checkCollision(h,c.z,W.PLAYER_RADIUS)&&!this._checkPlayerCollision(h,c.z,e.snowman)?c.x=h:(e.moveDirection.x*=-1,e.moveTimer=0),!this.mapGenerator.checkCollision(c.x,u,W.PLAYER_RADIUS)&&!this._checkPlayerCollision(c.x,u,e.snowman)?c.z=u:(e.moveDirection.y*=-1,e.moveTimer=0),e.snowman.setPosition(c.x,0,c.z),e.snowman.update(t),e.snowman.knockbackActive){const d=e.snowman.knockbackVelocity,m=e.snowman.getPosition();let g=m.x+d.x*t,_=m.z+d.z*t;this.mapGenerator.checkCollision(g,m.z,W.PLAYER_RADIUS)?d.x=0:m.x=g,this.mapGenerator.checkCollision(m.x,_,W.PLAYER_RADIUS)?d.z=0:m.z=_,e.snowman.setPosition(m.x,0,m.z)}}}_onAIHit(t,e){if(t.snowman){if(e&&typeof e=="object"){const{isHeadshot:n,isCharged:i,hitDirectionX:r,hitDirectionZ:a}=e;let o;i?o=n?W.CHARGED_SNOWBALL_HEADSHOT_DAMAGE:W.CHARGED_SNOWBALL_DAMAGE:o=n?W.SNOWBALL_HEADSHOT_DAMAGE:W.SNOWBALL_DAMAGE,t.snowman.takeDamage(o,n),i&&t.snowman.applyKnockback(r,a,W.CHARGED_KNOCKBACK_DISTANCE)}else t.snowman.takeDamage(W.SNOWBALL_DAMAGE,!1);this._updateHPUI()}}_onAIGroundHit(t,e){if(this.snowballThrower.gridGround){const n=this.snowballThrower.gridGround,i=n.getSU(t,e),r=Math.min(W.MAX_SNOW_UNIT,i+W.THROW_SNOW_GROUND_BONUS);n.setSU(t,e,r)}}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.inputSystem.showTouchControls(!0),this.inputSystem.showPointerLockHint(!0),this.snowballManager._updateUI(),this._gameLoop())}stop(){this.isRunning=!1,this.inputSystem.showTouchControls(!1),this.inputSystem.showPointerLockHint(!1),this.inputSystem.exitPointerLock(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}_gameLoop(){if(!this.isRunning)return;const t=this.clock.getDelta();this._update(t),this._render(),this.animationFrameId=requestAnimationFrame(()=>this._gameLoop())}_update(t){const e=this.inputSystem.getMovementInput(),n=this.inputSystem.getLookInput(),i=this.inputSystem.isSprintPressed(),r=this.inputSystem.isGatherPressed(),a=this.inputSystem.isThrowPressed(),o=this.inputSystem.getThrowChargeTime(),l=this.localPlayer.getPosition(),c=this.thirdPersonCamera.getYaw(),h=this.thirdPersonCamera.getPitch();this.snowballManager.setHoldActive(r),this.isGathering=this.snowballManager.isGathering||r&&this.snowballManager.snowballCount<this.snowballManager.maxSnowballs,this.localPlayer.snowballCount=this.snowballManager.snowballCount,this.snowballManager.update(t,l.x,l.z,c),this.snowballManager.updateGatherUI();const u=!r&&this.snowballManager.snowballCount>0;this.snowballThrower.update(t,l,c,h,u?a:!1,o,this.snowballManager,this.localPlayer),!u&&a&&this.inputSystem.resetThrowCharge(),this.thirdPersonCamera.updateLookInput(n.yaw,n.pitch);const d=this.thirdPersonCamera.getYaw();if(this.localPlayer.setRotation(d),this.localPlayer.update(t),this.localPlayer.isDead){this._updateRespawnUI(),this.localPlayer.isRespawning&&this.localPlayer.respawnTimer<=0&&this._respawnPlayer();return}if(this.localPlayer.knockbackActive){const C=this.localPlayer.knockbackVelocity,A=this.localPlayer.getPosition();let b=A.x+C.x*t,N=A.z+C.z*t;this.mapGenerator.checkCollision(b,A.z,W.PLAYER_RADIUS)?C.x=0:A.x=b,this.mapGenerator.checkCollision(A.x,N,W.PLAYER_RADIUS)?C.z=0:A.z=N,this.localPlayer.setPosition(A.x,0,A.z)}this._updateHPUI(),this.inputSystem.isQuickBuildPressed()&&this.quickBuildCooldown<=0&&this._tryQuickBuild(),this.quickBuildCooldown>0&&(this.quickBuildCooldown-=t),this.inputSystem.isHealPressed()&&this._tryHeal(),this.inputSystem.isSuSnowballPressed()&&this._trySuSnowball(),this.inputSystem.isSuWallPressed()&&this._trySuWall();for(let C=this.tallWalls.length-1;C>=0;C--){const A=this.tallWalls[C];A.update(t),A.destroyed&&this.tallWalls.splice(C,1)}const p=new rt(Math.sin(d),Math.cos(d)),S=new rt(Math.cos(d),-Math.sin(d)),v=new rt;this.isGathering||(v.add(p.clone().multiplyScalar(e.forward-e.backward)),v.add(S.clone().multiplyScalar(e.left-e.right)));const x=v.length()>0;if(i&&x&&this.stamina>0?(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-t/3)):(this.isSprinting=!1,(!i||!x)&&(this.stamina=Math.min(1,this.stamina+t/2))),this._updateStaminaUI(),x){v.normalize();let C=W.PLAYER_SPEED*this.localPlayer.speedMultiplier;this.isSprinting&&(C*=1.5),C*=t;const A=this.localPlayer.getPosition();let b=A.x+v.x*C,N=A.z+v.y*C;!this.mapGenerator.checkCollision(b,A.z,W.PLAYER_RADIUS)&&!this._checkPlayerCollision(b,A.z,this.localPlayer)&&(A.x=b),!this.mapGenerator.checkCollision(A.x,N,W.PLAYER_RADIUS)&&!this._checkPlayerCollision(A.x,N,this.localPlayer)&&(A.z=N),this.localPlayer.setPosition(A.x,0,A.z)}if(this.localPlayer.updateLookRotation(this.thirdPersonCamera.getPitch()),this.thirdPersonCamera.update(t),this._updateAI(t),this._updateSpeedUI(),this.isNetworked&&this.networkClient){const C=Date.now();C-this.lastNetworkUpdate>1e3/W.NETWORK_TICK_RATE&&(this.lastNetworkUpdate=C,this.networkClient.sendPlayerUpdate({x:this.localPlayer.getPosition().x,z:this.localPlayer.getPosition().z,yaw:this.localPlayer.getRotation()}))}}_render(){this.renderer.render(this.scene,this.camera)}_onPlayerJoin(t){if(t.id===this.networkClient.playerId)return;const e=t.team||"red",n=e===this.localTeam,i=t.name||"",r=new xs(this.scene,!1,e,n,i,!1,this.localTeam);r.setCamera(this.camera),r.setPosition(t.x||0,0,t.z||0),r.setRotation(t.yaw||0),this.remotePlayers.set(t.id,{snowman:r,data:t}),this._updatePlayerCount()}_onPlayerLeave(t){const e=this.remotePlayers.get(t);e&&(e.snowman.remove(),this.remotePlayers.delete(t)),this._updatePlayerCount()}_onWorldState(t){for(const e of t.players){if(e.id===this.networkClient.playerId)continue;let n=this.remotePlayers.get(e.id);if(n)e.name&&n.data&&e.name!==n.data.name&&n.snowman.updateNameLabel(e.name);else{const i=e.team||"red",r=i===this.localTeam,a=e.name||"",o=new xs(this.scene,!1,i,r,a,!1,this.localTeam);o.setCamera(this.camera),n={snowman:o,data:e},this.remotePlayers.set(e.id,n)}n.snowman.setPosition(e.x,0,e.z),n.snowman.setRotation(e.yaw),n.data=e}this._updatePlayerCount()}_onPlayerNameUpdate(t){const e=this.remotePlayers.get(t.id);e&&t.name&&(e.snowman.updateNameLabel(t.name),e.data&&(e.data.name=t.name))}_updatePlayerCount(){const t=1+this.remotePlayers.size+this.aiPlayers.length;document.getElementById("player-count").textContent=`玩家: ${t}`}_updateStaminaUI(){const t=document.getElementById("stamina-bar"),e=document.getElementById("stamina-fill");t&&e&&(t.style.display="block",e.style.width=`${this.stamina*100}%`,this.isSprinting?e.style.backgroundColor="#4a90d9":this.stamina<.3?e.style.backgroundColor="#d94a4a":e.style.backgroundColor="#2ecc71")}_updateHPUI(){if(!this.localPlayer)return;const t=document.getElementById("hp-fill"),e=document.getElementById("hp-text"),n=this.localPlayer.hp,i=W.PLAYER_MAX_HP,r=n/i;t&&(t.style.width=`${r*100}%`,r>=.7?(t.style.background="linear-gradient(90deg, #2ecc71, #27ae60)",t.style.animation="none"):r>=.2?(t.style.background="linear-gradient(90deg, #f1c40f, #e67e22)",t.style.animation="none"):(t.style.background="linear-gradient(90deg, #e74c3c, #c0392b)",t.style.animation="hp-flash 0.5s infinite")),e&&(e.textContent=`${Math.ceil(n)} / ${i}`)}_updateRespawnUI(){if(!this.localPlayer)return;let t=document.getElementById("respawn-overlay");if(!t){const n=document.getElementById("game-ui");if(!n)return;t=document.createElement("div"),t.id="respawn-overlay",t.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100;color:white;font-family:"Microsoft YaHei",sans-serif;';const i=document.createElement("div");i.id="respawn-title",i.style.cssText="font-size:48px;font-weight:bold;margin-bottom:20px;color:#e74c3c;text-shadow:0 0 20px rgba(231,76,60,0.8);",i.textContent="你被淘汰了！";const r=document.createElement("div");r.id="respawn-timer",r.style.cssText="font-size:32px;color:#f39c12;",t.appendChild(i),t.appendChild(r),n.appendChild(t)}const e=document.getElementById("respawn-timer");if(e){const n=Math.ceil(this.localPlayer.respawnTimer);n>0?e.textContent=`${n} 秒后复活...`:e.textContent="复活中..."}}_hideRespawnUI(){const t=document.getElementById("respawn-overlay");t&&t.remove()}_respawnPlayer(){const t=this._getRandomSpawnPosition();this.localPlayer.respawn(t.x,t.z),this.snowballManager.reset(),this._hideRespawnUI(),this._updateHPUI(),this._updateSpeedUI()}_tryQuickBuild(){const t=this.localPlayer.getPosition(),e=this.thirdPersonCamera.getYaw(),n={x:Math.sin(e),z:Math.cos(e)},i=W.TALL_WALL_BUILD_DISTANCE,r=t.x+n.x*i,a=t.z+n.z*i;if(this.mapGenerator.checkCollision(r,a,W.TALL_WALL_WIDTH/2)){this._showBuildMessage("前方有障碍物，无法建造！"),this.quickBuildCooldown=.5;return}for(const g of this.mapGenerator.walls){const _=r-g.x,f=a-g.z;if(Math.sqrt(_*_+f*f)<g.width/2+W.TALL_WALL_WIDTH/2+.5){const S=g.x-t.x,v=g.z-t.z;if(n.x*S+n.z*v>0){this._showBuildMessage("前方有高墙，无法建造！"),this.quickBuildCooldown=.5;return}}}for(const g of this.tallWalls){if(g.destroyed)continue;const _=r-g.x,f=a-g.z;if(Math.sqrt(_*_+f*f)<W.TALL_WALL_WIDTH+.5){this._showBuildMessage("前方已有矮墙，无法建造！"),this.quickBuildCooldown=.5;return}}const o=this.mapGenerator.gridGround,l=W.TALL_WALL_BUILD_COST,c=o.getSurroundingCells(t.x,t.z,e);let h=0;for(const g of c)o._isValidGrid(g.gridX,g.gridZ)&&(h+=o.snowUnits[g.gridX][g.gridZ]);if(h<l){this._showBuildMessage("附近雪量不足，无法建造！"),this.quickBuildCooldown=.5;return}let u=l;const d=[...c].sort((g,_)=>g.priority-_.priority);for(const g of d){if(u<=0)break;if(!o._isValidGrid(g.gridX,g.gridZ))continue;const _=o.snowUnits[g.gridX][g.gridZ],f=Math.min(_,u);o.snowUnits[g.gridX][g.gridZ]-=f,o._updateCellVisual(g.gridX,g.gridZ),u-=f}const m=new Ho(this.scene,r,a,e,g=>{this._onTallWallDestroyed(g)});this.tallWalls.push(m),this.snowballThrower.addCollider(m.collider),this.mapGenerator.colliders.push(m.collider),this.quickBuildCooldown=.8,this._showBuildMessage("矮墙已建造！")}_onTallWallDestroyed(t){const e=this.snowballThrower.colliders.indexOf(t.collider);e!==-1&&this.snowballThrower.colliders.splice(e,1);const n=this.mapGenerator.colliders.indexOf(t.collider);n!==-1&&this.mapGenerator.colliders.splice(n,1)}_showBuildMessage(t){let e=document.getElementById("build-message");if(!e){const n=document.getElementById("game-ui");if(!n)return;e=document.createElement("div"),e.id="build-message",e.style.cssText="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);padding:0.6rem 1.5rem;background:rgba(0,0,0,0.7);color:white;border-radius:15px;font-size:1.1rem;font-weight:bold;z-index:55;pointer-events:none;transition:opacity 0.3s;",n.appendChild(e)}e.textContent=t,e.style.opacity="1",e.style.display="block",clearTimeout(this._buildMessageTimer),this._buildMessageTimer=setTimeout(()=>{e.style.opacity="0",setTimeout(()=>{e.style.display="none"},300)},1500)}_tryHeal(){if(this.localPlayer.isDead)return;if(this.localPlayer.hp>=this.localPlayer.maxHp){this._showBuildMessage("血量已满！");return}if(this.snowballManager.snowballCount<=0){this._showBuildMessage("没有雪球，无法回血！");return}this.snowballManager.snowballCount--,this.localPlayer.snowballCount=this.snowballManager.snowballCount,this.snowballManager._updateUI();const t=W.HEAL_PER_SNOWBALL;this.localPlayer.hp=Math.min(this.localPlayer.maxHp,this.localPlayer.hp+t),this.localPlayer._updateTransparency(),this.localPlayer.updateSpeedMultiplier(),this._updateHPUI(),this._updateSpeedUI(),this._showBuildMessage(`+${t} HP`)}_trySuSnowball(){if(this.localPlayer.isDead)return;const t=W.SU_COST_SNOWBALL;if(this.localPlayer.hp<=t){this._showBuildMessage(`血量不足！需要 ${t} SU`);return}if(this.snowballManager.snowballCount>=this.snowballManager.maxSnowballs){this._showBuildMessage("雪球已满！");return}this.localPlayer.hp-=t,this.snowballManager.snowballCount++,this.localPlayer.snowballCount=this.snowballManager.snowballCount,this.snowballManager._updateUI(),this.localPlayer._updateTransparency(),this.localPlayer.updateSpeedMultiplier(),this._updateHPUI(),this._updateSpeedUI(),this._showBuildMessage(`-${t} SU → +1 雪球`)}_trySuWall(){if(this.localPlayer.isDead)return;const t=W.SU_COST_SHORT_WALL;if(this.localPlayer.hp<=t){this._showBuildMessage(`血量不足！需要 ${t} SU`);return}const e=this.localPlayer.getPosition(),n=this.thirdPersonCamera.getYaw(),i={x:Math.sin(n),z:Math.cos(n)},r=W.TALL_WALL_BUILD_DISTANCE,a=e.x+i.x*r,o=e.z+i.z*r;if(this.mapGenerator.checkCollision(a,o,W.TALL_WALL_WIDTH/2)){this._showBuildMessage("前方有障碍物，无法建造！");return}for(const c of this.mapGenerator.walls){const h=a-c.x,u=o-c.z;if(Math.sqrt(h*h+u*u)<c.width/2+W.TALL_WALL_WIDTH/2+.5){const m=c.x-e.x,g=c.z-e.z;if(i.x*m+i.z*g>0){this._showBuildMessage("前方有高墙，无法建造！");return}}}for(const c of this.tallWalls){if(c.destroyed)continue;const h=a-c.x,u=o-c.z;if(Math.sqrt(h*h+u*u)<W.TALL_WALL_WIDTH+.5){this._showBuildMessage("前方已有矮墙，无法建造！");return}}this.localPlayer.hp-=t,this.localPlayer._updateTransparency();const l=new Ho(this.scene,a,o,n,c=>{this._onTallWallDestroyed(c)});this.tallWalls.push(l),this.snowballThrower.addCollider(l.collider),this.mapGenerator.colliders.push(l.collider),this.localPlayer.updateSpeedMultiplier(),this._updateHPUI(),this._updateSpeedUI(),this._showBuildMessage(`-${t} SU → 矮墙已建造！`)}_getRandomSpawnPosition(){const e=W.WORLD_SIZE*.8;for(let n=0;n<100;n++){const i=(Math.random()-.5)*e,r=(Math.random()-.5)*e;if(!(Math.sqrt(i*i+r*r)<8)&&!this.mapGenerator.checkCollision(i,r,W.PLAYER_RADIUS*2)&&!this._checkPlayerCollision(i,r,null))return{x:i,z:r}}return{x:0,z:0}}_updateSpeedUI(){if(!this.localPlayer||this.localPlayer.isDead)return;const t=document.getElementById("stat-speed"),e=document.getElementById("stat-hp"),n=document.getElementById("stat-snowball");if(t){const i=Math.round(this.localPlayer.speedMultiplier*100);let r="#2ecc71";i>120?r="#e74c3c":i>100?r="#f39c12":i<90&&(r="#3498db"),t.style.color=r,t.textContent=`速度: ${i}%`}if(e){const i=Math.ceil(this.localPlayer.hp);let r="#2ecc71";i<20?r="#e74c3c":i<70&&(r="#f1c40f"),e.style.color=r,e.textContent=`HP: ${i}`}n&&(n.textContent=`雪球: ${this.snowballManager.snowballCount}`)}destroy(){this.stop();for(const t of this.remotePlayers.values())t.snowman.remove();this.remotePlayers.clear();for(const t of this.aiPlayers)t.snowman.remove();this.aiPlayers=[];for(const t of this.tallWalls)t.destroyed||t.remove();this.tallWalls=[],this.localPlayer&&this.localPlayer.remove(),this.renderer&&this.renderer.dispose()}}class ig{constructor(){this.ws=null,this.playerId=null,this.playerName="Player",this.playerTeam="blue",this.playerSpawnX=0,this.playerSpawnZ=0,this.playerSpawnYaw=0,this.isConnected=!1,this.onPlayerJoin=null,this.onPlayerLeave=null,this.onWorldState=null,this.onWelcome=null,this.onDisconnect=null,this.onPlayerNameUpdate=null}connect(t,e){return new Promise((n,i)=>{this.playerName=e;try{this.ws=new WebSocket(t)}catch(a){i(a);return}this.ws.onopen=()=>{console.log("Connected to server")},this.ws.onmessage=a=>{try{const o=JSON.parse(a.data);this._handleMessage(o)}catch(o){console.error("Error parsing message:",o)}},this.ws.onclose=()=>{console.log("Disconnected from server"),this.isConnected=!1,this.onDisconnect&&this.onDisconnect()},this.ws.onerror=a=>{console.error("WebSocket error event:",a),i(new Error("无法连接服务器，请检查地址是否正确"))};const r=setTimeout(()=>{i(new Error("Connection timeout"))},5e3);this._originalOnWelcome=this.onWelcome,this.onWelcome=a=>{clearTimeout(r),this.isConnected=!0,this.playerId=a.playerId,this.playerTeam=a.team||"blue",this.playerSpawnX=a.spawnX||0,this.playerSpawnZ=a.spawnZ||0,this.playerSpawnYaw=a.spawnYaw||0,this.sendPlayerUpdate({x:this.playerSpawnX,z:this.playerSpawnZ,yaw:this.playerSpawnYaw}),this._originalOnWelcome&&this._originalOnWelcome(a),n()}})}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.isConnected=!1,this.playerId=null}_handleMessage(t){switch(t.type){case ri.WELCOME:this.onWelcome&&this.onWelcome(t.data);break;case ri.PLAYER_JOIN:this.onPlayerJoin&&this.onPlayerJoin(t.data);break;case ri.PLAYER_LEAVE:this.onPlayerLeave&&this.onPlayerLeave(t.data);break;case ri.WORLD_STATE:this.onWorldState&&this.onWorldState(t.data);break;case ri.PLAYER_NAME_UPDATE:this.onPlayerNameUpdate&&this.onPlayerNameUpdate(t.data);break}}sendPlayerUpdate(t){!this.isConnected||!this.ws||this._send({type:ri.PLAYER_MOVE,data:{id:this.playerId,name:this.playerName,...t}})}_send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}}class Xe{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.worldSize=W.WORLD_SIZE,this.viewScale=1,this.offsetX=0,this.offsetY=0,this.houses=[],this.walls=[],this.tool="wall",this.selectedObject=null,this.selectedIndex=-1,this.wallAngle=0,this.houseRadius=2.5,this.isDragging=!1,this.isPanning=!1,this.dragStart={x:0,y:0},this.panStart={x:0,y:0},this.panOffsetStart={x:0,y:0},this.mouseWorldX=0,this.mouseWorldZ=0,this.gridSnap=!0,this.snapSize=2,this.mapName="我的地图",this._resize(),this._bindEvents(),this._centerView(),this.render()}_resize(){const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height}_centerView(){const e=(this.canvas.width-80)/this.worldSize,n=(this.canvas.height-40*2)/this.worldSize;this.viewScale=Math.min(e,n),this.offsetX=this.canvas.width/2,this.offsetY=this.canvas.height/2}worldToScreen(t,e){return{x:this.offsetX+t*this.viewScale,y:this.offsetY+e*this.viewScale}}screenToWorld(t,e){return{x:(t-this.offsetX)/this.viewScale,z:(e-this.offsetY)/this.viewScale}}snapWorld(t,e){return this.gridSnap?{x:Math.round(t/this.snapSize)*this.snapSize,z:Math.round(e/this.snapSize)*this.snapSize}:{x:t,z:e}}_bindEvents(){this.canvas.addEventListener("mousedown",t=>this._onMouseDown(t)),this.canvas.addEventListener("mousemove",t=>this._onMouseMove(t)),this.canvas.addEventListener("mouseup",t=>this._onMouseUp(t)),this.canvas.addEventListener("wheel",t=>this._onWheel(t)),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("keydown",t=>this._onKeyDown(t)),window.addEventListener("mapEditorResize",()=>{this._resize(),this.render()})}_onMouseDown(t){const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;if(t.button===1||t.button===0&&t.altKey){this.isPanning=!0,this.dragStart={x:t.clientX,y:t.clientY},this.panOffsetStart={x:this.offsetX,y:this.offsetY};return}if(t.button===2){this.wallAngle+=Math.PI/8,this.render();return}if(t.button===0){const r=this.screenToWorld(n,i),a=this.snapWorld(r.x,r.z);if(this.tool==="wall"){const o=this._hitTestWall(r.x,r.z);if(o>=0)this.selectedObject="wall",this.selectedIndex=o,this.isDragging=!0,this.dragStart={x:a.x,z:a.z};else{const l={x:a.x,z:a.z,angle:this.wallAngle,width:W.WALL_WIDTH,thickness:W.WALL_THICKNESS};this.walls.push(l),this.selectedObject="wall",this.selectedIndex=this.walls.length-1}}else if(this.tool==="house"){const o=this._hitTestHouse(r.x,r.z);if(o>=0)this.selectedObject="house",this.selectedIndex=o,this.isDragging=!0,this.dragStart={x:a.x,z:a.z};else{const l={x:a.x,z:a.z,radius:this.houseRadius};this.houses.push(l),this.selectedObject="house",this.selectedIndex=this.houses.length-1}}else if(this.tool==="erase"){const o=this._hitTestWall(r.x,r.z);if(o>=0)this.walls.splice(o,1),this.selectedObject=null,this.selectedIndex=-1;else{const l=this._hitTestHouse(r.x,r.z);l>=0&&(this.houses.splice(l,1),this.selectedObject=null,this.selectedIndex=-1)}}else if(this.tool==="select"){const o=this._hitTestWall(r.x,r.z);if(o>=0)this.selectedObject="wall",this.selectedIndex=o,this.isDragging=!0,this.dragStart={x:a.x,z:a.z};else{const l=this._hitTestHouse(r.x,r.z);l>=0?(this.selectedObject="house",this.selectedIndex=l,this.isDragging=!0,this.dragStart={x:a.x,z:a.z}):(this.selectedObject=null,this.selectedIndex=-1)}}this.render()}}_onMouseMove(t){const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,r=this.screenToWorld(n,i),a=this.snapWorld(r.x,r.z);if(this.mouseWorldX=a.x,this.mouseWorldZ=a.z,this.isPanning){const o=t.clientX-this.dragStart.x,l=t.clientY-this.dragStart.y;this.offsetX=this.panOffsetStart.x+o,this.offsetY=this.panOffsetStart.y+l,this.render();return}if(this.isDragging&&this.selectedIndex>=0){const o=a.x-this.dragStart.x,l=a.z-this.dragStart.z;this.selectedObject==="wall"&&this.selectedIndex<this.walls.length?(this.walls[this.selectedIndex].x+=o,this.walls[this.selectedIndex].z+=l):this.selectedObject==="house"&&this.selectedIndex<this.houses.length&&(this.houses[this.selectedIndex].x+=o,this.houses[this.selectedIndex].z+=l),this.dragStart={x:a.x,z:a.z}}this.render()}_onMouseUp(t){this.isDragging=!1,this.isPanning=!1}_onWheel(t){t.preventDefault();const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,r=this.screenToWorld(n,i),a=t.deltaY>0?.9:1.1;this.viewScale=Math.max(2,Math.min(20,this.viewScale*a));const o=this.screenToWorld(n,i);this.offsetX+=(o.x-r.x)*this.viewScale,this.offsetY+=(o.z-r.z)*this.viewScale,this.render()}_onKeyDown(t){t.key==="Delete"||t.key==="Backspace"?this.deleteSelected():t.key==="r"||t.key==="R"?this.selectedObject==="wall"&&this.selectedIndex>=0&&this.selectedIndex<this.walls.length&&(this.walls[this.selectedIndex].angle+=Math.PI/8,this.render()):t.key==="Escape"&&(this.selectedObject=null,this.selectedIndex=-1,this.render())}_hitTestWall(t,e){for(let n=this.walls.length-1;n>=0;n--){const i=this.walls[n],r=Math.cos(-i.angle),a=Math.sin(-i.angle),o=t-i.x,l=e-i.z,c=o*r-l*a,h=o*a+l*r;if(Math.abs(c)<=i.width/2+1&&Math.abs(h)<=i.thickness/2+1)return n}return-1}_hitTestHouse(t,e){for(let n=this.houses.length-1;n>=0;n--){const i=this.houses[n];if(Math.sqrt((t-i.x)**2+(e-i.z)**2)<=i.radius+.5)return n}return-1}deleteSelected(){this.selectedObject==="wall"&&this.selectedIndex>=0&&this.selectedIndex<this.walls.length?this.walls.splice(this.selectedIndex,1):this.selectedObject==="house"&&this.selectedIndex>=0&&this.selectedIndex<this.houses.length&&this.houses.splice(this.selectedIndex,1),this.selectedObject=null,this.selectedIndex=-1,this.render()}clearAll(){this.houses=[],this.walls=[],this.selectedObject=null,this.selectedIndex=-1,this.render()}setTool(t){this.tool=t,this.selectedObject=null,this.selectedIndex=-1,this.render()}setWallAngle(t){this.wallAngle=t,this.selectedObject==="wall"&&this.selectedIndex>=0&&this.selectedIndex<this.walls.length&&(this.walls[this.selectedIndex].angle=t),this.render()}setHouseRadius(t){this.houseRadius=t,this.selectedObject==="house"&&this.selectedIndex>=0&&this.selectedIndex<this.houses.length&&(this.houses[this.selectedIndex].radius=t),this.render()}getMapData(){return{name:this.mapName,version:1,worldSize:this.worldSize,houses:this.houses.map(t=>({x:t.x,z:t.z,radius:t.radius})),walls:this.walls.map(t=>({x:t.x,z:t.z,angle:t.angle,width:t.width,thickness:t.thickness}))}}loadMapData(t){this.mapName=t.name||"未命名",this.houses=(t.houses||[]).map(e=>({x:e.x,z:e.z,radius:e.radius||2.5})),this.walls=(t.walls||[]).map(e=>({x:e.x,z:e.z,angle:e.angle||0,width:e.width||W.WALL_WIDTH,thickness:e.thickness||W.WALL_THICKNESS})),this.selectedObject=null,this.selectedIndex=-1,this.render()}saveToLocalStorage(){const t=this.getMapData(),e=this._getStoredMaps(),n=e.findIndex(i=>i.name===t.name);return n>=0?e[n]=t:e.push(t),localStorage.setItem("snownite_maps",JSON.stringify(e)),t.name}static deleteFromLocalStorage(t){const e=Xe.getStoredMaps(),n=e.findIndex(i=>i.name===t);n>=0&&(e.splice(n,1),localStorage.setItem("snownite_maps",JSON.stringify(e)))}_getStoredMaps(){try{return JSON.parse(localStorage.getItem("snownite_maps")||"[]")}catch{return[]}}static getStoredMaps(){try{return JSON.parse(localStorage.getItem("snownite_maps")||"[]")}catch{return[]}}static async getBundledMaps(){try{const t=await fetch("/maps/manifest.json");return t.ok?await t.json():[]}catch{return[]}}static async loadBundledMap(t){const e=await fetch(`/maps/${t}`);if(!e.ok)throw new Error("Map not found");return await e.json()}static loadStoredMap(t){return Xe.getStoredMaps().find(n=>n.name===t)||null}exportAsFile(){const t=this.getMapData(),e=JSON.stringify(t,null,2),n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`${t.name.replace(/[^a-zA-Z0-9\u4e00-\u9fff]/g,"_")}.json`,r.click(),URL.revokeObjectURL(i)}importFromFile(){return new Promise(t=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=n=>{const i=n.target.files[0];if(!i){t(!1);return}const r=new FileReader;r.onload=a=>{try{const o=JSON.parse(a.target.result);this.loadMapData(o),t(!0)}catch{t(!1)}},r.readAsText(i)},e.click()})}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="#1a2a3a",t.fillRect(0,0,e,n),this._drawGrid();const i=this.worldSize/2,r=this.worldToScreen(-i,-i),a=this.worldToScreen(i,i);t.strokeStyle="#4a6a8a",t.lineWidth=2,t.strokeRect(r.x,r.y,a.x-r.x,a.y-r.y),this.houses.forEach((o,l)=>this._drawHouse(o,l)),this.walls.forEach((o,l)=>this._drawWall(o,l)),this._drawGhost(),this._drawInfo()}_drawGrid(){const t=this.ctx,e=10,n=this.worldSize/2;t.strokeStyle="#2a3a4a",t.lineWidth=.5;for(let l=-n;l<=n;l+=e){const c=this.worldToScreen(l,-n),h=this.worldToScreen(l,n);t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke()}for(let l=-n;l<=n;l+=e){const c=this.worldToScreen(-n,l),h=this.worldToScreen(n,l);t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke()}t.strokeStyle="#3a4a5a",t.lineWidth=1,this.worldToScreen(0,0);const i=this.worldToScreen(-n,0),r=this.worldToScreen(n,0);t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(r.x,r.y),t.stroke();const a=this.worldToScreen(0,-n),o=this.worldToScreen(0,n);t.beginPath(),t.moveTo(a.x,a.y),t.lineTo(o.x,o.y),t.stroke()}_drawHouse(t,e){const n=this.ctx,i=this.worldToScreen(t.x,t.z),r=t.radius*this.viewScale,a=this.selectedObject==="house"&&this.selectedIndex===e;n.beginPath(),n.arc(i.x,i.y,r,0,Math.PI*2),a?(n.fillStyle="rgba(100, 200, 255, 0.4)",n.strokeStyle="#64c8ff",n.lineWidth=2):(n.fillStyle="rgba(240, 240, 255, 0.3)",n.strokeStyle="#c0c0e0",n.lineWidth=1.5),n.fill(),n.stroke(),n.fillStyle=a?"#64c8ff":"#c0c0e0",n.font=`${Math.max(10,12)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("🏠",i.x,i.y)}_drawWall(t,e){const n=this.ctx,i=this.selectedObject==="wall"&&this.selectedIndex===e,r=Math.cos(t.angle),a=Math.sin(t.angle),o=t.width/2,l=t.thickness/2,h=[{dx:-o,dz:-l},{dx:o,dz:-l},{dx:o,dz:l},{dx:-o,dz:l}].map(_=>{const f=t.x+_.dx*r-_.dz*a,p=t.z+_.dx*a+_.dz*r;return this.worldToScreen(f,p)});n.beginPath(),n.moveTo(h[0].x,h[0].y);for(let _=1;_<h.length;_++)n.lineTo(h[_].x,h[_].y);n.closePath(),i?(n.fillStyle="rgba(255, 200, 100, 0.5)",n.strokeStyle="#ffc864",n.lineWidth=2):(n.fillStyle="rgba(200, 210, 230, 0.4)",n.strokeStyle="#a0b0c0",n.lineWidth=1.5),n.fill(),n.stroke();const u=this.worldToScreen(t.x,t.z),d=t.x+r*o,m=t.z+a*o,g=this.worldToScreen(d,m);n.beginPath(),n.moveTo(u.x,u.y),n.lineTo(g.x,g.y),n.strokeStyle=i?"#ffc864":"#8090a0",n.lineWidth=1,n.stroke()}_drawGhost(){if(this.isDragging||this.isPanning||this.tool!=="wall"&&this.tool!=="house")return;const t=this.ctx,e=this.snapWorld(this.mouseWorldX,this.mouseWorldZ);if(this.tool==="wall"){const n={x:e.x,z:e.z,angle:this.wallAngle,width:W.WALL_WIDTH,thickness:W.WALL_THICKNESS},i=Math.cos(n.angle),r=Math.sin(n.angle),a=n.width/2,o=n.thickness/2,c=[{dx:-a,dz:-o},{dx:a,dz:-o},{dx:a,dz:o},{dx:-a,dz:o}].map(h=>{const u=n.x+h.dx*i-h.dz*r,d=n.z+h.dx*r+h.dz*i;return this.worldToScreen(u,d)});t.beginPath(),t.moveTo(c[0].x,c[0].y);for(let h=1;h<c.length;h++)t.lineTo(c[h].x,c[h].y);t.closePath(),t.fillStyle="rgba(255, 255, 255, 0.15)",t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=1,t.setLineDash([5,5]),t.fill(),t.stroke(),t.setLineDash([])}else if(this.tool==="house"){const n=this.worldToScreen(e.x,e.z),i=this.houseRadius*this.viewScale;t.beginPath(),t.arc(n.x,n.y,i,0,Math.PI*2),t.fillStyle="rgba(255, 255, 255, 0.1)",t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=1,t.setLineDash([5,5]),t.fill(),t.stroke(),t.setLineDash([])}}_drawInfo(){const t=this.ctx;t.fillStyle="rgba(0, 0, 0, 0.6)",t.fillRect(8,this.canvas.height-32,320,24),t.fillStyle="#a0b0c0",t.font="12px sans-serif",t.textAlign="left",t.textBaseline="middle",t.fillText(`坐标: (${this.mouseWorldX.toFixed(1)}, ${this.mouseWorldZ.toFixed(1)})  |  墙: ${this.walls.length}  屋: ${this.houses.length}  |  ${this.gridSnap?"吸附开":"吸附关"}`,16,this.canvas.height-20)}destroy(){this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mouseup",this._onMouseUp),this.canvas.removeEventListener("wheel",this._onWheel)}}let ln=null,En=null,te=null;const Mi=document.getElementById("main-menu"),$r=document.getElementById("connect-menu"),fi=document.getElementById("map-select-menu"),ki=document.getElementById("map-editor-page"),Fs=document.getElementById("game-ui"),Il=document.getElementById("loading"),Ul=document.getElementById("game-canvas");function zs(s){zl(),setTimeout(()=>{Bs(),Fs.classList.add("active");try{s&&(window.__pendingMapData=s),ln=new Dl(Ul,!1,null,""),ln.start()}catch(t){console.error("Game init error:",t),alert("游戏初始化失败: "+t.message),Fl()}Bl()},100)}async function Nl(){var i,r;Bs(),fi.style.display="flex";const s=document.getElementById("map-list");s.innerHTML='<div style="color:rgba(255,255,255,0.6);text-align:center;">加载中...</div>';const t=Xe.getStoredMaps();let e=[];try{e=await Xe.getBundledMaps()}catch{}const n=[];for(const a of e)n.push({...a,source:"bundled"});for(const a of t)e.find(o=>o.name===a.name)||n.push({...a,source:"local"});if(n.length===0)s.innerHTML='<div style="color:rgba(255,255,255,0.6);text-align:center;">暂无保存的地图</div>';else{s.innerHTML="";for(const a of n){const o=document.createElement("div");o.className="map-item";const l=document.createElement("div");l.className="map-item-info";const c=document.createElement("span");c.className="map-item-name",c.textContent=a.name;const h=document.createElement("span");h.className="map-source-tag",h.textContent=a.source==="bundled"?"内置":"本地",c.appendChild(h);const u=document.createElement("span");u.className="map-item-detail",u.textContent=`墙: ${((i=a.walls)==null?void 0:i.length)||0}  屋: ${((r=a.houses)==null?void 0:r.length)||0}`,l.appendChild(c),l.appendChild(u);const d=document.createElement("div");d.className="map-item-actions";const m=document.createElement("button");m.className="map-item-btn map-item-play",m.textContent="▶ 开玩",m.addEventListener("click",async()=>{let _=a;if(a.source==="bundled"&&a.filename)try{_=await Xe.loadBundledMap(a.filename)}catch{alert("地图加载失败");return}fi.style.display="none",zs(_)});const g=document.createElement("button");if(g.className="map-item-btn map-item-edit",g.textContent="✏️ 编辑",g.addEventListener("click",async()=>{let _=a;if(a.source==="bundled"&&a.filename)try{_=await Xe.loadBundledMap(a.filename)}catch{alert("地图加载失败");return}fi.style.display="none",Ol(_)}),d.appendChild(m),d.appendChild(g),a.source==="local"){const _=document.createElement("button");_.className="map-item-btn map-item-delete",_.textContent="🗑️",_.addEventListener("click",()=>{confirm(`确定删除地图 "${a.name}" 吗？`)&&(Xe.deleteFromLocalStorage(a.name),Nl())}),d.appendChild(_)}o.appendChild(l),o.appendChild(d),s.appendChild(o)}}}function Ol(s){Bs(),ki.style.display="flex";const t=document.getElementById("editor-canvas");te&&te.destroy(),te=new Xe(t),s&&(te.loadMapData(s),document.getElementById("editor-map-name").value=s.name||"我的地图"),window.dispatchEvent(new Event("mapEditorResize"))}function sg(){te&&(te.destroy(),te=null),ki.style.display="none",Mi.classList.remove("hidden")}function rg(){Mi.classList.add("hidden"),$r.style.display="flex";const s=document.getElementById("server-address");if(s&&s.value==="ws://localhost:8765"){const t=window.location.hostname;t&&t!=="localhost"&&t!=="127.0.0.1"&&(s.value=`ws://${t}:8765`)}}function Fl(){$r.style.display="none",Mi.classList.remove("hidden")}function ag(s,t=8){let e=0,n="";for(const i of s){if(e>=t)break;n+=i,e++}return n}async function og(){const s=document.getElementById("server-address").value.trim();let t=document.getElementById("player-name").value.trim();if(!s){alert("请填写服务器地址");return}if(!t){alert("请输入你的名字");return}t=ag(t,8),zl();try{En=new ig,await En.connect(s,t),Bs(),Fs.classList.add("active"),ln=new Dl(Ul,!0,En,t),ln.start()}catch(e){console.error("Connection failed:",e),alert("连接服务器失败: "+e.message)}finally{Bl()}}function lg(){ln&&(ln.destroy(),ln=null),En&&(En.disconnect(),En=null),window.__pendingMapData=null,Fs.classList.remove("active"),Mi.classList.remove("hidden")}function zl(){Il.classList.add("active")}function Bl(){Il.classList.remove("active")}function Bs(){Mi.classList.add("hidden"),$r.style.display="none",fi.style.display="none",ki.style.display="none",Fs.classList.remove("active")}document.getElementById("btn-single").addEventListener("click",async()=>{const s=Xe.getStoredMaps();let t=[];try{t=await Xe.getBundledMaps()}catch{}s.length>0||t.length>0?Nl():zs(null)});document.getElementById("btn-random-map").addEventListener("click",()=>{fi.style.display="none",zs(null)});document.getElementById("btn-map-select-back").addEventListener("click",()=>{fi.style.display="none",Mi.classList.remove("hidden")});document.getElementById("btn-multi").addEventListener("click",rg);document.getElementById("btn-connect").addEventListener("click",og);document.getElementById("btn-back").addEventListener("click",Fl);document.getElementById("back-btn").addEventListener("click",lg);document.getElementById("btn-editor").addEventListener("click",()=>Ol(null));document.querySelectorAll("[data-tool]").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll("[data-tool]").forEach(t=>t.classList.remove("active")),s.classList.add("active"),te&&te.setTool(s.dataset.tool)})});document.getElementById("editor-snap").addEventListener("change",s=>{te&&(te.gridSnap=s.target.checked)});document.getElementById("editor-map-name").addEventListener("input",s=>{te&&(te.mapName=s.target.value)});document.getElementById("editor-save").addEventListener("click",()=>{if(te){const s=te.saveToLocalStorage();alert(`地图 "${s}" 已保存到本地！`)}});document.getElementById("editor-export").addEventListener("click",()=>{te&&te.exportAsFile()});document.getElementById("editor-import").addEventListener("click",async()=>{te&&(await te.importFromFile()?document.getElementById("editor-map-name").value=te.mapName:alert("导入失败，请选择有效的地图JSON文件"))});document.getElementById("editor-clear").addEventListener("click",()=>{te&&confirm("确定清空地图？")&&te.clearAll()});document.getElementById("editor-play").addEventListener("click",()=>{if(te){const s=te.getMapData();ki.style.display="none",zs(s)}});document.getElementById("editor-back").addEventListener("click",sg);window.addEventListener("beforeunload",()=>{ln&&ln.destroy(),En&&En.disconnect()});window.addEventListener("resize",()=>{te&&ki.style.display==="flex"&&window.dispatchEvent(new Event("mapEditorResize"))});
