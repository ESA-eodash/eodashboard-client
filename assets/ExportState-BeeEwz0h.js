import{aU as O,g as m,e as y,S as ve,a as g,b as a,p as f,f as x,I as k,O as T,ag as j,aV as me,h as B,aW as J,i as N,aX as U,P as W,aj as q,aY as ye,M as S,ak as _,aZ as H,F as P,ae as ge,ac as fe,af as be,a_ as ke,a$ as he,b0 as Ce,b1 as Ve,b2 as pe,ah as Se,ad as _e,ai as xe,b3 as Ie,b4 as Ae,b5 as Pe,b6 as Te,c as h,t as Be,v as Ne,b7 as we,u as Le,R as $e,C as L,_ as De,b8 as ze,b9 as Fe,r as Re,$ as I,a0 as Ee,a1 as c,ba as Me,a9 as C,aa as $,a6 as D,a3 as z,bb as Oe,a5 as je,aC as Je,bc as Ue,a7 as We,V as F,bd as qe,a8 as R,be as A,aM as E,as as He,at as Xe}from"./index-BtQV6Qx_.js";import Ye from"./PopUp-BCaO4jxs.js";import{a as Ze}from"./index-tdD2BFWI.js";import{V as X}from"./VImg-BtNwIML5.js";import"./VOverlay-B16Yi39F.js";import"./forwardRefs-DhODWdHC.js";import"./transition-DXHpblu7.js";const Ge=O("v-spacer","div","VSpacer"),Y=m()({name:"VCardActions",props:y(),setup(e,l){let{slots:n}=l;return ve({VBtn:{slim:!0,variant:"text"}}),g(()=>a("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()])),{}}}),Ke=f({opacity:[Number,String],...y(),...x()},"VCardSubtitle"),Qe=m()({name:"VCardSubtitle",props:Ke(),setup(e,l){let{slots:n}=l;return g(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),Z=O("v-card-title"),ea=f({start:Boolean,end:Boolean,icon:k,image:String,text:String,...y(),...T(),...j(),...me(),...x(),...B(),...J({variant:"flat"})},"VAvatar"),M=m()({name:"VAvatar",props:ea(),setup(e,l){let{slots:n}=l;const{themeClasses:t}=N(e),{colorClasses:r,colorStyles:o,variantClasses:u}=U(e),{densityClasses:d}=W(e),{roundedClasses:s}=q(e),{sizeClasses:i,sizeStyles:v}=ye(e);return g(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,r.value,d.value,s.value,i.value,u.value,e.class],style:[o.value,v.value,e.style]},{default:()=>[n.default?a(_,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?a(X,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(S,{key:"icon",icon:e.icon},null):e.text,H(!1,"v-avatar")]})),{}}}),aa=f({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:[String,Number],title:[String,Number],...y(),...T()},"VCardItem"),ta=m()({name:"VCardItem",props:aa(),setup(e,l){let{slots:n}=l;return g(()=>{const t=!!(e.prependAvatar||e.prependIcon),r=!!(t||n.prepend),o=!!(e.appendAvatar||e.appendIcon),u=!!(o||n.append),d=!!(e.title!=null||n.title),s=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[r&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(_,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(P,null,[e.prependAvatar&&a(M,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[d&&a(Z,{key:"title"},{default:()=>[n.title?.()??e.title]}),s&&a(Qe,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),u&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(_,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(P,null,[e.appendIcon&&a(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(M,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),na=f({opacity:[Number,String],...y(),...x()},"VCardText"),G=m()({name:"VCardText",props:na(),setup(e,l){let{slots:n}=l;return g(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),sa=f({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ge(),...y(),...T(),...fe(),...be(),...ke(),...he(),...Ce(),...j(),...Ve(),...x(),...B(),...J({variant:"elevated"})},"VCard"),la=m()({name:"VCard",directives:{Ripple:pe},props:sa(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:r}=N(e),{borderClasses:o}=Se(e),{colorClasses:u,colorStyles:d,variantClasses:s}=U(e),{densityClasses:i}=W(e),{dimensionStyles:v}=_e(e),{elevationClasses:b}=xe(e),{loaderClasses:K}=Ie(e),{locationStyles:Q}=Ae(e),{positionClasses:ee}=Pe(e),{roundedClasses:ae}=q(e),V=Te(e,n),te=h(()=>e.link!==!1&&V.isLink.value),p=h(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return g(()=>{const ne=te.value?"a":e.tag,se=!!(t.title||e.title!=null),le=!!(t.subtitle||e.subtitle!=null),ie=se||le,de=!!(t.append||e.appendAvatar||e.appendIcon),oe=!!(t.prepend||e.prependAvatar||e.prependIcon),ce=!!(t.image||e.image),re=ie||oe||de,ue=!!(t.text||e.text!=null);return Be(a(ne,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":p.value},r.value,o.value,u.value,i.value,b.value,K.value,ee.value,ae.value,s.value,e.class],style:[d.value,v.value,Q.value,e.style],href:V.href.value,onClick:p.value&&V.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[ce&&a("div",{key:"image",class:"v-card__image"},[t.image?a(_,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(X,{key:"image-img",cover:!0,src:e.image},null)]),a(we,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),re&&a(ta,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ue&&a(G,{key:"text"},{default:()=>[t.text?.()??e.text]}),t.default?.(),t.actions&&a(Y,null,{default:t.actions}),H(p.value,"v-card")]}),[[Ne("ripple"),p.value&&e.ripple]])}),{}}}),ia=f({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...y(),...B()},"VDivider"),da=m()({name:"VDivider",props:ia(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:r}=N(e),{textColorClasses:o,textColorStyles:u}=Le($e(e,"color")),d=h(()=>{const s={};return e.length&&(s[e.vertical?"height":"width"]=L(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=L(e.thickness)),s});return g(()=>{const s=a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},r.value,o.value,e.class],style:[d.value,u.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return t.default?a("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[s,a("div",{class:"v-divider__content"},[t.default()]),s]):s}),{}}}),w=e=>(He("data-v-98028b8c"),e=e(),Xe(),e),oa=w(()=>C("h5",{class:"text-h5"},"Storytelling map configuration",-1)),ca=w(()=>C("p",{class:"text-body-2"}," Copy and paste this code into the map layers field of the storytelling editor: ",-1)),ra={class:"pa-3 code-block"},ua={style:{position:"absolute",bottom:"15px"}},va={key:0,class:"text-success mr-3"},ma=w(()=>C("small",null,"copied!",-1)),ya={__name:"ExportState",props:ze({getLayers:{type:Function,default:Me}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Fe(e,"modelValue"),n=e,t=Re(!1),r=[{id:Symbol(),copyFn:async()=>await A(u.value,t),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await A(JSON.stringify(n.getLayers()),t),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await A(o.value,t),copyAs:"map tour section"}],o=h(()=>{const[d,s,i]=E.value,v="### <!--{ layers=",b=`zoom="${i}" center=[${[d,s]}] animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${v}'${JSON.stringify(n.getLayers())}' ${b}`}),u=h(()=>{const[d,s,i]=E.value,v='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',b=`zoom="${i}" center=[${[d,s]}] }-->`;return`${v}'${JSON.stringify(n.getLayers())}' ${b}`});return(d,s)=>(I(),Ee(Ye,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:c(()=>[a(la,null,{default:c(()=>[a(Z,{class:"bg-primary"},{default:c(()=>[oa]),_:1}),a(G,{class:"py-5"},{default:c(()=>[ca,C("div",ra,$(e.getLayers()),1),C("div",ua,[a(Ze,null,{default:c(()=>[t.value?(I(),D("div",va,[a(S,{color:"success",left:"",icon:[z(Oe)]},null,8,["icon"]),ma])):je("v-if",!0)]),_:1})]),a(Je,{class:"d-flex pt-3 justify-end"},{default:c(()=>[a(Ue,{cols:"6",class:"flex-column align-center text-end"},{default:c(()=>[(I(),D(P,null,We(r,i=>a(F,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[z(qe)]},{default:c(()=>[R(" copy as "+$(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(da),a(Y,null,{default:c(()=>[a(Ge),a(F,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:c(()=>[R(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},pa=De(ya,[["__scopeId","data-v-98028b8c"]]);export{pa as default};
