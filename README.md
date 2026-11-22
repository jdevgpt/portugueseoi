# Apuntes de Portugués · EOI

Webapp para consultar y descargar en PDF apuntes de **portugués europeo** organizados por niveles de la Escuela Oficial de Idiomas.

- Niveles: A1 y A2 (B1–C2 próximamente).
- Bloques por nivel: fonética y ortografía, gramática, léxico y vocabulario, funciones comunicativas.
- Marca los temas que quieras (de uno o varios niveles) y pulsa **Descargar PDF** → «Guardar como PDF» o imprimir.
- Opciones de PDF: portada, índice y un tema por página.
- Instalable desde Chrome y funciona sin conexión. Avisa cuando hay una versión nueva.

## Estructura
```
index.html        app
css/styles.css    estilos (incluye los de impresión/PDF)
js/app.js         lógica
data/a1.js        apuntes nivel A1
data/a2.js        apuntes nivel A2
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
