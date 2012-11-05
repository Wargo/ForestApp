
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'gps';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	var map = Ti.Map.createView({
		top:45,
		bottom:19,
		userLocation:true,
		region:{latitude:39.5, longitude:-0.5, latitudeDelta:0.02, longitudeDelta:0.02}
	});
	
	var hitos = [
		{title:'Nombre Hito', text:'Descripción breve del hito', lat:39.51, lng:-0.51, image:'ui/images/gallery/imagen_ejemplo1.jpg'},
		{title:'Nombre Hito', text:'Descripción breve del hito', lat:39.49, lng:-0.50, image:'ui/images/gallery/imagen_ejemplo1.jpg'},
		{title:'Nombre Hito', text:'Descripción breve del hito', lat:39.50, lng:-0.49, image:'ui/images/gallery/imagen_ejemplo1.jpg'},
		{title:'Nombre Hito', text:'Descripción breve del hito', lat:39.51, lng:-0.49, image:'ui/images/gallery/imagen_ejemplo1.jpg'},
		{title:'Nombre Hito', text:'Descripción breve del hito', lat:39.50, lng:-0.50, image:'ui/images/gallery/imagen_ejemplo1.jpg'},
	];
	
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
			})
		});
	
		map.addAnnotation(annotation);
		
		annotation.addEventListener('click', function(e) {
			if (e.clicksource == 'leftButton') {
				if(parseFloat(Titanium.Platform.version) >= 6) {
					Ti.Platform.openURL('Maps://http://maps.apple.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude); //daddr
				} else {
					Ti.Platform.openURL('Maps://http://maps.google.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				}
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(map);
	
	return win;
	
}
