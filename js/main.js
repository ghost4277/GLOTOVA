const swiper = new Swiper('#product-line', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },

    }
})
