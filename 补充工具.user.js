// ==UserScript==
// @name 补充工具
// @description 恢复原来几个功能 ：01：谷歌翻译功能，02：万能工具，03：网页调试
// @match *://*/*
// @author 蚂蚁小志
// @license Unlicense
// @charset UTF-8
// @version 1.1
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
div.innerHTML = '<div class="jjxbb"><ul><li><a class="hide">蚂蚁小志</a><ul>' +
'<li><a id="jjxbb-gu-jjxbb" type="button" style="color:black!important;">翻译</a></li>' +
'<li><a id="jjxbb-wan-jjxbb" type="button" style="color:black!important;">万能</a></li>' +
'<li><a id="jjxbb-tiao-jjxbb" type="button" style="color:black!important;">调试</a></li>' +
'</ul></li></ul></div>';
document.body.appendChild(div);
var style = document.createElement("style");
style.type="text/css";
style.innerHTML = ".jjxbb{font-family:arial,sans-serif;padding:0;margin:50px;z-index:99999;position:fixed;top:calc(100vh/2);right:-45px;font-size:30px}" +
".jjxbb ul{padding:0;margin:0;list-style-type:none}" +
".jjxbb ul li{float:left;position:relative;list-style-type:none}" +
".jjxbb ul li a,.jjxbb ul li a:visited{display:block;text-align:center;text-decoration:none;width:100px;height:30px;color:#000;border:2px solid #4CAF50;background:#c9c9a7;line-height:30px;font-size:20px}" +
".jjxbb ul li ul{display:none}" +
".jjxbb ul li:hover ul{display:block;position:absolute;top:30px;right:0;width:105px}" +
".jjxbb ul li:hover ul li a{display:block;background:#faeec7;color:#000}" +
".jjxbb ul li:hover ul li a:hover{background:#dfc184;color:#000}" +
"a.hide{width:25px!important;height:auto!important;border-radius:10px}";
document.querySelector(".jjxbb").appendChild(style);
///* ! -------------------------------------------------------------------谷歌翻译------------------------------------------------------------------------- */
document.querySelector("a#jjxbb-gu-jjxbb").addEventListener("click",function(){if(document.querySelector("#google_translate_element")){}else{var script=document.createElement('script');script.src='https://news.yujianweb.cn/js/translate/element.js';document.getElementsByTagName('head')[0].appendChild(script);var google_translate_element=document.createElement('div');google_translate_element.id='google_translate_element';google_translate_element.style='font-size:16px;position:fixed;bottom:10px;left:10px;cursor:pointer;z-index:99999;text-align:center;border-radius:10px;cursor:pointer;padding:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);font-family:Georgia;text-shadow:transparent 0 0 0;font-weight:bolder';document.documentElement.appendChild(google_translate_element);script=document.createElement('script');script.innerHTML="function googleTranslateElementInit(){new google.translate.TranslateElement({layout:google.translate.TranslateElement.InlineLayout.SIMPLE,multilanguagePage:true,pageLanguage:'auto',includedLanguages:'zh-CN,zh-TW,en'},'google_translate_element');}";document.getElementsByTagName('head')[0].appendChild(script)}});
///* ! -------------------------------------------------------------------万能工具------------------------------------------------------------------------- */
document.querySelector("a#jjxbb-wan-jjxbb").addEventListener("click",function(){window.open("https://wn.run/f/#"+document.location.href,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,left="+(screen.availWidth-1100)/2+",top="+(screen.availHeight-600)/2)});
///* ! -------------------------------------------------------------------网页调试------------------------------------------------------------------------- */
document.querySelector("a#jjxbb-tiao-jjxbb").addEventListener("click",function(){if(document.querySelector("#__vconsole")){}else{var script=document.createElement('script');if(typeof have=='undefined'){var oHead1007=document.getElementsByTagName('body').item(0);var oScript1007=document.createElement("script");oScript1007.type="text/javascript";oScript1007.src="https://gitee.com/mininet/01/raw/master/2333.js";oHead1007.appendChild(oScript1007);var have=true}(function(){'use strict';function clearAD(){var vConsole=new VConsole()}setTimeout(()=>{clearAD()},2000)})()}});
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
window.requestAnimationFrame(shoujiwangyegongjuxiang)
};
}
