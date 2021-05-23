<?php

function base64url_encode($data){ // Codifica el enlace que se va a ofuscar en index.php

	return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

?>