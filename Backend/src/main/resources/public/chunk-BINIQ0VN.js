import{An as bh,At as Re,C as Fh,Cr as nl,Ct as Pu,F as HD,Fn as cw,Gr as tn,H as Ig,Hr as tE,In as dI,Ir as rh,It as T,Jn as gh,Jt as VD,K as Jc,Kn as gD,L as Hj,Ln as dh,Lr as rl,O as Ge,Q as Kc,Qr as vw,Ur as tg,V as ID,Vr as ss,Vt as UE,W as Iw,Wr as tl,Wt as Uj,X as KD,Xn as hD,Xr as vD,Y as Jp,Zt as WE,_ as Dg,c as A,cn as Xp,ct as Mr,dn as Yo,ei as wg,er as ih,et as Kp,g as Cw,gr as lu,gt as OD,h as Co,ii as ww,ir as jg,it as Lu,j as Gl,kt as Qu,m as Ch,mr as lh,p as CD,r as $j,rn as XI,rr as jD,sr as kD,st as Mi$1,ti as wh,tn as Wp,tr as iy,tt as LD,vr as mg,w as Fj,wr as od,wt as Q,x as FD,yn as Zu,zt as Tw}from"./chunk-CMzlWkMW.js";import{$ as Uc,$t as kN,At as cM,Ct as _m,Dn as si,E as IN,F as Lm,Fn as wN,G as Ox,Gt as iC,H as Ne,J as Qu$1,Lt as fp,Mn as uc,Mt as dM,N as Ku,O as JD,On as ss$1,Ot as as,P as LN,Pt as eC,Qt as jt,R as Me,U as ON,Zt as jE,a as BE,bn as qN,ct as WM,d as De,dt as X,f as Dp,gn as oi,gt as Yh,h as Fc,hn as od$1,i as Ax,j as KN,ln as mr,mn as oC,mt as YM,nt as Ut,qt as il,rn as kx,rt as VN,tn as km,u as CN,un as nC,wt as _r,yn as pm,yt as Yt,z as Mr$1}from"./chunk-DY9kXS9g.js";import{r as s,t as l}from"./chunk-BRDflDhi.js";import{C as rt,D as x$1,E as w,I as o,K as m,O as y,Q as S$2,T as u,_ as g,_r as f$1,_t as a,a as F,b as l$1,br as x,c as N,d as S$1,dt as Bt,f as X$1,ft as G$1,g as f,gr as d,gt as Z,h as d$1,hr as S,ht as W,i as C,k as m$1,l as P$1,m as b,mr as P,mt as Lt,n as st,o as G,p as _,pr as L,pt as I,r as A$1,s as J,st as t,t as It,u as Q$1,v as h,vr as m$3,w as s$1,x as m$2,y as i}from"./main-35JTDFTN.js";import{t as e}from"./chunk-B3EQRvcu.js";import{S as zo,_ as ni,a as Lo,b as rn,c as Ui$1,d as Wi$1,f as Zi$1,h as jo,i as Hi$1,l as Un,m as ji$1,n as $i$1,o as Po,p as fn,r as Gi$1,s as Qi$1,t as $e,u as Vi$1,v as qi$1,x as zi$1,y as ra$1}from"./chunk-DSyGbOnU.js";import{n as gt,r as pt,t as W$1}from"./chunk-BXd7xLqD.js";import{t as c}from"./chunk-BKp5IW_V.js";import{t as oe}from"./chunk-BDD5KJax.js";import{t as e$1}from"./chunk-URzOy4iJ.js";import{t as c$1}from"./chunk-Vpo88Svy.js";import{n as qe,r as vt,t as gt$1}from"./chunk-Dz35wVBQ.js";var Se=(n,e)=>e.id;function ui(n,e){if(n&1&&(Mi$1(0,`mat-option`,7),cw(1),Jc()),n&2){let t=e.$implicit,i=OD();Jp(`value`,t),dI(),Ch(` `,t.lastName,` `,t.firstName,` (`,i.formatRaceDate(t.birthDate),``,t.externalId?`, `+t.externalId:``,`) `)}}function hi(n,e){n&1&&(Mi$1(0,`mat-error`),cw(1,`Bitte eine Person auswählen`),Jc())}function bi(n,e){if(n&1&&(Mi$1(0,`mat-option`,7),cw(1),Jc()),n&2){let t=e.$implicit,i=OD();Jp(`value`,t.id),dI(),bh(``,t.name,` (`,i.formatRaceDate(t.date),`)`)}}function _i(n,e){n&1&&(Mi$1(0,`mat-error`),cw(1,`Rennen ist erforderlich`),Jc())}function ki(n,e){if(n&1&&(Mi$1(0,`mat-option`,7),cw(1),Jc()),n&2){let t=e.$implicit;Jp(`value`,t.id),dI(),wh(t.name)}}function fi(n,e){if(n&1&&(Mi$1(0,`mat-option`,7),cw(1),Jc()),n&2){let t=e.$implicit;Jp(`value`,t.id),dI(),wh(t.name)}}function xi(n,e){n&1&&(Mi$1(0,`mat-error`),cw(1,`Sekunden: 0-59`),Jc())}function gi(n,e){n&1&&(Mi$1(0,`mat-error`),cw(1,`Millisekunden: 0-999`),Jc())}function yi(n,e){if(n&1&&(Mi$1(0,`div`,17)(1,`mat-form-field`,4)(2,`mat-label`),cw(3,`Minuten`),Jc(),Xp(4,`input`,18),XI(),Jc(),Mi$1(5,`mat-form-field`,4)(6,`mat-label`),cw(7,`Sekunden`),Jc(),Xp(8,`input`,19),XI(),hD(9,xi,2,0,`mat-error`),Jc(),Mi$1(10,`mat-form-field`,4)(11,`mat-label`),cw(12,`Millisekunden`),Jc(),Xp(13,`input`,20),XI(),hD(14,gi,2,0,`mat-error`),Jc()(),Mi$1(15,`mat-form-field`,4)(16,`mat-label`),cw(17,`Strafe (Sekunden)`),Jc(),Xp(18,`input`,21),XI(),Mi$1(19,`mat-hint`),cw(20,`Wird zur Zeit addiert; leer lassen, wenn keine Strafe`),Jc()()),n&2){let t=OD();dI(4),tE(),dI(4),tE(),dI(),gD(t.form.get(`seconds`)?.hasError(`min`)||t.form.get(`seconds`)?.hasError(`max`)?9:-1),dI(4),tE(),dI(),gD(t.form.get(`milliseconds`)?.hasError(`min`)||t.form.get(`milliseconds`)?.hasError(`max`)?14:-1),dI(4),tE()}}function Ci(n,e){if(n&1&&(Mi$1(0,`mat-form-field`,4)(1,`mat-label`),cw(2),Jc(),Xp(3,`input`,22),XI(),Jc(),Mi$1(4,`mat-form-field`,4)(5,`mat-label`),cw(6),Jc(),Xp(7,`input`,23),XI(),Mi$1(8,`mat-hint`),cw(9,`Wird zum Wert addiert; leer lassen, wenn keine Strafe`),Jc()()),n&2){let t=OD();dI(2),rl(`Wert`,t.selectedRace?.resultUnitLabel?` (`+t.selectedRace?.resultUnitLabel+`)`:``),dI(),tE(),dI(3),rl(`Strafe`,t.selectedRace?.resultUnitLabel?` (`+t.selectedRace?.resultUnitLabel+`)`:``),dI(),tE()}}var ee=class n{fb=T(iC);dialogRef=T($e);data=T(Un);store=T(Yt);personService=T(a);cdr=T(Hj);destroy$=new Q;form;resultUnit=e$1;selectedRace=null;races$=this.store.select(l);selectedRaceId$=this.store.select(s);teams$=this.store.select(c$1);categories$=this.store.select(c);personResults$;constructor(){let e=this.splitMilliseconds(this.data?.durationMs),t=this.data?.durationMs!==void 0&&this.data?.durationMs!==null?(this.data.durationMs/100).toFixed(2):``,i=this.data?.penalty!==void 0&&this.data?.penalty!==null?(this.data.penalty/100).toFixed(2):``;this.selectedRace=this.data?.race??null,this.form=this.fb.group({personSearch:[this.data?.person||``],personId:[this.data?.person?.id||null,jt.required],race:[this.data?.race?.id||``,jt.required],raceNumber:[this.data?.raceNumber??``],teamId:[this.data?.team?.id||null],categoryId:[this.data?.category?.id||null],minutes:[e.minutes,[jt.min(0)]],seconds:[e.seconds,[jt.min(0),jt.max(59)]],milliseconds:[e.milliseconds,[jt.min(0),jt.max(999)]],penaltySeconds:[this.data?.penalty!==void 0&&this.data?.penalty!==null?this.data.penalty/1e3:``,[jt.min(0)]],pointsValue:[t],penaltyPointsValue:[i,[jt.min(0)]],measuredAt:[this.formatDateTimeForInput(this.data?.measuredAt)],comment:[this.data?.comment??``]}),this.personResults$=this.form.get(`personSearch`).valueChanges.pipe(Gl(this.form.get(`personSearch`).value),jg(250),Ig(),Dg(m=>{let f=typeof m==`string`?m:``;return!f||f.trim().length<2?ss([]):this.personService.search(f)})),this.form.get(`personSearch`).valueChanges.pipe(wg(this.destroy$)).subscribe(m=>{typeof m==`string`&&this.form.get(`personId`).setValue(null)});let r=null;mg([this.races$,this.form.get(`race`).valueChanges.pipe(Gl(this.form.value.race))]).pipe(wg(this.destroy$)).subscribe(([m,f])=>{let $=m.find(Ee=>Ee.id===Number(f));$&&(r!==null&&r!==$.resultUnit&&this.form.patchValue({minutes:``,seconds:``,milliseconds:``,penaltySeconds:``,pointsValue:``,penaltyPointsValue:``},{emitEvent:!1}),r=$.resultUnit,this.selectedRace=$,this.cdr.markForCheck())})}ngOnInit(){this.store.dispatch(m()),this.store.dispatch(o()),this.data||this.selectedRaceId$.pipe(tn(1)).subscribe(e=>{e&&this.form.patchValue({race:e})})}isPointsRace(){return this.selectedRace?.resultUnit===`POINTS`}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onCancel(){this.dialogRef.close()}onSave(){if(!this.form.valid)return;let e=this.form.value,t=this.isPointsRace(),i=t?e.pointsValue!==``&&e.pointsValue!==null:e.minutes!==``&&e.minutes!==null||e.seconds!==``&&e.seconds!==null||e.milliseconds!==``&&e.milliseconds!==null,r=i?t?Math.round(Number(e.pointsValue)*100):this.convertToMilliseconds(Number(e.minutes||0),Number(e.seconds||0),Number(e.milliseconds||0)):void 0,m=i?t?e.penaltyPointsValue!==``&&e.penaltyPointsValue!==null?Math.round(Number(e.penaltyPointsValue)*100):void 0:e.penaltySeconds!==``&&e.penaltySeconds!==null?Math.round(Number(e.penaltySeconds)*1e3):void 0:void 0,f={raceId:Number(e.race),personId:Number(e.personId),raceNumber:e.raceNumber!==``&&e.raceNumber!==null?Number(e.raceNumber):void 0,teamId:e.teamId?Number(e.teamId):void 0,categoryId:e.categoryId?Number(e.categoryId):void 0,durationMs:r,penalty:m,measuredAt:i?this.formatDateTimeForBackend(e.measuredAt):void 0,comment:e.comment!==``&&e.comment!==null?e.comment:void 0};this.dialogRef.close(f)}onPersonSelected(e){let t=e.option.value;this.form.patchValue({personId:t?t.id:null})}displayPerson(e){return e?`${e.lastName} ${e.firstName}`:``}formatRaceDate(e){let t=e.split(`-`);if(t.length===3){let i=t[0],r=t[1];return`${t[2]}.${r}.${i}`}return e}convertToMilliseconds(e,t,i){return e*60*1e3+t*1e3+i}splitMilliseconds(e){if(e==null)return{minutes:``,seconds:``,milliseconds:``};let t=Math.floor(e/(60*1e3)),i=e%(60*1e3);return{minutes:t,seconds:Math.floor(i/1e3),milliseconds:i%1e3}}formatDateTimeForInput(e){return e?this.toLocalISOString(new Date(e)):``}toLocalISOString(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`}formatDateTimeForBackend(e){let t=e?new Date(e):new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}T${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)}`}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`app-participant-dialog`]],decls:65,vars:19,consts:[[`auto`,`matAutocomplete`],[`mat-dialog-title`,``],[1,`participant-form`,3,`formGroup`],[1,`section-title`],[`appearance`,`outline`],[`type`,`text`,`matInput`,``,`formControlName`,`personSearch`,`placeholder`,`Suche nach Name`,3,`matAutocomplete`],[3,`optionSelected`,`displayWith`],[3,`value`],[`formControlName`,`race`,`required`,``],[`matInput`,``,`type`,`number`,`formControlName`,`raceNumber`],[`formControlName`,`teamId`],[`formControlName`,`categoryId`],[`matInput`,``,`type`,`datetime-local`,`formControlName`,`measuredAt`,`step`,`1`],[`matInput`,``,`formControlName`,`comment`,`rows`,`2`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`],[1,`time-input-group`],[`matInput`,``,`type`,`number`,`formControlName`,`minutes`,`min`,`0`],[`matInput`,``,`type`,`number`,`formControlName`,`seconds`,`min`,`0`,`max`,`59`],[`matInput`,``,`type`,`number`,`formControlName`,`milliseconds`,`min`,`0`,`max`,`999`],[`matInput`,``,`type`,`number`,`formControlName`,`penaltySeconds`,`min`,`0`,`step`,`0.01`],[`matInput`,``,`type`,`number`,`formControlName`,`pointsValue`,`step`,`0.01`],[`matInput`,``,`type`,`number`,`formControlName`,`penaltyPointsValue`,`min`,`0`,`step`,`0.01`]],template:function(t,i){if(t&1&&(Mi$1(0,`h2`,1),cw(1),Jc(),Mi$1(2,`mat-dialog-content`)(3,`form`,2)(4,`h3`,3),cw(5,`Person`),Jc(),Mi$1(6,`mat-form-field`,4)(7,`mat-label`),cw(8,`Person`),Jc(),Xp(9,`input`,5),XI(),Mi$1(10,`mat-autocomplete`,6,0),ih(`optionSelected`,function(m){return i.onPersonSelected(m)}),vD(12,ui,2,5,`mat-option`,7,Se),ww(14,`async`),Jc(),Mi$1(15,`mat-hint`),cw(16,`Neue Personen werden unter "Personen" angelegt`),Jc(),hD(17,hi,2,0,`mat-error`),Jc(),Mi$1(18,`mat-form-field`,4)(19,`mat-label`),cw(20,`Rennen`),Jc(),Mi$1(21,`mat-select`,8),vD(22,bi,2,3,`mat-option`,7,Se),ww(24,`async`),Jc(),XI(),hD(25,_i,2,0,`mat-error`),Jc(),Mi$1(26,`mat-form-field`,4)(27,`mat-label`),cw(28,`Startnummer`),Jc(),Xp(29,`input`,9),XI(),Jc(),Mi$1(30,`mat-form-field`,4)(31,`mat-label`),cw(32,`Team`),Jc(),Mi$1(33,`mat-select`,10)(34,`mat-option`,7),cw(35,`Kein Team`),Jc(),vD(36,ki,2,2,`mat-option`,7,Se),ww(38,`async`),Jc(),XI(),Jc(),Mi$1(39,`mat-form-field`,4)(40,`mat-label`),cw(41,`Kategorie`),Jc(),Mi$1(42,`mat-select`,11)(43,`mat-option`,7),cw(44,`Keine Kategorie`),Jc(),vD(45,fi,2,2,`mat-option`,7,Se),ww(47,`async`),Jc(),XI(),Jc(),Mi$1(48,`h3`,3),cw(49),Jc(),hD(50,yi,21,2)(51,Ci,10,2),Mi$1(52,`mat-form-field`,4)(53,`mat-label`),cw(54,`Gemessen am`),Jc(),Xp(55,`input`,12),XI(),Jc(),Mi$1(56,`mat-form-field`,4)(57,`mat-label`),cw(58,`Kommentar`),Jc(),Xp(59,`textarea`,13),XI(),Jc()()(),Mi$1(60,`mat-dialog-actions`,14)(61,`button`,15),ih(`click`,function(){return i.onCancel()}),cw(62,`Abbrechen`),Jc(),Mi$1(63,`button`,16),ih(`click`,function(){return i.onSave()}),cw(64,` Speichern `),Jc()()),t&2){let r=HD(11);dI(),rl(` `,i.data?`Teilnehmer bearbeiten`:`Neuer Teilnehmer`,` `),dI(2),Jp(`formGroup`,i.form),dI(6),Jp(`matAutocomplete`,r),tE(),dI(),Jp(`displayWith`,i.displayPerson.bind(i)),dI(2),ID(Tw(14,11,i.personResults$)),dI(5),gD(i.form.get(`personId`)?.hasError(`required`)&&i.form.get(`personId`)?.touched?17:-1),dI(4),tE(),dI(),ID(Tw(24,13,i.races$)),dI(3),gD(i.form.get(`race`)?.hasError(`required`)&&i.form.get(`race`)?.touched?25:-1),dI(4),tE(),dI(4),tE(),dI(),Jp(`value`,null),dI(2),ID(Tw(38,15,i.teams$)),dI(6),tE(),dI(),Jp(`value`,null),dI(2),ID(Tw(47,17,i.categories$)),dI(4),wh(i.isPointsRace()?`Wert`:`Zeit`),dI(),gD(i.isPointsRace()?51:50),dI(5),tE(),dI(4),tE(),dI(4),Jp(`disabled`,!i.form.valid)}},dependencies:[il,oC,nC,Uc,km,JD,eC,od$1,_m,pm,oi,Lm,zo,Po,jo,Lo,si,Fc,ss$1,as,Yh,YM,WM,kx,Ox,jE,BE,_r,vt,gt$1,qe,Ku],styles:[`.participant-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;min-width:400px;margin-top:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}.section-title[_ngcontent-%COMP%]{margin:0;font-size:14px;font-weight:500;color:#0009}.time-input-group[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.time-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}`]})};var vi=[`input`];var Si=[`*`];var we={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Pi=new A(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>we});var v=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(v||{});var Le=class{source;checked};var Be=(()=>{class n{_elementRef=T(Mr);_changeDetectorRef=T(Hj);_ngZone=T(Re);_animationsDisabled=Me();_options=T(Pi,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let i=new Le;return i.source=this,i.checked=t,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Ge;indeterminateChange=new Ge;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=v.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){T(De).load(mr);let t=T(new Fh(`tabindex`),{optional:!0});this._options=this._options||we,this.color=this._options.color||we.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=T(Ne).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let i=t!=this._indeterminate();this._indeterminate.set(t),i&&(t?this._transitionCheckState(v.Indeterminate):this._transitionCheckState(this.checked?v.Checked:v.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=Yo(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===t||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let m=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(m)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!==`noop`?(this.indeterminate&&t!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?v.Checked:v.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,i){if(this._animationsDisabled)return``;switch(t){case v.Init:if(i===v.Checked)return this._animationClasses.uncheckedToChecked;if(i==v.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case v.Unchecked:return i===v.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case v.Checked:return i===v.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case v.Indeterminate:return i===v.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(t){let i=this._inputElement;i&&(i.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(t){t.target&&this._inputElement&&t.target!==this._inputElement.nativeElement&&t.stopPropagation()}static ɵfac=function(i){return new(i||n)};static ɵcmp=UE({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(i,r){if(i&1&&lh(vi,5),i&2){let m;FD(m=jD())&&(r._inputElement=m.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(i,r){i&2&&(rh(`id`,r.id),Kp(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),KD(r.color?`mat-`+r.color:`mat-accent`),gh(`_mat-animation-noopable`,r._animationsDisabled)(`mdc-checkbox--disabled`,r.disabled)(`mat-mdc-checkbox-disabled`,r.disabled)(`mat-mdc-checkbox-checked`,r.checked)(`mat-mdc-checkbox-disabled-interactive`,r.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,$j],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,$j],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,$j],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?void 0:Uj(t)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$j],checked:[2,`checked`,`checked`,$j],disabled:[2,`disabled`,`disabled`,$j],indeterminate:[2,`indeterminate`,`indeterminate`,$j]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[vw([{provide:Mr$1,useExisting:Co(()=>n),multi:!0},{provide:Ut,useExisting:n,multi:!0}]),iy],ngContentSelectors:Si,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(i,r){if(i&1&&(kD(),Mi$1(0,`label`,3),ih(`click`,function(f){return r._preventBubblingFromLabel(f)}),Mi$1(1,`span`,4,0),Xp(3,`span`,5),Mi$1(4,`input`,6,1),ih(`blur`,function(){return r._onBlur()})(`click`,function(){return r._onInputClick()})(`change`,function(f){return r._onInteractionEvent(f)}),Jc(),Xp(6,`span`,7),Mi$1(7,`span`,8),Qu(),Mi$1(8,`svg`,9),Xp(9,`path`,10),Jc(),Zu(),Xp(10,`span`,11),Jc(),Xp(11,`span`,12),Jc(),Mi$1(12,`span`,13,2),LD(14),Jc()()),i&2){let m=HD(2);Jp(`labelPosition`,r.labelPosition)(`for`,r.inputId),dI(4),gh(`mdc-checkbox--selected`,r.checked),Jp(`checked`,r.checked)(`indeterminate`,r.indeterminate)(`disabled`,r.disabled&&!r.disabledInteractive)(`id`,r.inputId)(`required`,r.required)(`tabIndex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex),Kp(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-checked`,r.indeterminate?`mixed`:null)(`aria-controls`,r.ariaControls)(`aria-disabled`,r.disabled&&r.disabledInteractive?!0:null)(`aria-expanded`,r.ariaExpanded)(`aria-owns`,r.ariaOwns)(`name`,r.name)(`value`,r.value),dI(7),Jp(`matRippleTrigger`,m)(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleCentered`,!0)}},dependencies:[uc,m$1],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var li=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=WE({type:n});static ɵinj=lu({imports:[Be,X]})}return n})();var Mi=(n,e)=>e.id;function Ni(n,e){if(n&1&&(Mi$1(0,`mat-option`,4),cw(1),Jc()),n&2){let t=e.$implicit;Jp(`value`,t.id),dI(),wh(t.name)}}var Pe=class n{fb=T(iC);dialogRef=T($e);data=T(Un);form=this.fb.group({targetRaceIds:[[],jt.required],carryStartNumber:[!1]});sourceRaceName(){return this.data.races.find(e=>e.id===this.data.sourceRaceId)?.name??``}otherRaces(){return this.data.races.filter(e=>e.id!==this.data.sourceRaceId)}onCancel(){this.dialogRef.close()}onSave(){if(this.form.valid){let e={targetRaceIds:this.form.value.targetRaceIds,carryStartNumber:this.form.value.carryStartNumber};this.dialogRef.close(e)}}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`app-participant-copy-dialog`]],decls:21,vars:3,consts:[[`mat-dialog-title`,``],[3,`formGroup`],[`appearance`,`outline`],[`formControlName`,`targetRaceIds`,`multiple`,``,`required`,``],[3,`value`],[`formControlName`,`carryStartNumber`],[1,`hint`],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-raised-button`,``,`color`,`primary`,3,`click`,`disabled`]],template:function(t,i){t&1&&(Mi$1(0,`h2`,0),cw(1,`Teilnehmer in andere Rennen kopieren`),Jc(),Mi$1(2,`mat-dialog-content`)(3,`p`),cw(4),Jc(),Mi$1(5,`form`,1)(6,`mat-form-field`,2)(7,`mat-label`),cw(8,`Zielrennen`),Jc(),Mi$1(9,`mat-select`,3),vD(10,Ni,2,2,`mat-option`,4,Mi),Jc(),XI(),Jc(),Mi$1(12,`mat-checkbox`,5),cw(13,` Startnummern übernehmen `),Jc(),XI(),Mi$1(14,`p`,6),cw(15,` Bereits im Zielrennen vergebene Startnummern werden dabei übersprungen (leer gelassen). `),Jc()()(),Mi$1(16,`mat-dialog-actions`,7)(17,`button`,8),ih(`click`,function(){return i.onCancel()}),cw(18,`Abbrechen`),Jc(),Mi$1(19,`button`,9),ih(`click`,function(){return i.onSave()}),cw(20,`Kopieren`),Jc()()),t&2&&(dI(4),rl(` Alle Teilnehmer von "`,i.sourceRaceName(),`" werden in die ausgewählten Rennen übernommen (Name, Team, Kategorie). Zeiten und Strafen werden nicht übernommen. Personen, die im Zielrennen bereits Teilnehmer sind, werden übersprungen. `),dI(),Jp(`formGroup`,i.form),dI(4),tE(),dI(),ID(i.otherRaces()),dI(2),tE(),dI(7),Jp(`disabled`,!i.form.valid))},dependencies:[il,oC,nC,JD,eC,od$1,oi,Lm,zo,Po,jo,Lo,si,Fc,ss$1,kx,Ox,jE,BE,_r,li,Be],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:350px}.hint[_ngcontent-%COMP%]{font-size:12px;color:#0009;margin-top:4px}`]})};var Ii=()=>[10,25,50,100];var Ti=(n,e)=>e.id;function Di(n,e){if(n&1&&(Mi$1(0,`mat-option`,4),cw(1),Jc()),n&2){let t=e.$implicit,i=OD();Jp(`value`,t.id),dI(),bh(``,t.name,` (`,i.formatRaceDate(t.date),`)`)}}function Ri(n,e){if(n&1){let t=CD();Mi$1(0,`button`,13),ih(`click`,function(){Lu(t);return Pu(OD().deleteParticipantsByRace())}),Mi$1(1,`mat-icon`),cw(2,`delete_sweep`),Jc(),cw(3,` Alle Teilnehmer löschen `),Jc()}}function $i(n,e){n&1&&Xp(0,`mat-spinner`,10)}function Ai(n,e){n&1&&(Mi$1(0,`mat-icon`),cw(1,`upload_file`),Jc())}function wi(n,e){n&1&&Xp(0,`mat-spinner`,10)}function Li(n,e){n&1&&(Mi$1(0,`mat-icon`),cw(1,`content_copy`),Jc())}function Bi(n,e){if(n&1){let t=CD();Mi$1(0,`button`,14),ih(`click`,function(){Lu(t);return Pu(OD().assignRaceNumbers())}),Mi$1(1,`mat-icon`),cw(2,`shuffle`),Jc(),cw(3,` Startnummern zuweisen `),Jc(),Mi$1(4,`button`,15),ih(`click`,function(){Lu(t);return Pu(OD().exportStartListPdf())}),Mi$1(5,`mat-icon`),cw(6,`picture_as_pdf`),Jc(),cw(7,` Startliste (PDF) `),Jc(),Mi$1(8,`button`,16),ww(9,`async`),ih(`click`,function(){Lu(t);return Pu(OD().openImportDialog())}),hD(10,$i,1,0,`mat-spinner`,10),ww(11,`async`),Kc(12,Ai,2,0,`mat-icon`),cw(13,` Teilnehmer importieren `),Jc(),Mi$1(14,`button`,17),ww(15,`async`),ih(`click`,function(){Lu(t);return Pu(OD().openCopyDialog())}),hD(16,wi,1,0,`mat-spinner`,10),ww(17,`async`),Kc(18,Li,2,0,`mat-icon`),cw(19,` In andere Rennen kopieren `),Jc()}if(n&2){let t=OD();dI(8),Jp(`disabled`,Tw(9,4,t.importLoading$)),dI(2),gD(Tw(11,6,t.importLoading$)?10:12),dI(4),Jp(`disabled`,Tw(15,8,t.copyLoading$)),dI(2),gD(Tw(17,10,t.copyLoading$)?16:18)}}function Fi(n,e){n&1&&Xp(0,`mat-spinner`,10)}function Oi(n,e){n&1&&(Mi$1(0,`mat-icon`),cw(1,`picture_as_pdf`),Jc())}function Vi(n,e){n&1&&(Mi$1(0,`p`,12),cw(1,`Bitte ein Rennen auswählen, um dessen Teilnehmer anzuzeigen.`),Jc())}function zi(n,e){n&1&&(Mi$1(0,`div`,18),Xp(1,`mat-spinner`),Jc())}function Gi(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`ID`),Jc())}function Ki(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),wh(t.id)}}function Ui(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Vorname`),Jc())}function qi(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.person?.firstName||`—`,` `)}}function Hi(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Nachname`),Jc())}function ji(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.person?.lastName||`—`,` `)}}function Zi(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,` Geburtsdatum `),Jc())}function Wi(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),ww(2,`date`),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.person?.birthDate?Cw(2,1,t.person.birthDate,`dd.MM.yyyy`):`—`,` `)}}function Xi(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,` Geschlecht `),Jc())}function Qi(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit,i=OD(2);dI(),rl(` `,i.getGenderLabel(t.person?.gender),` `)}}function Yi(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,` Startnummer `),Jc())}function Ji(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.raceNumber,` `)}}function ea(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Team`),Jc())}function ta(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.team?.name||`-`,` `)}}function na(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Kategorie`),Jc())}function ia(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.category?.name||`-`,` `)}}function aa(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Altersgruppe`),Jc())}function oa(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.ageGroup?.name||`-`,` `)}}function ra(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Rennen`),Jc())}function ca(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.race?.name||`-`,` `)}}function la(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Ergebnis`),Jc())}function ma(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),Jc()),n&2){let t=e.$implicit,i=OD(2);dI(),rl(` `,i.formatResultValue(t),` `)}}function sa(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Gemessen am`),Jc())}function da(n,e){if(n&1&&(Mi$1(0,`td`,44),cw(1),ww(2,`date`),Jc()),n&2){let t=e.$implicit;dI(),rl(` `,t.measuredAt?Cw(2,1,t.measuredAt,`dd.MM.yyyy HH:mm:ss`):`-`,` `)}}function pa(n,e){n&1&&(Mi$1(0,`th`,43),cw(1,`Kommentar`),Jc())}function ua(n,e){if(n&1&&(Mi$1(0,`td`,45),cw(1),Jc()),n&2){let t=e.$implicit;Jp(`matTooltip`,t.comment||``),dI(),rl(` `,t.comment||`-`,` `)}}function ha(n,e){n&1&&(Mi$1(0,`th`,46),cw(1,`Aktionen`),Jc())}function ba(n,e){if(n&1){let t=CD();Mi$1(0,`td`,44)(1,`button`,47),ih(`click`,function(){let r=Lu(t).$implicit;return Pu(OD(2).openEditDialog(r))}),Mi$1(2,`mat-icon`),cw(3,`edit`),Jc()(),Mi$1(4,`button`,48),ih(`click`,function(){let r=Lu(t).$implicit;return Pu(OD(2).deleteParticipant(r))}),Mi$1(5,`mat-icon`),cw(6,`delete`),Jc()()()}}function _a(n,e){n&1&&Xp(0,`tr`,49)}function ka(n,e){n&1&&Xp(0,`tr`,50)}function fa(n,e){if(n&1&&(hD(0,zi,2,0,`div`,18),ww(1,`async`),Mi$1(2,`div`,19)(3,`table`,20),ww(4,`async`),tl(5,21),Wp(6,Gi,2,0,`th`,22)(7,Ki,2,1,`td`,23),nl(),tl(8,24),Wp(9,Ui,2,0,`th`,22)(10,qi,2,1,`td`,23),nl(),tl(11,25),Wp(12,Hi,2,0,`th`,22)(13,ji,2,1,`td`,23),nl(),tl(14,26),Wp(15,Zi,2,0,`th`,22)(16,Wi,3,4,`td`,23),nl(),tl(17,27),Wp(18,Xi,2,0,`th`,22)(19,Qi,2,1,`td`,23),nl(),tl(20,28),Wp(21,Yi,2,0,`th`,22)(22,Ji,2,1,`td`,23),nl(),tl(23,29),Wp(24,ea,2,0,`th`,22)(25,ta,2,1,`td`,23),nl(),tl(26,30),Wp(27,na,2,0,`th`,22)(28,ia,2,1,`td`,23),nl(),tl(29,31),Wp(30,aa,2,0,`th`,22)(31,oa,2,1,`td`,23),nl(),tl(32,32),Wp(33,ra,2,0,`th`,22)(34,ca,2,1,`td`,23),nl(),tl(35,33),Wp(36,la,2,0,`th`,22)(37,ma,2,1,`td`,23),nl(),tl(38,34),Wp(39,sa,2,0,`th`,22)(40,da,3,4,`td`,23),nl(),tl(41,35),Wp(42,pa,2,0,`th`,22)(43,ua,2,2,`td`,36),nl(),tl(44,37),Wp(45,ha,2,0,`th`,38)(46,ba,7,0,`td`,23),nl(),Wp(47,_a,1,0,`tr`,39)(48,ka,1,0,`tr`,40),Jc()(),Xp(49,`mat-paginator`,41),Mi$1(50,`div`,42),ww(51,`async`),cw(52),Jc()),n&2){let t=OD();gD(Tw(1,10,t.loading$)?0:-1),dI(3),gh(`hidden`,Tw(4,12,t.loading$)),Jp(`dataSource`,t.dataSource),dI(44),Jp(`matHeaderRowDef`,t.displayedColumns),dI(),Jp(`matRowDefColumns`,t.displayedColumns),dI(),Jp(`pageSizeOptions`,Iw(16,Ii)),dI(),gh(`hidden`,Tw(51,14,t.loading$)),dI(2),rl(` Anzahl der Teilnehmer: `,t.dataSource.data.length,` `)}}var mi=class n{store=T(Yt);dialog=T(fn);snackBar=T(ni);actions$=T(cM);destroy$=new Q;participants$;races$;selectedRaceId$;loading$;pdfExportLoading$;importLoading$;copyLoading$;displayedColumns=[`id`,`firstName`,`lastName`,`birthDate`,`gender`,`raceNumber`,`team`,`category`,`ageGroup`,`race`,`durationMs`,`measuredAt`,`comment`,`actions`];dataSource=new rn([]);sort=Fj(W$1);paginator=Fj(st);constructor(){this.dataSource.sortingDataAccessor=(e,t)=>{switch(t){case`firstName`:return e.person?.firstName??``;case`lastName`:return e.person?.lastName??``;case`birthDate`:return e.person?.birthDate??``;case`gender`:return e.person?.gender??``;case`durationMs`:{if(e.durationMs===void 0||e.durationMs===null)return``;let i=e.penalty??0,r=e.race?.sortDirection===`DESC`,m=r?e.durationMs-i:e.durationMs+i;return r?-m:m}default:return e[t]}},this.participants$=this.store.select(L),this.races$=this.store.select(l),this.selectedRaceId$=this.store.select(s),this.loading$=this.store.select(d),this.pdfExportLoading$=this.store.select(x),this.importLoading$=this.store.select(P),this.copyLoading$=this.store.select(S),this.actions$.pipe(dM(P$1),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Teilnehmer erfolgreich erstellt`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(l$1),wg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Erstellen des Teilnehmers: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(x$1),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Teilnehmer erfolgreich aktualisiert`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(d$1),wg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Aktualisieren des Teilnehmers: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(y),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Teilnehmer erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(m$2),wg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim L\xF6schen des Teilnehmers: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(S$1),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Alle Teilnehmer des Rennens erfolgreich gelöscht`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(b),wg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim L\xF6schen der Teilnehmer: ${e}`,`OK`,{duration:5e3})}),this.actions$.pipe(dM(C),wg(this.destroy$)).subscribe(()=>{this.snackBar.open(`Startnummern erfolgreich vergeben`,`OK`,{duration:3e3})}),this.actions$.pipe(dM(f),wg(this.destroy$)).subscribe(({error:e})=>{this.snackBar.open(`FEHLER beim Vergeben der Startnummern: ${e}`,`OK`,{duration:5e3})}),od(()=>{let e=this.sort();e&&this.dataSource.sort!==e&&setTimeout(()=>{this.dataSource.sort=e},100)}),od(()=>{let e=this.paginator();e&&this.dataSource.paginator!==e&&setTimeout(()=>{this.dataSource.paginator=e},100)})}ngAfterViewInit(){this.store.dispatch(i()),this.store.dispatch(t()),this.participants$.pipe(wg(this.destroy$)).subscribe(e=>{this.dataSource.data=e}),this.store.select(m$3).pipe(wg(this.destroy$)).subscribe(e=>{if(!e)return;this.snackBar.open(`Import abgeschlossen: ${e.importedCount} importiert, ${e.skippedCount} \xFCbersprungen`,`OK`,{duration:5e3});let t=e.errors??[];if(t.length>0){let i=t.map(r=>`Zeile ${r.lineNumber}: ${r.reason}`).join(`
`);alert(`Folgende Zeilen wurden \xFCbersprungen:

${i}`)}}),this.store.select(f$1).pipe(wg(this.destroy$)).subscribe(e=>{e&&(this.snackBar.open(`Kopieren abgeschlossen: ${e.copiedCount} kopiert, ${e.skippedCount} \xFCbersprungen (bereits vorhanden)`,`OK`,{duration:5e3}),this.store.dispatch(i()))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getGenderLabel(e$2){return e$2?e[e$2]||e$2:`—`}formatRaceDate(e){let t=e.split(`-`);if(t.length===3){let i=t[0],r=t[1];return`${t[2]}.${r}.${i}`}return e}formatResultValue(e){if(e.durationMs===void 0||e.durationMs===null)return`-`;let t=e.penalty!==void 0&&e.penalty!==null&&e.penalty!==0;if(e.race?.resultUnit===`POINTS`){let r=e.race?.resultUnitLabel?` ${e.race.resultUnitLabel}`:``,m=`${(e.durationMs/100).toFixed(2)}${r}`;return t?`${m} (+${(e.penalty/100).toFixed(2)}${r})`:m}let i=this.formatDuration(e.durationMs);return t?`${i} (+${this.formatDuration(e.penalty)})`:i}formatDuration(e){let t=Math.floor(e/1e3),i=Math.floor(t/3600),r=Math.floor(t%3600/60),m=t%60,f=e%1e3;return i>0?`${i}:${String(r).padStart(2,`0`)}:${String(m).padStart(2,`0`)}.${String(f).padStart(3,`0`)}`:r>0?`${r}:${String(m).padStart(2,`0`)}.${String(f).padStart(3,`0`)}`:`${m}.${String(f).padStart(3,`0`)}s`}onRaceFilterChange(e){this.store.dispatch(S$2({id:e}))}openCreateDialog(){this.dialog.open(ee,{width:`500px`}).afterClosed().pipe(wg(this.destroy$)).subscribe(t=>{t&&this.store.dispatch(s$1({participant:t}))})}openEditDialog(e){this.dialog.open(ee,{width:`500px`,data:e}).afterClosed().pipe(wg(this.destroy$)).subscribe(i=>{i&&this.store.dispatch(u({id:e.id,participant:i}))})}deleteParticipant(e){let t=e.person?`${e.person.firstName} ${e.person.lastName}`:`#${e.id}`;confirm(`M\xF6chten Sie den Teilnehmer "${t}" wirklich l\xF6schen?`)&&this.store.dispatch(g({id:e.id}))}deleteParticipantsByRace(){this.selectedRaceId$.pipe(tn(1)).subscribe(e=>{if(e===null)return;let t=this.dataSource.data[0]?.race?.name||`diesem Rennen`;confirm(`M\xF6chten Sie wirklich ALLE Teilnehmer von "${t}" l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden!`)&&this.store.dispatch(F({raceId:e}))})}async openImportDialog(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.dialog.open(oe,{width:`900px`}).afterClosed().pipe(wg(this.destroy$)).subscribe(i=>{i&&(this.store.dispatch(G({raceId:e,file:i.file,format:i.format,delimiter:i.delimiter,mapping:i.mapping})),this.snackBar.open(`Import gestartet...`,`OK`,{duration:2e3}))})}async openCopyDialog(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}let t=await tg(this.races$);this.dialog.open(Pe,{width:`450px`,data:{sourceRaceId:e,races:t}}).afterClosed().pipe(wg(this.destroy$)).subscribe(r=>{r&&r.targetRaceIds.length>0&&this.store.dispatch(N({request:{sourceRaceId:e,targetRaceIds:r.targetRaceIds,carryStartNumber:r.carryStartNumber}}))})}refreshData(){this.store.dispatch(i()),this.snackBar.open(`Daten werden aktualisiert...`,`OK`,{duration:2e3})}async assignRaceNumbers(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}confirm(`Möchten Sie die Startnummern für dieses Rennen wirklich neu zuweisen? Bereits vergebene Startnummern werden überschrieben.`)&&(this.store.dispatch(A$1({raceId:e})),this.snackBar.open(`Startnummern werden zugewiesen...`,`OK`,{duration:2e3}))}async exportStartListPdf(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(h({raceId:e})),this.snackBar.open(`PDF Export gestartet: Startliste`,`OK`,{duration:2e3})}async exportAllPdf(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(w({raceId:e})),this.snackBar.open(`PDF Export gestartet: Gesamtwertung`,`OK`,{duration:2e3})}async exportByGenderPdf(e){let t=await tg(this.selectedRaceId$);if(!t){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(J({gender:e,raceId:t}));let i=e===`MALE`?`Herren`:`Damen`;this.snackBar.open(`PDF Export gestartet: Alle ${i}`,`OK`,{duration:2e3})}async exportAllAgeGroupsPdf(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(Q$1({raceId:e})),this.snackBar.open(`PDF Export gestartet: Nach Altersklassen`,`OK`,{duration:2e3})}async exportAllByCategoryPdf(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(X$1({raceId:e})),this.snackBar.open(`PDF Export gestartet: Gesamtwertung nach Kategorie`,`OK`,{duration:2e3})}async exportByGenderByCategoryPdf(e){let t=await tg(this.selectedRaceId$);if(!t){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(_({gender:e,raceId:t}));let i=e===`MALE`?`Herren`:`Damen`;this.snackBar.open(`PDF Export gestartet: Alle ${i} nach Kategorie`,`OK`,{duration:2e3})}async exportAllAgeGroupsByCategoryPdf(){let e=await tg(this.selectedRaceId$);if(!e){this.snackBar.open(`Bitte wählen Sie zuerst ein Rennen aus!`,`Schließen`,{duration:5e3,panelClass:[`error-snackbar`]});return}this.store.dispatch(rt({raceId:e})),this.snackBar.open(`PDF Export gestartet: Nach Altersklassen und Kategorie`,`OK`,{duration:2e3})}static ɵfac=function(t){return new(t||n)};static ɵcmp=UE({type:n,selectors:[[`app-participant-list`]],viewQuery:function(t,i){t&1&&dh(i.sort,W$1,5)(i.paginator,st,5),t&2&&VD(2)},decls:84,vars:22,consts:[[`exportMenu`,`matMenu`],[1,`filter-section`],[`appearance`,`outline`],[3,`selectionChange`,`value`],[3,`value`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Teilnehmer des gefilterten Rennens löschen`],[1,`header-actions`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Daten aktualisieren`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`PDF Export Optionen`,3,`matMenuTriggerFor`,`disabled`],[`diameter`,`20`,2,`display`,`inline-block`,`margin-right`,`8px`],[`mat-menu-item`,``,3,`click`],[1,`hint`],[`mat-raised-button`,``,`color`,`warn`,`matTooltip`,`Alle Teilnehmer des gefilterten Rennens löschen`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Startnummern innerhalb der Altersklassen zufällig zuweisen`,3,`click`],[`mat-raised-button`,``,`color`,`accent`,`matTooltip`,`Startliste als PDF exportieren`,3,`click`],[`mat-raised-button`,``,`matTooltip`,`Teilnehmer importieren (CSV mit beliebigem Trennzeichen oder DSV-Wettkampfdatei, mit Spalten-Zuordnung)`,3,`click`,`disabled`],[`mat-raised-button`,``,`matTooltip`,`Alle Teilnehmer dieses Rennens in andere Rennen kopieren`,3,`click`,`disabled`],[1,`loading-container`],[1,`table-container`],[`mat-table`,``,`matSort`,``,1,`participant-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`firstName`],[`matColumnDef`,`lastName`],[`matColumnDef`,`birthDate`],[`matColumnDef`,`gender`],[`matColumnDef`,`raceNumber`],[`matColumnDef`,`team`],[`matColumnDef`,`category`],[`matColumnDef`,`ageGroup`],[`matColumnDef`,`race`],[`matColumnDef`,`durationMs`],[`matColumnDef`,`measuredAt`],[`matColumnDef`,`comment`],[`mat-cell`,``,`class`,`comment-cell`,3,`matTooltip`,4,`matCellDef`],[`matColumnDef`,`actions`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSizeOptions`],[1,`count-info`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[`mat-cell`,``,1,`comment-cell`,3,`matTooltip`],[`mat-header-cell`,``],[`mat-icon-button`,``,`matTooltip`,`Bearbeiten`,3,`click`],[`mat-icon-button`,``,`color`,`warn`,`matTooltip`,`Löschen`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,i){if(t&1&&(Mi$1(0,`mat-card`)(1,`mat-card-header`)(2,`mat-card-title`),cw(3,`Teilnehmer`),Jc()(),Mi$1(4,`mat-card-content`)(5,`div`,1)(6,`mat-form-field`,2)(7,`mat-label`),cw(8,`Nach Rennen filtern`),Jc(),Mi$1(9,`mat-select`,3),ww(10,`async`),ih(`selectionChange`,function(m){return i.onRaceFilterChange(m.value)}),Mi$1(11,`mat-option`,4),cw(12,`Rennen auswählen...`),Jc(),vD(13,Di,2,3,`mat-option`,4,Ti),ww(15,`async`),Jc()(),hD(16,Ri,4,0,`button`,5),ww(17,`async`),Jc(),Mi$1(18,`div`,6)(19,`button`,7),ih(`click`,function(){return i.openCreateDialog()}),Mi$1(20,`mat-icon`),cw(21,`add`),Jc(),cw(22,` Neuer Teilnehmer `),Jc(),Mi$1(23,`button`,8),ih(`click`,function(){return i.refreshData()}),Mi$1(24,`mat-icon`),cw(25,`refresh`),Jc(),cw(26,` Aktualisieren `),Jc(),hD(27,Bi,20,12),ww(28,`async`),Mi$1(29,`button`,9),ww(30,`async`),hD(31,Fi,1,0,`mat-spinner`,10),ww(32,`async`),Kc(33,Oi,2,0,`mat-icon`),cw(34,` PDF Export `),Mi$1(35,`mat-icon`),cw(36,`arrow_drop_down`),Jc()(),Mi$1(37,`mat-menu`,null,0)(39,`button`,11),ih(`click`,function(){return i.exportAllPdf()}),Mi$1(40,`mat-icon`),cw(41,`groups`),Jc(),Mi$1(42,`span`),cw(43,`Gesamtwertung (Alle)`),Jc()(),Mi$1(44,`button`,11),ih(`click`,function(){return i.exportAllByCategoryPdf()}),Mi$1(45,`mat-icon`),cw(46,`category`),Jc(),Mi$1(47,`span`),cw(48,`Gesamtwertung (Alle) nach Kategorie`),Jc()(),Xp(49,`mat-divider`),Mi$1(50,`button`,11),ih(`click`,function(){return i.exportByGenderPdf(`MALE`)}),Mi$1(51,`mat-icon`),cw(52,`male`),Jc(),Mi$1(53,`span`),cw(54,`Alle Herren`),Jc()(),Mi$1(55,`button`,11),ih(`click`,function(){return i.exportByGenderByCategoryPdf(`MALE`)}),Mi$1(56,`mat-icon`),cw(57,`category`),Jc(),Mi$1(58,`span`),cw(59,`Alle Herren nach Kategorie`),Jc()(),Mi$1(60,`button`,11),ih(`click`,function(){return i.exportByGenderPdf(`FEMALE`)}),Mi$1(61,`mat-icon`),cw(62,`female`),Jc(),Mi$1(63,`span`),cw(64,`Alle Damen`),Jc()(),Mi$1(65,`button`,11),ih(`click`,function(){return i.exportByGenderByCategoryPdf(`FEMALE`)}),Mi$1(66,`mat-icon`),cw(67,`category`),Jc(),Mi$1(68,`span`),cw(69,`Alle Damen nach Kategorie`),Jc()(),Xp(70,`mat-divider`),Mi$1(71,`button`,11),ih(`click`,function(){return i.exportAllAgeGroupsPdf()}),Mi$1(72,`mat-icon`),cw(73,`view_list`),Jc(),Mi$1(74,`span`),cw(75,`Nach Altersklassen aufgeteilt`),Jc()(),Mi$1(76,`button`,11),ih(`click`,function(){return i.exportAllAgeGroupsByCategoryPdf()}),Mi$1(77,`mat-icon`),cw(78,`category`),Jc(),Mi$1(79,`span`),cw(80,`Nach Altersklassen aufgeteilt nach Kategorie`),Jc()()()(),hD(81,Vi,2,0,`p`,12),ww(82,`async`),Kc(83,fa,53,17),Jc()()),t&2){let r=HD(38);dI(9),Jp(`value`,Tw(10,8,i.selectedRaceId$)),dI(2),Jp(`value`,null),dI(2),ID(Tw(15,10,i.races$)),dI(3),gD(Tw(17,12,i.selectedRaceId$)!==null?16:-1),dI(11),gD(Tw(28,14,i.selectedRaceId$)!==null?27:-1),dI(2),Jp(`matMenuTriggerFor`,r)(`disabled`,Tw(30,16,i.pdfExportLoading$)),dI(2),gD(Tw(32,18,i.pdfExportLoading$)?31:33),dI(50),gD(Tw(82,20,i.selectedRaceId$)===null?81:83)}},dependencies:[il,Zi$1,ji$1,Hi$1,Wi$1,Vi$1,zi$1,qi$1,Ui$1,Qi$1,Gi$1,$i$1,kx,Ox,fp,wN,CN,KN,qN,zo,ra$1,VN,IN,kN,LN,ON,Ax,Dp,gt,W$1,pt,It,st,jE,Fc,ss$1,BE,_r,si,Lt,I,G$1,Bt,W,Z,Ku,Qu$1],styles:[`.filter-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px;align-items:center}.header-actions[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;display:flex;gap:10px}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px}.participant-table[_ngcontent-%COMP%]{width:100%}.hidden[_ngcontent-%COMP%]{display:none}mat-card[_ngcontent-%COMP%]{margin:20px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}mat-form-field[_ngcontent-%COMP%]{min-width:250px}.count-info[_ngcontent-%COMP%]{margin-top:16px;padding:12px 16px;background-color:#f5f5f5;border-radius:4px;font-size:14px;font-weight:500;color:#000000de}.hint[_ngcontent-%COMP%]{color:#0009}.comment-cell[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`]})};export{mi as ParticipantListComponent};