# Configuración

Al configurar una aplicación basada en React Router, es fundamental elegir el tipo de enrutador más adecuado según el entorno de despliegue. React Router proporciona dos opciones principales: `BrowserRouter` y `HashRouter`, cada una con características particulares.

## `BrowserRouter`

Utiliza el historial del navegador (History API) para manejar rutas. Genera URLs limpias y semánticas, por ejemplo: `/productos`, `/contacto`, etc. Es la opción recomendada para entornos controlados donde se dispone de un servidor capaz de manejar rutas internas mediante redirecciones (rewrites).

- **Ventajas**:
  - URLs limpias sin símbolo `#`.
  - Mejor compatibilidad con motores de búsqueda (SEO) cuando se renderiza desde el servidor (SSR).
  - Navegación más natural para el usuario final.

- **Desventajas**:
  - Requiere configuración adicional en el servidor para redirigir todas las rutas al archivo `index.html`.
  - No compatible directamente con entornos estáticos sin soporte de redirecciones.

## `HashRouter`

Utiliza el hash (`#`) en la URL para simular rutas. Es ideal para alojar la aplicación en servicios de hosting estático que no permiten configurar reglas de redirección, como GitHub Pages o Netlify sin funciones avanzadas.

- **Ventajas**:
  - No requiere configuración en el servidor.
  - Funcionamiento garantizado en entornos estáticos o sin backend.

- **Desventajas**:
  - Las URLs contienen `#`, lo que puede percibirse como menos profesional.
  - Menor compatibilidad con estrategias de SEO avanzadas.

## Recomendación

Seleccionar `HashRouter` cuando se trabaje con un entorno de despliegue estático sin capacidad de redirección a nivel servidor. Utilizar `BrowserRouter` en proyectos que se desplieguen en servidores configurables (como Nginx, Apache o servicios en la nube con soporte de rewrites), o cuando se busque una mejor experiencia de navegación y URLs limpias.

```jsx
// Ejemplo con HashRouter
import { HashRouter } from "react-router-dom";

<HashRouter>
  <App />
</HashRouter>

// Ejemplo con BrowserRouter
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```
