import{An as cI,At as Qu,Et as Q,G as Hj,Hn as fh,Jn as hD,Lt as T,Rn as el,Tr as pD,Yt as We,a as $n,an as Yo,bt as Og,c as A,en as Xc,fr as lu,ft as Mr,i as $j,it as Kp,jt as RD,kr as qE,kt as Qp,lr as kr,oi as zE,t as $E,vr as nh,vt as OD,xr as ny}from"./chunk-BcE9rAg5.js";import{B as Q$1,Mn as we,Vn as ze,c as Bc,ct as Xc$1,k as Jt}from"./chunk-CvvWUGgn.js";import{g as me}from"./chunk-BsNjwJef.js";var V=[`*`,[[``,`matSortHeaderIcon`,``]]];var q=[`*`,`[matSortHeaderIcon]`];function K(e,c){e&1&&(Qu(),Xc(0,`svg`,3),Kp(1,`path`,4),el())}function U(e,c){e&1&&(Xc(0,`div`,2),RD(1,1,null,K,2,0),el())}var L=new A(`MAT_SORT_DEFAULT_OPTIONS`);var W=(()=>{class e{_defaultOptions;_initializedStream=new $n(1);sortables=new Map;_stateChanges=new Q;active;start=`asc`;get direction(){return this._direction}set direction(t){this._direction=t}_direction=``;disableClear;disabled=!1;sortChange=new We;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return``;let i=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Z(t.start||this.start,i),n=r.indexOf(this.direction)+1;return n>=r.length&&(n=0),r[n]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(i){return new(i||e)(kr(L,8))};static ɵdir=zE({type:e,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,$j],disabled:[2,`matSortDisabled`,`disabled`,$j]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[ny]})}return e})();function Z(e,c){let t=[`asc`,`desc`];return e==`desc`&&t.reverse(),c||t.push(``),t}var pt=(()=>{class e{_sort=T(W,{optional:!0});_columnDef=T(me,{optional:!0});_changeDetectorRef=T(Hj);_focusMonitor=T(Jt);_elementRef=T(Mr);_ariaDescriber=T(Bc,{optional:!0});_renderChanges;_animationsDisabled=ze();_recentlyCleared=Yo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription=`Sort`;disableClear;constructor(){T(we).load(Xc$1);let t=T(L,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Og(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?i:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static ɵfac=function(i){return new(i||e)};static ɵcmp=$E({type:e,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(i,r){i&1&&nh(`click`,function(){return r._toggleOnInteraction()})(`keydown`,function(Y){return r._handleKeydown(Y)})(`mouseleave`,function(){return r._recentlyCleared.set(null)}),i&2&&(Qp(`aria-sort`,r._getAriaSortAttribute()),fh(`mat-sort-header-disabled`,r._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,$j],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,$j]},exportAs:[`matSortHeader`],ngContentSelectors:q,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(i,r){i&1&&(OD(V),Xc(0,`div`,0)(1,`div`,1),RD(2),el(),pD(3,U,3,0,`div`,2),el()),i&2&&(fh(`mat-sort-header-sorted`,r._isSorted())(`mat-sort-header-position-before`,r.arrowPosition===`before`)(`mat-sort-header-descending`,r._sort.direction===`desc`)(`mat-sort-header-ascending`,r._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,r._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,r._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,r._animationsDisabled),Qp(`tabindex`,r._isDisabled()?null:0)(`role`,r._isDisabled()?null:`button`),cI(3),hD(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return e})();var gt=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=qE({type:e});static ɵinj=lu({imports:[Q$1]})}return e})();export{gt as n,pt as r,W as t};