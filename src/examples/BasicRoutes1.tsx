// Rutas Básicas 1
// Enfoque acoplado:
// Este enfoque acopla la lógica de rutas de la estructura JSX de <Routes />.
// Es decir, no separa las responsabilidades.
// La lista de elementos <Route /> se generan de manera estática.

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

// Componente principal con rutas acopladas directamente al JSX
export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
