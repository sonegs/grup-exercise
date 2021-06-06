import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);
// Carrusel

let margin = 0;

export const clickSlider = (textBlockSection) => { // desplaza el carrusel al tapear en moviles

    let grandSons = [...textBlockSection.children[0].children]; // transformamos el objeto en array para poder iterar
    textBlockSection.className = 'section swiper-container'; // Añadimos las clases del carousel de swiper.js
    textBlockSection.style.width = outerWidth;
    textBlockSection.children[0].className = 'slider-container swiper-wrapper';

    // Creamos los botones para mover el carousel

    const prevButton = document.createElement("div");
    prevButton.className = 'swiper-button-prev';

    const nextButton = document.createElement("div");
    nextButton.className = 'swiper-button-next';

    grandSons.map(grandSon => {
        grandSon.className = 'container swiper-slide';

    })
    textBlockSection.children[0].after(nextButton);
    textBlockSection.children[0].after(prevButton);

    // Añadimos el objeto swiper

    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Autoplay
        autoplay: {
            delay: 5000,
        },
        preloadImages: false,
        // Enable lazy loading
        lazy: true
    });

}

export const removeSlider = (textBlockSection) => { // desplaza el carrusel al tapear en moviles

    let grandSons = [...textBlockSection.children[0].children]; // transformamos el objeto en array para poder iterar
    textBlockSection.className = 'section'; // Añadimos las clases del carousel de swiper.js

    textBlockSection.children[0].className = 'slider-container';

    // Creamos los botones para mover el carousel


    const nextButton = [...document.getElementsByClassName("swiper-button-next")];
    const prevButton = [...document.getElementsByClassName("swiper-button-prev")];

    grandSons.map(grandSon => {
        grandSon.className = 'container';
        grandSon.style.width = outerWidth;
    })
    nextButton.map(button => {
        textBlockSection.removeChild(button);
    })
    prevButton.map(button => {
        textBlockSection.removeChild(button);
    })

}
const move = (element, widthElement, numElements) => { // Desplazamiento del carrusel
    margin = (margin + widthElement) % (widthElement * numElements); // margin a mover, dividido por el ancho total del div padre slider. Si queremos añadir más imágenes, solo debemos multiplicar el ancho de cada imagen por el número de imágenes
    element.style['margin-left'] = '-' + margin + 'px';
}

export const ownSlider = (slider, widthElement, numElements) => { // desplaza el carrusel de escritorio

    const sliderImagesSon = slider.children[0];

    slider.addEventListener('click', () => {
        move(sliderImagesSon, widthElement, numElements);
    });

}