$(function () {
	//THE DOM IS READY

	// ------------------------------------
	//-----------WELCOME SLIDER------------
	//-------------------------------------
	$('#welcome_slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 1,
		margin: 0,
	})


	// ------------------------------------
	//-----------BANNER SLIDER------------
	//-------------------------------------
	$('#banner_slider').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		items: 1,
		margin: 0,
	})


	// // ---------------------------------
	// //---------FEEDBACK SLIDER----------
	// //----------------------------------
	// $('#feedback_slider').owlCarousel({
	// 	loop: false,
	// 	items: 1,
	// 	dots: true,
	// 	dotsEach: 1,
	// 	margin: 0
	// })

	// // -------------------------------------
	// // -----------CLIENT-SLIDER-------------
	// // -------------------------------------
	// $("#client_slider").owlCarousel({
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots: false,
	// 	items: 1,
	// 	smartSpeed: 500,
	// 	responsive: {
	// 		576: {
	// 			items: 2
	// 		},
	// 		768: {
	// 			//Adding autoplay slide for medium and above devices
	// 			//Hover to pause autoplay
	// 			autoplay: true,
	// 			autoplayTimeout: 2000,
	// 			autoplayHoverPause: true,
	// 			items: 3,
	// 			margin: 0
	// 		},
	// 		992: {
	// 			autoplay: true,
	// 			autoplayTimeout: 2000,
	// 			autoplayHoverPause: true,
	// 			items: 4
	// 		},
	// 		1200: {
	// 			autoplay: true,
	// 			autoplayTimeout: 2000,
	// 			autoplayHoverPause: true,
	// 			items: 6
	// 		}
	// 	}
	// })
});
