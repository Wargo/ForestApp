
(function() {
	
	Mods = require('/modules');
	
	$$ = require(Mods.styles);
	
	var MyWindow = require(Mods.home);
	
	new MyWindow().open({left:0});
	
})();
