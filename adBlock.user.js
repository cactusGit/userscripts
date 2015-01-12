// ==UserScript==
// @name           Piratenpad Ad Blocker
// @description    Blocks ad in header
// @version        0.1
// @grant          none
// @include        http://piratenpad.de/*
// @include        http://*.piratenpad.de/*
// @include        https://piratenpad.de/*
// @include        https://*.piratenpad.de/*
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
