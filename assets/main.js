/**
* Filename: main.js
* Developed by: Kevin James G. Stevens
* Last Updated: January 2019
* Purpose: [Script]
*/

(function($){
	
	'use strict';

	//FLAGS
	var flagnav = false;

	// Page Link Scrolling Animation
	$('.nav-link, .see-whats-up').click(function() {
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
		var navi = $('.navigation');
		if(scroll >= 150){
			navi.addClass('navi-down');
			navi.removeClass('navi-up');
			if(flagnav == false){
				flagnav = true;
			}
		} else {
			if(flagnav == true){
				navi.addClass('navi-up');
				navi.removeClass('navi-down');
			}
		}		
	});
  	
  	// animation: navigationUp .75s ease both;
  	// animation: navigationDown .75s ease both;
 
  	// Simple Bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();  

})(jQuery);

