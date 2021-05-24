import { fadeoutEffect } from './commons.components.js';

// Valida los campos del formulario 
let error_email_visible = false;
let error_lopd_visible = false;
let error_name_visible = false;
let error_message_visible = false;

const mensajeError = (mensaje, validado) => { // Creamos un mensaje de error e indica que el campo no está validado
    const span = document.createElement('span');
    const button = document.getElementById('ibenviar');
    span.id = "error_validacion";
    span.innerHTML = mensaje;
    button.after(span);
    fadeoutEffect.fadeOut(document.getElementById('error_validacion'), { duration: 5000 }); // Lo hacemos aparecer con el objeto fadeoutEffect
    validado = false;
    return validado;
}


const validarContacto = (email, lopd, name, message) => { // Valida el formulario de contacto
    const emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // expresion regular para validar el email
    let validado = true;

    if (email.value == "" || !emailreg.test(email.value)) { // si el email no es correcto o está vacío
        if (!error_email_visible) { // si el mensaje de error aun está visible
            validado = mensajeError('Email incorrecto', validado);
            error_email_visible = true;

            setTimeout(() => { // De esta forma, no pueden aparecer los mismos mensajes de error al mismo tiempo
                error_email_visible = false
            }, 5000);
        } else {
            validado = false;
        }
    }

    if (!lopd.checked) { // Si el checkbox lopd no está marcado
        if (!error_lopd_visible) { // si el mensaje de error aun está visible
            validado = mensajeError('Debe aceptar la LOPD', validado);
            error_lopd_visible = true;

            setTimeout(() => {
                error_lopd_visible = false
            }, 5000);
        } else {
            validado = false;
        }
    }

    if (name.value == "") { // si el email no es correcto o está vacío
        if (!error_name_visible) { // si el mensaje de error aun está visible
            validado = mensajeError('El nombre no es válido', validado);
            error_name_visible = true;

            setTimeout(() => {
                error_name_visible = false
            }, 5000);
        } else {
            validado = false;
        }
    }

    if (message.value == "") { // si el email no es correcto o está vacío
        if (!error_message_visible) { // si el mensaje de error aun está visible
            validado = mensajeError('El mensaje no es válido', validado);
            error_message_visible = true;
            setTimeout(() => {
                error_message_visible = false
            }, 5000);
        } else {
            validado = false;
        }
    }
    return validado;
}

// Envío de la dirección de correo al Backend
const sendBottom = document.getElementById("ibenviar");

export const enviaEmailContacto = () => {
    sendBottom.addEventListener("click", () => {

        const emailInput = document.getElementById("iemail");
        const lopdInput = document.getElementById("ilopd");
        const nameInput = document.getElementById("nombre");
        const messageInput = document.getElementById("message");

        if (validarContacto(emailInput, lopdInput, nameInput, messageInput)) {
            const request = new XMLHttpRequest();

            request.open('POST', 'src/php/sendEmail.php', true); // Abre el archivo sendEmail.php
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // Cabecera HTTP para enviar datos por POST
            request.send("email=" + emailInput.value); // Envía la dirección de correo en la variable 'email'

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) { // Fin de la petición
                    if (request.status == 200) {
                        const correct = document.getElementById("icorrecto");
                        correct.style.display = "block"; // Mostramos el mensaje de Envío correcto
                        fadeoutEffect.fadeOut(document.getElementById('ifcontacto'), { duration: 1000 });
                    } else {
                        const fail = document.getElementById("ierror");
                        fail.style.display = "block"; // Mostramos el mensaje de envío fallido
                    }
                }
            }
        }
    });
}