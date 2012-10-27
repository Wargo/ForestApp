
var MyFinca = require(Mods.finca);

var MyFooter = require(Mods.footer);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	
	var footer = MyFooter();
	win.add(footer);
	
	var view = Ti.UI.createScrollView($$.view);
	view.top = 10;
	
	win.add(view);
	
	sections = [
		{title:'Finca 1', img:''},
		{title:'Finca 2', img:''},
		{title:'Finca 3', img:''},
		{title:'Finca 4', img:''}
	];
	
	for (i in sections) {
		
		var btn = Ti.UI.createView({
			left:20,
			right:20,
			top:20,
			height:40,
			backgroundColor:'#6CCC'
		});
		
		btn.add(Ti.UI.createLabel({text:sections[i].title}));
		
		view.add(btn);
		
		btn.addEventListener('click', function(e) {
			
			new MyFinca().open({left:0});
			
		});
		
	}
	
	return win;
	
}
