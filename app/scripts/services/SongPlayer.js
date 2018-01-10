(function() {
  function SongPlayer($rootScope, Fixtures) {
  	// Function Variables
  	var SongPlayer = {};
  	var currentBuzzObject = null;
  	var currentAlbum = Fixtures.getAlbum();

  	// Initially there isn't a current song
  	SongPlayer.currentSong = null;
    SongPlayer.currentTime = null;

    // Initial volume is 80
    SongPlayer.volume = 80;

  	// Update song variable info
  	var setSong = function(song) {
  		currentBuzzObject = new buzz.sound(song.audioUrl, {
  		    formats: ['mp3'],
  		    preload: true
  		});
  		
  		SongPlayer.currentSong = song;

      currentBuzzObject.bind('timeupdate', function() {
          $rootScope.$apply(function() {
              SongPlayer.currentTime = currentBuzzObject.getTime();
          });
      });
  	};

  	// Get the index of a song (private)
  	var getSongIndex = function(song) {
  		return currentAlbum.songs.indexOf(song);
  	};

  	// Play a song, update playing (private)
  	var playSong = function(song) {

  		// Set the audio file to play
  		currentBuzzObject.play();

  		// There is currently a song playing
  		SongPlayer.currentSong.playing = true;
  	};

  	// Stop a song (private)
  	var stopSong = function(song) {
  		currentBuzzObject.stop();
  		SongPlayer.currentSong.playing = null;
  	};

  	// Go to the previous song (public)
  	SongPlayer.previous = function() {
  		
  		if(currentBuzzObject) {
  			// Index of current song
  			var songIndex = getSongIndex(SongPlayer.currentSong);

  			// If it's the first song, loop to last song
  			if(songIndex === 0) {
  				songIndex = currentAlbum.songs.length - 1;
  			}
  			// Increment the song
  			else {
  				songIndex--;
  			}

  			var song = currentAlbum.songs[songIndex];
  			SongPlayer.play(song);
  		}
  	};

  	// Go to the next song (public)
  	SongPlayer.next = function() {
  		
  		if(currentBuzzObject) {
  			// Index of current song
  			var songIndex = getSongIndex(SongPlayer.currentSong);

  			// If it's the first song, loop to last song
  			if(songIndex === currentAlbum.songs.length - 1) {
  				songIndex = 0;
  			}
  			// Increment the song
  			else {
  				songIndex++;
  			}

  			var song = currentAlbum.songs[songIndex];
  			SongPlayer.play(song);
  		}
  	};

      // Set the current time of the song in the player bar
      SongPlayer.setCurrentTime = function(time) {
          if (currentBuzzObject) {
              currentBuzzObject.setTime(time);
          }
      };

      // Upsdate the volume
      SongPlayer.setVolume = function(volume) {
          if(currentBuzzObject) {
              currentBuzzObject.setVolume(volume);
          }

          SongPlayer.volume = volume;
      };

  	// Play a song (public)
  	SongPlayer.play = function(song) {

  		// A song is already playing
  		if(currentBuzzObject){

    		// Album view sends in song, player bar doesn't so set
    		song = song || SongPlayer.currentSong;

    		// Play a new song
    		if(SongPlayer.currentSong !== song) {

  				// Stop the current song
  				stopSong(song);

    			// Update song variable info
    			setSong(song);

    			// Play the song
    			playSong(song);
    		}   
    		// The current song is paused, play it
    		else if(SongPlayer.currentSong == song) {
    			playSong(song);
    		} 	
    	}
    	// No song is playing, play first song
    	else {

    		// Album view sends in song, player bar doesn't so set
    		song = song || currentAlbum.songs[0];

    		// Update song variable info
    		setSong(song);

              // Set up the initial volume to 80%
              //SongPlayer.setVolume(30);

    		// Play the song
    		playSong(song);
    	}
  	};

  	// Pause a song (public method)
  	SongPlayer.pause = function(song) {

  		// Album view sends in song, player bar doesn't so set
  		song = song || SongPlayer.currentSong;
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
    	* @var currentBuzzObject (private)
    	* @desc Buzz object audio file
    	* @type {Object}
    	*
    	* @var currentAlbum (private)
    	* @desc current album displayed on page from Fixtures.js
    	* @type {object}
    	*
    	* @var currentSong (public)
    	* @desc Variable holding currently playing song object from Fixtures.js
    	* @type {Object}
    	*
          * @var currentTime (public)
          * @desc Current playback time (in seconds) of currently playing song
          * @type {Number}
          *
    	* @function setSong (private)
    	* @desc Loads new audio file as currentBuzzObject and updates the currentSong variable
    	* @param {Object} song
    	*
    	* @function getSongIndex (private)
    	* @desc Get index of the inputed song
		* @param {Object} song
    	*
    	* @function playSong (private)
    	* @desc Plays audio file and updates song.playing.
    	* @param {Object} song
    	*
    	* @function SongPlayer.previous (public)
    	* @desc Skips to the previous song
    	*
    	* @function SongPlayer.next (public)
    	* @desc Skips to next song
          *
          * @function setCurrentTime (public)
          * @desc Set current time (in seconds) of currently playing song
          * @param {Number} time
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