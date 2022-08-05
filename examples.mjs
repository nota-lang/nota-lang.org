import{b as x}from"./chunk-6KB7UQWS.mjs";import{E as u,a as v,b as r,c as s,d as w,e as N,m as p,o as d,t as c,w as f}from"./chunk-YOYT3NV3.mjs";var n=r(s()),l=r(w());var i={};v(i,{default:()=>a,imports:()=>M,metadata:()=>D,source:()=>T});var t=r(s()),h=r(N());var{Document:y}=p,{Title:R}=d,D={title:"Nota Examples"},M={"./components/inline-editor":{...x,__esModule:!0},"@nota-lang/nota-syntax/dist/editor/mod.js":{...f,__esModule:!0},"@nota-lang/nota-components/dist/index.css":{...c,__esModule:!0}},T=`%%%
export let metadata = {
  title: "Nota Examples"
};

import {InlineEditor} from "./components/inline-editor";
import {nota} from "@nota-lang/nota-syntax/dist/editor/mod.js";
import "@nota-lang/nota-components/dist/index.css";
%%%

@Title: Nota Examples

@div[className: "example-grid"]:
  @a[href: "./examples/infoflow-paper/index.html"]:
    @h2: PL Research Paper

    ![A mathematical definition with a tooltip showing above one letter](/static/examples/infoflow-paper.jpg)`,a=(0,h.observer)(function(e){return(0,t.createElement)(y,e,null,(0,t.createElement)(R,{block:!0},"Nota Examples"),(0,t.createElement)("div",{className:"example-grid"},(0,t.createElement)("a",{href:"./examples/infoflow-paper/index.html"},(0,t.createElement)("h2",{},"PL Research Paper"),(0,t.createElement)("p",{},(0,t.createElement)("img",{src:"/static/examples/infoflow-paper.jpg",alt:"A mathematical definition with a tooltip showing above one letter"})))))});var g="metadata",_=g in i?i[g]:{},b=({onRender:o,...e})=>n.default.createElement(u,{...e},n.default.createElement("div",{id:"root"},n.default.createElement(a,{onRender:o,renderTimeout:1e3}))),m=document.documentElement;if(m.classList.contains("ssr-env"))m.classList.remove("ssr-env"),l.createRoot(m).render(n.default.createElement(b,{..._,script:"./examples.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let o=document.getElementById("root"),e=document.createElement("div");e.style.position="absolute",e.style.left="-999999px";let E=l.createRoot(e);o.parentNode.appendChild(e),E.render(n.default.createElement(a,{onRender:()=>{e.style.position="relative",e.style.left="0",o.parentNode.replaceChild(e,o)}}))}
