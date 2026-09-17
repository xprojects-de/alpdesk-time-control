import{$ as Jp$1,$r as wc$1,$t as Xg,A as Fu$1,An as br$1,Ar as qE$1,At as SD$1,B as HD,Bn as eh$1,Br as rl$1,Bt as Um$1,C as Eg$1,Cn as ae,Ct as Q,D as Fj,Dn as bg$1,Dr as ol$1,Dt as Rg,E as Fh$1,En as bc$1,Er as oh$1,Et as Re,F as Gj,Gn as fe,Gr as th$1,Hn as em$1,Hr as rs$1,Ht as VD,I as Gl$1,In as dh$1,Ir as qp,It as Ty,J as Iw,Jn as gc$1,Jr as uh$1,Jt as Wj,Kn as fh$1,L as Gp$1,Ln as dr$1,Lr as qy,M as GE,Mr as qg,Mt as T,N as Ge,Nr as qj,Nt as Ta$1,O as Fn$1,On as bh$1,Or as pe,Ot as Ro$1,P as Gg,Pn as cv,Pr as qm$1,Q as Jg,Qt as Xc$1,R as Gt$1,Rr as rd$1,S as Ee,St as Pu$1,T as Fg,Tr as oe$1,Tt as RD,U as Hn$1,Ur as sh$1,V as Hg,Vn as el$1,Vr as rn$1,Vt as Uy,Wn as fI,Wr as ss$1,Wt as Vj,X as JE$1,Xn as gi$1,Xr as us$1,Y as JD,Yn as gh$1,Yt as Wy,Z as Jc$1,Zr as uu$1,Zt as Xa$1,_ as Co,_n as _,_r as mD,_t as Nw,an as Yg,ar as jh$1,br as mt,bt as Pg,c as A,ci as zg,cn as Yu,ct as Mi$1,d as BD,dn as Zc$1,dr as ko$1,dt as My,ei as wg$1,er as id$1,f as Bi$1,fn as Zg,fr as kr,ft as N,gn as Zu$1,gr as lw,gt as Nr$1,h as Bv,hn as Zt$1,hr as ls$1,ht as Nn$1,i as $m$1,ii as xn$1,in as Ye,ir as jg,it as Lg,j as G,jr as qe$1,k as Fp$1,kn as bp$1,li as zj,ln as Z$1,lr as kg,lt as Mr$1,m as Bn$1,mr as lh$1,n as $i$1,ni as xD$1,nn as Xp$1,nr as j,oi as yg$1,on as Yo$1,or as jj,ot as Mg$1,p as Bj,pr as ky,qn as gD,qr as tn$1,r as $j,rn as YE,rr as jD,rt as LD,s as $y,si as z,sn as Ys,t as $g,ti as wr$1,tn as Xo$1,tr as iy,tt as Kg,u as Aw,ui as zl$1,un as ZE$1,vn as _D,vr as mh$1,vt as Oe,wr as od$1,wt as Qg,xn as _n$1,y as Du$1,yn as _e,yr as mi$1,yt as PD,z as Gy,zr as rh$1,zt as Uj}from"./chunk-Bh_Ot5vk.js";var Ca=null;function Te(){return Ca}function Yr(t){Ca??=t}var bn=class{};var Ht=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:()=>T(wa),providedIn:`platform`})}return t})();var wa=(()=>{class t extends Ht{_location;_history;_doc=T(dr$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Te().getBaseHref(this._doc)}onPopState(e){let i=Te().getGlobalEventTarget(this._doc,`window`);return i.addEventListener(`popstate`,e,!1),()=>i.removeEventListener(`popstate`,e)}onHashChange(e){let i=Te().getGlobalEventTarget(this._doc,`window`);return i.addEventListener(`hashchange`,e,!1),()=>i.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function Na(t,n){return t?n?t.endsWith(`/`)?n.startsWith(`/`)?t+n.slice(1):t+n:n.startsWith(`/`)?t+n:`${t}/${n}`:t:n}function Ea(t){let n=t.search(/#|\?|$/);return t[n-1]===`/`?t.slice(0,n-1)+t.slice(n):t}function gt(t){return t&&t[0]!==`?`?`?${t}`:t}var mi=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:()=>T(fu),providedIn:`root`})}return t})();var uu=new A(``);var fu=(()=>{class t extends mi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??T(dr$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Na(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+gt(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+gt(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(i){return new(i||t)(Oe(Ht),Oe(uu,8))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var hi=(()=>{class t{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=pu(Ea(xa(i))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=``){return this.path()==this.normalize(e+gt(i))}normalize(e){return t.stripTrailingSlash(hu(this._basePath,xa(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i=``,r=null){this._locationStrategy.pushState(r,``,e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(i)),r)}replaceState(e,i=``,r=null){this._locationStrategy.replaceState(r,``,e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=gt;static joinWithSlash=Na;static stripTrailingSlash=Ea;static ɵfac=function(i){return new(i||t)(Oe(mi))};static ɵprov=ae({token:t,factory:()=>mu(),providedIn:`root`})}return t})();function mu(){return new hi(Oe(mi))}function hu(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:n}function xa(t){return t.replace(/\/index\.html$/,``)}function pu(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ge=(function(t){return t[t.Format=0]=`Format`,t[t.Standalone=1]=`Standalone`,t})(ge||{});var U=(function(t){return t[t.Narrow=0]=`Narrow`,t[t.Abbreviated=1]=`Abbreviated`,t[t.Wide=2]=`Wide`,t[t.Short=3]=`Short`,t})(U||{});var xe=(function(t){return t[t.Short=0]=`Short`,t[t.Medium=1]=`Medium`,t[t.Long=2]=`Long`,t[t.Full=3]=`Full`,t})(xe||{});var lt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Aa(t){return xD$1(t)[gc$1.LocaleId]}function Ra(t,n,e){let i=xD$1(t);return Ie(Ie([i[gc$1.DayPeriodsFormat],i[gc$1.DayPeriodsStandalone]],n),e)}function Fa(t,n,e){let i=xD$1(t);return Ie(Ie([i[gc$1.DaysFormat],i[gc$1.DaysStandalone]],n),e)}function Oa(t,n,e){let i=xD$1(t);return Ie(Ie([i[gc$1.MonthsFormat],i[gc$1.MonthsStandalone]],n),e)}function Ta(t,n){let i=xD$1(t)[gc$1.Eras];return Ie(i,n)}function _n(t,n){return Ie(xD$1(t)[gc$1.DateFormat],n)}function vn(t,n){return Ie(xD$1(t)[gc$1.TimeFormat],n)}function yn(t,n){let i=xD$1(t)[gc$1.DateTimeFormat];return Ie(i,n)}function Sn(t,n){let e=xD$1(t),i=e[gc$1.NumberSymbols][n];if(typeof i>`u`){if(n===lt.CurrencyDecimal)return e[gc$1.NumberSymbols][lt.Decimal];if(n===lt.CurrencyGroup)return e[gc$1.NumberSymbols][lt.Group]}return i}function Ia(t){if(!t[gc$1.ExtraData])throw new N(2303,!1)}function ka(t){let n=xD$1(t);return Ia(n),(n[gc$1.ExtraData][2]||[]).map(i=>typeof i==`string`?Xr(i):[Xr(i[0]),Xr(i[1])])}function Pa(t,n,e){let i=xD$1(t);Ia(i);return Ie(Ie([i[gc$1.ExtraData][0],i[gc$1.ExtraData][1]],n)||[],e)||[]}function Ie(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<`u`)return t[e];throw new N(2304,!1)}function Xr(t){let[n,e]=t.split(`:`);return{hours:+n,minutes:+e}}var bu=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var pi=Object.create(null);var _u=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var vu=256;function La(t,n,e,i){let r=Au(t);yu(n),n=at(e,n)||n;let s=[],l;for(;n;)if(l=_u.exec(n),l){s=s.concat(l.slice(1));let d=s.pop();if(!d)break;n=d}else{s.push(n);break}let c=r.getTimezoneOffset();i&&(c=Ba(i,c),r=Mu(r,i));let u=``;return s.forEach(d=>{let m=xu(d);u+=m?m(r,e,c):d===`''`?`'`:d.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),u}function yu(t){if(t.length>vu)throw new N(2300,!1)}function yi(t,n,e){let i=new Date(0);return i.setFullYear(t,n,e),i.setHours(0,0,0),i}function at(t,n){let e=Aa(t);if(pi[e]??=Object.create(null),pi[e][n])return pi[e][n];let i=``;switch(n){case`shortDate`:i=_n(t,xe.Short);break;case`mediumDate`:i=_n(t,xe.Medium);break;case`longDate`:i=_n(t,xe.Long);break;case`fullDate`:i=_n(t,xe.Full);break;case`shortTime`:i=vn(t,xe.Short);break;case`mediumTime`:i=vn(t,xe.Medium);break;case`longTime`:i=vn(t,xe.Long);break;case`fullTime`:i=vn(t,xe.Full);break;case`short`:let r=at(t,`shortTime`),o=at(t,`shortDate`);i=gi(yn(t,xe.Short),[r,o]);break;case`medium`:let s=at(t,`mediumTime`),l=at(t,`mediumDate`);i=gi(yn(t,xe.Medium),[s,l]);break;case`long`:let c=at(t,`longTime`),u=at(t,`longDate`);i=gi(yn(t,xe.Long),[c,u]);break;case`full`:let d=at(t,`fullTime`),m=at(t,`fullDate`);i=gi(yn(t,xe.Full),[d,m]);break}return i&&(pi[e][n]=i),i}function gi(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,i){return Object.hasOwn(n,i)?n[i]:e})),t}function Ue(t,n,e=`-`,i,r){let o=``;(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<n;)s=`0`+s;return i&&(s=s.slice(s.length-n)),o+s}function Su(t,n){return Ue(t,3).substring(0,n)}function ce(t,n,e=0,i=!1,r=!1){return function(o,s){let l=Du(t,o);if((e>0||l>-e)&&(l+=e),t===3)l===0&&e===-12&&(l=12);else if(t===6)return Su(l,n);let c=Sn(s,lt.MinusSign);return Ue(l,n,c,i,r)}}function Du(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new N(2301,!1)}}function Y(t,n,e=ge.Format,i=!1){return function(r,o){return Cu(r,o,t,n,e,i)}}function Cu(t,n,e,i,r,o){switch(e){case 2:return Oa(n,r,i)[t.getMonth()];case 1:return Fa(n,r,i)[t.getDay()];case 0:let s=t.getHours(),l=t.getMinutes();if(o){let u=ka(n),d=Pa(n,r,i),m=u.findIndex(v=>{if(Array.isArray(v)){let[w,F]=v,P=s>=w.hours&&l>=w.minutes,W=s<F.hours||s===F.hours&&l<F.minutes;if(w.hours<F.hours){if(P&&W)return!0}else if(P||W)return!0}else if(v.hours===s&&v.minutes===l)return!0;return!1});if(m!==-1)return d[m]}return Ra(n,r,i)[s<12?0:1];case 3:return Ta(n,i)[t.getFullYear()<=0?0:1];default:throw new N(2302,!1)}}function bi(t){return function(n,e,i){let r=-1*i,o=Sn(e,lt.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?`+`:``)+Ue(s,2,o)+Ue(Math.abs(r%60),2,o);case 1:return`GMT`+(r>=0?`+`:``)+Ue(s,1,o);case 2:return`GMT`+(r>=0?`+`:``)+Ue(s,2,o)+`:`+Ue(Math.abs(r%60),2,o);case 3:return i===0?`Z`:(r>=0?`+`:``)+Ue(s,2,o)+`:`+Ue(Math.abs(r%60),2,o);default:throw new N(2310,!1)}}}var wu=0;var vi=4;function Eu(t){let n=yi(t,wu,1).getDay();return yi(t,0,1+(n<=vi?vi:vi+7)-n)}function Va(t){let n=t.getDay(),e=n===0?-3:vi-n;return yi(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Kr(t,n=!1){return function(e,i){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=Va(e),s=Eu(o.getFullYear()),l=o.getTime()-s.getTime();r=1+Math.round(l/6048e5)}return Ue(r,t,Sn(i,lt.MinusSign))}}function _i(t,n=!1){return function(e,i){return Ue(Va(e).getFullYear(),t,Sn(i,lt.MinusSign),n)}}var qr=Object.create(null);function xu(t){if(qr[t])return qr[t];let n;switch(t){case`G`:case`GG`:case`GGG`:n=Y(3,U.Abbreviated);break;case`GGGG`:n=Y(3,U.Wide);break;case`GGGGG`:n=Y(3,U.Narrow);break;case`y`:n=ce(0,1,0,!1,!0);break;case`yy`:n=ce(0,2,0,!0,!0);break;case`yyy`:n=ce(0,3,0,!1,!0);break;case`yyyy`:n=ce(0,4,0,!1,!0);break;case`Y`:n=_i(1);break;case`YY`:n=_i(2,!0);break;case`YYY`:n=_i(3);break;case`YYYY`:n=_i(4);break;case`M`:case`L`:n=ce(1,1,1);break;case`MM`:case`LL`:n=ce(1,2,1);break;case`MMM`:n=Y(2,U.Abbreviated);break;case`MMMM`:n=Y(2,U.Wide);break;case`MMMMM`:n=Y(2,U.Narrow);break;case`LLL`:n=Y(2,U.Abbreviated,ge.Standalone);break;case`LLLL`:n=Y(2,U.Wide,ge.Standalone);break;case`LLLLL`:n=Y(2,U.Narrow,ge.Standalone);break;case`w`:n=Kr(1);break;case`ww`:n=Kr(2);break;case`W`:n=Kr(1,!0);break;case`d`:n=ce(2,1);break;case`dd`:n=ce(2,2);break;case`c`:case`cc`:n=ce(7,1);break;case`ccc`:n=Y(1,U.Abbreviated,ge.Standalone);break;case`cccc`:n=Y(1,U.Wide,ge.Standalone);break;case`ccccc`:n=Y(1,U.Narrow,ge.Standalone);break;case`cccccc`:n=Y(1,U.Short,ge.Standalone);break;case`E`:case`EE`:case`EEE`:n=Y(1,U.Abbreviated);break;case`EEEE`:n=Y(1,U.Wide);break;case`EEEEE`:n=Y(1,U.Narrow);break;case`EEEEEE`:n=Y(1,U.Short);break;case`a`:case`aa`:case`aaa`:n=Y(0,U.Abbreviated);break;case`aaaa`:n=Y(0,U.Wide);break;case`aaaaa`:n=Y(0,U.Narrow);break;case`b`:case`bb`:case`bbb`:n=Y(0,U.Abbreviated,ge.Standalone,!0);break;case`bbbb`:n=Y(0,U.Wide,ge.Standalone,!0);break;case`bbbbb`:n=Y(0,U.Narrow,ge.Standalone,!0);break;case`B`:case`BB`:case`BBB`:n=Y(0,U.Abbreviated,ge.Format,!0);break;case`BBBB`:n=Y(0,U.Wide,ge.Format,!0);break;case`BBBBB`:n=Y(0,U.Narrow,ge.Format,!0);break;case`h`:n=ce(3,1,-12);break;case`hh`:n=ce(3,2,-12);break;case`H`:n=ce(3,1);break;case`HH`:n=ce(3,2);break;case`m`:n=ce(4,1);break;case`mm`:n=ce(4,2);break;case`s`:n=ce(5,1);break;case`ss`:n=ce(5,2);break;case`S`:n=ce(6,1);break;case`SS`:n=ce(6,2);break;case`SSS`:n=ce(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:n=bi(0);break;case`ZZZZZ`:n=bi(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:n=bi(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:n=bi(2);break;default:return null}return qr[t]=n,n}function Ba(t,n){t=t.replace(/:/g,``);let e=Date.parse(`Jan 01, 1970 00:00:00 `+t)/6e4;return isNaN(e)?n:e}function Nu(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function Mu(t,n,e){let r=t.getTimezoneOffset();return Nu(t,-1*(Ba(n,r)-r))}function Au(t){if(Ma(t))return t;if(typeof t==`number`&&!isNaN(t))return new Date(t);if(typeof t==`string`){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,s=1]=t.split(`-`).map(l=>+l);return yi(r,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let i;if(i=t.match(bu))return Ru(i)}let n=new Date(t);if(!Ma(n))throw new N(2311,!1);return n}function Ru(t){let n=new Date(0),e=0,i=0,r=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),i=Number(t[9]+t[11])),r.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,l=Number(t[5]||0)-i,c=Number(t[6]||0),u=Math.floor(parseFloat(`0.`+(t[7]||0))*1e3);return o.call(n,s,l,c,u),n}function Ma(t){return t instanceof Date&&!isNaN(t.valueOf())}var Dn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=T(Ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static ɵfac=function(i){return new(i||t)(kr(Bi$1))};static ɵdir=ZE$1({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[iy]})}return t})();function ja(t,n){return new N(2100,!1)}var Zr=class{createSubscription(n,e,i){return Fh$1(()=>n.subscribe({next:e,error:i}))}dispose(n){Fh$1(()=>n.unsubscribe())}};var Qr=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}};var Fu=new Qr;var Ou=new Zr;var Tu=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=T(mt);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(Zc$1(e))return Fu;if(Fp$1(e))return Ou;throw ja(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(i){return new(i||t)(kr(Bj,16))};static ɵpipe=YE({name:`async`,type:t,pure:!1})}return t})();var Iu=`mediumDate`;var za=new A(``);var Ua=new A(``);var ku=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,i,r){this.locale=e,this.defaultTimezone=i,this.defaultOptions=r}transform(e,i,r,o){if(e==null||e===``||e!==e)return null;try{let s=i??this.defaultOptions?.dateFormat??Iu,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return La(e,s,o||this.locale,l)}catch(s){throw ja(t,s.message)}}static ɵfac=function(i){return new(i||t)(kr(ol$1,16),kr(za,24),kr(Ua,24))};static ɵpipe=YE({name:`date`,type:t,pure:!0})}return t})();var Ha=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({})}return t})();function Cn(t,n){n=encodeURIComponent(n);for(let e of t.split(`;`)){let i=e.indexOf(`=`),[r,o]=i==-1?[e,``]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch{}return s.length>1&&s[0]===`"`&&s[s.length-1]===`"`&&(s=s.slice(1,-1)),s}return null}var Pu=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Jr=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Oe(Pu),r},providedIn:`root`})}return t})();function i_(t,n,e){return SD$1(t,n,e)}var eo=`browser`;function Ga(t){return t===eo}var wn=class{_doc;constructor(n){this._doc=n}manager};var Di=(()=>{class t extends wn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static ɵfac=function(i){return new(i||t)(Oe(dr$1))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var Ei=new A(``);var ro=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Di));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Di);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static ɵfac=function(i){return new(i||t)(Oe(Ei),Oe(Re))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var to=`ng-app-id`;function Wa(t){for(let n of t)n.remove()}function Ya(t,n){let e=n.createElement(`style`);return e.textContent=t,e}function Bu(t,n,e,i){let r=t.head?.querySelectorAll(`style[${to}="${n}"],link[${to}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(to),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function io(t,n){let e=n.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var oo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,Bu(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Ya);i?.forEach(r=>this.addUsage(r,this.external,io))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Wa(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Wa(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Ya(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,io(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute(`nonce`,this.nonce),e.appendChild(i)}static ɵfac=function(i){return new(i||t)(Oe(dr$1),Oe(rd$1),Oe(qm$1,8),Oe($m$1))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var no={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var so=/%COMP%/g;var Ka=`%COMP%`;var ju=`_nghost-${Ka}`;var zu=`_ngcontent-${Ka}`;var Uu=!0;var Hu=new A(``,{factory:()=>Uu});var $u=new A(``);function Gu(t){return zu.replace(so,t)}function Wu(t){return ju.replace(so,t)}function qa(t,n){return n.map(e=>e.replace(so,t))}var ao=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,l,c=null,u=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=l,this.nonce=c,this.tracingService=u,this.cssVarNamespace=d??``,this.defaultRenderer=new En(e,s,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof wi?r.applyToHost(e):r instanceof xn&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Gt$1.Emulated:o=new wi(c,u,i,this.appId,d,s,l,m,this.cssVarNamespace);break;case Gt$1.ShadowDom:return new Ci(c,e,i,s,l,this.nonce,m,this.cssVarNamespace,u);case Gt$1.ExperimentalIsolatedShadowDom:return new Ci(c,e,i,s,l,this.nonce,m,this.cssVarNamespace);default:o=new xn(c,u,i,d,s,l,m,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(i){return new(i||t)(Oe(ro),Oe(bp$1),Oe(rd$1),Oe(Hu),Oe(dr$1),Oe(Re),Oe(qm$1),Oe(Zt$1,8),Oe($u,8))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();var En=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=``){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(no[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Xa(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=Xa(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new N(-5106,!1);r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n==`string`?this.doc.querySelector(n):n;if(!i)throw new N(-5104,!1);return e||(i.textContent=``),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+`:`+e;let o=no[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=no[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||r&(mi$1.DashCase|mi$1.Important)?n.style.setProperty(e,i,r&mi$1.Important?`important`:``):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||i&mi$1.DashCase?n.style.removeProperty(e):n.style[e]=``}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n==`string`&&(n=Te().getGlobalEventTarget(this.doc,n),!n))throw new N(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e===`__ngUnwrap__`)return n;n(e)===!1&&e.preventDefault()}}};function Xa(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var Ci=class extends En{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,l,c,u){super(n,r,o,l,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=qa(i.id,d).map(v=>v.replace(/%NS%/g,c));for(let v of d){let w=document.createElement(`style`);s&&w.setAttribute(`nonce`,s),w.textContent=v,this.shadowRoot.appendChild(w)}let m=i.getExternalStyles?.();if(m)for(let v of m){let w=io(v,r);s&&w.setAttribute(`nonce`,s),this.shadowRoot.appendChild(w)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var xn=class extends En{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,l,c,u){super(n,o,s,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,m=u?qa(u,d):d;this.styles=m.map(v=>v.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nn$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var wi=class extends xn{contentAttr;hostAttr;constructor(n,e,i,r,o,s,l,c,u){let d=r+`-`+i.id;super(n,e,i,o,s,l,c,u,d),this.contentAttr=Gu(d),this.hostAttr=Wu(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,``)}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,``),i}};var xi=class t extends bn{supportsDOMEvents=!0;static makeCurrent(){Yr(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e===`window`?window:e===`document`?n:e===`body`?n.body:null}getBaseHref(n){let e=Xu();return e==null?null:Ku(e)}resetBaseElement(){Nn=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Cn(document.cookie,n)}};var Nn=null;function Xu(){return Nn=Nn||document.head.querySelector(`base`),Nn?Nn.getAttribute(`href`):null}function Ku(t){return new URL(t,document.baseURI).pathname}var Za=[`alt`,`control`,`meta`,`shift`];var qu={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Zu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var Qa=(()=>{class t extends wn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),l=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Te().onAndCancel(e,s.domEventName,l,o))}static parseEventName(e){let i=e.toLowerCase().split(`.`),r=i.shift();if(i.length===0||!(r===`keydown`||r===`keyup`))return null;let o=t._normalizeKey(i.pop()),s=``,l=i.indexOf(`code`);if(l>-1&&(i.splice(l,1),s=`code.`),Za.forEach(u=>{let d=i.indexOf(u);d>-1&&(i.splice(d,1),s+=u+`.`)}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=qu[e.key]||e.key,o=``;return i.indexOf(`code.`)>-1&&(r=e.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),Za.forEach(s=>{if(s!==r){let l=Zu[s];l(e)&&(o+=s+`.`)}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(i){return new(i||t)(Oe(dr$1))};static ɵprov=ae({token:t,factory:t.ɵfac})}return t})();async function Qu(t,n,e){return $j(G({rootComponent:t},Ju(n,e)))}function Ju(t,n){return{platformRef:n?.platformRef,appProviders:[...of,...t?.providers??[]],platformProviders:rf}}function ef(){xi.makeCurrent()}function tf(){return new Ye}function nf(){return ky(document),document}var rf=[{provide:$m$1,useValue:eo},{provide:od$1,useValue:ef,multi:!0},{provide:dr$1,useFactory:nf}];var of=[{provide:Ys,useValue:`root`},{provide:Ye,useFactory:tf},{provide:Ei,useClass:Di,multi:!0},{provide:Ei,useClass:Qa,multi:!0},ao,{provide:bp$1,useClass:oo},{provide:oo,useExisting:bp$1},ro,{provide:br$1,useExisting:ao},[]];var Qe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n==`string`?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(`:`);if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<`u`&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:`a`})}set(n,e){return this.clone({name:n,value:e,op:`s`})}delete(n,e){return this.clone({name:n,value:e,op:`d`})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case`a`:case`s`:let i=n.value;if(typeof i==`string`&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op===`a`?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case`d`:let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(c=>s.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Mi=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};var Ai=class{encodeKey(n){return Ja(n)}encodeValue(n){return Ja(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function sf(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(r=>{let o=r.indexOf(`=`),[s,l]=o==-1?[n.decodeKey(r),``]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(l),e.set(s,c)}),e}var af=/%(\d[a-f0-9])/gi;var lf={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function Ja(t){return encodeURIComponent(t).replace(af,(n,e)=>lf[e]??n)}function Ni(t){return`${t}`}var ct=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ai,n.fromString){if(n.fromObject)throw new N(2805,!1);this.map=sf(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Ni):[Ni(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:`a`})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:`a`})}):e.push({param:i,value:r,op:`a`})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:`s`})}delete(n,e){return this.clone({param:n,value:e,op:`d`})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+`=`+this.encoder.encodeValue(i)).join(`&`)}).filter(n=>n!==``).join(`&`)}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case`a`:case`s`:let e=n.op===`a`?(this.map.get(n.param)||[]).slice():[];e.push(Ni(n.value)),this.map.set(n.param,e);break;case`d`:if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(Ni(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function cf(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function el(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function tl(t){return typeof Blob<`u`&&t instanceof Blob}function nl(t){return typeof FormData<`u`&&t instanceof FormData}function df(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var Mn=`Content-Type`;var Ri=`Accept`;var ol=`text/plain`;var sl=`application/json`;var al=`${sl}, ${ol}, */*`;var $t=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(cf(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Qe,this.context??=new Mi,!this.params)this.params=new ct,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e,c=``,u=e.indexOf(`#`);u!==-1&&(c=e.substring(u),l=e.substring(0,u));let d=l.indexOf(`?`),m=d===-1?`?`:d<l.length-1?`&`:``;this.urlWithParams=l+m+s+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||el(this.body)||tl(this.body)||nl(this.body)||df(this.body)?this.body:this.body instanceof ct?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nl(this.body)?null:tl(this.body)?this.body.type||null:el(this.body)?null:typeof this.body==`string`?ol:this.body instanceof ct?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?sl:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,l=n.cache||this.cache,c=n.mode||this.mode,u=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer??this.referrer,v=n.integrity||this.integrity,w=n.referrerPolicy||this.referrerPolicy,F=n.transferCache??this.transferCache,P=n.timeout??this.timeout,W=n.body!==void 0?n.body:this.body,$e=n.withCredentials??this.withCredentials,O=n.reportProgress??this.reportProgress,V=n.reportUploadProgress??this.reportUploadProgress,ye=n.reportDownloadProgress??this.reportDownloadProgress,Ve=n.headers||this.headers,ae=n.params||this.params,nt=n.context??this.context;return n.setHeaders!==void 0&&(Ve=Object.keys(n.setHeaders).reduce((ft,Ge)=>ft.set(Ge,n.setHeaders[Ge]),Ve)),n.setParams&&(ae=Object.keys(n.setParams).reduce((ft,Ge)=>ft.set(Ge,n.setParams[Ge]),ae)),new t(e,i,W,{params:ae,headers:Ve,context:nt,reportProgress:O,reportUploadProgress:V,reportDownloadProgress:ye,responseType:r,withCredentials:$e,transferCache:F,keepalive:o,cache:l,priority:s,timeout:P,mode:c,redirect:u,credentials:d,referrer:m,integrity:v,referrerPolicy:w})}};var Ze=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(Ze||{});var Gt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i=`OK`){this.headers=n.headers||new Qe,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}};var An=class t extends Gt{constructor(n={}){super(n)}type=Ze.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var Wt=class t extends Gt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ze.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}};var qe=class extends Gt{name=`HttpErrorResponse`;message;error;ok=!1;constructor(n){super(n,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||`(unknown url)`}`:this.message=`Http failure response for ${n.url||`(unknown url)`}: ${n.status} ${n.statusText}`,this.error=n.error||null}};var ll=200;var uf=204;var ff=/^\)\]\}',?\n/;var cl=new A(``,{factory:()=>null});var Fi=(()=>{class t{fetchImpl=T(co,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(Re);destroyRef=T(pe);maxResponseSize=T(cl);handle(e){return new _(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Ze.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(uo,c=>s.error(new qe({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,i,r){let o=this.createRequestInit(e),s;try{let W=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,G({signal:i},o)));mf(W),r.next({type:Ze.Sent}),s=await W}catch(W){r.error(new qe({error:W,status:W.status??0,statusText:W.statusText,url:e.urlWithParams,headers:W.headers}));return}let l=new Qe(s.headers),c=s.statusText,u=s.url||e.urlWithParams,d=s.status,m=null,v=e.reportProgress||e.reportDownloadProgress;if(v&&r.next(new An({headers:l,status:d,statusText:c,url:u})),s.body){let W=s.headers.get(Mn)??``,$e=s.headers.get(`content-length`),O=$e!==null?Number($e):NaN;this.maxResponseSize!==null&&Number.isFinite(O)&&O>this.maxResponseSize&&(await s.body.cancel(),il(this.maxResponseSize));let V=[],ye=s.body.getReader(),Ve=0,ae,nt,ft=typeof Zone<`u`&&Zone.current,Ge=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await ye.cancel(),Ge=!0;break}let{done:Or,value:Tr}=await ye.read();if(Or)break;if(V.push(Tr),Ve+=Tr.length,this.maxResponseSize!==null&&Ve>this.maxResponseSize&&(await ye.cancel(),il(this.maxResponseSize)),v){nt=e.responseType===`text`?(nt??``)+(ae??=rl(W)).decode(Tr,{stream:!0}):void 0;let As=()=>r.next({type:Ze.DownloadProgress,total:Number.isFinite(O)?O:void 0,loaded:Ve,partialText:nt});ft?ft.run(As):As()}}}),Ge){r.complete();return}let du=this.concatChunks(V,Ve);try{m=this.parseBody(e,du,W,d)}catch(Or){r.error(new qe({error:Or,headers:new Qe(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=m?ll:0);let w=d>=200&&d<300,F=s.redirected,P=s.type;w?(r.next(new Wt({body:m,headers:l,status:d,statusText:c,url:u,redirected:F,responseType:P})),r.complete()):r.error(new qe({error:m,headers:l,status:d,statusText:c,url:u,redirected:F,responseType:P}))}parseBody(e,i,r,o){switch(e.responseType){case`json`:let s=new TextDecoder().decode(i).replace(ff,``);if(s===``)return null;try{return JSON.parse(s)}catch(l){if(o<200||o>=300)return s;throw l}case`text`:return rl(r).decode(i);case`blob`:return new Blob([i],{type:r});case`arraybuffer`:return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r=`include`),e.headers.forEach((o,s)=>i[o]=s.join(`,`)),e.headers.has(Ri)||(i[Ri]=al),!e.headers.has(Mn)){let o=e.detectContentTypeHeader();o!==null&&(i[Mn]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var co=class{};function uo(){}function mf(t){t.then(uo,uo)}function il(t){throw new N(-2825,!1)}var hf=/charset=\s*["']?([^;"'\s]+)["']?/i;function rl(t){let n=t.match(hf);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var pf=new A(``,{factory:()=>!0});var gf=`XSRF-TOKEN`;var bf=new A(``,{factory:()=>gf});var _f=`X-XSRF-TOKEN`;var vf=new A(``,{factory:()=>_f});var yf=(()=>{class t{cookieName=T(bf);doc=T(dr$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Cn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var dl=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Oe(yf),r},providedIn:`root`})}return t})();function ul(t,n){if(!T(pf)||t.method===`GET`||t.method===`HEAD`)return n(t);try{let r=T(Ht).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=T(dl).getToken(),i=T(vf);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function Sf(t,n){return n(t)}function Df(t,n,e){return(i,r)=>ko$1(e,()=>n(i,o=>t(o,r)))}var mo=new A(``,{factory:()=>[ul]});var fl=new A(``);var ml=new A(``,{factory:()=>!0});var Ti=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Oe(Fi),r},providedIn:`root`})}return t})();var Oi=(()=>{class t{backend;injector;chain=null;pendingTasks=T(Ta$1);contributeToStability=T(ml);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(Ii,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(fl,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(mo),...s]));this.chain=l.reduceRight((c,u)=>Df(c,u,this.injector),Sf)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Fh$1(()=>i(e,o=>this.backend.handle(o))).pipe($g(r))}else return Fh$1(()=>i(e,r=>this.backend.handle(r)))}static ɵfac=function(i){return new(i||t)(Oe(Ti),Oe(fe))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ii=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Oe(Oi),r},providedIn:`root`})}return t})();function lo(t,n){return G({body:n},t)}var hl=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof $t)o=e;else{let c;r.headers instanceof Qe?c=r.headers:c=new Qe(r.headers);let u;r.params&&(r.params instanceof ct?u=r.params:u=new ct({fromObject:r.params})),o=new $t(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:u,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||`json`,withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=ss$1(o).pipe(Fg(c=>this.handler.handle(c)));if(e instanceof $t||r.observe===`events`)return s;let l=s.pipe(Hn$1(c=>c instanceof Wt));switch(r.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return l.pipe(oe$1(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new N(2806,!1);return c.body}));case`blob`:return l.pipe(oe$1(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new N(2807,!1);return c.body}));case`text`:return l.pipe(oe$1(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new N(2808,!1);return c.body}));default:return l.pipe(oe$1(c=>c.body))}case`response`:return l;default:throw new N(2809,!1)}}delete(e,i={}){return this.request(`DELETE`,e,i)}get(e,i={}){return this.request(`GET`,e,i)}head(e,i={}){return this.request(`HEAD`,e,i)}jsonp(e,i){return this.request(`JSONP`,e,{params:new ct().append(i,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,i={}){return this.request(`OPTIONS`,e,i)}patch(e,i,r={}){return this.request(`PATCH`,e,lo(r,i))}post(e,i,r={}){return this.request(`POST`,e,lo(r,i))}put(e,i,r={}){return this.request(`PUT`,e,lo(r,i))}static ɵfac=function(i){return new(i||t)(Oe(Ii))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Cf=/^\)\]\}',?\n/;var fo=(()=>{class t{xhrFactory;tracingService=T(Zt$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new N(-2800,!1);let i=this.xhrFactory;return ss$1(null).pipe(wg$1(()=>new _(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((O,V)=>s.setRequestHeader(O,V.join(`,`))),e.headers.has(Ri)||s.setRequestHeader(Ri,al),!e.headers.has(Mn)){let O=e.detectContentTypeHeader();O!==null&&s.setRequestHeader(Mn,O)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();s.responseType=O!==`json`?O:`text`}let l=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let O=s.statusText||`OK`,V=new Qe(s.getAllResponseHeaders()),ye=s.responseURL||e.url;return c=new An({headers:V,status:s.status,statusText:O,url:ye}),c},d=this.maybePropagateTrace(()=>{let{headers:O,status:V,statusText:ye,url:Ve}=u(),ae=null;V!==uf&&(ae=typeof s.response>`u`?s.responseText:s.response),V===0&&(V=ae?ll:0);let nt=V>=200&&V<300;if(e.responseType===`json`&&typeof ae==`string`){let ft=ae;ae=ae.replace(Cf,``);try{ae=ae!==``?JSON.parse(ae):null}catch(Ge){ae=ft,nt&&(nt=!1,ae={error:Ge,text:ae})}}nt?(o.next(new Wt({body:ae,headers:O,status:V,statusText:ye,url:Ve||void 0})),o.complete()):o.error(new qe({error:ae,headers:O,status:V,statusText:ye,url:Ve||void 0}))}),m=this.maybePropagateTrace(O=>{let{url:V}=u(),ye=new qe({error:O,status:s.status||0,statusText:s.statusText||`Unknown Error`,url:V||void 0});o.error(ye)}),v=m;e.timeout&&(v=this.maybePropagateTrace(O=>{let{url:V}=u(),ye=new qe({error:new DOMException(`Request timed out`,`TimeoutError`),status:s.status||0,statusText:s.statusText||`Request timeout`,url:V||void 0});o.error(ye)}));let w=!1,F=this.maybePropagateTrace(O=>{w||(o.next(u()),w=!0);let V={type:Ze.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(V.total=O.total),e.responseType===`text`&&s.responseText&&(V.partialText=s.responseText),o.next(V)}),P=this.maybePropagateTrace(O=>{let V={type:Ze.UploadProgress,loaded:O.loaded};O.lengthComputable&&(V.total=O.total),o.next(V)});s.addEventListener(`load`,d),s.addEventListener(`error`,m),s.addEventListener(`timeout`,v),s.addEventListener(`abort`,m);let W=e.reportProgress||e.reportUploadProgress,$e=e.reportProgress||e.reportDownloadProgress;return $e&&s.addEventListener(`progress`,F),W&&l!==null&&s.upload&&s.upload.addEventListener(`progress`,P),s.send(l),o.next({type:Ze.Sent}),()=>{s.removeEventListener(`error`,m),s.removeEventListener(`abort`,m),s.removeEventListener(`load`,d),s.removeEventListener(`timeout`,v),$e&&s.removeEventListener(`progress`,F),W&&l!==null&&s.upload&&s.upload.removeEventListener(`progress`,P),s.readyState!==s.DONE&&s.abort()}})))}static ɵfac=function(i){return new(i||t)(Oe(Jr))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ki=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(ki||{});function pl(t,n){return{ɵkind:t,ɵproviders:n}}function wf(...t){let n=[hl,Fi,Oi,{provide:Ii,useExisting:Oi},{provide:Ti,useFactory:()=>T(Fi)},{provide:mo,useValue:ul,multi:!0}];for(let e of t)n.push(...e.ɵproviders);return Ro$1(n)}function Ef(t){return pl(ki.Interceptors,t.map(n=>({provide:mo,useValue:n,multi:!0})))}function xf(){return pl(ki.Xhr,[fo,{provide:Ti,useExisting:fo}])}var Pv=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(i){return new(i||t)(Oe(dr$1))};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ho=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=ae({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Oe(Nf),r},providedIn:`root`})}return t})();var Nf=(()=>{class t extends ho{_doc=T(dr$1);sanitize(e,i){if(i==null)return null;switch(e){case Z$1.NONE:return i;case Z$1.HTML:return wc$1(i,`HTML`)?_n$1(i):cv(this._doc,String(i)).toString();case Z$1.STYLE:return wc$1(i,`Style`)?_n$1(i):i;case Z$1.SCRIPT:if(wc$1(i,`Script`))return _n$1(i);throw new N(5200,!1);case Z$1.URL:return wc$1(i,`URL`)?_n$1(i):bc$1(String(i));case Z$1.RESOURCE_URL:if(wc$1(i,`ResourceURL`))return _n$1(i);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return $y(e)}bypassSecurityTrustStyle(e){return Uy(e)}bypassSecurityTrustScript(e){return qy(e)}bypassSecurityTrustUrl(e){return Wy(e)}bypassSecurityTrustResourceUrl(e){return Gy(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Rn(t){return t.buttons===0||t.detail===0}function Fn(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var po;function gl(){if(po==null){let t=typeof document<`u`?document.head:null;po=!!(t&&(t.createShadowRoot||t.attachShadow))}return po}function go(t){if(gl()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function bo(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function me(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var _o;try{_o=typeof Intl<`u`&&Intl.v8BreakIterator}catch{_o=!1}var Z=(()=>{class t{_platformId=T($m$1);isBrowser=this._platformId?Ga(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||_o)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var On;function bl(){if(On==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>On=!0}))}finally{On=On||!1}return On}function Yt(t){return bl()?t:!!t.capture}function Pi(t,n=0){return _l(t)?Number(t):arguments.length===2?n:0}function _l(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ke(t){return t instanceof Mr$1?t.nativeElement:t}var vl=new A(`cdk-input-modality-detector-options`);var yl={ignoreKeys:[18,17,224,91,16]};var Sl=650;var vo={passive:!0,capture:!0};var Dl=(()=>{class t{_platform=T(Z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=me(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Sl||(this._modality.next(Rn(e)?`keyboard`:`mouse`),this._mostRecentTarget=me(e))};_onTouchstart=e=>{if(Fn(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=me(e)};constructor(){let e=T(Re),i=T(dr$1),r=T(vl,{optional:!0});if(this._options=G(G({},yl),r),this.modalityDetected=this._modality.pipe(Kg(1)),this.modalityChanged=this.modalityDetected.pipe(Eg$1()),this._platform.isBrowser){let o=T(br$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,`keydown`,this._onKeydown,vo),o.listen(i,`mousedown`,this._onMousedown,vo),o.listen(i,`touchstart`,this._onTouchstart,vo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Tn=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(Tn||{});var Cl=new A(`cdk-focus-monitor-default-options`);var Li=Yt({passive:!0,capture:!0});var Vi=(()=>{class t{_ngZone=T(Re);_platform=T(Z);_inputModalityDetector=T(Dl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T(dr$1);_stopInputModalityDetector=new Q;constructor(){let e=T(Cl,{optional:!0});this._detectionMode=e?.detectionMode||Tn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=me(e);for(let r=i;r;r=r.parentElement)e.type===`focus`?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=ke(e);if(!this._platform.isBrowser||r.nodeType!==1)return ss$1();let o=go(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let l={checkChildren:i,subject:new Q,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let i=ke(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=ke(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([l,c])=>this._originChanged(l,i,c)):(this._setOrigin(i),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Tn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle(`cdk-focused`,!!i),e.classList.toggle(`cdk-touch-focused`,i===`touch`),e.classList.toggle(`cdk-keyboard-focused`,i===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,i===`mouse`),e.classList.toggle(`cdk-program-focused`,i===`program`)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&i,this._detectionMode===Tn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Sl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=me(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Li),i.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Li)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(bg$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Li),i.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Li),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!i||i===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Mf=(()=>{class t{_elementRef=T(Mr$1);_focusMonitor=T(Vi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ge;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Bi=new WeakMap;var Ne=(()=>{class t{_appRef;_injector=T(Ee);_environmentInjector=T(fe);load(e){let i=this._appRef=this._appRef||this._injector.get($i$1),r=Bi.get(i);r||(r={loaders:new Set,refs:[]},Bi.set(i,r),i.onDestroy(()=>{Bi.get(i)?.refs.forEach(o=>o.destroy()),Bi.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Gj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Xt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})();var ji;function Af(){if(ji===void 0&&(ji=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{ji=t.trustedTypes.createPolicy(`angular#components`,{createHTML:n=>n})}catch(n){console.error(n)}}return ji}function Rf(t){return Af()?.createHTML(t)||t}function wl(t,n,e){t.innerHTML=Rf(e.sanitize(Z$1.HTML,n)||``)}function At(t){return Array.isArray(t)?t:[t]}var El=new Set;var Rt;var zi=(()=>{class t{_platform=T(Z);_nonce=T(qm$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Of}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ff(e,this._nonce),this._matchMedia(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function Ff(t,n){if(!El.has(t))try{Rt||(Rt=document.createElement(`style`),n&&Rt.setAttribute(`nonce`,n),Rt.setAttribute(`type`,`text/css`),document.head.appendChild(Rt)),Rt.sheet&&(Rt.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),El.add(t))}catch(e){console.error(e)}}function Of(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var yo=(()=>{class t{_mediaMatcher=T(zi);_zone=T(Re);_queries=new Map;_destroySubject=new Q;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return xl(At(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let o=yg$1(xl(At(e)).map(s=>this._registerQuery(s).observable));return o=rn$1(o.pipe(tn$1(1)),o.pipe(Kg(1),jg(0))),o.pipe(oe$1(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new _(s=>{let l=c=>this._zone.run(()=>s.next(c));return i.addListener(l),()=>{i.removeListener(l)}}).pipe(zl$1(i),oe$1(({matches:s})=>({query:e,matches:s})),bg$1(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function xl(t){return t.map(n=>n.split(`,`)).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function Tf(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Nl=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Ml=(()=>{class t{_mutationObserverFactory=T(Nl);_observedElements=new Map;_ngZone=T(Re);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=ke(e);return new _(r=>{let s=this._observeElement(i).pipe(oe$1(l=>l.filter(c=>!Tf(c))),Hn$1(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{r.next(l)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new Q,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Ly=(()=>{class t{_contentObserver=T(Ml);_elementRef=T(Mr$1);event=new Ge;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Pi(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(jg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Uj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var Ui=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({providers:[Nl]})}return t})();var Ol=(()=>{class t{_platform=T(Z);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return kf(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=If(Hf(e));if(i&&(Al(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=Al(e);return e.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!zf(e)?!1:r===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,i){return Uf(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function If(t){try{return t.frameElement}catch{return null}}function kf(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function Pf(t){let n=t.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Lf(t){return Bf(t)&&t.type==`hidden`}function Vf(t){return jf(t)&&t.hasAttribute(`href`)}function Bf(t){return t.nodeName.toLowerCase()==`input`}function jf(t){return t.nodeName.toLowerCase()==`a`}function Tl(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let n=t.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function Al(t){if(!Tl(t))return null;let n=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function zf(t){let n=t.nodeName.toLowerCase(),e=n===`input`&&t.type;return e===`text`||e===`password`||n===`select`||n===`textarea`}function Uf(t){return Lf(t)?!1:Pf(t)||Vf(t)||t.hasAttribute(`contenteditable`)||Tl(t)}function Hf(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Hi=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary(`start`);return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary(`end`);return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Bv(n,{injector:this._injector})}};var Il=(()=>{class t{_checker=T(Ol);_ngZone=T(Re);_document=T(dr$1);_injector=T(Ee);constructor(){T(Ne).load(Xt)}create(e,i=!1){return new Hi(e,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var $f=(()=>{class t{_elementRef=T(Mr$1);_focusTrapFactory=T(Il);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T(Z).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=bo(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,Uj],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,Uj]},exportAs:[`cdkTrapFocus`],features:[iy]})}return t})();var kl=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Pl=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Gf=0;var Do=(()=>{class t{_ngZone=T(Re);_defaultOptions=T(Pl,{optional:!0});_liveElement;_document=T(dr$1);_sanitizer=T(ho);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T(kl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]==`number`?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),s==null&&r&&(s=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:wl(this._liveElement,e,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,i=this._document.getElementsByClassName(e),r=this._document.createElement(`div`);for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${Gf++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute(`aria-owns`);s?s.indexOf(e)===-1&&o.setAttribute(`aria-owns`,s+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var bt=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(bt||{});var Rl=`cdk-high-contrast-black-on-white`;var Fl=`cdk-high-contrast-white-on-black`;var So=`cdk-high-contrast-active`;var Ll=(()=>{class t{_platform=T(Z);_hasCheckedHighContrastMode=!1;_document=T(dr$1);_breakpointSubscription;constructor(){this._breakpointSubscription=T(yo).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return bt.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return bt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return bt.BLACK_ON_WHITE}return bt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(So,Rl,Fl),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===bt.BLACK_ON_WHITE?e.add(So,Rl):i===bt.WHITE_ON_BLACK&&e.add(So,Fl)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Wf=(()=>{class t{constructor(){T(Ll)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[Ui]})}return t})();var Yf=200;var $i=class{_letterKeyStream=new Q;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval==`number`?e.debounceInterval:Yf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Xg(e=>this._pressedLetters.push(e)),jg(n),Hn$1(()=>this._pressedLetters.length>0),oe$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Je(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Kt=class{_items;_activeItemIndex=Yo$1(-1);_activeItem=Yo$1(null);_wrap=!1;_typeaheadSubscription=j.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof gi$1?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Xo$1(n)&&(this._effectRef=id$1(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new Q;change=new Q;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new $i(e,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Je(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n==`number`?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Xo$1(this._items)?this._items():this._items instanceof gi$1?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var In=class extends Kt{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Eo=class extends Kt{_origin=`program`;setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var zl=new Map;var Fe=class t{_appId=T(rd$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!==`ng`&&(n+=this._appId);let i=zl.get(n);return i===void 0?i=0:i++,zl.set(n,i),`${n}${e?t._infix+`-`:``}${i}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})};var Hl=` `;function Xf(t,n,e){let i=Wi(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(Hl)))}function Kf(t,n,e){let i=Wi(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(Hl)):t.removeAttribute(n)}function Wi(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var $l=`cdk-describedby-message`;var Gi=`cdk-describedby-host`;var No=0;var R0=(()=>{class t{_platform=T(Z);_document=T(dr$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${No++}`;constructor(){T(Ne).load(Xt),this._id=T(rd$1)+`-`+No++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=xo(i,r);typeof i!=`string`?(Ul(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=xo(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i==`string`){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Gi}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Gi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement(`div`);Ul(r,this._id),r.textContent=e,i&&r.setAttribute(`role`,i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(xo(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(e),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Wi(e,`aria-describedby`).filter(r=>r.indexOf($l)!=0);e.setAttribute(`aria-describedby`,i.join(` `))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);Xf(e,`aria-describedby`,r.messageElement.id),e.setAttribute(Gi,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,Kf(e,`aria-describedby`,r.messageElement.id),e.removeAttribute(Gi)}_isElementDescribedByMessage(e,i){let r=Wi(e,`aria-describedby`),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i==`object`)return!0;let r=i==null?``:`${i}`.trim(),o=e.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function xo(t,n){return typeof t==`string`?`${n||``}/${t}`:t}function Ul(t,n){t.id||(t.id=`${$l}-${n}-${No++}`)}var He=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(He||{});var Yi;var Ft;function Xi(){if(Ft==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Ft=!1,Ft;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Ft=!0;else{let t=Element.prototype.scrollTo;t?Ft=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ft=!1}}return Ft}function qt(){if(typeof document!=`object`||!document)return He.NORMAL;if(Yi==null){let t=document.createElement(`div`),n=t.style;t.dir=`rtl`,n.width=`1px`,n.overflow=`auto`,n.visibility=`hidden`,n.pointerEvents=`none`,n.position=`absolute`;let e=document.createElement(`div`),i=e.style;i.width=`2px`,i.height=`1px`,t.appendChild(e),document.body.appendChild(t),Yi=He.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Yi=t.scrollLeft===0?He.NEGATED:He.INVERTED),t.remove()}return Yi}function Mo(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Zt;var Gl=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function j0(){if(Zt)return Zt;if(typeof document!=`object`||!document)return Zt=new Set(Gl),Zt;let t=document.createElement(`input`);return Zt=new Set(Gl.filter(n=>(t.setAttribute(`type`,n),t.type===n))),Zt}function oe(t){return t==null?``:typeof t==`string`?t:`${t}px`}function Wl(t){return t!=null&&`${t}`!=`false`}function W0(t,n=/\s+/){let e=[];if(t!=null){let i=Array.isArray(t)?t:`${t}`.split(n);for(let r of i){let o=`${r}`.trim();o&&e.push(o)}}return e}var q0={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var qf=new A(`MATERIAL_ANIMATIONS`);var Yl=null;function Ao(){return T(qf,{optional:!0})?.animationsDisabled||T(Um$1,{optional:!0})===`NoopAnimations`?`di-disabled`:(Yl??=T(zi).matchMedia(`(prefers-reduced-motion)`).matches,Yl?`reduced-motion`:`enabled`)}function Pe(){return Ao()!==`enabled`}var Le=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(Le||{});var Ro=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Le.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Xl=Yt({passive:!0,capture:!0});var Fo=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Xl)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Xl)))}_delegateEventHandler=n=>{let e=me(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}};var kn={enterDuration:225,exitDuration:150};var Zf=800;var Kl=Yt({passive:!0,capture:!0});var ql=[`mousedown`,`touchstart`];var Zl=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Qf=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})();var Pn=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Fo;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ke(i)),o&&o.get(Ne).load(Qf)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=G(G({},kn),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||Jf(n,e,r),l=n-r.left,c=e-r.top,u=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${l-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),v=m.transitionProperty,w=m.transitionDuration,F=v===`none`||w===`0s`||w===`0s, 0s`||r.width===0&&r.height===0,P=new Ro(this,d,i,F);d.style.transform=`scale3d(1, 1, 1)`,P.state=Le.FADING_IN,i.persistent||(this._mostRecentTransientRipple=P);let W=null;return!F&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let $e=()=>{W&&(W.fallbackTimer=null),clearTimeout(V),this._finishRippleTransition(P)},O=()=>this._destroyRipple(P),V=setTimeout(O,u+100);d.addEventListener(`transitionend`,$e),d.addEventListener(`transitioncancel`,O),W={onTransitionEnd:$e,onTransitionCancel:O,fallbackTimer:V}}),this._activeRipples.set(P,W),(F||!u)&&this._finishRippleTransition(P),P}fadeOutRipple(n){if(n.state===Le.FADING_OUT||n.state===Le.HIDDEN)return;let e=n.element,i=G(G({},kn),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity=`0`,n.state=Le.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ke(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ql.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Zl.forEach(e=>{this._triggerElement.addEventListener(e,this,Kl)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Le.FADING_IN?this._startFadeOutTransition(n):n.state===Le.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Le.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Le.HIDDEN,e!==null&&(n.element.removeEventListener(`transitionend`,e.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Rn(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Zf;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Fn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Le.VISIBLE||n.config.terminateOnPointerUp&&n.state===Le.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ql.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Zl.forEach(e=>n.removeEventListener(e,this,Kl)),this._pointerUpEventsRegistered=!1))}};function Jf(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Oo=new A(`mat-ripple-global-options`);var Ql=(()=>{class t{_elementRef=T(Mr$1);_animationsDisabled=Pe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T(Re),i=T(Z),r=T(Oo,{optional:!0}),o=T(Ee);this._globalOptions=r||{},this._rippleRenderer=new Pn(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:G(G(G({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,i,G(G({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,G(G({},this.rippleConfig),e))}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(i,r){i&2&&mh$1(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var Jl=(()=>{class t{_animationsDisabled=Pe();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(i,r){i&2&&mh$1(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return t})();var Ki=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();var em=[`text`];var tm=[[[`mat-icon`]],`*`];var nm=[`mat-icon`,`*`];function im(t,n){if(t&1&&eh$1(0,`mat-pseudo-checkbox`,1),t&2){let e=RD();Xp$1(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function rm(t,n){if(t&1&&eh$1(0,`mat-pseudo-checkbox`,3),t&2)Xp$1(`disabled`,RD().disabled)}function om(t,n){if(t&1&&(Mi$1(0,`span`,4),lw(1),Jc$1()),t&2){let e=RD();fI(),rl$1(`(`,e.group.label,`)`)}}var Io=new A(`MAT_OPTION_PARENT_COMPONENT`);var ko=new A(`MatOptgroup`);var To=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var Qi=(()=>{class t{_element=T(Mr$1);_changeDetectorRef=T(Bj);_parent=T(Io,{optional:!0});group=T(ko,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=T(Fe).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Yo$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ge;_text;_stateChanges=new Q;constructor(){let e=T(Ne);e.load(Ki),e.load(Xt),this._signalDisableRipple=!!this._parent&&Xo$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Je(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new To(this,e))}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-option`]],viewQuery:function(i,r){if(i&1&&uh$1(em,7),i&2){let o;jD(o=VD())&&(r._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(i,r){i&1&&sh$1(`click`,function(){return r._selectViaInteraction()})(`keydown`,function(s){return r._handleKeydown(s)}),i&2&&(oh$1(`id`,r.id),Jp$1(`aria-selected`,r.selected)(`aria-disabled`,r.disabled.toString()),mh$1(`mdc-list-item--selected`,r.selected)(`mat-mdc-option-multiple`,r.multiple)(`mat-mdc-option-active`,r.active)(`mdc-list-item--disabled`,r.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Uj]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:nm,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(i,r){i&1&&(LD(tm),gD(0,im,1,2,`mat-pseudo-checkbox`,1),PD(1),Mi$1(2,`span`,2,0),PD(4,1),Jc$1(),gD(5,rm,1,1,`mat-pseudo-checkbox`,3),gD(6,om,2,1,`span`,4),eh$1(7,`div`,5)),i&2&&(mD(r.multiple?0:-1),fI(5),mD(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),fI(),mD(r.group&&r.group._inert?6:-1),fI(),Xp$1(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disabled||r.disableRipple))},dependencies:[Jl,Ql],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return t})();function ec(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function tc(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var sm=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T(dr$1)});var am=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nc(t){let n=t?.toLowerCase()||``;return n===`auto`&&typeof navigator<`u`&&navigator?.language?am.test(navigator.language)?`rtl`:`ltr`:n===`rtl`?`rtl`:`ltr`}var et=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Yo$1(`ltr`);change=new Ge;constructor(){let e=T(sm,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nc(i||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var se=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({})}return t})();var Po=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new _(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Hn$1(e=>e.some(i=>i.target===n)),Yg({bufferSize:1,refCount:!0}),bg$1(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var ic=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=T(Re);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Po(r)),this._observers.get(r).observe(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var lm=[`notch`];var cm=[`*`];var rc=[`iconPrefixContainer`];var oc=[`textPrefixContainer`];var sc=[`iconSuffixContainer`];var ac=[`textSuffixContainer`];var dm=[`textField`];var um=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var fm=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function mm(t,n){t&1&&eh$1(0,`span`,21)}function hm(t,n){if(t&1&&(Mi$1(0,`label`,20),PD(1,1),gD(2,mm,1,0,`span`,21),Jc$1()),t&2){let e=RD(2);Xp$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Jp$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),fI(2),mD(!e.hideRequiredMarker&&e._control.required?2:-1)}}function pm(t,n){if(t&1&&gD(0,hm,3,5,`label`,20),t&2)mD(RD()._hasFloatingLabel()?0:-1)}function gm(t,n){t&1&&eh$1(0,`div`,7)}function bm(t,n){}function _m(t,n){if(t&1&&Gp$1(0,bm,0,0,`ng-template`,13),t&2){RD(2);Xp$1(`ngTemplateOutlet`,BD(1))}}function vm(t,n){if(t&1&&(Mi$1(0,`div`,9),gD(1,_m,1,1,null,13),Jc$1()),t&2){let e=RD();Xp$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),fI(),mD(e._forceDisplayInfixLabel()?-1:1)}}function ym(t,n){t&1&&(Mi$1(0,`div`,10,2),PD(2,2),Jc$1())}function Sm(t,n){t&1&&(Mi$1(0,`div`,11,3),PD(2,3),Jc$1())}function Dm(t,n){}function Cm(t,n){if(t&1&&Gp$1(0,Dm,0,0,`ng-template`,13),t&2){RD();Xp$1(`ngTemplateOutlet`,BD(1))}}function wm(t,n){t&1&&(Mi$1(0,`div`,14,4),PD(2,4),Jc$1())}function Em(t,n){t&1&&(Mi$1(0,`div`,15,5),PD(2,5),Jc$1())}function xm(t,n){t&1&&eh$1(0,`div`,16)}function Nm(t,n){t&1&&(Mi$1(0,`div`,18),PD(1,6),Jc$1())}function Mm(t,n){if(t&1&&(Mi$1(0,`mat-hint`,22),lw(1),Jc$1()),t&2){let e=RD(2);Xp$1(`id`,e._hintLabelId),fI(),bh$1(e.hintLabel)}}function Am(t,n){if(t&1&&(Mi$1(0,`div`,19),gD(1,Mm,2,2,`mat-hint`,22),PD(2,7),eh$1(3,`div`,23),PD(4,8),Jc$1()),t&2){let e=RD();fI(),mD(e.hintLabel?1:-1)}}var Lo=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-label`]]})}return t})();var hc=new A(`MatError`);var Rm=(()=>{class t{id=T(Fe).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&oh$1(`id`,r.id)},inputs:{id:`id`},features:[Iw([{provide:hc,useExisting:t}])]})}return t})();var Vo=(()=>{class t{align=`start`;id=T(Fe).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(oh$1(`id`,r.id),Jp$1(`align`,null),mh$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var pc=new A(`MatPrefix`);var Fm=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Iw([{provide:pc,useExisting:t}])]})}return t})();var gc=new A(`MatSuffix`);var Om=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Iw([{provide:gc,useExisting:t}])]})}return t})();var bc=new A(`FloatingLabelParent`);var lc=(()=>{class t{_elementRef=T(Mr$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=T(ic);_ngZone=T(Re);_parent=T(bc);_resizeSubscription=new j;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Tm(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&mh$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function Tm(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var cc=`mdc-line-ripple--active`;var Ji=`mdc-line-ripple--deactivating`;var dc=(()=>{class t{_elementRef=T(Mr$1);_cleanupTransitionEnd;constructor(){let e=T(Re),i=T(Xa$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ji),e.add(cc)}deactivate(){this._elementRef.nativeElement.classList.add(Ji)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ji);e.propertyName===`opacity`&&r&&i.remove(cc,Ji)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var uc=(()=>{class t{_elementRef=T(Mr$1);_ngZone=T(Re);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&uh$1(lm,5),i&2){let o;jD(o=VD())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&mh$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:cm,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(LD(),th$1(0,`div`,1),Xc$1(1,`div`,2,0),PD(3),el$1(),th$1(4,`div`,3))},encapsulation:2})}return t})();var Bo=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t})}return t})();var jo=new A(`MatFormField`);var Im=new A(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var fc=`fill`;var km=`auto`;var mc=`fixed`;var Pm=`translateY(-50%)`;var _c=(()=>{class t{_elementRef=T(Mr$1);_changeDetectorRef=T(Bj);_platform=T(Z);_idGenerator=T(Fe);_ngZone=T(Re);_defaults=T(Im,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=jj(`iconPrefixContainer`);_textPrefixContainerSignal=jj(`textPrefixContainer`);_iconSuffixContainerSignal=jj(`iconSuffixContainer`);_textSuffixContainerSignal=jj(`textSuffixContainer`);_prefixSuffixContainers=Aw(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vj(Lo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Wl(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||km}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||fc;this._appearanceSignal.set(i)}_appearanceSignal=Yo$1(fc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||mc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||mc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Pe();constructor(){let e=this._defaults,i=T(et);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),id$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Aw(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(zl$1([void 0,void 0]),oe$1(()=>[i.errorState,i.userAriaDescribedBy]),zg(),Hn$1(([[o,s],[l,c]])=>o!==l||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(bg$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Lg(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){Wj({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Aw(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,s=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Pm} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+l+c+u]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(dh$1(o,r._labelChild,Lo,5),lh$1(o,Bo,5)(o,pc,5)(o,gc,5)(o,hc,5)(o,Vo,5)),i&2){HD();let s;jD(s=VD())&&(r._formFieldControl=s.first),jD(s=VD())&&(r._prefixChildren=s),jD(s=VD())&&(r._suffixChildren=s),jD(s=VD())&&(r._errorChildren=s),jD(s=VD())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(fh$1(r._iconPrefixContainerSignal,rc,5)(r._textPrefixContainerSignal,oc,5)(r._iconSuffixContainerSignal,sc,5)(r._textSuffixContainerSignal,ac,5),uh$1(dm,5)(rc,5)(oc,5)(sc,5)(ac,5)(lc,5)(uc,5)(dc,5)),i&2){HD(4);let o;jD(o=VD())&&(r._textField=o.first),jD(o=VD())&&(r._iconPrefixContainer=o.first),jD(o=VD())&&(r._textPrefixContainer=o.first),jD(o=VD())&&(r._iconSuffixContainer=o.first),jD(o=VD())&&(r._textSuffixContainer=o.first),jD(o=VD())&&(r._floatingLabel=o.first),jD(o=VD())&&(r._notchedOutline=o.first),jD(o=VD())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&mh$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Iw([{provide:jo,useExisting:t},{provide:bc,useExisting:t}])],ngContentSelectors:fm,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(LD(um),Gp$1(0,pm,1,1,`ng-template`,null,0,Nw),Mi$1(2,`div`,6,1),sh$1(`click`,function(s){return r._control.onContainerClick(s)}),gD(4,gm,1,0,`div`,7),Mi$1(5,`div`,8),gD(6,vm,2,2,`div`,9),gD(7,ym,3,0,`div`,10),gD(8,Sm,3,0,`div`,11),Mi$1(9,`div`,12),gD(10,Cm,1,1,null,13),PD(11),Jc$1(),gD(12,wm,3,0,`div`,14),gD(13,Em,3,0,`div`,15),Jc$1(),gD(14,xm,1,0,`div`,16),Jc$1(),Mi$1(15,`div`,17),gD(16,Nm,2,0,`div`,18)(17,Am,5,1,`div`,19),Jc$1()),i&2){let o;fI(2),mh$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),fI(2),mD(!r._hasOutline()&&!r._control.disabled?4:-1),fI(2),mD(r._hasOutline()?6:-1),fI(),mD(r._hasIconPrefix?7:-1),fI(),mD(r._hasTextPrefix?8:-1),fI(2),mD(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),fI(2),mD(r._hasTextSuffix?12:-1),fI(),mD(r._hasIconSuffix?13:-1),fI(),mD(r._hasOutline()?-1:14),fI(),mh$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let s=r._getSubscriptMessageType();fI(),mD((o=s)===`error`?16:o===`hint`?17:-1)}},dependencies:[lc,uc,Dn,dc,Vo],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var Nc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||t)(kr(Xa$1),kr(Mr$1))};static ɵdir=ZE$1({type:t})}return t})();var Mc=(()=>{class t extends Nc{static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,features:[qp]})}return t})();var cr=new A(``);var Lm={provide:cr,useExisting:Co(()=>Ac),multi:!0};function Vm(){let t=Te()?Te().getUserAgent():``;return/android (\d+)/.test(t.toLowerCase())}var Bm=new A(``);var Ac=(()=>{class t extends Nc{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode??=!Vm()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||t)(kr(Xa$1),kr(Mr$1),kr(Bm,8))};static ɵdir=ZE$1({type:t,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&sh$1(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Iw([Lm]),qp]})}return t})();function Wo(t){return t==null||Yo(t)===0}function Yo(t){return t==null?null:Array.isArray(t)||typeof t==`string`?t.length:t instanceof Set?t.size:null}var dt=new A(``);var nn=new A(``);var jm=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Hn=class{static min(n){return Rc(n)}static max(n){return Fc(n)}static required(n){return Oc(n)}static requiredTrue(n){return zm(n)}static email(n){return Um(n)}static minLength(n){return Hm(n)}static maxLength(n){return $m(n)}static pattern(n){return Gm(n)}static nullValidator(n){return tr()}static compose(n){return Vc(n)}static composeAsync(n){return Bc(n)}};function Rc(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Fc(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Oc(t){return Wo(t.value)?{required:!0}:null}function zm(t){return t.value===!0?null:{required:!0}}function Um(t){return Wo(t.value)||jm.test(t.value)?null:{email:!0}}function Hm(t){return n=>{let e=n.value?.length??Yo(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function $m(t){return n=>{let e=n.value?.length??Yo(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Gm(t){if(!t)return tr;let n,e;return typeof t==`string`?(e=``,t.charAt(0)!==`^`&&(e+=`^`),e+=t,t.charAt(t.length-1)!==`$`&&(e+=`$`),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Wo(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function tr(t){return null}function Tc(t){return t!=null}function Ic(t){return Zc$1(t)?_e(t):t}function kc(t){let n={};return t.forEach(e=>{n=e!=null?G(G({},n),e):n}),Object.keys(n).length===0?null:n}function Pc(t,n){return n.map(e=>e(t))}function Wm(t){return!t.validate}function Lc(t){return t.map(n=>Wm(n)?n:e=>n.validate(e))}function Vc(t){if(!t)return null;let n=t.filter(Tc);return n.length==0?null:function(e){return kc(Pc(e,n))}}function Xo(t){return t!=null?Vc(Lc(t)):null}function Bc(t){if(!t)return null;let n=t.filter(Tc);return n.length==0?null:function(e){return kg(Pc(e,n).map(Ic)).pipe(oe$1(kc))}}function Ko(t){return t!=null?Bc(Lc(t)):null}function vc(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function jc(t){return t._rawValidators}function zc(t){return t._rawAsyncValidators}function zo(t){return t?Array.isArray(t)?t:[t]:[]}function nr(t,n){return Array.isArray(t)?t.includes(n):t===n}function yc(t,n){let e=zo(n);return zo(t).forEach(r=>{nr(e,r)||e.push(r)}),e}function Sc(t,n){return zo(n).filter(e=>!nr(t,e))}var ir=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Xo(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ko(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}};var ve=class extends ir{name;get formDirective(){return null}get path(){return null}};var Ln=`VALID`;var er=`INVALID`;var Qt=`PENDING`;var Vn=`DISABLED`;var _t=class{};var rr=class extends _t{value;source;constructor(n,e){super(),this.value=n,this.source=e}};var jn=class extends _t{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}};var zn=class extends _t{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}};var Jt=class extends _t{status;source;constructor(n,e){super(),this.status=n,this.source=e}};var or=class extends _t{source;constructor(n){super(),this.source=n}};var Ot=class extends _t{source;constructor(n){super(),this.source=n}};function qo(t){return(dr(t)?t.validators:t)||null}function Ym(t){return Array.isArray(t)?Xo(t):t||null}function Zo(t,n){return(dr(n)?n.asyncValidators:t)||null}function Xm(t){return Array.isArray(t)?Ko(t):t||null}function dr(t){return t!=null&&!Array.isArray(t)&&typeof t==`object`}function Uc(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new N(1e3,``);if(!$c(i,e))throw new N(1001,``)}function Hc(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new N(-1002,``)})}var en=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Yo$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Fh$1(this.statusReactive)}set status(n){Fh$1(()=>this.statusReactive.set(n))}_status=Aw(()=>this.statusReactive());statusReactive=Yo$1(void 0);get valid(){return this.status===Ln}get invalid(){return this.status===er}get pending(){return this.status===Qt}get disabled(){return this.status===Vn}get enabled(){return this.status!==Vn}errors;get pristine(){return Fh$1(this.pristineReactive)}set pristine(n){Fh$1(()=>this.pristineReactive.set(n))}_pristine=Aw(()=>this.pristineReactive());pristineReactive=Yo$1(!0);get dirty(){return!this.pristine}get touched(){return Fh$1(this.touchedReactive)}set touched(n){Fh$1(()=>this.touchedReactive.set(n))}_touched=Aw(()=>this.touchedReactive());touchedReactive=Yo$1(!1);get untouched(){return!this.touched}_events=new Q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(yc(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(yc(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Sc(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Sc(n,this._rawAsyncValidators))}hasValidator(n){return nr(this._rawValidators,n)}hasAsyncValidator(n){return nr(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(z(G({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new zn(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new zn(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(z(G({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new jn(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new jn(!0,i))}markAsPending(n={}){this.status=Qt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jt(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(z(G({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vn,this.errors=null,this._forEachChild(r=>{r.disable(z(G({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new rr(this.value,i)),this._events.next(new Jt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(G({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ln,this._forEachChild(i=>{i.enable(z(G({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(z(G({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ln||this.status===Qt)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new rr(this.value,e)),this._events.next(new Jt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(z(G({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vn:Ln}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Qt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Ic(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Jt(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Ge,this.statusChanges=new Ge}_calculateStatus(){return this._allControlsDisabled()?Vn:this.errors?er:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Qt)?Qt:this._anyControlsHaveStatus(er)?er:Ln}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new jn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new zn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){dr(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ym(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Xm(this._rawAsyncValidators)}_updateHasRequiredValidator(){Fh$1(()=>this._hasRequired.set(this.hasValidator(Hn.required)))}};function $c(t,n){return Object.hasOwn(t,n)}function Km(t){return t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`}function qm(t,n,e,i){switch(e){case`name`:t.setAttribute(n,e,i);break;case`disabled`:case`readonly`:case`required`:i?t.setAttribute(n,e,``):t.removeAttribute(n,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var Uo=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};function Gc(t){return typeof t==`number`?t:parseFloat(t)}var Qo=(()=>{class t{_validator=tr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):tr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,features:[iy]})}return t})();var Zm={provide:dt,useExisting:Co(()=>Qm),multi:!0};var Qm=(()=>{class t extends Qo{max;inputName=`max`;normalizeInput=e=>Gc(e);createValidator=e=>Fc(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[`input`,`type`,`number`,`max`,``,`formControlName`,``],[`input`,`type`,`number`,`max`,``,`formControl`,``],[`input`,`type`,`number`,`max`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&Jp$1(`max`,r._enabled?r.max:null)},inputs:{max:`max`},standalone:!1,features:[Iw([Zm]),qp]})}return t})();var Jm={provide:dt,useExisting:Co(()=>eh),multi:!0};var eh=(()=>{class t extends Qo{min;inputName=`min`;normalizeInput=e=>Gc(e);createValidator=e=>Rc(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&Jp$1(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[Iw([Jm]),qp]})}return t})();var th={provide:dt,useExisting:Co(()=>Wc),multi:!0};var Wc=(()=>{class t extends Qo{required;inputName=`required`;normalizeInput=Uj;createValidator=e=>Oc;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&Jp$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Iw([th]),qp]})}return t})();var nh=new A(``);var $n=new A(``,{factory:()=>ur});var ur=`always`;function fr(t,n){return[...n.path,t]}function Ho(t,n,e=ur){Jo(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e===`always`)&&n.valueAccessor.setDisabledState?.(t.disabled),rh(t,n),sh(t,n),oh(t,n),ih(t,n)}function Dc(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),ar(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function sr(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function ih(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Jo(t,n){let e=jc(t);n.validator!==null?t.setValidators(vc(e,n.validator)):typeof e==`function`&&t.setValidators([e]);let i=zc(t);n.asyncValidator!==null?t.setAsyncValidators(vc(i,n.asyncValidator)):typeof i==`function`&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();sr(n._rawValidators,r),sr(n._rawAsyncValidators,r)}function ar(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=jc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=zc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return sr(n._rawValidators,i),sr(n._rawAsyncValidators,i),e}function rh(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn===`change`&&Yc(t,n)})}function oh(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn===`blur`&&t._pendingChange&&Yc(t,n),t.updateOn!==`submit`&&t.markAsTouched()})}function Yc(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function sh(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Xc(t,n){Jo(t,n)}function ah(t,n){return ar(t,n)}function Kc(t,n){if(!Object.hasOwn(t,`model`))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function lh(t){return Object.getPrototypeOf(t.constructor)===Mc}function qc(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ch(t,n){if(!n)return null;let e,i,r;return n.forEach(o=>{o.constructor===Ac?e=o:lh(o)?i=o:r=o}),r||i||e||null}function dh(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var Zc={provide:nh,useFactory:()=>{let t=T(tt,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}};var tt=class extends ir{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ot&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ch(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(pe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Bj);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new j,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Ot&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Km(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Wc))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,`touched`,i.touched),this.bindControlProperty(n,r,`dirty`,i.dirty),this.bindControlProperty(n,r,`valid`,i.valid),this.bindControlProperty(n,r,`invalid`,i.invalid),this.bindControlProperty(n,r,`pending`,i.pending),this.bindControlProperty(n,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&qm(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new Uo({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=Aw(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),id$1(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}};var lr=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var SD=(()=>{class t extends lr{constructor(e){super(e)}static ɵfac=function(i){return new(i||t)(kr(tt,2))};static ɵdir=ZE$1({type:t,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&mh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[qp]})}return t})();var DD=(()=>{class t extends lr{constructor(e){super(e)}static ɵfac=function(i){return new(i||t)(kr(ve,10))};static ɵdir=ZE$1({type:t,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&mh$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[qp]})}return t})();var tn=class extends en{constructor(n,e,i){super(qo(e),Zo(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this._find(n)||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){Fh$1(()=>{Hc(this,!0,n),Object.keys(n).forEach(i=>{Uc(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ot(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return $c(this.controls,n)?this.controls[n]:null}};var $o=class extends tn{};var uh={provide:ve,useExisting:Co(()=>es)};var Bn=Promise.resolve();var es=(()=>{class t extends ve{callSetDisabledState;get submitted(){return Fh$1(this.submittedReactive)}_submitted=Aw(()=>this.submittedReactive());submittedReactive=Yo$1(!1);_directives=new Set;form;ngSubmit=new Ge;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new tn({},Xo(e),Ko(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Bn.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Bn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Bn.then(()=>{let i=this._findContainer(e.path),r=new tn({});Xc(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Bn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Bn.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),qc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new or(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||t)(kr(dt,10),kr(nn,10),kr($n,8))};static ɵdir=ZE$1({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&sh$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Iw([uh]),qp]})}return t})();function Cc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function wc(t){return typeof t==`object`&&t!==null&&Object.keys(t).length===2&&`value`in t&&`disabled`in t}var Un=class extends en{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(qo(e),Zo(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(wc(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Fh$1(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ot(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Cc(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Cc(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){wc(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var fh=t=>t instanceof Un;var mh=(()=>{class t extends ve{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return fr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,standalone:!1,features:[qp]})}return t})();var Qc=(()=>{class t extends ve{callSetDisabledState;get submitted(){return Fh$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Aw(()=>this._submittedReactive());_submittedReactive=Yo$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ar(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Dc(e.control||null,e,!1),dh(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,qc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new or(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Dc(i||null,e),fh(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Xc(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&ah(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Jo(this.form,this),this._oldForm&&ar(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||t)(kr(dt,10),kr(nn,10),kr($n,8))};static ɵdir=ZE$1({type:t,features:[qp,iy]})}return t})();var hh={provide:ve,useExisting:Co(()=>ts)};var ts=(()=>{class t extends Qc{form=null;ngSubmit=new Ge;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&sh$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Iw([hh]),qp]})}return t})();var ph={provide:tt,useExisting:Co(()=>gh)};var Ec=Promise.resolve();var gh=(()=>{class t extends tt{_changeDetectorRef;callSetDisabledState;control=new Un;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new Ge;constructor(e,i,r,o,s,l,c,u){super(c,u,o),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Kc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ho(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ho(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ec.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Uj(i);Ec.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?fr(e,this._parent):[e]}static ɵfac=function(i){return new(i||t)(kr(ve,9),kr(dt,10),kr(nn,10),kr(cr,10),kr(Bj,8),kr($n,8),kr(Ee,8),kr(Xa$1,8))};static ɵdir=ZE$1({type:t,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[Iw([ph,Zc]),qp,iy,JE$1(null)]})}return t})();var wD=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return t})();var bh={provide:cr,useExisting:Co(()=>_h),multi:!0};var _h=(()=>{class t extends Mc{writeValue(e){let i=e??``;this.setProperty(`value`,i)}registerOnChange(e){this.onChange=i=>{e(i==``?null:parseFloat(i))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&sh$1(`input`,function(s){return r.onChange(s.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[Iw([bh]),qp]})}return t})();var Go=class extends en{constructor(n,e,i){super(qo(e),Zo(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Fh$1(()=>{Hc(this,!1,n),n.forEach((i,r)=>{Uc(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],z(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ot(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Jc=new A(``);var vh={provide:ve,useExisting:Co(()=>ed)};var ed=(()=>{class t extends mh{name=null;constructor(e,i,r){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_checkParentType(){nd(this._parent)}static ɵfac=function(i){return new(i||t)(kr(ve,13),kr(dt,10),kr(nn,10))};static ɵdir=ZE$1({type:t,selectors:[[``,`formGroupName`,``]],inputs:{name:[0,`formGroupName`,`name`]},standalone:!1,features:[Iw([vh]),qp]})}return t})();var yh={provide:ve,useExisting:Co(()=>td)};var td=(()=>{class t extends ve{_parent;name=null;constructor(e,i,r){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnInit(){nd(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return fr(this.name==null?this.name:this.name.toString(),this._parent)}static ɵfac=function(i){return new(i||t)(kr(ve,13),kr(dt,10),kr(nn,10))};static ɵdir=ZE$1({type:t,selectors:[[``,`formArrayName`,``]],inputs:{name:[0,`formArrayName`,`name`]},standalone:!1,features:[Iw([yh]),qp]})}return t})();function nd(t){return!(t instanceof ed)&&!(t instanceof Qc)&&!(t instanceof td)}var Sh={provide:tt,useExisting:Co(()=>Dh)};var Dh=(()=>{class t extends tt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Ge;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,l,c){super(c,l,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ho(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),Kc(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return fr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(i){return new(i||t)(kr(ve,13),kr(dt,10),kr(nn,10),kr(cr,10),kr(Jc,8),kr(Xa$1,8),kr(Ee,8))};static ɵdir=ZE$1({type:t,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[Iw([Sh,Zc]),qp,iy,JE$1(null)]})}return t})();var id=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({})}return t})();function xc(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ED=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return xc(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new tn(r,o)}record(e,i=null){return new $o(this._reduceControls(e),i)}control(e,i,r){let o={};return this.useNonNullable?(xc(i)?o=i:(o.validators=i,o.asyncValidators=r),new Un(e,z(G({},o),{nonNullable:!0}))):new Un(e,i,r)}array(e,i,r){return new Go(e.map(s=>this._createControl(s)),i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof Un)return e;if(e instanceof en)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var xD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:$n,useValue:e.callSetDisabledState??ur}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[id]})}return t})();var ND=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Jc,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:$n,useValue:e.callSetDisabledState??ur}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[id]})}return t})();var rd=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[Ui,_c,se]})}return t})();var ns=class{};function Ch(t){return t&&typeof t.connect==`function`&&!(t instanceof rs$1)}var ut=(function(t){return t[t.REPLACED=0]=`REPLACED`,t[t.INSERTED=1]=`INSERTED`,t[t.MOVED=2]=`MOVED`,t[t.REMOVED=3]=`REMOVED`,t})(ut||{});var od=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let m=()=>i(s,l,c);u=this._insertView(m,c,e,r(s)),d=u?ut.INSERTED:ut.REPLACED}else c==null?(this._detachAndCacheView(l,e),d=ut.REMOVED):(u=this._moveView(l,c,e,r(s)),d=ut.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=n();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var Gn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Q;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var wh=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var sd=class{applyChanges(n,e,i,r,o){n.forEachOperation((s,l,c)=>{let u,d;if(s.previousIndex==null){let m=i(s,l,c);u=e.createEmbeddedView(m.templateRef,m.context,m.index),d=ut.INSERTED}else c==null?(e.remove(l),d=ut.REMOVED):(u=e.get(l),e.move(u,c),d=ut.MOVED);o&&o({context:u?.context,operation:d,record:s})})}detach(){}};var Eh=20;var Yn=(()=>{class t{_ngZone=T(Re);_platform=T(Z);_renderer=T(br$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Q;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Eh){return this._platform.isBrowser?new _(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Pg(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ss$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Hn$1(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=ke(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var xh=(()=>{class t{elementRef=T(Mr$1);scrollDispatcher=T(Yn);ngZone=T(Re);dir=T(et,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Q;_renderer=T(Xa$1);_cleanupScroll;_elementScrolled=new Q;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&qt()!=He.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),qt()==He.INVERTED?e.left=e.right:qt()==He.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Xi()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i=`left`,r=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?r:i:e==`end`&&(e=s?i:r),s&&qt()==He.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&qt()==He.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return t})();var Nh=20;var vt=(()=>{class t{_platform=T(Z);_listeners;_viewportSize=null;_change=new Q;_document=T(dr$1);constructor(){let e=T(Re),i=T(br$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen(`window`,`resize`,r),i.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0}}change(e=Nh){return e>0?this._change.pipe(Pg(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var fC=new A(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Wn=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({})}return t})();var is=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[se,Wn,se,Wn]})}return t})();var Xn=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var rs=class extends Xn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}};var Kn=class extends Xn{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var os=class extends Xn{element;constructor(n){super(),this.element=n instanceof Mr$1?n.nativeElement:n}};var mr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof rs)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Kn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof os)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var hr=class extends mr{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(xn$1,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||Ee.NULL,o=r.get(fe,i.injector);e=Gj(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var vC=(()=>{class t extends mr{_moduleRef=T(xn$1,{optional:!0});_document=T(dr$1);_viewContainerRef=T(Bi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Ge;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment(`dom-portal`);e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})();static ɵdir=ZE$1({type:t,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[qp]})}return t})();var ad=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({})}return t})();var ld=Xi();function gd(t){return new pr(t.get(vt),t.get(dr$1))}var pr=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=oe(-this._previousScrollPosition.left),n.style.top=oe(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||``,s=r.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),ld&&(i.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ld&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function bd(t,n){return new gr(t.get(Yn),t.get(Re),t.get(vt),n)}var gr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Hn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var qn=class{enable(){}disable(){}attach(){}};function as(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function cd(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function Qn(t,n){return new br(t.get(Yn),t.get(vt),t.get(Re),n)}var br=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();as(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var _d=(()=>{class t{_injector=T(Ee);noop=()=>new qn;close=e=>bd(this._injector,e);block=()=>gd(this._injector);reposition=e=>Qn(this._injector,e);static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Zn=class{positionStrategy;scrollStrategy=new qn;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var _r=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var vd=(()=>{class t{_attachedOverlays=[];_document=T(dr$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var yd=(()=>{class t extends vd{_ngZone=T(Re);_renderer=T(br$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Sd=(()=>{class t extends vd{_platform=T(Z);_ngZone=T(Re);_renderer=T(br$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,`pointerdown`,this._pointerDownListener,r),o.listen(i,`click`,this._clickListener,r),o.listen(i,`auxclick`,this._clickListener,r),o.listen(i,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=me(e)};_clickListener=e=>{let i=me(e),r=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let l=o[s],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(dd(l.overlayElement,i)||dd(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();function dd(t,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Dd=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})();var Cd=(()=>{class t{_platform=T(Z);_containerElement;_document=T(dr$1);_styleLoader=T(Ne);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Mo()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement(`div`);i.classList.add(e),Mo()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Dd)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var ls=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function cs(t){return t&&t.nodeType===1}var ss=new Set;var vr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Q;_attachments=new Q;_detachments=new Q;_positionStrategy;_scrollStrategy;_locationChanges=j.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Q;_outsidePointerEvents=new Q;_afterNextRenderRef;constructor(n,e,i,r,o,s,l,c,u,d=!1,m,v){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=m,this._renderer=v,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),ss.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Bv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),ss.delete(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,ss.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=G(G({},this._config),n),this._updateElementSize()}setDirection(n){this._config=z(G({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=oe(this._config.width),n.height=oe(this._config.height),n.minWidth=oe(this._config.minWidth),n.minHeight=oe(this._config.minHeight),n.maxWidth=oe(this._config.maxWidth),n.maxHeight=oe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;cs(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ls(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=At(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Bv(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var ud=`cdk-overlay-connected-position-bounding-box`;var Mh=/([A-Za-z%]+)$/;function ds(t,n){return new yr(n,t.get(vt),t.get(dr$1),t.get(Z),t.get(Cd))}var yr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Q;_resizeSubscription=j.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(ud),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,r,l),u=this._getOverlayPoint(c,e,l),d=this._getOverlayFit(u,e,i,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,i)){o.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:e})}if(o.length){let l=null,c=-1;for(let u of o){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Tt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ud),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Mr$1?this._origin.nativeElement:cs(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX==`center`)r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;r=i.originX==`start`?s:l}e.left<0&&(r-=e.left);let o;return i.originY==`center`?o=n.top+n.height/2:o=i.originY==`top`?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX==`center`?r=-e.width/2:i.overlayX===`start`?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY==`center`?o=-e.height/2:o=i.overlayY==`top`?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=md(e),{x:s,y:l}=n,c=this._getOffset(r,`x`),u=this._getOffset(r,`y`);c&&(s+=c),u&&(l+=u);let d=0-s,m=s+o.width-i.width,v=0-l,w=l+o.height-i.height,F=this._subtractOverflows(o.width,d,m),P=this._subtractOverflows(o.height,v,w),W=F*P;return{visibleArea:W,isCompletelyWithinViewport:o.width*o.height===W,fitsInViewportVertically:P===o.height,fitsInViewportHorizontally:F==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=fd(this._overlayRef.getConfig().minHeight),l=fd(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,u=n.fitsInViewportHorizontally||l!=null&&l<=o;return c&&u}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=md(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),l=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),u=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=u||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=c||-l:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ah(this._lastScrollVisibility,i)){let r=new _r(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX===`center`?i=`center`:this._isRtl()?i=n.overlayX===`start`?`right`:`left`:i=n.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,l;if(e.overlayY===`top`)s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-l+this._getViewportMarginTop();else{let w=Math.min(i.bottom-n.y+i.top,n.y),F=this._lastBoundingBoxSize.height;o=w*2,s=n.y-w,o>F&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-F/2)}let c=e.overlayX===`start`&&!r||e.overlayX===`end`&&r,u=e.overlayX===`end`&&!r||e.overlayX===`start`&&r,d,m,v;if(u)v=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let w=Math.min(i.right-n.x+i.left,n.x),F=this._lastBoundingBoxSize.width;d=w*2,m=n.x-w,d>F&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-F/2)}return{top:s,left:m,bottom:l,right:v,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=oe(i.width),r.height=oe(i.height),r.top=oe(i.top)||`auto`,r.bottom=oe(i.bottom)||`auto`,r.left=oe(i.left)||`auto`,r.right=oe(i.right)||`auto`,e.overlayX===`center`?r.alignItems=`center`:r.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=oe(o)),s&&(r.maxWidth=oe(s))}this._lastBoundingBoxSize=i,Tt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Tt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Tt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Tt(i,this._getExactOverlayY(e,n,d)),Tt(i,this._getExactOverlayX(e,n,d))}else i.position=`static`;let l=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),i.transform=l.trim(),s.maxHeight&&(r?i.maxHeight=oe(s.maxHeight):o&&(i.maxHeight=``)),s.maxWidth&&(r?i.maxWidth=oe(s.maxWidth):o&&(i.maxWidth=``)),Tt(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=oe(o.y);return r}_getExactOverlayX(n,e,i){let r={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX===`end`?`left`:`right`:s=n.overlayX===`end`?`right`:`left`,s===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=oe(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:cd(n,i),isOriginOutsideView:as(n,i),isOverlayClipped:cd(e,i),isOverlayOutsideView:as(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&At(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof Mr$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let i=e.getBoundingClientRect();return n&&(e.style.display=``),i}};function Tt(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function fd(t){if(typeof t!=`number`&&t!=null){let[n,e]=t.split(Mh);return!e||e===`px`?parseFloat(n):null}return t||null}function md(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Ah(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var hd=`cdk-global-overlay-wrapper`;function wd(t){return new Sr}var Sr=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(hd),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:s,maxHeight:l}=this._overlayRef.getConfig(),c=(r===`100%`||r===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),d=this._xPosition,m=this._xOffset,v=this._overlayRef.getConfig().direction===`rtl`,w=``,F=``,P=``;c?P=`flex-start`:d===`center`?(P=`center`,v?F=m:w=m):v?d===`left`||d===`end`?(P=`flex-end`,w=m):(d===`right`||d===`start`)&&(P=`flex-start`,F=m):d===`left`||d===`start`?(P=`flex-start`,w=m):(d===`right`||d===`end`)&&(P=`flex-end`,F=m),n.position=this._cssPosition,n.marginLeft=c?`0`:w,n.marginTop=u?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?`0`:F,e.justifyContent=P,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(hd),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ed=(()=>{class t{_injector=T(Ee);global(){return wd()}flexibleConnectedTo(e){return ds(this._injector,e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Jn=new A(`OVERLAY_DEFAULT_CONFIG`);function us(t,n){t.get(Ne).load(Dd);let e=t.get(Cd),i=t.get(dr$1),r=t.get(Fe),o=t.get($i$1),s=t.get(et),l=t.get(Xa$1,null,{optional:!0})||t.get(br$1).createRenderer(null,null),c=new Zn(n),u=t.get(Jn,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??u;let d=i.createElement(`div`),m=i.createElement(`div`);d.id=r.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),m.appendChild(d),c.usePopover&&(m.setAttribute(`popover`,`manual`),m.classList.add(`cdk-overlay-popover`));let v=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return cs(v)?v.after(m):v?.type===`parent`?v.element.appendChild(m):e.getContainerElement().appendChild(m),new vr(new hr(d,o,t),m,d,c,t.get(Re),t.get(yd),i,t.get(hi),t.get(Sd),n?.disableAnimations??t.get(Um$1,null,{optional:!0})===`NoopAnimations`,t.get(fe),l)}var xd=(()=>{class t{scrollStrategies=T(_d);_positionBuilder=T(Ed);_injector=T(Ee);create(e){return us(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Rh=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var Fh=new A(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=T(Ee);return()=>Qn(t)}});var rn=(()=>{class t{elementRef=T(Mr$1);static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return t})();var Nd=new A(`cdk-connected-overlay-default-config`);var Dr=(()=>{class t{_dir=T(et,{optional:!0});_injector=T(Ee);_overlayRef;_templatePortal;_backdropSubscription=j.EMPTY;_attachSubscription=j.EMPTY;_detachSubscription=j.EMPTY;_positionSubscription=j.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=T(Fh);_ngZone=T(Re);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Ge;positionChange=new Ge;attach=new Ge;detach=new Ge;overlayKeydown=new Ge;overlayOutsideClick=new Ge;constructor(){let e=T(wr$1),i=T(Bi$1),r=T(Nd,{optional:!0}),o=T(Jn,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new Kn(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Rh);let e=this._overlayRef=us(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Je(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=me(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Zn({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=ds(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof rn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof rn?this.origin.elementRef.nativeElement:this.origin instanceof Mr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jg(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,Uj],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,Uj],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,Uj],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,Uj],push:[2,`cdkConnectedOverlayPush`,`push`,Uj],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,Uj],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,Uj],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[iy]})}return t})();var fs=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({providers:[xd],imports:[se,ad,is,is]})}return t})();var Md=new A(``);var Ad=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Cr=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?Xo$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var wr=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[se]})}return t})();var Rd=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[se]})}return t})();var ms=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[wr,Rd,Qi,se]})}return t})();var Th=[`trigger`];var Ih=[`panel`];var kh=[[[`mat-select-trigger`]],`*`];var Ph=[`mat-select-trigger`,`*`];function Lh(t,n){if(t&1&&(Mi$1(0,`span`,4),lw(1),Jc$1()),t&2){let e=RD();fI(),bh$1(e.placeholder)}}function Vh(t,n){t&1&&PD(0)}function Bh(t,n){if(t&1&&(Mi$1(0,`span`,11),lw(1),Jc$1()),t&2){let e=RD(2);fI(),bh$1(e.triggerValue)}}function jh(t,n){if(t&1&&(Mi$1(0,`span`,5),gD(1,Vh,1,0)(2,Bh,2,1,`span`,11),Jc$1()),t&2){let e=RD();fI(),mD(e.customTrigger?1:2)}}function zh(t,n){if(t&1){let e=_D();Mi$1(0,`div`,12,1),sh$1(`keydown`,function(r){Pu$1(e);return Fu$1(RD()._handleKeydown(r))}),PD(2,1),Jc$1()}if(t&2){let e=RD();JD(e.panelClass),mh$1(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Jp$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Uh=new A(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=T(Ee);return()=>Qn(t)}});var Hh=new A(`MAT_SELECT_CONFIG`);var $h=new A(`MatSelectTrigger`);var hs=class{source;value;constructor(n,e){this.source=n,this.value=e}};var aE=(()=>{class t{_viewportRuler=T(vt);_changeDetectorRef=T(Bj);_elementRef=T(Mr$1);_dir=T(et,{optional:!0});_idGenerator=T(Fe);_renderer=T(Xa$1);_parentFormField=T(jo,{optional:!0});ngControl=T(tt,{self:!0,optional:!0});_liveAnnouncer=T(Do);_defaultOptions=T(Hh,{optional:!0});_animationsDisabled=Pe();_popoverLocation;_initialized=new Q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=ec(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=tc(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new hs(this,e)}_scrollStrategyFactory=T(Uh);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Q;_errorStateTracker;stateChanges=new Q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Yo$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Hn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Rg(()=>{let e=this.options;return e?e.changes.pipe(zl$1(e),wg$1(()=>Lg(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(wg$1(()=>this.optionSelectionChanges))});openedChange=new Ge;_openedStream=this.openedChange.pipe(Hn$1(e=>e),oe$1(()=>{}));_closedStream=this.openedChange.pipe(Hn$1(e=>!e),oe$1(()=>{}));selectionChange=new Ge;valueChange=new Ge;constructor(){let e=T(Ad),i=T(es,{optional:!0}),r=T(ts,{optional:!0}),o=T(new jh$1(`tabindex`),{optional:!0}),s=T(Jn,{optional:!0}),l=T(Md,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Cr(e,l||this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Gn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(bg$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(bg$1(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(zl$1(null),bg$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(tn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!Je(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;s.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!Je(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==l&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Je(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof rn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new In(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Lg(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(bg$1(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Lg(...this.options.map(i=>i._stateChanges)).pipe(bg$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(e){let i=me(e);i&&(i.tagName===`MAT-OPTION`||i.classList.contains(`cdk-overlay-backdrop`)||i.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-select`]],contentQueries:function(i,r,o){if(i&1&&lh$1(o,$h,5)(o,Qi,5)(o,ko,5),i&2){let s;jD(s=VD())&&(r.customTrigger=s.first),jD(s=VD())&&(r.options=s),jD(s=VD())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&uh$1(Th,5)(Ih,5)(Dr,5),i&2){let o;jD(o=VD())&&(r.trigger=o.first),jD(o=VD())&&(r.panel=o.first),jD(o=VD())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(i,r){i&1&&sh$1(`keydown`,function(s){return r._handleKeydown(s)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),i&2&&(Jp$1(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),mh$1(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Uj],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qj(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Uj],placeholder:`placeholder`,required:[2,`required`,`required`,Uj],multiple:[2,`multiple`,`multiple`,Uj],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Uj],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,qj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Uj]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Iw([{provide:Bo,useExisting:t},{provide:Io,useExisting:t}]),iy],ngContentSelectors:Ph,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(i,r){if(i&1&&(LD(kh),Mi$1(0,`div`,2,0),sh$1(`click`,function(){return r.open()}),Mi$1(3,`div`,3),gD(4,Lh,2,1,`span`,4)(5,jh,3,1,`span`,5),Jc$1(),Mi$1(6,`div`,6)(7,`div`,7),Zu$1(),Mi$1(8,`svg`,8),eh$1(9,`path`,9),Jc$1()()()(),Gp$1(10,zh,3,16,`ng-template`,10),sh$1(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(s){return r._handleOverlayKeydown(s)})),i&2){let o=BD(1);fI(3),Jp$1(`id`,r._valueId),fI(),mD(r.empty?4:5),fI(6),Xp$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[rn,Dr],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return t})();var lE=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[fs,ms,se,Wn,rd,ms]})}return t})();var Gh={capture:!0};var Wh=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var ps=`mat-ripple-loader-uninitialized`;var gs=`mat-ripple-loader-class-name`;var Fd=`mat-ripple-loader-centered`;var Er=`mat-ripple-loader-disabled`;var Od=(()=>{class t{_document=T(dr$1);_animationsDisabled=Pe();_globalRippleOptions=T(Oo,{optional:!0});_platform=T(Z);_ngZone=T(Re);_injector=T(Ee);_eventCleanups;_hosts=new Map;constructor(){let e=T(br$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Wh.map(i=>e.listen(this._document,i,this._onInteraction,Gh)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(ps,this._globalRippleOptions?.namespace??``),(i.className||!e.hasAttribute(gs))&&e.setAttribute(gs,i.className||``),i.centered&&e.setAttribute(Fd,``),i.disabled&&e.setAttribute(Er,``)}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Er,``):e.removeAttribute(Er)}_onInteraction=e=>{let i=me(e);if(i instanceof HTMLElement){let r=i.closest(`[${ps}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let i=this._document.createElement(`span`);i.classList.add(`mat-ripple`,e.getAttribute(gs)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??kn.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??kn.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Er),rippleConfig:{centered:e.hasAttribute(Fd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new Pn(l,this._ngZone,i,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:u}),e.removeAttribute(ps)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(i){return new(i||t)};static ɵprov=Nr$1({token:t,factory:t.ɵfac})}return t})();var Yh=[`*`,[[``,`progressIndicator`,``]]];var Xh=[`*`,`[progressIndicator]`];function Kh(t,n){t&1&&(Xc$1(0,`div`,1),PD(1,1),el$1())}var qh=new A(`MAT_BUTTON_CONFIG`);function Td(t){return t==null?void 0:qj(t)}var bs=(()=>{class t{_elementRef=T(Mr$1);_ngZone=T(Re);_animationsDisabled=Pe();_config=T(qh,{optional:!0});_focusMonitor=T(Vi);_cleanupClick;_renderer=T(Xa$1);_rippleLoader=T(Od);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Fj(!1,{transform:Uj});constructor(){T(Ne).load(Ki);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(i,r){i&2&&(Jp$1(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),JD(r.color?`mat-`+r.color:``),mh$1(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Uj],disabled:[2,`disabled`,`disabled`,Uj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,Td],_tabindex:[2,`tabindex`,`_tabindex`,Td],showProgress:[1,`showProgress`]}})}return t})();var Zh=(()=>{class t extends bs{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[qp],ngContentSelectors:Xh,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(LD(Yh),th$1(0,`span`,0),PD(1),gD(2,Kh,2,0,`div`,1),th$1(3,`span`,2)(4,`span`,3)),i&2&&(fI(2),mD(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return t})();var Qh=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Jh=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function ep(t,n){t&1&&(Xc$1(0,`div`,2),PD(1,3),el$1())}var Id=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var RE=(()=>{class t extends bs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=tp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Id.get(this._appearance):null,o=Id.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[qp],ngContentSelectors:Jh,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(LD(Qh),th$1(0,`span`,0),PD(1),Xc$1(2,`span`,1),PD(3,1),el$1(),PD(4,2),gD(5,ep,2,0,`div`,2),th$1(6,`span`,3)(7,`span`,4)),i&2&&(mh$1(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),fI(5),mD(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return t})();function tp(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var FE=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[wr,se]})}return t})();function kd(t,n){let i=!n?.manualCleanup?n?.injector?.get(pe)??T(pe):null,r=np(n?.equal),o;n?.requireSync?o=Yo$1({kind:0},{equal:r}):o=Yo$1({kind:1,value:n?.initialValue},{equal:r});let s,l=t.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new N(601,!1);return s=i?.onDestroy(l.unsubscribe.bind(l)),Aw(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new N(601,!1)}},{equal:n?.equal})}function np(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var ys={};function Xd(t,n){if(ys[t]=(ys[t]||0)+1,typeof n==`function`)return _s(t,(...i)=>z(G({},n(...i)),{type:t}));switch(n?n._as:`empty`){case`empty`:return _s(t,()=>({type:t}));case`props`:return _s(t,i=>z(G({},i),{type:t}));default:throw new Error(`Unexpected config.`)}}function KE(){return{_as:`props`,_p:void 0}}function _s(t,n){return Object.defineProperty(n,"type",{value:t,writable:!1})}function ip(t,n){if(t==null)throw new Error(`${n} must be defined.`)}var Kd=`@ngrx/store/init`;var on=(()=>{class t extends Bn$1{constructor(){super({type:Kd})}next(e){if(typeof e==`function`)throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>`u`)throw new TypeError(`Actions must be objects`);if(typeof e.type>`u`)throw new TypeError(`Actions must have a type property`);super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=ae({token:t,factory:t.ɵfac})}}return t})();var rp=[on];var qd=new A(`@ngrx/store Internal Root Guard`);var Pd=new A(`@ngrx/store Internal Initial State`);var ws=new A(`@ngrx/store Initial State`);var Zd=new A(`@ngrx/store Reducer Factory`);var Ld=new A(`@ngrx/store Internal Reducer Factory Provider`);var Qd=new A(`@ngrx/store Initial Reducers`);var vs=new A(`@ngrx/store Internal Initial Reducers`);var Vd=new A(`@ngrx/store Internal Store Reducers`);new A(`@ngrx/store Internal Store Features`);new A(`@ngrx/store Feature Reducers`);var Bd=new A(`@ngrx/store User Provided Meta Reducers`);var xr=new A(`@ngrx/store Meta Reducers`);var jd=new A(`@ngrx/store Internal Resolved Meta Reducers`);var zd=new A(`@ngrx/store User Runtime Checks Config`);var Ud=new A(`@ngrx/store Internal User Runtime Checks Config`);var ei=new A(`@ngrx/store Internal Runtime Checks`);var Es=new A(`@ngrx/store Check if Action types are unique`);var ti=new A(`@ngrx/store Root Store Provider`);var Nr=new A(`@ngrx/store Feature State Provider`);function ap(t,n={}){let e=Object.keys(t),i={};for(let o=0;o<e.length;o++){let s=e[o];typeof t[s]==`function`&&(i[s]=t[s])}let r=Object.keys(i);return function(s,l){s=s===void 0?n:s;let c=!1,u={};for(let d=0;d<r.length;d++){let m=r[d],v=i[m],w=s[m],F=v(w,l);u[m]=F,c=c||F!==w}return c?u:s}}function lp(t,n){return Object.keys(t).filter(e=>e!==n).reduce((e,i)=>Object.assign(e,{[i]:t[i]}),{})}function Jd(...t){return function(n){if(t.length===0)return n;let e=t[t.length-1];return t.slice(0,-1).reduceRight((r,o)=>o(r),e(n))}}function eu(t,n){return Array.isArray(n)&&n.length>0&&(t=Jd.apply(null,[...n,t])),(e,i)=>{let r=t(e);return(o,s)=>(o=o===void 0?i:o,r(o,s))}}function cp(t){let n=Array.isArray(t)&&t.length>0?Jd(...t):e=>e;return(e,i)=>(e=n(e),(r,o)=>(r=r===void 0?i:r,e(r,o)))}var ni=class extends _{};var Mr=class extends on{};var dp=`@ngrx/store/update-reducers`;var Ar=(()=>{class t extends Bn$1{get currentReducers(){return this.reducers}constructor(e,i,r,o){super(o(r,i)),this.dispatcher=e,this.initialState=i,this.reducers=r,this.reducerFactory=o}addFeature(e){this.addFeatures([e])}addFeatures(e){let i=e.reduce((r,{reducers:o,reducerFactory:s,metaReducers:l,initialState:c,key:u})=>{return r[u]=typeof o==`function`?cp(l)(o,c):eu(s,l)(o,c),r},{});this.addReducers(i)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(i=>i.key))}addReducer(e,i){this.addReducers({[e]:i})}addReducers(e){this.reducers=G(G({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(i=>{this.reducers=lp(this.reducers,i)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:dp,features:e})}ngOnDestroy(){this.complete()}static{this.ɵfac=function(i){return new(i||t)(Oe(Mr),Oe(ws),Oe(Qd),Oe(Zd))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac})}}return t})();var up=[Ar,{provide:ni,useExisting:Ar},{provide:Mr,useExisting:on}];var ii=(()=>{class t extends Q{ngOnDestroy(){this.complete()}static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=Ty(t)))(r||t)}})()}static{this.ɵprov=ae({token:t,factory:t.ɵfac})}}return t})();var fp=[ii];var Rr=class extends _{};var Hd=(()=>{class t extends Bn$1{static{this.INIT=Kd}constructor(e,i,r,o){super(o);let l=e.pipe(Fn$1(Mg$1)).pipe(em$1(i)),c={state:o},u=l.pipe(Zg(mp,c));this.stateSubscription=u.subscribe(({state:d,action:m})=>{this.next(d),r.next(m)}),this.state=kd(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.ɵfac=function(i){return new(i||t)(Oe(on),Oe(ni),Oe(ii),Oe(ws))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac})}}return t})();function mp(t={state:void 0},[n,e]){let{state:i}=t;return{state:e(i,n),action:n}}var hp=[Hd,{provide:Rr,useExisting:Hd}];var It=(()=>{class t extends _{constructor(e,i,r,o){super(),this.actionsObserver=i,this.reducerManager=r,this.injector=o,this.source=e,this.state=e.state}select(e,...i){return gp.call(null,e,...i)(this)}selectSignal(e,i){return Aw(()=>e(this.state()),i)}lift(e){let i=new t(this,this.actionsObserver,this.reducerManager);return i.operator=e,i}dispatch(e,i){if(typeof e==`function`)return this.processDispatchFn(e,i);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,i){this.reducerManager.addReducer(e,i)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,i){ip(this.injector,`Store Injector`);return id$1(()=>{let o=e();Fh$1(()=>this.dispatch(o))},{injector:i?.injector??bp()??this.injector})}static{this.ɵfac=function(i){return new(i||t)(Oe(Rr),Oe(on),Oe(Ar),Oe(Ee))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac})}}return t})();var pp=[It];function gp(t,n,...e){return function(r){let o;if(typeof t==`string`){let s=[n,...e].filter(Boolean);o=r.pipe(Qg(t,...s))}else if(typeof t==`function`)o=r.pipe(oe$1(s=>t(s,n)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return o.pipe(Eg$1())}}function bp(){try{return T(Ee)}catch{return}}var xs=`https://ngrx.io/guide/store/configuration/runtime-checks`;function $d(t){return t===void 0}function Gd(t){return t===null}function tu(t){return Array.isArray(t)}function _p(t){return typeof t==`string`}function vp(t){return typeof t==`boolean`}function yp(t){return typeof t==`number`}function nu(t){return typeof t==`object`&&t!==null}function Sp(t){return nu(t)&&!tu(t)}function Dp(t){if(!Sp(t))return!1;let n=Object.getPrototypeOf(t);return n===Object.prototype||n===null}function Ss(t){return typeof t==`function`}function Cp(t){return Ss(t)&&t.hasOwnProperty(`ɵcmp`)}function wp(t,n){return Object.prototype.hasOwnProperty.call(t,n)}var Ep=!1;function xp(){return Ep}function Wd(t,n){return t===n}function Np(t,n,e){for(let i=0;i<t.length;i++)if(!e(t[i],n[i]))return!0;return!1}function iu(t,n=Wd,e=Wd){let i=null,r=null,o;function s(){i=null,r=null}function l(d=void 0){o={result:d}}function c(){o=void 0}function u(){if(o!==void 0)return o.result;if(!i)return r=t.apply(null,arguments),i=arguments,r;if(!Np(arguments,i,n))return r;let d=t.apply(null,arguments);return i=arguments,e(r,d)?r:(r=d,d)}return{memoized:u,reset:s,setResult:l,clearResult:c}}function Mp(...t){return Rp(iu)(...t)}function Ap(t,n,e,i){if(e===void 0){let o=n.map(s=>s(t));return i.memoized.apply(null,o)}let r=n.map(o=>o(t,e));return i.memoized.apply(null,[...r,e])}function Rp(t,n={stateFn:Ap}){return function(...e){let i=e;if(Array.isArray(i[0])){let[d,...m]=i;i=[...d,...m]}else i.length===1&&Fp(i[0])&&(i=Op(i[0]));let r=i.slice(0,i.length-1),o=i[i.length-1],s=r.filter(d=>d.release&&typeof d.release==`function`),l=t(function(...d){return o.apply(null,d)}),c=iu(function(d,m){return n.stateFn.apply(null,[d,r,m,l])});function u(){c.reset(),l.reset(),s.forEach(d=>d.release())}return Object.assign(c.memoized,{release:u,projector:l.memoized,setResult:c.setResult,clearResult:c.clearResult})}}function qE(t){return Mp(n=>{let e=n[t];return!xp()&&zj()&&!(t in n)&&console.warn(`@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},n=>n)}function Fp(t){return!!t&&typeof t==`object`&&Object.values(t).every(n=>typeof n==`function`)}function Op(t){let n=Object.values(t),e=Object.keys(t),i=(...r)=>e.reduce((o,s,l)=>z(G({},o),{[s]:r[l]}),{});return[...n,i]}function Tp(t){return t instanceof A?T(t):t}function ru(t){return typeof t==`function`?t():t}function Ip(t,n){return t.concat(n)}function kp(){if(T(It,{optional:!0,skipSelf:!0}))throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);return`guarded`}function Pp(t,n){return function(e,i){let o=t(e,n.action(i)?Ds(i):i);return n.state()?Ds(o):o}}function Ds(t){Object.freeze(t);let n=Ss(t);return Object.getOwnPropertyNames(t).forEach(e=>{if(!e.startsWith(`ɵ`)&&wp(t,e)&&(!n||e!==`caller`&&e!==`callee`&&e!==`arguments`)){let i=t[e];(nu(i)||Ss(i))&&!Object.isFrozen(i)&&Ds(i)}}),t}function Lp(t,n){return function(e,i){if(n.action(i))Yd(Cs(i),`action`);let r=t(e,i);if(n.state())Yd(Cs(r),`state`);return r}}function Cs(t,n=[]){return($d(t)||Gd(t))&&n.length===0?{path:[`root`],value:t}:Object.keys(t).reduce((i,r)=>{if(i)return i;let o=t[r];return Cp(o)?i:$d(o)||Gd(o)||yp(o)||vp(o)||_p(o)||tu(o)?!1:Dp(o)?Cs(o,[...n,r]):{path:[...n,r],value:o}},!1)}function Yd(t,n){if(t===!1)return;let e=t.path.join(`.`),i=new Error(`Detected unserializable ${n} at "${e}". ${xs}#strict${n}serializability`);throw i.value=t.value,i.unserializablePath=e,i}function Vp(t,n){return function(e,i){if(n.action(i)&&!Re.isInAngularZone())throw new Error(`Action '${i.type}' running outside NgZone. ${xs}#strictactionwithinngzone`);return t(e,i)}}function Bp(t){return zj()?G({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function jp({strictActionSerializability:t,strictStateSerializability:n}){return e=>t||n?Lp(e,{action:i=>t&&!Ns(i),state:()=>n}):e}function zp({strictActionImmutability:t,strictStateImmutability:n}){return e=>t||n?Pp(e,{action:i=>t&&!Ns(i),state:()=>n}):e}function Ns(t){return t.type.startsWith(`@ngrx`)}function Up({strictActionWithinNgZone:t}){return n=>t?Vp(n,{action:e=>t&&!Ns(e)}):n}function Hp(t){return[{provide:Ud,useValue:t},{provide:zd,useFactory:Gp,deps:[Ud]},{provide:ei,deps:[zd],useFactory:Bp},{provide:xr,multi:!0,deps:[ei],useFactory:zp},{provide:xr,multi:!0,deps:[ei],useFactory:jp},{provide:xr,multi:!0,deps:[ei],useFactory:Up}]}function $p(){return[{provide:Es,multi:!0,deps:[ei],useFactory:Wp}]}function Gp(t){return t}function Wp(t){if(!t.strictActionTypeUniqueness)return;let n=Object.entries(ys).filter(([,e])=>e>1).map(([e])=>e);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(e=>`"${e}"`).join(`, `)}. ${xs}#strictactiontypeuniqueness`)}function Yp(t={},n={}){return[{provide:qd,useFactory:kp},{provide:Pd,useValue:n.initialState},{provide:ws,useFactory:ru,deps:[Pd]},{provide:vs,useValue:t},{provide:Vd,useExisting:t instanceof A?t:vs},{provide:Qd,deps:[vs,[new My(Vd)]],useFactory:Tp},{provide:Bd,useValue:n.metaReducers?n.metaReducers:[]},{provide:jd,deps:[xr,Bd],useFactory:Ip},{provide:Ld,useValue:n.reducerFactory?n.reducerFactory:ap},{provide:Zd,deps:[Ld,jd],useFactory:eu},rp,up,fp,hp,pp,Hp(n.runtimeChecks),$p()]}function Xp(){T(on),T(ni),T(ii),T(It),T(qd,{optional:!0}),T(Es,{optional:!0})}var Kp=[{provide:ti,useFactory:Xp},Du$1(()=>T(ti))];function ZE(t,n){return Ro$1([...Yp(t,n),Kp])}Du$1(()=>T(Nr));function JE(...t){return{reducer:t.pop(),types:t.map(i=>i.type)}}function ex(t,...n){let e=new Map;for(let i of n)for(let r of i.types){let o=e.get(r);if(o){let s=(l,c)=>i.reducer(o(l,c),c);e.set(r,s)}else e.set(r,i.reducer)}return function(i=t,r){let o=e.get(r.type);return o?o(i,r):i}}var Qp=[`*`];var Jp=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var eg=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var tg=new A(`MAT_CARD_CONFIG`);var cx=(()=>{class t{appearance;constructor(){let e=T(tg,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(i,r){i&2&&mh$1(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:Qp,decls:1,vars:0,template:function(i,r){i&1&&(LD(),PD(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return t})();var dx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var ux=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var fx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=ZE$1({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var mx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:eg,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(i,r){i&1&&(LD(Jp),PD(0),Xc$1(1,`div`,0),PD(2,1),el$1(),PD(3,2))},encapsulation:2})}return t})();var hx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[se]})}return t})();var ng=[`determinateSpinner`];function ig(t,n){if(t&1&&(Zu$1(),Mi$1(0,`svg`,11),eh$1(1,`circle`,12),Jc$1()),t&2){let e=RD();Jp$1(`viewBox`,e._viewBox()),fI(),gh$1(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Jp$1(`r`,e._circleRadius())}}var rg=new A(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:ou})});var ou=100;var og=10;var Ex=(()=>{class t{_elementRef=T(Mr$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=T(rg),i=Ao(),r=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ou;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-og)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||t)};static ɵcmp=qE$1({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(i,r){if(i&1&&uh$1(ng,5),i&2){let o;jD(o=VD())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(i,r){i&2&&(Jp$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),JD(`mat-`+r.color),gh$1(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),mh$1(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,qj],diameter:[2,`diameter`,`diameter`,qj],strokeWidth:[2,`strokeWidth`,`strokeWidth`,qj]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(i,r){if(i&1&&(Gp$1(0,ig,2,8,`ng-template`,null,0,Nw),Mi$1(2,`div`,2,1),Zu$1(),Mi$1(4,`svg`,3),eh$1(5,`circle`,4),Jc$1()(),Yu(),Mi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),rh$1(9,8),Jc$1(),Mi$1(10,`div`,9),rh$1(11,8),Jc$1(),Mi$1(12,`div`,10),rh$1(13,8),Jc$1()()()),i&2){let o=BD(1);fI(4),Jp$1(`viewBox`,r._viewBox()),fI(),gh$1(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Jp$1(`r`,r._circleRadius()),fI(4),Xp$1(`ngTemplateOutlet`,o),fI(2),Xp$1(`ngTemplateOutlet`,o),fI(2),Xp$1(`ngTemplateOutlet`,o)}},dependencies:[Dn],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return t})();var xx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=GE({type:t});static ɵinj=uu$1({imports:[se]})}return t})();var sg={dispatch:!0,functional:!1,useEffectsErrorHandler:!0};var Fr=`__@ngrx/effects_create__`;function Vx(t,n={}){let e=n.functional?t:t(),i=G(G({},sg),n);return Object.defineProperty(e,Fr,{value:i}),e}function ag(t){return Object.getOwnPropertyNames(t).filter(i=>t[i]&&t[i].hasOwnProperty(Fr)?t[i][Fr].hasOwnProperty(`dispatch`):!1).map(i=>{let r=t[i][Fr];return G({propertyName:i},r)})}function lg(t){return ag(t)}function su(t){return Object.getPrototypeOf(t)}function cg(t){return!!t.constructor&&t.constructor.name!==`Object`&&t.constructor.name!==`Function`}function au(t){return typeof t==`function`}function dg(t){return t.filter(au)}function ug(t,n,e){let i=su(t),o=!!i&&i.constructor.name!==`Object`?i.constructor.name:null;return Lg(...lg(t).map(({propertyName:l,dispatch:c,useEffectsErrorHandler:u})=>{let d=typeof t[l]==`function`?t[l]():t[l],m=u?e(d,n):d;return c===!1?m.pipe(us$1()):m.pipe(Gg()).pipe(oe$1(w=>({effect:t[l],notification:w,propertyName:l,sourceName:o,sourceInstance:t})))}))}var fg=10;function lu(t,n,e=fg){return t.pipe(ls$1(i=>(n&&n.handleError(i),e<=1?t:lu(t,n,e-1))))}var Bx=(()=>{class t extends _{constructor(e){super(),e&&(this.source=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}static{this.ɵfac=function(i){return new(i||t)(Oe(ii))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function jx(...t){return Hn$1(n=>t.some(e=>typeof e==`string`?e===n.type:e.type===n.type))}var mg=new A(`@ngrx/effects Effects Error Handler`,{providedIn:`root`,factory:()=>lu});var pg=Xd(`@ngrx/effects/init`);function gg(t,n){if(t.notification.kind===`N`){let e=t.notification.value;!bg(e)&&n.handleError(new Error(`Effect ${_g(t)} dispatched an invalid action: ${vg(e)}`))}}function bg(t){return typeof t!=`function`&&t&&t.type&&typeof t.type==`string`}function _g({propertyName:t,sourceInstance:n,sourceName:e}){let i=typeof n[t]==`function`;return!!e?`"${e}.${String(t)}${i?`()`:``}"`:`"${String(t)}()"`}function vg(t){try{return JSON.stringify(t)}catch{return t}}var yg=`ngrxOnIdentifyEffects`;function Sg(t){return Ms(t,yg)}var Dg=`ngrxOnRunEffects`;function Cg(t){return Ms(t,Dg)}var wg=`ngrxOnInitEffects`;function Eg(t){return Ms(t,wg)}function Ms(t,n){return t&&n in t&&typeof t[n]==`function`}var cu=(()=>{class t extends Q{constructor(e,i){super(),this.errorHandler=e,this.effectsErrorHandler=i}addEffects(e){this.next(e)}toActions(){return this.pipe(qg(e=>cg(e)?su(e):e),qe$1(e=>e.pipe(qg(xg))),qe$1(e=>{return Lg(e.pipe(Gl$1(o=>Ng(this.errorHandler,this.effectsErrorHandler)(o)),oe$1(o=>(gg(o,this.errorHandler),o.notification)),Hn$1(o=>o.kind===`N`&&o.value!=null),Hg()),e.pipe(tn$1(1),Hn$1(Eg),oe$1(o=>o.ngrxOnInitEffects())))}))}static{this.ɵfac=function(i){return new(i||t)(Oe(Ye),Oe(mg))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function xg(t){return Sg(t)?t.ngrxOnIdentifyEffects():``}function Ng(t,n){return e=>{let i=ug(e,t,n);return Cg(e)?e.ngrxOnRunEffects(i):i}}var Mg=(()=>{class t{get isStarted(){return!!this.effectsSubscription}constructor(e,i){this.effectSources=e,this.store=i,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.ɵfac=function(i){return new(i||t)(Oe(cu),Oe(It))}}static{this.ɵprov=ae({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function zx(...t){let n=t.flat();return Ro$1([dg(n),Du$1(()=>{T(ti),T(Nr,{optional:!0});let i=T(Mg),r=T(cu),o=!i.isStarted;o&&i.start();for(let s of n){let l=au(s)?T(s):s;r.addEffects(l)}o&&T(It).dispatch(pg())})])}export{Qu as $,ho as $t,Kd as A,tt as An,ad as At,Ne as B,wh as Bn,ed as Bt,Il as C,qe as Cn,ZE as Ct,JE as D,se as Dn,_h as Dt,It as E,sd as En,_c as Et,Md as F,vr as Fn,dp as Ft,Pe as G,xh as Gn,fC as Gt,Ol as H,ws as Hn,es as Ht,Mf as I,vt as In,ds as It,Pv as J,yr as Jn,gd as Jt,Pi as K,xx as Kn,fs as Kt,Mp as L,wD as Ln,dt as Lt,Kn as M,ut as Mn,bo as Mt,Lo as N,ux as Nn,cr as Nt,Je as O,tc as On,_l as Ot,Ly as P,vC as Pn,cx as Pt,Qn as Q,hl as Qt,Mr as R,wd as Rn,dx as Rt,Hn as S,qE as Sn,Z as St,Io as T,rs as Tn,Zn as Tt,Om as U,xD as Un,et as Ut,Od as V,wr as Vn,eh as Vt,Oo as W,xf as Wn,ex as Wt,Ql as X,zx as Xn,go as Xt,Qi as Y,zi as Yn,gh as Yt,Qm as Z,hi as Zt,FE as _,ni as _n,Wl as _t,Bo as a,jo as an,Rn as at,Fn as b,on as bn,Xt as bt,Ch as c,ke as cn,To as ct,Dh as d,lE as dn,Vi as dt,hx as en,R0 as et,Do as f,me as fn,Vo as ft,Ex as g,mx as gn,Wf as gt,Eo as h,ms as hn,Wc as ht,At as i,j0 as in,Rm as it,Ki as j,us as jn,ao as jt,KE as k,ts as kn,aE as kt,Cr as l,ko as ln,Tu as lt,Ef as m,mr as mn,W0 as mt,Ac as n,ii as nn,Rd as nt,Bx as o,jx as on,Rr as ot,ED as p,mi as pn,Vx as pt,Pn as q,yo as qn,fx as qt,Ad as r,is as rn,Rf as rt,Cd as s,kd as sn,SD as st,$f as t,i_ as tn,RE as tt,DD as u,ku as un,Ui as ut,Fe as v,ns as vn,Wn as vt,In as w,rd as wn,Zh as wt,Ha as x,q0 as xn,Yn as xt,Fm as y,od as yn,Xd as yt,ND as z,wf as zn,ec as zt};