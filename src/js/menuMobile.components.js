export const menu_mobile = () => {
    let menu_mobile = document.getElementsByClassName('menu-mobile');
    let visible = false;
    menu_mobile = [...menu_mobile]; // transformamos el objeto en array para poder iterar
    const header = document.querySelector("header");

    menu_mobile.map(menu => {
        menu.addEventListener("click", () => {

            if (visible) { // Si el submenu contacto está visible, desaparece

                const toggleMenuMobile = document.querySelector('.toggle-menuMobile');
                toggleMenuMobile.style.opacity = '0'; // Damos efecto al menu
                toggleMenuMobile.style.marginTop = '25px'; // Damos efecto al menu

                setTimeout(() => { header.removeChild(toggleMenuMobile); }, 500); // Eliminamos el menu

                visible = false;

            } else { // creamos el submenu contacto para movil

                const toggleMenuMobile = document.createElement('div'); // Div que almacena cada fila del menu
                toggleMenuMobile.className = 'toggle-menuMobile';

                const rowContact = document.createElement('div'); // Fila de contacto
                rowContact.className = 'rowMobile';
                rowContact.innerHTML = '<a href="#ifcontacto">Contacto</a>';

                header.appendChild(toggleMenuMobile); // Imprimimos el menú
                toggleMenuMobile.appendChild(rowContact); // imprimimos la fila de Contacto

                setTimeout(() => toggleMenuMobile.classList.add("animate"), 50); // le damos la clase Animate, encargada de dar efecto fadeIn

                visible = true

            }
        });
    })

}