var Mods = require('/modules');
var $$ = require(Mods.styles);

var MyFooter = require(Mods.footer);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	var menu = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Instrucciones';
	menu.add(textHeader);
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	
	menu.add(back);
	
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	
	var data = new Object();
	
	data.title = 'Instrucciones';
	data.texto = '1) El icono con la flecha dirección a la izquierda le llevará directamente a la pantalla anterior.\r\r2) El icono de la casa, le llevará de nuevo a la ventana inicial de la finca seleccionada.\r\r3) El icono de la chincheta, le llevará al mapa estático de la finca donde podrá encontrar los puntos de interés de la finca seleccionada. Pulsando sobre el botón “Ver POIs” dentro de esta sección accederá al mapa interactivo donde podrá navegar entre los distintos POIs y acceder a la información asociada a cada uno de ellos.\r\r4) El icono del monumento le llevará a la sección de “Guía de Entorno” donde podrá encontrar información de la zona donde se ubica la finca: Costumbres, gastronomía, etc…\r\r5) El icono de la fotografía le llevará a la “Galería Fotográfica” de la finca en la que se encuentre. Cada finca cuenta con su propia galería. Usted podrá ampliar las distintas miniaturas simplemente pulsándolas.\r\r6) El icono del martillo le llevará a la sección “Marco Jurídico”, donde encontrará información legal asociada a la comunidad autónoma donde se encuentra albergada la finca.\r\r7) Pulsando sobre el icono “Tour” accederá al tour virtual de la finca, donde podrá acceder al mapa interactivo de los distintos hitos que componen la ruta, así como a su información y audios.';
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data.title;
	title.top = 10;
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data.texto;
	text.top = 30;
	text.left = 20;
	text.right = 20;
	
	view.add(title);
	view.add(Ti.UI.createImageView({
		image:'ui/images/botones.jpg',
		width:300,
		height:55.31,
		top:30
	}));
	view.add(text);
	
	win.add(view);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}
