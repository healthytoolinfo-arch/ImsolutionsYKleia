<?php
// server-diagnostic.php
echo "=== DIAGNÓSTICO DEL SERVIDOR ===\n\n";

// 1. Versión PHP
echo "PHP Version: " . phpversion() . "\n";

// 2. Extensiones requeridas
$required_ext = ['openssl', 'sockets', 'pcre', 'filter', 'hash'];
echo "\nExtensiones:\n";
foreach ($required_ext as $ext) {
    echo "- $ext: " . (extension_loaded($ext) ? '✅' : '❌') . "\n";
}

// 3. Funciones requeridas
$required_func = ['fsockopen', 'stream_socket_client', 'mail'];
echo "\nFunciones:\n";
foreach ($required_func as $func) {
    echo "- $func(): " . (function_exists($func) ? '✅' : '❌') . "\n";
}

// 4. Configuración INI
echo "\nConfiguración PHP:\n";
echo "allow_url_fopen: " . ini_get('allow_url_fopen') . "\n";
echo "disable_functions: " . ini_get('disable_functions') . "\n";
echo "smtp_port: " . ini_get('smtp_port') . "\n";

// 5. Prueba de conexión SMTP
echo "\nPrueba SMTP:\n";
$host = 'smtp.hostinger.com';
$port = 587;
$fp = @fsockopen($host, $port, $errno, $errstr, 5);

if ($fp) {
    echo "Conexión exitosa a $host:$port\n";
    
    // Leer respuesta inicial
    $response = fgets($fp, 4096);
    echo "Respuesta: $response";
    
    fclose($fp);
} else {
    echo "Error: $errstr ($errno)\n";
}

// 6. Información de OpenSSL
echo "\nOpenSSL:\n";
echo "Versión: " . OPENSSL_VERSION_TEXT . "\n";
echo "Métodos SSL: " . implode(', ', openssl_get_cipher_methods()) . "\n";
?>