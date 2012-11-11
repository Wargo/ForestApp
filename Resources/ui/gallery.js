
var MyGallery = require(Mods.gallery);

var MyCrop = require(Mods.crop);

module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'gallery';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	var tableView = Ti.UI.createTableView({
		top:45,
		bottom:19,
		backgroundColor:'transparent',
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	var auxRow = Ti.UI.createTableViewRow({
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	tableView.appendRow(auxRow);
	
	var images = data[0].gallery;
	
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
	
	function setData(images) {

		for (i in images) {
			
			var loading = Ti.UI.createActivityIndicator();
			
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
			
			image.add(loading);
			loading.show();
			
			image = MyCrop(image, image.image, width, null, 5, false, loading);
			
			auxRow.add(image);
			
			image.addEventListener('singletap', function(e) {
				
				MyGallery(arrayImages, e.source._i);
				
			});
			
		}
		
	}
	
	win.add(tableView);
	
	return win;
	
}
