const ofusc = document.querySelector('.base');
export const enlaceOfuscado = () => {
    ofusc.addEventListener("click", () => {
        window.location.href = "http://localhost:1234/#ifcontacto"
    });
}