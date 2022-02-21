var swiper = new Swiper(".my-swiper", {
	navigation: {
		nextEl: ".swiper-next1",
		prevEl: ".swiper-prev1",
	},
});

var swiper2 = new Swiper(".my-swiper2", {
	navigation: {
		nextEl: ".swiper-next2",
		prevEl: ".swiper-prev2",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 30,
});

var swiper3 = new Swiper(".my-swiper3", {
	navigation: {
		nextEl: ".swiper-next3",
		prevEl: ".swiper-prev3",
	},
	pagination: {
		el: ".swiper-pagination2",
		clickable: true,
	},
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 30,
});