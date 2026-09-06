import{$ as st,$a as hv,$b as me,$c as zf,A as Ii,Aa as Si,Ab as O,Ac as Wi,B as mu,Ba as lv,Bb as Q,Bc as Ev,C as Qb,Ca as B,Cb as P,Cc as uo,D as pu,Da as re,Db as Lf,Dc as mo,E as qe,Ea as Hi,Eb as Bf,Ec as po,F as xe,Fa as cc,Fb as wv,Fc as Rv,G as oc,Ga as cv,Gb as ve,Gc as Ae,H as K,Ha as be,Hb as j,Hc as qi,I as ya,Ia as Sa,Ib as Ea,Ic as J,J as lr,Ja as dv,Jb as Vf,Jc as ie,K as Le,Ka as ao,Kb as $f,Kc as Ir,L as Jb,La as oo,Lb as dr,Lc as Cu,M as ev,Ma as Da,Mb as Mv,Mc as kv,N as tv,Na as uv,Nb as le,Nc as ho,O as Qr,Oa as bt,Ob as T,Oc as Jt,P as nv,Pa as cr,Pb as Xt,Pc as it,Q as ro,Qa as Of,Qb as I,Qc as Fi,R as Jr,Ra as Ue,Rb as jf,Rc as Gf,S as Tf,Sa as Oe,Sb as gt,Sc as Tv,T as If,Ta as ne,Tb as _t,Tc as ta,U as iv,Ua as mv,Ub as w,Uc as Ln,V as Nf,Va as U,Vb as c,Vc as Iv,W as rv,Wa as wa,Wb as d,Wc as uc,X as hu,Xa as pv,Xb as A,Xc as Ee,Y as fu,Ya as _u,Yb as et,Yc as Nv,Z as Ff,Za as Ma,Zb as tt,Zc as $,_ as ea,_a as so,_b as mi,_c as zn,a as h,aa as ze,ab as fv,ac as pe,ad as Su,b as _,ba as x,bb as gv,bc as un,bd as mc,ca as av,cb as _v,cc as Te,d as Fe,da as ct,db as bv,dc as Et,e as Ef,ea as gu,eb as vv,ec as xv,f as lt,fa as _e,fb as yv,fc as Ni,g as Kb,ga as Ca,gb as lo,gc as Zt,h as F,ha as cn,hb as Cv,hc as D,i as wt,ia as z,ib as bu,ic as co,j as va,ja as Z,jb as vu,jc as N,k as Rf,ka as ov,kb as Je,kc as Be,l as lu,la as S,lb as p,lc as de,m as kf,ma as Y,mb as Mt,mc as Qt,n as Pt,na as s,nb as Pn,nc as Ke,o as cu,oa as Zn,ob as Ye,oc as H,p as ui,pa as sc,pb as Ce,pc as W,q as E,qa as sv,qb as Se,qc as Av,r as du,ra as dn,rb as dc,rc as pi,s as io,sa as Qn,sb as We,sc as ei,t as Xb,ta as Jn,tb as xa,tc as yt,u as Tr,ua as ae,ub as vt,uc as Di,v as Zb,va as oe,vb as Aa,vc as V,w as R,wa as Gn,wb as Sv,wc as Ct,x as jn,xa as lc,xb as yu,xc as m,y as te,ya as se,yb as Dv,yc as ce,z as uu,za as ue,zb as Pf,zc as ge}from"./chunk-XUV54GPF.js";var Fv=null;function Oi(){return Fv}function Uf(t){Fv??=t}var pc=class{},fo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:()=>s(Ov),providedIn:"platform"})}return t})();var Ov=(()=>{class t extends fo{_location;_history;_doc=s(ue);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Oi().getBaseHref(this._doc)}onPopState(e){let n=Oi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Oi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Bv(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Pv(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function na(t){return t&&t[0]!=="?"?`?${t}`:t}var Du=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:()=>s(DM),providedIn:"root"})}return t})(),SM=new S(""),DM=(()=>{class t extends Du{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??s(ue).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Bv(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+na(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,a){let o=this.prepareExternalUrl(r+na(a));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,a){let o=this.prepareExternalUrl(r+na(a));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Y(fo),Y(SM,8))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ia=(()=>{class t{_subject=new F;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=xM(Pv(Lv(n))),this._locationStrategy.onPopState(r=>{let a={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(a.hasUAVisualTransition=!0),this._subject.next(a)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+na(n))}normalize(e){return t.stripTrailingSlash(MM(this._basePath,Lv(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+na(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+na(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=na;static joinWithSlash=Bv;static stripTrailingSlash=Pv;static \u0275fac=function(n){return new(n||t)(Y(Du))};static \u0275prov=z({token:t,factory:()=>wM(),providedIn:"root"})}return t})();function wM(){return new ia(Y(Du))}function MM(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Lv(t){return t.replace(/\/index\.html$/,"")}function xM(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Un=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(Un||{}),ht=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(ht||{}),hi=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(hi||{}),Fr={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function $v(t){return Ni(t)[Zt.LocaleId]}function jv(t,i,e){let n=Ni(t),r=[n[Zt.DayPeriodsFormat],n[Zt.DayPeriodsStandalone]],a=Pi(r,i);return Pi(a,e)}function Gv(t,i,e){let n=Ni(t),r=[n[Zt.DaysFormat],n[Zt.DaysStandalone]],a=Pi(r,i);return Pi(a,e)}function zv(t,i,e){let n=Ni(t),r=[n[Zt.MonthsFormat],n[Zt.MonthsStandalone]],a=Pi(r,i);return Pi(a,e)}function Uv(t,i){let n=Ni(t)[Zt.Eras];return Pi(n,i)}function hc(t,i){let e=Ni(t);return Pi(e[Zt.DateFormat],i)}function fc(t,i){let e=Ni(t);return Pi(e[Zt.TimeFormat],i)}function gc(t,i){let n=Ni(t)[Zt.DateTimeFormat];return Pi(n,i)}function _c(t,i){let e=Ni(t),n=e[Zt.NumberSymbols][i];if(typeof n>"u"){if(i===Fr.CurrencyDecimal)return e[Zt.NumberSymbols][Fr.Decimal];if(i===Fr.CurrencyGroup)return e[Zt.NumberSymbols][Fr.Group]}return n}function Hv(t){if(!t[Zt.ExtraData])throw new _e(2303,!1)}function Wv(t){let i=Ni(t);return Hv(i),(i[Zt.ExtraData][2]||[]).map(n=>typeof n=="string"?Hf(n):[Hf(n[0]),Hf(n[1])])}function qv(t,i,e){let n=Ni(t);Hv(n);let r=[n[Zt.ExtraData][0],n[Zt.ExtraData][1]],a=Pi(r,i)||[];return Pi(a,e)||[]}function Pi(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new _e(2304,!1)}function Hf(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var AM=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,wu=Object.create(null),EM=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,RM=256;function Yv(t,i,e,n){let r=VM(t);kM(i),i=Nr(e,i)||i;let o=[],l;for(;i;)if(l=EM.exec(i),l){o=o.concat(l.slice(1));let g=o.pop();if(!g)break;i=g}else{o.push(i);break}let u=r.getTimezoneOffset();n&&(u=Xv(n,u),r=BM(r,n));let f="";return o.forEach(g=>{let v=PM(g);f+=v?v(r,e,u):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),f}function kM(t){if(t.length>RM)throw new _e(2300,!1)}function Ru(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Nr(t,i){let e=$v(t);if(wu[e]??=Object.create(null),wu[e][i])return wu[e][i];let n="";switch(i){case"shortDate":n=hc(t,hi.Short);break;case"mediumDate":n=hc(t,hi.Medium);break;case"longDate":n=hc(t,hi.Long);break;case"fullDate":n=hc(t,hi.Full);break;case"shortTime":n=fc(t,hi.Short);break;case"mediumTime":n=fc(t,hi.Medium);break;case"longTime":n=fc(t,hi.Long);break;case"fullTime":n=fc(t,hi.Full);break;case"short":let r=Nr(t,"shortTime"),a=Nr(t,"shortDate");n=Mu(gc(t,hi.Short),[r,a]);break;case"medium":let o=Nr(t,"mediumTime"),l=Nr(t,"mediumDate");n=Mu(gc(t,hi.Medium),[o,l]);break;case"long":let u=Nr(t,"longTime"),f=Nr(t,"longDate");n=Mu(gc(t,hi.Long),[u,f]);break;case"full":let g=Nr(t,"fullTime"),v=Nr(t,"fullDate");n=Mu(gc(t,hi.Full),[g,v]);break}return n&&(wu[e][i]=n),n}function Mu(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return Object.hasOwn(i,n)?i[n]:e})),t}function Yi(t,i,e="-",n,r){let a="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,a=e));let o=String(t);for(;o.length<i;)o="0"+o;return n&&(o=o.slice(o.length-i)),a+o}function TM(t,i){return Yi(t,3).substring(0,i)}function Lt(t,i,e=0,n=!1,r=!1){return function(a,o){let l=IM(t,a);if((e>0||l>-e)&&(l+=e),t===3)l===0&&e===-12&&(l=12);else if(t===6)return TM(l,i);let u=_c(o,Fr.MinusSign);return Yi(l,i,u,n,r)}}function IM(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new _e(2301,!1)}}function St(t,i,e=Un.Format,n=!1){return function(r,a){return NM(r,a,t,i,e,n)}}function NM(t,i,e,n,r,a){switch(e){case 2:return zv(i,r,n)[t.getMonth()];case 1:return Gv(i,r,n)[t.getDay()];case 0:let o=t.getHours(),l=t.getMinutes();if(a){let f=Wv(i),g=qv(i,r,n),v=f.findIndex(k=>{if(Array.isArray(k)){let[G,q]=k,ee=o>=G.hours&&l>=G.minutes,ye=o<q.hours||o===q.hours&&l<q.minutes;if(G.hours<q.hours){if(ee&&ye)return!0}else if(ee||ye)return!0}else if(k.hours===o&&k.minutes===l)return!0;return!1});if(v!==-1)return g[v]}return jv(i,r,n)[o<12?0:1];case 3:return Uv(i,n)[t.getFullYear()<=0?0:1];default:let u=e;throw new _e(2302,!1)}}function xu(t){return function(i,e,n){let r=-1*n,a=_c(e,Fr.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+Yi(o,2,a)+Yi(Math.abs(r%60),2,a);case 1:return"GMT"+(r>=0?"+":"")+Yi(o,1,a);case 2:return"GMT"+(r>=0?"+":"")+Yi(o,2,a)+":"+Yi(Math.abs(r%60),2,a);case 3:return n===0?"Z":(r>=0?"+":"")+Yi(o,2,a)+":"+Yi(Math.abs(r%60),2,a);default:throw new _e(2310,!1)}}}var FM=0,Eu=4;function OM(t){let i=Ru(t,FM,1).getDay();return Ru(t,0,1+(i<=Eu?Eu:Eu+7)-i)}function Kv(t){let i=t.getDay(),e=i===0?-3:Eu-i;return Ru(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Wf(t,i=!1){return function(e,n){let r;if(i){let a=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,o=e.getDate();r=1+Math.floor((o+a)/7)}else{let a=Kv(e),o=OM(a.getFullYear()),l=a.getTime()-o.getTime();r=1+Math.round(l/6048e5)}return Yi(r,t,_c(n,Fr.MinusSign))}}function Au(t,i=!1){return function(e,n){let a=Kv(e).getFullYear();return Yi(a,t,_c(n,Fr.MinusSign),i)}}var qf=Object.create(null);function PM(t){if(qf[t])return qf[t];let i;switch(t){case"G":case"GG":case"GGG":i=St(3,ht.Abbreviated);break;case"GGGG":i=St(3,ht.Wide);break;case"GGGGG":i=St(3,ht.Narrow);break;case"y":i=Lt(0,1,0,!1,!0);break;case"yy":i=Lt(0,2,0,!0,!0);break;case"yyy":i=Lt(0,3,0,!1,!0);break;case"yyyy":i=Lt(0,4,0,!1,!0);break;case"Y":i=Au(1);break;case"YY":i=Au(2,!0);break;case"YYY":i=Au(3);break;case"YYYY":i=Au(4);break;case"M":case"L":i=Lt(1,1,1);break;case"MM":case"LL":i=Lt(1,2,1);break;case"MMM":i=St(2,ht.Abbreviated);break;case"MMMM":i=St(2,ht.Wide);break;case"MMMMM":i=St(2,ht.Narrow);break;case"LLL":i=St(2,ht.Abbreviated,Un.Standalone);break;case"LLLL":i=St(2,ht.Wide,Un.Standalone);break;case"LLLLL":i=St(2,ht.Narrow,Un.Standalone);break;case"w":i=Wf(1);break;case"ww":i=Wf(2);break;case"W":i=Wf(1,!0);break;case"d":i=Lt(2,1);break;case"dd":i=Lt(2,2);break;case"c":case"cc":i=Lt(7,1);break;case"ccc":i=St(1,ht.Abbreviated,Un.Standalone);break;case"cccc":i=St(1,ht.Wide,Un.Standalone);break;case"ccccc":i=St(1,ht.Narrow,Un.Standalone);break;case"cccccc":i=St(1,ht.Short,Un.Standalone);break;case"E":case"EE":case"EEE":i=St(1,ht.Abbreviated);break;case"EEEE":i=St(1,ht.Wide);break;case"EEEEE":i=St(1,ht.Narrow);break;case"EEEEEE":i=St(1,ht.Short);break;case"a":case"aa":case"aaa":i=St(0,ht.Abbreviated);break;case"aaaa":i=St(0,ht.Wide);break;case"aaaaa":i=St(0,ht.Narrow);break;case"b":case"bb":case"bbb":i=St(0,ht.Abbreviated,Un.Standalone,!0);break;case"bbbb":i=St(0,ht.Wide,Un.Standalone,!0);break;case"bbbbb":i=St(0,ht.Narrow,Un.Standalone,!0);break;case"B":case"BB":case"BBB":i=St(0,ht.Abbreviated,Un.Format,!0);break;case"BBBB":i=St(0,ht.Wide,Un.Format,!0);break;case"BBBBB":i=St(0,ht.Narrow,Un.Format,!0);break;case"h":i=Lt(3,1,-12);break;case"hh":i=Lt(3,2,-12);break;case"H":i=Lt(3,1);break;case"HH":i=Lt(3,2);break;case"m":i=Lt(4,1);break;case"mm":i=Lt(4,2);break;case"s":i=Lt(5,1);break;case"ss":i=Lt(5,2);break;case"S":i=Lt(6,1);break;case"SS":i=Lt(6,2);break;case"SSS":i=Lt(6,3);break;case"Z":case"ZZ":case"ZZZ":i=xu(0);break;case"ZZZZZ":i=xu(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=xu(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=xu(2);break;default:return null}return qf[t]=i,i}function Xv(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function LM(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function BM(t,i,e){let r=t.getTimezoneOffset(),a=Xv(i,r);return LM(t,-1*(a-r))}function VM(t){if(Vv(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,a=1,o=1]=t.split("-").map(l=>+l);return Ru(r,a-1,o)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(AM))return $M(n)}let i=new Date(t);if(!Vv(i))throw new _e(2311,!1);return i}function $M(t){let i=new Date(0),e=0,n=0,r=t[8]?i.setUTCFullYear:i.setFullYear,a=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),r.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let o=Number(t[4]||0)-e,l=Number(t[5]||0)-n,u=Number(t[6]||0),f=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return a.call(i,o,l,u,f),i}function Vv(t){return t instanceof Date&&!isNaN(t.valueOf())}var bc=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(se);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(We(vt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ue]})}return t})();function Zv(t,i){return new _e(2100,!1)}var Yf=class{createSubscription(i,e,n){return it(()=>i.subscribe({next:e,error:n}))}dispose(i){it(()=>i.unsubscribe())}},Kf=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},jM=new Kf,GM=new Yf,dt=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=s(cc);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Aa(e))return jM;if(Sv(e))return GM;throw Zv(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(We(Ee,16))};static \u0275pipe=Lf({name:"async",type:t,pure:!1})}return t})();var zM="mediumDate",Qv=new S(""),Jv=new S(""),Or=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,a){if(e==null||e===""||e!==e)return null;try{let o=n??this.defaultOptions?.dateFormat??zM,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Yv(e,o,a||this.locale,l)}catch(o){throw Zv(t,o.message)}}static \u0275fac=function(n){return new(n||t)(We(ho,16),We(Qv,24),We(Jv,24))};static \u0275pipe=Lf({name:"date",type:t,pure:!0})}return t})();var $e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})();function vc(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,a]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()!==i)continue;let o=a;try{o=decodeURIComponent(a)}catch{}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var UM=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Xf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(UM),r},providedIn:"root"})}return t})();function ey(t,i,e){return xv(t,i,e)}var Qf="browser";function ty(t){return t===Qf}var yc=class{_doc;constructor(i){this._doc=i}manager},ku=(()=>{class t extends yc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,a){return e.addEventListener(n,r,a),()=>this.removeEventListener(e,n,r,a)}removeEventListener(e,n,r,a){return e.removeEventListener(n,r,a)}static \u0275fac=function(n){return new(n||t)(Y(ue))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Nu=new S(""),ng=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof ku));this._plugins=r.slice().reverse();let a=e.find(o=>o instanceof ku);a&&this._plugins.push(a)}addEventListener(e,n,r,a){return this._findPluginFor(n).addEventListener(e,n,r,a)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(a=>a.supports(e)),!n)throw new _e(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(Y(Nu),Y(re))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Jf="ng-app-id";function ny(t){for(let i of t)i.remove()}function iy(t,i){let e=i.createElement("style");return e.textContent=t,e}function qM(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Jf}="${i}"],link[${Jf}="${i}"]`);if(!r||r.length===0)return!1;for(let a of r)a.removeAttribute(Jf),a instanceof HTMLLinkElement?n.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]});return!0}function tg(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ig=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,a={}){this.doc=e,this.appId=n,this.nonce=r,qM(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,iy);n?.forEach(r=>this.addUsage(r,this.external,tg))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let a=n.get(e);a?a.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(ny(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ny(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,iy(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,tg(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let r=[];for(let a of n.elements)a.parentNode===e?a.remove():r.push(a);n.elements=r}}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(Y(ue),Y(Sa),Y(Da,8),Y(ao))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),eg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rg=/%COMP%/g;var ay="%COMP%",YM=`_nghost-${ay}`,KM=`_ngcontent-${ay}`,XM=!0,ZM=new S("",{factory:()=>XM}),QM=new S("");function JM(t){return KM.replace(rg,t)}function ex(t){return YM.replace(rg,t)}function oy(t,i){return i.map(e=>e.replace(rg,t))}var Dc=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,r,a,o,l,u=null,f=null,g=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=l,this.nonce=u,this.tracingService=f,this.cssVarNamespace=g??"",this.defaultRenderer=new Cc(e,o,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Iu?r.applyToHost(e):r instanceof Sc&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,a=r.get(n.id);if(!a){let o=this.doc,l=this.ngZone,u=this.eventManager,f=this.sharedStylesHost,g=this.removeStylesOnCompDestroy,v=this.tracingService;switch(n.encapsulation){case _u.Emulated:a=new Iu(u,f,n,this.appId,g,o,l,v,this.cssVarNamespace);break;case _u.ShadowDom:return new Tu(u,e,n,o,l,this.nonce,v,this.cssVarNamespace,f);case _u.ExperimentalIsolatedShadowDom:return new Tu(u,e,n,o,l,this.nonce,v,this.cssVarNamespace);default:a=new Sc(u,f,n,g,o,l,v,this.cssVarNamespace);break}r.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(Y(ng),Y(dc),Y(Sa),Y(ZM),Y(ue),Y(re),Y(Da),Y(bu,8),Y(QM,8))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Cc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,a=""){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r,this.cssVarNamespace=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(eg[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ry(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){if(i){let r=ry(i)?i.content:i;if(n!=null&&n.parentNode!==r)throw new _e(-5106,!1);r.insertBefore(e,n)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new _e(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let a=eg[r];a?i.setAttributeNS(a,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=eg[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||r&(lo.DashCase|lo.Important)?i.style.setProperty(e,n,r&lo.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||n&lo.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Oi().getGlobalEventTarget(this.doc,i),!i))throw new _e(-5102,!1);let a=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(i,e,a)),this.eventManager.addEventListener(i,e,a,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ry(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Tu=class extends Cc{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,a,o,l,u,f){super(i,r,a,l,u),this.hostEl=e,this.sharedStylesHost=f,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let g=n.styles;g=oy(n.id,g).map(k=>k.replace(/%NS%/g,u));for(let k of g){let G=document.createElement("style");o&&G.setAttribute("nonce",o),G.textContent=k,this.shadowRoot.appendChild(G)}let v=n.getExternalStyles?.();if(v)for(let k of v){let G=tg(k,r);o&&G.setAttribute("nonce",o),this.shadowRoot.appendChild(G)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Sc=class extends Cc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,a,o,l,u,f){super(i,a,o,l,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let g=n.styles,v=f?oy(f,g):g;this.styles=v.map(k=>k.replace(/%NS%/g,u)),this.styleUrls=n.getExternalStyles?.(f)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Cv.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Iu=class extends Sc{contentAttr;hostAttr;constructor(i,e,n,r,a,o,l,u,f){let g=r+"-"+n.id;super(i,e,n,a,o,l,u,f,g),this.contentAttr=JM(g),this.hostAttr=ex(g)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Fu=class t extends pc{supportsDOMEvents=!0;static makeCurrent(){Uf(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=nx();return e==null?null:ix(e)}resetBaseElement(){wc=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return vc(document.cookie,i)}},wc=null;function nx(){return wc=wc||document.head.querySelector("base"),wc?wc.getAttribute("href"):null}function ix(t){return new URL(t,document.baseURI).pathname}var sy=["alt","control","meta","shift"],rx={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ax={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},ly=(()=>{class t extends yc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,a){let o=t.parseEventName(n),l=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Oi().onAndCancel(e,o.domEventName,l,a))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let a=t._normalizeKey(n.pop()),o="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),o="code."),sy.forEach(f=>{let g=n.indexOf(f);g>-1&&(n.splice(g,1),o+=f+".")}),o+=a,n.length!=0||a.length===0)return null;let u={};return u.domEventName=r,u.fullKey=o,u}static matchEventFullKeyCode(e,n){let r=rx[e.key]||e.key,a="";return n.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),sy.forEach(o=>{if(o!==r){let l=ax[o];l(e)&&(a+=o+".")}}),a+=r,a===n)}static eventCallback(e,n,r){return a=>{t.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>n(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(Y(ue))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();async function ag(t,i,e){let n=h({rootComponent:t},ox(i,e));return Nv(n)}function ox(t,i){return{platformRef:i?.platformRef,appProviders:[...ux,...t?.providers??[]],platformProviders:dx}}function sx(){Fu.makeCurrent()}function lx(){return new Hi}function cx(){return pv(document),document}var dx=[{provide:ao,useValue:Qf},{provide:dv,useValue:sx,multi:!0},{provide:ue,useFactory:cx}];var ux=[{provide:sv,useValue:"root"},{provide:Hi,useFactory:lx},{provide:Nu,useClass:ku,multi:!0},{provide:Nu,useClass:ly,multi:!0},Dc,{provide:dc,useClass:ig},{provide:ig,useExisting:dc},ng,{provide:Pn,useExisting:Dc},[]];var pr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),a=e.slice(n+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,n]of i.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...n),this.headers.set(e,r);break;case"d":let a=i.value;if(a===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(a)?a:[a],l=this.headers.get(e);if(!l)return;l=l.filter(u=>o.indexOf(u)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Pu=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Lu=class{encodeKey(i){return cy(i)}encodeValue(i){return cy(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function mx(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[o,l]=a==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,a)),i.decodeValue(r.slice(a+1))],u=e.get(o)||[];u.push(l),e.set(o,u)}),e}var px=/%(\d[a-f0-9])/gi,hx={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function cy(t){return encodeURIComponent(t).replace(px,(i,e)=>hx[e]??i)}function Ou(t){return`${t}`}var Pr=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Lu,i.fromString){if(i.fromObject)throw new _e(2805,!1);this.map=mx(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Ou):[Ou(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(a=>{e.push({param:n,value:a,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Ou(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=(this.map.get(i.param)||[]).slice(),r=n.indexOf(Ou(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function fx(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function dy(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function uy(t){return typeof Blob<"u"&&t instanceof Blob}function my(t){return typeof FormData<"u"&&t instanceof FormData}function gx(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Mc="Content-Type",Bu="Accept",fy="text/plain",gy="application/json",_y=`${gy}, ${fy}, */*`,go=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let a;if(fx(this.method)||r?(this.body=n!==void 0?n:null,a=r):a=n,a){if(this.reportProgress=!!a.reportProgress,this.reportUploadProgress=!!a.reportUploadProgress,this.reportDownloadProgress=!!a.reportDownloadProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new _e(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer!==void 0&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new pr,this.context??=new Pu,!this.params)this.params=new Pr,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e,u="",f=e.indexOf("#");f!==-1&&(u=e.substring(f),l=e.substring(0,f));let g=l.indexOf("?"),v=g===-1?"?":g<l.length-1?"&":"";this.urlWithParams=l+v+o+u}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||dy(this.body)||uy(this.body)||my(this.body)||gx(this.body)?this.body:this.body instanceof Pr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||my(this.body)?null:uy(this.body)?this.body.type||null:dy(this.body)?null:typeof this.body=="string"?fy:this.body instanceof Pr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?gy:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,a=i.keepalive??this.keepalive,o=i.priority||this.priority,l=i.cache||this.cache,u=i.mode||this.mode,f=i.redirect||this.redirect,g=i.credentials||this.credentials,v=i.referrer??this.referrer,k=i.integrity||this.integrity,G=i.referrerPolicy||this.referrerPolicy,q=i.transferCache??this.transferCache,ee=i.timeout??this.timeout,ye=i.body!==void 0?i.body:this.body,ke=i.withCredentials??this.withCredentials,De=i.reportProgress??this.reportProgress,Me=i.reportUploadProgress??this.reportUploadProgress,je=i.reportDownloadProgress??this.reportDownloadProgress,Qe=i.headers||this.headers,Ne=i.params||this.params,ln=i.context??this.context;return i.setHeaders!==void 0&&(Qe=Object.keys(i.setHeaders).reduce((Ot,di)=>Ot.set(di,i.setHeaders[di]),Qe)),i.setParams&&(Ne=Object.keys(i.setParams).reduce((Ot,di)=>Ot.set(di,i.setParams[di]),Ne)),new t(e,n,ye,{params:Ne,headers:Qe,context:ln,reportProgress:De,reportUploadProgress:Me,reportDownloadProgress:je,responseType:r,withCredentials:ke,transferCache:q,keepalive:a,cache:l,priority:o,timeout:ee,mode:u,redirect:f,credentials:g,referrer:v,integrity:k,referrerPolicy:G})}},mr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(mr||{}),_o=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new pr,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},xc=class t extends _o{constructor(i={}){super(i)}type=mr.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},bo=class t extends _o{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=mr.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},ur=class extends _o{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},by=200,_x=204;var bx=/^\)\]\}',?\n/,HV=1024*1024,vy=new S("",{factory:()=>null}),Vu=(()=>{class t{fetchImpl=s(sg,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=s(re);destroyRef=s(Si);maxResponseSize=s(vy);handle(e){return new lt(n=>{let r=new AbortController,a=!1,o={next:u=>{u.type===mr.Response&&(a=!0),n.next(u)},error:u=>{a=!0,n.error(u)},complete:()=>{a=!0,n.complete()}};this.doRequest(e,r.signal,o).then(lg,u=>o.error(new ur({error:u})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!a&&!r.signal.aborted&&r.abort()}})}async doRequest(e,n,r){let a=this.createRequestInit(e),o;try{let ye=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:n},a)));vx(ye),r.next({type:mr.Sent}),o=await ye}catch(ye){r.error(new ur({error:ye,status:ye.status??0,statusText:ye.statusText,url:e.urlWithParams,headers:ye.headers}));return}let l=new pr(o.headers),u=o.statusText,f=o.url||e.urlWithParams,g=o.status,v=null,k=e.reportProgress||e.reportDownloadProgress;if(k&&r.next(new xc({headers:l,status:g,statusText:u,url:f})),o.body){let ye=o.headers.get(Mc)??"",ke=o.headers.get("content-length"),De=ke!==null?Number(ke):NaN;this.maxResponseSize!==null&&Number.isFinite(De)&&De>this.maxResponseSize&&(await o.body.cancel(),py(this.maxResponseSize));let Me=[],je=o.body.getReader(),Qe=0,Ne,ln,Ot=typeof Zone<"u"&&Zone.current,di=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await je.cancel(),di=!0;break}let{done:xf,value:Af}=await je.read();if(xf)break;if(Me.push(Af),Qe+=Af.length,this.maxResponseSize!==null&&Qe>this.maxResponseSize&&(await je.cancel(),py(this.maxResponseSize)),k){ln=e.responseType==="text"?(ln??"")+(Ne??=hy(ye)).decode(Af,{stream:!0}):void 0;let Yb=()=>r.next({type:mr.DownloadProgress,total:Number.isFinite(De)?De:void 0,loaded:Qe,partialText:ln});Ot?Ot.run(Yb):Yb()}}}),di){r.complete();return}let CM=this.concatChunks(Me,Qe);try{v=this.parseBody(e,CM,ye,g)}catch(xf){r.error(new ur({error:xf,headers:new pr(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}g===0&&(g=v?by:0);let G=g>=200&&g<300,q=o.redirected,ee=o.type;G?(r.next(new bo({body:v,headers:l,status:g,statusText:u,url:f,redirected:q,responseType:ee})),r.complete()):r.error(new ur({error:v,headers:l,status:g,statusText:u,url:f,redirected:q,responseType:ee}))}parseBody(e,n,r,a){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(bx,"");if(o==="")return null;try{return JSON.parse(o)}catch(l){if(a<200||a>=300)return o;throw l}case"text":return hy(r).decode(n);case"blob":return new Blob([n],{type:r});case"arraybuffer":return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new _e(2824,!1);let n={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((a,o)=>n[a]=o.join(",")),e.headers.has(Bu)||(n[Bu]=_y),!e.headers.has(Mc)){let a=e.detectContentTypeHeader();a!==null&&(n[Mc]=a)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let r=new Uint8Array(n),a=0;for(let o of e)r.set(o,a),a+=o.length;return r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),sg=class{};function lg(){}function vx(t){t.then(lg,lg)}function py(t){throw new _e(-2825,!1)}var yx=/charset=\s*["']?([^;"'\s]+)["']?/i;function hy(t){let i=t.match(yx);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var Cx=new S("",{factory:()=>!0}),Sx="XSRF-TOKEN",Dx=new S("",{factory:()=>Sx}),wx="X-XSRF-TOKEN",Mx=new S("",{factory:()=>wx}),xx=(()=>{class t{cookieName=s(Dx);doc=s(ue);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=vc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),yy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(xx),r},providedIn:"root"})}return t})();function Cy(t,i){if(!s(Cx)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=s(fo).href,{origin:a}=new URL(r),{origin:o}=new URL(t.url,a);if(a!==o)return i(t)}catch{return i(t)}let e=s(yy).getToken(),n=s(Mx);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Ax(t,i){return i(t)}function Ex(t,i,e){return(n,r)=>Qn(e,()=>i(n,a=>t(a,r)))}var dg=new S("",{factory:()=>[Cy]}),Sy=new S(""),Dy=new S("",{factory:()=>!0});var ju=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(Vu),r},providedIn:"root"})}return t})();var $u=(()=>{class t{backend;injector;chain=null;pendingTasks=s(Of);contributeToStability=s(Dy);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let r=this.injector.get(Gu,null,{skipSelf:!0}),a=r!==null&&this.backend===r,o=this.injector.get(Sy,[],a?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(dg),...o]));this.chain=l.reduceRight((u,f)=>Ex(u,f,this.injector),Ax)}let n=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return it(()=>n(e,a=>this.backend.handle(a))).pipe(ro(r))}else return it(()=>n(e,r=>this.backend.handle(r)))}static \u0275fac=function(n){return new(n||t)(Y(ju),Y(dn))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y($u),r},providedIn:"root"})}return t})();function og(t,i){return h({body:i},t)}var kt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let a;if(e instanceof go)a=e;else{let u;r.headers instanceof pr?u=r.headers:u=new pr(r.headers);let f;r.params&&(r.params instanceof Pr?f=r.params:f=new Pr({fromObject:r.params})),a=new go(e,n,r.body!==void 0?r.body:null,{headers:u,context:r.context,params:f,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=E(a).pipe(ya(u=>this.handler.handle(u)));if(e instanceof go||r.observe==="events")return o;let l=o.pipe(xe(u=>u instanceof bo));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new _e(2806,!1);return u.body}));case"blob":return l.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new _e(2807,!1);return u.body}));case"text":return l.pipe(R(u=>{if(u.body!==null&&typeof u.body!="string")throw new _e(2808,!1);return u.body}));default:return l.pipe(R(u=>u.body))}case"response":return l;default:throw new _e(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Pr().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,og(r,n))}post(e,n,r={}){return this.request("POST",e,og(r,n))}put(e,n,r={}){return this.request("PUT",e,og(r,n))}static \u0275fac=function(n){return new(n||t)(Y(Gu))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rx=/^\)\]\}',?\n/;var cg=(()=>{class t{xhrFactory;tracingService=s(bu,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new _e(-2800,!1);let n=this.xhrFactory;return E(null).pipe(ze(()=>new lt(a=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((De,Me)=>o.setRequestHeader(De,Me.join(","))),e.headers.has(Bu)||o.setRequestHeader(Bu,_y),!e.headers.has(Mc)){let De=e.detectContentTypeHeader();De!==null&&o.setRequestHeader(Mc,De)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let De=e.responseType.toLowerCase();o.responseType=De!=="json"?De:"text"}let l=e.serializeBody(),u=null,f=()=>{if(u!==null)return u;let De=o.statusText||"OK",Me=new pr(o.getAllResponseHeaders()),je=o.responseURL||e.url;return u=new xc({headers:Me,status:o.status,statusText:De,url:je}),u},g=this.maybePropagateTrace(()=>{let{headers:De,status:Me,statusText:je,url:Qe}=f(),Ne=null;Me!==_x&&(Ne=typeof o.response>"u"?o.responseText:o.response),Me===0&&(Me=Ne?by:0);let ln=Me>=200&&Me<300;if(e.responseType==="json"&&typeof Ne=="string"){let Ot=Ne;Ne=Ne.replace(Rx,"");try{Ne=Ne!==""?JSON.parse(Ne):null}catch(di){Ne=Ot,ln&&(ln=!1,Ne={error:di,text:Ne})}}ln?(a.next(new bo({body:Ne,headers:De,status:Me,statusText:je,url:Qe||void 0})),a.complete()):a.error(new ur({error:Ne,headers:De,status:Me,statusText:je,url:Qe||void 0}))}),v=this.maybePropagateTrace(De=>{let{url:Me}=f(),je=new ur({error:De,status:o.status||0,statusText:o.statusText||"Unknown Error",url:Me||void 0});a.error(je)}),k=v;e.timeout&&(k=this.maybePropagateTrace(De=>{let{url:Me}=f(),je=new ur({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:Me||void 0});a.error(je)}));let G=!1,q=this.maybePropagateTrace(De=>{G||(a.next(f()),G=!0);let Me={type:mr.DownloadProgress,loaded:De.loaded};De.lengthComputable&&(Me.total=De.total),e.responseType==="text"&&o.responseText&&(Me.partialText=o.responseText),a.next(Me)}),ee=this.maybePropagateTrace(De=>{let Me={type:mr.UploadProgress,loaded:De.loaded};De.lengthComputable&&(Me.total=De.total),a.next(Me)});o.addEventListener("load",g),o.addEventListener("error",v),o.addEventListener("timeout",k),o.addEventListener("abort",v);let ye=e.reportProgress||e.reportUploadProgress,ke=e.reportProgress||e.reportDownloadProgress;return ke&&o.addEventListener("progress",q),ye&&l!==null&&o.upload&&o.upload.addEventListener("progress",ee),o.send(l),a.next({type:mr.Sent}),()=>{o.removeEventListener("error",v),o.removeEventListener("abort",v),o.removeEventListener("load",g),o.removeEventListener("timeout",k),ke&&o.removeEventListener("progress",q),ye&&l!==null&&o.upload&&o.upload.removeEventListener("progress",ee),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||t)(Y(Xf))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zu=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(zu||{});function wy(t,i){return{\u0275kind:t,\u0275providers:i}}function ug(...t){let i=[kt,Vu,$u,{provide:Gu,useExisting:$u},{provide:ju,useFactory:()=>s(Vu)},{provide:dg,useValue:Cy,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Zn(i)}function mg(t){return wy(zu.Interceptors,t.map(i=>({provide:dg,useValue:i,multi:!0})))}function pg(){return wy(zu.Xhr,[cg,{provide:ju,useExisting:cg}])}var My=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(Y(ue))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ac=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=z({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(Ix),r},providedIn:"root"})}return t})(),Ix=(()=>{class t extends Ac{_doc=s(ue);sanitize(e,n){if(n==null)return null;switch(e){case Jn.NONE:return n;case Jn.HTML:return so(n,"HTML")?Ma(n):yv(this._doc,String(n)).toString();case Jn.STYLE:return so(n,"Style")?Ma(n):n;case Jn.SCRIPT:if(so(n,"Script"))return Ma(n);throw new _e(5200,!1);case Jn.URL:return so(n,"URL")?Ma(n):vv(String(n));case Jn.RESOURCE_URL:if(so(n,"ResourceURL"))return Ma(n);throw new _e(-5201,!1);default:throw new _e(5202,!1)}}bypassSecurityTrustHtml(e){return hv(e)}bypassSecurityTrustStyle(e){return fv(e)}bypassSecurityTrustScript(e){return gv(e)}bypassSecurityTrustUrl(e){return _v(e)}bypassSecurityTrustResourceUrl(e){return bv(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var Ie="primary",jc=Symbol("RouteTitle"),bg=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ka(t){return new bg(t)}function hg(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],a=i[n];if(r[0]===":")e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function Fy(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let u={},f=t.slice(0,n.length);return hg(n,f,u)?{consumed:f,posParams:u}:null}if(r!==n.lastIndexOf("**"))return null;let a=n.slice(0,r),o=n.slice(r+1);if(a.length+o.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!hg(a,t.slice(0,a.length),l)||!hg(o,t.slice(t.length-o.length),l)?null:{consumed:t,posParams:l}}function Ku(t){return new Promise((i,e)=>{t.pipe(Jr()).subscribe({next:n=>i(n),error:n=>e(n)})})}function Fx(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!hr(t[e],i[e]))return!1;return!0}function hr(t,i){let e=t?vg(t):void 0,n=i?vg(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!Oy(t[r],i[r]))return!1;return!0}function vg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Oy(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,a)=>n[a]===r)}else return t===i}function Ox(t){return t.length>0?t[t.length-1]:null}function Na(t){return io(t)?t:Aa(t)?ui(Promise.resolve(t)):E(t)}function Py(t){return io(t)?Ku(t):Promise.resolve(t)}var Px={exact:Vy,subset:$y},Ly={exact:Lx,subset:Bx,ignored:()=>!0},By={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},yg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ay(t,i,e){return Px[e.paths](t.root,i.root,e.matrixParams)&&Ly[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function Lx(t,i){return hr(t,i)}function Vy(t,i,e){if(!Ra(t.segments,i.segments)||!Wu(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Vy(t.children[n],i.children[n],e))return!1;return!0}function Bx(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Oy(t[e],i[e]))}function $y(t,i,e){return jy(t,i,i.segments,e)}function jy(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ra(r,e)||i.hasChildren()||!Wu(r,e,n))}else if(t.segments.length===e.length){if(!Ra(t.segments,e)||!Wu(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!$y(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),a=e.slice(t.segments.length);return!Ra(t.segments,r)||!Wu(t.segments,r,n)||!t.children[Ie]?!1:jy(t.children[Ie],i,a,n)}}function Wu(t,i,e){return i.every((n,r)=>Ly[e](t[r].parameters,n.parameters))}var Bi=class{root;queryParams;fragment;_queryParamMap;constructor(i=new rt([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ka(this.queryParams),this._queryParamMap}toString(){return jx.serialize(this)}},rt=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qu(this)}},ra=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ka(this.parameters),this._parameterMap}toString(){return zy(this)}};function Vx(t,i){return Ra(t,i)&&t.every((e,n)=>hr(e.parameters,i[n].parameters))}function Ra(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function $x(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===Ie&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==Ie&&(e=e.concat(i(r,n)))}),e}var Gc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:()=>new aa})}return t})(),aa=class{parse(i){let e=new Sg(i);return new Bi(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Ec(i.root,!0)}`,n=Ux(i.queryParams),r=typeof i.fragment=="string"?`#${Gx(i.fragment)}`:"";return`${e}${n}${r}`}},jx=new aa;function qu(t){return t.segments.map(i=>zy(i)).join("/")}function Ec(t,i){if(!t.hasChildren())return qu(t);if(i){let e=t.children[Ie]?Ec(t.children[Ie],!1):"",n=[];return Object.entries(t.children).forEach(([r,a])=>{r!==Ie&&n.push(`${r}:${Ec(a,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=$x(t,(n,r)=>r===Ie?[Ec(t.children[Ie],!1)]:[`${r}:${Ec(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[Ie]!=null?`${qu(t)}/${e[0]}`:`${qu(t)}/(${e.join("//")})`}}function Gy(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Uu(t){return Gy(t).replace(/%3B/gi,";")}function Gx(t){return encodeURI(t)}function Cg(t){return Gy(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Yu(t){return decodeURIComponent(t)}function Ey(t){return Yu(t.replace(/\+/g,"%20"))}function zy(t){return`${Cg(t.path)}${zx(t.parameters)}`}function zx(t){return Object.entries(t).map(([i,e])=>`;${Cg(i)}=${Cg(e)}`).join("")}function Ux(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Uu(e)}=${Uu(r)}`).join("&"):`${Uu(e)}=${Uu(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Hx=/^[^\/()?;#]+/;function fg(t){let i=t.match(Hx);return i?i[0]:""}var Wx=/^[^\/()?;=#]+/;function qx(t){let i=t.match(Wx);return i?i[0]:""}var Yx=/^[^=?&#]+/;function Kx(t){let i=t.match(Yx);return i?i[0]:""}var Xx=/^[^&#]+/;function Zx(t){let i=t.match(Xx);return i?i[0]:""}var Sg=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new rt([],{}):new rt([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new _e(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[Ie]=new rt(e,n)),r}parseSegment(){let i=fg(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new _e(4009,!1);return this.capture(i),new ra(Yu(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=qx(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=fg(this.remaining);r&&(n=r,this.capture(n))}i[Yu(e)]=Yu(n)}parseQueryParam(i){let e=Kx(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=Zx(this.remaining);o&&(n=o,this.capture(n))}let r=Ey(e),a=Ey(n);if(Object.hasOwn(i,r)){let o=i[r];Array.isArray(o)||(o=[o],i[r]=o),o.push(a)}else i[r]=a}parseParens(i,e){let n=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=fg(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new _e(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=Ie);let l=this.parseChildren(e+1);n[o??Ie]=Object.keys(l).length===1&&l[Ie]?l[Ie]:new rt([],l),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new _e(4011,!1)}};function Uy(t){return t.segments.length>0?new rt([],{[Ie]:t}):t}function Hy(t){let i=Object.create(null);for(let[n,r]of Object.entries(t.children)){let a=Hy(r);if(n===Ie&&a.segments.length===0&&a.hasChildren())for(let[o,l]of Object.entries(a.children))i[o]=l;else(a.segments.length>0||a.hasChildren())&&(i[n]=a)}let e=new rt(t.segments,i);return Qx(e)}function Qx(t){if(t.numberOfChildren===1&&t.children[Ie]){let i=t.children[Ie];return new rt(t.segments.concat(i.segments),i.children)}return t}function So(t){return t instanceof Bi}function Wy(t,i,e=null,n=null,r=new aa){let a=qy(t);return Yy(a,i,e,n,r)}function qy(t){let i;function e(a){let o={};for(let u of a.children){let f=e(u);o[u.outlet]=f}let l=new rt(a.url,o);return a===t&&(i=l),l}let n=e(t.root),r=Uy(n);return i??r}function Yy(t,i,e,n,r){let a=t;for(;a.parent;)a=a.parent;if(i.length===0)return gg(a,a,a,e,n,r);let o=Jx(i);if(o.toRoot())return gg(a,a,new rt([],{}),e,n,r);let l=eA(o,a,t),u=l.processChildren?kc(l.segmentGroup,l.index,o.commands):Xy(l.segmentGroup,l.index,o.commands);return gg(a,l.segmentGroup,u,e,n,r)}function Xu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Nc(t){return typeof t=="object"&&t!=null&&t.outlets}function Ry(t,i,e){t||="\u0275";let n=new Bi;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function gg(t,i,e,n,r,a){let o={};for(let[f,g]of Object.entries(n??{}))o[f]=Array.isArray(g)?g.map(v=>Ry(f,v,a)):Ry(f,g,a);let l;t===i?l=e:l=Ky(t,i,e);let u=Uy(Hy(l));return new Bi(u,o,r)}function Ky(t,i,e){let n=Object.create(null);return Object.entries(t.children).forEach(([r,a])=>{a===i?n[r]=e:n[r]=Ky(a,i,e)}),new rt(t.segments,n)}var Zu=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Xu(n[0]))throw new _e(4003,!1);let r=n.find(Nc);if(r&&r!==Ox(n))throw new _e(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Jx(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Zu(!0,0,t);let i=0,e=!1,n=t.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let l={};return Object.entries(a.outlets).forEach(([u,f])=>{l[u]=typeof f=="string"?f.split("/"):f}),[...r,{outlets:l}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((l,u)=>{u==0&&l==="."||(u==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,a]},[]);return new Zu(e,i,n)}var yo=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function eA(t,i,e){if(t.isAbsolute)return new yo(i,!0,0);if(!e)return new yo(i,!1,NaN);if(e.parent===null)return new yo(e,!0,0);let n=Xu(t.commands[0])?0:1,r=e.segments.length-1+n;return tA(e,r,t.numberOfDoubleDots)}function tA(t,i,e){let n=t,r=i,a=e;for(;a>r;){if(a-=r,n=n.parent,!n)throw new _e(4005,!1);r=n.segments.length}return new yo(n,!1,r-a)}function nA(t){return Nc(t[0])?t[0].outlets:{[Ie]:t}}function Xy(t,i,e){if(t??=new rt([],{}),t.segments.length===0&&t.hasChildren())return kc(t,i,e);let n=iA(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let a=new rt(t.segments.slice(0,n.pathIndex),{});return a.children[Ie]=new rt(t.segments.slice(n.pathIndex),t.children),kc(a,0,r)}else return n.match&&r.length===0?new rt(t.segments,{}):n.match&&!t.hasChildren()?Dg(t,i,e):n.match?kc(t,0,r):Dg(t,i,e)}function kc(t,i,e){if(e.length===0)return new rt(t.segments,{});{let n=nA(e),r=Object.create(null);if(Object.keys(n).some(a=>a!==Ie)&&t.children[Ie]&&t.numberOfChildren===1&&t.children[Ie].segments.length===0){let a=kc(t.children[Ie],i,e);return new rt(t.segments,a.children)}return Object.entries(n).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=Xy(t.children[a],i,o))}),Object.entries(t.children).forEach(([a,o])=>{n[a]===void 0&&(r[a]=o)}),new rt(t.segments,r)}}function iA(t,i,e){let n=0,r=i,a={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return a;let o=t.segments[r],l=e[n];if(Nc(l))break;let u=`${l}`,f=n<e.length-1?e[n+1]:null;if(r>0&&u===void 0)break;if(u&&f&&typeof f=="object"&&f.outlets===void 0){if(!Ty(u,f,o))return a;n+=2}else{if(!Ty(u,{},o))return a;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Dg(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let a=e[r];if(Nc(a)){let u=rA(a.outlets);return new rt(n,u)}if(r===0&&Xu(e[0])){let u=t.segments[i];n.push(new ra(u.path,ky(e[0]))),r++;continue}let o=Nc(a)?a.outlets[Ie]:`${a}`,l=r<e.length-1?e[r+1]:null;o&&l&&Xu(l)?(n.push(new ra(o,ky(l))),r+=2):(n.push(new ra(o,{})),r++)}return new rt(n,{})}function rA(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Dg(new rt([],{}),0,n))}),i}function ky(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Ty(t,i,e){return t==e.path&&hr(i,e.parameters)}var Tc="imperative",mn=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(mn||{}),Mi=class{id;url;constructor(i,e){this.id=i,this.url=e}},Ta=class extends Mi{type=mn.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Br=class extends Mi{urlAfterRedirects;type=mn.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Hn=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Hn||{}),Fc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Fc||{}),Li=class extends Mi{reason;code;type=mn.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Zy(t){return t instanceof Li&&(t.code===Hn.Redirect||t.code===Hn.SupersededByNewNavigation)}var Vr=class extends Mi{reason;code;type=mn.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},Ia=class extends Mi{error;target;type=mn.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Oc=class extends Mi{urlAfterRedirects;state;type=mn.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qu=class extends Mi{urlAfterRedirects;state;type=mn.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ju=class extends Mi{urlAfterRedirects;state;shouldActivate;type=mn.GuardsCheckEnd;constructor(i,e,n,r,a){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},em=class extends Mi{urlAfterRedirects;state;type=mn.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tm=class extends Mi{urlAfterRedirects;state;type=mn.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nm=class{route;type=mn.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},im=class{route;type=mn.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},rm=class{snapshot;type=mn.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},am=class{snapshot;type=mn.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},om=class{snapshot;type=mn.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sm=class{snapshot;type=mn.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Do=class{},Pc=class{},wo=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function aA(t){return!(t instanceof Do)&&!(t instanceof wo)&&!(t instanceof Pc)}var lm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Eo(this.rootInjector)}},Eo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new lm(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(Y(dn))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cm=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=wg(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=wg(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Mg(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Mg(i,this._root).map(e=>e.value)}};function wg(t,i){if(t===i.value)return i;for(let e of i.children){let n=wg(t,e);if(n)return n}return null}function Mg(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Mg(t,e);if(n.length)return n.unshift(i),n}return[]}var wi=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function vo(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Lc=class extends cm{snapshot;constructor(i,e){super(i),this.snapshot=e,Og(this,i)}toString(){return this.snapshot.toString()}};function Qy(t,i){let e=oA(t,i),n=new wt([new ra("",{})]),r=new wt({}),a=new wt({}),o=new wt({}),l=new wt(""),u=new oa(n,r,o,l,a,Ie,t,e.root);return u.snapshot=e.root,new Lc(new wi(u,[]),e)}function oA(t,i){let e={},n={},r={},o=new Mo([],e,r,"",n,Ie,t,null,{},i);return new Bc("",new wi(o,[]))}var oa=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,n,r,a,o,l,u){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=l,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(R(f=>f[jc]))??E(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(i=>ka(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(i=>ka(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},sA="always";function Fg(t,i,e){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:h(h({},i.params),t.params),data:h(h({},i.data),t.data),resolve:h(h(h(h({},t.data),i.data),r?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&e0(r)&&(n.resolve[jc]=r.title),n}var Mo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[jc]}constructor(i,e,n,r,a,o,l,u,f,g){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=a,this.outlet=o,this.component=l,this.routeConfig=u,this._resolve=f,this._environmentInjector=g}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ka(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ka(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Bc=class extends cm{url;constructor(i,e){super(e),this.url=i,Og(this,e)}toString(){return Jy(this._root)}};function Og(t,i){i.value._routerState=t,i.children.forEach(e=>Og(t,e))}function Jy(t){let i=t.children.length>0?` { ${t.children.map(Jy).join(", ")} } `:"";return`${t.value}${i}`}function _g(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,hr(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),hr(i.params,e.params)||t.paramsSubject.next(e.params),Fx(i.url,e.url)||t.urlSubject.next(e.url),hr(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function xg(t,i){let e=hr(t.params,i.params)&&Vx(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||xg(t.parent,i.parent))}function e0(t){return typeof t.title=="string"||t.title===null}var t0=new S(""),zc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ie;activateEvents=new B;deactivateEvents=new B;attachEvents=new B;detachEvents=new B;routerOutletData=ta();parentContexts=s(Eo);location=s(vt);changeDetector=s(Ee);inputBinder=s(pm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new _e(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new _e(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new _e(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new _e(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,u=new Ag(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:u,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return t})(),Ag=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===oa?this.route:i===Eo?this.childContexts:i===t0?this.outletData:this.parent.get(i,e)}},pm=new S("");var Pg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&A(0,"router-outlet")},dependencies:[zc],encapsulation:2,changeDetection:1})}return t})();function Lg(t){let i=t.children&&t.children.map(Lg),e=i?_(h({},t),{children:i}):h({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==Ie&&(e.component=Pg),e}function lA(t,i,e){let n=new Set,r=Vc(t,i._root,e?e._root:void 0,n);return{newlyCreatedRoutes:n,state:new Lc(r,i)}}function Vc(t,i,e,n){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let a=cA(t,i,e,n);return new wi(r,a)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let l=o.route;return l.value._setPending(i.value),l.children=i.children.map(u=>Vc(t,u,void 0,n)),l}}let r=dA(i.value);r._setPending(i.value),n.add(r);let a=i.children.map(o=>Vc(t,o,void 0,n));return new wi(r,a)}}function cA(t,i,e,n){return i.children.map(r=>{for(let a of e.children)if(t.shouldReuseRoute(r.value,a.value.snapshot))return Vc(t,r,a,n);return Vc(t,r,void 0,n)})}function dA(t){return new oa(new wt(t.url),new wt(t.params),new wt(t.queryParams),new wt(t.fragment),new wt(t.data),t.outlet,t.component,t)}var xo=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},n0="ngNavigationCancelingError";function dm(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=So(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=i0(!1,Hn.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function i0(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[n0]=!0,e.cancellationCode=i,e}function uA(t){return r0(t)&&So(t.url)}function r0(t){return!!t&&t[n0]}var Eg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,a){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=a}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),_g(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=vo(e);i.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],n),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(i,e,n){let r=i.value,a=e?e.value:null;if(r===a)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,n);else a&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,a=vo(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,a=vo(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,n){let r=vo(e);i.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],n),this.forwardEvent(new sm(a.value.snapshot))}),i.children.length&&this.forwardEvent(new am(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,a=e?e.value:null;if(_g(r),r===a)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),_g(l.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,n)}},um=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Co=class{component;route;constructor(i,e){this.component=i,this.route=e}};function mA(t,i,e){let n=t._root,r=i?i._root:null;return Rc(n,r,e,[n.value])}function pA(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Ro(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!ov(t)?t:i.get(t):n}function Rc(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=vo(i);return t.children.forEach(o=>{hA(o,a[o.value.outlet],e,n.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,l])=>Ic(l,e.getContext(o),e,r)),r}function hA(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,o=i?i.value:null,l=e?e.getContext(t.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let u=fA(o,a,a.routeConfig.runGuardsAndResolvers);u?r.canActivateChecks.push(new um(n)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Rc(t,i,l?l.children:null,n,r):Rc(t,i,e,n,r),u&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new Co(l.outlet.component,o))}else o&&Ic(i,l,e,r),r.canActivateChecks.push(new um(n)),a.component?Rc(t,null,l?l.children:null,n,r):Rc(t,null,e,n,r);return r}function fA(t,i,e){if(typeof e=="function")return Qn(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!Ra(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Ra(t.url,i.url)||!hr(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xg(t,i)||!hr(t.queryParams,i.queryParams);default:return!xg(t,i)}}function Ic(t,i,e,n){let r=vo(t),a=t.value;Object.entries(r).forEach(([o,l])=>{a.component?i?Ic(l,i.children.getContext(o),i.children,n):Ic(l,null,null,n):Ic(l,e?e.getContext(o):null,e,n)}),a.component?i&&i.outlet&&i.outlet.isActivated?n.canDeactivateChecks.push(new Co(i.outlet.component,a)):n.canDeactivateChecks.push(new Co(null,a)):n.canDeactivateChecks.push(new Co(null,a))}function Uc(t){return typeof t=="function"}function gA(t){return typeof t=="boolean"}function _A(t){return t&&Uc(t.canLoad)}function bA(t){return t&&Uc(t.canActivate)}function vA(t){return t&&Uc(t.canActivateChild)}function yA(t){return t&&Uc(t.canDeactivate)}function CA(t){return t&&Uc(t.canMatch)}function a0(t){return t instanceof Xb||t?.name==="EmptyError"}var Hu=Symbol("INITIAL_VALUE");function Ao(){return ze(t=>jn(t.map(i=>i.pipe(Le(1),st(Hu)))).pipe(R(i=>{for(let e of i)if(e!==!0){if(e===Hu)return Hu;if(e===!1||SA(e))return e}return!0}),xe(i=>i!==Hu),Le(1)))}function SA(t){return So(t)||t instanceof xo}function o0(t){return t.aborted?E(void 0).pipe(Le(1)):new lt(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function s0(t){return x(o0(t))}function DA(t){return te(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:a}}=i;return a.length===0&&r.length===0?E(_(h({},i),{guardsResult:!0})):wA(a,e,n).pipe(te(o=>o&&gA(o)?MA(e,r,t):E(o)),R(o=>_(h({},i),{guardsResult:o})))})}function wA(t,i,e){return ui(t).pipe(te(n=>kA(n.component,n.route,e,i)),Jr(n=>n!==!0,!0))}function MA(t,i,e){return ui(i).pipe(ya(n=>uu(AA(n.route.parent,e),xA(n.route,e),RA(t,n.path),EA(t,n.route))),Jr(n=>n!==!0,!0))}function xA(t,i){return t!==null&&i&&i(new om(t)),E(!0)}function AA(t,i){return t!==null&&i&&i(new rm(t)),E(!0)}function EA(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return E(!0);let n=e.map(r=>Ii(()=>{let a=i._environmentInjector,o=Ro(r,a),l=bA(o)?o.canActivate(i,t):Qn(a,()=>o(i,t));return Na(l).pipe(Jr())}));return E(n).pipe(Ao())}function RA(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(a=>pA(a)).filter(a=>a!==null).map(a=>Ii(()=>{let o=a.guards.map(l=>{let u=a.node._environmentInjector,f=Ro(l,u),g=vA(f)?f.canActivateChild(e,t):Qn(u,()=>f(e,t));return Na(g).pipe(Jr())});return E(o).pipe(Ao())}));return E(r).pipe(Ao())}function kA(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return E(!0);let a=r.map(o=>{let l=i._environmentInjector,u=Ro(o,l),f=yA(u)?u.canDeactivate(t,i,e,n):Qn(l,()=>u(t,i,e,n));return Na(f).pipe(Jr())});return E(a).pipe(Ao())}function TA(t,i,e,n,r){let a=i.canLoad;if(a===void 0||a.length===0)return E(!0);let o=a.map(l=>{let u=Ro(l,t),f=_A(u)?u.canLoad(i,e):Qn(t,()=>u(i,e)),g=Na(f);return r?g.pipe(s0(r)):g});return E(o).pipe(Ao(),l0(n))}function l0(t){return Ef(ct(i=>{if(typeof i!="boolean")throw dm(t,i)}),R(i=>i===!0))}function IA(t,i,e,n,r,a){let o=i.canMatch;if(!o||o.length===0)return E(!0);let l=o.map(u=>{let f=Ro(u,t),g=CA(f)?f.canMatch(i,e,r):Qn(t,()=>f(i,e,r));return Na(g).pipe(s0(a))});return E(l).pipe(Ao(),l0(n))}var Lr=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},$c=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function NA(t){throw new _e(4e3,!1)}function FA(t){throw i0(!1,Hn.GuardRejected)}var Rg=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[Ie])throw NA(`${i.redirectTo}`);r=r.children[Ie]}}async applyRedirectCommands(i,e,n,r,a){let o=await OA(e,r,a);if(o instanceof Bi)throw new $c(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,n);if(o[0]==="/")throw new $c(l);return l}applyRedirectCreateUrlTree(i,e,n,r){let a=this.createSegmentGroup(i,e.root,n,r);return new Bi(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let l=a.substring(1);n[r]=e[l]}else n[r]=a}),n}createSegmentGroup(i,e,n,r){let a=this.createSegments(i,e.segments,n,r),o=Object.create(null);return Object.entries(e.children).forEach(([l,u])=>{o[l]=this.createSegmentGroup(i,u,n,r)}),new rt(a,o)}createSegments(i,e,n,r){return e.map(a=>a.path[0]===":"?this.findPosParam(i,a,r):this.findOrReturn(a,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new _e(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function OA(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Ku(Na(Qn(e,()=>n(i))))}function PA(t,i){return t.providers&&!t._injector&&(t._injector=Pf(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Ki(t){return t.outlet||Ie}function LA(t,i){let e=t.filter(n=>Ki(n)===i);return e.push(...t.filter(n=>Ki(n)!==i)),e}var kg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function c0(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function BA(t,i,e,n,r,a,o){let l=d0(t,i,e);if(!l.matched)return E(l);let u=c0(a(l));return n=PA(i,n),IA(n,i,e,r,u,o).pipe(R(f=>f===!0?l:h({},kg)))}function d0(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},kg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Fy)(e,t,i);if(!r)return h({},kg);let a={};Object.entries(r.posParams??{}).forEach(([l,u])=>{a[l]=u.path});let o=r.consumed.length>0?h(h({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Iy(t,i,e,n,r){return e.length>0&&jA(t,e,n,r)?{segmentGroup:new rt(i,$A(n,new rt(e,t.children))),slicedSegments:[]}:e.length===0&&GA(t,e,n)?{segmentGroup:new rt(t.segments,VA(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new rt(t.segments,t.children),slicedSegments:e}}function VA(t,i,e,n){let r={};for(let a of e)if(hm(t,i,a)&&!n[Ki(a)]){let o=new rt([],{});r[Ki(a)]=o}return h(h({},n),r)}function $A(t,i){let e={};e[Ie]=i;for(let n of t)if(n.path===""&&Ki(n)!==Ie){let r=new rt([],{});e[Ki(n)]=r}return e}function jA(t,i,e,n){return e.some(r=>!hm(t,i,r)||!(Ki(r)!==Ie)?!1:!(n!==void 0&&Ki(r)===n))}function GA(t,i,e){return e.some(n=>hm(t,i,n))}function hm(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function zA(t,i,e){return i.length===0&&!t.children[e]}var Tg=class{};async function UA(t,i,e,n,r,a,o,l){return new Ig(t,i,e,n,r,o,a,l).recognize()}var HA=31,Ig=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,a,o,l,u){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=u,this.applyRedirects=new Rg(this.urlSerializer,this.urlTree)}noMatchError(i){return new _e(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Iy(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new wi(n,e),a=new Bc("",r),o=Wy(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(i){let e=new Mo([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ie,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,Ie,e),rootSnapshot:e}}catch(n){if(n instanceof $c)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Lr?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,a){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,a);let o=await this.processSegment(i,e,n,n.segments,r,!0,a);return o instanceof wi?[o]:[]}async processChildren(i,e,n,r){let a=[];for(let u of Object.keys(n.children))u==="primary"?a.unshift(u):a.push(u);let o=[];for(let u of a){let f=n.children[u],g=LA(e,u),v=await this.processSegmentGroup(i,g,f,u,r);o.push(...v)}let l=u0(o);return WA(l),l}async processSegment(i,e,n,r,a,o,l){for(let u of e)try{return await this.processSegmentAgainstRoute(u._injector??i,e,u,n,r,a,o,l)}catch(f){if(f instanceof Lr||a0(f))continue;throw f}if(zA(n,r,a))return new Tg;throw new Lr(n)}async processSegmentAgainstRoute(i,e,n,r,a,o,l,u){if(Ki(n)!==o&&(o===Ie||!hm(r,a,n)))throw new Lr(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,a,o,u);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,a,o,u);throw new Lr(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,a,o,l){let{matched:u,parameters:f,consumedSegments:g,positionalParamSegments:v,remainingSegments:k}=d0(e,r,a);if(!u)throw new Lr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>HA&&(this.allowRedirects=!1));let G=this.createSnapshot(i,r,a,f,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let q=await this.applyRedirects.applyRedirectCommands(g,r.redirectTo,v,c0(G),i),ee=await this.applyRedirects.lineralizeSegments(r,q);return this.processSegment(i,n,e,ee.concat(k),o,!1,l)}createSnapshot(i,e,n,r,a){let o=new Mo(n,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,YA(e),Ki(e),e.component??e._loadedComponent??null,e,KA(e),i),l=Fg(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(l.params),o.data=Object.freeze(l.data),o}async matchSegmentAgainstRoute(i,e,n,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=Me=>this.createSnapshot(i,n,Me.consumedSegments,Me.parameters,o),u=await Ku(BA(e,n,r,i,this.urlSerializer,l,this.abortSignal));if(n.path==="**"&&(e.children={}),!u?.matched)throw new Lr(e);i=n._injector??i;let{routes:f}=await this.getChildConfig(i,n,r),g=n._loadedInjector??i,{parameters:v,consumedSegments:k,remainingSegments:G}=u,q=this.createSnapshot(i,n,k,v,o),{segmentGroup:ee,slicedSegments:ye}=Iy(e,k,G,f,a);if(ye.length===0&&ee.hasChildren()){let Me=await this.processChildren(g,f,ee,q);return new wi(q,Me)}if(f.length===0&&ye.length===0)return new wi(q,[]);let ke=Ki(n)===a,De=await this.processSegment(g,f,ee,ye,ke?Ie:a,!0,q);return new wi(q,De instanceof wi?[De]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ku(TA(i,e,n,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw FA(e)}return{routes:[],injector:i}}};function WA(t){t.sort((i,e)=>i.value.outlet===Ie?-1:e.value.outlet===Ie?1:i.value.outlet.localeCompare(e.value.outlet))}function qA(t){let i=t.value.routeConfig;return i&&i.path===""}function u0(t){let i=[],e=new Set;for(let n of t){if(!qA(n)){i.push(n);continue}let r=i.find(a=>n.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=u0(n.children);i.push(new wi(n.value,r))}return i.filter(n=>!e.has(n))}function YA(t){return t.data||{}}function KA(t){return t.resolve||{}}function XA(t,i,e,n,r,a,o){return te(async l=>{let{state:u,tree:f}=await UA(t,i,e,n,l.extractedUrl,r,a,o);return _(h({},l),{targetSnapshot:u,urlAfterRedirects:f})})}function ZA(t){return te(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return E(i);let r=new Set(n.map(l=>l.route)),a=new Set;for(let l of r)if(!a.has(l))for(let u of m0(l))a.add(u);let o=0;return ui(a).pipe(ya(l=>r.has(l)?QA(l,e,t):(l.data=Fg(l,l.parent,t).resolve,E(void 0))),ct(()=>o++),If(1),te(l=>o===a.size?E(i):Pt))})}function m0(t){let i=t.children.map(e=>m0(e)).flat();return[t,...i]}function QA(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!e0(n)&&(r[jc]=n.title),Ii(()=>(t.data=Fg(t,t.parent,e).resolve,JA(r,t,i).pipe(R(a=>(t._resolvedData=a,t.data=h(h({},t.data),a),null)))))}function JA(t,i,e){let n=vg(t);if(n.length===0)return E({});let r={};return ui(n).pipe(te(a=>eE(t[a],i,e).pipe(Jr(),ct(o=>{if(o instanceof xo)throw dm(new aa,o);r[a]=o}))),If(1),R(()=>r),K(a=>a0(a)?Pt:du(a)))}function eE(t,i,e){let n=i._environmentInjector,r=Ro(t,n),a=r.resolve?r.resolve(i,e):Qn(n,()=>r(i,e));return Na(a)}var p0=new S("");function Ng(t){return ze(i=>{let e=t(i);return e?ui(e).pipe(R(()=>i)):E(i)})}var Bg=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(a=>a.outlet===Ie);return n}getResolvedTitleForRoute(e){return e.data[jc]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:()=>s(h0)})}return t})(),h0=(()=>{class t extends Bg{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(Y(My))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hc=new S("",{factory:()=>({})}),Wc=new S(""),f0=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=s(kv);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let a=await Py(Qn(e,()=>n.loadComponent())),o=await _0(Gf(a));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o,o}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let a=await g0(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();async function g0(t,i,e,n){let r=await Py(Qn(e,()=>t.loadChildren())),a=await _0(Gf(r)),o;a instanceof Dv||Array.isArray(a)?o=a:o=await i.compileModuleAsync(a),n&&n(t);let l,u,f=!1,g;return Array.isArray(o)?(u=o,f=!0):(l=o.create(e).injector,g=o,u=l.get(Wc,[],{optional:!0,self:!0}).flat()),{routes:u.map(Lg),injector:l,factory:g}}async function _0(t){return t}var fm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:()=>s(tE)})}return t})(),tE=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),b0=new S("");var nE=()=>{},v0=new S(""),y0=(()=>{class t{currentNavigation=be(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=be(null);events=new F;transitionAbortWithErrorSubject=new F;configLoader=s(f0);environmentInjector=s(dn);destroyRef=s(Si);urlSerializer=s(Gc);rootContexts=s(Eo);location=s(ia);inputBindingEnabled=s(pm,{optional:!0})!==null;titleStrategy=s(Bg);options=s(Hc,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||sA;urlHandlingStrategy=s(fm);createViewTransition=s(b0,{optional:!0});navigationErrorHandler=s(v0,{optional:!0});routerResourcesFeature=s(p0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>E(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new nm(r)),n=r=>this.events.next(new im(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;it(()=>{this.transitions?.next(_(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new wt(null),this.transitions.pipe(xe(n=>n!==null),ze(n=>{let r=!0,a=!1,o=new AbortController,l=()=>!a&&this.currentTransition?.id===n.id;return E(n).pipe(ze(u=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Hn.SupersededByNewNavigation),Pt;this.currentTransition=n;let f=this.lastSuccessfulNavigation();this.currentNavigation.set({id:u.id,initialUrl:u.rawUrl,extractedUrl:u.extractedUrl,targetBrowserUrl:typeof u.extras.browserUrl=="string"?this.urlSerializer.parse(u.extras.browserUrl):u.extras.browserUrl,trigger:u.source,extras:u.extras,previousNavigation:f?_(h({},f),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:u.routesRecognizeHandler,beforeActivateHandler:u.beforeActivateHandler});let g=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=u.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!g&&v!=="reload")return this.events.next(new Vr(u.id,this.urlSerializer.serialize(u.rawUrl),"",Fc.IgnoredSameUrlNavigation)),u.resolve(!1),Pt;if(this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl))return E(u).pipe(ze(k=>(this.events.next(new Ta(k.id,this.urlSerializer.serialize(k.extractedUrl),k.source,k.restoredState)),k.id!==this.navigationId?Pt:Promise.resolve(k))),XA(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ct(k=>{n.targetSnapshot=k.targetSnapshot,n.urlAfterRedirects=k.urlAfterRedirects,this.currentNavigation.update(G=>(G.finalUrl=k.urlAfterRedirects,G)),this.events.next(new Pc)}),ze(k=>ui(n.routesRecognizeHandler.deferredHandle??E(void 0)).pipe(R(()=>k))),ct(()=>{let k=new Oc(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(k)}));if(g&&this.urlHandlingStrategy.shouldProcessUrl(u.currentRawUrl)){let{id:k,extractedUrl:G,source:q,restoredState:ee,extras:ye}=u,ke=new Ta(k,this.urlSerializer.serialize(G),q,ee);this.events.next(ke);let De=Qy(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=_(h({},u),{targetSnapshot:De,urlAfterRedirects:G,extras:_(h({},ye),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Me=>(Me.finalUrl=G,Me)),E(n)}else return this.events.next(new Vr(u.id,this.urlSerializer.serialize(u.extractedUrl),"",Fc.IgnoredByUrlHandlingStrategy)),u.resolve(!1),Pt}),R(u=>{let f=new Qu(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);return this.events.next(f),this.currentTransition=n=_(h({},u),{guards:mA(u.targetSnapshot,u.currentSnapshot,this.rootContexts)}),n}),DA(u=>this.events.next(u)),ze(u=>{if(n.guardsResult=u.guardsResult,u.guardsResult&&typeof u.guardsResult!="boolean")throw dm(this.urlSerializer,u.guardsResult);let f=new Ju(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot,!!u.guardsResult);if(this.events.next(f),!l())return Pt;if(!u.guardsResult)return this.cancelNavigationTransition(u,"",Hn.GuardRejected),Pt;if(u.guards.canActivateChecks.length===0)return E(u);let g=new em(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);if(this.events.next(g),!l())return Pt;let v=!1;return E(u).pipe(ZA(this.paramsInheritanceStrategy),ct({next:()=>{v=!0;let k=new tm(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(k)},complete:()=>{v||this.cancelNavigationTransition(u,"",Hn.NoDataFromResolver)}}))}),Ng(u=>{let f=v=>{let k=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let G=v._environmentInjector;k.push(this.configLoader.loadComponent(G,v.routeConfig).then(q=>{v.component=q}))}for(let G of v.children)k.push(...f(G));return k},g=f(u.targetSnapshot.root);return g.length===0?E(u):ui(Promise.all(g).then(()=>u))}),ze(u=>{let{newlyCreatedRoutes:f,state:g}=lA(e.routeReuseStrategy,u.targetSnapshot,u.currentRouterState);return this.currentTransition=n=u=_(h({},u),{targetRouterState:g,newlyCreatedRoutes:f}),this.currentNavigation.update(v=>(v.targetRouterState=g,v)),E(u)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(u=>u),Ng(()=>this.afterPreactivation()),ze(()=>{let{currentSnapshot:u,targetSnapshot:f}=n,g=this.createViewTransition?.(this.environmentInjector,u.root,f.root,n.hasUAVisualTransition);return g?ui(g).pipe(R(()=>n)):E(n)}),Le(1),ze(u=>{r=!1,this.events.next(new Do);let f=n.beforeActivateHandler.deferredHandle;return f?ui(f.then(()=>u)):E(u)}),ct(u=>{new Eg(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,f=>this.events.next(f),this.inputBindingEnabled).activate(this.rootContexts),u.newlyCreatedRoutes?.clear(),l()&&(C0(u.targetRouterState),a=!0,this.currentNavigation.update(f=>(f.abort=nE,f)),this.lastSuccessfulNavigation.set(it(this.currentNavigation)),this.events.next(new Br(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects))),this.titleStrategy?.updateTitle(u.targetRouterState.snapshot),u.resolve(!0))}),x(o0(o.signal).pipe(xe(()=>!a&&r),ct(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Hn.Aborted)}))),ct({complete:()=>{a=!0}}),x(this.transitionAbortWithErrorSubject.pipe(ct(u=>{throw u}))),ro(()=>{o.abort(),a||this.cancelNavigationTransition(n,"",Hn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),K(u=>{if(a=!0,Ny(n),this.destroyed)return n.resolve(!1),Pt;if(r0(u))this.events.next(new Li(n.id,this.urlSerializer.serialize(n.extractedUrl),u.message,u.cancellationCode)),uA(u)?this.events.next(new wo(u.url,u.navigationBehaviorOptions)):n.resolve(!1);else{let f=new Ia(n.id,this.urlSerializer.serialize(n.extractedUrl),u,n.targetSnapshot??void 0);try{let g=Qn(this.environmentInjector,()=>this.navigationErrorHandler?.(f));if(g instanceof xo){let{message:v,cancellationCode:k}=dm(this.urlSerializer,g);this.events.next(new Li(n.id,this.urlSerializer.serialize(n.extractedUrl),v,k)),this.events.next(new wo(g.redirectTo,g.navigationBehaviorOptions))}else throw this.events.next(f),u}catch(g){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(g)}}return Pt}))}))}cancelNavigationTransition(e,n,r){Ny(e);let a=new Li(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=it(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function iE(t){return t!==Tc}function Ny(t){for(let i of t.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;C0(t.targetRouterState)}function C0(t){if(!t)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(t._root)}var S0=new S("");var D0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:()=>s(rE)})}return t})(),mm=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},rE=(()=>{class t extends mm{static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Vg=(()=>{class t{urlSerializer=s(Gc);options=s(Hc,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=s(ia);urlHandlingStrategy=s(fm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Bi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=r??a;return o instanceof Bi?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Qy(null,s(dn));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:()=>s(aE)})}return t})(),aE=(()=>{class t extends Vg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0},n.hasUAVisualTransition)})})}handleRouterEvent(e,n){e instanceof Ta?this.updateStateMemento():e instanceof Vr?this.commitTransition(n):e instanceof Oc?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Do?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Li&&!Zy(e)?this.restoreHistory(n):e instanceof Ia?this.restoreHistory(n,!0):e instanceof Br&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r,id:a}=n,{replaceUrl:o,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||o){let u=this.browserPageId,f=h(h({},l),this.generateNgRouterState(a,u,n));this.location.replaceState(e,"",f)}else{let u=h(h({},l),this.generateNgRouterState(a,this.browserPageId+1,n));this.location.go(e,"",u)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:n},this.routerUrlState(r)):h({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function $g(t,i){t.events.pipe(xe(e=>e instanceof Br||e instanceof Li||e instanceof Ia||e instanceof Vr),R(e=>e instanceof Br||e instanceof Vr?0:(e instanceof Li?e.code===Hn.Redirect||e.code===Hn.SupersededByNewNavigation:!1)?2:1),xe(e=>e!==2),Le(1)).subscribe(()=>{i()})}var Vi=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=s(Vf);stateManager=s(Vg);options=s(Hc,{optional:!0})||{};pendingTasks=s(lv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=s(y0);urlSerializer=s(Gc);location=s(ia);urlHandlingStrategy=s(fm);injector=s(dn);_events=new F;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=s(D0);injectorCleanup=s(S0,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=s(Wc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!s(pm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Fe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,a=it(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(n,a),n instanceof Li&&n.code!==Hn.Redirect&&n.code!==Hn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Br)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof wo){let o=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),u=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||iE(r.source)},o);this.scheduleNavigation(l,Tc,null,u,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}aA(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Tc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,a,o)=>{this.navigateToSyncWithBrowser(e,r,n,a,o)})}navigateToSyncWithBrowser(e,n,r,a,o){let l=r?.navigationId?r:null,u=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(a=_(h({},a),{browserUrl:e})),r){let g=h({},r);delete g.navigationId,delete g.\u0275routerPageId,delete g.\u0275routerUrl,Object.keys(g).length!==0&&(a.state=g)}let f=this.parseUrl(u);this.scheduleNavigation(f,n,l,a,o).catch(g=>{this.disposed||this.injector.get(cc)(g)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return it(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Lg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:l,preserveFragment:u}=n,f=u?this.currentUrlTree.fragment:o,g=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":g=h(h({},this.currentUrlTree.queryParams),a);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=a||null}g!==null&&(g=this.removeEmptyProps(g));let v;try{let k=r?r.snapshot:this.routerState.snapshot.root;v=qy(k)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),v=this.currentUrlTree.root}return Yy(v,e,g,f??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=So(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Tc,null,n)}navigate(e,n={skipLocationChange:!1}){return oE(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Ca(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=h({},By):n===!1?r=h({},yg):r=h(h({},yg),n),So(e))return Ay(this.currentUrlTree,e,r);let a=this.parseUrl(e);return Ay(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,a])=>(a!=null&&(n[r]=a),n),{})}scheduleNavigation(e,n,r,a,o,l){if(this.disposed)return Promise.resolve(!1);let u,f,g;l?(u=l.resolve,f=l.reject,g=l.promise):g=new Promise((k,G)=>{u=k,f=G});let v=this.pendingTasks.add();return $g(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,hasUAVisualTransition:o,resolve:u,reject:f,promise:g,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),g.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function oE(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new _e(4008,!1)}var uE=new S("");function jg(t,...i){return Zn([{provide:Wc,multi:!0,useValue:t},{provide:oa,useFactory:mE},{provide:$f,multi:!0,useFactory:pE},i.map(e=>e.\u0275providers)])}function mE(){return s(Vi).routerState.root}function pE(){let t=s(se);return i=>{let e=t.get(dr);if(i!==e.components[0])return;let n=t.get(Vi),r=t.get(hE);t.get(fE)===1&&n.initialNavigation(),t.get(gE,null,{optional:!0})?.setUpPreloading(),t.get(uE,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var hE=new S("",{factory:()=>new F}),fE=new S("",{factory:()=>1});var gE=new S("");var bE="@",vE=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(se);loadingSchedulerFn=s(yE,{optional:!0});_engine;constructor(e,n,r,a,o){this.doc=e,this.delegate=n,this.zone=r,this.animationType=a,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-2JCYH4BH.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new _e(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let o=new a(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new Gg(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,n);a.use(l),this.scheduler??=this.injector.get(uv,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){xa()};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),Gg=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,r){this.delegate.insertBefore(i,e,n,r)}removeChild(i,e,n,r){this.delegate.removeChild(i,e,n,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,r){this.delegate.setAttribute(i,e,n,r)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,r){this.delegate.setStyle(i,e,n,r)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(i,e,n,r)),this.delegate.listen(i,e,n,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(bE)}},yE=new S("");function w0(t="animations"){return vu("NgAsyncAnimations"),Zn([{provide:Pn,useFactory:()=>new vE(s(ue),s(Dc),s(re),t)},{provide:oo,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var qc=new S("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(ho)}),ko="Method not implemented",pn=class{locale;_localeChanges=new F;localeChanges=this._localeChanges;setTime(i,e,n,r){throw new Error(ko)}getHours(i){throw new Error(ko)}getMinutes(i){throw new Error(ko)}getSeconds(i){throw new Error(ko)}parseTime(i,e){throw new Error(ko)}addSeconds(i,e){throw new Error(ko)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareDate(i,e):n==r}return i==e}sameTime(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareTime(i,e):n==r}return i==e}clampDate(i,e,n){return e&&this.compareDate(i,e)<0?e:n&&this.compareDate(i,n)>0?n:i}},fr=new S("mat-date-formats");var gm=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),r=e().touched();return n&&r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var zg;try{zg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zg=!1}var Re=(()=>{class t{_platformId=s(ao);isBrowser=this._platformId?ty(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function $r(t){return Array.isArray(t)?t:[t]}var M0=new Set,Fa,To=(()=>{class t{_platform=s(Re);_nonce=s(Da,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):SE}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&CE(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function CE(t,i){if(!M0.has(t))try{Fa||(Fa=document.createElement("style"),i&&Fa.setAttribute("nonce",i),Fa.setAttribute("type","text/css"),document.head.appendChild(Fa)),Fa.sheet&&(Fa.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),M0.add(t))}catch(e){console.error(e)}}function SE(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Oa=(()=>{class t{_mediaMatcher=s(To);_zone=s(re);_queries=new Map;_destroySubject=new F;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return x0($r(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=x0($r(e)).map(o=>this._registerQuery(o).observable),a=jn(r);return a=uu(a.pipe(Le(1)),a.pipe(ea(1),lr(0))),a.pipe(R(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:u,query:f})=>{l.matches=l.matches||u,l.breakpoints[f]=u}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),a={observable:new lt(o=>{let l=u=>this._zone.run(()=>o.next(u));return n.addListener(l),()=>{n.removeListener(l)}}).pipe(st(n),R(({matches:o})=>({query:e,matches:o})),x(this._destroySubject)),mql:n};return this._queries.set(e,a),a}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function x0(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var _m={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var DE=new S("MATERIAL_ANIMATIONS"),A0=null;function Ug(){return s(DE,{optional:!0})?.animationsDisabled||s(oo,{optional:!0})==="NoopAnimations"?"di-disabled":(A0??=s(To).matchMedia("(prefers-reduced-motion)").matches,A0?"reduced-motion":"enabled")}function He(){return Ug()!=="enabled"}function Pa(t){return t.buttons===0||t.detail===0}function La(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Hg;function E0(){if(Hg==null){let t=typeof document<"u"?document.head:null;Hg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Hg}function Wg(t){if(E0()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function $i(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function en(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var Yc;function R0(){if(Yc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Yc=!0}))}finally{Yc=Yc||!1}return Yc}function Io(t){return R0()?t:!!t.capture}function Xi(t,i=0){return bm(t)?Number(t):arguments.length===2?i:0}function bm(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ti(t){return t instanceof U?t.nativeElement:t}var k0=new S("cdk-input-modality-detector-options"),T0={ignoreKeys:[18,17,224,91,16]},I0=650,qg={passive:!0,capture:!0},N0=(()=>{class t{_platform=s(Re);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new wt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=en(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<I0||(this._modality.next(Pa(e)?"keyboard":"mouse"),this._mostRecentTarget=en(e))};_onTouchstart=e=>{if(La(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=en(e)};constructor(){let e=s(re),n=s(ue),r=s(k0,{optional:!0});if(this._options=h(h({},T0),r),this.modalityDetected=this._modality.pipe(ea(1)),this.modalityChanged=this.modalityDetected.pipe(Qr()),this._platform.isBrowser){let a=s(Pn).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(n,"keydown",this._onKeydown,qg),a.listen(n,"mousedown",this._onMousedown,qg),a.listen(n,"touchstart",this._onTouchstart,qg)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Kc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Kc||{}),F0=new S("cdk-focus-monitor-default-options"),vm=Io({passive:!0,capture:!0}),Wn=(()=>{class t{_ngZone=s(re);_platform=s(Re);_inputModalityDetector=s(N0);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(ue);_stopInputModalityDetector=new F;constructor(){let e=s(F0,{optional:!0});this._detectionMode=e?.detectionMode||Kc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=en(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=ti(e);if(!this._platform.isBrowser||r.nodeType!==1)return E();let a=Wg(r)||this._document,o=this._elementInfo.get(r);if(o)return n&&(o.checkChildren=!0),o.subject;let l={checkChildren:n,subject:new F,rootNode:a};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let n=ti(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let a=ti(e),o=this._document.activeElement;a===o?this._getClosestElementsInfo(a).forEach(([l,u])=>this._originChanged(l,n,u)):(this._setOrigin(n),typeof a.focus=="function"&&a.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Kc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Kc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?I0:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),a=en(e);!r||!r.checkChildren&&n!==a||this._originChanged(n,this._getFocusOrigin(a),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,vm),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,vm)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(x(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vm),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vm),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,a)=>{(a===e||r.checkChildren&&a.contains(e))&&n.push([a,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let o=0;o<a.length;o++)if(a[o].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Xc=(()=>{class t{_elementRef=s(U);_focusMonitor=s(Wn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new B;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ym=new WeakMap,ut=(()=>{class t{_appRef;_injector=s(se);_environmentInjector=s(dn);load(e){let n=this._appRef=this._appRef||this._injector.get(dr),r=ym.get(n);r||(r={loaders:new Set,refs:[]},ym.set(n,r),n.onDestroy(()=>{ym.get(n)?.refs.forEach(a=>a.destroy()),ym.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Su(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var gr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})(),Cm;function wE(){if(Cm===void 0&&(Cm=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{Cm=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return Cm}function Ba(t){return wE()?.createHTML(t)||t}function O0(t,i,e){let n=e.sanitize(Jn.HTML,i);t.innerHTML=Ba(n||"")}function ME(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var P0=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),L0=(()=>{class t{_mutationObserverFactory=s(P0);_observedElements=new Map;_ngZone=s(re);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=ti(e);return new lt(r=>{let o=this._observeElement(n).pipe(R(l=>l.filter(u=>!ME(u))),xe(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new F,r=this._mutationObserverFactory.create(a=>n.next(a));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),B0=(()=>{class t{_contentObserver=s(L0);_elementRef=s(U);event=new B;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Xi(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(lr(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",$],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Sm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[P0]})}return t})();var Dm=(()=>{class t{_platform=s(Re);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return AE(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=xE(OE(e));if(n&&(V0(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),a=V0(e);return e.hasAttribute("contenteditable")?a!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!NE(e)?!1:r==="audio"?e.hasAttribute("controls")?a!==-1:!1:r==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return FE(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function xE(t){try{return t.frameElement}catch{return null}}function AE(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function EE(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function RE(t){return TE(t)&&t.type=="hidden"}function kE(t){return IE(t)&&t.hasAttribute("href")}function TE(t){return t.nodeName.toLowerCase()=="input"}function IE(t){return t.nodeName.toLowerCase()=="a"}function G0(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function V0(t){if(!G0(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function NE(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function FE(t){return RE(t)?!1:EE(t)||kE(t)||t.hasAttribute("contenteditable")||G0(t)}function OE(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Kg=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,a=!1,o){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=o,a||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Je(i,{injector:this._injector})}},wm=(()=>{class t{_checker=s(Dm);_ngZone=s(re);_document=s(ue);_injector=s(se);constructor(){s(ut).load(gr)}create(e,n=!1){return new Kg(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Xg=(()=>{class t{_elementRef=s(U);_focusTrapFactory=s(wm);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(Re).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=$i(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",$],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",$]},exportAs:["cdkTrapFocus"],features:[Ue]})}return t})(),z0=new S("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),U0=new S("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),PE=0,Zc=(()=>{class t{_ngZone=s(re);_defaultOptions=s(U0,{optional:!0});_liveElement;_document=s(ue);_sanitizer=s(Ac);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(z0,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,a,o;return n.length===1&&typeof n[0]=="number"?o=n[0]:[a,o]=n,this.clear(),clearTimeout(this._previousTimeout),a||(a=r&&r.politeness?r.politeness:"polite"),o==null&&r&&(o=r.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:O0(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let a=0;a<n.length;a++)n[a].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${PE++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let a=n[r],o=a.getAttribute("aria-owns");o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var sa=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(sa||{}),$0="cdk-high-contrast-black-on-white",j0="cdk-high-contrast-white-on-black",Yg="cdk-high-contrast-active",H0=(()=>{class t{_platform=s(Re);_hasCheckedHighContrastMode=!1;_document=s(ue);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Oa).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return sa.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,a=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return sa.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return sa.BLACK_ON_WHITE}return sa.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Yg,$0,j0),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===sa.BLACK_ON_WHITE?e.add(Yg,$0):n===sa.WHITE_ON_BLACK&&e.add(Yg,j0)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),jr=(()=>{class t{constructor(){s(H0)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Sm]})}return t})();var LE=200,Mm=class{_letterKeyStream=new F;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new F;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:LE;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ct(e=>this._pressedLetters.push(e)),lr(i),xe(()=>this._pressedLetters.length>0),R(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,a=this._items[r];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function at(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var No=class{_items;_activeItemIndex=be(-1);_activeItem=be(null);_wrap=!1;_typeaheadSubscription=Fe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof wa?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):cr(i)&&(this._effectRef=bt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new F;change=new F;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Mm(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!i[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(a<o?a:o-1,-1);break}else return;default:(r||at(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,a=e[r];if(!this._skipPredicateFn(a)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return cr(this._items)?this._items():this._items instanceof wa?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Va=class extends No{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var $a=class extends No{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Y0=new Map,Xe=class t{_appId=s(Sa);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let n=Y0.get(i);return n===void 0?n=0:n++,Y0.set(i,n),`${i}${e?t._infix+"-":""}${n}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})};var X0=" ";function BE(t,i,e){let n=Rm(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(X0)))}function VE(t,i,e){let n=Rm(t,i);e=e.trim();let r=n.filter(a=>a!==e);r.length?t.setAttribute(i,r.join(X0)):t.removeAttribute(i)}function Rm(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Z0="cdk-describedby-message",Em="cdk-describedby-host",Qg=0,ed=(()=>{class t{_platform=s(Re);_document=s(ue);_messageRegistry=new Map;_messagesContainer=null;_id=`${Qg++}`;constructor(){s(ut).load(gr),this._id=s(Sa)+"-"+Qg++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let a=Zg(n,r);typeof n!="string"?(K0(n,this._id),this._messageRegistry.set(a,{messageElement:n,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let a=Zg(n,r);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof n=="string"){let o=this._messageRegistry.get(a);o&&o.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Em}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Em);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");K0(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Zg(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<n.length;a++)n[a].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=Rm(e,"aria-describedby").filter(r=>r.indexOf(Z0)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);BE(e,"aria-describedby",r.messageElement.id),e.setAttribute(Em,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,VE(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Em)}_isElementDescribedByMessage(e,n){let r=Rm(e,"aria-describedby"),a=this._messageRegistry.get(n),o=a&&a.messageElement.id;return!!o&&r.indexOf(o)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),a=e.getAttribute("aria-label");return r?!a||a.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function Zg(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function K0(t,i){t.id||(t.id=`${Z0}-${i}-${Qg++}`)}var Zi=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Zi||{}),km,ja;function Tm(){if(ja==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ja=!1,ja;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ja=!0;else{let t=Element.prototype.scrollTo;t?ja=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ja=!1}}return ja}function Fo(){if(typeof document!="object"||!document)return Zi.NORMAL;if(km==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),km=Zi.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,km=t.scrollLeft===0?Zi.NEGATED:Zi.INVERTED),t.remove()}return km}function Jg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Oo,Q0=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function e_(){if(Oo)return Oo;if(typeof document!="object"||!document)return Oo=new Set(Q0),Oo;let t=document.createElement("input");return Oo=new Set(Q0.filter(i=>(t.setAttribute("type",i),t.type===i))),Oo}function Ft(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ji(t){return t!=null&&`${t}`!="false"}function J0(t,i=/\s+/){let e=[];if(t!=null){let n=Array.isArray(t)?t:`${t}`.split(i);for(let r of n){let a=`${r}`.trim();a&&e.push(a)}}return e}var Gi=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Gi||{}),t_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Gi.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},eC=Io({passive:!0,capture:!0}),n_=class{_events=new Map;addHandler(i,e,n,r){let a=this._events.get(e);if(a){let o=a.get(n);o?o.add(r):a.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,eC)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let a=r.get(e);a&&(a.delete(n),a.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,eC)))}_delegateEventHandler=i=>{let e=en(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(a=>a.handleEvent(i))})}},td={enterDuration:225,exitDuration:150},$E=800,tC=Io({passive:!0,capture:!0}),nC=["mousedown","touchstart"],iC=["mouseup","mouseleave","touchend","touchcancel"],jE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),nd=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new n_;constructor(i,e,n,r,a){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ti(n)),a&&a.get(ut).load(jE)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=h(h({},td),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let o=n.radius||GE(i,e,r),l=i-r.left,u=e-r.top,f=a.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${l-o}px`,g.style.top=`${u-o}px`,g.style.height=`${o*2}px`,g.style.width=`${o*2}px`,n.color!=null&&(g.style.backgroundColor=n.color),g.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(g);let v=window.getComputedStyle(g),k=v.transitionProperty,G=v.transitionDuration,q=k==="none"||G==="0s"||G==="0s, 0s"||r.width===0&&r.height===0,ee=new t_(this,g,n,q);g.style.transform="scale3d(1, 1, 1)",ee.state=Gi.FADING_IN,n.persistent||(this._mostRecentTransientRipple=ee);let ye=null;return!q&&(f||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ke=()=>{ye&&(ye.fallbackTimer=null),clearTimeout(Me),this._finishRippleTransition(ee)},De=()=>this._destroyRipple(ee),Me=setTimeout(De,f+100);g.addEventListener("transitionend",ke),g.addEventListener("transitioncancel",De),ye={onTransitionEnd:ke,onTransitionCancel:De,fallbackTimer:Me}}),this._activeRipples.set(ee,ye),(q||!f)&&this._finishRippleTransition(ee),ee}fadeOutRipple(i){if(i.state===Gi.FADING_OUT||i.state===Gi.HIDDEN)return;let e=i.element,n=h(h({},td),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Gi.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=ti(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,nC.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{iC.forEach(e=>{this._triggerElement.addEventListener(e,this,tC)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Gi.FADING_IN?this._startFadeOutTransition(i):i.state===Gi.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Gi.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Gi.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Pa(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$E;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!La(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Gi.VISIBLE||i.config.terminateOnPointerUp&&i.state===Gi.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(nC.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(iC.forEach(e=>i.removeEventListener(e,this,tC)),this._pointerUpEventsRegistered=!1))}};function GE(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var Im=new S("mat-ripple-global-options"),Gr=(()=>{class t{_elementRef=s(U);_animationsDisabled=He();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(re),n=s(Re),r=s(Im,{optional:!0}),a=s(se);this._globalOptions=r||{},this._rippleRenderer=new nd(this,e,this._elementRef,n,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:h(h(h({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,h(h({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,h(h({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&V("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var rC=(()=>{class t{_animationsDisabled=He();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&V("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return t})();var _i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var zE=["text"],UE=[[["mat-icon"]],"*"],HE=["mat-icon","*"];function WE(t,i){if(t&1&&A(0,"mat-pseudo-checkbox",1),t&2){let e=N();w("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function qE(t,i){if(t&1&&A(0,"mat-pseudo-checkbox",3),t&2){let e=N();w("disabled",e.disabled)}}function YE(t,i){if(t&1&&(c(0,"span",4),m(1),d()),t&2){let e=N();p(),ge("(",e.group.label,")")}}var rd=new S("MAT_OPTION_PARENT_COMPONENT"),ad=new S("MatOptgroup");var id=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Tt=(()=>{class t{_element=s(U);_changeDetectorRef=s(Ee);_parent=s(rd,{optional:!0});group=s(ad,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Xe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=be(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new B;_text;_stateChanges=new F;constructor(){let e=s(ut);e.load(_i),e.load(gr),this._signalDisableRipple=!!this._parent&&cr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!at(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new id(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&Ke(zE,7),n&2){let a;H(a=W())&&(r._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&D("click",function(){return r._selectViaInteraction()})("keydown",function(o){return r._handleKeydown(o)}),n&2&&(Et("id",r.id),le("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),V("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",$]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:HE,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(Be(UE),T(0,WE,1,2,"mat-pseudo-checkbox",1),de(1),c(2,"span",2,0),de(4,1),d(),T(5,qE,1,1,"mat-pseudo-checkbox",3),T(6,YE,2,1,"span",4),A(7,"div",5)),n&2&&(I(r.multiple?0:-1),p(5),I(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),I(r.group&&r.group._inert?6:-1),p(),w("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[rC,Gr],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();function Nm(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),a=0;for(let o=0;o<t+1;o++)n[o].group&&n[o].group===r[a]&&a++;return a}return 0}function Fm(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var KE=new S("cdk-dir-doc",{providedIn:"root",factory:()=>s(ue)}),XE=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function aC(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?XE.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var mt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=be("ltr");change=new B;constructor(){let e=s(KE,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(aC(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})();var Po=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var oC=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var Lo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Po,oC,Tt,we]})}return t})();var ZE={capture:!0},QE=["focus","mousedown","mouseenter","touchstart"],i_="mat-ripple-loader-uninitialized",r_="mat-ripple-loader-class-name",sC="mat-ripple-loader-centered",Om="mat-ripple-loader-disabled",lC=(()=>{class t{_document=s(ue);_animationsDisabled=He();_globalRippleOptions=s(Im,{optional:!0});_platform=s(Re);_ngZone=s(re);_injector=s(se);_eventCleanups;_hosts=new Map;constructor(){let e=s(Pn).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>QE.map(n=>e.listen(this._document,n,this._onInteraction,ZE)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(i_,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(r_))&&e.setAttribute(r_,n.className||""),n.centered&&e.setAttribute(sC,""),n.disabled&&e.setAttribute(Om,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Om,""):e.removeAttribute(Om)}_onInteraction=e=>{let n=en(e);if(n instanceof HTMLElement){let r=n.closest(`[${i_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(r_)),e.append(n);let r=this._globalRippleOptions,a=this._animationsDisabled?0:r?.animation?.enterDuration??td.enterDuration,o=this._animationsDisabled?0:r?.animation?.exitDuration??td.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Om),rippleConfig:{centered:e.hasAttribute(sC),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:o}}},u=new nd(l,this._ngZone,n,this._platform,this._injector),f=!l.rippleDisabled;f&&u.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:u,hasSetUpEvents:f}),e.removeAttribute(i_)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var Bo=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,n,r,a){this._defaultMatcher=i,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=a,e?cr(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return i?.isErrorState(n,e)??!1}};var JE=["*"],cC=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,r){n&2&&V("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:JE,decls:1,vars:0,template:function(n,r){n&1&&(Be(),de(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var eR=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,tR=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function a_(t,i){let e=Array(t);for(let n=0;n<t;n++)e[n]=i(n);return e}var s_=(()=>{class t extends pn{_matDateLocale=s(qc,{optional:!0});constructor(){super();let e=s(qc,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return a_(12,r=>this._format(n,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return a_(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){let n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return a_(7,r=>this._format(n,new Date(2017,0,r+1)))}getYearName(e){let n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),n=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return n===7?0:n}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,r){let a=this._createDateWithOverflow(e,n,r);return a.getMonth()!=n,a}today(){return new Date}parse(e,n){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,_(h({},n),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,n*12)}addCalendarMonths(e,n){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+n)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(eR.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,n,r,a){let o=this.clone(e);return o.setHours(n,r,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,n){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let a=this._parseTimeString(r);if(a===null){let o=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,n){return new Date(e.getTime()+n*1e3)}_createDateWithOverflow(e,n,r){let a=new Date;return a.setFullYear(e,n,r),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,n){let r=new Date;return r.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(r)}_parseTimeString(e){let n=e.toUpperCase().match(tR);if(n){let r=parseInt(n[1]),a=parseInt(n[2]),o=n[3]==null?void 0:parseInt(n[3]),l=n[4];if(r===12?r=l==="AM"?0:r:l==="PM"&&(r+=12),o_(r,0,23)&&o_(a,0,59)&&(o==null||o_(o,0,59)))return this.setTime(this.today(),r,a,o||0)}return null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac,autoProvided:!1})}return t})();function o_(t,i,e){return!isNaN(t)&&t>=i&&t<=e}var nR={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Pm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[iR()]})}return t})();function iR(t=nR){return[{provide:pn,useClass:s_},{provide:fr,useValue:t}]}function rR(t){let i=t,e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return e===1&&n===0?1:5}var dC=["de",[["AM","PM"]],void 0,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."]],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{ATS:["\xF6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[void 0,"\u0440."],CUC:[void 0,"Cub$"],DEM:["DM"],FKP:[void 0,"Fl\xA3"],GHS:[void 0,"\u20B5"],GNF:[void 0,"F.G."],KMF:[void 0,"FC"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],RWF:[void 0,"F.Rw"],SYP:[void 0,"SYP"],THB:["\u0E3F"],TWD:["NT$"],XXX:[],ZMW:[void 0,"K"]},"ltr",rR];var Lm=class t extends s_{parse(i){if(typeof i=="string"&&i.trim()){let e=i.trim().split(".");if(e.length===3){let n=parseInt(e[0],10),r=parseInt(e[1],10)-1,a=parseInt(e[2],10);a<100&&(a+=a<=50?2e3:1900);let o=new Date(a,r,n);if(o.getFullYear()===a&&o.getMonth()===r&&o.getDate()===n)return o}}return super.parse(i)}format(i,e){if(e==="input"){let n=i.getDate(),r=i.getMonth()+1,a=i.getFullYear();return`${this._to2digit(n)}.${this._to2digit(r)}.${a}`}return super.format(i,e)}_to2digit(i){return("00"+i).slice(-2)}getFirstDayOfWeek(){return 1}static \u0275fac=(()=>{let i;return function(n){return(i||(i=Oe(t)))(n||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})};function Bm(t,i){let n=!i?.manualCleanup?i?.injector?.get(Si)??s(Si):null,r=oR(i?.equal),a;i?.requireSync?a=be({kind:0},{equal:r}):a=be({kind:1,value:i?.initialValue},{equal:r});let o,l=t.subscribe({next:u=>a.set({kind:1,value:u}),error:u=>{a.set({kind:2,error:u}),o?.()},complete:()=>{o?.()}});if(i?.requireSync&&a().kind===0)throw new _e(601,!1);return o=n?.onDestroy(l.unsubscribe.bind(l)),Jt(()=>{let u=a();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new _e(601,!1)}},{equal:i?.equal})}function oR(t=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&t(i.value,e.value)}var d_={};function b(t,i){if(d_[t]=(d_[t]||0)+1,typeof i=="function")return l_(t,(...n)=>_(h({},i(...n)),{type:t}));switch(i?i._as:"empty"){case"empty":return l_(t,()=>({type:t}));case"props":return l_(t,n=>_(h({},n),{type:t}));default:throw new Error("Unexpected config.")}}function y(){return{_as:"props",_p:void 0}}function l_(t,i){return Object.defineProperty(i,"type",{value:t,writable:!1})}function sR(t,i){if(t==null)throw new Error(`${i} must be defined.`)}var ld="@ngrx/store/init",vr=(()=>{class t extends wt{constructor(){super({type:ld})}next(e){if(typeof e=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>"u")throw new TypeError("Actions must be objects");if(typeof e.type>"u")throw new TypeError("Actions must have a type property");super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),lR=[vr],DC=new S("@ngrx/store Internal Root Guard"),uC=new S("@ngrx/store Internal Initial State"),cd=new S("@ngrx/store Initial State"),wC=new S("@ngrx/store Reducer Factory"),mC=new S("@ngrx/store Internal Reducer Factory Provider"),MC=new S("@ngrx/store Initial Reducers"),c_=new S("@ngrx/store Internal Initial Reducers");var pC=new S("@ngrx/store Internal Store Reducers");var cR=new S("@ngrx/store Internal Store Features");var dR=new S("@ngrx/store Feature Reducers"),hC=new S("@ngrx/store User Provided Meta Reducers"),Vm=new S("@ngrx/store Meta Reducers"),fC=new S("@ngrx/store Internal Resolved Meta Reducers"),gC=new S("@ngrx/store User Runtime Checks Config"),_C=new S("@ngrx/store Internal User Runtime Checks Config"),od=new S("@ngrx/store Internal Runtime Checks"),h_=new S("@ngrx/store Check if Action types are unique"),sd=new S("@ngrx/store Root Store Provider"),$m=new S("@ngrx/store Feature State Provider");function uR(t,i={}){let e=Object.keys(t),n={};for(let a=0;a<e.length;a++){let o=e[a];typeof t[o]=="function"&&(n[o]=t[o])}let r=Object.keys(n);return function(o,l){o=o===void 0?i:o;let u=!1,f={};for(let g=0;g<r.length;g++){let v=r[g],k=n[v],G=o[v],q=k(G,l);f[v]=q,u=u||q!==G}return u?f:o}}function mR(t,i){return Object.keys(t).filter(e=>e!==i).reduce((e,n)=>Object.assign(e,{[n]:t[n]}),{})}function xC(...t){return function(i){if(t.length===0)return i;let e=t[t.length-1];return t.slice(0,-1).reduceRight((r,a)=>a(r),e(i))}}function AC(t,i){return Array.isArray(i)&&i.length>0&&(t=xC.apply(null,[...i,t])),(e,n)=>{let r=t(e);return(a,o)=>(a=a===void 0?n:a,r(a,o))}}function pR(t){let i=Array.isArray(t)&&t.length>0?xC(...t):e=>e;return(e,n)=>(e=i(e),(r,a)=>(r=r===void 0?n:r,e(r,a)))}var Ga=class extends lt{},Vo=class extends vr{},Gm="@ngrx/store/update-reducers",jm=(()=>{class t extends wt{get currentReducers(){return this.reducers}constructor(e,n,r,a){super(a(r,n)),this.dispatcher=e,this.initialState=n,this.reducers=r,this.reducerFactory=a}addFeature(e){this.addFeatures([e])}addFeatures(e){let n=e.reduce((r,{reducers:a,reducerFactory:o,metaReducers:l,initialState:u,key:f})=>{let g=typeof a=="function"?pR(l)(a,u):AC(o,l)(a,u);return r[f]=g,r},{});this.addReducers(n)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(n=>n.key))}addReducer(e,n){this.addReducers({[e]:n})}addReducers(e){this.reducers=h(h({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(n=>{this.reducers=mR(this.reducers,n)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Gm,features:e})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||t)(Y(Vo),Y(cd),Y(MC),Y(wC))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),hR=[jm,{provide:Ga,useExisting:jm},{provide:Vo,useExisting:vr}],za=(()=>{class t extends F{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})()}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),fR=[za],$o=class extends lt{},bC=(()=>{class t extends wt{static{this.INIT=ld}constructor(e,n,r,a){super(a);let l=e.pipe(cu(lu)).pipe(gu(n)),u={state:a},f=l.pipe(hu(gR,u));this.stateSubscription=f.subscribe(({state:g,action:v})=>{this.next(g),r.next(v)}),this.state=Bm(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||t)(Y(vr),Y(Ga),Y(za),Y(cd))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})();function gR(t={state:void 0},[i,e]){let{state:n}=t;return{state:e(n,i),action:i}}var _R=[bC,{provide:$o,useExisting:bC}],Ge=(()=>{class t extends lt{constructor(e,n,r,a){super(),this.actionsObserver=n,this.reducerManager=r,this.injector=a,this.source=e,this.state=e.state}select(e,...n){return vR.call(null,e,...n)(this)}selectSignal(e,n){return Jt(()=>e(this.state()),n)}lift(e){let n=new t(this,this.actionsObserver,this.reducerManager);return n.operator=e,n}dispatch(e,n){if(typeof e=="function")return this.processDispatchFn(e,n);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,n){this.reducerManager.addReducer(e,n)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,n){sR(this.injector,"Store Injector");let r=n?.injector??yR()??this.injector;return bt(()=>{let a=e();it(()=>this.dispatch(a))},{injector:r})}static{this.\u0275fac=function(n){return new(n||t)(Y($o),Y(vr),Y(jm),Y(se))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),bR=[Ge];function vR(t,i,...e){return function(r){let a;if(typeof t=="string"){let o=[i,...e].filter(Boolean);a=r.pipe(rv(t,...o))}else if(typeof t=="function")a=r.pipe(R(o=>t(o,i)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return a.pipe(Qr())}}function yR(){try{return s(se)}catch{return}}var f_="https://ngrx.io/guide/store/configuration/runtime-checks";function vC(t){return t===void 0}function yC(t){return t===null}function EC(t){return Array.isArray(t)}function CR(t){return typeof t=="string"}function SR(t){return typeof t=="boolean"}function DR(t){return typeof t=="number"}function RC(t){return typeof t=="object"&&t!==null}function wR(t){return RC(t)&&!EC(t)}function MR(t){if(!wR(t))return!1;let i=Object.getPrototypeOf(t);return i===Object.prototype||i===null}function u_(t){return typeof t=="function"}function xR(t){return u_(t)&&t.hasOwnProperty("\u0275cmp")}function AR(t,i){return Object.prototype.hasOwnProperty.call(t,i)}var ER=!1;function RR(){return ER}function CC(t,i){return t===i}function kR(t,i,e){for(let n=0;n<t.length;n++)if(!e(t[n],i[n]))return!0;return!1}function kC(t,i=CC,e=CC){let n=null,r=null,a;function o(){n=null,r=null}function l(g=void 0){a={result:g}}function u(){a=void 0}function f(){if(a!==void 0)return a.result;if(!n)return r=t.apply(null,arguments),n=arguments,r;if(!kR(arguments,n,i))return r;let g=t.apply(null,arguments);return n=arguments,e(r,g)?r:(r=g,g)}return{memoized:f,reset:o,setResult:l,clearResult:u}}function he(...t){return IR(kC)(...t)}function TR(t,i,e,n){if(e===void 0){let a=i.map(o=>o(t));return n.memoized.apply(null,a)}let r=i.map(a=>a(t,e));return n.memoized.apply(null,[...r,e])}function IR(t,i={stateFn:TR}){return function(...e){let n=e;if(Array.isArray(n[0])){let[g,...v]=n;n=[...g,...v]}else n.length===1&&NR(n[0])&&(n=FR(n[0]));let r=n.slice(0,n.length-1),a=n[n.length-1],o=r.filter(g=>g.release&&typeof g.release=="function"),l=t(function(...g){return a.apply(null,g)}),u=kC(function(g,v){return i.stateFn.apply(null,[g,r,v,l])});function f(){u.reset(),l.reset(),o.forEach(g=>g.release())}return Object.assign(u.memoized,{release:f,projector:l.memoized,setResult:u.setResult,clearResult:u.clearResult})}}function fn(t){return he(i=>{let e=i[t];return!RR()&&mc()&&!(t in i)&&console.warn(`@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function NR(t){return!!t&&typeof t=="object"&&Object.values(t).every(i=>typeof i=="function")}function FR(t){let i=Object.values(t),e=Object.keys(t),n=(...r)=>e.reduce((a,o,l)=>_(h({},a),{[o]:r[l]}),{});return[...i,n]}function OR(t){return t instanceof S?s(t):t}function TC(t){return typeof t=="function"?t():t}function PR(t,i){return t.concat(i)}function LR(){if(s(Ge,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function BR(t,i){return function(e,n){let r=i.action(n)?m_(n):n,a=t(e,r);return i.state()?m_(a):a}}function m_(t){Object.freeze(t);let i=u_(t);return Object.getOwnPropertyNames(t).forEach(e=>{if(!e.startsWith("\u0275")&&AR(t,e)&&(!i||e!=="caller"&&e!=="callee"&&e!=="arguments")){let n=t[e];(RC(n)||u_(n))&&!Object.isFrozen(n)&&m_(n)}}),t}function VR(t,i){return function(e,n){if(i.action(n)){let a=p_(n);SC(a,"action")}let r=t(e,n);if(i.state()){let a=p_(r);SC(a,"state")}return r}}function p_(t,i=[]){return(vC(t)||yC(t))&&i.length===0?{path:["root"],value:t}:Object.keys(t).reduce((n,r)=>{if(n)return n;let a=t[r];return xR(a)?n:vC(a)||yC(a)||DR(a)||SR(a)||CR(a)||EC(a)?!1:MR(a)?p_(a,[...i,r]):{path:[...i,r],value:a}},!1)}function SC(t,i){if(t===!1)return;let e=t.path.join("."),n=new Error(`Detected unserializable ${i} at "${e}". ${f_}#strict${i}serializability`);throw n.value=t.value,n.unserializablePath=e,n}function $R(t,i){return function(e,n){if(i.action(n)&&!re.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${f_}#strictactionwithinngzone`);return t(e,n)}}function jR(t){return mc()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function GR({strictActionSerializability:t,strictStateSerializability:i}){return e=>t||i?VR(e,{action:n=>t&&!g_(n),state:()=>i}):e}function zR({strictActionImmutability:t,strictStateImmutability:i}){return e=>t||i?BR(e,{action:n=>t&&!g_(n),state:()=>i}):e}function g_(t){return t.type.startsWith("@ngrx")}function UR({strictActionWithinNgZone:t}){return i=>t?$R(i,{action:e=>t&&!g_(e)}):i}function HR(t){return[{provide:_C,useValue:t},{provide:gC,useFactory:qR,deps:[_C]},{provide:od,deps:[gC],useFactory:jR},{provide:Vm,multi:!0,deps:[od],useFactory:zR},{provide:Vm,multi:!0,deps:[od],useFactory:GR},{provide:Vm,multi:!0,deps:[od],useFactory:UR}]}function WR(){return[{provide:h_,multi:!0,deps:[od],useFactory:YR}]}function qR(t){return t}function YR(t){if(!t.strictActionTypeUniqueness)return;let i=Object.entries(d_).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(", ")}. ${f_}#strictactiontypeuniqueness`)}function KR(t={},i={}){return[{provide:DC,useFactory:LR},{provide:uC,useValue:i.initialState},{provide:cd,useFactory:TC,deps:[uC]},{provide:c_,useValue:t},{provide:pC,useExisting:t instanceof S?t:c_},{provide:MC,deps:[c_,[new mv(pC)]],useFactory:OR},{provide:hC,useValue:i.metaReducers?i.metaReducers:[]},{provide:fC,deps:[Vm,hC],useFactory:PR},{provide:mC,useValue:i.reducerFactory?i.reducerFactory:uR},{provide:wC,deps:[mC,fC],useFactory:AC},lR,hR,fR,_R,bR,HR(i.runtimeChecks),WR()]}function XR(){s(vr),s(Ga),s(za),s(Ge),s(DC,{optional:!0}),s(h_,{optional:!0})}var ZR=[{provide:sd,useFactory:XR},sc(()=>s(sd))];function IC(t,i){return Zn([...KR(t,i),ZR])}function QR(){s(sd);let t=s(cR),i=s(dR),e=s(jm);s(h_,{optional:!0});let n=t.map((r,a)=>{let l=i.shift()[a];return _(h({},r),{reducers:l,initialState:TC(r.initialState)})});e.addFeatures(n)}var kU=[{provide:$m,useFactory:QR},sc(()=>s($m))];function C(...t){let i=t.pop(),e=t.map(n=>n.type);return{reducer:i,types:e}}function gn(t,...i){let e=new Map;for(let n of i)for(let r of n.types){let a=e.get(r);if(a){let o=(l,u)=>n.reducer(a(l,u),u);e.set(r,o)}else e.set(r,n.reducer)}return function(n=t,r){let a=e.get(r.type);return a?a(n,r):n}}var dd=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},bi=class extends dd{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,n,r,a,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=a||null,this.directives=o||null}},Bn=class extends dd{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},__=class extends dd{element;constructor(i){super(),this.element=i instanceof U?i.nativeElement:i}},la=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof bi)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Bn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof __)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ud=class extends la{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(yu,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||se.NULL,a=r.get(dn,n.injector);e=Su(i.component,{elementInjector:r,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},FC=(()=>{class t extends Bn{constructor(){let e=s(Mt),n=s(vt);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ve]})}return t})(),vi=(()=>{class t extends la{_moduleRef=s(yu,{optional:!0});_document=s(ue);_viewContainerRef=s(vt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new B;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ve]})}return t})(),Qi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})();var b_=class{_box;_destroyed=new F;_resizeSubject=new F;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new lt(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(xe(e=>e.some(n=>n.target===i)),Ff({bufferSize:1,refCount:!0}),x(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},zm=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=s(re);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new b_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var md=class{};function pd(t){return t&&typeof t.connect=="function"&&!(t instanceof Kb)}var Ji=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Ji||{}),Um=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,n,r,a){i.forEachOperation((o,l,u)=>{let f,g;if(o.previousIndex==null){let v=()=>n(o,l,u);f=this._insertView(v,u,e,r(o)),g=f?Ji.INSERTED:Ji.REPLACED}else u==null?(this._detachAndCacheView(l,e),g=Ji.REMOVED):(f=this._moveView(l,u,e,r(o)),g=Ji.MOVED);a&&a({context:f?.context,operation:g,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,n,r){let a=this._insertViewFromCache(e,n);if(a){a.context.$implicit=r;return}let o=i();return n.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let n=e.detach(i);this._maybeCacheView(n,e)}_moveView(i,e,n,r){let a=n.get(i);return n.move(a,e),a.context.$implicit=r,a}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let n=e.indexOf(i);n===-1?i.destroy():e.remove(n)}}_insertViewFromCache(i,e){let n=this._viewCache.pop();return n&&e.insert(n,i),n||null}};var JR=20,ca=(()=>{class t{_ngZone=s(re);_platform=s(Re);_renderer=s(Pn).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new F;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=JR){return this._platform.isBrowser?new lt(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(oc(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):E()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(xe(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,a)=>{this._targetContainsElement(a,e)&&n.push(a)}),n}_targetContainsElement(e,n){let r=ti(n),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),hd=(()=>{class t{elementRef=s(U);scrollDispatcher=s(ca);ngZone=s(re);dir=s(mt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new F;_renderer=s(Ye);_cleanupScroll;_elementScrolled=new F;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&Fo()!=Zi.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Fo()==Zi.INVERTED?e.left=e.right:Fo()==Zi.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Tm()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?r:n:e=="end"&&(e=o?n:r),o&&Fo()==Zi.INVERTED?e==n?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:o&&Fo()==Zi.NEGATED?e==n?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==n?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),e1=20,ni=(()=>{class t{_platform=s(Re);_listeners;_viewportSize=null;_change=new F;_document=s(ue);constructor(){let e=s(re),n=s(Pn).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),o=-a.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,l=-a.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:o,left:l}}change(e=e1){return e>0?this._change.pipe(oc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var OC=new S("CDK_VIRTUAL_SCROLL_VIEWPORT");var Ai=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})(),fd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we,Ai,we,Ai]})}return t})();var w_=["*"];function n1(t,i){t&1&&de(0)}var i1=["tabListContainer"],r1=["tabList"],a1=["tabListInner"],o1=["nextPaginator"],s1=["previousPaginator"],l1=["content"];function c1(t,i){}var d1=["tabBodyWrapper"],u1=["tabHeader"];function m1(t,i){}function p1(t,i){if(t&1&&j(0,m1,0,0,"ng-template",12),t&2){let e=N().$implicit;w("cdkPortalOutlet",e.templateLabel)}}function h1(t,i){if(t&1&&m(0),t&2){let e=N().$implicit;ce(e.textLabel)}}function f1(t,i){if(t&1){let e=Te();c(0,"div",7,2),D("click",function(){let r=ae(e),a=r.$implicit,o=r.$index,l=N(),u=yt(1);return oe(l._handleClick(a,u,o))})("cdkFocusChange",function(r){let a=ae(e).$index,o=N();return oe(o._tabFocusChanged(r,a))}),A(2,"span",8)(3,"div",9),c(4,"span",10)(5,"span",11),T(6,p1,1,1,null,12)(7,h1,1,1),d()()()}if(t&2){let e=i.$implicit,n=i.$index,r=yt(1),a=N();Ct(e.labelClass),V("mdc-tab--active",a.selectedIndex===n),w("id",a._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),le("tabIndex",a._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(n))("aria-selected",a.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),w("matRippleTrigger",r)("matRippleDisabled",e.disabled||a.disableRipple),p(3),I(e.templateLabel?6:7)}}function g1(t,i){t&1&&de(0)}function _1(t,i){if(t&1){let e=Te();c(0,"mat-tab-body",13),D("_onCentered",function(){ae(e);let r=N();return oe(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){ae(e);let a=N();return oe(a._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){ae(e);let a=N();return oe(a._bodyCentered(r))}),d()}if(t&2){let e=i.$implicit,n=i.$index,r=N();Ct(e.bodyClass),w("id",r._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",r._bodyAnimationDuration)("preserveContent",r.preserveContent),le("tabindex",r.contentTabIndex!=null&&r.selectedIndex===n?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,n))("aria-hidden",r.selectedIndex!==n)}}var b1=new S("MatTabContent"),v1=(()=>{class t{template=s(Mt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Ae([{provide:b1,useExisting:t}])]})}return t})(),y1=new S("MatTabLabel"),VC=new S("MAT_TAB"),C1=(()=>{class t extends FC{_closestTab=s(VC,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ae([{provide:y1,useExisting:t}]),ve]})}return t})(),$C=new S("MAT_TAB_GROUP"),M_=(()=>{class t{_viewContainerRef=s(vt);_closestTabGroup=s($C,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new F;position=null;origin=null;isActive=!1;constructor(){s(ut).load(_i)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Bn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-tab"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,C1,5)(a,v1,7,Mt),n&2){let o;H(o=W())&&(r.templateLabel=o.first),H(o=W())&&(r._explicitContent=o.first)}},viewQuery:function(n,r){if(n&1&&Ke(Mt,7),n&2){let a;H(a=W())&&(r._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,r){n&2&&le("id",null)},inputs:{disabled:[2,"disabled","disabled",$],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ae([{provide:VC,useExisting:t}]),Ue],ngContentSelectors:w_,decls:1,vars:0,template:function(n,r){n&1&&(Be(),Ea(0,n1,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return t})(),v_="mdc-tab-indicator--active",PC="mdc-tab-indicator--no-transition",C_=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let r=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},S1=(()=>{class t{_elementRef=s(U);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(v_);return}let r=n.getBoundingClientRect(),a=e.width/r.width,o=e.left-r.left;n.classList.add(PC),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),n.getBoundingClientRect(),n.classList.remove(PC),n.classList.add(v_),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(v_)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",$]}})}return t})();var jC=(()=>{class t extends S1{elementRef=s(U);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,r){n&2&&(le("aria-disabled",!!r.disabled),V("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",$]},features:[ve]})}return t})(),LC={passive:!0},D1=650,w1=100;function y_(t){let i=t+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${t}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:""}var M1=(()=>{class t{_elementRef=s(U);_changeDetectorRef=s(Ee);_viewportRuler=s(ni);_dir=s(mt,{optional:!0});_ngZone=s(re);_platform=s(Re);_sharedResizeObserver=s(zm);_injector=s(se);_renderer=s(Ye);_animationsDisabled=He();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new F;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new F;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),LC),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),LC))}ngAfterContentInit(){let e=this._dir?this._dir.change:E("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(lr(32),x(this._destroyed)),r=this._viewportRuler.change(150).pipe(x(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new $a(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Je(a,{injector:this._injector}),qe(e,r,n,this._items.changes,this._itemsResized()).pipe(x(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?Pt:this._items.changes.pipe(st(this._items),ze(e=>new lt(n=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(a=>n.next(a));return e.forEach(a=>r.observe(a.elementRef.nativeElement)),()=>{r.disconnect()}}))),ea(1),xe(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!at(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=n.elementRef.nativeElement,l,u;this._getLayoutDirection()=="ltr"?(l=a,u=l+o):(u=this._tabListInner.nativeElement.offsetWidth-a,l=u-o);let f=this.scrollDistance,g=this.scrollDistance+r;l<f?this.scrollDistance-=f-l:u>g&&(this.scrollDistance+=Math.min(u-g,l-f))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,r=e-n>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),Qb(D1,w1).pipe(x(qe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:a}=this._scrollHeader(e);(a===0||a>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",$],selectedIndex:[2,"selectedIndex","selectedIndex",zn]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),x1=(()=>{class t extends M1{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new C_(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,jC,4),n&2){let o;H(o=W())&&(r._items=o)}},viewQuery:function(n,r){if(n&1&&Ke(i1,7)(r1,7)(a1,7)(o1,5)(s1,5),n&2){let a;H(a=W())&&(r._tabListContainer=a.first),H(a=W())&&(r._tabList=a.first),H(a=W())&&(r._tabListInner=a.first),H(a=W())&&(r._nextPaginator=a.first),H(a=W())&&(r._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,r){n&2&&V("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",$]},features:[ve],ngContentSelectors:w_,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(Be(),c(0,"div",5,0),D("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(o){return r._handlePaginatorPress("before",o)})("touchend",function(){return r._stopInterval()}),A(2,"div",6),d(),c(3,"div",7,1),D("keydown",function(o){return r._handleKeydown(o)}),c(5,"div",8,2),D("cdkObserveContent",function(){return r._onContentChanges()}),c(7,"div",9,3),de(9),d()()(),c(10,"div",10,4),D("mousedown",function(o){return r._handlePaginatorPress("after",o)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),A(12,"div",6),d()),n&2&&(V("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),w("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),V("_mat-animation-noopable",r._animationsDisabled),p(2),le("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),V("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),w("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Gr,B0],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return t})(),A1=new S("MAT_TABS_CONFIG"),BC=(()=>{class t extends vi{_host=s(S_);_ngZone=s(re);_centeringSub=Fe.EMPTY;_leavingSub=Fe.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(st(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[ve]})}return t})(),S_=(()=>{class t{_elementRef=s(U);_dir=s(mt,{optional:!0});_ngZone=s(re);_injector=s(se);_renderer=s(Ye);_diAnimationsDisabled=He();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Fe.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(Ee);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Je(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Je(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,r){if(n&1&&Ke(BC,5)(l1,5),n&2){let a;H(a=W())&&(r._portalHost=a.first),H(a=W())&&(r._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,r){n&2&&le("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,r){n&1&&(c(0,"div",1,0),j(2,c1,0,0,"ng-template",2),d()),n&2&&V("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[BC,hd],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return t})(),GC=(()=>{class t{_elementRef=s(U);_changeDetectorRef=s(Ee);_ngZone=s(re);_tabsSubscription=Fe.EMPTY;_tabLabelSubscription=Fe.EMPTY;_tabBodySubscription=Fe.EMPTY;_diAnimationsDisabled=He();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new wa;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=y_(e.body),this._headerAnimationDuration=y_(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=y_(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!s(Re).isBrowser;constructor(){let e=s(A1,{optional:!0});this._groupId=s(Xe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,a)=>r.isActive=a===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,r)=>{n.position=r-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),r;for(let a=0;a<n.length;a++)if(n[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,r=n[a];break}!r&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(st(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new D_;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=qe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,r){n.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,r)=>n._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,M_,5),n&2){let o;H(o=W())&&(r._allTabs=o)}},viewQuery:function(n,r){if(n&1&&Ke(d1,5)(u1,5)(S_,5),n&2){let a;H(a=W())&&(r._tabBodyWrapper=a.first),H(a=W())&&(r._tabHeader=a.first),H(a=W())&&(r._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(n,r){n&2&&(le("mat-align-tabs",r.alignTabs),Ct("mat-"+(r.color||"primary")),Di("--%NS%mat-tab-body-animation-duration",r._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",r._headerAnimationDuration),V("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",$],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",$],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",$],selectedIndex:[2,"selectedIndex","selectedIndex",zn],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",zn],disablePagination:[2,"disablePagination","disablePagination",$],disableRipple:[2,"disableRipple","disableRipple",$],preserveContent:[2,"preserveContent","preserveContent",$],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ae([{provide:$C,useExisting:t}])],ngContentSelectors:w_,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,r){n&1&&(Be(),c(0,"mat-tab-header",3,0),D("indexFocused",function(o){return r._focusChanged(o)})("selectFocusedIndex",function(o){return r.selectedIndex=o}),gt(2,f1,8,17,"div",4,jf),d(),T(4,g1,1,0),c(5,"div",5,1),gt(7,_1,1,10,"mat-tab-body",6,jf),d()),n&2&&(w("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Mv("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),_t(r._tabs),p(2),I(r._isServer?4:-1),p(),V("_mat-animation-noopable",r._bodyAnimationsDisabled()),p(2),_t(r._tabs))},dependencies:[x1,jC,Xc,Gr,vi,S_],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return t})(),D_=class{index;tab};var zC=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var R1=["*",[["mat-toolbar-row"]]],k1=["*","mat-toolbar-row"],T1=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),UC=(()=>{class t{_elementRef=s(U);_platform=s(Re);_document=s(ue);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,T1,5),n&2){let o;H(o=W())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(Ct(r.color?"mat-"+r.color:""),V("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:k1,decls:2,vars:0,template:function(n,r){n&1&&(Be(R1),de(0),de(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var HC=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var N1=["*",[["","progressIndicator",""]]],F1=["*","[progressIndicator]"];function O1(t,i){t&1&&(et(0,"div",1),de(1,1),tt())}var P1=new S("MAT_BUTTON_CONFIG");function WC(t){return t==null?void 0:zn(t)}var x_=(()=>{class t{_elementRef=s(U);_ngZone=s(re);_animationsDisabled=He();_config=s(P1,{optional:!0});_focusMonitor=s(Wn);_cleanupClick;_renderer=s(Ye);_rippleLoader=s(lC);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ta(!1,{transform:$});constructor(){s(ut).load(_i);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(n,r){n&2&&(le("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ct(r.color?"mat-"+r.color:""),V("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",$],disabled:[2,"disabled","disabled",$],ariaDisabled:[2,"aria-disabled","ariaDisabled",$],disabledInteractive:[2,"disabledInteractive","disabledInteractive",$],tabIndex:[2,"tabIndex","tabIndex",WC],_tabindex:[2,"tabindex","_tabindex",WC],showProgress:[1,"showProgress"]}})}return t})(),xt=(()=>{class t extends x_{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ve],ngContentSelectors:F1,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Be(N1),mi(0,"span",0),de(1),T(2,O1,2,0,"div",1),mi(3,"span",2)(4,"span",3)),n&2&&(p(2),I(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var L1=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],B1=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function V1(t,i){t&1&&(et(0,"div",2),de(1,3),tt())}var qC=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ve=(()=>{class t extends x_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=$1(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?qC.get(this._appearance):null,a=qC.get(e);r&&n.remove(...r),n.add(...a),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ve],ngContentSelectors:B1,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Be(L1),mi(0,"span",0),de(1),et(2,"span",1),de(3,1),tt(),de(4,2),T(5,V1,2,0,"div",2),mi(6,"span",3)(7,"span",4)),n&2&&(V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),p(5),I(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function $1(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Po,we]})}return t})();function YC(t){return Error(`Unable to find icon with the name "${t}"`)}function j1(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function KC(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function XC(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var zr=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},QC=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,a){this._httpClient=e,this._sanitizer=n,this._errorHandler=a,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,a){return this._addSvgIconConfig(e,n,new zr(r,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,a){let o=this._sanitizer.sanitize(Jn.HTML,r);if(!o)throw XC(r);let l=Ba(o);return this._addSvgIconConfig(e,n,new zr("",l,a))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new zr(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let a=this._sanitizer.sanitize(Jn.HTML,n);if(!a)throw XC(n);let o=Ba(a);return this._addSvgIconSetConfig(e,new zr("",o,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Jn.RESOURCE_URL,e);if(!n)throw KC(e);let r=this._cachedIconsByUrl.get(n);return r?E(Hm(r)):this._loadSvgIconFromConfig(new zr(e,null)).pipe(ct(a=>this._cachedIconsByUrl.set(n,a)),R(a=>Hm(a)))}getNamedSvgIcon(e,n=""){let r=ZC(n,e),a=this._svgIconConfigs.get(r);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(n,e),a)return this._svgIconConfigs.set(r,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(e,o):du(YC(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?E(Hm(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(R(n=>Hm(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return E(r);let a=n.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(K(l=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(Jn.RESOURCE_URL,o.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(f)),E(null)})));return mu(a).pipe(R(()=>{let o=this._extractIconWithNameFromAnySet(e,n);if(!o)throw YC(e);return o}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let a=n[r];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(o,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ct(n=>e.svgText=n),R(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?E(null):this._fetchIcon(e).pipe(ct(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let a=e.querySelector(`[id="${n}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let l=this._svgElementFromString(Ba("<svg></svg>"));return l.appendChild(o),this._setSvgAttributes(l,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(Ba("<svg></svg>")),r=e.attributes;for(let a=0;a<r.length;a++){let{name:o,value:l}=r[a];o!=="id"&&n.setAttribute(o,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[a].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,a=r?.withCredentials??!1;if(!this._httpClient)throw j1();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let o=this._sanitizer.sanitize(Jn.RESOURCE_URL,n);if(!o)throw KC(n);let l=this._inProgressUrlFetches.get(o);if(l)return l;let u=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(R(f=>Ba(f)),ro(()=>this._inProgressUrlFetches.delete(o)),fu());return this._inProgressUrlFetches.set(o,u),u}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(ZC(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let a=this._resolvers[r](n,e);if(a)return G1(a)?new zr(a.url,null,a.options):new zr(a,null)}}static \u0275fac=function(n){return new(n||t)(Y(kt,8),Y(Ac),Y(ue,8),Y(Hi))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hm(t){return t.cloneNode(!0)}function ZC(t,i){return t+":"+i}function G1(t){return!!(t.url&&t.options)}var z1=["*"],U1=new S("MAT_ICON_DEFAULT_OPTIONS"),H1=new S("mat-icon-location",{providedIn:"root",factory:()=>{let t=s(ue),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),JC=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],W1=JC.map(t=>`[${t}]`).join(", "),q1=/^url\(['"]?#(.*?)['"]?\)$/,It=(()=>{class t{_elementRef=s(U);_iconRegistry=s(QC);_location=s(H1);_errorHandler=s(Hi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Fe.EMPTY;constructor(){let e=s(new Fi("aria-hidden"),{optional:!0}),n=s(U1,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,a)=>{r.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(W1),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<n.length;a++)JC.forEach(o=>{let l=n[a],u=l.getAttribute(o),f=u?u.match(q1):null;if(f){let g=r.get(l);g||(g=[],r.set(l,g)),g.push({name:o,value:f[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(Le(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${n}:${r}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(le("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ct(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",$],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:z1,decls:1,vars:0,template:function(n,r){n&1&&(Be(),de(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return t})(),Nt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var eS=Tm();function da(t){return new Wm(t.get(ni),t.get(ue))}var Wm=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Ft(-this._previousScrollPosition.left),i.style.top=Ft(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,a=n.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),eS&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),eS&&(n.scrollBehavior=a,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function sS(t,i){return new qm(t.get(ca),t.get(re),t.get(ni),i)}var qm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(xe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var gd=class{enable(){}disable(){}attach(){}};function A_(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,a=t.right<e.left,o=t.left>e.right;return n||r||a||o})}function tS(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,a=t.left<e.left,o=t.right>e.right;return n||r||a||o})}function Ei(t,i){return new Ym(t.get(ca),t.get(ni),t.get(re),i)}var Ym=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();A_(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},lS=(()=>{class t{_injector=s(se);noop=()=>new gd;close=e=>sS(this._injector,e);block=()=>da(this._injector);reposition=e=>Ei(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),ii=class{positionStrategy;scrollStrategy=new gd;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Km=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var cS=(()=>{class t{_attachedOverlays=[];_document=s(ue);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),dS=(()=>{class t extends cS{_ngZone=s(re);_renderer=s(Pn).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let a=n[r];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),uS=(()=>{class t extends cS{_platform=s(Re);_ngZone=s(re);_renderer=s(Pn).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(n,"pointerdown",this._pointerDownListener,r),a.listen(n,"click",this._clickListener,r),a.listen(n,"auxclick",this._clickListener,r),a.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=en(e)};_clickListener=e=>{let n=en(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let o=a.length-1;o>-1;o--){let l=a[o],u=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,u))){if(nS(l.overlayElement,n)||nS(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>u.next(e)):u.next(e)}}};static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function nS(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var mS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return t})(),Zm=(()=>{class t{_platform=s(Re);_containerElement;_document=s(ue);_styleLoader=s(ut);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Jg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<r.length;a++)r[a].remove()}let n=this._document.createElement("div");n.classList.add(e),Jg()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(mS)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),E_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function R_(t){return t&&t.nodeType===1}var jo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new F;_attachments=new F;_detachments=new F;_positionStrategy;_scrollStrategy;_locationChanges=Fe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new F;_outsidePointerEvents=new F;_afterNextRenderRef;constructor(i,e,n,r,a,o,l,u,f,g=!1,v,k){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=a,this._keyboardDispatcher=o,this._document=l,this._location=u,this._outsideClickDispatcher=f,this._animationsDisabled=g,this._injector=v,this._renderer=k,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=h(h({},this._config),i),this._updateElementSize()}setDirection(i){this._config=_(h({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ft(this._config.width),i.height=Ft(this._config.height),i.minWidth=Ft(this._config.minWidth),i.minHeight=Ft(this._config.minHeight),i.maxWidth=Ft(this._config.maxWidth),i.maxHeight=Ft(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;R_(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new E_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=$r(e||[]).filter(a=>!!a);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Je(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},iS="cdk-overlay-connected-position-bounding-box",Y1=/([A-Za-z%]+)$/;function tr(t,i){return new Go(i,t.get(ni),t.get(ue),t.get(Re),t.get(Zm))}var Go=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new F;_resizeSubscription=Fe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,a){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=a,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(iS),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,a=[],o;for(let l of this._preferredPositions){let u=this._getOriginPoint(i,r,l),f=this._getOverlayPoint(u,e,l),g=this._getOverlayFit(f,e,n,l);if(g.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,u);return}if(this._canFitWithFlexibleDimensions(g,f,n)){a.push({position:l,origin:u,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(u,l)});continue}(!o||o.overlayFit.visibleArea<g.visibleArea)&&(o={overlayFit:g,overlayPoint:f,originPoint:u,position:l,overlayRect:e})}if(a.length){let l=null,u=-1;for(let f of a){let g=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);g>u&&(u=g,l=f)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ua(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(iS),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:R_(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=n.originX=="start"?o:l}e.left<0&&(r-=e.left);let a;return n.originY=="center"?a=i.top+i.height/2:a=n.originY=="top"?i.top:i.bottom,e.top<0&&(a-=e.top),{x:r,y:a}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let a;return n.overlayY=="center"?a=-e.height/2:a=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+a}}_getOverlayFit(i,e,n,r){let a=aS(e),{x:o,y:l}=i,u=this._getOffset(r,"x"),f=this._getOffset(r,"y");u&&(o+=u),f&&(l+=f);let g=0-o,v=o+a.width-n.width,k=0-l,G=l+a.height-n.height,q=this._subtractOverflows(a.width,g,v),ee=this._subtractOverflows(a.height,k,G),ye=q*ee;return{visibleArea:ye,isCompletelyWithinViewport:a.width*a.height===ye,fitsInViewportVertically:ee===a.height,fitsInViewportHorizontally:q==a.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,a=n.right-e.x,o=rS(this._overlayRef.getConfig().minHeight),l=rS(this._overlayRef.getConfig().minWidth),u=i.fitsInViewportVertically||o!=null&&o<=r,f=i.fitsInViewportHorizontally||l!=null&&l<=a;return u&&f}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=aS(e),a=this._viewportRect,o=Math.max(i.x+r.width-a.width,0),l=Math.max(i.y+r.height-a.height,0),u=Math.max(a.top-n.top-i.y,0),f=Math.max(a.left-n.left-i.x,0),g=0,v=0;return r.width<=a.width?g=f||-o:g=i.x<this._getViewportMarginStart()?a.left-n.left-i.x:0,r.height<=a.height?v=u||-l:v=i.y<this._getViewportMarginTop()?a.top-n.top-i.y:0,this._previousPushAmount={x:g,y:v},{x:i.x+g,y:i.y+v}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!K1(this._lastScrollVisibility,n)){let r=new Km(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),a,o,l;if(e.overlayY==="top")o=i.y,a=n.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=n.height-l+this._getViewportMarginTop();else{let G=Math.min(n.bottom-i.y+n.top,i.y),q=this._lastBoundingBoxSize.height;a=G*2,o=i.y-G,a>q&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-q/2)}let u=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,f=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,g,v,k;if(f)k=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),g=i.x-this._getViewportMarginStart();else if(u)v=i.x,g=n.right-i.x-this._getViewportMarginEnd();else{let G=Math.min(n.right-i.x+n.left,i.x),q=this._lastBoundingBoxSize.width;g=G*2,v=i.x-G,g>q&&!this._isInitialRender&&!this._growAfterOpen&&(v=i.x-q/2)}return{top:o,left:v,bottom:l,right:k,width:g,height:a}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=Ft(n.width),r.height=Ft(n.height),r.top=Ft(n.top)||"auto",r.bottom=Ft(n.bottom)||"auto",r.left=Ft(n.left)||"auto",r.right=Ft(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(r.maxHeight=Ft(a)),o&&(r.maxWidth=Ft(o))}this._lastBoundingBoxSize=n,Ua(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ua(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ua(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),a=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let g=this._viewportRuler.getViewportScrollPosition();Ua(n,this._getExactOverlayY(e,i,g)),Ua(n,this._getExactOverlayX(e,i,g))}else n.position="static";let l="",u=this._getOffset(e,"x"),f=this._getOffset(e,"y");u&&(l+=`translateX(${u}px) `),f&&(l+=`translateY(${f}px)`),n.transform=l.trim(),o.maxHeight&&(r?n.maxHeight=Ft(o.maxHeight):a&&(n.maxHeight="")),o.maxWidth&&(r?n.maxWidth=Ft(o.maxWidth):a&&(n.maxWidth="")),Ua(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,n)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(a.y+this._overlayRect.height)}px`}else r.top=Ft(a.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,n));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;r.right=`${l-(a.x+this._overlayRect.width)}px`}else r.left=Ft(a.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:tS(i,n),isOriginOutsideView:A_(i,n),isOverlayClipped:tS(e,n),isOverlayOutsideView:A_(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&$r(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof U)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function Ua(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function rS(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(Y1);return!e||e==="px"?parseFloat(i):null}return t||null}function aS(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function K1(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var oS="cdk-global-overlay-wrapper";function yr(t){return new Xm}var Xm=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(oS),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:a,maxWidth:o,maxHeight:l}=n,u=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),f=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),g=this._xPosition,v=this._xOffset,k=this._overlayRef.getConfig().direction==="rtl",G="",q="",ee="";u?ee="flex-start":g==="center"?(ee="center",k?q=v:G=v):k?g==="left"||g==="end"?(ee="flex-end",G=v):(g==="right"||g==="start")&&(ee="flex-start",q=v):g==="left"||g==="start"?(ee="flex-start",G=v):(g==="right"||g==="end")&&(ee="flex-end",q=v),i.position=this._cssPosition,i.marginLeft=u?"0":G,i.marginTop=f?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=u?"0":q,e.justifyContent=ee,e.alignItems=f?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(oS),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},pS=(()=>{class t{_injector=s(se);global(){return yr()}flexibleConnectedTo(e){return tr(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),_d=new S("OVERLAY_DEFAULT_CONFIG");function ai(t,i){t.get(ut).load(mS);let e=t.get(Zm),n=t.get(ue),r=t.get(Xe),a=t.get(dr),o=t.get(mt),l=t.get(Ye,null,{optional:!0})||t.get(Pn).createRenderer(null,null),u=new ii(i),f=t.get(_d,null,{optional:!0})?.usePopover??!0;u.direction=u.direction||o.value,!n.body||!("showPopover"in n.body)?u.usePopover=!1:u.usePopover=i?.usePopover??f;let g=n.createElement("div"),v=n.createElement("div");g.id=r.getId("cdk-overlay-"),g.classList.add("cdk-overlay-pane"),v.appendChild(g),u.usePopover&&(v.setAttribute("popover","manual"),v.classList.add("cdk-overlay-popover"));let k=u.usePopover?u.positionStrategy?.getPopoverInsertionPoint?.():null;return R_(k)?k.after(v):k?.type==="parent"?k.element.appendChild(v):e.getContainerElement().appendChild(v),new jo(new ud(g,a,t),v,g,u,t.get(re),t.get(dS),n,t.get(ia),t.get(uS),i?.disableAnimations??t.get(oo,null,{optional:!0})==="NoopAnimations",t.get(dn),l)}var hS=(()=>{class t{scrollStrategies=s(lS);_positionBuilder=s(pS);_injector=s(se);create(e){return ai(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),X1=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Z1=new S("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t)}}),zo=(()=>{class t{elementRef=s(U);static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),fS=new S("cdk-connected-overlay-default-config"),Qm=(()=>{class t{_dir=s(mt,{optional:!0});_injector=s(se);_overlayRef;_templatePortal;_backdropSubscription=Fe.EMPTY;_attachSubscription=Fe.EMPTY;_detachSubscription=Fe.EMPTY;_positionSubscription=Fe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Z1);_ngZone=s(re);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new B;positionChange=new B;attach=new B;detach=new B;overlayKeydown=new B;overlayOutsideClick=new B;constructor(){let e=s(Mt),n=s(vt),r=s(fS,{optional:!0}),a=s(_d,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Bn(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=X1);let e=this._overlayRef=ai(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!at(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),a=en(n);(!r||r!==a&&!r.contains(a))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new ii({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=tr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof zo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof zo?this.origin.elementRef.nativeElement:this.origin instanceof U?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(av(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",$],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",$],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",$],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",$],push:[2,"cdkConnectedOverlayPush","push",$],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",$],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",$],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ue]})}return t})(),Vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[hS],imports:[we,Qi,fd,fd]})}return t})();var Q1=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],J1=["mat-icon, [matMenuItemIcon]","*"];function ek(t,i){t&1&&(Gn(),c(0,"svg",2),A(1,"polygon",3),d())}var tk=["*"];function nk(t,i){if(t&1){let e=Te();et(0,"div",0),co("click",function(){ae(e);let r=N();return oe(r.closed.emit("click"))})("animationstart",function(r){ae(e);let a=N();return oe(a._onAnimationStart(r.animationName))})("animationend",function(r){ae(e);let a=N();return oe(a._onAnimationDone(r.animationName))})("animationcancel",function(r){ae(e);let a=N();return oe(a._onAnimationDone(r.animationName))}),et(1,"div",1),de(2),tt()()}if(t&2){let e=N();Ct(e._classList),V("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Et("id",e.panelId),le("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var T_=new S("MAT_MENU_PANEL"),Ur=(()=>{class t{_elementRef=s(U);_document=s(ue);_focusMonitor=s(Wn);_parentMenu=s(T_,{optional:!0});_changeDetectorRef=s(Ee);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new F;_focused=new F;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(ut).load(_i),this._parentMenu?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<n.length;r++)n[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(n,r){n&1&&D("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),n&2&&(le("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),V("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",$],disableRipple:[2,"disableRipple","disableRipple",$]},exportAs:["matMenuItem"],ngContentSelectors:J1,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,r){n&1&&(Be(Q1),de(0),c(1,"span",0),de(2,1),d(),A(3,"div",1),T(4,ek,2,0,":svg:svg",2)),n&2&&(p(3),w("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),p(),I(r._triggersSubmenu?4:-1))},dependencies:[Gr],encapsulation:2})}return t})();var ik=new S("MatMenuContent");var rk=new S("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),k_="_mat-menu-enter",Jm="_mat-menu-exit",Cr=(()=>{class t{_elementRef=s(U);_changeDetectorRef=s(Ee);_injector=s(se);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=He();_allItems;_directDescendantItems=new wa;_classList={};_panelAnimationState="void";_animationDone=new F;_isAnimating=be(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let n=this._previousPanelClass,r=h({},this._classList);n&&n.length&&n.split(" ").forEach(a=>{r[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{r[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new B;close=this.closed;panelId=s(Xe).getId("mat-menu-panel-");constructor(){let e=s(rk);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new $a(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(st(this._directDescendantItems),ze(e=>qe(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let n=this._keyManager;if(this._panelAnimationState==="enter"&&n.activeItem?._hasFocus()){let r=e.toArray(),a=Math.max(0,Math.min(r.length-1,n.activeItemIndex||0));r[a]&&!r[a].disabled?n.setActiveItem(a):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(st(this._directDescendantItems),ze(n=>qe(...n.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let n=e.keyCode,r=this._keyManager;switch(n){case 27:at(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(n===38||n===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Je(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList=_(h({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":n==="above","mat-menu-below":n==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let n=e===Jm;(n||e===k_)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===k_||e===Jm)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Jm),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?k_:Jm)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(st(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-menu"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,ik,5)(a,Ur,5)(a,Ur,4),n&2){let o;H(o=W())&&(r.lazyContent=o.first),H(o=W())&&(r._allItems=o),H(o=W())&&(r.items=o)}},viewQuery:function(n,r){if(n&1&&Ke(Mt,5),n&2){let a;H(a=W())&&(r.templateRef=a.first)}},hostVars:3,hostBindings:function(n,r){n&2&&le("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",$],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:$(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ae([{provide:T_,useExisting:t}])],ngContentSelectors:tk,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(n,r){n&1&&(Be(),Ea(0,nk,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return t})(),ak=new S("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t)}});var Uo=new WeakMap,ok=(()=>{class t{_canHaveBackdrop;_element=s(U);_viewContainerRef=s(vt);_menuItemInstance=s(Ur,{optional:!0,self:!0});_dir=s(mt,{optional:!0});_focusMonitor=s(Wn);_ngZone=s(re);_injector=s(se);_scrollStrategy=s(ak);_changeDetectorRef=s(Ee);_animationsDisabled=He();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Fe.EMPTY;_menuCloseSubscription=Fe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n==="click"||n==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let n=s(T_,{optional:!0});this._parentMaterialMenu=n instanceof Cr?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Uo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let r=Uo.get(n);Uo.set(n,this),r&&r!==this&&r._closeMenu();let a=this._createOverlay(n),o=a.getConfig(),l=o.positionStrategy;this._setPosition(n,l),this._canHaveBackdrop?o.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:o.hasBackdrop=n.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,e&&n.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),n instanceof Cr&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(x(n.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}_destroyMenu(e){let n=this._overlayRef,r=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Cr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Le(1)).subscribe(()=>{n.detach(),Uo.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(n.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Uo.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=ai(this._injector,n),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Cr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new ii({positionStrategy:tr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let a=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,o)})})}_setPosition(e,n){let[r,a]=e.xPosition==="before"?["end","start"]:["start","end"],[o,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,f]=[o,l],[g,v]=[r,a],k=0;if(this._triggersSubmenu()){if(v=r=e.xPosition==="before"?"start":"end",a=g=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let G=this._parentMaterialMenu.items.first;this._parentInnerPadding=G?G._getHostElement().offsetTop:0}k=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=o==="top"?"bottom":"top",f=l==="top"?"bottom":"top");n.withPositions([{originX:r,originY:u,overlayX:g,overlayY:o,offsetY:k},{originX:a,originY:u,overlayX:v,overlayY:o,offsetY:k},{originX:r,originY:f,overlayX:g,overlayY:l,offsetY:-k},{originX:a,originY:f,overlayX:v,overlayY:l,offsetY:-k}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:E(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(o=>this._menuOpen&&o!==this._menuItemInstance)):E();return qe(e,r,a,n)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Bn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Uo.get(e)===this}_triggerIsAriaDisabled(){return $(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(n){xa()};static \u0275dir=P({type:t})}return t})(),Ho=(()=>{class t extends ok{_cleanupTouchstart;_hoverSubscription=Fe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new B;onMenuOpen=this.menuOpened;menuClosed=new B;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(Ye);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",n=>{La(n)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Pa(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let n=e.keyCode;(n===13||n===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===39&&this.dir==="ltr"||n===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,r){n&1&&D("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),n&2&&le("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ve]})}return t})();var Wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Po,Vn,we,Ai]})}return t})();var sk=["tooltip"],lk=20;var ck=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t,{scrollThrottle:lk})}}),dk=new S("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var gS="tooltip-panel",uk={passive:!0},mk=8,pk=8,hk=24,fk=200,Rt=(()=>{class t{_elementRef=s(U);_ngZone=s(re);_platform=s(Re);_ariaDescriber=s(ed);_focusMonitor=s(Wn);_dir=s(mt);_injector=s(se);_viewContainerRef=s(vt);_mediaMatcher=s(To);_document=s(ue);_renderer=s(Ye);_animationsDisabled=He();_defaultOptions=s(dk,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=_S;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ji(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=ji(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Xi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Xi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new F;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=mk}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(x(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new bi(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=r.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(x(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof U)return this._overlayRef;this._detach()}let n=this._injector.get(ca).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${gS}`,a=tr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return a.positionChanges.pipe(x(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ai(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(ck)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(x(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(x(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(x(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(x(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,r=this._getOrigin(),a=this._getOverlayPosition();n.withPositions([this._addOffset(h(h({},r.main),a.main)),this._addOffset(h(h({},r.fallback),a.fallback))])}_addOffset(e){let n=pk,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=r?-n:n:e.originX==="end"&&(e.offsetX=r?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Je(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:r,originY:a}=e,o;if(n==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=n==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let u=`${this._cssClassPrefix}-${gS}-`;l.removePanelClass(u+this._currentPosition),l.addPanelClass(u+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,uk))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,r=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Je({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!at(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&V("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),_S=(()=>{class t{_changeDetectorRef=s(Ee);_elementRef=s(U);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=He();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new F;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>hk&&e.width>=fk}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,r=this._showAnimation,a=this._hideAnimation;if(n.classList.remove(e?a:r),n.classList.add(e?r:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(n);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&Ke(sk,7),n&2){let a;H(a=W())&&(r._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&D("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(et(0,"div",1,0),co("animationend",function(o){return r._handleAnimationEnd(o)}),et(2,"div",2),m(3),tt()()),n&2&&(Ct(r.tooltipClass),V("mdc-tooltip--multiline",r._isMultiline),p(3),ce(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return t})();var Bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[jr,Vn,we,Ai]})}return t})();var ep=class{applyChanges(i,e,n,r,a){i.forEachOperation((o,l,u)=>{let f,g;if(o.previousIndex==null){let v=n(o,l,u);f=e.createEmbeddedView(v.templateRef,v.context,v.index),g=Ji.INSERTED}else u==null?(e.remove(l),g=Ji.REMOVED):(f=e.get(l),e.move(f,u),g=Ji.MOVED);a&&a({context:f?.context,operation:g,record:o})})}detach(){}};var gk=[[["caption"]],[["colgroup"],["col"]],"*"],_k=["caption","colgroup, col","*"];function bk(t,i){t&1&&de(0,2)}function vk(t,i){t&1&&(c(0,"thead",0),un(1,1),d(),c(2,"tbody",0),un(3,2)(4,3),d(),c(5,"tfoot",0),un(6,4),d())}function yk(t,i){t&1&&un(0,1)(1,2)(2,3)(3,4)}var nr=new S("CDK_TABLE");var ip=(()=>{class t{template=s(Mt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),rp=(()=>{class t{template=s(Mt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),CS=(()=>{class t{template=s(Mt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),ua=(()=>{class t{_table=s(nr,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(n,r,a){if(n&1&&Qt(a,ip,5)(a,rp,5)(a,CS,5),n&2){let o;H(o=W())&&(r.cell=o.first),H(o=W())&&(r.headerCell=o.first),H(o=W())&&(r.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",$],stickyEnd:[2,"stickyEnd","stickyEnd",$]}})}return t})(),np=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},SS=(()=>{class t extends np{constructor(){super(s(ua),s(U))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ve]})}return t})();var DS=(()=>{class t extends np{constructor(){let e=s(ua),n=s(U);super(e,n);let r=e._table?._getCellRole();r&&n.nativeElement.setAttribute("role",r)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ve]})}return t})();var F_=(()=>{class t{template=s(Mt);_differs=s(uc);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let n=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(n).create(),this._columnsDiffer.diff(n)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof vd?e.headerCell.template:this instanceof O_?e.footerCell.template:e.cell.template}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,features:[Ue]})}return t})(),vd=(()=>{class t extends F_{_table=s(nr,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",$]},features:[ve,Ue]})}return t})(),O_=(()=>{class t extends F_{_table=s(nr,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",$]},features:[ve,Ue]})}return t})(),ap=(()=>{class t extends F_{_table=s(nr,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ve]})}return t})(),Ha=(()=>{class t{_viewContainer=s(vt);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),P_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,r){n&1&&un(0,0)},dependencies:[Ha],encapsulation:2,changeDetection:1})}return t})();var L_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,r){n&1&&un(0,0)},dependencies:[Ha],encapsulation:2,changeDetection:1})}return t})(),wS=(()=>{class t{templateRef=s(Mt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),bS=["top","bottom","left","right"],N_=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,n=!0,r=!0,a,o,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=n,this._needsPositionStickyOnElement=r,this.direction=a,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let n=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&n.push(r,...Array.from(r.children));Je({write:()=>{for(let r of n)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,n,r=!0,a=!0){if(!i.length||!this._isBrowser||!(e.some(ye=>ye)||n.some(ye=>ye))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],l=o.children.length,u=this.direction==="rtl",f=u?"right":"left",g=u?"left":"right",v=e.lastIndexOf(!0),k=n.indexOf(!0),G,q,ee;a&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...n]}),Je({earlyRead:()=>{G=this._getCellWidths(o,r),q=this._getStickyStartColumnPositions(G,e),ee=this._getStickyEndColumnPositions(G,n)},write:()=>{for(let ye of i)for(let ke=0;ke<l;ke++){let De=ye.children[ke];e[ke]&&this._addStickyStyle(De,f,q[ke],ke===v),n[ke]&&this._addStickyStyle(De,g,ee[ke],ke===k)}this._positionListener&&G.some(ye=>!!ye)&&(this._positionListener.stickyColumnsUpdated({sizes:v===-1?[]:G.slice(0,v+1).map((ye,ke)=>e[ke]?ye:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:k===-1?[]:G.slice(k).map((ye,ke)=>n[ke+k]?ye:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,n){if(!this._isBrowser)return;let r=n==="bottom"?i.slice().reverse():i,a=n==="bottom"?e.slice().reverse():e,o=[],l=[],u=[];Je({earlyRead:()=>{for(let f=0,g=0;f<r.length;f++){if(!a[f])continue;o[f]=g;let v=r[f];u[f]=this._isNativeHtmlTable?Array.from(v.children):[v];let k=this._retrieveElementSize(v).height;g+=k,l[f]=k}},write:()=>{let f=a.lastIndexOf(!0);for(let g=0;g<r.length;g++){if(!a[g])continue;let v=o[g],k=g===f;for(let G of u[g])this._addStickyStyle(G,n,v,k)}n==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:u}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:u})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&Je({write:()=>{let n=i.querySelector("tfoot");n&&(e.some(r=>!r)?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);bS.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,n,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${n}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},n=0;for(let r of bS)i.style[r]&&(n+=e[r]);return n?`${n}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let n=[],r=i.children;for(let a=0;a<r.length;a++){let o=r[a];n.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=n,n}_getStickyStartColumnPositions(i,e){let n=[],r=0;for(let a=0;a<i.length;a++)e[a]&&(n[a]=r,r+=i[a]);return n}_getStickyEndColumnPositions(i,e){let n=[],r=0;for(let a=i.length;a>0;a--)e[a]&&(n[a]=r,r+=i[a]);return n}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let n=i.getBoundingClientRect(),r={width:n.width,height:n.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let n of this._updatedStickyColumnsParamsToReplay)n.rows=n.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(n=>!!n.rows.length)}_updateCachedSizes(i){let e=!1;for(let n of i){let r=n.borderBoxSize?.length?{width:n.borderBoxSize[0].inlineSize,height:n.borderBoxSize[0].blockSize}:{width:n.contentRect.width,height:n.contentRect.height};r.width!==this._elemSizeCache.get(n.target)?.width&&Ck(n.target)&&(e=!0),this._elemSizeCache.set(n.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let n of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(n.rows,n.stickyStartStates,n.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ck(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>t.classList.contains(i))}function vS(t){return Error(`Could not find column with id "${t}".`)}var bd=new S("STICKY_POSITIONING_LISTENER");var B_=(()=>{class t{viewContainer=s(vt);elementRef=s(U);constructor(){let e=s(nr);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","rowOutlet",""]]})}return t})(),V_=(()=>{class t{viewContainer=s(vt);elementRef=s(U);constructor(){let e=s(nr);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),$_=(()=>{class t{viewContainer=s(vt);elementRef=s(U);constructor(){let e=s(nr);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),j_=(()=>{class t{viewContainer=s(vt);elementRef=s(U);constructor(){let e=s(nr);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),G_=(()=>{class t{_differs=s(uc);_changeDetectorRef=s(Ee);_elementRef=s(U);_dir=s(mt,{optional:!0});_platform=s(Re);_viewRepeater;_viewportRuler=s(ni);_injector=s(se);_virtualScrollViewport=s(OC,{optional:!0,host:!0});_positionListener=s(bd,{optional:!0})||s(bd,{optional:!0,skipSelf:!0});_document=s(ue);_data;_renderedRange;_onDestroy=new F;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new F;_footerRowStickyUpdates=new F;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new F;_dataStream=new F;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new B;viewChange=new wt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new Fi("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((n,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(x(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Um:new ep,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),pd(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let n=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,n,(r,a,o)=>this._getEmbeddedViewArgs(r.item,o),r=>r.item.data,r=>{r.operation===Ji.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let a=n.get(r.currentIndex);a.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=yS(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let n=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,n,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=yS(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let n=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,n,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,n),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...n,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let l=0;l<n.length;l++)this._renderRows[l].rowDef===a&&o.push(n[l]);this._addStickyColumnStyles(o,a)}),r.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let n=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||n,this._forceRecalculateCellWidths=n,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],n=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<n;a++){let o=this._data[a],l=this._getRenderRowsForData(o,a,r.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let u=0;u<l.length;u++){let f=l[u],g=this._cachedRenderRowsMap.get(f.data);g.has(f.rowDef)?g.get(f.rowDef).push(f):g.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,n,r){return this._getRowDefs(e,n).map(o=>{let l=r&&r.has(o)?r.get(o):[];if(l.length){let u=l.shift();return u.dataIndex=n,u}else return{data:e,rowDef:o,dataIndex:n}})}_cacheColumnDefs(){this._columnDefsByName.clear(),tp(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(n=>{this._columnDefsByName.has(n.name),this._columnDefsByName.set(n.name,n)})}_cacheRowDefs(){this._headerRowDefs=tp(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=tp(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=tp(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(n=>!n.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let u=!!l.getColumnsDiff();return o||u},n=this._rowDefs.reduce(e,!1);n&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),n||r||a}_switchDataSource(e){this._data=[],pd(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;pd(this.dataSource)?e=this.dataSource.connect(this):io(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=E(this.dataSource)),this._renderChangeSubscription=jn([e,this.viewChange]).pipe(x(this._onDestroy)).subscribe(([n,r])=>{this._data=n||[],this._renderedRange=r,this._dataStream.next(n),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,n)=>this._renderRow(this._headerRowOutlet,e,n)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,n)=>this._renderRow(this._footerRowOutlet,e,n)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,n){let r=Array.from(n?.columns||[]).map(l=>{let u=this._columnDefsByName.get(l);if(!u)throw vS(l);return u}),a=r.map(l=>l.sticky),o=r.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let n=[];for(let r=0;r<e.viewContainer.length;r++){let a=e.viewContainer.get(r);n.push(a.rootNodes[0])}return n}_getRowDefs(e,n){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(a=>!a.when||a.when(n,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(n,e))||this._defaultRowDef;a&&r.push(a)}return r.length,r}_getEmbeddedViewArgs(e,n){let r=e.rowDef,a={$implicit:e.data};return{templateRef:r.template,context:a,index:n}}_renderRow(e,n,r,a={}){let o=e.viewContainer.createEmbeddedView(n.template,a,r);return this._renderCellTemplateForItem(n,a),o}_renderCellTemplateForItem(e,n){for(let r of this._getCellTemplates(e))Ha.mostRecentCellOutlet&&Ha.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,n);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let n=0,r=e.length;n<r;n++){let o=e.get(n).context;o.count=r,o.first=n===0,o.last=n===r-1,o.even=n%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[n].dataIndex,o.renderIndex=n):o.index=this._renderRows[n].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,n=>{let r=this._columnDefsByName.get(n);if(!r)throw vS(n);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(n,r)=>n||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",n=this._injector;this._stickyStyler=new N_(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,n),(this._dir?this._dir.change:E()).pipe(x(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let n=typeof requestAnimationFrame<"u"?kf:Rf;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(oc(0,n),x(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,a)=>this._measureRangeSize(r,a)}),jn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(x(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l){let u=a.offsets[o],f=r!==0?Math.max(r-u,u):-u;for(let g of l)g.style.top=`${-f}px`}}}),jn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(x(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l)for(let u of l)u.style.bottom=`${r+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(n=>!n._table||n._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let n=this._rowOutlet.viewContainer.length===0;if(n===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(n){let a=r.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let u=0;u<l.length;u++)l[u].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=n,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,n){if(e.start>=e.end||n!=="vertical")return 0;let r=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let o=e.start-r.start,l=e.end-e.start,u,f;for(let k=0;k<l;k++){let G=a.get(k+o);if(G&&G.rootNodes.length){u=f=G.rootNodes[0];break}}for(let k=l-1;k>-1;k--){let G=a.get(k+o);if(G&&G.rootNodes.length){f=G.rootNodes[G.rootNodes.length-1];break}}let g=u?.getBoundingClientRect?.(),v=f?.getBoundingClientRect?.();return g&&v?v.bottom-g.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(n,r,a){if(n&1&&Qt(a,wS,5)(a,ua,5)(a,ap,5)(a,vd,5)(a,O_,5),n&2){let o;H(o=W())&&(r._noDataRow=o.first),H(o=W())&&(r._contentColumnDefs=o),H(o=W())&&(r._contentRowDefs=o),H(o=W())&&(r._contentHeaderRowDefs=o),H(o=W())&&(r._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(n,r){n&2&&V("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",$],fixedLayout:[2,"fixedLayout","fixedLayout",$],recycleRows:[2,"recycleRows","recycleRows",$]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[Ae([{provide:nr,useExisting:t},{provide:bd,useValue:null}])],ngContentSelectors:_k,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(n,r){n&1&&(Be(gk),de(0),de(1,1),T(2,bk,1,0),T(3,vk,7,0)(4,yk,4,0)),n&2&&(p(2),I(r._isServer?2:-1),p(),I(r._isNativeHtmlTable?3:4))},dependencies:[V_,B_,j_,$_],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return t})();function tp(t,i){return t.concat(Array.from(i))}function yS(t,i){let e=i.toUpperCase(),n=t.viewContainer.element.nativeElement;for(;n;){let r=n.nodeType===1?n.nodeName:null;if(r===e)return n;if(r==="TABLE")break;n=n.parentNode}return null}var MS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[fd]})}return t})();var yd=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new F;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!n.has(this._getConcreteValue(a,n))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Sk=[[["caption"]],[["colgroup"],["col"]],"*"],Dk=["caption","colgroup, col","*"];function wk(t,i){t&1&&de(0,2)}function Mk(t,i){t&1&&(c(0,"thead",0),un(1,1),d(),c(2,"tbody",2),un(3,3)(4,4),d(),c(5,"tfoot",0),un(6,5),d())}function xk(t,i){t&1&&un(0,1)(1,3)(2,4)(3,5)}var _n=(()=>{class t extends G_{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(n,r){n&2&&V("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[Ae([{provide:G_,useExisting:t},{provide:nr,useExisting:t},{provide:bd,useValue:null}]),ve],ngContentSelectors:Dk,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(n,r){n&1&&(Be(Sk),de(0),de(1,1),T(2,wk,1,0),T(3,Mk,7,0)(4,xk,4,0)),n&2&&(p(2),I(r._isServer?2:-1),p(),I(r._isNativeHtmlTable?3:4))},dependencies:[V_,B_,j_,$_],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return t})(),bn=(()=>{class t extends ip{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matCellDef",""]],features:[Ae([{provide:ip,useExisting:t}]),ve]})}return t})(),vn=(()=>{class t extends rp{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matHeaderCellDef",""]],features:[Ae([{provide:rp,useExisting:t}]),ve]})}return t})();var yn=(()=>{class t extends ua{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[Ae([{provide:ua,useExisting:t}]),ve]})}return t})(),Cn=(()=>{class t extends SS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ve]})}return t})();var Sn=(()=>{class t extends DS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ve]})}return t})();var Dn=(()=>{class t extends vd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",$]},features:[Ae([{provide:vd,useExisting:t}]),ve]})}return t})();var wn=(()=>{class t extends ap{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[Ae([{provide:ap,useExisting:t}]),ve]})}return t})(),Mn=(()=>{class t extends P_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[Ae([{provide:P_,useExisting:t}]),ve],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,r){n&1&&un(0,0)},dependencies:[Ha],encapsulation:2,changeDetection:1})}return t})();var xn=(()=>{class t extends L_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[Ae([{provide:L_,useExisting:t}]),ve],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,r){n&1&&un(0,0)},dependencies:[Ha],encapsulation:2,changeDetection:1})}return t})();var An=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[MS,we]})}return t})(),Ak=9007199254740991,zi=class extends md{_data;_renderData=new wt([]);_filter=new wt("");_internalPageChanges=new F;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(i){i=Array.isArray(i)?i:[],this._data.next(i),this._renderChangesSubscription||this._filterData(i)}get filter(){return this._filter.value}set filter(i){this._filter.next(i),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(i){this._sort=i,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(i){this._paginator=i,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(i,e)=>{let n=i[e];if(bm(n)){let r=Number(n);return r<Ak?r:n}return n};sortData=(i,e)=>{let n=e.active,r=e.direction;return!n||r==""?i:i.sort((a,o)=>{let l=this.sortingDataAccessor(a,n),u=this.sortingDataAccessor(o,n),f=typeof l,g=typeof u;f!==g&&(f==="number"&&(l+=""),g==="number"&&(u+=""));let v=0;return l!=null&&u!=null?l>u?v=1:l<u&&(v=-1):l!=null?v=1:u!=null&&(v=-1),v*(r=="asc"?1:-1)})};filterPredicate=(i,e)=>{let n=e.trim().toLowerCase();return Object.values(i).some(r=>`${r}`.toLowerCase().includes(n))};constructor(i=[]){super(),this._data=new wt(i),this._updateChangeSubscription()}_updateChangeSubscription(){let i=this._sort?qe(this._sort.sortChange,this._sort.initialized):E(null),e=this._paginator?qe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):E(null),n=this._data,r=jn([n,this._filter]).pipe(R(([l])=>this._filterData(l))),a=jn([r,i]).pipe(R(([l])=>this._orderData(l))),o=jn([a,e]).pipe(R(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=o.subscribe(l=>this._renderData.next(l))}_filterData(i){return this.filteredData=this.filter==null||this.filter===""?i:i.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(i){return this.sort?this.sortData(i.slice(),this.sort):i}_pageData(i){if(!this.paginator)return i;let e=this.paginator.pageIndex*this.paginator.pageSize;return i.slice(e,e+this.paginator.pageSize)}_updatePaginator(i){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=i,e.pageIndex>0)){let n=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,n);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Ek=["determinateSpinner"];function Rk(t,i){if(t&1&&(Gn(),c(0,"svg",11),A(1,"circle",12),d()),t&2){let e=N();le("viewBox",e._viewBox()),p(),Di("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),le("r",e._circleRadius())}}var kk=new S("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:xS})}),xS=100,Tk=10,Vt=(()=>{class t{_elementRef=s(U);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(kk),n=Ug(),r=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=xS;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Tk)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,r){if(n&1&&Ke(Ek,5),n&2){let a;H(a=W())&&(r._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,r){n&2&&(le("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Ct("mat-"+r.color),Di("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),V("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",zn],diameter:[2,"diameter","diameter",zn],strokeWidth:[2,"strokeWidth","strokeWidth",zn]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,r){if(n&1&&(j(0,Rk,2,8,"ng-template",null,0,Cu),c(2,"div",2,1),Gn(),c(4,"svg",3),A(5,"circle",4),d()(),lc(),c(6,"div",5)(7,"div",6)(8,"div",7),un(9,8),d(),c(10,"div",9),un(11,8),d(),c(12,"div",10),un(13,8),d()()()),n&2){let a=yt(1);p(4),le("viewBox",r._viewBox()),p(),Di("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),le("r",r._circleRadius()),p(4),w("ngTemplateOutlet",a),p(2),w("ngTemplateOutlet",a),p(2),w("ngTemplateOutlet",a)}},dependencies:[bc],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return t})();var $t=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();function Ik(t,i){}var ma=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var U_=(()=>{class t extends la{_elementRef=s(U);_focusTrapFactory=s(wm);_config;_interactivityChecker=s(Dm);_ngZone=s(re);_focusMonitor=s(Wn);_renderer=s(Ye);_changeDetectorRef=s(Ee);_injector=s(se);_platform=s(Re);_document=s(ue);_portalOutlet;_focusTrapped=new F;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(ma,{optional:!0})||new ma,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_trapFocus(e){this._isDestroyed||Je(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let r=$i(),a=this._elementRef.nativeElement;(!r||r===this._document.body||r===a||a.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=$i();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=$i()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,r){if(n&1&&Ke(vi,7),n&2){let a;H(a=W())&&(r._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,r){n&2&&le("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ve],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,r){n&1&&j(0,Ik,0,0,"ng-template",0)},dependencies:[vi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return t})(),Wa=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new F;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!at(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},Nk=new S("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>da(t)}}),Fk=new S("DialogData"),Ok=new S("DefaultDialogConfig");function Pk(t){let i=be(t),e=new B;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var H_=(()=>{class t{_injector=s(se);_defaultOptions=s(Ok,{optional:!0});_parentDialog=s(t,{optional:!0,skipSelf:!0});_overlayContainer=s(Zm);_idGenerator=s(Xe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F;_afterOpenedAtThisLevel=new F;_ariaHiddenElements=new Map;_scrollStrategy=s(Nk);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(st(void 0)));open(e,n){let r=this._defaultOptions||new ma;n=h(h({},r),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let a=this._getOverlayConfig(n),o=ai(this._injector,a),l=new Wa(o,n),u=this._attachContainer(o,l,n);if(l.containerInstance=u,!this.openDialogs.length){let f=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(Le(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(f)}):this._hideNonDialogContentFromAssistiveTechnology(f)}return this._attachDialogContent(e,l,u,n),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){z_(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){z_(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),z_(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new ii({positionStrategy:e.positionStrategy||yr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,r){let a=r.injector||r.viewContainerRef?.injector,o=[{provide:ma,useValue:r},{provide:Wa,useValue:n},{provide:jo,useValue:e}],l;r.container?typeof r.container=="function"?l=r.container:(l=r.container.type,o.push(...r.container.providers(r))):l=U_;let u=new bi(l,r.viewContainerRef,se.create({parent:a||this._injector,providers:o}));return e.attach(u).instance}_attachDialogContent(e,n,r,a){if(e instanceof Mt){let o=this._createInjector(a,n,r,void 0),l={$implicit:a.data,dialogRef:n};a.templateContext&&(l=h(h({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),r.attachTemplatePortal(new Bn(e,null,l,o))}else{let o=this._createInjector(a,n,r,this._injector),l=r.attachComponentPortal(new bi(e,a.viewContainerRef,o,null,a.bindings));n.componentRef=l,n.componentInstance=l.instance}}_createInjector(e,n,r,a){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:Fk,useValue:e.data},{provide:Wa,useValue:n}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(n,e,r)):l.push(...e.providers)),e.direction&&(!o||!o.get(mt,null,{optional:!0}))&&l.push({provide:mt,useValue:Pk(e.direction)}),se.create({parent:o||a,providers:l})}_removeOpenDialog(e,n){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute("aria-hidden",a):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let r=n.length-1;r>-1;r--){let a=n[r];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();function z_(t,i){let e=t.length;for(;e--;)i(t[e])}var AS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[H_],imports:[Vn,Qi,jr,Qi]})}return t})();function Lk(t,i){}var sp=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},W_="mdc-dialog--open",ES="mdc-dialog--opening",RS="mdc-dialog--closing",Bk=150,Vk=75,$k=(()=>{class t extends U_{_animationStateChanged=new B;_animationsEnabled=!He();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?TS(this._config.enterAnimationDuration)??Bk:0;_exitAnimationDuration=this._animationsEnabled?TS(this._config.exitAnimationDuration)??Vk:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(kS,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ES,W_)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(W_),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(W_),this._animationsEnabled?(this._hostElement.style.setProperty(kS,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(RS)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ES,RS)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,r){n&2&&(Et("id",r._config.id),le("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),V("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ve],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(c(0,"div",0)(1,"div",1),j(2,Lk,0,0,"ng-template",2),d()())},dependencies:[vi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return t})(),kS="--mat-dialog-transition-duration";function TS(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Xi(t.substring(0,t.length-2)):t.endsWith("s")?Xi(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var op=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(op||{}),jt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new va(1);_beforeClosed=new va(1);_result;_closeFallbackTimeout;_state=op.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(xe(r=>r.state==="opened"),Le(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(xe(r=>r.state==="closed"),Le(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),qe(this.backdropClick(),this.keydownEvents().pipe(xe(r=>r.keyCode===27&&!this.disableClose&&!at(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),jk(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(xe(n=>n.state==="closing"),Le(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=op.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=op.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function jk(t,i,e){return t._closeInteractionType=i,t.close(e)}var $n=new S("MatMdcDialogData"),Gk=new S("mat-mdc-dialog-default-options"),zk=new S("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>da(t)}}),En=(()=>{class t{_defaultOptions=s(Gk,{optional:!0});_scrollStrategy=s(zk);_parentDialog=s(t,{optional:!0,skipSelf:!0});_idGenerator=s(Xe);_injector=s(se);_dialog=s(H_);_animationsDisabled=He();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F;_afterOpenedAtThisLevel=new F;dialogConfigClass=sp;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(st(void 0)));constructor(){this._dialogRefConstructor=jt,this._dialogContainerType=$k,this._dialogDataToken=$n}open(e,n){let r;n=h(h({},this._defaultOptions||new sp),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,_(h({},n),{positionStrategy:yr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:ma,useValue:n}]},templateContext:()=>({dialogRef:r}),providers:(o,l,u)=>(r=new this._dialogRefConstructor(o,n,u),r.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:r},{provide:Wa,useValue:null}])}));return r.componentRef=a.componentRef,r.componentInstance=a.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(r);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var IS=(()=>{class t{_dialogRef=s(jt,{optional:!0});_elementRef=s(U);_dialog=s(En);ngOnInit(){this._dialogRef||(this._dialogRef=Uk(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t})}return t})(),Yn=(()=>{class t extends IS{id=s(Xe).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,r){n&2&&Et("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[ve]})}return t})(),Kn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[wv([hd])]})}return t})(),Xn=(()=>{class t extends IS{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,r){n&2&&V("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[ve]})}return t})();function Uk(t,i){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(n=>n.id===e.id):null}var nt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[En],imports:[AS,Vn,Qi,we]})}return t})();function Hk(t,i){if(t&1){let e=Te();c(0,"div",1)(1,"button",2),D("click",function(){ae(e);let r=N();return oe(r.action())}),m(2),d()()}if(t&2){let e=N();p(2),ge(" ",e.data.action," ")}}var Wk=["label"];function qk(t,i){}var Yk=Math.pow(2,31)-1,Cd=class{_overlayRef;instance;containerInstance;_afterDismissed=new F;_afterOpened=new F;_onAction=new F;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Yk))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},NS=new S("MatSnackBarData"),qo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Kk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),Xk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Zk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),FS=(()=>{class t{snackBarRef=s(Cd);data=s(NS);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(c(0,"div",0),m(1),d(),T(2,Hk,3,1,"div",1)),n&2&&(p(),ge(" ",r.data.message,`
`),p(),I(r.hasAction?2:-1))},dependencies:[Ve,Kk,Xk,Zk],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return t})(),q_="_mat-snack-bar-enter",Y_="_mat-snack-bar-exit",Qk=(()=>{class t extends la{_ngZone=s(re);_elementRef=s(U);_changeDetectorRef=s(Ee);_platform=s(Re);_animationsDisabled=He();snackBarConfig=s(qo);_document=s(ue);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(se);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new F;_onExit=new F;_onEnter=new F;_animationState="void";_live;_label;_role;_liveElementId=s(Xe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Y_?this._completeExit():e===q_&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(q_)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(q_)},200)))}exit(){return this._destroyed?E(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Y_)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Y_),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(o=>e.classList.add(o)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let a=n[r],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(a=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&Ke(vi,7)(Wk,7),n&2){let a;H(a=W())&&(r._portalOutlet=a.first),H(a=W())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&D("animationend",function(o){return r.onAnimationEnd(o.animationName)})("animationcancel",function(o){return r.onAnimationEnd(o.animationName)}),n&2&&V("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ve],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3),j(4,qk,0,0,"ng-template",4),d(),A(5,"div"),d()()),n&2&&(p(5),le("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[vi],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return t})(),Jk=new S("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new qo}),nn=(()=>{class t{_live=s(Zc);_injector=s(se);_breakpointObserver=s(Oa);_parentSnackBar=s(t,{optional:!0,skipSelf:!0});_defaultConfig=s(Jk);_animationsDisabled=He();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=FS;snackBarContainerComponent=Qk;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let a=h(h({},this._defaultConfig),r);return a.data={message:e,action:n},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,a=se.create({parent:r||this._injector,providers:[{provide:qo,useValue:n}]}),o=new bi(this.snackBarContainerComponent,n.viewContainerRef,a),l=e.attach(o);return l.instance.snackBarConfig=n,l.instance}_attach(e,n){let r=h(h(h({},new qo),this._defaultConfig),n),a=this._createOverlay(r),o=this._attachSnackBarContainer(a,r),l=new Cd(o,a);if(e instanceof Mt){let u=new Bn(e,null,{$implicit:r.data,snackBarRef:l});l.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(r,l),f=new bi(e,void 0,u),g=o.attachComponentPortal(f);l.instance=g.instance}return this._breakpointObserver.observe(_m.HandsetPortrait).pipe(x(a.detachments())).subscribe(u=>{a.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(l,r),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new ii;n.direction=e.direction;let r=yr(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,l=!o&&e.horizontalPosition!=="center";return o?r.left("0"):l?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,ai(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se.create({parent:r||this._injector,providers:[{provide:Cd,useValue:n},{provide:NS,useValue:e.data}]})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[nn],imports:[Vn,Qi,Pe,FS,we]})}return t})();var eT=["*"];var tT=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],nT=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],iT=new S("MAT_CARD_CONFIG"),Gt=(()=>{class t{appearance;constructor(){let e=s(iT,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&V("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:eT,decls:1,vars:0,template:function(n,r){n&1&&(Be(),de(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),OS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var Ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:nT,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(Be(tT),de(0),et(1,"div",0),de(2,1),tt(),de(3,2))},encapsulation:2})}return t})();var Wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var rT=["*",[["","matSortHeaderIcon",""]]],aT=["*","[matSortHeaderIcon]"];function oT(t,i){t&1&&(Gn(),et(0,"svg",3),mi(1,"path",4),tt())}function sT(t,i){t&1&&(et(0,"div",2),de(1,1,null,oT,2,0),tt())}var PS=new S("MAT_SORT_DEFAULT_OPTIONS"),Dt=(()=>{class t{_defaultOptions;_initializedStream=new va(1);sortables=new Map;_stateChanges=new F;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new B;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let n=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=lT(e.start||this.start,n),a=r.indexOf(this.direction)+1;return a>=r.length&&(a=0),r[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(n){return new(n||t)(We(PS,8))};static \u0275dir=P({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",$],disabled:[2,"matSortDisabled","disabled",$]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Ue]})}return t})();function lT(t,i){let e=["asc","desc"];return t=="desc"&&e.reverse(),i||e.push(""),e}var Mr=(()=>{class t{_sort=s(Dt,{optional:!0});_columnDef=s(ua,{optional:!0});_changeDetectorRef=s(Ee);_focusMonitor=s(Wn);_elementRef=s(U);_ariaDescriber=s(ed,{optional:!0});_renderChanges;_animationsDisabled=He();_recentlyCleared=be(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(ut).load(_i);let e=s(PS,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=qe(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),n=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?n:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(n,r){n&1&&D("click",function(){return r._toggleOnInteraction()})("keydown",function(o){return r._handleKeydown(o)})("mouseleave",function(){return r._recentlyCleared.set(null)}),n&2&&(le("aria-sort",r._getAriaSortAttribute()),V("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",$],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",$]},exportAs:["matSortHeader"],ngContentSelectors:aT,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(n,r){n&1&&(Be(rT),et(0,"div",0)(1,"div",1),de(2),tt(),T(3,sT,3,0,"div",2),tt()),n&2&&(V("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-descending",r._sort.direction==="desc")("mat-sort-header-ascending",r._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",r._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",r._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",r._animationsDisabled),le("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),p(3),I(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return t})(),xr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var oi=b("[Race] Load Races"),lp=b("[Race] Load Races Success",y()),cp=b("[Race] Load Races Failure",y()),Yo=b("[Race] Create Race",y()),Ko=b("[Race] Create Race Success",y()),Xo=b("[Race] Create Race Failure",y()),Zo=b("[Race] Update Race",y()),Qo=b("[Race] Update Race Success",y()),Jo=b("[Race] Update Race Failure",y()),es=b("[Race] Delete Race",y()),ts=b("[Race] Delete Race Success",y()),ns=b("[Race] Delete Race Failure",y()),Ar=b("[Race] Select Race",y());var dp=fn("race"),si=he(dp,t=>t.races),LS=he(dp,t=>t.loading),F9=he(dp,t=>t.error);var li=he(dp,t=>t.selectedRaceId),O9=he(si,li,(t,i)=>i?t.find(e=>e.id===i):null);var WS=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(We(Ye),We(U))};static \u0275dir=P({type:t})}return t})(),qS=(()=>{class t extends WS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,features:[ve]})}return t})(),Rr=new S("");var cT={provide:Rr,useExisting:cn(()=>qt),multi:!0};function dT(){let t=Oi()?Oi().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var uT=new S(""),qt=(()=>{class t extends WS{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!dT())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(We(Ye),We(U),We(uT,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&D("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[Ae([cT]),ve]})}return t})();function eb(t){return t==null||tb(t)===0}function tb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ir=new S(""),yp=new S(""),mT=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fe=class{static min(i){return YS(i)}static max(i){return KS(i)}static required(i){return XS(i)}static requiredTrue(i){return pT(i)}static email(i){return hT(i)}static minLength(i){return fT(i)}static maxLength(i){return gT(i)}static pattern(i){return _T(i)}static nullValidator(i){return mp()}static compose(i){return nD(i)}static composeAsync(i){return iD(i)}};function YS(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function KS(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function XS(t){return eb(t.value)?{required:!0}:null}function pT(t){return t.value===!0?null:{required:!0}}function hT(t){return eb(t.value)||mT.test(t.value)?null:{email:!0}}function fT(t){return i=>{let e=i.value?.length??tb(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function gT(t){return i=>{let e=i.value?.length??tb(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function _T(t){if(!t)return mp;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(eb(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function mp(t){return null}function ZS(t){return t!=null}function QS(t){return Aa(t)?ui(t):t}function JS(t){let i={};return t.forEach(e=>{i=e!=null?h(h({},i),e):i}),Object.keys(i).length===0?null:i}function eD(t,i){return i.map(e=>e(t))}function bT(t){return!t.validate}function tD(t){return t.map(i=>bT(i)?i:e=>i.validate(e))}function nD(t){if(!t)return null;let i=t.filter(ZS);return i.length==0?null:function(e){return JS(eD(e,i))}}function nb(t){return t!=null?nD(tD(t)):null}function iD(t){if(!t)return null;let i=t.filter(ZS);return i.length==0?null:function(e){let n=eD(e,i).map(QS);return mu(n).pipe(R(JS))}}function ib(t){return t!=null?iD(tD(t)):null}function BS(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function rD(t){return t._rawValidators}function aD(t){return t._rawAsyncValidators}function K_(t){return t?Array.isArray(t)?t:[t]:[]}function pp(t,i){return Array.isArray(t)?t.includes(i):t===i}function VS(t,i){let e=K_(i);return K_(t).forEach(r=>{pp(e,r)||e.push(r)}),e}function $S(t,i){return K_(i).filter(e=>!pp(t,e))}var hp=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=nb(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ib(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Er=class extends hp{name;get formDirective(){return null}get path(){return null}};var Dd="VALID",up="INVALID",is="PENDING",wd="DISABLED",ha=class{},fp=class extends ha{value;source;constructor(i,e){super(),this.value=i,this.source=e}},xd=class extends ha{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Ad=class extends ha{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},rs=class extends ha{status;source;constructor(i,e){super(),this.status=i,this.source=e}},gp=class extends ha{source;constructor(i){super(),this.source=i}},Ka=class extends ha{source;constructor(i){super(),this.source=i}};function rb(t){return(Cp(t)?t.validators:t)||null}function vT(t){return Array.isArray(t)?nb(t):t||null}function ab(t,i){return(Cp(i)?i.asyncValidators:t)||null}function yT(t){return Array.isArray(t)?ib(t):t||null}function Cp(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function oD(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new _e(1e3,"");if(!lD(n,e))throw new _e(1001,"")}function sD(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new _e(-1002,"")})}var as=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=be(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return it(this.statusReactive)}set status(i){it(()=>this.statusReactive.set(i))}_status=Jt(()=>this.statusReactive());statusReactive=be(void 0);get valid(){return this.status===Dd}get invalid(){return this.status===up}get pending(){return this.status===is}get disabled(){return this.status===wd}get enabled(){return this.status!==wd}errors;get pristine(){return it(this.pristineReactive)}set pristine(i){it(()=>this.pristineReactive.set(i))}_pristine=Jt(()=>this.pristineReactive());pristineReactive=be(!0);get dirty(){return!this.pristine}get touched(){return it(this.touchedReactive)}set touched(i){it(()=>this.touchedReactive.set(i))}_touched=Jt(()=>this.touchedReactive());touchedReactive=be(!1);get untouched(){return!this.touched}_events=new F;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(VS(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(VS(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators($S(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators($S(i,this._rawAsyncValidators))}hasValidator(i){return pp(this._rawValidators,i)}hasAsyncValidator(i){return pp(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(_(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Ad(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Ad(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(_(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new xd(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new xd(!0,n))}markAsPending(i={}){this.status=is;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new rs(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(_(h({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=wd,this.errors=null,this._forEachChild(r=>{r.disable(_(h({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new fp(this.value,n)),this._events.next(new rs(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Dd,this._forEachChild(n=>{n.enable(_(h({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(_(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dd||this.status===is)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new fp(this.value,e)),this._events.next(new rs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(_(h({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?wd:Dd}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=is,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=QS(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new rs(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?wd:this.errors?up:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(is)?is:this._anyControlsHaveStatus(up)?up:Dd}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new xd(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ad(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Cp(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=vT(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=yT(this._rawAsyncValidators)}_updateHasRequiredValidator(){it(()=>this._hasRequired.set(this.hasValidator(fe.required)))}};function lD(t,i){return Object.hasOwn(t,i)}function CT(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function ST(t,i,e,n){switch(e){case"name":t.setAttribute(i,e,n);break;case"disabled":case"readonly":case"required":n?t.setAttribute(i,e,""):t.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?t.setAttribute(i,e,n.toString()):t.removeAttribute(i,e);break}}var X_=class{kind;context;control;message;constructor({kind:i,context:e,control:n}){this.kind=i,this.context=e,this.control=n}};function cD(t){return typeof t=="number"?t:parseFloat(t)}var ob=(()=>{class t{_validator=mp;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):mp,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,features:[Ue]})}return t})(),DT={provide:ir,useExisting:cn(()=>Wr),multi:!0},Wr=(()=>{class t extends ob{max;inputName="max";normalizeInput=e=>cD(e);createValidator=e=>KS(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&le("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[Ae([DT]),ve]})}return t})(),wT={provide:ir,useExisting:cn(()=>rr),multi:!0},rr=(()=>{class t extends ob{min;inputName="min";normalizeInput=e=>cD(e);createValidator=e=>YS(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&le("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[Ae([wT]),ve]})}return t})(),MT={provide:ir,useExisting:cn(()=>Yt),multi:!0};var Yt=(()=>{class t extends ob{required;inputName="required";normalizeInput=$;createValidator=e=>XS;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&le("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Ae([MT]),ve]})}return t})();var xT=new S(""),Rd=new S("",{factory:()=>Sp}),Sp="always";function dD(t,i){return[...i.path,t]}function Z_(t,i,e=Sp){sb(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),ET(t,i),kT(t,i),RT(t,i),AT(t,i)}function jS(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),bp(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function _p(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function AT(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function sb(t,i){let e=rD(t);i.validator!==null?t.setValidators(BS(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=aD(t);i.asyncValidator!==null?t.setAsyncValidators(BS(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();_p(i._rawValidators,r),_p(i._rawAsyncValidators,r)}function bp(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=rD(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.validator);a.length!==r.length&&(e=!0,t.setValidators(a))}}if(i.asyncValidator!==null){let r=aD(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.asyncValidator);a.length!==r.length&&(e=!0,t.setAsyncValidators(a))}}}let n=()=>{};return _p(i._rawValidators,n),_p(i._rawAsyncValidators,n),e}function ET(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&uD(t,i)})}function RT(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&uD(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function uD(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function kT(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function mD(t,i){t==null,sb(t,i)}function TT(t,i){return bp(t,i)}function pD(t,i){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function IT(t){return Object.getPrototypeOf(t.constructor)===qS}function hD(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function NT(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(a=>{a.constructor===qt?e=a:IT(a)?n=a:r=a}),r||n||e||null}function FT(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var fD={provide:xT,useFactory:()=>{let t=s(Ri,{self:!0});return{setParseErrors:i=>{t.setParseErrorSource(i)},set onReset(i){t.onReset=i}}}},Ri=class extends hp{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ka&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=NT(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,n){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(Si)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Ee);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Fe,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof Ka&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=CT(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Yt))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,i.setCustomControlModelInput(n.value)),this.bindControlProperty(i,r,"touched",n.touched),this.bindControlProperty(i,r,"dirty",n.dirty),this.bindControlProperty(i,r,"valid",n.valid),this.bindControlProperty(i,r,"invalid",n.invalid),this.bindControlProperty(i,r,"pending",n.pending),this.bindControlProperty(i,r,"disabled",n.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let a=n.errors;if(r.errors!==a){r.errors=a;let o=this._convertErrors(a);i.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,n,r){if(e[n]===r)return;e[n]=r;let a=i.setInputOnDirectives(n,r);this.isNativeFormElement&&!a&&(n==="disabled"||n==="required")&&this.renderer&&ST(this.renderer,i.nativeElement,n,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([n,r])=>new X_({context:r,kind:n,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,n=Jt(()=>{let r=i();return r.length===0?null:r.reduce((a,o)=>(a[o.kind]=o,a),{})});this.parseErrorsValidator=(()=>e).bind(this),bt(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},vp=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Kt=(()=>{class t extends vp{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(We(Ri,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ve]})}return t})(),kn=(()=>{class t extends vp{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(We(Er,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ve]})}return t})(),os=class extends as{constructor(i,e,n){super(rb(e),ab(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let n=this._find(i);return n||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let n=this._find(i);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){it(()=>{sD(this,!0,i),Object.keys(i).forEach(n=>{oD(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this._find(n);r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,_(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ka(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,a)=>{n=e(n,r,a)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return lD(this.controls,i)?this.controls[i]:null}};var Q_=class extends os{};var OT={provide:Er,useExisting:cn(()=>ss)},Md=Promise.resolve(),ss=(()=>{class t extends Er{callSetDisabledState;get submitted(){return it(this.submittedReactive)}_submitted=Jt(()=>this.submittedReactive());submittedReactive=be(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new os({},nb(e),ib(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Md.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Md.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Md.then(()=>{let n=this._findContainer(e.path),r=new os({});mD(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Md.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Md.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),hD(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new gp(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(We(ir,10),We(yp,10),We(Rd,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&D("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([OT]),ve]})}return t})();function GS(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function zS(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ed=class extends as{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(rb(e),ab(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Cp(e)&&(e.nonNullable||e.initialValueIsDefault)&&(zS(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){it(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ka(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){GS(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){GS(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){zS(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var PT=t=>t instanceof Ed;var LT=(()=>{class t extends Er{callSetDisabledState;get submitted(){return it(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Jt(()=>this._submittedReactive());_submittedReactive=be(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(bp(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){jS(e.control||null,e,!1),FT(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,hD(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new gp(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(jS(n||null,e),PT(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);mD(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&TT(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){sb(this.form,this),this._oldForm&&bp(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(We(ir,10),We(yp,10),We(Rd,8))};static \u0275dir=P({type:t,features:[ve,Ue]})}return t})(),BT={provide:Er,useExisting:cn(()=>At)},At=(()=>{class t extends LT{form=null;ngSubmit=new B;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&D("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([BT]),ve]})}return t})(),VT={provide:Ri,useExisting:cn(()=>lb)},US=Promise.resolve(),lb=(()=>{class t extends Ri{_changeDetectorRef;callSetDisabledState;control=new Ed;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new B;constructor(e,n,r,a,o,l,u,f){super(u,f,a),this._changeDetectorRef=o,this.callSetDisabledState=l,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),pD(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Z_(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Z_(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){US.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&$(n);US.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?dD(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(We(Er,9),We(ir,10),We(yp,10),We(Rr,10),We(Ee,8),We(Rd,8),We(se,8),We(Ye,8))};static \u0275dir=P({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ae([VT,fD]),ve,Ue,Bf(null)]})}return t})();var Tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),$T={provide:Rr,useExisting:cn(()=>ar),multi:!0},ar=(()=>{class t extends qS{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(n,r){n&1&&D("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[Ae([$T]),ve]})}return t})();var J_=class extends as{constructor(i,e,n){super(rb(e),ab(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){it(()=>{sD(this,!1,i),i.forEach((n,r)=>{oD(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],_(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ka(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var gD=new S("");var jT={provide:Ri,useExisting:cn(()=>rn)},rn=(()=>{class t extends Ri{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new B;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,a,o,l,u){super(u,l,a),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_setupWithForm(e,n){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Z_(e,this,n))}ngOnChanges(e){this._added||this._setUpControl(),pD(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return dD(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(n){return new(n||t)(We(Er,13),We(ir,10),We(yp,10),We(Rr,10),We(gD,8),We(Ye,8),We(se,8))};static \u0275dir=P({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ae([jT,fD]),ve,Ue,Bf(null)]})}return t})();var _D=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})();function HS(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var In=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),a={};return HS(n)?a=n:n!==null&&(a.validators=n.validator,a.asyncValidators=n.asyncValidator),new os(r,a)}record(e,n=null){let r=this._reduceControls(e);return new Q_(r,n)}control(e,n,r){let a={};return this.useNonNullable?(HS(n)?a=n:(a.validators=n,a.asyncValidators=r),new Ed(e,_(h({},a),{nonNullable:!0}))):new Ed(e,n,r)}array(e,n,r){let a=e.map(o=>this._createControl(o));return new J_(a,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Ed)return e;if(e instanceof as)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(n,r,a)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var bD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Rd,useValue:e.callSetDisabledState??Sp}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[_D]})}return t})(),Nn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:gD,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Rd,useValue:e.callSetDisabledState??Sp}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[_D]})}return t})();var GT=["notch"],zT=["*"],vD=["iconPrefixContainer"],yD=["textPrefixContainer"],CD=["iconSuffixContainer"],SD=["textSuffixContainer"],UT=["textField"],HT=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],WT=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function qT(t,i){t&1&&A(0,"span",21)}function YT(t,i){if(t&1&&(c(0,"label",20),de(1,1),T(2,qT,1,0,"span",21),d()),t&2){let e=N(2);w("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),le("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),I(!e.hideRequiredMarker&&e._control.required?2:-1)}}function KT(t,i){if(t&1&&T(0,YT,3,5,"label",20),t&2){let e=N();I(e._hasFloatingLabel()?0:-1)}}function XT(t,i){t&1&&A(0,"div",7)}function ZT(t,i){}function QT(t,i){if(t&1&&j(0,ZT,0,0,"ng-template",13),t&2){N(2);let e=yt(1);w("ngTemplateOutlet",e)}}function JT(t,i){if(t&1&&(c(0,"div",9),T(1,QT,1,1,null,13),d()),t&2){let e=N();w("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),I(e._forceDisplayInfixLabel()?-1:1)}}function eI(t,i){t&1&&(c(0,"div",10,2),de(2,2),d())}function tI(t,i){t&1&&(c(0,"div",11,3),de(2,3),d())}function nI(t,i){}function iI(t,i){if(t&1&&j(0,nI,0,0,"ng-template",13),t&2){N();let e=yt(1);w("ngTemplateOutlet",e)}}function rI(t,i){t&1&&(c(0,"div",14,4),de(2,4),d())}function aI(t,i){t&1&&(c(0,"div",15,5),de(2,5),d())}function oI(t,i){t&1&&A(0,"div",16)}function sI(t,i){t&1&&(c(0,"div",18),de(1,6),d())}function lI(t,i){if(t&1&&(c(0,"mat-hint",22),m(1),d()),t&2){let e=N(2);w("id",e._hintLabelId),p(),ce(e.hintLabel)}}function cI(t,i){if(t&1&&(c(0,"div",19),T(1,lI,2,2,"mat-hint",22),de(2,7),A(3,"div",23),de(4,8),d()),t&2){let e=N();p(),I(e.hintLabel?1:-1)}}var pt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),RD=new S("MatError"),an=(()=>{class t{id=s(Xe).getId("mat-mdc-error-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&Et("id",r.id)},inputs:{id:"id"},features:[Ae([{provide:RD,useExisting:t}])]})}return t})(),ci=(()=>{class t{align="start";id=s(Xe).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Et("id",r.id),le("align",null),V("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),kD=new S("MatPrefix"),cb=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Ae([{provide:kD,useExisting:t}])]})}return t})(),TD=new S("MatSuffix"),kd=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ae([{provide:TD,useExisting:t}])]})}return t})(),ID=new S("FloatingLabelParent"),DD=(()=>{class t{_elementRef=s(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(zm);_ngZone=s(re);_parent=s(ID);_resizeSubscription=new Fe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return dI(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&V("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function dI(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var wD="mdc-line-ripple--active",Dp="mdc-line-ripple--deactivating",MD=(()=>{class t{_elementRef=s(U);_cleanupTransitionEnd;constructor(){let e=s(re),n=s(Ye);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Dp),e.add(wD)}deactivate(){this._elementRef.nativeElement.classList.add(Dp)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Dp);e.propertyName==="opacity"&&r&&n.remove(wD,Dp)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),xD=(()=>{class t{_elementRef=s(U);_ngZone=s(re);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Ke(GT,5),n&2){let a;H(a=W())&&(r._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&V("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:zT,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(Be(),mi(0,"div",1),et(1,"div",2,0),de(3),tt(),mi(4,"div",3))},encapsulation:2})}return t})(),ls=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t})}return t})();var qr=new S("MatFormField"),uI=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),AD="fill",mI="auto",ED="fixed",pI="translateY(-50%)",ft=(()=>{class t{_elementRef=s(U);_changeDetectorRef=s(Ee);_platform=s(Re);_idGenerator=s(Xe);_ngZone=s(re);_defaults=s(uI,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ln("iconPrefixContainer");_textPrefixContainerSignal=Ln("textPrefixContainer");_iconSuffixContainerSignal=Ln("iconSuffixContainer");_textSuffixContainerSignal=Ln("textSuffixContainer");_prefixSuffixContainers=Jt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Iv(pt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ji(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||mI}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||AD;this._appearanceSignal.set(n)}_appearanceSignal=be(AD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ED}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ED}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new F;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=He();constructor(){let e=this._defaults,n=s(mt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Jt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(st([void 0,void 0]),R(()=>[n.errorState,n.userAriaDescribedBy]),Nf(),xe(([[a,o],[l,u]])=>a!==l||o!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(x(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),qe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){zf({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Jt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let n=this._control.describedByIds,r;if(n){let a=this._describedByIds||e;r=e.concat(n.filter(o=>o&&!a.includes(o)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=n?.getBoundingClientRect().width??0,u=r?.getBoundingClientRect().width??0,f=a?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",v=`${o+l}px`,G=`calc(${g} * (${v} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,q=`var(--mat-mdc-form-field-label-transform, ${pI} translateX(${G}))`,ee=o+l+u+f;return[q,ee]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,a){if(n&1&&(Av(a,r._labelChild,pt,5),Qt(a,ls,5)(a,kD,5)(a,TD,5)(a,RD,5)(a,ci,5)),n&2){ei();let o;H(o=W())&&(r._formFieldControl=o.first),H(o=W())&&(r._prefixChildren=o),H(o=W())&&(r._suffixChildren=o),H(o=W())&&(r._errorChildren=o),H(o=W())&&(r._hintChildren=o)}},viewQuery:function(n,r){if(n&1&&(pi(r._iconPrefixContainerSignal,vD,5)(r._textPrefixContainerSignal,yD,5)(r._iconSuffixContainerSignal,CD,5)(r._textSuffixContainerSignal,SD,5),Ke(UT,5)(vD,5)(yD,5)(CD,5)(SD,5)(DD,5)(xD,5)(MD,5)),n&2){ei(4);let a;H(a=W())&&(r._textField=a.first),H(a=W())&&(r._iconPrefixContainer=a.first),H(a=W())&&(r._textPrefixContainer=a.first),H(a=W())&&(r._iconSuffixContainer=a.first),H(a=W())&&(r._textSuffixContainer=a.first),H(a=W())&&(r._floatingLabel=a.first),H(a=W())&&(r._notchedOutline=a.first),H(a=W())&&(r._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&V("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ae([{provide:qr,useExisting:t},{provide:ID,useExisting:t}])],ngContentSelectors:WT,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(Be(HT),j(0,KT,1,1,"ng-template",null,0,Cu),c(2,"div",6,1),D("click",function(o){return r._control.onContainerClick(o)}),T(4,XT,1,0,"div",7),c(5,"div",8),T(6,JT,2,2,"div",9),T(7,eI,3,0,"div",10),T(8,tI,3,0,"div",11),c(9,"div",12),T(10,iI,1,1,null,13),de(11),d(),T(12,rI,3,0,"div",14),T(13,aI,3,0,"div",15),d(),T(14,oI,1,0,"div",16),d(),c(15,"div",17),T(16,sI,2,0,"div",18)(17,cI,5,1,"div",19),d()),n&2){let a;p(2),V("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),I(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),I(r._hasOutline()?6:-1),p(),I(r._hasIconPrefix?7:-1),p(),I(r._hasTextPrefix?8:-1),p(2),I(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),I(r._hasTextSuffix?12:-1),p(),I(r._hasIconSuffix?13:-1),p(),I(r._hasOutline()?-1:14),p(),V("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let o=r._getSubscriptMessageType();p(),I((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[DD,xD,bc,MD,ci],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Sm,ft,we]})}return t})();var hI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})(),fI={passive:!0},ND=(()=>{class t{_platform=s(Re);_ngZone=s(re);_renderer=s(Pn).createRenderer(null,null);_styleLoader=s(ut);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Pt;this._styleLoader.load(hI);let n=ti(e),r=this._monitoredElements.get(n);if(r)return r.subject;let a=new F,o="cdk-text-field-autofilled",l=f=>{f.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(o)?(n.classList.add(o),this._ngZone.run(()=>a.next({target:f.target,isAutofilled:!0}))):f.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(o)&&(n.classList.remove(o),this._ngZone.run(()=>a.next({target:f.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",l,fI)));return this._monitoredElements.set(n,{subject:a,unlisten:u}),a}stopMonitoring(e){let n=ti(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var FD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({})}return t})();var wp=new S("");var Mp=new S("MAT_INPUT_VALUE_ACCESSOR");var gI=["button","checkbox","file","hidden","image","radio","range","reset","submit"],_I=new S("MAT_INPUT_CONFIG"),Fn=(()=>{class t{_elementRef=s(U);_platform=s(Re);ngControl=s(Ri,{optional:!0,self:!0});_autofillMonitor=s(ND);_ngZone=s(re);_formField=s(qr,{optional:!0});_renderer=s(Ye);_uid=s(Xe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(_I,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new F;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ji(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(fe.required)??!1}set required(e){this._required=ji(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&e_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ji(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>e_().has(e));constructor(){let e=s(ss,{optional:!0}),n=s(At,{optional:!0}),r=s(gm),a=s(Mp,{optional:!0,self:!0}),o=s(wp,{optional:!0,self:!0}),l=this._elementRef.nativeElement,u=l.nodeName.toLowerCase();a?cr(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Bo(r,o||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=u==="select",this._isTextarea=u==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&bt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){gI.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&D("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Et("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),le("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),V("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",$]},exportAs:["matInput"],features:[Ae([{provide:ls,useExisting:t}]),Ue]})}return t})(),On=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[ot,ot,FD,we]})}return t})();function bI(t,i){return this._trackRow(i)}var jD=(t,i)=>i.id;function vI(t,i){if(t&1&&(et(0,"tr",0)(1,"td",3),m(2),tt()()),t&2){let e=N();p(),Di("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),le("colspan",e.numCols),p(),ge(" ",e.label," ")}}function yI(t,i){if(t&1&&(et(0,"td",3),m(1),tt()),t&2){let e=N(2);Di("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),le("colspan",e._firstRowOffset),p(),ge(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function CI(t,i){if(t&1){let e=Te();et(0,"td",6)(1,"button",7),co("click",function(r){let a=ae(e).$implicit,o=N(2);return oe(o._cellClicked(a,r))})("focus",function(r){let a=ae(e).$implicit,o=N(2);return oe(o._emitActiveDateChange(a,r))}),et(2,"span",8),m(3),tt(),mi(4,"span",9),tt()()}if(t&2){let e=i.$implicit,n=i.$index,r=N().$index,a=N();Di("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),le("data-mat-row",r)("data-mat-col",n),p(),Ct(e.cssClasses),V("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(r,n))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,r,n))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,r,n))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),Et("tabIndex",a._isActiveCell(r,n)?0:-1),le("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),p(),V("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),p(),ge(" ",e.displayValue," ")}}function SI(t,i){if(t&1&&(et(0,"tr",1),T(1,yI,2,6,"td",4),gt(2,CI,5,49,"td",5,jD),tt()),t&2){let e=i.$implicit,n=i.$index,r=N();p(),I(n===0&&r._firstRowOffset?1:-1),p(),_t(e)}}function DI(t,i){if(t&1&&(c(0,"th",2)(1,"span",6),m(2),d(),c(3,"span",3),m(4),d()()),t&2){let e=i.$implicit;p(2),ce(e.long),p(2),ce(e.narrow)}}var wI=["*"];function MI(t,i){}function xI(t,i){if(t&1){let e=Te();c(0,"mat-month-view",4),po("activeDateChange",function(r){ae(e);let a=N();return mo(a.activeDate,r)||(a.activeDate=r),oe(r)}),D("_userSelection",function(r){ae(e);let a=N();return oe(a._dateSelected(r))})("dragStarted",function(r){ae(e);let a=N();return oe(a._dragStarted(r))})("dragEnded",function(r){ae(e);let a=N();return oe(a._dragEnded(r))}),d()}if(t&2){let e=N();uo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function AI(t,i){if(t&1){let e=Te();c(0,"mat-year-view",5),po("activeDateChange",function(r){ae(e);let a=N();return mo(a.activeDate,r)||(a.activeDate=r),oe(r)}),D("monthSelected",function(r){ae(e);let a=N();return oe(a._monthSelectedInYearView(r))})("selectedChange",function(r){ae(e);let a=N();return oe(a._goToDateInView(r,"month"))}),d()}if(t&2){let e=N();uo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function EI(t,i){if(t&1){let e=Te();c(0,"mat-multi-year-view",6),po("activeDateChange",function(r){ae(e);let a=N();return mo(a.activeDate,r)||(a.activeDate=r),oe(r)}),D("yearSelected",function(r){ae(e);let a=N();return oe(a._yearSelectedInMultiYearView(r))})("selectedChange",function(r){ae(e);let a=N();return oe(a._goToDateInView(r,"year"))}),d()}if(t&2){let e=N();uo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function RI(t,i){}var kI=["button"],TI=[[["","matDatepickerToggleIcon",""]]],II=["[matDatepickerToggleIcon]"];function NI(t,i){t&1&&(Gn(),c(0,"svg",2),A(1,"path",3),d())}var us=(()=>{class t{changes=new F;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,n){return`${e} \u2013 ${n}`}formatYearRangeLabel(e,n){return`${e} to ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),FI=0,Id=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=FI++;cssClasses;constructor(i,e,n,r,a,o=i,l){this.value=i,this.displayValue=e,this.ariaLabel=n,this.enabled=r,this.compareValue=o,this.rawValue=l,this.cssClasses=a instanceof Set?Array.from(a):a}},OI={passive:!1,capture:!0},xp={passive:!0,capture:!0},OD={passive:!0},ds=(()=>{class t{_elementRef=s(U);_ngZone=s(re);_platform=s(Re);_intl=s(us);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new B;previewChange=new B;activeDateChange=new B;dragStarted=new B;dragEnded=new B;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(se);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Ye),n=s(Xe);this._startDateLabelId=n.getId("mat-calendar-body-start-"),this._endDateLabelId=n.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=n.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=n.getId("mat-calendar-body-comparison-end-"),s(ut).load(_i),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,a=[e.listen(r,"touchmove",this._touchmoveHandler,OI),e.listen(r,"mouseenter",this._enterHandler,xp),e.listen(r,"focus",this._enterHandler,xp),e.listen(r,"mouseleave",this._leaveHandler,xp),e.listen(r,"blur",this._leaveHandler,xp),e.listen(r,"mousedown",this._mousedownHandler,OD),e.listen(r,"touchstart",this._mousedownHandler,OD)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,n){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:n})}_emitActiveDateChange(e,n){e.enabled&&this.activeDateChange.emit({value:e.value,event:n})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let n=e.numCols,{rows:r,numCols:a}=this;(e.rows||n)&&(this._firstRowOffset=r&&r.length&&r[0].length?a-r[0].length:0),(e.cellAspectRatio||n||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(n||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,n){let r=e*this.numCols+n;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Je(()=>{setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");n&&(e||(this._skipNextFocus=!0),n.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return mb(e,this.startValue,this.endValue)}_isRangeEnd(e){return pb(e,this.startValue,this.endValue)}_isInRange(e){return hb(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return mb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,n,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[n][r-1];if(!a){let o=this.rows[n-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,n,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[n][r+1];if(!a){let o=this.rows[n+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return pb(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return hb(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return mb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return pb(e,this.previewStart,this.previewEnd)}_isInPreview(e){return hb(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let n=this._getCellFromElement(e.target);n&&this._ngZone.run(()=>this.previewChange.emit({value:n.enabled?n:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let n=PD(e),r=n?this._getCellFromElement(n):null;n!==e.target&&(this._didDragSinceMouseDown=!0),ub(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let n=e.target&&this._getCellFromElement(e.target);!n||!this._isInRange(n.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:n.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let n=ub(e.target);if(!n){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}n.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(n);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let n=PD(e);n&&this._mouseupHandler({target:n})};_getCellFromElement(e){let n=ub(e);if(n){let r=n.getAttribute("data-mat-row"),a=n.getAttribute("data-mat-col");if(r&&a)return this.rows[parseInt(r)]?.[parseInt(a)]||null}return null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Ue],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(n,r){n&1&&(T(0,vI,3,6,"tr",0),gt(1,SI,4,1,"tr",1,bI,!0),et(3,"span",2),m(4),tt(),et(5,"span",2),m(6),tt(),et(7,"span",2),m(8),tt(),et(9,"span",2),m(10),tt()),n&2&&(I(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),_t(r.rows),p(2),Et("id",r._startDateLabelId),p(),ge(" ",r.startDateAccessibleName,`
`),p(),Et("id",r._endDateLabelId),p(),ge(" ",r.endDateAccessibleName,`
`),p(),Et("id",r._comparisonStartDateLabelId),p(),Wi(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),Et("id",r._comparisonEndDateLabelId),p(),Wi(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return t})();function db(t){return t?.nodeName==="TD"}function ub(t){let i;return db(t)?i=t:db(t.parentNode)?i=t.parentNode:db(t.parentNode?.parentNode)&&(i=t.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function mb(t,i,e){return e!==null&&i!==e&&t<e&&t===i}function pb(t,i,e){return i!==null&&i!==e&&t>=i&&t===e}function hb(t,i,e,n){return n&&i!==null&&e!==null&&i!==e&&t>=i&&t<=e}function PD(t){let i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Ui=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Nd=(()=>{class t{selection;_adapter;_selectionChanged=new F;selectionChanged=this._selectionChanged;constructor(e,n){this.selection=e,this._adapter=n,this.selection=e}updateSelection(e,n){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:n,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(n){xa()};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),PI=(()=>{class t extends Nd{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(n){return new(n||t)(Y(pn))};static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var GD={provide:Nd,useFactory:()=>s(Nd,{optional:!0,skipSelf:!0})||new PI(s(pn))};var zD=new S("MAT_DATE_RANGE_SELECTION_STRATEGY");var fb=7,LI=0,LD=(()=>{class t{_changeDetectorRef=s(Ee);_dateFormats=s(fr,{optional:!0});_dateAdapter=s(pn,{optional:!0});_dir=s(mt,{optional:!0});_rangeStrategy=s(zD,{optional:!0});_rerenderSubscription=Fe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(n,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ui?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new B;_userSelection=new B;dragStarted=new B;dragEnded=new B;activeDateChange=new B;_matCalendarBody;_monthLabel=be("");_weeks=be([]);_firstWeekOffset=be(0);_rangeStart=be(null);_rangeEnd=be(null);_comparisonRangeStart=be(null);_comparisonRangeEnd=be(null);_previewStart=be(null);_previewEnd=be(null);_isRange=be(!1);_todayDate=be(null);_weekdays=be([]);constructor(){s(ut).load(gr),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(st(null)).subscribe(()=>this._init())}ngOnChanges(e){let n=e.comparisonStart||e.comparisonEnd;n&&!n.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let n=e.value,r=this._getDateFromDayOfMonth(n),a,o;this._selected instanceof Ui?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==n||o!==n)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!at(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((fb+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%fb),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:n}){if(this._rangeStrategy){let r=n?n.rawValue:null,a=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&r){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let n=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:n??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),n=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:n[l],id:LI++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),n=this._dateAdapter.getDateNames(),r=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==fb&&(r.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),u=this._shouldEnableDate(l),f=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),g=this.dateClass?this.dateClass(l,"month"):void 0;r[r.length-1].push(new Id(a+1,n[a],f,u,g,this._getCellCompareValue(l),l))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,n){return!!(e&&n&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n))}_getCellCompareValue(e){if(e){let n=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(n,r,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ui?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-month-view"]],viewQuery:function(n,r){if(n&1&&Ke(ds,5),n&2){let a;H(a=W())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Ue],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(n,r){n&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),gt(3,DI,5,2,"th",2,jD),d(),c(5,"tr",3),A(6,"th",4),d()(),c(7,"tbody",5),D("selectedValueChange",function(o){return r._dateSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("previewChange",function(o){return r._previewChanged(o)})("dragStarted",function(o){return r.dragStarted.emit(o)})("dragEnded",function(o){return r._dragEnded(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),d()()),n&2&&(p(3),_t(r._weekdays()),p(4),w("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[ds],encapsulation:2})}return t})(),Ti=24,gb=4,BD=(()=>{class t{_changeDetectorRef=s(Ee);_dateAdapter=s(pn,{optional:!0});_dir=s(mt,{optional:!0});_rerenderSubscription=Fe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),UD(this._dateAdapter,n,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ui?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new B;yearSelected=new B;activeDateChange=new B;_matCalendarBody;_years=be([]);_todayYear=be(0);_selectedYear=be(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(st(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let n=this._dateAdapter.getYear(this._activeDate)-Td(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let a=0,o=[];a<Ti;a++)o.push(n+a),o.length==gb&&(r.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let n=e.value,r=this._dateAdapter.createDate(n,0,1),a=this._getDateFromYear(n);this.yearSelected.emit(r),this.selectedChange.emit(a)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-gb);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,gb);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Td(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ti-Td(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Ti*10:-Ti);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Ti*10:Ti);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Td(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let n=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,n,1));return this._dateAdapter.createDate(e,n,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let n=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(n),a=this.dateClass?this.dateClass(n,"multi-year"):void 0;return new Id(e,r,r,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(e,0,1);for(let r=n;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ui){let n=e.start||e.end;n&&this._selectedYear.set(this._dateAdapter.getYear(n))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(n,r){if(n&1&&Ke(ds,5),n&2){let a;H(a=W())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),A(3,"th",2),d()(),c(4,"tbody",3),D("selectedValueChange",function(o){return r._yearSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),d()()),n&2&&(p(4),w("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[ds],encapsulation:2})}return t})();function UD(t,i,e,n,r){let a=t.getYear(i),o=t.getYear(e),l=HD(t,n,r);return Math.floor((a-l)/Ti)===Math.floor((o-l)/Ti)}function Td(t,i,e,n){let r=t.getYear(i);return BI(r-HD(t,e,n),Ti)}function HD(t,i,e){let n=0;return e?n=t.getYear(e)-Ti+1:i&&(n=t.getYear(i)),n}function BI(t,i){return(t%i+i)%i}var VD=(()=>{class t{_changeDetectorRef=s(Ee);_dateFormats=s(fr,{optional:!0});_dateAdapter=s(pn,{optional:!0});_dir=s(mt,{optional:!0});_rerenderSubscription=Fe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(n)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ui?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new B;monthSelected=new B;activeDateChange=new B;_matCalendarBody;_months=be([]);_yearLabel=be("");_todayMonth=be(null);_selectedMonth=be(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(st(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let n=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),n,1);this.monthSelected.emit(r);let a=this._getDateFromMonth(n);this.selectedChange.emit(a)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(n=>n.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(n);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,n){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(r,"year"):void 0;return new Id(e,n.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let n=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(n,e)||this._isYearAndMonthBeforeMinDate(n,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(n,e,1);for(let a=r;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,n){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&n>a}return!1}_isYearAndMonthBeforeMinDate(e,n){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&n<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ui?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-year-view"]],viewQuery:function(n,r){if(n&1&&Ke(ds,5),n&2){let a;H(a=W())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),A(3,"th",2),d()(),c(4,"tbody",3),D("selectedValueChange",function(o){return r._monthSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),d()()),n&2&&(p(4),w("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[ds],encapsulation:2})}return t})(),WD=(()=>{class t{_intl=s(us);calendar=s(_b);_dateAdapter=s(pn,{optional:!0});_dateFormats=s(fr,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(ut).load(gr);let e=s(Ee);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-Ti))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:Ti))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,n=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=n.switchToMultiYearViewLabel,this._prevButtonLabel=n.prevMonthLabel,this._nextButtonLabel=n.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevYearLabel,this._nextButtonLabel=n.nextYearLabel):(this._periodButtonText=n.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=n.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevMultiYearLabel,this._nextButtonLabel=n.nextMultiYearLabel)}_isSameView(e,n){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n):UD(this._dateAdapter,e,n,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let n=this._dateAdapter.getYear(this.calendar.activeDate)-Td(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=n+Ti-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[a,o]}_periodButtonLabelId=s(Xe).getId("mat-calendar-period-label-");static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:wI,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(n,r){n&1&&(Be(),c(0,"div",0)(1,"div",1)(2,"span",2),m(3),d(),c(4,"button",3),D("click",function(){return r.currentPeriodClicked()}),c(5,"span",4),m(6),d(),Gn(),c(7,"svg",5),A(8,"polygon",6),d()(),lc(),A(9,"div",7),de(10),c(11,"button",8),D("click",function(){return r.previousClicked()}),Gn(),c(12,"svg",9),A(13,"path",10),d()(),lc(),c(14,"button",11),D("click",function(){return r.nextClicked()}),Gn(),c(15,"svg",9),A(16,"path",12),d()()()()),n&2&&(p(2),w("id",r._periodButtonLabelId),p(),ce(r.periodButtonDescription),p(),le("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),ce(r.periodButtonText),p(),V("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),w("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),le("aria-label",r.prevButtonLabel),p(3),w("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),le("aria-label",r.nextButtonLabel))},dependencies:[Ve,xt,Rt],encapsulation:2})}return t})(),_b=(()=>{class t{_dateAdapter=s(pn,{optional:!0});_dateFormats=s(fr,{optional:!0});_changeDetectorRef=s(Ee);_elementRef=s(U);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ui?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new B;yearSelected=new B;monthSelected=new B;viewChanged=new B(!0);_userSelection=new B;_userDragDrop=new B;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let n=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),n&&(this.stateChanges.next(),this.viewChanged.emit(n))}_currentView;_activeDrag=null;stateChanges=new F;constructor(){this._intlChanges=s(us).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new bi(this.headerComponent||WD),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let n=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=n||r||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains($i())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let n=e.value;(this.selected instanceof Ui||n&&!this._dateAdapter.sameDate(n,this.selected))&&this.selectedChange.emit(n),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,n){this.activeDate=e,this.currentView=n}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-calendar"]],viewQuery:function(n,r){if(n&1&&Ke(LD,5)(VD,5)(BD,5),n&2){let a;H(a=W())&&(r.monthView=a.first),H(a=W())&&(r.yearView=a.first),H(a=W())&&(r.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ae([GD]),Ue],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(n,r){if(n&1&&(j(0,MI,0,0,"ng-template",0),c(1,"div",1),T(2,xI,1,11,"mat-month-view",2)(3,AI,1,6,"mat-year-view",3)(4,EI,1,6,"mat-multi-year-view",3),d()),n&2){let a;w("cdkPortalOutlet",r._calendarHeaderPortal),p(2),I((a=r.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[vi,Xc,LD,VD,BD],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})(),VI=new S("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t)}}),qD=(()=>{class t{_elementRef=s(U);_animationsDisabled=He();_changeDetectorRef=s(Ee);_globalModel=s(Nd);_dateAdapter=s(pn);_ngZone=s(re);_rangeSelectionStrategy=s(zD,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new F;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(ut).load(gr),this._closeButtonText=s(us).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,n=s(Ye);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"animationstart",this._handleAnimationEvent),n.listen(e,"animationend",this._handleAnimationEvent),n.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let n=this._model.selection,r=e.value,a=n instanceof Ui;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(r,n,e.event);this._model.updateSelection(o,this)}else r&&(a||!this._dateAdapter.sameDate(r,n))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let n=this._elementRef.nativeElement;e.target!==n||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",n.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,n){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,n&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(n,r){if(n&1&&Ke(_b,5),n&2){let a;H(a=W())&&(r._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(n,r){n&2&&(Ct(r.color?"mat-"+r.color:""),V("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(n,r){n&1&&(c(0,"div",0)(1,"mat-calendar",1),D("yearSelected",function(o){return r.datepicker._selectYear(o)})("monthSelected",function(o){return r.datepicker._selectMonth(o)})("viewChanged",function(o){return r.datepicker._viewChanged(o)})("_userSelection",function(o){return r._handleUserSelection(o)})("_userDragDrop",function(o){return r._handleUserDragDrop(o)}),d(),j(2,RI,0,0,"ng-template",2),c(3,"button",3),D("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),m(4),d()()),n&2&&(V("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),le("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),Ct(r.datepicker.panelClass),w("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),w("cdkPortalOutlet",r._actionsPortal),p(),V("cdk-visually-hidden",!r._closeButtonFocused),w("color",r.color||"primary"),p(),ce(r._closeButtonText))},dependencies:[Xg,_b,vi,Ve],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})}return t})(),$D=(()=>{class t{_injector=s(se);_viewContainerRef=s(vt);_dateAdapter=s(pn,{optional:!0});_dir=s(mt,{optional:!0});_model=s(Nd);_animationsDisabled=He();_scrollStrategy=s(VI);_inputStateChanges=Fe.EMPTY;_document=s(ue);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new B;monthSelected=new B;viewChanged=new B(!0);dateClass;openedStream=new B;closedStream=new B;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=J0(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(Xe).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new F;_changeDetectorRef=s(Ee);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let n=e.xPosition||e.yPosition;if(n&&!n.firstChange&&this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;r instanceof Go&&(this._setConnectedPositions(r),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=$i(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",n=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:r,location:a}=this._componentRef;r._animationDone.pipe(Le(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),r._startExitAnimation()}e?setTimeout(n):n()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,n=new bi(qD,this._viewContainerRef),r=this._overlayRef=ai(this._injector,new ii({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?da(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(r).subscribe(a=>{a&&a.preventDefault(),this.close()}),r.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=r.attach(n),this._forwardContentValues(this._componentRef.instance),e||Je(()=>{r.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return yr(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=tr(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let n=this.xPosition==="end"?"end":"start",r=n==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:n,originY:o,overlayX:n,overlayY:a},{originX:n,originY:a,overlayX:n,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a},{originX:r,originY:a,overlayX:r,overlayY:o}])}_getCloseStream(e){let n=["ctrlKey","shiftKey","metaKey"];return qe(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(xe(r=>r.keyCode===27&&!at(r)||this.datepickerInput&&at(r,"altKey")&&r.keyCode===38&&n.every(a=>!at(r,a)))))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",$],disabled:[2,"disabled","disabled",$],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",$],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",$]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Ue]})}return t})(),Ap=(()=>{class t extends $D{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[Ae([GD,{provide:$D,useExisting:t}]),ve],decls:0,vars:0,template:function(n,r){},encapsulation:2})}return t})(),cs=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},$I=(()=>{class t{_elementRef=s(U);_dateAdapter=s(pn,{optional:!0});_dateFormats=s(fr,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let n=e,r=this._elementRef.nativeElement;this._disabled!==n&&(this._disabled=n,this.stateChanges.next(void 0)),n&&this._isInitialized&&r.blur&&r.blur()}_disabled;dateChange=new B;dateInput=new B;stateChanges=new F;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Fe.EMPTY;_localeSubscription=Fe.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!n||this._matchesFilter(n)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMinDate();return!r||!n||this._dateAdapter.compareDate(r,n)<=0?null:{matDatepickerMin:{min:r,actual:n}}};_maxValidator=e=>{let n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMaxDate();return!r||!n||this._dateAdapter.compareDate(r,n)>=0?null:{matDatepickerMax:{max:r,actual:n}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(n=>{if(this._shouldHandleChangeEvent(n)){let r=this._getValueFromModel(n.selection);this._lastValueValid=this._isValidValue(r),this._cvaOnChange(r),this._onTouched(),this._formatValue(r),this.dateInput.emit(new cs(this,this._elementRef.nativeElement)),this.dateChange.emit(new cs(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){jI(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let n=["ctrlKey","shiftKey","metaKey"];at(e,"altKey")&&e.keyCode===40&&n.every(a=>!at(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let n=e.target.value,r=this._lastValueValid,a=this._dateAdapter.parse(n,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(n&&!this.value&&this._cvaOnChange(a),r!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new cs(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new cs(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,n){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),n&&this._formatValue(e)}_matchesFilter(e){let n=this._getDateFilter();return!n||n(e)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{value:"value",disabled:[2,"disabled","disabled",$]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Ue]})}return t})();function jI(t,i){let e=Object.keys(t);for(let n of e){let{previousValue:r,currentValue:a}=t[n];if(i.isDateInstance(r)&&i.isDateInstance(a)){if(!i.sameDate(r,a))return!0}else return!0}return!1}var GI={provide:Rr,useExisting:cn(()=>ms),multi:!0},zI={provide:ir,useExisting:cn(()=>ms),multi:!0},ms=(()=>{class t extends $I{_formField=s(qr,{optional:!0});_closedSubscription=Fe.EMPTY;_openedSubscription=Fe.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=be(null);get min(){return this._min}set min(e){let n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(n,this._min)||(this._min=n,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(n,this._max)||(this._max=n,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let n=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==n&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=fe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(n,r){n&1&&D("input",function(o){return r._onInput(o)})("change",function(){return r._onChange()})("blur",function(){return r._onBlur()})("keydown",function(o){return r._onKeydown(o)}),n&2&&(Et("disabled",r.disabled),le("aria-haspopup",r._datepicker?"dialog":null)("aria-owns",r._ariaOwns())("min",r.min?r._dateAdapter.toIso8601(r.min):null)("max",r.max?r._dateAdapter.toIso8601(r.max):null)("data-mat-calendar",r._datepicker?r._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[Ae([GI,zI,{provide:Mp,useExisting:t}]),ve]})}return t})(),UI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),Fd=(()=>{class t{_intl=s(us);_changeDetectorRef=s(Ee);_stateChanges=Fe.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new Fi("tabindex"),{optional:!0}),n=Number(e);this.tabIndex=n||n===0?n:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:E(),n=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:E(),r=this.datepicker?qe(this.datepicker.openedStream,this.datepicker.closedStream):E();this._stateChanges.unsubscribe(),this._stateChanges=qe(this._intl.changes,e,n,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,UI,5),n&2){let o;H(o=W())&&(r._customIcon=o.first)}},viewQuery:function(n,r){if(n&1&&Ke(kI,5),n&2){let a;H(a=W())&&(r._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(n,r){n&1&&D("click",function(o){return r._open(o)}),n&2&&(le("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),V("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",$],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Ue],ngContentSelectors:II,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(n,r){n&1&&(Be(TI),c(0,"button",1,0),T(2,NI,2,0,":svg:svg",2),de(3),d()),n&2&&(w("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),le("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),I(r._customIcon?-1:2))},dependencies:[xt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return t})();var Ep=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({providers:[us],imports:[Pe,Vn,jr,Qi,qD,Fd,WD,we,Ai]})}return t})();function HI(t,i){t&1&&(c(0,"mat-error"),m(1,"Name ist erforderlich"),d())}function WI(t,i){t&1&&(c(0,"mat-error"),m(1,"Datum ist erforderlich"),d())}var Od=class t{fb=s(In);dialogRef=s(jt);data=s($n);form;constructor(){let i=this.data?.date||"";if(i&&typeof i=="string"){let e=i.split("-");e.length===3&&(i=new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])))}this.form=this.fb.group({name:[this.data?.name||"",fe.required],date:[i,fe.required],organisation:[this.data?.organisation||""],referee:[this.data?.referee||""],raceDirector:[this.data?.raceDirector||""],timeControl:[this.data?.timeControl||""],routeName:[this.data?.routeName||""],elevationDifference:[this.data?.elevationDifference||""],routeLength:[this.data?.routeLength||""],courseSetter:[this.data?.courseSetter||""],weather:[this.data?.weather||""]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,date:this.formatDate(i.date),organisation:i.organisation||void 0,referee:i.referee||void 0,raceDirector:i.raceDirector||void 0,timeControl:i.timeControl||void 0,routeName:i.routeName||void 0,elevationDifference:i.elevationDifference||void 0,routeLength:i.routeLength||void 0,courseSetter:i.courseSetter||void 0,weather:i.weather||void 0};this.dialogRef.close(e)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${a}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-race-dialog"]],decls:63,vars:7,consts:[["picker",""],["mat-dialog-title",""],[1,"race-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["matInput","","formControlName","date","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],[1,"section-title"],[1,"race-form-grid"],["matInput","","formControlName","organisation"],["matInput","","formControlName","referee"],["matInput","","formControlName","raceDirector"],["matInput","","formControlName","timeControl"],["matInput","","formControlName","routeName"],["matInput","","formControlName","elevationDifference","placeholder","z.B. 350 m"],["matInput","","formControlName","routeLength","placeholder","z.B. 1200 m"],["matInput","","formControlName","courseSetter"],["matInput","","formControlName","weather"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){if(e&1&&(c(0,"h2",1),m(1),d(),c(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Name"),d(),A(7,"input",4),Ce(),T(8,HI,2,0,"mat-error"),d(),c(9,"mat-form-field",3)(10,"mat-label"),m(11,"Datum"),d(),A(12,"input",5),Ce(),A(13,"mat-datepicker-toggle",6)(14,"mat-datepicker",null,0),c(16,"mat-hint"),m(17,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),d(),T(18,WI,2,0,"mat-error"),d(),c(19,"h3",7),m(20,"Zusatzinformationen (optional)"),d(),c(21,"div",8)(22,"mat-form-field",3)(23,"mat-label"),m(24,"Veranstalter"),d(),A(25,"input",9),Ce(),d(),c(26,"mat-form-field",3)(27,"mat-label"),m(28,"Schiedsrichter"),d(),A(29,"input",10),Ce(),d(),c(30,"mat-form-field",3)(31,"mat-label"),m(32,"Rennleiter"),d(),A(33,"input",11),Ce(),d(),c(34,"mat-form-field",3)(35,"mat-label"),m(36,"Zeitnahme"),d(),A(37,"input",12),Ce(),d(),c(38,"mat-form-field",3)(39,"mat-label"),m(40,"Streckenname"),d(),A(41,"input",13),Ce(),d(),c(42,"mat-form-field",3)(43,"mat-label"),m(44,"H\xF6hendifferenz"),d(),A(45,"input",14),Ce(),d(),c(46,"mat-form-field",3)(47,"mat-label"),m(48,"Streckenl\xE4nge"),d(),A(49,"input",15),Ce(),d(),c(50,"mat-form-field",3)(51,"mat-label"),m(52,"Kurssetzer"),d(),A(53,"input",16),Ce(),d(),c(54,"mat-form-field",3)(55,"mat-label"),m(56,"Wetter"),d(),A(57,"input",17),Ce(),d()()()(),c(58,"mat-dialog-actions",18)(59,"button",19),D("click",function(){return n.onCancel()}),m(60,"Abbrechen"),d(),c(61,"button",20),D("click",function(){return n.onSave()}),m(62," Speichern "),d()()),e&2){let r=yt(15);p(),ge(" ",n.data?"Rennen bearbeiten":"Neues Rennen"," "),p(2),w("formGroup",n.form),p(4),Se(),p(),I(n.form.get("name")?.hasError("required")&&n.form.get("name")?.touched?8:-1),p(4),w("matDatepicker",r),Se(),p(),w("for",r),p(5),I(n.form.get("date")?.hasError("required")&&n.form.get("date")?.touched?18:-1),p(7),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),Se(),p(4),w("disabled",!n.form.valid)}},dependencies:[$e,Nn,Tn,qt,Kt,kn,Yt,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,kd,On,Fn,Pe,Ve,Ep,Ap,ms,Fd,Pm],styles:[".race-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.section-title[_ngcontent-%COMP%]{margin:0 0 -8px;font-size:14px;font-weight:500;color:#0009}.race-form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:0 16px}"]})};var qI={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},Rp="__@ngrx/effects_create__";function X(t,i={}){let e=i.functional?t:t(),n=h(h({},qI),i);return Object.defineProperty(e,Rp,{value:n}),e}function YI(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(Rp)?t[n][Rp].hasOwnProperty("dispatch"):!1).map(n=>{let r=t[n][Rp];return h({propertyName:n},r)})}function KI(t){return YI(t)}function KD(t){return Object.getPrototypeOf(t)}function XI(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function XD(t){return typeof t=="function"}function ZI(t){return t.filter(XD)}function QI(t,i,e){let n=KD(t),a=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,o=KI(t).map(({propertyName:l,dispatch:u,useEffectsErrorHandler:f})=>{let g=typeof t[l]=="function"?t[l]():t[l],v=f?e(g,i):g;return u===!1?v.pipe(Jb()):v.pipe(iv()).pipe(R(G=>({effect:t[l],notification:G,propertyName:l,sourceName:a,sourceInstance:t})))});return qe(...o)}var JI=10;function ZD(t,i,e=JI){return t.pipe(K(n=>(i&&i.handleError(n),e<=1?t:ZD(t,i,e-1))))}var Ze=(()=>{class t extends lt{constructor(e){super(),e&&(this.source=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}static{this.\u0275fac=function(n){return new(n||t)(Y(za))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function M(...t){return xe(i=>t.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}var eN=new S("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>ZD}),tN="@ngrx/effects/init",nN=b(tN);function iN(t,i){if(t.notification.kind==="N"){let e=t.notification.value;!rN(e)&&i.handleError(new Error(`Effect ${aN(t)} dispatched an invalid action: ${oN(e)}`))}}function rN(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function aN({propertyName:t,sourceInstance:i,sourceName:e}){let n=typeof i[t]=="function";return!!e?`"${e}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function oN(t){try{return JSON.stringify(t)}catch{return t}}var sN="ngrxOnIdentifyEffects";function lN(t){return bb(t,sN)}var cN="ngrxOnRunEffects";function dN(t){return bb(t,cN)}var uN="ngrxOnInitEffects";function mN(t){return bb(t,uN)}function bb(t,i){return t&&i in t&&typeof t[i]=="function"}var QD=(()=>{class t extends F{constructor(e,n){super(),this.errorHandler=e,this.effectsErrorHandler=n}addEffects(e){this.next(e)}toActions(){return this.pipe(Tf(e=>XI(e)?KD(e):e),te(e=>e.pipe(Tf(pN))),te(e=>{let n=e.pipe(nv(a=>hN(this.errorHandler,this.effectsErrorHandler)(a)),R(a=>(iN(a,this.errorHandler),a.notification)),xe(a=>a.kind==="N"&&a.value!=null),tv()),r=e.pipe(Le(1),xe(mN),R(a=>a.ngrxOnInitEffects()));return qe(n,r)}))}static{this.\u0275fac=function(n){return new(n||t)(Y(Hi),Y(eN))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function pN(t){return lN(t)?t.ngrxOnIdentifyEffects():""}function hN(t,i){return e=>{let n=QI(e,t,i);return dN(e)?e.ngrxOnRunEffects(n):n}}var fN=(()=>{class t{get isStarted(){return!!this.effectsSubscription}constructor(e,n){this.effectSources=e,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(n){return new(n||t)(Y(QD),Y(Ge))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function JD(...t){let i=t.flat(),e=ZI(i);return Zn([e,sc(()=>{s(sd),s($m,{optional:!0});let n=s(fN),r=s(QD),a=!n.isStarted;a&&n.start();for(let o of i){let l=XD(o)?s(o):o;r.addEffects(l)}a&&s(Ge).dispatch(nN())})])}function gN(t,i){t&1&&(c(0,"div",3),A(1,"mat-spinner"),d())}function _N(t,i){t&1&&(c(0,"th",15),m(1,"ID"),d())}function bN(t,i){if(t&1&&(c(0,"td",16),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function vN(t,i){t&1&&(c(0,"th",15),m(1,"Name"),d())}function yN(t,i){if(t&1&&(c(0,"td",16),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.name)}}function CN(t,i){t&1&&(c(0,"th",15),m(1,"Datum"),d())}function SN(t,i){if(t&1&&(c(0,"td",16),m(1),J(2,"date"),d()),t&2){let e=i.$implicit;p(),ge(" ",Ir(2,1,e.date,"dd.MM.yyyy")," ")}}function DN(t,i){t&1&&(c(0,"th",17),m(1,"Aktionen"),d())}function wN(t,i){if(t&1){let e=Te();c(0,"td",16)(1,"button",18),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",19),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteRace(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function MN(t,i){t&1&&A(0,"tr",20)}function xN(t,i){t&1&&A(0,"tr",21)}var kp=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;races$;loading$;displayedColumns=["id","name","date","actions"];dataSource=new zi([]);sortInitialized=!1;sort=Ln.required(Dt);constructor(){this.races$=this.store.select(si),this.loading$=this.store.select(LS),this.actions$.pipe(M(Ko),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Rennen erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(Xo),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen des Rennens: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Qo),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Rennen erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M(Jo),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren des Rennens: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(ts),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Rennen erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(ns),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen des Rennens: ${i}`,"OK",{duration:5e3})}),bt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(x(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(oi()),this.races$.pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Od,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(Yo({race:e}))})}openEditDialog(i){this.dialog.open(Od,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(Zo({id:i.id,race:n}))})}deleteRace(i){confirm(`M\xF6chten Sie das Rennen "${i.name}" wirklich l\xF6schen?`)&&this.store.dispatch(es({id:i.id}))}refreshData(){this.store.dispatch(oi()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-race-list"]],viewQuery:function(e,n){e&1&&pi(n.sort,Dt,5),e&2&&ei()},decls:33,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","","matSort","",1,"race-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","date"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Rennen"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"button",1),D("click",function(){return n.openCreateDialog()}),c(7,"mat-icon"),m(8,"add"),d(),m(9," Neues Rennen "),d(),c(10,"button",2),D("click",function(){return n.refreshData()}),c(11,"mat-icon"),m(12,"refresh"),d(),m(13," Aktualisieren "),d()(),T(14,gN,2,0,"div",3),J(15,"async"),c(16,"div",4)(17,"table",5),J(18,"async"),me(19,6),j(20,_N,2,0,"th",7)(21,bN,2,1,"td",8),pe(),me(22,9),j(23,vN,2,0,"th",7)(24,yN,2,1,"td",8),pe(),me(25,10),j(26,CN,2,0,"th",7)(27,SN,3,4,"td",8),pe(),me(28,11),j(29,DN,2,0,"th",12)(30,wN,7,0,"td",8),pe(),j(31,MN,1,0,"tr",13)(32,xN,1,0,"tr",14),d()()()()),e&2&&(p(14),I(ie(15,6,n.loading$)?14:-1),p(3),V("hidden",ie(18,8,n.loading$)),w("dataSource",n.dataSource),p(14),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns))},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,xr,Dt,Mr,dt,Or],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.race-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var AN=["trigger"],EN=["panel"],RN=[[["mat-select-trigger"]],"*"],kN=["mat-select-trigger","*"];function TN(t,i){if(t&1&&(c(0,"span",4),m(1),d()),t&2){let e=N();p(),ce(e.placeholder)}}function IN(t,i){t&1&&de(0)}function NN(t,i){if(t&1&&(c(0,"span",11),m(1),d()),t&2){let e=N(2);p(),ce(e.triggerValue)}}function FN(t,i){if(t&1&&(c(0,"span",5),T(1,IN,1,0)(2,NN,2,1,"span",11),d()),t&2){let e=N();p(),I(e.customTrigger?1:2)}}function ON(t,i){if(t&1){let e=Te();c(0,"div",12,1),D("keydown",function(r){ae(e);let a=N();return oe(a._handleKeydown(r))}),de(2,1),d()}if(t&2){let e=N();Ct(e.panelClass),V("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),le("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var PN=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t)}}),LN=new S("MAT_SELECT_CONFIG"),BN=new S("MatSelectTrigger"),vb=class{source;value;constructor(i,e){this.source=i,this.value=e}},yi=(()=>{class t{_viewportRuler=s(ni);_changeDetectorRef=s(Ee);_elementRef=s(U);_dir=s(mt,{optional:!0});_idGenerator=s(Xe);_renderer=s(Ye);_parentFormField=s(qr,{optional:!0});ngControl=s(Ri,{self:!0,optional:!0});_liveAnnouncer=s(Zc);_defaultOptions=s(LN,{optional:!0});_animationsDisabled=He();_popoverLocation;_initialized=new F;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,a=Nm(e,this.options,this.optionGroups),o=n._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Fm(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new vb(this,e)}_scrollStrategyFactory=s(PN);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new F;_errorStateTracker;stateChanges=new F;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=be(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ii(()=>{let e=this.options;return e?e.changes.pipe(st(e),ze(()=>qe(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ze(()=>this.optionSelectionChanges))});openedChange=new B;_openedStream=this.openedChange.pipe(xe(e=>e),R(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),R(()=>{}));selectionChange=new B;valueChange=new B;constructor(){let e=s(gm),n=s(ss,{optional:!0}),r=s(At,{optional:!0}),a=s(new Fi("tabindex"),{optional:!0}),o=s(_d,{optional:!0}),l=s(wp,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Bo(e,l||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new yd(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(x(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(x(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(st(null),x(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Le(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,a=n===13||n===32,o=this._keyManager;if(!o.isTyping()&&a&&!at(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let u=this.selected;u&&l!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,a=r===40||r===38,o=n.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&n.activeItem&&!at(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(l?u.select():u.deselect())})}else{let l=n.activeItemIndex;n.onKeydown(e),this._multiple&&a&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==l&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!at(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof zo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Va(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=qe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(x(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),qe(...this.options.map(n=>n._stateChanges)).pipe(x(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=en(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-select"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,BN,5)(a,Tt,5)(a,ad,5),n&2){let o;H(o=W())&&(r.customTrigger=o.first),H(o=W())&&(r.options=o),H(o=W())&&(r.optionGroups=o)}},viewQuery:function(n,r){if(n&1&&Ke(AN,5)(EN,5)(Qm,5),n&2){let a;H(a=W())&&(r.trigger=a.first),H(a=W())&&(r.panel=a.first),H(a=W())&&(r._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,r){n&1&&D("keydown",function(o){return r._handleKeydown(o)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),n&2&&(le("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),V("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",$],disableRipple:[2,"disableRipple","disableRipple",$],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:zn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",$],placeholder:"placeholder",required:[2,"required","required",$],multiple:[2,"multiple","multiple",$],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",$],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",zn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",$]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ae([{provide:ls,useExisting:t},{provide:rd,useExisting:t}]),Ue],ngContentSelectors:kN,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,r){if(n&1&&(Be(RN),c(0,"div",2,0),D("click",function(){return r.open()}),c(3,"div",3),T(4,TN,2,1,"span",4)(5,FN,3,1,"span",5),d(),c(6,"div",6)(7,"div",7),Gn(),c(8,"svg",8),A(9,"path",9),d()()()(),j(10,ON,3,16,"ng-template",10),D("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(o){return r._handleOverlayKeydown(o)})),n&2){let a=yt(1);p(3),le("id",r._valueId),p(),I(r.empty?4:5),p(6),w("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[zo,Qm],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return t})();var Ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Vn,Lo,we,Ai,ot,Lo]})}return t})();var ew=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ji(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ji(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,r){n&2&&(le("aria-orientation",r.vertical?"vertical":"horizontal"),V("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})(),Tp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[we]})}return t})();var or={MALE:"M\xE4nnlich",FEMALE:"Weiblich",BOTH:"Beide"};var sr=b("[Participant] Load Participants"),Ip=b("[Participant] Load Participants Success",y()),Np=b("[Participant] Load Participants Failure",y()),Fp=b("[Participant] Load Participant",y()),Op=b("[Participant] Load Participant Success",y()),Pp=b("[Participant] Load Participant Failure",y()),ps=b("[Participant] Create Participant",y()),hs=b("[Participant] Create Participant Success",y()),fs=b("[Participant] Create Participant Failure",y()),gs=b("[Participant] Update Participant",y()),_s=b("[Participant] Update Participant Success",y()),bs=b("[Participant] Update Participant Failure",y()),vs=b("[Participant] Delete Participant",y()),ys=b("[Participant] Delete Participant Success",y()),Cs=b("[Participant] Delete Participant Failure",y()),Ss=b("[Participant] Delete Participants By Race Id",y()),Ds=b("[Participant] Delete Participants By Race Id Success",y()),ws=b("[Participant] Delete Participants By Race Id Failure",y()),tw=b("[Participant] Select Participant",y()),Ms=b("[Participant] Assign Race Numbers",y()),Lp=b("[Participant] Assign Race Numbers Success",y()),Bp=b("[Participant] Assign Race Numbers Failure",y()),xs=b("[Participant] Import Participants CSV",y()),Vp=b("[Participant] Import Participants CSV Success",y()),$p=b("[Participant] Import Participants CSV Failure",y()),As=b("[Participant] Export Start List PDF",y()),Pd=b("[Participant] Export Start List PDF Success",y()),jp=b("[Participant] Export Start List PDF Failure",y()),Es=b("[Participant] Export All PDF",y()),Ld=b("[Participant] Export All PDF Success",y()),Gp=b("[Participant] Export All PDF Failure",y()),Rs=b("[Participant] Export By Gender PDF",y()),Bd=b("[Participant] Export By Gender PDF Success",y()),zp=b("[Participant] Export By Gender PDF Failure",y()),ks=b("[Participant] Export All Age Groups PDF",y()),Vd=b("[Participant] Export All Age Groups PDF Success",y()),Up=b("[Participant] Export All Age Groups PDF Failure",y()),Ts=b("[Participant] Export All By Category PDF",y()),$d=b("[Participant] Export All By Category PDF Success",y()),Hp=b("[Participant] Export All By Category PDF Failure",y()),Is=b("[Participant] Export By Gender By Category PDF",y()),jd=b("[Participant] Export By Gender By Category PDF Success",y()),Wp=b("[Participant] Export By Gender By Category PDF Failure",y()),Ns=b("[Participant] Export All Age Groups By Category PDF",y()),Gd=b("[Participant] Export All Age Groups By Category PDF Success",y()),qp=b("[Participant] Export All Age Groups By Category PDF Failure",y());var Xa=fn("participant"),Fs=he(Xa,t=>t.participants),nw=he(Xa,t=>t.loading),iw=he(Xa,t=>t.pdfExportLoading),rw=he(Xa,t=>t.importLoading),aw=he(Xa,t=>t.importResult),mY=he(Xa,t=>t.error),$N=he(Xa,t=>t.selectedParticipantId),pY=he(Fs,$N,(t,i)=>i?t.find(e=>e.id===i):null);var Yp=he(Fs,li,(t,i)=>i?t.filter(e=>e.race?.id===i):t);var yb=fn("team"),Xp=he(yb,t=>t.teams),ow=he(yb,t=>t.loading),fY=he(yb,t=>t.error);var Kr=b("[Team] Load Teams"),Zp=b("[Team] Load Teams Success",y()),Qp=b("[Team] Load Teams Failure",y()),Os=b("[Team] Create Team",y()),Ps=b("[Team] Create Team Success",y()),Ls=b("[Team] Create Team Failure",y()),Bs=b("[Team] Update Team",y()),Vs=b("[Team] Update Team Success",y()),$s=b("[Team] Update Team Failure",y()),js=b("[Team] Delete Team",y()),Gs=b("[Team] Delete Team Success",y()),zs=b("[Team] Delete Team Failure",y());var Cb=fn("category"),eh=he(Cb,t=>t.categories),sw=he(Cb,t=>t.loading),bY=he(Cb,t=>t.error);var Xr=b("[Category] Load Categories"),th=b("[Category] Load Categories Success",y()),nh=b("[Category] Load Categories Failure",y()),Us=b("[Category] Create Category",y()),Hs=b("[Category] Create Category Success",y()),Ws=b("[Category] Create Category Failure",y()),qs=b("[Category] Update Category",y()),Ys=b("[Category] Update Category Success",y()),Ks=b("[Category] Update Category Failure",y()),Xs=b("[Category] Delete Category",y()),Zs=b("[Category] Delete Category Success",y()),Qs=b("[Category] Delete Category Failure",y());var UN=(t,i)=>i.value,Sb=(t,i)=>i.id;function HN(t,i){t&1&&(c(0,"mat-error"),m(1,"Vorname ist erforderlich"),d())}function WN(t,i){t&1&&(c(0,"mat-error"),m(1,"Nachname ist erforderlich"),d())}function qN(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsdatum ist erforderlich"),d())}function YN(t,i){if(t&1&&(c(0,"mat-option",9),m(1),d()),t&2){let e=i.$implicit;w("value",e.value),p(),ce(e.label)}}function KN(t,i){t&1&&(c(0,"mat-error"),m(1,"Geschlecht ist erforderlich"),d())}function XN(t,i){if(t&1&&(c(0,"mat-option",9),m(1),d()),t&2){let e=i.$implicit,n=N();w("value",e.id),p(),Wi("",e.name," (",n.formatRaceDate(e.date),")")}}function ZN(t,i){t&1&&(c(0,"mat-error"),m(1,"Rennen ist erforderlich"),d())}function QN(t,i){if(t&1&&(c(0,"mat-option",9),m(1),d()),t&2){let e=i.$implicit;w("value",e.id),p(),ce(e.name)}}function JN(t,i){if(t&1&&(c(0,"mat-option",9),m(1),d()),t&2){let e=i.$implicit;w("value",e.id),p(),ce(e.name)}}function eF(t,i){t&1&&(c(0,"mat-error"),m(1,"Sekunden: 0-59"),d())}function tF(t,i){t&1&&(c(0,"mat-error"),m(1,"Millisekunden: 0-999"),d())}var Ud=class t{fb=s(In);dialogRef=s(jt);data=s($n);store=s(Ge);destroy$=new F;form;genderOptions=[{value:"MALE",label:or.MALE},{value:"FEMALE",label:or.FEMALE}];races$=this.store.select(si);selectedRaceId$=this.store.select(li);teams$=this.store.select(Xp);categories$=this.store.select(eh);constructor(){let i=this.data?.birthDate||"";if(i&&typeof i=="string"){let n=i.split("-");n.length===3&&(i=new Date(parseInt(n[0]),parseInt(n[1])-1,parseInt(n[2])))}let e=this.splitMilliseconds(this.data?.durationMs);this.form=this.fb.group({firstName:[this.data?.firstName||"",fe.required],lastName:[this.data?.lastName||"",fe.required],birthDate:[i,fe.required],gender:[this.data?.gender||"",fe.required],race:[this.data?.race?.id||"",fe.required],raceNumber:[this.data?.raceNumber??""],teamId:[this.data?.team?.id||null],categoryId:[this.data?.category?.id||null],minutes:[e.minutes,[fe.min(0)]],seconds:[e.seconds,[fe.min(0),fe.max(59)]],milliseconds:[e.milliseconds,[fe.min(0),fe.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt)]})}ngOnInit(){this.store.dispatch(Kr()),this.store.dispatch(Xr()),this.data||this.selectedRaceId$.pipe(Le(1)).subscribe(i=>{i&&this.form.patchValue({race:i})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=i.minutes!==""&&i.minutes!==null||i.seconds!==""&&i.seconds!==null||i.milliseconds!==""&&i.milliseconds!==null,n={raceId:Number(i.race),firstName:i.firstName,lastName:i.lastName,birthDate:this.formatDate(i.birthDate),gender:i.gender,raceNumber:i.raceNumber!==""&&i.raceNumber!==null?Number(i.raceNumber):void 0,teamId:i.teamId?Number(i.teamId):void 0,categoryId:i.categoryId?Number(i.categoryId):void 0,durationMs:e?this.convertToMilliseconds(Number(i.minutes||0),Number(i.seconds||0),Number(i.milliseconds||0)):void 0,measuredAt:e?this.formatDateTimeForBackend(i.measuredAt):void 0};this.dialogRef.close(n)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${a}`}formatRaceDate(i){let e=i.split("-");if(e.length===3){let n=e[0],r=e[1];return`${e[2]}.${r}.${n}`}return i}convertToMilliseconds(i,e,n){return i*60*1e3+e*1e3+n}splitMilliseconds(i){if(i==null)return{minutes:"",seconds:"",milliseconds:""};let e=Math.floor(i/(60*1e3)),n=i%(60*1e3),r=Math.floor(n/1e3),a=n%1e3;return{minutes:e,seconds:r,milliseconds:a}}formatDateTimeForInput(i){return i?this.toLocalISOString(new Date(i)):""}toLocalISOString(i){let e=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0"),a=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0");return`${e}-${n}-${r}T${a}:${o}`}formatDateTimeForBackend(i){let e=i?new Date(i):new Date,n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${n}-${r}-${a}T${o}:${l}:${u}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-participant-dialog"]],decls:87,vars:20,consts:[["picker",""],["mat-dialog-title",""],[1,"participant-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","firstName","required",""],["matInput","","formControlName","lastName","required",""],["matInput","","formControlName","birthDate","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["formControlName","gender","required",""],[3,"value"],["formControlName","race","required",""],["matInput","","type","number","formControlName","raceNumber"],["formControlName","teamId"],["formControlName","categoryId"],[1,"time-section-title"],[1,"time-input-group"],["matInput","","type","number","formControlName","minutes","min","0"],["matInput","","type","number","formControlName","seconds","min","0","max","59"],["matInput","","type","number","formControlName","milliseconds","min","0","max","999"],["matInput","","type","datetime-local","formControlName","measuredAt"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){if(e&1&&(c(0,"h2",1),m(1),d(),c(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Vorname"),d(),A(7,"input",4),Ce(),T(8,HN,2,0,"mat-error"),d(),c(9,"mat-form-field",3)(10,"mat-label"),m(11,"Nachname"),d(),A(12,"input",5),Ce(),T(13,WN,2,0,"mat-error"),d(),c(14,"mat-form-field",3)(15,"mat-label"),m(16,"Geburtsdatum"),d(),A(17,"input",6),Ce(),A(18,"mat-datepicker-toggle",7)(19,"mat-datepicker",null,0),c(21,"mat-hint"),m(22,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),d(),T(23,qN,2,0,"mat-error"),d(),c(24,"mat-form-field",3)(25,"mat-label"),m(26,"Geschlecht"),d(),c(27,"mat-select",8),gt(28,YN,2,2,"mat-option",9,UN),d(),Ce(),T(30,KN,2,0,"mat-error"),d(),c(31,"mat-form-field",3)(32,"mat-label"),m(33,"Rennen"),d(),c(34,"mat-select",10),gt(35,XN,2,3,"mat-option",9,Sb),J(37,"async"),d(),Ce(),T(38,ZN,2,0,"mat-error"),d(),c(39,"mat-form-field",3)(40,"mat-label"),m(41,"Startnummer"),d(),A(42,"input",11),Ce(),d(),c(43,"mat-form-field",3)(44,"mat-label"),m(45,"Team"),d(),c(46,"mat-select",12)(47,"mat-option",9),m(48,"Kein Team"),d(),gt(49,QN,2,2,"mat-option",9,Sb),J(51,"async"),d(),Ce(),d(),c(52,"mat-form-field",3)(53,"mat-label"),m(54,"Kategorie"),d(),c(55,"mat-select",13)(56,"mat-option",9),m(57,"Keine Kategorie"),d(),gt(58,JN,2,2,"mat-option",9,Sb),J(60,"async"),d(),Ce(),d(),c(61,"h3",14),m(62,"Zeit"),d(),c(63,"div",15)(64,"mat-form-field",3)(65,"mat-label"),m(66,"Minuten"),d(),A(67,"input",16),Ce(),d(),c(68,"mat-form-field",3)(69,"mat-label"),m(70,"Sekunden"),d(),A(71,"input",17),Ce(),T(72,eF,2,0,"mat-error"),d(),c(73,"mat-form-field",3)(74,"mat-label"),m(75,"Millisekunden"),d(),A(76,"input",18),Ce(),T(77,tF,2,0,"mat-error"),d()(),c(78,"mat-form-field",3)(79,"mat-label"),m(80,"Gemessen am"),d(),A(81,"input",19),Ce(),d()()(),c(82,"mat-dialog-actions",20)(83,"button",21),D("click",function(){return n.onCancel()}),m(84,"Abbrechen"),d(),c(85,"button",22),D("click",function(){return n.onSave()}),m(86," Speichern "),d()()),e&2){let r=yt(20);p(),ge(" ",n.data?"Teilnehmer bearbeiten":"Neuer Teilnehmer"," "),p(2),w("formGroup",n.form),p(4),Se(),p(),I(n.form.get("firstName")?.hasError("required")&&n.form.get("firstName")?.touched?8:-1),p(4),Se(),p(),I(n.form.get("lastName")?.hasError("required")&&n.form.get("lastName")?.touched?13:-1),p(4),w("matDatepicker",r),Se(),p(),w("for",r),p(5),I(n.form.get("birthDate")?.hasError("required")&&n.form.get("birthDate")?.touched?23:-1),p(4),Se(),p(),_t(n.genderOptions),p(2),I(n.form.get("gender")?.hasError("required")&&n.form.get("gender")?.touched?30:-1),p(4),Se(),p(),_t(ie(37,14,n.races$)),p(3),I(n.form.get("race")?.hasError("required")&&n.form.get("race")?.touched?38:-1),p(4),Se(),p(4),Se(),p(),w("value",null),p(2),_t(ie(51,16,n.teams$)),p(6),Se(),p(),w("value",null),p(2),_t(ie(60,18,n.categories$)),p(9),Se(),p(4),Se(),p(),I(n.form.get("seconds")?.hasError("min")||n.form.get("seconds")?.hasError("max")?72:-1),p(4),Se(),p(),I(n.form.get("milliseconds")?.hasError("min")||n.form.get("milliseconds")?.hasError("max")?77:-1),p(4),Se(),p(4),w("disabled",!n.form.valid)}},dependencies:[$e,Nn,Tn,qt,ar,Kt,kn,Yt,rr,Wr,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,kd,On,Fn,Pe,Ve,Ep,Ap,ms,Fd,Pm,Ci,yi,Tt,dt],styles:[".participant-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.time-section-title[_ngcontent-%COMP%]{margin:0;font-size:14px;font-weight:500;color:#0009}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}"]})};var nF=(t,i)=>i.id;function iF(t,i){if(t&1&&(c(0,"mat-option",5),m(1),d()),t&2){let e=i.$implicit,n=N();w("value",e.id),p(),Wi("",e.name," (",n.formatRaceDate(e.date),")")}}function rF(t,i){if(t&1){let e=Te();c(0,"button",35),D("click",function(){ae(e);let r=N();return oe(r.deleteParticipantsByRace())}),c(1,"mat-icon"),m(2,"delete_sweep"),d(),m(3," Alle Teilnehmer l\xF6schen "),d()}}function aF(t,i){t&1&&A(0,"mat-spinner",11)}function oF(t,i){t&1&&(c(0,"mat-icon"),m(1,"upload_file"),d())}function sF(t,i){if(t&1){let e=Te();c(0,"button",36),D("click",function(){ae(e);let r=N();return oe(r.assignRaceNumbers())}),c(1,"mat-icon"),m(2,"shuffle"),d(),m(3," Startnummern zuweisen "),d(),c(4,"button",37),D("click",function(){ae(e);let r=N();return oe(r.exportStartListPdf())}),c(5,"mat-icon"),m(6,"picture_as_pdf"),d(),m(7," Startliste (PDF) "),d(),c(8,"button",38),J(9,"async"),D("click",function(){ae(e);let r=yt(15);return oe(r.click())}),T(10,aF,1,0,"mat-spinner",11),J(11,"async"),Xt(12,oF,2,0,"mat-icon"),m(13," CSV Import "),d(),c(14,"input",39,1),D("change",function(r){ae(e);let a=N();return oe(a.onCsvFileSelected(r))}),d()}if(t&2){let e=N();p(8),w("disabled",ie(9,2,e.importLoading$)),p(2),I(ie(11,4,e.importLoading$)?10:12)}}function lF(t,i){t&1&&A(0,"mat-spinner",11)}function cF(t,i){t&1&&(c(0,"mat-icon"),m(1,"picture_as_pdf"),d())}function dF(t,i){t&1&&(c(0,"div",13),A(1,"mat-spinner"),d())}function uF(t,i){t&1&&(c(0,"th",40),m(1,"ID"),d())}function mF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function pF(t,i){t&1&&(c(0,"th",40),m(1,"Vorname"),d())}function hF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.firstName," ")}}function fF(t,i){t&1&&(c(0,"th",40),m(1,"Nachname"),d())}function gF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.lastName," ")}}function _F(t,i){t&1&&(c(0,"th",40),m(1," Geburtsdatum "),d())}function bF(t,i){if(t&1&&(c(0,"td",41),m(1),J(2,"date"),d()),t&2){let e=i.$implicit;p(),ge(" ",Ir(2,1,e.birthDate,"dd.MM.yyyy")," ")}}function vF(t,i){t&1&&(c(0,"th",40),m(1," Geschlecht "),d())}function yF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit,n=N();p(),ge(" ",n.getGenderLabel(e.gender)," ")}}function CF(t,i){t&1&&(c(0,"th",40),m(1," Startnummer "),d())}function SF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.raceNumber," ")}}function DF(t,i){t&1&&(c(0,"th",40),m(1,"Team"),d())}function wF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.team?.name||"-"," ")}}function MF(t,i){t&1&&(c(0,"th",40),m(1,"Kategorie"),d())}function xF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.category?.name||"-"," ")}}function AF(t,i){t&1&&(c(0,"th",40),m(1,"Altersgruppe"),d())}function EF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.ageGroup?.name||"-"," ")}}function RF(t,i){t&1&&(c(0,"th",40),m(1,"Rennen"),d())}function kF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.race?.name||"-"," ")}}function TF(t,i){t&1&&(c(0,"th",40),m(1,"Zeit"),d())}function IF(t,i){if(t&1&&(c(0,"td",41),m(1),d()),t&2){let e=i.$implicit,n=N();p(),ge(" ",e.durationMs!==void 0&&e.durationMs!==null?n.formatDuration(e.durationMs):"-"," ")}}function NF(t,i){t&1&&(c(0,"th",40),m(1,"Gemessen am"),d())}function FF(t,i){if(t&1&&(c(0,"td",41),m(1),J(2,"date"),d()),t&2){let e=i.$implicit;p(),ge(" ",e.measuredAt?Ir(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss"):"-"," ")}}function OF(t,i){t&1&&(c(0,"th",42),m(1,"Aktionen"),d())}function PF(t,i){if(t&1){let e=Te();c(0,"td",41)(1,"button",43),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",44),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteParticipant(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function LF(t,i){t&1&&A(0,"tr",45)}function BF(t,i){t&1&&A(0,"tr",46)}var rh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;participants$;races$;selectedRaceId$;loading$;pdfExportLoading$;importLoading$;displayedColumns=["id","firstName","lastName","birthDate","gender","raceNumber","team","category","ageGroup","race","durationMs","measuredAt","actions"];dataSource=new zi([]);sortInitialized=!1;sort=Ln.required(Dt);constructor(){this.participants$=this.store.select(Yp),this.races$=this.store.select(si),this.selectedRaceId$=this.store.select(li),this.loading$=this.store.select(nw),this.pdfExportLoading$=this.store.select(iw),this.importLoading$=this.store.select(rw),this.actions$.pipe(M(hs),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Teilnehmer erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(fs),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen des Teilnehmers: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(_s),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Teilnehmer erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M(bs),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren des Teilnehmers: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(ys),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Teilnehmer erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(Cs),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen des Teilnehmers: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Ds),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Alle Teilnehmer des Rennens erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(ws),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Teilnehmer: ${i}`,"OK",{duration:5e3})}),bt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(x(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(sr()),this.store.dispatch(oi()),this.participants$.pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i}),this.store.select(aw).pipe(x(this.destroy$)).subscribe(i=>{if(!i)return;this.snackBar.open(`CSV Import abgeschlossen: ${i.importedCount} importiert, ${i.skippedCount} \xFCbersprungen`,"OK",{duration:5e3});let e=i.errors??[];if(e.length>0){let n=e.map(r=>`Zeile ${r.lineNumber}: ${r.reason}`).join(`
`);alert(`Folgende Zeilen wurden \xFCbersprungen:

${n}`)}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return or[i]||i}formatRaceDate(i){let e=i.split("-");if(e.length===3){let n=e[0],r=e[1];return`${e[2]}.${r}.${n}`}return i}formatDuration(i){let e=Math.floor(i/1e3),n=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return n>0?`${n}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}onRaceFilterChange(i){this.store.dispatch(Ar({id:i}))}openCreateDialog(){this.dialog.open(Ud,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(ps({participant:e}))})}openEditDialog(i){this.dialog.open(Ud,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(gs({id:i.id,participant:n}))})}deleteParticipant(i){confirm(`M\xF6chten Sie den Teilnehmer "${i.firstName} ${i.lastName}" wirklich l\xF6schen?`)&&this.store.dispatch(vs({id:i.id}))}deleteParticipantsByRace(){this.selectedRaceId$.pipe(Le(1)).subscribe(i=>{if(i===null)return;let e=this.dataSource.data[0]?.race?.name||"diesem Rennen";confirm(`M\xF6chten Sie wirklich ALLE Teilnehmer von "${e}" l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden!`)&&this.store.dispatch(Ss({raceId:i}))})}onCsvFileSelected(i){let e=i.target,n=e.files?.[0];e.value="",n&&this.selectedRaceId$.pipe(Le(1)).subscribe(r=>{if(!r){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(xs({raceId:r,file:n})),this.snackBar.open("CSV Import gestartet...","OK",{duration:2e3})})}refreshData(){this.store.dispatch(sr()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}async assignRaceNumbers(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}confirm("M\xF6chten Sie die Startnummern f\xFCr dieses Rennen wirklich neu zuweisen? Bereits vergebene Startnummern werden \xFCberschrieben.")&&(this.store.dispatch(Ms({raceId:i})),this.snackBar.open("Startnummern werden zugewiesen...","OK",{duration:2e3}))}async exportStartListPdf(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(As({raceId:i})),this.snackBar.open("PDF Export gestartet: Startliste","OK",{duration:2e3})}async exportAllPdf(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Es({raceId:i})),this.snackBar.open("PDF Export gestartet: Gesamtwertung","OK",{duration:2e3})}async exportByGenderPdf(i){let e=await Tr(this.selectedRaceId$);if(!e){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Rs({gender:i,raceId:e}));let n=i==="MALE"?"Herren":"Damen";this.snackBar.open(`PDF Export gestartet: Alle ${n}`,"OK",{duration:2e3})}async exportAllAgeGroupsPdf(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(ks({raceId:i})),this.snackBar.open("PDF Export gestartet: Nach Altersklassen","OK",{duration:2e3})}async exportAllByCategoryPdf(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Ts({raceId:i})),this.snackBar.open("PDF Export gestartet: Gesamtwertung nach Kategorie","OK",{duration:2e3})}async exportByGenderByCategoryPdf(i){let e=await Tr(this.selectedRaceId$);if(!e){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Is({gender:i,raceId:e}));let n=i==="MALE"?"Herren":"Damen";this.snackBar.open(`PDF Export gestartet: Alle ${n} nach Kategorie`,"OK",{duration:2e3})}async exportAllAgeGroupsByCategoryPdf(){let i=await Tr(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Ns({raceId:i})),this.snackBar.open("PDF Export gestartet: Nach Altersklassen und Kategorie","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-participant-list"]],viewQuery:function(e,n){e&1&&pi(n.sort,Dt,5),e&2&&ei()},decls:130,vars:34,consts:[["exportMenu","matMenu"],["fileInput",""],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen"],[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],["mat-raised-button","","color","accent","matTooltip","PDF Export Optionen",3,"matMenuTriggerFor","disabled"],["diameter","20",2,"display","inline-block","margin-right","8px"],["mat-menu-item","",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","","matSort","",1,"participant-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","birthDate"],["matColumnDef","gender"],["matColumnDef","raceNumber"],["matColumnDef","team"],["matColumnDef","category"],["matColumnDef","ageGroup"],["matColumnDef","race"],["matColumnDef","durationMs"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen",3,"click"],["mat-raised-button","","matTooltip","Startnummern innerhalb der Altersklassen zuf\xE4llig zuweisen",3,"click"],["mat-raised-button","","color","accent","matTooltip","Startliste als PDF exportieren",3,"click"],["mat-raised-button","","matTooltip","Teilnehmer aus CSV importieren (Lastname,Firstname,Birthdate,Team,Gender)",3,"click","disabled"],["type","file","accept",".csv,text/csv","hidden","",3,"change"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){if(e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Teilnehmer"),d()(),c(4,"mat-card-content")(5,"div",2)(6,"mat-form-field",3)(7,"mat-label"),m(8,"Nach Rennen filtern"),d(),c(9,"mat-select",4),J(10,"async"),D("selectionChange",function(a){return n.onRaceFilterChange(a.value)}),c(11,"mat-option",5),m(12,"Alle Rennen"),d(),gt(13,iF,2,3,"mat-option",5,nF),J(15,"async"),d()(),T(16,rF,4,0,"button",6),J(17,"async"),d(),c(18,"div",7)(19,"button",8),D("click",function(){return n.openCreateDialog()}),c(20,"mat-icon"),m(21,"add"),d(),m(22," Neuer Teilnehmer "),d(),c(23,"button",9),D("click",function(){return n.refreshData()}),c(24,"mat-icon"),m(25,"refresh"),d(),m(26," Aktualisieren "),d(),T(27,sF,16,6),J(28,"async"),c(29,"button",10),J(30,"async"),T(31,lF,1,0,"mat-spinner",11),J(32,"async"),Xt(33,cF,2,0,"mat-icon"),m(34," PDF Export "),c(35,"mat-icon"),m(36,"arrow_drop_down"),d()(),c(37,"mat-menu",null,0)(39,"button",12),D("click",function(){return n.exportAllPdf()}),c(40,"mat-icon"),m(41,"groups"),d(),c(42,"span"),m(43,"Gesamtwertung (Alle)"),d()(),c(44,"button",12),D("click",function(){return n.exportAllByCategoryPdf()}),c(45,"mat-icon"),m(46,"category"),d(),c(47,"span"),m(48,"Gesamtwertung (Alle) nach Kategorie"),d()(),A(49,"mat-divider"),c(50,"button",12),D("click",function(){return n.exportByGenderPdf("MALE")}),c(51,"mat-icon"),m(52,"male"),d(),c(53,"span"),m(54,"Alle Herren"),d()(),c(55,"button",12),D("click",function(){return n.exportByGenderByCategoryPdf("MALE")}),c(56,"mat-icon"),m(57,"category"),d(),c(58,"span"),m(59,"Alle Herren nach Kategorie"),d()(),c(60,"button",12),D("click",function(){return n.exportByGenderPdf("FEMALE")}),c(61,"mat-icon"),m(62,"female"),d(),c(63,"span"),m(64,"Alle Damen"),d()(),c(65,"button",12),D("click",function(){return n.exportByGenderByCategoryPdf("FEMALE")}),c(66,"mat-icon"),m(67,"category"),d(),c(68,"span"),m(69,"Alle Damen nach Kategorie"),d()(),A(70,"mat-divider"),c(71,"button",12),D("click",function(){return n.exportAllAgeGroupsPdf()}),c(72,"mat-icon"),m(73,"view_list"),d(),c(74,"span"),m(75,"Nach Altersklassen aufgeteilt"),d()(),c(76,"button",12),D("click",function(){return n.exportAllAgeGroupsByCategoryPdf()}),c(77,"mat-icon"),m(78,"category"),d(),c(79,"span"),m(80,"Nach Altersklassen aufgeteilt nach Kategorie"),d()()()(),T(81,dF,2,0,"div",13),J(82,"async"),c(83,"div",14)(84,"table",15),J(85,"async"),me(86,16),j(87,uF,2,0,"th",17)(88,mF,2,1,"td",18),pe(),me(89,19),j(90,pF,2,0,"th",17)(91,hF,2,1,"td",18),pe(),me(92,20),j(93,fF,2,0,"th",17)(94,gF,2,1,"td",18),pe(),me(95,21),j(96,_F,2,0,"th",17)(97,bF,3,4,"td",18),pe(),me(98,22),j(99,vF,2,0,"th",17)(100,yF,2,1,"td",18),pe(),me(101,23),j(102,CF,2,0,"th",17)(103,SF,2,1,"td",18),pe(),me(104,24),j(105,DF,2,0,"th",17)(106,wF,2,1,"td",18),pe(),me(107,25),j(108,MF,2,0,"th",17)(109,xF,2,1,"td",18),pe(),me(110,26),j(111,AF,2,0,"th",17)(112,EF,2,1,"td",18),pe(),me(113,27),j(114,RF,2,0,"th",17)(115,kF,2,1,"td",18),pe(),me(116,28),j(117,TF,2,0,"th",17)(118,IF,2,1,"td",18),pe(),me(119,29),j(120,NF,2,0,"th",17)(121,FF,3,4,"td",18),pe(),me(122,30),j(123,OF,2,0,"th",31)(124,PF,7,0,"td",18),pe(),j(125,LF,1,0,"tr",32)(126,BF,1,0,"tr",33),d()(),c(127,"div",34),J(128,"async"),m(129),d()()()),e&2){let r=yt(38);p(9),w("value",ie(10,16,n.selectedRaceId$)),p(2),w("value",null),p(2),_t(ie(15,18,n.races$)),p(3),I(ie(17,20,n.selectedRaceId$)!==null?16:-1),p(11),I(ie(28,22,n.selectedRaceId$)!==null?27:-1),p(2),w("matMenuTriggerFor",r)("disabled",ie(30,24,n.pdfExportLoading$)),p(2),I(ie(32,26,n.pdfExportLoading$)?31:33),p(50),I(ie(82,28,n.loading$)?81:-1),p(3),V("hidden",ie(85,30,n.loading$)),w("dataSource",n.dataSource),p(41),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns),p(),V("hidden",ie(128,32,n.loading$)),p(2),ge(" Anzahl der Teilnehmer: ",n.dataSource.data.length," ")}},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,xr,Dt,Mr,Ci,ft,pt,yi,Tt,ot,Wo,Cr,Ur,Ho,Tp,ew,dt,Or],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.participant-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}"]})};var lw=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[jr,we]})}return t})();var VF=["switch"],$F=["*"];function jF(t,i){t&1&&(c(0,"span",11),Gn(),c(1,"svg",13),A(2,"path",14),d(),c(3,"svg",15),A(4,"path",16),d()())}var GF=new S("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),ah=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Db=(()=>{class t{_elementRef=s(U);_focusMonitor=s(Wn);_changeDetectorRef=s(Ee);defaults=s(GF);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ah(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=He();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new B;toggleChange=new B;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(ut).load(_i);let e=s(new Fi("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=s(Xe).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ah(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(n,r){if(n&1&&Ke(VF,5),n&2){let a;H(a=W())&&(r._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(n,r){n&2&&(Et("id",r.id),le("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ct(r.color?"mat-"+r.color:""),V("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("mat-slide-toggle-full-width",r.fullWidth)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",$],color:"color",disabled:[2,"disabled","disabled",$],fullWidth:[2,"fullWidth","fullWidth",$],disableRipple:[2,"disableRipple","disableRipple",$],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:zn(e)],checked:[2,"checked","checked",$],hideIcon:[2,"hideIcon","hideIcon",$],disabledInteractive:[2,"disabledInteractive","disabledInteractive",$]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Ae([{provide:Rr,useExisting:cn(()=>t),multi:!0},{provide:ir,useExisting:t,multi:!0}]),Ue],ngContentSelectors:$F,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,r){if(n&1&&(Be(),c(0,"div",1)(1,"button",2,0),D("click",function(){return r._handleClick()}),A(3,"div",3)(4,"span",4),c(5,"span",5)(6,"span",6)(7,"span",7),A(8,"span",8),d(),c(9,"span",9),A(10,"span",10),d(),T(11,jF,5,0,"span",11),d()()(),c(12,"label",12),D("click",function(o){return o.stopPropagation()}),de(13),d()()),n&2){let a=yt(2);w("labelPosition",r.labelPosition),p(),V("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),w("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),le("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(9),w("matRippleTrigger",a)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),I(r.hideIcon?-1:11),p(),w("for",r.buttonId),le("id",r._labelId)}},dependencies:[Gr,cC],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})(),cw=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Db,we]})}return t})();var ga=b("[Measurement] Load Measurements"),oh=b("[Measurement] Load Measurements Success",y()),sh=b("[Measurement] Load Measurements Failure",y()),lh=b("[Measurement] Load Measurements By Participant",y()),ch=b("[Measurement] Load Measurements By Participant Success",y()),dh=b("[Measurement] Load Measurements By Participant Failure",y()),uh=b("[Measurement] Load Measurement",y()),mh=b("[Measurement] Load Measurement Success",y()),ph=b("[Measurement] Load Measurement Failure",y()),Js=b("[Measurement] Create Measurement",y()),hh=b("[Measurement] Create Measurement Success",y()),fh=b("[Measurement] Create Measurement Failure",y()),el=b("[Measurement] Update Measurement",y()),gh=b("[Measurement] Update Measurement Success",y()),_h=b("[Measurement] Update Measurement Failure",y()),tl=b("[Measurement] Delete Measurement",y()),bh=b("[Measurement] Delete Measurement Success",y()),vh=b("[Measurement] Delete Measurement Failure",y()),dw=b("[Measurement] Select Measurement",y()),nl=b("[Measurement] Reset Measurements",y()),Za=b("[Measurement] Reset Measurements Success"),il=b("[Measurement] Reset Measurements Failure",y()),rl=b("[Measurement] Set Continuous Mode",y()),Qa=b("[Measurement] Set Continuous Mode Success",y()),al=b("[Measurement] Set Continuous Mode Failure",y()),ol=b("[Measurement] Set Scheduled Import",y()),sl=b("[Measurement] Set Scheduled Import Success",y()),ll=b("[Measurement] Set Scheduled Import Failure",y()),cl=b("[Measurement] Load Scheduled Import Status"),yh=b("[Measurement] Load Scheduled Import Status Success",y()),Ch=b("[Measurement] Load Scheduled Import Status Failure",y()),dl=b("[Measurement] Archive Measurements",y()),Ja=b("[Measurement] Archive Measurements Success",y()),ul=b("[Measurement] Archive Measurements Failure",y()),_a=b("[Measurement] Load Device Status"),ml=b("[Measurement] Load Device Status Success",y()),pl=b("[Measurement] Load Device Status Failure",y()),hl=b("[Measurement] Discard Oldest Start"),fl=b("[Measurement] Discard Oldest Start Success",y()),gl=b("[Measurement] Discard Oldest Start Failure",y()),_l=b("[Measurement] Export Measurements"),bl=b("[Measurement] Export Measurements Success"),vl=b("[Measurement] Export Measurements Failure",y()),yl=b("[Measurement] Import Measurements From Json",y()),Cl=b("[Measurement] Import Measurements From Json Success",y()),Sl=b("[Measurement] Import Measurements From Json Failure",y()),Dl=b("[Measurement] Start Device Connection Polling"),wl=b("[Measurement] Stop Device Connection Polling"),Hd=b("[Measurement] Check Device Connection"),Ml=b("[Measurement] Check Device Connection Success",y()),Sh=b("[Measurement] Check Device Connection Failure",y());var Zr=fn("measurement"),wh=he(Zr,t=>t.measurements),uw=he(Zr,t=>t.loading),BK=he(Zr,t=>t.error),UF=he(Zr,t=>t.selectedMeasurementId),VK=he(wh,UF,(t,i)=>i?t.find(e=>e.id===i):null);var $K=he(wh,Fs,li,(t,i,e)=>{if(!e)return t;let n=i.filter(r=>r.race?.id===e).map(r=>r.id);return t.filter(r=>r.participantId&&n.includes(r.participantId))}),mw=he(Zr,t=>t.continuousModeEnabled),pw=he(Zr,t=>t.scheduledImportEnabled),hw=he(Zr,t=>t.deviceStatus),fw=he(Zr,t=>t.deviceConnected),jK=he(Zr,t=>t.isPollingDeviceConnection);function HF(t,i){t&1&&(c(0,"mat-error"),m(1,"Minuten erforderlich"),d())}function WF(t,i){t&1&&(c(0,"mat-error"),m(1,"Minuten m\xFCssen >= 0 sein"),d())}function qF(t,i){t&1&&(c(0,"mat-error"),m(1,"Sekunden erforderlich"),d())}function YF(t,i){t&1&&(c(0,"mat-error"),m(1,"Sekunden: 0-59"),d())}function KF(t,i){t&1&&(c(0,"mat-error"),m(1,"Millisekunden erforderlich"),d())}function XF(t,i){t&1&&(c(0,"mat-error"),m(1,"Millisekunden: 0-999"),d())}function ZF(t,i){t&1&&(c(0,"mat-error"),m(1,"Messzeit ist erforderlich"),d())}var Wd=class t{fb=s(In);dialogRef=s(jt);data=s($n);form;constructor(){let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[i.minutes,[fe.required,fe.min(0)]],seconds:[i.seconds,[fe.required,fe.min(0),fe.max(59)]],milliseconds:[i.milliseconds,[fe.required,fe.min(0),fe.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),fe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,n={durationMs:this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(n)}}formatDateTimeForInput(i){if(!i){let n=new Date;return this.toLocalISOString(n)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){let e=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0"),a=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0");return`${e}-${n}-${r}T${a}:${o}`}formatDateTimeForBackend(i){let e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${n}-${r}-${a}T${o}:${l}:${u}`}convertToMilliseconds(i,e,n){return i*60*1e3+e*1e3+n}splitMilliseconds(i){let e=Math.floor(i/6e4),n=i%(60*1e3),r=Math.floor(n/1e3),a=n%1e3;return{minutes:e,seconds:r,milliseconds:a}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-measurement-dialog"]],decls:33,vars:10,consts:[["mat-dialog-title",""],[1,"measurement-form",3,"formGroup"],[1,"time-input-group"],["appearance","outline"],["matInput","","type","number","formControlName","minutes","min","0","required",""],["matInput","","type","number","formControlName","seconds","min","0","max","59","required",""],["matInput","","type","number","formControlName","milliseconds","min","0","max","999","required",""],["matInput","","type","datetime-local","formControlName","measuredAt","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){e&1&&(c(0,"h2",0),m(1),d(),c(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),m(7,"Minuten"),d(),A(8,"input",4),Ce(),T(9,HF,2,0,"mat-error"),T(10,WF,2,0,"mat-error"),d(),c(11,"mat-form-field",3)(12,"mat-label"),m(13,"Sekunden"),d(),A(14,"input",5),Ce(),T(15,qF,2,0,"mat-error"),T(16,YF,2,0,"mat-error"),d(),c(17,"mat-form-field",3)(18,"mat-label"),m(19,"Millisekunden"),d(),A(20,"input",6),Ce(),T(21,KF,2,0,"mat-error"),T(22,XF,2,0,"mat-error"),d()(),c(23,"mat-form-field",3)(24,"mat-label"),m(25,"Gemessen am (ISO Format)"),d(),A(26,"input",7),Ce(),T(27,ZF,2,0,"mat-error"),d()()(),c(28,"mat-dialog-actions",8)(29,"button",9),D("click",function(){return n.onCancel()}),m(30,"Abbrechen"),d(),c(31,"button",10),D("click",function(){return n.onSave()}),m(32," Speichern "),d()()),e&2&&(p(),ce(n.data?"Messung bearbeiten":"Neue Messung"),p(2),w("formGroup",n.form),p(5),Se(),p(),I(n.form.get("minutes")?.hasError("required")&&n.form.get("minutes")?.touched?9:-1),p(),I(n.form.get("minutes")?.hasError("min")?10:-1),p(4),Se(),p(),I(n.form.get("seconds")?.hasError("required")&&n.form.get("seconds")?.touched?15:-1),p(),I(n.form.get("seconds")?.hasError("min")||n.form.get("seconds")?.hasError("max")?16:-1),p(4),Se(),p(),I(n.form.get("milliseconds")?.hasError("required")&&n.form.get("milliseconds")?.touched?21:-1),p(),I(n.form.get("milliseconds")?.hasError("min")||n.form.get("milliseconds")?.hasError("max")?22:-1),p(4),Se(),p(),I(n.form.get("measuredAt")?.hasError("required")&&n.form.get("measuredAt")?.touched?27:-1),p(4),w("disabled",!n.form.valid))},dependencies:[$e,Nn,Tn,qt,ar,Kt,kn,Yt,rr,Wr,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,an,On,Fn,Pe,Ve],styles:[".measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var QF=["jsonImportInput"],_w=()=>[],JF=(t,i)=>i.id;function eO(t,i){t&1&&(c(0,"mat-icon",6),m(1,"sync "),d())}function tO(t,i){if(t&1&&(c(0,"mat-icon",7),m(1,"sync "),d()),t&2){let e=N();w("matTooltip",Rv("Letzte Aktualisierung: ",e.lastUpdate))}}function nO(t,i){if(t&1&&(c(0,"mat-option",12),m(1),d()),t&2){let e=i.$implicit,n=N();w("value",e.id),p(),Wi("",e.name," (",n.formatRaceDate(e.date),") ")}}function iO(t,i){if(t&1){let e=Te();c(0,"button",41),D("click",function(){ae(e);let r=N();return oe(r.toggleContinuousMode(!1))}),c(1,"mat-icon"),m(2,"stop"),d(),m(3," Kontinuierlich AUS "),d()}}function rO(t,i){if(t&1){let e=Te();c(0,"button",42),D("click",function(){ae(e);let r=N();return oe(r.toggleContinuousMode(!0))}),c(1,"mat-icon"),m(2,"play_arrow"),d(),m(3," Kontinuierlich AN "),d()}}function aO(t,i){if(t&1){let e=Te();c(0,"button",43),D("click",function(){ae(e);let r=N();return oe(r.discardOldestStart())}),c(1,"mat-icon"),m(2,"person_off"),d(),m(3," Sturz signalisieren "),d()}}function oO(t,i){if(t&1){let e=Te();c(0,"button",44),D("click",function(){ae(e);let r=N();return oe(r.toggleScheduledImport(!1))}),c(1,"mat-icon"),m(2,"cloud_sync"),d(),m(3," Auto-Import AUS "),d()}}function sO(t,i){if(t&1){let e=Te();c(0,"button",45),D("click",function(){ae(e);let r=N();return oe(r.toggleScheduledImport(!0))}),c(1,"mat-icon"),m(2,"cloud_download"),d(),m(3," Auto-Import AN "),d()}}function lO(t,i){t&1&&(c(0,"div",29),A(1,"mat-spinner",46),d())}function cO(t,i){t&1&&(c(0,"th",47),m(1,"ID"),d())}function dO(t,i){if(t&1&&(c(0,"td",48),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function uO(t,i){t&1&&(c(0,"th",47),m(1,"Dauer"),d())}function mO(t,i){if(t&1&&(c(0,"td",48),m(1),d()),t&2){let e=i.$implicit,n=N();p(),ge(" ",n.formatDuration(e.durationMs)," ")}}function pO(t,i){t&1&&(c(0,"th",47),m(1,"Gemessen am"),d())}function hO(t,i){if(t&1&&(c(0,"td",48),m(1),J(2,"date"),d()),t&2){let e=i.$implicit;p(),ge(" ",Ir(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss")," ")}}function fO(t,i){t&1&&(c(0,"th",47),m(1,"Aktionen"),d())}function gO(t,i){if(t&1){let e=Te();c(0,"td",48)(1,"button",49),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",50),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteMeasurement(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function _O(t,i){t&1&&A(0,"tr",51)}function bO(t,i){t&1&&A(0,"tr",52)}var Mh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;autoRefresh$=new F;measurements$;races$;selectedRaceId$;loading$;continuousModeEnabled$;scheduledImportEnabled$;deviceStatus$;displayedColumns=["id","duration","measuredAt","actions"];lastUpdate="";autoRefreshEnabled=!1;lastResetDevice=!1;lastArchiveResetDevice=!1;lastArchiveClearAfterArchive=!0;jsonImportInput=Ln.required("jsonImportInput");constructor(){this.measurements$=this.store.select(wh),this.races$=this.store.select(si),this.selectedRaceId$=this.store.select(li),this.loading$=this.store.select(uw),this.continuousModeEnabled$=this.store.select(mw),this.scheduledImportEnabled$=this.store.select(pw),this.deviceStatus$=this.store.select(hw),this.actions$.pipe(M(Za),x(this.destroy$)).subscribe(()=>{let i=this.lastResetDevice?"Alle Messungen wurden gel\xF6scht (inkl. Ger\xE4t)":"Alle Messungen wurden gel\xF6scht (nur Datenbank)";this.snackBar.open(i,"OK",{duration:3e3})}),this.actions$.pipe(M(il),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim L\xF6schen der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(Qa),x(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Kontinuierlicher Modus aktiviert":"Kontinuierlicher Modus deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(M(al),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des kontinuierlichen Modus","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(sl),x(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Automatischer Import aktiviert (alle 5 Sekunden)":"Automatischer Import deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(M(ll),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des automatischen Imports","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(Ja),x(this.destroy$)).subscribe(()=>{let i=this.lastArchiveClearAfterArchive?this.lastArchiveResetDevice?"Messungen archiviert und Ger\xE4t zur\xFCckgesetzt. Bereit f\xFCr das n\xE4chste Rennen.":"Messungen archiviert. Bereit f\xFCr das n\xE4chste Rennen.":"Messungen archiviert. Datenbank und Ger\xE4t wurden nicht ver\xE4ndert.";this.snackBar.open(i,"OK",{duration:3e3})}),this.actions$.pipe(M(ul),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Archivieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(ml),x(this.destroy$)).subscribe(({status:i})=>{console.log("Device status loaded:",i)}),this.actions$.pipe(M(pl),x(this.destroy$)).subscribe(()=>{}),this.actions$.pipe(M(Ml),x(this.destroy$)).subscribe(({connected:i})=>{i&&this.store.dispatch(_a())}),this.actions$.pipe(M(fl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("\xC4ltester Start erfolgreich verworfen","OK",{duration:3e3})}),this.actions$.pipe(M(gl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Verwerfen des \xE4ltesten Starts","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(Qa),x(this.destroy$)).subscribe(()=>{this.store.dispatch(_a())}),this.actions$.pipe(M(bl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Messungen erfolgreich exportiert","OK",{duration:3e3})}),this.actions$.pipe(M(vl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Exportieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(Cl),x(this.destroy$)).subscribe(({count:i})=>{this.snackBar.open(`${i} Messung(en) erfolgreich importiert`,"OK",{duration:3e3}),this.loadData()}),this.actions$.pipe(M(Sl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Importieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(cl()),this.store.dispatch(_a()),this.autoRefresh$.pipe(ze(i=>i?pu(2e3):Pt),x(this.destroy$)).subscribe(()=>{this.loadData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?"Automatische Aktualisierung aktiviert":"Automatische Aktualisierung deaktiviert";this.snackBar.open(i,"OK",{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open("Daten wurden aktualisiert","OK",{duration:2e3})}loadData(){this.store.dispatch(ga()),this.store.dispatch(oi()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString("de-DE")}formatDuration(i){let e=Math.floor(i/1e3),n=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return n>0?`${n}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}openCreateDialog(){this.dialog.open(Wd,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(Js({measurement:e})),this.snackBar.open("Messung erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Wd,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&(this.store.dispatch(el({id:i.id,measurement:n})),this.snackBar.open("Messung erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteMeasurement(i){confirm(`M\xF6chten Sie die Messung #${i.id} wirklich l\xF6schen?`)&&(this.store.dispatch(tl({id:i.id})),this.snackBar.open("Messung erfolgreich gel\xF6scht","OK",{duration:3e3}))}onRaceFilterChange(i){this.store.dispatch(Ar({id:i}))}formatRaceDate(i){let e=i.split("-");if(e.length===3){let n=e[0],r=e[1];return`${e[2]}.${r}.${n}`}return i}resetMeasurements(i){confirm(i?"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen? Dies betrifft auch die Messungen auf dem Ger\xE4t!":"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen (nur aus der Datenbank)?")&&(this.lastResetDevice=i,this.store.dispatch(nl({resetDevice:i})))}toggleContinuousMode(i){this.store.dispatch(rl({enable:i}))}toggleScheduledImport(i){this.store.dispatch(ol({enable:i}))}archiveMeasurements(i,e){this.selectedRaceId$.pipe(Le(1)).subscribe(n=>{if(!n){this.snackBar.open("Bitte zuerst ein Rennen im Filter ausw\xE4hlen","OK",{duration:4e3,panelClass:"error-snackbar"});return}confirm(e?i?"M\xF6chten Sie die aktuellen Messungen wirklich archivieren und das Ger\xE4t zur\xFCcksetzen? Danach kann sofort das n\xE4chste Rennen gemessen werden.":"M\xF6chten Sie die aktuellen Messungen wirklich archivieren (nur Datenbank)? Danach kann sofort das n\xE4chste Rennen gemessen werden.":"M\xF6chten Sie die aktuellen Messungen f\xFCr dieses Rennen archivieren? Datenbank und Ger\xE4t werden dabei NICHT ver\xE4ndert, das k\xF6nnen Sie bei Bedarf sp\xE4ter manuell erledigen.")&&(this.lastArchiveResetDevice=i,this.lastArchiveClearAfterArchive=e,this.store.dispatch(dl({raceId:n,resetDevice:i,clearAfterArchive:e})))})}discardOldestStart(){confirm("M\xF6chten Sie den \xE4ltesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein L\xE4ufer gest\xFCrzt ist.")&&this.store.dispatch(hl())}exportMeasurements(){this.store.dispatch(_l())}triggerJsonImport(){this.jsonImportInput().nativeElement.value="",this.jsonImportInput().nativeElement.click()}onJsonFileSelected(i){let n=i.target.files?.[0];if(!n)return;let r=new FileReader;r.onload=a=>{try{let o=a.target?.result,l=JSON.parse(o);if(!Array.isArray(l)){this.snackBar.open("Ung\xFCltiges JSON-Format: Array erwartet","OK",{duration:5e3,panelClass:"error-snackbar"});return}this.store.dispatch(yl({measurements:l}))}catch{this.snackBar.open("Fehler beim Lesen der JSON-Datei","OK",{duration:5e3,panelClass:"error-snackbar"})}},r.readAsText(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-measurement-list"]],viewQuery:function(e,n){e&1&&pi(n.jsonImportInput,QF,5),e&2&&ei()},decls:122,vars:39,consts:[["archiveMenu","matMenu"],["jsonImportInput",""],["resetMenu","matMenu"],[1,"title-row"],[1,"sync-status"],["color","primary","matTooltip","Automatische Aktualisierung",3,"ngModelChange","change","ngModel"],["matTooltip","Aktualisiere...",1,"sync-icon","syncing"],[1,"sync-icon",3,"matTooltip"],[1,"last-update-text"],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],[1,"header-actions"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent","matTooltip","Aktuelle Messungen f\xFCr das gew\xE4hlte Rennen archivieren und Messtabelle leeren",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-raised-button","","matTooltip","Alle Messungen als JSON-Datei herunterladen",3,"click"],["mat-raised-button","","matTooltip","Messungen aus JSON-Datei importieren",3,"click"],["type","file","accept",".json,application/json",2,"display","none",3,"change"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren",1,"active-mode"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren"],["mat-raised-button","","color","warn","matTooltip","\xC4ltesten Start verwerfen (bei Sturz des L\xE4ufers)"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)",1,"active-mode"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)"],[1,"button-group","reset-group"],["mat-raised-button","","color","warn","matTooltip","Alle Messungen zur\xFCcksetzen",3,"matMenuTriggerFor"],[1,"loading-overlay"],[1,"table-container"],["mat-table","",1,"measurement-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","duration"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren",1,"active-mode",3,"click"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren",3,"click"],["mat-raised-button","","color","warn","matTooltip","\xC4ltesten Start verwerfen (bei Sturz des L\xE4ufers)",3,"click"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)",1,"active-mode",3,"click"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)",3,"click"],["diameter","30"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){if(e&1){let r=Te();c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title")(3,"div",3)(4,"span"),m(5,"Messungen"),d(),c(6,"div",4)(7,"mat-slide-toggle",5),po("ngModelChange",function(o){return ae(r),mo(n.autoRefreshEnabled,o)||(n.autoRefreshEnabled=o),oe(o)}),D("change",function(){return n.onAutoRefreshToggle()}),d(),Ce(),T(8,eO,2,0,"mat-icon",6),J(9,"async"),Xt(10,tO,2,2,"mat-icon",7),c(11,"span",8),m(12),d()()()()(),c(13,"mat-card-content")(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),m(17,"Nach Rennen filtern"),d(),c(18,"mat-select",11),J(19,"async"),D("selectionChange",function(o){return n.onRaceFilterChange(o.value)}),c(20,"mat-option",12),m(21,"Alle Rennen"),d(),gt(22,nO,2,3,"mat-option",12,JF),J(24,"async"),d()()(),c(25,"div",13)(26,"div",14)(27,"button",15),D("click",function(){return n.openCreateDialog()}),c(28,"mat-icon"),m(29,"add"),d(),m(30," Neue Messung "),d(),c(31,"button",16),D("click",function(){return n.manualRefresh()}),c(32,"mat-icon"),m(33,"refresh"),d(),m(34," Manuell aktualisieren "),d()(),c(35,"div",14)(36,"button",17)(37,"mat-icon"),m(38,"archive"),d(),m(39," Archivieren "),c(40,"mat-icon"),m(41,"arrow_drop_down"),d()(),c(42,"mat-menu",null,0)(44,"button",18),D("click",function(){return n.archiveMeasurements(!1,!0)}),c(45,"mat-icon"),m(46,"archive"),d(),c(47,"span"),m(48,"Archivieren (nur Datenbank)"),d()(),c(49,"button",18),D("click",function(){return n.archiveMeasurements(!0,!0)}),c(50,"mat-icon"),m(51,"archive"),d(),c(52,"span"),m(53,"Archivieren (inkl. Ger\xE4t-Reset)"),d()(),c(54,"button",18),D("click",function(){return n.archiveMeasurements(!1,!1)}),c(55,"mat-icon"),m(56,"content_copy"),d(),c(57,"span"),m(58,"Archivieren (ohne L\xF6schen)"),d()()()(),c(59,"div",14)(60,"button",19),D("click",function(){return n.exportMeasurements()}),c(61,"mat-icon"),m(62,"download"),d(),m(63," JSON Export "),d(),c(64,"button",20),D("click",function(){return n.triggerJsonImport()}),c(65,"mat-icon"),m(66,"upload"),d(),m(67," JSON Import "),d(),c(68,"input",21,1),D("change",function(o){return n.onJsonFileSelected(o)}),d()(),c(70,"div",14),T(71,iO,4,0,"button",22),J(72,"async"),Xt(73,rO,4,0,"button",23),T(74,aO,4,0,"button",24),J(75,"async"),d(),c(76,"div",14),T(77,oO,4,0,"button",25),J(78,"async"),Xt(79,sO,4,0,"button",26),d(),c(80,"div",27)(81,"button",28)(82,"mat-icon"),m(83,"delete_sweep"),d(),m(84," Zur\xFCcksetzen "),c(85,"mat-icon"),m(86,"arrow_drop_down"),d()(),c(87,"mat-menu",null,2)(89,"button",18),D("click",function(){return n.resetMeasurements(!1)}),c(90,"mat-icon"),m(91,"delete_sweep"),d(),c(92,"span"),m(93,"Alle Messungen l\xF6schen (nur Datenbank)"),d()(),c(94,"button",18),D("click",function(){return n.resetMeasurements(!0)}),c(95,"mat-icon"),m(96,"delete_forever"),d(),c(97,"span"),m(98,"Alle l\xF6schen (inkl. Ger\xE4t)"),d()()()()(),T(99,lO,2,0,"div",29),J(100,"async"),c(101,"div",30)(102,"table",31),J(103,"async"),J(104,"async"),me(105,32),j(106,cO,2,0,"th",33)(107,dO,2,1,"td",34),pe(),me(108,35),j(109,uO,2,0,"th",33)(110,mO,2,1,"td",34),pe(),me(111,36),j(112,pO,2,0,"th",33)(113,hO,3,4,"td",34),pe(),me(114,37),j(115,fO,2,0,"th",33)(116,gO,7,0,"td",34),pe(),j(117,_O,1,0,"tr",38)(118,bO,1,0,"tr",39),d()(),c(119,"div",40),m(120),J(121,"async"),d()()()}if(e&2){let r=yt(43),a=yt(88);p(7),uo("ngModel",n.autoRefreshEnabled),Se(),p(),I(ie(9,17,n.loading$)?8:10),p(4),ce(n.lastUpdate),p(6),w("value",ie(19,19,n.selectedRaceId$)),p(2),w("value",null),p(2),_t(ie(24,21,n.races$)),p(14),w("matMenuTriggerFor",r),p(35),I(ie(72,23,n.deviceStatus$)==="continuous"?71:73),p(3),I(ie(75,25,n.deviceStatus$)==="normal"?74:-1),p(3),I(ie(78,27,n.scheduledImportEnabled$)?77:79),p(4),w("matMenuTriggerFor",a),p(18),I(ie(100,29,n.loading$)?99:-1),p(3),V("loading",ie(103,31,n.loading$)),w("dataSource",ie(104,33,n.measurements$)||qi(37,_w)),p(15),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns),p(2),ge(" Anzahl der Messungen: ",(ie(121,35,n.measurements$)||qi(38,_w)).length," ")}},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,lw,cw,Db,Wo,Cr,Ur,Ho,Tp,bD,Kt,lb,Ci,ft,pt,yi,Tt,ot,dt,Or],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:16px;position:relative;flex-wrap:wrap;align-items:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:8px;padding-right:16px;border-right:1px solid rgba(0,0,0,.12)}.button-group[_ngcontent-%COMP%]:last-child{border-right:none}.reset-group[_ngcontent-%COMP%]{margin-left:auto;padding-right:0}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.menu-section-header[_ngcontent-%COMP%]{opacity:.7;cursor:default!important}.menu-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}.header-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:8px}.button-group[_ngcontent-%COMP%]{flex-wrap:wrap;padding-right:0;border-right:none;border-bottom:1px solid rgba(0,0,0,.12);padding-bottom:8px}.button-group[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.reset-group[_ngcontent-%COMP%]{margin-left:0}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;font-size:12px}mat-form-field[_ngcontent-%COMP%]{min-width:100%;width:100%}.measurement-table[_ngcontent-%COMP%]{font-size:12px}}"]})};var eo=b("[RaceMeasurement] Load Race Measurements",y()),xh=b("[RaceMeasurement] Load Race Measurements Success",y()),Ah=b("[RaceMeasurement] Load Race Measurements Failure",y()),xl=b("[RaceMeasurement] Update Race Measurement",y()),Al=b("[RaceMeasurement] Update Race Measurement Success",y()),El=b("[RaceMeasurement] Update Race Measurement Failure",y()),Rl=b("[RaceMeasurement] Delete Race Measurement",y()),kl=b("[RaceMeasurement] Delete Race Measurement Success",y()),Tl=b("[RaceMeasurement] Delete Race Measurement Failure",y()),Il=b("[RaceMeasurement] Sync Race Measurements To Participants",y()),Nl=b("[RaceMeasurement] Sync Race Measurements To Participants Success",y()),Fl=b("[RaceMeasurement] Sync Race Measurements To Participants Failure",y());var Mb=fn("raceMeasurement"),bw=he(Mb,t=>t.raceMeasurements),vw=he(Mb,t=>t.loading),kX=he(Mb,t=>t.error);var yO=["panel"],CO=["*"];function SO(t,i){if(t&1&&(et(0,"div",1,0),de(2),tt()),t&2){let e=i.id,n=N();Ct(n._classList),V("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),Et("id",n.id),le("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var xb=class{source;option;constructor(i,e){this.source=i,this.option=e}},yw=new S("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Cw=(()=>{class t{_changeDetectorRef=s(Ee);_elementRef=s(U);_defaults=s(yw);_animationsDisabled=He();_activeOptionChanges=Fe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new B;opened=new B;closed=new B;optionActivated=new B;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(Xe).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Re);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Va(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new xb(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=O({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(n,r,a){if(n&1&&Qt(a,Tt,5)(a,ad,5),n&2){let o;H(o=W())&&(r.options=o),H(o=W())&&(r.optionGroups=o)}},viewQuery:function(n,r){if(n&1&&Ke(Mt,7)(yO,5),n&2){let a;H(a=W())&&(r.template=a.first),H(a=W())&&(r.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",$],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",$],requireSelection:[2,"requireSelection","requireSelection",$],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",$],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",$]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ae([{provide:rd,useExisting:t}])],ngContentSelectors:CO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,r){n&1&&(Be(),Ea(0,SO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return t})();var DO={provide:Rr,useExisting:cn(()=>Ab),multi:!0};var wO=new S("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=s(se);return()=>Ei(t)}}),Ab=(()=>{class t{_environmentInjector=s(dn);_element=s(U);_injector=s(se);_viewContainerRef=s(vt);_zone=s(re);_changeDetectorRef=s(Ee);_dir=s(mt,{optional:!0});_formField=s(qr,{optional:!0,host:!0});_viewportRuler=s(ni);_scrollStrategy=s(wO);_renderer=s(Ye);_animationsDisabled=He();_defaults=s(yw,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new F;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Fe.EMPTY;_breakpointObserver=s(Oa);_handsetLandscapeSubscription=Fe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new F;_overlayPanelClass=$r(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return qe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(xe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(xe(()=>this._overlayAttached)):E()).pipe(R(e=>e instanceof id?e:null))}optionSelections=Ii(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(st(e),ze(()=>qe(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ze(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new lt(e=>{let n=a=>{let o=en(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,u=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(o))&&(!u||!u.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},r=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{r.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,r=n.keyCode,a=at(n);if(r===27&&!a&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,l=r===38||r===40;r===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,r=n.value;if(n.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);r!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return $i()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new lt(r=>{Je(()=>{r.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(ct(()=>this._positionStrategy.reapplyLastPosition()),ev(0))??E();return qe(e,n).pipe(ze(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Le(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),n._emitSelectEvent(r),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new Bn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=ai(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(_m.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!at(e)||e.keyCode===38&&at(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new ii({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=tr(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],o;this.position==="above"?o=a:this.position==="below"?o=n:o=[...n,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){n=r;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,r=Nm(e,n.options,n.optionGroups);if(e===0&&r===1)n._setScrollTop(0);else if(n.panel){let a=n.options.toArray()[e];if(a){let o=a._getHostElement(),l=Fm(o.offsetTop,o.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(l)}}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,r){n&1&&D("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(o){return r._handleInput(o)})("keydown",function(o){return r._handleKeydown(o)})("click",function(){return r._handleClick()}),n&2&&le("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen?null:r.autocomplete?.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",$]},exportAs:["matAutocompleteTrigger"],features:[Ae([DO]),Ue]})}return t})(),Sw=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=Z({imports:[Vn,Lo,Ai,Lo,we]})}return t})();var xO=(t,i)=>i.id;function AO(t,i){if(t&1&&(c(0,"mat-option",6),m(1),d()),t&2){let e=i.$implicit;w("value",e),p(),Ev(" ",e.firstName," ",e.lastName," (",e.raceNumber,") ")}}function EO(t,i){t&1&&(c(0,"mat-error"),m(1,"Minuten erforderlich"),d())}function RO(t,i){t&1&&(c(0,"mat-error"),m(1,"Minuten m\xFCssen >= 0 sein"),d())}function kO(t,i){t&1&&(c(0,"mat-error"),m(1,"Sekunden erforderlich"),d())}function TO(t,i){t&1&&(c(0,"mat-error"),m(1,"Sekunden: 0-59"),d())}function IO(t,i){t&1&&(c(0,"mat-error"),m(1,"Millisekunden erforderlich"),d())}function NO(t,i){t&1&&(c(0,"mat-error"),m(1,"Millisekunden: 0-999"),d())}function FO(t,i){t&1&&(c(0,"mat-error"),m(1,"Messzeit ist erforderlich"),d())}var Eh=class t{fb=s(In);store=s(Ge);dialogRef=s(jt);data=s($n);destroy$=new F;form;participants$;filteredParticipants$;selectedParticipant=null;constructor(){this.participants$=this.store.select(Yp),this.data.participantId&&setTimeout(()=>{this.participants$.pipe(Le(1),x(this.destroy$)).subscribe(e=>{this.selectedParticipant=e.find(n=>n.id===this.data.participantId)||null,this.selectedParticipant&&this.form.patchValue({participantSearch:this.selectedParticipant},{emitEvent:!1})})},0);let i=this.splitMilliseconds(this.data.durationMs||0);this.form=this.fb.group({participantId:[this.data.participantId||null],participantSearch:[""],minutes:[i.minutes,[fe.required,fe.min(0)]],seconds:[i.seconds,[fe.required,fe.min(0),fe.max(59)]],milliseconds:[i.milliseconds,[fe.required,fe.min(0),fe.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data.measuredAt),fe.required]}),this.filteredParticipants$=jn([this.participants$,this.form.get("participantSearch").valueChanges.pipe(st(""))]).pipe(R(([e,n])=>{let r=typeof n=="string"?n:"";return this.filterParticipants(e,r)}))}ngAfterViewInit(){setTimeout(()=>{this.store.dispatch(sr())},0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),n={participantId:i.participantId||void 0,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(n)}}onParticipantSelected(i){let e=i.option.value;this.selectedParticipant=e,this.form.patchValue({participantId:e?e.id:null})}displayParticipant(i){return i?`${i.firstName} ${i.lastName} (${i.raceNumber})`:""}filterParticipants(i,e){if(!e||e.trim()==="")return i;let n=e.toLowerCase();return i.filter(r=>{let a=`${r.firstName} ${r.lastName}`.toLowerCase(),o=r.raceNumber?.toString()??"";return a.includes(n)||o.includes(n)})}formatDateTimeForInput(i){if(!i){let n=new Date;return this.toLocalISOString(n)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){let e=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0"),a=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0");return`${e}-${n}-${r}T${a}:${o}`}formatDateTimeForBackend(i){let e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${n}-${r}-${a}T${o}:${l}:${u}`}convertToMilliseconds(i,e,n){return i*60*1e3+e*1e3+n}splitMilliseconds(i){let e=Math.floor(i/6e4),n=i%(60*1e3),r=Math.floor(n/1e3),a=n%1e3;return{minutes:e,seconds:r,milliseconds:a}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-race-measurement-dialog"]],decls:44,vars:14,consts:[["auto","matAutocomplete"],["mat-dialog-title",""],[1,"measurement-form",3,"formGroup"],["appearance","outline"],["type","text","matInput","","formControlName","participantSearch","placeholder","Suche nach Name oder Startnummer",3,"matAutocomplete"],[3,"optionSelected","displayWith"],[3,"value"],[1,"time-input-group"],["matInput","","type","number","formControlName","minutes","min","0","required",""],["matInput","","type","number","formControlName","seconds","min","0","max","59","required",""],["matInput","","type","number","formControlName","milliseconds","min","0","max","999","required",""],["matInput","","type","datetime-local","formControlName","measuredAt","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){if(e&1&&(c(0,"h2",1),m(1,"Messung zuordnen"),d(),c(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Teilnehmer"),d(),A(7,"input",4),Ce(),c(8,"mat-autocomplete",5,0),D("optionSelected",function(a){return n.onParticipantSelected(a)}),c(10,"mat-option",6),m(11,"Kein Teilnehmer"),d(),gt(12,AO,2,4,"mat-option",6,xO),J(14,"async"),d()(),c(15,"div",7)(16,"mat-form-field",3)(17,"mat-label"),m(18,"Minuten"),d(),A(19,"input",8),Ce(),T(20,EO,2,0,"mat-error"),T(21,RO,2,0,"mat-error"),d(),c(22,"mat-form-field",3)(23,"mat-label"),m(24,"Sekunden"),d(),A(25,"input",9),Ce(),T(26,kO,2,0,"mat-error"),T(27,TO,2,0,"mat-error"),d(),c(28,"mat-form-field",3)(29,"mat-label"),m(30,"Millisekunden"),d(),A(31,"input",10),Ce(),T(32,IO,2,0,"mat-error"),T(33,NO,2,0,"mat-error"),d()(),c(34,"mat-form-field",3)(35,"mat-label"),m(36,"Gemessen am (ISO Format)"),d(),A(37,"input",11),Ce(),T(38,FO,2,0,"mat-error"),d()()(),c(39,"mat-dialog-actions",12)(40,"button",13),D("click",function(){return n.onCancel()}),m(41,"Abbrechen"),d(),c(42,"button",14),D("click",function(){return n.onSave()}),m(43," Speichern "),d()()),e&2){let r=yt(9);p(3),w("formGroup",n.form),p(4),w("matAutocomplete",r),Se(),p(),w("displayWith",n.displayParticipant.bind(n)),p(2),w("value",null),p(2),_t(ie(14,12,n.filteredParticipants$)),p(7),Se(),p(),I(n.form.get("minutes")?.hasError("required")&&n.form.get("minutes")?.touched?20:-1),p(),I(n.form.get("minutes")?.hasError("min")?21:-1),p(4),Se(),p(),I(n.form.get("seconds")?.hasError("required")&&n.form.get("seconds")?.touched?26:-1),p(),I(n.form.get("seconds")?.hasError("min")||n.form.get("seconds")?.hasError("max")?27:-1),p(4),Se(),p(),I(n.form.get("milliseconds")?.hasError("required")&&n.form.get("milliseconds")?.touched?32:-1),p(),I(n.form.get("milliseconds")?.hasError("min")||n.form.get("milliseconds")?.hasError("max")?33:-1),p(4),Se(),p(),I(n.form.get("measuredAt")?.hasError("required")&&n.form.get("measuredAt")?.touched?38:-1),p(4),w("disabled",!n.form.valid)}},dependencies:[$e,Nn,Tn,qt,ar,Kt,kn,Yt,rr,Wr,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,an,On,Fn,Pe,Ve,Sw,Cw,Tt,Ab,dt],styles:[".measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var Dw=()=>[],OO=(t,i)=>i.id;function PO(t,i){if(t&1&&(c(0,"mat-option",3),m(1),d()),t&2){let e=i.$implicit,n=N();w("value",e.id),p(),Wi("",e.name," (",n.formatRaceDate(e.date),") ")}}function LO(t,i){t&1&&(c(0,"div",8),A(1,"mat-spinner",22),d())}function BO(t,i){t&1&&(c(0,"th",23),m(1,"ID"),d())}function VO(t,i){if(t&1&&(c(0,"td",24),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function $O(t,i){t&1&&(c(0,"th",23),m(1,"Ger\xE4te-ID"),d())}function jO(t,i){if(t&1&&(c(0,"td",24),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.deviceMeasurementId)}}function GO(t,i){t&1&&(c(0,"th",23),m(1,"Teilnehmer"),d())}function zO(t,i){if(t&1&&(c(0,"td",24),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.participantName||"-")}}function UO(t,i){t&1&&(c(0,"th",23),m(1,"Dauer"),d())}function HO(t,i){if(t&1&&(c(0,"td",24),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.durationMs))}}function WO(t,i){t&1&&(c(0,"th",23),m(1,"Gemessen am"),d())}function qO(t,i){if(t&1&&(c(0,"td",24),m(1),J(2,"date"),d()),t&2){let e=i.$implicit;p(),ce(Ir(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss"))}}function YO(t,i){t&1&&(c(0,"th",23),m(1,"Aktionen"),d())}function KO(t,i){if(t&1){let e=Te();c(0,"td",24)(1,"button",25),D("click",function(){let r=ae(e).$implicit,a=N(2);return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",26),D("click",function(){let r=ae(e).$implicit,a=N(2);return oe(a.deleteRaceMeasurement(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function XO(t,i){t&1&&A(0,"tr",27)}function ZO(t,i){t&1&&A(0,"tr",28)}function QO(t,i){if(t&1){let e=Te();c(0,"div",5)(1,"button",6),D("click",function(){let r=ae(e),a=N();return oe(a.manualRefresh(r))}),c(2,"mat-icon"),m(3,"refresh"),d(),m(4," Aktualisieren "),d(),c(5,"button",7),D("click",function(){let r=ae(e),a=N();return oe(a.syncToParticipants(r))}),c(6,"mat-icon"),m(7,"sync"),d(),m(8," Sync zu Teilnehmern "),d()(),T(9,LO,2,0,"div",8),J(10,"async"),c(11,"div",9)(12,"table",10),J(13,"async"),J(14,"async"),me(15,11),j(16,BO,2,0,"th",12)(17,VO,2,1,"td",13),pe(),me(18,14),j(19,$O,2,0,"th",12)(20,jO,2,1,"td",13),pe(),me(21,15),j(22,GO,2,0,"th",12)(23,zO,2,1,"td",13),pe(),me(24,16),j(25,UO,2,0,"th",12)(26,HO,2,1,"td",13),pe(),me(27,17),j(28,WO,2,0,"th",12)(29,qO,3,4,"td",13),pe(),me(30,18),j(31,YO,2,0,"th",12)(32,KO,7,0,"td",13),pe(),j(33,XO,1,0,"tr",19)(34,ZO,1,0,"tr",20),d()(),c(35,"div",21),m(36),J(37,"async"),d()}if(t&2){let e=N();p(9),I(ie(10,7,e.loading$)?9:-1),p(3),V("loading",ie(13,9,e.loading$)),w("dataSource",ie(14,11,e.raceMeasurementsWithParticipants$)||qi(15,Dw)),p(21),w("matHeaderRowDef",e.displayedColumns),p(),w("matRowDefColumns",e.displayedColumns),p(2),ge(" Anzahl der archivierten Messungen: ",(ie(37,13,e.raceMeasurementsWithParticipants$)||qi(16,Dw)).length," ")}}function JO(t,i){t&1&&(c(0,"p",4),m(1,"Bitte ein Rennen ausw\xE4hlen, um dessen archivierte Messungen zuzuordnen."),d())}var Rh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;raceMeasurements$;participants$;races$;selectedRaceId$;raceMeasurementsWithParticipants$;loading$;displayedColumns=["id","deviceMeasurementId","participant","duration","measuredAt","actions"];constructor(){this.raceMeasurements$=this.store.select(bw),this.participants$=this.store.select(Fs),this.races$=this.store.select(si),this.selectedRaceId$=this.store.select(li),this.loading$=this.store.select(vw),this.raceMeasurementsWithParticipants$=jn([this.raceMeasurements$,this.participants$]).pipe(R(([i,e])=>i.map(n=>_(h({},n),{participantName:n.participantId?this.getParticipantName(n.participantId,e):void 0}))),Qr((i,e)=>JSON.stringify(i)===JSON.stringify(e))),this.selectedRaceId$.pipe(Qr(),xe(i=>i!==null),x(this.destroy$)).subscribe(i=>{this.store.dispatch(eo({raceId:i}))}),this.actions$.pipe(M(Al),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Messung erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M(El),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Aktualisieren der Messung","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(Nl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Messungen erfolgreich mit Teilnehmern synchronisiert","OK",{duration:3e3})}),this.actions$.pipe(M(Fl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Synchronisieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(M(kl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Messung erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(Tl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim L\xF6schen der Messung","OK",{duration:1e4,panelClass:"error-snackbar"})})}ngAfterViewInit(){this.store.dispatch(oi()),this.store.dispatch(sr())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onRaceChange(i){this.store.dispatch(Ar({id:i}))}manualRefresh(i){this.store.dispatch(eo({raceId:i})),this.snackBar.open("Daten wurden aktualisiert","OK",{duration:2e3})}getParticipantName(i,e){let n=e.find(r=>r.id===i);return n?`${n.firstName} ${n.lastName}`:"-"}formatDuration(i){let e=Math.floor(i/1e3),n=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return n>0?`${n}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}formatRaceDate(i){let e=i.split("-");if(e.length===3){let n=e[0],r=e[1];return`${e[2]}.${r}.${n}`}return i}openEditDialog(i){this.dialog.open(Eh,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(xl({id:i.id,raceMeasurement:n}))})}deleteRaceMeasurement(i){confirm(`M\xF6chten Sie die archivierte Messung #${i.id} wirklich l\xF6schen?`)&&this.store.dispatch(Rl({id:i.id}))}syncToParticipants(i){this.store.dispatch(Il({raceId:i})),this.snackBar.open("Synchronisierung gestartet...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-race-measurement-list"]],decls:17,vars:8,consts:[[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],[1,"hint"],[1,"header-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent","matTooltip","Archivierte Messungen dieses Rennens mit Teilnehmern synchronisieren",3,"click"],[1,"loading-overlay"],[1,"table-container"],["mat-table","",1,"race-measurement-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","deviceMeasurementId"],["matColumnDef","participant"],["matColumnDef","duration"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["diameter","30"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Teilnehmer zuordnen / bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){if(e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Zuordnung & Sync"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"mat-form-field",1)(7,"mat-label"),m(8,"Rennen"),d(),c(9,"mat-select",2),J(10,"async"),D("selectionChange",function(a){return n.onRaceChange(a.value)}),gt(11,PO,2,3,"mat-option",3,OO),J(13,"async"),d()()(),T(14,QO,38,17),J(15,"async"),Xt(16,JO,2,0,"p",4),d()()),e&2){let r;p(9),w("value",ie(10,2,n.selectedRaceId$)),p(2),_t(ie(13,4,n.races$)),p(3),I((r=ie(15,6,n.selectedRaceId$))?14:16,r)}},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,Ci,ft,pt,yi,Tt,ot,dt,Or],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:16px;position:relative;flex-wrap:wrap;align-items:center}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.race-measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.race-measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}.hint[_ngcontent-%COMP%]{color:#0009}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.header-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:8px}mat-form-field[_ngcontent-%COMP%]{min-width:100%;width:100%}.race-measurement-table[_ngcontent-%COMP%]{font-size:12px}}"]})};var to=b("[AgeGroup] Load AgeGroups"),kh=b("[AgeGroup] Load AgeGroups Success",y()),Th=b("[AgeGroup] Load AgeGroups Failure",y()),Ih=b("[AgeGroup] Load AgeGroup",y()),Nh=b("[AgeGroup] Load AgeGroup Success",y()),Fh=b("[AgeGroup] Load AgeGroup Failure",y()),Ol=b("[AgeGroup] Create AgeGroup",y()),Pl=b("[AgeGroup] Create AgeGroup Success",y()),Ll=b("[AgeGroup] Create AgeGroup Failure",y()),Bl=b("[AgeGroup] Update AgeGroup",y()),Vl=b("[AgeGroup] Update AgeGroup Success",y()),$l=b("[AgeGroup] Update AgeGroup Failure",y()),jl=b("[AgeGroup] Delete AgeGroup",y()),Gl=b("[AgeGroup] Delete AgeGroup Success",y()),zl=b("[AgeGroup] Delete AgeGroup Failure",y()),ww=b("[AgeGroup] Select AgeGroup",y());var Oh=fn("ageGroup"),Rb=he(Oh,t=>t.ageGroups),Mw=he(Oh,t=>t.loading),qZ=he(Oh,t=>t.error),eP=he(Oh,t=>t.selectedAgeGroupId),YZ=he(Rb,eP,(t,i)=>i?t.find(e=>e.id===i):null);var nP=(t,i)=>i.value;function iP(t,i){t&1&&(c(0,"mat-error"),m(1,"Name ist erforderlich"),d())}function rP(t,i){if(t&1&&(c(0,"mat-option",5),m(1),d()),t&2){let e=i.$implicit;w("value",e.value),p(),ce(e.label)}}function aP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geschlecht ist erforderlich"),d())}function oP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr von ist erforderlich"),d())}function sP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr muss mindestens 1900 sein"),d())}function lP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr darf maximal 2100 sein"),d())}function cP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr bis ist erforderlich"),d())}function dP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr muss mindestens 1900 sein"),d())}function uP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr darf maximal 2100 sein"),d())}function mP(t,i){t&1&&(c(0,"mat-error"),m(1,"Geburtsjahr bis muss gr\xF6\xDFer oder gleich Geburtsjahr von sein"),d())}var qd=class t{fb=s(In);dialogRef=s(jt);data=s($n);form;genderOptions=[{value:"MALE",label:or.MALE},{value:"FEMALE",label:or.FEMALE},{value:"BOTH",label:or.BOTH}];constructor(){this.form=this.fb.group({name:[this.data?.name||"",fe.required],gender:[this.data?.gender||"",fe.required],birthYearFrom:[this.data?.birthYearFrom||"",[fe.required,fe.min(1900),fe.max(2100)]],birthYearTo:[this.data?.birthYearTo||"",[fe.required,fe.min(1900),fe.max(2100)]]},{validators:this.yearRangeValidator})}yearRangeValidator(i){let e=i.get("birthYearFrom")?.value,n=i.get("birthYearTo")?.value;return e&&n&&e>n?{yearRange:!0}:null}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,gender:i.gender,birthYearFrom:Number(i.birthYearFrom),birthYearTo:Number(i.birthYearTo)};this.dialogRef.close(e)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-age-group-dialog"]],decls:44,vars:12,consts:[["mat-dialog-title",""],[1,"age-group-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["formControlName","gender","required",""],[3,"value"],["matInput","","type","number","formControlName","birthYearFrom","required","","min","1900","max","2100"],["matInput","","type","number","formControlName","birthYearTo","required","","min","1900","max","2100"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){e&1&&(c(0,"h2",0),m(1),d(),c(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Name"),d(),A(7,"input",3),Ce(),T(8,iP,2,0,"mat-error"),c(9,"mat-hint"),m(10,'z.B. "Herren allgemein" oder "Damen U18"'),d()(),c(11,"mat-form-field",2)(12,"mat-label"),m(13,"Geschlecht"),d(),c(14,"mat-select",4),gt(15,rP,2,2,"mat-option",5,nP),d(),Ce(),T(17,aP,2,0,"mat-error"),c(18,"mat-hint"),m(19,"F\xFCr welches Geschlecht gilt diese Altersgruppe?"),d()(),c(20,"mat-form-field",2)(21,"mat-label"),m(22,"Geburtsjahr von"),d(),A(23,"input",6),Ce(),T(24,oP,2,0,"mat-error"),T(25,sP,2,0,"mat-error"),T(26,lP,2,0,"mat-error"),c(27,"mat-hint"),m(28,"Startzeitpunkt der Altersspanne (z.B. 1985)"),d()(),c(29,"mat-form-field",2)(30,"mat-label"),m(31,"Geburtsjahr bis"),d(),A(32,"input",7),Ce(),T(33,cP,2,0,"mat-error"),T(34,dP,2,0,"mat-error"),T(35,uP,2,0,"mat-error"),T(36,mP,2,0,"mat-error"),c(37,"mat-hint"),m(38,"Endzeitpunkt der Altersspanne (z.B. 2000)"),d()()()(),c(39,"mat-dialog-actions",8)(40,"button",9),D("click",function(){return n.onCancel()}),m(41,"Abbrechen"),d(),c(42,"button",10),D("click",function(){return n.onSave()}),m(43," Speichern "),d()()),e&2&&(p(),ge(" ",n.data?"Altersgruppe bearbeiten":"Neue Altersgruppe"," "),p(2),w("formGroup",n.form),p(4),Se(),p(),I(n.form.get("name")?.hasError("required")&&n.form.get("name")?.touched?8:-1),p(6),Se(),p(),_t(n.genderOptions),p(2),I(n.form.get("gender")?.hasError("required")&&n.form.get("gender")?.touched?17:-1),p(6),Se(),p(),I(n.form.get("birthYearFrom")?.hasError("required")&&n.form.get("birthYearFrom")?.touched?24:-1),p(),I(n.form.get("birthYearFrom")?.hasError("min")?25:-1),p(),I(n.form.get("birthYearFrom")?.hasError("max")?26:-1),p(6),Se(),p(),I(n.form.get("birthYearTo")?.hasError("required")&&n.form.get("birthYearTo")?.touched?33:-1),p(),I(n.form.get("birthYearTo")?.hasError("min")?34:-1),p(),I(n.form.get("birthYearTo")?.hasError("max")?35:-1),p(),I(n.form.hasError("yearRange")?36:-1),p(6),w("disabled",!n.form.valid))},dependencies:[$e,Nn,Tn,qt,ar,Kt,kn,Yt,rr,Wr,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,On,Fn,Pe,Ve,Ci,yi,Tt],styles:[".age-group-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function pP(t,i){t&1&&(c(0,"div",3),A(1,"mat-spinner"),d())}function hP(t,i){t&1&&(c(0,"th",17),m(1,"ID"),d())}function fP(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function gP(t,i){t&1&&(c(0,"th",17),m(1,"Name"),d())}function _P(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.name," ")}}function bP(t,i){t&1&&(c(0,"th",17),m(1," Geschlecht "),d())}function vP(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N();p(),ge(" ",n.getGenderLabel(e.gender)," ")}}function yP(t,i){t&1&&(c(0,"th",17),m(1," Geburtsjahr von "),d())}function CP(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.birthYearFrom," ")}}function SP(t,i){t&1&&(c(0,"th",17),m(1," Geburtsjahr bis "),d())}function DP(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.birthYearTo," ")}}function wP(t,i){t&1&&(c(0,"th",19),m(1,"Aktionen"),d())}function MP(t,i){if(t&1){let e=Te();c(0,"td",18)(1,"button",20),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",21),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteAgeGroup(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function xP(t,i){t&1&&A(0,"tr",22)}function AP(t,i){t&1&&A(0,"tr",23)}var Ph=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;ageGroups$;loading$;displayedColumns=["id","name","gender","birthYearFrom","birthYearTo","actions"];dataSource=new zi([]);sortInitialized=!1;sort=Ln.required(Dt);constructor(){this.ageGroups$=this.store.select(Rb),this.loading$=this.store.select(Mw),this.actions$.pipe(M(Pl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Altersgruppe erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(Ll),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen der Altersgruppe: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Vl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Altersgruppe erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M($l),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Altersgruppe: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Gl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Altersgruppe erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(zl),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Altersgruppe: ${i}`,"OK",{duration:5e3})}),bt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(x(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(to()),this.ageGroups$.pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return or[i]||i}openCreateDialog(){this.dialog.open(qd,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(Ol({ageGroup:e}))})}openEditDialog(i){this.dialog.open(qd,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(Bl({id:i.id,ageGroup:n}))})}deleteAgeGroup(i){confirm(`M\xF6chten Sie die Altersgruppe "${i.name}" wirklich l\xF6schen?`)&&this.store.dispatch(jl({id:i.id}))}refreshData(){this.store.dispatch(to()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-age-group-list"]],viewQuery:function(e,n){e&1&&pi(n.sort,Dt,5),e&2&&ei()},decls:39,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","","matSort","",1,"age-group-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","gender"],["matColumnDef","birthYearFrom"],["matColumnDef","birthYearTo"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Altersgruppen"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"button",1),D("click",function(){return n.openCreateDialog()}),c(7,"mat-icon"),m(8,"add"),d(),m(9," Neue Altersgruppe "),d(),c(10,"button",2),D("click",function(){return n.refreshData()}),c(11,"mat-icon"),m(12,"refresh"),d(),m(13," Aktualisieren "),d()(),T(14,pP,2,0,"div",3),J(15,"async"),c(16,"div",4)(17,"table",5),J(18,"async"),me(19,6),j(20,hP,2,0,"th",7)(21,fP,2,1,"td",8),pe(),me(22,9),j(23,gP,2,0,"th",7)(24,_P,2,1,"td",8),pe(),me(25,10),j(26,bP,2,0,"th",7)(27,vP,2,1,"td",8),pe(),me(28,11),j(29,yP,2,0,"th",7)(30,CP,2,1,"td",8),pe(),me(31,12),j(32,SP,2,0,"th",7)(33,DP,2,1,"td",8),pe(),me(34,13),j(35,wP,2,0,"th",14)(36,MP,7,0,"td",8),pe(),j(37,xP,1,0,"tr",15)(38,AP,1,0,"tr",16),d()()()()),e&2&&(p(14),I(ie(15,6,n.loading$)?14:-1),p(3),V("hidden",ie(18,8,n.loading$)),w("dataSource",n.dataSource),p(20),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns))},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,xr,Dt,Mr,dt],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.age-group-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};function EP(t,i){t&1&&(c(0,"mat-error"),m(1,"Name ist erforderlich"),d())}var Yd=class t{fb=s(In);dialogRef=s(jt);data=s($n);form;constructor(){this.form=this.fb.group({name:[this.data?.name||"",fe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i={name:this.form.value.name};this.dialogRef.close(i)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-team-dialog"]],decls:16,vars:4,consts:[["mat-dialog-title",""],[1,"team-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){e&1&&(c(0,"h2",0),m(1),d(),c(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Name"),d(),A(7,"input",3),Ce(),T(8,EP,2,0,"mat-error"),c(9,"mat-hint"),m(10,'z.B. "SC Musterhausen"'),d()()()(),c(11,"mat-dialog-actions",4)(12,"button",5),D("click",function(){return n.onCancel()}),m(13,"Abbrechen"),d(),c(14,"button",6),D("click",function(){return n.onSave()}),m(15," Speichern "),d()()),e&2&&(p(),ge(" ",n.data?"Team bearbeiten":"Neues Team"," "),p(2),w("formGroup",n.form),p(4),Se(),p(),I(n.form.get("name")?.hasError("required")&&n.form.get("name")?.touched?8:-1),p(6),w("disabled",!n.form.valid))},dependencies:[$e,Nn,Tn,qt,Kt,kn,Yt,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,On,Fn,Pe,Ve],styles:[".team-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function RP(t,i){t&1&&(c(0,"div",3),A(1,"mat-spinner"),d())}function kP(t,i){t&1&&(c(0,"th",14),m(1,"ID"),d())}function TP(t,i){if(t&1&&(c(0,"td",15),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function IP(t,i){t&1&&(c(0,"th",14),m(1,"Name"),d())}function NP(t,i){if(t&1&&(c(0,"td",15),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.name," ")}}function FP(t,i){t&1&&(c(0,"th",16),m(1,"Aktionen"),d())}function OP(t,i){if(t&1){let e=Te();c(0,"td",15)(1,"button",17),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",18),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteTeam(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function PP(t,i){t&1&&A(0,"tr",19)}function LP(t,i){t&1&&A(0,"tr",20)}var Lh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;teams$;loading$;displayedColumns=["id","name","actions"];dataSource=new zi([]);sortInitialized=!1;sort=Ln.required(Dt);constructor(){this.teams$=this.store.select(Xp),this.loading$=this.store.select(ow),this.actions$.pipe(M(Ps),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Team erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(Ls),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen des Teams: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Vs),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Team erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M($s),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren des Teams: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Gs),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Team erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(zs),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen des Teams: ${i}`,"OK",{duration:5e3})}),bt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(Kr()),this.teams$.pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Yd,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(Os({team:e}))})}openEditDialog(i){this.dialog.open(Yd,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(Bs({id:i.id,team:n}))})}deleteTeam(i){confirm(`M\xF6chten Sie das Team "${i.name}" wirklich l\xF6schen?`)&&this.store.dispatch(js({id:i.id}))}refreshData(){this.store.dispatch(Kr()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-team-list"]],viewQuery:function(e,n){e&1&&pi(n.sort,Dt,5),e&2&&ei()},decls:30,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","","matSort","",1,"team-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Teams"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"button",1),D("click",function(){return n.openCreateDialog()}),c(7,"mat-icon"),m(8,"add"),d(),m(9," Neues Team "),d(),c(10,"button",2),D("click",function(){return n.refreshData()}),c(11,"mat-icon"),m(12,"refresh"),d(),m(13," Aktualisieren "),d()(),T(14,RP,2,0,"div",3),J(15,"async"),c(16,"div",4)(17,"table",5),J(18,"async"),me(19,6),j(20,kP,2,0,"th",7)(21,TP,2,1,"td",8),pe(),me(22,9),j(23,IP,2,0,"th",7)(24,NP,2,1,"td",8),pe(),me(25,10),j(26,FP,2,0,"th",11)(27,OP,7,0,"td",8),pe(),j(28,PP,1,0,"tr",12)(29,LP,1,0,"tr",13),d()()()()),e&2&&(p(14),I(ie(15,6,n.loading$)?14:-1),p(3),V("hidden",ie(18,8,n.loading$)),w("dataSource",n.dataSource),p(11),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns))},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,xr,Dt,Mr,dt],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.team-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};function BP(t,i){t&1&&(c(0,"mat-error"),m(1,"Name ist erforderlich"),d())}var Kd=class t{fb=s(In);dialogRef=s(jt);data=s($n);form;constructor(){this.form=this.fb.group({name:[this.data?.name||"",fe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i={name:this.form.value.name};this.dialogRef.close(i)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-category-dialog"]],decls:16,vars:4,consts:[["mat-dialog-title",""],[1,"category-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,n){e&1&&(c(0,"h2",0),m(1),d(),c(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Name"),d(),A(7,"input",3),Ce(),T(8,BP,2,0,"mat-error"),c(9,"mat-hint"),m(10,'z.B. "E-Bike"'),d()()()(),c(11,"mat-dialog-actions",4)(12,"button",5),D("click",function(){return n.onCancel()}),m(13,"Abbrechen"),d(),c(14,"button",6),D("click",function(){return n.onSave()}),m(15," Speichern "),d()()),e&2&&(p(),ge(" ",n.data?"Kategorie bearbeiten":"Neue Kategorie"," "),p(2),w("formGroup",n.form),p(4),Se(),p(),I(n.form.get("name")?.hasError("required")&&n.form.get("name")?.touched?8:-1),p(6),w("disabled",!n.form.valid))},dependencies:[$e,Nn,Tn,qt,Kt,kn,Yt,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,On,Fn,Pe,Ve],styles:[".category-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function VP(t,i){t&1&&(c(0,"div",3),A(1,"mat-spinner"),d())}function $P(t,i){t&1&&(c(0,"th",14),m(1,"ID"),d())}function jP(t,i){if(t&1&&(c(0,"td",15),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.id)}}function GP(t,i){t&1&&(c(0,"th",14),m(1,"Name"),d())}function zP(t,i){if(t&1&&(c(0,"td",15),m(1),d()),t&2){let e=i.$implicit;p(),ge(" ",e.name," ")}}function UP(t,i){t&1&&(c(0,"th",16),m(1,"Aktionen"),d())}function HP(t,i){if(t&1){let e=Te();c(0,"td",15)(1,"button",17),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.openEditDialog(r))}),c(2,"mat-icon"),m(3,"edit"),d()(),c(4,"button",18),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteCategory(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}}function WP(t,i){t&1&&A(0,"tr",19)}function qP(t,i){t&1&&A(0,"tr",20)}var Bh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;categories$;loading$;displayedColumns=["id","name","actions"];dataSource=new zi([]);sortInitialized=!1;sort=Ln.required(Dt);constructor(){this.categories$=this.store.select(eh),this.loading$=this.store.select(sw),this.actions$.pipe(M(Hs),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Kategorie erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(Ws),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen der Kategorie: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Ys),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Kategorie erfolgreich aktualisiert","OK",{duration:3e3})}),this.actions$.pipe(M(Ks),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Kategorie: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Zs),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Kategorie erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(Qs),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Kategorie: ${i}`,"OK",{duration:5e3})}),bt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(Xr()),this.categories$.pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Kd,{width:"500px"}).afterClosed().pipe(x(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(Us({category:e}))})}openEditDialog(i){this.dialog.open(Kd,{width:"500px",data:i}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(qs({id:i.id,category:n}))})}deleteCategory(i){confirm(`M\xF6chten Sie die Kategorie "${i.name}" wirklich l\xF6schen?`)&&this.store.dispatch(Xs({id:i.id}))}refreshData(){this.store.dispatch(Xr()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-category-list"]],viewQuery:function(e,n){e&1&&pi(n.sort,Dt,5),e&2&&ei()},decls:30,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","","matSort","",1,"category-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Kategorien"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"button",1),D("click",function(){return n.openCreateDialog()}),c(7,"mat-icon"),m(8,"add"),d(),m(9," Neue Kategorie "),d(),c(10,"button",2),D("click",function(){return n.refreshData()}),c(11,"mat-icon"),m(12,"refresh"),d(),m(13," Aktualisieren "),d()(),T(14,VP,2,0,"div",3),J(15,"async"),c(16,"div",4)(17,"table",5),J(18,"async"),me(19,6),j(20,$P,2,0,"th",7)(21,jP,2,1,"td",8),pe(),me(22,9),j(23,GP,2,0,"th",7)(24,zP,2,1,"td",8),pe(),me(25,10),j(26,UP,2,0,"th",11)(27,HP,7,0,"td",8),pe(),j(28,WP,1,0,"tr",12)(29,qP,1,0,"tr",13),d()()()()),e&2&&(p(14),I(ie(15,6,n.loading$)?14:-1),p(3),V("hidden",ie(18,8,n.loading$)),w("dataSource",n.dataSource),p(11),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns))},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,xr,Dt,Mr,dt],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.category-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var Xd=(e=>(e.LOS="LOS",e.TEAM="TEAM",e))(Xd||{}),Zd={LOS:"Los-Modus",TEAM:"Mannschaftswertung"};var Ul=b("[GaudiMode] Load GaudiModes",y()),Vh=b("[GaudiMode] Load GaudiModes Success",y()),$h=b("[GaudiMode] Load GaudiModes Failure",y()),Hl=b("[GaudiMode] Create GaudiMode",y()),Wl=b("[GaudiMode] Create GaudiMode Success",y()),ql=b("[GaudiMode] Create GaudiMode Failure",y()),jh=b("[GaudiMode] Update GaudiMode",y()),Gh=b("[GaudiMode] Update GaudiMode Success",y()),zh=b("[GaudiMode] Update GaudiMode Failure",y()),Yl=b("[GaudiMode] Delete GaudiMode",y()),Kl=b("[GaudiMode] Delete GaudiMode Success",y()),Xl=b("[GaudiMode] Delete GaudiMode Failure",y()),Qd=b("[GaudiMode] Select GaudiMode",y()),Zl=b("[GaudiMode] Draw Pairing",y()),Ql=b("[GaudiMode] Load Pairing",y()),Jd=b("[GaudiMode] Pairing Success",y()),eu=b("[GaudiMode] Pairing Failure",y()),Jl=b("[GaudiMode] Load Ranking",y()),Uh=b("[GaudiMode] Load Ranking Success",y()),Hh=b("[GaudiMode] Load Ranking Failure",y()),ec=b("[GaudiMode] Export Pdf",y()),tu=b("[GaudiMode] Export Pdf Success",y()),Wh=b("[GaudiMode] Export Pdf Failure",y());var no=fn("gaudiMode"),xw=he(no,t=>t.gaudiModes),Aw=he(no,t=>t.loading),Ew=he(no,t=>t.pdfExportLoading),qJ=he(no,t=>t.error),kb=he(no,t=>t.selectedGaudiModeId),Rw=he(xw,kb,(t,i)=>i?t.find(e=>e.id===i)??null:null),Tb=t=>he(xw,i=>t?i.filter(e=>e.raceId===t):i),kw=he(no,t=>t.pairing),Tw=he(no,t=>t.ranking);var YP=(t,i)=>i.id,KP=(t,i)=>i.value;function XP(t,i){if(t&1&&(c(0,"mat-option",4),m(1),d()),t&2){let e=i.$implicit;w("value",e.id),p(),ce(e.name)}}function ZP(t,i){t&1&&(c(0,"mat-error"),m(1,"Rennen ist erforderlich"),d())}function QP(t,i){if(t&1&&(c(0,"mat-option",4),m(1),d()),t&2){let e=i.$implicit;w("value",e.value),p(),ce(e.label)}}function JP(t,i){t&1&&(c(0,"mat-error"),m(1,"Name ist erforderlich"),d())}function e2(t,i){t&1&&(c(0,"mat-error"),m(1,"Teamgr\xF6\xDFe ist erforderlich"),d())}function t2(t,i){if(t&1&&(c(0,"mat-form-field",2)(1,"mat-label"),m(2,"Teilnehmer pro Team"),d(),A(3,"input",10),Ce(),T(4,e2,2,0,"mat-error"),c(5,"mat-hint"),m(6,"Anzahl der schnellsten Teammitglieder, die gewertet werden"),d()()),t&2){let e=N();p(3),Se(),p(),I(e.form.get("teamSize")?.hasError("required")&&e.form.get("teamSize")?.touched?4:-1)}}var Yh=class t{fb=s(In);dialogRef=s(jt);store=s(Ge);data=s($n);races$=this.store.select(si);gaudiModeType=Xd;typeOptions=[{value:"LOS",label:Zd.LOS},{value:"TEAM",label:Zd.TEAM}];form=this.fb.group({raceId:[this.data?.raceId||"",fe.required],type:["LOS",fe.required],name:["",fe.required],teamSize:[5]});onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={raceId:Number(i.raceId),type:i.type,name:i.name,teamSize:i.type==="TEAM"?Number(i.teamSize):void 0};this.dialogRef.close(e)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-gaudi-mode-dialog"]],decls:31,vars:7,consts:[["mat-dialog-title",""],[1,"gaudi-mode-form",3,"formGroup"],["appearance","outline"],["formControlName","raceId","required",""],[3,"value"],["formControlName","type","required",""],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],["matInput","","type","number","formControlName","teamSize","required","","min","1"]],template:function(e,n){e&1&&(c(0,"h2",0),m(1,"Neuer Gaudi-Modus"),d(),c(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Rennen"),d(),c(7,"mat-select",3),gt(8,XP,2,2,"mat-option",4,YP),J(10,"async"),d(),Ce(),T(11,ZP,2,0,"mat-error"),d(),c(12,"mat-form-field",2)(13,"mat-label"),m(14,"Modus"),d(),c(15,"mat-select",5),gt(16,QP,2,2,"mat-option",4,KP),d(),Ce(),d(),c(18,"mat-form-field",2)(19,"mat-label"),m(20,"Name"),d(),A(21,"input",6),Ce(),T(22,JP,2,0,"mat-error"),c(23,"mat-hint"),m(24,'z.B. "Los-Wertung Herbstrennen"'),d()(),T(25,t2,7,1,"mat-form-field",2),d()(),c(26,"mat-dialog-actions",7)(27,"button",8),D("click",function(){return n.onCancel()}),m(28,"Abbrechen"),d(),c(29,"button",9),D("click",function(){return n.onSave()}),m(30," Erstellen "),d()()),e&2&&(p(3),w("formGroup",n.form),p(4),Se(),p(),_t(ie(10,5,n.races$)),p(3),I(n.form.get("raceId")?.hasError("required")&&n.form.get("raceId")?.touched?11:-1),p(4),Se(),p(),_t(n.typeOptions),p(5),Se(),p(),I(n.form.get("name")?.hasError("required")&&n.form.get("name")?.touched?22:-1),p(3),I(n.form.value.type===n.gaudiModeType.TEAM?25:-1),p(4),w("disabled",!n.form.valid))},dependencies:[$e,Nn,Tn,qt,ar,Kt,kn,Yt,rr,At,rn,nt,Yn,Xn,Kn,ot,ft,pt,ci,an,On,Fn,Pe,Ve,Ci,yi,Tt,dt],styles:[".gaudi-mode-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var Nw=()=>[];function n2(t,i){if(t&1&&m(0),t&2){let e=N();ge(" \u2013 ",e.gaudiMode().teamSize," Teilnehmer pro Team ")}}function i2(t,i){t&1&&(c(0,"th",17),m(1,"Teilnehmer 1"),d())}function r2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.participant1Name)}}function a2(t,i){t&1&&(c(0,"th",17),m(1,"Teilnehmer 2"),d())}function o2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.participant2Name||"(Einzel)")}}function s2(t,i){t&1&&A(0,"tr",19)}function l2(t,i){t&1&&A(0,"tr",20)}function c2(t,i){if(t&1&&(c(0,"div",7)(1,"table",10),J(2,"async"),me(3,11),j(4,i2,2,0,"th",12)(5,r2,2,1,"td",13),pe(),me(6,14),j(7,a2,2,0,"th",12)(8,o2,2,1,"td",13),pe(),j(9,s2,1,0,"tr",15)(10,l2,1,0,"tr",16),d()()),t&2){let e=N(2);p(),w("dataSource",ie(2,3,e.pairing$)||qi(5,Nw)),p(8),w("matHeaderRowDef",e.pairingColumns),p(),w("matRowDefColumns",e.pairingColumns)}}function d2(t,i){t&1&&(c(0,"p",8),m(1,"Noch keine Zulosung vorhanden."),d())}function u2(t,i){if(t&1){let e=Te();c(0,"div",3)(1,"button",9),D("click",function(){ae(e);let r=N();return oe(r.draw())}),c(2,"mat-icon"),m(3,"casino"),d(),m(4),J(5,"async"),d()(),T(6,c2,11,6,"div",7),J(7,"async"),Xt(8,d2,2,0,"p",8)}if(t&2){let e=N();p(4),ge(" ",ie(5,2,e.pairing$)?.length?"Neu auslosen":"Auslosen"," "),p(2),I(ie(7,4,e.pairing$)?.length?6:8)}}function m2(t,i){t&1&&A(0,"mat-spinner",6)}function p2(t,i){t&1&&(c(0,"mat-icon"),m(1,"picture_as_pdf"),d())}function h2(t,i){t&1&&(c(0,"th",17),m(1,"Platz"),d())}function f2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.place)}}function g2(t,i){if(t&1&&(c(0,"th",17),m(1),d()),t&2){let e=N(2);p(),ge(" ",e.gaudiMode().type===e.gaudiModeType.LOS?"Paarung":"Mannschaft"," ")}}function _2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.label)}}function b2(t,i){t&1&&(c(0,"th",17),m(1,"Zeit 1"),d())}function v2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.time1Ms))}}function y2(t,i){t&1&&(c(0,"th",17),m(1,"Zeit 2"),d())}function C2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.time2Ms))}}function S2(t,i){if(t&1&&(c(0,"th",17),m(1),d()),t&2){let e=N(2);p(),ge(" ",e.gaudiMode().type===e.gaudiModeType.LOS?"\xD8-Zeit Paar":"Gesamtzeit"," ")}}function D2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.valueMs))}}function w2(t,i){t&1&&(c(0,"th",17),m(1,"\xD8-Zeit Gesamt"),d())}function M2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.referenceMs))}}function x2(t,i){t&1&&(c(0,"th",17),m(1,"Abweichung"),d())}function A2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N(2);p(),ce(n.formatDuration(e.diffMs))}}function E2(t,i){t&1&&A(0,"tr",19)}function R2(t,i){t&1&&A(0,"tr",20)}function k2(t,i){if(t&1&&(c(0,"div",7)(1,"table",10),J(2,"async"),me(3,21),j(4,h2,2,0,"th",12)(5,f2,2,1,"td",13),pe(),me(6,22),j(7,g2,2,1,"th",12)(8,_2,2,1,"td",13),pe(),me(9,23),j(10,b2,2,0,"th",12)(11,v2,2,1,"td",13),pe(),me(12,24),j(13,y2,2,0,"th",12)(14,C2,2,1,"td",13),pe(),me(15,25),j(16,S2,2,1,"th",12)(17,D2,2,1,"td",13),pe(),me(18,26),j(19,w2,2,0,"th",12)(20,M2,2,1,"td",13),pe(),me(21,27),j(22,x2,2,0,"th",12)(23,A2,2,1,"td",13),pe(),j(24,E2,1,0,"tr",15)(25,R2,1,0,"tr",16),d()()),t&2){let e=N();p(),w("dataSource",ie(2,3,e.ranking$)||qi(5,Nw)),p(23),w("matHeaderRowDef",e.rankingColumns),p(),w("matRowDefColumns",e.rankingColumns)}}function T2(t,i){t&1&&(c(0,"p",8),m(1,"Noch keine Wertung berechnet."),d())}var Kh=class t{store=s(Ge);snackBar=s(nn);destroy$=new F;gaudiMode=ta.required();closed=Tv();gaudiModeType=Xd;pairingColumns=["participant1","participant2"];rankingColumns=[];pairing$=this.store.select(kw);ranking$=this.store.select(Tw);pdfExportLoading$=this.store.select(Ew);constructor(){bt(()=>{let i=this.gaudiMode();this.rankingColumns=i.type==="LOS"?["place","label","time1Ms","time2Ms","valueMs","referenceMs","diffMs"]:["place","label","valueMs"],i.type==="LOS"&&this.store.dispatch(Ql({id:i.id}))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}close(){this.closed.emit()}draw(){this.store.dispatch(Zl({id:this.gaudiMode().id})),this.snackBar.open("Auslosung wird durchgef\xFChrt...","OK",{duration:2e3})}loadRanking(){this.store.dispatch(Jl({id:this.gaudiMode().id}))}exportPdf(){let i=this.gaudiMode();this.store.dispatch(ec({id:i.id,filename:`gaudi_${i.name.replace(/\s+/g,"_").toLowerCase()}.pdf`})),this.snackBar.open("PDF Export gestartet","OK",{duration:2e3})}formatDuration(i){if(i==null)return"-";let e=Math.floor(i/1e3),n=Math.floor(e/60),r=e%60,a=i%1e3;return`${n}:${String(r).padStart(2,"0")}.${String(a).padStart(3,"0")}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-gaudi-mode-detail"]],inputs:{gaudiMode:[1,"gaudiMode"]},outputs:{closed:"closed"},decls:27,vars:13,consts:[[1,"detail-card"],[1,"header-row"],["mat-icon-button","","matTooltip","Schlie\xDFen",3,"click"],[1,"section-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],["diameter","20",2,"display","inline-block","margin-right","8px"],[1,"table-container"],[1,"hint"],["mat-raised-button","","color","primary",3,"click"],["mat-table","",1,"detail-table",3,"dataSource"],["matColumnDef","participant1"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","participant2"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["matColumnDef","place"],["matColumnDef","label"],["matColumnDef","time1Ms"],["matColumnDef","time2Ms"],["matColumnDef","valueMs"],["matColumnDef","referenceMs"],["matColumnDef","diffMs"]],template:function(e,n){e&1&&(c(0,"mat-card",0)(1,"mat-card-header",1)(2,"div")(3,"mat-card-title"),m(4),d(),c(5,"mat-card-subtitle"),m(6),T(7,n2,1,1),d()(),c(8,"button",2),D("click",function(){return n.close()}),c(9,"mat-icon"),m(10,"close"),d()()(),c(11,"mat-card-content"),T(12,u2,9,6),c(13,"div",3)(14,"button",4),D("click",function(){return n.loadRanking()}),c(15,"mat-icon"),m(16,"leaderboard"),d(),m(17," Wertung anzeigen "),d(),c(18,"button",5),J(19,"async"),D("click",function(){return n.exportPdf()}),T(20,m2,1,0,"mat-spinner",6),J(21,"async"),Xt(22,p2,2,0,"mat-icon"),m(23," PDF Export "),d()(),T(24,k2,26,6,"div",7),J(25,"async"),Xt(26,T2,2,0,"p",8),d()()),e&2&&(p(4),ce(n.gaudiMode().name),p(2),ge(" ",n.gaudiMode().type===n.gaudiModeType.LOS?"Los-Modus":"Mannschaftswertung"," "),p(),I(n.gaudiMode().type===n.gaudiModeType.TEAM?7:-1),p(5),I(n.gaudiMode().type===n.gaudiModeType.LOS?12:-1),p(6),w("disabled",ie(19,7,n.pdfExportLoading$)),p(2),I(ie(21,9,n.pdfExportLoading$)?20:22),p(4),I(ie(25,11,n.ranking$)?.length?24:26))},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,Wt,Gt,Ut,Ht,OS,zt,$t,Vt,Bt,Rt,Rn,dt],styles:[".detail-card[_ngcontent-%COMP%]{margin-top:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;width:100%}.section-actions[_ngcontent-%COMP%]{display:flex;gap:10px;margin:16px 0}.detail-table[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.hint[_ngcontent-%COMP%]{color:#0009;font-style:italic}"]})};var I2=()=>[],N2=(t,i)=>i.id;function F2(t,i){if(t&1&&(c(0,"mat-option",3),m(1),d()),t&2){let e=i.$implicit;w("value",e.id),p(),ce(e.name)}}function O2(t,i){t&1&&(c(0,"div",5),A(1,"mat-spinner"),d())}function P2(t,i){t&1&&(c(0,"th",17),m(1,"Name"),d())}function L2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.name)}}function B2(t,i){t&1&&(c(0,"th",17),m(1,"Modus"),d())}function V2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit,n=N();p(),ce(n.getTypeLabel(e.type))}}function $2(t,i){t&1&&(c(0,"th",17),m(1,"Teamgr\xF6\xDFe"),d())}function j2(t,i){if(t&1&&(c(0,"td",18),m(1),d()),t&2){let e=i.$implicit;p(),ce(e.teamSize||"-")}}function G2(t,i){t&1&&(c(0,"th",17),m(1,"Aktionen"),d())}function z2(t,i){if(t&1){let e=Te();c(0,"button",22),D("click",function(){ae(e);let r=N(2);return oe(r.closeDetail())}),c(1,"mat-icon"),m(2,"visibility_off"),d(),m(3," Ausblenden "),d()}}function U2(t,i){if(t&1){let e=Te();c(0,"button",23),D("click",function(){ae(e);let r=N().$implicit,a=N();return oe(a.selectGaudiMode(r))}),c(1,"mat-icon"),m(2,"visibility"),d(),m(3," Anzeigen "),d()}}function H2(t,i){if(t&1){let e=Te();c(0,"td",18),T(1,z2,4,0,"button",19),J(2,"async"),Xt(3,U2,4,0,"button",20),c(4,"button",21),D("click",function(){let r=ae(e).$implicit,a=N();return oe(a.deleteGaudiMode(r))}),c(5,"mat-icon"),m(6,"delete"),d()()()}if(t&2){let e=i.$implicit,n=N();p(),I(ie(2,1,n.selectedGaudiModeId$)===e.id?1:3)}}function W2(t,i){t&1&&A(0,"tr",24)}function q2(t,i){t&1&&A(0,"tr",25)}function Y2(t,i){if(t&1){let e=Te();c(0,"app-gaudi-mode-detail",26),D("closed",function(){ae(e);let r=N();return oe(r.closeDetail())}),d()}t&2&&w("gaudiMode",i)}var Xh=class t{store=s(Ge);dialog=s(En);snackBar=s(nn);actions$=s(Ze);destroy$=new F;races$;selectedRaceId$;filteredGaudiModes$;selectedGaudiMode$;selectedGaudiModeId$;loading$;displayedColumns=["name","type","teamSize","actions"];constructor(){this.races$=this.store.select(si),this.selectedRaceId$=this.store.select(li),this.loading$=this.store.select(Aw),this.selectedGaudiMode$=this.store.select(Rw),this.selectedGaudiModeId$=this.store.select(kb),this.filteredGaudiModes$=this.store.select(Tb(null)),this.selectedRaceId$.pipe(x(this.destroy$)).subscribe(i=>{this.filteredGaudiModes$=this.store.select(Tb(i))}),this.actions$.pipe(M(Wl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Gaudi-Modus erfolgreich erstellt","OK",{duration:3e3})}),this.actions$.pipe(M(ql),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen des Gaudi-Modus: ${i}`,"OK",{duration:5e3})}),this.actions$.pipe(M(Kl),x(this.destroy$)).subscribe(()=>{this.snackBar.open("Gaudi-Modus erfolgreich gel\xF6scht","OK",{duration:3e3})}),this.actions$.pipe(M(Xl),x(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen des Gaudi-Modus: ${i}`,"OK",{duration:5e3})})}ngAfterViewInit(){this.store.dispatch(oi()),this.store.dispatch(Ul({}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getTypeLabel(i){return Zd[i]||i}onRaceFilterChange(i){this.store.dispatch(Ar({id:i}))}openCreateDialog(){this.selectedRaceId$.pipe(Le(1)).subscribe(i=>{this.dialog.open(Yh,{width:"500px",data:{raceId:i}}).afterClosed().pipe(x(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(Hl({gaudiMode:n}))})})}selectGaudiMode(i){this.store.dispatch(Qd({id:i.id}))}closeDetail(){this.store.dispatch(Qd({id:null}))}deleteGaudiMode(i){confirm(`M\xF6chten Sie den Gaudi-Modus "${i.name}" wirklich l\xF6schen?`)&&this.store.dispatch(Yl({id:i.id}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-gaudi-modus"]],decls:41,vars:18,consts:[[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],["mat-raised-button","","color","primary",3,"click"],[1,"loading-container"],[1,"table-container"],["mat-table","",1,"gaudi-mode-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","teamSize"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"gaudiMode"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","matTooltip","Ausblenden"],["mat-raised-button","","matTooltip","Anzeigen"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-raised-button","","matTooltip","Ausblenden",3,"click"],["mat-raised-button","","matTooltip","Anzeigen",3,"click"],["mat-header-row",""],["mat-row",""],[3,"closed","gaudiMode"]],template:function(e,n){if(e&1&&(c(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Gaudi-Modus"),d()(),c(4,"mat-card-content")(5,"div",0)(6,"mat-form-field",1)(7,"mat-label"),m(8,"Nach Rennen filtern"),d(),c(9,"mat-select",2),J(10,"async"),D("selectionChange",function(a){return n.onRaceFilterChange(a.value)}),c(11,"mat-option",3),m(12,"Alle Rennen"),d(),gt(13,F2,2,2,"mat-option",3,N2),J(15,"async"),d()(),c(16,"button",4),D("click",function(){return n.openCreateDialog()}),c(17,"mat-icon"),m(18,"add"),d(),m(19," Neuer Gaudi-Modus "),d()(),T(20,O2,2,0,"div",5),J(21,"async"),c(22,"div",6)(23,"table",7),J(24,"async"),me(25,8),j(26,P2,2,0,"th",9)(27,L2,2,1,"td",10),pe(),me(28,11),j(29,B2,2,0,"th",9)(30,V2,2,1,"td",10),pe(),me(31,12),j(32,$2,2,0,"th",9)(33,j2,2,1,"td",10),pe(),me(34,13),j(35,G2,2,0,"th",9)(36,H2,7,3,"td",10),pe(),j(37,W2,1,0,"tr",14)(38,q2,1,0,"tr",15),d()(),T(39,Y2,1,1,"app-gaudi-mode-detail",16),J(40,"async"),d()()),e&2){let r;p(9),w("value",ie(10,7,n.selectedRaceId$)),p(2),w("value",null),p(2),_t(ie(15,9,n.races$)),p(7),I(ie(21,11,n.loading$)?20:-1),p(3),w("dataSource",ie(24,13,n.filteredGaudiModes$)||qi(17,I2)),p(14),w("matHeaderRowDef",n.displayedColumns),p(),w("matRowDefColumns",n.displayedColumns),p(),I((r=ie(40,15,n.selectedGaudiMode$))?39:-1,r)}},dependencies:[$e,An,_n,vn,Dn,yn,bn,wn,Cn,Sn,Mn,xn,Pe,Ve,xt,Nt,It,$t,Vt,nt,Rn,Wt,Gt,Ut,Ht,zt,Bt,Rt,Ci,ft,pt,yi,Tt,ot,Kh,dt],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.gaudi-mode-table[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{margin:20px}mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})};var tc=b("[Auth] Login",y()),nu=b("[Auth] Login Success",y()),Zh=b("[Auth] Login Failure",y()),nc=b("[Auth] Logout"),iu=b("[Auth] Logout Success"),ba=b("[Auth] Check Auth"),Qh=b("[Auth] Check Auth Success",y()),ru=b("[Auth] Check Auth Failure");var au=fn("auth"),Jh=he(au,t=>t.isAuthenticated),ate=he(au,t=>t.token),Fw=he(au,t=>t.username),Ow=he(au,t=>t.loading),Pw=he(au,t=>t.error);function K2(t,i){t&1&&(c(0,"mat-icon",17),m(1," wifi "),d()),t&2&&w("matTooltip","Ger\xE4t verbunden")}function X2(t,i){t&1&&(c(0,"mat-icon",18),m(1," wifi_off "),d()),t&2&&w("matTooltip","Ger\xE4t nicht verbunden")}function Z2(t,i){if(t&1&&T(0,K2,2,1,"mat-icon",17)(1,X2,2,1,"mat-icon",18),t&2){let e=i;I(e?0:e===!1?1:-1)}}function Q2(t,i){t&1&&(c(0,"mat-icon",4),m(1," help_outline "),d()),t&2&&w("matTooltip","Verbindungsstatus unbekannt")}var ef=class t{store=s(Ge);username$;deviceConnected$;constructor(){this.username$=this.store.select(Fw),this.deviceConnected$=this.store.select(fw)}ngOnInit(){this.store.dispatch(Dl()),this.store.dispatch(Hd())}ngOnDestroy(){this.store.dispatch(wl())}logout(){this.store.dispatch(nc())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-dashboard"]],decls:42,vars:7,consts:[["menu","matMenu"],["color","primary"],[1,"spacer"],[1,"connection-status"],[1,"status-icon","unknown",3,"matTooltip"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","","disabled","",1,"user-info"],["mat-menu-item","",3,"click"],[1,"dashboard-container"],["label","Altersgruppen"],["label","Rennen"],["label","Teams"],["label","Kategorien"],["label","Teilnehmer"],["label","Messungen"],["label","Zuordnung & Sync"],["label","Gaudi-Modus"],[1,"status-icon","connected",3,"matTooltip"],[1,"status-icon","disconnected",3,"matTooltip"]],template:function(e,n){if(e&1&&(c(0,"mat-toolbar",1)(1,"span"),m(2,"TimeControl - Zeitnahme System"),d(),A(3,"span",2),c(4,"div",3),T(5,Z2,2,1),J(6,"async"),Xt(7,Q2,2,1,"mat-icon",4),d(),c(8,"button",5)(9,"mat-icon"),m(10,"account_circle"),d()(),c(11,"mat-menu",null,0)(13,"div",6)(14,"mat-icon"),m(15,"person"),d(),c(16,"span"),m(17),J(18,"async"),d()(),c(19,"button",7),D("click",function(){return n.logout()}),c(20,"mat-icon"),m(21,"logout"),d(),c(22,"span"),m(23,"Abmelden"),d()()()(),c(24,"div",8)(25,"mat-tab-group")(26,"mat-tab",9),A(27,"app-age-group-list"),d(),c(28,"mat-tab",10),A(29,"app-race-list"),d(),c(30,"mat-tab",11),A(31,"app-team-list"),d(),c(32,"mat-tab",12),A(33,"app-category-list"),d(),c(34,"mat-tab",13),A(35,"app-participant-list"),d(),c(36,"mat-tab",14),A(37,"app-measurement-list"),d(),c(38,"mat-tab",15),A(39,"app-race-measurement-list"),d(),c(40,"mat-tab",16),A(41,"app-gaudi-modus"),d()()()),e&2){let r,a=yt(12);p(5),I((r=ie(6,3,n.deviceConnected$))?5:7,r),p(3),w("matMenuTriggerFor",a),p(9),ce(ie(18,5,n.username$))}},dependencies:[$e,zC,M_,GC,HC,UC,Pe,xt,Nt,It,Wo,Cr,Ur,Ho,Bt,Rt,kp,rh,Mh,Rh,Ph,Lh,Bh,Xh,dt],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:20px}mat-toolbar[_ngcontent-%COMP%]{margin-bottom:20px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 16px;cursor:default}.connection-status[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:16px}.status-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.status-icon.connected[_ngcontent-%COMP%]{color:#4caf50}.status-icon.disconnected[_ngcontent-%COMP%]{color:#f44336}.status-icon.unknown[_ngcontent-%COMP%]{color:#ff9800}"]})};function J2(t,i){t&1&&(c(0,"mat-error"),m(1,"Benutzername ist erforderlich"),d())}function eL(t,i){t&1&&(c(0,"mat-error"),m(1,"Passwort ist erforderlich"),d())}function tL(t,i){t&1&&(c(0,"div",8)(1,"mat-icon"),m(2,"error"),d(),c(3,"span"),m(4),d()()),t&2&&(p(4),ce(i))}function nL(t,i){t&1&&(A(0,"mat-spinner",10),c(1,"span"),m(2,"Anmelden..."),d())}function iL(t,i){t&1&&(c(0,"span"),m(1,"Anmelden"),d())}var tf=class t{fb=s(In);store=s(Ge);router=s(Vi);destroy$=new F;loginForm;loading$;error$;constructor(){this.loginForm=this.fb.group({username:["",fe.required],password:["",fe.required]}),this.loading$=this.store.select(Ow),this.error$=this.store.select(Pw)}ngOnInit(){this.store.select(Jh).pipe(x(this.destroy$)).subscribe(i=>{i&&this.router.navigate(["/dashboard"]).then()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSubmit(){this.loginForm.valid&&this.store.dispatch(tc({credentials:this.loginForm.value}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-login"]],decls:32,vars:12,consts:[[1,"login-container"],[1,"login-card"],[1,"title-with-icon"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","username","required","","autocomplete","username"],["matPrefix",""],["matInput","","type","password","formControlName","password","required","","autocomplete","current-password"],[1,"error-message"],["mat-raised-button","","color","primary","type","submit",1,"login-button",3,"disabled"],["diameter","20"]],template:function(e,n){if(e&1&&(c(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title")(4,"div",2)(5,"mat-icon"),m(6,"access_time"),d(),c(7,"span"),m(8,"TimeControl Login"),d()()()(),c(9,"mat-card-content")(10,"form",3),D("ngSubmit",function(){return n.onSubmit()}),c(11,"mat-form-field",4)(12,"mat-label"),m(13,"Benutzername"),d(),A(14,"input",5),Ce(),c(15,"mat-icon",6),m(16,"person"),d(),T(17,J2,2,0,"mat-error"),d(),c(18,"mat-form-field",4)(19,"mat-label"),m(20,"Passwort"),d(),A(21,"input",7),Ce(),c(22,"mat-icon",6),m(23,"lock"),d(),T(24,eL,2,0,"mat-error"),d(),T(25,tL,5,1,"div",8),J(26,"async"),c(27,"button",9),J(28,"async"),T(29,nL,3,0),J(30,"async"),Xt(31,iL,2,0,"span"),d()()()()()),e&2){let r;p(10),w("formGroup",n.loginForm),p(4),Se(),p(3),I(n.loginForm.get("username")?.hasError("required")&&n.loginForm.get("username")?.touched?17:-1),p(4),Se(),p(3),I(n.loginForm.get("password")?.hasError("required")&&n.loginForm.get("password")?.touched?24:-1),p(),I((r=ie(26,6,n.error$))?25:-1,r),p(2),w("disabled",!n.loginForm.valid||ie(28,8,n.loading$)),p(2),I(ie(30,10,n.loading$)?29:31)}},dependencies:[$e,Nn,Tn,qt,Kt,kn,Yt,At,rn,Wt,Gt,Ut,Ht,zt,ot,ft,pt,an,cb,On,Fn,Pe,Ve,$t,Vt,Nt,It,dt],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:20px}.login-card[_ngcontent-%COMP%]{max-width:450px;width:100%;box-shadow:0 8px 32px #0000001a}mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}.title-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:24px;justify-content:center;width:100%}.title-with-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:100%;height:48px;font-size:16px;display:flex;align-items:center;justify-content:center;gap:10px}.error-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#f44336;background-color:#ffebee;padding:12px;border-radius:4px;font-size:14px}.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}mat-spinner[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:1})};var Lw=(t,i)=>{let e=s(Ge),n=s(Vi);return e.dispatch(ba()),e.select(Jh).pipe(Le(1),R(r=>r?!0:(n.navigate(["/login"]),!1)))};var Bw=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:tf},{path:"dashboard",component:ef,canActivate:[Lw]},{path:"**",redirectTo:"/login"}];var su="PERFORM_ACTION",rL="REFRESH",Ww="RESET",qw="ROLLBACK",Yw="COMMIT",Kw="SWEEP",Xw="TOGGLE_ACTION",aL="SET_ACTIONS_ACTIVE",Zw="JUMP_TO_STATE",Qw="JUMP_TO_ACTION",Hb="IMPORT_STATE",Jw="LOCK_CHANGES",eM="PAUSE_RECORDING",rc=class{constructor(i,e){if(this.action=i,this.timestamp=e,this.type=su,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Nb=class{constructor(){this.type=rL}},Fb=class{constructor(i){this.timestamp=i,this.type=Ww}},Ob=class{constructor(i){this.timestamp=i,this.type=qw}},Pb=class{constructor(i){this.timestamp=i,this.type=Yw}},Lb=class{constructor(){this.type=Kw}},Bb=class{constructor(i){this.id=i,this.type=Xw}};var Vb=class{constructor(i){this.index=i,this.type=Zw}},$b=class{constructor(i){this.actionId=i,this.type=Qw}},jb=class{constructor(i){this.nextLiftedState=i,this.type=Hb}},Gb=class{constructor(i){this.status=i,this.type=Jw}},zb=class{constructor(i){this.status=i,this.type=eM}};var of=new S("@ngrx/store-devtools Options"),Vw=new S("@ngrx/store-devtools Initial Config");function tM(){return null}var oL="NgRx Store DevTools";function sL(t){let i={maxAge:!1,monitor:tM,actionSanitizer:void 0,stateSanitizer:void 0,actionCreators:void 0,name:oL,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof t=="function"?t():t,n=e.logOnly?{pause:!0,export:!0,test:!0}:!1,r=e.features||n||i.features;r.import===!0&&(r.import="custom");let a=Object.assign({},i,{features:r},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function $w(t,i){return t.filter(e=>i.indexOf(e)<0)}function nM(t){let{computedStates:i,currentStateIndex:e}=t;if(e>=i.length){let{state:r}=i[i.length-1];return r}let{state:n}=i[e];return n}function ou(t){return new rc(t,+Date.now())}function lL(t,i){return Object.keys(i).reduce((e,n)=>{let r=Number(n);return e[r]=iM(t,i[r],r),e},{})}function iM(t,i,e){return _(h({},i),{action:t(i.action,e)})}function cL(t,i){return i.map((e,n)=>({state:rM(t,e.state,n),error:e.error}))}function rM(t,i,e){return t(i,e)}function aM(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function dL(t,i,e,n){let r=[],a={},o=[];return t.stagedActionIds.forEach((l,u)=>{let f=t.actionsById[l];f&&(u&&Wb(t.computedStates[u],f,i,e,n)||(a[l]=f,r.push(l),o.push(t.computedStates[u])))}),_(h({},t),{stagedActionIds:r,actionsById:a,computedStates:o})}function Wb(t,i,e,n,r){let a=e&&!e(t,i.action),o=n&&!i.action.type.match(n.map(u=>jw(u)).join("|")),l=r&&i.action.type.match(r.map(u=>jw(u)).join("|"));return a||o||l}function jw(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oM(t){return{ngZone:t?s(re):null,connectInZone:t}}var sf=(()=>{class t extends vr{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Oe(t)))(r||t)}})()}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),nf={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Ub=new S("@ngrx/store-devtools Redux Devtools Extension");function uL(t){return typeof t=="object"&&t!==null&&!("type"in t)&&typeof t.selected=="number"&&Array.isArray(t.args)}function Gw(t){let i=String(t),e=i.match(/^[^(]*\(([^)]*)\)/);if(!e){let n=i.match(/^\s*([^=\s(]+)\s*=>/);return n?[n[1]]:[]}return e[1].split(",").map(n=>n.replace(/^\s*\.{3}/,"").split("=")[0].trim()).filter(n=>n!=="")}function mL(t){return Array.isArray(t)?t.map(i=>({name:i.type||i.name||"anonymous",func:i,args:Gw(i)})):Object.keys(t).map(i=>({name:i,func:t[i],args:Gw(t[i])}))}var zw=t=>t===""?void 0:(0,eval)(`(${t})`),sM=(()=>{class t{constructor(e,n,r){this.config=n,this.dispatcher=r,this.zoneConfig=oM(this.config.connectInZone),this.devtoolsExtension=e,this.actionCreatorDescriptors=n.actionCreators?mL(n.actionCreators):void 0,this.createActionStreams()}notify(e,n){if(this.devtoolsExtension)if(e.type===su){if(n.isLocked||n.isPaused)return;let r=nM(n);if(aM(this.config)&&Wb(r,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?rM(this.config.stateSanitizer,r,n.currentStateIndex):r,o=this.config.actionSanitizer?iM(this.config.actionSanitizer,e,n.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,a))}else{let r=_(h({},n),{stagedActionIds:n.stagedActionIds,actionsById:this.config.actionSanitizer?lL(this.config.actionSanitizer,n.actionsById):n.actionsById,computedStates:this.config.stateSanitizer?cL(this.config.stateSanitizer,n.computedStates):n.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new lt(e=>{let n=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=n,n.init(),n.subscribe(r=>e.next(r)),n.unsubscribe}):Pt}createActionStreams(){let e=this.createChangesObservable().pipe(fu()),n=e.pipe(xe(f=>f.type===nf.START)),r=e.pipe(xe(f=>f.type===nf.STOP)),a=e.pipe(xe(f=>f.type===nf.DISPATCH),R(f=>this.unwrapAction(f.payload)),ya(f=>f.type===Hb?this.dispatcher.pipe(xe(g=>g.type===Gm),Zb(1e3),lr(1e3),R(()=>f),K(()=>E(f)),Le(1)):E(f))),l=e.pipe(xe(f=>f.type===nf.ACTION),R(f=>this.unwrapAction(f.payload))).pipe(x(r)),u=a.pipe(x(r));this.start$=n.pipe(x(r)),this.actions$=this.start$.pipe(ze(()=>l)),this.liftedActions$=this.start$.pipe(ze(()=>u))}unwrapAction(e){if(typeof e=="string")return(0,eval)(`(${e})`);if(this.actionCreatorDescriptors&&uL(e)){let n=this.actionCreatorDescriptors[e.selected];if(n){let r=e.args.map(zw);if(e.rest){let a=zw(e.rest);Array.isArray(a)&&r.push(...a)}return n.func(...r)}}return e}getExtensionConfig(e){let n={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(n.maxAge=e.maxAge),this.actionCreatorDescriptors&&(n.actionCreators=this.actionCreatorDescriptors),n}sendToReduxDevtools(e){try{e()}catch(n){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",n)}}static{this.\u0275fac=function(n){return new(n||t)(Y(Ub),Y(of),Y(sf))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})(),af={type:ld},pL="@ngrx/store-devtools/recompute",hL={type:pL};function lM(t,i,e,n,r){if(n)return{state:e,error:"Interrupted by an error up the chain"};let a=e,o;try{a=t(e,i)}catch(l){o=l.toString(),r.handleError(l)}return{state:a,error:o}}function rf(t,i,e,n,r,a,o,l,u){if(i>=t.length&&t.length===a.length)return t;let f=t.slice(0,i),g=a.length-(u?1:0);for(let v=i;v<g;v++){let k=a[v],G=r[k].action,q=f[v-1],ee=q?q.state:n,ye=q?q.error:void 0,De=o.indexOf(k)>-1?q:lM(e,G,ee,ye,l);f.push(De)}return u&&f.push(t[t.length-1]),f}function fL(t,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:ou(af)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function gL(t,i,e,n,r={}){return a=>(o,l)=>{let{monitorState:u,actionsById:f,nextActionId:g,stagedActionIds:v,skippedActionIds:k,committedState:G,currentStateIndex:q,computedStates:ee,isLocked:ye,isPaused:ke}=o||i;o||(f=Object.create(f));function De(Qe){let Ne=Qe,ln=v.slice(1,Ne+1);for(let Ot=0;Ot<ln.length;Ot++)if(ee[Ot+1].error){Ne=Ot,ln=v.slice(1,Ne+1);break}else delete f[ln[Ot]];k=k.filter(Ot=>ln.indexOf(Ot)===-1),v=[0,...v.slice(Ne+1)],G=ee[Ne].state,ee=ee.slice(Ne),q=q>Ne?q-Ne:0}function Me(){f={0:ou(af)},g=1,v=[0],k=[],G=ee[q].state,q=0,ee=[]}let je=0;switch(l.type){case Jw:{ye=l.status,je=1/0;break}case eM:{ke=l.status,ke?(v=[...v,g],f[g]=new rc({type:"@ngrx/devtools/pause"},+Date.now()),g++,je=v.length-1,ee=ee.concat(ee[ee.length-1]),q===v.length-2&&q++,je=1/0):Me();break}case Ww:{f={0:ou(af)},g=1,v=[0],k=[],G=t,q=0,ee=[];break}case Yw:{Me();break}case qw:{f={0:ou(af)},g=1,v=[0],k=[],q=0,ee=[];break}case Xw:{let{id:Qe}=l;k.indexOf(Qe)===-1?k=[Qe,...k]:k=k.filter(ln=>ln!==Qe),je=v.indexOf(Qe);break}case aL:{let{start:Qe,end:Ne,active:ln}=l,Ot=[];for(let di=Qe;di<Ne;di++)Ot.push(di);ln?k=$w(k,Ot):k=[...k,...Ot],je=v.indexOf(Qe);break}case Zw:{q=l.index,je=1/0;break}case Qw:{let Qe=v.indexOf(l.actionId);Qe!==-1&&(q=Qe),je=1/0;break}case Kw:{v=$w(v,k),k=[],q=Math.min(q,v.length-1);break}case su:{if(ye)return o||i;if(ke||o&&Wb(o.computedStates[q],l,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let Ne=ee[ee.length-1];ee=[...ee.slice(0,-1),lM(a,l.action,Ne.state,Ne.error,e)],je=1/0;break}r.maxAge&&v.length===r.maxAge&&De(1),q===v.length-1&&q++;let Qe=g++;f[Qe]=l,v=[...v,Qe],je=v.length-1;break}case Hb:{({monitorState:u,actionsById:f,nextActionId:g,stagedActionIds:v,skippedActionIds:k,committedState:G,currentStateIndex:q,computedStates:ee,isLocked:ye,isPaused:ke}=l.nextLiftedState);break}case ld:{je=0,r.maxAge&&v.length>r.maxAge&&(ee=rf(ee,je,a,G,f,v,k,e,ke),De(v.length-r.maxAge),je=1/0);break}case Gm:{if(ee.filter(Ne=>Ne.error).length>0)je=0,r.maxAge&&v.length>r.maxAge&&(ee=rf(ee,je,a,G,f,v,k,e,ke),De(v.length-r.maxAge),je=1/0);else{if(!ke&&!ye){q===v.length-1&&q++;let Ne=g++;f[Ne]=new rc(l,+Date.now()),v=[...v,Ne],je=v.length-1,ee=rf(ee,je,a,G,f,v,k,e,ke)}ee=ee.map(Ne=>_(h({},Ne),{state:a(Ne.state,hL)})),q=v.length-1,r.maxAge&&v.length>r.maxAge&&De(v.length-r.maxAge),je=1/0}break}default:{je=1/0;break}}return ee=rf(ee,je,a,G,f,v,k,e,ke),u=n(u,l),{monitorState:u,actionsById:f,nextActionId:g,stagedActionIds:v,skippedActionIds:k,committedState:G,currentStateIndex:q,computedStates:ee,isLocked:ye,isPaused:ke}}}var Uw=(()=>{class t{constructor(e,n,r,a,o,l,u,f){let g=fL(u,f.monitor),v=gL(u,g,l,f.monitor,f),k=qe(qe(n.asObservable().pipe(ea(1)),a.actions$).pipe(R(ou)),e,a.liftedActions$).pipe(cu(lu)),G=r.pipe(R(v)),q=oM(f.connectInZone),ee=new va(1);this.liftedStateSubscription=k.pipe(gu(G),Hw(q),hu(({state:De},[Me,je])=>{let Qe=je(De,Me);return Me.type!==su&&aM(f)&&(Qe=dL(Qe,f.predicate,f.actionsSafelist,f.actionsBlocklist)),a.notify(Me,Qe),{state:Qe,action:Me}},{state:g,action:null})).subscribe(({state:De,action:Me})=>{if(ee.next(De),Me.type===su){let je=Me.action;o.next(je)}}),this.extensionStartSubscription=a.start$.pipe(Hw(q)).subscribe(()=>{this.refresh()});let ye=ee.asObservable(),ke=ye.pipe(R(nM));Object.defineProperty(ke,"state",{value:Bm(ke,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=ye,this.state=ke}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new rc(e,+Date.now()))}refresh(){this.dispatch(new Nb)}reset(){this.dispatch(new Fb(+Date.now()))}rollback(){this.dispatch(new Ob(+Date.now()))}commit(){this.dispatch(new Pb(+Date.now()))}sweep(){this.dispatch(new Lb)}toggleAction(e){this.dispatch(new Bb(e))}jumpToAction(e){this.dispatch(new $b(e))}jumpToState(e){this.dispatch(new Vb(e))}importState(e){this.dispatch(new jb(e))}lockChanges(e){this.dispatch(new Gb(e))}pauseRecording(e){this.dispatch(new zb(e))}static{this.\u0275fac=function(n){return new(n||t)(Y(sf),Y(vr),Y(Ga),Y(sM),Y(za),Y(Hi),Y(cd),Y(of))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac})}}return t})();function Hw({ngZone:t,connectInZone:i}){return e=>i?new lt(n=>e.subscribe({next:r=>t.run(()=>n.next(r)),error:r=>t.run(()=>n.error(r)),complete:()=>t.run(()=>n.complete())})):e}var _L=new S("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function bL(t,i){return!!t||i.monitor!==tM}function vL(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function yL(t){return t.state}function cM(t={}){return Zn([sM,sf,Uw,{provide:Vw,useValue:t},{provide:_L,deps:[Ub,of],useFactory:bL},{provide:Ub,useFactory:vL},{provide:of,deps:[Vw],useFactory:sL},{provide:$o,deps:[Uw],useFactory:yL},{provide:Vo,useExisting:sf}])}var CL={participants:[],selectedParticipantId:null,loading:!1,pdfExportLoading:!1,importLoading:!1,importResult:null,error:null},dM=gn(CL,C(sr,t=>_(h({},t),{loading:!0,error:null})),C(Ip,(t,{participants:i})=>_(h({},t),{participants:i,loading:!1})),C(Np,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Fp,t=>_(h({},t),{loading:!0,error:null})),C(Op,(t,{participant:i})=>_(h({},t),{participants:t.participants.some(e=>e.id===i.id)?t.participants.map(e=>e.id===i.id?i:e):[...t.participants,i],loading:!1})),C(Pp,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(ps,t=>_(h({},t),{loading:!0,error:null})),C(hs,(t,{participant:i})=>_(h({},t),{participants:[...t.participants,i],loading:!1})),C(fs,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(gs,t=>_(h({},t),{loading:!0,error:null})),C(_s,(t,{participant:i})=>_(h({},t),{participants:t.participants.map(e=>e.id===i.id?i:e),loading:!1})),C(bs,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(vs,t=>_(h({},t),{loading:!0,error:null})),C(ys,(t,{id:i})=>_(h({},t),{participants:t.participants.filter(e=>e.id!==i),selectedParticipantId:t.selectedParticipantId===i?null:t.selectedParticipantId,loading:!1})),C(Cs,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Ss,t=>_(h({},t),{loading:!0,error:null})),C(Ds,(t,{raceId:i})=>_(h({},t),{participants:t.participants.filter(e=>e.race?.id!==i),loading:!1})),C(ws,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(tw,(t,{id:i})=>_(h({},t),{selectedParticipantId:i})),C(Ms,t=>_(h({},t),{loading:!0,error:null})),C(Lp,(t,{participants:i})=>_(h({},t),{participants:t.participants.map(e=>i.find(n=>n.id===e.id)||e),loading:!1})),C(Bp,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(xs,t=>_(h({},t),{importLoading:!0,importResult:null,error:null})),C(Vp,(t,{result:i})=>{let e=i.imported??[],n=i.errors??[];return _(h({},t),{participants:[...t.participants,...e],importLoading:!1,importResult:_(h({},i),{imported:e,errors:n})})}),C($p,(t,{error:i})=>_(h({},t),{importLoading:!1,error:i})),C(Es,Rs,ks,Ts,Is,Ns,As,t=>_(h({},t),{pdfExportLoading:!0,error:null})),C(Ld,Bd,Vd,$d,jd,Gd,Pd,t=>_(h({},t),{pdfExportLoading:!1})),C(Gp,zp,Up,Hp,Wp,qp,jp,(t,{error:i})=>_(h({},t),{pdfExportLoading:!1,error:i})));var SL={measurements:[],selectedMeasurementId:null,loading:!1,error:null,continuousModeEnabled:!1,scheduledImportEnabled:!1,deviceStatus:null,deviceConnected:null,isPollingDeviceConnection:!1},uM=gn(SL,C(ga,t=>_(h({},t),{loading:!0,error:null})),C(oh,(t,{measurements:i})=>_(h({},t),{measurements:i,loading:!1})),C(sh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(lh,t=>_(h({},t),{loading:!0,error:null})),C(ch,(t,{measurements:i})=>_(h({},t),{measurements:i,loading:!1})),C(dh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(uh,t=>_(h({},t),{loading:!0,error:null})),C(mh,(t,{measurement:i})=>_(h({},t),{measurements:t.measurements.some(e=>e.id===i.id)?t.measurements.map(e=>e.id===i.id?i:e):[...t.measurements,i],loading:!1})),C(ph,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Js,t=>_(h({},t),{loading:!0,error:null})),C(hh,(t,{measurement:i})=>_(h({},t),{measurements:[...t.measurements,i],loading:!1})),C(fh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(el,t=>_(h({},t),{loading:!0,error:null})),C(gh,(t,{measurement:i})=>_(h({},t),{measurements:t.measurements.map(e=>e.id===i.id?i:e),loading:!1})),C(_h,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(tl,t=>_(h({},t),{loading:!0,error:null})),C(bh,(t,{id:i})=>_(h({},t),{measurements:t.measurements.filter(e=>e.id!==i),selectedMeasurementId:t.selectedMeasurementId===i?null:t.selectedMeasurementId,loading:!1})),C(vh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(dw,(t,{id:i})=>_(h({},t),{selectedMeasurementId:i})),C(nl,t=>_(h({},t),{loading:!0,error:null})),C(Za,t=>_(h({},t),{measurements:[],selectedMeasurementId:null,loading:!1})),C(il,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(dl,t=>_(h({},t),{loading:!0,error:null})),C(Ja,(t,{clearAfterArchive:i})=>_(h({},t),{measurements:i?[]:t.measurements,selectedMeasurementId:i?null:t.selectedMeasurementId,loading:!1})),C(ul,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(rl,t=>_(h({},t),{loading:!0,error:null})),C(Qa,(t,{enabled:i})=>_(h({},t),{continuousModeEnabled:i,loading:!1})),C(al,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(ol,t=>_(h({},t),{loading:!0,error:null})),C(sl,(t,{enabled:i})=>_(h({},t),{scheduledImportEnabled:i,loading:!1})),C(ll,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(cl,t=>_(h({},t),{loading:!0,error:null})),C(yh,(t,{enabled:i})=>_(h({},t),{scheduledImportEnabled:i,loading:!1})),C(Ch,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(_a,t=>_(h({},t),{loading:!0,error:null})),C(ml,(t,{status:i})=>_(h({},t),{deviceStatus:i,continuousModeEnabled:i==="continuous",loading:!1})),C(pl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(hl,t=>_(h({},t),{loading:!0,error:null})),C(fl,t=>_(h({},t),{loading:!1})),C(gl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(_l,t=>_(h({},t),{loading:!0,error:null})),C(bl,t=>_(h({},t),{loading:!1})),C(vl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(yl,t=>_(h({},t),{loading:!0,error:null})),C(Cl,t=>_(h({},t),{loading:!1})),C(Sl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Dl,t=>_(h({},t),{isPollingDeviceConnection:!0})),C(wl,t=>_(h({},t),{isPollingDeviceConnection:!1})),C(Ml,(t,{connected:i})=>_(h({},t),{deviceConnected:i})),C(Sh,(t,{error:i})=>_(h({},t),{deviceConnected:!1,error:i})));var DL={raceMeasurements:[],loading:!1,error:null},mM=gn(DL,C(eo,t=>_(h({},t),{loading:!0,error:null})),C(xh,(t,{raceMeasurements:i})=>_(h({},t),{raceMeasurements:i,loading:!1})),C(Ah,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(xl,t=>_(h({},t),{loading:!0,error:null})),C(Al,(t,{raceMeasurement:i})=>_(h({},t),{raceMeasurements:t.raceMeasurements.map(e=>e.id===i.id?i:e),loading:!1})),C(El,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Rl,t=>_(h({},t),{loading:!0,error:null})),C(kl,(t,{id:i})=>_(h({},t),{raceMeasurements:t.raceMeasurements.filter(e=>e.id!==i),loading:!1})),C(Tl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Il,t=>_(h({},t),{loading:!0,error:null})),C(Nl,t=>_(h({},t),{loading:!1})),C(Fl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})));var qb={token:null,username:null,isAuthenticated:!1,loading:!1,error:null},pM=gn(qb,C(tc,t=>_(h({},t),{loading:!0,error:null})),C(nu,(t,{response:i})=>_(h({},t),{token:i.access_token||i.token||null,username:i.username||null,isAuthenticated:!0,loading:!1,error:null})),C(Zh,(t,{error:i})=>_(h({},t),{loading:!1,error:i,isAuthenticated:!1,token:null,username:null})),C(nc,t=>_(h({},t),{loading:!0})),C(iu,()=>h({},qb)),C(ba,t=>_(h({},t),{loading:!0})),C(Qh,(t,{token:i,username:e})=>_(h({},t),{token:i,username:e,isAuthenticated:!0,loading:!1})),C(ru,()=>_(h({},qb),{loading:!1})));var wL={ageGroups:[],selectedAgeGroupId:null,loading:!1,error:null},hM=gn(wL,C(to,t=>_(h({},t),{loading:!0,error:null})),C(kh,(t,{ageGroups:i})=>_(h({},t),{ageGroups:i,loading:!1})),C(Th,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Ih,t=>_(h({},t),{loading:!0,error:null})),C(Nh,(t,{ageGroup:i})=>_(h({},t),{ageGroups:t.ageGroups.some(e=>e.id===i.id)?t.ageGroups.map(e=>e.id===i.id?i:e):[...t.ageGroups,i],loading:!1})),C(Fh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Ol,t=>_(h({},t),{loading:!0,error:null})),C(Pl,(t,{ageGroup:i})=>_(h({},t),{ageGroups:[...t.ageGroups,i],loading:!1})),C(Ll,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Bl,t=>_(h({},t),{loading:!0,error:null})),C(Vl,(t,{ageGroup:i})=>_(h({},t),{ageGroups:t.ageGroups.map(e=>e.id===i.id?i:e),loading:!1})),C($l,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(jl,t=>_(h({},t),{loading:!0,error:null})),C(Gl,(t,{id:i})=>_(h({},t),{ageGroups:t.ageGroups.filter(e=>e.id!==i),selectedAgeGroupId:t.selectedAgeGroupId===i?null:t.selectedAgeGroupId,loading:!1})),C(zl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(ww,(t,{id:i})=>_(h({},t),{selectedAgeGroupId:i})));var ML={races:[],selectedRaceId:null,loading:!1,error:null},fM=gn(ML,C(oi,t=>_(h({},t),{loading:!0,error:null})),C(lp,(t,{races:i})=>_(h({},t),{races:i,loading:!1})),C(cp,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Yo,t=>_(h({},t),{loading:!0})),C(Ko,(t,{race:i})=>_(h({},t),{races:[...t.races,i],loading:!1})),C(Xo,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Zo,t=>_(h({},t),{loading:!0})),C(Qo,(t,{race:i})=>_(h({},t),{races:t.races.map(e=>e.id===i.id?i:e),loading:!1})),C(Jo,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(es,t=>_(h({},t),{loading:!0})),C(ts,(t,{id:i})=>_(h({},t),{races:t.races.filter(e=>e.id!==i),loading:!1})),C(ns,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Ar,(t,{id:i})=>_(h({},t),{selectedRaceId:i})));var xL={teams:[],loading:!1,error:null},gM=gn(xL,C(Kr,t=>_(h({},t),{loading:!0,error:null})),C(Zp,(t,{teams:i})=>_(h({},t),{teams:i,loading:!1})),C(Qp,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Os,t=>_(h({},t),{loading:!0,error:null})),C(Ps,(t,{team:i})=>_(h({},t),{teams:[...t.teams,i],loading:!1})),C(Ls,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Bs,t=>_(h({},t),{loading:!0,error:null})),C(Vs,(t,{team:i})=>_(h({},t),{teams:t.teams.map(e=>e.id===i.id?i:e),loading:!1})),C($s,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(js,t=>_(h({},t),{loading:!0,error:null})),C(Gs,(t,{id:i})=>_(h({},t),{teams:t.teams.filter(e=>e.id!==i),loading:!1})),C(zs,(t,{error:i})=>_(h({},t),{loading:!1,error:i})));var AL={categories:[],loading:!1,error:null},_M=gn(AL,C(Xr,t=>_(h({},t),{loading:!0,error:null})),C(th,(t,{categories:i})=>_(h({},t),{categories:i,loading:!1})),C(nh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Us,t=>_(h({},t),{loading:!0,error:null})),C(Hs,(t,{category:i})=>_(h({},t),{categories:[...t.categories,i],loading:!1})),C(Ws,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(qs,t=>_(h({},t),{loading:!0,error:null})),C(Ys,(t,{category:i})=>_(h({},t),{categories:t.categories.map(e=>e.id===i.id?i:e),loading:!1})),C(Ks,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Xs,t=>_(h({},t),{loading:!0,error:null})),C(Zs,(t,{id:i})=>_(h({},t),{categories:t.categories.filter(e=>e.id!==i),loading:!1})),C(Qs,(t,{error:i})=>_(h({},t),{loading:!1,error:i})));var EL={gaudiModes:[],selectedGaudiModeId:null,pairing:[],ranking:[],loading:!1,pdfExportLoading:!1,error:null},bM=gn(EL,C(Ul,t=>_(h({},t),{loading:!0,error:null})),C(Vh,(t,{gaudiModes:i})=>_(h({},t),{gaudiModes:i,loading:!1})),C($h,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Hl,t=>_(h({},t),{loading:!0,error:null})),C(Wl,(t,{gaudiMode:i})=>_(h({},t),{gaudiModes:[...t.gaudiModes,i],loading:!1})),C(ql,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(jh,t=>_(h({},t),{loading:!0,error:null})),C(Gh,(t,{gaudiMode:i})=>_(h({},t),{gaudiModes:t.gaudiModes.map(e=>e.id===i.id?i:e),loading:!1})),C(zh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Yl,t=>_(h({},t),{loading:!0,error:null})),C(Kl,(t,{id:i})=>_(h({},t),{gaudiModes:t.gaudiModes.filter(e=>e.id!==i),selectedGaudiModeId:t.selectedGaudiModeId===i?null:t.selectedGaudiModeId,loading:!1})),C(Xl,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Qd,(t,{id:i})=>_(h({},t),{selectedGaudiModeId:i,pairing:[],ranking:[]})),C(Zl,Ql,t=>_(h({},t),{loading:!0,error:null})),C(Jd,(t,{pairing:i})=>_(h({},t),{pairing:i,loading:!1})),C(eu,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(Jl,t=>_(h({},t),{loading:!0,error:null})),C(Uh,(t,{ranking:i})=>_(h({},t),{ranking:i,loading:!1})),C(Hh,(t,{error:i})=>_(h({},t),{loading:!1,error:i})),C(ec,t=>_(h({},t),{pdfExportLoading:!0})),C(tu,t=>_(h({},t),{pdfExportLoading:!1})),C(Wh,(t,{error:i})=>_(h({},t),{pdfExportLoading:!1,error:i})));var sn={production:!1,apiUrl:"http://localhost:18000"};var lf=class t{http=s(kt);apiUrl=`${sn.apiUrl}/participants`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}deleteByRaceId(i){return this.http.delete(`${this.apiUrl}/race/${i}`)}assignRaceNumbers(i){return this.http.post(`${this.apiUrl}/race/${i}/assign-race-numbers`,{})}importCsv(i,e){let n=new FormData;return n.append("file",e),this.http.post(`${this.apiUrl}/import/${i}`,n)}exportStartListToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/startlist/${i}`,{responseType:"blob"})}exportAllToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/all/${i}`,{responseType:"blob"})}exportByGenderToPdf(i,e){return this.http.get(`${this.apiUrl}/export/pdf/gender/${i}/${e}`,{responseType:"blob"})}exportAllAgeGroupsToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/${i}`,{responseType:"blob"})}exportAllByCategoryToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/all/categories/${i}`,{responseType:"blob"})}exportByGenderByCategoryToPdf(i,e){return this.http.get(`${this.apiUrl}/export/pdf/gender/${i}/categories/${e}`,{responseType:"blob"})}exportAllAgeGroupsByCategoryToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/categories/${i}`,{responseType:"blob"})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var cf=class t{actions$=s(Ze);participantService=s(lf);loadParticipants$=X(()=>this.actions$.pipe(M(sr),te(()=>this.participantService.getAll().pipe(R(i=>Ip({participants:i})),K(i=>E(Np({error:i.message||"Failed to load participants"})))))));loadParticipant$=X(()=>this.actions$.pipe(M(Fp),te(({id:i})=>this.participantService.getById(i).pipe(R(e=>Op({participant:e})),K(e=>E(Pp({error:e.message||"Failed to load participant"})))))));createParticipant$=X(()=>this.actions$.pipe(M(ps),te(({participant:i})=>this.participantService.create(i).pipe(R(e=>hs({participant:e})),K(e=>E(fs({error:e.message||"Failed to create participant"})))))));updateParticipant$=X(()=>this.actions$.pipe(M(gs),te(({id:i,participant:e})=>this.participantService.update(i,e).pipe(R(n=>_s({participant:n})),K(n=>E(bs({error:n.message||"Failed to update participant"})))))));deleteParticipant$=X(()=>this.actions$.pipe(M(vs),te(({id:i})=>this.participantService.delete(i).pipe(R(()=>ys({id:i})),K(e=>E(Cs({error:e.message||"Failed to delete participant"})))))));deleteParticipantsByRaceId$=X(()=>this.actions$.pipe(M(Ss),te(({raceId:i})=>this.participantService.deleteByRaceId(i).pipe(R(()=>Ds({raceId:i})),K(e=>E(ws({error:e.message||"Failed to delete participants by race"})))))));assignRaceNumbers$=X(()=>this.actions$.pipe(M(Ms),te(({raceId:i})=>this.participantService.assignRaceNumbers(i).pipe(R(e=>Lp({participants:e})),K(e=>E(Bp({error:e.message||"Failed to assign race numbers"})))))));importParticipantsCsv$=X(()=>this.actions$.pipe(M(xs),te(({raceId:i,file:e})=>this.participantService.importCsv(i,e).pipe(R(n=>Vp({result:n})),K(n=>E($p({error:n.message||"Failed to import participants"})))))));exportStartListPdf$=X(()=>this.actions$.pipe(M(As),te(({raceId:i})=>this.participantService.exportStartListToPdf(i).pipe(R(e=>Pd({blob:e,filename:"startliste.pdf"})),K(e=>E(jp({error:e.message||"Failed to export PDF"})))))));exportAllPdf$=X(()=>this.actions$.pipe(M(Es),te(({raceId:i})=>this.participantService.exportAllToPdf(i).pipe(R(e=>Ld({blob:e,filename:"gesamtwertung.pdf"})),K(e=>E(Gp({error:e.message||"Failed to export PDF"})))))));exportByGenderPdf$=X(()=>this.actions$.pipe(M(Rs),te(({gender:i,raceId:e})=>this.participantService.exportByGenderToPdf(i,e).pipe(R(n=>Bd({blob:n,filename:`wertung_${i.toLowerCase()}.pdf`})),K(n=>E(zp({error:n.message||"Failed to export PDF"})))))));exportAllAgeGroupsPdf$=X(()=>this.actions$.pipe(M(ks),te(({raceId:i})=>this.participantService.exportAllAgeGroupsToPdf(i).pipe(R(e=>Vd({blob:e,filename:"wertung_altersklassen.pdf"})),K(e=>E(Up({error:e.message||"Failed to export PDF"})))))));exportAllByCategoryPdf$=X(()=>this.actions$.pipe(M(Ts),te(({raceId:i})=>this.participantService.exportAllByCategoryToPdf(i).pipe(R(e=>$d({blob:e,filename:"gesamtwertung_kategorien.pdf"})),K(e=>E(Hp({error:e.message||"Failed to export PDF"})))))));exportByGenderByCategoryPdf$=X(()=>this.actions$.pipe(M(Is),te(({gender:i,raceId:e})=>this.participantService.exportByGenderByCategoryToPdf(i,e).pipe(R(n=>jd({blob:n,filename:`wertung_${i.toLowerCase()}_kategorien.pdf`})),K(n=>E(Wp({error:n.message||"Failed to export PDF"})))))));exportAllAgeGroupsByCategoryPdf$=X(()=>this.actions$.pipe(M(Ns),te(({raceId:i})=>this.participantService.exportAllAgeGroupsByCategoryToPdf(i).pipe(R(e=>Gd({blob:e,filename:"wertung_altersklassen_kategorien.pdf"})),K(e=>E(qp({error:e.message||"Failed to export PDF"})))))));downloadPdf$=X(()=>this.actions$.pipe(M(Ld,Bd,Vd,$d,jd,Gd,Pd),ct(({blob:i,filename:e})=>{let n=window.URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=e,r.click(),window.URL.revokeObjectURL(n)})),{dispatch:!1});static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var df=class t{http=s(kt);apiUrl=`${sn.apiUrl}/measurements`;getAll(){return this.http.get(this.apiUrl)}getByParticipant(i){return this.http.get(`${this.apiUrl}/participant/${i}`)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}reset(i){return this.http.delete(`${this.apiUrl}/reset`,{params:{resetDevice:i.toString()},responseType:"text"})}archive(i,e,n){return this.http.post(`${sn.apiUrl}/races/${i}/archive-measurements`,null,{params:{resetDevice:e.toString(),clearAfterArchive:n.toString()},responseType:"text"})}setContinuousMode(i){return this.http.put(`${this.apiUrl}/continuous-mode`,null,{params:{enable:i.toString()},responseType:"text"})}setScheduledImport(i){return this.http.put(`${this.apiUrl}/scheduled-import`,null,{params:{enable:i.toString()},responseType:"text"})}getScheduledImportStatus(){return this.http.get(`${this.apiUrl}/scheduled-import/status`)}getDeviceStatus(){return this.http.get(`${this.apiUrl}/device-status`,{responseType:"text"})}discardOldestStart(){return this.http.post(`${this.apiUrl}/discard`,null,{responseType:"text"})}exportMeasurements(){return this.http.get(`${this.apiUrl}/export`,{responseType:"blob"})}importMeasurementsFromJson(i){return this.http.post(`${this.apiUrl}/import-json`,i)}checkDeviceConnection(){return new lt(i=>{this.http.get(`${this.apiUrl}/device-connection`,{observe:"response"}).subscribe({next:e=>{i.next(e.status===200),i.complete()},error:()=>{i.next(!1),i.complete()}})})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var uf=class t{actions$=s(Ze);measurementService=s(df);loadMeasurements$=X(()=>this.actions$.pipe(M(ga),te(()=>this.measurementService.getAll().pipe(R(i=>oh({measurements:i})),K(i=>E(sh({error:i.message||"Failed to load measurements"})))))));loadMeasurementsByParticipant$=X(()=>this.actions$.pipe(M(lh),te(({participantId:i})=>this.measurementService.getByParticipant(i).pipe(R(e=>ch({measurements:e})),K(e=>E(dh({error:e.message||"Failed to load measurements by participant"})))))));loadMeasurement$=X(()=>this.actions$.pipe(M(uh),te(({id:i})=>this.measurementService.getById(i).pipe(R(e=>mh({measurement:e})),K(e=>E(ph({error:e.message||"Failed to load measurement"})))))));createMeasurement$=X(()=>this.actions$.pipe(M(Js),te(({measurement:i})=>this.measurementService.create(i).pipe(R(e=>hh({measurement:e})),K(e=>E(fh({error:e.message||"Failed to create measurement"})))))));updateMeasurement$=X(()=>this.actions$.pipe(M(el),te(({id:i,measurement:e})=>this.measurementService.update(i,e).pipe(R(n=>gh({measurement:n})),K(n=>E(_h({error:n.message||"Failed to update measurement"})))))));deleteMeasurement$=X(()=>this.actions$.pipe(M(tl),te(({id:i})=>this.measurementService.delete(i).pipe(R(()=>bh({id:i})),K(e=>E(vh({error:e.message||"Failed to delete measurement"})))))));resetMeasurements$=X(()=>this.actions$.pipe(M(nl),te(({resetDevice:i})=>this.measurementService.reset(i).pipe(R(()=>Za()),K(e=>E(il({error:e.message||"Failed to reset measurements"})))))));reloadAfterReset$=X(()=>this.actions$.pipe(M(Za),R(()=>ga())));setContinuousMode$=X(()=>this.actions$.pipe(M(rl),te(({enable:i})=>this.measurementService.setContinuousMode(i).pipe(R(()=>Qa({enabled:i})),K(e=>E(al({error:e.message||"Failed to set continuous mode"})))))));setScheduledImport$=X(()=>this.actions$.pipe(M(ol),te(({enable:i})=>this.measurementService.setScheduledImport(i).pipe(R(()=>sl({enabled:i})),K(e=>E(ll({error:e.message||"Failed to set scheduled import"})))))));loadScheduledImportStatus$=X(()=>this.actions$.pipe(M(cl),te(()=>this.measurementService.getScheduledImportStatus().pipe(R(i=>yh({enabled:i})),K(i=>E(Ch({error:i.message||"Failed to load scheduled import status"})))))));archiveMeasurements$=X(()=>this.actions$.pipe(M(dl),te(({raceId:i,resetDevice:e,clearAfterArchive:n})=>this.measurementService.archive(i,e,n).pipe(R(()=>Ja({clearAfterArchive:n})),K(r=>E(ul({error:r.message||"Failed to archive measurements"})))))));reloadAfterArchive$=X(()=>this.actions$.pipe(M(Ja),R(()=>ga())));loadDeviceStatus$=X(()=>this.actions$.pipe(M(_a),te(()=>this.measurementService.getDeviceStatus().pipe(R(i=>ml({status:i})),K(i=>E(pl({error:i.message||"Failed to load device status"})))))));discardOldestStart$=X(()=>this.actions$.pipe(M(hl),te(()=>this.measurementService.discardOldestStart().pipe(R(i=>fl({message:i})),K(i=>E(gl({error:i.message||"Failed to discard oldest start"})))))));exportMeasurements$=X(()=>this.actions$.pipe(M(_l),te(()=>this.measurementService.exportMeasurements().pipe(R(i=>{let e=URL.createObjectURL(i),n=document.createElement("a");return n.href=e,n.download="measurements.json",n.click(),URL.revokeObjectURL(e),bl()}),K(i=>E(vl({error:i.message||"Export fehlgeschlagen"})))))));importMeasurementsFromJson$=X(()=>this.actions$.pipe(M(yl),te(({measurements:i})=>this.measurementService.importMeasurementsFromJson(i).pipe(R(e=>Cl({count:e.length})),K(e=>E(Sl({error:e.message||"Import fehlgeschlagen"})))))));startDeviceConnectionPolling$=X(()=>this.actions$.pipe(M(Dl),ze(()=>pu(1e4).pipe(R(()=>Hd()),x(this.actions$.pipe(M(wl)))))));checkDeviceConnection$=X(()=>this.actions$.pipe(M(Hd),te(()=>this.measurementService.checkDeviceConnection().pipe(R(i=>Ml({connected:i})),K(i=>E(Sh({error:i.message||"Failed to check device connection"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var mf=class t{http=s(kt);apiUrl=`${sn.apiUrl}/race-measurements`;getByRace(i){return this.http.get(`${this.apiUrl}/race/${i}`)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}syncToParticipants(i){return this.http.post(`${this.apiUrl}/race/${i}/sync-to-participants`,null,{responseType:"text"})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var pf=class t{actions$=s(Ze);raceMeasurementService=s(mf);loadRaceMeasurements$=X(()=>this.actions$.pipe(M(eo),te(({raceId:i})=>this.raceMeasurementService.getByRace(i).pipe(R(e=>xh({raceMeasurements:e})),K(e=>E(Ah({error:e.message||"Failed to load race measurements"})))))));updateRaceMeasurement$=X(()=>this.actions$.pipe(M(xl),te(({id:i,raceMeasurement:e})=>this.raceMeasurementService.update(i,e).pipe(R(n=>Al({raceMeasurement:n})),K(n=>E(El({error:n.message||"Failed to update race measurement"})))))));deleteRaceMeasurement$=X(()=>this.actions$.pipe(M(Rl),te(({id:i})=>this.raceMeasurementService.delete(i).pipe(R(()=>kl({id:i})),K(e=>E(Tl({error:e.message||"Failed to delete race measurement"})))))));syncRaceMeasurementsToParticipants$=X(()=>this.actions$.pipe(M(Il),te(({raceId:i})=>this.raceMeasurementService.syncToParticipants(i).pipe(R(e=>Nl({message:e})),K(e=>E(Fl({error:e.message||"Failed to sync race measurements to participants"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var ac=class t{http=s(kt);apiUrl=`${sn.apiUrl}/login`;TOKEN_KEY="auth_token";USERNAME_KEY="auth_username";login(i){return this.http.post(this.apiUrl,i).pipe(ct(e=>{let n=e.access_token||e.token;n&&(this.setToken(n),this.setUsername(i.username))}))}logout(){localStorage.removeItem(this.TOKEN_KEY),localStorage.removeItem(this.USERNAME_KEY)}getToken(){return localStorage.getItem(this.TOKEN_KEY)}getUsername(){return localStorage.getItem(this.USERNAME_KEY)}isAuthenticated(){let i=this.getToken();return i?!this.isTokenExpired(i):!1}isTokenExpired(i){try{let e=this.decodeToken(i);if(!e.exp)return!1;let n=e.exp*1e3;return Date.now()>=n}catch{return!0}}decodeToken(i){try{let e=i.split(".")[1],n=atob(e);return JSON.parse(n)}catch{throw new Error("Invalid token format")}}setToken(i){localStorage.setItem(this.TOKEN_KEY,i)}setUsername(i){localStorage.setItem(this.USERNAME_KEY,i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var hf=class t{actions$=s(Ze);authService=s(ac);router=s(Vi);login$=X(()=>this.actions$.pipe(M(tc),te(({credentials:i})=>this.authService.login(i).pipe(R(e=>{let n=_(h({},e),{username:i.username});return nu({response:n})}),K(e=>E(Zh({error:e.error?.message||e.message||"Login fehlgeschlagen"})))))));loginSuccess$=X(()=>this.actions$.pipe(M(nu),ct(()=>{this.router.navigate(["/dashboard"]).then()})),{dispatch:!1});logout$=X(()=>this.actions$.pipe(M(nc),ct(()=>{this.authService.logout()}),R(()=>iu())));logoutSuccess$=X(()=>this.actions$.pipe(M(iu),ct(()=>{this.router.navigate(["/login"]).then()})),{dispatch:!1});checkAuth$=X(()=>this.actions$.pipe(M(ba),R(()=>{let i=this.authService.getToken(),e=this.authService.getUsername();return i&&e?this.authService.isTokenExpired(i)?(this.authService.logout(),ru()):Qh({token:i,username:e}):ru()})));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var ff=class t{http=s(kt);apiUrl=`${sn.apiUrl}/age-groups`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var gf=class t{actions$=s(Ze);ageGroupService=s(ff);loadAgeGroups$=X(()=>this.actions$.pipe(M(to),te(()=>this.ageGroupService.getAll().pipe(R(i=>kh({ageGroups:i})),K(i=>E(Th({error:i.message||"Failed to load age groups"})))))));loadAgeGroup$=X(()=>this.actions$.pipe(M(Ih),te(({id:i})=>this.ageGroupService.getById(i).pipe(R(e=>Nh({ageGroup:e})),K(e=>E(Fh({error:e.message||"Failed to load age group"})))))));createAgeGroup$=X(()=>this.actions$.pipe(M(Ol),te(({ageGroup:i})=>this.ageGroupService.create(i).pipe(R(e=>Pl({ageGroup:e})),K(e=>E(Ll({error:e.message||"Failed to create age group"})))))));updateAgeGroup$=X(()=>this.actions$.pipe(M(Bl),te(({id:i,ageGroup:e})=>this.ageGroupService.update(i,e).pipe(R(n=>Vl({ageGroup:n})),K(n=>E($l({error:n.message||"Failed to update age group"})))))));deleteAgeGroup$=X(()=>this.actions$.pipe(M(jl),te(({id:i})=>this.ageGroupService.delete(i).pipe(R(()=>Gl({id:i})),K(e=>E(zl({error:e.message||"Failed to delete age group"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var _f=class t{http=s(kt);apiUrl=`${sn.apiUrl}/races`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}getByName(i){return this.http.get(`${this.apiUrl}/by-name/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var bf=class t{actions$=s(Ze);raceService=s(_f);loadRaces$=X(()=>this.actions$.pipe(M(oi),ze(()=>this.raceService.getAll().pipe(R(i=>lp({races:i})),K(i=>E(cp({error:i.message||"Failed to load races"})))))));createRace$=X(()=>this.actions$.pipe(M(Yo),ze(({race:i})=>this.raceService.create(i).pipe(R(e=>Ko({race:e})),K(e=>E(Xo({error:e.message||"Failed to create race"})))))));updateRace$=X(()=>this.actions$.pipe(M(Zo),ze(({id:i,race:e})=>this.raceService.update(i,e).pipe(R(n=>Qo({race:n})),K(n=>E(Jo({error:n.message||"Failed to update race"})))))));deleteRace$=X(()=>this.actions$.pipe(M(es),ze(({id:i})=>this.raceService.delete(i).pipe(R(()=>ts({id:i})),K(e=>E(ns({error:e.message||"Failed to delete race"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var vf=class t{http=s(kt);apiUrl=`${sn.apiUrl}/teams`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var yf=class t{actions$=s(Ze);teamService=s(vf);loadTeams$=X(()=>this.actions$.pipe(M(Kr),te(()=>this.teamService.getAll().pipe(R(i=>Zp({teams:i})),K(i=>E(Qp({error:i.message||"Failed to load teams"})))))));createTeam$=X(()=>this.actions$.pipe(M(Os),te(({team:i})=>this.teamService.create(i).pipe(R(e=>Ps({team:e})),K(e=>E(Ls({error:e.message||"Failed to create team"})))))));updateTeam$=X(()=>this.actions$.pipe(M(Bs),te(({id:i,team:e})=>this.teamService.update(i,e).pipe(R(n=>Vs({team:n})),K(n=>E($s({error:n.message||"Failed to update team"})))))));deleteTeam$=X(()=>this.actions$.pipe(M(js),te(({id:i})=>this.teamService.delete(i).pipe(R(()=>Gs({id:i})),K(e=>E(zs({error:e.message||"Failed to delete team"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var Cf=class t{http=s(kt);apiUrl=`${sn.apiUrl}/categories`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var Sf=class t{actions$=s(Ze);categoryService=s(Cf);loadCategories$=X(()=>this.actions$.pipe(M(Xr),te(()=>this.categoryService.getAll().pipe(R(i=>th({categories:i})),K(i=>E(nh({error:i.message||"Failed to load categories"})))))));createCategory$=X(()=>this.actions$.pipe(M(Us),te(({category:i})=>this.categoryService.create(i).pipe(R(e=>Hs({category:e})),K(e=>E(Ws({error:e.message||"Failed to create category"})))))));updateCategory$=X(()=>this.actions$.pipe(M(qs),te(({id:i,category:e})=>this.categoryService.update(i,e).pipe(R(n=>Ys({category:n})),K(n=>E(Ks({error:n.message||"Failed to update category"})))))));deleteCategory$=X(()=>this.actions$.pipe(M(Xs),te(({id:i})=>this.categoryService.delete(i).pipe(R(()=>Zs({id:i})),K(e=>E(Qs({error:e.message||"Failed to delete category"})))))));static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var Df=class t{http=s(kt);apiUrl=`${sn.apiUrl}/gaudi-modes`;getAll(i){let e=i?`${this.apiUrl}?raceId=${i}`:this.apiUrl;return this.http.get(e)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}draw(i){return this.http.post(`${this.apiUrl}/${i}/draw`,{})}getPairing(i){return this.http.get(`${this.apiUrl}/${i}/pairing`)}getRanking(i){return this.http.get(`${this.apiUrl}/${i}/ranking`)}exportPdf(i){return this.http.get(`${this.apiUrl}/${i}/export/pdf`,{responseType:"blob"})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})};var wf=class t{actions$=s(Ze);gaudiModeService=s(Df);loadGaudiModes$=X(()=>this.actions$.pipe(M(Ul),te(({raceId:i})=>this.gaudiModeService.getAll(i).pipe(R(e=>Vh({gaudiModes:e})),K(e=>E($h({error:e.message||"Failed to load Gaudi-Modus instances"})))))));createGaudiMode$=X(()=>this.actions$.pipe(M(Hl),te(({gaudiMode:i})=>this.gaudiModeService.create(i).pipe(R(e=>Wl({gaudiMode:e})),K(e=>E(ql({error:e.message||"Failed to create Gaudi-Modus instance"})))))));updateGaudiMode$=X(()=>this.actions$.pipe(M(jh),te(({id:i,gaudiMode:e})=>this.gaudiModeService.update(i,e).pipe(R(n=>Gh({gaudiMode:n})),K(n=>E(zh({error:n.message||"Failed to update Gaudi-Modus instance"})))))));deleteGaudiMode$=X(()=>this.actions$.pipe(M(Yl),te(({id:i})=>this.gaudiModeService.delete(i).pipe(R(()=>Kl({id:i})),K(e=>E(Xl({error:e.message||"Failed to delete Gaudi-Modus instance"})))))));drawPairing$=X(()=>this.actions$.pipe(M(Zl),te(({id:i})=>this.gaudiModeService.draw(i).pipe(R(e=>Jd({pairing:e})),K(e=>E(eu({error:e.message||"Failed to draw pairing"})))))));loadPairing$=X(()=>this.actions$.pipe(M(Ql),te(({id:i})=>this.gaudiModeService.getPairing(i).pipe(R(e=>Jd({pairing:e})),K(e=>E(eu({error:e.message||"Failed to load pairing"})))))));loadRanking$=X(()=>this.actions$.pipe(M(Jl),te(({id:i})=>this.gaudiModeService.getRanking(i).pipe(R(e=>Uh({ranking:e})),K(e=>E(Hh({error:e.message||"Failed to load ranking"})))))));exportPdf$=X(()=>this.actions$.pipe(M(ec),te(({id:i,filename:e})=>this.gaudiModeService.exportPdf(i).pipe(R(n=>tu({blob:n,filename:e})),K(n=>E(Wh({error:n.message||"Failed to export PDF"})))))));downloadPdf$=X(()=>this.actions$.pipe(M(tu),ct(({blob:i,filename:e})=>{let n=window.URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=e,r.click(),window.URL.revokeObjectURL(n)})),{dispatch:!1});static \u0275fac=function(e){return new(e||t)};static \u0275prov=z({token:t,factory:t.\u0275fac})};var vM=(t,i)=>{let e=s(ac),n=s(Vi),r=e.getToken();if(t.url.includes("/login"))return i(t);if(r){if(e.isTokenExpired(r))return e.logout(),n.navigate(["/login"]).then(),i(t);let a=t.clone({setHeaders:{Authorization:`Bearer ${r}`}});return i(a)}return i(t)};ey(dC);var RL={parse:{dateInput:"input"},display:{dateInput:"input",monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}},yM={providers:[cv(),jg(Bw),ug(pg(),mg([vM])),w0(),{provide:ho,useValue:"de-DE"},{provide:qc,useValue:"de-DE"},{provide:pn,useClass:Lm},{provide:fr,useValue:RL},IC({auth:pM,race:fM,participant:dM,measurement:uM,raceMeasurement:mM,ageGroup:hM,team:gM,category:_M,gaudiMode:bM}),JD([hf,bf,cf,uf,pf,gf,yf,Sf,wf]),cM({maxAge:25,logOnly:!mc(),autoPause:!0,trace:!1,traceLimit:75})]};var Mf=class t{title=be("Alpdesk TimeControl");store=s(Ge);ngOnInit(){this.store.dispatch(ba())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&A(0,"router-outlet")},dependencies:[zc],encapsulation:2,changeDetection:1})};ag(Mf,yM).catch(()=>console.error());
