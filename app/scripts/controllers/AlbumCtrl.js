(function() {

	function AlbumCtrl() {
		// this.playing = false;
		// this.hovered = false;
		this.albumData = albumPicasso;
		this.releaseInfo = this.albumData.year + " " + this.albumData.label;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);
})();