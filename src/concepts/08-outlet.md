# Configuración de Rutas con Layout General y Vistas Múltiples en Aplicaciones React

## Introducción

En aplicaciones desarrolladas con React Router, es frecuente implementar una estructura modular compuesta por múltiples vistas, como Home, About y Contact, organizadas bajo un diseño común. Este enfoque permite reutilizar componentes compartidos, como barras de navegación, pies de página o encabezados, mejorando la cohesión y reduciendo la duplicación de código.

Una técnica fundamental para lograr esta organización consiste en emplear **layouts anidados**. El componente `<Outlet />` proporciona el punto de inserción donde se renderizan dinámicamente las rutas hijas dentro del layout principal, sin necesidad de reescribir estructuras repetitivas en cada vista.

## Objetivos

- Implementar un layout general con una barra de navegación persistente.
- Configurar rutas múltiples para vistas típicas como Home, About y Contact.
- Utilizar `<Outlet />` como mecanismo de composición visual.

## Estructura de Componentes

La arquitectura sugerida se compone de los siguientes elementos:

- **`Layout`**: componente base con estructura visual común (por ejemplo, una barra de navegación).
- **`Home`, `About`, `Contact`**: vistas individuales que representan distintas rutas de la aplicación.
- **`App`**: componente raíz que encapsula el enrutador y define la jerarquía de rutas.

## Implementación

A continuación, se presenta un ejemplo funcional en un único archivo, donde se configura un layout persistente y tres rutas asociadas.

```jsx
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

// Layout con barra de navegación común
function Layout() {
  return (
    <>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
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

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}

// Vistas individuales
function Home() {
  return <h2>Bienvenido a la página de inicio.</h2>;
}

function About() {
  return <h2>Información institucional o biográfica.</h2>;
}

function Contact() {
  return <h2>Datos de contacto y formulario de consulta.</h2>;
}

// Componente raíz con enrutamiento
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

      <style>{`
        .active-link {
          font-weight: bold;
          color: #0077cc;
          text-decoration: underline;
        }
      `}</style>
    </BrowserRouter>
  );
}
```

## Consideraciones Técnicas

El componente `<Layout />` actúa como contenedor estructural, y solo se monta una vez.

La instrucción `<Outlet />` permite renderizar dinámicamente las rutas hijas en función del segmento de URL activo.

La propiedad index en `<Route>` permite renderizar el componente Home cuando la URL coincide exactamente con /.

El uso de NavLink en lugar de Link posibilita aplicar estilos automáticos a la ruta activa mediante funciones condicionales.

## Conclusión

La implementación de un layout compartido mediante `<Outlet />` permite desarrollar aplicaciones React escalables, modulares y mantenibles. Esta técnica es esencial para estructuras de navegación profesional y se adapta a escenarios que requieran una interfaz consistente en todas las secciones de la aplicación. Se recomienda su adopción desde las primeras etapas del proyecto para garantizar una arquitectura sólida y coherente.
