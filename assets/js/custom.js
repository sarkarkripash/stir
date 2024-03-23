(function($) {

	'use strict';

	/**
	 	<=={Master JS}==>
	 	01 Header Sticky JS
		02 Mobile Menu JS
		03 Go Top JS
		04 Preloader JS
		05 scrollCue JS
		06 Services Slide JS
		07 Case Slide JS
		08 Testimonial Slide JS
		09 Partner Slide JS
		10 Partner Slide JS
		11 Counter JS
		12 Popup JS
		13 Password JS
		14 Curt BTN JS
		15 Background Image JS
	**/

	/**<<=== 02 Mobile Menu JS ==>>**/
	$('.for-mobile-menu').meanmenu({
		meanScreenWidth: "991",
	});
	
	/**<<=== 01 Header Sticky JS ==>>**/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};
	});

	/**<<=== 03 Go Top JS ==>>**/
	$('.back-to-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.back-to-top').addClass('active');
		if (scrolled < 300) $('.back-to-top').removeClass('active');
	});

	/**<<=== 04 Preloader JS ==>>**/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	/**<<=== 05 scrollCue JS ==>>**/
	scrollCue.init();

	/**<<=== 15 Background Image JS ==>>**/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	/**<<=== 12 Popup JS ==>>**/
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		removalDelay: 160,
		preloader: false,
	});

	//skill JS
	$('.skill-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});

	/**<<=== 09 Testimonial Slide JS ==>>**/
	$('.testimonial-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-arrow-left'></i>",
			"<i class='fa-regular fa-arrow-right'></i>",
		],
	});

	/**<<=== 09 Services Slide JS ==>>**/
	$('.services-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 09 Cases Slide JS ==>>**/
	$('.cases-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-arrow-left'></i>",
			"<i class='fa-regular fa-arrow-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
			1500: {
				items: 3,
			},
		},
	});

	/**<<=== 09 Ase Studie Slide JS ==>>**/
	$('.ase-studie-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-arrow-left'></i>",
			"<i class='fa-regular fa-arrow-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
			1500: {
				items: 3,
			},
		},
	});

	/**<<=== 09 Testimonial Slide Two JS ==>>**/
	$('.testimonial-slide-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-arrow-left'></i>",
			"<i class='fa-regular fa-arrow-right'></i>",
		],
	});

	/**<<=== 11 Counter JS ==>>**/
    // $('.counter').counterUp({
    //     time: 1000
    // });

	// MixItUp JS
	try {
        var mixer = mixitup('#Container', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}


	const passwordInput = document.getElementById("password");
	const passwordToggleIcon = document.querySelector(".password-toggle-icon");
	passwordToggleIcon.addEventListener("click", function() {
		if (passwordInput.type === "password") {
		passwordInput.type = "text";
		passwordToggleIcon.classList.remove("fa-eye-slash");
		passwordToggleIcon.classList.add("fa-eye");
		} else {
		passwordInput.type = "password";
		passwordToggleIcon.classList.remove("fa-eye");
		passwordToggleIcon.classList.add("fa-eye-slash");
		}
	});


})(jQuery);
