/**
 * HOOK -> Datos del estado lang y metodos relacionados
 * 
 */

// Dependencias
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { changeLanguage } from '../modules/lang/actionsCreators';

/**
 * HOOK -> Datos del estado lang y metodos relacionadas
 */
const useLang = () => {

    // Se recoge el estado del store
    const langState = useSelector(state => state.lang);
    const dispatch = useDispatch();

    // Cambiar de idioma
    const dispatchChangeLanguage = (lang) => {
        dispatch(changeLanguage(lang));
    };

    /**
     * Devuelve el valor de la clave recibida y según el idioma establecido del diccionario.
     * En caso de no encontrar la clave, recibe como segundo parámetro opcional un texto a retornar.
     * 
     * @param {String} textKey          Clave del texto en el diccionario
     * @param {String} [textDefault]    Texto por defecto en caso de fallar la clave
     * @return                          Texto del diccionario, texto por defecto o clave recibida 
     */
    const selectText = (textKey = '', textDefault) => {

        // Desestructuración del estado
        const { data, lang } = langState;

        // Si se encuentra la clave definida
        if (data[textKey] && data[textKey][lang]) {
            return data[textKey][lang];
        }

        // Si se recibe un texto por defecto en caso de no encontrar la clave
        if (textDefault) {
            return textDefault;
        }

        // Si no se cumple ninguna de las anteriores condiciones se retorna la clave recibida
        return textKey;
    };

    // Retorna una matriz con el estado y los métodos disponibles
    return [
        langState,
        {
            changeLanguage: dispatchChangeLanguage,
            // Al ser una función que se ejecutara a lo largo de toda la aplicación se le asigna
            // una sintaxis corta y fácil de identificar.
            __: selectText
        }
    ];
};

export default useLang;