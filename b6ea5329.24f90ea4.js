(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(121));const i={id:"quickstart",title:"File Context Printer Quickstart"},o={id:"file-context-printer/quickstart",title:"File Context Printer Quickstart",description:"> This quickstart builds off [Getting Started](../getting-started) and assumes you have a native Reason project set up.",source:"@site/../docs/file-context-printer/quickstart.md",permalink:"/docs/file-context-printer/quickstart",sidebar:"docs",previous:{title:"File Context Printer Introduction",permalink:"/docs/file-context-printer/introduction"},next:{title:"File Context Printer API",permalink:"/docs/file-context-printer/api"}},c=[{value:"Install Pastel",id:"install-pastel",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={rightToc:c},m="wrapper";function s({components:e,...t}){return Object(a.b)(m,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This quickstart builds off ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," and assumes you have a native Reason project set up.")),Object(a.b)("h2",{id:"install-pastel"},"Install Pastel"),Object(a.b)("p",null,"To install File Context Printer in your project with esy, run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"esy add @reason-native/file-context-printer\n")),Object(a.b)("p",null,"This will add ",Object(a.b)("inlineCode",{parentName:"p"},"@reason-native/file-context-printer")," into your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("p",null,"In order to use File Context Printer, you must add it to your build system. With dune, ",Object(a.b)("inlineCode",{parentName:"p"},"file-context-printer.lib")," must be added to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jbuilder.readthedocs.io/en/latest/dune-files.html#library-dependencies"}),"the relevant ",Object(a.b)("inlineCode",{parentName:"a"},"dune")," file"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lisp"}),"(libraries ... file-context-printer.lib)\n")),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("p",null,"Start by initializing a File Context Printer module:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"module FCP =\n  FileContextPrinter.Make({\n    let config =\n      FileContextPrinter.Config.initialize({linesBefore: 3, linesAfter: 3});\n  });\n")),Object(a.b)("p",null,"From there, extract and print file context like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'let start = (\n  7, /* start line */\n  1 /* start char */\n);\nlet end = (\n  7, /* start line */\n  11 /* start char */\n);\nFCP.printFile(\n  "src/file-context-printer/test/DummyFile.re",\n  (start, end),\n)\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),'\x1b[2m 4 \u2506 \x1b[22m\x1b[2m * \x1b[22m\x1b[34m\x1b[2mThis\x1b[22m\x1b[39m\x1b[2m source code is licensed under the \x1b...\n\x1b[2m 5 \u2506 \x1b[22m\x1b[2m * \x1b[22m\x1b[34m\x1b[2mLICENSE\x1b[22m\x1b[39m\x1b[2m file in the root directory of ...\n\x1b[2m 6 \u2506 \x1b[22m\x1b[2m */;\x1b[22m\n\x1b[31m\x1b[2m 7 \u2506 \x1b[22m\x1b[39m\x1b[31m\x1b[1m\x1b[4mlet myFunc\x1b[24m\x1b[22m\x1b[39m\x1b[2mtion = ()\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2mprint_endline(\x1b[22m\x1b[32m\x1b[2m"do something"\x1b[22m\x1b[39m\x1b[2m);\x1b[22m\n\x1b[2m 8 \u2506 \x1b[22m\n\x1b[2m 9 \u2506 \x1b[22m\x1b[35m\x1b[2mlet\x1b[22m\x1b[39m\x1b[2m ex = (arg)\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2m{\x1b[22m\n\x1b[2m10 \u2506 \x1b[22m\x1b[2m    \x1b[22m\x1b[33m\x1b[2mif\x1b[22m\x1b[39m\x1b[2m(arg === true) {\x1b[22m\n')))}s.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,d=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(d,c({ref:t},m,{components:n})):a.a.createElement(d,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);