// ==UserScript==
// @name           Etherpad authorship clear keybinding
// @description    Clears authorship by pressing Ctrl+M for Etherpad-based services
// @version        0.1
// @grant          none
// @include        http://piratenpad.de/*
// @include        http://*.piratenpad.de/*
// @include        https://piratenpad.de/*
// @include        https://*.piratenpad.de/*
// @include        http://piratepad.net/*
// @include        http://*.piratepad.net/*
// @include        http://titanpad.com/*
// @include        http://*.titanpad.com/*
// @include        https://etherpad.mozilla.org/*
// @include        https://*.etherpad.mozilla.org/*
// @include        http://*ponypad*.*/*
// ==/UserScript==

(function() {
	if(!document.querySelector || !document.querySelector('#padpage #padmain'))
		return;
	var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome')>=0;
	var isOpera = navigator.userAgent.toLowerCase().indexOf('opera')>=0;
	var isSafari = navigator.userAgent.toLowerCase().indexOf('safari')>=0;
	if(isChrome) {
		var script = document.createElement('script');
		script.setAttribute('type','text/javascript');
		script.textContent = '('+main.toString()+')();';
		document.head.appendChild(script);
	}
	else if(isSafari) {
		window.addEventListener('load', function() {
			var script = document.createElement('script');
			script.textContent = '('+main.toString()+')();';
			document.head.appendChild(script);
		}, false);
	}
	else
		main();
	function main() {
		window.padeditor.ace.setOnKeyDown (function(evt) {
			if(evt.ctrlKey && String.fromCharCode (evt.which).toLowerCase() == "m")
				window.padeditor.ace.execCommand ('clearauthorship', true);
		});
	}
})();
