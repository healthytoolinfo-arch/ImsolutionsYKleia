# i'm solutions - Versión HTML/PHP para Hosting

Esta es la versión estática de la aplicación i'm solutions, convertida desde React a HTML/PHP para compatibilidad con hostings que solo admiten estos formatos.

## Archivos principales

### Páginas principales

- `index.html` - Página principal con toda la información de la empresa
- `contact.php` - Formulario de contacto funcional con envío por email
- `privacy-policy.php` - Política de privacidad
- `terms-of-service.php` - Términos de servicio

### Recursos

- `assets/styles.css` - Estilos CSS principales
- `assets/` - Carpeta para imágenes y recursos adicionales

## Configuración del servidor

### Requisitos mínimos

- PHP 7.0 o superior
- Función `mail()` habilitada (para el formulario de contacto)
- Soporte para archivos HTML y PHP

### Configuración del email

Para que el formulario de contacto funcione correctamente, edita `contact.php` y verifica:

```php
$to = "hello@imsolutions.studio"; // Cambia por tu email
```

### Estructura de archivos para subir

```
/
├── index.html
├── contact.php
├── privacy-policy.php
├── terms-of-service.php
├── assets/
│   └── styles.css
└── README-HOSTING.md
```

## Características incluidas

### ✅ Funcionalidad implementada

- Diseño completamente responsive
- Navegación suave entre secciones
- Formulario de contacto funcional con PHP
- Páginas legales (privacidad y términos)
- Menú móvil interactivo
- Estilos optimizados para todos los dispositivos
- SEO básico implementado
- Estructura semántica HTML5

### 🎨 Diseño

- Mantiene el diseño original de la aplicación React
- Fuentes: Gill Sans + Inter
- Colores: Esquema de colores original (#FFFFFC, #1D1D1B)
- Imágenes: URLs de Builder.io mantenidas
- Animaciones CSS sutiles

### 📱 Responsive

- Navegación desktop completa
- Menú hamburguesa para móviles
- Layouts adaptativos
- Imágenes optimizadas

## Personalización

### Cambiar contenido

1. **Textos**: Edita directamente en cada archivo HTML/PHP
2. **Imágenes**: Reemplaza las URLs en los archivos
3. **Colores**: Modifica `assets/styles.css`
4. **Email de contacto**: Actualiza `contact.php`

### Añadir páginas

1. Crea un nuevo archivo `.php` o `.html`
2. Copia la estructura de header y footer de las páginas existentes
3. Agrega los enlaces de navegación correspondientes

## SEO y metadatos

Cada página incluye:

- Meta description específica
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Estructura de datos JSON-LD (en index.html)

## Soporte para idiomas

La versión actual está en español. Para añadir idiomas:

1. Crea archivos separados (ej: `index-en.html`)
2. Traduce el contenido
3. Actualiza los enlaces de idioma en la navegación

## Compatibilidad

✅ **Compatible con:**

- Hostings compartidos básicos
- cPanel
- Hostings con solo HTML/PHP
- Cualquier servidor web con PHP

❌ **No requiere:**

- Node.js
- Frameworks específicos
- Base de datos
- Compilación

## Mantenimiento

### Actualizaciones de contenido

- Los textos se editan directamente en cada archivo
- Las imágenes se pueden cambiar modificando las URLs
- Los estilos se centralizan en `assets/styles.css`

### Backup recomendado

Hacer backup de:

- Todos los archivos `.html` y `.php`
- Carpeta `assets/`
- Cualquier personalización realizada

## Notas técnicas

- Los formularios funcionan con PHP `mail()`
- CSS es responsivo sin frameworks externos
- JavaScript vanilla para interactividad
- Sin dependencias externas excepto fonts de Google

## Contacto técnico

Para soporte técnico de esta implementación:

- Email: hello@imsolutions.studio
- Implementación: Convertida desde React SPA original
