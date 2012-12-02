var Mods = require('/modules');
var $$ = require(Mods.styles);

var MyFooter = require(Mods.footer);

module.exports = function() {
	
	var win = Ti.UI.createWindow($$.win);
	win.left = 320;
	
	var menu = Ti.UI.createView({
		backgroundImage:'ui/images/fondo_menu.png',
		top:0,
		height:45
	});
	var textHeader = Ti.UI.createLabel($$.textHeader);
	textHeader.text = 'Información';
	menu.add(textHeader);
	
	var back = Ti.UI.createButton($$.menuButton);
	back.image = 'ui/images/menu/inicio_aplicacion.png';
	back.left = 5;
	
	menu.add(back);
	
	back.addEventListener('click', function() {
		win.close({left:320});
	});
	win.add(menu);
	
	var view = Ti.UI.createScrollView($$.view);
	
	var data = new Object();
	
	data.title = 'PROYECTO ForestApp: Interpretación de la Gestión Forestal Sostenible';
	data.texto = 'El objetivo principal del proyecto es facilitar a la sociedad el conocimiento de la realidad del medio rural para poner en valor la gestión forestal sostenible realizada en fincas particulares representativas a través de una App específica, pudiendo además descubrir unos recursos que puedan ser utilizados y animar nuevas oportunidades de emprendimiento en el ámbito rural.\r\rEs una forma de potenciar el desarrollo económico a escala local a la vez que se muestra el potencial de un sector y un territorio, integrando a los pobladores de esas zonas en la sociedad avanzada de la información y del conocimiento.\r\rSe pretende dar a conocer a cualquier usuario de iPhone la riqueza paisajística, cultural y natural de nuestros bosques fruto de la Gestión Forestal Sostenible que se ha realizado durante generaciones.\r\rEsta aplicación es una práctica herramienta que contiene información muy específica en materia forestal, cuyas funcionalidades (geolocalización de la finca, mapa de puntos de interés, guía de entorno, galería de fotos, marco jurídico y Tour virtual) nos permiten acercarnos a nuestros interesantes y desconocidos montes e interaccionar en el medio que los rodea.\r\rEste proyecto se enmarca en la Orden AAA/1401/2012 de 28 de junio, convocatoria 2012 de ayudas a la innovación tecnológica en el medio rural de la Subdirección General de Modernización de Explotaciones, de la Dirección General de Desarrollo Rural y Política Forestal del Ministerio de Agricultura, Alimentación y Medio Ambiente.';
	
	var title = Ti.UI.createLabel($$.textTitle);
	title.text = data.title;
	title.top = 10;
	title.left = 10;
	title.right = 10;
	title.textAlign = 'center';
	
	var text = Ti.UI.createLabel($$.text);
	text.text = data.texto;
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
