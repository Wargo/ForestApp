
ImageFactory = require('ti.imagefactory');

module.exports = function(image, name, width, height, radius, saveFiles) {
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + name + '.jpg');
			
	if (Ti.App.Properties.getBool('forceImages', false)) {
		file.deleteFile();
	}
	
	if (saveFiles && file.exists()) {
		image.image = file;
		image._firstLoad = false;
	} else {
		image._firstLoad = true;
		image._file = file;
	}
	image.opacity = 0;
	image.borderRadius = radius;
	image.borderWidth = 1;
	image.borderColor = '#FFF';
	
	image.addEventListener('load', function(e) {
		if (e.source._firstLoad) {
			try {
				if (height != null) {
					var thumb = ImageFactory.imageTransform(e.source.toBlob(),
						{ type:ImageFactory.TRANSFORM_CROP, width:width, height:height },
						{ type:ImageFactory.TRANSFORM_ROUNDEDCORNER, borderSize:0, cornerRadius:radius }
					);
				} else {
					var thumb = ImageFactory.imageAsThumbnail(e.source.toBlob(),
						{ size:width, cornerRaduis:radius, format: ImageFactory.PNG }
					);
				}
				e.source.image = thumb;
				e.source._firstLoad = false;
				e.source._file.write(thumb);
			} catch(ex) {
				e.source.animate({opacity:1});
			}
		} else {
			e.source.animate({opacity:1});
		}
	});
	
	return image;
	
}
