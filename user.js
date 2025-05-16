// ==UserScript==
// @name         Salad King's Nostalgia Pack
// @namespace    OG agar.io
// @version      0.9.1
// @description  Fuck slow teamers and miniclip
// @author       © Salad King
// @match        *://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      iownffa.github.io
// ==/UserScript==


if (location.host === "agar.io" && location.pathname === "/") {
   window.stop();
   location.href = "https://agar.io/saladking" + location.hash;
   return;
}

document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "https://iownffa.github.io/pop/",
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});
