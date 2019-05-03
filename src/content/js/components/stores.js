import { writable } from 'svelte/store';

export var url = writable('');

export var desktopScore = writable(0);

export var mobileScore = writable(0);

export var desktopLoading = writable(false);
export var mobileLoading = writable(false);

// chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tab) {
//   console.log(tab, "tab");
// });

// (async function () {
//   var url = await new Promise(function (resolve, reject) {
    
//   });
// })();

// export var url = writable((async function () {
//   return await new Promise(function (resolve, reject) {
//     chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tab) {
//       console.log(tab, "tab");
//       resolve(tab[0].url);
//     });
//   });
// })());