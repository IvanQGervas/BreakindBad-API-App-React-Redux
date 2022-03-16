/**
 * Componente página de inicio
 */
// Dependencias
import React from "react";

// Componentes
import Banner from "../components/Banner";
import Characteres from "../components/Characteres";
import ContainerBreakpoits from "../containers/ContainerBreakpoits";
import TitlePage from "../components/TitlePage";

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
            <TitlePage title={__('TITLE_PAGE_HOME', 'Personajes')}/>
            <Characteres />
        </ContainerBreakpoits>
    );
}

export default HomePage;