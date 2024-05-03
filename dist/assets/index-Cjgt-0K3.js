(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const J={},tn=[],Ne=()=>{},nf=()=>!1,Qs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dr=t=>t.startsWith("onUpdate:"),he=Object.assign,Mr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sf=Object.prototype.hasOwnProperty,U=(t,e)=>sf.call(t,e),O=Array.isArray,nn=t=>Js(t)==="[object Map]",Wa=t=>Js(t)==="[object Set]",D=t=>typeof t=="function",re=t=>typeof t=="string",jt=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Va=t=>(ee(t)||D(t))&&D(t.then)&&D(t.catch),ja=Object.prototype.toString,Js=t=>ja.call(t),rf=t=>Js(t).slice(8,-1),Ga=t=>Js(t)==="[object Object]",kr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},of=/-(\w)/g,cn=Xs(t=>t.replace(of,(e,n)=>n?n.toUpperCase():"")),lf=/\B([A-Z])/g,_n=Xs(t=>t.replace(lf,"-$1").toLowerCase()),qa=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Si=Xs(t=>t?`on${qa(t)}`:""),pt=(t,e)=>!Object.is(t,e),bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ka=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jo;const za=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=re(s)?hf(s):Lr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(re(t)||ee(t))return t}const af=/;(?![^(]*\))/g,cf=/:([^]+)/,uf=/\/\*[^]*?\*\//g;function hf(t){const e={};return t.replace(uf,"").split(af).forEach(n=>{if(n){const s=n.split(cf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zs(t){let e="";if(re(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=Zs(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ff="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",df=Pr(ff);function Ya(t){return!!t||t===""}const Xo=t=>re(t)?t:t==null?"":O(t)||ee(t)&&(t.toString===ja||!D(t.toString))?JSON.stringify(t,Qa,2):String(t),Qa=(t,e)=>e&&e.__v_isRef?Qa(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ti(s,r)+" =>"]=i,n),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ti(n))}:jt(e)?Ti(e):ee(e)&&!O(e)&&!Ga(e)?String(e):e,Ti=(t,e="")=>{var n;return jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Ja{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function pf(t){return new Ja(t)}function _f(t,e=Pe){e&&e.active&&e.effects.push(t)}function gf(){return Pe}let Mt;class Fr{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_f(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,yt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(mf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ct,n=Mt;try{return ct=!0,Mt=this,this._runnings++,Zo(this),this.fn()}finally{el(this),this._runnings--,Mt=n,ct=e}}stop(){this.active&&(Zo(this),el(this),this.onStop&&this.onStop(),this.active=!1)}}function mf(t){return t.value}function Zo(t){t._trackId++,t._depsLength=0}function el(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Xa(t.deps[e],t);t.deps.length=t._depsLength}}function Xa(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ct=!0,Zi=0;const Za=[];function yt(){Za.push(ct),ct=!1}function vt(){const t=Za.pop();ct=t===void 0?!0:t}function Ur(){Zi++}function Br(){for(Zi--;!Zi&&er.length;)er.shift()()}function ec(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Xa(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const er=[];function tc(t,e,n){Ur();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&er.push(s.scheduler)))}Br()}const nc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},tr=new WeakMap,kt=Symbol(""),nr=Symbol("");function we(t,e,n){if(ct&&Mt){let s=tr.get(t);s||tr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=nc(()=>s.delete(n))),ec(Mt,i)}}function Xe(t,e,n,s,i,r){const o=tr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!jt(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?kr(n)&&l.push(o.get("length")):(l.push(o.get(kt)),nn(t)&&l.push(o.get(nr)));break;case"delete":O(t)||(l.push(o.get(kt)),nn(t)&&l.push(o.get(nr)));break;case"set":nn(t)&&l.push(o.get(kt));break}Ur();for(const a of l)a&&tc(a,4);Br()}const yf=Pr("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt)),tl=vf();function vf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)we(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yt(),Ur();const s=V(this)[e].apply(this,n);return Br(),vt(),s}}),t}function bf(t){jt(t)||(t=String(t));const e=V(this);return we(e,"has",t),e.hasOwnProperty(t)}class ic{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Df:ac:r?lc:oc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=O(e);if(!i){if(o&&U(tl,n))return Reflect.get(tl,n,s);if(n==="hasOwnProperty")return bf}const l=Reflect.get(e,n,s);return(jt(n)?sc.has(n):yf(n))||(i||we(e,"get",n),r)?l:pe(l)?o&&kr(n)?l:l.value:ee(l)?i?cc(l):ti(l):l}}class rc extends ic{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Hn(r);if(!As(s)&&!Hn(s)&&(r=V(r),s=V(s)),!O(e)&&pe(r)&&!pe(s))return a?!1:(r.value=s,!0)}const o=O(e)&&kr(n)?Number(n)<e.length:U(e,n),l=Reflect.set(e,n,s,i);return e===V(i)&&(o?pt(s,r)&&Xe(e,"set",n,s):Xe(e,"add",n,s)),l}deleteProperty(e,n){const s=U(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Xe(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!jt(n)||!sc.has(n))&&we(e,"has",n),s}ownKeys(e){return we(e,"iterate",O(e)?"length":kt),Reflect.ownKeys(e)}}class Cf extends ic{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ef=new rc,wf=new Cf,If=new rc(!0);const $r=t=>t,ei=t=>Reflect.getPrototypeOf(t);function fs(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);n||(pt(e,r)&&we(i,"get",e),we(i,"get",r));const{has:o}=ei(i),l=s?$r:n?Vr:Wn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ds(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return e||(pt(t,i)&&we(s,"has",t),we(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ps(t,e=!1){return t=t.__v_raw,!e&&we(V(t),"iterate",kt),Reflect.get(t,"size",t)}function nl(t){t=V(t);const e=V(this);return ei(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function sl(t,e){e=V(e);const n=V(this),{has:s,get:i}=ei(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?pt(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function il(t){const e=V(this),{has:n,get:s}=ei(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Xe(e,"delete",t,void 0),r}function rl(){const t=V(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,i){const r=this,o=r.__v_raw,l=V(o),a=e?$r:t?Vr:Wn;return!t&&we(l,"iterate",kt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function gs(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?$r:e?Vr:Wn;return!e&&we(r,"iterate",a?nr:kt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sf(){const t={get(r){return fs(this,r)},get size(){return ps(this)},has:ds,add:nl,set:sl,delete:il,clear:rl,forEach:_s(!1,!1)},e={get(r){return fs(this,r,!1,!0)},get size(){return ps(this)},has:ds,add:nl,set:sl,delete:il,clear:rl,forEach:_s(!1,!0)},n={get(r){return fs(this,r,!0)},get size(){return ps(this,!0)},has(r){return ds.call(this,r,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:_s(!0,!1)},s={get(r){return fs(this,r,!0,!0)},get size(){return ps(this,!0)},has(r){return ds.call(this,r,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gs(r,!1,!1),n[r]=gs(r,!0,!1),e[r]=gs(r,!1,!0),s[r]=gs(r,!0,!0)}),[t,n,e,s]}const[Tf,Rf,Af,Nf]=Sf();function Hr(t,e){const n=e?t?Nf:Af:t?Rf:Tf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,r)}const xf={get:Hr(!1,!1)},Of={get:Hr(!1,!0)},Pf={get:Hr(!0,!1)};const oc=new WeakMap,lc=new WeakMap,ac=new WeakMap,Df=new WeakMap;function Mf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kf(t){return t.__v_skip||!Object.isExtensible(t)?0:Mf(rf(t))}function ti(t){return Hn(t)?t:Wr(t,!1,Ef,xf,oc)}function Lf(t){return Wr(t,!1,If,Of,lc)}function cc(t){return Wr(t,!0,wf,Pf,ac)}function Wr(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=kf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function On(t){return Hn(t)?On(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function As(t){return!!(t&&t.__v_isShallow)}function uc(t){return t?!!t.__v_raw:!1}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Ff(t){return Object.isExtensible(t)&&Ka(t,"__v_skip",!0),t}const Wn=t=>ee(t)?ti(t):t,Vr=t=>ee(t)?cc(t):t;class hc{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fr(()=>e(this._value),()=>Cs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return(!e._cacheable||e.effect.dirty)&&pt(e._value,e._value=e.effect.run())&&Cs(e,4),fc(e),e.effect._dirtyLevel>=2&&Cs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Uf(t,e,n=!1){let s,i;const r=D(t);return r?(s=t,i=Ne):(s=t.get,i=t.set),new hc(s,i,r||!i,n)}function fc(t){var e;ct&&Mt&&(t=V(t),ec(Mt,(e=t.dep)!=null?e:t.dep=nc(()=>t.dep=void 0,t instanceof hc?t:void 0)))}function Cs(t,e=4,n){t=V(t);const s=t.dep;s&&tc(s,e)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Ri(t){return Bf(t,!1)}function Bf(t,e){return pe(t)?t:new $f(t,e)}class $f{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Wn(e)}get value(){return fc(this),this._value}set value(e){const n=this.__v_isShallow||As(e)||Hn(e);e=n?e:V(e),pt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wn(e),Cs(this,4))}}function Es(t){return pe(t)?t.value:t}const Hf={get:(t,e,n)=>Es(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function dc(t){return On(t)?t:new Proxy(t,Hf)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ut(t,e,n,s){try{return s?t(...s):t()}catch(i){ni(i,e,n)}}function Fe(t,e,n,s){if(D(t)){const i=ut(t,e,n,s);return i&&Va(i)&&i.catch(r=>{ni(r,e,n)}),i}if(O(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Fe(t[r],e,n,s));return i}}function ni(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){yt(),ut(a,null,10,[t,o,l]),vt();return}}Wf(t,n,i,s)}function Wf(t,e,n,s=!0){console.error(t)}let Vn=!1,sr=!1;const de=[];let Ke=0;const sn=[];let ot=null,Nt=0;const pc=Promise.resolve();let jr=null;function Vf(t){const e=jr||pc;return t?e.then(this?t.bind(this):t):e}function jf(t){let e=Ke+1,n=de.length;for(;e<n;){const s=e+n>>>1,i=de[s],r=jn(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Gr(t){(!de.length||!de.includes(t,Vn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?de.push(t):de.splice(jf(t.id),0,t),_c())}function _c(){!Vn&&!sr&&(sr=!0,jr=pc.then(mc))}function Gf(t){const e=de.indexOf(t);e>Ke&&de.splice(e,1)}function qf(t){O(t)?sn.push(...t):(!ot||!ot.includes(t,t.allowRecurse?Nt+1:Nt))&&sn.push(t),_c()}function ol(t,e,n=Vn?Ke+1:0){for(;n<de.length;n++){const s=de[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;de.splice(n,1),n--,s()}}}function gc(t){if(sn.length){const e=[...new Set(sn)].sort((n,s)=>jn(n)-jn(s));if(sn.length=0,ot){ot.push(...e);return}for(ot=e,Nt=0;Nt<ot.length;Nt++)ot[Nt]();ot=null,Nt=0}}const jn=t=>t.id==null?1/0:t.id,Kf=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mc(t){sr=!1,Vn=!0,de.sort(Kf);try{for(Ke=0;Ke<de.length;Ke++){const e=de[Ke];e&&e.active!==!1&&ut(e,null,14)}}finally{Ke=0,de.length=0,gc(),Vn=!1,jr=null,(de.length||sn.length)&&mc()}}function zf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||J;d&&(i=n.map(_=>re(_)?_.trim():_)),h&&(i=n.map(Xi))}let l,a=s[l=Si(e)]||s[l=Si(cn(e))];!a&&r&&(a=s[l=Si(_n(e))]),a&&Fe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Fe(c,t,6,i)}}function yc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!D(t)){const a=c=>{const u=yc(c,e,!0);u&&(l=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):he(o,r),ee(t)&&s.set(t,o),o)}function si(t,e){return!t||!Qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,_n(e))||U(t,e))}let Re=null,vc=null;function Ns(t){const e=Re;return Re=t,vc=t&&t.type.__scopeId||null,e}function Yf(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ml(-1);const r=Ns(e);let o;try{o=t(...i)}finally{Ns(r),s._d&&ml(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ai(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:I,inheritAttrs:R}=t,H=Ns(t);let Y,ne;try{if(n.shapeFlag&4){const se=i||s,Ae=se;Y=qe(c.call(Ae,se,u,h,_,d,I)),ne=l}else{const se=e;Y=qe(se.length>1?se(h,{attrs:l,slots:o,emit:a}):se(h,null)),ne=e.props?l:Qf(l)}}catch(se){Mn.length=0,ni(se,t,1),Y=Lt(Gn)}let W=Y;if(ne&&R!==!1){const se=Object.keys(ne),{shapeFlag:Ae}=W;se.length&&Ae&7&&(r&&se.some(Dr)&&(ne=Jf(ne,r)),W=un(W,ne,!1,!0))}return n.dirs&&(W=un(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),Y=W,Ns(H),Y}const Qf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qs(n))&&((e||(e={}))[n]=t[n]);return e},Jf=(t,e)=>{const n={};for(const s in t)(!Dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Xf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ll(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!si(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ll(s,o,c):!0:!!o;return!1}function ll(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!si(n,r))return!0}return!1}function Zf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ed=Symbol.for("v-ndc"),td=t=>t.__isSuspense;function nd(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):qf(t)}const sd=Symbol.for("v-scx"),id=()=>Is(sd),ms={};function rn(t,e,n){return bc(t,e,n)}function bc(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=J){if(e&&r){const B=e;e=(...Ye)=>{B(...Ye),Ae()}}const a=me,c=B=>s===!0?B:xt(B,s===!1?1:void 0);let u,h=!1,d=!1;if(pe(t)?(u=()=>t.value,h=As(t)):On(t)?(u=()=>c(t),h=!0):O(t)?(d=!0,h=t.some(B=>On(B)||As(B)),u=()=>t.map(B=>{if(pe(B))return B.value;if(On(B))return c(B);if(D(B))return ut(B,a,2)})):D(t)?e?u=()=>ut(t,a,2):u=()=>(_&&_(),Fe(t,a,3,[I])):u=Ne,e&&s){const B=u;u=()=>xt(B())}let _,I=B=>{_=W.onStop=()=>{ut(B,a,4),_=W.onStop=void 0}},R;if(oi)if(I=Ne,e?n&&Fe(e,a,3,[u(),d?[]:void 0,I]):u(),i==="sync"){const B=id();R=B.__watcherHandles||(B.__watcherHandles=[])}else return Ne;let H=d?new Array(t.length).fill(ms):ms;const Y=()=>{if(!(!W.active||!W.dirty))if(e){const B=W.run();(s||h||(d?B.some((Ye,$e)=>pt(Ye,H[$e])):pt(B,H)))&&(_&&_(),Fe(e,a,3,[B,H===ms?void 0:d&&H[0]===ms?[]:H,I]),H=B)}else W.run()};Y.allowRecurse=!!e;let ne;i==="sync"?ne=Y:i==="post"?ne=()=>ye(Y,a&&a.suspense):(Y.pre=!0,a&&(Y.id=a.uid),ne=()=>Gr(Y));const W=new Fr(u,Ne,ne),se=gf(),Ae=()=>{W.stop(),se&&Mr(se.effects,W)};return e?n?Y():H=W.run():i==="post"?ye(W.run.bind(W),a&&a.suspense):W.run(),R&&R.push(Ae),Ae}function rd(t,e,n){const s=this.proxy,i=re(t)?t.includes(".")?Cc(s,t):()=>s[t]:t.bind(s,s);let r;D(e)?r=e:(r=e.handler,n=e);const o=ns(this),l=bc(i,r.bind(s),n);return o(),l}function Cc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function xt(t,e=1/0,n){if(e<=0||!ee(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))xt(t.value,e,n);else if(O(t))for(let s=0;s<t.length;s++)xt(t[s],e,n);else if(Wa(t)||nn(t))t.forEach(s=>{xt(s,e,n)});else if(Ga(t))for(const s in t)xt(t[s],e,n);return t}function al(t,e){if(Re===null)return t;const n=li(Re)||Re.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=J]=e[i];r&&(D(r)&&(r={mounted:r,updated:r}),r.deep&&xt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function It(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(yt(),Fe(a,n,8,[t.el,l,t,e]),vt())}}const ws=t=>!!t.type.__asyncLoader,Ec=t=>t.type.__isKeepAlive;function od(t,e){wc(t,"a",e)}function ld(t,e){wc(t,"da",e)}function wc(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ii(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ec(i.parent.vnode)&&ad(s,e,n,i),i=i.parent}}function ad(t,e,n,s){const i=ii(e,t,s,!0);Sc(()=>{Mr(s[e],i)},n)}function ii(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yt();const l=ns(n),a=Fe(e,n,t,o);return l(),vt(),a});return s?i.unshift(r):i.push(r),r}}const st=t=>(e,n=me)=>(!oi||t==="sp")&&ii(t,(...s)=>e(...s),n),cd=st("bm"),Ic=st("m"),ud=st("bu"),hd=st("u"),fd=st("bum"),Sc=st("um"),dd=st("sp"),pd=st("rtg"),_d=st("rtc");function gd(t,e=me){ii("ec",t,e)}function md(t,e,n,s){let i;const r=n;if(O(t)||re(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r)}}else i=[];return i}const ir=t=>t?Bc(t)?li(t)||t.proxy:ir(t.parent):null,Pn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ir(t.parent),$root:t=>ir(t.root),$emit:t=>t.emit,$options:t=>qr(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Gr(t.update)}),$nextTick:t=>t.n||(t.n=Vf.bind(t.proxy)),$watch:t=>rd.bind(t)}),Ni=(t,e)=>t!==J&&!t.__isScriptSetup&&U(t,e),yd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ni(s,e))return o[e]=1,s[e];if(i!==J&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,r[e];if(n!==J&&U(n,e))return o[e]=4,n[e];rr&&(o[e]=0)}}const u=Pn[e];let h,d;if(u)return e==="$attrs"&&we(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==J&&U(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,U(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ni(i,e)?(i[e]=n,!0):s!==J&&U(s,e)?(s[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==J&&U(t,o)||Ni(e,o)||(l=r[0])&&U(l,o)||U(s,o)||U(Pn,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cl(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rr=!0;function vd(t){const e=qr(t),n=t.proxy,s=t.ctx;rr=!1,e.beforeCreate&&ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:I,activated:R,deactivated:H,beforeDestroy:Y,beforeUnmount:ne,destroyed:W,unmounted:se,render:Ae,renderTracked:B,renderTriggered:Ye,errorCaptured:$e,serverPrefetch:Ei,expose:Ct,inheritAttrs:Cn,components:as,directives:cs,filters:wi}=e;if(c&&bd(c,s,null),o)for(const Z in o){const q=o[Z];D(q)&&(s[Z]=q.bind(n))}if(i){const Z=i.call(n,n);ee(Z)&&(t.data=ti(Z))}if(rr=!0,r)for(const Z in r){const q=r[Z],Et=D(q)?q.bind(n,n):D(q.get)?q.get.bind(n,n):Ne,us=!D(q)&&D(q.set)?q.set.bind(n):Ne,wt=Yr({get:Et,set:us});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>wt.value,set:He=>wt.value=He})}if(l)for(const Z in l)Tc(l[Z],s,n,Z);if(a){const Z=D(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(q=>{Td(q,Z[q])})}u&&ul(u,t,"c");function _e(Z,q){O(q)?q.forEach(Et=>Z(Et.bind(n))):q&&Z(q.bind(n))}if(_e(cd,h),_e(Ic,d),_e(ud,_),_e(hd,I),_e(od,R),_e(ld,H),_e(gd,$e),_e(_d,B),_e(pd,Ye),_e(fd,ne),_e(Sc,se),_e(dd,Ei),O(Ct))if(Ct.length){const Z=t.exposed||(t.exposed={});Ct.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:Et=>n[q]=Et})})}else t.exposed||(t.exposed={});Ae&&t.render===Ne&&(t.render=Ae),Cn!=null&&(t.inheritAttrs=Cn),as&&(t.components=as),cs&&(t.directives=cs)}function bd(t,e,n=Ne){O(t)&&(t=or(t));for(const s in t){const i=t[s];let r;ee(i)?"default"in i?r=Is(i.from||s,i.default,!0):r=Is(i.from||s):r=Is(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ul(t,e,n){Fe(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tc(t,e,n,s){const i=s.includes(".")?Cc(n,s):()=>n[s];if(re(t)){const r=e[t];D(r)&&rn(i,r)}else if(D(t))rn(i,t.bind(n));else if(ee(t))if(O(t))t.forEach(r=>Tc(r,e,n,s));else{const r=D(t.handler)?t.handler.bind(n):e[t.handler];D(r)&&rn(i,r,t)}}function qr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>xs(a,c,o,!0)),xs(a,e,o)),ee(e)&&r.set(e,a),a}function xs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&xs(t,r,n,!0),i&&i.forEach(o=>xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Cd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Cd={data:hl,props:fl,emits:fl,methods:Nn,computed:Nn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Nn,directives:Nn,watch:wd,provide:hl,inject:Ed};function hl(t,e){return e?t?function(){return he(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Ed(t,e){return Nn(or(t),or(e))}function or(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?he(Object.create(null),t,e):e}function fl(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:he(Object.create(null),cl(t),cl(e??{})):e}function wd(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function Rc(){return{app:null,config:{isNativeTag:nf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Id=0;function Sd(t,e){return function(s,i=null){D(s)||(s=he({},s)),i!=null&&!ee(i)&&(i=null);const r=Rc(),o=new WeakSet;let l=!1;const a=r.app={_uid:Id++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Xd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(a,...u)):D(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Lt(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,li(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=Dn;Dn=a;try{return c()}finally{Dn=u}}};return a}}let Dn=null;function Td(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Is(t,e,n=!1){const s=me||Re;if(s||Dn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Dn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&D(e)?e.call(s&&s.proxy):e}}const Ac={},Nc=()=>Object.create(Ac),xc=t=>Object.getPrototypeOf(t)===Ac;function Rd(t,e,n,s=!1){const i={},r=Nc();t.propsDefaults=Object.create(null),Oc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Lf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ad(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(si(t.emitsOptions,d))continue;const _=e[d];if(a)if(U(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const I=cn(d);i[I]=lr(a,l,I,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Oc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!U(e,h)&&((u=_n(h))===h||!U(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=lr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!U(e,h))&&(delete r[h],c=!0)}c&&Xe(t.attrs,"set","")}function Oc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(xn(a))continue;const c=e[a];let u;i&&U(i,u=cn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:si(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||J;for(let u=0;u<r.length;u++){const h=r[u];n[h]=lr(i,a,h,c[h],t,!U(c,h))}}return o}function lr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=U(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&D(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ns(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===_n(n))&&(s=!0))}return s}function Pc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!D(t)){const u=h=>{a=!0;const[d,_]=Pc(h,e,!0);he(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,tn),tn;if(O(r))for(let u=0;u<r.length;u++){const h=cn(r[u]);dl(h)&&(o[h]=J)}else if(r)for(const u in r){const h=cn(u);if(dl(h)){const d=r[u],_=o[h]=O(d)||D(d)?{type:d}:he({},d);if(_){const I=gl(Boolean,_.type),R=gl(String,_.type);_[0]=I>-1,_[1]=R<0||I<R,(I>-1||U(_,"default"))&&l.push(h)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function dl(t){return t[0]!=="$"&&!xn(t)}function pl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function _l(t,e){return pl(t)===pl(e)}function gl(t,e){return O(e)?e.findIndex(n=>_l(n,t)):D(e)&&_l(e,t)?0:-1}const Dc=t=>t[0]==="_"||t==="$stable",Kr=t=>O(t)?t.map(qe):[qe(t)],Nd=(t,e,n)=>{if(e._n)return e;const s=Yf((...i)=>Kr(e(...i)),n);return s._c=!1,s},Mc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Dc(i))continue;const r=t[i];if(D(r))e[i]=Nd(i,r,s);else if(r!=null){const o=Kr(r);e[i]=()=>o}}},kc=(t,e)=>{const n=Kr(e);t.slots.default=()=>n},xd=(t,e)=>{const n=t.slots=Nc();if(t.vnode.shapeFlag&32){const s=e._;s?(he(n,e),Ka(n,"_",s,!0)):Mc(e,n)}else e&&kc(t,e)},Od=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=J;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(he(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Mc(e,i)),o=e}else e&&(kc(t,e),o={default:1});if(r)for(const l in i)!Dc(l)&&o[l]==null&&delete i[l]};function ar(t,e,n,s,i=!1){if(O(t)){t.forEach((d,_)=>ar(d,e&&(O(e)?e[_]:e),n,s,i));return}if(ws(s)&&!i)return;const r=s.shapeFlag&4?li(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===J?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(re(c)?(u[c]=null,U(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),D(a))ut(a,l,12,[o,u]);else{const d=re(a),_=pe(a);if(d||_){const I=()=>{if(t.f){const R=d?U(h,a)?h[a]:u[a]:a.value;i?O(R)&&Mr(R,r):O(R)?R.includes(r)||R.push(r):d?(u[a]=[r],U(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,U(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,ye(I,n)):I()}}}const ye=nd;function Pd(t){return Dd(t)}function Dd(t,e){const n=za();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ne,insertStaticContent:I}=t,R=(f,p,g,m=null,y=null,E=null,S=void 0,C=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!In(f,p)&&(m=hs(f),He(f,y,E,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:T,shapeFlag:N}=p;switch(v){case ri:H(f,p,g,m);break;case Gn:Y(f,p,g,m);break;case Oi:f==null&&ne(p,g,m,S);break;case Ge:as(f,p,g,m,y,E,S,C,w);break;default:N&1?Ae(f,p,g,m,y,E,S,C,w):N&6?cs(f,p,g,m,y,E,S,C,w):(N&64||N&128)&&v.process(f,p,g,m,y,E,S,C,w,En)}T!=null&&y&&ar(T,f&&f.ref,E,p||f,!p)},H=(f,p,g,m)=>{if(f==null)s(p.el=l(p.children),g,m);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},Y=(f,p,g,m)=>{f==null?s(p.el=a(p.children||""),g,m):p.el=f.el},ne=(f,p,g,m)=>{[f.el,f.anchor]=I(f.children,p,g,m,f.el,f.anchor)},W=({el:f,anchor:p},g,m)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,m),f=y;s(p,g,m)},se=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Ae=(f,p,g,m,y,E,S,C,w)=>{p.type==="svg"?S="svg":p.type==="math"&&(S="mathml"),f==null?B(p,g,m,y,E,S,C,w):Ei(f,p,y,E,S,C,w)},B=(f,p,g,m,y,E,S,C)=>{let w,v;const{props:T,shapeFlag:N,transition:A,dirs:P}=f;if(w=f.el=o(f.type,E,T&&T.is,T),N&8?u(w,f.children):N&16&&$e(f.children,w,null,m,y,xi(f,E),S,C),P&&It(f,null,m,"created"),Ye(w,f,f.scopeId,S,m),T){for(const j in T)j!=="value"&&!xn(j)&&r(w,j,null,T[j],E,f.children,m,y,Qe);"value"in T&&r(w,"value",null,T.value,E),(v=T.onVnodeBeforeMount)&&Ve(v,m,f)}P&&It(f,null,m,"beforeMount");const F=Md(y,A);F&&A.beforeEnter(w),s(w,p,g),((v=T&&T.onVnodeMounted)||F||P)&&ye(()=>{v&&Ve(v,m,f),F&&A.enter(w),P&&It(f,null,m,"mounted")},y)},Ye=(f,p,g,m,y)=>{if(g&&_(f,g),m)for(let E=0;E<m.length;E++)_(f,m[E]);if(y){let E=y.subTree;if(p===E){const S=y.vnode;Ye(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},$e=(f,p,g,m,y,E,S,C,w=0)=>{for(let v=w;v<f.length;v++){const T=f[v]=C?lt(f[v]):qe(f[v]);R(null,T,p,g,m,y,E,S,C)}},Ei=(f,p,g,m,y,E,S)=>{const C=p.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:T}=p;w|=f.patchFlag&16;const N=f.props||J,A=p.props||J;let P;if(g&&St(g,!1),(P=A.onVnodeBeforeUpdate)&&Ve(P,g,p,f),T&&It(p,f,g,"beforeUpdate"),g&&St(g,!0),v?Ct(f.dynamicChildren,v,C,g,m,xi(p,y),E):S||q(f,p,C,null,g,m,xi(p,y),E,!1),w>0){if(w&16)Cn(C,p,N,A,g,m,y);else if(w&2&&N.class!==A.class&&r(C,"class",null,A.class,y),w&4&&r(C,"style",N.style,A.style,y),w&8){const F=p.dynamicProps;for(let j=0;j<F.length;j++){const X=F[j],oe=N[X],Oe=A[X];(Oe!==oe||X==="value")&&r(C,X,oe,Oe,y,f.children,g,m,Qe)}}w&1&&f.children!==p.children&&u(C,p.children)}else!S&&v==null&&Cn(C,p,N,A,g,m,y);((P=A.onVnodeUpdated)||T)&&ye(()=>{P&&Ve(P,g,p,f),T&&It(p,f,g,"updated")},m)},Ct=(f,p,g,m,y,E,S)=>{for(let C=0;C<p.length;C++){const w=f[C],v=p[C],T=w.el&&(w.type===Ge||!In(w,v)||w.shapeFlag&70)?h(w.el):g;R(w,v,T,null,m,y,E,S,!0)}},Cn=(f,p,g,m,y,E,S)=>{if(g!==m){if(g!==J)for(const C in g)!xn(C)&&!(C in m)&&r(f,C,g[C],null,S,p.children,y,E,Qe);for(const C in m){if(xn(C))continue;const w=m[C],v=g[C];w!==v&&C!=="value"&&r(f,C,v,w,S,p.children,y,E,Qe)}"value"in m&&r(f,"value",g.value,m.value,S)}},as=(f,p,g,m,y,E,S,C,w)=>{const v=p.el=f?f.el:l(""),T=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:P}=p;P&&(C=C?C.concat(P):P),f==null?(s(v,g,m),s(T,g,m),$e(p.children||[],g,T,y,E,S,C,w)):N>0&&N&64&&A&&f.dynamicChildren?(Ct(f.dynamicChildren,A,g,y,E,S,C),(p.key!=null||y&&p===y.subTree)&&Lc(f,p,!0)):q(f,p,g,T,y,E,S,C,w)},cs=(f,p,g,m,y,E,S,C,w)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?y.ctx.activate(p,g,m,S,w):wi(p,g,m,y,E,S,w):Vo(f,p,w)},wi=(f,p,g,m,y,E,S)=>{const C=f.component=qd(f,m,y);if(Ec(f)&&(C.ctx.renderer=En),Kd(C),C.asyncDep){if(y&&y.registerDep(C,_e),!f.el){const w=C.subTree=Lt(Gn);Y(null,w,p,g)}}else _e(C,f,p,g,y,E,S)},Vo=(f,p,g)=>{const m=p.component=f.component;if(Xf(f,p,g))if(m.asyncDep&&!m.asyncResolved){Z(m,p,g);return}else m.next=p,Gf(m.update),m.effect.dirty=!0,m.update();else p.el=f.el,m.vnode=p},_e=(f,p,g,m,y,E,S)=>{const C=()=>{if(f.isMounted){let{next:T,bu:N,u:A,parent:P,vnode:F}=f;{const Yt=Fc(f);if(Yt){T&&(T.el=F.el,Z(f,T,S)),Yt.asyncDep.then(()=>{f.isUnmounted||C()});return}}let j=T,X;St(f,!1),T?(T.el=F.el,Z(f,T,S)):T=F,N&&bs(N),(X=T.props&&T.props.onVnodeBeforeUpdate)&&Ve(X,P,T,F),St(f,!0);const oe=Ai(f),Oe=f.subTree;f.subTree=oe,R(Oe,oe,h(Oe.el),hs(Oe),f,y,E),T.el=oe.el,j===null&&Zf(f,oe.el),A&&ye(A,y),(X=T.props&&T.props.onVnodeUpdated)&&ye(()=>Ve(X,P,T,F),y)}else{let T;const{el:N,props:A}=p,{bm:P,m:F,parent:j}=f,X=ws(p);if(St(f,!1),P&&bs(P),!X&&(T=A&&A.onVnodeBeforeMount)&&Ve(T,j,p),St(f,!0),N&&Ko){const oe=()=>{f.subTree=Ai(f),Ko(N,f.subTree,f,y,null)};X?p.type.__asyncLoader().then(()=>!f.isUnmounted&&oe()):oe()}else{const oe=f.subTree=Ai(f);R(null,oe,g,m,f,y,E),p.el=oe.el}if(F&&ye(F,y),!X&&(T=A&&A.onVnodeMounted)){const oe=p;ye(()=>Ve(T,j,oe),y)}(p.shapeFlag&256||j&&ws(j.vnode)&&j.vnode.shapeFlag&256)&&f.a&&ye(f.a,y),f.isMounted=!0,p=g=m=null}},w=f.effect=new Fr(C,Ne,()=>Gr(v),f.scope),v=f.update=()=>{w.dirty&&w.run()};v.id=f.uid,St(f,!0),v()},Z=(f,p,g)=>{p.component=f;const m=f.vnode.props;f.vnode=p,f.next=null,Ad(f,p.props,m,g),Od(f,p.children,g),yt(),ol(f),vt()},q=(f,p,g,m,y,E,S,C,w=!1)=>{const v=f&&f.children,T=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:P}=p;if(A>0){if(A&128){us(v,N,g,m,y,E,S,C,w);return}else if(A&256){Et(v,N,g,m,y,E,S,C,w);return}}P&8?(T&16&&Qe(v,y,E),N!==v&&u(g,N)):T&16?P&16?us(v,N,g,m,y,E,S,C,w):Qe(v,y,E,!0):(T&8&&u(g,""),P&16&&$e(N,g,m,y,E,S,C,w))},Et=(f,p,g,m,y,E,S,C,w)=>{f=f||tn,p=p||tn;const v=f.length,T=p.length,N=Math.min(v,T);let A;for(A=0;A<N;A++){const P=p[A]=w?lt(p[A]):qe(p[A]);R(f[A],P,g,null,y,E,S,C,w)}v>T?Qe(f,y,E,!0,!1,N):$e(p,g,m,y,E,S,C,w,N)},us=(f,p,g,m,y,E,S,C,w)=>{let v=0;const T=p.length;let N=f.length-1,A=T-1;for(;v<=N&&v<=A;){const P=f[v],F=p[v]=w?lt(p[v]):qe(p[v]);if(In(P,F))R(P,F,g,null,y,E,S,C,w);else break;v++}for(;v<=N&&v<=A;){const P=f[N],F=p[A]=w?lt(p[A]):qe(p[A]);if(In(P,F))R(P,F,g,null,y,E,S,C,w);else break;N--,A--}if(v>N){if(v<=A){const P=A+1,F=P<T?p[P].el:m;for(;v<=A;)R(null,p[v]=w?lt(p[v]):qe(p[v]),g,F,y,E,S,C,w),v++}}else if(v>A)for(;v<=N;)He(f[v],y,E,!0),v++;else{const P=v,F=v,j=new Map;for(v=F;v<=A;v++){const Te=p[v]=w?lt(p[v]):qe(p[v]);Te.key!=null&&j.set(Te.key,v)}let X,oe=0;const Oe=A-F+1;let Yt=!1,zo=0;const wn=new Array(Oe);for(v=0;v<Oe;v++)wn[v]=0;for(v=P;v<=N;v++){const Te=f[v];if(oe>=Oe){He(Te,y,E,!0);continue}let We;if(Te.key!=null)We=j.get(Te.key);else for(X=F;X<=A;X++)if(wn[X-F]===0&&In(Te,p[X])){We=X;break}We===void 0?He(Te,y,E,!0):(wn[We-F]=v+1,We>=zo?zo=We:Yt=!0,R(Te,p[We],g,null,y,E,S,C,w),oe++)}const Yo=Yt?kd(wn):tn;for(X=Yo.length-1,v=Oe-1;v>=0;v--){const Te=F+v,We=p[Te],Qo=Te+1<T?p[Te+1].el:m;wn[v]===0?R(null,We,g,Qo,y,E,S,C,w):Yt&&(X<0||v!==Yo[X]?wt(We,g,Qo,2):X--)}}},wt=(f,p,g,m,y=null)=>{const{el:E,type:S,transition:C,children:w,shapeFlag:v}=f;if(v&6){wt(f.component.subTree,p,g,m);return}if(v&128){f.suspense.move(p,g,m);return}if(v&64){S.move(f,p,g,En);return}if(S===Ge){s(E,p,g);for(let N=0;N<w.length;N++)wt(w[N],p,g,m);s(f.anchor,p,g);return}if(S===Oi){W(f,p,g);return}if(m!==2&&v&1&&C)if(m===0)C.beforeEnter(E),s(E,p,g),ye(()=>C.enter(E),y);else{const{leave:N,delayLeave:A,afterLeave:P}=C,F=()=>s(E,p,g),j=()=>{N(E,()=>{F(),P&&P()})};A?A(E,F,j):j()}else s(E,p,g)},He=(f,p,g,m=!1,y=!1)=>{const{type:E,props:S,ref:C,children:w,dynamicChildren:v,shapeFlag:T,patchFlag:N,dirs:A}=f;if(C!=null&&ar(C,null,g,f,!0),T&256){p.ctx.deactivate(f);return}const P=T&1&&A,F=!ws(f);let j;if(F&&(j=S&&S.onVnodeBeforeUnmount)&&Ve(j,p,f),T&6)tf(f.component,g,m);else{if(T&128){f.suspense.unmount(g,m);return}P&&It(f,null,p,"beforeUnmount"),T&64?f.type.remove(f,p,g,y,En,m):v&&(E!==Ge||N>0&&N&64)?Qe(v,p,g,!1,!0):(E===Ge&&N&384||!y&&T&16)&&Qe(w,p,g),m&&jo(f)}(F&&(j=S&&S.onVnodeUnmounted)||P)&&ye(()=>{j&&Ve(j,p,f),P&&It(f,null,p,"unmounted")},g)},jo=f=>{const{type:p,el:g,anchor:m,transition:y}=f;if(p===Ge){ef(g,m);return}if(p===Oi){se(f);return}const E=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:C}=y,w=()=>S(g,E);C?C(f.el,E,w):w()}else E()},ef=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},tf=(f,p,g)=>{const{bum:m,scope:y,update:E,subTree:S,um:C}=f;m&&bs(m),y.stop(),E&&(E.active=!1,He(S,f,p,g)),C&&ye(C,p),ye(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,g,m=!1,y=!1,E=0)=>{for(let S=E;S<f.length;S++)He(f[S],p,g,m,y)},hs=f=>f.shapeFlag&6?hs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let Ii=!1;const Go=(f,p,g)=>{f==null?p._vnode&&He(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),Ii||(Ii=!0,ol(),gc(),Ii=!1),p._vnode=f},En={p:R,um:He,m:wt,r:jo,mt:wi,mc:$e,pc:q,pbc:Ct,n:hs,o:t};let qo,Ko;return{render:Go,hydrate:qo,createApp:Sd(Go,qo)}}function xi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Md(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lc(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=lt(i[r]),l.el=o.el),n||Lc(o,l)),l.type===ri&&(l.el=o.el)}}function kd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Fc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fc(e)}const Ld=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),ri=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Oi=Symbol.for("v-stc"),Mn=[];let Me=null;function Pi(t=!1){Mn.push(Me=t?null:[])}function Fd(){Mn.pop(),Me=Mn[Mn.length-1]||null}let qn=1;function ml(t){qn+=t}function Ud(t){return t.dynamicChildren=qn>0?Me||tn:null,Fd(),qn>0&&Me&&Me.push(t),t}function Di(t,e,n,s,i,r){return Ud(je(t,e,n,s,i,r,!0))}function Bd(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const Uc=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||pe(t)||D(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uc(e),ref:e&&Ss(e),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),qn>0&&!o&&Me&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Me.push(a),a}const Lt=$d;function $d(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ed)&&(t=Gn),Bd(t)){const l=un(t,e,!0);return n&&zr(l,n),qn>0&&!r&&Me&&(l.shapeFlag&6?Me[Me.indexOf(t)]=l:Me.push(l)),l.patchFlag|=-2,l}if(Jd(t)&&(t=t.__vccOpts),e){e=Hd(e);let{class:l,style:a}=e;l&&!re(l)&&(e.class=Zs(l)),ee(a)&&(uc(a)&&!O(a)&&(a=he({},a)),e.style=Lr(a))}const o=re(t)?1:td(t)?128:Ld(t)?64:ee(t)?4:D(t)?2:0;return je(t,e,n,s,i,o,r,!0)}function Hd(t){return t?uc(t)||xc(t)?he({},t):t:null}function un(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Vd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Uc(c),ref:e&&e.ref?n&&r?O(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&(u.transition=a.clone(u)),u}function Wd(t=" ",e=0){return Lt(ri,null,t,e)}function qe(t){return t==null||typeof t=="boolean"?Lt(Gn):O(t)?Lt(Ge,null,t.slice()):typeof t=="object"?lt(t):Lt(ri,null,String(t))}function lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function zr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!xc(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[Wd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Zs([e.class,s.class]));else if(i==="style")e.style=Lr([e.style,s.style]);else if(Qs(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ve(t,e,n,s=null){Fe(t,e,7,[n,s])}const jd=Rc();let Gd=0;function qd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||jd,r={uid:Gd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ja(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(s,i),emitsOptions:yc(s,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zf.bind(null,r),t.ce&&t.ce(r),r}let me=null,Os,cr;{const t=za(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Os=e("__VUE_INSTANCE_SETTERS__",n=>me=n),cr=e("__VUE_SSR_SETTERS__",n=>oi=n)}const ns=t=>{const e=me;return Os(t),t.scope.on(),()=>{t.scope.off(),Os(e)}},yl=()=>{me&&me.scope.off(),Os(null)};function Bc(t){return t.vnode.shapeFlag&4}let oi=!1;function Kd(t,e=!1){e&&cr(e);const{props:n,children:s}=t.vnode,i=Bc(t);Rd(t,n,i,e),xd(t,s);const r=i?zd(t,e):void 0;return e&&cr(!1),r}function zd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yd);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Qd(t):null,r=ns(t);yt();const o=ut(s,t,0,[t.props,i]);if(vt(),r(),Va(o)){if(o.then(yl,yl),e)return o.then(l=>{vl(t,l,e)}).catch(l=>{ni(l,t,0)});t.asyncDep=o}else vl(t,o,e)}else $c(t,e)}function vl(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=dc(e)),$c(t,n)}let bl;function $c(t,e,n){const s=t.type;if(!t.render){if(!e&&bl&&!s.render){const i=s.template||qr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=he(he({isCustomElement:r,delimiters:l},o),a);s.render=bl(i,c)}}t.render=s.render||Ne}{const i=ns(t);yt();try{vd(t)}finally{vt(),i()}}}const Yd={get(t,e){return we(t,"get",""),t[e]}};function Qd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yd),slots:t.slots,emit:t.emit,expose:e}}function li(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(Ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pn)return Pn[n](t)},has(e,n){return n in e||n in Pn}}))}function Jd(t){return D(t)&&"__vccOpts"in t}const Yr=(t,e)=>Uf(t,e,oi),Xd="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zd="http://www.w3.org/2000/svg",ep="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,Cl=at&&at.createElement("template"),tp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?at.createElementNS(Zd,t):e==="mathml"?at.createElementNS(ep,t):at.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Cl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Cl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},np=Symbol("_vtc");function sp(t,e,n){const s=t[np];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const El=Symbol("_vod"),ip=Symbol("_vsh"),rp=Symbol(""),op=/(^|;)\s*display\s*:/;function lp(t,e,n){const s=t.style,i=re(n);let r=!1;if(n&&!i){if(e)if(re(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ts(s,l,"")}else for(const o in e)n[o]==null&&Ts(s,o,"");for(const o in n)o==="display"&&(r=!0),Ts(s,o,n[o])}else if(i){if(e!==n){const o=s[rp];o&&(n+=";"+o),s.cssText=n,r=op.test(n)}}else e&&t.removeAttribute("style");El in t&&(t[El]=r?s.display:"",t[ip]&&(s.display="none"))}const wl=/\s*!important$/;function Ts(t,e,n){if(O(n))n.forEach(s=>Ts(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ap(t,e);wl.test(n)?t.setProperty(_n(s),n.replace(wl,""),"important"):t[s]=n}}const Il=["Webkit","Moz","ms"],Mi={};function ap(t,e){const n=Mi[e];if(n)return n;let s=cn(e);if(s!=="filter"&&s in t)return Mi[e]=s;s=qa(s);for(let i=0;i<Il.length;i++){const r=Il[i]+s;if(r in t)return Mi[e]=r}return e}const Sl="http://www.w3.org/1999/xlink";function cp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sl,e.slice(6,e.length)):t.setAttributeNS(Sl,e,n);else{const r=df(e);n==null||r&&!Ya(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function up(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ya(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zt(t,e,n,s){t.addEventListener(e,n,s)}function hp(t,e,n,s){t.removeEventListener(e,n,s)}const Tl=Symbol("_vei");function fp(t,e,n,s,i=null){const r=t[Tl]||(t[Tl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=dp(e);if(s){const c=r[e]=gp(s,i);Zt(t,l,c,a)}else o&&(hp(t,l,o,a),r[e]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function dp(t){let e;if(Rl.test(t)){e={};let s;for(;s=t.match(Rl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let ki=0;const pp=Promise.resolve(),_p=()=>ki||(pp.then(()=>ki=0),ki=Date.now());function gp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fe(mp(s,n.value),e,5,[s])};return n.value=t,n.attached=_p(),n}function mp(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yp=(t,e,n,s,i,r,o,l,a)=>{const c=i==="svg";e==="class"?sp(t,s,c):e==="style"?lp(t,n,s):Qs(e)?Dr(e)||fp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vp(t,e,s,c))?up(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cp(t,e,s,c))};function vp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Al(e)&&D(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Al(e)&&re(n)?!1:e in t}const Nl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>bs(e,n):e};function bp(t){t.target.composing=!0}function xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Li=Symbol("_assign"),Ol={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Li]=Nl(i);const r=s||i.props&&i.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Xi(l)),t[Li](l)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",bp),Zt(t,"compositionend",xl),Zt(t,"change",xl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Li]=Nl(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xi(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},Cp=he({patchProp:yp},tp);let Pl;function Ep(){return Pl||(Pl=Pd(Cp))}const wp=(...t)=>{const e=Ep().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Sp(s);if(!i)return;const r=e._component;!D(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Ip(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ip(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sp(t){return re(t)?document.querySelector(t):t}function Tp(){return Hc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Hc(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Rp=typeof Proxy=="function",Ap="devtools-plugin:setup",Np="plugin:settings:set";let Qt,ur;function xp(){var t;return Qt!==void 0||(typeof window<"u"&&window.performance?(Qt=!0,ur=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Qt=!0,ur=globalThis.perf_hooks.performance):Qt=!1),Qt}function Op(){return xp()?ur.now():Date.now()}class Pp{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const l=e.settings[o];s[o]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),l=JSON.parse(o);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Op()}},n&&n.on(Np,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Dp(t,e){const n=t,s=Hc(),i=Tp(),r=Rp&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Ap,t,e);else{const o=r?new Pp(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Mp="store";function gn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function kp(t){return t!==null&&typeof t=="object"}function Lp(t){return t&&typeof t.then=="function"}function Fp(t,e){return function(){return t(e)}}function Wc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Vc(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ai(t,n,[],t._modules.root,!0),Qr(t,n,e)}function Qr(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},l={},a=pf(!0);a.run(function(){gn(r,function(c,u){o[u]=Fp(c,t),l[u]=Yr(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return l[u].value},enumerable:!0})})}),t._state=ti({data:e}),t._scope=a,t.strict&&Wp(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function ai(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var l=Jr(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit(function(){l[a]=s.state})}var c=s.context=Up(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Bp(t,d,u,c)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;$p(t,d,_,c)}),s.forEachGetter(function(u,h){var d=o+h;Hp(t,d,u,c)}),s.forEachChild(function(u,h){ai(t,e,n.concat(h),u,i)})}function Up(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,l){var a=Ps(r,o,l),c=a.payload,u=a.options,h=a.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,l){var a=Ps(r,o,l),c=a.payload,u=a.options,h=a.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return jc(t,e)}},state:{get:function(){return Jr(t.state,n)}}}),i}function jc(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Bp(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function $p(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var l=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Lp(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(a){throw t._devtoolHook.emit("vuex:error",a),a}):l})}function Hp(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Wp(t){rn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Jr(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ps(t,e,n){return kp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Vp="vuex bindings",Dl="vuex:mutations",Fi="vuex:actions",Jt="vuex",jp=0;function Gp(t,e){Dp({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Vp]},function(n){n.addTimelineLayer({id:Dl,label:"Vuex Mutations",color:Ml}),n.addTimelineLayer({id:Fi,label:"Vuex Actions",color:Ml}),n.addInspector({id:Jt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Jt)if(s.filter){var i=[];zc(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Kc(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Jt){var i=s.nodeId;jc(e,i),s.state=zp(Qp(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Jt){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Jt),n.sendInspectorState(Jt),n.addTimelineEvent({layerId:Dl,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=jp++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Fi,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Fi,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Ml=8702998,qp=6710886,Kp=16777215,Gc={label:"namespaced",textColor:Kp,backgroundColor:qp};function qc(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Kc(t,e){return{id:e||"root",label:qc(e),tags:t.namespaced?[Gc]:[],children:Object.keys(t._children).map(function(n){return Kc(t._children[n],e+n+"/")})}}function zc(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Gc]:[]}),Object.keys(e._children).forEach(function(i){zc(t,e._children[i],n,s+i+"/")})}function zp(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=Yp(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?qc(o):o,editable:!1,value:hr(function(){return r[o]})}})}return i}function Yp(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=hr(function(){return t[n]})}else e[n]=hr(function(){return t[n]})}),e}function Qp(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function hr(t){try{return t()}catch(e){return e}}var Be=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Yc={namespaced:{configurable:!0}};Yc.namespaced.get=function(){return!!this._rawModule.namespaced};Be.prototype.addChild=function(e,n){this._children[e]=n};Be.prototype.removeChild=function(e){delete this._children[e]};Be.prototype.getChild=function(e){return this._children[e]};Be.prototype.hasChild=function(e){return e in this._children};Be.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Be.prototype.forEachChild=function(e){gn(this._children,e)};Be.prototype.forEachGetter=function(e){this._rawModule.getters&&gn(this._rawModule.getters,e)};Be.prototype.forEachAction=function(e){this._rawModule.actions&&gn(this._rawModule.actions,e)};Be.prototype.forEachMutation=function(e){this._rawModule.mutations&&gn(this._rawModule.mutations,e)};Object.defineProperties(Be.prototype,Yc);var Gt=function(e){this.register([],e,!1)};Gt.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Gt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Gt.prototype.update=function(e){Qc([],this.root,e)};Gt.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new Be(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&gn(n.modules,function(l,a){i.register(e.concat(a),l,s)})};Gt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Gt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Qc(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Qc(t.concat(s),e.getChild(s),n.modules[s])}}function Jp(t){return new Se(t)}var Se=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Gt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,l=this,a=l.dispatch,c=l.commit;this.dispatch=function(d,_){return a.call(o,d,_)},this.commit=function(d,_,I){return c.call(o,d,_,I)},this.strict=i;var u=this._modules.root.state;ai(this,u,[],this._modules.root),Qr(this,u),s.forEach(function(h){return h(n)})},Xr={state:{configurable:!0}};Se.prototype.install=function(e,n){e.provide(n||Mp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Gp(e,this)};Xr.state.get=function(){return this._state.data};Xr.state.set=function(t){};Se.prototype.commit=function(e,n,s){var i=this,r=Ps(e,n,s),o=r.type,l=r.payload,a={type:o,payload:l},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(l)})}),this._subscribers.slice().forEach(function(u){return u(a,i.state)}))};Se.prototype.dispatch=function(e,n){var s=this,i=Ps(e,n),r=i.type,o=i.payload,l={type:r,payload:o},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(l,s.state)})}catch{}var c=a.length>1?Promise.all(a.map(function(u){return u(o)})):a[0](o);return new Promise(function(u,h){c.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(l,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(l,s.state,d)})}catch{}h(d)})})}};Se.prototype.subscribe=function(e,n){return Wc(e,this._subscribers,n)};Se.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Wc(s,this._actionSubscribers,n)};Se.prototype.watch=function(e,n,s){var i=this;return rn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Se.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Se.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ai(this,this.state,e,this._modules.get(e),s.preserveState),Qr(this,this.state)};Se.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Jr(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Vc(this)};Se.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Se.prototype.hotUpdate=function(e){this._modules.update(e),Vc(this,!0)};Se.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Se.prototype,Xr);var kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw mn(e)},mn=function(t){return new Error("Firebase Database ("+Jc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Zp;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zc=function(t){const e=Xc(t);return Zr.encodeByteArray(e,!0)},Ds=function(t){return Zc(t).replace(/\./g,"")},fr=function(t){try{return Zr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){return eu(void 0,t)}function eu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!t_(n)||(t[n]=eu(t[n],e[n]));return t}function t_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=()=>n_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof kl>"u")return;const t=kl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fr(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return s_()||i_()||r_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},o_=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l_=t=>{const e=o_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nu=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ds(JSON.stringify(n)),Ds(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c_())}function u_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iu(){return Jc.NODE_ADMIN===!0}function ru(){try{return typeof indexedDB=="object"}catch{return!1}}function ou(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function f_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="FirebaseError";class qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=d_,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?p_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qt(i,l,s)}}function p_(t,e){return t.replace(__,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const __=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Kn(fr(r[0])||""),n=Kn(fr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},g_=function(t){const e=lu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m_=function(t){const e=lu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ll(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ms(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fl(r)&&Fl(o)){if(!dr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function eo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1e3,E_=2,w_=4*60*60*1e3,I_=.5;function Ul(t,e=C_,n=E_){const s=e*Math.pow(n,t),i=Math.round(I_*s*(Math.random()-.5)*2);return Math.min(w_,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ci;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R_(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(t){return t===Rt?void 0:t}function R_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new S_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const N_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},x_=K.INFO,O_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},P_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=O_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class to{constructor(e){this.name=e,this._logLevel=x_,this._logHandler=P_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const D_=(t,e)=>e.some(n=>t instanceof n);let Bl,$l;function M_(){return Bl||(Bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k_(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,pr=new WeakMap,cu=new WeakMap,Ui=new WeakMap,no=new WeakMap;function L_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ht(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&au.set(n,t)}).catch(()=>{}),no.set(e,t),e}function F_(t){if(pr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});pr.set(t,e)}let _r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U_(t){_r=t(_r)}function B_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bi(this),e,...n);return cu.set(s,e.sort?e.sort():[e]),ht(s)}:k_().includes(t)?function(...e){return t.apply(Bi(this),e),ht(au.get(this))}:function(...e){return ht(t.apply(Bi(this),e))}}function $_(t){return typeof t=="function"?B_(t):(t instanceof IDBTransaction&&F_(t),D_(t,M_())?new Proxy(t,_r):t)}function ht(t){if(t instanceof IDBRequest)return L_(t);if(Ui.has(t))return Ui.get(t);const e=$_(t);return e!==t&&(Ui.set(t,e),no.set(e,t)),e}const Bi=t=>no.get(t);function uu(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ht(o);return s&&o.addEventListener("upgradeneeded",a=>{s(ht(o.result),a.oldVersion,a.newVersion,ht(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const H_=["get","getKey","getAll","getAllKeys","count"],W_=["put","add","delete","clear"],$i=new Map;function Hl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=W_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||H_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return $i.set(e,r),r}U_(t=>({...t,get:(e,n,s)=>Hl(e,n)||t.get(e,n,s),has:(e,n)=>!!Hl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gr="@firebase/app",Wl="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new to("@firebase/app"),G_="@firebase/app-compat",q_="@firebase/analytics-compat",K_="@firebase/analytics",z_="@firebase/app-check-compat",Y_="@firebase/app-check",Q_="@firebase/auth",J_="@firebase/auth-compat",X_="@firebase/database",Z_="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",sg="@firebase/installations-compat",ig="@firebase/messaging",rg="@firebase/messaging-compat",og="@firebase/performance",lg="@firebase/performance-compat",ag="@firebase/remote-config",cg="@firebase/remote-config-compat",ug="@firebase/storage",hg="@firebase/storage-compat",fg="@firebase/firestore",dg="@firebase/firestore-compat",pg="firebase",_g="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]",gg={[gr]:"fire-core",[G_]:"fire-core-compat",[K_]:"fire-analytics",[q_]:"fire-analytics-compat",[Y_]:"fire-app-check",[z_]:"fire-app-check-compat",[Q_]:"fire-auth",[J_]:"fire-auth-compat",[X_]:"fire-rtdb",[Z_]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[sg]:"fire-iid-compat",[ig]:"fire-fcm",[rg]:"fire-fcm-compat",[og]:"fire-perf",[lg]:"fire-perf-compat",[ag]:"fire-rc",[cg]:"fire-rc-compat",[ug]:"fire-gcs",[hg]:"fire-gcs-compat",[fg]:"fire-fst",[dg]:"fire-fst-compat","fire-js":"fire-js",[pg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map,mg=new Map,yr=new Map;function Vl(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(yr.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,t);for(const n of ks.values())Vl(n,t);for(const n of mg.values())Vl(n,t);return!0}function so(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ft=new ui("app","Firebase",yg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=_g;function hu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ft.create("bad-app-name",{appName:String(i)});if(n||(n=nu()),!n)throw ft.create("no-options");const r=ks.get(i);if(r){if(dr(n,r.options)&&dr(s,r.config))return r;throw ft.create("duplicate-app",{appName:i})}const o=new A_(i);for(const a of yr.values())o.addComponent(a);const l=new vg(n,s,o);return ks.set(i,l),l}function Cg(t=mr){const e=ks.get(t);if(!e&&t===mr&&nu())return hu();if(!e)throw ft.create("no-app",{appName:t});return e}function ze(t,e,n){var s;let i=(s=gg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}_t(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firebase-heartbeat-database",wg=1,zn="firebase-heartbeat-store";let Hi=null;function fu(){return Hi||(Hi=uu(Eg,wg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})})),Hi}async function Ig(t){try{const n=(await fu()).transaction(zn),s=await n.objectStore(zn).get(du(t));return await n.done,s}catch(e){if(e instanceof qt)Ft.warn(e.message);else{const n=ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function jl(t,e){try{const s=(await fu()).transaction(zn,"readwrite");await s.objectStore(zn).put(e,du(t)),await s.done}catch(n){if(n instanceof qt)Ft.warn(n.message);else{const s=ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(s.message)}}}function du(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=1024,Tg=30*24*60*60*1e3;class Rg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ng(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Tg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:s,unsentEntries:i}=Ag(this._heartbeatsCache.heartbeats),r=Ds(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gl(){return new Date().toISOString().substring(0,10)}function Ag(t,e=Sg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ql(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ru()?ou().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ig(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ql(t){return Ds(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){_t(new et("platform-logger",e=>new V_(e),"PRIVATE")),_t(new et("heartbeat",e=>new Rg(e),"PRIVATE")),ze(gr,Wl,t),ze(gr,Wl,"esm2017"),ze("fire-js","")}xg("");var Og="firebase",Pg="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Og,Pg,"app");const pu="@firebase/installations",io="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=1e4,gu=`w:${io}`,mu="FIS_v2",Dg="https://firebaseinstallations.googleapis.com/v1",Mg=60*60*1e3,kg="installations",Lg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ut=new ui(kg,Lg,Fg);function yu(t){return t instanceof qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu({projectId:t}){return`${Dg}/projects/${t}/installations`}function bu(t){return{token:t.token,requestStatus:2,expiresIn:Bg(t.expiresIn),creationTime:Date.now()}}async function Cu(t,e){const s=(await e.json()).error;return Ut.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Eu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ug(t,{refreshToken:e}){const n=Eu(t);return n.append("Authorization",$g(e)),n}async function wu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bg(t){return Number(t.replace("s","000"))}function $g(t){return`${mu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=vu(t),i=Eu(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:mu,appId:t.appId,sdkVersion:gu},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await wu(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:bu(c.authToken)}}else throw await Cu("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=/^[cdef][\w-]{21}$/,vr="";function jg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gg(t);return Vg.test(n)?n:vr}catch{return vr}}function Gg(t){return Wg(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Tu(t,e){const n=fi(t);Ru(n,e),qg(n,e)}function Ru(t,e){const n=Su.get(t);if(n)for(const s of n)s(e)}function qg(t,e){const n=Kg();n&&n.postMessage({key:t,fid:e}),zg()}let Ot=null;function Kg(){return!Ot&&"BroadcastChannel"in self&&(Ot=new BroadcastChannel("[Firebase] FID Change"),Ot.onmessage=t=>{Ru(t.data.key,t.data.fid)}),Ot}function zg(){Su.size===0&&Ot&&(Ot.close(),Ot=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="firebase-installations-database",Qg=1,Bt="firebase-installations-store";let Wi=null;function ro(){return Wi||(Wi=uu(Yg,Qg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bt)}}})),Wi}async function Ls(t,e){const n=fi(t),i=(await ro()).transaction(Bt,"readwrite"),r=i.objectStore(Bt),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Tu(t,e.fid),e}async function Au(t){const e=fi(t),s=(await ro()).transaction(Bt,"readwrite");await s.objectStore(Bt).delete(e),await s.done}async function di(t,e){const n=fi(t),i=(await ro()).transaction(Bt,"readwrite"),r=i.objectStore(Bt),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Tu(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){let e;const n=await di(t.appConfig,s=>{const i=Jg(s),r=Xg(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===vr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jg(t){const e=t||{fid:jg(),registrationStatus:0};return Nu(e)}function Xg(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Zg(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:em(t)}:{installationEntry:e}}async function Zg(t,e){try{const n=await Hg(t,e);return Ls(t.appConfig,n)}catch(n){throw yu(n)&&n.customData.serverCode===409?await Au(t.appConfig):await Ls(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function em(t){let e=await Kl(t.appConfig);for(;e.registrationStatus===1;)await Iu(100),e=await Kl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await oo(t);return s||n}return e}function Kl(t){return di(t,e=>{if(!e)throw Ut.create("installation-not-found");return Nu(e)})}function Nu(t){return tm(t)?{fid:t.fid,registrationStatus:0}:t}function tm(t){return t.registrationStatus===1&&t.registrationTime+_u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm({appConfig:t,heartbeatServiceProvider:e},n){const s=sm(t,n),i=Ug(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:gu,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await wu(()=>fetch(s,l));if(a.ok){const c=await a.json();return bu(c)}else throw await Cu("Generate Auth Token",a)}function sm(t,{fid:e}){return`${vu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e=!1){let n;const s=await di(t.appConfig,r=>{if(!xu(r))throw Ut.create("not-registered");const o=r.authToken;if(!e&&om(o))return r;if(o.requestStatus===1)return n=im(t,e),r;{if(!navigator.onLine)throw Ut.create("app-offline");const l=am(r);return n=rm(t,l),l}});return n?await n:s.authToken}async function im(t,e){let n=await zl(t.appConfig);for(;n.authToken.requestStatus===1;)await Iu(100),n=await zl(t.appConfig);const s=n.authToken;return s.requestStatus===0?lo(t,e):s}function zl(t){return di(t,e=>{if(!xu(e))throw Ut.create("not-registered");const n=e.authToken;return cm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rm(t,e){try{const n=await nm(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ls(t.appConfig,s),n}catch(n){if(yu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Au(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ls(t.appConfig,s)}throw n}}function xu(t){return t!==void 0&&t.registrationStatus===2}function om(t){return t.requestStatus===2&&!lm(t)}function lm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mg}function am(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cm(t){return t.requestStatus===1&&t.requestTime+_u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t){const e=t,{installationEntry:n,registrationPromise:s}=await oo(e);return s?s.catch(console.error):lo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t,e=!1){const n=t;return await fm(n),(await lo(n,e)).token}async function fm(t){const{registrationPromise:e}=await oo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){if(!t||!t.options)throw Vi("App Configuration");if(!t.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vi(t){return Ut.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="installations",pm="installations-internal",_m=t=>{const e=t.getProvider("app").getImmediate(),n=dm(e),s=so(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gm=t=>{const e=t.getProvider("app").getImmediate(),n=so(e,Ou).getImmediate();return{getId:()=>um(n),getToken:i=>hm(n,i)}};function mm(){_t(new et(Ou,_m,"PUBLIC")),_t(new et(pm,gm,"PRIVATE"))}mm();ze(pu,io);ze(pu,io,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="analytics",ym="firebase_id",vm="origin",bm=60*1e3,Cm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ao="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new to("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xe=new ui("analytics","Analytics",Em);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){if(!t.startsWith(ao)){const e=xe.create("invalid-gtag-resource",{gtagURL:t});return Ce.warn(e.message),""}return t}function Pu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Im(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Sm(t,e){const n=Im("firebase-js-sdk-policy",{createScriptURL:wm}),s=document.createElement("script"),i=`${ao}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Tm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rm(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Pu(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Ce.error(l)}t("config",i,r)}async function Am(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Pu(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ce.error(r)}}function Nm(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await Am(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await Rm(t,e,n,s,l,a)}else if(r==="consent"){const[l]=o;t("consent","update",l)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Ce.error(l)}}return i}function xm(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Nm(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Om(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ao)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=30,Dm=1e3;class Mm{constructor(e={},n=Dm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Du=new Mm;function km(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Lm(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:km(s)},r=Cm.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Fm(t,e=Du,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw xe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw xe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $m;return setTimeout(async()=>{l.abort()},bm),Mu({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Mu(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Du){var r;const{appId:o,measurementId:l}=t;try{await Um(s,e)}catch(a){if(l)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Lm(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!Bm(c)){if(i.deleteThrottleMetadata(o),l)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ul(n,i.intervalMillis,Pm):Ul(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ce.debug(`Calling attemptFetch again in ${u} millis`),Mu(t,h,s,i)}}function Um(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bm(t){if(!(t instanceof qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $m{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hm(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(){if(ru())try{await ou()}catch(t){return Ce.warn(xe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ce.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vm(t,e,n,s,i,r,o){var l;const a=Fm(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ce.error(_)),e.push(a);const c=Wm().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);Om(r)||Sm(r,u.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[vm]="firebase",d.update=!0,h!=null&&(d[ym]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.app=e}_delete(){return delete kn[this.app.options.appId],Promise.resolve()}}let kn={},Ql=[];const Jl={};let ji="dataLayer",Gm="gtag",Xl,ku,Zl=!1;function qm(){const t=[];if(u_()&&t.push("This is a browser extension environment."),f_()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:e});Ce.warn(n.message)}}function Km(t,e,n){qm();const s=t.options.appId;if(!s)throw xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(kn[s]!=null)throw xe.create("already-exists",{id:s});if(!Zl){Tm(ji);const{wrappedGtag:r,gtagCore:o}=xm(kn,Ql,Jl,ji,Gm);ku=r,Xl=o,Zl=!0}return kn[s]=Vm(t,Ql,Jl,e,Xl,ji,n),new jm(t)}function zm(t,e,n,s){t=Kt(t),Hm(ku,kn[t.app.options.appId],e,n,s).catch(i=>Ce.error(i))}const ea="@firebase/analytics",ta="0.10.2";function Ym(){_t(new et(Yl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Km(s,i,n)},"PUBLIC")),_t(new et("analytics-internal",t,"PRIVATE")),ze(ea,ta),ze(ea,ta,"esm2017");function t(e){try{const n=e.getProvider(Yl).getImmediate();return{logEvent:(s,i,r)=>zm(n,s,i,r)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}Ym();var na={};const sa="@firebase/database",ia="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu="";function Qm(t){Lu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Kn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jm(e)}}catch{}return new Xm},Pt=Fu("localStorage"),Zm=Fu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new to("@firebase/database"),ey=function(){let t=1;return function(){return t++}}(),Uu=function(t){const e=b_(t),n=new v_;n.update(e);const s=n.digest();return Zr.encodeByteArray(s)},ss=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ss.apply(null,s):typeof s=="object"?e+=ce(s):e+=s,e+=" "}return e};let Ln=null,ra=!0;const ty=function(t,e){b(!e,"Can't turn on custom loggers persistently."),on.logLevel=K.VERBOSE,Ln=on.log.bind(on)},fe=function(...t){if(ra===!0&&(ra=!1,Ln===null&&Zm.get("logging_enabled")===!0&&ty()),Ln){const e=ss.apply(null,t);Ln(e)}},is=function(t){return function(...e){fe(t,...e)}},br=function(...t){const e="FIREBASE INTERNAL ERROR: "+ss(...t);on.error(e)},tt=function(...t){const e=`FIREBASE FATAL ERROR: ${ss(...t)}`;throw on.error(e),new Error(e)},Ee=function(...t){const e="FIREBASE WARNING: "+ss(...t);on.warn(e)},ny=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",$t="[MAX_NAME]",yn=function(t,e){if(t===e)return 0;if(t===fn||e===$t)return-1;if(e===fn||t===$t)return 1;{const n=oa(t),s=oa(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iy=function(t,e){return t===e?0:t<e?-1:1},Sn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},co=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ce(e[s]),n+=":",n+=co(t[e[s]]);return n+="}",n},$u=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hu=function(t){b(!Bu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ry=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ly(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ay=new RegExp("^-?(0*)\\d{1,10}$"),cy=-2147483648,uy=2147483647,oa=function(t){if(ay.test(t)){const e=Number(t);if(e>=cy&&e<=uy)return e}return null},vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ee("Exception was thrown by user callback.",n),e},Math.floor(0))}},hy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ee(e)}}class Rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="5",Wu="v",Vu="s",ju="r",Gu="f",qu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ku="ls",zu="p",Cr="ac",Yu="websocket",Qu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function py(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Yu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);py(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return e_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={},qi={};function ho(t){const e=t.toString();return Gi[e]||(Gi[e]=new _y),Gi[e]}function gy(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="start",yy="close",vy="pLPCommand",by="pRTLPCB",Zu="id",eh="pw",th="ser",Cy="cb",Ey="seg",wy="ts",Iy="d",Sy="dframe",nh=1870,sh=30,Ty=nh-sh,Ry=25e3,Ay=3e4;class en{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=is(e),this.stats_=ho(n),this.urlFn=a=>(this.appCheckToken&&(a[Cr]=this.appCheckToken),Xu(n,Qu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new my(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ay)),sy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===la)this.id=l,this.password=a;else if(o===yy)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[la]="t",s[th]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wu]=uo,this.transportSessionId&&(s[Vu]=this.transportSessionId),this.lastSessionId&&(s[Ku]=this.lastSessionId),this.applicationId&&(s[zu]=this.applicationId),this.appCheckToken&&(s[Cr]=this.appCheckToken),typeof location<"u"&&location.hostname&&qu.test(location.hostname)&&(s[ju]=Gu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ry()&&!oy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zc(n),i=$u(s,Ty);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sy]="t",s[Zu]=e,s[eh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ey(),window[vy+this.uniqueCallbackIdentifier]=e,window[by+this.uniqueCallbackIdentifier]=n,this.myIFrame=fo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){fe("frame writing exception"),l.stack&&fe(l.stack),fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zu]=this.myID,e[eh]=this.myPW,e[th]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sh+s.length<=nh;){const o=this.pendingSegs.shift();s=s+"&"+Ey+i+"="+o.seg+"&"+wy+i+"="+o.ts+"&"+Iy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Ry)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=16384,xy=45e3;let Fs=null;typeof MozWebSocket<"u"?Fs=MozWebSocket:typeof WebSocket<"u"&&(Fs=WebSocket);class De{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=is(this.connId),this.stats_=ho(n),this.connURL=De.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wu]=uo,typeof location<"u"&&location.hostname&&qu.test(location.hostname)&&(o[ju]=Gu),n&&(o[Vu]=n),s&&(o[Ku]=s),i&&(o[Cr]=i),r&&(o[zu]=r),Xu(e,Yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pt.set("previous_websocket_failure",!0);try{let s;iu(),this.mySock=new Fs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fs!==null&&!De.forceDisallow_}static previouslyFailed(){return Pt.isInMemoryStorage||Pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Kn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$u(n,Ny);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}De.responsesRequiredToBeHealthy=2;De.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[en,De]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=De&&De.isAvailable();let s=n&&!De.previouslyFailed();if(e.webSocketOnly&&(n||Ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[De];else{const i=this.transports_=[];for(const r of Yn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=6e4,Py=5e3,Dy=10*1024,My=100*1024,Ki="t",aa="d",ky="s",ca="r",Ly="e",ua="o",ha="a",fa="n",da="p",Fy="h";class Uy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=is("c:"+this.id+":"),this.transportManager_=new Yn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>My?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ki in e){const n=e[Ki];n===ha?this.upgradeIfSecondaryHealthy_():n===ca?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ua&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Sn("t",e),s=Sn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:da,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Sn("t",e),s=Sn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Sn(Ki,e);if(aa in e){const s=e[aa];if(n===Fy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ky?this.onConnectionShutdown_(s):n===ca?this.onReset_(s):n===Ly?br("Server Error: "+s):n===ua?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):br("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),uo!==s&&Ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Oy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Py))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:da,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends rh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!su()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Us}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=32,_a=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gt(t){return t.pieces_.length-t.pieceNum_}function z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function oh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function By(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ah(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=M(t),s=M(e);if(n===null)return e;if(n===s)return ve(z(t),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function po(t,e){if(gt(t)!==gt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ke(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(gt(t)>gt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $y{constructor(e,n){this.errorPrefix_=n,this.parts_=lh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hi(this.parts_[s]);ch(this)}}function Hy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=hi(e),ch(t)}function Wy(t){const e=t.parts_.pop();t.byteLength_-=hi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ch(t){if(t.byteLength_>_a)throw new Error(t.errorPrefix_+"has a key path longer than "+_a+" bytes ("+t.byteLength_+").");if(t.parts_.length>pa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pa+") or object contains a cycle "+At(t))}function At(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends rh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _o}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=1e3,Vy=60*5*1e3,ga=30*1e3,jy=1.3,Gy=3e4,qy="server_kill",ma=3;class Ze extends ih{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ze.nextPersistentConnectionId_++,this.log_=is("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tn,this.maxReconnectDelay_=Vy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!iu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Us.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ce(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ci,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ze.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const s=hn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||m_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ga)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=g_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):br("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gy&&(this.reconnectDelay_=Tn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ze.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Uy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ee(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(qy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ee(h),a())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ll(this.interruptReasons_)&&(this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>co(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ma&&(this.reconnectDelay_=ga,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ma&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lu.replace(/\./g,"-")]=1,su()?e["framework.cordova"]=1:h_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Us.getInstance().currentlyOnline();return Ll(this.interruptReasons_)&&e}}Ze.nextPersistentConnectionId_=0;Ze.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new k(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new k(fn,e),i=new k(fn,n);return this.compare(s,i)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class uh extends pi{static get __EMPTY_NODE(){return ys}static set __EMPTY_NODE(e){ys=e}compare(e,n){return yn(e.name,n.name)}isDefinedOn(e){throw mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return k.MIN}maxPost(){return new k($t,ys)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,ys)}toString(){return".key"}}const ln=new uh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ae.RED,this.left=i??be.EMPTY_NODE,this.right=r??be.EMPTY_NODE}copy(e,n,s,i,r){return new ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class Ky{copy(e,n,s,i,r){return this}insert(e,n,s){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vs(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new Ky;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t,e){return yn(t.name,e.name)}function go(t,e){return yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;function Yy(t){Er=t}const hh=function(t){return typeof t=="number"?"number:"+Hu(t):"string:"+t},fh=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else b(t===Er||t.isEmpty(),"priority of unexpected type.");b(t===Er||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;class le{constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fh(this.priorityNode_)}static set __childrenNodeConstructor(e){ya=e}static get __childrenNodeConstructor(){return ya}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=M(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||gt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hu(this.value_):e+=this.value_,this.lazyHash_=Uu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh,ph;function Qy(t){dh=t}function Jy(t){ph=t}class Xy extends pi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return k.MIN}maxPost(){return new k($t,new le("[PRIORITY-POST]",ph))}makePost(e,n){const s=dh(e);return new k(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const te=new Xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=Math.log(2);class ev{constructor(e){const n=r=>parseInt(Math.log(r)/Zy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ae(d,h.node,ae.BLACK,null,null);{const _=parseInt(u/2,10)+a,I=i(a,_),R=i(_+1,c);return h=t[_],d=n?n(h):h,new ae(d,h.node,ae.BLACK,I,R)}},r=function(a){let c=null,u=null,h=t.length;const d=function(I,R){const H=h-I,Y=h;h-=I;const ne=i(H+1,Y),W=t[H],se=n?n(W):W;_(new ae(se,W.node,R,null,ne))},_=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<a.count;++I){const R=a.nextBitIsOne(),H=Math.pow(2,a.count-(I+1));R?d(H,ae.BLACK):(d(H,ae.BLACK),d(H,ae.RED))}return u},o=new ev(t.length),l=r(o);return new be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;const Xt={};class Je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Xt&&te,"ChildrenNode.ts has not been loaded"),zi=zi||new Je({".priority":Xt},{".priority":te}),zi}get(e){const n=hn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){b(e!==ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(k.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Bs(s,e.getCompare()):l=Xt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Je(u,c)}addToIndexes(e,n){const s=Ms(this.indexes_,(i,r)=>{const o=hn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Xt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(k.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Bs(l,o.getCompare())}else return Xt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new k(e.name,l))),a.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ms(this.indexes_,i=>{if(i===Xt)return i;{const r=n.get(e.name);return r?i.remove(new k(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class x{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&fh(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rn||(Rn=new x(new be(go),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rn:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new k(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Rn:this.priorityNode_;return new x(i,o,r)}}updateChild(e,n){const s=M(e);if(s===null)return n;{b(M(e)!==".priority"||gt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hh(this.getPriority().val())+":"),this.forEachChild(te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new k(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new k(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new k(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rs?-1:0}withIndex(e){if(e===ln||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(te),i=n.getIterator(te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ln?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tv extends x{constructor(){super(new be(go),x.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const rs=new tv;Object.defineProperties(k,{MIN:{value:new k(fn,x.EMPTY_NODE)},MAX:{value:new k($t,rs)}});uh.__EMPTY_NODE=x.EMPTY_NODE;le.__childrenNodeConstructor=x;Yy(rs);Jy(rs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=!0;function ue(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,ue(e))}if(!(t instanceof Array)&&nv){const n=[];let s=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new k(o,a)))}}),n.length===0)return x.EMPTY_NODE;const r=Bs(n,zy,o=>o.name,go);if(s){const o=Bs(n,te.getCompare());return new x(r,ue(e),new Je({".priority":o},{".priority":te}))}else return new x(r,ue(e),Je.Default)}else{let n=x.EMPTY_NODE;return Ie(t,(s,i)=>{if(it(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}Qy(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends pi{constructor(e){super(),this.indexPath_=e,b(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}makePost(e,n){const s=ue(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new k(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,rs);return new k($t,e)}toString(){return lh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends pi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,n){const s=ue(e);return new k(n,s)}toString(){return".value"}}const rv=new iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){return{type:"value",snapshotNode:t}}function dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ov(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Qn(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dn(n,s)):o.trackChildChange(Jn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(te,(i,r)=>{n.hasChild(i)||s.trackChildChange(Qn(i,r))}),n.isLeafNode()||n.forEachChild(te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Jn(i,r,o))}else s.trackChildChange(dn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.indexedFilter_=new mo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xn.getStartPost_(e),this.endPost_=Xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new k(n,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(te,(o,l)=>{r.matches(new k(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new k(n,s))||(s=x.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new k(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Jn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Qn(n,h));const R=l.updateImmediateChild(n,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dn(d.name,d.node)),R.updateImmediateChild(d.name,d.node)):R}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Qn(c.name,c.node)),r.trackChildChange(dn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new yo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function av(t){return t.loadsAllData()?new mo(t.getIndex()):t.hasLimit()?new lv(t):new Xn(t)}function va(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===rv?n="$value":t.index_===ln?n="$key":(b(t.index_ instanceof sv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ba(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends ih{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=is("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$s.getListenId_(e,s),l={};this.listens_[o]=l;const a=va(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),hn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=$s.getListenId_(e,n);delete this.listens_[s]}get(e){const n=va(e._queryParams),s=e._path.toString(),i=new ci;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+y_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Kn(l.responseText)}catch{Ee("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ee("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){return{value:null,children:new Map}}function gh(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=M(e);t.children.has(s)||t.children.set(s,Hs());const i=t.children.get(s);e=z(e),gh(i,e,n)}}function wr(t,e,n){t.value!==null?n(e,t.value):uv(t,(s,i)=>{const r=new G(e.toString()+"/"+s);wr(i,r,n)})}function uv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=10*1e3,fv=30*1e3,dv=5*60*1e3;class pv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hv(e);const s=Ca+(fv-Ca)*Math.random();Fn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ie(e,(i,r)=>{r>0&&it(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*dv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Le||(Le={}));function mh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Le.ACK_USER_WRITE,this.source=mh()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Ws($(),n,this.revert)}}else return b(M(this.path)===e,"operationForChild called for unrelated child."),new Ws(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.source=e,this.path=n,this.type=Le.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Zn(this.source,$()):new Zn(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Le.OVERWRITE}operationForChild(e){return L(this.path)?new Ht(this.source,$(),this.snap.getImmediateChild(e)):new Ht(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Le.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Ht(this.source,$(),n.value):new es(this.source,$(),n)}else return b(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ov(o.childName,o.snapshotNode))}),An(t,i,"child_removed",e,s,n),An(t,i,"child_added",e,s,n),An(t,i,"child_moved",r,s,n),An(t,i,"child_changed",e,s,n),An(t,i,"value",e,s,n),i}function An(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>yv(t,l,a)),o.forEach(l=>{const a=mv(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function mv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yv(t,e,n){if(e.childName==null||n.childName==null)throw mn("Should only compare child_ events.");const s=new k(e.childName,e.snapshotNode),i=new k(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t,e){return{eventCache:t,serverCache:e}}function Un(t,e,n,s){return _i(new Wt(e,n,s),t.serverCache)}function yh(t,e,n,s){return _i(t.eventCache,new Wt(e,n,s))}function Ir(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;const vv=()=>(Yi||(Yi=new be(iy)),Yi);class Q{constructor(e,n=vv()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ie(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(L(e))return null;{const s=M(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),n);return r!=null?{path:ie(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),s=this.children.get(n);return s!==null?s.subtree(z(e)):new Q(null)}}set(e,n){if(L(e))return new Q(n,this.children);{const s=M(e),r=(this.children.get(s)||new Q(null)).set(z(e),n),o=this.children.insert(s,r);return new Q(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),s=this.children.get(n);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),s=this.children.get(n);return s?s.get(z(e)):null}}setTree(e,n){if(L(e))return n;{const s=M(e),r=(this.children.get(s)||new Q(null)).setTree(z(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Q(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(z(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=M(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),ie(n,i),s):new Q(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.writeTree_=e}static empty(){return new Ue(new Q(null))}}function Bn(t,e,n){if(L(e))return new Ue(new Q(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ve(i,e);return r=r.updateChild(o,n),new Ue(t.writeTree_.set(i,r))}else{const i=new Q(n),r=t.writeTree_.setTree(e,i);return new Ue(r)}}}function Ea(t,e,n){let s=t;return Ie(n,(i,r)=>{s=Bn(s,ie(e,i),r)}),s}function wa(t,e){if(L(e))return Ue.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new Ue(n)}}function Sr(t,e){return zt(t,e)!=null}function zt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function Ia(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(s,i)=>{e.push(new k(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new k(s,i.value))}),e}function dt(t,e){if(L(e))return t;{const n=zt(t,e);return n!=null?new Ue(new Q(n)):new Ue(t.writeTree_.subtree(e))}}function Tr(t){return t.writeTree_.isEmpty()}function pn(t,e){return vh($(),t.writeTree_,e)}function vh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vh(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e){return wh(e,t)}function bv(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bn(t.visibleWrites,e,n)),t.lastWriteId=s}function Cv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ev(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&wv(l,s.path)?i=!1:ke(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Iv(t),!0;if(s.snap)t.visibleWrites=wa(t.visibleWrites,s.path);else{const l=s.children;Ie(l,a=>{t.visibleWrites=wa(t.visibleWrites,ie(s.path,a))})}return!0}else return!1}function wv(t,e){if(t.snap)return ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ke(ie(t.path,n),e))return!0;return!1}function Iv(t){t.visibleWrites=bh(t.allWrites,Sv,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sv(t){return t.visible}function bh(t,e,n){let s=Ue.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ke(n,o)?(l=ve(n,o),s=Bn(s,l,r.snap)):ke(o,n)&&(l=ve(o,n),s=Bn(s,$(),r.snap.getChild(l)));else if(r.children){if(ke(n,o))l=ve(n,o),s=Ea(s,l,r.children);else if(ke(o,n))if(l=ve(o,n),L(l))s=Ea(s,$(),r.children);else{const a=hn(r.children,M(l));if(a){const c=a.getChild(z(l));s=Bn(s,$(),c)}}}else throw mn("WriteRecord should have .snap or .children")}}return s}function Ch(t,e,n,s,i){if(!s&&!i){const r=zt(t.visibleWrites,e);if(r!=null)return r;{const o=dt(t.visibleWrites,e);if(Tr(o))return n;if(n==null&&!Sr(o,$()))return null;{const l=n||x.EMPTY_NODE;return pn(o,l)}}}else{const r=dt(t.visibleWrites,e);if(!i&&Tr(r))return n;if(!i&&n==null&&!Sr(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ke(c.path,e)||ke(e,c.path))},l=bh(t.allWrites,o,e),a=n||x.EMPTY_NODE;return pn(l,a)}}}function Tv(t,e,n){let s=x.EMPTY_NODE;const i=zt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=dt(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=pn(dt(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),Ia(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=dt(t.visibleWrites,e);return Ia(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rv(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(Sr(t.visibleWrites,r))return null;{const o=dt(t.visibleWrites,r);return Tr(o)?i.getChild(n):pn(o,i.getChild(n))}}function Av(t,e,n,s){const i=ie(e,n),r=zt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=dt(t.visibleWrites,i);return pn(o,s.getNode().getImmediateChild(n))}else return null}function Nv(t,e){return zt(t.visibleWrites,e)}function xv(t,e,n,s,i,r,o){let l;const a=dt(t.visibleWrites,e),c=zt(a,$());if(c!=null)l=c;else if(n!=null)l=pn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Ov(){return{visibleWrites:Ue.empty(),allWrites:[],lastWriteId:-1}}function Vs(t,e,n,s){return Ch(t.writeTree,t.treePath,e,n,s)}function Eo(t,e){return Tv(t.writeTree,t.treePath,e)}function Sa(t,e,n,s){return Rv(t.writeTree,t.treePath,e,n,s)}function js(t,e){return Nv(t.writeTree,ie(t.treePath,e))}function Pv(t,e,n,s,i,r){return xv(t.writeTree,t.treePath,e,n,s,i,r)}function wo(t,e,n){return Av(t.writeTree,t.treePath,e,n)}function Eh(t,e){return wh(ie(t.treePath,e),t.writeTree)}function wh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Jn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Qn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,dn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Jn(s,e.snapshotNode,i.oldSnap));else throw mn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ih=new Mv;class Io{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vt(this.viewCache_),r=Pv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return{filter:t}}function Lv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fv(t,e,n,s,i){const r=new Dv;let o,l;if(n.type===Le.OVERWRITE){const c=n;c.source.fromUser?o=Rr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Gs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Le.MERGE){const c=n;c.source.fromUser?o=Bv(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ar(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Le.ACK_USER_WRITE){const c=n;c.revert?o=Wv(t,e,c.path,s,i,r):o=$v(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Le.LISTEN_COMPLETE)o=Hv(t,e,n.path,s,r);else throw mn("Unknown operation type: "+n.type);const a=r.getChanges();return Uv(e,o,a),{viewCache:o,changes:a}}function Uv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ir(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_h(Ir(e)))}}function Sh(t,e,n,s,i,r){const o=e.eventCache;if(js(s,n)!=null)return e;{let l,a;if(L(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vt(e),u=c instanceof x?c:x.EMPTY_NODE,h=Eo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Vs(s,Vt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(n);if(c===".priority"){b(gt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Sa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=z(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Sa(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=wo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Un(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Gs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=M(n);if(!a.isCompleteForPath(n)&&gt(n)>1)return e;const I=z(n),H=a.getNode().getImmediateChild(_).updateChild(I,s);_===".priority"?c=u.updatePriority(a.getNode(),H):c=u.updateChild(a.getNode(),_,H,I,Ih,null)}const h=yh(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new Io(i,h,r);return Sh(t,h,n,i,d,l)}function Rr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Io(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Un(e,c,!0,t.filter.filtersNodes());else{const h=M(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Un(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=z(n),_=l.getNode().getImmediateChild(h);let I;if(L(d))I=s;else{const R=u.getCompleteChild(h);R!=null?oh(d)===".priority"&&R.getChild(ah(d)).isEmpty()?I=R:I=R.updateChild(d,s):I=x.EMPTY_NODE}if(_.equals(I))a=e;else{const R=t.filter.updateChild(l.getNode(),h,I,d,u,o);a=Un(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ta(t,e){return t.eventCache.isCompleteForChild(e)}function Bv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ie(n,a);Ta(e,M(u))&&(l=Rr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ie(n,a);Ta(e,M(u))||(l=Rr(t,l,u,c,i,r,o))}),l}function Ra(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ar(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new Q(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),I=Ra(t,_,d);a=Gs(t,a,new G(h),I,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const I=e.serverCache.getNode().getImmediateChild(h),R=Ra(t,I,d);a=Gs(t,a,new G(h),R,i,r,o,l)}}),a}function $v(t,e,n,s,i,r,o){if(js(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Gs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new Q(null);return a.getNode().forEachChild(ln,(u,h)=>{c=c.set(new G(u),h)}),Ar(t,e,n,c,i,r,l,o)}else return e}else{let c=new Q(null);return s.foreach((u,h)=>{const d=ie(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Ar(t,e,n,c,i,r,l,o)}}function Hv(t,e,n,s,i){const r=e.serverCache,o=yh(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Sh(t,o,n,s,Ih,i)}function Wv(t,e,n,s,i,r){let o;if(js(s,n)!=null)return e;{const l=new Io(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vs(s,Vt(e));else{const h=e.serverCache.getNode();b(h instanceof x,"serverChildren would be complete if leaf node"),u=Eo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=M(n);let h=wo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,z(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,x.EMPTY_NODE,z(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vs(s,Vt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||js(s,$())!=null,Un(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new mo(s.getIndex()),r=av(s);this.processor_=kv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,l.getNode(),null),u=new Wt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=_i(h,u),this.eventGenerator_=new _v(this.query_)}get query(){return this.query_}}function jv(t){return t.viewCache_.serverCache.getNode()}function Gv(t,e){const n=Vt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Aa(t){return t.eventRegistrations_.length===0}function qv(t,e){t.eventRegistrations_.push(e)}function Na(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function xa(t,e,n,s){e.type===Le.MERGE&&e.source.queryId!==null&&(b(Vt(t.viewCache_),"We should always have a full cache before handling merges"),b(Ir(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fv(t.processor_,i,e,n,s);return Lv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Th(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Kv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(r,o)=>{s.push(dn(r,o))}),n.isFullyInitialized()&&s.push(_h(n.getNode())),Th(t,s,n.getNode(),e)}function Th(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return gv(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class zv{constructor(){this.views=new Map}}function Yv(t){b(!qs,"__referenceConstructor has already been defined"),qs=t}function Qv(){return b(qs,"Reference.ts has not been loaded"),qs}function Jv(t){return t.views.size===0}function So(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),xa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(xa(o,e,n,s));return r}}function Xv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Vs(n,i?s:null),a=!1;l?a=!0:s instanceof x?(l=Eo(n,s),a=!1):(l=x.EMPTY_NODE,a=!1);const c=_i(new Wt(l,a,!1),new Wt(s,i,!1));return new Vv(e,c)}return o}function Zv(t,e,n,s,i,r){const o=Xv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qv(o,n),Kv(o,n)}function eb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=mt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Na(c,n,s)),Aa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Na(a,n,s)),Aa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!mt(t)&&r.push(new(Qv())(e._repo,e._path)),{removed:r,events:o}}function Rh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function an(t,e){let n=null;for(const s of t.views.values())n=n||Gv(s,e);return n}function Ah(t,e){if(e._queryParams.loadsAllData())return gi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Nh(t,e){return Ah(t,e)!=null}function mt(t){return gi(t)!=null}function gi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;function tb(t){b(!Ks,"__referenceConstructor has already been defined"),Ks=t}function nb(){return b(Ks,"Reference.ts has not been loaded"),Ks}let sb=1;class Oa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Ov(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xh(t,e,n,s,i){return bv(t.pendingWriteTree_,e,n,s,i),i?os(t,new Ht(mh(),e,n)):[]}function Dt(t,e,n=!1){const s=Cv(t.pendingWriteTree_,e);if(Ev(t.pendingWriteTree_,e)){let r=new Q(null);return s.snap!=null?r=r.set($(),!0):Ie(s.children,o=>{r=r.set(new G(o),!0)}),os(t,new Ws(s.path,r,n))}else return[]}function mi(t,e,n){return os(t,new Ht(vo(),e,n))}function ib(t,e,n){const s=Q.fromObject(n);return os(t,new es(vo(),e,s))}function rb(t,e){return os(t,new Zn(vo(),e))}function ob(t,e,n){const s=Ro(t,n);if(s){const i=Ao(s),r=i.path,o=i.queryId,l=ve(r,e),a=new Zn(bo(o),l);return No(t,r,a)}else return[]}function Nr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Nh(o,e))){const a=eb(o,e,n,s);Jv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>mt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=cb(d);for(let I=0;I<_.length;++I){const R=_[I],H=R.query,Y=Dh(t,R);t.listenProvider_.startListening($n(H),zs(t,H),Y.hashFn,Y.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening($n(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(yi(d));t.listenProvider_.stopListening($n(d),_)}))}ub(t,c)}return l}function lb(t,e,n,s){const i=Ro(t,s);if(i!=null){const r=Ao(i),o=r.path,l=r.queryId,a=ve(o,e),c=new Ht(bo(l),a,n);return No(t,o,c)}else return[]}function ab(t,e,n,s){const i=Ro(t,s);if(i){const r=Ao(i),o=r.path,l=r.queryId,a=ve(o,e),c=Q.fromObject(n),u=new es(bo(l),a,c);return No(t,o,u)}else return[]}function Pa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const I=ve(d,i);r=r||an(_,I),o=o||mt(_)});let l=t.syncPointTree_.get(i);l?(o=o||mt(l),r=r||an(l,$())):(l=new zv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,I)=>{const R=an(I,$());R&&(r=r.updateImmediateChild(_,R))}));const c=Nh(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=yi(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=hb();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Co(t.pendingWriteTree_,i);let h=Zv(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Ah(l,e);h=h.concat(fb(t,e,d))}return h}function To(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ve(o,e),c=an(l,a);if(c)return c});return Ch(i,e,r,n,!0)}function os(t,e){return Oh(e,t.syncPointTree_,null,Co(t.pendingWriteTree_,$()))}function Oh(t,e,n,s){if(L(t.path))return Ph(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=an(i,$()));let r=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Eh(s,o);r=r.concat(Oh(l,a,c,u))}return i&&(r=r.concat(So(i,t,s,n))),r}}function Ph(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=an(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Eh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ph(u,l,a,c)))}),i&&(r=r.concat(So(i,t,s,n))),r}function Dh(t,e){const n=e.query,s=zs(t,n);return{hashFn:()=>(jv(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ob(t,n._path,s):rb(t,n._path);{const r=ly(i,n);return Nr(t,n,null,r)}}}}function zs(t,e){const n=yi(e);return t.queryToTagMap.get(n)}function yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ro(t,e){return t.tagToQueryMap.get(e)}function Ao(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function No(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Co(t.pendingWriteTree_,e);return So(s,n,i,null)}function cb(t){return t.fold((e,n,s)=>{if(n&&mt(n))return[gi(n)];{let i=[];return n&&(i=Rh(n)),Ie(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nb())(t._repo,t._path):t}function ub(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function hb(){return sb++}function fb(t,e,n){const s=e._path,i=zs(t,e),r=Dh(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&mt(u))return[gi(u).query];{let d=[];return u&&(d=d.concat(Rh(u).map(_=>_.query))),Ie(h,(_,I)=>{d=d.concat(I)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening($n(u),zs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xo(n)}node(){return this.node_}}class Oo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new Oo(this.syncTree_,n)}node(){return To(this.syncTree_,this.path_)}}const db=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Da=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _b(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},_b=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gb=function(t,e,n,s){return Po(e,new Oo(n,t),s)},Mh=function(t,e,n){return Po(t,new xo(e),n)};function Po(t,e,n){const s=t.getPriority().val(),i=Da(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Da(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new le(l,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(te,(l,a)=>{const c=Po(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Mo(t,e){let n=e instanceof G?e:new G(e),s=t,i=M(n);for(;i!==null;){const r=hn(s.node.children,i)||{children:{},childCount:0};s=new Do(i,s,r),n=z(n),i=M(n)}return s}function bn(t){return t.node.value}function kh(t,e){t.node.value=e,xr(t)}function Lh(t){return t.node.childCount>0}function mb(t){return bn(t)===void 0&&!Lh(t)}function vi(t,e){Ie(t.node.children,(n,s)=>{e(new Do(n,t,s))})}function Fh(t,e,n,s){n&&!s&&e(t),vi(t,i=>{Fh(i,e,!0,s)}),n&&s&&e(t)}function yb(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ls(t){return new G(t.parent===null?t.name:ls(t.parent)+"/"+t.name)}function xr(t){t.parent!==null&&vb(t.parent,t.name,t)}function vb(t,e,n){const s=mb(n),i=it(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=/[\[\].#$\/\u0000-\u001F\u007F]/,Cb=/[\[\].#$\u0000-\u001F\u007F]/,Qi=10*1024*1024,Uh=function(t){return typeof t=="string"&&t.length!==0&&!bb.test(t)},Bh=function(t){return typeof t=="string"&&t.length!==0&&!Cb.test(t)},Eb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bh(t)},$h=function(t,e,n,s){s&&e===void 0||ko(eo(t,"value"),e,n)},ko=function(t,e,n){const s=n instanceof G?new $y(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+At(s));if(typeof e=="function")throw new Error(t+"contains a function "+At(s)+" with contents = "+e.toString());if(Bu(e))throw new Error(t+"contains "+e.toString()+" "+At(s));if(typeof e=="string"&&e.length>Qi/3&&hi(e)>Qi)throw new Error(t+"contains a string greater than "+Qi+" utf8 bytes "+At(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Uh(o)))throw new Error(t+" contains an invalid key ("+o+") "+At(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hy(s,o),ko(t,l,s),Wy(s)}),i&&r)throw new Error(t+' contains ".value" child '+At(s)+" in addition to actual children.")}},Hh=function(t,e,n,s){if(!Bh(n))throw new Error(eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hh(t,e,n)},Wh=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ib=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Uh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Eb(n))throw new Error(eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!po(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vh(t,e,n){Lo(t,n),jh(t,s=>po(s,e))}function nt(t,e,n){Lo(t,n),jh(t,s=>ke(s,e)||ke(e,s))}function jh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Tb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Tb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ln&&fe("event: "+n.toString()),vn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="repo_interrupt",Ab=25;class Nb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hs(),this.transactionQueueTree_=new Do,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xb(t,e,n){if(t.stats_=ho(t.repoInfo_),t.forceRestClient_||hy())t.server_=new $s(t.repoInfo_,(s,i,r,o)=>{Ma(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ka(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ze(t.repoInfo_,e,(s,i,r,o)=>{Ma(t,s,i,r,o)},s=>{ka(t,s)},s=>{Ob(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gy(t.repoInfo_,()=>new pv(t.stats_,t.server_)),t.infoData_=new cv,t.infoSyncTree_=new Oa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=mi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new Oa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Gh(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fo(t){return db({timestamp:Gh(t)})}function Ma(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ms(n,c=>ue(c));o=ab(t.serverSyncTree_,r,a,i)}else{const a=ue(n);o=lb(t.serverSyncTree_,r,a,i)}else if(s){const a=Ms(n,c=>ue(c));o=ib(t.serverSyncTree_,r,a)}else{const a=ue(n);o=mi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=bi(t,r)),nt(t.eventQueue_,l,o)}function ka(t,e){Uo(t,"connected",e),e===!1&&Db(t)}function Ob(t,e){Ie(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new G("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=mi(t.infoSyncTree_,s,i);nt(t.eventQueue_,s,r)}function qh(t){return t.nextWriteId_++}function Pb(t,e,n,s,i){Bo(t,"set",{path:e.toString(),value:n,priority:s});const r=Fo(t),o=ue(n,s),l=To(t.serverSyncTree_,e),a=Mh(o,l,r),c=qh(t),u=xh(t.serverSyncTree_,e,a,c,!0);Lo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const I=d==="ok";I||Ee("set at "+e+" failed: "+d);const R=Dt(t.serverSyncTree_,c,!I);nt(t.eventQueue_,e,R),Fb(t,i,d,_)});const h=Jh(t,e);bi(t,h),nt(t.eventQueue_,h,[])}function Db(t){Bo(t,"onDisconnectEvents");const e=Fo(t),n=Hs();wr(t.onDisconnect_,$(),(i,r)=>{const o=gb(i,r,t.serverSyncTree_,e);gh(n,i,o)});let s=[];wr(n,$(),(i,r)=>{s=s.concat(mi(t.serverSyncTree_,i,r));const o=Jh(t,i);bi(t,o)}),t.onDisconnect_=Hs(),nt(t.eventQueue_,$(),s)}function Mb(t,e,n){let s;M(e._path)===".info"?s=Pa(t.infoSyncTree_,e,n):s=Pa(t.serverSyncTree_,e,n),Vh(t.eventQueue_,e._path,s)}function kb(t,e,n){let s;M(e._path)===".info"?s=Nr(t.infoSyncTree_,e,n):s=Nr(t.serverSyncTree_,e,n),Vh(t.eventQueue_,e._path,s)}function Lb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rb)}function Bo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),fe(n,...e)}function Fb(t,e,n,s){e&&vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Kh(t,e,n){return To(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function $o(t,e=t.transactionQueueTree_){if(e||Ci(t,e),bn(e)){const n=Yh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ub(t,ls(e),n)}else Lh(e)&&vi(e,n=>{$o(t,n)})}function Ub(t,e,n){const s=n.map(c=>c.currentWriteId),i=Kh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ve(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Bo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Dt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ci(t,Mo(t.transactionQueueTree_,e)),$o(t,t.transactionQueueTree_),nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ee("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}bi(t,e)}},o)}function bi(t,e){const n=zh(t,e),s=ls(n),i=Yh(t,n);return Bb(t,i,s),s}function Bb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ve(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ab)u=!0,h="maxretry",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Kh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){ko("transaction failed: Data returned ",_,a.path);let I=ue(_);typeof _=="object"&&_!=null&&it(_,".priority")||(I=I.updatePriority(d.getPriority()));const H=a.currentWriteId,Y=Fo(t),ne=Mh(I,d,Y);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=ne,a.currentWriteId=qh(t),o.splice(o.indexOf(H),1),i=i.concat(xh(t.serverSyncTree_,a.path,ne,a.currentWriteId,a.applyLocally)),i=i.concat(Dt(t.serverSyncTree_,H,!0))}else u=!0,h="nodata",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0))}nt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ci(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)vn(s[l]);$o(t,t.transactionQueueTree_)}function zh(t,e){let n,s=t.transactionQueueTree_;for(n=M(e);n!==null&&bn(s)===void 0;)s=Mo(s,n),e=z(e),n=M(e);return s}function Yh(t,e){const n=[];return Qh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Qh(t,e,n){const s=bn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vi(e,i=>{Qh(t,i,n)})}function Ci(t,e){const n=bn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,kh(e,n.length>0?n:void 0)}vi(e,s=>{Ci(t,s)})}function Jh(t,e){const n=ls(zh(t,e)),s=Mo(t.transactionQueueTree_,e);return yb(s,i=>{Ji(t,i)}),Ji(t,s),Fh(s,i=>{Ji(t,i)}),n}function Ji(t,e){const n=bn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?kh(e,void 0):n.length=r+1,nt(t.eventQueue_,ls(e),i);for(let o=0;o<s.length;o++)vn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ee(`Invalid query segment '${n}' in query '${t}'`)}return e}const La=function(t,e){const n=Wb(t),s=n.namespace;n.domain==="firebase.com"&&tt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&tt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ny();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ju(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},Wb=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=$b(t.substring(u,h)));const d=Hb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Vb=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Fa.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fa.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class Gb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:oh(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=ba(this._queryParams),n=co(e);return n==="{}"?"default":n}get _queryObject(){return ba(this._queryParams)}isEqual(e){if(e=Kt(e),!(e instanceof Ho))return!1;const n=this._repo===e._repo,s=po(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+By(this._path)}}class bt extends Ho{constructor(e,n){super(e,n,new yo,!1)}get parent(){const e=ah(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=ts(this.ref,e);return new Ys(this._node.getChild(n),s,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ys(i,ts(this.ref,s),te)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xh(t,e){return t=Kt(t),t._checkNotDeleted("ref"),e!==void 0?ts(t._root,e):t._root}function ts(t,e){return t=Kt(t),M(t._path)===null?wb("child","path",e):Hh("child","path",e),new bt(t._repo,ie(t._path,e))}function Kb(t,e){t=Kt(t),Wh("push",t._path),$h("push",e,t._path,!0);const n=Gh(t._repo),s=Vb(n),i=ts(t,s),r=ts(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ua(t,e){t=Kt(t),Wh("set",t._path),$h("set",e,t._path,!1);const n=new ci;return Pb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Wo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new jb("value",this,new Ys(e.snapshotNode,new bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gb(this,e,n):null}matches(e){return e instanceof Wo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zb(t,e,n,s,i){const r=new qb(n,void 0),o=new Wo(r);return Mb(t._repo,t,o),()=>kb(t._repo,t,o)}function Ba(t,e,n,s){return zb(t,"value",e)}Yv(bt);tb(bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="FIREBASE_DATABASE_EMULATOR_HOST",Or={};let Qb=!1;function Jb(t,e,n,s){t.repoInfo_=new Ju(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Xb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||tt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=La(r,i),l=o.repoInfo,a;typeof process<"u"&&na&&(a=na[Yb]),a?(r=`http://${a}?ns=${l.namespace}`,o=La(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new dy(t.name,t.options,e);Ib("Invalid Firebase Database URL",o),L(o.path)||tt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=eC(l,t,c,new fy(t.name,n));return new tC(u,t)}function Zb(t,e){const n=Or[e];(!n||n[t.key]!==t)&&tt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Lb(t),delete n[t.key]}function eC(t,e,n,s){let i=Or[e.name];i||(i={},Or[e.name]=i);let r=i[t.toURLString()];return r&&tt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Nb(t,Qb,n,s),i[t.toURLString()]=r,r}class tC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tt("Cannot call "+e+" on a deleted database.")}}function nC(t=Cg(),e){const n=so(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=l_("database");s&&sC(n,...s)}return n}function sC(t,e,n,s={}){t=Kt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&tt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rs(Rs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:a_(s.mockUserToken,t.app.options.projectId);r=new Rs(o)}Jb(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){Qm(bg),_t(new et("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Xb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ze(sa,ia,t),ze(sa,ia,"esm2017")}Ze.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ze.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iC();const rC={apiKey:"AIzaSyBGKFlZcgiuKJMCAmSU1F2L8-mpRtWyGCk",authDomain:"bbpag-e60d8.firebaseapp.com",projectId:"bbpag-e60d8",storageBucket:"bbpag-e60d8.appspot.com",messagingSenderId:"685339319716",appId:"1:685339319716:web:5e0c10926798b5f5e47531",measurementId:"G-XVKYW0BGTL",databaseURL:"https://bbpag-e60d8-default-rtdb.asia-southeast1.firebasedatabase.app/"},oC=hu(rC);let Zh=nC(oC),$a=Xh(Zh,"data"),Ha=Xh(Zh,"count");const Tt=Jp({state(){return{data:{},count:0}},mutations:{renewData(t,e){t.data=e},renewCount(t,e){t.count=e}},actions:{onValueData(t){Ba($a,e=>{let n=e.val();t.commit("renewData",n)})},onValueCount(t,e){Ba(Ha,n=>{let s=n.val();t.commit("renewCount",s)})},sent(t,e){console.log(e);let n=Kb($a);Ua(n,e)},setNewCount(t,e){console.log(e),Ua(Ha,e)}}}),lC=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},aC={class:"wrap"},cC={class:"input-group mb-3"},uC={class:"input-group mb-3"},hC={class:"cntWrap"},fC=["src"],dC={__name:"App",setup(t){let e=Ri(Tt.state.data),n=Ri(""),s=Ri(""),i=Yr(()=>{let c={};return Object.keys(e.value).reverse().forEach(u=>{c[u]=e.value[u]}),c});rn(()=>Tt.state.data,c=>{e.value=c}),Ic(()=>{Tt.dispatch("onValueData"),Tt.dispatch("onValueCount")});function r(c){return c==s.value}async function o(){let c=Object.values(e.value),u;return c.some(h=>(u=h.count,h.name==s.value))?u:await l()}async function l(){let c=Tt.state.count+9;return await Tt.dispatch("setNewCount",c),c}async function a(){Tt.dispatch("sent",{name:s.value,cnt:n.value,count:await o()})}return(c,u)=>(Pi(),Di("div",aC,[je("div",cC,[al(je("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>pe(s)?s.value=h:s=h),type:"text",class:"form-control",placeholder:"誰","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},null,512),[[Ol,Es(s)]])]),je("div",uC,[al(je("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>pe(n)?n.value=h:n=h),type:"text",class:"form-control",placeholder:"說什麼","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[Ol,Es(n)]]),je("button",{onClick:a,class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"send")]),je("div",hC,[(Pi(!0),Di(Ge,null,md(Es(i),h=>(Pi(),Di("div",{class:Zs(["cnt",{other:r(h.name)}])},[je("img",{src:`https://picsum.photos/id/${h.count}/60/60`,alt:""},null,8,fC),je("div",null,Xo(h.name)+" 說: "+Xo(h.cnt),1)],2))),256))])]))}},pC=lC(dC,[["__scopeId","data-v-5db6140a"]]);let _C=wp(pC);_C.mount("#app");
