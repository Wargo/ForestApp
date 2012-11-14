
(function() {
	
	Mods = require('/modules');
	
	$$ = require(Mods.styles);
	
	var MyWindow = require(Mods.home);
	
	new MyWindow().open({left:0});
	
			
	Ti.App.addEventListener('openURL', function(e){
	    Ti.Platform.openURL(e.url);
	});
	
})();
