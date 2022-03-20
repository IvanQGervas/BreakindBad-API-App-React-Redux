/**
 * Componente principal de la aplicación
 * 
 */
// Dependencias
import React from 'react';

// Contenedores
import Header from './app/components/Header';
import Routing from './app/components/Routing';

/**
 * Componente principal de la aplicación
 */
function App() {
  return (
    <>
      <Header />
      <Routing />
    </>
  );
};

export default App;