
MyImages = require(Mods.images);
MyGPS = require(Mods.gps);
MyMap = require(Mods.map);
MyGuia = require(Mods.guia);
MyMarco = require(Mods.marco);
MyHito = require(Mods.hito);

MyMenu = require(Mods.menu);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'home';
	win.width = win.left = 320;
	
	var menu = MyMenu(win, null, current);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	var map = Ti.Map.createView({
		top:45,
		bottom:19,
		userLocation:true,
		region:{latitude:39.5, longitude:-0.5, latitudeDelta:0.03, longitudeDelta:0.03},
		mapType:Ti.Map.SATELLITE_TYPE
	});
	
	var hitos = data[current].hitos;
	
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
	
		map.addAnnotation(annotation);
		
		annotation.addEventListener('click', function(e) {
			if (e.clicksource == 'leftButton') {
				if(parseFloat(Titanium.Platform.version) >= 6) {
					//Ti.Platform.openURL('Maps://http://maps.apple.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				} else {
					//Ti.Platform.openURL('Maps://http://maps.google.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				}
			} else if (e.clicksource == 'title' || e.clicksource == 'subtitle') {
				MyHito(win, current, e.source._i).open();
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(map);
	
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
