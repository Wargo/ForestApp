
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'gps';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var map = Ti.Map.createView({
		top:45,
		userLocation:false,
		region:{latitude:39.5, longitude:-0.5, latitudeDelta:0.02, longitudeDelta:0.02}
	});
	
	var annotation = Ti.Map.createAnnotation({
		title:'hola',
		subtitle:'adios',
		pincolor:Ti.Map.ANNOTATION_PURPLE,
		latitude:39.5,
		longitude:-0.5,
		animate:true,
		leftButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT
	});
	
	map.addAnnotation(annotation);
	
	annotation.addEventListener('click', function(e) {
		if (e.clicksource == 'leftButton') {
		} else if (e.clicksource == 'pin') {
		}
	});
	
	win.add(map);
	
	return win;
	
}
