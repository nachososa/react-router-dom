/*
La URL ahora tiene forma de /user/:id/:slug.
Se agrega validación de ambos valores (id y slug) en el componente UserProfile.
El enlace generado usa ambos campos del usuario.
Es una práctica común en SEO-friendly URLs.
Se puede extender para blogs (/post/:id/:slug) o productos (/product/:id/:slug)
*/

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    NavLink,
    Link,
    useParams
} from 'react-router-dom';

// Lista de usuarios simulados con slugs
const users = [
    { id: '42', name: 'Juan Pérez', slug: 'juan-perez' },
    { id: '23', name: 'Ana López', slug: 'ana-lopez' },
    { id: '99', name: 'Carlos García', slug: 'carlos-garcia' }
];

export default function E12_useParams_Slug() {

    // Vistas principales
    const Home = () => (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h2>Inicio</h2>
            <p>Probar las rutas dinámicas con slug:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {users.map(user => (
                    <li key={user.id} style={{ margin: '0.5rem 0' }}>
                        <Link to={`/user/${user.id}/${user.slug}`} style={{ color: '#1976d2' }}>
                            Ver perfil de {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    const About = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Acerca de</h2>;
    const Contact = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Contacto</h2>;

    // Vista dinámica con id + slug
    const UserProfile = () => {
        const { id, slug } = useParams();
        const user = users.find(u => u.id === id && u.slug === slug);

        if (!user) {
            return <Navigate to="/404" replace />;
        }

        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Perfil del Usuario</h2>
                <p>ID: <strong>{user.id}</strong></p>
                <p>Nombre: <strong>{user.name}</strong></p>
                <p>Slug: <strong>{user.slug}</strong></p>
            </div>
        );
    };

    const NotFound = () => (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ padding: '1rem' }}>Error 404</h2>
            <p>La página solicitada no existe.</p>
            <Link to="/home" style={{ marginTop: '1rem', display: 'inline-block', color: '#1976d2' }}>
                Volver al inicio
            </Link>
        </div>
    );

    return (
        <BrowserRouter>
            <nav style={{
                padding: '1rem',
                backgroundColor: '#e4e4e4',
                borderBottom: '1px solid #ccc'
            }}>
                <NavLink
                    to="/home"
                    style={({ isActive }) => ({
                        marginRight: '1rem',
                        textDecoration: isActive ? 'underline' : 'none',
                        color: isActive ? '#1976d2' : 'black'
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        marginRight: '1rem',
                        textDecoration: isActive ? 'underline' : 'none',
                        color: isActive ? '#1976d2' : 'black'
                    })}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none',
                        color: isActive ? '#1976d2' : 'black'
                    })}
                >
                    Contact
                </NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:id/:slug" element={<UserProfile />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
