import { fadeoutEffect } from './commons.components.js';

// Valida el campo email y el checkbox LOPD 
const validarContacto = (email, lopd) => {
    const emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // expresion regular para validar el email
    let validado = true;

    if (email.value == "" || !emailreg.test(email.value)) { // si el email no es correcto o está vacío
        const span = document.createElement('span'); // Creamos un mensaje de error
        span.id = "error_validacion_email";
        span.innerHTML = "Email incorrecto";
        email.after(span);
        fadeoutEffect.fadeOut(document.getElementById('error_validacion_email'), { duration: 3000 }); // Lo hacemos aparecer con el objeto fadeoutEffect
        validado = false;
    }

    if (!lopd.checked) { // Si el checkbox lopd no está marcado
        const span = document.createElement('span'); // Creamos un mensaje de error
        span.id = "error_validacion_lopd";
        span.innerHTML = "Campo obligatorio";
        lopd.after(span);
        fadeoutEffect.fadeOut(document.getElementById('error_validacion_lopd'), { duration: 3000 }); // Lo hacemos desaparecer con el objeto fadeoutEffect
        validado = false;
    }
    return validado;
}

// Envío de la dirección de correo al Backend
const sendBottom = document.getElementById("ibenviar");

export const enviaEmailContacto = () => {
    sendBottom.addEventListener("click", () => {

        const emailInput = document.getElementById("iemail");
        const lopdInput = document.getElementById("ilopd");

        if (validarContacto(emailInput, lopdInput)) {
            const request = new XMLHttpRequest();

            request.open('POST', 'src/php/sendEmail.php', true); // Abre el archivo sendEmail.php
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // Cabecera HTTP para enviar datos por POST
            request.send("email=" + emailInput.value); // Envía la dirección de correo en la variable 'email'

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) { // Fin de la petición
                    if (request.status == 200) {
                        const correct = document.getElementById("icorrecto");
                        correct.style.display = "block"; // Mostramos el mensaje de Envío correcto
                    } else {
                        const fail = document.getElementById("ierror");
                        fail.style.display = "block"; // Mostramos el mensaje de envío fallido
                    }
                }
            }
        }
    });
}