<?php
require 'phpmailer/SMTP.php';

if (class_exists('PHPMailer\PHPMailer\SMTP')) {
    $methods = get_class_methods('PHPMailer\PHPMailer\SMTP');
    echo "✅ SMTP cargado correctamente. Métodos disponibles:<br>";
    echo "<pre>" . print_r($methods, true) . "</pre>";
} else {
    echo "❌ Error: Clase SMTP no encontrada";
}

$file = 'phpmailer/SMTP.php';
echo "<hr>Contenido de SMTP.php (primeras 10 líneas):<br>";
echo "<pre>";
foreach (file($file) as $i => $line) {
    if ($i >= 10) break;
    echo htmlspecialchars($line);
}
echo "</pre>";
?>