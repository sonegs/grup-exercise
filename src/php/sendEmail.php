<?php

function enviaEmailContacto($name, $email, $message){
		/* Aquí iría PHPMailer y el código correspondiente para enviar el mensaje */
        return true;

	}

    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    enviaEmailContacto($name, $email, $message);
?>