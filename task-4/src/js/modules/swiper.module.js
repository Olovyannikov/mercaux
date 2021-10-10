import Swiper from "swiper/swiper-bundle";

export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            prevEl: '.layout__prev',
            nextEl: '.layout__next'
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
