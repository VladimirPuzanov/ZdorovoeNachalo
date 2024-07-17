const pricelistSwiperCheck = document.querySelectorAll('.pricelist');
if (pricelistSwiperCheck.length > 0) {
	pricelistSwiperCheck.forEach((slider) => {
		const pricelistSlider = new Swiper(slider.querySelector('.pricelist__swiper'), {
			direction: 'horizontal',
			slidesPerView: 1.1,
			grabCursor: true,
			spaceBetween: 10,
			navigation: {
				nextEl: slider.querySelector('nextButton'),
				prevEl: slider.querySelector('prevButton'),
			},
			breakpoints: {
				360: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				950: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			},
			pagination: {
        el: ".pricelist__swiper-pagination",
      },
		});
	})
}