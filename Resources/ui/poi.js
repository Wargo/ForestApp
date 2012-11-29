var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

var MyFooter = require(Mods.footer);

module.exports = function(x, y) {
	
	var win = Ti.UI.createWindow($$.win);
	
	var menu = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45,
		layout:'horizontal'
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	
	menu.add(back);
	
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data[x].pois[y].title;
	title.top = 10;
	
	var scrollableView = Ti.UI.createScrollableView({
		left:10,
		right:10,
		top:10,
		//views:imageViews,
		showPagingControl:true,
		height:230,
		cacheSize:1,
		borderColor:'#CCC',
		borderWidth:1,
		backgroundColor:'#8000'
	});
	
	var images = data[x].pois[y].images;
	//var imageViews = [];
	for (i in images) {
		var l = Ti.UI.createActivityIndicator();
		var img = Ti.UI.createImageView({
			image:images[i].url,
			_loading:l
		});
		img.add(l);
		l.show();
		//imageViews.push(img);
		img.addEventListener('load', function(e) {
			e.source._loading.hide();
		});
		scrollableView.addView(img);
	}
	
	var text = Ti.UI.createLabel($$.text);
	text.text =  data[x].pois[y].longtext;
	text.top = 30;
	text.left = 20;
	text.right = 20;
	
	view.add(title);
	view.add(scrollableView);
	view.add(text);
	
	win.add(view);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}
