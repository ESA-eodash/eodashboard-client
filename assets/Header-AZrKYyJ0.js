import{p as V,e as w,f as N,g as _,a as p,b as o,ae as z,af as F,ag as W,h as $,Q as K,R as k,ah as O,ai as Q,aj as Y,i as Z,j as G,s as y,c as n,S as J,ak as B,C as T,r as R,al as X,w as x,Z as ee,am as te,an as ae,y as le,ao as oe,ap as se,aq as ne,d as E,_ as re,x as ue,W as ie,$ as ce,a0 as de,a1 as P,a8 as ve,aa as me,a3 as C}from"./index-BwCZ8lIL.js";import{V as A}from"./VImg-C-NIABnm.js";import{a as ge}from"./index-DnydnPYa.js";import{u as fe}from"./ssrBoot--3QONwem.js";import"./transition-Cc8Uv_lO.js";const L=V({text:String,...w(),...N()},"VToolbarTitle"),D=_()({name:"VToolbarTitle",props:L(),setup(e,r){let{slots:t}=r;return p(()=>{const d=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[d&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,t.default?.()])]})}),{}}}),he=[null,"prominent","default","comfortable","compact"],U=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>he.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...z(),...w(),...F(),...W(),...N({tag:"header"}),...$()},"VToolbar"),I=_()({name:"VToolbar",props:U(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:d,backgroundColorStyles:u}=K(k(e,"color")),{borderClasses:a}=O(e),{elevationClasses:v}=Q(e),{roundedClasses:i}=Y(e),{themeClasses:f}=Z(e),{rtlClasses:S}=G(),c=y(!!(e.extended||t.extension?.())),m=n(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=n(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return J({VBtn:{variant:"text"}}),p(()=>{const h=!!(e.title||t.title),s=!!(t.image||e.image),g=t.extension?.();return c.value=!!(e.extended||g),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,a.value,v.value,i.value,f.value,S.value,e.class],style:[u.value,e.style]},{default:()=>[s&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(B,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(A,{key:"image-img",cover:!0,src:e.image},null)]),o(B,{defaults:{VTabs:{height:T(m.value)}}},{default:()=>[o("div",{class:"v-toolbar__content",style:{height:T(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[t.prepend?.()]),h&&o(D,{key:"title",text:e.title},{text:t.title}),t.default?.(),t.append&&o("div",{class:"v-toolbar__append"},[t.append?.()])])]}),o(B,{defaults:{VTabs:{height:T(b.value)}}},{default:()=>[o(ge,null,{default:()=>[c.value&&o("div",{class:"v-toolbar__extension",style:{height:T(b.value)}},[g])]})]})]})}),{contentHeight:m,extensionHeight:b}}}),be=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ye(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let d=0,u=0;const a=R(null),v=y(0),i=y(0),f=y(0),S=y(!1),c=y(!1),m=n(()=>Number(e.scrollThreshold)),b=n(()=>X((m.value-v.value)/m.value||0)),h=()=>{const s=a.value;if(!s||t&&!t.value)return;d=v.value,v.value="window"in s?s.pageYOffset:s.scrollTop;const g=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(u!==g){u=g;return}c.value=v.value<d,f.value=Math.abs(v.value-m.value)};return x(c,()=>{i.value=i.value||v.value}),x(S,()=>{i.value=0}),ee(()=>{x(()=>e.scrollTarget,s=>{const g=s?document.querySelector(s):window;g&&g!==a.value&&(a.value?.removeEventListener("scroll",h),a.value=g,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),te(()=>{a.value?.removeEventListener("scroll",h)}),t&&x(t,h,{immediate:!0}),{scrollThreshold:m,currentScroll:v,currentThreshold:f,isScrollActive:S,scrollRatio:b,isScrollingUp:c,savedScroll:i}}const Se=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...U(),...ae(),...be(),height:{type:[Number,String],default:64}},"VAppBar"),Te=_()({name:"VAppBar",props:Se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const d=R(),u=le(e,"modelValue"),a=n(()=>{const l=new Set(e.scrollBehavior?.split(" ")??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),v=n(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!u.value}),{currentScroll:i,scrollThreshold:f,isScrollingUp:S,scrollRatio:c}=ye(e,{canScroll:v}),m=n(()=>a.value.hide||a.value.fullyHide),b=n(()=>e.collapse||a.value.collapse&&(a.value.inverted?c.value>0:c.value===0)),h=n(()=>e.flat||a.value.fullyHide&&!u.value||a.value.elevate&&(a.value.inverted?i.value>0:i.value===0)),s=n(()=>a.value.fadeImage?a.value.inverted?1-c.value:c.value:void 0),g=n(()=>{const l=Number(d.value?.contentHeight??e.height),H=Number(d.value?.extensionHeight??0);return m.value?i.value<f.value||a.value.fullyHide?l+H:l:l+H});oe(n(()=>!!e.scrollBehavior),()=>{se(()=>{m.value?a.value.inverted?u.value=i.value>f.value:u.value=S.value||i.value<f.value:u.value=!0})});const{ssrBootStyles:j}=fe(),{layoutItemStyles:M,layoutIsReady:q}=ne({id:e.name,order:n(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:g,elementSize:y(void 0),active:u,absolute:k(e,"absolute")});return p(()=>{const l=I.filterProps(e);return o(I,E({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...M.value,"--v-toolbar-image-opacity":s.value,height:void 0,...j.value},e.style]},l,{collapse:b.value,flat:h.value}),t)}),q}}),xe=_()({name:"VAppBarTitle",props:L(),setup(e,r){let{slots:t}=r;return p(()=>o(D,E(e,{class:"v-app-bar-title"}),t)),{}}}),Ve={__name:"Header",setup(e){const r=ue(ie),t=r.brand?.name;return(d,u)=>(ce(),de(Te,{color:"primary"},{default:P(()=>[o(xe,null,{default:P(()=>[ve(me(C(t)),1)]),_:1}),o(A,{class:"mx-12 logo",src:C(r).brand?.logo},null,8,["src"])]),_:1}))}},Pe=re(Ve,[["__scopeId","data-v-d3a5e05e"]]);export{Pe as default};