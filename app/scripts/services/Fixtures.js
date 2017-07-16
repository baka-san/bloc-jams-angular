(function() {
	function Fixtures() {
		var Fixtures = {};

		var albumPicasso = {
		    name: 'The Colors',
		    artist: 'Pablo Picasso',
		    label: 'Cubism',
		    year: '1881',
		    albumArtUrl: '/assets/images/album_covers/01.png',
		    songs: [
		        { name: 'Blue', length: '161.71', audioUrl: 'assets/music/blue' },
		        { name: 'Green', length: '103.96', audioUrl: 'assets/music/green' },
		        { name: 'Red', length: '268.45', audioUrl: 'assets/music/red' },
		        { name: 'Pink', length: '153.14', audioUrl: 'assets/music/pink' },
		        { name: 'Magenta', length: '374.22', audioUrl: 'assets/music/magenta' }
		    ]
		};
		
		var albumMarconi = {
		    name: 'The Telephone',
		    artist: 'Guglielmo Marconi',
		    label: 'EM',
		    year: '1909',
		    albumArtUrl: '/assets/images/album_covers/20.png',
		    songs: [
		        { name: 'Hello, Operator?', length: '1:01' },
		        { name: 'Ring, ring, ring', length: '5:01' },
		        { name: 'Fits in your pocket', length: '3:21' },
		        { name: 'Can you hear me now?', length: '3:14' },
		        { name: 'Wrong phone number', length: '2:15' }
		    ]
		};

		// Works
		Fixtures.getAlbum = function() {
			return albumPicasso;
		};

	    // Doesn't work
	    // this.getAlbum = function() {
	    // 	Albums.push(angular.copy(albumPicasso));
	    // 	return Albums;
	    // };

	    // Doesn't work
	    // return function getAlbum() {
	    // 	Fixtures.push(angular.copy(albumPicasso));
	    // };

	    // Is it because the function has been immediately invoked 
	    // and it's methods aren't available?
	    // If so, why are they available in the case of Albums.getAlbum

	    Fixtures.getCollection = function(numberOfAlbums) {
	    	var albums = [];
	    	
	    	for (var i = 0; i < numberOfAlbums; i++) {
	    		albums.push(albumPicasso);
	    	}
	    	return albums;
	    };

	    // Doesn't work
	    // Fixtures.getCollection = function(numberOfAlbums) {
	    // 	for (var i = 0; i < numberOfAlbums; i++) {
	    // 		this[i] = albumPicasso;
	    // 	}
	    // 	return Fixtures;
	    // };

	    return Fixtures;
	};
 
	// Why don't we name it FixturesFactory instead??
	angular
	    .module('blocJams')
	    .factory('Fixtures', Fixtures);
})();