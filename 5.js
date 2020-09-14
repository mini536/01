var tiaojjjxxxbbbObj = document.getElementById("tiaojjjxxxbbb");
if (tiaojjjxxxbbbObj) {
	tiaojjjxxxbbbObj.style.display = "block"
} else {
	var element = document.createElement('script');
	element.id = 'tiaojjjxxxbbb';
	element.charset = 'utf-8', element.setAttribute('src', 'https://raw.fastgit.org/logoove/weui/master/js/eruda.js?' + Date.parse(new Date()));
	document.body.appendChild(element)
};
