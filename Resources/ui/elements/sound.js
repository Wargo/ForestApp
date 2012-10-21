
module.exports = function(url, view, loader) {
	
	var audioPlayer = Ti.Media.createSound({
		url:url
	});
	
	var startStopButton = Titanium.UI.createButton({
	    image:'ui/images/button-play.png',
	    backgroundImage:'none',
	    left:10,
	    width:40,
	    height:40
	});
	
	var pauseResumeButton = Titanium.UI.createButton({
	    image:'ui/images/button-pause.png',
	    backgroundImage:'none',
	    left:60,
	    width:40,
	    height:40,
	    enabled:false
	});
	
	var duration = audioPlayer.getDuration() - 1;
	var playing = Ti.UI.createProgressBar({
		max:duration,
		right:20,
		width:190,
		value:0
	});
	
	var ini = 0;
	
	var interval = setInterval(function() {
		if (audioPlayer.playing) {
			ini ++;
			Ti.API.error(playing.value);
			playing.value = ini / 100;
		}
	}, 10);
	
	view.add(startStopButton);
	view.add(pauseResumeButton);
	view.add(playing);
	playing.show();
	
	playing.addEventListener('singletap', function(e) {
		alert(e);
	});
	
	audioPlayer.addEventListener('complete', function(e) {
		audioPlayer.stop();
		pauseResumeButton.enabled = false;
		ini = 0;
	    playing.value = 0;
	});
	
	startStopButton.addEventListener('click',function() {
	    if (audioPlayer.playing || audioPlayer.paused) {
	        audioPlayer.stop();
	        pauseResumeButton.enabled = false;
	        ini = 0;
	        playing.value = 0;
	        if (Ti.Platform.name === 'android') { 
	            audioPlayer.release();
	        }   
	    } else {
	        audioPlayer.play();
	        pauseResumeButton.enabled = true;
	    }
	});
	
	pauseResumeButton.addEventListener('click', function() {
	    if (audioPlayer.paused) {
	        audioPlayer.play();
	    } else {
	        audioPlayer.pause();
	    }
	});
	
	view._win.addEventListener('close', function() {
	    audioPlayer.stop();
	    if (Ti.Platform.osname === 'android') { 
	        audioPlayer.release();
	    }
	});
	
	loader.hide();
	
}
