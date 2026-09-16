import{$n as jD,B as Hv,Br as tE,D as Fu,Dn as bh,En as bg,Fr as rl,Ft as Ue$1,Gr as uh,H as Ig,Hr as tl,I as HD,J as Jp,Jr as uu,K as Jc,Kt as WE,Ln as eh,Lt as Uj,Mn as cw,Mt as Tw,N as Gp,Nn as dI,O as G,Or as qj,Pt as UE,Qr as wg,Rr as sh,St as QE,Tr as pw,Un as gD,Ur as tn,V as ID,W as Iw,Xr as vw,Xt as XI,Y as KD,Yn as hw,Yr as vD,Z as Kc,Zn as iy,Zt as Xa,ai as yg,an as Yo,at as Mh,b as Eg,br as oe,bt as Pu,c as A,d as Bj,dr as lh,dt as Nh,ei as ww,et as LD,g as Cw,h as Co,hn as Zu,ht as OD,ii as yD,ir as kD,jt as Th,k as Ge,kt as T,mr as mh,nn as Xp,oi as z,ot as Mi,p as CD,pr as mD,qn as hD,st as Mr,tr as jh,vr as nl,wt as Re,x as FD,xr as oh,xt as Q,y as Ee,z as Hn$1}from"./chunk-DX9tseHx.js";import{$t as kD$1,B as OD$1,C as Ic,Ct as Zn$1,G as Ot,Gt as iN,In as vx,Jt as im,Kt as ic,Ln as we,Nn as ut$1,Pn as ve$1,Q as RD,Qt as ju,R as Nm,S as ID$1,Tt as _x,Ut as gr,Vt as gE,Y as Pt,Z as Qn$1,_n as pN,a as Am,at as Sx,bn as qa$1,bt as Zc,c as BE,cn as nr,ct as Tr,dt as VE,gn as pE,gt as Wo,ht as Vu,in as mN,it as Sm,j as MN,k as Le,kt as bx,l as Cc,mn as or,n as AD,on as nN,ot as TD,p as Dx,pn as om,r as AN,sn as np,tn as kh,u as Cm,v as Gi,wn as re}from"./chunk-CmjjVoXL.js";import{t as l}from"./chunk-BtTsS2yV.js";import{$r as be,Ar as Fe,Br as Me,Cr as $e,Dr as De,Er as Ce,Fr as J,Gr as Qe$1,Hr as Oe,Ir as Je,Jr as V,Jt as I,Kr as Re$1,Kt as Bt,Lr as K,Mr as H,Nr as He,Or as E,Pr as Ie,Pt as t,Qr as ae,R as i,Rr as Ke,Tr as B,Tt as S$1,Ur as P,Vr as N,Wr as Q$1,Xr as X,Yr as W,Yt as Lt,Zr as _,_i as xe,a as Xe,ai as k,ci as oe$1,di as qe,ei as ce,fi as se,gi as x,hi as w,i as Wt,ii as j,jr as G$1,kr as F,li as pe,mi as ue,ni as fe,o as we$1,oi as le,pi as te,qr as Ue$2,qt as G$2,r as We$1,ri as ie,s as m,si as me,ti as ee,ui as q,vi as y,wi as a,wn as S,wr as A$1,yi as z$1,zr as L}from"./main-HSMJF6EQ.js";import{t as s}from"./chunk-cV4kY63s.js";import{b as wn,c as fo,d as he,f as mn,g as po,h as pn,i as Ti,l as gn,m as nt,n as Dn$1,o as _n,p as mo,r as Rn,s as bn,t as Cn,u as go,x as yn,y as vn}from"./chunk-CNYppcLH.js";import{n as Xt,t as Mt}from"./chunk-B0XBG_UN.js";var Tn=[`switch`];var $n=[`*`];function Fn(n,t){n&1&&(Mi(0,`span`,11),Zu(),Mi(1,`svg`,13),eh(2,`path`,14),Jc(),Mi(3,`svg`,15),eh(4,`path`,16),Jc()())}var Ln=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var je=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var at=(()=>{class n{_elementRef=T(Mr);_focusMonitor=T(Gi);_changeDetectorRef=T(Bj);defaults=T(Ln);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new je(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Le();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Ge;toggleChange=new Ge;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){T(ve$1).load(nr);let e=T(new jh(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=T(we).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new je(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||n)};static ɵcmp=UE({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(i,a){if(i&1&&uh(Tn,5),i&2){let l;FD(l=jD())&&(a._switchElement=l.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(i,a){i&2&&(oh(`id`,a.id),Jp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),KD(a.color?`mat-`+a.color:``),mh(`mat-mdc-slide-toggle-focused`,a._focused)(`mat-mdc-slide-toggle-checked`,a.checked)(`mat-slide-toggle-full-width`,a.fullWidth)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Uj],color:`color`,disabled:[2,`disabled`,`disabled`,Uj],fullWidth:[2,`fullWidth`,`fullWidth`,Uj],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qj(e)],checked:[2,`checked`,`checked`,Uj],hideIcon:[2,`hideIcon`,`hideIcon`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[vw([{provide:gr,useExisting:Co(()=>n),multi:!0},{provide:ut$1,useExisting:n,multi:!0}]),iy],ngContentSelectors:$n,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(i,a){if(i&1&&(kD(),Mi(0,`div`,1)(1,`button`,2,0),sh(`click`,function(){return a._handleClick()}),eh(3,`div`,3)(4,`span`,4),Mi(5,`span`,5)(6,`span`,6)(7,`span`,7),eh(8,`span`,8),Jc(),Mi(9,`span`,9),eh(10,`span`,10),Jc(),hD(11,Fn,5,0,`span`,11),Jc()()(),Mi(12,`label`,12),sh(`click`,function(b){return b.stopPropagation()}),LD(13),Jc()()),i&2){let l=HD(2);Xp(`labelPosition`,a.labelPosition),dI(),mh(`mdc-switch--selected`,a.checked)(`mdc-switch--unselected`,!a.checked)(`mdc-switch--checked`,a.checked)(`mdc-switch--disabled`,a.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,a.disabledInteractive),Xp(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex)(`disabled`,a.disabled&&!a.disabledInteractive),Jp(`id`,a.buttonId)(`name`,a.name)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a._getAriaLabelledBy())(`aria-describedby`,a.ariaDescribedby)(`aria-required`,a.required||null)(`aria-checked`,a.checked)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),dI(9),Xp(`matRippleTrigger`,l)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0),dI(),gD(a.hideIcon?-1:11),dI(),Xp(`for`,a.buttonId),Jp(`id`,a._labelId)}},dependencies:[ic,m],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var kn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=WE({type:n});static ɵinj=uu({imports:[at,re]})}return n})();var Pn=`device reset`;function rt(n){return n.toLowerCase().includes(Pn)}function zn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Minuten erforderlich`),Jc())}function Bn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Minuten müssen >= 0 sein`),Jc())}function Gn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Sekunden erforderlich`),Jc())}function Vn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Sekunden: 0-59`),Jc())}function qn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Millisekunden erforderlich`),Jc())}function Kn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Millisekunden: 0-999`),Jc())}function Hn(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Messzeit ist erforderlich`),Jc())}var ve=class n{fb=T(OD$1);dialogRef=T(he);data=T(Ti);form;constructor(){let t=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[t.minutes,[Ot.required,Ot.min(0)]],seconds:[t.seconds,[Ot.required,Ot.min(0),Ot.max(59)]],milliseconds:[t.milliseconds,[Ot.required,Ot.min(0),Ot.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),Ot.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let t=this.form.value,e=this.convertToMilliseconds(Number(t.minutes),Number(t.seconds),Number(t.milliseconds)),i={participantId:this.data?.participantId??null,durationMs:e,measuredAt:this.formatDateTimeForBackend(t.measuredAt)};this.dialogRef.close(i)}}formatDateTimeForInput(t){if(!t){let i=new Date;return this.toLocalISOString(i)}let e=new Date(t);return this.toLocalISOString(e)}toLocalISOString(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}T${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(t){let e=new Date(t);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}convertToMilliseconds(t,e,i){return t*60*1e3+e*1e3+i}splitMilliseconds(t){let e=Math.floor(t/6e4),i=t%(60*1e3);return{minutes:e,seconds:Math.floor(i/1e3),milliseconds:i%1e3}}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-measurement-dialog`]],decls:33,vars:10,consts:[[`mat-dialog-title`,``],[1,`measurement-form`,3,`formGroup`],[1,`time-input-group`],[`appearance`,`outline`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`,`required`,``],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`,`required`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,i){e&1&&(Mi(0,`h2`,0),cw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`mat-form-field`,3)(6,`mat-label`),cw(7,`Minuten`),Jc(),eh(8,`input`,4),XI(),hD(9,zn,2,0,`mat-error`),hD(10,Bn,2,0,`mat-error`),Jc(),Mi(11,`mat-form-field`,3)(12,`mat-label`),cw(13,`Sekunden`),Jc(),eh(14,`input`,5),XI(),hD(15,Gn,2,0,`mat-error`),hD(16,Vn,2,0,`mat-error`),Jc(),Mi(17,`mat-form-field`,3)(18,`mat-label`),cw(19,`Millisekunden`),Jc(),eh(20,`input`,6),XI(),hD(21,qn,2,0,`mat-error`),hD(22,Kn,2,0,`mat-error`),Jc()(),Mi(23,`mat-form-field`,3)(24,`mat-label`),cw(25,`Gemessen am (ISO Format)`),Jc(),eh(26,`input`,7),XI(),hD(27,Hn,2,0,`mat-error`),Jc()()(),Mi(28,`mat-dialog-actions`,8)(29,`button`,9),sh(`click`,function(){return i.onCancel()}),cw(30,`Abbrechen`),Jc(),Mi(31,`button`,10),sh(`click`,function(){return i.onSave()}),cw(32,` Speichern `),Jc()()),e&2&&(dI(),bh(i.data?`Messung bearbeiten`:`Neue Messung`),dI(2),Xp(`formGroup`,i.form),dI(5),tE(),dI(),gD(i.form.get(`minutes`)?.hasError(`required`)&&i.form.get(`minutes`)?.touched?9:-1),dI(),gD(i.form.get(`minutes`)?.hasError(`min`)?10:-1),dI(4),tE(),dI(),gD(i.form.get(`seconds`)?.hasError(`required`)&&i.form.get(`seconds`)?.touched?15:-1),dI(),gD(i.form.get(`seconds`)?.hasError(`min`)||i.form.get(`seconds`)?.hasError(`max`)?16:-1),dI(4),tE(),dI(),gD(i.form.get(`milliseconds`)?.hasError(`required`)&&i.form.get(`milliseconds`)?.touched?21:-1),dI(),gD(i.form.get(`milliseconds`)?.hasError(`min`)||i.form.get(`milliseconds`)?.hasError(`max`)?22:-1),dI(4),tE(),dI(),gD(i.form.get(`measuredAt`)?.hasError(`required`)&&i.form.get(`measuredAt`)?.touched?27:-1),dI(4),Xp(`disabled`,!i.form.valid))},dependencies:[qa$1,kD$1,TD,Ic,Cm,AD,RD,Zc,om,im,Zn$1,Nm,go,fo,po,mo,Qn$1,Cc,Wo,kh,iN,nN,BE,VE],styles:[`.measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var jn=[`input`];var Un=[`formField`];var Wn=[`*`];var Ue=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Qn={provide:gr,useExisting:Co(()=>ct),multi:!0};var Nn=new A(`MatRadioGroup`);var Zn=new A(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var ct=(()=>{class n{_changeDetector=T(Bj);_value=null;_name=T(we).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ge;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ue(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(i){return new(i||n)};static ɵdir=QE({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(i,a,l){if(i&1&&lh(l,We,5),i&2){let b;FD(b=jD())&&(a._radios=b)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Uj],required:[2,`required`,`required`,Uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[vw([Qn,{provide:Nn,useExisting:n}])]})}return n})();var We=(()=>{class n{_elementRef=T(Mr);_changeDetector=T(Bj);_focusMonitor=T(Gi);_radioDispatcher=T(Am);_defaultOptions=T(Zn,{optional:!0});_ngZone=T(Re);_renderer=T(Xa);_uniqueId=T(we).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ge;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Le();_injector=T(Ee);constructor(){T(ve$1).load(nr);let e=T(Nn,{optional:!0}),i=T(new jh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=qj(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Ue(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,i+``),this._previousTabIndex=i,Hv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(i){return new(i||n)};static ɵcmp=UE({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(i,a){if(i&1&&uh(jn,5)(Un,7,Mr),i&2){let l;FD(l=jD())&&(a._inputElement=l.first),FD(l=jD())&&(a._rippleTrigger=l.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(i,a){i&1&&sh(`focus`,function(){return a._inputElement.nativeElement.focus()}),i&2&&(Jp(`id`,a.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),mh(`mat-primary`,a.color===`primary`)(`mat-accent`,a.color===`accent`)(`mat-warn`,a.color===`warn`)(`mat-mdc-radio-checked`,a.checked)(`mat-mdc-radio-disabled`,a.disabled)(`mat-mdc-radio-disabled-interactive`,a.disabledInteractive)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qj(e)],checked:[2,`checked`,`checked`,Uj],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Uj],required:[2,`required`,`required`,Uj],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Uj]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Wn,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(i,a){i&1&&(kD(),Mi(0,`label`,2,0)(2,`span`,3),eh(3,`span`,4),Mi(4,`input`,5,1),sh(`change`,function(b){return a._onInputInteraction(b)}),Jc(),Mi(6,`span`,6),eh(7,`span`,7)(8,`span`,8),Jc(),Mi(9,`span`,9),eh(10,`span`,10),Jc()(),Mi(11,`span`,11),LD(12),Jc()()),i&2&&(Xp(`labelPosition`,a.labelPosition)(`for`,a.inputId),dI(2),mh(`mdc-radio--disabled`,a.disabled),dI(2),Xp(`id`,a.inputId)(`checked`,a.checked)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Jp(`name`,a.name)(`value`,a.value)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),dI(5),Xp(`matRippleTrigger`,a._rippleTrigger.nativeElement)(`matRippleDisabled`,a._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[ic,m],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var En=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=WE({type:n});static ɵinj=uu({imports:[Tr,We,re]})}return n})();var Yn=(n,t)=>t.id;function Jn(n,t){if(n&1&&(Mi(0,`mat-option`,4),cw(1),Jc()),n&2){let e=t.$implicit,i=OD();Xp(`value`,e.id),dI(),Th(``,e.name,` (`,i.formatRaceDate(e.date),`)`)}}function ea(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Bitte ein Rennen auswählen`),Jc())}function ta(n,t){n&1&&(Mi(0,`mat-error`),cw(1,`Bitte eine Archivierungs-Variante auswählen`),Jc())}var Qe=class n{fb=T(OD$1);dialogRef=T(he);data=T(Ti);form=this.fb.group({raceId:[null,Ot.required],mode:[null,Ot.required]});onCancel(){this.dialogRef.close()}onSave(){if(!this.form.valid)return;let t=this.form.value.mode,e={raceId:Number(this.form.value.raceId),resetDevice:t===`reset`,clearAfterArchive:t!==`noclear`};this.dialogRef.close(e)}formatRaceDate(t){let e=t.split(`-`);return e.length===3?`${e[2]}.${e[1]}.${e[0]}`:t}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-archive-measurements-dialog`]],decls:30,vars:4,consts:[[`mat-dialog-title`,``],[1,`archive-form`,3,`formGroup`],[`appearance`,`outline`],[`formControlName`,`raceId`,`required`,``],[3,`value`],[`formControlName`,`mode`,1,`mode-group`],[`value`,`reset`],[1,`hint`],[`value`,`keep`],[`value`,`noclear`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,i){e&1&&(Mi(0,`h2`,0),cw(1,`Messungen archivieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`mat-form-field`,2)(5,`mat-label`),cw(6,`Rennen`),Jc(),Mi(7,`mat-select`,3),vD(8,Jn,2,3,`mat-option`,4,Yn),Jc(),XI(),hD(10,ea,2,0,`mat-error`),Jc(),Mi(11,`mat-radio-group`,5)(12,`mat-radio-button`,6),cw(13,` Archivieren (inkl. Gerät-Reset) `),Mi(14,`p`,7),cw(15,`Aktuelle Messungen werden diesem Rennen zugeordnet, danach werden Datenbank und Gerät geleert. Bereit für das nächste Rennen.`),Jc()(),Mi(16,`mat-radio-button`,8),cw(17,` Archivieren (nur Datenbank) `),Mi(18,`p`,7),cw(19,`Wie oben, aber nur die Datenbank wird geleert, das Gerät bleibt unverändert.`),Jc()(),Mi(20,`mat-radio-button`,9),cw(21,` Archivieren (ohne Löschen) `),Mi(22,`p`,7),cw(23,`Aktuelle Messungen werden diesem Rennen zugeordnet. Datenbank und Gerät werden dabei NICHT verändert.`),Jc()()(),XI(),hD(24,ta,2,0,`mat-error`),Jc()(),Mi(25,`mat-dialog-actions`,10)(26,`button`,11),sh(`click`,function(){return i.onCancel()}),cw(27,`Abbrechen`),Jc(),Mi(28,`button`,12),sh(`click`,function(){return i.onSave()}),cw(29,` Archivieren `),Jc()()),e&2&&(dI(3),Xp(`formGroup`,i.form),dI(4),tE(),dI(),ID(i.data.races),dI(2),gD(i.form.get(`raceId`)?.hasError(`required`)&&i.form.get(`raceId`)?.touched?10:-1),dI(),tE(),dI(13),gD(i.form.get(`mode`)?.hasError(`required`)&&i.form.get(`mode`)?.touched?24:-1),dI(4),Xp(`disabled`,!i.form.valid))},dependencies:[qa$1,kD$1,TD,AD,RD,Zc,Zn$1,Nm,go,fo,po,mo,Qn$1,Cc,Wo,kh,gE,pE,or,En,ct,We,BE,VE],styles:[`.archive-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-width:420px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mode-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.hint[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#0009}`]})};var An=[{key:`participantId`,label:`Teilnehmer-ID`,required:!1},{key:`durationMs`,label:`Dauer (ms)`,required:!0},{key:`measuredAt`,label:`Gemessen am`,required:!1}];var aa=(n,t)=>t.value;var mt=(n,t)=>t.key;function ra(n,t){if(n&1&&(Mi(0,`span`,6),cw(1),Jc()),n&2){let e=OD();dI(),bh(e.file().name)}}function oa(n,t){if(n&1&&(Mi(0,`mat-option`,15),cw(1),Jc()),n&2){let e=t.$implicit;Xp(`value`,e.value),dI(),bh(e.label)}}function sa(n,t){if(n&1){let e=CD();Mi(0,`div`,7)(1,`mat-form-field`,13)(2,`mat-label`),cw(3,`Trennzeichen`),Jc(),Mi(4,`mat-select`,14),sh(`selectionChange`,function(a){Pu(e);return Fu(OD().onDelimiterChange(a.value))}),vD(5,oa,2,2,`mat-option`,15,aa),Jc()()()}if(n&2){let e=OD();dI(4),Xp(`value`,e.delimiter()),dI(),ID(e.delimiterOptions)}}function da(n,t){n&1&&(Mi(0,`div`,8),eh(1,`mat-spinner`,16),Mi(2,`span`),cw(3,`Datei wird analysiert...`),Jc()())}function la(n,t){if(n&1&&(Mi(0,`p`,9),cw(1),Jc()),n&2){let e=OD();dI(),bh(e.previewError())}}function ca(n,t){if(n&1&&(Mi(0,`mat-option`,15),cw(1),Jc()),n&2){let e=t.$implicit;Xp(`value`,e),dI(),bh(e)}}function ma(n,t){if(n&1&&(Mi(0,`mat-form-field`,13)(1,`mat-label`),cw(2),Jc(),Mi(3,`mat-select`,18)(4,`mat-option`,19),cw(5,`— nicht importieren —`),Jc(),vD(6,ca,2,2,`mat-option`,15,yD),Jc(),XI(),Jc()),n&2){let e=t.$implicit,i=OD();dI(2),Th(``,e.label,``,e.required?` *`:``),dI(),Xp(`formControlName`,e.key),tE(),dI(3),ID(i.availableFields)}}function ua(n,t){if(n&1&&(Mi(0,`th`),cw(1),Jc()),n&2){let e=t.$implicit;dI(),bh(e.label)}}function pa(n,t){if(n&1&&(Mi(0,`td`),cw(1),Jc()),n&2){let e=t.$implicit,i=OD().$implicit,a=OD(3);dI(),bh(a.previewValue(i,e.key))}}function ha(n,t){if(n&1&&(Mi(0,`tr`),vD(1,pa,2,1,`td`,null,mt),Jc()),n&2){let e=OD(3);dI(),ID(e.targetFields)}}function ga(n,t){if(n&1&&(Mi(0,`h3`),cw(1,`Vorschau`),Jc(),Mi(2,`div`,20)(3,`table`,21)(4,`thead`)(5,`tr`),vD(6,ua,2,1,`th`,null,mt),Jc()(),Mi(8,`tbody`),vD(9,ha,3,0,`tr`,null,mD),Jc()()()),n&2){let e=OD(),i=OD();dI(6),ID(i.targetFields),dI(3),ID(e.sampleRows)}}function _a(n,t){if(n&1&&(Mi(0,`h3`),cw(1,`Spalten zuordnen`),Jc(),Mi(2,`form`,17),vD(3,ma,8,3,`mat-form-field`,13,mt),Jc(),hD(5,ga,11,0)),n&2){let e=OD();dI(2),Xp(`formGroup`,e.mappingForm),dI(),ID(e.targetFields),dI(2),gD(t.sampleRows.length>0?5:-1)}}var Ze=class n{fb=T(OD$1);measurementService=T(x);dialogRef=T(he);targetFields=An;delimiterOptions=[{value:``,label:`Automatisch erkennen`},{value:`;`,label:`Semikolon (;)`},{value:`,`,label:`Komma (,)`},{value:`	`,label:`Tab`},{value:`|`,label:`Pipe (|)`}];file=Yo(null);delimiter=Yo(``);previewLoading=Yo(!1);previewError=Yo(null);preview=Yo(null);mappingForm=this.fb.group(Object.fromEntries(this.targetFields.map(t=>[t.key,[``]])));onFileSelected(t){let i=t.target.files?.[0]??null;this.file.set(i),this.preview.set(null),this.previewError.set(null),i?this.analyze():(this.analyzeRequestId++,this.previewLoading.set(!1))}onDelimiterChange(t){this.delimiter.set(t),this.analyze()}analyzeRequestId=0;analyze(){let t=this.file();if(!t)return;let e=++this.analyzeRequestId;this.previewLoading.set(!0),this.previewError.set(null),this.measurementService.previewImport(t,this.delimiter()||void 0).subscribe({next:i=>{if(e!==this.analyzeRequestId)return;this.previewLoading.set(!1),this.preview.set(i);let a={};for(let l of this.targetFields)a[l.key]=i.suggestedMapping[l.key]??``;this.mappingForm.patchValue(a)},error:i=>{e===this.analyzeRequestId&&(this.previewLoading.set(!1),this.preview.set(null),this.previewError.set(i?.error?.message??`Datei konnte nicht gelesen/analysiert werden.`))}})}previewValue(t,e){let i=this.mappingForm.get(e)?.value;return i?t[i]??``:``}onCancel(){this.dialogRef.close()}onImport(){let t=this.file();if(!t)return;let e=this.mappingForm.value,i={};for(let[l,b]of Object.entries(e))b&&(i[l]=b);let a={file:t,delimiter:this.delimiter()||void 0,mapping:i};this.dialogRef.close(a)}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-measurement-import-mapping-dialog`]],decls:22,vars:6,consts:[[`fileInput`,``],[`mat-dialog-title`,``],[1,`hint`],[1,`file-row`],[`type`,`file`,`accept`,`.csv,.txt,text/csv`,`hidden`,``,3,`change`],[`mat-raised-button`,``,3,`click`],[1,`filename`],[1,`format-row`],[1,`loading-row`],[1,`error`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`],[`appearance`,`outline`],[3,`selectionChange`,`value`],[3,`value`],[`diameter`,`24`],[1,`mapping-grid`,3,`formGroup`],[3,`formControlName`],[`value`,``],[1,`preview-table-wrapper`],[1,`preview-table`]],template:function(e,i){if(e&1){let a=CD();Mi(0,`h2`,1),cw(1,`Messungen importieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`p`,2),cw(4,` CSV-Datei (beliebiges Trennzeichen). Ordne die Spalten der Datei unseren Feldern zu - das Mapping wird nicht gespeichert und muss bei jedem Import neu gewählt werden. Nicht zugeordnete Felder werden einfach nicht importiert. `),Jc(),Mi(5,`div`,3)(6,`input`,4,0),sh(`change`,function(b){return i.onFileSelected(b)}),Jc(),Mi(8,`button`,5),sh(`click`,function(){Pu(a);return Fu(HD(7).click())}),Mi(9,`mat-icon`),cw(10,`upload_file`),Jc(),cw(11,` Datei wählen `),Jc(),hD(12,ra,2,1,`span`,6),Jc(),hD(13,sa,7,1,`div`,7),hD(14,da,4,0,`div`,8),hD(15,la,2,1,`p`,9),hD(16,_a,6,2),Jc(),Mi(17,`mat-dialog-actions`,10)(18,`button`,11),sh(`click`,function(){return i.onCancel()}),cw(19,`Abbrechen`),Jc(),Mi(20,`button`,12),sh(`click`,function(){return i.onImport()}),cw(21,` Importieren `),Jc()()}if(e&2){let a;dI(12),gD(i.file()?12:-1),dI(),gD(i.file()?13:-1),dI(),gD(i.previewLoading()?14:-1),dI(),gD(i.previewError()?15:-1),dI(),gD((a=i.preview())?16:-1,a),dI(4),Xp(`disabled`,!i.preview()||i.previewLoading())}},dependencies:[qa$1,kD$1,TD,AD,RD,Zn$1,Nm,go,fo,po,mo,Qn$1,Cc,Wo,BE,VE,gE,pE,or,We$1,Xe,pN,mN],styles:[`mat-dialog-content[_ngcontent-%COMP%]{min-width:500px;max-width:80vw}.hint[_ngcontent-%COMP%]{font-size:12px;color:#0009}.file-row[_ngcontent-%COMP%], .format-row[_ngcontent-%COMP%], .loading-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:8px}.filename[_ngcontent-%COMP%]{font-size:13px}.error[_ngcontent-%COMP%]{color:#b00020}.mapping-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:4px 16px}.preview-table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}.preview-table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:12px;width:100%}.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);padding:4px 8px;text-align:left;white-space:nowrap}`]})};var ut=()=>[];var ba=(n,t)=>t.id;function fa(n,t){n&1&&(Mi(0,`mat-icon`,4),cw(1,`sync `),Jc())}function va(n,t){if(n&1&&(Mi(0,`mat-icon`,5),cw(1,`sync `),Jc()),n&2)Xp(`matTooltip`,hw(`Letzte Aktualisierung: `,OD().lastUpdate))}function ya(n,t){n&1&&eh(0,`mat-spinner`,13)}function Ma(n,t){n&1&&(Mi(0,`mat-icon`),cw(1,`upload_file`),Jc())}function Sa(n,t){if(n&1){let e=CD();Mi(0,`button`,40),sh(`click`,function(){Pu(e);return Fu(OD(2).toggleContinuousMode(!1))}),Mi(1,`mat-icon`),cw(2,`stop`),Jc(),cw(3,` Kontinuierlich AUS `),Jc()}}function Ca(n,t){if(n&1){let e=CD();Mi(0,`button`,41),sh(`click`,function(){Pu(e);return Fu(OD(2).toggleContinuousMode(!0))}),Mi(1,`mat-icon`),cw(2,`play_arrow`),Jc(),cw(3,` Kontinuierlich AN `),Jc()}}function wa(n,t){if(n&1){let e=CD();Mi(0,`button`,42),sh(`click`,function(){Pu(e);return Fu(OD(2).discardOldestStart())}),Mi(1,`mat-icon`),cw(2,`person_off`),Jc(),cw(3,` Sturz signalisieren `),Jc()}}function ka(n,t){if(n&1&&(hD(0,Sa,4,0,`button`,37),ww(1,`async`),Kc(2,Ca,4,0,`button`,38),hD(3,wa,4,0,`button`,39),ww(4,`async`)),n&2){let e=OD();gD(Tw(1,2,e.deviceStatus$)===`continuous`?0:2),dI(3),gD(Tw(4,4,e.deviceStatus$)===`normal`?3:-1)}}function xa(n,t){if(n&1){let e=CD();Mi(0,`button`,43),sh(`click`,function(){Pu(e);return Fu(OD().toggleScheduledImport(!1))}),Mi(1,`mat-icon`),cw(2,`cloud_sync`),Jc(),cw(3,` Auto-Import AUS `),Jc()}}function Na(n,t){if(n&1){let e=CD();Mi(0,`button`,44),sh(`click`,function(){Pu(e);return Fu(OD().toggleScheduledImport(!0))}),Mi(1,`mat-icon`),cw(2,`cloud_download`),Jc(),cw(3,` Auto-Import AN `),Jc()}}function Ea(n,t){if(n&1&&(Mi(0,`mat-option`,21),cw(1),Jc()),n&2){let e=t.$implicit,i=OD();Xp(`value`,e.id),dI(),Th(``,e.name,` (`,i.formatRaceDate(e.date),`)`)}}function Ia(n,t){if(n&1&&(Mi(0,`strong`),cw(1),Jc(),cw(2),ww(3,`async`)),n&2){let e=OD(2),i=OD(),a=OD();dI(),bh(e.nextRaceNumber),dI(),rl(` (`,a.getParticipantNameByRaceNumber(i,e.nextRaceNumber,Tw(3,2,a.participants$)||Iw(4,ut)),`) `)}}function Aa(n,t){n&1&&(Mi(0,`em`),cw(1,`keine weiteren Startnummern`),Jc())}function Da(n,t){if(n&1){let e=CD();Mi(0,`button`,45),sh(`click`,function(){Pu(e);return Fu(OD(3).skipAutoAssign())}),Mi(1,`mat-icon`),cw(2,`skip_next`),Jc(),cw(3,` Überspringen `),Jc(),Mi(4,`span`,46),cw(5,` Nächste erwartete Startnummer: `),hD(6,Ia,4,5)(7,Aa,2,0,`em`),Jc()}if(n&2){let e=OD();dI(6),gD(e.nextRaceNumber!==null?6:7)}}function Ra(n,t){if(n&1&&hD(0,Da,8,1),n&2){let e=t,i=OD();gD(e.active&&e.raceId===i?0:-1)}}function Ta(n,t){if(n&1&&(hD(0,Ra,1,1),ww(1,`async`)),n&2){let e;gD((e=Tw(1,1,OD().autoAssignStatus$))?0:-1,e)}}function $a(n,t){n&1&&(Mi(0,`span`,22),cw(1,`Rennen auswählen, um Messungen automatisch zuzuordnen.`),Jc())}function Fa(n,t){n&1&&(Mi(0,`div`,23),eh(1,`mat-spinner`,47),Jc())}function La(n,t){n&1&&(Mi(0,`th`,48),cw(1,`ID`),Jc())}function Oa(n,t){if(n&1&&(Mi(0,`td`,49),cw(1),Jc()),n&2){let e=t.$implicit;dI(),bh(e.id)}}function Pa(n,t){n&1&&(Mi(0,`th`,48),cw(1,`Dauer`),Jc())}function za(n,t){if(n&1&&(Mi(0,`td`,49),cw(1),Jc()),n&2){let e=t.$implicit,i=OD();dI(),rl(` `,i.formatDuration(e.durationMs),` `)}}function Ba(n,t){n&1&&(Mi(0,`th`,48),cw(1,`Teilnehmer`),Jc())}function Ga(n,t){if(n&1&&(Mi(0,`td`,50),cw(1),Jc()),n&2){let e=t.$implicit;Xp(`matTooltip`,e.participantId?`Bereits einem Rennen zugeordnet`:``),dI(),rl(` `,e.participantName||`-`,` `)}}function Va(n,t){n&1&&(Mi(0,`th`,48),cw(1,`Gemessen am`),Jc())}function qa(n,t){if(n&1&&(Mi(0,`td`,49),cw(1),ww(2,`date`),Jc()),n&2){let e=t.$implicit;dI(),rl(` `,Cw(2,1,e.measuredAt,`dd.MM.yyyy HH:mm:ss`),` `)}}function Ka(n,t){n&1&&(Mi(0,`th`,48),cw(1,`Aktionen`),Jc())}function Ha(n,t){if(n&1){let e=CD();Mi(0,`td`,49)(1,`button`,51),sh(`click`,function(){let a=Pu(e).$implicit;return Fu(OD().openEditDialog(a))}),Mi(2,`mat-icon`),cw(3,`edit`),Jc()(),Mi(4,`button`,52),sh(`click`,function(){let a=Pu(e).$implicit;return Fu(OD().deleteMeasurement(a))}),Mi(5,`mat-icon`),cw(6,`delete`),Jc()()()}}function ja(n,t){n&1&&eh(0,`tr`,53)}function Ua(n,t){n&1&&eh(0,`tr`,54)}var Dn=class n{store=T(Pt);dialog=T(nt);snackBar=T(Mt);actions$=T(MN);destroy$=new Q;autoRefresh$=new Q;trackById=(t,e)=>e.id;measurements$;races$;participants$;measurementsWithParticipants$;selectedRaceId$;autoAssignStatus$;loading$;scheduledImportEnabled$;deviceStatus$;timingProviderActive$;importLoading$;displayedColumns=[`id`,`duration`,`measuredAt`,`participant`,`actions`];lastUpdate=``;autoRefreshEnabled=!1;constructor(){this.measurements$=this.store.select(A$1),this.races$=this.store.select(l),this.participants$=this.store.select(a),this.loading$=this.store.select(qe),this.timingProviderActive$=this.store.select(S).pipe(Hn$1(t=>t!==null),Eg()),this.measurementsWithParticipants$=yg([this.measurements$,this.participants$]).pipe(oe(([t,e])=>t.map(i=>z(G({},i),{participantName:i.participantId?this.getParticipantName(i.participantId,e):void 0}))),Eg(s)),this.scheduledImportEnabled$=this.store.select(He),this.deviceStatus$=this.store.select(Je),this.autoAssignStatus$=this.store.select(Ke),this.selectedRaceId$=this.autoAssignStatus$.pipe(oe(t=>t.active?t.raceId:null),Eg()),this.importLoading$=this.store.select(Qe$1),this.actions$.pipe(AN(Ie,fe,Ue$2),bg(this.destroy$)).subscribe(t=>{let e=t.type===Ie.type?`Automatik-Modus aktiviert`:t.type===fe.type?`Automatik-Modus deaktiviert`:`Startnummer übersprungen`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(AN(Ce,Re$1,$e),bg(this.destroy$)).subscribe(({error:t})=>{this.snackBar.open(`FEHLER: ${t}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(L),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(AN(P),bg(this.destroy$)).subscribe(({error:t})=>{this.snackBar.open(`FEHLER beim Erstellen der Messung: ${t}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(N),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(AN(E),bg(this.destroy$)).subscribe(({error:t})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${t}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(q),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(AN(w),bg(this.destroy$)).subscribe(({error:t})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Messung: ${t}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(V),bg(this.destroy$)).subscribe(({message:t})=>{let i=rt(t)?`Alle Messungen wurden gelöscht (inkl. Gerät)`:`Alle Messungen wurden gelöscht (nur Datenbank)`;this.snackBar.open(i,`OK`,{duration:3e3})}),this.actions$.pipe(AN(H),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Löschen der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(z$1),bg(this.destroy$)).subscribe(({enabled:t})=>{let e=t?`Kontinuierlicher Modus aktiviert`:`Kontinuierlicher Modus deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(AN(G$1),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des kontinuierlichen Modus`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(Q$1),bg(this.destroy$)).subscribe(({enabled:t})=>{let e=t?`Automatischer Import aktiviert (alle 5 Sekunden)`:`Automatischer Import deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(AN(W),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des automatischen Imports`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(ee),bg(this.destroy$)).subscribe(({clearAfterArchive:t,message:e})=>{let i=rt(e),a=t?i?`Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen.`:`Messungen archiviert. Bereit für das nächste Rennen.`:`Messungen archiviert. Datenbank und Gerät wurden nicht verändert.`;this.snackBar.open(a,`OK`,{duration:3e3})}),this.actions$.pipe(AN(te),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Archivieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(be),bg(this.destroy$)).subscribe(({connected:t})=>{t&&this.store.dispatch(se())}),this.actions$.pipe(AN(oe$1),bg(this.destroy$)).subscribe(()=>{this.store.dispatch(xe()),this.snackBar.open(`Ältester Start erfolgreich verworfen`,`OK`,{duration:3e3})}),this.actions$.pipe(AN(ue),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Verwerfen des ältesten Starts`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(z$1),bg(this.destroy$)).subscribe(()=>{this.store.dispatch(se())}),this.actions$.pipe(AN(ce),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messungen erfolgreich exportiert`,`OK`,{duration:3e3})}),this.actions$.pipe(AN(pe),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Exportieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(AN(le),bg(this.destroy$)).subscribe(({result:t})=>{let e=t.skippedCount>0?`Import abgeschlossen: ${t.importedCount} importiert, ${t.skippedCount} \xFCbersprungen`:`Import abgeschlossen: ${t.importedCount} importiert`;this.snackBar.open(e,`OK`,{duration:t.skippedCount>0?8e3:3e3});let i=t.errors??[];if(i.length>0){let a=i.map(l=>`Zeile ${l.lineNumber}: ${l.reason}`).join(`
`);alert(`Folgende Zeilen wurden \xFCbersprungen:

${a}`)}this.loadData()}),this.actions$.pipe(AN(Me),bg(this.destroy$)).subscribe(({error:t})=>{this.snackBar.open(`FEHLER beim Importieren der Messungen: ${t}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.timingProviderActive$.pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(se())})}ngAfterViewInit(){this.loadData(),this.store.dispatch(i()),this.store.dispatch(X()),this.autoRefresh$.pipe(wg(t=>t?Ig(2e3):Ue$1),bg(this.destroy$)).subscribe(()=>{this.loadMeasurementData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let t=this.autoRefreshEnabled?`Automatische Aktualisierung aktiviert`:`Automatische Aktualisierung deaktiviert`;this.snackBar.open(t,`OK`,{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open(`Daten wurden aktualisiert`,`OK`,{duration:2e3})}loadData(){this.store.dispatch(t()),this.loadMeasurementData()}loadMeasurementData(){this.store.dispatch(F()),this.store.dispatch(xe()),this.updateLastUpdateTime()}updateLastUpdateTime(){let t=new Date;this.lastUpdate=t.toLocaleTimeString(`de-DE`)}getParticipantName(t,e){let i=e.find(a=>a.id===t);return i?.person?`${i.person.firstName} ${i.person.lastName}`:`-`}getParticipantNameByRaceNumber(t,e,i){let a=i.find(l=>l.race?.id===t&&l.raceNumber===e);return a?.person?`${a.person.firstName} ${a.person.lastName}`:`unbekannt`}formatRaceDate(t){let e=t.split(`-`);if(e.length===3){let[i,a,l]=e;return`${l}.${a}.${i}`}return t}onRaceChange(t){this.store.dispatch(S$1({id:t})),t!==null?this.store.dispatch(Fe({request:{raceId:t}})):this.store.dispatch(De())}skipAutoAssign(){this.store.dispatch(Oe())}formatDuration(t){let e=Math.floor(t/1e3),i=Math.floor(e/3600),a=Math.floor(e%3600/60),l=e%60,b=t%1e3;return i>0?`${i}:${String(a).padStart(2,`0`)}:${String(l).padStart(2,`0`)}.${String(b).padStart(3,`0`)}`:a>0?`${a}:${String(l).padStart(2,`0`)}.${String(b).padStart(3,`0`)}`:`${l}.${String(b).padStart(3,`0`)}s`}openCreateDialog(){this.dialog.open(ve,{width:`500px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(y({measurement:e}))})}openEditDialog(t){this.dialog.open(ve,{width:`500px`,data:t}).afterClosed().pipe(bg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(k({id:t.id,measurement:i}))})}deleteMeasurement(t){confirm(`M\xF6chten Sie die Messung #${t.id} wirklich l\xF6schen?`)&&this.store.dispatch(B({id:t.id}))}resetMeasurements(t){confirm(t?`Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!`:`Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?`)&&this.store.dispatch(j({resetDevice:t}))}toggleContinuousMode(t){confirm(t?`Möchten Sie den kontinuierlichen Modus wirklich aktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`:`Möchten Sie den kontinuierlichen Modus wirklich deaktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`)&&this.store.dispatch(J({enable:t}))}toggleScheduledImport(t){this.store.dispatch(K({enable:t}))}openArchiveDialog(){this.races$.pipe(tn(1)).subscribe(t=>{this.dialog.open(Qe,{width:`500px`,data:{races:t}}).afterClosed().pipe(bg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(_(i))})})}discardOldestStart(){confirm(`Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.`)&&this.store.dispatch(ae())}exportMeasurementsCsv(){this.store.dispatch(ie())}openImportDialog(){this.dialog.open(Ze,{width:`900px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&(this.store.dispatch(me({file:e.file,delimiter:e.delimiter,mapping:e.mapping})),this.snackBar.open(`Import gestartet...`,`OK`,{duration:2e3}))})}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-measurement-list`]],decls:102,vars:51,consts:[[`resetMenu`,`matMenu`],[1,`title-row`],[1,`sync-status`],[`color`,`primary`,`matTooltip`,`Automatische Aktualisierung`,3,`ngModelChange`,`change`,`ngModel`],[`matTooltip`,`Aktualisiere...`,1,`sync-icon`,`syncing`],[1,`sync-icon`,3,`matTooltip`],[1,`last-update-text`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Aktuelle Messungen einem Rennen zuordnen und archivieren`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Alle Messungen als CSV-Datei herunterladen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Messungen aus CSV-Datei importieren (mit Spalten-Zuordnung)`,3,`click`,`disabled`],[`diameter`,`20`,2,`display`,`inline-block`,`margin-right`,`8px`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Messungen zurücksetzen`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[1,`auto-assign-row`],[`appearance`,`outline`,1,`race-select`,3,`matTooltip`],[3,`selectionChange`,`value`,`disabled`],[3,`value`],[1,`hint`],[1,`loading-overlay`],[1,`table-container`],[`mat-table`,``,1,`measurement-table`,3,`dataSource`,`trackBy`],[`matColumnDef`,`id`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`duration`],[`matColumnDef`,`participant`],[`mat-cell`,``,3,`matTooltip`,4,`matCellDef`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`count-info`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Aktuell erwartete Startnummer überspringen (z. B. nicht gestartet)`,3,`click`],[1,`next-number-info`],[`diameter`,`30`],[`mat-header-cell`,``],[`mat-cell`,``],[`mat-cell`,``,3,`matTooltip`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,i){if(e&1){let a=CD();Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`)(3,`div`,1)(4,`span`),cw(5,`Messungen`),Jc(),Mi(6,`div`,2)(7,`mat-slide-toggle`,3),Mh(`ngModelChange`,function(b){return Pu(a),pw(i.autoRefreshEnabled,b)||(i.autoRefreshEnabled=b),Fu(b)}),sh(`change`,function(){return i.onAutoRefreshToggle()}),Jc(),XI(),hD(8,fa,2,0,`mat-icon`,4),ww(9,`async`),Kc(10,va,2,2,`mat-icon`,5),Mi(11,`span`,6),cw(12),Jc()()()()(),Mi(13,`mat-card-content`)(14,`div`,7)(15,`button`,8),sh(`click`,function(){return i.openCreateDialog()}),Mi(16,`mat-icon`),cw(17,`add`),Jc(),cw(18,` Neue Messung `),Jc(),Mi(19,`button`,9),sh(`click`,function(){return i.manualRefresh()}),Mi(20,`mat-icon`),cw(21,`refresh`),Jc(),cw(22,` Manuell aktualisieren `),Jc(),Mi(23,`button`,10),sh(`click`,function(){return i.openArchiveDialog()}),Mi(24,`mat-icon`),cw(25,`archive`),Jc(),cw(26,` Archivieren `),Jc(),Mi(27,`button`,11),sh(`click`,function(){return i.exportMeasurementsCsv()}),Mi(28,`mat-icon`),cw(29,`download`),Jc(),cw(30,` CSV Export `),Jc(),Mi(31,`button`,12),ww(32,`async`),sh(`click`,function(){return i.openImportDialog()}),hD(33,ya,1,0,`mat-spinner`,13),ww(34,`async`),Kc(35,Ma,2,0,`mat-icon`),cw(36,` CSV Import `),Jc(),hD(37,ka,5,6),ww(38,`async`),hD(39,xa,4,0,`button`,14),ww(40,`async`),Kc(41,Na,4,0,`button`,15),Mi(42,`button`,16)(43,`mat-icon`),cw(44,`delete_sweep`),Jc(),cw(45,` Zurücksetzen `),Mi(46,`mat-icon`),cw(47,`arrow_drop_down`),Jc()(),Mi(48,`mat-menu`,null,0)(50,`button`,17),sh(`click`,function(){return i.resetMeasurements(!1)}),Mi(51,`mat-icon`),cw(52,`delete_sweep`),Jc(),Mi(53,`span`),cw(54,`Alle Messungen löschen (nur Datenbank)`),Jc()(),Mi(55,`button`,17),sh(`click`,function(){return i.resetMeasurements(!0)}),Mi(56,`mat-icon`),cw(57,`delete_forever`),Jc(),Mi(58,`span`),cw(59,`Alle löschen (inkl. Gerät)`),Jc()()()(),Mi(60,`div`,18)(61,`mat-form-field`,19),ww(62,`async`),Mi(63,`mat-label`),cw(64,`Rennen (Automatik-Zuordnung)`),Jc(),Mi(65,`mat-select`,20),ww(66,`async`),ww(67,`async`),sh(`selectionChange`,function(b){return i.onRaceChange(b.value)}),Mi(68,`mat-option`,21),cw(69,`— kein Rennen —`),Jc(),vD(70,Ea,2,3,`mat-option`,21,ba),ww(72,`async`),Jc()(),hD(73,Ta,2,3),ww(74,`async`),Kc(75,$a,2,0,`span`,22),Jc(),hD(76,Fa,2,0,`div`,23),ww(77,`async`),Mi(78,`div`,24)(79,`table`,25),ww(80,`async`),ww(81,`async`),tl(82,26),Gp(83,La,2,0,`th`,27)(84,Oa,2,1,`td`,28),nl(),tl(85,29),Gp(86,Pa,2,0,`th`,27)(87,za,2,1,`td`,28),nl(),tl(88,30),Gp(89,Ba,2,0,`th`,27)(90,Ga,2,2,`td`,31),nl(),tl(91,32),Gp(92,Va,2,0,`th`,27)(93,qa,3,4,`td`,28),nl(),tl(94,33),Gp(95,Ka,2,0,`th`,27)(96,Ha,7,0,`td`,28),nl(),Gp(97,ja,1,0,`tr`,34)(98,Ua,1,0,`tr`,35),Jc()(),Mi(99,`div`,36),cw(100),ww(101,`async`),Jc()()()}if(e&2){let a,l=HD(49);dI(7),Nh(`ngModel`,i.autoRefreshEnabled),tE(),dI(),gD(Tw(9,21,i.loading$)?8:10),dI(4),bh(i.lastUpdate),dI(19),Xp(`disabled`,Tw(32,23,i.importLoading$)),dI(2),gD(Tw(34,25,i.importLoading$)?33:35),dI(4),gD(Tw(38,27,i.timingProviderActive$)?37:-1),dI(2),gD(Tw(40,29,i.scheduledImportEnabled$)?39:41),dI(3),Xp(`matMenuTriggerFor`,l),dI(19),Xp(`matTooltip`,Tw(62,31,i.scheduledImportEnabled$)?`Automatischen Import zuerst deaktivieren, um das Rennen zu wechseln`:`Rennen auswählen startet die automatische Zuordnung, abwählen stoppt sie`),dI(4),Xp(`value`,Tw(66,33,i.selectedRaceId$))(`disabled`,!!Tw(67,35,i.scheduledImportEnabled$)),dI(3),Xp(`value`,null),dI(2),ID(Tw(72,37,i.races$)),dI(3),gD((a=Tw(74,39,i.selectedRaceId$))?73:75,a),dI(3),gD(Tw(77,41,i.loading$)?76:-1),dI(3),mh(`loading`,Tw(80,43,i.loading$)),Xp(`dataSource`,Tw(81,45,i.measurementsWithParticipants$)||Iw(49,ut))(`trackBy`,i.trackById),dI(18),Xp(`matHeaderRowDef`,i.displayedColumns),dI(),Xp(`matRowDefColumns`,i.displayedColumns),dI(2),rl(` Anzahl der Messungen: `,(Tw(101,47,i.measurements$)||Iw(50,ut)).length,` `)}},dependencies:[qa$1,Rn,mn,gn,wn,_n,pn,Dn$1,yn,Cn,vn,bn,BE,VE,np,We$1,Xe,pN,mN,go,Xt,Dx,_x,vx,Sx,bx,we$1,Wt,kn,at,Lt,I,G$2,Bt,gE,Cc,Wo,pE,or,Qn$1,ID$1,AD,Sm,Vu,ju],styles:[`.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;position:relative;flex-wrap:wrap;align-items:center}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.auto-assign-row[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}.race-select[_ngcontent-%COMP%]{min-width:280px}.next-number-info[_ngcontent-%COMP%]{font-size:.9rem;color:#000000b3}.hint[_ngcontent-%COMP%]{color:#0009}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}}`]})};export{Dn as MeasurementListComponent};