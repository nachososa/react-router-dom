import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Layout />
        </HashRouter>
    );
}

function Layout() {
    return (
        <div>
            <h1>HashRouter</h1>
            <nav>
                <Link to="/">Inicio</Link> | <Link to="/acerca">Acerca</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acerca" element={<Acerca />} />
            </Routes>
        </div>
    );
}

function Inicio() {
    return <h2>Bienvenido a la página de inicio</h2>;
}

function Acerca() {
    return <h2>Sección de información</h2>;
}

export default App;
