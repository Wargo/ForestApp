
module.exports = function(url, view, loader) {
	
	var audioPlayer = Ti.Media.createSound({
		url:url
	});
	
	var startStopButton = Titanium.UI.createButton({
	    image:'ui/images/button-play.png',
	    backgroundImage:'none',
	    left:10,
	    width:32,
	    height:32
	});
	
	var pauseResumeButton = Titanium.UI.createButton({
	    image:'ui/images/button-pause.png',
	    backgroundImage:'none',
	    left:50,
	    width:32,
	    height:32,
	    enabled:false
	});
	
	var duration = audioPlayer.getDuration();
	var playing = Ti.UI.createProgressBar({
		max:duration,
		right:20,
		width:200,
		value:0,
		style:Ti.UI.iPhone.ProgressBarStyle.BAR
	});
	
	var interval = setInterval(function() {
		if (audioPlayer.playing) {
			playing.value = audioPlayer.getTime();
		}
	}, 10);
	
	view.add(startStopButton);
	view.add(pauseResumeButton);
	view.add(playing);
	playing.show();
	
	playing.addEventListener('singletap', function(e) {
		var secs = e.x * duration / playing.width;
		audioPlayer.setTime(secs);
		playing.value = secs;
	});
	
	audioPlayer.addEventListener('complete', function(e) {
		audioPlayer.stop();
		pauseResumeButton.enabled = false;
	    playing.value = 0;
	});
	
	startStopButton.addEventListener('click',function() {
	    if (audioPlayer.playing || audioPlayer.paused) {
	        audioPlayer.stop();
	        pauseResumeButton.enabled = false;
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
