
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tab) {
  console.log(tab, "tab222222");
});

console.log("piz");