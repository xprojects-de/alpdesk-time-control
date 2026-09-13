import{At as Re$1,B as Hv,Bt as Ty,C as Fh,Ct as Pu,D as G,F as HD,Fn as cw,Ft as Sg,G as JE,Gr as tn,In as dI,Ir as rh,It as T,Jn as gh,K as Jc,Kn as gD,Kt as Up,L as Hj,Lr as rl,Nn as ch,O as Ge,Qr as vw,Rn as dr,Sn as _g,Sr as nh,Tr as oe,Tt as QE,Vr as ss,Vt as UE,Wt as Uj,X as KD,Xn as hD,Xt as Vw,Y as Jp,Zt as WE,_ as Dg,a as $n$1,c as A,ci as z,cn as Xp,ct as Mr,dn as Yo,ei as wg,er as ih,et as Kp,f as Bn$1,gr as lu,gt as OD,in as Xa,it as Lu,j as Gl,jt as Rg,kt as Qu,mr as lh,mt as Nr,nt as Lg,ot as Mg,p as CD,r as $j,ri as wr,rr as jD,sr as kD,st as Mi,ti as wh,tn as Wp,tr as iy,tt as LD,u as Bi$1,vr as mg,wt as Q,x as FD,y as Ee$1,yt as Pg,z as Hn}from"./chunk-CMzlWkMW.js";import{A as Kt,At as bs,B as Nl,Ct as Zx,Dn as ti,Et as ah,Fn as uw,Ft as dd,G as Oe,Gt as hl,H as Ns,Ht as fw,It as dp,Jt as iu,Kn as yd,Ln as vo,Lt as ds,Mt as cC,Nn as us,On as tt$1,P as Md,Pt as cn$1,Sn as ru,Tn as ss$1,Un as ws,V as Nr$1,Vt as fp,Wt as gs,Yn as yt$1,Zt as ke,_ as Es,b as Gf,cn as nC,ct as Tr,d as Cs,dn as nt$1,dt as US,et as Qn$1,g as Eo,gn as qn$1,gt as W,i as Al,in as lh$1,it as Sr,jn as ud,jt as bt$1,kn as tu,kt as bp,mn as os,mt as V$1,p as Do,qn as ye,qt as ii,rn as lS,sn as mt,u as Co,vt as Wl,wn as si,x as HS,yn as ri,z as Nd,zn as vs,zt as ei}from"./chunk-ZMC-HYpb.js";var nn=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var an=[`caption`,`colgroup, col`,`*`];function on(n,o){n&1&&LD(0,2)}function rn(n,o){n&1&&(Mi(0,`thead`,0),nh(1,1),Jc(),Mi(2,`tbody`,0),nh(3,2)(4,3),Jc(),Mi(5,`tfoot`,0),nh(6,4),Jc())}function sn(n,o){n&1&&nh(0,1)(1,2)(2,3)(3,4)}var V=new A(`CDK_TABLE`);var Je=(()=>{class n{template=T(wr);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var et=(()=>{class n{template=T(wr);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Ni=(()=>{class n{template=T(wr);static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var Re=(()=>{class n{_table=T(V,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,a){if(t&1&&ch(a,Je,5)(a,et,5)(a,Ni,5),t&2){let r;FD(r=jD())&&(i.cell=r.first),FD(r=jD())&&(i.headerCell=r.first),FD(r=jD())&&(i.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,$j],stickyEnd:[2,`stickyEnd`,`stickyEnd`,$j]}})}return n})();var Ze=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var Ii=(()=>{class n extends Ze{constructor(){super(T(Re),T(Mr))}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Up]})}return n})();var Bi=(()=>{class n extends Ze{constructor(){let e=T(Re),t=T(Mr);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Up]})}return n})();var gt=(()=>{class n{template=T(wr);_differs=T(Vw);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ee?e.headerCell.template:this instanceof yt?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,features:[iy]})}return n})();var Ee=(()=>{class n extends gt{_table=T(V,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,$j]},features:[Up,iy]})}return n})();var yt=(()=>{class n extends gt{_table=T(V,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,$j]},features:[Up,iy]})}return n})();var tt=(()=>{class n extends gt{_table=T(V,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Up]})}return n})();var pe=(()=>{class n{_viewContainer=T(Bi$1);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var vt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&nh(0,0)},dependencies:[pe],encapsulation:2,changeDetection:1})}return n})();var bt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&nh(0,0)},dependencies:[pe],encapsulation:2,changeDetection:1})}return n})();var Pi=(()=>{class n{templateRef=T(wr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Ai=[`top`,`bottom`,`left`,`right`];var _t=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,i=!0,a,r,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let i of o)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));Hv({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,i=!0,a=!0){if(!o.length||!this._isBrowser||!(e.some(P=>P)||t.some(P=>P))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=o[0],l=r.children.length,c=this.direction===`rtl`,h=c?`right`:`left`,u=c?`left`:`right`,b=e.lastIndexOf(!0),S=t.indexOf(!0),R,Ft,Nt;a&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),Hv({earlyRead:()=>{R=this._getCellWidths(r,i),Ft=this._getStickyStartColumnPositions(R,e),Nt=this._getStickyEndColumnPositions(R,t)},write:()=>{for(let P of o)for(let E=0;E<l;E++){let It=P.children[E];e[E]&&this._addStickyStyle(It,h,Ft[E],E===b),t[E]&&this._addStickyStyle(It,u,Nt[E],E===S)}this._positionListener&&R.some(P=>!!P)&&(this._positionListener.stickyColumnsUpdated({sizes:b===-1?[]:R.slice(0,b+1).map((P,E)=>e[E]?P:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:S===-1?[]:R.slice(S).map((P,E)=>t[E+S]?P:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let i=t===`bottom`?o.slice().reverse():o,a=t===`bottom`?e.slice().reverse():e,r=[],l=[],c=[];Hv({earlyRead:()=>{for(let h=0,u=0;h<i.length;h++){if(!a[h])continue;r[h]=u;let b=i[h];c[h]=this._isNativeHtmlTable?Array.from(b.children):[b];let S=this._retrieveElementSize(b).height;u+=S,l[h]=S}},write:()=>{let h=a.lastIndexOf(!0);for(let u=0;u<i.length;u++){if(!a[u])continue;let b=r[u],S=u===h;for(let R of c[u])this._addStickyStyle(R,t,b,S)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&Hv({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let i of e)o.style[i]=``,o.classList.remove(this._borderCellCss[i]);Ai.some(i=>e.indexOf(i)===-1&&o.style[i])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,i){o.classList.add(this._stickCellCss),i&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Ai)o.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=o.children;for(let a=0;a<i.length;a++){let r=i[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],i=0;for(let a=0;a<o.length;a++)e[a]&&(t[a]=i,i+=o[a]);return t}_getStickyEndColumnPositions(o,e){let t=[],i=0;for(let a=o.length;a>0;a--)e[a]&&(t[a]=i,i+=o[a]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,i),this._resizeObserver.observe(o,{box:`border-box`})),i}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&ln(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ln(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>n.classList.contains(o))}function Ei(n){return Error(`Could not find column with id "${n}".`)}var Te=new A(`STICKY_POSITIONING_LISTENER`);var Ct=(()=>{class n{viewContainer=T(Bi$1);elementRef=T(Mr);constructor(){let e=T(V);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var wt=(()=>{class n{viewContainer=T(Bi$1);elementRef=T(Mr);constructor(){let e=T(V);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Dt=(()=>{class n{viewContainer=T(Bi$1);elementRef=T(Mr);constructor(){let e=T(V);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var kt=(()=>{class n{viewContainer=T(Bi$1);elementRef=T(Mr);constructor(){let e=T(V);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var St=(()=>{class n{_differs=T(Vw);_changeDetectorRef=T(Hj);_elementRef=T(Mr);_dir=T(nt$1,{optional:!0});_platform=T(V$1);_viewRepeater;_viewportRuler=T(cn$1);_injector=T(Ee$1);_virtualScrollViewport=T(nC,{optional:!0,host:!0});_positionListener=T(Te,{optional:!0})||T(Te,{optional:!0,skipSelf:!0});_document=T(dr);_data;_renderedRange;_onDestroy=new Q;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Q;_footerRowStickyUpdates=new Q;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Q;_dataStream=new Q;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ge;viewChange=new Bn$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){T(new Fh(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(wg(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new dd:new iu,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),dp(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,a,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===mt.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let a=t.get(i.currentIndex);a.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Fi(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Fi(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),i.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let c=0;c<l.length;c++){let h=l[c],u=this._cachedRenderRowsMap.get(h.data);u.has(h.rowDef)?u.get(h.rowDef).push(h):u.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let l=i&&i.has(r)?i.get(r):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Xe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Xe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Xe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Xe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let c=!!l.getColumnsDiff();return r||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||i||a}_switchDataSource(e){this._data=[],dp(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;dp(this.dataSource)?e=this.dataSource.connect(this):Sg(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ss(this.dataSource)),this._renderChangeSubscription=mg([e,this.viewChange]).pipe(wg(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);if(!c)throw Ei(l);return c}),a=i.map(l=>l.sticky),r=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let a=e.viewContainer.get(i);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&i.push(a)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,a={$implicit:e.data};return{templateRef:i.template,context:a,index:t}}_renderRow(e,t,i,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,i);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))pe.mostRecentCellOutlet&&pe.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);if(!i)throw Ei(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new _t(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:ss()).pipe(wg(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Mg:_g;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Pg(0,t),wg(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,a)=>this._measureRangeSize(i,a)}),mg([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(wg(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let c=a.offsets[r],h=i!==0?Math.max(i-c,c):-c;for(let u of l)u.style.top=`${-h}px`}}}),mg([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(wg(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let c of l)c.style.bottom=`${i+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let a=i.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let r=e.start-i.start,l=e.end-e.start,c,h;for(let S=0;S<l;S++){let R=a.get(S+r);if(R&&R.rootNodes.length){c=h=R.rootNodes[0];break}}for(let S=l-1;S>-1;S--){let R=a.get(S+r);if(R&&R.rootNodes.length){h=R.rootNodes[R.rootNodes.length-1];break}}let u=c?.getBoundingClientRect?.(),b=h?.getBoundingClientRect?.();return u&&b?b.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,i,a){if(t&1&&ch(a,Pi,5)(a,Re,5)(a,tt,5)(a,Ee,5)(a,yt,5),t&2){let r;FD(r=jD())&&(i._noDataRow=r.first),FD(r=jD())&&(i._contentColumnDefs=r),FD(r=jD())&&(i._contentRowDefs=r),FD(r=jD())&&(i._contentHeaderRowDefs=r),FD(r=jD())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,i){t&2&&gh(`cdk-table-fixed-layout`,i.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,$j],fixedLayout:[2,`fixedLayout`,`fixedLayout`,$j],recycleRows:[2,`recycleRows`,`recycleRows`,$j]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[vw([{provide:V,useExisting:n},{provide:Te,useValue:null}])],ngContentSelectors:an,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(kD(nn),LD(0),LD(1,1),hD(2,on,1,0),hD(3,rn,7,0)(4,sn,4,0)),t&2&&(dI(2),gD(i._isServer?2:-1),dI(),gD(i._isNativeHtmlTable?3:4))},dependencies:[wt,Ct,kt,Dt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Xe(n,o){return n.concat(Array.from(o))}function Fi(n,o){let e=o.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var Li=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[us]})}return n})();var cn=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var dn=[`caption`,`colgroup, col`,`*`];function hn(n,o){n&1&&LD(0,2)}function mn(n,o){n&1&&(Mi(0,`thead`,0),nh(1,1),Jc(),Mi(2,`tbody`,2),nh(3,3)(4,4),Jc(),Mi(5,`tfoot`,0),nh(6,5),Jc())}function un(n,o){n&1&&nh(0,1)(1,3)(2,4)(3,5)}var Ba=(()=>{class n extends St{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵcmp=UE({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,i){t&2&&gh(`mat-table-fixed-layout`,i.fixedLayout)},exportAs:[`matTable`],features:[vw([{provide:St,useExisting:n},{provide:V,useExisting:n},{provide:Te,useValue:null}]),Up],ngContentSelectors:dn,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(kD(cn),LD(0),LD(1,1),hD(2,hn,1,0),hD(3,mn,7,0)(4,un,4,0)),t&2&&(dI(2),gD(i._isServer?2:-1),dI(),gD(i._isNativeHtmlTable?3:4))},dependencies:[wt,Ct,kt,Dt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})();var Pa=(()=>{class n extends Je{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`matCellDef`,``]],features:[vw([{provide:Je,useExisting:n}]),Up]})}return n})();var La=(()=>{class n extends et{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[vw([{provide:et,useExisting:n}]),Up]})}return n})();var ja=(()=>{class n extends Re{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[vw([{provide:Re,useExisting:n}]),Up]})}return n})();var za=(()=>{class n extends Ii{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Up]})}return n})();var Ha=(()=>{class n extends Bi{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Up]})}return n})();var Va=(()=>{class n extends Ee{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,$j]},features:[vw([{provide:Ee,useExisting:n}]),Up]})}return n})();var Wa=(()=>{class n extends tt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[vw([{provide:tt,useExisting:n}]),Up]})}return n})();var Qa=(()=>{class n extends vt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵcmp=UE({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[vw([{provide:vt,useExisting:n}]),Up],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&nh(0,0)},dependencies:[pe],encapsulation:2,changeDetection:1})}return n})();var Ua=(()=>{class n extends bt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵcmp=UE({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[vw([{provide:bt,useExisting:n}]),Up],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&nh(0,0)},dependencies:[pe],encapsulation:2,changeDetection:1})}return n})();var qa=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Li,W]})}return n})();var fn=9007199254740991;var ji=class extends ds{_data;_renderData=new Bn$1([]);_filter=new Bn$1(``);_internalPageChanges=new Q;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(hl(t)){let i=Number(t);return i<fn?i:t}return t};sortData=(o,e)=>{let t=e.active,i=e.direction;return!t||i==``?o:o.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(r,t),h=typeof l,u=typeof c;h!==u&&(h===`number`&&(l+=``),u===`number`&&(c+=``));let b=0;return l!=null&&c!=null?l>c?b=1:l<c&&(b=-1):l!=null?b=1:c!=null&&(b=-1),b*(i==`asc`?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(i=>`${i}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new Bn$1(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?Lg(this._sort.sortChange,this._sort.initialized):ss(null),e=this._paginator?Lg(this._paginator.page,this._internalPageChanges,this._paginator.initialized):ss(null),t=this._data,r=mg([mg([mg([t,this._filter]).pipe(oe(([l])=>this._filterData(l))),o]).pipe(oe(([l])=>this._orderData(l))),e]).pipe(oe(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===``?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};function pn(n,o){}var le=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var xt=(()=>{class n extends Sr{_elementRef=T(Mr);_focusTrapFactory=T(Al);_config;_interactivityChecker=T(Nl);_ngZone=T(Re$1);_focusMonitor=T(Kt);_renderer=T(Xa);_changeDetectorRef=T(Hj);_injector=T(Ee$1);_platform=T(V$1);_document=T(dr);_portalOutlet;_focusTrapped=new Q;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=T(le,{optional:!0})||new le,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),r(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,i),r=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Hv(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=vo(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=vo();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=vo()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,i){if(t&1&&lh(cC,7),t&2){let a;FD(a=jD())&&(i._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,i){t&2&&Kp(`id`,i._config.id||null)(`role`,i._config.role)(`aria-modal`,i._config.ariaModal)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null)},features:[Up],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&Wp(0,pn,0,0,`ng-template`,0)},dependencies:[cC],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})();var _e=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Q;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!yt$1(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var _n=new A(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=T(Ee$1);return()=>yd(n)}});var gn=new A(`DialogData`);var yn=new A(`DefaultDialogConfig`);function vn(n){let o=Yo(n),e=new Ge;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Ot=(()=>{class n{_injector=T(Ee$1);_defaultOptions=T(yn,{optional:!0});_parentDialog=T(n,{optional:!0,skipSelf:!0});_overlayContainer=T(Nd);_idGenerator=T(Oe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q;_afterOpenedAtThisLevel=new Q;_ariaHiddenElements=new Map;_scrollStrategy=T(_n);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Gl(void 0)));open(e,t){t=G(G({},this._defaultOptions||new le),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),r=si(this._injector,a),l=new _e(r,t),c=this._attachContainer(r,l,t);if(l.containerInstance=c,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(tn(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Rt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Rt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Rt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ii({positionStrategy:e.positionStrategy||Md().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:le,useValue:i},{provide:_e,useValue:t},{provide:Nr$1,useValue:e}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=xt;let c=new ei(l,i.viewContainerRef,Ee$1.create({parent:a||this._injector,providers:r}));return e.attach(c).instance}_attachDialogContent(e,t,i,a){if(e instanceof wr){let r=this._createInjector(a,t,i,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=G(G({},l),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),i.attachTemplatePortal(new ti(e,null,l,r))}else{let r=this._createInjector(a,t,i,this._injector),l=i.attachComponentPortal(new ei(e,a.viewContainerRef,r,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,a){let r=e.injector||e.viewContainerRef?.injector,l=[{provide:gn,useValue:e.data},{provide:_e,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!r||!r.get(nt$1,null,{optional:!0}))&&l.push({provide:nt$1,useValue:vn(e.direction)}),Ee$1.create({parent:r||a,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute(`aria-hidden`,a):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();function Rt(n,o){let e=n.length;for(;e--;)o(n[e])}var zi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({providers:[Ot],imports:[vs,ud,Co,ud]})}return n})();function bn(n,o){}var at=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Mt=`mdc-dialog--open`;var Hi=`mdc-dialog--opening`;var Vi=`mdc-dialog--closing`;var Cn=150;var wn=75;var Dn=(()=>{class n extends xt{_animationStateChanged=new Ge;_animationsEnabled=!ke();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Qi(this._config.enterAnimationDuration)??Cn:0;_exitAnimationDuration=this._animationsEnabled?Qi(this._config.exitAnimationDuration)??wn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Wi,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Hi,Mt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Mt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Mt),this._animationsEnabled?(this._hostElement.style.setProperty(Wi,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Vi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Hi,Vi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵcmp=UE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,i){t&2&&(rh(`id`,i._config.id),Kp(`aria-modal`,i._config.ariaModal)(`role`,i._config.role)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null),gh(`_mat-animation-noopable`,!i._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,i._actionSectionCount>0))},features:[Up],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(Mi(0,`div`,0)(1,`div`,1),Wp(2,bn,0,0,`ng-template`,2),Jc()())},dependencies:[cC],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return n})();var Wi=`--mat-dialog-transition-duration`;function Qi(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?bt$1(n.substring(0,n.length-2)):n.endsWith(`s`)?bt$1(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var nt=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(nt||{});var ot=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n$1(1);_beforeClosed=new $n$1(1);_result;_closeFallbackTimeout;_state=nt.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Hn(i=>i.state===`opened`),tn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Hn(i=>i.state===`closed`),tn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Lg(this.backdropClick(),this.keydownEvents().pipe(Hn(i=>i.keyCode===27&&!this.disableClose&&!yt$1(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),kn(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(Hn(t=>t.state===`closing`),tn(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=nt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=nt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function kn(n,o,e){return n._closeInteractionType=o,n.close(e)}var Sn=new A(`MatMdcDialogData`);var Rn=new A(`mat-mdc-dialog-default-options`);var xn=new A(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(Ee$1);return()=>yd(n)}});var Ui=(()=>{class n{_defaultOptions=T(Rn,{optional:!0});_scrollStrategy=T(xn);_parentDialog=T(n,{optional:!0,skipSelf:!0});_idGenerator=T(Oe);_injector=T(Ee$1);_dialog=T(Ot);_animationsDisabled=ke();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q;_afterOpenedAtThisLevel=new Q;dialogConfigClass=at;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Gl(void 0)));constructor(){this._dialogRefConstructor=ot,this._dialogContainerType=Dn,this._dialogDataToken=Sn}open(e,t){let i;t=G(G({},this._defaultOptions||new at),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,z(G({},t),{positionStrategy:Md(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:le,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,l,c)=>(i=new this._dialogRefConstructor(r,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:_e,useValue:null}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var qi=(()=>{class n{_dialogRef=T(ot,{optional:!0});_elementRef=T(Mr);_dialog=T(Ui);ngOnInit(){this._dialogRef||(this._dialogRef=On(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n})}return n})();var No=(()=>{class n extends qi{id=T(Oe).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&rh(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Up]})}return n})();var Io=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[JE([fp])]})}return n})();var Bo=(()=>{class n extends qi{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ty(n)))(i||n)}})();static ɵdir=QE({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&gh(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[Up]})}return n})();function On(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var Po=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({providers:[Ui],imports:[zi,vs,ud,W]})}return n})();function Mn(n,o){if(n&1){let e=CD();Mi(0,`div`,1)(1,`button`,2),ih(`click`,function(){Lu(e);return Pu(OD().action())}),cw(2),Jc()()}if(n&2){let e=OD();dI(2),rl(` `,e.data.action,` `)}}var Tn=[`label`];function An(n,o){}var En=Math.pow(2,31)-1;var Fe=class{_overlayRef;instance;containerInstance;_afterDismissed=new Q;_afterOpened=new Q;_onAction=new Q;_durationTimeoutId;_dismissedByAction=!1;constructor(o,e){this._overlayRef=e,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,En))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Gi=new A(`MatSnackBarData`);var xe=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Fn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var Nn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var In=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=QE({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var Ki=(()=>{class n{snackBarRef=T(Fe);data=T(Gi);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(t,i){t&1&&(Mi(0,`div`,0),cw(1),Jc(),hD(2,Mn,3,1,`div`,1)),t&2&&(dI(),rl(` `,i.data.message,`
`),dI(),gD(i.hasAction?2:-1))},dependencies:[uw,Fn,Nn,In],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var Tt=`_mat-snack-bar-enter`;var At=`_mat-snack-bar-exit`;var Bn=(()=>{class n extends Sr{_ngZone=T(Re$1);_elementRef=T(Mr);_changeDetectorRef=T(Hj);_platform=T(V$1);_animationsDisabled=ke();snackBarConfig=T(xe);_document=T(dr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=T(Ee$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Q;_onExit=new Q;_onEnter=new Q;_animationState=`void`;_live;_label;_role;_liveElementId=T(Oe).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===At?this._completeExit():e===Tt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Hv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Tt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Tt)},200)))}exit(){return this._destroyed?ss(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Hv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(At)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(At),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a=`mdc-snackbar__label`;i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute(`aria-owns`,r+` `+e):a.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let i=t.replace(this._liveElementId,``).trim();i.length>0?e.setAttribute(`aria-owns`,i):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),i=e.querySelector(`[aria-live]`);if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute(`aria-hidden`),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(t,i){if(t&1&&lh(cC,7)(Tn,7),t&2){let a;FD(a=jD())&&(i._portalOutlet=a.first),FD(a=jD())&&(i._label=a.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(t,i){t&1&&ih(`animationend`,function(r){return i.onAnimationEnd(r.animationName)})(`animationcancel`,function(r){return i.onAnimationEnd(r.animationName)}),t&2&&gh(`mat-snack-bar-container-enter`,i._animationState===`visible`)(`mat-snack-bar-container-exit`,i._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!i._animationsDisabled)},features:[Up],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(Mi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Wp(4,An,0,0,`ng-template`,4),Jc(),Xp(5,`div`),Jc()()),t&2&&(dI(5),Kp(`aria-live`,i._live)(`role`,i._role)(`id`,i._liveElementId))},dependencies:[cC],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var Pn=new A(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new xe});var Ln=(()=>{class n{_live=T(Gf);_injector=T(Ee$1);_breakpointObserver=T(Do);_parentSnackBar=T(n,{optional:!0,skipSelf:!0});_defaultConfig=T(Pn);_animationsDisabled=ke();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ki;snackBarContainerComponent=Bn;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,i){let a=G(G({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=Ee$1.create({parent:i||this._injector,providers:[{provide:xe,useValue:t}]}),r=new ei(this.snackBarContainerComponent,t.viewContainerRef,a),l=e.attach(r);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let i=G(G(G({},new xe),this._defaultConfig),t),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),l=new Fe(r,a);if(e instanceof wr){let c=new ti(e,null,{$implicit:i.data,snackBarRef:l});l.instance=r.attachTemplatePortal(c)}else{let h=new ei(e,void 0,this._createInjector(i,l));l.instance=r.attachComponentPortal(h).instance}return this._breakpointObserver.observe(lS.HandsetPortrait).pipe(wg(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(l,i),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new ii;t.direction=e.direction;let i=Md(this._injector),a=e.direction===`rtl`,r=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!a||e.horizontalPosition===`end`&&a,l=!r&&e.horizontalPosition!==`center`;return r?i.left(`0`):l?i.right(`0`):i.centerHorizontally(),e.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,si(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Ee$1.create({parent:i||this._injector,providers:[{provide:Fe,useValue:t},{provide:Gi,useValue:e.data}]})}static ɵfac=function(t){return new(t||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var ar=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({providers:[Ln],imports:[vs,ud,fw,Ki,W]})}return n})();var Vn=[`trigger`];var Wn=[`panel`];var Qn=[[[`mat-select-trigger`]],`*`];var Un=[`mat-select-trigger`,`*`];function qn(n,o){if(n&1&&(Mi(0,`span`,4),cw(1),Jc()),n&2){let e=OD();dI(),wh(e.placeholder)}}function Gn(n,o){n&1&&LD(0)}function Kn(n,o){if(n&1&&(Mi(0,`span`,11),cw(1),Jc()),n&2){let e=OD(2);dI(),wh(e.triggerValue)}}function $n(n,o){if(n&1&&(Mi(0,`span`,5),hD(1,Gn,1,0)(2,Kn,2,1,`span`,11),Jc()),n&2){let e=OD();dI(),gD(e.customTrigger?1:2)}}function Yn(n,o){if(n&1){let e=CD();Mi(0,`div`,12,1),ih(`keydown`,function(i){Lu(e);return Pu(OD()._handleKeydown(i))}),LD(2,1),Jc()}if(n&2){let e=OD();KD(e.panelClass),gh(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Kp(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Xn=new A(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T(Ee$1);return()=>ri(n)}});var Zn=new A(`MAT_SELECT_CONFIG`);var Jn=new A(`MatSelectTrigger`);var Et=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Ir=(()=>{class n{_viewportRuler=T(cn$1);_changeDetectorRef=T(Hj);_elementRef=T(Mr);_dir=T(nt$1,{optional:!0});_idGenerator=T(Oe);_renderer=T(Xa);_parentFormField=T(Cs,{optional:!0});ngControl=T(tt$1,{self:!0,optional:!0});_liveAnnouncer=T(Gf);_defaultOptions=T(Zn,{optional:!0});_animationsDisabled=ke();_popoverLocation;_initialized=new Q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=US(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=HS(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Et(this,e)}_scrollStrategyFactory=T(Xn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Q;_errorStateTracker;stateChanges=new Q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Yo(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(qn$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Rg(()=>{let e=this.options;return e?e.changes.pipe(Gl(e),Dg(()=>Lg(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Dg(()=>this.optionSelectionChanges))});openedChange=new Ge;_openedStream=this.openedChange.pipe(Hn(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(Hn(e=>!e),oe(()=>{}));selectionChange=new Ge;valueChange=new Ge;constructor(){let e=T(tu),t=T(os,{optional:!0}),i=T(ss$1,{optional:!0}),a=T(new Fh(`tabindex`),{optional:!0}),r=T(bs,{optional:!0}),l=T(ru,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Tr(e,l||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ns(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(wg(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(wg(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Gl(null),wg(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(tn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!yt$1(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!yt$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yt$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof gs?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Eo(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Lg(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(wg(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Lg(...this.options.map(t=>t._stateChanges)).pipe(wg(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=ye(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&ch(a,Jn,5)(a,Wl,5)(a,lh$1,5),t&2){let r;FD(r=jD())&&(i.customTrigger=r.first),FD(r=jD())&&(i.options=r),FD(r=jD())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&lh(Vn,5)(Wn,5)(bp,5),t&2){let a;FD(a=jD())&&(i.trigger=a.first),FD(a=jD())&&(i.panel=a.first),FD(a=jD())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&ih(`keydown`,function(r){return i._handleKeydown(r)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Kp(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),gh(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,$j],disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Uj(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,$j],placeholder:`placeholder`,required:[2,`required`,`required`,$j],multiple:[2,`multiple`,`multiple`,$j],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,$j],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Uj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,$j]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[vw([{provide:ws,useExisting:n},{provide:ah,useExisting:n}]),iy],ngContentSelectors:Un,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(kD(Qn),Mi(0,`div`,2,0),ih(`click`,function(){return i.open()}),Mi(3,`div`,3),hD(4,qn,2,1,`span`,4)(5,$n,3,1,`span`,5),Jc(),Mi(6,`div`,6)(7,`div`,7),Qu(),Mi(8,`svg`,8),Xp(9,`path`,9),Jc()()()(),Wp(10,Yn,3,16,`ng-template`,10),ih(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(r){return i._handleOverlayKeydown(r)})),t&2){let a=HD(1);dI(3),Kp(`id`,i._valueId),dI(),gD(i.empty?4:5),dI(6),Jp(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[gs,bp],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Br=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[vs,Zx,W,Qn$1,Es,Zx]})}return n})();export{qa as C,ot as S,Va as _,Io as a,ja as b,Ln as c,Po as d,Qa as f,Ui as g,Ua as h,Ha as i,No as l,Sn as m,Bo as n,Ir as o,Re as p,Br as r,La as s,Ba as t,Pa as u,Wa as v,za as w,ji as x,ar as y};