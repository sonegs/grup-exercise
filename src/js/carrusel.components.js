// Carrusel

let margin = 0;

const sliderDivSon = document.querySelector('#slider>div');
const move = () => { // Desplazamiento del carrusel
    margin = (margin + 400) % 1200
    sliderDivSon.style['margin-left'] = '-' + margin + 'px'
}

export const moveCarousel = () => { // mueve el carrusel de forma automatica
    setInterval(() => {
        move();
    }, 5 * 1000);
}

export const clickSlider = () => { // desplaza el carrusel al hacer click
    document.getElementById('slider').addEventListener('click', () => {
        move();
    });
}