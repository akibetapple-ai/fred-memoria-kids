# Sitio web — Fred Memoria Kids

Página estática y gratuita lista para publicarse en GitHub Pages. Se diseñó para funcionar en iPhone, iPad, computadoras y sin bibliotecas externas.

## Contenido

- `index.html`: página principal, descripción, instrucciones, dificultades, galería, FAQ y contacto.
- `privacidad.html`: **borrador** de política de privacidad, para revisar y personalizar.
- `assets/css/styles.css`: colores, diseño y adaptación a pantallas pequeñas.
- `assets/js/config.js`: correo de soporte centralizado.
- `assets/js/main.js`: navegación móvil, correo y galería ampliable.
- `assets/img/`: capturas **originales y sin modificaciones** que compartiste, con nombres descriptivos, e icono SVG para la web.

## Antes de publicar — IMPORTANTE

1. Abre `assets/js/config.js` y cambia `soporte@ejemplo.com` por tu correo electrónico real.
2. Revisa `privacidad.html`: identifica al responsable legal y describe las prácticas **reales y verificadas** de la aplicación (almacenamiento local, uso de analítica, servicios de terceros, datos de menores, etc.). Retira la advertencia de "documento de revisión" **solo cuando esté terminada**.
3. Al finalizar la política, puedes quitar la etiqueta `<meta name="robots" content="noindex, nofollow">` para facilitar su indexación por buscadores. La URL continuará siendo pública aunque no se indexe.
4. Verifica que las respuestas frecuentes sigan coincidiendo con la versión del juego que publicarás.
5. Cuando GitHub Pages esté disponible, la dirección de privacidad será `https://TU-USUARIO.github.io/TU-REPOSITORIO/privacidad.html` (o una ruta equivalente según la configuración).

## Revisar el sitio sin publicarlo

Abre `index.html` en un navegador. Puedes navegar por todas las secciones y por el enlace a privacidad. Para probarlo con un servidor local, ejecuta desde esta carpeta:

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080/`.

## Publicación gratuita en GitHub Pages

1. Entra a [GitHub](https://github.com) y crea un repositorio público, por ejemplo `fred-memoria-kids`.
2. Sube **el contenido interno de esta carpeta**, manteniendo `index.html` en la raíz del repositorio. Puedes usar `Add file` > `Upload files` y seleccionar los archivos y carpetas. No es necesario subir el ZIP como un solo archivo.
3. Abre `Settings` > `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`, luego la rama principal (`main`) y la carpeta `/ (root)`. Guarda los cambios.
5. Visita el enlace que GitHub Pages muestre cuando termine la publicación; suele tener el formato `https://TU-USUARIO.github.io/fred-memoria-kids/`.
6. La URL de la política estará en `https://TU-USUARIO.github.io/fred-memoria-kids/privacidad.html`. Esta será la dirección que puedes usar en el campo de política de privacidad, **después** de dejar el texto definitivo.

GitHub Pages puede cambiar su interfaz; usa los rótulos actuales que aparezcan en tu cuenta.

## Nota de diseño

Las once capturas enviadas se mantienen exactamente como estaban en el material fuente. Se presentan en recuadros y galerías, sin alterar personajes, tablero ni identidad de Fred Memoria Kids. El icono web de cuatro casillas es un motivo secundario basado en el tablero y no sustituye al icono original de la app.
