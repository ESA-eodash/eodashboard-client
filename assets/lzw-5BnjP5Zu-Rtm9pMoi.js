import{g as E}from"./basedecoder-PFIibI7U-gdlnpIMU.js";const A=9,y=256,x=257,b=12;function U(f,r,o){const i=r%8,t=Math.floor(r/8),d=8-i,g=r+o-(t+1)*8;let u=8*(t+2)-(r+o);const w=(t+2)*8-r;if(u=Math.max(0,u),t>=f.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),x;let a=f[t]&2**(8-i)-1;a<<=o-d;let s=a;if(t+1<f.length){let l=f[t+1]>>>u;l<<=Math.max(0,o-w),s+=l}if(g>8&&t+2<f.length){const l=(t+3)*8-(r+o),e=f[t+2]>>>l;s+=e}return s}function m(f,r){for(let o=r.length-1;o>=0;o--)f.push(r[o]);return f}function $(f){const r=new Uint16Array(4093),o=new Uint8Array(4093);for(let n=0;n<=257;n++)r[n]=4096,o[n]=n;let i=258,t=A,d=0;function g(){i=258,t=A}function u(n){const h=U(n,d,t);return d+=t,h}function w(n,h){return o[i]=h,r[i]=n,i++,i-1}function a(n){const h=[];for(let p=n;p!==4096;p=r[p])h.push(o[p]);return h}const s=[];g();const l=new Uint8Array(f);let e=u(l),c;for(;e!==x;){if(e===y){for(g(),e=u(l);e===y;)e=u(l);if(e===x)break;if(e>y)throw new Error(`corrupted code at scanline ${e}`);{const n=a(e);m(s,n),c=e}}else if(e<i){const n=a(e);m(s,n),w(c,n[n.length-1]),c=e}else{const n=a(c);if(!n)throw new Error(`Bogus entry. Not in dictionary, ${c} / ${i}, position: ${d}`);m(s,n),s.push(n[n.length-1]),w(c,n[n.length-1]),c=e}i+1>=2**t&&(t===b?c=void 0:t++),e=u(l)}return new Uint8Array(s)}class B extends E{decodeBlock(r){return $(r).buffer}}export{B as default};
