/**
 * Acciones creadoras (funciones que ejecutan acciones)
 * del estado breakingBad.
 * 
 */

// Acciones
import {
    CHANGE_LANGUAGE
} from './actionTypes';

/**
 * Cambio de idioma
 */
export function changeLanguage(lang) {
    return async (dispatch) => {
        // Se establece la clave del idioma en el estado
        dispatch({
            type: CHANGE_LANGUAGE,
            payload: lang
        });
    }
};