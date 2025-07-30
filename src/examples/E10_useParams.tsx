/*
Parámetros Dinámicos (Sin validacion)

Permiten capturar valores variables directamente desde la URL.
Se definen usando el prefijo : dentro del path de una <Route />.
Sirve para que una misma vista muestre contenido diferente según el valor de la URL.

Estructura general
<Route path="/user/:id" element={<UserProfile />} />

La ruta /user/:id significa que cualquier URL que coincida con /user/algo va a renderizar el componente UserProfile.

El valor algo (por ejemplo, 42) se puede extraer usando el hook useParams().

useParams
const { id } = useParams();
Este hook devuelve un objeto con los parámetros definidos en la ruta.

Si accedés a /user/42, entonces id tendrá el valor "42".

Ejemplos para vistas:
- Perfiles de usuario: /user/42
- Productos: /producto/123
- Publicaciones de blog: /post/mi-articulo

¿Qué le falta al ejemplo para ser “más realista”?

Tener en cuenta que no hay validación ni lógica de carga dinámica.

Para que esto simule algo más útil como:
Un blog donde /post/mi-articulo muestra contenido real.
Un e-commerce donde /producto/123 carga detalles del producto.
Un sistema de usuarios con perfiles reales.

Habria que implementar:
Un dataset simulado (un array de usuarios, productos o posts).
Lógica de búsqueda por ID o slug dentro de ese array.
Mostrar los datos si se encuentra coincidencia, o redireccionar a /404 si no se encuentra.
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

export default function E10_useParams() {

    // Vistas principales
    const Home = () => (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h2>Inicio</h2>
            <p>Probar la ruta dinámica:</p>
            <Link to="/user/42" style={{ color: '#1976d2' }}>
                Ver perfil del usuario 42
            </Link>
        </div>
    );

    const About = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Acerca de</h2>;
    const Contact = () => <h2 style={{ padding: '1rem', textAlign: 'center' }}>Contacto</h2>;

    // Vista dinámica con :id
    const UserProfile = () => {
        const { id } = useParams();

        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Perfil del Usuario</h2>
                <p>ID recibido: <strong>{id}</strong></p>
            </div>
        );
    };

    // NotFound
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
            {/* Barra de navegación */}
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

            {/* Ruteo */}
            <Routes>
                {/* Redirección raíz → /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Rutas principales */}
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* Ruta dinámica con :id */}
                <Route path="/user/:id" element={<UserProfile />} />

                {/* Vista de error 404 */}
                <Route path="/404" element={<NotFound />} />

                {/* Wildcard: Redirección para rutas no encontradas */}
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
