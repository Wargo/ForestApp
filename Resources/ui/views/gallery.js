var Mods = require('/modules');
var $$ = require(Mods.styles);
var MyData = require(Mods.data);
var data = MyData.bbdd;

var MyGallery = require(Mods.gallery);
var MyCrop = require(Mods.crop);

module.exports = function(current) {
	
	//var win = Ti.UI.createWindow($$.win);
	//win._current = 'gallery';
	
	//var menu = MyMenu(win, home);
	//win.add(menu);
	
	//var footer = MyFooter();
	//win.add(footer);
	
	var tableView = Ti.UI.createTableView({
		opacity:0,
		top:45,
		bottom:19,
		backgroundColor:'transparent',
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	var auxRow = Ti.UI.createTableViewRow({
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	tableView.appendRow(auxRow);
	
	var images = data[current].gallery;
	
	var columns = 3;
	var basicLeft = 10;
	var basicTop = 10;
	var width = 94;
	var height = 70;
	var spaceh = width + 10;
	var spacev = height + 10;
	var rows = 0;

	var arrayImages = [];
	
	setTimeout(function() {
		setData(images);
	}, 100);
	
	var loading = Ti.UI.createActivityIndicator();
	auxRow.add(loading);
	loading.show();
	
	function setData(images) {

		for (i in images) {
			
			arrayImages.push(images[i].image);
			
			if (i % columns === 0) {
				rows ++;
			}
			
			left = basicLeft + (i % columns) * spaceh;
			top = basicTop + (rows - 1) * spacev;
			
			var image = Ti.UI.createImageView({
				image:images[i].image,
				left:left,
				top:top,
				width:width,
				height:height,
				_i:i
			});
			
			image = MyCrop(image, images[i].name, width, height, 5, true);
			
			auxRow.add(image);
			
			image.addEventListener('singletap', function(e) {
				
				MyGallery(arrayImages, e.source._i);
				
			});
			
		}
		
		setTimeout(function() {
			loading.hide();
		}, 2000);
		
	}
	
	return tableView;
	
	//win.add(tableView);
	
	//return win;
	
}
