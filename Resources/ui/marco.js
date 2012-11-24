
module.exports = function(current) {
	
	//var win = Ti.UI.createWindow($$.win);
	//win._current = 'marco';
	
	//var menu = MyMenu(win, home);
	//win.add(menu);

	//var view = Ti.UI.createScrollView($$.view);
	var view = Ti.UI.createWebView($$.view);
	view.opacity = 0;
	view.url = 'ui/html/mjuridico.html';
	view.backgroundColor = '#2000';
	
	var data = new Object();
	
	return view;
	
	//win.add(view);
	
	//var footer = MyFooter();
	//win.add(footer);
	
	//return win;
	
}
