import{a as p,b as h}from"./chunk-6YJQUY56.mjs";import{E as c,a as v,b as a,c as m,d as w,e as N,n as d,o as u}from"./chunk-BZYFOZQA.mjs";var n=a(m()),l=a(w());var r={};v(r,{default:()=>i,imports:()=>E,metadata:()=>L,source:()=>T});var o=a(m()),b=a(N());var{Document:y}=d,{Title:_}=u,L={title:"Nota Playground",className:"examples"},E={"./components/page-editor":{...h,__esModule:!0}},T=`%%%
export let metadata = {
  title: "Nota Playground",
  className: "examples",
}

import {PageEditor} from "./components/page-editor";
%%%

@div[className: "base-style-block"]:
  @Title: Nota Playground

@PageEditor[contents: \`
@Title: *Nota bene*

From Wikipedia, the free encyclopedia

**_Nota bene_** (/\\\`\u02C8no\u028At\u0259 \u02C8b\u025Bne\u026A\\\`/, /\\\`\u02C8no\u028At\u0259 \u02C8b\u025Bni\\\`/ or /\\\`\u02C8no\u028At\u0259 \u02C8bi\u02D0ni\\\`/; plural form **_notate bene_**) is a Latin phrase meaning "note well". It is often abbreviated as **_NB_**, **_n.b._**, or with the ligature $\\\\mathrm{N}\\\\!\\\\!\\\\mathrm{B}$ and first appeared in English writing c.\u20091711. In Modern English, it is used, particularly in legal papers, to draw the attention of the reader to a certain (side) aspect or detail of the subject being addressed. While NB is also often used in academic writing, *note* is a common substitute.

The markings used to draw readers' attention in medieval manuscripts are also called nota bene marks. The common medieval markings do not, however, include the abbreviation NB. The usual medieval equivalents are anagrams from the four letters in the word nota, the abbreviation DM from dignum memoria ("worth remembering"), or a symbol of a little hand (\u261E), called a manicule or index, with the index finger pointing towards the beginning of the significant passage.

@Section[plain: true]: See Also

* Annotation
* Footnote
* List of Latin Abbreviations
* List of Latin phrases
* List of legal Latin terms
* *Obiter dictum*
* *Postscript*
* *Quod vide*
\`.trim()]`,i=(0,b.observer)(function(e){return(0,o.createElement)(y,e,null,(0,o.createElement)("div",{className:"base-style-block"},(0,o.createElement)(_,{block:!0},"Nota Playground")),(0,o.createElement)(p,{block:!0,contents:`
@Title: *Nota bene*

From Wikipedia, the free encyclopedia

**_Nota bene_** (/\`\u02C8no\u028At\u0259 \u02C8b\u025Bne\u026A\`/, /\`\u02C8no\u028At\u0259 \u02C8b\u025Bni\`/ or /\`\u02C8no\u028At\u0259 \u02C8bi\u02D0ni\`/; plural form **_notate bene_**) is a Latin phrase meaning "note well". It is often abbreviated as **_NB_**, **_n.b._**, or with the ligature $\\mathrm{N}\\!\\!\\mathrm{B}$ and first appeared in English writing c.\u20091711. In Modern English, it is used, particularly in legal papers, to draw the attention of the reader to a certain (side) aspect or detail of the subject being addressed. While NB is also often used in academic writing, *note* is a common substitute.

The markings used to draw readers' attention in medieval manuscripts are also called nota bene marks. The common medieval markings do not, however, include the abbreviation NB. The usual medieval equivalents are anagrams from the four letters in the word nota, the abbreviation DM from dignum memoria ("worth remembering"), or a symbol of a little hand (\u261E), called a manicule or index, with the index finger pointing towards the beginning of the significant passage.

@Section[plain: true]: See Also

* Annotation
* Footnote
* List of Latin Abbreviations
* List of Latin phrases
* List of legal Latin terms
* *Obiter dictum*
* *Postscript*
* *Quod vide*
`.trim()}))});var g="metadata",k=g in r?r[g]:{},x=({onRender:t,...e})=>n.default.createElement(c,{...e},n.default.createElement("div",{id:"root"},n.default.createElement(i,{onRender:t,renderTimeout:1e3}))),s=document.documentElement;if(s.classList.contains("ssr-env"))s.classList.remove("ssr-env"),l.createRoot(s).render(n.default.createElement(x,{...k,script:"./playground.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let t=document.getElementById("root"),e=document.createElement("div");e.style.position="absolute",e.style.left="-999999px";let f=l.createRoot(e);t.parentNode.appendChild(e),f.render(n.default.createElement(i,{onRender:()=>{e.style.position="relative",e.style.left="0",t.parentNode.replaceChild(e,t)}}))}
