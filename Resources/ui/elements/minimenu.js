
var MyFinca = require(Mods.finca);

MyGuia = require(Mods.guia);
MyGallery = require(Mods.images);
MyMarco = require(Mods.marco);
MyPOIS = require(Mods.pois);
MyMap = require(Mods.map);

module.exports = function(win, current) {
	
	var guiaView = MyGuia(current);
	win.add(guiaView);
	var galleryView = MyGallery(current);
	win.add(galleryView);
	var marcoView = MyMarco(current);
	win.add(marcoView);
	var mapView = MyPOIS(current);
	win.add(mapView);
	var staticMapView = MyMap(current);
	win.add(staticMapView);
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45,
		layout:'horizontal'
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;

	back.addEventListener('click', function() {
		win.close({left:320});
	});
	
	var info = Ti.UI.createButton($$.menuButton);
	info.image = 'ui/images/menu/inicio_tour.png';
	info.enabled = false;
	
	info.addEventListener('click', function(e) {
		for (i in buttons) {
			buttons[i].enabled = true;
		}
		e.source.enabled = false;
		for (i in views) {
			views[i].opacity = 0;
		}
		tableView.animate({opacity:1});;
	});
	
	var mapButton = Ti.UI.createButton($$.menuButton);
	mapButton.image = 'ui/images/menu/ubicacion_gps.png';
	mapButton.addEventListener('click', function(e) {
		for (i in buttons) {
			buttons[i].enabled = true;
		}
		e.source.enabled = false;
		for (i in views) {
			views[i].opacity = 0;
		}
		staticMapView.animate({opacity:1});;
	});
	
	var guia = Ti.UI.createButton($$.menuButton);
	guia.image = 'ui/images/menu/guia_entorno.png';
	guia.addEventListener('click', function(e) {
		for (i in buttons) {
			buttons[i].enabled = true;
		}
		e.source.enabled = false;
		guiaView.animate({opacity:1});;
		for (i in views) {
			views[i].opacity = 0;
		}
		guiaView.animate({opacity:1});;
	});
	
	var gallery = Ti.UI.createButton($$.menuButton);
	gallery.image = 'ui/images/menu/galeria.png';
	gallery.addEventListener('click', function(e) {
		for (i in buttons) {
			buttons[i].enabled = true;
		}
		e.source.enabled = false;
		for (i in views) {
			views[i].opacity = 0;
		}
		galleryView.animate({opacity:1});;
	});
	
	var marco = Ti.UI.createButton($$.menuButton);
	marco.image = 'ui/images/menu/marco_juridico.png';
	marco.addEventListener('click', function(e) {
		for (i in buttons) {
			buttons[i].enabled = true;
		}
		e.source.enabled = false;
		for (i in views) {
			views[i].opacity = 0;
		}
		marcoView.animate({opacity:1});;
	});
	
	var buttons = [info, mapButton, guia, gallery, marco];
	var views = [staticMapView, tableView, guiaView, galleryView, marcoView];
	
	var start = Ti.UI.createImageView({
		image:'ui/images/arrow.png',
		width:32,
		height:32,
		right:0
	});
	
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Tour';
	textHeader.left = 0;
	
	var startButton = Ti.UI.createButton({
		backgroundImage:'none',
		left:12,
		width:68,
		top:6
	});
	
	setTimeout(function() {
		startButton.add(textHeader);
	}, 100);
	startButton.add(start);

	view.add(back);
	view.add(info);
	view.add(mapButton);
	view.add(guia);
	view.add(gallery);
	view.add(marco);
	view.add(startButton);
	
	startButton.addEventListener('click', function() {
		new MyFinca(current).open({left:0});
	});
	
	return view;
	
}
