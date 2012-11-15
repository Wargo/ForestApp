
var current = null;

module.exports = function(win, parent, c) {
	
	if (c) {
		current = c;
	}
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45,
		layout:'horizontal'
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	if (!win) {
		back.enabled = false;
	}
	
	var home = Ti.UI.createButton($$.menuButton);
	home.image = 'ui/images/menu/inicio_tour.png';
	if (win._current == 'home') {
		home.enabled = false;
	}
	
	var gps = Ti.UI.createButton($$.menuButton);
	gps.image = 'ui/images/menu/ubicacion_gps.png';
	if (win._current == 'gps') {
		gps.enabled = false;
	}
	
	var staticMap = Ti.UI.createButton($$.menuButton);
	staticMap.image = 'ui/images/menu/mapa_estatico.png';
	if (win._current == 'map') {
		staticMap.enabled = false;
	}
	
	var guia = Ti.UI.createButton($$.menuButton);
	guia.image = 'ui/images/menu/guia_entorno.png';
	if (win._current == 'guia') {
		guia.enabled = false;
	}
	
	var gallery = Ti.UI.createButton($$.menuButton);
	gallery.image = 'ui/images/menu/galeria.png';
	if (win._current == 'gallery') {
		gallery.enabled = false;
	}
	
	var marco = Ti.UI.createButton($$.menuButton);
	marco.image = 'ui/images/menu/marco_juridico.png';
	if (win._current == 'marco') {
		marco.enabled = false;
	}
	
	view.add(back);
	view.add(home);
	//view.add(gps);
	view.add(staticMap);
	view.add(guia);
	view.add(gallery);
	view.add(marco);
	
	back.addEventListener('click', function() {
		win.close({left:320});
		if (parent) {
			parent.close();
		}
	});
	
	home.addEventListener('click', function() {
		win.close();
	});
	
	gps.addEventListener('click', function() {
		
		if (parent) {
			MyGPS(parent).open();
			win.close();
		} else {
			MyGPS(win).open();
		}
		
	});
	
	staticMap.addEventListener('click', function() {
		if (parent) {
			MyMap(parent, current).open();
			win.close();
		} else {
			MyMap(win, current).open();
		}
	});
	
	guia.addEventListener('click', function() {
		if (parent) {
			MyGuia(parent).open();
			win.close();
		} else {
			MyGuia(win).open();
		}
	});

	gallery.addEventListener('click', function() {
		if (parent) {
			MyImages(parent, current).open();
			win.close();
		} else {
			MyImages(win, current).open();
		}
	});
	
	marco.addEventListener('click', function() {
		if (parent) {
			MyMarco(parent).open();
			win.close();
		} else {
			MyMarco(win).open();
		}
	});
	
	return view;
	
}
