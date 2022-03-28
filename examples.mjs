import{A as f,B as v,I as w,K as g,a as T,b as i,c as d,d as _,e as p,q as c,v as u}from"./chunk-TKGCDFLG.mjs";var r=i(d()),l=i(_());var m={};T(m,{default:()=>a,metadata:()=>h});var n=i(d());var h={title:"Nota Examples"},a=p(e=>(0,n.createElement)(f,{...e},...(()=>[`
`,`
`,(0,n.createElement)(u,{}),`
`,`
`,(0,n.createElement)(c,{language:w()}),`
`,`
`,(0,n.createElement)(v,{},"Nota Examples"),`
`,`
`,"This page is coming soon!"])()));var b="metadata",x=b in m?m[b]:{},N=e=>r.default.createElement(g,{...e},r.default.createElement("div",{id:"root"},r.default.createElement(a,null))),D=async e=>{let o=Date.now(),t=new MutationObserver(s=>{o=Date.now()});return t.observe(e,{subtree:!0,childList:!0,attributes:!0}),new Promise(s=>{let E=setInterval(()=>{Date.now()-o>1e3&&(clearInterval(E),t.disconnect(),s())},50)})},y=async()=>{let e=document.documentElement;if(e.classList.contains("ssr-env"))e.classList.remove("ssr-env"),l.default.render(r.default.createElement(N,{...x,script:"./examples.mjs"}),e),await D(e),window.NOTA_READY=!0;else{let o=document.getElementById("root"),t=document.createElement("div");l.default.render(r.default.createElement(a,null),t),await D(t),o.parentNode.replaceChild(t,o)}};y();
