var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

var MyAmplify = require(Mods.amplify);
var MyFinca = require(Mods.finca);
var MyWeb = require(Mods.web);
var MyFooter = require(Mods.footer);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.width = win.left = 320;
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	win.add(header);
	
	var footer = MyFooter();
	win.add(footer);
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	header.add(back);
	back.addEventListener('click', function() {
		win.close({left:320})
	});
	
	var view = Ti.UI.createView({
		top:50,
		bottom:19,
		layout:'vertical'
	});
	
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale: 10,
	    minZoomScale: 1,
	    zoomScale: 1,
	    top:10,
	    height:200,
	    left:10,
	    right:10,
	    borderColor:'#CCC',
	    borderWidth:1,
	    borderRadius:10,
	    backgroundColor:'#5000'
	});
	
	var image = Ti.UI.createImageView({
		image:data[current].staticMap2,
		width:'110%',
		height:'110%'
	});
	
	scrollView.add(image);
	
	image.addEventListener('singletap', function() {
		MyAmplify(image.image);
	});
	
	var button = Ti.UI.createButtonBar({
		labels:['Abrir en Wikiloc', 'Mapa interactivo'],
		style:Ti.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor:'brown',
		top:10
	});
	button.addEventListener('click', function(e) {
		if (e.index == 0) {
			//Ti.Platform.openURL(data[current].url);
			new MyWeb(data[current].url).open({top:0});
		} else {
			new MyFinca(current).open({left:0});
		}
	});
	
	var textView = Ti.UI.createScrollView($$.view);
	textView.contentHeight = 'auto';
	textView.showVerticalScrollIndicator = true;
	textView.top = 10;
	textView.bottom = 10;
	
	var text = Ti.UI.createLabel($$.text);
	text.top = text.left = text.right = 20;
	text.text = data[current].staticMapText2;
	
	textView.add(text);
	
	view.add(scrollView);
	view.add(button);
	view.add(textView);
	
	win.add(view);
	
	return win;
	
}