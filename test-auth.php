<?php
// test-auth.php
require 'phpmailer/SMTP.php';

$smtp = new SMTP;
$smtp->do_debug = SMTP::DEBUG_CONNECTION;

try {
    if (!$smtp->connect('smtp.hostinger.com', 587)) {
        throw new Exception("Conexión fallida");
    }
    
    if (!$smtp->hello(gethostname())) {
        throw new Exception("Saludo EHLO fallido");
    }
    
    if (!$smtp->startTLS()) {
        throw new Exception("TLS fallido");
    }
    
    if (!$smtp->authenticate('hello@imsolutions.studio', 'TuContraseñaReal')) {
        throw new Exception("Autenticación fallida");
    }
    
    echo "✅ Autenticación exitosa";
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage();
    if ($smtp->getError()) {
        echo "\nDetalles: " . print_r($smtp->getError(), true);
    }
}
$smtp->quit();
?>