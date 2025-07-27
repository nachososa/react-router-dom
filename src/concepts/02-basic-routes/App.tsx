/*
Javascript: Extensiones

***.js  JavaScript puro, sin JSX.***
Ideal para lógica, utilidades o configuración.

***.jsx JavaScript + JSX***
Código JavaScript que incluye JSX, elementos React como `div>`.
Usado en componentes React sin TypeScript.

***.ts TypeScript JavaScript con tipado estático, sin JSX.***
Usado para lógica, helpers, tipos (types/, utils/).

***.tsx TypeScript + JSX TypeScript con JSX.***
Usado en componentes React escritos con TypeScript.

***Otras extensiones comunes***
.json: Archivos de datos, configuración o traducciones.
.mjs / .cjs: Módulos ES (modernos) y CommonJS (legacy). Más común en backend o libs.
.d.ts: Archivos de declaración de tipos de TypeScript (solo definen tipos, no ejecutan nada).

---

Flujo de la aplicación

main.jsx
Punto de entrada global del proyecto:
- Toma el control del DOM en `#root`
- Importa y renderiza a **App** desde `basic-routes/App.jsx`

BrowserRouter
- Es un `componente contenedor` que habilita el uso del sistema de rutas en la app. Internamente usa la API del historial del navegador (HTML5 History API: pushState, popstate, etc.).
- Mantiene la URL sincronizada con la interfaz de React.
- Permite la navegación sin recargar la página (SPA: Single Page Application).
- Es necesario envolver tu aplicación o al menos la parte que usa rutas con este componente.

Routes
- Es el `contenedor` de todas las rutas `<Route />`.
- A partir de React Router v6, reemplaza al viejo `<Switch>`.
- Evalúa los path de cada `<Route /> hijo` y renderiza solo el primero que coincida.
- Se usa para definir múltiples rutas dentro de la aplicación.

Route
Representa una ruta individual dentro de tu app.

Props principales
`path:` la URL que debe coincidir.
`element:` el componente a renderizar si la URL coincide.

1. `main.jsx` monta el componente raíz: `createRoot(...).render(<App />)`
2. `<App />` incluye `<BrowserRouter>`, que escucha cambios en la URL.
3. Se renderiza `<nav>` con `<Link>`, que permite cambiar rutas sin recargar.
4. `<Routes>` evalúa todas las rutas mapeadas.
5. Si la URL coincide con un `path`, se muestra su `element`.
6. Si hacés clic en un `<Link>`, cambia la URL → React Router vuelve a evaluar.
7. Se renderiza el nuevo componente asociado.

*/

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

{/* Componentes de página
    A Home() y About() las invoca React Router cuando su ruta coincide con la URL actual. No se invocan directamente desde el código. Cuando el navegador detecta que la URL coincide con / o /about, se renderiza el componente correspondiente como element.
*/ }

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Esta es la página "Acerca de".</p>
    </div>
  );
}

// Definición de rutas
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
];

// Componente principal
export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Use de <nav><Link> y además de .map
            .map() en <Routes> sirve para declarar qué componente se muestra en qué ruta, pero no crea botones ni enlaces para navegar.
            Para que el usuario pueda cambiar la ruta (sin recargar la página), es necesário  agregar manualmente botones o enlaces.

            <Link to="/">Home</Link>: Cambia la URL en la barra del navegador a / usando el sistema de React Router (sin recargar). Eso dispara la coincidencia de rutas → se renderiza <Home />.

            Responsabilidades:
            
            .map()
            Define qué mostrar según la URL
            Cuando la URL es /about, mostrame <About />
            En <Routes>	define qué componente mostrar para cada URL.

            <Link>
            Cuando el usuario hace clic, cambiá la URL internamente a /about".
            Permite cambiar la URL cuando el usuario hace clic.
            <Link to="/x"> Permite al usuario cambiar la URL (navegar) sin recargar.
            */}

      <main style={{ padding: '1rem' }}>
        <Routes>
          {routes.map(({ path, element }) => {
            console.log('Ruta registrada:', path);
            // console.log('Ruta:', path, '→', element.type.name);
            return (<Route key={path} path={path} element={element} />);
            /*
            console.log('Ruta registrada:', path);
            Resultado:
            Ruta registrada: /
            Ruta registrada: /about
            
            Mas element para ver cuál componente se está asociando a cada ruta:
            console.log('Ruta:', path, '→', element.type.name);
            
            Resultado:
            Ruta: / → Home
            Ruta: /about → About

            key={path}
            Necesario para listas (clave única en el .map)
            
            path={path}
            La URL que debe coincidir (ej: "/about")
            
            element={element}
            El componente que se renderiza cuando coincide (ej: <About />)
            */
          })}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
/*
Cómo el navegador arma la app
1. main.jsx ejecuta createRoot(...).render(<App />)
2. <App /> monta el <BrowserRouter> que escucha cambios en la URL.
3. Se renderiza el <nav> con los <Link> que permiten cambiar de ruta.
4. Se evalúan las rutas declaradas en .map() con <Routes> + <Route>.
5. Cuando la URL actual coincide con alguna ruta, se renderiza el element asociado (ej: <Home />).
6. Si hacés clic en un <Link>, se actualiza la URL sin recargar, lo que provoca que React Router vuelva a evaluar las rutas.
7. El nuevo componente se renderiza y el ciclo continúa.

---

Comparación tipo "llave-cerradura":

Pregunta:
Si <Link> se encarga de cambiar la URL, ¿Por qué se necesita path={path} en <Route>? ¿No alcanza con el <Link>?

Separar "navegar" de "mostrar"
<Link>: solo cambia la URL en el navegador sin recargar.
<Route path="..." element="..." />: define qué componente se debe mostrar cuando la URL es esa.

---

Metáfora: Llave y Cerradura

<Link to="/about">
Cambia la URL a /about, y
Gira la llave

path="/about"
Escucha si la URL coincide con /about
Es la cerradura

element={<About />}
Muestra este componente si la cerradura abre
Es lo que hay detrás de la puerta

---

Flujo real completo:
1. clic en el <Link to="/about"> Cambia la URL a /about sin recargar.
2. React Router detecta el cambio de URL: Busca en todas las rutas (<Route path=... />) una coincidencia.
3. Cuando encuentra path="/about": Renderiza el componente que esté en element={<About />}.

---

Función de path={path}
Es una condición: le dice a React Router "si la URL coincide con esta ruta, entonces renderizá esto".
No navega, no cambia la URL, solo reacciona a ella.

Si no se declara <Route> para una URL
Si no hay un <Route path="/contacto">, no se mostrará nada.
Es decir, cambiarás la URL, pero React Router no sabrá qué renderizar.

---

Conclusión clara
1. <Link> Cambia la URL cuando el usuario hace clic
2. path="/x" Compara con la URL actual (coincidencia)
3. element=...	Si hay coincidencia, renderiza el componente indicado
4. Entonces: <Link> cambia la URL, path escucha la URL, y element muestra algo si hay match.

---

# Método .map() en JavaScript

Es una función disponible para los arrays de JavaScript que:

+ Toma una función como argumento ("callback").
+ Ejecuta esa función para cada elemento del array.
+ Devuelve un nuevo array que contiene los resultados de aplicar la función a cada elemento original.

Sintaxis general:

```js
const nuevoArray = arrayOriginal.map((elemento, índice, array) => {
  
  // lógica para transformar "elemento"
  return nuevoElemento;
});
```

elemento: el valor actual del array en cada iteración.
índice (opcional): la posición actual en el array.
array (opcional): referencia al array original.

## Aplicación en React

En React, .map() se utiliza para:

Renderizar listas de componentes dinámicamente.
Evitar repetir código creando elementos basados en arrays de datos.

Por ejemplo:

```jsx
const nombres = ['Ana', 'Luis', 'Carlos'];
return (
  <ul>
    {nombres.map(nombre => (
      <li key={nombre}>
        {nombre}
      </li>
    ))}
  </ul>
);

// key es un atributo especial de React para identificar de forma única a cada elemento en una lista cuando renderiza componentes en bucle
```

## callback en .map()

El método .map() recorre el `arrayOriginal` elemento por elemento.
Para cada `elemento`, ejecuta la función `callback` que definiste.

+ Esa función recibe como parámetro:
  + elemento: el valor actual del array.
  + índice: la posición de ese elemento.
  + array: referencia al array original.

```js
const nuevoArray = arrayOriginal.map((elemento, índice, array) => {
  // lógica para transformar "elemento"
  return nuevoElemento;
});
```

Dentro de la función, vos escribís la lógica para transformar o procesar ese elemento y devuelves el resultado de esa transformación.

Ese valor devuelto se llama aquí nuevoElemento (es un nombre genérico para representar lo que retornás).

El método .map() arma un nuevo array donde cada posición es el valor que retornaste en esa iteración.

## Ejemplo con arrows

```js
const numeros = [1, 2, 3];
const cuadrados = numeros.map(num => {
  const nuevoElemento = num * num;  // calculo el cuadrado del número
  return nuevoElemento;              // retorno el nuevo valor
});

console.log(cuadrados); // [1, 4, 9]

// Para num = 1, retorna 1, que será el primer elemento del nuevo array.
// Para num = 2, retorna 4, que será el segundo.
// Para num = 3, retorna 9, que será el tercero.
```

## Sin arrows

```js
var numeros = [1, 2, 3];

var cuadrados = numeros.map(
  
  function(num) {
    var nuevoElemento = num * num;  // calculo el cuadrado del número
    return nuevoElemento;            // retorno el nuevo valor

});

console.log(cuadrados); // [1, 4, 9]
// Para num = 1, retorna 1, que será el primer elemento del nuevo array.
// Para num = 2, retorna 4, que será el segundo.
// Para num = 3, retorna 9, que será el tercero.
```

*/