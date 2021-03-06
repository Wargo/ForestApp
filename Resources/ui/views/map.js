var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

var MyAmplify = require(Mods.amplify);
var MyPOIS = require(Mods.pois);

module.exports = function(current) {
	
	var view = Ti.UI.createView({
		opacity:0,
		layout:'vertical'
	});
	
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale: 10,
	    minZoomScale: 1,
	    zoomScale: 1,
	    top:60,
	    height:200,
	    left:10,
	    right:10,
	    borderColor:'#CCC',
	    borderWidth:1,
	    borderRadius:10,
	    backgroundColor:'#5000'
	});
	
	var image = Ti.UI.createImageView({
		image:data[current].staticMap,
		width:'110%',
		height:'110%'
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
		new MyPOIS(current).open({left:0});
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
	
	return view;
	
}