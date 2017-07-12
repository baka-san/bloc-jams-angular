(function() {

	function AlbumCtrl(Fixtures) {
		// this.playing = false;
		// this.hovered = false;
		this.albumData = Fixtures.getAlbum();
		this.releaseInfo = this.albumData.year + " " + this.albumData.label;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

})();