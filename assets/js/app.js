

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

const pageNavigation = document.querySelectorAll('.getNavigation');

if (pageNavigation.length > 0) {
	const titles = document.querySelectorAll("h2, h3, h4, h5, h6");
	let text = "<ul>\n"
	let firstH2 = true;
	let firstSubtitle = true;
	titleNum = 0;
	titles.forEach(title => {
		if (!title.classList.contains("article__content-title") && !title.classList.contains("faq__question")) {
			if (title.tagName == "H2") {
				if (!firstSubtitle) {
					firstSubtitle = true;
					text += "</ul>\n</li>";
				}
				if (firstH2) {
					firstH2 = false;
					text += "<li>";
				}
				else {
					text += "</li>\n<li>";
				}
				text += `<a href="#title${titleNum}">` + title.innerHTML + "</a>\n";
			}
			else {
				firstH2 = true;
				if (firstSubtitle) {
					firstSubtitle = false;
					text += "<ul>\n<li>"
				}
				else {
					text += "<li>";
				}
				text += `<a href="#title${titleNum}">` + title.innerHTML + "</a></li>\n";
			}
			title.id = `title${titleNum}`
			titleNum += 1;
		}
	});
	text += "</li></ul>"
	pageNavigation.forEach((item) => {
		console.log(text);
		item.innerHTML = text;
	});
}

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);
		const topOffset = 180;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});