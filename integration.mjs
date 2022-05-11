import{a as k,b as u,c as g,d as N,e as p,f as h,j as f,k as b,m as y,o as v}from"./chunk-GURI562L.mjs";var a=u(g()),m=u(N());var l={};k(l,{default:()=>s,metadata:()=>R});var e=u(g());var{Document:j,TableOfContents:A,Section:c,Subsection:d}=f,{Listing:r,ListingConfigure:D}=h,{Title:I}=b,R={title:"Nota Integration Guide"},s=p(n=>(0,e.createElement)(j,n,...(()=>{let o=y({typescript:!0,jsx:!0}),t=({children:i})=>(0,e.createElement)(r,{language:o},i);return[`
`,`
`,(0,e.createElement)(D,{wrap:!0}),`
`,`
`,(0,e.createElement)(I,{},"Nota Integration Guide"),`
`,`
`,"After ",(0,e.createElement)("a",{href:"/#def-usage"},"installing Nota"),", the simplest way to use it is to input a single document and output a single web page. For example, by running:",`
`,`
`,(0,e.createElement)(r,{},"nota edit index.nota",`
`,"nota build index.nota"),`
`,`
`,"You can write the document using the first command. The second command generates a directory ",(0,e.createElement)("code",{},"dist")," containing the ready-to-distribute files, including HTML, CSS, Javascript, and other assets like images. You can put these files on any web hosting service, such as ",(0,e.createElement)("a",{href:"https://pages.github.com/"},"Github Pages"),".",`
`,`
`,"If you want to use Nota in a broader context, such as a personal website or an online academic journal, the remainder of this guide will explain Nota's overall architecture, and how it can fit into your use case.",`
`,`
`,(0,e.createElement)(A,{}),`
`,`
`,(0,e.createElement)(c,{},"Architecture"),`
`,`
`,"A Nota document is a ",(0,e.createElement)("a",{href:"https://reactjs.org/"},"React")," program. Therefore Nota can be used anywhere React can be used. More specifically, Nota is comprised of three main pieces:",`
`,`
`,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-syntax"},(0,e.createElement)("code",{},"@nota-lang/nota-syntax")),": A document-authoring language that compiles to React JavaScript."),`
`,(0,e.createElement)("li",{},(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-components"},(0,e.createElement)("code",{},"@nota-lang/nota-components")),": A set of React components for structuring documents."),`
`,(0,e.createElement)("li",{},(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-editor"},(0,e.createElement)("code",{},"@nota-lang/nota-editor")),": An editor designed for Nota documents.")),`
`,`
`,"The complete Nota pipeline (in the ",(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota"},(0,e.createElement)("code",{},"@nota-lang/nota"))," package) turns a Nota document into a standalone web page. This pipeline includes  bundling via ",(0,e.createElement)("a",{href:"https://esbuild.github.io/"},"esbuild"),", as well as server-side rendering via ",(0,e.createElement)("a",{href:"https://reactjs.org/docs/react-dom-server.html"},"ReactDOMServer"),".",`
`,`
`,`
`,(0,e.createElement)(c,{},"Building"),`
`,`
`,"The ",(0,e.createElement)("code",{},"@nota-lang/nota-syntax")," package exports two key functions:",`
`,`
`,`
`,(0,e.createElement)(t,{},"let tryParse(input: string): Result<lezer.Tree>;",`
`,"let translate(input: string, tree: lezer.Tree): string;"),`
`,`
`,"These functions parse and translate, respectively, a Nota document into a React program (via a ",(0,e.createElement)("a",{href:"https://lezer.codemirror.net/"},"Lezer")," tree). If possible, you should not call these functions directly but rather use a bundler integration. Currently we only support ",(0,e.createElement)("a",{href:"https://esbuild.github.io/"},"esbuild"),", but other integrations are welcome!",`
`,`
`,(0,e.createElement)(d,{},"esbuild"),`
`,`
`,"First, import ",(0,e.createElement)("code",{},"notaPlugin")," and add it to your list of plugins:",`
`,`
`,(0,e.createElement)(t,{},'import { notaPlugin } from "@nota-lang/nota-syntax/dist/esbuild-plugin.js";',`
`,'import esbuild from "esbuild";',`
`,`
`,"esbuild.build({",`
`,"  /* your configuration... */",`
`,"  plugins: [notaPlugin()]",`
`,"})"),`
`,`
`,"This plugin will allow you to import a file with a ",(0,e.createElement)("code",{},".nota")," extension. The file's default export will be the document's React component. For example:",`
`,`
`,(0,e.createElement)(t,{},'import React from "react";',`
`,'import ReactDOM from "react-dom";',`
`,'import Doc from "./index.nota";',`
`,`
`,"let App = () => <div>",`
`,"  <h1>My Website</h1>",`
`,"  <Doc />",`
`,"</div>;",`
`,`
`,"ReactDOM.renderToString(<App />, document.getElementById('app'));"),`
`,`
`,"If you follow the approach above, all pipeline issues like bundling and server-side rendering are up to you. Alternatively, you can use the ",(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/esbuild-utils"},(0,e.createElement)("code",{},"@nota-lang/esbuild-utils"))," package to get a simple Nota-enabled static site generator that includes bundling and SSR. Check out the ",(0,e.createElement)("code",{},"build.mjs")," file for ",(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota-lang.org"},"nota-lang.org")," and ",(0,e.createElement)("a",{href:"https://github.com/willcrichton/willcrichton.github.io"},"willcrichton.net")," as examples.",`
`,`
`,(0,e.createElement)(c,{},"Editing"),`
`,`
`,"You can still use the Nota editor on documents that are not built via ",(0,e.createElement)("code",{},"nota build"),". The ",(0,e.createElement)("code",{},"nota edit")," command can take additional flags to interoperate with your personal build pipeline. ",`
`,`
`,(0,e.createElement)(d,{},"Build configuration"),`
`,`
`,"If you are using esbuild and have custom esbuild flags, e.g. a plugin like ",(0,e.createElement)("a",{href:"https://github.com/glromeo/esbuild-sass-plugin"},"esbuild-sass-plugin"),", then you can define a configuration file like so:",`
`,`
`,(0,e.createElement)(t,{},`// nota.config.mjs
import { sassPlugin } from "esbuild-sass-plugin";

export default {
  plugins: [sassPlugin()];
}`),`
`,`
`,"Then incorporate it into your build script:",`
`,`
`,(0,e.createElement)(t,{},`// build.mjs
import config from "./nota.config.mjs";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["./src/index.nota"],
  ...config
})`),`
`,`
`,"And then provide the configuration path to the editor:",`
`,`
`,(0,e.createElement)(r,{},"nota edit src/index.nota --config nota.config.mjs"),`
`,`
`,(0,e.createElement)(d,{},"Asset folder"),`
`,`
`,"If your document contains local URLs to assets like images, then you can configure the editor to serve files out of a given directory:",`
`,`
`,(0,e.createElement)(r,{},"nota edit src/index.nota --static assets")]})()));var w="metadata",P=w in l?l[w]:{},S=n=>a.default.createElement(v,{...n},a.default.createElement("div",{id:"root"},a.default.createElement(s,null))),x=async n=>{let o=Date.now(),t=new MutationObserver(i=>{o=Date.now()});return t.observe(n,{subtree:!0,childList:!0,attributes:!0}),new Promise(i=>{let T=setInterval(()=>{Date.now()-o>1e3&&(clearInterval(T),t.disconnect(),i())},50)})},L=async()=>{let n=document.documentElement;if(n.classList.contains("ssr-env"))n.classList.remove("ssr-env"),m.default.render(a.default.createElement(S,{...P,script:"./integration.mjs"}),n),await x(n),window.NOTA_READY=!0;else{let o=document.getElementById("root"),t=document.createElement("div");m.default.render(a.default.createElement(s,null),t),await x(t),o.parentNode.replaceChild(t,o)}};L();
