import{Bn as eh,Ct as Pu,F as HD,Fn as cw,In as dI,It as T,Jn as gh,K as Jc,Kn as gD,L as Hj,Lr as rl,O as Ge,Tt as QE,V as ID,Vn as el,Vt as UE,Wt as Uj,Xn as hD,Xr as vD,Y as Jp,Zt as WE,a as $n,an as Xc,c as A,cn as Xp,ct as Mr,dn as Yo,er as ih,et as Kp,fn as Yp,fr as kr,gr as lu,gt as OD,it as Lu,kt as Qu,mt as Nr,nt as Lg,p as CD,r as $j,si as yD,sr as kD,st as Mi,ti as wh,tr as iy,tt as LD,wt as Q,yn as Zu}from"./chunk-CMzlWkMW.js";import{A as Kt,Bn as wE,G as Oe,Ht as fw,I as Mp,M as Ll,St as Zd,Ut as ge,Zt as ke,gt as W,hn as qm,k as Ji,vt as Wl}from"./chunk-ZMC-HYpb.js";import{o as Ir,p as Re,r as Br}from"./chunk-B_ny0XxP.js";var St=[`*`,[[``,`matSortHeaderIcon`,``]]];var vt=[`*`,`[matSortHeaderIcon]`];function yt(i,l){i&1&&(Qu(),Xc(0,`svg`,3),eh(1,`path`,4),el())}function xt(i,l){i&1&&(Xc(0,`div`,2),LD(1,1,null,yt,2,0),el())}var ft=new A(`MAT_SORT_DEFAULT_OPTIONS`);var Dt=(()=>{class i{_defaultOptions;_initializedStream=new $n(1);sortables=new Map;_stateChanges=new Q;active;start=`asc`;get direction(){return this._direction}set direction(t){this._direction=t}_direction=``;disableClear;disabled=!1;sortChange=new Ge;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return``;let a=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,e=Ct(t.start||this.start,a),n=e.indexOf(this.direction)+1;return n>=e.length&&(n=0),e[n]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(a){return new(a||i)(kr(ft,8))};static ɵdir=QE({type:i,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,$j],disabled:[2,`matSortDisabled`,`disabled`,$j]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[iy]})}return i})();function Ct(i,l){let t=[`asc`,`desc`];return i==`desc`&&t.reverse(),l||t.push(``),t}var te=(()=>{class i{_sort=T(Dt,{optional:!0});_columnDef=T(Re,{optional:!0});_changeDetectorRef=T(Hj);_focusMonitor=T(Kt);_elementRef=T(Mr);_ariaDescriber=T(Ll,{optional:!0});_renderChanges;_animationsDisabled=ke();_recentlyCleared=Yo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription=`Sort`;disableClear;constructor(){T(ge).load(Ji);let t=T(ft,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Lg(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),a=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?a:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static ɵfac=function(a){return new(a||i)};static ɵcmp=UE({type:i,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(a,e){a&1&&ih(`click`,function(){return e._toggleOnInteraction()})(`keydown`,function(b){return e._handleKeydown(b)})(`mouseleave`,function(){return e._recentlyCleared.set(null)}),a&2&&(Kp(`aria-sort`,e._getAriaSortAttribute()),gh(`mat-sort-header-disabled`,e._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,$j],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,$j]},exportAs:[`matSortHeader`],ngContentSelectors:vt,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(a,e){a&1&&(kD(St),Xc(0,`div`,0)(1,`div`,1),LD(2),el(),hD(3,xt,3,0,`div`,2),el()),a&2&&(gh(`mat-sort-header-sorted`,e._isSorted())(`mat-sort-header-position-before`,e.arrowPosition===`before`)(`mat-sort-header-descending`,e._sort.direction===`desc`)(`mat-sort-header-ascending`,e._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,e._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,e._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,e._animationsDisabled),Kp(`tabindex`,e._isDisabled()?null:0)(`role`,e._isDisabled()?null:`button`),dI(3),gD(e._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return i})();var ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=WE({type:i});static ɵinj=lu({imports:[W]})}return i})();function Pt(i,l){if(i&1&&(Mi(0,`mat-option`,17),cw(1),Jc()),i&2){let t=l.$implicit;Jp(`value`,t),dI(),rl(` `,t,` `)}}function zt(i,l){if(i&1){let t=CD();Mi(0,`mat-form-field`,14)(1,`mat-select`,16,0),ih(`selectionChange`,function(e){Lu(t);return Pu(OD(2)._changePageSize(e.value))}),vD(3,Pt,2,2,`mat-option`,17,yD),Jc(),Mi(5,`div`,18),ih(`click`,function(){Lu(t);return Pu(HD(2).open())}),Jc()()}if(i&2){let t=OD(2);Jp(`appearance`,t._formFieldAppearance)(`color`,t.color),dI(),Jp(`value`,t.pageSize)(`disabled`,t.disabled),Yp(`aria-labelledby`,t._pageSizeLabelId),Jp(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),dI(2),ID(t._displayedPageSizeOptions)}}function wt(i,l){if(i&1&&(Mi(0,`div`,15),cw(1),Jc()),i&2){let t=OD(2);dI(),wh(t.pageSize)}}function Mt(i,l){if(i&1&&(Mi(0,`div`,3)(1,`div`,13),cw(2),Jc(),hD(3,zt,6,7,`mat-form-field`,14),hD(4,wt,2,1,`div`,15),Jc()),i&2){let t=OD();dI(),Kp(`id`,t._pageSizeLabelId),dI(),rl(` `,t._intl.itemsPerPageLabel,` `),dI(),gD(t._displayedPageSizeOptions.length>1?3:-1),dI(),gD(t._displayedPageSizeOptions.length<=1?4:-1)}}function It(i,l){if(i&1){let t=CD();Mi(0,`button`,19),ih(`click`,function(){Lu(t);let e=OD();return Pu(e._buttonClicked(0,e._previousButtonsDisabled()))}),Qu(),Mi(1,`svg`,8),Xp(2,`path`,20),Jc()()}if(i&2){let t=OD();Jp(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),Kp(`aria-label`,t._intl.firstPageLabel)}}function Tt(i,l){if(i&1){let t=CD();Mi(0,`button`,21),ih(`click`,function(){Lu(t);let e=OD();return Pu(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),Qu(),Mi(1,`svg`,8),Xp(2,`path`,22),Jc()()}if(i&2){let t=OD();Jp(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),Kp(`aria-label`,t._intl.lastPageLabel)}}var Ot=(()=>{class i{changes=new Q;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let n=t*a,b=n<e?Math.min(n+a,e):n+a;return`${n+1} \u2013 ${b} of ${e}`};static ɵfac=function(a){return new(a||i)};static ɵprov=Nr({token:i,factory:i.ɵfac})}return i})();var kt=50;var Nt=new A(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Et=(()=>{class i{_intl=T(Ot);_changeDetectorRef=T(Hj);_formFieldAppearance;_pageSizeLabelId=T(Oe).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new $n(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>Uj(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Ge;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=T(Nt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:n,hidePageSize:b,showFirstLastButtons:H}=a;e!=null&&(this._pageSize=e),n!=null&&(this._pageSizeOptions=n),b!=null&&(this.hidePageSize=b),H!=null&&(this.showFirstLastButtons=H)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:kt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static ɵfac=function(a){return new(a||i)};static ɵcmp=UE({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,Uj],length:[2,`length`,`length`,Uj],pageSize:[2,`pageSize`,`pageSize`,Uj],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,$j],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,$j],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,$j]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(a,e){a&1&&(Mi(0,`div`,1)(1,`div`,2),hD(2,Mt,5,4,`div`,3),Mi(3,`div`,4)(4,`div`,5),cw(5),Jc(),hD(6,It,3,5,`button`,6),Mi(7,`button`,7),ih(`click`,function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),Qu(),Mi(8,`svg`,8),Xp(9,`path`,9),Jc()(),Zu(),Mi(10,`button`,10),ih(`click`,function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),Qu(),Mi(11,`svg`,8),Xp(12,`path`,11),Jc()(),hD(13,Tt,3,5,`button`,12),Jc()()()),a&2&&(dI(2),gD(e.hidePageSize?-1:2),dI(3),rl(` `,e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length),` `),dI(),gD(e.showFirstLastButtons?6:-1),dI(),Jp(`matTooltip`,e._intl.previousPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Kp(`aria-label`,e._intl.previousPageLabel),dI(3),Jp(`matTooltip`,e._intl.nextPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Kp(`aria-label`,e._intl.nextPageLabel),dI(3),gD(e.showFirstLastButtons?13:-1))},dependencies:[Zd,Ir,Wl,qm,Mp],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return i})();var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=WE({type:i});static ɵinj=lu({imports:[fw,Br,wE,Et]})}return i})();export{te as a,ee as i,Et as n,Se as r,Dt as t};