/**
 * HOOK -> Datos del estado breakingBad y metodos relacionados
 * 
 */

// Dependencias
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { clearData, clearErrors, fetchData } from '../modules/breakingBad/actionsCreators';

/**
 * HOOK -> Datos del estado breakingBad y metodos relacionadas
 */
const useBreakingBad = () => {

    // Se recoge el estado del store
    const data = useSelector(state => state.breakingBad);
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

export default useBreakingBad;