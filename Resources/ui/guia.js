
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'guia';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}
