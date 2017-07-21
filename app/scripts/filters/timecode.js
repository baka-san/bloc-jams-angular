(function() {

	function timecode() {

		return function(timeInSeconds) {
				timeInSeconds = Number.parseFloat(timeInSeconds);

				// If a song isn't loaded, don't display time
				if (Number.isNaN(timeInSeconds)) {
				    return '';
				}

				var displayHours = Math.floor(timeInSeconds / 3600)
				var displayMin = Math.floor(timeInSeconds / 60) - displayHours*60;
				var displaySec = Math.floor(timeInSeconds) - (displayMin*60) - (displayHours*3600);

				displayHours = (displayHours > 0) ? displayHours + ':' : '';
				displayMin = (displayMin >= 10) ? displayMin : '0' + displayMin; 
				displaySec = (displaySec >= 10) ? displaySec : '0' + displaySec;

				//alert(displayMin + ':' + displaySec);
				return displayHours + displayMin + ':' + displaySec;
		};
	}

	angular
		.module('blocJams')
		.filter('timecode', timecode);
})();