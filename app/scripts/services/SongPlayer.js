(function() {
    function SongPlayer() {
    	// Function Variables
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

    	// Logic for playing a song (private)
    	var playSong = function(song) {

    		// Set the audio file to play
    		currentBuzzObject.play();

    		// There is currently a song playing
    		currentSong.playing = true;
    	};

    	// Play a song (public method)
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

    			// Play the song
    			playSong(song);
    		}   
    		// The current song is pause, play it
    		else if(currentSong == song) {
    			playSong(song);
    		} 	
    	};

    	// Pause a song (public method)
    	SongPlayer.pause = function(song) {
    		currentBuzzObject.pause();
    		song.playing = false;
    	};

    	return SongPlayer;

    	// DOCUMENTATION
    	/**  
	    	* @var SongPlayer (public)
	    	* @desc Object returned with public variables and methods such as playing and pausing song.
	    	* @type {Object}
	    	*
	    	* @var currentSong (private)
	    	* @desc Variable holding currently playing song object from Fixtures.js
	    	* @type {Object}
	    	*
	    	* @var currentBuzzObject (private)
	    	* @desc Buzz object audio file
	    	* @type {Object}
	    	*
	    	* @function setSong (private)
	    	* @desc Loads new audio file as currentBuzzObject and updates the currentSong variable
	    	* @param {Object} song
	    	*
	    	* @function playSong (private)
	    	* @desc Plays audio file and updates song.playing.
	    	* @param {Object} song
	    	*
	    	* @function SongPlayer.play (public)
	    	* @desc Stops currently playing song, sets new song, and then plays it.
	    	* @param {Object} song
	    	*
	    	* @function SongPlayer.pause (public)
	    	* @desc Pauses current song and updates song.playing.
	    	* @param {Object} song
    	*/
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();