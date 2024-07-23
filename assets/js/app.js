const menuItems = document.querySelectorAll(".menu>li");

if (window.innerWidth <= 1150) {
	headerBurger = document.querySelector(".header__burger-button");
	if (headerBurger) {
		navigationHeight = 0;
		headerBurger.addEventListener("click", function () {
			navigation = document.querySelector(".header__navigation");
			if (navigation) {
				attention = document.querySelector(".attention");
				if (navigation.style.maxHeight) {
					navigation.removeAttribute("style");
					navigationHeight = 0;
					subs = document.querySelectorAll(".menu_active");
					attention.removeAttribute("style");
					subs.forEach(sub => {
						submenu = sub.querySelector(".submenu");
						submenu.removeAttribute("style");
						sub.classList.remove("menu_active");
					});
				}
				else {
					navigationHeight = navigationHeight + navigation.scrollHeight;
					navigation.style.maxHeight = navigationHeight + "px"
					attention.style.maxHeight = 0;
					attention.style.padding = 0;
				}
			}
		})
	}

	if (menuItems.length > 0) {
		menuItems.forEach(menuItem => {
			if (menuItem.querySelector(".submenu")) {
				menuItem.addEventListener("click", function () {
					this.classList.toggle("menu_active");
					submenu = this.querySelector(".submenu");
					if (submenu.style.maxHeight) {
						navigationHeight = navigationHeight - submenu.scrollHeight;
						navigation.style.maxHeight = navigationHeight + "px";
						submenu.removeAttribute("style");
					}
					else {
						submenu.style.maxHeight = submenu.scrollHeight + "px";
						navigationHeight = navigationHeight + submenu.scrollHeight;
						navigation.style.maxHeight = navigationHeight + "px";
					}
				})
			}
		});
	}
}
else {
	if (menuItems.length > 0) {
		menuItems.forEach(menuItem => {
			if (menuItem.querySelector(".submenu")){
				menuItem.addEventListener("click", function(){
					if(this.querySelector(".submenu").style.maxHeight){
						this.querySelector(".submenu").removeAttribute("style");
					}
					else{
						activeMenu = document.querySelector(".menu_active");
						if(activeMenu){
							activeMenu.classList.remove("menu_active");
							activeMenu.querySelector(".submenu").removeAttribute("style");
						}
						menuItem.querySelector(".submenu").style.maxHeight = menuItem.querySelector(".submenu").scrollHeight + "px";
					}
					this.classList.toggle("menu_active");
				})
			}
		});
	}
}

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

const doctorsSliderCheck = document.querySelectorAll('.doctors');
if (doctorsSliderCheck.length > 0) {
	doctorsSliderCheck.forEach((slider) => {
		const doctorsSliderCheck = new Swiper(slider.querySelector('.doctors__swiper'), {
			direction: 'horizontal',
			slidesPerView: 1.1,
			grabCursor: true,
			spaceBetween: 10,
			navigation: {
				nextEl: slider.querySelector('.next-btn'),
				prevEl: slider.querySelector('.prev-btn')
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
				el: ".doctor__swiper-pagination",
			},
		});
	})
}

const licenseSliderCheck = document.querySelectorAll('.license');
if (licenseSliderCheck.length > 0) {
	licenseSliderCheck.forEach((slider) => {
		const licenseSliderCheck = new Swiper(slider.querySelector('.license__swiper'), {
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
					slidesPerView: 4,
					spaceBetween: 20,
				}
			},
			pagination: {
				el: ".license__swiper-pagination",
			},
		});
	})
}

faq = document.querySelectorAll(".faq__question");
if (faq.length > 0) {
	faq.forEach(question => {
		question.addEventListener("click", function () {
			button = this.querySelector(".faq__button");
			answer = this.nextElementSibling;
			button.classList.toggle("faq__button_active");
			if (answer.style.maxHeight) {
				answer.removeAttribute("style");
			}
			else {
				answer.style.maxHeight = answer.scrollHeight + "px";
			}
		})
	});
}

window.onscroll = function () { fixedNavbar() };

fixedHeader = document.querySelector(".header__logo-row-wrapper");
if (fixedHeader) {
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

/* Mask phone */
[].forEach.call(document.querySelectorAll('input[type=tel]'), function (input) {
	let keyCode;
	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		let pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		let matrix = "+7 (___) ___ ____",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
		i = new_value.indexOf("_");
		if (i != -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i)
		}
		let reg = matrix.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}"
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		if (event.type == "blur" && this.value.length < 5) this.value = ""
	}

	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)

});
/* End Mask phone */

// Popups
function popupClose(popupActive) {
	popupActive.classList.remove('open');
	document.body.classList.remove('lock');
	document.querySelector('html').removeAttribute('style');
	document.querySelector('html').classList.remove('lock');

}
const popupOpenBtns = document.querySelectorAll('.popup-btn');
const popups = document.querySelectorAll('.popup');
const originalTitlePopup2 = document.querySelector('.original-title').innerHTML;
const closePopupBtns = document.querySelectorAll('.close-popup');
closePopupBtns.forEach(function (el) {
	el.addEventListener('click', function (e) {
		popupClose(e.target.closest('.popup'));
	});
});
popupOpenBtns.forEach(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		const path = e.currentTarget.dataset.path;
		const currentPopup = document.querySelector(`[data-target="${path}"]`);
		if (currentPopup) {
			popups.forEach(function (popup) {
				popupClose(popup);
				popup.addEventListener('click', function (e) {
					if (!e.target.closest('.popup__content')) {
						popupClose(e.target.closest('.popup'));
					}
				});
			});
			currentPopup.classList.add('open');
			if (currentPopup.getAttribute('data-target') == 'popup-change') {
				let originaTitle = currentPopup.querySelector('.original-title');
				if (el.classList.contains('change__item-btn')) {
					if (el.classList.contains('change__item-btn_current')) {
						originaTitle.textContent = el.textContent;
					}
					else {
						let currentItem = el.closest('.change__item-title');
						let currentTitile = currentItem.querySelector('.current-title');
						if (el.classList.contains('doctor__btn')) {
							originaTitle.innerHTML = 'Записаться на приём к врачу:' + currentTitile.innerHTML
						}
						else {
							originaTitle.innerHTML = currentTitile.innerHTML
						}
					}
				}

				else {
					originaTitle.innerHTML = originalTitlePopup2;
				}
			}
			if (el.classList.contains('reviews__btn')) {

				let currentItem = el.closest('.reviews__item')
				let originalName = currentPopup.querySelector('.reviews__name_original');
				let originalText = currentPopup.querySelector('.reviews__text_original');
				originalName.innerHTML = currentItem.querySelector('.reviews__name').innerHTML;
				originalText.innerHTML = currentItem.querySelector('.reviews__text').innerHTML;
			}
		}
	});
});

const textBlocks = document.querySelectorAll(".text-block");
    if (textBlocks.length > 0) {
        textBlocks.forEach(textBlock => {
            tables = textBlock.querySelectorAll("table");
            if (tables) {
                tables.forEach(table => {
                    table.classList.add("article__table");
                    let tableWrapper = document.createElement('div');
                    tableWrapper.classList.add("article__table-wrapper");
                    table.parentNode.insertBefore(tableWrapper, table);
                    tableWrapper.appendChild(table);
                });
            }
        });
     }
/* end popups */

Fancybox.bind("[data-fancybox]", {});