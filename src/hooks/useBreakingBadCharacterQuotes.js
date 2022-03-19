/**
 * HOOK -> Datos del estado breakingBadCharacterQuotes y metodos relacionados
 * 
 */

// Dependencias
import { useDispatch, useSelector } from 'react-redux';

// Acciones
import { clearData, clearErrors, fetchData } from '../store/breakingBadCharacterQuotes/actionsCreators';

/**
 * HOOK -> Datos del estado breakingBadCharacterQuotes y metodos relacionados
 */
const useBreakingBadCharacterQuotes = () => {

    // Se recoge el estado del store
    const data = useSelector(state => state.breakingBadCharacterQuotes);
    const dispatch = useDispatch();

    // Carga de datos
    const dispatchFetchData = (charName) => {
        dispatch(fetchData(charName));
    };

    // Limpieza de todos los datos
    const dispatchClearData = () => {
        dispatch(clearData());
    };

    // Limpieza de errores
    const dispatchClearErrors = () => {
        dispatch(clearErrors());
    };

    // Retorna una matriz con el estado y los métodos disponibles
    return [
        data,
        {
            clearData: dispatchClearData,
            clearErrors: dispatchClearErrors,
            fetchData: dispatchFetchData
        }
    ];
};

export default useBreakingBadCharacterQuotes;