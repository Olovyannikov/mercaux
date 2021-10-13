import anime from 'animejs/lib/anime.es.js';

export const animeModule = () => {
    const items = document.querySelector('.anime__content--slides');
    let translate = 100;

    const a = () => {
        anime(
            {
                targets: items,
                translateX: `-${translate}%`,
                easing: "easeInOutQuint",
                duration: 5000,
                complete: function(a) {
                    translate += 100;
                    a();
                }
            }
        );
    }

    a();

}
