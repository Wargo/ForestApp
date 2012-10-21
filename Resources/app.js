
(function() {
	
	Mods = require('/modules');
	
	$$ = require(Mods.styles);
	
	var MyWindow = require(Mods.main);
	
	new MyWindow().open({left:0});
	
})();
