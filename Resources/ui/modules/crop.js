
ImageFactory = require('ti.imagefactory');

module.exports = function(image, name, width, height, radius, saveFiles, loading) {
	
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + name + '.jpg');
			
	if (Ti.App.Properties.getBool('forceImages', false)) {
		file.deleteFile();
	}
	
	if (saveFiles && file.exists()) {
		image.opacity = 0;
		image.image = file;
		image.borderRadius = radius;
		image._firstLoad = false;
	} else {
		image.opacity = 0;
		image.borderRadius = 10;
		image._firstLoad = true;
		image._file = file;
	}
	
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
				loading.hide();
				e.source.animate({opacity:1});
			}
		} else {
			loading.hide();
			e.source.animate({opacity:1});
		}
	});
	
	return image;
	
}
