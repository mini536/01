// ==UserScript==
// @name 测试1
// @description 脚本功能目前如下 ：01: 谷歌翻译， 02：万能工具，03：网页调试。
// @match *://*/*
// @author 测试
// @license MIT
// @charset UTF-8
// @version 1.0
// ==/UserScript==
'use strict';
(function(){try{
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
if(document.onreadystatechange){shoujianniugongjuxiang();}
else if(document.childNodes){shoujianniugongjuxiang();}
else if(document.readyState){shoujianniugongjuxiang();}
else{shoujianniugongjuxiang();}
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
function shoujianniugongjuxiang(){
if(!(location.href.match(/^https?:\/\/wn\.run\//i)||location.href.match(/^https?:\/\/.+?(?:(?:\.|\$|\?|\#)(?:md5|ts|m(?:p(?:2|3|4)|4a|kv|ov|3u8)|a(?:sf|vi)|w(?:mv|av|ma)|og(?:g|v)|a(?:c|a)c|(?:f|h)(?:l|4)v)(?:\?\w+?=|$)|[#=\?]\w+?\Whttp.+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|tudou|qq|yinyuetai|bilibili|fun)\.)/i))){
///* ! ----------------------------------------------------------以下代码 禁止在 iframe框架内执行----------------------------------------------------------- */
if(self!=top&&get_setting_funs_value('tmsetting_iframe')=="checked"){}else{var div=document.createElement("div");div.innerHTML='<div class="jjjxxxbbb"><ul><li><a id="jxbanyd"></a><ul style="left:60vw!important;top:60vh!important;position:absolute;z-index:999999;font-size:4vw!important;width:10vw!important"><li><a id="jjjxxxbbb-gu-jjjxxxbbb" type="button" style="color:black!important;">翻译</a></li><li><a id="jjjxxxbbb-wan-jjjxxxbbb" type="button" style="color:black!important;">万能</a></li><li><a id="jjjxxxbbb-bian-jjjxxxbbb" type="button" style="color:black!important;">编辑</a></li><li><a id="jjjxxxbbb-tiao-jjjxxxbbb" type="button" style="color:black!important;">调试</a></li></ul></li></ul></div>';document.body.appendChild(div);var style=document.createElement("style");style.type="text/css";style.innerHTML=".jjjxxxbbb{padding:0!important;margin:50px!important;z-index:999999!important;position:fixed!important;top:calc(100vh/1.125)!important;left:-45px!important;font-size:30px!important;text-decoration:none!important;border:none!important;outline:none!important;background-color:transparent!important}"+".jjjxxxbbb ul{padding:0!important;margin:0!important;list-style-type:none!important}"+".jjjxxxbbb ul li{float:right!important;position:relative!important;list-style-type:none!important}"+".jjjxxxbbb ul li a{display:block!important;height:30px!important;line-height:30px!important;font-size:20px!important;width:85px!important;border-radius:10px!important;cursor:pointer!important;text-align:center!important;border:1.5px outset buttonface!important;text-decoration:none!important;vertical-align:baseline!important;font-family:Georgia!important;margin:5px 0 5px 0!important;border-radius:10px!important;BORDER-LEFT:#000 5px solid;MARGIN-RIGHT:auto!important;background-color:#ff7fa9!important;box-shadow:inset rgba(255,254,255,.6) 0 .3em .3em,inset rgba(0,0,0,.15) 0 -0.1em .3em,#d82661 0 .1em 3px,#b7144a 0 .3em 1px,rgba(0,0,0,.2) 0 .5em 5px!important;transition-property:color,text-shadow!important;transition-duration:423ms!important;transition-timing-function:ease!important}"+".jjjxxxbbb ul li a:visited{display:block;height:30px;background:#c9c9a7;line-height:30px;font-size:20px;width:85px;border-radius:10px;cursor:pointer;text-align:center;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;font-family:Georgia;margin:5px 0 5px 0}"+".jjjxxxbbb ul li a:hover{background-color:#8BC34A}"+".jjjxxxbbb ul li ul{display:none}"+".jjjxxxbbb ul li:hover ul{display:block;position:absolute;top:30px;right:0;width:105px}"+".jjjxxxbbb ul li:hover ul li a:hover{background:#4CAF50}"+"a#jxbanyd{width:8vw!important;height:8vw!important;text-align:center!important;position:fixed!important;z-index:999999!important;border-radius:10vw!important;display:block!important;opacity:.5;bottom:2vh!important}"+"a#jxbanyd:hover{opacity:1}";document.querySelector(".jjjxxxbbb").appendChild(style);
///* ! ---------------------------------------------------------------------------------------------------------------------------------------------------- */
if(document.querySelectorAll('[class^="jjjxxxbbb"]')[0]){document.head.insertAdjacentHTML('beforeend','<style>span[id="vip"][style^="font-size"],span[id="oovip"][style^="font-size"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}.jjxbb{left:50px!important}</style>')}else{};
///* ! -------------------------------------------------------------------视频点击------------------------------------------------------------------------- */
document.querySelector(".jjjxxxbbb a#jxbanyd").addEventListener("click",function() {
if(location.href.match(/^https?:\/\/(?:(?:tw|www|m)\.iqiyi\.com\/v_|v\.youku\.com\/v_show\/id_|m\.youku\.com\/(?:alipay_)?video\/id_|v\.qq\.com\/(?:x\/cover\/|cover\/(?:u|w)\/|x\/page\/)|(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=|(?!.+?[\?&]cid=)(?:.+?\/channel\/|index\.html|$)|(?:.+?\/)?cover\/\w+?\/(?:\w+?\.html\?vid=\w+$|(?![^\/]+?[\?&][cv]id=)\w+?\.htm))|(?:www|m)\.mgtv\.com\/b\/|(?:www|m)\.le\.com\/(?:vplay_|ptv\/vplay\/)|(?:m\.)?(?:tv|film)\.sohu\.com\/(?:(?:20|v[^\.]+?\.s?html|v\/[^=]*?==\.)|album\/)|(?:v|m)\.pptv\.com\/show\/|www\.wasu\.cn\/(?:Play\/show\/|wap\/play\/)|vip\.1905\.com\/play\/|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/|video\.tudou\.com\/v\/)/i)) {
const timer=setInterval(()=>{const buttonvip=document.querySelector('span#vip');if(buttonvip){clearInterval(timer);buttonvip.click();
document.head.insertAdjacentHTML('beforeend','<style>span[id="vip"][style^="font-size"],span[id="oovip"][style^="font-size"]{display:block!important;max-width:none!important;max-height:none!important;overflow:auto!important;position:relative;left:auto}div[class="jjjxxxbbb"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}</style>')
if(document.querySelector('div[id="jxbhttps"]')){const zddjb=document.querySelector('div[id="jxbhttps"]');setTimeout(function(){zddjb.click();},1234);}
(function(){if(document.querySelectorAll('#httpsvipul>li')[0]){function y(host_url){var host=location.host;var ps=host.indexOf(host_url);if(ps<0){return 0}return 1};var vip;
//支持不同网站使用不同接口，只需要修改vip=后面的数字即可。
if(y(".qq.com"))vip=58;
if(y(".iqiyi.com"))vip=28;
if(y(".youku.com"))vip=58;
if(y(".mgtv.com"))vip=28;
if(y(".tudou.com"))vip=16;
if(y(".le.com"))vip=16;
if(y(".sohu.com"))vip=16;
if(y(".pptv.com"))vip=16;
if(y(".fun.tv"))vip=16;
if(y(".1905.com"))vip=16;
if(y(".wasu.cn"))vip=16;
function zddj(){let jihao1='#httpsvipul>li:nth-child('+vip+')';let jihao=[jihao1];for(var i=0;i<jihao.length;i++){if(exist(jihao[i])){exist(jihao[i]).firstElementChild.click()}}function exist(jihao){if(document.querySelector(jihao)){return document.querySelector(jihao)}else{return false}}};setTimeout(zddj,2345);}else{}})();
}},5);return false;}else{}});
///* ! -------------------------------------------------------------------谷歌翻译------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-gu-jjjxxxbbb").addEventListener("click",function(){if(document.querySelector("#google_translate_element")){}else{var script=document.createElement('script');script.src='https://news.yujianweb.cn/js/translate/element.js';document.getElementsByTagName('head')[0].appendChild(script);var google_translate_element=document.createElement('div');google_translate_element.id='google_translate_element';google_translate_element.style='font-size:16px;position:fixed;bottom:66px;right:0;cursor:pointer;z-index:999999;text-align:center;border-radius:10px;cursor:pointer;padding:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);font-family:Georgia;text-shadow:transparent 0 0 0;font-weight:bolder';document.documentElement.appendChild(google_translate_element);script=document.createElement('script');script.innerHTML="function googleTranslateElementInit(){new google.translate.TranslateElement({layout:google.translate.TranslateElement.InlineLayout.SIMPLE,multilanguagePage:true,pageLanguage:'auto',includedLanguages:'zh-CN,zh-TW'},'google_translate_element');}";document.getElementsByTagName('head')[0].appendChild(script)}});
///* ! -------------------------------------------------------------------万能工具------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-wan-jjjxxxbbb").addEventListener("click",function(){window.open("https://wn.run/f/#"+document.location.href,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,left="+(screen.availWidth-1100)/2+",top="+(screen.availHeight-600)/2)});
///* ! -------------------------------------------------------------------网页编辑------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-bian-jjjxxxbbb").addEventListener("click",function(){document.body.contentEditable='true';document.designMode='on'});
///* ! -------------------------------------------------------------------网页调试------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-tiao-jjjxxxbbb").addEventListener("click",function(){var tiaojjjxxxbbbObj=document.getElementById("div.eruda-entry-btn");if(tiaojjjxxxbbbObj){tiaojjjxxxbbbObj.style.display="block"}else{var element=document.createElement('script');element.id='div.eruda-entry-btn';(function(){var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/eruda';document.body.appendChild(script);script.onload=function(){eruda.init()}})()}});
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
};};
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
};
}catch(err){return false;};
//}catch(e){window.requestAnimationFrame(shoujianniugongjuxiang);};
})();