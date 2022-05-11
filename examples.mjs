import{a as E,b as i,c as d,d as h,e as c,f as p,j as u,k as f,l as v,o as w}from"./chunk-GURI562L.mjs";var o=i(d()),s=i(h());var m={};E(m,{default:()=>a,metadata:()=>y});var n=i(d());var{Document:T,TableOfContents:_}=u,{ListingConfigure:x}=p,{Title:N}=f,y={title:"Nota Examples"},a=c(e=>(0,n.createElement)(T,e,`
`,`
`,(0,n.createElement)(_,{}),`
`,`
`,(0,n.createElement)(x,{language:v()}),`
`,`
`,(0,n.createElement)(N,{},"Nota Examples"),`
`,`
`,"This page is coming soon!"));var g="metadata",C=g in m?m[g]:{},L=e=>o.default.createElement(w,{...e},o.default.createElement("div",{id:"root"},o.default.createElement(a,null))),b=async e=>{let r=Date.now(),t=new MutationObserver(l=>{r=Date.now()});return t.observe(e,{subtree:!0,childList:!0,attributes:!0}),new Promise(l=>{let D=setInterval(()=>{Date.now()-r>1e3&&(clearInterval(D),t.disconnect(),l())},50)})},O=async()=>{let e=document.documentElement;if(e.classList.contains("ssr-env"))e.classList.remove("ssr-env"),s.default.render(o.default.createElement(L,{...C,script:"./examples.mjs"}),e),await b(e),window.NOTA_READY=!0;else{let r=document.getElementById("root"),t=document.createElement("div");s.default.render(o.default.createElement(a,null),t),await b(t),r.parentNode.replaceChild(t,r)}};O();
