import{$ as Jp,$n as hw,A as Fu,Ar as qE,Bn as eh,Br as rl,C as Eg,Cr as nl,Ct as Q,Dn as bg,Er as oh,Et as Re,G as ID,Ht as VD,J as Iw,Jr as uh,K as Ig,Kr as tl,L as Gp,Lt as Ue,M as GE,Mn as bw,N as Ge,Nr as qj,Nt as Tg,On as bh,Pt as Th,Qr as vD,S as Ee,Sn as _w,St as Pu,Tr as oe,Tt as RD,U as Hn$1,Ur as sh,Wn as fI,Y as JD,Z as Jc,Zn as gw,Zr as uu,Zt as Xa$1,_ as Co,_r as mD,ai as yD,ar as jh,ct as Mi,ei as wg,et as Kc,gn as Zu,gr as lw,h as Bv,j as G,jt as T,lt as Mr,mr as lh,nn as Xp,oi as yg,on as Yo,p as Bj,pt as Nh,qn as gD,qr as tn,rr as jD,rt as LD,s as A,si as z,st as Mh,tr as iy,u as BD,un as ZE,v as Cw,vn as _D,vr as mh,w as Ew,x as ED,xr as nE,yt as PD,zn as eE,zt as Uj}from"./chunk-BqhdRbDf.js";import{M as Zo,N as ah,O as Yn$1,P as an,T as Wo,X as je,_ as Kt,c as Es,et as le,ft as vo,lt as sh$1,s as Do,x as Tf,z as di}from"./chunk-BqaNe9X8.js";import{$ as Wp,At as on,C as Ia$1,Ct as lm,G as St,Gt as wu,H as Si,Ht as vu,Jt as ze,K as Su,Kt as xu,Lt as sm,Mt as qm,S as Hp,X as Vo,a as Ce,at as ao,b as Gm,bt as kp,ct as cl,et as Xm,ft as ha$1,j as Kr,k as Ja$1,l as Ct,nt as Zm,ot as ap,p as Eo,pt as ii,qt as yu,rt as al,t as $m,u as Cu,wt as lp,y as Gc,z as Pa$1,zt as tl$1}from"./chunk-DKLC6Of2.js";import{a as s}from"./chunk-DobV9gjt.js";import{$i as x,Ai as We,Bi as ie,Ci as P,Di as Ue$1,Ei as Re$1,Fi as ae,Gi as oe$1,Hi as k,Ii as be,Ji as se,Ki as pe,Kt as g,Li as ce,Mi as Xe$1,Ni as Ye$1,Oi as V,Pi as _,Qi as we,Qn as p,Qt as r,Ri as ee,Si as Oe,Ti as Q$1,Ui as le$1,Vi as j,Wi as me,Xi as ue,Yi as te,Zi as w,_i as L,ai as Ce$1,bi as N,c as Yt,ca as a,ci as F,di as H,ea as xe,fi as Ie,fn as Bt,gi as Ke,hi as K,hn as Lt,i as Pe,ii as B,ji as X,ki as W,l as mt,li as Fe,mi as Je$1,mn as I,n as yt$1,na as ye,ni as $e,oi as De,pi as J,pn as G$2,q as e,qi as q,r as Be,ra as z$1,ri as A$1,si as E,t as wt,ta as y,u as m,ui as G$1,vi as Le,wi as Pe$1,xi as Ne,yi as Me,zi as fe}from"./main-VWLJRYWD.js";import{a as ci,c as li,d as ri,f as si,i as ai,l as ni,o as ei,p as ti,s as ii$1,t as Jt,u as oi}from"./chunk-BRbJiuLE.js";import{a as nt,c as st,i as it,l as tt$1,n as ce$1,o as ot,r as de,t as b}from"./chunk-D-7_OHaW.js";import{n as ee$1}from"./chunk-eDykkTHv.js";import{n as s$1,r as u,t as i}from"./chunk-BFIUQW6O.js";var Kn=[`switch`];var Hn=[`*`];function jn(n,i){n&1&&(Mi(0,`span`,11),Zu(),Mi(1,`svg`,13),eh(2,`path`,14),Jc(),Mi(3,`svg`,15),eh(4,`path`,16),Jc()())}var Wn=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Qe=class{source;checked;constructor(i,e){this.source=i,this.checked=e}};var gt=(()=>{class n{_elementRef=T(Mr);_focusMonitor=T(Kt);_changeDetectorRef=T(Bj);defaults=T(Wn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Qe(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=je();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Ge;toggleChange=new Ge;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){T(le).load(vo);let e=T(new jh(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=T(Yn$1).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Qe(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=qE({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,a){if(t&1&&uh(Kn,5),t&2){let c;jD(c=VD())&&(a._switchElement=c.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,a){t&2&&(oh(`id`,a.id),Jp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),JD(a.color?`mat-`+a.color:``),mh(`mat-mdc-slide-toggle-focused`,a._focused)(`mat-mdc-slide-toggle-checked`,a.checked)(`mat-slide-toggle-full-width`,a.fullWidth)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Uj],color:`color`,disabled:[2,`disabled`,`disabled`,Uj],fullWidth:[2,`fullWidth`,`fullWidth`,Uj],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qj(e)],checked:[2,`checked`,`checked`,Uj],hideIcon:[2,`hideIcon`,`hideIcon`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Iw([{provide:St,useExisting:Co(()=>n),multi:!0},{provide:Ce,useExisting:n,multi:!0}]),iy],ngContentSelectors:Hn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,a){if(t&1&&(LD(),Mi(0,`div`,1)(1,`button`,2,0),sh(`click`,function(){return a._handleClick()}),eh(3,`div`,3)(4,`span`,4),Mi(5,`span`,5)(6,`span`,6)(7,`span`,7),eh(8,`span`,8),Jc(),Mi(9,`span`,9),eh(10,`span`,10),Jc(),gD(11,jn,5,0,`span`,11),Jc()()(),Mi(12,`label`,12),sh(`click`,function(_){return _.stopPropagation()}),PD(13),Jc()()),t&2){let c=BD(2);Xp(`labelPosition`,a.labelPosition),fI(),mh(`mdc-switch--selected`,a.checked)(`mdc-switch--unselected`,!a.checked)(`mdc-switch--checked`,a.checked)(`mdc-switch--disabled`,a.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,a.disabledInteractive),Xp(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex)(`disabled`,a.disabled&&!a.disabledInteractive),Jp(`id`,a.buttonId)(`name`,a.name)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a._getAriaLabelledBy())(`aria-describedby`,a.ariaDescribedby)(`aria-required`,a.required||null)(`aria-checked`,a.checked)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),fI(9),Xp(`matRippleTrigger`,c)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0),fI(),mD(a.hideIcon?-1:11),fI(),Xp(`for`,a.buttonId),Jp(`id`,a._labelId)}},dependencies:[Tf,m],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var Ln=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=GE({type:n});static ɵinj=uu({imports:[gt,an]})}return n})();var Un=`device reset`;function bt(n){return n.toLowerCase().includes(Un)}function Qn(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Minuten erforderlich`),Jc())}function Xn(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Minuten müssen >= 0 sein`),Jc())}function Yn(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Sekunden erforderlich`),Jc())}function Jn(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Sekunden: 0-59`),Jc())}function ea(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Millisekunden erforderlich`),Jc())}function ta(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Millisekunden: 0-999`),Jc())}function ia(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Messzeit ist erforderlich`),Jc())}var _e=class n{fb=T(Su);dialogRef=T(b);data=T(ce$1);form;constructor(){let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[i.minutes,[Ct.required,Ct.min(0)]],seconds:[i.seconds,[Ct.required,Ct.min(0),Ct.max(59)]],milliseconds:[i.milliseconds,[Ct.required,Ct.min(0),Ct.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),Ct.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),t={participantId:this.data?.participantId??null,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(t)}}formatDateTimeForInput(i){if(!i){let t=new Date;return this.toLocalISOString(t)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,`0`)}-${String(i.getDate()).padStart(2,`0`)}T${String(i.getHours()).padStart(2,`0`)}:${String(i.getMinutes()).padStart(2,`0`)}:${String(i.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(i){let e=new Date(i);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}convertToMilliseconds(i,e,t){return i*60*1e3+e*1e3+t}splitMilliseconds(i){let e=Math.floor(i/6e4),t=i%(60*1e3);return{minutes:e,seconds:Math.floor(t/1e3),milliseconds:t%1e3}}static ɵfac=function(e){return new(e||n)};static ɵcmp=qE({type:n,selectors:[[`app-measurement-dialog`]],decls:33,vars:10,consts:[[`mat-dialog-title`,``],[1,`measurement-form`,3,`formGroup`],[1,`time-input-group`],[`appearance`,`outline`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`,`required`,``],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`,`required`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),lw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`mat-form-field`,3)(6,`mat-label`),lw(7,`Minuten`),Jc(),eh(8,`input`,4),eE(),gD(9,Qn,2,0,`mat-error`),gD(10,Xn,2,0,`mat-error`),Jc(),Mi(11,`mat-form-field`,3)(12,`mat-label`),lw(13,`Sekunden`),Jc(),eh(14,`input`,5),eE(),gD(15,Yn,2,0,`mat-error`),gD(16,Jn,2,0,`mat-error`),Jc(),Mi(17,`mat-form-field`,3)(18,`mat-label`),lw(19,`Millisekunden`),Jc(),eh(20,`input`,6),eE(),gD(21,ea,2,0,`mat-error`),gD(22,ta,2,0,`mat-error`),Jc()(),Mi(23,`mat-form-field`,3)(24,`mat-label`),lw(25,`Gemessen am (ISO Format)`),Jc(),eh(26,`input`,7),eE(),gD(27,ia,2,0,`mat-error`),Jc()()(),Mi(28,`mat-dialog-actions`,8)(29,`button`,9),sh(`click`,function(){return t.onCancel()}),lw(30,`Abbrechen`),Jc(),Mi(31,`button`,10),sh(`click`,function(){return t.onSave()}),lw(32,`Speichern`),Jc()()),e&2&&(fI(),bh(t.data?`Messung bearbeiten`:`Neue Messung`),fI(2),Xp(`formGroup`,t.form),fI(5),nE(),fI(),mD(t.form.get(`minutes`)?.hasError(`required`)&&t.form.get(`minutes`)?.touched?9:-1),fI(),mD(t.form.get(`minutes`)?.hasError(`min`)?10:-1),fI(4),nE(),fI(),mD(t.form.get(`seconds`)?.hasError(`required`)&&t.form.get(`seconds`)?.touched?15:-1),fI(),mD(t.form.get(`seconds`)?.hasError(`min`)||t.form.get(`seconds`)?.hasError(`max`)?16:-1),fI(4),nE(),fI(),mD(t.form.get(`milliseconds`)?.hasError(`required`)&&t.form.get(`milliseconds`)?.touched?21:-1),fI(),mD(t.form.get(`milliseconds`)?.hasError(`min`)||t.form.get(`milliseconds`)?.hasError(`max`)?22:-1),fI(4),nE(),fI(),mD(t.form.get(`measuredAt`)?.hasError(`required`)&&t.form.get(`measuredAt`)?.touched?27:-1),fI(4),Xp(`disabled`,!t.form.valid))},dependencies:[di,wu,Cu,ao,tl$1,vu,yu,Eo,Pa$1,Ia$1,Si,al,ot,tt$1,nt,it,Vo,Kr,ii,ha$1,Be,Pe,sh$1,ah],styles:[`.measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var na=[`input`];var aa=[`formField`];var ra=[`*`];var Xe=class{source;value;constructor(i,e){this.source=i,this.value=e}};var oa={provide:St,useExisting:Co(()=>yt),multi:!0};var Pn=new A(`MatRadioGroup`);var sa=new A(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var yt=(()=>{class n{_changeDetector=T(Bj);_value=null;_name=T(Yn$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ge;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Xe(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=ZE({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,a,c){if(t&1&&lh(c,Ye,5),t&2){let _;jD(_=VD())&&(a._radios=_)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Uj],required:[2,`required`,`required`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Iw([oa,{provide:Pn,useExisting:n}])]})}return n})();var Ye=(()=>{class n{_elementRef=T(Mr);_changeDetector=T(Bj);_focusMonitor=T(Kt);_radioDispatcher=T(cl);_defaultOptions=T(sa,{optional:!0});_ngZone=T(Re);_renderer=T(Xa$1);_uniqueId=T(Yn$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ge;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=je();_injector=T(Ee);constructor(){T(le).load(vo);let e=T(Pn,{optional:!0}),t=T(new jh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=qj(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Xe(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,Bv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=qE({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,a){if(t&1&&uh(na,5)(aa,7,Mr),t&2){let c;jD(c=VD())&&(a._inputElement=c.first),jD(c=VD())&&(a._rippleTrigger=c.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,a){t&1&&sh(`focus`,function(){return a._inputElement.nativeElement.focus()}),t&2&&(Jp(`id`,a.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),mh(`mat-primary`,a.color===`primary`)(`mat-accent`,a.color===`accent`)(`mat-warn`,a.color===`warn`)(`mat-mdc-radio-checked`,a.checked)(`mat-mdc-radio-disabled`,a.disabled)(`mat-mdc-radio-disabled-interactive`,a.disabledInteractive)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qj(e)],checked:[2,`checked`,`checked`,Uj],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Uj],required:[2,`required`,`required`,Uj],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:ra,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,a){t&1&&(LD(),Mi(0,`label`,2,0)(2,`span`,3),eh(3,`span`,4),Mi(4,`input`,5,1),sh(`change`,function(_){return a._onInputInteraction(_)}),Jc(),Mi(6,`span`,6),eh(7,`span`,7)(8,`span`,8),Jc(),Mi(9,`span`,9),eh(10,`span`,10),Jc()(),Mi(11,`span`,11),PD(12),Jc()()),t&2&&(Xp(`labelPosition`,a.labelPosition)(`for`,a.inputId),fI(2),mh(`mdc-radio--disabled`,a.disabled),fI(2),Xp(`id`,a.inputId)(`checked`,a.checked)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Jp(`name`,a.name)(`value`,a.value)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),fI(5),Xp(`matRippleTrigger`,a._rippleTrigger.nativeElement)(`matRippleDisabled`,a._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Tf,m],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})();var Bn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=GE({type:n});static ɵinj=uu({imports:[Do,Ye,an]})}return n})();function ca(n,i){n&1&&(Mi(0,`mat-error`),lw(1,`Bitte eine Archivierungs-Variante auswählen`),Jc())}var Je=class n{fb=T(Su);dialogRef=T(b);data=T(ce$1);form=this.fb.group({raceId:[null,Ct.required],mode:[null,Ct.required]});onCancel(){this.dialogRef.close()}onSave(){if(!this.form.valid)return;let i=this.form.value.mode,e={raceId:Number(this.form.value.raceId),resetDevice:i===`reset`,clearAfterArchive:i!==`noclear`};this.dialogRef.close(e)}static ɵfac=function(e){return new(e||n)};static ɵcmp=qE({type:n,selectors:[[`app-archive-measurements-dialog`]],decls:24,vars:5,consts:[[`mat-dialog-title`,``],[1,`archive-form`,3,`formGroup`],[`formControlName`,`raceId`,`errorMessage`,`Bitte ein Rennen auswählen`,3,`races`,`required`],[`formControlName`,`mode`,1,`mode-group`],[`value`,`reset`],[1,`hint`],[`value`,`keep`],[`value`,`noclear`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),lw(1,`Messungen archivieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1),eh(4,`app-race-select`,2),eE(),Mi(5,`mat-radio-group`,3)(6,`mat-radio-button`,4),lw(7,` Archivieren (inkl. Gerät-Reset) `),Mi(8,`p`,5),lw(9,` Aktuelle Messungen werden diesem Rennen zugeordnet, danach werden Datenbank und Gerät geleert. Bereit für das nächste Rennen. `),Jc()(),Mi(10,`mat-radio-button`,6),lw(11,` Archivieren (nur Datenbank) `),Mi(12,`p`,5),lw(13,`Wie oben, aber nur die Datenbank wird geleert, das Gerät bleibt unverändert.`),Jc()(),Mi(14,`mat-radio-button`,7),lw(15,` Archivieren (ohne Löschen) `),Mi(16,`p`,5),lw(17,` Aktuelle Messungen werden diesem Rennen zugeordnet. Datenbank und Gerät werden dabei NICHT verändert. `),Jc()()(),eE(),gD(18,ca,2,0,`mat-error`),Jc()(),Mi(19,`mat-dialog-actions`,8)(20,`button`,9),sh(`click`,function(){return t.onCancel()}),lw(21,`Abbrechen`),Jc(),Mi(22,`button`,10),sh(`click`,function(){return t.onSave()}),lw(23,`Archivieren`),Jc()()),e&2&&(fI(3),Xp(`formGroup`,t.form),fI(),Xp(`races`,t.data.races)(`required`,!0),nE(),fI(),nE(),fI(13),mD(t.form.get(`mode`)?.hasError(`required`)&&t.form.get(`mode`)?.touched?18:-1),fI(4),Xp(`disabled`,!t.form.valid))},dependencies:[di,wu,Cu,vu,yu,Eo,Si,al,ot,tt$1,nt,it,Vo,ha$1,Bn,yt,Ye,sh$1,ah,ee$1],styles:[`.archive-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-width:420px;margin-top:16px}mat-form-field[_ngcontent-%COMP%], app-race-select[_ngcontent-%COMP%]{width:100%}.mode-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.hint[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#0009}`]})};var Vn=[{key:`participantId`,label:`Teilnehmer-ID`,required:!1},{key:`durationMs`,label:`Dauer (ms)`,required:!0},{key:`measuredAt`,label:`Gemessen am`,required:!1}];var ua=(n,i)=>i.value;var Mt=(n,i)=>i.key;function pa(n,i){if(n&1&&(Mi(0,`span`,6),lw(1),Jc()),n&2){let e=RD();fI(),bh(e.file().name)}}function ha(n,i){if(n&1&&(Mi(0,`mat-option`,15),lw(1),Jc()),n&2){let e=i.$implicit;Xp(`value`,e.value),fI(),bh(e.label)}}function ga(n,i){if(n&1){let e=_D();Mi(0,`div`,7)(1,`mat-form-field`,13)(2,`mat-label`),lw(3,`Trennzeichen`),Jc(),Mi(4,`mat-select`,14),sh(`selectionChange`,function(a){Pu(e);return Fu(RD().onDelimiterChange(a.value))}),ID(5,ha,2,2,`mat-option`,15,ua),Jc()()()}if(n&2){let e=RD();fI(4),Xp(`value`,e.delimiter()),fI(),ED(e.delimiterOptions)}}function ba(n,i){n&1&&(Mi(0,`div`,8),eh(1,`mat-spinner`,16),Mi(2,`span`),lw(3,`Datei wird analysiert...`),Jc()())}function _a(n,i){if(n&1&&(Mi(0,`p`,9),lw(1),Jc()),n&2){let e=RD();fI(),bh(e.previewError())}}function fa(n,i){if(n&1&&(Mi(0,`mat-option`,15),lw(1),Jc()),n&2){let e=i.$implicit;Xp(`value`,e),fI(),bh(e)}}function va(n,i){if(n&1&&(Mi(0,`mat-form-field`,13)(1,`mat-label`),lw(2),Jc(),Mi(3,`mat-select`,18)(4,`mat-option`,19),lw(5,`— nicht importieren —`),Jc(),ID(6,fa,2,2,`mat-option`,15,vD),Jc(),eE(),Jc()),n&2){let e=i.$implicit,t=RD();fI(2),Th(``,e.label,``,e.required?` *`:``),fI(),Xp(`formControlName`,e.key),nE(),fI(3),ED(t.availableFields)}}function ya(n,i){if(n&1&&(Mi(0,`th`),lw(1),Jc()),n&2){let e=i.$implicit;fI(),bh(e.label)}}function Ma(n,i){if(n&1&&(Mi(0,`td`),lw(1),Jc()),n&2){let e=i.$implicit,t=RD().$implicit,a=RD(3);fI(),bh(a.previewValue(t,e.key))}}function Sa(n,i){if(n&1&&(Mi(0,`tr`),ID(1,Ma,2,1,`td`,null,Mt),Jc()),n&2){let e=RD(3);fI(),ED(e.targetFields)}}function Ca(n,i){if(n&1&&(Mi(0,`h3`),lw(1,`Vorschau`),Jc(),Mi(2,`div`,20)(3,`table`,21)(4,`thead`)(5,`tr`),ID(6,ya,2,1,`th`,null,Mt),Jc()(),Mi(8,`tbody`),ID(9,Sa,3,0,`tr`,null,yD),Jc()()()),n&2){let e=RD(),t=RD();fI(6),ED(t.targetFields),fI(3),ED(e.sampleRows)}}function wa(n,i){if(n&1&&(Mi(0,`h3`),lw(1,`Spalten zuordnen`),Jc(),Mi(2,`form`,17),ID(3,va,8,3,`mat-form-field`,13,Mt),Jc(),gD(5,Ca,11,0)),n&2){let e=RD();fI(2),Xp(`formGroup`,e.mappingForm),fI(),ED(e.targetFields),fI(2),mD(i.sampleRows.length>0?5:-1)}}var et=class n{fb=T(Su);measurementService=T(x);dialogRef=T(b);targetFields=Vn;delimiterOptions=[{value:``,label:`Automatisch erkennen`},{value:`;`,label:`Semikolon (;)`},{value:`,`,label:`Komma (,)`},{value:`	`,label:`Tab`},{value:`|`,label:`Pipe (|)`}];file=Yo(null);delimiter=Yo(``);previewLoading=Yo(!1);previewError=Yo(null);preview=Yo(null);mappingForm=this.fb.group(Object.fromEntries(this.targetFields.map(i=>[i.key,[``,i.required?Ct.required:[]]])));onFileSelected(i){let t=i.target.files?.[0]??null;this.file.set(t),this.preview.set(null),this.previewError.set(null),t?this.analyze():(this.analyzeRequestId++,this.previewLoading.set(!1))}onDelimiterChange(i){this.delimiter.set(i),this.analyze()}analyzeRequestId=0;analyze(){let i=this.file();if(!i)return;let e=++this.analyzeRequestId;this.previewLoading.set(!0),this.previewError.set(null),this.measurementService.previewImport(i,this.delimiter()||void 0).subscribe({next:t=>{if(e!==this.analyzeRequestId)return;this.previewLoading.set(!1),this.preview.set(t);let a={};for(let c of this.targetFields)a[c.key]=t.suggestedMapping[c.key]??``;this.mappingForm.patchValue(a)},error:t=>{e===this.analyzeRequestId&&(this.previewLoading.set(!1),this.preview.set(null),this.previewError.set(t?.error?.message??`Datei konnte nicht gelesen/analysiert werden.`))}})}previewValue(i,e){let t=this.mappingForm.get(e)?.value;return t?i[t]??``:``}onCancel(){this.dialogRef.close()}onImport(){let i=this.file();if(!i)return;let e=this.mappingForm.value,t={};for(let[c,_]of Object.entries(e))_&&(t[c]=_);let a={file:i,delimiter:this.delimiter()||void 0,mapping:t};this.dialogRef.close(a)}static ɵfac=function(e){return new(e||n)};static ɵcmp=qE({type:n,selectors:[[`app-measurement-import-mapping-dialog`]],decls:22,vars:6,consts:[[`fileInput`,``],[`mat-dialog-title`,``],[1,`hint`],[1,`file-row`],[`type`,`file`,`accept`,`.csv,.txt,text/csv`,`hidden`,``,3,`change`],[`mat-raised-button`,``,3,`click`],[1,`filename`],[1,`format-row`],[1,`loading-row`],[1,`error`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`],[`appearance`,`outline`],[3,`selectionChange`,`value`],[3,`value`],[`diameter`,`24`],[1,`mapping-grid`,3,`formGroup`],[3,`formControlName`],[`value`,``],[1,`preview-table-wrapper`],[1,`preview-table`]],template:function(e,t){if(e&1){let a=_D();Mi(0,`h2`,1),lw(1,`Messungen importieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`p`,2),lw(4,` CSV-Datei (beliebiges Trennzeichen). Ordne die Spalten der Datei unseren Feldern zu - das Mapping wird nicht gespeichert und muss bei jedem Import neu gewählt werden. Nicht zugeordnete Felder werden einfach nicht importiert. `),Jc(),Mi(5,`div`,3)(6,`input`,4,0),sh(`change`,function(_){return t.onFileSelected(_)}),Jc(),Mi(8,`button`,5),sh(`click`,function(){Pu(a);return Fu(BD(7).click())}),Mi(9,`mat-icon`),lw(10,`upload_file`),Jc(),lw(11,` Datei wählen `),Jc(),gD(12,pa,2,1,`span`,6),Jc(),gD(13,ga,7,1,`div`,7),gD(14,ba,4,0,`div`,8),gD(15,_a,2,1,`p`,9),gD(16,wa,6,2),Jc(),Mi(17,`mat-dialog-actions`,10)(18,`button`,11),sh(`click`,function(){return t.onCancel()}),lw(19,`Abbrechen`),Jc(),Mi(20,`button`,12),sh(`click`,function(){return t.onImport()}),lw(21,` Importieren `),Jc()()}if(e&2){let a;fI(12),mD(t.file()?12:-1),fI(),mD(t.file()?13:-1),fI(),mD(t.previewLoading()?14:-1),fI(),mD(t.previewError()?15:-1),fI(),mD((a=t.preview())?16:-1,a),fI(4),Xp(`disabled`,!t.preview()||t.previewLoading()||t.mappingForm.invalid)}},dependencies:[di,wu,Cu,vu,yu,Si,al,ot,tt$1,nt,it,Vo,Kr,ii,sh$1,ah,lm,sm,on,yt$1,wt,lp,ap],styles:[`mat-dialog-content[_ngcontent-%COMP%]{min-width:500px;max-width:80vw}.hint[_ngcontent-%COMP%]{font-size:12px;color:#0009}.file-row[_ngcontent-%COMP%], .format-row[_ngcontent-%COMP%], .loading-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:8px}.filename[_ngcontent-%COMP%]{font-size:13px}.error[_ngcontent-%COMP%]{color:#b00020}.mapping-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:4px 16px}.preview-table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}.preview-table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:12px;width:100%}.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);padding:4px 8px;text-align:left;white-space:nowrap}`]})};var tt=()=>[];function ka(n,i){n&1&&(Mi(0,`mat-icon`,4),lw(1,`sync `),Jc())}function xa(n,i){if(n&1&&(Mi(0,`mat-icon`,5),lw(1,`sync `),Jc()),n&2)Xp(`matTooltip`,gw(`Letzte Aktualisierung: `,RD().lastUpdate))}function Na(n,i){n&1&&eh(0,`mat-spinner`,13)}function Ia(n,i){n&1&&(Mi(0,`mat-icon`),lw(1,`upload_file`),Jc())}function Ea(n,i){if(n&1){let e=_D();Mi(0,`button`,38),sh(`click`,function(){Pu(e);return Fu(RD(2).toggleContinuousMode(!1))}),Mi(1,`mat-icon`),lw(2,`stop`),Jc(),lw(3,` Kontinuierlich AUS `),Jc()}}function Ra(n,i){if(n&1){let e=_D();Mi(0,`button`,39),sh(`click`,function(){Pu(e);return Fu(RD(2).toggleContinuousMode(!0))}),Mi(1,`mat-icon`),lw(2,`play_arrow`),Jc(),lw(3,` Kontinuierlich AN `),Jc()}}function Aa(n,i){if(n&1){let e=_D();Mi(0,`button`,40),sh(`click`,function(){Pu(e);return Fu(RD(2).discardOldestStart())}),Mi(1,`mat-icon`),lw(2,`person_off`),Jc(),lw(3,` Sturz signalisieren `),Jc()}}function Da(n,i){if(n&1&&(gD(0,Ea,4,0,`button`,35),bw(1,`async`),Kc(2,Ra,4,0,`button`,36),gD(3,Aa,4,0,`button`,37),bw(4,`async`)),n&2){let e=RD();mD(Cw(1,2,e.deviceStatus$)===`continuous`?0:2),fI(3),mD(Cw(4,4,e.deviceStatus$)===`normal`?3:-1)}}function Ta(n,i){if(n&1){let e=_D();Mi(0,`button`,41),sh(`click`,function(){Pu(e);return Fu(RD().toggleScheduledImport(!1))}),Mi(1,`mat-icon`),lw(2,`cloud_sync`),Jc(),lw(3,` Auto-Import AUS `),Jc()}}function $a(n,i){if(n&1){let e=_D();Mi(0,`button`,42),sh(`click`,function(){Pu(e);return Fu(RD().toggleScheduledImport(!0))}),Mi(1,`mat-icon`),lw(2,`cloud_download`),Jc(),lw(3,` Auto-Import AN `),Jc()}}function Fa(n,i){if(n&1&&(Mi(0,`strong`),lw(1),Jc(),lw(2),bw(3,`async`)),n&2){let e=RD(2),t=RD(),a=RD();fI(),bh(e.nextRaceNumber),fI(),rl(` (`,a.getParticipantNameByRaceNumber(t,e.nextRaceNumber,Cw(3,2,a.participants$)||Ew(4,tt)),`) `)}}function La(n,i){n&1&&(Mi(0,`em`),lw(1,`keine weiteren Startnummern`),Jc())}function Oa(n,i){if(n&1){let e=_D();Mi(0,`span`,48)(1,`mat-icon`),lw(2,`warning`),Jc(),Mi(3,`span`),lw(4,` Die Zuordnung wurde von Hand versetzt und läuft von hier aus weiter - sie kehrt `),Mi(5,`strong`),lw(6,`nicht`),Jc(),lw(7,` von selbst zurück. Vorher war `),Mi(8,`strong`),lw(9),Jc(),lw(10,` an der Reihe. `),Jc(),Mi(11,`button`,49),bw(12,`async`),sh(`click`,function(){Pu(e);return Fu(RD(4).returnToQueue())}),Mi(13,`mat-icon`),lw(14,`undo`),Jc(),lw(15),Jc()()}if(n&2){let e=RD(4);fI(9),bh(e.returnToRaceNumber),fI(2),Xp(`disabled`,Cw(12,3,e.autoAssignBusy$)),fI(4),rl(` Zurück zu `,e.returnToRaceNumber,` `)}}function za(n,i){if(n&1){let e=_D();Mi(0,`button`,43),bw(1,`async`),sh(`click`,function(){Pu(e);return Fu(RD(3).skipAutoAssign())}),Mi(2,`mat-icon`),lw(3,`skip_next`),Jc(),lw(4,` Überspringen `),Jc(),Mi(5,`span`,44)(6,`input`,45),bw(7,`async`),Mh(`ngModelChange`,function(a){Pu(e);let c=RD(3);return hw(c.nextRaceNumberInput,a)||(c.nextRaceNumberInput=a),Fu(a)}),sh(`keyup.enter`,function(){Pu(e);return Fu(RD(3).setNextRaceNumber())}),Jc(),eE(),Mi(8,`button`,46),bw(9,`async`),sh(`click`,function(){Pu(e);return Fu(RD(3).setNextRaceNumber())}),Mi(10,`mat-icon`),lw(11,`my_location`),Jc(),lw(12,` Setzen `),Jc()(),Mi(13,`span`,47),lw(14,` Nächste Startnummer: `),gD(15,Fa,4,5)(16,La,2,0,`em`),Jc(),gD(17,Oa,16,5,`span`,48)}if(n&2){let e=RD(),t=RD(2);Xp(`disabled`,Cw(1,6,t.autoAssignBusy$)),fI(6),Nh(`ngModel`,t.nextRaceNumberInput),Xp(`disabled`,!!Cw(7,8,t.autoAssignBusy$)),nE(),fI(2),Xp(`disabled`,!t.nextRaceNumberInput||!!Cw(9,10,t.autoAssignBusy$)),fI(7),mD(e.nextRaceNumber!==null?15:16),fI(2),mD(t.returnToRaceNumber!==null?17:-1)}}function Pa(n,i){if(n&1&&gD(0,za,18,12),n&2){let e=i,t=RD();mD(e.active&&e.raceId===t?0:-1)}}function Ba(n,i){if(n&1&&(gD(0,Pa,1,1),bw(1,`async`)),n&2){let e;mD((e=Cw(1,1,RD().autoAssignStatus$))?0:-1,e)}}function Va(n,i){n&1&&(Mi(0,`span`,20),lw(1,`Rennen auswählen, um Messungen automatisch zuzuordnen.`),Jc())}function Ga(n,i){n&1&&(Mi(0,`div`,21),eh(1,`mat-spinner`,50),Jc())}function qa(n,i){n&1&&(Mi(0,`th`,51),lw(1,`Geräte-Nr.`),Jc())}function Ka(n,i){if(n&1&&(Mi(0,`td`,52),lw(1),Jc()),n&2){let e=i.$implicit,t=RD();Xp(`matTooltip`,t.isSyntheticDeviceMeasurementId(e.deviceMeasurementId)?`Ohne Gerät erfasst (manuell oder CSV-Import)`:``),fI(),rl(` `,t.formatDeviceMeasurementId(e.deviceMeasurementId),` `)}}function Ha(n,i){n&1&&(Mi(0,`th`,51),lw(1,`Dauer`),Jc())}function ja(n,i){if(n&1&&(Mi(0,`td`,53),lw(1),Jc()),n&2){let e=i.$implicit,t=RD();fI(),rl(` `,t.formatDuration(e.durationMs),` `)}}function Wa(n,i){n&1&&(Mi(0,`th`,51),lw(1,`Teilnehmer`),Jc())}function Za(n,i){if(n&1&&(Mi(0,`td`,52),lw(1),Jc()),n&2){let e=i.$implicit;Xp(`matTooltip`,e.participantId?`Bereits einem Rennen zugeordnet`:``),fI(),rl(` `,e.participantName||`-`,` `)}}function Ua(n,i){n&1&&(Mi(0,`th`,51),lw(1,`Gemessen am`),Jc())}function Qa(n,i){if(n&1&&(Mi(0,`td`,53),lw(1),bw(2,`date`),Jc()),n&2){let e=i.$implicit;fI(),rl(` `,_w(2,1,e.measuredAt,`dd.MM.yyyy HH:mm:ss`),` `)}}function Xa(n,i){n&1&&(Mi(0,`th`,51),lw(1,`Aktionen`),Jc())}function Ya(n,i){if(n&1){let e=_D();Mi(0,`td`,53)(1,`button`,54),sh(`click`,function(){let a=Pu(e).$implicit;return Fu(RD().openEditDialog(a))}),Mi(2,`mat-icon`),lw(3,`edit`),Jc()(),Mi(4,`button`,55),sh(`click`,function(){let a=Pu(e).$implicit;return Fu(RD().deleteMeasurement(a))}),Mi(5,`mat-icon`),lw(6,`delete`),Jc()()()}}function Ja(n,i){n&1&&eh(0,`tr`,56)}function er(n,i){n&1&&eh(0,`tr`,57)}var Gn=class n{store=T(ze);dialog=T(de);snackBar=T(Gc);actions$=T(Hp);destroy$=new Q;autoRefresh$=new Q;trackById=(i,e)=>e.id;measurements$;races$;participants$;measurementsWithParticipants$;selectedRaceId$;autoAssignStatus$;autoAssignBusy$;loading$;scheduledImportEnabled$;deviceStatus$;timingProviderActive$;importLoading$;displayedColumns=[`deviceMeasurementId`,`duration`,`measuredAt`,`participant`,`actions`];lastUpdate=``;autoRefreshEnabled=!1;nextRaceNumberInput=null;returnToRaceNumber=null;currentNextRaceNumber=null;pendingReturnRaceNumber=null;pendingTargetRaceNumber=null;pendingDiscard=!1;constructor(){this.measurements$=this.store.select(A$1),this.races$=this.store.select(s),this.participants$=this.store.select(a),this.loading$=this.store.select(we),this.timingProviderActive$=this.store.select(p).pipe(Hn$1(i=>i!==null),Eg()),this.measurementsWithParticipants$=yg([this.measurements$,this.participants$]).pipe(oe(([i,e])=>[...i].sort((t,a)=>a.id-t.id).map(t=>z(G({},t),{participantName:t.participantId?this.getParticipantName(t.participantId,e):void 0}))),Eg(u)),this.scheduledImportEnabled$=this.store.select(Je$1),this.deviceStatus$=this.store.select(We),this.autoAssignStatus$=this.store.select(Ke),this.autoAssignStatus$.pipe(bg(this.destroy$)).subscribe(i=>this.currentNextRaceNumber=i?.nextRaceNumber??null),this.autoAssignBusy$=this.store.select(Xe$1),this.selectedRaceId$=this.autoAssignStatus$.pipe(oe(i=>i.active?i.raceId:null),Eg()),this.importLoading$=this.store.select(Ye$1),this.actions$.pipe(Wp(Ie,De,Ue$1,Ne),bg(this.destroy$)).subscribe(i=>{let e;i.type===Ie.type?e=`Automatik-Modus aktiviert`:i.type===De.type?e=`Automatik-Modus deaktiviert`:i.type===Ne.type?(this.nextRaceNumberInput=null,this.pendingTargetRaceNumber===this.returnToRaceNumber?(this.returnToRaceNumber=null,e=`Nächste Startnummer gesetzt`):(this.returnToRaceNumber===null&&(this.returnToRaceNumber=this.pendingReturnRaceNumber),e=this.returnToRaceNumber!==null?`N\xE4chste Startnummer gesetzt - vorher war ${this.returnToRaceNumber} an der Reihe`:`Nächste Startnummer gesetzt`),this.pendingReturnRaceNumber=null,this.pendingTargetRaceNumber=null,this.pendingDiscard&&(this.pendingDiscard=!1,this.store.dispatch(F()),e=`Zeit verworfen - Startnummer kann erneut fahren`)):e=`Startnummer übersprungen`,this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(fe,Re$1,$e,Pe$1),bg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(Le),Tg(this.measurements$,this.participants$,this.selectedRaceId$),bg(this.destroy$)).subscribe(([{raceNumber:i},e,t,a])=>{this.pendingDiscard=!1;let c=t.find(H=>H.race?.id===a&&H.raceNumber===i),_=c?e.find(H=>H.participantId===c.id):void 0,K=c?.person?`${c.person.firstName} ${c.person.lastName}`:null,fe=_?this.formatDuration(_.durationMs):null,qn=`Startnummer ${i}${K?` (${K})`:``} hat bereits eine Zeit${fe?`: ${fe}`:``}.

F\xFCr einen erneuten Lauf muss diese Zeit gel\xF6scht werden. Das l\xE4sst sich nicht r\xFCckg\xE4ngig machen.

Zeit l\xF6schen und die Zuordnung auf ${i} setzen?`;this.dialog.open(st,{width:`450px`,data:{title:`Startnummer hat bereits eine Zeit`,message:qn,confirmLabel:`Zeit löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(H=>{if(!H){this.pendingReturnRaceNumber=null,this.pendingTargetRaceNumber=null;return}this.pendingDiscard=!0,this.pendingReturnRaceNumber=this.currentNextRaceNumber,this.pendingTargetRaceNumber=i,this.store.dispatch(ye({raceNumber:i,force:!0}))})}),this.actions$.pipe(Wp(L),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(N),bg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(k),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(E),bg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(B),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(w),bg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(V),bg(this.destroy$)).subscribe(({message:i})=>{let t=bt(i)?`Alle Messungen wurden gelöscht (inkl. Gerät)`:`Alle Messungen wurden gelöscht (nur Datenbank)`;this.snackBar.open(t,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(H),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Löschen der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(W),bg(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Kontinuierlicher Modus aktiviert`:`Kontinuierlicher Modus deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(z$1),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des kontinuierlichen Modus`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(K),bg(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Automatischer Import aktiviert (alle 5 Sekunden)`:`Automatischer Import deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(Q$1),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des automatischen Imports`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(ee),bg(this.destroy$)).subscribe(({clearAfterArchive:i,message:e})=>{let t=bt(e),a=i?t?`Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen.`:`Messungen archiviert. Bereit für das nächste Rennen.`:`Messungen archiviert. Datenbank und Gerät wurden nicht verändert.`;this.snackBar.open(a,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(te),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Archivieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(be),bg(this.destroy$)).subscribe(({connected:i})=>{i&&this.store.dispatch(se())}),this.actions$.pipe(Wp(oe$1),bg(this.destroy$)).subscribe(()=>{this.store.dispatch(xe()),this.snackBar.open(`Ältester Start erfolgreich verworfen`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(ue),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Verwerfen des ältesten Starts`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(W),bg(this.destroy$)).subscribe(()=>{this.store.dispatch(se())}),this.actions$.pipe(Wp(ce),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messungen erfolgreich exportiert`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(me),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Exportieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(Wp(le$1),bg(this.destroy$)).subscribe(({result:i})=>{let e=i.skippedCount>0?`Import abgeschlossen: ${i.importedCount} importiert, ${i.skippedCount} \xFCbersprungen`:`Import abgeschlossen: ${i.importedCount} importiert`;this.snackBar.open(e,`OK`,{duration:i.skippedCount>0?8e3:3e3});let t=i.errors??[];if(t.length>0){let a=t.map(c=>`Zeile ${c.lineNumber}: ${c.reason}`).join(`
`);this.dialog.open(st,{width:`500px`,data:{title:`Übersprungene Zeilen`,message:a,confirmLabel:`OK`,hideCancel:!0}})}this.loadData()}),this.actions$.pipe(Wp(Me),bg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Importieren der Messungen: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.timingProviderActive$.pipe(bg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(se())})}ngAfterViewInit(){this.loadData(),this.store.dispatch(e()),this.store.dispatch(X()),this.autoRefresh$.pipe(wg(i=>i?Ig(2e3):Ue),bg(this.destroy$)).subscribe(()=>{this.loadMeasurementData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?`Automatische Aktualisierung aktiviert`:`Automatische Aktualisierung deaktiviert`;this.snackBar.open(i,`OK`,{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open(`Daten wurden aktualisiert`,`OK`,{duration:2e3})}loadData(){this.store.dispatch(r()),this.loadMeasurementData()}loadMeasurementData(){this.store.dispatch(F()),this.store.dispatch(xe()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString(`de-DE`)}getParticipantName(i,e){let t=e.find(a=>a.id===i);return t?.person?`${t.person.firstName} ${t.person.lastName}`:`-`}getParticipantNameByRaceNumber(i,e,t){let a=t.find(c=>c.race?.id===i&&c.raceNumber===e);return a?.person?`${a.person.firstName} ${a.person.lastName}`:`unbekannt`}onRaceChange(i){this.returnToRaceNumber=null,this.store.dispatch(g({id:i})),i!==null?this.store.dispatch(Fe({request:{raceId:i}})):this.store.dispatch(Ce$1())}skipAutoAssign(){this.store.dispatch(Oe())}setNextRaceNumber(){if(this.nextRaceNumberInput===null||this.nextRaceNumberInput===void 0)return;let i=Number(this.nextRaceNumberInput);this.pendingReturnRaceNumber=this.currentNextRaceNumber,this.pendingTargetRaceNumber=i,this.store.dispatch(ye({raceNumber:i,force:!1}))}returnToQueue(){this.returnToRaceNumber!==null&&(this.nextRaceNumberInput=this.returnToRaceNumber,this.setNextRaceNumber())}formatDeviceMeasurementId=s$1;describeMeasurement(i$1){return i(i$1.deviceMeasurementId)?`die manuell erfasste Messung (${this.formatDuration(i$1.durationMs)})`:`die Messung Ger\xE4te-Nr. ${i$1.deviceMeasurementId} (${this.formatDuration(i$1.durationMs)})`}isSyntheticDeviceMeasurementId=i;formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),a=Math.floor(e%3600/60),c=e%60,_=i%1e3;return t>0?`${t}:${String(a).padStart(2,`0`)}:${String(c).padStart(2,`0`)}.${String(_).padStart(3,`0`)}`:a>0?`${a}:${String(c).padStart(2,`0`)}.${String(_).padStart(3,`0`)}`:`${c}.${String(_).padStart(3,`0`)}s`}openCreateDialog(){this.dialog.open(_e,{width:`500px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(y({measurement:e}))})}openEditDialog(i){this.dialog.open(_e,{width:`500px`,data:i}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(P({id:i.id,measurement:t}))})}deleteMeasurement(i){this.dialog.open(st,{width:`450px`,data:{message:`M\xF6chten Sie ${this.describeMeasurement(i)} wirklich l\xF6schen?`,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(q({id:i.id}))})}resetMeasurements(i){let e=i?`Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!`:`Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?`;this.dialog.open(st,{width:`450px`,data:{message:e,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(j({resetDevice:i}))})}toggleContinuousMode(i){let e=i?`Möchten Sie den kontinuierlichen Modus wirklich aktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`:`Möchten Sie den kontinuierlichen Modus wirklich deaktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`;this.dialog.open(st,{width:`450px`,data:{message:e,confirmLabel:`Bestätigen`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(J({enable:i}))})}toggleScheduledImport(i){this.store.dispatch(G$1({enable:i}))}openArchiveDialog(){this.races$.pipe(tn(1)).subscribe(i=>{this.dialog.open(Je,{width:`500px`,data:{races:i}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(_(t))})})}discardOldestStart(){this.dialog.open(st,{width:`450px`,data:{message:`Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.`,confirmLabel:`Verwerfen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(ae())})}exportMeasurementsCsv(){this.store.dispatch(ie())}openImportDialog(){this.dialog.open(et,{width:`900px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(pe({file:e.file,delimiter:e.delimiter,mapping:e.mapping})),this.snackBar.open(`Import gestartet...`,`OK`,{duration:2e3}))})}static ɵfac=function(e){return new(e||n)};static ɵcmp=qE({type:n,selectors:[[`app-measurement-list`]],decls:96,vars:54,consts:[[`resetMenu`,`matMenu`],[1,`title-row`],[1,`sync-status`],[`color`,`primary`,`matTooltip`,`Automatische Aktualisierung`,3,`ngModelChange`,`change`,`ngModel`],[`matTooltip`,`Aktualisiere...`,1,`sync-icon`,`syncing`],[1,`sync-icon`,3,`matTooltip`],[1,`last-update-text`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Aktuelle Messungen einem Rennen zuordnen und archivieren`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Alle Messungen als CSV-Datei herunterladen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Messungen aus CSV-Datei importieren (mit Spalten-Zuordnung)`,3,`click`,`disabled`],[`diameter`,`20`,2,`display`,`inline-block`,`margin-right`,`8px`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Messungen zurücksetzen`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[1,`auto-assign-row`],[`label`,`Rennen (Automatik-Zuordnung)`,`emptyOptionLabel`,`— kein Rennen —`,1,`race-select`,3,`valueChange`,`matTooltip`,`races`,`value`,`disabled`],[1,`hint`],[1,`loading-overlay`],[1,`table-container`],[`mat-table`,``,1,`measurement-table`,3,`dataSource`,`trackBy`],[`matColumnDef`,`deviceMeasurementId`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,3,`matTooltip`,4,`matCellDef`],[`matColumnDef`,`duration`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`participant`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`count-info`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Aktuelle Startnummer überspringen (z. B. nicht gestartet)`,3,`click`,`disabled`],[1,`set-next-group`],[`type`,`number`,`min`,`1`,`placeholder`,`StNr.`,`aria-label`,`Nächste Startnummer setzen`,1,`set-next-input`,3,`ngModelChange`,`keyup.enter`,`ngModel`,`disabled`],[`mat-raised-button`,``,`matTooltip`,`Zuordnung auf diese Startnummer setzen - nach einem eingeschobenen Läufer oder um ein versehentliches Überspringen zu korrigieren`,3,`click`,`disabled`],[1,`next-number-info`],[1,`return-hint`],[`mat-raised-button`,``,`matTooltip`,`Zuordnung wieder auf die Startnummer setzen, die vor dem Versetzen erwartet wurde`,3,`click`,`disabled`],[`diameter`,`30`],[`mat-header-cell`,``],[`mat-cell`,``,3,`matTooltip`],[`mat-cell`,``],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){if(e&1){let a=_D();Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`)(3,`div`,1)(4,`span`),lw(5,`Messungen`),Jc(),Mi(6,`div`,2)(7,`mat-slide-toggle`,3),Mh(`ngModelChange`,function(_){return Pu(a),hw(t.autoRefreshEnabled,_)||(t.autoRefreshEnabled=_),Fu(_)}),sh(`change`,function(){return t.onAutoRefreshToggle()}),Jc(),eE(),gD(8,ka,2,0,`mat-icon`,4),bw(9,`async`),Kc(10,xa,2,2,`mat-icon`,5),Mi(11,`span`,6),lw(12),Jc()()()()(),Mi(13,`mat-card-content`)(14,`div`,7)(15,`button`,8),sh(`click`,function(){return t.openCreateDialog()}),Mi(16,`mat-icon`),lw(17,`add`),Jc(),lw(18,` Neue Messung `),Jc(),Mi(19,`button`,9),sh(`click`,function(){return t.manualRefresh()}),Mi(20,`mat-icon`),lw(21,`refresh`),Jc(),lw(22,` Manuell aktualisieren `),Jc(),Mi(23,`button`,10),sh(`click`,function(){return t.openArchiveDialog()}),Mi(24,`mat-icon`),lw(25,`archive`),Jc(),lw(26,` Archivieren `),Jc(),Mi(27,`button`,11),sh(`click`,function(){return t.exportMeasurementsCsv()}),Mi(28,`mat-icon`),lw(29,`download`),Jc(),lw(30,` CSV Export `),Jc(),Mi(31,`button`,12),bw(32,`async`),sh(`click`,function(){return t.openImportDialog()}),gD(33,Na,1,0,`mat-spinner`,13),bw(34,`async`),Kc(35,Ia,2,0,`mat-icon`),lw(36,` CSV Import `),Jc(),gD(37,Da,5,6),bw(38,`async`),gD(39,Ta,4,0,`button`,14),bw(40,`async`),Kc(41,$a,4,0,`button`,15),Mi(42,`button`,16)(43,`mat-icon`),lw(44,`delete_sweep`),Jc(),lw(45,` Zurücksetzen `),Mi(46,`mat-icon`),lw(47,`arrow_drop_down`),Jc()(),Mi(48,`mat-menu`,null,0)(50,`button`,17),sh(`click`,function(){return t.resetMeasurements(!1)}),Mi(51,`mat-icon`),lw(52,`delete_sweep`),Jc(),Mi(53,`span`),lw(54,`Alle Messungen löschen (nur Datenbank)`),Jc()(),Mi(55,`button`,17),sh(`click`,function(){return t.resetMeasurements(!0)}),Mi(56,`mat-icon`),lw(57,`delete_forever`),Jc(),Mi(58,`span`),lw(59,`Alle löschen (inkl. Gerät)`),Jc()()()(),Mi(60,`div`,18)(61,`app-race-select`,19),bw(62,`async`),bw(63,`async`),bw(64,`async`),bw(65,`async`),bw(66,`async`),sh(`valueChange`,function(_){return t.onRaceChange(_)}),Jc(),gD(67,Ba,2,3),bw(68,`async`),Kc(69,Va,2,0,`span`,20),Jc(),gD(70,Ga,2,0,`div`,21),bw(71,`async`),Mi(72,`div`,22)(73,`table`,23),bw(74,`async`),bw(75,`async`),tl(76,24),Gp(77,qa,2,0,`th`,25)(78,Ka,2,2,`td`,26),nl(),tl(79,27),Gp(80,Ha,2,0,`th`,25)(81,ja,2,1,`td`,28),nl(),tl(82,29),Gp(83,Wa,2,0,`th`,25)(84,Za,2,2,`td`,26),nl(),tl(85,30),Gp(86,Ua,2,0,`th`,25)(87,Qa,3,4,`td`,28),nl(),tl(88,31),Gp(89,Xa,2,0,`th`,25)(90,Ya,7,0,`td`,28),nl(),Gp(91,Ja,1,0,`tr`,32)(92,er,1,0,`tr`,33),Jc()(),Mi(93,`div`,34),lw(94),bw(95,`async`),Jc()()()}if(e&2){let a,c=BD(49);fI(7),Nh(`ngModel`,t.autoRefreshEnabled),nE(),fI(),mD(Cw(9,21,t.loading$)?8:10),fI(4),bh(t.lastUpdate),fI(19),Xp(`disabled`,Cw(32,23,t.importLoading$)),fI(2),mD(Cw(34,25,t.importLoading$)?33:35),fI(4),mD(Cw(38,27,t.timingProviderActive$)?37:-1),fI(2),mD(Cw(40,29,t.scheduledImportEnabled$)?39:41),fI(3),Xp(`matMenuTriggerFor`,c),fI(19),Xp(`matTooltip`,Cw(62,31,t.scheduledImportEnabled$)?`Automatischen Import zuerst deaktivieren, um das Rennen zu wechseln`:`Rennen auswählen startet die automatische Zuordnung, abwählen stoppt sie`)(`races`,Cw(63,33,t.races$)??Ew(51,tt))(`value`,Cw(64,35,t.selectedRaceId$))(`disabled`,!!Cw(65,37,t.scheduledImportEnabled$)||!!Cw(66,39,t.autoAssignBusy$)),fI(6),mD((a=Cw(68,41,t.selectedRaceId$))?67:69,a),fI(3),mD(Cw(71,43,t.loading$)?70:-1),fI(3),mh(`loading`,Cw(74,45,t.loading$)),Xp(`dataSource`,Cw(75,47,t.measurementsWithParticipants$)||Ew(52,tt))(`trackBy`,t.trackById),fI(18),Xp(`matHeaderRowDef`,t.displayedColumns),fI(),Xp(`matRowDefColumns`,t.displayedColumns),fI(2),rl(`Anzahl der Messungen: `,(Cw(95,49,t.measurements$)||Ew(53,tt)).length)}},dependencies:[di,ci,Jt,ti,ri,ii$1,ei,si,oi,ni,ai,li,sh$1,ah,Es,yt$1,wt,lp,ap,ot,kp,Zm,Gm,$m,Xm,qm,Yt,mt,Ln,gt,Lt,I,G$2,Bt,ee$1,Vo,xu,ao,tl$1,vu,Pa$1,Ja$1,Wo,Zo],styles:[`.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;position:relative;flex-wrap:wrap;align-items:center}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.auto-assign-row[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}.race-select[_ngcontent-%COMP%]{min-width:280px}.return-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-basis:100%;margin-top:4px;padding:8px 12px;border-radius:4px;background:#ffab001f}.return-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex-shrink:0}.set-next-group[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px}.set-next-input[_ngcontent-%COMP%]{width:72px;padding:6px 8px;font:inherit;border:1px solid rgba(0,0,0,.38);border-radius:4px;background:transparent;color:inherit}.set-next-input[_ngcontent-%COMP%]:disabled{opacity:.5}.next-number-info[_ngcontent-%COMP%]{font-size:.9rem;color:#000000b3}.hint[_ngcontent-%COMP%]{color:#0009}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}}`]})};export{Gn as MeasurementListComponent};