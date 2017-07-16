(function() {
	function AlbumCtrl(Fixtures, SongPlayer) {
		// debugger;
		// this.playing = false;
		// this.hovered = false;
		this.albumData = Fixtures.getAlbum();
		this.releaseInfo = this.albumData.year + " " + this.albumData.label;
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);
		// .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);

})();