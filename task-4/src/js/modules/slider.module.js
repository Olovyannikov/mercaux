export const slider = () => {
    let slide = 0;
    const slides = document.querySelectorAll('.slider .article');
    const numSlides = slides.length;
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    let currentItems = document.querySelectorAll('.slider__slide');

    const currentSlide = () => {
        let itemToShow = Math.abs(slide % numSlides);
        [].forEach.call(slides,  item => {
            item.classList.remove('slider__slide_active');
        });
        slides[itemToShow].classList.add('slider__slide_active');
    };

    const next = () => {
        slide++;
        currentSlide();
    };

    const prev = () => {
        slide--;
        currentSlide();
    };

    const autonext = setInterval(() => next(), 2000);

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    currentItems.forEach(item => item.addEventListener('click', next)
    )
}
