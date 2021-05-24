// Carrusel

let margin = 0;

const sliderTextContainerSon = document.querySelector('.textblocks-section>div');
const sliderImagesSon = document.querySelector('#slider>div');
const move = element => { // Desplazamiento del carrusel
    const widthElement = 500;
    const numElements = 5;
    console.log(element);
    margin = (margin + widthElement) % (widthElement * numElements); // margin a mover, dividido por el ancho total del div padre slider. Si queremos añadir más imágenes, solo debemos multiplicar el ancho de cada imagen por el número de imágenes
    element.style['margin-left'] = '-' + margin + 'px';
}

export const moveCarousel = () => { // mueve el carrusel de forma automatica en moviles. No implementado
    setInterval(() => {
        move(sliderTextContainerSon);
    }, 4 * 1000);
}

export const clickSlider = () => { // desplaza el carrusel al tapear en moviles

    document.getElementById('slider').addEventListener('click', () => {
        move(sliderImagesSon);
    });
}