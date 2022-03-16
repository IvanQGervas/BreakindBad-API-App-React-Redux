/**
 * Función reductora del estado
 */

// Constante que representan los tipos de acciones
import {
    CHANGE_LANGUAGE,
} from './actionTypes';

// Constantes
import dictionary from '../../constants/dictionary.json';
import lang from '../../constants/lang'

// NOTE: Al no ser una aplicación llevada a producción por encargo, el diccionario esta hardcodeado.
// Por lo que se puede utilizar directamente un json como estado inicial en el store
// sin tener problemas en la carga de los datos. Pero en una versión de producción el
// diccionario puede ser establecido desde un servicio y modificarse de forma externa sin
// necesidad de tener que hacer despliegues para cambiar los textos de la aplicación.

// Estado inicial
const initialState = {
    data: dictionary,
    lang: lang.ES
};

/**
 * Función reductora del estado
 * 
 * @param {Object} state    Datos del estado
 * @param {Object} action   Objeto con la clave type, la cual indica la acción a realizar
 *                          y otra clave opcional llamada payload con datos para el estado.
 * @return                  Retorna el estado modificado segun la acción recibida
 */
export default function langReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
}