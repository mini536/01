// ==UserScript==
// @name 网页调试
// @description 有限的为手机浏览器提供调试网页
// @match *://*/*
// @author QQ大冰
// @charset UTF-8
// @version 1.0
// ==/UserScript==
javascript:(function () { var script = document.createElement('script'); script.src="//raw.githubusercontent.com/logoove/weui/master/js/eruda.js"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
