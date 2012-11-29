var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

module.exports = function(current) {
	
	var view = Ti.UI.createView($$.view);
	view.layout = 'none';
	view.opacity = 0;
	
	var webView = Ti.UI.createWebView();
	webView.top = 35;
	webView.url = data[current].marco;
	
	view.add(webView);
	
	var loader = Ti.UI.createActivityIndicator();
	
	webView.addEventListener('load', function() {
		loader.hide();
		if (webView.url.match(/^file:\/\//)) {
		//if (!webView.canGoBack()) {
			back.enabled = false;
			out.enabled = false;
		} else {
			back.enabled = true;
			out.enabled = true;
		}
		
		if (!webView.canGoForward()) {
			fwd.enabled = false;
		} else {
			fwd.enabled = true;
		}
	});
	
	var bottomBar = Ti.UI.createView({
		backgroundColor:'#000',
		height:35,
		top:0
	});
	
	view.add(bottomBar);
	
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
		} else if (!webView.url.match(/^file:\/\//)) {
			webView.url = data[current].marco;
			fwd.enabled = false;
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
	
	return view;
	
}
