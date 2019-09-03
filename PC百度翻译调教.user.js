// ==UserScript==
// @name PC百度翻译调教
// @description 无聊对百度翻译屏蔽多余模块和美化。
// @author 江小白
// @include /^https?:\/\/fanyi\.baidu\.com\/(?:#\w+?\/\w+?\/.+)?$/
// @run-at document-start
// @version 6.6.6.946
// ==/UserScript==
(function() {var css = "";
if (false || (document.location.href.match(/^https?:\/\/fanyi\.baidu\.com\/(?:#\w+?\/\w+?\/.+)?$/)))
css += [
".sug-wrap, .operate-btn.op-zh-pingyin-btn, [class=\"manual-trans-btn icon-manual\"], [data-stat-add*=\"纠错\"], [data-hover-tip-text*=\"收藏\"], body > div.container > div.footer.cleafix, body > div.container > div.footer.cleafix > div.inner.clearfix, .header { display: none!important; max-width: 0!important; max-height: 0!important; overflow: hidden!important; position: absolute; left: -102030px }",
".keywords-outter,.dictionary-wrap.dictionary-wrap-f .simple-dict-f.simple-dict-f-nimg, .language-btn .select-inner, .language-btn .language-selected, .history-container, .input-wrap, .ordinary-wrap, [class=\"output-wrap output-blank\"], [class=\"main main-outer\"], html, [class^=\"main main-\"] { background: url(\"https://www.bing.com/th?id=OHR.GuaitaTower_EN-CN7249728979_1920x1080.jpg\") no-repeat fixed center / cover !important; }",
"* { border: none !important; outline: none !important }",
"::-webkit-scrollbar { width: 0px!important; height: 0px!important; }",
".op-sound { background-color: #d1d2b0; border-radius: 5px; }",
".icon-copy { background-color: #d1d2b0; border-radius: 5px; height: 20px; width: 20px; }",
".op-double-lang, .op-jp-pingyin-btn { color: #bb1818 !important; }",
".ordinary-output { font-weight: bold !important; text-decoration: none; border-radius: 5px; background-color: #9e9e9ebd; cursor: pointer; text-align: center; }",
".textarea { font-weight: bold; text-decoration: none; }",
".textarea-bg, .textarea-bg-text, .textarea { border-radius: 5px; background-color: #2224222e; }",
".trans-operation a { float: none; }",
".history-tip { margin: auto; color: #ca1e1e; text-align: right; }",
".source-output { color: #9C27B0; }",
"#cont-web-means .web-means-link, .sample-wrap .sample-resource a, .sample-wrap .sample-resource span { color: #4CAF50; }",
".sample-wrap .sample-origin-tips p { background: #E91E63; }",
".dictionary-wrap.dictionary-wrap-f .simple-dict-f.simple-dict-f-nimg { min-height: auto; }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
addStyle(css);
} else {
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
heads[0].appendChild(node);
} else {
document.documentElement.appendChild(node);
}
}
})();