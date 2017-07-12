(function() {
 // debugger;
	function AlbumCtrl(Fixtures) {
		// debugger;
		// this.playing = false;
		// this.hovered = false;
		this.albumData = Fixtures.getAlbum();
		this.releaseInfo = this.albumData.year + " " + this.albumData.label;
	}

	angular
		.module('blocJams')

		// WHICH IS BEST?????????????/
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
		//.controller('AlbumCtrl', AlbumCtrl);


})();