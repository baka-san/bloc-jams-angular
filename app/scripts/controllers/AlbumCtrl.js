(function() {
	function AlbumCtrl(Fixtures, SongPlayer) {
		this.albumData = Fixtures.getAlbum();
		this.releaseInfo = Fixtures.releaseInfo(this);
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);
		// .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);

})();