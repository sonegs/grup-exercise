// Carrusel

let margin = 0;


const sliderTextContainerSon = document.querySelector('#slider>div');
const sliderImagesSon = document.querySelector('#slider>div');
const move = element => { // Desplazamiento del carrusel
    const widthImage = 500;
    const numImages = 5;
    console.log(element);
    margin = (margin + widthImage) % (widthImage * numImages); // margin a mover, dividido por el ancho total del div padre slider. Si queremos añadir más imágenes, solo debemos multiplicar el ancho de cada imagen por el número de imágenes
    element.style['margin-left'] = '-' + margin + 'px';
}

export const moveCarousel = () => { // mueve el carrusel de forma automatica en escritorio

    setInterval(() => {
        move(sliderImagesSon);
    }, 4 * 1000);
}

export const clickSlider = () => { // desplaza el carrusel al tapear en moviles

    document.getElementById('slider').addEventListener('click', () => {
        move(sliderImagesSon);
    });
}