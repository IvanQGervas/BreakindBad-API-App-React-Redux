/**
 * ACTIONS CREATORS
 *
 * Son funciones que crean acciones.
 *
 * Es fácil confundir "acción" y "accion creadora" (action creators),
 * por eso en Redux, un creador de acción es simplemente el retorno de una acción.
 * Redux, no es Flux, que despacha directamente una acción, sino que para despachar
 * realmente la acción hay que pasarle el resultado
 *
 */


// JavaScript sprintf implementation for the browser and node.js
import { vsprintf } from 'sprintf-js';

// Tipos de acciones
import {
    FETCH_ATTEMPT_DICTIONARY as FETCH_ATTEMPT,
    FETCH_FAIL_DICTIONARY as FETCH_FAIL,
    FETCH_SUCCESS_DICTIONARY as FETCH_SUCCESS,
    CLEAR_ERRORS_DICTIONARY as CLEAR_ERRORS
} from './actionTypes';

// Funciones de ayuda
import { handlerError } from 'Modules/handlerHelpers';

// Servicios
import { translations } from 'Services/dictionary';

// Utilidades sobre el entorno
import environment from 'Utils/environment';

// Es un entorno de desarrollo?
const isDevelopment = environment().isDevelopment;

/**
 * Cargar los datos del idioma del diccionario
 * @param {*} lang  Código de idioma ISO y etiqueta IETF
 *                  Ejemplo: es-ES, en-US, etc
 */
export function fetchData(lang) {

    return async (dispatch) => {

        dispatch({
            type: FETCH_ATTEMPT
        });

        try {

            const response = await translations(lang);

            // Si el servicio devolvió un error
            if (response.error) {
                dispatch({
                    type: FETCH_FAIL,
                    error: response
                });
                return;
            }

            // Datos recibidos
            if (response.dictionary) {
                dispatch({
                    type: FETCH_SUCCESS,
                    lang,
                    dictionary: response.dictionary
                });
            }

        } catch (error) {
            handlerError(dispatch, FETCH_FAIL, error);
        }

    };
}

// Limpia errores previos
export function clearErrors() {
    return (dispatch => {
        dispatch({
            type: CLEAR_ERRORS
        });
    });
}

// Diccionario actual
let _currentLang = {};
export function currentLang(dictionary) {
    if (dictionary !== undefined) {
        _currentLang = dictionary;
    }
    return _currentLang;
}

// Dada un objeto, aplica si es el caso, reemplazos de cadenas
const applyReplacements = (obj, replacements = [], defaultValue) => {
    let _dictionary = currentLang(),
        _obj = _dictionary[obj];
    if (_obj === undefined && defaultValue !== undefined) {
        return defaultValue;
    }
    if (_obj === undefined && isDevelopment) {
        return '##' + obj + '##';
    }
    return (typeof _obj === 'string' && replacements.length > 0)
        ? vsprintf(_obj, replacements)
        : _obj === undefined ? '' : _obj;
};

// Se exporta como un acrónimo para reducir y facilitar el nombre del método
export {
    applyReplacements as __
};
