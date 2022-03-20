/**
 * Componente con los datos del personaje.
 * Imagen, actor o actriz, ocupación, estado ...
 * 
 */
// Dependencias
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// Hooks
import useBreakingBadCharacters from '../../../hooks/useBreakingBadCharacters'
import useLang from "../../../hooks/useLang";

// Componentes
import ContentCharacterData from './ContentCharacterData';
import HandlerError from "../HandlerError";
import ImageFrame from "../ImageFrame";
import Spinner from '../Spinner';
import Title from "../Title";

// Constantes
import routes from '../../../constants/routes';

/**
 * Componente con los datos del personaje.
 * El nombre del personaje se recibe por parámetros,
 * o en caso de ejecutar el componente desde la ruta
 * de personaje aleatorio se cojera cualquiera del store.
 * En caso de no haber establecidos datos, se ejecuta la carga de 
 * datos de todos los personajes. Y en caso de no existir
 * el personaje se indica con un mensaje de alerta.
 * 
 * @param {Function} setNameRenderedCharacter   Establece en el componente padre
 *                                              el nombre del personaje renderizado.
 */
const CharacterData = ({ setNameRenderedCharacter }) => {

    // Nombre del personaje, recibido en los parámetros de la url
    const { charName } = useParams();

    // Pathname de la url
    const { pathname } = useLocation();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Hook de los personajes de Breaking Bad
    const [
        { byName, names, data, failFetch, loading },
        { clearData, clearErrors, fetchData }
    ] = useBreakingBadCharacters();

    // Función de redirección
    const redirect = useNavigate();

    // Estado con los datos del personaje
    const [character, setCharacter] = useState();

    // Estado que indica que los datos del personaje no se han
    // encontrado y renderiza un mensaje de alerta.
    const [characterNotFound, setCharacterNotFound] = useState(false);

    /**
     * Limpia posibles errores en el estado breakingBadCharacters
     * del store y redirecciona a la página de inicio.
     */
    const cbHandlerError = () => {
        clearErrors();
        redirect(routes.HomePage);
    };

    /**
     * Establece los datos del personaje en el estado del componente
     * y el nombre del personaje en el componente padre.
     */
    const establishCharacter = (character) => {
        setCharacter(character);
        setNameRenderedCharacter(character.name);
    };

    // Textos y función de callback en caso de error
    // o de no encontrar personaje.
    const errFetchMessage = __('ERR_MSG_DETAILS_CHARACTER_FETCH', 'Ha habido un error, inténtelo de nuevo más tarde.');
    const errCharacterMessage = __('ERR_MSG_DETAILS_CHARACTER', 'Personaje no encontrado.');
    const handlerErr = {
        cbErr: cbHandlerError,
        textButton: __('RETURN_HOME', 'Volver al Inicio')
    };

    /**
     * Efecto ejecutado al montarse el componente.
     * En caso de haber datos en el estado del store,
     * realiza la carga de datos de todos los personajes.
     */
    useEffect(() => {
        if (!data || !byName) {
            clearData();
            fetchData();
        }
    }, []);

    /**
     * Efecto que establece los datos del personaje
     * en el estado del componente. En caso de no encontrar
     * al personaje se indica en el estado del componente.
     * Y en caso de que la ruta sea "RandomCharacterPage"
     * se cojera de forma aleatoria un personaje del estado.
     */
    useEffect(() => {
        // Si los datos están establecidos
        if (!failFetch && data && byName) {
            // Si la ruta es igual a RandomCharacterPage
            if (pathname === routes.RandomCharacterPage) {
                // Se recoge un nombre de manera aleatoria
                const randomCharacter = names[Math.floor(Math.random() * names.length)];
                // Se establecen los datos del personaje
                // en el estado del componente.
                establishCharacter(byName[randomCharacter])
                return;
            }
            // Si el personaje existe, se establecen sus datos
            // en el estado del componente.
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
            <div className='row mt-3 p-3 p-lg-0'>
                {
                    // En caso de error
                    failFetch && <HandlerError
                        errMsg={errFetchMessage} /> ||
                    // Mientras se realiza la carga de datos
                    loading && <Spinner /> ||
                    // En caso de no encontrar el personaje
                    characterNotFound && <HandlerError
                        errMsg={errCharacterMessage}
                        handlerErr={handlerErr}
                        typeAlert='warning' /> ||
                    // Una vez cargados los datos
                    character &&
                    <>
                        <Title className='col-12'>
                            {character.name}
                        </Title>
                        <ImageFrame
                            alt={character.name}
                            classNameFrame='col-12 col-sm-4 px-0 pe-sm-2'
                            classNameImg='img-thumbnail w-100'
                            frame
                            src={character.img} />
                        <ContentCharacterData character={character} />
                    </>
                }
            </div>
        </>
    );
};

export default CharacterData;