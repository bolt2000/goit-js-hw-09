var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=i);var t=i("iQIUW");document.querySelector('input[name="step"]'),document.querySelector('input[name="delay"]'),document.querySelector('input[name="amount"]');var r,l;(r=3,l=1500,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?(e({position:r,delay:l}),t.Notify.warning(`✅ Fulfilled promise ${r} in ${l}ms`)):(o({position:r,delay:l}),t.Notify.warning(`❌ Rejected promise ${r} in ${l}ms`))}),l)}))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.357fdd49.js.map