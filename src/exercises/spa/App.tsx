// src/App.tsx

import { useState } from 'react';

export default function App() {
    const [view, setView] = useState<'home' | 'about' | 'contact'>('home');

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
            <nav style={{ marginBottom: '2rem' }}>
                <button onClick={() => setView('home')}>Inicio</button>
                <button onClick={() => setView('about')}>Acerca de</button>
                <button onClick={() => setView('contact')}>Contacto</button>
            </nav>

            <main>
                {view === 'home' && <h1>Bienvenido a la aplicación SPA</h1>}
                {view === 'about' && <h1>Acerca de esta aplicación</h1>}
                {view === 'contact' && <h1>Página de contacto</h1>}
            </main>
        </div>
    );
}
