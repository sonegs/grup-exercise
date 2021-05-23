<?php

function enviaEmailContacto(){
		/* Aquí iría PHPMailer y el código correspondiente para enviar el mensaje */
        return true;

	}

    $email = isset($_POST['email']) ? $_POST['email'] : '';

    enviaEmailContacto($email);
?>