<?php 
require "src/php/functions.php"
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/css/styles.css">
    
    <title>Miguel Cobo Exercise</title>
</head>
<body>
    <header>
        <div class="title">Pont Grup</div>
        <div class="contacto">
            <a href="#ifcontacto">Contacto</a>
        </div>
    </header>
    <div id="home">
        <div class="section">
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
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        <div class="text">
                            <a href="#ifcontacto"><h2>El seguro más motero</h2></a> 
                            <div class="paragraph">Las motos no son un vehículo más, y tu seguro tampoco puede serlo. Fieles a esta idea, trabajamos diariamente para poder ofrecerte seguros de moto que se adapten a tus necesidades al mejor precio, con un servicio eficaz.</div>
                        </div>
                    </div>
                    <div class="img-container">
                        <img src="assets/images/mainWeb/motorcycle-black.jpg">
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
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="text-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper semper lorem, eget semper neque commodo ut. Vivamus faucibus vehicula mi sed aliquam. Ut et est bibendum, hendrerit ligula ut, gravida
                            nunc. Aenean bibendum massa id imperdiet semper. Donec pharetra augue sit amet orci condimentum, eget laoreet nisi pulvinar. Aliquam sit amet sem sagittis, rhoncus lacus interdum, vestibulum est. Cras ac diam hendrerit, porta urna
                            at, efficitur augue. Integer suscipit erat neque, sit amet feugiat augue cursus quis. Quisque efficitur iaculis orci, eu feugiat turpis viverra in. Fusce sit amet tempor leo. Proin sagittis lorem ut erat rhoncus interdum euismod et
                            metus. Praesent justo tortor, malesuada tincidunt aliquam a, sagittis sit amet nisi. Curabitur faucibus eros ut nisl auctor, eu lacinia purus pharetra. Duis tempor, mauris non sagittis ullamcorper, lectus mauris mollis erat, eu varius
                            metus nisi et elit. Nullam eget ante nunc.
                    </div>
                    <div class="img-container">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <div id="slider">
                                <div>
                                    <div class="slide" id=red></div>  
                                    <div class="slide" id=blue></div>  
                                    <div class="slide" id=green></div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <form id="ifcontacto" name="fcontacto" method="post">
                            <div class="titulo">Formulario de Contacto</div>
                            <div class="inline" id="inline">
                                <input class="cajagr valida-email" id="iemail" name="email" type="text" />
                                <div class="frase">Indícanos tu dirección de correo electrónico</div>
                            </div>
                            <div class="espaciobtn">
                                <div id="ibenviar">Recibir en mi email</div>
                            </div>
                            <div class="checkbox">
                                <div>
                                    <input class="validate-rgpd" value="1" type="checkbox" id="ilopd" name="aceptar" />
                                </div>
                                <span>Estoy conforme con el Acuerdo de Procesamiento de Datos (RGPD)</span>
                            </div>
                        </form>
                    </div>
                    <div id="icorrecto">
                        <p class="send-message">Tus datos se han enviado correctamente.</p>
                    </div>
                    <div id="ierror">
                        <p class="error-message">Ha habido un problema al enviar el email Por favor, inténtenlo de nuevo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="botton-container">
            <div class="botton">
            </div>
        </div>
    </footer>
    <script type="module" src="./src/js/index.js"></script>
</body>

</html>