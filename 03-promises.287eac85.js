var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("iQIUW");const r=document.querySelector("form"),l=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="delay"]'),s=document.querySelector('input[name="amount"]');function u(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?(o({position:e,delay:n}),console.log(`✅ Fulfilled promise ${e} in ${n}ms`)):(t({position:e,delay:n}),console.log(`❌ Rejected promise ${e} in ${n}ms`))}),n)}))}r.addEventListener("submit",(e=>{e.preventDefault();let n=parseInt(a.value),o=parseInt(l.value),t=parseInt(s.value);for(let e=1;e<=t;e++)u(e,n).then((({position:e,delay:n})=>{i.Notify.warning(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.warning(`❌ Rejected promise ${e} in ${n}ms`)})),n+=o;r.reset()}));
//# sourceMappingURL=03-promises.287eac85.js.map
