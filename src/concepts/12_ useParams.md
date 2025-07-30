# Parámetros Dinámicos

Los parámetros dinámicos son segmentos variables que se definen directamente dentro de la estructura de la ruta, identificados mediante dos puntos (`:`) seguidos de un nombre. Por ejemplo, en la ruta `/productos/:id`, `:id` representa un parámetro dinámico que puede contener cualquier valor.

- **Función**: Permitir rutas que varían según un identificador u otra variable dentro de la URL.
- **Uso típico**: Mostrar detalles de un recurso específico, como un producto, usuario, artículo, etc.
- **Acceso en React Router**: Se obtienen mediante el hook `useParams()`, que devuelve un objeto con las claves y valores de dichos parámetros.

## Query Strings (Parámetros de Consulta)

Los query strings son pares clave-valor que se añaden al final de una URL después del signo de interrogación `?`. Por ejemplo: `/productos/123?orden=asc&filtro=disponible`.

- **Función**: Transmitir información adicional o parámetros opcionales que no forman parte de la jerarquía principal de la ruta.
- **Uso típico**: Filtros, ordenamientos, búsquedas, paginación, estados de UI, etc.
- **Acceso en React Router**: Se pueden leer y modificar mediante el hook `useSearchParams()` o, de manera más genérica, a través de `useLocation().search`.

---

## Diferencias Clave

| Aspecto                | Parámetros Dinámicos (`:id`)                         | Query Strings (`?clave=valor`)                      |
|------------------------|-----------------------------------------------------|-----------------------------------------------------|
| Ubicación en URL       | Parte de la ruta principal (path)                    | Parte de la URL después del signo `?`               |
| Representación         | Segmentos variables en la ruta                        | Pares clave-valor en formato `clave=valor`          |
| Naturaleza             | Obligatorios para que la ruta coincida                | Opcionales, agregan información extra                |
| Acceso en React Router | Hook `useParams()`                                    | Hook `useSearchParams()` o `useLocation().search`    |
| Uso típico             | Identificadores o recursos específicos                 | Parámetros de configuración o estado adicional        |
| Ejemplo de URL         | `/productos/123`                                      | `/productos/123?orden=asc&filtro=disponible`          |

---

## Relación con React y React Router

- Ambos conceptos no son exclusivos de React, sino estándares web para estructurar URLs.
- React Router provee mecanismos específicos para gestionarlos dentro de aplicaciones React SPA.
- React Router permite definir rutas con parámetros dinámicos y ofrece hooks para manejar query strings de manera eficiente y reactiva.
- La gestión de parámetros es fundamental para aplicaciones dinámicas que requieren rutas flexibles y manipulación del estado vía URL.

---

## Conclusión

Aunque ambos se utilizan para transmitir información a través de la URL, los **parámetros dinámicos** y los **query strings** son conceptos diferentes que cumplen funciones distintas dentro del enrutamiento y la navegación.

React Router integra soporte para ambos, facilitando su uso mediante herramientas específicas, pero la distinción conceptual y técnica entre ellos es clara y necesaria para un diseño correcto de rutas y manejo de estado en aplicaciones React SPA.
