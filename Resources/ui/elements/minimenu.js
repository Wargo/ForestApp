
var MyFinca = require(Mods.finca);

module.exports = function(win, current) {
	
	var view = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	
	view.add(back);
	
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	
	var start = Ti.UI.createImageView({
		image:'ui/images/arrow.png',
		width:32,
		height:32
	});
	
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Iniciar tour';
	
	var startButton = Ti.UI.createButton({
		backgroundImage:'none',
		right:5,
		layout:'horizontal'
	});
	
	startButton.add(textHeader);
	startButton.add(start);
	
	view.add(startButton);
	
	startButton.addEventListener('click', function() {
		new MyFinca(current).open({left:0});
	});
	
	return view;
	
}
