/**
 * Componente principal de la aplicación
 * 
 */
// Dependencias
import React from 'react';

// Contenedores
import HeaderContainer from './app/containers/HeaderContainer';
import PagesContainer from './app/containers/PagesContainer';

/**
 * Componente principal de la aplicación
 */
function App() {
  return (
    <>
      <HeaderContainer />
      <PagesContainer />
    </>
  );
}

export default App;