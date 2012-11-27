
MyHito = require(Mods.hito);

//MyMap2 = require(Mods.map2);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.width = win.left = 320;
	
	mapView = Ti.UI.createView({
		top:50,
		bottom:19
	});
	
	//var staticMapView = MyMap2(current);
	//win.add(staticMapView);
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	win.add(header);
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	header.add(back);
	back.addEventListener('click', function() {
		win.close({left:320})
	});
	/*
	var mapButton = Ti.UI.createButton($$.menuButton);
	mapButton.left = 50;
	mapButton.enabled = false;
	mapButton.image = 'ui/images/menu/mapa_estatico.png';
	header.add(mapButton);
	mapButton.addEventListener('click', function() {
		mapView.animate({opacity:1});
		staticMapView.opacity = 0;
		mapButton.enabled = false;
		staticMap.enabled = true;
	});
	
	var staticMap = Ti.UI.createButton($$.menuButton);
	staticMap.left = 90;
	staticMap.image = 'ui/images/menu/ubicacion_gps.png';
	header.add(staticMap);
	staticMap.addEventListener('click', function() {
		staticMapView.animate({opacity:1});
		mapView.opacity = 0;
		mapButton.enabled = true;
		staticMap.enabled = false;
	});
	*/
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = 'Tour';
	//header.add(title);
	
	var footer = MyFooter();
	win.add(footer);
	
	var headerText = Ti.UI.createLabel($$.textTitle);
	headerText.top = 5;
	headerText.textAlign = 'center';
	headerText.text = 'Selecciona el hito y pincha en su nombre para acceder a él';
	
	var map = Ti.Map.createView({
		top:60,
		bottom:10,
		left:10,
		right:10,
		borderColor:'#CCC',
		borderWidth:1,
		borderRadius:10,
		userLocation:true,
		region:{latitude:data[current].lat, longitude:data[current].lng, latitudeDelta:0.02, longitudeDelta:0.02},
		mapType:Ti.Map.SATELLITE_TYPE
	});
	
	var satellite = Ti.UI.createButtonBar({
		labels:['Satélite', 'Mapa'],
		bottom:10,
		right:10,
		style:Ti.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor:'#AB8636'
	});
	
	satellite.addEventListener('click', function(e) {
		switch (e.index) {
			case 0:
				map.mapType = Ti.Map.SATELLITE_TYPE;
				break;
			case 1:
				map.mapType = Ti.Map.TERRAIN_TYPE;
				break;
		}
	});
	
	map.add(satellite);
	
	var hitos = data[current].hitos;
	
	var annotations = [];
	
	for (i in hitos) {
	
		var annotation = Ti.Map.createAnnotation({
			title:hitos[i].title,
			subtitle:hitos[i].text,
			pincolor:Ti.Map.ANNOTATION_PURPLE,
			latitude:hitos[i].lat,
			longitude:hitos[i].lng,
			animate:true,
			leftButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT,
			rightView:Ti.UI.createImageView({
				image:hitos[i].image,
				height:30,
				width:80
			}),
			_i:i
		});
	
		//map.addAnnotation(annotation);
		
		annotations.push(annotation);
		
		annotation.addEventListener('click', function(e) {
			if (e.clicksource == 'leftButton') {
				if(parseFloat(Titanium.Platform.version) >= 6) {
					Ti.Platform.openURL('Maps://http://maps.apple.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				} else {
					Ti.Platform.openURL('Maps://http://maps.google.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				}
			} else if (e.clicksource == 'title' || e.clicksource == 'subtitle') {
				MyHito(current, e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	mapView.add(headerText);
	mapView.add(map);
	
	win.add(mapView);
	
	win.addEventListener('open', function() {
		map.annotations = annotations;
	});
	
	/*

	var hitos = [1, 2, 3, 4, 5, 6, 7, 8];

	var scrollView = Ti.UI.createScrollView({
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		top:45,
		bottom:19
	});
	
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
	
	*/
	
	return win;
	
}
