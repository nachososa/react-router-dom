import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

// Layout con barra de navegación común
function Layout() {
    return (
        <>
            <header style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                <nav style={{ display: 'flex', gap: '1rem' }}>
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : undefined}>
                        Inicio
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                        Acerca
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                        Contacto
                    </NavLink>
                </nav>
            </header>

            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>
            <style>
                {`.active-link {font-weight: bold; color: #1976d2; text-decoration: underline;}`}
            </style>
        </>
    );
};

// Vistas
function Home() {
    return (
        <section>
            <h1>Inicio</h1>
            <p>Bienvenido a la página principal.</p>
        </section>
    );
}

function About() {
    return (
        <section>
            <h1>Acerca</h1>
            <p>Información institucional o de presentación personal.</p>
        </section>
    );
}

function Contact() {
    return (
        <section>
            <h1>Contacto</h1>
            <p>Formulario de contacto, ubicación o medios de comunicación.</p>
        </section>
    );
}

// Componente principal
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
