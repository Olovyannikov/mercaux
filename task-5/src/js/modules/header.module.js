export const header = () => {
    let header = document.querySelector('.js-header');
    let scrollPrev = 0;

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 50 && scrolled > scrollPrev) {
            header.classList.add('out')
        } else {
            header.classList.remove('out')
        }
        scrollPrev = scrolled;
    });

    header.addEventListener('mouseenter', () => {
        if (scrollPrev > 50) header.classList.remove('out')
    });

    header.addEventListener('mouseleave', () => {
        if (scrollPrev > 50) header.classList.add('out');
    });
}
