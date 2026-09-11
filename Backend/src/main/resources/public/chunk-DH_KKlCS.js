import{$ as Jc,$r as xD,A as FD,An as cI,At as Qu,Dn as bh,E as Eh,Et as Q,Fn as dw,G as Hj,Gn as gg,Gr as vg,Hn as fh,Hr as tl,In as eE,Ir as rl,Jn as hD,Ln as eh,Lt as T,M as Fj,Qr as ww,Tr as pD,Tt as Pu,Un as fw,Ur as tn,Ut as Uj,Vr as sw,Wt as Up,X as Ih,Y as Ig,Yt as We,Z as JI,ar as kh,at as LD,c as A,cn as ZD,dt as Mi$1,fr as lu,ft as Mr,gr as mw,i as $j,ii as yw,jn as ch,jt as RD,k as Ew,kn as bw,kr as qE,kt as Qp,lt as Lu,n as $e,nt as Kc,on as Yp,pn as Zp,pr as mD,ri as yD,t as $E,tr as jD,vr as nh,vt as OD,wn as bD,xr as ny,xt as PD,y as Co,yr as nl,zr as sh,zt as Th}from"./chunk-BcE9rAg5.js";import{An as vs,At as by,B as Om,Bn as ze,Bt as gy,C as HE,Ct as aN,Fn as xt,Ft as eD,G as QE,H as Ph,Ht as iC,It as em,Kt as ix,L as Nu,Lt as fp,Nn as we,O as Jt,Pt as eC,Qt as lN,S as HC,T as JE,U as Q$1,Vn as zl,W as QD,Xt as ka,Y as Qh,_ as FD$1,a as At,an as nr,at as Un$1,c as Bo,d as Cu,dn as py,hn as rc,ht as Yo,it as UC,jn as vy,k as KD,l as Bp,m as Ds,nt as Sy,on as nx,rn as nm,rt as TD,s as Be,t as $d,tn as nC,ut as Xc,z as Oh,zn as yy}from"./chunk-G_SeKo1t.js";import{r as s,t as l}from"./chunk-BDdSwFgm.js";import{a as pt,n as E,o as zt,r as Xt,t as $}from"./chunk-CJ_Qkk1Y.js";import{i as W}from"./chunk-DnaxzGta.js";import{$t as V,Bt as E$1,Gt as K,Ht as H,It as $$1,Jt as P,Kt as L,Lt as A$1,N as t,Qt as U,Rt as B,Sn as C,Ut as Ie,Vt as G,Wt as J,Xt as S,Yt as R,Zt as T$1,_n as w,an as ee,bn as z$1,cn as he,dn as ne,en as W$1,fn as oe$1,gn as te,hn as se,in as be,ln as ie,mn as re,nn as _,on as f,pn as q,qt as O,rn as ae,sn as ge,t as m,tn as X,un as j,vn as xe,w as S$1,yn as y,zt as C$1}from"./main-HV2RCSBG.js";import{n as Nt,t as Lt}from"./chunk-DvurEkPy.js";import{S as zo,_ as ni$1,a as Lo,c as Ui,d as Wi,f as Zi,h as jo,i as Hi,l as Un$2,m as ji,n as $i,o as Po,p as fn,r as Gi,s as Qi,t as $e$1,u as Vi,v as qi,x as zi,y as ra}from"./chunk-CwF1_z1g.js";var Vn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=qE({type:a});static ɵinj=lu({imports:[Yo,Q$1]})}return a})();var jn=[`switch`];var Jn=[`*`];function Un(a,e){a&1&&(Mi$1(0,`span`,11),Qu(),Mi$1(1,`svg`,13),Yp(2,`path`,14),Jc(),Mi$1(3,`svg`,15),Yp(4,`path`,16),Jc()())}var Wn=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Y=class{source;checked;constructor(e,t){this.source=e,this.checked=t}};var oe=(()=>{class a{_elementRef=T(Mr);_focusMonitor=T(Jt);_changeDetectorRef=T(Hj);defaults=T(Wn);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new Y(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ze();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new We;toggleChange=new We;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){T(we).load(Xc);let t=T(new kh(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=n.color||`accent`,this.id=this._uniqueId=T(Be).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t===`keyboard`||t===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Y(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||a)};static ɵcmp=$E({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(n,o){if(n&1&&sh(jn,5),n&2){let d;LD(d=PD())&&(o._switchElement=d.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(n,o){n&2&&(eh(`id`,o.id),Qp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),ZD(o.color?`mat-`+o.color:``),fh(`mat-mdc-slide-toggle-focused`,o._focused)(`mat-mdc-slide-toggle-checked`,o.checked)(`mat-slide-toggle-full-width`,o.fullWidth)(`_mat-animation-noopable`,o._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,$j],color:`color`,disabled:[2,`disabled`,`disabled`,$j],fullWidth:[2,`fullWidth`,`fullWidth`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:Uj(t)],checked:[2,`checked`,`checked`,$j],hideIcon:[2,`hideIcon`,`hideIcon`,$j],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[mw([{provide:nr,useExisting:Co(()=>a),multi:!0},{provide:At,useExisting:a,multi:!0}]),ny],ngContentSelectors:Jn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(n,o){if(n&1&&(OD(),Mi$1(0,`div`,1)(1,`button`,2,0),nh(`click`,function(){return o._handleClick()}),Yp(3,`div`,3)(4,`span`,4),Mi$1(5,`span`,5)(6,`span`,6)(7,`span`,7),Yp(8,`span`,8),Jc(),Mi$1(9,`span`,9),Yp(10,`span`,10),Jc(),pD(11,Un,5,0,`span`,11),Jc()()(),Mi$1(12,`label`,12),nh(`click`,function(p){return p.stopPropagation()}),RD(13),Jc()()),n&2){let d=jD(2);Zp(`labelPosition`,o.labelPosition),cI(),fh(`mdc-switch--selected`,o.checked)(`mdc-switch--unselected`,!o.checked)(`mdc-switch--checked`,o.checked)(`mdc-switch--disabled`,o.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,o.disabledInteractive),Zp(`tabIndex`,o.disabled&&!o.disabledInteractive?-1:o.tabIndex)(`disabled`,o.disabled&&!o.disabledInteractive),Qp(`id`,o.buttonId)(`name`,o.name)(`aria-label`,o.ariaLabel)(`aria-labelledby`,o._getAriaLabelledBy())(`aria-describedby`,o.ariaDescribedby)(`aria-required`,o.required||null)(`aria-checked`,o.checked)(`aria-disabled`,o.disabled&&o.disabledInteractive?`true`:null),cI(9),Zp(`matRippleTrigger`,d)(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleCentered`,!0),cI(),hD(o.hideIcon?-1:11),cI(),Zp(`for`,o.buttonId),Qp(`id`,o._labelId)}},dependencies:[eD,m],styles:[`.mdc-switch {
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
`],encapsulation:2})}return a})();var qn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=qE({type:a});static ɵinj=lu({imports:[oe,Q$1]})}return a})();function ti(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Minuten erforderlich`),Jc())}function ni(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Minuten müssen >= 0 sein`),Jc())}function ii(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Sekunden erforderlich`),Jc())}function ai(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Sekunden: 0-59`),Jc())}function ri(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Millisekunden erforderlich`),Jc())}function oi(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Millisekunden: 0-999`),Jc())}function si(a,e){a&1&&(Mi$1(0,`mat-error`),sw(1,`Messzeit ist erforderlich`),Jc())}var z=class a{fb=T(by);dialogRef=T($e$1);data=T(Un$2);form;constructor(){let e=this.splitMilliseconds(this.data?.durationMs||0);this.form=this.fb.group({minutes:[e.minutes,[Un$1.required,Un$1.min(0)]],seconds:[e.seconds,[Un$1.required,Un$1.min(0),Un$1.max(59)]],milliseconds:[e.milliseconds,[Un$1.required,Un$1.min(0),Un$1.max(999)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt),Un$1.required]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let e=this.form.value,t=this.convertToMilliseconds(Number(e.minutes),Number(e.seconds),Number(e.milliseconds)),n={participantId:this.data?.participantId??null,durationMs:t,measuredAt:this.formatDateTimeForBackend(e.measuredAt)};this.dialogRef.close(n)}}formatDateTimeForInput(e){if(!e){let n=new Date;return this.toLocalISOString(n)}let t=new Date(e);return this.toLocalISOString(t)}toLocalISOString(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}T${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}convertToMilliseconds(e,t,n){return e*60*1e3+t*1e3+n}splitMilliseconds(e){let t=Math.floor(e/6e4),n=e%(60*1e3);return{minutes:t,seconds:Math.floor(n/1e3),milliseconds:n%1e3}}static ɵfac=function(t){return new(t||a)};static ɵcmp=$E({type:a,selectors:[[`app-measurement-dialog`]],decls:33,vars:10,consts:[[`mat-dialog-title`,``],[1,`measurement-form`,3,`formGroup`],[1,`time-input-group`],[`appearance`,`outline`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`,`required`,``],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`,`required`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,n){t&1&&(Mi$1(0,`h2`,0),sw(1),Jc(),Mi$1(2,`mat-dialog-content`)(3,`form`,1)(4,`div`,2)(5,`mat-form-field`,3)(6,`mat-label`),sw(7,`Minuten`),Jc(),Yp(8,`input`,4),JI(),pD(9,ti,2,0,`mat-error`),pD(10,ni,2,0,`mat-error`),Jc(),Mi$1(11,`mat-form-field`,3)(12,`mat-label`),sw(13,`Sekunden`),Jc(),Yp(14,`input`,5),JI(),pD(15,ii,2,0,`mat-error`),pD(16,ai,2,0,`mat-error`),Jc(),Mi$1(17,`mat-form-field`,3)(18,`mat-label`),sw(19,`Millisekunden`),Jc(),Yp(20,`input`,6),JI(),pD(21,ri,2,0,`mat-error`),pD(22,oi,2,0,`mat-error`),Jc()(),Mi$1(23,`mat-form-field`,3)(24,`mat-label`),sw(25,`Gemessen am (ISO Format)`),Jc(),Yp(26,`input`,7),JI(),pD(27,si,2,0,`mat-error`),Jc()()(),Mi$1(28,`mat-dialog-actions`,8)(29,`button`,9),nh(`click`,function(){return n.onCancel()}),sw(30,`Abbrechen`),Jc(),Mi$1(31,`button`,10),nh(`click`,function(){return n.onSave()}),sw(32,` Speichern `),Jc()()),t&2&&(cI(),Ih(n.data?`Messung bearbeiten`:`Neue Messung`),cI(2),Zp(`formGroup`,n.form),cI(5),eE(),cI(),hD(n.form.get(`minutes`)?.hasError(`required`)&&n.form.get(`minutes`)?.touched?9:-1),cI(),hD(n.form.get(`minutes`)?.hasError(`min`)?10:-1),cI(4),eE(),cI(),hD(n.form.get(`seconds`)?.hasError(`required`)&&n.form.get(`seconds`)?.touched?15:-1),cI(),hD(n.form.get(`seconds`)?.hasError(`min`)||n.form.get(`seconds`)?.hasError(`max`)?16:-1),cI(4),eE(),cI(),hD(n.form.get(`milliseconds`)?.hasError(`required`)&&n.form.get(`milliseconds`)?.touched?21:-1),cI(),hD(n.form.get(`milliseconds`)?.hasError(`min`)||n.form.get(`milliseconds`)?.hasError(`max`)?22:-1),cI(4),eE(),cI(),hD(n.form.get(`measuredAt`)?.hasError(`required`)&&n.form.get(`measuredAt`)?.touched?27:-1),cI(4),Zp(`disabled`,!n.form.valid))},dependencies:[ka,Sy,vy,zl,em,py,gy,rc,Ph,Oh,Bo,nm,zo,Po,jo,Lo,Ds,$d,vs,Bp,lN,aN,TD,FD$1],styles:[`.measurement-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var li=[`jsonImportInput`];var Hn=()=>[];var di=(a,e)=>e.id;function ci(a,e){a&1&&(Mi$1(0,`mat-icon`,6),sw(1,`sync `),Jc())}function mi(a,e){if(a&1&&(Mi$1(0,`mat-icon`,7),sw(1,`sync `),Jc()),a&2)Zp(`matTooltip`,fw(`Letzte Aktualisierung: `,xD().lastUpdate))}function ui(a,e){if(a&1&&(Mi$1(0,`mat-option`,12),sw(1),Jc()),a&2){let t=e.$implicit,n=xD();Zp(`value`,t.id),cI(),Eh(``,t.name,` (`,n.formatRaceDate(t.date),`) `)}}function pi(a,e){if(a&1){let t=bD();Mi$1(0,`button`,41),nh(`click`,function(){Lu(t);return Pu(xD().toggleContinuousMode(!1))}),Mi$1(1,`mat-icon`),sw(2,`stop`),Jc(),sw(3,` Kontinuierlich AUS `),Jc()}}function hi(a,e){if(a&1){let t=bD();Mi$1(0,`button`,42),nh(`click`,function(){Lu(t);return Pu(xD().toggleContinuousMode(!0))}),Mi$1(1,`mat-icon`),sw(2,`play_arrow`),Jc(),sw(3,` Kontinuierlich AN `),Jc()}}function gi(a,e){if(a&1){let t=bD();Mi$1(0,`button`,43),nh(`click`,function(){Lu(t);return Pu(xD().discardOldestStart())}),Mi$1(1,`mat-icon`),sw(2,`person_off`),Jc(),sw(3,` Sturz signalisieren `),Jc()}}function bi(a,e){if(a&1){let t=bD();Mi$1(0,`button`,44),nh(`click`,function(){Lu(t);return Pu(xD().toggleScheduledImport(!1))}),Mi$1(1,`mat-icon`),sw(2,`cloud_sync`),Jc(),sw(3,` Auto-Import AUS `),Jc()}}function fi(a,e){if(a&1){let t=bD();Mi$1(0,`button`,45),nh(`click`,function(){Lu(t);return Pu(xD().toggleScheduledImport(!0))}),Mi$1(1,`mat-icon`),sw(2,`cloud_download`),Jc(),sw(3,` Auto-Import AN `),Jc()}}function _i(a,e){a&1&&(Mi$1(0,`div`,29),Yp(1,`mat-spinner`,46),Jc())}function vi(a,e){a&1&&(Mi$1(0,`th`,47),sw(1,`ID`),Jc())}function Si(a,e){if(a&1&&(Mi$1(0,`td`,48),sw(1),Jc()),a&2){let t=e.$implicit;cI(),Ih(t.id)}}function wi(a,e){a&1&&(Mi$1(0,`th`,47),sw(1,`Dauer`),Jc())}function Mi(a,e){if(a&1&&(Mi$1(0,`td`,48),sw(1),Jc()),a&2){let t=e.$implicit,n=xD();cI(),rl(` `,n.formatDuration(t.durationMs),` `)}}function yi(a,e){a&1&&(Mi$1(0,`th`,47),sw(1,`Gemessen am`),Jc())}function ki(a,e){if(a&1&&(Mi$1(0,`td`,48),sw(1),Ew(2,`date`),Jc()),a&2){let t=e.$implicit;cI(),rl(` `,bw(2,1,t.measuredAt,`dd.MM.yyyy HH:mm:ss`),` `)}}function Ci(a,e){a&1&&(Mi$1(0,`th`,47),sw(1,`Aktionen`),Jc())}function Ni(a,e){if(a&1){let t=bD();Mi$1(0,`td`,48)(1,`button`,49),nh(`click`,function(){let o=Lu(t).$implicit;return Pu(xD().openEditDialog(o))}),Mi$1(2,`mat-icon`),sw(3,`edit`),Jc()(),Mi$1(4,`button`,50),nh(`click`,function(){let o=Lu(t).$implicit;return Pu(xD().deleteMeasurement(o))}),Mi$1(5,`mat-icon`),sw(6,`delete`),Jc()()()}}function xi(a,e){a&1&&Yp(0,`tr`,51)}function Ei(a,e){a&1&&Yp(0,`tr`,52)}var Kn=class a{store=T(xt);dialog=T(fn);snackBar=T(ni$1);actions$=T(nx);destroy$=new Q;autoRefresh$=new Q;measurements$;races$;selectedRaceId$;loading$;continuousModeEnabled$;scheduledImportEnabled$;deviceStatus$;displayedColumns=[`id`,`duration`,`measuredAt`,`actions`];lastUpdate=``;autoRefreshEnabled=!1;lastResetDevice=!1;lastArchiveResetDevice=!1;lastArchiveClearAfterArchive=!0;jsonImportInput=Fj.required(`jsonImportInput`);constructor(){this.measurements$=this.store.select(be),this.races$=this.store.select(l),this.selectedRaceId$=this.store.select(s),this.loading$=this.store.select(xe),this.continuousModeEnabled$=this.store.select(Ie),this.scheduledImportEnabled$=this.store.select(ge),this.deviceStatus$=this.store.select(he),this.actions$.pipe(ix(L),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(P),Ig(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Erstellen der Messung: ${e}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(A$1),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(R),Ig(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${e}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(B),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messung erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(E$1),Ig(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Messung: ${e}`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(O),Ig(this.destroy$)).subscribe(()=>{let e=this.lastResetDevice?`Alle Messungen wurden gelöscht (inkl. Gerät)`:`Alle Messungen wurden gelöscht (nur Datenbank)`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(ix(q),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Löschen der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(j),Ig(this.destroy$)).subscribe(({enabled:e})=>{let t=e?`Kontinuierlicher Modus aktiviert`:`Kontinuierlicher Modus deaktiviert`;this.snackBar.open(t,`OK`,{duration:3e3})}),this.actions$.pipe(ix(w),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des kontinuierlichen Modus`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(G),Ig(this.destroy$)).subscribe(({enabled:e})=>{let t=e?`Automatischer Import aktiviert (alle 5 Sekunden)`:`Automatischer Import deaktiviert`;this.snackBar.open(t,`OK`,{duration:3e3})}),this.actions$.pipe(ix(H),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Ändern des automatischen Imports`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(V),Ig(this.destroy$)).subscribe(()=>{let e=this.lastArchiveClearAfterArchive?this.lastArchiveResetDevice?`Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen.`:`Messungen archiviert. Bereit für das nächste Rennen.`:`Messungen archiviert. Datenbank und Gerät wurden nicht verändert.`;this.snackBar.open(e,`OK`,{duration:3e3})}),this.actions$.pipe(ix(W$1),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Archivieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(ie),Ig(this.destroy$)).subscribe(({connected:e})=>{e&&this.store.dispatch(X())}),this.actions$.pipe(ix($$1),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Ältester Start erfolgreich verworfen`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(ee),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Verwerfen des ältesten Starts`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(j),Ig(this.destroy$)).subscribe(()=>{this.store.dispatch(X())}),this.actions$.pipe(ix(re),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Messungen erfolgreich exportiert`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(se),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Exportieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})}),this.actions$.pipe(ix(ae),Ig(this.destroy$)).subscribe(({count:e})=>{this.snackBar.open(`${e} Messung(en) erfolgreich importiert`,`OK`,{duration:3e3}),this.loadData()}),this.actions$.pipe(ix(oe$1),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`FEHLER beim Importieren der Messungen`,`OK`,{duration:1e4,panelClass:`error-snackbar`})})}ngAfterViewInit(){this.loadData(),this.store.dispatch(C()),this.store.dispatch(K()),this.store.dispatch(X()),this.autoRefresh$.pipe(vg(e=>e?gg(2e3):$e),Ig(this.destroy$)).subscribe(()=>{this.loadData()}),this.autoRefresh$.next(this.autoRefreshEnabled)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.autoRefresh$.complete()}onAutoRefreshToggle(){this.autoRefresh$.next(this.autoRefreshEnabled);let e=this.autoRefreshEnabled?`Automatische Aktualisierung aktiviert`:`Automatische Aktualisierung deaktiviert`;this.snackBar.open(e,`OK`,{duration:2e3})}manualRefresh(){this.loadData(),this.snackBar.open(`Daten wurden aktualisiert`,`OK`,{duration:2e3})}loadData(){this.store.dispatch(S()),this.store.dispatch(t()),this.updateLastUpdateTime()}updateLastUpdateTime(){let e=new Date;this.lastUpdate=e.toLocaleTimeString(`de-DE`)}formatDuration(e){let t=Math.floor(e/1e3),n=Math.floor(t/3600),o=Math.floor(t%3600/60),d=t%60,p=e%1e3;return n>0?`${n}:${String(o).padStart(2,`0`)}:${String(d).padStart(2,`0`)}.${String(p).padStart(3,`0`)}`:o>0?`${o}:${String(d).padStart(2,`0`)}.${String(p).padStart(3,`0`)}`:`${d}.${String(p).padStart(3,`0`)}s`}openCreateDialog(){this.dialog.open(z,{width:`500px`}).afterClosed().pipe(Ig(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(C$1({measurement:t}))})}openEditDialog(e){this.dialog.open(z,{width:`500px`,data:e}).afterClosed().pipe(Ig(this.destroy$)).subscribe(n=>{n&&this.store.dispatch(f({id:e.id,measurement:n}))})}deleteMeasurement(e){confirm(`M\xF6chten Sie die Messung #${e.id} wirklich l\xF6schen?`)&&this.store.dispatch(y({id:e.id}))}onRaceFilterChange(e){this.store.dispatch(S$1({id:e}))}formatRaceDate(e){let t=e.split(`-`);if(t.length===3){let n=t[0],o=t[1];return`${t[2]}.${o}.${n}`}return e}resetMeasurements(e){confirm(e?`Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!`:`Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?`)&&(this.lastResetDevice=e,this.store.dispatch(J({resetDevice:e})))}toggleContinuousMode(e){this.store.dispatch(U({enable:e}))}toggleScheduledImport(e){this.store.dispatch(z$1({enable:e}))}archiveMeasurements(e,t){this.selectedRaceId$.pipe(tn(1)).subscribe(n=>{if(!n){this.snackBar.open(`Bitte zuerst ein Rennen im Filter auswählen`,`OK`,{duration:4e3,panelClass:`error-snackbar`});return}confirm(t?e?`Möchten Sie die aktuellen Messungen wirklich archivieren und das Gerät zurücksetzen? Danach kann sofort das nächste Rennen gemessen werden.`:`Möchten Sie die aktuellen Messungen wirklich archivieren (nur Datenbank)? Danach kann sofort das nächste Rennen gemessen werden.`:`Möchten Sie die aktuellen Messungen für dieses Rennen archivieren? Datenbank und Gerät werden dabei NICHT verändert, das können Sie bei Bedarf später manuell erledigen.`)&&(this.lastArchiveResetDevice=e,this.lastArchiveClearAfterArchive=t,this.store.dispatch(T$1({raceId:n,resetDevice:e,clearAfterArchive:t})))})}discardOldestStart(){confirm(`Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.`)&&this.store.dispatch(_())}exportMeasurements(){this.store.dispatch(te())}triggerJsonImport(){this.jsonImportInput().nativeElement.value=``,this.jsonImportInput().nativeElement.click()}onJsonFileSelected(e){let n=e.target.files?.[0];if(!n)return;let o=new FileReader;o.onload=d=>{try{let p=d.target?.result,A=JSON.parse(p);if(!Array.isArray(A)){this.snackBar.open(`Ungültiges JSON-Format: Array erwartet`,`OK`,{duration:5e3,panelClass:`error-snackbar`});return}this.store.dispatch(ne({measurements:A}))}catch{this.snackBar.open(`Fehler beim Lesen der JSON-Datei`,`OK`,{duration:5e3,panelClass:`error-snackbar`})}},o.readAsText(n)}static ɵfac=function(t){return new(t||a)};static ɵcmp=$E({type:a,selectors:[[`app-measurement-list`]],viewQuery:function(t,n){t&1&&ch(n.jsonImportInput,li,5),t&2&&FD()},decls:122,vars:39,consts:[[`archiveMenu`,`matMenu`],[`jsonImportInput`,``],[`resetMenu`,`matMenu`],[1,`title-row`],[1,`sync-status`],[`color`,`primary`,`matTooltip`,`Automatische Aktualisierung`,3,`ngModelChange`,`change`,`ngModel`],[`matTooltip`,`Aktualisiere...`,1,`sync-icon`,`syncing`],[1,`sync-icon`,3,`matTooltip`],[1,`last-update-text`],[1,`filter-section`],[`appearance`,`outline`],[3,`selectionChange`,`value`],[3,`value`],[1,`header-actions`],[1,`button-group`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Aktuelle Messungen für das gewählte Rennen archivieren und Messtabelle leeren`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Alle Messungen als JSON-Datei herunterladen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Messungen aus JSON-Datei importieren`,3,`click`],[`type`,`file`,`accept`,`.json,application/json`,2,`display`,`none`,3,`change`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`],[1,`button-group`,`reset-group`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Messungen zurücksetzen`,3,`matMenuTriggerFor`],[1,`loading-overlay`],[1,`table-container`],[`mat-table`,``,1,`measurement-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`duration`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`count-info`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Kontinuierlichen Modus deaktivieren`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Kontinuierlichen Modus aktivieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Ältesten Start verwerfen (bei Sturz des Läufers)`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Automatischen Import deaktivieren (läuft alle 5 Sekunden)`,1,`active-mode`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Automatischen Import aktivieren (läuft alle 5 Sekunden)`,3,`click`],[`diameter`,`30`],[`mat-header-cell`,``],[`mat-cell`,``],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,n){if(t&1){let o=bD();Mi$1(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`)(3,`div`,3)(4,`span`),sw(5,`Messungen`),Jc(),Mi$1(6,`div`,4)(7,`mat-slide-toggle`,5),Th(`ngModelChange`,function(p){return Lu(o),dw(n.autoRefreshEnabled,p)||(n.autoRefreshEnabled=p),Pu(p)}),nh(`change`,function(){return n.onAutoRefreshToggle()}),Jc(),JI(),pD(8,ci,2,0,`mat-icon`,6),Ew(9,`async`),Kc(10,mi,2,2,`mat-icon`,7),Mi$1(11,`span`,8),sw(12),Jc()()()()(),Mi$1(13,`mat-card-content`)(14,`div`,9)(15,`mat-form-field`,10)(16,`mat-label`),sw(17,`Nach Rennen filtern`),Jc(),Mi$1(18,`mat-select`,11),Ew(19,`async`),nh(`selectionChange`,function(p){return n.onRaceFilterChange(p.value)}),Mi$1(20,`mat-option`,12),sw(21,`Alle Rennen`),Jc(),mD(22,ui,2,3,`mat-option`,12,di),Ew(24,`async`),Jc()()(),Mi$1(25,`div`,13)(26,`div`,14)(27,`button`,15),nh(`click`,function(){return n.openCreateDialog()}),Mi$1(28,`mat-icon`),sw(29,`add`),Jc(),sw(30,` Neue Messung `),Jc(),Mi$1(31,`button`,16),nh(`click`,function(){return n.manualRefresh()}),Mi$1(32,`mat-icon`),sw(33,`refresh`),Jc(),sw(34,` Manuell aktualisieren `),Jc()(),Mi$1(35,`div`,14)(36,`button`,17)(37,`mat-icon`),sw(38,`archive`),Jc(),sw(39,` Archivieren `),Mi$1(40,`mat-icon`),sw(41,`arrow_drop_down`),Jc()(),Mi$1(42,`mat-menu`,null,0)(44,`button`,18),nh(`click`,function(){return n.archiveMeasurements(!1,!0)}),Mi$1(45,`mat-icon`),sw(46,`archive`),Jc(),Mi$1(47,`span`),sw(48,`Archivieren (nur Datenbank)`),Jc()(),Mi$1(49,`button`,18),nh(`click`,function(){return n.archiveMeasurements(!0,!0)}),Mi$1(50,`mat-icon`),sw(51,`archive`),Jc(),Mi$1(52,`span`),sw(53,`Archivieren (inkl. Gerät-Reset)`),Jc()(),Mi$1(54,`button`,18),nh(`click`,function(){return n.archiveMeasurements(!1,!1)}),Mi$1(55,`mat-icon`),sw(56,`content_copy`),Jc(),Mi$1(57,`span`),sw(58,`Archivieren (ohne Löschen)`),Jc()()()(),Mi$1(59,`div`,14)(60,`button`,19),nh(`click`,function(){return n.exportMeasurements()}),Mi$1(61,`mat-icon`),sw(62,`download`),Jc(),sw(63,` JSON Export `),Jc(),Mi$1(64,`button`,20),nh(`click`,function(){return n.triggerJsonImport()}),Mi$1(65,`mat-icon`),sw(66,`upload`),Jc(),sw(67,` JSON Import `),Jc(),Mi$1(68,`input`,21,1),nh(`change`,function(p){return n.onJsonFileSelected(p)}),Jc()(),Mi$1(70,`div`,14),pD(71,pi,4,0,`button`,22),Ew(72,`async`),Kc(73,hi,4,0,`button`,23),pD(74,gi,4,0,`button`,24),Ew(75,`async`),Jc(),Mi$1(76,`div`,14),pD(77,bi,4,0,`button`,25),Ew(78,`async`),Kc(79,fi,4,0,`button`,26),Jc(),Mi$1(80,`div`,27)(81,`button`,28)(82,`mat-icon`),sw(83,`delete_sweep`),Jc(),sw(84,` Zurücksetzen `),Mi$1(85,`mat-icon`),sw(86,`arrow_drop_down`),Jc()(),Mi$1(87,`mat-menu`,null,2)(89,`button`,18),nh(`click`,function(){return n.resetMeasurements(!1)}),Mi$1(90,`mat-icon`),sw(91,`delete_sweep`),Jc(),Mi$1(92,`span`),sw(93,`Alle Messungen löschen (nur Datenbank)`),Jc()(),Mi$1(94,`button`,18),nh(`click`,function(){return n.resetMeasurements(!0)}),Mi$1(95,`mat-icon`),sw(96,`delete_forever`),Jc(),Mi$1(97,`span`),sw(98,`Alle löschen (inkl. Gerät)`),Jc()()()()(),pD(99,_i,2,0,`div`,29),Ew(100,`async`),Mi$1(101,`div`,30)(102,`table`,31),Ew(103,`async`),Ew(104,`async`),tl(105,32),Up(106,vi,2,0,`th`,33)(107,Si,2,1,`td`,34),nl(),tl(108,35),Up(109,wi,2,0,`th`,33)(110,Mi,2,1,`td`,34),nl(),tl(111,36),Up(112,yi,2,0,`th`,33)(113,ki,3,4,`td`,34),nl(),tl(114,37),Up(115,Ci,2,0,`th`,33)(116,Ni,7,0,`td`,34),nl(),Up(117,xi,1,0,`tr`,38)(118,Ei,1,0,`tr`,39),Jc()(),Mi$1(119,`div`,40),sw(120),Ew(121,`async`),Jc()()()}if(t&2){let o=jD(43),d=jD(88);cI(7),bh(`ngModel`,n.autoRefreshEnabled),eE(),cI(),hD(ww(9,17,n.loading$)?8:10),cI(4),Ih(n.lastUpdate),cI(6),Zp(`value`,ww(19,19,n.selectedRaceId$)),cI(2),Zp(`value`,null),cI(2),yD(ww(24,21,n.races$)),cI(14),Zp(`matMenuTriggerFor`,o),cI(35),hD(ww(72,23,n.deviceStatus$)===`continuous`?71:73),cI(3),hD(ww(75,25,n.deviceStatus$)===`normal`?74:-1),cI(3),hD(ww(78,27,n.scheduledImportEnabled$)?77:79),cI(4),Zp(`matMenuTriggerFor`,d),cI(18),hD(ww(100,29,n.loading$)?99:-1),cI(3),fh(`loading`,ww(103,31,n.loading$)),Zp(`dataSource`,ww(104,33,n.measurements$)||yw(37,Hn)),cI(15),Zp(`matHeaderRowDef`,n.displayedColumns),cI(),Zp(`matRowDefColumns`,n.displayedColumns),cI(2),rl(` Anzahl der Messungen: `,(ww(121,35,n.measurements$)||yw(38,Hn)).length,` `)}},dependencies:[ka,Zi,ji,Hi,Wi,Vi,zi,qi,Ui,Qi,Gi,$i,TD,FD$1,Om,QD,KD,HC,UC,zo,ra,iC,QE,eC,nC,JE,HE,fp,Vn,qn,oe,Xt,E,$,zt,pt,yy,py,Qh,Lt,$d,vs,Nt,W,Ds,Cu,Nu],styles:[`.filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:32px}.sync-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.875rem;color:#0009}.sync-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#0009}.sync-icon.syncing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;color:#3f51b5}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.last-update-text[_ngcontent-%COMP%]{font-size:.75rem;white-space:nowrap}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:16px;position:relative;flex-wrap:wrap;align-items:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:8px;padding-right:16px;border-right:1px solid rgba(0,0,0,.12)}.button-group[_ngcontent-%COMP%]:last-child{border-right:none}.reset-group[_ngcontent-%COMP%]{margin-left:auto;padding-right:0}.active-mode[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important}.active-mode[_ngcontent-%COMP%]:hover{background-color:#45a049!important}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.measurement-table[_ngcontent-%COMP%]{width:100%;transition:opacity .2s ease}.measurement-table.loading[_ngcontent-%COMP%]{opacity:.6}mat-card[_ngcontent-%COMP%]{margin:20px}mat-card-content[_ngcontent-%COMP%]{position:relative}.menu-section-header[_ngcontent-%COMP%]{opacity:.7;cursor:default!important}.menu-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}@media(max-width:768px){mat-card[_ngcontent-%COMP%]{margin:8px}.title-row[_ngcontent-%COMP%]{flex-wrap:wrap;gap:8px}.header-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:8px}.button-group[_ngcontent-%COMP%]{flex-wrap:wrap;padding-right:0;border-right:none;border-bottom:1px solid rgba(0,0,0,.12);padding-bottom:8px}.button-group[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.reset-group[_ngcontent-%COMP%]{margin-left:0}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;font-size:12px}mat-form-field[_ngcontent-%COMP%]{min-width:100%;width:100%}.measurement-table[_ngcontent-%COMP%]{font-size:12px}}`]})};export{Kn as MeasurementListComponent};