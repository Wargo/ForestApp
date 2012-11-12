
var MyWindow = require(Mods.main);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	//win.layout = 'vertical';
	
	var appButton = Ti.UI.createButton({
		title:'go app',
		top:50
	});
	
	var info = Ti.UI.createButton({
		title:'Información',
		top:100
	});
	
	var tutorial = Ti.UI.createButton({
		title:'Tutorial',
		top:150
	});
	
	appButton.addEventListener('click', function() {
		new MyWindow().open({left:0});
	});
	
	win.add(appButton);
	win.add(info);
	win.add(tutorial);
	
	return win;
	
}
