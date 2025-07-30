import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Modificar según examples
// import E1_Spa from './examples/E1_Spa'
// import E2_Router_Browser from './examples/E2_Router_Browser'
// import E3_Router_Hash from './examples/E3_Router_Hash'
// import E4_NavLink from './examples/E4_NavLink'
// import E5_Outlet from './examples/E5_Outlet'
// import E6_Rutas_Estaticas_Acopladas from './examples/E6_Rutas_Estaticas_Acopladas'
// import E7_Rutas_Estaticas_Desacopladas from './examples/E7_Rutas_Estaticas_Desacopladas'
// import E8_Navigate from './examples/E8_Navigate'
// import E9_Navigate_NavLink from './examples/E9_Navigate_NavLink'
// import E10_useParams from './examples/E10_useParams'
// import E11_useParams_Validacion from './examples/E11_useParams_Validacion'
// import E12_useParams_Slug from './examples/E12_useParams_Slug'
import E13_QueryString from './examples/E13_QueryString'

// Obtener el contenedor raíz del DOM
const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento con id "root" en index.html');
}

// Crear la raíz de React y renderizar la aplicación
createRoot(container).render(
  <StrictMode>
    <E13_QueryString />
  </StrictMode>
);
