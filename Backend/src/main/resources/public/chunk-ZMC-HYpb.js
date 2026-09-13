import{$ as Kg,$r as wc$1,$t as Wj,A as Gj,Ar as qg,At as Re,B as Hv,Bn as eh,Br as sh$1,Bt as Ty,C as Fh$1,D as G,Dn as ae,Dr as pe$1,Er as ol$1,Et as Qg,F as HD,Fn as cw,Fr as rd$1,Gr as tn$1,Gt as Um$1,H as Ig$1,Hn as em$1,Ht as Ue,I as Hg,In as dI,Ir as rh$1,It as T,Jn as gh$1,Jt as VD,K as Jc$1,Kn as gD,Kt as Up$1,L as Hj,Ln as dh$1,Lr as rl$1,Lt as Ta$1,Mr as qm$1,N as Gt,Nn as ch,Nt as Ro$1,O as Ge,On as as$1,P as Gy,Pn as cv,Pr as qy,Pt as SD,Qn as hs$1,Qr as vw,Rn as dr$1,Rr as rn$1,S as Fg$1,Sr as nh$1,St as Pp$1,T as Fn$1,Tn as _w,Tr as oe$1,Tt as QE,Vn as el$1,Vr as ss$1,Vt as UE,Wn as fe,Wt as Uj,X as KD,Xn as hD,Y as Jp$1,Yn as gi,Yr as us$1,Z as KE,Zn as hh,Zt as WE,_ as Dg$1,_n as Zg,_t as Oe$1,ai as xn$1,an as Xc$1,ar as jj,at as MD,b as Eu$1,bn as _,br as mt$1,bt as Ph$1,c as A,ci as z,cn as Xp$1,ct as Mr$1,d as Bj,dn as Yo$1,dr as ko$1,dt as Ng$1,ei as wg$1,en as Wl$1,er as ih$1,et as Kp$1,f as Bn$1,fr as kr,gn as Zc$1,gr as lu,gt as OD$1,h as Co$1,hn as ZE,hr as ls$1,i as $m$1,in as Xa$1,ir as jg,j as Gl$1,jn as br$1,jr as qj,k as Gg,kn as bc$1,kr as qe,kt as Qu$1,li as zg,ln as Ye,lr as kg$1,lt as My,mn as Z,mr as lh$1,mt as Nr$1,n as $i$1,ni as wp$1,nn as Wy$1,nr as j,nt as Lg$1,oi as xw,on as Xg,pn as Ys,pr as ky,pt as Nn$1,q as Jg,qn as gc$1,qr as uh$1,qt as Uy,r as $j,ri as wr$1,rr as jD,s as $y,sn as Xo$1,sr as kD$1,st as Mi$1,t as $g,ti as wh$1,tn as Wp$1,tr as iy,tt as LD,u as Bi$1,un as Yg,ut as N,vn as Zt$1,vr as mg$1,w as Fj,wn as _n,wr as od$1,wt as Q,x as FD,xn as _e,xr as nd$1,xt as Pj,y as Ee,yn as Zu$1,yr as mi,yt as Pg$1,z as Hn$1,zr as rs$1}from"./chunk-CMzlWkMW.js";var va=null;function Ve(){return va}function qr(n){va??=n}var yn=class{};var Wt=(()=>{class n{historyGo(e){throw new Error(``)}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>T(ya),providedIn:`platform`})}return n})();var ya=(()=>{class n extends Wt{_location;_history;_doc=T(dr$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ve().getBaseHref(this._doc)}onPopState(e){let t=Ve().getGlobalEventTarget(this._doc,`window`);return t.addEventListener(`popstate`,e,!1),()=>t.removeEventListener(`popstate`,e)}onHashChange(e){let t=Ve().getGlobalEventTarget(this._doc,`window`);return t.addEventListener(`hashchange`,e,!1),()=>t.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>new n,providedIn:`platform`})}return n})();function wa(n,i){return n?i?n.endsWith(`/`)?i.startsWith(`/`)?n+i.slice(1):n+i:i.startsWith(`/`)?n+i:`${n}/${i}`:n:i}function Sa(n){let i=n.search(/#|\?|$/);return n[i-1]===`/`?n.slice(0,i-1)+n.slice(i):n}function _t(n){return n&&n[0]!==`?`?`?${n}`:n}var vi=(()=>{class n{historyGo(e){throw new Error(``)}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>T(du),providedIn:`root`})}return n})();var cu=new A(``);var du=(()=>{class n extends vi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??T(dr$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return wa(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+_t(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+_t(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+_t(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(t){return new(t||n)(Oe$1(Wt),Oe$1(cu,8))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var yi=(()=>{class n{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=hu(Sa(Da(t))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=``){return this.path()==this.normalize(e+_t(t))}normalize(e){return n.stripTrailingSlash(fu(this._basePath,Da(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t=``,r=null){this._locationStrategy.pushState(r,``,e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_t(t)),r)}replaceState(e,t=``,r=null){this._locationStrategy.replaceState(r,``,e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_t(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=_t;static joinWithSlash=wa;static stripTrailingSlash=Sa;static ɵfac=function(t){return new(t||n)(Oe$1(vi))};static ɵprov=ae({token:n,factory:()=>uu(),providedIn:`root`})}return n})();function uu(){return new yi(Oe$1(vi))}function fu(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:i}function Da(n){return n.replace(/\/index\.html$/,``)}function hu(n){if(new RegExp(`^(https?:)?//`).test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var pe=(function(n){return n[n.Format=0]=`Format`,n[n.Standalone=1]=`Standalone`,n})(pe||{});var U=(function(n){return n[n.Narrow=0]=`Narrow`,n[n.Abbreviated=1]=`Abbreviated`,n[n.Wide=2]=`Wide`,n[n.Short=3]=`Short`,n})(U||{});var Me=(function(n){return n[n.Short=0]=`Short`,n[n.Medium=1]=`Medium`,n[n.Long=2]=`Long`,n[n.Full=3]=`Full`,n})(Me||{});var ct={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ea(n){return SD(n)[gc$1.LocaleId]}function xa(n,i,e){let t=SD(n);return Be(Be([t[gc$1.DayPeriodsFormat],t[gc$1.DayPeriodsStandalone]],i),e)}function Na(n,i,e){let t=SD(n);return Be(Be([t[gc$1.DaysFormat],t[gc$1.DaysStandalone]],i),e)}function Ma(n,i,e){let t=SD(n);return Be(Be([t[gc$1.MonthsFormat],t[gc$1.MonthsStandalone]],i),e)}function Aa(n,i){let t=SD(n)[gc$1.Eras];return Be(t,i)}function Sn(n,i){return Be(SD(n)[gc$1.DateFormat],i)}function Dn(n,i){return Be(SD(n)[gc$1.TimeFormat],i)}function wn(n,i){let t=SD(n)[gc$1.DateTimeFormat];return Be(t,i)}function Cn(n,i){let e=SD(n),t=e[gc$1.NumberSymbols][i];if(typeof t>`u`){if(i===ct.CurrencyDecimal)return e[gc$1.NumberSymbols][ct.Decimal];if(i===ct.CurrencyGroup)return e[gc$1.NumberSymbols][ct.Group]}return t}function Ra(n){if(!n[gc$1.ExtraData])throw new N(2303,!1)}function Fa(n){let i=SD(n);return Ra(i),(i[gc$1.ExtraData][2]||[]).map(t=>typeof t==`string`?Kr(t):[Kr(t[0]),Kr(t[1])])}function Ta(n,i,e){let t=SD(n);Ra(t);return Be(Be([t[gc$1.ExtraData][0],t[gc$1.ExtraData][1]],i)||[],e)||[]}function Be(n,i){for(let e=i;e>-1;e--)if(typeof n[e]<`u`)return n[e];throw new N(2304,!1)}function Kr(n){let[i,e]=n.split(`:`);return{hours:+i,minutes:+e}}var pu=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var Si=Object.create(null);var gu=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var _u=256;function Ia(n,i,e,t){let r=Nu(n);bu(i),i=lt(e,i)||i;let s=[],l;for(;i;)if(l=gu.exec(i),l){s=s.concat(l.slice(1));let d=s.pop();if(!d)break;i=d}else{s.push(i);break}let c=r.getTimezoneOffset();t&&(c=ka(t,c),r=xu(r,t));let u=``;return s.forEach(d=>{let h=Cu(d);u+=h?h(r,e,c):d===`''`?`'`:d.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),u}function bu(n){if(n.length>_u)throw new N(2300,!1)}function xi(n,i,e){let t=new Date(0);return t.setFullYear(n,i,e),t.setHours(0,0,0),t}function lt(n,i){let e=Ea(n);if(Si[e]??=Object.create(null),Si[e][i])return Si[e][i];let t=``;switch(i){case`shortDate`:t=Sn(n,Me.Short);break;case`mediumDate`:t=Sn(n,Me.Medium);break;case`longDate`:t=Sn(n,Me.Long);break;case`fullDate`:t=Sn(n,Me.Full);break;case`shortTime`:t=Dn(n,Me.Short);break;case`mediumTime`:t=Dn(n,Me.Medium);break;case`longTime`:t=Dn(n,Me.Long);break;case`fullTime`:t=Dn(n,Me.Full);break;case`short`:let r=lt(n,`shortTime`),o=lt(n,`shortDate`);t=Di(wn(n,Me.Short),[r,o]);break;case`medium`:let s=lt(n,`mediumTime`),l=lt(n,`mediumDate`);t=Di(wn(n,Me.Medium),[s,l]);break;case`long`:let c=lt(n,`longTime`),u=lt(n,`longDate`);t=Di(wn(n,Me.Long),[c,u]);break;case`full`:let d=lt(n,`fullTime`),h=lt(n,`fullDate`);t=Di(wn(n,Me.Full),[d,h]);break}return t&&(Si[e][i]=t),t}function Di(n,i){return i&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return Object.hasOwn(i,t)?i[t]:e})),n}function He(n,i,e=`-`,t,r){let o=``;(n<0||r&&n<=0)&&(r?n=-n+1:(n=-n,o=e));let s=String(n);for(;s.length<i;)s=`0`+s;return t&&(s=s.slice(s.length-i)),o+s}function vu(n,i){return He(n,3).substring(0,i)}function le(n,i,e=0,t=!1,r=!1){return function(o,s){let l=yu(n,o);if((e>0||l>-e)&&(l+=e),n===3)l===0&&e===-12&&(l=12);else if(n===6)return vu(l,i);let c=Cn(s,ct.MinusSign);return He(l,i,c,t,r)}}function yu(n,i){switch(n){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new N(2301,!1)}}function $(n,i,e=pe.Format,t=!1){return function(r,o){return Su(r,o,n,i,e,t)}}function Su(n,i,e,t,r,o){switch(e){case 2:return Ma(i,r,t)[n.getMonth()];case 1:return Na(i,r,t)[n.getDay()];case 0:let s=n.getHours(),l=n.getMinutes();if(o){let u=Fa(i),d=Ta(i,r,t),h=u.findIndex(E=>{if(Array.isArray(E)){let[x,A]=E,k=s>=x.hours&&l>=x.minutes,H=s<A.hours||s===A.hours&&l<A.minutes;if(x.hours<A.hours){if(k&&H)return!0}else if(k||H)return!0}else if(E.hours===s&&E.minutes===l)return!0;return!1});if(h!==-1)return d[h]}return xa(i,r,t)[s<12?0:1];case 3:return Aa(i,t)[n.getFullYear()<=0?0:1];default:throw new N(2302,!1)}}function wi(n){return function(i,e,t){let r=-1*t,o=Cn(e,ct.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(n){case 0:return(r>=0?`+`:``)+He(s,2,o)+He(Math.abs(r%60),2,o);case 1:return`GMT`+(r>=0?`+`:``)+He(s,1,o);case 2:return`GMT`+(r>=0?`+`:``)+He(s,2,o)+`:`+He(Math.abs(r%60),2,o);case 3:return t===0?`Z`:(r>=0?`+`:``)+He(s,2,o)+`:`+He(Math.abs(r%60),2,o);default:throw new N(2310,!1)}}}var Du=0;var Ei=4;function wu(n){let i=xi(n,Du,1).getDay();return xi(n,0,1+(i<=Ei?Ei:Ei+7)-i)}function Oa(n){let i=n.getDay(),e=i===0?-3:Ei-i;return xi(n.getFullYear(),n.getMonth(),n.getDate()+e)}function Qr(n,i=!1){return function(e,t){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=Oa(e),s=wu(o.getFullYear()),l=o.getTime()-s.getTime();r=1+Math.round(l/6048e5)}return He(r,n,Cn(t,ct.MinusSign))}}function Ci(n,i=!1){return function(e,t){return He(Oa(e).getFullYear(),n,Cn(t,ct.MinusSign),i)}}var Jr=Object.create(null);function Cu(n){if(Jr[n])return Jr[n];let i;switch(n){case`G`:case`GG`:case`GGG`:i=$(3,U.Abbreviated);break;case`GGGG`:i=$(3,U.Wide);break;case`GGGGG`:i=$(3,U.Narrow);break;case`y`:i=le(0,1,0,!1,!0);break;case`yy`:i=le(0,2,0,!0,!0);break;case`yyy`:i=le(0,3,0,!1,!0);break;case`yyyy`:i=le(0,4,0,!1,!0);break;case`Y`:i=Ci(1);break;case`YY`:i=Ci(2,!0);break;case`YYY`:i=Ci(3);break;case`YYYY`:i=Ci(4);break;case`M`:case`L`:i=le(1,1,1);break;case`MM`:case`LL`:i=le(1,2,1);break;case`MMM`:i=$(2,U.Abbreviated);break;case`MMMM`:i=$(2,U.Wide);break;case`MMMMM`:i=$(2,U.Narrow);break;case`LLL`:i=$(2,U.Abbreviated,pe.Standalone);break;case`LLLL`:i=$(2,U.Wide,pe.Standalone);break;case`LLLLL`:i=$(2,U.Narrow,pe.Standalone);break;case`w`:i=Qr(1);break;case`ww`:i=Qr(2);break;case`W`:i=Qr(1,!0);break;case`d`:i=le(2,1);break;case`dd`:i=le(2,2);break;case`c`:case`cc`:i=le(7,1);break;case`ccc`:i=$(1,U.Abbreviated,pe.Standalone);break;case`cccc`:i=$(1,U.Wide,pe.Standalone);break;case`ccccc`:i=$(1,U.Narrow,pe.Standalone);break;case`cccccc`:i=$(1,U.Short,pe.Standalone);break;case`E`:case`EE`:case`EEE`:i=$(1,U.Abbreviated);break;case`EEEE`:i=$(1,U.Wide);break;case`EEEEE`:i=$(1,U.Narrow);break;case`EEEEEE`:i=$(1,U.Short);break;case`a`:case`aa`:case`aaa`:i=$(0,U.Abbreviated);break;case`aaaa`:i=$(0,U.Wide);break;case`aaaaa`:i=$(0,U.Narrow);break;case`b`:case`bb`:case`bbb`:i=$(0,U.Abbreviated,pe.Standalone,!0);break;case`bbbb`:i=$(0,U.Wide,pe.Standalone,!0);break;case`bbbbb`:i=$(0,U.Narrow,pe.Standalone,!0);break;case`B`:case`BB`:case`BBB`:i=$(0,U.Abbreviated,pe.Format,!0);break;case`BBBB`:i=$(0,U.Wide,pe.Format,!0);break;case`BBBBB`:i=$(0,U.Narrow,pe.Format,!0);break;case`h`:i=le(3,1,-12);break;case`hh`:i=le(3,2,-12);break;case`H`:i=le(3,1);break;case`HH`:i=le(3,2);break;case`m`:i=le(4,1);break;case`mm`:i=le(4,2);break;case`s`:i=le(5,1);break;case`ss`:i=le(5,2);break;case`S`:i=le(6,1);break;case`SS`:i=le(6,2);break;case`SSS`:i=le(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:i=wi(0);break;case`ZZZZZ`:i=wi(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:i=wi(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:i=wi(2);break;default:return null}return Jr[n]=i,i}function ka(n,i){n=n.replace(/:/g,``);let e=Date.parse(`Jan 01, 1970 00:00:00 `+n)/6e4;return isNaN(e)?i:e}function Eu(n,i){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+i),n}function xu(n,i,e){let r=n.getTimezoneOffset();return Eu(n,-1*(ka(i,r)-r))}function Nu(n){if(Ca(n))return n;if(typeof n==`number`&&!isNaN(n))return new Date(n);if(typeof n==`string`){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[r,o=1,s=1]=n.split(`-`).map(l=>+l);return xi(r,o-1,s)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(pu))return Mu(t)}let i=new Date(n);if(!Ca(i))throw new N(2311,!1);return i}function Mu(n){let i=new Date(0),e=0,t=0,r=n[8]?i.setUTCFullYear:i.setFullYear,o=n[8]?i.setUTCHours:i.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),r.call(i,Number(n[1]),Number(n[2])-1,Number(n[3]));let s=Number(n[4]||0)-e,l=Number(n[5]||0)-t,c=Number(n[6]||0),u=Math.floor(parseFloat(`0.`+(n[7]||0))*1e3);return o.call(i,s,l,c,u),i}function Ca(n){return n instanceof Date&&!isNaN(n.valueOf())}var En=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=T(Ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static ɵfac=function(t){return new(t||n)(kr(Bi$1))};static ɵdir=QE({type:n,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[iy]})}return n})();function Pa(n,i){return new N(2100,!1)}var eo=class{createSubscription(i,e,t){return Ph$1(()=>i.subscribe({next:e,error:t}))}dispose(i){Ph$1(()=>i.unsubscribe())}};var to=class{createSubscription(i,e,t){return i.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}};var Au=new to;var Ru=new eo;var Fu=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=T(mt$1);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(Zc$1(e))return Au;if(Pp$1(e))return Ru;throw Pa(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(t){return new(t||n)(kr(Hj,16))};static ɵpipe=ZE({name:`async`,type:n,pure:!1})}return n})();var Tu=`mediumDate`;var La=new A(``);var Va=new A(``);var Iu=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,o){if(e==null||e===``||e!==e)return null;try{let s=t??this.defaultOptions?.dateFormat??Tu,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ia(e,s,o||this.locale,l)}catch(s){throw Pa(n,s.message)}}static ɵfac=function(t){return new(t||n)(kr(ol$1,16),kr(La,24),kr(Va,24))};static ɵpipe=ZE({name:`date`,type:n,pure:!0})}return n})();var Ba=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();function xn(n,i){i=encodeURIComponent(i);for(let e of n.split(`;`)){let t=e.indexOf(`=`),[r,o]=t==-1?[e,``]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let s=o;try{s=decodeURIComponent(o)}catch{}return s.length>1&&s[0]===`"`&&s[s.length-1]===`"`&&(s=s.slice(1,-1)),s}return null}var Ou=(()=>{class n{build(){return new XMLHttpRequest}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var no=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=Oe$1(Ou),r},providedIn:`root`})}return n})();function mb(n,i,e){return MD(n,i,e)}var io=`browser`;function za(n){return n===io}var Nn=class{_doc;constructor(i){this._doc=i}manager};var Mi=(()=>{class n extends Nn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static ɵfac=function(t){return new(t||n)(Oe$1(dr$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var Fi=new A(``);var ao=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Mi));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Mi);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static ɵfac=function(t){return new(t||n)(Oe$1(Fi),Oe$1(Re))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var ro=`ng-app-id`;function Ua(n){for(let i of n)i.remove()}function Ha(n,i){let e=i.createElement(`style`);return e.textContent=n,e}function Lu(n,i,e,t){let r=n.head?.querySelectorAll(`style[${ro}="${i}"],link[${ro}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(ro),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function so(n,i){let e=i.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,n),e}var lo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Lu(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Ha);t?.forEach(r=>this.addUsage(r,this.external,so))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Ua(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ua(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Ha(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,so(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute(`nonce`,this.nonce),e.appendChild(t)}static ɵfac=function(t){return new(t||n)(Oe$1(dr$1),Oe$1(nd$1),Oe$1(qm$1,8),Oe$1($m$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var oo={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var co=/%COMP%/g;var Ga=`%COMP%`;var Vu=`_nghost-${Ga}`;var Bu=`_ngcontent-${Ga}`;var ju=!0;var zu=new A(``,{factory:()=>ju});var Uu=new A(``);function Hu(n){return Bu.replace(co,n)}function $u(n){return Vu.replace(co,n)}function Wa(n,i){return i.map(e=>e.replace(co,n))}var uo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,s,l,c=null,u=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=l,this.nonce=c,this.tracingService=u,this.cssVarNamespace=d??``,this.defaultRenderer=new Mn(e,s,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Ri?r.applyToHost(e):r instanceof An&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case Gt.Emulated:o=new Ri(c,u,t,this.appId,d,s,l,h,this.cssVarNamespace);break;case Gt.ShadowDom:return new Ai(c,e,t,s,l,this.nonce,h,this.cssVarNamespace,u);case Gt.ExperimentalIsolatedShadowDom:return new Ai(c,e,t,s,l,this.nonce,h,this.cssVarNamespace);default:o=new An(c,u,t,d,s,l,h,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(t){return new(t||n)(Oe$1(ao),Oe$1(wp$1),Oe$1(nd$1),Oe$1(zu),Oe$1(dr$1),Oe$1(Re),Oe$1(qm$1),Oe$1(Zt$1,8),Oe$1(Uu,8))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var Mn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=``){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(oo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){($a(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=$a(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new N(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i==`string`?this.doc.querySelector(i):i;if(!t)throw new N(-5104,!1);return e||(t.textContent=``),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+`:`+e;let o=oo[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=oo[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||r&(mi.DashCase|mi.Important)?i.style.setProperty(e,t,r&mi.Important?`important`:``):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||t&mi.DashCase?i.style.removeProperty(e):i.style[e]=``}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i==`string`&&(i=Ve().getGlobalEventTarget(this.doc,i),!i))throw new N(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e===`__ngUnwrap__`)return i;i(e)===!1&&e.preventDefault()}}};function $a(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var Ai=class extends Mn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,s,l,c,u){super(i,r,o,l,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Wa(t.id,d).map(E=>E.replace(/%NS%/g,c));for(let E of d){let x=document.createElement(`style`);s&&x.setAttribute(`nonce`,s),x.textContent=E,this.shadowRoot.appendChild(x)}let h=t.getExternalStyles?.();if(h)for(let E of h){let x=so(E,r);s&&x.setAttribute(`nonce`,s),this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var An=class extends Mn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,s,l,c,u){super(i,o,s,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles,h=u?Wa(u,d):d;this.styles=h.map(E=>E.replace(/%NS%/g,c)),this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nn$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Ri=class extends An{contentAttr;hostAttr;constructor(i,e,t,r,o,s,l,c,u){let d=r+`-`+t.id;super(i,e,t,o,s,l,c,u,d),this.contentAttr=Hu(d),this.hostAttr=$u(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,``)}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,``),t}};var Ti=class n extends yn{supportsDOMEvents=!0;static makeCurrent(){qr(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e===`window`?window:e===`document`?i:e===`body`?i.body:null}getBaseHref(i){let e=Wu();return e==null?null:Yu(e)}resetBaseElement(){Rn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return xn(document.cookie,i)}};var Rn=null;function Wu(){return Rn=Rn||document.head.querySelector(`base`),Rn?Rn.getAttribute(`href`):null}function Yu(n){return new URL(n,document.baseURI).pathname}var Ya=[`alt`,`control`,`meta`,`shift`];var Xu={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Zu={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var Xa=(()=>{class n extends Nn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=n.parseEventName(t),l=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ve().onAndCancel(e,s.domEventName,l,o))}static parseEventName(e){let t=e.toLowerCase().split(`.`),r=t.shift();if(t.length===0||!(r===`keydown`||r===`keyup`))return null;let o=n._normalizeKey(t.pop()),s=``,l=t.indexOf(`code`);if(l>-1&&(t.splice(l,1),s=`code.`),Ya.forEach(u=>{let d=t.indexOf(u);d>-1&&(t.splice(d,1),s+=u+`.`)}),s+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,t){let r=Xu[e.key]||e.key,o=``;return t.indexOf(`code.`)>-1&&(r=e.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),Ya.forEach(s=>{if(s!==r){let l=Zu[s];l(e)&&(o+=s+`.`)}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(t){return new(t||n)(Oe$1(dr$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();async function qu(n,i,e){return Bj(G({rootComponent:n},Ku(i,e)))}function Ku(n,i){return{platformRef:i?.platformRef,appProviders:[...nf,...n?.providers??[]],platformProviders:tf}}function Qu(){Ti.makeCurrent()}function Ju(){return new Ye}function ef(){return ky(document),document}var tf=[{provide:$m$1,useValue:io},{provide:rd$1,useValue:Qu,multi:!0},{provide:dr$1,useFactory:ef}];var nf=[{provide:Ys,useValue:`root`},{provide:Ye,useFactory:Ju},{provide:Fi,useClass:Mi,multi:!0},{provide:Fi,useClass:Xa,multi:!0},uo,{provide:wp$1,useClass:lo},{provide:lo,useExisting:wp$1},ao,{provide:br$1,useExisting:uo},[]];var et=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i==`string`?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<`u`&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:`a`})}set(i,e){return this.clone({name:i,value:e,op:`s`})}delete(i,e){return this.clone({name:i,value:e,op:`d`})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case`a`:case`s`:let t=i.value;if(typeof t==`string`&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op===`a`?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case`d`:let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(c=>s.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Oi=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};var ki=class{encodeKey(i){return Za(i)}encodeValue(i){return Za(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function rf(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,``).split(`&`).forEach(r=>{let o=r.indexOf(`=`),[s,l]=o==-1?[i.decodeKey(r),``]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(l),e.set(s,c)}),e}var of=/%(\d[a-f0-9])/gi;var sf={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function Za(n){return encodeURIComponent(n).replace(of,(i,e)=>sf[e]??i)}function Ii(n){return`${n}`}var dt=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ki,i.fromString){if(i.fromObject)throw new N(2805,!1);this.map=rf(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Ii):[Ii(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:`a`})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:`a`})}):e.push({param:t,value:r,op:`a`})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:`s`})}delete(i,e){return this.clone({param:i,value:e,op:`d`})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+`=`+this.encoder.encodeValue(t)).join(`&`)}).filter(i=>i!==``).join(`&`)}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case`a`:case`s`:let e=i.op===`a`?(this.map.get(i.param)||[]).slice():[];e.push(Ii(i.value)),this.map.set(i.param,e);break;case`d`:if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Ii(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function af(n){switch(n){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function qa(n){return typeof ArrayBuffer<`u`&&n instanceof ArrayBuffer}function Ka(n){return typeof Blob<`u`&&n instanceof Blob}function Qa(n){return typeof FormData<`u`&&n instanceof FormData}function lf(n){return typeof URLSearchParams<`u`&&n instanceof URLSearchParams}var Fn=`Content-Type`;var Pi=`Accept`;var tl=`text/plain`;var nl=`application/json`;var il=`${nl}, ${tl}, */*`;var Yt=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(af(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new et,this.context??=new Oi,!this.params)this.params=new dt,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e,c=``,u=e.indexOf(`#`);u!==-1&&(c=e.substring(u),l=e.substring(0,u));let d=l.indexOf(`?`),h=d===-1?`?`:d<l.length-1?`&`:``;this.urlWithParams=l+h+s+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||qa(this.body)||Ka(this.body)||Qa(this.body)||lf(this.body)?this.body:this.body instanceof dt?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Qa(this.body)?null:Ka(this.body)?this.body.type||null:qa(this.body)?null:typeof this.body==`string`?tl:this.body instanceof dt?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?nl:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,l=i.cache||this.cache,c=i.mode||this.mode,u=i.redirect||this.redirect,d=i.credentials||this.credentials,h=i.referrer??this.referrer,E=i.integrity||this.integrity,x=i.referrerPolicy||this.referrerPolicy,A=i.transferCache??this.transferCache,k=i.timeout??this.timeout,H=i.body!==void 0?i.body:this.body,Ge=i.withCredentials??this.withCredentials,T=i.reportProgress??this.reportProgress,B=i.reportUploadProgress??this.reportUploadProgress,De=i.reportDownloadProgress??this.reportDownloadProgress,ze=i.headers||this.headers,se=i.params||this.params,it=i.context??this.context;return i.setHeaders!==void 0&&(ze=Object.keys(i.setHeaders).reduce((pt,We)=>pt.set(We,i.setHeaders[We]),ze)),i.setParams&&(se=Object.keys(i.setParams).reduce((pt,We)=>pt.set(We,i.setParams[We]),se)),new n(e,t,H,{params:se,headers:ze,context:it,reportProgress:T,reportUploadProgress:B,reportDownloadProgress:De,responseType:r,withCredentials:Ge,transferCache:A,keepalive:o,cache:l,priority:s,timeout:k,mode:c,redirect:u,credentials:d,referrer:h,integrity:E,referrerPolicy:x})}};var Je=(function(n){return n[n.Sent=0]=`Sent`,n[n.UploadProgress=1]=`UploadProgress`,n[n.ResponseHeader=2]=`ResponseHeader`,n[n.DownloadProgress=3]=`DownloadProgress`,n[n.Response=4]=`Response`,n[n.User=5]=`User`,n})(Je||{});var Xt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t=`OK`){this.headers=i.headers||new et,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}};var Tn=class n extends Xt{constructor(i={}){super(i)}type=Je.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}};var Zt=class n extends Xt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Je.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}};var Qe=class extends Xt{name=`HttpErrorResponse`;message;error;ok=!1;constructor(i){super(i,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||`(unknown url)`}`:this.message=`Http failure response for ${i.url||`(unknown url)`}: ${i.status} ${i.statusText}`,this.error=i.error||null}};var rl=200;var cf=204;var df=/^\)\]\}',?\n/;var ol=new A(``,{factory:()=>null});var Li=(()=>{class n{fetchImpl=T(ho,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(Re);destroyRef=T(pe$1);maxResponseSize=T(ol);handle(e){return new _(t=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Je.Response&&(o=!0),t.next(c)},error:c=>{o=!0,t.error(c)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,s).then(mo,c=>s.error(new Qe({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),s;try{let H=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,G({signal:t},o)));uf(H),r.next({type:Je.Sent}),s=await H}catch(H){r.error(new Qe({error:H,status:H.status??0,statusText:H.statusText,url:e.urlWithParams,headers:H.headers}));return}let l=new et(s.headers),c=s.statusText,u=s.url||e.urlWithParams,d=s.status,h=null,E=e.reportProgress||e.reportDownloadProgress;if(E&&r.next(new Tn({headers:l,status:d,statusText:c,url:u})),s.body){let H=s.headers.get(Fn)??``,Ge=s.headers.get(`content-length`),T=Ge!==null?Number(Ge):NaN;this.maxResponseSize!==null&&Number.isFinite(T)&&T>this.maxResponseSize&&(await s.body.cancel(),Ja(this.maxResponseSize));let B=[],De=s.body.getReader(),ze=0,se,it,pt=typeof Zone<`u`&&Zone.current,We=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await De.cancel(),We=!0;break}let{done:Ir,value:Or}=await De.read();if(Ir)break;if(B.push(Or),ze+=Or.length,this.maxResponseSize!==null&&ze>this.maxResponseSize&&(await De.cancel(),Ja(this.maxResponseSize)),E){it=e.responseType===`text`?(it??``)+(se??=el(H)).decode(Or,{stream:!0}):void 0;let Ms=()=>r.next({type:Je.DownloadProgress,total:Number.isFinite(T)?T:void 0,loaded:ze,partialText:it});pt?pt.run(Ms):Ms()}}}),We){r.complete();return}let lu=this.concatChunks(B,ze);try{h=this.parseBody(e,lu,H,d)}catch(Ir){r.error(new Qe({error:Ir,headers:new et(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=h?rl:0);let x=d>=200&&d<300,A=s.redirected,k=s.type;x?(r.next(new Zt({body:h,headers:l,status:d,statusText:c,url:u,redirected:A,responseType:k})),r.complete()):r.error(new Qe({error:h,headers:l,status:d,statusText:c,url:u,redirected:A,responseType:k}))}parseBody(e,t,r,o){switch(e.responseType){case`json`:let s=new TextDecoder().decode(t).replace(df,``);if(s===``)return null;try{return JSON.parse(s)}catch(l){if(o<200||o>=300)return s;throw l}case`text`:return el(r).decode(t);case`blob`:return new Blob([t],{type:r});case`arraybuffer`:return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r=`include`),e.headers.forEach((o,s)=>t[o]=s.join(`,`)),e.headers.has(Pi)||(t[Pi]=il),!e.headers.has(Fn)){let o=e.detectContentTypeHeader();o!==null&&(t[Fn]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var ho=class{};function mo(){}function uf(n){n.then(mo,mo)}function Ja(n){throw new N(-2825,!1)}var ff=/charset=\s*["']?([^;"'\s]+)["']?/i;function el(n){let i=n.match(ff);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var hf=new A(``,{factory:()=>!0});var mf=`XSRF-TOKEN`;var pf=new A(``,{factory:()=>mf});var gf=`X-XSRF-TOKEN`;var _f=new A(``,{factory:()=>gf});var bf=(()=>{class n{cookieName=T(pf);doc=T(dr$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=xn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var sl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=Oe$1(bf),r},providedIn:`root`})}return n})();function al(n,i){if(!T(hf)||n.method===`GET`||n.method===`HEAD`)return i(n);try{let r=T(Wt).href,{origin:o}=new URL(r),{origin:s}=new URL(n.url,o);if(o!==s)return i(n)}catch{return i(n)}let e=T(sl).getToken(),t=T(_f);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function vf(n,i){return i(n)}function yf(n,i,e){return(t,r)=>ko$1(e,()=>i(t,o=>n(o,r)))}var go=new A(``,{factory:()=>[al]});var ll=new A(``);var cl=new A(``,{factory:()=>!0});var Bi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=Oe$1(Li),r},providedIn:`root`})}return n})();var Vi=(()=>{class n{backend;injector;chain=null;pendingTasks=T(Ta$1);contributeToStability=T(cl);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(ji,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(ll,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(go),...s]));this.chain=l.reduceRight((c,u)=>yf(c,u,this.injector),vf)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ph$1(()=>t(e,o=>this.backend.handle(o))).pipe($g(r))}else return Ph$1(()=>t(e,r=>this.backend.handle(r)))}static ɵfac=function(t){return new(t||n)(Oe$1(Bi),Oe$1(fe))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var ji=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=Oe$1(Vi),r},providedIn:`root`})}return n})();function fo(n,i){return G({body:i},n)}var zi=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Yt)o=e;else{let c;r.headers instanceof et?c=r.headers:c=new et(r.headers);let u;r.params&&(r.params instanceof dt?u=r.params:u=new dt({fromObject:r.params})),o=new Yt(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:u,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||`json`,withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=ss$1(o).pipe(Fg$1(c=>this.handler.handle(c)));if(e instanceof Yt||r.observe===`events`)return s;let l=s.pipe(Hn$1(c=>c instanceof Zt));switch(r.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return l.pipe(oe$1(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new N(2806,!1);return c.body}));case`blob`:return l.pipe(oe$1(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new N(2807,!1);return c.body}));case`text`:return l.pipe(oe$1(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new N(2808,!1);return c.body}));default:return l.pipe(oe$1(c=>c.body))}case`response`:return l;default:throw new N(2809,!1)}}delete(e,t={}){return this.request(`DELETE`,e,t)}get(e,t={}){return this.request(`GET`,e,t)}head(e,t={}){return this.request(`HEAD`,e,t)}jsonp(e,t){return this.request(`JSONP`,e,{params:new dt().append(t,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,t={}){return this.request(`OPTIONS`,e,t)}patch(e,t,r={}){return this.request(`PATCH`,e,fo(r,t))}post(e,t,r={}){return this.request(`POST`,e,fo(r,t))}put(e,t,r={}){return this.request(`PUT`,e,fo(r,t))}static ɵfac=function(t){return new(t||n)(Oe$1(ji))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Sf=/^\)\]\}',?\n/;var po=(()=>{class n{xhrFactory;tracingService=T(Zt$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new N(-2800,!1);let t=this.xhrFactory;return ss$1(null).pipe(Dg$1(()=>new _(o=>{let s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((T,B)=>s.setRequestHeader(T,B.join(`,`))),e.headers.has(Pi)||s.setRequestHeader(Pi,il),!e.headers.has(Fn)){let T=e.detectContentTypeHeader();T!==null&&s.setRequestHeader(Fn,T)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();s.responseType=T!==`json`?T:`text`}let l=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let T=s.statusText||`OK`,B=new et(s.getAllResponseHeaders()),De=s.responseURL||e.url;return c=new Tn({headers:B,status:s.status,statusText:T,url:De}),c},d=this.maybePropagateTrace(()=>{let{headers:T,status:B,statusText:De,url:ze}=u(),se=null;B!==cf&&(se=typeof s.response>`u`?s.responseText:s.response),B===0&&(B=se?rl:0);let it=B>=200&&B<300;if(e.responseType===`json`&&typeof se==`string`){let pt=se;se=se.replace(Sf,``);try{se=se!==``?JSON.parse(se):null}catch(We){se=pt,it&&(it=!1,se={error:We,text:se})}}it?(o.next(new Zt({body:se,headers:T,status:B,statusText:De,url:ze||void 0})),o.complete()):o.error(new Qe({error:se,headers:T,status:B,statusText:De,url:ze||void 0}))}),h=this.maybePropagateTrace(T=>{let{url:B}=u(),De=new Qe({error:T,status:s.status||0,statusText:s.statusText||`Unknown Error`,url:B||void 0});o.error(De)}),E=h;e.timeout&&(E=this.maybePropagateTrace(T=>{let{url:B}=u(),De=new Qe({error:new DOMException(`Request timed out`,`TimeoutError`),status:s.status||0,statusText:s.statusText||`Request timeout`,url:B||void 0});o.error(De)}));let x=!1,A=this.maybePropagateTrace(T=>{x||(o.next(u()),x=!0);let B={type:Je.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(B.total=T.total),e.responseType===`text`&&s.responseText&&(B.partialText=s.responseText),o.next(B)}),k=this.maybePropagateTrace(T=>{let B={type:Je.UploadProgress,loaded:T.loaded};T.lengthComputable&&(B.total=T.total),o.next(B)});s.addEventListener(`load`,d),s.addEventListener(`error`,h),s.addEventListener(`timeout`,E),s.addEventListener(`abort`,h);let H=e.reportProgress||e.reportUploadProgress,Ge=e.reportProgress||e.reportDownloadProgress;return Ge&&s.addEventListener(`progress`,A),H&&l!==null&&s.upload&&s.upload.addEventListener(`progress`,k),s.send(l),o.next({type:Je.Sent}),()=>{s.removeEventListener(`error`,h),s.removeEventListener(`abort`,h),s.removeEventListener(`load`,d),s.removeEventListener(`timeout`,E),Ge&&s.removeEventListener(`progress`,A),H&&l!==null&&s.upload&&s.upload.removeEventListener(`progress`,k),s.readyState!==s.DONE&&s.abort()}})))}static ɵfac=function(t){return new(t||n)(Oe$1(no))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Ui=(function(n){return n[n.Interceptors=0]=`Interceptors`,n[n.LegacyInterceptors=1]=`LegacyInterceptors`,n[n.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,n[n.NoXsrfProtection=3]=`NoXsrfProtection`,n[n.JsonpSupport=4]=`JsonpSupport`,n[n.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,n[n.Fetch=6]=`Fetch`,n[n.Xhr=7]=`Xhr`,n})(Ui||{});function dl(n,i){return{ɵkind:n,ɵproviders:i}}function Df(...n){let i=[zi,Li,Vi,{provide:ji,useExisting:Vi},{provide:Bi,useFactory:()=>T(Li)},{provide:go,useValue:al,multi:!0}];for(let e of n)i.push(...e.ɵproviders);return Ro$1(i)}function wf(n){return dl(Ui.Interceptors,n.map(i=>({provide:go,useValue:i,multi:!0})))}function Cf(){return dl(Ui.Xhr,[po,{provide:Bi,useExisting:po}])}var Wv=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(t){return new(t||n)(Oe$1(dr$1))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var In=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=Oe$1(xf),r},providedIn:`root`})}return n})();var xf=(()=>{class n extends In{_doc=T(dr$1);sanitize(e,t){if(t==null)return null;switch(e){case Z.NONE:return t;case Z.HTML:return wc$1(t,`HTML`)?_n(t):cv(this._doc,String(t)).toString();case Z.STYLE:return wc$1(t,`Style`)?_n(t):t;case Z.SCRIPT:if(wc$1(t,`Script`))return _n(t);throw new N(5200,!1);case Z.URL:return wc$1(t,`URL`)?_n(t):bc$1(String(t));case Z.RESOURCE_URL:if(wc$1(t,`ResourceURL`))return _n(t);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return $y(e)}bypassSecurityTrustStyle(e){return Uy(e)}bypassSecurityTrustScript(e){return qy(e)}bypassSecurityTrustUrl(e){return Wy$1(e)}bypassSecurityTrustResourceUrl(e){return Gy(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function On(n){return n.buttons===0||n.detail===0}function kn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var _o;function ul(){if(_o==null){let n=typeof document<`u`?document.head:null;_o=!!(n&&(n.createShadowRoot||n.attachShadow))}return _o}function bo(n){if(ul()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function vo(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ye(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var yo;try{yo=typeof Intl<`u`&&Intl.v8BreakIterator}catch{yo=!1}var V=(()=>{class n{_platformId=T($m$1);isBrowser=this._platformId?za(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||yo)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Pn;function fl(){if(Pn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Pn=!0}))}finally{Pn=Pn||!1}return Pn}function qt(n){return fl()?n:!!n.capture}function bt(n,i=0){return hl(n)?Number(n):arguments.length===2?i:0}function hl(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Se(n){return n instanceof Mr$1?n.nativeElement:n}var ml=new A(`cdk-input-modality-detector-options`);var pl={ignoreKeys:[18,17,224,91,16]};var gl=650;var So={passive:!0,capture:!0};var _l=(()=>{class n{_platform=T(V);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<gl||(this._modality.next(On(e)?`keyboard`:`mouse`),this._mostRecentTarget=ye(e))};_onTouchstart=e=>{if(kn(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=ye(e)};constructor(){let e=T(Re),t=T(dr$1),r=T(ml,{optional:!0});if(this._options=G(G({},pl),r),this.modalityDetected=this._modality.pipe(Kg(1)),this.modalityChanged=this.modalityDetected.pipe(Ig$1()),this._platform.isBrowser){let o=T(br$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,`keydown`,this._onKeydown,So),o.listen(t,`mousedown`,this._onMousedown,So),o.listen(t,`touchstart`,this._onTouchstart,So)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Ln=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Ln||{});var bl=new A(`cdk-focus-monitor-default-options`);var Hi=qt({passive:!0,capture:!0});var Kt=(()=>{class n{_ngZone=T(Re);_platform=T(V);_inputModalityDetector=T(_l);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T(dr$1);_stopInputModalityDetector=new Q;constructor(){let e=T(bl,{optional:!0});this._detectionMode=e?.detectionMode||Ln.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ye(e);for(let r=t;r;r=r.parentElement)e.type===`focus`?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Se(e);if(!this._platform.isBrowser||r.nodeType!==1)return ss$1();let o=bo(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let l={checkChildren:t,subject:new Q,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Se(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Se(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Ln.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===Ln.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?gl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ye(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Hi),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Hi)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(wg$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Hi),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Hi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Mf=(()=>{class n{_elementRef=T(Mr$1);_focusMonitor=T(Kt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ge;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();var $i=new WeakMap;var ge=(()=>{class n{_appRef;_injector=T(Ee);_environmentInjector=T(fe);load(e){let t=this._appRef=this._appRef||this._injector.get($i$1),r=$i.get(t);r||(r={loaders:new Set,refs:[]},$i.set(t,r),t.onDestroy(()=>{$i.get(t)?.refs.forEach(o=>o.destroy()),$i.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Wj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Qt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})();var Gi;function Af(){if(Gi===void 0&&(Gi=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{Gi=n.trustedTypes.createPolicy(`angular#components`,{createHTML:i=>i})}catch(i){console.error(i)}}return Gi}function Mt(n){return Af()?.createHTML(n)||n}function vl(n,i,e){n.innerHTML=Mt(e.sanitize(Z.HTML,i)||``)}function At(n){return Array.isArray(n)?n:[n]}var yl=new Set;var Rt;var Jt=(()=>{class n{_platform=T(V);_nonce=T(qm$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ff}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Rf(e,this._nonce),this._matchMedia(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function Rf(n,i){if(!yl.has(n))try{Rt||(Rt=document.createElement(`style`),i&&Rt.setAttribute(`nonce`,i),Rt.setAttribute(`type`,`text/css`),document.head.appendChild(Rt)),Rt.sheet&&(Rt.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),yl.add(n))}catch(e){console.error(e)}}function Ff(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Do=(()=>{class n{_mediaMatcher=T(Jt);_zone=T(Re);_queries=new Map;_destroySubject=new Q;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Sl(At(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let o=mg$1(Sl(At(e)).map(s=>this._registerQuery(s).observable));return o=rn$1(o.pipe(tn$1(1)),o.pipe(Kg(1),jg(0))),o.pipe(oe$1(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new _(s=>{let l=c=>this._zone.run(()=>s.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Gl$1(t),oe$1(({matches:s})=>({query:e,matches:s})),wg$1(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function Sl(n){return n.map(i=>i.split(`,`)).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Tf(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Dl=(()=>{class n{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var wl=(()=>{class n{_mutationObserverFactory=T(Dl);_observedElements=new Map;_ngZone=T(Re);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Se(e);return new _(r=>{let s=this._observeElement(t).pipe(oe$1(l=>l.filter(c=>!Tf(c))),Hn$1(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new Q,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Wy=(()=>{class n{_contentObserver=T(wl);_elementRef=T(Mr$1);event=new Ge;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=bt(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(jg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,$j],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var Wi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({providers:[Dl]})}return n})();var Nl=(()=>{class n{_platform=T(V);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return Of(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=If(Uf(e));if(t&&(Cl(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Cl(e);return e.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!jf(e)?!1:r===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return zf(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function If(n){try{return n.frameElement}catch{return null}}function Of(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function kf(n){let i=n.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function Pf(n){return Vf(n)&&n.type==`hidden`}function Lf(n){return Bf(n)&&n.hasAttribute(`href`)}function Vf(n){return n.nodeName.toLowerCase()==`input`}function Bf(n){return n.nodeName.toLowerCase()==`a`}function Ml(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let i=n.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function Cl(n){if(!Ml(n))return null;let i=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function jf(n){let i=n.nodeName.toLowerCase(),e=i===`input`&&n.type;return e===`text`||e===`password`||i===`select`||i===`textarea`}function zf(n){return Pf(n)?!1:kf(n)||Lf(n)||n.hasAttribute(`contenteditable`)||Ml(n)}function Uf(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Yi=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,s){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary(`start`);return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary(`end`);return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Hv(i,{injector:this._injector})}};var Al=(()=>{class n{_checker=T(Nl);_ngZone=T(Re);_document=T(dr$1);_injector=T(Ee);constructor(){T(ge).load(Qt)}create(e,t=!1){return new Yi(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Hf=(()=>{class n{_elementRef=T(Mr$1);_focusTrapFactory=T(Al);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T(V).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=vo(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,$j],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,$j]},exportAs:[`cdkTrapFocus`],features:[iy]})}return n})();var Rl=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Fl=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var $f=0;var Gf=(()=>{class n{_ngZone=T(Re);_defaultOptions=T(Fl,{optional:!0});_liveElement;_document=T(dr$1);_sanitizer=T(In);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T(Rl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]==`number`?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),s==null&&r&&(s=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:vl(this._liveElement,e,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),r=this._document.createElement(`div`);for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${$f++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute(`aria-owns`);s?s.indexOf(e)===-1&&o.setAttribute(`aria-owns`,s+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var vt=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(vt||{});var El=`cdk-high-contrast-black-on-white`;var xl=`cdk-high-contrast-white-on-black`;var wo=`cdk-high-contrast-active`;var Tl=(()=>{class n{_platform=T(V);_hasCheckedHighContrastMode=!1;_document=T(dr$1);_breakpointSubscription;constructor(){this._breakpointSubscription=T(Do).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return vt.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return vt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return vt.BLACK_ON_WHITE}return vt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(wo,El,xl),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===vt.BLACK_ON_WHITE?e.add(wo,El):t===vt.WHITE_ON_BLACK&&e.add(wo,xl)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Co=(()=>{class n{constructor(){T(Tl)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Wi]})}return n})();var Wf=200;var Xi=class{_letterKeyStream=new Q;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval==`number`?e.debounceInterval:Wf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Xg(e=>this._pressedLetters.push(e)),jg(i),Hn$1(()=>this._pressedLetters.length>0),oe$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function yt(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var en=class{_items;_activeItemIndex=Yo$1(-1);_activeItem=Yo$1(null);_wrap=!1;_typeaheadSubscription=j.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof gi?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Xo$1(i)&&(this._effectRef=od$1(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new Q;change=new Q;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Xi(e,{debounceInterval:typeof i==`number`?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||yt(i,`shiftKey`))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i==`number`?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Xo$1(this._items)?this._items():this._items instanceof gi?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Eo=class extends en{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var xo=class extends en{_origin=`program`;setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Il=new Map;var Oe=class n{_appId=T(nd$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!==`ng`&&(i+=this._appId);let t=Il.get(i);return t===void 0?t=0:t++,Il.set(i,t),`${i}${e?n._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})};var kl=` `;function Yf(n,i,e){let t=qi(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(kl)))}function Xf(n,i,e){let t=qi(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(kl)):n.removeAttribute(i)}function qi(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Pl=`cdk-describedby-message`;var Zi=`cdk-describedby-host`;var Mo=0;var Ll=(()=>{class n{_platform=T(V);_document=T(dr$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Mo++}`;constructor(){T(ge).load(Qt),this._id=T(nd$1)+`-`+Mo++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=No(t,r);typeof t!=`string`?(Ol(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=No(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t==`string`){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Zi}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Zi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement(`div`);Ol(r,this._id),r.textContent=e,t&&r.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(No(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(e),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=qi(e,`aria-describedby`).filter(r=>r.indexOf(Pl)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);Yf(e,`aria-describedby`,r.messageElement.id),e.setAttribute(Zi,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,Xf(e,`aria-describedby`,r.messageElement.id),e.removeAttribute(Zi)}_isElementDescribedByMessage(e,t){let r=qi(e,`aria-describedby`),o=this._messageRegistry.get(t),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let r=t==null?``:`${t}`.trim(),o=e.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function No(n,i){return typeof n==`string`?`${i||``}/${n}`:n}function Ol(n,i){n.id||(n.id=`${Pl}-${i}-${Mo++}`)}var $e=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})($e||{});var Ki;var Ft;function Qi(){if(Ft==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Ft=!1,Ft;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Ft=!0;else{let n=Element.prototype.scrollTo;n?Ft=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Ft=!1}}return Ft}function tn(){if(typeof document!=`object`||!document)return $e.NORMAL;if(Ki==null){let n=document.createElement(`div`),i=n.style;n.dir=`rtl`,i.width=`1px`,i.overflow=`auto`,i.visibility=`hidden`,i.pointerEvents=`none`,i.position=`absolute`;let e=document.createElement(`div`),t=e.style;t.width=`2px`,t.height=`1px`,n.appendChild(e),document.body.appendChild(n),Ki=$e.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ki=n.scrollLeft===0?$e.NEGATED:$e.INVERTED),n.remove()}return Ki}function Ao(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var nn;var Vl=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ro(){if(nn)return nn;if(typeof document!=`object`||!document)return nn=new Set(Vl),nn;let n=document.createElement(`input`);return nn=new Set(Vl.filter(i=>(n.setAttribute(`type`,i),n.type===i))),nn}function oe(n){return n==null?``:typeof n==`string`?n:`${n}px`}function ut(n){return n!=null&&`${n}`!=`false`}function rS(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let r of t){let o=`${r}`.trim();o&&e.push(o)}}return e}var lS={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Zf=new A(`MATERIAL_ANIMATIONS`);var Bl=null;function Fo(){return T(Zf,{optional:!0})?.animationsDisabled||T(Um$1,{optional:!0})===`NoopAnimations`?`di-disabled`:(Bl??=T(Jt).matchMedia(`(prefers-reduced-motion)`).matches,Bl?`reduced-motion`:`enabled`)}function ke(){return Fo()!==`enabled`}var je=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(je||{});var To=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=je.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var jl=qt({passive:!0,capture:!0});var Io=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,jl)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,jl)))}_delegateEventHandler=i=>{let e=ye(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}};var Vn={enterDuration:225,exitDuration:150};var qf=800;var zl=qt({passive:!0,capture:!0});var Ul=[`mousedown`,`touchstart`];var Hl=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Kf=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})();var Bn=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Io;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Se(t)),o&&o.get(ge).load(Kf)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=G(G({},Vn),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||Qf(i,e,r),l=i-r.left,c=e-r.top,u=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${l-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,t.color!=null&&(d.style.backgroundColor=t.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let h=window.getComputedStyle(d),E=h.transitionProperty,x=h.transitionDuration,A=E===`none`||x===`0s`||x===`0s, 0s`||r.width===0&&r.height===0,k=new To(this,d,t,A);d.style.transform=`scale3d(1, 1, 1)`,k.state=je.FADING_IN,t.persistent||(this._mostRecentTransientRipple=k);let H=null;return!A&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ge=()=>{H&&(H.fallbackTimer=null),clearTimeout(B),this._finishRippleTransition(k)},T=()=>this._destroyRipple(k),B=setTimeout(T,u+100);d.addEventListener(`transitionend`,Ge),d.addEventListener(`transitioncancel`,T),H={onTransitionEnd:Ge,onTransitionCancel:T,fallbackTimer:B}}),this._activeRipples.set(k,H),(A||!u)&&this._finishRippleTransition(k),k}fadeOutRipple(i){if(i.state===je.FADING_OUT||i.state===je.HIDDEN)return;let e=i.element,t=G(G({},Vn),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,i.state=je.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Se(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ul.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Hl.forEach(e=>{this._triggerElement.addEventListener(e,this,zl)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===je.FADING_IN?this._startFadeOutTransition(i):i.state===je.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=je.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=je.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=On(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+qf;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!kn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===je.VISIBLE||i.config.terminateOnPointerUp&&i.state===je.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ul.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Hl.forEach(e=>i.removeEventListener(e,this,zl)),this._pointerUpEventsRegistered=!1))}};function Qf(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Oo=new A(`mat-ripple-global-options`);var $l=(()=>{class n{_elementRef=T(Mr$1);_animationsDisabled=ke();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T(Re),t=T(V),r=T(Oo,{optional:!0}),o=T(Ee);this._globalOptions=r||{},this._rippleRenderer=new Bn(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:G(G(G({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,G(G({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,G(G({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,r){t&2&&gh$1(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Gl=(()=>{class n{_animationsDisabled=ke();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,r){t&2&&gh$1(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var Ji=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var th=[`text`];var nh=[[[`mat-icon`]],`*`];var ih=[`mat-icon`,`*`];function rh(n,i){if(n&1&&Xp$1(0,`mat-pseudo-checkbox`,1),n&2){let e=OD$1();Jp$1(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function oh(n,i){if(n&1&&Xp$1(0,`mat-pseudo-checkbox`,3),n&2)Jp$1(`disabled`,OD$1().disabled)}function sh(n,i){if(n&1&&(Mi$1(0,`span`,4),cw(1),Jc$1()),n&2){let e=OD$1();dI(),rl$1(`(`,e.group.label,`)`)}}var ah=new A(`MAT_OPTION_PARENT_COMPONENT`);var lh=new A(`MatOptgroup`);var ko=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}};var Wl=(()=>{class n{_element=T(Mr$1);_changeDetectorRef=T(Hj);_parent=T(ah,{optional:!0});group=T(lh,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=T(Oe).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Yo$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ge;_text;_stateChanges=new Q;constructor(){let e=T(ge);e.load(Ji),e.load(Qt),this._signalDisableRipple=!!this._parent&&Xo$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ko(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-option`]],viewQuery:function(t,r){if(t&1&&lh$1(th,7),t&2){let o;FD(o=jD())&&(r._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,r){t&1&&ih$1(`click`,function(){return r._selectViaInteraction()})(`keydown`,function(s){return r._handleKeydown(s)}),t&2&&(rh$1(`id`,r.id),Kp$1(`aria-selected`,r.selected)(`aria-disabled`,r.disabled.toString()),gh$1(`mdc-list-item--selected`,r.selected)(`mat-mdc-option-multiple`,r.multiple)(`mat-mdc-option-active`,r.active)(`mdc-list-item--disabled`,r.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,$j]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:ih,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,r){t&1&&(kD$1(nh),hD(0,rh,1,2,`mat-pseudo-checkbox`,1),LD(1),Mi$1(2,`span`,2,0),LD(4,1),Jc$1(),hD(5,oh,1,1,`mat-pseudo-checkbox`,3),hD(6,sh,2,1,`span`,4),Xp$1(7,`div`,5)),t&2&&(gD(r.multiple?0:-1),dI(5),gD(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),dI(),gD(r.group&&r.group._inert?6:-1),dI(),Jp$1(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disabled||r.disableRipple))},dependencies:[Gl,$l],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return n})();function US(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let s=0;s<n+1;s++)t[s].group&&t[s].group===r[o]&&o++;return o}return 0}function HS(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}function Yl(n,i){let t=!i?.manualCleanup?i?.injector?.get(pe$1)??T(pe$1):null,r=dh(i?.equal),o;i?.requireSync?o=Yo$1({kind:0},{equal:r}):o=Yo$1({kind:1,value:i?.initialValue},{equal:r});let s,l=n.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(i?.requireSync&&o().kind===0)throw new N(601,!1);return s=t?.onDestroy(l.unsubscribe.bind(l)),xw(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new N(601,!1)}},{equal:i?.equal})}function dh(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var Vo={};function sc(n,i){if(Vo[n]=(Vo[n]||0)+1,typeof i==`function`)return Po(n,(...t)=>z(G({},i(...t)),{type:n}));switch(i?i._as:`empty`){case`empty`:return Po(n,()=>({type:n}));case`props`:return Po(n,t=>z(G({},t),{type:n}));default:throw new Error(`Unexpected config.`)}}function aD(){return{_as:`props`,_p:void 0}}function Po(n,i){return Object.defineProperty(i,"type",{value:n,writable:!1})}function uh(n,i){if(n==null)throw new Error(`${i} must be defined.`)}var ac=`@ngrx/store/init`;var rn=(()=>{class n extends Bn$1{constructor(){super({type:ac})}next(e){if(typeof e==`function`)throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>`u`)throw new TypeError(`Actions must be objects`);if(typeof e.type>`u`)throw new TypeError(`Actions must have a type property`);super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=ae({token:n,factory:n.ɵfac})}}return n})();var fh=[rn];var lc=new A(`@ngrx/store Internal Root Guard`);var Xl=new A(`@ngrx/store Internal Initial State`);var Uo=new A(`@ngrx/store Initial State`);var cc=new A(`@ngrx/store Reducer Factory`);var Zl=new A(`@ngrx/store Internal Reducer Factory Provider`);var dc=new A(`@ngrx/store Initial Reducers`);var Lo=new A(`@ngrx/store Internal Initial Reducers`);var ql=new A(`@ngrx/store Internal Store Reducers`);new A(`@ngrx/store Internal Store Features`);new A(`@ngrx/store Feature Reducers`);var Kl=new A(`@ngrx/store User Provided Meta Reducers`);var er=new A(`@ngrx/store Meta Reducers`);var Ql=new A(`@ngrx/store Internal Resolved Meta Reducers`);var Jl=new A(`@ngrx/store User Runtime Checks Config`);var ec=new A(`@ngrx/store Internal User Runtime Checks Config`);var jn=new A(`@ngrx/store Internal Runtime Checks`);var Ho=new A(`@ngrx/store Check if Action types are unique`);var zn=new A(`@ngrx/store Root Store Provider`);var tr=new A(`@ngrx/store Feature State Provider`);function ph(n,i={}){let e=Object.keys(n),t={};for(let o=0;o<e.length;o++){let s=e[o];typeof n[s]==`function`&&(t[s]=n[s])}let r=Object.keys(t);return function(s,l){s=s===void 0?i:s;let c=!1,u={};for(let d=0;d<r.length;d++){let h=r[d],E=t[h],x=s[h],A=E(x,l);u[h]=A,c=c||A!==x}return c?u:s}}function gh(n,i){return Object.keys(n).filter(e=>e!==i).reduce((e,t)=>Object.assign(e,{[t]:n[t]}),{})}function uc(...n){return function(i){if(n.length===0)return i;let e=n[n.length-1];return n.slice(0,-1).reduceRight((r,o)=>o(r),e(i))}}function fc(n,i){return Array.isArray(i)&&i.length>0&&(n=uc.apply(null,[...i,n])),(e,t)=>{let r=n(e);return(o,s)=>(o=o===void 0?t:o,r(o,s))}}function _h(n){let i=Array.isArray(n)&&n.length>0?uc(...n):e=>e;return(e,t)=>(e=i(e),(r,o)=>(r=r===void 0?t:r,e(r,o)))}var Un=class extends _{};var nr=class extends rn{};var bh=`@ngrx/store/update-reducers`;var ir=(()=>{class n extends Bn$1{get currentReducers(){return this.reducers}constructor(e,t,r,o){super(o(r,t)),this.dispatcher=e,this.initialState=t,this.reducers=r,this.reducerFactory=o}addFeature(e){this.addFeatures([e])}addFeatures(e){let t=e.reduce((r,{reducers:o,reducerFactory:s,metaReducers:l,initialState:c,key:u})=>{return r[u]=typeof o==`function`?_h(l)(o,c):fc(s,l)(o,c),r},{});this.addReducers(t)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(t=>t.key))}addReducer(e,t){this.addReducers({[e]:t})}addReducers(e){this.reducers=G(G({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(t=>{this.reducers=gh(this.reducers,t)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:bh,features:e})}ngOnDestroy(){this.complete()}static{this.ɵfac=function(t){return new(t||n)(Oe$1(nr),Oe$1(Uo),Oe$1(dc),Oe$1(cc))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac})}}return n})();var vh=[ir,{provide:Un,useExisting:ir},{provide:nr,useExisting:rn}];var Hn=(()=>{class n extends Q{ngOnDestroy(){this.complete()}static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})()}static{this.ɵprov=ae({token:n,factory:n.ɵfac})}}return n})();var yh=[Hn];var rr=class extends _{};var tc=(()=>{class n extends Bn$1{static{this.INIT=ac}constructor(e,t,r,o){super(o);let l=e.pipe(Fn$1(Ng$1)).pipe(em$1(t)),c={state:o},u=l.pipe(Zg(Sh,c));this.stateSubscription=u.subscribe(({state:d,action:h})=>{this.next(d),r.next(h)}),this.state=Yl(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.ɵfac=function(t){return new(t||n)(Oe$1(rn),Oe$1(Un),Oe$1(Hn),Oe$1(Uo))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac})}}return n})();function Sh(n={state:void 0},[i,e]){let{state:t}=n;return{state:e(t,i),action:i}}var Dh=[tc,{provide:rr,useExisting:tc}];var Tt=(()=>{class n extends _{constructor(e,t,r,o){super(),this.actionsObserver=t,this.reducerManager=r,this.injector=o,this.source=e,this.state=e.state}select(e,...t){return Ch.call(null,e,...t)(this)}selectSignal(e,t){return xw(()=>e(this.state()),t)}lift(e){let t=new n(this,this.actionsObserver,this.reducerManager);return t.operator=e,t}dispatch(e,t){if(typeof e==`function`)return this.processDispatchFn(e,t);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,t){this.reducerManager.addReducer(e,t)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,t){uh(this.injector,`Store Injector`);return od$1(()=>{let o=e();Ph$1(()=>this.dispatch(o))},{injector:t?.injector??Eh()??this.injector})}static{this.ɵfac=function(t){return new(t||n)(Oe$1(rr),Oe$1(rn),Oe$1(ir),Oe$1(Ee))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac})}}return n})();var wh=[Tt];function Ch(n,i,...e){return function(r){let o;if(typeof n==`string`){let s=[i,...e].filter(Boolean);o=r.pipe(Qg(n,...s))}else if(typeof n==`function`)o=r.pipe(oe$1(s=>n(s,i)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return o.pipe(Ig$1())}}function Eh(){try{return T(Ee)}catch{return}}var $o=`https://ngrx.io/guide/store/configuration/runtime-checks`;function nc(n){return n===void 0}function ic(n){return n===null}function hc(n){return Array.isArray(n)}function xh(n){return typeof n==`string`}function Nh(n){return typeof n==`boolean`}function Mh(n){return typeof n==`number`}function mc(n){return typeof n==`object`&&n!==null}function Ah(n){return mc(n)&&!hc(n)}function Rh(n){if(!Ah(n))return!1;let i=Object.getPrototypeOf(n);return i===Object.prototype||i===null}function Bo(n){return typeof n==`function`}function Fh(n){return Bo(n)&&n.hasOwnProperty(`ɵcmp`)}function Th(n,i){return Object.prototype.hasOwnProperty.call(n,i)}var Ih=!1;function Oh(){return Ih}function rc(n,i){return n===i}function kh(n,i,e){for(let t=0;t<n.length;t++)if(!e(n[t],i[t]))return!0;return!1}function pc(n,i=rc,e=rc){let t=null,r=null,o;function s(){t=null,r=null}function l(d=void 0){o={result:d}}function c(){o=void 0}function u(){if(o!==void 0)return o.result;if(!t)return r=n.apply(null,arguments),t=arguments,r;if(!kh(arguments,t,i))return r;let d=n.apply(null,arguments);return t=arguments,e(r,d)?r:(r=d,d)}return{memoized:u,reset:s,setResult:l,clearResult:c}}function Ph(...n){return Vh(pc)(...n)}function Lh(n,i,e,t){if(e===void 0){let o=i.map(s=>s(n));return t.memoized.apply(null,o)}let r=i.map(o=>o(n,e));return t.memoized.apply(null,[...r,e])}function Vh(n,i={stateFn:Lh}){return function(...e){let t=e;if(Array.isArray(t[0])){let[d,...h]=t;t=[...d,...h]}else t.length===1&&Bh(t[0])&&(t=jh(t[0]));let r=t.slice(0,t.length-1),o=t[t.length-1],s=r.filter(d=>d.release&&typeof d.release==`function`),l=n(function(...d){return o.apply(null,d)}),c=pc(function(d,h){return i.stateFn.apply(null,[d,r,h,l])});function u(){c.reset(),l.reset(),s.forEach(d=>d.release())}return Object.assign(c.memoized,{release:u,projector:l.memoized,setResult:c.setResult,clearResult:c.clearResult})}}function lD(n){return Ph(i=>{let e=i[n];return!Oh()&&Gj()&&!(n in i)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function Bh(n){return!!n&&typeof n==`object`&&Object.values(n).every(i=>typeof i==`function`)}function jh(n){let i=Object.values(n),e=Object.keys(n),t=(...r)=>e.reduce((o,s,l)=>z(G({},o),{[s]:r[l]}),{});return[...i,t]}function zh(n){return n instanceof A?T(n):n}function gc(n){return typeof n==`function`?n():n}function Uh(n,i){return n.concat(i)}function Hh(){if(T(Tt,{optional:!0,skipSelf:!0}))throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);return`guarded`}function $h(n,i){return function(e,t){let o=n(e,i.action(t)?jo(t):t);return i.state()?jo(o):o}}function jo(n){Object.freeze(n);let i=Bo(n);return Object.getOwnPropertyNames(n).forEach(e=>{if(!e.startsWith(`ɵ`)&&Th(n,e)&&(!i||e!==`caller`&&e!==`callee`&&e!==`arguments`)){let t=n[e];(mc(t)||Bo(t))&&!Object.isFrozen(t)&&jo(t)}}),n}function Gh(n,i){return function(e,t){if(i.action(t))oc(zo(t),`action`);let r=n(e,t);if(i.state())oc(zo(r),`state`);return r}}function zo(n,i=[]){return(nc(n)||ic(n))&&i.length===0?{path:[`root`],value:n}:Object.keys(n).reduce((t,r)=>{if(t)return t;let o=n[r];return Fh(o)?t:nc(o)||ic(o)||Mh(o)||Nh(o)||xh(o)||hc(o)?!1:Rh(o)?zo(o,[...i,r]):{path:[...i,r],value:o}},!1)}function oc(n,i){if(n===!1)return;let e=n.path.join(`.`),t=new Error(`Detected unserializable ${i} at "${e}". ${$o}#strict${i}serializability`);throw t.value=n.value,t.unserializablePath=e,t}function Wh(n,i){return function(e,t){if(i.action(t)&&!Re.isInAngularZone())throw new Error(`Action '${t.type}' running outside NgZone. ${$o}#strictactionwithinngzone`);return n(e,t)}}function Yh(n){return Gj()?G({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Xh({strictActionSerializability:n,strictStateSerializability:i}){return e=>n||i?Gh(e,{action:t=>n&&!Go(t),state:()=>i}):e}function Zh({strictActionImmutability:n,strictStateImmutability:i}){return e=>n||i?$h(e,{action:t=>n&&!Go(t),state:()=>i}):e}function Go(n){return n.type.startsWith(`@ngrx`)}function qh({strictActionWithinNgZone:n}){return i=>n?Wh(i,{action:e=>n&&!Go(e)}):i}function Kh(n){return[{provide:ec,useValue:n},{provide:Jl,useFactory:Jh,deps:[ec]},{provide:jn,deps:[Jl],useFactory:Yh},{provide:er,multi:!0,deps:[jn],useFactory:Zh},{provide:er,multi:!0,deps:[jn],useFactory:Xh},{provide:er,multi:!0,deps:[jn],useFactory:qh}]}function Qh(){return[{provide:Ho,multi:!0,deps:[jn],useFactory:em}]}function Jh(n){return n}function em(n){if(!n.strictActionTypeUniqueness)return;let i=Object.entries(Vo).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(`, `)}. ${$o}#strictactiontypeuniqueness`)}function tm(n={},i={}){return[{provide:lc,useFactory:Hh},{provide:Xl,useValue:i.initialState},{provide:Uo,useFactory:gc,deps:[Xl]},{provide:Lo,useValue:n},{provide:ql,useExisting:n instanceof A?n:Lo},{provide:dc,deps:[Lo,[new My(ql)]],useFactory:zh},{provide:Kl,useValue:i.metaReducers?i.metaReducers:[]},{provide:Ql,deps:[er,Kl],useFactory:Uh},{provide:Zl,useValue:i.reducerFactory?i.reducerFactory:ph},{provide:cc,deps:[Zl,Ql],useFactory:fc},fh,vh,yh,Dh,wh,Kh(i.runtimeChecks),Qh()]}function nm(){T(rn),T(Un),T(Hn),T(Tt),T(lc,{optional:!0}),T(Ho,{optional:!0})}var im=[{provide:zn,useFactory:nm},Eu$1(()=>T(zn))];function cD(n,i){return Ro$1([...tm(n,i),im])}Eu$1(()=>T(tr));function uD(...n){return{reducer:n.pop(),types:n.map(t=>t.type)}}function fD(n,...i){let e=new Map;for(let t of i)for(let r of t.types){let o=e.get(r);if(o){let s=(l,c)=>t.reducer(o(l,c),c);e.set(r,s)}else e.set(r,t.reducer)}return function(t=n,r){let o=e.get(r.type);return o?o(t,r):t}}var Ec=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(t){return new(t||n)(kr(Xa$1),kr(Mr$1))};static ɵdir=QE({type:n})}return n})();var xc=(()=>{class n extends Ec{static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,features:[Up$1]})}return n})();var mr=new A(``);var sm={provide:mr,useExisting:Co$1(()=>Nc),multi:!0};function am(){let n=Ve()?Ve().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var lm=new A(``);var Nc=(()=>{class n extends Ec{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode??=!am()}writeValue(e){let t=e??``;this.setProperty(`value`,t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(t){return new(t||n)(kr(Xa$1),kr(Mr$1),kr(lm,8))};static ɵdir=QE({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(t,r){t&1&&ih$1(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[vw([sm]),Up$1]})}return n})();function Ko(n){return n==null||Qo(n)===0}function Qo(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var Ot=new A(``);var pr=new A(``);var cm=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var qn=class{static min(i){return Mc(i)}static max(i){return Ac(i)}static required(i){return Rc(i)}static requiredTrue(i){return dm(i)}static email(i){return um(i)}static minLength(i){return fm(i)}static maxLength(i){return hm(i)}static pattern(i){return mm(i)}static nullValidator(i){return sr()}static compose(i){return Pc(i)}static composeAsync(i){return Lc(i)}};function Mc(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Ac(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Rc(n){return Ko(n.value)?{required:!0}:null}function dm(n){return n.value===!0?null:{required:!0}}function um(n){return Ko(n.value)||cm.test(n.value)?null:{email:!0}}function fm(n){return i=>{let e=i.value?.length??Qo(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function hm(n){return i=>{let e=i.value?.length??Qo(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function mm(n){if(!n)return sr;let i,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Ko(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function sr(n){return null}function Fc(n){return n!=null}function Tc(n){return Zc$1(n)?_e(n):n}function Ic(n){let i={};return n.forEach(e=>{i=e!=null?G(G({},i),e):i}),Object.keys(i).length===0?null:i}function Oc(n,i){return i.map(e=>e(n))}function pm(n){return!n.validate}function kc(n){return n.map(i=>pm(i)?i:e=>i.validate(e))}function Pc(n){if(!n)return null;let i=n.filter(Fc);return i.length==0?null:function(e){return Ic(Oc(e,i))}}function Jo(n){return n!=null?Pc(kc(n)):null}function Lc(n){if(!n)return null;let i=n.filter(Fc);return i.length==0?null:function(e){return kg$1(Oc(e,i).map(Tc)).pipe(oe$1(Ic))}}function es(n){return n!=null?Lc(kc(n)):null}function _c(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Vc(n){return n._rawValidators}function Bc(n){return n._rawAsyncValidators}function Wo(n){return n?Array.isArray(n)?n:[n]:[]}function ar(n,i){return Array.isArray(n)?n.includes(i):n===i}function bc(n,i){let e=Wo(i);return Wo(n).forEach(r=>{ar(e,r)||e.push(r)}),e}function vc(n,i){return Wo(i).filter(e=>!ar(n,e))}var lr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Jo(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=es(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}};var ft=class extends lr{name;get formDirective(){return null}get path(){return null}};var $n=`VALID`;var or=`INVALID`;var on=`PENDING`;var Gn=`DISABLED`;var St=class{};var cr=class extends St{value;source;constructor(i,e){super(),this.value=i,this.source=e}};var Yn=class extends St{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}};var Xn=class extends St{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}};var sn=class extends St{status;source;constructor(i,e){super(),this.status=i,this.source=e}};var dr=class extends St{source;constructor(i){super(),this.source=i}};var It=class extends St{source;constructor(i){super(),this.source=i}};function ts(n){return(gr(n)?n.validators:n)||null}function gm(n){return Array.isArray(n)?Jo(n):n||null}function ns(n,i){return(gr(i)?i.asyncValidators:n)||null}function _m(n){return Array.isArray(n)?es(n):n||null}function gr(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function jc(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new N(1e3,``);if(!Uc(t,e))throw new N(1001,``)}function zc(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new N(-1002,``)})}var an=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Yo$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ph$1(this.statusReactive)}set status(i){Ph$1(()=>this.statusReactive.set(i))}_status=xw(()=>this.statusReactive());statusReactive=Yo$1(void 0);get valid(){return this.status===$n}get invalid(){return this.status===or}get pending(){return this.status===on}get disabled(){return this.status===Gn}get enabled(){return this.status!==Gn}errors;get pristine(){return Ph$1(this.pristineReactive)}set pristine(i){Ph$1(()=>this.pristineReactive.set(i))}_pristine=xw(()=>this.pristineReactive());pristineReactive=Yo$1(!0);get dirty(){return!this.pristine}get touched(){return Ph$1(this.touchedReactive)}set touched(i){Ph$1(()=>this.touchedReactive.set(i))}_touched=xw(()=>this.touchedReactive());touchedReactive=Yo$1(!1);get untouched(){return!this.touched}_events=new Q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(bc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(bc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(vc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(vc(i,this._rawAsyncValidators))}hasValidator(i){return ar(this._rawValidators,i)}hasAsyncValidator(i){return ar(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(z(G({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Xn(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Xn(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(z(G({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Yn(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Yn(!0,t))}markAsPending(i={}){this.status=on;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new sn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(z(G({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Gn,this.errors=null,this._forEachChild(r=>{r.disable(z(G({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new cr(this.value,t)),this._events.next(new sn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(G({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=$n,this._forEachChild(t=>{t.enable(z(G({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(z(G({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$n||this.status===on)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new cr(this.value,e)),this._events.next(new sn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(z(G({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gn:$n}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=on,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Tc(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new sn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new Ge,this.statusChanges=new Ge}_calculateStatus(){return this._allControlsDisabled()?Gn:this.errors?or:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(on)?on:this._anyControlsHaveStatus(or)?or:$n}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Yn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Xn(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){gr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=gm(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=_m(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ph$1(()=>this._hasRequired.set(this.hasValidator(qn.required)))}};function Uc(n,i){return Object.hasOwn(n,i)}function bm(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function vm(n,i,e,t){switch(e){case`name`:n.setAttribute(i,e,t);break;case`disabled`:case`readonly`:case`required`:t?n.setAttribute(i,e,``):n.removeAttribute(i,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var Yo=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};function Hc(n){return typeof n==`number`?n:parseFloat(n)}var is=(()=>{class n{_validator=sr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):sr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,features:[iy]})}return n})();var ym={provide:Ot,useExisting:Co$1(()=>Sm),multi:!0};var Sm=(()=>{class n extends is{max;inputName=`max`;normalizeInput=e=>Hc(e);createValidator=e=>Ac(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[`input`,`type`,`number`,`max`,``,`formControlName`,``],[`input`,`type`,`number`,`max`,``,`formControl`,``],[`input`,`type`,`number`,`max`,``,`ngModel`,``]],hostVars:1,hostBindings:function(t,r){t&2&&Kp$1(`max`,r._enabled?r.max:null)},inputs:{max:`max`},standalone:!1,features:[vw([ym]),Up$1]})}return n})();var Dm={provide:Ot,useExisting:Co$1(()=>wm),multi:!0};var wm=(()=>{class n extends is{min;inputName=`min`;normalizeInput=e=>Hc(e);createValidator=e=>Mc(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(t,r){t&2&&Kp$1(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[vw([Dm]),Up$1]})}return n})();var Cm={provide:Ot,useExisting:Co$1(()=>$c),multi:!0};var $c=(()=>{class n extends is{required;inputName=`required`;normalizeInput=$j;createValidator=e=>Rc;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(t,r){t&2&&Kp$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[vw([Cm]),Up$1]})}return n})();var Em=new A(``);var Kn=new A(``,{factory:()=>_r});var _r=`always`;function Gc(n,i){return[...i.path,n]}function Xo(n,i,e=_r){rs(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&i.valueAccessor.setDisabledState?.(n.disabled),Nm(n,i),Am(n,i),Mm(n,i),xm(n,i)}function yc(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),fr(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ur(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function xm(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function rs(n,i){let e=Vc(n);i.validator!==null?n.setValidators(_c(e,i.validator)):typeof e==`function`&&n.setValidators([e]);let t=Bc(n);i.asyncValidator!==null?n.setAsyncValidators(_c(t,i.asyncValidator)):typeof t==`function`&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();ur(i._rawValidators,r),ur(i._rawAsyncValidators,r)}function fr(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=Vc(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=Bc(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return ur(i._rawValidators,t),ur(i._rawAsyncValidators,t),e}function Nm(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&Wc(n,i)})}function Mm(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&Wc(n,i),n.updateOn!==`submit`&&n.markAsTouched()})}function Wc(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Am(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Yc(n,i){rs(n,i)}function Rm(n,i){return fr(n,i)}function Xc(n,i){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Fm(n){return Object.getPrototypeOf(n.constructor)===xc}function Zc(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn===`submit`&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Tm(n,i){if(!i)return null;let e,t,r;return i.forEach(o=>{o.constructor===Nc?e=o:Fm(o)?t=o:r=o}),r||t||e||null}function Im(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var qc={provide:Em,useFactory:()=>{let n=T(tt,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}};var tt=class extends lr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Tm(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(pe$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Hj);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new j,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=bm(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof $c))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,`touched`,t.touched),this.bindControlProperty(i,r,`dirty`,t.dirty),this.bindControlProperty(i,r,`valid`,t.valid),this.bindControlProperty(i,r,`invalid`,t.invalid),this.bindControlProperty(i,r,`pending`,t.pending),this.bindControlProperty(i,r,`disabled`,t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,`required`,this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);i.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let o=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!o&&(t===`disabled`||t===`required`)&&this.renderer&&vm(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new Yo({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=xw(()=>{let r=i();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),od$1(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var hr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var AD=(()=>{class n extends hr{constructor(e){super(e)}static ɵfac=function(t){return new(t||n)(kr(tt,2))};static ɵdir=QE({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(t,r){t&2&&gh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Up$1]})}return n})();var RD=(()=>{class n extends hr{constructor(e){super(e)}static ɵfac=function(t){return new(t||n)(kr(ft,10))};static ɵdir=QE({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(t,r){t&2&&gh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[Up$1]})}return n})();var ln=class extends an{constructor(i,e,t){super(ts(e),ns(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this._find(i)||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){Ph$1(()=>{zc(this,!0,i),Object.keys(i).forEach(t=>{jc(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return Uc(this.controls,i)?this.controls[i]:null}};var Zo=class extends ln{};var Om={provide:ft,useExisting:Co$1(()=>os)};var Wn=Promise.resolve();var os=(()=>{class n extends ft{callSetDisabledState;get submitted(){return Ph$1(this.submittedReactive)}_submitted=xw(()=>this.submittedReactive());submittedReactive=Yo$1(!1);_directives=new Set;form;ngSubmit=new Ge;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new ln({},Jo(e),es(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Wn.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Wn.then(()=>{let t=this._findContainer(e.path),r=new ln({});Yc(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Wn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Zc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new dr(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(t){return new(t||n)(kr(Ot,10),kr(pr,10),kr(Kn,8))};static ɵdir=QE({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(t,r){t&1&&ih$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vw([Om]),Up$1]})}return n})();function Sc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Dc(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Zn=class extends an{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(ts(e),ns(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Dc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){Ph$1(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new It(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Sc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Sc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Dc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var km=n=>n instanceof Zn;var Pm=(()=>{class n extends ft{callSetDisabledState;get submitted(){return Ph$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=xw(()=>this._submittedReactive());_submittedReactive=Yo$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(fr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){yc(e.control||null,e,!1),Im(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Zc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new dr(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(yc(t||null,e),km(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Yc(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Rm(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){rs(this.form,this),this._oldForm&&fr(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(t){return new(t||n)(kr(Ot,10),kr(pr,10),kr(Kn,8))};static ɵdir=QE({type:n,features:[Up$1,iy]})}return n})();var Lm={provide:ft,useExisting:Co$1(()=>ss)};var ss=(()=>{class n extends Pm{form=null;ngSubmit=new Ge;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(t,r){t&1&&ih$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vw([Lm]),Up$1]})}return n})();var Vm={provide:tt,useExisting:Co$1(()=>Bm)};var wc=Promise.resolve();var Bm=(()=>{class n extends tt{_changeDetectorRef;callSetDisabledState;control=new Zn;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new Ge;constructor(e,t,r,o,s,l,c,u){super(c,u,o),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Xc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Xo(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Xo(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){wc.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&$j(t);wc.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Gc(e,this._parent):[e]}static ɵfac=function(t){return new(t||n)(kr(ft,9),kr(Ot,10),kr(pr,10),kr(mr,10),kr(Hj,8),kr(Kn,8),kr(Ee,8),kr(Xa$1,8))};static ɵdir=QE({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[vw([Vm,qc]),Up$1,iy,KE(null)]})}return n})();var TD=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var jm={provide:mr,useExisting:Co$1(()=>zm),multi:!0};var zm=(()=>{class n extends xc{writeValue(e){let t=e??``;this.setProperty(`value`,t)}registerOnChange(e){this.onChange=t=>{e(t==``?null:parseFloat(t))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(t,r){t&1&&ih$1(`input`,function(s){return r.onChange(s.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[vw([jm]),Up$1]})}return n})();var qo=class extends an{constructor(i,e,t){super(ts(e),ns(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Ph$1(()=>{zc(this,!1,i),i.forEach((t,r)=>{jc(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Kc=new A(``);var Um={provide:tt,useExisting:Co$1(()=>Hm)};var Hm=(()=>{class n extends tt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Ge;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,s,l,c){super(c,l,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Xo(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),Xc(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Gc(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(t){return new(t||n)(kr(ft,13),kr(Ot,10),kr(pr,10),kr(mr,10),kr(Kc,8),kr(Xa$1,8),kr(Ee,8))};static ɵdir=QE({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[vw([Um,qc]),Up$1,iy,KE(null)]})}return n})();var Qc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();function Cc(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ID=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return Cc(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new ln(r,o)}record(e,t=null){return new Zo(this._reduceControls(e),t)}control(e,t,r){let o={};return this.useNonNullable?(Cc(t)?o=t:(o.validators=t,o.asyncValidators=r),new Zn(e,z(G({},o),{nonNullable:!0}))):new Zn(e,t,r)}array(e,t,r){return new qo(e.map(s=>this._createControl(s)),t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Zn)return e;if(e instanceof an)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var OD=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Kn,useValue:e.callSetDisabledState??_r}]}}static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Qc]})}return n})();var kD=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Kc,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:Kn,useValue:e.callSetDisabledState??_r}]}}static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Qc]})}return n})();var $m={capture:!0};var Gm=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var as=`mat-ripple-loader-uninitialized`;var ls=`mat-ripple-loader-class-name`;var Jc=`mat-ripple-loader-centered`;var br=`mat-ripple-loader-disabled`;var ed=(()=>{class n{_document=T(dr$1);_animationsDisabled=ke();_globalRippleOptions=T(Oo,{optional:!0});_platform=T(V);_ngZone=T(Re);_injector=T(Ee);_eventCleanups;_hosts=new Map;constructor(){let e=T(br$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Gm.map(t=>e.listen(this._document,t,this._onInteraction,$m)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(as,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(ls))&&e.setAttribute(ls,t.className||``),t.centered&&e.setAttribute(Jc,``),t.disabled&&e.setAttribute(br,``)}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(br,``):e.removeAttribute(br)}_onInteraction=e=>{let t=ye(e);if(t instanceof HTMLElement){let r=t.closest(`[${as}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(ls)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Vn.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Vn.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(br),rippleConfig:{centered:e.hasAttribute(Jc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new Bn(l,this._ngZone,t,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:u}),e.removeAttribute(as)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Wm=[`*`,[[``,`progressIndicator`,``]]];var Ym=[`*`,`[progressIndicator]`];function Xm(n,i){n&1&&(Xc$1(0,`div`,1),LD(1,1),el$1())}var Zm=new A(`MAT_BUTTON_CONFIG`);function td(n){return n==null?void 0:Uj(n)}var cs=(()=>{class n{_elementRef=T(Mr$1);_ngZone=T(Re);_animationsDisabled=ke();_config=T(Zm,{optional:!0});_focusMonitor=T(Kt);_cleanupClick;_renderer=T(Xa$1);_rippleLoader=T(ed);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Pj(!1,{transform:$j});constructor(){T(ge).load(Ji);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(t,r){t&2&&(Kp$1(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),KD(r.color?`mat-`+r.color:``),gh$1(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,$j],disabled:[2,`disabled`,`disabled`,$j],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,td],_tabindex:[2,`tabindex`,`_tabindex`,td],showProgress:[1,`showProgress`]}})}return n})();var qm=(()=>{class n extends cs{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Up$1],ngContentSelectors:Ym,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,r){t&1&&(kD$1(Wm),eh(0,`span`,0),LD(1),hD(2,Xm,2,0,`div`,1),eh(3,`span`,2)(4,`span`,3)),t&2&&(dI(2),gD(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var Km=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T(dr$1)});var Qm=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nd(n){let i=n?.toLowerCase()||``;return i===`auto`&&typeof navigator<`u`&&navigator?.language?Qm.test(navigator.language)?`rtl`:`ltr`:i===`rtl`?`rtl`:`ltr`}var nt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Yo$1(`ltr`);change=new Ge;constructor(){let e=T(Km,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nd(t||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var W=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();var vr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W]})}return n})();var Jm=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var ep=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function tp(n,i){n&1&&(Xc$1(0,`div`,2),LD(1,3),el$1())}var id=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var uw=(()=>{class n extends cs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=np(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?id.get(this._appearance):null,o=id.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Up$1],ngContentSelectors:ep,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,r){t&1&&(kD$1(Jm),eh(0,`span`,0),LD(1),Xc$1(2,`span`,1),LD(3,1),el$1(),LD(4,2),hD(5,tp,2,0,`div`,2),eh(6,`span`,3)(7,`span`,4)),t&2&&(gh$1(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),dI(5),gD(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function np(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var fw=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[vr,W]})}return n})();function rd(n){return Error(`Unable to find icon with the name "${n}"`)}function ip(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function od(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function sd(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ht=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}};var ld=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace(``,e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace(``,e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new ht(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let s=this._sanitizer.sanitize(Z.HTML,r);if(!s)throw sd(r);let l=Mt(s);return this._addSvgIconConfig(e,t,new ht(``,l,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new ht(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Z.HTML,t);if(!o)throw sd(t);let s=Mt(o);return this._addSvgIconSetConfig(e,new ht(``,s,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Z.RESOURCE_URL,e);if(!t)throw od(e);let r=this._cachedIconsByUrl.get(t);return r?ss$1(yr(r)):this._loadSvgIconFromConfig(new ht(e,null)).pipe(Xg(o=>this._cachedIconsByUrl.set(t,o)),oe$1(o=>yr(o)))}getNamedSvgIcon(e,t=``){let r=ad(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):as$1(rd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?ss$1(yr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(oe$1(t=>yr(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return ss$1(r);return kg$1(t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(ls$1(l=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(Z.RESOURCE_URL,s.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(u)),ss$1(null)})))).pipe(oe$1(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw rd(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(s,e,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Xg(t=>e.svgText=t),oe$1(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?ss$1(null):this._fetchIcon(e).pipe(Xg(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute(`id`),s.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(s),r);let l=this._svgElementFromString(Mt(`<svg></svg>`));return l.appendChild(s),this._setSvgAttributes(l,r)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let r=t.querySelector(`svg`);if(!r)throw Error(`<svg> tag not found`);return r}_toSvgElement(e){let t=this._svgElementFromString(Mt(`<svg></svg>`)),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:l}=r[o];s!==`id`&&t.setAttribute(s,l)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ip();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(Z.RESOURCE_URL,t);if(!s)throw od(t);let l=this._inProgressUrlFetches.get(s);if(l)return l;let c=this._httpClient.get(s,{responseType:`text`,withCredentials:o}).pipe(oe$1(u=>Mt(u)),$g(()=>this._inProgressUrlFetches.delete(s)),hs$1());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(ad(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return rp(o)?new ht(o.url,null,o.options):new ht(o,null)}}static ɵfac=function(t){return new(t||n)(Oe$1(zi,8),Oe$1(In),Oe$1(dr$1,8),Oe$1(Ye))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function yr(n){return n.cloneNode(!0)}function ad(n,i){return n+`:`+i}function rp(n){return!!(n.url&&n.options)}var op=[`*`];var sp=new A(`MAT_ICON_DEFAULT_OPTIONS`);var ap=new A(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=T(dr$1),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:``}}});var cd=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var lp=cd.map(n=>`[${n}]`).join(`, `);var cp=/^url\(['"]?#(.*?)['"]?\)$/;var Fw=(()=>{class n{_elementRef=T(Mr$1);_iconRegistry=T(ld);_location=T(ap);_errorHandler=T(Ye);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=j.EMPTY;constructor(){let e=T(new Fh$1(`aria-hidden`),{optional:!0}),t=T(sp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()===`svg`)&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(lp),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)cd.forEach(s=>{let l=t[o],c=l.getAttribute(s),u=c?c.match(cp):null;if(u){let d=r.get(l);d||(d=[],r.set(l,d)),d.push({name:s,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(tn$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(t,r){t&2&&(Kp$1(`data-mat-icon-type`,r._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,r._svgName||r.fontIcon)(`data-mat-icon-namespace`,r._svgNamespace||r.fontSet)(`fontIcon`,r._usingFontIcon()?r.fontIcon:null),KD(r.color?`mat-`+r.color:``),gh$1(`mat-icon-inline`,r.inline)(`mat-icon-no-color`,r.color!==`primary`&&r.color!==`accent`&&r.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,$j],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:op,decls:1,vars:0,template:function(t,r){t&1&&(kD$1(),LD(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})();var Tw=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W]})}return n})();var ds=class{};function dp(n){return n&&typeof n.connect==`function`&&!(n instanceof rs$1)}var mt=(function(n){return n[n.REPLACED=0]=`REPLACED`,n[n.INSERTED=1]=`INSERTED`,n[n.MOVED=2]=`MOVED`,n[n.REMOVED=3]=`REMOVED`,n})(mt||{});var dd=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,o){i.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let h=()=>t(s,l,c);u=this._insertView(h,c,e,r(s)),d=u?mt.INSERTED:mt.REPLACED}else c==null?(this._detachAndCacheView(l,e),d=mt.REMOVED):(u=this._moveView(l,c,e,r(s)),d=mt.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=r;return}let s=i();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let o=t.get(i);return t.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var up=20;var kt=(()=>{class n{_ngZone=T(Re);_platform=T(V);_renderer=T(br$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Q;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=up){return this._platform.isBrowser?new _(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Pg$1(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ss$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Hn$1(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=Se(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var fp=(()=>{class n{elementRef=T(Mr$1);scrollDispatcher=T(kt);ngZone=T(Re);dir=T(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Q;_renderer=T(Xa$1);_cleanupScroll;_elementScrolled=new Q;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&tn()!=$e.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),tn()==$e.INVERTED?e.left=e.right:tn()==$e.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Qi()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,r=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?r:t:e==`end`&&(e=s?t:r),s&&tn()==$e.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&tn()==$e.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var hp=20;var cn=(()=>{class n{_platform=T(V);_listeners;_viewportSize=null;_change=new Q;_document=T(dr$1);constructor(){let e=T(Re),t=T(br$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen(`window`,`resize`,r),t.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=hp){return e>0?this._change.pipe(Pg$1(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var nC=new A(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Qn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();var us=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W,Qn,W,Qn]})}return n})();var Jn=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var ei=class extends Jn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}};var ti=class extends Jn{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var fs=class extends Jn{element;constructor(i){super(),this.element=i instanceof Mr$1?i.nativeElement:i}};var Sr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ei)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ti)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof fs)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Dr=class extends Sr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(xn$1,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||Ee.NULL,o=r.get(fe,t.injector);e=Wj(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var cC=(()=>{class n extends Sr{_moduleRef=T(xn$1,{optional:!0});_document=T(dr$1);_viewContainerRef=T(Bi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Ge;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(n)))(r||n)}})();static ɵdir=QE({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Up$1]})}return n})();var ud=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();var fd=Qi();function yd(n){return new wr(n.get(cn),n.get(dr$1))}var wr=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=oe(-this._previousScrollPosition.left),i.style.top=oe(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||``,s=r.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),fd&&(t.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fd&&(t.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Sd(n,i){return new Cr(n.get(kt),n.get(Re),n.get(cn),i)}var Cr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Hn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ni=class{enable(){}disable(){}attach(){}};function ms(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,s=n.left>e.right;return t||r||o||s})}function hd(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,s=n.right>e.right;return t||r||o||s})}function ri(n,i){return new Er(n.get(kt),n.get(cn),n.get(Re),i)}var Er=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();ms(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Dd=(()=>{class n{_injector=T(Ee);noop=()=>new ni;close=e=>Sd(this._injector,e);block=()=>yd(this._injector);reposition=e=>ri(this._injector,e);static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var ii=class{positionStrategy;scrollStrategy=new ni;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var xr=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var wd=(()=>{class n{_attachedOverlays=[];_document=T(dr$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Cd=(()=>{class n extends wd{_ngZone=T(Re);_renderer=T(br$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Ed=(()=>{class n extends wd{_platform=T(V);_ngZone=T(Re);_renderer=T(br$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,`pointerdown`,this._pointerDownListener,r),o.listen(t,`click`,this._clickListener,r),o.listen(t,`auxclick`,this._clickListener,r),o.listen(t,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ye(e)};_clickListener=e=>{let t=ye(e),r=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let l=o[s],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(md(l.overlayElement,t)||md(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();function md(n,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var xd=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var Nd=(()=>{class n{_platform=T(V);_containerElement;_document=T(dr$1);_styleLoader=T(ge);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Ao()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement(`div`);t.classList.add(e),Ao()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(xd)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var ps=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _s(n){return n&&n.nodeType===1}var hs=new Set;var Nr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Q;_attachments=new Q;_detachments=new Q;_positionStrategy;_scrollStrategy;_locationChanges=j.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Q;_outsidePointerEvents=new Q;_afterNextRenderRef;constructor(i,e,t,r,o,s,l,c,u,d=!1,h,E){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=h,this._renderer=E,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),hs.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Hv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),hs.delete(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,hs.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=G(G({},this._config),i),this._updateElementSize()}setDirection(i){this._config=z(G({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=oe(this._config.width),i.height=oe(this._config.height),i.minWidth=oe(this._config.minWidth),i.minHeight=oe(this._config.minHeight),i.maxWidth=oe(this._config.maxWidth),i.maxHeight=oe(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_s(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ps(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=At(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Hv(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var pd=`cdk-overlay-connected-position-bounding-box`;var mp=/([A-Za-z%]+)$/;function oi(n,i){return new Mr(i,n.get(cn),n.get(dr$1),n.get(V),n.get(Nd))}var Mr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Q;_resizeSubscription=j.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(pd),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],s;for(let l of this._preferredPositions){let c=this._getOriginPoint(i,r,l),u=this._getOverlayPoint(c,e,l),d=this._getOverlayFit(u,e,t,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,t)){o.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:e})}if(o.length){let l=null,c=-1;for(let u of o){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Pt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(pd),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Mr$1?this._origin.nativeElement:_s(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX==`center`)r=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=t.originX==`start`?s:l}e.left<0&&(r-=e.left);let o;return t.originY==`center`?o=i.top+i.height/2:o=t.originY==`top`?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX==`center`?r=-e.width/2:t.overlayX===`start`?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY==`center`?o=-e.height/2:o=t.overlayY==`top`?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=_d(e),{x:s,y:l}=i,c=this._getOffset(r,`x`),u=this._getOffset(r,`y`);c&&(s+=c),u&&(l+=u);let d=0-s,h=s+o.width-t.width,E=0-l,x=l+o.height-t.height,A=this._subtractOverflows(o.width,d,h),k=this._subtractOverflows(o.height,E,x),H=A*k;return{visibleArea:H,isCompletelyWithinViewport:o.width*o.height===H,fitsInViewportVertically:k===o.height,fitsInViewportHorizontally:A==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,s=gd(this._overlayRef.getConfig().minHeight),l=gd(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||s!=null&&s<=r,u=i.fitsInViewportHorizontally||l!=null&&l<=o;return c&&u}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=_d(e),o=this._viewportRect,s=Math.max(i.x+r.width-o.width,0),l=Math.max(i.y+r.height-o.height,0),c=Math.max(o.top-t.top-i.y,0),u=Math.max(o.left-t.left-i.x,0),d=0,h=0;return r.width<=o.width?d=u||-s:d=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?h=c||-l:h=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:d,y:h},{x:i.x+d,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!pp(this._lastScrollVisibility,t)){let r=new xr(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,s,l;if(e.overlayY===`top`)s=i.y,o=t.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-l+this._getViewportMarginTop();else{let x=Math.min(t.bottom-i.y+t.top,i.y),A=this._lastBoundingBoxSize.height;o=x*2,s=i.y-x,o>A&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-A/2)}let c=e.overlayX===`start`&&!r||e.overlayX===`end`&&r,u=e.overlayX===`end`&&!r||e.overlayX===`start`&&r,d,h,E;if(u)E=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(c)h=i.x,d=t.right-i.x-this._getViewportMarginEnd();else{let x=Math.min(t.right-i.x+t.left,i.x),A=this._lastBoundingBoxSize.width;d=x*2,h=i.x-x,d>A&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-A/2)}return{top:s,left:h,bottom:l,right:E,width:d,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=oe(t.width),r.height=oe(t.height),r.top=oe(t.top)||`auto`,r.bottom=oe(t.bottom)||`auto`,r.left=oe(t.left)||`auto`,r.right=oe(t.right)||`auto`,e.overlayX===`center`?r.alignItems=`center`:r.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=oe(o)),s&&(r.maxWidth=oe(s))}this._lastBoundingBoxSize=t,Pt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Pt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Pt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Pt(t,this._getExactOverlayY(e,i,d)),Pt(t,this._getExactOverlayX(e,i,d))}else t.position=`static`;let l=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),t.transform=l.trim(),s.maxHeight&&(r?t.maxHeight=oe(s.maxHeight):o&&(t.maxHeight=``)),s.maxWidth&&(r?t.maxWidth=oe(s.maxWidth):o&&(t.maxWidth=``)),Pt(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=oe(o.y);return r}_getExactOverlayX(i,e,t){let r={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=oe(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hd(i,t),isOriginOutsideView:ms(i,t),isOverlayClipped:hd(e,t),isOverlayOutsideView:ms(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&At(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Mr$1)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function Pt(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function gd(n){if(typeof n!=`number`&&n!=null){let[i,e]=n.split(mp);return!e||e===`px`?parseFloat(i):null}return n||null}function _d(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function pp(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var bd=`cdk-global-overlay-wrapper`;function Md(n){return new Ar}var Ar=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(bd),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:s,maxHeight:l}=this._overlayRef.getConfig(),c=(r===`100%`||r===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),d=this._xPosition,h=this._xOffset,E=this._overlayRef.getConfig().direction===`rtl`,x=``,A=``,k=``;c?k=`flex-start`:d===`center`?(k=`center`,E?A=h:x=h):E?d===`left`||d===`end`?(k=`flex-end`,x=h):(d===`right`||d===`start`)&&(k=`flex-start`,A=h):d===`left`||d===`start`?(k=`flex-start`,x=h):(d===`right`||d===`end`)&&(k=`flex-end`,A=h),i.position=this._cssPosition,i.marginLeft=c?`0`:x,i.marginTop=u?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:A,e.justifyContent=k,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(bd),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ad=(()=>{class n{_injector=T(Ee);global(){return Md()}flexibleConnectedTo(e){return oi(this._injector,e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var bs=new A(`OVERLAY_DEFAULT_CONFIG`);function si(n,i){n.get(ge).load(xd);let e=n.get(Nd),t=n.get(dr$1),r=n.get(Oe),o=n.get($i$1),s=n.get(nt),l=n.get(Xa$1,null,{optional:!0})||n.get(br$1).createRenderer(null,null),c=new ii(i),u=n.get(bs,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!t.body||!(`showPopover`in t.body)?c.usePopover=!1:c.usePopover=i?.usePopover??u;let d=t.createElement(`div`),h=t.createElement(`div`);d.id=r.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),h.appendChild(d),c.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let E=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return _s(E)?E.after(h):E?.type===`parent`?E.element.appendChild(h):e.getContainerElement().appendChild(h),new Nr(new Dr(d,o,n),h,d,c,n.get(Re),n.get(Cd),t,n.get(yi),n.get(Ed),i?.disableAnimations??n.get(Um$1,null,{optional:!0})===`NoopAnimations`,n.get(fe),l)}var Rd=(()=>{class n{scrollStrategies=T(Dd);_positionBuilder=T(Ad);_injector=T(Ee);create(e){return si(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var gp=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var _p=new A(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(Ee);return()=>ri(n)}});var gs=(()=>{class n{elementRef=T(Mr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var Fd=new A(`cdk-connected-overlay-default-config`);var bp=(()=>{class n{_dir=T(nt,{optional:!0});_injector=T(Ee);_overlayRef;_templatePortal;_backdropSubscription=j.EMPTY;_attachSubscription=j.EMPTY;_detachSubscription=j.EMPTY;_positionSubscription=j.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=T(_p);_ngZone=T(Re);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Ge;positionChange=new Ge;attach=new Ge;detach=new Ge;overlayKeydown=new Ge;overlayOutsideClick=new Ge;constructor(){let e=T(wr$1),t=T(Bi$1),r=T(Fd,{optional:!0}),o=T(bs,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new ti(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=gp);let e=this._overlayRef=si(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!yt(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=ye(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ii({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=oi(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof gs?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof gs?this.origin.elementRef.nativeElement:this.origin instanceof Mr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jg(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,$j],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,$j],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,$j],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,$j],push:[2,`cdkConnectedOverlayPush`,`push`,$j],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,$j],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,$j],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[iy]})}return n})();var vs=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({providers:[Rd],imports:[W,ud,us,us]})}return n})();var vp=[`tooltip`];var yp=20;var Sp=new A(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(Ee);return()=>ri(n,{scrollThrottle:yp})}});var Dp=new A(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Td=`tooltip-panel`;var wp={passive:!0};var Cp=8;var Ep=8;var xp=24;var Np=200;var Mp=(()=>{class n{_elementRef=T(Mr$1);_ngZone=T(Re);_platform=T(V);_ariaDescriber=T(Ll);_focusMonitor=T(Kt);_dir=T(nt);_injector=T(Ee);_viewContainerRef=T(Bi$1);_mediaMatcher=T(Jt);_document=T(dr$1);_renderer=T(Xa$1);_animationsDisabled=ke();_defaultOptions=T(Dp,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Id;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ut(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=ut(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=bt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=bt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Q;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Cp}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(wg$1(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new ei(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(wg$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof Mr$1)return this._overlayRef;this._detach()}let t=this._injector.get(kt).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Td}`,o=oi(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return o.positionChanges.pipe(wg$1(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=si(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Sp)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(wg$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(wg$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(wg$1(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(wg$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(G(G({},r.main),o.main)),this._addOffset(G(G({},r.fallback),o.fallback))])}_addOffset(e){let t=Ep,r=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=r?-t:t:e.originX===`end`&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,r;t==`above`||t==`below`?r={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?r={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(r={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,r;t==`above`?r={overlayX:`center`,overlayY:`bottom`}:t==`below`?r={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?r={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(r={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Hv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,s;if(t===`center`?this._dir&&this._dir.value===`rtl`?s=r===`end`?`left`:`right`:s=r===`start`?`left`:`right`:s=t===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${Td}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,wp))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,r=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(r.webkitUserDrag=`none`),r.touchAction=`none`,r.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Hv({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!yt(e):!0;static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,r){t&2&&gh$1(`mat-mdc-tooltip-disabled`,r.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var Id=(()=>{class n{_changeDetectorRef=T(Hj);_elementRef=T(Mr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ke();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Q;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>xp&&e.width>=Np}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(t);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,r){if(t&1&&lh$1(vp,7),t&2){let o;FD(o=jD())&&(r._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,r){t&1&&ih$1(`mouseleave`,function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,r){t&1&&(Xc$1(0,`div`,1,0),sh$1(`animationend`,function(s){return r._handleAnimationEnd(s)}),Xc$1(2,`div`,2),cw(3),el$1()()),t&2&&(KD(r.tooltipClass),gh$1(`mdc-tooltip--multiline`,r._isMultiline),dI(3),wh$1(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return n})();var wE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Co,vs,W,Qn]})}return n})();var Ap=[`*`];var Rp=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var Fp=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var Tp=new A(`MAT_CARD_CONFIG`);var TE=(()=>{class n{appearance;constructor(){let e=T(Tp,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(t,r){t&2&&gh$1(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:Ap,decls:1,vars:0,template:function(t,r){t&1&&(kD$1(),LD(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})();var IE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return n})();var OE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return n})();var kE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return n})();var PE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:Fp,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(t,r){t&1&&(kD$1(Rp),LD(0),Xc$1(1,`div`,0),LD(2,1),el$1(),LD(3,2))},encapsulation:2})}return n})();var LE=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W]})}return n})();var ys=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new _(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Hn$1(e=>e.some(t=>t.target===i)),Yg({bufferSize:1,refCount:!0}),wg$1(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Od=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=T(Re);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new ys(r)),this._observers.get(r).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var Ip=[`notch`];var Op=[`*`];var kd=[`iconPrefixContainer`];var Pd=[`textPrefixContainer`];var Ld=[`iconSuffixContainer`];var Vd=[`textSuffixContainer`];var kp=[`textField`];var Pp=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Lp=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Vp(n,i){n&1&&Xp$1(0,`span`,21)}function Bp(n,i){if(n&1&&(Mi$1(0,`label`,20),LD(1,1),hD(2,Vp,1,0,`span`,21),Jc$1()),n&2){let e=OD$1(2);Jp$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Kp$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),dI(2),gD(!e.hideRequiredMarker&&e._control.required?2:-1)}}function jp(n,i){if(n&1&&hD(0,Bp,3,5,`label`,20),n&2)gD(OD$1()._hasFloatingLabel()?0:-1)}function zp(n,i){n&1&&Xp$1(0,`div`,7)}function Up(n,i){}function Hp(n,i){if(n&1&&Wp$1(0,Up,0,0,`ng-template`,13),n&2){OD$1(2);Jp$1(`ngTemplateOutlet`,HD(1))}}function $p(n,i){if(n&1&&(Mi$1(0,`div`,9),hD(1,Hp,1,1,null,13),Jc$1()),n&2){let e=OD$1();Jp$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),dI(),gD(e._forceDisplayInfixLabel()?-1:1)}}function Gp(n,i){n&1&&(Mi$1(0,`div`,10,2),LD(2,2),Jc$1())}function Wp(n,i){n&1&&(Mi$1(0,`div`,11,3),LD(2,3),Jc$1())}function Yp(n,i){}function Xp(n,i){if(n&1&&Wp$1(0,Yp,0,0,`ng-template`,13),n&2){OD$1();Jp$1(`ngTemplateOutlet`,HD(1))}}function Zp(n,i){n&1&&(Mi$1(0,`div`,14,4),LD(2,4),Jc$1())}function qp(n,i){n&1&&(Mi$1(0,`div`,15,5),LD(2,5),Jc$1())}function Kp(n,i){n&1&&Xp$1(0,`div`,16)}function Qp(n,i){n&1&&(Mi$1(0,`div`,18),LD(1,6),Jc$1())}function Jp(n,i){if(n&1&&(Mi$1(0,`mat-hint`,22),cw(1),Jc$1()),n&2){let e=OD$1(2);Jp$1(`id`,e._hintLabelId),dI(),wh$1(e.hintLabel)}}function eg(n,i){if(n&1&&(Mi$1(0,`div`,19),hD(1,Jp,2,2,`mat-hint`,22),LD(2,7),Xp$1(3,`div`,23),LD(4,8),Jc$1()),n&2){let e=OD$1();dI(),gD(e.hintLabel?1:-1)}}var Ss=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-label`]]})}return n})();var Gd=new A(`MatError`);var tg=(()=>{class n{id=T(Oe).getId(`mat-mdc-error-`);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(t,r){t&2&&rh$1(`id`,r.id)},inputs:{id:`id`},features:[vw([{provide:Gd,useExisting:n}])]})}return n})();var Ds=(()=>{class n{align=`start`;id=T(Oe).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,r){t&2&&(rh$1(`id`,r.id),Kp$1(`align`,null),gh$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Wd=new A(`MatPrefix`);var ng=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[vw([{provide:Wd,useExisting:n}])]})}return n})();var Yd=new A(`MatSuffix`);var ig=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[vw([{provide:Yd,useExisting:n}])]})}return n})();var Xd=new A(`FloatingLabelParent`);var Bd=(()=>{class n{_elementRef=T(Mr$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=T(Od);_ngZone=T(Re);_parent=T(Xd);_resizeSubscription=new j;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return rg(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,r){t&2&&gh$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function rg(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var jd=`mdc-line-ripple--active`;var Rr=`mdc-line-ripple--deactivating`;var zd=(()=>{class n{_elementRef=T(Mr$1);_cleanupTransitionEnd;constructor(){let e=T(Re),t=T(Xa$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Rr),e.add(jd)}deactivate(){this._elementRef.nativeElement.classList.add(Rr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Rr);e.propertyName===`opacity`&&r&&t.remove(jd,Rr)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Ud=(()=>{class n{_elementRef=T(Mr$1);_ngZone=T(Re);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,r){if(t&1&&lh$1(Ip,5),t&2){let o;FD(o=jD())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,r){t&2&&gh$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Op,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,r){t&1&&(kD$1(),eh(0,`div`,1),Xc$1(1,`div`,2,0),LD(3),el$1(),eh(4,`div`,3))},encapsulation:2})}return n})();var ws=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n})}return n})();var Cs=new A(`MatFormField`);var og=new A(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Hd=`fill`;var sg=`auto`;var $d=`fixed`;var ag=`translateY(-50%)`;var Zd=(()=>{class n{_elementRef=T(Mr$1);_changeDetectorRef=T(Hj);_platform=T(V);_idGenerator=T(Oe);_ngZone=T(Re);_defaults=T(og,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fj(`iconPrefixContainer`);_textPrefixContainerSignal=Fj(`textPrefixContainer`);_iconSuffixContainerSignal=Fj(`iconSuffixContainer`);_textSuffixContainerSignal=Fj(`textSuffixContainer`);_prefixSuffixContainers=xw(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=jj(Ss);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ut(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||sg}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Hd;this._appearanceSignal.set(t)}_appearanceSignal=Yo$1(Hd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$d}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$d}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ke();constructor(){let e=this._defaults,t=T(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),od$1(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=xw(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Gl$1([void 0,void 0]),oe$1(()=>[t.errorState,t.userAriaDescribedBy]),zg(),Hn$1(([[o,s],[l,c]])=>o!==l||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(wg$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Lg$1(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){qj({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=xw(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,s=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ag} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+l+c+u]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-form-field`]],contentQueries:function(t,r,o){if(t&1&&(uh$1(o,r._labelChild,Ss,5),ch(o,ws,5)(o,Wd,5)(o,Yd,5)(o,Gd,5)(o,Ds,5)),t&2){VD();let s;FD(s=jD())&&(r._formFieldControl=s.first),FD(s=jD())&&(r._prefixChildren=s),FD(s=jD())&&(r._suffixChildren=s),FD(s=jD())&&(r._errorChildren=s),FD(s=jD())&&(r._hintChildren=s)}},viewQuery:function(t,r){if(t&1&&(dh$1(r._iconPrefixContainerSignal,kd,5)(r._textPrefixContainerSignal,Pd,5)(r._iconSuffixContainerSignal,Ld,5)(r._textSuffixContainerSignal,Vd,5),lh$1(kp,5)(kd,5)(Pd,5)(Ld,5)(Vd,5)(Bd,5)(Ud,5)(zd,5)),t&2){VD(4);let o;FD(o=jD())&&(r._textField=o.first),FD(o=jD())&&(r._iconPrefixContainer=o.first),FD(o=jD())&&(r._textPrefixContainer=o.first),FD(o=jD())&&(r._iconSuffixContainer=o.first),FD(o=jD())&&(r._textSuffixContainer=o.first),FD(o=jD())&&(r._floatingLabel=o.first),FD(o=jD())&&(r._notchedOutline=o.first),FD(o=jD())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,r){t&2&&gh$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[vw([{provide:Cs,useExisting:n},{provide:Xd,useExisting:n}])],ngContentSelectors:Lp,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,r){if(t&1&&(kD$1(Pp),Wp$1(0,jp,1,1,`ng-template`,null,0,_w),Mi$1(2,`div`,6,1),ih$1(`click`,function(s){return r._control.onContainerClick(s)}),hD(4,zp,1,0,`div`,7),Mi$1(5,`div`,8),hD(6,$p,2,2,`div`,9),hD(7,Gp,3,0,`div`,10),hD(8,Wp,3,0,`div`,11),Mi$1(9,`div`,12),hD(10,Xp,1,1,null,13),LD(11),Jc$1(),hD(12,Zp,3,0,`div`,14),hD(13,qp,3,0,`div`,15),Jc$1(),hD(14,Kp,1,0,`div`,16),Jc$1(),Mi$1(15,`div`,17),hD(16,Qp,2,0,`div`,18)(17,eg,5,1,`div`,19),Jc$1()),t&2){let o;dI(2),gh$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),dI(2),gD(!r._hasOutline()&&!r._control.disabled?4:-1),dI(2),gD(r._hasOutline()?6:-1),dI(),gD(r._hasIconPrefix?7:-1),dI(),gD(r._hasTextPrefix?8:-1),dI(2),gD(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),dI(2),gD(r._hasTextSuffix?12:-1),dI(),gD(r._hasIconSuffix?13:-1),dI(),gD(r._hasOutline()?-1:14),dI(),gh$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let s=r._getSubscriptMessageType();dI(),gD((o=s)===`error`?16:o===`hint`?17:-1)}},dependencies:[Bd,Ud,En,zd,Ds],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var Es=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Wi,Zd,W]})}return n})();var lg=[`determinateSpinner`];function cg(n,i){if(n&1&&(Qu$1(),Mi$1(0,`svg`,11),Xp$1(1,`circle`,12),Jc$1()),n&2){let e=OD$1();Kp$1(`viewBox`,e._viewBox()),dI(),hh(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Kp$1(`r`,e._circleRadius())}}var dg=new A(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:qd})});var qd=100;var ug=10;var Dx=(()=>{class n{_elementRef=T(Mr$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=T(dg),t=Fo(),r=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=qd;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ug)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,r){if(t&1&&lh$1(lg,5),t&2){let o;FD(o=jD())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,r){t&2&&(Kp$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),KD(`mat-`+r.color),hh(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),gh$1(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Uj],diameter:[2,`diameter`,`diameter`,Uj],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Uj]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,r){if(t&1&&(Wp$1(0,cg,2,8,`ng-template`,null,0,_w),Mi$1(2,`div`,2,1),Qu$1(),Mi$1(4,`svg`,3),Xp$1(5,`circle`,4),Jc$1()(),Zu$1(),Mi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),nh$1(9,8),Jc$1(),Mi$1(10,`div`,9),nh$1(11,8),Jc$1(),Mi$1(12,`div`,10),nh$1(13,8),Jc$1()()()),t&2){let o=HD(1);dI(4),Kp$1(`viewBox`,r._viewBox()),dI(),hh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp$1(`r`,r._circleRadius()),dI(4),Jp$1(`ngTemplateOutlet`,o),dI(2),Jp$1(`ngTemplateOutlet`,o),dI(2),Jp$1(`ngTemplateOutlet`,o)}},dependencies:[En],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var wx=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W]})}return n})();var fg={dispatch:!0,functional:!1,useEffectsErrorHandler:!0};var Fr=`__@ngrx/effects_create__`;function kx(n,i={}){let e=i.functional?n:n(),t=G(G({},fg),i);return Object.defineProperty(e,Fr,{value:t}),e}function hg(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(Fr)?n[t][Fr].hasOwnProperty(`dispatch`):!1).map(t=>{let r=n[t][Fr];return G({propertyName:t},r)})}function mg(n){return hg(n)}function Kd(n){return Object.getPrototypeOf(n)}function pg(n){return!!n.constructor&&n.constructor.name!==`Object`&&n.constructor.name!==`Function`}function Qd(n){return typeof n==`function`}function gg(n){return n.filter(Qd)}function _g(n,i,e){let t=Kd(n),o=!!t&&t.constructor.name!==`Object`?t.constructor.name:null;return Lg$1(...mg(n).map(({propertyName:l,dispatch:c,useEffectsErrorHandler:u})=>{let d=typeof n[l]==`function`?n[l]():n[l],h=u?e(d,i):d;return c===!1?h.pipe(us$1()):h.pipe(Gg()).pipe(oe$1(x=>({effect:n[l],notification:x,propertyName:l,sourceName:o,sourceInstance:n})))}))}var bg=10;function Jd(n,i,e=bg){return n.pipe(ls$1(t=>(i&&i.handleError(t),e<=1?n:Jd(n,i,e-1))))}var Px=(()=>{class n extends _{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.ɵfac=function(t){return new(t||n)(Oe$1(Hn))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Lx(...n){return Hn$1(i=>n.some(e=>typeof e==`string`?e===i.type:e.type===i.type))}var vg=new A(`@ngrx/effects Effects Error Handler`,{providedIn:`root`,factory:()=>Jd});var Sg=sc(`@ngrx/effects/init`);function Dg(n,i){if(n.notification.kind===`N`){let e=n.notification.value;!wg(e)&&i.handleError(new Error(`Effect ${Cg(n)} dispatched an invalid action: ${Eg(e)}`))}}function wg(n){return typeof n!=`function`&&n&&n.type&&typeof n.type==`string`}function Cg({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]==`function`;return!!e?`"${e}.${String(n)}${t?`()`:``}"`:`"${String(n)}()"`}function Eg(n){try{return JSON.stringify(n)}catch{return n}}var xg=`ngrxOnIdentifyEffects`;function Ng(n){return xs(n,xg)}var Mg=`ngrxOnRunEffects`;function Ag(n){return xs(n,Mg)}var Rg=`ngrxOnInitEffects`;function Fg(n){return xs(n,Rg)}function xs(n,i){return n&&i in n&&typeof n[i]==`function`}var eu=(()=>{class n extends Q{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(qg(e=>pg(e)?Kd(e):e),qe(e=>e.pipe(qg(Tg))),qe(e=>{return Lg$1(e.pipe(Wl$1(o=>Ig(this.errorHandler,this.effectsErrorHandler)(o)),oe$1(o=>(Dg(o,this.errorHandler),o.notification)),Hn$1(o=>o.kind===`N`&&o.value!=null),Hg()),e.pipe(tn$1(1),Hn$1(Fg),oe$1(o=>o.ngrxOnInitEffects())))}))}static{this.ɵfac=function(t){return new(t||n)(Oe$1(Ye),Oe$1(vg))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Tg(n){return Ng(n)?n.ngrxOnIdentifyEffects():``}function Ig(n,i){return e=>{let t=_g(e,n,i);return Ag(e)?e.ngrxOnRunEffects(t):t}}var Og=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.ɵfac=function(t){return new(t||n)(Oe$1(eu),Oe$1(Tt))}}static{this.ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Vx(...n){let i=n.flat();return Ro$1([gg(i),Eu$1(()=>{T(zn),T(tr,{optional:!0});let t=T(Og),r=T(eu),o=!t.isStarted;o&&t.start();for(let s of i){let l=Qd(s)?T(s):s;r.addEffects(l)}o&&T(Tt).dispatch(Sg())})])}var tu=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var nu=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[W]})}return n})();var Zx=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[vr,nu,Wl,W]})}return n})();var Tr=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,o){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o,e?Xo$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var Ns=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Q;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var kg=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var iu=class{applyChanges(i,e,t,r,o){i.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let h=t(s,l,c);u=e.createEmbeddedView(h.templateRef,h.context,h.index),d=mt.INSERTED}else c==null?(e.remove(l),d=mt.REMOVED):(u=e.get(l),e.move(u,c),d=mt.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){}};var ru=new A(``);var Pg=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})();var Lg={passive:!0};var ou=(()=>{class n{_platform=T(V);_ngZone=T(Re);_renderer=T(br$1).createRenderer(null,null);_styleLoader=T(ge);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Ue;this._styleLoader.load(Pg);let t=Se(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new Q,s=`cdk-text-field-autofilled`,l=u=>{u.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(s)?(t.classList.add(s),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,l,Lg)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=Se(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr$1({token:n,factory:n.ɵfac})}return n})();var su=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({})}return n})();var au=new A(`MAT_INPUT_VALUE_ACCESSOR`);var Vg=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Bg=new A(`MAT_INPUT_CONFIG`);var QN=(()=>{class n{_elementRef=T(Mr$1);_platform=T(V);ngControl=T(tt,{optional:!0,self:!0});_autofillMonitor=T(ou);_ngZone=T(Re);_formField=T(Cs,{optional:!0});_renderer=T(Xa$1);_uid=T(Oe).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=T(Bg,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ut(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(qn.required)??!1}set required(e){this._required=ut(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Ro().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ut(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Ro().has(e));constructor(){let e=T(os,{optional:!0}),t=T(ss,{optional:!0}),r=T(tu),o=T(au,{optional:!0,self:!0}),s=T(ru,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();o?Xo$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Tr(r,s||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c===`select`,this._isTextarea=c===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&od$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Vg.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,r){t&1&&ih$1(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),t&2&&(rh$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Kp$1(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),gh$1(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},exportAs:[`matInput`],features:[vw([{provide:ws,useExisting:n}]),iy]})}return n})();var JN=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Es,Es,su,W]})}return n})();export{Qe as $,kn as $t,Kt as A,uD as An,bs as At,Nl as B,wE as Bn,fD as Bt,Hm as C,sc as Cn,Zx as Ct,Iu as D,ti as Dn,au as Dt,IE as E,tg as En,ah as Et,Mf as F,uw as Fn,dd as Ft,Oe as G,xo as Gn,hl as Gt,Ns as H,wm as Hn,fw as Ht,Mp as I,vi as In,dp as It,Ot as J,yi as Jn,iu as Jt,On as K,yd as Kn,ig as Kt,Mr as L,vo as Ln,ds as Lt,Ll as M,uo as Mn,cC as Mt,Lx as N,us as Nn,cD as Nt,JN as O,tt as On,bh as Ot,Md as P,ut as Pn,cn as Pt,QN as Q,kg as Qt,Nc as R,vr as Rn,ed as Rt,Hf as S,ru as Sn,Zd as St,ID as T,ss as Tn,ac as Tt,OD as U,ws as Un,ge as Ut,Nr as V,wf as Vn,fp as Vt,OE as W,wx as Wn,gs as Wt,Ph as X,zi as Xn,kE as Xt,PE as Y,yt as Yn,kD as Yt,Px as Z,zm as Zn,ke as Zt,Es as _,qu as _n,Wi as _t,At as a,mb as an,Ss as at,Gf as b,rn as bn,Wy as bt,Bn as c,nC as cn,Tr as ct,Cs as d,nt as dn,US as dt,ko as en,Qn as et,Df as f,nu as fn,Un as ft,Eo as g,qn as gn,W as gt,Dx as h,qm as hn,Vx as ht,Al as i,lh as in,Sr as it,LE as j,ud as jn,bt as jt,Ji as k,tu as kn,bp as kt,Cf as l,ng as ln,Tt as lt,Ds as m,os as mn,V as mt,$l as n,lD as nn,RD as nt,Ba as o,mr as on,TD as ot,Do as p,oi as pn,Uo as pt,Oo as q,ye as qn,ii as qt,AD as r,lS as rn,Sm as rt,Bm as s,mt as sn,TE as st,$c as t,kx as tn,Qt as tt,Co as u,nr as un,Tw as ut,Fu as v,rS as vn,Wl as vt,Hn as w,si as wn,aD as wt,HS as x,rr as xn,Yl as xt,Fw as y,ri as yn,Wv as yt,Nd as z,vs as zn,ei as zt};