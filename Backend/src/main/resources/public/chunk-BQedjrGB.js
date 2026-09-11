import{$ as Jc,$r as xD,A as FD,An as cI,At as Qu,Dn as bh,E as Eh,Et as Q,F as Fv,Fn as dw,G as Hj,Gn as gg,Gr as vg,Hn as fh,Hr as tl,In as eE,Ir as rl,Jn as hD,Ln as eh,Lt as T,M as Fj,Mt as Re,Q as Ja,Qr as ww,T as Ee,Tr as pD,Tt as Pu,Un as fw,Ur as tn$1,Ut as Uj,Vr as sw,Wt as Up,X as Ih,Y as Ig,Yt as We,Z as JI,Zn as ih,ar as kh,at as LD,c as A,cn as ZD,dt as Mi,fr as lu,ft as Mr,gr as mw,i as $j,ii as yw,jn as ch,jt as RD,k as Ew,kn as bw,kr as qE,kt as Qp,lt as Lu,n as $e$1,nt as Kc,oi as zE,on as Yp,pn as Zp,pr as mD,ri as yD,t as $E,tr as jD,vr as nh,vt as OD,wn as bD,xr as ny,xt as PD,y as Co,yr as nl,zr as sh,zt as Th}from"./chunk-BcE9rAg5.js";import{$t as nm,A as Kc$1,B as Q$1,Bt as iC,C as ID,Cn as uN,Ct as bg,Fn as xt,Ft as fp,Hn as zl,I as Oh,K as Qh,L as Om,Mn as we,N as Nu,Nt as eC,Ot as by,Pt as em,Rt as gy,S as HC,T as JE,V as QD,Vn as ze,Wt as ix,bt as _y,ct as Xc,d as Bp,fn as rC,g as Dy,h as Ds,hn as rx,jt as dN,k as Jt,kn as vs,l as Be,n as $E$1,nt as TD,p as Cu,pn as rc,qt as ka,r as $d,rt as Un,s as At,t as $C,tn as nr,tt as Sy,u as Bo,vn as tC,w as JD,yn as tD,z as Ph,zn as yy}from"./chunk-CvvWUGgn.js";import{t as l}from"./chunk-ihTxQUf5.js";import{i as W$1}from"./chunk-B27OVHBM.js";import{$t as O,Cn as w,En as z,Gt as C$1,Ht as $,I as Bt,Jt as H,Kt as E,L as G$1,N as t,On as C,Qt as L,R as I,Sn as te,Tn as y,Ut as A$1,Wt as B,Xt as J,Yt as Ie,Zt as K,_n as ne,an as V,bn as re,cn as _,dn as f,en as P,fn as ge,gn as l$1,hn as j,in as U,ln as ae,mn as ie,nn as S,on as W$2,pn as he,qt as G,rn as T$1,sn as X,t as m,tn as R,un as ee,vn as oe,wn as xe,xn as se,yn as q,z as Lt}from"./main-T6D3DV5T.js";import{n as Nt,t as Lt$1}from"./chunk-2A96GhQ1.js";import{S as zo,_ as ni,a as Lo,c as Ui,d as Wi,f as Zi$1,h as jo,i as Hi,l as Un$1,m as ji,n as $i,o as Po,p as fn$1,r as Gi,s as Qi$1,t as $e$2,u as Vi,v as qi,x as zi,y as ra}from"./chunk-BsNjwJef.js";var an=[`switch`];var rn=[`*`];function on(a,i){a&1&&(Mi(0,`span`,11),Qu(),Mi(1,`svg`,13),Yp(2,`path`,14),Jc(),Mi(3,`svg`,15),Yp(4,`path`,16),Jc()())}var sn=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Te=class{source;checked;constructor(i,e){this.source=i,this.checked=e}};var Ge=(()=>{class a{_elementRef=T(Mr);_focusMonitor=T(Jt);_changeDetectorRef=T(Hj);defaults=T(sn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Te(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ze();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new We;toggleChange=new We;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){T(we).load(Xc);let e=T(new kh(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=T(Be).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Te(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||a)};static ɵcmp=$E({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,n){if(t&1&&sh(an,5),t&2){let c;LD(c=PD())&&(n._switchElement=c.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,n){t&2&&(eh(`id`,n.id),Qp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),ZD(n.color?`mat-`+n.color:``),fh(`mat-mdc-slide-toggle-focused`,n._focused)(`mat-mdc-slide-toggle-checked`,n.checked)(`mat-slide-toggle-full-width`,n.fullWidth)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,$j],color:`color`,disabled:[2,`disabled`,`disabled`,$j],fullWidth:[2,`fullWidth`,`fullWidth`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],checked:[2,`checked`,`checked`,$j],hideIcon:[2,`hideIcon`,`hideIcon`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[mw([{provide:nr,useExisting:Co(()=>a),multi:!0},{provide:At,useExisting:a,multi:!0}]),ny],ngContentSelectors:rn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,n){if(t&1&&(OD(),Mi(0,`div`,1)(1,`button`,2,0),nh(`click`,function(){return n._handleClick()}),Yp(3,`div`,3)(4,`span`,4),Mi(5,`span`,5)(6,`span`,6)(7,`span`,7),Yp(8,`span`,8),Jc(),Mi(9,`span`,9),Yp(10,`span`,10),Jc(),pD(11,on,5,0,`span`,11),Jc()()(),Mi(12,`label`,12),nh(`click`,function(p){return p.stopPropagation()}),RD(13),Jc()()),t&2){let c=jD(2);Zp(`labelPosition`,n.labelPosition),cI(),fh(`mdc-switch--selected`,n.checked)(`mdc-switch--unselected`,!n.checked)(`mdc-switch--checked`,n.checked)(`mdc-switch--disabled`,n.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,n.disabledInteractive),Zp(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`disabled`,n.disabled&&!n.disabledInteractive),Qp(`id`,n.buttonId)(`name`,n.name)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n._getAriaLabelledBy())(`aria-describedby`,n.ariaDescribedby)(`aria-required`,n.required||null)(`aria-checked`,n.checked)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),cI(9),Zp(`matRippleTrigger`,c)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0),cI(),hD(n.hideIcon?-1:11),cI(),Zp(`for`,n.buttonId),Qp(`id`,n._labelId)}},dependencies:[tD,m],styles:[`.mdc-switch {
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
`],encapsulation:2})}return a})();var Qi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=qE({type:a});static ɵinj=lu({imports:[Ge,Q$1]})}return a})();function mn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Minuten erforderlich`),Jc())}function un(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Minuten müssen >= 0 sein`),Jc())}function hn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Sekunden erforderlich`),Jc())}function pn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Sekunden: 0-59`),Jc())}function bn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Millisekunden erforderlich`),Jc())}function gn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Millisekunden: 0-999`),Jc())}function _n(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Messzeit ist erforderlich`),Jc())}var W=class a{fb=T(yy);dialogRef=T($e$2);data=T(Un$1);form;constructor(){let i=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[i.minutes,[Un.required,Un.min(0)]],seconds:[i.seconds,[Un.required,Un.min(0),Un.max(59)]],milliseconds:[i.milliseconds,[Un.required,Un.min(0),Un.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),Un.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let i=this.form.value,e=this.convertToMilliseconds(Number(i.minutes),Number(i.seconds),Number(i.milliseconds)),t={participantId:this.data?.participantId??null,durationMs:e,measuredAt:this.formatDateTimeForBackend(i.measuredAt)};this.dialogRef.close(t)}}formatDateTimeForInput(i){if(!i){let t=new Date;return this.toLocalISOString(t)}let e=new Date(i);return this.toLocalISOString(e)}toLocalISOString(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,`0`)}-${String(i.getDate()).padStart(2,`0`)}T${String(i.getHours()).padStart(2,`0`)}:${String(i.getMinutes()).padStart(2,`0`)}:${String(i.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(i){let e=new Date(i);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}convertToMilliseconds(i,e,t){return i*60*1e3+e*1e3+t}splitMilliseconds(i){let e=Math.floor(i/6e4),t=i%(60*1e3);return{minutes:e,seconds:Math.floor(t/1e3),milliseconds:t%1e3}}static ɵfac=function(e){return new(e||a)};static ɵcmp=$E({type:a,selectors:[[`app-measurement-dialog`]],decls:33,vars:10,consts:[[`mat-dialog-title`,``],[1,`measurement-form`,3,`formGroup`],[1,`time-input-group`],[`appearance`,`outline`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`,`required`,``],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`,`required`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),sw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`mat-form-field`,3)(6,`mat-label`),sw(7,`Minuten`),Jc(),Yp(8,`input`,4),JI(),pD(9,mn,2,0,`mat-error`),pD(10,un,2,0,`mat-error`),Jc(),Mi(11,`mat-form-field`,3)(12,`mat-label`),sw(13,`Sekunden`),Jc(),Yp(14,`input`,5),JI(),pD(15,hn,2,0,`mat-error`),pD(16,pn,2,0,`mat-error`),Jc(),Mi(17,`mat-form-field`,3)(18,`mat-label`),sw(19,`Millisekunden`),Jc(),Yp(20,`input`,6),JI(),pD(21,bn,2,0,`mat-error`),pD(22,gn,2,0,`mat-error`),Jc()(),Mi(23,`mat-form-field`,3)(24,`mat-label`),sw(25,`Gemessen am (ISO Format)`),Jc(),Yp(26,`input`,7),JI(),pD(27,_n,2,0,`mat-error`),Jc()()(),Mi(28,`mat-dialog-actions`,8)(29,`button`,9),nh(`click`,function(){return t.onCancel()}),sw(30,`Abbrechen`),Jc(),Mi(31,`button`,10),nh(`click`,function(){return t.onSave()}),sw(32,` Speichern `),Jc()()),e&2&&(cI(),Ih(t.data?`Messung bearbeiten`:`Neue Messung`),cI(2),Zp(`formGroup`,t.form),cI(5),eE(),cI(),hD(t.form.get(`minutes`)?.hasError(`required`)&&t.form.get(`minutes`)?.touched?9:-1),cI(),hD(t.form.get(`minutes`)?.hasError(`min`)?10:-1),cI(4),eE(),cI(),hD(t.form.get(`seconds`)?.hasError(`required`)&&t.form.get(`seconds`)?.touched?15:-1),cI(),hD(t.form.get(`seconds`)?.hasError(`min`)||t.form.get(`seconds`)?.hasError(`max`)?16:-1),cI(4),eE(),cI(),hD(t.form.get(`milliseconds`)?.hasError(`required`)&&t.form.get(`milliseconds`)?.touched?21:-1),cI(),hD(t.form.get(`milliseconds`)?.hasError(`min`)||t.form.get(`milliseconds`)?.hasError(`max`)?22:-1),cI(4),eE(),cI(),hD(t.form.get(`measuredAt`)?.hasError(`required`)&&t.form.get(`measuredAt`)?.touched?27:-1),cI(4),Zp(`disabled`,!t.form.valid))},dependencies:[ka,Dy,by,zl,em,gy,_y,rc,Ph,Oh,Bo,nm,zo,Po,jo,Lo,Ds,$d,vs,Bp,uN,dN,ID,TD],styles:[`.measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var fn=[`input`];var vn=[`formField`];var Sn=[`*`];var Oe=class{source;value;constructor(i,e){this.source=i,this.value=e}};var yn={provide:nr,useExisting:Co(()=>qe),multi:!0};var Zi=new A(`MatRadioGroup`);var kn=new A(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var qe=(()=>{class a{_changeDetector=T(Hj);_value=null;_name=T(Be).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new We;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Oe(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||a)};static ɵdir=zE({type:a,selectors:[[`mat-radio-group`]],contentQueries:function(t,n,c){if(t&1&&ih(c,$e,5),t&2){let p;LD(p=PD())&&(n._radios=p)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,$j],required:[2,`required`,`required`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[mw([yn,{provide:Zi,useExisting:a}])]})}return a})();var $e=(()=>{class a{_elementRef=T(Mr);_changeDetector=T(Hj);_focusMonitor=T(Jt);_radioDispatcher=T(bg);_defaultOptions=T(kn,{optional:!0});_ngZone=T(Re);_renderer=T(Ja);_uniqueId=T(Be).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new We;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ze();_injector=T(Ee);constructor(){T(we).load(Xc);let e=T(Zi,{optional:!0}),t=T(new kh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Uj(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Oe(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,Fv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===n&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||a)};static ɵcmp=$E({type:a,selectors:[[`mat-radio-button`]],viewQuery:function(t,n){if(t&1&&sh(fn,5)(vn,7,Mr),t&2){let c;LD(c=PD())&&(n._inputElement=c.first),LD(c=PD())&&(n._rippleTrigger=c.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,n){t&1&&nh(`focus`,function(){return n._inputElement.nativeElement.focus()}),t&2&&(Qp(`id`,n.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),fh(`mat-primary`,n.color===`primary`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`mat-mdc-radio-checked`,n.checked)(`mat-mdc-radio-disabled`,n.disabled)(`mat-mdc-radio-disabled-interactive`,n.disabledInteractive)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],checked:[2,`checked`,`checked`,$j],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,$j],required:[2,`required`,`required`,$j],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Sn,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,n){t&1&&(OD(),Mi(0,`label`,2,0)(2,`span`,3),Yp(3,`span`,4),Mi(4,`input`,5,1),nh(`change`,function(p){return n._onInputInteraction(p)}),Jc(),Mi(6,`span`,6),Yp(7,`span`,7)(8,`span`,8),Jc(),Mi(9,`span`,9),Yp(10,`span`,10),Jc()(),Mi(11,`span`,11),RD(12),Jc()()),t&2&&(Zp(`labelPosition`,n.labelPosition)(`for`,n.inputId),cI(2),fh(`mdc-radio--disabled`,n.disabled),cI(2),Zp(`id`,n.inputId)(`checked`,n.checked)(`disabled`,n.disabled&&!n.disabledInteractive)(`required`,n.required),Qp(`name`,n.name)(`value`,n.value)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),cI(5),Zp(`matRippleTrigger`,n._rippleTrigger.nativeElement)(`matRippleDisabled`,n._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[tD,m],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return a})();var Yi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=qE({type:a});static ɵinj=lu({imports:[Kc$1,$e,Q$1]})}return a})();var Mn=(a,i)=>i.id;function Cn(a,i){if(a&1&&(Mi(0,`mat-option`,4),sw(1),Jc()),a&2){let e=i.$implicit,t=xD();Zp(`value`,e.id),cI(),Eh(``,e.name,` (`,t.formatRaceDate(e.date),`)`)}}function Nn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Bitte ein Rennen auswählen`),Jc())}function xn(a,i){a&1&&(Mi(0,`mat-error`),sw(1,`Bitte eine Archivierungs-Variante auswählen`),Jc())}var Fe=class a{fb=T(yy);dialogRef=T($e$2);data=T(Un$1);form=this.fb.group({raceId:[null,Un.required],mode:[null,Un.required]});onCancel(){this.dialogRef.close()}onSave(){if(!this.form.valid)return;let i=this.form.value.mode,e={raceId:Number(this.form.value.raceId),resetDevice:i===`reset`,clearAfterArchive:i!==`noclear`};this.dialogRef.close(e)}formatRaceDate(i){let e=i.split(`-`);return e.length===3?`${e[2]}.${e[1]}.${e[0]}`:i}static ɵfac=function(e){return new(e||a)};static ɵcmp=$E({type:a,selectors:[[`app-archive-measurements-dialog`]],decls:30,vars:4,consts:[[`mat-dialog-title`,``],[1,`archive-form`,3,`formGroup`],[`appearance`,`outline`],[`formControlName`,`raceId`,`required`,``],[3,`value`],[`formControlName`,`mode`,1,`mode-group`],[`value`,`reset`],[1,`hint`],[`value`,`keep`],[`value`,`noclear`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(e,t){e&1&&(Mi(0,`h2`,0),sw(1,`Messungen archivieren`),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,1)(4,`mat-form-field`,2)(5,`mat-label`),sw(6,`Rennen`),Jc(),Mi(7,`mat-select`,3),mD(8,Cn,2,3,`mat-option`,4,Mn),Jc(),JI(),pD(10,Nn,2,0,`mat-error`),Jc(),Mi(11,`mat-radio-group`,5)(12,`mat-radio-button`,6),sw(13,` Archivieren (inkl. Gerät-Reset) `),Mi(14,`p`,7),sw(15,`Aktuelle Messungen werden diesem Rennen zugeordnet, danach werden Datenbank und Gerät geleert. Bereit für das nächste Rennen.`),Jc()(),Mi(16,`mat-radio-button`,8),sw(17,` Archivieren (nur Datenbank) `),Mi(18,`p`,7),sw(19,`Wie oben, aber nur die Datenbank wird geleert, das Gerät bleibt unverändert.`),Jc()(),Mi(20,`mat-radio-button`,9),sw(21,` Archivieren (ohne Löschen) `),Mi(22,`p`,7),sw(23,`Aktuelle Messungen werden diesem Rennen zugeordnet. Datenbank und Gerät werden dabei NICHT verändert.`),Jc()()(),JI(),pD(24,xn,2,0,`mat-error`),Jc()(),Mi(25,`mat-dialog-actions`,10)(26,`button`,11),nh(`click`,function(){return t.onCancel()}),sw(27,`Abbrechen`),Jc(),Mi(28,`button`,12),nh(`click`,function(){return t.onSave()}),sw(29,` Archivieren `),Jc()()),e&2&&(cI(3),Zp(`formGroup`,t.form),cI(4),eE(),cI(),yD(t.data.races),cI(2),hD(t.form.get(`raceId`)?.hasError(`required`)&&t.form.get(`raceId`)?.touched?10:-1),cI(),eE(),cI(13),hD(t.form.get(`mode`)?.hasError(`required`)&&t.form.get(`mode`)?.touched?24:-1),cI(4),Zp(`disabled`,!t.form.valid))},dependencies:[ka,Dy,by,gy,_y,rc,Bo,nm,zo,Po,jo,Lo,Ds,$d,vs,Bp,Lt$1,Nt,W$1,Yi,qe,$e,ID,TD],styles:[`.archive-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;min-width:420px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mode-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.hint[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#0009}`]})};var En=[`jsonImportInput`];var en=()=>[];function In(a,i){a&1&&(Mi(0,`mat-icon`,5),sw(1,`sync `),Jc())}function An(a,i){if(a&1&&(Mi(0,`mat-icon`,6),sw(1,`sync `),Jc()),a&2)Zp(`matTooltip`,fw(`Letzte Aktualisierung: `,xD().lastUpdate))}function Dn(a,i){if(a&1){let e=bD();Mi(0,`button`,34),nh(`click`,function(){Lu(e);return Pu(xD().toggleContinuousMode(!1))}),Mi(1,`mat-icon`),sw(2,`stop`),Jc(),sw(3,` Kontinuierlich AUS `),Jc()}}function Rn(a,i){if(a&1){let e=bD();Mi(0,`button`,35),nh(`click`,function(){Lu(e);return Pu(xD().toggleContinuousMode(!0))}),Mi(1,`mat-icon`),sw(2,`play_arrow`),Jc(),sw(3,` Kontinuierlich AN `),Jc()}}function Tn(a,i){if(a&1){let e=bD();Mi(0,`button`,36),nh(`click`,function(){Lu(e);return Pu(xD().discardOldestStart())}),Mi(1,`mat-icon`),sw(2,`person_off`),Jc(),sw(3,` Sturz signalisieren `),Jc()}}function Ln(a,i){if(a&1){let e=bD();Mi(0,`button`,37),nh(`click`,function(){Lu(e);return Pu(xD().toggleScheduledImport(!1))}),Mi(1,`mat-icon`),sw(2,`cloud_sync`),Jc(),sw(3,` Auto-Import AUS `),Jc()}}function On(a,i){if(a&1){let e=bD();Mi(0,`button`,38),nh(`click`,function(){Lu(e);return Pu(xD().toggleScheduledImport(!0))}),Mi(1,`mat-icon`),sw(2,`cloud_download`),Jc(),sw(3,` Auto-Import AN `),Jc()}}function $n(a,i){a&1&&(Mi(0,`div`,22),Yp(1,`mat-spinner`,39),Jc())}function Fn(a,i){a&1&&(Mi(0,`th`,40),sw(1,`ID`),Jc())}function zn(a,i){if(a&1&&(Mi(0,`td`,41),sw(1),Jc()),a&2){let e=i.$implicit;cI(),Ih(e.id)}}function Bn(a,i){a&1&&(Mi(0,`th`,40),sw(1,`Dauer`),Jc())}function Pn(a,i){if(a&1&&(Mi(0,`td`,41),sw(1),Jc()),a&2){let e=i.$implicit,t=xD();cI(),rl(` `,t.formatDuration(e.durationMs),` `)}}function Gn(a,i){a&1&&(Mi(0,`th`,40),sw(1,`Gemessen am`),Jc())}function qn(a,i){if(a&1&&(Mi(0,`td`,41),sw(1),Ew(2,`date`),Jc()),a&2){let e=i.$implicit;cI(),rl(` `,bw(2,1,e.measuredAt,`dd.MM.yyyy HH:mm:ss`),` `)}}function Vn(a,i){a&1&&(Mi(0,`th`,40),sw(1,`Aktionen`),Jc())}function jn(a,i){if(a&1){let e=bD();Mi(0,`td`,41)(1,`button`,42),nh(`click`,function(){let n=Lu(e).$implicit;return Pu(xD().openEditDialog(n))}),Mi(2,`mat-icon`),sw(3,`edit`),Jc()(),Mi(4,`button`,43),nh(`click`,function(){let n=Lu(e).$implicit;return Pu(xD().deleteMeasurement(n))}),Mi(5,`mat-icon`),sw(6,`delete`),Jc()()()}}function Hn(a,i){a&1&&Yp(0,`tr`,44)}function Kn(a,i){a&1&&Yp(0,`tr`,45)}var tn=class a{store=T(xt);dialog=T(fn$1);snackBar=T(ni);actions$=T(ix);destroy$=new Q;autoRefresh$=new Q;measurements$;races$;loading$;continuousModeEnabled$;scheduledImportEnabled$;deviceStatus$;displayedColumns=[`id`,`duration`,`measuredAt`,`actions`];lastUpdate=``;autoRefreshEnabled=!1;lastResetDevice=!1;lastArchiveResetDevice=!1;lastArchiveClearAfterArchive=!0;jsonImportInput=Fj.required(`jsonImportInput`);constructor(){this.measurements$=this.store.select(l$1),this.races$=this.store.select(l),this.loading$=this.store.select(xe),this.continuousModeEnabled$=this.store.select(Ie),this.scheduledImportEnabled$=this.store.select(ge),this.deviceStatus$=this.store.select(he),this.actions$.pipe(rx(L),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(rx(P),Ig(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Erstellen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(A$1),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(rx(R),Ig(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(B),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(rx(E),Ig(this.destroy$)).subscribe(({error:i})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Messung: ${i}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(O),Ig(this.destroy$)).subscribe(()=>{let i=this.lastResetDevice?`Alle Messungen wurden gelöscht (inkl. Gerät)`:`Alle Messungen wurden gelöscht (nur Datenbank)`;this.snackBar.open(i,`OK`,{duration:3e3})}),this.actions$.pipe(rx(q),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Löschen der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(j),Ig(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Kontinuierlicher Modus aktiviert`:`Kontinuierlicher Modus deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(rx(w),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des kontinuierlichen Modus`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(G),Ig(this.destroy$)).subscribe(({enabled:i})=>{let e=i?`Automatischer Import aktiviert (alle 5 Sekunden)`:`Automatischer Import deaktiviert`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(rx(H),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des automatischen Imports`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(V),Ig(this.destroy$)).subscribe(()=>{let i=this.lastArchiveClearAfterArchive?this.lastArchiveResetDevice?`Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen.`:`Messungen archiviert. Bereit für das nächste Rennen.`:`Messungen archiviert. Datenbank und Gerät wurden nicht verändert.`;this.snackBar.open(i,`OK`,{duration:3e3})}),this.actions$.pipe(rx(W$2),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Archivieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(ie),Ig(this.destroy$)).subscribe(({connected:i})=>{i&&this.store.dispatch(X())}),this.actions$.pipe(rx($),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Ältester Start erfolgreich verworfen`,`OK`,{duration:3e3})}),this.actions$.pipe(rx(ee),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Verwerfen des ältesten Starts`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(j),Ig(this.destroy$)).subscribe(()=>{this.store.dispatch(X())}),this.actions$.pipe(rx(re),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messungen erfolgreich exportiert`,`OK`,{duration:3e3})}),this.actions$.pipe(rx(se),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Exportieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(rx(ae),Ig(this.destroy$)).subscribe(({count:i})=>{this.snackBar.open(`${i} Messung(en) erfolgreich importiert`,`OK`,{duration:3e3}),this.loadData()}),this.actions$.pipe(rx(oe),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Importieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(C()),this.store.dispatch(K()),this.store.dispatch(X()),this.autoRefresh$.pipe(vg(i=>i?gg(2e3):$e$1),Ig(this.destroy$)).subscribe(()=>{this.loadData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let i=this.autoRefreshEnabled?`Automatische Aktualisierung aktiviert`:`Automatische Aktualisierung deaktiviert`;this.snackBar.open(i,`OK`,{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open(`Daten wurden aktualisiert`,`OK`,{duration:2e3})}loadData(){this.store.dispatch(S()),this.store.dispatch(t()),this.updateLastUpdateTime()}updateLastUpdateTime(){let i=new Date;this.lastUpdate=i.toLocaleTimeString(`de-DE`)}formatDuration(i){let e=Math.floor(i/1e3),t=Math.floor(e/3600),n=Math.floor(e%3600/60),c=e%60,p=i%1e3;return t>0?`${t}:${String(n).padStart(2,`0`)}:${String(c).padStart(2,`0`)}.${String(p).padStart(3,`0`)}`:n>0?`${n}:${String(c).padStart(2,`0`)}.${String(p).padStart(3,`0`)}`:`${c}.${String(p).padStart(3,`0`)}s`}openCreateDialog(){this.dialog.open(W,{width:`500px`}).afterClosed().pipe(Ig(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(C$1({measurement:e}))})}openEditDialog(i){this.dialog.open(W,{width:`500px`,data:i}).afterClosed().pipe(Ig(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(f({id:i.id,measurement:t}))})}deleteMeasurement(i){confirm(`M\xF6chten Sie die Messung #${i.id} wirklich l\xF6schen?`)&&this.store.dispatch(y({id:i.id}))}resetMeasurements(i){confirm(i?`Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!`:`Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?`)&&(this.lastResetDevice=i,this.store.dispatch(J({resetDevice:i})))}toggleContinuousMode(i){this.store.dispatch(U({enable:i}))}toggleScheduledImport(i){this.store.dispatch(z({enable:i}))}openArchiveDialog(){this.races$.pipe(tn$1(1)).subscribe(i=>{this.dialog.open(Fe,{width:`500px`,data:{races:i}}).afterClosed().pipe(Ig(this.destroy$)).subscribe(t=>{t&&(this.lastArchiveResetDevice=t.resetDevice,this.lastArchiveClearAfterArchive=t.clearAfterArchive,this.store.dispatch(T$1(t)))})})}discardOldestStart(){confirm(`Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.`)&&this.store.dispatch(_())}exportMeasurements(){this.store.dispatch(te())}triggerJsonImport(){this.jsonImportInput().nativeElement.value=``,this.jsonImportInput().nativeElement.click()}onJsonFileSelected(i){let t=i.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=c=>{try{let p=c.target?.result,R=JSON.parse(p);if(!Array.isArray(R)){this.snackBar.open(`Ungültiges JSON-Format: Array erwartet`,`OK`,{duration:5e3,panelClass:`error-snackbar`});return}this.store.dispatch(ne({measurements:R}))}catch{this.snackBar.open(`Fehler beim Lesen der JSON-Datei`,`OK`,{duration:5e3,panelClass:`error-snackbar`})}},n.readAsText(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=$E({type:a,selectors:[[`app-measurement-list`]],viewQuery:function(e,t){e&1&&ch(t.jsonImportInput,En,5),e&2&&FD()},decls:86,vars:32,consts:[[`jsonImportInput`,``],[`resetMenu`,`matMenu`],[1,`title-row`],[1,`sync-status`],[`color`,`primary`,`matTooltip`,`Automatische Aktualisierung`,3,`ngModelChange`,`change`,`ngModel`],[`matTooltip`,`Aktualisiere...`,1,`sync-icon`,`syncing`],[1,`sync-icon`,3,`matTooltip`],[1,`last-update-text`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Aktuelle Messungen einem Rennen zuordnen und archivieren`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Alle Messungen als JSON-Datei herunterladen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Messungen aus JSON-Datei importieren`,3,`click`],[`type`,`file`,`accept`,`.json,application/json`,2,`display`,`none`,3,`change`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Messungen zurücksetzen`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[1,`loading-overlay`],[1,`table-container`],[`mat-table`,``,1,`measurement-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`duration`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`count-info`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`,3,`click`],[`diameter`,`30`],[`mat-header-cell`,``],[`mat-cell`,``],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){if(e&1){let n=bD();Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`)(3,`div`,2)(4,`span`),sw(5,`Messungen`),Jc(),Mi(6,`div`,3)(7,`mat-slide-toggle`,4),Th(`ngModelChange`,function(p){return Lu(n),dw(t.autoRefreshEnabled,p)||(t.autoRefreshEnabled=p),Pu(p)}),nh(`change`,function(){return t.onAutoRefreshToggle()}),Jc(),JI(),pD(8,In,2,0,`mat-icon`,5),Ew(9,`async`),Kc(10,An,2,2,`mat-icon`,6),Mi(11,`span`,7),sw(12),Jc()()()()(),Mi(13,`mat-card-content`)(14,`div`,8)(15,`button`,9),nh(`click`,function(){return t.openCreateDialog()}),Mi(16,`mat-icon`),sw(17,`add`),Jc(),sw(18,` Neue Messung `),Jc(),Mi(19,`button`,10),nh(`click`,function(){return t.manualRefresh()}),Mi(20,`mat-icon`),sw(21,`refresh`),Jc(),sw(22,` Manuell aktualisieren `),Jc(),Mi(23,`button`,11),nh(`click`,function(){return t.openArchiveDialog()}),Mi(24,`mat-icon`),sw(25,`archive`),Jc(),sw(26,` Archivieren `),Jc(),Mi(27,`button`,12),nh(`click`,function(){return t.exportMeasurements()}),Mi(28,`mat-icon`),sw(29,`download`),Jc(),sw(30,` JSON Export `),Jc(),Mi(31,`button`,13),nh(`click`,function(){return t.triggerJsonImport()}),Mi(32,`mat-icon`),sw(33,`upload`),Jc(),sw(34,` JSON Import `),Jc(),Mi(35,`input`,14,0),nh(`change`,function(p){return t.onJsonFileSelected(p)}),Jc(),pD(37,Dn,4,0,`button`,15),Ew(38,`async`),Kc(39,Rn,4,0,`button`,16),pD(40,Tn,4,0,`button`,17),Ew(41,`async`),pD(42,Ln,4,0,`button`,18),Ew(43,`async`),Kc(44,On,4,0,`button`,19),Mi(45,`button`,20)(46,`mat-icon`),sw(47,`delete_sweep`),Jc(),sw(48,` Zurücksetzen `),Mi(49,`mat-icon`),sw(50,`arrow_drop_down`),Jc()(),Mi(51,`mat-menu`,null,1)(53,`button`,21),nh(`click`,function(){return t.resetMeasurements(!1)}),Mi(54,`mat-icon`),sw(55,`delete_sweep`),Jc(),Mi(56,`span`),sw(57,`Alle Messungen löschen (nur Datenbank)`),Jc()(),Mi(58,`button`,21),nh(`click`,function(){return t.resetMeasurements(!0)}),Mi(59,`mat-icon`),sw(60,`delete_forever`),Jc(),Mi(61,`span`),sw(62,`Alle löschen (inkl. Gerät)`),Jc()()()(),pD(63,$n,2,0,`div`,22),Ew(64,`async`),Mi(65,`div`,23)(66,`table`,24),Ew(67,`async`),Ew(68,`async`),tl(69,25),Up(70,Fn,2,0,`th`,26)(71,zn,2,1,`td`,27),nl(),tl(72,28),Up(73,Bn,2,0,`th`,26)(74,Pn,2,1,`td`,27),nl(),tl(75,29),Up(76,Gn,2,0,`th`,26)(77,qn,3,4,`td`,27),nl(),tl(78,30),Up(79,Vn,2,0,`th`,26)(80,jn,7,0,`td`,27),nl(),Up(81,Hn,1,0,`tr`,31)(82,Kn,1,0,`tr`,32),Jc()(),Mi(83,`div`,33),sw(84),Ew(85,`async`),Jc()()()}if(e&2){let n=jD(52);cI(7),bh(`ngModel`,t.autoRefreshEnabled),eE(),cI(),hD(ww(9,14,t.loading$)?8:10),cI(4),Ih(t.lastUpdate),cI(25),hD(ww(38,16,t.deviceStatus$)===`continuous`?37:39),cI(3),hD(ww(41,18,t.deviceStatus$)===`normal`?40:-1),cI(2),hD(ww(43,20,t.scheduledImportEnabled$)?42:44),cI(3),Zp(`matMenuTriggerFor`,n),cI(18),hD(ww(64,22,t.loading$)?63:-1),cI(3),fh(`loading`,ww(67,24,t.loading$)),Zp(`dataSource`,ww(68,26,t.measurements$)||yw(30,en)),cI(15),Zp(`matHeaderRowDef`,t.displayedColumns),cI(),Zp(`matRowDefColumns`,t.displayedColumns),cI(2),rl(` Anzahl der Messungen: `,(ww(85,28,t.measurements$)||yw(31,en)).length,` `)}},dependencies:[ka,Zi$1,ji,Hi,Wi,Vi,zi,qi,Ui,Qi$1,Gi,$i,ID,TD,Om,JD,QD,$C,HC,zo,ra,rC,JE,tC,iC,eC,$E$1,fp,Qi,Ge,Lt,I,G$1,Bt,Sy,gy,Qh,Cu,Nu],styles:[`.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;position:relative;flex-wrap:wrap;align-items:center}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}}`]})};export{tn as MeasurementListComponent};