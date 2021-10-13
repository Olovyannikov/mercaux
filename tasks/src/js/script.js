import {header} from "./modules/header.module";
import {scrolling} from "./modules/scrolling.module";
import {swiper} from "./modules/swiper.module";
import modals from "./modules/modal.module";
import {form} from "./modules/form.module";
import {animeModule} from "./modules/anime.module";

window.addEventListener('DOMContentLoaded', () => {
    header();
    scrolling();
    swiper();
    modals();
    form();
    animeModule();
});
