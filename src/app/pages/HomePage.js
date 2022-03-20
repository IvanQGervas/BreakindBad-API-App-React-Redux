/**
 * Componente página de inicio
 */
// Dependencias
import React from "react";

// Componentes
import Banner from "../components/Banner/index";
import Characteres from "../components/Characteres";
import ContainerBreakpoits from "../components/ContainerBreakpoits";
import Title from "../components/Title";

// Hooks
import useLang from "../../hooks/useLang";

/**
 * Componente página de inicio
 */
const HomePage = () => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <ContainerBreakpoits>
            <Banner
                classNameContainer="p-4 p-md-5 mb-3 mt-lg-3 text-white bg-banner-home"
                secondaryText={__('HOME_BANNER',
                    'Toda la información de tus personajes favoritos de la mítica serie Breaking Bad.')}
                title="Breaking Bad App" />
            <Title>
                {__('TITLE_PAGE_HOME', 'Personajes')}
            </Title>
            <Characteres />
        </ContainerBreakpoits>
    );
}

export default HomePage;