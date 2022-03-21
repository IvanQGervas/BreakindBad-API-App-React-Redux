/**
 * Componente página de personaje
 */
// Dependencias
import React, { useState } from 'react';

// Componentes
import { CharacterData } from '../components/Characters';
import { CharacterQuotes } from '../components/Characters';
import ContainerBreakpoints from '../components/ContainerBreakpoints';

/**
 * Componente página de personaje.
 * Esta página renderiza todos los datos disponibles
 * acerca de un personaje en específico.
 * También, en caso de existir, renderiza frases
 * célebres del personaje.
 */
const CharacterPage = () => {

    // Estado con el nombre del personaje renderizado
    const [nameRenderedCharacter, setNameRenderedCharacter] = useState();

    return (
        <ContainerBreakpoints>
            <CharacterData setNameRenderedCharacter={setNameRenderedCharacter} />
            {nameRenderedCharacter &&
                <CharacterQuotes characterName={nameRenderedCharacter} />
            }
        </ContainerBreakpoints>
    );
};

export default CharacterPage;