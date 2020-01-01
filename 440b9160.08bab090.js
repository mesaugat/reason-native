(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),l=n,d=p["".concat(m,".").concat(l)]||p[l]||f[l]||a;return r?o.a.createElement(d,i({ref:t},s,{components:r})):o.a.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,m=new Array(a);m[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:n,m[1]=i;for(var s=2;s<a;s++)m[s]=r[s];return o.a.createElement.apply(null,m)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return m})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1),o=(r(0),r(121));const a={id:"introduction",title:"Refmterr Introduction"},m={id:"refmterr/introduction",title:"Refmterr Introduction",description:"Refmterr is an error formatter for Reason and OCaml builds. It takes raw error output from both the Reason and OCaml compilers and converts it to pretty output like so:",source:"@site/../docs/refmterr/introduction.md",permalink:"/docs/refmterr/introduction",sidebar:"docs",previous:{title:"Pastel Console",permalink:"/docs/pastel/console"},next:{title:"Refmterr Quickstart",permalink:"/docs/refmterr/quickstart"}},i=[],c={rightToc:i},s="wrapper";function u({components:e,...t}){return Object(o.b)(s,Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Refmterr is an error formatter for Reason and OCaml builds. It takes raw error output from both the Reason and OCaml compilers and converts it to pretty output like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-perl"}),'## Before ##\n\nFile "type_AppliedTooMany_3.ml", line 11, characters 5-30:\x1b\nError: The function applied to this argument has type\x1b\n         customLogOutputProcessors:(string -> string) list ->\x1b\n         customErrorParsers:(string * string list) list -> unit\x1b\nThis argument cannot be applied with label ~raiseExceptionDuringParse\x1b\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh-stacked"})," ## After ##\n\n\x1b[31m\x1b[1m\x1b[7m ERROR \x1b[27m\x1b[22m\x1b[39m \x1b[36m\x1b[4mtype_AppliedTooMany_3.ml\x1b[24m\x1b[39m\x1b[2m\x1b[4m:11 5-30\x1b[24m\x1b[22m\n\n\x1b[2m 8 \u2506 \x1b[22m\x1b[35m\x1b[2mlet\x1b[22m\x1b[39m\x1b[2m _ =\x1b[22m\n\x1b[2m 9 \u2506 \x1b[22m\x1b[2m  parseFromStdin\x1b[22m\n\x1b[2m10 \u2506 \x1b[22m\x1b[2m    \x1b[22m\x1b[33m\x1b[2m~refmttypePath\x1b[22m\x1b[39m\n\x1b[31m\x1b[2m11 \u2506 \x1b[22m\x1b[39m\x1b[2m    ~\x1b[22m\x1b[31m\x1b[1m\x1b[4mraiseExceptionDuringParse\x1b[24m\x1b[22m\x1b[39m\x1b[2m=true\x1b[22m\n\x1b[2m12 \u2506 \x1b[22m\x1b[2m    \x1b[22m\x1b[33m\x1b[2m~customLogOutputProcessors\x1b[22m\x1b[39m\x1b[2m=[]\x1b[22m\n\x1b[2m13 \u2506 \x1b[22m\x1b[2m    \x1b[22m\x1b[33m\x1b[2m~customErrorParsers\x1b[22m\x1b[39m\x1b[2m:[]\x1b[22m\n\nThe function has type (\n  ~customLogOutputProcessors: list(string => string),\n  ~customErrorParsers: list((string, list(string)))\n) =>\nunit\n\nThis function doesn't accept an argument named ~raiseExceptionDuringParse.\n")))}u.isMDXComponent=!0}}]);