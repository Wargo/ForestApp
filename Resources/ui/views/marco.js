var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

module.exports = function(current) {
	
	var view = Ti.UI.createWebView($$.view);
	view.opacity = 0;
	view.url = data[current].marco;
	view.backgroundColor = '#2000';
	
	return view;
	
}
