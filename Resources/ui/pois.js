
var MyMiniMenu = require(Mods.minimenu);

var MyPOI = require(Mods.poi);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	var menu = MyMiniMenu(win, current);
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
	
	var hitos = data[current].pois;
	
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
				MyPOI(win, current, e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(map);
	
	return win;
	
}