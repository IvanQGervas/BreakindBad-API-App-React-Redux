// TODO: Revisisar y testear todo el componente
/**
 * 
 * 
 */
// Dependencias
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Hooks
import useBreakingBadCharacters from '../../hooks/useBreakingBadCharacters'
import useLang from "../../hooks/useLang";

// Componentes
import HandlerError from "./HandlerError";
import Spinner from './Spinner';

// Constantes
import routes from '../../constants/routes';

/**
 * 
 */
const CharacterDetails = ({ setTitlePage }) => {

    // Parametros recibidos en la url
    const { charName } = useParams();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Hook de los personajes de Breaking Bad
    const [
        { byName, data, failFetch, loading },
        {
            clearData: clearDataCharacters,
            clearErrors: clearErrorsCharacters,
            fetchData: fetchDataCharacters
        }
    ] = useBreakingBadCharacters();

    // Función de redirección
    const redirect = useNavigate();

    // Estado con los datos del personaje
    const [character, setCharacter] = useState();

    // Estado que indica que los datos del personaje no se han
    // encontrado y renderiza el componente manejador de errores.
    const [characterNotFound, setCharacterNotFound] = useState(false);

    /**
     * Limpia los datos y errores del estado breakingBadCharacters 
     * del store y reintenta la carga de datos.
     */
    const cbHandlerError = () => {
        clearErrorsCharacters();
        redirect(routes.HomePage);
    };

    /**
     * Establece los datos del personaje en el estado del
     * componente y el nombre en el título de la página.
     */
    const establishCharacter = (character) => {
        setCharacter(character);
        setTitlePage(character.name);
    };

    // Textos y función de callback en caso de error
    const errFetchMessage = __('ERR_MSG_DETAILS_CHARACTER_FETCH', 'Ha habido un error, inténtelo de nuevo.');
    const errCharacterMessage = __('ERR_MSG_DETAILS_CHARACTER', 'Personaje no encontrado.');
    const handlerErr = {
        cbErr: cbHandlerError,
        textButton: __('RETURN_HOME', 'Volver al Inicio')
    };

    // Efecto que recoge los datos del personaje del store y ... TODO:
    useEffect(() => {
        /**
         * En caso de haber datos de los personajes en el store
         * se limpian los posibles errores del estado
         * breakingBadCharacters y se ejecuta la carga de datos.
         */
        if (!data || !byName) {
            console.log('paso 2');
            clearDataCharacters();
            fetchDataCharacters();
            return;
        }
        /**
         * En caso de encontrar los datos del personaje, se establecen 
         * en el estado del componente y el nombre en el título de la página.
         */
        if (charName && byName[charName]) {
            console.log('paso 3');
            establishCharacter(byName[charName]);
            return;
        }
        // Si no se ha encontrado personaje
        setCharacterNotFound(true);
    }, []);

    /**
     * Efecto ejecutado al producirse cambios en el estado
     * breakingBadCharacters del store.
     */
    useEffect(() => {
        // Si los datos estan establecidos
        if (!failFetch && data && byName) {
            // Si el personaje existe se establece en el estado del componente y el nombre en el título de la página
            if (charName && byName[charName]) {
                establishCharacter(byName[charName]);
            } else {
                // Si no se ha encontrado personaje
                setCharacterNotFound(true);
            }
        }
    }, [data, byName, failFetch]);

    return (
        <>
            {
                //
                loading && <Spinner /> ||
                //
                failFetch && <HandlerError
                    errMsg={errFetchMessage} /> ||
                //
                characterNotFound && <HandlerError
                    errMsg={errCharacterMessage}
                    handlerErr={handlerErr}
                    typeAlert='warning' /> ||
                //
                character &&
                <>
                    <div>Aqui va todo lo de los datos men</div>
                </>
            }
        </>
    );
};

export default CharacterDetails;