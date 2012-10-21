
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'guia';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	return win;
	
}
