import{C as ve,D as pe,a as Ie,b as T,c as fe,e as Le,f as Fe,g as Ge,p as Ne,x as ce,y as de}from"./chunk-ILER3WEO.mjs";var He={};Ie(He,{PageEditor:()=>ke});var y=T(fe());var re=T(fe()),l=T(Ne());var z=typeof window<"u"?window:null,Q=z===null,k=Q?void 0:z.document,x="addEventListener",w="removeEventListener",K="getBoundingClientRect",B="_a",E="_b",_="_c",q="horizontal",D=function(){return!1},Te=Q?"calc":["","-webkit-","-moz-","-o-"].filter(function(a){var n=k.createElement("div");return n.style.cssText="width:"+a+"calc(9px)",!!n.style.length}).shift()+"calc",ge=function(a){return typeof a=="string"||a instanceof String},me=function(a){if(ge(a)){var n=k.querySelector(a);if(!n)throw new Error("Selector "+a+" did not match a DOM element");return n}return a},p=function(a,n,o){var s=a[n];return s!==void 0?s:o},J=function(a,n,o,s){if(n){if(s==="end")return 0;if(s==="center")return a/2}else if(o){if(s==="start")return 0;if(s==="center")return a/2}return a},We=function(a,n){var o=k.createElement("div");return o.className="gutter gutter-"+n,o},je=function(a,n,o){var s={};return ge(n)?s[a]=n:s[a]=Te+"("+n+"% - "+o+"px)",s},Ce=function(a,n){var o;return o={},o[a]=n+"px",o},Pe=function(a,n){if(n===void 0&&(n={}),Q)return{};var o=a,s,u,m,d,b,f;Array.from&&(o=Array.from(o));var M=me(o[0]),A=M.parentNode,U=getComputedStyle?getComputedStyle(A):null,H=U?U.flexDirection:null,W=p(n,"sizes")||o.map(function(){return 100/o.length}),j=p(n,"minSize",100),O=Array.isArray(j)?j:o.map(function(){return j}),I=p(n,"maxSize",1/0),C=Array.isArray(I)?I:o.map(function(){return I}),g=p(n,"expandToMin",!1),h=p(n,"gutterSize",10),G=p(n,"gutterAlign","center"),X=p(n,"snapOffset",30),be=Array.isArray(X)?X:o.map(function(){return X}),Y=p(n,"dragInterval",1),N=p(n,"direction",q),Z=p(n,"cursor",N===q?"col-resize":"row-resize"),Oe=p(n,"gutter",We),ie=p(n,"elementStyle",je),xe=p(n,"gutterStyle",Ce);N===q?(s="width",u="clientX",m="left",d="right",b="clientWidth"):N==="vertical"&&(s="height",u="clientY",m="top",d="bottom",b="clientHeight");function P(r,e,t,i){var v=ie(s,e,t,i);Object.keys(v).forEach(function(c){r.style[c]=v[c]})}function we(r,e,t){var i=xe(s,e,t);Object.keys(i).forEach(function(v){r.style[v]=i[v]})}function R(){return f.map(function(r){return r.size})}function ae(r){return"touches"in r?r.touches[0][u]:r[u]}function se(r){var e=f[this.a],t=f[this.b],i=e.size+t.size;e.size=r/this.size*i,t.size=i-r/this.size*i,P(e.element,e.size,this[E],e.i),P(t.element,t.size,this[_],t.i)}function Ee(r){var e,t=f[this.a],i=f[this.b];!this.dragging||(e=ae(r)-this.start+(this[E]-this.dragOffset),Y>1&&(e=Math.round(e/Y)*Y),e<=t.minSize+t.snapOffset+this[E]?e=t.minSize+this[E]:e>=this.size-(i.minSize+i.snapOffset+this[_])&&(e=this.size-(i.minSize+this[_])),e>=t.maxSize-t.snapOffset+this[E]?e=t.maxSize+this[E]:e<=this.size-(i.maxSize-i.snapOffset+this[_])&&(e=this.size-(i.maxSize+this[_])),se.call(this,e),p(n,"onDrag",D)(R()))}function oe(){var r=f[this.a].element,e=f[this.b].element,t=r[K](),i=e[K]();this.size=t[s]+i[s]+this[E]+this[_],this.start=t[m],this.end=t[d]}function De(r){if(!getComputedStyle)return null;var e=getComputedStyle(r);if(!e)return null;var t=r[b];return t===0?null:(N===q?t-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight):t-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),t)}function ue(r){var e=De(A);if(e===null||O.reduce(function(c,S){return c+S},0)>e)return r;var t=0,i=[],v=r.map(function(c,S){var F=e*c/100,$=J(h,S===0,S===r.length-1,G),V=O[S]+$;return F<V?(t+=V-F,i.push(0),V):(i.push(F-V),F)});return t===0?r:v.map(function(c,S){var F=c;if(t>0&&i[S]-t>0){var $=Math.min(t,i[S]-t);t-=$,F=c-$}return F/e*100})}function Ae(){var r=this,e=f[r.a].element,t=f[r.b].element;r.dragging&&p(n,"onDragEnd",D)(R()),r.dragging=!1,z[w]("mouseup",r.stop),z[w]("touchend",r.stop),z[w]("touchcancel",r.stop),z[w]("mousemove",r.move),z[w]("touchmove",r.move),r.stop=null,r.move=null,e[w]("selectstart",D),e[w]("dragstart",D),t[w]("selectstart",D),t[w]("dragstart",D),e.style.userSelect="",e.style.webkitUserSelect="",e.style.MozUserSelect="",e.style.pointerEvents="",t.style.userSelect="",t.style.webkitUserSelect="",t.style.MozUserSelect="",t.style.pointerEvents="",r.gutter.style.cursor="",r.parent.style.cursor="",k.body.style.cursor=""}function Me(r){if(!("button"in r&&r.button!==0)){var e=this,t=f[e.a].element,i=f[e.b].element;e.dragging||p(n,"onDragStart",D)(R()),r.preventDefault(),e.dragging=!0,e.move=Ee.bind(e),e.stop=Ae.bind(e),z[x]("mouseup",e.stop),z[x]("touchend",e.stop),z[x]("touchcancel",e.stop),z[x]("mousemove",e.move),z[x]("touchmove",e.move),t[x]("selectstart",D),t[x]("dragstart",D),i[x]("selectstart",D),i[x]("dragstart",D),t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.MozUserSelect="none",t.style.pointerEvents="none",i.style.userSelect="none",i.style.webkitUserSelect="none",i.style.MozUserSelect="none",i.style.pointerEvents="none",e.gutter.style.cursor=Z,e.parent.style.cursor=Z,k.body.style.cursor=Z,oe.call(e),e.dragOffset=ae(r)-e.end}}W=ue(W);var L=[];f=o.map(function(r,e){var t={element:me(r),size:W[e],minSize:O[e],maxSize:C[e],snapOffset:be[e],i:e},i;if(e>0&&(i={a:e-1,b:e,dragging:!1,direction:N,parent:A},i[E]=J(h,e-1===0,!1,G),i[_]=J(h,!1,e===o.length-1,G),H==="row-reverse"||H==="column-reverse")){var v=i.a;i.a=i.b,i.b=v}if(e>0){var c=Oe(e,N,t.element);we(c,h,e),i[B]=Me.bind(i),c[x]("mousedown",i[B]),c[x]("touchstart",i[B]),A.insertBefore(c,t.element),i.gutter=c}return P(t.element,t.size,J(h,e===0,e===o.length-1,G),e),e>0&&L.push(i),t});function le(r){var e=r.i===L.length,t=e?L[r.i-1]:L[r.i];oe.call(t);var i=e?t.size-r.minSize-t[_]:r.minSize+t[E];se.call(t,i)}f.forEach(function(r){var e=r.element[K]()[s];e<r.minSize&&(g?le(r):r.minSize=e)});function _e(r){var e=ue(r);e.forEach(function(t,i){if(i>0){var v=L[i-1],c=f[v.a],S=f[v.b];c.size=e[i-1],S.size=t,P(c.element,c.size,v[E],c.i),P(S.element,S.size,v[_],S.i)}})}function Ue(r,e){L.forEach(function(t){if(e!==!0?t.parent.removeChild(t.gutter):(t.gutter[w]("mousedown",t[B]),t.gutter[w]("touchstart",t[B])),r!==!0){var i=ie(s,t.a.size,t[E]);Object.keys(i).forEach(function(v){f[t.a].element.style[v]="",f[t.b].element.style[v]=""})}})}return{setSizes:_e,getSizes:R,collapse:function(e){le(f[e])},destroy:Ue,parent:A,pairs:L}},ee=Pe;function te(a,n){var o={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&n.indexOf(s)===-1&&(o[s]=a[s]);return o}var ne=function(a){function n(){a.apply(this,arguments)}return a&&(n.__proto__=a),n.prototype=Object.create(a&&a.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var s=this.props;s.children;var u=s.gutter,m=te(s,["children","gutter"]),d=m;d.gutter=function(b,f){var M;return u?M=u(b,f):(M=document.createElement("div"),M.className="gutter gutter-"+f),M.__isSplitGutter=!0,M},this.split=ee(this.parent.children,d)},n.prototype.componentDidUpdate=function(s){var u=this,m=this.props;m.children;var d=m.minSize,b=m.sizes,f=m.collapsed,M=te(m,["children","minSize","sizes","collapsed"]),A=M,U=s.minSize,H=s.sizes,W=s.collapsed,j=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],O=j.map(function(g){return u.props[g]!==s[g]}).reduce(function(g,h){return g||h},!1);if(Array.isArray(d)&&Array.isArray(U)){var I=!1;d.forEach(function(g,h){I=I||g!==U[h]}),O=O||I}else Array.isArray(d)||Array.isArray(U)?O=!0:O=O||d!==U;if(O)A.minSize=d,A.sizes=b||this.split.getSizes(),this.split.destroy(!0,!0),A.gutter=function(g,h,G){return G.previousSibling},this.split=ee(Array.from(this.parent.children).filter(function(g){return!g.__isSplitGutter}),A);else if(b){var C=!1;b.forEach(function(g,h){C=C||g!==H[h]}),C&&this.split.setSizes(this.props.sizes)}Number.isInteger(f)&&(f!==W||O)&&this.split.collapse(f)},n.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},n.prototype.render=function(){var s=this,u=this.props;u.sizes,u.minSize,u.maxSize,u.expandToMin,u.gutterSize,u.gutterAlign,u.snapOffset,u.dragInterval,u.direction,u.cursor,u.gutter,u.elementStyle,u.gutterStyle,u.onDrag,u.onDragStart,u.onDragEnd,u.collapsed;var m=u.children,d=te(u,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),b=d;return re.default.createElement("div",Object.assign({},{ref:function(f){s.parent=f}},b),m)},n}(re.default.Component);ne.propTypes={sizes:l.default.arrayOf(l.default.number),minSize:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),maxSize:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),expandToMin:l.default.bool,gutterSize:l.default.number,gutterAlign:l.default.string,snapOffset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),dragInterval:l.default.number,direction:l.default.string,cursor:l.default.string,gutter:l.default.func,elementStyle:l.default.func,gutterStyle:l.default.func,onDrag:l.default.func,onDragStart:l.default.func,onDragEnd:l.default.func,collapsed:l.default.number,children:l.default.arrayOf(l.default.element)};ne.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};var Se=ne;var he=T(Ge()),ze=T(Fe()),ye=T(Le()),Be=()=>{let[a,n]=(0,y.useState)([window.innerWidth,window.innerHeight]);return(0,y.useEffect)(()=>{let o=he.default.debounce(()=>{n([window.innerWidth,window.innerHeight])},300);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),a},ke=(0,ye.observer)(({contents:a,imports:n})=>{let[o,s]=Be(),[u]=(0,y.useState)(()=>new de({contents:a,imports:n})),d=o<800?"vertical":"horizontal";return y.default.createElement(pe.Provider,{value:u},y.default.createElement("div",{className:"page-editor"},y.default.createElement(Se,{className:(0,ze.default)("split",d),direction:d},y.default.createElement("div",null,y.default.createElement(ve,{result:u.translation})),y.default.createElement(ce,null))))});export{ke as a,He as b};