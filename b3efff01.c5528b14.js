(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(122)),i={id:"quickstart",title:"Refmterr Quickstart",sidebar_label:"Quickstart"},c={id:"refmterr/quickstart",title:"Refmterr Quickstart",description:"> This quickstart builds off [Getting Started](../getting-started) and assumes you have a native Reason project set up.",source:"@site/../docs/refmterr/quickstart.md",permalink:"/reason-native/docs/refmterr/quickstart",sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"Refmterr Introduction",permalink:"/reason-native/docs/refmterr/introduction"},next:{title:"File Context Printer Introduction",permalink:"/reason-native/docs/file-context-printer/introduction"}},l=[{value:"Install Refmterr",id:"install-refmterr",children:[]},{value:"Add to Build Pipeline",id:"add-to-build-pipeline",children:[]},{value:"Command line usage",id:"command-line-usage",children:[]}],u={rightToc:l},s="wrapper";function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This quickstart builds off ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," and assumes you have a native Reason project set up.")),Object(o.b)("h2",{id:"install-refmterr"},"Install Refmterr"),Object(o.b)("p",null,"To install Refmterr in your project with esy, run"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"esy add refmterr\n")),Object(o.b)("p",null,"This will add ",Object(o.b)("inlineCode",{parentName:"p"},"refmterr")," into your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h2",{id:"add-to-build-pipeline"},"Add to Build Pipeline"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is already done for you if you followed ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started"),"!")),Object(o.b)("p",null,"In order to use Pastel, you must add it to your build pipeline. With dune, this is easily done by adding it to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," build command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "esy": {\n    "build":  "refmterr dune build",\n    // ...\n  },\n  // ...\n}\n')),Object(o.b)("h2",{id:"command-line-usage"},"Command line usage"),Object(o.b)("p",null,"You can wrap any command that outputs ocamlopt/ocamlc error messages. For example, from your sandboxed project with the above package.json, you could run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"esy refmterr ocamlopt -pp refmt someFile.re\n")),Object(o.b)("p",null,"and have any errors/warnings printed more readably."))}p.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c({ref:t},u,{components:r})):a.a.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);