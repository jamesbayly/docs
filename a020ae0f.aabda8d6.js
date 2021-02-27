(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),a=(o(0),o(179)),i={title:"Overview",slug:"/api/cookbook"},s={unversionedId:"api/cookbook/intro",id:"api/cookbook/intro",isDocsHomePage:!1,title:"Overview",description:"The cookbook hosts small code snippets in a question-answer format. It does not walk you through the whole setup, like the basic examples, but rather aims to answer some questions around specific uses. It also does not replace the FAQ, rather this is focussed explicitly on code samples, instead of general trouble-shooting for common mishaps.",source:"@site/docs/api/cookbook/intro.md",slug:"/api/cookbook",permalink:"/docs/api/cookbook",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/cookbook/intro.md",version:"current",sidebar:"reference",previous:{title:"TypeScript user generated",permalink:"/docs/api/start/typescript.user"},next:{title:"Blocks",permalink:"/docs/api/cookbook/blocks"}},c=[{value:"Sections",id:"sections",children:[]},{value:"Contribute",id:"contribute",children:[]}],p={toc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The cookbook hosts small code snippets in a question-answer format. It does not walk you through the whole setup, like the ",Object(a.b)("a",{parentName:"p",href:"/api/examples/promise"},"basic examples"),", but rather aims to answer some questions around specific uses. It also does not replace the ",Object(a.b)("a",{parentName:"p",href:"/docs/api/FAQ"},"FAQ"),", rather this is focussed explicitly on code samples, instead of general trouble-shooting for common mishaps."),Object(a.b)("p",null,"These questions are added as they do come up and the hope is that the snippets here is will be useful to others, instead of just the original person who asked on a specific use-case. As of today, it is only making a start and not fully comprehensive yet - check back early, check back often."),Object(a.b)("h2",{id:"sections"},"Sections"),Object(a.b)("p",null,"The following cookbook sections are available -"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/cookbook/blocks"},"Blocks")," - Snippets around working with blocks and headers"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/cookbook/storage"},"Storage")," - Snippets for working with storage"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/cookbook/tx"},"Transactions")," - Snippets for working with transactions")),Object(a.b)("p",null,"... more to come."),Object(a.b)("h2",{id:"contribute"},"Contribute"),Object(a.b)("p",null,"And as always, if you have an addition to make, or a question to ask any ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/tree/master/docs"},"any PRs")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/issues"},"issues")," are appreciated. The initial content was generate from exactly such questions, either in Riot chat or as submitted as issues."))}l.isMDXComponent=!0},179:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return o?n.a.createElement(m,s(s({ref:t},p),{},{components:o})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);