/**
 * HOOKs -> Devuelve las propiedades relacionadas con el diccionario de idiomas.
 * Se exporta el método "__" (acrónimo) para utilizarlo como un uso rápido en
 * las traducciones de textos
 *
 */
// Dependencias
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// Actions
import { __, fetchData } from 'Modules/lang/actions';

/**
 * Diccionario de idiomas
 *
 */
const useLang = () => {
    /**
     * shallowEqual realiza la comparación a nivel de valores del objeto
     * retornado por el selector, de igual forma que el mapStateToProps.
     * Por defecto el selector solo compara refeferencias de lo que se retorne.
     *
     * Usar shallowEqual como función de comparación si se están creando
     * nuevos objetos o matrices como los valores de retorno de useSelector
     * (y no se está utilizando un selector Reselect memorizado), porque esas
     * son nuevas referencias y de lo contrario siempre obligarían al
     * componente a volver a renderizarse.
     *
     */
    const { lang, hasContinue } = useSelector(state => {
        const hasContinue = state.lang.data &&
            state.lang.data.locale !== null &&
            !state.lang.isLoading &&
            !state.lang.errors &&
            state.lang.loaded ? true : false;
        return {
            lang: state.lang,
            hasContinue
        };
    }, shallowEqual);

    const dispatch = useDispatch();

    // Carga de datos
    const dispatchFetchData = (languageToLoad) => {
        dispatch(fetchData(languageToLoad));
    };

    // Retorna una matriz con el estado y los métodos disponibles
    return [
        {
            hasContinue,
            lang,
            locale: lang.data.locale,
        },
        {
            __,
            dispatchFetchData
        }
    ];

};

export { __ };

export default useLang;