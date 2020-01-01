(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,l({ref:t},s,{components:n})):o.a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=(n(0),n(121));const a={id:"introduction",title:"Console: No effort, universal logger"},i={id:"console/introduction",title:"Console: No effort, universal logger",description:"`Console` is modelled after the browser console. It",source:"@site/../docs/console/introduction.md",permalink:"/docs/console/introduction",sidebar:"docs",previous:{title:"Advanced Topics - Rely",permalink:"/docs/rely/advanced"},next:{title:"Console Quickstart",permalink:"/docs/console/quickstart"}},l=[],c={rightToc:l},s="wrapper";function p({components:e,...t}){return Object(o.b)(s,Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Console")," is modelled after the browser console. It\ndoesn't require that you define any printers, and ",Object(o.b)("inlineCode",{parentName:"p"},"Console.log/warn/error"),"\naccept any type of input. Record fields and variant label names are lost at\ncompile time so they aren't printed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Suitable For Developers or Users:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Passing a single ",Object(o.b)("inlineCode",{parentName:"li"},"string")," (as in ",Object(o.b)("inlineCode",{parentName:"li"},'Console.log("hello")'),") will not print the\nquotes (just like in the browser)"),Object(o.b)("li",{parentName:"ul"},"Passing a deep structure will print the deep structure, and strings that\nappear in the deep structure will include quotes.")),Object(o.b)("p",null,"This makes ",Object(o.b)("inlineCode",{parentName:"p"},"Console")," suitable for either logging messages displayed to the\nuser in command line apps, but also suitable for messages intended only for\nthe developer to read."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"No Effort"),": Uses runtime checks to determine a likely appropriate printer\nfor your data without requiring any ppx plugins and without having to write\nprinters for your data types. Depth checking will prevent cyclical data from\nprinting infinitely."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Best effort"),": The basic data types are detected accurately at\nruntime(",Object(o.b)("inlineCode",{parentName:"p"},"string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"float"),", ",Object(o.b)("inlineCode",{parentName:"p"},"int"),")."),Object(o.b)("p",null,"Record labels and variant names are not preserved at compilation time so are\nnot printed - but their data is still printed in the correct order.\nRecords/variant types that occupy more than one word in a block are all\nprinted as their corresponding integer (if a payloadless variant), or ",Object(o.b)("inlineCode",{parentName:"p"},"{x, y,\n...z}")," for a record or variant that contains data."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'Console.log(Some("hi")); /* {"hi"} */\nConsole.log(None); /* 0 */\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Extensible"),": Allows customization of printing in order to change where the\nlogs are written to, how they are highlighted, and anything else you would\nlike."))}p.isMDXComponent=!0}}]);