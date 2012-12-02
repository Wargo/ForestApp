
(function() {
	
	var Mods = require('/modules');
	
	var MyWindow = require(Mods.home);
	
	setTimeout(function() {
		new MyWindow().open({left:0});
	}, 3000);
			
})();
