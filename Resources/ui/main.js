
var MyFinca = require(Mods.finca);

MyFooter = require(Mods.footer);

MyData = require(Mods.data);
data = MyData.bbdd;

var MyHomeFinca = require(Mods.homeFinca);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	var header = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Selecciona una finca:';
	header.add(textHeader);
	/*
	header.add(Ti.UI.createImageView({
		image:'ui/images/lupa.png',
		left:45,
		width:32
	}));
	*/
	win.add(header);
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	
	header.add(back);
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	
	var footer = MyFooter();
	win.add(footer);
	
	var headerText = Ti.UI.createLabel($$.textTitle);
	headerText.top = 55;
	headerText.textAlign = 'center';
	headerText.text = 'Selecciona la finca y accede a ella pinchando en su nombre';
	
	win.add(headerText);
	
	var map = Ti.Map.createView({
		top:45 + 60,
		bottom:19 + 10,
		left:10,
		right:10,
		borderColor:'#CCC',
		borderWidth:1,
		borderRadius:10,
		userLocation:true,
		region:{latitude:40, longitude:-3, latitudeDelta:10, longitudeDelta:10},
		mapType:Ti.Map.SATELLITE_TYPE
	});
	
	var satellite = Ti.UI.createButtonBar({
		labels:['Satélite', 'Mapa'],
		bottom:10,
		right:10,
		style:Ti.UI.iPhone.SystemButtonStyle.BAR,
		backgroundColor:'#AB8636'
	});
	
	satellite.addEventListener('click', function(e) {
		switch (e.index) {
			case 0:
				map.mapType = Ti.Map.SATELLITE_TYPE;
				break;
			case 1:
				map.mapType = Ti.Map.TERRAIN_TYPE;
				break;
		}
	});
	
	map.add(satellite);
	
	for (i in data) {
	
		var annotation = Ti.Map.createAnnotation({
			title:data[i].name,
			subtitle:data[i].description,
			pincolor:Ti.Map.ANNOTATION_GREEN,
			latitude:data[i].lat,
			longitude:data[i].lng,
			animate:true,
			leftButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT,
			rightView:Ti.UI.createImageView({
				image:data[i].image,
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
				//new MyPOIS(e.source._i).open({left:0});
				new MyHomeFinca(e.source._i).open({left:0});
			} else if (e.clicksource == 'pin') {
			}
		});
		
	}
	
	win.add(map);
	
	/*
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
	*/
	
	return win;
	
}
