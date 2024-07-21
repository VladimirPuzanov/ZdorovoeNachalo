const pricelistSwiperCheck = document.querySelectorAll('.pricelist');
if (pricelistSwiperCheck.length > 0) {
	pricelistSwiperCheck.forEach((slider) => {
		const pricelistSlider = new Swiper(slider.querySelector('.pricelist__swiper'), {
			direction: 'horizontal',
			slidesPerView: 1.1,
			grabCursor: true,
			spaceBetween: 10,
			navigation: {
				nextEl: slider.querySelector('.next-btn'),
				prevEl: slider.querySelector('.prev-btn'),
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

const reviewSlider = document.querySelectorAll('.review');
if (reviewSlider.length > 0) {
	reviewSlider.forEach((slider) => {
		const reviewSlider = new Swiper(slider.querySelector('.review__swiper'), {
			direction: 'horizontal',
			slidesPerView: 1.1,
			grabCursor: true,
			spaceBetween: 10,
			navigation: {
				nextEl: slider.querySelector('.next-btn'),
				prevEl: slider.querySelector('.prev-btn'),
			},
			breakpoints: {
				360: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				950: {
					slidesPerView: 2,
					spaceBetween: 20,
				}
			},
			pagination: {
        el: ".review__swiper-pagination",
      },
		});
	})
}