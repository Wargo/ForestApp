
var MyMiniMenu = require(Mods.minimenu);

var MyPOI = require(Mods.poi);

module.exports = function(current) {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	map = Ti.Map.createView({
		top:45,
		bottom:19,
		userLocation:true,
		region:{latitude:39.5, longitude:-0.5, latitudeDelta:0.03, longitudeDelta:0.03},
		mapType:Ti.Map.SATELLITE_TYPE,
		opacity:0
	});
	
	tableView = Ti.UI.createTableView($$.view);
	tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
	
	var auxRow = Ti.UI.createTableViewRow({
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		backgroundColor:'transparent'
	});
	
	tableView.appendRow(auxRow);
	
	data.title = 'Título...';
	data.texto1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper aliquet ultrices. Duis pulvinar arcu augue. Ut eu dolor ante, sit amet auctor mi.';
	data.texto2 = 'Suspendisse bibendum, urna at sollicitudin feugiat, risus mi dapibus nisi, eget consequat sem nisl id ante. Praesent urna neque, suscipit eu auctor nec, aliquam ut sem. Aliquam vel dapibus dui.';
	data.texto3 = 'Suspendisse molestie bibendum urna in aliquam. Sed vulputate ipsum sed erat vulputate semper. Nunc suscipit cursus magna, a facilisis nunc condimentum quis.';
	data.texto4 = 'Curabitur lobortis, justo ac fermentum adipiscing, lectus mauris viverra nunc, vel facilisis dolor leo ac arcu. Mauris congue euismod augue, sed congue mauris ultricies eu.';
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data.title;
	title.top = 10;
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data.texto1 + '\r\r' + data.texto1 + '\r\r' + data.texto2 + '\r\r' + data.texto3 + '\r\r' + data.texto4;
	text.top = 30;
	text.left = 20;
	text.right = 20;
	
	auxRow.add(title);
	auxRow.add(text);
	
	win.add(tableView);
	
	var menu = MyMiniMenu(win, current);
	win.add(menu);
	
	var footer = MyFooter();
	win.add(footer);
	
	var hitos = data[current].pois;
	
	for (i in hitos) {
	
		var annotation = Ti.Map.createAnnotation({
			title:hitos[i].title,
			subtitle:hitos[i].text,
			pincolor:Ti.Map.ANNOTATION_PURPLE,
			latitude:hitos[i].lat,
			longitude:hitos[i].lng,
			animate:true,
			leftButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT,
			rightView:Ti.UI.createImageView({
				image:hitos[i].image,
				height:30,
				width:80
			}),
			_i:i
		});
	
		map.addAnnotation(annotation);
		
		annotation.addEventListener('click', function(e) {
			if (e.clicksource == 'leftButton') {
				if(parseFloat(Titanium.Platform.version) >= 6) {
					Ti.Platform.openURL('Maps://http://maps.apple.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				} else {
					Ti.Platform.openURL('Maps://http://maps.google.com/maps?daddr=' + e.annotation.latitude + ',' + e.annotation.longitude);
				}
			} else if (e.clicksource == 'title' || e.clicksource == 'subtitle') {
				MyPOI(win, current, e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(map);
	
	return win;
	
}