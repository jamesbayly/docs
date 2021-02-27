(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(179)),o={title:"Query subscriptions"},s={unversionedId:"api/start/api.query.subs",id:"api/start/api.query.subs",isDocsHomePage:!1,title:"Query subscriptions",description:"Previously we explained the concepts between api.query. In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in api.rpc) to stream results from the state, as it changes between blocks.",source:"@site/docs/api/start/api.query.subs.md",slug:"/api/start/api.query.subs",permalink:"/docs/api/start/api.query.subs",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.subs.md",version:"current",sidebar:"reference",previous:{title:"RPC queries",permalink:"/docs/api/start/api.rpc"},next:{title:"Multi queries",permalink:"/docs/api/start/api.query.multi"}},c=[{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Subscriptions with params",id:"subscriptions-with-params",children:[]},{value:"Multiple queries",id:"multiple-queries",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Previously we explained the concepts between ",Object(i.b)("inlineCode",{parentName:"p"},"api.query"),". In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in ",Object(i.b)("inlineCode",{parentName:"p"},"api.rpc"),") to stream results from the state, as it changes between blocks."),Object(i.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(i.b)("p",null,"As in the case with ",Object(i.b)("inlineCode",{parentName:"p"},"api.rpc")," subscriptions, query subscriptions follow exactly the same form - an actual call is augmented with a callback to return the current state value that is updated as the underlying value changes. As an example, we can extend on what we had previously -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve the current timestamp via subscription\nconst unsub = await api.query.timestamp.now((moment) => {\n  console.log(`The last block has a timestamp of ${moment}`);\n});\n")),Object(i.b)("p",null,"The form is exactly the same as the subscriptions we have seen previously, instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"await")," returning the actual once-off value, it returns a subscription ",Object(i.b)("inlineCode",{parentName:"p"},"unsub()")," function that can be used to stop the subscription and clear up any underlying RPC connections. The supplied callback will contain the value as it changes, streamed from the node."),Object(i.b)("h2",{id:"subscriptions-with-params"},"Subscriptions with params"),Object(i.b)("p",null,"If we had a query with parameters, i.e. where we wish to perform a query for a specific account, the form is exactly the same - the last parameter contains the actual callback, after all other parameters. To retrieve the balances for an account as it changes, we could do the following -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"...\n\n// Subscribe to balance changes for our account\nconst unsub = await api.query.system.account(ADDR, ({ nonce, data: balance }) => {\n  console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);\n});\n")),Object(i.b)("p",null,"By now this subscription form should be familiar to you, including the usage of ",Object(i.b)("inlineCode",{parentName:"p"},"unsub"),"."),Object(i.b)("h2",{id:"multiple-queries"},"Multiple queries"),Object(i.b)("p",null,"In most non-trivial applications, it is useful to optimize both our code in terms of callbacks as well as node resources, for instance by ",Object(i.b)("a",{parentName:"p",href:"/docs/api/start/api.query.multi"},"performing multiple queries at once, over the same RPC call"),"."))}l.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);