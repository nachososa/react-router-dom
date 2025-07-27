# Instalación y configuración inicial

## Requisitos previos

Antes de pasar a la instalación, es necesario contar con un entorno de desarrollo basado en React, preferentemente configurado mediante una herramientas modernas como Next.js, Create React App (CRA), Parcel o Webpack. Esta base garantiza compatibilidad con los módulos ES modernos y una experiencia de desarrollo optimizada.

## Instalación del paquete principal

Para incorporar React Router en el proyecto, es necesario instalar el paquete `react-router-dom`, el cual contiene todos los componentes necesarios para implementar navegación en entornos web.

```bash
npm install react-router-dom
npm install -D @types/react-router-dom instale
```

***Desde React Router v6***
El paquete react-router-dom incluye sus propios tipos TypeScript directamente en su distribución (index.d.ts), lo cual hace innecesaria la instalación de @types/react-router-dom. De hecho, @types/react-router-dom está desactualizado y puede generar conflictos o errores.

***Recomendación:***
Eliminar @types/react-router-dom del devDependencies para evitar posibles inconsistencias.

```bash
npm uninstall @types/react-router-dom
```

## Tipado para entornos con TypeScript

En proyectos que integren TypeScript, es recomendable instalar los tipos correspondientes para maximizar la autocompletación, la validación de rutas y la detección temprana de errores. React Router ya incluye sus definiciones de tipo, por lo tanto no se requiere instalación adicional de @types/react-router-dom.

No obstante, es esencial verificar que el archivo tsconfig.json posea las configuraciones adecuadas para admitir JSX y los módulos ES:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Compatibilidad con SWC

En proyectos basados en Vite y SWC, no se requiere configuración adicional para soportar JSX ni para interpretar las rutas de React Router, siempre que el archivo de entrada (main.tsx o main.jsx) esté correctamente estructurado y se utilicen componentes compatibles con React 18 o superior.

## Verificación posterior a la instalación

Una vez finalizada la instalación, se recomienda reiniciar el servidor de desarrollo para asegurar que las rutas y módulos hayan sido correctamente reconocidos. Confirmar que el paquete figure en package.json bajo dependencias:

```jsx
"dependencies": {
  "react-router-dom": "^6.x.x"
}
```

Con esta configuración inicial, el entorno queda preparado para implementar rutas estáticas, dinámicas y anidadas utilizando los componentes de React Router de forma eficiente y escalable.
