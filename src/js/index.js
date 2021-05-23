import { moveCarousel, clickSlider } from './carrusel.components.js';
import { enlaceOfuscado } from './links.functions.js';
import { enviaEmailContacto } from './envioEmails.functions.js';
import { isMobile } from './device.components.js';


lazyload();
//(isMobile.any()) ? clickSlider(): moveCarousel();
clickSlider()
enlaceOfuscado();
enviaEmailContacto();