
(function() {
	
	var Mods = require('/modules');
	
	var $$ = require(Mods.styles);
	
	var MyWindow = require(Mods.home);
	
	setTimeout(function() {
		new MyWindow().open({left:0});
	}, 3000);
			
	Ti.App.addEventListener('openURL', function(e){
	    Ti.Platform.openURL(e.url);
	});
	
})();
