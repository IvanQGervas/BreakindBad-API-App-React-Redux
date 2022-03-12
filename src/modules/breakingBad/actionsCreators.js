/**
 * Acciones creadoras (funciones que ejecutan acciones)
 * del estado breakingBad.
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

// Ayudantes
import arrayToObject from '../../utils/arrayToObject';

// Servicios
import { getAllCharacters } from '../../services/api/breakingBadApi';

/**
 * Carga de datos
 */
export function fetchData() {
    return async (dispatch) => {

        // Se establece en el estado el intento de carga de datos
        dispatch({
            type: FETCH_ATTEMPT
        });

        try {
            // Llamada al servicio
            const data = await getAllCharacters();

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
                // Se genera un objeto normalizado con los ids de la repuesta
                // del servicio para un mejor acceso a los datos.
                const byId = arrayToObject(data, 'char_id');

                // Se establece en el estado los datos recibidos y el objeto normalizado
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: {
                        data,
                        byId
                    }
                });
            }
            return;
        } catch (error) {
            console.error('[Error breakingBad]: ', error);

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