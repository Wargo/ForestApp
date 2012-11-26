
var MySound = require(Mods.sound);

module.exports = function(x, y) {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	win.add(header);
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	header.add(back);
	back.addEventListener('click', function() {
		win.close({left:320})
	});
	
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
		borderWidth:1,
		backgroundColor:'#8000'
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
		if (data[x].hitos[y].sound) {
			new MySound(data[x].hitos[y].sound, soundView, loader);
		} else {
			loader.hide();
			var noSound = Ti.UI.createLabel($$.text);
			noSound.text = 'Sin audio adjunto';
			soundView.add(noSound);
		}
	}, 100);
	
	win.add(soundView);
	
	return win;
	
}
