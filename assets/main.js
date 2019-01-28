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
	var flagmob = false;

	function slideUpNavBurger(){
		$('.nav-burger-wrap').slideUp();
  		$('.nav-burger').removeClass('open');
	}

	function checkMobileMode(){
		var mywidth = $(window).width();
		if(mywidth <= 653){
			if(flagmob == false){
				$('.navigation').addClass('mobile-mode');
				flagmob = true;
			}
		} else {
			$('.navigation').removeClass('mobile-mode');
			slideUpNavBurger();
			flagmob = false;
		}
	}

	// Page Link Scrolling Animation
	$('.nav-link, .see-whats-up').click(function() {
		var anchor = $(this).attr("dest");
		$('html, body').animate({
		  scrollTop: $('#' + anchor).offset().top
		}, 750);
  	});

  	$('.navigation .nav-burger i').click(function(){
  		$('.nav-burger-wrap').slideToggle();
  		$('.nav-burger').toggleClass('open');
  	});

  	// On Window Scroll Animations Handler
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		var navi = $('.navigation');

		// Navigation Hide/Show Handler
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
				$('.nav-burger-wrap').slideUp();
				$('.nav-burger').removeClass('open');
			}
		}

		// Navigation Label 'active' class toggler
		$('.full-screen-panel').each(function(){
			var mytop = $(this).position().top;
			var myid = $(this).attr('id');
			var heighting = mytop + $(this).outerHeight();
			if(mytop <= scroll + 35 && heighting > scroll + 35){
				// setTimeout(function(){
				$('.nav-link[dest="'+ myid +'"]').addClass('active');
				// },1000);
			} else {
				$('.nav-link[dest="'+ myid +'"]').removeClass('active');
			}
		});
	});

	$(window).resize(function(){
		checkMobileMode();
	});

	// class: proj-img class style control
	$('.proj-img').each(function(){
		var databg = $(this).data('bg');
		$("img",this).attr('src', databg);
		// $(this).css({'background': 'linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0.15)),url("'+databg+'")'});
	});
	$('.proj-plate').each(function(){
		var imgsrc = $(this).find('img').attr('src');
		$(this).find('img').attr('alt',imgsrc);
	});
  		
  	// class: proj-whereto status appear control
 	$('.proj-whereto').hover(
 		function(){
	 		$(this).next().addClass('showFromSide');
 		},
 		function(){
	 		$(this).next().removeClass('showFromSide');
 		}
 	); 	

 	$('.contact').click(function(){
 		var iam = $(this);
 		var datacopy = $(this).data('copy');
 		if(iam.hasClass('newtab')){
 			window.open(datacopy,'_blank');
 		}
 		if(iam.hasClass('email-to')){
 			var ecs = $('.email-clipboard span');
 			ecs.css({'opacity':'1'});
 			setTimeout(function(){
 				ecs.css({'opacity':'0'});
 			},1500);
 		}
 	});

  	// Simple Bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();  
	
	// on Document ready functions
	checkMobileMode();

})(jQuery);

