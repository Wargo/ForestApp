
module.exports = function(home, current) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'map';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale: 10,
	    minZoomScale: 1,
	    zoomScale: 1,
	    top:50 + 10,
	    bottom:19 + 10,
	    left:10,
	    right:10,
	    borderColor:'#CCC',
	    borderWidth:1,
	    borderRadius:10,
	    backgroundColor:'#5000'
	});
	
	win.add(scrollView);
	
	var footer = MyFooter();
	win.add(footer);
	
	/*
	var tr = Ti.UI.create2DMatrix();
	tr0 = tr.rotate(0);
	tr1 = tr.rotate(90);
	tr2 = tr.rotate(180);
	tr3 = tr.rotate(270);
	*/
	
	var image = Ti.UI.createImageView({
		image:data[current].staticMap,
		width:'115%',
		height:'115%',
		//transform:tr1
	});
	
	scrollView.add(image);
	
	/*
	Ti.Gesture.addEventListener('orientationchange', function(e) {
		switch(e.orientation) {
			case 1:
				image.animate({transform:tr0});
				break;
			case 2:
				image.animate({transform:tr2});
				break;
			case 3:
				image.animate({transform:tr1});
				break;
			case 4:
				image.animate({transform:tr3});
				break;
		}		
	});
	*/
	
	return win;
	
}