(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(6),a=(n(0),n(122)),i={id:"api",title:"Basic API",sidebar_label:"Basic API"},o={id:"rely/api",title:"Basic API",description:"> Prefer reading code? Check out [RelyAPI.rei](https://github.com/facebookexperimental/reason-native/blob/master/src/rely/RelyAPI.rei)",source:"@site/../docs/rely/api.md",permalink:"/reason-native/docs/rely/api",sidebar_label:"Basic API",sidebar:"docs",previous:{title:"Mock Functions",permalink:"/reason-native/docs/rely/mock-functions"},next:{title:"Expect",permalink:"/reason-native/docs/rely/expect"}},s=[{value:"Basic Configuration",id:"basic-configuration",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Custom Matchers",id:"custom-matchers",children:[]}],l={rightToc:s},p="wrapper";function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Prefer reading code? Check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/reason-native/blob/master/src/rely/RelyAPI.rei"}),"RelyAPI.rei"))),Object(a.b)("h2",{id:"basic-configuration"},"Basic Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/* TestFramework.re */\ninclude Rely.Make({\n  let config =\n    Rely.TestFrameworkConfig.initialize({\n      snapshotDir: "path/to/test/lib/__snapshots__", /* required */\n      projectDir: "path/to/your/project" /* required */\n    });\n});\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Running with default CLI config:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"/* MyLibTest.re */\nTestFramework.cli(); /* default config */\n")),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For a full list of available matchers, visit the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/reason-native/docs/rely/expect"}),"expect documentation"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/* MyFirstTest.re */\nopen TestFramework;\n\ndescribe(\n  "my first test suite",\n  ({test, testSkip, testOnly, describe, describeSkip, describeOnly}) => {\n\n  /* test suite */\n  test("basic matchers", ({expect}) => {\n    expect.int(1 + 1).toBe(2);\n  });\n\n  test("mock functions", ({expect}) => {\n    let double = x => x * 2;\n    /*there are constructors for up to 7 args */\n    let mock = Mock.mock1(double);\n\n    let list = List.map(Mock.fn(mock), [1, 2, 3, 4]);\n\n    expect.mock(mock).toBeCalledTimes(4);\n    expect.mock(mock).toBeCalledWith(2);\n    expect.mock(mock).lastCalledWith(4);\n    expect.mock(mock).nthCalledWith(3, 3);\n    expect.mock(mock).toReturnTimes(4);\n    expect.mock(mock).toReturn(6);\n    expect.mock(mock).lastReturnedWith(8);\n    expect.mock(mock).nthReturnedWith(3, 6);\n  });\n\n  /* test skip causes this test to be skipped (not run) */\n  testSkip("incorrect test", ({expect}) => {\n    expect.int(1 + 1).toBe(3);\n  });\n\n  /* describe skip skips everything inside the describe */\n  describeSkip("a nested test suite", ({test}) => {\n    test("snapshots", ({expect}) => {\n      expect.string("I \ud83d\udc96 Rely").toMatchSnapshot();\n    });\n  });\n\n  /* testOnly will cause the test to always be run as long as it\'s\n   * not inside a skip (since 2.1.0) */\n  testOnly("only test", ({expect}) => {\n    expect.int(1 + 1).toBe(2);\n  });\n\n  /* Everything inside a describe only will always be run as long as it\'s not\n  inside a skip (since 2.1.0) */\n  describeOnly("a nested test suite", ({test}) => {\n    test("trivial", ({expect}) => {\n      expect.bool(true).toBeTrue();\n    });\n  });\n});\n')),Object(a.b)("h2",{id:"custom-matchers"},"Custom Matchers"),Object(a.b)("p",null,"Custom matchers can also be created as below, the API is currently identical to the internal one, so additional examples can be found by looking at the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/reason-native/tree/master/src/rely/matchers"}),"code for the built in matchers"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/*IntExtensions.re*/\ntype intExtensions = {toDivide: int => unit};\n\nlet intExtensions = (actual, {createMatcher}) => {\n  let pass = (() => "", true);\n  let createDividesMatcher = createMatcher(\n      ({formatReceived, formatExpected}, actualThunk, expectedThunk) => {\n      let actual = actualThunk();\n      let expected = expectedThunk();\n      let actualDividesExpected = expected mod actual == 0;\n\n      if (!actualDividesExpected) {\n        let failureMessage =\n          String.concat(\n            "",\n            [\n              "Expected actual to divide ",\n              formatExpected(string_of_int(expected)),\n              "\\n",\n              "Received: ",\n              formatReceived(string_of_int(actual))\n            ],\n          );\n        (() => failureMessage, false);\n      } else {\n        pass;\n      };\n    });\n  {\n    toDivide: (expected) => createDividesMatcher(() => actual, () => expected),\n  };\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'/* DividesTest.re*/\nopen TestFramework;\nopen IntExtensions;\n\ntype customMatchers = {\n  int: int => intExtensions\n};\n\nlet customMatchers = createMatcher => {\n  int: i => intExtensions(i, createMatcher)\n}\n\nlet { describe, describeOnly, describeSkip } =\n  describeConfig |> withCustomMatchers(customMatchers) |> build;\n\ndescribe("divides matchers example", ({test}) => {\n  test("should divide", ({expect}) => {\n    expect.ext.int(42).toDivide(84);\n  });\n  test("this test fails", ({expect}) => {\n    expect.ext.int(43).toDivide(84);\n  });\n});\n')))}u.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?c.a.createElement(m,o({ref:t},l,{components:n})):c.a.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[b]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);