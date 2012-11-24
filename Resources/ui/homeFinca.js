
var MyMiniMenu = require(Mods.minimenu);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	tableView = Ti.UI.createTableView($$.view);
	tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
	
	var auxRow = Ti.UI.createTableViewRow({
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		backgroundColor:'transparent',
		layout:'vertical'
	});
	
	tableView.appendRow(auxRow);
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data[current].poisTitle;
	title.top = 10;
	
	var image = Ti.UI.createImageView({
		image:data[current].poisImage,
		left:10,
		right:10,
		top:10,
		width:280,
		height:210,
		borderColor:'#FFF',
		borderWidth:1
	});
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data[current].poisText;
	text.top = 10;
	text.left = 20;
	text.right = 20;
	
	var firma = Ti.UI.createLabel($$.text);
	firma.text = data[current].poisFirma;
	firma.top = 20;
	firma.left = 20;
	firma.right = 20;
	firma.textAlign = 'center';
	
	auxRow.add(title);
	auxRow.add(image);
	auxRow.add(text);
	auxRow.add(firma);
	
	win.add(tableView);
	
	var menu = MyMiniMenu(win, current);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}