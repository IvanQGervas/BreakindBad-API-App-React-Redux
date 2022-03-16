/**
 * Agrupación de todas la funciones reductoras en el store de la aplicación
 */

// Dependencias
import { configureStore } from '@reduxjs/toolkit';

// Funciones reductoras
// Personajes Breaking Bad
import breakingBadCharactersReducer from './breakingBadCharacters/reducer';
// Idiomas
import langReducer from './lang/reducer';

export const store = configureStore({
  reducer: {
    breakingBadCharacters: breakingBadCharactersReducer,
    lang: langReducer
  }
});