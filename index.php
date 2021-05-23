<?php 
require "src/php/functions.php"
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./assets/vendor/fontawesome/css/iconos-footer.css" rel="stylesheet">
    <link rel="stylesheet" href="./src/css/styles.css">
    
    <title>Miguel Cobo Exercise</title>
</head>
<body>
    <header>
    <img class="lazyload" data-src="assets/images/logo-company.png">
        <div class="contacto">
            <a href="#ifcontacto">Contacto</a>
        </div>
        <div class="menu-mobile">
            <i class="fas fa-bars"></i>
        </div>
        
    </header>
    <div id="home">
        <div class="section main-section">
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <h1 class="subtitle">
                            Especialistas en seguro de moto
                        </h1>
                        <div class="main-text">
                            Todos los seguros parecen iguales hasta que los necesitas
                        </div>
                        <div class="main-button-row">
                            <div class="main-button">
                                <div class="base" data-base="<?=base64url_encode("#ifcontacto");?>">¿Quieres más información?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section textblocks-section">
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <div class="text">
                            <a href="#ifcontacto"><h2>El seguro más motero</h2></a> 
                            <div class="paragraph">Las motos no son un vehículo más, y tu seguro tampoco puede serlo. Fieles a esta idea, trabajamos diariamente para poder ofrecerte seguros de moto que se adapten a tus necesidades al mejor precio, con un servicio eficaz.</div>
                        </div>
                    </div>
                    <div class="img-container">
                        <img class="lazyload" data-src="assets/images/mainWeb/motorcycle-black.jpg">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <div class="text">
                            <a href=""><h2>Compara nuestros servicios</h2></a> <div class="paragraph">Accede a nuestro comparador de seguros de motos y, en menos de un minuto, elige entre las mejores alternativas del mercado. ¡Te garantizamos un seguro de moto con todos los servicios que nadie te ofrece!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <div class="text">
                            <a href=""><h2>Seguro de moto a medida</h2></a> <div class="paragraph">Para poder seleccionar la mejor oferta en seguros para motos, es importante comparar los precios y las coberturas que incluye cada compañía y así analizar cuál es el mejor seguro que puedes tener para tu moto, el que mejor se adapte a lo que buscas. El tipo de moto también puede ser un elemento importante a la hora de obtener tu póliza. Piensa por ejemplo que, un seguro de ciclomotor, tendrá diferentes precios que un seguro para scooters.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section carouseldesktop-section">
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <div class="text">
                            <h2>¡Participa en nuestro sorteo!</h2>
                            <div class="paragraph">
                            Somos algo más que un seguro de moto, somos tu partner de confianza. Por eso, si traes tu seguro, puedes ganar una de estas motos cada año.
                            </div>
                        </div>
                    </div>
                    <div class="img-container">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <div id="slider">
                                <div class="slider-container">
                                    <div class="img-carousel"></div>
                                    <div class="img-carousel"></div>
                                    <div class="img-carousel"></div>
                                    <div class="img-carousel"></div>
                                    <div class="img-carousel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div class="section form-section">
            <div class="container">
                <div class="row">
                    <form id="ifcontacto" name="fcontacto" method="post">
                        <div class="titulo">Formulario de Contacto</div>
                            
                        <div class="frase">Indícanos tu dirección de correo electrónico</div>
                        <div class="text-inputs">
                            <div class="name-input">
                                <input class="cajagr" placeholder="Escribe aquí tu nombre" id="nombre" name="nombre" type="text" />
                            </div>
                            <div class="email-input">
                                <input class="cajagr valida-email" placeholder="Escribe aquí tu email" id="iemail" name="email" type="text" />
                            </div>
                        </div>
                        <div class="message-input">
                            <textarea class="cajagr" placeholder="Envíanos tu consulta..." id="message" name="message" ></textarea>
                        </div>
                        <div class="checkbox">
                            <input class="validate-rgpd" value="1" type="checkbox" id="ilopd" name="aceptar" />
                            <span id="span-lopd">Estoy conforme con el Acuerdo de Procesamiento de Datos (RGPD)</span>
                        </div>
                        <div class="button-send-container">
                            <div id="ibenviar">Recibir en mi email</div>
                        </div>
                            
                    </form>
                </div>
                <div id="icorrecto">
                    <p class="send-message">El email se ha enviado correctamente. Por favor, revisa la bandeja de entrada o la lista de correo no deseado.</p>
                </div>
                <div id="ierror">
                    <p class="error-message">Ha habido un problema al enviar el email Por favor, inténtenlo de nuevo.</p>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="text-paragraph">
                <img class="lazyload" data-src="assets/images/logo-company.png">
            </div>
        </div>
        <div class="container">
            <div class="text-paragraph">
                <p>Quienes somos</p>
                <p>Trabaja con nosotros</p>
                <p>Contacto</p>
            </div>
        </div>
        <div class="container">
            <div class="redes-sociales">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-beta.2/lazyload.js"></script>
    <script type="module" src="./src/js/index.js"></script>
</body>

</html>