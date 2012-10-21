
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'gps';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	return win;
	
}
