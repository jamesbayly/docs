(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4458],{1947:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={title:"Transfer events"},s={unversionedId:"api/examples/promise/transfer-events",id:"api/examples/promise/transfer-events",isDocsHomePage:!1,title:"Transfer events",description:"Display the events that occur during a transfer by sending a value to a random account",source:"@site/docs/api/examples/promise/transfer-events.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/transfer-events",permalink:"/docs/api/examples/promise/transfer-events",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/transfer-events.md",version:"current",frontMatter:{title:"Transfer events"},sidebar:"reference",previous:{title:"Traverse events",permalink:"/docs/api/examples/promise/system-events"},next:{title:"Chain upgrade",permalink:"/docs/api/examples/promise/upgrade-chain"}},c=[],p={toc:c};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Display the events that occur during a transfer by sending a value to a random account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API & Provider and some utility functions\nconst { ApiPromise } = require('@polkadot/api');\n\n// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)\nconst testKeyring = require('@polkadot/keyring/testing');\n\n// Utility function for random values\nconst { randomAsU8a } = require('@polkadot/util-crypto');\n\n// Some constants we are using in this sample\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst AMOUNT = 10000;\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await ApiPromise.create();\n\n  // Create an instance of our testing keyring\n  // If you're using ES6 module imports instead of require, just change this line to:\n  // const keyring = testKeyring();\n  const keyring = testKeyring.default();\n\n  // Get the nonce for the admin key\n  const { nonce } = await api.query.system.account(ALICE);\n\n  // Find the actual keypair in the keyring\n  const alicePair = keyring.getPair(ALICE);\n\n  // Create a new random recipient\n  const recipient = keyring.addFromSeed(randomAsU8a(32)).address;\n\n  console.log('Sending', AMOUNT, 'from', alicePair.address, 'to', recipient, 'with nonce', nonce.toString());\n\n  // Do the transfer and track the actual status\n  api.tx.balances\n    .transfer(recipient, AMOUNT)\n    .signAndSend(alicePair, { nonce }, ({ events = [], status }) => {\n      console.log('Transaction status:', status.type);\n\n      if (status.isInBlock) {\n        console.log('Included at block hash', status.asInBlock.toHex());\n        console.log('Events:');\n\n        events.forEach(({ event: { data, method, section }, phase }) => {\n          console.log('\\t', phase.toString(), `: ${section}.${method}`, data.toString());\n        });\n      } else if (status.isFinalized) {\n        console.log('Finalized block hash', status.asFinalized.toHex());\n\n        process.exit(0);\n      }\n    });\n}\n\nmain().catch(console.error);\n")))}l.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);