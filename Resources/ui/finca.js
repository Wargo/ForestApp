
MyImages = require(Mods.images);
MyGPS = require(Mods.gps);
MyMap = require(Mods.map);
MyGuia = require(Mods.guia);
MyMarco = require(Mods.marco);
MyHito = require(Mods.hito);

MyMenu = require(Mods.menu);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'home';
	win.width = win.left = 320;
	
	var menu = MyMenu(win);
	win.add(menu);
	
	var scrollView = Ti.UI.createScrollView({
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		top:45
	});
	
	var hitos = [1, 2, 3, 4, 5, 6, 7, 8];
	
	var columns = 3;
	var basicLeft = 30;
	var basicTop = 30;
	var width = 60;
	var space = width + 40;
	var rows = 0;

	for (i in hitos) {
		
		if (i % columns === 0) {
			rows ++;
		}
		
		left = basicLeft + (i % columns) * space;
		top = basicTop + (rows - 1) * space;
		
		var button = Ti.UI.createButton({
			backgroundImage:'ui/images/hitos/boton_hito_' + (parseInt(i) + 1) + '.png',
			left:left,
			top:top,
			width:width,
			height:width,
			_i:i
		});
		
		scrollView.add(button);
		
		button.addEventListener('click', function(e) {
			
			MyHito(win).open();
			
		});
		
	}
	
	win.add(scrollView);
	
	return win;
	
}
