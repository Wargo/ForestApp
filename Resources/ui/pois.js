
var MyPOI = require(Mods.poi);

module.exports = function(current) {
	
	mapView = Ti.UI.createView({
		opacity:0
	});
	
	headerText = Ti.UI.createLabel($$.textTitle);
	headerText.top = 55;
	headerText.left = 10;
	headerText.right = 10;
	headerText.textAlign = 'center';
	headerText.text = 'Selecciona el punto de interés y accede a él pinchando en su nombre';
	
	map = Ti.Map.createView({
		top:45 + 60,
		bottom:19 + 10,
		left:10,
		right:10,
		borderColor:'#CCC',
		borderWidth:1,
		borderRadius:10,
		userLocation:true,
		region:{latitude:data[current].poisCenterLat, longitude:data[current].poisCenterLng, latitudeDelta:data[current].zoom, longitudeDelta:data[current].zoom},
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
	
		map.addAnnotation(annotation);
		
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
				MyPOI(current, e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	return mapView;
	
}