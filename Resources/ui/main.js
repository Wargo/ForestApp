
var MyFinca = require(Mods.finca);

MyFooter = require(Mods.footer);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Selecciona una finca:';
	header.add(textHeader);
	header.add(Ti.UI.createImageView({
		image:'ui/images/lupa.png',
		left:45,
		width:32
	}));
	win.add(header);
	
	var footer = MyFooter();
	win.add(footer);
	
	var tableView = Ti.UI.createTableView($$.view);
	//tableView.layout = 'auto';
	tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
	win.add(tableView);
	
	var view = Ti.UI.createTableViewRow({
		layout:'vertical',
		backgroundColor:'transparent',
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	
	tableView.appendRow(view);
	
	view.add(Ti.UI.createView({height:20})); // Espacio en blanco superior
	
	sections = [
		{title:'Nombre de la finca 1', text:'Comunidad autónoma 1.'},
		{title:'Nombre de la finca 2', text:'Comunidad autónoma 2.'},
		{title:'Nombre de la finca 3', text:'Comunidad autónoma 3.'},
		{title:'Nombre de la finca 4', text:'Comunidad autónoma 4.'}
	];
	
	for (i in sections) {
		
		var btn = Ti.UI.createButton({
			width:310,
			top:1,
			height:60,
			backgroundImage:'ui/images/fondo_boton.png'
		});
		
		var title = Ti.UI.createLabel({
			text:sections[i].title,
			font:{fontFamily:'Georgia', fontSize:20},
			color:'white',
			top:5,
			left:60
		});
		var text = Ti.UI.createLabel({
			text:sections[i].text,
			font:{fontFamily:'Georgia', fontSize:14},
			color:'white',
			bottom:12,
			left:60
		});
		
		var arrow = Ti.UI.createImageView({image:'ui/images/arrow.png', width:32, height:32, right:15, top:8});
		var star = Ti.UI.createImageView({image:'ui/images/star.png', width:32, height:32, left:20, top:12});
		
		btn.add(title);
		btn.add(text);
		btn.add(arrow);
		btn.add(star);
		
		view.add(btn);
		
		btn.addEventListener('click', function(e) {
			
			new MyFinca().open({left:0});
			
		});
		
	}
	
	return win;
	
}
