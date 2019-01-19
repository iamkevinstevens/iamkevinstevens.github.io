/**
* Filename: main.js
* Developed by: Kevin James G. Stevens
* Last Updated: January 2019
* Purpose: [Script]
*/

(function($){
	
	'use strict';

	$('.page-link').click(function() {
		var anchor = $(this).attr("dest");
		// $('.link-wrap').removeClass('visible');

		// $('nav span').removeClass('active');
		// $("nav").find('[dest="'+ anchor +'"]').addClass('active');

		$('html, body').animate({
		  scrollTop: $('#' + anchor).offset().top
		}, 600);
  	});

})(jQuery);

