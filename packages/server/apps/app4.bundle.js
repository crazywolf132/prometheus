!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).app4={})}(this,(function(e){"use strict";var t={};
/**
  * @vue/shared v3.4.18
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/function n(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const o="production"!==t.NODE_ENV?Object.freeze({}):{},r="production"!==t.NODE_ENV?Object.freeze([]):[],s=()=>{},i=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=Object.assign,a=Object.prototype.hasOwnProperty,l=(e,t)=>a.call(e,t),u=Array.isArray,d=e=>"[object Map]"===m(e),p=e=>"[object Set]"===m(e),f=e=>"function"==typeof e,h=e=>"string"==typeof e,_=e=>"symbol"==typeof e,g=e=>null!==e&&"object"==typeof e,v=e=>(g(e)||f(e))&&f(e.then)&&f(e.catch),y=Object.prototype.toString,m=e=>y.call(e),w=e=>m(e).slice(8,-1),b=e=>"[object Object]"===m(e),E=e=>h(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})((e=>e.charAt(0).toUpperCase()+e.slice(1))),O=(e,t)=>!Object.is(e,t),x=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let k;const S=()=>k||(k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function V(e){if(u(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=h(o)?R(o):V(o);if(r)for(const e in r)t[e]=r[e]}return t}if(h(e)||g(e))return e}const C=/;(?![^(]*\))/g,$=/:([^]+)/,D=/\/\*[^]*?\*\//g;function R(e){const t={};return e.replace(D,"").split(C).forEach((e=>{if(e){const n=e.split($);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function j(e){let t="";if(h(e))t=e;else if(u(e))for(let n=0;n<e.length;n++){const o=j(e[n]);o&&(t+=o+" ")}else if(g(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}var P={};function M(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let T;class F{constructor(e,t,n,o){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,function(e,t){t&&t.active&&t.effects.push(e)}(this,o)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,W();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(t.computed.value,this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),B()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=U,t=T;try{return U=!0,T=this,this._runnings++,I(this),this.fn()}finally{L(this),this._runnings--,T=t,U=e}}stop(){var e;this.active&&(I(this),L(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function I(e){e._trackId++,e._depsLength=0}function L(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)A(e.deps[t],e);e.deps.length=e._depsLength}}function A(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let U=!0,z=0;const H=[];function W(){H.push(U),U=!1}function B(){const e=H.pop();U=void 0===e||e}function J(){z++}function K(){for(z--;!z&&q.length;)q.shift()()}const q=[];function Z(e,t,n){var o;J();for(const r of e.keys()){let s;r._dirtyLevel<t&&(null!=s?s:s=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=s?s:s=e.get(r)===r._trackId)&&("production"!==P.NODE_ENV&&(null==(o=r.onTrigger)||o.call(r,c({effect:r},n))),r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&q.push(r.scheduler)))}K()}const G=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Q=new WeakMap,X=Symbol("production"!==P.NODE_ENV?"iterate":""),Y=Symbol("production"!==P.NODE_ENV?"Map key iterate":"");function ee(e,t,n){if(U&&T){let o=Q.get(e);o||Q.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=G((()=>o.delete(n)))),function(e,t,n){var o;if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&A(r,e),e.deps[e._depsLength++]=t):e._depsLength++,"production"!==P.NODE_ENV&&(null==(o=e.onTrack)||o.call(e,c({effect:e},n)))}}(T,r,"production"!==P.NODE_ENV?{target:e,type:t,key:n}:void 0)}}function te(e,t,n,o,r,s){const i=Q.get(e);if(!i)return;let c=[];if("clear"===t)c=[...i.values()];else if("length"===n&&u(e)){const e=Number(o);i.forEach(((t,n)=>{("length"===n||!_(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(i.get(n)),t){case"add":u(e)?E(n)&&c.push(i.get("length")):(c.push(i.get(X)),d(e)&&c.push(i.get(Y)));break;case"delete":u(e)||(c.push(i.get(X)),d(e)&&c.push(i.get(Y)));break;case"set":d(e)&&c.push(i.get(X))}J();for(const a of c)a&&Z(a,4,"production"!==P.NODE_ENV?{target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:s}:void 0);K()}const ne=n("__proto__,__v_isRef,__isVue"),oe=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(_)),re=se();function se(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ke(this);for(let t=0,r=this.length;t<r;t++)ee(n,"get",t+"");const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(Ke)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){W(),J();const n=Ke(this)[t].apply(this,e);return K(),B(),n}})),e}function ie(e){const t=Ke(this);return ee(t,"has",e),t.hasOwnProperty(e)}class ce{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const o=this._isReadonly,r=this._shallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return r;if("__v_raw"===t)return n===(o?r?Ie:Fe:r?Te:Me).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=u(e);if(!o){if(s&&l(re,t))return Reflect.get(re,t,n);if("hasOwnProperty"===t)return ie}const i=Reflect.get(e,t,n);return(_(t)?oe.has(t):ne(t))?i:(o||ee(e,"get",t),r?i:Ge(i)?s&&E(t)?i:i.value:g(i)?o?Ae(i):Le(i):i)}}class ae extends ce{constructor(e=!1){super(!1,e)}set(e,t,n,o){let r=e[t];if(!this._shallow){const t=We(r);if(Be(n)||We(n)||(r=Ke(r),n=Ke(n)),!u(e)&&Ge(r)&&!Ge(n))return!t&&(r.value=n,!0)}const s=u(e)&&E(t)?Number(t)<e.length:l(e,t),i=Reflect.set(e,t,n,o);return e===Ke(o)&&(s?O(n,r)&&te(e,"set",t,n,r):te(e,"add",t,n)),i}deleteProperty(e,t){const n=l(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&te(e,"delete",t,void 0,o),r}has(e,t){const n=Reflect.has(e,t);return _(t)&&oe.has(t)||ee(e,"has",t),n}ownKeys(e){return ee(e,"iterate",u(e)?"length":X),Reflect.ownKeys(e)}}class le extends ce{constructor(e=!1){super(!0,e)}set(e,t){return"production"!==P.NODE_ENV&&M(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return"production"!==P.NODE_ENV&&M(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}}const ue=new ae,de=new le,pe=new le(!0),fe=e=>e,he=e=>Reflect.getPrototypeOf(e);function _e(e,t,n=!1,o=!1){const r=Ke(e=e.__v_raw),s=Ke(t);n||(O(t,s)&&ee(r,"get",t),ee(r,"get",s));const{has:i}=he(r),c=o?fe:n?Ze:qe;return i.call(r,t)?c(e.get(t)):i.call(r,s)?c(e.get(s)):void(e!==r&&e.get(t))}function ge(e,t=!1){const n=this.__v_raw,o=Ke(n),r=Ke(e);return t||(O(e,r)&&ee(o,"has",e),ee(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ve(e,t=!1){return e=e.__v_raw,!t&&ee(Ke(e),"iterate",X),Reflect.get(e,"size",e)}function ye(e){e=Ke(e);const t=Ke(this);return he(t).has.call(t,e)||(t.add(e),te(t,"add",e,e)),this}function me(e,t){t=Ke(t);const n=Ke(this),{has:o,get:r}=he(n);let s=o.call(n,e);s?"production"!==P.NODE_ENV&&Pe(n,o,e):(e=Ke(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?O(t,i)&&te(n,"set",e,t,i):te(n,"add",e,t),this}function we(e){const t=Ke(this),{has:n,get:o}=he(t);let r=n.call(t,e);r?"production"!==P.NODE_ENV&&Pe(t,n,e):(e=Ke(e),r=n.call(t,e));const s=o?o.call(t,e):void 0,i=t.delete(e);return r&&te(t,"delete",e,void 0,s),i}function be(){const e=Ke(this),t=0!==e.size,n="production"!==P.NODE_ENV?d(e)?new Map(e):new Set(e):void 0,o=e.clear();return t&&te(e,"clear",void 0,void 0,n),o}function Ee(e,t){return function(n,o){const r=this,s=r.__v_raw,i=Ke(s),c=t?fe:e?Ze:qe;return!e&&ee(i,"iterate",X),s.forEach(((e,t)=>n.call(o,c(e),c(t),r)))}}function Ne(e,t,n){return function(...o){const r=this.__v_raw,s=Ke(r),i=d(s),c="entries"===e||e===Symbol.iterator&&i,a="keys"===e&&i,l=r[e](...o),u=n?fe:t?Ze:qe;return!t&&ee(s,"iterate",a?Y:X),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){if("production"!==P.NODE_ENV){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${N(e)} operation ${n}failed: target is readonly.`,Ke(this))}return"delete"!==e&&("clear"===e?void 0:this)}}function xe(){const e={get(e){return _e(this,e)},get size(){return ve(this)},has:ge,add:ye,set:me,delete:we,clear:be,forEach:Ee(!1,!1)},t={get(e){return _e(this,e,!1,!0)},get size(){return ve(this)},has:ge,add:ye,set:me,delete:we,clear:be,forEach:Ee(!1,!0)},n={get(e){return _e(this,e,!0)},get size(){return ve(this,!0)},has(e){return ge.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ee(!0,!1)},o={get(e){return _e(this,e,!0,!0)},get size(){return ve(this,!0)},has(e){return ge.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ee(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=Ne(r,!1,!1),n[r]=Ne(r,!0,!1),t[r]=Ne(r,!1,!0),o[r]=Ne(r,!0,!0)})),[e,n,t,o]}const[ke,Se,Ve,Ce]=xe();function $e(e,t){const n=t?e?Ce:Ve:e?Se:ke;return(t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(l(n,o)&&o in t?n:t,o,r)}const De={get:$e(!1,!1)},Re={get:$e(!0,!1)},je={get:$e(!0,!0)};function Pe(e,t,n){const o=Ke(n);if(o!==n&&t.call(e,o)){const t=w(e);console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Me=new WeakMap,Te=new WeakMap,Fe=new WeakMap,Ie=new WeakMap;function Le(e){return We(e)?e:ze(e,!1,ue,De,Me)}function Ae(e){return ze(e,!0,de,Re,Fe)}function Ue(e){return ze(e,!0,pe,je,Ie)}function ze(e,t,n,o,r){if(!g(e))return"production"!==P.NODE_ENV&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=(c=e).__v_skip||!Object.isExtensible(c)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(w(c));var c;if(0===i)return e;const a=new Proxy(e,2===i?o:n);return r.set(e,a),a}function He(e){return We(e)?He(e.__v_raw):!(!e||!e.__v_isReactive)}function We(e){return!(!e||!e.__v_isReadonly)}function Be(e){return!(!e||!e.__v_isShallow)}function Je(e){return He(e)||We(e)}function Ke(e){const t=e&&e.__v_raw;return t?Ke(t):e}const qe=e=>g(e)?Le(e):e,Ze=e=>g(e)?Ae(e):e;function Ge(e){return!(!e||!0!==e.__v_isRef)}const Qe={get:(e,t,n)=>{return Ge(o=Reflect.get(e,t,n))?o.value:o;var o},set:(e,t,n,o)=>{const r=e[t];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};var Xe={};const Ye=[];function et(e,...t){W();const n=Ye.length?Ye[Ye.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=Ye[Ye.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}();if(o)rt(o,n,11,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${xn(n,e.type)}>`)).join("\n"),r]);else{const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=!!e.component&&null==e.component.parent,r=` at <${xn(e.component,e.type,o)}`,s=">"+n;return e.props?[r,...tt(e.props),s]:[r+s]}(e))})),t}(r)),console.warn(...n)}B()}function tt(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...nt(n,e[n]))})),n.length>3&&t.push(" ..."),t}function nt(e,t,n){return h(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:Ge(t)?(t=nt(e,Ke(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):f(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Ke(t),n?t:[`${e}=`,t])}const ot={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function rt(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){it(s,t,n)}return r}function st(e,t,n,o){if(f(e)){const r=rt(e,t,n,o);return r&&v(r)&&r.catch((e=>{it(e,t,n)})),r}const r=[];for(let s=0;s<e.length;s++)r.push(st(e[s],t,n,o));return r}function it(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,s="production"!==Xe.NODE_ENV?ot[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent}const i=t.appContext.config.errorHandler;if(i)return void rt(i,null,10,[e,r,s])}!function(e,t,n,o=!0){if("production"!==Xe.NODE_ENV){const s=ot[t];if(n&&(r=n,Ye.push(r)),et("Unhandled error"+(s?` during execution of ${s}`:"")),n&&Ye.pop(),o)throw e;console.error(e)}else console.error(e);var r}(e,n,r,o)}let ct=!1,at=!1;const lt=[];let ut=0;const dt=[];let pt=null,ft=0;const ht=Promise.resolve();let _t=null;const gt=100;function vt(e){const t=_t||ht;return e?t.then(this?e.bind(this):e):t}function yt(e){lt.length&&lt.includes(e,ct&&e.allowRecurse?ut+1:ut)||(null==e.id?lt.push(e):lt.splice(function(e){let t=ut+1,n=lt.length;for(;t<n;){const o=t+n>>>1,r=lt[o],s=bt(r);s<e||s===e&&r.pre?t=o+1:n=o}return t}(e.id),0,e),mt())}function mt(){ct||at||(at=!0,_t=ht.then(Nt))}function wt(e){u(e)?dt.push(...e):pt&&pt.includes(e,e.allowRecurse?ft+1:ft)||dt.push(e),mt()}const bt=e=>null==e.id?1/0:e.id,Et=(e,t)=>{const n=bt(e)-bt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Nt(e){at=!1,ct=!0,"production"!==Xe.NODE_ENV&&(e=e||new Map),lt.sort(Et);const t="production"!==Xe.NODE_ENV?t=>Ot(e,t):s;try{for(ut=0;ut<lt.length;ut++){const e=lt[ut];if(e&&!1!==e.active){if("production"!==Xe.NODE_ENV&&t(e))continue;rt(e,null,14)}}}finally{ut=0,lt.length=0,function(e){if(dt.length){const t=[...new Set(dt)].sort(((e,t)=>bt(e)-bt(t)));if(dt.length=0,pt)return void pt.push(...t);for(pt=t,"production"!==Xe.NODE_ENV&&(e=e||new Map),ft=0;ft<pt.length;ft++)"production"!==Xe.NODE_ENV&&Ot(e,pt[ft])||pt[ft]();pt=null,ft=0}}(e),ct=!1,_t=null,(lt.length||dt.length)&&Nt(e)}}function Ot(e,t){if(e.has(t)){const n=e.get(t);if(n>gt){const e=t.ownerInstance,n=e&&On(e.type);return it(`Maximum recursive updates exceeded${n?` in component <${n}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}e.set(t,n+1)}else e.set(t,1)}const xt=new Set;"production"!==Xe.NODE_ENV&&(S().__VUE_HMR_RUNTIME__={createRecord:Ct((function(e,t){if(kt.has(e))return!1;return kt.set(e,{initialDef:St(t),instances:new Set}),!0})),rerender:Ct((function(e,t){const n=kt.get(e);if(!n)return;n.initialDef.render=t,[...n.instances].forEach((e=>{t&&(e.render=t,St(e.type).render=t),e.renderCache=[],e.effect.dirty=!0,e.update()}))})),reload:Ct((function(e,t){const n=kt.get(e);if(!n)return;t=St(t),Vt(n.initialDef,t);const o=[...n.instances];for(const r of o){const e=St(r.type);xt.has(e)||(e!==n.initialDef&&Vt(e,t),xt.add(e)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(xt.add(e),r.ceReload(t.styles),xt.delete(e)):r.parent?(r.parent.effect.dirty=!0,yt(r.parent.update)):r.appContext.reload?r.appContext.reload():"undefined"!=typeof window?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}wt((()=>{for(const e of o)xt.delete(St(e.type))}))}))});const kt=new Map;function St(e){return kn(e)?e.__vccOpts:e}function Vt(e,t){c(e,t);for(const n in e)"__file"===n||n in t||delete e[n]}function Ct(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let $t=null,Dt=null;const Rt=Symbol.for("v-ndc");const jt=Symbol.for("v-scx"),Pt=()=>{{const e=function(e,t,n=!1){const o=mn||$t;if(o||Qt){const r=o?null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Qt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&f(t)?t.call(o&&o.proxy):t;"production"!==Xe.NODE_ENV&&et(`injection "${String(e)}" not found.`)}else"production"!==Xe.NODE_ENV&&et("inject() can only be used inside setup() or functional components.")}(jt);return e||"production"!==Xe.NODE_ENV&&et("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}},Mt={};function Tt(e,t,n){const r=this.proxy,i=h(e)?e.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(r,e):()=>r[e]:e.bind(r,r);let c;f(t)?c=t:(c=t.handler,n=t);const a=wn(this),l=function(e,t,{immediate:n,deep:r,flush:i,once:c,onTrack:a,onTrigger:l}=o){if(t&&c){const e=t;t=(...t)=>{e(...t),k()}}"production"!==Xe.NODE_ENV&&void 0!==r&&"number"==typeof r&&et('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),"production"===Xe.NODE_ENV||t||(void 0!==n&&et('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==r&&et('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==c&&et('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const d=e=>{et("Invalid watch source: ",e,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=mn,h=e=>!0===r?e:Ft(e,!1===r?1:void 0);let _,g,v=!1,y=!1;if(Ge(e)?(_=()=>e.value,v=Be(e)):He(e)?(_=()=>h(e),v=!0):u(e)?(y=!0,v=e.some((e=>He(e)||Be(e))),_=()=>e.map((e=>Ge(e)?e.value:He(e)?h(e):f(e)?rt(e,p,2):void("production"!==Xe.NODE_ENV&&d(e))))):f(e)?_=t?()=>rt(e,p,2):()=>(g&&g(),st(e,p,3,[w])):(_=s,"production"!==Xe.NODE_ENV&&d(e)),t&&r){const e=_;_=()=>Ft(e())}let m,w=e=>{g=x.onStop=()=>{rt(e,p,4),g=x.onStop=void 0}};if(bn){if(w=s,t?n&&st(t,p,3,[_(),y?[]:void 0,w]):_(),"sync"!==i)return s;{const e=Pt();m=e.__watcherHandles||(e.__watcherHandles=[])}}let b=y?new Array(e.length).fill(Mt):Mt;const E=()=>{if(x.active&&x.dirty)if(t){const e=x.run();(r||v||(y?e.some(((e,t)=>O(e,b[t]))):O(e,b)))&&(g&&g(),st(t,p,3,[e,b===Mt?void 0:y&&b[0]===Mt?[]:b,w]),b=e)}else x.run()};let N;E.allowRecurse=!!t,"sync"===i?N=E:"post"===i?N=()=>Xt(E,p&&p.suspense):(E.pre=!0,p&&(E.id=p.uid),N=()=>yt(E));const x=new F(_,s,N),k=()=>{x.stop()};return"production"!==Xe.NODE_ENV&&(x.onTrack=a,x.onTrigger=l),t?n?E():b=x.run():"post"===i?Xt(x.run.bind(x),p&&p.suspense):x.run(),m&&m.push(k),k}(i,c.bind(r),n);return a(),l}function Ft(e,t,n=0,o){if(!g(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if((o=o||new Set).has(e))return e;if(o.add(e),Ge(e))Ft(e.value,t,n,o);else if(u(e))for(let r=0;r<e.length;r++)Ft(e[r],t,n,o);else if(p(e)||d(e))e.forEach((e=>{Ft(e,t,n,o)}));else if(b(e))for(const r in e)Ft(e[r],t,n,o);return e}
/*! #__NO_SIDE_EFFECTS__ */function It(e,t){return f(e)?(()=>c({name:e.name},t,{setup:e}))():e}const Lt=e=>e?4&e.vnode.shapeFlag?function(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((n=e.exposed,Object.isExtensible(n)&&x(n,"__v_skip",!0),He(t=n)?t:new Proxy(t,Qe)),{get:(t,n)=>n in t?t[n]:n in At?At[n](e):void 0,has:(e,t)=>t in e||t in At}));var t;var n}(e)||e.proxy:Lt(e.parent):null,At=c(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>"production"!==Xe.NODE_ENV?Ue(e.props):e.props,$attrs:e=>"production"!==Xe.NODE_ENV?Ue(e.attrs):e.attrs,$slots:e=>"production"!==Xe.NODE_ENV?Ue(e.slots):e.slots,$refs:e=>"production"!==Xe.NODE_ENV?Ue(e.refs):e.refs,$parent:e=>Lt(e.parent),$root:e=>Lt(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let a;c?a=c:r.length||n||o?(a={},r.length&&r.forEach((e=>Wt(a,e,i,!0))),Wt(a,t,i)):a=t;g(t)&&s.set(t,a);return a}(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,yt(e.update)}),$nextTick:e=>e.n||(e.n=vt.bind(e.proxy)),$watch:e=>Tt.bind(e)}),Ut=(e,t)=>e!==o&&!e.__isScriptSetup&&l(e,t),zt={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:c,type:a,appContext:u}=e;if("production"!==Xe.NODE_ENV&&"__isVue"===t)return!0;let d;if("$"!==t[0]){const a=c[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ut(r,t))return c[t]=1,r[t];if(s!==o&&l(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&l(d,t))return c[t]=3,i[t];if(n!==o&&l(n,t))return c[t]=4,n[t];c[t]=0}}const p=At[t];let f,_;return p?(("$attrs"===t||"production"!==Xe.NODE_ENV&&"$slots"===t)&&ee(e,"get",t),p(e)):(f=a.__cssModules)&&(f=f[t])?f:n!==o&&l(n,t)?(c[t]=4,n[t]):(_=u.config.globalProperties,l(_,t)?_[t]:void("production"===Xe.NODE_ENV||!$t||h(t)&&0===t.indexOf("__v")||(s!==o&&(e=>"_"===e||"$"===e)(t[0])&&l(s,t)?et(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===$t&&et(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))))},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ut(s,t)?(s[t]=n,!0):"production"!==Xe.NODE_ENV&&s.__isScriptSetup&&l(s,t)?(et(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):r!==o&&l(r,t)?(r[t]=n,!0):l(e.props,t)?("production"!==Xe.NODE_ENV&&et(`Attempting to mutate prop "${t}". Props are readonly.`),!1):"$"===t[0]&&t.slice(1)in e?("production"!==Xe.NODE_ENV&&et(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):("production"!==Xe.NODE_ENV&&t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},c){let a;return!!n[c]||e!==o&&l(e,c)||Ut(t,c)||(a=i[0])&&l(a,c)||l(r,c)||l(At,c)||l(s.config.globalProperties,c)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:l(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ht(e){return u(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}function Wt(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Wt(e,s,n,!0),r&&r.forEach((t=>Wt(e,t,n,!0)));for(const i in t)if(o&&"expose"===i)"production"!==Xe.NODE_ENV&&et('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const o=Bt[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i]}return e}"production"!==Xe.NODE_ENV&&(zt.ownKeys=e=>(et("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));const Bt={data:Jt,props:Gt,emits:Gt,methods:Zt,computed:Zt,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Zt,directives:Zt,watch:function(e,t){if(!e)return t;if(!t)return e;const n=c(Object.create(null),e);for(const o in t)n[o]=qt(e[o],t[o]);return n},provide:Jt,inject:function(e,t){return Zt(Kt(e),Kt(t))}};function Jt(e,t){return t?e?function(){return c(f(e)?e.call(this,this):e,f(t)?t.call(this,this):t)}:t:e}function Kt(e){if(u(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function qt(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?c(Object.create(null),e,t):t}function Gt(e,t){return e?u(e)&&u(t)?[...new Set([...e,...t])]:c(Object.create(null),Ht(e),Ht(null!=t?t:{})):t}let Qt=null;const Xt=function(e,t){t&&t.pendingBranch?u(e)?t.effects.push(...e):t.effects.push(e):wt(e)},Yt=Symbol.for("v-fgt"),en=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),nn=Symbol.for("v-stc"),on=[];let rn=null;function sn(e){return e.dynamicChildren=rn||r,on.pop(),rn=on[on.length-1]||null,rn&&rn.push(e),e}const cn="__vInternal",an=({key:e})=>null!=e?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?h(e)||Ge(e)||f(e)?{i:$t,r:e,k:t,f:!!n}:e:null);function un(e,t=null,n=null,o=0,r=null,s=(e===Yt?0:1),i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&an(t),ref:t&&ln(t),scopeId:Dt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return c?(vn(a,n),128&s&&e.normalize(a)):n&&(a.shapeFlag|=h(n)?8:16),"production"!==Xe.NODE_ENV&&a.key!=a.key&&et("VNode created with invalid key (NaN). VNode type:",a.type),!i&&rn&&(a.patchFlag>0||6&s)&&32!==a.patchFlag&&rn.push(a),a}const dn="production"!==Xe.NODE_ENV?(...e)=>pn(...e):pn;function pn(e,t=null,n=null,o=0,r=null,s=!1){if(e&&e!==Rt||("production"===Xe.NODE_ENV||e||et(`Invalid vnode type when creating vnode: ${e}.`),e=tn),(i=e)&&!0===i.__v_isVNode){const o=fn(e,t,!0);return n&&vn(o,n),!s&&rn&&(6&o.shapeFlag?rn[rn.indexOf(e)]=o:rn.push(o)),o.patchFlag|=-2,o}var i;if(kn(e)&&(e=e.__vccOpts),t){t=function(e){return e?Je(e)||cn in e?c({},e):e:null}(t);let{class:e,style:n}=t;e&&!h(e)&&(t.class=j(e)),g(n)&&(Je(n)&&!u(n)&&(n=c({},n)),t.style=V(n))}const a=h(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:g(e)?4:f(e)?2:0;return"production"!==Xe.NODE_ENV&&4&a&&Je(e)&&et("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.","\nComponent that was made reactive: ",e=Ke(e)),un(e,t,n,o,r,a,s,!0)}function fn(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:c}=e,a=t?function(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=j([t.class,o.class]));else if("style"===e)t.style=V([t.style,o.style]);else if(i(e)){const n=t[e],r=o[e];!r||n===r||u(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=o[e])}return t}(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&an(a),ref:t&&t.ref?n&&r?u(r)?r.concat(ln(t)):[r,ln(t)]:ln(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:"production"!==Xe.NODE_ENV&&-1===s&&u(c)?c.map(hn):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Yt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function hn(e){const t=fn(e);return u(e.children)&&(t.children=e.children.map(hn)),t}function _n(e=" ",t=0){return dn(en,null,e,t)}function gn(e,t){const n=dn(nn,null,e);return n.staticCount=t,n}function vn(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(u(t))n=16;else if("object"==typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),vn(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||cn in t?3===o&&$t&&(1===$t.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=$t}}else f(t)?(t={default:t,_ctx:$t},n=32):(t=String(t),64&o?(n=16,t=[_n(t)]):n=8);e.children=t,e.shapeFlag|=n}let yn,mn=null;{const e=S(),t=(t,n)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(n),e=>{o.length>1?o.forEach((t=>t(e))):o[0](e)}};yn=t("__VUE_INSTANCE_SETTERS__",(e=>mn=e)),t("__VUE_SSR_SETTERS__",(e=>bn=e))}const wn=e=>{const t=mn;return yn(e),e.scope.on(),()=>{e.scope.off(),yn(t)}};let bn=!1;const En=/(?:^|[-_])(\w)/g,Nn=e=>e.replace(En,(e=>e.toUpperCase())).replace(/[-_]/g,"");function On(e,t=!0){return f(e)?e.displayName||e.name:e.name||t&&e.__name}function xn(e,t,n=!1){let o=On(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1])}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?Nn(o):n?"App":"Anonymous"}function kn(e){return f(e)&&"__vccOpts"in e}"production"!=={}.NODE_ENV&&function(){if("production"===Xe.NODE_ENV||"undefined"==typeof window)return;const e={style:"color:#3ba776"},t={style:"color:#1677ff"},n={style:"color:#f5222d"},r={style:"color:#eb2f96"},s={header:t=>g(t)?t.__isVue?["div",e,"VueInstance"]:Ge(t)?["div",{},["span",e,h(t)],"<",l(t.value),">"]:He(t)?["div",{},["span",e,Be(t)?"ShallowReactive":"Reactive"],"<",l(t),">"+(We(t)?" (readonly)":"")]:We(t)?["div",{},["span",e,Be(t)?"ShallowReadonly":"Readonly"],"<",l(t),">"]:null:null,hasBody:e=>e&&e.__isVue,body(e){if(e&&e.__isVue)return["div",{},...i(e.$)]}};function i(e){const t=[];e.type.props&&e.props&&t.push(a("props",Ke(e.props))),e.setupState!==o&&t.push(a("setup",e.setupState)),e.data!==o&&t.push(a("data",Ke(e.data)));const n=d(e,"computed");n&&t.push(a("computed",n));const s=d(e,"inject");return s&&t.push(a("injected",s)),t.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:e}]]),t}function a(e,t){return t=c({},t),Object.keys(t).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},e],["div",{style:"padding-left:1.25em"},...Object.keys(t).map((e=>["div",{},["span",r,e+": "],l(t[e],!1)]))]]:["span",{}]}function l(e,o=!0){return"number"==typeof e?["span",t,e]:"string"==typeof e?["span",n,JSON.stringify(e)]:"boolean"==typeof e?["span",r,e]:g(e)?["object",{object:o?Ke(e):e}]:["span",n,String(e)]}function d(e,t){const n=e.type;if(f(n))return;const o={};for(const r in e.ctx)p(n,r,t)&&(o[r]=e.ctx[r]);return o}function p(e,t,n){const o=e[n];return!!(u(o)&&o.includes(t)||g(o)&&t in o)||!(!e.extends||!p(e.extends,t,n))||!(!e.mixins||!e.mixins.some((e=>p(e,t,n))))||void 0}function h(e){return Be(e)?"ShallowRef":e.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}();const Sn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Vn={},Cn={class:"center"},$n=[gn('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"></path></svg></div><h1 class="header">Advanced Security</h1><h2 class="subheader">Built-in safeguards for robust protection.</h2>',3)];const Dn=Sn(Vn,[["render",function(e,t){return function(e=!1){on.push(rn=e?null:[])}(),sn(un("main",Cn,$n,n,o,r,!0));var n,o,r}]]);e.mount=function(){return It(Dn)},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

module.exports.styles = `.center{padding:12px;display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center}.icon{background:#fff;border-radius:9999px;padding:8px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;color:#000}svg{height:36px;width:36px}.header{font-weight:700;font-size:16px;line-height:-.05em;text-align:center;word-break:break-word;letter-spacing:-.025em;margin-bottom:8px;color:#111827}.subheader{font-family:Roboto Slab,sans-serif;font-size:14px;font-weight:500;color:#4b5563;text-align:center}:host{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#e9d5ff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}

`;
module.exports.platform = `vue`;