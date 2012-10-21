
module.exports = function(url, view, loader) {
	
	var audioPlayer = Ti.Media.createSound({
		url:url
	});
	
	var startStopButton = Titanium.UI.createButton({
	    image:'ui/images/audio/play.png',
	    backgroundImage:'none',
	    left:10,
	    width:32,
	    height:32
	});
	
	var pauseResumeButton = Titanium.UI.createButton({
	    image:'ui/images/audio/pause.png',
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
		startStopButton.image = 'ui/images/audio/play.png';
		audioPlayer.stop();
		pauseResumeButton.enabled = false;
	    playing.value = 0;
	});
	
	startStopButton.addEventListener('click',function() {
	    if (audioPlayer.playing || audioPlayer.paused) {
	        audioPlayer.stop();
	        pauseResumeButton.enabled = false;
	        playing.value = 0;
	        startStopButton.image = 'ui/images/audio/play.png';
	    } else {
	        audioPlayer.play();
	        pauseResumeButton.enabled = true;
	        startStopButton.image = 'ui/images/audio/stop.png';
	    }
	    pauseResumeButton.image = 'ui/images/audio/pause.png';
	});
	
	pauseResumeButton.addEventListener('click', function() {
	    if (audioPlayer.paused) {
	        audioPlayer.play();
	        pauseResumeButton.image = 'ui/images/audio/pause.png';
	    } else {
	        audioPlayer.pause();
	        pauseResumeButton.image = 'ui/images/audio/play.png';
	    }
	});
	
	view._win.addEventListener('close', function() {
	    audioPlayer.stop();
	});
	
	loader.hide();
	
}
