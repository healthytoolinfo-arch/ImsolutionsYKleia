# Kleia - Versión PHP/HTML

Esta es la versión PHP/HTML estática de la página web de Kleia, convertida desde React para servidores que solo soportan PHP y HTML.

## 🚀 Características

- **Diseño exacto**: Replica fielmente el diseño original de React
- **Responsive**: Funciona perfectamente en móvil, tablet y desktop
- **Navegación fluida**: Scroll suave y navegación por secciones
- **Menú móvil**: Hamburger menu con animaciones
- **Formulario de contacto**: Sistema PHP para manejo de formularios
- **Efectos visuales**: Cartas apiladas y animaciones
- **SEO optimizado**: Meta tags y estructura semántica

## 📁 Estructura de Archivos

```
/
├── index.php              # Página principal
├── styles.css            # Todos los estilos CSS
├── script.js             # Funcionalidad JavaScript
├── contact.php           # Procesamiento de formularios
├── contact-form.html     # Formulario HTML alternativo
├── contact_log.txt       # Log de contactos (se genera automáticamente)
└── README.md            # Esta documentación
```

## ⚙️ Instalación

### Requisitos
- Servidor web con PHP 7.0 o superior
- Función `mail()` habilitada para envío de emails

### Pasos de instalación

1. **Subir archivos**: Sube todos los archivos a tu servidor web
2. **Configurar email**: Edita `contact.php` y cambia la línea:
   ```php
   $recipient_email = "hello@kleia.app"; // Cambia por tu email
   ```
3. **Permisos**: Asegúrate de que el archivo `contact_log.txt` tenga permisos de escritura
4. **Probar**: Accede a `index.php` en tu navegador

## 🔧 Configuración

### Email de contacto

Edita `contact.php` en la línea 3:
```php
$recipient_email = "tu-email@dominio.com";
```

### Personalización de colores

Edita `styles.css` en las variables CSS:
```css
:root {
    --kleia-primary: #4956F3;          /* Color principal */
    --kleia-bg-main: #EBEBF6;          /* Fondo principal */
    --kleia-bg-card: #F6F8FC;          /* Fondo de tarjetas */
    /* ... más variables ... */
}
```

### Formulario alternativo

Si prefieres usar el formulario PHP en lugar de Tally:

1. Abre `index.php`
2. Busca las líneas comentadas al final del archivo
3. Descomenta el código JavaScript que reemplaza los botones de Tally

## 📱 Funcionalidades

### Navegación
- **Scroll suave** entre secciones
- **Navegación sticky** siempre visible
- **Indicador activo** de sección actual
- **Menú móvil** con animaciones

### Formulario de contacto
- **Validación** del lado del servidor y cliente
- **Anti-spam** con campo honeypot
- **Logging** de contactos
- **Mensajes** de éxito y error
- **Diseño responsive**

### Efectos visuales
- **Cartas apiladas** con efectos de scroll
- **Animaciones** de entrada
- **Parallax sutil** en imagen hero
- **Transiciones fluidas**

## 🎨 Personalización

### Cambiar imágenes

Las imágenes actuales usan URLs de Builder.io. Para cambiar:

1. Sube tus imágenes al servidor
2. Reemplaza las URLs en `index.php`:
   ```html
   <!-- Ejemplo -->
   <img src="https://api.builder.io/api/v1/image/..." 
        alt="..." />
   <!-- Por -->
   <img src="imagenes/mi-imagen.jpg" 
        alt="..." />
   ```

### Modificar contenido

Todo el contenido está en `index.php`. Busca las secciones:
- Hero: línea ~176
- "What is kleia": línea ~204
- "Why It Feels So Hard": línea ~230
- "Let's Fix That": línea ~272
- Footer: línea ~389

### Agregar nuevas secciones

1. Agrega el HTML en `index.php`
2. Agrega los estilos en `styles.css`
3. Actualiza la navegación en `script.js` (array `sections`)

## 🔍 SEO

La página incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Twitter Cards
- Estructura semántica HTML5
- URLs amigables para secciones

## 📧 Configuración de Email

### Servidor compartido
Si tu servidor compartido no permite `mail()`, puedes:

1. Usar un servicio SMTP como PHPMailer
2. Integrar con servicios como SendGrid o Mailgun
3. Usar formularios de terceros como Netlify Forms

### Ejemplo con PHPMailer

```php
// En contact.php, reemplazar mail() por:
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'tu-email@gmail.com';
$mail->Password = 'tu-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->setFrom('tu-email@gmail.com', 'Kleia Contact Form');
$mail->addAddress($recipient_email);
$mail->Subject = $subject;
$mail->Body = $email_body;

$mail->send();
```

## 🐛 Solución de Problemas

### El formulario no envía emails
1. Verifica que `mail()` esté habilitado: `<?php phpinfo(); ?>`
2. Revisa los logs del servidor
3. Considera usar SMTP externo

### JavaScript no funciona
1. Verifica que `script.js` se carga correctamente
2. Abre la consola del navegador para ver errores
3. Asegúrate de que no hay conflictos con otros scripts

### Estilos no se aplican
1. Verifica que `styles.css` se carga
2. Limpia la caché del navegador
3. Revisa la ruta del archivo CSS

### En móvil no se ve bien
1. Verifica el viewport meta tag
2. Revisa las media queries en CSS
3. Prueba en diferentes dispositivos

## 🚀 Optimizaciones

### Performance
- Minifica CSS y JavaScript para producción
- Optimiza imágenes (WebP, compresión)
- Habilita compresión gzip en el servidor
- Considera usar CDN para assets

### SEO
- Agrega `sitemap.xml`
- Implementa datos estructurados
- Optimiza velocidad de carga
- Añade más contenido semántico

## 📞 Soporte

Si encuentras algún problema:

1. Revisa esta documentación
2. Verifica los logs del servidor
3. Consulta la consola del navegador
4. Verifica la configuración de PHP

## 📄 Licencia

Este código es una conversión de la página original de Kleia y mantiene el mismo propósito y diseño.

---

**¡Tu página de Kleia está lista para usar en cualquier servidor PHP!** 🎉
