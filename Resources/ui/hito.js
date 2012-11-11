
var MySound = require(Mods.sound);

module.exports = function(home, x, y) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'hito';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	view.bottom = 51;
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data[x].hitos[y].title;
	title.top = 10;
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data[x].hitos[y].longtext;
	text.top = 30;
	text.left = 20;
	text.right = 20;
	
	view.add(title);
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
