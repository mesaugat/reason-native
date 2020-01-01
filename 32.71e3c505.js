/*! For license information please see 32.71e3c505.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{124:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},127:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(126),c=a(122),o=a(123),m=a(128),s=a(130);a(86);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:u},url:E}=t,{children:f,title:b,noFooter:d,description:g,image:h,keywords:v,permalink:p,version:_}=e,k=b||`${i} \xb7 ${n}`,N=h||u,y=E+Object(o.a)(N),w=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:y}),N&&r.a.createElement("meta",{property:"twitter:image",content:y}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`}),p&&r.a.createElement("meta",{property:"og:url",content:E+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(m.a,null),r.a.createElement("div",{className:"main-wrapper"},f),!d&&r.a.createElement(s.a,null))}},128:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(124),o=a.n(c),m=a(125),s=a(126),i=a(122),u=a(123),E=a(131),f=a(129),b=a(84),d=a.n(b);function g({to:e,href:t,label:a,position:r,...c}){const o=Object(u.a)(e);return l.a.createElement(m.a,Object(n.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:o},c),a)}t.a=function(){const e=Object(i.a)(),[t,a]=Object(r.useState)(!1),[c,b]=Object(r.useState)(!1),[h]=Object(f.a)(),{siteConfig:v={}}=e,{baseUrl:p,themeConfig:_={}}=v,{navbar:k={}}=_,{title:N,logo:y={},links:w=[]}=k,j=Object(r.useCallback)(()=>{a(!0)},[a]),O=Object(r.useCallback)(()=>{a(!1)},[a]),C=Object(u.a)(y.src);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement("html",{lang:"en","data-theme":h})),l.a.createElement("nav",{className:o()("navbar","navbar--fixed-top",{"navbar-sidebar--show":t})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(m.a,{className:"navbar__brand",to:p},null!=y&&l.a.createElement("img",{className:o()("navbar__logo",d.a.navbarLogo),src:C,alt:y.alt}),null!=N&&l.a.createElement("strong",{className:c?d.a.hideLogoText:""},N)),w.filter(e=>"right"!==e.position).map((e,t)=>l.a.createElement(g,Object(n.a)({},e,{key:t})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},w.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(g,Object(n.a)({},e,{key:t}))),l.a.createElement(E.a,{handleSearchBarToggle:b,isSearchBarExpanded:c}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(m.a,{className:"navbar__brand",onClick:O,to:p},null!=y&&l.a.createElement("img",{className:"navbar__logo",src:C,alt:y.alt}),null!=N&&l.a.createElement("strong",null,N))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},w.map((e,t)=>l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(g,Object(n.a)({className:"menu__link"},e,{onClick:O}))))))))))}},129:function(e,t,a){"use strict";var n=a(0);t.a=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const a=n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t]);return[e,a]}},130:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(124),o=a.n(c),m=a(125),s=a(122),i=a(123),u=a(85),E=a.n(u);function f({to:e,href:t,label:a,...r}){const c=Object(i.a)(e);return l.a.createElement(m.a,Object(n.a)({className:o()("footer__link-item",E.a.footerLink)},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},r),a)}const b=({url:e,alt:t})=>l.a.createElement("img",{className:"footer__logo",alt:t,src:e});t.a=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:c=[],logo:m={}}=n||{},u=Object(i.a)(m.src);return n?l.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(f,e)))):null))),(m||r)&&l.a.createElement("div",{className:"text--center"},m&&m.src&&l.a.createElement("div",{className:"margin-bottom--sm"},m.href?l.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:E.a.footerLogoLink},l.a.createElement(b,{alt:m.alt,url:u})):l.a.createElement(b,{alt:m.alt,url:u})),l.a.createElement("section",{className:E.a.copyright},r)))):null}},131:function(e,t,a){"use strict";var n=()=>null;a.d(t,"a",(function(){return n}))},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(127);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);