/**
 * Acciones creadoras (funciones que ejecutan acciones)
 * del estado breakingBadCharacterQuotes.
 * 
 */
// Acciones
import {
    CLEAR_DATA,
    CLEAR_ERRORS,
    FETCH_ATTEMPT,
    FETCH_FAIL,
    FETCH_SUCCESS,
} from './actionTypes';

// Servicios
import { getRandomQuoteWithCharacterName as Service } from '../../services/api/breakingBadApi';

/**
 * Carga de datos
 */
export function fetchData(charName) {
    return async (dispatch) => {

        // Se establece en el estado el intento de carga de datos
        dispatch({
            type: FETCH_ATTEMPT
        });

        try {
            // Llamada al servicio
            const data = await Service(charName);

            // Si no se recibe nada del servicio
            if (!data) {
                // Se establece en el estado error en la petición
                dispatch({
                    type: FETCH_FAIL
                });
                return;
            }

            // Si se reciben datos
            if (data) {
                // Se establece en el estado los datos recibidos
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: data
                });
            }
            return;
        } catch (error) {
            console.error('[Error breakingBadCharacterQuotes]: ', error);

            // Se establece en el estado error en la petición
            dispatch({
                type: FETCH_FAIL
            });
            return;
        }

    };
}

/**
 * Limpia los datos previos referidos a una carga de datos
 */
export function clearData() {
    return (dispatch) => {
        dispatch({
            type: CLEAR_DATA
        });
    };
}

/**
 * Limpia errores previos en la carga de datos
 */
export function clearErrors() {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS
        });
    };
}