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

      {/*
      Uso de <nav><Link> además de .map

      .map()
      sirve para declarar qué componente se muestra en qué ruta, pero no crea botones ni enlaces para navegar.
      Para que el usuario pueda cambiar la ruta (sin recargar la página), es necesário  agregar manualmente botones o enlaces.

      <Link to="/">Home</Link>
      Cambia la URL en la barra del navegador a / usando el sistema de React Router (sin recargar). Eso dispara la coincidencia de rutas → se renderiza <Home />.

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
};