
var MyFinca = require(Mods.finca);

module.exports = function(win, current) {
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	view.add(back);
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	
	var info = Ti.UI.createButton($$.menuButton);
	info.image = 'ui/images/menu/guia_entorno.png';
	info.left = 55;
	info.enabled = false;
	view.add(info);
	info.addEventListener('click', function() {
		map.opacity = 0;
		tableView.opacity = 1;
		info.enabled = false;
		mapButton.enabled = true;
	});
	
	var mapButton = Ti.UI.createButton($$.menuButton);
	mapButton.image = 'ui/images/menu/ubicacion_gps.png';
	mapButton.left = 90;
	view.add(mapButton);
	mapButton.addEventListener('click', function() {
		tableView.opacity = 0;
		map.opacity = 1;
		info.enabled = true;
		mapButton.enabled = false;
	});
	
	var start = Ti.UI.createImageView({
		image:'ui/images/arrow.png',
		width:32,
		height:32,
		right:0
	});
	
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Iniciar tour';
	textHeader.left = 0;
	
	var startButton = Ti.UI.createButton({
		backgroundImage:'none',
		right:5,
		width:125
	});
	
	startButton.add(textHeader);
	startButton.add(start);
	
	view.add(startButton);
	
	startButton.addEventListener('click', function() {
		new MyFinca(current).open({left:0});
	});
	
	return view;
	
}
