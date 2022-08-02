import{b as x}from"./chunk-CKFEGS5B.mjs";import{E as u,a as E,b as r,c as s,d as v,e as w,m as p,o as d,t as c,w as f}from"./chunk-P6XDTPJ4.mjs";var n=r(s()),l=r(v());var i={};E(i,{default:()=>a,imports:()=>M,metadata:()=>D,source:()=>T});var e=r(s()),h=r(w());var{Document:N}=p,{Title:R}=d,D={title:"Nota Examples"},M={"./components/inline-editor":{...x,__esModule:!0},"@nota-lang/nota-syntax/dist/editor/mod.js":{...f,__esModule:!0},"@nota-lang/nota-components/dist/index.css":{...c,__esModule:!0}},T=`%%%
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

    ![A mathematical definition with a tooltip showing above one letter](/static/examples/infoflow-paper.jpg)`,a=(0,h.observer)(function(o){return(0,e.createElement)(N,o,null,(0,e.createElement)(R,{},"Nota Examples"),(0,e.createElement)("div",{className:"example-grid"},(0,e.createElement)("a",{href:"./examples/infoflow-paper/index.html"},(0,e.createElement)("h2",{},"PL Research Paper"),(0,e.createElement)("p",{},(0,e.createElement)("img",{src:"/static/examples/infoflow-paper.jpg",alt:"A mathematical definition with a tooltip showing above one letter"})))))});var g="metadata",_=g in i?i[g]:{},j=({onRender:t,...o})=>n.default.createElement(u,{...o},n.default.createElement("div",{id:"root"},n.default.createElement(a,{onRender:t,renderTimeout:1e3}))),m=document.documentElement;if(m.classList.contains("ssr-env"))m.classList.remove("ssr-env"),l.createRoot(m).render(n.default.createElement(j,{..._,script:"./examples.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let t=document.getElementById("root"),o=document.createElement("div");l.createRoot(o).render(n.default.createElement(a,{onRender:()=>{t.parentNode.replaceChild(o,t)}}))}
