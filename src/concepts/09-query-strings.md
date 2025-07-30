# Query Strings

Las Query Strings (o cadenas de consulta) son un componente fundamental de las URLs, actuan como un medio discreto pero potente para el intercambio de información. Más allá de su apariencia sencilla, estas cadenas de pares clave=valor incrustadas en la URL, y delimitadas por el signo de interrogación ? (y el ampersand & para múltiples parámetros), son esenciales para la interacción cliente-servidor y la persistencia del estado en innumerables aplicaciones web.

Permiten que los desarrolladores envíen parámetros dinámicos a un servidor o a una aplicación del lado del cliente, facilitando desde la aplicación de filtros y criterios de búsqueda hasta la configuración de opciones de paginación o la gestión del idioma preferido del usuario. Al integrar estos datos directamente en la URL, las query strings no solo posibilitan una navegación más rica y funcional, sino que también mejoran la usabilidad, la capacidad de compartir enlaces y la experiencia general del usuario, al mantener el estado visible y fácilmente replicable.

## Ejemplos de Query Strings en URLs

A continuación, algunos ejemplos ilustrativos de su uso:

`Búsqueda en Google:`
<https://www.google.com/search?q=query+strings&hl=es>
Aquí, q=query+strings define el término de búsqueda y hl=es especifica el idioma español.

`Filtros en un e-commerce:`
<https://www.tienda.com/productos?categoria=electronica&marca=samsung&orden=precio>
Estos parámetros permiten filtrar los productos por categoria=electronica, marca=samsung y ordenar los resultados por orden=precio.

`Paginación en un blog:`
<https://www.blog.com/articulos?pagina=2&por_pagina=10>
Indica que se debe mostrar la pagina=2 con por_pagina=10 artículos por cada una.

`Sesión de usuario (¡No recomendado para datos sensibles!):`
<https://www.sitio.com/login?usuario=invitado&redirect=/dashboard>
Este ejemplo muestra un usuario=invitado y una redirect=/dashboard para la página de destino después del login. Este uso es poco seguro para credenciales.

`Estructura general:`
<https://dominio.com/ruta?clave1=valor1&clave2=valor2&claveN=valorN>
El ? inicia la query string, cada clave=valor es un parámetro individual y el & separa múltiples parámetros.

## Consideraciones de Seguridad y Buenas Prácticas

El uso de query strings permite incorporar parámetros dinámicos en la URL, los cuales pueden ser aprovechados por la aplicación para representar filtros, criterios de búsqueda, paginación u otros estados transitorios.

Sin embargo, su naturaleza pública implica `precauciones importantes`:

`No usar para datos sensibles:` Es importante evitar el envío de datos sensibles como: contraseñas, tokens de sesión o información personal a través de query strings, ya que: son visibles en la URL del navegador, pueden quedar registrados en el historial del navegador, en logs de servidores y proxies, y son susceptibles de ser interceptados o expuestos.

`Vulnerabilidad a XSS:` Si los valores de los query strings no son validados y sanitizados correctamente antes de ser renderizados en la página, pueden ser utilizados en ataques de Cross-Site Scripting (XSS). Un atacante podría inyectar código malicioso a través de un parámetro de la URL que luego es ejecutado en el navegador del usuario.

`Preferir el cuerpo de la solicitud para POST/PUT:` En APIs modernas, para operaciones que implican creación, actualización o eliminación de recursos (métodos HTTP POST, PUT, PATCH), se prefiere enviar los datos en el cuerpo (body) de la solicitud. Esto ofrece mayor seguridad y privacidad al no exponer los datos en la URL, y permite enviar un volumen de información mucho mayor sin las limitaciones de longitud de una URL.

## Query Strings en GET vs. Cuerpo de la Solicitud en POST

Es importante entender que las query strings están muy ligadas al método HTTP GET. Cuando utilizamos GET, los datos se codifican directamente en la URL, haciéndolos visibles y susceptibles de ser almacenados en el historial del navegador o en los logs del servidor. Esto los hace ideales para la recuperación de información que no implica cambios en el estado del servidor, como búsquedas, filtros o paginación.

Por el contrario, el método HTTP POST no utiliza query strings para enviar datos principales. En su lugar, la información se envía en el cuerpo de la solicitud HTTP. Esta diferencia tiene implicaciones significativas:

`Seguridad y Privacidad:` Al enviar los datos en el cuerpo, estos no son visibles directamente en la URL, lo que ofrece un nivel de privacidad superior para información sensible como credenciales de usuario o datos personales.

`Volumen de Datos:` El cuerpo de una solicitud POST no tiene las mismas limitaciones de tamaño que una URL (que puede ser truncada por navegadores o servidores). Esto permite enviar grandes volúmenes de datos, como archivos subidos o formularios complejos.

`Modificación del Estado:` POST es el método preferido para enviar datos que resultarán en una modificación o creación de recursos en el servidor (por ejemplo, registrar un nuevo usuario, enviar un formulario de contacto, realizar una compra).

En resumen, mientras que las query strings son una herramienta eficaz para comunicar el estado de una consulta GET directamente a través de la URL, el método POST y el envío de datos en el cuerpo de la solicitud son la opción predilecta cuando la seguridad, la privacidad o el volumen de información son críticos, y cuando la operación tiene como objetivo modificar el estado del servidor.

## Parámetros de Ruta (Path Parameters)

Es importante distinguir entre los query strings y los parámetros de ruta (también conocidos como path parameters o URL segments), ya que ambos se usan para pasar datos en una URL, pero con propósitos distintos:

`Parámetros de Ruta (/productos/:id):` Se utilizan para identificar un recurso específico o una colección dentro de una jerarquía. Forman parte intrínseca de la ruta. Por ejemplo, en /productos/123, 123 es un parámetro de ruta que identifica el producto con ID 123. Son ideales cuando el dato es esencial para la localización o identificación del recurso.

`Query Strings (?categoria=electronica):` Se emplean para filtrar, ordenar, paginar o proporcionar información opcional sobre el recurso identificado por la ruta. No son parte de la identidad fundamental del recurso. Por ejemplo, en /productos?categoria=electronica&orden=precio, la ruta sigue siendo /productos, y los query strings solo refinan la consulta sobre esa colección.

Elegir entre uno u otro depende de si el dato es parte de la identidad única del recurso (parámetro de ruta) o si es un modificador opcional de la consulta (query string).

## useSearchParams

El uso de query strings (cadenas de consulta) en aplicaciones web permite incorporar parámetros dinámicos en la URL, facilitando el envío de datos tales como filtros, términos de búsqueda, opciones de paginación u otros estados transitorios. React Router incorpora el hook useSearchParams como una solución integrada para gestionar estos parámetros de forma declarativa y reactiva dentro del ecosistema de React.

El `hook useSearchParams()` es una herramienta proporcionada por `react-router-dom` que permite:

- Leer valores actuales de la cadena de consulta de la URL.
- Establecer o modificar dichos valores sin recargar la página.
- Sincronizar el estado de la interfaz con la URL del navegador.

Este enfoque facilita una arquitectura predecible, donde el estado reflejado en la URL puede ser compartido, almacenado en marcadores o restaurado fácilmente mediante la navegación del navegador.

A diferencia del hook useLocation(), que entrega la URL como un objeto completo, useSearchParams() expone una interfaz estructurada basada en la API nativa URLSearchParams, facilitando la lectura y modificación de parámetros individuales de forma controlada.

Es importante destacar que la interfaz URLSearchParams es una API web estándar y puede usarse directamente con JavaScript puro, sin necesidad de React Router, para manipular query strings en el navegador.

## Características del Hook

La API se basa en la interfaz URLSearchParams, lo que proporciona un conjunto de métodos familiares para trabajar con los parámetros.

La actualización de parámetros a través de setSearchParams no implica una recarga completa del componente ni la pérdida de su estado interno, gracias al modelo reactivo de React.

Permite mantener una sincronía directa y fluida entre el estado de la aplicación, la navegación y la URL.

Es útil tanto para leer parámetros individuales (get(), getAll()) como para modificar múltiples parámetros (set(), append(), delete()).

```JavaScript

import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // ...
}
```

`searchParams:` Es una instancia de URLSearchParams, utilizada para consultar los valores actuales de la query string. Ofrece métodos como get('paramName'), has('paramName'), forEach((value, key) => ...), etc.

`setSearchParams`: Es una función que permite actualizar o reemplazar la cadena de consulta en la URL. Al llamarla, React Router actualizará la URL y provocará una re-renderización del componente si los parámetros cambian.

## Comportamiento de Actualización

Al utilizar setSearchParams(), los parámetros existentes se reemplazan por defecto si no se manejan explícitamente. Para conservar valores anteriores al actualizar uno nuevo, es necesario reconstruir el objeto URLSearchParams incluyendo tanto los parámetros existentes como los nuevos. Una práctica común es utilizar el callback que recibe setSearchParams:

```JavaScript
// Ejemplo: Actualizar el parámetro "pagina" y mantener otros
setSearchParams(prevSearchParams => {
  const newSearchParams = new URLSearchParams(prevSearchParams); // Copia los parámetros existentes
  newSearchParams.set("pagina", "3"); // Modifica o añade el nuevo parámetro
  return newSearchParams; // Retorna la nueva instancia
});

// Otra forma más concisa:
setSearchParams(prev => {
  prev.set("pagina", "3");
  return prev;
});
```

Para añadir un nuevo valor sin eliminar el anterior para la misma clave (útil para arrays de filtros, por ejemplo), se puede usar append():

```JavaScript

setSearchParams(prev => {
  prev.append("color", "rojo"); // Añade 'color=rojo' a los existentes
  return prev;
});
// Resultado: ...?color=azul&color=rojo
```

## Casos de Uso Comunes

useSearchParams es invaluable para una variedad de funcionalidades interactivas:

`Filtros aplicados por el usuario:` Almacenar categorías, rangos de precio, niveles de dificultad, etc., en la URL para que los filtros se mantengan al navegar o al compartir el enlace.

`Búsquedas:` Mantener el término buscado en la URL permite a los usuarios compartir enlaces con resultados de búsqueda específicos.

`Paginación:` Almacenar el número de página actual (pagina=3) y la cantidad de elementos por página (por_pagina=10) directamente en la query string.

`Ordenamiento:` Registrar criterios de ordenamiento como orden=asc, orden=desc, orden=por-fecha, etc.

`Manejo de estados complejos (arrays):` Aunque URLSearchParams no tiene soporte nativo para arrays, se puede simular con múltiples entradas para la misma clave (ej. ?colores=rojo&colores=azul) o serializando el array a una cadena.

## Ventajas de Utilizar useSearchParams()

`Mejora la usabilidad:` Al mantener el estado reflejado en la URL, los usuarios pueden entender fácilmente la configuración actual de la página.

`Facilita la navegación:` El uso de los botones de retroceso/adelante del navegador funciona de manera intuitiva, ya que el estado se recupera de la URL.

`Permite compartir estados de interfaz:` Copiar y pegar una URL que contiene query strings replicará el estado exacto de la interfaz en otro navegador.

`Proporciona una arquitectura clara y desacoplada:` El estado de la URL se convierte en una fuente de verdad para ciertos aspectos de la UI, separando la lógica de la manipulación del DOM.

`Optimización SEO (con precauciones):` Aunque los query strings pueden complicar el SEO si generan contenido duplicado, un uso cuidadoso y herramientas como la canonicalización pueden ayudar a los motores de búsqueda a indexar correctamente las versiones relevantes de las páginas con parámetros.

## Recomendaciones para un Uso Óptimo

`Validar y Sanitizar:` Siempre valida y sanitiza los parámetros obtenidos de la URL, especialmente si vas a utilizarlos para consultas a bases de datos o renderización directa en la UI, para prevenir inyecciones y errores.

`Establecer Valores por Defecto:` Cuando no se encuentren parámetros esperados en la URL, establece valores por defecto razonables para asegurar el correcto funcionamiento de la aplicación.

`Gestión Cuidadosa de Actualizaciones:` Evita sobrescribir parámetros existentes innecesariamente. Utiliza el callback de setSearchParams (setSearchParams(prev => {...})) para asegurar que solo los parámetros deseados sean modificados o añadidos, manteniendo así el historial de navegación y otros parámetros intactos.

`Consistencia en la Nomenclatura:` Mantén una convención clara y consistente para los nombres de tus parámetros (ej. camelCase, snake_case, kebab-case).

`Considera el Volumen:` Para un número muy elevado de parámetros o datos muy complejos, evalúa si los query strings siguen siendo la mejor opción o si es preferible el uso de estados locales o globales de React, o incluso un almacenamiento de sesión/local.

## Conclusión

Las query strings son una característica fundamental de las URLs que potencian la interactividad y la capacidad de compartir información en la web. En el ecosistema de React, el hook useSearchParams de react-router-dom ofrece una solución robusta y declarativa para gestionar estos parámetros, permitiendo a los desarrolladores crear aplicaciones más dinámicas, usables y coherentes. Al comprender su funcionamiento, sus precauciones y las mejores prácticas asociadas, podemos aprovechar al máximo su potencial para construir experiencias web modernas y eficientes.
