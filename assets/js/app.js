

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

faq = document.querySelectorAll(".faq__question");
if(faq.length > 0){
	faq.forEach(question => {
		question.addEventListener("click", function () {
			button = this.querySelector(".faq__button");
			answer = this.nextElementSibling;
			button.classList.toggle("faq__button_active");
			if(answer.style.maxHeight){
				answer.removeAttribute("style");
			}
			else{
				answer.style.maxHeight = answer.scrollHeight + "px";
			}
		})
	});
}

window.onscroll = function () { fixedNavbar() };

fixedHeader = document.querySelector(".header__logo-row-wrapper");
if(fixedHeader){
	var sticky = fixedHeader.offsetTop;
	function fixedNavbar() {
	if (window.scrollY >= sticky) {
		if (!fixedHeader.classList.contains("header__logo-row-wrapper_active")) {
			fixedHeader.classList.add("header__logo-row-wrapper_active");
			document.querySelector(".intro").style.marginTop = fixedHeader.scrollHeight + "px";
		}
	} else {
		fixedHeader.classList.remove("header__logo-row-wrapper_active");
		document.querySelector(".intro").removeAttribute("style");
	}
}
}