// ==UserScript==
// @name           Etherpad Notifications
// @description    Chat notifications for Etherpad-based services
// @version        0.5
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

function addJQuery(callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
}

addJQuery(function() {
	if(jQ('#b').length > 0) {
		jQ('#b').remove();
		$('#padpage').attr('style', '');
	}
});
