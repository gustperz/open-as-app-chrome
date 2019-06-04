'use strict';

chrome.browserAction.onClicked.addListener(({ url }) => {
  chrome.windows.create({ url, type: 'panel' });
});
