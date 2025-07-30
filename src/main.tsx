import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Modificar según examples
// import E1_Spa from './examples/E1_Spa'
// import E2_Router_Browser from './examples/E2_Router_Browser'
// import E3_Router_Hash from './examples/E3_Router_Hash'
// import E4_NavLink from './examples/E4_NavLink'
// import E5_Outlet from './examples/E5_Outlet'
// import E6_Rutas_Estaticas_Acopladas from './examples/E6_Rutas_Estaticas_Acopladas'
import E7_Rutas_Estaticas_Desacopladas from './examples/E7_Rutas_Estaticas_Desacopladas'

//

// Obtener el contenedor raíz del DOM
const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento con id "root" en index.html');
}

// Crear la raíz de React y renderizar la aplicación
createRoot(container).render(
  <StrictMode>
    <E7_Rutas_Estaticas_Desacopladas />
  </StrictMode>
);
