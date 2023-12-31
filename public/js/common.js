"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		}, 
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}
 
	// let breadcrumbliders = document.querySelectorAll('.breadcrumb-slider--js');
	// if(breadcrumbliders.length) {

	// 	for (const item of breadcrumbliders) {
			
	// 		new Splide(item, {
	// 			autoWidth: true,
	// 			perMove: 1,
	// 			gap: 0,
	// 			arrows: false,
	// 			pagination: false,
	// 		}).mount();
	// 	}
	// }
	let catalogsliders = document.querySelectorAll('.sCatalog__slider--js');
	if(catalogsliders.length) {

		for (const item of catalogsliders) {
			
			new Splide(item, {
				autoWidth: true,
				perMove: 1,
				gap: 30,
				arrows: false,
				pagination: false,
			}).mount();
		}
	}

	let storiesSliders = document.querySelector('.sStories__slider--js');
	if (storiesSliders) {

		new Splide(storiesSliders,{ 
			perPage: 1,
			perMove: 1,
			gap: '1rem',
			mediaQuery: 'min', 
			pagination: false,
			breakpoints: {
				576: {
					perPage: 2,
				},

				768: {
					perPage: 3,
				}, 

				992: {
					perPage: 4,
				}, 
				1200: {
					perPage: 5,
					gap: '1.8rem',
				},
				
				
			}
		}).mount();
	}
		

	document.addEventListener("click", function (e) {
		let target = e.target.closest(".top-nav__btn--search-toggle-js");
		if (target) {
			document.querySelector('.search-block').classList.toggle("active");
    }
	})


	function cardSliders(slider) {

		const catalogCards = $(slider);
		for (const card of catalogCards) {
			let cardSlider = new Splide(card.querySelector(".slider-card-js"), {  
				perMove: 1,
				perPage: 1,
				gap: 0,
			}).mount(); 
			//  при наведении меняется картинки на слайдере 
			$(card).on('mouseenter', '.splide__pagination li', function () {
				cardSlider.go($(this).index());
			});

		}
	}

	cardSliders('.card-slider');


	$(".range-wrap").each(function () {
		var _self = $(this);
		var $range = _self.find(".slider-js");  

		$range.ionRangeSlider({
			skin: "round",
			type: "double", 
			grid: false,
			grid_snap: false, 
			// hide_min_max: true,
			// hide_from_to: true, 
		}); 

	})

	$(document).on("click", '.toggle-filter-mobile-js', function () {
		$('.catalogFilter  ').toggleClass('active');
		$('body').toggleClass('fixed2');
	})

	let mainSlider = document.querySelector('.sProdHead__slider-lg--js');

	if (mainSlider) {

		var main = new Splide('.sProdHead__slider-lg--js', { 
			rewind: true,
			// pagination: false,
			// arrows: false,
		});

		var thumbnails = new Splide('.sProdHead__slider-sm--js', {
			// autoWidth: true,
			direction: 'ttb',
			height: '100%',
			gap: 10,
			// perPage: 5,
			autoWidth: true,
			rewind: true,
			pagination: false,
			isNavigation: true,
			arrows: false,
		});
		
		main.sync(thumbnails);
		main.mount();
		thumbnails.mount();
	}


	
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }