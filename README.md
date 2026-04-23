# Wireframe — Escuela Judicial "Rodrigo Lara Bonilla"

Mockup navegable para validación con cliente. 5 pantallas clickeables que simulan el flujo de un curso virtual: catálogo → detalle del curso → unidad → documento PDF → cuestionario.

## Páginas

| Archivo | Pantalla |
|---|---|
| `index.html` | Catálogo "Mis cursos" (14 tarjetas) |
| `curso.html` | Detalle del curso con bienvenida y 4 recursos |
| `unidad.html` | Visor de unidad (UMA) con sidebar de navegación |
| `documento.html` | Visor de documento PDF |
| `cuestionario.html` | Cuestionario con 3 preguntas |

## Cómo verlo

- **Opción local:** abre `index.html` con doble clic en cualquier navegador.
- **Servido:** copia la carpeta dentro de un servidor estático (WAMP, XAMPP, `python -m http.server`, etc.) y abre `http://localhost/wireframe/`.

No requiere compilación ni dependencias: HTML + CSS + JS vanilla.

## "Modo exploración"

Para ayudar a identificar los elementos clickeables durante la demo:

- **Pulso automático** al cargar cada página: todos los elementos navegables hacen dos pulsos dorados y luego se apagan.
- **Botón flotante "Resaltar navegación"** (abajo a la derecha): mantiene el pulso permanente.
- **Atajo de teclado `?`**: alterna el modo de exploración.

## Estructura

```
/
├── index.html, curso.html, unidad.html, documento.html, cuestionario.html
├── css/styles.css
├── js/main.js
└── assets/  (logos, banner hero, banner del curso, banners de recursos)
```

## Paleta

| Uso | Color |
|---|---|
| Navbar / fondo institucional | `#002775` |
| Acento dorado (barra, botones, resaltado) | `#FFC800` |
| Títulos | `#2B4BB6` |
| Texto | `#6F7074` |
| Badges | `#EEF2FF` |

Tipografía: **Nunito** (400 / 600 / 700 / 800).
