/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {

		$("#phone").inputmask("+99 (999) 999-99-99"); 

		var player = document.getElementById("video-present");
		player.addEventListener("ended", function() {
			player.currentTime = 0;
			$(".play-button").show();
		});

		$(".play-video").click(function() {
			$(".play-button").hide();
			player.play();
		});

		$.each($('.is-one-page'), function (index, item) {
            var target = $(item).attr('href');
            var el =  $(target);
            var _data_offset = $(item).attr('data-onepage-offset');
            var waypoint = new Waypoint({
                element: el[0],
                handler: function(direction) {
                    if(direction === 'down'){
                        $('.active-menu').removeClass('active-menu');
                        $(item).addClass('active-menu');
                    }
                    else if(direction === 'up'){
                        var prev = $(item).parent().prev().find('.is-one-page');
                        $(item).removeClass('active-menu');
                        if(prev.length > 0)
                            prev.addClass('active-menu');
                    }
                    else{

                    }
                },
                offset: _data_offset,
            });

        });
		/* ==================================================
		    # Wow Init
		 ===============================================*/
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();

		/* ==================================================
		    # Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();



		/* ==================================================
		    # Slide Animated Button
		===============================================*/
		var $slideLink = $(".text-slide"),
			slideLinkText = $slideLink.find("span")[0];

		$slideLink.on("mouseenter", linkOver);

		function linkOver() {
			TweenLite.to(slideLinkText, 0.3, {
				y: -25,
				ease: Cubic.easeIn,
				onComplete: function() {
					TweenLite.fromTo(slideLinkText, 0.3, {
						y: 25
					}, {
						y: 0,
						ease: Cubic.easeOut
					})
				}
			});
		}


		/* ==================================================
		    # Scrolla active
		===============================================*/
		$('.animate').scrolla();


		/* ==================================================
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
			$('.timer').countTo();
		}, {
			accY: -100
		});


		/* ==================================================
		    # Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});
		

		/* ==================================================
		    _Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 90,
						thickness: 3,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#6222cc', '#a200be ']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});
		}

		animateElements();
		$(window).scroll(animateElements);



		/* ==================================================
            # Banner Carousel
         ===============================================*/
		const bannerFade = new Swiper(".banner-fade", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
            # Services Carousel
         ===============================================*/
		const ServicesStyleOne = new Swiper(".services-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				}
			},
		});


		/* ==================================================
            # Testimonials Carousel
         ===============================================*/
		const testimonialCarousel = new Swiper(".testimonial-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
            # Banner Carousel
         ===============================================*/
		const bannerStyleTwo = new Swiper(".banner-style-two-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
            # Project Carousel
         ===============================================*/
		const swiperStageRight = new Swiper(".carousel-stage-right", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 2.5,
				},
			},
		});


		/* ==================================================
            # Banner Carousel
         ===============================================*/
		const bannerStyleThree = new Swiper(".banner-style-three-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});



		/* ==================================================
            # Banner Carousel
         ===============================================*/
		const bannerSlide = new Swiper(".banner-slide", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			grabCursor: true,
			autoplay: true,
			speed: 2000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
		    # Brand Carousel
		 ===============================================*/
		const brand6col = new Swiper(".brand5col", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: false,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				1199: {
					slidesPerView: 5,
					spaceBetween: 60,
				}
			},
		});

		/* ==================================================
            # Offer Product Carousel
         ===============================================*/
		 const productOffer = new Swiper(".product-offer-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			

			// If we need pagination
			pagination: {
				el: '.product-offer-carousel-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".product-offer-carousel-next",
				prevEl: ".product-offer-carousel-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
            # Product Gallery Carousel
         ===============================================*/
         const productGallery = new Swiper(".product-gallery-carousel", {
            // Optional parameters
            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });


		/* ==================================================
            # Related Product Carousel
         ===============================================*/
         const relatedProduct = new Swiper(".related-product-carousel", {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });


		/* ==================================================
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				$(".contact-form").find("input").removeClass("alert-error-input");
				$(".contact-form").find("textarea").removeClass("alert-error-input");
				$(".contact-form").find(".alert-error").hide();
				var action = $(this).attr('action');
				
				var name_ = $('#name').val();
				var email_ = $('#email').val();
				var phone_ = $('#phone').val();
				var comments_ = $('#comments').val();
				var check_error = false;
				if(name_ == "" || name_.length < 3)
				{
					$(".user-name").find("input").addClass("alert-error-input");
					$(".user-name").find(".alert-error").show();
					check_error = true;
				}
				if(email_ != "" && email_.indexOf("@")<0)
				{
					$(".user-email").find("input").addClass("alert-error-input");
					$(".user-email").find(".alert-error").show();
					check_error = true;
				}
				if(phone_ == "" || phone_.indexOf("_")>0)
				{
					$(".user-phone").find("input").addClass("alert-error-input");
					$(".user-phone").find(".alert-error").show();
					check_error = true;
				}
				if(comments_ == "" || comments_.length < 3)
				{
					$(".user-comment").find("textarea").addClass("alert-error-input");
					$(".user-comment").find(".alert-error").show();
					check_error = true;
				}
				if(check_error) {
					return false;
				}
				$(".contact-form").find("input").attr('disabled', 'disabled');
				$(".contact-form").find("textarea").attr('disabled', 'disabled');
				$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');
					$.post(action, {
							name: name_,
							email: email_,
							phone: phone_,
							comments: comments_
						},
						function(data) {
							$("#alert-notification-ok").show();
							setTimeout(function() {
								$("#alert-notification-ok").hide();
							});
							$('#name').val("");
							$('#email').val("");
							$('#phone').val("");
							$('#comments').val("");
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$(".contact-form").find("input").removeAttr('disabled');
							$(".contact-form").find("textarea").removeAttr('disabled');
							$('#submit').removeAttr('disabled');
						}
					);
				return false;
			});
		});

		/* ==================================================
		    Email Form Validations
		================================================== */
		$('.email-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				$(".email-form").find("input").removeClass("alert-error-input");
				$(".email-form").find(".alert-error").hide();
				var action = $(this).attr('action');
				var email_ = $('#email_f2').val();
				var check_error = false;
				if(email_ == "" || email_.indexOf("@")<0)
				{
					$(".user-email_f2").find("input").addClass("alert-error-input");
					$(".user-email_f2").find(".alert-error").show();
					check_error = true;
				}
				if(check_error) {
					return false;
				}
				$(".email-form").find("input").attr('disabled', 'disabled');
				$('#submit-email-form').attr('disabled', 'disabled');
					$.post(action, {
							email: email_
						},
						function(data) {
							$("#alert-notification-ok2").show();
							setTimeout(function() {
								$("#alert-notification-ok2").hide();
							});
							$('#email_f2').val("");
							$(".email-form").find("input").removeAttr('disabled');
							$('#submit-email-form').removeAttr('disabled');
						}
					);
				return false;
			});
		});

		$(".email-form input, .contact-form input, .contact-form textarea").keypress(function() {
			$(this).removeClass("alert-error-input");
			$(this).parent().find(".alert-error").hide();
		});

	}); // end document ready function
	

	/* ==================================================
		Preloader Init
	===============================================*/
	$(window).on('load', function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});


})(jQuery); // End jQuery