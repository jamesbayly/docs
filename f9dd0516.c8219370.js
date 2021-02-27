(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(179)),i={title:"Make a simple transfer"},s={unversionedId:"api/examples/promise/make-transfer",id:"api/examples/promise/make-transfer",isDocsHomePage:!1,title:"Make a simple transfer",description:"This sample shows how to create a transaction to make a transfer from one account to another.",source:"@site/docs/api/examples/promise/make-transfer.md",slug:"/api/examples/promise/make-transfer",permalink:"/docs/api/examples/promise/make-transfer",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/make-transfer.md",version:"current",sidebar:"reference",previous:{title:"Read storage, at a specific blockhash",permalink:"/docs/api/examples/promise/read-storage-at"},next:{title:"Traverse events",permalink:"/docs/api/examples/promise/system-events"}},c=[],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This sample shows how to create a transaction to make a transfer from one account to another."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// Import the API, Keyring and some utility functions\nconst { ApiPromise } = require('@polkadot/api');\nconst { Keyring } = require('@polkadot/keyring');\n\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Instantiate the API\n  const api = await ApiPromise.create();\n\n  // Constuct the keying after the API (crypto has an async init)\n  const keyring = new Keyring({ type: 'sr25519' });\n\n  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)\n  const alice = keyring.addFromUri('//Alice');\n\n  // Create a extrinsic, transferring 12345 units to Bob\n  const transfer = api.tx.balances.transfer(BOB, 12345);\n\n  // Sign and send the transaction using our account\n  const hash = await transfer.signAndSend(alice);\n\n  console.log('Transfer sent with hash', hash.toHex());\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}l.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return t?a.a.createElement(d,s(s({ref:n},p),{},{components:t})):a.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);