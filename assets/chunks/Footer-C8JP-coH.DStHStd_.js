import{x as k,u as _,F as p,H as b,a7 as C,aA as x,a8 as F,ak as S,ab as P,aW as B,aF as I,K as R,aq as T,a1 as V,M as w,a3 as z,b5 as D,ai as j,O as E,a5 as H,b4 as L,b6 as N}from"./eo-dash.CJrMwfBW.js";import{p as h,L as A,b as K,o as O,w as q,j as G,t as M,k as i,ap as d,D as U,h as a,G as W,s as J}from"./framework.IQU1miB3.js";import"./commonjsHelpers.BosuxZz1.js";const Q=b({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...H(),...E(),...j(),...D(),...z(),...w({tag:"footer"}),...V()},"VFooter"),X=p()({name:"VFooter",props:Q(),setup(e,s){let{slots:r}=s;const t=h(),{themeClasses:n}=C(e),{backgroundColorClasses:l,backgroundColorStyles:m}=x(d(e,"color")),{borderClasses:f}=F(e),{elevationClasses:g}=S(e),{roundedClasses:v}=P(e),u=U(32),{resizeRef:y}=B(o=>{o.length&&(u.value=o[0].target.clientHeight)}),c=a(()=>e.height==="auto"?u.value:parseInt(e.height,10));return I(()=>e.app,()=>{const o=L({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:c,elementSize:a(()=>e.height==="auto"?void 0:c.value),active:a(()=>e.app),absolute:d(e,"absolute")});J(()=>{t.value=o.layoutItemStyles.value})}),R(()=>W(e.tag,{ref:y,class:["v-footer",n.value,l.value,f.value,g.value,v.value,e.class],style:[m.value,e.app?t.value:{height:T(e.height)},e.style]},r)),{}}}),Y={class:"pt-0 footer-text"},Z={__name:"Footer",setup(e){const s=h(null),r=A(N),{mdAndDown:t}=_();return(n,l)=>(O(),K(X,{ref_key:"footer",ref:s,height:i(t)?"48px":"auto",color:"secondary",app:"",class:"d-flex justify-end"},{default:q(()=>[G("p",Y,M(i(r).brand.footerText??""),1)]),_:1},8,["height"]))}},te=k(Z,[["__scopeId","data-v-5009d449"]]);export{te as default};
