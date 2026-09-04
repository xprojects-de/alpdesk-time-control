import{$ as rt,$a as ub,$b as ye,$c as dd,A as Mi,Aa as di,Ab as N,Ac as vr,B as ed,Ba as ab,Bb as K,Bc as Mb,C as K_,Ca as L,Cb as R,Cc as eo,D as td,Da as J,Db as Bp,Dc as to,E as je,Ea as Ui,Eb as Vp,Ec as no,F as we,Fa as tl,Fb as Sb,Fc as xb,G as Qs,Ga as ob,Gb as de,Gc as De,H as ie,Ha as ce,Hb as X,Hc as Br,I as oa,Ia as ca,Ib as fa,Ic as oe,J as tr,Ja as sb,Jb as jp,Jc as ue,K as Pe,Ka,Kb as zp,Kc as ga,L as X_,La as Xa,Lb as ir,Lc as cd,M as Z_,Ma as da,Mb as Cb,Mc as Eb,N as Q_,Na as lb,Nb as te,Nc as io,O as sa,Oa as Dt,Ob as k,Oc as Ot,P as J_,Pa as nr,Pb as On,Pc as tt,Q as Ya,Qa as Pp,Qb as T,Qc as Ai,R as Pr,Ra as Oe,Rb as Gp,Rc as Up,S as Np,Sa as Ne,Sb as _t,Sc as ro,T as Ip,Ta as Q,Tb as bt,Tc as Sn,U as eb,Ua as cb,Ub as w,Uc as Ab,V as Op,Va as z,Vb as d,Vc as il,W as tb,Wa as ua,Wb as u,Wc as Me,X as nd,Xa as db,Xb as I,Xc as Rb,Y as id,Ya as ad,Yb as Ze,Yc as B,Z as Fp,Za as ma,Zb as Je,Zc as Jt,_ as Lr,_a as Za,_b as Fn,_c as $p,a as f,aa as Le,ab as mb,ac as Se,ad as rl,b as _,ba as F,bb as hb,bc as Vt,ca as nb,cb as pb,cc as Ge,d as Te,da as ot,db as fb,dc as St,e as Rp,ea as rd,eb as gb,ec as Db,f as at,fa as le,fb as _b,fc as xi,g as W_,ga as la,gb as Qa,gc as Nt,h as E,ha as Lt,hb as bb,hc as M,i as ht,ia as $,ib as od,ic as Ja,j as aa,ja as Y,jb as sd,jc as O,k as kp,ka as ib,kb as Xe,kc as Ie,l as Kc,la as v,lb as h,lc as ne,m as Tp,ma as q,mb as pt,mc as It,n as At,na as s,nb as qt,nc as Ue,o as Xc,oa as bn,ob as ze,oc as G,p as In,pa as Js,pb as We,pc as U,q as x,qa as rb,qb as qe,qc as wb,r as Zc,ra as Bt,rb as nl,rc as Ei,s as qa,sa as vn,sb as Ve,sc as ui,t as q_,ta as yn,tb as ha,tc as vt,u as Qc,ua as he,ub as dt,uc as mi,v as Y_,va as pe,vb as pa,vc as j,w as A,wa as Qt,wb as vb,wc as ut,x as Zt,xa as el,xb as ld,xc as m,y as se,ya as ee,yb,yc as fe,z as Jc,za as re,zb as Lp,zc as _e}from"./chunk-M62OSLR7.js";var kb=null;function Ri(){return kb}function Hp(n){kb??=n}var al=class{},ao=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:()=>s(Tb),providedIn:"platform"})}return n})();var Tb=(()=>{class n extends ao{_location;_history;_doc=s(re);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ri().getBaseHref(this._doc)}onPopState(e){let t=Ri().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Ri().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Ob(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function Nb(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Vr(n){return n&&n[0]!=="?"?`?${n}`:n}var ud=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:()=>s(mw),providedIn:"root"})}return n})(),uw=new v(""),mw=(()=>{class n extends ud{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(re).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ob(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Vr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,a){let o=this.prepareExternalUrl(r+Vr(a));this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,a){let o=this.prepareExternalUrl(r+Vr(a));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(q(ao),q(uw,8))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jr=(()=>{class n{_subject=new E;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=fw(Nb(Ib(t))),this._locationStrategy.onPopState(r=>{let a={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(a.hasUAVisualTransition=!0),this._subject.next(a)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Vr(t))}normalize(e){return n.stripTrailingSlash(pw(this._basePath,Ib(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Vr(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Vr(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Vr;static joinWithSlash=Ob;static stripTrailingSlash=Nb;static \u0275fac=function(t){return new(t||n)(q(ud))};static \u0275prov=$({token:n,factory:()=>hw(),providedIn:"root"})}return n})();function hw(){return new jr(q(ud))}function pw(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ib(n){return n.replace(/\/index\.html$/,"")}function fw(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var en=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(en||{}),ct=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(ct||{}),Pn=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(Pn||{}),Sr={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Pb(n){return xi(n)[Nt.LocaleId]}function Lb(n,i,e){let t=xi(n),r=[t[Nt.DayPeriodsFormat],t[Nt.DayPeriodsStandalone]],a=ki(r,i);return ki(a,e)}function Bb(n,i,e){let t=xi(n),r=[t[Nt.DaysFormat],t[Nt.DaysStandalone]],a=ki(r,i);return ki(a,e)}function Vb(n,i,e){let t=xi(n),r=[t[Nt.MonthsFormat],t[Nt.MonthsStandalone]],a=ki(r,i);return ki(a,e)}function jb(n,i){let t=xi(n)[Nt.Eras];return ki(t,i)}function ol(n,i){let e=xi(n);return ki(e[Nt.DateFormat],i)}function sl(n,i){let e=xi(n);return ki(e[Nt.TimeFormat],i)}function ll(n,i){let t=xi(n)[Nt.DateTimeFormat];return ki(t,i)}function cl(n,i){let e=xi(n),t=e[Nt.NumberSymbols][i];if(typeof t>"u"){if(i===Sr.CurrencyDecimal)return e[Nt.NumberSymbols][Sr.Decimal];if(i===Sr.CurrencyGroup)return e[Nt.NumberSymbols][Sr.Group]}return t}function zb(n){if(!n[Nt.ExtraData])throw new le(2303,!1)}function Gb(n){let i=xi(n);return zb(i),(i[Nt.ExtraData][2]||[]).map(t=>typeof t=="string"?Wp(t):[Wp(t[0]),Wp(t[1])])}function Ub(n,i,e){let t=xi(n);zb(t);let r=[t[Nt.ExtraData][0],t[Nt.ExtraData][1]],a=ki(r,i)||[];return ki(a,e)||[]}function ki(n,i){for(let e=i;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new le(2304,!1)}function Wp(n){let[i,e]=n.split(":");return{hours:+i,minutes:+e}}var gw=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,md=Object.create(null),_w=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,bw=256;function $b(n,i,e,t){let r=Aw(n);vw(i),i=yr(e,i)||i;let o=[],l;for(;i;)if(l=_w.exec(i),l){o=o.concat(l.slice(1));let g=o.pop();if(!g)break;i=g}else{o.push(i);break}let c=r.getTimezoneOffset();t&&(c=Wb(t,c),r=Ew(r,t));let p="";return o.forEach(g=>{let b=Mw(g);p+=b?b(r,e,c):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),p}function vw(n){if(n.length>bw)throw new le(2300,!1)}function _d(n,i,e){let t=new Date(0);return t.setFullYear(n,i,e),t.setHours(0,0,0),t}function yr(n,i){let e=Pb(n);if(md[e]??=Object.create(null),md[e][i])return md[e][i];let t="";switch(i){case"shortDate":t=ol(n,Pn.Short);break;case"mediumDate":t=ol(n,Pn.Medium);break;case"longDate":t=ol(n,Pn.Long);break;case"fullDate":t=ol(n,Pn.Full);break;case"shortTime":t=sl(n,Pn.Short);break;case"mediumTime":t=sl(n,Pn.Medium);break;case"longTime":t=sl(n,Pn.Long);break;case"fullTime":t=sl(n,Pn.Full);break;case"short":let r=yr(n,"shortTime"),a=yr(n,"shortDate");t=hd(ll(n,Pn.Short),[r,a]);break;case"medium":let o=yr(n,"mediumTime"),l=yr(n,"mediumDate");t=hd(ll(n,Pn.Medium),[o,l]);break;case"long":let c=yr(n,"longTime"),p=yr(n,"longDate");t=hd(ll(n,Pn.Long),[c,p]);break;case"full":let g=yr(n,"fullTime"),b=yr(n,"fullDate");t=hd(ll(n,Pn.Full),[g,b]);break}return t&&(md[e][i]=t),t}function hd(n,i){return i&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return Object.hasOwn(i,t)?i[t]:e})),n}function $i(n,i,e="-",t,r){let a="";(n<0||r&&n<=0)&&(r?n=-n+1:(n=-n,a=e));let o=String(n);for(;o.length<i;)o="0"+o;return t&&(o=o.slice(o.length-i)),a+o}function yw(n,i){return $i(n,3).substring(0,i)}function Rt(n,i,e=0,t=!1,r=!1){return function(a,o){let l=Sw(n,a);if((e>0||l>-e)&&(l+=e),n===3)l===0&&e===-12&&(l=12);else if(n===6)return yw(l,i);let c=cl(o,Sr.MinusSign);return $i(l,i,c,t,r)}}function Sw(n,i){switch(n){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new le(2301,!1)}}function mt(n,i,e=en.Format,t=!1){return function(r,a){return Cw(r,a,n,i,e,t)}}function Cw(n,i,e,t,r,a){switch(e){case 2:return Vb(i,r,t)[n.getMonth()];case 1:return Bb(i,r,t)[n.getDay()];case 0:let o=n.getHours(),l=n.getMinutes();if(a){let p=Gb(i),g=Ub(i,r,t),b=p.findIndex(D=>{if(Array.isArray(D)){let[V,W]=D,Z=o>=V.hours&&l>=V.minutes,me=o<W.hours||o===W.hours&&l<W.minutes;if(V.hours<W.hours){if(Z&&me)return!0}else if(Z||me)return!0}else if(D.hours===o&&D.minutes===l)return!0;return!1});if(b!==-1)return g[b]}return Lb(i,r,t)[o<12?0:1];case 3:return jb(i,t)[n.getFullYear()<=0?0:1];default:let c=e;throw new le(2302,!1)}}function pd(n){return function(i,e,t){let r=-1*t,a=cl(e,Sr.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(n){case 0:return(r>=0?"+":"")+$i(o,2,a)+$i(Math.abs(r%60),2,a);case 1:return"GMT"+(r>=0?"+":"")+$i(o,1,a);case 2:return"GMT"+(r>=0?"+":"")+$i(o,2,a)+":"+$i(Math.abs(r%60),2,a);case 3:return t===0?"Z":(r>=0?"+":"")+$i(o,2,a)+":"+$i(Math.abs(r%60),2,a);default:throw new le(2310,!1)}}}var Dw=0,gd=4;function ww(n){let i=_d(n,Dw,1).getDay();return _d(n,0,1+(i<=gd?gd:gd+7)-i)}function Hb(n){let i=n.getDay(),e=i===0?-3:gd-i;return _d(n.getFullYear(),n.getMonth(),n.getDate()+e)}function qp(n,i=!1){return function(e,t){let r;if(i){let a=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,o=e.getDate();r=1+Math.floor((o+a)/7)}else{let a=Hb(e),o=ww(a.getFullYear()),l=a.getTime()-o.getTime();r=1+Math.round(l/6048e5)}return $i(r,n,cl(t,Sr.MinusSign))}}function fd(n,i=!1){return function(e,t){let a=Hb(e).getFullYear();return $i(a,n,cl(t,Sr.MinusSign),i)}}var Yp=Object.create(null);function Mw(n){if(Yp[n])return Yp[n];let i;switch(n){case"G":case"GG":case"GGG":i=mt(3,ct.Abbreviated);break;case"GGGG":i=mt(3,ct.Wide);break;case"GGGGG":i=mt(3,ct.Narrow);break;case"y":i=Rt(0,1,0,!1,!0);break;case"yy":i=Rt(0,2,0,!0,!0);break;case"yyy":i=Rt(0,3,0,!1,!0);break;case"yyyy":i=Rt(0,4,0,!1,!0);break;case"Y":i=fd(1);break;case"YY":i=fd(2,!0);break;case"YYY":i=fd(3);break;case"YYYY":i=fd(4);break;case"M":case"L":i=Rt(1,1,1);break;case"MM":case"LL":i=Rt(1,2,1);break;case"MMM":i=mt(2,ct.Abbreviated);break;case"MMMM":i=mt(2,ct.Wide);break;case"MMMMM":i=mt(2,ct.Narrow);break;case"LLL":i=mt(2,ct.Abbreviated,en.Standalone);break;case"LLLL":i=mt(2,ct.Wide,en.Standalone);break;case"LLLLL":i=mt(2,ct.Narrow,en.Standalone);break;case"w":i=qp(1);break;case"ww":i=qp(2);break;case"W":i=qp(1,!0);break;case"d":i=Rt(2,1);break;case"dd":i=Rt(2,2);break;case"c":case"cc":i=Rt(7,1);break;case"ccc":i=mt(1,ct.Abbreviated,en.Standalone);break;case"cccc":i=mt(1,ct.Wide,en.Standalone);break;case"ccccc":i=mt(1,ct.Narrow,en.Standalone);break;case"cccccc":i=mt(1,ct.Short,en.Standalone);break;case"E":case"EE":case"EEE":i=mt(1,ct.Abbreviated);break;case"EEEE":i=mt(1,ct.Wide);break;case"EEEEE":i=mt(1,ct.Narrow);break;case"EEEEEE":i=mt(1,ct.Short);break;case"a":case"aa":case"aaa":i=mt(0,ct.Abbreviated);break;case"aaaa":i=mt(0,ct.Wide);break;case"aaaaa":i=mt(0,ct.Narrow);break;case"b":case"bb":case"bbb":i=mt(0,ct.Abbreviated,en.Standalone,!0);break;case"bbbb":i=mt(0,ct.Wide,en.Standalone,!0);break;case"bbbbb":i=mt(0,ct.Narrow,en.Standalone,!0);break;case"B":case"BB":case"BBB":i=mt(0,ct.Abbreviated,en.Format,!0);break;case"BBBB":i=mt(0,ct.Wide,en.Format,!0);break;case"BBBBB":i=mt(0,ct.Narrow,en.Format,!0);break;case"h":i=Rt(3,1,-12);break;case"hh":i=Rt(3,2,-12);break;case"H":i=Rt(3,1);break;case"HH":i=Rt(3,2);break;case"m":i=Rt(4,1);break;case"mm":i=Rt(4,2);break;case"s":i=Rt(5,1);break;case"ss":i=Rt(5,2);break;case"S":i=Rt(6,1);break;case"SS":i=Rt(6,2);break;case"SSS":i=Rt(6,3);break;case"Z":case"ZZ":case"ZZZ":i=pd(0);break;case"ZZZZZ":i=pd(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=pd(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=pd(2);break;default:return null}return Yp[n]=i,i}function Wb(n,i){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?i:e}function xw(n,i){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+i),n}function Ew(n,i,e){let r=n.getTimezoneOffset(),a=Wb(i,r);return xw(n,-1*(a-r))}function Aw(n){if(Fb(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[r,a=1,o=1]=n.split("-").map(l=>+l);return _d(r,a-1,o)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(gw))return Rw(t)}let i=new Date(n);if(!Fb(i))throw new le(2311,!1);return i}function Rw(n){let i=new Date(0),e=0,t=0,r=n[8]?i.setUTCFullYear:i.setFullYear,a=n[8]?i.setUTCHours:i.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),r.call(i,Number(n[1]),Number(n[2])-1,Number(n[3]));let o=Number(n[4]||0)-e,l=Number(n[5]||0)-t,c=Number(n[6]||0),p=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return a.call(i,o,l,c,p),i}function Fb(n){return n instanceof Date&&!isNaN(n.valueOf())}var dl=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Ve(dt))};static \u0275dir=R({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Oe]})}return n})();function qb(n,i){return new le(2100,!1)}var Kp=class{createSubscription(i,e,t){return tt(()=>i.subscribe({next:e,error:t}))}dispose(i){tt(()=>i.unsubscribe())}},Xp=class{createSubscription(i,e,t){return i.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}},kw=new Xp,Tw=new Kp,ft=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=s(tl);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(pa(e))return kw;if(vb(e))return Tw;throw qb(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(Ve(Me,16))};static \u0275pipe=Bp({name:"async",type:n,pure:!1})}return n})();var Nw="mediumDate",Yb=new v(""),Kb=new v(""),_a=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,a){if(e==null||e===""||e!==e)return null;try{let o=t??this.defaultOptions?.dateFormat??Nw,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return $b(e,o,a||this.locale,l)}catch(o){throw qb(n,o.message)}}static \u0275fac=function(t){return new(t||n)(Ve(io,16),Ve(Yb,24),Ve(Kb,24))};static \u0275pipe=Bp({name:"date",type:n,pure:!0})}return n})();var et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})();function ul(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,a]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let o=a;try{o=decodeURIComponent(a)}catch{}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var Iw=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Zp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=q(Iw),r},providedIn:"root"})}return n})();function Xb(n,i,e){return Db(n,i,e)}var Jp="browser";function Zb(n){return n===Jp}var ml=class{_doc;constructor(i){this._doc=i}manager},bd=(()=>{class n extends ml{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,a){return e.addEventListener(t,r,a),()=>this.removeEventListener(e,t,r,a)}removeEventListener(e,t,r,a){return e.removeEventListener(t,r,a)}static \u0275fac=function(t){return new(t||n)(q(re))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),Sd=new v(""),rf=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof bd));this._plugins=r.slice().reverse();let a=e.find(o=>o instanceof bd);a&&this._plugins.push(a)}addEventListener(e,t,r,a){return this._findPluginFor(t).addEventListener(e,t,r,a)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(a=>a.supports(e)),!t)throw new le(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(q(Sd),q(J))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),ef="ng-app-id";function Qb(n){for(let i of n)i.remove()}function Jb(n,i){let e=i.createElement("style");return e.textContent=n,e}function Pw(n,i,e,t){let r=n.head?.querySelectorAll(`style[${ef}="${i}"],link[${ef}="${i}"]`);if(!r||r.length===0)return!1;for(let a of r)a.removeAttribute(ef),a instanceof HTMLLinkElement?t.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]});return!0}function nf(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var af=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,a={}){this.doc=e,this.appId=t,this.nonce=r,Pw(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Jb);t?.forEach(r=>this.addUsage(r,this.external,nf))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let a=t.get(e);a?a.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Qb(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Qb(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Jb(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,nf(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let a of t.elements)a.parentNode===e?a.remove():r.push(a);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(q(re),q(ca),q(da,8),q(Ka))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),tf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},of=/%COMP%/g;var tv="%COMP%",Lw=`_nghost-${tv}`,Bw=`_ngcontent-${tv}`,Vw=!0,jw=new v("",{factory:()=>Vw}),zw=new v("");function Gw(n){return Bw.replace(of,n)}function Uw(n){return Lw.replace(of,n)}function nv(n,i){return i.map(e=>e.replace(of,n))}var fl=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,a,o,l,c=null,p=null,g=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=l,this.nonce=c,this.tracingService=p,this.cssVarNamespace=g??"",this.defaultRenderer=new hl(e,o,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof yd?r.applyToHost(e):r instanceof pl&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,a=r.get(t.id);if(!a){let o=this.doc,l=this.ngZone,c=this.eventManager,p=this.sharedStylesHost,g=this.removeStylesOnCompDestroy,b=this.tracingService;switch(t.encapsulation){case ad.Emulated:a=new yd(c,p,t,this.appId,g,o,l,b,this.cssVarNamespace);break;case ad.ShadowDom:return new vd(c,e,t,o,l,this.nonce,b,this.cssVarNamespace,p);case ad.ExperimentalIsolatedShadowDom:return new vd(c,e,t,o,l,this.nonce,b,this.cssVarNamespace);default:a=new pl(c,p,t,g,o,l,b,this.cssVarNamespace);break}r.set(t.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(q(rf),q(nl),q(ca),q(jw),q(re),q(J),q(da),q(od,8),q(zw,8))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),hl=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,a=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(tf[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ev(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=ev(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new le(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new le(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let a=tf[r];a?i.setAttributeNS(a,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=tf[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||r&(Qa.DashCase|Qa.Important)?i.style.setProperty(e,t,r&Qa.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&Qa.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Ri().getGlobalEventTarget(this.doc,i),!i))throw new le(-5102,!1);let a=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(i,e,a)),this.eventManager.addEventListener(i,e,a,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ev(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var vd=class extends hl{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,a,o,l,c,p){super(i,r,a,l,c),this.hostEl=e,this.sharedStylesHost=p,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let g=t.styles;g=nv(t.id,g).map(D=>D.replace(/%NS%/g,c));for(let D of g){let V=document.createElement("style");o&&V.setAttribute("nonce",o),V.textContent=D,this.shadowRoot.appendChild(V)}let b=t.getExternalStyles?.();if(b)for(let D of b){let V=nf(D,r);o&&V.setAttribute("nonce",o),this.shadowRoot.appendChild(V)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},pl=class extends hl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,a,o,l,c,p){super(i,a,o,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let g=t.styles,b=p?nv(p,g):g;this.styles=b.map(D=>D.replace(/%NS%/g,c)),this.styleUrls=t.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&bb.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yd=class extends pl{contentAttr;hostAttr;constructor(i,e,t,r,a,o,l,c,p){let g=r+"-"+t.id;super(i,e,t,a,o,l,c,p,g),this.contentAttr=Gw(g),this.hostAttr=Uw(g)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Cd=class n extends al{supportsDOMEvents=!0;static makeCurrent(){Hp(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Hw();return e==null?null:Ww(e)}resetBaseElement(){gl=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return ul(document.cookie,i)}},gl=null;function Hw(){return gl=gl||document.head.querySelector("base"),gl?gl.getAttribute("href"):null}function Ww(n){return new URL(n,document.baseURI).pathname}var iv=["alt","control","meta","shift"],qw={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Yw={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},rv=(()=>{class n extends ml{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,a){let o=n.parseEventName(t),l=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ri().onAndCancel(e,o.domEventName,l,a))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let a=n._normalizeKey(t.pop()),o="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),o="code."),iv.forEach(p=>{let g=t.indexOf(p);g>-1&&(t.splice(g,1),o+=p+".")}),o+=a,t.length!=0||a.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(e,t){let r=qw[e.key]||e.key,a="";return t.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),iv.forEach(o=>{if(o!==r){let l=Yw[o];l(e)&&(a+=o+".")}}),a+=r,a===t)}static eventCallback(e,t,r){return a=>{n.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>t(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(q(re))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();async function sf(n,i,e){let t=f({rootComponent:n},Kw(i,e));return Rb(t)}function Kw(n,i){return{platformRef:i?.platformRef,appProviders:[...eM,...n?.providers??[]],platformProviders:Jw}}function Xw(){Cd.makeCurrent()}function Zw(){return new Ui}function Qw(){return db(document),document}var Jw=[{provide:Ka,useValue:Jp},{provide:sb,useValue:Xw,multi:!0},{provide:re,useFactory:Qw}];var eM=[{provide:rb,useValue:"root"},{provide:Ui,useFactory:Zw},{provide:Sd,useClass:bd,multi:!0},{provide:Sd,useClass:rv,multi:!0},fl,{provide:nl,useClass:af},{provide:af,useExisting:nl},rf,{provide:qt,useExisting:fl},[]];var or=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),a=e.slice(t+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let a=i.value;if(a===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(a)?a:[a],l=this.headers.get(e);if(!l)return;l=l.filter(c=>o.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var wd=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Md=class{encodeKey(i){return av(i)}encodeValue(i){return av(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function tM(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[o,l]=a==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,a)),i.decodeValue(r.slice(a+1))],c=e.get(o)||[];c.push(l),e.set(o,c)}),e}var nM=/%(\d[a-f0-9])/gi,iM={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function av(n){return encodeURIComponent(n).replace(nM,(i,e)=>iM[e]??i)}function Dd(n){return`${n}`}var Cr=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Md,i.fromString){if(i.fromObject)throw new le(2805,!1);this.map=tM(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Dd):[Dd(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(a=>{e.push({param:t,value:a,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Dd(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Dd(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function rM(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ov(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function sv(n){return typeof Blob<"u"&&n instanceof Blob}function lv(n){return typeof FormData<"u"&&n instanceof FormData}function aM(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var _l="Content-Type",xd="Accept",uv="text/plain",mv="application/json",hv=`${mv}, ${uv}, */*`,oo=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let a;if(rM(this.method)||r?(this.body=t!==void 0?t:null,a=r):a=t,a){if(this.reportProgress=!!a.reportProgress,this.reportUploadProgress=!!a.reportUploadProgress,this.reportDownloadProgress=!!a.reportDownloadProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new le(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer!==void 0&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new or,this.context??=new wd,!this.params)this.params=new Cr,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e,c="",p=e.indexOf("#");p!==-1&&(c=e.substring(p),l=e.substring(0,p));let g=l.indexOf("?"),b=g===-1?"?":g<l.length-1?"&":"";this.urlWithParams=l+b+o+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ov(this.body)||sv(this.body)||lv(this.body)||aM(this.body)?this.body:this.body instanceof Cr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||lv(this.body)?null:sv(this.body)?this.body.type||null:ov(this.body)?null:typeof this.body=="string"?uv:this.body instanceof Cr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?mv:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,a=i.keepalive??this.keepalive,o=i.priority||this.priority,l=i.cache||this.cache,c=i.mode||this.mode,p=i.redirect||this.redirect,g=i.credentials||this.credentials,b=i.referrer??this.referrer,D=i.integrity||this.integrity,V=i.referrerPolicy||this.referrerPolicy,W=i.transferCache??this.transferCache,Z=i.timeout??this.timeout,me=i.body!==void 0?i.body:this.body,Ae=i.withCredentials??this.withCredentials,ge=i.reportProgress??this.reportProgress,Ce=i.reportUploadProgress??this.reportUploadProgress,Fe=i.reportDownloadProgress??this.reportDownloadProgress,Ke=i.headers||this.headers,ke=i.params||this.params,Pt=i.context??this.context;return i.setHeaders!==void 0&&(Ke=Object.keys(i.setHeaders).reduce((Et,Nn)=>Et.set(Nn,i.setHeaders[Nn]),Ke)),i.setParams&&(ke=Object.keys(i.setParams).reduce((Et,Nn)=>Et.set(Nn,i.setParams[Nn]),ke)),new n(e,t,me,{params:ke,headers:Ke,context:Pt,reportProgress:ge,reportUploadProgress:Ce,reportDownloadProgress:Fe,responseType:r,withCredentials:Ae,transferCache:W,keepalive:a,cache:l,priority:o,timeout:Z,mode:c,redirect:p,credentials:g,referrer:b,integrity:D,referrerPolicy:V})}},ar=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ar||{}),so=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new or,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},bl=class n extends so{constructor(i={}){super(i)}type=ar.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},lo=class n extends so{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ar.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},rr=class extends so{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},pv=200,oM=204;var sM=/^\)\]\}',?\n/,B2=1024*1024,fv=new v("",{factory:()=>null}),Ed=(()=>{class n{fetchImpl=s(cf,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=s(J);destroyRef=s(di);maxResponseSize=s(fv);handle(e){return new at(t=>{let r=new AbortController,a=!1,o={next:c=>{c.type===ar.Response&&(a=!0),t.next(c)},error:c=>{a=!0,t.error(c)},complete:()=>{a=!0,t.complete()}};this.doRequest(e,r.signal,o).then(df,c=>o.error(new rr({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!a&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let a=this.createRequestInit(e),o;try{let me=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,f({signal:t},a)));lM(me),r.next({type:ar.Sent}),o=await me}catch(me){r.error(new rr({error:me,status:me.status??0,statusText:me.statusText,url:e.urlWithParams,headers:me.headers}));return}let l=new or(o.headers),c=o.statusText,p=o.url||e.urlWithParams,g=o.status,b=null,D=e.reportProgress||e.reportDownloadProgress;if(D&&r.next(new bl({headers:l,status:g,statusText:c,url:p})),o.body){let me=o.headers.get(_l)??"",Ae=o.headers.get("content-length"),ge=Ae!==null?Number(Ae):NaN;this.maxResponseSize!==null&&Number.isFinite(ge)&&ge>this.maxResponseSize&&(await o.body.cancel(),cv(this.maxResponseSize));let Ce=[],Fe=o.body.getReader(),Ke=0,ke,Pt,Et=typeof Zone<"u"&&Zone.current,Nn=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Fe.cancel(),Nn=!0;break}let{done:Ep,value:Ap}=await Fe.read();if(Ep)break;if(Ce.push(Ap),Ke+=Ap.length,this.maxResponseSize!==null&&Ke>this.maxResponseSize&&(await Fe.cancel(),cv(this.maxResponseSize)),D){Pt=e.responseType==="text"?(Pt??"")+(ke??=dv(me)).decode(Ap,{stream:!0}):void 0;let H_=()=>r.next({type:ar.DownloadProgress,total:Number.isFinite(ge)?ge:void 0,loaded:Ke,partialText:Pt});Et?Et.run(H_):H_()}}}),Nn){r.complete();return}let dw=this.concatChunks(Ce,Ke);try{b=this.parseBody(e,dw,me,g)}catch(Ep){r.error(new rr({error:Ep,headers:new or(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}g===0&&(g=b?pv:0);let V=g>=200&&g<300,W=o.redirected,Z=o.type;V?(r.next(new lo({body:b,headers:l,status:g,statusText:c,url:p,redirected:W,responseType:Z})),r.complete()):r.error(new rr({error:b,headers:l,status:g,statusText:c,url:p,redirected:W,responseType:Z}))}parseBody(e,t,r,a){switch(e.responseType){case"json":let o=new TextDecoder().decode(t).replace(sM,"");if(o==="")return null;try{return JSON.parse(o)}catch(l){if(a<200||a>=300)return o;throw l}case"text":return dv(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new le(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((a,o)=>t[a]=o.join(",")),e.headers.has(xd)||(t[xd]=hv),!e.headers.has(_l)){let a=e.detectContentTypeHeader();a!==null&&(t[_l]=a)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),a=0;for(let o of e)r.set(o,a),a+=o.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),cf=class{};function df(){}function lM(n){n.then(df,df)}function cv(n){throw new le(-2825,!1)}var cM=/charset=\s*["']?([^;"'\s]+)["']?/i;function dv(n){let i=n.match(cM);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var dM=new v("",{factory:()=>!0}),uM="XSRF-TOKEN",mM=new v("",{factory:()=>uM}),hM="X-XSRF-TOKEN",pM=new v("",{factory:()=>hM}),fM=(()=>{class n{cookieName=s(mM);doc=s(re);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ul(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),gv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=q(fM),r},providedIn:"root"})}return n})();function _v(n,i){if(!s(dM)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=s(ao).href,{origin:a}=new URL(r),{origin:o}=new URL(n.url,a);if(a!==o)return i(n)}catch{return i(n)}let e=s(gv).getToken(),t=s(pM);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function gM(n,i){return i(n)}function _M(n,i,e){return(t,r)=>vn(e,()=>i(t,a=>n(a,r)))}var mf=new v("",{factory:()=>[_v]}),bv=new v(""),vv=new v("",{factory:()=>!0});var Rd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=q(Ed),r},providedIn:"root"})}return n})();var Ad=(()=>{class n{backend;injector;chain=null;pendingTasks=s(Pp);contributeToStability=s(vv);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(kd,null,{skipSelf:!0}),a=r!==null&&this.backend===r,o=this.injector.get(bv,[],a?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(mf),...o]));this.chain=l.reduceRight((c,p)=>_M(c,p,this.injector),gM)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return tt(()=>t(e,a=>this.backend.handle(a))).pipe(Ya(r))}else return tt(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(q(Rd),q(Bt))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=q(Ad),r},providedIn:"root"})}return n})();function lf(n,i){return f({body:i},n)}var jt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let a;if(e instanceof oo)a=e;else{let c;r.headers instanceof or?c=r.headers:c=new or(r.headers);let p;r.params&&(r.params instanceof Cr?p=r.params:p=new Cr({fromObject:r.params})),a=new oo(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:p,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=x(a).pipe(oa(c=>this.handler.handle(c)));if(e instanceof oo||r.observe==="events")return o;let l=o.pipe(we(c=>c instanceof lo));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(A(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new le(2806,!1);return c.body}));case"blob":return l.pipe(A(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new le(2807,!1);return c.body}));case"text":return l.pipe(A(c=>{if(c.body!==null&&typeof c.body!="string")throw new le(2808,!1);return c.body}));default:return l.pipe(A(c=>c.body))}case"response":return l;default:throw new le(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Cr().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,lf(r,t))}post(e,t,r={}){return this.request("POST",e,lf(r,t))}put(e,t,r={}){return this.request("PUT",e,lf(r,t))}static \u0275fac=function(t){return new(t||n)(q(kd))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bM=/^\)\]\}',?\n/;var uf=(()=>{class n{xhrFactory;tracingService=s(od,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new le(-2800,!1);let t=this.xhrFactory;return x(null).pipe(Le(()=>new at(a=>{let o=t.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((ge,Ce)=>o.setRequestHeader(ge,Ce.join(","))),e.headers.has(xd)||o.setRequestHeader(xd,hv),!e.headers.has(_l)){let ge=e.detectContentTypeHeader();ge!==null&&o.setRequestHeader(_l,ge)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let ge=e.responseType.toLowerCase();o.responseType=ge!=="json"?ge:"text"}let l=e.serializeBody(),c=null,p=()=>{if(c!==null)return c;let ge=o.statusText||"OK",Ce=new or(o.getAllResponseHeaders()),Fe=o.responseURL||e.url;return c=new bl({headers:Ce,status:o.status,statusText:ge,url:Fe}),c},g=this.maybePropagateTrace(()=>{let{headers:ge,status:Ce,statusText:Fe,url:Ke}=p(),ke=null;Ce!==oM&&(ke=typeof o.response>"u"?o.responseText:o.response),Ce===0&&(Ce=ke?pv:0);let Pt=Ce>=200&&Ce<300;if(e.responseType==="json"&&typeof ke=="string"){let Et=ke;ke=ke.replace(bM,"");try{ke=ke!==""?JSON.parse(ke):null}catch(Nn){ke=Et,Pt&&(Pt=!1,ke={error:Nn,text:ke})}}Pt?(a.next(new lo({body:ke,headers:ge,status:Ce,statusText:Fe,url:Ke||void 0})),a.complete()):a.error(new rr({error:ke,headers:ge,status:Ce,statusText:Fe,url:Ke||void 0}))}),b=this.maybePropagateTrace(ge=>{let{url:Ce}=p(),Fe=new rr({error:ge,status:o.status||0,statusText:o.statusText||"Unknown Error",url:Ce||void 0});a.error(Fe)}),D=b;e.timeout&&(D=this.maybePropagateTrace(ge=>{let{url:Ce}=p(),Fe=new rr({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:Ce||void 0});a.error(Fe)}));let V=!1,W=this.maybePropagateTrace(ge=>{V||(a.next(p()),V=!0);let Ce={type:ar.DownloadProgress,loaded:ge.loaded};ge.lengthComputable&&(Ce.total=ge.total),e.responseType==="text"&&o.responseText&&(Ce.partialText=o.responseText),a.next(Ce)}),Z=this.maybePropagateTrace(ge=>{let Ce={type:ar.UploadProgress,loaded:ge.loaded};ge.lengthComputable&&(Ce.total=ge.total),a.next(Ce)});o.addEventListener("load",g),o.addEventListener("error",b),o.addEventListener("timeout",D),o.addEventListener("abort",b);let me=e.reportProgress||e.reportUploadProgress,Ae=e.reportProgress||e.reportDownloadProgress;return Ae&&o.addEventListener("progress",W),me&&l!==null&&o.upload&&o.upload.addEventListener("progress",Z),o.send(l),a.next({type:ar.Sent}),()=>{o.removeEventListener("error",b),o.removeEventListener("abort",b),o.removeEventListener("load",g),o.removeEventListener("timeout",D),Ae&&o.removeEventListener("progress",W),me&&l!==null&&o.upload&&o.upload.removeEventListener("progress",Z),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||n)(q(Zp))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Td=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n[n.Xhr=7]="Xhr",n})(Td||{});function yv(n,i){return{\u0275kind:n,\u0275providers:i}}function hf(...n){let i=[jt,Ed,Ad,{provide:kd,useExisting:Ad},{provide:Rd,useFactory:()=>s(Ed)},{provide:mf,useValue:_v,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return bn(i)}function pf(n){return yv(Td.Interceptors,n.map(i=>({provide:mf,useValue:i,multi:!0})))}function ff(){return yv(Td.Xhr,[uf,{provide:Rd,useExisting:uf}])}var Sv=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(q(re))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=$({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=q(SM),r},providedIn:"root"})}return n})(),SM=(()=>{class n extends vl{_doc=s(re);sanitize(e,t){if(t==null)return null;switch(e){case yn.NONE:return t;case yn.HTML:return Za(t,"HTML")?ma(t):_b(this._doc,String(t)).toString();case yn.STYLE:return Za(t,"Style")?ma(t):t;case yn.SCRIPT:if(Za(t,"Script"))return ma(t);throw new le(5200,!1);case yn.URL:return Za(t,"URL")?ma(t):gb(String(t));case yn.RESOURCE_URL:if(Za(t,"ResourceURL"))return ma(t);throw new le(-5201,!1);default:throw new le(5202,!1)}}bypassSecurityTrustHtml(e){return ub(e)}bypassSecurityTrustStyle(e){return mb(e)}bypassSecurityTrustScript(e){return hb(e)}bypassSecurityTrustUrl(e){return pb(e)}bypassSecurityTrustResourceUrl(e){return fb(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var Re="primary",Il=Symbol("RouteTitle"),yf=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function va(n){return new yf(n)}function gf(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],a=i[t];if(r[0]===":")e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function kv(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},p=n.slice(0,t.length);return gf(t,p,c)?{consumed:p,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let a=t.slice(0,r),o=t.slice(r+1);if(a.length+o.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!gf(a,n.slice(0,a.length),l)||!gf(o,n.slice(n.length-o.length),l)?null:{consumed:n,posParams:l}}function Ld(n){return new Promise((i,e)=>{n.pipe(Pr()).subscribe({next:t=>i(t),error:t=>e(t)})})}function DM(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!sr(n[e],i[e]))return!1;return!0}function sr(n,i){let e=n?Sf(n):void 0,t=i?Sf(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!Tv(n[r],i[r]))return!1;return!0}function Sf(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Tv(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,a)=>t[a]===r)}else return n===i}function wM(n){return n.length>0?n[n.length-1]:null}function Ca(n){return qa(n)?n:pa(n)?In(Promise.resolve(n)):x(n)}function Nv(n){return qa(n)?Ld(n):Promise.resolve(n)}var MM={exact:Fv,subset:Pv},Iv={exact:xM,subset:EM,ignored:()=>!0},Ov={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Cf={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Dv(n,i,e){return MM[e.paths](n.root,i.root,e.matrixParams)&&Iv[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function xM(n,i){return sr(n,i)}function Fv(n,i,e){if(!ba(n.segments,i.segments)||!Od(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Fv(n.children[t],i.children[t],e))return!1;return!0}function EM(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Tv(n[e],i[e]))}function Pv(n,i,e){return Lv(n,i,i.segments,e)}function Lv(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!ba(r,e)||i.hasChildren()||!Od(r,e,t))}else if(n.segments.length===e.length){if(!ba(n.segments,e)||!Od(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Pv(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),a=e.slice(n.segments.length);return!ba(n.segments,r)||!Od(n.segments,r,t)||!n.children[Re]?!1:Lv(n.children[Re],i,a,t)}}function Od(n,i,e){return i.every((t,r)=>Iv[e](n[r].parameters,t.parameters))}var Ii=class{root;queryParams;fragment;_queryParamMap;constructor(i=new nt([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=va(this.queryParams),this._queryParamMap}toString(){return kM.serialize(this)}},nt=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fd(this)}},zr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=va(this.parameters),this._parameterMap}toString(){return Vv(this)}};function AM(n,i){return ba(n,i)&&n.every((e,t)=>sr(e.parameters,i[t].parameters))}function ba(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function RM(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===Re&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==Re&&(e=e.concat(i(r,t)))}),e}var Ol=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:()=>new Gr})}return n})(),Gr=class{parse(i){let e=new wf(i);return new Ii(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${yl(i.root,!0)}`,t=IM(i.queryParams),r=typeof i.fragment=="string"?`#${TM(i.fragment)}`:"";return`${e}${t}${r}`}},kM=new Gr;function Fd(n){return n.segments.map(i=>Vv(i)).join("/")}function yl(n,i){if(!n.hasChildren())return Fd(n);if(i){let e=n.children[Re]?yl(n.children[Re],!1):"",t=[];return Object.entries(n.children).forEach(([r,a])=>{r!==Re&&t.push(`${r}:${yl(a,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=RM(n,(t,r)=>r===Re?[yl(n.children[Re],!1)]:[`${r}:${yl(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[Re]!=null?`${Fd(n)}/${e[0]}`:`${Fd(n)}/(${e.join("//")})`}}function Bv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Nd(n){return Bv(n).replace(/%3B/gi,";")}function TM(n){return encodeURI(n)}function Df(n){return Bv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Pd(n){return decodeURIComponent(n)}function wv(n){return Pd(n.replace(/\+/g,"%20"))}function Vv(n){return`${Df(n.path)}${NM(n.parameters)}`}function NM(n){return Object.entries(n).map(([i,e])=>`;${Df(i)}=${Df(e)}`).join("")}function IM(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Nd(e)}=${Nd(r)}`).join("&"):`${Nd(e)}=${Nd(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var OM=/^[^\/()?;#]+/;function _f(n){let i=n.match(OM);return i?i[0]:""}var FM=/^[^\/()?;=#]+/;function PM(n){let i=n.match(FM);return i?i[0]:""}var LM=/^[^=?&#]+/;function BM(n){let i=n.match(LM);return i?i[0]:""}var VM=/^[^&#]+/;function jM(n){let i=n.match(VM);return i?i[0]:""}var wf=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new nt([],{}):new nt([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new le(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[Re]=new nt(e,t)),r}parseSegment(){let i=_f(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new le(4009,!1);return this.capture(i),new zr(Pd(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=PM(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=_f(this.remaining);r&&(t=r,this.capture(t))}i[Pd(e)]=Pd(t)}parseQueryParam(i){let e=BM(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=jM(this.remaining);o&&(t=o,this.capture(t))}let r=wv(e),a=wv(t);if(Object.hasOwn(i,r)){let o=i[r];Array.isArray(o)||(o=[o],i[r]=o),o.push(a)}else i[r]=a}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=_f(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new le(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=Re);let l=this.parseChildren(e+1);t[o??Re]=Object.keys(l).length===1&&l[Re]?l[Re]:new nt([],l),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new le(4011,!1)}};function jv(n){return n.segments.length>0?new nt([],{[Re]:n}):n}function zv(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let a=zv(r);if(t===Re&&a.segments.length===0&&a.hasChildren())for(let[o,l]of Object.entries(a.children))i[o]=l;else(a.segments.length>0||a.hasChildren())&&(i[t]=a)}let e=new nt(n.segments,i);return zM(e)}function zM(n){if(n.numberOfChildren===1&&n.children[Re]){let i=n.children[Re];return new nt(n.segments.concat(i.segments),i.children)}return n}function ho(n){return n instanceof Ii}function Gv(n,i,e=null,t=null,r=new Gr){let a=Uv(n);return $v(a,i,e,t,r)}function Uv(n){let i;function e(a){let o={};for(let c of a.children){let p=e(c);o[c.outlet]=p}let l=new nt(a.url,o);return a===n&&(i=l),l}let t=e(n.root),r=jv(t);return i??r}function $v(n,i,e,t,r){let a=n;for(;a.parent;)a=a.parent;if(i.length===0)return bf(a,a,a,e,t,r);let o=GM(i);if(o.toRoot())return bf(a,a,new nt([],{}),e,t,r);let l=UM(o,a,n),c=l.processChildren?Cl(l.segmentGroup,l.index,o.commands):Wv(l.segmentGroup,l.index,o.commands);return bf(a,l.segmentGroup,c,e,t,r)}function Bd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ml(n){return typeof n=="object"&&n!=null&&n.outlets}function Mv(n,i,e){n||="\u0275";let t=new Ii;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function bf(n,i,e,t,r,a){let o={};for(let[p,g]of Object.entries(t??{}))o[p]=Array.isArray(g)?g.map(b=>Mv(p,b,a)):Mv(p,g,a);let l;n===i?l=e:l=Hv(n,i,e);let c=jv(zv(l));return new Ii(c,o,r)}function Hv(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,a])=>{a===i?t[r]=e:t[r]=Hv(a,i,e)}),new nt(n.segments,t)}var Vd=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Bd(t[0]))throw new le(4003,!1);let r=t.find(Ml);if(r&&r!==wM(t))throw new le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function GM(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Vd(!0,0,n);let i=0,e=!1,t=n.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let l={};return Object.entries(a.outlets).forEach(([c,p])=>{l[c]=typeof p=="string"?p.split("/"):p}),[...r,{outlets:l}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((l,c)=>{c==0&&l==="."||(c==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,a]},[]);return new Vd(e,i,t)}var uo=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function UM(n,i,e){if(n.isAbsolute)return new uo(i,!0,0);if(!e)return new uo(i,!1,NaN);if(e.parent===null)return new uo(e,!0,0);let t=Bd(n.commands[0])?0:1,r=e.segments.length-1+t;return $M(e,r,n.numberOfDoubleDots)}function $M(n,i,e){let t=n,r=i,a=e;for(;a>r;){if(a-=r,t=t.parent,!t)throw new le(4005,!1);r=t.segments.length}return new uo(t,!1,r-a)}function HM(n){return Ml(n[0])?n[0].outlets:{[Re]:n}}function Wv(n,i,e){if(n??=new nt([],{}),n.segments.length===0&&n.hasChildren())return Cl(n,i,e);let t=WM(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let a=new nt(n.segments.slice(0,t.pathIndex),{});return a.children[Re]=new nt(n.segments.slice(t.pathIndex),n.children),Cl(a,0,r)}else return t.match&&r.length===0?new nt(n.segments,{}):t.match&&!n.hasChildren()?Mf(n,i,e):t.match?Cl(n,0,r):Mf(n,i,e)}function Cl(n,i,e){if(e.length===0)return new nt(n.segments,{});{let t=HM(e),r=Object.create(null);if(Object.keys(t).some(a=>a!==Re)&&n.children[Re]&&n.numberOfChildren===1&&n.children[Re].segments.length===0){let a=Cl(n.children[Re],i,e);return new nt(n.segments,a.children)}return Object.entries(t).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=Wv(n.children[a],i,o))}),Object.entries(n.children).forEach(([a,o])=>{t[a]===void 0&&(r[a]=o)}),new nt(n.segments,r)}}function WM(n,i,e){let t=0,r=i,a={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return a;let o=n.segments[r],l=e[t];if(Ml(l))break;let c=`${l}`,p=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&p&&typeof p=="object"&&p.outlets===void 0){if(!Ev(c,p,o))return a;t+=2}else{if(!Ev(c,{},o))return a;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Mf(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let a=e[r];if(Ml(a)){let c=qM(a.outlets);return new nt(t,c)}if(r===0&&Bd(e[0])){let c=n.segments[i];t.push(new zr(c.path,xv(e[0]))),r++;continue}let o=Ml(a)?a.outlets[Re]:`${a}`,l=r<e.length-1?e[r+1]:null;o&&l&&Bd(l)?(t.push(new zr(o,xv(l))),r+=2):(t.push(new zr(o,{})),r++)}return new nt(t,{})}function qM(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Mf(new nt([],{}),0,t))}),i}function xv(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Ev(n,i,e){return n==e.path&&sr(i,e.parameters)}var Dl="imperative",zt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(zt||{}),pi=class{id;url;constructor(i,e){this.id=i,this.url=e}},ya=class extends pi{type=zt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},wr=class extends pi{urlAfterRedirects;type=zt.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},tn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(tn||{}),xl=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(xl||{}),Ni=class extends pi{reason;code;type=zt.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function qv(n){return n instanceof Ni&&(n.code===tn.Redirect||n.code===tn.SupersededByNewNavigation)}var Mr=class extends pi{reason;code;type=zt.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Sa=class extends pi{error;target;type=zt.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},El=class extends pi{urlAfterRedirects;state;type=zt.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jd=class extends pi{urlAfterRedirects;state;type=zt.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zd=class extends pi{urlAfterRedirects;state;shouldActivate;type=zt.GuardsCheckEnd;constructor(i,e,t,r,a){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gd=class extends pi{urlAfterRedirects;state;type=zt.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ud=class extends pi{urlAfterRedirects;state;type=zt.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$d=class{route;type=zt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Hd=class{route;type=zt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Wd=class{snapshot;type=zt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qd=class{snapshot;type=zt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yd=class{snapshot;type=zt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kd=class{snapshot;type=zt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var po=class{},Al=class{},fo=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function YM(n){return!(n instanceof po)&&!(n instanceof fo)&&!(n instanceof Al)}var Xd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new vo(this.rootInjector)}},vo=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Xd(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(q(Bt))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zd=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=xf(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=xf(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Ef(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Ef(i,this._root).map(e=>e.value)}};function xf(n,i){if(n===i.value)return i;for(let e of i.children){let t=xf(n,e);if(t)return t}return null}function Ef(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Ef(n,e);if(t.length)return t.unshift(i),t}return[]}var hi=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function co(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Rl=class extends Zd{snapshot;constructor(i,e){super(i),this.snapshot=e,Lf(this,i)}toString(){return this.snapshot.toString()}};function Yv(n,i){let e=KM(n,i),t=new ht([new zr("",{})]),r=new ht({}),a=new ht({}),o=new ht({}),l=new ht(""),c=new Ur(t,r,o,l,a,Re,n,e.root);return c.snapshot=e.root,new Rl(new hi(c,[]),e)}function KM(n,i){let e={},t={},r={},o=new go([],e,r,"",t,Re,n,null,{},i);return new kl("",new hi(o,[]))}var Ur=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,r,a,o,l,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=l,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(A(p=>p[Il]))??x(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(i=>va(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(i=>va(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},XM="always";function Pf(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&Xv(r)&&(t.resolve[Il]=r.title),t}var go=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Il]}constructor(i,e,t,r,a,o,l,c,p,g){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a,this.outlet=o,this.component=l,this.routeConfig=c,this._resolve=p,this._environmentInjector=g}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=va(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=va(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},kl=class extends Zd{url;constructor(i,e){super(e),this.url=i,Lf(this,e)}toString(){return Kv(this._root)}};function Lf(n,i){i.value._routerState=n,i.children.forEach(e=>Lf(n,e))}function Kv(n){let i=n.children.length>0?` { ${n.children.map(Kv).join(", ")} } `:"";return`${n.value}${i}`}function vf(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,sr(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),sr(i.params,e.params)||n.paramsSubject.next(e.params),DM(i.url,e.url)||n.urlSubject.next(e.url),sr(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Af(n,i){let e=sr(n.params,i.params)&&AM(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Af(n.parent,i.parent))}function Xv(n){return typeof n.title=="string"||n.title===null}var Zv=new v(""),Fl=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Re;activateEvents=new L;deactivateEvents=new L;attachEvents=new L;detachEvents=new L;routerOutletData=ro();parentContexts=s(vo);location=s(dt);changeDetector=s(Me);inputBinder=s(tu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new le(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new le(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,c=new Rf(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Oe]})}return n})(),Rf=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Ur?this.route:i===vo?this.childContexts:i===Zv?this.outletData:this.parent.get(i,e)}},tu=new v("");var Bf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&I(0,"router-outlet")},dependencies:[Fl],encapsulation:2,changeDetection:1})}return n})();function Vf(n){let i=n.children&&n.children.map(Vf),e=i?_(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==Re&&(e.component=Bf),e}function ZM(n,i,e){let t=new Set,r=Tl(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new Rl(r,i)}}function Tl(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let a=QM(n,i,e,t);return new hi(r,a)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let l=o.route;return l.value._setPending(i.value),l.children=i.children.map(c=>Tl(n,c,void 0,t)),l}}let r=JM(i.value);r._setPending(i.value),t.add(r);let a=i.children.map(o=>Tl(n,o,void 0,t));return new hi(r,a)}}function QM(n,i,e,t){return i.children.map(r=>{for(let a of e.children)if(n.shouldReuseRoute(r.value,a.value.snapshot))return Tl(n,r,a,t);return Tl(n,r,void 0,t)})}function JM(n){return new Ur(new ht(n.url),new ht(n.params),new ht(n.queryParams),new ht(n.fragment),new ht(n.data),n.outlet,n.component,n)}var _o=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Qv="ngNavigationCancelingError";function Qd(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=ho(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Jv(!1,tn.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Jv(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Qv]=!0,e.cancellationCode=i,e}function ex(n){return ey(n)&&ho(n.url)}function ey(n){return!!n&&n[Qv]}var kf=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,a){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=a}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),vf(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=co(e);i.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],t),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,t)})}deactivateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(r===a)if(r.component){let o=t.getContext(r.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,t);else a&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=co(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(t&&t.outlet){let o=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=co(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=co(e);i.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],t),this.forwardEvent(new Kd(a.value.snapshot))}),i.children.length&&this.forwardEvent(new qd(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(vf(r),r===a)if(r.component){let o=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let o=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),vf(l.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,t)}},Jd=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},mo=class{component;route;constructor(i,e){this.component=i,this.route=e}};function tx(n,i,e){let t=n._root,r=i?i._root:null;return Sl(t,r,e,[t.value])}function nx(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function yo(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ib(n)?n:i.get(n):t}function Sl(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=co(i);return n.children.forEach(o=>{ix(o,a[o.value.outlet],e,t.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,l])=>wl(l,e.getContext(o),e,r)),r}function ix(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=n.value,o=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=rx(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Jd(t)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Sl(n,i,l?l.children:null,t,r):Sl(n,i,e,t,r),c&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new mo(l.outlet.component,o))}else o&&wl(i,l,e,r),r.canActivateChecks.push(new Jd(t)),a.component?Sl(n,null,l?l.children:null,t,r):Sl(n,null,e,t,r);return r}function rx(n,i,e){if(typeof e=="function")return vn(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ba(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ba(n.url,i.url)||!sr(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Af(n,i)||!sr(n.queryParams,i.queryParams);default:return!Af(n,i)}}function wl(n,i,e,t){let r=co(n),a=n.value;Object.entries(r).forEach(([o,l])=>{a.component?i?wl(l,i.children.getContext(o),i.children,t):wl(l,null,null,t):wl(l,e?e.getContext(o):null,e,t)}),a.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new mo(i.outlet.component,a)):t.canDeactivateChecks.push(new mo(null,a)):t.canDeactivateChecks.push(new mo(null,a))}function Pl(n){return typeof n=="function"}function ax(n){return typeof n=="boolean"}function ox(n){return n&&Pl(n.canLoad)}function sx(n){return n&&Pl(n.canActivate)}function lx(n){return n&&Pl(n.canActivateChild)}function cx(n){return n&&Pl(n.canDeactivate)}function dx(n){return n&&Pl(n.canMatch)}function ty(n){return n instanceof q_||n?.name==="EmptyError"}var Id=Symbol("INITIAL_VALUE");function bo(){return Le(n=>Zt(n.map(i=>i.pipe(Pe(1),rt(Id)))).pipe(A(i=>{for(let e of i)if(e!==!0){if(e===Id)return Id;if(e===!1||ux(e))return e}return!0}),we(i=>i!==Id),Pe(1)))}function ux(n){return ho(n)||n instanceof _o}function ny(n){return n.aborted?x(void 0).pipe(Pe(1)):new at(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function iy(n){return F(ny(n))}function mx(n){return se(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:a}}=i;return a.length===0&&r.length===0?x(_(f({},i),{guardsResult:!0})):hx(a,e,t).pipe(se(o=>o&&ax(o)?px(e,r,n):x(o)),A(o=>_(f({},i),{guardsResult:o})))})}function hx(n,i,e){return In(n).pipe(se(t=>vx(t.component,t.route,e,i)),Pr(t=>t!==!0,!0))}function px(n,i,e){return In(i).pipe(oa(t=>Jc(gx(t.route.parent,e),fx(t.route,e),bx(n,t.path),_x(n,t.route))),Pr(t=>t!==!0,!0))}function fx(n,i){return n!==null&&i&&i(new Yd(n)),x(!0)}function gx(n,i){return n!==null&&i&&i(new Wd(n)),x(!0)}function _x(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return x(!0);let t=e.map(r=>Mi(()=>{let a=i._environmentInjector,o=yo(r,a),l=sx(o)?o.canActivate(i,n):vn(a,()=>o(i,n));return Ca(l).pipe(Pr())}));return x(t).pipe(bo())}function bx(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(a=>nx(a)).filter(a=>a!==null).map(a=>Mi(()=>{let o=a.guards.map(l=>{let c=a.node._environmentInjector,p=yo(l,c),g=lx(p)?p.canActivateChild(e,n):vn(c,()=>p(e,n));return Ca(g).pipe(Pr())});return x(o).pipe(bo())}));return x(r).pipe(bo())}function vx(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return x(!0);let a=r.map(o=>{let l=i._environmentInjector,c=yo(o,l),p=cx(c)?c.canDeactivate(n,i,e,t):vn(l,()=>c(n,i,e,t));return Ca(p).pipe(Pr())});return x(a).pipe(bo())}function yx(n,i,e,t,r){let a=i.canLoad;if(a===void 0||a.length===0)return x(!0);let o=a.map(l=>{let c=yo(l,n),p=ox(c)?c.canLoad(i,e):vn(n,()=>c(i,e)),g=Ca(p);return r?g.pipe(iy(r)):g});return x(o).pipe(bo(),ry(t))}function ry(n){return Rp(ot(i=>{if(typeof i!="boolean")throw Qd(n,i)}),A(i=>i===!0))}function Sx(n,i,e,t,r,a){let o=i.canMatch;if(!o||o.length===0)return x(!0);let l=o.map(c=>{let p=yo(c,n),g=dx(p)?p.canMatch(i,e,r):vn(n,()=>p(i,e,r));return Ca(g).pipe(iy(a))});return x(l).pipe(bo(),ry(t))}var Dr=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Nl=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Cx(n){throw new le(4e3,!1)}function Dx(n){throw Jv(!1,tn.GuardRejected)}var Tf=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[Re])throw Cx(`${i.redirectTo}`);r=r.children[Re]}}async applyRedirectCommands(i,e,t,r,a){let o=await wx(e,r,a);if(o instanceof Ii)throw new Nl(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,t);if(o[0]==="/")throw new Nl(l);return l}applyRedirectCreateUrlTree(i,e,t,r){let a=this.createSegmentGroup(i,e.root,t,r);return new Ii(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let l=a.substring(1);t[r]=e[l]}else t[r]=a}),t}createSegmentGroup(i,e,t,r){let a=this.createSegments(i,e.segments,t,r),o=Object.create(null);return Object.entries(e.children).forEach(([l,c])=>{o[l]=this.createSegmentGroup(i,c,t,r)}),new nt(a,o)}createSegments(i,e,t,r){return e.map(a=>a.path[0]===":"?this.findPosParam(i,a,r):this.findOrReturn(a,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new le(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function wx(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Ld(Ca(vn(e,()=>t(i))))}function Mx(n,i){return n.providers&&!n._injector&&(n._injector=Lp(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Hi(n){return n.outlet||Re}function xx(n,i){let e=n.filter(t=>Hi(t)===i);return e.push(...n.filter(t=>Hi(t)!==i)),e}var Nf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ay(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Ex(n,i,e,t,r,a,o){let l=oy(n,i,e);if(!l.matched)return x(l);let c=ay(a(l));return t=Mx(i,t),Sx(t,i,e,r,c,o).pipe(A(p=>p===!0?l:f({},Nf)))}function oy(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},Nf):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||kv)(e,n,i);if(!r)return f({},Nf);let a={};Object.entries(r.posParams??{}).forEach(([l,c])=>{a[l]=c.path});let o=r.consumed.length>0?f(f({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Av(n,i,e,t,r){return e.length>0&&kx(n,e,t,r)?{segmentGroup:new nt(i,Rx(t,new nt(e,n.children))),slicedSegments:[]}:e.length===0&&Tx(n,e,t)?{segmentGroup:new nt(n.segments,Ax(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new nt(n.segments,n.children),slicedSegments:e}}function Ax(n,i,e,t){let r={};for(let a of e)if(nu(n,i,a)&&!t[Hi(a)]){let o=new nt([],{});r[Hi(a)]=o}return f(f({},t),r)}function Rx(n,i){let e={};e[Re]=i;for(let t of n)if(t.path===""&&Hi(t)!==Re){let r=new nt([],{});e[Hi(t)]=r}return e}function kx(n,i,e,t){return e.some(r=>!nu(n,i,r)||!(Hi(r)!==Re)?!1:!(t!==void 0&&Hi(r)===t))}function Tx(n,i,e){return e.some(t=>nu(n,i,t))}function nu(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Nx(n,i,e){return i.length===0&&!n.children[e]}var If=class{};async function Ix(n,i,e,t,r,a,o,l){return new Of(n,i,e,t,r,o,a,l).recognize()}var Ox=31,Of=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,a,o,l,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=c,this.applyRedirects=new Tf(this.urlSerializer,this.urlTree)}noMatchError(i){return new le(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Av(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new hi(t,e),a=new kl("",r),o=Gv(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(i){let e=new go([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Re,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,Re,e),rootSnapshot:e}}catch(t){if(t instanceof Nl)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Dr?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,a){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,a);let o=await this.processSegment(i,e,t,t.segments,r,!0,a);return o instanceof hi?[o]:[]}async processChildren(i,e,t,r){let a=[];for(let c of Object.keys(t.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let p=t.children[c],g=xx(e,c),b=await this.processSegmentGroup(i,g,p,c,r);o.push(...b)}let l=sy(o);return Fx(l),l}async processSegment(i,e,t,r,a,o,l){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,a,o,l)}catch(p){if(p instanceof Dr||ty(p))continue;throw p}if(Nx(t,r,a))return new If;throw new Dr(t)}async processSegmentAgainstRoute(i,e,t,r,a,o,l,c){if(Hi(t)!==o&&(o===Re||!nu(r,a,t)))throw new Dr(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,a,o,c);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,a,o,c);throw new Dr(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,a,o,l){let{matched:c,parameters:p,consumedSegments:g,positionalParamSegments:b,remainingSegments:D}=oy(e,r,a);if(!c)throw new Dr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ox&&(this.allowRedirects=!1));let V=this.createSnapshot(i,r,a,p,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(g,r.redirectTo,b,ay(V),i),Z=await this.applyRedirects.lineralizeSegments(r,W);return this.processSegment(i,t,e,Z.concat(D),o,!1,l)}createSnapshot(i,e,t,r,a){let o=new go(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Lx(e),Hi(e),e.component??e._loadedComponent??null,e,Bx(e),i),l=Pf(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(l.params),o.data=Object.freeze(l.data),o}async matchSegmentAgainstRoute(i,e,t,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=Ce=>this.createSnapshot(i,t,Ce.consumedSegments,Ce.parameters,o),c=await Ld(Ex(e,t,r,i,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Dr(e);i=t._injector??i;let{routes:p}=await this.getChildConfig(i,t,r),g=t._loadedInjector??i,{parameters:b,consumedSegments:D,remainingSegments:V}=c,W=this.createSnapshot(i,t,D,b,o),{segmentGroup:Z,slicedSegments:me}=Av(e,D,V,p,a);if(me.length===0&&Z.hasChildren()){let Ce=await this.processChildren(g,p,Z,W);return new hi(W,Ce)}if(p.length===0&&me.length===0)return new hi(W,[]);let Ae=Hi(t)===a,ge=await this.processSegment(g,p,Z,me,Ae?Re:a,!0,W);return new hi(W,ge instanceof hi?[ge]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ld(yx(i,e,t,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw Dx(e)}return{routes:[],injector:i}}};function Fx(n){n.sort((i,e)=>i.value.outlet===Re?-1:e.value.outlet===Re?1:i.value.outlet.localeCompare(e.value.outlet))}function Px(n){let i=n.value.routeConfig;return i&&i.path===""}function sy(n){let i=[],e=new Set;for(let t of n){if(!Px(t)){i.push(t);continue}let r=i.find(a=>t.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=sy(t.children);i.push(new hi(t.value,r))}return i.filter(t=>!e.has(t))}function Lx(n){return n.data||{}}function Bx(n){return n.resolve||{}}function Vx(n,i,e,t,r,a,o){return se(async l=>{let{state:c,tree:p}=await Ix(n,i,e,t,l.extractedUrl,r,a,o);return _(f({},l),{targetSnapshot:c,urlAfterRedirects:p})})}function jx(n){return se(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return x(i);let r=new Set(t.map(l=>l.route)),a=new Set;for(let l of r)if(!a.has(l))for(let c of ly(l))a.add(c);let o=0;return In(a).pipe(oa(l=>r.has(l)?zx(l,e,n):(l.data=Pf(l,l.parent,n).resolve,x(void 0))),ot(()=>o++),Ip(1),se(l=>o===a.size?x(i):At))})}function ly(n){let i=n.children.map(e=>ly(e)).flat();return[n,...i]}function zx(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Xv(t)&&(r[Il]=t.title),Mi(()=>(n.data=Pf(n,n.parent,e).resolve,Gx(r,n,i).pipe(A(a=>(n._resolvedData=a,n.data=f(f({},n.data),a),null)))))}function Gx(n,i,e){let t=Sf(n);if(t.length===0)return x({});let r={};return In(t).pipe(se(a=>Ux(n[a],i,e).pipe(Pr(),ot(o=>{if(o instanceof _o)throw Qd(new Gr,o);r[a]=o}))),Ip(1),A(()=>r),ie(a=>ty(a)?At:Zc(a)))}function Ux(n,i,e){let t=i._environmentInjector,r=yo(n,t),a=r.resolve?r.resolve(i,e):vn(t,()=>r(i,e));return Ca(a)}var cy=new v("");function Ff(n){return Le(i=>{let e=n(i);return e?In(e).pipe(A(()=>i)):x(i)})}var jf=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(a=>a.outlet===Re);return t}getResolvedTitleForRoute(e){return e.data[Il]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:()=>s(dy)})}return n})(),dy=(()=>{class n extends jf{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(q(Sv))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ll=new v("",{factory:()=>({})}),Bl=new v(""),uy=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=s(Eb);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await Nv(vn(e,()=>t.loadComponent())),o=await hy(Up(a));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await my(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();async function my(n,i,e,t){let r=await Nv(vn(e,()=>n.loadChildren())),a=await hy(Up(r)),o;a instanceof yb||Array.isArray(a)?o=a:o=await i.compileModuleAsync(a),t&&t(n);let l,c,p=!1,g;return Array.isArray(o)?(c=o,p=!0):(l=o.create(e).injector,g=o,c=l.get(Bl,[],{optional:!0,self:!0}).flat()),{routes:c.map(Vf),injector:l,factory:g}}async function hy(n){return n}var iu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:()=>s($x)})}return n})(),$x=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),py=new v("");var Hx=()=>{},fy=new v(""),gy=(()=>{class n{currentNavigation=ce(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ce(null);events=new E;transitionAbortWithErrorSubject=new E;configLoader=s(uy);environmentInjector=s(Bt);destroyRef=s(di);urlSerializer=s(Ol);rootContexts=s(vo);location=s(jr);inputBindingEnabled=s(tu,{optional:!0})!==null;titleStrategy=s(jf);options=s(Ll,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||XM;urlHandlingStrategy=s(iu);createViewTransition=s(py,{optional:!0});navigationErrorHandler=s(fy,{optional:!0});routerResourcesFeature=s(cy,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>x(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new $d(r)),t=r=>this.events.next(new Hd(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;tt(()=>{this.transitions?.next(_(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ht(null),this.transitions.pipe(we(t=>t!==null),Le(t=>{let r=!0,a=!1,o=new AbortController,l=()=>!a&&this.currentTransition?.id===t.id;return x(t).pipe(Le(c=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",tn.SupersededByNewNavigation),At;this.currentTransition=t;let p=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:p?_(f({},p),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let g=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),b=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!g&&b!=="reload")return this.events.next(new Mr(c.id,this.urlSerializer.serialize(c.rawUrl),"",xl.IgnoredSameUrlNavigation)),c.resolve(!1),At;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return x(c).pipe(Le(D=>(this.events.next(new ya(D.id,this.urlSerializer.serialize(D.extractedUrl),D.source,D.restoredState)),D.id!==this.navigationId?At:Promise.resolve(D))),Vx(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ot(D=>{t.targetSnapshot=D.targetSnapshot,t.urlAfterRedirects=D.urlAfterRedirects,this.currentNavigation.update(V=>(V.finalUrl=D.urlAfterRedirects,V)),this.events.next(new Al)}),Le(D=>In(t.routesRecognizeHandler.deferredHandle??x(void 0)).pipe(A(()=>D))),ot(()=>{let D=new El(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(D)}));if(g&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:D,extractedUrl:V,source:W,restoredState:Z,extras:me}=c,Ae=new ya(D,this.urlSerializer.serialize(V),W,Z);this.events.next(Ae);let ge=Yv(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=_(f({},c),{targetSnapshot:ge,urlAfterRedirects:V,extras:_(f({},me),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ce=>(Ce.finalUrl=V,Ce)),x(t)}else return this.events.next(new Mr(c.id,this.urlSerializer.serialize(c.extractedUrl),"",xl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),At}),A(c=>{let p=new jd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(p),this.currentTransition=t=_(f({},c),{guards:tx(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),t}),mx(c=>this.events.next(c)),Le(c=>{if(t.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Qd(this.urlSerializer,c.guardsResult);let p=new zd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(p),!l())return At;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",tn.GuardRejected),At;if(c.guards.canActivateChecks.length===0)return x(c);let g=new Gd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(g),!l())return At;let b=!1;return x(c).pipe(jx(this.paramsInheritanceStrategy),ot({next:()=>{b=!0;let D=new Ud(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(D)},complete:()=>{b||this.cancelNavigationTransition(c,"",tn.NoDataFromResolver)}}))}),Ff(c=>{let p=b=>{let D=[];if(b.routeConfig?._loadedComponent)b.component=b.routeConfig?._loadedComponent;else if(b.routeConfig?.loadComponent){let V=b._environmentInjector;D.push(this.configLoader.loadComponent(V,b.routeConfig).then(W=>{b.component=W}))}for(let V of b.children)D.push(...p(V));return D},g=p(c.targetSnapshot.root);return g.length===0?x(c):In(Promise.all(g).then(()=>c))}),Le(c=>{let{newlyCreatedRoutes:p,state:g}=ZM(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=t=c=_(f({},c),{targetRouterState:g,newlyCreatedRoutes:p}),this.currentNavigation.update(b=>(b.targetRouterState=g,b)),x(c)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(c=>c),Ff(()=>this.afterPreactivation()),Le(()=>{let{currentSnapshot:c,targetSnapshot:p}=t,g=this.createViewTransition?.(this.environmentInjector,c.root,p.root,t.hasUAVisualTransition);return g?In(g).pipe(A(()=>t)):x(t)}),Pe(1),Le(c=>{r=!1,this.events.next(new po);let p=t.beforeActivateHandler.deferredHandle;return p?In(p.then(()=>c)):x(c)}),ot(c=>{new kf(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,p=>this.events.next(p),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),l()&&(_y(c.targetRouterState),a=!0,this.currentNavigation.update(p=>(p.abort=Hx,p)),this.lastSuccessfulNavigation.set(tt(this.currentNavigation)),this.events.next(new wr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),F(ny(o.signal).pipe(we(()=>!a&&r),ot(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",tn.Aborted)}))),ot({complete:()=>{a=!0}}),F(this.transitionAbortWithErrorSubject.pipe(ot(c=>{throw c}))),Ya(()=>{o.abort(),a||this.cancelNavigationTransition(t,"",tn.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ie(c=>{if(a=!0,Rv(t),this.destroyed)return t.resolve(!1),At;if(ey(c))this.events.next(new Ni(t.id,this.urlSerializer.serialize(t.extractedUrl),c.message,c.cancellationCode)),ex(c)?this.events.next(new fo(c.url,c.navigationBehaviorOptions)):t.resolve(!1);else{let p=new Sa(t.id,this.urlSerializer.serialize(t.extractedUrl),c,t.targetSnapshot??void 0);try{let g=vn(this.environmentInjector,()=>this.navigationErrorHandler?.(p));if(g instanceof _o){let{message:b,cancellationCode:D}=Qd(this.urlSerializer,g);this.events.next(new Ni(t.id,this.urlSerializer.serialize(t.extractedUrl),b,D)),this.events.next(new fo(g.redirectTo,g.navigationBehaviorOptions))}else throw this.events.next(p),c}catch(g){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(g)}}return At}))}))}cancelNavigationTransition(e,t,r){Rv(e);let a=new Ni(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=tt(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Wx(n){return n!==Dl}function Rv(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;_y(n.targetRouterState)}function _y(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var by=new v("");var vy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:()=>s(qx)})}return n})(),eu=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},qx=(()=>{class n extends eu{static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),zf=(()=>{class n{urlSerializer=s(Ol);options=s(Ll,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=s(jr);urlHandlingStrategy=s(iu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ii;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=r??a;return o instanceof Ii?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Yv(null,s(Bt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:()=>s(Yx)})}return n})(),Yx=(()=>{class n extends zf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0},t.hasUAVisualTransition)})})}handleRouterEvent(e,t){e instanceof ya?this.updateStateMemento():e instanceof Mr?this.commitTransition(t):e instanceof El?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof po?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ni&&!qv(e)?this.restoreHistory(t):e instanceof Sa?this.restoreHistory(t,!0):e instanceof wr&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:a}=t,{replaceUrl:o,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||o){let c=this.browserPageId,p=f(f({},l),this.generateNgRouterState(a,c,t));this.location.replaceState(e,"",p)}else{let c=f(f({},l),this.generateNgRouterState(a,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Gf(n,i){n.events.pipe(we(e=>e instanceof wr||e instanceof Ni||e instanceof Sa||e instanceof Mr),A(e=>e instanceof wr||e instanceof Mr?0:(e instanceof Ni?e.code===tn.Redirect||e.code===tn.SupersededByNewNavigation:!1)?2:1),we(e=>e!==2),Pe(1)).subscribe(()=>{i()})}var Oi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=s(jp);stateManager=s(zf);options=s(Ll,{optional:!0})||{};pendingTasks=s(ab);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=s(gy);urlSerializer=s(Ol);location=s(jr);urlHandlingStrategy=s(iu);injector=s(Bt);_events=new E;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=s(vy);injectorCleanup=s(by,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=s(Bl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!s(tu,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Te;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,a=tt(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(t,a),t instanceof Ni&&t.code!==tn.Redirect&&t.code!==tn.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof wr)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof fo){let o=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Wx(r.source)},o);this.scheduleNavigation(l,Dl,null,c,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}YM(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Dl,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,a,o)=>{this.navigateToSyncWithBrowser(e,r,t,a,o)})}navigateToSyncWithBrowser(e,t,r,a,o){let l=r?.navigationId?r:null,c=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(a=_(f({},a),{browserUrl:e})),r){let g=f({},r);delete g.navigationId,delete g.\u0275routerPageId,delete g.\u0275routerUrl,Object.keys(g).length!==0&&(a.state=g)}let p=this.parseUrl(c);this.scheduleNavigation(p,t,l,a,o).catch(g=>{this.disposed||this.injector.get(tl)(g)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return tt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Vf),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:l,preserveFragment:c}=t,p=c?this.currentUrlTree.fragment:o,g=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":g=f(f({},this.currentUrlTree.queryParams),a);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=a||null}g!==null&&(g=this.removeEmptyProps(g));let b;try{let D=r?r.snapshot:this.routerState.snapshot.root;b=Uv(D)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return $v(b,e,g,p??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=ho(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Dl,null,t)}navigate(e,t={skipLocationChange:!1}){return Kx(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(la(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},Ov):t===!1?r=f({},Cf):r=f(f({},Cf),t),ho(e))return Dv(this.currentUrlTree,e,r);let a=this.parseUrl(e);return Dv(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,a])=>(a!=null&&(t[r]=a),t),{})}scheduleNavigation(e,t,r,a,o,l){if(this.disposed)return Promise.resolve(!1);let c,p,g;l?(c=l.resolve,p=l.reject,g=l.promise):g=new Promise((D,V)=>{c=D,p=V});let b=this.pendingTasks.add();return Gf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(b))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,hasUAVisualTransition:o,resolve:c,reject:p,promise:g,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),g.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Kx(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new le(4008,!1)}var eE=new v("");function Uf(n,...i){return bn([{provide:Bl,multi:!0,useValue:n},{provide:Ur,useFactory:tE},{provide:zp,multi:!0,useFactory:nE},i.map(e=>e.\u0275providers)])}function tE(){return s(Oi).routerState.root}function nE(){let n=s(ee);return i=>{let e=n.get(ir);if(i!==e.components[0])return;let t=n.get(Oi),r=n.get(iE);n.get(rE)===1&&t.initialNavigation(),n.get(aE,null,{optional:!0})?.setUpPreloading(),n.get(eE,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var iE=new v("",{factory:()=>new E}),rE=new v("",{factory:()=>1});var aE=new v("");var sE="@",lE=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(ee);loadingSchedulerFn=s(cE,{optional:!0});_engine;constructor(e,t,r,a,o){this.doc=e,this.delegate=t,this.zone=r,this.animationType=a,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-TXDVDZRV.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new le(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let o=new a(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new $f(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,t);a.use(l),this.scheduler??=this.injector.get(lb,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){ha()};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),$f=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(sE)}},cE=new v("");function yy(n="animations"){return sd("NgAsyncAnimations"),bn([{provide:qt,useFactory:()=>new lE(s(re),s(fl),s(J),n)},{provide:Xa,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Vl=new v("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(io)}),So="Method not implemented",Gt=class{locale;_localeChanges=new E;localeChanges=this._localeChanges;setTime(i,e,t,r){throw new Error(So)}getHours(i){throw new Error(So)}getMinutes(i){throw new Error(So)}getSeconds(i){throw new Error(So)}parseTime(i,e){throw new Error(So)}addSeconds(i,e){throw new Error(So)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareDate(i,e):t==r}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareTime(i,e):t==r}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},lr=new v("mat-date-formats");var ru=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var Hf;try{Hf=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Hf=!1}var Ee=(()=>{class n{_platformId=s(Ka);isBrowser=this._platformId?Zb(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Hf)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function xr(n){return Array.isArray(n)?n:[n]}var Sy=new Set,Da,Co=(()=>{class n{_platform=s(Ee);_nonce=s(da,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):uE}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&dE(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function dE(n,i){if(!Sy.has(n))try{Da||(Da=document.createElement("style"),i&&Da.setAttribute("nonce",i),Da.setAttribute("type","text/css"),document.head.appendChild(Da)),Da.sheet&&(Da.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),Sy.add(n))}catch(e){console.error(e)}}function uE(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var wa=(()=>{class n{_mediaMatcher=s(Co);_zone=s(J);_queries=new Map;_destroySubject=new E;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Cy(xr(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Cy(xr(e)).map(o=>this._registerQuery(o).observable),a=Zt(r);return a=Jc(a.pipe(Pe(1)),a.pipe(Lr(1),tr(0))),a.pipe(A(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:p})=>{l.matches=l.matches||c,l.breakpoints[p]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new at(o=>{let l=c=>this._zone.run(()=>o.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(rt(t),A(({matches:o})=>({query:e,matches:o})),F(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Cy(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var au={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var mE=new v("MATERIAL_ANIMATIONS"),Dy=null;function Wf(){return s(mE,{optional:!0})?.animationsDisabled||s(Xa,{optional:!0})==="NoopAnimations"?"di-disabled":(Dy??=s(Co).matchMedia("(prefers-reduced-motion)").matches,Dy?"reduced-motion":"enabled")}function Be(){return Wf()!=="enabled"}function Ma(n){return n.buttons===0||n.detail===0}function xa(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var qf;function wy(){if(qf==null){let n=typeof document<"u"?document.head:null;qf=!!(n&&(n.createShadowRoot||n.attachShadow))}return qf}function Yf(n){if(wy()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Fi(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Ft(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var jl;function My(){if(jl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>jl=!0}))}finally{jl=jl||!1}return jl}function Do(n){return My()?n:!!n.capture}function Wi(n,i=0){return ou(n)?Number(n):arguments.length===2?i:0}function ou(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Cn(n){return n instanceof z?n.nativeElement:n}var xy=new v("cdk-input-modality-detector-options"),Ey={ignoreKeys:[18,17,224,91,16]},Ay=650,Kf={passive:!0,capture:!0},Ry=(()=>{class n{_platform=s(Ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ht(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ft(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ay||(this._modality.next(Ma(e)?"keyboard":"mouse"),this._mostRecentTarget=Ft(e))};_onTouchstart=e=>{if(xa(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ft(e)};constructor(){let e=s(J),t=s(re),r=s(xy,{optional:!0});if(this._options=f(f({},Ey),r),this.modalityDetected=this._modality.pipe(Lr(1)),this.modalityChanged=this.modalityDetected.pipe(sa()),this._platform.isBrowser){let a=s(qt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,Kf),a.listen(t,"mousedown",this._onMousedown,Kf),a.listen(t,"touchstart",this._onTouchstart,Kf)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),zl=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(zl||{}),ky=new v("cdk-focus-monitor-default-options"),su=Do({passive:!0,capture:!0}),nn=(()=>{class n{_ngZone=s(J);_platform=s(Ee);_inputModalityDetector=s(Ry);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(re);_stopInputModalityDetector=new E;constructor(){let e=s(ky,{optional:!0});this._detectionMode=e?.detectionMode||zl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ft(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Cn(e);if(!this._platform.isBrowser||r.nodeType!==1)return x();let a=Yf(r)||this._document,o=this._elementInfo.get(r);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new E,rootNode:a};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Cn(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let a=Cn(e),o=this._document.activeElement;a===o?this._getClosestElementsInfo(a).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===zl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===zl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Ay:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),a=Ft(e);!r||!r.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,su),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,su)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(F(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,su),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,su),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,a)=>{(a===e||r.checkChildren&&a.contains(e))&&t.push([a,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let o=0;o<a.length;o++)if(a[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Gl=(()=>{class n{_elementRef=s(z);_focusMonitor=s(nn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new L;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var lu=new WeakMap,st=(()=>{class n{_appRef;_injector=s(ee);_environmentInjector=s(Bt);load(e){let t=this._appRef=this._appRef||this._injector.get(ir),r=lu.get(t);r||(r={loaders:new Set,refs:[]},lu.set(t,r),t.onDestroy(()=>{lu.get(t)?.refs.forEach(a=>a.destroy()),lu.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(dd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var cr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),cu;function hE(){if(cu===void 0&&(cu=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{cu=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return cu}function Ea(n){return hE()?.createHTML(n)||n}function Ty(n,i,e){let t=e.sanitize(yn.HTML,i);n.innerHTML=Ea(t||"")}function pE(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Ny=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Iy=(()=>{class n{_mutationObserverFactory=s(Ny);_observedElements=new Map;_ngZone=s(J);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Cn(e);return new at(r=>{let o=this._observeElement(t).pipe(A(l=>l.filter(c=>!pE(c))),we(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new E,r=this._mutationObserverFactory.create(a=>t.next(a));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Oy=(()=>{class n{_contentObserver=s(Iy);_elementRef=s(z);event=new L;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Wi(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(tr(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",B],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),du=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[Ny]})}return n})();var uu=(()=>{class n{_platform=s(Ee);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return gE(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=fE(wE(e));if(t&&(Fy(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),a=Fy(e);return e.hasAttribute("contenteditable")?a!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!CE(e)?!1:r==="audio"?e.hasAttribute("controls")?a!==-1:!1:r==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return DE(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function fE(n){try{return n.frameElement}catch{return null}}function gE(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function _E(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function bE(n){return yE(n)&&n.type=="hidden"}function vE(n){return SE(n)&&n.hasAttribute("href")}function yE(n){return n.nodeName.toLowerCase()=="input"}function SE(n){return n.nodeName.toLowerCase()=="a"}function By(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Fy(n){if(!By(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function CE(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function DE(n){return bE(n)?!1:_E(n)||vE(n)||n.hasAttribute("contenteditable")||By(n)}function wE(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Zf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,a=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=o,a||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Xe(i,{injector:this._injector})}},mu=(()=>{class n{_checker=s(uu);_ngZone=s(J);_document=s(re);_injector=s(ee);constructor(){s(st).load(cr)}create(e,t=!1){return new Zf(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Qf=(()=>{class n{_elementRef=s(z);_focusTrapFactory=s(mu);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(Ee).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Fi(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",B],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",B]},exportAs:["cdkTrapFocus"],features:[Oe]})}return n})(),Vy=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),jy=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),ME=0,Ul=(()=>{class n{_ngZone=s(J);_defaultOptions=s(jy,{optional:!0});_liveElement;_document=s(re);_sanitizer=s(vl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Vy,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,a,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[a,o]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=r&&r.politeness?r.politeness:"polite"),o==null&&r&&(o=r.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ty(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${ME++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var $r=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})($r||{}),Py="cdk-high-contrast-black-on-white",Ly="cdk-high-contrast-white-on-black",Xf="cdk-high-contrast-active",zy=(()=>{class n{_platform=s(Ee);_hasCheckedHighContrastMode=!1;_document=s(re);_breakpointSubscription;constructor(){this._breakpointSubscription=s(wa).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return $r.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return $r.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return $r.BLACK_ON_WHITE}return $r.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Xf,Py,Ly),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===$r.BLACK_ON_WHITE?e.add(Xf,Py):t===$r.WHITE_ON_BLACK&&e.add(Xf,Ly)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Er=(()=>{class n{constructor(){s(zy)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[du]})}return n})();var xE=200,hu=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:xE;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ot(e=>this._pressedLetters.push(e)),tr(i),we(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,a=this._items[r];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function it(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var wo=class{_items;_activeItemIndex=ce(-1);_activeItem=ce(null);_wrap=!1;_typeaheadSubscription=Te.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof ua?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):nr(i)&&(this._effectRef=Dt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new E;change=new E;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new hu(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!i[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(a<o?a:o-1,-1);break}else return;default:(r||it(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,a=e[r];if(!this._skipPredicateFn(a)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return nr(this._items)?this._items():this._items instanceof ua?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Aa=class extends wo{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Ra=class extends wo{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var $y=new Map,$e=class n{_appId=s(ca);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=$y.get(i);return t===void 0?t=0:t++,$y.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})};var Wy=" ";function EE(n,i,e){let t=_u(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Wy)))}function AE(n,i,e){let t=_u(n,i);e=e.trim();let r=t.filter(a=>a!==e);r.length?n.setAttribute(i,r.join(Wy)):n.removeAttribute(i)}function _u(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var qy="cdk-describedby-message",gu="cdk-describedby-host",eg=0,Wl=(()=>{class n{_platform=s(Ee);_document=s(re);_messageRegistry=new Map;_messagesContainer=null;_id=`${eg++}`;constructor(){s(st).load(cr),this._id=s(ca)+"-"+eg++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let a=Jf(t,r);typeof t!="string"?(Hy(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let a=Jf(t,r);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let o=this._messageRegistry.get(a);o&&o.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${gu}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(gu);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Hy(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Jf(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=_u(e,"aria-describedby").filter(r=>r.indexOf(qy)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);EE(e,"aria-describedby",r.messageElement.id),e.setAttribute(gu,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,AE(e,"aria-describedby",r.messageElement.id),e.removeAttribute(gu)}_isElementDescribedByMessage(e,t){let r=_u(e,"aria-describedby"),a=this._messageRegistry.get(t),o=a&&a.messageElement.id;return!!o&&r.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return r?!a||a.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Jf(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Hy(n,i){n.id||(n.id=`${qy}-${i}-${eg++}`)}var qi=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(qi||{}),bu,ka;function vu(){if(ka==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ka=!1,ka;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ka=!0;else{let n=Element.prototype.scrollTo;n?ka=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ka=!1}}return ka}function Mo(){if(typeof document!="object"||!document)return qi.NORMAL;if(bu==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),bu=qi.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,bu=n.scrollLeft===0?qi.NEGATED:qi.INVERTED),n.remove()}return bu}function tg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var xo,Yy=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ng(){if(xo)return xo;if(typeof document!="object"||!document)return xo=new Set(Yy),xo;let n=document.createElement("input");return xo=new Set(Yy.filter(i=>(n.setAttribute("type",i),n.type===i))),xo}function Mt(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Pi(n){return n!=null&&`${n}`!="false"}function Ky(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let r of t){let a=`${r}`.trim();a&&e.push(a)}}return e}var Li=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Li||{}),ig=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Li.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Xy=Do({passive:!0,capture:!0}),rg=class{_events=new Map;addHandler(i,e,t,r){let a=this._events.get(e);if(a){let o=a.get(t);o?o.add(r):a.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Xy)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let a=r.get(e);a&&(a.delete(t),a.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Xy)))}_delegateEventHandler=i=>{let e=Ft(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(a=>a.handleEvent(i))})}},ql={enterDuration:225,exitDuration:150},RE=800,Zy=Do({passive:!0,capture:!0}),Qy=["mousedown","touchstart"],Jy=["mouseup","mouseleave","touchend","touchcancel"],kE=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),Yl=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new rg;constructor(i,e,t,r,a){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Cn(t)),a&&a.get(st).load(kE)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=f(f({},ql),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let o=t.radius||TE(i,e,r),l=i-r.left,c=e-r.top,p=a.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${l-o}px`,g.style.top=`${c-o}px`,g.style.height=`${o*2}px`,g.style.width=`${o*2}px`,t.color!=null&&(g.style.backgroundColor=t.color),g.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(g);let b=window.getComputedStyle(g),D=b.transitionProperty,V=b.transitionDuration,W=D==="none"||V==="0s"||V==="0s, 0s"||r.width===0&&r.height===0,Z=new ig(this,g,t,W);g.style.transform="scale3d(1, 1, 1)",Z.state=Li.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Z);let me=null;return!W&&(p||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ae=()=>{me&&(me.fallbackTimer=null),clearTimeout(Ce),this._finishRippleTransition(Z)},ge=()=>this._destroyRipple(Z),Ce=setTimeout(ge,p+100);g.addEventListener("transitionend",Ae),g.addEventListener("transitioncancel",ge),me={onTransitionEnd:Ae,onTransitionCancel:ge,fallbackTimer:Ce}}),this._activeRipples.set(Z,me),(W||!p)&&this._finishRippleTransition(Z),Z}fadeOutRipple(i){if(i.state===Li.FADING_OUT||i.state===Li.HIDDEN)return;let e=i.element,t=f(f({},ql),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Li.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Cn(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Qy.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Jy.forEach(e=>{this._triggerElement.addEventListener(e,this,Zy)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Li.FADING_IN?this._startFadeOutTransition(i):i.state===Li.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Li.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Li.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Ma(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+RE;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!xa(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Li.VISIBLE||i.config.terminateOnPointerUp&&i.state===Li.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Qy.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Jy.forEach(e=>i.removeEventListener(e,this,Zy)),this._pointerUpEventsRegistered=!1))}};function TE(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var yu=new v("mat-ripple-global-options"),Ar=(()=>{class n{_elementRef=s(z);_animationsDisabled=Be();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(J),t=s(Ee),r=s(yu,{optional:!0}),a=s(ee);this._globalOptions=r||{},this._rippleRenderer=new Yl(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var e0=(()=>{class n{_animationsDisabled=Be();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var Bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var NE=["text"],IE=[[["mat-icon"]],"*"],OE=["mat-icon","*"];function FE(n,i){if(n&1&&I(0,"mat-pseudo-checkbox",1),n&2){let e=O();w("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function PE(n,i){if(n&1&&I(0,"mat-pseudo-checkbox",3),n&2){let e=O();w("disabled",e.disabled)}}function LE(n,i){if(n&1&&(d(0,"span",4),m(1),u()),n&2){let e=O();h(),_e("(",e.group.label,")")}}var Xl=new v("MAT_OPTION_PARENT_COMPONENT"),Zl=new v("MatOptgroup");var Kl=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},kt=(()=>{class n{_element=s(z);_changeDetectorRef=s(Me);_parent=s(Xl,{optional:!0});group=s(Zl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s($e).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ce(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new L;_text;_stateChanges=new E;constructor(){let e=s(st);e.load(Bn),e.load(cr),this._signalDisableRipple=!!this._parent&&nr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!it(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Kl(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Ue(NE,7),t&2){let a;G(a=U())&&(r._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&M("click",function(){return r._selectViaInteraction()})("keydown",function(o){return r._handleKeydown(o)}),t&2&&(St("id",r.id),te("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",B]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:OE,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(Ie(IE),k(0,FE,1,2,"mat-pseudo-checkbox",1),ne(1),d(2,"span",2,0),ne(4,1),u(),k(5,PE,1,1,"mat-pseudo-checkbox",3),k(6,LE,2,1,"span",4),I(7,"div",5)),t&2&&(T(r.multiple?0:-1),h(5),T(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),T(r.group&&r.group._inert?6:-1),h(),w("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[e0,Ar],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return n})();function Su(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===r[a]&&a++;return a}return 0}function Cu(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var BE=new v("cdk-dir-doc",{providedIn:"root",factory:()=>s(re)}),VE=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function t0(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?VE.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var lt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ce("ltr");change=new L;constructor(){let e=s(BE,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(t0(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var ve=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})();var Eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var n0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var Ao=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Eo,n0,kt,ve]})}return n})();var jE={capture:!0},zE=["focus","mousedown","mouseenter","touchstart"],ag="mat-ripple-loader-uninitialized",og="mat-ripple-loader-class-name",i0="mat-ripple-loader-centered",Du="mat-ripple-loader-disabled",r0=(()=>{class n{_document=s(re);_animationsDisabled=Be();_globalRippleOptions=s(yu,{optional:!0});_platform=s(Ee);_ngZone=s(J);_injector=s(ee);_eventCleanups;_hosts=new Map;constructor(){let e=s(qt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zE.map(t=>e.listen(this._document,t,this._onInteraction,jE)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ag,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(og))&&e.setAttribute(og,t.className||""),t.centered&&e.setAttribute(i0,""),t.disabled&&e.setAttribute(Du,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Du,""):e.removeAttribute(Du)}_onInteraction=e=>{let t=Ft(e);if(t instanceof HTMLElement){let r=t.closest(`[${ag}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(og)),e.append(t);let r=this._globalRippleOptions,a=this._animationsDisabled?0:r?.animation?.enterDuration??ql.enterDuration,o=this._animationsDisabled?0:r?.animation?.exitDuration??ql.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Du),rippleConfig:{centered:e.hasAttribute(i0),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:o}}},c=new Yl(l,this._ngZone,t,this._platform,this._injector),p=!l.rippleDisabled;p&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:p}),e.removeAttribute(ag)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var Ro=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,a){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=a,e?nr(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var GE=["*"],a0=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:GE,decls:1,vars:0,template:function(t,r){t&1&&(Ie(),ne(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var UE=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,$E=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function sg(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var cg=(()=>{class n extends Gt{_matDateLocale=s(Vl,{optional:!0});constructor(){super();let e=s(Vl,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return sg(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return sg(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return sg(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let a=this._createDateWithOverflow(e,t,r);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,_(f({},t),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(UE.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,a){let o=this.clone(e);return o.setHours(t,r,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let a=this._parseTimeString(r);if(a===null){let o=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let a=new Date;return a.setFullYear(e,t,r),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match($E);if(t){let r=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),l=t[4];if(r===12?r=l==="AM"?0:r:l==="PM"&&(r+=12),lg(r,0,23)&&lg(a,0,59)&&(o==null||lg(o,0,59)))return this.setTime(this.today(),r,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac,autoProvided:!1})}return n})();function lg(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var HE={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var wu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[WE()]})}return n})();function WE(n=HE){return[{provide:Gt,useClass:cg},{provide:lr,useValue:n}]}function qE(n){let i=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length;return e===1&&t===0?1:5}var o0=["de",[["AM","PM"]],void 0,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."]],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{ATS:["\xF6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[void 0,"\u0440."],CUC:[void 0,"Cub$"],DEM:["DM"],FKP:[void 0,"Fl\xA3"],GHS:[void 0,"\u20B5"],GNF:[void 0,"F.G."],KMF:[void 0,"FC"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],RWF:[void 0,"F.Rw"],SYP:[void 0,"SYP"],THB:["\u0E3F"],TWD:["NT$"],XXX:[],ZMW:[void 0,"K"]},"ltr",qE];var Mu=class n extends cg{parse(i){if(typeof i=="string"&&i.trim()){let e=i.trim().split(".");if(e.length===3){let t=parseInt(e[0],10),r=parseInt(e[1],10)-1,a=parseInt(e[2],10);a<100&&(a+=a<=50?2e3:1900);let o=new Date(a,r,t);if(o.getFullYear()===a&&o.getMonth()===r&&o.getDate()===t)return o}}return super.parse(i)}format(i,e){if(e==="input"){let t=i.getDate(),r=i.getMonth()+1,a=i.getFullYear();return`${this._to2digit(t)}.${this._to2digit(r)}.${a}`}return super.format(i,e)}_to2digit(i){return("00"+i).slice(-2)}getFirstDayOfWeek(){return 1}static \u0275fac=(()=>{let i;return function(t){return(i||(i=Ne(n)))(t||n)}})();static \u0275prov=$({token:n,factory:n.\u0275fac})};function xu(n,i){let t=!i?.manualCleanup?i?.injector?.get(di)??s(di):null,r=KE(i?.equal),a;i?.requireSync?a=ce({kind:0},{equal:r}):a=ce({kind:1,value:i?.initialValue},{equal:r});let o,l=n.subscribe({next:c=>a.set({kind:1,value:c}),error:c=>{a.set({kind:2,error:c}),o?.()},complete:()=>{o?.()}});if(i?.requireSync&&a().kind===0)throw new le(601,!1);return o=t?.onDestroy(l.unsubscribe.bind(l)),Ot(()=>{let c=a();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new le(601,!1)}},{equal:i?.equal})}function KE(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var mg={};function y(n,i){if(mg[n]=(mg[n]||0)+1,typeof i=="function")return dg(n,(...t)=>_(f({},i(...t)),{type:n}));switch(i?i._as:"empty"){case"empty":return dg(n,()=>({type:n}));case"props":return dg(n,t=>_(f({},t),{type:n}));default:throw new Error("Unexpected config.")}}function C(){return{_as:"props",_p:void 0}}function dg(n,i){return Object.defineProperty(i,"type",{value:n,writable:!1})}function XE(n,i){if(n==null)throw new Error(`${i} must be defined.`)}var ec="@ngrx/store/init",mr=(()=>{class n extends ht{constructor(){super({type:ec})}next(e){if(typeof e=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>"u")throw new TypeError("Actions must be objects");if(typeof e.type>"u")throw new TypeError("Actions must have a type property");super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),ZE=[mr],v0=new v("@ngrx/store Internal Root Guard"),s0=new v("@ngrx/store Internal Initial State"),tc=new v("@ngrx/store Initial State"),y0=new v("@ngrx/store Reducer Factory"),l0=new v("@ngrx/store Internal Reducer Factory Provider"),S0=new v("@ngrx/store Initial Reducers"),ug=new v("@ngrx/store Internal Initial Reducers");var c0=new v("@ngrx/store Internal Store Reducers");var QE=new v("@ngrx/store Internal Store Features");var JE=new v("@ngrx/store Feature Reducers"),d0=new v("@ngrx/store User Provided Meta Reducers"),Eu=new v("@ngrx/store Meta Reducers"),u0=new v("@ngrx/store Internal Resolved Meta Reducers"),m0=new v("@ngrx/store User Runtime Checks Config"),h0=new v("@ngrx/store Internal User Runtime Checks Config"),Ql=new v("@ngrx/store Internal Runtime Checks"),gg=new v("@ngrx/store Check if Action types are unique"),Jl=new v("@ngrx/store Root Store Provider"),Au=new v("@ngrx/store Feature State Provider");function eA(n,i={}){let e=Object.keys(n),t={};for(let a=0;a<e.length;a++){let o=e[a];typeof n[o]=="function"&&(t[o]=n[o])}let r=Object.keys(t);return function(o,l){o=o===void 0?i:o;let c=!1,p={};for(let g=0;g<r.length;g++){let b=r[g],D=t[b],V=o[b],W=D(V,l);p[b]=W,c=c||W!==V}return c?p:o}}function tA(n,i){return Object.keys(n).filter(e=>e!==i).reduce((e,t)=>Object.assign(e,{[t]:n[t]}),{})}function C0(...n){return function(i){if(n.length===0)return i;let e=n[n.length-1];return n.slice(0,-1).reduceRight((r,a)=>a(r),e(i))}}function D0(n,i){return Array.isArray(i)&&i.length>0&&(n=C0.apply(null,[...i,n])),(e,t)=>{let r=n(e);return(a,o)=>(a=a===void 0?t:a,r(a,o))}}function nA(n){let i=Array.isArray(n)&&n.length>0?C0(...n):e=>e;return(e,t)=>(e=i(e),(r,a)=>(r=r===void 0?t:r,e(r,a)))}var Ta=class extends at{},ko=class extends mr{},ku="@ngrx/store/update-reducers",Ru=(()=>{class n extends ht{get currentReducers(){return this.reducers}constructor(e,t,r,a){super(a(r,t)),this.dispatcher=e,this.initialState=t,this.reducers=r,this.reducerFactory=a}addFeature(e){this.addFeatures([e])}addFeatures(e){let t=e.reduce((r,{reducers:a,reducerFactory:o,metaReducers:l,initialState:c,key:p})=>{let g=typeof a=="function"?nA(l)(a,c):D0(o,l)(a,c);return r[p]=g,r},{});this.addReducers(t)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(t=>t.key))}addReducer(e,t){this.addReducers({[e]:t})}addReducers(e){this.reducers=f(f({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(t=>{this.reducers=tA(this.reducers,t)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:ku,features:e})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(t){return new(t||n)(q(ko),q(tc),q(S0),q(y0))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),iA=[Ru,{provide:Ta,useExisting:Ru},{provide:ko,useExisting:mr}],Na=(()=>{class n extends E{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})()}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),rA=[Na],To=class extends at{},p0=(()=>{class n extends ht{static{this.INIT=ec}constructor(e,t,r,a){super(a);let l=e.pipe(Xc(Kc)).pipe(rd(t)),c={state:a},p=l.pipe(nd(aA,c));this.stateSubscription=p.subscribe(({state:g,action:b})=>{this.next(g),r.next(b)}),this.state=xu(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(t){return new(t||n)(q(mr),q(Ta),q(Na),q(tc))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})();function aA(n={state:void 0},[i,e]){let{state:t}=n;return{state:e(t,i),action:i}}var oA=[p0,{provide:To,useExisting:p0}],He=(()=>{class n extends at{constructor(e,t,r,a){super(),this.actionsObserver=t,this.reducerManager=r,this.injector=a,this.source=e,this.state=e.state}select(e,...t){return lA.call(null,e,...t)(this)}selectSignal(e,t){return Ot(()=>e(this.state()),t)}lift(e){let t=new n(this,this.actionsObserver,this.reducerManager);return t.operator=e,t}dispatch(e,t){if(typeof e=="function")return this.processDispatchFn(e,t);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,t){this.reducerManager.addReducer(e,t)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,t){XE(this.injector,"Store Injector");let r=t?.injector??cA()??this.injector;return Dt(()=>{let a=e();tt(()=>this.dispatch(a))},{injector:r})}static{this.\u0275fac=function(t){return new(t||n)(q(To),q(mr),q(Ru),q(ee))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),sA=[He];function lA(n,i,...e){return function(r){let a;if(typeof n=="string"){let o=[i,...e].filter(Boolean);a=r.pipe(tb(n,...o))}else if(typeof n=="function")a=r.pipe(A(o=>n(o,i)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return a.pipe(sa())}}function cA(){try{return s(ee)}catch{return}}var _g="https://ngrx.io/guide/store/configuration/runtime-checks";function f0(n){return n===void 0}function g0(n){return n===null}function w0(n){return Array.isArray(n)}function dA(n){return typeof n=="string"}function uA(n){return typeof n=="boolean"}function mA(n){return typeof n=="number"}function M0(n){return typeof n=="object"&&n!==null}function hA(n){return M0(n)&&!w0(n)}function pA(n){if(!hA(n))return!1;let i=Object.getPrototypeOf(n);return i===Object.prototype||i===null}function hg(n){return typeof n=="function"}function fA(n){return hg(n)&&n.hasOwnProperty("\u0275cmp")}function gA(n,i){return Object.prototype.hasOwnProperty.call(n,i)}var _A=!1;function bA(){return _A}function _0(n,i){return n===i}function vA(n,i,e){for(let t=0;t<n.length;t++)if(!e(n[t],i[t]))return!0;return!1}function x0(n,i=_0,e=_0){let t=null,r=null,a;function o(){t=null,r=null}function l(g=void 0){a={result:g}}function c(){a=void 0}function p(){if(a!==void 0)return a.result;if(!t)return r=n.apply(null,arguments),t=arguments,r;if(!vA(arguments,t,i))return r;let g=n.apply(null,arguments);return t=arguments,e(r,g)?r:(r=g,g)}return{memoized:p,reset:o,setResult:l,clearResult:c}}function be(...n){return SA(x0)(...n)}function yA(n,i,e,t){if(e===void 0){let a=i.map(o=>o(n));return t.memoized.apply(null,a)}let r=i.map(a=>a(n,e));return t.memoized.apply(null,[...r,e])}function SA(n,i={stateFn:yA}){return function(...e){let t=e;if(Array.isArray(t[0])){let[g,...b]=t;t=[...g,...b]}else t.length===1&&CA(t[0])&&(t=DA(t[0]));let r=t.slice(0,t.length-1),a=t[t.length-1],o=r.filter(g=>g.release&&typeof g.release=="function"),l=n(function(...g){return a.apply(null,g)}),c=x0(function(g,b){return i.stateFn.apply(null,[g,r,b,l])});function p(){c.reset(),l.reset(),o.forEach(g=>g.release())}return Object.assign(c.memoized,{release:p,projector:l.memoized,setResult:c.setResult,clearResult:c.clearResult})}}function Vn(n){return be(i=>{let e=i[n];return!bA()&&rl()&&!(n in i)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function CA(n){return!!n&&typeof n=="object"&&Object.values(n).every(i=>typeof i=="function")}function DA(n){let i=Object.values(n),e=Object.keys(n),t=(...r)=>e.reduce((a,o,l)=>_(f({},a),{[o]:r[l]}),{});return[...i,t]}function wA(n){return n instanceof v?s(n):n}function E0(n){return typeof n=="function"?n():n}function MA(n,i){return n.concat(i)}function xA(){if(s(He,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function EA(n,i){return function(e,t){let r=i.action(t)?pg(t):t,a=n(e,r);return i.state()?pg(a):a}}function pg(n){Object.freeze(n);let i=hg(n);return Object.getOwnPropertyNames(n).forEach(e=>{if(!e.startsWith("\u0275")&&gA(n,e)&&(!i||e!=="caller"&&e!=="callee"&&e!=="arguments")){let t=n[e];(M0(t)||hg(t))&&!Object.isFrozen(t)&&pg(t)}}),n}function AA(n,i){return function(e,t){if(i.action(t)){let a=fg(t);b0(a,"action")}let r=n(e,t);if(i.state()){let a=fg(r);b0(a,"state")}return r}}function fg(n,i=[]){return(f0(n)||g0(n))&&i.length===0?{path:["root"],value:n}:Object.keys(n).reduce((t,r)=>{if(t)return t;let a=n[r];return fA(a)?t:f0(a)||g0(a)||mA(a)||uA(a)||dA(a)||w0(a)?!1:pA(a)?fg(a,[...i,r]):{path:[...i,r],value:a}},!1)}function b0(n,i){if(n===!1)return;let e=n.path.join("."),t=new Error(`Detected unserializable ${i} at "${e}". ${_g}#strict${i}serializability`);throw t.value=n.value,t.unserializablePath=e,t}function RA(n,i){return function(e,t){if(i.action(t)&&!J.isInAngularZone())throw new Error(`Action '${t.type}' running outside NgZone. ${_g}#strictactionwithinngzone`);return n(e,t)}}function kA(n){return rl()?f({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function TA({strictActionSerializability:n,strictStateSerializability:i}){return e=>n||i?AA(e,{action:t=>n&&!bg(t),state:()=>i}):e}function NA({strictActionImmutability:n,strictStateImmutability:i}){return e=>n||i?EA(e,{action:t=>n&&!bg(t),state:()=>i}):e}function bg(n){return n.type.startsWith("@ngrx")}function IA({strictActionWithinNgZone:n}){return i=>n?RA(i,{action:e=>n&&!bg(e)}):i}function OA(n){return[{provide:h0,useValue:n},{provide:m0,useFactory:PA,deps:[h0]},{provide:Ql,deps:[m0],useFactory:kA},{provide:Eu,multi:!0,deps:[Ql],useFactory:NA},{provide:Eu,multi:!0,deps:[Ql],useFactory:TA},{provide:Eu,multi:!0,deps:[Ql],useFactory:IA}]}function FA(){return[{provide:gg,multi:!0,deps:[Ql],useFactory:LA}]}function PA(n){return n}function LA(n){if(!n.strictActionTypeUniqueness)return;let i=Object.entries(mg).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(", ")}. ${_g}#strictactiontypeuniqueness`)}function BA(n={},i={}){return[{provide:v0,useFactory:xA},{provide:s0,useValue:i.initialState},{provide:tc,useFactory:E0,deps:[s0]},{provide:ug,useValue:n},{provide:c0,useExisting:n instanceof v?n:ug},{provide:S0,deps:[ug,[new cb(c0)]],useFactory:wA},{provide:d0,useValue:i.metaReducers?i.metaReducers:[]},{provide:u0,deps:[Eu,d0],useFactory:MA},{provide:l0,useValue:i.reducerFactory?i.reducerFactory:eA},{provide:y0,deps:[l0,u0],useFactory:D0},ZE,iA,rA,oA,sA,OA(i.runtimeChecks),FA()]}function VA(){s(mr),s(Ta),s(Na),s(He),s(v0,{optional:!0}),s(gg,{optional:!0})}var jA=[{provide:Jl,useFactory:VA},Js(()=>s(Jl))];function A0(n,i){return bn([...BA(n,i),jA])}function zA(){s(Jl);let n=s(QE),i=s(JE),e=s(Ru);s(gg,{optional:!0});let t=n.map((r,a)=>{let l=i.shift()[a];return _(f({},r),{reducers:l,initialState:E0(r.initialState)})});e.addFeatures(t)}var DG=[{provide:Au,useFactory:zA},Js(()=>s(Au))];function S(...n){let i=n.pop(),e=n.map(t=>t.type);return{reducer:i,types:e}}function jn(n,...i){let e=new Map;for(let t of i)for(let r of t.types){let a=e.get(r);if(a){let o=(l,c)=>t.reducer(a(l,c),c);e.set(r,o)}else e.set(r,t.reducer)}return function(t=n,r){let a=e.get(r.type);return a?a(t,r):t}}var nc=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},zn=class extends nc{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,a,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=a||null,this.directives=o||null}},Yt=class extends nc{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},vg=class extends nc{element;constructor(i){super(),this.element=i instanceof z?i.nativeElement:i}},Hr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof zn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Yt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof vg)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ic=class extends Hr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(ld,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||ee.NULL,a=r.get(Bt,t.injector);e=dd(i.component,{elementInjector:r,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},k0=(()=>{class n extends Yt{constructor(){let e=s(pt),t=s(dt);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[de]})}return n})(),Gn=(()=>{class n extends Hr{_moduleRef=s(ld,{optional:!0});_document=s(re);_viewContainerRef=s(dt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new L;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[de]})}return n})(),Yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})();var yg=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new at(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(we(e=>e.some(t=>t.target===i)),Fp({bufferSize:1,refCount:!0}),F(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Tu=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(J);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new yg(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var rc=class{};function ac(n){return n&&typeof n.connect=="function"&&!(n instanceof W_)}var Ki=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Ki||{}),Nu=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,a){i.forEachOperation((o,l,c)=>{let p,g;if(o.previousIndex==null){let b=()=>t(o,l,c);p=this._insertView(b,c,e,r(o)),g=p?Ki.INSERTED:Ki.REPLACED}else c==null?(this._detachAndCacheView(l,e),g=Ki.REMOVED):(p=this._moveView(l,c,e,r(o)),g=Ki.MOVED);a&&a({context:p?.context,operation:g,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=r;return}let o=i();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let a=t.get(i);return t.move(a,e),a.context.$implicit=r,a}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var GA=20,Wr=(()=>{class n{_ngZone=s(J);_platform=s(Ee);_renderer=s(qt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=GA){return this._platform.isBrowser?new at(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Qs(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):x()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(we(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let r=Cn(t),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),oc=(()=>{class n{elementRef=s(z);scrollDispatcher=s(Wr);ngZone=s(J);dir=s(lt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=s(ze);_cleanupScroll;_elementScrolled=new E;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&Mo()!=qi.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Mo()==qi.INVERTED?e.left=e.right:Mo()==qi.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;vu()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?r:t:e=="end"&&(e=o?t:r),o&&Mo()==qi.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:o&&Mo()==qi.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),UA=20,Dn=(()=>{class n{_platform=s(Ee);_listeners;_viewportSize=null;_change=new E;_document=s(re);constructor(){let e=s(J),t=s(qt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),o=-a.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,l=-a.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:o,left:l}}change(e=UA){return e>0?this._change.pipe(Qs(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var T0=new v("CDK_VIRTUAL_SCROLL_VIEWPORT");var gi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})(),sc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve,gi,ve,gi]})}return n})();var xg=["*"];function HA(n,i){n&1&&ne(0)}var WA=["tabListContainer"],qA=["tabList"],YA=["tabListInner"],KA=["nextPaginator"],XA=["previousPaginator"],ZA=["content"];function QA(n,i){}var JA=["tabBodyWrapper"],eR=["tabHeader"];function tR(n,i){}function nR(n,i){if(n&1&&X(0,tR,0,0,"ng-template",12),n&2){let e=O().$implicit;w("cdkPortalOutlet",e.templateLabel)}}function iR(n,i){if(n&1&&m(0),n&2){let e=O().$implicit;fe(e.textLabel)}}function rR(n,i){if(n&1){let e=Ge();d(0,"div",7,2),M("click",function(){let r=he(e),a=r.$implicit,o=r.$index,l=O(),c=vt(1);return pe(l._handleClick(a,c,o))})("cdkFocusChange",function(r){let a=he(e).$index,o=O();return pe(o._tabFocusChanged(r,a))}),I(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),k(6,nR,1,1,null,12)(7,iR,1,1),u()()()}if(n&2){let e=i.$implicit,t=i.$index,r=vt(1),a=O();ut(e.labelClass),j("mdc-tab--active",a.selectedIndex===t),w("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),te("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),h(3),w("matRippleTrigger",r)("matRippleDisabled",e.disabled||a.disableRipple),h(3),T(e.templateLabel?6:7)}}function aR(n,i){n&1&&ne(0)}function oR(n,i){if(n&1){let e=Ge();d(0,"mat-tab-body",13),M("_onCentered",function(){he(e);let r=O();return pe(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){he(e);let a=O();return pe(a._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){he(e);let a=O();return pe(a._bodyCentered(r))}),u()}if(n&2){let e=i.$implicit,t=i.$index,r=O();ut(e.bodyClass),w("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r._bodyAnimationDuration)("preserveContent",r.preserveContent),te("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var sR=new v("MatTabContent"),lR=(()=>{class n{template=s(pt);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matTabContent",""]],features:[De([{provide:sR,useExisting:n}])]})}return n})(),cR=new v("MatTabLabel"),F0=new v("MAT_TAB"),dR=(()=>{class n extends k0{_closestTab=s(F0,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[De([{provide:cR,useExisting:n}]),de]})}return n})(),P0=new v("MAT_TAB_GROUP"),Eg=(()=>{class n{_viewContainerRef=s(dt);_closestTabGroup=s(P0,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new E;position=null;origin=null;isActive=!1;constructor(){s(st).load(Bn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Yt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,a){if(t&1&&It(a,dR,5)(a,lR,7,pt),t&2){let o;G(o=U())&&(r.templateLabel=o.first),G(o=U())&&(r._explicitContent=o.first)}},viewQuery:function(t,r){if(t&1&&Ue(pt,7),t&2){let a;G(a=U())&&(r._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&te("id",null)},inputs:{disabled:[2,"disabled","disabled",B],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[De([{provide:F0,useExisting:n}]),Oe],ngContentSelectors:xg,decls:1,vars:0,template:function(t,r){t&1&&(Ie(),fa(0,HA,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return n})(),Sg="mdc-tab-indicator--active",N0="mdc-tab-indicator--no-transition",Dg=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},uR=(()=>{class n{_elementRef=s(z);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Sg);return}let r=t.getBoundingClientRect(),a=e.width/r.width,o=e.left-r.left;t.classList.add(N0),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(N0),t.classList.add(Sg),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Sg)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",B]}})}return n})();var L0=(()=>{class n extends uR{elementRef=s(z);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(te("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",B]},features:[de]})}return n})(),I0={passive:!0},mR=650,hR=100;function Cg(n){let i=n+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:""}var pR=(()=>{class n{_elementRef=s(z);_changeDetectorRef=s(Me);_viewportRuler=s(Dn);_dir=s(lt,{optional:!0});_ngZone=s(J);_platform=s(Ee);_sharedResizeObserver=s(Tu);_injector=s(ee);_renderer=s(ze);_animationsDisabled=Be();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new E;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new E;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new L;indexFocused=new L;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),I0),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),I0))}ngAfterContentInit(){let e=this._dir?this._dir.change:x("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(tr(32),F(this._destroyed)),r=this._viewportRuler.change(150).pipe(F(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ra(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Xe(a,{injector:this._injector}),je(e,r,t,this._items.changes,this._itemsResized()).pipe(F(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?At:this._items.changes.pipe(rt(this._items),Le(e=>new at(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(a=>t.next(a));return e.forEach(a=>r.observe(a.elementRef.nativeElement)),()=>{r.disconnect()}}))),Lr(1),we(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!it(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()=="ltr"?(l=a,c=l+o):(c=this._tabListInner.nativeElement.offsetWidth-a,l=c-o);let p=this.scrollDistance,g=this.scrollDistance+r;l<p?this.scrollDistance-=p-l:c>g&&(this.scrollDistance+=Math.min(c-g,l-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),K_(mR,hR).pipe(F(je(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:a}=this._scrollHeader(e);(a===0||a>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",B],selectedIndex:[2,"selectedIndex","selectedIndex",Jt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),fR=(()=>{class n extends pR{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Dg(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,a){if(t&1&&It(a,L0,4),t&2){let o;G(o=U())&&(r._items=o)}},viewQuery:function(t,r){if(t&1&&Ue(WA,7)(qA,7)(YA,7)(KA,5)(XA,5),t&2){let a;G(a=U())&&(r._tabListContainer=a.first),G(a=U())&&(r._tabList=a.first),G(a=U())&&(r._tabListInner=a.first),G(a=U())&&(r._nextPaginator=a.first),G(a=U())&&(r._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",B]},features:[de],ngContentSelectors:xg,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(Ie(),d(0,"div",5,0),M("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(o){return r._handlePaginatorPress("before",o)})("touchend",function(){return r._stopInterval()}),I(2,"div",6),u(),d(3,"div",7,1),M("keydown",function(o){return r._handleKeydown(o)}),d(5,"div",8,2),M("cdkObserveContent",function(){return r._onContentChanges()}),d(7,"div",9,3),ne(9),u()()(),d(10,"div",10,4),M("mousedown",function(o){return r._handlePaginatorPress("after",o)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),I(12,"div",6),u()),t&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),w("matRippleDisabled",r._disableScrollBefore||r.disableRipple),h(3),j("_mat-animation-noopable",r._animationsDisabled),h(2),te("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),h(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),w("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Ar,Oy],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})}return n})(),gR=new v("MAT_TABS_CONFIG"),O0=(()=>{class n extends Gn{_host=s(wg);_ngZone=s(J);_centeringSub=Te.EMPTY;_leavingSub=Te.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(rt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matTabBodyHost",""]],features:[de]})}return n})(),wg=(()=>{class n{_elementRef=s(z);_dir=s(lt,{optional:!0});_ngZone=s(J);_injector=s(ee);_renderer=s(ze);_diAnimationsDisabled=Be();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Te.EMPTY;_position;_previousPosition;_onCentering=new L;_beforeCentering=new L;_afterLeavingCenter=new L;_onCentered=new L(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(Me);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Xe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Xe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&Ue(O0,5)(ZA,5),t&2){let a;G(a=U())&&(r._portalHost=a.first),G(a=U())&&(r._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&te("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(d(0,"div",1,0),X(2,QA,0,0,"ng-template",2),u()),t&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[O0,oc],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})}return n})(),B0=(()=>{class n{_elementRef=s(z);_changeDetectorRef=s(Me);_ngZone=s(J);_tabsSubscription=Te.EMPTY;_tabLabelSubscription=Te.EMPTY;_tabBodySubscription=Te.EMPTY;_diAnimationsDisabled=Be();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ua;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=Cg(e.body),this._headerAnimationDuration=Cg(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Cg(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new L;focusChange=new L;animationDone=new L;selectedTabChange=new L(!0);_groupId;_isServer=!s(Ee).isBrowser;constructor(){let e=s(gR,{optional:!0});this._groupId=s($e).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,a)=>r.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,r=t[a];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(rt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Mg;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=je(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,a){if(t&1&&It(a,Eg,5),t&2){let o;G(o=U())&&(r._allTabs=o)}},viewQuery:function(t,r){if(t&1&&Ue(JA,5)(eR,5)(wg,5),t&2){let a;G(a=U())&&(r._tabBodyWrapper=a.first),G(a=U())&&(r._tabHeader=a.first),G(a=U())&&(r._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(t,r){t&2&&(te("mat-align-tabs",r.alignTabs),ut("mat-"+(r.color||"primary")),mi("--%NS%mat-tab-body-animation-duration",r._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",r._headerAnimationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",B],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",B],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",B],selectedIndex:[2,"selectedIndex","selectedIndex",Jt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Jt],disablePagination:[2,"disablePagination","disablePagination",B],disableRipple:[2,"disableRipple","disableRipple",B],preserveContent:[2,"preserveContent","preserveContent",B],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[De([{provide:P0,useExisting:n}])],ngContentSelectors:xg,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(Ie(),d(0,"mat-tab-header",3,0),M("indexFocused",function(o){return r._focusChanged(o)})("selectFocusedIndex",function(o){return r.selectedIndex=o}),_t(2,rR,8,17,"div",4,Gp),u(),k(4,aR,1,0),d(5,"div",5,1),_t(7,oR,1,10,"mat-tab-body",6,Gp),u()),t&2&&(w("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Cb("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),h(2),bt(r._tabs),h(2),T(r._isServer?4:-1),h(),j("_mat-animation-noopable",r._bodyAnimationsDisabled()),h(2),bt(r._tabs))},dependencies:[fR,L0,Gl,Ar,Gn,wg],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})}return n})(),Mg=class{index;tab};var V0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var bR=["*",[["mat-toolbar-row"]]],vR=["*","mat-toolbar-row"],yR=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),j0=(()=>{class n{_elementRef=s(z);_platform=s(Ee);_document=s(re);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,a){if(t&1&&It(a,yR,5),t&2){let o;G(o=U())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(ut(r.color?"mat-"+r.color:""),j("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:vR,decls:2,vars:0,template:function(t,r){t&1&&(Ie(bR),ne(0),ne(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return n})();var z0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var CR=["*",[["","progressIndicator",""]]],DR=["*","[progressIndicator]"];function wR(n,i){n&1&&(Ze(0,"div",1),ne(1,1),Je())}var MR=new v("MAT_BUTTON_CONFIG");function G0(n){return n==null?void 0:Jt(n)}var Ag=(()=>{class n{_elementRef=s(z);_ngZone=s(J);_animationsDisabled=Be();_config=s(MR,{optional:!0});_focusMonitor=s(nn);_cleanupClick;_renderer=s(ze);_rippleLoader=s(r0);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ro(!1,{transform:B});constructor(){s(st).load(Bn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(te("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ut(r.color?"mat-"+r.color:""),j("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B],ariaDisabled:[2,"aria-disabled","ariaDisabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B],tabIndex:[2,"tabIndex","tabIndex",G0],_tabindex:[2,"tabindex","_tabindex",G0],showProgress:[1,"showProgress"]}})}return n})(),$t=(()=>{class n extends Ag{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[de],ngContentSelectors:DR,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ie(CR),Fn(0,"span",0),ne(1),k(2,wR,2,0,"div",1),Fn(3,"span",2)(4,"span",3)),t&2&&(h(2),T(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var xR=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],ER=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function AR(n,i){n&1&&(Ze(0,"div",2),ne(1,3),Je())}var U0=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Qe=(()=>{class n extends Ag{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=RR(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?U0.get(this._appearance):null,a=U0.get(e);r&&t.remove(...r),t.add(...a),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[de],ngContentSelectors:ER,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ie(xR),Fn(0,"span",0),ne(1),Ze(2,"span",1),ne(3,1),Je(),ne(4,2),k(5,AR,2,0,"div",2),Fn(6,"span",3)(7,"span",4)),t&2&&(j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),h(5),T(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function RR(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ye=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Eo,ve]})}return n})();function $0(n){return Error(`Unable to find icon with the name "${n}"`)}function kR(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function H0(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function W0(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Rr=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Y0=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,a){return this._addSvgIconConfig(e,t,new Rr(r,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,a){let o=this._sanitizer.sanitize(yn.HTML,r);if(!o)throw W0(r);let l=Ea(o);return this._addSvgIconConfig(e,t,new Rr("",l,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Rr(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let a=this._sanitizer.sanitize(yn.HTML,t);if(!a)throw W0(t);let o=Ea(a);return this._addSvgIconSetConfig(e,new Rr("",o,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(yn.RESOURCE_URL,e);if(!t)throw H0(e);let r=this._cachedIconsByUrl.get(t);return r?x(Iu(r)):this._loadSvgIconFromConfig(new Rr(e,null)).pipe(ot(a=>this._cachedIconsByUrl.set(t,a)),A(a=>Iu(a)))}getNamedSvgIcon(e,t=""){let r=q0(t,e),a=this._svgIconConfigs.get(r);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(r,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Zc($0(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?x(Iu(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(t=>Iu(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return x(r);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(ie(l=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(yn.RESOURCE_URL,o.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(p)),x(null)})));return ed(a).pipe(A(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw $0(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let a=t[r];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(o,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ot(t=>e.svgText=t),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?x(null):this._fetchIcon(e).pipe(ot(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let l=this._svgElementFromString(Ea("<svg></svg>"));return l.appendChild(o),this._setSvgAttributes(l,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Ea("<svg></svg>")),r=e.attributes;for(let a=0;a<r.length;a++){let{name:o,value:l}=r[a];o!=="id"&&t.setAttribute(o,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,a=r?.withCredentials??!1;if(!this._httpClient)throw kR();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(yn.RESOURCE_URL,t);if(!o)throw H0(t);let l=this._inProgressUrlFetches.get(o);if(l)return l;let c=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(A(p=>Ea(p)),Ya(()=>this._inProgressUrlFetches.delete(o)),id());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(q0(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let a=this._resolvers[r](t,e);if(a)return TR(a)?new Rr(a.url,null,a.options):new Rr(a,null)}}static \u0275fac=function(t){return new(t||n)(q(jt,8),q(vl),q(re,8),q(Ui))};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Iu(n){return n.cloneNode(!0)}function q0(n,i){return n+":"+i}function TR(n){return!!(n.url&&n.options)}var NR=["*"],IR=new v("MAT_ICON_DEFAULT_OPTIONS"),OR=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(re),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),K0=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],FR=K0.map(n=>`[${n}]`).join(", "),PR=/^url\(['"]?#(.*?)['"]?\)$/,Ht=(()=>{class n{_elementRef=s(z);_iconRegistry=s(Y0);_location=s(OR);_errorHandler=s(Ui);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Te.EMPTY;constructor(){let e=s(new Ai("aria-hidden"),{optional:!0}),t=s(IR,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,a)=>{r.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(FR),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)K0.forEach(o=>{let l=t[a],c=l.getAttribute(o),p=c?c.match(PR):null;if(p){let g=r.get(l);g||(g=[],r.set(l,g)),g.push({name:o,value:p[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Pe(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${r}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(te("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),ut(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",B],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:NR,decls:1,vars:0,template:function(t,r){t&1&&(Ie(),ne(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})(),Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var X0=vu();function qr(n){return new Ou(n.get(Dn),n.get(re))}var Ou=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Mt(-this._previousScrollPosition.left),i.style.top=Mt(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,a=t.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),X0&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),X0&&(t.scrollBehavior=a,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function iS(n,i){return new Fu(n.get(Wr),n.get(J),n.get(Dn),i)}var Fu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(we(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var lc=class{enable(){}disable(){}attach(){}};function Rg(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,a=n.right<e.left,o=n.left>e.right;return t||r||a||o})}function Z0(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,a=n.left<e.left,o=n.right>e.right;return t||r||a||o})}function _i(n,i){return new Pu(n.get(Wr),n.get(Dn),n.get(J),i)}var Pu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Rg(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},rS=(()=>{class n{_injector=s(ee);noop=()=>new lc;close=e=>iS(this._injector,e);block=()=>qr(this._injector);reposition=e=>_i(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Mn=class{positionStrategy;scrollStrategy=new lc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Lu=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var aS=(()=>{class n{_attachedOverlays=[];_document=s(re);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),oS=(()=>{class n extends aS{_ngZone=s(J);_renderer=s(qt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let a=t[r];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),sS=(()=>{class n extends aS{_platform=s(Ee);_ngZone=s(J);_renderer=s(qt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,r),a.listen(t,"click",this._clickListener,r),a.listen(t,"auxclick",this._clickListener,r),a.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ft(e)};_clickListener=e=>{let t=Ft(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let o=a.length-1;o>-1;o--){let l=a[o],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(Q0(l.overlayElement,t)||Q0(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Q0(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var lS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})(),Vu=(()=>{class n{_platform=s(Ee);_containerElement;_document=s(re);_styleLoader=s(st);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||tg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<r.length;a++)r[a].remove()}let t=this._document.createElement("div");t.classList.add(e),tg()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(lS)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),kg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tg(n){return n&&n.nodeType===1}var No=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=Te.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(i,e,t,r,a,o,l,c,p,g=!1,b,D){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=a,this._keyboardDispatcher=o,this._document=l,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=g,this._injector=b,this._renderer=D,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=_(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Mt(this._config.width),i.height=Mt(this._config.height),i.minWidth=Mt(this._config.minWidth),i.minHeight=Mt(this._config.minHeight),i.maxWidth=Mt(this._config.maxWidth),i.maxHeight=Mt(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tg(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new kg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=xr(e||[]).filter(a=>!!a);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Xe(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},J0="cdk-overlay-connected-position-bounding-box",LR=/([A-Za-z%]+)$/;function Xi(n,i){return new Io(i,n.get(Dn),n.get(re),n.get(Ee),n.get(Vu))}var Io=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=Te.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,a){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=a,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(J0),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,a=[],o;for(let l of this._preferredPositions){let c=this._getOriginPoint(i,r,l),p=this._getOverlayPoint(c,e,l),g=this._getOverlayFit(p,e,t,l);if(g.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(g,p,t)){a.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!o||o.overlayFit.visibleArea<g.visibleArea)&&(o={overlayFit:g,overlayPoint:p,originPoint:c,position:l,overlayRect:e})}if(a.length){let l=null,c=-1;for(let p of a){let g=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);g>c&&(c=g,l=p)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ia(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(J0),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof z?this._origin.nativeElement:Tg(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=t.originX=="start"?o:l}e.left<0&&(r-=e.left);let a;return t.originY=="center"?a=i.top+i.height/2:a=t.originY=="top"?i.top:i.bottom,e.top<0&&(a-=e.top),{x:r,y:a}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+a}}_getOverlayFit(i,e,t,r){let a=tS(e),{x:o,y:l}=i,c=this._getOffset(r,"x"),p=this._getOffset(r,"y");c&&(o+=c),p&&(l+=p);let g=0-o,b=o+a.width-t.width,D=0-l,V=l+a.height-t.height,W=this._subtractOverflows(a.width,g,b),Z=this._subtractOverflows(a.height,D,V),me=W*Z;return{visibleArea:me,isCompletelyWithinViewport:a.width*a.height===me,fitsInViewportVertically:Z===a.height,fitsInViewportHorizontally:W==a.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,a=t.right-e.x,o=eS(this._overlayRef.getConfig().minHeight),l=eS(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||o!=null&&o<=r,p=i.fitsInViewportHorizontally||l!=null&&l<=a;return c&&p}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=tS(e),a=this._viewportRect,o=Math.max(i.x+r.width-a.width,0),l=Math.max(i.y+r.height-a.height,0),c=Math.max(a.top-t.top-i.y,0),p=Math.max(a.left-t.left-i.x,0),g=0,b=0;return r.width<=a.width?g=p||-o:g=i.x<this._getViewportMarginStart()?a.left-t.left-i.x:0,r.height<=a.height?b=c||-l:b=i.y<this._getViewportMarginTop()?a.top-t.top-i.y:0,this._previousPushAmount={x:g,y:b},{x:i.x+g,y:i.y+b}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!BR(this._lastScrollVisibility,t)){let r=new Lu(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),a,o,l;if(e.overlayY==="top")o=i.y,a=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let V=Math.min(t.bottom-i.y+t.top,i.y),W=this._lastBoundingBoxSize.height;a=V*2,o=i.y-V,a>W&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-W/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,p=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,g,b,D;if(p)D=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),g=i.x-this._getViewportMarginStart();else if(c)b=i.x,g=t.right-i.x-this._getViewportMarginEnd();else{let V=Math.min(t.right-i.x+t.left,i.x),W=this._lastBoundingBoxSize.width;g=V*2,b=i.x-V,g>W&&!this._isInitialRender&&!this._growAfterOpen&&(b=i.x-W/2)}return{top:o,left:b,bottom:l,right:D,width:g,height:a}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=Mt(t.width),r.height=Mt(t.height),r.top=Mt(t.top)||"auto",r.bottom=Mt(t.bottom)||"auto",r.left=Mt(t.left)||"auto",r.right=Mt(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(r.maxHeight=Mt(a)),o&&(r.maxWidth=Mt(o))}this._lastBoundingBoxSize=t,Ia(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ia(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ia(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),a=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let g=this._viewportRuler.getViewportScrollPosition();Ia(t,this._getExactOverlayY(e,i,g)),Ia(t,this._getExactOverlayX(e,i,g))}else t.position="static";let l="",c=this._getOffset(e,"x"),p=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),p&&(l+=`translateY(${p}px)`),t.transform=l.trim(),o.maxHeight&&(r?t.maxHeight=Mt(o.maxHeight):a&&(t.maxHeight="")),o.maxWidth&&(r?t.maxWidth=Mt(o.maxWidth):a&&(t.maxWidth="")),Ia(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(a.y+this._overlayRect.height)}px`}else r.top=Mt(a.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;r.right=`${l-(a.x+this._overlayRect.width)}px`}else r.left=Mt(a.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Z0(i,t),isOriginOutsideView:Rg(i,t),isOverlayClipped:Z0(e,t),isOverlayOutsideView:Rg(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&xr(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof z)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Ia(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function eS(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(LR);return!e||e==="px"?parseFloat(i):null}return n||null}function tS(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function BR(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var nS="cdk-global-overlay-wrapper";function hr(n){return new Bu}var Bu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(nS),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:a,maxWidth:o,maxHeight:l}=t,c=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),p=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),g=this._xPosition,b=this._xOffset,D=this._overlayRef.getConfig().direction==="rtl",V="",W="",Z="";c?Z="flex-start":g==="center"?(Z="center",D?W=b:V=b):D?g==="left"||g==="end"?(Z="flex-end",V=b):(g==="right"||g==="start")&&(Z="flex-start",W=b):g==="left"||g==="start"?(Z="flex-start",V=b):(g==="right"||g==="end")&&(Z="flex-end",W=b),i.position=this._cssPosition,i.marginLeft=c?"0":V,i.marginTop=p?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":W,e.justifyContent=Z,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(nS),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},cS=(()=>{class n{_injector=s(ee);global(){return hr()}flexibleConnectedTo(e){return Xi(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),cc=new v("OVERLAY_DEFAULT_CONFIG");function En(n,i){n.get(st).load(lS);let e=n.get(Vu),t=n.get(re),r=n.get($e),a=n.get(ir),o=n.get(lt),l=n.get(ze,null,{optional:!0})||n.get(qt).createRenderer(null,null),c=new Mn(i),p=n.get(cc,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||o.value,!t.body||!("showPopover"in t.body)?c.usePopover=!1:c.usePopover=i?.usePopover??p;let g=t.createElement("div"),b=t.createElement("div");g.id=r.getId("cdk-overlay-"),g.classList.add("cdk-overlay-pane"),b.appendChild(g),c.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let D=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Tg(D)?D.after(b):D?.type==="parent"?D.element.appendChild(b):e.getContainerElement().appendChild(b),new No(new ic(g,a,n),b,g,c,n.get(J),n.get(oS),t,n.get(jr),n.get(sS),i?.disableAnimations??n.get(Xa,null,{optional:!0})==="NoopAnimations",n.get(Bt),l)}var dS=(()=>{class n{scrollStrategies=s(rS);_positionBuilder=s(cS);_injector=s(ee);create(e){return En(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),VR=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],jR=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n)}}),Oo=(()=>{class n{elementRef=s(z);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),uS=new v("cdk-connected-overlay-default-config"),ju=(()=>{class n{_dir=s(lt,{optional:!0});_injector=s(ee);_overlayRef;_templatePortal;_backdropSubscription=Te.EMPTY;_attachSubscription=Te.EMPTY;_detachSubscription=Te.EMPTY;_positionSubscription=Te.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(jR);_ngZone=s(J);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new L;positionChange=new L;attach=new L;detach=new L;overlayKeydown=new L;overlayOutsideClick=new L;constructor(){let e=s(pt),t=s(dt),r=s(uS,{optional:!0}),a=s(cc,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Yt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=VR);let e=this._overlayRef=En(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!it(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),a=Ft(t);(!r||r!==a&&!r.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Mn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Xi(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Oo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Oo?this.origin.elementRef.nativeElement:this.origin instanceof z?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(nb(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",B],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",B],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",B],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",B],push:[2,"cdkConnectedOverlayPush","push",B],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",B],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",B],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Oe]})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[dS],imports:[ve,Yi,sc,sc]})}return n})();var zR=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],GR=["mat-icon, [matMenuItemIcon]","*"];function UR(n,i){n&1&&(Qt(),d(0,"svg",2),I(1,"polygon",3),u())}var $R=["*"];function HR(n,i){if(n&1){let e=Ge();Ze(0,"div",0),Ja("click",function(){he(e);let r=O();return pe(r.closed.emit("click"))})("animationstart",function(r){he(e);let a=O();return pe(a._onAnimationStart(r.animationName))})("animationend",function(r){he(e);let a=O();return pe(a._onAnimationDone(r.animationName))})("animationcancel",function(r){he(e);let a=O();return pe(a._onAnimationDone(r.animationName))}),Ze(1,"div",1),ne(2),Je()()}if(n&2){let e=O();ut(e._classList),j("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),St("id",e.panelId),te("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ig=new v("MAT_MENU_PANEL"),Tr=(()=>{class n{_elementRef=s(z);_document=s(re);_focusMonitor=s(nn);_parentMenu=s(Ig,{optional:!0});_changeDetectorRef=s(Me);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new E;_focused=new E;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(st).load(Bn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&M("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(te("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),j("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B]},exportAs:["matMenuItem"],ngContentSelectors:GR,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(Ie(zR),ne(0),d(1,"span",0),ne(2,1),u(),I(3,"div",1),k(4,UR,2,0,":svg:svg",2)),t&2&&(h(3),w("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),h(),T(r._triggersSubmenu?4:-1))},dependencies:[Ar],encapsulation:2})}return n})();var WR=new v("MatMenuContent");var qR=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ng="_mat-menu-enter",zu="_mat-menu-exit",pr=(()=>{class n{_elementRef=s(z);_changeDetectorRef=s(Me);_injector=s(ee);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Be();_allItems;_directDescendantItems=new ua;_classList={};_panelAnimationState="void";_animationDone=new E;_isAnimating=ce(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=f({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{r[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{r[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new L;close=this.closed;panelId=s($e).getId("mat-menu-panel-");constructor(){let e=s(qR);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ra(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(rt(this._directDescendantItems),Le(e=>je(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),a=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[a]&&!r[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(rt(this._directDescendantItems),Le(t=>je(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:it(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Xe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=_(f({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===zu;(t||e===Ng)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Ng||e===zu)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(zu),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Ng:zu)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(rt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,a){if(t&1&&It(a,WR,5)(a,Tr,5)(a,Tr,4),t&2){let o;G(o=U())&&(r.lazyContent=o.first),G(o=U())&&(r._allItems=o),G(o=U())&&(r.items=o)}},viewQuery:function(t,r){if(t&1&&Ue(pt,5),t&2){let a;G(a=U())&&(r.templateRef=a.first)}},hostVars:3,hostBindings:function(t,r){t&2&&te("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",B],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:B(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[De([{provide:Ig,useExisting:n}])],ngContentSelectors:$R,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(Ie(),fa(0,HR,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),YR=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n)}});var Fo=new WeakMap,KR=(()=>{class n{_canHaveBackdrop;_element=s(z);_viewContainerRef=s(dt);_menuItemInstance=s(Tr,{optional:!0,self:!0});_dir=s(lt,{optional:!0});_focusMonitor=s(nn);_ngZone=s(J);_injector=s(ee);_scrollStrategy=s(YR);_changeDetectorRef=s(Me);_animationsDisabled=Be();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Te.EMPTY;_menuCloseSubscription=Te.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(Ig,{optional:!0});this._parentMaterialMenu=t instanceof pr?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Fo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=Fo.get(t);Fo.set(t,this),r&&r!==this&&r._closeMenu();let a=this._createOverlay(t),o=a.getConfig(),l=o.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof pr&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(F(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof pr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Pe(1)).subscribe(()=>{t.detach(),Fo.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Fo.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=En(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof pr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Mn({positionStrategy:Xi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let a=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,o)})})}_setPosition(e,t){let[r,a]=e.xPosition==="before"?["end","start"]:["start","end"],[o,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,p]=[o,l],[g,b]=[r,a],D=0;if(this._triggersSubmenu()){if(b=r=e.xPosition==="before"?"start":"end",a=g=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let V=this._parentMaterialMenu.items.first;this._parentInnerPadding=V?V._getHostElement().offsetTop:0}D=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=o==="top"?"bottom":"top",p=l==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:g,overlayY:o,offsetY:D},{originX:a,originY:c,overlayX:b,overlayY:o,offsetY:D},{originX:r,originY:p,overlayX:g,overlayY:l,offsetY:-D},{originX:a,originY:p,overlayX:b,overlayY:l,offsetY:-D}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:x(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(we(o=>this._menuOpen&&o!==this._menuItemInstance)):x();return je(e,r,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Yt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Fo.get(e)===this}_triggerIsAriaDisabled(){return B(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ha()};static \u0275dir=R({type:n})}return n})(),Po=(()=>{class n extends KR{_cleanupTouchstart;_hoverSubscription=Te.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new L;onMenuOpen=this.menuOpened;menuClosed=new L;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(ze);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{xa(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ma(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&M("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),t&2&&te("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[de]})}return n})();var Lo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Eo,Kt,ve,gi]})}return n})();var XR=["tooltip"],ZR=20;var QR=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n,{scrollThrottle:ZR})}}),JR=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var mS="tooltip-panel",ek={passive:!0},tk=8,nk=8,ik=24,rk=200,Xt=(()=>{class n{_elementRef=s(z);_ngZone=s(J);_platform=s(Ee);_ariaDescriber=s(Wl);_focusMonitor=s(nn);_dir=s(lt);_injector=s(ee);_viewContainerRef=s(dt);_mediaMatcher=s(Co);_document=s(re);_renderer=s(ze);_animationsDisabled=Be();_defaultOptions=s(JR,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=hS;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Pi(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Pi(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Wi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Wi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new E;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=tk}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(F(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new zn(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=r.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(F(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof z)return this._overlayRef;this._detach()}let t=this._injector.get(Wr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${mS}`,a=Xi(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(F(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=En(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(QR)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(F(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(F(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(F(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(F(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(f(f({},r.main),a.main)),this._addOffset(f(f({},r.fallback),a.fallback))])}_addOffset(e){let t=nk,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Xe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${mS}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,ek))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Xe({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!it(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),hS=(()=>{class n{_changeDetectorRef=s(Me);_elementRef=s(z);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Be();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new E;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ik&&e.width>=rk}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:r),t.classList.add(e?r:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Ue(XR,7),t&2){let a;G(a=U())&&(r._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&M("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(Ze(0,"div",1,0),Ja("animationend",function(o){return r._handleAnimationEnd(o)}),Ze(2,"div",2),m(3),Je()()),t&2&&(ut(r.tooltipClass),j("mdc-tooltip--multiline",r._isMultiline),h(3),fe(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return n})();var an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Er,Kt,ve,gi]})}return n})();var Gu=class{applyChanges(i,e,t,r,a){i.forEachOperation((o,l,c)=>{let p,g;if(o.previousIndex==null){let b=t(o,l,c);p=e.createEmbeddedView(b.templateRef,b.context,b.index),g=Ki.INSERTED}else c==null?(e.remove(l),g=Ki.REMOVED):(p=e.get(l),e.move(p,c),g=Ki.MOVED);a&&a({context:p?.context,operation:g,record:o})})}detach(){}};var ak=[[["caption"]],[["colgroup"],["col"]],"*"],ok=["caption","colgroup, col","*"];function sk(n,i){n&1&&ne(0,2)}function lk(n,i){n&1&&(d(0,"thead",0),Vt(1,1),u(),d(2,"tbody",0),Vt(3,2)(4,3),u(),d(5,"tfoot",0),Vt(6,4),u())}function ck(n,i){n&1&&Vt(0,1)(1,2)(2,3)(3,4)}var Zi=new v("CDK_TABLE");var Hu=(()=>{class n{template=s(pt);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Wu=(()=>{class n{template=s(pt);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),_S=(()=>{class n{template=s(pt);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Yr=(()=>{class n{_table=s(Zi,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,r,a){if(t&1&&It(a,Hu,5)(a,Wu,5)(a,_S,5),t&2){let o;G(o=U())&&(r.cell=o.first),G(o=U())&&(r.headerCell=o.first),G(o=U())&&(r.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",B],stickyEnd:[2,"stickyEnd","stickyEnd",B]}})}return n})(),$u=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},bS=(()=>{class n extends $u{constructor(){super(s(Yr),s(z))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[de]})}return n})();var vS=(()=>{class n extends $u{constructor(){let e=s(Yr),t=s(z);super(e,t);let r=e._table?._getCellRole();r&&t.nativeElement.setAttribute("role",r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[de]})}return n})();var Pg=(()=>{class n{template=s(pt);_differs=s(il);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof uc?e.headerCell.template:this instanceof Lg?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,features:[Oe]})}return n})(),uc=(()=>{class n extends Pg{_table=s(Zi,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",B]},features:[de,Oe]})}return n})(),Lg=(()=>{class n extends Pg{_table=s(Zi,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",B]},features:[de,Oe]})}return n})(),qu=(()=>{class n extends Pg{_table=s(Zi,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[de]})}return n})(),Fa=(()=>{class n{_viewContainer=s(dt);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Bg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Vt(0,0)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return n})();var Vg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Vt(0,0)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return n})(),yS=(()=>{class n{templateRef=s(pt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),pS=["top","bottom","left","right"],Fg=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,r=!0,a,o,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=r,this.direction=a,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&t.push(r,...Array.from(r.children));Xe({write:()=>{for(let r of t)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,r=!0,a=!0){if(!i.length||!this._isBrowser||!(e.some(me=>me)||t.some(me=>me))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],l=o.children.length,c=this.direction==="rtl",p=c?"right":"left",g=c?"left":"right",b=e.lastIndexOf(!0),D=t.indexOf(!0),V,W,Z;a&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),Xe({earlyRead:()=>{V=this._getCellWidths(o,r),W=this._getStickyStartColumnPositions(V,e),Z=this._getStickyEndColumnPositions(V,t)},write:()=>{for(let me of i)for(let Ae=0;Ae<l;Ae++){let ge=me.children[Ae];e[Ae]&&this._addStickyStyle(ge,p,W[Ae],Ae===b),t[Ae]&&this._addStickyStyle(ge,g,Z[Ae],Ae===D)}this._positionListener&&V.some(me=>!!me)&&(this._positionListener.stickyColumnsUpdated({sizes:b===-1?[]:V.slice(0,b+1).map((me,Ae)=>e[Ae]?me:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:D===-1?[]:V.slice(D).map((me,Ae)=>t[Ae+D]?me:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let r=t==="bottom"?i.slice().reverse():i,a=t==="bottom"?e.slice().reverse():e,o=[],l=[],c=[];Xe({earlyRead:()=>{for(let p=0,g=0;p<r.length;p++){if(!a[p])continue;o[p]=g;let b=r[p];c[p]=this._isNativeHtmlTable?Array.from(b.children):[b];let D=this._retrieveElementSize(b).height;g+=D,l[p]=D}},write:()=>{let p=a.lastIndexOf(!0);for(let g=0;g<r.length;g++){if(!a[g])continue;let b=o[g],D=g===p;for(let V of c[g])this._addStickyStyle(V,t,b,D)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&Xe({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(r=>!r)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);pS.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let r of pS)i.style[r]&&(t+=e[r]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],r=i.children;for(let a=0;a<r.length;a++){let o=r[a];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],r=0;for(let a=0;a<i.length;a++)e[a]&&(t[a]=r,r+=i[a]);return t}_getStickyEndColumnPositions(i,e){let t=[],r=0;for(let a=i.length;a>0;a--)e[a]&&(t[a]=r,r+=i[a]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),r={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let r=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};r.width!==this._elemSizeCache.get(t.target)?.width&&dk(t.target)&&(e=!0),this._elemSizeCache.set(t.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function dk(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}function fS(n){return Error(`Could not find column with id "${n}".`)}var dc=new v("STICKY_POSITIONING_LISTENER");var jg=(()=>{class n{viewContainer=s(dt);elementRef=s(z);constructor(){let e=s(Zi);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","rowOutlet",""]]})}return n})(),zg=(()=>{class n{viewContainer=s(dt);elementRef=s(z);constructor(){let e=s(Zi);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Gg=(()=>{class n{viewContainer=s(dt);elementRef=s(z);constructor(){let e=s(Zi);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Ug=(()=>{class n{viewContainer=s(dt);elementRef=s(z);constructor(){let e=s(Zi);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),$g=(()=>{class n{_differs=s(il);_changeDetectorRef=s(Me);_elementRef=s(z);_dir=s(lt,{optional:!0});_platform=s(Ee);_viewRepeater;_viewportRuler=s(Dn);_injector=s(ee);_virtualScrollViewport=s(T0,{optional:!0,host:!0});_positionListener=s(dc,{optional:!0})||s(dc,{optional:!0,skipSelf:!0});_document=s(re);_data;_renderedRange;_onDestroy=new E;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new E;_footerRowStickyUpdates=new E;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new E;_dataStream=new E;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new L;viewChange=new ht({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new Ai("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(F(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Nu:new Gu,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ac(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(r,a,o)=>this._getEmbeddedViewArgs(r.item,o),r=>r.item.data,r=>{r.operation===Ki.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let a=t.get(r.currentIndex);a.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=gS(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=gS(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&o.push(t[l]);this._addStickyColumnStyles(o,a)}),r.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let o=this._data[a],l=this._getRenderRowsForData(o,a,r.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<l.length;c++){let p=l[c],g=this._cachedRenderRowsMap.get(p.data);g.has(p.rowDef)?g.get(p.rowDef).push(p):g.set(p.rowDef,[p]),e.push(p)}}return e}_getRenderRowsForData(e,t,r){return this._getRowDefs(e,t).map(o=>{let l=r&&r.has(o)?r.get(o):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Uu(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Uu(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Uu(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Uu(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let c=!!l.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||r||a}_switchDataSource(e){this._data=[],ac(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ac(this.dataSource)?e=this.dataSource.connect(this):qa(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=x(this.dataSource)),this._renderChangeSubscription=Zt([e,this.viewChange]).pipe(F(this._onDestroy)).subscribe(([t,r])=>{this._data=t||[],this._renderedRange=r,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let r=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);if(!c)throw fS(l);return c}),a=r.map(l=>l.sticky),o=r.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let r=0;r<e.viewContainer.length;r++){let a=e.viewContainer.get(r);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;a&&r.push(a)}return r.length,r}_getEmbeddedViewArgs(e,t){let r=e.rowDef,a={$implicit:e.data};return{templateRef:r.template,context:a,index:t}}_renderRow(e,t,r,a={}){let o=e.viewContainer.createEmbeddedView(t.template,a,r);return this._renderCellTemplateForItem(t,a),o}_renderCellTemplateForItem(e,t){for(let r of this._getCellTemplates(e))Fa.mostRecentCellOutlet&&Fa.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,r=e.length;t<r;t++){let o=e.get(t).context;o.count=r,o.first=t===0,o.last=t===r-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let r=this._columnDefsByName.get(t);if(!r)throw fS(t);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,r)=>t||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Fg(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:x()).pipe(F(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Tp:kp;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Qs(0,t),F(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,a)=>this._measureRangeSize(r,a)}),Zt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(F(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l){let c=a.offsets[o],p=r!==0?Math.max(r-c,c):-c;for(let g of l)g.style.top=`${-p}px`}}}),Zt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(F(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l)for(let c of l)c.style.bottom=`${r+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(t){let a=r.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let r=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let o=e.start-r.start,l=e.end-e.start,c,p;for(let D=0;D<l;D++){let V=a.get(D+o);if(V&&V.rootNodes.length){c=p=V.rootNodes[0];break}}for(let D=l-1;D>-1;D--){let V=a.get(D+o);if(V&&V.rootNodes.length){p=V.rootNodes[V.rootNodes.length-1];break}}let g=c?.getBoundingClientRect?.(),b=p?.getBoundingClientRect?.();return g&&b?b.bottom-g.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,r,a){if(t&1&&It(a,yS,5)(a,Yr,5)(a,qu,5)(a,uc,5)(a,Lg,5),t&2){let o;G(o=U())&&(r._noDataRow=o.first),G(o=U())&&(r._contentColumnDefs=o),G(o=U())&&(r._contentRowDefs=o),G(o=U())&&(r._contentHeaderRowDefs=o),G(o=U())&&(r._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,r){t&2&&j("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",B],fixedLayout:[2,"fixedLayout","fixedLayout",B],recycleRows:[2,"recycleRows","recycleRows",B]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[De([{provide:Zi,useExisting:n},{provide:dc,useValue:null}])],ngContentSelectors:ok,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Ie(ak),ne(0),ne(1,1),k(2,sk,1,0),k(3,lk,7,0)(4,ck,4,0)),t&2&&(h(2),T(r._isServer?2:-1),h(),T(r._isNativeHtmlTable?3:4))},dependencies:[zg,jg,Ug,Gg],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Uu(n,i){return n.concat(Array.from(i))}function gS(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let r=t.nodeType===1?t.nodeName:null;if(r===e)return t;if(r==="TABLE")break;t=t.parentNode}return null}var SS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[sc]})}return n})();var mc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var uk=[[["caption"]],[["colgroup"],["col"]],"*"],mk=["caption","colgroup, col","*"];function hk(n,i){n&1&&ne(0,2)}function pk(n,i){n&1&&(d(0,"thead",0),Vt(1,1),u(),d(2,"tbody",2),Vt(3,3)(4,4),u(),d(5,"tfoot",0),Vt(6,5),u())}function fk(n,i){n&1&&Vt(0,1)(1,3)(2,4)(3,5)}var Un=(()=>{class n extends $g{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[De([{provide:$g,useExisting:n},{provide:Zi,useExisting:n},{provide:dc,useValue:null}]),de],ngContentSelectors:mk,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Ie(uk),ne(0),ne(1,1),k(2,hk,1,0),k(3,pk,7,0)(4,fk,4,0)),t&2&&(h(2),T(r._isServer?2:-1),h(),T(r._isNativeHtmlTable?3:4))},dependencies:[zg,jg,Ug,Gg],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return n})(),$n=(()=>{class n extends Hu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matCellDef",""]],features:[De([{provide:Hu,useExisting:n}]),de]})}return n})(),Hn=(()=>{class n extends Wu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matHeaderCellDef",""]],features:[De([{provide:Wu,useExisting:n}]),de]})}return n})();var Wn=(()=>{class n extends Yr{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[De([{provide:Yr,useExisting:n}]),de]})}return n})(),qn=(()=>{class n extends bS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[de]})}return n})();var Yn=(()=>{class n extends vS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[de]})}return n})();var Kn=(()=>{class n extends uc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",B]},features:[De([{provide:uc,useExisting:n}]),de]})}return n})();var Xn=(()=>{class n extends qu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[De([{provide:qu,useExisting:n}]),de]})}return n})(),Zn=(()=>{class n extends Bg{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[De([{provide:Bg,useExisting:n}]),de],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Vt(0,0)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return n})();var Qn=(()=>{class n extends Vg{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[De([{provide:Vg,useExisting:n}]),de],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Vt(0,0)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return n})();var Jn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[SS,ve]})}return n})(),gk=9007199254740991,fr=class extends rc{_data;_renderData=new ht([]);_filter=new ht("");_internalPageChanges=new E;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(i){i=Array.isArray(i)?i:[],this._data.next(i),this._renderChangesSubscription||this._filterData(i)}get filter(){return this._filter.value}set filter(i){this._filter.next(i),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(i){this._sort=i,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(i){this._paginator=i,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(i,e)=>{let t=i[e];if(ou(t)){let r=Number(t);return r<gk?r:t}return t};sortData=(i,e)=>{let t=e.active,r=e.direction;return!t||r==""?i:i.sort((a,o)=>{let l=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(o,t),p=typeof l,g=typeof c;p!==g&&(p==="number"&&(l+=""),g==="number"&&(c+=""));let b=0;return l!=null&&c!=null?l>c?b=1:l<c&&(b=-1):l!=null?b=1:c!=null&&(b=-1),b*(r=="asc"?1:-1)})};filterPredicate=(i,e)=>{let t=e.trim().toLowerCase();return Object.values(i).some(r=>`${r}`.toLowerCase().includes(t))};constructor(i=[]){super(),this._data=new ht(i),this._updateChangeSubscription()}_updateChangeSubscription(){let i=this._sort?je(this._sort.sortChange,this._sort.initialized):x(null),e=this._paginator?je(this._paginator.page,this._internalPageChanges,this._paginator.initialized):x(null),t=this._data,r=Zt([t,this._filter]).pipe(A(([l])=>this._filterData(l))),a=Zt([r,i]).pipe(A(([l])=>this._orderData(l))),o=Zt([a,e]).pipe(A(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=o.subscribe(l=>this._renderData.next(l))}_filterData(i){return this.filteredData=this.filter==null||this.filter===""?i:i.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(i){return this.sort?this.sortData(i.slice(),this.sort):i}_pageData(i){if(!this.paginator)return i;let e=this.paginator.pageIndex*this.paginator.pageSize;return i.slice(e,e+this.paginator.pageSize)}_updatePaginator(i){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=i,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,t);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var _k=["determinateSpinner"];function bk(n,i){if(n&1&&(Qt(),d(0,"svg",11),I(1,"circle",12),u()),n&2){let e=O();te("viewBox",e._viewBox()),h(),mi("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),te("r",e._circleRadius())}}var vk=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:CS})}),CS=100,yk=10,on=(()=>{class n{_elementRef=s(z);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(vk),t=Wf(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=CS;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-yk)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Ue(_k,5),t&2){let a;G(a=U())&&(r._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(te("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),ut("mat-"+r.color),mi("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),j("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Jt],diameter:[2,"diameter","diameter",Jt],strokeWidth:[2,"strokeWidth","strokeWidth",Jt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(X(0,bk,2,8,"ng-template",null,0,cd),d(2,"div",2,1),Qt(),d(4,"svg",3),I(5,"circle",4),u()(),el(),d(6,"div",5)(7,"div",6)(8,"div",7),Vt(9,8),u(),d(10,"div",9),Vt(11,8),u(),d(12,"div",10),Vt(13,8),u()()()),t&2){let a=vt(1);h(4),te("viewBox",r._viewBox()),h(),mi("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),te("r",r._circleRadius()),h(4),w("ngTemplateOutlet",a),h(2),w("ngTemplateOutlet",a),h(2),w("ngTemplateOutlet",a)}},dependencies:[dl],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();function Sk(n,i){}var Xr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Wg=(()=>{class n extends Hr{_elementRef=s(z);_focusTrapFactory=s(mu);_config;_interactivityChecker=s(uu);_ngZone=s(J);_focusMonitor=s(nn);_renderer=s(ze);_changeDetectorRef=s(Me);_injector=s(ee);_platform=s(Ee);_document=s(re);_portalOutlet;_focusTrapped=new E;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(Xr,{optional:!0})||new Xr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||Xe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=Fi(),a=this._elementRef.nativeElement;(!r||r===this._document.body||r===a||a.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Fi();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fi()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&Ue(Gn,7),t&2){let a;G(a=U())&&(r._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&te("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[de],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&X(0,Sk,0,0,"ng-template",0)},dependencies:[Gn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),La=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new E;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!it(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},Ck=new v("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>qr(n)}}),Dk=new v("DialogData"),wk=new v("DefaultDialogConfig");function Mk(n){let i=ce(n),e=new L;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var qg=(()=>{class n{_injector=s(ee);_defaultOptions=s(wk,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(Vu);_idGenerator=s($e);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;_ariaHiddenElements=new Map;_scrollStrategy=s(Ck);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Mi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(rt(void 0)));open(e,t){let r=this._defaultOptions||new Xr;t=f(f({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),o=En(this._injector,a),l=new La(o,t),c=this._attachContainer(o,l,t);if(l.containerInstance=c,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Pe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Hg(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Hg(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Hg(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Mn({positionStrategy:e.positionStrategy||hr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let a=r.injector||r.viewContainerRef?.injector,o=[{provide:Xr,useValue:r},{provide:La,useValue:t},{provide:No,useValue:e}],l;r.container?typeof r.container=="function"?l=r.container:(l=r.container.type,o.push(...r.container.providers(r))):l=Wg;let c=new zn(l,r.viewContainerRef,ee.create({parent:a||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,t,r,a){if(e instanceof pt){let o=this._createInjector(a,t,r,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=f(f({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),r.attachTemplatePortal(new Yt(e,null,l,o))}else{let o=this._createInjector(a,t,r,this._injector),l=r.attachComponentPortal(new zn(e,a.viewContainerRef,o,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,r,a){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:Dk,useValue:e.data},{provide:La,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,r)):l.push(...e.providers)),e.direction&&(!o||!o.get(lt,null,{optional:!0}))&&l.push({provide:lt,useValue:Mk(e.direction)}),ee.create({parent:o||a,providers:l})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute("aria-hidden",a):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let a=t[r];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();function Hg(n,i){let e=n.length;for(;e--;)i(n[e])}var DS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[qg],imports:[Kt,Yi,Er,Yi]})}return n})();function xk(n,i){}var Ku=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Yg="mdc-dialog--open",wS="mdc-dialog--opening",MS="mdc-dialog--closing",Ek=150,Ak=75,Rk=(()=>{class n extends Wg{_animationStateChanged=new L;_animationsEnabled=!Be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ES(this._config.enterAnimationDuration)??Ek:0;_exitAnimationDuration=this._animationsEnabled?ES(this._config.exitAnimationDuration)??Ak:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(xS,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(wS,Yg)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Yg),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Yg),this._animationsEnabled?(this._hostElement.style.setProperty(xS,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(MS)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(wS,MS)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(St("id",r._config.id),te("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),j("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[de],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",0)(1,"div",1),X(2,xk,0,0,"ng-template",2),u()())},dependencies:[Gn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return n})(),xS="--mat-dialog-transition-duration";function ES(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Wi(n.substring(0,n.length-2)):n.endsWith("s")?Wi(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Yu=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Yu||{}),ln=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new aa(1);_beforeClosed=new aa(1);_result;_closeFallbackTimeout;_state=Yu.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(we(r=>r.state==="opened"),Pe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(we(r=>r.state==="closed"),Pe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),je(this.backdropClick(),this.keydownEvents().pipe(we(r=>r.keyCode===27&&!this.disableClose&&!it(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),kk(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(we(t=>t.state==="closing"),Pe(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Yu.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Yu.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function kk(n,i,e){return n._closeInteractionType=i,n.close(e)}var bi=new v("MatMdcDialogData"),Tk=new v("mat-mdc-dialog-default-options"),Nk=new v("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>qr(n)}}),ei=(()=>{class n{_defaultOptions=s(Tk,{optional:!0});_scrollStrategy=s(Nk);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s($e);_injector=s(ee);_dialog=s(qg);_animationsDisabled=Be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;dialogConfigClass=Ku;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Mi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(rt(void 0)));constructor(){this._dialogRefConstructor=ln,this._dialogContainerType=Rk,this._dialogDataToken=bi}open(e,t){let r;t=f(f({},this._defaultOptions||new Ku),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,_(f({},t),{positionStrategy:hr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Xr,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(o,l,c)=>(r=new this._dialogRefConstructor(o,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:r},{provide:La,useValue:null}])}));return r.componentRef=a.componentRef,r.componentInstance=a.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(r);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var AS=(()=>{class n{_dialogRef=s(ln,{optional:!0});_elementRef=s(z);_dialog=s(ei);ngOnInit(){this._dialogRef||(this._dialogRef=Ik(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n})}return n})(),Bi=(()=>{class n extends AS{id=s($e).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&St("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[de]})}return n})(),Vi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Sb([oc])]})}return n})(),ji=(()=>{class n extends AS{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&j("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[de]})}return n})();function Ik(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[ei],imports:[DS,Kt,Yi,ve]})}return n})();function Ok(n,i){if(n&1){let e=Ge();d(0,"div",1)(1,"button",2),M("click",function(){he(e);let r=O();return pe(r.action())}),m(2),u()()}if(n&2){let e=O();h(2),_e(" ",e.data.action," ")}}var Fk=["label"];function Pk(n,i){}var Lk=Math.pow(2,31)-1,hc=class{_overlayRef;instance;containerInstance;_afterDismissed=new E;_afterOpened=new E;_onAction=new E;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Lk))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},RS=new v("MatSnackBarData"),Vo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Bk=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Vk=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),jk=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),kS=(()=>{class n{snackBarRef=s(hc);data=s(RS);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0),m(1),u(),k(2,Ok,3,1,"div",1)),t&2&&(h(),_e(" ",r.data.message,`
`),h(),T(r.hasAction?2:-1))},dependencies:[Qe,Bk,Vk,jk],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),Kg="_mat-snack-bar-enter",Xg="_mat-snack-bar-exit",zk=(()=>{class n extends Hr{_ngZone=s(J);_elementRef=s(z);_changeDetectorRef=s(Me);_platform=s(Ee);_animationsDisabled=Be();snackBarConfig=s(Vo);_document=s(re);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(ee);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new E;_onExit=new E;_onEnter=new E;_animationState="void";_live;_label;_role;_liveElementId=s($e).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Xg?this._completeExit():e===Kg&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Kg)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Kg)},200)))}exit(){return this._destroyed?x(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Xg)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Xg),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Ue(Gn,7)(Fk,7),t&2){let a;G(a=U())&&(r._portalOutlet=a.first),G(a=U())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&M("animationend",function(o){return r.onAnimationEnd(o.animationName)})("animationcancel",function(o){return r.onAnimationEnd(o.animationName)}),t&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[de],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),X(4,Pk,0,0,"ng-template",4),u(),I(5,"div"),u()()),t&2&&(h(5),te("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Gn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})}return n})(),Gk=new v("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Vo}),An=(()=>{class n{_live=s(Ul);_injector=s(ee);_breakpointObserver=s(wa);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(Gk);_animationsDisabled=Be();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=kS;snackBarContainerComponent=zk;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let a=f(f({},this._defaultConfig),r);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=ee.create({parent:r||this._injector,providers:[{provide:Vo,useValue:t}]}),o=new zn(this.snackBarContainerComponent,t.viewContainerRef,a),l=e.attach(o);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let r=f(f(f({},new Vo),this._defaultConfig),t),a=this._createOverlay(r),o=this._attachSnackBarContainer(a,r),l=new hc(o,a);if(e instanceof pt){let c=new Yt(e,null,{$implicit:r.data,snackBarRef:l});l.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(r,l),p=new zn(e,void 0,c),g=o.attachComponentPortal(p);l.instance=g.instance}return this._breakpointObserver.observe(au.HandsetPortrait).pipe(F(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(l,r),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Mn;t.direction=e.direction;let r=hr(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,l=!o&&e.horizontalPosition!=="center";return o?r.left("0"):l?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,En(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ee.create({parent:r||this._injector,providers:[{provide:hc,useValue:t},{provide:RS,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var ti=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[An],imports:[Kt,Yi,Ye,kS,ve]})}return n})();var Uk=["*"];var $k=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Hk=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Wk=new v("MAT_CARD_CONFIG"),cn=(()=>{class n{appearance;constructor(){let e=s(Wk,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Uk,decls:1,vars:0,template:function(t,r){t&1&&(Ie(),ne(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})(),dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),TS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var mn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Hk,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(Ie($k),ne(0),Ze(1,"div",0),ne(2,1),Je(),ne(3,2))},encapsulation:2})}return n})();var hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var qk=["*",[["","matSortHeaderIcon",""]]],Yk=["*","[matSortHeaderIcon]"];function Kk(n,i){n&1&&(Qt(),Ze(0,"svg",3),Fn(1,"path",4),Je())}function Xk(n,i){n&1&&(Ze(0,"div",2),ne(1,1,null,Kk,2,0),Je())}var NS=new v("MAT_SORT_DEFAULT_OPTIONS"),xt=(()=>{class n{_defaultOptions;_initializedStream=new aa(1);sortables=new Map;_stateChanges=new E;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new L;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Zk(e.start||this.start,t),a=r.indexOf(this.direction)+1;return a>=r.length&&(a=0),r[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||n)(Ve(NS,8))};static \u0275dir=R({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",B],disabled:[2,"matSortDisabled","disabled",B]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Oe]})}return n})();function Zk(n,i){let e=["asc","desc"];return n=="desc"&&e.reverse(),i||e.push(""),e}var Qr=(()=>{class n{_sort=s(xt,{optional:!0});_columnDef=s(Yr,{optional:!0});_changeDetectorRef=s(Me);_focusMonitor=s(nn);_elementRef=s(z);_ariaDescriber=s(Wl,{optional:!0});_renderChanges;_animationsDisabled=Be();_recentlyCleared=ce(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(st).load(Bn);let e=s(NS,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=je(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,r){t&1&&M("click",function(){return r._toggleOnInteraction()})("keydown",function(o){return r._handleKeydown(o)})("mouseleave",function(){return r._recentlyCleared.set(null)}),t&2&&(te("aria-sort",r._getAriaSortAttribute()),j("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",B],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",B]},exportAs:["matSortHeader"],ngContentSelectors:Yk,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,r){t&1&&(Ie(qk),Ze(0,"div",0)(1,"div",1),ne(2),Je(),k(3,Xk,3,0,"div",2),Je()),t&2&&(j("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-descending",r._sort.direction==="desc")("mat-sort-header-ascending",r._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",r._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",r._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",r._animationsDisabled),te("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),h(3),T(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return n})(),Jr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var vi=y("[Race] Load Races"),Zu=y("[Race] Load Races Success",C()),Qu=y("[Race] Load Races Failure",C()),jo=y("[Race] Create Race",C()),Ju=y("[Race] Create Race Success",C()),em=y("[Race] Create Race Failure",C()),zo=y("[Race] Update Race",C()),tm=y("[Race] Update Race Success",C()),nm=y("[Race] Update Race Failure",C()),Go=y("[Race] Delete Race",C()),im=y("[Race] Delete Race Success",C()),rm=y("[Race] Delete Race Failure",C()),ea=y("[Race] Select Race",C());var am=Vn("race"),yi=be(am,n=>n.races),IS=be(am,n=>n.loading),E8=be(am,n=>n.error);var Si=be(am,n=>n.selectedRaceId),A8=be(yi,Si,(n,i)=>i?n.find(e=>e.id===i):null);var GS=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Ve(ze),Ve(z))};static \u0275dir=R({type:n})}return n})(),US=(()=>{class n extends GS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,features:[de]})}return n})(),_r=new v("");var Qk={provide:_r,useExisting:Lt(()=>pn),multi:!0};function Jk(){let n=Ri()?Ri().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var eT=new v(""),pn=(()=>{class n extends GS{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Jk())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Ve(ze),Ve(z),Ve(eT,8))};static \u0275dir=R({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&M("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[De([Qk]),de]})}return n})();function n_(n){return n==null||i_(n)===0}function i_(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Qi=new v(""),fm=new v(""),tT=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xe=class{static min(i){return $S(i)}static max(i){return HS(i)}static required(i){return WS(i)}static requiredTrue(i){return nT(i)}static email(i){return iT(i)}static minLength(i){return rT(i)}static maxLength(i){return aT(i)}static pattern(i){return oT(i)}static nullValidator(i){return sm()}static compose(i){return QS(i)}static composeAsync(i){return JS(i)}};function $S(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function HS(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function WS(n){return n_(n.value)?{required:!0}:null}function nT(n){return n.value===!0?null:{required:!0}}function iT(n){return n_(n.value)||tT.test(n.value)?null:{email:!0}}function rT(n){return i=>{let e=i.value?.length??i_(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function aT(n){return i=>{let e=i.value?.length??i_(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function oT(n){if(!n)return sm;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(n_(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function sm(n){return null}function qS(n){return n!=null}function YS(n){return pa(n)?In(n):n}function KS(n){let i={};return n.forEach(e=>{i=e!=null?f(f({},i),e):i}),Object.keys(i).length===0?null:i}function XS(n,i){return i.map(e=>e(n))}function sT(n){return!n.validate}function ZS(n){return n.map(i=>sT(i)?i:e=>i.validate(e))}function QS(n){if(!n)return null;let i=n.filter(qS);return i.length==0?null:function(e){return KS(XS(e,i))}}function r_(n){return n!=null?QS(ZS(n)):null}function JS(n){if(!n)return null;let i=n.filter(qS);return i.length==0?null:function(e){let t=XS(e,i).map(YS);return ed(t).pipe(A(KS))}}function a_(n){return n!=null?JS(ZS(n)):null}function OS(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function eC(n){return n._rawValidators}function tC(n){return n._rawAsyncValidators}function Zg(n){return n?Array.isArray(n)?n:[n]:[]}function lm(n,i){return Array.isArray(n)?n.includes(i):n===i}function FS(n,i){let e=Zg(i);return Zg(n).forEach(r=>{lm(e,r)||e.push(r)}),e}function PS(n,i){return Zg(i).filter(e=>!lm(n,e))}var cm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=r_(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=a_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},gr=class extends cm{name;get formDirective(){return null}get path(){return null}};var pc="VALID",om="INVALID",Ho="PENDING",fc="DISABLED",ta=class{},dm=class extends ta{value;source;constructor(i,e){super(),this.value=i,this.source=e}},_c=class extends ta{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},bc=class extends ta{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Wo=class extends ta{status;source;constructor(i,e){super(),this.status=i,this.source=e}},um=class extends ta{source;constructor(i){super(),this.source=i}},Ba=class extends ta{source;constructor(i){super(),this.source=i}};function o_(n){return(gm(n)?n.validators:n)||null}function lT(n){return Array.isArray(n)?r_(n):n||null}function s_(n,i){return(gm(i)?i.asyncValidators:n)||null}function cT(n){return Array.isArray(n)?a_(n):n||null}function gm(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function nC(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new le(1e3,"");if(!rC(t,e))throw new le(1001,"")}function iC(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new le(-1002,"")})}var qo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=ce(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return tt(this.statusReactive)}set status(i){tt(()=>this.statusReactive.set(i))}_status=Ot(()=>this.statusReactive());statusReactive=ce(void 0);get valid(){return this.status===pc}get invalid(){return this.status===om}get pending(){return this.status===Ho}get disabled(){return this.status===fc}get enabled(){return this.status!==fc}errors;get pristine(){return tt(this.pristineReactive)}set pristine(i){tt(()=>this.pristineReactive.set(i))}_pristine=Ot(()=>this.pristineReactive());pristineReactive=ce(!0);get dirty(){return!this.pristine}get touched(){return tt(this.touchedReactive)}set touched(i){tt(()=>this.touchedReactive.set(i))}_touched=Ot(()=>this.touchedReactive());touchedReactive=ce(!1);get untouched(){return!this.touched}_events=new E;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(FS(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(FS(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(PS(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(PS(i,this._rawAsyncValidators))}hasValidator(i){return lm(this._rawValidators,i)}hasAsyncValidator(i){return lm(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(_(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new bc(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new bc(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(_(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new _c(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new _c(!0,t))}markAsPending(i={}){this.status=Ho;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wo(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(_(f({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=fc,this.errors=null,this._forEachChild(r=>{r.disable(_(f({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new dm(this.value,t)),this._events.next(new Wo(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=pc,this._forEachChild(t=>{t.enable(_(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(_(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===pc||this.status===Ho)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new dm(this.value,e)),this._events.next(new Wo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(_(f({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?fc:pc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Ho,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=YS(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Wo(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?fc:this.errors?om:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ho)?Ho:this._anyControlsHaveStatus(om)?om:pc}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new _c(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new bc(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){gm(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=lT(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=cT(this._rawAsyncValidators)}_updateHasRequiredValidator(){tt(()=>this._hasRequired.set(this.hasValidator(xe.required)))}};function rC(n,i){return Object.hasOwn(n,i)}function dT(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function uT(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var Qg=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};function aC(n){return typeof n=="number"?n:parseFloat(n)}var l_=(()=>{class n{_validator=sm;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):sm,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,features:[Oe]})}return n})(),mT={provide:Qi,useExisting:Lt(()=>yc),multi:!0},yc=(()=>{class n extends l_{max;inputName="max";normalizeInput=e=>aC(e);createValidator=e=>HS(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&te("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[De([mT]),de]})}return n})(),hT={provide:Qi,useExisting:Lt(()=>Va),multi:!0},Va=(()=>{class n extends l_{min;inputName="min";normalizeInput=e=>aC(e);createValidator=e=>$S(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&te("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[De([hT]),de]})}return n})(),pT={provide:Qi,useExisting:Lt(()=>fn),multi:!0};var fn=(()=>{class n extends l_{required;inputName="required";normalizeInput=B;createValidator=e=>WS;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&te("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[De([pT]),de]})}return n})();var fT=new v(""),Sc=new v("",{factory:()=>_m}),_m="always";function oC(n,i){return[...i.path,n]}function Jg(n,i,e=_m){c_(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),_T(n,i),vT(n,i),bT(n,i),gT(n,i)}function LS(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),hm(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function mm(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function gT(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function c_(n,i){let e=eC(n);i.validator!==null?n.setValidators(OS(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=tC(n);i.asyncValidator!==null?n.setAsyncValidators(OS(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();mm(i._rawValidators,r),mm(i._rawAsyncValidators,r)}function hm(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=eC(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.validator);a.length!==r.length&&(e=!0,n.setValidators(a))}}if(i.asyncValidator!==null){let r=tC(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.asyncValidator);a.length!==r.length&&(e=!0,n.setAsyncValidators(a))}}}let t=()=>{};return mm(i._rawValidators,t),mm(i._rawAsyncValidators,t),e}function _T(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&sC(n,i)})}function bT(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&sC(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function sC(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function vT(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function lC(n,i){n==null,c_(n,i)}function yT(n,i){return hm(n,i)}function cC(n,i){if(!Object.hasOwn(n,"model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function ST(n){return Object.getPrototypeOf(n.constructor)===US}function dC(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function CT(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(a=>{a.constructor===pn?e=a:ST(a)?t=a:r=a}),r||t||e||null}function DT(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var uC={provide:fT,useFactory:()=>{let n=s(Ci,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},Ci=class extends cm{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ba&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=CT(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(di)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Me);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Te,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Ba&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=dT(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof fn))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,"touched",t.touched),this.bindControlProperty(i,r,"dirty",t.dirty),this.bindControlProperty(i,r,"valid",t.valid),this.bindControlProperty(i,r,"invalid",t.invalid),this.bindControlProperty(i,r,"pending",t.pending),this.bindControlProperty(i,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let a=t.errors;if(r.errors!==a){r.errors=a;let o=this._convertErrors(a);i.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let a=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!a&&(t==="disabled"||t==="required")&&this.renderer&&uT(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new Qg({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=Ot(()=>{let r=i();return r.length===0?null:r.reduce((a,o)=>(a[o.kind]=o,a),{})});this.parseErrorsValidator=(()=>e).bind(this),Dt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},pm=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var gn=(()=>{class n extends pm{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Ve(Ci,2))};static \u0275dir=R({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[de]})}return n})(),ni=(()=>{class n extends pm{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Ve(gr,10))};static \u0275dir=R({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[de]})}return n})(),Yo=class extends qo{constructor(i,e,t){super(o_(e),s_(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){tt(()=>{iC(this,!0,i),Object.keys(i).forEach(t=>{nC(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,_(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ba(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,a)=>{t=e(t,r,a)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return rC(this.controls,i)?this.controls[i]:null}};var e_=class extends Yo{};var wT={provide:gr,useExisting:Lt(()=>Ko)},gc=Promise.resolve(),Ko=(()=>{class n extends gr{callSetDisabledState;get submitted(){return tt(this.submittedReactive)}_submitted=Ot(()=>this.submittedReactive());submittedReactive=ce(!1);_directives=new Set;form;ngSubmit=new L;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Yo({},r_(e),a_(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){gc.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){gc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){gc.then(()=>{let t=this._findContainer(e.path),r=new Yo({});lC(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){gc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){gc.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),dC(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new um(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Ve(Qi,10),Ve(fm,10),Ve(Sc,8))};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&M("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[De([wT]),de]})}return n})();function BS(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function VS(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var vc=class extends qo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(o_(e),s_(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(VS(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){tt(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ba(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){BS(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){BS(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){VS(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var MT=n=>n instanceof vc;var xT=(()=>{class n extends gr{callSetDisabledState;get submitted(){return tt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ot(()=>this._submittedReactive());_submittedReactive=ce(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(hm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){LS(e.control||null,e,!1),DT(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,dC(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new um(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(LS(t||null,e),MT(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);lC(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&yT(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){c_(this.form,this),this._oldForm&&hm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Ve(Qi,10),Ve(fm,10),Ve(Sc,8))};static \u0275dir=R({type:n,features:[de,Oe]})}return n})(),ET={provide:gr,useExisting:Lt(()=>Tt)},Tt=(()=>{class n extends xT{form=null;ngSubmit=new L;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&M("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[De([ET]),de]})}return n})(),AT={provide:Ci,useExisting:Lt(()=>d_)},jS=Promise.resolve(),d_=(()=>{class n extends Ci{_changeDetectorRef;callSetDisabledState;control=new vc;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new L;constructor(e,t,r,a,o,l,c,p){super(c,p,a),this._changeDetectorRef=o,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),cC(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Jg(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Jg(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){jS.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&B(t);jS.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?oC(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(Ve(gr,9),Ve(Qi,10),Ve(fm,10),Ve(_r,10),Ve(Me,8),Ve(Sc,8),Ve(ee,8),Ve(ze,8))};static \u0275dir=R({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[De([AT,uC]),de,Oe,Vp(null)]})}return n})();var ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),RT={provide:_r,useExisting:Lt(()=>Nr),multi:!0},Nr=(()=>{class n extends US{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(t,r){t&1&&M("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[De([RT]),de]})}return n})();var t_=class extends qo{constructor(i,e,t){super(o_(e),s_(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){tt(()=>{iC(this,!1,i),i.forEach((t,r)=>{nC(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],_(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ba(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var mC=new v("");var kT={provide:Ci,useExisting:Lt(()=>Rn)},Rn=(()=>{class n extends Ci{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new L;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,a,o,l,c){super(c,l,a),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Jg(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),cC(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return oC(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(Ve(gr,13),Ve(Qi,10),Ve(fm,10),Ve(_r,10),Ve(mC,8),Ve(ze,8),Ve(ee,8))};static \u0275dir=R({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[De([kT,uC]),de,Oe,Vp(null)]})}return n})();var hC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})();function zS(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ri=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),a={};return zS(t)?a=t:t!==null&&(a.validators=t.validator,a.asyncValidators=t.asyncValidator),new Yo(r,a)}record(e,t=null){let r=this._reduceControls(e);return new e_(r,t)}control(e,t,r){let a={};return this.useNonNullable?(zS(t)?a=t:(a.validators=t,a.asyncValidators=r),new vc(e,_(f({},a),{nonNullable:!0}))):new vc(e,t,r)}array(e,t,r){let a=e.map(o=>this._createControl(o));return new t_(a,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof vc)return e;if(e instanceof qo)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(t,r,a)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var pC=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Sc,useValue:e.callSetDisabledState??_m}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[hC]})}return n})(),ai=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:mC,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Sc,useValue:e.callSetDisabledState??_m}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[hC]})}return n})();var TT=["notch"],NT=["*"],fC=["iconPrefixContainer"],gC=["textPrefixContainer"],_C=["iconSuffixContainer"],bC=["textSuffixContainer"],IT=["textField"],OT=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],FT=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function PT(n,i){n&1&&I(0,"span",21)}function LT(n,i){if(n&1&&(d(0,"label",20),ne(1,1),k(2,PT,1,0,"span",21),u()),n&2){let e=O(2);w("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),te("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),T(!e.hideRequiredMarker&&e._control.required?2:-1)}}function BT(n,i){if(n&1&&k(0,LT,3,5,"label",20),n&2){let e=O();T(e._hasFloatingLabel()?0:-1)}}function VT(n,i){n&1&&I(0,"div",7)}function jT(n,i){}function zT(n,i){if(n&1&&X(0,jT,0,0,"ng-template",13),n&2){O(2);let e=vt(1);w("ngTemplateOutlet",e)}}function GT(n,i){if(n&1&&(d(0,"div",9),k(1,zT,1,1,null,13),u()),n&2){let e=O();w("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),T(e._forceDisplayInfixLabel()?-1:1)}}function UT(n,i){n&1&&(d(0,"div",10,2),ne(2,2),u())}function $T(n,i){n&1&&(d(0,"div",11,3),ne(2,3),u())}function HT(n,i){}function WT(n,i){if(n&1&&X(0,HT,0,0,"ng-template",13),n&2){O();let e=vt(1);w("ngTemplateOutlet",e)}}function qT(n,i){n&1&&(d(0,"div",14,4),ne(2,4),u())}function YT(n,i){n&1&&(d(0,"div",15,5),ne(2,5),u())}function KT(n,i){n&1&&I(0,"div",16)}function XT(n,i){n&1&&(d(0,"div",18),ne(1,6),u())}function ZT(n,i){if(n&1&&(d(0,"mat-hint",22),m(1),u()),n&2){let e=O(2);w("id",e._hintLabelId),h(),fe(e.hintLabel)}}function QT(n,i){if(n&1&&(d(0,"div",19),k(1,ZT,2,2,"mat-hint",22),ne(2,7),I(3,"div",23),ne(4,8),u()),n&2){let e=O();h(),T(e.hintLabel?1:-1)}}var Ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-label"]]})}return n})(),MC=new v("MatError"),kn=(()=>{class n{id=s($e).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&St("id",r.id)},inputs:{id:"id"},features:[De([{provide:MC,useExisting:n}])]})}return n})(),Di=(()=>{class n{align="start";id=s($e).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(St("id",r.id),te("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),xC=new v("MatPrefix"),u_=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[De([{provide:xC,useExisting:n}])]})}return n})(),EC=new v("MatSuffix"),Cc=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[De([{provide:EC,useExisting:n}])]})}return n})(),AC=new v("FloatingLabelParent"),vC=(()=>{class n{_elementRef=s(z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Tu);_ngZone=s(J);_parent=s(AC);_resizeSubscription=new Te;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return JT(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function JT(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var yC="mdc-line-ripple--active",bm="mdc-line-ripple--deactivating",SC=(()=>{class n{_elementRef=s(z);_cleanupTransitionEnd;constructor(){let e=s(J),t=s(ze);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(bm),e.add(yC)}deactivate(){this._elementRef.nativeElement.classList.add(bm)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(bm);e.propertyName==="opacity"&&r&&t.remove(yC,bm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),CC=(()=>{class n{_elementRef=s(z);_ngZone=s(J);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ue(TT,5),t&2){let a;G(a=U())&&(r._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:NT,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Ie(),Fn(0,"div",1),Ze(1,"div",2,0),ne(3),Je(),Fn(4,"div",3))},encapsulation:2})}return n})(),Xo=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n})}return n})();var Ir=new v("MatFormField"),e1=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),DC="fill",t1="auto",wC="fixed",n1="translateY(-50%)",wt=(()=>{class n{_elementRef=s(z);_changeDetectorRef=s(Me);_platform=s(Ee);_idGenerator=s($e);_ngZone=s(J);_defaults=s(e1,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Sn("iconPrefixContainer");_textPrefixContainerSignal=Sn("textPrefixContainer");_iconSuffixContainerSignal=Sn("iconSuffixContainer");_textSuffixContainerSignal=Sn("textSuffixContainer");_prefixSuffixContainers=Ot(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ab(Ct);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Pi(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||t1}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||DC;this._appearanceSignal.set(t)}_appearanceSignal=ce(DC);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||wC}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||wC}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Be();constructor(){let e=this._defaults,t=s(lt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Dt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ot(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(rt([void 0,void 0]),A(()=>[t.errorState,t.userAriaDescribedBy]),Op(),we(([[a,o],[l,c]])=>a!==l||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(F(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),je(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){$p({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ot(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,r;if(t){let a=this._describedByIds||e;r=e.concat(t.filter(o=>o&&!a.includes(o)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,p=a?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",b=`${o+l}px`,V=`calc(${g} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${n1} translateX(${V}))`,Z=o+l+c+p;return[W,Z]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,a){if(t&1&&(wb(a,r._labelChild,Ct,5),It(a,Xo,5)(a,xC,5)(a,EC,5)(a,MC,5)(a,Di,5)),t&2){ui();let o;G(o=U())&&(r._formFieldControl=o.first),G(o=U())&&(r._prefixChildren=o),G(o=U())&&(r._suffixChildren=o),G(o=U())&&(r._errorChildren=o),G(o=U())&&(r._hintChildren=o)}},viewQuery:function(t,r){if(t&1&&(Ei(r._iconPrefixContainerSignal,fC,5)(r._textPrefixContainerSignal,gC,5)(r._iconSuffixContainerSignal,_C,5)(r._textSuffixContainerSignal,bC,5),Ue(IT,5)(fC,5)(gC,5)(_C,5)(bC,5)(vC,5)(CC,5)(SC,5)),t&2){ui(4);let a;G(a=U())&&(r._textField=a.first),G(a=U())&&(r._iconPrefixContainer=a.first),G(a=U())&&(r._textPrefixContainer=a.first),G(a=U())&&(r._iconSuffixContainer=a.first),G(a=U())&&(r._textSuffixContainer=a.first),G(a=U())&&(r._floatingLabel=a.first),G(a=U())&&(r._notchedOutline=a.first),G(a=U())&&(r._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[De([{provide:Ir,useExisting:n},{provide:AC,useExisting:n}])],ngContentSelectors:FT,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Ie(OT),X(0,BT,1,1,"ng-template",null,0,cd),d(2,"div",6,1),M("click",function(o){return r._control.onContainerClick(o)}),k(4,VT,1,0,"div",7),d(5,"div",8),k(6,GT,2,2,"div",9),k(7,UT,3,0,"div",10),k(8,$T,3,0,"div",11),d(9,"div",12),k(10,WT,1,1,null,13),ne(11),u(),k(12,qT,3,0,"div",14),k(13,YT,3,0,"div",15),u(),k(14,KT,1,0,"div",16),u(),d(15,"div",17),k(16,XT,2,0,"div",18)(17,QT,5,1,"div",19),u()),t&2){let a;h(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),T(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),T(r._hasOutline()?6:-1),h(),T(r._hasIconPrefix?7:-1),h(),T(r._hasTextPrefix?8:-1),h(2),T(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),T(r._hasTextSuffix?12:-1),h(),T(r._hasIconSuffix?13:-1),h(),T(r._hasOutline()?-1:14),h(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let o=r._getSubscriptMessageType();h(),T((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[vC,CC,dl,SC,Di],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[du,wt,ve]})}return n})();var i1=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),r1={passive:!0},RC=(()=>{class n{_platform=s(Ee);_ngZone=s(J);_renderer=s(qt).createRenderer(null,null);_styleLoader=s(st);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return At;this._styleLoader.load(i1);let t=Cn(e),r=this._monitoredElements.get(t);if(r)return r.subject;let a=new E,o="cdk-text-field-autofilled",l=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>a.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>a.next({target:p.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,r1)));return this._monitoredElements.set(t,{subject:a,unlisten:c}),a}stopMonitoring(e){let t=Cn(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})();var kC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({})}return n})();var vm=new v("");var ym=new v("MAT_INPUT_VALUE_ACCESSOR");var a1=["button","checkbox","file","hidden","image","radio","range","reset","submit"],o1=new v("MAT_INPUT_CONFIG"),oi=(()=>{class n{_elementRef=s(z);_platform=s(Ee);ngControl=s(Ci,{optional:!0,self:!0});_autofillMonitor=s(RC);_ngZone=s(J);_formField=s(Ir,{optional:!0});_renderer=s(ze);_uid=s($e).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(o1,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Pi(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(xe.required)??!1}set required(e){this._required=Pi(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ng().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Pi(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ng().has(e));constructor(){let e=s(Ko,{optional:!0}),t=s(Tt,{optional:!0}),r=s(ru),a=s(ym,{optional:!0,self:!0}),o=s(vm,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();a?nr(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ro(r,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Dt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){a1.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&M("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(St("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),te("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},exportAs:["matInput"],features:[De([{provide:Xo,useExisting:n}]),Oe]})}return n})(),si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[gt,gt,kC,ve]})}return n})();function s1(n,i){return this._trackRow(i)}var LC=(n,i)=>i.id;function l1(n,i){if(n&1&&(Ze(0,"tr",0)(1,"td",3),m(2),Je()()),n&2){let e=O();h(),mi("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),te("colspan",e.numCols),h(),_e(" ",e.label," ")}}function c1(n,i){if(n&1&&(Ze(0,"td",3),m(1),Je()),n&2){let e=O(2);mi("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),te("colspan",e._firstRowOffset),h(),_e(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function d1(n,i){if(n&1){let e=Ge();Ze(0,"td",6)(1,"button",7),Ja("click",function(r){let a=he(e).$implicit,o=O(2);return pe(o._cellClicked(a,r))})("focus",function(r){let a=he(e).$implicit,o=O(2);return pe(o._emitActiveDateChange(a,r))}),Ze(2,"span",8),m(3),Je(),Fn(4,"span",9),Je()()}if(n&2){let e=i.$implicit,t=i.$index,r=O().$index,a=O();mi("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),te("data-mat-row",r)("data-mat-col",t),h(),ut(e.cssClasses),j("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(r,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,r,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,r,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),St("tabIndex",a._isActiveCell(r,t)?0:-1),te("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),h(),j("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),h(),_e(" ",e.displayValue," ")}}function u1(n,i){if(n&1&&(Ze(0,"tr",1),k(1,c1,2,6,"td",4),_t(2,d1,5,49,"td",5,LC),Je()),n&2){let e=i.$implicit,t=i.$index,r=O();h(),T(t===0&&r._firstRowOffset?1:-1),h(),bt(e)}}function m1(n,i){if(n&1&&(d(0,"th",2)(1,"span",6),m(2),u(),d(3,"span",3),m(4),u()()),n&2){let e=i.$implicit;h(2),fe(e.long),h(2),fe(e.narrow)}}var h1=["*"];function p1(n,i){}function f1(n,i){if(n&1){let e=Ge();d(0,"mat-month-view",4),no("activeDateChange",function(r){he(e);let a=O();return to(a.activeDate,r)||(a.activeDate=r),pe(r)}),M("_userSelection",function(r){he(e);let a=O();return pe(a._dateSelected(r))})("dragStarted",function(r){he(e);let a=O();return pe(a._dragStarted(r))})("dragEnded",function(r){he(e);let a=O();return pe(a._dragEnded(r))}),u()}if(n&2){let e=O();eo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function g1(n,i){if(n&1){let e=Ge();d(0,"mat-year-view",5),no("activeDateChange",function(r){he(e);let a=O();return to(a.activeDate,r)||(a.activeDate=r),pe(r)}),M("monthSelected",function(r){he(e);let a=O();return pe(a._monthSelectedInYearView(r))})("selectedChange",function(r){he(e);let a=O();return pe(a._goToDateInView(r,"month"))}),u()}if(n&2){let e=O();eo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function _1(n,i){if(n&1){let e=Ge();d(0,"mat-multi-year-view",6),no("activeDateChange",function(r){he(e);let a=O();return to(a.activeDate,r)||(a.activeDate=r),pe(r)}),M("yearSelected",function(r){he(e);let a=O();return pe(a._yearSelectedInMultiYearView(r))})("selectedChange",function(r){he(e);let a=O();return pe(a._goToDateInView(r,"year"))}),u()}if(n&2){let e=O();eo("activeDate",e.activeDate),w("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function b1(n,i){}var v1=["button"],y1=[[["","matDatepickerToggleIcon",""]]],S1=["[matDatepickerToggleIcon]"];function C1(n,i){n&1&&(Qt(),d(0,"svg",2),I(1,"path",3),u())}var Jo=(()=>{class n{changes=new E;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),D1=0,wc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=D1++;cssClasses;constructor(i,e,t,r,a,o=i,l){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=r,this.compareValue=o,this.rawValue=l,this.cssClasses=a instanceof Set?Array.from(a):a}},w1={passive:!1,capture:!0},Sm={passive:!0,capture:!0},TC={passive:!0},Qo=(()=>{class n{_elementRef=s(z);_ngZone=s(J);_platform=s(Ee);_intl=s(Jo);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new L;previewChange=new L;activeDateChange=new L;dragStarted=new L;dragEnded=new L;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(ee);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(ze),t=s($e);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(st).load(Bn),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,a=[e.listen(r,"touchmove",this._touchmoveHandler,w1),e.listen(r,"mouseenter",this._enterHandler,Sm),e.listen(r,"focus",this._enterHandler,Sm),e.listen(r,"mouseleave",this._leaveHandler,Sm),e.listen(r,"blur",this._leaveHandler,Sm),e.listen(r,"mousedown",this._mousedownHandler,TC),e.listen(r,"touchstart",this._mousedownHandler,TC)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:r,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=r&&r.length&&r[0].length?a-r[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let r=e*this.numCols+t;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Xe(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return p_(e,this.startValue,this.endValue)}_isRangeEnd(e){return f_(e,this.startValue,this.endValue)}_isInRange(e){return g_(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return p_(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][r-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][r+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return f_(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return g_(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return p_(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return f_(e,this.previewStart,this.previewEnd)}_isInPreview(e){return g_(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=NC(e),r=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),h_(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=h_(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(t);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=NC(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=h_(e);if(t){let r=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(r&&a)return this.rows[parseInt(r)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Oe],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,r){t&1&&(k(0,l1,3,6,"tr",0),_t(1,u1,4,1,"tr",1,s1,!0),Ze(3,"span",2),m(4),Je(),Ze(5,"span",2),m(6),Je(),Ze(7,"span",2),m(8),Je(),Ze(9,"span",2),m(10),Je()),t&2&&(T(r._firstRowOffset<r.labelMinRequiredCells?0:-1),h(),bt(r.rows),h(2),St("id",r._startDateLabelId),h(),_e(" ",r.startDateAccessibleName,`
`),h(),St("id",r._endDateLabelId),h(),_e(" ",r.endDateAccessibleName,`
`),h(),St("id",r._comparisonStartDateLabelId),h(),vr(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),h(),St("id",r._comparisonEndDateLabelId),h(),vr(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
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
`],encapsulation:2})}return n})();function m_(n){return n?.nodeName==="TD"}function h_(n){let i;return m_(n)?i=n:m_(n.parentNode)?i=n.parentNode:m_(n.parentNode?.parentNode)&&(i=n.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function p_(n,i,e){return e!==null&&i!==e&&n<e&&n===i}function f_(n,i,e){return i!==null&&i!==e&&n>=i&&n===e}function g_(n,i,e,t){return t&&i!==null&&e!==null&&i!==e&&n>=i&&n<=e}function NC(n){let i=n.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var zi=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Mc=(()=>{class n{selection;_adapter;_selectionChanged=new E;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){ha()};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),M1=(()=>{class n extends Mc{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(q(Gt))};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var BC={provide:Mc,useFactory:()=>s(Mc,{optional:!0,skipSelf:!0})||new M1(s(Gt))};var VC=new v("MAT_DATE_RANGE_SELECTION_STRATEGY");var __=7,x1=0,IC=(()=>{class n{_changeDetectorRef=s(Me);_dateFormats=s(lr,{optional:!0});_dateAdapter=s(Gt,{optional:!0});_dir=s(lt,{optional:!0});_rangeStrategy=s(VC,{optional:!0});_rerenderSubscription=Te.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zi?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new L;_userSelection=new L;dragStarted=new L;dragEnded=new L;activeDateChange=new L;_matCalendarBody;_monthLabel=ce("");_weeks=ce([]);_firstWeekOffset=ce(0);_rangeStart=ce(null);_rangeEnd=ce(null);_comparisonRangeStart=ce(null);_comparisonRangeEnd=ce(null);_previewStart=ce(null);_previewEnd=ce(null);_isRange=ce(!1);_todayDate=ce(null);_weekdays=ce([]);constructor(){s(st).load(cr),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(rt(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,r=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof zi?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!it(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((__+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%__),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let r=t?t.rawValue:null,a=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&r){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:x1++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),r=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==__&&(r.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),c=this._shouldEnableDate(l),p=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),g=this.dateClass?this.dateClass(l,"month"):void 0;r[r.length-1].push(new wc(a+1,t[a],p,c,g,this._getCellCompareValue(l),l))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,r,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof zi?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,r){if(t&1&&Ue(Qo,5),t&2){let a;G(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Oe],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),_t(3,m1,5,2,"th",2,LC),u(),d(5,"tr",3),I(6,"th",4),u()(),d(7,"tbody",5),M("selectedValueChange",function(o){return r._dateSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("previewChange",function(o){return r._previewChanged(o)})("dragStarted",function(o){return r.dragStarted.emit(o)})("dragEnded",function(o){return r._dragEnded(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(3),bt(r._weekdays()),h(4),w("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Qo],encapsulation:2})}return n})(),wi=24,b_=4,OC=(()=>{class n{_changeDetectorRef=s(Me);_dateAdapter=s(Gt,{optional:!0});_dir=s(lt,{optional:!0});_rerenderSubscription=Te.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),jC(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zi?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new L;yearSelected=new L;activeDateChange=new L;_matCalendarBody;_years=ce([]);_todayYear=ce(0);_selectedYear=ce(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(rt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Dc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let a=0,o=[];a<wi;a++)o.push(t+a),o.length==b_&&(r.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,r=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(r),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-b_);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,b_);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Dc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,wi-Dc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-wi*10:-wi);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?wi*10:wi);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Dc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new wc(e,r,r,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let r=t;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof zi){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,r){if(t&1&&Ue(Qo,5),t&2){let a;G(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),I(3,"th",2),u()(),d(4,"tbody",3),M("selectedValueChange",function(o){return r._yearSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(4),w("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Qo],encapsulation:2})}return n})();function jC(n,i,e,t,r){let a=n.getYear(i),o=n.getYear(e),l=zC(n,t,r);return Math.floor((a-l)/wi)===Math.floor((o-l)/wi)}function Dc(n,i,e,t){let r=n.getYear(i);return E1(r-zC(n,e,t),wi)}function zC(n,i,e){let t=0;return e?t=n.getYear(e)-wi+1:i&&(t=n.getYear(i)),t}function E1(n,i){return(n%i+i)%i}var FC=(()=>{class n{_changeDetectorRef=s(Me);_dateFormats=s(lr,{optional:!0});_dateAdapter=s(Gt,{optional:!0});_dir=s(lt,{optional:!0});_rerenderSubscription=Te.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zi?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new L;monthSelected=new L;activeDateChange=new L;_matCalendarBody;_months=ce([]);_yearLabel=ce("");_todayMonth=ce(null);_selectedMonth=ce(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(rt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(r);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,t){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(r,"year"):void 0;return new wc(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(t,e,1);for(let a=r;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof zi?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,r){if(t&1&&Ue(Qo,5),t&2){let a;G(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),I(3,"th",2),u()(),d(4,"tbody",3),M("selectedValueChange",function(o){return r._monthSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(4),w("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Qo],encapsulation:2})}return n})(),GC=(()=>{class n{_intl=s(Jo);calendar=s(v_);_dateAdapter=s(Gt,{optional:!0});_dateFormats=s(lr,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(st).load(cr);let e=s(Me);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-wi))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:wi))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):jC(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Dc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=t+wi-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[a,o]}_periodButtonLabelId=s($e).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:h1,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,r){t&1&&(Ie(),d(0,"div",0)(1,"div",1)(2,"span",2),m(3),u(),d(4,"button",3),M("click",function(){return r.currentPeriodClicked()}),d(5,"span",4),m(6),u(),Qt(),d(7,"svg",5),I(8,"polygon",6),u()(),el(),I(9,"div",7),ne(10),d(11,"button",8),M("click",function(){return r.previousClicked()}),Qt(),d(12,"svg",9),I(13,"path",10),u()(),el(),d(14,"button",11),M("click",function(){return r.nextClicked()}),Qt(),d(15,"svg",9),I(16,"path",12),u()()()()),t&2&&(h(2),w("id",r._periodButtonLabelId),h(),fe(r.periodButtonDescription),h(),te("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),h(2),fe(r.periodButtonText),h(),j("mat-calendar-invert",r.calendar.currentView!=="month"),h(4),w("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),te("aria-label",r.prevButtonLabel),h(3),w("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),te("aria-label",r.nextButtonLabel))},dependencies:[Qe,$t,Xt],encapsulation:2})}return n})(),v_=(()=>{class n{_dateAdapter=s(Gt,{optional:!0});_dateFormats=s(lr,{optional:!0});_changeDetectorRef=s(Me);_elementRef=s(z);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof zi?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new L;yearSelected=new L;monthSelected=new L;viewChanged=new L(!0);_userSelection=new L;_userDragDrop=new L;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new E;constructor(){this._intlChanges=s(Jo).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new zn(this.headerComponent||GC),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||r||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Fi())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof zi||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,r){if(t&1&&Ue(IC,5)(FC,5)(OC,5),t&2){let a;G(a=U())&&(r.monthView=a.first),G(a=U())&&(r.yearView=a.first),G(a=U())&&(r.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[De([BC]),Oe],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,r){if(t&1&&(X(0,p1,0,0,"ng-template",0),d(1,"div",1),k(2,f1,1,11,"mat-month-view",2)(3,g1,1,6,"mat-year-view",3)(4,_1,1,6,"mat-multi-year-view",3),u()),t&2){let a;w("cdkPortalOutlet",r._calendarHeaderPortal),h(2),T((a=r.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[Gn,Gl,IC,FC,OC],styles:[`.mat-calendar {
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
`],encapsulation:2})}return n})(),A1=new v("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n)}}),UC=(()=>{class n{_elementRef=s(z);_animationsDisabled=Be();_changeDetectorRef=s(Me);_globalModel=s(Mc);_dateAdapter=s(Gt);_ngZone=s(J);_rangeSelectionStrategy=s(VC,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new E;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(st).load(cr),this._closeButtonText=s(Jo).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(ze);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,r=e.value,a=t instanceof zi;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(r,t,e.event);this._model.updateSelection(o,this)}else r&&(a||!this._dateAdapter.sameDate(r,t))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,r){if(t&1&&Ue(v_,5),t&2){let a;G(a=U())&&(r._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,r){t&2&&(ut(r.color?"mat-"+r.color:""),j("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,r){t&1&&(d(0,"div",0)(1,"mat-calendar",1),M("yearSelected",function(o){return r.datepicker._selectYear(o)})("monthSelected",function(o){return r.datepicker._selectMonth(o)})("viewChanged",function(o){return r.datepicker._viewChanged(o)})("_userSelection",function(o){return r._handleUserSelection(o)})("_userDragDrop",function(o){return r._handleUserDragDrop(o)}),u(),X(2,b1,0,0,"ng-template",2),d(3,"button",3),M("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),m(4),u()()),t&2&&(j("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),te("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),h(),ut(r.datepicker.panelClass),w("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),h(),w("cdkPortalOutlet",r._actionsPortal),h(),j("cdk-visually-hidden",!r._closeButtonFocused),w("color",r.color||"primary"),h(),fe(r._closeButtonText))},dependencies:[Qf,v_,Gn,Qe],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return n})(),PC=(()=>{class n{_injector=s(ee);_viewContainerRef=s(dt);_dateAdapter=s(Gt,{optional:!0});_dir=s(lt,{optional:!0});_model=s(Mc);_animationsDisabled=Be();_scrollStrategy=s(A1);_inputStateChanges=Te.EMPTY;_document=s(re);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new L;monthSelected=new L;viewChanged=new L(!0);dateClass;openedStream=new L;closedStream=new L;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ky(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s($e).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new E;_changeDetectorRef=s(Me);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;r instanceof Io&&(this._setConnectedPositions(r),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Fi(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:r,location:a}=this._componentRef;r._animationDone.pipe(Pe(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),r._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new zn(UC,this._viewContainerRef),r=this._overlayRef=En(this._injector,new Mn({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?qr(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(r).subscribe(a=>{a&&a.preventDefault(),this.close()}),r.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=r.attach(t),this._forwardContentValues(this._componentRef.instance),e||Xe(()=>{r.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return hr(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Xi(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",r=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a},{originX:r,originY:a,overlayX:r,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return je(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(we(r=>r.keyCode===27&&!it(r)||this.datepickerInput&&it(r,"altKey")&&r.keyCode===38&&t.every(a=>!it(r,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",B],disabled:[2,"disabled","disabled",B],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",B],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",B]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Oe]})}return n})(),Cm=(()=>{class n extends PC{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[De([BC,{provide:PC,useExisting:n}]),de],decls:0,vars:0,template:function(t,r){},encapsulation:2})}return n})(),Zo=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},R1=(()=>{class n{_elementRef=s(z);_dateAdapter=s(Gt,{optional:!0});_dateFormats=s(lr,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,r=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&r.blur&&r.blur()}_disabled;dateChange=new L;dateInput=new L;stateChanges=new E;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Te.EMPTY;_localeSubscription=Te.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMinDate();return!r||!t||this._dateAdapter.compareDate(r,t)<=0?null:{matDatepickerMin:{min:r,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMaxDate();return!r||!t||this._dateAdapter.compareDate(r,t)>=0?null:{matDatepickerMax:{max:r,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let r=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(r),this._cvaOnChange(r),this._onTouched(),this._formatValue(r),this.dateInput.emit(new Zo(this,this._elementRef.nativeElement)),this.dateChange.emit(new Zo(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){k1(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];it(e,"altKey")&&e.keyCode===40&&t.every(a=>!it(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,r=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),r!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new Zo(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Zo(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",B]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Oe]})}return n})();function k1(n,i){let e=Object.keys(n);for(let t of e){let{previousValue:r,currentValue:a}=n[t];if(i.isDateInstance(r)&&i.isDateInstance(a)){if(!i.sameDate(r,a))return!0}else return!0}return!1}var T1={provide:_r,useExisting:Lt(()=>es),multi:!0},N1={provide:Qi,useExisting:Lt(()=>es),multi:!0},es=(()=>{class n extends R1{_formField=s(Ir,{optional:!0});_closedSubscription=Te.EMPTY;_openedSubscription=Te.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=ce(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=xe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,r){t&1&&M("input",function(o){return r._onInput(o)})("change",function(){return r._onChange()})("blur",function(){return r._onBlur()})("keydown",function(o){return r._onKeydown(o)}),t&2&&(St("disabled",r.disabled),te("aria-haspopup",r._datepicker?"dialog":null)("aria-owns",r._ariaOwns())("min",r.min?r._dateAdapter.toIso8601(r.min):null)("max",r.max?r._dateAdapter.toIso8601(r.max):null)("data-mat-calendar",r._datepicker?r._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[De([T1,N1,{provide:ym,useExisting:n}]),de]})}return n})(),I1=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),xc=(()=>{class n{_intl=s(Jo);_changeDetectorRef=s(Me);_stateChanges=Te.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new Ai("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:x(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:x(),r=this.datepicker?je(this.datepicker.openedStream,this.datepicker.closedStream):x();this._stateChanges.unsubscribe(),this._stateChanges=je(this._intl.changes,e,t,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,r,a){if(t&1&&It(a,I1,5),t&2){let o;G(o=U())&&(r._customIcon=o.first)}},viewQuery:function(t,r){if(t&1&&Ue(v1,5),t&2){let a;G(a=U())&&(r._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,r){t&1&&M("click",function(o){return r._open(o)}),t&2&&(te("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),j("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",B],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Oe],ngContentSelectors:S1,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,r){t&1&&(Ie(y1),d(0,"button",1,0),k(2,C1,2,0,":svg:svg",2),ne(3),u()),t&2&&(w("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),te("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),h(2),T(r._customIcon?-1:2))},dependencies:[$t],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return n})();var Dm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({providers:[Jo],imports:[Ye,Kt,Er,Yi,UC,xc,GC,ve,gi]})}return n})();function O1(n,i){n&1&&(d(0,"mat-error"),m(1,"Name ist erforderlich"),u())}function F1(n,i){n&1&&(d(0,"mat-error"),m(1,"Datum ist erforderlich"),u())}var Ec=class n{fb=s(ri);dialogRef=s(ln);data=s(bi);form;constructor(){let i=this.data?.date||"";if(i&&typeof i=="string"){let e=i.split("-");e.length===3&&(i=new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])))}this.form=this.fb.group({name:[this.data?.name||"",xe.required],date:[i,xe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,date:this.formatDate(i.date)};this.dialogRef.close(e)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-race-dialog"]],decls:24,vars:7,consts:[["picker",""],["mat-dialog-title",""],[1,"race-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["matInput","","formControlName","date","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),m(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Name"),u(),I(7,"input",4),We(),k(8,O1,2,0,"mat-error"),u(),d(9,"mat-form-field",3)(10,"mat-label"),m(11,"Datum"),u(),I(12,"input",5),We(),I(13,"mat-datepicker-toggle",6)(14,"mat-datepicker",null,0),d(16,"mat-hint"),m(17,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),u(),k(18,F1,2,0,"mat-error"),u()()(),d(19,"mat-dialog-actions",7)(20,"button",8),M("click",function(){return t.onCancel()}),m(21,"Abbrechen"),u(),d(22,"button",9),M("click",function(){return t.onSave()}),m(23," Speichern "),u()()),e&2){let r=vt(15);h(),_e(" ",t.data?"Rennen bearbeiten":"Neues Rennen"," "),h(2),w("formGroup",t.form),h(4),qe(),h(),T(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?8:-1),h(4),w("matDatepicker",r),qe(),h(),w("for",r),h(5),T(t.form.get("date")?.hasError("required")&&t.form.get("date")?.touched?18:-1),h(4),w("disabled",!t.form.valid)}},dependencies:[et,ai,ii,pn,gn,ni,fn,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,Di,kn,Cc,si,oi,Ye,Qe,Dm,Cm,es,xc,wu],styles:[".race-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function P1(n,i){n&1&&(d(0,"div",3),I(1,"mat-spinner"),u())}function L1(n,i){n&1&&(d(0,"th",14),m(1,"ID"),u())}function B1(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.id)}}function V1(n,i){n&1&&(d(0,"th",14),m(1,"Name"),u())}function j1(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.name)}}function z1(n,i){n&1&&(d(0,"th",14),m(1,"Datum"),u())}function G1(n,i){if(n&1&&(d(0,"td",15),m(1),oe(2,"date"),u()),n&2){let e=i.$implicit;h(),_e(" ",ga(2,1,e.date,"dd.MM.yyyy")," ")}}function U1(n,i){n&1&&(d(0,"th",16),m(1,"Aktionen"),u())}function $1(n,i){if(n&1){let e=Ge();d(0,"td",15)(1,"button",17),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.openEditDialog(r))}),d(2,"mat-icon"),m(3,"edit"),u()(),d(4,"button",18),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteRace(r))}),d(5,"mat-icon"),m(6,"delete"),u()()()}}function H1(n,i){n&1&&I(0,"tr",19)}function W1(n,i){n&1&&I(0,"tr",20)}var wm=class n{store=s(He);dialog=s(ei);snackBar=s(An);destroy$=new E;races$;loading$;displayedColumns=["id","name","date","actions"];dataSource=new fr([]);sortInitialized=!1;sort=Sn.required(xt);constructor(){this.races$=this.store.select(yi),this.loading$=this.store.select(IS),Dt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(F(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(vi()),this.races$.pipe(F(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Ec,{width:"500px"}).afterClosed().pipe(F(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(jo({race:e})),this.snackBar.open("Rennen erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Ec,{width:"500px",data:i}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(zo({id:i.id,race:t})),this.snackBar.open("Rennen erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteRace(i){confirm(`M\xF6chten Sie das Rennen "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(Go({id:i.id})),this.snackBar.open("Rennen erfolgreich gel\xF6scht","OK",{duration:3e3}))}refreshData(){this.store.dispatch(vi()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-race-list"]],viewQuery:function(e,t){e&1&&Ei(t.sort,xt,5),e&2&&ui()},decls:32,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"race-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","date"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Rennen"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"button",1),M("click",function(){return t.openCreateDialog()}),d(7,"mat-icon"),m(8,"add"),u(),m(9," Neues Rennen "),u(),d(10,"button",2),M("click",function(){return t.refreshData()}),d(11,"mat-icon"),m(12,"refresh"),u(),m(13," Aktualisieren "),u()(),k(14,P1,2,0,"div",3),oe(15,"async"),d(16,"table",4),oe(17,"async"),ye(18,5),X(19,L1,2,0,"th",6)(20,B1,2,1,"td",7),Se(),ye(21,8),X(22,V1,2,0,"th",6)(23,j1,2,1,"td",7),Se(),ye(24,9),X(25,z1,2,0,"th",6)(26,G1,3,4,"td",7),Se(),ye(27,10),X(28,U1,2,0,"th",11)(29,$1,7,0,"td",7),Se(),X(30,H1,1,0,"tr",12)(31,W1,1,0,"tr",13),u()()()),e&2&&(h(14),T(ue(15,6,t.loading$)?14:-1),h(2),j("hidden",ue(17,8,t.loading$)),w("dataSource",t.dataSource),h(14),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns))},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,Jr,xt,Qr,ft,_a],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.race-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var q1=["trigger"],Y1=["panel"],K1=[[["mat-select-trigger"]],"*"],X1=["mat-select-trigger","*"];function Z1(n,i){if(n&1&&(d(0,"span",4),m(1),u()),n&2){let e=O();h(),fe(e.placeholder)}}function Q1(n,i){n&1&&ne(0)}function J1(n,i){if(n&1&&(d(0,"span",11),m(1),u()),n&2){let e=O(2);h(),fe(e.triggerValue)}}function eN(n,i){if(n&1&&(d(0,"span",5),k(1,Q1,1,0)(2,J1,2,1,"span",11),u()),n&2){let e=O();h(),T(e.customTrigger?1:2)}}function tN(n,i){if(n&1){let e=Ge();d(0,"div",12,1),M("keydown",function(r){he(e);let a=O();return pe(a._handleKeydown(r))}),ne(2,1),u()}if(n&2){let e=O();ut(e.panelClass),j("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),te("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var nN=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n)}}),iN=new v("MAT_SELECT_CONFIG"),rN=new v("MatSelectTrigger"),y_=class{source;value;constructor(i,e){this.source=i,this.value=e}},Gi=(()=>{class n{_viewportRuler=s(Dn);_changeDetectorRef=s(Me);_elementRef=s(z);_dir=s(lt,{optional:!0});_idGenerator=s($e);_renderer=s(ze);_parentFormField=s(Ir,{optional:!0});ngControl=s(Ci,{self:!0,optional:!0});_liveAnnouncer=s(Ul);_defaultOptions=s(iN,{optional:!0});_animationsDisabled=Be();_popoverLocation;_initialized=new E;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,a=Su(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Cu(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new y_(this,e)}_scrollStrategyFactory=s(nN);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new E;_errorStateTracker;stateChanges=new E;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ce(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(xe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Mi(()=>{let e=this.options;return e?e.changes.pipe(rt(e),Le(()=>je(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Le(()=>this.optionSelectionChanges))});openedChange=new L;_openedStream=this.openedChange.pipe(we(e=>e),A(()=>{}));_closedStream=this.openedChange.pipe(we(e=>!e),A(()=>{}));selectionChange=new L;valueChange=new L;constructor(){let e=s(ru),t=s(Ko,{optional:!0}),r=s(Tt,{optional:!0}),a=s(new Ai("tabindex"),{optional:!0}),o=s(cc,{optional:!0}),l=s(vm,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ro(e,l||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new mc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(F(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(F(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(rt(null),F(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Pe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!it(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,a=r===40||r===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&t.activeItem&&!it(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!it(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Oo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Aa(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=je(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(F(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),je(...this.options.map(t=>t._stateChanges)).pipe(F(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ft(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,a){if(t&1&&It(a,rN,5)(a,kt,5)(a,Zl,5),t&2){let o;G(o=U())&&(r.customTrigger=o.first),G(o=U())&&(r.options=o),G(o=U())&&(r.optionGroups=o)}},viewQuery:function(t,r){if(t&1&&Ue(q1,5)(Y1,5)(ju,5),t&2){let a;G(a=U())&&(r.trigger=a.first),G(a=U())&&(r.panel=a.first),G(a=U())&&(r._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&M("keydown",function(o){return r._handleKeydown(o)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(te("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),j("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Jt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B],placeholder:"placeholder",required:[2,"required","required",B],multiple:[2,"multiple","multiple",B],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",B],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Jt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",B]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[De([{provide:Xo,useExisting:n},{provide:Xl,useExisting:n}]),Oe],ngContentSelectors:X1,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Ie(K1),d(0,"div",2,0),M("click",function(){return r.open()}),d(3,"div",3),k(4,Z1,2,1,"span",4)(5,eN,3,1,"span",5),u(),d(6,"div",6)(7,"div",7),Qt(),d(8,"svg",8),I(9,"path",9),u()()()(),X(10,tN,3,16,"ng-template",10),M("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(o){return r._handleOverlayKeydown(o)})),t&2){let a=vt(1);h(3),te("id",r._valueId),h(),T(r.empty?4:5),h(6),w("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Oo,ju],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Kt,Ao,ve,gi,gt,Ao]})}return n})();var HC=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Pi(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Pi(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(te("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
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
`],encapsulation:2})}return n})(),Mm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[ve]})}return n})();var Ji={MALE:"M\xE4nnlich",FEMALE:"Weiblich",BOTH:"Beide"};var er=y("[Participant] Load Participants"),xm=y("[Participant] Load Participants Success",C()),Em=y("[Participant] Load Participants Failure",C()),Am=y("[Participant] Load Participant",C()),Rm=y("[Participant] Load Participant Success",C()),km=y("[Participant] Load Participant Failure",C()),ts=y("[Participant] Create Participant",C()),Tm=y("[Participant] Create Participant Success",C()),Nm=y("[Participant] Create Participant Failure",C()),ns=y("[Participant] Update Participant",C()),Im=y("[Participant] Update Participant Success",C()),Om=y("[Participant] Update Participant Failure",C()),is=y("[Participant] Delete Participant",C()),Fm=y("[Participant] Delete Participant Success",C()),Pm=y("[Participant] Delete Participant Failure",C()),rs=y("[Participant] Delete Participants By Race Id",C()),Lm=y("[Participant] Delete Participants By Race Id Success",C()),Bm=y("[Participant] Delete Participants By Race Id Failure",C()),WC=y("[Participant] Select Participant",C()),as=y("[Participant] Export All PDF",C()),Ac=y("[Participant] Export All PDF Success",C()),Vm=y("[Participant] Export All PDF Failure",C()),os=y("[Participant] Export By Gender PDF",C()),Rc=y("[Participant] Export By Gender PDF Success",C()),jm=y("[Participant] Export By Gender PDF Failure",C()),ss=y("[Participant] Export All Age Groups PDF",C()),kc=y("[Participant] Export All Age Groups PDF Success",C()),zm=y("[Participant] Export All Age Groups PDF Failure",C());var Nc=Vn("participant"),ls=be(Nc,n=>n.participants),qC=be(Nc,n=>n.loading),YC=be(Nc,n=>n.pdfExportLoading),WW=be(Nc,n=>n.error),oN=be(Nc,n=>n.selectedParticipantId),qW=be(ls,oN,(n,i)=>i?n.find(e=>e.id===i):null);var Gm=be(ls,Si,(n,i)=>i?n.filter(e=>e.race?.id===i):n);var S_=Vn("team"),$m=be(S_,n=>n.teams),KC=be(S_,n=>n.loading),KW=be(S_,n=>n.error);var Or=y("[Team] Load Teams"),Hm=y("[Team] Load Teams Success",C()),Wm=y("[Team] Load Teams Failure",C()),cs=y("[Team] Create Team",C()),qm=y("[Team] Create Team Success",C()),Ym=y("[Team] Create Team Failure",C()),ds=y("[Team] Update Team",C()),Km=y("[Team] Update Team Success",C()),Xm=y("[Team] Update Team Failure",C()),us=y("[Team] Delete Team",C()),Zm=y("[Team] Delete Team Success",C()),Qm=y("[Team] Delete Team Failure",C());var cN=(n,i)=>i.value,XC=(n,i)=>i.id;function dN(n,i){n&1&&(d(0,"mat-error"),m(1,"Vorname ist erforderlich"),u())}function uN(n,i){n&1&&(d(0,"mat-error"),m(1,"Nachname ist erforderlich"),u())}function mN(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsdatum ist erforderlich"),u())}function hN(n,i){if(n&1&&(d(0,"mat-option",9),m(1),u()),n&2){let e=i.$implicit;w("value",e.value),h(),fe(e.label)}}function pN(n,i){n&1&&(d(0,"mat-error"),m(1,"Geschlecht ist erforderlich"),u())}function fN(n,i){if(n&1&&(d(0,"mat-option",9),m(1),u()),n&2){let e=i.$implicit,t=O();w("value",e.id),h(),vr("",e.name," (",t.formatRaceDate(e.date),")")}}function gN(n,i){n&1&&(d(0,"mat-error"),m(1,"Rennen ist erforderlich"),u())}function _N(n,i){n&1&&(d(0,"mat-error"),m(1,"Startnummer ist erforderlich"),u())}function bN(n,i){if(n&1&&(d(0,"mat-option",9),m(1),u()),n&2){let e=i.$implicit;w("value",e.id),h(),fe(e.name)}}var Ic=class n{fb=s(ri);dialogRef=s(ln);data=s(bi);store=s(He);destroy$=new E;form;genderOptions=[{value:"MALE",label:Ji.MALE},{value:"FEMALE",label:Ji.FEMALE}];races$=this.store.select(yi);selectedRaceId$=this.store.select(Si);teams$=this.store.select($m);constructor(){let i=this.data?.birthDate||"";if(i&&typeof i=="string"){let e=i.split("-");e.length===3&&(i=new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||"",xe.required],lastName:[this.data?.lastName||"",xe.required],birthDate:[i,xe.required],gender:[this.data?.gender||"",xe.required],race:[this.data?.race?.id||"",xe.required],raceNumber:[this.data?.raceNumber||"",xe.required],teamId:[this.data?.team?.id||null]})}ngOnInit(){this.store.dispatch(Or()),this.data||this.selectedRaceId$.pipe(Pe(1)).subscribe(i=>{i&&this.form.patchValue({race:i})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={raceId:Number(i.race),firstName:i.firstName,lastName:i.lastName,birthDate:this.formatDate(i.birthDate),gender:i.gender,raceNumber:Number(i.raceNumber),teamId:i.teamId?Number(i.teamId):void 0};this.dialogRef.close(e)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-participant-dialog"]],decls:58,vars:16,consts:[["picker",""],["mat-dialog-title",""],[1,"participant-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","firstName","required",""],["matInput","","formControlName","lastName","required",""],["matInput","","formControlName","birthDate","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["formControlName","gender","required",""],[3,"value"],["formControlName","race","required",""],["matInput","","type","number","formControlName","raceNumber","required",""],["formControlName","teamId"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),m(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Vorname"),u(),I(7,"input",4),We(),k(8,dN,2,0,"mat-error"),u(),d(9,"mat-form-field",3)(10,"mat-label"),m(11,"Nachname"),u(),I(12,"input",5),We(),k(13,uN,2,0,"mat-error"),u(),d(14,"mat-form-field",3)(15,"mat-label"),m(16,"Geburtsdatum"),u(),I(17,"input",6),We(),I(18,"mat-datepicker-toggle",7)(19,"mat-datepicker",null,0),d(21,"mat-hint"),m(22,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),u(),k(23,mN,2,0,"mat-error"),u(),d(24,"mat-form-field",3)(25,"mat-label"),m(26,"Geschlecht"),u(),d(27,"mat-select",8),_t(28,hN,2,2,"mat-option",9,cN),u(),We(),k(30,pN,2,0,"mat-error"),u(),d(31,"mat-form-field",3)(32,"mat-label"),m(33,"Rennen"),u(),d(34,"mat-select",10),_t(35,fN,2,3,"mat-option",9,XC),oe(37,"async"),u(),We(),k(38,gN,2,0,"mat-error"),u(),d(39,"mat-form-field",3)(40,"mat-label"),m(41,"Startnummer"),u(),I(42,"input",11),We(),k(43,_N,2,0,"mat-error"),u(),d(44,"mat-form-field",3)(45,"mat-label"),m(46,"Team"),u(),d(47,"mat-select",12)(48,"mat-option",9),m(49,"Kein Team"),u(),_t(50,bN,2,2,"mat-option",9,XC),oe(52,"async"),u(),We(),u()()(),d(53,"mat-dialog-actions",13)(54,"button",14),M("click",function(){return t.onCancel()}),m(55,"Abbrechen"),u(),d(56,"button",15),M("click",function(){return t.onSave()}),m(57," Speichern "),u()()),e&2){let r=vt(20);h(),_e(" ",t.data?"Teilnehmer bearbeiten":"Neuer Teilnehmer"," "),h(2),w("formGroup",t.form),h(4),qe(),h(),T(t.form.get("firstName")?.hasError("required")&&t.form.get("firstName")?.touched?8:-1),h(4),qe(),h(),T(t.form.get("lastName")?.hasError("required")&&t.form.get("lastName")?.touched?13:-1),h(4),w("matDatepicker",r),qe(),h(),w("for",r),h(5),T(t.form.get("birthDate")?.hasError("required")&&t.form.get("birthDate")?.touched?23:-1),h(4),qe(),h(),bt(t.genderOptions),h(2),T(t.form.get("gender")?.hasError("required")&&t.form.get("gender")?.touched?30:-1),h(4),qe(),h(),bt(ue(37,12,t.races$)),h(3),T(t.form.get("race")?.hasError("required")&&t.form.get("race")?.touched?38:-1),h(4),qe(),h(),T(t.form.get("raceNumber")?.hasError("required")&&t.form.get("raceNumber")?.touched?43:-1),h(4),qe(),h(),w("value",null),h(2),bt(ue(52,14,t.teams$)),h(6),w("disabled",!t.form.valid)}},dependencies:[et,ai,ii,pn,Nr,gn,ni,fn,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,Di,kn,Cc,si,oi,Ye,Qe,Dm,Cm,es,xc,wu,li,Gi,kt,ft],styles:[".participant-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var vN=(n,i)=>i.id;function yN(n,i){if(n&1&&(d(0,"mat-option",4),m(1),u()),n&2){let e=i.$implicit,t=O();w("value",e.id),h(),vr("",e.name," (",t.formatRaceDate(e.date),")")}}function SN(n,i){if(n&1){let e=Ge();d(0,"button",32),M("click",function(){he(e);let r=O();return pe(r.deleteParticipantsByRace())}),d(1,"mat-icon"),m(2,"delete_sweep"),u(),m(3," Alle Teilnehmer l\xF6schen "),u()}}function CN(n,i){n&1&&I(0,"mat-spinner",10)}function DN(n,i){n&1&&(d(0,"mat-icon"),m(1,"picture_as_pdf"),u())}function wN(n,i){n&1&&(d(0,"div",12),I(1,"mat-spinner"),u())}function MN(n,i){n&1&&(d(0,"th",33),m(1,"ID"),u())}function xN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.id)}}function EN(n,i){n&1&&(d(0,"th",33),m(1,"Vorname"),u())}function AN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.firstName," ")}}function RN(n,i){n&1&&(d(0,"th",33),m(1,"Nachname"),u())}function kN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.lastName," ")}}function TN(n,i){n&1&&(d(0,"th",33),m(1," Geburtsdatum "),u())}function NN(n,i){if(n&1&&(d(0,"td",34),m(1),oe(2,"date"),u()),n&2){let e=i.$implicit;h(),_e(" ",ga(2,1,e.birthDate,"dd.MM.yyyy")," ")}}function IN(n,i){n&1&&(d(0,"th",33),m(1," Geschlecht "),u())}function ON(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit,t=O();h(),_e(" ",t.getGenderLabel(e.gender)," ")}}function FN(n,i){n&1&&(d(0,"th",33),m(1," Startnummer "),u())}function PN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.raceNumber," ")}}function LN(n,i){n&1&&(d(0,"th",33),m(1,"Team"),u())}function BN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.team?.name||"-"," ")}}function VN(n,i){n&1&&(d(0,"th",33),m(1,"Altersgruppe"),u())}function jN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.ageGroup?.name||"-"," ")}}function zN(n,i){n&1&&(d(0,"th",33),m(1,"Rennen"),u())}function GN(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.race?.name||"-"," ")}}function UN(n,i){n&1&&(d(0,"th",33),m(1,"Zeit"),u())}function $N(n,i){if(n&1&&(d(0,"td",34),m(1),u()),n&2){let e=i.$implicit,t=O();h(),_e(" ",e.durationMs!==void 0&&e.durationMs!==null?t.formatDuration(e.durationMs):"-"," ")}}function HN(n,i){n&1&&(d(0,"th",33),m(1,"Gemessen am"),u())}function WN(n,i){if(n&1&&(d(0,"td",34),m(1),oe(2,"date"),u()),n&2){let e=i.$implicit;h(),_e(" ",e.measuredAt?ga(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss"):"-"," ")}}function qN(n,i){n&1&&(d(0,"th",35),m(1,"Aktionen"),u())}function YN(n,i){if(n&1){let e=Ge();d(0,"td",34)(1,"button",36),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.openEditDialog(r))}),d(2,"mat-icon"),m(3,"edit"),u()(),d(4,"button",37),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteParticipant(r))}),d(5,"mat-icon"),m(6,"delete"),u()()()}}function KN(n,i){n&1&&I(0,"tr",38)}function XN(n,i){n&1&&I(0,"tr",39)}var eh=class n{store=s(He);dialog=s(ei);snackBar=s(An);destroy$=new E;participants$;races$;selectedRaceId$;loading$;pdfExportLoading$;displayedColumns=["id","firstName","lastName","birthDate","gender","raceNumber","team","ageGroup","race","durationMs","measuredAt","actions"];dataSource=new fr([]);sortInitialized=!1;sort=Sn.required(xt);constructor(){this.participants$=this.store.select(Gm),this.races$=this.store.select(yi),this.selectedRaceId$=this.store.select(Si),this.loading$=this.store.select(qC),this.pdfExportLoading$=this.store.select(YC),Dt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(F(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(er()),this.store.dispatch(vi()),this.participants$.pipe(F(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return Ji[i]||i}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return t>0?`${t}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}onRaceFilterChange(i){this.store.dispatch(ea({id:i}))}openCreateDialog(){this.dialog.open(Ic,{width:"500px"}).afterClosed().pipe(F(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(ts({participant:e})),this.snackBar.open("Teilnehmer erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Ic,{width:"500px",data:i}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(ns({id:i.id,participant:t})),this.snackBar.open("Teilnehmer erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteParticipant(i){confirm(`M\xF6chten Sie den Teilnehmer "${i.firstName} ${i.lastName}" wirklich l\xF6schen?`)&&(this.store.dispatch(is({id:i.id})),this.snackBar.open("Teilnehmer erfolgreich gel\xF6scht","OK",{duration:3e3}))}deleteParticipantsByRace(){this.selectedRaceId$.pipe(Pe(1)).subscribe(i=>{if(i===null)return;let e=this.dataSource.data[0]?.race?.name||"diesem Rennen";confirm(`M\xF6chten Sie wirklich ALLE Teilnehmer von "${e}" l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden!`)&&(this.store.dispatch(rs({raceId:i})),this.snackBar.open("Alle Teilnehmer des Rennens erfolgreich gel\xF6scht","OK",{duration:3e3}))})}refreshData(){this.store.dispatch(er()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}async exportAllPdf(){let i=await Qc(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(as({raceId:i})),this.snackBar.open("PDF Export gestartet: Gesamtwertung","OK",{duration:2e3})}async exportByGenderPdf(i){let e=await Qc(this.selectedRaceId$);if(!e){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(os({gender:i,raceId:e}));let t=i==="MALE"?"Herren":"Damen";this.snackBar.open(`PDF Export gestartet: Alle ${t}`,"OK",{duration:2e3})}async exportAllAgeGroupsPdf(){let i=await Qc(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(ss({raceId:i})),this.snackBar.open("PDF Export gestartet: Nach Altersklassen","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-participant-list"]],viewQuery:function(e,t){e&1&&Ei(t.sort,xt,5),e&2&&ui()},decls:104,vars:31,consts:[["exportMenu","matMenu"],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen"],[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],["mat-raised-button","","color","accent","matTooltip","PDF Export Optionen",3,"matMenuTriggerFor","disabled"],["diameter","20",2,"display","inline-block","margin-right","8px"],["mat-menu-item","",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"participant-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","birthDate"],["matColumnDef","gender"],["matColumnDef","raceNumber"],["matColumnDef","team"],["matColumnDef","ageGroup"],["matColumnDef","race"],["matColumnDef","durationMs"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Teilnehmer"),u()(),d(4,"mat-card-content")(5,"div",1)(6,"mat-form-field",2)(7,"mat-label"),m(8,"Nach Rennen filtern"),u(),d(9,"mat-select",3),oe(10,"async"),M("selectionChange",function(a){return t.onRaceFilterChange(a.value)}),d(11,"mat-option",4),m(12,"Alle Rennen"),u(),_t(13,yN,2,3,"mat-option",4,vN),oe(15,"async"),u()(),k(16,SN,4,0,"button",5),oe(17,"async"),u(),d(18,"div",6)(19,"button",7),M("click",function(){return t.openCreateDialog()}),d(20,"mat-icon"),m(21,"add"),u(),m(22," Neuer Teilnehmer "),u(),d(23,"button",8),M("click",function(){return t.refreshData()}),d(24,"mat-icon"),m(25,"refresh"),u(),m(26," Aktualisieren "),u(),d(27,"button",9),oe(28,"async"),k(29,CN,1,0,"mat-spinner",10),oe(30,"async"),On(31,DN,2,0,"mat-icon"),m(32," PDF Export "),d(33,"mat-icon"),m(34,"arrow_drop_down"),u()(),d(35,"mat-menu",null,0)(37,"button",11),M("click",function(){return t.exportAllPdf()}),d(38,"mat-icon"),m(39,"groups"),u(),d(40,"span"),m(41,"Gesamtwertung (Alle)"),u()(),I(42,"mat-divider"),d(43,"button",11),M("click",function(){return t.exportByGenderPdf("MALE")}),d(44,"mat-icon"),m(45,"male"),u(),d(46,"span"),m(47,"Alle Herren"),u()(),d(48,"button",11),M("click",function(){return t.exportByGenderPdf("FEMALE")}),d(49,"mat-icon"),m(50,"female"),u(),d(51,"span"),m(52,"Alle Damen"),u()(),I(53,"mat-divider"),d(54,"button",11),M("click",function(){return t.exportAllAgeGroupsPdf()}),d(55,"mat-icon"),m(56,"view_list"),u(),d(57,"span"),m(58,"Nach Altersklassen aufgeteilt"),u()()()(),k(59,wN,2,0,"div",12),oe(60,"async"),d(61,"table",13),oe(62,"async"),ye(63,14),X(64,MN,2,0,"th",15)(65,xN,2,1,"td",16),Se(),ye(66,17),X(67,EN,2,0,"th",15)(68,AN,2,1,"td",16),Se(),ye(69,18),X(70,RN,2,0,"th",15)(71,kN,2,1,"td",16),Se(),ye(72,19),X(73,TN,2,0,"th",15)(74,NN,3,4,"td",16),Se(),ye(75,20),X(76,IN,2,0,"th",15)(77,ON,2,1,"td",16),Se(),ye(78,21),X(79,FN,2,0,"th",15)(80,PN,2,1,"td",16),Se(),ye(81,22),X(82,LN,2,0,"th",15)(83,BN,2,1,"td",16),Se(),ye(84,23),X(85,VN,2,0,"th",15)(86,jN,2,1,"td",16),Se(),ye(87,24),X(88,zN,2,0,"th",15)(89,GN,2,1,"td",16),Se(),ye(90,25),X(91,UN,2,0,"th",15)(92,$N,2,1,"td",16),Se(),ye(93,26),X(94,HN,2,0,"th",15)(95,WN,3,4,"td",16),Se(),ye(96,27),X(97,qN,2,0,"th",28)(98,YN,7,0,"td",16),Se(),X(99,KN,1,0,"tr",29)(100,XN,1,0,"tr",30),u(),d(101,"div",31),oe(102,"async"),m(103),u()()()),e&2){let r=vt(36);h(9),w("value",ue(10,15,t.selectedRaceId$)),h(2),w("value",null),h(2),bt(ue(15,17,t.races$)),h(3),T(ue(17,19,t.selectedRaceId$)!==null?16:-1),h(11),w("matMenuTriggerFor",r)("disabled",ue(28,21,t.pdfExportLoading$)),h(2),T(ue(30,23,t.pdfExportLoading$)?29:31),h(30),T(ue(60,25,t.loading$)?59:-1),h(2),j("hidden",ue(62,27,t.loading$)),w("dataSource",t.dataSource),h(38),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns),h(),j("hidden",ue(102,29,t.loading$)),h(2),_e(" Anzahl der Teilnehmer: ",t.dataSource.data.length," ")}},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,Jr,xt,Qr,li,wt,Ct,Gi,kt,gt,Lo,pr,Tr,Po,Mm,HC,ft,_a],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.participant-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}"]})};var ZC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Er,ve]})}return n})();var ZN=["switch"],QN=["*"];function JN(n,i){n&1&&(d(0,"span",11),Qt(),d(1,"svg",13),I(2,"path",14),u(),d(3,"svg",15),I(4,"path",16),u()())}var eI=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),th=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},C_=(()=>{class n{_elementRef=s(z);_focusMonitor=s(nn);_changeDetectorRef=s(Me);defaults=s(eI);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new th(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Be();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new L;toggleChange=new L;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(st).load(Bn);let e=s(new Ai("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s($e).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new th(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Ue(ZN,5),t&2){let a;G(a=U())&&(r._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(t,r){t&2&&(St("id",r.id),te("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ut(r.color?"mat-"+r.color:""),j("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("mat-slide-toggle-full-width",r.fullWidth)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",B],color:"color",disabled:[2,"disabled","disabled",B],fullWidth:[2,"fullWidth","fullWidth",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Jt(e)],checked:[2,"checked","checked",B],hideIcon:[2,"hideIcon","hideIcon",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[De([{provide:_r,useExisting:Lt(()=>n),multi:!0},{provide:Qi,useExisting:n,multi:!0}]),Oe],ngContentSelectors:QN,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(Ie(),d(0,"div",1)(1,"button",2,0),M("click",function(){return r._handleClick()}),I(3,"div",3)(4,"span",4),d(5,"span",5)(6,"span",6)(7,"span",7),I(8,"span",8),u(),d(9,"span",9),I(10,"span",10),u(),k(11,JN,5,0,"span",11),u()()(),d(12,"label",12),M("click",function(o){return o.stopPropagation()}),ne(13),u()()),t&2){let a=vt(2);w("labelPosition",r.labelPosition),h(),j("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),w("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),te("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),h(9),w("matRippleTrigger",a)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),h(),T(r.hideIcon?-1:11),h(),w("for",r.buttonId),te("id",r._labelId)}},dependencies:[Ar,a0],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),QC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[C_,ve]})}return n})();var Ga=y("[Measurement] Load Measurements"),nh=y("[Measurement] Load Measurements Success",C()),ih=y("[Measurement] Load Measurements Failure",C()),rh=y("[Measurement] Load Measurements By Participant",C()),ah=y("[Measurement] Load Measurements By Participant Success",C()),oh=y("[Measurement] Load Measurements By Participant Failure",C()),sh=y("[Measurement] Load Measurement",C()),lh=y("[Measurement] Load Measurement Success",C()),ch=y("[Measurement] Load Measurement Failure",C()),ms=y("[Measurement] Create Measurement",C()),dh=y("[Measurement] Create Measurement Success",C()),uh=y("[Measurement] Create Measurement Failure",C()),hs=y("[Measurement] Update Measurement",C()),mh=y("[Measurement] Update Measurement Success",C()),hh=y("[Measurement] Update Measurement Failure",C()),ps=y("[Measurement] Delete Measurement",C()),ph=y("[Measurement] Delete Measurement Success",C()),fh=y("[Measurement] Delete Measurement Failure",C()),JC=y("[Measurement] Select Measurement",C()),fs=y("[Measurement] Reset Measurements",C()),Ua=y("[Measurement] Reset Measurements Success"),gs=y("[Measurement] Reset Measurements Failure",C()),_s=y("[Measurement] Set Continuous Mode",C()),$a=y("[Measurement] Set Continuous Mode Success",C()),bs=y("[Measurement] Set Continuous Mode Failure",C()),vs=y("[Measurement] Set Scheduled Import",C()),ys=y("[Measurement] Set Scheduled Import Success",C()),Ss=y("[Measurement] Set Scheduled Import Failure",C()),Cs=y("[Measurement] Load Scheduled Import Status"),gh=y("[Measurement] Load Scheduled Import Status Success",C()),_h=y("[Measurement] Load Scheduled Import Status Failure",C()),bh=y("[Measurement] Sync Measurements To Participants"),vh=y("[Measurement] Sync Measurements To Participants Success",C()),yh=y("[Measurement] Sync Measurements To Participants Failure",C()),ia=y("[Measurement] Load Device Status"),Ds=y("[Measurement] Load Device Status Success",C()),ws=y("[Measurement] Load Device Status Failure",C()),Ms=y("[Measurement] Discard Oldest Start"),xs=y("[Measurement] Discard Oldest Start Success",C()),Es=y("[Measurement] Discard Oldest Start Failure",C()),As=y("[Measurement] Export Measurements"),Rs=y("[Measurement] Export Measurements Success"),ks=y("[Measurement] Export Measurements Failure",C()),Ts=y("[Measurement] Import Measurements From Json",C()),Ns=y("[Measurement] Import Measurements From Json Success",C()),Is=y("[Measurement] Import Measurements From Json Failure",C()),Os=y("[Measurement] Start Device Connection Polling"),Fs=y("[Measurement] Stop Device Connection Polling"),Oc=y("[Measurement] Check Device Connection"),Ps=y("[Measurement] Check Device Connection Success",C()),Sh=y("[Measurement] Check Device Connection Failure",C());var Fr=Vn("measurement"),Dh=be(Fr,n=>n.measurements),eD=be(Fr,n=>n.loading),h7=be(Fr,n=>n.error),nI=be(Fr,n=>n.selectedMeasurementId),p7=be(Dh,nI,(n,i)=>i?n.find(e=>e.id===i):null);var f7=be(Dh,ls,Si,(n,i,e)=>{if(!e)return n;let t=i.filter(r=>r.race?.id===e).map(r=>r.id);return n.filter(r=>r.participantId&&t.includes(r.participantId))}),tD=be(Fr,n=>n.continuousModeEnabled),nD=be(Fr,n=>n.scheduledImportEnabled),iD=be(Fr,n=>n.deviceStatus),rD=be(Fr,n=>n.deviceConnected),g7=be(Fr,n=>n.isPollingDeviceConnection);var iI=["panel"],rI=["*"];function aI(n,i){if(n&1&&(Ze(0,"div",1,0),ne(2),Je()),n&2){let e=i.id,t=O();ut(t._classList),j("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),St("id",t.id),te("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var D_=class{source;option;constructor(i,e){this.source=i,this.option=e}},oD=new v("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),sD=(()=>{class n{_changeDetectorRef=s(Me);_elementRef=s(z);_defaults=s(oD);_animationsDisabled=Be();_activeOptionChanges=Te.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new L;opened=new L;closed=new L;optionActivated=new L;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s($e).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Ee);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Aa(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new D_(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,r,a){if(t&1&&It(a,kt,5)(a,Zl,5),t&2){let o;G(o=U())&&(r.options=o),G(o=U())&&(r.optionGroups=o)}},viewQuery:function(t,r){if(t&1&&Ue(pt,7)(iI,5),t&2){let a;G(a=U())&&(r.template=a.first),G(a=U())&&(r.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",B],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",B],requireSelection:[2,"requireSelection","requireSelection",B],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",B],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[De([{provide:Xl,useExisting:n}])],ngContentSelectors:rI,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,r){t&1&&(Ie(),fa(0,aI,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var oI={provide:_r,useExisting:Lt(()=>w_),multi:!0};var sI=new v("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(ee);return()=>_i(n)}}),w_=(()=>{class n{_environmentInjector=s(Bt);_element=s(z);_injector=s(ee);_viewContainerRef=s(dt);_zone=s(J);_changeDetectorRef=s(Me);_dir=s(lt,{optional:!0});_formField=s(Ir,{optional:!0,host:!0});_viewportRuler=s(Dn);_scrollStrategy=s(sI);_renderer=s(ze);_animationsDisabled=Be();_defaults=s(oD,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new E;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Te.EMPTY;_breakpointObserver=s(wa);_handsetLandscapeSubscription=Te.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new E;_overlayPanelClass=xr(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return je(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(we(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(we(()=>this._overlayAttached)):x()).pipe(A(e=>e instanceof Kl?e:null))}optionSelections=Mi(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(rt(e),Le(()=>je(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Le(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new at(e=>{let t=a=>{let o=Ft(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(o))&&(!c||!c.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},r=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{r.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,r=t.keyCode,a=it(t);if(r===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,l=r===38||r===40;r===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,r=t.value;if(t.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);r!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Fi()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new at(r=>{Xe(()=>{r.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(ot(()=>this._positionStrategy.reapplyLastPosition()),Z_(0))??x();return je(e,t).pipe(Le(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Pe(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),t._emitSelectEvent(r),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Yt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=En(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(au.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!it(e)||e.keyCode===38&&it(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Mn({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Xi(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],o;this.position==="above"?o=a:this.position==="below"?o=t:o=[...t,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){t=r;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,r=Su(e,t.options,t.optionGroups);if(e===0&&r===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let o=a._getHostElement(),l=Cu(o.offsetTop,o.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,r){t&1&&M("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(o){return r._handleInput(o)})("keydown",function(o){return r._handleKeydown(o)})("click",function(){return r._handleClick()}),t&2&&te("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen?null:r.autocomplete?.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",B]},exportAs:["matAutocompleteTrigger"],features:[De([oI]),Oe]})}return n})(),lD=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Y({imports:[Kt,Ao,gi,Ao,ve]})}return n})();var cI=(n,i)=>i.id;function dI(n,i){if(n&1&&(d(0,"mat-option",6),m(1),u()),n&2){let e=i.$implicit;w("value",e),h(),Mb(" ",e.firstName," ",e.lastName," (",e.raceNumber,") ")}}function uI(n,i){n&1&&(d(0,"mat-error"),m(1,"Minuten erforderlich"),u())}function mI(n,i){n&1&&(d(0,"mat-error"),m(1,"Minuten m\xFCssen >= 0 sein"),u())}function hI(n,i){n&1&&(d(0,"mat-error"),m(1,"Sekunden erforderlich"),u())}function pI(n,i){n&1&&(d(0,"mat-error"),m(1,"Sekunden: 0-59"),u())}function fI(n,i){n&1&&(d(0,"mat-error"),m(1,"Millisekunden erforderlich"),u())}function gI(n,i){n&1&&(d(0,"mat-error"),m(1,"Millisekunden: 0-999"),u())}function _I(n,i){n&1&&(d(0,"mat-error"),m(1,"Messzeit ist erforderlich"),u())}var Fc=class n{fb=s(ri);store=s(He);dialogRef=s(ln);data=s(bi);destroy$=new E;form;participants$;filteredParticipants$;selectedParticipant=null;constructor(){this.participants$=this.store.select(Gm),this.data?.participantId&&setTimeout(()=>{this.participants$.pipe(Pe(1),F(this.destroy$)).subscribe(e=>{this.selectedParticipant=e.find(t=>t.id===this.data.participantId)||null,this.selectedParticipant&&this.form.patchValue({participantSearch:this.selectedParticipant},{emitEvent:!1})})},0);let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({participantId:[this.data?.participantId||null],participantSearch:[""],minutes:[i.minutes,[xe.required,xe.min(0)]],seconds:[i.seconds,[xe.required,xe.min(0),xe.max(59)]],milliseconds:[i.milliseconds,[xe.required,xe.min(0),xe.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),xe.required]}),this.filteredParticipants$=Zt([this.participants$,this.form.get("participantSearch").valueChanges.pipe(rt(""))]).pipe(A(([e,t])=>{let r=typeof t=="string"?t:"";return this.filterParticipants(e,r)}))}ngAfterViewInit(){setTimeout(()=>{this.store.dispatch(er())},0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),t={participantId:i.participantId||void 0,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(t)}}onParticipantSelected(i){let e=i.option.value;this.selectedParticipant=e,this.form.patchValue({participantId:e?e.id:null})}displayParticipant(i){return i?`${i.firstName} ${i.lastName} (${i.raceNumber})`:""}filterParticipants(i,e){if(!e||e.trim()==="")return i;let t=e.toLowerCase();return i.filter(r=>{let a=`${r.firstName} ${r.lastName}`.toLowerCase(),o=r.raceNumber.toString();return a.includes(t)||o.includes(t)})}formatDateTimeForInput(i){if(!i){let t=new Date;return this.toLocalISOString(t)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0"),a=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0");return`${e}-${t}-${r}T${a}:${o}`}formatDateTimeForBackend(i){let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");return`${t}-${r}-${a}T${o}:${l}:${c}`}convertToMilliseconds(i,e,t){return i*60*1e3+e*1e3+t}splitMilliseconds(i){let e=Math.floor(i/6e4),t=i%(60*1e3),r=Math.floor(t/1e3),a=t%1e3;return{minutes:e,seconds:r,milliseconds:a}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-measurement-dialog"]],decls:44,vars:15,consts:[["auto","matAutocomplete"],["mat-dialog-title",""],[1,"measurement-form",3,"formGroup"],["appearance","outline"],["type","text","matInput","","formControlName","participantSearch","placeholder","Suche nach Name oder Startnummer",3,"matAutocomplete"],[3,"optionSelected","displayWith"],[3,"value"],[1,"time-input-group"],["matInput","","type","number","formControlName","minutes","min","0","required",""],["matInput","","type","number","formControlName","seconds","min","0","max","59","required",""],["matInput","","type","number","formControlName","milliseconds","min","0","max","999","required",""],["matInput","","type","datetime-local","formControlName","measuredAt","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),m(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),m(6,"Teilnehmer"),u(),I(7,"input",4),We(),d(8,"mat-autocomplete",5,0),M("optionSelected",function(a){return t.onParticipantSelected(a)}),d(10,"mat-option",6),m(11,"Kein Teilnehmer"),u(),_t(12,dI,2,4,"mat-option",6,cI),oe(14,"async"),u()(),d(15,"div",7)(16,"mat-form-field",3)(17,"mat-label"),m(18,"Minuten"),u(),I(19,"input",8),We(),k(20,uI,2,0,"mat-error"),k(21,mI,2,0,"mat-error"),u(),d(22,"mat-form-field",3)(23,"mat-label"),m(24,"Sekunden"),u(),I(25,"input",9),We(),k(26,hI,2,0,"mat-error"),k(27,pI,2,0,"mat-error"),u(),d(28,"mat-form-field",3)(29,"mat-label"),m(30,"Millisekunden"),u(),I(31,"input",10),We(),k(32,fI,2,0,"mat-error"),k(33,gI,2,0,"mat-error"),u()(),d(34,"mat-form-field",3)(35,"mat-label"),m(36,"Gemessen am (ISO Format)"),u(),I(37,"input",11),We(),k(38,_I,2,0,"mat-error"),u()()(),d(39,"mat-dialog-actions",12)(40,"button",13),M("click",function(){return t.onCancel()}),m(41,"Abbrechen"),u(),d(42,"button",14),M("click",function(){return t.onSave()}),m(43," Speichern "),u()()),e&2){let r=vt(9);h(),fe(t.data?"Messung bearbeiten":"Neue Messung"),h(2),w("formGroup",t.form),h(4),w("matAutocomplete",r),qe(),h(),w("displayWith",t.displayParticipant.bind(t)),h(2),w("value",null),h(2),bt(ue(14,13,t.filteredParticipants$)),h(7),qe(),h(),T(t.form.get("minutes")?.hasError("required")&&t.form.get("minutes")?.touched?20:-1),h(),T(t.form.get("minutes")?.hasError("min")?21:-1),h(4),qe(),h(),T(t.form.get("seconds")?.hasError("required")&&t.form.get("seconds")?.touched?26:-1),h(),T(t.form.get("seconds")?.hasError("min")||t.form.get("seconds")?.hasError("max")?27:-1),h(4),qe(),h(),T(t.form.get("milliseconds")?.hasError("required")&&t.form.get("milliseconds")?.touched?32:-1),h(),T(t.form.get("milliseconds")?.hasError("min")||t.form.get("milliseconds")?.hasError("max")?33:-1),h(4),qe(),h(),T(t.form.get("measuredAt")?.hasError("required")&&t.form.get("measuredAt")?.touched?38:-1),h(4),w("disabled",!t.form.valid)}},dependencies:[et,ai,ii,pn,Nr,gn,ni,fn,Va,yc,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,kn,si,oi,Ye,Qe,li,kt,lD,sD,w_,ft],styles:[".measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var bI={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},wh="__@ngrx/effects_create__";function ae(n,i={}){let e=i.functional?n:n(),t=f(f({},bI),i);return Object.defineProperty(e,wh,{value:t}),e}function vI(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(wh)?n[t][wh].hasOwnProperty("dispatch"):!1).map(t=>{let r=n[t][wh];return f({propertyName:t},r)})}function yI(n){return vI(n)}function cD(n){return Object.getPrototypeOf(n)}function SI(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function dD(n){return typeof n=="function"}function CI(n){return n.filter(dD)}function DI(n,i,e){let t=cD(n),a=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,o=yI(n).map(({propertyName:l,dispatch:c,useEffectsErrorHandler:p})=>{let g=typeof n[l]=="function"?n[l]():n[l],b=p?e(g,i):g;return c===!1?b.pipe(X_()):b.pipe(eb()).pipe(A(V=>({effect:n[l],notification:V,propertyName:l,sourceName:a,sourceInstance:n})))});return je(...o)}var wI=10;function uD(n,i,e=wI){return n.pipe(ie(t=>(i&&i.handleError(t),e<=1?n:uD(n,i,e-1))))}var _n=(()=>{class n extends at{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)(q(Na))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function H(...n){return we(i=>n.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}var MI=new v("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>uD}),xI="@ngrx/effects/init",EI=y(xI);function AI(n,i){if(n.notification.kind==="N"){let e=n.notification.value;!RI(e)&&i.handleError(new Error(`Effect ${kI(n)} dispatched an invalid action: ${TI(e)}`))}}function RI(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function kI({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function TI(n){try{return JSON.stringify(n)}catch{return n}}var NI="ngrxOnIdentifyEffects";function II(n){return M_(n,NI)}var OI="ngrxOnRunEffects";function FI(n){return M_(n,OI)}var PI="ngrxOnInitEffects";function LI(n){return M_(n,PI)}function M_(n,i){return n&&i in n&&typeof n[i]=="function"}var mD=(()=>{class n extends E{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(Np(e=>SI(e)?cD(e):e),se(e=>e.pipe(Np(BI))),se(e=>{let t=e.pipe(J_(a=>VI(this.errorHandler,this.effectsErrorHandler)(a)),A(a=>(AI(a,this.errorHandler),a.notification)),we(a=>a.kind==="N"&&a.value!=null),Q_()),r=e.pipe(Pe(1),we(LI),A(a=>a.ngrxOnInitEffects()));return je(t,r)}))}static{this.\u0275fac=function(t){return new(t||n)(q(Ui),q(MI))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function BI(n){return II(n)?n.ngrxOnIdentifyEffects():""}function VI(n,i){return e=>{let t=DI(e,n,i);return FI(e)?e.ngrxOnRunEffects(t):t}}var jI=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)(q(mD),q(He))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function hD(...n){let i=n.flat(),e=CI(i);return bn([e,Js(()=>{s(Jl),s(Au,{optional:!0});let t=s(jI),r=s(mD),a=!t.isStarted;a&&t.start();for(let o of i){let l=dD(o)?s(o):o;r.addEffects(l)}a&&s(He).dispatch(EI())})])}var zI=["jsonImportInput"],pD=()=>[],GI=(n,i)=>i.id;function UI(n,i){n&1&&(d(0,"mat-icon",5),m(1,"sync "),u())}function $I(n,i){if(n&1&&(d(0,"mat-icon",6),m(1,"sync "),u()),n&2){let e=O();w("matTooltip",xb("Letzte Aktualisierung: ",e.lastUpdate))}}function HI(n,i){if(n&1&&(d(0,"mat-option",11),m(1),u()),n&2){let e=i.$implicit,t=O();w("value",e.id),h(),vr("",e.name," (",t.formatRaceDate(e.date),") ")}}function WI(n,i){if(n&1){let e=Ge();d(0,"button",40),M("click",function(){he(e);let r=O();return pe(r.toggleContinuousMode(!1))}),d(1,"mat-icon"),m(2,"stop"),u(),m(3," Kontinuierlich AUS "),u()}}function qI(n,i){if(n&1){let e=Ge();d(0,"button",41),M("click",function(){he(e);let r=O();return pe(r.toggleContinuousMode(!0))}),d(1,"mat-icon"),m(2,"play_arrow"),u(),m(3," Kontinuierlich AN "),u()}}function YI(n,i){if(n&1){let e=Ge();d(0,"button",42),M("click",function(){he(e);let r=O();return pe(r.discardOldestStart())}),d(1,"mat-icon"),m(2,"person_off"),u(),m(3," Sturz signalisieren "),u()}}function KI(n,i){if(n&1){let e=Ge();d(0,"button",43),M("click",function(){he(e);let r=O();return pe(r.toggleScheduledImport(!1))}),d(1,"mat-icon"),m(2,"cloud_sync"),u(),m(3," Auto-Import AUS "),u()}}function XI(n,i){if(n&1){let e=Ge();d(0,"button",44),M("click",function(){he(e);let r=O();return pe(r.toggleScheduledImport(!0))}),d(1,"mat-icon"),m(2,"cloud_download"),u(),m(3," Auto-Import AN "),u()}}function ZI(n,i){n&1&&(d(0,"div",28),I(1,"mat-spinner",45),u())}function QI(n,i){n&1&&(d(0,"th",46),m(1,"ID"),u())}function JI(n,i){if(n&1&&(d(0,"td",47),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.id)}}function eO(n,i){n&1&&(d(0,"th",46),m(1,"Teilnehmer"),u())}function tO(n,i){if(n&1&&(d(0,"td",47),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.participantName||"-"," ")}}function nO(n,i){n&1&&(d(0,"th",46),m(1,"Dauer"),u())}function iO(n,i){if(n&1&&(d(0,"td",47),m(1),u()),n&2){let e=i.$implicit,t=O();h(),_e(" ",t.formatDuration(e.durationMs)," ")}}function rO(n,i){n&1&&(d(0,"th",46),m(1,"Gemessen am"),u())}function aO(n,i){if(n&1&&(d(0,"td",47),m(1),oe(2,"date"),u()),n&2){let e=i.$implicit;h(),_e(" ",ga(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss")," ")}}function oO(n,i){n&1&&(d(0,"th",46),m(1,"Aktionen"),u())}function sO(n,i){if(n&1){let e=Ge();d(0,"td",47)(1,"button",48),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.openEditDialog(r))}),d(2,"mat-icon"),m(3,"edit"),u()(),d(4,"button",49),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteMeasurement(r))}),d(5,"mat-icon"),m(6,"delete"),u()()()}}function lO(n,i){n&1&&I(0,"tr",50)}function cO(n,i){n&1&&I(0,"tr",51)}var Mh=class n{store=s(He);dialog=s(ei);snackBar=s(An);actions$=s(_n);destroy$=new E;autoRefresh$=new E;measurements$;participants$;races$;selectedRaceId$;measurementsWithParticipants$;loading$;continuousModeEnabled$;scheduledImportEnabled$;deviceStatus$;displayedColumns=["id","participant","duration","measuredAt","actions"];lastUpdate="";autoRefreshEnabled=!1;lastResetDevice=!1;jsonImportInput=Sn.required("jsonImportInput");constructor(){this.measurements$=this.store.select(Dh),this.participants$=this.store.select(ls),this.races$=this.store.select(yi),this.selectedRaceId$=this.store.select(Si),this.loading$=this.store.select(eD),this.continuousModeEnabled$=this.store.select(tD),this.scheduledImportEnabled$=this.store.select(nD),this.deviceStatus$=this.store.select(iD),this.measurementsWithParticipants$=Zt([this.measurements$,this.participants$]).pipe(A(([i,e])=>i.map(t=>_(f({},t),{participantName:t.participantId?this.getParticipantName(t.participantId,e):void 0}))),sa((i,e)=>JSON.stringify(i)===JSON.stringify(e))),this.actions$.pipe(H(Ua),F(this.destroy$)).subscribe(()=>{let i=this.lastResetDevice?"Alle Messungen wurden gel\xF6scht (inkl. Ger\xE4t)":"Alle Messungen wurden gel\xF6scht (nur Datenbank)";this.snackBar.open(i,"OK",{duration:3e3})}),this.actions$.pipe(H(gs),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim L\xF6schen der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H($a),F(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Kontinuierlicher Modus aktiviert":"Kontinuierlicher Modus deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(H(bs),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des kontinuierlichen Modus","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H(ys),F(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Automatischer Import aktiviert (alle 5 Sekunden)":"Automatischer Import deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(H(Ss),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des automatischen Imports","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H(vh),F(this.destroy$)).subscribe(()=>{this.snackBar.open("Messungen erfolgreich mit Teilnehmern synchronisiert","OK",{duration:3e3}),this.loadData()}),this.actions$.pipe(H(yh),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Synchronisieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H(Ds),F(this.destroy$)).subscribe(({status:i})=>{console.log("Device status loaded:",i)}),this.actions$.pipe(H(ws),F(this.destroy$)).subscribe(()=>{}),this.actions$.pipe(H(Ps),F(this.destroy$)).subscribe(({connected:i})=>{i&&this.store.dispatch(ia())}),this.actions$.pipe(H(xs),F(this.destroy$)).subscribe(()=>{this.snackBar.open("\xC4ltester Start erfolgreich verworfen","OK",{duration:3e3})}),this.actions$.pipe(H(Es),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Verwerfen des \xE4ltesten Starts","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H($a),F(this.destroy$)).subscribe(()=>{this.store.dispatch(ia())}),this.actions$.pipe(H(Rs),F(this.destroy$)).subscribe(()=>{this.snackBar.open("Messungen erfolgreich exportiert","OK",{duration:3e3})}),this.actions$.pipe(H(ks),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Exportieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(H(Ns),F(this.destroy$)).subscribe(({count:i})=>{this.snackBar.open(`${i} Messung(en) erfolgreich importiert`,"OK",{duration:3e3}),this.loadData()}),this.actions$.pipe(H(Is),F(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Importieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(Cs()),this.store.dispatch(ia()),this.autoRefresh$.pipe(Le(i=>i?td(2e3):At),F(this.destroy$)).subscribe(()=>{this.loadData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?"Automatische Aktualisierung aktiviert":"Automatische Aktualisierung deaktiviert";this.snackBar.open(i,"OK",{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open("Daten wurden aktualisiert","OK",{duration:2e3})}loadData(){this.store.dispatch(Ga()),this.store.dispatch(er()),this.store.dispatch(vi()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString("de-DE")}getParticipantName(i,e){let t=e.find(r=>r.id===i);return t?`${t.firstName} ${t.lastName}`:"-"}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return t>0?`${t}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}openCreateDialog(){this.dialog.open(Fc,{width:"500px"}).afterClosed().pipe(F(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(ms({measurement:e})),this.snackBar.open("Messung erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Fc,{width:"500px",data:i}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(hs({id:i.id,measurement:t})),this.snackBar.open("Messung erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteMeasurement(i){confirm(`M\xF6chten Sie die Messung #${i.id} wirklich l\xF6schen?`)&&(this.store.dispatch(ps({id:i.id})),this.snackBar.open("Messung erfolgreich gel\xF6scht","OK",{duration:3e3}))}onRaceFilterChange(i){this.store.dispatch(ea({id:i}))}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}resetMeasurements(i){confirm(i?"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen? Dies betrifft auch die Messungen auf dem Ger\xE4t!":"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen (nur aus der Datenbank)?")&&(this.lastResetDevice=i,this.store.dispatch(fs({resetDevice:i})))}toggleContinuousMode(i){this.store.dispatch(_s({enable:i}))}toggleScheduledImport(i){this.store.dispatch(vs({enable:i}))}syncMeasurementsToParticipants(){this.store.dispatch(bh()),this.snackBar.open("Synchronisierung gestartet...","OK",{duration:2e3})}discardOldestStart(){confirm("M\xF6chten Sie den \xE4ltesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein L\xE4ufer gest\xFCrzt ist.")&&this.store.dispatch(Ms())}exportMeasurements(){this.store.dispatch(As())}triggerJsonImport(){this.jsonImportInput().nativeElement.value="",this.jsonImportInput().nativeElement.click()}onJsonFileSelected(i){let t=i.target.files?.[0];if(!t)return;let r=new FileReader;r.onload=a=>{try{let o=a.target?.result,l=JSON.parse(o);if(!Array.isArray(l)){this.snackBar.open("Ung\xFCltiges JSON-Format: Array erwartet","OK",{duration:5e3,panelClass:"error-snackbar"});return}this.store.dispatch(Ts({measurements:l}))}catch{this.snackBar.open("Fehler beim Lesen der JSON-Datei","OK",{duration:5e3,panelClass:"error-snackbar"})}},r.readAsText(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-measurement-list"]],viewQuery:function(e,t){e&1&&Ei(t.jsonImportInput,zI,5),e&2&&ui()},decls:105,vars:38,consts:[["jsonImportInput",""],["resetMenu","matMenu"],[1,"title-row"],[1,"sync-status"],["color","primary","matTooltip","Automatische Aktualisierung",3,"ngModelChange","change","ngModel"],["matTooltip","Aktualisiere...",1,"sync-icon","syncing"],[1,"sync-icon",3,"matTooltip"],[1,"last-update-text"],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],[1,"header-actions"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent","matTooltip","Messungen mit Teilnehmern synchronisieren",3,"click"],["mat-raised-button","","matTooltip","Alle Messungen als JSON-Datei herunterladen",3,"click"],["mat-raised-button","","matTooltip","Messungen aus JSON-Datei importieren",3,"click"],["type","file","accept",".json,application/json",2,"display","none",3,"change"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren",1,"active-mode"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren"],["mat-raised-button","","color","warn","matTooltip","\xC4ltesten Start verwerfen (bei Sturz des L\xE4ufers)"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)",1,"active-mode"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)"],[1,"button-group","reset-group"],["mat-raised-button","","color","warn","matTooltip","Alle Messungen zur\xFCcksetzen",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"loading-overlay"],["mat-table","",1,"measurement-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","participant"],["matColumnDef","duration"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren",1,"active-mode",3,"click"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren",3,"click"],["mat-raised-button","","color","warn","matTooltip","\xC4ltesten Start verwerfen (bei Sturz des L\xE4ufers)",3,"click"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)",1,"active-mode",3,"click"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)",3,"click"],["diameter","30"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1){let r=Ge();d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title")(3,"div",2)(4,"span"),m(5,"Messungen"),u(),d(6,"div",3)(7,"mat-slide-toggle",4),no("ngModelChange",function(o){return he(r),to(t.autoRefreshEnabled,o)||(t.autoRefreshEnabled=o),pe(o)}),M("change",function(){return t.onAutoRefreshToggle()}),u(),We(),k(8,UI,2,0,"mat-icon",5),oe(9,"async"),On(10,$I,2,2,"mat-icon",6),d(11,"span",7),m(12),u()()()()(),d(13,"mat-card-content")(14,"div",8)(15,"mat-form-field",9)(16,"mat-label"),m(17,"Nach Rennen filtern"),u(),d(18,"mat-select",10),oe(19,"async"),M("selectionChange",function(o){return t.onRaceFilterChange(o.value)}),d(20,"mat-option",11),m(21,"Alle Rennen"),u(),_t(22,HI,2,3,"mat-option",11,GI),oe(24,"async"),u()()(),d(25,"div",12)(26,"div",13)(27,"button",14),M("click",function(){return t.openCreateDialog()}),d(28,"mat-icon"),m(29,"add"),u(),m(30," Neue Messung "),u(),d(31,"button",15),M("click",function(){return t.manualRefresh()}),d(32,"mat-icon"),m(33,"refresh"),u(),m(34," Manuell aktualisieren "),u()(),d(35,"div",13)(36,"button",16),M("click",function(){return t.syncMeasurementsToParticipants()}),d(37,"mat-icon"),m(38,"sync"),u(),m(39," Sync zu Teilnehmern "),u()(),d(40,"div",13)(41,"button",17),M("click",function(){return t.exportMeasurements()}),d(42,"mat-icon"),m(43,"download"),u(),m(44," JSON Export "),u(),d(45,"button",18),M("click",function(){return t.triggerJsonImport()}),d(46,"mat-icon"),m(47,"upload"),u(),m(48," JSON Import "),u(),d(49,"input",19,0),M("change",function(o){return t.onJsonFileSelected(o)}),u()(),d(51,"div",13),k(52,WI,4,0,"button",20),oe(53,"async"),On(54,qI,4,0,"button",21),k(55,YI,4,0,"button",22),oe(56,"async"),u(),d(57,"div",13),k(58,KI,4,0,"button",23),oe(59,"async"),On(60,XI,4,0,"button",24),u(),d(61,"div",25)(62,"button",26)(63,"mat-icon"),m(64,"delete_sweep"),u(),m(65," Zur\xFCcksetzen "),d(66,"mat-icon"),m(67,"arrow_drop_down"),u()(),d(68,"mat-menu",null,1)(70,"button",27),M("click",function(){return t.resetMeasurements(!1)}),d(71,"mat-icon"),m(72,"delete_sweep"),u(),d(73,"span"),m(74,"Alle Messungen l\xF6schen (nur Datenbank)"),u()(),d(75,"button",27),M("click",function(){return t.resetMeasurements(!0)}),d(76,"mat-icon"),m(77,"delete_forever"),u(),d(78,"span"),m(79,"Alle l\xF6schen (inkl. Ger\xE4t)"),u()()()()(),k(80,ZI,2,0,"div",28),oe(81,"async"),d(82,"table",29),oe(83,"async"),oe(84,"async"),ye(85,30),X(86,QI,2,0,"th",31)(87,JI,2,1,"td",32),Se(),ye(88,33),X(89,eO,2,0,"th",31)(90,tO,2,1,"td",32),Se(),ye(91,34),X(92,nO,2,0,"th",31)(93,iO,2,1,"td",32),Se(),ye(94,35),X(95,rO,2,0,"th",31)(96,aO,3,4,"td",32),Se(),ye(97,36),X(98,oO,2,0,"th",31)(99,sO,7,0,"td",32),Se(),X(100,lO,1,0,"tr",37)(101,cO,1,0,"tr",38),u(),d(102,"div",39),m(103),oe(104,"async"),u()()()}if(e&2){let r=vt(69);h(7),eo("ngModel",t.autoRefreshEnabled),qe(),h(),T(ue(9,16,t.loading$)?8:10),h(4),fe(t.lastUpdate),h(6),w("value",ue(19,18,t.selectedRaceId$)),h(2),w("value",null),h(2),bt(ue(24,20,t.races$)),h(30),T(ue(53,22,t.deviceStatus$)==="continuous"?52:54),h(3),T(ue(56,24,t.deviceStatus$)==="normal"?55:-1),h(3),T(ue(59,26,t.scheduledImportEnabled$)?58:60),h(4),w("matMenuTriggerFor",r),h(18),T(ue(81,28,t.loading$)?80:-1),h(2),j("loading",ue(83,30,t.loading$)),w("dataSource",ue(84,32,t.measurementsWithParticipants$)||Br(36,pD)),h(18),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns),h(2),_e(" Anzahl der Messungen: ",(ue(104,34,t.measurementsWithParticipants$)||Br(37,pD)).length," ")}},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,ZC,QC,C_,Lo,pr,Tr,Po,Mm,pC,gn,d_,li,wt,Ct,Gi,kt,gt,ft,_a],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:16px;position:relative;flex-wrap:wrap;align-items:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:8px;padding-right:16px;border-right:1px solid rgba(0,0,0,.12)}.button-group[_ngcontent-%COMP%]:last-child{border-right:none}.reset-group[_ngcontent-%COMP%]{margin-left:auto;padding-right:0}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.menu-section-header[_ngcontent-%COMP%]{opacity:.7;cursor:default!important}.menu-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}.header-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:8px}.button-group[_ngcontent-%COMP%]{flex-wrap:wrap;padding-right:0;border-right:none;border-bottom:1px solid rgba(0,0,0,.12);padding-bottom:8px}.button-group[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.reset-group[_ngcontent-%COMP%]{margin-left:0}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;font-size:12px}mat-form-field[_ngcontent-%COMP%]{min-width:100%;width:100%}.measurement-table[_ngcontent-%COMP%]{font-size:12px}}"]})};var Ha=y("[AgeGroup] Load AgeGroups"),xh=y("[AgeGroup] Load AgeGroups Success",C()),Eh=y("[AgeGroup] Load AgeGroups Failure",C()),Ah=y("[AgeGroup] Load AgeGroup",C()),Rh=y("[AgeGroup] Load AgeGroup Success",C()),kh=y("[AgeGroup] Load AgeGroup Failure",C()),Ls=y("[AgeGroup] Create AgeGroup",C()),Th=y("[AgeGroup] Create AgeGroup Success",C()),Nh=y("[AgeGroup] Create AgeGroup Failure",C()),Bs=y("[AgeGroup] Update AgeGroup",C()),Ih=y("[AgeGroup] Update AgeGroup Success",C()),Oh=y("[AgeGroup] Update AgeGroup Failure",C()),Vs=y("[AgeGroup] Delete AgeGroup",C()),Fh=y("[AgeGroup] Delete AgeGroup Success",C()),Ph=y("[AgeGroup] Delete AgeGroup Failure",C()),fD=y("[AgeGroup] Select AgeGroup",C());var Lh=Vn("ageGroup"),E_=be(Lh,n=>n.ageGroups),gD=be(Lh,n=>n.loading),QY=be(Lh,n=>n.error),dO=be(Lh,n=>n.selectedAgeGroupId),JY=be(E_,dO,(n,i)=>i?n.find(e=>e.id===i):null);var mO=(n,i)=>i.value;function hO(n,i){n&1&&(d(0,"mat-error"),m(1,"Name ist erforderlich"),u())}function pO(n,i){if(n&1&&(d(0,"mat-option",5),m(1),u()),n&2){let e=i.$implicit;w("value",e.value),h(),fe(e.label)}}function fO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geschlecht ist erforderlich"),u())}function gO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr von ist erforderlich"),u())}function _O(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr muss mindestens 1900 sein"),u())}function bO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr darf maximal 2100 sein"),u())}function vO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr bis ist erforderlich"),u())}function yO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr muss mindestens 1900 sein"),u())}function SO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr darf maximal 2100 sein"),u())}function CO(n,i){n&1&&(d(0,"mat-error"),m(1,"Geburtsjahr bis muss gr\xF6\xDFer oder gleich Geburtsjahr von sein"),u())}var Pc=class n{fb=s(ri);dialogRef=s(ln);data=s(bi);form;genderOptions=[{value:"MALE",label:Ji.MALE},{value:"FEMALE",label:Ji.FEMALE},{value:"BOTH",label:Ji.BOTH}];constructor(){this.form=this.fb.group({name:[this.data?.name||"",xe.required],gender:[this.data?.gender||"",xe.required],birthYearFrom:[this.data?.birthYearFrom||"",[xe.required,xe.min(1900),xe.max(2100)]],birthYearTo:[this.data?.birthYearTo||"",[xe.required,xe.min(1900),xe.max(2100)]]},{validators:this.yearRangeValidator})}yearRangeValidator(i){let e=i.get("birthYearFrom")?.value,t=i.get("birthYearTo")?.value;return e&&t&&e>t?{yearRange:!0}:null}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,gender:i.gender,birthYearFrom:Number(i.birthYearFrom),birthYearTo:Number(i.birthYearTo)};this.dialogRef.close(e)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-age-group-dialog"]],decls:44,vars:12,consts:[["mat-dialog-title",""],[1,"age-group-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["formControlName","gender","required",""],[3,"value"],["matInput","","type","number","formControlName","birthYearFrom","required","","min","1900","max","2100"],["matInput","","type","number","formControlName","birthYearTo","required","","min","1900","max","2100"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(d(0,"h2",0),m(1),u(),d(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Name"),u(),I(7,"input",3),We(),k(8,hO,2,0,"mat-error"),d(9,"mat-hint"),m(10,'z.B. "Herren allgemein" oder "Damen U18"'),u()(),d(11,"mat-form-field",2)(12,"mat-label"),m(13,"Geschlecht"),u(),d(14,"mat-select",4),_t(15,pO,2,2,"mat-option",5,mO),u(),We(),k(17,fO,2,0,"mat-error"),d(18,"mat-hint"),m(19,"F\xFCr welches Geschlecht gilt diese Altersgruppe?"),u()(),d(20,"mat-form-field",2)(21,"mat-label"),m(22,"Geburtsjahr von"),u(),I(23,"input",6),We(),k(24,gO,2,0,"mat-error"),k(25,_O,2,0,"mat-error"),k(26,bO,2,0,"mat-error"),d(27,"mat-hint"),m(28,"Startzeitpunkt der Altersspanne (z.B. 1985)"),u()(),d(29,"mat-form-field",2)(30,"mat-label"),m(31,"Geburtsjahr bis"),u(),I(32,"input",7),We(),k(33,vO,2,0,"mat-error"),k(34,yO,2,0,"mat-error"),k(35,SO,2,0,"mat-error"),k(36,CO,2,0,"mat-error"),d(37,"mat-hint"),m(38,"Endzeitpunkt der Altersspanne (z.B. 2000)"),u()()()(),d(39,"mat-dialog-actions",8)(40,"button",9),M("click",function(){return t.onCancel()}),m(41,"Abbrechen"),u(),d(42,"button",10),M("click",function(){return t.onSave()}),m(43," Speichern "),u()()),e&2&&(h(),_e(" ",t.data?"Altersgruppe bearbeiten":"Neue Altersgruppe"," "),h(2),w("formGroup",t.form),h(4),qe(),h(),T(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?8:-1),h(6),qe(),h(),bt(t.genderOptions),h(2),T(t.form.get("gender")?.hasError("required")&&t.form.get("gender")?.touched?17:-1),h(6),qe(),h(),T(t.form.get("birthYearFrom")?.hasError("required")&&t.form.get("birthYearFrom")?.touched?24:-1),h(),T(t.form.get("birthYearFrom")?.hasError("min")?25:-1),h(),T(t.form.get("birthYearFrom")?.hasError("max")?26:-1),h(6),qe(),h(),T(t.form.get("birthYearTo")?.hasError("required")&&t.form.get("birthYearTo")?.touched?33:-1),h(),T(t.form.get("birthYearTo")?.hasError("min")?34:-1),h(),T(t.form.get("birthYearTo")?.hasError("max")?35:-1),h(),T(t.form.hasError("yearRange")?36:-1),h(6),w("disabled",!t.form.valid))},dependencies:[et,ai,ii,pn,Nr,gn,ni,fn,Va,yc,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,Di,kn,si,oi,Ye,Qe,li,Gi,kt],styles:[".age-group-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function DO(n,i){n&1&&(d(0,"div",3),I(1,"mat-spinner"),u())}function wO(n,i){n&1&&(d(0,"th",16),m(1,"ID"),u())}function MO(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.id)}}function xO(n,i){n&1&&(d(0,"th",16),m(1,"Name"),u())}function EO(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.name," ")}}function AO(n,i){n&1&&(d(0,"th",16),m(1," Geschlecht "),u())}function RO(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit,t=O();h(),_e(" ",t.getGenderLabel(e.gender)," ")}}function kO(n,i){n&1&&(d(0,"th",16),m(1," Geburtsjahr von "),u())}function TO(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.birthYearFrom," ")}}function NO(n,i){n&1&&(d(0,"th",16),m(1," Geburtsjahr bis "),u())}function IO(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.birthYearTo," ")}}function OO(n,i){n&1&&(d(0,"th",18),m(1,"Aktionen"),u())}function FO(n,i){if(n&1){let e=Ge();d(0,"td",17)(1,"button",19),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.openEditDialog(r))}),d(2,"mat-icon"),m(3,"edit"),u()(),d(4,"button",20),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteAgeGroup(r))}),d(5,"mat-icon"),m(6,"delete"),u()()()}}function PO(n,i){n&1&&I(0,"tr",21)}function LO(n,i){n&1&&I(0,"tr",22)}var Bh=class n{store=s(He);dialog=s(ei);snackBar=s(An);destroy$=new E;ageGroups$;loading$;displayedColumns=["id","name","gender","birthYearFrom","birthYearTo","actions"];dataSource=new fr([]);sortInitialized=!1;sort=Sn.required(xt);constructor(){this.ageGroups$=this.store.select(E_),this.loading$=this.store.select(gD),Dt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(F(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(Ha()),this.ageGroups$.pipe(F(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return Ji[i]||i}openCreateDialog(){this.dialog.open(Pc,{width:"500px"}).afterClosed().pipe(F(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(Ls({ageGroup:e})),this.snackBar.open("Altersgruppe erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Pc,{width:"500px",data:i}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(Bs({id:i.id,ageGroup:t})),this.snackBar.open("Altersgruppe erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteAgeGroup(i){confirm(`M\xF6chten Sie die Altersgruppe "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(Vs({id:i.id})),this.snackBar.open("Altersgruppe erfolgreich gel\xF6scht","OK",{duration:3e3}))}refreshData(){this.store.dispatch(Ha()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-age-group-list"]],viewQuery:function(e,t){e&1&&Ei(t.sort,xt,5),e&2&&ui()},decls:38,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"age-group-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","gender"],["matColumnDef","birthYearFrom"],["matColumnDef","birthYearTo"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Altersgruppen"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"button",1),M("click",function(){return t.openCreateDialog()}),d(7,"mat-icon"),m(8,"add"),u(),m(9," Neue Altersgruppe "),u(),d(10,"button",2),M("click",function(){return t.refreshData()}),d(11,"mat-icon"),m(12,"refresh"),u(),m(13," Aktualisieren "),u()(),k(14,DO,2,0,"div",3),oe(15,"async"),d(16,"table",4),oe(17,"async"),ye(18,5),X(19,wO,2,0,"th",6)(20,MO,2,1,"td",7),Se(),ye(21,8),X(22,xO,2,0,"th",6)(23,EO,2,1,"td",7),Se(),ye(24,9),X(25,AO,2,0,"th",6)(26,RO,2,1,"td",7),Se(),ye(27,10),X(28,kO,2,0,"th",6)(29,TO,2,1,"td",7),Se(),ye(30,11),X(31,NO,2,0,"th",6)(32,IO,2,1,"td",7),Se(),ye(33,12),X(34,OO,2,0,"th",13)(35,FO,7,0,"td",7),Se(),X(36,PO,1,0,"tr",14)(37,LO,1,0,"tr",15),u()()()),e&2&&(h(14),T(ue(15,6,t.loading$)?14:-1),h(2),j("hidden",ue(17,8,t.loading$)),w("dataSource",t.dataSource),h(20),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns))},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,Jr,xt,Qr,ft],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.age-group-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};function BO(n,i){n&1&&(d(0,"mat-error"),m(1,"Name ist erforderlich"),u())}var Lc=class n{fb=s(ri);dialogRef=s(ln);data=s(bi);form;constructor(){this.form=this.fb.group({name:[this.data?.name||"",xe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i={name:this.form.value.name};this.dialogRef.close(i)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-team-dialog"]],decls:16,vars:4,consts:[["mat-dialog-title",""],[1,"team-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(d(0,"h2",0),m(1),u(),d(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Name"),u(),I(7,"input",3),We(),k(8,BO,2,0,"mat-error"),d(9,"mat-hint"),m(10,'z.B. "SC Musterhausen"'),u()()()(),d(11,"mat-dialog-actions",4)(12,"button",5),M("click",function(){return t.onCancel()}),m(13,"Abbrechen"),u(),d(14,"button",6),M("click",function(){return t.onSave()}),m(15," Speichern "),u()()),e&2&&(h(),_e(" ",t.data?"Team bearbeiten":"Neues Team"," "),h(2),w("formGroup",t.form),h(4),qe(),h(),T(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?8:-1),h(6),w("disabled",!t.form.valid))},dependencies:[et,ai,ii,pn,gn,ni,fn,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,Di,kn,si,oi,Ye,Qe],styles:[".team-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function VO(n,i){n&1&&(d(0,"div",3),I(1,"mat-spinner"),u())}function jO(n,i){n&1&&(d(0,"th",13),m(1,"ID"),u())}function zO(n,i){if(n&1&&(d(0,"td",14),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.id)}}function GO(n,i){n&1&&(d(0,"th",13),m(1,"Name"),u())}function UO(n,i){if(n&1&&(d(0,"td",14),m(1),u()),n&2){let e=i.$implicit;h(),_e(" ",e.name," ")}}function $O(n,i){n&1&&(d(0,"th",15),m(1,"Aktionen"),u())}function HO(n,i){if(n&1){let e=Ge();d(0,"td",14)(1,"button",16),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.openEditDialog(r))}),d(2,"mat-icon"),m(3,"edit"),u()(),d(4,"button",17),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteTeam(r))}),d(5,"mat-icon"),m(6,"delete"),u()()()}}function WO(n,i){n&1&&I(0,"tr",18)}function qO(n,i){n&1&&I(0,"tr",19)}var Vh=class n{store=s(He);dialog=s(ei);snackBar=s(An);destroy$=new E;teams$;loading$;displayedColumns=["id","name","actions"];dataSource=new fr([]);sortInitialized=!1;sort=Sn.required(xt);constructor(){this.teams$=this.store.select($m),this.loading$=this.store.select(KC),Dt(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(Or()),this.teams$.pipe(F(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Lc,{width:"500px"}).afterClosed().pipe(F(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(cs({team:e})),this.snackBar.open("Team erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Lc,{width:"500px",data:i}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(ds({id:i.id,team:t})),this.snackBar.open("Team erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteTeam(i){confirm(`M\xF6chten Sie das Team "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(us({id:i.id})),this.snackBar.open("Team erfolgreich gel\xF6scht","OK",{duration:3e3}))}refreshData(){this.store.dispatch(Or()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-team-list"]],viewQuery:function(e,t){e&1&&Ei(t.sort,xt,5),e&2&&ui()},decls:29,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"team-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Teams"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"button",1),M("click",function(){return t.openCreateDialog()}),d(7,"mat-icon"),m(8,"add"),u(),m(9," Neues Team "),u(),d(10,"button",2),M("click",function(){return t.refreshData()}),d(11,"mat-icon"),m(12,"refresh"),u(),m(13," Aktualisieren "),u()(),k(14,VO,2,0,"div",3),oe(15,"async"),d(16,"table",4),oe(17,"async"),ye(18,5),X(19,jO,2,0,"th",6)(20,zO,2,1,"td",7),Se(),ye(21,8),X(22,GO,2,0,"th",6)(23,UO,2,1,"td",7),Se(),ye(24,9),X(25,$O,2,0,"th",10)(26,HO,7,0,"td",7),Se(),X(27,WO,1,0,"tr",11)(28,qO,1,0,"tr",12),u()()()),e&2&&(h(14),T(ue(15,6,t.loading$)?14:-1),h(2),j("hidden",ue(17,8,t.loading$)),w("dataSource",t.dataSource),h(11),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns))},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,Jr,xt,Qr,ft],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.team-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var Bc=(e=>(e.LOS="LOS",e.TEAM="TEAM",e))(Bc||{}),Vc={LOS:"Los-Modus",TEAM:"Mannschaftswertung"};var js=y("[GaudiMode] Load GaudiModes",C()),jh=y("[GaudiMode] Load GaudiModes Success",C()),zh=y("[GaudiMode] Load GaudiModes Failure",C()),zs=y("[GaudiMode] Create GaudiMode",C()),Gh=y("[GaudiMode] Create GaudiMode Success",C()),Uh=y("[GaudiMode] Create GaudiMode Failure",C()),$h=y("[GaudiMode] Update GaudiMode",C()),Hh=y("[GaudiMode] Update GaudiMode Success",C()),Wh=y("[GaudiMode] Update GaudiMode Failure",C()),Gs=y("[GaudiMode] Delete GaudiMode",C()),qh=y("[GaudiMode] Delete GaudiMode Success",C()),Yh=y("[GaudiMode] Delete GaudiMode Failure",C()),Kh=y("[GaudiMode] Select GaudiMode",C()),Us=y("[GaudiMode] Draw Pairing",C()),$s=y("[GaudiMode] Load Pairing",C()),jc=y("[GaudiMode] Pairing Success",C()),zc=y("[GaudiMode] Pairing Failure",C()),Hs=y("[GaudiMode] Load Ranking",C()),Xh=y("[GaudiMode] Load Ranking Success",C()),Zh=y("[GaudiMode] Load Ranking Failure",C()),Ws=y("[GaudiMode] Export Pdf",C()),Gc=y("[GaudiMode] Export Pdf Success",C()),Qh=y("[GaudiMode] Export Pdf Failure",C());var Wa=Vn("gaudiMode"),_D=be(Wa,n=>n.gaudiModes),bD=be(Wa,n=>n.loading),vD=be(Wa,n=>n.pdfExportLoading),_X=be(Wa,n=>n.error),YO=be(Wa,n=>n.selectedGaudiModeId),yD=be(_D,YO,(n,i)=>i?n.find(e=>e.id===i)??null:null),A_=n=>be(_D,i=>n?i.filter(e=>e.raceId===n):i),SD=be(Wa,n=>n.pairing),CD=be(Wa,n=>n.ranking);var KO=(n,i)=>i.id,XO=(n,i)=>i.value;function ZO(n,i){if(n&1&&(d(0,"mat-option",4),m(1),u()),n&2){let e=i.$implicit;w("value",e.id),h(),fe(e.name)}}function QO(n,i){n&1&&(d(0,"mat-error"),m(1,"Rennen ist erforderlich"),u())}function JO(n,i){if(n&1&&(d(0,"mat-option",4),m(1),u()),n&2){let e=i.$implicit;w("value",e.value),h(),fe(e.label)}}function eF(n,i){n&1&&(d(0,"mat-error"),m(1,"Name ist erforderlich"),u())}function tF(n,i){n&1&&(d(0,"mat-error"),m(1,"Teamgr\xF6\xDFe ist erforderlich"),u())}function nF(n,i){if(n&1&&(d(0,"mat-form-field",2)(1,"mat-label"),m(2,"Teilnehmer pro Team"),u(),I(3,"input",10),We(),k(4,tF,2,0,"mat-error"),d(5,"mat-hint"),m(6,"Anzahl der schnellsten Teammitglieder, die gewertet werden"),u()()),n&2){let e=O();h(3),qe(),h(),T(e.form.get("teamSize")?.hasError("required")&&e.form.get("teamSize")?.touched?4:-1)}}var ep=class n{fb=s(ri);dialogRef=s(ln);store=s(He);data=s(bi);races$=this.store.select(yi);gaudiModeType=Bc;typeOptions=[{value:"LOS",label:Vc.LOS},{value:"TEAM",label:Vc.TEAM}];form=this.fb.group({raceId:[this.data?.raceId||"",xe.required],type:["LOS",xe.required],name:["",xe.required],teamSize:[5]});onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={raceId:Number(i.raceId),type:i.type,name:i.name,teamSize:i.type==="TEAM"?Number(i.teamSize):void 0};this.dialogRef.close(e)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-gaudi-mode-dialog"]],decls:31,vars:7,consts:[["mat-dialog-title",""],[1,"gaudi-mode-form",3,"formGroup"],["appearance","outline"],["formControlName","raceId","required",""],[3,"value"],["formControlName","type","required",""],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],["matInput","","type","number","formControlName","teamSize","required","","min","1"]],template:function(e,t){e&1&&(d(0,"h2",0),m(1,"Neuer Gaudi-Modus"),u(),d(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),m(6,"Rennen"),u(),d(7,"mat-select",3),_t(8,ZO,2,2,"mat-option",4,KO),oe(10,"async"),u(),We(),k(11,QO,2,0,"mat-error"),u(),d(12,"mat-form-field",2)(13,"mat-label"),m(14,"Modus"),u(),d(15,"mat-select",5),_t(16,JO,2,2,"mat-option",4,XO),u(),We(),u(),d(18,"mat-form-field",2)(19,"mat-label"),m(20,"Name"),u(),I(21,"input",6),We(),k(22,eF,2,0,"mat-error"),d(23,"mat-hint"),m(24,'z.B. "Los-Wertung Herbstrennen"'),u()(),k(25,nF,7,1,"mat-form-field",2),u()(),d(26,"mat-dialog-actions",7)(27,"button",8),M("click",function(){return t.onCancel()}),m(28,"Abbrechen"),u(),d(29,"button",9),M("click",function(){return t.onSave()}),m(30," Erstellen "),u()()),e&2&&(h(3),w("formGroup",t.form),h(4),qe(),h(),bt(ue(10,5,t.races$)),h(3),T(t.form.get("raceId")?.hasError("required")&&t.form.get("raceId")?.touched?11:-1),h(4),qe(),h(),bt(t.typeOptions),h(5),qe(),h(),T(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?22:-1),h(3),T(t.form.value.type===t.gaudiModeType.TEAM?25:-1),h(4),w("disabled",!t.form.valid))},dependencies:[et,ai,ii,pn,Nr,gn,ni,fn,Va,Tt,Rn,yt,Bi,ji,Vi,gt,wt,Ct,Di,kn,si,oi,Ye,Qe,li,Gi,kt,ft],styles:[".gaudi-mode-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var wD=()=>[];function iF(n,i){if(n&1&&m(0),n&2){let e=O();_e(" \u2013 ",e.gaudiMode.teamSize," Teilnehmer pro Team ")}}function rF(n,i){n&1&&(d(0,"th",14),m(1,"Teilnehmer 1"),u())}function aF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.participant1Name)}}function oF(n,i){n&1&&(d(0,"th",14),m(1,"Teilnehmer 2"),u())}function sF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.participant2Name||"(Einzel)")}}function lF(n,i){n&1&&I(0,"tr",16)}function cF(n,i){n&1&&I(0,"tr",17)}function dF(n,i){if(n&1&&(d(0,"table",5),oe(1,"async"),ye(2,8),X(3,rF,2,0,"th",9)(4,aF,2,1,"td",10),Se(),ye(5,11),X(6,oF,2,0,"th",9)(7,sF,2,1,"td",10),Se(),X(8,lF,1,0,"tr",12)(9,cF,1,0,"tr",13),u()),n&2){let e=O(2);w("dataSource",ue(1,3,e.pairing$)||Br(5,wD)),h(8),w("matHeaderRowDef",e.pairingColumns),h(),w("matRowDefColumns",e.pairingColumns)}}function uF(n,i){n&1&&(d(0,"p",6),m(1,"Noch keine Zulosung vorhanden."),u())}function mF(n,i){if(n&1){let e=Ge();d(0,"div",1)(1,"button",7),M("click",function(){he(e);let r=O();return pe(r.draw())}),d(2,"mat-icon"),m(3,"casino"),u(),m(4),oe(5,"async"),u()(),k(6,dF,10,6,"table",5),oe(7,"async"),On(8,uF,2,0,"p",6)}if(n&2){let e=O();h(4),_e(" ",ue(5,2,e.pairing$)?.length?"Neu auslosen":"Auslosen"," "),h(2),T(ue(7,4,e.pairing$)?.length?6:8)}}function hF(n,i){n&1&&I(0,"mat-spinner",4)}function pF(n,i){n&1&&(d(0,"mat-icon"),m(1,"picture_as_pdf"),u())}function fF(n,i){n&1&&(d(0,"th",14),m(1,"Platz"),u())}function gF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.place)}}function _F(n,i){if(n&1&&(d(0,"th",14),m(1),u()),n&2){let e=O(2);h(),_e(" ",e.gaudiMode.type===e.gaudiModeType.LOS?"Paarung":"Mannschaft"," ")}}function bF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.label)}}function vF(n,i){if(n&1&&(d(0,"th",14),m(1),u()),n&2){let e=O(2);h(),_e(" ",e.gaudiMode.type===e.gaudiModeType.LOS?"\xD8-Zeit Paar":"Gesamtzeit"," ")}}function yF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit,t=O(2);h(),fe(t.formatDuration(e.valueMs))}}function SF(n,i){n&1&&(d(0,"th",14),m(1,"\xD8-Zeit Gesamt"),u())}function CF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit,t=O(2);h(),fe(t.formatDuration(e.referenceMs))}}function DF(n,i){n&1&&(d(0,"th",14),m(1,"Abweichung"),u())}function wF(n,i){if(n&1&&(d(0,"td",15),m(1),u()),n&2){let e=i.$implicit,t=O(2);h(),fe(t.formatDuration(e.diffMs))}}function MF(n,i){n&1&&I(0,"tr",16)}function xF(n,i){n&1&&I(0,"tr",17)}function EF(n,i){if(n&1&&(d(0,"table",5),oe(1,"async"),ye(2,18),X(3,fF,2,0,"th",9)(4,gF,2,1,"td",10),Se(),ye(5,19),X(6,_F,2,1,"th",9)(7,bF,2,1,"td",10),Se(),ye(8,20),X(9,vF,2,1,"th",9)(10,yF,2,1,"td",10),Se(),ye(11,21),X(12,SF,2,0,"th",9)(13,CF,2,1,"td",10),Se(),ye(14,22),X(15,DF,2,0,"th",9)(16,wF,2,1,"td",10),Se(),X(17,MF,1,0,"tr",12)(18,xF,1,0,"tr",13),u()),n&2){let e=O();w("dataSource",ue(1,3,e.ranking$)||Br(5,wD)),h(17),w("matHeaderRowDef",e.rankingColumns),h(),w("matRowDefColumns",e.rankingColumns)}}function AF(n,i){n&1&&(d(0,"p",6),m(1,"Noch keine Wertung berechnet."),u())}var tp=class n{store=s(He);snackBar=s(An);destroy$=new E;gaudiMode;gaudiModeType=Bc;pairingColumns=["participant1","participant2"];rankingColumns=[];pairing$=this.store.select(SD);ranking$=this.store.select(CD);pdfExportLoading$=this.store.select(vD);ngOnChanges(){this.rankingColumns=this.gaudiMode.type==="LOS"?["place","label","valueMs","referenceMs","diffMs"]:["place","label","valueMs"],this.gaudiMode.type==="LOS"&&this.store.dispatch($s({id:this.gaudiMode.id}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}draw(){this.store.dispatch(Us({id:this.gaudiMode.id})),this.snackBar.open("Auslosung wird durchgef\xFChrt...","OK",{duration:2e3})}loadRanking(){this.store.dispatch(Hs({id:this.gaudiMode.id}))}exportPdf(){this.store.dispatch(Ws({id:this.gaudiMode.id,filename:`gaudi_${this.gaudiMode.name.replace(/\s+/g,"_").toLowerCase()}.pdf`})),this.snackBar.open("PDF Export gestartet","OK",{duration:2e3})}formatDuration(i){if(i==null)return"-";let e=Math.floor(i/1e3),t=Math.floor(e/60),r=e%60,a=i%1e3;return`${t}:${String(r).padStart(2,"0")}.${String(a).padStart(3,"0")}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-gaudi-mode-detail"]],inputs:{gaudiMode:"gaudiMode"},features:[Oe],decls:23,vars:13,consts:[[1,"detail-card"],[1,"section-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],["diameter","20",2,"display","inline-block","margin-right","8px"],["mat-table","",1,"detail-table",3,"dataSource"],[1,"hint"],["mat-raised-button","","color","primary",3,"click"],["matColumnDef","participant1"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","participant2"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["matColumnDef","place"],["matColumnDef","label"],["matColumnDef","valueMs"],["matColumnDef","referenceMs"],["matColumnDef","diffMs"]],template:function(e,t){e&1&&(d(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),m(3),u(),d(4,"mat-card-subtitle"),m(5),k(6,iF,1,1),u()(),d(7,"mat-card-content"),k(8,mF,9,6),d(9,"div",1)(10,"button",2),M("click",function(){return t.loadRanking()}),d(11,"mat-icon"),m(12,"leaderboard"),u(),m(13," Wertung anzeigen "),u(),d(14,"button",3),oe(15,"async"),M("click",function(){return t.exportPdf()}),k(16,hF,1,0,"mat-spinner",4),oe(17,"async"),On(18,pF,2,0,"mat-icon"),m(19," PDF Export "),u()(),k(20,EF,19,6,"table",5),oe(21,"async"),On(22,AF,2,0,"p",6),u()()),e&2&&(h(3),fe(t.gaudiMode.name),h(2),_e(" ",t.gaudiMode.type===t.gaudiModeType.LOS?"Los-Modus":"Mannschaftswertung"," "),h(),T(t.gaudiMode.type===t.gaudiModeType.TEAM?6:-1),h(2),T(t.gaudiMode.type===t.gaudiModeType.LOS?8:-1),h(6),w("disabled",ue(15,7,t.pdfExportLoading$)),h(2),T(ue(17,9,t.pdfExportLoading$)?16:18),h(4),T(ue(21,11,t.ranking$)?.length?20:22))},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,Wt,Ht,hn,cn,un,mn,TS,dn,sn,on,an,ti,ft],styles:[".detail-card[_ngcontent-%COMP%]{margin-top:20px}.section-actions[_ngcontent-%COMP%]{display:flex;gap:10px;margin:16px 0}.detail-table[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.hint[_ngcontent-%COMP%]{color:#0009;font-style:italic}"]})};var RF=()=>[],kF=(n,i)=>i.id;function TF(n,i){if(n&1&&(d(0,"mat-option",3),m(1),u()),n&2){let e=i.$implicit;w("value",e.id),h(),fe(e.name)}}function NF(n,i){n&1&&(d(0,"div",5),I(1,"mat-spinner"),u())}function IF(n,i){n&1&&(d(0,"th",16),m(1,"Name"),u())}function OF(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.name)}}function FF(n,i){n&1&&(d(0,"th",16),m(1,"Modus"),u())}function PF(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit,t=O();h(),fe(t.getTypeLabel(e.type))}}function LF(n,i){n&1&&(d(0,"th",16),m(1,"Teamgr\xF6\xDFe"),u())}function BF(n,i){if(n&1&&(d(0,"td",17),m(1),u()),n&2){let e=i.$implicit;h(),fe(e.teamSize||"-")}}function VF(n,i){n&1&&(d(0,"th",16),m(1,"Aktionen"),u())}function jF(n,i){if(n&1){let e=Ge();d(0,"td",17)(1,"button",18),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.selectGaudiMode(r))}),d(2,"mat-icon"),m(3,"visibility"),u(),m(4," Anzeigen "),u(),d(5,"button",19),M("click",function(){let r=he(e).$implicit,a=O();return pe(a.deleteGaudiMode(r))}),d(6,"mat-icon"),m(7,"delete"),u()()()}}function zF(n,i){n&1&&I(0,"tr",20)}function GF(n,i){n&1&&I(0,"tr",21)}function UF(n,i){n&1&&I(0,"app-gaudi-mode-detail",15),n&2&&w("gaudiMode",i)}var np=class n{store=s(He);dialog=s(ei);snackBar=s(An);destroy$=new E;races$;selectedRaceId$;filteredGaudiModes$;selectedGaudiMode$;loading$;displayedColumns=["name","type","teamSize","actions"];constructor(){this.races$=this.store.select(yi),this.selectedRaceId$=this.store.select(Si),this.loading$=this.store.select(bD),this.selectedGaudiMode$=this.store.select(yD),this.filteredGaudiModes$=this.store.select(A_(null)),this.selectedRaceId$.pipe(F(this.destroy$)).subscribe(i=>{this.filteredGaudiModes$=this.store.select(A_(i))})}ngAfterViewInit(){this.store.dispatch(vi()),this.store.dispatch(js({}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getTypeLabel(i){return Vc[i]||i}onRaceFilterChange(i){this.store.dispatch(ea({id:i}))}openCreateDialog(){this.selectedRaceId$.pipe(Pe(1)).subscribe(i=>{this.dialog.open(ep,{width:"500px",data:{raceId:i}}).afterClosed().pipe(F(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(zs({gaudiMode:t})),this.snackBar.open("Gaudi-Modus erfolgreich erstellt","OK",{duration:3e3}))})})}selectGaudiMode(i){this.store.dispatch(Kh({id:i.id}))}deleteGaudiMode(i){confirm(`M\xF6chten Sie den Gaudi-Modus "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(Gs({id:i.id})),this.snackBar.open("Gaudi-Modus erfolgreich gel\xF6scht","OK",{duration:3e3}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-gaudi-modus"]],decls:40,vars:18,consts:[[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],["mat-raised-button","","color","primary",3,"click"],[1,"loading-container"],["mat-table","",1,"gaudi-mode-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","teamSize"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"gaudiMode"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","matTooltip","Anzeigen",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Gaudi-Modus"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"mat-form-field",1)(7,"mat-label"),m(8,"Nach Rennen filtern"),u(),d(9,"mat-select",2),oe(10,"async"),M("selectionChange",function(a){return t.onRaceFilterChange(a.value)}),d(11,"mat-option",3),m(12,"Alle Rennen"),u(),_t(13,TF,2,2,"mat-option",3,kF),oe(15,"async"),u()(),d(16,"button",4),M("click",function(){return t.openCreateDialog()}),d(17,"mat-icon"),m(18,"add"),u(),m(19," Neuer Gaudi-Modus "),u()(),k(20,NF,2,0,"div",5),oe(21,"async"),d(22,"table",6),oe(23,"async"),ye(24,7),X(25,IF,2,0,"th",8)(26,OF,2,1,"td",9),Se(),ye(27,10),X(28,FF,2,0,"th",8)(29,PF,2,1,"td",9),Se(),ye(30,11),X(31,LF,2,0,"th",8)(32,BF,2,1,"td",9),Se(),ye(33,12),X(34,VF,2,0,"th",8)(35,jF,8,0,"td",9),Se(),X(36,zF,1,0,"tr",13)(37,GF,1,0,"tr",14),u(),k(38,UF,1,1,"app-gaudi-mode-detail",15),oe(39,"async"),u()()),e&2){let r;h(9),w("value",ue(10,7,t.selectedRaceId$)),h(2),w("value",null),h(2),bt(ue(15,9,t.races$)),h(7),T(ue(21,11,t.loading$)?20:-1),h(2),w("dataSource",ue(23,13,t.filteredGaudiModes$)||Br(17,RF)),h(14),w("matHeaderRowDef",t.displayedColumns),h(),w("matRowDefColumns",t.displayedColumns),h(),T((r=ue(39,15,t.selectedGaudiMode$))?38:-1,r)}},dependencies:[et,Jn,Un,Hn,Kn,Wn,$n,Xn,qn,Yn,Zn,Qn,Ye,Qe,$t,Wt,Ht,sn,on,yt,ti,hn,cn,un,mn,dn,an,Xt,li,wt,Ct,Gi,kt,gt,tp,ft],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.gaudi-mode-table[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{margin:20px}mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})};var qs=y("[Auth] Login",C()),Uc=y("[Auth] Login Success",C()),ip=y("[Auth] Login Failure",C()),Ys=y("[Auth] Logout"),$c=y("[Auth] Logout Success"),ra=y("[Auth] Check Auth"),rp=y("[Auth] Check Auth Success",C()),Hc=y("[Auth] Check Auth Failure");var Wc=Vn("auth"),ap=be(Wc,n=>n.isAuthenticated),kZ=be(Wc,n=>n.token),MD=be(Wc,n=>n.username),xD=be(Wc,n=>n.loading),ED=be(Wc,n=>n.error);function $F(n,i){n&1&&(d(0,"mat-icon",15),m(1," wifi "),u()),n&2&&w("matTooltip","Ger\xE4t verbunden")}function HF(n,i){n&1&&(d(0,"mat-icon",16),m(1," wifi_off "),u()),n&2&&w("matTooltip","Ger\xE4t nicht verbunden")}function WF(n,i){if(n&1&&k(0,$F,2,1,"mat-icon",15)(1,HF,2,1,"mat-icon",16),n&2){let e=i;T(e?0:e===!1?1:-1)}}function qF(n,i){n&1&&(d(0,"mat-icon",4),m(1," help_outline "),u()),n&2&&w("matTooltip","Verbindungsstatus unbekannt")}var op=class n{store=s(He);username$;deviceConnected$;constructor(){this.username$=this.store.select(MD),this.deviceConnected$=this.store.select(rD)}ngOnInit(){this.store.dispatch(Os()),this.store.dispatch(Oc())}ngOnDestroy(){this.store.dispatch(Fs())}logout(){this.store.dispatch(Ys())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-dashboard"]],decls:38,vars:7,consts:[["menu","matMenu"],["color","primary"],[1,"spacer"],[1,"connection-status"],[1,"status-icon","unknown",3,"matTooltip"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","","disabled","",1,"user-info"],["mat-menu-item","",3,"click"],[1,"dashboard-container"],["label","Altersgruppen"],["label","Rennen"],["label","Teilnehmer"],["label","Teams"],["label","Messungen"],["label","Gaudi-Modus"],[1,"status-icon","connected",3,"matTooltip"],[1,"status-icon","disconnected",3,"matTooltip"]],template:function(e,t){if(e&1&&(d(0,"mat-toolbar",1)(1,"span"),m(2,"TimeControl - Zeitnahme System"),u(),I(3,"span",2),d(4,"div",3),k(5,WF,2,1),oe(6,"async"),On(7,qF,2,1,"mat-icon",4),u(),d(8,"button",5)(9,"mat-icon"),m(10,"account_circle"),u()(),d(11,"mat-menu",null,0)(13,"div",6)(14,"mat-icon"),m(15,"person"),u(),d(16,"span"),m(17),oe(18,"async"),u()(),d(19,"button",7),M("click",function(){return t.logout()}),d(20,"mat-icon"),m(21,"logout"),u(),d(22,"span"),m(23,"Abmelden"),u()()()(),d(24,"div",8)(25,"mat-tab-group")(26,"mat-tab",9),I(27,"app-age-group-list"),u(),d(28,"mat-tab",10),I(29,"app-race-list"),u(),d(30,"mat-tab",11),I(31,"app-participant-list"),u(),d(32,"mat-tab",12),I(33,"app-team-list"),u(),d(34,"mat-tab",13),I(35,"app-measurement-list"),u(),d(36,"mat-tab",14),I(37,"app-gaudi-modus"),u()()()),e&2){let r,a=vt(12);h(5),T((r=ue(6,3,t.deviceConnected$))?5:7,r),h(3),w("matMenuTriggerFor",a),h(9),fe(ue(18,5,t.username$))}},dependencies:[et,V0,Eg,B0,z0,j0,Ye,$t,Wt,Ht,Lo,pr,Tr,Po,an,Xt,wm,eh,Mh,Bh,Vh,np,ft],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:20px}mat-toolbar[_ngcontent-%COMP%]{margin-bottom:20px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 16px;cursor:default}.connection-status[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:16px}.status-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.status-icon.connected[_ngcontent-%COMP%]{color:#4caf50}.status-icon.disconnected[_ngcontent-%COMP%]{color:#f44336}.status-icon.unknown[_ngcontent-%COMP%]{color:#ff9800}"]})};function YF(n,i){n&1&&(d(0,"mat-error"),m(1,"Benutzername ist erforderlich"),u())}function KF(n,i){n&1&&(d(0,"mat-error"),m(1,"Passwort ist erforderlich"),u())}function XF(n,i){n&1&&(d(0,"div",8)(1,"mat-icon"),m(2,"error"),u(),d(3,"span"),m(4),u()()),n&2&&(h(4),fe(i))}function ZF(n,i){n&1&&(I(0,"mat-spinner",10),d(1,"span"),m(2,"Anmelden..."),u())}function QF(n,i){n&1&&(d(0,"span"),m(1,"Anmelden"),u())}var sp=class n{fb=s(ri);store=s(He);router=s(Oi);destroy$=new E;loginForm;loading$;error$;constructor(){this.loginForm=this.fb.group({username:["time-control",xe.required],password:["time-control",xe.required]}),this.loading$=this.store.select(xD),this.error$=this.store.select(ED)}ngOnInit(){this.store.select(ap).pipe(F(this.destroy$)).subscribe(i=>{i&&this.router.navigate(["/dashboard"]).then()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSubmit(){this.loginForm.valid&&this.store.dispatch(qs({credentials:this.loginForm.value}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-login"]],decls:32,vars:12,consts:[[1,"login-container"],[1,"login-card"],[1,"title-with-icon"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","username","required","","autocomplete","username"],["matPrefix",""],["matInput","","type","password","formControlName","password","required","","autocomplete","current-password"],[1,"error-message"],["mat-raised-button","","color","primary","type","submit",1,"login-button",3,"disabled"],["diameter","20"]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title")(4,"div",2)(5,"mat-icon"),m(6,"access_time"),u(),d(7,"span"),m(8,"TimeControl Login"),u()()()(),d(9,"mat-card-content")(10,"form",3),M("ngSubmit",function(){return t.onSubmit()}),d(11,"mat-form-field",4)(12,"mat-label"),m(13,"Benutzername"),u(),I(14,"input",5),We(),d(15,"mat-icon",6),m(16,"person"),u(),k(17,YF,2,0,"mat-error"),u(),d(18,"mat-form-field",4)(19,"mat-label"),m(20,"Passwort"),u(),I(21,"input",7),We(),d(22,"mat-icon",6),m(23,"lock"),u(),k(24,KF,2,0,"mat-error"),u(),k(25,XF,5,1,"div",8),oe(26,"async"),d(27,"button",9),oe(28,"async"),k(29,ZF,3,0),oe(30,"async"),On(31,QF,2,0,"span"),u()()()()()),e&2){let r;h(10),w("formGroup",t.loginForm),h(4),qe(),h(3),T(t.loginForm.get("username")?.hasError("required")&&t.loginForm.get("username")?.touched?17:-1),h(4),qe(),h(3),T(t.loginForm.get("password")?.hasError("required")&&t.loginForm.get("password")?.touched?24:-1),h(),T((r=ue(26,6,t.error$))?25:-1,r),h(2),w("disabled",!t.loginForm.valid||ue(28,8,t.loading$)),h(2),T(ue(30,10,t.loading$)?29:31)}},dependencies:[et,ai,ii,pn,gn,ni,fn,Tt,Rn,hn,cn,un,mn,dn,gt,wt,Ct,kn,u_,si,oi,Ye,Qe,sn,on,Wt,Ht,ft],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:20px}.login-card[_ngcontent-%COMP%]{max-width:450px;width:100%;box-shadow:0 8px 32px #0000001a}mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}.title-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:24px;justify-content:center;width:100%}.title-with-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:100%;height:48px;font-size:16px;display:flex;align-items:center;justify-content:center;gap:10px}.error-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#f44336;background-color:#ffebee;padding:12px;border-radius:4px;font-size:14px}.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}mat-spinner[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:1})};var AD=(n,i)=>{let e=s(He),t=s(Oi);return e.dispatch(ra()),e.select(ap).pipe(Pe(1),A(r=>r?!0:(t.navigate(["/login"]),!1)))};var RD=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:sp},{path:"dashboard",component:op,canActivate:[AD]},{path:"**",redirectTo:"/login"}];var Yc="PERFORM_ACTION",JF="REFRESH",LD="RESET",BD="ROLLBACK",VD="COMMIT",jD="SWEEP",zD="TOGGLE_ACTION",eP="SET_ACTIONS_ACTIVE",GD="JUMP_TO_STATE",UD="JUMP_TO_ACTION",G_="IMPORT_STATE",$D="LOCK_CHANGES",HD="PAUSE_RECORDING",Xs=class{constructor(i,e){if(this.action=i,this.timestamp=e,this.type=Yc,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},k_=class{constructor(){this.type=JF}},T_=class{constructor(i){this.timestamp=i,this.type=LD}},N_=class{constructor(i){this.timestamp=i,this.type=BD}},I_=class{constructor(i){this.timestamp=i,this.type=VD}},O_=class{constructor(){this.type=jD}},F_=class{constructor(i){this.id=i,this.type=zD}};var P_=class{constructor(i){this.index=i,this.type=GD}},L_=class{constructor(i){this.actionId=i,this.type=UD}},B_=class{constructor(i){this.nextLiftedState=i,this.type=G_}},V_=class{constructor(i){this.status=i,this.type=$D}},j_=class{constructor(i){this.status=i,this.type=HD}};var up=new v("@ngrx/store-devtools Options"),kD=new v("@ngrx/store-devtools Initial Config");function WD(){return null}var tP="NgRx Store DevTools";function nP(n){let i={maxAge:!1,monitor:WD,actionSanitizer:void 0,stateSanitizer:void 0,actionCreators:void 0,name:tP,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof n=="function"?n():n,t=e.logOnly?{pause:!0,export:!0,test:!0}:!1,r=e.features||t||i.features;r.import===!0&&(r.import="custom");let a=Object.assign({},i,{features:r},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function TD(n,i){return n.filter(e=>i.indexOf(e)<0)}function qD(n){let{computedStates:i,currentStateIndex:e}=n;if(e>=i.length){let{state:r}=i[i.length-1];return r}let{state:t}=i[e];return t}function qc(n){return new Xs(n,+Date.now())}function iP(n,i){return Object.keys(i).reduce((e,t)=>{let r=Number(t);return e[r]=YD(n,i[r],r),e},{})}function YD(n,i,e){return _(f({},i),{action:n(i.action,e)})}function rP(n,i){return i.map((e,t)=>({state:KD(n,e.state,t),error:e.error}))}function KD(n,i,e){return n(i,e)}function XD(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function aP(n,i,e,t){let r=[],a={},o=[];return n.stagedActionIds.forEach((l,c)=>{let p=n.actionsById[l];p&&(c&&U_(n.computedStates[c],p,i,e,t)||(a[l]=p,r.push(l),o.push(n.computedStates[c])))}),_(f({},n),{stagedActionIds:r,actionsById:a,computedStates:o})}function U_(n,i,e,t,r){let a=e&&!e(n,i.action),o=t&&!i.action.type.match(t.map(c=>ND(c)).join("|")),l=r&&i.action.type.match(r.map(c=>ND(c)).join("|"));return a||o||l}function ND(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ZD(n){return{ngZone:n?s(J):null,connectInZone:n}}var mp=(()=>{class n extends mr{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})()}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),lp={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},z_=new v("@ngrx/store-devtools Redux Devtools Extension");function oP(n){return typeof n=="object"&&n!==null&&!("type"in n)&&typeof n.selected=="number"&&Array.isArray(n.args)}function ID(n){let i=String(n),e=i.match(/^[^(]*\(([^)]*)\)/);if(!e){let t=i.match(/^\s*([^=\s(]+)\s*=>/);return t?[t[1]]:[]}return e[1].split(",").map(t=>t.replace(/^\s*\.{3}/,"").split("=")[0].trim()).filter(t=>t!=="")}function sP(n){return Array.isArray(n)?n.map(i=>({name:i.type||i.name||"anonymous",func:i,args:ID(i)})):Object.keys(n).map(i=>({name:i,func:n[i],args:ID(n[i])}))}var OD=n=>n===""?void 0:(0,eval)(`(${n})`),QD=(()=>{class n{constructor(e,t,r){this.config=t,this.dispatcher=r,this.zoneConfig=ZD(this.config.connectInZone),this.devtoolsExtension=e,this.actionCreatorDescriptors=t.actionCreators?sP(t.actionCreators):void 0,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===Yc){if(t.isLocked||t.isPaused)return;let r=qD(t);if(XD(this.config)&&U_(r,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?KD(this.config.stateSanitizer,r,t.currentStateIndex):r,o=this.config.actionSanitizer?YD(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,a))}else{let r=_(f({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?iP(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?rP(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new at(e=>{let t=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(r=>e.next(r)),t.unsubscribe}):At}createActionStreams(){let e=this.createChangesObservable().pipe(id()),t=e.pipe(we(p=>p.type===lp.START)),r=e.pipe(we(p=>p.type===lp.STOP)),a=e.pipe(we(p=>p.type===lp.DISPATCH),A(p=>this.unwrapAction(p.payload)),oa(p=>p.type===G_?this.dispatcher.pipe(we(g=>g.type===ku),Y_(1e3),tr(1e3),A(()=>p),ie(()=>x(p)),Pe(1)):x(p))),l=e.pipe(we(p=>p.type===lp.ACTION),A(p=>this.unwrapAction(p.payload))).pipe(F(r)),c=a.pipe(F(r));this.start$=t.pipe(F(r)),this.actions$=this.start$.pipe(Le(()=>l)),this.liftedActions$=this.start$.pipe(Le(()=>c))}unwrapAction(e){if(typeof e=="string")return(0,eval)(`(${e})`);if(this.actionCreatorDescriptors&&oP(e)){let t=this.actionCreatorDescriptors[e.selected];if(t){let r=e.args.map(OD);if(e.rest){let a=OD(e.rest);Array.isArray(a)&&r.push(...a)}return t.func(...r)}}return e}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),this.actionCreatorDescriptors&&(t.actionCreators=this.actionCreatorDescriptors),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}static{this.\u0275fac=function(t){return new(t||n)(q(z_),q(up),q(mp))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})(),dp={type:ec},lP="@ngrx/store-devtools/recompute",cP={type:lP};function JD(n,i,e,t,r){if(t)return{state:e,error:"Interrupted by an error up the chain"};let a=e,o;try{a=n(e,i)}catch(l){o=l.toString(),r.handleError(l)}return{state:a,error:o}}function cp(n,i,e,t,r,a,o,l,c){if(i>=n.length&&n.length===a.length)return n;let p=n.slice(0,i),g=a.length-(c?1:0);for(let b=i;b<g;b++){let D=a[b],V=r[D].action,W=p[b-1],Z=W?W.state:t,me=W?W.error:void 0,ge=o.indexOf(D)>-1?W:JD(e,V,Z,me,l);p.push(ge)}return c&&p.push(n[n.length-1]),p}function dP(n,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:qc(dp)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function uP(n,i,e,t,r={}){return a=>(o,l)=>{let{monitorState:c,actionsById:p,nextActionId:g,stagedActionIds:b,skippedActionIds:D,committedState:V,currentStateIndex:W,computedStates:Z,isLocked:me,isPaused:Ae}=o||i;o||(p=Object.create(p));function ge(Ke){let ke=Ke,Pt=b.slice(1,ke+1);for(let Et=0;Et<Pt.length;Et++)if(Z[Et+1].error){ke=Et,Pt=b.slice(1,ke+1);break}else delete p[Pt[Et]];D=D.filter(Et=>Pt.indexOf(Et)===-1),b=[0,...b.slice(ke+1)],V=Z[ke].state,Z=Z.slice(ke),W=W>ke?W-ke:0}function Ce(){p={0:qc(dp)},g=1,b=[0],D=[],V=Z[W].state,W=0,Z=[]}let Fe=0;switch(l.type){case $D:{me=l.status,Fe=1/0;break}case HD:{Ae=l.status,Ae?(b=[...b,g],p[g]=new Xs({type:"@ngrx/devtools/pause"},+Date.now()),g++,Fe=b.length-1,Z=Z.concat(Z[Z.length-1]),W===b.length-2&&W++,Fe=1/0):Ce();break}case LD:{p={0:qc(dp)},g=1,b=[0],D=[],V=n,W=0,Z=[];break}case VD:{Ce();break}case BD:{p={0:qc(dp)},g=1,b=[0],D=[],W=0,Z=[];break}case zD:{let{id:Ke}=l;D.indexOf(Ke)===-1?D=[Ke,...D]:D=D.filter(Pt=>Pt!==Ke),Fe=b.indexOf(Ke);break}case eP:{let{start:Ke,end:ke,active:Pt}=l,Et=[];for(let Nn=Ke;Nn<ke;Nn++)Et.push(Nn);Pt?D=TD(D,Et):D=[...D,...Et],Fe=b.indexOf(Ke);break}case GD:{W=l.index,Fe=1/0;break}case UD:{let Ke=b.indexOf(l.actionId);Ke!==-1&&(W=Ke),Fe=1/0;break}case jD:{b=TD(b,D),D=[],W=Math.min(W,b.length-1);break}case Yc:{if(me)return o||i;if(Ae||o&&U_(o.computedStates[W],l,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let ke=Z[Z.length-1];Z=[...Z.slice(0,-1),JD(a,l.action,ke.state,ke.error,e)],Fe=1/0;break}r.maxAge&&b.length===r.maxAge&&ge(1),W===b.length-1&&W++;let Ke=g++;p[Ke]=l,b=[...b,Ke],Fe=b.length-1;break}case G_:{({monitorState:c,actionsById:p,nextActionId:g,stagedActionIds:b,skippedActionIds:D,committedState:V,currentStateIndex:W,computedStates:Z,isLocked:me,isPaused:Ae}=l.nextLiftedState);break}case ec:{Fe=0,r.maxAge&&b.length>r.maxAge&&(Z=cp(Z,Fe,a,V,p,b,D,e,Ae),ge(b.length-r.maxAge),Fe=1/0);break}case ku:{if(Z.filter(ke=>ke.error).length>0)Fe=0,r.maxAge&&b.length>r.maxAge&&(Z=cp(Z,Fe,a,V,p,b,D,e,Ae),ge(b.length-r.maxAge),Fe=1/0);else{if(!Ae&&!me){W===b.length-1&&W++;let ke=g++;p[ke]=new Xs(l,+Date.now()),b=[...b,ke],Fe=b.length-1,Z=cp(Z,Fe,a,V,p,b,D,e,Ae)}Z=Z.map(ke=>_(f({},ke),{state:a(ke.state,cP)})),W=b.length-1,r.maxAge&&b.length>r.maxAge&&ge(b.length-r.maxAge),Fe=1/0}break}default:{Fe=1/0;break}}return Z=cp(Z,Fe,a,V,p,b,D,e,Ae),c=t(c,l),{monitorState:c,actionsById:p,nextActionId:g,stagedActionIds:b,skippedActionIds:D,committedState:V,currentStateIndex:W,computedStates:Z,isLocked:me,isPaused:Ae}}}var FD=(()=>{class n{constructor(e,t,r,a,o,l,c,p){let g=dP(c,p.monitor),b=uP(c,g,l,p.monitor,p),D=je(je(t.asObservable().pipe(Lr(1)),a.actions$).pipe(A(qc)),e,a.liftedActions$).pipe(Xc(Kc)),V=r.pipe(A(b)),W=ZD(p.connectInZone),Z=new aa(1);this.liftedStateSubscription=D.pipe(rd(V),PD(W),nd(({state:ge},[Ce,Fe])=>{let Ke=Fe(ge,Ce);return Ce.type!==Yc&&XD(p)&&(Ke=aP(Ke,p.predicate,p.actionsSafelist,p.actionsBlocklist)),a.notify(Ce,Ke),{state:Ke,action:Ce}},{state:g,action:null})).subscribe(({state:ge,action:Ce})=>{if(Z.next(ge),Ce.type===Yc){let Fe=Ce.action;o.next(Fe)}}),this.extensionStartSubscription=a.start$.pipe(PD(W)).subscribe(()=>{this.refresh()});let me=Z.asObservable(),Ae=me.pipe(A(qD));Object.defineProperty(Ae,"state",{value:xu(Ae,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=me,this.state=Ae}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new Xs(e,+Date.now()))}refresh(){this.dispatch(new k_)}reset(){this.dispatch(new T_(+Date.now()))}rollback(){this.dispatch(new N_(+Date.now()))}commit(){this.dispatch(new I_(+Date.now()))}sweep(){this.dispatch(new O_)}toggleAction(e){this.dispatch(new F_(e))}jumpToAction(e){this.dispatch(new L_(e))}jumpToState(e){this.dispatch(new P_(e))}importState(e){this.dispatch(new B_(e))}lockChanges(e){this.dispatch(new V_(e))}pauseRecording(e){this.dispatch(new j_(e))}static{this.\u0275fac=function(t){return new(t||n)(q(mp),q(mr),q(Ta),q(QD),q(Na),q(Ui),q(tc),q(up))}}static{this.\u0275prov=$({token:n,factory:n.\u0275fac})}}return n})();function PD({ngZone:n,connectInZone:i}){return e=>i?new at(t=>e.subscribe({next:r=>n.run(()=>t.next(r)),error:r=>n.run(()=>t.error(r)),complete:()=>n.run(()=>t.complete())})):e}var mP=new v("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function hP(n,i){return!!n||i.monitor!==WD}function pP(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function fP(n){return n.state}function ew(n={}){return bn([QD,mp,FD,{provide:kD,useValue:n},{provide:mP,deps:[z_,up],useFactory:hP},{provide:z_,useFactory:pP},{provide:up,deps:[kD],useFactory:nP},{provide:To,deps:[FD],useFactory:fP},{provide:ko,useExisting:mp}])}var gP={participants:[],selectedParticipantId:null,loading:!1,pdfExportLoading:!1,error:null},tw=jn(gP,S(er,n=>_(f({},n),{loading:!0,error:null})),S(xm,(n,{participants:i})=>_(f({},n),{participants:i,loading:!1})),S(Em,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Am,n=>_(f({},n),{loading:!0,error:null})),S(Rm,(n,{participant:i})=>_(f({},n),{participants:n.participants.some(e=>e.id===i.id)?n.participants.map(e=>e.id===i.id?i:e):[...n.participants,i],loading:!1})),S(km,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ts,n=>_(f({},n),{loading:!0,error:null})),S(Tm,(n,{participant:i})=>_(f({},n),{participants:[...n.participants,i],loading:!1})),S(Nm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ns,n=>_(f({},n),{loading:!0,error:null})),S(Im,(n,{participant:i})=>_(f({},n),{participants:n.participants.map(e=>e.id===i.id?i:e),loading:!1})),S(Om,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(is,n=>_(f({},n),{loading:!0,error:null})),S(Fm,(n,{id:i})=>_(f({},n),{participants:n.participants.filter(e=>e.id!==i),selectedParticipantId:n.selectedParticipantId===i?null:n.selectedParticipantId,loading:!1})),S(Pm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(rs,n=>_(f({},n),{loading:!0,error:null})),S(Lm,(n,{raceId:i})=>_(f({},n),{participants:n.participants.filter(e=>e.race?.id!==i),loading:!1})),S(Bm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(WC,(n,{id:i})=>_(f({},n),{selectedParticipantId:i})),S(as,os,ss,n=>_(f({},n),{pdfExportLoading:!0,error:null})),S(Ac,Rc,kc,n=>_(f({},n),{pdfExportLoading:!1})),S(Vm,jm,zm,(n,{error:i})=>_(f({},n),{pdfExportLoading:!1,error:i})));var _P={measurements:[],selectedMeasurementId:null,loading:!1,error:null,continuousModeEnabled:!1,scheduledImportEnabled:!1,deviceStatus:null,deviceConnected:null,isPollingDeviceConnection:!1},nw=jn(_P,S(Ga,n=>_(f({},n),{loading:!0,error:null})),S(nh,(n,{measurements:i})=>_(f({},n),{measurements:i,loading:!1})),S(ih,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(rh,n=>_(f({},n),{loading:!0,error:null})),S(ah,(n,{measurements:i})=>_(f({},n),{measurements:i,loading:!1})),S(oh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(sh,n=>_(f({},n),{loading:!0,error:null})),S(lh,(n,{measurement:i})=>_(f({},n),{measurements:n.measurements.some(e=>e.id===i.id)?n.measurements.map(e=>e.id===i.id?i:e):[...n.measurements,i],loading:!1})),S(ch,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ms,n=>_(f({},n),{loading:!0,error:null})),S(dh,(n,{measurement:i})=>_(f({},n),{measurements:[...n.measurements,i],loading:!1})),S(uh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(hs,n=>_(f({},n),{loading:!0,error:null})),S(mh,(n,{measurement:i})=>_(f({},n),{measurements:n.measurements.map(e=>e.id===i.id?i:e),loading:!1})),S(hh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ps,n=>_(f({},n),{loading:!0,error:null})),S(ph,(n,{id:i})=>_(f({},n),{measurements:n.measurements.filter(e=>e.id!==i),selectedMeasurementId:n.selectedMeasurementId===i?null:n.selectedMeasurementId,loading:!1})),S(fh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(JC,(n,{id:i})=>_(f({},n),{selectedMeasurementId:i})),S(fs,n=>_(f({},n),{loading:!0,error:null})),S(Ua,n=>_(f({},n),{measurements:[],selectedMeasurementId:null,loading:!1})),S(gs,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(_s,n=>_(f({},n),{loading:!0,error:null})),S($a,(n,{enabled:i})=>_(f({},n),{continuousModeEnabled:i,loading:!1})),S(bs,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(vs,n=>_(f({},n),{loading:!0,error:null})),S(ys,(n,{enabled:i})=>_(f({},n),{scheduledImportEnabled:i,loading:!1})),S(Ss,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Cs,n=>_(f({},n),{loading:!0,error:null})),S(gh,(n,{enabled:i})=>_(f({},n),{scheduledImportEnabled:i,loading:!1})),S(_h,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ia,n=>_(f({},n),{loading:!0,error:null})),S(Ds,(n,{status:i})=>_(f({},n),{deviceStatus:i,continuousModeEnabled:i==="continuous",loading:!1})),S(ws,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Ms,n=>_(f({},n),{loading:!0,error:null})),S(xs,n=>_(f({},n),{loading:!1})),S(Es,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(As,n=>_(f({},n),{loading:!0,error:null})),S(Rs,n=>_(f({},n),{loading:!1})),S(ks,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Ts,n=>_(f({},n),{loading:!0,error:null})),S(Ns,n=>_(f({},n),{loading:!1})),S(Is,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Os,n=>_(f({},n),{isPollingDeviceConnection:!0})),S(Fs,n=>_(f({},n),{isPollingDeviceConnection:!1})),S(Ps,(n,{connected:i})=>_(f({},n),{deviceConnected:i})),S(Sh,(n,{error:i})=>_(f({},n),{deviceConnected:!1,error:i})));var $_={token:null,username:null,isAuthenticated:!1,loading:!1,error:null},iw=jn($_,S(qs,n=>_(f({},n),{loading:!0,error:null})),S(Uc,(n,{response:i})=>_(f({},n),{token:i.access_token||i.token||null,username:i.username||null,isAuthenticated:!0,loading:!1,error:null})),S(ip,(n,{error:i})=>_(f({},n),{loading:!1,error:i,isAuthenticated:!1,token:null,username:null})),S(Ys,n=>_(f({},n),{loading:!0})),S($c,()=>f({},$_)),S(ra,n=>_(f({},n),{loading:!0})),S(rp,(n,{token:i,username:e})=>_(f({},n),{token:i,username:e,isAuthenticated:!0,loading:!1})),S(Hc,()=>_(f({},$_),{loading:!1})));var bP={ageGroups:[],selectedAgeGroupId:null,loading:!1,error:null},rw=jn(bP,S(Ha,n=>_(f({},n),{loading:!0,error:null})),S(xh,(n,{ageGroups:i})=>_(f({},n),{ageGroups:i,loading:!1})),S(Eh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Ah,n=>_(f({},n),{loading:!0,error:null})),S(Rh,(n,{ageGroup:i})=>_(f({},n),{ageGroups:n.ageGroups.some(e=>e.id===i.id)?n.ageGroups.map(e=>e.id===i.id?i:e):[...n.ageGroups,i],loading:!1})),S(kh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Ls,n=>_(f({},n),{loading:!0,error:null})),S(Th,(n,{ageGroup:i})=>_(f({},n),{ageGroups:[...n.ageGroups,i],loading:!1})),S(Nh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Bs,n=>_(f({},n),{loading:!0,error:null})),S(Ih,(n,{ageGroup:i})=>_(f({},n),{ageGroups:n.ageGroups.map(e=>e.id===i.id?i:e),loading:!1})),S(Oh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Vs,n=>_(f({},n),{loading:!0,error:null})),S(Fh,(n,{id:i})=>_(f({},n),{ageGroups:n.ageGroups.filter(e=>e.id!==i),selectedAgeGroupId:n.selectedAgeGroupId===i?null:n.selectedAgeGroupId,loading:!1})),S(Ph,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(fD,(n,{id:i})=>_(f({},n),{selectedAgeGroupId:i})));var vP={races:[],selectedRaceId:null,loading:!1,error:null},aw=jn(vP,S(vi,n=>_(f({},n),{loading:!0,error:null})),S(Zu,(n,{races:i})=>_(f({},n),{races:i,loading:!1})),S(Qu,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(jo,n=>_(f({},n),{loading:!0})),S(Ju,(n,{race:i})=>_(f({},n),{races:[...n.races,i],loading:!1})),S(em,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(zo,n=>_(f({},n),{loading:!0})),S(tm,(n,{race:i})=>_(f({},n),{races:n.races.map(e=>e.id===i.id?i:e),loading:!1})),S(nm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Go,n=>_(f({},n),{loading:!0})),S(im,(n,{id:i})=>_(f({},n),{races:n.races.filter(e=>e.id!==i),loading:!1})),S(rm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ea,(n,{id:i})=>_(f({},n),{selectedRaceId:i})));var yP={teams:[],loading:!1,error:null},ow=jn(yP,S(Or,n=>_(f({},n),{loading:!0,error:null})),S(Hm,(n,{teams:i})=>_(f({},n),{teams:i,loading:!1})),S(Wm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(cs,n=>_(f({},n),{loading:!0,error:null})),S(qm,(n,{team:i})=>_(f({},n),{teams:[...n.teams,i],loading:!1})),S(Ym,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(ds,n=>_(f({},n),{loading:!0,error:null})),S(Km,(n,{team:i})=>_(f({},n),{teams:n.teams.map(e=>e.id===i.id?i:e),loading:!1})),S(Xm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(us,n=>_(f({},n),{loading:!0,error:null})),S(Zm,(n,{id:i})=>_(f({},n),{teams:n.teams.filter(e=>e.id!==i),loading:!1})),S(Qm,(n,{error:i})=>_(f({},n),{loading:!1,error:i})));var SP={gaudiModes:[],selectedGaudiModeId:null,pairing:[],ranking:[],loading:!1,pdfExportLoading:!1,error:null},sw=jn(SP,S(js,n=>_(f({},n),{loading:!0,error:null})),S(jh,(n,{gaudiModes:i})=>_(f({},n),{gaudiModes:i,loading:!1})),S(zh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(zs,n=>_(f({},n),{loading:!0,error:null})),S(Gh,(n,{gaudiMode:i})=>_(f({},n),{gaudiModes:[...n.gaudiModes,i],loading:!1})),S(Uh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S($h,n=>_(f({},n),{loading:!0,error:null})),S(Hh,(n,{gaudiMode:i})=>_(f({},n),{gaudiModes:n.gaudiModes.map(e=>e.id===i.id?i:e),loading:!1})),S(Wh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Gs,n=>_(f({},n),{loading:!0,error:null})),S(qh,(n,{id:i})=>_(f({},n),{gaudiModes:n.gaudiModes.filter(e=>e.id!==i),selectedGaudiModeId:n.selectedGaudiModeId===i?null:n.selectedGaudiModeId,loading:!1})),S(Yh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Kh,(n,{id:i})=>_(f({},n),{selectedGaudiModeId:i,pairing:[],ranking:[]})),S(Us,$s,n=>_(f({},n),{loading:!0,error:null})),S(jc,(n,{pairing:i})=>_(f({},n),{pairing:i,loading:!1})),S(zc,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Hs,n=>_(f({},n),{loading:!0,error:null})),S(Xh,(n,{ranking:i})=>_(f({},n),{ranking:i,loading:!1})),S(Zh,(n,{error:i})=>_(f({},n),{loading:!1,error:i})),S(Ws,n=>_(f({},n),{pdfExportLoading:!0})),S(Gc,n=>_(f({},n),{pdfExportLoading:!1})),S(Qh,(n,{error:i})=>_(f({},n),{pdfExportLoading:!1,error:i})));var ci={production:!1,apiUrl:"http://localhost:18000"};var hp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/participants`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}deleteByRaceId(i){return this.http.delete(`${this.apiUrl}/race/${i}`)}exportAllToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/all/${i}`,{responseType:"blob"})}exportByGenderToPdf(i,e){return this.http.get(`${this.apiUrl}/export/pdf/gender/${i}/${e}`,{responseType:"blob"})}exportAllAgeGroupsToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/${i}`,{responseType:"blob"})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var pp=class n{actions$=s(_n);participantService=s(hp);loadParticipants$=ae(()=>this.actions$.pipe(H(er),se(()=>this.participantService.getAll().pipe(A(i=>xm({participants:i})),ie(i=>x(Em({error:i.message||"Failed to load participants"})))))));loadParticipant$=ae(()=>this.actions$.pipe(H(Am),se(({id:i})=>this.participantService.getById(i).pipe(A(e=>Rm({participant:e})),ie(e=>x(km({error:e.message||"Failed to load participant"})))))));createParticipant$=ae(()=>this.actions$.pipe(H(ts),se(({participant:i})=>this.participantService.create(i).pipe(A(e=>Tm({participant:e})),ie(e=>x(Nm({error:e.message||"Failed to create participant"})))))));updateParticipant$=ae(()=>this.actions$.pipe(H(ns),se(({id:i,participant:e})=>this.participantService.update(i,e).pipe(A(t=>Im({participant:t})),ie(t=>x(Om({error:t.message||"Failed to update participant"})))))));deleteParticipant$=ae(()=>this.actions$.pipe(H(is),se(({id:i})=>this.participantService.delete(i).pipe(A(()=>Fm({id:i})),ie(e=>x(Pm({error:e.message||"Failed to delete participant"})))))));deleteParticipantsByRaceId$=ae(()=>this.actions$.pipe(H(rs),se(({raceId:i})=>this.participantService.deleteByRaceId(i).pipe(A(()=>Lm({raceId:i})),ie(e=>x(Bm({error:e.message||"Failed to delete participants by race"})))))));exportAllPdf$=ae(()=>this.actions$.pipe(H(as),se(({raceId:i})=>this.participantService.exportAllToPdf(i).pipe(A(e=>Ac({blob:e,filename:"gesamtwertung.pdf"})),ie(e=>x(Vm({error:e.message||"Failed to export PDF"})))))));exportByGenderPdf$=ae(()=>this.actions$.pipe(H(os),se(({gender:i,raceId:e})=>this.participantService.exportByGenderToPdf(i,e).pipe(A(t=>Rc({blob:t,filename:`wertung_${i.toLowerCase()}.pdf`})),ie(t=>x(jm({error:t.message||"Failed to export PDF"})))))));exportAllAgeGroupsPdf$=ae(()=>this.actions$.pipe(H(ss),se(({raceId:i})=>this.participantService.exportAllAgeGroupsToPdf(i).pipe(A(e=>kc({blob:e,filename:"wertung_altersklassen.pdf"})),ie(e=>x(zm({error:e.message||"Failed to export PDF"})))))));downloadPdf$=ae(()=>this.actions$.pipe(H(Ac,Rc,kc),ot(({blob:i,filename:e})=>{let t=window.URL.createObjectURL(i),r=document.createElement("a");r.href=t,r.download=e,r.click(),window.URL.revokeObjectURL(t)})),{dispatch:!1});static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var fp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/measurements`;getAll(){return this.http.get(this.apiUrl)}getByParticipant(i){return this.http.get(`${this.apiUrl}/participant/${i}`)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}reset(i){return this.http.delete(`${this.apiUrl}/reset`,{params:{resetDevice:i.toString()},responseType:"text"})}setContinuousMode(i){return this.http.put(`${this.apiUrl}/continuous-mode`,null,{params:{enable:i.toString()},responseType:"text"})}setScheduledImport(i){return this.http.put(`${this.apiUrl}/scheduled-import`,null,{params:{enable:i.toString()},responseType:"text"})}getScheduledImportStatus(){return this.http.get(`${this.apiUrl}/scheduled-import/status`)}syncMeasurementsToParticipants(){return this.http.post(`${this.apiUrl}/sync-to-participants`,null,{responseType:"text"})}getDeviceStatus(){return this.http.get(`${this.apiUrl}/device-status`,{responseType:"text"})}discardOldestStart(){return this.http.post(`${this.apiUrl}/discard`,null,{responseType:"text"})}exportMeasurements(){return this.http.get(`${this.apiUrl}/export`,{responseType:"blob"})}importMeasurementsFromJson(i){return this.http.post(`${this.apiUrl}/import-json`,i)}checkDeviceConnection(){return new at(i=>{this.http.get(`${this.apiUrl}/device-connection`,{observe:"response"}).subscribe({next:e=>{i.next(e.status===200),i.complete()},error:()=>{i.next(!1),i.complete()}})})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var gp=class n{actions$=s(_n);measurementService=s(fp);loadMeasurements$=ae(()=>this.actions$.pipe(H(Ga),se(()=>this.measurementService.getAll().pipe(A(i=>nh({measurements:i})),ie(i=>x(ih({error:i.message||"Failed to load measurements"})))))));loadMeasurementsByParticipant$=ae(()=>this.actions$.pipe(H(rh),se(({participantId:i})=>this.measurementService.getByParticipant(i).pipe(A(e=>ah({measurements:e})),ie(e=>x(oh({error:e.message||"Failed to load measurements by participant"})))))));loadMeasurement$=ae(()=>this.actions$.pipe(H(sh),se(({id:i})=>this.measurementService.getById(i).pipe(A(e=>lh({measurement:e})),ie(e=>x(ch({error:e.message||"Failed to load measurement"})))))));createMeasurement$=ae(()=>this.actions$.pipe(H(ms),se(({measurement:i})=>this.measurementService.create(i).pipe(A(e=>dh({measurement:e})),ie(e=>x(uh({error:e.message||"Failed to create measurement"})))))));updateMeasurement$=ae(()=>this.actions$.pipe(H(hs),se(({id:i,measurement:e})=>this.measurementService.update(i,e).pipe(A(t=>mh({measurement:t})),ie(t=>x(hh({error:t.message||"Failed to update measurement"})))))));deleteMeasurement$=ae(()=>this.actions$.pipe(H(ps),se(({id:i})=>this.measurementService.delete(i).pipe(A(()=>ph({id:i})),ie(e=>x(fh({error:e.message||"Failed to delete measurement"})))))));resetMeasurements$=ae(()=>this.actions$.pipe(H(fs),se(({resetDevice:i})=>this.measurementService.reset(i).pipe(A(()=>Ua()),ie(e=>x(gs({error:e.message||"Failed to reset measurements"})))))));reloadAfterReset$=ae(()=>this.actions$.pipe(H(Ua),A(()=>Ga())));setContinuousMode$=ae(()=>this.actions$.pipe(H(_s),se(({enable:i})=>this.measurementService.setContinuousMode(i).pipe(A(()=>$a({enabled:i})),ie(e=>x(bs({error:e.message||"Failed to set continuous mode"})))))));setScheduledImport$=ae(()=>this.actions$.pipe(H(vs),se(({enable:i})=>this.measurementService.setScheduledImport(i).pipe(A(()=>ys({enabled:i})),ie(e=>x(Ss({error:e.message||"Failed to set scheduled import"})))))));loadScheduledImportStatus$=ae(()=>this.actions$.pipe(H(Cs),se(()=>this.measurementService.getScheduledImportStatus().pipe(A(i=>gh({enabled:i})),ie(i=>x(_h({error:i.message||"Failed to load scheduled import status"})))))));syncMeasurementsToParticipants$=ae(()=>this.actions$.pipe(H(bh),se(()=>this.measurementService.syncMeasurementsToParticipants().pipe(A(i=>vh({message:i})),ie(i=>x(yh({error:i.message||"Failed to sync measurements to participants"})))))));loadDeviceStatus$=ae(()=>this.actions$.pipe(H(ia),se(()=>this.measurementService.getDeviceStatus().pipe(A(i=>Ds({status:i})),ie(i=>x(ws({error:i.message||"Failed to load device status"})))))));discardOldestStart$=ae(()=>this.actions$.pipe(H(Ms),se(()=>this.measurementService.discardOldestStart().pipe(A(i=>xs({message:i})),ie(i=>x(Es({error:i.message||"Failed to discard oldest start"})))))));exportMeasurements$=ae(()=>this.actions$.pipe(H(As),se(()=>this.measurementService.exportMeasurements().pipe(A(i=>{let e=URL.createObjectURL(i),t=document.createElement("a");return t.href=e,t.download="measurements.json",t.click(),URL.revokeObjectURL(e),Rs()}),ie(i=>x(ks({error:i.message||"Export fehlgeschlagen"})))))));importMeasurementsFromJson$=ae(()=>this.actions$.pipe(H(Ts),se(({measurements:i})=>this.measurementService.importMeasurementsFromJson(i).pipe(A(e=>Ns({count:e.length})),ie(e=>x(Is({error:e.message||"Import fehlgeschlagen"})))))));startDeviceConnectionPolling$=ae(()=>this.actions$.pipe(H(Os),Le(()=>td(1e4).pipe(A(()=>Oc()),F(this.actions$.pipe(H(Fs)))))));checkDeviceConnection$=ae(()=>this.actions$.pipe(H(Oc),se(()=>this.measurementService.checkDeviceConnection().pipe(A(i=>Ps({connected:i})),ie(i=>x(Sh({error:i.message||"Failed to check device connection"})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var Zs=class n{http=s(jt);apiUrl=`${ci.apiUrl}/login`;TOKEN_KEY="auth_token";USERNAME_KEY="auth_username";login(i){return this.http.post(this.apiUrl,i).pipe(ot(e=>{let t=e.access_token||e.token;t&&(this.setToken(t),this.setUsername(i.username))}))}logout(){localStorage.removeItem(this.TOKEN_KEY),localStorage.removeItem(this.USERNAME_KEY)}getToken(){return localStorage.getItem(this.TOKEN_KEY)}getUsername(){return localStorage.getItem(this.USERNAME_KEY)}isAuthenticated(){let i=this.getToken();return i?!this.isTokenExpired(i):!1}isTokenExpired(i){try{let e=this.decodeToken(i);if(!e.exp)return!1;let t=e.exp*1e3;return Date.now()>=t}catch{return!0}}decodeToken(i){try{let e=i.split(".")[1],t=atob(e);return JSON.parse(t)}catch{throw new Error("Invalid token format")}}setToken(i){localStorage.setItem(this.TOKEN_KEY,i)}setUsername(i){localStorage.setItem(this.USERNAME_KEY,i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var _p=class n{actions$=s(_n);authService=s(Zs);router=s(Oi);login$=ae(()=>this.actions$.pipe(H(qs),se(({credentials:i})=>this.authService.login(i).pipe(A(e=>{let t=_(f({},e),{username:i.username});return Uc({response:t})}),ie(e=>x(ip({error:e.error?.message||e.message||"Login fehlgeschlagen"})))))));loginSuccess$=ae(()=>this.actions$.pipe(H(Uc),ot(()=>{this.router.navigate(["/dashboard"]).then()})),{dispatch:!1});logout$=ae(()=>this.actions$.pipe(H(Ys),ot(()=>{this.authService.logout()}),A(()=>$c())));logoutSuccess$=ae(()=>this.actions$.pipe(H($c),ot(()=>{this.router.navigate(["/login"]).then()})),{dispatch:!1});checkAuth$=ae(()=>this.actions$.pipe(H(ra),A(()=>{let i=this.authService.getToken(),e=this.authService.getUsername();return i&&e?this.authService.isTokenExpired(i)?(this.authService.logout(),Hc()):rp({token:i,username:e}):Hc()})));static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var bp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/age-groups`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var vp=class n{actions$=s(_n);ageGroupService=s(bp);loadAgeGroups$=ae(()=>this.actions$.pipe(H(Ha),se(()=>this.ageGroupService.getAll().pipe(A(i=>xh({ageGroups:i})),ie(i=>x(Eh({error:i.message||"Failed to load age groups"})))))));loadAgeGroup$=ae(()=>this.actions$.pipe(H(Ah),se(({id:i})=>this.ageGroupService.getById(i).pipe(A(e=>Rh({ageGroup:e})),ie(e=>x(kh({error:e.message||"Failed to load age group"})))))));createAgeGroup$=ae(()=>this.actions$.pipe(H(Ls),se(({ageGroup:i})=>this.ageGroupService.create(i).pipe(A(e=>Th({ageGroup:e})),ie(e=>x(Nh({error:e.message||"Failed to create age group"})))))));updateAgeGroup$=ae(()=>this.actions$.pipe(H(Bs),se(({id:i,ageGroup:e})=>this.ageGroupService.update(i,e).pipe(A(t=>Ih({ageGroup:t})),ie(t=>x(Oh({error:t.message||"Failed to update age group"})))))));deleteAgeGroup$=ae(()=>this.actions$.pipe(H(Vs),se(({id:i})=>this.ageGroupService.delete(i).pipe(A(()=>Fh({id:i})),ie(e=>x(Ph({error:e.message||"Failed to delete age group"})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var yp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/races`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}getByName(i){return this.http.get(`${this.apiUrl}/by-name/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var Sp=class n{actions$=s(_n);raceService=s(yp);loadRaces$=ae(()=>this.actions$.pipe(H(vi),Le(()=>this.raceService.getAll().pipe(A(i=>Zu({races:i})),ie(i=>x(Qu({error:i})))))));createRace$=ae(()=>this.actions$.pipe(H(jo),Le(({race:i})=>this.raceService.create(i).pipe(A(e=>Ju({race:e})),ie(e=>x(em({error:e})))))));updateRace$=ae(()=>this.actions$.pipe(H(zo),Le(({id:i,race:e})=>this.raceService.update(i,e).pipe(A(t=>tm({race:t})),ie(t=>x(nm({error:t})))))));deleteRace$=ae(()=>this.actions$.pipe(H(Go),Le(({id:i})=>this.raceService.delete(i).pipe(A(()=>im({id:i})),ie(e=>x(rm({error:e})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var Cp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/teams`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var Dp=class n{actions$=s(_n);teamService=s(Cp);loadTeams$=ae(()=>this.actions$.pipe(H(Or),se(()=>this.teamService.getAll().pipe(A(i=>Hm({teams:i})),ie(i=>x(Wm({error:i.message||"Failed to load teams"})))))));createTeam$=ae(()=>this.actions$.pipe(H(cs),se(({team:i})=>this.teamService.create(i).pipe(A(e=>qm({team:e})),ie(e=>x(Ym({error:e.message||"Failed to create team"})))))));updateTeam$=ae(()=>this.actions$.pipe(H(ds),se(({id:i,team:e})=>this.teamService.update(i,e).pipe(A(t=>Km({team:t})),ie(t=>x(Xm({error:t.message||"Failed to update team"})))))));deleteTeam$=ae(()=>this.actions$.pipe(H(us),se(({id:i})=>this.teamService.delete(i).pipe(A(()=>Zm({id:i})),ie(e=>x(Qm({error:e.message||"Failed to delete team"})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var wp=class n{http=s(jt);apiUrl=`${ci.apiUrl}/gaudi-modes`;getAll(i){let e=i?`${this.apiUrl}?raceId=${i}`:this.apiUrl;return this.http.get(e)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}draw(i){return this.http.post(`${this.apiUrl}/${i}/draw`,{})}getPairing(i){return this.http.get(`${this.apiUrl}/${i}/pairing`)}getRanking(i){return this.http.get(`${this.apiUrl}/${i}/ranking`)}exportPdf(i){return this.http.get(`${this.apiUrl}/${i}/export/pdf`,{responseType:"blob"})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac,providedIn:"root"})};var Mp=class n{actions$=s(_n);gaudiModeService=s(wp);loadGaudiModes$=ae(()=>this.actions$.pipe(H(js),se(({raceId:i})=>this.gaudiModeService.getAll(i).pipe(A(e=>jh({gaudiModes:e})),ie(e=>x(zh({error:e.message||"Failed to load Gaudi-Modus instances"})))))));createGaudiMode$=ae(()=>this.actions$.pipe(H(zs),se(({gaudiMode:i})=>this.gaudiModeService.create(i).pipe(A(e=>Gh({gaudiMode:e})),ie(e=>x(Uh({error:e.message||"Failed to create Gaudi-Modus instance"})))))));updateGaudiMode$=ae(()=>this.actions$.pipe(H($h),se(({id:i,gaudiMode:e})=>this.gaudiModeService.update(i,e).pipe(A(t=>Hh({gaudiMode:t})),ie(t=>x(Wh({error:t.message||"Failed to update Gaudi-Modus instance"})))))));deleteGaudiMode$=ae(()=>this.actions$.pipe(H(Gs),se(({id:i})=>this.gaudiModeService.delete(i).pipe(A(()=>qh({id:i})),ie(e=>x(Yh({error:e.message||"Failed to delete Gaudi-Modus instance"})))))));drawPairing$=ae(()=>this.actions$.pipe(H(Us),se(({id:i})=>this.gaudiModeService.draw(i).pipe(A(e=>jc({pairing:e})),ie(e=>x(zc({error:e.message||"Failed to draw pairing"})))))));loadPairing$=ae(()=>this.actions$.pipe(H($s),se(({id:i})=>this.gaudiModeService.getPairing(i).pipe(A(e=>jc({pairing:e})),ie(e=>x(zc({error:e.message||"Failed to load pairing"})))))));loadRanking$=ae(()=>this.actions$.pipe(H(Hs),se(({id:i})=>this.gaudiModeService.getRanking(i).pipe(A(e=>Xh({ranking:e})),ie(e=>x(Zh({error:e.message||"Failed to load ranking"})))))));exportPdf$=ae(()=>this.actions$.pipe(H(Ws),se(({id:i,filename:e})=>this.gaudiModeService.exportPdf(i).pipe(A(t=>Gc({blob:t,filename:e})),ie(t=>x(Qh({error:t.message||"Failed to export PDF"})))))));downloadPdf$=ae(()=>this.actions$.pipe(H(Gc),ot(({blob:i,filename:e})=>{let t=window.URL.createObjectURL(i),r=document.createElement("a");r.href=t,r.download=e,r.click(),window.URL.revokeObjectURL(t)})),{dispatch:!1});static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var lw=(n,i)=>{let e=s(Zs),t=s(Oi),r=e.getToken();if(n.url.includes("/login"))return i(n);if(r){if(e.isTokenExpired(r))return e.logout(),t.navigate(["/login"]).then(),i(n);let a=n.clone({setHeaders:{Authorization:`Bearer ${r}`}});return i(a)}return i(n)};Xb(o0);var CP={parse:{dateInput:"input"},display:{dateInput:"input",monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}},cw={providers:[ob(),Uf(RD),hf(ff(),pf([lw])),yy(),{provide:io,useValue:"de-DE"},{provide:Vl,useValue:"de-DE"},{provide:Gt,useClass:Mu},{provide:lr,useValue:CP},A0({auth:iw,race:aw,participant:tw,measurement:nw,ageGroup:rw,team:ow,gaudiMode:sw}),hD([_p,Sp,pp,gp,vp,Dp,Mp]),ew({maxAge:25,logOnly:!rl(),autoPause:!0,trace:!1,traceLimit:75})]};var xp=class n{title=ce("time-control");store=s(He);ngOnInit(){this.store.dispatch(ra())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&I(0,"router-outlet")},dependencies:[Fl],encapsulation:2,changeDetection:1})};sf(xp,cw).catch(()=>console.error());
