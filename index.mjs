import{a as g,b as f}from"./chunk-LE6MS6NA.mjs";import{E as b,a as m,b as a,c as u,d as T,e as x,k as h,m as p}from"./chunk-OAKN26CX.mjs";var o=a(u()),c=a(T());var i={};m(i,{default:()=>r,imports:()=>A,metadata:()=>S,source:()=>R});var e=a(u()),w=a(x());var s={};m(s,{default:()=>k});var k={};var{Document:D,Section:y}=p,{ListingConfigure:P,Listing:d}=h,S={title:"Nota: A Document Language for the Browser"},A={"./components/inline-editor":{...f,__esModule:!0},"../css/app.scss":{...s,__esModule:!0}},R=`%%%
export let metadata = {
  title: "Nota: A Document Language for the Browser"
};

import {InlineEditor} from "./components/inline-editor";

import "../css/app.scss";
%%%

@ListingConfigure[wrap: true]

@InlineEditor[fancy: true]|{
// This code is editable!
% let nota = @Smallcaps{**Nota**}
@Definition[name: "nota", label: nota]:
  #nota is a language for writing documents, like academic papers and blog posts.
  The goal of #nota is to 
  **bring documents into the #(20 + 1)st century.**

Documents contain a lot of structure --- for example, "&nota" is a reference to a term defined in the preceding paragraph. &nota enables authors to *represent* that structure, which allows the reading medium (the browser) to *understand* that structure, which in turn empowers readers to *use* that structure. Try clicking on any "&nota" reference to see this idea in action. (Then try double-clicking!)

A &nota document compiles to a JavaScript program, meaning it's easy to:

* View documents on any device that has a web browser.
* Use variables, functions, and data structures to simplify document writing.
* Integrate with JavaScript libraries like [KaTeX](https://katex.org/), [Vega-Lite](https://vega.github.io/vega-lite/), and [Penrose](https://github.com/penrose/penrose).
* Support accessibility needs like screen readers.
}|

@Section[name: "usage"]: Usage

You can use Nota by installing the \`nota\` executable via the \`@nota-lang/nota\` package. You need [NodeJS \u2265 16](https://nodejs.org/en/download/) and [npm \u2265 6](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). The NodeJS global binary directory must be on your shell's \`PATH\`, e.g. by running

\`\`\`
export PATH="$(npm config get prefix)/bin:$PATH"
\`\`\`

Then you can build a single Nota document by running these shell commands:

\`\`\`
npm install --global @nota-lang/nota
echo "@h1{Hello world}" > index.nota
nota build index.nota
open dist/index.html
\`\`\`

You can interactively edit a Nota file by running the Nota editor, like so:

\`\`\`
nota edit index.nota
\`\`\`

To learn more about how to write Nota documents, you can read through  the [Reference](reference.html). To add Nota to your website or to learn more about Nota's architecture, read the [Integration guide](integration.html).

**Nota is a new and evolving technology.** The architecture and API are continually changing. Tooling will have bugs and missing features. Documentation will be incomplete or incorrect. Right now, I am seeking early adopters that want to help make Nota the document language of the future.

@Section: Why Nota?

There are two main mediums for digital documents: PDFs and web pages. PDFs were designed to mirror physical documents, so they impose the real-world constraints of paper: page breaks, fixed width, and immutable styling. Web pages, by contrast, provides an essential dynamism. Web pages can be dynamically formatted: resized for phones, translated into other languages, colors changed for color-blindness. Web pages can be dynamically interactive: text prompted for more context, diagrams shifted for a new perspective, annotations added for posterity. Web pages are undeniably the future of digital documents.

But currently, that dynamism is only accessible to professional web developers. Existing document tools like [LaTeX](https://www.latex-project.org/), [Pandoc](https://pandoc.org/), [Markdown](https://daringfireball.net/projects/markdown/), and [Scribble](https://docs.racket-lang.org/scribble/) can (for the most part) only generate static web pages. Nota's goal is to bridge that gap by providing authors with a document language that has a low floor, a high ceiling, and a smooth ramp up. 

Part of this design is identifying components that are easy to use for authors and have high impact for the reader. For instance, the \`@Definition\` and \`@Ref\` components in the example above require a small amount of document annotation on the author's part. Then the Nota runtime can provide features like presenting a reference's definition in context via tooltip. Future Nota versions could include more advanced features like @q{find all references to this definition}.

For more on this design philosophy, you can read my original paper ["A New Medium for Communicating Research on Programming Languages"](https://willcrichton.net/nota/).
`,r=(0,w.observer)(function(n){return(0,e.createElement)(D,n,null,(0,e.createElement)(P,{wrap:!0}),(0,e.createElement)(g,{fancy:!0},`
// This code is editable!
% let nota = @Smallcaps{**Nota**}
@Definition[name: "nota", label: nota]:
  #nota is a language for writing documents, like academic papers and blog posts.
  The goal of #nota is to 
  **bring documents into the #(20 + 1)st century.**

Documents contain a lot of structure --- for example, "&nota" is a reference to a term defined in the preceding paragraph. &nota enables authors to *represent* that structure, which allows the reading medium (the browser) to *understand* that structure, which in turn empowers readers to *use* that structure. Try clicking on any "&nota" reference to see this idea in action. (Then try double-clicking!)

A &nota document compiles to a JavaScript program, meaning it's easy to:

* View documents on any device that has a web browser.
* Use variables, functions, and data structures to simplify document writing.
* Integrate with JavaScript libraries like [KaTeX](https://katex.org/), [Vega-Lite](https://vega.github.io/vega-lite/), and [Penrose](https://github.com/penrose/penrose).
* Support accessibility needs like screen readers.
`),(0,e.createElement)(y,{name:"usage"},"Usage"),(0,e.createElement)("p",{},"You can use Nota by installing the ",(0,e.createElement)("code",{},"nota")," executable via the ",(0,e.createElement)("code",{},"@nota-lang/nota")," package. You need ",(0,e.createElement)("a",{href:"https://nodejs.org/en/download/"},"NodeJS \u2265 16")," and ",(0,e.createElement)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm \u2265 6"),". The NodeJS global binary directory must be on your shell's ",(0,e.createElement)("code",{},"PATH"),", e.g. by running"),(0,e.createElement)(d,{},'export PATH="$(npm config get prefix)/bin:$PATH"'),(0,e.createElement)("p",{},"Then you can build a single Nota document by running these shell commands:"),(0,e.createElement)(d,{},`npm install --global @nota-lang/nota
echo "@h1{Hello world}" > index.nota
nota build index.nota
open dist/index.html`),(0,e.createElement)("p",{},"You can interactively edit a Nota file by running the Nota editor, like so:"),(0,e.createElement)(d,{},"nota edit index.nota"),(0,e.createElement)("p",{},"To learn more about how to write Nota documents, you can read through  the ",(0,e.createElement)("a",{href:"reference.html"},"Reference"),". To add Nota to your website or to learn more about Nota's architecture, read the ",(0,e.createElement)("a",{href:"integration.html"},"Integration guide"),"."),(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Nota is a new and evolving technology.")," The architecture and API are continually changing. Tooling will have bugs and missing features. Documentation will be incomplete or incorrect. Right now, I am seeking early adopters that want to help make Nota the document language of the future."),(0,e.createElement)(y,{},"Why Nota?"),(0,e.createElement)("p",{},"There are two main mediums for digital documents: PDFs and web pages. PDFs were designed to mirror physical documents, so they impose the real-world constraints of paper: page breaks, fixed width, and immutable styling. Web pages, by contrast, provides an essential dynamism. Web pages can be dynamically formatted: resized for phones, translated into other languages, colors changed for color-blindness. Web pages can be dynamically interactive: text prompted for more context, diagrams shifted for a new perspective, annotations added for posterity. Web pages are undeniably the future of digital documents."),(0,e.createElement)("p",{},"But currently, that dynamism is only accessible to professional web developers. Existing document tools like ",(0,e.createElement)("a",{href:"https://www.latex-project.org/"},"LaTeX"),", ",(0,e.createElement)("a",{href:"https://pandoc.org/"},"Pandoc"),", ",(0,e.createElement)("a",{href:"https://daringfireball.net/projects/markdown/"},"Markdown"),", and ",(0,e.createElement)("a",{href:"https://docs.racket-lang.org/scribble/"},"Scribble")," can (for the most part) only generate static web pages. Nota's goal is to bridge that gap by providing authors with a document language that has a low floor, a high ceiling, and a smooth ramp up. "),(0,e.createElement)("p",{},"Part of this design is identifying components that are easy to use for authors and have high impact for the reader. For instance, the ",(0,e.createElement)("code",{},"@Definition")," and ",(0,e.createElement)("code",{},"@Ref")," components in the example above require a small amount of document annotation on the author's part. Then the Nota runtime can provide features like presenting a reference's definition in context via tooltip. Future Nota versions could include more advanced features like ",(0,e.createElement)("q",{},"find all references to this definition"),"."),(0,e.createElement)("p",{},"For more on this design philosophy, you can read my original paper ",(0,e.createElement)("a",{href:"https://willcrichton.net/nota/"},'"A New Medium for Communicating Research on Programming Languages"'),"."))});var v="metadata",L=v in i?i[v]:{},E=({onRender:t,...n})=>o.default.createElement(b,{...n},o.default.createElement("div",{id:"root"},o.default.createElement(r,{onRender:t,renderTimeout:1e3}))),l=document.documentElement;if(l.classList.contains("ssr-env"))l.classList.remove("ssr-env"),c.createRoot(l).render(o.default.createElement(E,{...L,script:"./index.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let t=document.getElementById("root"),n=document.createElement("div");c.createRoot(n).render(o.default.createElement(r,{onRender:()=>{t.parentNode.replaceChild(n,t)}}))}
