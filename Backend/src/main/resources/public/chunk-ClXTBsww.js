import{$ as Jp,A as Fu,Ar as qE,Br as rl,Ct as Q,Dt as Rg,Er as oh,Et as Re,Ht as VD,Ir as qp,It as Ty,Jr as uh,L as Gp,Ln as dr,M as GE,Mt as T,N as Ge,On as bh,S as Ee,St as Pu,Tt as RD,U as Hn,Ur as sh,Wn as fI,Xt as XE,Z as Jc,Zr as uu,Zt as Xa,_r as mD,a as $n,c as A,ct as Mi,gr as lw,gt as Nr,h as Bv,it as Lg,j as G,lt as Mr,nn as Xp,on as Yo,p as Bj,qn as gD,qr as tn,rr as jD,si as z,ti as wr,tr as iy,ui as zl,un as ZE,vn as _D,vr as mh}from"./chunk-Cvf2jPh5.js";import{C as Vn,N as ah,O as Yn,P as an,V as eo,X as je,_ as Kt,lt as sh$1,ot as qi,pt as zn,q as io,r as As,ut as ss,v as L,z as di}from"./chunk-DJERRNqY.js";import{Bt as tt$1,I as Nt,M as Mi$1,N as Mn,P as Nn,R as Ot,U as Sn,V as Qo,Vt as ul,_t as je$1,i as Be,ut as et$1,x as Go}from"./chunk-R2twGyTn.js";function rt(i,a){}var p=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var se=(()=>{class i extends tt$1{_elementRef=T(Mr);_focusTrapFactory=T(eo);_config;_interactivityChecker=T(qi);_ngZone=T(Re);_focusMonitor=T(Kt);_renderer=T(Xa);_changeDetectorRef=T(Bj);_injector=T(Ee);_platform=T(L);_document=T(dr);_portalOutlet;_focusTrapped=new Q;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=T(p,{optional:!0})||new p,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),l(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,n),l=this._renderer.listen(e,`mousedown`,n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Bv(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let n=zn(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=zn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=zn()))}static ɵfac=function(t){return new(t||i)};static ɵcmp=qE({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,n){if(t&1&&uh(Mi$1,7),t&2){let o;jD(o=VD())&&(n._portalOutlet=o.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,n){t&2&&Jp(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[qp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&Gp(0,rt,0,0,`ng-template`,0)},dependencies:[Mi$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})();var y=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Q;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!io(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,e=``){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}};var lt=new A(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=T(Ee);return()=>Go(i)}});var ct=new A(`DialogData`);var dt=new A(`DefaultDialogConfig`);function mt(i){let a=Yo(i),e=new Ge;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var re=(()=>{class i{_injector=T(Ee);_defaultOptions=T(dt,{optional:!0});_parentDialog=T(i,{optional:!0,skipSelf:!0});_overlayContainer=T(Qo);_idGenerator=T(Yn);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q;_afterOpenedAtThisLevel=new Q;_ariaHiddenElements=new Map;_scrollStrategy=T(lt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zl(void 0)));open(e,t){t=G(G({},this._defaultOptions||new p),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),l=Nt(this._injector,o),r=new y(l,t),c=this._attachContainer(l,r,t);if(r.containerInstance=c,!this.openDialogs.length){let Z=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(tn(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Z)}):this._hideNonDialogContentFromAssistiveTechnology(Z)}return this._attachDialogContent(e,r,c,t),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){oe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){oe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),oe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new je$1({positionStrategy:e.positionStrategy||Nn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,l=[{provide:p,useValue:n},{provide:y,useValue:t},{provide:Mn,useValue:e}],r;n.container?typeof n.container==`function`?r=n.container:(r=n.container.type,l.push(...n.container.providers(n))):r=se;let c=new et$1(r,n.viewContainerRef,Ee.create({parent:o||this._injector,providers:l}));return e.attach(c).instance}_attachDialogContent(e,t,n,o){if(e instanceof wr){let l=this._createInjector(o,t,n,void 0),r={$implicit:o.data,dialogRef:t};o.templateContext&&(r=G(G({},r),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),n.attachTemplatePortal(new Be(e,null,r,l))}else{let l=this._createInjector(o,t,n,this._injector),r=n.attachComponentPortal(new et$1(e,o.viewContainerRef,l,null,o.bindings));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,n,o){let l=e.injector||e.viewContainerRef?.injector,r=[{provide:ct,useValue:e.data},{provide:y,useValue:t}];return e.providers&&(typeof e.providers==`function`?r.push(...e.providers(t,e,n)):r.push(...e.providers)),e.direction&&(!l||!l.get(As,null,{optional:!0}))&&r.push({provide:As,useValue:mt(e.direction)}),Ee.create({parent:l||o,providers:r})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,l)=>{o?l.setAttribute(`aria-hidden`,o):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||i)};static ɵprov=Nr({token:i,factory:i.ɵfac})}return i})();function oe(i,a){let e=i.length;for(;e--;)a(i[e])}var Ye=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=GE({type:i});static ɵinj=uu({providers:[re],imports:[Ot,Sn,ss,Sn]})}return i})();function ht(i,a){}var Y=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var le=`mdc-dialog--open`;var Ze=`mdc-dialog--opening`;var $e=`mdc-dialog--closing`;var ut=150;var gt=75;var pt=(()=>{class i extends se{_animationStateChanged=new Ge;_animationsEnabled=!je();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Xe(this._config.enterAnimationDuration)??ut:0;_exitAnimationDuration=this._animationsEnabled?Xe(this._config.exitAnimationDuration)??gt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ke,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ze,le)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(le),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(le),this._animationsEnabled?(this._hostElement.style.setProperty(Ke,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($e)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ze,$e)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵcmp=qE({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(oh(`id`,n._config.id),Jp(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),mh(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[qp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(Mi(0,`div`,0)(1,`div`,1),Gp(2,ht,0,0,`ng-template`,2),Jc()())},dependencies:[Mi$1],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return i})();var Ke=`--mat-dialog-transition-duration`;function Xe(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?Vn(i.substring(0,i.length-2)):i.endsWith(`s`)?Vn(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var U=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(U||{});var b=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n(1);_beforeClosed=new $n(1);_result;_closeFallbackTimeout;_state=U.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Hn(n=>n.state===`opened`),tn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Hn(n=>n.state===`closed`),tn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Lg(this.backdropClick(),this.keydownEvents().pipe(Hn(n=>n.keyCode===27&&!this.disableClose&&!io(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Je(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Hn(t=>t.state===`closing`),tn(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=U.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,e=``){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=U.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Je(i,a,e){return i._closeInteractionType=a,i.close(e)}var ce=new A(`MatMdcDialogData`);var ft=new A(`mat-mdc-dialog-default-options`);var _t=new A(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=T(Ee);return()=>Go(i)}});var de=(()=>{class i{_defaultOptions=T(ft,{optional:!0});_scrollStrategy=T(_t);_parentDialog=T(i,{optional:!0,skipSelf:!0});_idGenerator=T(Yn);_injector=T(Ee);_dialog=T(re);_animationsDisabled=je();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q;_afterOpenedAtThisLevel=new Q;dialogConfigClass=Y;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zl(void 0)));constructor(){this._dialogRefConstructor=b,this._dialogContainerType=pt,this._dialogDataToken=ce}open(e,t){let n;t=G(G({},this._defaultOptions||new Y),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,z(G({},t),{positionStrategy:Nn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:p,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(l,r,c)=>(n=new this._dialogRefConstructor(l,t,c),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:y,useValue:null}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||i)};static ɵprov=Nr({token:i,factory:i.ɵfac})}return i})();var si=(()=>{class i{dialogRef=T(b,{optional:!0});_elementRef=T(Mr);_dialog=T(de);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=at(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&Je(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||i)};static ɵdir=ZE({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,n){t&1&&sh(`click`,function(l){return n._onButtonClick(l)}),t&2&&Jp(`aria-label`,n.ariaLabel||null)(`type`,n.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[iy]})}return i})();var et=(()=>{class i{_dialogRef=T(b,{optional:!0});_elementRef=T(Mr);_dialog=T(de);ngOnInit(){this._dialogRef||(this._dialogRef=at(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||i)};static ɵdir=ZE({type:i})}return i})();var tt=(()=>{class i extends et{id=T(Yn).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=ZE({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,n){t&2&&oh(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[qp]})}return i})();var it=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=ZE({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[XE([ul])]})}return i})();var nt=(()=>{class i extends et{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=ZE({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,n){t&2&&mh(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[qp]})}return i})();function at(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var ot=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=GE({type:i});static ɵinj=uu({providers:[de],imports:[Ye,Ot,Sn,an]})}return i})();function bt(i,a){if(i&1&&(Mi(0,`h2`,0),lw(1),Jc()),i&2){let e=RD();fI(),bh(e.data.title)}}function Ct(i,a){if(i&1){let e=_D();Mi(0,`button`,5),sh(`click`,function(){Pu(e);return Fu(RD().onCancel())}),lw(1),Jc()}if(i&2){let e=RD();fI(),bh(e.data.cancelLabel||`Abbrechen`)}}var st=class i{dialogRef=T(b);data=T(ce);onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static ɵfac=function(e){return new(e||i)};static ɵcmp=qE({type:i,selectors:[[`app-confirm-dialog`]],decls:8,vars:5,consts:[[`mat-dialog-title`,``],[1,`confirm-dialog-message`],[`align`,`end`],[`mat-button`,``],[`mat-raised-button`,``,3,`click`,`color`],[`mat-button`,``,3,`click`]],template:function(e,t){e&1&&(gD(0,bt,2,1,`h2`,0),Mi(1,`mat-dialog-content`)(2,`p`,1),lw(3),Jc()(),Mi(4,`mat-dialog-actions`,2),gD(5,Ct,2,1,`button`,3),Mi(6,`button`,4),sh(`click`,function(){return t.onConfirm()}),lw(7),Jc()()),e&2&&(mD(t.data.title?0:-1),fI(3),bh(t.data.message),fI(2),mD(t.data.hideCancel?-1:5),fI(),Xp(`color`,t.data.confirmColor||`primary`),fI(),rl(` `,t.data.confirmLabel||`OK`,` `))},dependencies:[di,ot,tt,nt,it,sh$1,ah],styles:[`.confirm-dialog-message[_ngcontent-%COMP%]{white-space:pre-line;min-width:300px;max-width:500px}`]})};export{nt as a,st as c,it as i,tt as l,ce as n,ot as o,de as r,si as s,b as t};