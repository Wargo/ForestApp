
var MyFinca = require(Mods.finca);

module.exports = function(win, current) {
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45,
		layout:'horizontal'
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	
	view.add(back);
	
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	
	var start = Ti.UI.createButton($$.menuButton);
	start.image = 'ui/images/arrow.png';
	
	view.add(start);
	
	start.addEventListener('click', function() {
		new MyFinca(current).open({left:0});
	});
	
	return view;
	
}
