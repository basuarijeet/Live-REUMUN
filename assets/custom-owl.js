$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 5,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		690:{
			items: 2
		},
		1000:{
			items: 3
		},
		2500: {
			items: 5
		}
	}
});