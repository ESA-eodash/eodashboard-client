function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EodashDatePicker-D416FU24.js","assets/index-JKpM8y8k.js","assets/index-DuCWogEf.css","assets/index-B9embsCE.js","assets/ssrBoot-9MUVjbcu.js","assets/color-CsGsH8C1.js","assets/ssrBoot-CNWFp2uZ.css","assets/EodashDatePicker-DNBkGE03.css","assets/VGrid-D4XLN205.css","assets/EodashMap-ceiA4iUg.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/DynamicWebComponent-CVXXAhpm.js","assets/WidgetsContainer-DBERNDGZ.js","assets/IframeWrapper-fb7O_WlR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,W as u,X as m,m as _,a as g,Y as i,p as r,D as f,E as v,G as b,q as y,Z as E,x as d}from"./index-JKpM8y8k.js";import{u as w}from"./ssrBoot-9MUVjbcu.js";import{m as P}from"./color-CsGsH8C1.js";const V=(()=>{const e={...Object.assign({"/widgets/EodashDatePicker.vue":()=>a(()=>import("./EodashDatePicker-D416FU24.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),"/widgets/EodashMap.vue":()=>a(()=>import("./EodashMap-ceiA4iUg.js").then(t=>t.E),__vite__mapDeps([9,1,2,10,11])),"/widgets/WidgetsContainer.vue":()=>a(()=>import("./WidgetsContainer-DBERNDGZ.js"),__vite__mapDeps([12,1,2,4,5,6]))}),...Object.assign({})};for(const t in e){const s=t.split("/").at(-1).slice(0,-4);Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(e,t)),delete e[t]}return e})(),R=e=>{const t=[];for(const s of e??[]){const o=u({component:null,props:{},title:"",id:Symbol()});if("defineWidget"in(s??{})){const{selectedStac:n}=m(_());g(n,p=>{const l=i(s?.defineWidget(p));o.value=o.value.id===l.id?o.value:c(l)},{immediate:!0})}else o.value=c(s);t.push(o)}return t},c=e=>{const t={component:null,props:{},title:"",id:Symbol()};switch(e?.type){case"internal":t.component=r({loader:V[e?.widget.name],suspensible:!0}),t.props=i(e?.widget.props??{});break;case"web-component":t.component=r({loader:()=>a(()=>import("./DynamicWebComponent-CVXXAhpm.js"),__vite__mapDeps([11,1,2])),suspensible:!0}),t.props=i(e.widget);break;case"iframe":t.component=r({loader:()=>a(()=>import("./IframeWrapper-fb7O_WlR.js"),__vite__mapDeps([13,1,2])),suspensible:!0}),t.props=i(e.widget);break;default:console.error("Widget type not found");break}return t.title=e?.title??"",t.id=e?.id??t.id,t},W=f({scrollable:Boolean,...v(),...P({tag:"main"})},"VMain"),S=b()({name:"VMain",props:W(),setup(e,t){let{slots:s}=t;const{mainStyles:o}=y(),{ssrBootStyles:n}=w();return E(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>[e.scrollable?d("div",{class:"v-main__scroller"},[s.default?.()]):s.default?.()]})),{}}});export{S as V,R as u};