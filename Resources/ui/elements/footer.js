
var Mods = require('/modules');
var $$ = require(Mods.styles);

module.exports = function() {
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/footer.png',
		bottom:0,
		height:19
	});
	
	var text = Ti.UI.createLabel($$.textFooter);
	text.text = 'ForestApp v1.0 2012';
	
	view.add(text);
	
	return view;
	
}
