<?php

function enviaEmailContacto(){
		
        return true;

	}

    $email = isset($_POST['email']) ? $_POST['email'] : '';

    enviaEmailContacto($email);
?>