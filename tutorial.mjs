import{A as C,B as S,I as w,J as s,K as D,a as I,b as f,c as x,d as $,e as v,q as i,r as n,s as y,t as T,u as d,v as N,w as m,x as o,y as k,z as g}from"./chunk-KUZJJXHO.mjs";var r=f(x()),b=f($());var u={};I(u,{default:()=>h,metadata:()=>F});var e=f(x());var F={title:"Nota Tutorial"},h=v(t=>(0,e.createElement)(C,{...t},...(()=>[`
`,`
`,(0,e.createElement)(T,{language:w(),wrap:!0}),`
`,`
`,(0,e.createElement)(S,{},"Nota Tutorial"),`
`,`
`,"This page explains the basics of Nota's language syntax and component library. You can either edit the examples here interactively, or you can follow the instructions on the ",(0,e.createElement)("a",{href:"/"},"home page")," to install Nota and edit files on your own computer. ",`
`,`
`,(0,e.createElement)(N,{}),`
`,`
`,(0,e.createElement)(m,{},"Syntax"),`
`,`
`,"A Nota document is text mixed with commands, typically contained in a ",(0,e.createElement)("code",{},".nota")," file. A basic Nota document looks like this:",`
`,`
`,(0,e.createElement)(s,{},`%(let sysname = "Nota")

@Section{#sysname: A Document Language for the Browser}

#(sysname.toUpperCase()) is my @em{favorite} way to write @a[href="https://en.wikipedia.org/wiki/Document"]{documents}!`),`
`,`
`,...(()=>{let a=({examples:c})=>(0,e.createElement)("table",{className:"translation-examples"},(0,e.createElement)("thead",{},(0,e.createElement)("tr",{},(0,e.createElement)("th",{},"Nota"),`
`,(0,e.createElement)("th",{},"Translated"))),`
`,c.map(([l,p],_)=>(0,e.createElement)("tr",{key:_},(0,e.createElement)("td",{},(0,e.createElement)("code",{},l)),`
`,(0,e.createElement)("td",{},(0,e.createElement)("code",{},p)))));return[`
`,`
`,"Nota supports three kinds of commands:",`
`,`
`,(0,e.createElement)(o,{},"@-commands"),`
`,`
`,(0,e.createElement)(i,{name:"atcmd",label:"@-command"},"@-commands add document components to the output."),`
`,"This includes HTML elements, like ",(0,e.createElement)("code",{},"@em")," for italics, as well as ",(0,e.createElement)("a",{href:"https://reactjs.org/"},"React")," components, like ",(0,e.createElement)("code",{},"@Title"),". Nota provides a standard library of components such as ",(0,e.createElement)("code",{},"@Title"),", ",(0,e.createElement)("code",{},"@Section"),", ",(0,e.createElement)("code",{},"@Ref"),", and many more. And you can also provide your own!",`
`,`
`,"Here are some examples of translations between an ",(0,e.createElement)(n,{},"atcmd")," and the corresponding component (in JSX syntax).",`
`,`
`,(0,e.createElement)(a,{examples:[["@a","<a />"],["@a{Text}","<a>Text</a>"],['@a[href="url"]{Text}','<a href="url">Text</a>'],['@(window.a)[href="url"]{Text}','<window.a href="url">Text</window.a>']]}),`
`,`
`,"Commands generally have three pieces: a name, code arguments, and text arguments.",`
`,`
`,(0,e.createElement)("ul",{},(0,e.createElement)("li",{},"A name is a Javascript expression: either a plain identifier, like ",(0,e.createElement)("code",{},"a"),", or a parenthesized expression like ",(0,e.createElement)("code",{},"(window.a)"),"."),`
`,(0,e.createElement)("li",{},"Code arguments use [square brackets] take Javascript code as input, for instance ",(0,e.createElement)("code",{},'@a[href="url"]'),". ",(0,e.createElement)(n,{},"atcmd"),"s only take named code arguments, indicated by ",(0,e.createElement)("code",{},"href="),"."),`
`,(0,e.createElement)("li",{},"Text arguments use {curly braces} and take text (and Nota commands) as input, such as ",(0,e.createElement)("code",{},"{Text}"),". An ",(0,e.createElement)(n,{},"atcmd")," can only take one text argument.")),`
`,`
`,(0,e.createElement)(o,{},"#-commands"),`
`,`
`,(0,e.createElement)(i,{name:"hashcmd",label:"#-command"},"#-commands add Javascript expressions to the output. ")," ",`
`,"For example, ",(0,e.createElement)("code",{},"#sysname")," embeds the value of the variable ",(0,e.createElement)("code",{},"sysname"),". With parentheses, one can use any Javascript expression such as ",(0,e.createElement)("code",{},"#(sysname.toUpperCase())"),".",`
`,`
`,"Here are some examples of translations between an ",(0,e.createElement)(n,{},"hashcmd")," and the corresponding component (in Javascript syntax).",`
`,`
`,(0,e.createElement)(a,{examples:[["#sysname","sysname"],["#toUpperCase[sysname]","toUpperCase(sysname)"],["#toUpperCase{#sysname}","toUpperCase([sysname])"],["#(sysname.toUpperCase())","sysname.toUpperCase()"],["#charCodeAt[sysname][0]","charCodeAt(sysname, 0)"]]}),`
`,`
`,"If a ",(0,e.createElement)(n,{},"hashcmd")," has no arguments, it is treated as a variable. If it is given arguments, then it is treated as a function call. Because Javascript only supports positional arguments, the code arguments to ",(0,e.createElement)(n,{},"hashcmd"),"s do not have names, and the order of arguments matters. ",`
`,`
`,"Because text arguments may contain commands, they are not translated directly to strings, but rather to heterogenous arrays containing strings and document components. For instance:",`
`,`
`,(0,e.createElement)(a,{examples:[["Hello world.",'["Hello world."]'],["Hello #sysname.",'["Hello ", sysname, "."]'],["Hello @em{world}.",'["Hello ", React.createElement("em", ...["World"]), "."]']]}),`
`,`
`,(0,e.createElement)(o,{},"%-commands"),`
`,`
`,(0,e.createElement)(i,{name:"pctcmd",label:"%-command"},"%-commands add Javascript statements to the output. ")," For example, ",(0,e.createElement)("code",{},'%(let sysname = "Nota")')," is not inherently visible in the document, but can be used in expressions like ",(0,e.createElement)("code",{},"#sysname"),". ",(0,e.createElement)(n,{},"pctcmd"),"s take no arguments. You simply put ",(0,e.createElement)("code",{},"%(...)")," and add any Javascript statement, including imports and exports.}",`
`,`
`,"Statements are scoped, so variables defined are only accessible after the statement and within the current text block. For example, the command:",`
`,`
`,(0,e.createElement)(g,{},(0,e.createElement)("code",{},"@span{%(let x = 1) x = #x}")),`
`,`
`,"translates to (in JSX):",`
`,`
`,(0,e.createElement)(g,{},(0,e.createElement)("code",{},'<span>{(()=>{let x = 1; return [" x = ", x]})}</span>')),`
`,`
`,(0,e.createElement)(o,{},"Javascript"),`
`,`
`,"Nota extends Javascript with the ability to embed an ",(0,e.createElement)(n,{},"atcmd")," within a Javascript expression. This feature can be useful for creating utility functions, or for passing Nota text into third party libraries. For example, the equivalent of a LaTeX ",(0,e.createElement)("code",{},"\\newcommand")," macro:",`
`,`
`,(0,e.createElement)(s,{},"%(let or = (x, y) => @{#x \\vee #y})\nThe expression @${#or{x}{y}} means @q{@${x} or @${y}}.\n"),`
`,`
`,(0,e.createElement)(m,{},"Components"),`
`,`
`,"The best way to understand the many Nota components is to read through an example on the ",(0,e.createElement)("a",{href:"/examples.html"},"Examples page"),". But we will review a few common and special ones here.",`
`,`
`,(0,e.createElement)(o,{},"Document structure"),`
`,`
`,"A Nota document is always contained within a ",(0,e.createElement)("code",{},"@Document")," component. Within a document, the main structural components are ",(0,e.createElement)("code",{},"@Title"),", ",(0,e.createElement)("code",{},"@Section"),", and ",(0,e.createElement)("code",{},"@p"),". A ",(0,e.createElement)("code",{},"@Document")," does things to help you simplify structure and reduce nesting. First, sections are automatically nested based on the order of headers. Second, paragraphs are automatically generated based on newlines. For example, this Nota input on the ",(0,e.createElement)(n,{label:"left"},"leftdoc")," is translated to the equivalent on the ",(0,e.createElement)(n,{label:"right"},"rightdoc"),".",`
`,`
`,(0,e.createElement)(k,{style:{margin:"1rem 0"}},(0,e.createElement)(i,{name:"leftdoc",Tooltip:null},(0,e.createElement)(d,{},`@Document{
  @Title{My Document}  

  @Section{Introduction}

  The intro...

  @Subsection{Contributions}

  I did...

  @Section{Related work}

  It be like...
}`)),`
`,`
`,(0,e.createElement)("div",{style:{width:"1rem"}}),`
`,`
`,(0,e.createElement)(i,{name:"rightdoc",Tooltip:null},(0,e.createElement)(d,{},`@Document{
  @Title{My Document}    

  @SectionBody{
    @SectionTitle{Introduction}
    @p{The intro...}

    @SectionBody{
      @SectionTitle{Contributions}
      @p{I did...}
    }    
  }

  @SectionBody{
    @SectionTitle{Related work}
    @p{It be like...}
  }
}`))),`
`,`
`,(0,e.createElement)(o,{},"Definitions and references"),`
`,`
`,"Nota provides ",(0,e.createElement)("code",{},"@Definition")," and ",(0,e.createElement)("code",{},"@Ref")," components for defining things and referencing them in a general way. For example:",`
`,`
`,(0,e.createElement)(s,{},`@Definition[name="nota"][label="Nota"]{
  Nota is a document language for the browser.
} Have you tried writing @Ref{nota}?`),`
`,`
`,"A definition has four pieces:",`
`,`
`,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("code",{},"name"),": required, string by which to reference this definition."),`
`,(0,e.createElement)("li",{},(0,e.createElement)("code",{},"Label"),": optional, element that is shown (by default) for a reference to this definition."),`
`,(0,e.createElement)("li",{},(0,e.createElement)("code",{},"Tooltip"),": optional, element to show when a reference to this definition is clicked (by default the definition's body)."),`
`,(0,e.createElement)("li",{},"The definition body.")),`
`,`
`,"A reference's text argument is the definition's name. You can optionally define the content of the reference:",`
`,`
`,(0,e.createElement)(s,{},`@Definition[name="nota"]{
  Nota is a document language for the browser.
} Have you tried writing @Ref[label=@strong{Nota}]{nota}?`),`
`,`
`,(0,e.createElement)(o,{},"Math / TeX"),`
`,`
`,"Nota provides inline and block math elements, ",(0,e.createElement)("code",{},"$")," and ",(0,e.createElement)("code",{},"$$")," respectively. Currently these use the ",(0,e.createElement)("a",{href:"https://katex.org/"},"KaTeX")," library for rendering.",`
`,`
`,(0,e.createElement)(s,{},`The Cauchy-Schwarz inequality states that for all vectors @\${u} and @\${v} of an inner product space it is true that

%(
let u = @{\\mathbf{u}}; let v = @{\\mathbf{v}};
let vec = (x, y) => @{\\langle #x, #y \\rangle};
)
@$\${
 | #vec[u][v] |^2 \\leq #vec[u][u] \\cdot #vec[v][v]
}`),`
`,`
`,"While you can use TeX macros if necessary, it is recommended to use Javascript variables and functions as shown above. Macros are only essential for referencing TeX builtins such as ",(0,e.createElement)("code",{},"\\leq")," for ",(0,e.createElement)(y,{},"\\leq"),".",`
`,`
`,"The KaTeX integration for Nota provides special support for definitions and references. For example:",`
`,`
`,(0,e.createElement)(s,{},`%(let reaches = (u, v) => tex_ref("reaches", @{#u ~ \\mathsf{reaches} ~ #v}))
@Definition[name="reaches"]{
  The judgment @\${#reaches{n_1}{n_2}} is defined as:  
  @div{
    @IR[Top=()=>null][Bot=()=>@\${#reaches{n}{n}}]
  
    @IR[Top=()=>@PremiseRow{
      @Premise{@\${#reaches{n_1}{n_2}}}
      @Premise{@\${#reaches{n_2}{n_3}}}
    }][Bot=()=>@\${#reaches{n_1}{n_3}}]
  }
}`),`
`,`
`,"Nota provides the function ",(0,e.createElement)("code",{},"tex_ref")," for TeX code which refers to a Nota definition, such as ",(0,e.createElement)("code",{},'"reaches"')," here. Then any reference to the ",(0,e.createElement)(y,{},"\\mathsf{reaches}")," judgment via the ",(0,e.createElement)("code",{},"reaches")," function will support definition-reference features: click to see the definition, and double-click to jump to it.",`
`,`
`,(0,e.createElement)(o,{},"Code"),`
`,`
`,"Nota currently uses ",(0,e.createElement)("a",{href:"https://codemirror.net/6/"},"Codemirror 6")," for code editing and viewing. For example:",`
`,`
`,(0,e.createElement)(s,{},`%(import {rust} from "@codemirror/lang-rust")
  
@Listing[language=rust()]{
  fn char_at(s: &str, i: usize) -> char {
    s.chars().nth(i).unwrap()
  }
}`),`
`,`
`,"Codemirror does not support server-side rendering and currently has limited language support, so contributions for other syntax highlighting libraries are welcome!",`
`,`
`,(0,e.createElement)(o,{},"Citations"),`
`,`
`,"The ",(0,e.createElement)("code",{},"@References")," component takes as input a ",(0,e.createElement)("a",{href:"http://www.bibtex.org/"},"BibTeX")," string (usually imported from a ",(0,e.createElement)("code",{},".bib")," file) and does two things:",`
`,`
`,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},"It creates a ",(0,e.createElement)("code",{},"@Definition")," for each citation where the ",(0,e.createElement)("code",{},"name")," is the one provided in bibtex."),`
`,(0,e.createElement)("li",{},"It shows the references of all citations used in the document.")),`
`,`
`,"For example:",`
`,`
`,(0,e.createElement)(s,{},`Nota is a document language for the browser @Ref{crichton2021nota}.

@References{
  \\@inproceedings{crichton2021nota,
    title={A New Medium for Communicating Research on Programming Languages},
    author={Crichton, Will},
    booktitle={Proceedings of the 1st Workshop on Human Aspects of Types and Reasoning Assistants},
    year={2021}
  }
}`),`
`,`
`,(0,e.createElement)(m,{},"Styling"),`
`,`
`,"Nota components do not have much default styling to allow authors greater flexibility in their own designs. To add your own styling, you can use CSS. For example, directly via a style tag:",`
`,`
`,(0,e.createElement)(s,{},`@style{ span.text-red { color: red; } }

%(let Red = ({children}) => 
  @span[className="text-red"]{#children})

I love the color @Red{red!}`),`
`,`
`,"You can also import an external stylesheet. For example, Nota provides a set of themes. The current list of Nota themes: is:",`
`,`
`,(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("a",{href:"https://github.com/nota-lang/nota/tree/master/packages/nota-theme-acm"},(0,e.createElement)("code",{},"@nota-lang/nota-theme-acm")),": emulates the latest ",(0,e.createElement)("a",{href:"https://www.acm.org/publications/proceedings-template"},"ACM LaTeX")," conference paper theme."),`
`,(0,e.createElement)("li",{},"(...That's it so far! If you make your own theme, we can add it to this list.)")),`
`,`
`,"To use a theme, you simply import its CSS, such as:",`
`,`
`,(0,e.createElement)(d,{language:w()},'%(import "@nota-lang/nota-theme-acm/dist/index.css")')]})()])()));var R="metadata",J=R in u?u[R]:{},H=t=>r.default.createElement(D,{...t},r.default.createElement(h,null)),A=async t=>{let a=Date.now(),c=new MutationObserver(l=>{a=Date.now()});return c.observe(t,{subtree:!0,childList:!0,attributes:!0}),new Promise(l=>{let p=setInterval(()=>{Date.now()-a>1e3&&(clearInterval(p),c.disconnect(),l())},50)})},L=async()=>{let t=document.documentElement;if(t.classList.contains("ssr-env"))t.classList.remove("ssr-env"),b.default.render(r.default.createElement(H,{...J,script:"./tutorial.mjs"}),t),await A(t),window.NOTA_READY=!0;else{let a=document.createElement("div");b.default.render(r.default.createElement(h,null),a),await A(a),root.parentNode.replaceChild(a,root)}};L();
