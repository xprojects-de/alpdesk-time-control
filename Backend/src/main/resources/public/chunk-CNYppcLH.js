import{$n as jD,$r as wr,B as Hv,En as bg,Fn as dr,G as JE,Gr as uh,Gt as Vw,J as Jp,Jr as uu,K as Jc,Kt as WE,Lt as Uj,N as Gp,Nn as dI,Nt as Ty,O as G,Ot as Sg,Pr as rh,Pt as UE,Rr as sh,St as QE,Tt as Rg,Un as gD,Ur as tn,Xr as vw,Zn as iy,Zt as Xa,a as $n,ai as yg,an as Yo,br as oe,c as A,d as Bj,dr as lh,et as LD,f as Bn,ir as kD,jr as qp,k as Ge$1,kt as T,li as zl,mr as mh,oi as z,ot as Mi,pt as Nr,qn as hD,st as Mr,ti as xg,tr as jh,tt as Lg,u as Bi,ut as Ng,vt as Pg,wt as Re,x as FD,xr as oh,xt as Q$1,y as Ee$1,z as Hn,zr as ss}from"./chunk-DX9tseHx.js";import{An as tt$1,At as cd,Bn as yC,Bt as ft,Et as as,F as NC,Fn as vt,L as Nd,Ln as we,M as Md,Mt as cs,N as Mm,Pt as dd,Rn as wl,St as Zf,Un as yr,Vn as yd,Wt as gs,Xt as jl,b as H,fn as oi,ft as Vl,g as Fm,jn as ud,k as Le,ln as nt$1,m as Eo,nn as ls,q as Pn,qt as ii,v as Gi,wn as re,wt as _s,zn as xr}from"./chunk-CmjjVoXL.js";var ri=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var li=[`caption`,`colgroup, col`,`*`];function ci(i,o){i&1&&LD(0,2)}function di(i,o){i&1&&(Mi(0,`thead`,0),rh(1,1),Jc(),Mi(2,`tbody`,0),rh(3,2)(4,3),Jc(),Mi(5,`tfoot`,0),rh(6,4),Jc())}function hi(i,o){i&1&&rh(0,1)(1,2)(2,3)(3,4)}var F=new A(`CDK_TABLE`);var Fe=(()=>{class i{template=T(wr);static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var Oe=(()=>{class i{template=T(wr);static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var zt=(()=>{class i{template=T(wr);static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var te=(()=>{class i{_table=T(F,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,a){if(t&1&&lh(a,Fe,5)(a,Oe,5)(a,zt,5),t&2){let s;FD(s=jD())&&(n.cell=s.first),FD(s=jD())&&(n.headerCell=s.first),FD(s=jD())&&(n.footerCell=s.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,Uj],stickyEnd:[2,`stickyEnd`,`stickyEnd`,Uj]}})}return i})();var Te=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var Ht=(()=>{class i extends Te{constructor(){super(T(te),T(Mr))}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[qp]})}return i})();var Vt=(()=>{class i extends Te{constructor(){let e=T(te),t=T(Mr);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[qp]})}return i})();var Qe=(()=>{class i{template=T(wr);_differs=T(Vw);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof de?e.headerCell.template:this instanceof We?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,features:[iy]})}return i})();var de=(()=>{class i extends Qe{_table=T(F,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,Uj]},features:[qp,iy]})}return i})();var We=(()=>{class i extends Qe{_table=T(F,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,Uj]},features:[qp,iy]})}return i})();var Ae=(()=>{class i extends Qe{_table=T(F,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[qp]})}return i})();var U=(()=>{class i{_viewContainer=T(Bi);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var Ge=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=UE({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&rh(0,0)},dependencies:[U],encapsulation:2,changeDetection:1})}return i})();var qe=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=UE({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&rh(0,0)},dependencies:[U],encapsulation:2,changeDetection:1})}return i})();var Ut=(()=>{class i{templateRef=T(wr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var Lt=[`top`,`bottom`,`left`,`right`];var Ve=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,a,s,r){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=a,this._positionListener=s,this._tableInjector=r,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Hv({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,a=!0){if(!o.length||!this._isBrowser||!(e.some(b=>b)||t.some(b=>b))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=o[0],r=s.children.length,c=this.direction===`rtl`,d=c?`right`:`left`,u=c?`left`:`right`,p=e.lastIndexOf(!0),g=t.indexOf(!0),_,ot,at;a&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),Hv({earlyRead:()=>{_=this._getCellWidths(s,n),ot=this._getStickyStartColumnPositions(_,e),at=this._getStickyEndColumnPositions(_,t)},write:()=>{for(let b of o)for(let w=0;w<r;w++){let st=b.children[w];e[w]&&this._addStickyStyle(st,d,ot[w],w===p),t[w]&&this._addStickyStyle(st,u,at[w],w===g)}this._positionListener&&_.some(b=>!!b)&&(this._positionListener.stickyColumnsUpdated({sizes:p===-1?[]:_.slice(0,p+1).map((b,w)=>e[w]?b:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:_.slice(g).map((b,w)=>t[w+g]?b:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t===`bottom`?o.slice().reverse():o,a=t===`bottom`?e.slice().reverse():e,s=[],r=[],c=[];Hv({earlyRead:()=>{for(let d=0,u=0;d<n.length;d++){if(!a[d])continue;s[d]=u;let p=n[d];c[d]=this._isNativeHtmlTable?Array.from(p.children):[p];let g=this._retrieveElementSize(p).height;u+=g,r[d]=g}},write:()=>{let d=a.lastIndexOf(!0);for(let u=0;u<n.length;u++){if(!a[u])continue;let p=s[u],g=u===d;for(let _ of c[u])this._addStickyStyle(_,t,p,g)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:r,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:r,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&Hv({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]=``,o.classList.remove(this._borderCellCss[n]);Lt.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of Lt)o.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let a=0;a<n.length;a++){let s=n[a];t.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let a=0;a<o.length;a++)e[a]&&(t[a]=n,n+=o[a]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let a=o.length;a>0;a--)e[a]&&(t[a]=n,n+=o[a]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:`border-box`})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&ui(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ui(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>i.classList.contains(o))}function Bt(i){return Error(`Could not find column with id "${i}".`)}var ce=new A(`STICKY_POSITIONING_LISTENER`);var $e=(()=>{class i{viewContainer=T(Bi);elementRef=T(Mr);constructor(){let e=T(F);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var Ke=(()=>{class i{viewContainer=T(Bi);elementRef=T(Mr);constructor(){let e=T(F);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var Ye=(()=>{class i{viewContainer=T(Bi);elementRef=T(Mr);constructor(){let e=T(F);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var Ze=(()=>{class i{viewContainer=T(Bi);elementRef=T(Mr);constructor(){let e=T(F);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var Xe=(()=>{class i{_differs=T(Vw);_changeDetectorRef=T(Bj);_elementRef=T(Mr);_dir=T(nt$1,{optional:!0});_platform=T(H);_viewRepeater;_viewportRuler=T(vt);_injector=T(Ee$1);_virtualScrollViewport=T(yC,{optional:!0,host:!0});_positionListener=T(ce,{optional:!0})||T(ce,{optional:!0,skipSelf:!0});_document=T(dr);_data;_renderedRange;_onDestroy=new Q$1;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Q$1;_footerRowStickyUpdates=new Q$1;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Q$1;_dataStream=new Q$1;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ge$1;viewChange=new Bn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){T(new jh(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(bg(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new cd:new dd,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Mm(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,a,s)=>this._getEmbeddedViewArgs(n.item,s),n=>n.item.data,n=>{n.operation===ft.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let a=t.get(n.currentIndex);a.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=jt(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=jt(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,s)=>{this._addStickyColumnStyles([a],this._headerRowDefs[s])}),this._rowDefs.forEach(a=>{let s=[];for(let r=0;r<t.length;r++)this._renderRows[r].rowDef===a&&s.push(t[r]);this._addStickyColumnStyles(s,a)}),n.forEach((a,s)=>{this._addStickyColumnStyles([a],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let s=this._data[a],r=this._getRenderRowsForData(s,a,n.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<r.length;c++){let d=r[c],u=this._cachedRenderRowsMap.get(d.data);u.has(d.rowDef)?u.get(d.rowDef).push(d):u.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(s=>{let r=n&&n.has(s)?n.get(s):[];if(r.length){let c=r.shift();return c.dataIndex=t,c}else return{data:e,rowDef:s,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),xe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=xe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=xe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=xe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,r)=>{let c=!!r.getColumnsDiff();return s||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||n||a}_switchDataSource(e){this._data=[],Mm(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Mm(this.dataSource)?e=this.dataSource.connect(this):xg(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ss(this.dataSource)),this._renderChangeSubscription=yg([e,this.viewChange]).pipe(bg(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(r=>{let c=this._columnDefsByName.get(r);if(!c)throw Bt(r);return c}),a=n.map(r=>r.sticky),s=n.map(r=>r.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let a=e.viewContainer.get(n);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;a&&n.push(a)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,a={$implicit:e.data};return{templateRef:n.template,context:a,index:t}}_renderRow(e,t,n,a={}){let s=e.viewContainer.createEmbeddedView(t.template,a,n);return this._renderCellTemplateForItem(t,a),s}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))U.mostRecentCellOutlet&&U.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let s=e.get(t).context;s.count=n,s.first=t===0,s.last=t===n-1,s.even=t%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[t].dataIndex,s.renderIndex=t):s.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);if(!n)throw Bt(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Ve(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:ss()).pipe(bg(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Sg:Ng;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Pg(0,t),bg(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,a)=>this._measureRangeSize(n,a)}),yg([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(bg(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let s=0;s<a.elements.length;s++){let r=a.elements[s];if(r){let c=a.offsets[s],d=n!==0?Math.max(n-c,c):-c;for(let u of r)u.style.top=`${-d}px`}}}),yg([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(bg(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let s=0;s<a.elements.length;s++){let r=a.elements[s];if(r)for(let c of r)c.style.bottom=`${n+a.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let a=n.createEmbeddedView(e.templateRef),s=a.rootNodes[0];if(a.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute(`role`,`row`),s.classList.add(...e._contentClassNames);let r=s.querySelectorAll(e._cellSelector);for(let c=0;c<r.length;c++)r[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let s=e.start-n.start,r=e.end-e.start,c,d;for(let g=0;g<r;g++){let _=a.get(g+s);if(_&&_.rootNodes.length){c=d=_.rootNodes[0];break}}for(let g=r-1;g>-1;g--){let _=a.get(g+s);if(_&&_.rootNodes.length){d=_.rootNodes[_.rootNodes.length-1];break}}let u=c?.getBoundingClientRect?.(),p=d?.getBoundingClientRect?.();return u&&p?p.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=UE({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,n,a){if(t&1&&lh(a,Ut,5)(a,te,5)(a,Ae,5)(a,de,5)(a,We,5),t&2){let s;FD(s=jD())&&(n._noDataRow=s.first),FD(s=jD())&&(n._contentColumnDefs=s),FD(s=jD())&&(n._contentRowDefs=s),FD(s=jD())&&(n._contentHeaderRowDefs=s),FD(s=jD())&&(n._contentFooterRowDefs=s)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,n){t&2&&mh(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,Uj],fixedLayout:[2,`fixedLayout`,`fixedLayout`,Uj],recycleRows:[2,`recycleRows`,`recycleRows`,Uj]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[vw([{provide:F,useExisting:i},{provide:ce,useValue:null}])],ngContentSelectors:li,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(kD(ri),LD(0),LD(1,1),hD(2,ci,1,0),hD(3,di,7,0)(4,hi,4,0)),t&2&&(dI(2),gD(n._isServer?2:-1),dI(),gD(n._isNativeHtmlTable?3:4))},dependencies:[Ke,$e,Ze,Ye],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function xe(i,o){return i.concat(Array.from(o))}function jt(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var Qt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=WE({type:i});static ɵinj=uu({imports:[ls]})}return i})();var fi=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var mi=[`caption`,`colgroup, col`,`*`];function pi(i,o){i&1&&LD(0,2)}function gi(i,o){i&1&&(Mi(0,`thead`,0),rh(1,1),Jc(),Mi(2,`tbody`,2),rh(3,3)(4,4),Jc(),Mi(5,`tfoot`,0),rh(6,5),Jc())}function _i(i,o){i&1&&rh(0,1)(1,3)(2,4)(3,5)}var mn=(()=>{class i extends Xe{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵcmp=UE({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,n){t&2&&mh(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[vw([{provide:Xe,useExisting:i},{provide:F,useExisting:i},{provide:ce,useValue:null}]),qp],ngContentSelectors:mi,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(kD(fi),LD(0),LD(1,1),hD(2,pi,1,0),hD(3,gi,7,0)(4,_i,4,0)),t&2&&(dI(2),gD(n._isServer?2:-1),dI(),gD(n._isNativeHtmlTable?3:4))},dependencies:[Ke,$e,Ze,Ye],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return i})();var pn=(()=>{class i extends Fe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matCellDef`,``]],features:[vw([{provide:Fe,useExisting:i}]),qp]})}return i})();var gn=(()=>{class i extends Oe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[vw([{provide:Oe,useExisting:i}]),qp]})}return i})();var _n=(()=>{class i extends te{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[vw([{provide:te,useExisting:i}]),qp]})}return i})();var yn=(()=>{class i extends Ht{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[qp]})}return i})();var Cn=(()=>{class i extends Vt{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[qp]})}return i})();var wn=(()=>{class i extends de{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,Uj]},features:[vw([{provide:de,useExisting:i}]),qp]})}return i})();var Dn=(()=>{class i extends Ae{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[vw([{provide:Ae,useExisting:i}]),qp]})}return i})();var vn=(()=>{class i extends Ge{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵcmp=UE({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[vw([{provide:Ge,useExisting:i}]),qp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&rh(0,0)},dependencies:[U],encapsulation:2,changeDetection:1})}return i})();var bn=(()=>{class i extends qe{static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵcmp=UE({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[vw([{provide:qe,useExisting:i}]),qp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&rh(0,0)},dependencies:[U],encapsulation:2,changeDetection:1})}return i})();var Rn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=WE({type:i});static ɵinj=uu({imports:[Qt,re]})}return i})();var yi=9007199254740991;var Wt=class extends as{_data;_renderData=new Bn([]);_filter=new Bn(``);_internalPageChanges=new Q$1;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(wl(t)){let n=Number(t);return n<yi?n:t}return t};sortData=(o,e)=>{let t=e.active,n=e.direction;return!t||n==``?o:o.sort((a,s)=>{let r=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(s,t),d=typeof r,u=typeof c;d!==u&&(d===`number`&&(r+=``),u===`number`&&(c+=``));let p=0;return r!=null&&c!=null?r>c?p=1:r<c&&(p=-1):r!=null?p=1:c!=null&&(p=-1),p*(n==`asc`?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(n=>`${n}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new Bn(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?Lg(this._sort.sortChange,this._sort.initialized):ss(null),e=this._paginator?Lg(this._paginator.page,this._internalPageChanges,this._paginator.initialized):ss(null),t=this._data,s=yg([yg([yg([t,this._filter]).pipe(oe(([r])=>this._filterData(r))),o]).pipe(oe(([r])=>this._orderData(r))),e]).pipe(oe(([r])=>this._pageData(r)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=s.subscribe(r=>this._renderData.next(r))}_filterData(o){return this.filteredData=this.filter==null||this.filter===``?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};function Ci(i,o){}var j=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var et=(()=>{class i extends yr{_elementRef=T(Mr);_focusTrapFactory=T(jl);_config;_interactivityChecker=T(Vl);_ngZone=T(Re);_focusMonitor=T(Gi);_renderer=T(Xa);_changeDetectorRef=T(Bj);_injector=T(Ee$1);_platform=T(H);_document=T(dr);_portalOutlet;_focusTrapped=new Q$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=T(j,{optional:!0})||new j,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,n),s=this._renderer.listen(e,`mousedown`,n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Hv(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let n=Eo(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Eo();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Eo()))}static ɵfac=function(t){return new(t||i)};static ɵcmp=UE({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,n){if(t&1&&uh(NC,7),t&2){let a;FD(a=jD())&&(n._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,n){t&2&&Jp(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[qp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&Gp(0,Ci,0,0,`ng-template`,0)},dependencies:[NC],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})();var Q=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Q$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!tt$1(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var wi=new A(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=T(Ee$1);return()=>yd(i)}});var Di=new A(`DialogData`);var vi=new A(`DefaultDialogConfig`);function bi(i){let o=Yo(i),e=new Ge$1;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var tt=(()=>{class i{_injector=T(Ee$1);_defaultOptions=T(vi,{optional:!0});_parentDialog=T(i,{optional:!0,skipSelf:!0});_overlayContainer=T(Nd);_idGenerator=T(we);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q$1;_afterOpenedAtThisLevel=new Q$1;_ariaHiddenElements=new Map;_scrollStrategy=T(wi);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zl(void 0)));open(e,t){t=G(G({},this._defaultOptions||new j),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),s=gs(this._injector,a),r=new Q(s,t),c=this._attachContainer(s,r,t);if(r.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(tn(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,r,c,t),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){Je(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Je(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Je(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new oi({positionStrategy:e.positionStrategy||Md().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,s=[{provide:j,useValue:n},{provide:Q,useValue:t},{provide:xr,useValue:e}],r;n.container?typeof n.container==`function`?r=n.container:(r=n.container.type,s.push(...n.container.providers(n))):r=et;let c=new cs(r,n.viewContainerRef,Ee$1.create({parent:a||this._injector,providers:s}));return e.attach(c).instance}_attachDialogContent(e,t,n,a){if(e instanceof wr){let s=this._createInjector(a,t,n,void 0),r={$implicit:a.data,dialogRef:t};a.templateContext&&(r=G(G({},r),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),n.attachTemplatePortal(new ii(e,null,r,s))}else{let s=this._createInjector(a,t,n,this._injector),r=n.attachComponentPortal(new cs(e,a.viewContainerRef,s,null,a.bindings));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,n,a){let s=e.injector||e.viewContainerRef?.injector,r=[{provide:Di,useValue:e.data},{provide:Q,useValue:t}];return e.providers&&(typeof e.providers==`function`?r.push(...e.providers(t,e,n)):r.push(...e.providers)),e.direction&&(!s||!s.get(nt$1,null,{optional:!0}))&&r.push({provide:nt$1,useValue:bi(e.direction)}),Ee$1.create({parent:s||a,providers:r})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,s)=>{a?s.setAttribute(`aria-hidden`,a):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||i)};static ɵprov=Nr({token:i,factory:i.ɵfac})}return i})();function Je(i,o){let e=i.length;for(;e--;)o(i[e])}var qt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=WE({type:i});static ɵinj=uu({providers:[tt],imports:[_s,ud,Zf,ud]})}return i})();function Ri(i,o){}var Ee=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var it=`mdc-dialog--open`;var $t=`mdc-dialog--opening`;var Kt=`mdc-dialog--closing`;var Si=150;var ki=75;var xi=(()=>{class i extends et{_animationStateChanged=new Ge$1;_animationsEnabled=!Le();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Zt(this._config.enterAnimationDuration)??Si:0;_exitAnimationDuration=this._animationsEnabled?Zt(this._config.exitAnimationDuration)??ki:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Yt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($t,it)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(it),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(it),this._animationsEnabled?(this._hostElement.style.setProperty(Yt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Kt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove($t,Kt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵcmp=UE({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(oh(`id`,n._config.id),Jp(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),mh(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[qp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(Mi(0,`div`,0)(1,`div`,1),Gp(2,Ri,0,0,`ng-template`,2),Jc()())},dependencies:[NC],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return i})();var Yt=`--mat-dialog-transition-duration`;function Zt(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?Pn(i.substring(0,i.length-2)):i.endsWith(`s`)?Pn(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var Ne=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(Ne||{});var he=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n(1);_beforeClosed=new $n(1);_result;_closeFallbackTimeout;_state=Ne.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Hn(n=>n.state===`opened`),tn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Hn(n=>n.state===`closed`),tn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Lg(this.backdropClick(),this.keydownEvents().pipe(Hn(n=>n.keyCode===27&&!this.disableClose&&!tt$1(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Xt(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(Hn(t=>t.state===`closing`),tn(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ne.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Ne.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Xt(i,o,e){return i._closeInteractionType=o,i.close(e)}var Ti=new A(`MatMdcDialogData`);var Fi=new A(`mat-mdc-dialog-default-options`);var Oi=new A(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=T(Ee$1);return()=>yd(i)}});var nt=(()=>{class i{_defaultOptions=T(Fi,{optional:!0});_scrollStrategy=T(Oi);_parentDialog=T(i,{optional:!0,skipSelf:!0});_idGenerator=T(we);_injector=T(Ee$1);_dialog=T(tt);_animationsDisabled=Le();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Q$1;_afterOpenedAtThisLevel=new Q$1;dialogConfigClass=Ee;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Rg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zl(void 0)));constructor(){this._dialogRefConstructor=he,this._dialogContainerType=xi,this._dialogDataToken=Ti}open(e,t){let n;t=G(G({},this._defaultOptions||new Ee),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,z(G({},t),{positionStrategy:Md(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:j,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(s,r,c)=>(n=new this._dialogRefConstructor(s,t,c),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:Q,useValue:null}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||i)};static ɵprov=Nr({token:i,factory:i.ɵfac})}return i})();var uo=(()=>{class i{dialogRef=T(he,{optional:!0});_elementRef=T(Mr);_dialog=T(nt);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ei(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&Xt(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,n){t&1&&sh(`click`,function(s){return n._onButtonClick(s)}),t&2&&Jp(`aria-label`,n.ariaLabel||null)(`type`,n.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[iy]})}return i})();var Jt=(()=>{class i{_dialogRef=T(he,{optional:!0});_elementRef=T(Mr);_dialog=T(nt);ngOnInit(){this._dialogRef||(this._dialogRef=ei(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i})}return i})();var fo=(()=>{class i extends Jt{id=T(we).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,n){t&2&&oh(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[qp]})}return i})();var mo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=QE({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[JE([Fm])]})}return i})();var po=(()=>{class i extends Jt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ty(i)))(n||i)}})();static ɵdir=QE({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,n){t&2&&mh(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[qp]})}return i})();function ei(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var go=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=WE({type:i});static ɵinj=uu({providers:[nt],imports:[qt,_s,ud,re]})}return i})();export{te as _,Wt as a,wn as b,fo as c,he as d,mn as f,po as g,pn as h,Ti as i,gn as l,nt as m,Dn as n,_n as o,mo as p,Rn as r,bn as s,Cn as t,go as u,uo as v,yn as x,vn as y};