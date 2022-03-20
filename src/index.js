// Dependencias
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store';

// Componentes
import App from './App';

// Estilos
import './app/css/boostrap.min.css'; // Boostrap 5.1.3
import './app/css/styles.css'; 

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);