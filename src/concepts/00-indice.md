# React Router | Índice Temático

## Conceptos Fundamentales

1. Aplicaciones SPA
Introducción al concepto de Single Page Application. Una aplicación que carga una sola vez en el navegador y actualiza el contenido dinámicamente sin recargar la página completa.

2. Introducción a React Router
Explicación inicial sobre cómo funciona una app React sin rutas (SPA sin navegación) y por qué es importante manejar el enrutamiento en una aplicación moderna.

3. ¿Qué es React Router y por qué usarlo?
Presentación de React Router como solución para: Controlar la navegación en una SPA, evitar recargas de página y habilitar rutas declarativas y navegación dinámica.

4. Instalación y configuración inicial (`react-router-dom`)
Para habilitar el enrutamiento en una aplicación React, se requiere instalar el paquete `react-router-dom`, el cual proporciona los componentes y utilidades necesarias para gestionar rutas de forma declarativa en una SPA.

5. Configuración de BrowserRouter o HashRouter
Comparativa de las dos opciones principales para el router:
HashRouter: ideal para despliegues en hosting estático sin soporte de redirecciones.
BrowserRouter: genera URLs más limpias, pero requiere configuración en el servidor (rewrites para SPA).

6. Rutas Estáticas
Definición y creación de rutas simples como /home, /about, etc. Introducción al componente `<Route />` y su uso dentro de `<Routes />`.

7. Componentes Link y NavLink para navegación
Uso de enlaces declarativos para navegar entre páginas:
Link: navegación básica sin recarga.
NavLink: incluye estilos activos según la ruta actual (ideal para menús de navegación).

8. Configuración de rutas para Home, About, Contact, etc.
Ejemplo práctico con múltiples rutas y un layout general con: Navbar común a todas las vistas.
Uso del componente `<Outlet />` para renderizar contenido según la ruta.

9. Query Strings con useSearchParams()
Manejo de parámetros en la URL: Leer y modificar parámetros usando el hook useSearchParams(). Casos comunes: filtros, búsquedas, paginación.

10. Navegación programática con useNavigate()
Uso del hook useNavigate() para redireccionar por código, por ejemplo: Después de enviar un formulario. Tras un login exitoso.

11. (Opcional) Introducción a createBrowserRouter y RouterProvider
Presentación de la API avanzada de React Router (Data Router): Uso de createBrowserRouter() para definir rutas con loaders y actions. Integración con RouterProvider. Ideal para proyectos más estructurados con necesidades de carga de datos por ruta.

## Rutas Avanzadas y Dinámicas

- Rutas Anidadas y Layouts
- Aprende a crear layouts compartidos con `<Outlet>` para no repetir headers, footers, barras laterales.
  Define rutas hijas dentro de un padre.
  Ejemplo: /dashboard, con /dashboard/profile y /dashboard/settings.
- Organización de rutas con jerarquías.
- Creación de layouts compartidos con Outlet.
- Anidamiento de rutas para secciones específicas de la aplicación (ej. /dashboard/profile, /dashboard/settings).
- Parámetros de Ruta
  Definición de rutas con parámetros dinámicos (ej. /users/:id).
  Manejo de URLs con parámetros variables, ej. /users/:id.
  Uso del hook useParams() para extraer esos parámetros y mostrar datos dinámicos.
- Extracción de parámetros usando el hook useParams().
- Validación y uso de parámetros en componentes.
- Query Strings (Parámetros de Consulta)
- Manejo de parámetros de consulta en la URL (ej. /search?query=react).
- Uso del hook useSearchParams() para leer y modificar query strings.

## Seguridad y Rendimiento

- Rutas Protegidas (Autenticación y Autorización)
  Cómo restringir rutas a usuarios no autenticados.
  Redirección condicional.
  Ejemplo: login/logout, roles de usuario.
- Implementación de lógica de autenticación para rutas privadas.
- Redirección de usuarios no autenticados (ej. a una página de login).
- Conceptos de autorización: restringir acceso a rutas según roles de usuario.
- Redirecciones post-login/logout a rutas específicas.
- Lazy Loading (Carga Perezosa de Rutas)
  Lazy Loading / Code Splitting
  Carga perezosa de componentes de ruta para optimizar performance.
  Uso de React.lazy() y Suspense.
- Optimización del rendimiento con React.lazy() y Suspense.
- División de código (Code Splitting) por ruta para reducir el tamaño inicial del bundle.

## Manejo de Errores y Casos Especiales

- Página 404 (Not Found)
  Manejo de Errores y 404
  Página de error para rutas no encontradas (path="*").
  Error Boundaries en rutas.
- Implementación de una ruta "catch-all" (path="*") para manejar URLs no coincidentes.
- Diseño y presentación de la página de error.
- Manejo de Errores en Rutas
- Captura de errores a nivel de rutas (Error Boundaries).
- Gestión de errores en loaders y actions (si usas Data Routers).
- React Router Data APIs (Opcional, avanzado)
  Loaders, Actions, defer (si usas createBrowserRouter y RouterProvider).
  Precarga y mutación de datos vinculada a rutas.

## Herramientas y Hooks Adicionales

- Hooks Utilitarios de React Router
- useLocation(): Acceso a la información de la URL actual.
- useResolvedPath(): Resolución de rutas relativas.
- useMatch(): Coincidencia de rutas.
- Data Routers (Opcional, para enrutamiento avanzado)
- Conceptos de loaders para precargar datos antes de renderizar la ruta.
- actions para manejar mutaciones de datos (formularios, etc.).
- defer para cargar datos en paralelo.

## Opcionales

Internacionalización y rutas traducidas (si aplicara en tu proyecto).
Integración con estado global o contextos para controlar rutas y permisos.
Pruebas unitarias y de integración en componentes de rutas (más avanzado).
Migración de versiones (para proyectos legacy, si aplica).
Pero para un plan de aprendizaje y aplicación real, tu índice es muy sólido y ordenado.
