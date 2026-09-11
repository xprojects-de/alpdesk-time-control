import{$ as Jc,$r as xD,A as FD,An as cI,B as Gl,Et as Q,Ft as Rj,G as Hj,Gr as vg,Hn as fh,Hr as tl,In as eE,Ir as rl,Jn as hD,Kn as gi,L as G,Ln as eh,Lt as T,M as Fj,Mt as Re,Pn as dr,Qr as ww,Rn as el,Sr as od,T as Ee$1,Tr as pD,Tt as Pu,Ut as Uj,Vr as sw,Wt as Up,X as Ih,Y as Ig,Yt as We$1,Z as JI,Zn as ih,ai as z,at as LD,bt as Og,c as A,cn as ZD,dt as Mi,en as Xc,fr as lu,ft as Mr,g as Bp,gr as mw,i as $j,jn as ch,jt as RD,k as Ew,kr as qE,kt as Qp,lt as Lu,oi as zE,on as Yp,pn as Zp,pr as mD,ri as yD,t as $E,tr as jD,vr as nh,vt as OD,w as Dy,wn as bD,xt as PD,yr as nl,zr as sh}from"./chunk-BcE9rAg5.js";import{An as vs,At as by,B as Om,Bn as ze$1,Bt as gy,C as HE,Ct as aN,E as Je$1,Fn as xt,G as QE,Gt as is,Hn as zp,Ht as iC,Kt as ix,Lt as fp,M as Kc,Nn as we$1,O as Jt,Ot as bs,Pt as eC,Qt as lN,S as HC,T as JE,U as Q$1,Vn as zl,W as QD,Xt as ka,_ as FD$1,at as Un,c as Bo,d as Cu,dn as py,fn as qd,hn as rc,it as UC,jn as vy,jt as cr,k as KD,l as Bp$1,lt as Xb,m as Ds,mt as Yc,nt as Sy,on as nx,rn as nm,rt as TD,s as Be,t as $d,tn as nC,ut as Xc$1,xt as Zo,yt as Zf}from"./chunk-G_SeKo1t.js";import"./chunk-BDdSwFgm.js";import{i as W}from"./chunk-DnaxzGta.js";import{G as i,H as a,J as p,K as l,Kn as s,Sn as C,U as c,V as P,W as d,X as x,Y as u,q as o,z as Y}from"./main-IVB72KDZ.js";import{i as fn,n as Xt,r as bn,t as Va}from"./chunk-BinV8BHb.js";import{t as e}from"./chunk-B3EQRvcu.js";import{n as Nt,t as Lt}from"./chunk-DvurEkPy.js";import{S as zo,_ as ni,a as Lo,b as rn$1,c as Ui,d as Wi,f as Zi,h as jo,i as Hi,l as Un$1,m as ji,n as $i,o as Po,p as fn$1,r as Gi,s as Qi,t as $e$1,u as Vi,v as qi,x as zi,y as ra}from"./chunk-CwF1_z1g.js";import{n as gt,r as pt,t as W$1}from"./chunk-BJDflrw6.js";var ke=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Ie=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Me(i,n){i&1&&(Mi(0,`span`,3),RD(1,1),Jc())}function Ee(i,n){i&1&&(Mi(0,`span`,6),RD(1,2),Jc())}var De=[`*`];var Pe=new A(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var he=new A(`MatChipAvatar`);var me=new A(`MatChipTrailingIcon`);var ue=new A(`MatChipEdit`);var _e=new A(`MatChipRemove`);var ge=new A(`MatChip`);var ye=(()=>{class i{_elementRef=T(Mr);_parentChip=T(ge);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){T(we$1).load(Xc$1),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(e){return new(e||i)};static ɵdir=zE({type:i,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(e,a){e&2&&(Qp(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),fh(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:Uj(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return i})();var Ae=(()=>{class i extends ye{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Dy(i)))(a||i)}})();static ɵdir=zE({type:i,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(e,a){e&1&&nh(`click`,function(d){return a._handleClick(d)})(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(Qp(`tabindex`,a._getTabindex()),fh(`mdc-evolution-chip__action--presentational`,!1))},features:[Bp]})}return i})();var dt=(()=>{class i{_changeDetectorRef=T(Hj);_elementRef=T(Mr);_tagName=T(Rj);_ngZone=T(Re);_focusMonitor=T(Jt);_globalRippleOptions=T(is,{optional:!0});_document=T(dr);_onFocus=new Q;_onBlur=new Q;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ze$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=T(Be).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new We$1;destroyed=new We$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=T(Yc);_injector=T(Ee$1);constructor(){let t=T(we$1);t.load(Xc$1),t.load(cr),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Og(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let a=e._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(e){return new(e||i)};static ɵcmp=$E({type:i,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(e,a,l){if(e&1&&ih(l,he,5)(l,ue,5)(l,me,5)(l,_e,5)(l,he,5)(l,me,5)(l,ue,5)(l,_e,5),e&2){let d;LD(d=PD())&&(a.leadingIcon=d.first),LD(d=PD())&&(a.editIcon=d.first),LD(d=PD())&&(a.trailingIcon=d.first),LD(d=PD())&&(a.removeIcon=d.first),LD(d=PD())&&(a._allLeadingIcons=d),LD(d=PD())&&(a._allTrailingIcons=d),LD(d=PD())&&(a._allEditIcons=d),LD(d=PD())&&(a._allRemoveIcons=d)}},viewQuery:function(e,a){if(e&1&&sh(Ae,5),e&2){let l;LD(l=PD())&&(a.primaryAction=l.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(e,a){e&1&&nh(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(eh(`id`,a.id),Qp(`role`,a.role)(`aria-label`,a.ariaLabel),ZD(`mat-`+(a.color||`primary`)),fh(`mdc-evolution-chip`,!a._isBasicChip)(`mdc-evolution-chip--disabled`,a.disabled)(`mdc-evolution-chip--with-trailing-action`,a._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,a.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,a.leadingIcon)(`mdc-evolution-chip--with-avatar`,a.leadingIcon)(`mat-mdc-chip-with-avatar`,a.leadingIcon)(`mat-mdc-chip-highlighted`,a.highlighted)(`mat-mdc-chip-disabled`,a.disabled)(`mat-mdc-basic-chip`,a._isBasicChip)(`mat-mdc-standard-chip`,!a._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,a._hasTrailingIcon())(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,$j],highlighted:[2,`highlighted`,`highlighted`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],disabled:[2,`disabled`,`disabled`,$j]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[mw([{provide:ge,useExisting:i}])],ngContentSelectors:Ie,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(e,a){e&1&&(OD(ke),Yp(0,`span`,0),Mi(1,`span`,1)(2,`span`,2),pD(3,Me,2,0,`span`,3),Mi(4,`span`,4),RD(5),Yp(6,`span`,5),Jc()()(),pD(7,Ee,2,0,`span`,6)),e&2&&(cI(3),hD(a.leadingIcon?3:-1),cI(4),hD(a._hasTrailingIcon()?7:-1))},dependencies:[ye],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return i})();var be=(()=>{class i{_elementRef=T(Mr);_changeDetectorRef=T(Hj);_dir=T(Je$1,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Q;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new gi;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Gl(null),vg(()=>Og(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains(`mat-mdc-chip`))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Gl(this._chips)).subscribe(t=>{let e=[];t.forEach(a=>a._getActions().forEach(l=>e.push(l))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new Zo(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(Ig(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(Ig(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Gl(null),Ig(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ig(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),l=t.chip._hasFocus(),d=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),Ne=l||d;this._isValidIndex(a)&&Ne&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=$E({type:i,selectors:[[`mat-chip-set`]],contentQueries:function(e,a,l){if(e&1&&ih(l,dt,5),e&2){let d;LD(d=PD())&&(a._chips=d)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(e,a){e&1&&nh(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&Qp(`role`,a.role)},inputs:{disabled:[2,`disabled`,`disabled`,$j],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:Uj(t)]},ngContentSelectors:De,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(e,a){e&1&&(OD(),Xc(0,`div`,0),RD(1),el())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return i})();var Se=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=qE({type:i});static ɵinj=lu({providers:[qd,{provide:Pe,useValue:{separatorKeyCodes:[13]}}],imports:[Kc,Q$1]})}return i})();var lt=Xb(`person`);var Fe=Zf(lt,i=>i.persons);var Ce=Zf(lt,i=>i.loading);Zf(lt,i=>i.error);var we=Zf(Fe,s,(i,n)=>{let t=new Map;for(let e of n){if(!e.person||!e.race)continue;let a=t.get(e.person.id)??[];a.push(e.race),t.set(e.person.id,a)}return i.map(e=>z(G({},e),{activeRaces:t.get(e.id)??[]}))});var Oe=(i,n)=>n.value;function He(i,n){i&1&&(Mi(0,`mat-error`),sw(1,`Vorname ist erforderlich`),Jc())}function Ve(i,n){i&1&&(Mi(0,`mat-error`),sw(1,`Nachname ist erforderlich`),Jc())}function ze(i,n){i&1&&(Mi(0,`mat-error`),sw(1,`Geburtsdatum ist erforderlich`),Jc())}function Ge(i,n){if(i&1&&(Mi(0,`mat-option`,9),sw(1),Jc()),i&2){let t=n.$implicit;Zp(`value`,t.value),cI(),Ih(t.label)}}function qe(i,n){i&1&&(Mi(0,`mat-error`),sw(1,`Geschlecht ist erforderlich`),Jc())}var H=class i{fb=T(by);dialogRef=T($e$1);data=T(Un$1);form;genderOptions=[{value:`MALE`,label:e.MALE},{value:`FEMALE`,label:e.FEMALE}];constructor(){let n=this.data?.birthDate||``;if(n&&typeof n==`string`){let t=n.split(`-`);t.length===3&&(n=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||``,Un.required],lastName:[this.data?.lastName||``,Un.required],birthDate:[n,Un.required],gender:[this.data?.gender||``,Un.required],externalId:[this.data?.externalId||``]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let n=this.form.value,t={firstName:n.firstName,lastName:n.lastName,birthDate:this.formatDate(n.birthDate),gender:n.gender,externalId:n.externalId||void 0};this.dialogRef.close(t)}}formatDate(n){if(typeof n==`string`)return n;let t=new Date(n);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}static ɵfac=function(t){return new(t||i)};static ɵcmp=$E({type:i,selectors:[[`app-person-dialog`]],decls:42,vars:9,consts:[[`picker`,``],[`mat-dialog-title`,``],[1,`person-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`firstName`,`required`,``],[`matInput`,``,`formControlName`,`lastName`,`required`,``],[`matInput`,``,`formControlName`,`birthDate`,`placeholder`,`TT.MM.JJJJ`,`required`,``,3,`matDatepicker`],[`matSuffix`,``,3,`for`],[`formControlName`,`gender`,`required`,``],[3,`value`],[`matInput`,``,`formControlName`,`externalId`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,e){if(t&1&&(Mi(0,`h2`,1),sw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,2)(4,`mat-form-field`,3)(5,`mat-label`),sw(6,`Vorname`),Jc(),Yp(7,`input`,4),JI(),pD(8,He,2,0,`mat-error`),Jc(),Mi(9,`mat-form-field`,3)(10,`mat-label`),sw(11,`Nachname`),Jc(),Yp(12,`input`,5),JI(),pD(13,Ve,2,0,`mat-error`),Jc(),Mi(14,`mat-form-field`,3)(15,`mat-label`),sw(16,`Geburtsdatum`),Jc(),Yp(17,`input`,6),JI(),Yp(18,`mat-datepicker-toggle`,7)(19,`mat-datepicker`,null,0),Mi(21,`mat-hint`),sw(22,`Format: TT.MM.JJJJ (z.B. 24.3.2022)`),Jc(),pD(23,ze,2,0,`mat-error`),Jc(),Mi(24,`mat-form-field`,3)(25,`mat-label`),sw(26,`Geschlecht`),Jc(),Mi(27,`mat-select`,8),mD(28,Ge,2,2,`mat-option`,9,Oe),Jc(),JI(),pD(30,qe,2,0,`mat-error`),Jc(),Mi(31,`mat-form-field`,3)(32,`mat-label`),sw(33,`Externe ID (optional)`),Jc(),Yp(34,`input`,10),JI(),Mi(35,`mat-hint`),sw(36,`Vereins-/Verbandsnummer, falls vorhanden`),Jc()()()(),Mi(37,`mat-dialog-actions`,11)(38,`button`,12),nh(`click`,function(){return e.onCancel()}),sw(39,`Abbrechen`),Jc(),Mi(40,`button`,13),nh(`click`,function(){return e.onSave()}),sw(41,` Speichern `),Jc()()),t&2){let a=jD(20);cI(),rl(` `,e.data?`Person bearbeiten`:`Neue Person`,` `),cI(2),Zp(`formGroup`,e.form),cI(4),eE(),cI(),hD(e.form.get(`firstName`)?.hasError(`required`)&&e.form.get(`firstName`)?.touched?8:-1),cI(4),eE(),cI(),hD(e.form.get(`lastName`)?.hasError(`required`)&&e.form.get(`lastName`)?.touched?13:-1),cI(4),Zp(`matDatepicker`,a),eE(),cI(),Zp(`for`,a),cI(5),hD(e.form.get(`birthDate`)?.hasError(`required`)&&e.form.get(`birthDate`)?.touched?23:-1),cI(4),eE(),cI(),yD(e.genderOptions),cI(2),hD(e.form.get(`gender`)?.hasError(`required`)&&e.form.get(`gender`)?.touched?30:-1),cI(4),eE(),cI(6),Zp(`disabled`,!e.form.valid)}},dependencies:[ka,Sy,vy,zl,py,gy,rc,Bo,nm,zo,Po,jo,Lo,Ds,$d,vs,bs,Bp$1,zp,lN,aN,TD,FD$1,bn,fn,Xt,Va,Y,Lt,Nt,W],styles:[`.person-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var $e=(i,n)=>n.id;function je(i,n){i&1&&(Mi(0,`div`,3),Yp(1,`mat-spinner`),Jc())}function Qe(i,n){i&1&&(Mi(0,`th`,19),sw(1,`ID`),Jc())}function Ke(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit;cI(),Ih(t.id)}}function We(i,n){i&1&&(Mi(0,`th`,19),sw(1,`Nachname`),Jc())}function Ue(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit;cI(),Ih(t.lastName)}}function Je(i,n){i&1&&(Mi(0,`th`,19),sw(1,`Vorname`),Jc())}function Ze(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit;cI(),Ih(t.firstName)}}function Xe(i,n){i&1&&(Mi(0,`th`,19),sw(1,`Geburtsdatum`),Jc())}function Ye(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit,e=xD();cI(),Ih(e.formatRaceDate(t.birthDate))}}function tn(i,n){i&1&&(Mi(0,`th`,19),sw(1,`Geschlecht`),Jc())}function en(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit,e=xD();cI(),Ih(e.getGenderLabel(t.gender))}}function nn(i,n){i&1&&(Mi(0,`th`,19),sw(1,`Externe ID`),Jc())}function an(i,n){if(i&1&&(Mi(0,`td`,20),sw(1),Jc()),i&2){let t=n.$implicit;cI(),Ih(t.externalId||`-`)}}function on(i,n){i&1&&(Mi(0,`th`,21),sw(1,`Aktiv bei Rennen`),Jc())}function cn(i,n){if(i&1&&(Mi(0,`mat-chip`),sw(1),Jc()),i&2){let t=n.$implicit;cI(),Ih(t.name)}}function rn(i,n){if(i&1&&(Mi(0,`mat-chip-set`),mD(1,cn,2,1,`mat-chip`,null,$e),Jc()),i&2){let t=xD().$implicit;cI(),yD(t.activeRaces)}}function sn(i,n){i&1&&(Mi(0,`span`,22),sw(1,`-`),Jc())}function dn(i,n){if(i&1&&(Mi(0,`td`,20),pD(1,rn,3,0,`mat-chip-set`)(2,sn,2,0,`span`,22),Jc()),i&2){let t=n.$implicit;cI(),hD(t.activeRaces.length?1:2)}}function ln(i,n){i&1&&(Mi(0,`th`,21),sw(1,`Aktionen`),Jc())}function pn(i,n){if(i&1){let t=bD();Mi(0,`td`,20)(1,`button`,23),nh(`click`,function(){let a=Lu(t).$implicit;return Pu(xD().openEditDialog(a))}),Mi(2,`mat-icon`),sw(3,`edit`),Jc()(),Mi(4,`button`,24),nh(`click`,function(){let a=Lu(t).$implicit;return Pu(xD().deletePerson(a))}),Mi(5,`mat-icon`),sw(6,`delete`),Jc()()()}if(i&2){let t=n.$implicit;cI(4),Zp(`disabled`,t.activeRaces.length>0)(`matTooltip`,t.activeRaces.length>0?`Kann nicht gelöscht werden, solange die Person einem Rennen zugeordnet ist`:`Löschen`)}}function hn(i,n){i&1&&Yp(0,`tr`,25)}function mn(i,n){i&1&&Yp(0,`tr`,26)}var xe=class i$1{store=T(xt);dialog=T(fn$1);snackBar=T(ni);actions$=T(nx);destroy$=new Q;persons$;loading$;displayedColumns=[`id`,`lastName`,`firstName`,`birthDate`,`gender`,`externalId`,`activeRaces`,`actions`];dataSource=new rn$1([]);sortInitialized=!1;sort=Fj.required(W$1);constructor(){this.persons$=this.store.select(we),this.loading$=this.store.select(Ce),this.actions$.pipe(ix(c),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(a),Ig(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Erstellen der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(ix(u),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(d),Ig(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(ix(l),Ig(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(ix(x),Ig(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Person: ${n}`,`OK`,{duration:5e3})}),od(()=>{let n=this.sort();n&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=n,this.sortInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(o()),this.store.dispatch(C()),this.persons$.pipe(Ig(this.destroy$)).subscribe(n=>{this.dataSource.data=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(H,{width:`500px`}).afterClosed().pipe(Ig(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(P({person:t}))})}openEditDialog(n){this.dialog.open(H,{width:`500px`,data:n}).afterClosed().pipe(Ig(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(p({id:n.id,person:e}))})}deletePerson(n){n.activeRaces.length>0||confirm(`M\xF6chten Sie die Person "${n.lastName} ${n.firstName}" wirklich l\xF6schen?`)&&this.store.dispatch(i({id:n.id}))}refreshData(){this.store.dispatch(o()),this.store.dispatch(C()),this.snackBar.open(`Daten werden aktualisiert...`,`OK`,{duration:2e3})}getGenderLabel(n){return n?e[n]||n:`—`}formatRaceDate(n){let t=n.split(`-`);if(t.length===3){let e=t[0],a=t[1];return`${t[2]}.${a}.${e}`}return n}static ɵfac=function(t){return new(t||i$1)};static ɵcmp=$E({type:i$1,selectors:[[`app-person-list`]],viewQuery:function(t,e){t&1&&ch(e.sort,W$1,5),t&2&&FD()},decls:45,vars:10,consts:[[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Daten aktualisieren`,3,`click`],[1,`loading-container`],[1,`table-container`],[`mat-table`,``,`matSort`,``,1,`person-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`lastName`],[`matColumnDef`,`firstName`],[`matColumnDef`,`birthDate`],[`matColumnDef`,`gender`],[`matColumnDef`,`externalId`],[`matColumnDef`,`activeRaces`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-header-cell`,``],[1,`no-races`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,3,`click`,`disabled`,`matTooltip`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,e){t&1&&(Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`),sw(3,`Personen`),Jc()(),Mi(4,`mat-card-content`)(5,`div`,0)(6,`button`,1),nh(`click`,function(){return e.openCreateDialog()}),Mi(7,`mat-icon`),sw(8,`add`),Jc(),sw(9,` Neue Person `),Jc(),Mi(10,`button`,2),nh(`click`,function(){return e.refreshData()}),Mi(11,`mat-icon`),sw(12,`refresh`),Jc(),sw(13,` Aktualisieren `),Jc()(),pD(14,je,2,0,`div`,3),Ew(15,`async`),Mi(16,`div`,4)(17,`table`,5),Ew(18,`async`),tl(19,6),Up(20,Qe,2,0,`th`,7)(21,Ke,2,1,`td`,8),nl(),tl(22,9),Up(23,We,2,0,`th`,7)(24,Ue,2,1,`td`,8),nl(),tl(25,10),Up(26,Je,2,0,`th`,7)(27,Ze,2,1,`td`,8),nl(),tl(28,11),Up(29,Xe,2,0,`th`,7)(30,Ye,2,1,`td`,8),nl(),tl(31,12),Up(32,tn,2,0,`th`,7)(33,en,2,1,`td`,8),nl(),tl(34,13),Up(35,nn,2,0,`th`,7)(36,an,2,1,`td`,8),nl(),tl(37,14),Up(38,on,2,0,`th`,15)(39,dn,3,1,`td`,8),nl(),tl(40,16),Up(41,ln,2,0,`th`,15)(42,pn,7,2,`td`,8),nl(),Up(43,hn,1,0,`tr`,17)(44,mn,1,0,`tr`,18),Jc()()()()),t&2&&(cI(14),hD(ww(15,6,e.loading$)?14:-1),cI(3),fh(`hidden`,ww(18,8,e.loading$)),Zp(`dataSource`,e.dataSource),cI(26),Zp(`matHeaderRowDef`,e.displayedColumns),cI(),Zp(`matRowDefColumns`,e.displayedColumns))},dependencies:[ka,Zi,ji,Hi,Wi,Vi,zi,qi,Ui,Qi,Gi,$i,TD,FD$1,Om,QD,KD,HC,UC,zo,ra,iC,QE,eC,nC,JE,HE,fp,gt,W$1,pt,Se,dt,be,Cu],styles:[`.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.person-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.no-races[_ngcontent-%COMP%]{color:#0006}mat-chip-set[_ngcontent-%COMP%]{max-width:320px}`]})};export{xe as PersonListComponent};