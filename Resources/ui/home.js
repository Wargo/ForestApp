
var Mods = require('/modules');
var $$ = require(Mods.styles);

var MyWindow = require(Mods.main);
var MyTutorial = require(Mods.tutorial);
var MyInfo = require(Mods.information);
var MyFooter = require(Mods.footer);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win.backgroundImage = 'ui/images/fondo_inicio.jpg';
	win.left = 320;
	
	var footer = MyFooter();
	footer.opacity = 0;
	win.add(footer);
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		opacity:0,
		height:45
	});
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Bienvenido a ForestApp';
	header.add(textHeader);
	win.add(header);
	
	var appButton = Ti.UI.createButton({
		backgroundImage:'ui/images/botones_inicio/boton_aplicacion.jpg',
		left:30,
		bottom:160,
		height:61,
		width:61,
		opacity:0
	});
	
	var info = Ti.UI.createButton({
		backgroundImage:'ui/images/botones_inicio/boton_info.jpg',
		bottom:160,
		height:61,
		width:61,
		opacity:0
	});
	
	var tutorial = Ti.UI.createButton({
		backgroundImage:'ui/images/botones_inicio/boton_instrucciones.jpg',
		bottom:160,
		right:30,
		height:61,
		width:61,
		opacity:0
	});
	
	appButton.addEventListener('click', function() {
		new MyWindow().open({left:0});
	});
	
	info.addEventListener('click', function() {
		new MyInfo().open({left:0});
	});
	
	tutorial.addEventListener('click', function() {
		new MyTutorial().open({left:0});
	});
	
	win.add(appButton);
	win.add(info);
	win.add(tutorial);
	
	setTimeout(function() {
		appButton.animate({opacity:1});
		info.animate({opacity:1});
		tutorial.animate({opacity:1});
		footer.animate({opacity:1});
		header.animate({opacity:1});
	}, 1000);
	
	return win;
	
}
