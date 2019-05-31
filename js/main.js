$(document).ready(function() {
  	/////////////////this function makes element height same with element width(even in % value)////////////////
	var elementGalery = $('.image-box');
	function math_height() {
		elementGalery.height(elementGalery.width());
	}
	math_height();
	$(window).on('resize',function () {
		math_height();
	});

	////////////////this function makes element resize////////////////////
	var elEvants = $('.event__image');
	function elEvent_height() {
		elEvants.height(elEvants.width() / 1.5);
	}
	elEvent_height();
	$(window).on('resize',function () {
		elEvent_height();
	});

		/////////////////////scroll down animation function///////////////////	
	if ($('body').hasClass('home__page')) {
		var documentEl = $(document);
		var aniEl1 = [0, 1, 2, 3];
		 documentEl.on('scroll', function() {
	 	$.each(aniEl1, function(index) {
	 		var animateElOffset0 = $('.animation__scroll__0').offset().top / 2.9;
			var animateElOffset1 = $('.animation__scroll__1').offset().top / 1.8;
			var animateElOffset2 = $('.animation__scroll__2').offset().top / 1.3;
			var animateElOffset3 = $('.animation__scroll__3').offset().top / 1.2;
		//first animated element
		if (documentEl.scrollTop() > animateElOffset0 && $('.animation__scroll__0').hasClass('text__hidden__0'))
			$('.animation__scroll__0').removeClass('text__hidden__0');
		//second animated element
		if (documentEl.scrollTop() > animateElOffset1 && $('.animation__scroll__1').hasClass('text__hidden__1'))
			$('.animation__scroll__1').removeClass('text__hidden__1');
		//third animated element
		if (documentEl.scrollTop() > animateElOffset2 && $('.animation__scroll__2').hasClass('text__hidden__2'))
			$('.animation__scroll__2').removeClass('text__hidden__2');
		//fourth animated element
		if (documentEl.scrollTop() > animateElOffset3 && $('.animation__scroll__3').hasClass('text__hidden__3'))
			$('.animation__scroll__3').removeClass('text__hidden__3');
		});
	});
	}
	

  //lightgallery plugin
  $("#lightgallery").lightGallery();

  //slick slider plugin
  $('.slick__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {

        slidesToShow: 2, 
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  /////////////Things To Do  Navbar////////////
  var thingsNavbar = $('.thingsToDo__links');	

 $('#things__btn').click(function () {
    if ($(this).is('#things__btn')) {
      thingsNavbar.toggleClass('things__clicked');
      $('#things__btn span').toggleClass('things__arrow');
      $('.thingsToDo__logo').toggleClass('things__logo__color');
      
    }
  });

    $(window).on('scroll', function() {
    	if ($(this).scrollTop() > 0) {
         thingsNavbar.addClass('things__clicked');
      $('#things__btn span').removeClass('things__arrow');
      $('.thingsToDo__logo').removeClass('things__logo__color');     
    	 } 
    });
});











// var clickCount = 0;
 //    $('#things__btn').click(function () {
 //        if (clickCount% 2 == 0) {
 //              //do when open
 //               thingsNavbar.css({'transform' : 'translateY(0%)'});
 //               $('.thingsToDo__logo').css({'color' : '#B89B3C'});
 //               $('#things__btn span').css({'transform' : 'rotate(-90deg)'});
 //        } else {
 //             //do when closed
 //             thingsNavbar.css({'transform' : 'translateY(-100%)'});
 //             $('.thingsToDo__logo').css({'color' : '#fff'});
 //             $('#things__btn span').css({'transform' : 'rotate(90deg)'});
 //         }
 //        clickCount++;
 //    });


	// var animateEl = ['.animation__scroll__0', '.animation__scroll__2', '.animation__scroll__3'];
	// var documentEl = $(document);

  		//  documentEl.on('scroll', function() {
	//  	$.each(animateEl, function(index) {
	//  		var animateElOffset = $('.animation__scroll__' + index).offset().top/2.8;

	// 	if (documentEl.scrollTop() > animateElOffset && $('.animation__scroll__' + index).hasClass('text__hidden__' + index) )
	// 		$('.animation__scroll__' + index).removeClass('text__hidden__' + index);

	// });

	// });





	// 	documentEl.on('scroll', function() {
	// 	if (documentEl.scrollTop() > welcomeElOffset && welcomeEl.hasClass('text___hidden') )
	// 		welcomeEl.removeClass('text___hidden');

	// });



/////// function wich make parent element same size with image/////
  // $(document).ready(function() {
  // 	$('.galery__text__wraper').each(function() {
  // 		 var $this = $(this);
  //       w = $this.find('.galery__img').width(); // Width of the image inside .text__wraper
  //       h = $this.find('.galery__img').height(); // Height of the image inside .text__wraper
  //       $this.width(w).height(h);// Set width and height of .text__wraper to match image
  // 	});
  // });

  /////////////////////scroll down animation function///////////////////

	// var welcomeEl = $('.welcome__text');
	// var welcomeElOffset = welcomeEl.offset().top/3;
	// var documentEl = $(document);

	//	documentEl.on('scroll', function() {
	// 	if (documentEl.scrollTop() > welcomeElOffset && welcomeEl.hasClass('text___hidden') )
	// 		welcomeEl.removeClass('text___hidden');

	// });
