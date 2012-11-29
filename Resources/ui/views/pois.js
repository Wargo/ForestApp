var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

var MyPOI = require(Mods.poi);
var MyFooter = require(Mods.footer);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
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
	
	var headerText = Ti.UI.createLabel($$.textHeader);
	headerText.text = 'POIs';
	
	header.add(headerText);
	
	var footer = MyFooter();
	win.add(footer);
	
	mapView = Ti.UI.createView({
		top:50,
		bottom:19
		//opacity:0
	});
	
	headerText = Ti.UI.createLabel($$.textTitle);
	headerText.top = 10; //55;
	headerText.left = 10;
	headerText.right = 10;
	headerText.textAlign = 'center';
	headerText.text = 'Selecciona el punto de interés y accede a él pinchando en su nombre';
	
	map = Ti.Map.createView({
		//top:45 + 60,
		top:10,
		//bottom:19 + 10,
		bottom:10,
		left:10,
		right:10,
		borderColor:'#CCC',
		borderWidth:1,
		borderRadius:10,
		userLocation:true,
		region:{latitude:data[current].poisCenterLat, longitude:data[current].poisCenterLng, latitudeDelta:data[current].poisZoom, longitudeDelta:data[current].poisZoom},
		mapType:Ti.Map.SATELLITE_TYPE
	});
	
	mapView.add(headerText);
	mapView.add(map);
	
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
	
	var hitos = data[current].pois;
	
	var annotations = [];
	
	for (i in hitos) {
	
		var annotation = Ti.Map.createAnnotation({
			title:hitos[i].title,
			subtitle:hitos[i].text,
			pincolor:Ti.Map.ANNOTATION_RED,
			latitude:hitos[i].lat,
			longitude:hitos[i].lng,
			animate:true,
			//leftButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT,
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
				/*
				if(parseFloat(Titanium.Platform.version) >= 6) {
					Ti.Platform.openURL('Maps://http://maps.apple.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				} else {
					Ti.Platform.openURL('Maps://http://maps.google.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				}
				*/
			} else if (e.clicksource == 'title' || e.clicksource == 'subtitle') {
				new MyPOI(current, e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(mapView);
	
	win.addEventListener('open', function() {
		map.annotations = annotations;
	})
	
	return win;
	
}