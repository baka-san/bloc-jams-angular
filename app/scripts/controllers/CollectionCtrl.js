(function() {

	function CollectionCtrl(Fixtures) {
		// debugger;
		this.albums = Fixtures.getCollection(12);
		//this.albums = Fixtures.Albums;
		// this.albums = [];
		// for (var i=0; i < 12; i++) {
		//     this.albums.push(angular.copy(albumPicasso));
		// }
	}

	angular
		.module('blocJams')
		.controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);

})();
