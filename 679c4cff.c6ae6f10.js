(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=(a(0),a(121));const o={id:"native-basics",title:"Native Reason Basics"},i={id:"native-basics",title:"Native Reason Basics",description:"## Relation to OCaml",source:"@site/../docs/native-basics.md",permalink:"/docs/native-basics",sidebar:"docs",previous:{title:"Reason Native",permalink:"/docs/introduction"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},c=[{value:"Relation to OCaml",id:"relation-to-ocaml",children:[]},{value:"Native Reason vs Reason Native",id:"native-reason-vs-reason-native",children:[]},{value:"Dune",id:"dune",children:[]}],s={rightToc:c},l="wrapper";function p({components:e,...t}){return Object(r.b)(l,Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"relation-to-ocaml"},"Relation to OCaml"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reasonml.github.io/docs/en/what-and-why"}),"ReasonML What and Why")," page provides a good description for what ReasonML is:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Reason is not a new language; it's a new syntax and toolchain powered by the battle-tested language, OCaml. Reason gives OCaml a familiar syntax geared toward JavaScript programmers, and caters to the existing NPM/Yarn workflow folks already know.")),Object(r.b)("p",null,"What this effectively means is that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reason projects ",Object(r.b)("strong",{parentName:"li"},"are")," OCaml projects"),Object(r.b)("li",{parentName:"ul"},"Reason code ",Object(r.b)("strong",{parentName:"li"},"is")," OCaml code"),Object(r.b)("li",{parentName:"ul"},"Projects are free to harness the power of the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://opam.ocaml.org/packages/"}),"OCaml ecosystem"),".")),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/esy-ocaml/hello-reason.git"}),"hello-reason")," starter described in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./getting-started"}),"Getting Started")," is based off of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dune.build"}),"Dune"),", an OCaml/Reason build system used by ~40% of the OCaml community."),Object(r.b)("h2",{id:"native-reason-vs-reason-native"},"Native Reason vs Reason Native"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reason Native")," is a set of packages designed to assist development of native Reason projects."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Native Reason")," projects are Reason projects that target native system binaries. We say native Reason projects because Reason can also be compiled to JavaScript through ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://bucklescript.github.io/"}),"BuckleScript"),"."),Object(r.b)("p",null,"If you are new to Reason and would like to learn more about the language, please visit the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reasonml.github.io/docs/en/what-and-why"}),"ReasonML Docs"),"."),Object(r.b)("h2",{id:"dune"},"Dune"),Object(r.b)("p",null,"Dune is the primary build system used by native Reason projects, and is system of choice used throughout this documentation website. If you are unfamiliar with dune, we highly recommend reading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dune.readthedocs.io/en/latest/overview.html"}),"Dune Overview"),"."))}p.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,c({ref:t},l,{components:a})):r.a.createElement(m,c({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);