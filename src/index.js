// Dependencias
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './modules/store';

// Componentes
import App from './App';

// Estilos
import './app/css/boostrap.min.css'; // Boostrap
// TODO: minimizar y comentar
import './app/css/styles.css'; 

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);