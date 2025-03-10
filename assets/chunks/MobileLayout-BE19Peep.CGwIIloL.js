import{aJ as Xe,p as E,v as Ge,b as O,o as C,w as Y,c as G,G as h,az as fe,e as ie,k as L,H as he,K as R,F as X,B as me,as as U,j as ge,a as be,aQ as ue,t as De,h as w,ap as M,D as W,q as Ie,L as Pe,at as je,P as Ue,V as qe}from"./framework.IQU1miB3.js";import{x as Ne,aU as Ke,aT as Qe,V as D,F as H,H as A,W as Be,aa as Je,aA as Ze,$ as et,K as p,aq as re,ap as tt,M as ce,a4 as nt,i as ot,I as Ee,u as at,aV as ze,aW as ye,aX as lt,aB as xe,Y as We,aY as st,aZ as it,a_ as ut,O as de,a6 as Se,aC as rt,a7 as ct,a$ as dt,b0 as vt,a1 as ft,b1 as Re,b2 as ht,b as we}from"./eo-dash.CJrMwfBW.js";import{V as mt}from"./VMain-eZDKIfmJ.C1hQqGHc.js";import{u as gt,f as bt,a as yt,s as xt,c as St,m as wt}from"./forwardRefs-lhDuXD-N.CfgF3vSV.js";import{u as kt}from"./ssrBoot-BP7SYRyC.BOsl9e4G.js";import{M as Tt}from"./transition-DHEuQX4I.8asHJfRI.js";import{a as ke}from"./index-Bt5GEGxl.CoCDWQmj.js";import"./commonjsHelpers.BosuxZz1.js";const Vt=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:i}=e,d=.5,a=16;e.offsetX=n-o,e.offsetY=i-t,Math.abs(e.offsetY)<d*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<d*Math.abs(e.offsetY)&&(e.up&&i<t-a&&e.up(e),e.down&&i>t+a&&e.down(e))};function Ct(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function _t(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),Vt(o)}function It(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Pt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>Ct(n,o),touchend:n=>_t(n,o),touchmove:n=>It(n,o)}}function Bt(e,o){var f;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,i=(n==null?void 0:n.options)??{passive:!0},d=(f=o.instance)==null?void 0:f.$.uid;if(!t||!d)return;const a=Pt(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[d]=a,Re(a).forEach(c=>{t.addEventListener(c,a[c],i)})}function Et(e,o){var d,a;const n=(d=o.value)!=null&&d.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const i=n._touchHandlers[t];Re(i).forEach(f=>{n.removeEventListener(f,i[f])}),delete n._touchHandlers[t]}const $e={mounted:Bt,unmounted:Et},ve=Symbol.for("vuetify:v-tabs"),zt=A({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...We(st({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Me=H()({name:"VTab",props:zt(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:i,textColorStyles:d}=tt(e,"sliderColor"),a=E(),f=E(),c=w(()=>e.direction==="horizontal"),m=w(()=>{var r,u;return((u=(r=a.value)==null?void 0:r.group)==null?void 0:u.isSelected.value)??!1});function x(r){var b,v;let{value:u}=r;if(u){const k=(v=(b=a.value)==null?void 0:b.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),B=f.value;if(!k||!B)return;const $=getComputedStyle(k).color,_=k.getBoundingClientRect(),I=B.getBoundingClientRect(),y=c.value?"x":"y",S=c.value?"X":"Y",T=c.value?"right":"bottom",V=c.value?"width":"height",q=_[y],N=I[y],P=q>N?_[T]-I[T]:_[y]-I[y],K=Math.sign(P)>0?c.value?"right":"bottom":Math.sign(P)<0?c.value?"left":"top":"center",J=(Math.abs(P)+(Math.sign(P)<0?_[V]:I[V]))/Math.max(_[V],I[V])||0,F=_[V]/I[V]||0,z=1.5;yt(B,{backgroundColor:[$,"currentcolor"],transform:[`translate${S}(${P}px) scale${S}(${F})`,`translate${S}(${P/z}px) scale${S}(${(J-1)/z+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:xt})}}return p(()=>{const r=D.filterProps(e);return h(D,R({symbol:ve,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},r,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...n,default:()=>{var u;return h(X,null,[((u=n.default)==null?void 0:u.call(n))??e.text,!e.hideSlider&&h("div",{ref:f,class:["v-tab__slider",i.value],style:d.value},null)])}})}),bt({},a)}}),He=Symbol.for("vuetify:v-window"),Ae=Symbol.for("vuetify:v-window-group"),pe=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...de(),...ce(),...ft()},"VWindow"),Te=H()({name:"VWindow",directives:{Touch:$e},props:pe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=ct(e),{isRtl:i}=Ee(),{t:d}=dt(),a=ze(e,Ae),f=E(),c=w(()=>i.value?!e.reverse:e.reverse),m=W(!1),x=w(()=>{const y=e.direction==="vertical"?"y":"x",T=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${y}${T}-transition`}),r=W(0),u=E(void 0),b=w(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));Ie(b,(y,S)=>{const T=a.items.value.length,V=T-1;T<=2?m.value=y<S:y===V&&S===0?m.value=!0:y===0&&S===V?m.value=!1:m.value=y<S}),qe(He,{transition:x,isReversed:m,transitionCount:r,transitionHeight:u,rootRef:f});const v=w(()=>e.continuous||b.value!==0),k=w(()=>e.continuous||b.value!==a.items.value.length-1);function B(){v.value&&a.prev()}function $(){k.value&&a.next()}const _=w(()=>{const y=[],S={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":d("$vuetify.carousel.prev")};y.push(v.value?n.prev?n.prev({props:S}):h(D,S,null):h("div",null,null));const T={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":d("$vuetify.carousel.next")};return y.push(k.value?n.next?n.next({props:T}):h(D,T,null):h("div",null,null)),y}),I=w(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?B():$()},right:()=>{c.value?$():B()},start:S=>{let{originalEvent:T}=S;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return p(()=>U(h(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var y,S;return[h("div",{class:"v-window__container",style:{height:u.value}},[(y=n.default)==null?void 0:y.call(n,{group:a}),e.showArrows!==!1&&h("div",{class:"v-window__controls"},[_.value])]),(S=n.additional)==null?void 0:S.call(n,{group:a})]}}),[[je("touch"),I.value]])),{group:a}}}),Wt=A({...We(pe(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Rt=H()({name:"VTabsWindow",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=Pe(ve,null),i=Be(e,"modelValue"),d=w({get(){var a;return i.value!=null||!t?i.value:(a=t.items.value.find(f=>t.selected.value.includes(f.id)))==null?void 0:a.value},set(a){i.value=a}});return p(()=>{const a=Te.filterProps(e);return h(Te,R({_as:"VTabsWindow"},a,{modelValue:d.value,"onUpdate:modelValue":f=>d.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),Fe=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...de(),...ht(),...wt()},"VWindowItem"),Ve=H()({name:"VWindowItem",directives:{Touch:$e},props:Fe(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=Pe(He),i=vt(e,Ae),{isBooted:d}=kt();if(!t||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=W(!1),f=w(()=>d.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var v;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=re((v=t.rootRef.value)==null?void 0:v.clientHeight)),t.transitionCount.value+=1)}function x(){c()}function r(v){a.value&&Ue(()=>{!f.value||!a.value||!t||(t.transitionHeight.value=re(v.clientHeight))})}const u=w(()=>{const v=t.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof v!="string"?t.transition.value:v,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:x,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:x,onEnter:r}:!1}),{hasContent:b}=St(e,i.isSelected);return p(()=>h(Tt,{transition:u.value,disabled:!d.value},{default:()=>{var v;return[U(h("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[b.value&&((v=n.default)==null?void 0:v.call(n))]),[[ue,i.isSelected.value]])]}})),{groupItem:i}}}),$t=A({...Fe()},"VTabsWindowItem"),Mt=H()({name:"VTabsWindowItem",props:$t(),setup(e,o){let{slots:n}=o;return p(()=>{const t=Ve.filterProps(e);return h(Ve,R({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function Ht(e){let{selectedElement:o,containerElement:n,isRtl:t,isHorizontal:i}=e;const d=j(i,n),a=Oe(i,t,n),f=j(i,o),c=Ye(i,o),m=f*.4;return a>c?c-m:a+d<c+f?c-d+f+m:a}function At(e){let{selectedElement:o,containerElement:n,isHorizontal:t}=e;const i=j(t,n),d=Ye(t,o),a=j(t,o);return d-i/2+a/2}function Ce(e,o){const n=e?"scrollWidth":"scrollHeight";return(o==null?void 0:o[n])||0}function pt(e,o){const n=e?"clientWidth":"clientHeight";return(o==null?void 0:o[n])||0}function Oe(e,o,n){if(!n)return 0;const{scrollLeft:t,offsetWidth:i,scrollWidth:d}=n;return e?o?d-i+t:t:n.scrollTop}function j(e,o){const n=e?"offsetWidth":"offsetHeight";return(o==null?void 0:o[n])||0}function Ye(e,o){const n=e?"offsetLeft":"offsetTop";return(o==null?void 0:o[n])||0}const Ft=Symbol.for("vuetify:v-slide-group"),Le=A({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ft},nextIcon:{type:Se,default:"$next"},prevIcon:{type:Se,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...de(),...ut({mobile:null}),...ce(),...it({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),_e=H()({name:"VSlideGroup",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{isRtl:t}=Ee(),{displayClasses:i,mobile:d}=at(e),a=ze(e,e.symbol),f=W(!1),c=W(0),m=W(0),x=W(0),r=w(()=>e.direction==="horizontal"),{resizeRef:u,contentRect:b}=ye(),{resizeRef:v,contentRect:k}=ye(),B=lt(),$=w(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),_=w(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[0]):-1),I=w(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[a.selected.value.length-1]):-1);if(xe){let s=-1;Ie(()=>[a.selected.value,b.value,k.value,r.value],()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>{if(b.value&&k.value){const l=r.value?"width":"height";m.value=b.value[l],x.value=k.value[l],f.value=m.value+1<x.value}if(_.value>=0&&v.el){const l=v.el.children[I.value];S(l,e.centerActive)}})})}const y=W(!1);function S(s,l){let g=0;l?g=At({containerElement:u.el,isHorizontal:r.value,selectedElement:s}):g=Ht({containerElement:u.el,isHorizontal:r.value,isRtl:t.value,selectedElement:s}),T(g)}function T(s){if(!xe||!u.el)return;const l=j(r.value,u.el),g=Oe(r.value,t.value,u.el);if(!(Ce(r.value,u.el)<=l||Math.abs(s-g)<16)){if(r.value&&t.value&&u.el){const{scrollWidth:le,offsetWidth:se}=u.el;s=le-se-s}r.value?B.horizontal(s,$.value):B(s,$.value)}}function V(s){const{scrollTop:l,scrollLeft:g}=s.target;c.value=r.value?g:l}function q(s){if(y.value=!0,!(!f.value||!v.el)){for(const l of s.composedPath())for(const g of v.el.children)if(g===l){S(g);return}}}function N(s){y.value=!1}let P=!1;function K(s){var l;!P&&!y.value&&!(s.relatedTarget&&((l=v.el)!=null&&l.contains(s.relatedTarget)))&&z(),P=!1}function Q(){P=!0}function J(s){if(!v.el)return;function l(g){s.preventDefault(),z(g)}r.value?s.key==="ArrowRight"?l(t.value?"prev":"next"):s.key==="ArrowLeft"&&l(t.value?"next":"prev"):s.key==="ArrowDown"?l("next"):s.key==="ArrowUp"&&l("prev"),s.key==="Home"?l("first"):s.key==="End"&&l("last")}function F(s,l){if(!s)return;let g=s;do g=g==null?void 0:g[l==="next"?"nextElementSibling":"previousElementSibling"];while(g!=null&&g.hasAttribute("disabled"));return g}function z(s){if(!v.el)return;let l;if(!s)l=rt(v.el)[0];else if(s==="next"){if(l=F(v.el.querySelector(":focus"),s),!l)return z("first")}else if(s==="prev"){if(l=F(v.el.querySelector(":focus"),s),!l)return z("last")}else s==="first"?(l=v.el.firstElementChild,l!=null&&l.hasAttribute("disabled")&&(l=F(l,"next"))):s==="last"&&(l=v.el.lastElementChild,l!=null&&l.hasAttribute("disabled")&&(l=F(l,"prev")));l&&l.focus({preventScroll:!0})}function Z(s){const l=r.value&&t.value?-1:1,g=(s==="prev"?-l:l)*m.value;let ae=c.value+g;if(r.value&&t.value&&u.el){const{scrollWidth:le,offsetWidth:se}=u.el;ae+=le-se}T(ae)}const ee=w(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),te=w(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return f.value||Math.abs(c.value)>0;case"mobile":return d.value||f.value||Math.abs(c.value)>0;default:return!d.value&&(f.value||Math.abs(c.value)>0)}}),ne=w(()=>Math.abs(c.value)>1),oe=w(()=>{if(!u.value)return!1;const s=Ce(r.value,u.el),l=pt(r.value,u.el);return s-l-Math.abs(c.value)>1});return p(()=>h(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":te.value,"v-slide-group--is-overflowing":f.value},i.value,e.class],style:e.style,tabindex:y.value||a.selected.value.length?-1:0,onFocus:K},{default:()=>{var s,l,g;return[te.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ne.value}],onMousedown:Q,onClick:()=>ne.value&&Z("prev")},[((s=n.prev)==null?void 0:s.call(n,ee.value))??h(ke,null,{default:()=>[h(we,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:V},[h("div",{ref:v,class:"v-slide-group__content",onFocusin:q,onFocusout:N,onKeydown:J},[(l=n.default)==null?void 0:l.call(n,ee.value)])]),te.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!oe.value}],onMousedown:Q,onClick:()=>oe.value&&Z("next")},[((g=n.next)==null?void 0:g.call(n,ee.value))??h(ke,null,{default:()=>[h(we,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:Z,scrollOffset:c,focus:z,hasPrev:ne,hasNext:oe}}});function Ot(e){return e?e.map(o=>ot(o)?o:{text:o,value:o}):[]}const Yt=A({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Le({mandatory:"force",selectedClass:"v-tab-item--selected"}),...nt(),...ce()},"VTabs"),Lt=H()({name:"VTabs",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const i=Be(e,"modelValue"),d=w(()=>Ot(e.items)),{densityClasses:a}=Je(e),{backgroundColorClasses:f,backgroundColorStyles:c}=Ze(M(e,"bgColor")),{scopeId:m}=gt();return et({VTab:{color:M(e,"color"),direction:M(e,"direction"),stacked:M(e,"stacked"),fixed:M(e,"fixedTabs"),sliderColor:M(e,"sliderColor"),hideSlider:M(e,"hideSlider")}}),p(()=>{const x=_e.filterProps(e),r=!!(t.window||e.items.length>0);return h(X,null,[h(_e,R(x,{modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,f.value,e.class],style:[{"--v-tabs-height":re(e.height)},c.value,e.style],role:"tablist",symbol:ve},m,n),{default:()=>{var u;return[((u=t.default)==null?void 0:u.call(t))??d.value.map(b=>{var v;return((v=t.tab)==null?void 0:v.call(t,{item:b}))??h(Me,R(b,{key:b.text,value:b.value}),{default:t[`tab.${b.value}`]?()=>{var k;return(k=t[`tab.${b.value}`])==null?void 0:k.call(t,{item:b})}:void 0})})]}}),r&&h(Rt,R({modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,key:"tabs-window"},m),{default:()=>{var u;return[d.value.map(b=>{var v;return((v=t.item)==null?void 0:v.call(t,{item:b}))??h(Mt,{value:b.value},{default:()=>{var k;return(k=t[`item.${b.value}`])==null?void 0:k.call(t,{item:b})}})}),(u=t.window)==null?void 0:u.call(t)]}})])}),{}}}),Xt={key:0,id:"overlay",class:"pa-2 panel bg-surface"},Gt={class:"d-flex py-2 justify-end align-end"},Dt={class:"component-container"},jt={__name:"MobileLayout",setup(e){Xe(m=>({e61d6a5e:f.value,"3e27c4c6":a.value,e8144352:c.value}));const{bgWidget:o,importedWidgets:n}=Ke(),{mainRect:t}=Qe(),i=E(-1),d=E(null),a=E(""),f=E(""),c=E("");return Ge(()=>{var m,x;f.value=t.value.top+"px",c.value=(t.value.bottom||48)+"px",a.value=t.value.bottom+(((x=(m=d.value)==null?void 0:m.$el)==null?void 0:x.clientHeight)??0)+"px"}),(m,x)=>(C(),O(mt,{class:"overflow-hidden main"},{default:Y(()=>[(C(),O(fe,{suspensible:""},{default:Y(()=>{var r;return[(r=L(o))!=null&&r.component?(C(),O(he(L(o).component),R({id:"bg-widget",key:L(o).id},L(o).props),null,16)):ie("v-if",!0)]}),_:1})),(C(!0),G(X,null,me(L(n),(r,u)=>(C(),G(X,{key:u},[r.value.component?U((C(),G("div",Xt,[ge("div",Gt,[h(D,{icon:"",variant:"text",class:"close-btn",onClick:x[0]||(x[0]=b=>i.value=-1)},{default:Y(()=>x[2]||(x[2]=[be("✕")])),_:1})]),(C(),O(fe,{suspensible:""},{default:Y(()=>[U(ge("div",Dt,[(C(),O(he(r.value.component),R({key:r.value.id,ref_for:!0},r.value.props),null,16))],512),[[ue,i.value===u]])]),_:2},1024))],512)),[[ue,i.value===u]]):ie("v-if",!0)],64))),128)),h(Lt,{ref_key:"tabs",ref:d,"align-tabs":"center","bg-color":"surface",class:"tabs","show-arrows":"",modelValue:i.value,"onUpdate:modelValue":x[1]||(x[1]=r=>i.value=r)},{default:Y(()=>[(C(!0),G(X,null,me(L(n),(r,u)=>(C(),G(X,{key:u},[r.value.component?(C(),O(Me,{key:0,value:u},{default:Y(()=>[be(De(r.value.title),1)]),_:2},1032,["value"])):ie("v-if",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1}))}},tn=Ne(jt,[["__scopeId","data-v-d963d7c7"]]);export{tn as default};
