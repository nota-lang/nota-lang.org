import{b as h}from"./chunk-24PGH7KA.mjs";import{E as x,a as v,b as a,c as s,d as E,e as b,n as p,o as d,t as c,w as f}from"./chunk-C6BXXZAP.mjs";var n=a(s()),m=a(E());var r={};v(r,{default:()=>i,imports:()=>j,metadata:()=>R,source:()=>D});var e=a(s()),g=a(b());var{Document:N}=p,{Title:y}=d,R={title:"Nota Examples"},j={"./components/inline-editor":{...h,__esModule:!0},"@nota-lang/nota-syntax/dist/editor/mod.js":{...f,__esModule:!0},"@nota-lang/nota-components/dist/index.css":{...c,__esModule:!0}},D=`%%%
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

    ![A mathematical definition with a tooltip showing above one letter](/static/examples/infoflow-paper.jpg)

  @a[href: "./examples/blog-post/index.html"]:
    @h2: Blog Post

    ![A mathematical definition with a tooltip showing above one letter](/static/examples/blog-post.jpg)`,i=(0,g.observer)(function(t){return(0,e.createElement)(N,t,null,(0,e.createElement)(y,{block:!0},"Nota Examples"),(0,e.createElement)("div",{className:"example-grid"},(0,e.createElement)("a",{href:"./examples/infoflow-paper/index.html"},(0,e.createElement)("h2",{},"PL Research Paper"),(0,e.createElement)("p",{},(0,e.createElement)("img",{src:"/static/examples/infoflow-paper.jpg",alt:"A mathematical definition with a tooltip showing above one letter"}))),(0,e.createElement)("a",{href:"./examples/blog-post/index.html"},(0,e.createElement)("h2",{},"Blog Post"),(0,e.createElement)("p",{},(0,e.createElement)("img",{src:"/static/examples/blog-post.jpg",alt:"A mathematical definition with a tooltip showing above one letter"})))))});var u="metadata",M=u in r?r[u]:{},P=({onRender:o,...t})=>n.default.createElement(x,{...t},n.default.createElement("div",{id:"root"},n.default.createElement(i,{onRender:o,renderTimeout:1e3}))),l=document.documentElement;if(l.classList.contains("ssr-env"))l.classList.remove("ssr-env"),m.createRoot(l).render(n.default.createElement(P,{...M,script:"./examples.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let o=document.getElementById("root"),t=document.createElement("div");t.style.position="absolute",t.style.left="-999999px";let w=m.createRoot(t);o.parentNode.appendChild(t),w.render(n.default.createElement(i,{onRender:()=>{t.style.position="relative",t.style.left="0",o.parentNode.replaceChild(t,o)}}))}
