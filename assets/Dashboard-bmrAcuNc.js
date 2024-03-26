function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/main-1zWNofWv.js","assets/index-JKpM8y8k.js","assets/index-DuCWogEf.css","assets/MobileLayout-CY4EWm7h.js","assets/VMain-DNnUQI0D.js","assets/ssrBoot-9MUVjbcu.js","assets/color-CsGsH8C1.js","assets/ssrBoot-CNWFp2uZ.css","assets/VMain-Byt37V4c.css","assets/MobileLayout-CW62awPh.css","assets/VGrid-D4XLN205.css","assets/DashboardLayout-KGj8St3c.js","assets/DashboardLayout-BR7HmSpJ.css","assets/Header-B_rm38Wm.js","assets/index-B9embsCE.js","assets/Header-C0TiFeWz.css","assets/Footer-BquLZA0c.js","assets/Footer-Ddn0mDFz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as b,r as f,w as E,a as T,g as w,o as A,b as D,c as g,d as I,u as O,e as R,f as P,_ as c,s as C,h as L,j as l,k as V,l as j,m as x,n as S,p as _,q as k,t as M,v as F,x as i,y as r,z as H,F as U,A as z}from"./index-JKpM8y8k.js";function B(a,e={}){const t=e.head||b();if(t)return t.ssr?t.push(a,e):$(t,a,e)}function $(a,e,t={}){const s=f(!1),o=f({});E(()=>{o.value=s.value?{}:I(e)});const n=a.push(o.value,t);return T(o,u=>{n.patch(u)}),w()&&(A(()=>{n.dispose()}),D(()=>{s.value=!0}),g(()=>{s.value=!1})),n}function q(a,e){const{title:t,titleTemplate:s,...o}=a;return B({title:t,titleTemplate:s,_flatMeta:o},{...e,transform(n){const d=O({...n._flatMeta});return delete n._flatMeta,{...n,meta:d}}})}const K=async()=>{const a=R(P),e=t=>{Object.keys(a).forEach(s=>{a[s]=t[s]})};try{e((await c(()=>import(new URL("/config.js",import.meta.url).href),__vite__mapDeps([]))).default)}catch{try{e(await c(()=>import("./main-1zWNofWv.js"),__vite__mapDeps([0,1,2])).then(async t=>await t.default))}catch{console.error("no dashboard configuration defined")}}return a},X=async a=>await a(C),N=(a,e)=>{const t=a.__vccOpts||a;for(const[s,o]of e)t[s]=o;return t},G={__name:"Dashboard",async setup(a){let e,t;L(y=>({"4d9dbdf0":r(n)}));const s=([e,t]=l(()=>K()),e=await e,t(),e);V();const o=j("dashboardTheme",s.brand?.theme);o.global.name.value="dashboardTheme";const n=([e,t]=l(()=>z(s.brand?.font?.family,s.brand?.font?.link)),e=await e,t(),e),{loadSTAC:d}=x();[e,t]=l(()=>d()),await e,t();const{smAndDown:u}=S(),h=u.value?_(()=>c(()=>import("./MobileLayout-CY4EWm7h.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9,10]))):_(()=>c(()=>import("./DashboardLayout-KGj8St3c.js"),__vite__mapDeps([11,1,2,4,5,6,7,8,12]))),p=_(()=>c(()=>import("./Header-B_rm38Wm.js"),__vite__mapDeps([13,1,2,6,5,7,14,15]))),v=_(()=>c(()=>import("./Footer-BquLZA0c.js"),__vite__mapDeps([16,1,2,6,17]))),{mainRect:m}=k();return q(s.brand.meta??{}),(y,Q)=>(M(),F(U,null,[i(r(p)),i(r(h),{style:H(`height: calc(100dvh - ${r(m).top+r(m).bottom}px)`)},null,8,["style"]),i(r(v))],64))}},J=N(G,[["__scopeId","data-v-d852cd8e"]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{Y as D,N as _,X as c};