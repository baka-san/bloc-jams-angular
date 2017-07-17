(function() {
    function SongPlayer() {
    	/**
    	* @desc Buzz object audio file
    	* @type {Object}
    	*/
    	/**
    	* @function setSong
    	* @desc Stops currently playing song and loads new audio file as currentBuzzObject
    	* @param {Object} song
    	*/

    	var SongPlayer = {};
    	var currentSong = null;
    	var currentBuzzObject = null;

    	// Update song variable info
    	var setSong = function(song) {
    		currentBuzzObject = new buzz.sound(song.audioUrl, {
    		    formats: ['mp3'],
    		    preload: true
    		});
    		
    		currentSong = song;
    	};

    	// Play a song
    	SongPlayer.play = function(song) {

    		// Play a new song
    		if(currentSong !== song) {

    			// Stop the current song, if already playing
    			if(currentBuzzObject) { 
    				currentBuzzObject.stop();
    				currentSong.playing = null;
    			}

    			// Update song variable info
    			setSong(song);

    			// Set the audio file to play
    			currentBuzzObject.play();

    			currentSong.playing = true;
    		}   
    		// Play or pause the current song
    		else if(currentSong == song) {
				
				// Current song is paused, play it
    			//if (currentBuzzObject.isPaused()) {
    				currentBuzzObject.play();
    				currentSong.playing = true;
    			//} 
    		} 	
    	};

    	SongPlayer.pause = function(song) {
    		currentBuzzObject.pause();
    		song.playing = false;
    	};

    	return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();