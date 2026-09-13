import{At as Re$1,Bt as Ty,Cr as nl,Ct as Pu,D as G,F as HD,Fn as cw,Hr as tE,In as dI,Ir as rh,It as T,Jn as gh,Jt as VD,K as Jc,Kn as gD,Kt as Up,L as Hj,Ln as dh,Lr as rl,Mt as Rj,Nn as ch,O as Ge$1,Qr as vw,Rn as dr,Tt as QE,V as ID,Vn as el,Vt as UE,W as Iw,Wr as tl,Wt as Uj,X as KD,Xn as hD,Xr as vD,Y as Jp,Yn as gi,Zt as WE,_ as Dg,an as Xc,c as A,ci as z$1,cn as Xp,ct as Mr,ei as wg,er as ih,et as Kp,gr as lu,gt as OD,ii as ww,it as Lu,j as Gl,mr as lh,nt as Lg,p as CD,r as $j,rn as XI,rr as jD,sr as kD,st as Mi,ti as wh,tn as Wp,tt as LD,w as Fj,wr as od,wt as Q,x as FD,y as Ee$1,zt as Tw}from"./chunk-CMzlWkMW.js";import{$ as Uc,$t as kN,An as ts,At as cM,Dn as si,E as IN,Et as an$1,F as Lm,Fn as wN,Ft as eN,G as Ox,Gt as iC,H as Ne$1,Lt as fp,Mt as dM,N as Ku,O as JD,On as ss,Ot as as,P as LN,Pt as eC,Qt as jt,R as Me,U as ON,Zt as jE,a as BE,bn as qN,ct as WM,d as De$1,dt as X,f as Dp,gn as oi,gt as Yh,h as Fc,hn as od$1,i as Ax,it as Vd,j as KN,k as Jp$1,ln as mr,mn as oC,mt as YM,on as ln$1,qt as il,r as $r,rn as kx,rt as VN,u as CN,un as nC,vt as Yo,wt as _r,x as He,xn as qh,y as Gr,yt as Yt}from"./chunk-DY9kXS9g.js";import"./chunk-BRDflDhi.js";import{At as x,Ct as c,Dt as o,Et as l,Ot as p$1,St as a,Tt as i$1,kt as u,n as st,t as It,wt as d,xt as P,y as i,yr as p,yt as Y}from"./main-RDEXNKKW.js";import{i as fn$1,n as Xt,r as bn,t as Va}from"./chunk-BK7Vn8Ni.js";import{t as e}from"./chunk-B3EQRvcu.js";import{S as zo,_ as ni,a as Lo,b as rn$1,c as Ui,d as Wi,f as Zi,h as jo,i as Hi,l as Un,m as ji,n as $i,o as Po,p as fn$2,r as Gi,s as Qi,t as $e$1,u as Vi,v as qi,x as zi,y as ra}from"./chunk-DSyGbOnU.js";import{n as gt,r as pt,t as W}from"./chunk-BXd7xLqD.js";var Ee=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var De=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Pe(i,n){i&1&&(Mi(0,`span`,3),LD(1,1),Jc())}function Ae(i,n){i&1&&(Mi(0,`span`,6),LD(1,2),Jc())}var Re=[`*`];var Fe=new A(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var _e=new A(`MatChipAvatar`);var ve=new A(`MatChipTrailingIcon`);var fe=new A(`MatChipEdit`);var ge=new A(`MatChipRemove`);var Se=new A(`MatChip`);var Ce=(()=>{class i{_elementRef=T(Mr);_parentChip=T(Se);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){T(De$1).load(mr),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(e){return new(e||i)};static ɵdir=QE({type:i,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(e,a){e&2&&(Kp(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),gh(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:Uj(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return i})();var Te=(()=>{class i extends Ce{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(i)))(a||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(e,a){e&1&&ih(`click`,function(d){return a._handleClick(d)})(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(Kp(`tabindex`,a._getTabindex()),gh(`mdc-evolution-chip__action--presentational`,!1))},features:[Up]})}return i})();var ht=(()=>{class i{_changeDetectorRef=T(Hj);_elementRef=T(Mr);_tagName=T(Rj);_ngZone=T(Re$1);_focusMonitor=T(an$1);_globalRippleOptions=T(ts,{optional:!0});_document=T(dr);_onFocus=new Q;_onBlur=new Q;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Me();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=T(Ne$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new Ge$1;destroyed=new Ge$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=T(Vd);_injector=T(Ee$1);constructor(){let t=T(De$1);t.load(mr),t.load(ln$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Lg(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let a=e._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(e){return new(e||i)};static ɵcmp=UE({type:i,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(e,a,l){if(e&1&&ch(l,_e,5)(l,fe,5)(l,ve,5)(l,ge,5)(l,_e,5)(l,ve,5)(l,fe,5)(l,ge,5),e&2){let d;FD(d=jD())&&(a.leadingIcon=d.first),FD(d=jD())&&(a.editIcon=d.first),FD(d=jD())&&(a.trailingIcon=d.first),FD(d=jD())&&(a.removeIcon=d.first),FD(d=jD())&&(a._allLeadingIcons=d),FD(d=jD())&&(a._allTrailingIcons=d),FD(d=jD())&&(a._allEditIcons=d),FD(d=jD())&&(a._allRemoveIcons=d)}},viewQuery:function(e,a){if(e&1&&lh(Te,5),e&2){let l;FD(l=jD())&&(a.primaryAction=l.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(e,a){e&1&&ih(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&(rh(`id`,a.id),Kp(`role`,a.role)(`aria-label`,a.ariaLabel),KD(`mat-`+(a.color||`primary`)),gh(`mdc-evolution-chip`,!a._isBasicChip)(`mdc-evolution-chip--disabled`,a.disabled)(`mdc-evolution-chip--with-trailing-action`,a._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,a.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,a.leadingIcon)(`mdc-evolution-chip--with-avatar`,a.leadingIcon)(`mat-mdc-chip-with-avatar`,a.leadingIcon)(`mat-mdc-chip-highlighted`,a.highlighted)(`mat-mdc-chip-disabled`,a.disabled)(`mat-mdc-basic-chip`,a._isBasicChip)(`mat-mdc-standard-chip`,!a._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,a._hasTrailingIcon())(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,$j],highlighted:[2,`highlighted`,`highlighted`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],disabled:[2,`disabled`,`disabled`,$j]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[vw([{provide:Se,useExisting:i}])],ngContentSelectors:De,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(e,a){e&1&&(kD(Ee),Xp(0,`span`,0),Mi(1,`span`,1)(2,`span`,2),hD(3,Pe,2,0,`span`,3),Mi(4,`span`,4),LD(5),Xp(6,`span`,5),Jc()()(),hD(7,Ae,2,0,`span`,6)),e&2&&(dI(3),gD(a.leadingIcon?3:-1),dI(4),gD(a._hasTrailingIcon()?7:-1))},dependencies:[Ce],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return i})();var we=(()=>{class i{_elementRef=T(Mr);_changeDetectorRef=T(Hj);_dir=T(He,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Q;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new gi;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Gl(null),Dg(()=>Lg(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains(`mat-mdc-chip`))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Gl(this._chips)).subscribe(t=>{let e=[];t.forEach(a=>a._getActions().forEach(l=>e.push(l))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new Yo(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(wg(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(wg(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Gl(null),wg(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(wg(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),l=t.chip._hasFocus(),d=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),Me=l||d;this._isValidIndex(a)&&Me&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=UE({type:i,selectors:[[`mat-chip-set`]],contentQueries:function(e,a,l){if(e&1&&ch(l,ht,5),e&2){let d;FD(d=jD())&&(a._chips=d)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(e,a){e&1&&ih(`keydown`,function(d){return a._handleKeydown(d)}),e&2&&Kp(`role`,a.role)},inputs:{disabled:[2,`disabled`,`disabled`,$j],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:Uj(t)]},ngContentSelectors:Re,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(e,a){e&1&&(kD(),Xc(0,`div`,0),LD(1),el())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return i})();var xe=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=WE({type:i});static ɵinj=lu({providers:[$r,{provide:Fe,useValue:{separatorKeyCodes:[13]}}],imports:[Gr,X]})}return i})();var mt=eN(`person`);var Be=Jp$1(mt,i=>i.persons);var Ne=Jp$1(mt,i=>i.loading);Jp$1(mt,i=>i.error);var Ie=Jp$1(Be,p,(i,n)=>{let t=new Map;for(let e of n){if(!e.person||!e.race)continue;let a=t.get(e.person.id)??[];a.push(e.race),t.set(e.person.id,a)}return i.map(e=>z$1(G({},e),{activeRaces:t.get(e.id)??[]}))});var Ve=(i,n)=>n.value;function Ge(i,n){i&1&&(Mi(0,`mat-error`),cw(1,`Vorname ist erforderlich`),Jc())}function qe(i,n){i&1&&(Mi(0,`mat-error`),cw(1,`Nachname ist erforderlich`),Jc())}function $e(i,n){i&1&&(Mi(0,`mat-error`),cw(1,`Geburtsdatum ist erforderlich`),Jc())}function je(i,n){if(i&1&&(Mi(0,`mat-option`,9),cw(1),Jc()),i&2){let t=n.$implicit;Jp(`value`,t.value),dI(),wh(t.label)}}function Qe(i,n){i&1&&(Mi(0,`mat-error`),cw(1,`Geschlecht ist erforderlich`),Jc())}var z=class i{fb=T(iC);dialogRef=T($e$1);data=T(Un);form;genderOptions=[{value:`MALE`,label:e.MALE},{value:`FEMALE`,label:e.FEMALE}];constructor(){let n=this.data?.birthDate||``;if(n&&typeof n==`string`){let t=n.split(`-`);t.length===3&&(n=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])))}this.form=this.fb.group({firstName:[this.data?.firstName||``,jt.required],lastName:[this.data?.lastName||``,jt.required],birthDate:[n,jt.required],gender:[this.data?.gender||``,jt.required],externalId:[this.data?.externalId||``]})}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let n=this.form.value,t={firstName:n.firstName,lastName:n.lastName,birthDate:this.formatDate(n.birthDate),gender:n.gender,externalId:n.externalId||void 0};this.dialogRef.close(t)}}formatDate(n){if(typeof n==`string`)return n;let t=new Date(n);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}static ɵfac=function(t){return new(t||i)};static ɵcmp=UE({type:i,selectors:[[`app-person-dialog`]],decls:42,vars:9,consts:[[`picker`,``],[`mat-dialog-title`,``],[1,`person-form`,3,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`firstName`,`required`,``],[`matInput`,``,`formControlName`,`lastName`,`required`,``],[`matInput`,``,`formControlName`,`birthDate`,`placeholder`,`TT.MM.JJJJ`,`required`,``,3,`matDatepicker`],[`matSuffix`,``,3,`for`],[`formControlName`,`gender`,`required`,``],[3,`value`],[`matInput`,``,`formControlName`,`externalId`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,e){if(t&1&&(Mi(0,`h2`,1),cw(1),Jc(),Mi(2,`mat-dialog-content`)(3,`form`,2)(4,`mat-form-field`,3)(5,`mat-label`),cw(6,`Vorname`),Jc(),Xp(7,`input`,4),XI(),hD(8,Ge,2,0,`mat-error`),Jc(),Mi(9,`mat-form-field`,3)(10,`mat-label`),cw(11,`Nachname`),Jc(),Xp(12,`input`,5),XI(),hD(13,qe,2,0,`mat-error`),Jc(),Mi(14,`mat-form-field`,3)(15,`mat-label`),cw(16,`Geburtsdatum`),Jc(),Xp(17,`input`,6),XI(),Xp(18,`mat-datepicker-toggle`,7)(19,`mat-datepicker`,null,0),Mi(21,`mat-hint`),cw(22,`Format: TT.MM.JJJJ (z.B. 24.3.2022)`),Jc(),hD(23,$e,2,0,`mat-error`),Jc(),Mi(24,`mat-form-field`,3)(25,`mat-label`),cw(26,`Geschlecht`),Jc(),Mi(27,`mat-select`,8),vD(28,je,2,2,`mat-option`,9,Ve),Jc(),XI(),hD(30,Qe,2,0,`mat-error`),Jc(),Mi(31,`mat-form-field`,3)(32,`mat-label`),cw(33,`Externe ID (optional)`),Jc(),Xp(34,`input`,10),XI(),Mi(35,`mat-hint`),cw(36,`Vereins-/Verbandsnummer, falls vorhanden`),Jc()()()(),Mi(37,`mat-dialog-actions`,11)(38,`button`,12),ih(`click`,function(){return e.onCancel()}),cw(39,`Abbrechen`),Jc(),Mi(40,`button`,13),ih(`click`,function(){return e.onSave()}),cw(41,` Speichern `),Jc()()),t&2){let a=HD(20);dI(),rl(` `,e.data?`Person bearbeiten`:`Neue Person`,` `),dI(2),Jp(`formGroup`,e.form),dI(4),tE(),dI(),gD(e.form.get(`firstName`)?.hasError(`required`)&&e.form.get(`firstName`)?.touched?8:-1),dI(4),tE(),dI(),gD(e.form.get(`lastName`)?.hasError(`required`)&&e.form.get(`lastName`)?.touched?13:-1),dI(4),Jp(`matDatepicker`,a),tE(),dI(),Jp(`for`,a),dI(5),gD(e.form.get(`birthDate`)?.hasError(`required`)&&e.form.get(`birthDate`)?.touched?23:-1),dI(4),tE(),dI(),ID(e.genderOptions),dI(2),gD(e.form.get(`gender`)?.hasError(`required`)&&e.form.get(`gender`)?.touched?30:-1),dI(4),tE(),dI(6),Jp(`disabled`,!e.form.valid)}},dependencies:[il,oC,nC,Uc,JD,eC,od$1,oi,Lm,zo,Po,jo,Lo,si,Fc,ss,as,Yh,qh,YM,WM,kx,Ox,bn,fn$1,Xt,Va,Y,jE,BE,_r],styles:[`.person-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})};var Ke=()=>[10,25,50,100];var We=(i,n)=>n.id;function Ue(i,n){i&1&&(Mi(0,`div`,3),Xp(1,`mat-spinner`),Jc())}function Je(i,n){i&1&&(Mi(0,`th`,20),cw(1,`ID`),Jc())}function Ze(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit;dI(),wh(t.id)}}function Xe(i,n){i&1&&(Mi(0,`th`,20),cw(1,`Nachname`),Jc())}function Ye(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit;dI(),wh(t.lastName)}}function tn(i,n){i&1&&(Mi(0,`th`,20),cw(1,`Vorname`),Jc())}function en(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit;dI(),wh(t.firstName)}}function nn(i,n){i&1&&(Mi(0,`th`,20),cw(1,`Geburtsdatum`),Jc())}function an(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit,e=OD();dI(),wh(e.formatRaceDate(t.birthDate))}}function on(i,n){i&1&&(Mi(0,`th`,20),cw(1,`Geschlecht`),Jc())}function cn(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit,e=OD();dI(),wh(e.getGenderLabel(t.gender))}}function rn(i,n){i&1&&(Mi(0,`th`,20),cw(1,`Externe ID`),Jc())}function sn(i,n){if(i&1&&(Mi(0,`td`,21),cw(1),Jc()),i&2){let t=n.$implicit;dI(),wh(t.externalId||`-`)}}function dn(i,n){i&1&&(Mi(0,`th`,22),cw(1,`Aktiv bei Rennen`),Jc())}function ln(i,n){if(i&1&&(Mi(0,`mat-chip`),cw(1),Jc()),i&2){let t=n.$implicit;dI(),wh(t.name)}}function pn(i,n){if(i&1&&(Mi(0,`mat-chip-set`),vD(1,ln,2,1,`mat-chip`,null,We),Jc()),i&2){let t=OD().$implicit;dI(),ID(t.activeRaces)}}function hn(i,n){i&1&&(Mi(0,`span`,23),cw(1,`-`),Jc())}function mn(i,n){if(i&1&&(Mi(0,`td`,21),hD(1,pn,3,0,`mat-chip-set`)(2,hn,2,0,`span`,23),Jc()),i&2){let t=n.$implicit;dI(),gD(t.activeRaces.length?1:2)}}function un(i,n){i&1&&(Mi(0,`th`,22),cw(1,`Aktionen`),Jc())}function _n(i,n){if(i&1){let t=CD();Mi(0,`td`,21)(1,`button`,24),ih(`click`,function(){let a=Lu(t).$implicit;return Pu(OD().openEditDialog(a))}),Mi(2,`mat-icon`),cw(3,`edit`),Jc()(),Mi(4,`button`,25),ih(`click`,function(){let a=Lu(t).$implicit;return Pu(OD().deletePerson(a))}),Mi(5,`mat-icon`),cw(6,`delete`),Jc()()()}if(i&2){let t=n.$implicit;dI(4),Jp(`disabled`,t.activeRaces.length>0)(`matTooltip`,t.activeRaces.length>0?`Kann nicht gelöscht werden, solange die Person einem Rennen zugeordnet ist`:`Löschen`)}}function vn(i,n){i&1&&Xp(0,`tr`,26)}function fn(i,n){i&1&&Xp(0,`tr`,27)}var ke=class i$2{store=T(Yt);dialog=T(fn$2);snackBar=T(ni);actions$=T(cM);destroy$=new Q;persons$;loading$;displayedColumns=[`id`,`lastName`,`firstName`,`birthDate`,`gender`,`externalId`,`activeRaces`,`actions`];dataSource=new rn$1([]);sortInitialized=!1;paginatorInitialized=!1;sort=Fj.required(W);paginator=Fj.required(st);constructor(){this.persons$=this.store.select(Ie),this.loading$=this.store.select(Ne),this.actions$.pipe(dM(c),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(a),wg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Erstellen der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(u),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(d),wg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim Aktualisieren der Person: ${n}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(l),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Person erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(x),wg(this.destroy$)).subscribe(({error:n})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Person: ${n}`,`OK`,{duration:5e3})}),od(()=>{let n=this.sort();n&&!this.sortInitialized&&setTimeout(()=>{this.dataSource.sort=n,this.sortInitialized=!0},100)}),od(()=>{let n=this.paginator();n&&!this.paginatorInitialized&&setTimeout(()=>{this.dataSource.paginator=n,this.paginatorInitialized=!0},100)})}ngAfterViewInit(){this.store.dispatch(o()),this.store.dispatch(i()),this.persons$.pipe(wg(this.destroy$)).subscribe(n=>{this.dataSource.data=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}openCreateDialog(){this.dialog.open(z,{width:`500px`}).afterClosed().pipe(wg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(P({person:t}))})}openEditDialog(n){this.dialog.open(z,{width:`500px`,data:n}).afterClosed().pipe(wg(this.destroy$)).subscribe(e=>{e&&this.store.dispatch(p$1({id:n.id,person:e}))})}deletePerson(n){n.activeRaces.length>0||confirm(`M\xF6chten Sie die Person "${n.lastName} ${n.firstName}" wirklich l\xF6schen?`)&&this.store.dispatch(i$1({id:n.id}))}refreshData(){this.store.dispatch(o()),this.store.dispatch(i()),this.snackBar.open(`Daten werden aktualisiert...`,`OK`,{duration:2e3})}getGenderLabel(n){return n?e[n]||n:`—`}formatRaceDate(n){let t=n.split(`-`);if(t.length===3){let e=t[0],a=t[1];return`${t[2]}.${a}.${e}`}return n}static ɵfac=function(t){return new(t||i$2)};static ɵcmp=UE({type:i$2,selectors:[[`app-person-list`]],viewQuery:function(t,e){t&1&&dh(e.sort,W,5)(e.paginator,st,5),t&2&&VD(2)},decls:46,vars:12,consts:[[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Daten aktualisieren`,3,`click`],[1,`loading-container`],[1,`table-container`],[`mat-table`,``,`matSort`,``,1,`person-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`lastName`],[`matColumnDef`,`firstName`],[`matColumnDef`,`birthDate`],[`matColumnDef`,`gender`],[`matColumnDef`,`externalId`],[`matColumnDef`,`activeRaces`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`matColumnDef`,`actions`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSizeOptions`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-header-cell`,``],[1,`no-races`],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,3,`click`,`disabled`,`matTooltip`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,e){t&1&&(Mi(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`),cw(3,`Personen`),Jc()(),Mi(4,`mat-card-content`)(5,`div`,0)(6,`button`,1),ih(`click`,function(){return e.openCreateDialog()}),Mi(7,`mat-icon`),cw(8,`add`),Jc(),cw(9,` Neue Person `),Jc(),Mi(10,`button`,2),ih(`click`,function(){return e.refreshData()}),Mi(11,`mat-icon`),cw(12,`refresh`),Jc(),cw(13,` Aktualisieren `),Jc()(),hD(14,Ue,2,0,`div`,3),ww(15,`async`),Mi(16,`div`,4)(17,`table`,5),ww(18,`async`),tl(19,6),Wp(20,Je,2,0,`th`,7)(21,Ze,2,1,`td`,8),nl(),tl(22,9),Wp(23,Xe,2,0,`th`,7)(24,Ye,2,1,`td`,8),nl(),tl(25,10),Wp(26,tn,2,0,`th`,7)(27,en,2,1,`td`,8),nl(),tl(28,11),Wp(29,nn,2,0,`th`,7)(30,an,2,1,`td`,8),nl(),tl(31,12),Wp(32,on,2,0,`th`,7)(33,cn,2,1,`td`,8),nl(),tl(34,13),Wp(35,rn,2,0,`th`,7)(36,sn,2,1,`td`,8),nl(),tl(37,14),Wp(38,dn,2,0,`th`,15)(39,mn,3,1,`td`,8),nl(),tl(40,16),Wp(41,un,2,0,`th`,15)(42,_n,7,2,`td`,8),nl(),Wp(43,vn,1,0,`tr`,17)(44,fn,1,0,`tr`,18),Jc()(),Xp(45,`mat-paginator`,19),Jc()()),t&2&&(dI(14),gD(Tw(15,7,e.loading$)?14:-1),dI(3),gh(`hidden`,Tw(18,9,e.loading$)),Jp(`dataSource`,e.dataSource),dI(26),Jp(`matHeaderRowDef`,e.displayedColumns),dI(),Jp(`matRowDefColumns`,e.displayedColumns),dI(),Jp(`pageSizeOptions`,Iw(11,Ke)))},dependencies:[il,Zi,ji,Hi,Wi,Vi,zi,qi,Ui,Qi,Gi,$i,kx,Ox,fp,wN,CN,KN,qN,zo,ra,VN,IN,kN,LN,ON,Ax,Dp,gt,W,pt,It,st,xe,ht,we,Ku],styles:[`.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.person-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.no-races[_ngcontent-%COMP%]{color:#0006}mat-chip-set[_ngcontent-%COMP%]{max-width:320px}`]})};export{ke as PersonListComponent};