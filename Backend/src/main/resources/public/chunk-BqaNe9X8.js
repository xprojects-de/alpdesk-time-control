import{$ as Jp,$r as wc,An as br,Ar as qE,Bt as Um,C as Eg,Cn as ae,Ct as Q,D as Fj,Dn as bg,Dr as ol,Dt as Ro$1,E as Fh,En as bc,Et as Re$1,F as Gj,Gn as fe,Gr as th,Hn as em,Ir as qp,Jn as gc,Ln as dr,Lr as qy,M as GE,Mt as Ta$1,N as Ge,Nr as qj,Or as pe$1,Pn as cv,Pr as qm,Q as Jg,Qt as Xc,R as Gt$1,Rr as rd,Rt as Ug,S as Ee,Tr as oe,U as Hn$1,Ut as Vg,Vn as el,Vr as rn$1,Vt as Uy,Wn as fI,Wr as ss$1,Xn as gi$1,Y as JD,Yt as Wy,Zr as uu,Zt as Xa$1,_n as _,_r as mD,_t as Oe$1,br as mt,dn as Zc,dr as ko$1,ei as wg,er as id,f as Bi$1,fr as kr,ft as N,h as Bv,hn as Zt$1,ht as Nr,in as Ye$1,ir as jg,j as G,jt as T,k as Fp,kn as bp,kt as SD,ln as Z$1,lt as Mr,m as Bn$1,mt as Nn$1,n as $j,ni as xD,nr as j,o as $y,oi as yg,on as Yo$1,p as Bj,pr as ky,qn as gD,qr as tn$1,r as $m,rn as YE,rt as LD,s as A,sn as Ys,t as $i$1,tn as Xo,tr as iy,ui as zl,un as ZE,vr as mh,wr as od,xn as _n$1,yr as mi$1,yt as PD,z as Gy,zt as Uj}from"./chunk-BqhdRbDf.js";var $r=null;function se(){return $r}function bn(t){$r??=t}var Ke=class{};var Re=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:()=>T(Vr),providedIn:`platform`})}return t})();var Vr=(()=>{class t extends Re{_location;_history;_doc=T(dr);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return se().getBaseHref(this._doc)}onPopState(e){let n=se().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=se().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function Wr(t,r){return t?r?t.endsWith(`/`)?r.startsWith(`/`)?t+r.slice(1):t+r:r.startsWith(`/`)?t+r:`${t}/${r}`:t:r}function Hr(t){let r=t.search(/#|\?|$/);return t[r-1]===`/`?t.slice(0,r-1)+t.slice(r):t}function he(t){return t&&t[0]!==`?`?`?${t}`:t}var At=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:()=>T(Ao),providedIn:`root`})}return t})();var wo=new A(``);var Ao=(()=>{class t extends At{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??T(dr).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Wr(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+he(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+he(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+he(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||t)(Oe$1(Re),Oe$1(wo,8))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Kr=(()=>{class t{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=To(Hr(Gr(n))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+he(n))}normalize(e){return t.stripTrailingSlash(Co(this._basePath,Gr(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,i=null){this._locationStrategy.pushState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+he(n)),i)}replaceState(e,n=``,i=null){this._locationStrategy.replaceState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+he(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=he;static joinWithSlash=Wr;static stripTrailingSlash=Hr;static ɵfac=function(n){return new(n||t)(Oe$1(At))};static ɵprov=ae({token:t,factory:()=>No(),providedIn:`root`})}return t})();function No(){return new Kr(Oe$1(At))}function Co(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:r}function Gr(t){return t.replace(/\/index\.html$/,``)}function To(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var O=(function(t){return t[t.Format=0]=`Format`,t[t.Standalone=1]=`Standalone`,t})(O||{});var D=(function(t){return t[t.Narrow=0]=`Narrow`,t[t.Abbreviated=1]=`Abbreviated`,t[t.Wide=2]=`Wide`,t[t.Short=3]=`Short`,t})(D||{});var z=(function(t){return t[t.Short=0]=`Short`,t[t.Medium=1]=`Medium`,t[t.Long=2]=`Long`,t[t.Full=3]=`Full`,t})(z||{});var de={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Yr(t){return xD(t)[gc.LocaleId]}function Xr(t,r,e){let n=xD(t);return K(K([n[gc.DayPeriodsFormat],n[gc.DayPeriodsStandalone]],r),e)}function Jr(t,r,e){let n=xD(t);return K(K([n[gc.DaysFormat],n[gc.DaysStandalone]],r),e)}function qr(t,r,e){let n=xD(t);return K(K([n[gc.MonthsFormat],n[gc.MonthsStandalone]],r),e)}function Qr(t,r){let n=xD(t)[gc.Eras];return K(n,r)}function Ze(t,r){return K(xD(t)[gc.DateFormat],r)}function Ye(t,r){return K(xD(t)[gc.TimeFormat],r)}function Xe(t,r){let n=xD(t)[gc.DateTimeFormat];return K(n,r)}function Je(t,r){let e=xD(t),n=e[gc.NumberSymbols][r];if(typeof n>`u`){if(r===de.CurrencyDecimal)return e[gc.NumberSymbols][de.Decimal];if(r===de.CurrencyGroup)return e[gc.NumberSymbols][de.Group]}return n}function ei(t){if(!t[gc.ExtraData])throw new N(2303,!1)}function ti(t){let r=xD(t);return ei(r),(r[gc.ExtraData][2]||[]).map(n=>typeof n==`string`?vn(n):[vn(n[0]),vn(n[1])])}function ni(t,r,e){let n=xD(t);ei(n);return K(K([n[gc.ExtraData][0],n[gc.ExtraData][1]],r)||[],e)||[]}function K(t,r){for(let e=r;e>-1;e--)if(typeof t[e]<`u`)return t[e];throw new N(2304,!1)}function vn(t){let[r,e]=t.split(`:`);return{hours:+r,minutes:+e}}var Io=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var Nt=Object.create(null);var Mo=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var xo=256;function ri(t,r,e,n){let i=zo(t);Fo(r),r=ce(e,r)||r;let a=[],s;for(;r;)if(s=Mo.exec(r),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;r=u}else{a.push(r);break}let d=i.getTimezoneOffset();n&&(d=oi(n,d),i=jo(i,n));let l=``;return a.forEach(u=>{let f=Bo(u);l+=f?f(i,e,d):u===`''`?`'`:u.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),l}function Fo(t){if(t.length>xo)throw new N(2300,!1)}function xt(t,r,e){let n=new Date(0);return n.setFullYear(t,r,e),n.setHours(0,0,0),n}function ce(t,r){let e=Yr(t);if(Nt[e]??=Object.create(null),Nt[e][r])return Nt[e][r];let n=``;switch(r){case`shortDate`:n=Ze(t,z.Short);break;case`mediumDate`:n=Ze(t,z.Medium);break;case`longDate`:n=Ze(t,z.Long);break;case`fullDate`:n=Ze(t,z.Full);break;case`shortTime`:n=Ye(t,z.Short);break;case`mediumTime`:n=Ye(t,z.Medium);break;case`longTime`:n=Ye(t,z.Long);break;case`fullTime`:n=Ye(t,z.Full);break;case`short`:let i=ce(t,`shortTime`),o=ce(t,`shortDate`);n=Ct(Xe(t,z.Short),[i,o]);break;case`medium`:let a=ce(t,`mediumTime`),s=ce(t,`mediumDate`);n=Ct(Xe(t,z.Medium),[a,s]);break;case`long`:let d=ce(t,`longTime`),l=ce(t,`longDate`);n=Ct(Xe(t,z.Long),[d,l]);break;case`full`:let u=ce(t,`fullTime`),f=ce(t,`fullDate`);n=Ct(Xe(t,z.Full),[u,f]);break}return n&&(Nt[e][r]=n),n}function Ct(t,r){return r&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return Object.hasOwn(r,n)?r[n]:e})),t}function X(t,r,e=`-`,n,i){let o=``;(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<r;)a=`0`+a;return n&&(a=a.slice(a.length-r)),o+a}function Ro(t,r){return X(t,3).substring(0,r)}function M(t,r,e=0,n=!1,i=!1){return function(o,a){let s=Oo(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return Ro(s,r);let d=Je(a,de.MinusSign);return X(s,r,d,n,i)}}function Oo(t,r){switch(t){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new N(2301,!1)}}function E(t,r,e=O.Format,n=!1){return function(i,o){return Lo(i,o,t,r,e,n)}}function Lo(t,r,e,n,i,o){switch(e){case 2:return qr(r,i,n)[t.getMonth()];case 1:return Jr(r,i,n)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let l=ti(r),u=ni(r,i,n),f=l.findIndex(S=>{if(Array.isArray(S)){let[T,R]=S,F=a>=T.hours&&s>=T.minutes,A=a<R.hours||a===R.hours&&s<R.minutes;if(T.hours<R.hours){if(F&&A)return!0}else if(F||A)return!0}else if(S.hours===a&&S.minutes===s)return!0;return!1});if(f!==-1)return u[f]}return Xr(r,i,n)[a<12?0:1];case 3:return Qr(r,n)[t.getFullYear()<=0?0:1];default:throw new N(2302,!1)}}function Tt(t){return function(r,e,n){let i=-1*n,o=Je(e,de.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?`+`:``)+X(a,2,o)+X(Math.abs(i%60),2,o);case 1:return`GMT`+(i>=0?`+`:``)+X(a,1,o);case 2:return`GMT`+(i>=0?`+`:``)+X(a,2,o)+`:`+X(Math.abs(i%60),2,o);case 3:return n===0?`Z`:(i>=0?`+`:``)+X(a,2,o)+`:`+X(Math.abs(i%60),2,o);default:throw new N(2310,!1)}}}var Po=0;var Mt=4;function ko(t){let r=xt(t,Po,1).getDay();return xt(t,0,1+(r<=Mt?Mt:Mt+7)-r)}function ii(t){let r=t.getDay(),e=r===0?-3:Mt-r;return xt(t.getFullYear(),t.getMonth(),t.getDate()+e)}function yn(t,r=!1){return function(e,n){let i;if(r){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=ii(e),a=ko(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return X(i,t,Je(n,de.MinusSign))}}function It(t,r=!1){return function(e,n){return X(ii(e).getFullYear(),t,Je(n,de.MinusSign),r)}}var _n=Object.create(null);function Bo(t){if(_n[t])return _n[t];let r;switch(t){case`G`:case`GG`:case`GGG`:r=E(3,D.Abbreviated);break;case`GGGG`:r=E(3,D.Wide);break;case`GGGGG`:r=E(3,D.Narrow);break;case`y`:r=M(0,1,0,!1,!0);break;case`yy`:r=M(0,2,0,!0,!0);break;case`yyy`:r=M(0,3,0,!1,!0);break;case`yyyy`:r=M(0,4,0,!1,!0);break;case`Y`:r=It(1);break;case`YY`:r=It(2,!0);break;case`YYY`:r=It(3);break;case`YYYY`:r=It(4);break;case`M`:case`L`:r=M(1,1,1);break;case`MM`:case`LL`:r=M(1,2,1);break;case`MMM`:r=E(2,D.Abbreviated);break;case`MMMM`:r=E(2,D.Wide);break;case`MMMMM`:r=E(2,D.Narrow);break;case`LLL`:r=E(2,D.Abbreviated,O.Standalone);break;case`LLLL`:r=E(2,D.Wide,O.Standalone);break;case`LLLLL`:r=E(2,D.Narrow,O.Standalone);break;case`w`:r=yn(1);break;case`ww`:r=yn(2);break;case`W`:r=yn(1,!0);break;case`d`:r=M(2,1);break;case`dd`:r=M(2,2);break;case`c`:case`cc`:r=M(7,1);break;case`ccc`:r=E(1,D.Abbreviated,O.Standalone);break;case`cccc`:r=E(1,D.Wide,O.Standalone);break;case`ccccc`:r=E(1,D.Narrow,O.Standalone);break;case`cccccc`:r=E(1,D.Short,O.Standalone);break;case`E`:case`EE`:case`EEE`:r=E(1,D.Abbreviated);break;case`EEEE`:r=E(1,D.Wide);break;case`EEEEE`:r=E(1,D.Narrow);break;case`EEEEEE`:r=E(1,D.Short);break;case`a`:case`aa`:case`aaa`:r=E(0,D.Abbreviated);break;case`aaaa`:r=E(0,D.Wide);break;case`aaaaa`:r=E(0,D.Narrow);break;case`b`:case`bb`:case`bbb`:r=E(0,D.Abbreviated,O.Standalone,!0);break;case`bbbb`:r=E(0,D.Wide,O.Standalone,!0);break;case`bbbbb`:r=E(0,D.Narrow,O.Standalone,!0);break;case`B`:case`BB`:case`BBB`:r=E(0,D.Abbreviated,O.Format,!0);break;case`BBBB`:r=E(0,D.Wide,O.Format,!0);break;case`BBBBB`:r=E(0,D.Narrow,O.Format,!0);break;case`h`:r=M(3,1,-12);break;case`hh`:r=M(3,2,-12);break;case`H`:r=M(3,1);break;case`HH`:r=M(3,2);break;case`m`:r=M(4,1);break;case`mm`:r=M(4,2);break;case`s`:r=M(5,1);break;case`ss`:r=M(5,2);break;case`S`:r=M(6,1);break;case`SS`:r=M(6,2);break;case`SSS`:r=M(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:r=Tt(0);break;case`ZZZZZ`:r=Tt(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:r=Tt(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:r=Tt(2);break;default:return null}return _n[t]=r,r}function oi(t,r){t=t.replace(/:/g,``);let e=Date.parse(`Jan 01, 1970 00:00:00 `+t)/6e4;return isNaN(e)?r:e}function Uo(t,r){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+r),t}function jo(t,r,e){let i=t.getTimezoneOffset();return Uo(t,-1*(oi(r,i)-i))}function zo(t){if(Zr(t))return t;if(typeof t==`number`&&!isNaN(t))return new Date(t);if(typeof t==`string`){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,a=1]=t.split(`-`).map(s=>+s);return xt(i,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Io))return $o(n)}let r=new Date(t);if(!Zr(r))throw new N(2311,!1);return r}function $o(t){let r=new Date(0),e=0,n=0,i=t[8]?r.setUTCFullYear:r.setFullYear,o=t[8]?r.setUTCHours:r.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(r,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-n,d=Number(t[6]||0),l=Math.floor(parseFloat(`0.`+(t[7]||0))*1e3);return o.call(r,a,s,d,l),r}function Zr(t){return t instanceof Date&&!isNaN(t.valueOf())}var Vo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=T(Ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static ɵfac=function(n){return new(n||t)(kr(Bi$1))};static ɵdir=ZE({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[iy]})}return t})();function ai(t,r){return new N(2100,!1)}var Dn=class{createSubscription(r,e,n){return Fh(()=>r.subscribe({next:e,error:n}))}dispose(r){Fh(()=>r.unsubscribe())}};var En=class{createSubscription(r,e,n){return r.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(r){r.unsubscribe()}};var Ho=new En;var Go=new Dn;var Wo=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=T(mt);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Zc(e))return Ho;if(Fp(e))return Go;throw ai(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(n){return new(n||t)(kr(Bj,16))};static ɵpipe=YE({name:`async`,type:t,pure:!1})}return t})();var Ko=`mediumDate`;var si=new A(``);var ci=new A(``);var Zo=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,i){this.locale=e,this.defaultTimezone=n,this.defaultOptions=i}transform(e,n,i,o){if(e==null||e===``||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??Ko,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ri(e,a,o||this.locale,s)}catch(a){throw ai(t,a.message)}}static ɵfac=function(n){return new(n||t)(kr(ol,16),kr(si,24),kr(ci,24))};static ɵpipe=YE({name:`date`,type:t,pure:!0})}return t})();var di=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({})}return t})();function qe(t,r){r=encodeURIComponent(r);for(let e of t.split(`;`)){let n=e.indexOf(`=`),[i,o]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(i.trim()!==r)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var Yo=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var wn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Oe$1(Yo),i},providedIn:`root`})}return t})();function cd(t,r,e){return SD(t,r,e)}var An=`browser`;function ui(t){return t===An}var Qe=class{_doc;constructor(r){this._doc=r}manager};var Ft=(()=>{class t extends Qe{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static ɵfac=function(n){return new(n||t)(Oe$1(dr))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var Lt=new A(``);var In=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Ft));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Ft);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||t)(Oe$1(Lt),Oe$1(Re$1))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var Nn=`ng-app-id`;function li(t){for(let r of t)r.remove()}function mi(t,r){let e=r.createElement(`style`);return e.textContent=t,e}function ea(t,r,e,n){let i=t.head?.querySelectorAll(`style[${Nn}="${r}"],link[${Nn}="${r}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Nn),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Tn(t,r){let e=r.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var Mn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,ea(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,mi);n?.forEach(i=>this.addUsage(i,this.external,Tn))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(li(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])li(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,mi(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,Tn(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of n.elements)o.parentNode===e?o.remove():i.push(o);n.elements=i}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||t)(Oe$1(dr),Oe$1(rd),Oe$1(qm,8),Oe$1($m))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var Cn={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var xn=/%COMP%/g;var hi=`%COMP%`;var ta=`_nghost-${hi}`;var na=`_ngcontent-${hi}`;var ra=!0;var ia=new A(``,{factory:()=>ra});var oa=new A(``);function aa(t){return na.replace(xn,t)}function sa(t){return ta.replace(xn,t)}function pi(t,r){return r.map(e=>e.replace(xn,t))}var Fn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,i,o,a,s,d=null,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=d,this.tracingService=l,this.cssVarNamespace=u??``,this.defaultRenderer=new et(e,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof Ot?i.applyToHost(e):i instanceof tt&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case Gt$1.Emulated:o=new Ot(d,l,n,this.appId,u,a,s,f,this.cssVarNamespace);break;case Gt$1.ShadowDom:return new Rt(d,e,n,a,s,this.nonce,f,this.cssVarNamespace,l);case Gt$1.ExperimentalIsolatedShadowDom:return new Rt(d,e,n,a,s,this.nonce,f,this.cssVarNamespace);default:o=new tt(d,l,n,u,a,s,f,this.cssVarNamespace);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||t)(Oe$1(In),Oe$1(bp),Oe$1(rd),Oe$1(ia),Oe$1(dr),Oe$1(Re$1),Oe$1(qm),Oe$1(Zt$1,8),Oe$1(oa,8))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var et=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i,o=``){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Cn[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(fi(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){if(r){let i=fi(r)?r.content:r;if(n!=null&&n.parentNode!==i)throw new N(-5106,!1);i.insertBefore(e,n)}}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r==`string`?this.doc.querySelector(r):r;if(!n)throw new N(-5104,!1);return e||(n.textContent=``),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+`:`+e;let o=Cn[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=Cn[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||i&(mi$1.DashCase|mi$1.Important)?r.style.setProperty(e,n,i&mi$1.Important?`important`:``):r.style[e]=n}removeStyle(r,e,n){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||n&mi$1.DashCase?r.style.removeProperty(e):r.style[e]=``}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r==`string`&&(r=se().getGlobalEventTarget(this.doc,r),!r))throw new N(-5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e===`__ngUnwrap__`)return r;r(e)===!1&&e.preventDefault()}}};function fi(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var Rt=class extends et{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,s,d,l){super(r,i,o,s,d),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=pi(n.id,u).map(S=>S.replace(/%NS%/g,d));for(let S of u){let T=document.createElement(`style`);a&&T.setAttribute(`nonce`,a),T.textContent=S,this.shadowRoot.appendChild(T)}let f=n.getExternalStyles?.();if(f)for(let S of f){let T=Tn(S,i);a&&T.setAttribute(`nonce`,a),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var tt=class extends et{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,s,d,l){super(r,o,a,s,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let u=n.styles,f=l?pi(l,u):u;this.styles=f.map(S=>S.replace(/%NS%/g,d)),this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nn$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Ot=class extends tt{contentAttr;hostAttr;constructor(r,e,n,i,o,a,s,d,l){let u=i+`-`+n.id;super(r,e,n,o,a,s,d,l,u),this.contentAttr=aa(u),this.hostAttr=sa(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,``)}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,``),n}};var Pt=class t extends Ke{supportsDOMEvents=!0;static makeCurrent(){bn(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e===`window`?window:e===`document`?r:e===`body`?r.body:null}getBaseHref(r){let e=da();return e==null?null:ua(e)}resetBaseElement(){nt=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return qe(document.cookie,r)}};var nt=null;function da(){return nt=nt||document.head.querySelector(`base`),nt?nt.getAttribute(`href`):null}function ua(t){return new URL(t,document.baseURI).pathname}var gi=[`alt`,`control`,`meta`,`shift`];var la={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var ma={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var bi=(()=>{class t extends Qe{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>se().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split(`.`),i=n.shift();if(n.length===0||!(i===`keydown`||i===`keyup`))return null;let o=t._normalizeKey(n.pop()),a=``,s=n.indexOf(`code`);if(s>-1&&(n.splice(s,1),a=`code.`),gi.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),a+=l+`.`)}),a+=o,n.length!=0||o.length===0)return null;let d={};return d.domEventName=i,d.fullKey=a,d}static matchEventFullKeyCode(e,n){let i=la[e.key]||e.key,o=``;return n.indexOf(`code.`)>-1&&(i=e.code,o=`code.`),i==null||!i?!1:(i=i.toLowerCase(),i===` `?i=`space`:i===`.`&&(i=`dot`),gi.forEach(a=>{if(a!==i){let s=ma[a];s(e)&&(o+=a+`.`)}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||t)(Oe$1(dr))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();async function fa(t,r,e){return $j(G({rootComponent:t},ha(r,e)))}function ha(t,r){return{platformRef:r?.platformRef,appProviders:[...ya,...t?.providers??[]],platformProviders:va}}function pa(){Pt.makeCurrent()}function ga(){return new Ye$1}function ba(){return ky(document),document}var va=[{provide:$m,useValue:An},{provide:od,useValue:pa,multi:!0},{provide:dr,useFactory:ba}];var ya=[{provide:Ys,useValue:`root`},{provide:Ye$1,useFactory:ga},{provide:Lt,useClass:Ft,multi:!0},{provide:Lt,useClass:bi,multi:!0},Fn,{provide:bp,useClass:Mn},{provide:Mn,useExisting:bp},In,{provide:br,useExisting:Fn},[]];var re=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:`a`})}set(r,e){return this.clone({name:r,value:e,op:`s`})}delete(r,e){return this.clone({name:r,value:e,op:`d`})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,n]of r.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let n=r.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=r.op===`a`?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case`d`:let o=r.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(e);if(!s)return;s=s.filter(d=>a.indexOf(d)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Bt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var Ut=class{encodeKey(r){return vi(r)}encodeValue(r){return vi(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function _a(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(i=>{let o=i.indexOf(`=`),[a,s]=o==-1?[r.decodeKey(i),``]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],d=e.get(a)||[];d.push(s),e.set(a,d)}),e}var Da=/%(\d[a-f0-9])/gi;var Ea={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function vi(t){return encodeURIComponent(t).replace(Da,(r,e)=>Ea[e]??r)}function kt(t){return`${t}`}var ue=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Ut,r.fromString){if(r.fromObject)throw new N(2805,!1);this.map=_a(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(kt):[kt(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:`a`})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:`a`})}):e.push({param:n,value:i,op:`a`})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:`s`})}delete(r,e){return this.clone({param:r,value:e,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let e=r.op===`a`?(this.map.get(r.param)||[]).slice():[];e.push(kt(r.value)),this.map.set(r.param,e);break;case`d`:if(r.value!==void 0){let n=(this.map.get(r.param)||[]).slice(),i=n.indexOf(kt(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function Sa(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function yi(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function _i(t){return typeof Blob<`u`&&t instanceof Blob}function Di(t){return typeof FormData<`u`&&t instanceof FormData}function wa(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var rt=`Content-Type`;var jt=`Accept`;var wi=`text/plain`;var Ai=`application/json`;var Ni=`${Ai}, ${wi}, */*`;var Oe=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Sa(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new re,this.context??=new Bt,!this.params)this.params=new ue,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e,d=``,l=e.indexOf(`#`);l!==-1&&(d=e.substring(l),s=e.substring(0,l));let u=s.indexOf(`?`),f=u===-1?`?`:u<s.length-1?`&`:``;this.urlWithParams=s+f+a+d}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||yi(this.body)||_i(this.body)||Di(this.body)||wa(this.body)?this.body:this.body instanceof ue?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Di(this.body)?null:_i(this.body)?this.body.type||null:yi(this.body)?null:typeof this.body==`string`?wi:this.body instanceof ue?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?Ai:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,d=r.mode||this.mode,l=r.redirect||this.redirect,u=r.credentials||this.credentials,f=r.referrer??this.referrer,S=r.integrity||this.integrity,T=r.referrerPolicy||this.referrerPolicy,R=r.transferCache??this.transferCache,F=r.timeout??this.timeout,A=r.body!==void 0?r.body:this.body,q=r.withCredentials??this.withCredentials,p=r.reportProgress??this.reportProgress,v=r.reportUploadProgress??this.reportUploadProgress,k=r.reportDownloadProgress??this.reportDownloadProgress,Y=r.headers||this.headers,I=r.params||this.params,oe=r.context??this.context;return r.setHeaders!==void 0&&(Y=Object.keys(r.setHeaders).reduce((me,Q)=>me.set(Q,r.setHeaders[Q]),Y)),r.setParams&&(I=Object.keys(r.setParams).reduce((me,Q)=>me.set(Q,r.setParams[Q]),I)),new t(e,n,A,{params:I,headers:Y,context:oe,reportProgress:p,reportUploadProgress:v,reportDownloadProgress:k,responseType:i,withCredentials:q,transferCache:R,keepalive:o,cache:s,priority:a,timeout:F,mode:d,redirect:l,credentials:u,referrer:f,integrity:S,referrerPolicy:T})}};var ne=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(ne||{});var Le=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n=`OK`){this.headers=r.headers||new re,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var it=class t extends Le{constructor(r={}){super(r)}type=ne.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var Pe=class t extends Le{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ne.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var te=class extends Le{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var Ci=200;var Aa=204;var Na=/^\)\]\}',?\n/;var Ti=new A(``,{factory:()=>null});var zt=(()=>{class t{fetchImpl=T(On,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(Re$1);destroyRef=T(pe$1);maxResponseSize=T(Ti);handle(e){return new _(n=>{let i=new AbortController,o=!1,a={next:d=>{d.type===ne.Response&&(o=!0),n.next(d)},error:d=>{o=!0,n.error(d)},complete:()=>{o=!0,n.complete()}};this.doRequest(e,i.signal,a).then(Ln,d=>a.error(new te({error:d})));let s;return e.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(e,n,i){let o=this.createRequestInit(e),a;try{let A=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,G({signal:n},o)));Ca(A),i.next({type:ne.Sent}),a=await A}catch(A){i.error(new te({error:A,status:A.status??0,statusText:A.statusText,url:e.urlWithParams,headers:A.headers}));return}let s=new re(a.headers),d=a.statusText,l=a.url||e.urlWithParams,u=a.status,f=null,S=e.reportProgress||e.reportDownloadProgress;if(S&&i.next(new it({headers:s,status:u,statusText:d,url:l})),a.body){let A=a.headers.get(rt)??``,q=a.headers.get(`content-length`),p=q!==null?Number(q):NaN;this.maxResponseSize!==null&&Number.isFinite(p)&&p>this.maxResponseSize&&(await a.body.cancel(),Ei(this.maxResponseSize));let v=[],k=a.body.getReader(),Y=0,I,oe,me=typeof Zone<`u`&&Zone.current,Q=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await k.cancel(),Q=!0;break}let{done:sn,value:cn}=await k.read();if(sn)break;if(v.push(cn),Y+=cn.length,this.maxResponseSize!==null&&Y>this.maxResponseSize&&(await k.cancel(),Ei(this.maxResponseSize)),S){oe=e.responseType===`text`?(oe??``)+(I??=Si(A)).decode(cn,{stream:!0}):void 0;let ir=()=>i.next({type:ne.DownloadProgress,total:Number.isFinite(p)?p:void 0,loaded:Y,partialText:oe});me?me.run(ir):ir()}}}),Q){i.complete();return}let So=this.concatChunks(v,Y);try{f=this.parseBody(e,So,A,u)}catch(sn){i.error(new te({error:sn,headers:new re(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=f?Ci:0);let T=u>=200&&u<300,R=a.redirected,F=a.type;T?(i.next(new Pe({body:f,headers:s,status:u,statusText:d,url:l,redirected:R,responseType:F})),i.complete()):i.error(new te({error:f,headers:s,status:u,statusText:d,url:l,redirected:R,responseType:F}))}parseBody(e,n,i,o){switch(e.responseType){case`json`:let a=new TextDecoder().decode(n).replace(Na,``);if(a===``)return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case`text`:return Si(i).decode(n);case`blob`:return new Blob([n],{type:i});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let n={},i;if(i=e.credentials,e.withCredentials&&(i=`include`),e.headers.forEach((o,a)=>n[o]=a.join(`,`)),e.headers.has(jt)||(n[jt]=Ni),!e.headers.has(rt)){let o=e.detectContentTypeHeader();o!==null&&(n[rt]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let i=new Uint8Array(n),o=0;for(let a of e)i.set(a,o),o+=a.length;return i}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var On=class{};function Ln(){}function Ca(t){t.then(Ln,Ln)}function Ei(t){throw new N(-2825,!1)}var Ta=/charset=\s*["']?([^;"'\s]+)["']?/i;function Si(t){let r=t.match(Ta);if(r!==null)try{return new TextDecoder(r[1])}catch{}return new TextDecoder}var Ia=new A(``,{factory:()=>!0});var Ma=`XSRF-TOKEN`;var xa=new A(``,{factory:()=>Ma});var Fa=`X-XSRF-TOKEN`;var Ra=new A(``,{factory:()=>Fa});var Oa=(()=>{class t{cookieName=T(xa);doc=T(dr);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=qe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var Ii=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Oe$1(Oa),i},providedIn:`root`})}return t})();function Mi(t,r){if(!T(Ia)||t.method===`GET`||t.method===`HEAD`)return r(t);try{let i=T(Re).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return r(t)}catch{return r(t)}let e=T(Ii).getToken(),n=T(Ra);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function La(t,r){return r(t)}function Pa(t,r,e){return(n,i)=>ko$1(e,()=>r(n,o=>t(o,i)))}var kn=new A(``,{factory:()=>[Mi]});var xi=new A(``);var Fi=new A(``,{factory:()=>!0});var Vt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Oe$1(zt),i},providedIn:`root`})}return t})();var $t=(()=>{class t{backend;injector;chain=null;pendingTasks=T(Ta$1);contributeToStability=T(Fi);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let i=this.injector.get(Ht,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(xi,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(kn),...a]));this.chain=s.reduceRight((d,l)=>Pa(d,l,this.injector),La)}let n=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return Fh(()=>n(e,o=>this.backend.handle(o))).pipe(Ug(i))}else return Fh(()=>n(e,i=>this.backend.handle(i)))}static ɵfac=function(n){return new(n||t)(Oe$1(Vt),Oe$1(fe))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ht=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Oe$1($t),i},providedIn:`root`})}return t})();function Rn(t,r){return G({body:r},t)}var Ri=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Oe)o=e;else{let d;i.headers instanceof re?d=i.headers:d=new re(i.headers);let l;i.params&&(i.params instanceof ue?l=i.params:l=new ue({fromObject:i.params})),o=new Oe(e,n,i.body!==void 0?i.body:null,{headers:d,context:i.context,params:l,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=ss$1(o).pipe(jg(d=>this.handler.handle(d)));if(e instanceof Oe||i.observe===`events`)return a;let s=a.pipe(Hn$1(d=>d instanceof Pe));switch(i.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return s.pipe(oe(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new N(2806,!1);return d.body}));case`blob`:return s.pipe(oe(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new N(2807,!1);return d.body}));case`text`:return s.pipe(oe(d=>{if(d.body!==null&&typeof d.body!=`string`)throw new N(2808,!1);return d.body}));default:return s.pipe(oe(d=>d.body))}case`response`:return s;default:throw new N(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new ue().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,i={}){return this.request(`PATCH`,e,Rn(i,n))}post(e,n,i={}){return this.request(`POST`,e,Rn(i,n))}put(e,n,i={}){return this.request(`PUT`,e,Rn(i,n))}static ɵfac=function(n){return new(n||t)(Oe$1(Ht))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ka=/^\)\]\}',?\n/;var Pn=(()=>{class t{xhrFactory;tracingService=T(Zt$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new N(-2800,!1);let n=this.xhrFactory;return ss$1(null).pipe(wg(()=>new _(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((p,v)=>a.setRequestHeader(p,v.join(`,`))),e.headers.has(jt)||a.setRequestHeader(jt,Ni),!e.headers.has(rt)){let p=e.detectContentTypeHeader();p!==null&&a.setRequestHeader(rt,p)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();a.responseType=p!==`json`?p:`text`}let s=e.serializeBody(),d=null,l=()=>{if(d!==null)return d;let p=a.statusText||`OK`,v=new re(a.getAllResponseHeaders()),k=a.responseURL||e.url;return d=new it({headers:v,status:a.status,statusText:p,url:k}),d},u=this.maybePropagateTrace(()=>{let{headers:p,status:v,statusText:k,url:Y}=l(),I=null;v!==Aa&&(I=typeof a.response>`u`?a.responseText:a.response),v===0&&(v=I?Ci:0);let oe=v>=200&&v<300;if(e.responseType===`json`&&typeof I==`string`){let me=I;I=I.replace(ka,``);try{I=I!==``?JSON.parse(I):null}catch(Q){I=me,oe&&(oe=!1,I={error:Q,text:I})}}oe?(o.next(new Pe({body:I,headers:p,status:v,statusText:k,url:Y||void 0})),o.complete()):o.error(new te({error:I,headers:p,status:v,statusText:k,url:Y||void 0}))}),f=this.maybePropagateTrace(p=>{let{url:v}=l(),k=new te({error:p,status:a.status||0,statusText:a.statusText||`Unknown Error`,url:v||void 0});o.error(k)}),S=f;e.timeout&&(S=this.maybePropagateTrace(p=>{let{url:v}=l(),k=new te({error:new DOMException(`Request timed out`,`TimeoutError`),status:a.status||0,statusText:a.statusText||`Request timeout`,url:v||void 0});o.error(k)}));let T=!1,R=this.maybePropagateTrace(p=>{T||(o.next(l()),T=!0);let v={type:ne.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(v.total=p.total),e.responseType===`text`&&a.responseText&&(v.partialText=a.responseText),o.next(v)}),F=this.maybePropagateTrace(p=>{let v={type:ne.UploadProgress,loaded:p.loaded};p.lengthComputable&&(v.total=p.total),o.next(v)});a.addEventListener(`load`,u),a.addEventListener(`error`,f),a.addEventListener(`timeout`,S),a.addEventListener(`abort`,f);let A=e.reportProgress||e.reportUploadProgress,q=e.reportProgress||e.reportDownloadProgress;return q&&a.addEventListener(`progress`,R),A&&s!==null&&a.upload&&a.upload.addEventListener(`progress`,F),a.send(s),o.next({type:ne.Sent}),()=>{a.removeEventListener(`error`,f),a.removeEventListener(`abort`,f),a.removeEventListener(`load`,u),a.removeEventListener(`timeout`,S),q&&a.removeEventListener(`progress`,R),A&&s!==null&&a.upload&&a.upload.removeEventListener(`progress`,F),a.readyState!==a.DONE&&a.abort()}})))}static ɵfac=function(n){return new(n||t)(Oe$1(wn))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Gt=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(Gt||{});function Oi(t,r){return{ɵkind:t,ɵproviders:r}}function Ba(...t){let r=[Ri,zt,$t,{provide:Ht,useExisting:$t},{provide:Vt,useFactory:()=>T(zt)},{provide:kn,useValue:Mi,multi:!0}];for(let e of t)r.push(...e.ɵproviders);return Ro$1(r)}function Ua(t){return Oi(Gt.Interceptors,t.map(r=>({provide:kn,useValue:r,multi:!0})))}function ja(){return Oi(Gt.Xhr,[Pn,{provide:Vt,useExisting:Pn}])}var zu=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||t)(Oe$1(dr))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Bn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Oe$1(za),i},providedIn:`root`})}return t})();var za=(()=>{class t extends Bn{_doc=T(dr);sanitize(e,n){if(n==null)return null;switch(e){case Z$1.NONE:return n;case Z$1.HTML:return wc(n,`HTML`)?_n$1(n):cv(this._doc,String(n)).toString();case Z$1.STYLE:return wc(n,`Style`)?_n$1(n):n;case Z$1.SCRIPT:if(wc(n,`Script`))return _n$1(n);throw new N(5200,!1);case Z$1.URL:return wc(n,`URL`)?_n$1(n):bc(String(n));case Z$1.RESOURCE_URL:if(wc(n,`ResourceURL`))return _n$1(n);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return $y(e)}bypassSecurityTrustStyle(e){return Uy(e)}bypassSecurityTrustScript(e){return qy(e)}bypassSecurityTrustUrl(e){return Wy(e)}bypassSecurityTrustResourceUrl(e){return Gy(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();function ot(t){return t.buttons===0||t.detail===0}function at(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Un;function Li(){if(Un==null){let t=typeof document<`u`?document.head:null;Un=!!(t&&(t.createShadowRoot||t.attachShadow))}return Un}function jn(t){if(Li()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function zn(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function J(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var $n;try{$n=typeof Intl<`u`&&Intl.v8BreakIterator}catch{$n=!1}var L=(()=>{class t{_platformId=T($m);isBrowser=this._platformId?ui(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$n)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var st;function Pi(){if(st==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>st=!0}))}finally{st=st||!1}return st}function ke(t){return Pi()?t:!!t.capture}function Vn(t,r=0){return ki(t)?Number(t):arguments.length===2?r:0}function ki(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ie(t){return t instanceof Mr?t.nativeElement:t}var Bi=new A(`cdk-input-modality-detector-options`);var Ui={ignoreKeys:[18,17,224,91,16]};var ji=650;var Hn={passive:!0,capture:!0};var zi=(()=>{class t{_platform=T(L);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=J(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ji||(this._modality.next(ot(e)?`keyboard`:`mouse`),this._mostRecentTarget=J(e))};_onTouchstart=e=>{if(at(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=J(e)};constructor(){let e=T(Re$1),n=T(dr),i=T(Bi,{optional:!0});if(this._options=G(G({},Ui),i),this.modalityDetected=this._modality.pipe(Jg(1)),this.modalityChanged=this.modalityDetected.pipe(Eg()),this._platform.isBrowser){let o=T(br).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,`keydown`,this._onKeydown,Hn),o.listen(n,`mousedown`,this._onMousedown,Hn),o.listen(n,`touchstart`,this._onTouchstart,Hn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var ct=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(ct||{});var $i=new A(`cdk-focus-monitor-default-options`);var Wt=ke({passive:!0,capture:!0});var Kt=(()=>{class t{_ngZone=T(Re$1);_platform=T(L);_inputModalityDetector=T(zi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T(dr);_stopInputModalityDetector=new Q;constructor(){let e=T($i,{optional:!0});this._detectionMode=e?.detectionMode||ct.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=J(e);for(let i=n;i;i=i.parentElement)e.type===`focus`?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=ie(e);if(!this._platform.isBrowser||i.nodeType!==1)return ss$1();let o=jn(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new Q,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=ie(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=ie(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([s,d])=>this._originChanged(s,n,d)):(this._setOrigin(n),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===ct.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===ct.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?ji:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=J(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Wt),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Wt)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(bg(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Wt),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Wt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var $a=(()=>{class t{_elementRef=T(Mr);_focusMonitor=T(Kt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ge;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=ZE({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Zt=new WeakMap;var le=(()=>{class t{_appRef;_injector=T(Ee);_environmentInjector=T(fe);load(e){let n=this._appRef=this._appRef||this._injector.get($i$1),i=Zt.get(n);i||(i={loaders:new Set,refs:[]},Zt.set(n,i),n.onDestroy(()=>{Zt.get(n)?.refs.forEach(o=>o.destroy()),Zt.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Gj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var Xt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=qE({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})();var Yt;function Va(){if(Yt===void 0&&(Yt=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{Yt=t.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return Yt}function Ha(t){return Va()?.createHTML(t)||t}function Vi(t,r,e){t.innerHTML=Ha(e.sanitize(Z$1.HTML,r)||``)}function Jt(t){return Array.isArray(t)?t:[t]}var Hi=new Set;var ye;var qt=(()=>{class t{_platform=T(L);_nonce=T(qm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Wa}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ga(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();function Ga(t,r){if(!Hi.has(t))try{ye||(ye=document.createElement(`style`),r&&ye.setAttribute(`nonce`,r),ye.setAttribute(`type`,`text/css`),document.head.appendChild(ye)),ye.sheet&&(ye.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),Hi.add(t))}catch(e){console.error(e)}}function Wa(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var Gn=(()=>{class t{_mediaMatcher=T(qt);_zone=T(Re$1);_queries=new Map;_destroySubject=new Q;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Gi(Jt(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let o=yg(Gi(Jt(e)).map(a=>this._registerQuery(a).observable));return o=rn$1(o.pipe(tn$1(1)),o.pipe(Jg(1),Vg(0))),o.pipe(oe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:l})=>{s.matches=s.matches||d,s.breakpoints[l]=d}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new _(a=>{let s=d=>this._zone.run(()=>a.next(d));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(zl(n),oe(({matches:a})=>({query:e,matches:a})),bg(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();function Gi(t){return t.map(r=>r.split(`,`)).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function Ka(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var Wi=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var Ki=(()=>{class t{_mutationObserverFactory=T(Wi);_observedElements=new Map;_ngZone=T(Re$1);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=ie(e);return new _(i=>{let a=this._observeElement(n).pipe(oe(s=>s.filter(d=>!Ka(d))),Hn$1(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{i.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new Q,i=this._mutationObserverFactory.create(o=>n.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var $l=(()=>{class t{_contentObserver=T(Ki);_elementRef=T(Mr);event=new Ge;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Vn(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Vg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=ZE({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Uj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var Zi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({providers:[Wi]})}return t})();var qi=(()=>{class t{_platform=T(L);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return Ya(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Za(rs(e));if(n&&(Yi(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),o=Yi(e);return e.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!ts(e)?!1:i===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return ns(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();function Za(t){try{return t.frameElement}catch{return null}}function Ya(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function Xa(t){let r=t.nodeName.toLowerCase();return r===`input`||r===`select`||r===`button`||r===`textarea`}function Ja(t){return Qa(t)&&t.type==`hidden`}function qa(t){return es(t)&&t.hasAttribute(`href`)}function Qa(t){return t.nodeName.toLowerCase()==`input`}function es(t){return t.nodeName.toLowerCase()==`a`}function Qi(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let r=t.getAttribute(`tabindex`);return!!(r&&!isNaN(parseInt(r,10)))}function Yi(t){if(!Qi(t))return null;let r=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(r)?-1:r}function ts(t){let r=t.nodeName.toLowerCase(),e=r===`input`&&t.type;return e===`text`||e===`password`||r===`select`||r===`textarea`}function ns(t){return Ja(t)?!1:Xa(t)||qa(t)||t.hasAttribute(`contenteditable`)||Qi(t)}function rs(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Qt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,i,o=!1,a){this._element=r,this._checker=e,this._ngZone=n,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener(`focus`,this.startAnchorListener),r.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary(`start`);return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary(`end`);return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add(`cdk-visually-hidden`),r.classList.add(`cdk-focus-trap-anchor`),r.setAttribute(`aria-hidden`,`true`),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){Bv(r,{injector:this._injector})}};var eo=(()=>{class t{_checker=T(qi);_ngZone=T(Re$1);_document=T(dr);_injector=T(Ee);constructor(){T(le).load(Xt)}create(e,n=!1){return new Qt(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var is=(()=>{class t{_elementRef=T(Mr);_focusTrapFactory=T(eo);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T(L).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=zn(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(n){return new(n||t)};static ɵdir=ZE({type:t,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,Uj],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,Uj]},exportAs:[`cdkTrapFocus`],features:[iy]})}return t})();var to=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var no=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var os=0;var as=(()=>{class t{_ngZone=T(Re$1);_defaultOptions=T(no,{optional:!0});_liveElement;_document=T(dr);_sanitizer=T(Bn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T(to,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,o,a;return n.length===1&&typeof n[0]==`number`?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),a==null&&i&&(a=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Vi(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),i=this._document.createElement(`div`);for(let o=0;o<n.length;o++)n[o].remove();return i.classList.add(e),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${os++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<n.length;i++){let o=n[i],a=o.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&o.setAttribute(`aria-owns`,a+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var pe=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(pe||{});var Xi=`cdk-high-contrast-black-on-white`;var Ji=`cdk-high-contrast-white-on-black`;var Wn=`cdk-high-contrast-active`;var ro=(()=>{class t{_platform=T(L);_hasCheckedHighContrastMode=!1;_document=T(dr);_breakpointSubscription;constructor(){this._breakpointSubscription=T(Gn).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return pe.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(i&&i.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return pe.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return pe.BLACK_ON_WHITE}return pe.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Wn,Xi,Ji),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===pe.BLACK_ON_WHITE?e.add(Wn,Xi):n===pe.WHITE_ON_BLACK&&e.add(Wn,Ji)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var ss=(()=>{class t{constructor(){T(ro)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({imports:[Zi]})}return t})();var cs=200;var en=class{_letterKeyStream=new Q;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:cs;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(em(e=>this._pressedLetters.push(e)),Vg(r),Hn$1(()=>this._pressedLetters.length>0),oe(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function io(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Be=class{_items;_activeItemIndex=Yo$1(-1);_activeItem=Yo$1(null);_wrap=!1;_typeaheadSubscription=j.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof gi$1?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):Xo(r)&&(this._effectRef=id(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new Q;change=new Q;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new en(e,{debounceInterval:typeof r==`number`?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||io(r,`shiftKey`))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r==`number`?r:e.indexOf(r),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+r*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return Xo(this._items)?this._items():this._items instanceof gi$1?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Kn=class extends Be{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var Zn=class extends Be{_origin=`program`;setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var oo=new Map;var Yn=class t{_appId=T(rd);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){this._appId!==`ng`&&(r+=this._appId);let n=oo.get(r);return n===void 0?n=0:n++,oo.set(r,n),`${r}${e?t._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})};var so=` `;function ds(t,r,e){let n=nn(t,r);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),t.setAttribute(r,n.join(so)))}function us(t,r,e){let n=nn(t,r);e=e.trim();let i=n.filter(o=>o!==e);i.length?t.setAttribute(r,i.join(so)):t.removeAttribute(r)}function nn(t,r){return t.getAttribute(r)?.match(/\S+/g)??[]}var co=`cdk-describedby-message`;var tn=`cdk-describedby-host`;var Jn=0;var jm=(()=>{class t{_platform=T(L);_document=T(dr);_messageRegistry=new Map;_messagesContainer=null;_id=`${Jn++}`;constructor(){T(le).load(Xt),this._id=T(rd)+`-`+Jn++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let o=Xn(n,i);typeof n!=`string`?(ao(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let o=Xn(n,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${tn}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(tn);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement(`div`);ao(i,this._id),i.textContent=e,n&&i.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Xn(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let i=this._document.createElement(`div`);i.style.visibility=`hidden`,i.classList.add(e),i.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=nn(e,`aria-describedby`).filter(i=>i.indexOf(co)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);ds(e,`aria-describedby`,i.messageElement.id),e.setAttribute(tn,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,us(e,`aria-describedby`,i.messageElement.id),e.removeAttribute(tn)}_isElementDescribedByMessage(e,n){let i=nn(e,`aria-describedby`),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let i=n==null?``:`${n}`.trim(),o=e.getAttribute(`aria-label`);return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();function Xn(t,r){return typeof t==`string`?`${r||``}/${t}`:t}function ao(t,r){t.id||(t.id=`${co}-${r}-${Jn++}`)}var dt=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(dt||{});var rn;var _e;function Zm(){if(_e==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return _e=!1,_e;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)_e=!0;else{let t=Element.prototype.scrollTo;t?_e=!/\{\s*\[native code\]\s*\}/.test(t.toString()):_e=!1}}return _e}function Ym(){if(typeof document!=`object`||!document)return dt.NORMAL;if(rn==null){let t=document.createElement(`div`),r=t.style;t.dir=`rtl`,r.width=`1px`,r.overflow=`auto`,r.visibility=`hidden`,r.pointerEvents=`none`,r.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,t.appendChild(e),document.body.appendChild(t),rn=dt.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,rn=t.scrollLeft===0?dt.NEGATED:dt.INVERTED),t.remove()}return rn}function Jm(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Ue;var uo=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Qm(){if(Ue)return Ue;if(typeof document!=`object`||!document)return Ue=new Set(uo),Ue;let t=document.createElement(`input`);return Ue=new Set(uo.filter(r=>(t.setAttribute(`type`,r),t.type===r))),Ue}var of={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var ls=new A(`MATERIAL_ANIMATIONS`);var lo=null;function ms(){return T(ls,{optional:!0})?.animationsDisabled||T(Um,{optional:!0})===`NoopAnimations`?`di-disabled`:(lo??=T(qt).matchMedia(`(prefers-reduced-motion)`).matches,lo?`reduced-motion`:`enabled`)}function je(){return ms()!==`enabled`}function lf(t){return t==null?``:typeof t==`string`?t:`${t}px`}function ff(t){return t!=null&&`${t}`!=`false`}function hf(t,r=/\s+/){let e=[];if(t!=null){let n=Array.isArray(t)?t:`${t}`.split(r);for(let i of n){let o=`${i}`.trim();o&&e.push(o)}}return e}var Z=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(Z||{});var qn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Z.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var mo=ke({passive:!0,capture:!0});var Qn=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,mo)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,mo)))}_delegateEventHandler=r=>{let e=J(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}};var ut={enterDuration:225,exitDuration:150};var fs=800;var fo=ke({passive:!0,capture:!0});var ho=[`mousedown`,`touchstart`];var po=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var hs=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=qE({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})();var lt=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qn;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=ie(n)),o&&o.get(le).load(hs)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=G(G({},ut),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||ps(r,e,i),s=r-i.left,d=e-i.top,l=o.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${s-a}px`,u.style.top=`${d-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),S=f.transitionProperty,T=f.transitionDuration,R=S===`none`||T===`0s`||T===`0s, 0s`||i.width===0&&i.height===0,F=new qn(this,u,n,R);u.style.transform=`scale3d(1, 1, 1)`,F.state=Z.FADING_IN,n.persistent||(this._mostRecentTransientRipple=F);let A=null;return!R&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let q=()=>{A&&(A.fallbackTimer=null),clearTimeout(v),this._finishRippleTransition(F)},p=()=>this._destroyRipple(F),v=setTimeout(p,l+100);u.addEventListener(`transitionend`,q),u.addEventListener(`transitioncancel`,p),A={onTransitionEnd:q,onTransitionCancel:p,fallbackTimer:v}}),this._activeRipples.set(F,A),(R||!l)&&this._finishRippleTransition(F),F}fadeOutRipple(r){if(r.state===Z.FADING_OUT||r.state===Z.HIDDEN)return;let e=r.element,n=G(G({},ut),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,r.state=Z.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=ie(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ho.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type===`mousedown`?this._onMousedown(r):r.type===`touchstart`?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{po.forEach(e=>{this._triggerElement.addEventListener(e,this,fo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===Z.FADING_IN?this._startFadeOutTransition(r):r.state===Z.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=Z.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=Z.HIDDEN,e!==null&&(r.element.removeEventListener(`transitionend`,e.onTransitionEnd),r.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=ot(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fs;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!at(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===Z.VISIBLE||r.config.terminateOnPointerUp&&r.state===Z.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(ho.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(po.forEach(e=>r.removeEventListener(e,this,fo)),this._pointerUpEventsRegistered=!1))}};function ps(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var er=new A(`mat-ripple-global-options`);var Tf=(()=>{class t{_elementRef=T(Mr);_animationsDisabled=je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T(Re$1),n=T(L),i=T(er,{optional:!0}),o=T(Ee);this._globalOptions=i||{},this._rippleRenderer=new lt(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:G(G(G({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,G(G({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,G(G({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||t)};static ɵdir=ZE({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&mh(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var gs={capture:!0};var bs=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var tr=`mat-ripple-loader-uninitialized`;var nr=`mat-ripple-loader-class-name`;var go=`mat-ripple-loader-centered`;var on=`mat-ripple-loader-disabled`;var bo=(()=>{class t{_document=T(dr);_animationsDisabled=je();_globalRippleOptions=T(er,{optional:!0});_platform=T(L);_ngZone=T(Re$1);_injector=T(Ee);_eventCleanups;_hosts=new Map;constructor(){let e=T(br).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>bs.map(n=>e.listen(this._document,n,this._onInteraction,gs)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(tr,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(nr))&&e.setAttribute(nr,n.className||``),n.centered&&e.setAttribute(go,``),n.disabled&&e.setAttribute(on,``)}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(on,``):e.removeAttribute(on)}_onInteraction=e=>{let n=J(e);if(n instanceof HTMLElement){let i=n.closest(`[${tr}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(nr)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ut.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ut.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(on),rippleConfig:{centered:e.hasAttribute(go),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},d=new lt(s,this._ngZone,n,this._platform,this._injector),l=!s.rippleDisabled;l&&d.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:d,hasSetUpEvents:l}),e.removeAttribute(tr)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var vo=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=qE({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();var vs=[`*`,[[``,`progressIndicator`,``]]];var ys=[`*`,`[progressIndicator]`];function _s(t,r){t&1&&(Xc(0,`div`,1),PD(1,1),el())}var Ds=new A(`MAT_BUTTON_CONFIG`);function yo(t){return t==null?void 0:qj(t)}var rr=(()=>{class t{_elementRef=T(Mr);_ngZone=T(Re$1);_animationsDisabled=je();_config=T(Ds,{optional:!0});_focusMonitor=T(Kt);_cleanupClick;_renderer=T(Xa$1);_rippleLoader=T(bo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Fj(!1,{transform:Uj});constructor(){T(le).load(vo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||t)};static ɵdir=ZE({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,i){n&2&&(Jp(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),JD(i.color?`mat-`+i.color:``),mh(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Uj],disabled:[2,`disabled`,`disabled`,Uj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,yo],_tabindex:[2,`tabindex`,`_tabindex`,yo],showProgress:[1,`showProgress`]}})}return t})();var Es=(()=>{class t extends rr{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||t)};static ɵcmp=qE({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[qp],ngContentSelectors:ys,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(LD(vs),th(0,`span`,0),PD(1),gD(2,_s,2,0,`div`,1),th(3,`span`,2)(4,`span`,3)),n&2&&(fI(2),mD(i.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return t})();var Ss=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T(dr)});var ws=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function _o(t){let r=t?.toLowerCase()||``;return r===`auto`&&typeof navigator<`u`&&navigator?.language?ws.test(navigator.language)?`rtl`:`ltr`:r===`rtl`?`rtl`:`ltr`}var As=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Yo$1(`ltr`);change=new Ge;constructor(){let e=T(Ss,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(_o(n||i||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr({token:t,factory:t.ɵfac})}return t})();var an=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({})}return t})();var Do=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({imports:[an]})}return t})();var Ns=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Cs=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Ts(t,r){t&1&&(Xc(0,`div`,2),PD(1,3),el())}var Eo=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var ah=(()=>{class t extends rr{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=Is(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Eo.get(this._appearance):null,o=Eo.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=qE({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[qp],ngContentSelectors:Cs,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(LD(Ns),th(0,`span`,0),PD(1),Xc(2,`span`,1),PD(3,1),el(),PD(4,2),gD(5,Ts,2,0,`div`,2),th(6,`span`,3)(7,`span`,4)),n&2&&(mh(`mdc-button__ripple`,!i._isFab)(`mdc-fab__ripple`,i._isFab),fI(5),mD(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function Is(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var sh=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=GE({type:t});static ɵinj=uu({imports:[Do,an]})}return t})();export{ki as $,Zm as A,dt as B,Vn as C,Ym as D,Xt as E,as as F,hf as G,er as H,at as I,is as J,ie as K,bo as L,Zo as M,ah as N,Yn as O,an as P,jn as Q,cd as R,Ua as S,Wo as T,fa as U,eo as V,ff as W,je as X,ja as Y,jm as Z,Kt as _,Ba as a,ot as at,Ri as b,Es as c,se as ct,Ha as d,te as dt,le as et,J as f,vo as ft,Kr as g,Kn as h,At as i,of as it,Zn as j,Zi as k,Fn as l,sh as lt,Jt as m,zu as mt,$l as n,lt as nt,Bn as o,qi as ot,Jm as p,zn as pt,io as q,As as r,ms as rt,Do as s,qt as st,$a as t,lf as tt,Gn as u,ss as ut,L as v,Vo as w,Tf as x,Qm as y,di as z};