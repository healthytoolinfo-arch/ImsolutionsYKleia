<?php
// test-smtp.php
$host = 'smtp.hostinger.com';
$port = 587;

$fp = @fsockopen($host, $port, $errno, $errstr, 10);

if ($fp) {
    echo "✅ Conexión exitosa a $host:$port";
    fclose($fp);
} else {
    echo "❌ Error conectando a SMTP: $errstr ($errno)";
}
?>