(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const J={},rn=[],Ne=()=>{},cf=()=>!1,ei=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ur=t=>t.startsWith("onUpdate:"),he=Object.assign,Br=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uf=Object.prototype.hasOwnProperty,U=(t,e)=>uf.call(t,e),O=Array.isArray,on=t=>ti(t)==="[object Map]",ja=t=>ti(t)==="[object Set]",D=t=>typeof t=="function",oe=t=>typeof t=="string",Kt=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Ga=t=>(ee(t)||D(t))&&D(t.then)&&D(t.catch),Ka=Object.prototype.toString,ti=t=>Ka.call(t),hf=t=>ti(t).slice(8,-1),qa=t=>ti(t)==="[object Object]",$r=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pn=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ff=/-(\w)/g,hn=ni(t=>t.replace(ff,(e,n)=>n?n.toUpperCase():"")),df=/\B([A-Z])/g,qt=ni(t=>t.replace(df,"-$1").toLowerCase()),za=ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oi=ni(t=>t?`on${za(t)}`:""),mt=(t,e)=>!Object.is(t,e),Ts=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ya=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let el;const Qa=()=>el||(el=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=oe(s)?mf(s):Hr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(oe(t)||ee(t))return t}const pf=/;(?![^(]*\))/g,_f=/:([^]+)/,gf=/\/\*[^]*?\*\//g;function mf(t){const e={};return t.replace(gf,"").split(pf).forEach(n=>{if(n){const s=n.split(_f);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function si(t){let e="";if(oe(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=si(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vf=Fr(yf);function Ja(t){return!!t||t===""}const tl=t=>oe(t)?t:t==null?"":O(t)||ee(t)&&(t.toString===Ka||!D(t.toString))?JSON.stringify(t,Xa,2):String(t),Xa=(t,e)=>e&&e.__v_isRef?Xa(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Pi(s,r)+" =>"]=i,n),{})}:ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pi(n))}:Kt(e)?Pi(e):ee(e)&&!O(e)&&!qa(e)?String(e):e,Pi=(t,e="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Za{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function bf(t){return new Za(t)}function Cf(t,e=Pe){e&&e.active&&e.effects.push(t)}function wf(){return Pe}let Ft;class Vr{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cf(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,wt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ef(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Et()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ht,n=Ft;try{return ht=!0,Ft=this,this._runnings++,nl(this),this.fn()}finally{sl(this),this._runnings--,Ft=n,ht=e}}stop(){this.active&&(nl(this),sl(this),this.onStop&&this.onStop(),this.active=!1)}}function Ef(t){return t.value}function nl(t){t._trackId++,t._depsLength=0}function sl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ec(t.deps[e],t);t.deps.length=t._depsLength}}function ec(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ht=!0,rr=0;const tc=[];function wt(){tc.push(ht),ht=!1}function Et(){const t=tc.pop();ht=t===void 0?!0:t}function Wr(){rr++}function jr(){for(rr--;!rr&&or.length;)or.shift()()}function nc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&ec(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const or=[];function sc(t,e,n){Wr();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&or.push(s.scheduler)))}jr()}const ic=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},lr=new WeakMap,Ut=Symbol(""),ar=Symbol("");function Ee(t,e,n){if(ht&&Ft){let s=lr.get(t);s||lr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ic(()=>s.delete(n))),nc(Ft,i)}}function Ze(t,e,n,s,i,r){const o=lr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!Kt(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?$r(n)&&l.push(o.get("length")):(l.push(o.get(Ut)),on(t)&&l.push(o.get(ar)));break;case"delete":O(t)||(l.push(o.get(Ut)),on(t)&&l.push(o.get(ar)));break;case"set":on(t)&&l.push(o.get(Ut));break}Wr();for(const a of l)a&&sc(a,4);jr()}const If=Fr("__proto__,__v_isRef,__isVue"),rc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt)),il=Tf();function Tf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=W(this);for(let r=0,o=this.length;r<o;r++)Ee(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wt(),Wr();const s=W(this)[e].apply(this,n);return jr(),Et(),s}}),t}function Sf(t){Kt(t)||(t=String(t));const e=W(this);return Ee(e,"has",t),e.hasOwnProperty(t)}class oc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Bf:uc:r?cc:ac).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=O(e);if(!i){if(o&&U(il,n))return Reflect.get(il,n,s);if(n==="hasOwnProperty")return Sf}const l=Reflect.get(e,n,s);return(Kt(n)?rc.has(n):If(n))||(i||Ee(e,"get",n),r)?l:pe(l)?o&&$r(n)?l:l.value:ee(l)?i?hc(l):ri(l):l}}class lc extends oc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Wn(r);if(!Ps(s)&&!Wn(s)&&(r=W(r),s=W(s)),!O(e)&&pe(r)&&!pe(s))return a?!1:(r.value=s,!0)}const o=O(e)&&$r(n)?Number(n)<e.length:U(e,n),l=Reflect.set(e,n,s,i);return e===W(i)&&(o?mt(s,r)&&Ze(e,"set",n,s):Ze(e,"add",n,s)),l}deleteProperty(e,n){const s=U(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ze(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Kt(n)||!rc.has(n))&&Ee(e,"has",n),s}ownKeys(e){return Ee(e,"iterate",O(e)?"length":Ut),Reflect.ownKeys(e)}}class Rf extends oc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Af=new lc,Nf=new Rf,xf=new lc(!0);const Gr=t=>t,ii=t=>Reflect.getPrototypeOf(t);function ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=W(t),r=W(e);n||(mt(e,r)&&Ee(i,"get",e),Ee(i,"get",r));const{has:o}=ii(i),l=s?Gr:n?zr:jn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ys(t,e=!1){const n=this.__v_raw,s=W(n),i=W(t);return e||(mt(t,i)&&Ee(s,"has",t),Ee(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vs(t,e=!1){return t=t.__v_raw,!e&&Ee(W(t),"iterate",Ut),Reflect.get(t,"size",t)}function rl(t){t=W(t);const e=W(this);return ii(e).has.call(e,t)||(e.add(t),Ze(e,"add",t,t)),this}function ol(t,e){e=W(e);const n=W(this),{has:s,get:i}=ii(n);let r=s.call(n,t);r||(t=W(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?mt(e,o)&&Ze(n,"set",t,e):Ze(n,"add",t,e),this}function ll(t){const e=W(this),{has:n,get:s}=ii(e);let i=n.call(e,t);i||(t=W(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ze(e,"delete",t,void 0),r}function al(){const t=W(this),e=t.size!==0,n=t.clear();return e&&Ze(t,"clear",void 0,void 0),n}function bs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=W(o),a=e?Gr:t?zr:jn;return!t&&Ee(l,"iterate",Ut),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Cs(t,e,n){return function(...s){const i=this.__v_raw,r=W(i),o=on(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Gr:e?zr:jn;return!e&&Ee(r,"iterate",a?ar:Ut),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Of(){const t={get(r){return ms(this,r)},get size(){return vs(this)},has:ys,add:rl,set:ol,delete:ll,clear:al,forEach:bs(!1,!1)},e={get(r){return ms(this,r,!1,!0)},get size(){return vs(this)},has:ys,add:rl,set:ol,delete:ll,clear:al,forEach:bs(!1,!0)},n={get(r){return ms(this,r,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:bs(!0,!1)},s={get(r){return ms(this,r,!0,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Cs(r,!1,!1),n[r]=Cs(r,!0,!1),e[r]=Cs(r,!1,!0),s[r]=Cs(r,!0,!0)}),[t,n,e,s]}const[Pf,Df,Mf,kf]=Of();function Kr(t,e){const n=e?t?kf:Mf:t?Df:Pf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,r)}const Lf={get:Kr(!1,!1)},Ff={get:Kr(!1,!0)},Uf={get:Kr(!0,!1)};const ac=new WeakMap,cc=new WeakMap,uc=new WeakMap,Bf=new WeakMap;function $f(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hf(t){return t.__v_skip||!Object.isExtensible(t)?0:$f(hf(t))}function ri(t){return Wn(t)?t:qr(t,!1,Af,Lf,ac)}function Vf(t){return qr(t,!1,xf,Ff,cc)}function hc(t){return qr(t,!0,Nf,Uf,uc)}function qr(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Hf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Dn(t){return Wn(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Wn(t){return!!(t&&t.__v_isReadonly)}function Ps(t){return!!(t&&t.__v_isShallow)}function fc(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Wf(t){return Object.isExtensible(t)&&Ya(t,"__v_skip",!0),t}const jn=t=>ee(t)?ri(t):t,zr=t=>ee(t)?hc(t):t;class dc{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Vr(()=>e(this._value),()=>Ss(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=W(this);return(!e._cacheable||e.effect.dirty)&&mt(e._value,e._value=e.effect.run())&&Ss(e,4),pc(e),e.effect._dirtyLevel>=2&&Ss(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jf(t,e,n=!1){let s,i;const r=D(t);return r?(s=t,i=Ne):(s=t.get,i=t.set),new dc(s,i,r||!i,n)}function pc(t){var e;ht&&Ft&&(t=W(t),nc(Ft,(e=t.dep)!=null?e:t.dep=ic(()=>t.dep=void 0,t instanceof dc?t:void 0)))}function Ss(t,e=4,n){t=W(t);const s=t.dep;s&&sc(s,e)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Tn(t){return Gf(t,!1)}function Gf(t,e){return pe(t)?t:new Kf(t,e)}class Kf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:jn(e)}get value(){return pc(this),this._value}set value(e){const n=this.__v_isShallow||Ps(e)||Wn(e);e=n?e:W(e),mt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jn(e),Ss(this,4))}}function tn(t){return pe(t)?t.value:t}const qf={get:(t,e,n)=>tn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function _c(t){return Dn(t)?t:new Proxy(t,qf)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ft(t,e,n,s){try{return s?t(...s):t()}catch(i){oi(i,e,n)}}function Ue(t,e,n,s){if(D(t)){const i=ft(t,e,n,s);return i&&Ga(i)&&i.catch(r=>{oi(r,e,n)}),i}if(O(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Ue(t[r],e,n,s));return i}}function oi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){wt(),ft(a,null,10,[t,o,l]),Et();return}}zf(t,n,i,s)}function zf(t,e,n,s=!0){console.error(t)}let Gn=!1,cr=!1;const de=[];let qe=0;const ln=[];let at=null,Pt=0;const gc=Promise.resolve();let Yr=null;function Yf(t){const e=Yr||gc;return t?e.then(this?t.bind(this):t):e}function Qf(t){let e=qe+1,n=de.length;for(;e<n;){const s=e+n>>>1,i=de[s],r=Kn(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Qr(t){(!de.length||!de.includes(t,Gn&&t.allowRecurse?qe+1:qe))&&(t.id==null?de.push(t):de.splice(Qf(t.id),0,t),mc())}function mc(){!Gn&&!cr&&(cr=!0,Yr=gc.then(vc))}function Jf(t){const e=de.indexOf(t);e>qe&&de.splice(e,1)}function Xf(t){O(t)?ln.push(...t):(!at||!at.includes(t,t.allowRecurse?Pt+1:Pt))&&ln.push(t),mc()}function cl(t,e,n=Gn?qe+1:0){for(;n<de.length;n++){const s=de[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;de.splice(n,1),n--,s()}}}function yc(t){if(ln.length){const e=[...new Set(ln)].sort((n,s)=>Kn(n)-Kn(s));if(ln.length=0,at){at.push(...e);return}for(at=e,Pt=0;Pt<at.length;Pt++)at[Pt]();at=null,Pt=0}}const Kn=t=>t.id==null?1/0:t.id,Zf=(t,e)=>{const n=Kn(t)-Kn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vc(t){cr=!1,Gn=!0,de.sort(Zf);try{for(qe=0;qe<de.length;qe++){const e=de[qe];e&&e.active!==!1&&ft(e,null,14)}}finally{qe=0,de.length=0,yc(),Gn=!1,Yr=null,(de.length||ln.length)&&vc()}}function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||J;d&&(i=n.map(_=>oe(_)?_.trim():_)),h&&(i=n.map(ir))}let l,a=s[l=Oi(e)]||s[l=Oi(hn(e))];!a&&r&&(a=s[l=Oi(qt(e))]),a&&Ue(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ue(c,t,6,i)}}function bc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!D(t)){const a=c=>{const u=bc(c,e,!0);u&&(l=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):he(o,r),ee(t)&&s.set(t,o),o)}function li(t,e){return!t||!ei(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,qt(e))||U(t,e))}let Re=null,Cc=null;function Ds(t){const e=Re;return Re=t,Cc=t&&t.type.__scopeId||null,e}function td(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&bl(-1);const r=Ds(e);let o;try{o=t(...i)}finally{Ds(r),s._d&&bl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Di(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:I,inheritAttrs:R}=t,H=Ds(t);let Y,ne;try{if(n.shapeFlag&4){const se=i||s,Ae=se;Y=Ke(c.call(Ae,se,u,h,_,d,I)),ne=l}else{const se=e;Y=Ke(se.length>1?se(h,{attrs:l,slots:o,emit:a}):se(h,null)),ne=e.props?l:nd(l)}}catch(se){Ln.length=0,oi(se,t,1),Y=Bt(qn)}let V=Y;if(ne&&R!==!1){const se=Object.keys(ne),{shapeFlag:Ae}=V;se.length&&Ae&7&&(r&&se.some(Ur)&&(ne=sd(ne,r)),V=fn(V,ne,!1,!0))}return n.dirs&&(V=fn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),Y=V,Ds(H),Y}const nd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ei(n))&&((e||(e={}))[n]=t[n]);return e},sd=(t,e)=>{const n={};for(const s in t)(!Ur(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function id(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ul(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!li(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ul(s,o,c):!0:!!o;return!1}function ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!li(n,r))return!0}return!1}function rd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const od=Symbol.for("v-ndc"),ld=t=>t.__isSuspense;function ad(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Xf(t)}const cd=Symbol.for("v-scx"),ud=()=>As(cd),ws={};function an(t,e,n){return wc(t,e,n)}function wc(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=J){if(e&&r){const $=e;e=(...Qe)=>{$(...Qe),Ae()}}const a=me,c=$=>s===!0?$:Dt($,s===!1?1:void 0);let u,h=!1,d=!1;if(pe(t)?(u=()=>t.value,h=Ps(t)):Dn(t)?(u=()=>c(t),h=!0):O(t)?(d=!0,h=t.some($=>Dn($)||Ps($)),u=()=>t.map($=>{if(pe($))return $.value;if(Dn($))return c($);if(D($))return ft($,a,2)})):D(t)?e?u=()=>ft(t,a,2):u=()=>(_&&_(),Ue(t,a,3,[I])):u=Ne,e&&s){const $=u;u=()=>Dt($())}let _,I=$=>{_=V.onStop=()=>{ft($,a,4),_=V.onStop=void 0}},R;if(ui)if(I=Ne,e?n&&Ue(e,a,3,[u(),d?[]:void 0,I]):u(),i==="sync"){const $=ud();R=$.__watcherHandles||($.__watcherHandles=[])}else return Ne;let H=d?new Array(t.length).fill(ws):ws;const Y=()=>{if(!(!V.active||!V.dirty))if(e){const $=V.run();(s||h||(d?$.some((Qe,He)=>mt(Qe,H[He])):mt($,H)))&&(_&&_(),Ue(e,a,3,[$,H===ws?void 0:d&&H[0]===ws?[]:H,I]),H=$)}else V.run()};Y.allowRecurse=!!e;let ne;i==="sync"?ne=Y:i==="post"?ne=()=>ve(Y,a&&a.suspense):(Y.pre=!0,a&&(Y.id=a.uid),ne=()=>Qr(Y));const V=new Vr(u,Ne,ne),se=wf(),Ae=()=>{V.stop(),se&&Br(se.effects,V)};return e?n?Y():H=V.run():i==="post"?ve(V.run.bind(V),a&&a.suspense):V.run(),R&&R.push(Ae),Ae}function hd(t,e,n){const s=this.proxy,i=oe(t)?t.includes(".")?Ec(s,t):()=>s[t]:t.bind(s,s);let r;D(e)?r=e:(r=e.handler,n=e);const o=os(this),l=wc(i,r.bind(s),n);return o(),l}function Ec(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Dt(t,e=1/0,n){if(e<=0||!ee(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))Dt(t.value,e,n);else if(O(t))for(let s=0;s<t.length;s++)Dt(t[s],e,n);else if(ja(t)||on(t))t.forEach(s=>{Dt(s,e,n)});else if(qa(t))for(const s in t)Dt(t[s],e,n);return t}function hl(t,e){if(Re===null)return t;const n=hi(Re)||Re.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=J]=e[i];r&&(D(r)&&(r={mounted:r,updated:r}),r.deep&&Dt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function At(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(wt(),Ue(a,n,8,[t.el,l,t,e]),Et())}}const Rs=t=>!!t.type.__asyncLoader,Ic=t=>t.type.__isKeepAlive;function fd(t,e){Tc(t,"a",e)}function dd(t,e){Tc(t,"da",e)}function Tc(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ai(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ic(i.parent.vnode)&&pd(s,e,n,i),i=i.parent}}function pd(t,e,n,s){const i=ai(e,t,s,!0);Rc(()=>{Br(s[e],i)},n)}function ai(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wt();const l=os(n),a=Ue(e,n,t,o);return l(),Et(),a});return s?i.unshift(r):i.push(r),r}}const st=t=>(e,n=me)=>(!ui||t==="sp")&&ai(t,(...s)=>e(...s),n),_d=st("bm"),Sc=st("m"),gd=st("bu"),md=st("u"),yd=st("bum"),Rc=st("um"),vd=st("sp"),bd=st("rtg"),Cd=st("rtc");function wd(t,e=me){ai("ec",t,e)}function Ed(t,e,n,s){let i;const r=n;if(O(t)||oe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r)}}else i=[];return i}const ur=t=>t?Vc(t)?hi(t)||t.proxy:ur(t.parent):null,Mn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ur(t.parent),$root:t=>ur(t.root),$emit:t=>t.emit,$options:t=>Jr(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Qr(t.update)}),$nextTick:t=>t.n||(t.n=Yf.bind(t.proxy)),$watch:t=>hd.bind(t)}),Mi=(t,e)=>t!==J&&!t.__isScriptSetup&&U(t,e),Id={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Mi(s,e))return o[e]=1,s[e];if(i!==J&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,r[e];if(n!==J&&U(n,e))return o[e]=4,n[e];hr&&(o[e]=0)}}const u=Mn[e];let h,d;if(u)return e==="$attrs"&&Ee(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==J&&U(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,U(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Mi(i,e)?(i[e]=n,!0):s!==J&&U(s,e)?(s[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==J&&U(t,o)||Mi(e,o)||(l=r[0])&&U(l,o)||U(s,o)||U(Mn,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fl(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hr=!0;function Td(t){const e=Jr(t),n=t.proxy,s=t.ctx;hr=!1,e.beforeCreate&&dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:I,activated:R,deactivated:H,beforeDestroy:Y,beforeUnmount:ne,destroyed:V,unmounted:se,render:Ae,renderTracked:$,renderTriggered:Qe,errorCaptured:He,serverPrefetch:Ai,expose:Tt,inheritAttrs:wn,components:ds,directives:ps,filters:Ni}=e;if(c&&Sd(c,s,null),o)for(const Z in o){const K=o[Z];D(K)&&(s[Z]=K.bind(n))}if(i){const Z=i.call(n,n);ee(Z)&&(t.data=ri(Z))}if(hr=!0,r)for(const Z in r){const K=r[Z],St=D(K)?K.bind(n,n):D(K.get)?K.get.bind(n,n):Ne,_s=!D(K)&&D(K.set)?K.set.bind(n):Ne,Rt=jc({get:St,set:_s});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Ve=>Rt.value=Ve})}if(l)for(const Z in l)Ac(l[Z],s,n,Z);if(a){const Z=D(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(K=>{Pd(K,Z[K])})}u&&dl(u,t,"c");function _e(Z,K){O(K)?K.forEach(St=>Z(St.bind(n))):K&&Z(K.bind(n))}if(_e(_d,h),_e(Sc,d),_e(gd,_),_e(md,I),_e(fd,R),_e(dd,H),_e(wd,He),_e(Cd,$),_e(bd,Qe),_e(yd,ne),_e(Rc,se),_e(vd,Ai),O(Tt))if(Tt.length){const Z=t.exposed||(t.exposed={});Tt.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:St=>n[K]=St})})}else t.exposed||(t.exposed={});Ae&&t.render===Ne&&(t.render=Ae),wn!=null&&(t.inheritAttrs=wn),ds&&(t.components=ds),ps&&(t.directives=ps)}function Sd(t,e,n=Ne){O(t)&&(t=fr(t));for(const s in t){const i=t[s];let r;ee(i)?"default"in i?r=As(i.from||s,i.default,!0):r=As(i.from||s):r=As(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function dl(t,e,n){Ue(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ac(t,e,n,s){const i=s.includes(".")?Ec(n,s):()=>n[s];if(oe(t)){const r=e[t];D(r)&&an(i,r)}else if(D(t))an(i,t.bind(n));else if(ee(t))if(O(t))t.forEach(r=>Ac(r,e,n,s));else{const r=D(t.handler)?t.handler.bind(n):e[t.handler];D(r)&&an(i,r,t)}}function Jr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ms(a,c,o,!0)),Ms(a,e,o)),ee(e)&&r.set(e,a),a}function Ms(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ms(t,r,n,!0),i&&i.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Rd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rd={data:pl,props:_l,emits:_l,methods:On,computed:On,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:On,directives:On,watch:Nd,provide:pl,inject:Ad};function pl(t,e){return e?t?function(){return he(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Ad(t,e){return On(fr(t),fr(e))}function fr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function On(t,e){return t?he(Object.create(null),t,e):e}function _l(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:he(Object.create(null),fl(t),fl(e??{})):e}function Nd(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function Nc(){return{app:null,config:{isNativeTag:cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xd=0;function Od(t,e){return function(s,i=null){D(s)||(s=he({},s)),i!=null&&!ee(i)&&(i=null);const r=Nc(),o=new WeakSet;let l=!1;const a=r.app={_uid:xd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(a,...u)):D(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Bt(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,hi(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=kn;kn=a;try{return c()}finally{kn=u}}};return a}}let kn=null;function Pd(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function As(t,e,n=!1){const s=me||Re;if(s||kn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:kn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&D(e)?e.call(s&&s.proxy):e}}const xc={},Oc=()=>Object.create(xc),Pc=t=>Object.getPrototypeOf(t)===xc;function Dd(t,e,n,s=!1){const i={},r=Oc();t.propsDefaults=Object.create(null),Dc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Md(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=W(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(li(t.emitsOptions,d))continue;const _=e[d];if(a)if(U(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const I=hn(d);i[I]=dr(a,l,I,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Dc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!U(e,h)&&((u=qt(h))===h||!U(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=dr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!U(e,h))&&(delete r[h],c=!0)}c&&Ze(t.attrs,"set","")}function Dc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Pn(a))continue;const c=e[a];let u;i&&U(i,u=hn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:li(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=W(n),c=l||J;for(let u=0;u<r.length;u++){const h=r[u];n[h]=dr(i,a,h,c[h],t,!U(c,h))}}return o}function dr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=U(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&D(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=os(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===qt(n))&&(s=!0))}return s}function Mc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!D(t)){const u=h=>{a=!0;const[d,_]=Mc(h,e,!0);he(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,rn),rn;if(O(r))for(let u=0;u<r.length;u++){const h=hn(r[u]);gl(h)&&(o[h]=J)}else if(r)for(const u in r){const h=hn(u);if(gl(h)){const d=r[u],_=o[h]=O(d)||D(d)?{type:d}:he({},d);if(_){const I=vl(Boolean,_.type),R=vl(String,_.type);_[0]=I>-1,_[1]=R<0||I<R,(I>-1||U(_,"default"))&&l.push(h)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function gl(t){return t[0]!=="$"&&!Pn(t)}function ml(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function yl(t,e){return ml(t)===ml(e)}function vl(t,e){return O(e)?e.findIndex(n=>yl(n,t)):D(e)&&yl(e,t)?0:-1}const kc=t=>t[0]==="_"||t==="$stable",Xr=t=>O(t)?t.map(Ke):[Ke(t)],kd=(t,e,n)=>{if(e._n)return e;const s=td((...i)=>Xr(e(...i)),n);return s._c=!1,s},Lc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(kc(i))continue;const r=t[i];if(D(r))e[i]=kd(i,r,s);else if(r!=null){const o=Xr(r);e[i]=()=>o}}},Fc=(t,e)=>{const n=Xr(e);t.slots.default=()=>n},Ld=(t,e)=>{const n=t.slots=Oc();if(t.vnode.shapeFlag&32){const s=e._;s?(he(n,e),Ya(n,"_",s,!0)):Lc(e,n)}else e&&Fc(t,e)},Fd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=J;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(he(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Lc(e,i)),o=e}else e&&(Fc(t,e),o={default:1});if(r)for(const l in i)!kc(l)&&o[l]==null&&delete i[l]};function pr(t,e,n,s,i=!1){if(O(t)){t.forEach((d,_)=>pr(d,e&&(O(e)?e[_]:e),n,s,i));return}if(Rs(s)&&!i)return;const r=s.shapeFlag&4?hi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===J?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(oe(c)?(u[c]=null,U(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),D(a))ft(a,l,12,[o,u]);else{const d=oe(a),_=pe(a);if(d||_){const I=()=>{if(t.f){const R=d?U(h,a)?h[a]:u[a]:a.value;i?O(R)&&Br(R,r):O(R)?R.includes(r)||R.push(r):d?(u[a]=[r],U(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,U(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,ve(I,n)):I()}}}const ve=ad;function Ud(t){return Bd(t)}function Bd(t,e){const n=Qa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ne,insertStaticContent:I}=t,R=(f,p,g,m=null,y=null,w=null,T=void 0,C=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!Sn(f,p)&&(m=gs(f),Ve(f,y,w,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:v,ref:S,shapeFlag:N}=p;switch(v){case ci:H(f,p,g,m);break;case qn:Y(f,p,g,m);break;case Li:f==null&&ne(p,g,m,T);break;case Ge:ds(f,p,g,m,y,w,T,C,E);break;default:N&1?Ae(f,p,g,m,y,w,T,C,E):N&6?ps(f,p,g,m,y,w,T,C,E):(N&64||N&128)&&v.process(f,p,g,m,y,w,T,C,E,En)}S!=null&&y&&pr(S,f&&f.ref,w,p||f,!p)},H=(f,p,g,m)=>{if(f==null)s(p.el=l(p.children),g,m);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},Y=(f,p,g,m)=>{f==null?s(p.el=a(p.children||""),g,m):p.el=f.el},ne=(f,p,g,m)=>{[f.el,f.anchor]=I(f.children,p,g,m,f.el,f.anchor)},V=({el:f,anchor:p},g,m)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,m),f=y;s(p,g,m)},se=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Ae=(f,p,g,m,y,w,T,C,E)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?$(p,g,m,y,w,T,C,E):Ai(f,p,y,w,T,C,E)},$=(f,p,g,m,y,w,T,C)=>{let E,v;const{props:S,shapeFlag:N,transition:A,dirs:P}=f;if(E=f.el=o(f.type,w,S&&S.is,S),N&8?u(E,f.children):N&16&&He(f.children,E,null,m,y,ki(f,w),T,C),P&&At(f,null,m,"created"),Qe(E,f,f.scopeId,T,m),S){for(const j in S)j!=="value"&&!Pn(j)&&r(E,j,null,S[j],w,f.children,m,y,Je);"value"in S&&r(E,"value",null,S.value,w),(v=S.onVnodeBeforeMount)&&je(v,m,f)}P&&At(f,null,m,"beforeMount");const F=$d(y,A);F&&A.beforeEnter(E),s(E,p,g),((v=S&&S.onVnodeMounted)||F||P)&&ve(()=>{v&&je(v,m,f),F&&A.enter(E),P&&At(f,null,m,"mounted")},y)},Qe=(f,p,g,m,y)=>{if(g&&_(f,g),m)for(let w=0;w<m.length;w++)_(f,m[w]);if(y){let w=y.subTree;if(p===w){const T=y.vnode;Qe(f,T,T.scopeId,T.slotScopeIds,y.parent)}}},He=(f,p,g,m,y,w,T,C,E=0)=>{for(let v=E;v<f.length;v++){const S=f[v]=C?ct(f[v]):Ke(f[v]);R(null,S,p,g,m,y,w,T,C)}},Ai=(f,p,g,m,y,w,T)=>{const C=p.el=f.el;let{patchFlag:E,dynamicChildren:v,dirs:S}=p;E|=f.patchFlag&16;const N=f.props||J,A=p.props||J;let P;if(g&&Nt(g,!1),(P=A.onVnodeBeforeUpdate)&&je(P,g,p,f),S&&At(p,f,g,"beforeUpdate"),g&&Nt(g,!0),v?Tt(f.dynamicChildren,v,C,g,m,ki(p,y),w):T||K(f,p,C,null,g,m,ki(p,y),w,!1),E>0){if(E&16)wn(C,p,N,A,g,m,y);else if(E&2&&N.class!==A.class&&r(C,"class",null,A.class,y),E&4&&r(C,"style",N.style,A.style,y),E&8){const F=p.dynamicProps;for(let j=0;j<F.length;j++){const X=F[j],le=N[X],Oe=A[X];(Oe!==le||X==="value")&&r(C,X,le,Oe,y,f.children,g,m,Je)}}E&1&&f.children!==p.children&&u(C,p.children)}else!T&&v==null&&wn(C,p,N,A,g,m,y);((P=A.onVnodeUpdated)||S)&&ve(()=>{P&&je(P,g,p,f),S&&At(p,f,g,"updated")},m)},Tt=(f,p,g,m,y,w,T)=>{for(let C=0;C<p.length;C++){const E=f[C],v=p[C],S=E.el&&(E.type===Ge||!Sn(E,v)||E.shapeFlag&70)?h(E.el):g;R(E,v,S,null,m,y,w,T,!0)}},wn=(f,p,g,m,y,w,T)=>{if(g!==m){if(g!==J)for(const C in g)!Pn(C)&&!(C in m)&&r(f,C,g[C],null,T,p.children,y,w,Je);for(const C in m){if(Pn(C))continue;const E=m[C],v=g[C];E!==v&&C!=="value"&&r(f,C,v,E,T,p.children,y,w,Je)}"value"in m&&r(f,"value",g.value,m.value,T)}},ds=(f,p,g,m,y,w,T,C,E)=>{const v=p.el=f?f.el:l(""),S=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:P}=p;P&&(C=C?C.concat(P):P),f==null?(s(v,g,m),s(S,g,m),He(p.children||[],g,S,y,w,T,C,E)):N>0&&N&64&&A&&f.dynamicChildren?(Tt(f.dynamicChildren,A,g,y,w,T,C),(p.key!=null||y&&p===y.subTree)&&Uc(f,p,!0)):K(f,p,g,S,y,w,T,C,E)},ps=(f,p,g,m,y,w,T,C,E)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?y.ctx.activate(p,g,m,T,E):Ni(p,g,m,y,w,T,E):Ko(f,p,E)},Ni=(f,p,g,m,y,w,T)=>{const C=f.component=Jd(f,m,y);if(Ic(f)&&(C.ctx.renderer=En),Xd(C),C.asyncDep){if(y&&y.registerDep(C,_e),!f.el){const E=C.subTree=Bt(qn);Y(null,E,p,g)}}else _e(C,f,p,g,y,w,T)},Ko=(f,p,g)=>{const m=p.component=f.component;if(id(f,p,g))if(m.asyncDep&&!m.asyncResolved){Z(m,p,g);return}else m.next=p,Jf(m.update),m.effect.dirty=!0,m.update();else p.el=f.el,m.vnode=p},_e=(f,p,g,m,y,w,T)=>{const C=()=>{if(f.isMounted){let{next:S,bu:N,u:A,parent:P,vnode:F}=f;{const Jt=Bc(f);if(Jt){S&&(S.el=F.el,Z(f,S,T)),Jt.asyncDep.then(()=>{f.isUnmounted||C()});return}}let j=S,X;Nt(f,!1),S?(S.el=F.el,Z(f,S,T)):S=F,N&&Ts(N),(X=S.props&&S.props.onVnodeBeforeUpdate)&&je(X,P,S,F),Nt(f,!0);const le=Di(f),Oe=f.subTree;f.subTree=le,R(Oe,le,h(Oe.el),gs(Oe),f,y,w),S.el=le.el,j===null&&rd(f,le.el),A&&ve(A,y),(X=S.props&&S.props.onVnodeUpdated)&&ve(()=>je(X,P,S,F),y)}else{let S;const{el:N,props:A}=p,{bm:P,m:F,parent:j}=f,X=Rs(p);if(Nt(f,!1),P&&Ts(P),!X&&(S=A&&A.onVnodeBeforeMount)&&je(S,j,p),Nt(f,!0),N&&Qo){const le=()=>{f.subTree=Di(f),Qo(N,f.subTree,f,y,null)};X?p.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=Di(f);R(null,le,g,m,f,y,w),p.el=le.el}if(F&&ve(F,y),!X&&(S=A&&A.onVnodeMounted)){const le=p;ve(()=>je(S,j,le),y)}(p.shapeFlag&256||j&&Rs(j.vnode)&&j.vnode.shapeFlag&256)&&f.a&&ve(f.a,y),f.isMounted=!0,p=g=m=null}},E=f.effect=new Vr(C,Ne,()=>Qr(v),f.scope),v=f.update=()=>{E.dirty&&E.run()};v.id=f.uid,Nt(f,!0),v()},Z=(f,p,g)=>{p.component=f;const m=f.vnode.props;f.vnode=p,f.next=null,Md(f,p.props,m,g),Fd(f,p.children,g),wt(),cl(f),Et()},K=(f,p,g,m,y,w,T,C,E=!1)=>{const v=f&&f.children,S=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:P}=p;if(A>0){if(A&128){_s(v,N,g,m,y,w,T,C,E);return}else if(A&256){St(v,N,g,m,y,w,T,C,E);return}}P&8?(S&16&&Je(v,y,w),N!==v&&u(g,N)):S&16?P&16?_s(v,N,g,m,y,w,T,C,E):Je(v,y,w,!0):(S&8&&u(g,""),P&16&&He(N,g,m,y,w,T,C,E))},St=(f,p,g,m,y,w,T,C,E)=>{f=f||rn,p=p||rn;const v=f.length,S=p.length,N=Math.min(v,S);let A;for(A=0;A<N;A++){const P=p[A]=E?ct(p[A]):Ke(p[A]);R(f[A],P,g,null,y,w,T,C,E)}v>S?Je(f,y,w,!0,!1,N):He(p,g,m,y,w,T,C,E,N)},_s=(f,p,g,m,y,w,T,C,E)=>{let v=0;const S=p.length;let N=f.length-1,A=S-1;for(;v<=N&&v<=A;){const P=f[v],F=p[v]=E?ct(p[v]):Ke(p[v]);if(Sn(P,F))R(P,F,g,null,y,w,T,C,E);else break;v++}for(;v<=N&&v<=A;){const P=f[N],F=p[A]=E?ct(p[A]):Ke(p[A]);if(Sn(P,F))R(P,F,g,null,y,w,T,C,E);else break;N--,A--}if(v>N){if(v<=A){const P=A+1,F=P<S?p[P].el:m;for(;v<=A;)R(null,p[v]=E?ct(p[v]):Ke(p[v]),g,F,y,w,T,C,E),v++}}else if(v>A)for(;v<=N;)Ve(f[v],y,w,!0),v++;else{const P=v,F=v,j=new Map;for(v=F;v<=A;v++){const Se=p[v]=E?ct(p[v]):Ke(p[v]);Se.key!=null&&j.set(Se.key,v)}let X,le=0;const Oe=A-F+1;let Jt=!1,Jo=0;const In=new Array(Oe);for(v=0;v<Oe;v++)In[v]=0;for(v=P;v<=N;v++){const Se=f[v];if(le>=Oe){Ve(Se,y,w,!0);continue}let We;if(Se.key!=null)We=j.get(Se.key);else for(X=F;X<=A;X++)if(In[X-F]===0&&Sn(Se,p[X])){We=X;break}We===void 0?Ve(Se,y,w,!0):(In[We-F]=v+1,We>=Jo?Jo=We:Jt=!0,R(Se,p[We],g,null,y,w,T,C,E),le++)}const Xo=Jt?Hd(In):rn;for(X=Xo.length-1,v=Oe-1;v>=0;v--){const Se=F+v,We=p[Se],Zo=Se+1<S?p[Se+1].el:m;In[v]===0?R(null,We,g,Zo,y,w,T,C,E):Jt&&(X<0||v!==Xo[X]?Rt(We,g,Zo,2):X--)}}},Rt=(f,p,g,m,y=null)=>{const{el:w,type:T,transition:C,children:E,shapeFlag:v}=f;if(v&6){Rt(f.component.subTree,p,g,m);return}if(v&128){f.suspense.move(p,g,m);return}if(v&64){T.move(f,p,g,En);return}if(T===Ge){s(w,p,g);for(let N=0;N<E.length;N++)Rt(E[N],p,g,m);s(f.anchor,p,g);return}if(T===Li){V(f,p,g);return}if(m!==2&&v&1&&C)if(m===0)C.beforeEnter(w),s(w,p,g),ve(()=>C.enter(w),y);else{const{leave:N,delayLeave:A,afterLeave:P}=C,F=()=>s(w,p,g),j=()=>{N(w,()=>{F(),P&&P()})};A?A(w,F,j):j()}else s(w,p,g)},Ve=(f,p,g,m=!1,y=!1)=>{const{type:w,props:T,ref:C,children:E,dynamicChildren:v,shapeFlag:S,patchFlag:N,dirs:A}=f;if(C!=null&&pr(C,null,g,f,!0),S&256){p.ctx.deactivate(f);return}const P=S&1&&A,F=!Rs(f);let j;if(F&&(j=T&&T.onVnodeBeforeUnmount)&&je(j,p,f),S&6)af(f.component,g,m);else{if(S&128){f.suspense.unmount(g,m);return}P&&At(f,null,p,"beforeUnmount"),S&64?f.type.remove(f,p,g,y,En,m):v&&(w!==Ge||N>0&&N&64)?Je(v,p,g,!1,!0):(w===Ge&&N&384||!y&&S&16)&&Je(E,p,g),m&&qo(f)}(F&&(j=T&&T.onVnodeUnmounted)||P)&&ve(()=>{j&&je(j,p,f),P&&At(f,null,p,"unmounted")},g)},qo=f=>{const{type:p,el:g,anchor:m,transition:y}=f;if(p===Ge){lf(g,m);return}if(p===Li){se(f);return}const w=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:C}=y,E=()=>T(g,w);C?C(f.el,w,E):E()}else w()},lf=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},af=(f,p,g)=>{const{bum:m,scope:y,update:w,subTree:T,um:C}=f;m&&Ts(m),y.stop(),w&&(w.active=!1,Ve(T,f,p,g)),C&&ve(C,p),ve(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Je=(f,p,g,m=!1,y=!1,w=0)=>{for(let T=w;T<f.length;T++)Ve(f[T],p,g,m,y)},gs=f=>f.shapeFlag&6?gs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let xi=!1;const zo=(f,p,g)=>{f==null?p._vnode&&Ve(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),xi||(xi=!0,cl(),yc(),xi=!1),p._vnode=f},En={p:R,um:Ve,m:Rt,r:qo,mt:Ni,mc:He,pc:K,pbc:Tt,n:gs,o:t};let Yo,Qo;return{render:zo,hydrate:Yo,createApp:Od(zo,Yo)}}function ki({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $d(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uc(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ct(i[r]),l.el=o.el),n||Uc(o,l)),l.type===ci&&(l.el=o.el)}}function Hd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Bc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bc(e)}const Vd=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),ci=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Li=Symbol.for("v-stc"),Ln=[];let ke=null;function Fi(t=!1){Ln.push(ke=t?null:[])}function Wd(){Ln.pop(),ke=Ln[Ln.length-1]||null}let zn=1;function bl(t){zn+=t}function jd(t){return t.dynamicChildren=zn>0?ke||rn:null,Wd(),zn>0&&ke&&ke.push(t),t}function Ui(t,e,n,s,i,r){return jd(De(t,e,n,s,i,r,!0))}function Gd(t){return t?t.__v_isVNode===!0:!1}function Sn(t,e){return t.type===e.type&&t.key===e.key}const $c=({key:t})=>t??null,Ns=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||pe(t)||D(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function De(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$c(e),ref:e&&Ns(e),scopeId:Cc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(Zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),zn>0&&!o&&ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ke.push(a),a}const Bt=Kd;function Kd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===od)&&(t=qn),Gd(t)){const l=fn(t,e,!0);return n&&Zr(l,n),zn>0&&!r&&ke&&(l.shapeFlag&6?ke[ke.indexOf(t)]=l:ke.push(l)),l.patchFlag|=-2,l}if(np(t)&&(t=t.__vccOpts),e){e=qd(e);let{class:l,style:a}=e;l&&!oe(l)&&(e.class=si(l)),ee(a)&&(fc(a)&&!O(a)&&(a=he({},a)),e.style=Hr(a))}const o=oe(t)?1:ld(t)?128:Vd(t)?64:ee(t)?4:D(t)?2:0;return De(t,e,n,s,i,o,r,!0)}function qd(t){return t?fc(t)||Pc(t)?he({},t):t:null}function fn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?zd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$c(c),ref:e&&e.ref?n&&r?O(r)?r.concat(Ns(e)):[r,Ns(e)]:Ns(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&(u.transition=a.clone(u)),u}function Hc(t=" ",e=0){return Bt(ci,null,t,e)}function Ke(t){return t==null||typeof t=="boolean"?Bt(qn):O(t)?Bt(Ge,null,t.slice()):typeof t=="object"?ct(t):Bt(ci,null,String(t))}function ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function Zr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Zr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Pc(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[Hc(e)]):n=8);t.children=e,t.shapeFlag|=n}function zd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=si([e.class,s.class]));else if(i==="style")e.style=Hr([e.style,s.style]);else if(ei(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function je(t,e,n,s=null){Ue(t,e,7,[n,s])}const Yd=Nc();let Qd=0;function Jd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yd,r={uid:Qd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mc(s,i),emitsOptions:bc(s,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let me=null,ks,_r;{const t=Qa(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ks=e("__VUE_INSTANCE_SETTERS__",n=>me=n),_r=e("__VUE_SSR_SETTERS__",n=>ui=n)}const os=t=>{const e=me;return ks(t),t.scope.on(),()=>{t.scope.off(),ks(e)}},Cl=()=>{me&&me.scope.off(),ks(null)};function Vc(t){return t.vnode.shapeFlag&4}let ui=!1;function Xd(t,e=!1){e&&_r(e);const{props:n,children:s}=t.vnode,i=Vc(t);Dd(t,n,i,e),Ld(t,s);const r=i?Zd(t,e):void 0;return e&&_r(!1),r}function Zd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Id);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?tp(t):null,r=os(t);wt();const o=ft(s,t,0,[t.props,i]);if(Et(),r(),Ga(o)){if(o.then(Cl,Cl),e)return o.then(l=>{wl(t,l,e)}).catch(l=>{oi(l,t,0)});t.asyncDep=o}else wl(t,o,e)}else Wc(t,e)}function wl(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=_c(e)),Wc(t,n)}let El;function Wc(t,e,n){const s=t.type;if(!t.render){if(!e&&El&&!s.render){const i=s.template||Jr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=he(he({isCustomElement:r,delimiters:l},o),a);s.render=El(i,c)}}t.render=s.render||Ne}{const i=os(t);wt();try{Td(t)}finally{Et(),i()}}}const ep={get(t,e){return Ee(t,"get",""),t[e]}};function tp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ep),slots:t.slots,emit:t.emit,expose:e}}function hi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_c(Wf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mn)return Mn[n](t)},has(e,n){return n in e||n in Mn}}))}function np(t){return D(t)&&"__vccOpts"in t}const jc=(t,e)=>jf(t,e,ui),sp="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ip="http://www.w3.org/2000/svg",rp="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Il=ut&&ut.createElement("template"),op={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ut.createElementNS(ip,t):e==="mathml"?ut.createElementNS(rp,t):ut.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Il.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Il.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lp=Symbol("_vtc");function ap(t,e,n){const s=t[lp];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tl=Symbol("_vod"),cp=Symbol("_vsh"),up=Symbol(""),hp=/(^|;)\s*display\s*:/;function fp(t,e,n){const s=t.style,i=oe(n);let r=!1;if(n&&!i){if(e)if(oe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&xs(s,l,"")}else for(const o in e)n[o]==null&&xs(s,o,"");for(const o in n)o==="display"&&(r=!0),xs(s,o,n[o])}else if(i){if(e!==n){const o=s[up];o&&(n+=";"+o),s.cssText=n,r=hp.test(n)}}else e&&t.removeAttribute("style");Tl in t&&(t[Tl]=r?s.display:"",t[cp]&&(s.display="none"))}const Sl=/\s*!important$/;function xs(t,e,n){if(O(n))n.forEach(s=>xs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dp(t,e);Sl.test(n)?t.setProperty(qt(s),n.replace(Sl,""),"important"):t[s]=n}}const Rl=["Webkit","Moz","ms"],Bi={};function dp(t,e){const n=Bi[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return Bi[e]=s;s=za(s);for(let i=0;i<Rl.length;i++){const r=Rl[i]+s;if(r in t)return Bi[e]=r}return e}const Al="http://www.w3.org/1999/xlink";function pp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Al,e.slice(6,e.length)):t.setAttributeNS(Al,e,n);else{const r=vf(e);n==null||r&&!Ja(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _p(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ja(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function nn(t,e,n,s){t.addEventListener(e,n,s)}function gp(t,e,n,s){t.removeEventListener(e,n,s)}const Nl=Symbol("_vei");function mp(t,e,n,s,i=null){const r=t[Nl]||(t[Nl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=yp(e);if(s){const c=r[e]=Cp(s,i);nn(t,l,c,a)}else o&&(gp(t,l,o,a),r[e]=void 0)}}const xl=/(?:Once|Passive|Capture)$/;function yp(t){let e;if(xl.test(t)){e={};let s;for(;s=t.match(xl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qt(t.slice(2)),e]}let $i=0;const vp=Promise.resolve(),bp=()=>$i||(vp.then(()=>$i=0),$i=Date.now());function Cp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ue(wp(s,n.value),e,5,[s])};return n.value=t,n.attached=bp(),n}function wp(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ep=(t,e,n,s,i,r,o,l,a)=>{const c=i==="svg";e==="class"?ap(t,s,c):e==="style"?fp(t,n,s):ei(e)?Ur(e)||mp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ip(t,e,s,c))?_p(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pp(t,e,s,c))};function Ip(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ol(e)&&D(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ol(e)&&oe(n)?!1:e in t}const Pl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>Ts(e,n):e};function Tp(t){t.target.composing=!0}function Dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign"),Ml={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Hi]=Pl(i);const r=s||i.props&&i.props.type==="number";nn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ir(l)),t[Hi](l)}),n&&nn(t,"change",()=>{t.value=t.value.trim()}),e||(nn(t,"compositionstart",Tp),nn(t,"compositionend",Dl),nn(t,"change",Dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Hi]=Pl(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?ir(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},Sp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=qt(i.key);if(e.some(o=>o===r||Sp[o]===r))return t(i)})},Ap=he({patchProp:Ep},op);let kl;function Np(){return kl||(kl=Ud(Ap))}const xp=(...t)=>{const e=Np().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pp(s);if(!i)return;const r=e._component;!D(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Op(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Op(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pp(t){return oe(t)?document.querySelector(t):t}function Dp(){return Gc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Gc(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Mp=typeof Proxy=="function",kp="devtools-plugin:setup",Lp="plugin:settings:set";let Xt,gr;function Fp(){var t;return Xt!==void 0||(typeof window<"u"&&window.performance?(Xt=!0,gr=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Xt=!0,gr=globalThis.perf_hooks.performance):Xt=!1),Xt}function Up(){return Fp()?gr.now():Date.now()}class Bp{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const l=e.settings[o];s[o]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),l=JSON.parse(o);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Up()}},n&&n.on(Lp,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function $p(t,e){const n=t,s=Gc(),i=Dp(),r=Mp&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(kp,t,e);else{const o=r?new Bp(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Hp="store";function mn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Vp(t){return t!==null&&typeof t=="object"}function Wp(t){return t&&typeof t.then=="function"}function jp(t,e){return function(){return t(e)}}function Kc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function qc(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;fi(t,n,[],t._modules.root,!0),eo(t,n,e)}function eo(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},l={},a=bf(!0);a.run(function(){mn(r,function(c,u){o[u]=jp(c,t),l[u]=jc(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return l[u].value},enumerable:!0})})}),t._state=ri({data:e}),t._scope=a,t.strict&&Yp(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function fi(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var l=to(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit(function(){l[a]=s.state})}var c=s.context=Gp(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Kp(t,d,u,c)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;qp(t,d,_,c)}),s.forEachGetter(function(u,h){var d=o+h;zp(t,d,u,c)}),s.forEachChild(function(u,h){fi(t,e,n.concat(h),u,i)})}function Gp(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,l){var a=Ls(r,o,l),c=a.payload,u=a.options,h=a.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,l){var a=Ls(r,o,l),c=a.payload,u=a.options,h=a.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return zc(t,e)}},state:{get:function(){return to(t.state,n)}}}),i}function zc(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Kp(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function qp(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var l=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Wp(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(a){throw t._devtoolHook.emit("vuex:error",a),a}):l})}function zp(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Yp(t){an(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function to(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ls(t,e,n){return Vp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Qp="vuex bindings",Ll="vuex:mutations",Vi="vuex:actions",Zt="vuex",Jp=0;function Xp(t,e){$p({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Qp]},function(n){n.addTimelineLayer({id:Ll,label:"Vuex Mutations",color:Fl}),n.addTimelineLayer({id:Vi,label:"Vuex Actions",color:Fl}),n.addInspector({id:Zt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Zt)if(s.filter){var i=[];Xc(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Jc(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Zt){var i=s.nodeId;zc(e,i),s.state=t_(s_(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Zt){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Zt),n.sendInspectorState(Zt),n.addTimelineEvent({layerId:Ll,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Jp++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Vi,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Vi,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Fl=8702998,Zp=6710886,e_=16777215,Yc={label:"namespaced",textColor:e_,backgroundColor:Zp};function Qc(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Jc(t,e){return{id:e||"root",label:Qc(e),tags:t.namespaced?[Yc]:[],children:Object.keys(t._children).map(function(n){return Jc(t._children[n],e+n+"/")})}}function Xc(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Yc]:[]}),Object.keys(e._children).forEach(function(i){Xc(t,e._children[i],n,s+i+"/")})}function t_(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=n_(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Qc(o):o,editable:!1,value:mr(function(){return r[o]})}})}return i}function n_(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=mr(function(){return t[n]})}else e[n]=mr(function(){return t[n]})}),e}function s_(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function mr(t){try{return t()}catch(e){return e}}var $e=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Zc={namespaced:{configurable:!0}};Zc.namespaced.get=function(){return!!this._rawModule.namespaced};$e.prototype.addChild=function(e,n){this._children[e]=n};$e.prototype.removeChild=function(e){delete this._children[e]};$e.prototype.getChild=function(e){return this._children[e]};$e.prototype.hasChild=function(e){return e in this._children};$e.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};$e.prototype.forEachChild=function(e){mn(this._children,e)};$e.prototype.forEachGetter=function(e){this._rawModule.getters&&mn(this._rawModule.getters,e)};$e.prototype.forEachAction=function(e){this._rawModule.actions&&mn(this._rawModule.actions,e)};$e.prototype.forEachMutation=function(e){this._rawModule.mutations&&mn(this._rawModule.mutations,e)};Object.defineProperties($e.prototype,Zc);var zt=function(e){this.register([],e,!1)};zt.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};zt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};zt.prototype.update=function(e){eu([],this.root,e)};zt.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new $e(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&mn(n.modules,function(l,a){i.register(e.concat(a),l,s)})};zt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};zt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function eu(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;eu(t.concat(s),e.getChild(s),n.modules[s])}}function i_(t){return new Te(t)}var Te=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,l=this,a=l.dispatch,c=l.commit;this.dispatch=function(d,_){return a.call(o,d,_)},this.commit=function(d,_,I){return c.call(o,d,_,I)},this.strict=i;var u=this._modules.root.state;fi(this,u,[],this._modules.root),eo(this,u),s.forEach(function(h){return h(n)})},no={state:{configurable:!0}};Te.prototype.install=function(e,n){e.provide(n||Hp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Xp(e,this)};no.state.get=function(){return this._state.data};no.state.set=function(t){};Te.prototype.commit=function(e,n,s){var i=this,r=Ls(e,n,s),o=r.type,l=r.payload,a={type:o,payload:l},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(l)})}),this._subscribers.slice().forEach(function(u){return u(a,i.state)}))};Te.prototype.dispatch=function(e,n){var s=this,i=Ls(e,n),r=i.type,o=i.payload,l={type:r,payload:o},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(l,s.state)})}catch{}var c=a.length>1?Promise.all(a.map(function(u){return u(o)})):a[0](o);return new Promise(function(u,h){c.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(l,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(l,s.state,d)})}catch{}h(d)})})}};Te.prototype.subscribe=function(e,n){return Kc(e,this._subscribers,n)};Te.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Kc(s,this._actionSubscribers,n)};Te.prototype.watch=function(e,n,s){var i=this;return an(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Te.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Te.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),fi(this,this.state,e,this._modules.get(e),s.preserveState),eo(this,this.state)};Te.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=to(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),qc(this)};Te.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Te.prototype.hotUpdate=function(e){this._modules.update(e),qc(this,!0)};Te.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Te.prototype,no);var Ul={};/**
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
 */const tu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw yn(e)},yn=function(t){return new Error("Firebase Database ("+tu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},so={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new o_;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const su=function(t){const e=nu(t);return so.encodeByteArray(e,!0)},Fs=function(t){return su(t).replace(/\./g,"")},yr=function(t){try{return so.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function l_(t){return iu(void 0,t)}function iu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!a_(n)||(t[n]=iu(t[n],e[n]));return t}function a_(t){return t!=="__proto__"}/**
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
 */function c_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u_=()=>c_().__FIREBASE_DEFAULTS__,h_=()=>{if(typeof process>"u"||typeof Ul>"u")return;const t=Ul.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yr(t[1]);return e&&JSON.parse(e)},ru=()=>{try{return u_()||h_()||f_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d_=t=>{var e,n;return(n=(e=ru())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p_=t=>{const e=d_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ou=()=>{var t;return(t=ru())===null||t===void 0?void 0:t.config};/**
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
 */class di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function __(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),""].join(".")}/**
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
 */function g_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g_())}function m_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function au(){return tu.NODE_ADMIN===!0}function cu(){try{return typeof indexedDB=="object"}catch{return!1}}function uu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function v_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const b_="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=b_,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?C_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,l,s)}}function C_(t,e){return t.replace(w_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const w_=/\{\$([^}]+)}/g;/**
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
 */function Yn(t){return JSON.parse(t)}function ie(t){return JSON.stringify(t)}/**
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
 */const hu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Yn(yr(r[0])||""),n=Yn(yr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},E_=function(t){const e=hu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},I_=function(t){const e=hu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($l(r)&&$l(o)){if(!vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $l(t){return t!==null&&typeof t=="object"}/**
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
 */function T_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class S_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function io(t,e){return`${t} failed: ${e} argument `}/**
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
 */const R_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const A_=1e3,N_=2,x_=4*60*60*1e3,O_=.5;function Hl(t,e=A_,n=N_){const s=e*Math.pow(n,t),i=Math.round(O_*s*(Math.random()-.5)*2);return Math.min(x_,s+i)}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class P_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new di;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M_(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:D_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D_(t){return t===xt?void 0:t}function M_(t){return t.instantiationMode==="EAGER"}/**
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
 */class k_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const L_={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},F_=q.INFO,U_={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},B_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=U_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ro{constructor(e){this.name=e,this._logLevel=F_,this._logHandler=B_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const $_=(t,e)=>e.some(n=>t instanceof n);let Vl,Wl;function H_(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V_(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fu=new WeakMap,br=new WeakMap,du=new WeakMap,Wi=new WeakMap,oo=new WeakMap;function W_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(dt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fu.set(n,t)}).catch(()=>{}),oo.set(e,t),e}function j_(t){if(br.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});br.set(t,e)}let Cr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return br.get(t);if(e==="objectStoreNames")return t.objectStoreNames||du.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G_(t){Cr=t(Cr)}function K_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return du.set(s,e.sort?e.sort():[e]),dt(s)}:V_().includes(t)?function(...e){return t.apply(ji(this),e),dt(fu.get(this))}:function(...e){return dt(t.apply(ji(this),e))}}function q_(t){return typeof t=="function"?K_(t):(t instanceof IDBTransaction&&j_(t),$_(t,H_())?new Proxy(t,Cr):t)}function dt(t){if(t instanceof IDBRequest)return W_(t);if(Wi.has(t))return Wi.get(t);const e=q_(t);return e!==t&&(Wi.set(t,e),oo.set(e,t)),e}const ji=t=>oo.get(t);function pu(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=dt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(dt(o.result),a.oldVersion,a.newVersion,dt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const z_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Gi=new Map;function jl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Y_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||z_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Gi.set(e,r),r}G_(t=>({...t,get:(e,n,s)=>jl(e,n)||t.get(e,n,s),has:(e,n)=>!!jl(e,n)||t.has(e,n)}));/**
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
 */class Q_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function J_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wr="@firebase/app",Gl="0.10.2";/**
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
 */const $t=new ro("@firebase/app"),X_="@firebase/app-compat",Z_="@firebase/analytics-compat",eg="@firebase/analytics",tg="@firebase/app-check-compat",ng="@firebase/app-check",sg="@firebase/auth",ig="@firebase/auth-compat",rg="@firebase/database",og="@firebase/database-compat",lg="@firebase/functions",ag="@firebase/functions-compat",cg="@firebase/installations",ug="@firebase/installations-compat",hg="@firebase/messaging",fg="@firebase/messaging-compat",dg="@firebase/performance",pg="@firebase/performance-compat",_g="@firebase/remote-config",gg="@firebase/remote-config-compat",mg="@firebase/storage",yg="@firebase/storage-compat",vg="@firebase/firestore",bg="@firebase/firestore-compat",Cg="firebase",wg="10.11.1";/**
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
 */const Er="[DEFAULT]",Eg={[wr]:"fire-core",[X_]:"fire-core-compat",[eg]:"fire-analytics",[Z_]:"fire-analytics-compat",[ng]:"fire-app-check",[tg]:"fire-app-check-compat",[sg]:"fire-auth",[ig]:"fire-auth-compat",[rg]:"fire-rtdb",[og]:"fire-rtdb-compat",[lg]:"fire-fn",[ag]:"fire-fn-compat",[cg]:"fire-iid",[ug]:"fire-iid-compat",[hg]:"fire-fcm",[fg]:"fire-fcm-compat",[dg]:"fire-perf",[pg]:"fire-perf-compat",[_g]:"fire-rc",[gg]:"fire-rc-compat",[mg]:"fire-gcs",[yg]:"fire-gcs-compat",[vg]:"fire-fst",[bg]:"fire-fst-compat","fire-js":"fire-js",[Cg]:"fire-js-all"};/**
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
 */const Bs=new Map,Ig=new Map,Ir=new Map;function Kl(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(Ir.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Ir.set(e,t);for(const n of Bs.values())Kl(n,t);for(const n of Ig.values())Kl(n,t);return!0}function lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pt=new pi("app","Firebase",Tg);/**
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
 */class Sg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Rg=wg;function _u(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Er,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pt.create("bad-app-name",{appName:String(i)});if(n||(n=ou()),!n)throw pt.create("no-options");const r=Bs.get(i);if(r){if(vr(n,r.options)&&vr(s,r.config))return r;throw pt.create("duplicate-app",{appName:i})}const o=new k_(i);for(const a of Ir.values())o.addComponent(a);const l=new Sg(n,s,o);return Bs.set(i,l),l}function Ag(t=Er){const e=Bs.get(t);if(!e&&t===Er&&ou())return _u();if(!e)throw pt.create("no-app",{appName:t});return e}function ze(t,e,n){var s;let i=(s=Eg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}yt(new tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ng="firebase-heartbeat-database",xg=1,Qn="firebase-heartbeat-store";let Ki=null;function gu(){return Ki||(Ki=pu(Ng,xg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Ki}async function Og(t){try{const n=(await gu()).transaction(Qn),s=await n.objectStore(Qn).get(mu(t));return await n.done,s}catch(e){if(e instanceof Yt)$t.warn(e.message);else{const n=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function ql(t,e){try{const s=(await gu()).transaction(Qn,"readwrite");await s.objectStore(Qn).put(e,mu(t)),await s.done}catch(n){if(n instanceof Yt)$t.warn(n.message);else{const s=pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(s.message)}}}function mu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pg=1024,Dg=30*24*60*60*1e3;class Mg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Dg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zl(),{heartbeatsToSend:s,unsentEntries:i}=kg(this._heartbeatsCache.heartbeats),r=Fs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zl(){return new Date().toISOString().substring(0,10)}function kg(t,e=Pg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?uu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Og(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yl(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fg(t){yt(new tt("platform-logger",e=>new Q_(e),"PRIVATE")),yt(new tt("heartbeat",e=>new Mg(e),"PRIVATE")),ze(wr,Gl,t),ze(wr,Gl,"esm2017"),ze("fire-js","")}Fg("");var Ug="firebase",Bg="10.11.1";/**
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
 */ze(Ug,Bg,"app");const yu="@firebase/installations",ao="0.6.6";/**
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
 */const vu=1e4,bu=`w:${ao}`,Cu="FIS_v2",$g="https://firebaseinstallations.googleapis.com/v1",Hg=60*60*1e3,Vg="installations",Wg="Installations";/**
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
 */const jg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ht=new pi(Vg,Wg,jg);function wu(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
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
 */function Eu({projectId:t}){return`${$g}/projects/${t}/installations`}function Iu(t){return{token:t.token,requestStatus:2,expiresIn:Kg(t.expiresIn),creationTime:Date.now()}}async function Tu(t,e){const s=(await e.json()).error;return Ht.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Su({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gg(t,{refreshToken:e}){const n=Su(t);return n.append("Authorization",qg(e)),n}async function Ru(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Kg(t){return Number(t.replace("s","000"))}function qg(t){return`${Cu} ${t}`}/**
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
 */async function zg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Eu(t),i=Su(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Cu,appId:t.appId,sdkVersion:bu},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Ru(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Iu(c.authToken)}}else throw await Tu("Create Installation",a)}/**
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
 */function Au(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Yg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Qg=/^[cdef][\w-]{21}$/,Tr="";function Jg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Xg(t);return Qg.test(n)?n:Tr}catch{return Tr}}function Xg(t){return Yg(t).substr(0,22)}/**
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
 */function gi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Nu=new Map;function xu(t,e){const n=gi(t);Ou(n,e),Zg(n,e)}function Ou(t,e){const n=Nu.get(t);if(n)for(const s of n)s(e)}function Zg(t,e){const n=em();n&&n.postMessage({key:t,fid:e}),tm()}let Mt=null;function em(){return!Mt&&"BroadcastChannel"in self&&(Mt=new BroadcastChannel("[Firebase] FID Change"),Mt.onmessage=t=>{Ou(t.data.key,t.data.fid)}),Mt}function tm(){Nu.size===0&&Mt&&(Mt.close(),Mt=null)}/**
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
 */const nm="firebase-installations-database",sm=1,Vt="firebase-installations-store";let qi=null;function co(){return qi||(qi=pu(nm,sm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vt)}}})),qi}async function $s(t,e){const n=gi(t),i=(await co()).transaction(Vt,"readwrite"),r=i.objectStore(Vt),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xu(t,e.fid),e}async function Pu(t){const e=gi(t),s=(await co()).transaction(Vt,"readwrite");await s.objectStore(Vt).delete(e),await s.done}async function mi(t,e){const n=gi(t),i=(await co()).transaction(Vt,"readwrite"),r=i.objectStore(Vt),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&xu(t,l.fid),l}/**
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
 */async function uo(t){let e;const n=await mi(t.appConfig,s=>{const i=im(s),r=rm(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Tr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function im(t){const e=t||{fid:Jg(),registrationStatus:0};return Du(e)}function rm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ht.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=om(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lm(t)}:{installationEntry:e}}async function om(t,e){try{const n=await zg(t,e);return $s(t.appConfig,n)}catch(n){throw wu(n)&&n.customData.serverCode===409?await Pu(t.appConfig):await $s(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lm(t){let e=await Ql(t.appConfig);for(;e.registrationStatus===1;)await Au(100),e=await Ql(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await uo(t);return s||n}return e}function Ql(t){return mi(t,e=>{if(!e)throw Ht.create("installation-not-found");return Du(e)})}function Du(t){return am(t)?{fid:t.fid,registrationStatus:0}:t}function am(t){return t.registrationStatus===1&&t.registrationTime+vu<Date.now()}/**
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
 */async function cm({appConfig:t,heartbeatServiceProvider:e},n){const s=um(t,n),i=Gg(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:bu,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Ru(()=>fetch(s,l));if(a.ok){const c=await a.json();return Iu(c)}else throw await Tu("Generate Auth Token",a)}function um(t,{fid:e}){return`${Eu(t)}/${e}/authTokens:generate`}/**
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
 */async function ho(t,e=!1){let n;const s=await mi(t.appConfig,r=>{if(!Mu(r))throw Ht.create("not-registered");const o=r.authToken;if(!e&&dm(o))return r;if(o.requestStatus===1)return n=hm(t,e),r;{if(!navigator.onLine)throw Ht.create("app-offline");const l=_m(r);return n=fm(t,l),l}});return n?await n:s.authToken}async function hm(t,e){let n=await Jl(t.appConfig);for(;n.authToken.requestStatus===1;)await Au(100),n=await Jl(t.appConfig);const s=n.authToken;return s.requestStatus===0?ho(t,e):s}function Jl(t){return mi(t,e=>{if(!Mu(e))throw Ht.create("not-registered");const n=e.authToken;return gm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fm(t,e){try{const n=await cm(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await $s(t.appConfig,s),n}catch(n){if(wu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $s(t.appConfig,s)}throw n}}function Mu(t){return t!==void 0&&t.registrationStatus===2}function dm(t){return t.requestStatus===2&&!pm(t)}function pm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hg}function _m(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gm(t){return t.requestStatus===1&&t.requestTime+vu<Date.now()}/**
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
 */async function mm(t){const e=t,{installationEntry:n,registrationPromise:s}=await uo(e);return s?s.catch(console.error):ho(e).catch(console.error),n.fid}/**
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
 */async function ym(t,e=!1){const n=t;return await vm(n),(await ho(n,e)).token}async function vm(t){const{registrationPromise:e}=await uo(t);e&&await e}/**
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
 */function bm(t){if(!t||!t.options)throw zi("App Configuration");if(!t.name)throw zi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zi(t){return Ht.create("missing-app-config-values",{valueName:t})}/**
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
 */const ku="installations",Cm="installations-internal",wm=t=>{const e=t.getProvider("app").getImmediate(),n=bm(e),s=lo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Em=t=>{const e=t.getProvider("app").getImmediate(),n=lo(e,ku).getImmediate();return{getId:()=>mm(n),getToken:i=>ym(n,i)}};function Im(){yt(new tt(ku,wm,"PUBLIC")),yt(new tt(Cm,Em,"PRIVATE"))}Im();ze(yu,ao);ze(yu,ao,"esm2017");/**
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
 */const Xl="analytics",Tm="firebase_id",Sm="origin",Rm=60*1e3,Am="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new ro("@firebase/analytics");/**
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
 */const Nm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xe=new pi("analytics","Analytics",Nm);/**
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
 */function xm(t){if(!t.startsWith(fo)){const e=xe.create("invalid-gtag-resource",{gtagURL:t});return Ce.warn(e.message),""}return t}function Lu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Om(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Pm(t,e){const n=Om("firebase-js-sdk-policy",{createScriptURL:xm}),s=document.createElement("script"),i=`${fo}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Dm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Mm(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Lu(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Ce.error(l)}t("config",i,r)}async function km(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Lu(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ce.error(r)}}function Lm(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await km(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await Mm(t,e,n,s,l,a)}else if(r==="consent"){const[l]=o;t("consent","update",l)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Ce.error(l)}}return i}function Fm(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Lm(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Um(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fo)&&n.src.includes(t))return n;return null}/**
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
 */const Bm=30,$m=1e3;class Hm{constructor(e={},n=$m){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fu=new Hm;function Vm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wm(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Vm(s)},r=Am.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function jm(t,e=Fu,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw xe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw xe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qm;return setTimeout(async()=>{l.abort()},Rm),Uu({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Uu(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Fu){var r;const{appId:o,measurementId:l}=t;try{await Gm(s,e)}catch(a){if(l)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Wm(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!Km(c)){if(i.deleteThrottleMetadata(o),l)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Hl(n,i.intervalMillis,Bm):Hl(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ce.debug(`Calling attemptFetch again in ${u} millis`),Uu(t,h,s,i)}}function Gm(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Km(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zm(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function Ym(){if(cu())try{await uu()}catch(t){return Ce.warn(xe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ce.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Qm(t,e,n,s,i,r,o){var l;const a=jm(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ce.error(_)),e.push(a);const c=Ym().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);Um(r)||Pm(r,u.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[Sm]="firebase",d.update=!0,h!=null&&(d[Tm]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Jm{constructor(e){this.app=e}_delete(){return delete Fn[this.app.options.appId],Promise.resolve()}}let Fn={},Zl=[];const ea={};let Yi="dataLayer",Xm="gtag",ta,Bu,na=!1;function Zm(){const t=[];if(m_()&&t.push("This is a browser extension environment."),v_()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:e});Ce.warn(n.message)}}function ey(t,e,n){Zm();const s=t.options.appId;if(!s)throw xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(Fn[s]!=null)throw xe.create("already-exists",{id:s});if(!na){Dm(Yi);const{wrappedGtag:r,gtagCore:o}=Fm(Fn,Zl,ea,Yi,Xm);Bu=r,ta=o,na=!0}return Fn[s]=Qm(t,Zl,ea,e,ta,Yi,n),new Jm(t)}function ty(t,e,n,s){t=It(t),zm(Bu,Fn[t.app.options.appId],e,n,s).catch(i=>Ce.error(i))}const sa="@firebase/analytics",ia="0.10.2";function ny(){yt(new tt(Xl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ey(s,i,n)},"PUBLIC")),yt(new tt("analytics-internal",t,"PRIVATE")),ze(sa,ia),ze(sa,ia,"esm2017");function t(e){try{const n=e.getProvider(Xl).getImmediate();return{logEvent:(s,i,r)=>ty(n,s,i,r)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}ny();var ra={};const oa="@firebase/database",la="1.0.4";/**
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
 */let $u="";function sy(t){$u=t}/**
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
 */class iy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ry{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Hu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iy(e)}}catch{}return new ry},kt=Hu("localStorage"),oy=Hu("sessionStorage");/**
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
 */const cn=new ro("@firebase/database"),ly=function(){let t=1;return function(){return t++}}(),Vu=function(t){const e=R_(t),n=new S_;n.update(e);const s=n.digest();return so.encodeByteArray(s)},ls=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ls.apply(null,s):typeof s=="object"?e+=ie(s):e+=s,e+=" "}return e};let Un=null,aa=!0;const ay=function(t,e){b(!e,"Can't turn on custom loggers persistently."),cn.logLevel=q.VERBOSE,Un=cn.log.bind(cn)},fe=function(...t){if(aa===!0&&(aa=!1,Un===null&&oy.get("logging_enabled")===!0&&ay()),Un){const e=ls.apply(null,t);Un(e)}},as=function(t){return function(...e){fe(t,...e)}},Sr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ls(...t);cn.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${ls(...t)}`;throw cn.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+ls(...t);cn.warn(e)},cy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pn="[MIN_NAME]",Wt="[MAX_NAME]",vn=function(t,e){if(t===e)return 0;if(t===pn||e===Wt)return-1;if(e===pn||t===Wt)return 1;{const n=ca(t),s=ca(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},hy=function(t,e){return t===e?0:t<e?-1:1},Rn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ie(e))},po=function(t){if(typeof t!="object"||t===null)return ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ie(e[s]),n+=":",n+=po(t[e[s]]);return n+="}",n},ju=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gu=function(t){b(!Wu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function py(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const _y=new RegExp("^-?(0*)\\d{1,10}$"),gy=-2147483648,my=2147483647,ca=function(t){if(_y.test(t)){const e=Number(t);if(e>=gy&&e<=my)return e}return null},bn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},yy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class by{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Os{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Os.OWNER="owner";/**
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
 */const _o="5",Ku="v",qu="s",zu="r",Yu="f",Qu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ju="ls",Xu="p",Rr="ac",Zu="websocket",eh="long_polling";/**
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
 */class th{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Cy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nh(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Zu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===eh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cy(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class wy{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return l_(this.counters_)}}/**
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
 */const Qi={},Ji={};function go(t){const e=t.toString();return Qi[e]||(Qi[e]=new wy),Qi[e]}function Ey(t,e){const n=t.toString();return Ji[n]||(Ji[n]=e()),Ji[n]}/**
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
 */class Iy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ua="start",Ty="close",Sy="pLPCommand",Ry="pRTLPCB",sh="id",ih="pw",rh="ser",Ay="cb",Ny="seg",xy="ts",Oy="d",Py="dframe",oh=1870,lh=30,Dy=oh-lh,My=25e3,ky=3e4;class sn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=as(e),this.stats_=go(n),this.urlFn=a=>(this.appCheckToken&&(a[Rr]=this.appCheckToken),nh(n,eh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Iy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ky)),uy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ua)this.id=l,this.password=a;else if(o===Ty)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ua]="t",s[rh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ay]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ku]=_o,this.transportSessionId&&(s[qu]=this.transportSessionId),this.lastSessionId&&(s[Ju]=this.lastSessionId),this.applicationId&&(s[Xu]=this.applicationId),this.appCheckToken&&(s[Rr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qu.test(location.hostname)&&(s[zu]=Yu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){sn.forceAllow_=!0}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){return sn.forceAllow_?!0:!sn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fy()&&!dy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=su(n),i=ju(s,Dy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Py]="t",s[sh]=e,s[ih]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ly(),window[Sy+this.uniqueCallbackIdentifier]=e,window[Ry+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){fe("frame writing exception"),l.stack&&fe(l.stack),fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sh]=this.myID,e[ih]=this.myPW,e[rh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lh+s.length<=oh;){const o=this.pendingSegs.shift();s=s+"&"+Ny+i+"="+o.seg+"&"+xy+i+"="+o.ts+"&"+Oy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(My)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ly=16384,Fy=45e3;let Hs=null;typeof MozWebSocket<"u"?Hs=MozWebSocket:typeof WebSocket<"u"&&(Hs=WebSocket);class Me{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=as(this.connId),this.stats_=go(n),this.connURL=Me.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ku]=_o,typeof location<"u"&&location.hostname&&Qu.test(location.hostname)&&(o[zu]=Yu),n&&(o[qu]=n),s&&(o[Ju]=s),i&&(o[Rr]=i),r&&(o[Xu]=r),nh(e,Zu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kt.set("previous_websocket_failure",!0);try{let s;au(),this.mySock=new Hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hs!==null&&!Me.forceDisallow_}static previouslyFailed(){return kt.isInMemoryStorage||kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Yn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ju(n,Ly);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Me.responsesRequiredToBeHealthy=2;Me.healthyTimeout=3e4;/**
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
 */class Jn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[sn,Me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Me&&Me.isAvailable();let s=n&&!Me.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Me];else{const i=this.transports_=[];for(const r of Jn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jn.globalTransportInitialized_=!1;/**
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
 */const Uy=6e4,By=5e3,$y=10*1024,Hy=100*1024,Xi="t",ha="d",Vy="s",fa="r",Wy="e",da="o",pa="a",_a="n",ga="p",jy="h";class Gy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=as("c:"+this.id+":"),this.transportManager_=new Jn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$y?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xi in e){const n=e[Xi];n===pa?this.upgradeIfSecondaryHealthy_():n===fa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===da&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rn("t",e),s=Rn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ga,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_a,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rn("t",e),s=Rn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rn(Xi,e);if(ha in e){const s=e[ha];if(n===jy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_a){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Vy?this.onConnectionShutdown_(s):n===fa?this.onReset_(s):n===Wy?Sr("Server Error: "+s):n===da?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_o!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Bn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(By))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ga,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ah{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ch{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vs extends ch{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ma=32,ya=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function uh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ky(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=M(t),s=M(e);if(n===null)return e;if(n===s)return ye(z(t),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yo(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Le(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class qy{constructor(e,n){this.errorPrefix_=n,this.parts_=hh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_i(this.parts_[s]);dh(this)}}function zy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_i(e),dh(t)}function Yy(t){const e=t.parts_.pop();t.byteLength_-=_i(e),t.parts_.length>0&&(t.byteLength_-=1)}function dh(t){if(t.byteLength_>ya)throw new Error(t.errorPrefix_+"has a key path longer than "+ya+" bytes ("+t.byteLength_+").");if(t.parts_.length>ma)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ma+") or object contains a cycle "+Ot(t))}function Ot(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vo extends ch{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const An=1e3,Qy=60*5*1e3,va=30*1e3,Jy=1.3,Xy=3e4,Zy="server_kill",ba=3;class et extends ah{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=et.nextPersistentConnectionId_++,this.log_=as("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=An,this.maxReconnectDelay_=Qy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!au())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ie(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new di,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;et.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const s=dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||I_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=va)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sr("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xy&&(this.reconnectDelay_=An),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+et.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Gy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{we(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&we(h),a())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bl(this.interruptReasons_)&&(this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ba&&(this.reconnectDelay_=va,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ba&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$u.replace(/\./g,"-")]=1,lu()?e["framework.cordova"]=1:y_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vs.getInstance().currentlyOnline();return Bl(this.interruptReasons_)&&e}}et.nextPersistentConnectionId_=0;et.nextConnectionId_=0;/**
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
 */class yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new k(pn,e),i=new k(pn,n);return this.compare(s,i)!==0}minPost(){return k.MIN}}/**
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
 */let Es;class ph extends yi{static get __EMPTY_NODE(){return Es}static set __EMPTY_NODE(e){Es=e}compare(e,n){return vn(e.name,n.name)}isDefinedOn(e){throw yn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return k.MIN}maxPost(){return new k(Wt,Es)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Es)}toString(){return".key"}}const un=new ph;/**
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
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ce.RED,this.left=i??be.EMPTY_NODE,this.right=r??be.EMPTY_NODE}copy(e,n,s,i,r){return new ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class ev{copy(e,n,s,i,r){return this}insert(e,n,s){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new ev;/**
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
 */function tv(t,e){return vn(t.name,e.name)}function bo(t,e){return vn(t,e)}/**
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
 */let Ar;function nv(t){Ar=t}const _h=function(t){return typeof t=="number"?"number:"+Gu(t):"string:"+t},gh=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else b(t===Ar||t.isEmpty(),"priority of unexpected type.");b(t===Ar||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ca;class ae{constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ca=e}static get __childrenNodeConstructor(){return Ca}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=M(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_h(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gu(this.value_):e+=this.value_,this.lazyHash_=Vu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),r=ae.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mh,yh;function sv(t){mh=t}function iv(t){yh=t}class rv extends yi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return k.MIN}maxPost(){return new k(Wt,new ae("[PRIORITY-POST]",yh))}makePost(e,n){const s=mh(e);return new k(n,new ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const te=new rv;/**
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
 */const ov=Math.log(2);class lv{constructor(e){const n=r=>parseInt(Math.log(r)/ov,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ws=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ce(d,h.node,ce.BLACK,null,null);{const _=parseInt(u/2,10)+a,I=i(a,_),R=i(_+1,c);return h=t[_],d=n?n(h):h,new ce(d,h.node,ce.BLACK,I,R)}},r=function(a){let c=null,u=null,h=t.length;const d=function(I,R){const H=h-I,Y=h;h-=I;const ne=i(H+1,Y),V=t[H],se=n?n(V):V;_(new ce(se,V.node,R,null,ne))},_=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<a.count;++I){const R=a.nextBitIsOne(),H=Math.pow(2,a.count-(I+1));R?d(H,ce.BLACK):(d(H,ce.BLACK),d(H,ce.RED))}return u},o=new lv(t.length),l=r(o);return new be(s||e,l)};/**
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
 */let Zi;const en={};class Xe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(en&&te,"ChildrenNode.ts has not been loaded"),Zi=Zi||new Xe({".priority":en},{".priority":te}),Zi}get(e){const n=dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){b(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(k.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ws(s,e.getCompare()):l=en;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Xe(u,c)}addToIndexes(e,n){const s=Us(this.indexes_,(i,r)=>{const o=dn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===en)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(k.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ws(l,o.getCompare())}else return en;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new k(e.name,l))),a.insert(e,e.node)}});return new Xe(s,this.indexSet_)}removeFromIndexes(e,n){const s=Us(this.indexes_,i=>{if(i===en)return i;{const r=n.get(e.name);return r?i.remove(new k(e.name,r)):i}});return new Xe(s,this.indexSet_)}}/**
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
 */let Nn;class x{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gh(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Nn||(Nn=new x(new be(bo),null,Xe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Nn:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new k(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Nn:this.priorityNode_;return new x(i,o,r)}}updateChild(e,n){const s=M(e);if(s===null)return n;{b(M(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_h(this.getPriority().val())+":"),this.forEachChild(te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new k(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new k(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new k(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(te),i=n.getIterator(te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class av extends x{constructor(){super(new be(bo),x.EMPTY_NODE,Xe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const cs=new av;Object.defineProperties(k,{MIN:{value:new k(pn,x.EMPTY_NODE)},MAX:{value:new k(Wt,cs)}});ph.__EMPTY_NODE=x.EMPTY_NODE;ae.__childrenNodeConstructor=x;nv(cs);iv(cs);/**
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
 */const cv=!0;function ue(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,ue(e))}if(!(t instanceof Array)&&cv){const n=[];let s=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new k(o,a)))}}),n.length===0)return x.EMPTY_NODE;const r=Ws(n,tv,o=>o.name,bo);if(s){const o=Ws(n,te.getCompare());return new x(r,ue(e),new Xe({".priority":o},{".priority":te}))}else return new x(r,ue(e),Xe.Default)}else{let n=x.EMPTY_NODE;return Ie(t,(s,i)=>{if(it(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}sv(ue);/**
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
 */class uv extends yi{constructor(e){super(),this.indexPath_=e,b(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}makePost(e,n){const s=ue(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new k(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,cs);return new k(Wt,e)}toString(){return hh(this.indexPath_,0).join("/")}}/**
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
 */class hv extends yi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,n){const s=ue(e);return new k(n,s)}toString(){return".value"}}const fv=new hv;/**
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
 */function vh(t){return{type:"value",snapshotNode:t}}function _n(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Xn(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(_n(n,s)):o.trackChildChange(Zn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(te,(i,r)=>{n.hasChild(i)||s.trackChildChange(Xn(i,r))}),n.isLeafNode()||n.forEachChild(te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Zn(i,r,o))}else s.trackChildChange(_n(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class es{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new k(n,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(te,(o,l)=>{r.matches(new k(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class pv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new k(n,s))||(s=x.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new k(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Zn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Xn(n,h));const R=l.updateImmediateChild(n,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(_n(d.name,d.node)),R.updateImmediateChild(d.name,d.node)):R}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Xn(c.name,c.node)),r.trackChildChange(_n(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
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
 */class wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _v(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new pv(t):new es(t)}function wa(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===fv?n="$value":t.index_===un?n="$key":(b(t.index_ instanceof uv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ea(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
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
 */class js extends ah{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=as("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=js.getListenId_(e,s),l={};this.listens_[o]=l;const a=wa(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),dn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=js.getListenId_(e,n);delete this.listens_[s]}get(e){const n=wa(e._queryParams),s=e._path.toString(),i=new di;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+T_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Yn(l.responseText)}catch{we("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class gv{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gs(){return{value:null,children:new Map}}function bh(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=M(e);t.children.has(s)||t.children.set(s,Gs());const i=t.children.get(s);e=z(e),bh(i,e,n)}}function Nr(t,e,n){t.value!==null?n(e,t.value):mv(t,(s,i)=>{const r=new G(e.toString()+"/"+s);Nr(i,r,n)})}function mv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class yv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ia=10*1e3,vv=30*1e3,bv=5*60*1e3;class Cv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yv(e);const s=Ia+(vv-Ia)*Math.random();Bn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ie(e,(i,r)=>{r>0&&it(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Bn(this.reportStats_.bind(this),Math.floor(Math.random()*2*bv))}}/**
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
 */var Fe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fe||(Fe={}));function Ch(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ks{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Fe.ACK_USER_WRITE,this.source=Ch()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Ks(B(),n,this.revert)}}else return b(M(this.path)===e,"operationForChild called for unrelated child."),new Ks(z(this.path),this.affectedTree,this.revert)}}/**
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
 */class ts{constructor(e,n){this.source=e,this.path=n,this.type=Fe.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new ts(this.source,B()):new ts(this.source,z(this.path))}}/**
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
 */class jt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Fe.OVERWRITE}operationForChild(e){return L(this.path)?new jt(this.source,B(),this.snap.getImmediateChild(e)):new jt(this.source,z(this.path),this.snap)}}/**
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
 */class ns{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Fe.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new jt(this.source,B(),n.value):new ns(this.source,B(),n)}else return b(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ev(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dv(o.childName,o.snapshotNode))}),xn(t,i,"child_removed",e,s,n),xn(t,i,"child_added",e,s,n),xn(t,i,"child_moved",r,s,n),xn(t,i,"child_changed",e,s,n),xn(t,i,"value",e,s,n),i}function xn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Tv(t,l,a)),o.forEach(l=>{const a=Iv(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Iv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Tv(t,e,n){if(e.childName==null||n.childName==null)throw yn("Should only compare child_ events.");const s=new k(e.childName,e.snapshotNode),i=new k(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function vi(t,e){return{eventCache:t,serverCache:e}}function $n(t,e,n,s){return vi(new bt(e,n,s),t.serverCache)}function wh(t,e,n,s){return vi(t.eventCache,new bt(e,n,s))}function qs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let er;const Sv=()=>(er||(er=new be(hy)),er);class Q{constructor(e,n=Sv()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ie(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(L(e))return null;{const s=M(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),n);return r!=null?{path:re(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),s=this.children.get(n);return s!==null?s.subtree(z(e)):new Q(null)}}set(e,n){if(L(e))return new Q(n,this.children);{const s=M(e),r=(this.children.get(s)||new Q(null)).set(z(e),n),o=this.children.insert(s,r);return new Q(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),s=this.children.get(n);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),s=this.children.get(n);return s?s.get(z(e)):null}}setTree(e,n){if(L(e))return n;{const s=M(e),r=(this.children.get(s)||new Q(null)).setTree(z(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(z(e),re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=M(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),re(n,i),s):new Q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Be{constructor(e){this.writeTree_=e}static empty(){return new Be(new Q(null))}}function Hn(t,e,n){if(L(e))return new Be(new Q(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ye(i,e);return r=r.updateChild(o,n),new Be(t.writeTree_.set(i,r))}else{const i=new Q(n),r=t.writeTree_.setTree(e,i);return new Be(r)}}}function Ta(t,e,n){let s=t;return Ie(n,(i,r)=>{s=Hn(s,re(e,i),r)}),s}function Sa(t,e){if(L(e))return Be.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new Be(n)}}function xr(t,e){return Qt(t,e)!=null}function Qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function Ra(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(s,i)=>{e.push(new k(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new k(s,i.value))}),e}function _t(t,e){if(L(e))return t;{const n=Qt(t,e);return n!=null?new Be(new Q(n)):new Be(t.writeTree_.subtree(e))}}function Or(t){return t.writeTree_.isEmpty()}function gn(t,e){return Eh(B(),t.writeTree_,e)}function Eh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Eh(re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(re(t,".priority"),s)),n}}/**
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
 */function bi(t,e){return Rh(e,t)}function Rv(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Hn(t.visibleWrites,e,n)),t.lastWriteId=s}function Av(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Nv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xv(l,s.path)?i=!1:Le(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Ov(t),!0;if(s.snap)t.visibleWrites=Sa(t.visibleWrites,s.path);else{const l=s.children;Ie(l,a=>{t.visibleWrites=Sa(t.visibleWrites,re(s.path,a))})}return!0}else return!1}function xv(t,e){if(t.snap)return Le(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Le(re(t.path,n),e))return!0;return!1}function Ov(t){t.visibleWrites=Ih(t.allWrites,Pv,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pv(t){return t.visible}function Ih(t,e,n){let s=Be.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Le(n,o)?(l=ye(n,o),s=Hn(s,l,r.snap)):Le(o,n)&&(l=ye(o,n),s=Hn(s,B(),r.snap.getChild(l)));else if(r.children){if(Le(n,o))l=ye(n,o),s=Ta(s,l,r.children);else if(Le(o,n))if(l=ye(o,n),L(l))s=Ta(s,B(),r.children);else{const a=dn(r.children,M(l));if(a){const c=a.getChild(z(l));s=Hn(s,B(),c)}}}else throw yn("WriteRecord should have .snap or .children")}}return s}function Th(t,e,n,s,i){if(!s&&!i){const r=Qt(t.visibleWrites,e);if(r!=null)return r;{const o=_t(t.visibleWrites,e);if(Or(o))return n;if(n==null&&!xr(o,B()))return null;{const l=n||x.EMPTY_NODE;return gn(o,l)}}}else{const r=_t(t.visibleWrites,e);if(!i&&Or(r))return n;if(!i&&n==null&&!xr(r,B()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Le(c.path,e)||Le(e,c.path))},l=Ih(t.allWrites,o,e),a=n||x.EMPTY_NODE;return gn(l,a)}}}function Dv(t,e,n){let s=x.EMPTY_NODE;const i=Qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=_t(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=gn(_t(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),Ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=_t(t.visibleWrites,e);return Ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Mv(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=re(e,n);if(xr(t.visibleWrites,r))return null;{const o=_t(t.visibleWrites,r);return Or(o)?i.getChild(n):gn(o,i.getChild(n))}}function kv(t,e,n,s){const i=re(e,n),r=Qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=_t(t.visibleWrites,i);return gn(o,s.getNode().getImmediateChild(n))}else return null}function Lv(t,e){return Qt(t.visibleWrites,e)}function Fv(t,e,n,s,i,r,o){let l;const a=_t(t.visibleWrites,e),c=Qt(a,B());if(c!=null)l=c;else if(n!=null)l=gn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Uv(){return{visibleWrites:Be.empty(),allWrites:[],lastWriteId:-1}}function zs(t,e,n,s){return Th(t.writeTree,t.treePath,e,n,s)}function To(t,e){return Dv(t.writeTree,t.treePath,e)}function Aa(t,e,n,s){return Mv(t.writeTree,t.treePath,e,n,s)}function Ys(t,e){return Lv(t.writeTree,re(t.treePath,e))}function Bv(t,e,n,s,i,r){return Fv(t.writeTree,t.treePath,e,n,s,i,r)}function So(t,e,n){return kv(t.writeTree,t.treePath,e,n)}function Sh(t,e){return Rh(re(t.treePath,e),t.writeTree)}function Rh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class $v{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Xn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,_n(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.oldSnap));else throw yn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Hv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ah=new Hv;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=Bv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Vv(t){return{filter:t}}function Wv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jv(t,e,n,s,i){const r=new $v;let o,l;if(n.type===Fe.OVERWRITE){const c=n;c.source.fromUser?o=Pr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Qs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Fe.MERGE){const c=n;c.source.fromUser?o=Kv(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Dr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Fe.ACK_USER_WRITE){const c=n;c.revert?o=Yv(t,e,c.path,s,i,r):o=qv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Fe.LISTEN_COMPLETE)o=zv(t,e,n.path,s,r);else throw yn("Unknown operation type: "+n.type);const a=r.getChanges();return Gv(e,o,a),{viewCache:o,changes:a}}function Gv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(vh(qs(e)))}}function Nh(t,e,n,s,i,r){const o=e.eventCache;if(Ys(s,n)!=null)return e;{let l,a;if(L(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof x?c:x.EMPTY_NODE,h=To(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zs(s,Gt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(n);if(c===".priority"){b(vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Aa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=z(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Aa(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=So(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return $n(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Qs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=M(n);if(!a.isCompleteForPath(n)&&vt(n)>1)return e;const I=z(n),H=a.getNode().getImmediateChild(_).updateChild(I,s);_===".priority"?c=u.updatePriority(a.getNode(),H):c=u.updateChild(a.getNode(),_,H,I,Ah,null)}const h=wh(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new Ro(i,h,r);return Nh(t,h,n,i,d,l)}function Pr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ro(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=$n(e,c,!0,t.filter.filtersNodes());else{const h=M(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=$n(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=z(n),_=l.getNode().getImmediateChild(h);let I;if(L(d))I=s;else{const R=u.getCompleteChild(h);R!=null?uh(d)===".priority"&&R.getChild(fh(d)).isEmpty()?I=R:I=R.updateChild(d,s):I=x.EMPTY_NODE}if(_.equals(I))a=e;else{const R=t.filter.updateChild(l.getNode(),h,I,d,u,o);a=$n(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Na(t,e){return t.eventCache.isCompleteForChild(e)}function Kv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=re(n,a);Na(e,M(u))&&(l=Pr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=re(n,a);Na(e,M(u))||(l=Pr(t,l,u,c,i,r,o))}),l}function xa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Dr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new Q(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),I=xa(t,_,d);a=Qs(t,a,new G(h),I,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const I=e.serverCache.getNode().getImmediateChild(h),R=xa(t,I,d);a=Qs(t,a,new G(h),R,i,r,o,l)}}),a}function qv(t,e,n,s,i,r,o){if(Ys(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Qs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new Q(null);return a.getNode().forEachChild(un,(u,h)=>{c=c.set(new G(u),h)}),Dr(t,e,n,c,i,r,l,o)}else return e}else{let c=new Q(null);return s.foreach((u,h)=>{const d=re(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Dr(t,e,n,c,i,r,l,o)}}function zv(t,e,n,s,i){const r=e.serverCache,o=wh(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Nh(t,o,n,s,Ah,i)}function Yv(t,e,n,s,i,r){let o;if(Ys(s,n)!=null)return e;{const l=new Ro(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zs(s,Gt(e));else{const h=e.serverCache.getNode();b(h instanceof x,"serverChildren would be complete if leaf node"),u=To(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=M(n);let h=So(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,z(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,x.EMPTY_NODE,z(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zs(s,Gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ys(s,B())!=null,$n(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Qv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=_v(s);this.processor_=Vv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,l.getNode(),null),u=new bt(a,o.isFullyInitialized(),i.filtersNodes()),h=new bt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=vi(h,u),this.eventGenerator_=new wv(this.query_)}get query(){return this.query_}}function Jv(t){return t.viewCache_.serverCache.getNode()}function Xv(t){return qs(t.viewCache_)}function Zv(t,e){const n=Gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Oa(t){return t.eventRegistrations_.length===0}function eb(t,e){t.eventRegistrations_.push(e)}function Pa(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Da(t,e,n,s){e.type===Fe.MERGE&&e.source.queryId!==null&&(b(Gt(t.viewCache_),"We should always have a full cache before handling merges"),b(qs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jv(t.processor_,i,e,n,s);return Wv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,xh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function tb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(r,o)=>{s.push(_n(r,o))}),n.isFullyInitialized()&&s.push(vh(n.getNode())),xh(t,s,n.getNode(),e)}function xh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ev(t.eventGenerator_,e,n,i)}/**
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
 */let Js;class Oh{constructor(){this.views=new Map}}function nb(t){b(!Js,"__referenceConstructor has already been defined"),Js=t}function sb(){return b(Js,"Reference.ts has not been loaded"),Js}function ib(t){return t.views.size===0}function Ao(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Da(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Da(o,e,n,s));return r}}function Ph(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=zs(n,i?s:null),a=!1;l?a=!0:s instanceof x?(l=To(n,s),a=!1):(l=x.EMPTY_NODE,a=!1);const c=vi(new bt(l,a,!1),new bt(s,i,!1));return new Qv(e,c)}return o}function rb(t,e,n,s,i,r){const o=Ph(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),eb(o,n),tb(o,n)}function ob(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ct(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Pa(c,n,s)),Oa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Pa(a,n,s)),Oa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ct(t)&&r.push(new(sb())(e._repo,e._path)),{removed:r,events:o}}function Dh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gt(t,e){let n=null;for(const s of t.views.values())n=n||Zv(s,e);return n}function Mh(t,e){if(e._queryParams.loadsAllData())return Ci(t);{const s=e._queryIdentifier;return t.views.get(s)}}function kh(t,e){return Mh(t,e)!=null}function Ct(t){return Ci(t)!=null}function Ci(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xs;function lb(t){b(!Xs,"__referenceConstructor has already been defined"),Xs=t}function ab(){return b(Xs,"Reference.ts has not been loaded"),Xs}let cb=1;class Ma{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Uv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lh(t,e,n,s,i){return Rv(t.pendingWriteTree_,e,n,s,i),i?hs(t,new jt(Ch(),e,n)):[]}function Lt(t,e,n=!1){const s=Av(t.pendingWriteTree_,e);if(Nv(t.pendingWriteTree_,e)){let r=new Q(null);return s.snap!=null?r=r.set(B(),!0):Ie(s.children,o=>{r=r.set(new G(o),!0)}),hs(t,new Ks(s.path,r,n))}else return[]}function us(t,e,n){return hs(t,new jt(Eo(),e,n))}function ub(t,e,n){const s=Q.fromObject(n);return hs(t,new ns(Eo(),e,s))}function hb(t,e){return hs(t,new ts(Eo(),e))}function fb(t,e,n){const s=xo(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=ye(r,e),a=new ts(Io(o),l);return Po(t,r,a)}else return[]}function Zs(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||kh(o,e))){const a=ob(o,e,n,s);ib(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ct(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=_b(d);for(let I=0;I<_.length;++I){const R=_[I],H=R.query,Y=$h(t,R);t.listenProvider_.startListening(Vn(H),ss(t,H),Y.hashFn,Y.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Vn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(wi(d));t.listenProvider_.stopListening(Vn(d),_)}))}gb(t,c)}return l}function Fh(t,e,n,s){const i=xo(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,a=ye(o,e),c=new jt(Io(l),a,n);return Po(t,o,c)}else return[]}function db(t,e,n,s){const i=xo(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,a=ye(o,e),c=Q.fromObject(n),u=new ns(Io(l),a,c);return Po(t,o,u)}else return[]}function Mr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const I=ye(d,i);r=r||gt(_,I),o=o||Ct(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ct(l),r=r||gt(l,B())):(l=new Oh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,I)=>{const R=gt(I,B());R&&(r=r.updateImmediateChild(_,R))}));const c=kh(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=wi(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=mb();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=bi(t.pendingWriteTree_,i);let h=rb(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Mh(l,e);h=h.concat(yb(t,e,d))}return h}function No(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ye(o,e),c=gt(l,a);if(c)return c});return Th(i,e,r,n,!0)}function pb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ye(c,n);s=s||gt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||gt(i,B()):(i=new Oh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bt(s,!0,!1):null,l=bi(t.pendingWriteTree_,e._path),a=Ph(i,e,l,r?o.getNode():x.EMPTY_NODE,r);return Xv(a)}function hs(t,e){return Uh(e,t.syncPointTree_,null,bi(t.pendingWriteTree_,B()))}function Uh(t,e,n,s){if(L(t.path))return Bh(t,e,n,s);{const i=e.get(B());n==null&&i!=null&&(n=gt(i,B()));let r=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Sh(s,o);r=r.concat(Uh(l,a,c,u))}return i&&(r=r.concat(Ao(i,t,s,n))),r}}function Bh(t,e,n,s){const i=e.get(B());n==null&&i!=null&&(n=gt(i,B()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Sh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Bh(u,l,a,c)))}),i&&(r=r.concat(Ao(i,t,s,n))),r}function $h(t,e){const n=e.query,s=ss(t,n);return{hashFn:()=>(Jv(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?fb(t,n._path,s):hb(t,n._path);{const r=py(i,n);return Zs(t,n,null,r)}}}}function ss(t,e){const n=wi(e);return t.queryToTagMap.get(n)}function wi(t){return t._path.toString()+"$"+t._queryIdentifier}function xo(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Po(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=bi(t.pendingWriteTree_,e);return Ao(s,n,i,null)}function _b(t){return t.fold((e,n,s)=>{if(n&&Ct(n))return[Ci(n)];{let i=[];return n&&(i=Dh(n)),Ie(s,(r,o)=>{i=i.concat(o)}),i}})}function Vn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ab())(t._repo,t._path):t}function gb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=wi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function mb(){return cb++}function yb(t,e,n){const s=e._path,i=ss(t,e),r=$h(t,n),o=t.listenProvider_.startListening(Vn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Ct(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&Ct(u))return[Ci(u).query];{let d=[];return u&&(d=d.concat(Dh(u).map(_=>_.query))),Ie(h,(_,I)=>{d=d.concat(I)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Vn(u),ss(t,u))}}return o}/**
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
 */class Do{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Do(n)}node(){return this.node_}}class Mo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new Mo(this.syncTree_,n)}node(){return No(this.syncTree_,this.path_)}}const vb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ka=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Cb(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Cb=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wb=function(t,e,n,s){return ko(e,new Mo(n,t),s)},Hh=function(t,e,n){return ko(t,new Do(e),n)};function ko(t,e,n){const s=t.getPriority().val(),i=ka(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ka(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ae(l,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ae(i))),o.forEachChild(te,(l,a)=>{const c=ko(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Lo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Fo(t,e){let n=e instanceof G?e:new G(e),s=t,i=M(n);for(;i!==null;){const r=dn(s.node.children,i)||{children:{},childCount:0};s=new Lo(i,s,r),n=z(n),i=M(n)}return s}function Cn(t){return t.node.value}function Vh(t,e){t.node.value=e,kr(t)}function Wh(t){return t.node.childCount>0}function Eb(t){return Cn(t)===void 0&&!Wh(t)}function Ei(t,e){Ie(t.node.children,(n,s)=>{e(new Lo(n,t,s))})}function jh(t,e,n,s){n&&!s&&e(t),Ei(t,i=>{jh(i,e,!0,s)}),n&&s&&e(t)}function Ib(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fs(t){return new G(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function kr(t){t.parent!==null&&Tb(t.parent,t.name,t)}function Tb(t,e,n){const s=Eb(n),i=it(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kr(t))}/**
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
 */const Sb=/[\[\].#$\/\u0000-\u001F\u007F]/,Rb=/[\[\].#$\u0000-\u001F\u007F]/,tr=10*1024*1024,Gh=function(t){return typeof t=="string"&&t.length!==0&&!Sb.test(t)},Kh=function(t){return typeof t=="string"&&t.length!==0&&!Rb.test(t)},Ab=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kh(t)},qh=function(t,e,n,s){s&&e===void 0||Uo(io(t,"value"),e,n)},Uo=function(t,e,n){const s=n instanceof G?new qy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ot(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ot(s)+" with contents = "+e.toString());if(Wu(e))throw new Error(t+"contains "+e.toString()+" "+Ot(s));if(typeof e=="string"&&e.length>tr/3&&_i(e)>tr)throw new Error(t+"contains a string greater than "+tr+" utf8 bytes "+Ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zy(s,o),Uo(t,l,s),Yy(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ot(s)+" in addition to actual children.")}},zh=function(t,e,n,s){if(!Kh(n))throw new Error(io(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zh(t,e,n)},Yh=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ab(n))throw new Error(io(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ob{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qh(t,e,n){Bo(t,n),Jh(t,s=>yo(s,e))}function Ye(t,e,n){Bo(t,n),Jh(t,s=>Le(s,e)||Le(e,s))}function Jh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Pb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Un&&fe("event: "+n.toString()),bn(s)}}}/**
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
 */const Db="repo_interrupt",Mb=25;class kb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ob,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gs(),this.transactionQueueTree_=new Lo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lb(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||yy())t.server_=new js(t.repoInfo_,(s,i,r,o)=>{La(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new et(t.repoInfo_,e,(s,i,r,o)=>{La(t,s,i,r,o)},s=>{Fa(t,s)},s=>{Fb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ey(t.repoInfo_,()=>new Cv(t.stats_,t.server_)),t.infoData_=new gv,t.infoSyncTree_=new Ma({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=us(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ho(t,"connected",!1),t.serverSyncTree_=new Ma({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ye(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Xh(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $o(t){return vb({timestamp:Xh(t)})}function La(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Us(n,c=>ue(c));o=db(t.serverSyncTree_,r,a,i)}else{const a=ue(n);o=Fh(t.serverSyncTree_,r,a,i)}else if(s){const a=Us(n,c=>ue(c));o=ub(t.serverSyncTree_,r,a)}else{const a=ue(n);o=us(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ti(t,r)),Ye(t.eventQueue_,l,o)}function Fa(t,e){Ho(t,"connected",e),e===!1&&$b(t)}function Fb(t,e){Ie(e,(n,s)=>{Ho(t,n,s)})}function Ho(t,e,n){const s=new G("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=us(t.infoSyncTree_,s,i);Ye(t.eventQueue_,s,r)}function Zh(t){return t.nextWriteId_++}function Ub(t,e,n){const s=pb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ue(i).withIndex(e._queryParams.getIndex());Mr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=us(t.serverSyncTree_,e._path,r);else{const l=ss(t.serverSyncTree_,e);o=Fh(t.serverSyncTree_,e._path,r,l)}return Ye(t.eventQueue_,e._path,o),Zs(t.serverSyncTree_,e,n,null,!0),r},i=>(Ii(t,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bb(t,e,n,s,i){Ii(t,"set",{path:e.toString(),value:n,priority:s});const r=$o(t),o=ue(n,s),l=No(t.serverSyncTree_,e),a=Hh(o,l,r),c=Zh(t),u=Lh(t.serverSyncTree_,e,a,c,!0);Bo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const I=d==="ok";I||we("set at "+e+" failed: "+d);const R=Lt(t.serverSyncTree_,c,!I);Ye(t.eventQueue_,e,R),jb(t,i,d,_)});const h=rf(t,e);Ti(t,h),Ye(t.eventQueue_,h,[])}function $b(t){Ii(t,"onDisconnectEvents");const e=$o(t),n=Gs();Nr(t.onDisconnect_,B(),(i,r)=>{const o=wb(i,r,t.serverSyncTree_,e);bh(n,i,o)});let s=[];Nr(n,B(),(i,r)=>{s=s.concat(us(t.serverSyncTree_,i,r));const o=rf(t,i);Ti(t,o)}),t.onDisconnect_=Gs(),Ye(t.eventQueue_,B(),s)}function Hb(t,e,n){let s;M(e._path)===".info"?s=Mr(t.infoSyncTree_,e,n):s=Mr(t.serverSyncTree_,e,n),Qh(t.eventQueue_,e._path,s)}function Vb(t,e,n){let s;M(e._path)===".info"?s=Zs(t.infoSyncTree_,e,n):s=Zs(t.serverSyncTree_,e,n),Qh(t.eventQueue_,e._path,s)}function Wb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Db)}function Ii(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),fe(n,...e)}function jb(t,e,n,s){e&&bn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ef(t,e,n){return No(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||Si(t,e),Cn(e)){const n=nf(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Gb(t,fs(e),n)}else Wh(e)&&Ei(e,n=>{Vo(t,n)})}function Gb(t,e,n){const s=n.map(c=>c.currentWriteId),i=ef(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ii(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Lt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Si(t,Fo(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),Ye(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)bn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{we("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ti(t,e)}},o)}function Ti(t,e){const n=tf(t,e),s=fs(n),i=nf(t,n);return Kb(t,i,s),s}function Kb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ye(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Lt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Mb)u=!0,h="maxretry",i=i.concat(Lt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ef(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Uo("transaction failed: Data returned ",_,a.path);let I=ue(_);typeof _=="object"&&_!=null&&it(_,".priority")||(I=I.updatePriority(d.getPriority()));const H=a.currentWriteId,Y=$o(t),ne=Hh(I,d,Y);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=ne,a.currentWriteId=Zh(t),o.splice(o.indexOf(H),1),i=i.concat(Lh(t.serverSyncTree_,a.path,ne,a.currentWriteId,a.applyLocally)),i=i.concat(Lt(t.serverSyncTree_,H,!0))}else u=!0,h="nodata",i=i.concat(Lt(t.serverSyncTree_,a.currentWriteId,!0))}Ye(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Si(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)bn(s[l]);Vo(t,t.transactionQueueTree_)}function tf(t,e){let n,s=t.transactionQueueTree_;for(n=M(e);n!==null&&Cn(s)===void 0;)s=Fo(s,n),e=z(e),n=M(e);return s}function nf(t,e){const n=[];return sf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function sf(t,e,n){const s=Cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ei(e,i=>{sf(t,i,n)})}function Si(t,e){const n=Cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Vh(e,n.length>0?n:void 0)}Ei(e,s=>{Si(t,s)})}function rf(t,e){const n=fs(tf(t,e)),s=Fo(t.transactionQueueTree_,e);return Ib(s,i=>{nr(t,i)}),nr(t,s),jh(s,i=>{nr(t,i)}),n}function nr(t,e){const n=Cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Lt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vh(e,void 0):n.length=r+1,Ye(t.eventQueue_,fs(e),i);for(let o=0;o<s.length;o++)bn(s[o])}}/**
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
 */function qb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ua=function(t,e){const n=Yb(t),s=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new th(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},Yb=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=qb(t.substring(u,h)));const d=zb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Ba="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Qb=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ba.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ba.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Jb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class Xb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class of{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:uh(this._path)}get ref(){return new rt(this._repo,this._path)}get _queryIdentifier(){const e=Ea(this._queryParams),n=po(e);return n==="{}"?"default":n}get _queryObject(){return Ea(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof Wo))return!1;const n=this._repo===e._repo,s=yo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ky(this._path)}}class rt extends Wo{constructor(e,n){super(e,n,new wo,!1)}get parent(){const e=fh(this._path);return e===null?null:new rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class is{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=rs(this.ref,e);return new is(this._node.getChild(n),s,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new is(i,rs(this.ref,s),te)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jo(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?rs(t._root,e):t._root}function rs(t,e){return t=It(t),M(t._path)===null?Nb("child","path",e):zh("child","path",e),new rt(t._repo,re(t._path,e))}function Zb(t,e){t=It(t),Yh("push",t._path),qh("push",e,t._path,!0);const n=Xh(t._repo),s=Qb(n),i=rs(t,s),r=rs(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sr(t,e){t=It(t),Yh("set",t._path),qh("set",e,t._path,!1);const n=new di;return Bb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eC(t){t=It(t);const e=new of(()=>{}),n=new Ri(e);return Ub(t._repo,t,n).then(s=>new is(s,new rt(t._repo,t._path),t._queryParams.getIndex()))}class Ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Jb("value",this,new is(e.snapshotNode,new rt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xb(this,e,n):null}matches(e){return e instanceof Ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tC(t,e,n,s,i){const r=new of(n,void 0),o=new Ri(r);return Hb(t._repo,t,o),()=>Vb(t._repo,t,o)}function $a(t,e,n,s){return tC(t,"value",e)}nb(rt);lb(rt);/**
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
 */const nC="FIREBASE_DATABASE_EMULATOR_HOST",Lr={};let sC=!1;function iC(t,e,n,s){t.repoInfo_=new th(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function rC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ua(r,i),l=o.repoInfo,a;typeof process<"u"&&ra&&(a=ra[nC]),a?(r=`http://${a}?ns=${l.namespace}`,o=Ua(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new by(t.name,t.options,e);xb("Invalid Firebase Database URL",o),L(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lC(l,t,c,new vy(t.name,n));return new aC(u,t)}function oC(t,e){const n=Lr[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Wb(t),delete n[t.key]}function lC(t,e,n,s){let i=Lr[e.name];i||(i={},Lr[e.name]=i);let r=i[t.toURLString()];return r&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kb(t,sC,n,s),i[t.toURLString()]=r,r}class aC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function cC(t=Ag(),e){const n=lo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=p_("database");s&&uC(n,...s)}return n}function uC(t,e,n,s={}){t=It(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Os(Os.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:__(s.mockUserToken,t.app.options.projectId);r=new Os(o)}iC(i,e,n,r)}/**
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
 */function hC(t){sy(Rg),yt(new tt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ze(oa,la,t),ze(oa,la,"esm2017")}et.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};et.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hC();const fC={apiKey:"AIzaSyBGKFlZcgiuKJMCAmSU1F2L8-mpRtWyGCk",authDomain:"bbpag-e60d8.firebaseapp.com",projectId:"bbpag-e60d8",storageBucket:"bbpag-e60d8.appspot.com",messagingSenderId:"685339319716",appId:"1:685339319716:web:5e0c10926798b5f5e47531",measurementId:"G-XVKYW0BGTL",databaseURL:"https://bbpag-e60d8-default-rtdb.asia-southeast1.firebasedatabase.app/"},dC=_u(fC);let Go=cC(dC),Ha=jo(Go,"data"),Va=jo(Go,"count"),Wa=jo(Go,"view");const lt=i_({state(){return{data:{},count:0,view:0}},mutations:{renewData(t,e){t.data=e},renewCount(t,e){t.count=e}},actions:{onValueData(t){$a(Ha,e=>{let n=e.val();t.commit("renewData",n)})},onValueCount(t,e){$a(Va,n=>{let s=n.val();t.commit("renewCount",s)})},async addViewer(t,e){let n;await eC(Wa).then(s=>{n=s.val()}),sr(Wa,++n)},sent(t,e){let n=Zb(Ha);sr(n,e)},setNewCount(t,e){sr(Va,e)}}}),pC=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},_C={class:"wrap"},gC={class:"cntWrap"},mC=["src"],yC={class:"input-group mb-3"},vC=["placeholder"],bC={class:"input-group mb-3"},CC=["placeholder"],wC={__name:"App",setup(t){let e=Tn(lt.state.data),n=Tn(""),s=Tn(""),i=Tn("誰"),r=Tn("說什麼");an(()=>lt.state.data,u=>{e.value=u}),Sc(async()=>{lt.dispatch("onValueData"),lt.dispatch("onValueCount"),await lt.dispatch("addViewer")});function o(u){return u==s.value}async function l(){let u=Object.values(e.value),h;return u.some(d=>(h=d.count,d.name==s.value))?h:await a()}async function a(){let u=lt.state.count+9;return await lt.dispatch("setNewCount",u),u}async function c(){s.value?n.value?(i.value="誰",r.value="說什麼",lt.dispatch("sent",{name:s.value,cnt:n.value,count:await l()}),n.value=""):r.value="你沒說你想說什麼":i.value="要說你是誰"}return(u,h)=>(Fi(),Ui("div",_C,[De("div",gC,[(Fi(!0),Ui(Ge,null,Ed(tn(e),d=>(Fi(),Ui("div",{class:si(["cnt",{other:o(d.name)}])},[De("img",{src:`https://picsum.photos/id/${d.count}/60/60`,alt:""},null,8,mC),De("div",null,[Hc(tl(d.name)+" 說:",1),De("div",null,tl(d.cnt),1)])],2))),256))]),De("div",yC,[hl(De("textarea",{onKeyup:Rp(c,["enter"]),"onUpdate:modelValue":h[0]||(h[0]=d=>pe(s)?s.value=d:s=d),type:"text",class:"form-control",placeholder:tn(i),"aria-label":"Example text with button addon","aria-describedby":"button-addon1"},null,40,vC),[[Ml,tn(s)]])]),De("div",bC,[hl(De("textarea",{"onUpdate:modelValue":h[1]||(h[1]=d=>pe(n)?n.value=d:n=d),type:"text",class:"form-control",placeholder:tn(r),"aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,8,CC),[[Ml,tn(n)]]),De("button",{onClick:c,class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"send")])]))}},EC=pC(wC,[["__scopeId","data-v-624880fa"]]);let IC=xp(EC);IC.mount("#app");
