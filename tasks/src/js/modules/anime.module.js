import anime from 'animejs/lib/anime.es.js';

export const animeModule = () => {
    const items = document.querySelector('.anime__content--slides');
    const sub = document.querySelector('.anime__item--sub');
    const layer1 = document.querySelector('.anime__layer--1');
    const layer2 = document.querySelector('.anime__layer--2');
    const layer3 = document.querySelector('.anime__layer--3');

    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 2500
    });

    tl.add({

    }).add({
        targets: items,
        translateX: '-100%'
    }).add({
        targets: sub,
        opacity: 1,
        duration: 10
    }).add({
        targets: layer1,
        bottom: '10%',
    })
}
