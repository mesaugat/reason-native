(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),l=(n(0),n(122)),i={id:"quickstart",title:"Rely Quickstart",sidebar_label:"Quickstart"},s={id:"rely/quickstart",title:"Rely Quickstart",description:"> This quickstart builds off [Getting Started](../getting-started) and assumes you have a native Reason project set up.",source:"@site/../docs/rely/quickstart.md",permalink:"/reason-native/docs/rely/quickstart",sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"Rely Introduction",permalink:"/reason-native/docs/rely/introduction"},next:{title:"Setup and Teardown",permalink:"/reason-native/docs/rely/setup-teardown"}},o=[{value:"Install Rely",id:"install-rely",children:[]},{value:"Create a test",id:"create-a-test",children:[]}],c={rightToc:o},u="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(u,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This quickstart builds off ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," and assumes you have a native Reason project set up.")),Object(l.b)("h2",{id:"install-rely"},"Install Rely"),Object(l.b)("p",null,"To install Rely in your project with esy, run"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"esy add @reason-native/rely\n")),Object(l.b)("p",null,"This will add ",Object(l.b)("inlineCode",{parentName:"p"},"@reason-native/rely")," into your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"In order to use Rely, you must add it to your build system. With dune, ",Object(l.b)("inlineCode",{parentName:"p"},"rely.lib")," must be added to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://jbuilder.readthedocs.io/en/latest/dune-files.html#library-dependencies"}),"the relevant ",Object(l.b)("inlineCode",{parentName:"a"},"dune")," file"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lisp"}),"(libraries ... rely.lib)\n")),Object(l.b)("h2",{id:"create-a-test"},"Create a test"),Object(l.b)("p",null,"Let's start by creating a library for our tests. Create a directory called test and create a dune file for our library (if you wish to use another build system, the important thing here is to pass the -linkall flag to the compiler)"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500test/\n\u2502   lib/\n\u2502       dune\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lisp"}),";; dune file\n(library\n   (name MyLibTest)\n   (public_name my-lib-test.lib)\n   ; the linkall flag ensures that all of our tests are compiled and the\n   ; -g flag emits debugging information\n   (ocamlopt_flags -linkall -g)\n   ; you will want to depend on the library you are testing as well, however for\n   ; the purposes of this example we are only depending on the test runner itself\n   (libraries rely.lib )\n   (modules (:standard \\ RunTests))\n)\n(executable\n  ; the for the library is automatically detected because of the name, but we\n  ; need to explicitly specify the package here\n  (package my-lib-test)\n  (name RunTests)\n  (public_name RunTests.exe)\n  (libraries\n    my-lib-test.lib\n  )\n  (modules RunTests)\n)\n")),Object(l.b)("p",null,"Now let's create a file to initialize the test framework. Here we are specifying where snapshots should be stored as well as the root directory of your project for the formatting of terminal output."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500test/\n\u2502   lib/\n\u2502       dune\n\u2502       TestFramework.re\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/* TestFramework.re */\ninclude Rely.Make({\n  let config =\n    Rely.TestFrameworkConfig.initialize({\n      snapshotDir: "path/to/test/lib/__snapshots__",\n      projectDir: "path/to/your/project"\n    });\n});\n')),Object(l.b)("p",null,"Now we can finally write our first test!"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500test/\n\u2502   lib/\n\u2502       dune\n\u2502       TestFramework.re\n\u2502       MyFirstTest.re\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/* MyFirstTest.re */\nopen TestFramework;\n\ndescribe("my first test suite", ({test}) => {\n  test("1 + 1 should equal 2", ({expect}) => {\n    expect.int(1 + 1).toBe(2);\n  });\n});\n')),Object(l.b)("p",null,"From here let's create an executable to actually run our tests (the name of this file corresponds to the name specified in the executable stanza in the dune file)."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u2502\n\u251c\u2500my-lib-test.opam\n\u251c\u2500test/\n\u2502   dune\n\u2502   TestFramework.re\n\u2502   MyFirstTest.re\n\u2502   RunTests.re\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"/* RunTests.re */\nMyLibTest.TestFramework.cli()\n")),Object(l.b)("p",null,"Finally we can run ",Object(l.b)("inlineCode",{parentName:"p"},"esy build && esy x RunTests.exe")," to build and run our tests."))}b.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||l;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);