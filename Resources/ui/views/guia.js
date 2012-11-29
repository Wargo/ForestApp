var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

module.exports = function(current) {
	
	var view = Ti.UI.createScrollView($$.view);
	view.opacity = 0;
	view.layout = 'vertical';
	
	var scrollableView = Ti.UI.createScrollableView({
		left:10,
		right:10,
		top:10,
		showPagingControl:true,
		height:230,
		cacheSize:1,
		borderColor:'#CCC',
		borderWidth:1,
		backgroundColor:'#8000'
	});
	
	var images = data[current].guiaImages;
	for (i in images) {
		var l = Ti.UI.createActivityIndicator();
		var img = Ti.UI.createImageView({
			image:images[i].url,
			_loading:l
		});
		img.add(l);
		l.show();
		img.addEventListener('load', function(e) {
			e.source._loading.hide();
		});
		scrollableView.addView(img);
	}
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data[current].guiaText
	text.top = 10;
	text.left = 20;
	text.right = 20;
	
	view.add(scrollableView);
	view.add(text);
	
	return view;
	
}
