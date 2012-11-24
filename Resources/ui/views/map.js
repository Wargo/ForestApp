
var MyAmplify = require(Mods.amplify);

module.exports = function(current) {
	
	var view = Ti.UI.createView({
		opacity:0,
		layout:'vertical'
	});
	
	//var win = Ti.UI.createWindow($$.win);
	//win._current = 'map';
	
	//var menu = MyMenu(win, home);
	//win.add(menu);
	
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale: 10,
	    minZoomScale: 1,
	    zoomScale: 1,
	    top:60,
	    //bottom:19 + 10,
	    height:200,
	    left:10,
	    right:10,
	    borderColor:'#CCC',
	    borderWidth:1,
	    borderRadius:10,
	    backgroundColor:'#5000'
	});
	
	//win.add(scrollView);
	
	//var footer = MyFooter();
	//win.add(footer);
	
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
	
	image.addEventListener('singletap', function() {
		MyAmplify(image.image);
	});
	
	var button = Ti.UI.createButtonBar({
		labels:['Ver POIs'],
		style:Ti.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor:'brown',
		top:10
	});
	button.addEventListener('click', function() {
		MyPOIS(current).open({left:0});
	});
	
	var textView = Ti.UI.createScrollView($$.view);
	textView.contentHeight = 'auto';
	textView.showVerticalScrollIndicator = true;
	textView.top = 10;
	
	var text = Ti.UI.createLabel($$.text);
	text.top = text.left = text.right = 20;
	text.text = data[current].staticMapText;
	
	textView.add(text);
	
	view.add(scrollView);
	view.add(button);
	view.add(textView);
	
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
	
	return view;
	
	//return win;
	
}