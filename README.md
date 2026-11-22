# Apuntes de Portugués · EOI

Webapp para consultar y descargar en PDF apuntes de **portugués europeo** organizados por niveles de la Escuela Oficial de Idiomas.

- Niveles: A1, A2 y B1 (B2–C2 próximamente).
- Bloques por nivel: fonética y ortografía, gramática, léxico y vocabulario, funciones comunicativas.
- Marca los temas que quieras (de uno o varios niveles) y pulsa **Descargar PDF** → «Guardar como PDF» o imprimir.
- Opciones de PDF: portada, índice y un tema por página.
- **Tablas de verbos** conjugados por nivel (presente, perfeito, imperfeito, futuro, condicional, imperativo, particípios).
- **Ejercicios de repaso** generados a partir de los temas marcados, descargables en PDF con las soluciones en una hoja final aparte.
- **Traductor** español ↔ portugués de Portugal (glosario propio sin conexión + traducción de frases por Internet).
- **Exámenes oficiales**: modelos de certificación de EOI y CAPLE con audios y soluciones.
- Instalable desde Chrome y funciona sin conexión. Avisa cuando hay una versión nueva.

## Estructura
```
index.html        app
css/styles.css    estilos (incluye los de impresión/PDF)
js/app.js         lógica
data/a1.js        apuntes nivel A1
data/a2.js        apuntes nivel A2
data/b1.js        apuntes nivel B1
data/ampliacion.js ejemplos y errores frecuentes añadidos a cada tema
data/verbos.js    verbos y tablas conjugadas
data/glosario.js  glosario del traductor
data/ejercicios.js banco de ejercicios
data/examenes.js  enlaces a exámenes oficiales
sw.js             service worker (offline + actualizaciones)
manifest.json     instalación como app
icons/            iconos
```

## Añadir un nivel nuevo
1. Crear `data/b1.js` con la misma estructura que `data/a1.js` (`window.APUNTES.B1 = {...}`).
2. Añadir `<script src="data/b1.js"></script>` en `index.html` y `"data/b1.js"` en la lista de `sw.js`.
3. Subir `VERSION` en `sw.js` para que la app avise de la actualización.

## Publicar en GitHub Pages
Repositorio `jdevgpt/portugueseoi` → Settings → Pages → Branch `main`, carpeta `/ (root)`.
URL: https://jdevgpt.github.io/portugueseoi/
