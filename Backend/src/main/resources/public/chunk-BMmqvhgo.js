import{$ as Kg,$r as wc$1,$t as Wj,A as Gj,Ar as qg,At as Re$1,B as Hv,Bn as eh$1,Bt as Ty,C as Fh$1,Ct as Pu$1,D as G,Dn as ae$1,Dr as pe,Er as ol$1,Et as Qg,F as HD,Fn as cw,Fr as rd$1,Gr as tn$1,Gt as Um$1,H as Ig$1,Hn as em$1,Ht as Ue,I as Hg,In as dI,Ir as rh$1,It as T,Jn as gh$1,Jt as VD,K as Jc$1,Kn as gD,Kt as Up$1,L as Hj,Ln as dh$1,Lr as rl$1,Lt as Ta$1,Mr as qm$1,N as Gt$1,Nn as ch$1,Nt as Ro$1,O as Ge,P as Gy,Pn as cv,Pr as qy,Pt as SD,Qr as vw,Rn as dr$1,Rr as rn$1,S as Fg$1,Sr as nh$1,St as Pp$1,T as Fn$1,Tn as _w,Tr as oe,Tt as QE,Vn as el$1,Vr as ss$1,Vt as UE,Wn as fe,Wt as Uj,X as KD,Xn as hD,Y as Jp$1,Yn as gi,Yr as us$1,Z as KE,Zn as hh$1,Zt as WE,_ as Dg$1,_n as Zg,_t as Oe,ai as xn$1,an as Xc$1,ar as jj,at as MD,b as Eu$1,bn as _,br as mt,bt as Ph$1,c as A,ci as z,cn as Xp$1,ct as Mr$1,d as Bj,dn as Yo$1,dr as ko$1,dt as Ng$1,ei as wg$1,en as Wl,er as ih$1,et as Kp$1,f as Bn$1,fr as kr$1,gn as Zc$1,gr as lu$1,gt as OD$1,h as Co$1,hn as ZE,hr as ls$1,i as $m$1,in as Xa$1,ir as jg,it as Lu$1,j as Gl,jn as br$1,jr as qj,jt as Rg$1,k as Gg,kn as bc$1,kr as qe,kt as Qu,li as zg,ln as Ye,lr as kg$1,lt as My,mn as Z,mr as lh$1,mt as Nr$1,n as $i$1,ni as wp$1,nn as Wy$1,nr as j,nt as Lg$1,oi as xw,on as Xg,p as CD,pn as Ys,pr as ky,pt as Nn$1,q as Jg,qn as gc$1,qr as uh$1,qt as Uy,r as $j,ri as wr$1,rr as jD,s as $y,sn as Xo$1,sr as kD$1,st as Mi$1,t as $g,ti as wh$1,tn as Wp$1,tr as iy,tt as LD,u as Bi$1,un as Yg,ut as N,vn as Zt$1,vr as mg$1,w as Fj,wn as _n,wr as od$1,wt as Q,x as FD,xn as _e,xr as nd$1,xt as Pj,y as Ee$1,yn as Zu$1,yr as mi,yt as Pg$1,z as Hn$1,zr as rs$1}from"./chunk-CMzlWkMW.js";var Aa=null;function ke(){return Aa}function to(t){Aa??=t}var yn=class{};var Gt=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:()=>T(Ra),providedIn:`platform`})}return t})();var Ra=(()=>{class t extends Gt{_location;_history;_doc=T(dr$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ke().getBaseHref(this._doc)}onPopState(e){let n=ke().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=ke().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function Oa(t,i){return t?i?t.endsWith(`/`)?i.startsWith(`/`)?t+i.slice(1):t+i:i.startsWith(`/`)?t+i:`${t}/${i}`:t:i}function Fa(t){let i=t.search(/#|\?|$/);return t[i-1]===`/`?t.slice(0,i-1)+t.slice(i):t}function gt(t){return t&&t[0]!==`?`?`?${t}`:t}var Si=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:()=>T(_u),providedIn:`root`})}return t})();var gu=new A(``);var _u=(()=>{class t extends Si{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??T(dr$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Oa(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+gt(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+gt(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||t)(Oe(Gt),Oe(gu,8))};static ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Di=(()=>{class t{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=yu(Fa(Ta(n))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+gt(n))}normalize(e){return t.stripTrailingSlash(vu(this._basePath,Ta(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,r=null){this._locationStrategy.pushState(r,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(n)),r)}replaceState(e,n=``,r=null){this._locationStrategy.replaceState(r,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=gt;static joinWithSlash=Oa;static stripTrailingSlash=Fa;static ɵfac=function(n){return new(n||t)(Oe(Si))};static ɵprov=ae$1({token:t,factory:()=>bu(),providedIn:`root`})}return t})();function bu(){return new Di(Oe(Si))}function vu(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:i}function Ta(t){return t.replace(/\/index\.html$/,``)}function yu(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var be=(function(t){return t[t.Format=0]=`Format`,t[t.Standalone=1]=`Standalone`,t})(be||{});var $=(function(t){return t[t.Narrow=0]=`Narrow`,t[t.Abbreviated=1]=`Abbreviated`,t[t.Wide=2]=`Wide`,t[t.Short=3]=`Short`,t})($||{});var Re=(function(t){return t[t.Short=0]=`Short`,t[t.Medium=1]=`Medium`,t[t.Long=2]=`Long`,t[t.Full=3]=`Full`,t})(Re||{});var ct={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ka(t){return SD(t)[gc$1.LocaleId]}function Pa(t,i,e){let n=SD(t);return Pe(Pe([n[gc$1.DayPeriodsFormat],n[gc$1.DayPeriodsStandalone]],i),e)}function La(t,i,e){let n=SD(t);return Pe(Pe([n[gc$1.DaysFormat],n[gc$1.DaysStandalone]],i),e)}function Va(t,i,e){let n=SD(t);return Pe(Pe([n[gc$1.MonthsFormat],n[gc$1.MonthsStandalone]],i),e)}function Ba(t,i){let n=SD(t)[gc$1.Eras];return Pe(n,i)}function Sn(t,i){return Pe(SD(t)[gc$1.DateFormat],i)}function Dn(t,i){return Pe(SD(t)[gc$1.TimeFormat],i)}function Cn(t,i){let n=SD(t)[gc$1.DateTimeFormat];return Pe(n,i)}function wn(t,i){let e=SD(t),n=e[gc$1.NumberSymbols][i];if(typeof n>`u`){if(i===ct.CurrencyDecimal)return e[gc$1.NumberSymbols][ct.Decimal];if(i===ct.CurrencyGroup)return e[gc$1.NumberSymbols][ct.Group]}return n}function ja(t){if(!t[gc$1.ExtraData])throw new N(2303,!1)}function za(t){let i=SD(t);return ja(i),(i[gc$1.ExtraData][2]||[]).map(n=>typeof n==`string`?no(n):[no(n[0]),no(n[1])])}function Ua(t,i,e){let n=SD(t);ja(n);return Pe(Pe([n[gc$1.ExtraData][0],n[gc$1.ExtraData][1]],i)||[],e)||[]}function Pe(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<`u`)return t[e];throw new N(2304,!1)}function no(t){let[i,e]=t.split(`:`);return{hours:+i,minutes:+e}}var Du=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var Ci=Object.create(null);var Cu=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var wu=256;function Ha(t,i,e,n){let r=Iu(t);Eu(i),i=lt(e,i)||i;let s=[],l;for(;i;)if(l=Cu.exec(i),l){s=s.concat(l.slice(1));let d=s.pop();if(!d)break;i=d}else{s.push(i);break}let c=r.getTimezoneOffset();n&&(c=Ga(n,c),r=Ou(r,n));let u=``;return s.forEach(d=>{let h=Fu(d);u+=h?h(r,e,c):d===`''`?`'`:d.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),u}function Eu(t){if(t.length>wu)throw new N(2300,!1)}function Mi(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function lt(t,i){let e=ka(t);if(Ci[e]??=Object.create(null),Ci[e][i])return Ci[e][i];let n=``;switch(i){case`shortDate`:n=Sn(t,Re.Short);break;case`mediumDate`:n=Sn(t,Re.Medium);break;case`longDate`:n=Sn(t,Re.Long);break;case`fullDate`:n=Sn(t,Re.Full);break;case`shortTime`:n=Dn(t,Re.Short);break;case`mediumTime`:n=Dn(t,Re.Medium);break;case`longTime`:n=Dn(t,Re.Long);break;case`fullTime`:n=Dn(t,Re.Full);break;case`short`:let r=lt(t,`shortTime`),o=lt(t,`shortDate`);n=wi(Cn(t,Re.Short),[r,o]);break;case`medium`:let s=lt(t,`mediumTime`),l=lt(t,`mediumDate`);n=wi(Cn(t,Re.Medium),[s,l]);break;case`long`:let c=lt(t,`longTime`),u=lt(t,`longDate`);n=wi(Cn(t,Re.Long),[c,u]);break;case`full`:let d=lt(t,`fullTime`),h=lt(t,`fullDate`);n=wi(Cn(t,Re.Full),[d,h]);break}return n&&(Ci[e][i]=n),n}function wi(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return Object.hasOwn(i,n)?i[n]:e})),t}function He(t,i,e=`-`,n,r){let o=``;(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<i;)s=`0`+s;return n&&(s=s.slice(s.length-i)),o+s}function xu(t,i){return He(t,3).substring(0,i)}function de(t,i,e=0,n=!1,r=!1){return function(o,s){let l=Nu(t,o);if((e>0||l>-e)&&(l+=e),t===3)l===0&&e===-12&&(l=12);else if(t===6)return xu(l,i);let c=wn(s,ct.MinusSign);return He(l,i,c,n,r)}}function Nu(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new N(2301,!1)}}function X(t,i,e=be.Format,n=!1){return function(r,o){return Mu(r,o,t,i,e,n)}}function Mu(t,i,e,n,r,o){switch(e){case 2:return Va(i,r,n)[t.getMonth()];case 1:return La(i,r,n)[t.getDay()];case 0:let s=t.getHours(),l=t.getMinutes();if(o){let u=za(i),d=Ua(i,r,n),h=u.findIndex(y=>{if(Array.isArray(y)){let[N,T]=y,P=s>=N.hours&&l>=N.minutes,Y=s<T.hours||s===T.hours&&l<T.minutes;if(N.hours<T.hours){if(P&&Y)return!0}else if(P||Y)return!0}else if(y.hours===s&&y.minutes===l)return!0;return!1});if(h!==-1)return d[h]}return Pa(i,r,n)[s<12?0:1];case 3:return Ba(i,n)[t.getFullYear()<=0?0:1];default:throw new N(2302,!1)}}function Ei(t){return function(i,e,n){let r=-1*n,o=wn(e,ct.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?`+`:``)+He(s,2,o)+He(Math.abs(r%60),2,o);case 1:return`GMT`+(r>=0?`+`:``)+He(s,1,o);case 2:return`GMT`+(r>=0?`+`:``)+He(s,2,o)+`:`+He(Math.abs(r%60),2,o);case 3:return n===0?`Z`:(r>=0?`+`:``)+He(s,2,o)+`:`+He(Math.abs(r%60),2,o);default:throw new N(2310,!1)}}}var Au=0;var Ni=4;function Ru(t){let i=Mi(t,Au,1).getDay();return Mi(t,0,1+(i<=Ni?Ni:Ni+7)-i)}function $a(t){let i=t.getDay(),e=i===0?-3:Ni-i;return Mi(t.getFullYear(),t.getMonth(),t.getDate()+e)}function io(t,i=!1){return function(e,n){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=$a(e),s=Ru(o.getFullYear()),l=o.getTime()-s.getTime();r=1+Math.round(l/6048e5)}return He(r,t,wn(n,ct.MinusSign))}}function xi(t,i=!1){return function(e,n){return He($a(e).getFullYear(),t,wn(n,ct.MinusSign),i)}}var ro=Object.create(null);function Fu(t){if(ro[t])return ro[t];let i;switch(t){case`G`:case`GG`:case`GGG`:i=X(3,$.Abbreviated);break;case`GGGG`:i=X(3,$.Wide);break;case`GGGGG`:i=X(3,$.Narrow);break;case`y`:i=de(0,1,0,!1,!0);break;case`yy`:i=de(0,2,0,!0,!0);break;case`yyy`:i=de(0,3,0,!1,!0);break;case`yyyy`:i=de(0,4,0,!1,!0);break;case`Y`:i=xi(1);break;case`YY`:i=xi(2,!0);break;case`YYY`:i=xi(3);break;case`YYYY`:i=xi(4);break;case`M`:case`L`:i=de(1,1,1);break;case`MM`:case`LL`:i=de(1,2,1);break;case`MMM`:i=X(2,$.Abbreviated);break;case`MMMM`:i=X(2,$.Wide);break;case`MMMMM`:i=X(2,$.Narrow);break;case`LLL`:i=X(2,$.Abbreviated,be.Standalone);break;case`LLLL`:i=X(2,$.Wide,be.Standalone);break;case`LLLLL`:i=X(2,$.Narrow,be.Standalone);break;case`w`:i=io(1);break;case`ww`:i=io(2);break;case`W`:i=io(1,!0);break;case`d`:i=de(2,1);break;case`dd`:i=de(2,2);break;case`c`:case`cc`:i=de(7,1);break;case`ccc`:i=X(1,$.Abbreviated,be.Standalone);break;case`cccc`:i=X(1,$.Wide,be.Standalone);break;case`ccccc`:i=X(1,$.Narrow,be.Standalone);break;case`cccccc`:i=X(1,$.Short,be.Standalone);break;case`E`:case`EE`:case`EEE`:i=X(1,$.Abbreviated);break;case`EEEE`:i=X(1,$.Wide);break;case`EEEEE`:i=X(1,$.Narrow);break;case`EEEEEE`:i=X(1,$.Short);break;case`a`:case`aa`:case`aaa`:i=X(0,$.Abbreviated);break;case`aaaa`:i=X(0,$.Wide);break;case`aaaaa`:i=X(0,$.Narrow);break;case`b`:case`bb`:case`bbb`:i=X(0,$.Abbreviated,be.Standalone,!0);break;case`bbbb`:i=X(0,$.Wide,be.Standalone,!0);break;case`bbbbb`:i=X(0,$.Narrow,be.Standalone,!0);break;case`B`:case`BB`:case`BBB`:i=X(0,$.Abbreviated,be.Format,!0);break;case`BBBB`:i=X(0,$.Wide,be.Format,!0);break;case`BBBBB`:i=X(0,$.Narrow,be.Format,!0);break;case`h`:i=de(3,1,-12);break;case`hh`:i=de(3,2,-12);break;case`H`:i=de(3,1);break;case`HH`:i=de(3,2);break;case`m`:i=de(4,1);break;case`mm`:i=de(4,2);break;case`s`:i=de(5,1);break;case`ss`:i=de(5,2);break;case`S`:i=de(6,1);break;case`SS`:i=de(6,2);break;case`SSS`:i=de(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:i=Ei(0);break;case`ZZZZZ`:i=Ei(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:i=Ei(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:i=Ei(2);break;default:return null}return ro[t]=i,i}function Ga(t,i){t=t.replace(/:/g,``);let e=Date.parse(`Jan 01, 1970 00:00:00 `+t)/6e4;return isNaN(e)?i:e}function Tu(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function Ou(t,i,e){let r=t.getTimezoneOffset();return Tu(t,-1*(Ga(i,r)-r))}function Iu(t){if(Ia(t))return t;if(typeof t==`number`&&!isNaN(t))return new Date(t);if(typeof t==`string`){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,s=1]=t.split(`-`).map(l=>+l);return Mi(r,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Du))return ku(n)}let i=new Date(t);if(!Ia(i))throw new N(2311,!1);return i}function ku(t){let i=new Date(0),e=0,n=0,r=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),r.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,l=Number(t[5]||0)-n,c=Number(t[6]||0),u=Math.floor(parseFloat(`0.`+(t[7]||0))*1e3);return o.call(i,s,l,c,u),i}function Ia(t){return t instanceof Date&&!isNaN(t.valueOf())}var En=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=T(Ee$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static ɵfac=function(n){return new(n||t)(kr$1(Bi$1))};static ɵdir=QE({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[iy]})}return t})();function Wa(t,i){return new N(2100,!1)}var oo=class{createSubscription(i,e,n){return Ph$1(()=>i.subscribe({next:e,error:n}))}dispose(i){Ph$1(()=>i.unsubscribe())}};var so=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}};var Pu=new so;var Lu=new oo;var Vu=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=T(mt);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Zc$1(e))return Pu;if(Pp$1(e))return Lu;throw Wa(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(n){return new(n||t)(kr$1(Hj,16))};static ɵpipe=ZE({name:`async`,type:t,pure:!1})}return t})();var Bu=`mediumDate`;var Ya=new A(``);var Xa=new A(``);var ju=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,o){if(e==null||e===``||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Bu,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ha(e,s,o||this.locale,l)}catch(s){throw Wa(t,s.message)}}static ɵfac=function(n){return new(n||t)(kr$1(ol$1,16),kr$1(Ya,24),kr$1(Xa,24))};static ɵpipe=ZE({name:`date`,type:t,pure:!0})}return t})();var qa=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();function xn(t,i){i=encodeURIComponent(i);for(let e of t.split(`;`)){let n=e.indexOf(`=`),[r,o]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(r.trim()!==i)continue;let s=o;try{s=decodeURIComponent(o)}catch{}return s.length>1&&s[0]===`"`&&s[s.length-1]===`"`&&(s=s.slice(1,-1)),s}return null}var zu=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var ao=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Oe(zu),r},providedIn:`root`})}return t})();function fb(t,i,e){return MD(t,i,e)}var lo=`browser`;function Za(t){return t===lo}var Nn=class{_doc;constructor(i){this._doc=i}manager};var Ri=(()=>{class t extends Nn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static ɵfac=function(n){return new(n||t)(Oe(dr$1))};static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();var Oi=new A(``);var ho=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Ri));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Ri);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||t)(Oe(Oi),Oe(Re$1))};static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();var co=`ng-app-id`;function Qa(t){for(let i of t)i.remove()}function Ja(t,i){let e=i.createElement(`style`);return e.textContent=t,e}function $u(t,i,e,n){let r=t.head?.querySelectorAll(`style[${co}="${i}"],link[${co}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(co),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function fo(t,i){let e=i.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var mo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,$u(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Ja);n?.forEach(r=>this.addUsage(r,this.external,fo))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Qa(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Qa(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Ja(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,fo(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of n.elements)o.parentNode===e?o.remove():r.push(o);n.elements=r}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||t)(Oe(dr$1),Oe(nd$1),Oe(qm$1,8),Oe($m$1))};static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();var uo={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var po=/%COMP%/g;var tl=`%COMP%`;var Gu=`_nghost-${tl}`;var Wu=`_ngcontent-${tl}`;var Yu=!0;var Xu=new A(``,{factory:()=>Yu});var qu=new A(``);function Ku(t){return Wu.replace(po,t)}function Zu(t){return Gu.replace(po,t)}function nl(t,i){return i.map(e=>e.replace(po,t))}var go=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,r,o,s,l,c=null,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=l,this.nonce=c,this.tracingService=u,this.cssVarNamespace=d??``,this.defaultRenderer=new Mn(e,s,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Ti?r.applyToHost(e):r instanceof An&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.tracingService;switch(n.encapsulation){case Gt$1.Emulated:o=new Ti(c,u,n,this.appId,d,s,l,h,this.cssVarNamespace);break;case Gt$1.ShadowDom:return new Fi(c,e,n,s,l,this.nonce,h,this.cssVarNamespace,u);case Gt$1.ExperimentalIsolatedShadowDom:return new Fi(c,e,n,s,l,this.nonce,h,this.cssVarNamespace);default:o=new An(c,u,n,d,s,l,h,this.cssVarNamespace);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||t)(Oe(ho),Oe(wp$1),Oe(nd$1),Oe(Xu),Oe(dr$1),Oe(Re$1),Oe(qm$1),Oe(Zt$1,8),Oe(qu,8))};static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();var Mn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,o=``){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(uo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(el(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){if(i){let r=el(i)?i.content:i;if(n!=null&&n.parentNode!==r)throw new N(-5106,!1);r.insertBefore(e,n)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i==`string`?this.doc.querySelector(i):i;if(!n)throw new N(-5104,!1);return e||(n.textContent=``),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+`:`+e;let o=uo[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=uo[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||r&(mi.DashCase|mi.Important)?i.style.setProperty(e,n,r&mi.Important?`important`:``):i.style[e]=n}removeStyle(i,e,n){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||n&mi.DashCase?i.style.removeProperty(e):i.style[e]=``}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i==`string`&&(i=ke().getGlobalEventTarget(this.doc,i),!i))throw new N(-5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e===`__ngUnwrap__`)return i;i(e)===!1&&e.preventDefault()}}};function el(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var Fi=class extends Mn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,s,l,c,u){super(i,r,o,l,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=nl(n.id,d).map(y=>y.replace(/%NS%/g,c));for(let y of d){let N=document.createElement(`style`);s&&N.setAttribute(`nonce`,s),N.textContent=y,this.shadowRoot.appendChild(N)}let h=n.getExternalStyles?.();if(h)for(let y of h){let N=fo(y,r);s&&N.setAttribute(`nonce`,s),this.shadowRoot.appendChild(N)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var An=class extends Mn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,s,l,c,u){super(i,o,s,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles,h=u?nl(u,d):d;this.styles=h.map(y=>y.replace(/%NS%/g,c)),this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nn$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Ti=class extends An{contentAttr;hostAttr;constructor(i,e,n,r,o,s,l,c,u){let d=r+`-`+n.id;super(i,e,n,o,s,l,c,u,d),this.contentAttr=Ku(d),this.hostAttr=Zu(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,``)}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,``),n}};var Ii=class t extends yn{supportsDOMEvents=!0;static makeCurrent(){to(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e===`window`?window:e===`document`?i:e===`body`?i.body:null}getBaseHref(i){let e=Ju();return e==null?null:ef(e)}resetBaseElement(){Rn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return xn(document.cookie,i)}};var Rn=null;function Ju(){return Rn=Rn||document.head.querySelector(`base`),Rn?Rn.getAttribute(`href`):null}function ef(t){return new URL(t,document.baseURI).pathname}var il=[`alt`,`control`,`meta`,`shift`];var tf={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var nf={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var rl=(()=>{class t extends Nn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let s=t.parseEventName(n),l=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ke().onAndCancel(e,s.domEventName,l,o))}static parseEventName(e){let n=e.toLowerCase().split(`.`),r=n.shift();if(n.length===0||!(r===`keydown`||r===`keyup`))return null;let o=t._normalizeKey(n.pop()),s=``,l=n.indexOf(`code`);if(l>-1&&(n.splice(l,1),s=`code.`),il.forEach(u=>{let d=n.indexOf(u);d>-1&&(n.splice(d,1),s+=u+`.`)}),s+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,n){let r=tf[e.key]||e.key,o=``;return n.indexOf(`code.`)>-1&&(r=e.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),il.forEach(s=>{if(s!==r){let l=nf[s];l(e)&&(o+=s+`.`)}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||t)(Oe(dr$1))};static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();async function rf(t,i,e){return Bj(G({rootComponent:t},of(i,e)))}function of(t,i){return{platformRef:i?.platformRef,appProviders:[...df,...t?.providers??[]],platformProviders:cf}}function sf(){Ii.makeCurrent()}function af(){return new Ye}function lf(){return ky(document),document}var cf=[{provide:$m$1,useValue:lo},{provide:rd$1,useValue:sf,multi:!0},{provide:dr$1,useFactory:lf}];var df=[{provide:Ys,useValue:`root`},{provide:Ye,useFactory:af},{provide:Oi,useClass:Ri,multi:!0},{provide:Oi,useClass:rl,multi:!0},go,{provide:wp$1,useClass:mo},{provide:mo,useExisting:wp$1},ho,{provide:br$1,useExisting:go},[]];var et=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i==`string`?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<`u`&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:`a`})}set(i,e){return this.clone({name:i,value:e,op:`s`})}delete(i,e){return this.clone({name:i,value:e,op:`d`})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,n]of i.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case`a`:case`s`:let n=i.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op===`a`?(this.headers.get(e)||[]).slice():[];r.push(...n),this.headers.set(e,r);break;case`d`:let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(c=>s.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Pi=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};var Li=class{encodeKey(i){return ol(i)}encodeValue(i){return ol(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function uf(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(r=>{let o=r.indexOf(`=`),[s,l]=o==-1?[i.decodeKey(r),``]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(l),e.set(s,c)}),e}var ff=/%(\d[a-f0-9])/gi;var hf={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function ol(t){return encodeURIComponent(t).replace(ff,(i,e)=>hf[e]??i)}function ki(t){return`${t}`}var dt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Li,i.fromString){if(i.fromObject)throw new N(2805,!1);this.map=uf(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(ki):[ki(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:`a`})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:`a`})}):e.push({param:n,value:r,op:`a`})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:`s`})}delete(i,e){return this.clone({param:i,value:e,op:`d`})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(i=>i!==``).join(`&`)}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case`a`:case`s`:let e=i.op===`a`?(this.map.get(i.param)||[]).slice():[];e.push(ki(i.value)),this.map.set(i.param,e);break;case`d`:if(i.value!==void 0){let n=(this.map.get(i.param)||[]).slice(),r=n.indexOf(ki(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function mf(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function sl(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function al(t){return typeof Blob<`u`&&t instanceof Blob}function ll(t){return typeof FormData<`u`&&t instanceof FormData}function pf(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var Fn=`Content-Type`;var Vi=`Accept`;var ul=`text/plain`;var fl=`application/json`;var hl=`${fl}, ${ul}, */*`;var Wt=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(mf(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new et,this.context??=new Pi,!this.params)this.params=new dt,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e,c=``,u=e.indexOf(`#`);u!==-1&&(c=e.substring(u),l=e.substring(0,u));let d=l.indexOf(`?`),h=d===-1?`?`:d<l.length-1?`&`:``;this.urlWithParams=l+h+s+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||sl(this.body)||al(this.body)||ll(this.body)||pf(this.body)?this.body:this.body instanceof dt?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ll(this.body)?null:al(this.body)?this.body.type||null:sl(this.body)?null:typeof this.body==`string`?ul:this.body instanceof dt?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?fl:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,l=i.cache||this.cache,c=i.mode||this.mode,u=i.redirect||this.redirect,d=i.credentials||this.credentials,h=i.referrer??this.referrer,y=i.integrity||this.integrity,N=i.referrerPolicy||this.referrerPolicy,T=i.transferCache??this.transferCache,P=i.timeout??this.timeout,Y=i.body!==void 0?i.body:this.body,Ge=i.withCredentials??this.withCredentials,O=i.reportProgress??this.reportProgress,V=i.reportUploadProgress??this.reportUploadProgress,xe=i.reportDownloadProgress??this.reportDownloadProgress,je=i.headers||this.headers,le=i.params||this.params,it=i.context??this.context;return i.setHeaders!==void 0&&(je=Object.keys(i.setHeaders).reduce((ht,We)=>ht.set(We,i.setHeaders[We]),je)),i.setParams&&(le=Object.keys(i.setParams).reduce((ht,We)=>ht.set(We,i.setParams[We]),le)),new t(e,n,Y,{params:le,headers:je,context:it,reportProgress:O,reportUploadProgress:V,reportDownloadProgress:xe,responseType:r,withCredentials:Ge,transferCache:T,keepalive:o,cache:l,priority:s,timeout:P,mode:c,redirect:u,credentials:d,referrer:h,integrity:y,referrerPolicy:N})}};var Je=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(Je||{});var Yt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n=`OK`){this.headers=i.headers||new et,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}};var Tn=class t extends Yt{constructor(i={}){super(i)}type=Je.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}};var Xt=class t extends Yt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Je.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}};var Qe=class extends Yt{name=`HttpErrorResponse`;message;error;ok=!1;constructor(i){super(i,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||`(unknown url)`}`:this.message=`Http failure response for ${i.url||`(unknown url)`}: ${i.status} ${i.statusText}`,this.error=i.error||null}};var ml=200;var gf=204;var _f=/^\)\]\}',?\n/;var pl=new A(``,{factory:()=>null});var Bi=(()=>{class t{fetchImpl=T(bo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(Re$1);destroyRef=T(pe);maxResponseSize=T(pl);handle(e){return new _(n=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Je.Response&&(o=!0),n.next(c)},error:c=>{o=!0,n.error(c)},complete:()=>{o=!0,n.complete()}};this.doRequest(e,r.signal,s).then(vo,c=>s.error(new Qe({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,n,r){let o=this.createRequestInit(e),s;try{let Y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,G({signal:n},o)));bf(Y),r.next({type:Je.Sent}),s=await Y}catch(Y){r.error(new Qe({error:Y,status:Y.status??0,statusText:Y.statusText,url:e.urlWithParams,headers:Y.headers}));return}let l=new et(s.headers),c=s.statusText,u=s.url||e.urlWithParams,d=s.status,h=null,y=e.reportProgress||e.reportDownloadProgress;if(y&&r.next(new Tn({headers:l,status:d,statusText:c,url:u})),s.body){let Y=s.headers.get(Fn)??``,Ge=s.headers.get(`content-length`),O=Ge!==null?Number(Ge):NaN;this.maxResponseSize!==null&&Number.isFinite(O)&&O>this.maxResponseSize&&(await s.body.cancel(),cl(this.maxResponseSize));let V=[],xe=s.body.getReader(),je=0,le,it,ht=typeof Zone<`u`&&Zone.current,We=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await xe.cancel(),We=!0;break}let{done:jr,value:zr}=await xe.read();if(jr)break;if(V.push(zr),je+=zr.length,this.maxResponseSize!==null&&je>this.maxResponseSize&&(await xe.cancel(),cl(this.maxResponseSize)),y){it=e.responseType===`text`?(it??``)+(le??=dl(Y)).decode(zr,{stream:!0}):void 0;let Is=()=>r.next({type:Je.DownloadProgress,total:Number.isFinite(O)?O:void 0,loaded:je,partialText:it});ht?ht.run(Is):Is()}}}),We){r.complete();return}let pu=this.concatChunks(V,je);try{h=this.parseBody(e,pu,Y,d)}catch(jr){r.error(new Qe({error:jr,headers:new et(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=h?ml:0);let N=d>=200&&d<300,T=s.redirected,P=s.type;N?(r.next(new Xt({body:h,headers:l,status:d,statusText:c,url:u,redirected:T,responseType:P})),r.complete()):r.error(new Qe({error:h,headers:l,status:d,statusText:c,url:u,redirected:T,responseType:P}))}parseBody(e,n,r,o){switch(e.responseType){case`json`:let s=new TextDecoder().decode(n).replace(_f,``);if(s===``)return null;try{return JSON.parse(s)}catch(l){if(o<200||o>=300)return s;throw l}case`text`:return dl(r).decode(n);case`blob`:return new Blob([n],{type:r});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let n={},r;if(r=e.credentials,e.withCredentials&&(r=`include`),e.headers.forEach((o,s)=>n[o]=s.join(`,`)),e.headers.has(Vi)||(n[Vi]=hl),!e.headers.has(Fn)){let o=e.detectContentTypeHeader();o!==null&&(n[Fn]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let r=new Uint8Array(n),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var bo=class{};function vo(){}function bf(t){t.then(vo,vo)}function cl(t){throw new N(-2825,!1)}var vf=/charset=\s*["']?([^;"'\s]+)["']?/i;function dl(t){let i=t.match(vf);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var yf=new A(``,{factory:()=>!0});var Sf=`XSRF-TOKEN`;var Df=new A(``,{factory:()=>Sf});var Cf=`X-XSRF-TOKEN`;var wf=new A(``,{factory:()=>Cf});var Ef=(()=>{class t{cookieName=T(Df);doc=T(dr$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=xn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var gl=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Oe(Ef),r},providedIn:`root`})}return t})();function _l(t,i){if(!T(yf)||t.method===`GET`||t.method===`HEAD`)return i(t);try{let r=T(Gt).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return i(t)}catch{return i(t)}let e=T(gl).getToken(),n=T(wf);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function xf(t,i){return i(t)}function Nf(t,i,e){return(n,r)=>ko$1(e,()=>i(n,o=>t(o,r)))}var So=new A(``,{factory:()=>[_l]});var bl=new A(``);var vl=new A(``,{factory:()=>!0});var zi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Oe(Bi),r},providedIn:`root`})}return t})();var ji=(()=>{class t{backend;injector;chain=null;pendingTasks=T(Ta$1);contributeToStability=T(vl);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let r=this.injector.get(Ui,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(bl,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(So),...s]));this.chain=l.reduceRight((c,u)=>Nf(c,u,this.injector),xf)}let n=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ph$1(()=>n(e,o=>this.backend.handle(o))).pipe($g(r))}else return Ph$1(()=>n(e,r=>this.backend.handle(r)))}static ɵfac=function(n){return new(n||t)(Oe(zi),Oe(fe))};static ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ui=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Oe(ji),r},providedIn:`root`})}return t})();function _o(t,i){return G({body:i},t)}var yl=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Wt)o=e;else{let c;r.headers instanceof et?c=r.headers:c=new et(r.headers);let u;r.params&&(r.params instanceof dt?u=r.params:u=new dt({fromObject:r.params})),o=new Wt(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:u,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||`json`,withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=ss$1(o).pipe(Fg$1(c=>this.handler.handle(c)));if(e instanceof Wt||r.observe===`events`)return s;let l=s.pipe(Hn$1(c=>c instanceof Xt));switch(r.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return l.pipe(oe(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new N(2806,!1);return c.body}));case`blob`:return l.pipe(oe(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new N(2807,!1);return c.body}));case`text`:return l.pipe(oe(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new N(2808,!1);return c.body}));default:return l.pipe(oe(c=>c.body))}case`response`:return l;default:throw new N(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new dt().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,r={}){return this.request(`PATCH`,e,_o(r,n))}post(e,n,r={}){return this.request(`POST`,e,_o(r,n))}put(e,n,r={}){return this.request(`PUT`,e,_o(r,n))}static ɵfac=function(n){return new(n||t)(Oe(Ui))};static ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Mf=/^\)\]\}',?\n/;var yo=(()=>{class t{xhrFactory;tracingService=T(Zt$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new N(-2800,!1);let n=this.xhrFactory;return ss$1(null).pipe(Dg$1(()=>new _(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((O,V)=>s.setRequestHeader(O,V.join(`,`))),e.headers.has(Vi)||s.setRequestHeader(Vi,hl),!e.headers.has(Fn)){let O=e.detectContentTypeHeader();O!==null&&s.setRequestHeader(Fn,O)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();s.responseType=O!==`json`?O:`text`}let l=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let O=s.statusText||`OK`,V=new et(s.getAllResponseHeaders()),xe=s.responseURL||e.url;return c=new Tn({headers:V,status:s.status,statusText:O,url:xe}),c},d=this.maybePropagateTrace(()=>{let{headers:O,status:V,statusText:xe,url:je}=u(),le=null;V!==gf&&(le=typeof s.response>`u`?s.responseText:s.response),V===0&&(V=le?ml:0);let it=V>=200&&V<300;if(e.responseType===`json`&&typeof le==`string`){let ht=le;le=le.replace(Mf,``);try{le=le!==``?JSON.parse(le):null}catch(We){le=ht,it&&(it=!1,le={error:We,text:le})}}it?(o.next(new Xt({body:le,headers:O,status:V,statusText:xe,url:je||void 0})),o.complete()):o.error(new Qe({error:le,headers:O,status:V,statusText:xe,url:je||void 0}))}),h=this.maybePropagateTrace(O=>{let{url:V}=u(),xe=new Qe({error:O,status:s.status||0,statusText:s.statusText||`Unknown Error`,url:V||void 0});o.error(xe)}),y=h;e.timeout&&(y=this.maybePropagateTrace(O=>{let{url:V}=u(),xe=new Qe({error:new DOMException(`Request timed out`,`TimeoutError`),status:s.status||0,statusText:s.statusText||`Request timeout`,url:V||void 0});o.error(xe)}));let N=!1,T=this.maybePropagateTrace(O=>{N||(o.next(u()),N=!0);let V={type:Je.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(V.total=O.total),e.responseType===`text`&&s.responseText&&(V.partialText=s.responseText),o.next(V)}),P=this.maybePropagateTrace(O=>{let V={type:Je.UploadProgress,loaded:O.loaded};O.lengthComputable&&(V.total=O.total),o.next(V)});s.addEventListener(`load`,d),s.addEventListener(`error`,h),s.addEventListener(`timeout`,y),s.addEventListener(`abort`,h);let Y=e.reportProgress||e.reportUploadProgress,Ge=e.reportProgress||e.reportDownloadProgress;return Ge&&s.addEventListener(`progress`,T),Y&&l!==null&&s.upload&&s.upload.addEventListener(`progress`,P),s.send(l),o.next({type:Je.Sent}),()=>{s.removeEventListener(`error`,h),s.removeEventListener(`abort`,h),s.removeEventListener(`load`,d),s.removeEventListener(`timeout`,y),Ge&&s.removeEventListener(`progress`,T),Y&&l!==null&&s.upload&&s.upload.removeEventListener(`progress`,P),s.readyState!==s.DONE&&s.abort()}})))}static ɵfac=function(n){return new(n||t)(Oe(ao))};static ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Hi=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(Hi||{});function Sl(t,i){return{ɵkind:t,ɵproviders:i}}function Af(...t){let i=[yl,Bi,ji,{provide:Ui,useExisting:ji},{provide:zi,useFactory:()=>T(Bi)},{provide:So,useValue:_l,multi:!0}];for(let e of t)i.push(...e.ɵproviders);return Ro$1(i)}function Rf(t){return Sl(Hi.Interceptors,t.map(i=>({provide:So,useValue:i,multi:!0})))}function Ff(){return Sl(Hi.Xhr,[yo,{provide:zi,useExisting:yo}])}var Gv=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||t)(Oe(dr$1))};static ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Do=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$1({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Oe(Tf),r},providedIn:`root`})}return t})();var Tf=(()=>{class t extends Do{_doc=T(dr$1);sanitize(e,n){if(n==null)return null;switch(e){case Z.NONE:return n;case Z.HTML:return wc$1(n,`HTML`)?_n(n):cv(this._doc,String(n)).toString();case Z.STYLE:return wc$1(n,`Style`)?_n(n):n;case Z.SCRIPT:if(wc$1(n,`Script`))return _n(n);throw new N(5200,!1);case Z.URL:return wc$1(n,`URL`)?_n(n):bc$1(String(n));case Z.RESOURCE_URL:if(wc$1(n,`ResourceURL`))return _n(n);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return $y(e)}bypassSecurityTrustStyle(e){return Uy(e)}bypassSecurityTrustScript(e){return qy(e)}bypassSecurityTrustUrl(e){return Wy$1(e)}bypassSecurityTrustResourceUrl(e){return Gy(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function On(t){return t.buttons===0||t.detail===0}function In(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Co;function Dl(){if(Co==null){let t=typeof document<`u`?document.head:null;Co=!!(t&&(t.createShadowRoot||t.attachShadow))}return Co}function wo(t){if(Dl()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Eo(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function me(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var xo;try{xo=typeof Intl<`u`&&Intl.v8BreakIterator}catch{xo=!1}var H=(()=>{class t{_platformId=T($m$1);isBrowser=this._platformId?Za(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||xo)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var kn;function Cl(){if(kn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>kn=!0}))}finally{kn=kn||!1}return kn}function qt(t){return Cl()?t:!!t.capture}function Pn(t,i=0){return wl(t)?Number(t):arguments.length===2?i:0}function wl(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ce(t){return t instanceof Mr$1?t.nativeElement:t}var El=new A(`cdk-input-modality-detector-options`);var xl={ignoreKeys:[18,17,224,91,16]};var Nl=650;var No={passive:!0,capture:!0};var Ml=(()=>{class t{_platform=T(H);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=me(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Nl||(this._modality.next(On(e)?`keyboard`:`mouse`),this._mostRecentTarget=me(e))};_onTouchstart=e=>{if(In(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=me(e)};constructor(){let e=T(Re$1),n=T(dr$1),r=T(El,{optional:!0});if(this._options=G(G({},xl),r),this.modalityDetected=this._modality.pipe(Kg(1)),this.modalityChanged=this.modalityDetected.pipe(Ig$1()),this._platform.isBrowser){let o=T(br$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,`keydown`,this._onKeydown,No),o.listen(n,`mousedown`,this._onMousedown,No),o.listen(n,`touchstart`,this._onTouchstart,No)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Ln=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(Ln||{});var Al=new A(`cdk-focus-monitor-default-options`);var $i=qt({passive:!0,capture:!0});var Gi=(()=>{class t{_ngZone=T(Re$1);_platform=T(H);_inputModalityDetector=T(Ml);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T(dr$1);_stopInputModalityDetector=new Q;constructor(){let e=T(Al,{optional:!0});this._detectionMode=e?.detectionMode||Ln.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=me(e);for(let r=n;r;r=r.parentElement)e.type===`focus`?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Ce(e);if(!this._platform.isBrowser||r.nodeType!==1)return ss$1();let o=wo(r)||this._document,s=this._elementInfo.get(r);if(s)return n&&(s.checkChildren=!0),s.subject;let l={checkChildren:n,subject:new Q,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let n=Ce(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=Ce(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([l,c])=>this._originChanged(l,n,c)):(this._setOrigin(n),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Ln.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===Ln.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Nl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=me(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,$i),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,$i)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(wg$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,$i),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,$i),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Of=(()=>{class t{_elementRef=T(Mr$1);_focusMonitor=T(Gi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ge;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Wi=new WeakMap;var ve=(()=>{class t{_appRef;_injector=T(Ee$1);_environmentInjector=T(fe);load(e){let n=this._appRef=this._appRef||this._injector.get($i$1),r=Wi.get(n);r||(r={loaders:new Set,refs:[]},Wi.set(n,r),n.onDestroy(()=>{Wi.get(n)?.refs.forEach(o=>o.destroy()),Wi.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Wj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Kt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})();var Yi;function If(){if(Yi===void 0&&(Yi=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{Yi=t.trustedTypes.createPolicy(`angular#components`,{createHTML:i=>i})}catch(i){console.error(i)}}return Yi}function kf(t){return If()?.createHTML(t)||t}function Rl(t,i,e){t.innerHTML=kf(e.sanitize(Z.HTML,i)||``)}function Rt(t){return Array.isArray(t)?t:[t]}var Fl=new Set;var Ft;var Xi=(()=>{class t{_platform=T(H);_nonce=T(qm$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Lf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Pf(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Pf(t,i){if(!Fl.has(t))try{Ft||(Ft=document.createElement(`style`),i&&Ft.setAttribute(`nonce`,i),Ft.setAttribute(`type`,`text/css`),document.head.appendChild(Ft)),Ft.sheet&&(Ft.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),Fl.add(t))}catch(e){console.error(e)}}function Lf(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var Mo=(()=>{class t{_mediaMatcher=T(Xi);_zone=T(Re$1);_queries=new Map;_destroySubject=new Q;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Tl(Rt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let o=mg$1(Tl(Rt(e)).map(s=>this._registerQuery(s).observable));return o=rn$1(o.pipe(tn$1(1)),o.pipe(Kg(1),jg(0))),o.pipe(oe(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new _(s=>{let l=c=>this._zone.run(()=>s.next(c));return n.addListener(l),()=>{n.removeListener(l)}}).pipe(Gl(n),oe(({matches:s})=>({query:e,matches:s})),wg$1(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Tl(t){return t.map(i=>i.split(`,`)).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Vf(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Ol=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Il=(()=>{class t{_mutationObserverFactory=T(Ol);_observedElements=new Map;_ngZone=T(Re$1);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Ce(e);return new _(r=>{let s=this._observeElement(n).pipe(oe(l=>l.filter(c=>!Vf(c))),Hn$1(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{s.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new Q,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Wy=(()=>{class t{_contentObserver=T(Il);_elementRef=T(Mr$1);event=new Ge;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Pn(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(jg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,$j],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var qi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({providers:[Ol]})}return t})();var Vl=(()=>{class t{_platform=T(H);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return jf(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Bf(Xf(e));if(n&&(kl(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=kl(e);return e.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Wf(e)?!1:r===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return Yf(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Bf(t){try{return t.frameElement}catch{return null}}function jf(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function zf(t){let i=t.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function Uf(t){return $f(t)&&t.type==`hidden`}function Hf(t){return Gf(t)&&t.hasAttribute(`href`)}function $f(t){return t.nodeName.toLowerCase()==`input`}function Gf(t){return t.nodeName.toLowerCase()==`a`}function Bl(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let i=t.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function kl(t){if(!Bl(t))return null;let i=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function Wf(t){let i=t.nodeName.toLowerCase(),e=i===`input`&&t.type;return e===`text`||e===`password`||i===`select`||i===`textarea`}function Yf(t){return Uf(t)?!1:zf(t)||Hf(t)||t.hasAttribute(`contenteditable`)||Bl(t)}function Xf(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Ki=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,s){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary(`start`);return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary(`end`);return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Hv(i,{injector:this._injector})}};var jl=(()=>{class t{_checker=T(Vl);_ngZone=T(Re$1);_document=T(dr$1);_injector=T(Ee$1);constructor(){T(ve).load(Kt)}create(e,n=!1){return new Ki(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var qf=(()=>{class t{_elementRef=T(Mr$1);_focusTrapFactory=T(jl);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T(H).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Eo(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,$j],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,$j]},exportAs:[`cdkTrapFocus`],features:[iy]})}return t})();var zl=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Ul=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Kf=0;var Ro=(()=>{class t{_ngZone=T(Re$1);_defaultOptions=T(Ul,{optional:!0});_liveElement;_document=T(dr$1);_sanitizer=T(Do);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T(zl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,s;return n.length===1&&typeof n[0]==`number`?s=n[0]:[o,s]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),s==null&&r&&(s=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Rl(this._liveElement,e,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),r=this._document.createElement(`div`);for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${Kf++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<n.length;r++){let o=n[r],s=o.getAttribute(`aria-owns`);s?s.indexOf(e)===-1&&o.setAttribute(`aria-owns`,s+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var _t=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(_t||{});var Pl=`cdk-high-contrast-black-on-white`;var Ll=`cdk-high-contrast-white-on-black`;var Ao=`cdk-high-contrast-active`;var Hl=(()=>{class t{_platform=T(H);_hasCheckedHighContrastMode=!1;_document=T(dr$1);_breakpointSubscription;constructor(){this._breakpointSubscription=T(Mo).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return _t.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return _t.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return _t.BLACK_ON_WHITE}return _t.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ao,Pl,Ll),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===_t.BLACK_ON_WHITE?e.add(Ao,Pl):n===_t.WHITE_ON_BLACK&&e.add(Ao,Ll)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Zf=(()=>{class t{constructor(){T(Hl)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[qi]})}return t})();var Qf=200;var Zi=class{_letterKeyStream=new Q;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:Qf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Xg(e=>this._pressedLetters.push(e)),jg(i),Hn$1(()=>this._pressedLetters.length>0),oe(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function tt(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Zt=class{_items;_activeItemIndex=Yo$1(-1);_activeItem=Yo$1(null);_wrap=!1;_typeaheadSubscription=j.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof gi?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):Xo$1(i)&&(this._effectRef=od$1(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new Q;change=new Q;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Zi(e,{debounceInterval:typeof i==`number`?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||tt(i,`shiftKey`))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i==`number`?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return Xo$1(this._items)?this._items():this._items instanceof gi?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Vn=class extends Zt{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Oo=class extends Zt{_origin=`program`;setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Yl=new Map;var we=class t{_appId=T(nd$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!==`ng`&&(i+=this._appId);let n=Yl.get(i);return n===void 0?n=0:n++,Yl.set(i,n),`${i}${e?t._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})};var ql=` `;function Jf(t,i,e){let n=Ji(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(ql)))}function eh(t,i,e){let n=Ji(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(ql)):t.removeAttribute(i)}function Ji(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Kl=`cdk-describedby-message`;var Qi=`cdk-describedby-host`;var ko=0;var B0=(()=>{class t{_platform=T(H);_document=T(dr$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${ko++}`;constructor(){T(ve).load(Kt),this._id=T(nd$1)+`-`+ko++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=Io(n,r);typeof n!=`string`?(Xl(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=Io(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n==`string`){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Qi}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Qi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement(`div`);Xl(r,this._id),r.textContent=e,n&&r.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Io(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(e),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=Ji(e,`aria-describedby`).filter(r=>r.indexOf(Kl)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);Jf(e,`aria-describedby`,r.messageElement.id),e.setAttribute(Qi,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,eh(e,`aria-describedby`,r.messageElement.id),e.removeAttribute(Qi)}_isElementDescribedByMessage(e,n){let r=Ji(e,`aria-describedby`),o=this._messageRegistry.get(n),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let r=n==null?``:`${n}`.trim(),o=e.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Io(t,i){return typeof t==`string`?`${i||``}/${t}`:t}function Xl(t,i){t.id||(t.id=`${Kl}-${i}-${ko++}`)}var $e=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})($e||{});var er;var Tt;function tr(){if(Tt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Tt=!1,Tt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Tt=!0;else{let t=Element.prototype.scrollTo;t?Tt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Tt=!1}}return Tt}function Qt(){if(typeof document!=`object`||!document)return $e.NORMAL;if(er==null){let t=document.createElement(`div`),i=t.style;t.dir=`rtl`,i.width=`1px`,i.overflow=`auto`,i.visibility=`hidden`,i.pointerEvents=`none`,i.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,t.appendChild(e),document.body.appendChild(t),er=$e.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,er=t.scrollLeft===0?$e.NEGATED:$e.INVERTED),t.remove()}return er}function Po(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Jt;var Zl=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Lo(){if(Jt)return Jt;if(typeof document!=`object`||!document)return Jt=new Set(Zl),Jt;let t=document.createElement(`input`);return Jt=new Set(Zl.filter(i=>(t.setAttribute(`type`,i),t.type===i))),Jt}function ae(t){return t==null?``:typeof t==`string`?t:`${t}px`}function en(t){return t!=null&&`${t}`!=`false`}function eS(t,i=/\s+/){let e=[];if(t!=null){let n=Array.isArray(t)?t:`${t}`.split(i);for(let r of n){let o=`${r}`.trim();o&&e.push(o)}}return e}var rS={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var th=new A(`MATERIAL_ANIMATIONS`);var Ql=null;function Vo(){return T(th,{optional:!0})?.animationsDisabled||T(Um$1,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ql??=T(Xi).matchMedia(`(prefers-reduced-motion)`).matches,Ql?`reduced-motion`:`enabled`)}function Le(){return Vo()!==`enabled`}var Ve=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(Ve||{});var Bo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ve.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Jl=qt({passive:!0,capture:!0});var jo=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let s=o.get(n);s?s.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Jl)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Jl)))}_delegateEventHandler=i=>{let e=me(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}};var Bn={enterDuration:225,exitDuration:150};var nh=800;var ec=qt({passive:!0,capture:!0});var tc=[`mousedown`,`touchstart`];var nc=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var ih=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})();var jn=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new jo;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ce(n)),o&&o.get(ve).load(ih)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=G(G({},Bn),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let s=n.radius||rh(i,e,r),l=i-r.left,c=e-r.top,u=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${l-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let h=window.getComputedStyle(d),y=h.transitionProperty,N=h.transitionDuration,T=y===`none`||N===`0s`||N===`0s, 0s`||r.width===0&&r.height===0,P=new Bo(this,d,n,T);d.style.transform=`scale3d(1, 1, 1)`,P.state=Ve.FADING_IN,n.persistent||(this._mostRecentTransientRipple=P);let Y=null;return!T&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ge=()=>{Y&&(Y.fallbackTimer=null),clearTimeout(V),this._finishRippleTransition(P)},O=()=>this._destroyRipple(P),V=setTimeout(O,u+100);d.addEventListener(`transitionend`,Ge),d.addEventListener(`transitioncancel`,O),Y={onTransitionEnd:Ge,onTransitionCancel:O,fallbackTimer:V}}),this._activeRipples.set(P,Y),(T||!u)&&this._finishRippleTransition(P),P}fadeOutRipple(i){if(i.state===Ve.FADING_OUT||i.state===Ve.HIDDEN)return;let e=i.element,n=G(G({},Bn),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,i.state=Ve.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ce(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,tc.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{nc.forEach(e=>{this._triggerElement.addEventListener(e,this,ec)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ve.FADING_IN?this._startFadeOutTransition(i):i.state===Ve.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Ve.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ve.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=On(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+nh;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!In(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ve.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ve.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(tc.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(nc.forEach(e=>i.removeEventListener(e,this,ec)),this._pointerUpEventsRegistered=!1))}};function rh(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var zo=new A(`mat-ripple-global-options`);var ic=(()=>{class t{_elementRef=T(Mr$1);_animationsDisabled=Le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T(Re$1),n=T(H),r=T(zo,{optional:!0}),o=T(Ee$1);this._globalOptions=r||{},this._rippleRenderer=new jn(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:G(G(G({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,G(G({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,G(G({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,r){n&2&&gh$1(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var rc=(()=>{class t{_animationsDisabled=Le();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,r){n&2&&gh$1(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return t})();var nr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();var oh=[`text`];var sh=[[[`mat-icon`]],`*`];var ah=[`mat-icon`,`*`];function lh(t,i){if(t&1&&Xp$1(0,`mat-pseudo-checkbox`,1),t&2){let e=OD$1();Jp$1(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function ch(t,i){if(t&1&&Xp$1(0,`mat-pseudo-checkbox`,3),t&2)Jp$1(`disabled`,OD$1().disabled)}function dh(t,i){if(t&1&&(Mi$1(0,`span`,4),cw(1),Jc$1()),t&2){let e=OD$1();dI(),rl$1(`(`,e.group.label,`)`)}}var Ho=new A(`MAT_OPTION_PARENT_COMPONENT`);var $o=new A(`MatOptgroup`);var Uo=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}};var or=(()=>{class t{_element=T(Mr$1);_changeDetectorRef=T(Hj);_parent=T(Ho,{optional:!0});group=T($o,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=T(we).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Yo$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ge;_text;_stateChanges=new Q;constructor(){let e=T(ve);e.load(nr),e.load(Kt),this._signalDisableRipple=!!this._parent&&Xo$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!tt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Uo(this,e))}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-option`]],viewQuery:function(n,r){if(n&1&&lh$1(oh,7),n&2){let o;FD(o=jD())&&(r._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(n,r){n&1&&ih$1(`click`,function(){return r._selectViaInteraction()})(`keydown`,function(s){return r._handleKeydown(s)}),n&2&&(rh$1(`id`,r.id),Kp$1(`aria-selected`,r.selected)(`aria-disabled`,r.disabled.toString()),gh$1(`mdc-list-item--selected`,r.selected)(`mat-mdc-option-multiple`,r.multiple)(`mat-mdc-option-active`,r.active)(`mdc-list-item--disabled`,r.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,$j]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:ah,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(n,r){n&1&&(kD$1(sh),hD(0,lh,1,2,`mat-pseudo-checkbox`,1),LD(1),Mi$1(2,`span`,2,0),LD(4,1),Jc$1(),hD(5,ch,1,1,`mat-pseudo-checkbox`,3),hD(6,dh,2,1,`span`,4),Xp$1(7,`div`,5)),n&2&&(gD(r.multiple?0:-1),dI(5),gD(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),dI(),gD(r.group&&r.group._inert?6:-1),dI(),Jp$1(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disabled||r.disableRipple))},dependencies:[rc,ic],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return t})();function oc(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)n[s].group&&n[s].group===r[o]&&o++;return o}return 0}function sc(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var uh=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T(dr$1)});var fh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ac(t){let i=t?.toLowerCase()||``;return i===`auto`&&typeof navigator<`u`&&navigator?.language?fh.test(navigator.language)?`rtl`:`ltr`:i===`rtl`?`rtl`:`ltr`}var nt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Yo$1(`ltr`);change=new Ge;constructor(){let e=T(uh,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ac(n||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var re=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();var Go=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new _(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Hn$1(e=>e.some(n=>n.target===i)),Yg({bufferSize:1,refCount:!0}),wg$1(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var lc=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=T(Re$1);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Go(r)),this._observers.get(r).observe(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var hh=[`notch`];var mh=[`*`];var cc=[`iconPrefixContainer`];var dc=[`textPrefixContainer`];var uc=[`iconSuffixContainer`];var fc=[`textSuffixContainer`];var ph=[`textField`];var gh=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var _h=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function bh(t,i){t&1&&Xp$1(0,`span`,21)}function vh(t,i){if(t&1&&(Mi$1(0,`label`,20),LD(1,1),hD(2,bh,1,0,`span`,21),Jc$1()),t&2){let e=OD$1(2);Jp$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Kp$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),dI(2),gD(!e.hideRequiredMarker&&e._control.required?2:-1)}}function yh(t,i){if(t&1&&hD(0,vh,3,5,`label`,20),t&2)gD(OD$1()._hasFloatingLabel()?0:-1)}function Sh(t,i){t&1&&Xp$1(0,`div`,7)}function Dh(t,i){}function Ch(t,i){if(t&1&&Wp$1(0,Dh,0,0,`ng-template`,13),t&2){OD$1(2);Jp$1(`ngTemplateOutlet`,HD(1))}}function wh(t,i){if(t&1&&(Mi$1(0,`div`,9),hD(1,Ch,1,1,null,13),Jc$1()),t&2){let e=OD$1();Jp$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),dI(),gD(e._forceDisplayInfixLabel()?-1:1)}}function Eh(t,i){t&1&&(Mi$1(0,`div`,10,2),LD(2,2),Jc$1())}function xh(t,i){t&1&&(Mi$1(0,`div`,11,3),LD(2,3),Jc$1())}function Nh(t,i){}function Mh(t,i){if(t&1&&Wp$1(0,Nh,0,0,`ng-template`,13),t&2){OD$1();Jp$1(`ngTemplateOutlet`,HD(1))}}function Ah(t,i){t&1&&(Mi$1(0,`div`,14,4),LD(2,4),Jc$1())}function Rh(t,i){t&1&&(Mi$1(0,`div`,15,5),LD(2,5),Jc$1())}function Fh(t,i){t&1&&Xp$1(0,`div`,16)}function Th(t,i){t&1&&(Mi$1(0,`div`,18),LD(1,6),Jc$1())}function Oh(t,i){if(t&1&&(Mi$1(0,`mat-hint`,22),cw(1),Jc$1()),t&2){let e=OD$1(2);Jp$1(`id`,e._hintLabelId),dI(),wh$1(e.hintLabel)}}function Ih(t,i){if(t&1&&(Mi$1(0,`div`,19),hD(1,Oh,2,2,`mat-hint`,22),LD(2,7),Xp$1(3,`div`,23),LD(4,8),Jc$1()),t&2){let e=OD$1();dI(),gD(e.hintLabel?1:-1)}}var Wo=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-label`]]})}return t})();var vc=new A(`MatError`);var kh=(()=>{class t{id=T(we).getId(`mat-mdc-error-`);static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(n,r){n&2&&rh$1(`id`,r.id)},inputs:{id:`id`},features:[vw([{provide:vc,useExisting:t}])]})}return t})();var Yo=(()=>{class t{align=`start`;id=T(we).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,r){n&2&&(rh$1(`id`,r.id),Kp$1(`align`,null),gh$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var yc=new A(`MatPrefix`);var Ph=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[vw([{provide:yc,useExisting:t}])]})}return t})();var Sc=new A(`MatSuffix`);var Lh=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[vw([{provide:Sc,useExisting:t}])]})}return t})();var Dc=new A(`FloatingLabelParent`);var hc=(()=>{class t{_elementRef=T(Mr$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=T(lc);_ngZone=T(Re$1);_parent=T(Dc);_resizeSubscription=new j;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Vh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,r){n&2&&gh$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function Vh(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var mc=`mdc-line-ripple--active`;var sr=`mdc-line-ripple--deactivating`;var pc=(()=>{class t{_elementRef=T(Mr$1);_cleanupTransitionEnd;constructor(){let e=T(Re$1),n=T(Xa$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(sr),e.add(mc)}deactivate(){this._elementRef.nativeElement.classList.add(sr)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(sr);e.propertyName===`opacity`&&r&&n.remove(mc,sr)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var gc=(()=>{class t{_elementRef=T(Mr$1);_ngZone=T(Re$1);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(n,r){if(n&1&&lh$1(hh,5),n&2){let o;FD(o=jD())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(n,r){n&2&&gh$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:mh,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(n,r){n&1&&(kD$1(),eh$1(0,`div`,1),Xc$1(1,`div`,2,0),LD(3),el$1(),eh$1(4,`div`,3))},encapsulation:2})}return t})();var zn=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t})}return t})();var Un=new A(`MatFormField`);var Bh=new A(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var _c=`fill`;var jh=`auto`;var bc=`fixed`;var zh=`translateY(-50%)`;var Cc=(()=>{class t{_elementRef=T(Mr$1);_changeDetectorRef=T(Hj);_platform=T(H);_idGenerator=T(we);_ngZone=T(Re$1);_defaults=T(Bh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fj(`iconPrefixContainer`);_textPrefixContainerSignal=Fj(`textPrefixContainer`);_iconSuffixContainerSignal=Fj(`iconSuffixContainer`);_textSuffixContainerSignal=Fj(`textSuffixContainer`);_prefixSuffixContainers=xw(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=jj(Wo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=en(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||jh}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||_c;this._appearanceSignal.set(n)}_appearanceSignal=Yo$1(_c);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||bc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Le();constructor(){let e=this._defaults,n=T(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),od$1(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=xw(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Gl([void 0,void 0]),oe(()=>[n.errorState,n.userAriaDescribedBy]),zg(),Hn$1(([[o,s],[l,c]])=>o!==l||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(wg$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Lg$1(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){qj({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=xw(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,s=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,l=n?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${zh} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+l+c+u]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-form-field`]],contentQueries:function(n,r,o){if(n&1&&(uh$1(o,r._labelChild,Wo,5),ch$1(o,zn,5)(o,yc,5)(o,Sc,5)(o,vc,5)(o,Yo,5)),n&2){VD();let s;FD(s=jD())&&(r._formFieldControl=s.first),FD(s=jD())&&(r._prefixChildren=s),FD(s=jD())&&(r._suffixChildren=s),FD(s=jD())&&(r._errorChildren=s),FD(s=jD())&&(r._hintChildren=s)}},viewQuery:function(n,r){if(n&1&&(dh$1(r._iconPrefixContainerSignal,cc,5)(r._textPrefixContainerSignal,dc,5)(r._iconSuffixContainerSignal,uc,5)(r._textSuffixContainerSignal,fc,5),lh$1(ph,5)(cc,5)(dc,5)(uc,5)(fc,5)(hc,5)(gc,5)(pc,5)),n&2){VD(4);let o;FD(o=jD())&&(r._textField=o.first),FD(o=jD())&&(r._iconPrefixContainer=o.first),FD(o=jD())&&(r._textPrefixContainer=o.first),FD(o=jD())&&(r._iconSuffixContainer=o.first),FD(o=jD())&&(r._textSuffixContainer=o.first),FD(o=jD())&&(r._floatingLabel=o.first),FD(o=jD())&&(r._notchedOutline=o.first),FD(o=jD())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(n,r){n&2&&gh$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[vw([{provide:Un,useExisting:t},{provide:Dc,useExisting:t}])],ngContentSelectors:_h,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(n,r){if(n&1&&(kD$1(gh),Wp$1(0,yh,1,1,`ng-template`,null,0,_w),Mi$1(2,`div`,6,1),ih$1(`click`,function(s){return r._control.onContainerClick(s)}),hD(4,Sh,1,0,`div`,7),Mi$1(5,`div`,8),hD(6,wh,2,2,`div`,9),hD(7,Eh,3,0,`div`,10),hD(8,xh,3,0,`div`,11),Mi$1(9,`div`,12),hD(10,Mh,1,1,null,13),LD(11),Jc$1(),hD(12,Ah,3,0,`div`,14),hD(13,Rh,3,0,`div`,15),Jc$1(),hD(14,Fh,1,0,`div`,16),Jc$1(),Mi$1(15,`div`,17),hD(16,Th,2,0,`div`,18)(17,Ih,5,1,`div`,19),Jc$1()),n&2){let o;dI(2),gh$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),dI(2),gD(!r._hasOutline()&&!r._control.disabled?4:-1),dI(2),gD(r._hasOutline()?6:-1),dI(),gD(r._hasIconPrefix?7:-1),dI(),gD(r._hasTextPrefix?8:-1),dI(2),gD(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),dI(2),gD(r._hasTextSuffix?12:-1),dI(),gD(r._hasIconSuffix?13:-1),dI(),gD(r._hasOutline()?-1:14),dI(),gh$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let s=r._getSubscriptMessageType();dI(),gD((o=s)===`error`?16:o===`hint`?17:-1)}},dependencies:[hc,gc,En,pc,Yo],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var Tc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(n){return new(n||t)(kr$1(Xa$1),kr$1(Mr$1))};static ɵdir=QE({type:t})}return t})();var Oc=(()=>{class t extends Tc{static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,features:[Up$1]})}return t})();var gr=new A(``);var Uh={provide:gr,useExisting:Co$1(()=>Ic),multi:!0};function Hh(){let t=ke()?ke().getUserAgent():``;return/android (\d+)/.test(t.toLowerCase())}var $h=new A(``);var Ic=(()=>{class t extends Tc{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode??=!Hh()}writeValue(e){let n=e??``;this.setProperty(`value`,n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(n){return new(n||t)(kr$1(Xa$1),kr$1(Mr$1),kr$1($h,8))};static ɵdir=QE({type:t,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,r){n&1&&ih$1(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[vw([Uh]),Up$1]})}return t})();function Jo(t){return t==null||es(t)===0}function es(t){return t==null?null:Array.isArray(t)||typeof t==`string`?t.length:t instanceof Set?t.size:null}var ut=new A(``);var sn=new A(``);var Gh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Ot=class{static min(i){return kc(i)}static max(i){return Pc(i)}static required(i){return Lc(i)}static requiredTrue(i){return Wh(i)}static email(i){return Yh(i)}static minLength(i){return Xh(i)}static maxLength(i){return qh(i)}static pattern(i){return Kh(i)}static nullValidator(i){return lr()}static compose(i){return Hc(i)}static composeAsync(i){return $c(i)}};function kc(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Pc(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Lc(t){return Jo(t.value)?{required:!0}:null}function Wh(t){return t.value===!0?null:{required:!0}}function Yh(t){return Jo(t.value)||Gh.test(t.value)?null:{email:!0}}function Xh(t){return i=>{let e=i.value?.length??es(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function qh(t){return i=>{let e=i.value?.length??es(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Kh(t){if(!t)return lr;let i,e;return typeof t==`string`?(e=``,t.charAt(0)!==`^`&&(e+=`^`),e+=t,t.charAt(t.length-1)!==`$`&&(e+=`$`),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Jo(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function lr(t){return null}function Vc(t){return t!=null}function Bc(t){return Zc$1(t)?_e(t):t}function jc(t){let i={};return t.forEach(e=>{i=e!=null?G(G({},i),e):i}),Object.keys(i).length===0?null:i}function zc(t,i){return i.map(e=>e(t))}function Zh(t){return!t.validate}function Uc(t){return t.map(i=>Zh(i)?i:e=>i.validate(e))}function Hc(t){if(!t)return null;let i=t.filter(Vc);return i.length==0?null:function(e){return jc(zc(e,i))}}function ts(t){return t!=null?Hc(Uc(t)):null}function $c(t){if(!t)return null;let i=t.filter(Vc);return i.length==0?null:function(e){return kg$1(zc(e,i).map(Bc)).pipe(oe(jc))}}function ns(t){return t!=null?$c(Uc(t)):null}function wc(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Gc(t){return t._rawValidators}function Wc(t){return t._rawAsyncValidators}function Xo(t){return t?Array.isArray(t)?t:[t]:[]}function cr(t,i){return Array.isArray(t)?t.includes(i):t===i}function Ec(t,i){let e=Xo(i);return Xo(t).forEach(r=>{cr(e,r)||e.push(r)}),e}function xc(t,i){return Xo(i).filter(e=>!cr(t,e))}var dr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=ts(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ns(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}};var Ee=class extends dr{name;get formDirective(){return null}get path(){return null}};var Hn=`VALID`;var ar=`INVALID`;var tn=`PENDING`;var $n=`DISABLED`;var bt=class{};var ur=class extends bt{value;source;constructor(i,e){super(),this.value=i,this.source=e}};var Wn=class extends bt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}};var Yn=class extends bt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}};var nn=class extends bt{status;source;constructor(i,e){super(),this.status=i,this.source=e}};var fr=class extends bt{source;constructor(i){super(),this.source=i}};var It=class extends bt{source;constructor(i){super(),this.source=i}};function is(t){return(_r(t)?t.validators:t)||null}function Qh(t){return Array.isArray(t)?ts(t):t||null}function rs(t,i){return(_r(i)?i.asyncValidators:t)||null}function Jh(t){return Array.isArray(t)?ns(t):t||null}function _r(t){return t!=null&&!Array.isArray(t)&&typeof t==`object`}function Yc(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new N(1e3,``);if(!qc(n,e))throw new N(1001,``)}function Xc(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new N(-1002,``)})}var rn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Yo$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ph$1(this.statusReactive)}set status(i){Ph$1(()=>this.statusReactive.set(i))}_status=xw(()=>this.statusReactive());statusReactive=Yo$1(void 0);get valid(){return this.status===Hn}get invalid(){return this.status===ar}get pending(){return this.status===tn}get disabled(){return this.status===$n}get enabled(){return this.status!==$n}errors;get pristine(){return Ph$1(this.pristineReactive)}set pristine(i){Ph$1(()=>this.pristineReactive.set(i))}_pristine=xw(()=>this.pristineReactive());pristineReactive=Yo$1(!0);get dirty(){return!this.pristine}get touched(){return Ph$1(this.touchedReactive)}set touched(i){Ph$1(()=>this.touchedReactive.set(i))}_touched=xw(()=>this.touchedReactive());touchedReactive=Yo$1(!1);get untouched(){return!this.touched}_events=new Q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Ec(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Ec(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(xc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(xc(i,this._rawAsyncValidators))}hasValidator(i){return cr(this._rawValidators,i)}hasAsyncValidator(i){return cr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(z(G({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Yn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Yn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(z(G({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Wn(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Wn(!0,n))}markAsPending(i={}){this.status=tn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new nn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(z(G({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=$n,this.errors=null,this._forEachChild(r=>{r.disable(z(G({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ur(this.value,n)),this._events.next(new nn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(G({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Hn,this._forEachChild(n=>{n.enable(z(G({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(z(G({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Hn||this.status===tn)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ur(this.value,e)),this._events.next(new nn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(z(G({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?$n:Hn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=tn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Bc(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new nn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new Ge,this.statusChanges=new Ge}_calculateStatus(){return this._allControlsDisabled()?$n:this.errors?ar:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(tn)?tn:this._anyControlsHaveStatus(ar)?ar:Hn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Wn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Yn(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){_r(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Qh(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Jh(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ph$1(()=>this._hasRequired.set(this.hasValidator(Ot.required)))}};function qc(t,i){return Object.hasOwn(t,i)}function em(t){return t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`}function tm(t,i,e,n){switch(e){case`name`:t.setAttribute(i,e,n);break;case`disabled`:case`readonly`:case`required`:n?t.setAttribute(i,e,``):t.removeAttribute(i,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?t.setAttribute(i,e,n.toString()):t.removeAttribute(i,e);break}}var qo=class{kind;context;control;message;constructor({kind:i,context:e,control:n}){this.kind=i,this.context=e,this.control=n}};function Kc(t){return typeof t==`number`?t:parseFloat(t)}var os=(()=>{class t{_validator=lr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):lr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,features:[iy]})}return t})();var nm={provide:ut,useExisting:Co$1(()=>im),multi:!0};var im=(()=>{class t extends os{max;inputName=`max`;normalizeInput=e=>Kc(e);createValidator=e=>Pc(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[`input`,`type`,`number`,`max`,``,`formControlName`,``],[`input`,`type`,`number`,`max`,``,`formControl`,``],[`input`,`type`,`number`,`max`,``,`ngModel`,``]],hostVars:1,hostBindings:function(n,r){n&2&&Kp$1(`max`,r._enabled?r.max:null)},inputs:{max:`max`},standalone:!1,features:[vw([nm]),Up$1]})}return t})();var rm={provide:ut,useExisting:Co$1(()=>om),multi:!0};var om=(()=>{class t extends os{min;inputName=`min`;normalizeInput=e=>Kc(e);createValidator=e=>kc(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(n,r){n&2&&Kp$1(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[vw([rm]),Up$1]})}return t})();var sm={provide:ut,useExisting:Co$1(()=>Zc),multi:!0};var Zc=(()=>{class t extends os{required;inputName=`required`;normalizeInput=$j;createValidator=e=>Lc;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,r){n&2&&Kp$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[vw([sm]),Up$1]})}return t})();var am=new A(``);var qn=new A(``,{factory:()=>br});var br=`always`;function vr(t,i){return[...i.path,t]}function Ko(t,i,e=br){ss(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e===`always`)&&i.valueAccessor.setDisabledState?.(t.disabled),cm(t,i),um(t,i),dm(t,i),lm(t,i)}function Nc(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),mr(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function hr(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function lm(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ss(t,i){let e=Gc(t);i.validator!==null?t.setValidators(wc(e,i.validator)):typeof e==`function`&&t.setValidators([e]);let n=Wc(t);i.asyncValidator!==null?t.setAsyncValidators(wc(n,i.asyncValidator)):typeof n==`function`&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();hr(i._rawValidators,r),hr(i._rawAsyncValidators,r)}function mr(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=Gc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=Wc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return hr(i._rawValidators,n),hr(i._rawAsyncValidators,n),e}function cm(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn===`change`&&Qc(t,i)})}function dm(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn===`blur`&&t._pendingChange&&Qc(t,i),t.updateOn!==`submit`&&t.markAsTouched()})}function Qc(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function um(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Jc(t,i){ss(t,i)}function fm(t,i){return mr(t,i)}function ed(t,i){if(!Object.hasOwn(t,`model`))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function hm(t){return Object.getPrototypeOf(t.constructor)===Oc}function td(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn===`submit`&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function mm(t,i){if(!i)return null;let e,n,r;return i.forEach(o=>{o.constructor===Ic?e=o:hm(o)?n=o:r=o}),r||n||e||null}function pm(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var nd={provide:am,useFactory:()=>{let t=T(Be,{self:!0});return{setParseErrors:i=>{t.setParseErrorSource(i)},set onReset(i){t.onReset=i}}}};var Be=class extends dr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=mm(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,n){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(pe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Hj);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new j,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=em(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Zc))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,i.setCustomControlModelInput(n.value)),this.bindControlProperty(i,r,`touched`,n.touched),this.bindControlProperty(i,r,`dirty`,n.dirty),this.bindControlProperty(i,r,`valid`,n.valid),this.bindControlProperty(i,r,`invalid`,n.invalid),this.bindControlProperty(i,r,`pending`,n.pending),this.bindControlProperty(i,r,`disabled`,n.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,`required`,this.isRequired);let o=n.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);i.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,n,r){if(e[n]===r)return;e[n]=r;let o=i.setInputOnDirectives(n,r);this.isNativeFormElement&&!o&&(n===`disabled`||n===`required`)&&this.renderer&&tm(this.renderer,i.nativeElement,n,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([n,r])=>new qo({context:r,kind:n,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,n=xw(()=>{let r=i();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),od$1(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var pr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var AD=(()=>{class t extends pr{constructor(e){super(e)}static ɵfac=function(n){return new(n||t)(kr$1(Be,2))};static ɵdir=QE({type:t,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(n,r){n&2&&gh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Up$1]})}return t})();var RD=(()=>{class t extends pr{constructor(e){super(e)}static ɵfac=function(n){return new(n||t)(kr$1(Ee,10))};static ɵdir=QE({type:t,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(n,r){n&2&&gh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[Up$1]})}return t})();var on=class extends rn{constructor(i,e,n){super(is(e),rs(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this._find(i)||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let n=this._find(i);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){Ph$1(()=>{Xc(this,!0,i),Object.keys(i).forEach(n=>{Yc(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this._find(n);r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return qc(this.controls,i)?this.controls[i]:null}};var Zo=class extends on{};var gm={provide:Ee,useExisting:Co$1(()=>Kn)};var Gn=Promise.resolve();var Kn=(()=>{class t extends Ee{callSetDisabledState;get submitted(){return Ph$1(this.submittedReactive)}_submitted=xw(()=>this.submittedReactive());submittedReactive=Yo$1(!1);_directives=new Set;form;ngSubmit=new Ge;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new on({},ts(e),ns(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Gn.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Gn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Gn.then(()=>{let n=this._findContainer(e.path),r=new on({});Jc(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Gn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Gn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),td(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new fr(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(n){return new(n||t)(kr$1(ut,10),kr$1(sn,10),kr$1(qn,8))};static ɵdir=QE({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(n,r){n&1&&ih$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vw([gm]),Up$1]})}return t})();function Mc(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Ac(t){return typeof t==`object`&&t!==null&&Object.keys(t).length===2&&`value`in t&&`disabled`in t}var Xn=class extends rn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(is(e),rs(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_r(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ac(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){Ph$1(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new It(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Mc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Mc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Ac(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var _m=t=>t instanceof Xn;var bm=(()=>{class t extends Ee{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return vr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,standalone:!1,features:[Up$1]})}return t})();var id=(()=>{class t extends Ee{callSetDisabledState;get submitted(){return Ph$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=xw(()=>this._submittedReactive());_submittedReactive=Yo$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(mr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Nc(e.control||null,e,!1),pm(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,td(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new fr(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Nc(n||null,e),_m(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Jc(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&fm(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ss(this.form,this),this._oldForm&&mr(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(n){return new(n||t)(kr$1(ut,10),kr$1(sn,10),kr$1(qn,8))};static ɵdir=QE({type:t,features:[Up$1,iy]})}return t})();var vm={provide:Ee,useExisting:Co$1(()=>Zn)};var Zn=(()=>{class t extends id{form=null;ngSubmit=new Ge;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[``,`formGroup`,``]],hostBindings:function(n,r){n&1&&ih$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vw([vm]),Up$1]})}return t})();var ym={provide:Be,useExisting:Co$1(()=>Sm)};var Rc=Promise.resolve();var Sm=(()=>{class t extends Be{_changeDetectorRef;callSetDisabledState;control=new Xn;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new Ge;constructor(e,n,r,o,s,l,c,u){super(c,u,o),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),ed(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ko(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ko(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Rc.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&$j(n);Rc.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?vr(e,this._parent):[e]}static ɵfac=function(n){return new(n||t)(kr$1(Ee,9),kr$1(ut,10),kr$1(sn,10),kr$1(gr,10),kr$1(Hj,8),kr$1(qn,8),kr$1(Ee$1,8),kr$1(Xa$1,8))};static ɵdir=QE({type:t,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[vw([ym,nd]),Up$1,iy,KE(null)]})}return t})();var TD=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return t})();var Dm={provide:gr,useExisting:Co$1(()=>Cm),multi:!0};var Cm=(()=>{class t extends Oc{writeValue(e){let n=e??``;this.setProperty(`value`,n)}registerOnChange(e){this.onChange=n=>{e(n==``?null:parseFloat(n))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(n,r){n&1&&ih$1(`input`,function(s){return r.onChange(s.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[vw([Dm]),Up$1]})}return t})();var Qo=class extends rn{constructor(i,e,n){super(is(e),rs(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Ph$1(()=>{Xc(this,!1,i),i.forEach((n,r)=>{Yc(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var rd=new A(``);var wm={provide:Ee,useExisting:Co$1(()=>od)};var od=(()=>{class t extends bm{name=null;constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_checkParentType(){ad(this._parent)}static ɵfac=function(n){return new(n||t)(kr$1(Ee,13),kr$1(ut,10),kr$1(sn,10))};static ɵdir=QE({type:t,selectors:[[``,`formGroupName`,``]],inputs:{name:[0,`formGroupName`,`name`]},standalone:!1,features:[vw([wm]),Up$1]})}return t})();var Em={provide:Ee,useExisting:Co$1(()=>sd)};var sd=(()=>{class t extends Ee{_parent;name=null;constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnInit(){ad(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return vr(this.name==null?this.name:this.name.toString(),this._parent)}static ɵfac=function(n){return new(n||t)(kr$1(Ee,13),kr$1(ut,10),kr$1(sn,10))};static ɵdir=QE({type:t,selectors:[[``,`formArrayName`,``]],inputs:{name:[0,`formArrayName`,`name`]},standalone:!1,features:[vw([Em]),Up$1]})}return t})();function ad(t){return!(t instanceof od)&&!(t instanceof id)&&!(t instanceof sd)}var xm={provide:Be,useExisting:Co$1(()=>Nm)};var Nm=(()=>{class t extends Be{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Ge;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,s,l,c){super(c,l,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_setupWithForm(e,n){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ko(e,this,n))}ngOnChanges(e){this._added||this._setUpControl(),ed(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return vr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(n){return new(n||t)(kr$1(Ee,13),kr$1(ut,10),kr$1(sn,10),kr$1(gr,10),kr$1(rd,8),kr$1(Xa$1,8),kr$1(Ee$1,8))};static ɵdir=QE({type:t,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[vw([xm,nd]),Up$1,iy,KE(null)]})}return t})();var ld=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();function Fc(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var OD=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return Fc(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new on(r,o)}record(e,n=null){return new Zo(this._reduceControls(e),n)}control(e,n,r){let o={};return this.useNonNullable?(Fc(n)?o=n:(o.validators=n,o.asyncValidators=r),new Xn(e,z(G({},o),{nonNullable:!0}))):new Xn(e,n,r)}array(e,n,r){return new Qo(e.map(s=>this._createControl(s)),n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Xn)return e;if(e instanceof rn)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var ID=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:qn,useValue:e.callSetDisabledState??br}]}}static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[ld]})}return t})();var kD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:rd,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:qn,useValue:e.callSetDisabledState??br}]}}static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[ld]})}return t})();var Qn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[qi,Cc,re]})}return t})();var as=class{};function Mm(t){return t&&typeof t.connect==`function`&&!(t instanceof rs$1)}var ft=(function(t){return t[t.REPLACED=0]=`REPLACED`,t[t.INSERTED=1]=`INSERTED`,t[t.MOVED=2]=`MOVED`,t[t.REMOVED=3]=`REMOVED`,t})(ft||{});var cd=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,n,r,o){i.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let h=()=>n(s,l,c);u=this._insertView(h,c,e,r(s)),d=u?ft.INSERTED:ft.REPLACED}else c==null?(this._detachAndCacheView(l,e),d=ft.REMOVED):(u=this._moveView(l,c,e,r(s)),d=ft.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,n,r){let o=this._insertViewFromCache(e,n);if(o){o.context.$implicit=r;return}let s=i();return n.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(i,e){let n=e.detach(i);this._maybeCacheView(n,e)}_moveView(i,e,n,r){let o=n.get(i);return n.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let n=e.indexOf(i);n===-1?i.destroy():e.remove(n)}}_insertViewFromCache(i,e){let n=this._viewCache.pop();return n&&e.insert(n,i),n||null}};var Jn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Q;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Am=(()=>{class t{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var dd=class{applyChanges(i,e,n,r,o){i.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let h=n(s,l,c);u=e.createEmbeddedView(h.templateRef,h.context,h.index),d=ft.INSERTED}else c==null?(e.remove(l),d=ft.REMOVED):(u=e.get(l),e.move(u,c),d=ft.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){}};var Rm=20;var ti=(()=>{class t{_ngZone=T(Re$1);_platform=T(H);_renderer=T(br$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Q;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Rm){return this._platform.isBrowser?new _(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Pg$1(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ss$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(Hn$1(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&n.push(o)}),n}_targetContainsElement(e,n){let r=Ce(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Fm=(()=>{class t{elementRef=T(Mr$1);scrollDispatcher=T(ti);ngZone=T(Re$1);dir=T(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Q;_renderer=T(Xa$1);_cleanupScroll;_elementScrolled=new Q;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&Qt()!=$e.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Qt()==$e.INVERTED?e.left=e.right:Qt()==$e.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;tr()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n=`left`,r=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?r:n:e==`end`&&(e=s?n:r),s&&Qt()==$e.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Qt()==$e.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return t})();var Tm=20;var vt=(()=>{class t{_platform=T(H);_listeners;_viewportSize=null;_change=new Q;_document=T(dr$1);constructor(){let e=T(Re$1),n=T(br$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen(`window`,`resize`,r),n.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0}}change(e=Tm){return e>0?this._change.pipe(Pg$1(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var yC=new A(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var ei=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();var ls=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[re,ei,re,ei]})}return t})();var ni=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var cs=class extends ni{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,n,r,o,s){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}};var ii=class extends ni{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var ds=class extends ni{element;constructor(i){super(),this.element=i instanceof Mr$1?i.nativeElement:i}};var yr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof cs)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ii)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof ds)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Sr=class extends yr{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(xn$1,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||Ee$1.NULL,o=r.get(fe,n.injector);e=Wj(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var NC=(()=>{class t extends yr{_moduleRef=T(xn$1,{optional:!0});_document=T(dr$1);_viewContainerRef=T(Bi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Ge;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment(`dom-portal`);e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=QE({type:t,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Up$1]})}return t})();var ud=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();var fd=tr();function yd(t){return new Dr(t.get(vt),t.get(dr$1))}var Dr=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=ae(-this._previousScrollPosition.left),i.style.top=ae(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,o=n.scrollBehavior||``,s=r.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),fd&&(n.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fd&&(n.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function Sd(t,i){return new Cr(t.get(ti),t.get(Re$1),t.get(vt),i)}var Cr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Hn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ri=class{enable(){}disable(){}attach(){}};function fs(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return n||r||o||s})}function hd(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return n||r||o||s})}function si(t,i){return new wr(t.get(ti),t.get(vt),t.get(Re$1),i)}var wr=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();fs(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Dd=(()=>{class t{_injector=T(Ee$1);noop=()=>new ri;close=e=>Sd(this._injector,e);block=()=>yd(this._injector);reposition=e=>si(this._injector,e);static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var oi=class{positionStrategy;scrollStrategy=new ri;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Er=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Cd=(()=>{class t{_attachedOverlays=[];_document=T(dr$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var wd=(()=>{class t extends Cd{_ngZone=T(Re$1);_renderer=T(br$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Ed=(()=>{class t extends Cd{_platform=T(H);_ngZone=T(Re$1);_renderer=T(br$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,`pointerdown`,this._pointerDownListener,r),o.listen(n,`click`,this._clickListener,r),o.listen(n,`auxclick`,this._clickListener,r),o.listen(n,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=me(e)};_clickListener=e=>{let n=me(e),r=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let l=o[s],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(md(l.overlayElement,n)||md(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function md(t,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var xd=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})();var Nd=(()=>{class t{_platform=T(H);_containerElement;_document=T(dr$1);_styleLoader=T(ve);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Po()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement(`div`);n.classList.add(e),Po()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(xd)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var hs=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ms(t){return t&&t.nodeType===1}var us=new Set;var xr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Q;_attachments=new Q;_detachments=new Q;_positionStrategy;_scrollStrategy;_locationChanges=j.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Q;_outsidePointerEvents=new Q;_afterNextRenderRef;constructor(i,e,n,r,o,s,l,c,u,d=!1,h,y){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=h,this._renderer=y,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),us.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Hv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),us.delete(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,us.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=G(G({},this._config),i),this._updateElementSize()}setDirection(i){this._config=z(G({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ae(this._config.width),i.height=ae(this._config.height),i.minWidth=ae(this._config.minWidth),i.minHeight=ae(this._config.minHeight),i.maxWidth=ae(this._config.maxWidth),i.maxHeight=ae(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ms(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new hs(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=Rt(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Hv(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var pd=`cdk-overlay-connected-position-bounding-box`;var Om=/([A-Za-z%]+)$/;function ps(t,i){return new Nr(i,t.get(vt),t.get(dr$1),t.get(H),t.get(Nd))}var Nr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Q;_resizeSubscription=j.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(pd),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],s;for(let l of this._preferredPositions){let c=this._getOriginPoint(i,r,l),u=this._getOverlayPoint(c,e,l),d=this._getOverlayFit(u,e,n,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,n)){o.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:e})}if(o.length){let l=null,c=-1;for(let u of o){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&kt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(pd),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Mr$1?this._origin.nativeElement:ms(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX==`center`)r=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=n.originX==`start`?s:l}e.left<0&&(r-=e.left);let o;return n.originY==`center`?o=i.top+i.height/2:o=n.originY==`top`?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX==`center`?r=-e.width/2:n.overlayX===`start`?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY==`center`?o=-e.height/2:o=n.overlayY==`top`?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=_d(e),{x:s,y:l}=i,c=this._getOffset(r,`x`),u=this._getOffset(r,`y`);c&&(s+=c),u&&(l+=u);let d=0-s,h=s+o.width-n.width,y=0-l,N=l+o.height-n.height,T=this._subtractOverflows(o.width,d,h),P=this._subtractOverflows(o.height,y,N),Y=T*P;return{visibleArea:Y,isCompletelyWithinViewport:o.width*o.height===Y,fitsInViewportVertically:P===o.height,fitsInViewportHorizontally:T==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,s=gd(this._overlayRef.getConfig().minHeight),l=gd(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||s!=null&&s<=r,u=i.fitsInViewportHorizontally||l!=null&&l<=o;return c&&u}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=_d(e),o=this._viewportRect,s=Math.max(i.x+r.width-o.width,0),l=Math.max(i.y+r.height-o.height,0),c=Math.max(o.top-n.top-i.y,0),u=Math.max(o.left-n.left-i.x,0),d=0,h=0;return r.width<=o.width?d=u||-s:d=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?h=c||-l:h=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:d,y:h},{x:i.x+d,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Im(this._lastScrollVisibility,n)){let r=new Er(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX===`center`?n=`center`:this._isRtl()?n=i.overlayX===`start`?`right`:`left`:n=i.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,s,l;if(e.overlayY===`top`)s=i.y,o=n.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-l+this._getViewportMarginTop();else{let N=Math.min(n.bottom-i.y+n.top,i.y),T=this._lastBoundingBoxSize.height;o=N*2,s=i.y-N,o>T&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-T/2)}let c=e.overlayX===`start`&&!r||e.overlayX===`end`&&r,u=e.overlayX===`end`&&!r||e.overlayX===`start`&&r,d,h,y;if(u)y=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(c)h=i.x,d=n.right-i.x-this._getViewportMarginEnd();else{let N=Math.min(n.right-i.x+n.left,i.x),T=this._lastBoundingBoxSize.width;d=N*2,h=i.x-N,d>T&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-T/2)}return{top:s,left:h,bottom:l,right:y,width:d,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=ae(n.width),r.height=ae(n.height),r.top=ae(n.top)||`auto`,r.bottom=ae(n.bottom)||`auto`,r.left=ae(n.left)||`auto`,r.right=ae(n.right)||`auto`,e.overlayX===`center`?r.alignItems=`center`:r.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=ae(o)),s&&(r.maxWidth=ae(s))}this._lastBoundingBoxSize=n,kt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){kt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){kt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();kt(n,this._getExactOverlayY(e,i,d)),kt(n,this._getExactOverlayX(e,i,d))}else n.position=`static`;let l=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),n.transform=l.trim(),s.maxHeight&&(r?n.maxHeight=ae(s.maxHeight):o&&(n.maxHeight=``)),s.maxWidth&&(r?n.maxWidth=ae(s.maxWidth):o&&(n.maxWidth=``)),kt(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=ae(o.y);return r}_getExactOverlayX(i,e,n){let r={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=ae(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hd(i,n),isOriginOutsideView:fs(i,n),isOverlayClipped:hd(e,n),isOverlayOutsideView:fs(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Rt(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Mr$1)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let n=e.getBoundingClientRect();return i&&(e.style.display=``),n}};function kt(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function gd(t){if(typeof t!=`number`&&t!=null){let[i,e]=t.split(Om);return!e||e===`px`?parseFloat(i):null}return t||null}function _d(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Im(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var bd=`cdk-global-overlay-wrapper`;function Md(t){return new Mr}var Mr=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(bd),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:s,maxHeight:l}=this._overlayRef.getConfig(),c=(r===`100%`||r===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),d=this._xPosition,h=this._xOffset,y=this._overlayRef.getConfig().direction===`rtl`,N=``,T=``,P=``;c?P=`flex-start`:d===`center`?(P=`center`,y?T=h:N=h):y?d===`left`||d===`end`?(P=`flex-end`,N=h):(d===`right`||d===`start`)&&(P=`flex-start`,T=h):d===`left`||d===`start`?(P=`flex-start`,N=h):(d===`right`||d===`end`)&&(P=`flex-end`,T=h),i.position=this._cssPosition,i.marginLeft=c?`0`:N,i.marginTop=u?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:T,e.justifyContent=P,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(bd),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ad=(()=>{class t{_injector=T(Ee$1);global(){return Md()}flexibleConnectedTo(e){return ps(this._injector,e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var ai=new A(`OVERLAY_DEFAULT_CONFIG`);function gs(t,i){t.get(ve).load(xd);let e=t.get(Nd),n=t.get(dr$1),r=t.get(we),o=t.get($i$1),s=t.get(nt),l=t.get(Xa$1,null,{optional:!0})||t.get(br$1).createRenderer(null,null),c=new oi(i),u=t.get(ai,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!n.body||!(`showPopover`in n.body)?c.usePopover=!1:c.usePopover=i?.usePopover??u;let d=n.createElement(`div`),h=n.createElement(`div`);d.id=r.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),h.appendChild(d),c.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let y=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ms(y)?y.after(h):y?.type===`parent`?y.element.appendChild(h):e.getContainerElement().appendChild(h),new xr(new Sr(d,o,t),h,d,c,t.get(Re$1),t.get(wd),n,t.get(Di),t.get(Ed),i?.disableAnimations??t.get(Um$1,null,{optional:!0})===`NoopAnimations`,t.get(fe),l)}var Rd=(()=>{class t{scrollStrategies=T(Dd);_positionBuilder=T(Ad);_injector=T(Ee$1);create(e){return gs(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var km=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var Pm=new A(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=T(Ee$1);return()=>si(t)}});var an=(()=>{class t{elementRef=T(Mr$1);static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return t})();var Fd=new A(`cdk-connected-overlay-default-config`);var Ar=(()=>{class t{_dir=T(nt,{optional:!0});_injector=T(Ee$1);_overlayRef;_templatePortal;_backdropSubscription=j.EMPTY;_attachSubscription=j.EMPTY;_detachSubscription=j.EMPTY;_positionSubscription=j.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=T(Pm);_ngZone=T(Re$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Ge;positionChange=new Ge;attach=new Ge;detach=new Ge;overlayKeydown=new Ge;overlayOutsideClick=new Ge;constructor(){let e=T(wr$1),n=T(Bi$1),r=T(Fd,{optional:!0}),o=T(ai,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new ii(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=km);let e=this._overlayRef=gs(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!tt(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=me(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new oi({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=ps(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof an?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof an?this.origin.elementRef.nativeElement:this.origin instanceof Mr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jg(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,$j],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,$j],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,$j],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,$j],push:[2,`cdkConnectedOverlayPush`,`push`,$j],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,$j],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,$j],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[iy]})}return t})();var _s=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({providers:[Rd],imports:[re,ud,ls,ls]})}return t})();var Rr=new A(``);var Fr=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),r=e().touched();return n&&r}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var ln=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,n,r,o){this._defaultMatcher=i,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o,e?Xo$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return i?.isErrorState(n,e)??!1}};var Tr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[re]})}return t})();var Td=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[re]})}return t})();var bs=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[Tr,Td,or,re]})}return t})();var Vm=[`trigger`];var Bm=[`panel`];var jm=[[[`mat-select-trigger`]],`*`];var zm=[`mat-select-trigger`,`*`];function Um(t,i){if(t&1&&(Mi$1(0,`span`,4),cw(1),Jc$1()),t&2){let e=OD$1();dI(),wh$1(e.placeholder)}}function Hm(t,i){t&1&&LD(0)}function $m(t,i){if(t&1&&(Mi$1(0,`span`,11),cw(1),Jc$1()),t&2){let e=OD$1(2);dI(),wh$1(e.triggerValue)}}function Gm(t,i){if(t&1&&(Mi$1(0,`span`,5),hD(1,Hm,1,0)(2,$m,2,1,`span`,11),Jc$1()),t&2){let e=OD$1();dI(),gD(e.customTrigger?1:2)}}function Wm(t,i){if(t&1){let e=CD();Mi$1(0,`div`,12,1),ih$1(`keydown`,function(r){Lu$1(e);return Pu$1(OD$1()._handleKeydown(r))}),LD(2,1),Jc$1()}if(t&2){let e=OD$1();KD(e.panelClass),gh$1(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Kp$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ym=new A(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=T(Ee$1);return()=>si(t)}});var Xm=new A(`MAT_SELECT_CONFIG`);var qm=new A(`MatSelectTrigger`);var vs=class{source;value;constructor(i,e){this.source=i,this.value=e}};var pE=(()=>{class t{_viewportRuler=T(vt);_changeDetectorRef=T(Hj);_elementRef=T(Mr$1);_dir=T(nt,{optional:!0});_idGenerator=T(we);_renderer=T(Xa$1);_parentFormField=T(Un,{optional:!0});ngControl=T(Be,{self:!0,optional:!0});_liveAnnouncer=T(Ro);_defaultOptions=T(Xm,{optional:!0});_animationsDisabled=Le();_popoverLocation;_initialized=new Q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=oc(e,this.options,this.optionGroups),s=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=sc(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new vs(this,e)}_scrollStrategyFactory=T(Ym);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Q;_errorStateTracker;stateChanges=new Q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Yo$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ot.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Rg$1(()=>{let e=this.options;return e?e.changes.pipe(Gl(e),Dg$1(()=>Lg$1(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Dg$1(()=>this.optionSelectionChanges))});openedChange=new Ge;_openedStream=this.openedChange.pipe(Hn$1(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(Hn$1(e=>!e),oe(()=>{}));selectionChange=new Ge;valueChange=new Ge;constructor(){let e=T(Fr),n=T(Kn,{optional:!0}),r=T(Zn,{optional:!0}),o=T(new Fh$1(`tabindex`),{optional:!0}),s=T(ai,{optional:!0}),l=T(Rr,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ln(e,l||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Jn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(wg$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(wg$1(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Gl(null),wg$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(tn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,s=this._keyManager;if(!s.isTyping()&&o&&!tt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;s.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,s=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&n.activeItem&&!tt(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==l&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!tt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof an?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Vn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Lg$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(wg$1(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Lg$1(...this.options.map(n=>n._stateChanges)).pipe(wg$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=me(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-select`]],contentQueries:function(n,r,o){if(n&1&&ch$1(o,qm,5)(o,or,5)(o,$o,5),n&2){let s;FD(s=jD())&&(r.customTrigger=s.first),FD(s=jD())&&(r.options=s),FD(s=jD())&&(r.optionGroups=s)}},viewQuery:function(n,r){if(n&1&&lh$1(Vm,5)(Bm,5)(Ar,5),n&2){let o;FD(o=jD())&&(r.trigger=o.first),FD(o=jD())&&(r.panel=o.first),FD(o=jD())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&ih$1(`keydown`,function(s){return r._handleKeydown(s)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(Kp$1(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),gh$1(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,$j],placeholder:`placeholder`,required:[2,`required`,`required`,$j],multiple:[2,`multiple`,`multiple`,$j],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,$j],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Uj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,$j]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[vw([{provide:zn,useExisting:t},{provide:Ho,useExisting:t}]),iy],ngContentSelectors:zm,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(kD$1(jm),Mi$1(0,`div`,2,0),ih$1(`click`,function(){return r.open()}),Mi$1(3,`div`,3),hD(4,Um,2,1,`span`,4)(5,Gm,3,1,`span`,5),Jc$1(),Mi$1(6,`div`,6)(7,`div`,7),Qu(),Mi$1(8,`svg`,8),Xp$1(9,`path`,9),Jc$1()()()(),Wp$1(10,Wm,3,16,`ng-template`,10),ih$1(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(s){return r._handleOverlayKeydown(s)})),n&2){let o=HD(1);dI(3),Kp$1(`id`,r._valueId),dI(),gD(r.empty?4:5),dI(6),Jp$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[an,Ar],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return t})();var gE=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[_s,bs,re,ei,Qn,bs]})}return t})();var Km={capture:!0};var Zm=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var ys=`mat-ripple-loader-uninitialized`;var Ss=`mat-ripple-loader-class-name`;var Od=`mat-ripple-loader-centered`;var Or=`mat-ripple-loader-disabled`;var Id=(()=>{class t{_document=T(dr$1);_animationsDisabled=Le();_globalRippleOptions=T(zo,{optional:!0});_platform=T(H);_ngZone=T(Re$1);_injector=T(Ee$1);_eventCleanups;_hosts=new Map;constructor(){let e=T(br$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zm.map(n=>e.listen(this._document,n,this._onInteraction,Km)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(ys,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(Ss))&&e.setAttribute(Ss,n.className||``),n.centered&&e.setAttribute(Od,``),n.disabled&&e.setAttribute(Or,``)}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Or,``):e.removeAttribute(Or)}_onInteraction=e=>{let n=me(e);if(n instanceof HTMLElement){let r=n.closest(`[${ys}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(Ss)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Bn.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Bn.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Or),rippleConfig:{centered:e.hasAttribute(Od),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new jn(l,this._ngZone,n,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:u}),e.removeAttribute(ys)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Qm=[`*`,[[``,`progressIndicator`,``]]];var Jm=[`*`,`[progressIndicator]`];function ep(t,i){t&1&&(Xc$1(0,`div`,1),LD(1,1),el$1())}var tp=new A(`MAT_BUTTON_CONFIG`);function kd(t){return t==null?void 0:Uj(t)}var Ds=(()=>{class t{_elementRef=T(Mr$1);_ngZone=T(Re$1);_animationsDisabled=Le();_config=T(tp,{optional:!0});_focusMonitor=T(Gi);_cleanupClick;_renderer=T(Xa$1);_rippleLoader=T(Id);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Pj(!1,{transform:$j});constructor(){T(ve).load(nr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,r){n&2&&(Kp$1(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),KD(r.color?`mat-`+r.color:``),gh$1(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,$j],disabled:[2,`disabled`,`disabled`,$j],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,kd],_tabindex:[2,`tabindex`,`_tabindex`,kd],showProgress:[1,`showProgress`]}})}return t})();var np=(()=>{class t extends Ds{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Up$1],ngContentSelectors:Jm,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,r){n&1&&(kD$1(Qm),eh$1(0,`span`,0),LD(1),hD(2,ep,2,0,`div`,1),eh$1(3,`span`,2)(4,`span`,3)),n&2&&(dI(2),gD(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return t})();var ip=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var rp=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function op(t,i){t&1&&(Xc$1(0,`div`,2),LD(1,3),el$1())}var Pd=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var VE=(()=>{class t extends Ds{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=sp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?Pd.get(this._appearance):null,o=Pd.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Up$1],ngContentSelectors:rp,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,r){n&1&&(kD$1(ip),eh$1(0,`span`,0),LD(1),Xc$1(2,`span`,1),LD(3,1),el$1(),LD(4,2),hD(5,op,2,0,`div`,2),eh$1(6,`span`,3)(7,`span`,4)),n&2&&(gh$1(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),dI(5),gD(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function sp(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var BE=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[Tr,re]})}return t})();function Ld(t,i){let n=!i?.manualCleanup?i?.injector?.get(pe)??T(pe):null,r=ap(i?.equal),o;i?.requireSync?o=Yo$1({kind:0},{equal:r}):o=Yo$1({kind:1,value:i?.initialValue},{equal:r});let s,l=t.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(i?.requireSync&&o().kind===0)throw new N(601,!1);return s=n?.onDestroy(l.unsubscribe.bind(l)),xw(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new N(601,!1)}},{equal:i?.equal})}function ap(t=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&t(i.value,e.value)}var Es={};function Kd(t,i){if(Es[t]=(Es[t]||0)+1,typeof i==`function`)return Cs(t,(...n)=>z(G({},i(...n)),{type:t}));switch(i?i._as:`empty`){case`empty`:return Cs(t,()=>({type:t}));case`props`:return Cs(t,n=>z(G({},n),{type:t}));default:throw new Error(`Unexpected config.`)}}function ix(){return{_as:`props`,_p:void 0}}function Cs(t,i){return Object.defineProperty(i,"type",{value:t,writable:!1})}function lp(t,i){if(t==null)throw new Error(`${i} must be defined.`)}var Zd=`@ngrx/store/init`;var cn=(()=>{class t extends Bn$1{constructor(){super({type:Zd})}next(e){if(typeof e==`function`)throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>`u`)throw new TypeError(`Actions must be objects`);if(typeof e.type>`u`)throw new TypeError(`Actions must have a type property`);super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac})}}return t})();var cp=[cn];var Qd=new A(`@ngrx/store Internal Root Guard`);var Vd=new A(`@ngrx/store Internal Initial State`);var As=new A(`@ngrx/store Initial State`);var Jd=new A(`@ngrx/store Reducer Factory`);var Bd=new A(`@ngrx/store Internal Reducer Factory Provider`);var eu=new A(`@ngrx/store Initial Reducers`);var ws=new A(`@ngrx/store Internal Initial Reducers`);var jd=new A(`@ngrx/store Internal Store Reducers`);new A(`@ngrx/store Internal Store Features`);new A(`@ngrx/store Feature Reducers`);var zd=new A(`@ngrx/store User Provided Meta Reducers`);var Ir=new A(`@ngrx/store Meta Reducers`);var Ud=new A(`@ngrx/store Internal Resolved Meta Reducers`);var Hd=new A(`@ngrx/store User Runtime Checks Config`);var $d=new A(`@ngrx/store Internal User Runtime Checks Config`);var li=new A(`@ngrx/store Internal Runtime Checks`);var Rs=new A(`@ngrx/store Check if Action types are unique`);var ci=new A(`@ngrx/store Root Store Provider`);var kr=new A(`@ngrx/store Feature State Provider`);function fp(t,i={}){let e=Object.keys(t),n={};for(let o=0;o<e.length;o++){let s=e[o];typeof t[s]==`function`&&(n[s]=t[s])}let r=Object.keys(n);return function(s,l){s=s===void 0?i:s;let c=!1,u={};for(let d=0;d<r.length;d++){let h=r[d],y=n[h],N=s[h],T=y(N,l);u[h]=T,c=c||T!==N}return c?u:s}}function hp(t,i){return Object.keys(t).filter(e=>e!==i).reduce((e,n)=>Object.assign(e,{[n]:t[n]}),{})}function tu(...t){return function(i){if(t.length===0)return i;let e=t[t.length-1];return t.slice(0,-1).reduceRight((r,o)=>o(r),e(i))}}function nu(t,i){return Array.isArray(i)&&i.length>0&&(t=tu.apply(null,[...i,t])),(e,n)=>{let r=t(e);return(o,s)=>(o=o===void 0?n:o,r(o,s))}}function mp(t){let i=Array.isArray(t)&&t.length>0?tu(...t):e=>e;return(e,n)=>(e=i(e),(r,o)=>(r=r===void 0?n:r,e(r,o)))}var di=class extends _{};var Pr=class extends cn{};var pp=`@ngrx/store/update-reducers`;var Lr=(()=>{class t extends Bn$1{get currentReducers(){return this.reducers}constructor(e,n,r,o){super(o(r,n)),this.dispatcher=e,this.initialState=n,this.reducers=r,this.reducerFactory=o}addFeature(e){this.addFeatures([e])}addFeatures(e){let n=e.reduce((r,{reducers:o,reducerFactory:s,metaReducers:l,initialState:c,key:u})=>{return r[u]=typeof o==`function`?mp(l)(o,c):nu(s,l)(o,c),r},{});this.addReducers(n)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(n=>n.key))}addReducer(e,n){this.addReducers({[e]:n})}addReducers(e){this.reducers=G(G({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(n=>{this.reducers=hp(this.reducers,n)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:pp,features:e})}ngOnDestroy(){this.complete()}static{this.ɵfac=function(n){return new(n||t)(Oe(Pr),Oe(As),Oe(eu),Oe(Jd))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac})}}return t})();var gp=[Lr,{provide:di,useExisting:Lr},{provide:Pr,useExisting:cn}];var ui=(()=>{class t extends Q{ngOnDestroy(){this.complete()}static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})()}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac})}}return t})();var _p=[ui];var Vr=class extends _{};var Gd=(()=>{class t extends Bn$1{static{this.INIT=Zd}constructor(e,n,r,o){super(o);let l=e.pipe(Fn$1(Ng$1)).pipe(em$1(n)),c={state:o},u=l.pipe(Zg(bp,c));this.stateSubscription=u.subscribe(({state:d,action:h})=>{this.next(d),r.next(h)}),this.state=Ld(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.ɵfac=function(n){return new(n||t)(Oe(cn),Oe(di),Oe(ui),Oe(As))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac})}}return t})();function bp(t={state:void 0},[i,e]){let{state:n}=t;return{state:e(n,i),action:i}}var vp=[Gd,{provide:Vr,useExisting:Gd}];var Pt=(()=>{class t extends _{constructor(e,n,r,o){super(),this.actionsObserver=n,this.reducerManager=r,this.injector=o,this.source=e,this.state=e.state}select(e,...n){return Sp.call(null,e,...n)(this)}selectSignal(e,n){return xw(()=>e(this.state()),n)}lift(e){let n=new t(this,this.actionsObserver,this.reducerManager);return n.operator=e,n}dispatch(e,n){if(typeof e==`function`)return this.processDispatchFn(e,n);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,n){this.reducerManager.addReducer(e,n)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,n){lp(this.injector,`Store Injector`);return od$1(()=>{let o=e();Ph$1(()=>this.dispatch(o))},{injector:n?.injector??Dp()??this.injector})}static{this.ɵfac=function(n){return new(n||t)(Oe(Vr),Oe(cn),Oe(Lr),Oe(Ee$1))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac})}}return t})();var yp=[Pt];function Sp(t,i,...e){return function(r){let o;if(typeof t==`string`){let s=[i,...e].filter(Boolean);o=r.pipe(Qg(t,...s))}else if(typeof t==`function`)o=r.pipe(oe(s=>t(s,i)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return o.pipe(Ig$1())}}function Dp(){try{return T(Ee$1)}catch{return}}var Fs=`https://ngrx.io/guide/store/configuration/runtime-checks`;function Wd(t){return t===void 0}function Yd(t){return t===null}function iu(t){return Array.isArray(t)}function Cp(t){return typeof t==`string`}function wp(t){return typeof t==`boolean`}function Ep(t){return typeof t==`number`}function ru(t){return typeof t==`object`&&t!==null}function xp(t){return ru(t)&&!iu(t)}function Np(t){if(!xp(t))return!1;let i=Object.getPrototypeOf(t);return i===Object.prototype||i===null}function xs(t){return typeof t==`function`}function Mp(t){return xs(t)&&t.hasOwnProperty(`ɵcmp`)}function Ap(t,i){return Object.prototype.hasOwnProperty.call(t,i)}var Rp=!1;function Fp(){return Rp}function Xd(t,i){return t===i}function Tp(t,i,e){for(let n=0;n<t.length;n++)if(!e(t[n],i[n]))return!0;return!1}function ou(t,i=Xd,e=Xd){let n=null,r=null,o;function s(){n=null,r=null}function l(d=void 0){o={result:d}}function c(){o=void 0}function u(){if(o!==void 0)return o.result;if(!n)return r=t.apply(null,arguments),n=arguments,r;if(!Tp(arguments,n,i))return r;let d=t.apply(null,arguments);return n=arguments,e(r,d)?r:(r=d,d)}return{memoized:u,reset:s,setResult:l,clearResult:c}}function Op(...t){return kp(ou)(...t)}function Ip(t,i,e,n){if(e===void 0){let o=i.map(s=>s(t));return n.memoized.apply(null,o)}let r=i.map(o=>o(t,e));return n.memoized.apply(null,[...r,e])}function kp(t,i={stateFn:Ip}){return function(...e){let n=e;if(Array.isArray(n[0])){let[d,...h]=n;n=[...d,...h]}else n.length===1&&Pp(n[0])&&(n=Lp(n[0]));let r=n.slice(0,n.length-1),o=n[n.length-1],s=r.filter(d=>d.release&&typeof d.release==`function`),l=t(function(...d){return o.apply(null,d)}),c=ou(function(d,h){return i.stateFn.apply(null,[d,r,h,l])});function u(){c.reset(),l.reset(),s.forEach(d=>d.release())}return Object.assign(c.memoized,{release:u,projector:l.memoized,setResult:c.setResult,clearResult:c.clearResult})}}function rx(t){return Op(i=>{let e=i[t];return!Fp()&&Gj()&&!(t in i)&&console.warn(`@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function Pp(t){return!!t&&typeof t==`object`&&Object.values(t).every(i=>typeof i==`function`)}function Lp(t){let i=Object.values(t),e=Object.keys(t),n=(...r)=>e.reduce((o,s,l)=>z(G({},o),{[s]:r[l]}),{});return[...i,n]}function Vp(t){return t instanceof A?T(t):t}function su(t){return typeof t==`function`?t():t}function Bp(t,i){return t.concat(i)}function jp(){if(T(Pt,{optional:!0,skipSelf:!0}))throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);return`guarded`}function zp(t,i){return function(e,n){let o=t(e,i.action(n)?Ns(n):n);return i.state()?Ns(o):o}}function Ns(t){Object.freeze(t);let i=xs(t);return Object.getOwnPropertyNames(t).forEach(e=>{if(!e.startsWith(`ɵ`)&&Ap(t,e)&&(!i||e!==`caller`&&e!==`callee`&&e!==`arguments`)){let n=t[e];(ru(n)||xs(n))&&!Object.isFrozen(n)&&Ns(n)}}),t}function Up(t,i){return function(e,n){if(i.action(n))qd(Ms(n),`action`);let r=t(e,n);if(i.state())qd(Ms(r),`state`);return r}}function Ms(t,i=[]){return(Wd(t)||Yd(t))&&i.length===0?{path:[`root`],value:t}:Object.keys(t).reduce((n,r)=>{if(n)return n;let o=t[r];return Mp(o)?n:Wd(o)||Yd(o)||Ep(o)||wp(o)||Cp(o)||iu(o)?!1:Np(o)?Ms(o,[...i,r]):{path:[...i,r],value:o}},!1)}function qd(t,i){if(t===!1)return;let e=t.path.join(`.`),n=new Error(`Detected unserializable ${i} at "${e}". ${Fs}#strict${i}serializability`);throw n.value=t.value,n.unserializablePath=e,n}function Hp(t,i){return function(e,n){if(i.action(n)&&!Re$1.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${Fs}#strictactionwithinngzone`);return t(e,n)}}function $p(t){return Gj()?G({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Gp({strictActionSerializability:t,strictStateSerializability:i}){return e=>t||i?Up(e,{action:n=>t&&!Ts(n),state:()=>i}):e}function Wp({strictActionImmutability:t,strictStateImmutability:i}){return e=>t||i?zp(e,{action:n=>t&&!Ts(n),state:()=>i}):e}function Ts(t){return t.type.startsWith(`@ngrx`)}function Yp({strictActionWithinNgZone:t}){return i=>t?Hp(i,{action:e=>t&&!Ts(e)}):i}function Xp(t){return[{provide:$d,useValue:t},{provide:Hd,useFactory:Kp,deps:[$d]},{provide:li,deps:[Hd],useFactory:$p},{provide:Ir,multi:!0,deps:[li],useFactory:Wp},{provide:Ir,multi:!0,deps:[li],useFactory:Gp},{provide:Ir,multi:!0,deps:[li],useFactory:Yp}]}function qp(){return[{provide:Rs,multi:!0,deps:[li],useFactory:Zp}]}function Kp(t){return t}function Zp(t){if(!t.strictActionTypeUniqueness)return;let i=Object.entries(Es).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(`, `)}. ${Fs}#strictactiontypeuniqueness`)}function Qp(t={},i={}){return[{provide:Qd,useFactory:jp},{provide:Vd,useValue:i.initialState},{provide:As,useFactory:su,deps:[Vd]},{provide:ws,useValue:t},{provide:jd,useExisting:t instanceof A?t:ws},{provide:eu,deps:[ws,[new My(jd)]],useFactory:Vp},{provide:zd,useValue:i.metaReducers?i.metaReducers:[]},{provide:Ud,deps:[Ir,zd],useFactory:Bp},{provide:Bd,useValue:i.reducerFactory?i.reducerFactory:fp},{provide:Jd,deps:[Bd,Ud],useFactory:nu},cp,gp,_p,vp,yp,Xp(i.runtimeChecks),qp()]}function Jp(){T(cn),T(di),T(ui),T(Pt),T(Qd,{optional:!0}),T(Rs,{optional:!0})}var eg=[{provide:ci,useFactory:Jp},Eu$1(()=>T(ci))];function ox(t,i){return Ro$1([...Qp(t,i),eg])}Eu$1(()=>T(kr));function ax(...t){return{reducer:t.pop(),types:t.map(n=>n.type)}}function lx(t,...i){let e=new Map;for(let n of i)for(let r of n.types){let o=e.get(r);if(o){let s=(l,c)=>n.reducer(o(l,c),c);e.set(r,s)}else e.set(r,n.reducer)}return function(n=t,r){let o=e.get(r.type);return o?o(n,r):n}}var ig=[`*`];var rg=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var og=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var sg=new A(`MAT_CARD_CONFIG`);var _x=(()=>{class t{appearance;constructor(){let e=T(sg,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,r){n&2&&gh$1(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:ig,decls:1,vars:0,template:function(n,r){n&1&&(kD$1(),LD(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return t})();var bx=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var vx=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var yx=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var Sx=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:og,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(n,r){n&1&&(kD$1(rg),LD(0),Xc$1(1,`div`,0),LD(2,1),el$1(),LD(3,2))},encapsulation:2})}return t})();var Dx=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[re]})}return t})();var ag=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return t})();var lg={passive:!0};var au=(()=>{class t{_platform=T(H);_ngZone=T(Re$1);_renderer=T(br$1).createRenderer(null,null);_styleLoader=T(ve);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Ue;this._styleLoader.load(ag);let n=Ce(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new Q,s=`cdk-text-field-autofilled`,l=u=>{u.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(s)?(n.classList.add(s),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(s)&&(n.classList.remove(s),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,l,lg)));return this._monitoredElements.set(n,{subject:o,unlisten:c}),o}stopMonitoring(e){let n=Ce(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var lu=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({})}return t})();var cu=new A(`MAT_INPUT_VALUE_ACCESSOR`);var cg=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var dg=new A(`MAT_INPUT_CONFIG`);var nN=(()=>{class t{_elementRef=T(Mr$1);_platform=T(H);ngControl=T(Be,{optional:!0,self:!0});_autofillMonitor=T(au);_ngZone=T(Re$1);_formField=T(Un,{optional:!0});_renderer=T(Xa$1);_uid=T(we).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=T(dg,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=en(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ot.required)??!1}set required(e){this._required=en(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Lo().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=en(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Lo().has(e));constructor(){let e=T(Kn,{optional:!0}),n=T(Zn,{optional:!0}),r=T(Fr),o=T(cu,{optional:!0,self:!0}),s=T(Rr,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();o?Xo$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ln(r,s||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c===`select`,this._isTextarea=c===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&od$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type===`number`?(n.type=`text`,n.setSelectionRange(0,0),n.type=`number`):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute(`placeholder`,e):n.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){cg.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(n){return new(n||t)};static ɵdir=QE({type:t,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(n,r){n&1&&ih$1(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),n&2&&(rh$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Kp$1(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),gh$1(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},exportAs:[`matInput`],features:[vw([{provide:zn,useExisting:t}]),iy]})}return t})();var iN=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[Qn,Qn,lu,re]})}return t})();var ug=[`determinateSpinner`];function fg(t,i){if(t&1&&(Qu(),Mi$1(0,`svg`,11),Xp$1(1,`circle`,12),Jc$1()),t&2){let e=OD$1();Kp$1(`viewBox`,e._viewBox()),dI(),hh$1(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Kp$1(`r`,e._circleRadius())}}var hg=new A(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:du})});var du=100;var mg=10;var mN=(()=>{class t{_elementRef=T(Mr$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=T(hg),n=Vo(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=du;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-mg)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||t)};static ɵcmp=UE({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&lh$1(ug,5),n&2){let o;FD(o=jD())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Kp$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),KD(`mat-`+r.color),hh$1(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),gh$1(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Uj],diameter:[2,`diameter`,`diameter`,Uj],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Uj]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(Wp$1(0,fg,2,8,`ng-template`,null,0,_w),Mi$1(2,`div`,2,1),Qu(),Mi$1(4,`svg`,3),Xp$1(5,`circle`,4),Jc$1()(),Zu$1(),Mi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),nh$1(9,8),Jc$1(),Mi$1(10,`div`,9),nh$1(11,8),Jc$1(),Mi$1(12,`div`,10),nh$1(13,8),Jc$1()()()),n&2){let o=HD(1);dI(4),Kp$1(`viewBox`,r._viewBox()),dI(),hh$1(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp$1(`r`,r._circleRadius()),dI(4),Jp$1(`ngTemplateOutlet`,o),dI(2),Jp$1(`ngTemplateOutlet`,o),dI(2),Jp$1(`ngTemplateOutlet`,o)}},dependencies:[En],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return t})();var pN=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WE({type:t});static ɵinj=lu$1({imports:[re]})}return t})();var pg={dispatch:!0,functional:!1,useEffectsErrorHandler:!0};var Br=`__@ngrx/effects_create__`;function NN(t,i={}){let e=i.functional?t:t(),n=G(G({},pg),i);return Object.defineProperty(e,Br,{value:n}),e}function gg(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(Br)?t[n][Br].hasOwnProperty(`dispatch`):!1).map(n=>{let r=t[n][Br];return G({propertyName:n},r)})}function _g(t){return gg(t)}function uu(t){return Object.getPrototypeOf(t)}function bg(t){return!!t.constructor&&t.constructor.name!==`Object`&&t.constructor.name!==`Function`}function fu(t){return typeof t==`function`}function vg(t){return t.filter(fu)}function yg(t,i,e){let n=uu(t),o=!!n&&n.constructor.name!==`Object`?n.constructor.name:null;return Lg$1(..._g(t).map(({propertyName:l,dispatch:c,useEffectsErrorHandler:u})=>{let d=typeof t[l]==`function`?t[l]():t[l],h=u?e(d,i):d;return c===!1?h.pipe(us$1()):h.pipe(Gg()).pipe(oe(N=>({effect:t[l],notification:N,propertyName:l,sourceName:o,sourceInstance:t})))}))}var Sg=10;function hu(t,i,e=Sg){return t.pipe(ls$1(n=>(i&&i.handleError(n),e<=1?t:hu(t,i,e-1))))}var MN=(()=>{class t extends _{constructor(e){super(),e&&(this.source=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}static{this.ɵfac=function(n){return new(n||t)(Oe(ui))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function AN(...t){return Hn$1(i=>t.some(e=>typeof e==`string`?e===i.type:e.type===i.type))}var Dg=new A(`@ngrx/effects Effects Error Handler`,{providedIn:`root`,factory:()=>hu});var wg=Kd(`@ngrx/effects/init`);function Eg(t,i){if(t.notification.kind===`N`){let e=t.notification.value;!xg(e)&&i.handleError(new Error(`Effect ${Ng(t)} dispatched an invalid action: ${Mg(e)}`))}}function xg(t){return typeof t!=`function`&&t&&t.type&&typeof t.type==`string`}function Ng({propertyName:t,sourceInstance:i,sourceName:e}){let n=typeof i[t]==`function`;return!!e?`"${e}.${String(t)}${n?`()`:``}"`:`"${String(t)}()"`}function Mg(t){try{return JSON.stringify(t)}catch{return t}}var Ag=`ngrxOnIdentifyEffects`;function Rg(t){return Os(t,Ag)}var Fg=`ngrxOnRunEffects`;function Tg(t){return Os(t,Fg)}var Og=`ngrxOnInitEffects`;function Ig(t){return Os(t,Og)}function Os(t,i){return t&&i in t&&typeof t[i]==`function`}var mu=(()=>{class t extends Q{constructor(e,n){super(),this.errorHandler=e,this.effectsErrorHandler=n}addEffects(e){this.next(e)}toActions(){return this.pipe(qg(e=>bg(e)?uu(e):e),qe(e=>e.pipe(qg(kg))),qe(e=>{return Lg$1(e.pipe(Wl(o=>Pg(this.errorHandler,this.effectsErrorHandler)(o)),oe(o=>(Eg(o,this.errorHandler),o.notification)),Hn$1(o=>o.kind===`N`&&o.value!=null),Hg()),e.pipe(tn$1(1),Hn$1(Ig),oe(o=>o.ngrxOnInitEffects())))}))}static{this.ɵfac=function(n){return new(n||t)(Oe(Ye),Oe(Dg))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function kg(t){return Rg(t)?t.ngrxOnIdentifyEffects():``}function Pg(t,i){return e=>{let n=yg(e,t,i);return Tg(e)?e.ngrxOnRunEffects(n):n}}var Lg=(()=>{class t{get isStarted(){return!!this.effectsSubscription}constructor(e,n){this.effectSources=e,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.ɵfac=function(n){return new(n||t)(Oe(mu),Oe(Pt))}}static{this.ɵprov=ae$1({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function RN(...t){let i=t.flat();return Ro$1([vg(i),Eu$1(()=>{T(ci),T(kr,{optional:!0});let n=T(Lg),r=T(mu),o=!n.isStarted;o&&n.start();for(let s of i){let l=fu(s)?T(s):s;r.addEffects(l)}o&&T(Pt).dispatch(wg())})])}export{RN as $,kD as $t,Lh as A,tt as An,cd as At,OD as B,yC as Bn,ft as Bt,Ic as C,rS as Cn,Zn as Ct,Kt as D,sc as Dn,ax as Dt,Kd as E,rx as En,as as Et,NC as F,vt as Fn,di as Ft,Ot as G,zo as Gn,iN as Gt,On as H,yl as Hn,go as Ht,NN as I,vx as In,eS as It,Pr as J,im as Jt,Ph as K,ic as Kt,Nd as L,we as Ln,ei as Lt,Md as M,ui as Mn,cs as Mt,Mm as N,ut as Nn,cu as Nt,Ld as O,si as On,bs as Ot,Mo as P,ve as Pn,dd as Pt,RD as Q,ju as Qt,Nm as R,wl as Rn,en as Rt,ID as S,qi as Sn,Zf as St,In as T,rf as Tn,_x as Tt,Oo as U,yr as Un,gr as Ut,Of as V,yd as Vn,gE as Vt,Op as W,yx as Wn,gs as Wt,Qe as X,jl as Xt,Pt as Y,ix as Yt,Qn as Z,jn as Zt,Fr as _,pN as _n,Wy as _t,Am as a,me as an,Sx as at,H as b,qa as bn,Zc as bt,BE as c,nr as cn,Tr as ct,Di as d,od as dn,VE as dt,kf as en,Rf as et,Do as f,oi as fn,Vl as ft,Fm as g,pE as gn,Wo as gt,Ff as h,ox as hn,Vu as ht,Af as i,mN as in,Sm as it,MN as j,ud as jn,cn as jt,Le as k,ti as kn,bx as kt,Cc as l,nt as ln,Un as lt,Eo as m,or as mn,Vr as mt,AD as n,ls as nn,Rt as nt,As as o,nN as on,TD as ot,Dx as p,om as pn,Vn as pt,Pn as q,ii as qt,AN as r,lx as rn,Si as rt,B0 as s,np as sn,Td as st,$o as t,kh as tn,Ro as tt,Cm as u,oc as un,Uo as ut,Gi as v,pp as vn,Xi as vt,Id as w,re as wn,_s as wt,Ho as x,qf as xn,Zd as xt,Gv as y,ps as yn,Yo as yt,Nr as z,xr as zn,fb as zt};