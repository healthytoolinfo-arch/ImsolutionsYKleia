<?php
// test-extensions.php
$required = ['openssl', 'sockets', 'filter', 'hash', 'mbstring'];
$missing = [];

foreach ($required as $ext) {
    if (!extension_loaded($ext)) {
        $missing[] = $ext;
    }
}

if (empty($missing)) {
    echo "✅ Todas las extensiones requeridas están instaladas";
} else {
    echo "❌ Extensiones faltantes: " . implode(', ', $missing);
}
?>