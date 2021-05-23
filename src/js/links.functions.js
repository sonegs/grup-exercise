const b64_to_utf8 = str => unescape(decodeURIComponent(window.atob(str)));

// Identificamos los enlaces ofuscados por su clase

const baseObject = document.getElementsByClassName("base");

export const enlaceOfuscado = () => {
    Array.prototype.map.call(baseObject, (base) => {
        base.addEventListener("click", () => { // al hacer click
            window.location.href = b64_to_utf8(base.dataset.base); // llamamos a la función que decodifica el código
        })
    });
}