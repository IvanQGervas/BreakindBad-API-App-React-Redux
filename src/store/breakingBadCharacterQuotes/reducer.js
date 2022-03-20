/**
 * Función reductora del estado
 */

// Constante que representan los tipos de acciones
import {
    CLEAR_DATA,
    CLEAR_ERRORS,
    FETCH_ATTEMPT,
    FETCH_FAIL,
    FETCH_SUCCESS,
} from './actionTypes';

// Estado inicial
const initialState = {
    data: null,
    failFetch: false,
    loading: false
};

/**
 * Función reductora del estado
 * 
 * @param {Object} state    Datos del estado
 * @param {Object} action   Objeto con la clave type, la cual indica la acción a realizar
 *                          y otra clave opcional llamada payload con datos para el estado.
 * @return                  Retorna el estado modificado según la acción recibida
 */
export default function breakingBadCharacterQuotesReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_DATA:
            return initialState;
        case CLEAR_ERRORS:
            return {
                ...state,
                failFetch: false,
                loading: false
            };
        case FETCH_ATTEMPT:
            return {
                data: null,
                failFetch: false,
                loading: true
            };
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                failFetch: true
            };
        case FETCH_SUCCESS:
            const data = action.payload[0]
            return {
                data,
                loading: false,
                failFetch: false
            };
        default:
            return state;
    }
}