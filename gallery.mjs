import{b as u}from"./chunk-LE6MS6NA.mjs";import{E as g,a as w,b as n,c as s,d as x,e as v,m as p,o as d,t as c,w as f}from"./chunk-OAKN26CX.mjs";var r=n(s()),m=n(x());var i={};w(i,{default:()=>a,imports:()=>M,metadata:()=>D,source:()=>T});var t=n(s()),h=n(v());var{Document:E}=p,{Title:R}=d,D={title:"Nota Gallery"},M={"./components/inline-editor":{...u,__esModule:!0},"@nota-lang/nota-syntax/dist/editor/mod.js":{...f,__esModule:!0},"@nota-lang/nota-components/dist/index.css":{...c,__esModule:!0}},T=`%%%
export let metadata = {
  title: "Nota Gallery"
};

import {InlineEditor} from "./components/inline-editor";
import {nota} from "@nota-lang/nota-syntax/dist/editor/mod.js";
import "@nota-lang/nota-components/dist/index.css";
%%%

@Title: Nota Gallery

## [PL Research Paper](./gallery/infoflow-paper/index.html)

![A mathematical definition with a tooltip showing above one letter](/static/gallery/infoflow-paper.jpg)`,a=(0,h.observer)(function(o){return(0,t.createElement)(E,o,null,(0,t.createElement)(R,{},"Nota Gallery"),(0,t.createElement)("h2",{}," ",(0,t.createElement)("a",{href:"./gallery/infoflow-paper/index.html"},"PL Research Paper")),(0,t.createElement)("p",{},(0,t.createElement)("img",{src:"/static/gallery/infoflow-paper.jpg",alt:"A mathematical definition with a tooltip showing above one letter"})))});var y="metadata",_=y in i?i[y]:{},N=({onRender:e,...o})=>r.default.createElement(g,{...o},r.default.createElement("div",{id:"root"},r.default.createElement(a,{onRender:e,renderTimeout:1e3}))),l=document.documentElement;if(l.classList.contains("ssr-env"))l.classList.remove("ssr-env"),m.createRoot(l).render(r.default.createElement(N,{..._,script:"./gallery.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let e=document.getElementById("root"),o=document.createElement("div");m.createRoot(o).render(r.default.createElement(a,{onRender:()=>{e.parentNode.replaceChild(o,e)}}))}
