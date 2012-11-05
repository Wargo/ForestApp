
var MyGallery = require(Mods.gallery);

var MyCrop = require(Mods.crop);

module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'gallery';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	var scrollView = Ti.UI.createScrollView({
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		top:45,
		bottom:19
	});
	
	var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	
	var columns = 3;
	var basicLeft = 10;
	var basicTop = 10;
	var width = 94;
	var height = 70;
	var spaceh = width + 10;
	var spacev = height + 10;
	var rows = 0;

	var arrayImages = [];
	
	setTimeout(function() {
		setData(images);
	}, 100);
	
	function setData(images) {

		for (i in images) {
			
			var loading = Ti.UI.createActivityIndicator();
			
			arrayImages.push('ui/images/gallery/imagen_ejemplo1.jpg');
			
			if (i % columns === 0) {
				rows ++;
			}
			
			left = basicLeft + (i % columns) * spaceh;
			top = basicTop + (rows - 1) * spacev;
			
			var image = Ti.UI.createImageView({
				image:'ui/images/gallery/imagen_ejemplo1.jpg',
				left:left,
				top:top,
				width:width,
				height:height,
				_i:i
			});
			
			image.add(loading);
			loading.show();
			
			image = MyCrop(image, image.image, width, null, 5, false, loading);
			
			scrollView.add(image);
			
			image.addEventListener('singletap', function(e) {
				
				MyGallery(arrayImages, e.source._i);
				
			});
			
		}
		
	}
	
	win.add(scrollView);
	
	return win;
	
}
