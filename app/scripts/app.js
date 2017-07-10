(function() {
	function config($stateProvider, $locationProvider) {
	    $locationProvider
	        .html5Mode({
	            enabled: true,
	            requireBase: false
	        });

	    $stateProvider
	    	.state('landing', {
	    		url: '/',
	    		templateUrl: '/templates/landing.html'
	    	})
	    	.state('album', {
	    		url: '/album',
	    		templateUrl: '/templates/album.html',
	    		controller: 'albumCtrl'
	    	})
	    	.state('collection', {
	    		url: '/collection',
	    		templateUrl: '/templates/collection.html'
	    	});
	}

	function albumCtrl() {
		this.playing = false;
		this.hovered = false;
	}

    angular
        .module('blocJams', ['ui.router'])
        .config(config)

    	// Album controller
    	.controller('albumCtrl', albumCtrl);

})();