import { ownSlider, clickSlider, removeSlider } from './carrusel.components.js';
import { enlaceOfuscado } from './links.functions.js';
import { enviaEmailContacto } from './envioEmails.functions.js';
import { menu_mobile } from './menuMobile.components.js';

const slider = document.getElementById('slider');
const sliderTextBlock = document.getElementById('textblocks-section');

const detectWidth = () => {

    if (window.outerWidth < 480) {
        clickSlider(sliderTextBlock);
    } else {
        ownSlider(slider, 500, 5);
        removeSlider(sliderTextBlock);
    }
}
detectWidth();

window.addEventListener("resize", detectWidth);

new LazyLoad();
enlaceOfuscado();
enviaEmailContacto();

menu_mobile();