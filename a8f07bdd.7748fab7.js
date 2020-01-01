(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),o=(t(0),t(121));const a={id:"quickstart",title:"Console Quickstart"},c={id:"console/quickstart",title:"Console Quickstart",description:"> This quickstart builds off [Getting Started](../getting-started) and assumes you have a native Reason project set up.",source:"@site/../docs/console/quickstart.md",permalink:"/reason-native/docs/console/quickstart",sidebar:"docs",previous:{title:"Console: No effort, universal logger",permalink:"/reason-native/docs/console/introduction"},next:{title:"Console API",permalink:"/reason-native/docs/console/api"}},l=[{value:"Install Console",id:"install-console",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={rightToc:l},s="wrapper";function u({components:e,...n}){return Object(o.b)(s,Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This quickstart builds off ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," and assumes you have a native Reason project set up.")),Object(o.b)("h2",{id:"install-console"},"Install Console"),Object(o.b)("p",null,"To install Console in your project with esy, run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"esy add @reason-native/console\n")),Object(o.b)("p",null,"This will add ",Object(o.b)("inlineCode",{parentName:"p"},"@reason-native/console")," into your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("p",null,"In order to use Pastel, you must add it to your build system. With dune, ",Object(o.b)("inlineCode",{parentName:"p"},"console.lib")," must be added to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jbuilder.readthedocs.io/en/latest/dune-files.html#library-dependencies"}),"the relevant ",Object(o.b)("inlineCode",{parentName:"a"},"dune")," file"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lisp"}),"(libraries ... console.lib)\n")),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("p",null,"Go ahead and ",Object(o.b)("inlineCode",{parentName:"p"},"Console.log")," anything you like! Check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./api"}),"API documentation")," for all available methods."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'Console.log((1, (2, 3)));\nConsole.log(2.3323);\n\nConsole.warn("\\nI\'m in stderr");\nConsole.error(Some(5));\nConsole.warn(() => {/* anonymous function */});\n\nConsole.log("\\nI can be meta too:");\nConsole.debug(Console.debug);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh-stacked"}),"{1, {2, 3}}\n2.3323\n\nI'm in stderr\n{5}\nclosure(2257708960)\n\nI can be meta too:\nclosure(2256368436)\n")))}u.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(m,l({ref:n},s,{components:t})):o.a.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[b]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);