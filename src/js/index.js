import { moveCarousel, clickSlider, giveWidth } from './carrusel.components.js';
import { enlaceOfuscado } from './links.functions.js';
import { enviaEmailContacto } from './envioEmails.functions.js';
import { menu_mobile } from './menuMobile.components.js';

const slider = document.getElementById('slider');
const sliderTextBlock = document.getElementById('textblocks-section');

if (window.innerWidth < 480) {
    giveWidth(sliderTextBlock);
    moveCarousel(sliderTextBlock);
    clickSlider(sliderTextBlock, window.innerWidth, 3);
} else {
    clickSlider(slider, 500, 5);
}

lazyload();
enlaceOfuscado();
enviaEmailContacto();
menu_mobile();