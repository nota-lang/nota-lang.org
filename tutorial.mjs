import{a as C,b as t,c as d,d as A,e as h,f as a,g as n,h as f,i as c,j as l,k as o,l as y,m as p,n as g,o as x,p as w,q as L,r as i,s as b,t as H}from"./chunk-S3UM2G6H.mjs";var m=t(d()),T=t(A());var r={};C(r,{default:()=>u,metadata:()=>R});var e=t(d());var R={title:"Nota Tutorial"},u=h(()=>(0,e.createElement)(g,{},...(()=>[`
`,`
`,(0,e.createElement)(f,{language:w()}),`
`,`
`,(0,e.createElement)(x,{},"Nota Tutorial"),`
`,`
`,"You can either edit the examples here interactively, or you can follow the instructions on the ",(0,e.createElement)("a",{href:"/"},"home page")," to install Nota and edit files on your own computer.",`
`,`
`,(0,e.createElement)(l,{},"Nota syntax"),`
`,`
`,"A Nota document is text mixed with commands, typically contained in a ",(0,e.createElement)("code",{},".nota")," file. A basic Nota document looks like this:",`
`,`
`,(0,e.createElement)(i,{},`%(let sysname = "Nota")

@Section{#sysname: A Document Language for the Browser}

#(sysname.toUpperCase()) is my @em{favorite} way to write @a[href="https://en.wikipedia.org/wiki/Document"]{documents}!`),`
`,`
`,...(()=>{let s=({examples:N})=>(0,e.createElement)("table",{},(0,e.createElement)("thead",{},(0,e.createElement)("tr",{},(0,e.createElement)("th",{},"Nota"),`
`,(0,e.createElement)("th",{},"Translated"))),`
`,N.map(([D,S])=>(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("code",{},D))," ",(0,e.createElement)("td",{},(0,e.createElement)("code",{},S)))));return[`
`,`
`,"Nota supports three kinds of commands:",`
`,`
`,(0,e.createElement)(o,{},"@-commands"),`
`,`
`,(0,e.createElement)(a,{name:"atcmd",Label:"@-command"},"@-commands add document components to the output."),`
`,"This includes HTML elements, like ",(0,e.createElement)("code",{},"@em")," for italics, as well as ",(0,e.createElement)("a",{href:"https://reactjs.org/"},"React")," components, like ",(0,e.createElement)("code",{},"@Title"),". Nota provides a standard library of components such as ",(0,e.createElement)("code",{},"@Title"),", ",(0,e.createElement)("code",{},"@Section"),", ",(0,e.createElement)("code",{},"@Ref"),", and many more. And you can also provide your own!",`
`,`
`,"Here are some examples of translations between an ",(0,e.createElement)(n,{},"atcmd")," and the corresponding component (in JSX syntax).",`
`,`
`,(0,e.createElement)(s,{examples:[["@a","<a />"],["@a{Text}","<a>Text</a>"],['@a[href="url"]{Text}','<a href="url">Text</a>'],['@(window.a)[href="url"]{Text}','<window.a href="url">Text</window.a>']]}),"   ",`
`,`
`,"Commands generally have three pieces: a name, code arguments, and text arguments.",`
`,"  ",`
`,(0,e.createElement)("ul",{},(0,e.createElement)("li",{},"A name is a Javascript expression: either a plain identifier, like ",(0,e.createElement)("code",{},"a"),", or a parenthesized expression like ",(0,e.createElement)("code",{},"(window.a)"),"."),`
`,(0,e.createElement)("li",{},"Code arguments use [square brackets] take Javascript code as input, for instance ",(0,e.createElement)("code",{},'@a[href="url"]'),". ",(0,e.createElement)(n,{},"atcmd"),"s only take named code arguments, indicated by ",(0,e.createElement)("code",{},"href="),"."),`
`,(0,e.createElement)("li",{},"Text arguments use {curly braces} and take text (and Nota commands) as input, such as ",(0,e.createElement)("code",{},"{Text}"),". An ",(0,e.createElement)(n,{},"atcmd")," can only take one text argument.")),`
`,`
`,(0,e.createElement)(o,{},"#-commands"),`
`,`
`,(0,e.createElement)(a,{name:"hashcmd",Label:"#-command"},"#-commands add Javascript expressions to the output. ")," ",`
`,"For example, ",(0,e.createElement)("code",{},"#sysname")," embeds the value of the variable ",(0,e.createElement)("code",{},"sysname"),". With parentheses, one can use any Javascript expression such as ",(0,e.createElement)("code",{},"#(sysname.toUpperCase())"),".",`
`,`
`,"Here are some examples of translations between an ",(0,e.createElement)(n,{},"hashcmd")," and the corresponding component (in Javascript syntax).",`
`,`
`,(0,e.createElement)(s,{examples:[["#sysname","sysname"],["#toUpperCase[sysname]","toUpperCase(sysname)"],["#toUpperCase{#sysname}","toUpperCase([sysname])"],["#(sysname.toUpperCase())","sysname.toUpperCase()"],["#charCodeAt[sysname][0]","charCodeAt(sysname, 0)"]]}),`
`,`
`,"If a ",(0,e.createElement)(n,{},"hashcmd")," has no arguments, it is treated as a variable. If it is given arguments, then it is treated as a function call. Because Javascript only supports positional arguments, the code arguments to ",(0,e.createElement)(n,{},"hashcmd"),"s do not have names, and the order of arguments matters. ",`
`,`
`,"Because text arguments may contain commands, they are not translated directly to strings, but rather to heterogenous arrays containing strings and document components. For instance:",`
`,`
`,(0,e.createElement)(s,{examples:[["Hello world.",'["Hello world."]'],["Hello #sysname.",'["Hello ", sysname, "."]'],["Hello @em{world}.",'["Hello ", React.createElement("em", ...["World"]), "."]']]}),`
`,`
`,(0,e.createElement)(o,{},"%-commands"),`
`,`
`,(0,e.createElement)(a,{name:"pctcmd",Label:"%-command"},"%-commands add Javascript statements to the output. ")," For example, ",(0,e.createElement)("code",{},'%(let sysname = "Nota")')," is not inherently visible in the document, but can be used in expressions like ",(0,e.createElement)("code",{},"#sysname"),". ",(0,e.createElement)(n,{},"pctcmd"),"s take no arguments. You simply put ",(0,e.createElement)("code",{},"%(...)")," and add any Javascript statement, including imports and exports.}",`
`,`
`,"Statements are scoped, so variables defined are only accessible after the statement and within the current text block. For example, the command:",`
`,`
`,(0,e.createElement)(p,{},(0,e.createElement)("code",{},"@span{%(let x = 1) x = #x}")),`
`,"  ",`
`,"translates to (in JSX):",`
`,"  ",`
`,(0,e.createElement)(p,{},(0,e.createElement)("code",{},'<span>{(()=>{let x = 1; return [" x = ", x]})}</span>')),`
`,`
`,(0,e.createElement)(l,{},"Nota components"),`
`,`
`,"The best way to understand the many Nota components is to read through an example on the ",(0,e.createElement)("a",{href:"/examples.html"},"Examples page"),". But we will review a few common and special ones here.",`
`,`
`,(0,e.createElement)(o,{},"Document structure"),`
`,`
`,"A Nota document is always contained within a ",(0,e.createElement)("code",{},"@Document")," component. Within a document, the main structural components are ",(0,e.createElement)("code",{},"@Title"),", ",(0,e.createElement)("code",{},"@Section"),", and ",(0,e.createElement)("code",{},"@p"),". A ",(0,e.createElement)("code",{},"@Document")," does things to help you simplify structure and reduce nesting. First, sections are automatically nested based on the order of headers. Second, paragraphs are automatically generated based on newlines. For example, this Nota input on the ",(0,e.createElement)(n,{Label:"left"},"leftdoc")," is translated to the equivalent on the ",(0,e.createElement)(n,{Label:"right"},"rightdoc"),".",`
`,`
`,(0,e.createElement)(y,{style:{margin:"1rem 0"}},(0,e.createElement)(a,{name:"leftdoc",Tooltip:null},(0,e.createElement)(c,{},`@Document{
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
`,(0,e.createElement)(a,{name:"rightdoc",Tooltip:null},(0,e.createElement)(c,{},`@Document{
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
`,(0,e.createElement)(i,{},`@Definition[name="nota"][Label="Nota"]{
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
`,(0,e.createElement)(i,{},`@Definition[name="nota"]{
  Nota is a document language for the browser.
} Have you tried writing @Ref[Label=@strong{Nota}]{nota}?`)]})()])()));var v=t(L()),F=t(d()),I=t(H()),k="metadata",J=k in r?r[k]:{},U=s=>m.default.createElement(b,{...s},m.default.createElement(u,null));v.canUseDOM&&T.default.hydrate(m.default.createElement(U,{...J,script:"./tutorial.mjs"}),document.documentElement);var export_React=F.default;var export_ReactDOMServer=I.default;export{U as Page,export_React as React,export_ReactDOMServer as ReactDOMServer,J as metadata};
