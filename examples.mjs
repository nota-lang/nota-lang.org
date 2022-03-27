import{A as f,B as v,I as w,K as g,a as T,b as m,c as p,d as _,e as c,t as d,v as u}from"./chunk-7KMKLNAH.mjs";var o=m(p()),i=m(_());var a={};T(a,{default:()=>n,metadata:()=>h});var r=m(p());var h={title:"Nota Examples"},n=c(e=>(0,r.createElement)(f,{...e},...(()=>[`
`,`
`,(0,r.createElement)(u,{}),`
`,`
`,(0,r.createElement)(d,{language:w()}),`
`,`
`,(0,r.createElement)(v,{},"Nota Examples"),`
`,`
`,"This page is coming soon!"])()));var b="metadata",x=b in a?a[b]:{},N=e=>o.default.createElement(g,{...e},o.default.createElement(n,null)),D=async e=>{let t=Date.now(),l=new MutationObserver(s=>{t=Date.now()});return l.observe(e,{subtree:!0,childList:!0,attributes:!0}),new Promise(s=>{let E=setInterval(()=>{Date.now()-t>1e3&&(clearInterval(E),l.disconnect(),s())},50)})},C=async()=>{let e=document.documentElement;if(e.classList.contains("ssr-env"))e.classList.remove("ssr-env"),i.default.render(o.default.createElement(N,{...x,script:"./examples.mjs"}),e),await D(e),window.NOTA_READY=!0;else{let t=document.createElement("div");i.default.render(o.default.createElement(n,null),t),await D(t),root.parentNode.replaceChild(t,root)}};C();
