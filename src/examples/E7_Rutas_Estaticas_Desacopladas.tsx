// Rutas Básicas 2
// Enfoque desacoplado:
// Este enfoque desacopla la lógica de rutas de la estructura JSX de <Routes />.
// Es decir, separa las responsabilidades.
// La lista de elementos <Route /> se generan dinámicamente.
// Aquí se externaliza la configuración de rutas en un array de objetos (routes), separando la lógica del JSX.

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

// La definición de rutas se externaliza en una estructura de datos (routes[]), separando la lógica de ruteo del árbol JSX de presentación.
const routes = [
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/about',
    element: <About />
  },
];

// Componente principal
export default function App() {
  return (
    <BrowserRouter>

      <nav style={{
        padding: '1rem',
        backgroundColor: 'rgb(240,240,240)',
        borderBottom: '1px solid #ccc'
      }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: '1rem' }}>

        <Routes>
          {routes.map(({ path, element }) => {
            console.log('Ruta:', path, '→', element.type.name);
            return (<Route key={path} path={path} element={element} />);
          })}
        </Routes>

      </main>
    </BrowserRouter>
  );
};
