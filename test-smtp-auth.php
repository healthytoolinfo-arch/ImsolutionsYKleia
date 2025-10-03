<?php
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$smtp = new SMTP();
$smtp->do_debug = SMTP::DEBUG_CONNECTION; // Depuración detallada

try {
    // 1. Conexión al servidor SMTP
    if (!$smtp->connect('smtp.hostinger.com', 587)) {
        throw new Exception("Conexión fallida");
    }
    
    // 2. Inicio de sesión SMTP
    $hostname = gethostname();
    if (!$smtp->hello($hostname)) {
        throw new Exception("Saludo EHLO fallido: " . $smtp->getError()['error']);
    }
    
    // 3. Iniciar TLS
    if (!$smtp->startTLS()) {
        throw new Exception("TLS fallido: " . $smtp->getError()['error']);
    }
    
    // 4. Re-envío de EHLO después de TLS
    if (!$smtp->hello($hostname)) {
        throw new Exception("EHLO después de TLS fallido");
    }
    
    // 5. Autenticación
    if (!$smtp->authenticate('hello@imsolutions.studio', 'IveMarioTheBest1!')) {
        throw new Exception("Autenticación fallida: " . $smtp->getError()['error']);
    }
    
    // 6. Si llegamos aquí, todo funcionó
    echo "✅ Autenticación exitosa!";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage();
    
    // Registrar errores detallados
    if ($smtp->getError()) {
        echo "\nDetalles SMTP: ";
        print_r($smtp->getError());
    }
}

$smtp->quit(); // Cerrar conexión
?>