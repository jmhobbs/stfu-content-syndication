var urls = [
  "*://*.outbrain.com/*",
  "*://*.zergnet.com/*",
];

var STFUArticleLinks = function (req) {
  return { cancel: true }
}

chrome.webRequest.onBeforeRequest.addListener(STFUArticleLinks, {"types": ["script"], "urls": urls}, ["blocking"]);
