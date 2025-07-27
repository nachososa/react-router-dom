import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Modificar según exercises
import App from './exercises/spa/App';

// Obtener el contenedor raíz del DOM
const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento con id "root" en index.html');
}

// Crear la raíz de React y renderizar la aplicación
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
