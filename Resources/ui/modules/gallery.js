
module.exports = function(images, pos) {
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#000',
		opacity:0,
		//fullscreen:true,
		orientationModes:[
			Titanium.UI.PORTRAIT,
			//Titanium.UI.UPSIDE_PORTRAIT,
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT
		]
	});
	
	var scrollableView = Ti.UI.createScrollableView({
		showPagingControl:true,
		cacheSize:999
	});
	
	win.addEventListener('singletap', function() {
		win.close({opacity:0});
	});
	
	setTimeout(function() {
		setImages();
	}, 200);
	
	var loading = Ti.UI.createActivityIndicator();
	win.add(loading);
	loading.show();
	
	function setImages() {
		
		for (i in images) {
			
			var scrollView = Ti.UI.createScrollView({
				maxZoomScale: 10,
			    minZoomScale: 1,
			    zoomScale: 1
			});
			
			var image = Ti.UI.createImageView({
				image:images[i],
				height:'100%',
				width:'100%',
				_loading:loading
			});
	
			scrollView.add(image);
			
			image.addEventListener('load', function(e) {
				e.source._loading.hide();
			});
			
			scrollableView.addView(scrollView);
			
		}
		
		scrollableView.currentPage = pos;
		win.add(scrollableView);
		
	}
	
	win.open({opacity:1});
	
}
