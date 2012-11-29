var Mods = require('/modules');
var $$ = require(Mods.styles);

module.exports = function(url) {
	
	var win = Ti.UI.createWindow({
		top:Ti.Platform.displayCaps.platformHeight,
		height:Ti.Platform.displayCaps.platformHeight,
		backgroundColor:'#8000',
		orientationModes:[
			Titanium.UI.PORTRAIT,
			//Titanium.UI.UPSIDE_PORTRAIT,
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT
		]
	});
	
	var webView = Ti.UI.createWebView();
	webView.top = 35 + 20;
	webView.bottom = 35 + 20;
	webView.left = webView.right = 20;
	webView.url = url;
	
	win.add(webView);
	
	var loader = Ti.UI.createActivityIndicator();
	
	webView.addEventListener('load', function() {
		loader.hide();
		if (!webView.canGoBack()) {
			back.enabled = false;
		} else {
			back.enabled = true;
		}
		
		if (!webView.canGoForward()) {
			fwd.enabled = false;
		} else {
			fwd.enabled = true;
		}
	});
	
	var topBar = Ti.UI.createView({
		backgroundColor:'#000',
		height:35,
		top:20,
		right:20,
		left:20,
		borderColor:'#CCC',
		borderWidth:1
	});
	
	var close = Ti.UI.createButtonBar({
		labels:['Cerrar'],
		style:Ti.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor:'black',
		right:10
	});
	close.addEventListener('click', function(e) {
		win.close({top:500});
	});
	topBar.add(close);
	
	var bottomBar = Ti.UI.createView({
		backgroundColor:'#000',
		height:35,
		bottom:20,
		right:20,
		left:20,
		borderColor:'#CCC',
		borderWidth:1
	});
	
	win.add(bottomBar);
	win.add(topBar);
	
	bottomBar.add(loader);
	
	var back = Ti.UI.createButton({
		backgroundImage:'/ui/images/back.png',
		left:10,
		width:25,
		height:25,
		enabled:false,
		backgroundDisabledImage:'/ui/images/disabled_back.png'
	});
	var fwd = Ti.UI.createButton({
		backgroundImage:'/ui/images/fwd.png',
		left:60,
		width:25,
		height:25,
		enabled:false,
		backgroundDisabledImage:'/ui/images/disabled_fwd.png'
	});
	var reload = Ti.UI.createButton({
		backgroundImage:'/ui/images/reload_web.png',
		//right:10,
		left:60,
		width:25,
		height:25
	});
	var out = Ti.UI.createButton({
		backgroundImage:'/ui/images/out.png',
		right:10,
		width:25,
		height:25,
		opacity:0.8
	});
	
	bottomBar.add(back);
	//bottomBar.add(fwd);
	bottomBar.add(reload);
	bottomBar.add(out);
	
	back.addEventListener('click', function() {
		if (webView.canGoBack()) {
			webView.goBack();
		}
	});
	fwd.addEventListener('click', function() {
		if (webView.canGoForward()) {
			webView.goForward();
		}
	});
	reload.addEventListener('click', function() {
		webView.reload();
	});
	
	out.addEventListener('click', function() {
		Ti.Platform.openURL(webView.url);
	});
	
	webView.addEventListener('beforeload', function() {
		loader.show();
	});
	
	return win;
		
}
