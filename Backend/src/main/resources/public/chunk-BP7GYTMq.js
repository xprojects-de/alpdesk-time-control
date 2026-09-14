import{$n as hw,An as bh,At as Re,B as Hv,C as Fh,Cn as _h,Cr as nl,Ct as Pu,D as G,F as HD,Fn as cw,Gr as tn,H as Ig,Hr as tE,Ht as Ue,In as dI,Ir as rh,It as T,Jn as gh,Jt as VD,K as Jc,Kn as gD,L as Hj,Ln as dh,Lr as rl,Nn as ch,O as Ge,Or as pw,Q as Kc,Qr as vw,Tr as oe,Tt as QE,V as ID,Vt as UE,W as Iw,Wr as tl,Wt as Uj,X as KD,Xn as hD,Xr as vD,Y as Jp,Zr as vg,Zt as WE,_ as Dg,c as A,ci as z,cn as Xp,ct as Mr,ei as wg,er as ih,et as Kp,ft as Nh,g as Cw,gr as lu,gt as OD,h as Co,ii as ww,in as Xa,it as Lu,kt as Qu,mr as lh,p as CD,r as $j,rn as XI,rr as jD,sr as kD,st as Mi,ti as wh,tn as Wp,tr as iy,tt as LD,vr as mg,w as Fj,wt as Q,x as FD,y as Ee,zt as Tw}from"./chunk-CMzlWkMW.js";import{$ as Uc,$t as kN,At as cM,Cn as rC,Ct as _m,D as Im,Dn as si,E as IN,Et as an,F as Lm,Fn as wN,G as Ox,Gt as iC,H as Ne,J as Qu$1,Lt as fp,Mn as uc,Mt as dM,N as Ku,O as JD,On as ss,P as LN,Pt as eC,Qt as jt,R as Me,U as ON,Zt as jE,a as BE,bn as qN,ct as WM,d as De,dt as X,f as Dp,gn as oi,gt as Yh,h as Fc,hn as od,i as Ax,j as KN,ln as mr,mn as oC,mt as YM,nt as Ut,qt as il,rn as kx,rt as VN,s as Bm,tn as km,u as CN,un as nC,wt as _r,y as Gr,yn as pm,yt as Yt,z as Mr$1}from"./chunk-DY9kXS9g.js";import{r as s,t as l}from"./chunk-BRDflDhi.js";import{$n as Se,Bn as H,Cr as w,Dt as Lt,Er as z$1,Et as I,Fn as C,Gn as Me$1,H as m,Hn as J,In as De$1,Jn as O,Kn as N,Ln as E,Mn as $,Mr as p,Nn as Ae,Pn as B,Qn as S,Rn as Fe,Sr as ve,Tr as xe,Tt as G$2,Un as Je$1,Vn as Ie,Wn as L,Xn as P,Yn as Oe,Zn as R,_r as oe$1,ar as _,br as se,bt as t,cr as ee,dr as h,dt as S$1,er as T$1,fr as j,gr as ne,hr as me,ir as X$1,k as i,lr as f,mr as l$1,nr as V,or as ae,pr as k,qn as Ne$1,rr as W,sr as be,tr as U,ur as ge,vr as q,wr as we,wt as Bt,xr as te$1,yr as re,zn as G$1}from"./main-QAS3V4JT.js";import{t as s$1}from"./chunk-cV4kY63s.js";import{S as zo,_ as ni,a as Lo,c as Ui,d as Wi,f as Zi,h as jo,i as Hi,l as Un$1,m as ji,n as $i,o as Po,p as fn,r as Gi,s as Qi,t as $e,u as Vi,v as qi,x as zi,y as ra$1}from"./chunk-DSyGbOnU.js";var wn=[`switch`];var Cn=[`*`];function Nn(n,i){n&1&&(Mi(0,`span`,11),Qu(),Mi(1,`svg`,13),Xp(2,`path`,14),Jc(),Mi(3,`svg`,15),Xp(4,`path`,16),Jc()())}var xn=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Be=class{source;checked;constructor(i,e){this.source=i,this.checked=e}};var Je=(()=>{class n{_elementRef=T(Mr);_focusMonitor=T(an);_changeDetectorRef=T(Hj);defaults=T(xn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Be(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Me();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Ge;toggleChange=new Ge;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){T(De).load(mr);let e=T(new Fh(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=T(Ne).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Be(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,a){if(t&1&&lh(wn,5),t&2){let c;FD(c=jD())&&(a._switchElement=c.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,a){t&2&&(rh(`id`,a.id),Kp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),KD(a.color?`mat-`+a.color:``),gh(`mat-mdc-slide-toggle-focused`,a._focused)(`mat-mdc-slide-toggle-checked`,a.checked)(`mat-slide-toggle-full-width`,a.fullWidth)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,$j],color:`color`,disabled:[2,`disabled`,`disabled`,$j],fullWidth:[2,`fullWidth`,`fullWidth`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],checked:[2,`checked`,`checked`,$j],hideIcon:[2,`hideIcon`,`hideIcon`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[vw([{provide:Mr$1,useExisting:Co(()=>n),multi:!0},{provide:Ut,useExisting:n,multi:!0}]),iy],ngContentSelectors:Cn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,a){if(t&1&&(kD(),Mi(0,`div`,1)(1,`button`,2,0),ih(`click`,function(){return a._handleClick()}),Xp(3,`div`,3)(4,`span`,4),Mi(5,`span`,5)(6,`span`,6)(7,`span`,7),Xp(8,`span`,8),Jc(),Mi(9,`span`,9),Xp(10,`span`,10),Jc(),hD(11,Nn,5,0,`span`,11),Jc()()(),Mi(12,`label`,12),ih(`click`,function(b){return b.stopPropagation()}),LD(13),Jc()()),t&2){let c=HD(2);Jp(`labelPosition`,a.labelPosition),dI(),gh(`mdc-switch--selected`,a.checked)(`mdc-switch--unselected`,!a.checked)(`mdc-switch--checked`,a.checked)(`mdc-switch--disabled`,a.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,a.disabledInteractive),Jp(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex)(`disabled`,a.disabled&&!a.disabledInteractive),Kp(`id`,a.buttonId)(`name`,a.name)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a._getAriaLabelledBy())(`aria-describedby`,a.ariaDescribedby)(`aria-required`,a.required||null)(`aria-checked`,a.checked)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),dI(9),Jp(`matRippleTrigger`,c)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0),dI(),gD(a.hideIcon?-1:11),dI(),Jp(`for`,a.buttonId),Kp(`id`,a._labelId)}},dependencies:[uc,m],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var bn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Je,X]})}return n})();function In(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Minuten erforderlich`),Jc())}function Dn(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Minuten müssen >= 0 sein`),Jc())}function Rn(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Sekunden erforderlich`),Jc())}function Tn(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Sekunden: 0-59`),Jc())}function $n(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Millisekunden erforderlich`),Jc())}function Ln(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Millisekunden: 0-999`),Jc())}function On(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Messzeit ist erforderlich`),Jc())}var te=class n{fb=T(iC);dialogRef=T($e);data=T(Un$1);form;constructor(){let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[i.minutes,[jt.required,jt.min(0)]],seconds:[i.seconds,[jt.required,jt.min(0),jt.max(59)]],milliseconds:[i.milliseconds,[jt.required,jt.min(0),jt.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),jt.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),t={participantId:this.data?.participantId??null,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(t)}}formatDateTimeForInput(i){if(!i){let t=new Date;return this.toLocalISOString(t)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,`0`)}-${String(i.getDate()).padStart(2,`0`)}T${String(i.getHours()).padStart(2,`0`)}:${String(i.getMinutes()).padStart(2,`0`)}:${String(i.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(i){let e=new Date(i);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}convertToMilliseconds(i,e,t){return i*60*1e3+e*1e3+t}splitMilliseconds(i){let e=Math.floor(i/6e4),t=i%(60*1e3);return{minutes:e,seconds:Math.floor(t/1e3),milliseconds:t%1e3}}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-measurement-dialog`]],decls:33,vars:10,consts:[[`mat-dialog-title`,``],[1,`measurement-form`,3,`formGroup`],[1,`time-input-group`],[`appearance`,`outline`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`,`required`,``],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`,`required`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),cw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`mat-form-field`,3)(6,`mat-label`),cw(7,`Minuten`),Jc(),Xp(8,`input`,4),XI(),hD(9,In,2,0,`mat-error`),hD(10,Dn,2,0,`mat-error`),Jc(),Mi(11,`mat-form-field`,3)(12,`mat-label`),cw(13,`Sekunden`),Jc(),Xp(14,`input`,5),XI(),hD(15,Rn,2,0,`mat-error`),hD(16,Tn,2,0,`mat-error`),Jc(),Mi(17,`mat-form-field`,3)(18,`mat-label`),cw(19,`Millisekunden`),Jc(),Xp(20,`input`,6),XI(),hD(21,$n,2,0,`mat-error`),hD(22,Ln,2,0,`mat-error`),Jc()(),Mi(23,`mat-form-field`,3)(24,`mat-label`),cw(25,`Gemessen am (ISO Format)`),Jc(),Xp(26,`input`,7),XI(),hD(27,On,2,0,`mat-error`),Jc()()(),Mi(28,`mat-dialog-actions`,8)(29,`button`,9),ih(`click`,function(){return t.onCancel()}),cw(30,`Abbrechen`),Jc(),Mi(31,`button`,10),ih(`click`,function(){return t.onSave()}),cw(32,` Speichern `),Jc()()),e&2&&(dI(),wh(t.data?`Messung bearbeiten`:`Neue Messung`),dI(2),Jp(`formGroup`,t.form),dI(5),tE(),dI(),gD(t.form.get(`minutes`)?.hasError(`required`)&&t.form.get(`minutes`)?.touched?9:-1),dI(),gD(t.form.get(`minutes`)?.hasError(`min`)?10:-1),dI(4),tE(),dI(),gD(t.form.get(`seconds`)?.hasError(`required`)&&t.form.get(`seconds`)?.touched?15:-1),dI(),gD(t.form.get(`seconds`)?.hasError(`min`)||t.form.get(`seconds`)?.hasError(`max`)?16:-1),dI(4),tE(),dI(),gD(t.form.get(`milliseconds`)?.hasError(`required`)&&t.form.get(`milliseconds`)?.touched?21:-1),dI(),gD(t.form.get(`milliseconds`)?.hasError(`min`)||t.form.get(`milliseconds`)?.hasError(`max`)?22:-1),dI(4),tE(),dI(),gD(t.form.get(`measuredAt`)?.hasError(`required`)&&t.form.get(`measuredAt`)?.touched?27:-1),dI(4),Jp(`disabled`,!t.form.valid))},dependencies:[il,oC,nC,Uc,km,JD,eC,od,_m,pm,oi,Lm,zo,Po,jo,Lo,si,Fc,ss,Yh,YM,WM,kx,Ox],styles:[`.measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var Fn=[`input`];var zn=[`formField`];var Pn=[`*`];var qe=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Bn={provide:Mr$1,useExisting:Co(()=>Ze),multi:!0};var Sn=new A(`MatRadioGroup`);var Gn=new A(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Ze=(()=>{class n{_changeDetector=T(Hj);_value=null;_name=T(Ne).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ge;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new qe(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,a,c){if(t&1&&ch(c,Ve,5),t&2){let b;FD(b=jD())&&(a._radios=b)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,$j],required:[2,`required`,`required`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[vw([Bn,{provide:Sn,useExisting:n}])]})}return n})();var Ve=(()=>{class n{_elementRef=T(Mr);_changeDetector=T(Hj);_focusMonitor=T(an);_radioDispatcher=T(Bm);_defaultOptions=T(Gn,{optional:!0});_ngZone=T(Re);_renderer=T(Xa);_uniqueId=T(Ne).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ge;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Me();_injector=T(Ee);constructor(){T(De).load(mr);let e=T(Sn,{optional:!0}),t=T(new Fh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Uj(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new qe(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,Hv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,a){if(t&1&&lh(Fn,5)(zn,7,Mr),t&2){let c;FD(c=jD())&&(a._inputElement=c.first),FD(c=jD())&&(a._rippleTrigger=c.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,a){t&1&&ih(`focus`,function(){return a._inputElement.nativeElement.focus()}),t&2&&(Kp(`id`,a.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),gh(`mat-primary`,a.color===`primary`)(`mat-accent`,a.color===`accent`)(`mat-warn`,a.color===`warn`)(`mat-mdc-radio-checked`,a.checked)(`mat-mdc-radio-disabled`,a.disabled)(`mat-mdc-radio-disabled-interactive`,a.disabledInteractive)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],checked:[2,`checked`,`checked`,$j],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,$j],required:[2,`required`,`required`,$j],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Pn,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,a){t&1&&(kD(),Mi(0,`label`,2,0)(2,`span`,3),Xp(3,`span`,4),Mi(4,`input`,5,1),ih(`change`,function(b){return a._onInputInteraction(b)}),Jc(),Mi(6,`span`,6),Xp(7,`span`,7)(8,`span`,8),Jc(),Mi(9,`span`,9),Xp(10,`span`,10),Jc()(),Mi(11,`span`,11),LD(12),Jc()()),t&2&&(Jp(`labelPosition`,a.labelPosition)(`for`,a.inputId),dI(2),gh(`mdc-radio--disabled`,a.disabled),dI(2),Jp(`id`,a.inputId)(`checked`,a.checked)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Kp(`name`,a.name)(`value`,a.value)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),dI(5),Jp(`matRippleTrigger`,a._rippleTrigger.nativeElement)(`matRippleDisabled`,a._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[uc,m],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var yn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Gr,Ve,X]})}return n})();var Kn=(n,i)=>i.id;function jn(n,i){if(n&1&&(Mi(0,`mat-option`,4),cw(1),Jc()),n&2){let e=i.$implicit,t=OD();Jp(`value`,e.id),dI(),bh(``,e.name,` (`,t.formatRaceDate(e.date),`)`)}}function Hn(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Bitte ein Rennen auswählen`),Jc())}function Un(n,i){n&1&&(Mi(0,`mat-error`),cw(1,`Bitte eine Archivierungs-Variante auswählen`),Jc())}var Ke=class n{fb=T(iC);dialogRef=T($e);data=T(Un$1);form=this.fb.group({raceId:[null,jt.required],mode:[null,jt.required]});onCancel(){this.dialogRef.close()}onSave(){if(!this.form.valid)return;let i=this.form.value.mode,e={raceId:Number(this.form.value.raceId),resetDevice:i===`reset`,clearAfterArchive:i!==`noclear`};this.dialogRef.close(e)}formatRaceDate(i){let e=i.split(`-`);return e.length===3?`${e[2]}.${e[1]}.${e[0]}`:i}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-archive-measurements-dialog`]],decls:30,vars:4,consts:[[`mat-dialog-title`,``],[1,`archive-form`,3,`formGroup`],[`appearance`,`outline`],[`formControlName`,`raceId`,`required`,``],[3,`value`],[`formControlName`,`mode`,1,`mode-group`],[`value`,`reset`],[1,`hint`],[`value`,`keep`],[`value`,`noclear`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),cw(1,`Messungen archivieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`mat-form-field`,2)(5,`mat-label`),cw(6,`Rennen`),Jc(),Mi(7,`mat-select`,3),vD(8,jn,2,3,`mat-option`,4,Kn),Jc(),XI(),hD(10,Hn,2,0,`mat-error`),Jc(),Mi(11,`mat-radio-group`,5)(12,`mat-radio-button`,6),cw(13,` Archivieren (inkl. Gerät-Reset) `),Mi(14,`p`,7),cw(15,`Aktuelle Messungen werden diesem Rennen zugeordnet, danach werden Datenbank und Gerät geleert. Bereit für das nächste Rennen.`),Jc()(),Mi(16,`mat-radio-button`,8),cw(17,` Archivieren (nur Datenbank) `),Mi(18,`p`,7),cw(19,`Wie oben, aber nur die Datenbank wird geleert, das Gerät bleibt unverändert.`),Jc()(),Mi(20,`mat-radio-button`,9),cw(21,` Archivieren (ohne Löschen) `),Mi(22,`p`,7),cw(23,`Aktuelle Messungen werden diesem Rennen zugeordnet. Datenbank und Gerät werden dabei NICHT verändert.`),Jc()()(),XI(),hD(24,Un,2,0,`mat-error`),Jc()(),Mi(25,`mat-dialog-actions`,10)(26,`button`,11),ih(`click`,function(){return t.onCancel()}),cw(27,`Abbrechen`),Jc(),Mi(28,`button`,12),ih(`click`,function(){return t.onSave()}),cw(29,` Archivieren `),Jc()()),e&2&&(dI(3),Jp(`formGroup`,t.form),dI(4),tE(),dI(),ID(t.data.races),dI(2),gD(t.form.get(`raceId`)?.hasError(`required`)&&t.form.get(`raceId`)?.touched?10:-1),dI(),tE(),dI(13),gD(t.form.get(`mode`)?.hasError(`required`)&&t.form.get(`mode`)?.touched?24:-1),dI(4),Jp(`disabled`,!t.form.valid))},dependencies:[il,oC,nC,JD,eC,od,oi,Lm,zo,Po,jo,Lo,si,Fc,ss,Yh,jE,BE,_r,yn,Ze,Ve,kx,Ox],styles:[`.archive-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-width:420px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mode-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.hint[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#0009}`]})};var Qn=[`jsonImportInput`];var Xe=()=>[];var Wn=(n,i)=>i.id;function Jn(n,i){n&1&&(Mi(0,`mat-icon`,5),cw(1,`sync `),Jc())}function Zn(n,i){if(n&1&&(Mi(0,`mat-icon`,6),cw(1,`sync `),Jc()),n&2)Jp(`matTooltip`,hw(`Letzte Aktualisierung: `,OD().lastUpdate))}function Xn(n,i){if(n&1){let e=CD();Mi(0,`button`,41),ih(`click`,function(){Lu(e);return Pu(OD().toggleContinuousMode(!1))}),Mi(1,`mat-icon`),cw(2,`stop`),Jc(),cw(3,` Kontinuierlich AUS `),Jc()}}function Yn(n,i){if(n&1){let e=CD();Mi(0,`button`,42),ih(`click`,function(){Lu(e);return Pu(OD().toggleContinuousMode(!0))}),Mi(1,`mat-icon`),cw(2,`play_arrow`),Jc(),cw(3,` Kontinuierlich AN `),Jc()}}function ea(n,i){if(n&1){let e=CD();Mi(0,`button`,43),ih(`click`,function(){Lu(e);return Pu(OD().discardOldestStart())}),Mi(1,`mat-icon`),cw(2,`person_off`),Jc(),cw(3,` Sturz signalisieren `),Jc()}}function ta(n,i){if(n&1){let e=CD();Mi(0,`button`,44),ih(`click`,function(){Lu(e);return Pu(OD().toggleScheduledImport(!1))}),Mi(1,`mat-icon`),cw(2,`cloud_sync`),Jc(),cw(3,` Auto-Import AUS `),Jc()}}function ia(n,i){if(n&1){let e=CD();Mi(0,`button`,45),ih(`click`,function(){Lu(e);return Pu(OD().toggleScheduledImport(!0))}),Mi(1,`mat-icon`),cw(2,`cloud_download`),Jc(),cw(3,` Auto-Import AN `),Jc()}}function na(n,i){if(n&1&&(Mi(0,`mat-option`,25),cw(1),Jc()),n&2){let e=i.$implicit,t=OD();Jp(`value`,e.id),dI(),bh(``,e.name,` (`,t.formatRaceDate(e.date),`)`)}}function aa(n,i){if(n&1&&(Mi(0,`strong`),cw(1),Jc(),cw(2),ww(3,`async`)),n&2){let e=OD(2),t=OD(),a=OD();dI(),wh(e.nextRaceNumber),dI(),rl(` (`,a.getParticipantNameByRaceNumber(t,e.nextRaceNumber,Tw(3,2,a.participants$)||Iw(4,Xe)),`) `)}}function ra(n,i){n&1&&(Mi(0,`em`),cw(1,`keine weiteren Startnummern`),Jc())}function oa(n,i){if(n&1){let e=CD();Mi(0,`button`,46),ih(`click`,function(){Lu(e);return Pu(OD(3).skipAutoAssign())}),Mi(1,`mat-icon`),cw(2,`skip_next`),Jc(),cw(3,` Überspringen `),Jc(),Mi(4,`span`,47),cw(5,` Nächste erwartete Startnummer: `),hD(6,aa,4,5)(7,ra,2,0,`em`),Jc()}if(n&2){let e=OD();dI(6),gD(e.nextRaceNumber!==null?6:7)}}function sa(n,i){if(n&1&&hD(0,oa,8,1),n&2){let e=i,t=OD();gD(e.active&&e.raceId===t?0:-1)}}function da(n,i){if(n&1&&(hD(0,sa,1,1),ww(1,`async`)),n&2){let e;gD((e=Tw(1,1,OD().autoAssignStatus$))?0:-1,e)}}function ca(n,i){n&1&&(Mi(0,`span`,26),cw(1,`Rennen auswählen, um Messungen automatisch zuzuordnen.`),Jc())}function la(n,i){n&1&&(Mi(0,`div`,27),Xp(1,`mat-spinner`,48),Jc())}function ma(n,i){n&1&&(Mi(0,`th`,49),cw(1,`ID`),Jc())}function ua(n,i){if(n&1&&(Mi(0,`td`,50),cw(1),Jc()),n&2){let e=i.$implicit;dI(),wh(e.id)}}function pa(n,i){n&1&&(Mi(0,`th`,49),cw(1,`Dauer`),Jc())}function ha(n,i){if(n&1&&(Mi(0,`td`,50),cw(1),Jc()),n&2){let e=i.$implicit,t=OD();dI(),rl(` `,t.formatDuration(e.durationMs),` `)}}function ba(n,i){n&1&&(Mi(0,`th`,49),cw(1,`Teilnehmer`),Jc())}function ga(n,i){if(n&1&&(Mi(0,`td`,51),cw(1),Jc()),n&2){let e=i.$implicit;Jp(`matTooltip`,e.participantId?`Bereits einem Rennen zugeordnet`:``),dI(),rl(` `,e.participantName||`-`,` `)}}function _a(n,i){n&1&&(Mi(0,`th`,49),cw(1,`Gemessen am`),Jc())}function fa(n,i){if(n&1&&(Mi(0,`td`,50),cw(1),ww(2,`date`),Jc()),n&2){let e=i.$implicit;dI(),rl(` `,Cw(2,1,e.measuredAt,`dd.MM.yyyy HH:mm:ss`),` `)}}function va(n,i){n&1&&(Mi(0,`th`,49),cw(1,`Aktionen`),Jc())}function Sa(n,i){if(n&1){let e=CD();Mi(0,`td`,50)(1,`button`,52),ih(`click`,function(){let a=Lu(e).$implicit;return Pu(OD().openEditDialog(a))}),Mi(2,`mat-icon`),cw(3,`edit`),Jc()(),Mi(4,`button`,53),ih(`click`,function(){let a=Lu(e).$implicit;return Pu(OD().deleteMeasurement(a))}),Mi(5,`mat-icon`),cw(6,`delete`),Jc()()()}}function ya(n,i){n&1&&Xp(0,`tr`,54)}function ka(n,i){n&1&&Xp(0,`tr`,55)}var kn=class n{store=T(Yt);dialog=T(fn);snackBar=T(ni);actions$=T(cM);destroy$=new Q;autoRefresh$=new Q;trackById=(i,e)=>e.id;measurements$;races$;participants$;measurementsWithParticipants$;selectedRaceId$;autoAssignStatus$;loading$;scheduledImportEnabled$;deviceStatus$;displayedColumns=[`id`,`duration`,`measuredAt`,`participant`,`actions`];lastUpdate=``;autoRefreshEnabled=!1;lastResetDevice=!1;lastArchiveResetDevice=!1;lastArchiveClearAfterArchive=!0;jsonImportInput=Fj.required(`jsonImportInput`);constructor(){this.measurements$=this.store.select(l$1),this.races$=this.store.select(l),this.participants$=this.store.select(p),this.loading$=this.store.select(Ne$1),this.measurementsWithParticipants$=mg([this.measurements$,this.participants$]).pipe(oe(([i,e])=>i.map(t=>z(G({},t),{participantName:t.participantId?this.getParticipantName(t.participantId,e):void 0}))),Ig(s$1)),this.scheduledImportEnabled$=this.store.select(Je$1),this.deviceStatus$=this.store.select(Oe),this.selectedRaceId$=this.store.select(s),this.autoAssignStatus$=this.store.select(we),this.actions$.pipe(dM(xe,be,De$1),wg(this.destroy$)).subscribe(i=>{let e=i.type===xe.type?`Automatik-Modus aktiviert`:i.type===be.type?`Automatik-Modus deaktiviert`:`Startnummer übersprungen`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(dM(Ae,Fe,Ie),wg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(C),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(L),wg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(P),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(f),wg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(N),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(k),wg(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(q),wg(this.destroy$)).subscribe(()=>{let i=this.lastResetDevice?`Alle Messungen wurden gelöscht (inkl. Gerät)`:`Alle Messungen wurden gelöscht (nur Datenbank)`;this.snackBar.open(i,`OK`,{duration:3e3})}),this.actions$.pipe(dM(J),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Löschen der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(U),wg(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Kontinuierlicher Modus aktiviert`:`Kontinuierlicher Modus deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(dM(j),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des kontinuierlichen Modus`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(z$1),wg(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Automatischer Import aktiviert (alle 5 Sekunden)`:`Automatischer Import deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(dM(G$1),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des automatischen Imports`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(V),wg(this.destroy$)).subscribe(()=>{let i=this.lastArchiveClearAfterArchive?this.lastArchiveResetDevice?`Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen.`:`Messungen archiviert. Bereit für das nächste Rennen.`:`Messungen archiviert. Datenbank und Gerät wurden nicht verändert.`;this.snackBar.open(i,`OK`,{duration:3e3})}),this.actions$.pipe(dM(W),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Archivieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(me),wg(this.destroy$)).subscribe(({connected:i})=>{i&&this.store.dispatch(X$1())}),this.actions$.pipe(dM($),wg(this.destroy$)).subscribe(()=>{this.store.dispatch(Me$1()),this.snackBar.open(`Ältester Start erfolgreich verworfen`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(ee),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Verwerfen des ältesten Starts`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(U),wg(this.destroy$)).subscribe(()=>{this.store.dispatch(X$1())}),this.actions$.pipe(dM(se),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messungen erfolgreich exportiert`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(re),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Exportieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(dM(oe$1),wg(this.destroy$)).subscribe(({count:i})=>{this.snackBar.open(`${i} Messung(en) erfolgreich importiert`,`OK`,{duration:3e3}),this.loadData()}),this.actions$.pipe(dM(ae),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Importieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(i()),this.store.dispatch(H()),this.store.dispatch(X$1()),this.autoRefresh$.pipe(Dg(i=>i?vg(2e3):Ue),wg(this.destroy$)).subscribe(()=>{this.loadMeasurementData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?`Automatische Aktualisierung aktiviert`:`Automatische Aktualisierung deaktiviert`;this.snackBar.open(i,`OK`,{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open(`Daten wurden aktualisiert`,`OK`,{duration:2e3})}loadData(){this.store.dispatch(t()),this.loadMeasurementData()}loadMeasurementData(){this.store.dispatch(S()),this.store.dispatch(Me$1()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString(`de-DE`)}getParticipantName(i,e){let t=e.find(a=>a.id===i);return t?.person?`${t.person.firstName} ${t.person.lastName}`:`-`}getParticipantNameByRaceNumber(i,e,t){let a=t.find(c=>c.race?.id===i&&c.raceNumber===e);return a?.person?`${a.person.firstName} ${a.person.lastName}`:`unbekannt`}formatRaceDate(i){let e=i.split(`-`);if(e.length===3){let[t,a,c]=e;return`${c}.${a}.${t}`}return i}onRaceChange(i){this.store.dispatch(S$1({id:i})),i!==null?this.store.dispatch(Se({request:{raceId:i}})):this.store.dispatch(ge())}skipAutoAssign(){this.store.dispatch(ve())}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),a=Math.floor(e%3600/60),c=e%60,b=i%1e3;return t>0?`${t}:${String(a).padStart(2,`0`)}:${String(c).padStart(2,`0`)}.${String(b).padStart(3,`0`)}`:a>0?`${a}:${String(c).padStart(2,`0`)}.${String(b).padStart(3,`0`)}`:`${c}.${String(b).padStart(3,`0`)}s`}openCreateDialog(){this.dialog.open(te,{width:`500px`}).afterClosed().pipe(wg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(h({measurement:e}))})}openEditDialog(i){this.dialog.open(te,{width:`500px`,data:i}).afterClosed().pipe(wg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(R({id:i.id,measurement:t}))})}deleteMeasurement(i){confirm(`M\xF6chten Sie die Messung #${i.id} wirklich l\xF6schen?`)&&this.store.dispatch(E({id:i.id}))}resetMeasurements(i){confirm(i?`Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!`:`Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?`)&&(this.lastResetDevice=i,this.store.dispatch(B({resetDevice:i})))}toggleContinuousMode(i){confirm(i?`Möchten Sie den kontinuierlichen Modus wirklich aktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`:`Möchten Sie den kontinuierlichen Modus wirklich deaktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!`)&&this.store.dispatch(O({enable:i}))}toggleScheduledImport(i){this.store.dispatch(w({enable:i}))}openArchiveDialog(){this.races$.pipe(tn(1)).subscribe(i=>{this.dialog.open(Ke,{width:`500px`,data:{races:i}}).afterClosed().pipe(wg(this.destroy$)).subscribe(t=>{t&&(this.lastArchiveResetDevice=t.resetDevice,this.lastArchiveClearAfterArchive=t.clearAfterArchive,this.store.dispatch(T$1(t)))})})}discardOldestStart(){confirm(`Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.`)&&this.store.dispatch(_())}exportMeasurements(){this.store.dispatch(te$1())}triggerJsonImport(){this.jsonImportInput().nativeElement.value=``,this.jsonImportInput().nativeElement.click()}onJsonFileSelected(i){let t=i.target.files?.[0];if(!t)return;let a=new FileReader;a.onload=c=>{try{let b=c.target?.result,T=JSON.parse(b);if(!Array.isArray(T)){this.snackBar.open(`Ungültiges JSON-Format: Array erwartet`,`OK`,{duration:5e3,panelClass:`error-snackbar`});return}this.store.dispatch(ne({measurements:T}))}catch{this.snackBar.open(`Fehler beim Lesen der JSON-Datei`,`OK`,{duration:5e3,panelClass:`error-snackbar`})}},a.readAsText(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=UE({type:n,selectors:[[`app-measurement-list`]],viewQuery:function(e,t){e&1&&dh(t.jsonImportInput,Qn,5),e&2&&VD()},decls:105,vars:48,consts:[[`jsonImportInput`,``],[`resetMenu`,`matMenu`],[1,`title-row`],[1,`sync-status`],[`color`,`primary`,`matTooltip`,`Automatische Aktualisierung`,3,`ngModelChange`,`change`,`ngModel`],[`matTooltip`,`Aktualisiere...`,1,`sync-icon`,`syncing`],[1,`sync-icon`,3,`matTooltip`],[1,`last-update-text`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Aktuelle Messungen einem Rennen zuordnen und archivieren`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Alle Messungen als JSON-Datei herunterladen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Messungen aus JSON-Datei importieren`,3,`click`],[`type`,`file`,`accept`,`.json,application/json`,2,`display`,`none`,3,`change`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Messungen zurücksetzen`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[1,`auto-assign-row`],[`appearance`,`outline`,1,`race-select`,3,`matTooltip`],[3,`selectionChange`,`value`,`disabled`],[3,`value`],[1,`hint`],[1,`loading-overlay`],[1,`table-container`],[`mat-table`,``,1,`measurement-table`,3,`dataSource`,`trackBy`],[`matColumnDef`,`id`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`duration`],[`matColumnDef`,`participant`],[`mat-cell`,``,3,`matTooltip`,4,`matCellDef`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`count-info`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Aktuell erwartete Startnummer überspringen (z. B. nicht gestartet)`,3,`click`],[1,`next-number-info`],[`diameter`,`30`],[`mat-header-cell`,``],[`mat-cell`,``],[`mat-cell`,``,3,`matTooltip`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){if(e&1){let a=CD();Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`)(3,`div`,2)(4,`span`),cw(5,`Messungen`),Jc(),Mi(6,`div`,3)(7,`mat-slide-toggle`,4),Nh(`ngModelChange`,function(b){return Lu(a),pw(t.autoRefreshEnabled,b)||(t.autoRefreshEnabled=b),Pu(b)}),ih(`change`,function(){return t.onAutoRefreshToggle()}),Jc(),XI(),hD(8,Jn,2,0,`mat-icon`,5),ww(9,`async`),Kc(10,Zn,2,2,`mat-icon`,6),Mi(11,`span`,7),cw(12),Jc()()()()(),Mi(13,`mat-card-content`)(14,`div`,8)(15,`button`,9),ih(`click`,function(){return t.openCreateDialog()}),Mi(16,`mat-icon`),cw(17,`add`),Jc(),cw(18,` Neue Messung `),Jc(),Mi(19,`button`,10),ih(`click`,function(){return t.manualRefresh()}),Mi(20,`mat-icon`),cw(21,`refresh`),Jc(),cw(22,` Manuell aktualisieren `),Jc(),Mi(23,`button`,11),ih(`click`,function(){return t.openArchiveDialog()}),Mi(24,`mat-icon`),cw(25,`archive`),Jc(),cw(26,` Archivieren `),Jc(),Mi(27,`button`,12),ih(`click`,function(){return t.exportMeasurements()}),Mi(28,`mat-icon`),cw(29,`download`),Jc(),cw(30,` JSON Export `),Jc(),Mi(31,`button`,13),ih(`click`,function(){return t.triggerJsonImport()}),Mi(32,`mat-icon`),cw(33,`upload`),Jc(),cw(34,` JSON Import `),Jc(),Mi(35,`input`,14,0),ih(`change`,function(b){return t.onJsonFileSelected(b)}),Jc(),hD(37,Xn,4,0,`button`,15),ww(38,`async`),Kc(39,Yn,4,0,`button`,16),hD(40,ea,4,0,`button`,17),ww(41,`async`),hD(42,ta,4,0,`button`,18),ww(43,`async`),Kc(44,ia,4,0,`button`,19),Mi(45,`button`,20)(46,`mat-icon`),cw(47,`delete_sweep`),Jc(),cw(48,` Zurücksetzen `),Mi(49,`mat-icon`),cw(50,`arrow_drop_down`),Jc()(),Mi(51,`mat-menu`,null,1)(53,`button`,21),ih(`click`,function(){return t.resetMeasurements(!1)}),Mi(54,`mat-icon`),cw(55,`delete_sweep`),Jc(),Mi(56,`span`),cw(57,`Alle Messungen löschen (nur Datenbank)`),Jc()(),Mi(58,`button`,21),ih(`click`,function(){return t.resetMeasurements(!0)}),Mi(59,`mat-icon`),cw(60,`delete_forever`),Jc(),Mi(61,`span`),cw(62,`Alle löschen (inkl. Gerät)`),Jc()()()(),Mi(63,`div`,22)(64,`mat-form-field`,23),ww(65,`async`),Mi(66,`mat-label`),cw(67,`Rennen (Automatik-Zuordnung)`),Jc(),Mi(68,`mat-select`,24),ww(69,`async`),ww(70,`async`),ih(`selectionChange`,function(b){return t.onRaceChange(b.value)}),Mi(71,`mat-option`,25),cw(72,`— kein Rennen —`),Jc(),vD(73,na,2,3,`mat-option`,25,Wn),ww(75,`async`),Jc()(),hD(76,da,2,3),ww(77,`async`),Kc(78,ca,2,0,`span`,26),Jc(),hD(79,la,2,0,`div`,27),ww(80,`async`),Mi(81,`div`,28)(82,`table`,29),ww(83,`async`),ww(84,`async`),tl(85,30),Wp(86,ma,2,0,`th`,31)(87,ua,2,1,`td`,32),nl(),tl(88,33),Wp(89,pa,2,0,`th`,31)(90,ha,2,1,`td`,32),nl(),tl(91,34),Wp(92,ba,2,0,`th`,31)(93,ga,2,2,`td`,35),nl(),tl(94,36),Wp(95,_a,2,0,`th`,31)(96,fa,3,4,`td`,32),nl(),tl(97,37),Wp(98,va,2,0,`th`,31)(99,Sa,7,0,`td`,32),nl(),Wp(100,ya,1,0,`tr`,38)(101,ka,1,0,`tr`,39),Jc()(),Mi(102,`div`,40),cw(103),ww(104,`async`),Jc()()()}if(e&2){let a,c=HD(52);dI(7),_h(`ngModel`,t.autoRefreshEnabled),tE(),dI(),gD(Tw(9,20,t.loading$)?8:10),dI(4),wh(t.lastUpdate),dI(25),gD(Tw(38,22,t.deviceStatus$)===`continuous`?37:39),dI(3),gD(Tw(41,24,t.deviceStatus$)===`normal`?40:-1),dI(2),gD(Tw(43,26,t.scheduledImportEnabled$)?42:44),dI(3),Jp(`matMenuTriggerFor`,c),dI(19),Jp(`matTooltip`,Tw(65,28,t.scheduledImportEnabled$)?`Automatischen Import zuerst deaktivieren, um das Rennen zu wechseln`:`Rennen auswählen startet die automatische Zuordnung, abwählen stoppt sie`),dI(4),Jp(`value`,Tw(69,30,t.selectedRaceId$))(`disabled`,!!Tw(70,32,t.scheduledImportEnabled$)),dI(3),Jp(`value`,null),dI(2),ID(Tw(75,34,t.races$)),dI(3),gD((a=Tw(77,36,t.selectedRaceId$))?76:78,a),dI(3),gD(Tw(80,38,t.loading$)?79:-1),dI(3),gh(`loading`,Tw(83,40,t.loading$)),Jp(`dataSource`,Tw(84,42,t.measurementsWithParticipants$)||Iw(46,Xe))(`trackBy`,t.trackById),dI(18),Jp(`matHeaderRowDef`,t.displayedColumns),dI(),Jp(`matRowDefColumns`,t.displayedColumns),dI(2),rl(` Anzahl der Messungen: `,(Tw(104,44,t.measurements$)||Iw(47,Xe)).length,` `)}},dependencies:[il,Zi,ji,Hi,Wi,Vi,zi,qi,Ui,Qi,Gi,$i,kx,Ox,fp,wN,CN,KN,qN,zo,ra$1,VN,IN,kN,LN,ON,Ax,Dp,bn,Je,Lt,I,G$2,Bt,jE,Fc,ss,BE,_r,si,rC,JD,Im,Ku,Qu$1],styles:[`.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;position:relative;flex-wrap:wrap;align-items:center}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.auto-assign-row[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}.race-select[_ngcontent-%COMP%]{min-width:280px}.next-number-info[_ngcontent-%COMP%]{font-size:.9rem;color:#000000b3}.hint[_ngcontent-%COMP%]{color:#0009}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}}`]})};export{kn as MeasurementListComponent};