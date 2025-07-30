import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// Componentes de vista
function Home() {
    return (
        <section>
            <h1>Inicio</h1>
            <p>Bienvenido a la página principal.</p>
        </section>
    );
}

function Services() {
    return (
        <section>
            <h1>Servicios</h1>
            <p>Información sobre los servicios ofrecidos.</p>
        </section>
    );
}

function Contact() {
    return (
        <section>
            <h1>Contacto</h1>
            <p>Formulario y datos de contacto.</p>
        </section>
    );
}

// Componente principal con navegación mediante NavLink
export default function App() {
    return (
        <BrowserRouter>
            <header>
                <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Servicios
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Contacto
                    </NavLink>
                </nav>
            </header>

            <main style={{ padding: '1rem' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <style>{`
        .active-link {
          font-weight: bold;
          text-decoration: underline;
          color: #0077cc;
        }
      `}</style>
        </BrowserRouter>
    );
}
