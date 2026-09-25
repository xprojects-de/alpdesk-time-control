import{$r as wg,$t as Xc,A as G$1,Ar as qE,Bn as eE,Br as rl,C as Ew,Cr as nl,Er as oh,Et as Re$1,Gn as fI,Gt as Vj,Hn as el,I as Gp,Ir as qp,It as Ty,J as JD,Jn as gD,Kr as tl,M as Ge$1,Nn as bw,Nr as qj,On as bg,Q as Jp,R as HD,Rn as dr,St as Q,Tr as oe,Tt as RD,Ur as sh,Ut as VD,Vn as eh,W as ID,X as Jc,Xr as uu,Yt as Wj,Zn as gi,_ as Cw,_r as mD,b as ED,ct as Mr,fn as ZE,g as Ct$1,gr as lw,ir as jD,it as Lj,j as GE,jt as T,k as Fu,kn as bh,l as BD,li as zl,mr as lh,n as $j,nt as LD,o as A,oi as z,q as Iw,qn as fh,qr as uh,rn as Xp,sn as Yo,st as Mi,tr as id,vr as mh,vt as PD,x as Ee,xr as nE,xt as Pu,yn as _D,yt as Pg}from"./chunk-CIV96p5l.js";import{E as Xt,H as er,L as bo,N as ah,O as Yn,P as an$1,T as Wo,X as je,_ as Kt,c as Es,et as le,ft as vo,j as Zn,lt as sh$1,r as As,s as Do,z as di}from"./chunk-CyGegQQm.js";import{$ as Wp,At as on$1,Ct as lm,Et as ma,Gt as wu,H as Si,Ht as vu,Jt as ze$1,K as Su,Lt as sm,Mt as qm,Nt as rc,Pt as ri,S as Hp,X as Vo,_ as Fm,at as ao,b as Gm,bt as kp,et as Xm,ft as ha,ht as is,j as Kr,jt as pa,l as Ct$2,nt as Zm,ot as ap,p as Eo,pt as ii,qt as yu,rt as al,t as $m,u as Cu,wt as lp,y as Gc}from"./chunk-D-PgdQ4d.js";import"./chunk-CVvOq_Vr.js";import{An as p,Cn as U,Dn as i,En as d,Mn as x,On as l,Sn as S,Tn as c,bn as F,c as Yt,ha as a,i as Pe$1,jn as u,kn as o,l as mt,n as yt,o as It,q as e,r as Be,s as st,t as wt,vn as Y,wn as a$1,xn as P}from"./main-TS73WMFN.js";import{i as fn$1,n as Xt$1,r as bn$1,t as Va}from"./chunk-BKabmHxG.js";import{t as n}from"./chunk-BDVl3uLE.js";import{t as e$1}from"./chunk-DXWx1atM.js";import{a as ci,c as li,d as ri$1,f as si,i as ai,l as ni,o as ei,p as ti,r as Xe$1,s as ii$1,t as Jt,u as oi}from"./chunk-wHsEPTG4.js";import{n as gt,r as pt,t as W}from"./chunk-DDfNYO_M.js";import{a as nt,c as st$1,i as it,l as tt,n as ce,o as ot,r as de,t as b}from"./chunk-Vzt23r_N.js";var Oe=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var He=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function ze(n,e){n&1&&(Mi(0,`span`,3),PD(1,1),Jc())}function Ve(n,e){n&1&&(Mi(0,`span`,6),PD(1,2),Jc())}var $e=[`*`];var Ge=new A(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var xe=new A(`MatChipAvatar`);var Ne=new A(`MatChipTrailingIcon`);var ke=new A(`MatChipEdit`);var Ie=new A(`MatChipRemove`);var De=new A(`MatChip`);var Pe=(()=>{class n{_elementRef=T(Mr);_parentChip=T(De);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){T(le).load(vo),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=ZE({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,a){i&2&&(Jp(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),mh(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,qj],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:Wj(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var qe=(()=>{class n extends Pe{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=ZE({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,a){i&1&&sh(`click`,function(l){return a._handleClick(l)})(`keydown`,function(l){return a._handleKeydown(l)}),i&2&&(Jp(`tabindex`,a._getTabindex()),mh(`mdc-evolution-chip__action--presentational`,!1))},features:[qp]})}return n})();var bt=(()=>{class n{_changeDetectorRef=T($j);_elementRef=T(Mr);_tagName=T(Lj);_ngZone=T(Re$1);_focusMonitor=T(Kt);_globalRippleOptions=T(er,{optional:!0});_document=T(dr);_onFocus=new Q;_onBlur=new Q;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=je();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=T(Yn).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new Ge$1;destroyed=new Ge$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=T(bo);_injector=T(Ee);constructor(){let t=T(le);t.load(vo),t.load(Xt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Pg(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let a=i._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=qE({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,a,d){if(i&1&&lh(d,xe,5)(d,ke,5)(d,Ne,5)(d,Ie,5)(d,xe,5)(d,Ne,5)(d,ke,5)(d,Ie,5),i&2){let l;jD(l=VD())&&(a.leadingIcon=l.first),jD(l=VD())&&(a.editIcon=l.first),jD(l=VD())&&(a.trailingIcon=l.first),jD(l=VD())&&(a.removeIcon=l.first),jD(l=VD())&&(a._allLeadingIcons=l),jD(l=VD())&&(a._allTrailingIcons=l),jD(l=VD())&&(a._allEditIcons=l),jD(l=VD())&&(a._allRemoveIcons=l)}},viewQuery:function(i,a){if(i&1&&uh(qe,5),i&2){let d;jD(d=VD())&&(a.primaryAction=d.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,a){i&1&&sh(`keydown`,function(l){return a._handleKeydown(l)}),i&2&&(oh(`id`,a.id),Jp(`role`,a.role)(`aria-label`,a.ariaLabel),JD(`mat-`+(a.color||`primary`)),mh(`mdc-evolution-chip`,!a._isBasicChip)(`mdc-evolution-chip--disabled`,a.disabled)(`mdc-evolution-chip--with-trailing-action`,a._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,a.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,a.leadingIcon)(`mdc-evolution-chip--with-avatar`,a.leadingIcon)(`mat-mdc-chip-with-avatar`,a.leadingIcon)(`mat-mdc-chip-highlighted`,a.highlighted)(`mat-mdc-chip-disabled`,a.disabled)(`mat-mdc-basic-chip`,a._isBasicChip)(`mat-mdc-standard-chip`,!a._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,a._hasTrailingIcon())(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,qj],highlighted:[2,`highlighted`,`highlighted`,qj],disableRipple:[2,`disableRipple`,`disableRipple`,qj],disabled:[2,`disabled`,`disabled`,qj]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[Iw([{provide:De,useExisting:n}])],ngContentSelectors:He,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,a){i&1&&(LD(Oe),eh(0,`span`,0),Mi(1,`span`,1)(2,`span`,2),gD(3,ze,2,0,`span`,3),Mi(4,`span`,4),PD(5),eh(6,`span`,5),Jc()()(),gD(7,Ve,2,0,`span`,6)),i&2&&(fI(3),mD(a.leadingIcon?3:-1),fI(4),mD(a._hasTrailingIcon()?7:-1))},dependencies:[Pe],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var Ae=(()=>{class n{_elementRef=T(Mr);_changeDetectorRef=T($j);_dir=T(As,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Q;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new gi;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(zl(null),wg(()=>Pg(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(zl(this._chips)).subscribe(t=>{let i=[];t.forEach(a=>a._getActions().forEach(d=>i.push(d))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Zn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(bg(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(bg(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(zl(null),bg(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(bg(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),d=t.chip._hasFocus(),l=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),Be=d||l;this._isValidIndex(a)&&Be&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=qE({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,a,d){if(i&1&&lh(d,bt,5),i&2){let l;jD(l=VD())&&(a._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,a){i&1&&sh(`keydown`,function(l){return a._handleKeydown(l)}),i&2&&Jp(`role`,a.role)},inputs:{disabled:[2,`disabled`,`disabled`,qj],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:Wj(t)]},ngContentSelectors:$e,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,a){i&1&&(LD(),Xc(0,`div`,0),PD(1),el())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var Re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=GE({type:n});static ɵinj=uu({providers:[is,{provide:Ge,useValue:{separatorKeyCodes:[13]}}],imports:[Do,an$1]})}return n})();var Ct=Fm(`person`);var Ke=rc(Ct,n=>n.persons);var Fe=rc(Ct,n=>n.loading);rc(Ct,n=>n.error);var Te=rc(Ke,a,(n,e)=>{let t=new Map;for(let i of e){if(!i.person||!i.race)continue;let a=t.get(i.person.id)??[];a.push(i.race),t.set(i.person.id,a)}return n.map(i=>z(G$1({},i),{activeRaces:t.get(i.id)??[]}))});var Xe=(n,e)=>e.value;function Ye(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Vorname ist erforderlich`),Jc())}function tn(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Vorname darf nicht nur aus Leerzeichen bestehen`),Jc())}function en(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Nachname ist erforderlich`),Jc())}function nn(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Nachname darf nicht nur aus Leerzeichen bestehen`),Jc())}function an(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Geburtsdatum ist erforderlich`),Jc())}function on(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Geburtsdatum muss zwischen 1900 und heute liegen`),Jc())}function rn(n,e){if(n&1&&(Mi(0,`mat-option`,9),lw(1),Jc()),n&2){let t=e.$implicit;Xp(`value`,t.value),fI(),bh(t.label)}}function cn(n,e){n&1&&(Mi(0,`mat-error`),lw(1,`Geschlecht ist erforderlich`),Jc())}var G=class n$1{fb=T(Su);minBirthDate=new Date(1900,0,1);maxBirthDate=new Date;dialogRef=T(b);data=T(ce);form;genderOptions=[{value:`FEMALE`,label:e$1.FEMALE},{value:`MALE`,label:e$1.MALE}];constructor(){let e=this.data?.birthDate||``;if(e&&typeof e==`string`){let t=e.split(`-`);t.length===3&&(e=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||``,[Ct$2.required,n()]],lastName:[this.data?.lastName||``,[Ct$2.required,n()]],birthDate:[e,Ct$2.required],gender:[this.data?.gender||``,Ct$2.required],externalId:[this.data?.externalId||``]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let e=this.form.value,t={firstName:e.firstName,lastName:e.lastName,birthDate:this.formatDate(e.birthDate),gender:e.gender,externalId:e.externalId||void 0};this.dialogRef.close(t)}}formatDate(e){if(typeof e==`string`)return e;let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}static ɵfac=function(t){return new(t||n$1)};static ɵcmp=qE({type:n$1,selectors:[[`app-person-dialog`]],decls:45,vars:14,consts:[[`picker`,``],[`mat-dialog-title`,``],[1,`person-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`firstName`,`required`,``],[`matInput`,``,`formControlName`,`lastName`,`required`,``],[`matInput`,``,`formControlName`,`birthDate`,`placeholder`,`TT.MM.JJJJ`,`required`,``,3,`matDatepicker`,`min`,`max`],[`matSuffix`,``,3,`for`],[`formControlName`,`gender`,`required`,``],[3,`value`],[`matInput`,``,`formControlName`,`externalId`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(Mi(0,`h2`,1),lw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,2)(4,`mat-form-field`,3)(5,`mat-label`),lw(6,`Vorname`),Jc(),eh(7,`input`,4),eE(),gD(8,Ye,2,0,`mat-error`),gD(9,tn,2,0,`mat-error`),Jc(),Mi(10,`mat-form-field`,3)(11,`mat-label`),lw(12,`Nachname`),Jc(),eh(13,`input`,5),eE(),gD(14,en,2,0,`mat-error`),gD(15,nn,2,0,`mat-error`),Jc(),Mi(16,`mat-form-field`,3)(17,`mat-label`),lw(18,`Geburtsdatum`),Jc(),eh(19,`input`,6),eE(),eh(20,`mat-datepicker-toggle`,7)(21,`mat-datepicker`,null,0),Mi(23,`mat-hint`),lw(24,`Format: TT.MM.JJJJ (z.B. 24.3.2022)`),Jc(),gD(25,an,2,0,`mat-error`),gD(26,on,2,0,`mat-error`),Jc(),Mi(27,`mat-form-field`,3)(28,`mat-label`),lw(29,`Geschlecht`),Jc(),Mi(30,`mat-select`,8),ID(31,rn,2,2,`mat-option`,9,Xe),Jc(),eE(),gD(33,cn,2,0,`mat-error`),Jc(),Mi(34,`mat-form-field`,3)(35,`mat-label`),lw(36,`Externe ID (optional)`),Jc(),eh(37,`input`,10),eE(),Mi(38,`mat-hint`),lw(39,`Vereins-/Verbandsnummer, falls vorhanden`),Jc()()()(),Mi(40,`mat-dialog-actions`,11)(41,`button`,12),sh(`click`,function(){return i.onCancel()}),lw(42,`Abbrechen`),Jc(),Mi(43,`button`,13),sh(`click`,function(){return i.onSave()}),lw(44,`Speichern`),Jc()()),t&2){let a=BD(22);fI(),rl(` `,i.data?`Person bearbeiten`:`Neue Person`,` `),fI(2),Xp(`formGroup`,i.form),fI(4),nE(),fI(),mD(i.form.get(`firstName`)?.hasError(`required`)&&i.form.get(`firstName`)?.touched?8:-1),fI(),mD(i.form.get(`firstName`)?.hasError(`blank`)?9:-1),fI(4),nE(),fI(),mD(i.form.get(`lastName`)?.hasError(`required`)&&i.form.get(`lastName`)?.touched?14:-1),fI(),mD(i.form.get(`lastName`)?.hasError(`blank`)?15:-1),fI(4),Xp(`matDatepicker`,a)(`min`,i.minBirthDate)(`max`,i.maxBirthDate),nE(),fI(),Xp(`for`,a),fI(5),mD(i.form.get(`birthDate`)?.hasError(`required`)&&i.form.get(`birthDate`)?.touched?25:-1),fI(),mD(i.form.get(`birthDate`)?.hasError(`matDatepickerMin`)||i.form.get(`birthDate`)?.hasError(`matDatepickerMax`)?26:-1),fI(4),nE(),fI(),ED(i.genderOptions),fI(2),mD(i.form.get(`gender`)?.hasError(`required`)&&i.form.get(`gender`)?.touched?33:-1),fI(4),nE(),fI(6),Xp(`disabled`,!i.form.valid)}},dependencies:[di,wu,Cu,ao,vu,yu,Eo,Si,al,ot,tt,nt,it,Vo,Kr,ii,ri,ha,pa,Be,Pe$1,sh$1,ah,bn$1,fn$1,Xt$1,Va,Y,lm,sm,on$1],styles:[`.person-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var sn=()=>[10,25,50,100];function dn(n,e){if(n&1){let t=_D();Mi(0,`button`,25),sh(`click`,function(){Pu(t);return Fu(RD().clearSearch())}),Mi(1,`mat-icon`),lw(2,`close`),Jc()()}}function ln(n,e){n&1&&(Mi(0,`div`,9),eh(1,`mat-spinner`,26),Jc())}function pn(n,e){n&1&&(Mi(0,`th`,27),lw(1,`Nachname`),Jc())}function hn(n,e){if(n&1&&(Mi(0,`td`,28),lw(1),Jc()),n&2){let t=e.$implicit;fI(),bh(t.lastName)}}function mn(n,e){n&1&&(Mi(0,`th`,27),lw(1,`Vorname`),Jc())}function un(n,e){if(n&1&&(Mi(0,`td`,28),lw(1),Jc()),n&2){let t=e.$implicit;fI(),bh(t.firstName)}}function _n(n,e){n&1&&(Mi(0,`th`,27),lw(1,`Geburtsdatum`),Jc())}function fn(n,e){if(n&1&&(Mi(0,`td`,28),lw(1),Jc()),n&2){let t=e.$implicit,i=RD();fI(),bh(i.formatRaceDate(t.birthDate))}}function vn(n,e){n&1&&(Mi(0,`th`,27),lw(1,`Geschlecht`),Jc())}function gn(n,e){if(n&1&&(Mi(0,`td`,28),lw(1),Jc()),n&2){let t=e.$implicit,i=RD();fI(),bh(i.getGenderLabel(t.gender))}}function yn(n,e){n&1&&(Mi(0,`th`,27),lw(1,`Externe ID`),Jc())}function bn(n,e){if(n&1&&(Mi(0,`td`,28),lw(1),Jc()),n&2){let t=e.$implicit;fI(),bh(t.externalId||`-`)}}function Cn(n,e){n&1&&(Mi(0,`th`,29),lw(1,`Aktiv bei Rennen`),Jc())}function Sn(n,e){if(n&1&&(Mi(0,`mat-chip-set`)(1,`mat-chip`,31),lw(2),Jc()()),n&2){let t=RD().$implicit,i=RD();fI(),Xp(`matTooltip`,i.activeRacesTooltip(t.activeRaces)),fI(),rl(` `,t.activeRaces.length,` Rennen `)}}function wn(n,e){n&1&&(Mi(0,`span`,30),lw(1,`-`),Jc())}function xn(n,e){if(n&1&&(Mi(0,`td`,28),gD(1,Sn,3,2,`mat-chip-set`)(2,wn,2,0,`span`,30),Jc()),n&2){let t=e.$implicit;fI(),mD(t.activeRaces.length?1:2)}}function Nn(n,e){n&1&&(Mi(0,`th`,29),lw(1,`Aktionen`),Jc())}function kn(n,e){if(n&1){let t=_D();Mi(0,`td`,28)(1,`button`,32),sh(`click`,function(){let a=Pu(t).$implicit;return Fu(RD().openEditDialog(a))}),Mi(2,`mat-icon`),lw(3,`edit`),Jc()(),Mi(4,`button`,33),sh(`click`,function(){let a=Pu(t).$implicit;return Fu(RD().deletePerson(a))}),Mi(5,`mat-icon`),lw(6,`delete`),Jc()()()}if(n&2){let t=e.$implicit;fI(4),Xp(`disabled`,t.activeRaces.length>0)(`matTooltip`,t.activeRaces.length>0?`Kann nicht gelöscht werden, solange die Person einem Rennen zugeordnet ist`:`Löschen`)}}function In(n,e){n&1&&eh(0,`tr`,34)}function Mn(n,e){n&1&&eh(0,`tr`,35)}var Le=class n{store=T(ze$1);dialog=T(de);snackBar=T(Gc);actions$=T(Hp);destroy$=new Q;persons$;loading$;unusedPersonCount$;displayedColumns=[`lastName`,`firstName`,`birthDate`,`gender`,`externalId`,`activeRaces`,`actions`];dataSource=new Xe$1([]);trackById=(e,t)=>t.id;searchTerm=Yo(``);sort=Vj.required(W);paginator=Vj.required(st);constructor(){this.dataSource.filterPredicate=(e,t)=>{let i=t.trim().toLowerCase();return i?[e.lastName,e.firstName,e.externalId].filter(a=>!!a).some(a=>a.toLowerCase().includes(i)):!0},this.persons$=this.store.select(Te),this.loading$=this.store.select(Fe),this.unusedPersonCount$=this.persons$.pipe(oe(e=>e.filter(t=>t.activeRaces.length===0).length)),this.actions$.pipe(Wp(c),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(u),bg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Erstellen der Person: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(Wp(a$1),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(d),bg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Person: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(Wp(i),bg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(Wp(x),bg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Person: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(Wp(S),bg(this.destroy$)).subscribe(({deletedCount:e})=>{this.snackBar.open(`${e} ungenutzte Person(en) gel\xF6scht`,`OK`,{duration:3e3}),this.store.dispatch(o())}),this.actions$.pipe(Wp(U),bg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim L\xF6schen der ungenutzten Personen: ${e}`,`OK`,{duration:5e3})}),id(()=>{let e=this.sort();e&&this.dataSource.sort!==e&&(this.dataSource.sort=e)}),id(()=>{let e=this.paginator();e&&this.dataSource.paginator!==e&&(this.dataSource.paginator=e)})}ngAfterViewInit(){this.store.dispatch(o()),this.store.dispatch(e()),this.persons$.pipe(bg(this.destroy$)).subscribe(e=>{this.dataSource.data=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(G,{width:`500px`}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(P({person:t}))})}openEditDialog(e){this.dialog.open(G,{width:`500px`,data:e}).afterClosed().pipe(bg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(p({id:e.id,person:i}))})}deletePerson(e){e.activeRaces.length>0||this.dialog.open(st$1,{width:`450px`,data:{message:`M\xF6chten Sie die Person "${e.lastName} ${e.firstName}" wirklich l\xF6schen?`,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(l({id:e.id}))})}deleteUnusedPersons(){this.unusedPersonCount$.pipe(Ct$1(1)).subscribe(e=>{e!==0&&this.dialog.open(st$1,{width:`450px`,data:{message:`M\xF6chten Sie wirklich alle ${e} Person(en) l\xF6schen, die keinem Rennen / Teilnehmer zugewiesen sind?`,confirmLabel:`Löschen`,confirmColor:`warn`}}).afterClosed().pipe(bg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(F())})})}onSearchChange(e){this.searchTerm.set(e),this.dataSource.filter=e.trim().toLowerCase(),this.paginator()?.firstPage()}clearSearch(){this.onSearchChange(``)}refreshData(){this.store.dispatch(o()),this.store.dispatch(e()),this.snackBar.open(`Daten werden aktualisiert...`,`OK`,{duration:2e3})}getGenderLabel(e){return e?e$1[e]||e:`—`}activeRacesTooltip(e){return[...e].sort((t,i)=>(i.date??``).localeCompare(t.date??``)||t.name.localeCompare(i.name)).map(t=>t.date?`${this.formatRaceDate(t.date)} - ${t.name}`:t.name).join(`
`)}formatRaceDate(e){let t=e.split(`-`);if(t.length===3){let i=t[0],a=t[1];return`${t[2]}.${a}.${i}`}return e}static ɵfac=function(t){return new(t||n)};static ɵcmp=qE({type:n,selectors:[[`app-person-list`]],viewQuery:function(t,i){t&1&&fh(i.sort,W,5)(i.paginator,st,5),t&2&&HD(2)},decls:57,vars:21,consts:[[1,`filter-section`],[`appearance`,`outline`,1,`search-field`],[`matPrefix`,``],[`matInput`,``,`placeholder`,`z.B. Muster oder DSV-Code`,3,`input`,`value`],[`matSuffix`,``,`mat-icon-button`,``,`aria-label`,`Suche leeren`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Daten aktualisieren`,3,`click`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Löscht alle Personen, die keinem Rennen / Teilnehmer zugewiesen sind`,3,`click`,`disabled`],[1,`loading-container`],[1,`table-container`],[`mat-table`,``,`matSort`,``,1,`person-table`,3,`dataSource`,`trackBy`],[`matColumnDef`,`lastName`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`firstName`],[`matColumnDef`,`birthDate`],[`matColumnDef`,`gender`],[`matColumnDef`,`externalId`],[`matColumnDef`,`activeRaces`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSizeOptions`],[`matSuffix`,``,`mat-icon-button`,``,`aria-label`,`Suche leeren`,3,`click`],[`diameter`,`30`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-header-cell`,``],[1,`no-races`],[`matTooltipClass`,`active-races-tooltip`,3,`matTooltip`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,3,`click`,`disabled`,`matTooltip`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,i){t&1&&(Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`),lw(3,`Personen`),Jc()(),Mi(4,`mat-card-content`)(5,`div`,0)(6,`mat-form-field`,1)(7,`mat-label`),lw(8,`Suche (Name, Vorname, Externe ID)`),Jc(),Mi(9,`mat-icon`,2),lw(10,`search`),Jc(),Mi(11,`input`,3),sh(`input`,function(d){return i.onSearchChange(d.target.value)}),Jc(),gD(12,dn,3,0,`button`,4),Jc()(),Mi(13,`div`,5)(14,`button`,6),sh(`click`,function(){return i.openCreateDialog()}),Mi(15,`mat-icon`),lw(16,`add`),Jc(),lw(17,` Neue Person `),Jc(),Mi(18,`button`,7),sh(`click`,function(){return i.refreshData()}),Mi(19,`mat-icon`),lw(20,`refresh`),Jc(),lw(21,` Aktualisieren `),Jc(),Mi(22,`button`,8),bw(23,`async`),sh(`click`,function(){return i.deleteUnusedPersons()}),Mi(24,`mat-icon`),lw(25,`delete_sweep`),Jc(),lw(26),bw(27,`async`),Jc()(),gD(28,ln,2,0,`div`,9),bw(29,`async`),Mi(30,`div`,10)(31,`table`,11),bw(32,`async`),tl(33,12),Gp(34,pn,2,0,`th`,13)(35,hn,2,1,`td`,14),nl(),tl(36,15),Gp(37,mn,2,0,`th`,13)(38,un,2,1,`td`,14),nl(),tl(39,16),Gp(40,_n,2,0,`th`,13)(41,fn,2,1,`td`,14),nl(),tl(42,17),Gp(43,vn,2,0,`th`,13)(44,gn,2,1,`td`,14),nl(),tl(45,18),Gp(46,yn,2,0,`th`,13)(47,bn,2,1,`td`,14),nl(),tl(48,19),Gp(49,Cn,2,0,`th`,20)(50,xn,3,1,`td`,14),nl(),tl(51,21),Gp(52,Nn,2,0,`th`,20)(53,kn,7,2,`td`,14),nl(),Gp(54,In,1,0,`tr`,22)(55,Mn,1,0,`tr`,23),Jc()(),eh(56,`mat-paginator`,24),Jc()()),t&2&&(fI(11),Xp(`value`,i.searchTerm()),fI(),mD(i.searchTerm()?12:-1),fI(10),Xp(`disabled`,Cw(23,12,i.unusedPersonCount$)===0),fI(4),rl(` Ungenutzte Personen löschen (`,Cw(27,14,i.unusedPersonCount$),`) `),fI(2),mD(Cw(29,16,i.loading$)?28:-1),fI(3),mh(`hidden`,Cw(32,18,i.loading$)),Xp(`dataSource`,i.dataSource)(`trackBy`,i.trackById),fI(23),Xp(`matHeaderRowDef`,i.displayedColumns),fI(),Xp(`matRowDefColumns`,i.displayedColumns),fI(),Xp(`pageSizeOptions`,Ew(20,sn)))},dependencies:[di,ci,Jt,ti,ri$1,ii$1,ei,si,oi,ni,ai,li,sh$1,ah,Es,yt,wt,lp,ap,ot,kp,Zm,Gm,$m,Xm,qm,Yt,mt,gt,W,pt,It,st,Vo,Kr,ii,ma,pa,Be,Pe$1,Re,bt,Ae,Wo],styles:[`.filter-section[_ngcontent-%COMP%]{margin-top:20px;display:flex;gap:10px;align-items:center}.search-field[_ngcontent-%COMP%]{min-width:280px}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:8px}.person-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.no-races[_ngcontent-%COMP%]{color:#0006}mat-chip[_ngcontent-%COMP%]{white-space:nowrap}`]})};export{Le as PersonListComponent};