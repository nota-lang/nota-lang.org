import{a as fe,b as At}from"../../chunk-NALGVG7X.mjs";import{C as Wt,D as jt,E as Ct,a as me,b as E,c as Ye,d as un,e as et,f as pn,g as tt,h as Pt,i as dn,j as hn,k as Ut,l as St,m as Ge,n as Tt,o as Fe,p as mn,q as Rt,r as Yt,s as Zt,u as fn,x as qt,y as zt}from"../../chunk-OAKN26CX.mjs";var Re=E(Ye()),Xt=E(un());var De={};me(De,{default:()=>Ee,imports:()=>ua,metadata:()=>ca,source:()=>pa});var M=E(Ye()),an=E(et());var Ot={};me(Ot,{PageEditor:()=>lt});var oe=E(Ye());var rt=E(Ye()),R=E(mn());var ie=typeof window<"u"?window:null,at=ie===null,qe=at?void 0:ie.document,Oe="addEventListener",ce="removeEventListener",nt="getBoundingClientRect",Ze="_a",ue="_b",ye="_c",Ie="horizontal",pe=function(){return!1},gn=at?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var u=qe.createElement("div");return u.style.cssText="width:"+r+"calc(9px)",!!u.style.length}).shift()+"calc",Gt=function(r){return typeof r=="string"||r instanceof String},Vt=function(r){if(Gt(r)){var u=qe.querySelector(r);if(!u)throw new Error("Selector "+r+" did not match a DOM element");return u}return r},K=function(r,u,p){var Q=r[u];return Q!==void 0?Q:p},Me=function(r,u,p,Q){if(u){if(Q==="end")return 0;if(Q==="center")return r/2}else if(p){if(Q==="start")return 0;if(Q==="center")return r/2}return r},bn=function(r,u){var p=qe.createElement("div");return p.className="gutter gutter-"+u,p},yn=function(r,u,p){var Q={};return Gt(u)?Q[r]=u:Q[r]=gn+"("+u+"% - "+p+"px)",Q},Qn=function(r,u){var p;return p={},p[r]=u+"px",p},$n=function(r,u){if(u===void 0&&(u={}),at)return{};var p=r,Q,P,V,x,h,i;Array.from&&(p=Array.from(p));var U=Vt(p[0]),$=U.parentNode,c=getComputedStyle?getComputedStyle($):null,ke=c?c.flexDirection:null,f=K(u,"sizes")||p.map(function(){return 100/p.length}),re=K(u,"minSize",100),X=Array.isArray(re)?re:p.map(function(){return re}),de=K(u,"maxSize",1/0),H=Array.isArray(de)?de:p.map(function(){return de}),B=K(u,"expandToMin",!1),s=K(u,"gutterSize",10),Z=K(u,"gutterAlign","center"),_e=K(u,"snapOffset",30),w=Array.isArray(_e)?_e:p.map(function(){return _e}),L=K(u,"dragInterval",1),S=K(u,"direction",Ie),_=K(u,"cursor",S===Ie?"col-resize":"row-resize"),v=K(u,"gutter",bn),Qe=K(u,"elementStyle",yn),d=K(u,"gutterStyle",Qn);S===Ie?(Q="width",P="clientX",V="left",x="right",h="clientWidth"):S==="vertical"&&(Q="height",P="clientY",V="top",x="bottom",h="clientHeight");function ee(O,o,l,m){var z=Qe(Q,o,l,m);Object.keys(z).forEach(function(Y){O.style[Y]=z[Y]})}function $e(O,o,l){var m=d(Q,o,l);Object.keys(m).forEach(function(z){O.style[z]=m[z]})}function T(){return i.map(function(O){return O.size})}function n(O){return"touches"in O?O.touches[0][P]:O[P]}function b(O){var o=i[this.a],l=i[this.b],m=o.size+l.size;o.size=O/this.size*m,l.size=m-O/this.size*m,ee(o.element,o.size,this[ue],o.i),ee(l.element,l.size,this[ye],l.i)}function te(O){var o,l=i[this.a],m=i[this.b];!this.dragging||(o=n(O)-this.start+(this[ue]-this.dragOffset),L>1&&(o=Math.round(o/L)*L),o<=l.minSize+l.snapOffset+this[ue]?o=l.minSize+this[ue]:o>=this.size-(m.minSize+m.snapOffset+this[ye])&&(o=this.size-(m.minSize+this[ye])),o>=l.maxSize-l.snapOffset+this[ue]?o=l.maxSize+this[ue]:o<=this.size-(m.maxSize-m.snapOffset+this[ye])&&(o=this.size-(m.maxSize+this[ye])),b.call(this,o),K(u,"onDrag",pe)(T()))}function j(){var O=i[this.a].element,o=i[this.b].element,l=O[nt](),m=o[nt]();this.size=l[Q]+m[Q]+this[ue]+this[ye],this.start=l[V],this.end=l[x]}function J(O){if(!getComputedStyle)return null;var o=getComputedStyle(O);if(!o)return null;var l=O[h];return l===0?null:(S===Ie?l-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight):l-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),l)}function ae(O){var o=J($);if(o===null||X.reduce(function(Y,W){return Y+W},0)>o)return O;var l=0,m=[],z=O.map(function(Y,W){var k=o*Y/100,xe=Me(s,W===0,W===O.length-1,Z),Xe=X[W]+xe;return k<Xe?(l+=Xe-k,m.push(0),Xe):(m.push(k-Xe),k)});return l===0?O:z.map(function(Y,W){var k=Y;if(l>0&&m[W]-l>0){var xe=Math.min(l,m[W]-l);l-=xe,k=Y-xe}return k/o*100})}function he(){var O=this,o=i[O.a].element,l=i[O.b].element;O.dragging&&K(u,"onDragEnd",pe)(T()),O.dragging=!1,ie[ce]("mouseup",O.stop),ie[ce]("touchend",O.stop),ie[ce]("touchcancel",O.stop),ie[ce]("mousemove",O.move),ie[ce]("touchmove",O.move),O.stop=null,O.move=null,o[ce]("selectstart",pe),o[ce]("dragstart",pe),l[ce]("selectstart",pe),l[ce]("dragstart",pe),o.style.userSelect="",o.style.webkitUserSelect="",o.style.MozUserSelect="",o.style.pointerEvents="",l.style.userSelect="",l.style.webkitUserSelect="",l.style.MozUserSelect="",l.style.pointerEvents="",O.gutter.style.cursor="",O.parent.style.cursor="",qe.body.style.cursor=""}function Pe(O){if(!("button"in O&&O.button!==0)){var o=this,l=i[o.a].element,m=i[o.b].element;o.dragging||K(u,"onDragStart",pe)(T()),O.preventDefault(),o.dragging=!0,o.move=te.bind(o),o.stop=he.bind(o),ie[Oe]("mouseup",o.stop),ie[Oe]("touchend",o.stop),ie[Oe]("touchcancel",o.stop),ie[Oe]("mousemove",o.move),ie[Oe]("touchmove",o.move),l[Oe]("selectstart",pe),l[Oe]("dragstart",pe),m[Oe]("selectstart",pe),m[Oe]("dragstart",pe),l.style.userSelect="none",l.style.webkitUserSelect="none",l.style.MozUserSelect="none",l.style.pointerEvents="none",m.style.userSelect="none",m.style.webkitUserSelect="none",m.style.MozUserSelect="none",m.style.pointerEvents="none",o.gutter.style.cursor=_,o.parent.style.cursor=_,qe.body.style.cursor=_,j.call(o),o.dragOffset=n(O)-o.end}}f=ae(f);var G=[];i=p.map(function(O,o){var l={element:Vt(O),size:f[o],minSize:X[o],maxSize:H[o],snapOffset:w[o],i:o},m;if(o>0&&(m={a:o-1,b:o,dragging:!1,direction:S,parent:$},m[ue]=Me(s,o-1===0,!1,Z),m[ye]=Me(s,!1,o===p.length-1,Z),ke==="row-reverse"||ke==="column-reverse")){var z=m.a;m.a=m.b,m.b=z}if(o>0){var Y=v(o,S,l.element);$e(Y,s,o),m[Ze]=Pe.bind(m),Y[Oe]("mousedown",m[Ze]),Y[Oe]("touchstart",m[Ze]),$.insertBefore(Y,l.element),m.gutter=Y}return ee(l.element,l.size,Me(s,o===0,o===p.length-1,Z),o),o>0&&G.push(m),l});function F(O){var o=O.i===G.length,l=o?G[O.i-1]:G[O.i];j.call(l);var m=o?l.size-O.minSize-l[ye]:O.minSize+l[ue];b.call(l,m)}i.forEach(function(O){var o=O.element[nt]()[Q];o<O.minSize&&(B?F(O):O.minSize=o)});function I(O){var o=ae(O);o.forEach(function(l,m){if(m>0){var z=G[m-1],Y=i[z.a],W=i[z.b];Y.size=o[m-1],W.size=l,ee(Y.element,Y.size,z[ue],Y.i),ee(W.element,W.size,z[ye],W.i)}})}function y(O,o){G.forEach(function(l){if(o!==!0?l.parent.removeChild(l.gutter):(l.gutter[ce]("mousedown",l[Ze]),l.gutter[ce]("touchstart",l[Ze])),O!==!0){var m=Qe(Q,l.a.size,l[ue]);Object.keys(m).forEach(function(z){i[l.a].element.style[z]="",i[l.b].element.style[z]=""})}})}return{setSizes:I,getSizes:T,collapse:function(o){F(i[o])},destroy:y,parent:$,pairs:G}},it=$n;function ot(r,u){var p={};for(var Q in r)Object.prototype.hasOwnProperty.call(r,Q)&&u.indexOf(Q)===-1&&(p[Q]=r[Q]);return p}var st=function(r){function u(){r.apply(this,arguments)}return r&&(u.__proto__=r),u.prototype=Object.create(r&&r.prototype),u.prototype.constructor=u,u.prototype.componentDidMount=function(){var Q=this.props;Q.children;var P=Q.gutter,V=ot(Q,["children","gutter"]),x=V;x.gutter=function(h,i){var U;return P?U=P(h,i):(U=document.createElement("div"),U.className="gutter gutter-"+i),U.__isSplitGutter=!0,U},this.split=it(this.parent.children,x)},u.prototype.componentDidUpdate=function(Q){var P=this,V=this.props;V.children;var x=V.minSize,h=V.sizes,i=V.collapsed,U=ot(V,["children","minSize","sizes","collapsed"]),$=U,c=Q.minSize,ke=Q.sizes,f=Q.collapsed,re=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],X=re.map(function(B){return P.props[B]!==Q[B]}).reduce(function(B,s){return B||s},!1);if(Array.isArray(x)&&Array.isArray(c)){var de=!1;x.forEach(function(B,s){de=de||B!==c[s]}),X=X||de}else Array.isArray(x)||Array.isArray(c)?X=!0:X=X||x!==c;if(X)$.minSize=x,$.sizes=h||this.split.getSizes(),this.split.destroy(!0,!0),$.gutter=function(B,s,Z){return Z.previousSibling},this.split=it(Array.from(this.parent.children).filter(function(B){return!B.__isSplitGutter}),$);else if(h){var H=!1;h.forEach(function(B,s){H=H||B!==ke[s]}),H&&this.split.setSizes(this.props.sizes)}Number.isInteger(i)&&(i!==f||X)&&this.split.collapse(i)},u.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},u.prototype.render=function(){var Q=this,P=this.props;P.sizes,P.minSize,P.maxSize,P.expandToMin,P.gutterSize,P.gutterAlign,P.snapOffset,P.dragInterval,P.direction,P.cursor,P.gutter,P.elementStyle,P.gutterStyle,P.onDrag,P.onDragStart,P.onDragEnd,P.collapsed;var V=P.children,x=ot(P,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),h=x;return rt.default.createElement("div",Object.assign({},{ref:function(i){Q.parent=i}},h),V)},u}(rt.default.Component);st.propTypes={sizes:R.default.arrayOf(R.default.number),minSize:R.default.oneOfType([R.default.number,R.default.arrayOf(R.default.number)]),maxSize:R.default.oneOfType([R.default.number,R.default.arrayOf(R.default.number)]),expandToMin:R.default.bool,gutterSize:R.default.number,gutterAlign:R.default.string,snapOffset:R.default.oneOfType([R.default.number,R.default.arrayOf(R.default.number)]),dragInterval:R.default.number,direction:R.default.string,cursor:R.default.string,gutter:R.default.func,elementStyle:R.default.func,gutterStyle:R.default.func,onDrag:R.default.func,onDragStart:R.default.func,onDragEnd:R.default.func,collapsed:R.default.number,children:R.default.arrayOf(R.default.element)};st.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};var Ft=st;var It=E(tt()),Mt=E(pn()),Lt=E(et()),wn=()=>{let[r,u]=(0,oe.useState)([window.innerWidth,window.innerHeight]);return(0,oe.useEffect)(()=>{let p=It.default.debounce(()=>{u([window.innerWidth,window.innerHeight])},300);return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),r},lt=(0,Lt.observer)(({contents:r,imports:u})=>{let[p,Q]=wn(),[P]=(0,oe.useState)(()=>new zt({contents:r,imports:u})),x=p<800?"vertical":"horizontal";return oe.default.createElement(jt.Provider,{value:P},oe.default.createElement("div",{className:"page-editor"},oe.default.createElement(Ft,{className:(0,Mt.default)("split",x),direction:x},oe.default.createElement("div",null,oe.default.createElement(Wt,{result:P.translation})),oe.default.createElement(qt,null))))});var _t={};me(_t,{default:()=>sa,imports:()=>wt,source:()=>vt});var e=E(Ye()),nn=E(et());var ct={};me(ct,{default:()=>_n});var _n={};var ut={};me(ut,{default:()=>ze});var ze=`@inproceedings{horwitz1988interprocedural,
  title={Interprocedural slicing using dependence graphs},
  author={Horwitz, Susan and Reps, Thomas and Binkley, David},
  booktitle={Proceedings of the ACM SIGPLAN 1988 conference on Programming Language design and Implementation},
  pages={35--46},
  year={1988}
}

@article{ferrante1987program,
author = {Ferrante, Jeanne and Ottenstein, Karl J. and Warren, Joe D.},
title = {The Program Dependence Graph and Its Use in Optimization},
year = {1987},
issue_date = {July 1987},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {9},
number = {3},
issn = {0164-0925},
url = {https://doi.org/10.1145/24039.24041},
doi = {10.1145/24039.24041},
abstract = {In this paper we present an intermediate program representation, called the program dependence graph (PDG), that makes explicit both the data and control dependences for each operation in a program. Data dependences have been used to represent only the relevant data flow relationships of a program. Control dependences are introduced to analogously represent only the essential control flow relationships of a program. Control dependences are derived from the usual control flow graph. Many traditional optimizations operate more efficiently on the PDG. Since dependences in the PDG connect computationally related parts of the program, a single walk of these dependences is sufficient to perform many optimizations. The PDG allows transformations such as vectorization, that previously required special treatment of control dependence, to be performed in a manner that is uniform for both control and data dependences. Program transformations that require interaction of the two dependence types can also be easily handled with our representation. As an example, an incremental approach to modifying data dependences resulting from branch deletion or loop unrolling is introduced. The PDG supports incremental optimization, permitting transformations to be triggered by one another and applied only to affected dependences.},
journal = {ACM Trans. Program. Lang. Syst.},
month = {jul},
pages = {319\u2013349},
numpages = {31}
}



@article{cooper2001simple,
  title={A simple, fast dominance algorithm},
  author={Cooper, Keith D and Harvey, Timothy J and Kennedy, Ken},
  journal={Software Practice \\& Experience},
  volume={4},
  number={1-10},
  pages={1--8},
  year={2001}
}

@inproceedings{weiser1984program,
author = {Weiser, Mark},
title = {Program Slicing},
year = {1981},
isbn = {0897911466},
publisher = {IEEE Press},
abstract = {Program slicing is a method used by experienced computer programmers for abstracting from programs. Starting from a subset of a program's behavior, slicing reduces that program to a minimal form which still produces that behavior. The reduced program, called a \u201Cslice\u201D, is an independent program guaranteed to faithfully represent the original program within the domain of the specified subset of behavior.Finding a slice is in general unsolvable. A dataflow algorithm is presented for approximating slices when the behavior subset is specified as the values of a set of variables at a statement. Experimental evidence is presented that these slices are used by programmers during debugging. Experience with two automatic slicing tools is summarized. New measures of program complexity are suggested based on the organization of a program's slices.},
booktitle = {Proceedings of the 5th International Conference on Software Engineering},
pages = {439\u2013449},
numpages = {11},
keywords = {Human factors, Software tools, Data flow analysis, Program maintenance, Program metrics, Debugging},
location = {San Diego, California, USA},
series = {ICSE '81}
}


@article{weiser1982programmers,
  title={Programmers use slices when debugging},
  author={Weiser, Mark},
  journal={Communications of the ACM},
  volume={25},
  number={7},
  pages={446--452},
  year={1982},
  publisher={ACM New York, NY, USA}
}

@article{xu2005brief,
  title={A brief survey of program slicing},
  author={Xu, Baowen and Qian, Ju and Zhang, Xiaofang and Wu, Zhongqiang and Chen, Lin},
  journal={ACM SIGSOFT Software Engineering Notes},
  volume={30},
  number={2},
  pages={1--36},
  year={2005},
  publisher={ACM New York, NY, USA}
}

@article{silva2012vocabulary,
  title={A vocabulary of program slicing-based techniques},
  author={Silva, Josep},
  journal={ACM computing surveys (CSUR)},
  volume={44},
  number={3},
  pages={1--41},
  year={2012},
  publisher={ACM New York, NY, USA}
}

@inproceedings{parnin2011automated,
  title={Are automated debugging techniques actually helping programmers?},
  author={Parnin, Chris and Orso, Alessandro},
  booktitle={Proceedings of the 2011 international symposium on software testing and analysis},
  pages={199--209},
  year={2011}
}

@inproceedings{cuoq2012frama,
  title={Frama-c},
  author={Cuoq, Pascal and Kirchner, Florent and Kosmatov, Nikolai and Prevosto, Virgile and Signoles, Julien and Yakobowski, Boris},
  booktitle={International conference on software engineering and formal methods},
  pages={233--247},
  year={2012},
  organization={Springer}
}

@inproceedings{balakrishnan2005codesurfer,
  title={Codesurfer/x86\u2014a platform for analyzing x86 executables},
  author={Balakrishnan, Gogul and Gruian, Radu and Reps, Thomas and Teitelbaum, Tim},
  booktitle={International Conference on Compiler Construction},
  pages={250--254},
  year={2005},
  organization={Springer}
}

@inproceedings{zhao2018parallel,
  title={Parallel sparse flow-sensitive points-to analysis},
  author={Zhao, Jisheng and Burke, Michael G and Sarkar, Vivek},
  booktitle={Proceedings of the 27th International Conference on Compiler Construction},
  pages={59--70},
  year={2018}
}

@inproceedings{might2010resolving,
  title={Resolving and exploiting the k-CFA paradox: illuminating functional vs. object-oriented program analysis},
  author={Might, Matthew and Smaragdakis, Yannis and Van Horn, David},
  booktitle={Proceedings of the 31st ACM SIGPLAN Conference on Programming Language Design and Implementation},
  pages={305--315},
  year={2010}
}

@inproceedings{clarke1998ownership,
author = {Clarke, David G. and Potter, John M. and Noble, James},
title = {Ownership Types for Flexible Alias Protection},
year = {1998},
isbn = {1581130058},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/286936.286947},
doi = {10.1145/286936.286947},
abstract = {Object-oriented programming languages allow inter-object aliasing. Although necessary to construct linked data structures and networks of interacting objects, aliasing is problematic in that an aggregate object's state can change via an alias to one of its components, without the aggregate being aware of any aliasing.Ownership types form a static type system that indicates object ownership. This provides a flexible mechanism to limit the visibility of object references and restrict access paths to objects, thus controlling a system's dynamic topology. The type system is shown to be sound, and the specific aliasing properties that a system's object graph satisfies are formulated and proven invariant for well-typed programs.},
booktitle = {Proceedings of the 13th ACM SIGPLAN Conference on Object-Oriented Programming, Systems, Languages, and Applications},
pages = {48\u201364},
numpages = {17},
keywords = {alias protection, containment, ownership, programming language design, representation exposure, sharing},
location = {Vancouver, British Columbia, Canada},
series = {OOPSLA '98}
}

@inproceedings{grossman2002region,
author = {Grossman, Dan and Morrisett, Greg and Jim, Trevor and Hicks, Michael and Wang, Yanling and Cheney, James},
title = {Region-Based Memory Management in Cyclone},
year = {2002},
isbn = {1581134630},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/512529.512563},
doi = {10.1145/512529.512563},
abstract = {Cyclone is a type-safe programming language derived from C. The primary design goal of Cyclone is to let programmers control data representation and memory management without sacrificing type-safety. In this paper, we focus on the region-based memory management of Cyclone and its static typing discipline. The design incorporates several advancements, including support for region subtyping and a coherent integration with stack allocation and a garbage collector. To support separate compilation, Cyclone requires programmers to write some explicit region annotations, but a combination of default annotations, local type inference, and a novel treatment of region effects reduces this burden. As a result, we integrate C idioms in a region-based framework. In our experience, porting legacy C to Cyclone has required altering about 8% of the code; of the changes, only 6% (of the 8%) were region annotations.},
booktitle = {Proceedings of the ACM SIGPLAN 2002 Conference on Programming Language Design and Implementation},
pages = {282\u2013293},
numpages = {12},
location = {Berlin, Germany},
series = {PLDI '02}
}


@inproceedings{agrawal2001evaluating,
  title={Evaluating explicitly context-sensitive program slicing},
  author={Agrawal, Gagan and Guo, Liang},
  booktitle={Proceedings of the 2001 ACM SIGPLAN-SIGSOFT workshop on Program analysis for software tools and engineering},
  pages={6--12},
  year={2001}
}

@article{girard1987linear,
  doi = {10.1016/0304-3975(87)90045-4},
  url = {https://doi.org/10.1016/0304-3975(87)90045-4},
  year = {1987},
  publisher = {Elsevier {BV}},
  volume = {50},
  number = {1},
  pages = {1--101},
  author = {Jean-Yves Girard},
  title = {Linear logic},
  journal = {Theoretical Computer Science}
}

@misc{weiss2019oxide,
  author = {Weiss, Aaron and Gierczak, Olek and Patterson, Daniel  and Ahmed, Amal},
  title = {Oxide: The Essence of Rust},
  year = {2019},
  eprint = {arXiv:1903.00982v3},
}

@inproceedings{rountev1999data,
author = {Rountev, Atanas and Ryder, Barbara G. and Landi, William},
title = {Data-Flow Analysis of Program Fragments},
year = {1999},
isbn = {3540665382},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
abstract = {Traditional interprocedural data-flow analysis is performed on whole programs; however, such whole-program analysis is not feasible for large or incomplete programs. We propose fragment data-flow analysis as an alternative approach which computes data-flow information for a specific program fragment. The analysis is parameterized by the additional information available about the rest of the program. We describe two frameworks for interprocedural flow-sensitive fragment analysis, the relationship between fragment analysis and whole-program analysis, and the requirements ensuring fragment analysis safety and feasibility. We propose an application of fragment analysis as a second analysis phase after an inexpensive flow-insensitive whole-program analysis, in order to obtain better information for important program fragments. We also describe the design of two fragment analyses derived from an already existing whole-program flow- and context-sensitive pointer alias analysis for C programs and present empirical evaluation of their cost and precision. Our experiments show evidence of dramatically better precision obtainable at a practical cost.},
booktitle = {Proceedings of the 7th European Software Engineering Conference Held Jointly with the 7th ACM SIGSOFT International Symposium on Foundations of Software Engineering},
pages = {235\u2013252},
numpages = {18},
location = {Toulouse, France},
series = {ESEC/FSE-7}
}


@inproceedings{cousot2002modular,
author = {Cousot, Patrick and Cousot, Radhia},
title = {Modular Static Program Analysis},
year = {2002},
isbn = {3540433694},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
abstract = {The purpose of this paper is to present four basic methods for compositional separate modular static analysis of programs by abstract interpretation: - simplification-based separate analysis; - worst-case separate analysis; - separate analysis with (user-provided) interfaces; - symbolic relational separate analysis; as well as a fifth category which is essentially obtained by composition of the above separate local analyses together with global analysis methods.},
booktitle = {Proceedings of the 11th International Conference on Compiler Construction},
pages = {159\u2013178},
numpages = {20},
series = {CC '02}
}


@inproceedings{gulwani2007computing,
  title={Computing procedure summaries for interprocedural analysis},
  author={Gulwani, Sumit and Tiwari, Ashish},
  booktitle={European Symposium on Programming},
  pages={253--267},
  year={2007},
  organization={Springer}
}


@inproceedings{yorsh2008generating,
author = {Yorsh, Greta and Yahav, Eran and Chandra, Satish},
title = {Generating Precise and Concise Procedure Summaries},
year = {2008},
isbn = {9781595936899},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1328438.1328467},
doi = {10.1145/1328438.1328467},
abstract = {We present a framework for generating procedure summaries that are (a) precise - applying the summary in a given context yields the same result as re-analyzing the procedure in that context, and(b) concise - the summary exploits the commonalitiesin the ways the procedure manipulates abstract values, and does not contain superfluous context information.The use of a precise and concise procedure summary inmodular analyses provides a way to capture infinitely many possible contexts in a finite way; in interprocedural analyses, it provides a compact representation of an explicit input-output summary table without loss of precision.We define a class of abstract domains and transformers for which precise and concise summaries can be efficiently generated using our framework. Our framework is rich enough to encode a wide range of problems, including all IFDS and IDE problems. In addition, we show how the framework is instantiated to provide novel solutions to two hard problems: modular linear constant propagation and modular typestate verification, both in the presence of aliasing. We implemented a prototype of our framework that computes summaries for the typestate domain, and report on preliminary experimental results.},
booktitle = {Proceedings of the 35th Annual ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages},
pages = {221\u2013234},
numpages = {14},
keywords = {micro-transformers, composition, typestate verification, symbolic summary, relational analysis, summarization, dataflow analysis, aliasing},
location = {San Francisco, California, USA},
series = {POPL '08}
}


@book{sharir1978two,
  title={Two approaches to interprocedural data flow analysis},
  author={Sharir, Micha and Pnueli, Amir and others},
  year={1978},
  publisher={New York University. Courant Institute of Mathematical Sciences}
}

@inproceedings{tang2015summary,
author = {Tang, Hao and Wang, Xiaoyin and Zhang, Lingming and Xie, Bing and Zhang, Lu and Mei, Hong},
title = {Summary-Based Context-Sensitive Data-Dependence Analysis in Presence of Callbacks},
year = {2015},
isbn = {9781450333009},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/2676726.2676997},
doi = {10.1145/2676726.2676997},
abstract = {Building a summary for library code is a common approach to speeding up the analysis of client code. In presence of callbacks, some reachability relationships between library nodes cannot be obtained during library-code summarization. Thus, the library code may have to be analyzed again during the analysis of the client code with the library summary. In this paper, we propose to summarize library code with tree-adjoining-language (TAL) reachability. Compared with the summary built with context-free-language (CFL) reachability, the summary built with TAL reachability further contains conditional reachability relationships. The conditional reachability relationships can lead to much lighter analysis of the library code during the client code analysis with the TAL-reachability-based library summary. We also performed an experimental comparison of context-sensitive data-dependence analysis with the TAL-reachability-based library summary and context-sensitive data-dependence analysis with the CFL-reachability-based library summary using 15 benchmark subjects. Our experimental results demonstrate that the former has an 8X speed-up over the latter on average.},
booktitle = {Proceedings of the 42nd Annual ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages},
pages = {83\u201395},
numpages = {13},
keywords = {summary-based analysis, context-sensitive analysis, tree adjoining languages, cfl reachability, tal reachability},
location = {Mumbai, India},
series = {POPL '15}
}


@inproceedings{madhavan2012modular,
  title={Modular heap analysis for higher-order programs},
  author={Madhavan, Ravichandhran and Ramalingam, Ganesan and Vaswani, Kapil},
  booktitle={International Static Analysis Symposium},
  pages={370--387},
  year={2012},
  organization={Springer}
}
 
@inproceedings{wadler1989theorems,
  title={Theorems for free!},
  author={Wadler, Philip},
  booktitle={Proceedings of the fourth international conference on Functional programming languages and computer architecture},
  pages={347--359},
  year={1989}
}

@article{tofte1997region,
  title={Region-based memory management},
  author={Tofte, Mads and Talpin, Jean-Pierre},
  journal={Information and computation},
  volume={132},
  number={2},
  pages={109--176},
  year={1997},
  publisher={Elsevier}
}

@misc{nllrfc,
    author={Niko Matsakis},
    title={Non-lexical lifetimes},
    year={2017},
    url={https://rust-lang.github.io/rfcs/2094-nll.html}
}

@misc{polonius,
  author={Niko Matsakis},
  title={An alias-based formulation of the borrow checker},
  year={2018},
  url={http://smallcultfollowing.com/babysteps/blog/2018/04/27/an-alias-based-formulation-of-the-borrow-checker}
}

@article{jung2017rustbelt,
author = {Jung, Ralf and Jourdan, Jacques-Henri and Krebbers, Robbert and Dreyer, Derek},
title = {RustBelt: Securing the Foundations of the Rust Programming Language},
year = {2017},
issue_date = {January 2018},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {2},
number = {POPL},
url = {https://doi.org/10.1145/3158154},
doi = {10.1145/3158154},
abstract = {Rust is a new systems programming language that promises to overcome the seemingly fundamental tradeoff between high-level safety guarantees and low-level control over resource management. Unfortunately, none of Rust's safety claims have been formally proven, and there is good reason to question whether they actually hold. Specifically, Rust employs a strong, ownership-based type system, but then extends the expressive power of this core type system through libraries that internally use unsafe features. In this paper, we give the first formal (and machine-checked) safety proof for a language representing a realistic subset of Rust. Our proof is extensible in the sense that, for each new Rust library that uses unsafe features, we can say what verification condition it must satisfy in order for it to be deemed a safe extension to the language. We have carried out this verification for some of the most important libraries that are used throughout the Rust ecosystem.},
journal = {Proc. ACM Program. Lang.},
month = {dec},
articleno = {66},
numpages = {34},
keywords = {logical relations, separation logic, type systems, concurrency, Rust}
}

@book{appel1997modern,
  title={Modern Compiler Implementation in ML},
  author={Appel, Andrew W},
  year={1997},
  publisher={Cambridge University Press}
}

@misc{mirguide,
    title={The MIR (Mid-level IR) - Guide to Rustc Development},
    year={2021},
    url={https://rustc-dev-guide.rust-lang.org/mir/index.html},
}

@inproceedings{cytron1989efficient,
author = {Cytron, R. and Ferrante, J. and Rosen, B. K. and Wegman, M. N. and Zadeck, F. K.},
title = {An Efficient Method of Computing Static Single Assignment Form},
year = {1989},
isbn = {0897912942},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/75277.75280},
doi = {10.1145/75277.75280},
booktitle = {Proceedings of the 16th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages},
pages = {25\u201335},
numpages = {11},
location = {Austin, Texas, USA},
series = {POPL '89}
}


@misc{cloc,
    title={cloc: Count Lines of Code},
    author={Al Danial},
    year={2021},
    url={https://github.com/AlDanial/cloc}
}

@mastersthesis{llvmslicer,
 author={Marek Chalupa},
 title = {Slicing of LLVM bitcode},
 school = {Masaryk University},
 year = {2016},
} 

@inproceedings{jayaraman2005kaveri,
  title={Kaveri: Delivering the Indus Java program slicer to Eclipse},
  author={Jayaraman, Ganeshan and Ranganath, Venkatesh Prasad and Hatcliff, John},
  booktitle={International Conference on Fundamental Approaches to Software Engineering},
  pages={269--272},
  year={2005},
  organization={Springer}
}


@inproceedings{abadi1999core,
author = {Abadi, Mart\\'{\\i}n and Banerjee, Anindya and Heintze, Nevin and Riecke, Jon G.},
title = {A Core Calculus of Dependency},
year = {1999},
isbn = {1581130953},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/292540.292555},
doi = {10.1145/292540.292555},
abstract = {Notions of program dependency arise in many settings: security, partial evaluation, program slicing, and call-tracking. We argue that there is a central notion of dependency common to these settings that can be captured within a single calculus, the Dependency Core Calculus (DCC), a small extension of Moggi's computational lambda calculus. To establish this thesis, we translate typed calculi for secure information flow, binding-time analysis, slicing, and call-tracking into DCC. The translations help clarify aspects of the source calculi. We also define a semantic model for DCC and use it to give simple proofs of noninterference results for each case.},
booktitle = {Proceedings of the 26th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages},
pages = {147\u2013160},
numpages = {14},
location = {San Antonio, Texas, USA},
series = {POPL '99}
}


@phdthesis{andersen1994program,
  title={Program analysis and specialization for the C programming language},
  author={Andersen, Lars Ole},
  year={1994},
  school={Citeseer}
}

@inproceedings{steensgaard1996points,
  title={Points-to analysis in almost linear time},
  author={Steensgaard, Bjarne},
  booktitle={Proceedings of the 23rd ACM SIGPLAN-SIGACT symposium on Principles of programming languages},
  pages={32--41},
  year={1996}
} 

@article{pottier2003information,
author = {Pottier, Fran\\c{c}ois and Simonet, Vincent},
title = {Information Flow Inference for ML},
year = {2003},
issue_date = {January 2003},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {25},
number = {1},
issn = {0164-0925},
url = {https://doi.org/10.1145/596980.596983},
doi = {10.1145/596980.596983},
abstract = {This paper presents a type-based information flow analysis for a call-by-value \u03BB-calculus equipped with references, exceptions and let-polymorphism, which we refer to as ML. The type system is constraint-based and has decidable type inference. Its noninterference proof is reasonably light-weight, thanks to the use of a number of orthogonal techniques. First, a syntactic segregation between values and expressions allows a lighter formulation of the type system. Second, noninterference is reduced to subject reduction for a nonstandard language extension. Lastly, a semi-syntactic approach to type soundness allows dealing with constraint-based polymorphism separately.},
journal = {ACM Trans. Program. Lang. Syst.},
month = {jan},
pages = {117\u2013158},
numpages = {42},
keywords = {Constraint-based analysis, non-interference}
}

@inproceedings{campbell2018cognitive,
  title={Cognitive complexity: An overview and evaluation},
  author={Campbell, G Ann},
  booktitle={Proceedings of the 2018 international conference on technical debt},
  pages={57--58},
  year={2018}
}

@article{smaragdakis2015pointer,
  title={Pointer analysis},
  author={Smaragdakis, Yannis and Balatsouras, George},
  journal={Foundations and Trends in Programming Languages},
  volume={2},
  number={1},
  pages={1--69},
  year={2015},
  publisher={Now Publishers Inc. Hanover, MA, USA}
}

@article{astrauskas2019leveraging,
author = {Astrauskas, Vytautas and M\\"{u}ller, Peter and Poli, Federico and Summers, Alexander J.},
title = {Leveraging Rust Types for Modular Specification and Verification},
year = {2019},
issue_date = {October 2019},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {3},
number = {OOPSLA},
url = {https://doi.org/10.1145/3360573},
doi = {10.1145/3360573},
abstract = {Rust's type system ensures memory safety: well-typed Rust programs are guaranteed to not exhibit problems such as dangling pointers, data races, and unexpected side effects through aliased references. Ensuring correctness properties beyond memory safety, for instance, the guaranteed absence of assertion failures or more-general functional correctness, requires static program verification. For traditional system programming languages, formal verification is notoriously difficult and requires complex specifications and logics to reason about pointers, aliasing, and side effects on mutable state. This complexity is a major obstacle to the more-widespread verification of system software. In this paper, we present a novel verification technique that leverages Rust's type system to greatly simplify the specification and verification of system software written in Rust. We analyse information from the Rust compiler and synthesise a corresponding core proof for the program in a flavour of separation logic tailored to automation. To verify correctness properties beyond memory safety, users can annotate Rust programs with specifications at the abstraction level of Rust expressions; our technique weaves them into the core proof to verify modularly whether these specifications hold. Crucially, our proofs are constructed and checked automatically without exposing the underlying formal logic, allowing users to work exclusively at the level of abstraction of the programming language. As such, our work enables a new kind of verification tool, with the potential to impact a wide audience and allow the Rust community to benefit from state-of-the-art verification techniques. We have implemented our techniques for a subset of Rust; our evaluation on several thousand functions from widely-used Rust crates demonstrates its effectiveness.},
journal = {Proc. ACM Program. Lang.},
month = {oct},
articleno = {147},
numpages = {30},
keywords = {type systems, heap-manipulating programs, concurrency, Rust}
}

@article{jung2020stacked,
author = {Jung, Ralf and Dang, Hoang-Hai and Kang, Jeehoon and Dreyer, Derek},
title = {Stacked Borrows: An Aliasing Model for Rust},
year = {2019},
issue_date = {January 2020},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {4},
number = {POPL},
url = {https://doi.org/10.1145/3371109},
doi = {10.1145/3371109},
abstract = {Type systems are useful not just for the safety guarantees they provide, but also for helping compilers generate more efficient code by simplifying important program analyses. In Rust, the type system imposes a strict discipline on pointer aliasing, and it is an express goal of the Rust compiler developers to make use of that alias information for the purpose of program optimizations that reorder memory accesses. The problem is that Rust also supports unsafe code, and programmers can write unsafe code that bypasses the usual compiler checks to violate the aliasing discipline. To strike a balance between optimizations and unsafe code, the language needs to provide a set of rules such that unsafe code authors can be sure, if they are following these rules, that the compiler will preserve the semantics of their code despite all the optimizations it is doing. In this work, we propose Stacked Borrows, an operational semantics for memory accesses in Rust. Stacked Borrows defines an aliasing discipline and declares programs violating it to have undefined behavior, meaning the compiler does not have to consider such programs when performing optimizations. We give formal proofs (mechanized in Coq) showing that this rules out enough programs to enable optimizations that reorder memory accesses around unknown code and function calls, based solely on intraprocedural reasoning. We also implemented this operational model in an interpreter for Rust and ran large parts of the Rust standard library test suite in the interpreter to validate that the model permits enough real-world unsafe Rust code.},
journal = {Proc. ACM Program. Lang.},
month = {dec},
articleno = {41},
numpages = {32},
keywords = {program transformation, operational semantics, Rust, alias analysis}
}



@article{astrauskas2020programmers,
author = {Astrauskas, Vytautas and Matheja, Christoph and Poli, Federico and M\\"{u}ller, Peter and Summers, Alexander J.},
title = {How Do Programmers Use Unsafe Rust?},
year = {2020},
issue_date = {November 2020},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {4},
number = {OOPSLA},
url = {https://doi.org/10.1145/3428204},
doi = {10.1145/3428204},
abstract = {Rust\u2019s ownership type system enforces a strict discipline on how memory locations are accessed and shared. This discipline allows the compiler to statically prevent memory errors, data races, inadvertent side effects through aliasing, and other errors that frequently occur in conventional imperative programs. However, the restrictions imposed by Rust\u2019s type system make it difficult or impossible to implement certain designs, such as data structures that require aliasing (e.g. doubly-linked lists and shared caches). To work around this limitation, Rust allows code blocks to be declared as unsafe and thereby exempted from certain restrictions of the type system, for instance, to manipulate C-style raw pointers. Ensuring the safety of unsafe code is the responsibility of the programmer. However, an important assumption of the Rust language, which we dub the Rust hypothesis, is that programmers use Rust by following three main principles: use unsafe code sparingly, make it easy to review, and hide it behind a safe abstraction such that client code can be written in safe Rust. Understanding how Rust programmers use unsafe code and, in particular, whether the Rust hypothesis holds is essential for Rust developers and testers, language and library designers, as well as tool developers. This paper studies empirically how unsafe code is used in practice by analysing a large corpus of Rust projects to assess the validity of the Rust hypothesis and to classify the purpose of unsafe code. We identify queries that can be answered by automatically inspecting the program\u2019s source code, its intermediate representation MIR, as well as type information provided by the Rust compiler; we complement the results by manual code inspection. Our study supports the Rust hypothesis partially: While most unsafe code is simple and well-encapsulated, unsafe features are used extensively, especially for interoperability with other languages.},
journal = {Proc. ACM Program. Lang.},
month = {nov},
articleno = {136},
numpages = {27},
keywords = {Rust hypothesis, Rust, empirical study, unsafe code}
}

@inproceedings{dillig2011precise,
author = {Dillig, Isil and Dillig, Thomas and Aiken, Alex and Sagiv, Mooly},
title = {Precise and Compact Modular Procedure Summaries for Heap Manipulating Programs},
year = {2011},
isbn = {9781450306638},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1993498.1993565},
doi = {10.1145/1993498.1993565},
abstract = {We present a strictly bottom-up, summary-based, and precise heap analysis targeted for program verification that performs strong updates to heap locations at call sites. We first present a theory of heap decompositions that forms the basis of our approach; we then describe a full analysis algorithm that is fully symbolic and efficient. We demonstrate the precision and scalability of our approach for verification of real C and C++ programs.},
booktitle = {Proceedings of the 32nd ACM SIGPLAN Conference on Programming Language Design and Implementation},
pages = {567\u2013577},
numpages = {11},
keywords = {summary-based analysis, pointer analysis},
location = {San Jose, California, USA},
series = {PLDI '11}
}

@ARTICLE{sabelfeld2003language,
  author={Sabelfeld, A. and Myers, A.C.},
  journal={IEEE Journal on Selected Areas in Communications}, 
  title={Language-based information-flow security}, 
  year={2003},
  volume={21},
  number={1},
  pages={5-19},
  doi={10.1109/JSAC.2002.806121},
  url={https://doi.org/10.1109/JSAC.2002.806121}
}

@incollection{abadi1999protection,
  title={Protection in programming-language translations},
  author={Abadi, Mart{\\'\\i}n},
  booktitle={Secure Internet programming},
  pages={19--34},
  year={1999},
  publisher={Springer}
}

@inproceedings{myers1999jflow,
author = {Myers, Andrew C.},
title = {JFlow: Practical Mostly-Static Information Flow Control},
year = {1999},
isbn = {1581130953},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/292540.292561},
doi = {10.1145/292540.292561},
abstract = {A promising technique for protecting privacy and integrity of sensitive data is to statically check information flow within programs that manipulate the data. While previous work has proposed programming language extensions to allow this static checking, the resulting languages are too restrictive for practical use and have not been implemented. In this paper, we describe the new language JFlow, an extension to the Java language that adds statically-checked information flow annotations. JFlow provides several new features that make information flow checking more flexible and convenient than in previous models: a decentralized label model, label polymorphism, run-time label checking, and automatic label inference. JFlow also supports many language features that have never been integrated successfully with static information flow control, including objects, subclassing, dynamic type tests, access control, and exceptions. This paper defines the JFlow language and presents formal rules that are used to check JFlow programs for correctness. Because most checking is static, there is little code space, data space, or run-time overhead in the JFlow implementation.},
booktitle = {Proceedings of the 26th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages},
pages = {228\u2013241},
numpages = {14},
location = {San Antonio, Texas, USA},
series = {POPL '99}
}


@inproceedings{goguen1982security,
  doi = {10.1109/sp.1982.10014},
  url = {https://doi.org/10.1109/sp.1982.10014},
  year = {1982},
  month = apr,
  publisher = {{IEEE}},
  author = {J. A. Goguen and J. Meseguer},
  title = {Security Policies and Security Models},
  booktitle = {1982 {IEEE} Symposium on Security and Privacy}
}

@inproceedings{stefan2011flexible,
author = {Stefan, Deian and Russo, Alejandro and Mitchell, John C. and Mazi\\\`{e}res, David},
title = {Flexible Dynamic Information Flow Control in Haskell},
year = {2011},
isbn = {9781450308601},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/2034675.2034688},
doi = {10.1145/2034675.2034688},
abstract = {We describe a new, dynamic, floating-label approach to language-based information flow control, and present an implementation in Haskell. A labeled IO monad, LIO, keeps track of a current label and permits restricted access to IO functionality, while ensuring that the current label exceeds the labels of all data observed and restricts what can be modified. Unlike other language-based work, LIO also bounds the current label with a current clearance that provides a form of discretionary access control. In addition, programs may encapsulate and pass around the results of computations with different labels. We give precise semantics and prove confidentiality and integrity properties of the system.},
booktitle = {Proceedings of the 4th ACM Symposium on Haskell},
pages = {95\u2013106},
numpages = {12},
keywords = {library, monad, information flow control},
location = {Tokyo, Japan},
series = {Haskell '11}
}


@inproceedings{austin2009efficient,
author = {Austin, Thomas H. and Flanagan, Cormac},
title = {Efficient Purely-Dynamic Information Flow Analysis},
year = {2009},
isbn = {9781605586458},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1554339.1554353},
doi = {10.1145/1554339.1554353},
abstract = {We present a novel approach for efficiently tracking information flow in a dynamically-typed language such as JavaScript. Our approach is purely dynamic, and it detects problems with implicit paths via a dynamic check that avoids the need for an approximate static analyses while still guaranteeing non-interference. We incorporate this check into an efficient evaluation strategy based on sparse information labeling that leaves information flow labels implicit whenever possible, and introduces explicit labels only for values that migrate between security domains. We present experimental results showing that, on a range of small benchmark programs, sparse labeling provides a substantial (30%--50%) speed-up over universal labeling.},
booktitle = {Proceedings of the ACM SIGPLAN Fourth Workshop on Programming Languages and Analysis for Security},
pages = {113\u2013124},
numpages = {12},
keywords = {information flow control, dynamic analysis},
location = {Dublin, Ireland},
series = {PLAS '09}
}

@inproceedings{gordon2015information,
  title={Information flow analysis of Android applications in DroidSafe},
  author={Gordon, Michael I and Kim, Deokhwan and Perkins, Jeff H and Gilham, Limei and Nguyen, Nguyen and Rinard, Martin C},
  booktitle={NDSS},
  volume={15},
  number={201},
  pages={110},
  year={2015}
}

@inproceedings{shapiro1997effects,
author = {Shapiro, Marc and Horwitz, Susan},
title = {The Effects of the Precision of Pointer Analysis},
year = {1997},
isbn = {3540634681},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
booktitle = {Proceedings of the 4th International Symposium on Static Analysis},
pages = {16\u201334},
numpages = {19},
series = {SAS '97}
}

@article{denning1976lattice,
author = {Denning, Dorothy E.},
title = {A Lattice Model of Secure Information Flow},
year = {1976},
issue_date = {May 1976},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {19},
number = {5},
issn = {0001-0782},
url = {https://doi.org/10.1145/360051.360056},
doi = {10.1145/360051.360056},
abstract = {This paper investigates mechanisms that guarantee secure information flow in a computer system. These mechanisms are examined within a mathematical framework suitable for formulating the requirements of secure information flow among security classes. The central component of the model is a lattice structure derived from the security classes and justified by the semantics of information flow. The lattice properties permit concise formulations of the security requirements of different existing systems and facilitate the construction of mechanisms that enforce security. The model provides a unifying view of all systems that restrict information flow, enables a classification of them according to security objectives, and suggests some new approaches. It also leads to the construction of automatic program certification mechanisms for verifying the secure flow of information through a program.},
journal = {Commun. ACM},
month = {may},
pages = {236\u2013243},
numpages = {8},
keywords = {program certification, lattice, information flow, security, security class, protection}
}

@incollection{tang1994separate,
  doi = {10.1007/3-540-57887-0_98},
  url = {https://doi.org/10.1007/3-540-57887-0_98},
  year = {1994},
  publisher = {Springer Berlin Heidelberg},
  pages = {224--243},
  author = {Yan Mei Tang and Pierre Jouvelot},
  title = {Separate abstract interpretation for control-flow analysis},
  booktitle = {Lecture Notes in Computer Science}
}

@INPROCEEDINGS{li2006encoding,
  author={Peng Li and Zdancewic, S.},
  booktitle={19th IEEE Computer Security Foundations Workshop (CSFW'06)}, 
  title={Encoding information flow in Haskell}, 
  year={2006},
  volume={},
  number={},
  pages={12 pp.-16},
  doi={10.1109/CSFW.2006.13}
}

@inproceedings{russo2008library,
author = {Russo, Alejandro and Claessen, Koen and Hughes, John},
title = {A Library for Light-Weight Information-Flow Security in Haskell},
year = {2008},
isbn = {9781605580647},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1411286.1411289},
doi = {10.1145/1411286.1411289},
abstract = {Protecting confidentiality of data has become increasingly important for computing systems. Information-flow techniques have been developed over the years to achieve that purpose, leading to special-purpose languages that guarantee information-flow security in programs. However, rather than producing a new language from scratch, information-flow security can also be provided as a library. This has been done previously in Haskell using the arrow framework. In this paper, we show that arrows are not necessary to design such libraries and that a less general notion, namely monads, is sufficient to achieve the same goals. We present a monadic library to provide information-flow security for Haskell programs. The library introduces mechanisms to protect confidentiality of data for pure computations, that we then easily, and modularly, extend to include dealing with side-effects. We also present combinators to dynamically enforce different declassification policies when release of information is required in a controlled manner. It is possible to enforce policies related to what, by whom, and when information is released or a combination of them. The well-known concept of monads together with the light-weight characteristic of our approach makes the library suitable to build applications where confidentiality of data is an issue.},
booktitle = {Proceedings of the First ACM SIGPLAN Symposium on Haskell},
pages = {13\u201324},
numpages = {12},
keywords = {monad, library, information-flow, declassification},
location = {Victoria, BC, Canada},
series = {Haskell '08}
}



@inproceedings{buiras2015hlio,
author = {Buiras, Pablo and Vytiniotis, Dimitrios and Russo, Alejandro},
title = {HLIO: Mixing Static and Dynamic Typing for Information-Flow Control in Haskell},
year = {2015},
isbn = {9781450336697},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/2784731.2784758},
doi = {10.1145/2784731.2784758},
abstract = { Information-Flow Control (IFC) is a well-established approach for allowing untrusted code to manipulate sensitive data without disclosing it. IFC is typically enforced via type systems and static analyses or via dynamic execution monitors. The LIO Haskell library, originating in operating systems research, implements a purely dynamic monitor of the sensitivity level of a computation, particularly suitable when data sensitivity levels are only known at runtime. In this paper, we show how to give programmers the flexibility of deferring IFC checks to runtime (as in LIO), while also providing static guarantees---and the absence of runtime checks---for parts of their programs that can be statically verified (unlike LIO). We present the design and implementation of our approach, HLIO (Hybrid LIO), as an embedding in Haskell that uses a novel technique for deferring IFC checks based on singleton types and constraint polymorphism. We formalize HLIO, prove non-interference, and show how interesting IFC examples can be programmed. Although our motivation is IFC, our technique for deferring constraints goes well beyond and offers a methodology for programmer-controlled hybrid type checking in Haskell. },
booktitle = {Proceedings of the 20th ACM SIGPLAN International Conference on Functional Programming},
pages = {289\u2013301},
numpages = {13},
keywords = {hybrid typing, gradual typing, Information-flow control, singleton types, constraint kinds, data kinds, dynamic typing},
location = {Vancouver, BC, Canada},
series = {ICFP 2015}
}


@inproceedings{balasubramanian2017system,
author = {Balasubramanian, Abhiram and Baranowski, Marek S. and Burtsev, Anton and Panda, Aurojit and Rakamari\\'{c}, Zvonimir and Ryzhyk, Leonid},
title = {System Programming in Rust: Beyond Safety},
year = {2017},
isbn = {9781450350686},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3102980.3103006},
doi = {10.1145/3102980.3103006},
abstract = {Rust is a new system programming language that offers a practical and safe alternative to C. Rust is unique in that it enforces safety without runtime overhead, most importantly, without the overhead of garbage collection. While zero-cost safety is remarkable on its own, we argue that the superpowers of Rust go beyond safety. In particular, Rust's linear type system enables capabilities that cannot be implemented efficiently in traditional languages, both safe and unsafe, and that dramatically improve security and reliability of system software. We show three examples of such capabilities: zero-copy software fault isolation, efficient static information flow analysis, and automatic checkpointing. While these capabilities have been in the spotlight of systems research for a long time, their practical use is hindered by high cost and complexity. We argue that with the adoption of Rust these mechanisms will become commoditized.},
booktitle = {Proceedings of the 16th Workshop on Hot Topics in Operating Systems},
pages = {156\u2013161},
numpages = {6},
location = {Whistler, BC, Canada},
series = {HotOS '17}
}

@inproceedings{rakamaric2014smack,
  title = {SMACK: Decoupling Source Language Details from Verifier Implementations},
  author = {Zvonimir Rakamaric and Michael Emmi},
  booktitle = {Proceedings of the 26th International Conference on Computer Aided Verification (CAV)},
  series = {Lecture Notes in Computer Science},
  volume = {8559},
  publisher = {Springer},
  editor = {Armin Biere and Roderick Bloem},
  pages = {106--113},
  doi = {10.1007/978-3-319-08867-9_7},
    url = {https://doi.org/10.1007/978-3-319-08867-9_7},
year = {2014}
}

@inproceedings{ko2004designing,
author = {Ko, Amy J. and Myers, Brad A.},
title = {Designing the Whyline: A Debugging Interface for Asking Questions about Program Behavior},
year = {2004},
isbn = {1581137028},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/985692.985712},
doi = {10.1145/985692.985712},
abstract = {Debugging is still among the most common and costly of programming activities. One reason is that current debugging tools do not directly support the inquisitive nature of the activity. Interrogative Debugging is a new debugging paradigm in which programmers can ask why did and even why didn't questions directly about their program's runtime failures. The Whyline is a prototype Interrogative Debugging interface for the Alice programming environment that visualizes answers in terms of runtime events directly relevant to a programmer's question. Comparisons of identical debugging scenarios from user tests with and without the Whyline showed that the Whyline reduced debugging time by nearly a factor of 8, and helped programmers complete 40% more tasks.},
booktitle = {Proceedings of the SIGCHI Conference on Human Factors in Computing Systems},
pages = {151\u2013158},
numpages = {8},
keywords = {Alice, program slicing, debugging},
location = {Vienna, Austria},
series = {CHI '04}
}

@inproceedings{head2018interactive,
author = {Head, Andrew and Glassman, Elena L. and Hartmann, Bj\\"{o}rn and Hearst, Marti A.},
title = {Interactive Extraction of Examples from Existing Code},
year = {2018},
isbn = {9781450356206},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3173574.3173659},
abstract = {Programmers frequently learn from examples produced and shared by other programmers. However, it can be challenging and time-consuming to produce concise, working code examples. We conducted a formative study where 12 participants made examples based on their own code. This revealed a key hurdle: making meaningful simplifications without introducing errors. Based on this insight, we designed a mixed-initiative tool, CodeScoop, to help programmers extract executable, simplified code from existing code. CodeScoop enables programmers to "scoop" out a relevant subset of code. Techniques include selectively including control structures and recording an execution trace that allows authors to substitute literal values for code and variables. In a controlled study with 19 participants, CodeScoop helped programmers extract executable code examples with the intended behavior more easily than with a standard code editor.},
booktitle = {Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems},
pages = {1\u201312},
numpages = {12}
}

@inproceedings{wen2018context,
author = {Wen, Ming and Chen, Junjie and Wu, Rongxin and Hao, Dan and Cheung, Shing-Chi},
title = {Context-Aware Patch Generation for Better Automated Program Repair},
year = {2018},
isbn = {9781450356381},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3180155.3180233},
doi = {10.1145/3180155.3180233},
abstract = {The effectiveness of search-based automated program repair is limited in the number of correct patches that can be successfully generated. There are two causes of such limitation. First, the search space does not contain the correct patch. Second, the search space is huge and therefore the correct patch cannot be generated (i.e., correct patches are either generated after incorrect plausible ones or not generated within the time budget).To increase the likelihood of including the correct patches in the search space, we propose to work at a fine granularity in terms of AST nodes. This, however, will further enlarge the search space, increasing the challenge to find the correct patches. We address the challenge by devising a strategy to prioritize the candidate patches based on their likelihood of being correct. Specifically, we study the use of AST nodes' context information to estimate the likelihood.In this paper, we propose CapGen, a context-aware patch generation technique. The novelty which allows CapGen to produce more correct patches lies in three aspects: (1) The fine-granularity design enables it to find more correct fixing ingredients; (2) The context-aware prioritization of mutation operators enables it to constrain the search space; (3) Three context-aware models enable it to rank correct patches at high positions before incorrect plausible ones. We evaluate CapGen on Defects4J and compare it with the state-of-the-art program repair techniques. Our evaluation shows that CapGen outperforms and complements existing techniques. CapGen achieves a high precision of 84.00% and can prioritize the correct patches before 98.78% of the incorrect plausible ones.},
booktitle = {Proceedings of the 40th International Conference on Software Engineering},
pages = {1\u201311},
numpages = {11},
keywords = {automated program repair, context-aware, patch prioritization},
location = {Gothenburg, Sweden},
series = {ICSE '18}
}



@inproceedings{evans2020rust,
author = {Evans, Ana Nora and Campbell, Bradford and Soffa, Mary Lou},
title = {Is Rust Used Safely by Software Developers?},
year = {2020},
isbn = {9781450371216},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3377811.3380413},
doi = {10.1145/3377811.3380413},
booktitle = {Proceedings of the ACM/IEEE 42nd International Conference on Software Engineering},
pages = {246\u2013257},
numpages = {12},
location = {Seoul, South Korea},
series = {ICSE '20}
}

@mastersthesis{njor2021static,
  title={Static Taint Analysis in Rust},
  author={Njor, Emil J{\\o}rgensen and G{\\'u}stafsson, Hilmar},
  year={2021},
  school = {Aalborg University}
}

`;var ht={};me(ht,{cpp:()=>dt,cppLanguage:()=>Jt});var We=E(fn(),1),g=E(dn(),1),Nt=1,Xn=2,kn=3,Pn=82,Un=76,Sn=117,Tn=85,Rn=97,Yn=122,Zn=65,qn=90,zn=95,pt=48,Et=34,Wn=40,Dt=41,jn=32,Ht=62,Cn=new We.ExternalTokenizer(r=>{if(r.next==Un||r.next==Tn?r.advance():r.next==Sn&&(r.advance(),r.next==pt+8&&r.advance()),r.next!=Pn||(r.advance(),r.next!=Et))return;r.advance();let u="";for(;r.next!=Wn;){if(r.next==jn||r.next<=13||r.next==Dt)return;u+=String.fromCharCode(r.next),r.advance()}for(r.advance();;){if(r.next<0)return r.acceptToken(Nt);if(r.next==Dt){let p=!0;for(let Q=0;p&&Q<u.length;Q++)r.peek(Q+1)!=u.charCodeAt(Q)&&(p=!1);if(p&&r.peek(u.length+1)==Et)return r.acceptToken(Nt,2+u.length)}r.advance()}}),An=new We.ExternalTokenizer(r=>{if(r.next==Ht)r.peek(1)==Ht&&r.acceptToken(Xn,1);else{let u=!1,p=0;for(;;p++){if(r.next>=Zn&&r.next<=qn)u=!0;else{if(r.next>=Rn&&r.next<=Yn)return;if(r.next!=zn&&!(r.next>=pt&&r.next<=pt+9))break}r.advance()}u&&p>1&&r.acceptToken(kn)}},{extend:!0}),Vn=(0,g.styleTags)({"typedef struct union enum class typename decltype auto template operator friend noexcept namespace using __attribute__ __declspec __based":g.tags.definitionKeyword,"extern MsCallModifier MsPointerModifier extern static register inline const volatile restrict _Atomic mutable constexpr virtual explicit VirtualSpecifier Access":g.tags.modifier,"if else switch for while do case default return break continue goto throw try catch":g.tags.controlKeyword,"new sizeof delete static_assert":g.tags.operatorKeyword,"NULL nullptr":g.tags.null,this:g.tags.self,"True False":g.tags.bool,"TypeSize PrimitiveType":g.tags.standard(g.tags.typeName),TypeIdentifier:g.tags.typeName,FieldIdentifier:g.tags.propertyName,"CallExpression/FieldExpression/FieldIdentifier":g.tags.function(g.tags.propertyName),StatementIdentifier:g.tags.labelName,"Identifier DestructorName":g.tags.variableName,"CallExpression/Identifier":g.tags.function(g.tags.variableName),"CallExpression/ScopedIdentifier/Identifier":g.tags.function(g.tags.variableName),"FunctionDeclarator/Identifier FunctionDeclarator/DestructorName":g.tags.function(g.tags.definition(g.tags.variableName)),NamespaceIdentifier:g.tags.namespace,OperatorName:g.tags.operator,ArithOp:g.tags.arithmeticOperator,LogicOp:g.tags.logicOperator,BitOp:g.tags.bitwiseOperator,CompareOp:g.tags.compareOperator,AssignOp:g.tags.definitionOperator,UpdateOp:g.tags.updateOperator,LineComment:g.tags.lineComment,BlockComment:g.tags.blockComment,Number:g.tags.number,String:g.tags.string,"RawString SystemLibString":g.tags.special(g.tags.string),CharLiteral:g.tags.character,EscapeSequence:g.tags.escape,PreProcArg:g.tags.meta,"PreprocDirectiveName #include #ifdef #ifndef #if #define #else #endif #elif":g.tags.processingInstruction,MacroName:g.tags.special(g.tags.name),"( )":g.tags.paren,"[ ]":g.tags.squareBracket,"{ }":g.tags.brace,"< >":g.tags.angleBracket,". ->":g.tags.derefOperator,", ;":g.tags.separator}),Gn={__proto__:null,bool:34,char:34,int:34,float:34,double:34,void:34,size_t:34,ssize_t:34,intptr_t:34,uintptr_t:34,charptr_t:34,int8_t:34,int16_t:34,int32_t:34,int64_t:34,uint8_t:34,uint16_t:34,uint32_t:34,uint64_t:34,char8_t:34,char16_t:34,char32_t:34,char64_t:34,const:68,volatile:70,restrict:72,_Atomic:74,mutable:76,constexpr:78,struct:82,__declspec:86,final:90,override:90,public:94,private:94,protected:94,virtual:154,extern:156,static:158,register:160,inline:162,__attribute__:166,__based:172,__restrict:174,__uptr:174,__sptr:174,_unaligned:174,__unaligned:174,noexcept:188,throw:192,new:228,delete:230,operator:236,template:266,typename:272,class:274,using:284,friend:292,__cdecl:296,__clrcall:296,__stdcall:296,__fastcall:296,__thiscall:296,__vectorcall:296,case:306,default:308,if:320,else:326,switch:330,do:334,while:336,for:344,return:348,break:352,continue:356,goto:360,typedef:364,try:378,catch:382,namespace:388,static_assert:394,explicit:404,union:420,enum:442,signed:446,unsigned:446,long:446,short:446,decltype:458,auto:460,sizeof:492,TRUE:746,true:746,FALSE:748,false:748,NULL:500,nullptr:518,this:520},Fn={__proto__:null,"<":139},In={__proto__:null,">":143},Mn={__proto__:null,operator:218,new:504,delete:510},Bt=We.LRParser.deserialize({version:14,states:"$+^Q!QQVOOP&qOUOOO'cOWO'#CdO*|QUO'#CgO+WQUO'#FoO,nQbO'#CwO-PQUO'#CwO.oQUO'#JaO.vQUO'#CvO/ROpO'#DyO/ZQ!dO'#DbOOQQ'#I['#I[O/fQUO'#KOO1VQUO'#I`OOQQ'#I`'#I`O4XQUO'#JrO7YQUO'#JrO9aQVO'#EZO9qQUO'#EZO9vQUOOO:OQVO'#EhO<`QVO'#EiO<pQUO'#EiO?[QUO'#JvO?fQUO'#JvO?pQVO'#HwOOQQ'#Jv'#JvOAdQUO'#JvOCiQUO'#JvOCvQUO'#FaODhQUO'#FmOOQR'#Fo'#FoO,iQUO'#FoOOQR'#KS'#KSOOQR'#KR'#KRODmQVO'#JWOFeQUO'#KVOFrQUO'#KVOOQR'#Gl'#GlOGdQUO'#KXOOQR'#Gs'#GsOOQR'#Gu'#GuOOQR'#KQ'#KQOOQR'#Io'#IoQ!QQVOOOGoQVO'#FgOOQQ'#Iv'#IvOGvQUO'#HSOOQQ'#Ja'#JaOK_QUO'#JaOK{QUO'#JWOM{QVO'#HfOM{QVO'#HiOOQQ'#Hn'#HnOOQQ'#Ho'#HoO! zQUO'#HvOOQQ'#JW'#JWO!$OQUO'#JaOOQR'#J`'#J`O!$VQUO'#DWO!$[QUO'#JsOOQQ'#Js'#JsO!&hQUO'#EQO!&mQUO'#ETO!&rQ#vO'#EuO!'lQUO'#GgO!'wQUO'#FqO!(PQUO'#FvO!(UQVO'#FxO!(PQUO'#F|O!*qQUO'#F}O!*vQVO'#GPO!+QQUO'#GRO!+VQUO'#GTO!+[QUO'#GVO!+aQUO'#GXOM{QVO'#FjO!,hQUO'#FjO!,mQUO'#G`O!,rQVO'#GdO!,yQUO'#GeO!-RQUO'#GhO!/QQUO'#GkO!/bQUO'#GmO4XQUO'#FeO!0SQUO'#DUO!0hQUO'#HPO!0|QUO'#HQO!1_QUO'#HWO!1sQUO'#HXO!2hQUO'#HYO!4WQVO'#HkO!4bQUO'#HqO!4iQVO'#HtP!6V{&jO'#CbP!,|{&jO'#CbP!6b{,UO'#CbP!,|{&jO'#CbP!6g{&jO'#CbP!6rOSO'#IUPOOO)CDt)CDtOOOO'#IW'#IWO!6|OWO,59OOOQR,59O,59OOM{QVO,59UOOQQ,59W,59WOM{QVO,5<[OOQR,5<Z,5<ZO!7XQUO,59YOM{QVO,5={OOQR'#Hc'#HcOOQR'#Hd'#HdOOQR'#He'#HeOM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|OM{QVO,5=|O!9TQVO,5>TOOQQ,5>d,5>dO!:pQVO'#ChO!>YQUO'#CyOOQQ,59c,59cOOQQ,59b,59bOOQQ,5;U,5;UO!>gQ#vO,5=`O!4bQUO,5>]O!@zQVO,5>`O!ARQbO,59cO!A^QVO'#FQOOQQ,5>X,5>XO!AnQVO,59VO!AuO`O,5:eO!AzQbO'#DcO!B]QbO'#JgO!BkQbO,59|O!DmQUO'#CsO!F]QbO'#CwO!FbQUO'#CvO!IuQUO'#JaOOQQ-E<Y-E<YO!I|QUO,5@jOCvQUO,5;{O!JTQUO'#JaO4XQUO,5<POOQQ-E<^-E<^O!J_QUO,5@^O!J_QUO,5@^OOQR,5@j,5@jO!N_QUO'#CgO# TQUO,5=zO#!vQbO'#CwO##XQUO'#EjO##^QUO'#HmO##fQUO'#CvOOQR'#IX'#IXO##qQUO,5:uO#$XQUO,5:uO#$rQUO,5:uO#%dQUO'#CtO!&mQUO'#ClOOQQ'#Ia'#IaO#%lQ#vO'#EuO#$XQUO,5:uO#'XQUO,5:vO#)xQVO,5;RO#*SQUO'#EXO#*aQUO,5<gO#,eQUO'#JaO!+aQUO'#C}O#,lQUO,5;SO#,wQUO,5<gO#,|QUO'#C}O#-vQUO,5>UO#-{QUO,5;TO#.mQbO'#CwO#$XQUO'#EZO<pQUO'#EhO#.xQUO'#JvO!,|QUO'#EwO#/mQUO'#CtOOQQ,5;`,5;`O#2[QVO'#C{O#2fQUO'#KcO#5cQUO'#JzO#5jQUO'#JWO#5}QUO,5;cO#6SQVO'#F{OM{QVO'#H`O#8lQVO,5>cO?pQVO'#HwO#8vQUO,5>cO#8yQUO,5>cOOQQ,5>c,5>cO#9OQUO'#GoOOQR,5@q,5@qO#9WQUO,5@qO#9`QUO'#GqO#9hQUO,5<PO#9|QUO'#KPO#:UQUO,5;{O!(UQVO,5<XOOQR'#Is'#IsO#:ZQVO,5=UO#<aQbO'#CwO#<lQUO'#EjOAdQUO,5@qOOQQ'#It'#ItOOQQ-E<r-E<rOFrQUO,5@qO#9WQUO,5@sO#<qQUO,5@sOOQR,5@s,5@sOOQR,5@t,5@tO#<|QVO,5@tOOQR-E<m-E<mO#>mQVO,5<ROOQR,5<R,5<ROOQQ-E<t-E<tOOQQ,5=n,5=nOOQQ,59`,59`O#>tQUO,5>QO#@tQUO'#JWO#@{QUO,5>TO#A`QUO'#EbO#B}QUO'#EcO#CqQUO'#EcO#CyQVO'#EdO#DTQUO'#EeO#DqQUO'#EfOOQQ'#Jx'#JxO#E_QUO,5>bOOQQ,5>b,5>bO!,|QUO,59rO#EjQUO,5<SO!&mQUO,5:lOOQQ,5:o,5:oO#EwQUO'#JrOOQQ,5;a,5;aO#HeQUO,5;aO#HoQUO,5;aO#HtQUO,5;aO#HyQUO,5;aO! iQUO,5=`O#ITQUO,5;yO#I]QUO,5=RO#IbQUO,5=RO#LiQVO'#FsO!(UQVO,5<]O!(PQUO,5<]O!,mQUO,5<bO#LpQUO,5<dO!(UQVO,5<hO#LuQVO,5<iO$ wQUO,5<kOOQR,5<k,5<kO$#QQUO,5<kOOQR,5<m,5<mOOQR,5<o,5<oOOQQ'#Fn'#FnO$#VQUO,5<qO!+aQUO,5<sO$#[QUO,5<sO$#jQUO,5<UO$$pQVO,5<UO$&oQUO,5<zO$&tQUO,5=OOOQR,5=O,5=OOOQQ'#Cg'#CgO$'zQVO'#FiOOQR,5=P,5=PO$(RQUO,5=POM{QVO,5=SO$)kQUO'#JaO$)rQUO,5=VO$+nQUO'#FWO<pQUO,5=VO$+xQUO,5;pOM{QVO,5=XOCvQUO,5<PO$/zQUO'#JbO$0RQUO'#JbO$0]QUO'#D[O$0hQUO'#D_O$3UQUO,59pOOQQ,59p,59pO$4zQUO,59pO$5PQUO,59pO$5XQUO,59pO$7ZQUO,5=kOOQQ,5=k,5=kO$4zQUO,5=kO$5PQUO,5=kO$9PQUO,5=kO$9bQUO'#HUO$9jQUO,5=lOOQQ,5=l,5=lO$<{QUO,5=lO$>wQUO,5=rOOQQ,5=r,5=rO$4zQUO,5=rO$5PQUO,5=rO$@mQUO,5=rOOQQ,5=s,5=sOM{QVO,5=tO$AOQUO,5>VO#6SQVO'#F{OOQQ,5>V,5>VO$BqQUO,5>VO$BvQUO,5>]O!1sQUO,5>]O$DyQUO,5>`O$H]QVO,5>`P!6g{&jO,58|P$Hd{&jO,58|P$Hr{,UO,58|P$Hx{&jO,58|PO{O'#I{'#I{P$H}{&jO'#KdPOOO'#Kd'#KdP$IT{&jO'#KdPOOO,58|,58|POOO,5>p,5>pP$IYOSO,5>pOOOO-E<U-E<UOOQR1G.j1G.jO$IaQUO1G.pO$JgQUO1G1vOOQQ1G1v1G1vO$KsQUO'#CoO$NPQbO'#CwO$N[QUO'#CrO$NaQUO1G.tO#/mQUO'#CqOOQQ1G.t1G.tO%!dQUO1G3gO%#jQUO1G3hO%%]QUO1G3hO%'OQUO1G3hO%(qQUO1G3hO%*dQUO1G3hO%,VQUO1G3hO%-xQUO1G3hO%/kQUO1G3hO%1^QUO1G3hO%3PQUO1G3hO%4rQUO'#JVO%5{QUO'#JVO%6TQUO,59SOOQQ,5;W,5;WO%8YQUO,5;WO%8dQUO,5;WO%8iQUO,5;WO%8nQUO,5;WO! iQUO1G2zO%:xQUO1G3wO!1sQUO1G3wO%;PQUO1G3zO%<rQVO1G3zOOQQ1G.}1G.}OOQQ1G.|1G.|OOQQ1G0p1G0pO!>gQ#vO1G2zO%<yQUO'#J{O?pQVO'#HwO%>SQUO'#FTOOQQ'#Ik'#IkO%>XQUO'#FRO%>dQUO'#J{O%>lQUO,5;lO%>qQUO1G.qOOQQ1G.q1G.qOOQR1G0P1G0PO%@dQ!dO'#I]O%@iQbO,59}O%BzQ!eO'#DeO%CRQ!dO'#I_O%CWQbO,5@RO%CWQbO,5@ROOQQ1G/h1G/hO%CcQbO1G/hO%EeQUO'#CyO!F]QbO,59cOOQR1G6U1G6UO#9hQUO1G1kO%GQQUO1G1gOCvQUO1G1kO%G}QUO1G5xO%I^Q#vO'#ElO%JUQbO,59cOOQR-E<V-E<VO%JaQUO1G0aO##qQUO1G0aOOQQ-E<_-E<_O#$XQUO1G0aOOQQ'#Ib'#IbO%KRQUO1G0bO!+aQUO'#EaOOQQ'#Ic'#IcO%LgQUO1G0bO%MZQUO'#E]O%NnQUO'#E_O%NsQUO1G0mO& yQVO1G0mOOQQ1G0m1G0mO&!TQVO1G0mO#EpQUO'#EYO&!yQUO'#EYO&#dQUO'#JuO&#lQUO,5:sOOQQ1G2R1G2RO&#qQUO,59iOOQQ1G0n1G0nO&#qQUO,59iO&$kQUO,59iO!AnQVO1G3pO&%VQUO'#JzO&%_QUO'#K]O&&kQUO'#J_O&&yQUO'#J^O&'UQUO,59gOM{QVO'#IyO&'^QUO,5@}O!,|QUO'#IgO&'fQUO,5@fOOQQ1G0}1G0}OOQQ1G3}1G3}OM{QVO1G3}O&'nQUO'#GpO&'vQUO'#KWOOQQ,5=Z,5=ZOOQR1G6]1G6]O&(RQUO,5=]O&(WQUO,5=^O&(]QVO'#EXO&/_QVO'#FgO!AnQVO,5;|OOQQ,5;|,5;|OCvQUO'#InO&/oQUO,5@kOOQR1G1k1G1kOOQR1G1g1G1gOOQR1G1s1G1sOOQR-E<q-E<qO#9WQUO1G6]OAdQUO1G6]O#9WQUO1G6_OOQR1G6_1G6_OOQR1G6`1G6`O#<|QVO1G6`O&/wQUO1G6`O&0}QVO,5=^OOQR1G1m1G1mOOQQ'#Ie'#IeO&1UQUO,5:|O&2sQUO,5:|OOQQ'#If'#IfO&2zQUO,5:}OOQQ,5:},5:}O&2zQUO,5:}O&3nQVO,5;OO&3xQUO,5;OO&3nQVO,5;OOOQQ,5;O,5;OO&5OQVO,5;OO&5VQUO,5;PO&6PQUO,5;QOOQQ1G3|1G3|O&6WQUO1G/^O/fQUO'#FaOOQR1G1n1G1nO&6]QUO1G0WOOQQ1G0{1G0{O&6bQUO1G0{O&6gQUO1G2zO!+aQUO1G1eOOQR1G2m1G2mO&6xQUO1G2mO&6}QUO,5<_O#EpQUO'#FaOCvQUO'#FaO&7UQUO,5<_OM{QVO,5<_O&7^QUO,5<_O&7cQVO1G1wO!(UQVO1G1wOOQR1G1|1G1|O&<]QUO1G2OOOQR1G2S1G2SO&<bQUO1G2TOCvQUO1G2eO&=kQVO1G2TO&=rQUO1G2TOOQR1G2V1G2VOOQR1G2]1G2]O$#[QUO1G2_OOQQ'#Cu'#CuO&=wQUO'#GZO&>lQUO'#GZO&>qQUO'#KTO$#[QUO'#G^OOQQ'#KU'#KUO&?PQUO1G2_O&?UQVO1G1pOCvQUO'#FaOOQR'#Ip'#IpO&?UQVO1G1pO&ATQUO'#F}OOQR'#Ir'#IrO&AYQVO1G2fO&FVQUO'#GbOOQR1G2j1G2jOOQR,5<T,5<TO&F[QVO,5<TOOQR1G2k1G2kO&FcQUO1G2nOOQR1G2q1G2qOOQQ'#J}'#J}O&GlQUO'#J|O&GwQUO,5;rO&HPQUO'#FXO&HdQUO'#FXO&HwQUO'#F^O&H|QUO1G2qO&IXQUO'#JaOFrQUO'#KVO#9WQUO'#KXOOQR'#Gw'#GwOOQR'#Gx'#GxO&IcQUO'#F_O&IhQUO'#FcO&HwQUO'#FUOOQR1G1[1G1[O&JeQUO1G2sO&KkQUO1G1kO&KvQUO'#JcOOQQ,59v,59vO&LRQUO'#JcO&LZQUO'#DaO&LeQUO'#JvO&M^QUO'#DaOFrQUO'#KVOOQQ'#Gz'#GzOOQQ'#G|'#G|OOQQ'#G}'#G}OOQQ'#Je'#JeOOQQ'#IZ'#IZO&MhQUO,59yOOQQ,59y,59yO&NeQUO'#DaO&NrQUO'#HOOOQQ1G/[1G/[O$4zQUO1G/[O$5PQUO1G/[O&NwQUO1G/[OOQQ1G3V1G3VO$4zQUO1G3VO$5PQUO1G3VO'$YQUO1G3VO''kQUO'#HVO''vQUO'#K[O'(OQUO,5=pO'(TQUO'#KZOOQQ1G3W1G3WO'+qQUO1G3WO'+xQUO1G3WOOQQ1G3^1G3^O$4zQUO1G3^O$5PQUO1G3^O',PQUO1G3^O'/bQUO1G3`O'0hQUO,5@zO!,|QUO1G3qOM{QVO'#HsOOQQ1G3w1G3wO'0mQUO1G3wO'0tQVO1G3zPOOO1G.h1G.hP!6g{&jO1G.hP'2hQUO'#KfP'2s{&jO1G.hP'2x{,UO1G.hPO{O-E<y-E<yPOOO,5AO,5AOP'3Q{&jO,5AOPOOO1G4[1G4[OM{QVO7+$[O'3VQUO'#CyOOQQ,59^,59^O'3bQbO,59cOOQQ,59],59]OOQQ7+)R7+)RO!AnQVO'#IzO'3mQUO,5?qOOQQ1G.n1G.nOOQQ1G0r1G0rO'3uQUO1G0rO'3zQUO7+(fOOQQ7+)c7+)cO'6]QUO7+)cO'6dQUO7+)cO'0tQVO7+)fO! iQUO7+(fO'6kQVO'#IlO'7OQUO,5@gO'7WQUO,5;nOOQQ'#Co'#CoOOQQ,5;o,5;oOM{QVO'#FSOOQQ-E<i-E<iO!AnQVO,5;mOOQQ1G1W1G1WOOQQ,5>w,5>wOOQQ-E<Z-E<ZOOQR'#Dk'#DkOOQR'#Dm'#DmOOQR'#Dp'#DpO'8aQ!eO'#JhO'8hQ7_O'#JhO'8oQ!eO'#JhOOQR'#Jh'#JhOOQR'#I^'#I^O'8vQ!eO,5:POOQQ,5:P,5:PO'8}QbO,5>yOOQQ-E<]-E<]O'9]QbO1G5mOOQQ7+%S7+%SOOQR7+'V7+'VOOQR7+'R7+'RO&KkQUO7+'VO'9hQUO7+%{O##qQUO7+%{OOQQ-E<`-E<`O':YQUO7+%|O';kQUO,5:{O!1sQUO,5:{OOQQ-E<a-E<aO'<kQVO,5:wO'<rQUO,5:yOOQQ7+&X7+&XO'<yQUO7+&XO'>PQVO7+&XO'>xQUO,5:tO'@aQUO'#EbO'ASQUO,5:tO#CyQVO'#EdO'AZQUO'#EeO'BsQUO'#EfO'CZQUO,5:tOM{QVO,5;dO'CeQUO'#EzOOQQ,5;e,5;eO'CvQUO'#IhO'DQQUO,5@aOOQQ1G0_1G0_O'DYQUO1G/TO'ESQUO1G/TO'EnQUO7+)[OOQQ7+)_7+)_OOQQ,5=w,5=wO#/rQVO'#IxO'GaQUO,5?xOOQQ1G/R1G/RO'GlQUO,5?eOOQQ-E<w-E<wOOQQ,5?R,5?ROOQQ-E<e-E<eO'HuQUO7+)iO'HzQUO,5=[O#9OQUO'#IuO'IYQUO,5@rOOQR1G2w1G2wOOQR1G2x1G2xO'IeQUO'#J{O?pQVO'#HwO'JqQUO1G1hOOQQ1G1h1G1hO'KzQUO,5?YOOQQ,5?Y,5?YOOQQ-E<l-E<lOOQR7++w7++wO#9WQUO7++wOOQR7++y7++yO'L`QUO7++zOOQR7++z7++zOOQQ-E<c-E<cO'NTQUO1G0hOOQQ-E<d-E<dOOQQ1G0i1G0iO'N[QUO1G0iO( OQUO1G0jO(!UQVO1G0jOOQQ1G0j1G0jO(!`QVO1G0jOOQQ1G0k1G0kOOQQ7+$x7+$xOOQQ7+%r7+%rOOQQ7+&g7+&gO(!gQUO7+'POOQR7+(X7+(XOOQR1G1y1G1yOCvQUO,5;{O(!}QUO,5<`O(#UQUO1G1yO($_QUO1G1yO!(UQVO7+'cO($dQVO7+'cOM{QVO'#F{O()^QUO7+'jO()cQVO7+'oO()jQUO7+(PO()tQUO7+'oO(*zQVO7+'oO(+RQUO7+'yO(+WQUO,5<uO&=wQUO,5<uO(+xQUO,5<uO&=wQUO,5<uOOQQ,5<v,5<vO(,ZQVO,5<wO$#[QUO'#IqO(,eQUO,5@oO(,mQUO,5<xOOQR7+'y7+'yO(,xQVO7+'[O()mQUO'#KPOOQR-E<n-E<nO#LuQVO,5<iOOQR-E<p-E<pO!,mQUO,5<|OOQR1G1o1G1oO(.wQUO7+(YO(.|QVO7+(YO$)}QUO'#ImO(/UQUO,5@hOOQQ1G1^1G1^O(/aQUO,5;sO!1sQUO,5;vO(/zQUO,5;wO(0YQUO,5;sO(2]QUO,5;xOOQR7+(]7+(]O#IWQUO,5;yO(2eQUO'#JbO(2oQUO'#JbOOQR,5;},5;}O(2|QUO,5;}O!1_QUO,5;}O!0SQUO,5;}O!0hQUO,5;}OOQQ7+(_7+(_O(3RQUO'#IYO(3^QUO,5?}O(3^QUO,5?}O(3fQUO,5?}O(3qQUO,59{O4XQUO,59{OOQQ,5=g,5=gO(3{QUO'#ESO(4|QUO'#ESO(5dQUO,59{O(5nQUO'#E}O(5nQUO'#FOOOQQ'#Jt'#JtO(6YQUO'#JtOM{QVO'#FPOOQQ,59{,59{O(6wQUO,59{O!AnQVO,59{O(6|QUO,5@qOOQQ-E<X-E<XOOQQ1G/e1G/eOOQQ,5=j,5=jOOQQ7+$v7+$vO$4zQUO7+$vO$5PQUO7+$vOOQQ7+(q7+(qO$4zQUO7+(qO$5PQUO7+(qOM{QVO,5=qO(7TQUO'#IwO(7`QUO,5@vOOQQ1G3[1G3[O(7hQUO,5@uOOQQ,5@u,5@uOOQQ7+(r7+(rO(:|QUO7+(rOOQQ7+(x7+(xO$4zQUO7+(xO$5PQUO7+(xOOQQ7+(z7+(zO(?lQVO1G6fO(AnQUO7+)]O(AsQUO,5>_O(ByQUO7+)fPOOO7+$S7+$SP(DlQUO'#KgP(DtQUO,5AQP(Dy{&jO7+$SPOOO1G6j1G6jO(EOQUO<<GvOOQQ1G.x1G.xO(FqQUO,5?fOOQQ,5?f,5?fOOQQ-E<x-E<xOOQQ7+&^7+&^OOQQ<<L}<<L}O(GzQUO<<L}O(I}QUO<<MQO(KpQUO<<LQO(LRQUO,5?WOOQQ,5?W,5?WOOQQ-E<j-E<jOOQQ1G1Y1G1YO'7ZQUO,5;nO(M[QUO1G1XOOQQ1G1X1G1XOOQR,5@S,5@SO(NeQ!eO,5@SO(NlQ7_O,5@SO(NsQ!eO,5@SOOQR-E<[-E<[OOQQ1G/k1G/kO(NzQ!eO'#DzOOQQ1G4e1G4eOOQR<<Jq<<JqO) RQUO<<IgOOQQ'#Ec'#EcO)!}QUO1G0gO)#XQUO1G0gO)#lQUO1G0cOOQQ1G0c1G0cO)$rQUO'#JwO)$zQUO1G0eOOQQ<<Is<<IsO)%bQUO1G0`O)%iQUO'#EfO)%yQUO1G0`O)&QQUO'#IXOOQQ,5;g,5;gOM{QVO1G1OO)'bQUO1G1OOOQQ,5;f,5;fOOQQ,5?S,5?SOOQQ-E<f-E<fO)(qQUO7+$oO))]QUO'#K_O)*iQUO'#K^OOQQ,5?d,5?dOOQQ-E<v-E<vOOQQ<<MT<<MTOOQQ1G2v1G2vOOQQ,5?a,5?aOOQQ-E<s-E<sO'6kQVO,5<[OOQR<= c<= cOOQR<= f<= fOOQQ7+&T7+&TOOQQ7+&U7+&UO)*wQUO7+&UO)+}QVO7+&UOOQR<<Jk<<JkO!AnQVO1G1zO),UQUO1G1zOOQR7+'e7+'eOOQR<<J}<<J}O!(UQVO<<J}OOQR<<KU<<KUO),aQUO<<KZO)-gQVO<<KZO!AnQVO<<KkO)-nQUO<<KZO!(UQVO<<KZO).wQUO<<KZOOQR<<Ke<<KeO).|QUO1G2aO(+WQUO1G2aO&=wQUO1G2aO)/_QUO1G2cO)0eQVO1G2cOOQQ1G2c1G2cO)0oQVO1G2cO)0vQUO,5?]OOQQ-E<o-E<oOOQQ1G2d1G2dOOQR1G2h1G2hOOQR<<Kt<<KtO)1UQVO<<KtO)1aQUO<<KtOOQQ,5?X,5?XOOQQ-E<k-E<kO!1sQUO1G1bOOQQ1G1b1G1bOOQQ1G1c1G1cO)1fQUO'#FXOOQQ1G1d1G1dOOQR1G1i1G1iO)1zQUO1G1iO)2RQUO1G1iO)2YQUO1G1iO)2aQUO,5>tO&LRQUO,5>tOOQQ-E<W-E<WO)2lQUO1G5iO)2lQUO1G5iO)2tQUO1G/gOOQQ1G/g1G/gO)3OQUO1G/gO!AnQVO1G/gO)3TQUO1G/gO)3_QUO,5:nO(3{QUO,5:nO)3uQUO,5:nO(3{QUO,5:nO)5RQUO,5:rO)5oQVO,5;hO(5nQUO'#IjO)5yQUO1G/gO)6[QVO1G/gOOQQ1G3P1G3PO)6cQUO,5;iO)6nQUO,5;jO)7YQUO,5;kO)8`QUO1G/gOOQQ1G3R1G3ROOQQ<<Hb<<HbO$4zQUO<<HbOOQQ<<L]<<L]O$4zQUO<<L]O)9fQUO1G3]OOQQ,5?c,5?cOOQQ-E<u-E<uOOQQ<<L^<<L^OOQQ<<Ld<<LdO$4zQUO<<LdOOQQ<<Lw<<LwO):oQUO1G3yP)<rQUO'#I|P)<zQUO,5ARPO{O1G6l1G6lPOOO<<Gn<<GnOOQQANBiANBiOOQR1G5n1G5nO)=SQ!eO,5:fOOQQ,5:f,5:fO)=xQUO7+&ROOQQ7+%}7+%}O!+aQUO'#IdO)>oQUO,5@cOOQQ7+&P7+&PO)>wQUO7+&jOOQQ,5=x,5=xO)@WQUO1G1vOOQQ<<Ip<<IpO)AdQUO7+'fOOQRAN@iAN@iO)BpQVOAN@uO)BwQUOAN@uO!(UQVOAN@uO)DQQUOAN@uO)DVQUOANAVO)E]QUOANAVOOQRAN@uAN@uO)EbQUO7+'{O(+WQUO7+'{OOQQ7+'}7+'}O)EsQUO7+'}O)FyQVO7+'}O)GQQUOANA`OOQQ7+&|7+&|O)GVQUO,5;sOOQR7+'T7+'TOOQQ1G4`1G4`O)GeQUO1G4`O)GpQUO7++TO)GxQUO7+%ROOQQ7+%R7+%RO)HZQUO7+%RO)6[QVO7+%ROOQQ7+(k7+(kO)H`QUO7+%RO)IfQUO7+%RO!AnQVO7+%RO)IpQUO1G0YO)3_QUO1G0YO(3{QUO1G0YOOQQ'#Ii'#IiO)J[QUO1G0^O)JxQUO1G1SO)LOQVO1G1SOOQQ1G1S1G1SO)LYQVO1G1SO)LaQUO,5?UOOQQ-E<h-E<hOOQQ1G1T1G1TOOQQAN=|AN=|OOQQANAwANAwOOQQANBOANBOOOQQ7+)e7+)ePOQQ,5?h,5?hPOQQ-E<z-E<zOOQQ1G0Q1G0QOOQQ,5?O,5?OOOQQ-E<b-E<bO)LxQUOG26aO!(UQVOG26aO)NRQUOG26aOOQRG26aG26aO!(UQVOG26qO)NWQUO<<KgOOQQ<<Ki<<KiOOQRG26zG26zOOQQ7+)z7+)zOOQQ<<Hm<<HmO)NiQUO<<HmO!AnQVO<<HmO)NnQUO<<HmO* tQUO<<HmO)6[QVO<<HmOOQQ<<LV<<LVO*!VQUO7+%tO)3_QUO7+%tOOQQ-E<g-E<gOOQQ7+&n7+&nO*!qQUO7+&nO*#wQVO7+&nO!(UQVOLD+{OOQRLD+{LD+{OOQRLD,]LD,]OOQQAN>XAN>XO*$OQUOAN>XO*%UQUOAN>XO!AnQVOAN>XO*%ZQUO<<I`OOQQ<<JY<<JYOOQR!$( g!$( gOOQQG23sG23sO*%uQUOG23sO*&{QUOG23sOOQQLD)_LD)_O*'QQUO'#CgO'nQUO'#CgO**}QUO'#CyO*-_QUO'#CyO*.WQUO'#CyO*.hQUO'#CyO*0oQUO'#CyO*0|QUO'#CyO*2oQUO'#CyO*4fQUO'#CyO*4qQbO,59cO*4|QbO,59cO*5XQbO,59cO*5dQUO'#CgO*7hQUO'#CgO*7rQUO'#CgO*:TQUO'#CgO*<zQUO'#CgO*=[QUO'#CgO*>XQUO'#CgO*A_QUO'#CgO*AlQUO'#CgO*AvQbO'#CwO*BXQbO'#CwO*BjQbO'#CwO*B{QUO,5:uO*CcQUO,5:uO*CcQUO,5:uO*C|QbO'#CwO*DXQbO'#CwO*DdQbO'#CwO*DoQbO'#CwO*CcQUO'#EZO*DzQUO'#EZOCvQUO'#EiO*FRQUO'#EiO#3oQUO'#JzO*FsQbO'#CwO*GOQbO'#CwO*GZQUO'#CvO*G`QUO'#CvO*HYQUO'#EbO*IeQUO'#EfO*JqQUO'#CoO*KPQbO,59cO*K[QbO,59cO*KgQbO,59cO*KrQbO,59cO*K}QbO,59cO*LYQbO,59cO*LeQbO,59cO*B{QUO1G0aO*LpQUO1G0aO*CcQUO1G0aO*DzQUO1G0aO*MWQUO,5:|O*NQQUO,5:|O*NwQUO,5;QO+#OQUO'#JaO+#`QUO'#CyO+#nQbO,59cO*B{QUO7+%{O*LpQUO7+%{O+#yQUO,5:{O+$ZQUO'#EbO+$kQUO1G0hO+%|QUO1G0gO+&WQUO1G0gO+&|QUO'#EfO+'mQUO7+&RO+'tQUO'#EZO+'yQUO'#CwO+(OQUO'#EjO+(TQUO'#EjO+(YQUO'#CvO+(_QUO'#CvO+(dQUO'#CwO+(iQUO'#CwO+(nQUO'#CvO+(yQUO'#CvO+)UQUO'#CvO*LpQUO,5:uO*DzQUO,5:uO*DzQUO,5:uO+)aQUO'#JaO+)}QUO'#JaO+*XQUO'#JaO+*lQbO'#CwO+*wQUO'#CrO!+aQUO'#EaO!1sQUO,5:{O+*|QUO'#EZ",stateData:"++r~O'tOSSOSTOSRPQVPQ&oPQ&qPQ&rPQ&sPQ&tPQ&uPQ&vPQ&wPQ~O)[OS~OPsO]dOa!ZOdjOlTOr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!S}O!ZiO!]!UO!^!TO!l!YO!ouO!p!^O!q!_O!r!_O!s!_O!u!`O!x!aO#S!qO#f#OO#g#PO#j!bO#y!tO#|!{O#}!zO$S!cO$Y!vO$_!nO$`!oO$f!dO$k!eO$m!fO$n!gO$r!hO$t!iO$v!jO$x!kO$z!lO$|!mO%T!pO%Y!rO%]!sO%b!uO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'xRO(YYO(]aO(_fO(`eO(aoO(bXO)T!VO)U!WO~OR#VOV#QO&o#RO&q#SO&r#TO&s#TO&t#UO&u#UO&v#SO&w#SO~OX#XO'v#XO'w#ZO~O]ZX]iXdiXlgXpZXpiXriXsiXtiXuiXviXwiX{iX!QZX!SiX!ZZX!ZiX!]ZX!^ZX!`ZX!bZX!cZX!eZX!fZX!gZX!iZX!jZX!kZX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX'{ZX'|$bX'}ZX(OZX(WZX(]ZX(]iX(^ZX(_ZX(_iX(`ZX(`iX(aZX(mZX~O(aiX!YZX~P'nO]#pO!Q#^O!Z#aO!]#nO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O'}#`O(O#`O(W#oO(]#bO(^#cO(_#cO(`#dO(a#_O~Od#tO#a#uO&f#vO&i#wO(P#qO~Ol#xO~O!S#yO](TXd(TXr(TXs(TXt(TXu(TXv(TXw(TX{(TX!Z(TX!p(TX!q(TX!r(TX!s(TX!u(TX!x(TX#j(TX'x(TX(](TX(_(TX(`(TX(a(TX~Ol#xO~P-UOl#xO!k#{O(m#{O~OX#|O(c#|O~O!W#}O(W(ZP(e(ZP~Oa!QOl$ROr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!p!_O!q!_O!r!_O!s!_O!u!`O#|!{O#}!zO$Y$YO%j!xO%u!yO%w!OO%}!|O&O!QO'x$QO(YYO~O]'hXa'SXd'hXl'SXl'hXr'SXr'hXs'SXs'hXt'SXt'hXu'SXu'hXv'SXv'hXw'SXw'hXy'SX{'SX!Z'hX!o'hX!p'SX!p'hX!q'SX!q'hX!r'SX!r'hX!s'SX!s'hX!u'SX!u'hX!x'hX#j'hX#|'SX#}'SX%b'hX%j'SX%u'SX%w'SX%}'SX&O'SX'x'SX'x'hX(]'hX(_'hX(`'hX~Oa!QOl$ROr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!p!_O!q!_O!r!_O!s!_O!u!`O#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO'x$QO~Or![Os![Ot![Ou![Ov![Ow![O{!]O!p!_O!q!_O!r!_O!s!_O!u!`O](fXd(fXl(fX!Z(fX!x(fX#j(fX'x(fX(](fX(_(fX(`(fX~O(a$^O~P5rOPsO]dOdjOr![Os![Ot![Ou![Ov![Ow![O!ZiO!]!UO!^!TO!l!YO!x!aO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO(]aO(_fO(`eO(bXO)T!VO)U!WO~Oa$jOl$aO!y$kO'x$_O~P7aO(]$mO~O]$pO!Z$oO~Oa!ZOl8XOy!wO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO'x8OO~P7aOPsO]dOdjO!ZiO!]!UO!^!TO!l!YO!x!aO#f#OO#g#PO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO(]aO(_fO(`eO(bXO)T!VO)U!WO~Oa$jOl$aO#j$lO'x$_O~P:uO]${OdjOl$yO!Z$}O!x!aO#j$lO'x$_O(]$zO(_fO(`fO~Op%QO]'zX](jX!Q'zX!Z'zX!Z(jX!]'zX!^'zX!`'zX!b'zX!c'zX!e'zX!f'zX!g'zX!i'zX!j'zX'{'zX'}'zX(O'zX(W'zX(]'zX(^'zX(_'zX(`'zX(a'zX|'zX|(jX!Y'zX~O!k#{O(m#{O~P=bO!k'zX(m'zX~P=bOPsO]%VOa$jOl$aO!Z%YO![%]O!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%XO(bXO(m%ZO)T!VO)U!WO~O!S}O'|%^O(m%aO](jX!Z(jX~O]'zX!Q'zX!Z'zX!]'zX!^'zX!`'zX!b'zX!c'zX!e'zX!f'zX!g'zX!i'zX!j'zX'{'zX'}'zX(O'zX(W'zX(]'zX(^'zX(_'zX(`'zX(a'zX!k'zX(m'zX|'zX!Y'zX~O](jX!Z(jX|(jX~PAuO]${OdjOl8_O!Z$}O!x!aO#j$lO'x8PO(]8cO(_8eO(`8eO~O'|%eO~OP%fO'uQO!['zX'|'zXQ'zX!h'zX~PAuO]${OdjOr![Os![Ot![Ou![Ov![Ow![O!Z$}O!p!_O!q!_O!r!_O!s!_O!u!`O!x!aO#j!bO%b!uO(]$zO(_fO(`fO~Ol%hO!o%mO'x$_O~PETO]${OdjOl%hO!Z$}O!x!aO#j!bO'x$_O(]$zO(_fO(`fO~O!S}O(a%qO(m%rO~O!Y%uO~P!QOa%wO%w!OO]%vXd%vXl%vXr%vXs%vXt%vXu%vXv%vXw%vX{%vX!Z%vX!p%vX!q%vX!r%vX!s%vX!u%vX!x%vX#j%vX'x%vX(]%vX(_%vX(`%vX(a%vX|%vX!Q%vX!S%vX!]%vX!^%vX!`%vX!b%vX!c%vX!e%vX!f%vX!g%vX!i%vX!j%vX'{%vX'}%vX(O%vX(W%vX(^%vX!k%vX(m%vXQ%vX!h%vX![%vX'|%vX!Y%vX}%vX#Q%vX#S%vX~Op%QOl(TX|(TXQ(TX!Q(TX!h(TX(W(TX(m(TX~P-UO!k#{O(m#{O]'zX!Q'zX!Z'zX!]'zX!^'zX!`'zX!b'zX!c'zX!e'zX!f'zX!g'zX!i'zX!j'zX'{'zX'}'zX(O'zX(W'zX(]'zX(^'zX(_'zX(`'zX(a'zX|'zX!['zX'|'zX!Y'zXQ'zX!h'zX~OPsO]%VOa$jOl$aO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%WO(bXO)T!VO)U!WO~O]&QO!Z&PO(]%|O(_&RO(`&RO~O!S}O~P! iO](TXd(TXl(TXr(TXs(TXt(TXu(TXv(TXw(TX{(TX!Z(TX!p(TX!q(TX!r(TX!s(TX!u(TX!x(TX#j(TX'x(TX(](TX(_(TX(`(TX(a(TX|(TXQ(TX!Q(TX!h(TX(W(TX(m(TX~O]#pO~P!!RO]&VO~O'uQO](gXa(gXd(gXl(gXr(gXs(gXt(gXu(gXv(gXw(gXy(gX{(gX!Z(gX!o(gX!p(gX!q(gX!r(gX!s(gX!u(gX!x(gX#j(gX#|(gX#}(gX%b(gX%j(gX%u(gX%w(gX%}(gX&O(gX'x(gX(](gX(_(gX(`(gX~O]&XO~O]#pO~O]&^O!Z&_O!]&[O!k&[O#b&[O#c&[O#d&[O#e&[O#f&`O#g&`O(O&]O(m&[O~P4XOl8`O%Y&dO'x8QO~O]&eOw&gO~O]&eO~OPsO]%VOa$jOl$aO!S}O!Z%YO!]!UO!^!TO!l!YO#S!qO#f#OO#g#PO#j$lO$_!nO$`!oO$f!dO$k!eO$m!fO$n!gO$r!hO$t!iO$v!jO$x!kO$z!lO%T!pO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x7qO(]%WO(`%WO(aoO(bXO)T!VO)U!WO~O]&kO~O!S#yO(a&mO~PM{O(a&oO~O(a&pO~O'x&qO~Oa!QOl$ROr![Os![Ot![Ou![Ov![Ow![Oy!wO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO'x$QO~O'|&vO~O!S}O~O(a&yO~PM{O!S&{O'x&zO~O]'OO~O]${Oa!QOdjOr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!Z$}O!p!_O!q!_O!r!_O!s!_O!u!`O!x!aO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO(]$zO(_fO(`fO~Ol8bOp'RO#j$lO'x8RO~P!-WO]'UOd%aXl%aX!Z%aX!x%aX#j%aX'x%aX(]%aX(_%aX(`%aX~Ol$RO{!]O}'_O!S'ZO'x$QO'|'YO~Ol$RO{!]O}'dO!S'ZO'x$QO'|'YO~Ol$ROy'iO!S'fO#}'iO'x$QO~Ol$RO{!]O}'mO!S'ZO'x$QO'|'YO~Oa!QOl$ROy!wO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO'x$QO~O]'pO~OPsOa$jOl$aO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%WO(bXO)T!VO)U!WO~O]'rO(W'tO~P!2mO]#pO~P!1sOPsO]%VOa$jOl$aO!Z'xO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%WO(bXO)T!VO)U!WO~OY'yO'uQO'x&zO~O&p'|O~OS(QOT'}O)X(PO~O]#pO't(TO~Q&xXX#XO'v#XO'w(VO~Od(`Ol([O'x(ZO~O!Q&]a!^&]a!`&]a!b&]a!c&]a!e&]a!f&]a!g&]a!i&]a!j&]a'{&]a(W&]a(]&]a(^&]a(_&]a(`&]a(a&]a!k&]a(m&]a|&]a![&]a'|&]a!Y&]aQ&]a!h&]a~OPsOa$jOl$aO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(bXO)T!VO)U!WO]&]a!Z&]a!]&]a'}&]a(O&]a~P!7dO!S#yO|'yP~PM{O]nX]#_XdnXlmXpnXp#_XrnXsnXtnXunXvnXwnX{nX!Q#_X!SnX!ZnX!Z#_X!]#_X!^#_X!`#_X!b#_X!c#_X!e#_X!f#_X!g#_X!i#_X!j#_X!kmX!pnX!qnX!rnX!snX!unX!xnX#jnX'xnX'{#_X'}#_X(O#_X(W#_X(]nX(]#_X(^#_X(_nX(_#_X(`nX(`#_X(mmX|nX|#_X~O(anX(a#_X!Y#_X~P!:zO](qO!Z(rO!](oO!k(oO#b(oO#c(oO#d(oO#e(oO#f(sO#g(sO(O(pO(m(oO~P4XOPsO]%VOa$jOl$aO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%WO(bXO)T!VO)U!WO~O!Z(xO~P!?aOd({O#a(|O(P#qO~O!S#yO!Z)OO'})PO!Y(oP~P!?aO!S#yO~PM{O(d)WO~Ol)XO]!VX!Q!VX(W!VX(e!VX~O])ZO!Q)[O(W(ZX(e(ZX~O(W)`O(e)_O~O]iXdiXlgXpiXriXsiXtiXuiXviXwiX{iX!ZiX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX(]iX(_iX(`iX!SiX!QiX(WiX(miX|iX~O(aiX}iX'|iX!]iX!^iX!`iX!biX!ciX!eiX!fiX!giX!iiX!jiX'{iX'}iX(OiX(^iX!kiX![iXQiX!hiX!YiX#QiX#SiX~P!BsO(P)aO~Ol)bO~O](TXd(TXr(TXs(TXt(TXu(TXv(TXw(TX{(TX!Z(TX!p(TX!q(TX!r(TX!s(TX!u(TX!x(TX#j(TX'x(TX(](TX(_(TX(`(TX(a(TX!Q(TX!S(TX!](TX!^(TX!`(TX!b(TX!c(TX!e(TX!f(TX!g(TX!i(TX!j(TX'{(TX'}(TX(O(TX(W(TX(^(TX!k(TX(m(TX|(TX![(TX'|(TXQ(TX!h(TX!Y(TX}(TX#Q(TX#S(TX~Ol)bO~P!FgO(a)cO~P5rOp%QOl(TX~P!FgOr![Os![Ot![Ou![Ov![Ow![O{!]O!p!_O!q!_O!r!_O!s!_O!u!`O](fad(fal(fa!Z(fa!x(fa#j(fa'x(fa(](fa(_(fa(`(fa|(fa!Q(fa(W(fa(m(faQ(fa!h(fa!S(fa'|(fa(a(fa~O]ZXlgXpZXpiX!QZX!SiX!ZZX!]ZX!^ZX!`ZX!bZX!cZX!eZX!fZX!gZX!iZX!jZX!kZX'{ZX'}ZX(OZX(WZX(]ZX(^ZX(_ZX(`ZX(aZX(mZX|ZX~O![ZX'|ZX!YZXQZX!hZX~P!LbO]#pO!Z#aO!]#nO'}#`O(O#`O~O!Q&Sa!^&Sa!`&Sa!b&Sa!c&Sa!e&Sa!f&Sa!g&Sa!i&Sa!j&Sa!k&Sa'{&Sa(W&Sa(]&Sa(^&Sa(_&Sa(`&Sa(a&Sa(m&Sa|&Sa![&Sa'|&Sa!Y&SaQ&Sa!h&Sa~P!NrOd#tO#a)hO&f#vO&i#wO(P7sO~Ol)iO~Ol)iO!S#yO~Ol)iO!k#{O(m#{O~Or![Os![Ot![Ou![Ov![Ow![O~P<pOr![Os![Ot![Ou![Ov![Ow![O!y$kO~P<pO]$pO!Z$oO|!}a!Q!}a!S!}a(a!}a(m!}a'|!}aQ!}a!h!}a~Op%QO!S#yO~O]&^O!Z&_O!]&[O!k&[O#b&[O#c&[O#d&[O#e&[O#f&`O#g&`O(O&]O(m&[O~Or![Os![Ot![Ou![Ov![Ow![O})rO!u!`O#Q)tO#S)uO(O)qO~O]#Oa!S#Oa!Z#Oa'|#Oa(m#Oa|#Oa!Q#Oa(a#OaQ#Oa!h#Oa~P#&dOPsO]%VOa$jOl$aOr![Os![Ot![Ou![Ov![Ow![O!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(`%WO(bXO)T!VO)U!WO~O![)xO(])yO~P#'{O(W)|O(YYO|(iP~P4XO|*OO!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!S#yO](TXr(TXs(TXt(TXu(TXv(TXw(TX|(TX!Z(TX(](TX(_(TX(`(TX~Ol8oO~P#+jO]$pO|*QO!Z$oO~O|*OO~Or![Os![Ot![Ou![Ov![Ow![O|qXQqX!QqX!hqX(WqX(aqX~P! iO|*TO~O]$pO!Z$oO|#]a!Q#]a!S#]a(a#]a(m#]a'|#]aQ#]a!h#]a~Od#tO#a)hO(P7sO~Op%QO](jX!Z(jX!Q(jX!S(jX(a(jX(m(jX|(jX'|(jXQ(jX!h(jX~Op%QO~OPsO]%VOa!ZOl8YOr![Os![Ot![Ou![Ov![Ow![Oy!wO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x8SO(]%WO(`%WO(bXO)T!VO)U!WO~OQ(QP!h(QP~P#/rO!Q*ZO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO![)VX~P!NrOp%QO!Q*]O!k#{O(m#{O]'zX!Z'zX!['zX![(nX!]'zX!^'zX!`'zX!b'zX!c'zX!e'zX!f'zX!g'zX!i'zX!j'zX'{'zX'}'zX(O'zX(W'zX(]'zX(^'zX(_'zX(`'zX~O!Q'zX~P#3oOp%QO!['zX'|'zXQ'zX!h'zX~PAuO![*_O~OPsO]%VOa!ZOl8XOr![Os![Ot![Ou![Ov![Ow![Oy!wO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x8OO(]%WO(`%WO(bXO)T!VO)U!WO~O!Q*aO![*`O~PM{O!Q*aO![*`O~Ol9lO'x8nO~O!S}O(m%aO~O#g*gO$`*fO~O]*hO!Q*lO!S*iO!Z$oO(m*jO(a(sX~O!Q*lO(a(sX~O(a*oO~OP%fO'uQO]%^a!Q%^a!Z%^a!]%^a!^%^a!`%^a!b%^a!c%^a!e%^a!f%^a!g%^a!i%^a!j%^a'{%^a'}%^a(O%^a(W%^a(]%^a(^%^a(_%^a(`%^a(a%^a!k%^a(m%^a|%^a![%^a'|%^a!Y%^aQ%^a!h%^a~Od#tO#a#uO(P7sO~Ol7{O~O!S}O(a*vO(m*wO~OPsO]%VOa$jOl$aO!Z%YO!]!UO!^!TO!l!YO#f#OO#g*yO#j$lO$`*fO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%WO(bXO)T!VO)U!WO~O!Y*zO~P!QO]#pO!Z#aO'}#`O(O#`O!Q&Ya!]&Ya!^&Ya!`&Ya!b&Ya!c&Ya!e&Ya!f&Ya!g&Ya!i&Ya!j&Ya'{&Ya(W&Ya(]&Ya(^&Ya(_&Ya(`&Ya(a&Ya!k&Ya(m&Ya|&Ya![&Ya'|&Ya!Y&YaQ&Ya!h&Ya~Op%QO~PK{O]#pO!Z#aO!]#nO'}#`O(O#`O~P!7dOr![Os![Ot![Ou![Ov![Ow![O|#UX!S#UX(a#UX(m#UXQ#UX!Q#UX!h#UX(W#UX~P! iOr![Os![Ot![Ou![Ov![Ow![O#Q)tO#S)uO(O9nO~O]#VX!S#VX!Z#VX|#VX(a#VX(m#VX!Q#VXQ#VX!h#VX(W#VX~P#B`O]$pO!Z+SO~O![+VO(]+WO~P#'{O]&QO!Z&PO(W)|O(YYO(]%|O(_&RO(`&RO|(iP~P4XO|#YX!S#YX(a#YX(m#YXQ#YX!Q#YX!h#YX(W#YX~P! iO!S}O](lX!Z(lX~O!S&{O$Y!vO(YYO~P4XO|(fX!Q(fX(W(fX(m(fXQ(fX!h(fX!S(fX'|(fX(a(fX~P5rO]#ia!Q#ia!]#ia!^#ia!`#ia!b#ia!c#ia!e#ia!f#ia!g#ia!i#ia!j#ia'{#ia'}#ia(O#ia(W#ia(^#ia(_#ia(`#ia(a#ia!k#ia(m#ia|#ia![#ia!S#ia'|#ia!Y#iaQ#ia!h#ia~O(]+`O!Z#ia~P#FhO|+`O~O![+`O~O!Z+aO(]#ia~P#FhOp%QO(m+cO~O(a+dO~Ol8`O'x8QO~OPsO]%VOa!ZOl8ZOr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!Z%YO!]!UO!^!TO!l!YO!p!_O!q!_O!r!_O!s!_O!u!`O#f#OO#g#PO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO(YYO(]%WO(`%WO(aoO(bXO)T!VO)U!WO~O'x8UO~P#IjO$n+oO~OPsO]%VOa!ZOl8ZOr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!Z%YO!]!UO!^!TO!l!YO!p!_O!q!_O!r!_O!s!_O!u!`O#f#OO#g#PO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x8OO(YYO(]%WO(`%WO(a+sO(bXO)T!VO)U!WO~O!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a+uO~P!NrO(a+uO~O(a+vO~O]+|O!x!aO'x+xO(]+yO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O'|,PO(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!S}O$f!dO$k!eO$m!fO$n!gO$r,TO$t!iO$v!jO$x!kO$z!lO$|!mO'x7rOd$^a!o$^a!x$^a#S$^a#y$^a$S$^a$Y$^a$_$^a$`$^a%T$^a%Y$^a%]$^a%b$^a'q$^a(_$^a!Y$^a$i$^a~P#IjO%V,WO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a,XO~P!NrO!Y,YO~P!QO!S&{O~O](TXd(TXr(TXs(TXt(TXu(TXv(TXw(TX{(TX!Z(TX!p(TX!q(TX!r(TX!s(TX!u(TX!x(TX#j(TX'x(TX(](TX(_(TX(`(TX~Ol8rO~P$(WO]$pO!Z$oO(a,^O~Oa!QOl$ROr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!p!_O!q!_O!r!_O!s!_O!u!`O#y,dO#|,bO#},cO%j!xO%u!yO%w!OO%}!|O&O!QO'x$QO(YYO~OQ(pP!h(pP~P$)}Ol8hO!o,gO#j!bO#y,mO$S,kO$W,lO$Y!vO%b!uO'x8WO(YYO~P!-WO](UXd(UXr(UXs(UXt(UXu(UXv(UXw(UX{(UX}(UX!S(UX!Z(UX!p(UX!q(UX!r(UX!s(UX!u(UX!x(UX#j(UX'x(UX'|(UX(](UX(_(UX(`(UX(a(UX|(UX!Q(UX(W(UX!](UX!^(UX!`(UX!b(UX!c(UX!e(UX!f(UX!g(UX!i(UX!j(UX'{(UX'}(UX(O(UX(^(UX!k(UX(m(UXQ(UX!h(UX![(UX!Y(UX#Q(UX#S(UX~Ol)bO~P$,lOp%QOl(UX~P$,lOl$RO!P,sO'x$QO~Ol8iO!P-QO!Y-OO!o-PO#j!bO#y,mO$S!cO$W,lO$|!mO%]!sO%b!uO'x8VO(YYO~P!-WO}-TO!S'ZO'|'YO]xadxalxarxasxatxauxavxawxa{xa!Zxa!pxa!qxa!rxa!sxa!uxa!xxa#jxa'xxa(]xa(_xa(`xa~O(axa|xa!Qxa!]xa!^xa!`xa!bxa!cxa!exa!fxa!gxa!ixa!jxa'{xa'}xa(Oxa(Wxa(^xa!kxa(mxaQxa!hxa![xa!Yxa#Qxa#Sxa~P$1eO!S'ZO~O!S'ZO'|'YO~Ol$RO}-TO!S'ZO'x$QO'|'YO~O}-XO!S'ZO'|'YO]%sad%sal%sar%sas%sat%sau%sav%saw%sa{%sa!Z%sa!p%sa!q%sa!r%sa!s%sa!u%sa!x%sa#j%sa'x%sa(]%sa(_%sa(`%sa~O(a%sa|%sa!Q%sa!]%sa!^%sa!`%sa!b%sa!c%sa!e%sa!f%sa!g%sa!i%sa!j%sa'{%sa'}%sa(O%sa(W%sa(^%sa!k%sa(m%saQ%sa!h%sa![%sa!Y%sa#Q%sa#S%sa~P$5jOl$RO}-XO!S'ZO'x$QO'|'YO~O'x&zO!Y)OP~O!S'fO'|-^O]%tad%tal%tar%tas%tat%tau%tav%taw%ta{%ta!Z%ta!p%ta!q%ta!r%ta!s%ta!u%ta!x%ta#j%ta'x%ta(]%ta(_%ta(`%ta(a%ta|%ta!Q%ta!]%ta!^%ta!`%ta!b%ta!c%ta!e%ta!f%ta!g%ta!i%ta!j%ta'{%ta'}%ta(O%ta(W%ta(^%ta!k%ta(m%taQ%ta!h%ta![%ta!Y%ta}%ta#Q%ta#S%ta~Ol$RO!S'fO'x$QO~O}-dO!S'ZO'|'YO]%zad%zal%zar%zas%zat%zau%zav%zaw%za{%za!Z%za!p%za!q%za!r%za!s%za!u%za!x%za#j%za'x%za(]%za(_%za(`%za~O(a%za|%za!Q%za!]%za!^%za!`%za!b%za!c%za!e%za!f%za!g%za!i%za!j%za'{%za'}%za(O%za(W%za(^%za!k%za(m%zaQ%za!h%za![%za!Y%za#Q%za#S%za~P$=WOl$RO}-dO!S'ZO'x$QO'|'YO~O!^#eO!`#fO!j#mO(]#bO!Q&_a!b&_a!c&_a!e&_a!f&_a!g&_a!i&_a'{&_a(W&_a(^&_a(_&_a(`&_a(a&_a!k&_a(m&_a|&_a![&_a'|&_a!Y&_aQ&_a!h&_a~P!NrO]-hO~O]#pO!S#yO!Z-iO!Q&ea!]&ea!^&ea!`&ea!b&ea!c&ea!e&ea!f&ea!g&ea!i&ea!j&ea'{&ea'}&ea(O&ea(W&ea(]&ea(^&ea(_&ea(`&ea(a&ea!k&ea(m&ea|&ea![&ea'|&ea!Y&eaQ&ea!h&ea~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q&ha(a&ha!k&ha(m&ha|&ha![&ha'|&ha!Y&haQ&ha!h&ha~P!NrOPsO]%VOa$jOl$aO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(]%WO(`%XO(bXO(m%ZO)T!VO)U!WO~O![-lO~P$FlOS(QOT'}O]#pO)X(PO~O]-oO&p-pO)X-mO~OS-tOT'}O)X-sO~O]#pO~Q&xa!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O'|-vO(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a$di|$di~P!NrO]cXlgXpcXpiX!QcX!ZcX!]cX!^cX!`cX!bcX!ccX!ecX!fcX!gcX!icX!jcX!kcX'{cX'}cX(OcX(WcX(]cX(^cX(_cX(`cX(acX(mcX|cX![cX'|cX!ScX!YcXQcX!hcX~Od-xO#a)hO(P-wO~Ol-yO~Op%QO]bi!Qbi!Zbi!]bi!^bi!`bi!bbi!cbi!ebi!fbi!gbi!ibi!jbi!kbi'{bi'}bi(Obi(Wbi(]bi(^bi(_bi(`bi(abi(mbi|bi![bi'|bi!YbiQbi!hbi~O![-{O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!`#fO(]#bO!Q&Ui!^&Ui!b&Ui!c&Ui!e&Ui!f&Ui!g&Ui!i&Ui!j&Ui'{&Ui(W&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!Q&Ui!^&Ui!`&Ui!b&Ui!c&Ui!e&Ui!f&Ui!g&Ui!i&Ui!j&Ui'{&Ui(W&Ui(]&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO(]#bO(`#dO!Q&Ui'{&Ui(W&Ui(^&Ui(_&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO(]#bO(`#dO!Q&Ui!b&Ui'{&Ui(W&Ui(^&Ui(_&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!e#kO!f#lO!g#lO!i#lO!j#mO(]#bO(`#dO!Q&Ui!b&Ui!c&Ui'{&Ui(W&Ui(^&Ui(_&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!e#kO!f#lO!g#lO!i#lO!j#mO(]#bO!Q&Ui!b&Ui!c&Ui'{&Ui(W&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!f#lO!g#lO!i#lO!j#mO(]#bO!Q&Ui!b&Ui!c&Ui!e&Ui'{&Ui(W&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!j#mO(]#bO!Q&Ui!b&Ui!c&Ui!e&Ui!f&Ui!g&Ui!i&Ui'{&Ui(W&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO(]#bO!Q&Ui!b&Ui!c&Ui!e&Ui!f&Ui!g&Ui!i&Ui!j&Ui'{&Ui(W&Ui(^&Ui(_&Ui(`&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO(]#bO(^#cO(_#cO(`#dO!Q&Ui'{&Ui(W&Ui(a&Ui!k&Ui(m&Ui|&Ui![&Ui'|&Ui!Y&UiQ&Ui!h&Ui~P!NrO!Q-|O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO|'yX~P!NrO!Q-|O|'yX~O|.OO~O]#`ap#`a!Q#`a!]#`a!^#`a!`#`a!b#`a!c#`a!e#`a!f#`a!g#`a!i#`a!j#`a'{#`a'}#`a(O#`a(W#`a(^#`a(_#`a(`#`a(a#`a!k#`a(m#`a|#`a![#`a!S#`a'|#`a!Y#`aQ#`a!h#`a~O(].PO!Z#`a~P%6YO|.PO~O![.PO~O!Z.QO(]#`a~P%6YO]#pO!S#yO!Q&ei!]&ei!^&ei!`&ei!b&ei!c&ei!e&ei!f&ei!g&ei!i&ei!j&ei'{&ei'}&ei(O&ei(W&ei(]&ei(^&ei(_&ei(`&ei(a&ei!k&ei(m&ei|&ei![&ei'|&ei!Y&eiQ&ei!h&ei~O!Z-iO~P%8xO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q&hi(a&hi!k&hi(m&hi|&hi![&hi'|&hi!Y&hiQ&hi!h&hi~P!NrO![.VO~P$FlO!Q.XO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Y(oX~P!NrO'x.[O~O!Z.^O'})PO(m.`O~O!Q.XO!Y(oX~O!Y.aO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO(W#oO(]#bO(^#cO(_#cO(`#dO!Q_i'{_i(a_i!k_i(m_i|_i![_i'|_i!Y_iQ_i!h_i~P!NrO!W.bO~Ol)XO]!Va!Q!Va(W!Va(e!Va~OP.jO].iOl.jO!Q.jO!S.gO!W.jO!Z.hO!].jO!^.jO!`.jO!b.jO!c.jO!e.jO!f.jO!g.jO!i.jO!j.jO!k.jO!l.jO'uQO'|.jO'}.jO(O.jO(W.jO(].dO(^.eO(_.eO(`.fO(a.jO(bXO~O|.mO~P%@zO!W#}O~O!Q)[O(W(Za(e(Za~O(e.qO~O]nXdnXlmXpnXrnXsnXtnXunXvnXwnX{nX!ZnX!pnX!qnX!rnX!snX!unX!xnX#jnX'xnX(]nX(_nX(`nX!SnX!QnX(WnX|nXQnX!hnX~O(anX}nX'|nX!]nX!^nX!`nX!bnX!cnX!enX!fnX!gnX!inX!jnX'{nX'}nX(OnX(^nX!knX(mnX![nX!YnX#QnX#SnX~P%ChO(a.sO~Or![Os![Ot![Ou![Ov![Ow![O{!]O!p!_O!q!_O!r!_O!s!_O!u!`O~O](fid(fil(fi!Z(fi!x(fi#j(fi'x(fi(](fi(_(fi(`(fi|(fi!Q(fi(W(fi(m(fiQ(fi!h(fi!S(fi'|(fi(a(fi~P%GVO](qO!Z(rO!](oO!k(oO#b(oO#c(oO#d(oO#e(oO#f(sO#g(sO(O(pO(m(oO~Od({O#a)hO(P7sO~O]$pO!Z$oO|!}i!Q!}i!S!}i(a!}i(m!}i'|!}iQ!}i!h!}i~O]#Oi!S#Oi!Z#Oi'|#Oi(m#Oi|#Oi!Q#Oi(a#OiQ#Oi!h#Oi~P#&dOr![Os![Ot![Ou![Ov![Ow![O})rO#Q)tO#S)uO(O)qO~O]#Oi!S#Oi!Z#Oi'|#Oi(m#Oi|#Oi!Q#Oi(a#OiQ#Oi!h#Oi~P%KuO].|Or#PXs#PXt#PXu#PXv#PXw#PX}#PX!S#PX!Z#PX#Q#PX#S#PX'|#PX(O#PX(m#PX|#PX!Q#PX(a#PXQ#PX!h#PX(W#PX~O].}O~O![/OO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![/OO(]/QO~P#'{O![/OO~PM{O]/VOdjOl8_O!Z/UO!x!aO#j$lO'x$_O(W/ZO(]/SO~O(_/WO(`/WO(m/YO|!|X!Q!|XQ!|X!h!|X~P&![O!Q/]O|(iX~O|/_O~Or![Os![Ot![Ou![Ov![Ow![O|qaQqa!Qqa!hqa(Wqa(aqa~P! iO]$pO!Z+SO|qaQqa!Qqa!hqa(Wqa(aqa~O!Q*]O![(nX~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dOQ)PX!Q)PX!h)PX~P!NrO(W/dOQ(RX!Q(RX!h(RX~O!Q/eOQ(QX!h(QX~OQ/gO!h/gO~O!Q*ZO![)Va~O!Q*]O![(na~O]#pO!S#yO~O!Q/nO!S(zX(m(zX~O(a/pO~O(a/qO~OPsO]%VOa!ZOl8YOy!wO!S#yO!Z%YO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x8TO(W)|O(YYO(]%WO(`%WO(bXO)T!VO)U!WO|'yP|(iP~P%GVOPsO]dOa!ZOdjOlTOr![Os![Ot![Ou![Ov![Ow![Oy!wO{!]O!]!UO!^!TO!l!YO!ouO!p!^O!q!_O!r!_O!s!_O!u!`O!x!aO#S!qO#f#OO#g#PO#j!bO#y!tO#|!{O#}!zO$S!cO$Y!vO$_!nO$`!oO$f!dO$k!eO$m!fO$n!gO$r!hO$t!iO$v!jO$x!kO$z!lO$|!mO%T!pO%Y!rO%]!sO%b!uO%j!xO%u!yO%w!OO%}!|O&O!QO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'xRO(YYO(]aO(_fO(`eO(aoO(bXO)T!VO)U!WO~O!S*iO!Y%uO!Z/sO'})PO~P&*tO!Q*lO(a(sa~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a/}O~P!NrO(a/qO~P!4iOr![Os![Ot![Ou![Ov![Ow![O|#Ua!S#Ua(a#Ua(m#Ua!Q#UaQ#Ua!h#Ua(W#Ua~P! iO]$pO!Z+SO|#Ua!S#Ua(a#Ua(m#Ua!Q#UaQ#Ua!h#Ua~O(W#Ua~P&2UO]#Va!S#Va!Z#Va|#Va(a#Va(m#Va!Q#VaQ#Va!h#Va(W#Va~P#B`O![0VO(]0WO~P#'{O![0VO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![0VO~PM{O]$pO|0XO!Z+SO~O]$pO!Z+SO|#Ya!S#Ya(a#Ya(m#Ya!Q#YaQ#Ya!h#Ya~O(W#Ya~P&5bO|0YO~O|0ZO~O![0[O~O]$pO!Z+SO!S%hi(a%hi(m%hi~O(a0^O~O|0_O~P+WO|0_O(a#_O~O|0_O~O$i0dOP$ei]$eia$eid$eil$eir$eis$eit$eiu$eiv$eiw$eiy$ei{$ei!S$ei!Z$ei!]$ei!^$ei!l$ei!o$ei!p$ei!q$ei!r$ei!s$ei!u$ei!x$ei#S$ei#f$ei#g$ei#j$ei#y$ei#|$ei#}$ei$S$ei$Y$ei$_$ei$`$ei$f$ei$k$ei$m$ei$n$ei$r$ei$t$ei$v$ei$x$ei$z$ei$|$ei%T$ei%Y$ei%]$ei%b$ei%j$ei%u$ei%w$ei%}$ei&O$ei&Z$ei&[$ei&`$ei&d$ei&m$ei&n$ei'q$ei'u$ei'x$ei(Y$ei(]$ei(_$ei(`$ei(a$ei(b$ei)T$ei)U$ei!Y$ei~O]0fO~O!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a0hO~P!NrO(a0kO~PM{O(a0hO~O]+|Or![Os![Ot![Ou![Ov![Ow![O!x!aO!y$kO'x+xO(]+yO~O(]0pO~O]$pO!Q0sO!Z0rO(a(wX~O(a0vO~O!S}O$f!dO$k!eO$m!fO$n!gO$r,TO$t!iO$v!jO$x!kO$z!lO$|!mO'x7rOd$^i!o$^i!x$^i#S$^i#y$^i$S$^i$Y$^i$_$^i$`$^i%T$^i%Y$^i%]$^i%b$^i'q$^i(_$^i!Y$^i$i$^i~P#IjO]0zO~O%V,WOP%Si]%Sia%Sid%Sil%Sir%Sis%Sit%Siu%Siv%Siw%Siy%Si{%Si!S%Si!Z%Si!]%Si!^%Si!l%Si!o%Si!p%Si!q%Si!r%Si!s%Si!u%Si!x%Si#S%Si#f%Si#g%Si#j%Si#y%Si#|%Si#}%Si$S%Si$Y%Si$_%Si$`%Si$f%Si$k%Si$m%Si$n%Si$r%Si$t%Si$v%Si$x%Si$z%Si$|%Si%T%Si%Y%Si%]%Si%b%Si%j%Si%u%Si%w%Si%}%Si&O%Si&Z%Si&[%Si&`%Si&d%Si&m%Si&n%Si'q%Si'u%Si'x%Si(Y%Si(]%Si(_%Si(`%Si(a%Si(b%Si)T%Si)U%Si!Y%Si$i%Si~O]$pO~O!Y0}O~P!QO|1OO!Q1PO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!Q1QOQ(pX!h(pX~OQ1SO!h1SO~O(W1VO(m1UOQ#{X!Q#{X!h#{X~P!1sO(W1VO(m1UOQ#{X!Q#{X!h#{X~P!1_Op'RO~O]$pO!Z$oO(a1YO~Ol7}O(a(TX~P$(WO'x+xO~Oa!QOl$ROy1aO#|!{O#}1`O$Y!vO%j1bO%u!yO%w!OO%}!|O&O!QO'x$QO(YYO~P%GVO|1cO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO]$pO!S}O!Z$oO~O!Q1dO(W1fO!S(VX~Ol$RO'x$QO~O!o1iO(YYO~P4XO(a1jO~PAdO]1nOl([O!S#yO!x!aO#j$lO'x(ZO'|1rO(]1kO(_1oO(`1oO~O(a1sO(m1uO~P&LlOl8iO!P-QO!Y1xO!o-PO#j!bO#y,mO$S!cO$W,lO$|!mO%]!sO%b!uO'x8VO(YYO~P!-WOl8iO#j!bO'x8VO~P!-WO'|1yO~O}1|O!S'ZO'|'YO]xidxilxirxisxitxiuxivxiwxi{xi!Zxi!pxi!qxi!rxi!sxi!uxi!xxi#jxi'xxi(]xi(_xi(`xi(axi|xi!Qxi!]xi!^xi!`xi!bxi!cxi!exi!fxi!gxi!ixi!jxi'{xi'}xi(Oxi(Wxi(^xi!kxi(mxiQxi!hxi![xi!Yxi#Qxi#Sxi~O}2PO!S'ZO'|'YO]%sid%sil%sir%sis%sit%siu%siv%siw%si{%si!Z%si!p%si!q%si!r%si!s%si!u%si!x%si#j%si'x%si(]%si(_%si(`%si(a%si|%si!Q%si!]%si!^%si!`%si!b%si!c%si!e%si!f%si!g%si!i%si!j%si'{%si'}%si(O%si(W%si(^%si!k%si(m%siQ%si!h%si![%si!Y%si#Q%si#S%si~O(m2QO!Q%yX!Y%yX~O!Q2RO!Y)OX~O!Y2TO~Oa2VOl$RO%w!OO'x$QO~O!S'fO]%tid%til%tir%tis%tit%tiu%tiv%tiw%ti{%ti!Z%ti!p%ti!q%ti!r%ti!s%ti!u%ti!x%ti#j%ti'x%ti(]%ti(_%ti(`%ti(a%ti|%ti!Q%ti!]%ti!^%ti!`%ti!b%ti!c%ti!e%ti!f%ti!g%ti!i%ti!j%ti'{%ti'}%ti(O%ti(W%ti(^%ti!k%ti(m%tiQ%ti!h%ti![%ti!Y%ti}%ti#Q%ti#S%ti~O'|%ti~P'(cO'|-^O~P'(cO}2[O!S'ZO'|'YO]%zid%zil%zir%zis%zit%ziu%ziv%ziw%zi{%zi!Z%zi!p%zi!q%zi!r%zi!s%zi!u%zi!x%zi#j%zi'x%zi(]%zi(_%zi(`%zi(a%zi|%zi!Q%zi!]%zi!^%zi!`%zi!b%zi!c%zi!e%zi!f%zi!g%zi!i%zi!j%zi'{%zi'}%zi(O%zi(W%zi(^%zi!k%zi(m%ziQ%zi!h%zi![%zi!Y%zi#Q%zi#S%zi~O|2]O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|2^O~O!Z&ei~P%8xOPsOa$jOl$aO!]!UO!^!TO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(bXO)T!VO)U!WO]&ka!S&ka!Z&ka(]&ka(_&ka(`&ka~O'x&zO(W2cO|)ZP~O)X2bO~O&p2eO)X2bO~O)X2fO~OlmXpnXp&RX~Od2hO#a)hO(P-wO~O!Q-|O|'ya~O![2lO~O]$pO!Z+SO!S%hq(a%hq(m%hq~O]#pO!S#yO!Q&eq!]&eq!^&eq!`&eq!b&eq!c&eq!e&eq!f&eq!g&eq!i&eq!j&eq'{&eq'}&eq(O&eq(W&eq(]&eq(^&eq(_&eq(`&eq(a&eq!k&eq(m&eq|&eq![&eq'|&eq!Y&eqQ&eq!h&eq~O!Z&eq~P'4]O!Z-iO~P'4]O!S#yO!Z)OO'})PO!Q'`X!Y'`X~P!?aO!Q.XO!Y(oa~O!Q*ZO![2tO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!Y2xO~P%@zO![2xO~P%@zO|2xO~P%@zO|2}O~P%@zO]3OO!Q'Ra(W'Ra(e'Ra~O!Q)[O(W(Zi(e(Zi~O]$pO!Z$oO|!}q!Q!}q!S!}q(a!}q(m!}q'|!}qQ!}q!h!}q~O]#Oq!S#Oq!Z#Oq'|#Oq(m#Oq|#Oq!Q#Oq(a#OqQ#Oq!h#Oq~P%KuO]&QO!Z&PO!S#Ta(m#Ta|#Ta!Q#Ta(a#TaQ#Ta!h#Ta~O(]8lO(_8mO(`8mOr#Tas#Tat#Tau#Tav#Taw#Ta}#Ta#Q#Ta#S#Ta'|#Ta(O#Ta~P':|O|3WO~PM{O|(kP~P!+aO![3ZO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![3ZO~PM{O]/VOdjOl$yO!Z/UO!x!aO#j$lO'x$_O(]9TO(_3]O(`3]O~O|!|a!Q!|aQ!|a!h!|a~P'>WO]/VOdjOr![Os![Ot![Ou![Ov![Ow![O!Z/UO!x!aO!y$kO#j$lO'x$_O|#UX!Q#UXQ#UX!h#UX~Ol8_O(]/SO(_9XO(`9XO~P'?YO]$pO|!|a!Q!|aQ!|a!h!|a~O!Z+SO~P'@qO]/VOa!QOdjOl8aOy!wO!Z/UO!x!aO#j$lO#|!{O#}!zO%j!xO%u!yO%w!OO%}!|O&O!QO'x8RO(W)|O(YYO(]9TO(_3]O(`3]O|(iP~P%GVO(_9XO(`9XO|#YX!Q#YXQ#YX!h#YX~P&![O!Z$oO(m3aO~P'@qO'x&zO|#nX!Q#nXQ#nX!h#nX~O(W3dO(YYO~P4XO!Q/]O|(ia~Or![Os![Ot![Ou![Ov![Ow![O|qiQqi!Qqi!hqi(Wqi(aqi~P! iO]$pO!Z+SO|qiQqi!Qqi!hqi(Wqi(aqi~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q&^q(a&^q!k&^q(m&^q|&^q![&^q'|&^q!Y&^qQ&^q!h&^q~P!NrO!Q/eOQ(Qa!h(Qa~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q'ma!['ma~P!NrO![3kO~O(W3lO!Q%da!S%da(m%da~O!Q/nO!S(za(m(za~O!Q3oO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a#_O!Y(oX~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q$Ui(a$Ui~P!NrO]*hO!S#yO!Z$oO(m*jO!Q'ba(a'ba~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a3qO~P!NrO]$pO!Z+SO|#Ui!S#Ui(a#Ui(m#Ui!Q#UiQ#Ui!h#Ui~O(W#Ui~P'MfO]#Vi!S#Vi!Z#Vi|#Vi(a#Vi(m#Vi!Q#ViQ#Vi!h#Vi(W#Vi~P#B`O![3sO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![3sO(]3uO~P#'{O![3sO~PM{O(a3vO~O]*hO!Q*lO!S#yO!Z$oO(a(sX~O(m3wO~P(!lO|3yO!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|3yO~O$i3{OP$eq]$eqa$eqd$eql$eqr$eqs$eqt$equ$eqv$eqw$eqy$eq{$eq!S$eq!Z$eq!]$eq!^$eq!l$eq!o$eq!p$eq!q$eq!r$eq!s$eq!u$eq!x$eq#S$eq#f$eq#g$eq#j$eq#y$eq#|$eq#}$eq$S$eq$Y$eq$_$eq$`$eq$f$eq$k$eq$m$eq$n$eq$r$eq$t$eq$v$eq$x$eq$z$eq$|$eq%T$eq%Y$eq%]$eq%b$eq%j$eq%u$eq%w$eq%}$eq&O$eq&Z$eq&[$eq&`$eq&d$eq&m$eq&n$eq'q$eq'u$eq'x$eq(Y$eq(]$eq(_$eq(`$eq(a$eq(b$eq)T$eq)U$eq!Y$eq~O(a3|O~O(a4OO~PM{O'|4PO(m*jO~P(!lO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a4OO~P!NrO|4RO~PM{O(a4TO~O]+|Or![Os![Ot![Ou![Ov![Ow![O!x!aO'x+xO(]+yO~O]$pO!Z0rO!Q$}a(a$}a|$}a~O![4ZO(]4[O~P#'{O!Q0sO(a(wa~O]$pO|4_O!Z0rO~O!S}O$f!dO$k!eO$m!fO$n!gO$r,TO$t!iO$v!jO$x!kO$z!lO$|!mO'x7rOd$^q!o$^q!x$^q#S$^q#y$^q$S$^q$Y$^q$_$^q$`$^q%T$^q%Y$^q%]$^q%b$^q'q$^q(_$^q!Y$^q$i$^q~P#IjO(a4aO~OP4bO'uQO~O!Q1QOQ(pa!h(pa~Op%QO(m4fOQ#{al(TX!Q#{a!h#{a(W(TX~P$(WO'x+xOQ$Pa!Q$Pa!h$Pa~Op%QO(m4fOQ#{a](UXd(UXl(UXr(UXs(UXt(UXu(UXv(UXw(UX{(UX}(UX!Q#{a!S(UX!Z(UX!h#{a!p(UX!q(UX!r(UX!s(UX!u(UX!x(UX#j(UX'x(UX'|(UX(W(UX(](UX(_(UX(`(UX~O#|4iO#}4iO~Ol)bO(a(UX~P$(WOp%QOl(TX(a(UX~P$(WO(a4kO~Ol$RO!P4pO'x$QO~O!Q1dO!S(Va~O!Q1dO(W4sO!S(Va~O(a4uO(m4wO~P&LlO]1nOl([Or![Os![Ot![Ou![Ov![Ow![O!x!aO!y$kO#j$lO'x(ZO(]1kO(_1oO(`1oO~O(]4|O~O]$pO!Q5PO!S*iO!Z5OO'|1rO~O(a4uO(m5RO~P(5RO]1nOl([O!x!aO#j$lO'x(ZO(]1kO(_1oO(`1oO~Op%QO](hX!Q(hX!S(hX!Z(hX'|(hX(a(hX(m(hX|(hX~O(a4uO~O(a5XO~PAdO'x&zO!Q'kX!Y'kX~O!Q2RO!Y)Oa~Op%QO](}ad(}al(}ar(}as(}at(}au(}av(}aw(}a{(}a!S(}a!Z(}a!p(}a!q(}a!r(}a!s(}a!u(}a!x(}a#j(}a'x(}a(](}a(_(}a(`(}a(a(}a|(}a!Q(}a!](}a!^(}a!`(}a!b(}a!c(}a!e(}a!f(}a!g(}a!i(}a!j(}a'{(}a'}(}a(O(}a(W(}a(^(}a!k(}a(m(}aQ(}a!h(}a![(}a'|(}a!Y(}a}(}a#Q(}a#S(}a~O!S'fO]%tqd%tql%tqr%tqs%tqt%tqu%tqv%tqw%tq{%tq!Z%tq!p%tq!q%tq!r%tq!s%tq!u%tq!x%tq#j%tq'x%tq(]%tq(_%tq(`%tq(a%tq|%tq!Q%tq!]%tq!^%tq!`%tq!b%tq!c%tq!e%tq!f%tq!g%tq!i%tq!j%tq'{%tq'}%tq(O%tq(W%tq(^%tq!k%tq(m%tqQ%tq!h%tq![%tq'|%tq!Y%tq}%tq#Q%tq#S%tq~OPsOa$jOl$aO!S#yO!l!YO#f#OO#g#PO#j$lO&Z!TO&[!TO&`!}O&d!YO&m!YO&n!YO'uQO'x$_O(bXO)T!VO)U!WO~O])Si!Q)Si!Z)Si!])Si!^)Si!`)Si!b)Si!c)Si!e)Si!f)Si!g)Si!i)Si!j)Si'{)Si'})Si(O)Si(W)Si(])Si(^)Si(_)Si(`)Si(a)Si!k)Si(m)Si|)Si![)Si'|)Si!Y)SiQ)Si!h)Si~P(>_O|5dO~O![5eO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q&hq(a&hq!k&hq(m&hq|&hq![&hq'|&hq!Y&hqQ&hq!h&hq~P!NrO!Q5fO|)ZX~O|5hO~O)X5iO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q^y(a^y!k^y(m^y|^y![^y'|^y!Y^yQ^y!h^y~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO|'na!Q'na~P!NrO]#pO!S#yO!Q&ey!Z&ey!]&ey!^&ey!`&ey!b&ey!c&ey!e&ey!f&ey!g&ey!i&ey!j&ey'{&ey'}&ey(O&ey(W&ey(]&ey(^&ey(_&ey(`&ey(a&ey!k&ey(m&ey|&ey![&ey'|&ey!Y&eyQ&ey!h&ey~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q&hy(a&hy!k&hy(m&hy|&hy![&hy'|&hy!Y&hyQ&hy!h&hy~P!NrO]$pO!Z+SO!S%hy(a%hy(m%hy~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q'`a!Y'`a~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q#ui!Y#ui~P!NrO!Y5kO~P%@zO![5kO~P%@zO|5kO~P%@zO|5mO~P%@zO]$pO!Z$oO|!}y!Q!}y!S!}y(a!}y(m!}y'|!}yQ!}y!h!}y~Or#Tis#Tit#Tiu#Tiv#Tiw#Ti}#Ti!S#Ti#Q#Ti#S#Ti'|#Ti(O#Ti(m#Ti|#Ti!Q#Ti(a#TiQ#Ti!h#Ti~O]$pO!Z+SO~P) sO]&QO!Z&PO(]8lO(_8mO(`8mO~P) sO|5oO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO!Q5pO|(kX~O|5rO~O]$pO|!|i!Q!|iQ!|i!h!|i~O!Z+SO~P)%PO|#YX!Q#YXQ#YX!h#YX~P'>WO!Z$oO~P)%PO]'XXd&{Xl&{Xr'XXs'XXt'XXu'XXv'XXw'XX|'XX!Q'XX!Z'XX!x&{X#j&{X'x&{X(]'XX(_'XX(`'XXQ'XX!h'XX~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO|#li!Q#liQ#li!h#li~P!NrO]$pO!Z+SO|qqQqq!Qqq!hqq(Wqq(aqq~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dOQ)RX!Q)RX!h)RX~P!NrO(W5tOQ)QX!Q)QX!h)QX~O![5vO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![5vO~PM{O|$hi!Q$Ua(a$Ua~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a5yO~P!NrO|5{O~PM{O|5{O!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|5{O~O]$pO!Z0rO!Q$}i(a$}i|$}i~O![6SO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![6SO(]6UO~P#'{O![6SO~PM{O]$pO!Z0rO!Q'ea(a'ea~OP%fO|6VO'uQO~O|6VO~O'x+xO(W1VO(m1UOQ#{X!Q#{X!h#{X~O(a6YO~P$=WO(a6YO~P$1eO(a6YO~P$5jO(W6ZO!Q&|a!S&|a~O!Q1dO!S(Vi~O(a6_O(m6aO~P(5RO(a6_O~O(a6_O(m6eO~P&LlOr![Os![Ot![Ou![Ov![Ow![O~P(5nO]$pO!Z5OO!Q!va!S!va'|!va(a!va(m!va|!va~Or![Os![Ot![Ou![Ov![Ow![O}6iO#Q)tO#S)uO(O)qO~O]!za!Q!za!S!za!Z!za'|!za(a!za(m!za|!za~P)4aO![6mO(]6nO~P#'{O!Q5PO!S#yO'|1rO(a6_O(m6eO~O!S#yO~P#<|O]$pO|6qO!Z5OO~O]$pO!Z5OO!Q#ra!S#ra'|#ra(a#ra(m#ra|#ra~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a#sa~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a6_O~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Q%yi!Y%yi~P!NrO!Z-iO]&gi!Q&gi!S&gi!]&gi!^&gi!`&gi!b&gi!c&gi!e&gi!f&gi!g&gi!i&gi!j&gi'{&gi'}&gi(O&gi(W&gi(]&gi(^&gi(_&gi(`&gi(a&gi!k&gi(m&gi|&gi![&gi'|&gi!Y&giQ&gi!h&gi~O'x&zO(W6vO~O!Q5fO|)Za~O|6xO~P%@zO]$pO!Z+SO!S#Tq(m#Tq|#Tq!Q#Tq(a#TqQ#Tq!h#Tq~Or#Tqs#Tqt#Tqu#Tqv#Tqw#Tq}#Tq#Q#Tq#S#Tq'|#Tq(O#Tq~P)=ZO!Q5pO|(ka~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO|#lq!Q#lqQ#lq!h#lq~P!NrO!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO!Y'`a(a$di~P!NrO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO|$hq!Q$Ui(a$Ui~P!NrO|6|O~PM{O|6|O!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|6|O~O|7PO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|7PO~O]$pO!Z0rO!Q$}q(a$}q|$}q~O![7RO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![7RO~PM{O(a7SO~O(m4fOQ#{a!Q#{a!h#{a~O(W7TO!Q&|i!S&|i~O!Q1dO!S(Vq~O!Q5PO!S#yO'|1rO(a7UO(m7WO~O(a7UO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a7UO~P!NrO(a7UO(m7ZO~P(5RO]$pO!Z5OO!Q!vi!S!vi'|!vi(a!vi(m!vi|!vi~O]!zi!Q!zi!S!zi!Z!zi'|!zi(a!zi(m!zi|!zi~P)4aO![7`O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![7`O(]7bO~P#'{O![7`O~PM{O]$pO!Z5OO!Q'^a!S'^a'|'^a(a'^a(m'^a~O|7cO!Q#^O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO|7cO~O]$pO!Z0rO!Q$}y(a$}y|$}y~O(a7fO~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a7fO~P!NrO!Q5PO!S#yO'|1rO(a7fO(m7iO~O]$pO!Z5OO!Q!vq!S!vq'|!vq(a!vq(m!vq|!vq~O![7kO!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO~P!NrO![7kO~PM{O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a7mO~P!NrO(a7mO~O]$pO!Z5OO!Q!vy!S!vy'|!vy(a!vy(m!vy|!vy~O!^#eO!`#fO!b#hO!c#iO!e#kO!f#lO!g#lO!i#lO!j#mO'{#[O(W#oO(]#bO(^#cO(_#cO(`#dO(a7pO~P!NrO(a7pO~O]ZXlgXpZXpiX!QZX!SiX!ZZX!]ZX!^ZX!`ZX!bZX!cZX!eZX!fZX!gZX!iZX!jZX!kZX'{ZX'|$bX'}ZX(OZX(WZX(]ZX(^ZX(_ZX(`ZX(aZX(mZX~O]#_XlmXpnXp#_X!Q#_X!SnX!Z#_X!]#_X!^#_X!`#_X!b#_X!c#_X!e#_X!f#_X!g#_X!i#_X!j#_X!kmX'{#_X'}#_X(O#_X(W#_X(]#_X(^#_X(_#_X(`#_X(mmX|#_XQ#_X!h#_X~O(a#_X![#_X'|#_X!Y#_X~P*(}O]nX]#_XdnXlmXpnXp#_XrnXsnXtnXunXvnXwnX{nX!ZnX!Z#_X!pnX!qnX!rnX!snX!unX!xnX#jnX'xnX(]nX(_nX(`nX|nX|#_X!QnX(WnX~O(anX(mnX~P*+_O]#_XlmXpnXp#_X!Q#_X!Z#_X|#_XQ#_X!h#_X~O!S#_X(a#_X(m#_X'|#_X~P*-iOQnXQ#_X!QnX!hnX!h#_X(WnX~P!:zO]nX]#_XlmXpnXp#_XrnXsnXtnXunXvnXwnX{nX!SnX!Z#_X!pnX!qnX!rnX!snX!unX!xnX#jnX'xnX(]nX(_nX(`nX~O'|nX(anX(mnX~P*/OOdnX|#_X!Q#_X!ZnX!]#_X!^#_X!`#_X!b#_X!c#_X!e#_X!f#_X!g#_X!i#_X!j#_X!kmX'{#_X'}#_X(O#_X(W#_X(]#_X(^#_X(_#_X(`#_X(a#_X(mmX~P*/OO]nX]#_XdnXlmXpnXp#_XrnXsnXtnXunXvnXwnX{nX!ZnX!Z#_X!pnX!qnX!rnX!snX!unX!xnX#jnX'xnX(]nX(_nX(`nX(a#_X~OlmXpnX(a#_X~Od({O#a(|O(P7sO~Od({O#a(|O(P7wO~Od({O#a(|O(P7tO~O]iXriXsiXtiXuiXviXwiX|iX!ZiX(]iX(_iX(`iXdiX{iX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX~P!LbO]ZXlgXpZXpiX!QZX!ZZX(aZX(mZX~O!SZX'|ZX~P*6|OlgXpiX(aZX(miX~O]ZX]iXdiXlgXpZXpiXriXsiXtiXuiXviXwiX{iX!ZZX!ZiX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX(]iX(_iX(`iX|ZX|iX!QiX(WiX(miX~O(aZX~P*8QO]ZX]iXlgXpZXpiXriXsiXtiXuiXviXwiX!QZX!QiX!SiX!ZZX!ZiX!]ZX!^ZX!`ZX!bZX!cZX!eZX!fZX!gZX!iZX!jZX!kZX'{ZX'}ZX(OZX(WZX(WiX(]ZX(]iX(^ZX(_ZX(_iX(`ZX(`iX(mZX~OQZXQiX!hZX!hiX~P*:[OdiX{iX|ZX|iX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX(miX~P*:[O]iXdiXriXsiXtiXuiXviXwiX{iX!ZiX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX(]iX(_iX(`iX~P!LbO]ZX]iXlgXpZXpiXriXsiXtiXuiXviXwiX{iX!ZZX!piX!qiX!riX!siX!uiX!xiX#jiX'xiX(]iX(_iX(`iX(aiX~O!SiX'|iX(miX~P*?nOdiX!ZiX~P*?nOd#tO#a)hO&f#vO&i#wO(P#qO~Od#tO#a)hO&f#vO&i#wO(P7vO~Od#tO#a)hO&f#vO&i#wO(P7xO~Or![Os![Ot![Ou![Ov![Ow![O~PCvOr![Os![Ot![Ou![Ov![Ow![O!y$kO~PCvOd#tO#a)hO(P7uO~Od#tO#a)hO(P7zO~Od#tO#a)hO(P7tO~Od#tO#a)hO(P7yO~O]${OdjOl8_Or![Os![Ot![Ou![Ov![Ow![O!Z$}O!x!aO!y$kO#j$lO'x$_O(]8dO(_8fO(`8fO~O]${OdjOl8_O!Z$}O!x!aO#j$lO'x$_O(]8dO(_8fO(`8fO~Od#tO#a#uO(P7tO~Od#tO#a#uO(P7wO~Ol7}O~Ol7|O~O]&QOr![Os![Ot![Ou![Ov![Ow![O!Z&PO(]8lO(_8mO(`8mO~O}#UX!S#UX#Q#UX#S#UX'|#UX(O#UX(m#UX|#UX!Q#UX(a#UXQ#UX!h#UX~P*GeO]&QO!Z&PO(]8lO(_8mO(`8mO~Or#YXs#YXt#YXu#YXv#YXw#YX}#YX!S#YX#Q#YX#S#YX'|#YX(O#YX(m#YX|#YX!Q#YX(a#YXQ#YX!h#YX~P*ISO]cXlgXpiX!ScX~Od({O#a)hO(P#qO~Od({O#a)hO(P7uO~Od({O#a)hO(P7zO~Od({O#a)hO(P7yO~Od({O#a)hO(P7tO~Od({O#a)hO(P7vO~Od({O#a)hO(P7xO~Or![Os![Ot![Ou![Ov![Ow![O~P*FRO}#Ua!S#Ua#Q#Ua#S#Ua'|#Ua(O#Ua(m#Ua|#Ua!Q#Ua(a#UaQ#Ua!h#Ua~P*GeOr#Uas#Uat#Uau#Uav#Uaw#Ua}#Ua#Q#Ua#S#Ua'|#Ua(O#Ua~P&2UOr#Yas#Yat#Yau#Yav#Yaw#Ya}#Ya#Q#Ya#S#Ya'|#Ya(O#Ya~P&5bO](TXr(TXs(TXt(TXu(TXv(TXw(TX{(TX!p(TX!q(TX!r(TX!s(TX!u(TX!x(TX#j(TX'x(TX(](TX(_(TX(`(TX(m(TX~Ol7|O!S(TX'|(TX(a(TX~P+ nO]&RXlmXpnX!S&RX~Od2hO#a)hO(P9OO~O(]%|O(_&RO(`&RO(W#Ta~P':|Ol$yO(]9TO(_3]O(`3]O~P'?YOr#Uis#Uit#Uiu#Uiv#Uiw#Ui}#Ui#Q#Ui#S#Ui'|#Ui(O#Ui~P'MfO!S#Ti|#Ti(a#Ti(m#Ti!Q#TiQ#Ti!h#Ti(W#Ti~O]$pO!Z+SO~P+%bO]&QO!Z&PO(]%|O(_&RO(`&RO~P+%bOdjOl8_O!x!aO#j$lO'x$_O~O]/VO!Z/UO(]/SO(_9XO(`9XO|#YX!Q#YXQ#YX!h#YX~P+&kO(W#Tq~P)=ZO(]8^O~Ol8oO~Ol8pO~Ol8qO~Ol8rO~Ol8sO~Ol8tO~Ol8uO~Ol8oO!k#{O(m#{O~Ol8tO!k#{O(m#{O~Ol8uO!k#{O(m#{O~Ol8tO!S#yOQ(TX!Q(TX!h(TX(W(TX|(TX(m(TX~P$(WOl8uO!S#yO~P$(WOl8sO|(TX!Q(TX(W(TX(m(TX~P$(WOd-xO#a)hO(P9OO~Ol9PO~O(]9hO~OV&o&r&s&q'u(b!W'xST#b!^!`&td#c!l&[!j]&p)[&u'}!b!c&v&w&v~",goto:"$@Y)[PPPPPP)]P)`PP,r1vP4l4l7dP7d:[P:u;X;mAtHTNh!&_P!,h!-]!.QP!.lPPPPPP!/SP!0gPPP!1vPP!2|P!4f!4j!5]P!5cPPPPP!5fP!5fPP!5fPPPPPPPP!5r!8vPPPPP!8yP:x!:UPP:x!<Z!>c!>p!@T!ArP!ArP!BS!Bh!CV!Bh!Bh!Bh!>p!>p!>p!Cv!HP!HnPPPPPPP!Ie!MhP!>p!>c!>c##z#$Q:x:x:x#$T#$h#&p#&x#&x#'PP#'a#'hPP#'h#'h#'o#'PP#'s#(d#'YP#(oP#)R#*{#+U#+_PP#+t#,_#,{#-i#+tP#.t#/QP#+tP#+tPP#/T#+t#+tP#+tP#+tP#+tP#+tP#1zP#2_#2_#2_#2_#+_#+_P#2lP#+_#*{P#2p#2pP#2}#*{#*{#5xP#6]#6h#6n#6n#*{#7d#*{P#8O#8O!4f!4f!4f!4f!4f!4f!/S!/SP#8RP#9i#9w!/S!/S!/SPP#9}#:Q!I]#:T7d4l#<w#>g#?|4lPP4l#Af4lP4l4l4lP4lP#DY4lP#Af#Df4lPPPPPPPPPPP)]P#GY#G`#Iv#JV#J]#KY#K`#Kv#LQ#MY#NX#N_#Ni#No#N{$ V$ _$ e$ k$ y$!S$![$!b$!m$!|$#W$#^$#d$#k$#z$$Q$%i$%o$%u$%|$&T$&^PPPPPPPP$&d$&hPPPPP$,p#9}$,s$0O$2V$3YP$3]P$3a$3dPPPPPPPPP$3p$5]$6d$7V$7]$9f$9iP$;O$;U$;Y$;]$;c$;o$;y$<S$=R$=n$=t$>_$>o$>r$?S$?a$?g#9}#:Q#:Q$?jPP$?m$?xP$@S$@VR#WP&jsOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iU%fs%g4bQ&W!^Q'y#Qd.j)Z.g.h.i.l2y2z2{3O5lR4b1PdgOade|}%t&{*i,Z#^$|fmtu!t$W$f$g$m$z${%m'S'T'V'Z)f)l)n){*l+h+r,Q,g,w,}-P.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9hS%Si/s&O%z!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r&P&e&f&j&k&v'O'U'p'r'x(x)O)w)y*T*Z*a*h*j*w*y+S+U+W+j+m+s,P,S-i-l-v-|.V.X.^.`.|/Q/Y/e0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iQ&c!cQ&}!rQ'y#TQ'z#QQ'{#RQ*U$}Q+[&VQ+e&dS-Z'f2RQ/j*]Q2_-hQ2c-oQ3c/ZQ6v5fR8g/U$f#]S!Z$`$j$q%R%y%{&l&u&x'q'w(W(X(a(b(c(d(e(f(g(h(i(j(k(l(w(})U)v*V*x+T+f+q,],o-f.Z/P/b/h/r/t/|0T0b0j2`2a2g2i2o2q2u2v3V3b3g3t3}4Q4X5V5W5^5s5u5w5z5}6T6c6k6{7X7a7g7nQ&Y!aQ'v#OQ(S#VQ(v#v[*k%b)d/v0a0i0xQ+_&XQ-j'uQ-n'zQ-u(TS.S(u-kQ/m*bS2m.T.UR5j2n&k!YOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i&k!SOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iQ(^#`S*b%^/nQ.])Pk1q,v1h1k1n1o4x4y4z4|5P6g6h7^Q(`#`k1p,v1h1k1n1o4x4y4z4|5P6g6h7^l(_#`,v1h1k1n1o4x4y4z4|5P6g6h7^T*b%^/n^UO|}%t&{*i,Z#`$S[_!b!m!v!w!x!y!z!{#O#u#v$Y$p$s&Q&W&s'R'Y'`'e'i'n'v(v(|)q)z+]+c+g,b,c,l,s,t-^.z.}/]1Q1U1`1a1b1d1i4f4p5p9n9o&[$baefi!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$f$g$m$o$z${%W%X%Y%e%r&P&f&j'O'S'U'p'x(x)O)l)n)w)y*T*Z*a*j*w*y+S+U+W+j+m+s-i-l-v-|.V.X.^.`.v.|/Q/R/U/Y/s0U0W0d0f0h0k0r1r1u2Q2^3]3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i9TY%itu%m,g,wl(]#`,v1h1k1n1o4x4y4z4|5P6g6h7^Q8j'TU8k'Z,}-PU9[d%V'r![9]m$W'V)f){*l+h+r,Q/S/W0`8[8]8^8c8d8e8f8v8w8x8y9Q9R9X9f9g9hS9^!c&dQ9_!tQ9`/VU9a%Q*h/e^9b&e&k&v,P,S0w0zT9m%^/n^VO|}%t&{*i,ZQ$S-^!j$T[_!b!m!v!{#O#u#v$Y$p$s&Q&W&s'R'v(v(|)q)z+]+c+g,b,t.z.}/]1Q1U1i4f5p9n9oj$bf$f$g$m$z${'S)l)n.v/R3]9T%p$caei!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%W%X%Y%e%r&P&f&j'O'U'p'x(x)O)w)y*T*Z*a*j*w*y+S+U+W+j+m+s-i-l-v-|.V.X.^.`.|/Q/U/Y/s0U0W0d0f0h0k0r1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iU$rd%V'rY%itu%m,g,wQ'P!tp'W!w!x!y!z'Y'`'e'i'n,c,s1`1a1b1d4pl(]#`,v1h1k1n1o4x4y4z4|5P6g6h7^Q,f'TQ1[,lU8}'Z,}-P![9]m$W'V)f){*l+h+r,Q/S/W0`8[8]8^8c8d8e8f8v8w8x8y9Q9R9X9f9g9hS9^!c&dU9i%Q*h/e^9j&e&k&v,P,S0w0zQ9k/VT9m%^/nx!ROd|}%Q%V%t&e&k&v&{'r*h*i,P,S,Z/e0w0z!t$X[_!b!m!t!v!{#O#u#v$Y$p$s&Q&W&s'R'T'Z'v(v(|)q)z+]+c+g,t,}-P.z.}/V/]1Q1U1i4f5p9n9o%p$iaei!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%W%X%Y%e%r&P&f&j'O'U'p'x(x)O)w)y*T*Z*a*j*w*y+S+U+W+j+m+s-i-l-v-|.V.X.^.`.|/Q/U/Y/s0U0W0d0f0h0k0r1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i#t%Ofmtu#`$W$f$g$m$z${%^%m&d'S'V)f)l)n){*l+h+r,Q,g,v,w.v/R/S/W/n0`1h1k1n1o3]4x4y4z4|5P6g6h7^8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9hQ&b!cn'X!w!x!y!z'Y'`'e'i'n,s1`1a1b1d4pf+}&t+w+y+|0m0n0p0s4V4W6RQ1T,bQ1W,cQ1Z,kQ1],lQ2U-^Q4h1VR6X4ix!ROd|}%Q%V%t&e&k&v&{'r*h*i,P,S,Z/e0w0z!v$X[_!b!m!t!v!{#O#u#v$Y$p$s&Q&W&s'R'T'Z'v(v(|)q)z+]+c+g,b,t,}-P.z.}/V/]1Q1U1i4f5p9n9o%p$iaei!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%W%X%Y%e%r&P&f&j'O'U'p'x(x)O)w)y*T*Z*a*j*w*y+S+U+W+j+m+s-i-l-v-|.V.X.^.`.|/Q/U/Y/s0U0W0d0f0h0k0r1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i#v%Ofmtu!c#`$W$f$g$m$z${%^%m&d'S'V)f)l)n){*l+h+r,Q,g,v,w.v/R/S/W/n0`1h1k1n1o3]4x4y4z4|5P6g6h7^8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9hp'X!w!x!y!z'Y'`'e'i'n,c,s1`1a1b1d4pQ1],lR2U-^^WO|}%t&{*i,Z#`$S[_!b!m!v!w!x!y!z!{#O#u#v$Y$p$s&Q&W&s'R'Y'`'e'i'n'v(v(|)q)z+]+c+g,b,c,l,s,t-^.z.}/]1Q1U1`1a1b1d1i4f4p5p9n9oj$bf$f$g$m$z${'S)l)n.v/R3]9T%p$daei!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%W%X%Y%e%r&P&f&j'O'U'p'x(x)O)w)y*T*Z*a*j*w*y+S+U+W+j+m+s-i-l-v-|.V.X.^.`.|/Q/U/Y/s0U0W0d0f0h0k0r1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iY%itu%m,g,wl(]#`,v1h1k1n1o4x4y4z4|5P6g6h7^Q8j'TU8k'Z,}-P![9]m$W'V)f){*l+h+r,Q/S/W0`8[8]8^8c8d8e8f8v8w8x8y9Q9R9X9f9g9hS9^!c&dQ9_!tQ9`/VU9cd%V'rU9d%Q*h/e^9e&e&k&v,P,S0w0zT9m%^/np#rT$R$a$y%h([8X8Y8Z8_8`8a8b8h8i9lo(y#x)b)i-y7{7|7}8o8p8q8r8s8t8u9Pp#sT$R$a$y%h([8X8Y8Z8_8`8a8b8h8i9lo(z#x)b)i-y7{7|7}8o8p8q8r8s8t8u9P^%Pgh$|%S%T%z8gd%x!R$X$i%O&b'X1T1W1]2UV-z(^(_1qS$wd%VQ*W%QQ-g'rQ0]+cQ3X.}Q3h/eR6y5p#s!QO[_d|}!b!m!t!v!{#O#u#v$Y$p$s%Q%V%t&Q&W&e&k&s&v&{'R'T'Z'r'v(v(|)q)z*h*i+]+c+g,P,S,Z,b,l,t,}-P.z.}/V/]/e0w0z1Q1U1i4f5p9n9o#O^O[_`|}!b!t!v#u$V$Y$[$]$p%t&Q&W&Z&e&k&v&{'R'T'Z(|)g)z*h*i+]+g,P,S,Z,l,t,}-P/V/]0w0z1Q1iS'`!w1aS'e!x1bV'n!z,c1`S'^!w1aS'c!x1bU'l!z,c1`W-S'['_'`4mW-W'a'd'e4nW-c'j'm'n4lS1{-T-US2O-X-YS2Z-d-eQ5Z1|Q5]2PR5c2[S']!w1aS'b!x1bU'k!z,c1`Y-R'['^'_'`4mY-V'a'c'd'e4nY-b'j'l'm'n4lU1z-S-T-UU1}-W-X-YU2Y-c-d-eS5Y1{1|S5[2O2PS5b2Z2[Q6r5ZQ6s5]R6t5cT,{'Z,}!aZO[|}$p%t&Q&W&e&k&v&{'R'T'Z)z*h*i+]+g,P,S,Z,l,t,}/V/]0w0z1QQ$OYR.n)[R)^$Oe.j)Z.g.h.i.l2y2z2{3O5l&j!YOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7ie.j)Z.g.h.i.l2y2z2{3O5lR3P.nd]O|}%t&{'T'Z*i,Z,}!j^[_`!b!t!v#u$V$Y$[$]$p&Q&W&Z&e&k&v'R(|)g)z*h+]+g,P,S,l,t-P/V/]0w0z1Q1iQ%ktT)o$n)p!fbOadeftu|}!t$f$g$m$z${%m%t&{'S'T'Z)l)n*i,Z,g,w,}-P.v/R/V3]9Tf+z&t+w+y+|0m0n0p0s4V4W6Rj1l,v1h1k1n1o4x4y4z4|5P6g6h7^r9Zm$W'V)f*l+h+r,Q0`8[8]8^8c8e8v8x9Qi9p){/S/W8d8f8w8y9R9X9f9g9hv$nc$h$t$x%b'Q)d)k,e,p.t.u/X/v0a0i0x3R3^|%}!X$v%|&Q&R&a(t){*P*R*|.W/R/S/V/W/`3]9S9T9W9XY+Q3T5n8{8|9Un+R&O*S*}+X+Y+b.R/T/a0P2p3[3f9V9Y^0q+{0o0u4U4]6Q7QQ0|,WY3S.y3U8l8m8ze4}1m4t4{5T5U6d6f6o7]7jW)|$p&Q*h/VS,_'R1QR3d/]#sjOadefmtu|}!t$W$f$g$m$z${%m%t&{'S'T'V'Z)f)l)n){*i*l+h+r,Q,Z,g,w,}-P.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9h#Qjadefm!t$W$f$g$m$z${'S'V)f)l)n){*l+h+r,Q.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9h`kO|}%t&{'T*i,ZU%jtu,gQ*s%mS,u'Z,}T1v,w-PW)r$n)p)s.xW+O%}+P+R0ST6i4}6jW)r$n)p)s.xQ+Q%}S0R+P+RQ3r0ST6i4}6j!X&S!X$v%|&Q&R&a(t){*P*R*|.W.y/R/S/V/W/`3U3]8l8m8z9S9T9W9X!U&S$v%|&Q&R&a(t){*P*R*|.W.y/R/S/V/W/`3U3]8l8m8z9S9T9W9XR&T!XdhOade|}%t&{*i,Z#^$|fmtu!t$W$f$g$m$z${%m'S'T'V'Z)f)l)n){*l+h+r,Q,g,w,}-P.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9h&U%Ti!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r&P&e&f&j&k&v'O'U'p'r'x(x)O)w)y*T*Z*a*h*j*w*y+S+U+W+j+m+s,P,S-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iQ&c!cR+e&dj#tT$a$y%h8X8Y8Z8_8`8a8b8h8ii({#x)i7{7|7}8o8p8q8r8s8t8uj#tT$a$y%h8X8Y8Z8_8`8a8b8h8ih({#x)i7{7|7}8o8p8q8r8s8t8uS-x([9lT2h-y9P#^jfmtu!t$W$f$g$m$z${%m'S'T'V'Z)f)l)n){*l+h+r,Q,g,w,}-P.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9hdlOade|}%t&{*i,Z&V!Yi!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r&P&e&f&j&k&v'O'U'p'r'x(x)O)w)y*T*Z*a*h*j*w*y+S+U+W+j+m+s,P,S-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i#^jfmtu!t$W$f$g$m$z${%m'S'T'V'Z)f)l)n){*l+h+r,Q,g,w,}-P.v/R/S/V/W0`3]8[8]8^8c8d8e8f8v8w8x8y9Q9R9T9X9f9g9hdlOade|}%t&{*i,Z&U!Yi!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r&P&e&f&j&k&v'O'U'p'r'x(x)O)w)y*T*Z*a*h*j*w*y+S+U+W+j+m+s,P,S-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7ik1p,v1h1k1n1o4x4y4z4|5P6g6h7^Q/[){R3`/WR/[){Q1t,vS4v1h1mU6`4t4x5QS7V6^6dR7h7Y^#zV!R$c$i$r9i9jQ&n!iS(m#p*hS)S#y*iQ)V#{Y*k%b)d/v0i0xQ-j'uS.S(u-kS/c*T2^Q/m*bS/u*j3wQ1t,vQ2j-|S2m.T.US2r.X3oQ2w.`Q3x0aU4v1h1m1uQ5j2nQ6O4PY6`4t4w4x5Q5RW7V6^6a6d6eU7h7W7Y7ZR7o7iS)S#y*iT2r.X3oZ)Q#y)R*i.X3o^zO|}%t&{*i,ZQ,n'TT,{'Z,}S'T!t,mR1X,dS,_'R1QR4j1XT,_'R1Q^zO|}%t&{*i,ZQ+^&WQ+j&eS+s&k0zW,R&v,P,S0wQ,n'TR1^,l[%cm$W+h+r,Q0`R/w*l^zO|}%t&{*i,ZQ+^&WQ,n'TR1^,l!OqO|}!f%e%t&f&j&v&{*i+m,P,S,Z0d0w3{4R5{6|7P7cS%_k,uS%pw,hQ&U!XQ&w!pU*e%`%j1vQ*n%bS*u%n%oQ+Z&TQ+n&hS.r)d,pS/y*r*sQ/{*tQ3Q.tQ3p/zQ4`0|Q5S1mQ6b4tR7[6d_zO|}%t&{*i,ZQ&|!rQ+^&WR,[&}wrO|}!f%e%t&f&j&{*i+m,Z0d3{4R5{6|7P7c!PqO|}!f%e%t&f&j&v&{*i+m,P,S,Z0d0w3{4R5{6|7P7c!OnO|}!f%e%t&f&j&v&{*i+m,P,S,Z0d0w3{4R5{6|7P7cR&r!l!OqO|}!f%e%t&f&j&v&{*i+m,P,S,Z0d0w3{4R5{6|7P7cR+j&e!OpO|}!f%e%t&f&j&v&{*i+m,P,S,Z0d0w3{4R5{6|7P7cW$ud%V'r0fQ&n!iS(Y#^3oQ+i&eS+t&k0zQ0c+jQ4S0kQ5|4OR6}5yQ&f!dQ&h!eQ&j!gR+m&gR+k&e&b!SOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-v-|.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iR0g+o^zO|}%t&{*i,ZW,R&v,P,S0wT,{'Z,}g+}&t+w+y+|0m0n0p0s4V4W6RT,U&w,V^zO|}%t&{*i,ZT,{'Z,}&j!YOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#n#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-l-v-|.V.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q2^3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iR4c1P^uO|}%t&{*i,ZQ%mtQ,g'TT,w'Z,}S%`k,uS*r%j1vR/z*sQ*c%^R3m/nS%_k,uS%pw,hU*e%`%j1vS*u%n%oS/y*r*sQ/{*tQ3p/zQ5S1mQ6b4tR7[6dbwO|}%t&{'Z*i,Z,}S%nt,gU%ou,w-PQ*t%mR,h'TR,n'T#r!QO[_d|}!b!m!t!v!{#O#u#v$Y$p$s%Q%V%t&Q&W&e&k&s&v&{'R'T'Z'r'v(v(|)q)z*h*i+]+c+g,P,S,Z,b,l,t,}-P.z.}/V/]/e0w0z1Q1U1i4f5p9n9oR2V-^Q'h!yS-_'g'iS2W-`-aR5a2XQ-['fR5_2RR*X%QR3i/e&c!SOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-v-|.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7i$Z#fS$q%R&l&u&x'q'w(W(X(a(b(d(e(f(g(h(i(j(k(l(w(})U)v*V*x+T+f+q,],o-f.Z/P/b/h/r/t/|0T0b0j2`2a2g2i2o2q2u2v3V3b3g3t3}4Q4X5V5W5^5s5u5w5z5}6T6c6k6{7X7a7g7n#w#gS$q%R&l&u&x'w(W(X(a(k(l(w(})U)v*V*x+T+f+q,],o-f.Z/P/b/h/r/t/|0T0b0j2`2a2g2i2o2q2u2v3V3b3g3t3}4Q4X5V5W5^5s5u5w5z5}6T6c6k6{7X7a7g7n#}#jS$q%R&l&u&x'w(W(X(a(d(e(f(k(l(w(})U)v*V*x+T+f+q,],o-f.Z/P/b/h/r/t/|0T0b0j2`2a2g2i2o2q2u2v3V3b3g3t3}4Q4X5V5W5^5s5u5w5z5}6T6c6k6{7X7a7g7n&c!YOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-v-|.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iQ-k'uQ.T(uQ2n.UR6u5e&c!XOadei|}!T!U!f!i!n!q!}#P#[#^#a#e#f#g#h#i#j#k#l#m#p#w#y#{$o%Q%V%W%X%Y%e%r%t&P&e&f&j&k&v&{'O'U'p'r'x(x)O)w)y*T*Z*a*h*i*j*w*y+S+U+W+j+m+s,P,S,Z-i-v-|.X.^.`.|/Q/U/Y/e/s0U0W0d0f0h0k0r0w0z1r1u2Q3a3o3u3w3{4O4P4R4Y4[4w5O5R5y5{6U6a6e6l6n6|7P7W7Z7b7c7iQ#YQR(U#YU$fa$z9T`$sd%Q%V'r+c.}/e5pQ&s!m!Q)j$f$s&s)l)w*R+U.v/`0U0m4V4Y4y6R6g6l7^8[8v8w9Q9R9fS)l$g$mQ)w$oQ*R$vS+U&P/UQ.v)nQ/`*PQ0U+SQ0m+yS4V0n0pQ4Y0rQ4y1kQ6R4WS6g4z4|Q6l5OQ7^6hQ8[8cS8v8]8^S8w9g9hQ9Q8xQ9R8yT9f/S8dQ1e,qU4q1e4r6]S4r1f1gR6]4sQ,}'ZR1w,}`[O|}%t&{'T*i,ZY$U[)z+]+g,t^)z$p&Q'R*h/V/]1QS+]&W,l^+g&e&k&v,P,S0w0zT,t'Z,}Q)Y#}R.c)YQ.l)ZQ2y.gQ2z.hQ2{.iY2|.l2y2z2{5lR5l3OQ)]$OS.o)].pR.p)^!p_O[|}!b!t!v#u$Y$p%t&Q&W&e&k&v&{'R'T'Z(|)z*h*i+]+g,P,S,Z,l,t,}-P/V/]0w0z1Q1iU$Z_$])gU$]`$V&ZR)g$[U$ga$z9Td)m$g)n0n4W4z6h8]8x8y9gQ)n$mQ0n+yQ4W0pQ4z1kQ6h4|Q8]8cQ8x8^Q8y9hT9g/S8dQ)p$nR.w)pQ)s$nQ.x)pT.{)s.xQ5q3XR6z5qU*|%|/S9TS0O*|8zR8z8lQ+P%}S0Q+P0SR0S+RU*^%S*U8gR/k*^Q/^)|R3e/^Q6j4}R7_6jQ5Q1mQ6^4tU6p5Q6^7YR7Y6dW)R#y*i.X3oR._)RU.Y(})S/rR2s.YQ1R,`R4e1R[*m%b%c)d0a0i0xR/x*mQ|OU%s|%t,ZS%t}*iR,Z&{Q,S&vQ0w,PT0y,S0wQ0t+{R4^0tQ,V&wR0{,VS%gs4bR*q%gdtO|}%t&{'T'Z*i,Z,}R%ltQ/o*cR3n/o#t!PO[_d|}!b!m!t!v!{#O#u#v$Y$p$s%Q%V%t&Q&W&e&k&s&v&{'R'T'Z'r'v(v(|)q)z*h*i+]+c+g,P,S,Z,b,l,t,}-P-^.z.}/V/]/e0w0z1Q1U1i4f5p9n9oR%v!PQ2S-[R5`2SQ/f*XR3j/fS*[%R.ZR/i*[S-}(l(mR2k-}W(O#U'y'z-nR-r(OQ5g2cR6w5gT(n#p*h|SO|}!f%e%t&f&j&v&{+m,P,S,Z0d0w3{4R5{6|7P7cj$`ae%W%X)y+W/Q0W3u4[6U6n7bW$qd%V'r0fY%Ri%Y'x(x*aQ%y!TQ%{!UQ&l!iQ&u!nQ&x!qQ'q!}S'w#P*yQ(W#[Q(X#^Q(a#aQ(b#eQ(c#fQ(d#gQ(e#hQ(f#iQ(g#jQ(h#kQ(i#lQ(j#mQ(k#nS(l#p*hQ(w#wQ(}#yQ)U#{Q)v$oQ*V%QQ*x%rS+T&P/UQ+f&eS+q&k0zQ,]'OQ,o'UQ-f'pS.Z)O/sQ/P)wS/b*T2^Q/h*ZQ/r*iQ/t*jQ/|*wS0T+S+UQ0b+jQ0j+sQ2`-iQ2a-lQ2g-vQ2i-|Q2o.VQ2q.XQ2u.^Q2v.`Q3V.|Q3b/YQ3g/eQ3t0UQ3}0hQ4Q0kQ4X0rQ5V1rQ5W1uQ5^2QQ5s3aQ5u3oQ5w3wQ5z4OQ5}4PQ6T4YS6c4w5RQ6k5OQ6{5yS7X6a6eQ7a6lS7g7W7ZR7n7iR*Y%Qd]O|}%t&{'T'Z*i,Z,}!j^[_`!b!t!v#u$V$Y$[$]$p&Q&W&Z&e&k&v'R(|)g)z*h+]+g,P,S,l,t-P/V/]0w0z1Q1i#p$ead!m$f$g$m$o$s$v$z%Q%V&P&s'r)l)n)w*P*R+S+U+c+y.v.}/U/`/e0U0m0n0p0r1k4V4W4Y4y4z4|5O5p6R6g6h6l7^8[8]8^8c8d8v8w8x8y9Q9R9f9g9hQ%ktW)r$n)p)s.xW*{%|*|8l8zW+O%}+P+R0SQ.z)qS3_/S9TS6i4}6jR9o9n``O|}%t&{'T*i,ZQ$V[Q$[_`$vd%Q%V'r+c.}/e5p!^&Z!b!t!v#u$Y$p&Q&W&e&k&v'R'Z(|)z*h+]+g,P,S,l,t,}-P/V/]0w0z1Q1iQ&t!mS'o!{,bQ'u#OS(u#v'vQ*P$sQ+w&sQ.U(vQ.y)qQ3U.zQ4g1UQ6W4fQ9S9nR9W9oQ'[!wQ'a!xQ'g!yS'j!z,cQ,q'YQ-U'`Q-Y'eQ-a'iQ-e'nQ1_,lQ1g,sQ4l1`Q4m1aQ4n1bQ4o1dR6[4pR,r'YT,|'Z,}R$PYe.k)Z.g.h.i.l2y2z2{3O5ldmO|}%t&W&{'T*i,Z,lS$W[+]Q&a!bQ'S!tQ'V!vQ(t#uQ)f$Y^){$p&Q'R*h/V/]1QQ+h&eQ+r&kY,Q&v,P,S0w0zS,v'Z,}Q.W(|Q/R)zQ0`+gS1h,t-PR4x1id]O|}%t&{'T'Z*i,Z,}!j^[_`!b!t!v#u$V$Y$[$]$p&Q&W&Z&e&k&v'R(|)g)z*h+]+g,P,S,l,t-P/V/]0w0z1Q1iR%ktQ1m,vQ4t1hQ4{1kQ5T1nQ5U1oQ6d4xU6f4y4z4|Q6o5PS7]6g6hR7j7^X)}$p&Q*h/VpcOtu|}%m%t&{'T'Z*i,Z,g,w,}-P[$ha$z/S8c8d9TU$td${/V^$xef/W3]8e8f9XQ%bmQ'Q!tQ)d$Wb)k$f$g$m8[8]8^9f9g9hQ,e'SQ,p'VQ.t)f[.u)l)n8v8w8x8yQ/X){Q/v*lQ0a+hQ0i+rS0x,Q0`U3R.v9Q9RR3^/RR3Y.}Q&O!XQ*S$vU*}%|/S9TS+X&Q/VW+Y&R/W3]9XQ+b&aQ.R(tQ/T){S/a*P*RQ0P*|Q2p.WQ3T.yQ3[/RQ3f/`Q5n3UQ8{8lQ8|8mQ9U8zQ9V9SR9Y9WX%Ui$}/U/sT)T#y*iR,a'RQ,`'RR4d1Q^zO|}%t&{*i,ZR,n'TW%dm+h+r,QT)e$W0`_{O|}%t&{*i,Z^zO|}%t&{*i,ZQ&i!fQ*p%eQ+l&fQ+p&jQ0e+mQ3z0dQ5x3{Q6P4RQ7O5{Q7d6|Q7e7PR7l7cvrO|}!f%e%t&f&j&{*i+m,Z0d3{4R5{6|7P7cX,R&v,P,S0wQ,O&tR0l+wS+{&t+wQ0o+yQ0u+|U4U0m0n0pQ4]0sS6Q4V4WR7Q6R^vO|}%t&{*i,ZQ,i'TT,x'Z,}R*d%^^xO|}%t&{*i,ZQ,j'TT,y'Z,}^yO|}%t&{*i,ZT,z'Z,}Q-`'gR2X-aR-]'fR's!}[%[i%Y'x(x)O/sR/l*aQ(R#US-m'y'zR2b-nR-q'{R2d-o",nodeNames:"\u26A0 RawString > MacroName LineComment BlockComment PreprocDirective #include String EscapeSequence SystemLibString Identifier ArgumentList ( ConditionalExpression AssignmentExpression CallExpression PrimitiveType FieldExpression FieldIdentifier DestructorName TemplateMethod ScopedFieldIdentifier NamespaceIdentifier TemplateType TypeIdentifier ScopedTypeIdentifier ScopedNamespaceIdentifier :: NamespaceIdentifier TypeIdentifier TemplateArgumentList < TypeDescriptor const volatile restrict _Atomic mutable constexpr StructSpecifier struct MsDeclspecModifier __declspec ) VirtualSpecifier BaseClassClause Access , FieldDeclarationList { FieldDeclaration Attribute AttributeName Identifier AttributeArgs } [ ] UpdateOp ArithOp ArithOp ArithOp LogicOp BitOp BitOp BitOp CompareOp CompareOp CompareOp > CompareOp BitOp UpdateOp Number CharLiteral AttributeArgs virtual extern static register inline AttributeSpecifier __attribute__ PointerDeclarator MsBasedModifier __based MsPointerModifier FunctionDeclarator ParameterList ParameterDeclaration PointerDeclarator FunctionDeclarator Noexcept noexcept ThrowSpecifier throw TrailingReturnType AbstractPointerDeclarator AbstractFunctionDeclarator AbstractArrayDeclarator AbstractParenthesizedDeclarator AbstractReferenceDeclarator ArrayDeclarator ParenthesizedDeclarator ReferenceDeclarator ScopedIdentifier Identifier OperatorName operator ArithOp BitOp CompareOp LogicOp new delete TemplateFunction OperatorName operator StructuredBindingDeclarator OptionalParameterDeclaration VariadicParameterDeclaration VariadicDeclarator ReferenceDeclarator ArrayDeclarator ParenthesizedDeclarator ReferenceDeclarator BitfieldClause InitializerList InitializerPair SubscriptDesignator FieldDesignator TemplateDeclaration template TemplateParameterList TypeParameterDeclaration typename class OptionalTypeParameterDeclaration VariadicTypeParameterDeclaration TemplateTemplateParameterDeclaration AliasDeclaration using Declaration InitDeclarator FriendDeclaration friend FunctionDefinition MsCallModifier CompoundStatement LinkageSpecification DeclarationList CaseStatement case default LabeledStatement StatementIdentifier ExpressionStatement CommaExpression IfStatement if ConditionClause Declaration else SwitchStatement switch DoStatement do while ParenthesizedExpression WhileStatement ForStatement for ReturnStatement return BreakStatement break ContinueStatement continue GotoStatement goto TypeDefinition typedef PointerDeclarator FunctionDeclarator ArrayDeclarator ParenthesizedDeclarator ForRangeLoop TryStatement try CatchClause catch ThrowStatement NamespaceDefinition namespace UsingDeclaration StaticAssertDeclaration static_assert ConcatenatedString TemplateInstantiation FunctionDefinition ExplicitFunctionSpecifier explicit FieldInitializerList FieldInitializer DefaultMethodClause DeleteMethodClause FunctionDefinition OperatorCast Declaration union FunctionDefinition FunctionDefinition FunctionDefinition FunctionDefinition Declaration FunctionDefinition Declaration AccessSpecifier UnionSpecifier EnumSpecifier enum SizedTypeSpecifier TypeSize EnumeratorList Enumerator ClassSpecifier DependentType Decltype decltype auto ParameterPackExpansion ParameterPackExpansion FieldIdentifier PointerExpression SubscriptExpression BinaryExpression ArithOp LogicOp BitOp UnaryExpression LogicOp BitOp UpdateExpression CastExpression SizeofExpression sizeof CompoundLiteralExpression True False NULL NewExpression new NewDeclarator DeleteExpression delete LambdaExpression LambdaCaptureSpecifier ParameterPackExpansion nullptr this #define PreprocArg #if #ifdef #ifndef #else #endif #elif PreprocDirectiveName Macro Program",maxTerm:380,nodeProps:[["group",-31,1,8,11,14,15,16,18,74,75,106,116,117,169,198,234,235,236,240,243,244,245,247,248,249,250,251,254,256,258,259,260,"Expression",-12,17,24,25,26,40,219,220,222,226,227,228,230,"Type",-16,149,152,155,157,159,164,166,170,171,173,175,177,179,187,188,192,"Statement"]],propSources:[Vn],skippedNodes:[0,3,4,5,6,7,10,261,262,263,264,265,266,267,268,269,270,307,308],repeatNodeCount:37,tokenData:"%0W,TR!SOX$_XY'gYZ,cZ]$_]^)e^p$_pq'gqr,yrs.mst/[tu$_uv!/uvw!1gwx!3^xy!3{yz!4pz{!5e{|!6b|}!8Y}!O!8}!O!P!:x!P!Q!Nr!Q!R#2X!R![#Ew![!]$.t!]!^$0d!^!_$1X!_!`$;|!`!a$<w!a!b$?k!b!c$_!c!n$@`!n!o$Aq!o!w$@`!w!x$Aq!x!}$@`!}#O$D[#O#P$Ew#P#Q%$t#Q#R%&a#R#S$@`#S#T$_#T#i$@`#i#j%'^#j#o$@`#o#p%(u#p#q%)j#q#r%+d#r#s%,X#s~$_$O$hW(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_#|%XU(cW&p#tOY%QZw%Qwx%kx#O%Q#O#P%|#P~%Q#t%pS&p#tOY%kZ#O%k#O#P%|#P~%k#t&RV&p#tOY%kYZ%kZ]%k]^&h^#O%k#O#P%|#P~%k#t&mT&p#tOY%kYZ%kZ#O%k#O#P%|#P~%k#v'TU'vQ&p#tOY&|Zr&|rs%ks#O&|#O#P%|#P~&|,T't^(cW'vQ't'q&p#t)[%WOX$_XY'gYZ(pZ]$_]^)e^p$_pq'gqr$_rs%Qsw$_wx&|x#O$_#O#P*l#P~$_'q(uT't'qXY(pYZ(p]^(ppq(p#O#P)U'q)XQYZ(p]^)_'q)bPYZ(p*q)p^(cW'vQ't'q&p#tOX$_XY)eYZ(pZ]$_]^)e^p$_pq)eqr$_rs%Qsw$_wx&|x#O$_#O#P*l#P~$_*g*qV&p#tOY%kYZ+WZ]%k]^+}^#O%k#O#P%|#P~%k*g+_Y't'q&p#tOX%kXY+WYZ(pZ]%k]^+W^p%kpq+Wq#O%k#O#P*l#P~%k*g,ST&p#tOY%kYZ+WZ#O%k#O#P%|#P~%k+y,jT)X%W't'qXY(pYZ(p]^(ppq(p#O#P)U*m-WY#ep&ZP(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`-v!`#O$_#O#P%|#P~$_*m.TW#dp!e&{(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_+_.xU(cW'wQ'u(_&p#tOY%QZw%Qwx%kx#O%Q#O#P%|#P~%Q*q/ed(cW'vQ&p#tOX$_XY/[Zp$_pq/[qr$_rs%Qsw$_wx&|x!c$_!c!}0s!}#O$_#O#P%|#P#T$_#T#W0s#W#X2Q#X#Y:d#Y#]0s#]#^Hj#^#o0s#o~$_*q1O`(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*q2]b(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#Y3e#Y#o0s#o~$_*q3pb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#Z4x#Z#o0s#o~$_*q5Tb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#]0s#]#^6]#^#o0s#o~$_*q6hb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#b0s#b#c7p#c#o0s#o~$_*q7{b(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#Y9T#Y#o0s#o~$_*q9b`(cW'vQ&o'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*q:od(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#`0s#`#a;}#a#b0s#b#cCO#c#o0s#o~$_*q<Yd(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#]0s#]#^=h#^#g0s#g#h@[#h#o0s#o~$_*q=sb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#Z>{#Z#o0s#o~$_*q?Y`(cW'vQ&p#t&v'q&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*q@gb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#YAo#Y#o0s#o~$_*qA|`(cW'vQ&t'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*qCZb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#W0s#W#XDc#X#o0s#o~$_*qDnb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#]0s#]#^Ev#^#o0s#o~$_*qFRb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#ZGZ#Z#o0s#o~$_*qGh`(cW'vQ&p#t&u'q&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*qHud(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#ZJT#Z#b0s#b#c!'c#c#o0s#o~$_*qJbd(cW'vQ&q'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#W0s#W#XKp#X#b0s#b#c! w#c#o0s#o~$_*qK{b(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#YMT#Y#o0s#o~$_*qM`b(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#ZNh#Z#o0s#o~$_*qNu`(cW'vQ&r'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*q!!Sb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#W0s#W#X!#[#X#o0s#o~$_*q!#gb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#Y!$o#Y#o0s#o~$_*q!$zb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#Y0s#Y#Z!&S#Z#o0s#o~$_*q!&a`(cW'vQ&s'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*q!'nb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#V0s#V#W!(v#W#o0s#o~$_*q!)Rb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#`0s#`#a!*Z#a#o0s#o~$_*q!*fb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#i0s#i#j!+n#j#o0s#o~$_*q!+yb(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#W0s#W#X!-R#X#o0s#o~$_*q!-^b(cW'vQ&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#X0s#X#Y!.f#Y#o0s#o~$_*q!.s`(cW'vQV'q&p#t&w'qOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![0s![!c$_!c!}0s!}#O$_#O#P%|#P#R$_#R#S0s#S#T$_#T#o0s#o~$_*m!0SY(cW'vQ#bp!`&{&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`!0r!`#O$_#O#P%|#P~$_*m!0}W!k'm(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m!1tZ(`&{(cW'vQ#cp&p#tOY$_Zr$_rs%Qsv$_vw!2gwx&|x!_$_!_!`!0r!`#O$_#O#P%|#P~$_*m!2tW(_&{#ep(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_)w!3iU(dS'vQ(b&{&p#tOY&|Zr&|rs%ks#O&|#O#P%|#P~&|,T!4WW(cW'vQ]+y&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_$a!4{W|a(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m!5rY(]&{(cW'vQ#bp&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`!0r!`#O$_#O#P%|#P~$_*m!6o[(cW'vQ#bp!^&{&p#tOY$_Zr$_rs%Qsw$_wx&|x{$_{|!7e|!_$_!_!`!0r!`#O$_#O#P%|#P~$_*m!7pW(cW!]'m'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*P!8eW!Q'P(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m!9[](cW'vQ#bp!^&{&p#tOY$_Zr$_rs%Qsw$_wx&|x}$_}!O!7e!O!_$_!_!`!0r!`!a!:T!a#O$_#O#P%|#P~$_*m!:`W(O'm(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*P!;T[(cW'vQ&p#t'}&{OY$_Zr$_rs%Qsw$_wx&|x!O$_!O!P!;y!P!Q$_!Q![!=g![#O$_#O#P%|#P~$_*P!<SY(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!O$_!O!P!<r!P#O$_#O#P%|#P~$_*P!<}W(W'P(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_){!=rl(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx!?jx!Q$_!Q![!=g![!g$_!g!h!HY!h!i!MX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#X$_#X#Y!HY#Y#Z!MX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_)s!?qW'vQ&p#tOY&|Zr&|rs%ks!Q&|!Q![!@Z![#O&|#O#P%|#P~&|)s!@dl'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx!?jx!Q&|!Q![!@Z![!g&|!g!h!B[!h!i!Fw!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#X&|#X#Y!B[#Y#Z!Fw#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|)s!Bej'vQ!l&{&p#tOY&|Zr&|rs%ks{&|{|!DV|}&|}!O!DV!O!Q&|!Q![!ES![!c&|!c!h!ES!h!i!ES!i!n&|!n!o!Fw!o!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#Y!ES#Y#Z!ES#Z#`&|#`#a!Fw#a#i&|#i#j!Fw#j~&|)s!D^['vQ&p#tOY&|Zr&|rs%ks!Q&|!Q![!ES![!c&|!c!i!ES!i#O&|#O#P%|#P#T&|#T#Z!ES#Z~&|)s!E]h'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx!DVx!Q&|!Q![!ES![!c&|!c!h!ES!h!i!ES!i!n&|!n!o!Fw!o!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#Y!ES#Y#Z!ES#Z#`&|#`#a!Fw#a#i&|#i#j!Fw#j~&|)s!GQb'vQ!l&{&p#tOY&|Zr&|rs%ks!h&|!h!i!Fw!i!n&|!n!o!Fw!o!w&|!w!x!Fw!x#O&|#O#P%|#P#Y&|#Y#Z!Fw#Z#`&|#`#a!Fw#a#i&|#i#j!Fw#j~&|){!Hel(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx&|x{$_{|!J]|}$_}!O!J]!O!Q$_!Q![!Kb![!c$_!c!h!Kb!h!i!Kb!i!n$_!n!o!MX!o!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#Y!Kb#Y#Z!Kb#Z#`$_#`#a!MX#a#i$_#i#j!MX#j~$_){!Jf^(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![!Kb![!c$_!c!i!Kb!i#O$_#O#P%|#P#T$_#T#Z!Kb#Z~$_){!Kmh(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx!DVx!Q$_!Q![!Kb![!c$_!c!h!Kb!h!i!Kb!i!n$_!n!o!MX!o!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#Y!Kb#Y#Z!Kb#Z#`$_#`#a!MX#a#i$_#i#j!MX#j~$_){!Mdd(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx&|x!h$_!h!i!MX!i!n$_!n!o!MX!o!w$_!w!x!MX!x#O$_#O#P%|#P#Y$_#Y#Z!MX#Z#`$_#`#a!MX#a#i$_#i#j!MX#j~$_,T# P^(cW'vQ#bp!`&{&p#tOY$_Zr$_rs%Qsw$_wx&|xz$_z{# {{!P$_!P!Q#,r!Q!_$_!_!`!0r!`#O$_#O#P%|#P~$_,T#!UZ(cW'vQ&p#tOY# {YZ#!wZr# {rs##lsw# {wx#(rxz# {z{#*{{#O# {#O#P#&P#P~# {)T#!zROz#!wz{##T{~#!w)T##WTOz#!wz{##T{!P#!w!P!Q##g!Q~#!w)T##lOT)T,R##sX(cW&p#tOY##lYZ#!wZw##lwx#$`xz##lz{#']{#O##l#O#P#&P#P~##l+y#$eV&p#tOY#$`YZ#!wZz#$`z{#$z{#O#$`#O#P#&P#P~#$`+y#%PX&p#tOY#$`YZ#!wZz#$`z{#$z{!P#$`!P!Q#%l!Q#O#$`#O#P#&P#P~#$`+y#%sST)T&p#tOY%kZ#O%k#O#P%|#P~%k+y#&UX&p#tOY#$`YZ#$`Z]#$`]^#&q^z#$`z{#$z{#O#$`#O#P#&P#P~#$`+y#&vV&p#tOY#$`YZ#$`Zz#$`z{#$z{#O#$`#O#P#&P#P~#$`,R#'dZ(cW&p#tOY##lYZ#!wZw##lwx#$`xz##lz{#']{!P##l!P!Q#(V!Q#O##l#O#P#&P#P~##l,R#(`U(cWT)T&p#tOY%QZw%Qwx%kx#O%Q#O#P%|#P~%Q+{#(yX'vQ&p#tOY#(rYZ#!wZr#(rrs#$`sz#(rz{#)f{#O#(r#O#P#&P#P~#(r+{#)mZ'vQ&p#tOY#(rYZ#!wZr#(rrs#$`sz#(rz{#)f{!P#(r!P!Q#*`!Q#O#(r#O#P#&P#P~#(r+{#*iU'vQT)T&p#tOY&|Zr&|rs%ks#O&|#O#P%|#P~&|,T#+U](cW'vQ&p#tOY# {YZ#!wZr# {rs##lsw# {wx#(rxz# {z{#*{{!P# {!P!Q#+}!Q#O# {#O#P#&P#P~# {,T#,YW(cW'vQT)T&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_,T#,}W(cW'vQS)T&p#tOY#,rZr#,rrs#-gsw#,rwx#1lx#O#,r#O#P#.g#P~#,r,R#-pU(cWS)T&p#tOY#-gZw#-gwx#.Sx#O#-g#O#P#.g#P~#-g+y#.ZSS)T&p#tOY#.SZ#O#.S#O#P#.g#P~#.S+y#.nVS)T&p#tOY#.SYZ%kZ]#.S]^#/T^#O#.S#O#P#/k#P~#.S+y#/[TS)T&p#tOY#.SYZ%kZ#O#.S#O#P#.g#P~#.S+y#/rZS)T&p#tOY#.SYZ%kZ]#.S]^#/T^#O#.S#O#P#/k#P#b#.S#b#c#.S#c#f#.S#f#g#0e#g~#.S+y#0lSS)T&p#tOY#.SZ#O#.S#O#P#0x#P~#.S+y#1PXS)T&p#tOY#.SYZ%kZ]#.S]^#/T^#O#.S#O#P#/k#P#b#.S#b#c#.S#c~#.S+{#1uU'vQS)T&p#tOY#1lZr#1lrs#.Ss#O#1l#O#P#.g#P~#1l){#2dr(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx#4nx!O$_!O!P#?O!P!Q$_!Q![#Ew![!g$_!g!h!HY!h!i!MX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#U$_#U#V#HQ#V#X$_#X#Y!HY#Y#Z!MX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j#l$_#l#m$*y#m~$_)s#4uW'vQ&p#tOY&|Zr&|rs%ks!Q&|!Q![#5_![#O&|#O#P%|#P~&|)s#5hn'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx#4nx!O&|!O!P#7f!P!Q&|!Q![#5_![!g&|!g!h!B[!h!i!Fw!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#X&|#X#Y!B[#Y#Z!Fw#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|)s#7ol'vQ!l&{&p#tOY&|Zr&|rs%ks!Q&|!Q![#9g![!c&|!c!g#9g!g!h#<k!h!i#9g!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#X#9g#X#Y#<k#Y#Z#9g#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|)s#9pn'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx#;nx!Q&|!Q![#9g![!c&|!c!g#9g!g!h#<k!h!i#9g!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#X#9g#X#Y#<k#Y#Z#9g#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|)s#;u['vQ&p#tOY&|Zr&|rs%ks!Q&|!Q![#9g![!c&|!c!i#9g!i#O&|#O#P%|#P#T&|#T#Z#9g#Z~&|)s#<tr'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx#;nx{&|{|!DV|}&|}!O!DV!O!Q&|!Q![#9g![!c&|!c!g#9g!g!h#<k!h!i#9g!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#X#9g#X#Y#<k#Y#Z#9g#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|){#?Zn(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![#AX![!c$_!c!g#AX!g!h#Cb!h!i#AX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#X#AX#X#Y#Cb#Y#Z#AX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_){#Adn(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx#;nx!Q$_!Q![#AX![!c$_!c!g#AX!g!h#Cb!h!i#AX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#X#AX#X#Y#Cb#Y#Z#AX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_){#Cmr(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx#;nx{$_{|!J]|}$_}!O!J]!O!Q$_!Q![#AX![!c$_!c!g#AX!g!h#Cb!h!i#AX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#X#AX#X#Y#Cb#Y#Z#AX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_){#FSn(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx#4nx!O$_!O!P#?O!P!Q$_!Q![#Ew![!g$_!g!h!HY!h!i!MX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#X$_#X#Y!HY#Y#Z!MX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_){#HZ](cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!O$_!O!P#IS!P!Q$_!Q!R#I{!R![#Ew![#O$_#O#P%|#P~$_){#I]Y(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![!=g![#O$_#O#P%|#P~$_){#JWr(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx#4nx!O$_!O!P#?O!P!Q$_!Q![#Ew![!g$_!g!h!HY!h!i!MX!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#U$_#U#V#Lb#V#X$_#X#Y!HY#Y#Z!MX#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j#l$_#l#m#MZ#m~$_){#LkY(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![#Ew![#O$_#O#P%|#P~$_){#Md^(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![#N`![!c$_!c!i#N`!i#O$_#O#P%|#P#T$_#T#Z#N`#Z~$_){#Nkp(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx$!ox!O$_!O!P#?O!P!Q$_!Q![#N`![!c$_!c!g#N`!g!h$(a!h!i#N`!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#X#N`#X#Y$(a#Y#Z#N`#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_)s$!v['vQ&p#tOY&|Zr&|rs%ks!Q&|!Q![$#l![!c&|!c!i$#l!i#O&|#O#P%|#P#T&|#T#Z$#l#Z~&|)s$#up'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx$!ox!O&|!O!P#7f!P!Q&|!Q![$#l![!c&|!c!g$#l!g!h$%y!h!i$#l!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#X$#l#X#Y$%y#Y#Z$#l#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|)s$&Ss'vQ!l&{&p#tOY&|Zr&|rs%ksw&|wx$!ox{&|{|!DV|}&|}!O!DV!O!P#7f!P!Q&|!Q![$#l![!c&|!c!g$#l!g!h$%y!h!i$#l!i!n&|!n!o!Fw!o!r&|!r!s!B[!s!w&|!w!x!Fw!x#O&|#O#P%|#P#T&|#T#X$#l#X#Y$%y#Y#Z$#l#Z#`&|#`#a!Fw#a#d&|#d#e!B[#e#i&|#i#j!Fw#j~&|){$(ls(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx$!ox{$_{|!J]|}$_}!O!J]!O!P#?O!P!Q$_!Q![#N`![!c$_!c!g#N`!g!h$(a!h!i#N`!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#X#N`#X#Y$(a#Y#Z#N`#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j~$_){$+Sa(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!O$_!O!P#IS!P!Q$_!Q!R$,X!R![#N`![!c$_!c!i#N`!i#O$_#O#P%|#P#T$_#T#Z#N`#Z~$_){$,dt(cW'vQ!l&{&p#tOY$_Zr$_rs%Qsw$_wx$!ox!O$_!O!P#?O!P!Q$_!Q![#N`![!c$_!c!g#N`!g!h$(a!h!i#N`!i!n$_!n!o!MX!o!r$_!r!s!HY!s!w$_!w!x!MX!x#O$_#O#P%|#P#T$_#T#U#N`#U#V#N`#V#X#N`#X#Y$(a#Y#Z#N`#Z#`$_#`#a!MX#a#d$_#d#e!HY#e#i$_#i#j!MX#j#l$_#l#m#MZ#m~$_*q$/PY'|&{(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x![$_![!]$/o!]#O$_#O#P%|#P~$_*q$/zWl'q(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_){$0oW(a&{(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_,P$1f[p&{#dp(cW'vQ&p#tOY$2[Zr$2[rs$3Tsw$2[wx$7Tx!^$2[!^!_$9U!_!`$;P!`!a$8a!a#O$2[#O#P$4p#P~$2[%b$2eY(cW'vQ&p#tOY$2[Zr$2[rs$3Tsw$2[wx$7Tx!`$2[!`!a$8a!a#O$2[#O#P$4p#P~$2[%`$3[W(cW&p#tOY$3TZw$3Twx$3tx!`$3T!`!a$6h!a#O$3T#O#P$4p#P~$3T%W$3yU&p#tOY$3tZ!`$3t!`!a$4]!a#O$3t#O#P$4p#P~$3t%W$4dSY!b&p#tOY%kZ#O%k#O#P%|#P~%k%W$4uV&p#tOY$3tYZ$3tZ]$3t]^$5[^#O$3t#O#P$5v#P~$3t%W$5aV&p#tOY$3tYZ%kZ!`$3t!`!a$4]!a#O$3t#O#P$4p#P~$3t%W$5{X&p#tOY$3tYZ%kZ]$3t]^$5[^!`$3t!`!a$4]!a#O$3t#O#P$4p#P~$3t%`$6qUY!b(cW&p#tOY%QZw%Qwx%kx#O%Q#O#P%|#P~%Q%Y$7[W'vQ&p#tOY$7TZr$7Trs$3ts!`$7T!`!a$7t!a#O$7T#O#P$4p#P~$7T%Y$7}UY!b'vQ&p#tOY&|Zr&|rs%ks#O&|#O#P%|#P~&|%b$8lWY!b(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_,P$9cZ(cW'vQ#cp!j&{&p#tOY$2[Zr$2[rs$3Tsw$2[wx$7Tx!_$2[!_!`$:U!`!a$8a!a#O$2[#O#P$4p#P~$2[,P$:aY!k'm(cW'vQ&p#tOY$2[Zr$2[rs$3Tsw$2[wx$7Tx!`$2[!`!a$8a!a#O$2[#O#P$4p#P~$2[,P$;^Y#dp!f&{(cW'vQ&p#tOY$2[Zr$2[rs$3Tsw$2[wx$7Tx!`$2[!`!a$8a!a#O$2[#O#P$4p#P~$2[*m$<XY(mq(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`-v!`#O$_#O#P%|#P~$_*m$=UZ#dp(cW'vQ!h&{&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`$=w!`!a$>n!a#O$_#O#P%|#P~$_*m$>UW#dp!f&{(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m$>{Y(cW'vQ#cp!j&{&p#tOY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`!0r!`#O$_#O#P%|#P~$_$P$?vW'{P(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_,T$@o`(cW(PS'vQ!W&z'x#T&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![$@`![!c$_!c!}$@`!}#O$_#O#P%|#P#R$_#R#S$@`#S#T$_#T#o$@`#o~$_,T$BQ`(cW(PS'vQ!W&z'x#T&p#tOY$_Zr$_rs$CSsw$_wx$Cox!Q$_!Q![$@`![!c$_!c!}$@`!}#O$_#O#P%|#P#R$_#R#S$@`#S#T$_#T#o$@`#o~$_+]$C]U(cW'u(_&p#tOY%QZw%Qwx%kx#O%Q#O#P%|#P~%Q)s$CxU'vQ(b&{&p#tOY&|Zr&|rs%ks#O&|#O#P%|#P~&|*m$DgX!Z'm(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x!}$_!}#O$ES#O#P%|#P~$_$P$E_W(YP(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*q$E|_&p#tOY$F{YZ$G`Z]$F{]^$HX^!Q$F{!Q![$Ho![!w$F{!w!x$Is!x#O$F{#O#P% w#P#i$F{#i#j$Lu#j#l$F{#l#m%!e#m~$F{$O$GSSXY&p#tOY%kZ#O%k#O#P%|#P~%k*q$GiYXY't'q&p#tOX%kXY+WYZ(pZ]%k]^+W^p%kpq+Wq#O%k#O#P*l#P~%k*q$H`TXY&p#tOY%kYZ+WZ#O%k#O#P%|#P~%k$O$HvUXY&p#tOY%kZ!Q%k!Q![$IY![#O%k#O#P%|#P~%k$O$IaUXY&p#tOY%kZ!Q%k!Q![$F{![#O%k#O#P%|#P~%k$O$IxY&p#tOY%kZ!Q%k!Q![$Jh![!c%k!c!i$Jh!i#O%k#O#P%|#P#T%k#T#Z$Jh#Z~%k$O$JmY&p#tOY%kZ!Q%k!Q![$K]![!c%k!c!i$K]!i#O%k#O#P%|#P#T%k#T#Z$K]#Z~%k$O$KbY&p#tOY%kZ!Q%k!Q![$LQ![!c%k!c!i$LQ!i#O%k#O#P%|#P#T%k#T#Z$LQ#Z~%k$O$LVY&p#tOY%kZ!Q%k!Q![$Lu![!c%k!c!i$Lu!i#O%k#O#P%|#P#T%k#T#Z$Lu#Z~%k$O$LzY&p#tOY%kZ!Q%k!Q![$Mj![!c%k!c!i$Mj!i#O%k#O#P%|#P#T%k#T#Z$Mj#Z~%k$O$MoY&p#tOY%kZ!Q%k!Q![$N_![!c%k!c!i$N_!i#O%k#O#P%|#P#T%k#T#Z$N_#Z~%k$O$NdY&p#tOY%kZ!Q%k!Q![% S![!c%k!c!i% S!i#O%k#O#P%|#P#T%k#T#Z% S#Z~%k$O% XY&p#tOY%kZ!Q%k!Q![$F{![!c%k!c!i$F{!i#O%k#O#P%|#P#T%k#T#Z$F{#Z~%k$O%!OVXY&p#tOY%kYZ%kZ]%k]^&h^#O%k#O#P%|#P~%k$O%!jY&p#tOY%kZ!Q%k!Q![%#Y![!c%k!c!i%#Y!i#O%k#O#P%|#P#T%k#T#Z%#Y#Z~%k$O%#_Y&p#tOY%kZ!Q%k!Q![%#}![!c%k!c!i%#}!i#O%k#O#P%|#P#T%k#T#Z%#}#Z~%k$O%$UYXY&p#tOY%kZ!Q%k!Q![%#}![!c%k!c!i%#}!i#O%k#O#P%|#P#T%k#T#Z%#}#Z~%k*P%%PX![&k(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P#Q%%l#Q~$_$d%%wW(ed(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m%&nY(cW'vQ#cp&p#t!c&{OY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`!0r!`#O$_#O#P%|#P~$_,T%'mb(cW(PS'vQ!W&z'x#T&p#tOY$_Zr$_rs$CSsw$_wx$Cox!Q$_!Q!Y$@`!Y!Z$Aq!Z![$@`![!c$_!c!}$@`!}#O$_#O#P%|#P#R$_#R#S$@`#S#T$_#T#o$@`#o~$_){%)QW!S&{(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_*m%)w[(cW'vQ#cp&p#t!b&{OY$_Zr$_rs%Qsw$_wx&|x!_$_!_!`!0r!`#O$_#O#P%|#P#p$_#p#q%*m#q~$_*m%*zW(^&{#ep(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_$a%+oW!Ya(cW'vQ&p#tOY$_Zr$_rs%Qsw$_wx&|x#O$_#O#P%|#P~$_$u%,fa(cW'vQ#cp&[P&p#tOX$_XY%-kZp$_pq%-kqr$_rs%Qsw$_wx&|x!c$_!c!}%.y!}#O$_#O#P%|#P#R$_#R#S%.y#S#T$_#T#o%.y#o~$_$T%-ta(cW'vQ&p#tOX$_XY%-kZp$_pq%-kqr$_rs%Qsw$_wx&|x!c$_!c!}%.y!}#O$_#O#P%|#P#R$_#R#S%.y#S#T$_#T#o%.y#o~$_$T%/U`(cW'vQdT&p#tOY$_Zr$_rs%Qsw$_wx&|x!Q$_!Q![%.y![!c$_!c!}%.y!}#O$_#O#P%|#P#R$_#R#S%.y#S#T$_#T#o%.y#o~$_",tokenizers:[Cn,An,0,1,2,3,4,5,6,7,8],topRules:{Program:[0,271]},dynamicPrecedences:{84:1,91:1,98:1,104:-10,105:1,119:-1,125:-10,126:1,183:1,186:-10,227:-1,231:2,232:2,270:-10,325:3,369:1,370:3,371:1,372:1},specialized:[{term:316,get:r=>Gn[r]||-1},{term:32,get:r=>Fn[r]||-1},{term:70,get:r=>In[r]||-1},{term:323,get:r=>Mn[r]||-1}],tokenPrec:21623});var N=E(hn(),1),Jt=N.LRLanguage.define({parser:Bt.configure({props:[N.indentNodeProp.add({IfStatement:(0,N.continuedIndent)({except:/^\s*({|else\b)/}),TryStatement:(0,N.continuedIndent)({except:/^\s*({|catch)\b/}),LabeledStatement:N.flatIndent,CaseStatement:r=>r.baseIndent+r.unit,BlockComment:()=>-1,CompoundStatement:(0,N.delimitedIndent)({closing:"}"}),Statement:(0,N.continuedIndent)({except:/^{/})}),N.foldNodeProp.add({"DeclarationList CompoundStatement EnumeratorList FieldDeclarationList InitializerList":N.foldInside,BlockComment(r){return{from:r.from+2,to:r.to-2}}})]}),languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\})$/}});function dt(){return new N.LanguageSupport(Jt)}var Qt=E(tt());var mt={};me(mt,{default:()=>Ue});var Ue=[{bin:0,count:397037},{bin:1e-4,count:0},{bin:.00013824676957356998,count:0},{bin:.00019112169297527736,count:0},{bin:.0002642195664926376,count:0},{bin:.0003652750152573618,count:0},{bin:.0005049809086526676,count:0},{bin:.0006981197931755733,count:0},{bin:.0009651280618189171,count:0},{bin:.001334258367712659,count:2},{bin:.0018445690911277957,count:176},{bin:.002550057181036738,count:1118},{bin:.0035253716750621297,count:94},{bin:.004873712456235047,count:477},{bin:.006737750029049643,count:758},{bin:.009314721757103394,count:928},{bin:.012877301923961904,count:1375},{bin:.01780245391811251,count:1357},{bin:.02461131744661398,count:1584},{bin:.034024351319440226,count:1939},{bin:.04703756656748844,count:1624},{bin:.06502791626557027,count:1369},{bin:.08989899355815696,count:1732},{bin:.12428245447330365,count:2321},{bin:.1718164784560851,count:1635},{bin:.23753073106060651,count:939},{bin:.32837856243577257,count:946},{bin:.45397275453958413,count:757},{bin:.6276026678951266,count:643},{bin:.8676404141225534,count:375},{bin:1.1994848440391734,count:1228},{bin:1.6582490484087298,count:397},{bin:2.292475740909536,count:388},{bin:3.169273655065194,count:195},{bin:4.381418447073834,count:355},{bin:6.057169464580057,count:225},{bin:8.373841112378626,count:212},{bin:11.576564827086935,count:169},{bin:16.00422690103781,count:214},{bin:22.125326685909062,count:174},{bin:30.58754940086826,count:157},{bin:42.28629893842019,count:119},{bin:58.45944225458878,count:125},{bin:80.81829042769547,count:114},{bin:111.7286757408746,count:91},{bin:154.46128489908796,count:73},{bin:213.5377366148178,count:73},{bin:295.2090226905036,count:39},{bin:408.116937359328,count:23},{bin:564.2084819818617,count:6},{bin:779.9999999999999,count:3}];var ft={};me(ft,{default:()=>je});var je=[{bin:0,count:256639},{bin:1e-4,count:0},{bin:.00013977129372247873,count:0},{bin:.00019536014548855417,count:0},{bin:.00027305740276746884,count:0},{bin:.0003816558644530906,count:0},{bin:.0005334453393137945,count:0},{bin:.0007456034520611569,count:1026},{bin:.0010421395909853404,count:954},{bin:.0014566119887143584,count:518},{bin:.0020359254211427848,count:1435},{bin:.0028456393003560934,count:267},{bin:.003977386864783003,count:863},{bin:.005559245077255145,count:1024},{bin:.007770228765682728,count:1137},{bin:.010860549270990939,count:2010},{bin:.015179930221431265,count:3495},{bin:.021217184856664007,count:1516},{bin:.029655533765649125,count:4184},{bin:.04144992320455429,count:4221},{bin:.057935093909979446,count:4753},{bin:.08097663027731125,count:5469},{bin:.11318208375146634,count:6387},{bin:.15819606272148387,count:8420},{bin:.2211126834838419,count:8972},{bin:.30905205828985566,count:12111},{bin:.4319660601476803,count:9561},{bin:.6037645507104333,count:10620},{bin:.8438895235656837,count:8442},{bin:1.179515304676218,count:9388},{bin:1.6486238010005865,count:8873},{bin:2.3043028152752227,count:8637},{bin:3.2207538561936775,count:8491},{bin:4.5016893324185245,count:7360},{bin:6.292069419288188,count:5665},{bin:8.794506829255553,count:4763},{bin:12.292195971762231,count:3582},{bin:17.180961336634486,count:2392},{bin:24.01405193417289,count:2102},{bin:33.56475106358137,count:1685},{bin:46.91388679629712,count:1535},{bin:65.57214651068361,count:981},{bin:91.65103749958166,count:665},{bin:128.1018408232394,count:728},{bin:179.04960020095209,count:817},{bin:250.2599426057966,count:882},{bin:349.79155944925463,count:553},{bin:488.90818797425646,count:415},{bin:683.3532994467463,count:11},{bin:955.1317473319633,count:15},{bin:1335.0000000000005,count:4}];var gt={};me(gt,{default:()=>Ce});var Ce=[{bin:0,count:351565},{bin:1e-4,count:0},{bin:.000140723598521176,count:0},{bin:.00019803131180749106,count:0},{bin:.00027867678817419193,count:0},{bin:.0003921640045619575,count:0},{bin:.0005518672993243354,count:0},{bin:.0007766075226708344,count:0},{bin:.0010928700522885547,count:0},{bin:.0015379260647407104,count:0},{bin:.0021642249008982386,count:1},{bin:.003045575160635356,count:50},{bin:.004285842961713155,count:924},{bin:.0060311924426893,count:246},{bin:.008487311039089597,count:264},{bin:.011943649511891884,count:509},{bin:.016807533387891115,count:1097},{bin:.0236521658060885,count:1381},{bin:.03328417885052285,count:2003},{bin:.0468386942166799,count:2341},{bin:.06591309600204191,count:3691},{bin:.09275528059079066,count:4748},{bin:.13052856866577453,count:2662},{bin:.1836844989246619,count:2994},{bin:.25848743681237507,count:3320},{bin:.3637528228075252,count:3716},{bin:.511886061977106,count:4859},{bin:.7203444867425207,count:4605},{bin:1.0136946834929708,count:6237},{bin:1.4265076366291523,count:4285},{bin:2.0074328794439222,count:3831},{bin:2.8249317858507452,count:4017},{bin:3.975345664817694,count:3409},{bin:5.594249473187022,count:3098},{bin:7.872429168920699,count:1879},{bin:11.078365617535928,count:1159},{bin:15.589874754329243,count:889},{bin:21.938632759236434,count:722},{bin:30.872833485143044,count:630},{bin:43.44536224574393,count:663},{bin:61.137877142771195,count:305},{bin:86.03542077476308,count:622},{bin:121.07214011708216,count:224},{bin:170.3770723793582,count:182},{bin:239.76074730726123,count:148},{bin:337.3999514520412,count:59},{bin:474.8013530920137,count:60},{bin:668.1575498983159,count:30},{bin:940.2553480078313,count:19},{bin:1323.161161004428,count:40},{bin:1862.0000000000007,count:84}];var bt={};me(bt,{default:()=>Ae});var Ae=[{bin:0,count:8345,krate:"Rocket"},{bin:1e-4,count:0,krate:"Rocket"},{bin:.0001333855710473296,count:0,krate:"Rocket"},{bin:.00017791710563622233,count:0,krate:"Rocket"},{bin:.00023731574734375577,count:0,krate:"Rocket"},{bin:.0003165449647797066,count:0,krate:"Rocket"},{bin:.00042222530889297996,count:0,krate:"Rocket"},{bin:.0005631876393732533,count:0,krate:"Rocket"},{bin:.0007512110488459892,count:0,krate:"Rocket"},{bin:.0010020071472738568,count:0,krate:"Rocket"},{bin:.0013365329553262921,count:0,krate:"Rocket"},{bin:.0017827421146977254,count:0,krate:"Rocket"},{bin:.0023779207499908007,count:0,krate:"Rocket"},{bin:.003171803171428176,count:0,krate:"Rocket"},{bin:.004230727772706783,count:0,krate:"Rocket"},{bin:.005643180399082911,count:0,krate:"Rocket"},{bin:.007527188400547722,count:0,krate:"Rocket"},{bin:.010040183231878936,count:4,krate:"Rocket"},{bin:.013392155738039951,count:1,krate:"Rocket"},{bin:.017863203406732326,count:8,krate:"Rocket"},{bin:.023826935871415947,count:8,krate:"Rocket"},{bin:.03178169447516918,count:17,krate:"Rocket"},{bin:.04239219466422206,count:35,krate:"Rocket"},{bin:.056545070932368185,count:51,krate:"Rocket"},{bin:.07542296576225689,count:64,krate:"Rocket"},{bin:.10060335358281834,count:111,krate:"Rocket"},{bin:.13419035766920637,count:194,krate:"Rocket"},{bin:.17899057486752498,count:234,krate:"Rocket"},{bin:.2387476004079462,count:212,krate:"Rocket"},{bin:.318454850165936,count:224,krate:"Rocket"},{bin:.4247728204217516,count:201,krate:"Rocket"},{bin:.5665856521734013,count:283,krate:"Rocket"},{bin:.7557435076237287,count:315,krate:"Rocket"},{bin:1.0080527932970293,count:233,krate:"Rocket"},{bin:1.3445969747978013,count:173,krate:"Rocket"},{bin:1.7934983531191637,count:185,krate:"Rocket"},{bin:2.392268020032451,count:257,krate:"Rocket"},{bin:3.1909403595029335,count:191,krate:"Rocket"},{bin:4.256254020302696,count:180,krate:"Rocket"},{bin:5.67722873020568,count:97,krate:"Rocket"},{bin:7.572603961447914,count:147,krate:"Rocket"},{bin:10.100761037129994,count:117,krate:"Rocket"},{bin:13.472957789502027,count:33,krate:"Rocket"},{bin:17.970981684492973,count:33,krate:"Rocket"},{bin:23.97069654267194,count:36,krate:"Rocket"},{bin:31.973450467465494,count:19,krate:"Rocket"},{bin:42.64796948956397,count:14,krate:"Rocket"},{bin:56.886237643745744,count:10,krate:"Rocket"},{bin:75.87803292845132,count:2,krate:"Rocket"},{bin:101.21034752109568,count:3,krate:"Rocket"},{bin:135,count:3,krate:"Rocket"},{bin:0,count:13495,krate:"rustls"},{bin:1e-4,count:0,krate:"rustls"},{bin:.00013664721586690863,count:0,krate:"rustls"},{bin:.00018672461604177522,count:0,krate:"rustls"},{bin:.00025515398915926084,count:0,krate:"rustls"},{bin:.00034866082235948377,count:0,krate:"rustls"},{bin:.00047643530657290307,count:0,krate:"rustls"},{bin:.0006510355818388427,count:0,krate:"rustls"},{bin:.0008896219968857078,count:0,krate:"rustls"},{bin:.0012156436904839163,count:0,krate:"rustls"},{bin:.0016611432579080115,count:0,krate:"rustls"},{bin:.002269906013492159,count:0,krate:"rustls"},{bin:.0031017633702325703,count:0,krate:"rustls"},{bin:.004238473288202404,count:0,krate:"rustls"},{bin:.005791755743591194,count:1,krate:"rustls"},{bin:.007914272973429145,count:1,krate:"rustls"},{bin:.01081463367429813,count:35,krate:"rustls"},{bin:.014777895822133557,count:7,krate:"rustls"},{bin:.02019358320465771,count:42,krate:"rustls"},{bin:.027593969232932423,count:35,krate:"rustls"},{bin:.03770639070397352,count:165,krate:"rustls"},{bin:.051524733100878656,count:167,krate:"rustls"},{bin:.07040711326520624,count:231,krate:"rustls"},{bin:.09620936004916522,count:358,krate:"rustls"},{bin:.13146741191055414,count:448,krate:"rustls"},{bin:.17964655814805283,count:382,krate:"rustls"},{bin:.24548202011004128,count:468,krate:"rustls"},{bin:.3354443459342161,count:689,krate:"rustls"},{bin:.458375359502068,count:899,krate:"rustls"},{bin:.6263571669795099,count:1111,krate:"rustls"},{bin:.8558996300603441,count:716,krate:"rustls"},{bin:1.1695630150926306,count:725,krate:"rustls"},{bin:1.5981752979331505,count:639,krate:"rustls"},{bin:2.183862049298324,count:514,krate:"rustls"},{bin:2.9841866887401785,count:329,krate:"rustls"},{bin:4.077808026434339,count:504,krate:"rustls"},{bin:5.572211136519863,count:310,krate:"rustls"},{bin:7.614271380280212,count:278,krate:"rustls"},{bin:10.404689849703754,count:236,krate:"rustls"},{bin:14.217718999207005,count:162,krate:"rustls"},{bin:19.428117172196895,count:123,krate:"rustls"},{bin:26.547981211167805,count:104,krate:"rustls"},{bin:36.27707719393084,count:58,krate:"rustls"},{bin:49.57161598339581,count:40,krate:"rustls"},{bin:67.73823310154577,count:39,krate:"rustls"},{bin:92.56240961069909,count:20,krate:"rustls"},{bin:126.48395567234402,count:13,krate:"rustls"},{bin:172.83680394459313,count:15,krate:"rustls"},{bin:236.17668058363355,count:32,krate:"rustls"},{bin:322.72885854441733,count:4,krate:"rustls"},{bin:441.00000000000006,count:12,krate:"rustls"},{bin:0,count:12700,krate:"sccache"},{bin:1e-4,count:0,krate:"sccache"},{bin:.0001352446310281706,count:0,krate:"sccache"},{bin:.00018291110221946004,count:0,krate:"sccache"},{bin:.0002473774453062689,count:0,krate:"sccache"},{bin:.00033456471315137793,count:0,krate:"sccache"},{bin:.00045248081185203845,count:0,krate:"sccache"},{bin:.0006119560044625602,count:0,krate:"sccache"},{bin:.0008276376402901247,count:0,krate:"sccache"},{bin:.0011193354728606382,count:0,krate:"sccache"},{bin:.001513841130237797,count:0,krate:"sccache"},{bin:.0020473888509427982,count:0,krate:"sccache"},{bin:.002768983497169489,count:0,krate:"sccache"},{bin:.00374490151397781,count:0,krate:"sccache"},{bin:.005064778234947669,count:0,krate:"sccache"},{bin:.006849840636250059,count:6,krate:"sccache"},{bin:.009264041694514094,count:5,krate:"sccache"},{bin:.01252911900804147,count:25,krate:"sccache"},{bin:.016944960773506074,count:30,krate:"sccache"},{bin:.02291714967599653,count:42,krate:"sccache"},{bin:.030994214521475136,count:153,krate:"sccache"},{bin:.041918011069648715,count:118,krate:"sccache"},{bin:.056691859405494115,count:158,krate:"sccache"},{bin:.07667269607596974,count:214,krate:"sccache"},{bin:.1036957049072959,count:505,krate:"sccache"},{bin:.14024287349393294,count:448,krate:"sccache"},{bin:.18967095680017387,count:713,krate:"sccache"},{bin:.25651978569199596,count:741,krate:"sccache"},{bin:.3469292376733939,count:838,krate:"sccache"},{bin:.4692031674202266,count:741,krate:"sccache"},{bin:.634572092549975,count:927,krate:"sccache"},{bin:.8582246851769558,count:847,krate:"sccache"},{bin:1.1607028088602513,count:1359,krate:"sccache"},{bin:1.5697882311766609,count:974,krate:"sccache"},{bin:2.123054301178523,count:576,krate:"sccache"},{bin:2.871316956156596,count:300,krate:"sccache"},{bin:3.883302023003291,count:291,krate:"sccache"},{bin:5.25195749272028,count:288,krate:"sccache"},{bin:7.102990532785909,count:193,krate:"sccache"},{bin:9.606413338032201,count:240,krate:"sccache"},{bin:12.992158274062604,count:123,krate:"sccache"},{bin:17.571196520351922,count:131,krate:"sccache"},{bin:23.764099901184686,count:83,krate:"sccache"},{bin:32.13966922852311,count:61,krate:"sccache"},{bin:43.467177061790615,count:65,krate:"sccache"},{bin:58.78702323558026,count:33,krate:"sccache"},{bin:79.50629266740552,count:29,krate:"sccache"},{bin:107.52799216220993,count:18,krate:"sccache"},{bin:145.42583625178116,count:5,krate:"sccache"},{bin:196.6806356583528,count:4,krate:"sccache"},{bin:266.00000000000006,count:3,krate:"sccache"},{bin:0,count:20594,krate:"nalgebra"},{bin:1e-4,count:0,krate:"nalgebra"},{bin:.00013541572864480034,count:0,krate:"nalgebra"},{bin:.00018337419564402183,count:0,krate:"nalgebra"},{bin:.0002483175031778939,count:0,krate:"nalgebra"},{bin:.00033626095628092024,count:0,krate:"nalgebra"},{bin:.00045535022409578125,count:0,krate:"nalgebra"},{bin:.0006166158238450334,count:0,krate:"nalgebra"},{bin:.0008349948107988905,count:0,krate:"nalgebra"},{bin:.0011307143071895896,count:0,krate:"nalgebra"},{bin:.0015311650179717874,count:1,krate:"nalgebra"},{bin:.002073438265840784,count:0,krate:"nalgebra"},{bin:.0028077615356884075,count:0,krate:"nalgebra"},{bin:.0038021507421608924,count:1,krate:"nalgebra"},{bin:.005148710131670856,count:403,krate:"nalgebra"},{bin:.0069721633406107505,count:33,krate:"nalgebra"},{bin:.0094414057899937,count:88,krate:"nalgebra"},{bin:.012785148444832325,count:15,krate:"nalgebra"},{bin:.01731310192488905,count:416,krate:"nalgebra"},{bin:.02344466312260544,count:338,krate:"nalgebra"},{bin:.03174776139579496,count:381,krate:"nalgebra"},{bin:.04299146242252838,count:520,krate:"nalgebra"},{bin:.05821720209452228,count:404,krate:"nalgebra"},{bin:.07883524841291331,count:380,krate:"nalgebra"},{bin:.10675532606728497,count:571,krate:"nalgebra"},{bin:.14456350266114626,count:775,krate:"nalgebra"},{bin:.19576172048303656,count:760,krate:"nalgebra"},{bin:.26509216019970133,count:761,krate:"nalgebra"},{bin:.35897648031466695,count:761,krate:"nalgebra"},{bin:.48611061648156406,count:612,krate:"nalgebra"},{bin:.6582702333282409,count:1160,krate:"nalgebra"},{bin:.8914014329132648,count:705,krate:"nalgebra"},{bin:1.2070977455296874,count:599,krate:"nalgebra"},{bin:1.634600207563984,count:958,krate:"nalgebra"},{bin:2.213505781502188,count:963,krate:"nalgebra"},{bin:2.99743498261597,count:486,krate:"nalgebra"},{bin:4.05899842236356,count:1001,krate:"nalgebra"},{bin:5.496522289324554,count:385,krate:"nalgebra"},{bin:7.443155708212706,count:517,krate:"nalgebra"},{bin:10.079203536443286,count:429,krate:"nalgebra"},{bin:13.648826910467161,count:233,krate:"nalgebra"},{bin:18.482658412276695,count:249,krate:"nalgebra"},{bin:25.028426561913975,count:157,krate:"nalgebra"},{bin:33.892426197144495,count:112,krate:"nalgebra"},{bin:45.895675890264414,count:41,krate:"nalgebra"},{bin:62.14996392325751,count:29,krate:"nalgebra"},{bin:84.1608264991597,count:19,krate:"nalgebra"},{bin:113.96699643732333,count:13,krate:"nalgebra"},{bin:154.32923864019503,count:5,krate:"nalgebra"},{bin:208.98606301659245,count:7,krate:"nalgebra"},{bin:283,count:4,krate:"nalgebra"},{bin:0,count:8861,krate:"rayon"},{bin:1e-4,count:0,krate:"rayon"},{bin:.0001349952524510065,count:0,krate:"rayon"},{bin:.00018223718184310974,count:0,krate:"rayon"},{bin:.000246011543688706,count:0,krate:"rayon"},{bin:.0003321039044611868,count:0,krate:"rayon"},{bin:.0004483245042270286,count:0,krate:"rayon"},{bin:.0006052167962810006,count:0,krate:"rayon"},{bin:.0008170139420154304,count:0,krate:"rayon"},{bin:.001102930033583651,count:0,krate:"rayon"},{bin:.001488903183194219,count:0,krate:"rayon"},{bin:.00200994861090411,count:0,krate:"rayon"},{bin:.002713335201425501,count:0,krate:"rayon"},{bin:.003662873705006381,count:0,krate:"rayon"},{bin:.004944705605034904,count:0,krate:"rayon"},{bin:.00667511781447593,count:1,krate:"rayon"},{bin:.009011092145053898,count:0,krate:"rayon"},{bin:.012164546589808327,count:1,krate:"rayon"},{bin:.01642156037843205,count:14,krate:"rayon"},{bin:.022168326889258808,count:1,krate:"rayon"},{bin:.02992618884831931,count:57,krate:"rayon"},{bin:.040398934184753606,count:6,krate:"rayon"},{bin:.054536643190224096,count:5,krate:"rayon"},{bin:.07362187915294766,count:16,krate:"rayon"},{bin:.0993860416216966,count:125,krate:"rayon"},{bin:.13416643778827173,count:29,krate:"rayon"},{bin:.18111832139680017,count:48,krate:"rayon"},{bin:.2445011352046357,count:37,krate:"rayon"},{bin:.3300649247150747,count:105,krate:"rayon"},{bin:.4455719783713396,count:79,krate:"rayon"},{bin:.601501017053334,count:310,krate:"rayon"},{bin:.8119978164665207,count:65,krate:"rayon"},{bin:1.0961585022356388,count:79,krate:"rayon"},{bin:1.479761937356174,count:47,krate:"rayon"},{bin:1.9976083630078736,count:81,krate:"rayon"},{bin:2.6966764526248945,count:198,krate:"rayon"},{bin:3.6403851850078266,count:88,krate:"rayon"},{bin:4.91434717069035,count:122,krate:"rayon"},{bin:6.6341353693923395,count:78,krate:"rayon"},{bin:8.955767789852711,count:48,krate:"rayon"},{bin:12.08986133683758,count:61,krate:"rayon"},{bin:16.320738832640536,count:10,krate:"rayon"},{bin:22.032222588992518,count:10,krate:"rayon"},{bin:29.74245450457816,count:3,krate:"rayon"},{bin:40.15090154358108,count:6,krate:"rayon"},{bin:54.201810900112285,count:2,krate:"rayon"},{bin:73.16987145762381,count:5,krate:"rayon"},{bin:98.77585269229611,count:2,krate:"rayon"},{bin:133.34271170259956,count:3,krate:"rayon"},{bin:180.0063302879419,count:2,krate:"rayon"},{bin:242.99999999999997,count:0,krate:"rayon"},{bin:0,count:45073,krate:"rg3d"},{bin:1e-4,count:0,krate:"rg3d"},{bin:.00013646777555045993,count:0,krate:"rg3d"},{bin:.00018623453763690694,count:0,krate:"rg3d"},{bin:.000254150130819771,count:0,krate:"rg3d"},{bin:.0003468330300883254,count:0,krate:"rg3d"},{bin:.0004733153210357946,count:0,krate:"rg3d"},{bin:.0006459228899570671,count:0,krate:"rg3d"},{bin:.0008814765996956546,count:0,krate:"rg3d"},{bin:.0012029315076024923,count:0,krate:"rg3d"},{bin:.0016416138698207314,count:0,krate:"rg3d"},{bin:.0022402739312721754,count:0,krate:"rg3d"},{bin:.0030572520002439744,count:0,krate:"rg3d"},{bin:.004172163797704894,count:13,krate:"rg3d"},{bin:.005693659127049461,count:22,krate:"rg3d"},{bin:.007770009958110134,count:5,krate:"rg3d"},{bin:.010603559749882113,count:274,krate:"rg3d"},{bin:.014470442119828035,count:263,krate:"rg3d"},{bin:.01974749047324614,count:112,krate:"rg3d"},{bin:.026948960975877973,count:1110,krate:"rg3d"},{bin:.0367766475777422,count:270,krate:"rg3d"},{bin:.05018827287137688,count:691,krate:"rg3d"},{bin:.06849081957476291,count:653,krate:"rg3d"},{bin:.09346789792995792,count:578,krate:"rg3d"},{bin:.12755356115878796,count:510,krate:"rg3d"},{bin:.17406950754879325,count:726,krate:"rg3d"},{bin:.23754878486347808,count:638,krate:"rg3d"},{bin:.32417754255033626,count:740,krate:"rg3d"},{bin:.44239788115258966,count:539,krate:"rg3d"},{bin:.603730547491306,count:798,krate:"rg3d"},{bin:.8238976484799984,count:640,krate:"rg3d"},{bin:1.1243547936932003,count:646,krate:"rg3d"},{bin:1.5343819762480737,count:803,krate:"rg3d"},{bin:2.0939369514329327,count:667,krate:"rg3d"},{bin:2.857549179049638,count:602,krate:"rg3d"},{bin:3.899633799909471,count:492,krate:"rg3d"},{bin:5.321743501350329,count:611,krate:"rg3d"},{bin:7.2624649767939395,count:530,krate:"rg3d"},{bin:9.910924403961916,count:462,krate:"rg3d"},{bin:13.525218070574507,count:316,krate:"rg3d"},{bin:18.457564239261867,count:201,krate:"rg3d"},{bin:25.188627338117843,count:133,krate:"rg3d"},{bin:34.374359420024454,count:83,krate:"rg3d"},{bin:46.90992366022726,count:95,krate:"rg3d"},{bin:64.01692933153103,count:86,krate:"rg3d"},{bin:87.36247943445034,count:90,krate:"rg3d"},{bin:119.2216323499224,count:59,krate:"rg3d"},{bin:162.69910964288664,count:25,krate:"rg3d"},{bin:222.03185577005127,count:21,krate:"rg3d"},{bin:303.00193458279387,count:10,krate:"rg3d"},{bin:413.4999999999999,count:1,krate:"rg3d"},{bin:0,count:55397,krate:"RustPython"},{bin:1e-4,count:0,krate:"RustPython"},{bin:.00013977129372247873,count:0,krate:"RustPython"},{bin:.00019536014548855417,count:0,krate:"RustPython"},{bin:.00027305740276746884,count:0,krate:"RustPython"},{bin:.0003816558644530906,count:0,krate:"RustPython"},{bin:.0005334453393137945,count:0,krate:"RustPython"},{bin:.0007456034520611569,count:0,krate:"RustPython"},{bin:.0010421395909853404,count:0,krate:"RustPython"},{bin:.0014566119887143584,count:0,krate:"RustPython"},{bin:.0020359254211427848,count:0,krate:"RustPython"},{bin:.0028456393003560934,count:0,krate:"RustPython"},{bin:.003977386864783003,count:4,krate:"RustPython"},{bin:.005559245077255145,count:6,krate:"RustPython"},{bin:.007770228765682728,count:113,krate:"RustPython"},{bin:.010860549270990939,count:719,krate:"RustPython"},{bin:.015179930221431265,count:123,krate:"RustPython"},{bin:.021217184856664007,count:196,krate:"RustPython"},{bin:.029655533765649125,count:754,krate:"RustPython"},{bin:.04144992320455429,count:1043,krate:"RustPython"},{bin:.057935093909979446,count:743,krate:"RustPython"},{bin:.08097663027731125,count:961,krate:"RustPython"},{bin:.11318208375146634,count:1370,krate:"RustPython"},{bin:.15819606272148387,count:1912,krate:"RustPython"},{bin:.2211126834838419,count:1766,krate:"RustPython"},{bin:.30905205828985566,count:1944,krate:"RustPython"},{bin:.4319660601476803,count:2057,krate:"RustPython"},{bin:.6037645507104333,count:2214,krate:"RustPython"},{bin:.8438895235656837,count:2190,krate:"RustPython"},{bin:1.179515304676218,count:1855,krate:"RustPython"},{bin:1.6486238010005865,count:2130,krate:"RustPython"},{bin:2.3043028152752227,count:2160,krate:"RustPython"},{bin:3.2207538561936775,count:2020,krate:"RustPython"},{bin:4.5016893324185245,count:2324,krate:"RustPython"},{bin:6.292069419288188,count:2283,krate:"RustPython"},{bin:8.794506829255553,count:2027,krate:"RustPython"},{bin:12.292195971762231,count:1546,krate:"RustPython"},{bin:17.180961336634486,count:1050,krate:"RustPython"},{bin:24.01405193417289,count:1026,krate:"RustPython"},{bin:33.56475106358137,count:878,krate:"RustPython"},{bin:46.91388679629712,count:950,krate:"RustPython"},{bin:65.57214651068361,count:483,krate:"RustPython"},{bin:91.65103749958166,count:381,krate:"RustPython"},{bin:128.1018408232394,count:448,krate:"RustPython"},{bin:179.04960020095209,count:651,krate:"RustPython"},{bin:250.2599426057966,count:750,krate:"RustPython"},{bin:349.79155944925463,count:446,krate:"RustPython"},{bin:488.90818797425646,count:387,krate:"RustPython"},{bin:683.3532994467463,count:5,krate:"RustPython"},{bin:955.1317473319633,count:9,krate:"RustPython"},{bin:1335.0000000000005,count:4,krate:"RustPython"},{bin:0,count:48576,krate:"rav1e"},{bin:1e-4,count:0,krate:"rav1e"},{bin:.00013858752413413818,count:0,krate:"rav1e"},{bin:.0001920650184563031,count:0,krate:"rav1e"},{bin:.000266178153806366,count:0,krate:"rav1e"},{bin:.0003688897131462006,count:0,krate:"rav1e"},{bin:.0005112351202348439,count:0,krate:"rav1e"},{bin:.0007085080956376545,count:577,krate:"rav1e"},{bin:.0009819038280341561,count:1403,krate:"rav1e"},{bin:.0013607962046508614,count:517,krate:"rav1e"},{bin:.001885893768536949,count:709,krate:"rav1e"},{bin:.002613613481615352,count:991,krate:"rav1e"},{bin:.0036221422146067613,count:804,krate:"rav1e"},{bin:.005019837215840952,count:584,krate:"rav1e"},{bin:.00695686811299803,count:889,krate:"rav1e"},{bin:.009641351275081297,count:348,krate:"rav1e"},{bin:.013361710025210319,count:596,krate:"rav1e"},{bin:.01851766310592191,count:485,krate:"rav1e"},{bin:.02566317082599793,count:557,krate:"rav1e"},{bin:.03556595306206495,count:951,krate:"rav1e"},{bin:.04928997378342552,count:778,krate:"rav1e"},{bin:.06830975431281515,count:960,krate:"rav1e"},{bin:.0946687972442432,count:1046,krate:"rav1e"},{bin:.13119914222836374,count:1936,krate:"rav1e"},{bin:.18182564289951586,count:987,krate:"rav1e"},{bin:.25198765673541845,count:1023,krate:"rav1e"},{bin:.34922345459324694,count:1037,krate:"rav1e"},{bin:.4839801394164872,count:892,krate:"rav1e"},{bin:.670736092518259,count:1518,krate:"rav1e"},{bin:.9295565440951177,count:865,krate:"rav1e"},{bin:1.2882493998882807,count:1487,krate:"rav1e"},{bin:1.7853529479780594,count:881,krate:"rav1e"},{bin:2.4742764476586427,count:891,krate:"rav1e"},{bin:3.429038469044215,count:782,krate:"rav1e"},{bin:4.752219515855529,count:683,krate:"rav1e"},{bin:6.585983368443512,count:427,krate:"rav1e"},{bin:9.12735129021197,count:358,krate:"rav1e"},{bin:12.649370172130073,count:282,krate:"rav1e"},{bin:17.53044894011722,count:296,krate:"rav1e"},{bin:24.29501515570775,count:292,krate:"rav1e"},{bin:33.66985999230897,count:345,krate:"rav1e"},{bin:46.662225342771684,count:225,krate:"rav1e"},{bin:64.66802280843972,count:195,krate:"rav1e"},{bin:89.62181171671628,count:144,krate:"rav1e"},{bin:124.20464994235591,count:145,krate:"rav1e"},{bin:172.13214921458416,count:105,krate:"rav1e"},{bin:238.55368383537282,count:69,krate:"rav1e"},{bin:330.6056441582226,count:88,krate:"rav1e"},{bin:458.1781768865993,count:15,krate:"rav1e"},{bin:634.9777914700708,count:5,krate:"rav1e"},{bin:880.0000000000001,count:5,krate:"rav1e"},{bin:0,count:29572,krate:"image"},{bin:1e-4,count:0,krate:"image"},{bin:.00013624727461120878,count:0,krate:"image"},{bin:.00018563319838982138,count:0,krate:"image"},{bin:.00025292017357975,count:0,krate:"image"},{bin:.00034459684344434786,count:0,krate:"image"},{bin:.00046950380758917833,count:0,krate:"image"},{bin:.0006396861420361091,count:0,krate:"image"},{bin:.0008715549345897847,count:0,krate:"image"},{bin:.0011874698451180851,count:0,krate:"image"},{bin:.001617895300803333,count:0,krate:"image"},{bin:.0022043382534073595,count:0,krate:"image"},{bin:.003003350793479849,count:1,krate:"image"},{bin:.0040919836031304115,count:2,krate:"image"},{bin:.005575216136802723,count:1,krate:"image"},{bin:.007596080040078039,count:3,krate:"image"},{bin:.010349452031892343,count:285,krate:"image"},{bin:.01410084633064769,count:46,krate:"image"},{bin:.019212018822622117,count:83,krate:"image"},{bin:.026175852043615076,count:405,krate:"image"},{bin:.035663885015687936,count:260,krate:"image"},{bin:.04859107135435009,count:509,krate:"image"},{bin:.06620401042468985,count:510,krate:"image"},{bin:.09020115988696047,count:572,krate:"image"},{bin:.12289662201368252,count:620,krate:"image"},{bin:.1674432980828813,count:602,krate:"image"},{bin:.2281369301570482,count:766,krate:"image"},{bin:.31083034972065504,count:519,krate:"image"},{bin:.4234978801588815,count:535,krate:"image"},{bin:.5770043197527198,count:828,krate:"image"},{bin:.7861526600520253,count:505,krate:"image"},{bin:1.0711115736044057,count:397,krate:"image"},{bin:1.459360327081233,count:209,krate:"image"},{bin:1.9883386724054042,count:305,krate:"image"},{bin:2.7090572511930566,count:346,krate:"image"},{bin:3.691016672407865,count:247,krate:"image"},{bin:5.028909621601049,count:284,krate:"image"},{bin:6.851752302092275,count:124,krate:"image"},{bin:9.335325774711492,count:148,krate:"image"},{bin:12.719126944122108,count:126,krate:"image"},{bin:17.329463815706312,count:66,krate:"image"},{bin:23.610922153635418,count:57,krate:"image"},{bin:32.16923794490241,count:35,krate:"image"},{bin:43.829709963124415,count:42,krate:"image"},{bin:59.716785294754395,count:27,krate:"image"},{bin:81.36249244953005,count:21,krate:"image"},{bin:110.85417851823512,count:5,krate:"image"},{bin:151.03579702373958,count:6,krate:"image"},{bin:205.78215713216215,count:3,krate:"image"},{bin:280.3725807287264,count:3,krate:"image"},{bin:382.00000000000017,count:2,krate:"image"},{bin:0,count:14026,krate:"hyper"},{bin:1e-4,count:0,krate:"hyper"},{bin:.00013790537216517275,count:0,krate:"hyper"},{bin:.0001901789167201478,count:0,krate:"hyper"},{bin:.00026226694288261377,count:0,krate:"hyper"},{bin:.00036168020364848953,count:0,krate:"hyper"},{bin:.0004987764308892041,count:0,krate:"hyper"},{bin:.0006878394932899219,count:0,krate:"hyper"},{bin:.0009485676131205051,count:0,krate:"hyper"},{bin:.0013081256971121285,count:0,krate:"hyper"},{bin:.0018039756109907393,count:0,krate:"hyper"},{bin:.002487779280105728,count:0,krate:"hyper"},{bin:.003430781274877859,count:0,krate:"hyper"},{bin:.004731231685293364,count:0,krate:"hyper"},{bin:.006524622663600389,count:16,krate:"hyper"},{bin:.008997805166611323,count:42,krate:"hyper"},{bin:.012408456701712473,count:648,krate:"hyper"},{bin:.017111928394450904,count:1454,krate:"hyper"},{bin:.023598268537005387,count:230,krate:"hyper"},{bin:.03254328005049411,count:522,krate:"hyper"},{bin:.04487893146838832,count:709,krate:"hyper"},{bin:.061890457465233736,count:638,krate:"hyper"},{bin:.08535026570215842,count:903,krate:"hyper"},{bin:.11770260156052537,count:947,krate:"hyper"},{bin:.16231821073013292,count:1241,krate:"hyper"},{bin:.22384553259923892,count:2319,krate:"hyper"},{bin:.3086950148060935,count:4738,krate:"hyper"},{bin:.42570700902367836,count:2149,krate:"hyper"},{bin:.5870728351273291,count:1268,krate:"hyper"},{bin:.8096049781629734,count:1216,krate:"hyper"},{bin:1.1164887582034138,count:1493,krate:"hyper"},{bin:1.539697977182732,count:1766,krate:"hyper"},{bin:2.123326225653485,count:1689,krate:"hyper"},{bin:2.928180933768151,count:2343,krate:"hyper"},{bin:4.038118814382595,count:2113,krate:"hyper"},{bin:5.568782779446184,count:1072,krate:"hyper"},{bin:7.6796506170653025,count:575,krate:"hyper"},{bin:10.59065076444888,count:366,krate:"hyper"},{bin:14.605076351426954,count:138,krate:"hyper"},{bin:20.141184897442955,count:94,krate:"hyper"},{bin:27.775775991294243,count:54,krate:"hyper"},{bin:38.30428725255906,count:35,krate:"hyper"},{bin:52.82366989085834,count:54,krate:"hyper"},{bin:72.8466785542904,count:11,krate:"hyper"},{bin:100.45948317026138,count:5,krate:"hyper"},{bin:138.53902414115788,count:10,krate:"hyper"},{bin:191.05275683586208,count:2,krate:"hyper"},{bin:263.47201534631836,count:8,krate:"hyper"},{bin:363.342063314421,count:1,krate:"hyper"},{bin:501.06822464636934,count:3,krate:"hyper"},{bin:691.0000000000001,count:2,krate:"hyper"}];var $t=E(tt());var{Document:Hn,Smallcaps:Se,Section:we,Subsection:ne,Figure:Te,Row:Bn,Caption:ve,Subsubsection:Ve,Subfigure:Kt,Acknowledgments:Jn}=Ge,{ListingConfigure:Kn,Listing:ge}=Ut,{Title:ea,Affiliation:en,Institution:tn,Authors:ta,Author:Le,Name:Ne,Abstract:na}=Fe,{Ref:a,Definition:C}=Pt,{texRef:A,$:t,$$:D}=St,{Language:aa}=Rt,{IR:ia,Premise:q,Theorem:oa}=Yt,{VegaLite:yt}=Zt,{References:ra}=Tt,wt={"@nota-lang/nota-theme-acm/dist/index.css":{...ct,__esModule:!0},"./bibliography.bib":{...ut,__esModule:!0,default:ze},"@codemirror/lang-rust":{...At,__esModule:!0},"@codemirror/lang-cpp":{...ht,__esModule:!0},lodash:{...$t,__esModule:!0,default:$t.default},"./data/whole_program.json":{...mt,__esModule:!0,default:Ue},"./data/mut_blind.json":{...ft,__esModule:!0,default:je},"./data/pointer_blind.json":{...gt,__esModule:!0,default:Ce},"./data/by_crate.json":{...bt,__esModule:!0,default:Ae}},vt=`%%%
import "@nota-lang/nota-theme-acm/dist/index.css"
import bibtex from "./bibliography.bib"
import {rust} from "@codemirror/lang-rust"
import {cpp} from "@codemirror/lang-cpp"
import _ from "lodash";

let sysname = @Smallcaps{Flowistry};
%%%

@ListingConfigure[language: rust()]

@Title: Modular Information Flow through Ownership

%let stanford = @Affiliation{@Institution{Stanford University}}
@Authors:
  @Author: @Name{Will Crichton} #stanford
  @Author:
    @Name: Marco Patrignani
    @Affiliation:
      @Institution: University of Trento
  @Author: @Name{Maneesh Agrawala} #stanford
  @Author: @Name{Pat Hanrahan} #stanford

@Abstract:
  Statically analyzing information flow, or how data influences other data within a program, is a challenging task in imperative languages. Analyzing pointers and mutations requires access to a program's complete source. However, programs often use pre-compiled dependencies where only type signatures are available. We demonstrate that ownership types can be used to soundly and precisely analyze information flow through function calls given only their type signature. From this insight, we built Flowistry, a system for analyzing information flow in Rust, an ownership-based language. We prove the system's soundness as a form of noninterference using the Oxide formal model of Rust. Then we empirically evaluate the precision of Flowistry, showing that modular flows are identical to whole-program flows in 94% of cases drawn from large Rust codebases. We illustrate the applicability of Flowistry by using it to implement prototypes of a program slicer and an information flow control system.

@Section[name: "sec_intro"]: Introduction

Information flow describes how data influences other data within a program. Information flow has applications to security, such as information flow control &sabelfeld2003language, and to developer tools, such as program slicing &weiser1984program. Our goal is to build a practical system for analyzing information flow, meaning:

* **Applicable to common language features:** the language being analyzed  should support widely used features like pointers and in-place mutation.
* **Zero configuration to run on existing code:** the analyzer must integrate with an existing language and existing unannotated programs. It must not require users to adopt a new language designed for information flow.
* **No dynamic analysis:** to reduce integration challenges and costs, the analyzer must be purely static --- no modifications to runtimes or binaries are needed.
* **Modular over dependencies:** programs may not have source available for dependencies. The analyzer must have reasonable precision without whole-program analysis.


As a case study on the challenges imposed by these requirements, consider analyzing the information that flows to the return value in this C++ function:

\`\`\`cpp
// Copy elements 0 to max into a new vector
vector<int> copy_to(vector<int>& v, size_t max) {
  vector<int> v2; size_t i = 0;
  for (auto x(v.begin()); x != v.end(); ++x) {
    if (i == max) { break; }
    v2.push_back(*x); ++i;
  }
  return v2;
}
\`\`\`

Here, a key flow is that \`v2\` is influenced by \`v\`: (1) \`push_back\` mutates \`v2\` with \`*x\` as input, and (2) \`x\` points to data within \`v\`. But how could an analyzer statically deduce these facts? For C++, the answer is *by looking at function implementations*. The implementation of \`push_back\` mutates \`v2\`, and the implementation of \`begin\` returns a pointer to data in \`v\`.

However, analyzing such implementations violates our fourth requirement, since these functions may only have their type signature available. In C++, given only a function's type signature, not much can be inferred about its behavior, since the type system does not contain information relevant to pointer analysis.

Our key insight is that *ownership types* can be leveraged to modularly analyze pointers and mutation using only a function's type signature. Ownership has emerged from several intersecting lines of research on linear logic &girard1987linear, class-based alias management &clarke1998ownership, and region-based memory management &grossman2002region. The fundamental law of ownership is that data cannot be simultaneously aliased and mutated. Ownership-based type systems enforce this law by tracking which entities own which data, allowing ownership to be transferred between entities, and flagging ownership violations like mutating immutably-borrowed data.

Today, the most popular ownership-based language is Rust. Consider the information flows in this Rust implementation of \`copy_to\`:

\`\`\`rust
fn copy_to(v: &Vec<i32>, max: usize) -> Vec<i32> {
  let mut v2 = Vec::new();
  for (i, x) in v.iter().enumerate() {
    if i == max { break; }
    v2.push(*x);
  }
  return v2;
}
\`\`\`

Focus on the two methods \`push\` and \`iter\`. For a \`Vec<i32>\`, these methods have the following type signatures:

\`\`\`rust
fn push(&mut self, value: i32);
fn iter<'a>(&'a self) -> Iter<'a, i32>;
\`\`\`

To determine that \`push\` mutates \`v2\`, we leverage *mutability modifiers*. All references in Rust are either immutable (i.e. the type is \`&T\`) or mutable (the type is \`&mut T\`). Therefore \`iter\` does not mutate \`v\` because it takes \`&self\` as input (excepting interior mutability, discussed in &sec_limitations), while \`push\` may mutate \`v2\` because it takes \`&mut self\` as input.

To determine that \`x\` points to \`v\`, we leverage *lifetimes*. All references in Rust are annotated with a lifetime, either explicitly (such as \`'a\`) or implicitly. Shared lifetimes indicate aliasing: because \`&self\` in \`iter\` has lifetime \`'a\`, and because the returned \`Iter\` structure shares that lifetime, then we can determine that \`Iter\` may contain pointers to \`self\`.

Inspired by this insight, we built #sysname, a system for analyzing information flow in the safe subset of Rust programs. #sysname satisfies our four design criteria: (1) Rust supports pointers and mutation, (2) #sysname does not require any change to the Rust language or to Rust programs, (3) #sysname is a purely static analysis, and (4) Flowistry uses ownership types to analyze function calls without needing their definition. This paper presents a theoretical and empirical investigation into #sysname in five parts:

1. We provide a precise description of how #sysname computes information flow by embedding its definition within Oxide @Ref{weiss2019oxide}, a formal model of Rust (&sec_analysis).
2. We prove the soundness of our information flow analysis as a form of noninterference (&sec_soundness).
3. We describe the implementation of #sysname that bridges the theory of Oxide to the practicalities of Rust (&sec_implementation).
4. We evaluate the precision of the modular analysis on a dataset of large Rust codebases, finding that modular flows are identical to whole-program flows in 94% of cases, and are on average 7% larger in the remaining cases (&sec_evaluation).
5. We demonstrate the utility of #sysname by using it to prototype a program slicer and an IFC checker (&sec_applications).

We conclude by presenting related work (&sec_rw) and discussing future directions for #sysname (&sec_discussion).
Due to space constraints, we omit many formal details, all auxiliary lemmas, and all proofs.
The interested reader can find them in the appendix.
#sysname and our applications of it are publicly available, open-source, MIT-licensed projects at <https://github.com/willcrichton/flowistry>.


@Section[name: "sec_analysis"]: Analysis

Inspired by the dependency calculus of Abadi et al. &abadi1999core, our analysis represents information flow as a set of dependencies for each variable in a given function. The analysis is flow-sensitive, computing a different dependency set at each program location, and field-sensitive, distinguishing between dependencies for fields of a data structure.

While the analysis is implemented in and for Rust, our goal here is to provide a description of it that is both concise (for clarity of communication) and precise (for amenability to proof). We therefore base our description on Oxide &weiss2019oxide, a formal model of Rust. At a high level, Oxide provides three ingredients:

%%%
let tc = macro{#1; #2; #3 \\vdash #4 : #5 \\Rightarrow #6};
let stepped = macro{#1'};
let loc = #texRef{loc}{\\ell};
let deps = #texRef{deps}{\\kappa};
let depctx = #texRef{depctx}{\\Theta};
let fnctx = #texRef{fnctx}{\\Sigma};
let tyvarctx = #texRef{tyvarctx}{\\Delta};
let tyctx = #texRef{tyctx}{\\Gamma};
let stepsto = macro{#fnctx \\vdash (#1; #2) \\rightarrow (#3; #4)};
%%%


%%%
let msf = macro{\\mathsf{#1}}
let textsc = macro{\\text{\\tiny #1}}
let repeat = macro{\\overline{#1}}
let loan = #texRef{loan}{l};
let loanset = #{\\\\{\\overline{#loan}\\\\}};
let ownsafe = macro{#texRef{ownsafe}{#1; #2 \\vdash_{#3} #4 \\Rightarrow #5}};

let L = new Language(function(){ return [
  ["Variable", "vr", "x"],
  ["Number", "num", "n"],
  ["Function", "fname", "f"],
  ["Value", "value", "v"],
  ["Concrete Provenance", "concrprov", "r"],
  ["Abstract Provenance", "abstrprov", "\\varrho"],
  ["Provenance", "prov", "\\rho", [
    ["concr", macro{#1}, () => [this.concrprov]],
    ["abstr", macro{#1}, () => [this.abstrprov]],
  ]],
  ["Path", "path", "q", [
    ["empty", macro{\\varepsilon}],
    ["with", macro{#1.#2}, () => [this.vr, this.path]]
  ]],
  ["Place", "plc", #{\\pi}, [
    ["form", macro{#1.#2}, () => [this.vr, this.path]]
  ]],
  ["Constant", "const", "c", [
    ["unit", macro{()}],
    ["num", macro{#1}, () => [this.num]],
    ["true", macro{#msf{true}}],
    ["false", macro{#msf{false}}]
  ]],
  ["Base Type", "tyb", #{\\tau^{#textsc{B}}}, [
    ["unit", macro{#msf{unit}}],
    ["u32", macro{#msf{u32}}]
  ]],
  ["Sized Type", "tys", #{\\tau^{#textsc{SI}}}, [
    ["base", macro{#1}, () => [this.tyb]],
    ["tup", macro{(#1)}, () => [#{#(this.tys)_1, \\ldots, #(this.tys)_n}]],
    ["brw", macro{\\&#1\\,#2\\,#3}, () => [this.prov, this.ownq, this.tyx]]
  ]],
  ["Expression", "expr", "e", [
    ["const", macro{#1}, () => [this.const]],
    ["plc", macro{#1}, () => [this.plc]],
    ["let", macro{#msf{let}~#1 : #2~=~#3;~#4},
      () => [this.vr, this.tys, #{#(this.expr)_1}, #{#(this.expr)_2}]],
    ["asgn", macro{#1 := #2}, () => [this.plc, this.expr]],
    ["seq", macro{#1;~#2}, () => [#{#(this.expr)_1}, #{#(this.expr)_2}]],
    ["brw", macro{\\&#1\\,#2\\,#3}, () => [this.concrprov, this.ownq, this.expr]],
    ["pasgn", macro{#1 := #2}, () => [this.pexp, this.expr]],
    ["letprov", macro{#msf{letprov}\\langle #1 \\rangle ~ #2}, () => [this.concrprov, this.expr]],
    ["deref", macro{\\ast #1}, () => [this.expr]],
    ["call", macro{#1 \\langle #2, #3, #4 \\rangle(#5)}, () => [this.fname, #repeat{#(this.frmexpr)}, #repeat{#(this.prov)}, #repeat{#(this.tys)}, this.plc]]
  ]],
  ["Ownership Qualifier", "ownq", #{\\omega}, [
    ["shrd", macro{#msf{shrd}}],
    ["uniq", macro{#msf{uniq}}]
  ]],
  ["Place Expression", "pexp", "p", [
    ["var", macro{#1}, () => [this.vr]],
    ["elem", macro{#1.#2}, () => [this.pexp, this.num]],
    ["deref", macro{\\ast #1}, () => [this.pexp]]
  ]],
  ["Dead Type", "tyd", #{\\tau^{#textsc{SD}}}, [
    ["s", macro{#1^\\dagger}, () => [this.tys]],
    ["tup", macro{(#1)}, () => [#{#(this.tyd)_1, \\ldots, #(this.tyd)_n}]]
  ]],
  ["Maybe Unsized Type", "tyx", #{\\tau^{#textsc{XI}}}, [
    ["s", macro{#1}, () => [this.tys]],
    ["d", macro{[#1]}, () => [this.tys]]
  ]],
 ["Maybe Dead Type", "tysx", #{\\tau^{#textsc{SX}}}, [
    ["s", macro{#1}, () => [this.tys]],
    ["d", macro{#1}, () => [this.tyd]],
    ["tup", macro{(#1)}, () => [#{#(this.tysx)_1, \\ldots, #(this.tysx)_n}]]
  ]],
  ["Type", "ty", #{\\tau}, [
    ["tyx", macro{#1}, () => [this.tyx]],
    ["tysx", macro{#1}, () => [this.tysx]]
  ]],
  ["Loan", "loan", #{\\ell}, [
    ["form", macro{^{#1}#2}, () => [this.ownq, this.pexp]],
  ]],
  ["Frame Typing", "ft", #{\\mathcal{F}}, [
    ["empty", macro{\\bullet}],
    ["wty", macro{#1, #2 : #3}, () => [this.ft, this.vr, this.tyx]],
    ["wlf", macro{#1, #2 \\mapsto #3}, () => [this.ft, this.concrprov, #{\\{#repeat{#(this.loan)}\\}}]]
  ]],
  ["Stack Typing", "stackenv", #{\\Gamma}, [
    ["empty", macro{\\bullet}],
    ["wfr", macro{#1 \\mathrel{\\natural} #2}, () => [this.stackenv, this.ft]]
  ]],
  ["Kind", "kind", #{\\kappa}, [
    ["base", macro{\\bigstar}],
    ["prov", macro{#msf{PRV}}],
    ["frm", macro{#msf{FRM}}],
  ]],
  ["Type Var", "tyvar", #{\\alpha}],
  ["Type Environment", "tyenv", #{\\Delta}, [
    ["empty", macro{\\bullet}],
    ["wtfvar", macro{#1, #2 : #3}, () => [this.tyenv, this.tyvar, this.kindbase()]],
    ["wprov", macro{#1, #2 : #3}, () => [this.tyenv, this.abstrprov, this.kindprov()]],
    ["wfrm", macro{#1, #2 : #3}, () => [this.tyenv, this.frmvar, this.kindfrm()]],
    ["wconstr", macro{#1, #2 \\mathrel{:>} #3}, () => [this.tyenv, #{#(this.abstrprov)_1}, #{#(this.abstrprov)_2}]]
  ]],
  ["Global Entries", "fdef", #{\\varepsilon}, [
    ["form",
     macro{#msf{fn} ~ #1 \\left\\langle #2, #3, #4 \\right\\rangle\\left(#5 : #6\\right) \\rightarrow #7 ~ #msf{where} ~ #8 ~ \\{ #9 \\}},
     () => [
       this.fname, #{#repeat{\\psi}}, repeat(this.abstrprov),
       repeat(this.tyvar), this.vr, this.tys, this.tys,
       #{#repeat{#(this.abstrprov)_1 : #(this.abstrprov)_2}},
       this.expr
    ]]
  ]],
  ["Global Environment", "fenv", #{\\Sigma}, [
    ["empty", macro{\\bullet}],
    ["with", macro{#1, #2}, () => [this.fenv, this.fdef]]
  ]],
  ["Frame Var", "frmvar", #{\\varphi}],
  ["Frame Expression", "frmexpr", #{\\Phi}, [
    ["vr", macro{#1}, () => [this.frmvar]],
    ["ty", macro{#1}, () => [this.frmty]]
  ]],
  ["Frame Typing", "frmty", #{\\mathcal{F}}, [
    ["empty", macro{\\bullet}],
    ["withvr", macro{#1, #2 : #3}, () => [this.frmty, this.vr, this.tysx]],
    ["withloans", macro{#1, #2 \\mapsto #3}, () => [this.frmty, this.concrprov, #{#loanset}]]
  ]],
  ["Stack", "stack", #{\\sigma}, [
    ["empty", macro{\\bullet}],
    ["withframe", macro{#1 \\mathrel{\\natural} #2}, () => [this.stack, this.stackframe]]
  ]],
  ["Stack Frame", "stackframe", #{\\varsigma}, [
    ["empty", macro{\\bullet}],
    ["withvr", macro{#1, #2 \\mapsto #3}, () => [this.stackframe, this.vr, this.value]]
  ]]
]})
let uty = L.tybu32();
let olet = L.exprlet;
let plc = L.plc;
let vr = L.vr;
let expr = L.expr;
let tys = L.tys;
let uniq = L.ownquniq();
let shrd = L.ownqshrd();
let pexp = L.pexp;
let ty = L.ty;
let q = L.path;
let ownq = L.ownq;
%%%

1. A syntax of Rust-like programs with expressions $#expr$ and types $#ty$.
2. @Definition[names: ["fnctx", "tyvarctx", "tyctx"]]{A type-checker, expressed with the judgment $#tc{#fnctx}{#tyvarctx}{#tyctx}{#expr}{#ty}{#tyctx'}$ using the contexts $#tyctx$ for types and lifetimes, $#tyctx$ for type variables, and $#tyctx$ for global functions.}
3. An interpreter, expressed by a small-step operational semantics with the judgment $#stepsto{\\sigma}{#expr}{#stepped{\\sigma}}{#expr'}$ using $\\sigma$ for a runtime stack.

%%%
let tcnew = macro{#texRef{tcnew}{#1; #2; #3; #4 \\vdash #5 : #6 \\Rightarrow #7; #8}}
let hlt = macro{\\htmlStyle{color: red}{#1}}
let withslice = macro{\\bullet #1}
%%%


.@Definition[name: "loc"]{We extend this model by assuming that each expression in a program is automatically labeled with a unique location $#loc$.}
Then for a given expression $#expr$, our analysis computes the set of dependencies
@Definition[name: "deps"]{$#deps ::= \\{\\overline{#loc}\\}$}.
Because expressions have effects on persistent memory, we further compute a *dependency context*
@Definition[name: "depctx"]{$#depctx ::= \\{\\overline{#pexp \\mapsto #deps}\\}$}
from memory locations $#pexp$ to dependencies $#deps$.
The computation of information flow is intertwined with type-checking, represented as a modified type-checking judgment (additions highlighted in red):

$$
#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}
  {#expr _{#hlt{#loc}}}{#ty #hlt{#withslice{#deps}}}{#tyctx'}{#hlt{#depctx'}}
$$

.@Definition[name: "tcnew"]{This judgment is read as, "with type contexts $#fnctx, #tyvarctx, #tyctx$ and dependency context $#hlt{#depctx}$, $#expr$ at location $#hlt{#loc}$ has type $#ty$ and dependencies $#hlt{#deps}$, producing a new dependency context $#hlt{#depctx'}$."}

Oxide is a large language &mdash; describing every feature, judgment, and inference rule would exceed our space constraints. Instead, in this section we focus on a few key rules that demonstrate the novel aspects of our system. We first lay the foundations for dealing with variables and mutation (&sec_places), and then describe how we modularly analyze references (&sec_references) and function calls (&sec_funcalls).
The remaining rules can be found in the appendix.

@Subsection[name: "sec_places"]: Variables and Mutation

The core of Oxide is an imperative calculus with constants and variables. The abstract syntax for these features is below:

@(L.Bnf)[subset:
  ["vr", "num", "path", "plc", "const", "tyb",
   ["tys", ["base", "tup"]],
   ["expr", ["const", "plc", "let", "asgn", "seq"]]]
]

Constants are Oxide's atomic values and also the base-case for information flow. A constant's dependency is simply itself, expressed through the &tr_u32 rule:

%%%
let IRDef = ({name, ...props}) => {
  let defName = \`tr_\${name}\`;
  let displayName =  @Smallcaps{T-#name};
  return @Definition[
    name: defName,
    label: displayName
  ]{@IR[
    Right: displayName,
    ...props
  ]};
}
let gray = macro{\\htmlStyle{color: gray}{#1}};
%%%

@IRDef[name: "u32"]:
  | Bot:
    $#tcnew{#fnctx}{#tyvarctx}{#tyctx}
        {#hlt{#depctx}}{n_{#hlt{#loc}}}
        {#uty #hlt{#withslice{#deps}}}
        {#tyctx}{#hlt{#depctx}}$

Variables and mutation are introduced through let-bindings and assignment expressions, respectively. For example, this (location-annotated) program mutates a field of a tuple:

$$
#olet{t}{#(L.tystup){#uty, #uty}}{(1_{#loc _1}, 2_{#loc _2})}{#(L.exprasgn){t.1}{3_{#loc _3}}}
$$

Here, $t$ is a variable and $t.1$ is a *place*, or a description of a specific region in memory. For information flow, the key idea is that let-bindings introduce a set of places into $#depctx$, and then assignment expressions change a place's dependencies within $#depctx$.
In the above example, after binding $t$, then $#depctx$ is:

$$
#depctx = \\{t, t.0, t.1 \\mapsto \\{#loc _1, #loc _2\\}\\}
$$

After checking "$t.1 := 3$", then $#loc _3$ is added to $#depctx(t)$ and $#depctx(t.1)$, but not $#depctx(t.0)$. This is because the values of $t$ and $t.1$ have changed, but the value of $t.0$ has not. Formally, the let-binding rule is:

@IRDef[name: "let"]:
  | Top:
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{e_1}
        {#tys _1 #hlt{#withslice{#deps _1}}}{#tyctx}{#hlt{#depctx _1}}$
    @Premise:
      $#gray{#tyvarctx; #tyctx _1 \\vdash #tys _1 \\lesssim #tys _a \\Rightarrow #tyctx'_1}$
    @Premise:
      $#hlt{#depctx _1' = #depctx _1[\\forall #plc^\\square[#vr] ~ . ~ #plc \\mapsto #deps _1]}$
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}
        {\\mathsf{gc}\\text{-}\\mathsf{loans}(#tyctx'_1, #vr : #tys _a)}
        {#hlt{#depctx _1'}}{#expr _2}
        {#tys _2 #hlt{#withslice{#deps _2}}}
        {#tyctx _2, #vr : #(L.tyd)}{#hlt{#depctx _2}}$
  | Bot:
    $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}
      {#olet{#vr}{#tys _a}{#expr _1}{#expr _2}}
      {#tys _2 #hlt{#withslice{#deps _2}}}
      {#tyctx _2}{#hlt{#depctx _2}}$

Again, this rule (and many others) contain aspects of Oxide that are not essential for understanding information flow such as the subtyping judgment $#tys _1 \\lesssim #tys _a$ or the metafunction $\\mathsf{gc}\\text{-}\\mathsf{loans}$. For brevity we will not cover these aspects here, and instead refer the interested reader to @Ref[full: true]{weiss2019oxide}.
We have deemphasized (in grey) the judgments which are not important to understanding our information flow additions.

The key concept is the formula $ #depctx _1[\\forall #plc^\\square[#vr] ~ . ~ #plc \\mapsto #deps _1]$. This introduces two shorthands: first, $#plc^\\square[#vr]$ means "a place $#plc$ with root variable $#vr$ in a context $#plc^\\square$", used to decompose a place. In &tr_let, the update to $#depctx _1$ happens for all places with a root variable $#vr$. Second, $#depctx _1[#plc \\mapsto #deps _1]$ means "set $#plc$ to $#deps _1$ in $#depctx _1$". So this rule specifies that when checking $#expr _2$, all places within $#vr$ are initialized to the dependencies $#depctx _1$ of $#expr _1$.

Next, the assignment expression rule is defined as updating all the *conflicts* of a place $#plc$:

%%%
let updateconflicts = macro{
  #texRef{updateconflicts}{#msf{update}\\text{-}#msf{conflicts}(#1, #2, #3)}
};
%%%

@IRDef[name: "assign"]:
  | Top:
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{#expr}{#tys #hlt{#withslice{#deps}}}{#tyctx _1}{#hlt{#depctx _1}}$
    @Premise: $#gray{#tyctx _1(#plc) = #(L.tysx)}$
    @Premise:
      $#gray{(#(L.tysx) = #(L.tyd) \\vee #tyvarctx; #tyctx _1 \\vdash_{#uniq} #plc \\Rightarrow \\{~^{#uniq} #plc\\})}$
    @Premise:
      $#gray{#tyvarctx; #tyctx _1 \\vdash #tys \\lesssim #(L.tysx) \\Rightarrow #tyctx'}$
    @Premise:
      $#hlt{#depctx _2 = #depctx _1[#updateconflicts{#depctx _1}{#plc}{#deps}]}$
  | Bot:
    $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{#(L.exprasgn){#plc}{#expr}}
      {#(L.tybunit){} #hlt{#withslice{\\varnothing}}}
      {#tyctx'[#plc \\mapsto #tys] \\vartriangleright #plc}{#hlt{#depctx _2}}$

If you conceptualize a type as a tree and a path as a node in that tree, then a node's conflicts are its ancestors and descendants (but not siblings). Semantically, conflicts are the set of places whose value change if a given place is mutated. Recall from the previous example that $t.1$ conflicts with $t$ and $t.1$, but not $t.0$. Formally, we say two places are disjoint ($#("\\#")$) or conflict ($\\sqcap$) when:

%%%
let disjoint = macro{#texRef{disjoint}{#1 \\mathop{#("\\#")} #2}};
let notdisjoint = macro{#texRef{notdisjoint}{#1 \\sqcap #2}};
let eqdef = #{\\overset{\\mathrm{def}}{=}};
%%%

@Definition[name: "disjoint"]:
  @Definition[name: "notdisjoint"]:
    $$
    \\begin{align*}
      #disjoint{#vr _1 . #q _1}{#vr _2 . #q _2} &#eqdef #vr _1 \\neq #vr _2 \\vee (&&(#q _1 \\text{ is not a prefix of } #q _2) ~ \\wedge \\\\ & &&(#q _2 \\text{ is not a prefix of } #q _1)) \\\\
      #notdisjoint{#plc _1}{#plc _2} &#eqdef \\neg(#disjoint{#plc _1}{#plc _2})
    \\end{align*}
    $$

Then to update a place's conflicts in $#depctx$, we define the metafunction $#msf{update}\\text{-}#msf{conflicts}$ to add $#deps$ to all conflicting places $#pexp'$. (Note that this rule is actually defined over place *expressions* $#pexp$, which are explained in the next subsection.)

@Definition[name: "updateconflicts"]:
  $$
  \\begin{align*}
       &#updateconflicts{#depctx}{#pexp}{#deps} #eqdef \\\\
       &\\hspace{20pt} \\forall #pexp' \\mapsto #deps _{#pexp'} \\in #depctx _{#msf{cfl}}  ~ . ~ #pexp' \\mapsto #deps _{#pexp'} \\cup #deps \\\\
       &\\hspace{20pt} \\text{where} ~ #depctx _{#msf{cfl}} = \\{#pexp' \\mapsto #deps _{#pexp'} \\in #depctx \\mid #notdisjoint{#pexp}{#pexp'}\\}
  \\end{align*}
  $$

Finally, the rule for reading places is simply to look up the place's dependencies in $#depctx$:

@IRDef[name: "move"]:
  | Top:
    @Premise: $#gray{#tyvarctx; #tyctx \\vdash_{#uniq} #plc \\Rightarrow \\{~^{#uniq} #plc\\} }$
    @Premise: $#gray{#tyctx(#plc) = #tys }$
    @Premise: $#gray{#msf{noncopyable}_{#fnctx}~#tys }$
  | Bot:
    $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{#plc}
      {#tys #hlt{#withslice{#depctx(#plc)}}}
      {#tyctx[#plc \\mapsto #tys^{\\dagger}]}
      {#hlt{#depctx}}$

@Subsection[name: "sec_references"]: References

Beyond concrete places in memory, Oxide also contains references that point to places. As in Rust, these references have both a lifetime (called a "provenance") and a mutability qualifier (called an "ownership qualifier"). Their syntax is:

@(L.Bnf)[subset: [
  "concrprov", "abstrprov", "pexp", "prov", "ownq",
  ["tys", ["brw"]],
  ["expr", ["brw", "pasgn", "letprov"]]
]]

%%%
let msfb = macro{\\mathbf{#msf{#1}}};
let eref = macro{#(L.exprbrw){#2}{#1}{#3}};
let r = L.concrprov;
let deref = L.exprderef;
%%%

Provenances are created via a $#msfb{letprov}$ expression, and references are created via a borrow expression $#(L.exprbrw){#r}{#ownq}{#pexp}$ that has an initial concrete provenance $#r$ (abstract provenances are just used for types of function parameters). References are used in conjunction with place expressions $#pexp$ that are places whose paths contain dereferences. For example, this program creates, reborrows, and mutates a reference:

$$
\\begin{align*}
    &#msfb{letprov} \\langle #r _1, #r _2, #r _3, #r _4 \\rangle \\\\
    &#msfb{let}~x : (#uty, #uty) = (0, 0); \\\\
    &#msfb{let}~y : #eref{#uniq}{#r _2}{(#uty, #uty)} = #eref{#uniq}{#r _1}{#vr}; \\\\
    &#msfb{let}~z : #eref{#uniq}{#r _4}{#uty} = #eref{#uniq}{#r _3}{(#deref{y}).1}; \\\\
    &{#deref{z}} := 1_{#loc}
\\end{align*}
$$

Consider the information flow induced by $#deref{z} := 1_{#loc}$. We need to compute all places that $z$ could point-to, in this case $x.1$, so $#loc$ can be added to the conflicts of $x.1$. Essentially, we must perform a *pointer analysis* &smaragdakis2015pointer.

The key idea is that Oxide already does a pointer analysis! Performing one is an essential task in ensuring ownership-safety. All we have to do is extract the relevant information with Oxide's existing judgments. This is represented by the information flow extension to the reference-mutation rule:

@IRDef[name: "assignderef"]:
  | Top:
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{#expr}{#tys _n #hlt{#withslice{#deps}}}{#tyctx _1}{#hlt{#depctx _1}}$
    @Premise: $#gray{#tyvarctx; #tyctx _1 \\vdash_{#uniq} #pexp : #tys _o}$
    @Premise: $#ownsafe{#tyvarctx}{#tyctx _1}{#uniq}{#pexp}{#loanset}$
    @Premise: $#gray{#tyvarctx; #tyctx _1 \\vdash #tys _n \\lesssim #tys _o \\Rightarrow #tyctx'}$
    @Premise:
      $#hlt{#depctx _2 = #depctx _1[\\forall ~ ^{#(L.ownq)} #pexp' \\in #loanset ~ . ~ #updateconflicts{#depctx _1}{#pexp'}{#deps}]}$
  | Bot:
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}
        {#(L.exprpasgn){#pexp}{#expr}}
        {#(L.tybunit){} #hlt{#withslice{\\varnothing}}}
        {#tyctx' \\vartriangleright #pexp}{#hlt{#depctx _2}}$

.@Definition[name: "ownsafe"]{Here, the important concept is Oxide's ownership safety judgment: $#tyvarctx; #tyctx \\vdash_{#ownq} p \\Rightarrow #loanset$, read as "in the contexts $#tyvarctx$ and $#tyctx$, $#pexp$ can be used $#ownq$-ly and points to a loan in $#loanset$."}
@Definition[name: "loan"]{A loan $#loan ::= {^{#ownq} #pexp}$ is a place expression with an ownership-qualifier.}
In Oxide, this judgment is used to ensure that a place is used safely at a given level of mutability. For instance, in the example at the top of this column, if $#deref{z} := 1$ was replaced with $x.1 := 1$, then this would violate ownership-safety because $x$ is already borrowed by $y$ and $z$.

In the example as written, the ownership-safety judgment for $#deref{z}$ would compute the loan set:

$$
#loanset = \\{\\, {^{#uniq}(#deref{z})}, {^{#uniq} (#deref{y}).1}, {^{#uniq} x.1}\\}
$$

Note that $x.1$ is in the loan set of $#deref{z}$. That suggests the loan set can be used as a pointer analysis. The complete details of computing the loan set can be found in @Ref[full: true, extra: "p. 12"]{weiss2019oxide}, but the summary for this example is:

% let outlives = macro{#texRef{outlives}{#1 :> #2}};

1. Checking the borrow expression "$#eref{#uniq}{#r _1}{x}$" gets the loan set for $x$, which is just $\\{{^{#uniq} x}\\}$, and so sets $#tyctx(#r _1) = \\{{^{#uniq} x}\\}$.
2. Checking the assignment "$y = #eref{#uniq}{#r _1}{x}$" requires that $#eref{#uniq}{#r _1}{(#uty, #uty)}$ is a subtype of $#eref{#uniq}{#r _2}{(#uty, #uty)}$, which requires that @Definition[name: "outlives"]{$#r _1$ "outlives" $#r _2$, denoted $#outlives{#r _1}{#r _2}$}.
3. The constraint $#outlives{#r _1}{#r _2}$ adds $#tyctx(#r _1)$ to $#tyctx(#r _2)$, so $#tyctx(r _2) = \\{{^{#uniq} x}\\}$.
4. Checking "$#eref{#uniq}{#r _3}{(#deref{y}).1}$" gets the loan set for $(#deref{y}).1$,  which is:

   $$
   \\{{^{#uniq} p.1} \\mid {^{#uniq} p} \\in #tyctx(#r _2)\\} \\cup \\{{^{#uniq} (#deref{y}).1}\\} = \\{{^{#uniq} x.1}, {^{#uniq} (#deref{y}).1}\\}
   $$

   That is, the loans for $#r _2$ are looked up in $#tyctx$ (to get $\\{x\\}$), and then the additional projection $\\_.1$ is added on-top of each loan (to get $\\{x.1\\}$).
5. Then $#tyctx(#r _4) = #tyctx(#r _3)$ because $#outlives{#r _3}{#r _4}$.
6. Finally, the loan set for $#deref{z}$ is:

   $$
   #tyctx(#r _4) \\cup \\{{^{#uniq} (#deref{z})}\\} = \\{{^{#uniq} x.1}, {^{#uniq} (#deref{y}).1}, {^{#uniq} (#deref{z})}\\}
   $$

Applying this concept to the &tr_assignderef rule, we compute information flow for reference-mutation as: when mutating $#pexp$ with loans $#loanset$, add $#deps _e$ to all the conflicts for every loan $^{#uniq} #pexp' \\in #loanset$.


@Subsection[name: "sec_funcalls"]: Function Calls

Finally, we examine how to modularly compute information flow through function calls, starting with syntax:

@(L.Bnf)[subset: [ "frmvar", "fname", "tyvar", ["expr", ["call"]], "fdef", "fenv"]]

Oxide functions are parameterized by frame variables $#(L.frmvar)$ (for closures), abstract provenances $#(L.abstrprov)$ (for provenance polymorphism), and type variables $#(L.tyvar)$ (for type polymorphism). Unlike Oxide, we restrict to functions with one argument for simplicity in the formalism. Calling a function $#(L.fname)$ requires an argument $#plc$ and any type-level parameters $#(L.frmexpr), #(L.prov)$ and $#(L.ty)$.

The key question is: without inspecting its definition, what is the *most precise* assumption we can make about a function's information flow while still being sound? By "precise" we mean "if the analysis says there is a flow, then the flow actually exists", and by "sound" we mean "if a flow actually exists, then the analysis says that flow exists." For example consider this program:

% let abstrprov = L.abstrprov;

$$
\\begin{align*}
    &#msfb{fn}~#msf{f}\\langle #abstrprov _1, #abstrprov _2 \\rangle(x: (#eref{#uniq}{#abstrprov _1}{#uty}, #eref{#shrd}{#abstrprov _2}{#uty})) \\{ ~ #gray{\\text{???}} ~ \\}\\\\
    &#msfb{let}~x : #uty = 1_{#loc _1}; ~
    #msfb{let}~y : #uty = 2_{#loc _2}; \\\\
    &#msfb{letprov}\\langle #r _1, #r _2 \\rangle ~ #msfb{let}~t : (#eref{#uniq}{#r _1}{#uty}, #eref{#shrd}{#r _2}{#uty}) \\\\
    & \\hspace{10pt} = ( #eref{#uniq}{#r _1}{x}, #eref{#shrd}{#r _2}{y}); \\\\
    &#msf{f}\\langle #r _1, #r _2\\rangle(t)
\\end{align*}
$$

First, what can $#msf{f}(t)$ mutate? Any data behind a shared reference is immutable, so only $#deref{t.0}$ could possibly be mutated, not $#deref{t.1}$. More generally, the argument's *transitive mutable references* must be assumed to be mutated.

Second, what are the inputs to the mutation of $#deref{t.0}$? This could theoretically be any possible value in the input, so both $#deref{t.0}$ and $#deref{t.1}$. More generally, every *transitively readable place* from the argument must be assumed to be to be an input to the mutation. So in this example, a modular analysis of the information flow from calling $#msf{cp}$ would add $\\{#loc _1, #loc _2\\}$ to $#depctx(x)$ but not $#depctx(y)$.

% let refs = macro{#texRef{refs}{#1\\text{-}#msf{refs}(#2)}};
% let ownqcmp = macro{#texRef{ownqcmp}{#1 \\lesssim #2}};

To formalize these concepts, we first need to describe the transitive references of a place. The $#refs{#ownq}{#pexp, #ty}$ metafunction computes a place expression for every reference accessible from $#pexp$. If $#ownq = #uniq$ then this just includes unique references, otherwise it includes unique and shared ones.

@Definition[name: "refs"]:
  $$
  \\begin{align*}
    #refs{#ownq}{#pexp, #(L.tyb)} &= \\varnothing \\\\
    #refs{#ownq}{#pexp, (#tys _1, \\ldots, #tys _n)} &=
        \\bigcup_i #refs{#ownq}{#pexp.i, #tys _i} \\\\
    #refs{#ownq}{#pexp, #eref{#ownq'}{#(L.prov)}{#(L.tyx)}} &= \\begin{cases}
      \\{#deref{#pexp}\\} \\cup #refs{#ownq}{#deref{p}, #(L.tyx)} & \\text{if $#ownqcmp{#ownq}{#ownq'}$} \\\\
      \\varnothing & \\text{otherwise}
    \\end{cases}
  \\end{align*}
  $$

% let loans = macro{#texRef{loans}{#1\\text{-}#msf{loans}(#2)}}

.@Definition[name: "ownqcmp"]{Here, $#ownqcmp{#ownq}{#ownq'}$ means "a loan at $#ownq$ can be used as a loan at $#ownq'$", defined as $#uniq \\not\\lesssim #shrd$ and $#ownq \\lesssim #ownq'$ otherwise.}
Then $#loans{#ownq}{#pexp, #ty, #tyvarctx, #tyctx}$ can be defined as the set of concrete places accessible from those transitive references:

@Definition[name: "loans"]:
  $$
  \\begin{align*}
    &#loans{#ownq}{#pexp, #ty, #tyvarctx, #tyctx} #eqdef \\\\
    &\\hspace{10pt} \\bigcup_{#pexp _1 \\in #refs{#ownq}{#pexp, #ty}} \\{#pexp _2 \\mid {^{#ownq} #pexp _2} \\in #loanset\\} &&\\text{where $#ownsafe{#tyvarctx}{#tyctx}{#ownq}{#pexp _1}{#loanset}$}
  \\end{align*}
  $$

Finally, the function application rule can be revised to include information flow as follows:

% let arrg = #msf{arg};

@IRDef[name: "app"]:
  | Top:
    @Premise: $#gray{#repeat{#fnctx; #tyvarctx; #tyctx \\vdash #(L.frmexpr)}}$
    @Premise: $#gray{#repeat{#tyvarctx; #tyctx \\vdash #(L.prov)} }$
    @Premise: $#gray{#repeat{#fnctx; #tyvarctx; #tyctx \\vdash #tys}}$
    @Premise:
      $#fnctx(#(L.fname)) = #(L.fdefform){#(L.fname)}
        {#repeat{#(L.frmvar)}}{#repeat{#abstrprov}}{#repeat{#(L.tyvar)}}
        {#plc}{#tys _a}{#tys _r}{#repeat{#outlives{#abstrprov _1}{#abstrprov _2}}}{#expr}$
    @Premise:
      $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}{#plc}
        {#tys _a
            #repeat{[#(L.frmexpr) / #(L.frmvar)]}
            #repeat{[#(L.prov) / #abstrprov]}
            #repeat{[#tys / #(L.tyvar)]}
         #hlt{#withslice{#deps}}}
        {#tyctx _1}{#hlt{#depctx}}$
    @Premise:
      $#gray{#tyvarctx; #tyctx _1 \\vdash
        #repeat{
          #outlives{#abstrprov _2 #repeat{[#(L.prov) / #abstrprov]}}
            {#abstrprov _1 #repeat{[#(L.prov) / #abstrprov]}}}}$
    @Premise:
      $#hlt{#deps _{#arrg} = #deps \\cup \\bigcup_{#pexp \\in #loans{#shrd}{#plc, #tys, #tyvarctx, #tyctx _2}} #depctx(#pexp)}$
    @Premise:
      $$
      #hlt{
        \\begin{align*}
        #depctx' = #depctx[&\\forall #pexp \\in #loans{#uniq}{#plc, #tys, #tyvarctx, #tyctx _2} ~ .
        \\\\
        &#updateconflicts{#depctx}{#pexp}{#deps _{#arrg}}]
        \\end{align*}
      }
      $$
  | Bot:
    $#tcnew{#fnctx}{#tyvarctx}{#tyctx}{#hlt{#depctx}}
      {#(L.exprcall){#(L.fname)}{\\overline{\\Phi}}{\\overline{\\rho}}{\\overline{#tys}}{#plc}}
      {#tys _r
          #repeat{[#(L.frmexpr) / #(L.frmvar)]}
          #repeat{[#(L.prov) / #abstrprov]}
          #repeat{[#tys / #(L.tyvar)]}
       #hlt{#withslice{#deps _{#arrg}}}}
      {#tyctx _2}{#hlt{#depctx '}}$

The collective dependencies of the input $#plc$ are collected into $#deps _{#arrg}$, and then every unique reference is updated with $#deps _{#arrg}$. Additionally, the function's return value is assumed to be influenced by any input, and so has dependencies $#deps _{#arrg}$.

Note that this rule does not depend on the body $#expr$ of the function $#(L.fname)$, only its type signature in $#fnctx$. This is the key to the modular approximation. Additionally, it means that this analysis can trivially handle higher-order functions. If $#(L.fname)$ were a parameter to the function being analyzed, then no control-flow analysis is needed to guess its definition.

**TODO: put this into an "extra" grammar somewhere**

@(L.Bnf)[subset: ["tysx", "tyd", "tyx", "ty", "frmexpr", "frmty"]]

@Section[name: "sec_soundness"]: Soundness

To characterize the correctness of our analysis, we seek to prove its *soundness*: if a true information flow exists in a program, then the analysis computes that flow. The standard soundness theorem for information flow systems is *noninterference* &goguen1982security. At a high level, noninterference states that for a given program and its dependencies, and for any two execution contexts, if the dependencies are equal between contexts, then the program will execute with the same observable behavior in both cases. For our analysis, we focus just on values produced by the program, instead of other behaviors like termination or timing.

To formally define noninterference within Oxide, we first need to explore Oxide's operational semantics. Oxide programs are executed in the context of a stack of frames that map variables to values:

@(L.Bnf)[subset: ["value", "stack", "stackframe"]]

% let stack = L.stack;

For example, in the empty stack $#(L.stackempty){}$, the expression "$#olet{x}{#uty}{1}{x := 2}$" would first add $x \\mapsto 1$ to the stack. Then executing $x := 2$ would update $#(L.stack)(x) = 2$. More generally, we use the shorthand $#stack(#pexp)$ to mean \`\`reduce $#pexp$ to a concrete location $#plc$, then look up the value of $#plc$ in $#stack$.''

The key ingredient for noninterference is the equivalence of dependencies between stacks. That is, for two stacks $#stack _1$ and $#stack _2$ and a set of dependencies $#deps$ in a context $#depctx$, we say those stacks are *the same up to $#deps$* if all $#pexp$ with $#depctx(#pexp) \\subseteq #deps$ are the same between stacks. Formally, the dependencies of $#deps$ and equivalence of heaps are defined as:

%%%
let fdeps = macro{#texRef{fdeps}{#msf{deps}(#1, #2)}};
let stackeq = macro{#texRef{stackeq}{\\mathop{\\sim}_{#1}}};
let stackdepeq = macro{#texRef{stackdepeq}{\\mathop{\\sim}^{#1}_{#2}}};
%%%

@Definition[names: ["fdeps", "stackeq", "stackdepeq"]]:
  $$
  \\begin{align*}
      #fdeps{#depctx}{#deps} &#eqdef \\{#pexp \\mid #pexp \\mapsto #deps _{#pexp} \\in #depctx \\wedge #deps _{#pexp} \\subseteq #deps\\} \\\\
      #stack _1 #stackeq{P} #stack _2 &#eqdef \\forall #pexp \\in P ~ . ~ #stack _1(#pexp) = #stack _2(#pexp) \\\\
      #stack _1 #stackdepeq{#depctx}{#deps} #stack _2 &#eqdef #stack _1 #stackeq{#fdeps{#depctx}{#deps}} #stack _2
  \\end{align*}
  $$

Then we define noninterference as follows:

%%%
let evalsto = macro{#fnctx \\vdash ({#1}; {#2}) \\xrightarrow{\\ast} ({#3}; {#4})};
let stacksafe = macro{#texRef{stacksafe}{#1 \\vdash #3 : #4}};
%%%

@Theorem[name: "noninterference", title: "Noninterference"]:
  Let $#expr$ such that:

  $$
  #tcnew{#fnctx}{\\bullet}{#tyctx}{#depctx}{#expr}{#ty #withslice{#deps}}{#tyctx'}{#depctx'}
  $$

  For $i \\in \\{1, 2\\}$, let $#stack _i$ such that:

  $$
  #stacksafe{#fnctx}{#stack _i}{#tyctx} \\hspace{12pt} \\text{and} \\hspace{12pt} #evalsto{#stack _i}{#expr}{#stepped{#stack}_i}{#(L.value) _i}
  $$

  Then:
  1. $#stack _1 #stackdepeq{#depctx}{#deps} #stack _2 \\implies #(L.value)_1 = #(L.value)_2$
  2. $\\forall #pexp \\mapsto #deps _{#pexp} \\in #depctx' ~ . ~ #stack _1 #stackdepeq{#depctx}{#deps _p} #stack _2 \\implies #stepped{#stack}_1(#pexp) = #stepped{#stack}_2(#pexp)$

This theorem states that given a well-typed expression $#expr$ and corresponding stacks $#stack _i$, then its output $#(L.value)_i$ should be equal if the expression's dependencies $#deps$ are initially equal. Moreover, for any place expression $#pexp$, if its dependencies in the output context $#depctx'$ are initially equal then the stack value will be the same after execution.

Note that the context $#tyvarctx$ is required to be empty because an expression $e$ can only evaluate if it does not contain abstract type or provenance variables.
@Definition[name: "stacksafe"]{The judgment $#stacksafe{#fnctx}{#stack _i}{#tyctx}$ means "the stack $#stack _i$ is well-typed under $#stack$ and $#tyctx$".}
That is, for all places $#plc$ in $#tyctx$, then $#plc \\in #stack$ and $#stack(#plc)$ has type $#tyctx(#plc)$.

The proof of &noninterference, found in the appendix, guarantees that we can soundly compute information flow for Oxide programs.

@Section[name: "sec_implementation"]: Implementation

Our formal model provides a sound theoretical basis for analyzing information flow in Oxide. However, Rust is a more complex language than Oxide, and the Rust compiler uses many intermediate representations beyond its surface syntax. Therefore in this section, we describe the key details of how our system, #sysname, bridges theory to practice. Specifically:

1. Rust computes lifetime-related information on a control-flow graph (CFG) program representation, not the high-level AST. So we translate our analysis to work for CFGs (&sec_mir).
2. Rust does not compute the loan set for lifetimes directly like in Oxide. So we must reconstruct the loan sets given the information exported by Rust (&sec_lifetimes).
3. Rust contains escape hatches for ownership-unsafe code that cannot be analyzed using our analysis. So we describe the situations in which our analysis is unsound for Rust programs (&sec_limitations).

@Subsection[name: "sec_mir"]: Analyzing Control-Flow Graphs

@Figure[name: "fig_mir_example"]:
  @Row:
    \`\`\`
    fn get_count(
      h: &mut HashMap<String, u32>,
      k: String
    ) -> u32 {
      if !h.contains_key(&k) {
        h.insert(k, 0); 0
      } else {
        *h.get(&k).unwrap()
      }
    }
    \`\`\`

    @object[data: "static/mir-example.svg", type: "image/svg+xml", width: "450px"]

  @Caption:
    Example of how #sysname computes information flow. On the left is a Rust function \`get_count\` that finds a value in a hash map for a given key, and inserts 0 if none exists. On the right \`get_count\` is lowered into Rust's MIR control-flow graph, annotated with information flow. Each rectangle is a basic block, named at the top. Arrows indicate control flow (panics omitted).

    Beside each instruction is the result of the information flow analysis, which maps place expressions to locations in the CFG (akin to $#depctx$ in &sec_analysis). For example, the \`insert\` function call adds dependencies to \`*h\` because it is assumed to be mutated, since it is a mutable reference. Additionally, the \`switch\` instructions and \`_4\` variable are added as dependencies to \`h\` because the call to \`insert\` is control-dependent on the switch.

The Rust compiler lowers programs into a "mid-level representation", or MIR, that represents programs as a control-flow graph. Essentially, expressions are flattened into sequences of instructions (basic blocks) which terminate in instructions that can jump to other blocks, like a branch or function call.  &fig_mir_example shows an example CFG and its information flow.

To implement the modular information flow analysis for MIR, we reused standard static analysis techniques for CFGs, i.e., a flow-sensitive, forward dataflow analysis pass where:

* At each instruction, we maintain a mapping from place expressions to a set of locations in the CFG on which the place is dependent, comparable to $#depctx$ in &sec_analysis.
* A transfer function updates $\\Theta$ for each instruction, e.g. $#pexp := #expr$ follows the same rules as in &tr_assignderef by adding the dependencies of $#expr$ to all conflicts of aliases of $p$.
* The input $#depctx^{#msf{in}}$ to a basic block is the join of each of the output $#depctx^{#msf{out}}_i$ for each incoming edge, i.e. $#depctx^{#msf{in}} = \\bigvee_i #depctx^{#msf{out}}_i$ . The join operation is key-wise set union, or more precisely:

    $$
    #depctx _1 \\vee #depctx _2 #eqdef \\{#(L.vr) \\mapsto #depctx _1(#(L.vr)) \\cup #depctx _2(#(L.vr)) \\mid #(L.vr) \\in #depctx _1 \\vee #(L.vr) \\in #depctx _2\\}
    $$
* We iterate this analysis to a fixpoint, which we are guaranteed to reach because $\\langle#depctx, \\vee\\rangle$ forms a join-semilattice.

To handle indirect information flows via control flow, such as the dependence of \`h\` on \`contains_key\` in &fig_mir_example, we compute the control-dependence between instructions.  We define control-dependence following @Ref[full: true]{ferrante1987program}:  an instruction $Y$ is control-dependent on $X$ if there exists a directed path $P$ from $X$ to $Y$ such that any $Z$ in $P$ is post-dominated by $Y$, and $X$ is not post-dominated by $Y$. An instruction $X$ is post-dominated by $Y$ if $Y$ is on every path from $X$ to a \`return\` node. We compute control-dependencies by generating the post-dominator tree and frontier of the CFG using the algorithms of @Ref[full: true]{cooper2001simple} and @Ref[full: true]{cytron1989efficient}, respectively.

Besides a return, the only other control-flow path out of a function in Rust is a panic. For example, each function call in &fig_mir_example actually has an implicit edge to a panic node (not depicted). Unlike exceptions in other languages, panics are designed to indicate unrecoverable failure. Therefore we exclude panics from our control-dependence analysis.

@Subsection[name: "sec_lifetimes"]: Computing Loan Sets from Lifetimes

To verify ownership-safety (perform "borrow-checking"), the Rust compiler does not explicitly build the loan sets of lifetimes (or provenances in Oxide terminology). The borrow checking algorithm performs a sort of flow-sensitive dataflow analysis that determines the range of code during which a lifetime is valid, and then checks for conflicts e.g. in overlapping lifetimes (see the non-lexical lifetimes RFC &nllrfc.

However, Rust's borrow checker relies on the same fundamental language feature as Oxide to verify ownership-safety: outlives-constraints. For a given Rust function, Rust can output the set of outlives-constraints between all lifetimes in the function. These lifetimes are generated in the same manner as in Oxide, such as from inferred subtyping requirements or user-provided outlives-constraints. Then given these constraints, we compute loan sets via a process similar to the ownership-safety judgment described in &sec_references. In short, for all instances of borrow expressions $#eref{#ownq}{#r}{#pexp}$ in the MIR program, we initialize $#tyctx(#r) = \\{#pexp\\}$. Then we propagate loans via $#tyctx(#r) = \\bigcup_{#outlives{#r'}{#r}} #tyctx(#r')$ until $#tyctx$ reaches a fixpoint.


@Subsection[name: "sec_limitations"]: Handling Ownership-Unsafe Code

Rust has a concept of *raw pointers* whose behavior is comparable to pointers in C. For a type \`T\`, an immutable reference has type \`&T\`, while an immutable raw pointer has type \`*const T\`. Raw pointers are not subject to ownership restrictions, and they can only be used in blocks of code demarcated as \`unsafe\`. They are primarily used to interoperate with other languages like C, and to implement primitives that cannot be proved as ownership-safe via Rust's rules.

Our pointer and mutation analysis fundamentally relies on ownership-safety for soundness. We do not try to analyze information flowing directly through unsafe code, as it would be subject to the same difficulties of C++ in &sec_intro. While this limits the applicability of our analysis, empirical studies have shown that most Rust code does not (directly) use unsafe blocks &astrauskas2020programmers&evans2020rust. We further discuss the impact and potential mitigations of this limitation in &sec_discussion.

@Section[name: "sec_evaluation"]: Evaluation

&sec_soundness established that our analysis is *sound*. The next question is whether it is &precise: how many spurious flows are included by our analysis? We evaluate two directions:

1. What if the analysis had *more* information? If we could analyze the definitions of called functions, how much more precise are whole-program flows vs. modular flows?
2. What if the analysis had *less* information? If Rust's type system was more like C++, i.e. lacking ownership, then how much less precise do the modular flows become?

To answer these questions, we created three modifications to Flowistry:

* @Definition[name: "wholeprogram", label: @Smallcaps{Whole-Program}]:
    The analysis recursively analyzes information flow within the definitions of called functions. For example, if calling a function \`f(&mut x, y)\` where \`f\` does not actually modify \`x\`, then the &wholeprogram analysis will not register a flow from \`y\` to \`x\`.
* @Definition[name: "mutblind", label: @Smallcaps{Mut-Blind}]:
    The analysis does not distinguish between mutable and immutable references. For example, if calling a function \`f(&x)\`, then the analysis assumes that \`x\` can be modified.
* @Definition[name: "pointerblind", label: @Smallcaps{Pointer-Blind}]:
    The analysis does not use lifetimes to reason about references, and rather assumes all references of the same type can alias. For example, if a function takes as input \`f(x: &mut i32, y: &mut i32)\` then \`x\` and \`y\` are assumed to be aliases.

The &wholeprogram modification represents the most precise information flow analysis we can feasibly implement.
The &mutblind and &pointerblind modifications represent an ablation of the precision provided by ownership types.
Each modification can be combined with the others, representing $2^3 = 8$ possible conditions for evaluation.

To better understand &wholeprogram, say we are analyzing the information flow for an expression \`f(&mut x, y)\` where \`f\` is defined as \`f(a, b) { (*a).1 = b; }\`. After analyzing the implementation of \`f\`, we translate flows to parameters of \`f\` into flows on arguments of the call to \`f\`. So the flow \`b -> (*a).1\` is translated into\`y -> x.1\`.

Additionally, if the definition of \`f\` is not available, then we fall back to the modular analysis. Importantly, due to the architecture of the Rust compiler, the only available definitions are those *within the package being analyzed*. Therefore even with &wholeprogram, we cannot recurse into e.g. the standard library.

With these three modifications, we compare the number of flows computed from a dataset of Rust projects (&sec_dataset) to quantitatively (&sec_quant) and qualitatively (&sec_qual) evaluate the precision of our analysis.

@Subsection[name: "sec_dataset"]: Dataset

To empirically compare these modifications, we curated a dataset of Rust packages (or "crates") to analyze. We had two selection criteria:

1. To mitigate the single-crate limitation of &wholeprogram, we preferred large crates so as to see a greater impact from the &wholeprogram modification. We only considered crates with over 10,000 lines of code as measured by the \`cloc\` utility &cloc.
2. To control for code styles specific to individual applications, we wanted crates from a wide range of domains.

After a manual review of large crates in the Rust ecosystem, we selected 10 crates, shown in &tab_dataset. We built each crate with as many feature flags enabled as would work on our Ubuntu 16.04 machine. Details like the specific flags and commit hashes can be found in the appendix.

@Figure[name: "tab_dataset"]:
  | Project | Crate | Purpose | LOC | \\# Vars | \\# Funcs | Avg. Instrs/Func
  | ------- | ----- | ------- | --- | ------- | -------- | ----------------- |
  | [rayon](https://github.com/rayon-rs/rayon) | &nbsp; | Data parallelism library | 15,524 | 10,607 | 1,079 | 16.6
  | [rustls](https://github.com/ctz/rustls) | rustls | TLS implementation | 16,866 | 23,407 | 868 | 42.4
  | [sccache](https://github.com/mozilla/sccache) | &nbsp; | Distributed build cache | 23,202 | 23,987 | 643 | 62.1
  | [nalgebra](https://github.com/dimforge/nalgebra) | &nbsp; | Numerics library | 31,951 | 35,886 | 1,785 | 26.7
  | [image](https://github.com/image-rs/image) | &nbsp; | Image processing library | 20,722 | 39,077 | 1,096 | 56.8
  | [hyper](https://github.com/hyperium/hyper) | &nbsp; | HTTP server | 15,082 | 44,900 | 790 | 82.9
  | [rg3d](https://github.com/mrDIMAS/rg3d) | &nbsp; | 3D game engine | 54,426 | 59,590 | 3,448 | 25.7
  | [rav1e](https://github.com/xiph/rav1e) | &nbsp; | Video encoder | 50,294 | 76,749 | 931 | 115.4
  | [RustPython](https://github.com/RustPython/RustPython) | vm | Python interpreter | 47,927 | 97,637 | 3,315 | 51.0
  | &nbsp; | &nbsp; | **Total:** | 286,682 | 435,979 | 14,696 | &nbsp; |

  @Caption:
    Dataset of crates used to evaluate information flow precision, ordered in increasing number of variables analyzed. Each project often contains many crates, so a sub-crate is specified where applicable, and the root crate is analyzed otherwise. Metrics displayed are LOC (lines of code), number of variables, number of functions, and the average number of MIR instructions per function (size of CFG).

For each crate, we ran the information flow analysis on every function in the crate, repeated under each of the 8 conditions. Within a function, for each local variable $x$, we compute the size of $#depctx(x)$ at the exit of the CFG --- in terms of program slicing, we compute the size of the variable's backward slice at the function's return instructions. The resulting dataset then has four independent variables (crate, function, condition, variable name) and one dependent variable (size of dependency set) for a total of 3,487,832 data points.

Our main goal in this evaluation is to analyze precision, not performance. Our baseline implementation is reasonably optimized --- the median per-function execution time was 370.24$\\mu\\text{s}$. But &wholeprogram is designed to be as precise as possible, so its naive recursion is sometimes extremely slow. For example, when analyzing the \`GameEngine::render\` function of the \`rg3d\` crate (with thousands of functions in its call graph), the modular analysis takes 0.13s while the recursive analysis takes 23.18s, a 178$\\times$ slowdown. Future work could compare our modular analysis to whole-program analyses across the precision/performance spectrum, such as in the extensive literature on context-sensitivity &smaragdakis2015pointer.

@Subsection[name: "sec_quant"]: Quantitative Results

We observed no meaningful patterns from the interaction of modifications --- for example, in a linear regression of the interaction of &mutblind and &pointerblind against the size of the dependency set, each condition is individually statistically significant ($p < 0.001$) while their interaction is not ($p = 0.337$).
@Definition[name: "baseline", label: @Smallcaps{Baseline}]{So to simplify our presentation, we focus only on four conditions: three for each modification individually active with the rest disabled, and one for all modifications disabled, referred to as &baseline.}

@Subsubsection[name: "sec_whole"]: &wholeprogram

%%%
import wholeProgramData from './data/whole_program.json'

let graphBase = {
  encoding: {y: {field: "count", type: "quantitative"}},
  layer: [
    {
      transform: [{filter: "datum.bin > 0 && datum.count > 0"}],
      mark: "bar",
      encoding: {
        x: {field: "bin", type: "quantitative", scale: {type: "log"},
             title: "% difference in dependency set size, log scale (with zero)"}
      }
    },
    {
      transform: [{filter: "datum.bin == 0"}],
      mark: "bar",
      encoding: {
        x: {value: 0.0001}
      }
    },
  ]
};

let leftGraph = _.cloneDeep(graphBase);
leftGraph.title = {text: "Y-Linear"}
leftGraph.encoding.y.title = "Count"

let rightGraph = _.cloneDeep(graphBase);
rightGraph.title = {text: "Y-Log"}
Object.assign(rightGraph.encoding.y, {
  scale: {type: "log"},
  title: "Count, log scale"
});

let wholeProgramGraph = {data: {values: wholeProgramData}, hconcat: [leftGraph, rightGraph]};
%%%

@Figure[name: "fig_recurse"]:
  @VegaLite[spec: wholeProgramGraph, name: "whole_program"]
  @Caption:
    Distribution in differences of dependency set size between &wholeprogram and &baseline analyses. The x-axis is a log-scale with 0 added for comparison. Most sets are the same, so 0 dominates (left). A log-scale (right) shows the tail more clearly.

For &wholeprogram, we compare against &baseline to answer our first evaluation question: how much more precise is a whole-program analysis than a modular one? To quantify precision, we compare the *percentage increase in size* of dependency sets for a given variable between two conditions. For instance, if &wholeprogram computes $|#depctx(x)| = 2$ and &baseline computes $|#depctx(x)| = 5$ for some $x$, then the difference is $(5 - 2) / 2 = 1.5 = 150\\%$.

&fig_recurse_whole_program_Left shows a histogram of the differences between &wholeprogram and &baseline for all variables. In 94% of all cases, the &wholeprogram and &baseline conditions produce the same result and hence have a difference of 0. In the remaining 6% of cases with a non-zero difference, visually enhanced with a log-scale in &fig_recurse_whole_program_Right, the metric follows a right-tailed log-normal distribution. We can summarize the log-normal by computing its median, which is 7%. This means that within the 6% of non-zero cases, the median difference is an increase in size by 7%. Thus, the modular approximation does not significantly increase the size of dependency sets in the vast majority of cases.

@Subsubsection[name: "sec_blind"]: &mutblind and &pointerblind

%%%
import mutBlindData from './data/mut_blind.json'
import pointerBlindData from './data/pointer_blind.json'

let graphBase = {
  encoding: {
     x: {field: "bin", type: "quantitative", scale: {type: "log"},
             title: "% difference in dependency set size, log scale"},
    y: {field: "count", type: "quantitative", scale: {domain: [0, 13000]}}
  },
  transform: [{filter: "datum.bin > 0 && datum.count > 0"}],
  mark: "bar",
};

let wholeProgramGraph = {
  data: {values: wholeProgramData},
  title: "Modular - Whole-Program",
  ...graphBase
};
let mutBlindGraph = {
  data: {values: mutBlindData},
  title: "Mut-Blind - Modular",
  ...graphBase
};
let pointerBlindGraph = {
  data: {values: pointerBlindData},
  title: "Pointer-Blind - Modular",
  ...graphBase
};
let fullGraph = {hconcat: [wholeProgramGraph, mutBlindGraph, pointerBlindGraph]};
%%%

@Figure[name: "fig_all_dist"]:
  @VegaLite[spec: fullGraph, name: "graph"]
  @Caption:
    Distribution in differences between &baseline and each alternative condition, with zeros excluded to highlight the shape of each distribution. &mutblind and &pointerblind both reduce the precision more often and more severely than &baseline does vs. &wholeprogram.

Next, we address our second evaluation question: how much less precise is an analysis with weaker assumptions about the program than the &baseline analysis? For this question, we compare the size of dependency sets between the &mutblind and &pointerblind conditions versus &baseline. &fig_all_dist shows the corresponding histograms of differences, with the &wholeprogram vs. &baseline histogram included for comparison.

First, the &mutblind and &pointerblind modifications reduce the precision of the analysis more often and with a greater magnitude than &baseline does vs. &wholeprogram. 39% of &mutblind cases and 17% of &pointerblind cases have a non-zero difference. Of those cases, the median difference in size is 50% for &mutblind and 56% for &pointerblind.

Therefore, the information from ownership types is valuable in increasing the precision of our information flow analysis. Dependency sets are often larger without access to information about mutability or lifetimes.

@Subsection[name: "sec_qual"]: Qualitative Results

The statistics convey a sense of how often each condition influences precision. But it is equally valuable to understand the kind of code that leads to such differences. For each condition, we manually inspected a sample of cases with non-zero differences vs. &baseline.

@Subsubsection[name: "sec_whole_vs_mod"]: Modularity

One common source of imprecision in modular flows is when functions take a mutable reference as input for the purposes of passing the mutable permission off to an element of the input.

\`\`\`rust
fn crop<I: GenericImageView>(
  image: &mut I, x: u32, y: u32,
  width: u32, height: u32
) -> SubImage<&mut I> {
  let (x, y, width, height) =
    crop_dimms(image, x, y, width, height);
  SubImage::new(image, x, y, width, height)
}
\`\`\`

For example, the function \`crop\` from the \`image\` crate returns a mutable view on an image. No data is mutated, only the mutable permission is passed from whole image to sub-image. However, a modular analysis on the \`image\` input would assume that \`image\` is mutated by \`crop\`.

Another common case is when a value only depends on a subset of a function's inputs. The modular approximation assumes all inputs are relevant to all possible mutations, but this is naturally not always the case.

\`\`\`rust
fn solve_lower_triangular_with_diag_mut<R2,C2,S2>(
  &self, b: &mut Matrix<N, R2, C2, S2>, diag: N,
) -> bool {
  if diag.is_zero() { return false; }
  // logic mutating b...
  true
}
\`\`\`

For example, this function from \`nalgebra\` returns a boolean whose value solely depends on the argument \`diag\`. However, a modular analysis of a call to this function would assume that \`self\` and \`b\` is relevant to the return value as well.

@Subsubsection[name: "sec_mut"]: Mutability

The reason &mutblind is less precise than &baseline is quite simple &mdash; many functions take immutable references as inputs, and so many more mutations have to be

\`\`\`rust
fn read_until<R, F>(io: &mut R, func: F)
  -> io::Result<Vec<u8>>
  where R: Read, F: Fn(&[u8]) -> bool
{
  let mut buf = vec![0; 8192]; let mut pos = 0;
  loop {
    let n = io.read(&mut buf[pos..])?; pos += n;
    if func(&buf[..pos]) { break; }
    // ...
  }
}
\`\`\`

For instance, this function from \`hyper\` repeatedly calls an input function \`func\` with segments of an input buffer. Without a control-flow analysis, it is impossible to know what functions \`read_until\` will be called with. And so &mutblind must always assume that \`func\` could mutate \`buf\`. However, &baseline can rely on the immutability of shared references and deduce that \`func\` could not mutate \`buf\`.

@Subsubsection[name: "sec_life"]: Lifetimes

Without lifetimes, our analysis has to make more conservative assumptions about objects that could possibly alias. We observed many cases in the &pointerblind condition where two references shared different lifetimes but the same type, and so had to be classified as aliases.

\`\`\`rust
fn link_child_with_parent_component(
  parent: &mut FbxComponent,
  child: &mut FbxComponent,
  child_handle: Handle<FbxComponent>,
) { match parent {
  FbxComponent::Model(model) => {
    model.geoms.push(child_handle),
  },
  // ..
}}
\`\`\`

For example, the \`link_child_with_parent_component\` function in \`rg3d\` takes mutable references to a \`parent\` and \`child\`. These references are guaranteed not to alias by the rules of ownership, but a naive pointer analysis must assume they could, so modifying \`parent\` could modify \`child\`.

@Subsection: Threats to Validity

Finally, we address the issue: how meaningful are the results above? How likely would they generalize to arbitrary code rather than just our selected dataset? We discuss a few threats to validity below.

1.  **Are the results due to only a few crates?**

    If differences between techniques only arose in a small number of situations that happen to be in our dataset, then our technique would not be as generally applicable. To determine the variation between crates, we generated a histogram of non-zero differences for the &baseline vs. &mutblind comparison, broken down by crate in &fig_crates.

    %%%
    import byCrateData from "./data/by_crate.json";

    let graph = {
      encoding: {
         x: {field: "bin", type: "quantitative", scale: {type: "log"},
                 title: "% difference in dependency set size, log scale"},
        y: {field: "count", type: "quantitative"},
        facet: {field: "krate", columns: 5}
      },
      transform: [{filter: "datum.bin > 0 && datum.count > 0"}],
      mark: "bar",
      data: {values: byCrateData}
    }
    %%%

    @Figure[name: "fig_crates"]:
      @VegaLite[spec: graph, name: "graph"]
      @Caption:
        Distribution of non-zero differences between &baseline and &mutblind, broken down by crate.

    As expected, the larger code bases (e.g. rav1e and RustPython) have more non-zero differences than smaller codebases --- in general the correlation between non-zero differences and total number of variables analyzed is strong, $R^2 = 0.79$. However variation also exists for crates with roughly the same number of variables like \`image\` and \`hyper\`. &mutblind reduces precision for variables in \`hyper\` more often than \`image\`. A qualitative inspection of the respective codebases suggests this may be because \`hyper\` simply makes greater use of immutable references in its API.

    These findings suggest that the impact of ownership types and the modular approximation likely do vary with code style, but a broader trend is still observable across all code.

2.  **Would &wholeprogram be more precise with access to dependencies?**

    A limitation of our whole-program analysis is our inability to access function definitions outside the current crate. Without this limitation, it may be that the &baseline analysis would be significantly worse than &wholeprogram. So for each variable analyzed by &wholeprogram, we additionally computed whether the information flow for that variable involved a function call across a crate boundary.

    Overall 96% of cases reached at least one crate boundary, suggesting that this limitation does occur quite often in practice. However, the impact of the limitation is less clear. Of the 96% of cases that hit a crate boundary, 6.6% had a non-zero difference between &baseline and &wholeprogram. Of the 4% that did not hit a crate boundary, 0.6% had a non-zero difference. One would expect that &wholeprogram would be the most precise when the whole program is available (no boundary), but instead it was much closer to &baseline.

    Ultimately it is not clear how much more precise &wholeprogram would be given access to all a crate's dependencies, but it would not necessarily be a significant improvement over the benchmark presented.

3.  **Is ownership actually important for precision?**

    The finding that &pointerblind only makes a difference in 17% of cases may seem surprisingly small. For instance, @Ref[full: true]{shapiro1997effects} found in a empirical study of slices on C programs that "using a pointer analysis with an average points-to set size twice as large as a more precise pointer analysis led to an increase of about 70% in the size of \\[slices\\]."

    A limitation of our ablation is that the analyzed programs were written to satisfy Rust's ownership safety rules. Disabling lifetimes does not change the structure of the programs to become more C-like &mdash; Rust generally encourages a code style with fewer aliases to avoid dealing with lifetimes. A fairer comparison would be to implement an application idiomatically in both Rust and Rust-but-without-feature-X, but such an evaluation is not practical. It is therefore likely that our results understate the true impact of ownership types on precision given this limitation.

@Section[name: "sec_applications"]: Applications

@Figure[name: "fig_apps"]:
  @Subfigure[name: "slicer"]:
    @img[src: "./static/slice-demo.png", width: "500px"]
    @img[src: "./static/slice-demo-2.png", width: "500px"]
    @Caption:
      A program slicer integrated into VSCode. Above, the user selects a slicing criterion like the variable \`f\`. Then the slicer highlights the criterion in green, and fades out lines that are not part of the backward slice on \`f\`. For example, \`write_all\` mutates the file so it is in the slice, while \`metadata\` reads the file so it is not in the slice.

      Below, the user can manipulate aspects of a program such as commenting out code related to timing. The user computes a forward slice on \`start\`, adds this slice to their selection (in blue), then tells the IDE to comments out all lines in the selection.

  @Subfigure[name: "ifc"]:
    @img[src: "./static/ifc-demo.png", width: "500px"]
    @img[src: "./static/ifc-demo-2.png", width: "500px"]
    @Caption:
      An IFC checker. Above, the \`ifc_traits\` library exports a \`Secure\` for users to mark sensitive data, like \`Password\`, and insecure operations like \`insecure_print\`. Below, a compiler plugin invoked on the program checks for information flows from data with a type implementing \`Secure\` to insecure operations. Here \`insecure_print\` is conditionally executed based on a read from \`PASSWORD\`, so this flow is flagged.

  @Caption:
    Two applications of information flow built using #sysname.


We have demonstrated that ownership can be leveraged to build an information flow analysis that is static, modular, sound, and precise. Our hope is that this analysis can serve as a building block for future static analyses. To bootstrap this future, we have used #sysname to implement prototypes of a program slicer and an IFC checker, shown in &fig_apps.

The program slicer in &fig_apps_slicer is a VSCode extension that fades out all lines of code that are not relevant to the user's selection, i.e. not part of the modular slice. Rather than present a slice of the entire program like in prior slicing tools, we can use Flowistry's modular analysis to present lightweight slices of just within a given function. Users can apply the slicer for comprehension tasks such as reducing the scope of a bug, or for refactoring tasks such as removing an aspect of a program like timing or logging.

The IFC checker in &fig_apps_ifc is a Rust library and compiler plugin. It provides the user a library with the traits \`Secure\` and \`Insecure\` to indicate the relative security of data types and operations. Then the compiler plugin uses #sysname to determine whether information flows from \`Insecure\` variables to \`Secure\` variables. Users can apply the IFC checker to catch sensitive data leaks in an application. This prototype is purely intraprocedural, but future work could build an interprocedural analysis by using Flowistry's output as procedure summaries in a larger information flow graph.

@Section[name: "sec_rw"]: Related Work

Our work draws on three core concepts: information flow, modular static analysis, and ownership types.

% let Citet = props => @Ref[...props, full: true];

@Subsection: Information Flow

Information flow has been historically studied in the context of security, such as ensuring low-security users of a program cannot infer anything about its high-security internals. Security-focused information flow analyses have been developed for Java &myers1999jflow, Javascript &austin2009efficient, OCaml &pottier2003information, Haskell &stefan2011flexible, and many other languages.

Each analysis satisfies some, but not all, of our requirements from &sec_intro. For instance, the JFlow &myers1999jflow and Flow-Caml &pottier2003information languages required adding features to the base language, violating our second requirement. Some methods like that of @Citet{austin2009efficient} for Javascript rely on dynamic analysis, violating our third requirement. And Haskell only supports effects like mutation through monads, violating our first requirement.

Nonetheless, we draw significant inspiration from mechanisms in prior work. Our analysis resembles the slicing calculus of @Citet{abadi1999core}. The use of lifetimes for modular analysis of functions is comparable to security annotations in Flow-Caml &pottier2003information. The CFG analysis draws on techniques used in program slicers, such as the LLVM dg slicer &llvmslicer.

@Subsection: Modular Static Analysis

The key technique to making static analysis modular (or "compositional" or "separate") is symbolically summarizing a function's behavior, so that the summary can be used without the function's implementation. Starting from @Citet{rountev1999data} and @Citet{cousot2002modular}, one approach has been to design a system of "procedure summaries" understood by the static analyzer and distinct from the language being analyzed. This approach has been widely applied for static analysis of null pointer dereferences &yorsh2008generating, pointer aliases &dillig2011precise, data dependencies &tang2015summary, and other properties.

Another approach, like ours, is to leverage the language's type system to summarize behavior. @Citet{tang1994separate} showed that an effect system could be used for a modular control-flow analysis. Later work in Haskell used its powerful type system and monadic effects to embed many forms of information flow control into the language &li2006encoding&russo2008library&stefan2011flexible&buiras2015hlio.

@Subsection: Ownership Types

Rust and Oxide's conceptions of ownership derive from @Citet{clarke1998ownership} and @Citet{grossman2002region}. For instance, the Cyclone language of Grossman et al. uses regions to restrict where a pointer can point-to, and uses region variables to express relationships between regions in a function's input and output types. A lifetime is similar in that it annotates the types of pointers, but differs in how it is analyzed.

Recent works have demonstrated innovative applications of Rust's type system for modular program analysis. @Citet{astrauskas2019leveraging} embed Rust programs into a separation logic to verify pre/post conditions about functions. @Citet{jung2020stacked} use Rust's ownership-based guarantees to implement more aggressive program optimizations.

Closer to our domain, @Citet{balasubramanian2017system} implemented a prototype IFC system for Rust by lowering programs to LLVM and verifying them with SMACK &rakamaric2014smack, although their system is hard to contrast with ours given the high-level description in their paper. @Citet{njor2021static} implemented a static taint analysis for Rust, although it is not field-sensitive, alias-sensitive, or modular.

@Section[name: "sec_discussion"]: Discussion

Looking forward, two interesting avenues for future work on #sysname are improving its precision and addressing soundness in unsafe code. For instance, the lifetime-based pointer analysis is sound but imprecise in some respects. Lifetimes often lose information about part-whole relationships. Consider the function that returns a mutable pointer to a specific index in a vector:

\`\`\`rust
fn get_mut<'a>(&'a mut self, i: usize)
  -> Option<&'a mut T>;
\`\`\`

These lifetimes indicate only that the return value points to *something* in the input vector. The expressions \`v.get_mut(i)\` and \`v.get_mut(i + 1)\` are considered aliases even though they are not. Future work could integrate #sysname with verification tools like Prusti &astrauskas2019leveraging to use abstract interpretation for a more precise pointer analysis in such cases.

Additionally, Rust has many libraries built on unsafe code that can lose annotations essential to information flow, such as interior mutability. For example, shared-memory concurrency in Rust looks like this:

\`\`\`rust
let n: Arc<Mutex<i32>> = Arc::new(Mutex::new(0));
let n2: Arc<Mutex<i32>> = Arc::clone(&n);
*n2.lock().unwrap() = 1;
\`\`\`

\`Arc::clone\` does not share a lifetime between its input and output, so a lifetime-based pointer analysis therefore cannot deduce that \`n2\` is an alias of \`n\`, and #sysname would not recognize that the mutation on line 3 affects \`n\`. Future work can explore how unsafe libraries could be annotated with the necessary metadata needed to analyze information flow, similar to how RustBelt &jung2017rustbelt identifies the pre/post-conditions needed to ensure type safety within unsafe code.

Overall, we are excited by the possibilities created by having a practical information flow analysis that can run today on any Rust program. Many exciting systems for tasks like debugging &ko2004designing, example generation &head2018interactive, and program repair &wen2018context rely on information flow in some form, and we hope that #sysname can support the development of these tools.

@Acknowledgments:
  This work was partially supported by the Italian Ministry of Education through funding for the Rita Levi Montalcini grant (call of 2019).

// TODOS for WILL:
// * labels on #-headers / all md-specific elements
// * newline at end of block should indent to current block
// * fix position of error box.
// * pass parameters to &-form, eg citet


@References[bibtex]`,sa=(0,nn.observer)(function(u){return(0,e.createElement)(Hn,u,...(()=>{let p=(0,e.createElement)(Se,{},"Flowistry");return[null,(0,e.createElement)(Kn,{language:fe()}),(0,e.createElement)(ea,{},"Modular Information Flow through Ownership"),...(()=>{let Q=(0,e.createElement)(en,{},(0,e.createElement)(tn,{},"Stanford University"));return[null,(0,e.createElement)(ta,{},(0,e.createElement)(Le,{},(0,e.createElement)(Ne,{},"Will Crichton")," ",Q),(0,e.createElement)(Le,{},(0,e.createElement)(Ne,{},"Marco Patrignani"),(0,e.createElement)(en,{},(0,e.createElement)(tn,{},"University of Trento"))),(0,e.createElement)(Le,{},(0,e.createElement)(Ne,{},"Maneesh Agrawala")," ",Q),(0,e.createElement)(Le,{},(0,e.createElement)(Ne,{},"Pat Hanrahan")," ",Q)),(0,e.createElement)(na,{},"Statically analyzing information flow, or how data influences other data within a program, is a challenging task in imperative languages. Analyzing pointers and mutations requires access to a program's complete source. However, programs often use pre-compiled dependencies where only type signatures are available. We demonstrate that ownership types can be used to soundly and precisely analyze information flow through function calls given only their type signature. From this insight, we built Flowistry, a system for analyzing information flow in Rust, an ownership-based language. We prove the system's soundness as a form of noninterference using the Oxide formal model of Rust. Then we empirically evaluate the precision of Flowistry, showing that modular flows are identical to whole-program flows in 94% of cases drawn from large Rust codebases. We illustrate the applicability of Flowistry by using it to implement prototypes of a program slicer and an information flow control system."),(0,e.createElement)(we,{name:"sec_intro"},"Introduction"),(0,e.createElement)("p",{},"Information flow describes how data influences other data within a program. Information flow has applications to security, such as information flow control ",(0,e.createElement)(a,{},"sabelfeld2003language"),", and to developer tools, such as program slicing ",(0,e.createElement)(a,{},"weiser1984program"),". Our goal is to build a practical system for analyzing information flow, meaning:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Applicable to common language features:")," the language being analyzed  should support widely used features like pointers and in-place mutation.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Zero configuration to run on existing code:")," the analyzer must integrate with an existing language and existing unannotated programs. It must not require users to adopt a new language designed for information flow.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"No dynamic analysis:")," to reduce integration challenges and costs, the analyzer must be purely static ","\u2014"," no modifications to runtimes or binaries are needed.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Modular over dependencies:")," programs may not have source available for dependencies. The analyzer must have reasonable precision without whole-program analysis."))),(0,e.createElement)("p",{},"As a case study on the challenges imposed by these requirements, consider analyzing the information that flows to the return value in this C++ function:"),(0,e.createElement)(ge,{language:dt},`// Copy elements 0 to max into a new vector
vector<int> copy_to(vector<int>& v, size_t max) {
  vector<int> v2; size_t i = 0;
  for (auto x(v.begin()); x != v.end(); ++x) {
    if (i == max) { break; }
    v2.push_back(*x); ++i;
  }
  return v2;
}`),(0,e.createElement)("p",{},"Here, a key flow is that ",(0,e.createElement)("code",{},"v2")," is influenced by ",(0,e.createElement)("code",{},"v"),": (1) ",(0,e.createElement)("code",{},"push_back")," mutates ",(0,e.createElement)("code",{},"v2")," with ",(0,e.createElement)("code",{},"*x")," as input, and (2) ",(0,e.createElement)("code",{},"x")," points to data within ",(0,e.createElement)("code",{},"v"),". But how could an analyzer statically deduce these facts? For C++, the answer is ",(0,e.createElement)("em",{},"by looking at function implementations"),". The implementation of ",(0,e.createElement)("code",{},"push_back")," mutates ",(0,e.createElement)("code",{},"v2"),", and the implementation of ",(0,e.createElement)("code",{},"begin")," returns a pointer to data in ",(0,e.createElement)("code",{},"v"),"."),(0,e.createElement)("p",{},"However, analyzing such implementations violates our fourth requirement, since these functions may only have their type signature available. In C++, given only a function's type signature, not much can be inferred about its behavior, since the type system does not contain information relevant to pointer analysis."),(0,e.createElement)("p",{},"Our key insight is that ",(0,e.createElement)("em",{},"ownership types")," can be leveraged to modularly analyze pointers and mutation using only a function's type signature. Ownership has emerged from several intersecting lines of research on linear logic ",(0,e.createElement)(a,{},"girard1987linear"),", class-based alias management ",(0,e.createElement)(a,{},"clarke1998ownership"),", and region-based memory management ",(0,e.createElement)(a,{},"grossman2002region"),". The fundamental law of ownership is that data cannot be simultaneously aliased and mutated. Ownership-based type systems enforce this law by tracking which entities own which data, allowing ownership to be transferred between entities, and flagging ownership violations like mutating immutably-borrowed data."),(0,e.createElement)("p",{},"Today, the most popular ownership-based language is Rust. Consider the information flows in this Rust implementation of ",(0,e.createElement)("code",{},"copy_to"),":"),(0,e.createElement)(ge,{language:fe},`fn copy_to(v: &Vec<i32>, max: usize) -> Vec<i32> {
  let mut v2 = Vec::new();
  for (i, x) in v.iter().enumerate() {
    if i == max { break; }
    v2.push(*x);
  }
  return v2;
}`),(0,e.createElement)("p",{},"Focus on the two methods ",(0,e.createElement)("code",{},"push")," and ",(0,e.createElement)("code",{},"iter"),". For a ",(0,e.createElement)("code",{},"Vec<i32>"),", these methods have the following type signatures:"),(0,e.createElement)(ge,{language:fe},`fn push(&mut self, value: i32);
fn iter<'a>(&'a self) -> Iter<'a, i32>;`),(0,e.createElement)("p",{},"To determine that ",(0,e.createElement)("code",{},"push")," mutates ",(0,e.createElement)("code",{},"v2"),", we leverage ",(0,e.createElement)("em",{},"mutability modifiers"),". All references in Rust are either immutable (i.e. the type is ",(0,e.createElement)("code",{},"&T"),") or mutable (the type is ",(0,e.createElement)("code",{},"&mut T"),"). Therefore ",(0,e.createElement)("code",{},"iter")," does not mutate ",(0,e.createElement)("code",{},"v")," because it takes ",(0,e.createElement)("code",{},"&self")," as input (excepting interior mutability, discussed in ",(0,e.createElement)(a,{},"sec_limitations"),"), while ",(0,e.createElement)("code",{},"push")," may mutate ",(0,e.createElement)("code",{},"v2")," because it takes ",(0,e.createElement)("code",{},"&mut self")," as input."),(0,e.createElement)("p",{},"To determine that ",(0,e.createElement)("code",{},"x")," points to ",(0,e.createElement)("code",{},"v"),", we leverage ",(0,e.createElement)("em",{},"lifetimes"),". All references in Rust are annotated with a lifetime, either explicitly (such as ",(0,e.createElement)("code",{},"'a"),") or implicitly. Shared lifetimes indicate aliasing: because ",(0,e.createElement)("code",{},"&self")," in ",(0,e.createElement)("code",{},"iter")," has lifetime ",(0,e.createElement)("code",{},"'a"),", and because the returned ",(0,e.createElement)("code",{},"Iter")," structure shares that lifetime, then we can determine that ",(0,e.createElement)("code",{},"Iter")," may contain pointers to ",(0,e.createElement)("code",{},"self"),"."),(0,e.createElement)("p",{},"Inspired by this insight, we built ",p,", a system for analyzing information flow in the safe subset of Rust programs. ",p," satisfies our four design criteria: (1) Rust supports pointers and mutation, (2) ",p," does not require any change to the Rust language or to Rust programs, (3) ",p," is a purely static analysis, and (4) Flowistry uses ownership types to analyze function calls without needing their definition. This paper presents a theoretical and empirical investigation into ",p," in five parts:"),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We provide a precise description of how ",p," computes information flow by embedding its definition within Oxide ",(0,e.createElement)(a,{},"weiss2019oxide"),", a formal model of Rust (",(0,e.createElement)(a,{},"sec_analysis"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We prove the soundness of our information flow analysis as a form of noninterference (",(0,e.createElement)(a,{},"sec_soundness"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We describe the implementation of ",p," that bridges the theory of Oxide to the practicalities of Rust (",(0,e.createElement)(a,{},"sec_implementation"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We evaluate the precision of the modular analysis on a dataset of large Rust codebases, finding that modular flows are identical to whole-program flows in 94% of cases, and are on average 7% larger in the remaining cases (",(0,e.createElement)(a,{},"sec_evaluation"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We demonstrate the utility of ",p," by using it to prototype a program slicer and an IFC checker (",(0,e.createElement)(a,{},"sec_applications"),")."))),(0,e.createElement)("p",{},"We conclude by presenting related work (",(0,e.createElement)(a,{},"sec_rw"),") and discussing future directions for ",p," (",(0,e.createElement)(a,{},"sec_discussion"),`).
Due to space constraints, we omit many formal details, all auxiliary lemmas, and all proofs.
The interested reader can find them in the appendix.
`,p," and our applications of it are publicly available, open-source, MIT-licensed projects at ",(0,e.createElement)("a",{href:"https://github.com/willcrichton/flowistry"},"https://github.com/willcrichton/flowistry"),"."),(0,e.createElement)(we,{name:"sec_analysis"},"Analysis"),(0,e.createElement)("p",{},"Inspired by the dependency calculus of Abadi et al. ",(0,e.createElement)(a,{},"abadi1999core"),", our analysis represents information flow as a set of dependencies for each variable in a given function. The analysis is flow-sensitive, computing a different dependency set at each program location, and field-sensitive, distinguishing between dependencies for fields of a data structure."),(0,e.createElement)("p",{},"While the analysis is implemented in and for Rust, our goal here is to provide a description of it that is both concise (for clarity of communication) and precise (for amenability to proof). We therefore base our description on Oxide ",(0,e.createElement)(a,{},"weiss2019oxide"),", a formal model of Rust. At a high level, Oxide provides three ingredients:"),...(()=>{let P=(...f)=>[f[0],"; ",f[1],"; ",f[2]," \\vdash ",f[3]," : ",f[4]," \\Rightarrow ",f[5]],V=(...f)=>[f[0],"'"],x=A(["loc"],["\\ell"]),h=A(["deps"],["\\kappa"]),i=A(["depctx"],["\\Theta"]),U=A(["fnctx"],["\\Sigma"]),$=A(["tyvarctx"],["\\Delta"]),c=A(["tyctx"],["\\Gamma"]),ke=(...f)=>[U," \\vdash (",f[0],"; ",f[1],") \\rightarrow (",f[2],"; ",f[3],")"];return[null,...(()=>{let f=(...n)=>["\\mathsf{",n[0],"}"],re=(...n)=>["\\text{\\tiny ",n[0],"}"],X=(...n)=>["\\overline{",n[0],"}"],de=A(["loan"],["l"]),H=[["\\","{\\overline{",de,"}","\\","}"]],B=(...n)=>[A(["ownsafe"],[n[0],"; ",n[1]," \\vdash_{",n[2],"} ",n[3]," \\Rightarrow ",n[4]])],s=new aa(function(){return[["Variable","vr","x"],["Number","num","n"],["Function","fname","f"],["Value","value","v"],["Concrete Provenance","concrprov","r"],["Abstract Provenance","abstrprov","\\varrho"],["Provenance","prov","\\rho",[["concr",(...n)=>[n[0]],()=>[this.concrprov]],["abstr",(...n)=>[n[0]],()=>[this.abstrprov]]]],["Path","path","q",[["empty",(...n)=>["\\varepsilon"]],["with",(...n)=>[n[0],".",n[1]],()=>[this.vr,this.path]]]],["Place","plc",[["\\pi"]],[["form",(...n)=>[n[0],".",n[1]],()=>[this.vr,this.path]]]],["Constant","const","c",[["unit",(...n)=>["()"]],["num",(...n)=>[n[0]],()=>[this.num]],["true",(...n)=>[f(["true"])]],["false",(...n)=>[f(["false"])]]]],["Base Type","tyb",[["\\tau^{",re(["B}"])]],[["unit",(...n)=>[f(["unit"])]],["u32",(...n)=>[f(["u32"])]]]],["Sized Type","tys",[["\\tau^{",re(["SI}"])]],[["base",(...n)=>[n[0]],()=>[this.tyb]],["tup",(...n)=>["(",n[0],")"],()=>[[[this.tys,"_1, \\ldots, ",this.tys,"_n"]]]],["brw",(...n)=>["\\&",n[0],"\\,",n[1],"\\,",n[2]],()=>[this.prov,this.ownq,this.tyx]]]],["Expression","expr","e",[["const",(...n)=>[n[0]],()=>[this.const]],["plc",(...n)=>[n[0]],()=>[this.plc]],["let",(...n)=>[f(["let"]),"~",n[0]," : ",n[1],"~=~",n[2],";~",n[3]],()=>[this.vr,this.tys,[[this.expr,"_1"]],[[this.expr,"_2"]]]],["asgn",(...n)=>[n[0]," := ",n[1]],()=>[this.plc,this.expr]],["seq",(...n)=>[n[0],";~",n[1]],()=>[[[this.expr,"_1"]],[[this.expr,"_2"]]]],["brw",(...n)=>["\\&",n[0],"\\,",n[1],"\\,",n[2]],()=>[this.concrprov,this.ownq,this.expr]],["pasgn",(...n)=>[n[0]," := ",n[1]],()=>[this.pexp,this.expr]],["letprov",(...n)=>[f(["letprov"]),"\\langle ",n[0]," \\rangle ~ ",n[1]],()=>[this.concrprov,this.expr]],["deref",(...n)=>["\\ast ",n[0]],()=>[this.expr]],["call",(...n)=>[n[0]," \\langle ",n[1],", ",n[2],", ",n[3]," \\rangle(",n[4],")"],()=>[this.fname,X([this.frmexpr]),X([this.prov]),X([this.tys]),this.plc]]]],["Ownership Qualifier","ownq",[["\\omega"]],[["shrd",(...n)=>[f(["shrd"])]],["uniq",(...n)=>[f(["uniq"])]]]],["Place Expression","pexp","p",[["var",(...n)=>[n[0]],()=>[this.vr]],["elem",(...n)=>[n[0],".",n[1]],()=>[this.pexp,this.num]],["deref",(...n)=>["\\ast ",n[0]],()=>[this.pexp]]]],["Dead Type","tyd",[["\\tau^{",re(["SD}"])]],[["s",(...n)=>[n[0],"^\\dagger"],()=>[this.tys]],["tup",(...n)=>["(",n[0],")"],()=>[[[this.tyd,"_1, \\ldots, ",this.tyd,"_n"]]]]]],["Maybe Unsized Type","tyx",[["\\tau^{",re(["XI}"])]],[["s",(...n)=>[n[0]],()=>[this.tys]],["d",(...n)=>["[",n[0],"]"],()=>[this.tys]]]],["Maybe Dead Type","tysx",[["\\tau^{",re(["SX}"])]],[["s",(...n)=>[n[0]],()=>[this.tys]],["d",(...n)=>[n[0]],()=>[this.tyd]],["tup",(...n)=>["(",n[0],")"],()=>[[[this.tysx,"_1, \\ldots, ",this.tysx,"_n"]]]]]],["Type","ty",[["\\tau"]],[["tyx",(...n)=>[n[0]],()=>[this.tyx]],["tysx",(...n)=>[n[0]],()=>[this.tysx]]]],["Loan","loan",[["\\ell"]],[["form",(...n)=>["^{",n[0],"}",n[1]],()=>[this.ownq,this.pexp]]]],["Frame Typing","ft",[["\\mathcal{F}"]],[["empty",(...n)=>["\\bullet"]],["wty",(...n)=>[n[0],", ",n[1]," : ",n[2]],()=>[this.ft,this.vr,this.tyx]],["wlf",(...n)=>[n[0],", ",n[1]," \\mapsto ",n[2]],()=>[this.ft,this.concrprov,[["{",X([this.loan]),"}"]]]]]],["Stack Typing","stackenv",[["\\Gamma"]],[["empty",(...n)=>["\\bullet"]],["wfr",(...n)=>[n[0]," \\mathrel{\\natural} ",n[1]],()=>[this.stackenv,this.ft]]]],["Kind","kind",[["\\kappa"]],[["base",(...n)=>["\\bigstar"]],["prov",(...n)=>[f(["PRV"])]],["frm",(...n)=>[f(["FRM"])]]]],["Type Var","tyvar",[["\\alpha"]]],["Type Environment","tyenv",[["\\Delta"]],[["empty",(...n)=>["\\bullet"]],["wtfvar",(...n)=>[n[0],", ",n[1]," : ",n[2]],()=>[this.tyenv,this.tyvar,this.kindbase()]],["wprov",(...n)=>[n[0],", ",n[1]," : ",n[2]],()=>[this.tyenv,this.abstrprov,this.kindprov()]],["wfrm",(...n)=>[n[0],", ",n[1]," : ",n[2]],()=>[this.tyenv,this.frmvar,this.kindfrm()]],["wconstr",(...n)=>[n[0],", ",n[1]," \\mathrel{:>} ",n[2]],()=>[this.tyenv,[[this.abstrprov,"_1"]],[[this.abstrprov,"_2"]]]]]],["Global Entries","fdef",[["\\varepsilon"]],[["form",(...n)=>[f(["fn"])," ~ ",n[0]," \\left\\langle ",n[1],", ",n[2],", ",n[3]," \\right\\rangle\\left(",n[4]," : ",n[5],"\\right) \\rightarrow ",n[6]," ~ ",f(["where"])," ~ ",n[7]," ~ \\{ ",n[8]," \\}"],()=>[this.fname,[[X(["\\psi"])]],X(this.abstrprov),X(this.tyvar),this.vr,this.tys,this.tys,[[X([this.abstrprov,"_1 : ",this.abstrprov,"_2"])]],this.expr]]]],["Global Environment","fenv",[["\\Sigma"]],[["empty",(...n)=>["\\bullet"]],["with",(...n)=>[n[0],", ",n[1]],()=>[this.fenv,this.fdef]]]],["Frame Var","frmvar",[["\\varphi"]]],["Frame Expression","frmexpr",[["\\Phi"]],[["vr",(...n)=>[n[0]],()=>[this.frmvar]],["ty",(...n)=>[n[0]],()=>[this.frmty]]]],["Frame Typing","frmty",[["\\mathcal{F}"]],[["empty",(...n)=>["\\bullet"]],["withvr",(...n)=>[n[0],", ",n[1]," : ",n[2]],()=>[this.frmty,this.vr,this.tysx]],["withloans",(...n)=>[n[0],", ",n[1]," \\mapsto ",n[2]],()=>[this.frmty,this.concrprov,[[H]]]]]],["Stack","stack",[["\\sigma"]],[["empty",(...n)=>["\\bullet"]],["withframe",(...n)=>[n[0]," \\mathrel{\\natural} ",n[1]],()=>[this.stack,this.stackframe]]]],["Stack Frame","stackframe",[["\\varsigma"]],[["empty",(...n)=>["\\bullet"]],["withvr",(...n)=>[n[0],", ",n[1]," \\mapsto ",n[2]],()=>[this.stackframe,this.vr,this.value]]]]]}),Z=s.tybu32(),_e=s.exprlet,w=s.plc,L=s.vr,S=s.expr,_=s.tys,v=s.ownquniq(),Qe=s.ownqshrd(),d=s.pexp,ee=s.ty,$e=s.path,T=s.ownq;return[null,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"A syntax of Rust-like programs with expressions ",(0,e.createElement)(t,{},S)," and types ",(0,e.createElement)(t,{},ee),".")),(0,e.createElement)("li",{},(0,e.createElement)(C,{names:["fnctx","tyvarctx","tyctx"]},"A type-checker, expressed with the judgment ",(0,e.createElement)(t,{},P([U],[$],[c],[S],[ee],[c,"'"]))," using the contexts ",(0,e.createElement)(t,{},c)," for types and lifetimes, ",(0,e.createElement)(t,{},c)," for type variables, and ",(0,e.createElement)(t,{},c)," for global functions.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"An interpreter, expressed by a small-step operational semantics with the judgment ",(0,e.createElement)(t,{},ke(["\\sigma"],[S],[V(["\\sigma"])],[S,"'"]))," using ",(0,e.createElement)(t,{},"\\sigma")," for a runtime stack."))),...(()=>{let n=(...j)=>[A(["tcnew"],[j[0],"; ",j[1],"; ",j[2],"; ",j[3]," \\vdash ",j[4]," : ",j[5]," \\Rightarrow ",j[6],"; ",j[7]])],b=(...j)=>["\\htmlStyle{color: red}{",j[0],"}"],te=(...j)=>["\\bullet ",j[0]];return[null,(0,e.createElement)("p",{},(0,e.createElement)(C,{name:"loc"},"We extend this model by assuming that each expression in a program is automatically labeled with a unique location ",(0,e.createElement)(t,{},x),"."),`
Then for a given expression `,(0,e.createElement)(t,{},S),`, our analysis computes the set of dependencies
`,(0,e.createElement)(C,{name:"deps"},(0,e.createElement)(t,{},h," ::= \\{\\overline{",x,"}\\}")),`.
Because expressions have effects on persistent memory, we further compute a `,(0,e.createElement)("em",{},"dependency context"),`
`,(0,e.createElement)(C,{name:"depctx"},(0,e.createElement)(t,{},i," ::= \\{\\overline{",d," \\mapsto ",h,"}\\}")),`
from memory locations `,(0,e.createElement)(t,{},d)," to dependencies ",(0,e.createElement)(t,{},h),`.
The computation of information flow is intertwined with type-checking, represented as a modified type-checking judgment (additions highlighted in red):`),(0,e.createElement)(D,{},n([U],[$],[c],[b([i])],[S," _{",b([x]),"}"],[ee,b([te([h])])],[c,"'"],[b([i,"'"])])),(0,e.createElement)("p",{},(0,e.createElement)(C,{name:"tcnew"},'This judgment is read as, "with type contexts ',(0,e.createElement)(t,{},U,", ",$,", ",c)," and dependency context ",(0,e.createElement)(t,{},b([i])),", ",(0,e.createElement)(t,{},S)," at location ",(0,e.createElement)(t,{},b([x]))," has type ",(0,e.createElement)(t,{},ee)," and dependencies ",(0,e.createElement)(t,{},b([h])),", producing a new dependency context ",(0,e.createElement)(t,{},b([i,"'"])),'."')),(0,e.createElement)("p",{},"Oxide is a large language ","\u2014"," describing every feature, judgment, and inference rule would exceed our space constraints. Instead, in this section we focus on a few key rules that demonstrate the novel aspects of our system. We first lay the foundations for dealing with variables and mutation (",(0,e.createElement)(a,{},"sec_places"),"), and then describe how we modularly analyze references (",(0,e.createElement)(a,{},"sec_references"),") and function calls (",(0,e.createElement)(a,{},"sec_funcalls"),`).
The remaining rules can be found in the appendix.`),(0,e.createElement)(ne,{name:"sec_places"},"Variables and Mutation"),(0,e.createElement)("p",{},"The core of Oxide is an imperative calculus with constants and variables. The abstract syntax for these features is below:"),(0,e.createElement)(s.Bnf,{subset:["vr","num","path","plc","const","tyb",["tys",["base","tup"]],["expr",["const","plc","let","asgn","seq"]]]}),(0,e.createElement)("p",{},"Constants are Oxide's atomic values and also the base-case for information flow. A constant's dependency is simply itself, expressed through the ",(0,e.createElement)(a,{},"tr_u32")," rule:"),...(()=>{let j=({name:ae,...he})=>{let Pe=`tr_${ae}`,G=(0,e.createElement)(Se,{},"T-",ae);return(0,e.createElement)(C,{name:Pe,label:G},(0,e.createElement)(ia,{Right:G,...he}))},J=(...ae)=>["\\htmlStyle{color: gray}{",ae[0],"}"];return[null,(0,e.createElement)(j,{name:"u32",Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],["n_{",b([x]),"}"],[Z,b([te([h])])],[c],[b([i])])))}),(0,e.createElement)("p",{},"Variables and mutation are introduced through let-bindings and assignment expressions, respectively. For example, this (location-annotated) program mutates a field of a tuple:"),(0,e.createElement)(D,{},_e(["t"],[s.tystup([Z,", ",Z])],["(1_{",x," _1}, 2_{",x," _2})"],[s.exprasgn(["t.1"],["3_{",x," _3}"])])),(0,e.createElement)("p",{},"Here, ",(0,e.createElement)(t,{},"t")," is a variable and ",(0,e.createElement)(t,{},"t.1")," is a ",(0,e.createElement)("em",{},"place"),", or a description of a specific region in memory. For information flow, the key idea is that let-bindings introduce a set of places into ",(0,e.createElement)(t,{},i),", and then assignment expressions change a place's dependencies within ",(0,e.createElement)(t,{},i),`.
In the above example, after binding `,(0,e.createElement)(t,{},"t"),", then ",(0,e.createElement)(t,{},i)," is:"),(0,e.createElement)(D,{},i," = \\{t, t.0, t.1 \\mapsto \\{",x," _1, ",x," _2\\}\\}"),(0,e.createElement)("p",{},'After checking "',(0,e.createElement)(t,{},"t.1 := 3"),'", then ',(0,e.createElement)(t,{},x," _3")," is added to ",(0,e.createElement)(t,{},i,"(t)")," and ",(0,e.createElement)(t,{},i,"(t.1)"),", but not ",(0,e.createElement)(t,{},i,"(t.0)"),". This is because the values of ",(0,e.createElement)(t,{},"t")," and ",(0,e.createElement)(t,{},"t.1")," have changed, but the value of ",(0,e.createElement)(t,{},"t.0")," has not. Formally, the let-binding rule is:"),(0,e.createElement)(j,{name:"let",Top:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],["e_1"],[_," _1 ",b([te([h," _1"])])],[c],[b([i," _1"])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c," _1 \\vdash ",_," _1 \\lesssim ",_," _a \\Rightarrow ",c,"'_1"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},b([i," _1' = ",i," _1[\\forall ",w,"^\\square[",L,"] ~ . ~ ",w," \\mapsto ",h," _1]"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],["\\mathsf{gc}\\text{-}\\mathsf{loans}(",c,"'_1, ",L," : ",_," _a)"],[b([i," _1'"])],[S," _2"],[_," _2 ",b([te([h," _2"])])],[c," _2, ",L," : ",s.tyd],[b([i," _2"])])))),Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[_e([L],[_," _a"],[S," _1"],[S," _2"])],[_," _2 ",b([te([h," _2"])])],[c," _2"],[b([i," _2"])])))}),(0,e.createElement)("p",{},"Again, this rule (and many others) contain aspects of Oxide that are not essential for understanding information flow such as the subtyping judgment ",(0,e.createElement)(t,{},_," _1 \\lesssim ",_," _a")," or the metafunction ",(0,e.createElement)(t,{},"\\mathsf{gc}\\text{-}\\mathsf{loans}"),". For brevity we will not cover these aspects here, and instead refer the interested reader to ",(0,e.createElement)(a,{full:!0},"weiss2019oxide"),`.
We have deemphasized (in grey) the judgments which are not important to understanding our information flow additions.`),(0,e.createElement)("p",{},"The key concept is the formula ",(0,e.createElement)(t,{},i," _1[\\forall ",w,"^\\square[",L,"] ~ . ~ ",w," \\mapsto ",h," _1]"),". This introduces two shorthands: first, ",(0,e.createElement)(t,{},w,"^\\square[",L,"]"),' means "a place ',(0,e.createElement)(t,{},w)," with root variable ",(0,e.createElement)(t,{},L)," in a context ",(0,e.createElement)(t,{},w,"^\\square"),'", used to decompose a place. In ',(0,e.createElement)(a,{},"tr_let"),", the update to ",(0,e.createElement)(t,{},i," _1")," happens for all places with a root variable ",(0,e.createElement)(t,{},L),". Second, ",(0,e.createElement)(t,{},i," _1[",w," \\mapsto ",h," _1]"),' means "set ',(0,e.createElement)(t,{},w)," to ",(0,e.createElement)(t,{},h," _1")," in ",(0,e.createElement)(t,{},i," _1"),'". So this rule specifies that when checking ',(0,e.createElement)(t,{},S," _2"),", all places within ",(0,e.createElement)(t,{},L)," are initialized to the dependencies ",(0,e.createElement)(t,{},i," _1")," of ",(0,e.createElement)(t,{},S," _1"),"."),(0,e.createElement)("p",{},"Next, the assignment expression rule is defined as updating all the ",(0,e.createElement)("em",{},"conflicts")," of a place ",(0,e.createElement)(t,{},w),":"),...(()=>{let ae=(...he)=>[A(["updateconflicts"],[f(["update"]),"\\text{-}",f(["conflicts"]),"(",he[0],", ",he[1],", ",he[2],")"])];return[null,(0,e.createElement)(j,{name:"assign",Top:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[S],[_,b([te([h])])],[c," _1"],[b([i," _1"])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([c," _1(",w,") = ",s.tysx]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J(["(",s.tysx," = ",s.tyd," \\vee ",$,"; ",c," _1 \\vdash_{",v,"} ",w," \\Rightarrow \\{~^{",v,"} ",w,"\\})"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c," _1 \\vdash ",_," \\lesssim ",s.tysx," \\Rightarrow ",c,"'"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},b([i," _2 = ",i," _1[",ae([i," _1"],[w],[h]),"]"])))),Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[s.exprasgn([w],[S])],[s.tybunit([]),b([te(["\\varnothing"])])],[c,"'[",w," \\mapsto ",_,"] \\vartriangleright ",w],[b([i," _2"])])))}),(0,e.createElement)("p",{},"If you conceptualize a type as a tree and a path as a node in that tree, then a node's conflicts are its ancestors and descendants (but not siblings). Semantically, conflicts are the set of places whose value change if a given place is mutated. Recall from the previous example that ",(0,e.createElement)(t,{},"t.1")," conflicts with ",(0,e.createElement)(t,{},"t")," and ",(0,e.createElement)(t,{},"t.1"),", but not ",(0,e.createElement)(t,{},"t.0"),". Formally, we say two places are disjoint (",(0,e.createElement)(t,{},"\\#"),") or conflict (",(0,e.createElement)(t,{},"\\sqcap"),") when:"),...(()=>{let he=(...F)=>[A(["disjoint"],[F[0]," \\mathop{","\\#","} ",F[1]])],Pe=(...F)=>[A(["notdisjoint"],[F[0]," \\sqcap ",F[1]])],G=[["\\overset{\\mathrm{def}}{=}"]];return[null,(0,e.createElement)(C,{name:"disjoint"},(0,e.createElement)(C,{name:"notdisjoint"},(0,e.createElement)(D,{},`\\begin{align*}
      `,he([L," _1 . ",$e," _1"],[L," _2 . ",$e," _2"])," &",G,L," _1 \\neq ",L," _2 \\vee (&&(",$e," _1 \\text{ is not a prefix of } ",$e," _2) ~ \\wedge \\\\ & &&(",$e," _2 \\text{ is not a prefix of } ",$e,` _1)) \\\\
      `,Pe([w," _1"],[w," _2"])," &",G," \\neg(",he([w," _1"],[w," _2"]),`)
    \\end{align*}`))),(0,e.createElement)("p",{},"Then to update a place's conflicts in ",(0,e.createElement)(t,{},i),", we define the metafunction ",(0,e.createElement)(t,{},f(["update"]),"\\text{-}",f(["conflicts"]))," to add ",(0,e.createElement)(t,{},h)," to all conflicting places ",(0,e.createElement)(t,{},d,"'"),". (Note that this rule is actually defined over place ",(0,e.createElement)("em",{},"expressions")," ",(0,e.createElement)(t,{},d),", which are explained in the next subsection.)"),(0,e.createElement)(C,{name:"updateconflicts"},(0,e.createElement)(D,{},`\\begin{align*}
       &`,ae([i],[d],[h]),G,` \\\\
       &\\hspace{20pt} \\forall `,d,"' \\mapsto ",h," _{",d,"'} \\in ",i," _{",f(["cfl"]),"}  ~ . ~ ",d,"' \\mapsto ",h," _{",d,"'} \\cup ",h,` \\\\
       &\\hspace{20pt} \\text{where} ~ `,i," _{",f(["cfl"]),"} = \\{",d,"' \\mapsto ",h," _{",d,"'} \\in ",i," \\mid ",Pe([d],[d,"'"]),`\\}
  \\end{align*}`)),(0,e.createElement)("p",{},"Finally, the rule for reading places is simply to look up the place's dependencies in ",(0,e.createElement)(t,{},i),":"),(0,e.createElement)(j,{name:"move",Top:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c," \\vdash_{",v,"} ",w," \\Rightarrow \\{~^{",v,"} ",w,"\\} "]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([c,"(",w,") = ",_]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([f(["noncopyable"]),"_{",U,"}~",_])))),Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[w],[_,b([te([i,"(",w,")"])])],[c,"[",w," \\mapsto ",_,"^{\\dagger}]"],[b([i])])))}),(0,e.createElement)(ne,{name:"sec_references"},"References"),(0,e.createElement)("p",{},'Beyond concrete places in memory, Oxide also contains references that point to places. As in Rust, these references have both a lifetime (called a "provenance") and a mutability qualifier (called an "ownership qualifier"). Their syntax is:'),(0,e.createElement)(s.Bnf,{subset:["concrprov","abstrprov","pexp","prov","ownq",["tys",["brw"]],["expr",["brw","pasgn","letprov"]]]}),...(()=>{let F=(...o)=>["\\mathbf{",f([o[0]]),"}"],I=(...o)=>[s.exprbrw([o[1]],[o[0]],[o[2]])],y=s.concrprov,O=s.exprderef;return[null,(0,e.createElement)("p",{},"Provenances are created via a ",(0,e.createElement)(t,{},F(["letprov"]))," expression, and references are created via a borrow expression ",(0,e.createElement)(t,{},s.exprbrw([y],[T],[d]))," that has an initial concrete provenance ",(0,e.createElement)(t,{},y)," (abstract provenances are just used for types of function parameters). References are used in conjunction with place expressions ",(0,e.createElement)(t,{},d)," that are places whose paths contain dereferences. For example, this program creates, reborrows, and mutates a reference:"),(0,e.createElement)(D,{},`\\begin{align*}
    &`,F(["letprov"])," \\langle ",y," _1, ",y," _2, ",y," _3, ",y,` _4 \\rangle \\\\
    &`,F(["let"]),"~x : (",Z,", ",Z,`) = (0, 0); \\\\
    &`,F(["let"]),"~y : ",I([v],[y," _2"],["(",Z,", ",Z,")"])," = ",I([v],[y," _1"],[L]),`; \\\\
    &`,F(["let"]),"~z : ",I([v],[y," _4"],[Z])," = ",I([v],[y," _3"],["(",O(["y"]),").1"]),`; \\\\
    &{`,O(["z"]),"} := 1_{",x,`}
\\end{align*}`),(0,e.createElement)("p",{},"Consider the information flow induced by ",(0,e.createElement)(t,{},O(["z"])," := 1_{",x,"}"),". We need to compute all places that ",(0,e.createElement)(t,{},"z")," could point-to, in this case ",(0,e.createElement)(t,{},"x.1"),", so ",(0,e.createElement)(t,{},x)," can be added to the conflicts of ",(0,e.createElement)(t,{},"x.1"),". Essentially, we must perform a ",(0,e.createElement)("em",{},"pointer analysis")," ",(0,e.createElement)(a,{},"smaragdakis2015pointer"),"."),(0,e.createElement)("p",{},"The key idea is that Oxide already does a pointer analysis! Performing one is an essential task in ensuring ownership-safety. All we have to do is extract the relevant information with Oxide's existing judgments. This is represented by the information flow extension to the reference-mutation rule:"),(0,e.createElement)(j,{name:"assignderef",Top:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[S],[_," _n ",b([te([h])])],[c," _1"],[b([i," _1"])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c," _1 \\vdash_{",v,"} ",d," : ",_," _o"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},B([$],[c," _1"],[v],[d],[H]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c," _1 \\vdash ",_," _n \\lesssim ",_," _o \\Rightarrow ",c,"'"]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},b([i," _2 = ",i," _1[\\forall ~ ^{",s.ownq,"} ",d,"' \\in ",H," ~ . ~ ",ae([i," _1"],[d,"'"],[h]),"]"])))),Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[s.exprpasgn([d],[S])],[s.tybunit([]),b([te(["\\varnothing"])])],[c,"' \\vartriangleright ",d],[b([i," _2"])]))))}),(0,e.createElement)("p",{},(0,e.createElement)(C,{name:"ownsafe"},"Here, the important concept is Oxide's ownership safety judgment: ",(0,e.createElement)(t,{},$,"; ",c," \\vdash_{",T,"} p \\Rightarrow ",H),', read as "in the contexts ',(0,e.createElement)(t,{},$)," and ",(0,e.createElement)(t,{},c),", ",(0,e.createElement)(t,{},d)," can be used ",(0,e.createElement)(t,{},T),"-ly and points to a loan in ",(0,e.createElement)(t,{},H),'."'),`
`,(0,e.createElement)(C,{name:"loan"},"A loan ",(0,e.createElement)(t,{},de," ::= {^{",T,"} ",d,"}")," is a place expression with an ownership-qualifier."),`
In Oxide, this judgment is used to ensure that a place is used safely at a given level of mutability. For instance, in the example at the top of this column, if `,(0,e.createElement)(t,{},O(["z"])," := 1")," was replaced with ",(0,e.createElement)(t,{},"x.1 := 1"),", then this would violate ownership-safety because ",(0,e.createElement)(t,{},"x")," is already borrowed by ",(0,e.createElement)(t,{},"y")," and ",(0,e.createElement)(t,{},"z"),"."),(0,e.createElement)("p",{},"In the example as written, the ownership-safety judgment for ",(0,e.createElement)(t,{},O(["z"]))," would compute the loan set:"),(0,e.createElement)(D,{},H," = \\{\\, {^{",v,"}(",O(["z"]),")}, {^{",v,"} (",O(["y"]),").1}, {^{",v,"} x.1}\\}"),(0,e.createElement)("p",{},"Note that ",(0,e.createElement)(t,{},"x.1")," is in the loan set of ",(0,e.createElement)(t,{},O(["z"])),". That suggests the loan set can be used as a pointer analysis. The complete details of computing the loan set can be found in ",(0,e.createElement)(a,{full:!0,extra:"p. 12"},"weiss2019oxide"),", but the summary for this example is:"),...(()=>{let o=(...l)=>[A(["outlives"],[l[0]," :> ",l[1]])];return[null,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},'Checking the borrow expression "',(0,e.createElement)(t,{},I([v],[y," _1"],["x"])),'" gets the loan set for ',(0,e.createElement)(t,{},"x"),", which is just ",(0,e.createElement)(t,{},"\\{{^{",v,"} x}\\}"),", and so sets ",(0,e.createElement)(t,{},c,"(",y," _1) = \\{{^{",v,"} x}\\}"),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},'Checking the assignment "',(0,e.createElement)(t,{},"y = ",I([v],[y," _1"],["x"])),'" requires that ',(0,e.createElement)(t,{},I([v],[y," _1"],["(",Z,", ",Z,")"]))," is a subtype of ",(0,e.createElement)(t,{},I([v],[y," _2"],["(",Z,", ",Z,")"])),", which requires that ",(0,e.createElement)(C,{name:"outlives"},(0,e.createElement)(t,{},y," _1"),' "outlives" ',(0,e.createElement)(t,{},y," _2"),", denoted ",(0,e.createElement)(t,{},o([y," _1"],[y," _2"]))),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"The constraint ",(0,e.createElement)(t,{},o([y," _1"],[y," _2"]))," adds ",(0,e.createElement)(t,{},c,"(",y," _1)")," to ",(0,e.createElement)(t,{},c,"(",y," _2)"),", so ",(0,e.createElement)(t,{},c,"(r _2) = \\{{^{",v,"} x}\\}"),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},'Checking "',(0,e.createElement)(t,{},I([v],[y," _3"],["(",O(["y"]),").1"])),'" gets the loan set for ',(0,e.createElement)(t,{},"(",O(["y"]),").1"),",  which is:"),(0,e.createElement)(D,{},"\\{{^{",v,"} p.1} \\mid {^{",v,"} p} \\in ",c,"(",y," _2)\\} \\cup \\{{^{",v,"} (",O(["y"]),").1}\\} = \\{{^{",v,"} x.1}, {^{",v,"} (",O(["y"]),").1}\\}"),(0,e.createElement)("p",{},"That is, the loans for ",(0,e.createElement)(t,{},y," _2")," are looked up in ",(0,e.createElement)(t,{},c)," (to get ",(0,e.createElement)(t,{},"\\{x\\}"),"), and then the additional projection ",(0,e.createElement)(t,{},"\\_.1")," is added on-top of each loan (to get ",(0,e.createElement)(t,{},"\\{x.1\\}"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Then ",(0,e.createElement)(t,{},c,"(",y," _4) = ",c,"(",y," _3)")," because ",(0,e.createElement)(t,{},o([y," _3"],[y," _4"])),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Finally, the loan set for ",(0,e.createElement)(t,{},O(["z"]))," is:"),(0,e.createElement)(D,{},c,"(",y," _4) \\cup \\{{^{",v,"} (",O(["z"]),")}\\} = \\{{^{",v,"} x.1}, {^{",v,"} (",O(["y"]),").1}, {^{",v,"} (",O(["z"]),")}\\}"))),(0,e.createElement)("p",{},"Applying this concept to the ",(0,e.createElement)(a,{},"tr_assignderef")," rule, we compute information flow for reference-mutation as: when mutating ",(0,e.createElement)(t,{},d)," with loans ",(0,e.createElement)(t,{},H),", add ",(0,e.createElement)(t,{},h," _e")," to all the conflicts for every loan ",(0,e.createElement)(t,{},"^{",v,"} ",d,"' \\in ",H),"."),(0,e.createElement)(ne,{name:"sec_funcalls"},"Function Calls"),(0,e.createElement)("p",{},"Finally, we examine how to modularly compute information flow through function calls, starting with syntax:"),(0,e.createElement)(s.Bnf,{subset:["frmvar","fname","tyvar",["expr",["call"]],"fdef","fenv"]}),(0,e.createElement)("p",{},"Oxide functions are parameterized by frame variables ",(0,e.createElement)(t,{},s.frmvar)," (for closures), abstract provenances ",(0,e.createElement)(t,{},s.abstrprov)," (for provenance polymorphism), and type variables ",(0,e.createElement)(t,{},s.tyvar)," (for type polymorphism). Unlike Oxide, we restrict to functions with one argument for simplicity in the formalism. Calling a function ",(0,e.createElement)(t,{},s.fname)," requires an argument ",(0,e.createElement)(t,{},w)," and any type-level parameters ",(0,e.createElement)(t,{},s.frmexpr,", ",s.prov)," and ",(0,e.createElement)(t,{},s.ty),"."),(0,e.createElement)("p",{},"The key question is: without inspecting its definition, what is the ",(0,e.createElement)("em",{},"most precise"),` assumption we can make about a function's information flow while still being sound? By "precise" we mean "if the analysis says there is a flow, then the flow actually exists", and by "sound" we mean "if a flow actually exists, then the analysis says that flow exists." For example consider this program:`),...(()=>{let l=s.abstrprov;return[null,(0,e.createElement)(D,{},`\\begin{align*}
    &`,F(["fn"]),"~",f(["f"]),"\\langle ",l," _1, ",l," _2 \\rangle(x: (",I([v],[l," _1"],[Z]),", ",I([Qe],[l," _2"],[Z]),")) \\{ ~ ",J(["\\text{???}"]),` ~ \\}\\\\
    &`,F(["let"]),"~x : ",Z," = 1_{",x,` _1}; ~
    `,F(["let"]),"~y : ",Z," = 2_{",x,` _2}; \\\\
    &`,F(["letprov"]),"\\langle ",y," _1, ",y," _2 \\rangle ~ ",F(["let"]),"~t : (",I([v],[y," _1"],[Z]),", ",I([Qe],[y," _2"],[Z]),`) \\\\
    & \\hspace{10pt} = ( `,I([v],[y," _1"],["x"]),", ",I([Qe],[y," _2"],["y"]),`); \\\\
    &`,f(["f"]),"\\langle ",y," _1, ",y,` _2\\rangle(t)
\\end{align*}`),(0,e.createElement)("p",{},"First, what can ",(0,e.createElement)(t,{},f(["f"]),"(t)")," mutate? Any data behind a shared reference is immutable, so only ",(0,e.createElement)(t,{},O(["t.0"]))," could possibly be mutated, not ",(0,e.createElement)(t,{},O(["t.1"])),". More generally, the argument's ",(0,e.createElement)("em",{},"transitive mutable references")," must be assumed to be mutated."),(0,e.createElement)("p",{},"Second, what are the inputs to the mutation of ",(0,e.createElement)(t,{},O(["t.0"])),"? This could theoretically be any possible value in the input, so both ",(0,e.createElement)(t,{},O(["t.0"]))," and ",(0,e.createElement)(t,{},O(["t.1"])),". More generally, every ",(0,e.createElement)("em",{},"transitively readable place")," from the argument must be assumed to be to be an input to the mutation. So in this example, a modular analysis of the information flow from calling ",(0,e.createElement)(t,{},f(["cp"]))," would add ",(0,e.createElement)(t,{},"\\{",x," _1, ",x," _2\\}")," to ",(0,e.createElement)(t,{},i,"(x)")," but not ",(0,e.createElement)(t,{},i,"(y)"),"."),...(()=>{let m=(...z)=>[A(["refs"],[z[0],"\\text{-}",f(["refs"]),"(",z[1],")"])];return[null,...(()=>{let z=(...Y)=>[A(["ownqcmp"],[Y[0]," \\lesssim ",Y[1]])];return[null,(0,e.createElement)("p",{},"To formalize these concepts, we first need to describe the transitive references of a place. The ",(0,e.createElement)(t,{},m([T],[d,", ",ee]))," metafunction computes a place expression for every reference accessible from ",(0,e.createElement)(t,{},d),". If ",(0,e.createElement)(t,{},T," = ",v)," then this just includes unique references, otherwise it includes unique and shared ones."),(0,e.createElement)(C,{name:"refs"},(0,e.createElement)(D,{},`\\begin{align*}
    `,m([T],[d,", ",s.tyb]),` &= \\varnothing \\\\
    `,m([T],[d,", (",_," _1, \\ldots, ",_," _n)"]),` &=
        \\bigcup_i `,m([T],[d,".i, ",_," _i"]),` \\\\
    `,m([T],[d,", ",I([T,"'"],[s.prov],[s.tyx])]),` &= \\begin{cases}
      \\{`,O([d]),"\\} \\cup ",m([T],[O(["p"]),", ",s.tyx])," & \\text{if $",z([T],[T,"'"]),`$} \\\\
      \\varnothing & \\text{otherwise}
    \\end{cases}
  \\end{align*}`)),...(()=>{let Y=(...W)=>[A(["loans"],[W[0],"\\text{-}",f(["loans"]),"(",W[1],")"])];return[null,(0,e.createElement)("p",{},(0,e.createElement)(C,{name:"ownqcmp"},"Here, ",(0,e.createElement)(t,{},z([T],[T,"'"])),' means "a loan at ',(0,e.createElement)(t,{},T)," can be used as a loan at ",(0,e.createElement)(t,{},T,"'"),'", defined as ',(0,e.createElement)(t,{},v," \\not\\lesssim ",Qe)," and ",(0,e.createElement)(t,{},T," \\lesssim ",T,"'")," otherwise."),`
Then `,(0,e.createElement)(t,{},Y([T],[d,", ",ee,", ",$,", ",c]))," can be defined as the set of concrete places accessible from those transitive references:"),(0,e.createElement)(C,{name:"loans"},(0,e.createElement)(D,{},`\\begin{align*}
    &`,Y([T],[d,", ",ee,", ",$,", ",c]),G,` \\\\
    &\\hspace{10pt} \\bigcup_{`,d," _1 \\in ",m([T],[d,", ",ee]),"} \\{",d," _2 \\mid {^{",T,"} ",d," _2} \\in ",H,"\\} &&\\text{where $",B([$],[c],[T],[d," _1"],[H]),`$}
  \\end{align*}`)),(0,e.createElement)("p",{},"Finally, the function application rule can be revised to include information flow as follows:"),...(()=>{let W=f(["arg"]);return[null,(0,e.createElement)(j,{name:"app",Top:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([X([U,"; ",$,"; ",c," \\vdash ",s.frmexpr])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([X([$,"; ",c," \\vdash ",s.prov])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([X([U,"; ",$,"; ",c," \\vdash ",_])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},U,"(",s.fname,") = ",s.fdefform([s.fname],[X([s.frmvar])],[X([l])],[X([s.tyvar])],[w],[_," _a"],[_," _r"],[X([o([l," _1"],[l," _2"])])],[S]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[w],[_,` _a
            `,X(["[",s.frmexpr," / ",s.frmvar,"]"]),X(["[",s.prov," / ",l,"]"]),X(["[",_," / ",s.tyvar,"]"]),b([te([h])])],[c," _1"],[b([i])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},J([$,"; ",c,` _1 \\vdash
        `,X([o([l," _2 ",X(["[",s.prov," / ",l,"]"])],[l," _1 ",X(["[",s.prov," / ",l,"]"])])])]))),(0,e.createElement)(q,{},(0,e.createElement)(t,{},b([h," _{",W,"} = ",h," \\cup \\bigcup_{",d," \\in ",Y([Qe],[w,", ",_,", ",$,", ",c," _2"]),"} ",i,"(",d,")"]))),(0,e.createElement)(q,{},(0,e.createElement)(D,{},b([`
        \\begin{align*}
        `,i,"' = ",i,"[&\\forall ",d," \\in ",Y([v],[w,", ",_,", ",$,", ",c," _2"]),` ~ .
        \\\\
        &`,ae([i],[d],[h," _{",W,"}"]),`]
        \\end{align*}
      `])))),Bot:(0,e.createElement)(e.Fragment,{},(0,e.createElement)(t,{},n([U],[$],[c],[b([i])],[s.exprcall([s.fname],["\\overline{\\Phi}"],["\\overline{\\rho}"],["\\overline{",_,"}"],[w])],[_,` _r
          `,X(["[",s.frmexpr," / ",s.frmvar,"]"]),X(["[",s.prov," / ",l,"]"]),X(["[",_," / ",s.tyvar,"]"]),b([te([h," _{",W,"}"])])],[c," _2"],[b([i," '"])])))}),(0,e.createElement)("p",{},"The collective dependencies of the input ",(0,e.createElement)(t,{},w)," are collected into ",(0,e.createElement)(t,{},h," _{",W,"}"),", and then every unique reference is updated with ",(0,e.createElement)(t,{},h," _{",W,"}"),". Additionally, the function's return value is assumed to be influenced by any input, and so has dependencies ",(0,e.createElement)(t,{},h," _{",W,"}"),"."),(0,e.createElement)("p",{},"Note that this rule does not depend on the body ",(0,e.createElement)(t,{},S)," of the function ",(0,e.createElement)(t,{},s.fname),", only its type signature in ",(0,e.createElement)(t,{},U),". This is the key to the modular approximation. Additionally, it means that this analysis can trivially handle higher-order functions. If ",(0,e.createElement)(t,{},s.fname)," were a parameter to the function being analyzed, then no control-flow analysis is needed to guess its definition."),(0,e.createElement)("p",{},(0,e.createElement)("strong",{},'TODO: put this into an "extra" grammar somewhere')),(0,e.createElement)(s.Bnf,{subset:["tysx","tyd","tyx","ty","frmexpr","frmty"]}),(0,e.createElement)(we,{name:"sec_soundness"},"Soundness"),(0,e.createElement)("p",{},"To characterize the correctness of our analysis, we seek to prove its ",(0,e.createElement)("em",{},"soundness"),": if a true information flow exists in a program, then the analysis computes that flow. The standard soundness theorem for information flow systems is ",(0,e.createElement)("em",{},"noninterference")," ",(0,e.createElement)(a,{},"goguen1982security"),". At a high level, noninterference states that for a given program and its dependencies, and for any two execution contexts, if the dependencies are equal between contexts, then the program will execute with the same observable behavior in both cases. For our analysis, we focus just on values produced by the program, instead of other behaviors like termination or timing."),(0,e.createElement)("p",{},"To formally define noninterference within Oxide, we first need to explore Oxide's operational semantics. Oxide programs are executed in the context of a stack of frames that map variables to values:"),(0,e.createElement)(s.Bnf,{subset:["value","stack","stackframe"]}),...(()=>{let k=s.stack;return[null,(0,e.createElement)("p",{},"For example, in the empty stack ",(0,e.createElement)(t,{},s.stackempty([])),', the expression "',(0,e.createElement)(t,{},_e(["x"],[Z],["1"],["x := 2"])),'" would first add ',(0,e.createElement)(t,{},"x \\mapsto 1")," to the stack. Then executing ",(0,e.createElement)(t,{},"x := 2")," would update ",(0,e.createElement)(t,{},s.stack,"(x) = 2"),". More generally, we use the shorthand ",(0,e.createElement)(t,{},k,"(",d,")")," to mean ``reduce ",(0,e.createElement)(t,{},d)," to a concrete location ",(0,e.createElement)(t,{},w),", then look up the value of ",(0,e.createElement)(t,{},w)," in ",(0,e.createElement)(t,{},k),".''"),(0,e.createElement)("p",{},"The key ingredient for noninterference is the equivalence of dependencies between stacks. That is, for two stacks ",(0,e.createElement)(t,{},k," _1")," and ",(0,e.createElement)(t,{},k," _2")," and a set of dependencies ",(0,e.createElement)(t,{},h)," in a context ",(0,e.createElement)(t,{},i),", we say those stacks are ",(0,e.createElement)("em",{},"the same up to ",(0,e.createElement)(t,{},h))," if all ",(0,e.createElement)(t,{},d)," with ",(0,e.createElement)(t,{},i,"(",d,") \\subseteq ",h)," are the same between stacks. Formally, the dependencies of ",(0,e.createElement)(t,{},h)," and equivalence of heaps are defined as:"),...(()=>{let xe=(...be)=>[A(["fdeps"],[f(["deps"]),"(",be[0],", ",be[1],")"])],Xe=(...be)=>[A(["stackeq"],["\\mathop{\\sim}_{",be[0],"}"])],He=(...be)=>[A(["stackdepeq"],["\\mathop{\\sim}^{",be[0],"}_{",be[1],"}"])];return[null,(0,e.createElement)(C,{names:["fdeps","stackeq","stackdepeq"]},(0,e.createElement)(D,{},`\\begin{align*}
      `,xe([i],[h])," &",G," \\{",d," \\mid ",d," \\mapsto ",h," _{",d,"} \\in ",i," \\wedge ",h," _{",d,"} \\subseteq ",h,`\\} \\\\
      `,k," _1 ",Xe(["P"]),k," _2 &",G," \\forall ",d," \\in P ~ . ~ ",k," _1(",d,") = ",k," _2(",d,`) \\\\
      `,k," _1 ",He([i],[h]),k," _2 &",G,k," _1 ",Xe([xe([i],[h])]),k,` _2
  \\end{align*}`)),(0,e.createElement)("p",{},"Then we define noninterference as follows:"),...(()=>{let be=(...se)=>[U," \\vdash ({",se[0],"}; {",se[1],"}) \\xrightarrow{\\ast} ({",se[2],"}; {",se[3],"})"],kt=(...se)=>[A(["stacksafe"],[se[0]," \\vdash ",se[2]," : ",se[3]])];return[null,(0,e.createElement)(oa,{name:"noninterference",title:"Noninterference"},(0,e.createElement)("p",{},"Let ",(0,e.createElement)(t,{},S)," such that:"),(0,e.createElement)(D,{},n([U],["\\bullet"],[c],[i],[S],[ee,te([h])],[c,"'"],[i,"'"])),(0,e.createElement)("p",{},"For ",(0,e.createElement)(t,{},"i \\in \\{1, 2\\}"),", let ",(0,e.createElement)(t,{},k," _i")," such that:"),(0,e.createElement)(D,{},kt([U],[k," _i"],[c])," \\hspace{12pt} \\text{and} \\hspace{12pt} ",be([k," _i"],[S],[V([k]),"_i"],[s.value," _i"])),(0,e.createElement)("p",{},"Then:"),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)(t,{},k," _1 ",He([i],[h]),k," _2 \\implies ",s.value,"_1 = ",s.value,"_2"))),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)(t,{},"\\forall ",d," \\mapsto ",h," _{",d,"} \\in ",i,"' ~ . ~ ",k," _1 ",He([i],[h," _p"]),k," _2 \\implies ",V([k]),"_1(",d,") = ",V([k]),"_2(",d,")"))))),(0,e.createElement)("p",{},"This theorem states that given a well-typed expression ",(0,e.createElement)(t,{},S)," and corresponding stacks ",(0,e.createElement)(t,{},k," _i"),", then its output ",(0,e.createElement)(t,{},s.value,"_i")," should be equal if the expression's dependencies ",(0,e.createElement)(t,{},h)," are initially equal. Moreover, for any place expression ",(0,e.createElement)(t,{},d),", if its dependencies in the output context ",(0,e.createElement)(t,{},i,"'")," are initially equal then the stack value will be the same after execution."),(0,e.createElement)("p",{},"Note that the context ",(0,e.createElement)(t,{},$)," is required to be empty because an expression ",(0,e.createElement)(t,{},"e"),` can only evaluate if it does not contain abstract type or provenance variables.
`,(0,e.createElement)(C,{name:"stacksafe"},"The judgment ",(0,e.createElement)(t,{},kt([U],[k," _i"],[c])),' means "the stack ',(0,e.createElement)(t,{},k," _i")," is well-typed under ",(0,e.createElement)(t,{},k)," and ",(0,e.createElement)(t,{},c),'".'),`
That is, for all places `,(0,e.createElement)(t,{},w)," in ",(0,e.createElement)(t,{},c),", then ",(0,e.createElement)(t,{},w," \\in ",k)," and ",(0,e.createElement)(t,{},k,"(",w,")")," has type ",(0,e.createElement)(t,{},c,"(",w,")"),"."),(0,e.createElement)("p",{},"The proof of ",(0,e.createElement)(a,{},"noninterference"),", found in the appendix, guarantees that we can soundly compute information flow for Oxide programs."),(0,e.createElement)(we,{name:"sec_implementation"},"Implementation"),(0,e.createElement)("p",{},"Our formal model provides a sound theoretical basis for analyzing information flow in Oxide. However, Rust is a more complex language than Oxide, and the Rust compiler uses many intermediate representations beyond its surface syntax. Therefore in this section, we describe the key details of how our system, ",p,", bridges theory to practice. Specifically:"),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Rust computes lifetime-related information on a control-flow graph (CFG) program representation, not the high-level AST. So we translate our analysis to work for CFGs (",(0,e.createElement)(a,{},"sec_mir"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Rust does not compute the loan set for lifetimes directly like in Oxide. So we must reconstruct the loan sets given the information exported by Rust (",(0,e.createElement)(a,{},"sec_lifetimes"),").")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Rust contains escape hatches for ownership-unsafe code that cannot be analyzed using our analysis. So we describe the situations in which our analysis is unsound for Rust programs (",(0,e.createElement)(a,{},"sec_limitations"),")."))),(0,e.createElement)(ne,{name:"sec_mir"},"Analyzing Control-Flow Graphs"),(0,e.createElement)(Te,{name:"fig_mir_example"},(0,e.createElement)(Bn,{},(0,e.createElement)(ge,{},`fn get_count(
  h: &mut HashMap<String, u32>,
  k: String
) -> u32 {
  if !h.contains_key(&k) {
    h.insert(k, 0); 0
  } else {
    *h.get(&k).unwrap()
  }
}`),(0,e.createElement)("object",{data:"static/mir-example.svg",type:"image/svg+xml",width:"450px"})),(0,e.createElement)(ve,{},(0,e.createElement)("p",{},"Example of how ",p," computes information flow. On the left is a Rust function ",(0,e.createElement)("code",{},"get_count")," that finds a value in a hash map for a given key, and inserts 0 if none exists. On the right ",(0,e.createElement)("code",{},"get_count")," is lowered into Rust's MIR control-flow graph, annotated with information flow. Each rectangle is a basic block, named at the top. Arrows indicate control flow (panics omitted)."),(0,e.createElement)("p",{},"Beside each instruction is the result of the information flow analysis, which maps place expressions to locations in the CFG (akin to ",(0,e.createElement)(t,{},i)," in ",(0,e.createElement)(a,{},"sec_analysis"),"). For example, the ",(0,e.createElement)("code",{},"insert")," function call adds dependencies to ",(0,e.createElement)("code",{},"*h")," because it is assumed to be mutated, since it is a mutable reference. Additionally, the ",(0,e.createElement)("code",{},"switch")," instructions and ",(0,e.createElement)("code",{},"_4")," variable are added as dependencies to ",(0,e.createElement)("code",{},"h")," because the call to ",(0,e.createElement)("code",{},"insert")," is control-dependent on the switch."))),(0,e.createElement)("p",{},'The Rust compiler lowers programs into a "mid-level representation", or MIR, that represents programs as a control-flow graph. Essentially, expressions are flattened into sequences of instructions (basic blocks) which terminate in instructions that can jump to other blocks, like a branch or function call.  ',(0,e.createElement)(a,{},"fig_mir_example")," shows an example CFG and its information flow."),(0,e.createElement)("p",{},"To implement the modular information flow analysis for MIR, we reused standard static analysis techniques for CFGs, i.e., a flow-sensitive, forward dataflow analysis pass where:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"At each instruction, we maintain a mapping from place expressions to a set of locations in the CFG on which the place is dependent, comparable to ",(0,e.createElement)(t,{},i)," in ",(0,e.createElement)(a,{},"sec_analysis"),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"A transfer function updates ",(0,e.createElement)(t,{},"\\Theta")," for each instruction, e.g. ",(0,e.createElement)(t,{},d," := ",S)," follows the same rules as in ",(0,e.createElement)(a,{},"tr_assignderef")," by adding the dependencies of ",(0,e.createElement)(t,{},S)," to all conflicts of aliases of ",(0,e.createElement)(t,{},"p"),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"The input ",(0,e.createElement)(t,{},i,"^{",f(["in"]),"}")," to a basic block is the join of each of the output ",(0,e.createElement)(t,{},i,"^{",f(["out"]),"}_i")," for each incoming edge, i.e. ",(0,e.createElement)(t,{},i,"^{",f(["in"]),"} = \\bigvee_i ",i,"^{",f(["out"]),"}_i")," . The join operation is key-wise set union, or more precisely:"),(0,e.createElement)(D,{},i," _1 \\vee ",i," _2 ",G," \\{",s.vr," \\mapsto ",i," _1(",s.vr,") \\cup ",i," _2(",s.vr,") \\mid ",s.vr," \\in ",i," _1 \\vee ",s.vr," \\in ",i," _2\\}")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"We iterate this analysis to a fixpoint, which we are guaranteed to reach because ",(0,e.createElement)(t,{},"\\langle",i,", \\vee\\rangle")," forms a join-semilattice."))),(0,e.createElement)("p",{},"To handle indirect information flows via control flow, such as the dependence of ",(0,e.createElement)("code",{},"h")," on ",(0,e.createElement)("code",{},"contains_key")," in ",(0,e.createElement)(a,{},"fig_mir_example"),", we compute the control-dependence between instructions.  We define control-dependence following ",(0,e.createElement)(a,{full:!0},"ferrante1987program"),":  an instruction ",(0,e.createElement)(t,{},"Y")," is control-dependent on ",(0,e.createElement)(t,{},"X")," if there exists a directed path ",(0,e.createElement)(t,{},"P")," from ",(0,e.createElement)(t,{},"X")," to ",(0,e.createElement)(t,{},"Y")," such that any ",(0,e.createElement)(t,{},"Z")," in ",(0,e.createElement)(t,{},"P")," is post-dominated by ",(0,e.createElement)(t,{},"Y"),", and ",(0,e.createElement)(t,{},"X")," is not post-dominated by ",(0,e.createElement)(t,{},"Y"),". An instruction ",(0,e.createElement)(t,{},"X")," is post-dominated by ",(0,e.createElement)(t,{},"Y")," if ",(0,e.createElement)(t,{},"Y")," is on every path from ",(0,e.createElement)(t,{},"X")," to a ",(0,e.createElement)("code",{},"return")," node. We compute control-dependencies by generating the post-dominator tree and frontier of the CFG using the algorithms of ",(0,e.createElement)(a,{full:!0},"cooper2001simple")," and ",(0,e.createElement)(a,{full:!0},"cytron1989efficient"),", respectively."),(0,e.createElement)("p",{},"Besides a return, the only other control-flow path out of a function in Rust is a panic. For example, each function call in ",(0,e.createElement)(a,{},"fig_mir_example")," actually has an implicit edge to a panic node (not depicted). Unlike exceptions in other languages, panics are designed to indicate unrecoverable failure. Therefore we exclude panics from our control-dependence analysis."),(0,e.createElement)(ne,{name:"sec_lifetimes"},"Computing Loan Sets from Lifetimes"),(0,e.createElement)("p",{},'To verify ownership-safety (perform "borrow-checking"), the Rust compiler does not explicitly build the loan sets of lifetimes (or provenances in Oxide terminology). The borrow checking algorithm performs a sort of flow-sensitive dataflow analysis that determines the range of code during which a lifetime is valid, and then checks for conflicts e.g. in overlapping lifetimes (see the non-lexical lifetimes RFC ',(0,e.createElement)(a,{},"nllrfc"),"."),(0,e.createElement)("p",{},"However, Rust's borrow checker relies on the same fundamental language feature as Oxide to verify ownership-safety: outlives-constraints. For a given Rust function, Rust can output the set of outlives-constraints between all lifetimes in the function. These lifetimes are generated in the same manner as in Oxide, such as from inferred subtyping requirements or user-provided outlives-constraints. Then given these constraints, we compute loan sets via a process similar to the ownership-safety judgment described in ",(0,e.createElement)(a,{},"sec_references"),". In short, for all instances of borrow expressions ",(0,e.createElement)(t,{},I([T],[y],[d]))," in the MIR program, we initialize ",(0,e.createElement)(t,{},c,"(",y,") = \\{",d,"\\}"),". Then we propagate loans via ",(0,e.createElement)(t,{},c,"(",y,") = \\bigcup_{",o([y,"'"],[y]),"} ",c,"(",y,"')")," until ",(0,e.createElement)(t,{},c)," reaches a fixpoint."),(0,e.createElement)(ne,{name:"sec_limitations"},"Handling Ownership-Unsafe Code"),(0,e.createElement)("p",{},"Rust has a concept of ",(0,e.createElement)("em",{},"raw pointers")," whose behavior is comparable to pointers in C. For a type ",(0,e.createElement)("code",{},"T"),", an immutable reference has type ",(0,e.createElement)("code",{},"&T"),", while an immutable raw pointer has type ",(0,e.createElement)("code",{},"*const T"),". Raw pointers are not subject to ownership restrictions, and they can only be used in blocks of code demarcated as ",(0,e.createElement)("code",{},"unsafe"),". They are primarily used to interoperate with other languages like C, and to implement primitives that cannot be proved as ownership-safe via Rust's rules."),(0,e.createElement)("p",{},"Our pointer and mutation analysis fundamentally relies on ownership-safety for soundness. We do not try to analyze information flowing directly through unsafe code, as it would be subject to the same difficulties of C++ in ",(0,e.createElement)(a,{},"sec_intro"),". While this limits the applicability of our analysis, empirical studies have shown that most Rust code does not (directly) use unsafe blocks ",(0,e.createElement)(a,{},"astrauskas2020programmers"),(0,e.createElement)(a,{},"evans2020rust"),". We further discuss the impact and potential mitigations of this limitation in ",(0,e.createElement)(a,{},"sec_discussion"),"."),(0,e.createElement)(we,{name:"sec_evaluation"},"Evaluation"),(0,e.createElement)("p",{},(0,e.createElement)(a,{},"sec_soundness")," established that our analysis is ",(0,e.createElement)("em",{},"sound"),". The next question is whether it is ",(0,e.createElement)(a,{},"precise"),": how many spurious flows are included by our analysis? We evaluate two directions:"),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"What if the analysis had ",(0,e.createElement)("em",{},"more")," information? If we could analyze the definitions of called functions, how much more precise are whole-program flows vs. modular flows?")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"What if the analysis had ",(0,e.createElement)("em",{},"less")," information? If Rust's type system was more like C++, i.e. lacking ownership, then how much less precise do the modular flows become?"))),(0,e.createElement)("p",{},"To answer these questions, we created three modifications to Flowistry:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)(C,{name:"wholeprogram",label:(0,e.createElement)(Se,{},"Whole-Program")},"The analysis recursively analyzes information flow within the definitions of called functions. For example, if calling a function ",(0,e.createElement)("code",{},"f(&mut x, y)")," where ",(0,e.createElement)("code",{},"f")," does not actually modify ",(0,e.createElement)("code",{},"x"),", then the ",(0,e.createElement)(a,{},"wholeprogram")," analysis will not register a flow from ",(0,e.createElement)("code",{},"y")," to ",(0,e.createElement)("code",{},"x"),".")),(0,e.createElement)("li",{},(0,e.createElement)(C,{name:"mutblind",label:(0,e.createElement)(Se,{},"Mut-Blind")},"The analysis does not distinguish between mutable and immutable references. For example, if calling a function ",(0,e.createElement)("code",{},"f(&x)"),", then the analysis assumes that ",(0,e.createElement)("code",{},"x")," can be modified.")),(0,e.createElement)("li",{},(0,e.createElement)(C,{name:"pointerblind",label:(0,e.createElement)(Se,{},"Pointer-Blind")},"The analysis does not use lifetimes to reason about references, and rather assumes all references of the same type can alias. For example, if a function takes as input ",(0,e.createElement)("code",{},"f(x: &mut i32, y: &mut i32)")," then ",(0,e.createElement)("code",{},"x")," and ",(0,e.createElement)("code",{},"y")," are assumed to be aliases."))),(0,e.createElement)("p",{},"The ",(0,e.createElement)(a,{},"wholeprogram"),` modification represents the most precise information flow analysis we can feasibly implement.
The `,(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind"),` modifications represent an ablation of the precision provided by ownership types.
Each modification can be combined with the others, representing `,(0,e.createElement)(t,{},"2^3 = 8")," possible conditions for evaluation."),(0,e.createElement)("p",{},"To better understand ",(0,e.createElement)(a,{},"wholeprogram"),", say we are analyzing the information flow for an expression ",(0,e.createElement)("code",{},"f(&mut x, y)")," where ",(0,e.createElement)("code",{},"f")," is defined as ",(0,e.createElement)("code",{},"f(a, b) { (*a).1 = b; }"),". After analyzing the implementation of ",(0,e.createElement)("code",{},"f"),", we translate flows to parameters of ",(0,e.createElement)("code",{},"f")," into flows on arguments of the call to ",(0,e.createElement)("code",{},"f"),". So the flow ",(0,e.createElement)("code",{},"b -> (*a).1")," is translated into",(0,e.createElement)("code",{},"y -> x.1"),"."),(0,e.createElement)("p",{},"Additionally, if the definition of ",(0,e.createElement)("code",{},"f")," is not available, then we fall back to the modular analysis. Importantly, due to the architecture of the Rust compiler, the only available definitions are those ",(0,e.createElement)("em",{},"within the package being analyzed"),". Therefore even with ",(0,e.createElement)(a,{},"wholeprogram"),", we cannot recurse into e.g. the standard library."),(0,e.createElement)("p",{},"With these three modifications, we compare the number of flows computed from a dataset of Rust projects (",(0,e.createElement)(a,{},"sec_dataset"),") to quantitatively (",(0,e.createElement)(a,{},"sec_quant"),") and qualitatively (",(0,e.createElement)(a,{},"sec_qual"),") evaluate the precision of our analysis."),(0,e.createElement)(ne,{name:"sec_dataset"},"Dataset"),(0,e.createElement)("p",{},'To empirically compare these modifications, we curated a dataset of Rust packages (or "crates") to analyze. We had two selection criteria:'),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"To mitigate the single-crate limitation of ",(0,e.createElement)(a,{},"wholeprogram"),", we preferred large crates so as to see a greater impact from the ",(0,e.createElement)(a,{},"wholeprogram")," modification. We only considered crates with over 10,000 lines of code as measured by the ",(0,e.createElement)("code",{},"cloc")," utility ",(0,e.createElement)(a,{},"cloc"),".")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"To control for code styles specific to individual applications, we wanted crates from a wide range of domains."))),(0,e.createElement)("p",{},"After a manual review of large crates in the Rust ecosystem, we selected 10 crates, shown in ",(0,e.createElement)(a,{},"tab_dataset"),". We built each crate with as many feature flags enabled as would work on our Ubuntu 16.04 machine. Details like the specific flags and commit hashes can be found in the appendix."),(0,e.createElement)(Te,{name:"tab_dataset"},(0,e.createElement)("table",{},(0,e.createElement)("thead",{},(0,e.createElement)("tr",{},(0,e.createElement)("th",{},"Project"),(0,e.createElement)("th",{},"Crate"),(0,e.createElement)("th",{},"Purpose"),(0,e.createElement)("th",{},"LOC"),(0,e.createElement)("th",{},"#"," Vars"),(0,e.createElement)("th",{},"#"," Funcs"),(0,e.createElement)("th",{},"Avg. Instrs/Func"))),(0,e.createElement)("tbody",{},(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/rayon-rs/rayon"},"rayon")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"Data parallelism library"),(0,e.createElement)("td",{},"15,524"),(0,e.createElement)("td",{},"10,607"),(0,e.createElement)("td",{},"1,079"),(0,e.createElement)("td",{},"16.6")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/ctz/rustls"},"rustls")),(0,e.createElement)("td",{},"rustls"),(0,e.createElement)("td",{},"TLS implementation"),(0,e.createElement)("td",{},"16,866"),(0,e.createElement)("td",{},"23,407"),(0,e.createElement)("td",{},"868"),(0,e.createElement)("td",{},"42.4")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/mozilla/sccache"},"sccache")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"Distributed build cache"),(0,e.createElement)("td",{},"23,202"),(0,e.createElement)("td",{},"23,987"),(0,e.createElement)("td",{},"643"),(0,e.createElement)("td",{},"62.1")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/dimforge/nalgebra"},"nalgebra")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"Numerics library"),(0,e.createElement)("td",{},"31,951"),(0,e.createElement)("td",{},"35,886"),(0,e.createElement)("td",{},"1,785"),(0,e.createElement)("td",{},"26.7")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/image-rs/image"},"image")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"Image processing library"),(0,e.createElement)("td",{},"20,722"),(0,e.createElement)("td",{},"39,077"),(0,e.createElement)("td",{},"1,096"),(0,e.createElement)("td",{},"56.8")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/hyperium/hyper"},"hyper")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"HTTP server"),(0,e.createElement)("td",{},"15,082"),(0,e.createElement)("td",{},"44,900"),(0,e.createElement)("td",{},"790"),(0,e.createElement)("td",{},"82.9")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/mrDIMAS/rg3d"},"rg3d")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"3D game engine"),(0,e.createElement)("td",{},"54,426"),(0,e.createElement)("td",{},"59,590"),(0,e.createElement)("td",{},"3,448"),(0,e.createElement)("td",{},"25.7")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/xiph/rav1e"},"rav1e")),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"Video encoder"),(0,e.createElement)("td",{},"50,294"),(0,e.createElement)("td",{},"76,749"),(0,e.createElement)("td",{},"931"),(0,e.createElement)("td",{},"115.4")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},(0,e.createElement)("a",{href:"https://github.com/RustPython/RustPython"},"RustPython")),(0,e.createElement)("td",{},"vm"),(0,e.createElement)("td",{},"Python interpreter"),(0,e.createElement)("td",{},"47,927"),(0,e.createElement)("td",{},"97,637"),(0,e.createElement)("td",{},"3,315"),(0,e.createElement)("td",{},"51.0")),(0,e.createElement)("tr",{},(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},"\xA0"),(0,e.createElement)("td",{},(0,e.createElement)("strong",{},"Total:")),(0,e.createElement)("td",{},"286,682"),(0,e.createElement)("td",{},"435,979"),(0,e.createElement)("td",{},"14,696"),(0,e.createElement)("td",{},"\xA0")))),(0,e.createElement)(ve,{},"Dataset of crates used to evaluate information flow precision, ordered in increasing number of variables analyzed. Each project often contains many crates, so a sub-crate is specified where applicable, and the root crate is analyzed otherwise. Metrics displayed are LOC (lines of code), number of variables, number of functions, and the average number of MIR instructions per function (size of CFG).")),(0,e.createElement)("p",{},"For each crate, we ran the information flow analysis on every function in the crate, repeated under each of the 8 conditions. Within a function, for each local variable ",(0,e.createElement)(t,{},"x"),", we compute the size of ",(0,e.createElement)(t,{},i,"(x)")," at the exit of the CFG ","\u2014"," in terms of program slicing, we compute the size of the variable's backward slice at the function's return instructions. The resulting dataset then has four independent variables (crate, function, condition, variable name) and one dependent variable (size of dependency set) for a total of 3,487,832 data points."),(0,e.createElement)("p",{},"Our main goal in this evaluation is to analyze precision, not performance. Our baseline implementation is reasonably optimized ","\u2014"," the median per-function execution time was 370.24",(0,e.createElement)(t,{},"\\mu\\text{s}"),". But ",(0,e.createElement)(a,{},"wholeprogram")," is designed to be as precise as possible, so its naive recursion is sometimes extremely slow. For example, when analyzing the ",(0,e.createElement)("code",{},"GameEngine::render")," function of the ",(0,e.createElement)("code",{},"rg3d")," crate (with thousands of functions in its call graph), the modular analysis takes 0.13s while the recursive analysis takes 23.18s, a 178",(0,e.createElement)(t,{},"\\times")," slowdown. Future work could compare our modular analysis to whole-program analyses across the precision/performance spectrum, such as in the extensive literature on context-sensitivity ",(0,e.createElement)(a,{},"smaragdakis2015pointer"),"."),(0,e.createElement)(ne,{name:"sec_quant"},"Quantitative Results"),(0,e.createElement)("p",{},"We observed no meaningful patterns from the interaction of modifications ","\u2014"," for example, in a linear regression of the interaction of ",(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind")," against the size of the dependency set, each condition is individually statistically significant (",(0,e.createElement)(t,{},"p < 0.001"),") while their interaction is not (",(0,e.createElement)(t,{},"p = 0.337"),`).
`,(0,e.createElement)(C,{name:"baseline",label:(0,e.createElement)(Se,{},"Baseline")},"So to simplify our presentation, we focus only on four conditions: three for each modification individually active with the rest disabled, and one for all modifications disabled, referred to as ",(0,e.createElement)(a,{},"baseline"),".")),(0,e.createElement)(Ve,{name:"sec_whole"},(0,e.createElement)(a,{},"wholeprogram")),...(()=>{let se={encoding:{y:{field:"count",type:"quantitative"}},layer:[{transform:[{filter:"datum.bin > 0 && datum.count > 0"}],mark:"bar",encoding:{x:{field:"bin",type:"quantitative",scale:{type:"log"},title:"% difference in dependency set size, log scale (with zero)"}}},{transform:[{filter:"datum.bin == 0"}],mark:"bar",encoding:{x:{value:0}}}]},Be=Qt.default.cloneDeep(se);Be.title={text:"Y-Linear"},Be.encoding.y.title="Count";let Je=Qt.default.cloneDeep(se);return Je.title={text:"Y-Log"},Object.assign(Je.encoding.y,{scale:{type:"log"},title:"Count, log scale"}),[null,(0,e.createElement)(Te,{name:"fig_recurse"},(0,e.createElement)(yt,{spec:{data:{values:Ue},hconcat:[Be,Je]},name:"whole_program"}),(0,e.createElement)(ve,{},"Distribution in differences of dependency set size between ",(0,e.createElement)(a,{},"wholeprogram")," and ",(0,e.createElement)(a,{},"baseline")," analyses. The x-axis is a log-scale with 0 added for comparison. Most sets are the same, so 0 dominates (left). A log-scale (right) shows the tail more clearly.")),(0,e.createElement)("p",{},"For ",(0,e.createElement)(a,{},"wholeprogram"),", we compare against ",(0,e.createElement)(a,{},"baseline")," to answer our first evaluation question: how much more precise is a whole-program analysis than a modular one? To quantify precision, we compare the ",(0,e.createElement)("em",{},"percentage increase in size")," of dependency sets for a given variable between two conditions. For instance, if ",(0,e.createElement)(a,{},"wholeprogram")," computes ",(0,e.createElement)(t,{},"|",i,"(x)| = 2")," and ",(0,e.createElement)(a,{},"baseline")," computes ",(0,e.createElement)(t,{},"|",i,"(x)| = 5")," for some ",(0,e.createElement)(t,{},"x"),", then the difference is ",(0,e.createElement)(t,{},"(5 - 2) / 2 = 1.5 = 150\\%"),"."),(0,e.createElement)("p",{},(0,e.createElement)(a,{},"fig_recurse_whole_program_Left")," shows a histogram of the differences between ",(0,e.createElement)(a,{},"wholeprogram")," and ",(0,e.createElement)(a,{},"baseline")," for all variables. In 94% of all cases, the ",(0,e.createElement)(a,{},"wholeprogram")," and ",(0,e.createElement)(a,{},"baseline")," conditions produce the same result and hence have a difference of 0. In the remaining 6% of cases with a non-zero difference, visually enhanced with a log-scale in ",(0,e.createElement)(a,{},"fig_recurse_whole_program_Right"),", the metric follows a right-tailed log-normal distribution. We can summarize the log-normal by computing its median, which is 7%. This means that within the 6% of non-zero cases, the median difference is an increase in size by 7%. Thus, the modular approximation does not significantly increase the size of dependency sets in the vast majority of cases."),(0,e.createElement)(Ve,{name:"sec_blind"},(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind")),...(()=>{let Ke={encoding:{x:{field:"bin",type:"quantitative",scale:{type:"log"},title:"% difference in dependency set size, log scale"},y:{field:"count",type:"quantitative",scale:{domain:[0,13e3]}}},transform:[{filter:"datum.bin > 0 && datum.count > 0"}],mark:"bar"},rn={data:{values:Ue},title:"Modular - Whole-Program",...Ke},sn={data:{values:je},title:"Mut-Blind - Modular",...Ke},ln={data:{values:Ce},title:"Pointer-Blind - Modular",...Ke};return[null,(0,e.createElement)(Te,{name:"fig_all_dist"},(0,e.createElement)(yt,{spec:{hconcat:[rn,sn,ln]},name:"graph"}),(0,e.createElement)(ve,{},"Distribution in differences between ",(0,e.createElement)(a,{},"baseline")," and each alternative condition, with zeros excluded to highlight the shape of each distribution. ",(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind")," both reduce the precision more often and more severely than ",(0,e.createElement)(a,{},"baseline")," does vs. ",(0,e.createElement)(a,{},"wholeprogram"),".")),(0,e.createElement)("p",{},"Next, we address our second evaluation question: how much less precise is an analysis with weaker assumptions about the program than the ",(0,e.createElement)(a,{},"baseline")," analysis? For this question, we compare the size of dependency sets between the ",(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind")," conditions versus ",(0,e.createElement)(a,{},"baseline"),". ",(0,e.createElement)(a,{},"fig_all_dist")," shows the corresponding histograms of differences, with the ",(0,e.createElement)(a,{},"wholeprogram")," vs. ",(0,e.createElement)(a,{},"baseline")," histogram included for comparison."),(0,e.createElement)("p",{},"First, the ",(0,e.createElement)(a,{},"mutblind")," and ",(0,e.createElement)(a,{},"pointerblind")," modifications reduce the precision of the analysis more often and with a greater magnitude than ",(0,e.createElement)(a,{},"baseline")," does vs. ",(0,e.createElement)(a,{},"wholeprogram"),". 39% of ",(0,e.createElement)(a,{},"mutblind")," cases and 17% of ",(0,e.createElement)(a,{},"pointerblind")," cases have a non-zero difference. Of those cases, the median difference in size is 50% for ",(0,e.createElement)(a,{},"mutblind")," and 56% for ",(0,e.createElement)(a,{},"pointerblind"),"."),(0,e.createElement)("p",{},"Therefore, the information from ownership types is valuable in increasing the precision of our information flow analysis. Dependency sets are often larger without access to information about mutability or lifetimes."),(0,e.createElement)(ne,{name:"sec_qual"},"Qualitative Results"),(0,e.createElement)("p",{},"The statistics convey a sense of how often each condition influences precision. But it is equally valuable to understand the kind of code that leads to such differences. For each condition, we manually inspected a sample of cases with non-zero differences vs. ",(0,e.createElement)(a,{},"baseline"),"."),(0,e.createElement)(Ve,{name:"sec_whole_vs_mod"},"Modularity"),(0,e.createElement)("p",{},"One common source of imprecision in modular flows is when functions take a mutable reference as input for the purposes of passing the mutable permission off to an element of the input."),(0,e.createElement)(ge,{language:fe},`fn crop<I: GenericImageView>(
  image: &mut I, x: u32, y: u32,
  width: u32, height: u32
) -> SubImage<&mut I> {
  let (x, y, width, height) =
    crop_dimms(image, x, y, width, height);
  SubImage::new(image, x, y, width, height)
}`),(0,e.createElement)("p",{},"For example, the function ",(0,e.createElement)("code",{},"crop")," from the ",(0,e.createElement)("code",{},"image")," crate returns a mutable view on an image. No data is mutated, only the mutable permission is passed from whole image to sub-image. However, a modular analysis on the ",(0,e.createElement)("code",{},"image")," input would assume that ",(0,e.createElement)("code",{},"image")," is mutated by ",(0,e.createElement)("code",{},"crop"),"."),(0,e.createElement)("p",{},"Another common case is when a value only depends on a subset of a function's inputs. The modular approximation assumes all inputs are relevant to all possible mutations, but this is naturally not always the case."),(0,e.createElement)(ge,{language:fe},`fn solve_lower_triangular_with_diag_mut<R2,C2,S2>(
  &self, b: &mut Matrix<N, R2, C2, S2>, diag: N,
) -> bool {
  if diag.is_zero() { return false; }
  // logic mutating b...
  true
}`),(0,e.createElement)("p",{},"For example, this function from ",(0,e.createElement)("code",{},"nalgebra")," returns a boolean whose value solely depends on the argument ",(0,e.createElement)("code",{},"diag"),". However, a modular analysis of a call to this function would assume that ",(0,e.createElement)("code",{},"self")," and ",(0,e.createElement)("code",{},"b")," is relevant to the return value as well."),(0,e.createElement)(Ve,{name:"sec_mut"},"Mutability"),(0,e.createElement)("p",{},"The reason ",(0,e.createElement)(a,{},"mutblind")," is less precise than ",(0,e.createElement)(a,{},"baseline")," is quite simple ","\u2014"," many functions take immutable references as inputs, and so many more mutations have to be"),(0,e.createElement)(ge,{language:fe},`fn read_until<R, F>(io: &mut R, func: F)
  -> io::Result<Vec<u8>>
  where R: Read, F: Fn(&[u8]) -> bool
{
  let mut buf = vec![0; 8192]; let mut pos = 0;
  loop {
    let n = io.read(&mut buf[pos..])?; pos += n;
    if func(&buf[..pos]) { break; }
    // ...
  }
}`),(0,e.createElement)("p",{},"For instance, this function from ",(0,e.createElement)("code",{},"hyper")," repeatedly calls an input function ",(0,e.createElement)("code",{},"func")," with segments of an input buffer. Without a control-flow analysis, it is impossible to know what functions ",(0,e.createElement)("code",{},"read_until")," will be called with. And so ",(0,e.createElement)(a,{},"mutblind")," must always assume that ",(0,e.createElement)("code",{},"func")," could mutate ",(0,e.createElement)("code",{},"buf"),". However, ",(0,e.createElement)(a,{},"baseline")," can rely on the immutability of shared references and deduce that ",(0,e.createElement)("code",{},"func")," could not mutate ",(0,e.createElement)("code",{},"buf"),"."),(0,e.createElement)(Ve,{name:"sec_life"},"Lifetimes"),(0,e.createElement)("p",{},"Without lifetimes, our analysis has to make more conservative assumptions about objects that could possibly alias. We observed many cases in the ",(0,e.createElement)(a,{},"pointerblind")," condition where two references shared different lifetimes but the same type, and so had to be classified as aliases."),(0,e.createElement)(ge,{language:fe},`fn link_child_with_parent_component(
  parent: &mut FbxComponent,
  child: &mut FbxComponent,
  child_handle: Handle<FbxComponent>,
) { match parent {
  FbxComponent::Model(model) => {
    model.geoms.push(child_handle),
  },
  // ..
}}`),(0,e.createElement)("p",{},"For example, the ",(0,e.createElement)("code",{},"link_child_with_parent_component")," function in ",(0,e.createElement)("code",{},"rg3d")," takes mutable references to a ",(0,e.createElement)("code",{},"parent")," and ",(0,e.createElement)("code",{},"child"),". These references are guaranteed not to alias by the rules of ownership, but a naive pointer analysis must assume they could, so modifying ",(0,e.createElement)("code",{},"parent")," could modify ",(0,e.createElement)("code",{},"child"),"."),(0,e.createElement)(ne,{},"Threats to Validity"),(0,e.createElement)("p",{},"Finally, we address the issue: how meaningful are the results above? How likely would they generalize to arbitrary code rather than just our selected dataset? We discuss a few threats to validity below."),...(()=>{let On={encoding:{x:{field:"bin",type:"quantitative",scale:{type:"log"},title:"% difference in dependency set size, log scale"},y:{field:"count",type:"quantitative"},facet:{field:"krate",columns:5}},transform:[{filter:"datum.bin > 0 && datum.count > 0"}],mark:"bar",data:{values:Ae}};return[(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Are the results due to only a few crates?")),(0,e.createElement)("p",{},"If differences between techniques only arose in a small number of situations that happen to be in our dataset, then our technique would not be as generally applicable. To determine the variation between crates, we generated a histogram of non-zero differences for the ",(0,e.createElement)(a,{},"baseline")," vs. ",(0,e.createElement)(a,{},"mutblind")," comparison, broken down by crate in ",(0,e.createElement)(a,{},"fig_crates"),"."),null,(0,e.createElement)(Te,{name:"fig_crates"},(0,e.createElement)(yt,{spec:On,name:"graph"}),(0,e.createElement)(ve,{},"Distribution of non-zero differences between ",(0,e.createElement)(a,{},"baseline")," and ",(0,e.createElement)(a,{},"mutblind"),", broken down by crate.")),(0,e.createElement)("p",{},"As expected, the larger code bases (e.g. rav1e and RustPython) have more non-zero differences than smaller codebases ","\u2014"," in general the correlation between non-zero differences and total number of variables analyzed is strong, ",(0,e.createElement)(t,{},"R^2 = 0.79"),". However variation also exists for crates with roughly the same number of variables like ",(0,e.createElement)("code",{},"image")," and ",(0,e.createElement)("code",{},"hyper"),". ",(0,e.createElement)(a,{},"mutblind")," reduces precision for variables in ",(0,e.createElement)("code",{},"hyper")," more often than ",(0,e.createElement)("code",{},"image"),". A qualitative inspection of the respective codebases suggests this may be because ",(0,e.createElement)("code",{},"hyper")," simply makes greater use of immutable references in its API."),(0,e.createElement)("p",{},"These findings suggest that the impact of ownership types and the modular approximation likely do vary with code style, but a broader trend is still observable across all code.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Would ",(0,e.createElement)(a,{},"wholeprogram")," be more precise with access to dependencies?")),(0,e.createElement)("p",{},"A limitation of our whole-program analysis is our inability to access function definitions outside the current crate. Without this limitation, it may be that the ",(0,e.createElement)(a,{},"baseline")," analysis would be significantly worse than ",(0,e.createElement)(a,{},"wholeprogram"),". So for each variable analyzed by ",(0,e.createElement)(a,{},"wholeprogram"),", we additionally computed whether the information flow for that variable involved a function call across a crate boundary."),(0,e.createElement)("p",{},"Overall 96% of cases reached at least one crate boundary, suggesting that this limitation does occur quite often in practice. However, the impact of the limitation is less clear. Of the 96% of cases that hit a crate boundary, 6.6% had a non-zero difference between ",(0,e.createElement)(a,{},"baseline")," and ",(0,e.createElement)(a,{},"wholeprogram"),". Of the 4% that did not hit a crate boundary, 0.6% had a non-zero difference. One would expect that ",(0,e.createElement)(a,{},"wholeprogram")," would be the most precise when the whole program is available (no boundary), but instead it was much closer to ",(0,e.createElement)(a,{},"baseline"),"."),(0,e.createElement)("p",{},"Ultimately it is not clear how much more precise ",(0,e.createElement)(a,{},"wholeprogram")," would be given access to all a crate's dependencies, but it would not necessarily be a significant improvement over the benchmark presented.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},(0,e.createElement)("strong",{},"Is ownership actually important for precision?")),(0,e.createElement)("p",{},"The finding that ",(0,e.createElement)(a,{},"pointerblind")," only makes a difference in 17% of cases may seem surprisingly small. For instance, ",(0,e.createElement)(a,{full:!0},"shapiro1997effects"),' found in a empirical study of slices on C programs that "using a pointer analysis with an average points-to set size twice as large as a more precise pointer analysis led to an increase of about 70% in the size of ',"[","slices","]",'."'),(0,e.createElement)("p",{},"A limitation of our ablation is that the analyzed programs were written to satisfy Rust's ownership safety rules. Disabling lifetimes does not change the structure of the programs to become more C-like ","\u2014"," Rust generally encourages a code style with fewer aliases to avoid dealing with lifetimes. A fairer comparison would be to implement an application idiomatically in both Rust and Rust-but-without-feature-X, but such an evaluation is not practical. It is therefore likely that our results understate the true impact of ownership types on precision given this limitation."))),(0,e.createElement)(we,{name:"sec_applications"},"Applications"),(0,e.createElement)(Te,{name:"fig_apps"},(0,e.createElement)(Kt,{name:"slicer"},(0,e.createElement)("img",{src:"./static/slice-demo.png",width:"500px"}),(0,e.createElement)("img",{src:"./static/slice-demo-2.png",width:"500px"}),(0,e.createElement)(ve,{},(0,e.createElement)("p",{},"A program slicer integrated into VSCode. Above, the user selects a slicing criterion like the variable ",(0,e.createElement)("code",{},"f"),". Then the slicer highlights the criterion in green, and fades out lines that are not part of the backward slice on ",(0,e.createElement)("code",{},"f"),". For example, ",(0,e.createElement)("code",{},"write_all")," mutates the file so it is in the slice, while ",(0,e.createElement)("code",{},"metadata")," reads the file so it is not in the slice."),(0,e.createElement)("p",{},"Below, the user can manipulate aspects of a program such as commenting out code related to timing. The user computes a forward slice on ",(0,e.createElement)("code",{},"start"),", adds this slice to their selection (in blue), then tells the IDE to comments out all lines in the selection."))),(0,e.createElement)(Kt,{name:"ifc"},(0,e.createElement)("img",{src:"./static/ifc-demo.png",width:"500px"}),(0,e.createElement)("img",{src:"./static/ifc-demo-2.png",width:"500px"}),(0,e.createElement)(ve,{},"An IFC checker. Above, the ",(0,e.createElement)("code",{},"ifc_traits")," library exports a ",(0,e.createElement)("code",{},"Secure")," for users to mark sensitive data, like ",(0,e.createElement)("code",{},"Password"),", and insecure operations like ",(0,e.createElement)("code",{},"insecure_print"),". Below, a compiler plugin invoked on the program checks for information flows from data with a type implementing ",(0,e.createElement)("code",{},"Secure")," to insecure operations. Here ",(0,e.createElement)("code",{},"insecure_print")," is conditionally executed based on a read from ",(0,e.createElement)("code",{},"PASSWORD"),", so this flow is flagged.")),(0,e.createElement)(ve,{},"Two applications of information flow built using ",p,".")),(0,e.createElement)("p",{},"We have demonstrated that ownership can be leveraged to build an information flow analysis that is static, modular, sound, and precise. Our hope is that this analysis can serve as a building block for future static analyses. To bootstrap this future, we have used ",p," to implement prototypes of a program slicer and an IFC checker, shown in ",(0,e.createElement)(a,{},"fig_apps"),"."),(0,e.createElement)("p",{},"The program slicer in ",(0,e.createElement)(a,{},"fig_apps_slicer")," is a VSCode extension that fades out all lines of code that are not relevant to the user's selection, i.e. not part of the modular slice. Rather than present a slice of the entire program like in prior slicing tools, we can use Flowistry's modular analysis to present lightweight slices of just within a given function. Users can apply the slicer for comprehension tasks such as reducing the scope of a bug, or for refactoring tasks such as removing an aspect of a program like timing or logging."),(0,e.createElement)("p",{},"The IFC checker in ",(0,e.createElement)(a,{},"fig_apps_ifc")," is a Rust library and compiler plugin. It provides the user a library with the traits ",(0,e.createElement)("code",{},"Secure")," and ",(0,e.createElement)("code",{},"Insecure")," to indicate the relative security of data types and operations. Then the compiler plugin uses ",p," to determine whether information flows from ",(0,e.createElement)("code",{},"Insecure")," variables to ",(0,e.createElement)("code",{},"Secure")," variables. Users can apply the IFC checker to catch sensitive data leaks in an application. This prototype is purely intraprocedural, but future work could build an interprocedural analysis by using Flowistry's output as procedure summaries in a larger information flow graph."),(0,e.createElement)(we,{name:"sec_rw"},"Related Work"),(0,e.createElement)("p",{},"Our work draws on three core concepts: information flow, modular static analysis, and ownership types."),...(()=>{let le=cn=>(0,e.createElement)(a,{...cn,full:!0});return[null,(0,e.createElement)(ne,{},"Information Flow"),(0,e.createElement)("p",{},"Information flow has been historically studied in the context of security, such as ensuring low-security users of a program cannot infer anything about its high-security internals. Security-focused information flow analyses have been developed for Java ",(0,e.createElement)(a,{},"myers1999jflow"),", Javascript ",(0,e.createElement)(a,{},"austin2009efficient"),", OCaml ",(0,e.createElement)(a,{},"pottier2003information"),", Haskell ",(0,e.createElement)(a,{},"stefan2011flexible"),", and many other languages."),(0,e.createElement)("p",{},"Each analysis satisfies some, but not all, of our requirements from ",(0,e.createElement)(a,{},"sec_intro"),". For instance, the JFlow ",(0,e.createElement)(a,{},"myers1999jflow")," and Flow-Caml ",(0,e.createElement)(a,{},"pottier2003information")," languages required adding features to the base language, violating our second requirement. Some methods like that of ",(0,e.createElement)(le,{},"austin2009efficient")," for Javascript rely on dynamic analysis, violating our third requirement. And Haskell only supports effects like mutation through monads, violating our first requirement."),(0,e.createElement)("p",{},"Nonetheless, we draw significant inspiration from mechanisms in prior work. Our analysis resembles the slicing calculus of ",(0,e.createElement)(le,{},"abadi1999core"),". The use of lifetimes for modular analysis of functions is comparable to security annotations in Flow-Caml ",(0,e.createElement)(a,{},"pottier2003information"),". The CFG analysis draws on techniques used in program slicers, such as the LLVM dg slicer ",(0,e.createElement)(a,{},"llvmslicer"),"."),(0,e.createElement)(ne,{},"Modular Static Analysis"),(0,e.createElement)("p",{},`The key technique to making static analysis modular (or "compositional" or "separate") is symbolically summarizing a function's behavior, so that the summary can be used without the function's implementation. Starting from `,(0,e.createElement)(le,{},"rountev1999data")," and ",(0,e.createElement)(le,{},"cousot2002modular"),', one approach has been to design a system of "procedure summaries" understood by the static analyzer and distinct from the language being analyzed. This approach has been widely applied for static analysis of null pointer dereferences ',(0,e.createElement)(a,{},"yorsh2008generating"),", pointer aliases ",(0,e.createElement)(a,{},"dillig2011precise"),", data dependencies ",(0,e.createElement)(a,{},"tang2015summary"),", and other properties."),(0,e.createElement)("p",{},"Another approach, like ours, is to leverage the language's type system to summarize behavior. ",(0,e.createElement)(le,{},"tang1994separate")," showed that an effect system could be used for a modular control-flow analysis. Later work in Haskell used its powerful type system and monadic effects to embed many forms of information flow control into the language ",(0,e.createElement)(a,{},"li2006encoding"),(0,e.createElement)(a,{},"russo2008library"),(0,e.createElement)(a,{},"stefan2011flexible"),(0,e.createElement)(a,{},"buiras2015hlio"),"."),(0,e.createElement)(ne,{},"Ownership Types"),(0,e.createElement)("p",{},"Rust and Oxide's conceptions of ownership derive from ",(0,e.createElement)(le,{},"clarke1998ownership")," and ",(0,e.createElement)(le,{},"grossman2002region"),". For instance, the Cyclone language of Grossman et al. uses regions to restrict where a pointer can point-to, and uses region variables to express relationships between regions in a function's input and output types. A lifetime is similar in that it annotates the types of pointers, but differs in how it is analyzed."),(0,e.createElement)("p",{},"Recent works have demonstrated innovative applications of Rust's type system for modular program analysis. ",(0,e.createElement)(le,{},"astrauskas2019leveraging")," embed Rust programs into a separation logic to verify pre/post conditions about functions. ",(0,e.createElement)(le,{},"jung2020stacked")," use Rust's ownership-based guarantees to implement more aggressive program optimizations."),(0,e.createElement)("p",{},"Closer to our domain, ",(0,e.createElement)(le,{},"balasubramanian2017system")," implemented a prototype IFC system for Rust by lowering programs to LLVM and verifying them with SMACK ",(0,e.createElement)(a,{},"rakamaric2014smack"),", although their system is hard to contrast with ours given the high-level description in their paper. ",(0,e.createElement)(le,{},"njor2021static")," implemented a static taint analysis for Rust, although it is not field-sensitive, alias-sensitive, or modular."),(0,e.createElement)(we,{name:"sec_discussion"},"Discussion"),(0,e.createElement)("p",{},"Looking forward, two interesting avenues for future work on ",p," are improving its precision and addressing soundness in unsafe code. For instance, the lifetime-based pointer analysis is sound but imprecise in some respects. Lifetimes often lose information about part-whole relationships. Consider the function that returns a mutable pointer to a specific index in a vector:"),(0,e.createElement)(ge,{language:fe},`fn get_mut<'a>(&'a mut self, i: usize)
  -> Option<&'a mut T>;`),(0,e.createElement)("p",{},"These lifetimes indicate only that the return value points to ",(0,e.createElement)("em",{},"something")," in the input vector. The expressions ",(0,e.createElement)("code",{},"v.get_mut(i)")," and ",(0,e.createElement)("code",{},"v.get_mut(i + 1)")," are considered aliases even though they are not. Future work could integrate ",p," with verification tools like Prusti ",(0,e.createElement)(a,{},"astrauskas2019leveraging")," to use abstract interpretation for a more precise pointer analysis in such cases."),(0,e.createElement)("p",{},"Additionally, Rust has many libraries built on unsafe code that can lose annotations essential to information flow, such as interior mutability. For example, shared-memory concurrency in Rust looks like this:"),(0,e.createElement)(ge,{language:fe},`let n: Arc<Mutex<i32>> = Arc::new(Mutex::new(0));
let n2: Arc<Mutex<i32>> = Arc::clone(&n);
*n2.lock().unwrap() = 1;`),(0,e.createElement)("p",{},(0,e.createElement)("code",{},"Arc::clone")," does not share a lifetime between its input and output, so a lifetime-based pointer analysis therefore cannot deduce that ",(0,e.createElement)("code",{},"n2")," is an alias of ",(0,e.createElement)("code",{},"n"),", and ",p," would not recognize that the mutation on line 3 affects ",(0,e.createElement)("code",{},"n"),". Future work can explore how unsafe libraries could be annotated with the necessary metadata needed to analyze information flow, similar to how RustBelt ",(0,e.createElement)(a,{},"jung2017rustbelt")," identifies the pre/post-conditions needed to ensure type safety within unsafe code."),(0,e.createElement)("p",{},"Overall, we are excited by the possibilities created by having a practical information flow analysis that can run today on any Rust program. Many exciting systems for tasks like debugging ",(0,e.createElement)(a,{},"ko2004designing"),", example generation ",(0,e.createElement)(a,{},"head2018interactive"),", and program repair ",(0,e.createElement)(a,{},"wen2018context")," rely on information flow in some form, and we hope that ",p," can support the development of these tools."),(0,e.createElement)(Jn,{},"This work was partially supported by the Italian Ministry of Education through funding for the Rita Levi Montalcini grant (call of 2019)."),null,(0,e.createElement)(ra,{bibtex:ze})]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})()]})())});var{Document:la}=Ge,{Title:Oa}=Fe,ca={title:"Nota Gallery: PL Research Paper",className:"gallery",css:"index.css"},ua={"../../components/page-editor":{...Ot,__esModule:!0},"../../../gallery/infoflow-paper/index.nota":{..._t,__esModule:!0}},pa=`%%%
export let metadata = {
  title: "Nota Gallery: PL Research Paper",
  className: "gallery",
  css: "index.css"
};

import {PageEditor} from "../../components/page-editor";
import {imports as exampleImports, source as exampleSource} from "../../../gallery/infoflow-paper/index.nota";
%%%

@div[className: "base-style-block"]:
  @Title: PL Research Paper

  This document is a Nota-fied version of a programming languages research paper, "Modular Information Flow through Ownership" published at PLDI 2022. For comparison, you can read the LaTeX version on arXiv: <https://arxiv.org/abs/2111.13662>

  This example includes:
  * Academic paper structure (sections, subsections, figures, abstracts)
  * Math (inline TeX, block TeX, theorems, definitions)
  * Charts (Vega-Lite)

  You can view full source (including \`package.json\` and figures) [on Github](https://github.com/nota-lang/nota-lang.org/tree/main/gallery/infoflow-paper). You can view this example in a standalone page (without the editor) [at this link](standalone/).

@PageEditor[imports: exampleImports, contents: exampleSource]`,Ee=(0,an.observer)(function(u){return(0,M.createElement)(la,u,null,(0,M.createElement)("div",{className:"base-style-block"},(0,M.createElement)(Oa,{},"PL Research Paper"),(0,M.createElement)("p",{},'This document is a Nota-fied version of a programming languages research paper, "Modular Information Flow through Ownership" published at PLDI 2022. For comparison, you can read the LaTeX version on arXiv: ',(0,M.createElement)("a",{href:"https://arxiv.org/abs/2111.13662"},"https://arxiv.org/abs/2111.13662")),(0,M.createElement)("p",{},"This example includes:"),(0,M.createElement)("ul",{},(0,M.createElement)("li",{},(0,M.createElement)("p",{},"Academic paper structure (sections, subsections, figures, abstracts)")),(0,M.createElement)("li",{},(0,M.createElement)("p",{},"Math (inline TeX, block TeX, theorems, definitions)")),(0,M.createElement)("li",{},(0,M.createElement)("p",{},"Charts (Vega-Lite)"))),(0,M.createElement)("p",{},"You can view full source (including ",(0,M.createElement)("code",{},"package.json")," and figures) ",(0,M.createElement)("a",{href:"https://github.com/nota-lang/nota-lang.org/tree/main/gallery/infoflow-paper"},"on Github"),". You can view this example in a standalone page (without the editor) ",(0,M.createElement)("a",{href:"standalone/"},"at this link"),".")),(0,M.createElement)(lt,{imports:wt,contents:vt}))});var on="metadata",da=on in De?De[on]:{},ha=({onRender:r,...u})=>Re.default.createElement(Ct,{...u},Re.default.createElement("div",{id:"root"},Re.default.createElement(Ee,{onRender:r,renderTimeout:1e3}))),xt=document.documentElement;if(xt.classList.contains("ssr-env"))xt.classList.remove("ssr-env"),Xt.createRoot(xt).render(Re.default.createElement(ha,{...da,script:"./index.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let r=document.getElementById("root"),u=document.createElement("div");Xt.createRoot(u).render(Re.default.createElement(Ee,{onRender:()=>{r.parentNode.replaceChild(u,r)}}))}
