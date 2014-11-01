module.exports = toggleFullScreen;


// Add contextual menu. HTML5 is the <3
var menu = document.createElement('menu');
var item = document.createElement('menuitem');
menu.setAttribute('id', 'fsmenu');
menu.setAttribute('type', 'context');
item.setAttribute('label', 'Fullscreen');
item.addEventListener('click', toggleFullScreen);
menu.appendChild(item);
document.body.appendChild(menu);
document.body.setAttribute('contextmenu', 'fsmenu');

function toggleFullScreen(element) {

	var requestFS = document.body.requestFullScreen ||
		document.body.mozRequestFullScreen ||
		document.body.webkitRequestFullScreen;

	var cancelFS = document.body.cancelFullScreen ||
		document.mozCancelFullScreen ||
		document.webkitCancelFullScreen;

	var fs = window.fullScreen ||
		document.fullscreenElement ||
		document.mozFullScreenElement ||
		document.webkitFullscreenElement;

	if(fs) {
		cancelFS.call(document);
	} else {
		requestFS.call(document.body, Element.ALLOW_KEYBOARD_INPUT);
	}

}
