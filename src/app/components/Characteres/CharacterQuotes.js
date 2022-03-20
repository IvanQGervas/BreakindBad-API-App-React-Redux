/**
 * Componente que renderiza frases célebres del personaje
 * 
 */
// Dependencias
import React, { useEffect } from "react";

// Hooks
import useBreakingBadCharacterQuotes from "../../../hooks/useBreakingBadCharacterQuotes";
import useLang from "../../../hooks/useLang";

// Componentes
import { ButtonDark } from "../Button";
import Quote from "../Quote";
import Spinner from "../Spinner";
import Title from "../Title";

/**
 * Componente que renderiza frases célebres del personaje.
 * Renderiza de una en una y permite realizar cargas de
 * otras frases de forma aleatoria.
 * 
 * @param {Object} characterName    Nombre del personaje 
 */
const CharacterQuotes = ({ characterName }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    // Hook de las frases de un personaje de Breaking Bad
    const [
        { data, failFetch, loading },
        { clearData, fetchData }
    ] = useBreakingBadCharacterQuotes();

    /**
     * Limpia los datos del estado breakingBadCharacterQuotes del store y realiza
     * una nueva carga de datos con una frase aleatoria del personaje.
     */
    const chargeRandomQuote = () => {
        clearData();
        fetchData(characterName);
    };

    /**
     * Solo se notifica error de la carga de datos por consola.
     * Se hace para no llenar la pantalla con errores, ya que  
     * si este componente se ha intentado renderizar significa que
     * los detalles del personaje si se han renderizado correctamente.
     */
    if (failFetch) {
        console.error('Error al realizar la carga de frases célebres');
    }

    // Efecto que realiza la carga de datos en el store de una frase aleatoria del 
    // personaje recibido por props en la primera carga del componente.
    useEffect(() => {
        clearData();
        fetchData(characterName);
    }, []);

    return (
        <div className="row">
            {
                // En caso de error
                failFetch && null ||
                // Mientras se realiza la carga de datos
                loading && <Spinner /> ||
                // Una vez cargados los datos
                data && data.quote &&
                <div className="col-12 col-sm-10 offset-sm-1 mt-3 mb-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <Title className='d-inline' Tag='h3' separator={false}>
                            {__('FAMOUS_QUOTE', 'Frase celebre')}
                        </Title>
                        <ButtonDark onClick={chargeRandomQuote}>
                            {__('RANDOM_QUOTE', 'Frase aleatoria')}
                        </ButtonDark>
                    </div>
                    <Quote
                        author={data.author}
                        className='mt-2' >
                        {data.quote}
                    </Quote>
                </div> || null
            }
        </div>
    );
}

export default CharacterQuotes;