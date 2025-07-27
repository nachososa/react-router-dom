import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Modificar según examples
// import Spa from './examples/Spa';
// import BasicRoutes1 from './examples/BasicRoutes1';
import BasicRoutes2 from './examples/BasicRoutes2';
// import RouterBrowser from './examples/RouterBrowser';
// import RouterHash from './examples/RouterHash';

// Obtener el contenedor raíz del DOM
const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento con id "root" en index.html');
}

// Crear la raíz de React y renderizar la aplicación
createRoot(container).render(
  <StrictMode>
    <BasicRoutes2 />
  </StrictMode>
);
