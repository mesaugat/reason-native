(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(122),c=a(123),o=a(42),i=a(127),s=a(124),m=a.n(s),u=a(126),d=a(90),p=a.n(d);const f=24;function b({item:e,onItemClick:t,collapsible:a}){const{items:l,href:c,label:o,type:i}=e,[s,d]=Object(n.useState)(e.collapsed),[p,f]=Object(n.useState)(null);e.collapsed!==p&&(f(e.collapsed),d(e.collapsed));const h=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return l.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":s}),key:o},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?h:void 0},o),r.a.createElement("ul",{className:"menu__list"},l.map(e=>r.a.createElement(b,{key:e.label,item:e,onItemClick:t,collapsible:a}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:c,onClick:t},o))}}var h=function(e){const[t,a]=Object(n.useState)(!1),{docsSidebars:l,location:c,sidebar:o,sidebarCollapsible:i}=e;if(!o)return null;const s=l[o];if(!s)throw new Error(`Cannot find the sidebar "${o}" in the sidebar config!`);return i&&s.forEach(e=>(function e(t,a){const{items:n,href:r,type:l}=t;switch(l){case"category":{const r=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===a.pathname.replace(/\/$/,"")}})(e,c)),r.a.createElement("div",{className:p.a.sidebar},r.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?r.a.createElement("span",{className:m()(p.a.sidebarMenuIcon,p.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:p.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:f,width:f,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},s.map(e=>r.a.createElement(b,{key:e.label,item:e,onItemClick:()=>{a(!1)},collapsible:i})))))},E=a(1),y=a(134);a(92);var v=e=>({id:t,...a})=>t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a),g=a(93),O=a.n(g),k={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(y.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(u.a,e),pre:e=>r.a.createElement("pre",Object(E.a)({className:O.a.mdxCodeBlock},e)),h1:v("h1"),h2:v("h2"),h3:v("h3"),h4:v("h4"),h5:v("h5"),h6:v("h6")},w=a(133),N=a(17),j=a(94),C=a.n(j);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,{permalinkToSidebar:s,docsSidebars:m,version:u}=a,d=s[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:p={}}={}}=Object(c.a)(),{sidebarCollapsible:f=!0}=p;return b=t.routes,E=n.pathname,b.some(e=>Object(N.c)(E,e))?r.a.createElement(i.a,{version:u},r.a.createElement("div",{className:C.a.docPage},d&&r.a.createElement("div",{className:C.a.docSidebarContainer},r.a.createElement(h,{docsSidebars:m,location:n,sidebar:d,sidebarCollapsible:f})),r.a.createElement("main",{className:C.a.docMainContainer},r.a.createElement(l.a,{components:k},Object(o.a)(t.routes))))):r.a.createElement(w.default,e);var b,E}},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(f,o({ref:t},s,{components:a})):r.a.createElement(f,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(127);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);