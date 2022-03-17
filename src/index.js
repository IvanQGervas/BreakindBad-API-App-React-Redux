// Dependencias
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store';

// Componentes
import App from './App';

// Estilos
import './app/css/boostrap.min.css'; // Boostrap
// TODO: minimizar y comentar
import './app/css/styles.css'; 

// TODO: Exportar todo lo que pueda interesar de los componentes
// y revisar si quiero hacer cambios en la arquitectura.

// TODO: Mejorar comentarios de todos los archivos, especial componentes páginas

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);