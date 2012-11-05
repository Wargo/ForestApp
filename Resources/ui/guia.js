
module.exports = function(home) {
	
	var win = Ti.UI.createWindow($$.win);
	win._current = 'guia';
	
	var menu = MyMenu(win, home);
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	
	var data = new Object();
	
	data.title = 'Nombre de la finca';
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
	
	view.add(title);
	view.add(text);
	
	win.add(view);
	
	var footer = MyFooter();
	win.add(footer);
	
	return win;
	
}
