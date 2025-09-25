import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

// Asegurarse de que el DOM esté completamente cargado antes de renderizar
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <HeroUIProvider>
          <ToastProvider />
          <App />
        </HeroUIProvider>
      </React.StrictMode>,
    );
  } else {
    console.error('No se encontró el elemento root en el DOM');
  }
});