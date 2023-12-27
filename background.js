// background.js

let panelWindowId;

chrome.runtime.onInstalled.addListener(function () {
  // Create or focus on the panel window
  chrome.windows.create({
    url: 'popup.html',
    type: 'panel',
    width: 300,
    height: 300,
  }, function (window) {
    panelWindowId = window.id;
  });
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  // Focus on the panel window whenever a new tab is activated
  if (panelWindowId) {
    chrome.windows.update(panelWindowId, { focused: true });
  }
});

chrome.windows.onRemoved.addListener(function (windowId) {
  // If the panel window is closed, recreate it
  if (windowId === panelWindowId) {
    chrome.windows.create({
      url: 'popup.html',
      type: 'panel',
      width: 300,
      height: 300,
    }, function (window) {
      panelWindowId = window.id;
    });
  }
});
