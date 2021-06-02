// Carrusel

let margin = 0;

const move = (element, widthElement, numElements) => { // Desplazamiento del carrusel
    margin = (margin + widthElement) % (widthElement * numElements); // margin a mover, dividido por el ancho total del div padre slider. Si queremos añadir más imágenes, solo debemos multiplicar el ancho de cada imagen por el número de imágenes
    element.style['margin-left'] = '-' + margin + 'px';
}

export const moveCarousel = textBlockSlider => { // mueve el carrusel de forma automatica en moviles.

    const sliderTextContainerSon = textBlockSlider.children[0];

    setInterval(() => {
        move(sliderTextContainerSon, window.innerWidth, 3);
    }, 4 * 1000);

}

export const clickSlider = (slider, widthElement, numElements) => { // desplaza el carrusel al tapear en moviles

    const sliderImagesSon = slider.children[0];

    slider.addEventListener('click', () => {
        move(sliderImagesSon, widthElement, numElements);
    });

}

export const giveWidth = slider => { // modifica el ancho de los div del Carrusel para adaptarlos al ancho del navegador

    slider.style.width = `${window.innerWidth}px`;

    slider.children[0].style.width = `${window.innerWidth * 3}px`;

    let grandSons = [...slider.children[0].children]; // transformamos el objeto en array para poder iterar
    grandSons.map(grandSon => {
        grandSon.style.width = `${window.innerWidth}px`
    })

}