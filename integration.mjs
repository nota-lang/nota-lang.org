import{b as w}from"./chunk-6KB7UQWS.mjs";import{A as v,E as x,a as j,b as r,c as g,d as R,e as N,k as m,m as h,o as f,w as b,z as y}from"./chunk-YOYT3NV3.mjs";var i=r(g()),p=r(R());var l={};j(l,{default:()=>s,imports:()=>P,metadata:()=>D,source:()=>E});var t=r(g()),k=r(N());var{Document:A,TableOfContents:S,Section:u,Subsection:c}=h,{ListingConfigure:I,Listing:n}=m,{Title:M}=f,D={title:"Nota Integration Guide"},P={"./components/inline-editor":{...w,__esModule:!0},"@nota-lang/nota-syntax/dist/editor/mod.js":{...b,__esModule:!0},"@codemirror/lang-javascript":{...v,__esModule:!0}},E=`%%%
export let metadata = {
  title: "Nota Integration Guide"
};

import {InlineEditor} from "./components/inline-editor";
import {nota} from "@nota-lang/nota-syntax/dist/editor/mod.js";
import {javascript} from "@codemirror/lang-javascript";

let js = javascript({typescript: true, jsx: true});
%%%

@ListingConfigure[wrap: true]

@Title: Nota Integration Guide

After [installing Nota](/#def-usage), the simplest way to use it is to input a single document and output a single web page. For example, by running:

\`\`\`
nota edit index.nota
nota build index.nota
\`\`\`

You can write the document using the first command. The second command generates a directory \`dist\` containing the ready-to-distribute files, including HTML, CSS, Javascript, and other assets like images. You can put these files on any web hosting service, such as [Github Pages](https://pages.github.com/).

If you want to use Nota in a broader context, such as a personal website or an online academic journal, the remainder of this guide will explain Nota's overall architecture, and how it can fit into your use case.

@TableOfContents

@Section: Architecture


A Nota document is a [React](https://reactjs.org/) program. Therefore Nota can be used anywhere React can be used. More specifically, Nota is comprised of three main pieces:

1. [\`@nota-lang/nota-syntax\`](https://github.com/nota-lang/nota/tree/master/packages/nota-syntax): A document-authoring language that compiles to React JavaScript.
2. [\`@nota-lang/nota-components\`](https://github.com/nota-lang/nota/tree/master/packages/nota-components): A set of React components for structuring documents.
3. [\`@nota-lang/nota-editor\`](https://github.com/nota-lang/nota/tree/master/packages/nota-editor): An editor designed for Nota documents.

The complete Nota pipeline (in the [\`@nota-lang/nota\`](https://github.com/nota-lang/nota/tree/master/packages/nota) package) turns a Nota document into a standalone web page. This pipeline includes bundling via [esbuild](https://esbuild.github.io/), as well as server-side rendering via [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html).

@Section: Building

The \`@nota-lang/nota-syntax\` package exports two key functions:

\`\`\`js
let tryParse(input: string): Result<lezer.Tree>;
let translate(input: string, tree: lezer.Tree): {code: string; map?: string};
\`\`\`

These functions parse and translate, respectively, a Nota document into a React program (via a [Lezer](https://lezer.codemirror.net/) tree). If possible, you should not call these functions directly but rather use a bundler integration. Currently we only support [esbuild](https://esbuild.github.io/), but other integrations are welcome!

@Subsection: esbuild

First, import \`notaPlugin\` and add it to your list of plugins:

\`\`\`js
import { notaPlugin } from "\\@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import esbuild from "esbuild";

esbuild.build({
  /* your configuration... */
  plugins: [notaPlugin()]
})
\`\`\`

This plugin will allow you to import a file with a \`.nota\` extension. The file's default export will be the document's React component. For example:

\`\`\`js
import React from "react";
import ReactDOM from "react-dom";
import Doc from "./index.nota";

let App = () => <div>
  <h1>My Website</h1>
  <Doc />
</div>;

ReactDOM.renderToString(<App />, document.getElementById('app'));
\`\`\`

If you follow the approach above, all pipeline issues like bundling and server-side rendering are up to you. Alternatively, you can use the [\`@nota-lang/esbuild-utils\`](https://github.com/nota-lang/nota/tree/master/packages/esbuild-utils) package to get a simple Nota-enabled static site generator that includes bundling and SSR. Check out the \`build.mjs\` file for [nota-lang.org](https://github.com/nota-lang/nota-lang.org) and [willcrichton.net](https://github.com/willcrichton/willcrichton.github.io) as examples.


@Section: Editing

You can still use the Nota editor on documents that are not built via \`nota build\`. The \`nota edit\` command can take additional flags to interoperate with your personal build pipeline. 

@Subsection: Build configuration

If you are using esbuild and have custom esbuild flags, e.g. a plugin like [esbuild-sass-plugin](https://github.com/glromeo/esbuild-sass-plugin), then you can define a configuration file like so:

\`\`\`js
// nota.config.mjs
import { sassPlugin } from "esbuild-sass-plugin";

export default {
  plugins: [sassPlugin()];
}
\`\`\`

Then incorporate it into your build script:

\`\`\`js
// build.mjs
import config from "./nota.config.mjs";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["./src/index.nota"],
  ...config
})
\`\`\`

And then provide the configuration path to the editor:

\`\`\`
nota edit src/index.nota --config nota.config.mjs
\`\`\`

@Subsection: Asset folder

If your document contains local URLs to assets like images, then you can configure the editor to serve files out of a given directory:

\`\`\`
nota edit src/index.nota --static assets
\`\`\``,s=(0,k.observer)(function(e){return(0,t.createElement)(A,e,...(()=>{let a=y({typescript:!0,jsx:!0});return[null,(0,t.createElement)(I,{block:!0,wrap:!0}),(0,t.createElement)(M,{block:!0},"Nota Integration Guide"),(0,t.createElement)("p",{},"After ",(0,t.createElement)("a",{href:"/#def-usage"},"installing Nota"),", the simplest way to use it is to input a single document and output a single web page. For example, by running:"),(0,t.createElement)(n,{},`nota edit index.nota
nota build index.nota`),(0,t.createElement)("p",{},"You can write the document using the first command. The second command generates a directory ",(0,t.createElement)("code",{},"dist")," containing the ready-to-distribute files, including HTML, CSS, Javascript, and other assets like images. You can put these files on any web hosting service, such as ",(0,t.createElement)("a",{href:"https://pages.github.com/"},"Github Pages"),"."),(0,t.createElement)("p",{},"If you want to use Nota in a broader context, such as a personal website or an online academic journal, the remainder of this guide will explain Nota's overall architecture, and how it can fit into your use case."),(0,t.createElement)(S,{block:!0}),(0,t.createElement)(u,{block:!0},"Architecture"),(0,t.createElement)("p",{},"A Nota document is a ",(0,t.createElement)("a",{href:"https://reactjs.org/"},"React")," program. Therefore Nota can be used anywhere React can be used. More specifically, Nota is comprised of three main pieces:"),(0,t.createElement)("ol",{},(0,t.createElement)("li",{},(0,t.createElement)("p",{},(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-syntax"},(0,t.createElement)("code",{},"@nota-lang/nota-syntax")),": A document-authoring language that compiles to React JavaScript.")),(0,t.createElement)("li",{},(0,t.createElement)("p",{},(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-components"},(0,t.createElement)("code",{},"@nota-lang/nota-components")),": A set of React components for structuring documents.")),(0,t.createElement)("li",{},(0,t.createElement)("p",{},(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-editor"},(0,t.createElement)("code",{},"@nota-lang/nota-editor")),": An editor designed for Nota documents."))),(0,t.createElement)("p",{},"The complete Nota pipeline (in the ",(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota"},(0,t.createElement)("code",{},"@nota-lang/nota"))," package) turns a Nota document into a standalone web page. This pipeline includes bundling via ",(0,t.createElement)("a",{href:"https://esbuild.github.io/"},"esbuild"),", as well as server-side rendering via ",(0,t.createElement)("a",{href:"https://reactjs.org/docs/react-dom-server.html"},"ReactDOMServer"),"."),(0,t.createElement)(u,{block:!0},"Building"),(0,t.createElement)("p",{},"The ",(0,t.createElement)("code",{},"@nota-lang/nota-syntax")," package exports two key functions:"),(0,t.createElement)(n,{language:a},`let tryParse(input: string): Result<lezer.Tree>;
let translate(input: string, tree: lezer.Tree): {code: string; map?: string};`),(0,t.createElement)("p",{},"These functions parse and translate, respectively, a Nota document into a React program (via a ",(0,t.createElement)("a",{href:"https://lezer.codemirror.net/"},"Lezer")," tree). If possible, you should not call these functions directly but rather use a bundler integration. Currently we only support ",(0,t.createElement)("a",{href:"https://esbuild.github.io/"},"esbuild"),", but other integrations are welcome!"),(0,t.createElement)(c,{block:!0},"esbuild"),(0,t.createElement)("p",{},"First, import ",(0,t.createElement)("code",{},"notaPlugin")," and add it to your list of plugins:"),(0,t.createElement)(n,{language:a},`import { notaPlugin } from "\\@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import esbuild from "esbuild";

esbuild.build({
  /* your configuration... */
  plugins: [notaPlugin()]
})`),(0,t.createElement)("p",{},"This plugin will allow you to import a file with a ",(0,t.createElement)("code",{},".nota")," extension. The file's default export will be the document's React component. For example:"),(0,t.createElement)(n,{language:a},`import React from "react";
import ReactDOM from "react-dom";
import Doc from "./index.nota";

let App = () => <div>
  <h1>My Website</h1>
  <Doc />
</div>;

ReactDOM.renderToString(<App />, document.getElementById('app'));`),(0,t.createElement)("p",{},"If you follow the approach above, all pipeline issues like bundling and server-side rendering are up to you. Alternatively, you can use the ",(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/esbuild-utils"},(0,t.createElement)("code",{},"@nota-lang/esbuild-utils"))," package to get a simple Nota-enabled static site generator that includes bundling and SSR. Check out the ",(0,t.createElement)("code",{},"build.mjs")," file for ",(0,t.createElement)("a",{href:"https://github.com/nota-lang/nota-lang.org"},"nota-lang.org")," and ",(0,t.createElement)("a",{href:"https://github.com/willcrichton/willcrichton.github.io"},"willcrichton.net")," as examples."),(0,t.createElement)(u,{block:!0},"Editing"),(0,t.createElement)("p",{},"You can still use the Nota editor on documents that are not built via ",(0,t.createElement)("code",{},"nota build"),". The ",(0,t.createElement)("code",{},"nota edit")," command can take additional flags to interoperate with your personal build pipeline. "),(0,t.createElement)(c,{block:!0},"Build configuration"),(0,t.createElement)("p",{},"If you are using esbuild and have custom esbuild flags, e.g. a plugin like ",(0,t.createElement)("a",{href:"https://github.com/glromeo/esbuild-sass-plugin"},"esbuild-sass-plugin"),", then you can define a configuration file like so:"),(0,t.createElement)(n,{language:a},`// nota.config.mjs
import { sassPlugin } from "esbuild-sass-plugin";

export default {
  plugins: [sassPlugin()];
}`),(0,t.createElement)("p",{},"Then incorporate it into your build script:"),(0,t.createElement)(n,{language:a},`// build.mjs
import config from "./nota.config.mjs";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["./src/index.nota"],
  ...config
})`),(0,t.createElement)("p",{},"And then provide the configuration path to the editor:"),(0,t.createElement)(n,{},"nota edit src/index.nota --config nota.config.mjs"),(0,t.createElement)(c,{block:!0},"Asset folder"),(0,t.createElement)("p",{},"If your document contains local URLs to assets like images, then you can configure the editor to serve files out of a given directory:"),(0,t.createElement)(n,{},"nota edit src/index.nota --static assets")]})())});var T="metadata",C=T in l?l[T]:{},O=({onRender:o,...e})=>i.default.createElement(x,{...e},i.default.createElement("div",{id:"root"},i.default.createElement(s,{onRender:o,renderTimeout:1e3}))),d=document.documentElement;if(d.classList.contains("ssr-env"))d.classList.remove("ssr-env"),p.createRoot(d).render(i.default.createElement(O,{...C,script:"./integration.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let o=document.getElementById("root"),e=document.createElement("div");e.style.position="absolute",e.style.left="-999999px";let a=p.createRoot(e);o.parentNode.appendChild(e),a.render(i.default.createElement(s,{onRender:()=>{e.style.position="relative",e.style.left="0",o.parentNode.replaceChild(e,o)}}))}
