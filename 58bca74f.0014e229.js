(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return p}));var r=t(1),i=(t(0),t(121));const o={id:"api",title:"File Context Printer API"},m={id:"file-context-printer/api",title:"File Context Printer API",description:"> Prefer reading code? Check out [FileContextPrinter.rei](https://github.com/facebookexperimental/reason-native/blob/master/src/file-context-printer/FileContextPrinter.rei)",source:"@site/../docs/file-context-printer/api.md",permalink:"/reason-native/docs/file-context-printer/api",sidebar:"docs",previous:{title:"File Context Printer Quickstart",permalink:"/reason-native/docs/file-context-printer/quickstart"}},a=[{value:"Configuration Options",id:"configuration-options",children:[{value:"<code>linesBefore</code>",id:"linesbefore",children:[]},{value:"<code>linesAfter</code>",id:"linesafter",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>printFile</code>",id:"printfile",children:[]},{value:"<code>print</code>",id:"print",children:[]}]}],c={rightToc:a},l="wrapper";function p({components:e,...n}){return Object(i.b)(l,Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Prefer reading code? Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/reason-native/blob/master/src/file-context-printer/FileContextPrinter.rei"}),"FileContextPrinter.rei"))),Object(i.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(i.b)("h3",{id:"linesbefore"},Object(i.b)("inlineCode",{parentName:"h3"},"linesBefore")),Object(i.b)("p",null,"Lines of code to show before specified context.\nFrom there, extract and print file context like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'module FCP =\n  FileContextPrinter.Make({\n    let config =\n      FileContextPrinter.Config.initialize({linesBefore: 1, linesAfter: 3});\n  });\nFCP.printFile(\n  "src/file-context-printer/test/DummyFile.re",\n  ((7, 1), (7, 11)),\n)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),'\x1b[2m 6 \u2506 \x1b[22m\x1b[2m */;\x1b[22m\n\x1b[31m\x1b[2m 7 \u2506 \x1b[22m\x1b[39m\x1b[31m\x1b[1m\x1b[4mlet myFunc\x1b[24m\x1b[22m\x1b[39m\x1b[2mtion = ()\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2mprint_endline(\x1b[22m\x1b[32m\x1b[2m"do something"\x1b[22m\x1b[39m\x1b[2m);\x1b[22m\n\x1b[2m 8 \u2506 \x1b[22m\n\x1b[2m 9 \u2506 \x1b[22m\x1b[35m\x1b[2mlet\x1b[22m\x1b[39m\x1b[2m ex = (arg)\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2m{\x1b[22m\n\x1b[2m10 \u2506 \x1b[22m\x1b[2m    \x1b[22m\x1b[33m\x1b[2mif\x1b[22m\x1b[39m\x1b[2m(arg === true) {\x1b[22m\n')),Object(i.b)("h3",{id:"linesafter"},Object(i.b)("inlineCode",{parentName:"h3"},"linesAfter")),Object(i.b)("p",null,"Lines of code to show before specified context.\nFrom there, extract and print file context like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'module FCP =\n  FileContextPrinter.Make({\n    let config =\n      FileContextPrinter.Config.initialize({linesBefore: 3, linesAfter: 1});\n  });\nFCP.printFile(\n  "src/file-context-printer/test/DummyFile.re",\n  ((7, 1), (7, 11)),\n)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),'\x1b[2m 4 \u2506 \x1b[22m\x1b[2m * \x1b[22m\x1b[34m\x1b[2mThis\x1b[22m\x1b[39m\x1b[2m source code is licensed under the \x1b...\n\x1b[2m 5 \u2506 \x1b[22m\x1b[2m * \x1b[22m\x1b[34m\x1b[2mLICENSE\x1b[22m\x1b[39m\x1b[2m file in the root directory of ...\n\x1b[2m 6 \u2506 \x1b[22m\x1b[2m */;\x1b[22m\n\x1b[31m\x1b[2m 7 \u2506 \x1b[22m\x1b[39m\x1b[31m\x1b[1m\x1b[4mlet myFunc\x1b[24m\x1b[22m\x1b[39m\x1b[2mtion = ()\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2mprint_endline(\x1b[22m\x1b[32m\x1b[2m"do something"\x1b[22m\x1b[39m\x1b[2m);\x1b[22m\n\x1b[2m 8 \u2506 \x1b[22m\n')),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"printfile"},Object(i.b)("inlineCode",{parentName:"h3"},"printFile")),Object(i.b)("p",null,"Prints context from a file."),Object(i.b)("p",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"let printFile: (~path: string, ~highlight: rowColumnRange) => option(string);\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'FCP.printFile(\n  "src/file-context-printer/test/DummyFile.re",\n  ((7, 1), (7, 11)),\n)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),'\x1b[2m 6 \u2506 \x1b[22m\x1b[2m */;\x1b[22m\n\x1b[31m\x1b[2m 7 \u2506 \x1b[22m\x1b[39m\x1b[31m\x1b[1m\x1b[4mlet myFunc\x1b[24m\x1b[22m\x1b[39m\x1b[2mtion = ()\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2mprint_endline(\x1b[22m\x1b[32m\x1b[2m"do something"\x1b[22m\x1b[39m\x1b[2m);\x1b[22m\n\x1b[2m 8 \u2506 \x1b[22m\n')),Object(i.b)("h3",{id:"print"},Object(i.b)("inlineCode",{parentName:"h3"},"print")),Object(i.b)("p",null,"Prints context from a list of lines."),Object(i.b)("p",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"let print: (list(string), ~highlight: rowColumnRange) => string;\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'FCP.print(\n  [\n    "/**",\n    " * Copyright (c) Facebook, Inc. and its affiliates."\n    " *",\n    " * This source code is licensed under the MIT license found in the",\n    " * LICENSE file in the root directory of this source tree.",\n    " */;",\n    "let myFunction = () => print_endline(\\"do something\\");",\n    "",\n    "let ex = (arg) => {",\n    "  if(arg === true) {",\n    "    print_endline(\\"raising an error\\");",\n    "    raise(Not_found);",\n    "  }",\n    "}",\n  ],\n  ((7, 1), (7, 11)),\n)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),'\x1b[2m 6 \u2506 \x1b[22m\x1b[2m */;\x1b[22m\n\x1b[31m\x1b[2m 7 \u2506 \x1b[22m\x1b[39m\x1b[31m\x1b[1m\x1b[4mlet myFunc\x1b[24m\x1b[22m\x1b[39m\x1b[2mtion = ()\x1b[22m\x1b[31m\x1b[2m => \x1b[22m\x1b[39m\x1b[2mprint_endline(\x1b[22m\x1b[32m\x1b[2m"do something"\x1b[22m\x1b[39m\x1b[2m);\x1b[22m\n\x1b[2m 8 \u2506 \x1b[22m\n')))}p.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},s=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,d=s["".concat(m,".").concat(b)]||s[b]||u[b]||o;return t?i.a.createElement(d,a({ref:n},l,{components:t})):i.a.createElement(d,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,m=new Array(o);m[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[b]="string"==typeof e?e:r,m[1]=a;for(var l=2;l<o;l++)m[l]=t[l];return i.a.createElement.apply(null,m)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);