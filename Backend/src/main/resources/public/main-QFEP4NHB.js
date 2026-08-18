import{$ as Ze,$a as Xg,$b as Ge,$c as Mc,A as En,Aa as bn,Ab as E,Ac as Yi,B as gc,Ba as $g,Bb as Y,Bc as d_,C as Ig,Ca as R,Cb as C,Cc as Pa,D as Og,Da as Z,Db as yh,Dc as La,E as Pe,Ea as Wn,Eb as Sh,Ec as Ba,F as me,Fa as _s,Fb as o_,Fc as u_,G as ps,Ga as Gg,Gb as ie,Gc as ue,H as be,Ha as ne,Hb as re,Hc as Mh,I as Yr,Ia as Kr,Ib as ta,Ic as Re,J as di,Ja as Wg,Jb as Ch,Jc as je,K as Ie,Ka as Na,Kb as Dh,Kc as na,L as Fg,La as Ta,Lb as mi,Lc as wc,M as Pg,Ma as Xr,Mb as s_,Mc as m_,N as Lg,Na as Yg,Nb as J,Nc as Va,O as qr,Oa as St,Ob as T,Oc as wt,P as Bg,Pa as ui,Pb as mr,Pc as qe,Q as Ra,Qa as bh,Qb as I,Qc as Rn,R as dr,Ra as ke,Rb as wh,Rc as xh,S as ph,Sa as Ce,Sb as kt,Sc as ja,T as fh,Ta as K,Tb as Nt,Tc as Yn,U as Vg,Ua as qg,Ub as A,Uc as h_,V as gh,Va as j,Vb as d,Vc as vs,W as jg,Wa as Zr,Wb as u,Wc as he,X as _c,Xa as Kg,Xb as F,Xc as p_,Y as bc,Ya as yc,Yb as $e,Yc as k,Z as _h,Za as Qr,Zb as Ye,Zc as Ht,_ as ur,_a as Ia,_b as dn,_c as Eh,a as g,aa as Oe,ab as Zg,ac as We,ad as ys,b as v,ba as G,bb as Qg,bc as Tt,ca as zg,cb as Jg,cc as et,d as Se,da as it,db as e_,dc as pt,e as Rg,ea as vc,eb as t_,ec as l_,f as nt,fa as ae,fb as n_,fc as An,g as kg,ga as ka,gb as Oa,gc as Ct,h as S,ha as At,hb as i_,hc as w,i as dt,ia as X,ib as Sc,ic as Fa,j as Wr,ja as W,jb as Cc,jc as L,k as mh,ka as Ug,kb as He,kc as Me,l as uc,la as b,lb as h,lc as ee,m as hh,ma as $,mb as ut,mc as Dt,n as vt,na as s,nb as Pt,nc as Be,o as mc,oa as Jt,ob as Le,oc as z,p as ln,pa as fs,pb as rt,pc as U,q as D,qa as Hg,qb as at,qc as c_,r as hc,ra as Rt,rb as bs,rc as hr,s as Aa,sa as cn,sb as Te,sc as Wi,t as Ng,ta as en,tb as Jr,tc as mt,u as pc,ua as pe,ub as st,uc as vn,v as Tg,va as fe,vb as ea,vc as B,w as x,wa as Ut,wb as r_,wc as lt,x as zt,xa as gs,xb as Dc,xc as f,y as we,ya as Q,yb as a_,yc as Ve,z as fc,za as te,zb as vh,zc as De}from"./chunk-33FFGO4M.js";var f_=null;function kn(){return f_}function Ah(n){f_??=n}var Ss=class{},za=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:()=>s(g_),providedIn:"platform"})}return n})();var g_=(()=>{class n extends za{_location;_history;_doc=s(te);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return kn().getBaseHref(this._doc)}onPopState(e){let t=kn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=kn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function v_(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function __(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function pr(n){return n&&n[0]!=="?"?`?${n}`:n}var xc=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:()=>s(NC),providedIn:"root"})}return n})(),kC=new b(""),NC=(()=>{class n extends xc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(te).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return v_(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+pr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,a){let o=this.prepareExternalUrl(r+pr(a));this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,a){let o=this.prepareExternalUrl(r+pr(a));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)($(za),$(kC,8))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fr=(()=>{class n{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=OC(__(b_(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+pr(t))}normalize(e){return n.stripTrailingSlash(IC(this._basePath,b_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+pr(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+pr(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=pr;static joinWithSlash=v_;static stripTrailingSlash=__;static \u0275fac=function(t){return new(t||n)($(xc))};static \u0275prov=X({token:n,factory:()=>TC(),providedIn:"root"})}return n})();function TC(){return new fr($(xc))}function IC(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function b_(n){return n.replace(/\/index\.html$/,"")}function OC(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var $t=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})($t||{}),tt=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(tt||{}),un=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(un||{}),Ki={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function S_(n){return An(n)[Ct.LocaleId]}function C_(n,i,e){let t=An(n),r=[t[Ct.DayPeriodsFormat],t[Ct.DayPeriodsStandalone]],a=Nn(r,i);return Nn(a,e)}function D_(n,i,e){let t=An(n),r=[t[Ct.DaysFormat],t[Ct.DaysStandalone]],a=Nn(r,i);return Nn(a,e)}function w_(n,i,e){let t=An(n),r=[t[Ct.MonthsFormat],t[Ct.MonthsStandalone]],a=Nn(r,i);return Nn(a,e)}function M_(n,i){let t=An(n)[Ct.Eras];return Nn(t,i)}function Cs(n,i){let e=An(n);return Nn(e[Ct.DateFormat],i)}function Ds(n,i){let e=An(n);return Nn(e[Ct.TimeFormat],i)}function ws(n,i){let t=An(n)[Ct.DateTimeFormat];return Nn(t,i)}function Ms(n,i){let e=An(n),t=e[Ct.NumberSymbols][i];if(typeof t>"u"){if(i===Ki.CurrencyDecimal)return e[Ct.NumberSymbols][Ki.Decimal];if(i===Ki.CurrencyGroup)return e[Ct.NumberSymbols][Ki.Group]}return t}function x_(n){if(!n[Ct.ExtraData])throw new ae(2303,!1)}function E_(n){let i=An(n);return x_(i),(i[Ct.ExtraData][2]||[]).map(t=>typeof t=="string"?Rh(t):[Rh(t[0]),Rh(t[1])])}function A_(n,i,e){let t=An(n);x_(t);let r=[t[Ct.ExtraData][0],t[Ct.ExtraData][1]],a=Nn(r,i)||[];return Nn(a,e)||[]}function Nn(n,i){for(let e=i;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new ae(2304,!1)}function Rh(n){let[i,e]=n.split(":");return{hours:+i,minutes:+e}}var FC=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Ec=Object.create(null),PC=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,LC=256;function R_(n,i,e,t){let r=YC(n);BC(i),i=qi(e,i)||i;let o=[],l;for(;i;)if(l=PC.exec(i),l){o=o.concat(l.slice(1));let p=o.pop();if(!p)break;i=p}else{o.push(i);break}let c=r.getTimezoneOffset();t&&(c=N_(t,c),r=WC(r,t));let m="";return o.forEach(p=>{let _=$C(p);m+=_?_(r,e,c):p==="''"?"'":p.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),m}function BC(n){if(n.length>LC)throw new ae(2300,!1)}function Tc(n,i,e){let t=new Date(0);return t.setFullYear(n,i,e),t.setHours(0,0,0),t}function qi(n,i){let e=S_(n);if(Ec[e]??=Object.create(null),Ec[e][i])return Ec[e][i];let t="";switch(i){case"shortDate":t=Cs(n,un.Short);break;case"mediumDate":t=Cs(n,un.Medium);break;case"longDate":t=Cs(n,un.Long);break;case"fullDate":t=Cs(n,un.Full);break;case"shortTime":t=Ds(n,un.Short);break;case"mediumTime":t=Ds(n,un.Medium);break;case"longTime":t=Ds(n,un.Long);break;case"fullTime":t=Ds(n,un.Full);break;case"short":let r=qi(n,"shortTime"),a=qi(n,"shortDate");t=Ac(ws(n,un.Short),[r,a]);break;case"medium":let o=qi(n,"mediumTime"),l=qi(n,"mediumDate");t=Ac(ws(n,un.Medium),[o,l]);break;case"long":let c=qi(n,"longTime"),m=qi(n,"longDate");t=Ac(ws(n,un.Long),[c,m]);break;case"full":let p=qi(n,"fullTime"),_=qi(n,"fullDate");t=Ac(ws(n,un.Full),[p,_]);break}return t&&(Ec[e][i]=t),t}function Ac(n,i){return i&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return Object.hasOwn(i,t)?i[t]:e})),n}function qn(n,i,e="-",t,r){let a="";(n<0||r&&n<=0)&&(r?n=-n+1:(n=-n,a=e));let o=String(n);for(;o.length<i;)o="0"+o;return t&&(o=o.slice(o.length-i)),a+o}function VC(n,i){return qn(n,3).substring(0,i)}function yt(n,i,e=0,t=!1,r=!1){return function(a,o){let l=jC(n,a);if((e>0||l>-e)&&(l+=e),n===3)l===0&&e===-12&&(l=12);else if(n===6)return VC(l,i);let c=Ms(o,Ki.MinusSign);return qn(l,i,c,t,r)}}function jC(n,i){switch(n){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new ae(2301,!1)}}function ct(n,i,e=$t.Format,t=!1){return function(r,a){return zC(r,a,n,i,e,t)}}function zC(n,i,e,t,r,a){switch(e){case 2:return w_(i,r,t)[n.getMonth()];case 1:return D_(i,r,t)[n.getDay()];case 0:let o=n.getHours(),l=n.getMinutes();if(a){let m=E_(i),p=A_(i,r,t),_=m.findIndex(y=>{if(Array.isArray(y)){let[P,H]=y,q=o>=P.hours&&l>=P.minutes,oe=o<H.hours||o===H.hours&&l<H.minutes;if(P.hours<H.hours){if(q&&oe)return!0}else if(q||oe)return!0}else if(y.hours===o&&y.minutes===l)return!0;return!1});if(_!==-1)return p[_]}return C_(i,r,t)[o<12?0:1];case 3:return M_(i,t)[n.getFullYear()<=0?0:1];default:let c=e;throw new ae(2302,!1)}}function Rc(n){return function(i,e,t){let r=-1*t,a=Ms(e,Ki.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(n){case 0:return(r>=0?"+":"")+qn(o,2,a)+qn(Math.abs(r%60),2,a);case 1:return"GMT"+(r>=0?"+":"")+qn(o,1,a);case 2:return"GMT"+(r>=0?"+":"")+qn(o,2,a)+":"+qn(Math.abs(r%60),2,a);case 3:return t===0?"Z":(r>=0?"+":"")+qn(o,2,a)+":"+qn(Math.abs(r%60),2,a);default:throw new ae(2310,!1)}}}var UC=0,Nc=4;function HC(n){let i=Tc(n,UC,1).getDay();return Tc(n,0,1+(i<=Nc?Nc:Nc+7)-i)}function k_(n){let i=n.getDay(),e=i===0?-3:Nc-i;return Tc(n.getFullYear(),n.getMonth(),n.getDate()+e)}function kh(n,i=!1){return function(e,t){let r;if(i){let a=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,o=e.getDate();r=1+Math.floor((o+a)/7)}else{let a=k_(e),o=HC(a.getFullYear()),l=a.getTime()-o.getTime();r=1+Math.round(l/6048e5)}return qn(r,n,Ms(t,Ki.MinusSign))}}function kc(n,i=!1){return function(e,t){let a=k_(e).getFullYear();return qn(a,n,Ms(t,Ki.MinusSign),i)}}var Nh=Object.create(null);function $C(n){if(Nh[n])return Nh[n];let i;switch(n){case"G":case"GG":case"GGG":i=ct(3,tt.Abbreviated);break;case"GGGG":i=ct(3,tt.Wide);break;case"GGGGG":i=ct(3,tt.Narrow);break;case"y":i=yt(0,1,0,!1,!0);break;case"yy":i=yt(0,2,0,!0,!0);break;case"yyy":i=yt(0,3,0,!1,!0);break;case"yyyy":i=yt(0,4,0,!1,!0);break;case"Y":i=kc(1);break;case"YY":i=kc(2,!0);break;case"YYY":i=kc(3);break;case"YYYY":i=kc(4);break;case"M":case"L":i=yt(1,1,1);break;case"MM":case"LL":i=yt(1,2,1);break;case"MMM":i=ct(2,tt.Abbreviated);break;case"MMMM":i=ct(2,tt.Wide);break;case"MMMMM":i=ct(2,tt.Narrow);break;case"LLL":i=ct(2,tt.Abbreviated,$t.Standalone);break;case"LLLL":i=ct(2,tt.Wide,$t.Standalone);break;case"LLLLL":i=ct(2,tt.Narrow,$t.Standalone);break;case"w":i=kh(1);break;case"ww":i=kh(2);break;case"W":i=kh(1,!0);break;case"d":i=yt(2,1);break;case"dd":i=yt(2,2);break;case"c":case"cc":i=yt(7,1);break;case"ccc":i=ct(1,tt.Abbreviated,$t.Standalone);break;case"cccc":i=ct(1,tt.Wide,$t.Standalone);break;case"ccccc":i=ct(1,tt.Narrow,$t.Standalone);break;case"cccccc":i=ct(1,tt.Short,$t.Standalone);break;case"E":case"EE":case"EEE":i=ct(1,tt.Abbreviated);break;case"EEEE":i=ct(1,tt.Wide);break;case"EEEEE":i=ct(1,tt.Narrow);break;case"EEEEEE":i=ct(1,tt.Short);break;case"a":case"aa":case"aaa":i=ct(0,tt.Abbreviated);break;case"aaaa":i=ct(0,tt.Wide);break;case"aaaaa":i=ct(0,tt.Narrow);break;case"b":case"bb":case"bbb":i=ct(0,tt.Abbreviated,$t.Standalone,!0);break;case"bbbb":i=ct(0,tt.Wide,$t.Standalone,!0);break;case"bbbbb":i=ct(0,tt.Narrow,$t.Standalone,!0);break;case"B":case"BB":case"BBB":i=ct(0,tt.Abbreviated,$t.Format,!0);break;case"BBBB":i=ct(0,tt.Wide,$t.Format,!0);break;case"BBBBB":i=ct(0,tt.Narrow,$t.Format,!0);break;case"h":i=yt(3,1,-12);break;case"hh":i=yt(3,2,-12);break;case"H":i=yt(3,1);break;case"HH":i=yt(3,2);break;case"m":i=yt(4,1);break;case"mm":i=yt(4,2);break;case"s":i=yt(5,1);break;case"ss":i=yt(5,2);break;case"S":i=yt(6,1);break;case"SS":i=yt(6,2);break;case"SSS":i=yt(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Rc(0);break;case"ZZZZZ":i=Rc(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Rc(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Rc(2);break;default:return null}return Nh[n]=i,i}function N_(n,i){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?i:e}function GC(n,i){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+i),n}function WC(n,i,e){let r=n.getTimezoneOffset(),a=N_(i,r);return GC(n,-1*(a-r))}function YC(n){if(y_(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[r,a=1,o=1]=n.split("-").map(l=>+l);return Tc(r,a-1,o)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(FC))return qC(t)}let i=new Date(n);if(!y_(i))throw new ae(2311,!1);return i}function qC(n){let i=new Date(0),e=0,t=0,r=n[8]?i.setUTCFullYear:i.setFullYear,a=n[8]?i.setUTCHours:i.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),r.call(i,Number(n[1]),Number(n[2])-1,Number(n[3]));let o=Number(n[4]||0)-e,l=Number(n[5]||0)-t,c=Number(n[6]||0),m=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return a.call(i,o,l,c,m),i}function y_(n){return n instanceof Date&&!isNaN(n.valueOf())}var xs=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(Q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Te(st))};static \u0275dir=C({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ke]})}return n})();function T_(n,i){return new ae(2100,!1)}var Th=class{createSubscription(i,e,t){return qe(()=>i.subscribe({next:e,error:t}))}dispose(i){qe(()=>i.unsubscribe())}},Ih=class{createSubscription(i,e,t){return i.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}},KC=new Ih,XC=new Th,Lt=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=s(_s);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(ea(e))return KC;if(r_(e))return XC;throw T_(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(Te(he,16))};static \u0275pipe=yh({name:"async",type:n,pure:!1})}return n})();var ZC="mediumDate",I_=new b(""),O_=new b(""),ia=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,a){if(e==null||e===""||e!==e)return null;try{let o=t??this.defaultOptions?.dateFormat??ZC,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return R_(e,o,a||this.locale,l)}catch(o){throw T_(n,o.message)}}static \u0275fac=function(t){return new(t||n)(Te(Va,16),Te(I_,24),Te(O_,24))};static \u0275pipe=yh({name:"date",type:n,pure:!0})}return n})();var gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})();function Es(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,a]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let o=a;try{o=decodeURIComponent(a)}catch{}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var QC=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Oh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=$(QC),r},providedIn:"root"})}return n})();function F_(n,i,e){return l_(n,i,e)}var Ph="browser";function P_(n){return n===Ph}var As=class{_doc;constructor(i){this._doc=i}manager},Ic=(()=>{class n extends As{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,a){return e.addEventListener(t,r,a),()=>this.removeEventListener(e,t,r,a)}removeEventListener(e,t,r,a){return e.removeEventListener(t,r,a)}static \u0275fac=function(t){return new(t||n)($(te))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),Pc=new b(""),jh=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof Ic));this._plugins=r.slice().reverse();let a=e.find(o=>o instanceof Ic);a&&this._plugins.push(a)}addEventListener(e,t,r,a){return this._findPluginFor(t).addEventListener(e,t,r,a)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(a=>a.supports(e)),!t)throw new ae(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)($(Pc),$(Z))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),Lh="ng-app-id";function L_(n){for(let i of n)i.remove()}function B_(n,i){let e=i.createElement("style");return e.textContent=n,e}function tD(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Lh}="${i}"],link[${Lh}="${i}"]`);if(!r||r.length===0)return!1;for(let a of r)a.removeAttribute(Lh),a instanceof HTMLLinkElement?t.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]});return!0}function Vh(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var zh=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,a={}){this.doc=e,this.appId=t,this.nonce=r,tD(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,B_);t?.forEach(r=>this.addUsage(r,this.external,Vh))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let a=t.get(e);a?a.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(L_(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])L_(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,B_(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Vh(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let a of t.elements)a.parentNode===e?a.remove():r.push(a);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)($(te),$(Kr),$(Xr,8),$(Na))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),Bh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uh=/%COMP%/g;var j_="%COMP%",nD=`_nghost-${j_}`,iD=`_ngcontent-${j_}`,rD=!0,aD=new b("",{factory:()=>rD}),oD=new b("");function sD(n){return iD.replace(Uh,n)}function lD(n){return nD.replace(Uh,n)}function z_(n,i){return i.map(e=>e.replace(Uh,n))}var Ns=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,a,o,l,c=null,m=null,p=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=l,this.nonce=c,this.tracingService=m,this.cssVarNamespace=p??"",this.defaultRenderer=new Rs(e,o,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Fc?r.applyToHost(e):r instanceof ks&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,a=r.get(t.id);if(!a){let o=this.doc,l=this.ngZone,c=this.eventManager,m=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,_=this.tracingService;switch(t.encapsulation){case yc.Emulated:a=new Fc(c,m,t,this.appId,p,o,l,_,this.cssVarNamespace);break;case yc.ShadowDom:return new Oc(c,e,t,o,l,this.nonce,_,this.cssVarNamespace,m);case yc.ExperimentalIsolatedShadowDom:return new Oc(c,e,t,o,l,this.nonce,_,this.cssVarNamespace);default:a=new ks(c,m,t,p,o,l,_,this.cssVarNamespace);break}r.set(t.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)($(jh),$(bs),$(Kr),$(aD),$(te),$(Z),$(Xr),$(Sc,8),$(oD,8))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),Rs=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,a=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Bh[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(V_(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(V_(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new ae(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let a=Bh[r];a?i.setAttributeNS(a,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Bh[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||r&(Oa.DashCase|Oa.Important)?i.style.setProperty(e,t,r&Oa.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&Oa.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=kn().getGlobalEventTarget(this.doc,i),!i))throw new ae(-5102,!1);let a=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(i,e,a)),this.eventManager.addEventListener(i,e,a,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function V_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Oc=class extends Rs{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,a,o,l,c,m){super(i,r,a,l,c),this.hostEl=e,this.sharedStylesHost=m,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let p=t.styles;p=z_(t.id,p).map(y=>y.replace(/%NS%/g,c));for(let y of p){let P=document.createElement("style");o&&P.setAttribute("nonce",o),P.textContent=y,this.shadowRoot.appendChild(P)}let _=t.getExternalStyles?.();if(_)for(let y of _){let P=Vh(y,r);o&&P.setAttribute("nonce",o),this.shadowRoot.appendChild(P)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ks=class extends Rs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,a,o,l,c,m){super(i,a,o,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let p=t.styles,_=m?z_(m,p):p;this.styles=_.map(y=>y.replace(/%NS%/g,c)),this.styleUrls=t.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&i_.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Fc=class extends ks{contentAttr;hostAttr;constructor(i,e,t,r,a,o,l,c,m){let p=r+"-"+t.id;super(i,e,t,a,o,l,c,m,p),this.contentAttr=sD(p),this.hostAttr=lD(p)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Lc=class n extends Ss{supportsDOMEvents=!0;static makeCurrent(){Ah(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=dD();return e==null?null:uD(e)}resetBaseElement(){Ts=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Es(document.cookie,i)}},Ts=null;function dD(){return Ts=Ts||document.head.querySelector("base"),Ts?Ts.getAttribute("href"):null}function uD(n){return new URL(n,document.baseURI).pathname}var U_=["alt","control","meta","shift"],mD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},hD={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},H_=(()=>{class n extends As{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,a){let o=n.parseEventName(t),l=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>kn().onAndCancel(e,o.domEventName,l,a))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let a=n._normalizeKey(t.pop()),o="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),o="code."),U_.forEach(m=>{let p=t.indexOf(m);p>-1&&(t.splice(p,1),o+=m+".")}),o+=a,t.length!=0||a.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(e,t){let r=mD[e.key]||e.key,a="";return t.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),U_.forEach(o=>{if(o!==r){let l=hD[o];l(e)&&(a+=o+".")}}),a+=r,a===t)}static eventCallback(e,t,r){return a=>{n.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>t(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)($(te))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})();async function Hh(n,i,e){let t=g({rootComponent:n},pD(i,e));return p_(t)}function pD(n,i){return{platformRef:i?.platformRef,appProviders:[...vD,...n?.providers??[]],platformProviders:bD}}function fD(){Lc.makeCurrent()}function gD(){return new Wn}function _D(){return Kg(document),document}var bD=[{provide:Na,useValue:Ph},{provide:Wg,useValue:fD,multi:!0},{provide:te,useFactory:_D}];var vD=[{provide:Hg,useValue:"root"},{provide:Wn,useFactory:gD},{provide:Pc,useClass:Ic,multi:!0},{provide:Pc,useClass:H_,multi:!0},Ns,{provide:bs,useClass:zh},{provide:zh,useExisting:bs},jh,{provide:Pt,useExisting:Ns},[]];var fi=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),a=e.slice(t+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let a=i.value;if(a===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(a)?a:[a],l=this.headers.get(e);if(!l)return;l=l.filter(c=>o.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Vc=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},jc=class{encodeKey(i){return $_(i)}encodeValue(i){return $_(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function yD(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[o,l]=a==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,a)),i.decodeValue(r.slice(a+1))],c=e.get(o)||[];c.push(l),e.set(o,c)}),e}var SD=/%(\d[a-f0-9])/gi,CD={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $_(n){return encodeURIComponent(n).replace(SD,(i,e)=>CD[e]??i)}function Bc(n){return`${n}`}var Xi=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new jc,i.fromString){if(i.fromObject)throw new ae(2805,!1);this.map=yD(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Bc):[Bc(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(a=>{e.push({param:t,value:a,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Bc(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Bc(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function DD(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function G_(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function W_(n){return typeof Blob<"u"&&n instanceof Blob}function Y_(n){return typeof FormData<"u"&&n instanceof FormData}function wD(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Is="Content-Type",zc="Accept",K_="text/plain",X_="application/json",Z_=`${X_}, ${K_}, */*`,Ua=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let a;if(DD(this.method)||r?(this.body=t!==void 0?t:null,a=r):a=t,a){if(this.reportProgress=!!a.reportProgress,this.reportUploadProgress=!!a.reportUploadProgress,this.reportDownloadProgress=!!a.reportDownloadProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new ae(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer!==void 0&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new fi,this.context??=new Vc,!this.params)this.params=new Xi,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e,c="",m=e.indexOf("#");m!==-1&&(c=e.substring(m),l=e.substring(0,m));let p=l.indexOf("?"),_=p===-1?"?":p<l.length-1?"&":"";this.urlWithParams=l+_+o+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||G_(this.body)||W_(this.body)||Y_(this.body)||wD(this.body)?this.body:this.body instanceof Xi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Y_(this.body)?null:W_(this.body)?this.body.type||null:G_(this.body)?null:typeof this.body=="string"?K_:this.body instanceof Xi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?X_:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,a=i.keepalive??this.keepalive,o=i.priority||this.priority,l=i.cache||this.cache,c=i.mode||this.mode,m=i.redirect||this.redirect,p=i.credentials||this.credentials,_=i.referrer??this.referrer,y=i.integrity||this.integrity,P=i.referrerPolicy||this.referrerPolicy,H=i.transferCache??this.transferCache,q=i.timeout??this.timeout,oe=i.body!==void 0?i.body:this.body,_e=i.withCredentials??this.withCredentials,se=i.reportProgress??this.reportProgress,de=i.reportUploadProgress??this.reportUploadProgress,Ae=i.reportDownloadProgress??this.reportDownloadProgress,Ue=i.headers||this.headers,ye=i.params||this.params,Et=i.context??this.context;return i.setHeaders!==void 0&&(Ue=Object.keys(i.setHeaders).reduce((bt,sn)=>bt.set(sn,i.setHeaders[sn]),Ue)),i.setParams&&(ye=Object.keys(i.setParams).reduce((bt,sn)=>bt.set(sn,i.setParams[sn]),ye)),new n(e,t,oe,{params:ye,headers:Ue,context:Et,reportProgress:se,reportUploadProgress:de,reportDownloadProgress:Ae,responseType:r,withCredentials:_e,transferCache:H,keepalive:a,cache:l,priority:o,timeout:q,mode:c,redirect:m,credentials:p,referrer:_,integrity:y,referrerPolicy:P})}},pi=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(pi||{}),Ha=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new fi,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Os=class n extends Ha{constructor(i={}){super(i)}type=pi.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},$a=class n extends Ha{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=pi.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},hi=class extends Ha{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Q_=200,MD=204;var xD=/^\)\]\}',?\n/,VF=1024*1024,J_=new b("",{factory:()=>null}),Uc=(()=>{class n{fetchImpl=s(Wh,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=s(Z);destroyRef=s(bn);maxResponseSize=s(J_);handle(e){return new nt(t=>{let r=new AbortController,a=!1,o={next:c=>{c.type===pi.Response&&(a=!0),t.next(c)},error:c=>{a=!0,t.error(c)},complete:()=>{a=!0,t.complete()}};this.doRequest(e,r.signal,o).then(Yh,c=>o.error(new hi({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!a&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let a=this.createRequestInit(e),o;try{let oe=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,g({signal:t},a)));ED(oe),r.next({type:pi.Sent}),o=await oe}catch(oe){r.error(new hi({error:oe,status:oe.status??0,statusText:oe.statusText,url:e.urlWithParams,headers:oe.headers}));return}let l=new fi(o.headers),c=o.statusText,m=o.url||e.urlWithParams,p=o.status,_=null,y=e.reportProgress||e.reportDownloadProgress;if(y&&r.next(new Os({headers:l,status:p,statusText:c,url:m})),o.body){let oe=o.headers.get(Is)??"",_e=o.headers.get("content-length"),se=_e!==null?Number(_e):NaN;this.maxResponseSize!==null&&Number.isFinite(se)&&se>this.maxResponseSize&&q_(this.maxResponseSize);let de=[],Ae=o.body.getReader(),Ue=0,ye,Et,bt=typeof Zone<"u"&&Zone.current,sn=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Ae.cancel(),sn=!0;break}let{done:dh,value:uh}=await Ae.read();if(dh)break;if(de.push(uh),Ue+=uh.length,this.maxResponseSize!==null&&Ue>this.maxResponseSize&&(await Ae.cancel(),q_(this.maxResponseSize)),y){Et=e.responseType==="text"?(Et??"")+(ye??=$h(oe)).decode(uh,{stream:!0}):void 0;let Ag=()=>r.next({type:pi.DownloadProgress,total:Number.isFinite(se)?se:void 0,loaded:Ue,partialText:Et});bt?bt.run(Ag):Ag()}}}),sn){r.complete();return}let RC=this.concatChunks(de,Ue);try{_=this.parseBody(e,RC,oe,p)}catch(dh){r.error(new hi({error:dh,headers:new fi(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}p===0&&(p=_?Q_:0);let P=p>=200&&p<300,H=o.redirected,q=o.type;P?(r.next(new $a({body:_,headers:l,status:p,statusText:c,url:m,redirected:H,responseType:q})),r.complete()):r.error(new hi({error:_,headers:l,status:p,statusText:c,url:m,redirected:H,responseType:q}))}parseBody(e,t,r,a){switch(e.responseType){case"json":let o=$h(r).decode(t).replace(xD,"");if(o==="")return null;try{return JSON.parse(o)}catch(l){if(a<200||a>=300)return o;throw l}case"text":return $h(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new ae(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((a,o)=>t[a]=o.join(",")),e.headers.has(zc)||(t[zc]=Z_),!e.headers.has(Is)){let a=e.detectContentTypeHeader();a!==null&&(t[Is]=a)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),a=0;for(let o of e)r.set(o,a),a+=o.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Wh=class{};function Yh(){}function ED(n){n.then(Yh,Yh)}function q_(n){throw new ae(-2825,!1)}var AD=/charset=\s*["']?([^;"'\s]+)["']?/i;function $h(n){let i=n.match(AD);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var RD=new b("",{factory:()=>!0}),kD="XSRF-TOKEN",ND=new b("",{factory:()=>kD}),TD="X-XSRF-TOKEN",ID=new b("",{factory:()=>TD}),OD=(()=>{class n{cookieName=s(ND);doc=s(te);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Es(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),eb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=$(OD),r},providedIn:"root"})}return n})();function tb(n,i){if(!s(RD)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=s(za).href,{origin:a}=new URL(r),{origin:o}=new URL(n.url,a);if(a!==o)return i(n)}catch{return i(n)}let e=s(eb).getToken(),t=s(ID);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function FD(n,i){return i(n)}function PD(n,i,e){return(t,r)=>cn(e,()=>i(t,a=>n(a,r)))}var Kh=new b("",{factory:()=>[tb]}),nb=new b(""),ib=new b("",{factory:()=>!0});var $c=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=$(Uc),r},providedIn:"root"})}return n})();var Hc=(()=>{class n{backend;injector;chain=null;pendingTasks=s(bh);contributeToStability=s(ib);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(Gc,null,{skipSelf:!0}),a=r!==null&&this.backend===r,o=this.injector.get(nb,[],a?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(Kh),...o]));this.chain=l.reduceRight((c,m)=>PD(c,m,this.injector),FD)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return qe(()=>t(e,a=>this.backend.handle(a))).pipe(Ra(r))}else return qe(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)($($c),$(Rt))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=$(Hc),r},providedIn:"root"})}return n})();function Gh(n,i){return g({body:i},n)}var mn=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let a;if(e instanceof Ua)a=e;else{let c;r.headers instanceof fi?c=r.headers:c=new fi(r.headers);let m;r.params&&(r.params instanceof Xi?m=r.params:m=new Xi({fromObject:r.params})),a=new Ua(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:m,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=D(a).pipe(Yr(c=>this.handler.handle(c)));if(e instanceof Ua||r.observe==="events")return o;let l=o.pipe(me(c=>c instanceof $a));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(x(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new ae(2806,!1);return c.body}));case"blob":return l.pipe(x(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new ae(2807,!1);return c.body}));case"text":return l.pipe(x(c=>{if(c.body!==null&&typeof c.body!="string")throw new ae(2808,!1);return c.body}));default:return l.pipe(x(c=>c.body))}case"response":return l;default:throw new ae(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Xi().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Gh(r,t))}post(e,t,r={}){return this.request("POST",e,Gh(r,t))}put(e,t,r={}){return this.request("PUT",e,Gh(r,t))}static \u0275fac=function(t){return new(t||n)($(Gc))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var LD=/^\)\]\}',?\n/;var qh=(()=>{class n{xhrFactory;tracingService=s(Sc,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new ae(-2800,!1);let t=this.xhrFactory;return D(null).pipe(Oe(()=>new nt(a=>{let o=t.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((se,de)=>o.setRequestHeader(se,de.join(","))),e.headers.has(zc)||o.setRequestHeader(zc,Z_),!e.headers.has(Is)){let se=e.detectContentTypeHeader();se!==null&&o.setRequestHeader(Is,se)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let se=e.responseType.toLowerCase();o.responseType=se!=="json"?se:"text"}let l=e.serializeBody(),c=null,m=()=>{if(c!==null)return c;let se=o.statusText||"OK",de=new fi(o.getAllResponseHeaders()),Ae=o.responseURL||e.url;return c=new Os({headers:de,status:o.status,statusText:se,url:Ae}),c},p=this.maybePropagateTrace(()=>{let{headers:se,status:de,statusText:Ae,url:Ue}=m(),ye=null;de!==MD&&(ye=typeof o.response>"u"?o.responseText:o.response),de===0&&(de=ye?Q_:0);let Et=de>=200&&de<300;if(e.responseType==="json"&&typeof ye=="string"){let bt=ye;ye=ye.replace(LD,"");try{ye=ye!==""?JSON.parse(ye):null}catch(sn){ye=bt,Et&&(Et=!1,ye={error:sn,text:ye})}}Et?(a.next(new $a({body:ye,headers:se,status:de,statusText:Ae,url:Ue||void 0})),a.complete()):a.error(new hi({error:ye,headers:se,status:de,statusText:Ae,url:Ue||void 0}))}),_=this.maybePropagateTrace(se=>{let{url:de}=m(),Ae=new hi({error:se,status:o.status||0,statusText:o.statusText||"Unknown Error",url:de||void 0});a.error(Ae)}),y=_;e.timeout&&(y=this.maybePropagateTrace(se=>{let{url:de}=m(),Ae=new hi({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:de||void 0});a.error(Ae)}));let P=!1,H=this.maybePropagateTrace(se=>{P||(a.next(m()),P=!0);let de={type:pi.DownloadProgress,loaded:se.loaded};se.lengthComputable&&(de.total=se.total),e.responseType==="text"&&o.responseText&&(de.partialText=o.responseText),a.next(de)}),q=this.maybePropagateTrace(se=>{let de={type:pi.UploadProgress,loaded:se.loaded};se.lengthComputable&&(de.total=se.total),a.next(de)});o.addEventListener("load",p),o.addEventListener("error",_),o.addEventListener("timeout",y),o.addEventListener("abort",_);let oe=e.reportProgress||e.reportUploadProgress,_e=e.reportProgress||e.reportDownloadProgress;return _e&&o.addEventListener("progress",H),oe&&l!==null&&o.upload&&o.upload.addEventListener("progress",q),o.send(l),a.next({type:pi.Sent}),()=>{o.removeEventListener("error",_),o.removeEventListener("abort",_),o.removeEventListener("load",p),o.removeEventListener("timeout",y),_e&&o.removeEventListener("progress",H),oe&&l!==null&&o.upload&&o.upload.removeEventListener("progress",q),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||n)($(Oh))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wc=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n[n.Xhr=7]="Xhr",n})(Wc||{});function rb(n,i){return{\u0275kind:n,\u0275providers:i}}function Xh(...n){let i=[mn,Uc,Hc,{provide:Gc,useExisting:Hc},{provide:$c,useFactory:()=>s(Uc)},{provide:Kh,useValue:tb,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return Jt(i)}function Zh(n){return rb(Wc.Interceptors,n.map(i=>({provide:Kh,useValue:i,multi:!0})))}function Qh(){return rb(Wc.Xhr,[qh,{provide:$c,useExisting:qh}])}var ab=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)($(te))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=$(jD),r},providedIn:"root"})}return n})(),jD=(()=>{class n extends Fs{_doc=s(te);sanitize(e,t){if(t==null)return null;switch(e){case en.NONE:return t;case en.HTML:return Ia(t,"HTML")?Qr(t):n_(this._doc,String(t)).toString();case en.STYLE:return Ia(t,"Style")?Qr(t):t;case en.SCRIPT:if(Ia(t,"Script"))return Qr(t);throw new ae(5200,!1);case en.URL:return Ia(t,"URL")?Qr(t):t_(String(t));case en.RESOURCE_URL:if(Ia(t,"ResourceURL"))return Qr(t);throw new ae(-5201,!1);default:throw new ae(5202,!1)}}bypassSecurityTrustHtml(e){return Xg(e)}bypassSecurityTrustStyle(e){return Zg(e)}bypassSecurityTrustScript(e){return Qg(e)}bypassSecurityTrustUrl(e){return Jg(e)}bypassSecurityTrustResourceUrl(e){return e_(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var ve="primary",Ks=Symbol("RouteTitle"),ip=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function aa(n){return new ip(n)}function Jh(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],a=i[t];if(r[0]===":")e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function fb(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},m=n.slice(0,t.length);return Jh(t,m,c)?{consumed:m,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let a=t.slice(0,r),o=t.slice(r+1);if(a.length+o.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!Jh(a,n.slice(0,a.length),l)||!Jh(o,n.slice(n.length-o.length),l)?null:{consumed:n,posParams:l}}function Qc(n){return new Promise((i,e)=>{n.pipe(dr()).subscribe({next:t=>i(t),error:t=>e(t)})})}function zD(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!gi(n[e],i[e]))return!1;return!0}function gi(n,i){let e=n?rp(n):void 0,t=i?rp(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!gb(n[r],i[r]))return!1;return!0}function rp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function gb(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,a)=>t[a]===r)}else return n===i}function UD(n){return n.length>0?n[n.length-1]:null}function la(n){return Aa(n)?n:ea(n)?ln(Promise.resolve(n)):D(n)}function _b(n){return Aa(n)?Qc(n):Promise.resolve(n)}var HD={exact:yb,subset:Sb},bb={exact:$D,subset:GD,ignored:()=>!0},vb={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ap={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function sb(n,i,e){return HD[e.paths](n.root,i.root,e.matrixParams)&&bb[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function $D(n,i){return gi(n,i)}function yb(n,i,e){if(!ra(n.segments,i.segments)||!Kc(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!yb(n.children[t],i.children[t],e))return!1;return!0}function GD(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>gb(n[e],i[e]))}function Sb(n,i,e){return Cb(n,i,i.segments,e)}function Cb(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!ra(r,e)||i.hasChildren()||!Kc(r,e,t))}else if(n.segments.length===e.length){if(!ra(n.segments,e)||!Kc(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Sb(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),a=e.slice(n.segments.length);return!ra(n.segments,r)||!Kc(n.segments,r,t)||!n.children[ve]?!1:Cb(n.children[ve],i,a,t)}}function Kc(n,i,e){return i.every((t,r)=>bb[e](n[r].parameters,t.parameters))}var In=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Ke([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=aa(this.queryParams),this._queryParamMap}toString(){return qD.serialize(this)}},Ke=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xc(this)}},_r=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=aa(this.parameters),this._parameterMap}toString(){return wb(this)}};function WD(n,i){return ra(n,i)&&n.every((e,t)=>gi(e.parameters,i[t].parameters))}function ra(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function YD(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===ve&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==ve&&(e=e.concat(i(r,t)))}),e}var Xs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:()=>new br})}return n})(),br=class{parse(i){let e=new sp(i);return new In(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Ps(i.root,!0)}`,t=ZD(i.queryParams),r=typeof i.fragment=="string"?`#${KD(i.fragment)}`:"";return`${e}${t}${r}`}},qD=new br;function Xc(n){return n.segments.map(i=>wb(i)).join("/")}function Ps(n,i){if(!n.hasChildren())return Xc(n);if(i){let e=n.children[ve]?Ps(n.children[ve],!1):"",t=[];return Object.entries(n.children).forEach(([r,a])=>{r!==ve&&t.push(`${r}:${Ps(a,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=YD(n,(t,r)=>r===ve?[Ps(n.children[ve],!1)]:[`${r}:${Ps(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[ve]!=null?`${Xc(n)}/${e[0]}`:`${Xc(n)}/(${e.join("//")})`}}function Db(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Yc(n){return Db(n).replace(/%3B/gi,";")}function KD(n){return encodeURI(n)}function op(n){return Db(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zc(n){return decodeURIComponent(n)}function lb(n){return Zc(n.replace(/\+/g,"%20"))}function wb(n){return`${op(n.path)}${XD(n.parameters)}`}function XD(n){return Object.entries(n).map(([i,e])=>`;${op(i)}=${op(e)}`).join("")}function ZD(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Yc(e)}=${Yc(r)}`).join("&"):`${Yc(e)}=${Yc(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var QD=/^[^\/()?;#]+/;function ep(n){let i=n.match(QD);return i?i[0]:""}var JD=/^[^\/()?;=#]+/;function ew(n){let i=n.match(JD);return i?i[0]:""}var tw=/^[^=?&#]+/;function nw(n){let i=n.match(tw);return i?i[0]:""}var iw=/^[^&#]+/;function rw(n){let i=n.match(iw);return i?i[0]:""}var sp=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ke([],{}):new Ke([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new ae(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[ve]=new Ke(e,t)),r}parseSegment(){let i=ep(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new ae(4009,!1);return this.capture(i),new _r(Zc(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=ew(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=ep(this.remaining);r&&(t=r,this.capture(t))}i[Zc(e)]=Zc(t)}parseQueryParam(i){let e=nw(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=rw(this.remaining);o&&(t=o,this.capture(t))}let r=lb(e),a=lb(t);if(Object.hasOwn(i,r)){let o=i[r];Array.isArray(o)||(o=[o],i[r]=o),o.push(a)}else i[r]=a}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ep(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new ae(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=ve);let l=this.parseChildren(e+1);t[o??ve]=Object.keys(l).length===1&&l[ve]?l[ve]:new Ke([],l),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new ae(4011,!1)}};function Mb(n){return n.segments.length>0?new Ke([],{[ve]:n}):n}function xb(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let a=xb(r);if(t===ve&&a.segments.length===0&&a.hasChildren())for(let[o,l]of Object.entries(a.children))i[o]=l;else(a.segments.length>0||a.hasChildren())&&(i[t]=a)}let e=new Ke(n.segments,i);return aw(e)}function aw(n){if(n.numberOfChildren===1&&n.children[ve]){let i=n.children[ve];return new Ke(n.segments.concat(i.segments),i.children)}return n}function qa(n){return n instanceof In}function Eb(n,i,e=null,t=null,r=new br){let a=Ab(n);return Rb(a,i,e,t,r)}function Ab(n){let i;function e(a){let o={};for(let c of a.children){let m=e(c);o[c.outlet]=m}let l=new Ke(a.url,o);return a===n&&(i=l),l}let t=e(n.root),r=Mb(t);return i??r}function Rb(n,i,e,t,r){let a=n;for(;a.parent;)a=a.parent;if(i.length===0)return tp(a,a,a,e,t,r);let o=ow(i);if(o.toRoot())return tp(a,a,new Ke([],{}),e,t,r);let l=sw(o,a,n),c=l.processChildren?Bs(l.segmentGroup,l.index,o.commands):Nb(l.segmentGroup,l.index,o.commands);return tp(a,l.segmentGroup,c,e,t,r)}function Jc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function zs(n){return typeof n=="object"&&n!=null&&n.outlets}function cb(n,i,e){n||="\u0275";let t=new In;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function tp(n,i,e,t,r,a){let o={};for(let[m,p]of Object.entries(t??{}))o[m]=Array.isArray(p)?p.map(_=>cb(m,_,a)):cb(m,p,a);let l;n===i?l=e:l=kb(n,i,e);let c=Mb(xb(l));return new In(c,o,r)}function kb(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,a])=>{a===i?t[r]=e:t[r]=kb(a,i,e)}),new Ke(n.segments,t)}var ed=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Jc(t[0]))throw new ae(4003,!1);let r=t.find(zs);if(r&&r!==UD(t))throw new ae(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ow(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ed(!0,0,n);let i=0,e=!1,t=n.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let l={};return Object.entries(a.outlets).forEach(([c,m])=>{l[c]=typeof m=="string"?m.split("/"):m}),[...r,{outlets:l}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((l,c)=>{c==0&&l==="."||(c==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,a]},[]);return new ed(e,i,t)}var Wa=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function sw(n,i,e){if(n.isAbsolute)return new Wa(i,!0,0);if(!e)return new Wa(i,!1,NaN);if(e.parent===null)return new Wa(e,!0,0);let t=Jc(n.commands[0])?0:1,r=e.segments.length-1+t;return lw(e,r,n.numberOfDoubleDots)}function lw(n,i,e){let t=n,r=i,a=e;for(;a>r;){if(a-=r,t=t.parent,!t)throw new ae(4005,!1);r=t.segments.length}return new Wa(t,!1,r-a)}function cw(n){return zs(n[0])?n[0].outlets:{[ve]:n}}function Nb(n,i,e){if(n??=new Ke([],{}),n.segments.length===0&&n.hasChildren())return Bs(n,i,e);let t=dw(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let a=new Ke(n.segments.slice(0,t.pathIndex),{});return a.children[ve]=new Ke(n.segments.slice(t.pathIndex),n.children),Bs(a,0,r)}else return t.match&&r.length===0?new Ke(n.segments,{}):t.match&&!n.hasChildren()?lp(n,i,e):t.match?Bs(n,0,r):lp(n,i,e)}function Bs(n,i,e){if(e.length===0)return new Ke(n.segments,{});{let t=cw(e),r=Object.create(null);if(Object.keys(t).some(a=>a!==ve)&&n.children[ve]&&n.numberOfChildren===1&&n.children[ve].segments.length===0){let a=Bs(n.children[ve],i,e);return new Ke(n.segments,a.children)}return Object.entries(t).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=Nb(n.children[a],i,o))}),Object.entries(n.children).forEach(([a,o])=>{t[a]===void 0&&(r[a]=o)}),new Ke(n.segments,r)}}function dw(n,i,e){let t=0,r=i,a={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return a;let o=n.segments[r],l=e[t];if(zs(l))break;let c=`${l}`,m=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&m&&typeof m=="object"&&m.outlets===void 0){if(!ub(c,m,o))return a;t+=2}else{if(!ub(c,{},o))return a;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function lp(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let a=e[r];if(zs(a)){let c=uw(a.outlets);return new Ke(t,c)}if(r===0&&Jc(e[0])){let c=n.segments[i];t.push(new _r(c.path,db(e[0]))),r++;continue}let o=zs(a)?a.outlets[ve]:`${a}`,l=r<e.length-1?e[r+1]:null;o&&l&&Jc(l)?(t.push(new _r(o,db(l))),r+=2):(t.push(new _r(o,{})),r++)}return new Ke(t,{})}function uw(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=lp(new Ke([],{}),0,t))}),i}function db(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function ub(n,i,e){return n==e.path&&gi(i,e.parameters)}var Vs="imperative",It=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(It||{}),Sn=class{id;url;constructor(i,e){this.id=i,this.url=e}},oa=class extends Sn{type=It.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Qi=class extends Sn{urlAfterRedirects;type=It.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Gt=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Gt||{}),Us=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Us||{}),Tn=class extends Sn{reason;code;type=It.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Tb(n){return n instanceof Tn&&(n.code===Gt.Redirect||n.code===Gt.SupersededByNewNavigation)}var Ji=class extends Sn{reason;code;type=It.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},sa=class extends Sn{error;target;type=It.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Hs=class extends Sn{urlAfterRedirects;state;type=It.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},td=class extends Sn{urlAfterRedirects;state;type=It.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nd=class extends Sn{urlAfterRedirects;state;shouldActivate;type=It.GuardsCheckEnd;constructor(i,e,t,r,a){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},id=class extends Sn{urlAfterRedirects;state;type=It.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rd=class extends Sn{urlAfterRedirects;state;type=It.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ad=class{route;type=It.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},od=class{route;type=It.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},sd=class{snapshot;type=It.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ld=class{snapshot;type=It.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cd=class{snapshot;type=It.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dd=class{snapshot;type=It.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ka=class{},$s=class{},Xa=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function mw(n){return!(n instanceof Ka)&&!(n instanceof Xa)&&!(n instanceof $s)}var ud=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new eo(this.rootInjector)}},eo=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new ud(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)($(Rt))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),md=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=cp(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=cp(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=dp(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return dp(i,this._root).map(e=>e.value)}};function cp(n,i){if(n===i.value)return i;for(let e of i.children){let t=cp(n,e);if(t)return t}return null}function dp(n,i){if(n===i.value)return[i];for(let e of i.children){let t=dp(n,e);if(t.length)return t.unshift(i),t}return[]}var yn=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ga(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Gs=class extends md{snapshot;constructor(i,e){super(i),this.snapshot=e,vp(this,i)}toString(){return this.snapshot.toString()}};function Ib(n,i){let e=hw(n,i),t=new dt([new _r("",{})]),r=new dt({}),a=new dt({}),o=new dt({}),l=new dt(""),c=new vr(t,r,o,l,a,ve,n,e.root);return c.snapshot=e.root,new Gs(new yn(c,[]),e)}function hw(n,i){let e={},t={},r={},o=new Za([],e,r,"",t,ve,n,null,{},i);return new Ws("",new yn(o,[]))}var vr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,t,r,a,o,l,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=l,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(x(m=>m[Ks]))??D(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(x(i=>aa(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(x(i=>aa(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},pw="always";function bp(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:g(g({},i.params),n.params),data:g(g({},i.data),n.data),resolve:g(g(g(g({},n.data),i.data),r?.data),n._resolvedData)}:t={params:g({},n.params),data:g({},n.data),resolve:g(g({},n.data),n._resolvedData??{})},r&&Fb(r)&&(t.resolve[Ks]=r.title),t}var Za=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ks]}constructor(i,e,t,r,a,o,l,c,m,p){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a,this.outlet=o,this.component=l,this.routeConfig=c,this._resolve=m,this._environmentInjector=p}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=aa(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=aa(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Ws=class extends md{url;constructor(i,e){super(e),this.url=i,vp(this,e)}toString(){return Ob(this._root)}};function vp(n,i){i.value._routerState=n,i.children.forEach(e=>vp(n,e))}function Ob(n){let i=n.children.length>0?` { ${n.children.map(Ob).join(", ")} } `:"";return`${n.value}${i}`}function np(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,gi(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),gi(i.params,e.params)||n.paramsSubject.next(e.params),zD(i.url,e.url)||n.urlSubject.next(e.url),gi(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function up(n,i){let e=gi(n.params,i.params)&&WD(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||up(n.parent,i.parent))}function Fb(n){return typeof n.title=="string"||n.title===null}var Pb=new b(""),Zs=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ve;activateEvents=new R;deactivateEvents=new R;attachEvents=new R;detachEvents=new R;routerOutletData=ja();parentContexts=s(eo);location=s(st);changeDetector=s(he);inputBinder=s(gd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ae(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ae(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ae(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new ae(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,c=new mp(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ke]})}return n})(),mp=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===vr?this.route:i===eo?this.childContexts:i===Pb?this.outletData:this.parent.get(i,e)}},gd=new b("");var yp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&F(0,"router-outlet")},dependencies:[Zs],encapsulation:2,changeDetection:1})}return n})();function Sp(n){let i=n.children&&n.children.map(Sp),e=i?v(g({},n),{children:i}):g({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ve&&(e.component=yp),e}function fw(n,i,e){let t=new Set,r=Ys(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new Gs(r,i)}}function Ys(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;let a=gw(n,i,e,t);return new yn(r,a)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let l=o.route;return l.value._futureSnapshot=i.value,l.children=i.children.map(c=>Ys(n,c,void 0,t)),l}}let r=_w(i.value);t.add(r);let a=i.children.map(o=>Ys(n,o,void 0,t));return new yn(r,a)}}function gw(n,i,e,t){return i.children.map(r=>{for(let a of e.children)if(n.shouldReuseRoute(r.value,a.value.snapshot))return Ys(n,r,a,t);return Ys(n,r,void 0,t)})}function _w(n){return new vr(new dt(n.url),new dt(n.params),new dt(n.queryParams),new dt(n.fragment),new dt(n.data),n.outlet,n.component,n)}var Qa=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Lb="ngNavigationCancelingError";function hd(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=qa(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Bb(!1,Gt.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Bb(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Lb]=!0,e.cancellationCode=i,e}function bw(n){return Vb(n)&&qa(n.url)}function Vb(n){return!!n&&n[Lb]}var hp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,a){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=a}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),np(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Ga(e);i.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],t),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,t)})}deactivateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(r===a)if(r.component){let o=t.getContext(r.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,t);else a&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=Ga(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(t&&t.outlet){let o=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=Ga(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=Ga(e);i.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],t),this.forwardEvent(new dd(a.value.snapshot))}),i.children.length&&this.forwardEvent(new ld(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(np(r),r===a)if(r.component){let o=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let o=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),np(l.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,t)}},pd=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ya=class{component;route;constructor(i,e){this.component=i,this.route=e}};function vw(n,i,e){let t=n._root,r=i?i._root:null;return Ls(t,r,e,[t.value])}function yw(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function to(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Ug(n)?n:i.get(n):t}function Ls(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=Ga(i);return n.children.forEach(o=>{Sw(o,a[o.value.outlet],e,t.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,l])=>js(l,e.getContext(o),r)),r}function Sw(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=n.value,o=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=Cw(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new pd(t)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Ls(n,i,l?l.children:null,t,r):Ls(n,i,e,t,r),c&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new Ya(l.outlet.component,o))}else o&&js(i,l,r),r.canActivateChecks.push(new pd(t)),a.component?Ls(n,null,l?l.children:null,t,r):Ls(n,null,e,t,r);return r}function Cw(n,i,e){if(typeof e=="function")return cn(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ra(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ra(n.url,i.url)||!gi(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!up(n,i)||!gi(n.queryParams,i.queryParams);default:return!up(n,i)}}function js(n,i,e){let t=Ga(n),r=n.value;Object.entries(t).forEach(([a,o])=>{r.component?i?js(o,i.children.getContext(a),e):js(o,null,e):js(o,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ya(i.outlet.component,r)):e.canDeactivateChecks.push(new Ya(null,r)):e.canDeactivateChecks.push(new Ya(null,r))}function Qs(n){return typeof n=="function"}function Dw(n){return typeof n=="boolean"}function ww(n){return n&&Qs(n.canLoad)}function Mw(n){return n&&Qs(n.canActivate)}function xw(n){return n&&Qs(n.canActivateChild)}function Ew(n){return n&&Qs(n.canDeactivate)}function Aw(n){return n&&Qs(n.canMatch)}function jb(n){return n instanceof Ng||n?.name==="EmptyError"}var qc=Symbol("INITIAL_VALUE");function Ja(){return Oe(n=>zt(n.map(i=>i.pipe(Ie(1),Ze(qc)))).pipe(x(i=>{for(let e of i)if(e!==!0){if(e===qc)return qc;if(e===!1||Rw(e))return e}return!0}),me(i=>i!==qc),Ie(1)))}function Rw(n){return qa(n)||n instanceof Qa}function zb(n){return n.aborted?D(void 0).pipe(Ie(1)):new nt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Ub(n){return G(zb(n))}function kw(n){return we(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:a}}=i;return a.length===0&&r.length===0?D(v(g({},i),{guardsResult:!0})):Nw(a,e,t).pipe(we(o=>o&&Dw(o)?Tw(e,r,n):D(o)),x(o=>v(g({},i),{guardsResult:o})))})}function Nw(n,i,e){return ln(n).pipe(we(t=>Lw(t.component,t.route,e,i)),dr(t=>t!==!0,!0))}function Tw(n,i,e){return ln(i).pipe(Yr(t=>fc(Ow(t.route.parent,e),Iw(t.route,e),Pw(n,t.path),Fw(n,t.route))),dr(t=>t!==!0,!0))}function Iw(n,i){return n!==null&&i&&i(new cd(n)),D(!0)}function Ow(n,i){return n!==null&&i&&i(new sd(n)),D(!0)}function Fw(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return D(!0);let t=e.map(r=>En(()=>{let a=i._environmentInjector,o=to(r,a),l=Mw(o)?o.canActivate(i,n):cn(a,()=>o(i,n));return la(l).pipe(dr())}));return D(t).pipe(Ja())}function Pw(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(a=>yw(a)).filter(a=>a!==null).map(a=>En(()=>{let o=a.guards.map(l=>{let c=a.node._environmentInjector,m=to(l,c),p=xw(m)?m.canActivateChild(e,n):cn(c,()=>m(e,n));return la(p).pipe(dr())});return D(o).pipe(Ja())}));return D(r).pipe(Ja())}function Lw(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return D(!0);let a=r.map(o=>{let l=i._environmentInjector,c=to(o,l),m=Ew(c)?c.canDeactivate(n,i,e,t):cn(l,()=>c(n,i,e,t));return la(m).pipe(dr())});return D(a).pipe(Ja())}function Bw(n,i,e,t,r){let a=i.canLoad;if(a===void 0||a.length===0)return D(!0);let o=a.map(l=>{let c=to(l,n),m=ww(c)?c.canLoad(i,e):cn(n,()=>c(i,e)),p=la(m);return r?p.pipe(Ub(r)):p});return D(o).pipe(Ja(),Hb(t))}function Hb(n){return Rg(it(i=>{if(typeof i!="boolean")throw hd(n,i)}),x(i=>i===!0))}function Vw(n,i,e,t,r,a){let o=i.canMatch;if(!o||o.length===0)return D(!0);let l=o.map(c=>{let m=to(c,n),p=Aw(m)?m.canMatch(i,e,r):cn(n,()=>m(i,e,r));return la(p).pipe(Ub(a))});return D(l).pipe(Ja(),Hb(t))}var Zi=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},qs=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function jw(n){throw new ae(4e3,!1)}function zw(n){throw Bb(!1,Gt.GuardRejected)}var pp=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[ve])throw jw(`${i.redirectTo}`);r=r.children[ve]}}async applyRedirectCommands(i,e,t,r,a){let o=await Uw(e,r,a);if(o instanceof In)throw new qs(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,t);if(o[0]==="/")throw new qs(l);return l}applyRedirectCreateUrlTree(i,e,t,r){let a=this.createSegmentGroup(i,e.root,t,r);return new In(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let l=a.substring(1);t[r]=e[l]}else t[r]=a}),t}createSegmentGroup(i,e,t,r){let a=this.createSegments(i,e.segments,t,r),o=Object.create(null);return Object.entries(e.children).forEach(([l,c])=>{o[l]=this.createSegmentGroup(i,c,t,r)}),new Ke(a,o)}createSegments(i,e,t,r){return e.map(a=>a.path[0]===":"?this.findPosParam(i,a,r):this.findOrReturn(a,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new ae(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Uw(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Qc(la(cn(e,()=>t(i))))}function Hw(n,i){return n.providers&&!n._injector&&(n._injector=vh(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Kn(n){return n.outlet||ve}function $w(n,i){let e=n.filter(t=>Kn(t)===i);return e.push(...n.filter(t=>Kn(t)!==i)),e}var fp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function $b(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Gw(n,i,e,t,r,a,o){let l=Gb(n,i,e);if(!l.matched)return D(l);let c=$b(a(l));return t=Hw(i,t),Vw(t,i,e,r,c,o).pipe(x(m=>m===!0?l:g({},fp)))}function Gb(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?g({},fp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||fb)(e,n,i);if(!r)return g({},fp);let a={};Object.entries(r.posParams??{}).forEach(([l,c])=>{a[l]=c.path});let o=r.consumed.length>0?g(g({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function mb(n,i,e,t,r){return e.length>0&&qw(n,e,t,r)?{segmentGroup:new Ke(i,Yw(t,new Ke(e,n.children))),slicedSegments:[]}:e.length===0&&Kw(n,e,t)?{segmentGroup:new Ke(n.segments,Ww(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new Ke(n.segments,n.children),slicedSegments:e}}function Ww(n,i,e,t){let r={};for(let a of e)if(_d(n,i,a)&&!t[Kn(a)]){let o=new Ke([],{});r[Kn(a)]=o}return g(g({},t),r)}function Yw(n,i){let e={};e[ve]=i;for(let t of n)if(t.path===""&&Kn(t)!==ve){let r=new Ke([],{});e[Kn(t)]=r}return e}function qw(n,i,e,t){return e.some(r=>!_d(n,i,r)||!(Kn(r)!==ve)?!1:!(t!==void 0&&Kn(r)===t))}function Kw(n,i,e){return e.some(t=>_d(n,i,t))}function _d(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Xw(n,i,e){return i.length===0&&!n.children[e]}var gp=class{};async function Zw(n,i,e,t,r,a,o,l){return new _p(n,i,e,t,r,o,a,l).recognize()}var Qw=31,_p=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,a,o,l,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=c,this.applyRedirects=new pp(this.urlSerializer,this.urlTree)}noMatchError(i){return new ae(4002,`'${i.segmentGroup}'`)}async recognize(){let i=mb(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new yn(t,e),a=new Ws("",r),o=Eb(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(i){let e=new Za([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ve,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,ve,e),rootSnapshot:e}}catch(t){if(t instanceof qs)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Zi?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,a){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,a);let o=await this.processSegment(i,e,t,t.segments,r,!0,a);return o instanceof yn?[o]:[]}async processChildren(i,e,t,r){let a=[];for(let c of Object.keys(t.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let m=t.children[c],p=$w(e,c),_=await this.processSegmentGroup(i,p,m,c,r);o.push(..._)}let l=Wb(o);return Jw(l),l}async processSegment(i,e,t,r,a,o,l){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,a,o,l)}catch(m){if(m instanceof Zi||jb(m))continue;throw m}if(Xw(t,r,a))return new gp;throw new Zi(t)}async processSegmentAgainstRoute(i,e,t,r,a,o,l,c){if(Kn(t)!==o&&(o===ve||!_d(r,a,t)))throw new Zi(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,a,o,c);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,a,o,c);throw new Zi(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,a,o,l){let{matched:c,parameters:m,consumedSegments:p,positionalParamSegments:_,remainingSegments:y}=Gb(e,r,a);if(!c)throw new Zi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Qw&&(this.allowRedirects=!1));let P=this.createSnapshot(i,r,a,m,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let H=await this.applyRedirects.applyRedirectCommands(p,r.redirectTo,_,$b(P),i),q=await this.applyRedirects.lineralizeSegments(r,H);return this.processSegment(i,t,e,q.concat(y),o,!1,l)}createSnapshot(i,e,t,r,a){let o=new Za(t,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,tM(e),Kn(e),e.component??e._loadedComponent??null,e,nM(e),i),l=bp(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(l.params),o.data=Object.freeze(l.data),o}async matchSegmentAgainstRoute(i,e,t,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=de=>this.createSnapshot(i,t,de.consumedSegments,de.parameters,o),c=await Qc(Gw(e,t,r,i,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Zi(e);i=t._injector??i;let{routes:m}=await this.getChildConfig(i,t,r),p=t._loadedInjector??i,{parameters:_,consumedSegments:y,remainingSegments:P}=c,H=this.createSnapshot(i,t,y,_,o),{segmentGroup:q,slicedSegments:oe}=mb(e,y,P,m,a);if(oe.length===0&&q.hasChildren()){let de=await this.processChildren(p,m,q,H);return new yn(H,de)}if(m.length===0&&oe.length===0)return new yn(H,[]);let _e=Kn(t)===a,se=await this.processSegment(p,m,q,oe,_e?ve:a,!0,H);return new yn(H,se instanceof yn?[se]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Qc(Bw(i,e,t,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw zw(e)}return{routes:[],injector:i}}};function Jw(n){n.sort((i,e)=>i.value.outlet===ve?-1:e.value.outlet===ve?1:i.value.outlet.localeCompare(e.value.outlet))}function eM(n){let i=n.value.routeConfig;return i&&i.path===""}function Wb(n){let i=[],e=new Set;for(let t of n){if(!eM(t)){i.push(t);continue}let r=i.find(a=>t.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Wb(t.children);i.push(new yn(t.value,r))}return i.filter(t=>!e.has(t))}function tM(n){return n.data||{}}function nM(n){return n.resolve||{}}function iM(n,i,e,t,r,a,o){return we(async l=>{let{state:c,tree:m}=await Zw(n,i,e,t,l.extractedUrl,r,a,o);return v(g({},l),{targetSnapshot:c,urlAfterRedirects:m})})}function rM(n){return we(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return D(i);let r=new Set(t.map(l=>l.route)),a=new Set;for(let l of r)if(!a.has(l))for(let c of Yb(l))a.add(c);let o=0;return ln(a).pipe(Yr(l=>r.has(l)?aM(l,e,n):(l.data=bp(l,l.parent,n).resolve,D(void 0))),it(()=>o++),fh(1),we(l=>o===a.size?D(i):vt))})}function Yb(n){let i=n.children.map(e=>Yb(e)).flat();return[n,...i]}function aM(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Fb(t)&&(r[Ks]=t.title),En(()=>(n.data=bp(n,n.parent,e).resolve,oM(r,n,i).pipe(x(a=>(n._resolvedData=a,n.data=g(g({},n.data),a),null)))))}function oM(n,i,e){let t=rp(n);if(t.length===0)return D({});let r={};return ln(t).pipe(we(a=>sM(n[a],i,e).pipe(dr(),it(o=>{if(o instanceof Qa)throw hd(new br,o);r[a]=o}))),fh(1),x(()=>r),be(a=>jb(a)?vt:hc(a)))}function sM(n,i,e){let t=i._environmentInjector,r=to(n,t),a=r.resolve?r.resolve(i,e):cn(t,()=>r(i,e));return la(a)}function hb(n){return Oe(i=>{let e=n(i);return e?ln(e).pipe(x(()=>i)):D(i)})}var Cp=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(a=>a.outlet===ve);return t}getResolvedTitleForRoute(e){return e.data[Ks]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:()=>s(qb)})}return n})(),qb=(()=>{class n extends Cp{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)($(ab))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Js=new b("",{factory:()=>({})}),el=new b(""),Kb=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=s(m_);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await _b(cn(e,()=>t.loadComponent())),o=await Zb(xh(a));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await Xb(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();async function Xb(n,i,e,t){let r=await _b(cn(e,()=>n.loadChildren())),a=await Zb(xh(r)),o;a instanceof a_||Array.isArray(a)?o=a:o=await i.compileModuleAsync(a),t&&t(n);let l,c,m=!1,p;return Array.isArray(o)?(c=o,m=!0):(l=o.create(e).injector,p=o,c=l.get(el,[],{optional:!0,self:!0}).flat()),{routes:c.map(Sp),injector:l,factory:p}}async function Zb(n){return n}var bd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:()=>s(lM)})}return n})(),lM=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Qb=new b("");var Jb=new b(""),cM=()=>{},ev=new b(""),tv=(()=>{class n{currentNavigation=ne(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ne(null);events=new S;transitionAbortWithErrorSubject=new S;configLoader=s(Kb);environmentInjector=s(Rt);destroyRef=s(bn);urlSerializer=s(Xs);rootContexts=s(eo);location=s(fr);inputBindingEnabled=s(gd,{optional:!0})!==null;titleStrategy=s(Cp);options=s(Js,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||pw;urlHandlingStrategy=s(bd);createViewTransition=s(Qb,{optional:!0});navigationErrorHandler=s(ev,{optional:!0});activatedRouteInjectorFeature=s(Jb,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>D(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ad(r)),t=r=>this.events.next(new od(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;qe(()=>{this.transitions?.next(v(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new dt(null),this.transitions.pipe(me(t=>t!==null),Oe(t=>{let r=!0,a=!1,o=new AbortController,l=()=>!a&&this.currentTransition?.id===t.id;return D(t).pipe(Oe(c=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Gt.SupersededByNewNavigation),vt;this.currentTransition=t;let m=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:m?v(g({},m),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let p=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),_=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!p&&_!=="reload")return this.events.next(new Ji(c.id,this.urlSerializer.serialize(c.rawUrl),"",Us.IgnoredSameUrlNavigation)),c.resolve(!1),vt;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return D(c).pipe(Oe(y=>(this.events.next(new oa(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?vt:Promise.resolve(y))),iM(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),it(y=>{t.targetSnapshot=y.targetSnapshot,t.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(P=>(P.finalUrl=y.urlAfterRedirects,P)),this.events.next(new $s)}),Oe(y=>ln(t.routesRecognizeHandler.deferredHandle??D(void 0)).pipe(x(()=>y))),it(()=>{let y=new Hs(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(y)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:y,extractedUrl:P,source:H,restoredState:q,extras:oe}=c,_e=new oa(y,this.urlSerializer.serialize(P),H,q);this.events.next(_e);let se=Ib(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=v(g({},c),{targetSnapshot:se,urlAfterRedirects:P,extras:v(g({},oe),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(de=>(de.finalUrl=P,de)),D(t)}else return this.events.next(new Ji(c.id,this.urlSerializer.serialize(c.extractedUrl),"",Us.IgnoredByUrlHandlingStrategy)),c.resolve(!1),vt}),x(c=>{let m=new td(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(m),this.currentTransition=t=v(g({},c),{guards:vw(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),t}),kw(c=>this.events.next(c)),Oe(c=>{if(t.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw hd(this.urlSerializer,c.guardsResult);let m=new nd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(m),!l())return vt;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Gt.GuardRejected),vt;if(c.guards.canActivateChecks.length===0)return D(c);let p=new id(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(p),!l())return vt;let _=!1;return D(c).pipe(rM(this.paramsInheritanceStrategy),it({next:()=>{_=!0;let y=new rd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(y)},complete:()=>{_||this.cancelNavigationTransition(c,"",Gt.NoDataFromResolver)}}))}),hb(c=>{let m=_=>{let y=[];if(_.routeConfig?._loadedComponent)_.component=_.routeConfig?._loadedComponent;else if(_.routeConfig?.loadComponent){let P=_._environmentInjector;y.push(this.configLoader.loadComponent(P,_.routeConfig).then(H=>{_.component=H}))}for(let P of _.children)y.push(...m(P));return y},p=m(c.targetSnapshot.root);return p.length===0?D(c):ln(Promise.all(p).then(()=>c))}),Oe(c=>{let{newlyCreatedRoutes:m,state:p}=fw(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=t=c=v(g({},c),{targetRouterState:p,newlyCreatedRoutes:m}),this.currentNavigation.update(_=>(_.targetRouterState=p,_)),D(c)}),this.activatedRouteInjectorFeature?.operator()??(c=>c),hb(()=>this.afterPreactivation()),Oe(()=>{let{currentSnapshot:c,targetSnapshot:m}=t,p=this.createViewTransition?.(this.environmentInjector,c.root,m.root);return p?ln(p).pipe(x(()=>t)):D(t)}),Ie(1),Oe(c=>{r=!1,this.events.next(new Ka);let m=t.beforeActivateHandler.deferredHandle;return m?ln(m.then(()=>c)):D(c)}),it(c=>{new hp(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,m=>this.events.next(m),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),l()&&(a=!0,this.currentNavigation.update(m=>(m.abort=cM,m)),this.lastSuccessfulNavigation.set(qe(this.currentNavigation)),this.events.next(new Qi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),G(zb(o.signal).pipe(me(()=>!a&&r),it(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Gt.Aborted)}))),it({complete:()=>{a=!0}}),G(this.transitionAbortWithErrorSubject.pipe(it(c=>{throw c}))),Ra(()=>{o.abort(),a||this.cancelNavigationTransition(t,"",Gt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),be(c=>{if(a=!0,pb(t),this.destroyed)return t.resolve(!1),vt;if(Vb(c))this.events.next(new Tn(t.id,this.urlSerializer.serialize(t.extractedUrl),c.message,c.cancellationCode)),bw(c)?this.events.next(new Xa(c.url,c.navigationBehaviorOptions)):t.resolve(!1);else{let m=new sa(t.id,this.urlSerializer.serialize(t.extractedUrl),c,t.targetSnapshot??void 0);try{let p=cn(this.environmentInjector,()=>this.navigationErrorHandler?.(m));if(p instanceof Qa){let{message:_,cancellationCode:y}=hd(this.urlSerializer,p);this.events.next(new Tn(t.id,this.urlSerializer.serialize(t.extractedUrl),_,y)),this.events.next(new Xa(p.redirectTo,p.navigationBehaviorOptions))}else throw this.events.next(m),c}catch(p){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(p)}}return vt}))}))}cancelNavigationTransition(e,t,r){pb(e);let a=new Tn(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=qe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function dM(n){return n!==Vs}function pb(n){if(n.newlyCreatedRoutes)for(let i of n.newlyCreatedRoutes)i._localInjector?.destroy()}var nv=new b("");var iv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:()=>s(uM)})}return n})(),fd=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},uM=(()=>{class n extends fd{static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Dp=(()=>{class n{urlSerializer=s(Xs);options=s(Js,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=s(fr);urlHandlingStrategy=s(bd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new In;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=r??a;return o instanceof In?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Ib(null,s(Rt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:()=>s(mM)})}return n})(),mM=(()=>{class n extends Dp{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof oa?this.updateStateMemento():e instanceof Ji?this.commitTransition(t):e instanceof Hs?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ka?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Tn&&!Tb(e)?this.restoreHistory(t):e instanceof sa?this.restoreHistory(t,!0):e instanceof Qi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:a}=t,{replaceUrl:o,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||o){let c=this.browserPageId,m=g(g({},l),this.generateNgRouterState(a,c,t));this.location.replaceState(e,"",m)}else{let c=g(g({},l),this.generateNgRouterState(a,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function wp(n,i){n.events.pipe(me(e=>e instanceof Qi||e instanceof Tn||e instanceof sa||e instanceof Ji),x(e=>e instanceof Qi||e instanceof Ji?0:(e instanceof Tn?e.code===Gt.Redirect||e.code===Gt.SupersededByNewNavigation:!1)?2:1),me(e=>e!==2),Ie(1)).subscribe(()=>{i()})}var On=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=s(Ch);stateManager=s(Dp);options=s(Js,{optional:!0})||{};pendingTasks=s($g);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=s(tv);urlSerializer=s(Xs);location=s(fr);urlHandlingStrategy=s(bd);injector=s(Rt);_events=new S;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=s(iv);injectorCleanup=s(nv,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=s(el,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!s(gd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,a=qe(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(t,a),t instanceof Tn&&t.code!==Gt.Redirect&&t.code!==Gt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Qi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Xa){let o=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||dM(r.source)},o);this.scheduleNavigation(l,Vs,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}mw(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,a)=>{this.navigateToSyncWithBrowser(e,r,t,a)})}navigateToSyncWithBrowser(e,t,r,a){let o=r?.navigationId?r:null,l=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(a=v(g({},a),{browserUrl:e})),r){let m=g({},r);delete m.navigationId,delete m.\u0275routerPageId,delete m.\u0275routerUrl,Object.keys(m).length!==0&&(a.state=m)}let c=this.parseUrl(l);this.scheduleNavigation(c,t,o,a).catch(m=>{this.disposed||this.injector.get(_s)(m)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return qe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Sp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:l,preserveFragment:c}=t,m=c?this.currentUrlTree.fragment:o,p=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":p=g(g({},this.currentUrlTree.queryParams),a);break;case"preserve":p=this.currentUrlTree.queryParams;break;default:p=a||null}p!==null&&(p=this.removeEmptyProps(p));let _;try{let y=r?r.snapshot:this.routerState.snapshot.root;_=Ab(y)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return Rb(_,e,p,m??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=qa(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Vs,null,t)}navigate(e,t={skipLocationChange:!1}){return hM(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ka(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=g({},vb):t===!1?r=g({},ap):r=g(g({},ap),t),qa(e))return sb(this.currentUrlTree,e,r);let a=this.parseUrl(e);return sb(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,a])=>(a!=null&&(t[r]=a),t),{})}scheduleNavigation(e,t,r,a,o){if(this.disposed)return Promise.resolve(!1);let l,c,m;o?(l=o.resolve,c=o.reject,m=o.promise):m=new Promise((_,y)=>{l=_,c=y});let p=this.pendingTasks.add();return wp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(p))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:l,reject:c,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function hM(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new ae(4008,!1)}var bM=new b("");function Mp(n,...i){return Jt([{provide:el,multi:!0,useValue:n},{provide:vr,useFactory:vM},{provide:Dh,multi:!0,useFactory:yM},i.map(e=>e.\u0275providers)])}function vM(){return s(On).routerState.root}function yM(){let n=s(Q);return i=>{let e=n.get(mi);if(i!==e.components[0])return;let t=n.get(On),r=n.get(SM);n.get(CM)===1&&t.initialNavigation(),n.get(DM,null,{optional:!0})?.setUpPreloading(),n.get(bM,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var SM=new b("",{factory:()=>new S}),CM=new b("",{factory:()=>1});var DM=new b("");var MM="@",xM=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(Q);loadingSchedulerFn=s(EM,{optional:!0});_engine;constructor(e,t,r,a,o){this.doc=e,this.delegate=t,this.zone=r,this.animationType=a,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-DR3D4GLK.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new ae(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let o=new a(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new xp(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,t);a.use(l),this.scheduler??=this.injector.get(Yg,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Jr()};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),xp=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(MM)}},EM=new b("");function rv(n="animations"){return Cc("NgAsyncAnimations"),Jt([{provide:Pt,useFactory:()=>new xM(s(te),s(Ns),s(Z),n)},{provide:Ta,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var tl=new b("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(Va)}),no="Method not implemented",Ot=class{locale;_localeChanges=new S;localeChanges=this._localeChanges;setTime(i,e,t,r){throw new Error(no)}getHours(i){throw new Error(no)}getMinutes(i){throw new Error(no)}getSeconds(i){throw new Error(no)}parseTime(i,e){throw new Error(no)}addSeconds(i,e){throw new Error(no)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareDate(i,e):t==r}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareTime(i,e):t==r}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},_i=new b("mat-date-formats");var vd=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var Ep;try{Ep=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ep=!1}var ge=(()=>{class n{_platformId=s(Na);isBrowser=this._platformId?P_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ep)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function er(n){return Array.isArray(n)?n:[n]}var av=new Set,ca,io=(()=>{class n{_platform=s(ge);_nonce=s(Xr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):RM}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&AM(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function AM(n,i){if(!av.has(n))try{ca||(ca=document.createElement("style"),i&&ca.setAttribute("nonce",i),ca.setAttribute("type","text/css"),document.head.appendChild(ca)),ca.sheet&&(ca.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),av.add(n))}catch(e){console.error(e)}}function RM(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var da=(()=>{class n{_mediaMatcher=s(io);_zone=s(Z);_queries=new Map;_destroySubject=new S;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return ov(er(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=ov(er(e)).map(o=>this._registerQuery(o).observable),a=zt(r);return a=fc(a.pipe(Ie(1)),a.pipe(ur(1),di(0))),a.pipe(x(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:m})=>{l.matches=l.matches||c,l.breakpoints[m]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new nt(o=>{let l=c=>this._zone.run(()=>o.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Ze(t),x(({matches:o})=>({query:e,matches:o})),G(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function ov(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var yd={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var kM=new b("MATERIAL_ANIMATIONS"),sv=null;function Ap(){return s(kM,{optional:!0})?.animationsDisabled||s(Ta,{optional:!0})==="NoopAnimations"?"di-disabled":(sv??=s(io).matchMedia("(prefers-reduced-motion)").matches,sv?"reduced-motion":"enabled")}function Ne(){return Ap()!=="enabled"}function ua(n){return n.buttons===0||n.detail===0}function ma(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Rp;function lv(){if(Rp==null){let n=typeof document<"u"?document.head:null;Rp=!!(n&&(n.createShadowRoot||n.attachShadow))}return Rp}function kp(n){if(lv()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Fn(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Mt(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var nl;function cv(){if(nl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>nl=!0}))}finally{nl=nl||!1}return nl}function ro(n){return cv()?n:!!n.capture}function Xn(n,i=0){return Sd(n)?Number(n):arguments.length===2?i:0}function Sd(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function tn(n){return n instanceof j?n.nativeElement:n}var dv=new b("cdk-input-modality-detector-options"),uv={ignoreKeys:[18,17,224,91,16]},mv=650,Np={passive:!0,capture:!0},hv=(()=>{class n{_platform=s(ge);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new dt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Mt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<mv||(this._modality.next(ua(e)?"keyboard":"mouse"),this._mostRecentTarget=Mt(e))};_onTouchstart=e=>{if(ma(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Mt(e)};constructor(){let e=s(Z),t=s(te),r=s(dv,{optional:!0});if(this._options=g(g({},uv),r),this.modalityDetected=this._modality.pipe(ur(1)),this.modalityChanged=this.modalityDetected.pipe(qr()),this._platform.isBrowser){let a=s(Pt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,Np),a.listen(t,"mousedown",this._onMousedown,Np),a.listen(t,"touchstart",this._onTouchstart,Np)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),il=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(il||{}),pv=new b("cdk-focus-monitor-default-options"),Cd=ro({passive:!0,capture:!0}),Wt=(()=>{class n{_ngZone=s(Z);_platform=s(ge);_inputModalityDetector=s(hv);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(te);_stopInputModalityDetector=new S;constructor(){let e=s(pv,{optional:!0});this._detectionMode=e?.detectionMode||il.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Mt(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=tn(e);if(!this._platform.isBrowser||r.nodeType!==1)return D();let a=kp(r)||this._document,o=this._elementInfo.get(r);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new S,rootNode:a};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=tn(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let a=tn(e),o=this._document.activeElement;a===o?this._getClosestElementsInfo(a).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===il.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===il.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?mv:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),a=Mt(e);!r||!r.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Cd),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Cd)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(G(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Cd),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Cd),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,a)=>{(a===e||r.checkChildren&&a.contains(e))&&t.push([a,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let o=0;o<a.length;o++)if(a[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),rl=(()=>{class n{_elementRef=s(j);_focusMonitor=s(Wt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new R;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var Dd=new WeakMap,Qe=(()=>{class n{_appRef;_injector=s(Q);_environmentInjector=s(Rt);load(e){let t=this._appRef=this._appRef||this._injector.get(mi),r=Dd.get(t);r||(r={loaders:new Set,refs:[]},Dd.set(t,r),t.onDestroy(()=>{Dd.get(t)?.refs.forEach(a=>a.destroy()),Dd.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Mc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),wd;function NM(){if(wd===void 0&&(wd=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{wd=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return wd}function ha(n){return NM()?.createHTML(n)||n}function fv(n,i,e){let t=e.sanitize(en.HTML,i);n.innerHTML=ha(t||"")}function TM(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var gv=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),_v=(()=>{class n{_mutationObserverFactory=s(gv);_observedElements=new Map;_ngZone=s(Z);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=tn(e);return new nt(r=>{let o=this._observeElement(t).pipe(x(l=>l.filter(c=>!TM(c))),me(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new S,r=this._mutationObserverFactory.create(a=>t.next(a));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),bv=(()=>{class n{_contentObserver=s(_v);_elementRef=s(j);event=new R;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Xn(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(di(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",k],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[gv]})}return n})();var xd=(()=>{class n{_platform=s(ge);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return OM(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=IM(UM(e));if(t&&(vv(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),a=vv(e);return e.hasAttribute("contenteditable")?a!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!jM(e)?!1:r==="audio"?e.hasAttribute("controls")?a!==-1:!1:r==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return zM(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function IM(n){try{return n.frameElement}catch{return null}}function OM(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function FM(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function PM(n){return BM(n)&&n.type=="hidden"}function LM(n){return VM(n)&&n.hasAttribute("href")}function BM(n){return n.nodeName.toLowerCase()=="input"}function VM(n){return n.nodeName.toLowerCase()=="a"}function Cv(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function vv(n){if(!Cv(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function jM(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function zM(n){return PM(n)?!1:FM(n)||LM(n)||n.hasAttribute("contenteditable")||Cv(n)}function UM(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Ip=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,a=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=o,a||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){He(i,{injector:this._injector})}},Ed=(()=>{class n{_checker=s(xd);_ngZone=s(Z);_document=s(te);_injector=s(Q);constructor(){s(Qe).load(bi)}create(e,t=!1){return new Ip(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Op=(()=>{class n{_elementRef=s(j);_focusTrapFactory=s(Ed);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(ge).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Fn(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",k],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",k]},exportAs:["cdkTrapFocus"],features:[ke]})}return n})(),Dv=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),wv=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),HM=0,al=(()=>{class n{_ngZone=s(Z);_defaultOptions=s(wv,{optional:!0});_liveElement;_document=s(te);_sanitizer=s(Fs);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Dv,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,a,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[a,o]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=r&&r.politeness?r.politeness:"polite"),o==null&&r&&(o=r.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:fv(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${HM++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var yr=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(yr||{}),yv="cdk-high-contrast-black-on-white",Sv="cdk-high-contrast-white-on-black",Tp="cdk-high-contrast-active",Mv=(()=>{class n{_platform=s(ge);_hasCheckedHighContrastMode=!1;_document=s(te);_breakpointSubscription;constructor(){this._breakpointSubscription=s(da).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return yr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return yr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return yr.BLACK_ON_WHITE}return yr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Tp,yv,Sv),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===yr.BLACK_ON_WHITE?e.add(Tp,yv):t===yr.WHITE_ON_BLACK&&e.add(Tp,Sv)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),tr=(()=>{class n{constructor(){s(Mv)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[Md]})}return n})();var $M=200,Ad=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:$M;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(it(e=>this._pressedLetters.push(e)),di(i),me(()=>this._pressedLetters.length>0),x(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,a=this._items[r];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function Xe(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ao=class{_items;_activeItemIndex=ne(-1);_activeItem=ne(null);_wrap=!1;_typeaheadSubscription=Se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Zr?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):ui(i)&&(this._effectRef=St(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ad(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!i[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(a<o?a:o-1,-1);break}else return;default:(r||Xe(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,a=e[r];if(!this._skipPredicateFn(a)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return ui(this._items)?this._items():this._items instanceof Zr?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var pa=class extends ao{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var fa=class extends ao{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Av=new Map,ze=class n{_appId=s(Kr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Av.get(i);return t===void 0?t=0:t++,Av.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})};var kv=" ";function GM(n,i,e){let t=Td(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(kv)))}function WM(n,i,e){let t=Td(n,i);e=e.trim();let r=t.filter(a=>a!==e);r.length?n.setAttribute(i,r.join(kv)):n.removeAttribute(i)}function Td(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Nv="cdk-describedby-message",Nd="cdk-describedby-host",Pp=0,ll=(()=>{class n{_platform=s(ge);_document=s(te);_messageRegistry=new Map;_messagesContainer=null;_id=`${Pp++}`;constructor(){s(Qe).load(bi),this._id=s(Kr)+"-"+Pp++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let a=Fp(t,r);typeof t!="string"?(Rv(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let a=Fp(t,r);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let o=this._messageRegistry.get(a);o&&o.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Nd}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Nd);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Rv(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Fp(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Td(e,"aria-describedby").filter(r=>r.indexOf(Nv)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);GM(e,"aria-describedby",r.messageElement.id),e.setAttribute(Nd,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,WM(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Nd)}_isElementDescribedByMessage(e,t){let r=Td(e,"aria-describedby"),a=this._messageRegistry.get(t),o=a&&a.messageElement.id;return!!o&&r.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return r?!a||a.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function Fp(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Rv(n,i){n.id||(n.id=`${Nv}-${i}-${Pp++}`)}var Zn=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(Zn||{}),Id,ga;function Od(){if(ga==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ga=!1,ga;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ga=!0;else{let n=Element.prototype.scrollTo;n?ga=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ga=!1}}return ga}function oo(){if(typeof document!="object"||!document)return Zn.NORMAL;if(Id==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Id=Zn.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Id=n.scrollLeft===0?Zn.NEGATED:Zn.INVERTED),n.remove()}return Id}function Lp(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var so,Tv=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Bp(){if(so)return so;if(typeof document!="object"||!document)return so=new Set(Tv),so;let n=document.createElement("input");return so=new Set(Tv.filter(i=>(n.setAttribute("type",i),n.type===i))),so}function _t(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Pn(n){return n!=null&&`${n}`!="false"}function Iv(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let r of t){let a=`${r}`.trim();a&&e.push(a)}}return e}var Ln=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Ln||{}),Vp=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ln.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ov=ro({passive:!0,capture:!0}),jp=class{_events=new Map;addHandler(i,e,t,r){let a=this._events.get(e);if(a){let o=a.get(t);o?o.add(r):a.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ov)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let a=r.get(e);a&&(a.delete(t),a.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ov)))}_delegateEventHandler=i=>{let e=Mt(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(a=>a.handleEvent(i))})}},cl={enterDuration:225,exitDuration:150},YM=800,Fv=ro({passive:!0,capture:!0}),Pv=["mousedown","touchstart"],Lv=["mouseup","mouseleave","touchend","touchcancel"],qM=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),dl=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new jp;constructor(i,e,t,r,a){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=tn(t)),a&&a.get(Qe).load(qM)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=g(g({},cl),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let o=t.radius||KM(i,e,r),l=i-r.left,c=e-r.top,m=a.enterDuration,p=document.createElement("div");p.classList.add("mat-ripple-element"),p.style.left=`${l-o}px`,p.style.top=`${c-o}px`,p.style.height=`${o*2}px`,p.style.width=`${o*2}px`,t.color!=null&&(p.style.backgroundColor=t.color),p.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(p);let _=window.getComputedStyle(p),y=_.transitionProperty,P=_.transitionDuration,H=y==="none"||P==="0s"||P==="0s, 0s"||r.width===0&&r.height===0,q=new Vp(this,p,t,H);p.style.transform="scale3d(1, 1, 1)",q.state=Ln.FADING_IN,t.persistent||(this._mostRecentTransientRipple=q);let oe=null;return!H&&(m||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _e=()=>{oe&&(oe.fallbackTimer=null),clearTimeout(de),this._finishRippleTransition(q)},se=()=>this._destroyRipple(q),de=setTimeout(se,m+100);p.addEventListener("transitionend",_e),p.addEventListener("transitioncancel",se),oe={onTransitionEnd:_e,onTransitionCancel:se,fallbackTimer:de}}),this._activeRipples.set(q,oe),(H||!m)&&this._finishRippleTransition(q),q}fadeOutRipple(i){if(i.state===Ln.FADING_OUT||i.state===Ln.HIDDEN)return;let e=i.element,t=g(g({},cl),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Ln.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=tn(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Pv.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Lv.forEach(e=>{this._triggerElement.addEventListener(e,this,Fv)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ln.FADING_IN?this._startFadeOutTransition(i):i.state===Ln.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Ln.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ln.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ua(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+YM;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ma(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ln.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ln.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Pv.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Lv.forEach(e=>i.removeEventListener(e,this,Fv)),this._pointerUpEventsRegistered=!1))}};function KM(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Fd=new b("mat-ripple-global-options"),nr=(()=>{class n{_elementRef=s(j);_animationsDisabled=Ne();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(Z),t=s(ge),r=s(Fd,{optional:!0}),a=s(Q);this._globalOptions=r||{},this._rippleRenderer=new dl(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Bv=(()=>{class n{_animationsDisabled=Ne();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&B("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var XM=["text"],ZM=[[["mat-icon"]],"*"],QM=["mat-icon","*"];function JM(n,i){if(n&1&&F(0,"mat-pseudo-checkbox",1),n&2){let e=L();A("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function ex(n,i){if(n&1&&F(0,"mat-pseudo-checkbox",3),n&2){let e=L();A("disabled",e.disabled)}}function tx(n,i){if(n&1&&(d(0,"span",4),f(1),u()),n&2){let e=L();h(),De("(",e.group.label,")")}}var ml=new b("MAT_OPTION_PARENT_COMPONENT"),hl=new b("MatOptgroup");var ul=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},qt=(()=>{class n{_element=s(j);_changeDetectorRef=s(he);_parent=s(ml,{optional:!0});group=s(hl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(ze).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new S;constructor(){let e=s(Qe);e.load(pn),e.load(bi),this._signalDisableRipple=!!this._parent&&ui(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Xe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ul(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Be(XM,7),t&2){let a;z(a=U())&&(r._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&w("click",function(){return r._selectViaInteraction()})("keydown",function(o){return r._handleKeydown(o)}),t&2&&(pt("id",r.id),J("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),B("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",k]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:QM,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(Me(ZM),T(0,JM,1,2,"mat-pseudo-checkbox",1),ee(1),d(2,"span",2,0),ee(4,1),u(),T(5,ex,1,1,"mat-pseudo-checkbox",3),T(6,tx,2,1,"span",4),F(7,"div",5)),t&2&&(I(r.multiple?0:-1),h(5),I(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),I(r.group&&r.group._inert?6:-1),h(),A("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Bv,nr],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return n})();function Pd(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===r[a]&&a++;return a}return 0}function Ld(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var nx=new b("cdk-dir-doc",{providedIn:"root",factory:()=>s(te)}),ix=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Vv(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?ix.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Je=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ne("ltr");change=new R;constructor(){let e=s(nx,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Vv(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})();var lo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var jv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var co=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[lo,jv,qt,le]})}return n})();var rx={capture:!0},ax=["focus","mousedown","mouseenter","touchstart"],zp="mat-ripple-loader-uninitialized",Up="mat-ripple-loader-class-name",zv="mat-ripple-loader-centered",Bd="mat-ripple-loader-disabled",Uv=(()=>{class n{_document=s(te);_animationsDisabled=Ne();_globalRippleOptions=s(Fd,{optional:!0});_platform=s(ge);_ngZone=s(Z);_injector=s(Q);_eventCleanups;_hosts=new Map;constructor(){let e=s(Pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ax.map(t=>e.listen(this._document,t,this._onInteraction,rx)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(zp,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Up))&&e.setAttribute(Up,t.className||""),t.centered&&e.setAttribute(zv,""),t.disabled&&e.setAttribute(Bd,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Bd,""):e.removeAttribute(Bd)}_onInteraction=e=>{let t=Mt(e);if(t instanceof HTMLElement){let r=t.closest(`[${zp}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Up)),e.append(t);let r=this._globalRippleOptions,a=this._animationsDisabled?0:r?.animation?.enterDuration??cl.enterDuration,o=this._animationsDisabled?0:r?.animation?.exitDuration??cl.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Bd),rippleConfig:{centered:e.hasAttribute(zv),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:o}}},c=new dl(l,this._ngZone,t,this._platform,this._injector),m=!l.rippleDisabled;m&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:m}),e.removeAttribute(zp)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var uo=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,a){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=a,e?ui(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var ox=["*"],Hv=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&B("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:ox,decls:1,vars:0,template:function(t,r){t&1&&(Me(),ee(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var sx=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,lx=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Hp(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var Gp=(()=>{class n extends Ot{_matDateLocale=s(tl,{optional:!0});constructor(){super();let e=s(tl,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Hp(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Hp(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Hp(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let a=this._createDateWithOverflow(e,t,r);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,v(g({},t),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(sx.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,a){let o=this.clone(e);return o.setHours(t,r,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let a=this._parseTimeString(r);if(a===null){let o=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let a=new Date;return a.setFullYear(e,t,r),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match(lx);if(t){let r=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),l=t[4];if(r===12?r=l==="AM"?0:r:l==="PM"&&(r+=12),$p(r,0,23)&&$p(a,0,59)&&(o==null||$p(o,0,59)))return this.setTime(this.today(),r,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac,autoProvided:!1})}return n})();function $p(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var cx={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Vd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[dx()]})}return n})();function dx(n=cx){return[{provide:Ot,useClass:Gp},{provide:_i,useValue:n}]}function ux(n){let i=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length;return e===1&&t===0?1:5}var $v=["de",[["AM","PM"]],void 0,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."]],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{ATS:["\xF6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[void 0,"\u0440."],CUC:[void 0,"Cub$"],DEM:["DM"],FKP:[void 0,"Fl\xA3"],GHS:[void 0,"\u20B5"],GNF:[void 0,"F.G."],KMF:[void 0,"FC"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],RWF:[void 0,"F.Rw"],SYP:[void 0,"SYP"],THB:["\u0E3F"],TWD:["NT$"],XXX:[],ZMW:[void 0,"K"]},"ltr",ux];var jd=class n extends Gp{parse(i){if(typeof i=="string"&&i.trim()){let e=i.trim().split(".");if(e.length===3){let t=parseInt(e[0],10),r=parseInt(e[1],10)-1,a=parseInt(e[2],10);a<100&&(a+=a<=50?2e3:1900);let o=new Date(a,r,t);if(o.getFullYear()===a&&o.getMonth()===r&&o.getDate()===t)return o}}return super.parse(i)}format(i,e){if(e==="input"){let t=i.getDate(),r=i.getMonth()+1,a=i.getFullYear();return`${this._to2digit(t)}.${this._to2digit(r)}.${a}`}return super.format(i,e)}_to2digit(i){return("00"+i).slice(-2)}getFirstDayOfWeek(){return 1}static \u0275fac=(()=>{let i;return function(t){return(i||(i=Ce(n)))(t||n)}})();static \u0275prov=X({token:n,factory:n.\u0275fac})};function zd(n,i){let t=!i?.manualCleanup?i?.injector?.get(bn)??s(bn):null,r=hx(i?.equal),a;i?.requireSync?a=ne({kind:0},{equal:r}):a=ne({kind:1,value:i?.initialValue},{equal:r});let o,l=n.subscribe({next:c=>a.set({kind:1,value:c}),error:c=>{a.set({kind:2,error:c}),o?.()},complete:()=>{o?.()}});if(i?.requireSync&&a().kind===0)throw new ae(601,!1);return o=t?.onDestroy(l.unsubscribe.bind(l)),wt(()=>{let c=a();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new ae(601,!1)}},{equal:i?.equal})}function hx(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var qp={};function M(n,i){if(qp[n]=(qp[n]||0)+1,typeof i=="function")return Wp(n,(...t)=>v(g({},i(...t)),{type:n}));switch(i?i._as:"empty"){case"empty":return Wp(n,()=>({type:n}));case"props":return Wp(n,t=>v(g({},t),{type:n}));default:throw new Error("Unexpected config.")}}function O(){return{_as:"props",_p:void 0}}function Wp(n,i){return Object.defineProperty(i,"type",{value:n,writable:!1})}function px(n,i){if(n==null)throw new Error(`${i} must be defined.`)}var gl="@ngrx/store/init",Si=(()=>{class n extends dt{constructor(){super({type:gl})}next(e){if(typeof e=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>"u")throw new TypeError("Actions must be objects");if(typeof e.type>"u")throw new TypeError("Actions must have a type property");super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),fx=[Si],iy=new b("@ngrx/store Internal Root Guard"),Gv=new b("@ngrx/store Internal Initial State"),_l=new b("@ngrx/store Initial State"),ry=new b("@ngrx/store Reducer Factory"),Wv=new b("@ngrx/store Internal Reducer Factory Provider"),ay=new b("@ngrx/store Initial Reducers"),Yp=new b("@ngrx/store Internal Initial Reducers");var Yv=new b("@ngrx/store Internal Store Reducers");var gx=new b("@ngrx/store Internal Store Features");var _x=new b("@ngrx/store Feature Reducers"),qv=new b("@ngrx/store User Provided Meta Reducers"),Ud=new b("@ngrx/store Meta Reducers"),Kv=new b("@ngrx/store Internal Resolved Meta Reducers"),Xv=new b("@ngrx/store User Runtime Checks Config"),Zv=new b("@ngrx/store Internal User Runtime Checks Config"),pl=new b("@ngrx/store Internal Runtime Checks"),Qp=new b("@ngrx/store Check if Action types are unique"),fl=new b("@ngrx/store Root Store Provider"),Hd=new b("@ngrx/store Feature State Provider");function bx(n,i={}){let e=Object.keys(n),t={};for(let a=0;a<e.length;a++){let o=e[a];typeof n[o]=="function"&&(t[o]=n[o])}let r=Object.keys(t);return function(o,l){o=o===void 0?i:o;let c=!1,m={};for(let p=0;p<r.length;p++){let _=r[p],y=t[_],P=o[_],H=y(P,l);m[_]=H,c=c||H!==P}return c?m:o}}function vx(n,i){return Object.keys(n).filter(e=>e!==i).reduce((e,t)=>Object.assign(e,{[t]:n[t]}),{})}function oy(...n){return function(i){if(n.length===0)return i;let e=n[n.length-1];return n.slice(0,-1).reduceRight((r,a)=>a(r),e(i))}}function sy(n,i){return Array.isArray(i)&&i.length>0&&(n=oy.apply(null,[...i,n])),(e,t)=>{let r=n(e);return(a,o)=>(a=a===void 0?t:a,r(a,o))}}function yx(n){let i=Array.isArray(n)&&n.length>0?oy(...n):e=>e;return(e,t)=>(e=i(e),(r,a)=>(r=r===void 0?t:r,e(r,a)))}var _a=class extends nt{},mo=class extends Si{},Gd="@ngrx/store/update-reducers",$d=(()=>{class n extends dt{get currentReducers(){return this.reducers}constructor(e,t,r,a){super(a(r,t)),this.dispatcher=e,this.initialState=t,this.reducers=r,this.reducerFactory=a}addFeature(e){this.addFeatures([e])}addFeatures(e){let t=e.reduce((r,{reducers:a,reducerFactory:o,metaReducers:l,initialState:c,key:m})=>{let p=typeof a=="function"?yx(l)(a,c):sy(o,l)(a,c);return r[m]=p,r},{});this.addReducers(t)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(t=>t.key))}addReducer(e,t){this.addReducers({[e]:t})}addReducers(e){this.reducers=g(g({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(t=>{this.reducers=vx(this.reducers,t)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Gd,features:e})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(t){return new(t||n)($(mo),$(_l),$(ay),$(ry))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),Sx=[$d,{provide:_a,useExisting:$d},{provide:mo,useExisting:Si}],ba=(()=>{class n extends S{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})()}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),Cx=[ba],ho=class extends nt{},Qv=(()=>{class n extends dt{static{this.INIT=gl}constructor(e,t,r,a){super(a);let l=e.pipe(mc(uc)).pipe(vc(t)),c={state:a},m=l.pipe(_c(Dx,c));this.stateSubscription=m.subscribe(({state:p,action:_})=>{this.next(p),r.next(_)}),this.state=zd(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(t){return new(t||n)($(Si),$(_a),$(ba),$(_l))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})();function Dx(n={state:void 0},[i,e]){let{state:t}=n;return{state:e(t,i),action:i}}var wx=[Qv,{provide:ho,useExisting:Qv}],ot=(()=>{class n extends nt{constructor(e,t,r,a){super(),this.actionsObserver=t,this.reducerManager=r,this.injector=a,this.source=e,this.state=e.state}select(e,...t){return xx.call(null,e,...t)(this)}selectSignal(e,t){return wt(()=>e(this.state()),t)}lift(e){let t=new n(this,this.actionsObserver,this.reducerManager);return t.operator=e,t}dispatch(e,t){if(typeof e=="function")return this.processDispatchFn(e,t);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,t){this.reducerManager.addReducer(e,t)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,t){px(this.injector,"Store Injector");let r=t?.injector??Ex()??this.injector;return St(()=>{let a=e();qe(()=>this.dispatch(a))},{injector:r})}static{this.\u0275fac=function(t){return new(t||n)($(ho),$(Si),$($d),$(Q))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),Mx=[ot];function xx(n,i,...e){return function(r){let a;if(typeof n=="string"){let o=[i,...e].filter(Boolean);a=r.pipe(jg(n,...o))}else if(typeof n=="function")a=r.pipe(x(o=>n(o,i)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return a.pipe(qr())}}function Ex(){try{return s(Q)}catch{return}}var Jp="https://ngrx.io/guide/store/configuration/runtime-checks";function Jv(n){return n===void 0}function ey(n){return n===null}function ly(n){return Array.isArray(n)}function Ax(n){return typeof n=="string"}function Rx(n){return typeof n=="boolean"}function kx(n){return typeof n=="number"}function cy(n){return typeof n=="object"&&n!==null}function Nx(n){return cy(n)&&!ly(n)}function Tx(n){if(!Nx(n))return!1;let i=Object.getPrototypeOf(n);return i===Object.prototype||i===null}function Kp(n){return typeof n=="function"}function Ix(n){return Kp(n)&&n.hasOwnProperty("\u0275cmp")}function Ox(n,i){return Object.prototype.hasOwnProperty.call(n,i)}var Fx=!1;function Px(){return Fx}function ty(n,i){return n===i}function Lx(n,i,e){for(let t=0;t<n.length;t++)if(!e(n[t],i[t]))return!0;return!1}function dy(n,i=ty,e=ty){let t=null,r=null,a;function o(){t=null,r=null}function l(p=void 0){a={result:p}}function c(){a=void 0}function m(){if(a!==void 0)return a.result;if(!t)return r=n.apply(null,arguments),t=arguments,r;if(!Lx(arguments,t,i))return r;let p=n.apply(null,arguments);return t=arguments,e(r,p)?r:(r=p,p)}return{memoized:m,reset:o,setResult:l,clearResult:c}}function Fe(...n){return Vx(dy)(...n)}function Bx(n,i,e,t){if(e===void 0){let a=i.map(o=>o(n));return t.memoized.apply(null,a)}let r=i.map(a=>a(n,e));return t.memoized.apply(null,[...r,e])}function Vx(n,i={stateFn:Bx}){return function(...e){let t=e;if(Array.isArray(t[0])){let[p,..._]=t;t=[...p,..._]}else t.length===1&&jx(t[0])&&(t=zx(t[0]));let r=t.slice(0,t.length-1),a=t[t.length-1],o=r.filter(p=>p.release&&typeof p.release=="function"),l=n(function(...p){return a.apply(null,p)}),c=dy(function(p,_){return i.stateFn.apply(null,[p,r,_,l])});function m(){c.reset(),l.reset(),o.forEach(p=>p.release())}return Object.assign(c.memoized,{release:m,projector:l.memoized,setResult:c.setResult,clearResult:c.clearResult})}}function Ci(n){return Fe(i=>{let e=i[n];return!Px()&&ys()&&!(n in i)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function jx(n){return!!n&&typeof n=="object"&&Object.values(n).every(i=>typeof i=="function")}function zx(n){let i=Object.values(n),e=Object.keys(n),t=(...r)=>e.reduce((a,o,l)=>v(g({},a),{[o]:r[l]}),{});return[...i,t]}function Ux(n){return n instanceof b?s(n):n}function uy(n){return typeof n=="function"?n():n}function Hx(n,i){return n.concat(i)}function $x(){if(s(ot,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Gx(n,i){return function(e,t){let r=i.action(t)?Xp(t):t,a=n(e,r);return i.state()?Xp(a):a}}function Xp(n){Object.freeze(n);let i=Kp(n);return Object.getOwnPropertyNames(n).forEach(e=>{if(!e.startsWith("\u0275")&&Ox(n,e)&&(!i||e!=="caller"&&e!=="callee"&&e!=="arguments")){let t=n[e];(cy(t)||Kp(t))&&!Object.isFrozen(t)&&Xp(t)}}),n}function Wx(n,i){return function(e,t){if(i.action(t)){let a=Zp(t);ny(a,"action")}let r=n(e,t);if(i.state()){let a=Zp(r);ny(a,"state")}return r}}function Zp(n,i=[]){return(Jv(n)||ey(n))&&i.length===0?{path:["root"],value:n}:Object.keys(n).reduce((t,r)=>{if(t)return t;let a=n[r];return Ix(a)?t:Jv(a)||ey(a)||kx(a)||Rx(a)||Ax(a)||ly(a)?!1:Tx(a)?Zp(a,[...i,r]):{path:[...i,r],value:a}},!1)}function ny(n,i){if(n===!1)return;let e=n.path.join("."),t=new Error(`Detected unserializable ${i} at "${e}". ${Jp}#strict${i}serializability`);throw t.value=n.value,t.unserializablePath=e,t}function Yx(n,i){return function(e,t){if(i.action(t)&&!Z.isInAngularZone())throw new Error(`Action '${t.type}' running outside NgZone. ${Jp}#strictactionwithinngzone`);return n(e,t)}}function qx(n){return ys()?g({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Kx({strictActionSerializability:n,strictStateSerializability:i}){return e=>n||i?Wx(e,{action:t=>n&&!ef(t),state:()=>i}):e}function Xx({strictActionImmutability:n,strictStateImmutability:i}){return e=>n||i?Gx(e,{action:t=>n&&!ef(t),state:()=>i}):e}function ef(n){return n.type.startsWith("@ngrx")}function Zx({strictActionWithinNgZone:n}){return i=>n?Yx(i,{action:e=>n&&!ef(e)}):i}function Qx(n){return[{provide:Zv,useValue:n},{provide:Xv,useFactory:eE,deps:[Zv]},{provide:pl,deps:[Xv],useFactory:qx},{provide:Ud,multi:!0,deps:[pl],useFactory:Xx},{provide:Ud,multi:!0,deps:[pl],useFactory:Kx},{provide:Ud,multi:!0,deps:[pl],useFactory:Zx}]}function Jx(){return[{provide:Qp,multi:!0,deps:[pl],useFactory:tE}]}function eE(n){return n}function tE(n){if(!n.strictActionTypeUniqueness)return;let i=Object.entries(qp).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(", ")}. ${Jp}#strictactiontypeuniqueness`)}function nE(n={},i={}){return[{provide:iy,useFactory:$x},{provide:Gv,useValue:i.initialState},{provide:_l,useFactory:uy,deps:[Gv]},{provide:Yp,useValue:n},{provide:Yv,useExisting:n instanceof b?n:Yp},{provide:ay,deps:[Yp,[new qg(Yv)]],useFactory:Ux},{provide:qv,useValue:i.metaReducers?i.metaReducers:[]},{provide:Kv,deps:[Ud,qv],useFactory:Hx},{provide:Wv,useValue:i.reducerFactory?i.reducerFactory:bx},{provide:ry,deps:[Wv,Kv],useFactory:sy},fx,Sx,Cx,wx,Mx,Qx(i.runtimeChecks),Jx()]}function iE(){s(Si),s(_a),s(ba),s(ot),s(iy,{optional:!0}),s(Qp,{optional:!0})}var rE=[{provide:fl,useFactory:iE},fs(()=>s(fl))];function my(n,i){return Jt([...nE(n,i),rE])}function aE(){s(fl);let n=s(gx),i=s(_x),e=s($d);s(Qp,{optional:!0});let t=n.map((r,a)=>{let l=i.shift()[a];return v(g({},r),{reducers:l,initialState:uy(r.initialState)})});e.addFeatures(t)}var Cj=[{provide:Hd,useFactory:aE},fs(()=>s(Hd))];function N(...n){let i=n.pop(),e=n.map(t=>t.type);return{reducer:i,types:e}}function Di(n,...i){let e=new Map;for(let t of i)for(let r of t.types){let a=e.get(r);if(a){let o=(l,c)=>t.reducer(a(l,c),c);e.set(r,o)}else e.set(r,t.reducer)}return function(t=n,r){let a=e.get(r.type);return a?a(t,r):t}}var bl=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},fn=class extends bl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,a,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=a||null,this.directives=o||null}},Bt=class extends bl{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},tf=class extends bl{element;constructor(i){super(),this.element=i instanceof j?i.nativeElement:i}},Sr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof fn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Bt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof tf)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},vl=class extends Sr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Dc,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||Q.NULL,a=r.get(Rt,t.injector);e=Mc(i.component,{elementInjector:r,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},py=(()=>{class n extends Bt{constructor(){let e=s(ut),t=s(st);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ie]})}return n})(),gn=(()=>{class n extends Sr{_moduleRef=s(Dc,{optional:!0});_document=s(te);_viewContainerRef=s(st);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ie]})}return n})(),Qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})();var nf=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new nt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(me(e=>e.some(t=>t.target===i)),_h({bufferSize:1,refCount:!0}),G(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Wd=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(Z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new nf(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var yl=class{};function Sl(n){return n&&typeof n.connect=="function"&&!(n instanceof kg)}var Jn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Jn||{}),Yd=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,a){i.forEachOperation((o,l,c)=>{let m,p;if(o.previousIndex==null){let _=()=>t(o,l,c);m=this._insertView(_,c,e,r(o)),p=m?Jn.INSERTED:Jn.REPLACED}else c==null?(this._detachAndCacheView(l,e),p=Jn.REMOVED):(m=this._moveView(l,c,e,r(o)),p=Jn.MOVED);a&&a({context:m?.context,operation:p,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=r;return}let o=i();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let a=t.get(i);return t.move(a,e),a.context.$implicit=r,a}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var oE=20,Cr=(()=>{class n{_ngZone=s(Z);_platform=s(ge);_renderer=s(Pt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=oE){return this._platform.isBrowser?new nt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ps(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):D()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(me(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let r=tn(t),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Cl=(()=>{class n{elementRef=s(j);scrollDispatcher=s(Cr);ngZone=s(Z);dir=s(Je,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new S;_renderer=s(Le);_cleanupScroll;_elementScrolled=new S;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&oo()!=Zn.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),oo()==Zn.INVERTED?e.left=e.right:oo()==Zn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Od()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?r:t:e=="end"&&(e=o?t:r),o&&oo()==Zn.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:o&&oo()==Zn.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),sE=20,nn=(()=>{class n{_platform=s(ge);_listeners;_viewportSize=null;_change=new S;_document=s(te);constructor(){let e=s(Z),t=s(Pt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),o=-a.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,l=-a.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:o,left:l}}change(e=sE){return e>0?this._change.pipe(ps(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var fy=new b("CDK_VIRTUAL_SCROLL_VIEWPORT");var Dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})(),Dl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le,Dn,le,Dn]})}return n})();var cf=["*"];function cE(n,i){n&1&&ee(0)}var dE=["tabListContainer"],uE=["tabList"],mE=["tabListInner"],hE=["nextPaginator"],pE=["previousPaginator"],fE=["content"];function gE(n,i){}var _E=["tabBodyWrapper"],bE=["tabHeader"];function vE(n,i){}function yE(n,i){if(n&1&&re(0,vE,0,0,"ng-template",12),n&2){let e=L().$implicit;A("cdkPortalOutlet",e.templateLabel)}}function SE(n,i){if(n&1&&f(0),n&2){let e=L().$implicit;Ve(e.textLabel)}}function CE(n,i){if(n&1){let e=et();d(0,"div",7,2),w("click",function(){let r=pe(e),a=r.$implicit,o=r.$index,l=L(),c=mt(1);return fe(l._handleClick(a,c,o))})("cdkFocusChange",function(r){let a=pe(e).$index,o=L();return fe(o._tabFocusChanged(r,a))}),F(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),T(6,yE,1,1,null,12)(7,SE,1,1),u()()()}if(n&2){let e=i.$implicit,t=i.$index,r=mt(1),a=L();lt(e.labelClass),B("mdc-tab--active",a.selectedIndex===t),A("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),J("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),h(3),A("matRippleTrigger",r)("matRippleDisabled",e.disabled||a.disableRipple),h(3),I(e.templateLabel?6:7)}}function DE(n,i){n&1&&ee(0)}function wE(n,i){if(n&1){let e=et();d(0,"mat-tab-body",13),w("_onCentered",function(){pe(e);let r=L();return fe(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){pe(e);let a=L();return fe(a._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){pe(e);let a=L();return fe(a._bodyCentered(r))}),u()}if(n&2){let e=i.$implicit,t=i.$index,r=L();lt(e.bodyClass),A("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r._bodyAnimationDuration)("preserveContent",r.preserveContent),J("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var ME=new b("MatTabContent"),xE=(()=>{class n{template=s(ut);static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matTabContent",""]],features:[ue([{provide:ME,useExisting:n}])]})}return n})(),EE=new b("MatTabLabel"),vy=new b("MAT_TAB"),AE=(()=>{class n extends py{_closestTab=s(vy,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ue([{provide:EE,useExisting:n}]),ie]})}return n})(),yy=new b("MAT_TAB_GROUP"),df=(()=>{class n{_viewContainerRef=s(st);_closestTabGroup=s(yy,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new S;position=null;origin=null;isActive=!1;constructor(){s(Qe).load(pn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Bt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,AE,5)(a,xE,7,ut),t&2){let o;z(o=U())&&(r.templateLabel=o.first),z(o=U())&&(r._explicitContent=o.first)}},viewQuery:function(t,r){if(t&1&&Be(ut,7),t&2){let a;z(a=U())&&(r._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&J("id",null)},inputs:{disabled:[2,"disabled","disabled",k],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ue([{provide:vy,useExisting:n}]),ke],ngContentSelectors:cf,decls:1,vars:0,template:function(t,r){t&1&&(Me(),ta(0,cE,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return n})(),rf="mdc-tab-indicator--active",gy="mdc-tab-indicator--no-transition",of=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},RE=(()=>{class n{_elementRef=s(j);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(rf);return}let r=t.getBoundingClientRect(),a=e.width/r.width,o=e.left-r.left;t.classList.add(gy),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(gy),t.classList.add(rf),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(rf)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k]}})}return n})();var Sy=(()=>{class n extends RE{elementRef=s(j);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(J("aria-disabled",!!r.disabled),B("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",k]},features:[ie]})}return n})(),_y={passive:!0},kE=650,NE=100;function af(n){let i=n+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:""}var TE=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(he);_viewportRuler=s(nn);_dir=s(Je,{optional:!0});_ngZone=s(Z);_platform=s(ge);_sharedResizeObserver=s(Wd);_injector=s(Q);_renderer=s(Le);_animationsDisabled=Ne();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new S;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new S;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_y),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_y))}ngAfterContentInit(){let e=this._dir?this._dir.change:D("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(di(32),G(this._destroyed)),r=this._viewportRuler.change(150).pipe(G(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new fa(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),He(a,{injector:this._injector}),Pe(e,r,t,this._items.changes,this._itemsResized()).pipe(G(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?vt:this._items.changes.pipe(Ze(this._items),Oe(e=>new nt(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(a=>t.next(a));return e.forEach(a=>r.observe(a.elementRef.nativeElement)),()=>{r.disconnect()}}))),ur(1),me(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Xe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()=="ltr"?(l=a,c=l+o):(c=this._tabListInner.nativeElement.offsetWidth-a,l=c-o);let m=this.scrollDistance,p=this.scrollDistance+r;l<m?this.scrollDistance-=m-l:c>p&&(this.scrollDistance+=Math.min(c-p,l-m))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ig(kE,NE).pipe(G(Pe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:a}=this._scrollHeader(e);(a===0||a>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",k],selectedIndex:[2,"selectedIndex","selectedIndex",Ht]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),IE=(()=>{class n extends TE{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new of(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,Sy,4),t&2){let o;z(o=U())&&(r._items=o)}},viewQuery:function(t,r){if(t&1&&Be(dE,7)(uE,7)(mE,7)(hE,5)(pE,5),t&2){let a;z(a=U())&&(r._tabListContainer=a.first),z(a=U())&&(r._tabList=a.first),z(a=U())&&(r._tabListInner=a.first),z(a=U())&&(r._nextPaginator=a.first),z(a=U())&&(r._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&B("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",k]},features:[ie],ngContentSelectors:cf,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(Me(),d(0,"div",5,0),w("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(o){return r._handlePaginatorPress("before",o)})("touchend",function(){return r._stopInterval()}),F(2,"div",6),u(),d(3,"div",7,1),w("keydown",function(o){return r._handleKeydown(o)}),d(5,"div",8,2),w("cdkObserveContent",function(){return r._onContentChanges()}),d(7,"div",9,3),ee(9),u()()(),d(10,"div",10,4),w("mousedown",function(o){return r._handlePaginatorPress("after",o)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),F(12,"div",6),u()),t&2&&(B("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),A("matRippleDisabled",r._disableScrollBefore||r.disableRipple),h(3),B("_mat-animation-noopable",r._animationsDisabled),h(2),J("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),h(5),B("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),A("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[nr,bv],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})}return n})(),OE=new b("MAT_TABS_CONFIG"),by=(()=>{class n extends gn{_host=s(sf);_ngZone=s(Z);_centeringSub=Se.EMPTY;_leavingSub=Se.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ze(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matTabBodyHost",""]],features:[ie]})}return n})(),sf=(()=>{class n{_elementRef=s(j);_dir=s(Je,{optional:!0});_ngZone=s(Z);_injector=s(Q);_renderer=s(Le);_diAnimationsDisabled=Ne();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Se.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(he);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),He(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),He(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&Be(by,5)(fE,5),t&2){let a;z(a=U())&&(r._portalHost=a.first),z(a=U())&&(r._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&J("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(d(0,"div",1,0),re(2,gE,0,0,"ng-template",2),u()),t&2&&B("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[by,Cl],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})}return n})(),Cy=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(he);_ngZone=s(Z);_tabsSubscription=Se.EMPTY;_tabLabelSubscription=Se.EMPTY;_tabBodySubscription=Se.EMPTY;_diAnimationsDisabled=Ne();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Zr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=af(e.body),this._headerAnimationDuration=af(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=af(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!s(ge).isBrowser;constructor(){let e=s(OE,{optional:!0});this._groupId=s(ze).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,a)=>r.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,r=t[a];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ze(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new lf;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Pe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,df,5),t&2){let o;z(o=U())&&(r._allTabs=o)}},viewQuery:function(t,r){if(t&1&&Be(_E,5)(bE,5)(sf,5),t&2){let a;z(a=U())&&(r._tabBodyWrapper=a.first),z(a=U())&&(r._tabHeader=a.first),z(a=U())&&(r._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(t,r){t&2&&(J("mat-align-tabs",r.alignTabs),lt("mat-"+(r.color||"primary")),vn("--%NS%mat-tab-body-animation-duration",r._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",r._headerAnimationDuration),B("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",k],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",k],selectedIndex:[2,"selectedIndex","selectedIndex",Ht],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ht],disablePagination:[2,"disablePagination","disablePagination",k],disableRipple:[2,"disableRipple","disableRipple",k],preserveContent:[2,"preserveContent","preserveContent",k],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ue([{provide:yy,useExisting:n}])],ngContentSelectors:cf,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(Me(),d(0,"mat-tab-header",3,0),w("indexFocused",function(o){return r._focusChanged(o)})("selectFocusedIndex",function(o){return r.selectedIndex=o}),kt(2,CE,8,17,"div",4,wh),u(),T(4,DE,1,0),d(5,"div",5,1),kt(7,wE,1,10,"mat-tab-body",6,wh),u()),t&2&&(A("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),s_("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),h(2),Nt(r._tabs),h(2),I(r._isServer?4:-1),h(),B("_mat-animation-noopable",r._bodyAnimationsDisabled()),h(2),Nt(r._tabs))},dependencies:[IE,Sy,rl,nr,gn,sf],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})}return n})(),lf=class{index;tab};var Dy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var PE=["*",[["mat-toolbar-row"]]],LE=["*","mat-toolbar-row"],BE=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),wy=(()=>{class n{_elementRef=s(j);_platform=s(ge);_document=s(te);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,BE,5),t&2){let o;z(o=U())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(lt(r.color?"mat-"+r.color:""),B("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:LE,decls:2,vars:0,template:function(t,r){t&1&&(Me(PE),ee(0),ee(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return n})();var My=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var jE=["*",[["","progressIndicator",""]]],zE=["*","[progressIndicator]"];function UE(n,i){n&1&&($e(0,"div",1),ee(1,1),Ye())}var HE=new b("MAT_BUTTON_CONFIG");function xy(n){return n==null?void 0:Ht(n)}var uf=(()=>{class n{_elementRef=s(j);_ngZone=s(Z);_animationsDisabled=Ne();_config=s(HE,{optional:!0});_focusMonitor=s(Wt);_cleanupClick;_renderer=s(Le);_rippleLoader=s(Uv);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ja(!1,{transform:k});constructor(){s(Qe).load(pn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(J("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),lt(r.color?"mat-"+r.color:""),B("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",k],disabled:[2,"disabled","disabled",k],ariaDisabled:[2,"aria-disabled","ariaDisabled",k],disabledInteractive:[2,"disabledInteractive","disabledInteractive",k],tabIndex:[2,"tabIndex","tabIndex",xy],_tabindex:[2,"tabindex","_tabindex",xy],showProgress:[1,"showProgress"]}})}return n})(),_n=(()=>{class n extends uf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ie],ngContentSelectors:zE,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Me(jE),dn(0,"span",0),ee(1),T(2,UE,2,0,"div",1),dn(3,"span",2)(4,"span",3)),t&2&&(h(2),I(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var $E=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],GE=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function WE(n,i){n&1&&($e(0,"div",2),ee(1,3),Ye())}var Ey=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ft=(()=>{class n extends uf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=YE(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Ey.get(this._appearance):null,a=Ey.get(e);r&&t.remove(...r),t.add(...a),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ie],ngContentSelectors:GE,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Me($E),dn(0,"span",0),ee(1),$e(2,"span",1),ee(3,1),Ye(),ee(4,2),T(5,WE,2,0,"div",2),dn(6,"span",3)(7,"span",4)),t&2&&(B("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),h(5),I(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function YE(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[lo,le]})}return n})();function Ay(n){return Error(`Unable to find icon with the name "${n}"`)}function qE(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ry(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function ky(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ir=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Ty=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,a){return this._addSvgIconConfig(e,t,new ir(r,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,a){let o=this._sanitizer.sanitize(en.HTML,r);if(!o)throw ky(r);let l=ha(o);return this._addSvgIconConfig(e,t,new ir("",l,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new ir(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let a=this._sanitizer.sanitize(en.HTML,t);if(!a)throw ky(t);let o=ha(a);return this._addSvgIconSetConfig(e,new ir("",o,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(en.RESOURCE_URL,e);if(!t)throw Ry(e);let r=this._cachedIconsByUrl.get(t);return r?D(qd(r)):this._loadSvgIconFromConfig(new ir(e,null)).pipe(it(a=>this._cachedIconsByUrl.set(t,a)),x(a=>qd(a)))}getNamedSvgIcon(e,t=""){let r=Ny(t,e),a=this._svgIconConfigs.get(r);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(r,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):hc(Ay(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?D(qd(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(x(t=>qd(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return D(r);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(be(l=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(en.RESOURCE_URL,o.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(m)),D(null)})));return gc(a).pipe(x(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw Ay(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let a=t[r];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(o,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(it(t=>e.svgText=t),x(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?D(null):this._fetchIcon(e).pipe(it(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let l=this._svgElementFromString(ha("<svg></svg>"));return l.appendChild(o),this._setSvgAttributes(l,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(ha("<svg></svg>")),r=e.attributes;for(let a=0;a<r.length;a++){let{name:o,value:l}=r[a];o!=="id"&&t.setAttribute(o,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,a=r?.withCredentials??!1;if(!this._httpClient)throw qE();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(en.RESOURCE_URL,t);if(!o)throw Ry(t);let l=this._inProgressUrlFetches.get(o);if(l)return l;let c=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(x(m=>ha(m)),Ra(()=>this._inProgressUrlFetches.delete(o)),bc());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Ny(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let a=this._resolvers[r](t,e);if(a)return KE(a)?new ir(a.url,null,a.options):new ir(a,null)}}static \u0275fac=function(t){return new(t||n)($(mn,8),$(Fs),$(te,8),$(Wn))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qd(n){return n.cloneNode(!0)}function Ny(n,i){return n+":"+i}function KE(n){return!!(n.url&&n.options)}var XE=["*"],ZE=new b("MAT_ICON_DEFAULT_OPTIONS"),QE=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(te),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Iy=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],JE=Iy.map(n=>`[${n}]`).join(", "),eA=/^url\(['"]?#(.*?)['"]?\)$/,Bn=(()=>{class n{_elementRef=s(j);_iconRegistry=s(Ty);_location=s(QE);_errorHandler=s(Wn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Se.EMPTY;constructor(){let e=s(new Rn("aria-hidden"),{optional:!0}),t=s(ZE,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,a)=>{r.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(JE),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Iy.forEach(o=>{let l=t[a],c=l.getAttribute(o),m=c?c.match(eA):null;if(m){let p=r.get(l);p||(p=[],r.set(l,p)),p.push({name:o,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ie(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${r}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(J("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),lt(r.color?"mat-"+r.color:""),B("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",k],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:XE,decls:1,vars:0,template:function(t,r){t&1&&(Me(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})(),Vn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var Oy=Od();function Dr(n){return new Kd(n.get(nn),n.get(te))}var Kd=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=_t(-this._previousScrollPosition.left),i.style.top=_t(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,a=t.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Oy&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Oy&&(t.scrollBehavior=a,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function zy(n,i){return new Xd(n.get(Cr),n.get(Z),n.get(nn),i)}var Xd=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(me(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var wl=class{enable(){}disable(){}attach(){}};function mf(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,a=n.right<e.left,o=n.left>e.right;return t||r||a||o})}function Fy(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,a=n.left<e.left,o=n.right>e.right;return t||r||a||o})}function wn(n,i){return new Zd(n.get(Cr),n.get(nn),n.get(Z),i)}var Zd=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();mf(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Uy=(()=>{class n{_injector=s(Q);noop=()=>new wl;close=e=>zy(this._injector,e);block=()=>Dr(this._injector);reposition=e=>wn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),rn=class{positionStrategy;scrollStrategy=new wl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Qd=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Hy=(()=>{class n{_attachedOverlays=[];_document=s(te);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),$y=(()=>{class n extends Hy{_ngZone=s(Z);_renderer=s(Pt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let a=t[r];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Gy=(()=>{class n extends Hy{_platform=s(ge);_ngZone=s(Z);_renderer=s(Pt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,r),a.listen(t,"click",this._clickListener,r),a.listen(t,"auxclick",this._clickListener,r),a.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Mt(e)};_clickListener=e=>{let t=Mt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let o=a.length-1;o>-1;o--){let l=a[o],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(Py(l.overlayElement,t)||Py(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function Py(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Wy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})(),eu=(()=>{class n{_platform=s(ge);_containerElement;_document=s(te);_styleLoader=s(Qe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Lp()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<r.length;a++)r[a].remove()}let t=this._document.createElement("div");t.classList.add(e),Lp()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Wy)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),hf=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function pf(n){return n&&n.nodeType===1}var fo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new S;_attachments=new S;_detachments=new S;_positionStrategy;_scrollStrategy;_locationChanges=Se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new S;_outsidePointerEvents=new S;_afterNextRenderRef;constructor(i,e,t,r,a,o,l,c,m,p=!1,_,y){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=a,this._keyboardDispatcher=o,this._document=l,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=p,this._injector=_,this._renderer=y,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=He(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=g(g({},this._config),i),this._updateElementSize()}setDirection(i){this._config=v(g({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=_t(this._config.width),i.height=_t(this._config.height),i.minWidth=_t(this._config.minWidth),i.minHeight=_t(this._config.minHeight),i.maxWidth=_t(this._config.maxWidth),i.maxHeight=_t(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;pf(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new hf(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=er(e||[]).filter(a=>!!a);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=He(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Ly="cdk-overlay-connected-position-bounding-box",tA=/([A-Za-z%]+)$/;function ei(n,i){return new go(i,n.get(nn),n.get(te),n.get(ge),n.get(eu))}var go=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new S;_resizeSubscription=Se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,a){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=a,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Ly),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,a=[],o;for(let l of this._preferredPositions){let c=this._getOriginPoint(i,r,l),m=this._getOverlayPoint(c,e,l),p=this._getOverlayFit(m,e,t,l);if(p.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(p,m,t)){a.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!o||o.overlayFit.visibleArea<p.visibleArea)&&(o={overlayFit:p,overlayPoint:m,originPoint:c,position:l,overlayRect:e})}if(a.length){let l=null,c=-1;for(let m of a){let p=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);p>c&&(c=p,l=m)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&va(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ly),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:pf(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=t.originX=="start"?o:l}e.left<0&&(r-=e.left);let a;return t.originY=="center"?a=i.top+i.height/2:a=t.originY=="top"?i.top:i.bottom,e.top<0&&(a-=e.top),{x:r,y:a}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+a}}_getOverlayFit(i,e,t,r){let a=Vy(e),{x:o,y:l}=i,c=this._getOffset(r,"x"),m=this._getOffset(r,"y");c&&(o+=c),m&&(l+=m);let p=0-o,_=o+a.width-t.width,y=0-l,P=l+a.height-t.height,H=this._subtractOverflows(a.width,p,_),q=this._subtractOverflows(a.height,y,P),oe=H*q;return{visibleArea:oe,isCompletelyWithinViewport:a.width*a.height===oe,fitsInViewportVertically:q===a.height,fitsInViewportHorizontally:H==a.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,a=t.right-e.x,o=By(this._overlayRef.getConfig().minHeight),l=By(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||o!=null&&o<=r,m=i.fitsInViewportHorizontally||l!=null&&l<=a;return c&&m}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=Vy(e),a=this._viewportRect,o=Math.max(i.x+r.width-a.width,0),l=Math.max(i.y+r.height-a.height,0),c=Math.max(a.top-t.top-i.y,0),m=Math.max(a.left-t.left-i.x,0),p=0,_=0;return r.width<=a.width?p=m||-o:p=i.x<this._getViewportMarginStart()?a.left-t.left-i.x:0,r.height<=a.height?_=c||-l:_=i.y<this._getViewportMarginTop()?a.top-t.top-i.y:0,this._previousPushAmount={x:p,y:_},{x:i.x+p,y:i.y+_}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!nA(this._lastScrollVisibility,t)){let r=new Qd(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),a,o,l;if(e.overlayY==="top")o=i.y,a=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let P=Math.min(t.bottom-i.y+t.top,i.y),H=this._lastBoundingBoxSize.height;a=P*2,o=i.y-P,a>H&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-H/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,m=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,p,_,y;if(m)y=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),p=i.x-this._getViewportMarginStart();else if(c)_=i.x,p=t.right-i.x-this._getViewportMarginEnd();else{let P=Math.min(t.right-i.x+t.left,i.x),H=this._lastBoundingBoxSize.width;p=P*2,_=i.x-P,p>H&&!this._isInitialRender&&!this._growAfterOpen&&(_=i.x-H/2)}return{top:o,left:_,bottom:l,right:y,width:p,height:a}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=_t(t.width),r.height=_t(t.height),r.top=_t(t.top)||"auto",r.bottom=_t(t.bottom)||"auto",r.left=_t(t.left)||"auto",r.right=_t(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(r.maxHeight=_t(a)),o&&(r.maxWidth=_t(o))}this._lastBoundingBoxSize=t,va(this._boundingBox.style,r)}_resetBoundingBoxStyles(){va(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){va(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),a=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let p=this._viewportRuler.getViewportScrollPosition();va(t,this._getExactOverlayY(e,i,p)),va(t,this._getExactOverlayX(e,i,p))}else t.position="static";let l="",c=this._getOffset(e,"x"),m=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),m&&(l+=`translateY(${m}px)`),t.transform=l.trim(),o.maxHeight&&(r?t.maxHeight=_t(o.maxHeight):a&&(t.maxHeight="")),o.maxWidth&&(r?t.maxWidth=_t(o.maxWidth):a&&(t.maxWidth="")),va(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(a.y+this._overlayRect.height)}px`}else r.top=_t(a.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;r.right=`${l-(a.x+this._overlayRect.width)}px`}else r.left=_t(a.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Fy(i,t),isOriginOutsideView:mf(i,t),isOverlayClipped:Fy(e,t),isOverlayOutsideView:mf(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&er(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof j)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function va(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function By(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(tA);return!e||e==="px"?parseFloat(i):null}return n||null}function Vy(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function nA(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var jy="cdk-global-overlay-wrapper";function Mi(n){return new Jd}var Jd=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(jy),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:a,maxWidth:o,maxHeight:l}=t,c=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),m=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),p=this._xPosition,_=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",P="",H="",q="";c?q="flex-start":p==="center"?(q="center",y?H=_:P=_):y?p==="left"||p==="end"?(q="flex-end",P=_):(p==="right"||p==="start")&&(q="flex-start",H=_):p==="left"||p==="start"?(q="flex-start",P=_):(p==="right"||p==="end")&&(q="flex-end",H=_),i.position=this._cssPosition,i.marginLeft=c?"0":P,i.marginTop=m?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":H,e.justifyContent=q,e.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(jy),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Yy=(()=>{class n{_injector=s(Q);global(){return Mi()}flexibleConnectedTo(e){return ei(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),Ml=new b("OVERLAY_DEFAULT_CONFIG");function on(n,i){n.get(Qe).load(Wy);let e=n.get(eu),t=n.get(te),r=n.get(ze),a=n.get(mi),o=n.get(Je),l=n.get(Le,null,{optional:!0})||n.get(Pt).createRenderer(null,null),c=new rn(i),m=n.get(Ml,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||o.value,!t.body||!("showPopover"in t.body)?c.usePopover=!1:c.usePopover=i?.usePopover??m;let p=t.createElement("div"),_=t.createElement("div");p.id=r.getId("cdk-overlay-"),p.classList.add("cdk-overlay-pane"),_.appendChild(p),c.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let y=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return pf(y)?y.after(_):y?.type==="parent"?y.element.appendChild(_):e.getContainerElement().appendChild(_),new fo(new vl(p,a,n),_,p,c,n.get(Z),n.get($y),t,n.get(fr),n.get(Gy),i?.disableAnimations??n.get(Ta,null,{optional:!0})==="NoopAnimations",n.get(Rt),l)}var qy=(()=>{class n{scrollStrategies=s(Uy);_positionBuilder=s(Yy);_injector=s(Q);create(e){return on(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),iA=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],rA=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n)}}),_o=(()=>{class n{elementRef=s(j);static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Ky=new b("cdk-connected-overlay-default-config"),tu=(()=>{class n{_dir=s(Je,{optional:!0});_injector=s(Q);_overlayRef;_templatePortal;_backdropSubscription=Se.EMPTY;_attachSubscription=Se.EMPTY;_detachSubscription=Se.EMPTY;_positionSubscription=Se.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(rA);_ngZone=s(Z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new R;positionChange=new R;attach=new R;detach=new R;overlayKeydown=new R;overlayOutsideClick=new R;constructor(){let e=s(ut),t=s(st),r=s(Ky,{optional:!0}),a=s(Ml,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Bt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=iA);let e=this._overlayRef=on(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Xe(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),a=Mt(t);(!r||r!==a&&!r.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new rn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ei(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof _o?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof _o?this.origin.elementRef.nativeElement:this.origin instanceof j?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(zg(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",k],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",k],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",k],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",k],push:[2,"cdkConnectedOverlayPush","push",k],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",k],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",k],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ke]})}return n})(),Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[qy],imports:[le,Qn,Dl,Dl]})}return n})();var aA=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],oA=["mat-icon, [matMenuItemIcon]","*"];function sA(n,i){n&1&&(Ut(),d(0,"svg",2),F(1,"polygon",3),u())}var lA=["*"];function cA(n,i){if(n&1){let e=et();$e(0,"div",0),Fa("click",function(){pe(e);let r=L();return fe(r.closed.emit("click"))})("animationstart",function(r){pe(e);let a=L();return fe(a._onAnimationStart(r.animationName))})("animationend",function(r){pe(e);let a=L();return fe(a._onAnimationDone(r.animationName))})("animationcancel",function(r){pe(e);let a=L();return fe(a._onAnimationDone(r.animationName))}),$e(1,"div",1),ee(2),Ye()()}if(n&2){let e=L();lt(e._classList),B("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),pt("id",e.panelId),J("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var gf=new b("MAT_MENU_PANEL"),rr=(()=>{class n{_elementRef=s(j);_document=s(te);_focusMonitor=s(Wt);_parentMenu=s(gf,{optional:!0});_changeDetectorRef=s(he);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new S;_focused=new S;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(Qe).load(pn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&w("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(J("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),B("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k]},exportAs:["matMenuItem"],ngContentSelectors:oA,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(Me(aA),ee(0),d(1,"span",0),ee(2,1),u(),F(3,"div",1),T(4,sA,2,0,":svg:svg",2)),t&2&&(h(3),A("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),h(),I(r._triggersSubmenu?4:-1))},dependencies:[nr],encapsulation:2})}return n})();var dA=new b("MatMenuContent");var uA=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ff="_mat-menu-enter",nu="_mat-menu-exit",xi=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(he);_injector=s(Q);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ne();_allItems;_directDescendantItems=new Zr;_classList={};_panelAnimationState="void";_animationDone=new S;_isAnimating=ne(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=g({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{r[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{r[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new R;close=this.closed;panelId=s(ze).getId("mat-menu-panel-");constructor(){let e=s(uA);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new fa(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ze(this._directDescendantItems),Oe(e=>Pe(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),a=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[a]&&!r[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ze(this._directDescendantItems),Oe(t=>Pe(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Xe(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=He(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=v(g({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===nu;(t||e===ff)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ff||e===nu)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(nu),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ff:nu)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ze(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,dA,5)(a,rr,5)(a,rr,4),t&2){let o;z(o=U())&&(r.lazyContent=o.first),z(o=U())&&(r._allItems=o),z(o=U())&&(r.items=o)}},viewQuery:function(t,r){if(t&1&&Be(ut,5),t&2){let a;z(a=U())&&(r.templateRef=a.first)}},hostVars:3,hostBindings:function(t,r){t&2&&J("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",k],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:k(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ue([{provide:gf,useExisting:n}])],ngContentSelectors:lA,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(Me(),ta(0,cA,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),mA=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n)}});var bo=new WeakMap,hA=(()=>{class n{_canHaveBackdrop;_element=s(j);_viewContainerRef=s(st);_menuItemInstance=s(rr,{optional:!0,self:!0});_dir=s(Je,{optional:!0});_focusMonitor=s(Wt);_ngZone=s(Z);_injector=s(Q);_scrollStrategy=s(mA);_changeDetectorRef=s(he);_animationsDisabled=Ne();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Se.EMPTY;_menuCloseSubscription=Se.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(gf,{optional:!0});this._parentMaterialMenu=t instanceof xi?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&bo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=bo.get(t);bo.set(t,this),r&&r!==this&&r._closeMenu();let a=this._createOverlay(t),o=a.getConfig(),l=o.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof xi&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(G(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof xi&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Ie(1)).subscribe(()=>{t.detach(),bo.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&bo.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=on(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof xi&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new rn({positionStrategy:ei(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let a=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,o)})})}_setPosition(e,t){let[r,a]=e.xPosition==="before"?["end","start"]:["start","end"],[o,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,m]=[o,l],[p,_]=[r,a],y=0;if(this._triggersSubmenu()){if(_=r=e.xPosition==="before"?"start":"end",a=p=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let P=this._parentMaterialMenu.items.first;this._parentInnerPadding=P?P._getHostElement().offsetTop:0}y=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=o==="top"?"bottom":"top",m=l==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:p,overlayY:o,offsetY:y},{originX:a,originY:c,overlayX:_,overlayY:o,offsetY:y},{originX:r,originY:m,overlayX:p,overlayY:l,offsetY:-y},{originX:a,originY:m,overlayX:_,overlayY:l,offsetY:-y}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:D(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(me(o=>this._menuOpen&&o!==this._menuItemInstance)):D();return Pe(e,r,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Bt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return bo.get(e)===this}_triggerIsAriaDisabled(){return k(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Jr()};static \u0275dir=C({type:n})}return n})(),vo=(()=>{class n extends hA{_cleanupTouchstart;_hoverSubscription=Se.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new R;onMenuOpen=this.menuOpened;menuClosed=new R;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(Le);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{ma(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ua(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&w("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),t&2&&J("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ie]})}return n})();var yo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[lo,Vt,le,Dn]})}return n})();var iu=class{applyChanges(i,e,t,r,a){i.forEachOperation((o,l,c)=>{let m,p;if(o.previousIndex==null){let _=t(o,l,c);m=e.createEmbeddedView(_.templateRef,_.context,_.index),p=Jn.INSERTED}else c==null?(e.remove(l),p=Jn.REMOVED):(m=e.get(l),e.move(m,c),p=Jn.MOVED);a&&a({context:m?.context,operation:p,record:o})})}detach(){}};var pA=[[["caption"]],[["colgroup"],["col"]],"*"],fA=["caption","colgroup, col","*"];function gA(n,i){n&1&&ee(0,2)}function _A(n,i){n&1&&(d(0,"thead",0),Tt(1,1),u(),d(2,"tbody",0),Tt(3,2)(4,3),u(),d(5,"tfoot",0),Tt(6,4),u())}function bA(n,i){n&1&&Tt(0,1)(1,2)(2,3)(3,4)}var ti=new b("CDK_TABLE");var ou=(()=>{class n{template=s(ut);static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),su=(()=>{class n{template=s(ut);static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Qy=(()=>{class n{template=s(ut);static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),wr=(()=>{class n{_table=s(ti,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,r,a){if(t&1&&Dt(a,ou,5)(a,su,5)(a,Qy,5),t&2){let o;z(o=U())&&(r.cell=o.first),z(o=U())&&(r.headerCell=o.first),z(o=U())&&(r.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",k],stickyEnd:[2,"stickyEnd","stickyEnd",k]}})}return n})(),au=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},Jy=(()=>{class n extends au{constructor(){super(s(wr),s(j))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ie]})}return n})();var e0=(()=>{class n extends au{constructor(){let e=s(wr),t=s(j);super(e,t);let r=e._table?._getCellRole();r&&t.nativeElement.setAttribute("role",r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ie]})}return n})();var vf=(()=>{class n{template=s(ut);_differs=s(vs);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof El?e.headerCell.template:this instanceof yf?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,features:[ke]})}return n})(),El=(()=>{class n extends vf{_table=s(ti,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",k]},features:[ie,ke]})}return n})(),yf=(()=>{class n extends vf{_table=s(ti,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",k]},features:[ie,ke]})}return n})(),lu=(()=>{class n extends vf{_table=s(ti,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ie]})}return n})(),ya=(()=>{class n{_viewContainer=s(st);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Sf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[ya],encapsulation:2,changeDetection:1})}return n})();var Cf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[ya],encapsulation:2,changeDetection:1})}return n})(),t0=(()=>{class n{templateRef=s(ut);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Xy=["top","bottom","left","right"],bf=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,r=!0,a,o,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=r,this.direction=a,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&t.push(r,...Array.from(r.children));He({write:()=>{for(let r of t)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,r=!0,a=!0){if(!i.length||!this._isBrowser||!(e.some(oe=>oe)||t.some(oe=>oe))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],l=o.children.length,c=this.direction==="rtl",m=c?"right":"left",p=c?"left":"right",_=e.lastIndexOf(!0),y=t.indexOf(!0),P,H,q;a&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),He({earlyRead:()=>{P=this._getCellWidths(o,r),H=this._getStickyStartColumnPositions(P,e),q=this._getStickyEndColumnPositions(P,t)},write:()=>{for(let oe of i)for(let _e=0;_e<l;_e++){let se=oe.children[_e];e[_e]&&this._addStickyStyle(se,m,H[_e],_e===_),t[_e]&&this._addStickyStyle(se,p,q[_e],_e===y)}this._positionListener&&P.some(oe=>!!oe)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:P.slice(0,_+1).map((oe,_e)=>e[_e]?oe:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:y===-1?[]:P.slice(y).map((oe,_e)=>t[_e+y]?oe:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let r=t==="bottom"?i.slice().reverse():i,a=t==="bottom"?e.slice().reverse():e,o=[],l=[],c=[];He({earlyRead:()=>{for(let m=0,p=0;m<r.length;m++){if(!a[m])continue;o[m]=p;let _=r[m];c[m]=this._isNativeHtmlTable?Array.from(_.children):[_];let y=this._retrieveElementSize(_).height;p+=y,l[m]=y}},write:()=>{let m=a.lastIndexOf(!0);for(let p=0;p<r.length;p++){if(!a[p])continue;let _=o[p],y=p===m;for(let P of c[p])this._addStickyStyle(P,t,_,y)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&He({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(r=>!r)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);Xy.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let r of Xy)i.style[r]&&(t+=e[r]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],r=i.children;for(let a=0;a<r.length;a++){let o=r[a];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],r=0;for(let a=0;a<i.length;a++)e[a]&&(t[a]=r,r+=i[a]);return t}_getStickyEndColumnPositions(i,e){let t=[],r=0;for(let a=i.length;a>0;a--)e[a]&&(t[a]=r,r+=i[a]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),r={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let r=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};r.width!==this._elemSizeCache.get(t.target)?.width&&vA(t.target)&&(e=!0),this._elemSizeCache.set(t.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function vA(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}var xl=new b("STICKY_POSITIONING_LISTENER");var Df=(()=>{class n{viewContainer=s(st);elementRef=s(j);constructor(){let e=s(ti);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","rowOutlet",""]]})}return n})(),wf=(()=>{class n{viewContainer=s(st);elementRef=s(j);constructor(){let e=s(ti);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Mf=(()=>{class n{viewContainer=s(st);elementRef=s(j);constructor(){let e=s(ti);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),xf=(()=>{class n{viewContainer=s(st);elementRef=s(j);constructor(){let e=s(ti);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Ef=(()=>{class n{_differs=s(vs);_changeDetectorRef=s(he);_elementRef=s(j);_dir=s(Je,{optional:!0});_platform=s(ge);_viewRepeater;_viewportRuler=s(nn);_injector=s(Q);_virtualScrollViewport=s(fy,{optional:!0,host:!0});_positionListener=s(xl,{optional:!0})||s(xl,{optional:!0,skipSelf:!0});_document=s(te);_data;_renderedRange;_onDestroy=new S;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new S;_footerRowStickyUpdates=new S;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new S;_dataStream=new S;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new R;viewChange=new dt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new Rn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(G(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Yd:new iu,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Sl(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(r,a,o)=>this._getEmbeddedViewArgs(r.item,o),r=>r.item.data,r=>{r.operation===Jn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let a=t.get(r.currentIndex);a.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=Zy(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=Zy(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&o.push(t[l]);this._addStickyColumnStyles(o,a)}),r.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let o=this._data[a],l=this._getRenderRowsForData(o,a,r.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<l.length;c++){let m=l[c],p=this._cachedRenderRowsMap.get(m.data);p.has(m.rowDef)?p.get(m.rowDef).push(m):p.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,r){return this._getRowDefs(e,t).map(o=>{let l=r&&r.has(o)?r.get(o):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),ru(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=ru(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=ru(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=ru(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let c=!!l.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||r||a}_switchDataSource(e){this._data=[],Sl(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Sl(this.dataSource)?e=this.dataSource.connect(this):Aa(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=D(this.dataSource)),this._renderChangeSubscription=zt([e,this.viewChange]).pipe(G(this._onDestroy)).subscribe(([t,r])=>{this._data=t||[],this._renderedRange=r,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let r=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),a=r.map(l=>l.sticky),o=r.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let r=0;r<e.viewContainer.length;r++){let a=e.viewContainer.get(r);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;a&&r.push(a)}return r.length,r}_getEmbeddedViewArgs(e,t){let r=e.rowDef,a={$implicit:e.data};return{templateRef:r.template,context:a,index:t}}_renderRow(e,t,r,a={}){let o=e.viewContainer.createEmbeddedView(t.template,a,r);return this._renderCellTemplateForItem(t,a),o}_renderCellTemplateForItem(e,t){for(let r of this._getCellTemplates(e))ya.mostRecentCellOutlet&&ya.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,r=e.length;t<r;t++){let o=e.get(t).context;o.count=r,o.first=t===0,o.last=t===r-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let r=this._columnDefsByName.get(t);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,r)=>t||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new bf(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:D()).pipe(G(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?hh:mh;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ps(0,t),G(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,a)=>this._measureRangeSize(r,a)}),zt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(G(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l){let c=a.offsets[o],m=r!==0?Math.max(r-c,c):-c;for(let p of l)p.style.top=`${-m}px`}}}),zt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(G(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let l=a.elements[o];if(l)for(let c of l)c.style.bottom=`${r+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(t){let a=r.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let r=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let o=e.start-r.start,l=e.end-e.start,c,m;for(let y=0;y<l;y++){let P=a.get(y+o);if(P&&P.rootNodes.length){c=m=P.rootNodes[0];break}}for(let y=l-1;y>-1;y--){let P=a.get(y+o);if(P&&P.rootNodes.length){m=P.rootNodes[P.rootNodes.length-1];break}}let p=c?.getBoundingClientRect?.(),_=m?.getBoundingClientRect?.();return p&&_?_.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,r,a){if(t&1&&Dt(a,t0,5)(a,wr,5)(a,lu,5)(a,El,5)(a,yf,5),t&2){let o;z(o=U())&&(r._noDataRow=o.first),z(o=U())&&(r._contentColumnDefs=o),z(o=U())&&(r._contentRowDefs=o),z(o=U())&&(r._contentHeaderRowDefs=o),z(o=U())&&(r._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,r){t&2&&B("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",k],fixedLayout:[2,"fixedLayout","fixedLayout",k],recycleRows:[2,"recycleRows","recycleRows",k]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ue([{provide:ti,useExisting:n},{provide:xl,useValue:null}])],ngContentSelectors:fA,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Me(pA),ee(0),ee(1,1),T(2,gA,1,0),T(3,_A,7,0)(4,bA,4,0)),t&2&&(h(2),I(r._isServer?2:-1),h(),I(r._isNativeHtmlTable?3:4))},dependencies:[wf,Df,xf,Mf],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function ru(n,i){return n.concat(Array.from(i))}function Zy(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let r=t.nodeType===1?t.nodeName:null;if(r===e)return t;if(r==="TABLE")break;t=t.parentNode}return null}var n0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[Dl]})}return n})();var Al=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new S;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var yA=[[["caption"]],[["colgroup"],["col"]],"*"],SA=["caption","colgroup, col","*"];function CA(n,i){n&1&&ee(0,2)}function DA(n,i){n&1&&(d(0,"thead",0),Tt(1,1),u(),d(2,"tbody",2),Tt(3,3)(4,4),u(),d(5,"tfoot",0),Tt(6,5),u())}function wA(n,i){n&1&&Tt(0,1)(1,3)(2,4)(3,5)}var xr=(()=>{class n extends Ef{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[ue([{provide:Ef,useExisting:n},{provide:ti,useExisting:n},{provide:xl,useValue:null}]),ie],ngContentSelectors:SA,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Me(yA),ee(0),ee(1,1),T(2,CA,1,0),T(3,DA,7,0)(4,wA,4,0)),t&2&&(h(2),I(r._isServer?2:-1),h(),I(r._isNativeHtmlTable?3:4))},dependencies:[wf,Df,xf,Mf],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return n})(),Er=(()=>{class n extends ou{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matCellDef",""]],features:[ue([{provide:ou,useExisting:n}]),ie]})}return n})(),Ar=(()=>{class n extends su{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matHeaderCellDef",""]],features:[ue([{provide:su,useExisting:n}]),ie]})}return n})();var Rr=(()=>{class n extends wr{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ue([{provide:wr,useExisting:n}]),ie]})}return n})(),kr=(()=>{class n extends Jy{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ie]})}return n})();var Nr=(()=>{class n extends e0{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ie]})}return n})();var Tr=(()=>{class n extends El{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",k]},features:[ue([{provide:El,useExisting:n}]),ie]})}return n})();var Ir=(()=>{class n extends lu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ue([{provide:lu,useExisting:n}]),ie]})}return n})(),Or=(()=>{class n extends Sf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ue([{provide:Sf,useExisting:n}]),ie],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[ya],encapsulation:2,changeDetection:1})}return n})();var Fr=(()=>{class n extends Cf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ue([{provide:Cf,useExisting:n}]),ie],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[ya],encapsulation:2,changeDetection:1})}return n})();var Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[n0,le]})}return n})(),MA=9007199254740991,Mr=class extends yl{_data;_renderData=new dt([]);_filter=new dt("");_internalPageChanges=new S;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(i){i=Array.isArray(i)?i:[],this._data.next(i),this._renderChangesSubscription||this._filterData(i)}get filter(){return this._filter.value}set filter(i){this._filter.next(i),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(i){this._sort=i,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(i){this._paginator=i,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(i,e)=>{let t=i[e];if(Sd(t)){let r=Number(t);return r<MA?r:t}return t};sortData=(i,e)=>{let t=e.active,r=e.direction;return!t||r==""?i:i.sort((a,o)=>{let l=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(o,t),m=typeof l,p=typeof c;m!==p&&(m==="number"&&(l+=""),p==="number"&&(c+=""));let _=0;return l!=null&&c!=null?l>c?_=1:l<c&&(_=-1):l!=null?_=1:c!=null&&(_=-1),_*(r=="asc"?1:-1)})};filterPredicate=(i,e)=>{let t=e.trim().toLowerCase();return Object.values(i).some(r=>`${r}`.toLowerCase().includes(t))};constructor(i=[]){super(),this._data=new dt(i),this._updateChangeSubscription()}_updateChangeSubscription(){let i=this._sort?Pe(this._sort.sortChange,this._sort.initialized):D(null),e=this._paginator?Pe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):D(null),t=this._data,r=zt([t,this._filter]).pipe(x(([l])=>this._filterData(l))),a=zt([r,i]).pipe(x(([l])=>this._orderData(l))),o=zt([a,e]).pipe(x(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=o.subscribe(l=>this._renderData.next(l))}_filterData(i){return this.filteredData=this.filter==null||this.filter===""?i:i.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(i){return this.sort?this.sortData(i.slice(),this.sort):i}_pageData(i){if(!this.paginator)return i;let e=this.paginator.pageIndex*this.paginator.pageSize;return i.slice(e,e+this.paginator.pageSize)}_updatePaginator(i){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=i,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,t);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var xA=["determinateSpinner"];function EA(n,i){if(n&1&&(Ut(),d(0,"svg",11),F(1,"circle",12),u()),n&2){let e=L();J("viewBox",e._viewBox()),h(),vn("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),J("r",e._circleRadius())}}var AA=new b("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:i0})}),i0=100,RA=10,Ei=(()=>{class n{_elementRef=s(j);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(AA),t=Ap(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=i0;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-RA)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Be(xA,5),t&2){let a;z(a=U())&&(r._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(J("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),lt("mat-"+r.color),vn("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),B("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ht],diameter:[2,"diameter","diameter",Ht],strokeWidth:[2,"strokeWidth","strokeWidth",Ht]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(re(0,EA,2,8,"ng-template",null,0,wc),d(2,"div",2,1),Ut(),d(4,"svg",3),F(5,"circle",4),u()(),gs(),d(6,"div",5)(7,"div",6)(8,"div",7),Tt(9,8),u(),d(10,"div",9),Tt(11,8),u(),d(12,"div",10),Tt(13,8),u()()()),t&2){let a=mt(1);h(4),J("viewBox",r._viewBox()),h(),vn("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),J("r",r._circleRadius()),h(4),A("ngTemplateOutlet",a),h(2),A("ngTemplateOutlet",a),h(2),A("ngTemplateOutlet",a)}},dependencies:[xs],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Ai=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();function kA(n,i){}var Lr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Rf=(()=>{class n extends Sr{_elementRef=s(j);_focusTrapFactory=s(Ed);_config;_interactivityChecker=s(xd);_ngZone=s(Z);_focusMonitor=s(Wt);_renderer=s(Le);_changeDetectorRef=s(he);_injector=s(Q);_platform=s(ge);_document=s(te);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(Lr,{optional:!0})||new Lr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||He(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=Fn(),a=this._elementRef.nativeElement;(!r||r===this._document.body||r===a||a.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Fn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fn()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&Be(gn,7),t&2){let a;z(a=U())&&(r._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&J("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ie],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&re(0,kA,0,0,"ng-template",0)},dependencies:[gn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),Sa=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Xe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},NA=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>Dr(n)}}),TA=new b("DialogData"),IA=new b("DefaultDialogConfig");function OA(n){let i=ne(n),e=new R;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var kf=(()=>{class n{_injector=s(Q);_defaultOptions=s(IA,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(eu);_idGenerator=s(ze);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=s(NA);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=En(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ze(void 0)));open(e,t){let r=this._defaultOptions||new Lr;t=g(g({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),o=on(this._injector,a),l=new Sa(o,t),c=this._attachContainer(o,l,t);if(l.containerInstance=c,!this.openDialogs.length){let m=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Ie(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(m)}):this._hideNonDialogContentFromAssistiveTechnology(m)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Af(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Af(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Af(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new rn({positionStrategy:e.positionStrategy||Mi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let a=r.injector||r.viewContainerRef?.injector,o=[{provide:Lr,useValue:r},{provide:Sa,useValue:t},{provide:fo,useValue:e}],l;r.container?typeof r.container=="function"?l=r.container:(l=r.container.type,o.push(...r.container.providers(r))):l=Rf;let c=new fn(l,r.viewContainerRef,Q.create({parent:a||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,t,r,a){if(e instanceof ut){let o=this._createInjector(a,t,r,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=g(g({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),r.attachTemplatePortal(new Bt(e,null,l,o))}else{let o=this._createInjector(a,t,r,this._injector),l=r.attachComponentPortal(new fn(e,a.viewContainerRef,o,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,r,a){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:TA,useValue:e.data},{provide:Sa,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,r)):l.push(...e.providers)),e.direction&&(!o||!o.get(Je,null,{optional:!0}))&&l.push({provide:Je,useValue:OA(e.direction)}),Q.create({parent:o||a,providers:l})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute("aria-hidden",a):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let a=t[r];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();function Af(n,i){let e=n.length;for(;e--;)i(n[e])}var r0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[kf],imports:[Vt,Qn,tr,Qn]})}return n})();function FA(n,i){}var uu=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Nf="mdc-dialog--open",a0="mdc-dialog--opening",o0="mdc-dialog--closing",PA=150,LA=75,BA=(()=>{class n extends Rf{_animationStateChanged=new R;_animationsEnabled=!Ne();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?l0(this._config.enterAnimationDuration)??PA:0;_exitAnimationDuration=this._animationsEnabled?l0(this._config.exitAnimationDuration)??LA:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(s0,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(a0,Nf)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Nf),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Nf),this._animationsEnabled?(this._hostElement.style.setProperty(s0,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(o0)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(a0,o0)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(pt("id",r._config.id),J("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),B("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ie],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",0)(1,"div",1),re(2,FA,0,0,"ng-template",2),u()())},dependencies:[gn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return n})(),s0="--mat-dialog-transition-duration";function l0(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Xn(n.substring(0,n.length-2)):n.endsWith("s")?Xn(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var du=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(du||{}),jn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Wr(1);_beforeClosed=new Wr(1);_result;_closeFallbackTimeout;_state=du.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(me(r=>r.state==="opened"),Ie(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(me(r=>r.state==="closed"),Ie(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Pe(this.backdropClick(),this.keydownEvents().pipe(me(r=>r.keyCode===27&&!this.disableClose&&!Xe(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),VA(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(me(t=>t.state==="closing"),Ie(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=du.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=du.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function VA(n,i,e){return n._closeInteractionType=i,n.close(e)}var ar=new b("MatMdcDialogData"),jA=new b("mat-mdc-dialog-default-options"),zA=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>Dr(n)}}),Ri=(()=>{class n{_defaultOptions=s(jA,{optional:!0});_scrollStrategy=s(zA);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(ze);_injector=s(Q);_dialog=s(kf);_animationsDisabled=Ne();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=uu;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=En(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ze(void 0)));constructor(){this._dialogRefConstructor=jn,this._dialogContainerType=BA,this._dialogDataToken=ar}open(e,t){let r;t=g(g({},this._defaultOptions||new uu),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,v(g({},t),{positionStrategy:Mi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Lr,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(o,l,c)=>(r=new this._dialogRefConstructor(o,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:r},{provide:Sa,useValue:null}])}));return r.componentRef=a.componentRef,r.componentInstance=a.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(r);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var c0=(()=>{class n{_dialogRef=s(jn,{optional:!0});_elementRef=s(j);_dialog=s(Ri);ngOnInit(){this._dialogRef||(this._dialogRef=UA(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n})}return n})(),Br=(()=>{class n extends c0{id=s(ze).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&pt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[ie]})}return n})(),Vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[o_([Cl])]})}return n})(),jr=(()=>{class n extends c0{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&B("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[ie]})}return n})();function UA(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[Ri],imports:[r0,Vt,Qn,le]})}return n})();function HA(n,i){if(n&1){let e=et();d(0,"div",1)(1,"button",2),w("click",function(){pe(e);let r=L();return fe(r.action())}),f(2),u()()}if(n&2){let e=L();h(2),De(" ",e.data.action," ")}}var $A=["label"];function GA(n,i){}var WA=Math.pow(2,31)-1,kl=class{_overlayRef;instance;containerInstance;_afterDismissed=new S;_afterOpened=new S;_onAction=new S;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,WA))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},d0=new b("MatSnackBarData"),So=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},YA=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),qA=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),KA=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),u0=(()=>{class n{snackBarRef=s(kl);data=s(d0);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0),f(1),u(),T(2,HA,3,1,"div",1)),t&2&&(h(),De(" ",r.data.message,`
`),h(),I(r.hasAction?2:-1))},dependencies:[ft,YA,qA,KA],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),Tf="_mat-snack-bar-enter",If="_mat-snack-bar-exit",XA=(()=>{class n extends Sr{_ngZone=s(Z);_elementRef=s(j);_changeDetectorRef=s(he);_platform=s(ge);_animationsDisabled=Ne();snackBarConfig=s(So);_document=s(te);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(Q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new S;_onExit=new S;_onEnter=new S;_animationState="void";_live;_label;_role;_liveElementId=s(ze).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===If?this._completeExit():e===Tf&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?He(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Tf)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Tf)},200)))}exit(){return this._destroyed?D(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?He(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(If)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(If),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Be(gn,7)($A,7),t&2){let a;z(a=U())&&(r._portalOutlet=a.first),z(a=U())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&w("animationend",function(o){return r.onAnimationEnd(o.animationName)})("animationcancel",function(o){return r.onAnimationEnd(o.animationName)}),t&2&&B("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ie],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),re(4,GA,0,0,"ng-template",4),u(),F(5,"div"),u()()),t&2&&(h(5),J("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[gn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})}return n})(),ZA=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new So}),or=(()=>{class n{_live=s(al);_injector=s(Q);_breakpointObserver=s(da);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(ZA);_animationsDisabled=Ne();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=u0;snackBarContainerComponent=XA;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let a=g(g({},this._defaultConfig),r);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=Q.create({parent:r||this._injector,providers:[{provide:So,useValue:t}]}),o=new fn(this.snackBarContainerComponent,t.viewContainerRef,a),l=e.attach(o);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let r=g(g(g({},new So),this._defaultConfig),t),a=this._createOverlay(r),o=this._attachSnackBarContainer(a,r),l=new kl(o,a);if(e instanceof ut){let c=new Bt(e,null,{$implicit:r.data,snackBarRef:l});l.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(r,l),m=new fn(e,void 0,c),p=o.attachComponentPortal(m);l.instance=p.instance}return this._breakpointObserver.observe(yd.HandsetPortrait).pipe(G(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(l,r),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new rn;t.direction=e.direction;let r=Mi(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,l=!o&&e.horizontalPosition!=="center";return o?r.left("0"):l?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,on(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Q.create({parent:r||this._injector,providers:[{provide:kl,useValue:t},{provide:d0,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var zr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[or],imports:[Vt,Qn,ht,u0,le]})}return n})();var QA=["*"];var JA=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],eR=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],tR=new b("MAT_CARD_CONFIG"),ki=(()=>{class n{appearance;constructor(){let e=s(tR,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&B("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:QA,decls:1,vars:0,template:function(t,r){t&1&&(Me(),ee(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})(),Ni=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Ti=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:eR,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(Me(JA),ee(0),$e(1,"div",0),ee(2,1),Ye(),ee(3,2))},encapsulation:2})}return n})();var Oi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var nR=["tooltip"],iR=20;var rR=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n,{scrollThrottle:iR})}}),aR=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var m0="tooltip-panel",oR={passive:!0},sR=8,lR=8,cR=24,dR=200,ni=(()=>{class n{_elementRef=s(j);_ngZone=s(Z);_platform=s(ge);_ariaDescriber=s(ll);_focusMonitor=s(Wt);_dir=s(Je);_injector=s(Q);_viewContainerRef=s(st);_mediaMatcher=s(io);_document=s(te);_renderer=s(Le);_animationsDisabled=Ne();_defaultOptions=s(aR,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=h0;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Pn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Pn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Xn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Xn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new S;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=sR}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(G(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new fn(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=r.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(G(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof j)return this._overlayRef;this._detach()}let t=this._injector.get(Cr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${m0}`,a=ei(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(G(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=on(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(rR)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(G(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(G(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(G(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(G(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(g(g({},r.main),a.main)),this._addOffset(g(g({},r.fallback),a.fallback))])}_addOffset(e){let t=lR,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),He(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${m0}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,oR))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||He({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Xe(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),h0=(()=>{class n{_changeDetectorRef=s(he);_elementRef=s(j);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ne();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new S;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>cR&&e.width>=dR}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:r),t.classList.add(e?r:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Be(nR,7),t&2){let a;z(a=U())&&(r._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&w("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&($e(0,"div",1,0),Fa("animationend",function(o){return r._handleAnimationEnd(o)}),$e(2,"div",2),f(3),Ye()()),t&2&&(lt(r.tooltipClass),B("mdc-tooltip--multiline",r._isMultiline),h(3),Ve(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return n})();var Ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[tr,Vt,le,Dn]})}return n})();var uR=["*",[["","matSortHeaderIcon",""]]],mR=["*","[matSortHeaderIcon]"];function hR(n,i){n&1&&(Ut(),$e(0,"svg",3),dn(1,"path",4),Ye())}function pR(n,i){n&1&&($e(0,"div",2),ee(1,1,null,hR,2,0),Ye())}var p0=new b("MAT_SORT_DEFAULT_OPTIONS"),Xt=(()=>{class n{_defaultOptions;_initializedStream=new Wr(1);sortables=new Map;_stateChanges=new S;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new R;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=fR(e.start||this.start,t),a=r.indexOf(this.direction)+1;return a>=r.length&&(a=0),r[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||n)(Te(p0,8))};static \u0275dir=C({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",k],disabled:[2,"matSortDisabled","disabled",k]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ke]})}return n})();function fR(n,i){let e=["asc","desc"];return n=="desc"&&e.reverse(),i||e.push(""),e}var Co=(()=>{class n{_sort=s(Xt,{optional:!0});_columnDef=s(wr,{optional:!0});_changeDetectorRef=s(he);_focusMonitor=s(Wt);_elementRef=s(j);_ariaDescriber=s(ll,{optional:!0});_renderChanges;_animationsDisabled=Ne();_recentlyCleared=ne(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(Qe).load(pn);let e=s(p0,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Pe(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,r){t&1&&w("click",function(){return r._toggleOnInteraction()})("keydown",function(o){return r._handleKeydown(o)})("mouseleave",function(){return r._recentlyCleared.set(null)}),t&2&&(J("aria-sort",r._getAriaSortAttribute()),B("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",k],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",k]},exportAs:["matSortHeader"],ngContentSelectors:mR,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,r){t&1&&(Me(uR),$e(0,"div",0)(1,"div",1),ee(2),Ye(),T(3,pR,3,0,"div",2),Ye()),t&2&&(B("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-descending",r._sort.direction==="desc")("mat-sort-header-ascending",r._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",r._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",r._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",r._animationsDisabled),J("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),h(3),I(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return n})(),Do=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var ii=M("[Race] Load Races"),pu=M("[Race] Load Races Success",O()),fu=M("[Race] Load Races Failure",O()),wo=M("[Race] Create Race",O()),gu=M("[Race] Create Race Success",O()),_u=M("[Race] Create Race Failure",O()),Mo=M("[Race] Update Race",O()),bu=M("[Race] Update Race Success",O()),vu=M("[Race] Update Race Failure",O()),xo=M("[Race] Delete Race",O()),yu=M("[Race] Delete Race Success",O()),Su=M("[Race] Delete Race Failure",O()),Eo=M("[Race] Select Race",O());var Cu=Ci("race"),sr=Fe(Cu,n=>n.races),f0=Fe(Cu,n=>n.loading),x4=Fe(Cu,n=>n.error);var ri=Fe(Cu,n=>n.selectedRaceId),E4=Fe(sr,ri,(n,i)=>i?n.find(e=>e.id===i):null);var w0=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Te(Le),Te(j))};static \u0275dir=C({type:n})}return n})(),M0=(()=>{class n extends w0{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,features:[ie]})}return n})(),Pi=new b("");var gR={provide:Pi,useExisting:At(()=>zn),multi:!0};function _R(){let n=kn()?kn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var bR=new b(""),zn=(()=>{class n extends w0{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!_R())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Te(Le),Te(j),Te(bR,8))};static \u0275dir=C({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&w("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[ue([gR]),ie]})}return n})();function jf(n){return n==null||zf(n)===0}function zf(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ai=new b(""),Tu=new b(""),vR=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xe=class{static min(i){return x0(i)}static max(i){return E0(i)}static required(i){return A0(i)}static requiredTrue(i){return yR(i)}static email(i){return SR(i)}static minLength(i){return CR(i)}static maxLength(i){return DR(i)}static pattern(i){return wR(i)}static nullValidator(i){return wu()}static compose(i){return O0(i)}static composeAsync(i){return F0(i)}};function x0(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function E0(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function A0(n){return jf(n.value)?{required:!0}:null}function yR(n){return n.value===!0?null:{required:!0}}function SR(n){return jf(n.value)||vR.test(n.value)?null:{email:!0}}function CR(n){return i=>{let e=i.value?.length??zf(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function DR(n){return i=>{let e=i.value?.length??zf(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function wR(n){if(!n)return wu;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(jf(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function wu(n){return null}function R0(n){return n!=null}function k0(n){return ea(n)?ln(n):n}function N0(n){let i={};return n.forEach(e=>{i=e!=null?g(g({},i),e):i}),Object.keys(i).length===0?null:i}function T0(n,i){return i.map(e=>e(n))}function MR(n){return!n.validate}function I0(n){return n.map(i=>MR(i)?i:e=>i.validate(e))}function O0(n){if(!n)return null;let i=n.filter(R0);return i.length==0?null:function(e){return N0(T0(e,i))}}function Uf(n){return n!=null?O0(I0(n)):null}function F0(n){if(!n)return null;let i=n.filter(R0);return i.length==0?null:function(e){let t=T0(e,i).map(k0);return gc(t).pipe(x(N0))}}function Hf(n){return n!=null?F0(I0(n)):null}function g0(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function P0(n){return n._rawValidators}function L0(n){return n._rawAsyncValidators}function Ff(n){return n?Array.isArray(n)?n:[n]:[]}function Mu(n,i){return Array.isArray(n)?n.includes(i):n===i}function _0(n,i){let e=Ff(i);return Ff(n).forEach(r=>{Mu(e,r)||e.push(r)}),e}function b0(n,i){return Ff(i).filter(e=>!Mu(n,e))}var xu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Uf(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Hf(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Fi=class extends xu{name;get formDirective(){return null}get path(){return null}};var Ol="VALID",Du="INVALID",Ao="PENDING",Fl="DISABLED",Hr=class{},Eu=class extends Hr{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Ll=class extends Hr{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Bl=class extends Hr{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ro=class extends Hr{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Au=class extends Hr{source;constructor(i){super(),this.source=i}},Ca=class extends Hr{source;constructor(i){super(),this.source=i}};function $f(n){return(Iu(n)?n.validators:n)||null}function xR(n){return Array.isArray(n)?Uf(n):n||null}function Gf(n,i){return(Iu(i)?i.asyncValidators:n)||null}function ER(n){return Array.isArray(n)?Hf(n):n||null}function Iu(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function B0(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new ae(1e3,"");if(!j0(t,e))throw new ae(1001,"")}function V0(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new ae(-1002,"")})}var ko=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=ne(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return qe(this.statusReactive)}set status(i){qe(()=>this.statusReactive.set(i))}_status=wt(()=>this.statusReactive());statusReactive=ne(void 0);get valid(){return this.status===Ol}get invalid(){return this.status===Du}get pending(){return this.status===Ao}get disabled(){return this.status===Fl}get enabled(){return this.status!==Fl}errors;get pristine(){return qe(this.pristineReactive)}set pristine(i){qe(()=>this.pristineReactive.set(i))}_pristine=wt(()=>this.pristineReactive());pristineReactive=ne(!0);get dirty(){return!this.pristine}get touched(){return qe(this.touchedReactive)}set touched(i){qe(()=>this.touchedReactive.set(i))}_touched=wt(()=>this.touchedReactive());touchedReactive=ne(!1);get untouched(){return!this.touched}_events=new S;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(_0(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(_0(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(b0(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(b0(i,this._rawAsyncValidators))}hasValidator(i){return Mu(this._rawValidators,i)}hasAsyncValidator(i){return Mu(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(v(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Bl(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Bl(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(v(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Ll(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Ll(!0,t))}markAsPending(i={}){this.status=Ao;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ro(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(v(g({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Fl,this.errors=null,this._forEachChild(r=>{r.disable(v(g({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Eu(this.value,t)),this._events.next(new Ro(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ol,this._forEachChild(t=>{t.enable(v(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(v(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ol||this.status===Ao)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Eu(this.value,e)),this._events.next(new Ro(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(v(g({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Fl:Ol}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Ao,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=k0(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Ro(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?Fl:this.errors?Du:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ao)?Ao:this._anyControlsHaveStatus(Du)?Du:Ol}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Ll(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Bl(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Iu(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=xR(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ER(this._rawAsyncValidators)}_updateHasRequiredValidator(){qe(()=>this._hasRequired.set(this.hasValidator(xe.required)))}};function j0(n,i){return Object.hasOwn(n,i)}function AR(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function RR(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var Pf=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};function z0(n){return typeof n=="number"?n:parseFloat(n)}var Wf=(()=>{class n{_validator=wu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):wu,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,features:[ke]})}return n})(),kR={provide:ai,useExisting:At(()=>jl),multi:!0},jl=(()=>{class n extends Wf{max;inputName="max";normalizeInput=e=>z0(e);createValidator=e=>E0(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&J("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[ue([kR]),ie]})}return n})(),NR={provide:ai,useExisting:At(()=>zl),multi:!0},zl=(()=>{class n extends Wf{min;inputName="min";normalizeInput=e=>z0(e);createValidator=e=>x0(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&J("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[ue([NR]),ie]})}return n})(),TR={provide:ai,useExisting:At(()=>Un),multi:!0};var Un=(()=>{class n extends Wf{required;inputName="required";normalizeInput=k;createValidator=e=>A0;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&J("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ue([TR]),ie]})}return n})();var IR=new b(""),Ul=new b("",{factory:()=>Ou}),Ou="always";function U0(n,i){return[...i.path,n]}function Lf(n,i,e=Ou){Yf(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),FR(n,i),LR(n,i),PR(n,i),OR(n,i)}function v0(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),ku(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ru(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function OR(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Yf(n,i){let e=P0(n);i.validator!==null?n.setValidators(g0(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=L0(n);i.asyncValidator!==null?n.setAsyncValidators(g0(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Ru(i._rawValidators,r),Ru(i._rawAsyncValidators,r)}function ku(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=P0(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.validator);a.length!==r.length&&(e=!0,n.setValidators(a))}}if(i.asyncValidator!==null){let r=L0(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.asyncValidator);a.length!==r.length&&(e=!0,n.setAsyncValidators(a))}}}let t=()=>{};return Ru(i._rawValidators,t),Ru(i._rawAsyncValidators,t),e}function FR(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&H0(n,i)})}function PR(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&H0(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function H0(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function LR(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function $0(n,i){n==null,Yf(n,i)}function BR(n,i){return ku(n,i)}function G0(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function VR(n){return Object.getPrototypeOf(n.constructor)===M0}function W0(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function jR(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(a=>{a.constructor===zn?e=a:VR(a)?t=a:r=a}),r||t||e||null}function zR(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Y0={provide:IR,useFactory:()=>{let n=s(Mn,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},Mn=class extends xu{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=jR(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(bn)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(he);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Se,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Ca&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=AR(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Un))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,"touched",t.touched),this.bindControlProperty(i,r,"dirty",t.dirty),this.bindControlProperty(i,r,"valid",t.valid),this.bindControlProperty(i,r,"invalid",t.invalid),this.bindControlProperty(i,r,"pending",t.pending),this.bindControlProperty(i,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let a=t.errors;if(r.errors!==a){r.errors=a;let o=this._convertErrors(a);i.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let a=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!a&&(t==="disabled"||t==="required")&&this.renderer&&RR(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new Pf({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=wt(()=>{let r=i();return r.length===0?null:r.reduce((a,o)=>(a[o.kind]=o,a),{})});this.parseErrorsValidator=(()=>e).bind(this),St(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},Nu=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Hn=(()=>{class n extends Nu{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Te(Mn,2))};static \u0275dir=C({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ie]})}return n})(),Li=(()=>{class n extends Nu{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Te(Fi,10))};static \u0275dir=C({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ie]})}return n})(),No=class extends ko{constructor(i,e,t){super($f(e),Gf(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){qe(()=>{V0(this,!0,i),Object.keys(i).forEach(t=>{B0(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,v(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ca(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,a)=>{t=e(t,r,a)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return j0(this.controls,i)?this.controls[i]:null}};var Bf=class extends No{};var UR={provide:Fi,useExisting:At(()=>To)},Pl=Promise.resolve(),To=(()=>{class n extends Fi{callSetDisabledState;get submitted(){return qe(this.submittedReactive)}_submitted=wt(()=>this.submittedReactive());submittedReactive=ne(!1);_directives=new Set;form;ngSubmit=new R;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new No({},Uf(e),Hf(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Pl.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Pl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Pl.then(()=>{let t=this._findContainer(e.path),r=new No({});$0(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Pl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Pl.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),W0(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Au(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Te(ai,10),Te(Tu,10),Te(Ul,8))};static \u0275dir=C({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&w("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([UR]),ie]})}return n})();function y0(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function S0(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Vl=class extends ko{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super($f(e),Gf(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Iu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(S0(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){qe(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ca(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){y0(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){y0(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){S0(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var HR=n=>n instanceof Vl;var $R={provide:Mn,useExisting:At(()=>qf)},C0=Promise.resolve(),qf=(()=>{class n extends Mn{_changeDetectorRef;callSetDisabledState;control=new Vl;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(e,t,r,a,o,l,c,m){super(c,m,a),this._changeDetectorRef=o,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),G0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Lf(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Lf(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){C0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&k(t);C0.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?U0(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(Te(Fi,9),Te(ai,10),Te(Tu,10),Te(Pi,10),Te(he,8),Te(Ul,8),Te(Q,8),Te(Le,8))};static \u0275dir=C({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ue([$R,Y0]),ie,ke,Sh(null)]})}return n})();var Bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),GR={provide:Pi,useExisting:At(()=>Da),multi:!0},Da=(()=>{class n extends M0{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(t,r){t&1&&w("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ue([GR]),ie]})}return n})();var Vf=class extends ko{constructor(i,e,t){super($f(e),Gf(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){qe(()=>{V0(this,!1,i),i.forEach((t,r)=>{B0(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],v(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ca(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var WR=(()=>{class n extends Fi{callSetDisabledState;get submitted(){return qe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=wt(()=>this._submittedReactive());_submittedReactive=ne(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ku(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){v0(e.control||null,e,!1),zR(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,W0(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Au(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(v0(t||null,e),HR(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);$0(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&BR(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Yf(this.form,this),this._oldForm&&ku(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Te(ai,10),Te(Tu,10),Te(Ul,8))};static \u0275dir=C({type:n,features:[ie,ke]})}return n})();var q0=new b("");var YR={provide:Mn,useExisting:At(()=>oi)},oi=(()=>{class n extends Mn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new R;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,a,o,l,c){super(c,l,a),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Lf(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),G0(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return U0(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(Te(Fi,13),Te(ai,10),Te(Tu,10),Te(Pi,10),Te(q0,8),Te(Le,8),Te(Q,8))};static \u0275dir=C({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ue([YR,Y0]),ie,ke,Sh(null)]})}return n})();var qR={provide:Fi,useExisting:At(()=>Zt)},Zt=(()=>{class n extends WR{form=null;ngSubmit=new R;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&w("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([qR]),ie]})}return n})();var K0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})();function D0(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Vi=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),a={};return D0(t)?a=t:t!==null&&(a.validators=t.validator,a.asyncValidators=t.asyncValidator),new No(r,a)}record(e,t=null){let r=this._reduceControls(e);return new Bf(r,t)}control(e,t,r){let a={};return this.useNonNullable?(D0(t)?a=t:(a.validators=t,a.asyncValidators=r),new Vl(e,v(g({},a),{nonNullable:!0}))):new Vl(e,t,r)}array(e,t,r){let a=e.map(o=>this._createControl(o));return new Vf(a,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Vl)return e;if(e instanceof ko)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(t,r,a)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var X0=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ul,useValue:e.callSetDisabledState??Ou}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[K0]})}return n})(),ji=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:q0,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ul,useValue:e.callSetDisabledState??Ou}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[K0]})}return n})();var KR=["notch"],XR=["*"],Z0=["iconPrefixContainer"],Q0=["textPrefixContainer"],J0=["iconSuffixContainer"],eS=["textSuffixContainer"],ZR=["textField"],QR=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],JR=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ek(n,i){n&1&&F(0,"span",21)}function tk(n,i){if(n&1&&(d(0,"label",20),ee(1,1),T(2,ek,1,0,"span",21),u()),n&2){let e=L(2);A("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),J("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),I(!e.hideRequiredMarker&&e._control.required?2:-1)}}function nk(n,i){if(n&1&&T(0,tk,3,5,"label",20),n&2){let e=L();I(e._hasFloatingLabel()?0:-1)}}function ik(n,i){n&1&&F(0,"div",7)}function rk(n,i){}function ak(n,i){if(n&1&&re(0,rk,0,0,"ng-template",13),n&2){L(2);let e=mt(1);A("ngTemplateOutlet",e)}}function ok(n,i){if(n&1&&(d(0,"div",9),T(1,ak,1,1,null,13),u()),n&2){let e=L();A("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),I(e._forceDisplayInfixLabel()?-1:1)}}function sk(n,i){n&1&&(d(0,"div",10,2),ee(2,2),u())}function lk(n,i){n&1&&(d(0,"div",11,3),ee(2,3),u())}function ck(n,i){}function dk(n,i){if(n&1&&re(0,ck,0,0,"ng-template",13),n&2){L();let e=mt(1);A("ngTemplateOutlet",e)}}function uk(n,i){n&1&&(d(0,"div",14,4),ee(2,4),u())}function mk(n,i){n&1&&(d(0,"div",15,5),ee(2,5),u())}function hk(n,i){n&1&&F(0,"div",16)}function pk(n,i){n&1&&(d(0,"div",18),ee(1,6),u())}function fk(n,i){if(n&1&&(d(0,"mat-hint",22),f(1),u()),n&2){let e=L(2);A("id",e._hintLabelId),h(),Ve(e.hintLabel)}}function gk(n,i){if(n&1&&(d(0,"div",19),T(1,fk,2,2,"mat-hint",22),ee(2,7),F(3,"div",23),ee(4,8),u()),n&2){let e=L();h(),I(e.hintLabel?1:-1)}}var jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-label"]]})}return n})(),sS=new b("MatError"),si=(()=>{class n{id=s(ze).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&pt("id",r.id)},inputs:{id:"id"},features:[ue([{provide:sS,useExisting:n}])]})}return n})(),lr=(()=>{class n{align="start";id=s(ze).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(pt("id",r.id),J("align",null),B("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),lS=new b("MatPrefix"),Kf=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[ue([{provide:lS,useExisting:n}])]})}return n})(),cS=new b("MatSuffix"),Hl=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ue([{provide:cS,useExisting:n}])]})}return n})(),dS=new b("FloatingLabelParent"),tS=(()=>{class n{_elementRef=s(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Wd);_ngZone=s(Z);_parent=s(dS);_resizeSubscription=new Se;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _k(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&B("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function _k(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var nS="mdc-line-ripple--active",Fu="mdc-line-ripple--deactivating",iS=(()=>{class n{_elementRef=s(j);_cleanupTransitionEnd;constructor(){let e=s(Z),t=s(Le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Fu),e.add(nS)}deactivate(){this._elementRef.nativeElement.classList.add(Fu)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Fu);e.propertyName==="opacity"&&r&&t.remove(nS,Fu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),rS=(()=>{class n{_elementRef=s(j);_ngZone=s(Z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Be(KR,5),t&2){let a;z(a=U())&&(r._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&B("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:XR,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Me(),dn(0,"div",1),$e(1,"div",2,0),ee(3),Ye(),dn(4,"div",3))},encapsulation:2})}return n})(),Oo=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n})}return n})();var cr=new b("MatFormField"),bk=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),aS="fill",vk="auto",oS="fixed",yk="translateY(-50%)",Qt=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(he);_platform=s(ge);_idGenerator=s(ze);_ngZone=s(Z);_defaults=s(bk,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Yn("iconPrefixContainer");_textPrefixContainerSignal=Yn("textPrefixContainer");_iconSuffixContainerSignal=Yn("iconSuffixContainer");_textSuffixContainerSignal=Yn("textSuffixContainer");_prefixSuffixContainers=wt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=h_(jt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Pn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||vk}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||aS;this._appearanceSignal.set(t)}_appearanceSignal=ne(aS);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||oS}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||oS}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new S;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ne();constructor(){let e=this._defaults,t=s(Je);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),St(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=wt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ze([void 0,void 0]),x(()=>[t.errorState,t.userAriaDescribedBy]),gh(),me(([[a,o],[l,c]])=>a!==l||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(G(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Pe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Eh({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=wt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,r;if(t){let a=this._describedByIds||e;r=e.concat(t.filter(o=>o&&!a.includes(o)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,m=a?.getBoundingClientRect().width??0,p=this._currentDirection==="rtl"?"-1":"1",_=`${o+l}px`,P=`calc(${p} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,H=`var(--mat-mdc-form-field-label-transform, ${yk} translateX(${P}))`,q=o+l+c+m;return[H,q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,a){if(t&1&&(c_(a,r._labelChild,jt,5),Dt(a,Oo,5)(a,lS,5)(a,cS,5)(a,sS,5)(a,lr,5)),t&2){Wi();let o;z(o=U())&&(r._formFieldControl=o.first),z(o=U())&&(r._prefixChildren=o),z(o=U())&&(r._suffixChildren=o),z(o=U())&&(r._errorChildren=o),z(o=U())&&(r._hintChildren=o)}},viewQuery:function(t,r){if(t&1&&(hr(r._iconPrefixContainerSignal,Z0,5)(r._textPrefixContainerSignal,Q0,5)(r._iconSuffixContainerSignal,J0,5)(r._textSuffixContainerSignal,eS,5),Be(ZR,5)(Z0,5)(Q0,5)(J0,5)(eS,5)(tS,5)(rS,5)(iS,5)),t&2){Wi(4);let a;z(a=U())&&(r._textField=a.first),z(a=U())&&(r._iconPrefixContainer=a.first),z(a=U())&&(r._textPrefixContainer=a.first),z(a=U())&&(r._iconSuffixContainer=a.first),z(a=U())&&(r._textSuffixContainer=a.first),z(a=U())&&(r._floatingLabel=a.first),z(a=U())&&(r._notchedOutline=a.first),z(a=U())&&(r._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&B("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ue([{provide:cr,useExisting:n},{provide:dS,useExisting:n}])],ngContentSelectors:JR,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Me(QR),re(0,nk,1,1,"ng-template",null,0,wc),d(2,"div",6,1),w("click",function(o){return r._control.onContainerClick(o)}),T(4,ik,1,0,"div",7),d(5,"div",8),T(6,ok,2,2,"div",9),T(7,sk,3,0,"div",10),T(8,lk,3,0,"div",11),d(9,"div",12),T(10,dk,1,1,null,13),ee(11),u(),T(12,uk,3,0,"div",14),T(13,mk,3,0,"div",15),u(),T(14,hk,1,0,"div",16),u(),d(15,"div",17),T(16,pk,2,0,"div",18)(17,gk,5,1,"div",19),u()),t&2){let a;h(2),B("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),I(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),I(r._hasOutline()?6:-1),h(),I(r._hasIconPrefix?7:-1),h(),I(r._hasTextPrefix?8:-1),h(2),I(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),I(r._hasTextSuffix?12:-1),h(),I(r._hasIconSuffix?13:-1),h(),I(r._hasOutline()?-1:14),h(),B("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let o=r._getSubscriptMessageType();h(),I((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[tS,rS,xs,iS,lr],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[Md,Qt,le]})}return n})();var Sk=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),Ck={passive:!0},uS=(()=>{class n{_platform=s(ge);_ngZone=s(Z);_renderer=s(Pt).createRenderer(null,null);_styleLoader=s(Qe);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return vt;this._styleLoader.load(Sk);let t=tn(e),r=this._monitoredElements.get(t);if(r)return r.subject;let a=new S,o="cdk-text-field-autofilled",l=m=>{m.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!0}))):m.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Ck)));return this._monitoredElements.set(t,{subject:a,unlisten:c}),a}stopMonitoring(e){let t=tn(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})();var mS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({})}return n})();var Pu=new b("");var Lu=new b("MAT_INPUT_VALUE_ACCESSOR");var Dk=["button","checkbox","file","hidden","image","radio","range","reset","submit"],wk=new b("MAT_INPUT_CONFIG"),zi=(()=>{class n{_elementRef=s(j);_platform=s(ge);ngControl=s(Mn,{optional:!0,self:!0});_autofillMonitor=s(uS);_ngZone=s(Z);_formField=s(cr,{optional:!0});_renderer=s(Le);_uid=s(ze).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(wk,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new S;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Pn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(xe.required)??!1}set required(e){this._required=Pn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Bp().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Pn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Bp().has(e));constructor(){let e=s(To,{optional:!0}),t=s(Zt,{optional:!0}),r=s(vd),a=s(Lu,{optional:!0,self:!0}),o=s(Pu,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();a?ui(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new uo(r,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&St(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Dk.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&w("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(pt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),J("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),B("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},exportAs:["matInput"],features:[ue([{provide:Oo,useExisting:n}]),ke]})}return n})(),Ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[xt,xt,mS,le]})}return n})();function Mk(n,i){return this._trackRow(i)}var vS=(n,i)=>i.id;function xk(n,i){if(n&1&&($e(0,"tr",0)(1,"td",3),f(2),Ye()()),n&2){let e=L();h(),vn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),J("colspan",e.numCols),h(),De(" ",e.label," ")}}function Ek(n,i){if(n&1&&($e(0,"td",3),f(1),Ye()),n&2){let e=L(2);vn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),J("colspan",e._firstRowOffset),h(),De(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Ak(n,i){if(n&1){let e=et();$e(0,"td",6)(1,"button",7),Fa("click",function(r){let a=pe(e).$implicit,o=L(2);return fe(o._cellClicked(a,r))})("focus",function(r){let a=pe(e).$implicit,o=L(2);return fe(o._emitActiveDateChange(a,r))}),$e(2,"span",8),f(3),Ye(),dn(4,"span",9),Ye()()}if(n&2){let e=i.$implicit,t=i.$index,r=L().$index,a=L();vn("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),J("data-mat-row",r)("data-mat-col",t),h(),lt(e.cssClasses),B("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(r,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,r,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,r,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),pt("tabIndex",a._isActiveCell(r,t)?0:-1),J("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),h(),B("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),h(),De(" ",e.displayValue," ")}}function Rk(n,i){if(n&1&&($e(0,"tr",1),T(1,Ek,2,6,"td",4),kt(2,Ak,5,49,"td",5,vS),Ye()),n&2){let e=i.$implicit,t=i.$index,r=L();h(),I(t===0&&r._firstRowOffset?1:-1),h(),Nt(e)}}function kk(n,i){if(n&1&&(d(0,"th",2)(1,"span",6),f(2),u(),d(3,"span",3),f(4),u()()),n&2){let e=i.$implicit;h(2),Ve(e.long),h(2),Ve(e.narrow)}}var Nk=["*"];function Tk(n,i){}function Ik(n,i){if(n&1){let e=et();d(0,"mat-month-view",4),Ba("activeDateChange",function(r){pe(e);let a=L();return La(a.activeDate,r)||(a.activeDate=r),fe(r)}),w("_userSelection",function(r){pe(e);let a=L();return fe(a._dateSelected(r))})("dragStarted",function(r){pe(e);let a=L();return fe(a._dragStarted(r))})("dragEnded",function(r){pe(e);let a=L();return fe(a._dragEnded(r))}),u()}if(n&2){let e=L();Pa("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Ok(n,i){if(n&1){let e=et();d(0,"mat-year-view",5),Ba("activeDateChange",function(r){pe(e);let a=L();return La(a.activeDate,r)||(a.activeDate=r),fe(r)}),w("monthSelected",function(r){pe(e);let a=L();return fe(a._monthSelectedInYearView(r))})("selectedChange",function(r){pe(e);let a=L();return fe(a._goToDateInView(r,"month"))}),u()}if(n&2){let e=L();Pa("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Fk(n,i){if(n&1){let e=et();d(0,"mat-multi-year-view",6),Ba("activeDateChange",function(r){pe(e);let a=L();return La(a.activeDate,r)||(a.activeDate=r),fe(r)}),w("yearSelected",function(r){pe(e);let a=L();return fe(a._yearSelectedInMultiYearView(r))})("selectedChange",function(r){pe(e);let a=L();return fe(a._goToDateInView(r,"year"))}),u()}if(n&2){let e=L();Pa("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Pk(n,i){}var Lk=["button"],Bk=[[["","matDatepickerToggleIcon",""]]],Vk=["[matDatepickerToggleIcon]"];function jk(n,i){n&1&&(Ut(),d(0,"svg",2),F(1,"path",3),u())}var Lo=(()=>{class n{changes=new S;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=K({token:n,factory:n.\u0275fac})}return n})(),zk=0,Wl=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=zk++;cssClasses;constructor(i,e,t,r,a,o=i,l){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=r,this.compareValue=o,this.rawValue=l,this.cssClasses=a instanceof Set?Array.from(a):a}},Uk={passive:!1,capture:!0},Bu={passive:!0,capture:!0},hS={passive:!0},Po=(()=>{class n{_elementRef=s(j);_ngZone=s(Z);_platform=s(ge);_intl=s(Lo);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new R;previewChange=new R;activeDateChange=new R;dragStarted=new R;dragEnded=new R;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(Q);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Le),t=s(ze);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(Qe).load(pn),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,a=[e.listen(r,"touchmove",this._touchmoveHandler,Uk),e.listen(r,"mouseenter",this._enterHandler,Bu),e.listen(r,"focus",this._enterHandler,Bu),e.listen(r,"mouseleave",this._leaveHandler,Bu),e.listen(r,"blur",this._leaveHandler,Bu),e.listen(r,"mousedown",this._mousedownHandler,hS),e.listen(r,"touchstart",this._mousedownHandler,hS)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:r,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=r&&r.length&&r[0].length?a-r[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let r=e*this.numCols+t;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){He(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Qf(e,this.startValue,this.endValue)}_isRangeEnd(e){return Jf(e,this.startValue,this.endValue)}_isInRange(e){return eg(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Qf(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][r-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][r+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return Jf(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return eg(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Qf(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Jf(e,this.previewStart,this.previewEnd)}_isInPreview(e){return eg(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=pS(e),r=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Zf(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Zf(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(t);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=pS(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Zf(e);if(t){let r=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(r&&a)return this.rows[parseInt(r)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[ke],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,r){t&1&&(T(0,xk,3,6,"tr",0),kt(1,Rk,4,1,"tr",1,Mk,!0),$e(3,"span",2),f(4),Ye(),$e(5,"span",2),f(6),Ye(),$e(7,"span",2),f(8),Ye(),$e(9,"span",2),f(10),Ye()),t&2&&(I(r._firstRowOffset<r.labelMinRequiredCells?0:-1),h(),Nt(r.rows),h(2),pt("id",r._startDateLabelId),h(),De(" ",r.startDateAccessibleName,`
`),h(),pt("id",r._endDateLabelId),h(),De(" ",r.endDateAccessibleName,`
`),h(),pt("id",r._comparisonStartDateLabelId),h(),Yi(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),h(),pt("id",r._comparisonEndDateLabelId),h(),Yi(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
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
`],encapsulation:2})}return n})();function Xf(n){return n?.nodeName==="TD"}function Zf(n){let i;return Xf(n)?i=n:Xf(n.parentNode)?i=n.parentNode:Xf(n.parentNode?.parentNode)&&(i=n.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function Qf(n,i,e){return e!==null&&i!==e&&n<e&&n===i}function Jf(n,i,e){return i!==null&&i!==e&&n>=i&&n===e}function eg(n,i,e,t){return t&&i!==null&&e!==null&&i!==e&&n>=i&&n<=e}function pS(n){let i=n.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var $n=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Yl=(()=>{class n{selection;_adapter;_selectionChanged=new S;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Jr()};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),Hk=(()=>{class n extends Yl{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)($(Ot))};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})();var yS={provide:Yl,useFactory:()=>s(Yl,{optional:!0,skipSelf:!0})||new Hk(s(Ot))};var SS=new b("MAT_DATE_RANGE_SELECTION_STRATEGY");var tg=7,$k=0,fS=(()=>{class n{_changeDetectorRef=s(he);_dateFormats=s(_i,{optional:!0});_dateAdapter=s(Ot,{optional:!0});_dir=s(Je,{optional:!0});_rangeStrategy=s(SS,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof $n?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new R;_userSelection=new R;dragStarted=new R;dragEnded=new R;activeDateChange=new R;_matCalendarBody;_monthLabel=ne("");_weeks=ne([]);_firstWeekOffset=ne(0);_rangeStart=ne(null);_rangeEnd=ne(null);_comparisonRangeStart=ne(null);_comparisonRangeEnd=ne(null);_previewStart=ne(null);_previewEnd=ne(null);_isRange=ne(!1);_todayDate=ne(null);_weekdays=ne([]);constructor(){s(Qe).load(bi),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ze(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,r=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof $n?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Xe(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((tg+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%tg),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let r=t?t.rawValue:null,a=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&r){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:$k++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),r=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==tg&&(r.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),c=this._shouldEnableDate(l),m=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),p=this.dateClass?this.dateClass(l,"month"):void 0;r[r.length-1].push(new Wl(a+1,t[a],m,c,p,this._getCellCompareValue(l),l))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,r,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof $n?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,r){if(t&1&&Be(Po,5),t&2){let a;z(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[ke],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),kt(3,kk,5,2,"th",2,vS),u(),d(5,"tr",3),F(6,"th",4),u()(),d(7,"tbody",5),w("selectedValueChange",function(o){return r._dateSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("previewChange",function(o){return r._previewChanged(o)})("dragStarted",function(o){return r.dragStarted.emit(o)})("dragEnded",function(o){return r._dragEnded(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(3),Nt(r._weekdays()),h(4),A("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Po],encapsulation:2})}return n})(),xn=24,ng=4,gS=(()=>{class n{_changeDetectorRef=s(he);_dateAdapter=s(Ot,{optional:!0});_dir=s(Je,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),CS(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof $n?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;yearSelected=new R;activeDateChange=new R;_matCalendarBody;_years=ne([]);_todayYear=ne(0);_selectedYear=ne(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ze(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Gl(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let a=0,o=[];a<xn;a++)o.push(t+a),o.length==ng&&(r.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,r=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(r),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ng);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ng);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Gl(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,xn-Gl(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-xn*10:-xn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?xn*10:xn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Gl(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Wl(e,r,r,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let r=t;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof $n){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,r){if(t&1&&Be(Po,5),t&2){let a;z(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),F(3,"th",2),u()(),d(4,"tbody",3),w("selectedValueChange",function(o){return r._yearSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(4),A("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Po],encapsulation:2})}return n})();function CS(n,i,e,t,r){let a=n.getYear(i),o=n.getYear(e),l=DS(n,t,r);return Math.floor((a-l)/xn)===Math.floor((o-l)/xn)}function Gl(n,i,e,t){let r=n.getYear(i);return Gk(r-DS(n,e,t),xn)}function DS(n,i,e){let t=0;return e?t=n.getYear(e)-xn+1:i&&(t=n.getYear(i)),t}function Gk(n,i){return(n%i+i)%i}var _S=(()=>{class n{_changeDetectorRef=s(he);_dateFormats=s(_i,{optional:!0});_dateAdapter=s(Ot,{optional:!0});_dir=s(Je,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof $n?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;monthSelected=new R;activeDateChange=new R;_matCalendarBody;_months=ne([]);_yearLabel=ne("");_todayMonth=ne(null);_selectedMonth=ne(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ze(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(r);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,t){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(r,"year"):void 0;return new Wl(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(t,e,1);for(let a=r;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof $n?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,r){if(t&1&&Be(Po,5),t&2){let a;z(a=U())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),F(3,"th",2),u()(),d(4,"tbody",3),w("selectedValueChange",function(o){return r._monthSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(h(4),A("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Po],encapsulation:2})}return n})(),wS=(()=>{class n{_intl=s(Lo);calendar=s(ig);_dateAdapter=s(Ot,{optional:!0});_dateFormats=s(_i,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(Qe).load(bi);let e=s(he);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-xn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:xn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):CS(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Gl(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=t+xn-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[a,o]}_periodButtonLabelId=s(ze).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Nk,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,r){t&1&&(Me(),d(0,"div",0)(1,"div",1)(2,"span",2),f(3),u(),d(4,"button",3),w("click",function(){return r.currentPeriodClicked()}),d(5,"span",4),f(6),u(),Ut(),d(7,"svg",5),F(8,"polygon",6),u()(),gs(),F(9,"div",7),ee(10),d(11,"button",8),w("click",function(){return r.previousClicked()}),Ut(),d(12,"svg",9),F(13,"path",10),u()(),gs(),d(14,"button",11),w("click",function(){return r.nextClicked()}),Ut(),d(15,"svg",9),F(16,"path",12),u()()()()),t&2&&(h(2),A("id",r._periodButtonLabelId),h(),Ve(r.periodButtonDescription),h(),J("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),h(2),Ve(r.periodButtonText),h(),B("mat-calendar-invert",r.calendar.currentView!=="month"),h(4),A("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),J("aria-label",r.prevButtonLabel),h(3),A("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),J("aria-label",r.nextButtonLabel))},dependencies:[ft,_n,ni],encapsulation:2})}return n})(),ig=(()=>{class n{_dateAdapter=s(Ot,{optional:!0});_dateFormats=s(_i,{optional:!0});_changeDetectorRef=s(he);_elementRef=s(j);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof $n?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new R;yearSelected=new R;monthSelected=new R;viewChanged=new R(!0);_userSelection=new R;_userDragDrop=new R;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new S;constructor(){this._intlChanges=s(Lo).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new fn(this.headerComponent||wS),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||r||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Fn())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof $n||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,r){if(t&1&&Be(fS,5)(_S,5)(gS,5),t&2){let a;z(a=U())&&(r.monthView=a.first),z(a=U())&&(r.yearView=a.first),z(a=U())&&(r.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ue([yS]),ke],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,r){if(t&1&&(re(0,Tk,0,0,"ng-template",0),d(1,"div",1),T(2,Ik,1,11,"mat-month-view",2)(3,Ok,1,6,"mat-year-view",3)(4,Fk,1,6,"mat-multi-year-view",3),u()),t&2){let a;A("cdkPortalOutlet",r._calendarHeaderPortal),h(2),I((a=r.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[gn,rl,fS,_S,gS],styles:[`.mat-calendar {
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
`],encapsulation:2})}return n})(),Wk=new b("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n)}}),MS=(()=>{class n{_elementRef=s(j);_animationsDisabled=Ne();_changeDetectorRef=s(he);_globalModel=s(Yl);_dateAdapter=s(Ot);_ngZone=s(Z);_rangeSelectionStrategy=s(SS,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new S;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(Qe).load(bi),this._closeButtonText=s(Lo).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(Le);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,r=e.value,a=t instanceof $n;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(r,t,e.event);this._model.updateSelection(o,this)}else r&&(a||!this._dateAdapter.sameDate(r,t))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,r){if(t&1&&Be(ig,5),t&2){let a;z(a=U())&&(r._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,r){t&2&&(lt(r.color?"mat-"+r.color:""),B("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,r){t&1&&(d(0,"div",0)(1,"mat-calendar",1),w("yearSelected",function(o){return r.datepicker._selectYear(o)})("monthSelected",function(o){return r.datepicker._selectMonth(o)})("viewChanged",function(o){return r.datepicker._viewChanged(o)})("_userSelection",function(o){return r._handleUserSelection(o)})("_userDragDrop",function(o){return r._handleUserDragDrop(o)}),u(),re(2,Pk,0,0,"ng-template",2),d(3,"button",3),w("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),f(4),u()()),t&2&&(B("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),J("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),h(),lt(r.datepicker.panelClass),A("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),h(),A("cdkPortalOutlet",r._actionsPortal),h(),B("cdk-visually-hidden",!r._closeButtonFocused),A("color",r.color||"primary"),h(),Ve(r._closeButtonText))},dependencies:[Op,ig,gn,ft],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return n})(),bS=(()=>{class n{_injector=s(Q);_viewContainerRef=s(st);_dateAdapter=s(Ot,{optional:!0});_dir=s(Je,{optional:!0});_model=s(Yl);_animationsDisabled=Ne();_scrollStrategy=s(Wk);_inputStateChanges=Se.EMPTY;_document=s(te);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new R;monthSelected=new R;viewChanged=new R(!0);dateClass;openedStream=new R;closedStream=new R;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Iv(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(ze).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new S;_changeDetectorRef=s(he);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;r instanceof go&&(this._setConnectedPositions(r),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Fn(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:r,location:a}=this._componentRef;r._animationDone.pipe(Ie(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),r._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new fn(MS,this._viewContainerRef),r=this._overlayRef=on(this._injector,new rn({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Dr(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(r).subscribe(a=>{a&&a.preventDefault(),this.close()}),r.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=r.attach(t),this._forwardContentValues(this._componentRef.instance),e||He(()=>{r.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Mi(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=ei(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",r=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a},{originX:r,originY:a,overlayX:r,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Pe(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(me(r=>r.keyCode===27&&!Xe(r)||this.datepickerInput&&Xe(r,"altKey")&&r.keyCode===38&&t.every(a=>!Xe(r,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",k],disabled:[2,"disabled","disabled",k],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",k],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",k]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[ke]})}return n})(),Vu=(()=>{class n extends bS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[ue([yS,{provide:bS,useExisting:n}]),ie],decls:0,vars:0,template:function(t,r){},encapsulation:2})}return n})(),Fo=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},Yk=(()=>{class n{_elementRef=s(j);_dateAdapter=s(Ot,{optional:!0});_dateFormats=s(_i,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,r=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&r.blur&&r.blur()}_disabled;dateChange=new R;dateInput=new R;stateChanges=new S;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Se.EMPTY;_localeSubscription=Se.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMinDate();return!r||!t||this._dateAdapter.compareDate(r,t)<=0?null:{matDatepickerMin:{min:r,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMaxDate();return!r||!t||this._dateAdapter.compareDate(r,t)>=0?null:{matDatepickerMax:{max:r,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let r=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(r),this._cvaOnChange(r),this._onTouched(),this._formatValue(r),this.dateInput.emit(new Fo(this,this._elementRef.nativeElement)),this.dateChange.emit(new Fo(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){qk(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];Xe(e,"altKey")&&e.keyCode===40&&t.every(a=>!Xe(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,r=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),r!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new Fo(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Fo(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",k]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[ke]})}return n})();function qk(n,i){let e=Object.keys(n);for(let t of e){let{previousValue:r,currentValue:a}=n[t];if(i.isDateInstance(r)&&i.isDateInstance(a)){if(!i.sameDate(r,a))return!0}else return!0}return!1}var Kk={provide:Pi,useExisting:At(()=>Bo),multi:!0},Xk={provide:ai,useExisting:At(()=>Bo),multi:!0},Bo=(()=>{class n extends Yk{_formField=s(cr,{optional:!0});_closedSubscription=Se.EMPTY;_openedSubscription=Se.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=ne(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=xe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,r){t&1&&w("input",function(o){return r._onInput(o)})("change",function(){return r._onChange()})("blur",function(){return r._onBlur()})("keydown",function(o){return r._onKeydown(o)}),t&2&&(pt("disabled",r.disabled),J("aria-haspopup",r._datepicker?"dialog":null)("aria-owns",r._ariaOwns())("min",r.min?r._dateAdapter.toIso8601(r.min):null)("max",r.max?r._dateAdapter.toIso8601(r.max):null)("data-mat-calendar",r._datepicker?r._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[ue([Kk,Xk,{provide:Lu,useExisting:n}]),ie]})}return n})(),Zk=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),ql=(()=>{class n{_intl=s(Lo);_changeDetectorRef=s(he);_stateChanges=Se.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new Rn("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:D(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:D(),r=this.datepicker?Pe(this.datepicker.openedStream,this.datepicker.closedStream):D();this._stateChanges.unsubscribe(),this._stateChanges=Pe(this._intl.changes,e,t,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,Zk,5),t&2){let o;z(o=U())&&(r._customIcon=o.first)}},viewQuery:function(t,r){if(t&1&&Be(Lk,5),t&2){let a;z(a=U())&&(r._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,r){t&1&&w("click",function(o){return r._open(o)}),t&2&&(J("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),B("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",k],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[ke],ngContentSelectors:Vk,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,r){t&1&&(Me(Bk),d(0,"button",1,0),T(2,jk,2,0,":svg:svg",2),ee(3),u()),t&2&&(A("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),J("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),h(2),I(r._customIcon?-1:2))},dependencies:[_n],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return n})();var ju=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({providers:[Lo],imports:[ht,Vt,tr,Qn,MS,ql,wS,le,Dn]})}return n})();function Qk(n,i){n&1&&(d(0,"mat-error"),f(1,"Name ist erforderlich"),u())}function Jk(n,i){n&1&&(d(0,"mat-error"),f(1,"Datum ist erforderlich"),u())}var Kl=class n{fb=s(Vi);dialogRef=s(jn);data=s(ar);form;constructor(){let i=this.data?.date||"";if(i&&typeof i=="string"){let e=i.split("-");e.length===3&&(i=new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])))}this.form=this.fb.group({name:[this.data?.name||"",xe.required],date:[i,xe.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,date:this.formatDate(i.date)};this.dialogRef.close(e)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-race-dialog"]],decls:24,vars:7,consts:[["picker",""],["mat-dialog-title",""],[1,"race-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["matInput","","formControlName","date","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),f(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),f(6,"Name"),u(),F(7,"input",4),rt(),T(8,Qk,2,0,"mat-error"),u(),d(9,"mat-form-field",3)(10,"mat-label"),f(11,"Datum"),u(),F(12,"input",5),rt(),F(13,"mat-datepicker-toggle",6)(14,"mat-datepicker",null,0),d(16,"mat-hint"),f(17,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),u(),T(18,Jk,2,0,"mat-error"),u()()(),d(19,"mat-dialog-actions",7)(20,"button",8),w("click",function(){return t.onCancel()}),f(21,"Abbrechen"),u(),d(22,"button",9),w("click",function(){return t.onSave()}),f(23," Speichern "),u()()),e&2){let r=mt(15);h(),De(" ",t.data?"Rennen bearbeiten":"Neues Rennen"," "),h(2),A("formGroup",t.form),h(4),at(),h(),I(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?8:-1),h(4),A("matDatepicker",r),at(),h(),A("for",r),h(5),I(t.form.get("date")?.hasError("required")&&t.form.get("date")?.touched?18:-1),h(4),A("disabled",!t.form.valid)}},dependencies:[gt,ji,Bi,zn,Hn,Li,Un,Zt,oi,Kt,Br,jr,Vr,xt,Qt,jt,lr,si,Hl,Ui,zi,ht,ft,ju,Vu,Bo,ql,Vd],styles:[".race-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function eN(n,i){n&1&&(d(0,"div",3),F(1,"mat-spinner"),u())}function tN(n,i){n&1&&(d(0,"th",14),f(1,"ID"),u())}function nN(n,i){if(n&1&&(d(0,"td",15),f(1),u()),n&2){let e=i.$implicit;h(),Ve(e.id)}}function iN(n,i){n&1&&(d(0,"th",14),f(1,"Name"),u())}function rN(n,i){if(n&1&&(d(0,"td",15),f(1),u()),n&2){let e=i.$implicit;h(),Ve(e.name)}}function aN(n,i){n&1&&(d(0,"th",14),f(1,"Datum"),u())}function oN(n,i){if(n&1&&(d(0,"td",15),f(1),Re(2,"date"),u()),n&2){let e=i.$implicit;h(),De(" ",na(2,1,e.date,"dd.MM.yyyy")," ")}}function sN(n,i){n&1&&(d(0,"th",16),f(1,"Aktionen"),u())}function lN(n,i){if(n&1){let e=et();d(0,"td",15)(1,"button",17),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.openEditDialog(r))}),d(2,"mat-icon"),f(3,"edit"),u()(),d(4,"button",18),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.deleteRace(r))}),d(5,"mat-icon"),f(6,"delete"),u()()()}}function cN(n,i){n&1&&F(0,"tr",19)}function dN(n,i){n&1&&F(0,"tr",20)}var zu=class n{store=s(ot);dialog=s(Ri);snackBar=s(or);destroy$=new S;races$;loading$;displayedColumns=["id","name","date","actions"];dataSource=new Mr([]);sortInitialized=!1;sort=Yn.required(Xt);constructor(){this.races$=this.store.select(sr),this.loading$=this.store.select(f0),St(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(G(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(ii()),this.races$.pipe(G(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(Kl,{width:"500px"}).afterClosed().pipe(G(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(wo({race:e})),this.snackBar.open("Rennen erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(Kl,{width:"500px",data:i}).afterClosed().pipe(G(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(Mo({id:i.id,race:t})),this.snackBar.open("Rennen erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteRace(i){confirm(`M\xF6chten Sie das Rennen "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(xo({id:i.id})),this.snackBar.open("Rennen erfolgreich gel\xF6scht","OK",{duration:3e3}))}refreshData(){this.store.dispatch(ii()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-race-list"]],viewQuery:function(e,t){e&1&&hr(t.sort,Xt,5),e&2&&Wi()},decls:32,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"race-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","date"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),f(3,"Rennen"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"button",1),w("click",function(){return t.openCreateDialog()}),d(7,"mat-icon"),f(8,"add"),u(),f(9," Neues Rennen "),u(),d(10,"button",2),w("click",function(){return t.refreshData()}),d(11,"mat-icon"),f(12,"refresh"),u(),f(13," Aktualisieren "),u()(),T(14,eN,2,0,"div",3),Re(15,"async"),d(16,"table",4),Re(17,"async"),Ge(18,5),re(19,tN,2,0,"th",6)(20,nN,2,1,"td",7),We(),Ge(21,8),re(22,iN,2,0,"th",6)(23,rN,2,1,"td",7),We(),Ge(24,9),re(25,aN,2,0,"th",6)(26,oN,3,4,"td",7),We(),Ge(27,10),re(28,sN,2,0,"th",11)(29,lN,7,0,"td",7),We(),re(30,cN,1,0,"tr",12)(31,dN,1,0,"tr",13),u()()()),e&2&&(h(14),I(je(15,6,t.loading$)?14:-1),h(2),B("hidden",je(17,8,t.loading$)),A("dataSource",t.dataSource),h(14),A("matHeaderRowDef",t.displayedColumns),h(),A("matRowDefColumns",t.displayedColumns))},dependencies:[gt,Pr,xr,Ar,Tr,Rr,Er,Ir,kr,Nr,Or,Fr,ht,ft,_n,Vn,Bn,Ai,Ei,Kt,zr,Oi,ki,Ti,Ii,Ni,Ur,ni,Do,Xt,Co,Lt,ia],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.race-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var uN=["trigger"],mN=["panel"],hN=[[["mat-select-trigger"]],"*"],pN=["mat-select-trigger","*"];function fN(n,i){if(n&1&&(d(0,"span",4),f(1),u()),n&2){let e=L();h(),Ve(e.placeholder)}}function gN(n,i){n&1&&ee(0)}function _N(n,i){if(n&1&&(d(0,"span",11),f(1),u()),n&2){let e=L(2);h(),Ve(e.triggerValue)}}function bN(n,i){if(n&1&&(d(0,"span",5),T(1,gN,1,0)(2,_N,2,1,"span",11),u()),n&2){let e=L();h(),I(e.customTrigger?1:2)}}function vN(n,i){if(n&1){let e=et();d(0,"div",12,1),w("keydown",function(r){pe(e);let a=L();return fe(a._handleKeydown(r))}),ee(2,1),u()}if(n&2){let e=L();lt(e.panelClass),B("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),J("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var yN=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n)}}),SN=new b("MAT_SELECT_CONFIG"),CN=new b("MatSelectTrigger"),rg=class{source;value;constructor(i,e){this.source=i,this.value=e}},$r=(()=>{class n{_viewportRuler=s(nn);_changeDetectorRef=s(he);_elementRef=s(j);_dir=s(Je,{optional:!0});_idGenerator=s(ze);_renderer=s(Le);_parentFormField=s(cr,{optional:!0});ngControl=s(Mn,{self:!0,optional:!0});_liveAnnouncer=s(al);_defaultOptions=s(SN,{optional:!0});_animationsDisabled=Ne();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,a=Pd(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Ld(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new rg(this,e)}_scrollStrategyFactory=s(yN);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(xe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=En(()=>{let e=this.options;return e?e.changes.pipe(Ze(e),Oe(()=>Pe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Oe(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(me(e=>e),x(()=>{}));_closedStream=this.openedChange.pipe(me(e=>!e),x(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=s(vd),t=s(To,{optional:!0}),r=s(Zt,{optional:!0}),a=s(new Rn("tabindex"),{optional:!0}),o=s(Ml,{optional:!0}),l=s(Pu,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new uo(e,l||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Al(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(G(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(G(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ze(null),G(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ie(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!Xe(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,a=r===40||r===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&t.activeItem&&!Xe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Xe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof _o?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new pa(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(G(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pe(...this.options.map(t=>t._stateChanges)).pipe(G(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Mt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,CN,5)(a,qt,5)(a,hl,5),t&2){let o;z(o=U())&&(r.customTrigger=o.first),z(o=U())&&(r.options=o),z(o=U())&&(r.optionGroups=o)}},viewQuery:function(t,r){if(t&1&&Be(uN,5)(mN,5)(tu,5),t&2){let a;z(a=U())&&(r.trigger=a.first),z(a=U())&&(r.panel=a.first),z(a=U())&&(r._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&w("keydown",function(o){return r._handleKeydown(o)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(J("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),B("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ht(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k],placeholder:"placeholder",required:[2,"required","required",k],multiple:[2,"multiple","multiple",k],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",k],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ht],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",k]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:Oo,useExisting:n},{provide:ml,useExisting:n}]),ke],ngContentSelectors:pN,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Me(hN),d(0,"div",2,0),w("click",function(){return r.open()}),d(3,"div",3),T(4,fN,2,1,"span",4)(5,bN,3,1,"span",5),u(),d(6,"div",6)(7,"div",7),Ut(),d(8,"svg",8),F(9,"path",9),u()()()(),re(10,vN,3,16,"ng-template",10),w("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(o){return r._handleOverlayKeydown(o)})),t&2){let a=mt(1);h(3),J("id",r._valueId),h(),I(r.empty?4:5),h(6),A("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[_o,tu],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var $i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[Vt,co,le,Dn,xt,co]})}return n})();var ES=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Pn(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Pn(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(J("aria-orientation",r.vertical?"vertical":"horizontal"),B("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
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
`],encapsulation:2})}return n})(),Uu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[le]})}return n})();var li={MALE:"M\xE4nnlich",FEMALE:"Weiblich",BOTH:"Beide"};var ci=M("[Participant] Load Participants"),Hu=M("[Participant] Load Participants Success",O()),$u=M("[Participant] Load Participants Failure",O()),Gu=M("[Participant] Load Participant",O()),Wu=M("[Participant] Load Participant Success",O()),Yu=M("[Participant] Load Participant Failure",O()),Vo=M("[Participant] Create Participant",O()),qu=M("[Participant] Create Participant Success",O()),Ku=M("[Participant] Create Participant Failure",O()),jo=M("[Participant] Update Participant",O()),Xu=M("[Participant] Update Participant Success",O()),Zu=M("[Participant] Update Participant Failure",O()),zo=M("[Participant] Delete Participant",O()),Qu=M("[Participant] Delete Participant Success",O()),Ju=M("[Participant] Delete Participant Failure",O()),Uo=M("[Participant] Delete Participants By Race Id",O()),em=M("[Participant] Delete Participants By Race Id Success",O()),tm=M("[Participant] Delete Participants By Race Id Failure",O()),AS=M("[Participant] Select Participant",O()),Ho=M("[Participant] Export All PDF",O()),Zl=M("[Participant] Export All PDF Success",O()),nm=M("[Participant] Export All PDF Failure",O()),$o=M("[Participant] Export By Gender PDF",O()),Ql=M("[Participant] Export By Gender PDF Success",O()),im=M("[Participant] Export By Gender PDF Failure",O()),Go=M("[Participant] Export All Age Groups PDF",O()),Jl=M("[Participant] Export All Age Groups PDF Success",O()),rm=M("[Participant] Export All Age Groups PDF Failure",O());var tc=Ci("participant"),Wo=Fe(tc,n=>n.participants),RS=Fe(tc,n=>n.loading),kS=Fe(tc,n=>n.pdfExportLoading),G8=Fe(tc,n=>n.error),wN=Fe(tc,n=>n.selectedParticipantId),W8=Fe(Wo,wN,(n,i)=>i?n.find(e=>e.id===i):null);var am=Fe(Wo,ri,(n,i)=>i?n.filter(e=>e.race?.id===i):n);var xN=(n,i)=>i.value,EN=(n,i)=>i.id;function AN(n,i){n&1&&(d(0,"mat-error"),f(1,"Vorname ist erforderlich"),u())}function RN(n,i){n&1&&(d(0,"mat-error"),f(1,"Nachname ist erforderlich"),u())}function kN(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsdatum ist erforderlich"),u())}function NN(n,i){if(n&1&&(d(0,"mat-option",9),f(1),u()),n&2){let e=i.$implicit;A("value",e.value),h(),Ve(e.label)}}function TN(n,i){n&1&&(d(0,"mat-error"),f(1,"Geschlecht ist erforderlich"),u())}function IN(n,i){if(n&1&&(d(0,"mat-option",9),f(1),u()),n&2){let e=i.$implicit,t=L();A("value",e.id),h(),Yi("",e.name," (",t.formatRaceDate(e.date),")")}}function ON(n,i){n&1&&(d(0,"mat-error"),f(1,"Rennen ist erforderlich"),u())}function FN(n,i){n&1&&(d(0,"mat-error"),f(1,"Startnummer ist erforderlich"),u())}var nc=class n{fb=s(Vi);dialogRef=s(jn);data=s(ar);store=s(ot);destroy$=new S;form;genderOptions=[{value:"MALE",label:li.MALE},{value:"FEMALE",label:li.FEMALE}];races$=this.store.select(sr);selectedRaceId$=this.store.select(ri);constructor(){let i=this.data?.birthDate||"";if(i&&typeof i=="string"){let e=i.split("-");e.length===3&&(i=new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||"",xe.required],lastName:[this.data?.lastName||"",xe.required],birthDate:[i,xe.required],gender:[this.data?.gender||"",xe.required],race:[this.data?.race?.id||"",xe.required],raceNumber:[this.data?.raceNumber||"",xe.required],association:[this.data?.association||""]})}ngOnInit(){this.data||this.selectedRaceId$.pipe(Ie(1)).subscribe(i=>{i&&this.form.patchValue({race:i})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={raceId:Number(i.race),firstName:i.firstName,lastName:i.lastName,birthDate:this.formatDate(i.birthDate),gender:i.gender,raceNumber:Number(i.raceNumber),association:i.association||void 0};this.dialogRef.close(e)}}formatDate(i){if(typeof i=="string")return i;let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-participant-dialog"]],decls:53,vars:13,consts:[["picker",""],["mat-dialog-title",""],[1,"participant-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","firstName","required",""],["matInput","","formControlName","lastName","required",""],["matInput","","formControlName","birthDate","placeholder","TT.MM.JJJJ","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["formControlName","gender","required",""],[3,"value"],["formControlName","race","required",""],["matInput","","type","number","formControlName","raceNumber","required",""],["matInput","","formControlName","association"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),f(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),f(6,"Vorname"),u(),F(7,"input",4),rt(),T(8,AN,2,0,"mat-error"),u(),d(9,"mat-form-field",3)(10,"mat-label"),f(11,"Nachname"),u(),F(12,"input",5),rt(),T(13,RN,2,0,"mat-error"),u(),d(14,"mat-form-field",3)(15,"mat-label"),f(16,"Geburtsdatum"),u(),F(17,"input",6),rt(),F(18,"mat-datepicker-toggle",7)(19,"mat-datepicker",null,0),d(21,"mat-hint"),f(22,"Format: TT.MM.JJJJ (z.B. 24.3.2022)"),u(),T(23,kN,2,0,"mat-error"),u(),d(24,"mat-form-field",3)(25,"mat-label"),f(26,"Geschlecht"),u(),d(27,"mat-select",8),kt(28,NN,2,2,"mat-option",9,xN),u(),rt(),T(30,TN,2,0,"mat-error"),u(),d(31,"mat-form-field",3)(32,"mat-label"),f(33,"Rennen"),u(),d(34,"mat-select",10),kt(35,IN,2,3,"mat-option",9,EN),Re(37,"async"),u(),rt(),T(38,ON,2,0,"mat-error"),u(),d(39,"mat-form-field",3)(40,"mat-label"),f(41,"Startnummer"),u(),F(42,"input",11),rt(),T(43,FN,2,0,"mat-error"),u(),d(44,"mat-form-field",3)(45,"mat-label"),f(46,"Verein"),u(),F(47,"input",12),rt(),u()()(),d(48,"mat-dialog-actions",13)(49,"button",14),w("click",function(){return t.onCancel()}),f(50,"Abbrechen"),u(),d(51,"button",15),w("click",function(){return t.onSave()}),f(52," Speichern "),u()()),e&2){let r=mt(20);h(),De(" ",t.data?"Teilnehmer bearbeiten":"Neuer Teilnehmer"," "),h(2),A("formGroup",t.form),h(4),at(),h(),I(t.form.get("firstName")?.hasError("required")&&t.form.get("firstName")?.touched?8:-1),h(4),at(),h(),I(t.form.get("lastName")?.hasError("required")&&t.form.get("lastName")?.touched?13:-1),h(4),A("matDatepicker",r),at(),h(),A("for",r),h(5),I(t.form.get("birthDate")?.hasError("required")&&t.form.get("birthDate")?.touched?23:-1),h(4),at(),h(),Nt(t.genderOptions),h(2),I(t.form.get("gender")?.hasError("required")&&t.form.get("gender")?.touched?30:-1),h(4),at(),h(),Nt(je(37,11,t.races$)),h(3),I(t.form.get("race")?.hasError("required")&&t.form.get("race")?.touched?38:-1),h(4),at(),h(),I(t.form.get("raceNumber")?.hasError("required")&&t.form.get("raceNumber")?.touched?43:-1),h(4),at(),h(4),A("disabled",!t.form.valid)}},dependencies:[gt,ji,Bi,zn,Da,Hn,Li,Un,Zt,oi,Kt,Br,jr,Vr,xt,Qt,jt,lr,si,Hl,Ui,zi,ht,ft,ju,Vu,Bo,ql,Vd,$i,$r,qt,Lt],styles:[".participant-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var PN=(n,i)=>i.id;function LN(n,i){if(n&1&&(d(0,"mat-option",4),f(1),u()),n&2){let e=i.$implicit,t=L();A("value",e.id),h(),Yi("",e.name," (",t.formatRaceDate(e.date),")")}}function BN(n,i){if(n&1){let e=et();d(0,"button",32),w("click",function(){pe(e);let r=L();return fe(r.deleteParticipantsByRace())}),d(1,"mat-icon"),f(2,"delete_sweep"),u(),f(3," Alle Teilnehmer l\xF6schen "),u()}}function VN(n,i){n&1&&F(0,"mat-spinner",10)}function jN(n,i){n&1&&(d(0,"mat-icon"),f(1,"picture_as_pdf"),u())}function zN(n,i){n&1&&(d(0,"div",12),F(1,"mat-spinner"),u())}function UN(n,i){n&1&&(d(0,"th",33),f(1,"ID"),u())}function HN(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),Ve(e.id)}}function $N(n,i){n&1&&(d(0,"th",33),f(1,"Vorname"),u())}function GN(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.firstName," ")}}function WN(n,i){n&1&&(d(0,"th",33),f(1,"Nachname"),u())}function YN(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.lastName," ")}}function qN(n,i){n&1&&(d(0,"th",33),f(1," Geburtsdatum "),u())}function KN(n,i){if(n&1&&(d(0,"td",34),f(1),Re(2,"date"),u()),n&2){let e=i.$implicit;h(),De(" ",na(2,1,e.birthDate,"dd.MM.yyyy")," ")}}function XN(n,i){n&1&&(d(0,"th",33),f(1," Geschlecht "),u())}function ZN(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit,t=L();h(),De(" ",t.getGenderLabel(e.gender)," ")}}function QN(n,i){n&1&&(d(0,"th",33),f(1," Startnummer "),u())}function JN(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.raceNumber," ")}}function eT(n,i){n&1&&(d(0,"th",33),f(1,"Verein"),u())}function tT(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.association||"-"," ")}}function nT(n,i){n&1&&(d(0,"th",33),f(1,"Altersgruppe"),u())}function iT(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.ageGroup?.name||"-"," ")}}function rT(n,i){n&1&&(d(0,"th",33),f(1,"Rennen"),u())}function aT(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.race?.name||"-"," ")}}function oT(n,i){n&1&&(d(0,"th",33),f(1,"Zeit"),u())}function sT(n,i){if(n&1&&(d(0,"td",34),f(1),u()),n&2){let e=i.$implicit,t=L();h(),De(" ",e.durationMs!==void 0&&e.durationMs!==null?t.formatDuration(e.durationMs):"-"," ")}}function lT(n,i){n&1&&(d(0,"th",33),f(1,"Gemessen am"),u())}function cT(n,i){if(n&1&&(d(0,"td",34),f(1),Re(2,"date"),u()),n&2){let e=i.$implicit;h(),De(" ",e.measuredAt?na(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss"):"-"," ")}}function dT(n,i){n&1&&(d(0,"th",35),f(1,"Aktionen"),u())}function uT(n,i){if(n&1){let e=et();d(0,"td",34)(1,"button",36),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.openEditDialog(r))}),d(2,"mat-icon"),f(3,"edit"),u()(),d(4,"button",37),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.deleteParticipant(r))}),d(5,"mat-icon"),f(6,"delete"),u()()()}}function mT(n,i){n&1&&F(0,"tr",38)}function hT(n,i){n&1&&F(0,"tr",39)}var sm=class n{store=s(ot);dialog=s(Ri);snackBar=s(or);destroy$=new S;participants$;races$;selectedRaceId$;loading$;pdfExportLoading$;displayedColumns=["id","firstName","lastName","birthDate","gender","raceNumber","association","ageGroup","race","durationMs","measuredAt","actions"];dataSource=new Mr([]);sortInitialized=!1;sort=Yn.required(Xt);constructor(){this.participants$=this.store.select(am),this.races$=this.store.select(sr),this.selectedRaceId$=this.store.select(ri),this.loading$=this.store.select(RS),this.pdfExportLoading$=this.store.select(kS),St(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(G(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(ci()),this.store.dispatch(ii()),this.participants$.pipe(G(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return li[i]||i}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return t>0?`${t}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}onRaceFilterChange(i){this.store.dispatch(Eo({id:i}))}openCreateDialog(){this.dialog.open(nc,{width:"500px"}).afterClosed().pipe(G(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(Vo({participant:e})),this.snackBar.open("Teilnehmer erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(nc,{width:"500px",data:i}).afterClosed().pipe(G(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(jo({id:i.id,participant:t})),this.snackBar.open("Teilnehmer erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteParticipant(i){confirm(`M\xF6chten Sie den Teilnehmer "${i.firstName} ${i.lastName}" wirklich l\xF6schen?`)&&(this.store.dispatch(zo({id:i.id})),this.snackBar.open("Teilnehmer erfolgreich gel\xF6scht","OK",{duration:3e3}))}deleteParticipantsByRace(){this.selectedRaceId$.pipe(Ie(1)).subscribe(i=>{if(i===null)return;let e=this.dataSource.data[0]?.race?.name||"diesem Rennen";confirm(`M\xF6chten Sie wirklich ALLE Teilnehmer von "${e}" l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden!`)&&(this.store.dispatch(Uo({raceId:i})),this.snackBar.open("Alle Teilnehmer des Rennens erfolgreich gel\xF6scht","OK",{duration:3e3}))})}refreshData(){this.store.dispatch(ci()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}async exportAllPdf(){let i=await pc(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Ho({raceId:i})),this.snackBar.open("PDF Export gestartet: Gesamtwertung","OK",{duration:2e3})}async exportByGenderPdf(i){let e=await pc(this.selectedRaceId$);if(!e){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch($o({gender:i,raceId:e}));let t=i==="MALE"?"Herren":"Damen";this.snackBar.open(`PDF Export gestartet: Alle ${t}`,"OK",{duration:2e3})}async exportAllAgeGroupsPdf(){let i=await pc(this.selectedRaceId$);if(!i){this.snackBar.open("Bitte w\xE4hlen Sie zuerst ein Rennen aus!","Schlie\xDFen",{duration:5e3,panelClass:["error-snackbar"]});return}this.store.dispatch(Go({raceId:i})),this.snackBar.open("PDF Export gestartet: Nach Altersklassen","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-participant-list"]],viewQuery:function(e,t){e&1&&hr(t.sort,Xt,5),e&2&&Wi()},decls:104,vars:31,consts:[["exportMenu","matMenu"],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen"],[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],["mat-raised-button","","color","accent","matTooltip","PDF Export Optionen",3,"matMenuTriggerFor","disabled"],["diameter","20",2,"display","inline-block","margin-right","8px"],["mat-menu-item","",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"participant-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","birthDate"],["matColumnDef","gender"],["matColumnDef","raceNumber"],["matColumnDef","association"],["matColumnDef","ageGroup"],["matColumnDef","race"],["matColumnDef","durationMs"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","warn","matTooltip","Alle Teilnehmer des gefilterten Rennens l\xF6schen",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),f(3,"Teilnehmer"),u()(),d(4,"mat-card-content")(5,"div",1)(6,"mat-form-field",2)(7,"mat-label"),f(8,"Nach Rennen filtern"),u(),d(9,"mat-select",3),Re(10,"async"),w("selectionChange",function(a){return t.onRaceFilterChange(a.value)}),d(11,"mat-option",4),f(12,"Alle Rennen"),u(),kt(13,LN,2,3,"mat-option",4,PN),Re(15,"async"),u()(),T(16,BN,4,0,"button",5),Re(17,"async"),u(),d(18,"div",6)(19,"button",7),w("click",function(){return t.openCreateDialog()}),d(20,"mat-icon"),f(21,"add"),u(),f(22," Neuer Teilnehmer "),u(),d(23,"button",8),w("click",function(){return t.refreshData()}),d(24,"mat-icon"),f(25,"refresh"),u(),f(26," Aktualisieren "),u(),d(27,"button",9),Re(28,"async"),T(29,VN,1,0,"mat-spinner",10),Re(30,"async"),mr(31,jN,2,0,"mat-icon"),f(32," PDF Export "),d(33,"mat-icon"),f(34,"arrow_drop_down"),u()(),d(35,"mat-menu",null,0)(37,"button",11),w("click",function(){return t.exportAllPdf()}),d(38,"mat-icon"),f(39,"groups"),u(),d(40,"span"),f(41,"Gesamtwertung (Alle)"),u()(),F(42,"mat-divider"),d(43,"button",11),w("click",function(){return t.exportByGenderPdf("MALE")}),d(44,"mat-icon"),f(45,"male"),u(),d(46,"span"),f(47,"Alle Herren"),u()(),d(48,"button",11),w("click",function(){return t.exportByGenderPdf("FEMALE")}),d(49,"mat-icon"),f(50,"female"),u(),d(51,"span"),f(52,"Alle Damen"),u()(),F(53,"mat-divider"),d(54,"button",11),w("click",function(){return t.exportAllAgeGroupsPdf()}),d(55,"mat-icon"),f(56,"view_list"),u(),d(57,"span"),f(58,"Nach Altersklassen aufgeteilt"),u()()()(),T(59,zN,2,0,"div",12),Re(60,"async"),d(61,"table",13),Re(62,"async"),Ge(63,14),re(64,UN,2,0,"th",15)(65,HN,2,1,"td",16),We(),Ge(66,17),re(67,$N,2,0,"th",15)(68,GN,2,1,"td",16),We(),Ge(69,18),re(70,WN,2,0,"th",15)(71,YN,2,1,"td",16),We(),Ge(72,19),re(73,qN,2,0,"th",15)(74,KN,3,4,"td",16),We(),Ge(75,20),re(76,XN,2,0,"th",15)(77,ZN,2,1,"td",16),We(),Ge(78,21),re(79,QN,2,0,"th",15)(80,JN,2,1,"td",16),We(),Ge(81,22),re(82,eT,2,0,"th",15)(83,tT,2,1,"td",16),We(),Ge(84,23),re(85,nT,2,0,"th",15)(86,iT,2,1,"td",16),We(),Ge(87,24),re(88,rT,2,0,"th",15)(89,aT,2,1,"td",16),We(),Ge(90,25),re(91,oT,2,0,"th",15)(92,sT,2,1,"td",16),We(),Ge(93,26),re(94,lT,2,0,"th",15)(95,cT,3,4,"td",16),We(),Ge(96,27),re(97,dT,2,0,"th",28)(98,uT,7,0,"td",16),We(),re(99,mT,1,0,"tr",29)(100,hT,1,0,"tr",30),u(),d(101,"div",31),Re(102,"async"),f(103),u()()()),e&2){let r=mt(36);h(9),A("value",je(10,15,t.selectedRaceId$)),h(2),A("value",null),h(2),Nt(je(15,17,t.races$)),h(3),I(je(17,19,t.selectedRaceId$)!==null?16:-1),h(11),A("matMenuTriggerFor",r)("disabled",je(28,21,t.pdfExportLoading$)),h(2),I(je(30,23,t.pdfExportLoading$)?29:31),h(30),I(je(60,25,t.loading$)?59:-1),h(2),B("hidden",je(62,27,t.loading$)),A("dataSource",t.dataSource),h(38),A("matHeaderRowDef",t.displayedColumns),h(),A("matRowDefColumns",t.displayedColumns),h(),B("hidden",je(102,29,t.loading$)),h(2),De(" Anzahl der Teilnehmer: ",t.dataSource.data.length," ")}},dependencies:[gt,Pr,xr,Ar,Tr,Rr,Er,Ir,kr,Nr,Or,Fr,ht,ft,_n,Vn,Bn,Ai,Ei,Kt,zr,Oi,ki,Ti,Ii,Ni,Ur,ni,Do,Xt,Co,$i,Qt,jt,$r,qt,xt,yo,xi,rr,vo,Uu,ES,Lt,ia],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.participant-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}"]})};var NS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[tr,le]})}return n})();var pT=["switch"],fT=["*"];function gT(n,i){n&1&&(d(0,"span",11),Ut(),d(1,"svg",13),F(2,"path",14),u(),d(3,"svg",15),F(4,"path",16),u()())}var _T=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),lm=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},ag=(()=>{class n{_elementRef=s(j);_focusMonitor=s(Wt);_changeDetectorRef=s(he);defaults=s(_T);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new lm(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ne();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new R;toggleChange=new R;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(Qe).load(pn);let e=s(new Rn("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(ze).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new lm(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Be(pT,5),t&2){let a;z(a=U())&&(r._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(t,r){t&2&&(pt("id",r.id),J("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),lt(r.color?"mat-"+r.color:""),B("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("mat-slide-toggle-full-width",r.fullWidth)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",k],color:"color",disabled:[2,"disabled","disabled",k],fullWidth:[2,"fullWidth","fullWidth",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ht(e)],checked:[2,"checked","checked",k],hideIcon:[2,"hideIcon","hideIcon",k],disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ue([{provide:Pi,useExisting:At(()=>n),multi:!0},{provide:ai,useExisting:n,multi:!0}]),ke],ngContentSelectors:fT,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(Me(),d(0,"div",1)(1,"button",2,0),w("click",function(){return r._handleClick()}),F(3,"div",3)(4,"span",4),d(5,"span",5)(6,"span",6)(7,"span",7),F(8,"span",8),u(),d(9,"span",9),F(10,"span",10),u(),T(11,gT,5,0,"span",11),u()()(),d(12,"label",12),w("click",function(o){return o.stopPropagation()}),ee(13),u()()),t&2){let a=mt(2);A("labelPosition",r.labelPosition),h(),B("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),A("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),J("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),h(9),A("matRippleTrigger",a)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),h(),I(r.hideIcon?-1:11),h(),A("for",r.buttonId),J("id",r._labelId)}},dependencies:[nr,Hv],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),TS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[ag,le]})}return n})();var Ma=M("[Measurement] Load Measurements"),cm=M("[Measurement] Load Measurements Success",O()),dm=M("[Measurement] Load Measurements Failure",O()),um=M("[Measurement] Load Measurements By Participant",O()),mm=M("[Measurement] Load Measurements By Participant Success",O()),hm=M("[Measurement] Load Measurements By Participant Failure",O()),pm=M("[Measurement] Load Measurement",O()),fm=M("[Measurement] Load Measurement Success",O()),gm=M("[Measurement] Load Measurement Failure",O()),Yo=M("[Measurement] Create Measurement",O()),_m=M("[Measurement] Create Measurement Success",O()),bm=M("[Measurement] Create Measurement Failure",O()),qo=M("[Measurement] Update Measurement",O()),vm=M("[Measurement] Update Measurement Success",O()),ym=M("[Measurement] Update Measurement Failure",O()),Ko=M("[Measurement] Delete Measurement",O()),Sm=M("[Measurement] Delete Measurement Success",O()),Cm=M("[Measurement] Delete Measurement Failure",O()),IS=M("[Measurement] Select Measurement",O()),Xo=M("[Measurement] Reset Measurements",O()),xa=M("[Measurement] Reset Measurements Success"),Zo=M("[Measurement] Reset Measurements Failure",O()),Qo=M("[Measurement] Set Continuous Mode",O()),Jo=M("[Measurement] Set Continuous Mode Success",O()),es=M("[Measurement] Set Continuous Mode Failure",O()),ts=M("[Measurement] Set Scheduled Import",O()),ns=M("[Measurement] Set Scheduled Import Success",O()),is=M("[Measurement] Set Scheduled Import Failure",O()),rs=M("[Measurement] Load Scheduled Import Status"),Dm=M("[Measurement] Load Scheduled Import Status Success",O()),wm=M("[Measurement] Load Scheduled Import Status Failure",O()),Mm=M("[Measurement] Sync Measurements To Participants"),xm=M("[Measurement] Sync Measurements To Participants Success",O()),Em=M("[Measurement] Sync Measurements To Participants Failure",O());var as=Ci("measurement"),Am=Fe(as,n=>n.measurements),OS=Fe(as,n=>n.loading),lW=Fe(as,n=>n.error),vT=Fe(as,n=>n.selectedMeasurementId),cW=Fe(Am,vT,(n,i)=>i?n.find(e=>e.id===i):null);var dW=Fe(Am,Wo,ri,(n,i,e)=>{if(!e)return n;let t=i.filter(r=>r.race?.id===e).map(r=>r.id);return n.filter(r=>r.participantId&&t.includes(r.participantId))}),FS=Fe(as,n=>n.continuousModeEnabled),PS=Fe(as,n=>n.scheduledImportEnabled);var ST=["panel"],CT=["*"];function DT(n,i){if(n&1&&($e(0,"div",1,0),ee(2),Ye()),n&2){let e=i.id,t=L();lt(t._classList),B("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),pt("id",t.id),J("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var sg=class{source;option;constructor(i,e){this.source=i,this.option=e}},LS=new b("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),BS=(()=>{class n{_changeDetectorRef=s(he);_elementRef=s(j);_defaults=s(LS);_animationsDisabled=Ne();_activeOptionChanges=Se.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new R;opened=new R;closed=new R;optionActivated=new R;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(ze).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(ge);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new pa(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new sg(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,r,a){if(t&1&&Dt(a,qt,5)(a,hl,5),t&2){let o;z(o=U())&&(r.options=o),z(o=U())&&(r.optionGroups=o)}},viewQuery:function(t,r){if(t&1&&Be(ut,7)(ST,5),t&2){let a;z(a=U())&&(r.template=a.first),z(a=U())&&(r.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",k],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",k],requireSelection:[2,"requireSelection","requireSelection",k],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",k],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ue([{provide:ml,useExisting:n}])],ngContentSelectors:CT,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,r){t&1&&(Me(),ta(0,DT,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var wT={provide:Pi,useExisting:At(()=>lg),multi:!0};var MT=new b("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Q);return()=>wn(n)}}),lg=(()=>{class n{_environmentInjector=s(Rt);_element=s(j);_injector=s(Q);_viewContainerRef=s(st);_zone=s(Z);_changeDetectorRef=s(he);_dir=s(Je,{optional:!0});_formField=s(cr,{optional:!0,host:!0});_viewportRuler=s(nn);_scrollStrategy=s(MT);_renderer=s(Le);_animationsDisabled=Ne();_defaults=s(LS,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new S;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Se.EMPTY;_breakpointObserver=s(da);_handsetLandscapeSubscription=Se.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new S;_overlayPanelClass=er(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Pe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(me(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(me(()=>this._overlayAttached)):D()).pipe(x(e=>e instanceof ul?e:null))}optionSelections=En(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ze(e),Oe(()=>Pe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Oe(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new nt(e=>{let t=a=>{let o=Mt(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(o))&&(!c||!c.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},r=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{r.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,r=t.keyCode,a=Xe(t);if(r===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,l=r===38||r===40;r===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,r=t.value;if(t.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);r!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Fn()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new nt(r=>{He(()=>{r.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(it(()=>this._positionStrategy.reapplyLastPosition()),Pg(0))??D();return Pe(e,t).pipe(Oe(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Ie(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),t._emitSelectEvent(r),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Bt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=on(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(yd.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Xe(e)||e.keyCode===38&&Xe(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new rn({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ei(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],o;this.position==="above"?o=a:this.position==="below"?o=t:o=[...t,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){t=r;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,r=Pd(e,t.options,t.optionGroups);if(e===0&&r===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let o=a._getHostElement(),l=Ld(o.offsetTop,o.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,r){t&1&&w("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(o){return r._handleInput(o)})("keydown",function(o){return r._handleKeydown(o)})("click",function(){return r._handleClick()}),t&2&&J("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen?null:r.autocomplete?.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",k]},exportAs:["matAutocompleteTrigger"],features:[ue([wT]),ke]})}return n})(),VS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Y({type:n});static \u0275inj=W({imports:[Vt,co,Dn,co,le]})}return n})();var ET=(n,i)=>i.id;function AT(n,i){if(n&1&&(d(0,"mat-option",6),f(1),u()),n&2){let e=i.$implicit;A("value",e),h(),d_(" ",e.firstName," ",e.lastName," (",e.raceNumber,") ")}}function RT(n,i){n&1&&(d(0,"mat-error"),f(1,"Minuten erforderlich"),u())}function kT(n,i){n&1&&(d(0,"mat-error"),f(1,"Minuten m\xFCssen >= 0 sein"),u())}function NT(n,i){n&1&&(d(0,"mat-error"),f(1,"Sekunden erforderlich"),u())}function TT(n,i){n&1&&(d(0,"mat-error"),f(1,"Sekunden: 0-59"),u())}function IT(n,i){n&1&&(d(0,"mat-error"),f(1,"Millisekunden erforderlich"),u())}function OT(n,i){n&1&&(d(0,"mat-error"),f(1,"Millisekunden: 0-999"),u())}function FT(n,i){n&1&&(d(0,"mat-error"),f(1,"Messzeit ist erforderlich"),u())}var ic=class n{fb=s(Vi);store=s(ot);dialogRef=s(jn);data=s(ar);destroy$=new S;form;participants$;filteredParticipants$;selectedParticipant=null;constructor(){this.participants$=this.store.select(am),this.data?.participantId&&setTimeout(()=>{this.participants$.pipe(Ie(1),G(this.destroy$)).subscribe(e=>{this.selectedParticipant=e.find(t=>t.id===this.data.participantId)||null,this.selectedParticipant&&this.form.patchValue({participantSearch:this.selectedParticipant},{emitEvent:!1})})},0);let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({participantId:[this.data?.participantId||null],participantSearch:[""],minutes:[i.minutes,[xe.required,xe.min(0)]],seconds:[i.seconds,[xe.required,xe.min(0),xe.max(59)]],milliseconds:[i.milliseconds,[xe.required,xe.min(0),xe.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),xe.required]}),this.filteredParticipants$=zt([this.participants$,this.form.get("participantSearch").valueChanges.pipe(Ze(""))]).pipe(x(([e,t])=>{let r=typeof t=="string"?t:"";return this.filterParticipants(e,r)}))}ngAfterViewInit(){setTimeout(()=>{this.store.dispatch(ci())},0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),t={participantId:i.participantId||void 0,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(t)}}onParticipantSelected(i){let e=i.option.value;this.selectedParticipant=e,this.form.patchValue({participantId:e?e.id:null})}displayParticipant(i){return i?`${i.firstName} ${i.lastName} (${i.raceNumber})`:""}filterParticipants(i,e){if(!e||e.trim()==="")return i;let t=e.toLowerCase();return i.filter(r=>{let a=`${r.firstName} ${r.lastName}`.toLowerCase(),o=r.raceNumber.toString();return a.includes(t)||o.includes(t)})}formatDateTimeForInput(i){if(!i){let t=new Date;return this.toLocalISOString(t)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){let e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),r=String(i.getDate()).padStart(2,"0"),a=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0");return`${e}-${t}-${r}T${a}:${o}`}formatDateTimeForBackend(i){let e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");return`${t}-${r}-${a}T${o}:${l}:${c}`}convertToMilliseconds(i,e,t){return i*60*1e3+e*1e3+t}splitMilliseconds(i){let e=Math.floor(i/6e4),t=i%(60*1e3),r=Math.floor(t/1e3),a=t%1e3;return{minutes:e,seconds:r,milliseconds:a}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-measurement-dialog"]],decls:44,vars:15,consts:[["auto","matAutocomplete"],["mat-dialog-title",""],[1,"measurement-form",3,"formGroup"],["appearance","outline"],["type","text","matInput","","formControlName","participantSearch","placeholder","Suche nach Name oder Startnummer",3,"matAutocomplete"],[3,"optionSelected","displayWith"],[3,"value"],[1,"time-input-group"],["matInput","","type","number","formControlName","minutes","min","0","required",""],["matInput","","type","number","formControlName","seconds","min","0","max","59","required",""],["matInput","","type","number","formControlName","milliseconds","min","0","max","999","required",""],["matInput","","type","datetime-local","formControlName","measuredAt","required",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1&&(d(0,"h2",1),f(1),u(),d(2,"mat-dialog-content")(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),f(6,"Teilnehmer"),u(),F(7,"input",4),rt(),d(8,"mat-autocomplete",5,0),w("optionSelected",function(a){return t.onParticipantSelected(a)}),d(10,"mat-option",6),f(11,"Kein Teilnehmer"),u(),kt(12,AT,2,4,"mat-option",6,ET),Re(14,"async"),u()(),d(15,"div",7)(16,"mat-form-field",3)(17,"mat-label"),f(18,"Minuten"),u(),F(19,"input",8),rt(),T(20,RT,2,0,"mat-error"),T(21,kT,2,0,"mat-error"),u(),d(22,"mat-form-field",3)(23,"mat-label"),f(24,"Sekunden"),u(),F(25,"input",9),rt(),T(26,NT,2,0,"mat-error"),T(27,TT,2,0,"mat-error"),u(),d(28,"mat-form-field",3)(29,"mat-label"),f(30,"Millisekunden"),u(),F(31,"input",10),rt(),T(32,IT,2,0,"mat-error"),T(33,OT,2,0,"mat-error"),u()(),d(34,"mat-form-field",3)(35,"mat-label"),f(36,"Gemessen am (ISO Format)"),u(),F(37,"input",11),rt(),T(38,FT,2,0,"mat-error"),u()()(),d(39,"mat-dialog-actions",12)(40,"button",13),w("click",function(){return t.onCancel()}),f(41,"Abbrechen"),u(),d(42,"button",14),w("click",function(){return t.onSave()}),f(43," Speichern "),u()()),e&2){let r=mt(9);h(),Ve(t.data?"Messung bearbeiten":"Neue Messung"),h(2),A("formGroup",t.form),h(4),A("matAutocomplete",r),at(),h(),A("displayWith",t.displayParticipant.bind(t)),h(2),A("value",null),h(2),Nt(je(14,13,t.filteredParticipants$)),h(7),at(),h(),I(t.form.get("minutes")?.hasError("required")&&t.form.get("minutes")?.touched?20:-1),h(),I(t.form.get("minutes")?.hasError("min")?21:-1),h(4),at(),h(),I(t.form.get("seconds")?.hasError("required")&&t.form.get("seconds")?.touched?26:-1),h(),I(t.form.get("seconds")?.hasError("min")||t.form.get("seconds")?.hasError("max")?27:-1),h(4),at(),h(),I(t.form.get("milliseconds")?.hasError("required")&&t.form.get("milliseconds")?.touched?32:-1),h(),I(t.form.get("milliseconds")?.hasError("min")||t.form.get("milliseconds")?.hasError("max")?33:-1),h(4),at(),h(),I(t.form.get("measuredAt")?.hasError("required")&&t.form.get("measuredAt")?.touched?38:-1),h(4),A("disabled",!t.form.valid)}},dependencies:[gt,ji,Bi,zn,Da,Hn,Li,Un,zl,jl,Zt,oi,Kt,Br,jr,Vr,xt,Qt,jt,si,Ui,zi,ht,ft,$i,qt,VS,BS,lg,Lt],styles:[".measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var PT={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},Rm="__@ngrx/effects_create__";function Ee(n,i={}){let e=i.functional?n:n(),t=g(g({},PT),i);return Object.defineProperty(e,Rm,{value:t}),e}function LT(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(Rm)?n[t][Rm].hasOwnProperty("dispatch"):!1).map(t=>{let r=n[t][Rm];return g({propertyName:t},r)})}function BT(n){return LT(n)}function jS(n){return Object.getPrototypeOf(n)}function VT(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function zS(n){return typeof n=="function"}function jT(n){return n.filter(zS)}function zT(n,i,e){let t=jS(n),a=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,o=BT(n).map(({propertyName:l,dispatch:c,useEffectsErrorHandler:m})=>{let p=typeof n[l]=="function"?n[l]():n[l],_=m?e(p,i):p;return c===!1?_.pipe(Fg()):_.pipe(Vg()).pipe(x(P=>({effect:n[l],notification:P,propertyName:l,sourceName:a,sourceInstance:n})))});return Pe(...o)}var UT=10;function US(n,i,e=UT){return n.pipe(be(t=>(i&&i.handleError(t),e<=1?n:US(n,i,e-1))))}var Gn=(()=>{class n extends nt{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)($(ba))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ce(...n){return me(i=>n.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}var HT=new b("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>US}),$T="@ngrx/effects/init",GT=M($T);function WT(n,i){if(n.notification.kind==="N"){let e=n.notification.value;!YT(e)&&i.handleError(new Error(`Effect ${qT(n)} dispatched an invalid action: ${KT(e)}`))}}function YT(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function qT({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function KT(n){try{return JSON.stringify(n)}catch{return n}}var XT="ngrxOnIdentifyEffects";function ZT(n){return cg(n,XT)}var QT="ngrxOnRunEffects";function JT(n){return cg(n,QT)}var eI="ngrxOnInitEffects";function tI(n){return cg(n,eI)}function cg(n,i){return n&&i in n&&typeof n[i]=="function"}var HS=(()=>{class n extends S{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(ph(e=>VT(e)?jS(e):e),we(e=>e.pipe(ph(nI))),we(e=>{let t=e.pipe(Bg(a=>iI(this.errorHandler,this.effectsErrorHandler)(a)),x(a=>(WT(a,this.errorHandler),a.notification)),me(a=>a.kind==="N"&&a.value!=null),Lg()),r=e.pipe(Ie(1),me(tI),x(a=>a.ngrxOnInitEffects()));return Pe(t,r)}))}static{this.\u0275fac=function(t){return new(t||n)($(Wn),$(HT))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function nI(n){return ZT(n)?n.ngrxOnIdentifyEffects():""}function iI(n,i){return e=>{let t=zT(e,n,i);return JT(e)?e.ngrxOnRunEffects(t):t}}var rI=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)($(HS),$(ot))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function $S(...n){let i=n.flat(),e=jT(i);return Jt([e,fs(()=>{s(fl),s(Hd,{optional:!0});let t=s(rI),r=s(HS),a=!t.isStarted;a&&t.start();for(let o of i){let l=zS(o)?s(o):o;r.addEffects(l)}a&&s(ot).dispatch(GT())})])}var GS=()=>[],aI=(n,i)=>i.id;function oI(n,i){n&1&&(d(0,"mat-icon",4),f(1,"sync "),u())}function sI(n,i){if(n&1&&(d(0,"mat-icon",5),f(1,"sync "),u()),n&2){let e=L();A("matTooltip",u_("Letzte Aktualisierung: ",e.lastUpdate))}}function lI(n,i){if(n&1&&(d(0,"mat-option",10),f(1),u()),n&2){let e=i.$implicit,t=L();A("value",e.id),h(),Yi("",e.name," (",t.formatRaceDate(e.date),")")}}function cI(n,i){if(n&1){let e=et();d(0,"button",33),w("click",function(){pe(e);let r=L();return fe(r.toggleContinuousMode(!1))}),d(1,"mat-icon"),f(2,"stop"),u(),f(3," Kontinuierlich AUS "),u()}}function dI(n,i){if(n&1){let e=et();d(0,"button",34),w("click",function(){pe(e);let r=L();return fe(r.toggleContinuousMode(!0))}),d(1,"mat-icon"),f(2,"play_arrow"),u(),f(3," Kontinuierlich AN "),u()}}function uI(n,i){if(n&1){let e=et();d(0,"button",35),w("click",function(){pe(e);let r=L();return fe(r.toggleScheduledImport(!1))}),d(1,"mat-icon"),f(2,"cloud_sync"),u(),f(3," Auto-Import AUS "),u()}}function mI(n,i){if(n&1){let e=et();d(0,"button",36),w("click",function(){pe(e);let r=L();return fe(r.toggleScheduledImport(!0))}),d(1,"mat-icon"),f(2,"cloud_download"),u(),f(3," Auto-Import AN "),u()}}function hI(n,i){n&1&&(d(0,"div",21),F(1,"mat-spinner",37),u())}function pI(n,i){n&1&&(d(0,"th",38),f(1,"ID"),u())}function fI(n,i){if(n&1&&(d(0,"td",39),f(1),u()),n&2){let e=i.$implicit;h(),Ve(e.id)}}function gI(n,i){n&1&&(d(0,"th",38),f(1,"Teilnehmer"),u())}function _I(n,i){if(n&1&&(d(0,"td",39),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.participantName||"-"," ")}}function bI(n,i){n&1&&(d(0,"th",38),f(1,"Dauer"),u())}function vI(n,i){if(n&1&&(d(0,"td",39),f(1),u()),n&2){let e=i.$implicit,t=L();h(),De(" ",t.formatDuration(e.durationMs)," ")}}function yI(n,i){n&1&&(d(0,"th",38),f(1,"Gemessen am"),u())}function SI(n,i){if(n&1&&(d(0,"td",39),f(1),Re(2,"date"),u()),n&2){let e=i.$implicit;h(),De(" ",na(2,1,e.measuredAt,"dd.MM.yyyy HH:mm:ss")," ")}}function CI(n,i){n&1&&(d(0,"th",38),f(1,"Aktionen"),u())}function DI(n,i){if(n&1){let e=et();d(0,"td",39)(1,"button",40),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.openEditDialog(r))}),d(2,"mat-icon"),f(3,"edit"),u()(),d(4,"button",41),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.deleteMeasurement(r))}),d(5,"mat-icon"),f(6,"delete"),u()()()}}function wI(n,i){n&1&&F(0,"tr",42)}function MI(n,i){n&1&&F(0,"tr",43)}var km=class n{store=s(ot);dialog=s(Ri);snackBar=s(or);actions$=s(Gn);destroy$=new S;autoRefresh$=new S;measurements$;participants$;races$;selectedRaceId$;measurementsWithParticipants$;loading$;continuousModeEnabled$;scheduledImportEnabled$;displayedColumns=["id","participant","duration","measuredAt","actions"];lastUpdate="";autoRefreshEnabled=!1;lastResetDevice=!1;constructor(){this.measurements$=this.store.select(Am),this.participants$=this.store.select(Wo),this.races$=this.store.select(sr),this.selectedRaceId$=this.store.select(ri),this.loading$=this.store.select(OS),this.continuousModeEnabled$=this.store.select(FS),this.scheduledImportEnabled$=this.store.select(PS),this.measurementsWithParticipants$=zt([this.measurements$,this.participants$]).pipe(x(([i,e])=>i.map(t=>v(g({},t),{participantName:t.participantId?this.getParticipantName(t.participantId,e):void 0}))),qr((i,e)=>JSON.stringify(i)===JSON.stringify(e))),this.actions$.pipe(ce(xa),G(this.destroy$)).subscribe(()=>{let i=this.lastResetDevice?"Alle Messungen wurden gel\xF6scht (inkl. Ger\xE4t)":"Alle Messungen wurden gel\xF6scht (nur Datenbank)";this.snackBar.open(i,"OK",{duration:3e3})}),this.actions$.pipe(ce(Zo),G(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim L\xF6schen der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(ce(Jo),G(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Kontinuierlicher Modus aktiviert":"Kontinuierlicher Modus deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(ce(es),G(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des kontinuierlichen Modus","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(ce(ns),G(this.destroy$)).subscribe(({enabled:i})=>{let e=i?"Automatischer Import aktiviert (alle 5 Sekunden)":"Automatischer Import deaktiviert";this.snackBar.open(e,"OK",{duration:3e3})}),this.actions$.pipe(ce(is),G(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim \xC4ndern des automatischen Imports","OK",{duration:1e4,panelClass:"error-snackbar"})}),this.actions$.pipe(ce(xm),G(this.destroy$)).subscribe(()=>{this.snackBar.open("Messungen erfolgreich mit Teilnehmern synchronisiert","OK",{duration:3e3}),this.loadData()}),this.actions$.pipe(ce(Em),G(this.destroy$)).subscribe(()=>{this.snackBar.open("FEHLER beim Synchronisieren der Messungen","OK",{duration:1e4,panelClass:"error-snackbar"})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(rs()),this.autoRefresh$.pipe(Oe(i=>i?Og(2e3):vt),G(this.destroy$)).subscribe(()=>{this.loadData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?"Automatische Aktualisierung aktiviert":"Automatische Aktualisierung deaktiviert";this.snackBar.open(i,"OK",{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open("Daten wurden aktualisiert","OK",{duration:2e3})}loadData(){this.store.dispatch(Ma()),this.store.dispatch(ci()),this.store.dispatch(ii()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString("de-DE")}getParticipantName(i,e){let t=e.find(r=>r.id===i);return t?`${t.firstName} ${t.lastName}`:"-"}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,o=i%1e3;return t>0?`${t}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:r>0?`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`:`${a}.${String(o).padStart(3,"0")}s`}openCreateDialog(){this.dialog.open(ic,{width:"500px"}).afterClosed().pipe(G(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(Yo({measurement:e})),this.snackBar.open("Messung erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(ic,{width:"500px",data:i}).afterClosed().pipe(G(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(qo({id:i.id,measurement:t})),this.snackBar.open("Messung erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteMeasurement(i){confirm(`M\xF6chten Sie die Messung #${i.id} wirklich l\xF6schen?`)&&(this.store.dispatch(Ko({id:i.id})),this.snackBar.open("Messung erfolgreich gel\xF6scht","OK",{duration:3e3}))}onRaceFilterChange(i){this.store.dispatch(Eo({id:i}))}formatRaceDate(i){let e=i.split("-");if(e.length===3){let t=e[0],r=e[1];return`${e[2]}.${r}.${t}`}return i}resetMeasurements(i){confirm(i?"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen? Dies betrifft auch die Messungen auf dem Ger\xE4t!":"M\xF6chten Sie wirklich ALLE Messungen l\xF6schen (nur aus der Datenbank)?")&&(this.lastResetDevice=i,this.store.dispatch(Xo({resetDevice:i})))}toggleContinuousMode(i){this.store.dispatch(Qo({enable:i}))}toggleScheduledImport(i){this.store.dispatch(ts({enable:i}))}syncMeasurementsToParticipants(){this.store.dispatch(Mm()),this.snackBar.open("Synchronisierung gestartet...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-measurement-list"]],decls:87,vars:35,consts:[["resetMenu","matMenu"],[1,"title-row"],[1,"sync-status"],["color","primary","matTooltip","Automatische Aktualisierung",3,"ngModelChange","change","ngModel"],["matTooltip","Aktualisiere...",1,"sync-icon","syncing"],[1,"sync-icon",3,"matTooltip"],[1,"last-update-text"],[1,"filter-section"],["appearance","outline"],[3,"selectionChange","value"],[3,"value"],[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent","matTooltip","Messungen mit Teilnehmern synchronisieren",3,"click"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)"],["mat-raised-button","","color","warn","matTooltip","Alle Messungen zur\xFCcksetzen",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"loading-overlay"],["mat-table","",1,"measurement-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","participant"],["matColumnDef","duration"],["matColumnDef","measuredAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"count-info"],["mat-raised-button","","color","accent","matTooltip","Kontinuierlichen Modus deaktivieren",3,"click"],["mat-raised-button","","matTooltip","Kontinuierlichen Modus aktivieren",3,"click"],["mat-raised-button","","color","accent","matTooltip","Automatischen Import deaktivieren (l\xE4uft alle 5 Sekunden)",3,"click"],["mat-raised-button","","matTooltip","Automatischen Import aktivieren (l\xE4uft alle 5 Sekunden)",3,"click"],["diameter","30"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1){let r=et();d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title")(3,"div",1)(4,"span"),f(5,"Messungen"),u(),d(6,"div",2)(7,"mat-slide-toggle",3),Ba("ngModelChange",function(o){return pe(r),La(t.autoRefreshEnabled,o)||(t.autoRefreshEnabled=o),fe(o)}),w("change",function(){return t.onAutoRefreshToggle()}),u(),rt(),T(8,oI,2,0,"mat-icon",4),Re(9,"async"),mr(10,sI,2,2,"mat-icon",5),d(11,"span",6),f(12),u()()()()(),d(13,"mat-card-content")(14,"div",7)(15,"mat-form-field",8)(16,"mat-label"),f(17,"Nach Rennen filtern"),u(),d(18,"mat-select",9),Re(19,"async"),w("selectionChange",function(o){return t.onRaceFilterChange(o.value)}),d(20,"mat-option",10),f(21,"Alle Rennen"),u(),kt(22,lI,2,3,"mat-option",10,aI),Re(24,"async"),u()()(),d(25,"div",11)(26,"button",12),w("click",function(){return t.openCreateDialog()}),d(27,"mat-icon"),f(28,"add"),u(),f(29," Neue Messung "),u(),d(30,"button",13),w("click",function(){return t.manualRefresh()}),d(31,"mat-icon"),f(32,"refresh"),u(),f(33," Manuell aktualisieren "),u(),d(34,"button",14),w("click",function(){return t.syncMeasurementsToParticipants()}),d(35,"mat-icon"),f(36,"sync"),u(),f(37," Sync zu Teilnehmern "),u(),T(38,cI,4,0,"button",15),Re(39,"async"),mr(40,dI,4,0,"button",16),T(41,uI,4,0,"button",17),Re(42,"async"),mr(43,mI,4,0,"button",18),d(44,"button",19)(45,"mat-icon"),f(46,"delete_sweep"),u(),f(47," Zur\xFCcksetzen "),d(48,"mat-icon"),f(49,"arrow_drop_down"),u()(),d(50,"mat-menu",null,0)(52,"button",20),w("click",function(){return t.resetMeasurements(!1)}),d(53,"mat-icon"),f(54,"delete_sweep"),u(),d(55,"span"),f(56,"Alle Messungen l\xF6schen (nur Datenbank)"),u()(),d(57,"button",20),w("click",function(){return t.resetMeasurements(!0)}),d(58,"mat-icon"),f(59,"delete_forever"),u(),d(60,"span"),f(61,"Alle l\xF6schen (inkl. Ger\xE4t)"),u()()()(),T(62,hI,2,0,"div",21),Re(63,"async"),d(64,"table",22),Re(65,"async"),Re(66,"async"),Ge(67,23),re(68,pI,2,0,"th",24)(69,fI,2,1,"td",25),We(),Ge(70,26),re(71,gI,2,0,"th",24)(72,_I,2,1,"td",25),We(),Ge(73,27),re(74,bI,2,0,"th",24)(75,vI,2,1,"td",25),We(),Ge(76,28),re(77,yI,2,0,"th",24)(78,SI,3,4,"td",25),We(),Ge(79,29),re(80,CI,2,0,"th",24)(81,DI,7,0,"td",25),We(),re(82,wI,1,0,"tr",30)(83,MI,1,0,"tr",31),u(),d(84,"div",32),f(85),Re(86,"async"),u()()()}if(e&2){let r=mt(51);h(7),Pa("ngModel",t.autoRefreshEnabled),at(),h(),I(je(9,15,t.loading$)?8:10),h(4),Ve(t.lastUpdate),h(6),A("value",je(19,17,t.selectedRaceId$)),h(2),A("value",null),h(2),Nt(je(24,19,t.races$)),h(16),I(je(39,21,t.continuousModeEnabled$)?38:40),h(3),I(je(42,23,t.scheduledImportEnabled$)?41:43),h(3),A("matMenuTriggerFor",r),h(18),I(je(63,25,t.loading$)?62:-1),h(2),B("loading",je(65,27,t.loading$)),A("dataSource",je(66,29,t.measurementsWithParticipants$)||Mh(33,GS)),h(18),A("matHeaderRowDef",t.displayedColumns),h(),A("matRowDefColumns",t.displayedColumns),h(2),De(" Anzahl der Messungen: ",(je(86,31,t.measurementsWithParticipants$)||Mh(34,GS)).length," ")}},dependencies:[gt,Pr,xr,Ar,Tr,Rr,Er,Ir,kr,Nr,Or,Fr,ht,ft,_n,Vn,Bn,Ai,Ei,Kt,zr,Oi,ki,Ti,Ii,Ni,Ur,ni,NS,TS,ag,yo,xi,rr,vo,Uu,X0,Hn,qf,$i,Qt,jt,$r,qt,xt,Lt,ia],styles:[".filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;position:relative}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.menu-section-header[_ngcontent-%COMP%]{opacity:.7;cursor:default!important}.menu-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}"]})};var Ea=M("[AgeGroup] Load AgeGroups"),Nm=M("[AgeGroup] Load AgeGroups Success",O()),Tm=M("[AgeGroup] Load AgeGroups Failure",O()),Im=M("[AgeGroup] Load AgeGroup",O()),Om=M("[AgeGroup] Load AgeGroup Success",O()),Fm=M("[AgeGroup] Load AgeGroup Failure",O()),os=M("[AgeGroup] Create AgeGroup",O()),Pm=M("[AgeGroup] Create AgeGroup Success",O()),Lm=M("[AgeGroup] Create AgeGroup Failure",O()),ss=M("[AgeGroup] Update AgeGroup",O()),Bm=M("[AgeGroup] Update AgeGroup Success",O()),Vm=M("[AgeGroup] Update AgeGroup Failure",O()),ls=M("[AgeGroup] Delete AgeGroup",O()),jm=M("[AgeGroup] Delete AgeGroup Success",O()),zm=M("[AgeGroup] Delete AgeGroup Failure",O()),WS=M("[AgeGroup] Select AgeGroup",O());var Um=Ci("ageGroup"),ug=Fe(Um,n=>n.ageGroups),YS=Fe(Um,n=>n.loading),G9=Fe(Um,n=>n.error),xI=Fe(Um,n=>n.selectedAgeGroupId),W9=Fe(ug,xI,(n,i)=>i?n.find(e=>e.id===i):null);var AI=(n,i)=>i.value;function RI(n,i){n&1&&(d(0,"mat-error"),f(1,"Name ist erforderlich"),u())}function kI(n,i){if(n&1&&(d(0,"mat-option",5),f(1),u()),n&2){let e=i.$implicit;A("value",e.value),h(),Ve(e.label)}}function NI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geschlecht ist erforderlich"),u())}function TI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr von ist erforderlich"),u())}function II(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr muss mindestens 1900 sein"),u())}function OI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr darf maximal 2100 sein"),u())}function FI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr bis ist erforderlich"),u())}function PI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr muss mindestens 1900 sein"),u())}function LI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr darf maximal 2100 sein"),u())}function BI(n,i){n&1&&(d(0,"mat-error"),f(1,"Geburtsjahr bis muss gr\xF6\xDFer oder gleich Geburtsjahr von sein"),u())}var rc=class n{fb=s(Vi);dialogRef=s(jn);data=s(ar);form;genderOptions=[{value:"MALE",label:li.MALE},{value:"FEMALE",label:li.FEMALE},{value:"BOTH",label:li.BOTH}];constructor(){this.form=this.fb.group({name:[this.data?.name||"",xe.required],gender:[this.data?.gender||"",xe.required],birthYearFrom:[this.data?.birthYearFrom||"",[xe.required,xe.min(1900),xe.max(2100)]],birthYearTo:[this.data?.birthYearTo||"",[xe.required,xe.min(1900),xe.max(2100)]]},{validators:this.yearRangeValidator})}yearRangeValidator(i){let e=i.get("birthYearFrom")?.value,t=i.get("birthYearTo")?.value;return e&&t&&e>t?{yearRange:!0}:null}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e={name:i.name,gender:i.gender,birthYearFrom:Number(i.birthYearFrom),birthYearTo:Number(i.birthYearTo)};this.dialogRef.close(e)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-age-group-dialog"]],decls:44,vars:12,consts:[["mat-dialog-title",""],[1,"age-group-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name","required",""],["formControlName","gender","required",""],[3,"value"],["matInput","","type","number","formControlName","birthYearFrom","required","","min","1900","max","2100"],["matInput","","type","number","formControlName","birthYearTo","required","","min","1900","max","2100"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(d(0,"h2",0),f(1),u(),d(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),f(6,"Name"),u(),F(7,"input",3),rt(),T(8,RI,2,0,"mat-error"),d(9,"mat-hint"),f(10,'z.B. "Herren allgemein" oder "Damen U18"'),u()(),d(11,"mat-form-field",2)(12,"mat-label"),f(13,"Geschlecht"),u(),d(14,"mat-select",4),kt(15,kI,2,2,"mat-option",5,AI),u(),rt(),T(17,NI,2,0,"mat-error"),d(18,"mat-hint"),f(19,"F\xFCr welches Geschlecht gilt diese Altersgruppe?"),u()(),d(20,"mat-form-field",2)(21,"mat-label"),f(22,"Geburtsjahr von"),u(),F(23,"input",6),rt(),T(24,TI,2,0,"mat-error"),T(25,II,2,0,"mat-error"),T(26,OI,2,0,"mat-error"),d(27,"mat-hint"),f(28,"Startzeitpunkt der Altersspanne (z.B. 1985)"),u()(),d(29,"mat-form-field",2)(30,"mat-label"),f(31,"Geburtsjahr bis"),u(),F(32,"input",7),rt(),T(33,FI,2,0,"mat-error"),T(34,PI,2,0,"mat-error"),T(35,LI,2,0,"mat-error"),T(36,BI,2,0,"mat-error"),d(37,"mat-hint"),f(38,"Endzeitpunkt der Altersspanne (z.B. 2000)"),u()()()(),d(39,"mat-dialog-actions",8)(40,"button",9),w("click",function(){return t.onCancel()}),f(41,"Abbrechen"),u(),d(42,"button",10),w("click",function(){return t.onSave()}),f(43," Speichern "),u()()),e&2&&(h(),De(" ",t.data?"Altersgruppe bearbeiten":"Neue Altersgruppe"," "),h(2),A("formGroup",t.form),h(4),at(),h(),I(t.form.get("name")?.hasError("required")&&t.form.get("name")?.touched?8:-1),h(6),at(),h(),Nt(t.genderOptions),h(2),I(t.form.get("gender")?.hasError("required")&&t.form.get("gender")?.touched?17:-1),h(6),at(),h(),I(t.form.get("birthYearFrom")?.hasError("required")&&t.form.get("birthYearFrom")?.touched?24:-1),h(),I(t.form.get("birthYearFrom")?.hasError("min")?25:-1),h(),I(t.form.get("birthYearFrom")?.hasError("max")?26:-1),h(6),at(),h(),I(t.form.get("birthYearTo")?.hasError("required")&&t.form.get("birthYearTo")?.touched?33:-1),h(),I(t.form.get("birthYearTo")?.hasError("min")?34:-1),h(),I(t.form.get("birthYearTo")?.hasError("max")?35:-1),h(),I(t.form.hasError("yearRange")?36:-1),h(6),A("disabled",!t.form.valid))},dependencies:[gt,ji,Bi,zn,Da,Hn,Li,Un,zl,jl,Zt,oi,Kt,Br,jr,Vr,xt,Qt,jt,lr,si,Ui,zi,ht,ft,$i,$r,qt],styles:[".age-group-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};function VI(n,i){n&1&&(d(0,"div",3),F(1,"mat-spinner"),u())}function jI(n,i){n&1&&(d(0,"th",16),f(1,"ID"),u())}function zI(n,i){if(n&1&&(d(0,"td",17),f(1),u()),n&2){let e=i.$implicit;h(),Ve(e.id)}}function UI(n,i){n&1&&(d(0,"th",16),f(1,"Name"),u())}function HI(n,i){if(n&1&&(d(0,"td",17),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.name," ")}}function $I(n,i){n&1&&(d(0,"th",16),f(1," Geschlecht "),u())}function GI(n,i){if(n&1&&(d(0,"td",17),f(1),u()),n&2){let e=i.$implicit,t=L();h(),De(" ",t.getGenderLabel(e.gender)," ")}}function WI(n,i){n&1&&(d(0,"th",16),f(1," Geburtsjahr von "),u())}function YI(n,i){if(n&1&&(d(0,"td",17),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.birthYearFrom," ")}}function qI(n,i){n&1&&(d(0,"th",16),f(1," Geburtsjahr bis "),u())}function KI(n,i){if(n&1&&(d(0,"td",17),f(1),u()),n&2){let e=i.$implicit;h(),De(" ",e.birthYearTo," ")}}function XI(n,i){n&1&&(d(0,"th",18),f(1,"Aktionen"),u())}function ZI(n,i){if(n&1){let e=et();d(0,"td",17)(1,"button",19),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.openEditDialog(r))}),d(2,"mat-icon"),f(3,"edit"),u()(),d(4,"button",20),w("click",function(){let r=pe(e).$implicit,a=L();return fe(a.deleteAgeGroup(r))}),d(5,"mat-icon"),f(6,"delete"),u()()()}}function QI(n,i){n&1&&F(0,"tr",21)}function JI(n,i){n&1&&F(0,"tr",22)}var Hm=class n{store=s(ot);dialog=s(Ri);snackBar=s(or);destroy$=new S;ageGroups$;loading$;displayedColumns=["id","name","gender","birthYearFrom","birthYearTo","actions"];dataSource=new Mr([]);sortInitialized=!1;sort=Yn.required(Xt);constructor(){this.ageGroups$=this.store.select(ug),this.loading$=this.store.select(YS),St(()=>{let i=this.sort();i&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=i,this.sortInitialized=!0,i.sortChange.pipe(G(this.destroy$)).subscribe(()=>{console.log("Sort changed:",i.active,i.direction)})},100)})}ngAfterViewInit(){this.store.dispatch(Ea()),this.ageGroups$.pipe(G(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(i){return li[i]||i}openCreateDialog(){this.dialog.open(rc,{width:"500px"}).afterClosed().pipe(G(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(os({ageGroup:e})),this.snackBar.open("Altersgruppe erfolgreich erstellt","OK",{duration:3e3}))})}openEditDialog(i){this.dialog.open(rc,{width:"500px",data:i}).afterClosed().pipe(G(this.destroy$)).subscribe(t=>{t&&(this.store.dispatch(ss({id:i.id,ageGroup:t})),this.snackBar.open("Altersgruppe erfolgreich aktualisiert","OK",{duration:3e3}))})}deleteAgeGroup(i){confirm(`M\xF6chten Sie die Altersgruppe "${i.name}" wirklich l\xF6schen?`)&&(this.store.dispatch(ls({id:i.id})),this.snackBar.open("Altersgruppe erfolgreich gel\xF6scht","OK",{duration:3e3}))}refreshData(){this.store.dispatch(Ea()),this.snackBar.open("Daten werden aktualisiert...","OK",{duration:2e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-age-group-list"]],viewQuery:function(e,t){e&1&&hr(t.sort,Xt,5),e&2&&Wi()},decls:38,vars:10,consts:[[1,"header-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","matTooltip","Daten aktualisieren",3,"click"],[1,"loading-container"],["mat-table","","matSort","",1,"age-group-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","gender"],["matColumnDef","birthYearFrom"],["matColumnDef","birthYearTo"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","matTooltip","Bearbeiten",3,"click"],["mat-icon-button","","color","warn","matTooltip","L\xF6schen",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),f(3,"Altersgruppen"),u()(),d(4,"mat-card-content")(5,"div",0)(6,"button",1),w("click",function(){return t.openCreateDialog()}),d(7,"mat-icon"),f(8,"add"),u(),f(9," Neue Altersgruppe "),u(),d(10,"button",2),w("click",function(){return t.refreshData()}),d(11,"mat-icon"),f(12,"refresh"),u(),f(13," Aktualisieren "),u()(),T(14,VI,2,0,"div",3),Re(15,"async"),d(16,"table",4),Re(17,"async"),Ge(18,5),re(19,jI,2,0,"th",6)(20,zI,2,1,"td",7),We(),Ge(21,8),re(22,UI,2,0,"th",6)(23,HI,2,1,"td",7),We(),Ge(24,9),re(25,$I,2,0,"th",6)(26,GI,2,1,"td",7),We(),Ge(27,10),re(28,WI,2,0,"th",6)(29,YI,2,1,"td",7),We(),Ge(30,11),re(31,qI,2,0,"th",6)(32,KI,2,1,"td",7),We(),Ge(33,12),re(34,XI,2,0,"th",13)(35,ZI,7,0,"td",7),We(),re(36,QI,1,0,"tr",14)(37,JI,1,0,"tr",15),u()()()),e&2&&(h(14),I(je(15,6,t.loading$)?14:-1),h(2),B("hidden",je(17,8,t.loading$)),A("dataSource",t.dataSource),h(20),A("matHeaderRowDef",t.displayedColumns),h(),A("matRowDefColumns",t.displayedColumns))},dependencies:[gt,Pr,xr,Ar,Tr,Rr,Er,Ir,kr,Nr,Or,Fr,ht,ft,_n,Vn,Bn,Ai,Ei,Kt,zr,Oi,ki,Ti,Ii,Ni,Ur,ni,Do,Xt,Co,Lt],styles:[".header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.age-group-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]})};var cs=M("[Auth] Login",O()),ac=M("[Auth] Login Success",O()),$m=M("[Auth] Login Failure",O()),ds=M("[Auth] Logout"),oc=M("[Auth] Logout Success"),Gr=M("[Auth] Check Auth"),Gm=M("[Auth] Check Auth Success",O()),sc=M("[Auth] Check Auth Failure");var lc=Ci("auth"),Wm=Fe(lc,n=>n.isAuthenticated),NY=Fe(lc,n=>n.token),qS=Fe(lc,n=>n.username),KS=Fe(lc,n=>n.loading),XS=Fe(lc,n=>n.error);var Ym=class n{store=s(ot);username$;constructor(){this.username$=this.store.select(qS)}logout(){this.store.dispatch(ds())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-dashboard"]],decls:30,vars:4,consts:[["menu","matMenu"],["color","primary"],[1,"spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","","disabled","",1,"user-info"],["mat-menu-item","",3,"click"],[1,"dashboard-container"],["label","Altersgruppen"],["label","Rennen"],["label","Teilnehmer"],["label","Messungen"]],template:function(e,t){if(e&1&&(d(0,"mat-toolbar",1)(1,"span"),f(2,"TimeControl - Zeitnahme System"),u(),F(3,"span",2),d(4,"button",3)(5,"mat-icon"),f(6,"account_circle"),u()(),d(7,"mat-menu",null,0)(9,"div",4)(10,"mat-icon"),f(11,"person"),u(),d(12,"span"),f(13),Re(14,"async"),u()(),d(15,"button",5),w("click",function(){return t.logout()}),d(16,"mat-icon"),f(17,"logout"),u(),d(18,"span"),f(19,"Abmelden"),u()()()(),d(20,"div",6)(21,"mat-tab-group")(22,"mat-tab",7),F(23,"app-age-group-list"),u(),d(24,"mat-tab",8),F(25,"app-race-list"),u(),d(26,"mat-tab",9),F(27,"app-participant-list"),u(),d(28,"mat-tab",10),F(29,"app-measurement-list"),u()()()),e&2){let r=mt(8);h(4),A("matMenuTriggerFor",r),h(9),Ve(je(14,2,t.username$))}},dependencies:[gt,Dy,df,Cy,My,wy,ht,_n,Vn,Bn,yo,xi,rr,vo,zu,sm,km,Hm,Lt],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:20px}mat-toolbar[_ngcontent-%COMP%]{margin-bottom:20px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 16px;cursor:default}"]})};function e1(n,i){n&1&&(d(0,"mat-error"),f(1,"Benutzername ist erforderlich"),u())}function t1(n,i){n&1&&(d(0,"mat-error"),f(1,"Passwort ist erforderlich"),u())}function n1(n,i){n&1&&(d(0,"div",8)(1,"mat-icon"),f(2,"error"),u(),d(3,"span"),f(4),u()()),n&2&&(h(4),Ve(i))}function i1(n,i){n&1&&(F(0,"mat-spinner",10),d(1,"span"),f(2,"Anmelden..."),u())}function r1(n,i){n&1&&(d(0,"span"),f(1,"Anmelden"),u())}var qm=class n{fb=s(Vi);store=s(ot);router=s(On);destroy$=new S;loginForm;loading$;error$;constructor(){this.loginForm=this.fb.group({username:["time-control",xe.required],password:["time-control",xe.required]}),this.loading$=this.store.select(KS),this.error$=this.store.select(XS)}ngOnInit(){this.store.select(Wm).pipe(G(this.destroy$)).subscribe(i=>{i&&this.router.navigate(["/dashboard"]).then()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSubmit(){this.loginForm.valid&&this.store.dispatch(cs({credentials:this.loginForm.value}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-login"]],decls:32,vars:12,consts:[[1,"login-container"],[1,"login-card"],[1,"title-with-icon"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","username","required","","autocomplete","username"],["matPrefix",""],["matInput","","type","password","formControlName","password","required","","autocomplete","current-password"],[1,"error-message"],["mat-raised-button","","color","primary","type","submit",1,"login-button",3,"disabled"],["diameter","20"]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title")(4,"div",2)(5,"mat-icon"),f(6,"access_time"),u(),d(7,"span"),f(8,"TimeControl Login"),u()()()(),d(9,"mat-card-content")(10,"form",3),w("ngSubmit",function(){return t.onSubmit()}),d(11,"mat-form-field",4)(12,"mat-label"),f(13,"Benutzername"),u(),F(14,"input",5),rt(),d(15,"mat-icon",6),f(16,"person"),u(),T(17,e1,2,0,"mat-error"),u(),d(18,"mat-form-field",4)(19,"mat-label"),f(20,"Passwort"),u(),F(21,"input",7),rt(),d(22,"mat-icon",6),f(23,"lock"),u(),T(24,t1,2,0,"mat-error"),u(),T(25,n1,5,1,"div",8),Re(26,"async"),d(27,"button",9),Re(28,"async"),T(29,i1,3,0),Re(30,"async"),mr(31,r1,2,0,"span"),u()()()()()),e&2){let r;h(10),A("formGroup",t.loginForm),h(4),at(),h(3),I(t.loginForm.get("username")?.hasError("required")&&t.loginForm.get("username")?.touched?17:-1),h(4),at(),h(3),I(t.loginForm.get("password")?.hasError("required")&&t.loginForm.get("password")?.touched?24:-1),h(),I((r=je(26,6,t.error$))?25:-1,r),h(2),A("disabled",!t.loginForm.valid||je(28,8,t.loading$)),h(2),I(je(30,10,t.loading$)?29:31)}},dependencies:[gt,ji,Bi,zn,Hn,Li,Un,Zt,oi,Oi,ki,Ti,Ii,Ni,xt,Qt,jt,si,Kf,Ui,zi,ht,ft,Ai,Ei,Vn,Bn,Lt],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:20px}.login-card[_ngcontent-%COMP%]{max-width:450px;width:100%;box-shadow:0 8px 32px #0000001a}mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}.title-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:24px;justify-content:center;width:100%}.title-with-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:100%;height:48px;font-size:16px;display:flex;align-items:center;justify-content:center;gap:10px}.error-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#f44336;background-color:#ffebee;padding:12px;border-radius:4px;font-size:14px}.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}mat-spinner[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:1})};var ZS=(n,i)=>{let e=s(ot),t=s(On);return e.dispatch(Gr()),e.select(Wm).pipe(Ie(1),x(r=>r?!0:(t.navigate(["/login"]),!1)))};var QS=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:qm},{path:"dashboard",component:Ym,canActivate:[ZS]},{path:"**",redirectTo:"/login"}];var dc="PERFORM_ACTION",a1="REFRESH",rC="RESET",aC="ROLLBACK",oC="COMMIT",sC="SWEEP",lC="TOGGLE_ACTION",o1="SET_ACTIONS_ACTIVE",cC="JUMP_TO_STATE",dC="JUMP_TO_ACTION",Mg="IMPORT_STATE",uC="LOCK_CHANGES",mC="PAUSE_RECORDING",ms=class{constructor(i,e){if(this.action=i,this.timestamp=e,this.type=dc,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},hg=class{constructor(){this.type=a1}},pg=class{constructor(i){this.timestamp=i,this.type=rC}},fg=class{constructor(i){this.timestamp=i,this.type=aC}},gg=class{constructor(i){this.timestamp=i,this.type=oC}},_g=class{constructor(){this.type=sC}},bg=class{constructor(i){this.id=i,this.type=lC}};var vg=class{constructor(i){this.index=i,this.type=cC}},yg=class{constructor(i){this.actionId=i,this.type=dC}},Sg=class{constructor(i){this.nextLiftedState=i,this.type=Mg}},Cg=class{constructor(i){this.status=i,this.type=uC}},Dg=class{constructor(i){this.status=i,this.type=mC}};var Qm=new b("@ngrx/store-devtools Options"),JS=new b("@ngrx/store-devtools Initial Config");function hC(){return null}var s1="NgRx Store DevTools";function l1(n){let i={maxAge:!1,monitor:hC,actionSanitizer:void 0,stateSanitizer:void 0,name:s1,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof n=="function"?n():n,t=e.logOnly?{pause:!0,export:!0,test:!0}:!1,r=e.features||t||i.features;r.import===!0&&(r.import="custom");let a=Object.assign({},i,{features:r},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function eC(n,i){return n.filter(e=>i.indexOf(e)<0)}function pC(n){let{computedStates:i,currentStateIndex:e}=n;if(e>=i.length){let{state:r}=i[i.length-1];return r}let{state:t}=i[e];return t}function cc(n){return new ms(n,+Date.now())}function c1(n,i){return Object.keys(i).reduce((e,t)=>{let r=Number(t);return e[r]=fC(n,i[r],r),e},{})}function fC(n,i,e){return v(g({},i),{action:n(i.action,e)})}function d1(n,i){return i.map((e,t)=>({state:gC(n,e.state,t),error:e.error}))}function gC(n,i,e){return n(i,e)}function _C(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function u1(n,i,e,t){let r=[],a={},o=[];return n.stagedActionIds.forEach((l,c)=>{let m=n.actionsById[l];m&&(c&&xg(n.computedStates[c],m,i,e,t)||(a[l]=m,r.push(l),o.push(n.computedStates[c])))}),v(g({},n),{stagedActionIds:r,actionsById:a,computedStates:o})}function xg(n,i,e,t,r){let a=e&&!e(n,i.action),o=t&&!i.action.type.match(t.map(c=>tC(c)).join("|")),l=r&&i.action.type.match(r.map(c=>tC(c)).join("|"));return a||o||l}function tC(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function bC(n){return{ngZone:n?s(Z):null,connectInZone:n}}var Jm=(()=>{class n extends Si{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Ce(n)))(r||n)}})()}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),Km={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},wg=new b("@ngrx/store-devtools Redux Devtools Extension"),vC=(()=>{class n{constructor(e,t,r){this.config=t,this.dispatcher=r,this.zoneConfig=bC(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===dc){if(t.isLocked||t.isPaused)return;let r=pC(t);if(_C(this.config)&&xg(r,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?gC(this.config.stateSanitizer,r,t.currentStateIndex):r,o=this.config.actionSanitizer?fC(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,a))}else{let r=v(g({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?c1(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?d1(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new nt(e=>{let t=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(r=>e.next(r)),t.unsubscribe}):vt}createActionStreams(){let e=this.createChangesObservable().pipe(bc()),t=e.pipe(me(m=>m.type===Km.START)),r=e.pipe(me(m=>m.type===Km.STOP)),a=e.pipe(me(m=>m.type===Km.DISPATCH),x(m=>this.unwrapAction(m.payload)),Yr(m=>m.type===Mg?this.dispatcher.pipe(me(p=>p.type===Gd),Tg(1e3),di(1e3),x(()=>m),be(()=>D(m)),Ie(1)):D(m))),l=e.pipe(me(m=>m.type===Km.ACTION),x(m=>this.unwrapAction(m.payload))).pipe(G(r)),c=a.pipe(G(r));this.start$=t.pipe(G(r)),this.actions$=this.start$.pipe(Oe(()=>l)),this.liftedActions$=this.start$.pipe(Oe(()=>c))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}static{this.\u0275fac=function(t){return new(t||n)($(wg),$(Qm),$(Jm))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})(),Zm={type:gl},m1="@ngrx/store-devtools/recompute",h1={type:m1};function yC(n,i,e,t,r){if(t)return{state:e,error:"Interrupted by an error up the chain"};let a=e,o;try{a=n(e,i)}catch(l){o=l.toString(),r.handleError(l)}return{state:a,error:o}}function Xm(n,i,e,t,r,a,o,l,c){if(i>=n.length&&n.length===a.length)return n;let m=n.slice(0,i),p=a.length-(c?1:0);for(let _=i;_<p;_++){let y=a[_],P=r[y].action,H=m[_-1],q=H?H.state:t,oe=H?H.error:void 0,se=o.indexOf(y)>-1?H:yC(e,P,q,oe,l);m.push(se)}return c&&m.push(n[n.length-1]),m}function p1(n,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:cc(Zm)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function f1(n,i,e,t,r={}){return a=>(o,l)=>{let{monitorState:c,actionsById:m,nextActionId:p,stagedActionIds:_,skippedActionIds:y,committedState:P,currentStateIndex:H,computedStates:q,isLocked:oe,isPaused:_e}=o||i;o||(m=Object.create(m));function se(Ue){let ye=Ue,Et=_.slice(1,ye+1);for(let bt=0;bt<Et.length;bt++)if(q[bt+1].error){ye=bt,Et=_.slice(1,ye+1);break}else delete m[Et[bt]];y=y.filter(bt=>Et.indexOf(bt)===-1),_=[0,..._.slice(ye+1)],P=q[ye].state,q=q.slice(ye),H=H>ye?H-ye:0}function de(){m={0:cc(Zm)},p=1,_=[0],y=[],P=q[H].state,H=0,q=[]}let Ae=0;switch(l.type){case uC:{oe=l.status,Ae=1/0;break}case mC:{_e=l.status,_e?(_=[..._,p],m[p]=new ms({type:"@ngrx/devtools/pause"},+Date.now()),p++,Ae=_.length-1,q=q.concat(q[q.length-1]),H===_.length-2&&H++,Ae=1/0):de();break}case rC:{m={0:cc(Zm)},p=1,_=[0],y=[],P=n,H=0,q=[];break}case oC:{de();break}case aC:{m={0:cc(Zm)},p=1,_=[0],y=[],H=0,q=[];break}case lC:{let{id:Ue}=l;y.indexOf(Ue)===-1?y=[Ue,...y]:y=y.filter(Et=>Et!==Ue),Ae=_.indexOf(Ue);break}case o1:{let{start:Ue,end:ye,active:Et}=l,bt=[];for(let sn=Ue;sn<ye;sn++)bt.push(sn);Et?y=eC(y,bt):y=[...y,...bt],Ae=_.indexOf(Ue);break}case cC:{H=l.index,Ae=1/0;break}case dC:{let Ue=_.indexOf(l.actionId);Ue!==-1&&(H=Ue),Ae=1/0;break}case sC:{_=eC(_,y),y=[],H=Math.min(H,_.length-1);break}case dc:{if(oe)return o||i;if(_e||o&&xg(o.computedStates[H],l,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let ye=q[q.length-1];q=[...q.slice(0,-1),yC(a,l.action,ye.state,ye.error,e)],Ae=1/0;break}r.maxAge&&_.length===r.maxAge&&se(1),H===_.length-1&&H++;let Ue=p++;m[Ue]=l,_=[..._,Ue],Ae=_.length-1;break}case Mg:{({monitorState:c,actionsById:m,nextActionId:p,stagedActionIds:_,skippedActionIds:y,committedState:P,currentStateIndex:H,computedStates:q,isLocked:oe,isPaused:_e}=l.nextLiftedState);break}case gl:{Ae=0,r.maxAge&&_.length>r.maxAge&&(q=Xm(q,Ae,a,P,m,_,y,e,_e),se(_.length-r.maxAge),Ae=1/0);break}case Gd:{if(q.filter(ye=>ye.error).length>0)Ae=0,r.maxAge&&_.length>r.maxAge&&(q=Xm(q,Ae,a,P,m,_,y,e,_e),se(_.length-r.maxAge),Ae=1/0);else{if(!_e&&!oe){H===_.length-1&&H++;let ye=p++;m[ye]=new ms(l,+Date.now()),_=[..._,ye],Ae=_.length-1,q=Xm(q,Ae,a,P,m,_,y,e,_e)}q=q.map(ye=>v(g({},ye),{state:a(ye.state,h1)})),H=_.length-1,r.maxAge&&_.length>r.maxAge&&se(_.length-r.maxAge),Ae=1/0}break}default:{Ae=1/0;break}}return q=Xm(q,Ae,a,P,m,_,y,e,_e),c=t(c,l),{monitorState:c,actionsById:m,nextActionId:p,stagedActionIds:_,skippedActionIds:y,committedState:P,currentStateIndex:H,computedStates:q,isLocked:oe,isPaused:_e}}}var nC=(()=>{class n{constructor(e,t,r,a,o,l,c,m){let p=p1(c,m.monitor),_=f1(c,p,l,m.monitor,m),y=Pe(Pe(t.asObservable().pipe(ur(1)),a.actions$).pipe(x(cc)),e,a.liftedActions$).pipe(mc(uc)),P=r.pipe(x(_)),H=bC(m.connectInZone),q=new Wr(1);this.liftedStateSubscription=y.pipe(vc(P),iC(H),_c(({state:se},[de,Ae])=>{let Ue=Ae(se,de);return de.type!==dc&&_C(m)&&(Ue=u1(Ue,m.predicate,m.actionsSafelist,m.actionsBlocklist)),a.notify(de,Ue),{state:Ue,action:de}},{state:p,action:null})).subscribe(({state:se,action:de})=>{if(q.next(se),de.type===dc){let Ae=de.action;o.next(Ae)}}),this.extensionStartSubscription=a.start$.pipe(iC(H)).subscribe(()=>{this.refresh()});let oe=q.asObservable(),_e=oe.pipe(x(pC));Object.defineProperty(_e,"state",{value:zd(_e,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=oe,this.state=_e}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new ms(e,+Date.now()))}refresh(){this.dispatch(new hg)}reset(){this.dispatch(new pg(+Date.now()))}rollback(){this.dispatch(new fg(+Date.now()))}commit(){this.dispatch(new gg(+Date.now()))}sweep(){this.dispatch(new _g)}toggleAction(e){this.dispatch(new bg(e))}jumpToAction(e){this.dispatch(new yg(e))}jumpToState(e){this.dispatch(new vg(e))}importState(e){this.dispatch(new Sg(e))}lockChanges(e){this.dispatch(new Cg(e))}pauseRecording(e){this.dispatch(new Dg(e))}static{this.\u0275fac=function(t){return new(t||n)($(Jm),$(Si),$(_a),$(vC),$(ba),$(Wn),$(_l),$(Qm))}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac})}}return n})();function iC({ngZone:n,connectInZone:i}){return e=>i?new nt(t=>e.subscribe({next:r=>n.run(()=>t.next(r)),error:r=>n.run(()=>t.error(r)),complete:()=>n.run(()=>t.complete())})):e}var g1=new b("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function _1(n,i){return!!n||i.monitor!==hC}function b1(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function v1(n){return n.state}function SC(n={}){return Jt([vC,Jm,nC,{provide:JS,useValue:n},{provide:g1,deps:[wg,Qm],useFactory:_1},{provide:wg,useFactory:b1},{provide:Qm,deps:[JS],useFactory:l1},{provide:ho,deps:[nC],useFactory:v1},{provide:mo,useExisting:Jm}])}var y1={participants:[],selectedParticipantId:null,loading:!1,pdfExportLoading:!1,error:null},CC=Di(y1,N(ci,n=>v(g({},n),{loading:!0,error:null})),N(Hu,(n,{participants:i})=>v(g({},n),{participants:i,loading:!1})),N($u,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Gu,n=>v(g({},n),{loading:!0,error:null})),N(Wu,(n,{participant:i})=>v(g({},n),{participants:n.participants.some(e=>e.id===i.id)?n.participants.map(e=>e.id===i.id?i:e):[...n.participants,i],loading:!1})),N(Yu,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Vo,n=>v(g({},n),{loading:!0,error:null})),N(qu,(n,{participant:i})=>v(g({},n),{participants:[...n.participants,i],loading:!1})),N(Ku,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(jo,n=>v(g({},n),{loading:!0,error:null})),N(Xu,(n,{participant:i})=>v(g({},n),{participants:n.participants.map(e=>e.id===i.id?i:e),loading:!1})),N(Zu,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(zo,n=>v(g({},n),{loading:!0,error:null})),N(Qu,(n,{id:i})=>v(g({},n),{participants:n.participants.filter(e=>e.id!==i),selectedParticipantId:n.selectedParticipantId===i?null:n.selectedParticipantId,loading:!1})),N(Ju,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Uo,n=>v(g({},n),{loading:!0,error:null})),N(em,(n,{raceId:i})=>v(g({},n),{participants:n.participants.filter(e=>e.race?.id!==i),loading:!1})),N(tm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(AS,(n,{id:i})=>v(g({},n),{selectedParticipantId:i})),N(Ho,$o,Go,n=>v(g({},n),{pdfExportLoading:!0,error:null})),N(Zl,Ql,Jl,n=>v(g({},n),{pdfExportLoading:!1})),N(nm,im,rm,(n,{error:i})=>v(g({},n),{pdfExportLoading:!1,error:i})));var S1={measurements:[],selectedMeasurementId:null,loading:!1,error:null,continuousModeEnabled:!1,scheduledImportEnabled:!1},DC=Di(S1,N(Ma,n=>v(g({},n),{loading:!0,error:null})),N(cm,(n,{measurements:i})=>v(g({},n),{measurements:i,loading:!1})),N(dm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(um,n=>v(g({},n),{loading:!0,error:null})),N(mm,(n,{measurements:i})=>v(g({},n),{measurements:i,loading:!1})),N(hm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(pm,n=>v(g({},n),{loading:!0,error:null})),N(fm,(n,{measurement:i})=>v(g({},n),{measurements:n.measurements.some(e=>e.id===i.id)?n.measurements.map(e=>e.id===i.id?i:e):[...n.measurements,i],loading:!1})),N(gm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Yo,n=>v(g({},n),{loading:!0,error:null})),N(_m,(n,{measurement:i})=>v(g({},n),{measurements:[...n.measurements,i],loading:!1})),N(bm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(qo,n=>v(g({},n),{loading:!0,error:null})),N(vm,(n,{measurement:i})=>v(g({},n),{measurements:n.measurements.map(e=>e.id===i.id?i:e),loading:!1})),N(ym,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Ko,n=>v(g({},n),{loading:!0,error:null})),N(Sm,(n,{id:i})=>v(g({},n),{measurements:n.measurements.filter(e=>e.id!==i),selectedMeasurementId:n.selectedMeasurementId===i?null:n.selectedMeasurementId,loading:!1})),N(Cm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(IS,(n,{id:i})=>v(g({},n),{selectedMeasurementId:i})),N(Xo,n=>v(g({},n),{loading:!0,error:null})),N(xa,n=>v(g({},n),{measurements:[],selectedMeasurementId:null,loading:!1})),N(Zo,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Qo,n=>v(g({},n),{loading:!0,error:null})),N(Jo,(n,{enabled:i})=>v(g({},n),{continuousModeEnabled:i,loading:!1})),N(es,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(ts,n=>v(g({},n),{loading:!0,error:null})),N(ns,(n,{enabled:i})=>v(g({},n),{scheduledImportEnabled:i,loading:!1})),N(is,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(rs,n=>v(g({},n),{loading:!0,error:null})),N(Dm,(n,{enabled:i})=>v(g({},n),{scheduledImportEnabled:i,loading:!1})),N(wm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})));var Eg={token:null,username:null,isAuthenticated:!1,loading:!1,error:null},wC=Di(Eg,N(cs,n=>v(g({},n),{loading:!0,error:null})),N(ac,(n,{response:i})=>v(g({},n),{token:i.access_token||i.token||null,username:i.username||null,isAuthenticated:!0,loading:!1,error:null})),N($m,(n,{error:i})=>v(g({},n),{loading:!1,error:i,isAuthenticated:!1,token:null,username:null})),N(ds,n=>v(g({},n),{loading:!0})),N(oc,()=>g({},Eg)),N(Gr,n=>v(g({},n),{loading:!0})),N(Gm,(n,{token:i,username:e})=>v(g({},n),{token:i,username:e,isAuthenticated:!0,loading:!1})),N(sc,()=>v(g({},Eg),{loading:!1})));var C1={ageGroups:[],selectedAgeGroupId:null,loading:!1,error:null},MC=Di(C1,N(Ea,n=>v(g({},n),{loading:!0,error:null})),N(Nm,(n,{ageGroups:i})=>v(g({},n),{ageGroups:i,loading:!1})),N(Tm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Im,n=>v(g({},n),{loading:!0,error:null})),N(Om,(n,{ageGroup:i})=>v(g({},n),{ageGroups:n.ageGroups.some(e=>e.id===i.id)?n.ageGroups.map(e=>e.id===i.id?i:e):[...n.ageGroups,i],loading:!1})),N(Fm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(os,n=>v(g({},n),{loading:!0,error:null})),N(Pm,(n,{ageGroup:i})=>v(g({},n),{ageGroups:[...n.ageGroups,i],loading:!1})),N(Lm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(ss,n=>v(g({},n),{loading:!0,error:null})),N(Bm,(n,{ageGroup:i})=>v(g({},n),{ageGroups:n.ageGroups.map(e=>e.id===i.id?i:e),loading:!1})),N(Vm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(ls,n=>v(g({},n),{loading:!0,error:null})),N(jm,(n,{id:i})=>v(g({},n),{ageGroups:n.ageGroups.filter(e=>e.id!==i),selectedAgeGroupId:n.selectedAgeGroupId===i?null:n.selectedAgeGroupId,loading:!1})),N(zm,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(WS,(n,{id:i})=>v(g({},n),{selectedAgeGroupId:i})));var D1={races:[],selectedRaceId:null,loading:!1,error:null},xC=Di(D1,N(ii,n=>v(g({},n),{loading:!0,error:null})),N(pu,(n,{races:i})=>v(g({},n),{races:i,loading:!1})),N(fu,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(wo,n=>v(g({},n),{loading:!0})),N(gu,(n,{race:i})=>v(g({},n),{races:[...n.races,i],loading:!1})),N(_u,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Mo,n=>v(g({},n),{loading:!0})),N(bu,(n,{race:i})=>v(g({},n),{races:n.races.map(e=>e.id===i.id?i:e),loading:!1})),N(vu,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(xo,n=>v(g({},n),{loading:!0})),N(yu,(n,{id:i})=>v(g({},n),{races:n.races.filter(e=>e.id!==i),loading:!1})),N(Su,(n,{error:i})=>v(g({},n),{loading:!1,error:i})),N(Eo,(n,{id:i})=>v(g({},n),{selectedRaceId:i})));var Gi={production:!1,apiUrl:"http://localhost:18000"};var eh=class n{http=s(mn);apiUrl=`${Gi.apiUrl}/participants`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}deleteByRaceId(i){return this.http.delete(`${this.apiUrl}/race/${i}`)}exportAllToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/all/${i}`,{responseType:"blob"})}exportByGenderToPdf(i,e){return this.http.get(`${this.apiUrl}/export/pdf/gender/${i}/${e}`,{responseType:"blob"})}exportAllAgeGroupsToPdf(i){return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/${i}`,{responseType:"blob"})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var th=class n{actions$=s(Gn);participantService=s(eh);loadParticipants$=Ee(()=>this.actions$.pipe(ce(ci),we(()=>this.participantService.getAll().pipe(x(i=>Hu({participants:i})),be(i=>D($u({error:i.message||"Failed to load participants"})))))));loadParticipant$=Ee(()=>this.actions$.pipe(ce(Gu),we(({id:i})=>this.participantService.getById(i).pipe(x(e=>Wu({participant:e})),be(e=>D(Yu({error:e.message||"Failed to load participant"})))))));createParticipant$=Ee(()=>this.actions$.pipe(ce(Vo),we(({participant:i})=>this.participantService.create(i).pipe(x(e=>qu({participant:e})),be(e=>D(Ku({error:e.message||"Failed to create participant"})))))));updateParticipant$=Ee(()=>this.actions$.pipe(ce(jo),we(({id:i,participant:e})=>this.participantService.update(i,e).pipe(x(t=>Xu({participant:t})),be(t=>D(Zu({error:t.message||"Failed to update participant"})))))));deleteParticipant$=Ee(()=>this.actions$.pipe(ce(zo),we(({id:i})=>this.participantService.delete(i).pipe(x(()=>Qu({id:i})),be(e=>D(Ju({error:e.message||"Failed to delete participant"})))))));deleteParticipantsByRaceId$=Ee(()=>this.actions$.pipe(ce(Uo),we(({raceId:i})=>this.participantService.deleteByRaceId(i).pipe(x(()=>em({raceId:i})),be(e=>D(tm({error:e.message||"Failed to delete participants by race"})))))));exportAllPdf$=Ee(()=>this.actions$.pipe(ce(Ho),we(({raceId:i})=>this.participantService.exportAllToPdf(i).pipe(x(e=>Zl({blob:e,filename:"gesamtwertung.pdf"})),be(e=>D(nm({error:e.message||"Failed to export PDF"})))))));exportByGenderPdf$=Ee(()=>this.actions$.pipe(ce($o),we(({gender:i,raceId:e})=>this.participantService.exportByGenderToPdf(i,e).pipe(x(t=>Ql({blob:t,filename:`wertung_${i.toLowerCase()}.pdf`})),be(t=>D(im({error:t.message||"Failed to export PDF"})))))));exportAllAgeGroupsPdf$=Ee(()=>this.actions$.pipe(ce(Go),we(({raceId:i})=>this.participantService.exportAllAgeGroupsToPdf(i).pipe(x(e=>Jl({blob:e,filename:"wertung_altersklassen.pdf"})),be(e=>D(rm({error:e.message||"Failed to export PDF"})))))));downloadPdf$=Ee(()=>this.actions$.pipe(ce(Zl,Ql,Jl),it(({blob:i,filename:e})=>{let t=window.URL.createObjectURL(i),r=document.createElement("a");r.href=t,r.download=e,r.click(),window.URL.revokeObjectURL(t)})),{dispatch:!1});static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var nh=class n{http=s(mn);apiUrl=`${Gi.apiUrl}/measurements`;getAll(){return this.http.get(this.apiUrl)}getByParticipant(i){return this.http.get(`${this.apiUrl}/participant/${i}`)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}reset(i){return this.http.delete(`${this.apiUrl}/reset`,{params:{resetDevice:i.toString()},responseType:"text"})}setContinuousMode(i){return this.http.put(`${this.apiUrl}/continuous-mode`,null,{params:{enable:i.toString()},responseType:"text"})}setScheduledImport(i){return this.http.put(`${this.apiUrl}/scheduled-import`,null,{params:{enable:i.toString()},responseType:"text"})}getScheduledImportStatus(){return this.http.get(`${this.apiUrl}/scheduled-import/status`)}syncMeasurementsToParticipants(){return this.http.post(`${this.apiUrl}/sync-to-participants`,null,{responseType:"text"})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var ih=class n{actions$=s(Gn);measurementService=s(nh);loadMeasurements$=Ee(()=>this.actions$.pipe(ce(Ma),we(()=>this.measurementService.getAll().pipe(x(i=>cm({measurements:i})),be(i=>D(dm({error:i.message||"Failed to load measurements"})))))));loadMeasurementsByParticipant$=Ee(()=>this.actions$.pipe(ce(um),we(({participantId:i})=>this.measurementService.getByParticipant(i).pipe(x(e=>mm({measurements:e})),be(e=>D(hm({error:e.message||"Failed to load measurements by participant"})))))));loadMeasurement$=Ee(()=>this.actions$.pipe(ce(pm),we(({id:i})=>this.measurementService.getById(i).pipe(x(e=>fm({measurement:e})),be(e=>D(gm({error:e.message||"Failed to load measurement"})))))));createMeasurement$=Ee(()=>this.actions$.pipe(ce(Yo),we(({measurement:i})=>this.measurementService.create(i).pipe(x(e=>_m({measurement:e})),be(e=>D(bm({error:e.message||"Failed to create measurement"})))))));updateMeasurement$=Ee(()=>this.actions$.pipe(ce(qo),we(({id:i,measurement:e})=>this.measurementService.update(i,e).pipe(x(t=>vm({measurement:t})),be(t=>D(ym({error:t.message||"Failed to update measurement"})))))));deleteMeasurement$=Ee(()=>this.actions$.pipe(ce(Ko),we(({id:i})=>this.measurementService.delete(i).pipe(x(()=>Sm({id:i})),be(e=>D(Cm({error:e.message||"Failed to delete measurement"})))))));resetMeasurements$=Ee(()=>this.actions$.pipe(ce(Xo),we(({resetDevice:i})=>this.measurementService.reset(i).pipe(x(()=>xa()),be(e=>D(Zo({error:e.message||"Failed to reset measurements"})))))));reloadAfterReset$=Ee(()=>this.actions$.pipe(ce(xa),x(()=>Ma())));setContinuousMode$=Ee(()=>this.actions$.pipe(ce(Qo),we(({enable:i})=>this.measurementService.setContinuousMode(i).pipe(x(()=>Jo({enabled:i})),be(e=>D(es({error:e.message||"Failed to set continuous mode"})))))));setScheduledImport$=Ee(()=>this.actions$.pipe(ce(ts),we(({enable:i})=>this.measurementService.setScheduledImport(i).pipe(x(()=>ns({enabled:i})),be(e=>D(is({error:e.message||"Failed to set scheduled import"})))))));loadScheduledImportStatus$=Ee(()=>this.actions$.pipe(ce(rs),we(()=>this.measurementService.getScheduledImportStatus().pipe(x(i=>Dm({enabled:i})),be(i=>D(wm({error:i.message||"Failed to load scheduled import status"})))))));syncMeasurementsToParticipants$=Ee(()=>this.actions$.pipe(ce(Mm),we(()=>this.measurementService.syncMeasurementsToParticipants().pipe(x(i=>xm({message:i})),be(i=>D(Em({error:i.message||"Failed to sync measurements to participants"})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var hs=class n{http=s(mn);apiUrl=`${Gi.apiUrl}/login`;TOKEN_KEY="auth_token";USERNAME_KEY="auth_username";login(i){return this.http.post(this.apiUrl,i).pipe(it(e=>{let t=e.access_token||e.token;t&&(this.setToken(t),this.setUsername(i.username))}))}logout(){localStorage.removeItem(this.TOKEN_KEY),localStorage.removeItem(this.USERNAME_KEY)}getToken(){return localStorage.getItem(this.TOKEN_KEY)}getUsername(){return localStorage.getItem(this.USERNAME_KEY)}isAuthenticated(){let i=this.getToken();return i?!this.isTokenExpired(i):!1}isTokenExpired(i){try{let e=this.decodeToken(i);if(!e.exp)return!1;let t=e.exp*1e3;return Date.now()>=t}catch{return!0}}decodeToken(i){try{let e=i.split(".")[1],t=atob(e);return JSON.parse(t)}catch{throw new Error("Invalid token format")}}setToken(i){localStorage.setItem(this.TOKEN_KEY,i)}setUsername(i){localStorage.setItem(this.USERNAME_KEY,i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var rh=class n{actions$=s(Gn);authService=s(hs);router=s(On);login$=Ee(()=>this.actions$.pipe(ce(cs),we(({credentials:i})=>this.authService.login(i).pipe(x(e=>{let t=v(g({},e),{username:i.username});return ac({response:t})}),be(e=>D($m({error:e.error?.message||e.message||"Login fehlgeschlagen"})))))));loginSuccess$=Ee(()=>this.actions$.pipe(ce(ac),it(()=>{this.router.navigate(["/dashboard"]).then()})),{dispatch:!1});logout$=Ee(()=>this.actions$.pipe(ce(ds),it(()=>{this.authService.logout()}),x(()=>oc())));logoutSuccess$=Ee(()=>this.actions$.pipe(ce(oc),it(()=>{this.router.navigate(["/login"]).then()})),{dispatch:!1});checkAuth$=Ee(()=>this.actions$.pipe(ce(Gr),x(()=>{let i=this.authService.getToken(),e=this.authService.getUsername();return i&&e?this.authService.isTokenExpired(i)?(this.authService.logout(),sc()):Gm({token:i,username:e}):sc()})));static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var ah=class n{http=s(mn);apiUrl=`${Gi.apiUrl}/age-groups`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var oh=class n{actions$=s(Gn);ageGroupService=s(ah);loadAgeGroups$=Ee(()=>this.actions$.pipe(ce(Ea),we(()=>this.ageGroupService.getAll().pipe(x(i=>Nm({ageGroups:i})),be(i=>D(Tm({error:i.message||"Failed to load age groups"})))))));loadAgeGroup$=Ee(()=>this.actions$.pipe(ce(Im),we(({id:i})=>this.ageGroupService.getById(i).pipe(x(e=>Om({ageGroup:e})),be(e=>D(Fm({error:e.message||"Failed to load age group"})))))));createAgeGroup$=Ee(()=>this.actions$.pipe(ce(os),we(({ageGroup:i})=>this.ageGroupService.create(i).pipe(x(e=>Pm({ageGroup:e})),be(e=>D(Lm({error:e.message||"Failed to create age group"})))))));updateAgeGroup$=Ee(()=>this.actions$.pipe(ce(ss),we(({id:i,ageGroup:e})=>this.ageGroupService.update(i,e).pipe(x(t=>Bm({ageGroup:t})),be(t=>D(Vm({error:t.message||"Failed to update age group"})))))));deleteAgeGroup$=Ee(()=>this.actions$.pipe(ce(ls),we(({id:i})=>this.ageGroupService.delete(i).pipe(x(()=>jm({id:i})),be(e=>D(zm({error:e.message||"Failed to delete age group"})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var sh=class n{http=s(mn);apiUrl=`${Gi.apiUrl}/races`;getAll(){return this.http.get(this.apiUrl)}getById(i){return this.http.get(`${this.apiUrl}/${i}`)}getByName(i){return this.http.get(`${this.apiUrl}/by-name/${i}`)}create(i){return this.http.post(this.apiUrl,i)}update(i,e){return this.http.put(`${this.apiUrl}/${i}`,e)}delete(i){return this.http.delete(`${this.apiUrl}/${i}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var lh=class n{actions$=s(Gn);raceService=s(sh);loadRaces$=Ee(()=>this.actions$.pipe(ce(ii),Oe(()=>this.raceService.getAll().pipe(x(i=>pu({races:i})),be(i=>D(fu({error:i})))))));createRace$=Ee(()=>this.actions$.pipe(ce(wo),Oe(({race:i})=>this.raceService.create(i).pipe(x(e=>gu({race:e})),be(e=>D(_u({error:e})))))));updateRace$=Ee(()=>this.actions$.pipe(ce(Mo),Oe(({id:i,race:e})=>this.raceService.update(i,e).pipe(x(t=>bu({race:t})),be(t=>D(vu({error:t})))))));deleteRace$=Ee(()=>this.actions$.pipe(ce(xo),Oe(({id:i})=>this.raceService.delete(i).pipe(x(()=>yu({id:i})),be(e=>D(Su({error:e})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var EC=(n,i)=>{let e=s(hs),t=s(On),r=e.getToken();if(n.url.includes("/login"))return i(n);if(r){if(e.isTokenExpired(r))return e.logout(),t.navigate(["/login"]).then(),i(n);let a=n.clone({setHeaders:{Authorization:`Bearer ${r}`}});return i(a)}return i(n)};F_($v);var w1={parse:{dateInput:"input"},display:{dateInput:"input",monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}},AC={providers:[Gg(),Mp(QS),Xh(Qh(),Zh([EC])),rv(),{provide:Va,useValue:"de-DE"},{provide:tl,useValue:"de-DE"},{provide:Ot,useClass:jd},{provide:_i,useValue:w1},my({auth:wC,race:xC,participant:CC,measurement:DC,ageGroup:MC}),$S([rh,lh,th,ih,oh]),SC({maxAge:25,logOnly:!ys(),autoPause:!0,trace:!1,traceLimit:75})]};var ch=class n{title=ne("time-control");store=s(ot);ngOnInit(){this.store.dispatch(Gr())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&F(0,"router-outlet")},dependencies:[Zs],encapsulation:2,changeDetection:1})};Hh(ch,AC).catch(n=>console.error(n));
