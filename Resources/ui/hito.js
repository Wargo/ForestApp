
var MySound = require(Mods.sound);

module.exports = function(home, x, y) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'hito';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	view.bottom = 51;
	view.layout = 'vertical';
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data[x].hitos[y].title;
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
		borderWidth:1
	});
	
	var images = data[x].hitos[y].images;
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
	text.text = data[x].hitos[y].longtext;
	text.top = 20;
	text.left = 20;
	text.right = 20;
	
	view.add(title);
	view.add(scrollableView);
	view.add(text);
	
	win.add(view);
	
	var soundView = Ti.UI.createView({
		height:41,
		backgroundImage:'ui/images/fondo_reproductor.png',
		bottom:0,
		_win:win
	});
	
	var loader = Ti.UI.createActivityIndicator();
	soundView.add(loader);
	loader.show();

	setTimeout(function() {
		new MySound('ui/sounds/happytreefriends.mp3', soundView, loader);
	}, 100);
	
	win.add(soundView);
	
	return win;
	
}
