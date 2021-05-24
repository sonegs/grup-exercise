export const menu_mobile = () => {
    const menu_mobile = document.getElementsByClassName('menu-mobile');
    let visible = false;
    for (let menu of menu_mobile) {
        menu.addEventListener("click", () => {
            if (visible) { // Si el submenu contacto está visible, desaparece
                document.getElementById('rowMobile').style.display = 'none';
                visible = false;
            } else { // creamos el submenu contacto para movil
                const header = document.querySelector("header");
                const menuRow = document.createElement('div');
                menuRow.id = 'rowMobile';
                menuRow.innerHTML = '<a href="#ifcontacto">Contacto</a>';
                header.after(menuRow);
                visible = true
            }
        });
    }
}