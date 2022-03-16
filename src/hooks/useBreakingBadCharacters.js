/**
 * HOOK -> Datos del estado breakingBadCharacters y metodos relacionados
 * 
 */

// Dependencias
import { useDispatch, useSelector } from 'react-redux';

// Acciones
import { clearData, clearErrors, fetchData } from '../store/breakingBadCharacters/actionsCreators';

/**
 * HOOK -> Datos del estado breakingBadCharacters y metodos relacionadas
 */
const useBreakingBadCharacters = () => {

    // Se recoge el estado del store
    const data = useSelector(state => state.breakingBadCharacters);
    const dispatch = useDispatch();

    // Carga de datos
    const dispatchFetchData = () => {
        dispatch(fetchData());
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

export default useBreakingBadCharacters;