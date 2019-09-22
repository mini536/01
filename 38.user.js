// ==UserScript==
// @name 补充工具
// @description 恢复原来几个功能 ：01：谷歌翻译功能，02：万能工具，03：网页调试
// @match *://*/*
// @author 蚂蚁小志
// @license Unlicense
// @charset UTF-8
// @version 1.2
// ==/UserScript==
buchonggongjuxiang();
function buchonggongjuxiang(){
try{
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
(function(){
///* ! -----------------------------------------------------------以下代码 禁止在什么域名下执行------------------------------------------------------------- */
if(!(location.href.match(/^https?:\/\/.+?(?:(?:\.|\$|\?|\#)(?:md5|ts|m(?:p(?:2|3|4)|4a|kv|ov|3u8)|a(?:sf|vi)|w(?:mv|av|ma)|og(?:g|v)|a(?:c|a)c|(?:f|h)(?:l|4)v)(?:\?\w+?=|$)|\?\w+?=http.+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|tudou|qq|yinyuetai|bilibili|fun)\.)/i))){
///* ! ----------------------------------------------------------以下代码 禁止在 iframe框架内执行----------------------------------------------------------- */
if(self!=top){}else{
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
(function(){
var div = document.createElement("div");
div.innerHTML = '<div class="myxz"><ul><li><a class="hide">蚂蚁小志</a><ul>' +
'<li><a id="myxz-gu-myxz" type="button" style="color:black!important;">翻译</a></li>' +
'<li><a id="myxz-wan-myxz" type="button" style="color:black!important;">万能</a></li>' +
'<li><a id="myxz-tiao-myxz" type="button" style="color:black!important;">调试</a></li>' +
'</ul></li></ul></div>';
document.body.appendChild(div);
var style = document.createElement("style");
style.type="text/css";
style.innerHTML = ".myxz{font-family:arial,sans-serif;padding:0;margin:50px;z-index:99999;position:fixed;top:calc(100vh/2);right:-45px;font-size:30px}" +
".myxz ul{padding:0;margin:0;list-style-type:none}" +
".myxz ul li{float:left;position:relative;list-style-type:none}" +
".myxz ul li a,.myxz ul li a:visited{display:block;text-align:center;text-decoration:none;width:100px;height:30px;color:#000;border:2px solid #4CAF50;background:#c9c9a7;line-height:30px;font-size:20px}" +
".myxz ul li ul{display:none}" +
".myxz ul li:hover ul{display:block;position:absolute;top:30px;right:0;width:105px}" +
".myxz ul li:hover ul li a{display:block;background:#faeec7;color:#000}" +
".myxz ul li:hover ul li a:hover{background:#dfc184;color:#000}" +
"a.hide{width:25px!important;height:auto!important;border-radius:10px}";
document.querySelector(".myxz").appendChild(style);
///* ! -------------------------------------------------------------------谷歌翻译------------------------------------------------------------------------- */
document.querySelector("a#myxz-gu-myxz").addEventListener("click",function(){if(document.querySelector("#google_translate_element")){}else{var script=document.createElement('script');script.src='https://news.yujianweb.cn/js/translate/element.js';document.getElementsByTagName('head')[0].appendChild(script);var google_translate_element=document.createElement('div');google_translate_element.id='google_translate_element';google_translate_element.style='font-size:16px;position:fixed;bottom:10px;left:10px;cursor:pointer;z-index:99999;text-align:center;border-radius:10px;cursor:pointer;padding:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);font-family:Georgia;text-shadow:transparent 0 0 0;font-weight:bolder';document.documentElement.appendChild(google_translate_element);script=document.createElement('script');script.innerHTML="function googleTranslateElementInit(){new google.translate.TranslateElement({layout:google.translate.TranslateElement.InlineLayout.SIMPLE,multilanguagePage:true,pageLanguage:'auto',includedLanguages:'af,af-ZA,sq,sq-AL,ar,ar-DZ,ar-BH,ar-EG,ar-IQ,ar-JO,ar-KW,ar-LB,ar-LY,ar-MA,ar-OM,ar-QA,ar-SA,ar-SY,ar-TN,ar-AE,ar-YE,hy,hy-AM,az,az-AZ-Cyrl,az-AZ-Latn,,eu,eu-ES,be,be-BY,bg,bg-BG,ca,ca-ES,zh-HK,zh-MO,zh-CN,zh-CHS,zh-SG,zh-TW,zh-CHT,hr,hr-HRcs,cs-CZ,da,da-DK,div,div-MV,nl,nl-BE,nl-NL,en,en-AU,en-BZ,en-CA,en-CB,en-IE,en-JM,en-NZ,en-PH,en-ZA,en-TT,en-GB,en-US,en-ZW,et,et-EE,fo,fo-FO,fa,fa-IR,fi,fi-FI,fr,fr-BE,fr-CA,fr-FR,fr-LU,fr-MC,fr-CH,gl,gl-ES,ka,ka-GE,de,de-AT,de-DE,de-LI,de-LU,de-CH,el,el-GR,gu,gu-IN,he,he-IL,hi,hi-IN,hu,hu-HU,is,is-IS,id,id-ID,it,it-IT,it-CH,ja,ja-JP,kn,kn-IN,kk,kk-KZ,kok,kok-IN,ko,ko-KR,ky,ky-KZ,lv,lv-LV,lt,lt-LT,mk,mk-MK,ms,ms-BN,ms-MY,mr,mr-IN,mn,mn-MN,no,nb-NO,nn-NO,pl,pl-PL,pt,pt-BR,pt-PT,pa,pa-IN,ro,ro-RO,ru,ru-RU,sa,sa-IN,sr-SP-Cyrl,sr-SP-Latn,sk,sk-SK,sl,sl-SI,es,es-AR,es-BO,es-CL,es-CO,西es-CR,es-DO,es-EC,es-SV,es-GT,es-HN,es-MX,es-NI,es-PA,es-PY,es-PE,es-PR,es-ES,es-UY,es-VE,sw,sw-KE,sv,sv-FI,sv-SE,syr,syr-SY,ta,ta-IN,tt,tt-RU,te,te-IN,th,th-TH,tr,tr-TR,uk,uk-UA,ur,ur-PK,uz,uz-UZ-Cyrl,uz-UZ-Latn,vi,vi-VN'},'google_translate_element');}";document.getElementsByTagName('head')[0].appendChild(script)}});
///* ! -------------------------------------------------------------------万能工具------------------------------------------------------------------------- */
document.querySelector("a#myxz-wan-myxz").addEventListener("click",function(){window.open("https://wn.run/f/#"+document.location.href,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,left="+(screen.availWidth-1100)/2+",top="+(screen.availHeight-600)/2)});
///* ! -------------------------------------------------------------------网页调试------------------------------------------------------------------------- */
document.querySelector("a#myxz-tiao-myxz").addEventListener("click",function(){if(document.querySelector("#__vconsole")){}else{var script=document.createElement('script');if(typeof have=='undefined'){var oHead1007=document.getElementsByTagName('body').item(0);var oScript1007=document.createElement("script");oScript1007.type="text/javascript";oScript1007.src="https://gitee.com/mininet/01/raw/master/2333.js";oHead1007.appendChild(oScript1007);var have=true}(function(){'use strict';function clearAD(){var vConsole=new VConsole()}setTimeout(()=>{clearAD()},2000)})()}});
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
})();
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
}
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
}
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
})();
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
}catch(e){
window.requestAnimationFrame(buchonggongjuxiang)
};
}
