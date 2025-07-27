# Introducción

## Aplicaciones SPA y la necesidad de enrutamiento

Las aplicaciones desarrolladas con React, en su forma más básica, funcionan como **Single Page Applications (SPA)**. Este modelo consiste en cargar una única página HTML inicial, mientras que el resto de las vistas o secciones se renderizan dinámicamente sin realizar nuevas solicitudes al servidor. A pesar de su eficiencia, una SPA sin sistema de rutas presenta limitaciones significativas en términos de navegación, organización del contenido, y experiencia del usuario.

En una SPA sin enrutamiento explícito, el cambio de vista requiere manejar manualmente el estado interno de la aplicación y condicionar la renderización de componentes. Este enfoque resulta poco escalable, especialmente en proyectos que demandan múltiples secciones, flujos complejos, o integración con sistemas de navegación del navegador como el historial y la URL.

Para abordar esta problemática, es necesario incorporar una solución de **enrutamiento** que permita:

- Asociar componentes a rutas específicas.
- Habilitar la navegación declarativa mediante enlaces.
- Sincronizar la interfaz de usuario con la URL del navegador.
- Controlar el historial de navegación (avanzar, retroceder, recargar).
- Facilitar la segmentación lógica de la aplicación en distintas vistas.

React Router es una biblioteca diseñada específicamente para resolver estos requerimientos, ofreciendo una API declarativa, flexible y basada en componentes.

## Rol de React Router

React Router proporciona un sistema de enrutamiento completo para React, basado en componentes como `<BrowserRouter>`, `<Routes>` y `<Route>`. A través de estos elementos, es posible definir la estructura de navegación de una aplicación de manera intuitiva, manteniendo la coherencia con el paradigma de React basado en componentes y renderizado condicional.

El enrutador evalúa la URL actual y determina qué componente debe mostrarse en función de las rutas declaradas. A su vez, ofrece herramientas para generar enlaces de navegación, redireccionamientos, rutas anidadas y rutas dinámicas.

Este modelo permite mantener una arquitectura clara, predecible y fácilmente ampliable, alineada con las mejores prácticas del desarrollo moderno de aplicaciones web.

En resumen, incorporar React Router en una SPA representa una decisión técnica clave para garantizar la navegabilidad, modularidad y experiencia de usuario, manteniendo a su vez la eficiencia del renderizado sin recarga de página.

## Conceptos Básicos

React Router es una biblioteca esencial para el manejo de rutas en aplicaciones desarrolladas con React, especialmente en aplicaciones SPA (Single Page Application). Su propósito principal es controlar la navegación interna sin la necesidad de recargar la página completa, mejorando así la experiencia del usuario y el rendimiento de la aplicación.

---

## Componentes principales

### BrowserRouter

- Se define como un **componente contenedor** que habilita el sistema de rutas en la aplicación.
- Internamente utiliza la API de historial del navegador (HTML5 History API: pushState, popstate, entre otros).
- Mantiene sincronizada la URL del navegador con la interfaz de React.
- Permite la navegación sin recarga de página, característica fundamental en las SPA.
- Es obligatorio envolver la aplicación, o al menos la parte que utiliza rutas, dentro de este componente para que funcione correctamente.

### Routes

- Contenedor de todas las rutas definidas mediante el componente `<Route />`.
- A partir de React Router versión 6, reemplaza al antiguo `<Switch>`.
- Evalúa secuencialmente cada ruta hija y renderiza únicamente la primera que coincida con la URL actual.
- Facilita la definición y organización de múltiples rutas dentro de la aplicación.

### Route

- Representa una ruta individual dentro de la aplicación.
- Propiedades principales:
  - `path`: especifica la URL que debe coincidir para activar la ruta.
  - `element`: define el componente React que se debe renderizar cuando la URL coincide con el `path`.

---

## Flujo general

1. En el archivo de entrada (por ejemplo, `main.jsx`), se monta el componente raíz mediante `createRoot(...).render(<App />)`.
2. El componente `<App />` incluye el `<BrowserRouter>`, el cual se encarga de escuchar los cambios en la URL.
3. Se renderiza la barra de navegación (`<nav>`) que contiene componentes `<Link>`, encargados de cambiar la ruta sin recargar la página.
4. El componente `<Routes>` evalúa todas las rutas declaradas y determina cuál coincide con la URL actual.
5. Si la URL coincide con alguna ruta definida en un `<Route>`, se renderiza el componente asociado.
6. Al hacer clic en un `<Link>`, la URL cambia sin recarga, React Router vuelve a evaluar las rutas.
7. Se renderiza el nuevo componente correspondiente a la ruta actual.

---

## Separación de responsabilidades

- El componente `<Link>` se encarga exclusivamente de cambiar la URL en el navegador sin recargar la página.
- El componente `<Route>` con su propiedad `path` escucha la URL y determina si debe renderizar el componente especificado en `element`.
- Si no existe un `<Route>` que coincida con la URL actual, no se renderiza ningún componente, incluso si la URL cambia.
- Esta separación es clave para comprender el funcionamiento interno del enrutamiento en React Router.

---

## Metáfora conceptual: Llave y cerradura

- `<Link to="/about">`: funciona como una llave que cambia la URL a `/about`.
- `path="/about"` en `<Route>`: actúa como una cerradura que detecta cuando la URL coincide con `/about`.
- `element={<About />}`: representa lo que se muestra al abrir la cerradura (renderizar el componente asociado).

---

## Método `.map()` en JavaScript aplicado a React Router

El método `.map()` es una función fundamental para el manejo de arrays en JavaScript. Permite transformar cada elemento de un array mediante una función callback, generando un nuevo array con los resultados de dicha transformación.

### Sintaxis general

```js
const nuevoArray = arrayOriginal.map((elemento, índice, array) => {
  // Lógica para transformar "elemento"
  return nuevoElemento;
});

```

***elemento:*** valor actual del array en cada iteración.
***índice (opcional):*** posición actual en el array.
***array (opcional):*** referencia al array original.

## Conclusión

El enrutamiento en React Router separa claramente las responsabilidades de navegación y renderizado.
El componente `<Link>` modifica la URL sin recargar la página.
Los componentes `<Route>` observan la URL y renderizan el componente correspondiente si hay coincidencia.
La combinación del método .map() con `<Routes>` permite declarar rutas de forma dinámica y mantener el código organizado y escalable.
Este enfoque optimiza la navegación y facilita el mantenimiento y extensión de aplicaciones SPA modernas con React.
