// Rutas básicas con redirecciones y vista 404 personalizada

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

export default function App() {

  // Vistas principales
  const Home = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Inicio</h2>;
  const About = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Acerca de</h2>;
  const Contact = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Contacto</h2>;

  // NotFound
  const NotFound = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ padding: '1rem', textAlign: 'center' }}>Error 404</h2>
      <p>La página solicitada no existe.</p>

      <Link to="/home" style={{ marginTop: '1rem', display: 'inline-block', color: '#1976d2' }}>
        Volver al inicio
      </Link>

    </div>
  );

  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <nav style={{
        padding: '1rem',
        backgroundColor: '#e4e4e4',
        borderBottom: '1px solid #ccc'
      }}>
        <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Ruteo */}
      <Routes>
        {/* Redirección raíz → /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Rutas principales */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/*
        Vista de error 404
        Accesible desde el navegador. Si se desea evitar el acceso manual a /404, basta con no definir esa ruta y en su lugar renderizar el componente directamente desde el wildcard.
        */}
        <Route path="/404" element={<NotFound />} />

        {/* Wildcard: Redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/404" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
