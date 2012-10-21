
module.exports = function() {
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/footer.png',
		bottom:0,
		height:19
	});
	
	view.add(Ti.UI.createLabel($$.text));
	view.text = 'ForestApp v1.0 2012';
	
	return view;
	
}
