/**
 * Agrupación de todas la funciones reductoras en el store de la aplicación
 */

// Dependencias
import { configureStore } from '@reduxjs/toolkit';

// Funciones reductoras
import brakingBadReducer from './breakingBad/reducer';
import langReducer from './lang/reducer';

export const store = configureStore({
  reducer: {
    breakingBad: brakingBadReducer,
    lang: langReducer
  }
});