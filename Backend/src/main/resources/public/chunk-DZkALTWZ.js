import{$ as Jp,A as Fu,Ar as qE,B as HD,Bn as eh,Br as rl,Cr as nl,Ct as Q,Dn as bg,Er as oh,Et as Re$1,G as ID,Ht as VD,Ir as qp,It as Ty,J as Iw,Jr as uh,Kn as fh,Kr as tl,L as Gp,Ln as dr,M as GE,Mn as bw,Mt as T,N as Ge,Nr as qj,On as bh,Qt as Xc,S as Ee$1,St as Pu,Tr as oe,Tt as RD,Ur as sh,Vn as el,Wn as fI,Xn as gi,Y as JD,Z as Jc,Zr as uu,_r as mD,c as A,ct as Mi,d as BD,ei as wg,er as id,gr as lw,it as Lg,j as G,lt as Mr,mr as lh,nn as Xp,or as jj,p as Bj,qn as gD,qr as tn$1,rr as jD,rt as LD,si as z,ui as zl,un as ZE,ur as kj,v as Cw,vn as _D,vr as mh,w as Ew,x as ED,xr as nE,yt as PD,zn as eE,zt as Uj}from"./chunk-Bh_Ot5vk.js";import{E as Xt,H as er,L as bo,N as ah,O as Yn,P as an$1,T as Wo,X as je,_ as Kt,c as Es,et as le,ft as vo,j as Zn,lt as sh$1,r as As,s as Do,z as di}from"./chunk-BfYxjD4z.js";import{Dt as tu,H as Xc$1,I as Ut,J as Yo,L as Vm,Lt as xm,Mt as vm,N as Te,O as Qc,P as Tr,Rt as xo,S as Lh,Tt as ta,U as Xm,Wt as zi,f as Gl,ft as jh,g as Im,gt as na,i as $r,j as Sm,kt as uo,p as Hi,q as Ym,t as $a,tt as bm,ut as ht,v as Jc$1,vt as om,wt as sn$1,y as Kc,zt as ym}from"./chunk-1I-lyJg8.js";import"./chunk-CVomrlLT.js";import{Cn as o,En as x,G as e,Ri as a,Sn as l,Tn as u,_n as U,bn as d,c as Yt,fn as Y,gn as S,hn as P,i as Pe$1,l as mt,mn as F,n as yt,o as It,r as Be$1,s as st,t as wt,vn as a$1,wn as p,xn as i,yn as c}from"./main-XPUDXR64.js";import{i as fn$1,n as Xt$1,r as bn$1,t as Va}from"./chunk-VtXAOSBm.js";import{a as nt,c as st$1,i as it,l as tt,n as ce,o as ot,r as de,t as b}from"./chunk-B-e68q55.js";import{a as ci,c as li,d as ri,f as si,i as ai,l as ni,o as ei,p as ti,r as Xe$1,s as ii,t as Jt,u as oi}from"./chunk-DqdycQSi.js";import{n as gt,r as pt,t as W}from"./chunk-BGuuWVyH.js";import{n as Xt$2,t as Mt}from"./chunk-Dwuhwv1I.js";import{t as e$1}from"./chunk-DXWx1atM.js";import{t as n}from"./chunk-BDVl3uLE.js";var Le=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Be=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Oe(i,n){i&1&&(Mi(0,`span`,3),PD(1,1),Jc())}function He(i,n){i&1&&(Mi(0,`span`,6),PD(1,2),Jc())}var ze=[`*`];var $e=new A(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Se=new A(`MatChipAvatar`);var we=new A(`MatChipTrailingIcon`);var xe=new A(`MatChipEdit`);var Ne=new A(`MatChipRemove`);var Me=new A(`MatChip`);var Ee=(()=>{class i{_elementRef=T(Mr);_parentChip=T(Me);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){T(le).load(vo),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(e){return new(e||i)};static ɵdir=ZE({type:i,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(e,a){e&2&&(Jp(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),mh(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,Uj],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:qj(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return i})();var Ve=(()=>{class i extends Ee{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(i)))(a||i)}})();static ɵdir=ZE({type:i,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(e,a){e&1&&sh(`click`,function(d){return a._handleClick(d)})(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(Jp(`tabindex`,a._getTabindex()),mh(`mdc-evolution-chip__action--presentational`,!1))},features:[qp]})}return i})();var _t=(()=>{class i{_changeDetectorRef=T(Bj);_elementRef=T(Mr);_tagName=T(kj);_ngZone=T(Re$1);_focusMonitor=T(Kt);_globalRippleOptions=T(er,{optional:!0});_document=T(dr);_onFocus=new Q;_onBlur=new Q;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=je();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=T(Yn).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new Ge;destroyed=new Ge;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=T(bo);_injector=T(Ee$1);constructor(){let t=T(le);t.load(vo),t.load(Xt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Lg(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let a=e._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(e){return new(e||i)};static ɵcmp=qE({type:i,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(e,a,l){if(e&1&&lh(l,Se,5)(l,xe,5)(l,we,5)(l,Ne,5)(l,Se,5)(l,we,5)(l,xe,5)(l,Ne,5),e&2){let d;jD(d=VD())&&(a.leadingIcon=d.first),jD(d=VD())&&(a.editIcon=d.first),jD(d=VD())&&(a.trailingIcon=d.first),jD(d=VD())&&(a.removeIcon=d.first),jD(d=VD())&&(a._allLeadingIcons=d),jD(d=VD())&&(a._allTrailingIcons=d),jD(d=VD())&&(a._allEditIcons=d),jD(d=VD())&&(a._allRemoveIcons=d)}},viewQuery:function(e,a){if(e&1&&uh(Ve,5),e&2){let l;jD(l=VD())&&(a.primaryAction=l.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(e,a){e&1&&sh(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(oh(`id`,a.id),Jp(`role`,a.role)(`aria-label`,a.ariaLabel),JD(`mat-`+(a.color||`primary`)),mh(`mdc-evolution-chip`,!a._isBasicChip)(`mdc-evolution-chip--disabled`,a.disabled)(`mdc-evolution-chip--with-trailing-action`,a._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,a.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,a.leadingIcon)(`mdc-evolution-chip--with-avatar`,a.leadingIcon)(`mat-mdc-chip-with-avatar`,a.leadingIcon)(`mat-mdc-chip-highlighted`,a.highlighted)(`mat-mdc-chip-disabled`,a.disabled)(`mat-mdc-basic-chip`,a._isBasicChip)(`mat-mdc-standard-chip`,!a._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,a._hasTrailingIcon())(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,Uj],highlighted:[2,`highlighted`,`highlighted`,Uj],disableRipple:[2,`disableRipple`,`disableRipple`,Uj],disabled:[2,`disabled`,`disabled`,Uj]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[Iw([{provide:Me,useExisting:i}])],ngContentSelectors:Be,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(e,a){e&1&&(LD(Le),eh(0,`span`,0),Mi(1,`span`,1)(2,`span`,2),gD(3,Oe,2,0,`span`,3),Mi(4,`span`,4),PD(5),eh(6,`span`,5),Jc()()(),gD(7,He,2,0,`span`,6)),e&2&&(fI(3),mD(a.leadingIcon?3:-1),fI(4),mD(a._hasTrailingIcon()?7:-1))},dependencies:[Ee],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return i})();var De=(()=>{class i{_elementRef=T(Mr);_changeDetectorRef=T(Bj);_dir=T(As,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Q;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new gi;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(zl(null),wg(()=>Lg(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains(`mat-mdc-chip`))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(zl(this._chips)).subscribe(t=>{let e=[];t.forEach(a=>a._getActions().forEach(l=>e.push(l))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new Zn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(bg(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(bg(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(zl(null),bg(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(bg(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),l=t.chip._hasFocus(),d=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),Te=l||d;this._isValidIndex(a)&&Te&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=qE({type:i,selectors:[[`mat-chip-set`]],contentQueries:function(e,a,l){if(e&1&&lh(l,_t,5),e&2){let d;jD(d=VD())&&(a._chips=d)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(e,a){e&1&&sh(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&Jp(`role`,a.role)},inputs:{disabled:[2,`disabled`,`disabled`,Uj],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:qj(t)]},ngContentSelectors:ze,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(e,a){e&1&&(LD(),Xc(0,`div`,0),PD(1),el())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return i})();var Pe=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=GE({type:i});static ɵinj=uu({providers:[Yo,{provide:$e,useValue:{separatorKeyCodes:[13]}}],imports:[Do,an$1]})}return i})();var vt=om(`person`);var qe=Gl(vt,i=>i.persons);var Ae=Gl(vt,i=>i.loading);Gl(vt,i=>i.error);var Re=Gl(qe,a,(i,n)=>{let t=new Map;for(let e of n){if(!e.person||!e.race)continue;let a=t.get(e.person.id)??[];a.push(e.race),t.set(e.person.id,a)}return i.map(e=>z(G({},e),{activeRaces:t.get(e.id)??[]}))});var We=(i,n)=>n.value;function Ue(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Vorname ist erforderlich`),Jc())}function Je(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Vorname darf nicht nur aus Leerzeichen bestehen`),Jc())}function Ze(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Nachname ist erforderlich`),Jc())}function Xe(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Nachname darf nicht nur aus Leerzeichen bestehen`),Jc())}function Ye(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Geburtsdatum ist erforderlich`),Jc())}function tn(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Geburtsdatum muss zwischen 1900 und heute liegen`),Jc())}function en(i,n){if(i&1&&(Mi(0,`mat-option`,9),lw(1),Jc()),i&2){let t=n.$implicit;Xp(`value`,t.value),fI(),bh(t.label)}}function nn(i,n){i&1&&(Mi(0,`mat-error`),lw(1,`Geschlecht ist erforderlich`),Jc())}var V=class i{fb=T(Jc$1);minBirthDate=new Date(1900,0,1);maxBirthDate=new Date;dialogRef=T(b);data=T(ce);form;genderOptions=[{value:`FEMALE`,label:e$1.FEMALE},{value:`MALE`,label:e$1.MALE}];constructor(){let n$1=this.data?.birthDate||``;if(n$1&&typeof n$1==`string`){let t=n$1.split(`-`);t.length===3&&(n$1=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||``,[ht.required,n()]],lastName:[this.data?.lastName||``,[ht.required,n()]],birthDate:[n$1,ht.required],gender:[this.data?.gender||``,ht.required],externalId:[this.data?.externalId||``]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let n=this.form.value,t={firstName:n.firstName,lastName:n.lastName,birthDate:this.formatDate(n.birthDate),gender:n.gender,externalId:n.externalId||void 0};this.dialogRef.close(t)}}formatDate(n){if(typeof n==`string`)return n;let t=new Date(n);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}static ɵfac=function(t){return new(t||i)};static ɵcmp=qE({type:i,selectors:[[`app-person-dialog`]],decls:45,vars:14,consts:[[`picker`,``],[`mat-dialog-title`,``],[1,`person-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`firstName`,`required`,``],[`matInput`,``,`formControlName`,`lastName`,`required`,``],[`matInput`,``,`formControlName`,`birthDate`,`placeholder`,`TT.MM.JJJJ`,`required`,``,3,`matDatepicker`,`min`,`max`],[`matSuffix`,``,3,`for`],[`formControlName`,`gender`,`required`,``],[3,`value`],[`matInput`,``,`formControlName`,`externalId`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,e){if(t&1&&(Mi(0,`h2`,1),lw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,2)(4,`mat-form-field`,3)(5,`mat-label`),lw(6,`Vorname`),Jc(),eh(7,`input`,4),eE(),gD(8,Ue,2,0,`mat-error`),gD(9,Je,2,0,`mat-error`),Jc(),Mi(10,`mat-form-field`,3)(11,`mat-label`),lw(12,`Nachname`),Jc(),eh(13,`input`,5),eE(),gD(14,Ze,2,0,`mat-error`),gD(15,Xe,2,0,`mat-error`),Jc(),Mi(16,`mat-form-field`,3)(17,`mat-label`),lw(18,`Geburtsdatum`),Jc(),eh(19,`input`,6),eE(),eh(20,`mat-datepicker-toggle`,7)(21,`mat-datepicker`,null,0),Mi(23,`mat-hint`),lw(24,`Format: TT.MM.JJJJ (z.B. 24.3.2022)`),Jc(),gD(25,Ye,2,0,`mat-error`),gD(26,tn,2,0,`mat-error`),Jc(),Mi(27,`mat-form-field`,3)(28,`mat-label`),lw(29,`Geschlecht`),Jc(),Mi(30,`mat-select`,8),ID(31,en,2,2,`mat-option`,9,We),Jc(),eE(),gD(33,nn,2,0,`mat-error`),Jc(),Mi(34,`mat-form-field`,3)(35,`mat-label`),lw(36,`Externe ID (optional)`),Jc(),eh(37,`input`,10),eE(),Mi(38,`mat-hint`),lw(39,`Vereins-/Verbandsnummer, falls vorhanden`),Jc()()()(),Mi(40,`mat-dialog-actions`,11)(41,`button`,12),sh(`click`,function(){return e.onCancel()}),lw(42,`Abbrechen`),Jc(),Mi(43,`button`,13),sh(`click`,function(){return e.onSave()}),lw(44,` Speichern `),Jc()()),t&2){let a=BD(22);fI(),rl(` `,e.data?`Person bearbeiten`:`Neue Person`,` `),fI(2),Xp(`formGroup`,e.form),fI(4),nE(),fI(),mD(e.form.get(`firstName`)?.hasError(`required`)&&e.form.get(`firstName`)?.touched?8:-1),fI(),mD(e.form.get(`firstName`)?.hasError(`blank`)?9:-1),fI(4),nE(),fI(),mD(e.form.get(`lastName`)?.hasError(`required`)&&e.form.get(`lastName`)?.touched?14:-1),fI(),mD(e.form.get(`lastName`)?.hasError(`blank`)?15:-1),fI(4),Xp(`matDatepicker`,a)(`min`,e.minBirthDate)(`max`,e.maxBirthDate),nE(),fI(),Xp(`for`,a),fI(5),mD(e.form.get(`birthDate`)?.hasError(`required`)&&e.form.get(`birthDate`)?.touched?25:-1),fI(),mD(e.form.get(`birthDate`)?.hasError(`matDatepickerMin`)||e.form.get(`birthDate`)?.hasError(`matDatepickerMax`)?26:-1),fI(4),nE(),fI(),ED(e.genderOptions),fI(2),mD(e.form.get(`gender`)?.hasError(`required`)&&e.form.get(`gender`)?.touched?33:-1),fI(4),nE(),fI(6),Xp(`disabled`,!e.form.valid)}},dependencies:[di,tu,Qc,$r,Xc$1,Kc,uo,sn$1,$a,ot,tt,nt,it,xo,Tr,zi,Hi,ta,na,Be$1,Pe$1,sh$1,ah,bn$1,fn$1,Xt$1,Va,Y,jh,Lh,Ut],styles:[`.person-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var an=()=>[10,25,50,100];var on=(i,n)=>n.id;function cn(i,n){i&1&&(Mi(0,`div`,4),eh(1,`mat-spinner`),Jc())}function rn(i,n){i&1&&(Mi(0,`th`,21),lw(1,`ID`),Jc())}function sn(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit;fI(),bh(t.id)}}function dn(i,n){i&1&&(Mi(0,`th`,21),lw(1,`Nachname`),Jc())}function ln(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit;fI(),bh(t.lastName)}}function pn(i,n){i&1&&(Mi(0,`th`,21),lw(1,`Vorname`),Jc())}function hn(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit;fI(),bh(t.firstName)}}function mn(i,n){i&1&&(Mi(0,`th`,21),lw(1,`Geburtsdatum`),Jc())}function un(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit,e=RD();fI(),bh(e.formatRaceDate(t.birthDate))}}function _n(i,n){i&1&&(Mi(0,`th`,21),lw(1,`Geschlecht`),Jc())}function vn(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit,e=RD();fI(),bh(e.getGenderLabel(t.gender))}}function fn(i,n){i&1&&(Mi(0,`th`,21),lw(1,`Externe ID`),Jc())}function gn(i,n){if(i&1&&(Mi(0,`td`,22),lw(1),Jc()),i&2){let t=n.$implicit;fI(),bh(t.externalId||`-`)}}function yn(i,n){i&1&&(Mi(0,`th`,23),lw(1,`Aktiv bei Rennen`),Jc())}function bn(i,n){if(i&1&&(Mi(0,`mat-chip`),lw(1),Jc()),i&2){let t=n.$implicit;fI(),bh(t.name)}}function Cn(i,n){if(i&1&&(Mi(0,`mat-chip-set`),ID(1,bn,2,1,`mat-chip`,null,on),Jc()),i&2){let t=RD().$implicit;fI(),ED(t.activeRaces)}}function Sn(i,n){i&1&&(Mi(0,`span`,24),lw(1,`-`),Jc())}function wn(i,n){if(i&1&&(Mi(0,`td`,22),gD(1,Cn,3,0,`mat-chip-set`)(2,Sn,2,0,`span`,24),Jc()),i&2){let t=n.$implicit;fI(),mD(t.activeRaces.length?1:2)}}function xn(i,n){i&1&&(Mi(0,`th`,23),lw(1,`Aktionen`),Jc())}function Nn(i,n){if(i&1){let t=_D();Mi(0,`td`,22)(1,`button`,25),sh(`click`,function(){let a=Pu(t).$implicit;return Fu(RD().openEditDialog(a))}),Mi(2,`mat-icon`),lw(3,`edit`),Jc()(),Mi(4,`button`,26),sh(`click`,function(){let a=Pu(t).$implicit;return Fu(RD().deletePerson(a))}),Mi(5,`mat-icon`),lw(6,`delete`),Jc()()()}if(i&2){let t=n.$implicit;fI(4),Xp(`disabled`,t.activeRaces.length>0)(`matTooltip`,t.activeRaces.length>0?`Kann nicht gelöscht werden, solange die Person einem Rennen zugeordnet ist`:`Löschen`)}}function kn(i,n){i&1&&eh(0,`tr`,27)}function In(i,n){i&1&&eh(0,`tr`,28)}var Fe=class i$1{store=T(Te);dialog=T(de);snackBar=T(Mt);actions$=T(Ym);destroy$=new Q;persons$;loading$;unusedPersonCount$;displayedColumns=[`id`,`lastName`,`firstName`,`birthDate`,`gender`,`externalId`,`activeRaces`,`actions`];dataSource=new Xe$1([]);trackById=(n,t)=>t.id;sortInitialized=!1;paginatorInitialized=!1;sort=jj.required(W);paginator=jj.required(st);constructor(){this.persons$=this.store.select(Re),this.loading$=this.store.select(Ae),this.unusedPersonCount$=this.persons$.pipe(oe(n=>n.filter(t=>t.activeRaces.length===0).length)),this.actions$.pipe(Xm(c),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(Xm(u),bg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Erstellen der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(Xm(a$1),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(Xm(d),bg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(Xm(i),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(Xm(x),bg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(Xm(S),bg(this.destroy$)).subscribe(({deletedCount:n})=>{this.snackBar.open(`${n} ungenutzte Person(en) gel\xF6scht`,`OK`,{duration:3e3}),this.store.dispatch(o())}),this.actions$.pipe(Xm(U),bg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim L\xF6schen der ungenutzten Personen: ${n}`,`OK`,{duration:5e3})}),id(()=>{let n=this.sort();n&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=n,this.sortInitialized=!0},100)}),id(()=>{let n=this.paginator();n&&!this.paginatorInitialized&&setTimeout(()=>{this.dataSource.paginator=n,this.paginatorInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(o()),this.store.dispatch(e()),this.persons$.pipe(bg(this.destroy$)).subscribe(n=>{this.dataSource.data=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(V,{width:`500px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(P({person:t}))})}openEditDialog(n){this.dialog.open(V,{width:`500px`,data:n}).afterClosed().pipe(bg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(p({id:n.id,person:e}))})}deletePerson(n){n.activeRaces.length>0||this.dialog.open(st$1,{width:`450px`,data:{message:`M\xF6chten Sie die Person "${n.lastName} ${n.firstName}" wirklich l\xF6schen?`,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(l({id:n.id}))})}deleteUnusedPersons(){this.unusedPersonCount$.pipe(tn$1(1)).subscribe(n=>{n!==0&&this.dialog.open(st$1,{width:`450px`,data:{message:`M\xF6chten Sie wirklich alle ${n} Person(en) l\xF6schen, die keinem Rennen / Teilnehmer zugewiesen sind?`,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(F())})})}refreshData(){this.store.dispatch(o()),this.store.dispatch(e()),this.snackBar.open(`Daten werden aktualisiert...`,`OK`,{duration:2e3})}getGenderLabel(n){return n?e$1[n]||n:`—`}formatRaceDate(n){let t=n.split(`-`);if(t.length===3){let e=t[0],a=t[1];return`${t[2]}.${a}.${e}`}return n}static ɵfac=function(t){return new(t||i$1)};static ɵcmp=qE({type:i$1,selectors:[[`app-person-list`]],viewQuery:function(t,e){t&1&&fh(e.sort,W,5)(e.paginator,st,5),t&2&&HD(2)},decls:52,vars:19,consts:[[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Daten aktualisieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Löscht alle Personen, die keinem Rennen / Teilnehmer zugewiesen sind`,3,`click`,`disabled`],[1,`loading-container`],[1,`table-container`],[`mat-table`,``,`matSort`,``,1,`person-table`,3,`dataSource`,`trackBy`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`lastName`],[`matColumnDef`,`firstName`],[`matColumnDef`,`birthDate`],[`matColumnDef`,`gender`],[`matColumnDef`,`externalId`],[`matColumnDef`,`activeRaces`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSizeOptions`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-header-cell`,``],[1,`no-races`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,3,`click`,`disabled`,`matTooltip`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,e){t&1&&(Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`),lw(3,`Personen`),Jc()(),Mi(4,`mat-card-content`)(5,`div`,0)(6,`button`,1),sh(`click`,function(){return e.openCreateDialog()}),Mi(7,`mat-icon`),lw(8,`add`),Jc(),lw(9,` Neue Person `),Jc(),Mi(10,`button`,2),sh(`click`,function(){return e.refreshData()}),Mi(11,`mat-icon`),lw(12,`refresh`),Jc(),lw(13,` Aktualisieren `),Jc(),Mi(14,`button`,3),bw(15,`async`),sh(`click`,function(){return e.deleteUnusedPersons()}),Mi(16,`mat-icon`),lw(17,`delete_sweep`),Jc(),lw(18),bw(19,`async`),Jc()(),gD(20,cn,2,0,`div`,4),bw(21,`async`),Mi(22,`div`,5)(23,`table`,6),bw(24,`async`),tl(25,7),Gp(26,rn,2,0,`th`,8)(27,sn,2,1,`td`,9),nl(),tl(28,10),Gp(29,dn,2,0,`th`,8)(30,ln,2,1,`td`,9),nl(),tl(31,11),Gp(32,pn,2,0,`th`,8)(33,hn,2,1,`td`,9),nl(),tl(34,12),Gp(35,mn,2,0,`th`,8)(36,un,2,1,`td`,9),nl(),tl(37,13),Gp(38,_n,2,0,`th`,8)(39,vn,2,1,`td`,9),nl(),tl(40,14),Gp(41,fn,2,0,`th`,8)(42,gn,2,1,`td`,9),nl(),tl(43,15),Gp(44,yn,2,0,`th`,16)(45,wn,3,1,`td`,9),nl(),tl(46,17),Gp(47,xn,2,0,`th`,16)(48,Nn,7,2,`td`,9),nl(),Gp(49,kn,1,0,`tr`,18)(50,In,1,0,`tr`,19),Jc()(),eh(51,`mat-paginator`,20),Jc()()),t&2&&(fI(14),Xp(`disabled`,!Cw(15,10,e.unusedPersonCount$)),fI(4),rl(` Ungenutzte Personen löschen (`,Cw(19,12,e.unusedPersonCount$),`) `),fI(2),mD(Cw(21,14,e.loading$)?20:-1),fI(3),mh(`hidden`,Cw(24,16,e.loading$)),Xp(`dataSource`,e.dataSource)(`trackBy`,e.trackById),fI(26),Xp(`matHeaderRowDef`,e.displayedColumns),fI(),Xp(`matRowDefColumns`,e.displayedColumns),fI(),Xp(`pageSizeOptions`,Ew(18,an)))},dependencies:[di,ci,Jt,ti,ri,ii,ei,si,oi,ni,ai,li,sh$1,ah,Es,yt,wt,Im,Vm,ot,Xt$2,xm,vm,bm,Sm,ym,Yt,mt,gt,W,pt,It,st,Pe,_t,De,Wo],styles:[`.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.person-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.no-races[_ngcontent-%COMP%]{color:#0006}mat-chip-set[_ngcontent-%COMP%]{max-width:320px}`]})};export{Fe as PersonListComponent};