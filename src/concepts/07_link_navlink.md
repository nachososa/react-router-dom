# Componentes `Link` y `NavLink` para navegación declarativa

## Introducción

En aplicaciones desarrolladas con React Router, la navegación entre vistas puede gestionarse mediante componentes declarativos que permiten cambiar la URL sin generar recargas completas del navegador. Este enfoque mejora la experiencia de usuario, reduce la latencia percibida y mantiene el estado de la aplicación en memoria sin interrupciones.

## Navegación con `Link`

El componente `Link` proporciona una forma eficiente y semántica de reemplazar enlaces HTML tradicionales (`<a href="">`). Su principal función consiste en modificar la URL del navegador utilizando la API de historial interna de React Router, evitando recargas completas del documento.

### Características principales

- Permite navegación interna entre rutas definidas.
- No provoca recargas de página, lo que asegura un comportamiento propio de aplicaciones de una sola página (SPA).
- Acepta atributos como `to` (destino de la ruta), `replace` (evita que la ruta actual se apile en el historial) y clases personalizadas.

### Ejemplo de uso básico

```jsx
import { Link } from 'react-router-dom';
<Link to="/contacto">Ir a Contacto</Link>

```

## Navegación con `NavLink`

El componente NavLink extiende la funcionalidad de Link y está orientado principalmente a menús de navegación o barras de pestañas donde resulta necesario identificar visualmente cuál es la ruta activa.

### Funcionalidad destacada

Permite aplicar estilos automáticos cuando la ruta asociada se encuentra activa.
Acepta atributos similares a Link, con la adición de opciones como className, style o isActive, que pueden recibir funciones para condicionar su comportamiento según el estado de la ruta.

### Ejemplo con clase activa condicional

```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/inicio"
  className={({ isActive }) => isActive ? 'activo' : ''}
>
  Inicio
</NavLink>
```

## Recomendaciones de uso

Utilizar Link para enlaces simples que no requieren retroalimentación visual.
Emplear NavLink en menús, encabezados o barras de navegación donde sea deseable destacar la ruta activa.

Aplicar clases o estilos condicionados mediante funciones proporcionadas por NavLink para mantener consistencia visual y mejorar la usabilidad.

Verificar que las rutas definidas en el enrutador coincidan exactamente con los valores de to, evitando errores de navegación.

## Conclusión

La implementación de navegación declarativa con Link y NavLink en React Router permite desarrollar interfaces dinámicas y eficientes, facilitando la gestión de rutas internas sin interferencias en el comportamiento general de la aplicación. Ambos componentes representan herramientas fundamentales en el desarrollo de aplicaciones SPA robustas, accesibles y con experiencia de usuario optimizada.
