/**
 * Componente página de personaje
 */
// Dependencias
import React, { useState } from "react";

// Componentes
import CharacterDetails from '../components/CharacterDetails';
import ContainerBreakpoits from "../containers/ContainerBreakpoits";
import TitlePage from "../components/TitlePage";

/**
 * Componente página de personaje
 */
const CharacterPage = () => {

    // Estado con el título de la página
    const [titlePage, setTitlePage] = useState();

    return (
        <ContainerBreakpoits>
            {titlePage &&
                <TitlePage title={titlePage} />
            }
            <CharacterDetails setTitlePage={setTitlePage} />
        </ContainerBreakpoits>
    );
}

export default CharacterPage;