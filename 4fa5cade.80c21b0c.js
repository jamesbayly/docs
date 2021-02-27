(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(179)),i={title:"Transfer events"},s={unversionedId:"api/examples/promise/transfer-events",id:"api/examples/promise/transfer-events",isDocsHomePage:!1,title:"Transfer events",description:"Display the events that occur during a transfer by sending a value to a random account",source:"@site/docs/api/examples/promise/transfer-events.md",slug:"/api/examples/promise/transfer-events",permalink:"/docs/api/examples/promise/transfer-events",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/transfer-events.md",version:"current",sidebar:"reference",previous:{title:"Traverse events",permalink:"/docs/api/examples/promise/system-events"},next:{title:"Chain upgrade",permalink:"/docs/api/examples/promise/upgrade-chain"}},c=[],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Display the events that occur during a transfer by sending a value to a random account"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// Import the API & Provider and some utility functions\nconst { ApiPromise } = require('@polkadot/api');\n\n// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)\nconst testKeyring = require('@polkadot/keyring/testing');\n\n// Utility function for random values\nconst { randomAsU8a } = require('@polkadot/util-crypto');\n\n// Some constants we are using in this sample\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst AMOUNT = 10000;\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await ApiPromise.create();\n\n  // Create an instance of our testing keyring\n  // If you're using ES6 module imports instead of require, just change this line to:\n  // const keyring = testKeyring();\n  const keyring = testKeyring.default();\n\n  // Get the nonce for the admin key\n  const { nonce } = await api.query.system.account(ALICE);\n\n  // Find the actual keypair in the keyring\n  const alicePair = keyring.getPair(ALICE);\n\n  // Create a new random recipient\n  const recipient = keyring.addFromSeed(randomAsU8a(32)).address;\n\n  console.log('Sending', AMOUNT, 'from', alicePair.address, 'to', recipient, 'with nonce', nonce.toString());\n\n  // Do the transfer and track the actual status\n  api.tx.balances\n    .transfer(recipient, AMOUNT)\n    .signAndSend(alicePair, { nonce }, ({ events = [], status }) => {\n      console.log('Transaction status:', status.type);\n\n      if (status.isInBlock) {\n        console.log('Included at block hash', status.asInBlock.toHex());\n        console.log('Events:');\n\n        events.forEach(({ event: { data, method, section }, phase }) => {\n          console.log('\\t', phase.toString(), `: ${section}.${method}`, data.toString());\n        });\n      } else if (status.isFinalized) {\n        console.log('Finalized block hash', status.asFinalized.toHex());\n\n        process.exit(0);\n      }\n    });\n}\n\nmain().catch(console.error);\n")))}l.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(f,s(s({ref:n},p),{},{components:t})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);