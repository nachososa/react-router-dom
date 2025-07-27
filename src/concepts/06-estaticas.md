# Rutas Básicas (Estáticas)

El enrutamiento básico en React Router permite establecer rutas fijas asociadas a componentes específicos. Estas rutas, denominadas rutas estáticas, definen una estructura de navegación clara y predecible dentro de una aplicación de tipo SPA (Single Page Application).

Para implementar este tipo de rutas, es necesario utilizar el componente `<Route />` dentro del contenedor `<Routes />`, que actúa como un switch evaluando la coincidencia entre la URL actual y las rutas declaradas.

A continuación se describen los elementos fundamentales:

- **`<Routes />`**: Encargado de contener todas las rutas de la aplicación. Evalúa cada `<Route />` y renderiza el componente correspondiente a la coincidencia encontrada.
- **`<Route path="..." element={<Componente />} />`**: Define una ruta con una URL específica y el componente que se debe renderizar cuando dicha ruta es accedida.

## Ejemplo

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

function Inicio() {
  return <h1>Página de inicio</h1>;
}

function AcercaDe() {
  return <h1>Sobre la aplicación</h1>;
}

function Contacto() {
  return <h1>Formulario de contacto</h1>;
}
```

- ***En este ejemplo:***
- Al ingresar a /, se renderiza el componente Inicio.
- Al ingresar a /about, se muestra el componente AcercaDe.
- Al ingresar a /contact, se visualiza el componente Contacto.

## Consideraciones

Las rutas se definen de forma declarativa, facilitando el mantenimiento y la lectura del código.

En caso de no coincidir ninguna ruta con la URL actual, React Router no renderiza ningún componente por defecto. Para manejar este caso, se recomienda agregar una ruta de tipo wildcard (*) que actúe como página de error 404.

Implementar rutas básicas es el primer paso para estructurar una navegación efectiva y modular dentro de una aplicación React moderna.
