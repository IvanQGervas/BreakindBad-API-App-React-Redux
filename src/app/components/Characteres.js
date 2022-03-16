/**
 * Componente que renderiza todos los personajes
 * 
 */
// Dependencias
import React, { useEffect, useState } from "react";

// Hooks
import useBreakingBad from '../../hooks/useBreakingBad'
import useLang from "../../hooks/useLang";

// Componentes
import CharacterCard from "./CharacterCard";
import HandlerError from './HandlerError';
import Pagination from "./Pagination";
import Spinner from "./Spinner";

/**
 * Renderiza todos los personajes
 */
const Characteres = () => {

    // Hook de breakingBad
    let [
        { data, failFetch, loading },
        { clearErrors, fetchData }
    ] = useBreakingBad();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Array de elementos JSX con los datos de cada personaje
    const [elementsRender, setElementsRender] = useState();

    /**
     * Limpia los errores del estado breakingBad en el store
     * y reintenta la carga de datos.
     */
    const cbHandlerError = () => {
        clearErrors();
        fetchData();
    };

    // Texto y función de callback en caso de error
    const errMessage = __('ERR_MSG_CHARACTER', 'Error en la carga de personajes.')
    const handlerErr = {
        cbErr: cbHandlerError
    };

    // Efecto que lanza la carga de datos del estado breakingBad en el store
    useEffect(() => {
        if (!data || Object.keys(data).length < 0) {
            fetchData();
        }
    }, []);

    // Efecto que transforma los datos de breakingBad en elementos
    // card y los establece en el estado del componente.
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setElementsRender(
                data.map((character, index) =>
                    <CharacterCard character={character} key={`character-${index}`} />
                )
            );
        }
    }, [data]);

    return (
        <div className="row">
            {
                // Mientras se realiza la carga de datos
                loading && <Spinner /> ||
                // En caso de error
                failFetch && <HandlerError
                    errMsg={errMessage}
                    handlerErr={handlerErr} /> ||
                // Una vez cargados los datos y generados los elementos
                data && elementsRender && elementsRender.length > 0 &&
                <Pagination elements={elementsRender} />
            }
        </div>
    );
};

export default Characteres;