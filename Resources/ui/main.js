
var MyFinca = require(Mods.finca);

MyFooter = require(Mods.footer);

MyData = require(Mods.data);
data = MyData.bbdd;

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
	tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
	win.add(tableView);
	
	var view = Ti.UI.createTableViewRow({
		backgroundColor:'transparent',
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		height:20
	});
	
	tableView.appendRow(view);
	
	for (i in data) {
		
		var view = Ti.UI.createTableViewRow({
			backgroundColor:'transparent',
			selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
		});
		
		tableView.appendRow(view);
		
		var btn = Ti.UI.createButton({
			width:310,
			top:1,
			height:60,
			backgroundImage:'ui/images/fondo_boton.png',
			_i:i
		});
		
		var title = Ti.UI.createLabel({
			text:data[i].name,
			font:{fontFamily:'Georgia', fontSize:20},
			color:'white',
			top:5,
			left:60
		});
		var text = Ti.UI.createLabel({
			text:data[i].description,
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
			
			new MyFinca(e.source._i).open({left:0});
			
		});
		
	}
	
	return win;
	
}
