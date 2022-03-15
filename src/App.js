/**
 * Componente principal de la aplicación
 * 
 */
// Dependencias
import React from 'react';

// Contenedores
import HeaderContainer from './app/containers/HeaderContainer';
import MainAndRoutingContainer from './app/containers/MainAndRoutingContainer';

/**
 * Componente principal de la aplicación
 */
function App() {
  return (
    <>
      <HeaderContainer />
      <MainAndRoutingContainer />
    </>
  );
}

export default App;