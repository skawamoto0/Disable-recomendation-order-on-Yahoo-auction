// ==UserScript==
// @name         ヤフオク!おすすめ順表示無効化
// @namespace    https://kawamoto.no-ip.org/
// @version      1.0
// @description  検索結果のおすすめ順を自動的に新着順にする
// @author       Suguru Kawamoto
// @include      https://auctions.yahoo.co.jp/search/search*
// @grant        none
// @updateURL    https://kawamoto.no-ip.org/misc/ヤフオク!おすすめ順表示無効化.user.js
// @downloadURL  https://kawamoto.no-ip.org/misc/ヤフオク!おすすめ順表示無効化.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let a = false;
    location.href.split("&").forEach(function(x){
        x = x.split("=");
        if(x[0] == "s1" || x[0] == "o1"){
            a = true;
        }
    });
    if(!a){
        location.replace(location.href + "&s1=cbids&o1=a");
    }
})();