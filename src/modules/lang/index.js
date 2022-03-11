/**
 *  REDUCERS
 *
 * Ya que no podemos modificar el estado directamente
 * (tiene que ser a través de acciones) y el estado está almacenado
 * en un único Store (Store Global), para especificar como realizar los
 * cambios en el árbol del estado, utilizamos funciones puras llamadas reducers.
 *
 * Una función pura es simplemente una función que ante
 * los mismos datos de entrada devuelve el mismo resultado.
 * Es decir, la siguiente función de ejemplo sería una función pura:
 *
 * function suma (a, b) {
 *     return a + b;
 * }
 *
 * Esta función para los mismos parámetros, devuelve siempre lo mismo.
 * Si llamamos a suma(1,2) siempre devolverá 3.
 * De ésta manera es más sencillo depurar y encontrar errores, y es más fácil testear.
 *
 * El reducer es simplemente eso, una función que recibe dos parámetros,
 * el "estado inicial" y una "acción"" y dependiendo del tipo de acción realizará
 * una operación u otra en el estado.
 * Siempre de manera inmutable, no podemos modificar el estado,
 * sino crear una copia a partir del anterior. De esta forma es más fácil rastrear posibles errores.
 *
 * Ejemplo de reducer:
 * function reducer (state, action) {
 *     switch(action.type) {
 *         case 'ADD_ITEM':
 *             return state.concat(action.item);
 *         case 'REMOVE_ITEM':
 *             ...
 *         default:
 *             return state;
 *     }
 * }
 *
 */
// Dependencias
import { combineReducers } from 'redux';

// Tipos de acciones
import {
    FETCH_ATTEMPT_DICTIONARY as FETCH_ATTEMPT,
    FETCH_FAIL_DICTIONARY as FETCH_FAIL,
    FETCH_SUCCESS_DICTIONARY as FETCH_SUCCESS,
    CLEAR_ERRORS_DICTIONARY as CLEAR_ERRORS
} from './actionTypes';

// Actions Creators
// export * from './actions';

import {
    // Idioma por defecto
    LANGUAGE_DEFAULT,
    // Idiomas disponibles
    LANGUAGES
} from 'Constants/langs';

import { currentLang } from './actions';

// Configuración inicial para el diccionario por defecto e idiomas disponibles
const initialState = {
    available: LANGUAGES,
    locale: LANGUAGE_DEFAULT,
    default: LANGUAGE_DEFAULT,
    dictionary: {},
    info: {}
};

// Establece el diccionario del idioma seleccionado
const setDictionary = (payload) => {
    if (payload === undefined || payload === null ||
        payload.dictionary === undefined || payload.dictionary === null) {
        return initialState.dictionary;
    }
    currentLang(payload.dictionary);
    return payload.dictionary;
};

/**
 * Establece el idioma de la App y el diccionario para el idioma seleccionado
 * @param {Boolean} state Estado
 * @param {String} action Tipo de acción
 */
function data(state = initialState, action) {
    let dictionary;
    switch (action.type) {
        case FETCH_ATTEMPT:
            return state;
        case FETCH_FAIL:
            return initialState;
        case FETCH_SUCCESS:
            dictionary = setDictionary(action);
            return {
                ...state,
                dictionary: {
                    ...dictionary
                },
                info: state.available[action.lang],
                locale: action.lang
            };
        default:
            return state;
    }
}

function errors(state = null, action) {
    switch (action.type) {
        case FETCH_FAIL:
            return action.error;
        case FETCH_SUCCESS:
        case FETCH_ATTEMPT:
        case CLEAR_ERRORS:
            return null;
        default:
            return state;
    }
}

function isFetching(state = false, action) {
    switch (action.type) {
        case FETCH_ATTEMPT:
            return true;
        case FETCH_FAIL:
        case FETCH_SUCCESS:
            return false;
        default:
            return state;
    }
}

function loaded(state = false, action) {
    switch (action.type) {
        case FETCH_ATTEMPT:
        case FETCH_FAIL:
            return false;
        case FETCH_SUCCESS:
            return true;
        default:
            return state;
    }
}

// Se exporta el Reducer
export default combineReducers({
    data,
    errors,
    isFetching,
    loaded
});