
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
	
	var text = Ti.UI.createLabel($$.text);
	text.text =  data[x].pois[y].longtext;
	text.top = 30;
	text.left = 20;
	text.right = 20;
	
	view.add(title);
	view.add(text);
	
	win.add(view);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}
