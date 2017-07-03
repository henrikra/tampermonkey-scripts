// ==UserScript==
// @name         Prevent ad opening in OpenSubtitles.org (modifiscans)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

window.open = () => {};
window.alert = () => {};

$('body').on('DOMNodeInserted', 'div[style*="fixed"]', function() {
    $(this).css('pointer-events', 'none');
});

document.addEventListener('mousedown', function(e) {
    e.stopImmediatePropagation();
}, true);