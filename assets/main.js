/**
* Filename: main.js
* Developed by: Kevin James G. Stevens
* Last Updated: January 2019
* Purpose: [Script]
*/

(function($){
	
	'use strict';

	// Page Link Scrolling Animation
	$('.page-link').click(function() {
		var anchor = $(this).attr("dest");
		// $('.link-wrap').removeClass('visible');
		// $('nav span').removeClass('active');
		// $("nav").find('[dest="'+ anchor +'"]').addClass('active');
		$('html, body').animate({
		  scrollTop: $('#' + anchor).offset().top
		}, 600);
  	});

  	// Slide Animation Handler
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		console.log(scroll);
	});
  	
  	// Simple Bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip()  

})(jQuery);

