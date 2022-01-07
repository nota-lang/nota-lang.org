import{A as d,J as y,K as c,L as m,M as w,a as f,b as t,c as r,d as b,e as l,u as n,w as i}from"./chunk-UYBX2XD6.mjs";var o=t(r()),h=t(b());var a={};f(a,{default:()=>s,metadata:()=>v});var e=t(r());var v={title:"Nota: A Document Language for the Browser"},s=l(()=>(0,e.createElement)(d,{},...(()=>[`
`,`
`,(0,e.createElement)(c,{fancy:!0},`// This code is editable!
%(let nota = @strong{@Smallcaps{Nota}})
@Definition[name="nota"][Label=nota]{
  #nota is a language for writing documents, like academic papers and blog posts.
}
The goal of @Ref{nota} is to @strong{bring documents into the #(20 + 1)st century.}

Documents contain a lot of structure --- for example, "@Ref{nota}" is a reference to a term defined in the preceding paragraph. @Ref{nota} enables authors to @em{represent} that structure, which allows the reading medium (the browser) to @em{understand} that structure, which in turn empowers readers to @em{use} that structure. Try clicking on any "@Ref{nota}" reference to see this idea in action. (Then try double-clicking!)

A @Ref{nota} document compiles to a JavaScript program, meaning it's easy to:

@ul{
  @li{View documents on any device that has a web browser.}
  @li{Use variables, functions, and data structures to simplify document writing.}
  @li{Integrate with JavaScript libraries like @a[href="https://katex.org/"]{KaTeX}, @a[href="https://vega.github.io/vega-lite/"]{Vega-Lite}, and @a[href="https://github.com/penrose/penrose"]{Penrose}.}
  @li{Support accessibility needs like screen readers.}
}`),`
`,`
`,(0,e.createElement)(i,{label:"usage"},"Usage"),`
`,`
`,"You can use Nota by installing the ",(0,e.createElement)("code",{},"nota")," executable via the ",(0,e.createElement)("code",{},"@nota-lang/nota")," package. You need ",(0,e.createElement)("a",{href:"https://nodejs.org/en/download/"},"NodeJS \u2265 16")," and ",(0,e.createElement)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm \u2265 6"),". The NodeJS global binary directory must be on your shell's ",(0,e.createElement)("code",{},"PATH"),", e.g. by running",`
`,`
`,(0,e.createElement)(n,{},'export PATH="$(npm config get prefix)/bin:$PATH"'),`
`,`
`,"Then you can build a single Nota document by running these shell commands:",`
`,`
`,`
`,`
`,`
`,`
`,(0,e.createElement)(n,{},`npm install --global @nota-lang/nota
echo "@h1{Hello world}" > index.nota
nota build index.nota
open dist/index.html`),`
`,`
`,"You can interactively edit a Nota file by running the Nota editor, like so:",`
`,`
`,(0,e.createElement)(n,{},"nota edit index.nota"),`
`,`
`,"To learn more about how to write Nota documents, you can follow the ",(0,e.createElement)("a",{href:"/tutorial.html"},"Tutorial"),". To add Nota to your website or to learn more about Nota's architecture, read the ",(0,e.createElement)("a",{href:"/integration.html"},"Integration guide"),".",`
`,`
`,(0,e.createElement)("strong",{},"Nota is a new and evolving technology.")," The architecture and API are continually changing. Tooling will have bugs and missing features. Documentation will be incomplete or incorrect. Right now, I am seeking early adopters that want to help make Nota the document language of the future.",`
`,`
`,(0,e.createElement)(i,{},"Why Nota?"),`
`,`
`,"There are two main mediums for digital documents: PDFs and web pages. PDFs were designed to mirror physical documents, so they impose the real-world constraints of paper: page breaks, fixed width, and immutable styling. Web pages, by contrast, provides an essential dynamism. Web pages can be dynamically formatted: resized for phones, translated into other languages, colors changed for color-blindness. Web pages can be dynamically interactive: text prompted for more context, diagrams shifted for a new perspective, annotations added for posterity. Web pages are undeniably the future of digital documents.",`
`,`
`,"But currently, that dynamism is only accessible to professional web developers. Existing document tools like ",(0,e.createElement)("a",{href:"https://www.latex-project.org/"},"LaTeX"),", ",(0,e.createElement)("a",{href:"https://pandoc.org/"},"Pandoc"),", ",(0,e.createElement)("a",{href:"https://daringfireball.net/projects/markdown/"},"Markdown"),", and ",(0,e.createElement)("a",{href:"https://docs.racket-lang.org/scribble/"},"Scribble")," can (for the most part) only generate static web pages. Nota's goal is to bridge that gap by providing authors with a document language that has a low floor, a high ceiling, and a smooth ramp up. ",`
`,`
`,"Part of this design is identifying components that are easy to use for authors and have high impact for the reader. For instance, the ",(0,e.createElement)("code",{},"@Definition")," and ",(0,e.createElement)("code",{},"@Ref")," components in the example above require a small amount of document annotation on the author's part. Then the Nota runtime can provide features like presenting a reference's definition in context via tooltip. Future Nota versions could include more advanced features like ",(0,e.createElement)("q",{},"find all references to this definition"),".",`
`,`
`,"For more on this design philosophy, you can read my original paper ",(0,e.createElement)("a",{href:"https://willcrichton.net/nota/"},'"A New Medium for Communicating Research on Programming Languages"'),"."])()));var u=t(y()),N=t(r()),k=t(w()),g="metadata",x=g in a?a[g]:{},T=p=>o.default.createElement(m,{...p},o.default.createElement(s,null));u.canUseDOM&&h.default.hydrate(o.default.createElement(T,{...x,script:"./index.mjs"}),document.documentElement);var export_React=N.default;var export_ReactDOMServer=k.default;export{T as Page,export_React as React,export_ReactDOMServer as ReactDOMServer,x as metadata};
