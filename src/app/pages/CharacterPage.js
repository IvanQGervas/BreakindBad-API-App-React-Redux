/**
 * Componente página de personaje
 */
// Dependencias
import React, { useState } from "react";

// Componentes
import CharacterData from '../components/CharacterData';
import CharacterQuotes from '../components/CharacterQuotes';
import ContainerBreakpoits from "../containers/ContainerBreakpoits";

/**
 * Componente página de personaje
 */
const CharacterPage = () => {

    // Estado con el nombre del personaje renderizado
    const [nameRenderedCharacter, setNameRenderedCharacter] = useState();

    return (
        <ContainerBreakpoits>
            <CharacterData setNameRenderedCharacter={setNameRenderedCharacter} />
            {nameRenderedCharacter &&
                <CharacterQuotes characterName={nameRenderedCharacter} />
            }
        </ContainerBreakpoits>
    );
};

export default CharacterPage;