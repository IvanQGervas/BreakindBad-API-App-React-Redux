/**
 * Componente que renderiza todos los personajes
 * 
 */
// Dependencias
import React, { useEffect, useState } from "react";

// Hooks
import useBreakingBadCharacters from '../../../hooks/useBreakingBadCharacters'
import useLang from "../../../hooks/useLang";

// Componentes
import Card from "../Card";
import HandlerError from '../HandlerError';
import Pagination from "../Pagination";
import Spinner from "../Spinner";

/**
 * Renderiza todos los personajes en una paginación.
 * Realiza la carga de los datos de todos los
 * personajes en el store.
 * En caso de error, renderiza una alerta en
 * pantalla y permite reintentar la carga.
 */
const Characters = () => {

    // Hook de los personajes de Breaking Bad
    let [
        { data, failFetch, loading },
        { clearData, clearErrors, fetchData }
    ] = useBreakingBadCharacters();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Array de elementos Card con los datos de cada personaje
    const [elementsRender, setElementsRender] = useState();

    /**
     * Limpia los datos y errores del estado breakingBadCharacters 
     * del store y reintenta la carga de datos.
     */
    const cbHandlerError = () => {
        clearData();
        clearErrors();
        fetchData();
    };

    // Texto y función de callback en caso de error
    const errMessage = __('ERR_MSG_CHARACTER', 'Error en la carga de personajes.')
    const handlerErr = {
        cbErr: cbHandlerError
    };

    // Efecto que lanza la carga de datos en el estado
    // breakingBadCharacters del store.
    useEffect(() => {
        if (!data || Object.keys(data).length < 0) {
            fetchData();
        }
    }, []);

    // Efecto que genera con los datos de breakingBadCharacters elementos
    // card y los establece en el estado del componente.
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setElementsRender(
                data.map((character, index) =>
                    <Card
                        className='p-3 p-md-2 col-lg-3 col-md-4 col-sm-6 col-12'
                        img={character.img}
                        navigationUrl={`/character/${character.name}`}
                        title={character.name}
                        secondaryText={character.nickname}
                        key={`character-${index}`} />
                )
            );
        }
    }, [data]);

    return (
        <div className="row">
            {
                // En caso de error
                failFetch && <HandlerError
                    errMsg={errMessage}
                    handlerErr={handlerErr} /> ||
                // Mientras se realiza la carga de datos
                loading && !elementsRender && <Spinner /> ||
                // Una vez cargados los datos y generados los elementos
                data && elementsRender && elementsRender.length > 0 &&
                <Pagination elements={elementsRender} />
            }
        </div>
    );
};

export default Characters;