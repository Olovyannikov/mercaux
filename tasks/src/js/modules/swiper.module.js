import Swiper from "swiper/swiper-bundle";

export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            prevEl: '.slider__prev',
            nextEl: '.slider__next'
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        spaceBetween: 32,
        effect: 'fade',
        slidesPerView: 1,
    });
}
