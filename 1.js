if (!document.querySelector("#google_translate_element")) {
var script = document.createElement('script');
script.src = 'https://news.yujianweb.cn/js/translate/element.js';
document.getElementsByTagName('head')[0].appendChild(script);
var google_translate_element = document.createElement('div');
google_translate_element.id = 'google_translate_element';
google_translate_element.style = 'font-size:16px;position:fixed;bottom:10px;right:10px;cursor:pointer;z-index:99999;text-align:center;border-radius:10px;cursor:pointer;padding:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);font-family:Georgia;text-shadow:transparent 0 0 0;font-weight:bolder';
document.documentElement.appendChild(google_translate_element);
script = document.createElement('script');
script.innerHTML = "function googleTranslateElementInit() {new google.translate.TranslateElement({layout: google.translate.TranslateElement.InlineLayout.SIMPLE, multilanguagePage: true, pageLanguage: 'auto', includedLanguages: 'zh-CN,zh-TW'}, 'google_translate_element');}";
document.getElementsByTagName('head')[0].appendChild(script)
}