/**
 * Componente con los datos del personaje.
 * Imagen, actor o actriz, ocupación ...
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
import ImageFrame from "../containers/ImageFrame";
import Spinner from './Spinner';
import TitlePage from "./TitlePage";

// Constantes
import routes from '../../constants/routes';

/**
 * Componente con los datos del personaje.
 * Se recogen los datos del personaje del store. En caso
 * de no haber establecidos datos, se ejecuta la carga de 
 * datos de todos los personajes. Y en caso de no existir
 * el personaje se indica con un mensaje de alerta.
 * 
 * @param {Function} setNameRenderedCharacter   Establece en el componente padre
 *                                              el nombre del personaje renderizado.
 */
const CharacterData = ({ setNameRenderedCharacter }) => {

    // Nombre del personaje, recibido en los parámetros de la url
    const { charName } = useParams();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Hook de los personajes de Breaking Bad
    const [
        { byName, data, failFetch, loading },
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
     * Establece en el estado del componente los
     * datos del personaje.
     */
    useEffect(() => {
        /**
         * En caso de no haber datos de los personajes en el store,
         * se limpian los posibles errores del estado
         * breakingBadCharacters y se ejecuta la carga de datos.
         */
        if (!data || !byName) {
            clearData();
            fetchData();
            return;
        }
        /**
         * En caso de encontrar los datos del personaje, se establecen 
         * en el estado del componente.
         */
        if (charName && byName[charName]) {
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
        // Si los datos están establecidos
        if (!failFetch && data && byName) {
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
                        <TitlePage className='col-12'>
                            {character.name}
                        </TitlePage>
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

/**
 * Componente que renderiza los datos disponibles del personaje
 * 
 * @param {Object} character    Datos del personaje 
 */
const ContentCharacterData = ({ character }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <div className="col-12 col-sm-8 col-lg-7 offset-lg-1 mt-2">
            <div className="row">
                {character.name &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('NAME', 'Nombre')}
                        data={character.name}
                    />
                }
                {character.birthday &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('BIRTHDAY', 'Cumpleaños')}
                        data={character.birthday}
                    />
                }
                {character.nickname &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('NICKNAME', 'Alias')}
                        data={character.nickname}
                    />
                }
                {character.category &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('CATEGORY', 'Categoria')}
                        data={character.category}
                    />
                }
                {character.portrayed &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('PORTRAYED', 'Protagonizado por')}
                        data={character.portrayed}
                    />
                }
                {character.status &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('STATUS', 'Estado')}
                        data={character.status}
                    />
                }
                {character.occupation &&
                    <ElementContentData
                        className='col-12'
                        typeData={__('OCCUPATION', 'Ocupación')}
                        data={character.occupation.join(', ')}
                    />
                }
            </div>
        </div>
    );
};

/**
 * Renderiza un tipo de dato y su valor
 * 
 * @param {String} [className]  Clases para el contenedor del componente
 * @param {String} data         Valor del dato
 * @param {String} typeData     Tipo de dato
 */
const ElementContentData = ({ className, data, typeData }) => {
    return data && typeData && (
        <div className={[
            'py-2 d-flex flex-column',
            className && className
        ].join(' ').trim()}>
            <p className="fs-5 fw-bold m-0">{typeData}</p>
            <span className="fs-4 fw-light">{data}</span>
        </div>
    ) || null;
};

export default CharacterData;