
module.exports = function(src) {
	
	if (Ti.Platform.osname === 'android') {
		
		var win = Ti.UI.createWindow({
			backgroundColor:'#000',
			exitOnClose:false,
			fullscreen:true,
			navBarHidden:true,
			modal:true
		});
		
	} else {
		
		var win = Ti.UI.createWindow({
			backgroundColor:'#000',
			opacity:0,
			//fullscreen:true
			orientationModes:[
				Titanium.UI.PORTRAIT,
				//Titanium.UI.UPSIDE_PORTRAIT,
				Titanium.UI.LANDSCAPE_LEFT,
				Titanium.UI.LANDSCAPE_RIGHT
			]
		});
		
		win.addEventListener('singletap', function() {
			win.close({opacity:0});
		});
		
	}
	
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale: 10,
	    minZoomScale: 1,
	    zoomScale: 1
	});
	
	win.add(scrollView);
	
	var image = Ti.UI.createImageView({
		image:src,
		height:'100%',
		defaultImage:'none'
	});
	
	var loading = Ti.UI.createActivityIndicator();
	win.add(loading);
	
	win.addEventListener('open', function() {
		loading.show();
	});
	
	image.addEventListener('load', function() {
		loading.hide();
	});
	
	if (Ti.Platform.osname != 'android') {
		image.width = '100%';
	}
	
	win.open({opacity:1}, function() {
		scrollView.add(image);
	});
	
	
	
}
