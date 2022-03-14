/**
 * Componente página de inicio
 */
// Dependencias
import React from "react";

// Componentes
import Banner from "../components/Banner";
import Characteres from "../components/Characteres";
import ContainerBreakpoits from "../containers/ContainerBreakpoits";

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
                classNameContainer="p-4 p-md-5 mb-4 mt-lg-3 text-white bg-banner-home"
                secondaryText={__('HOME_BANNER',
                    'Toda la información de tus personajes favoritos de la mítica serie Breaking Bad.')}
                title="Breaking Bad App" />
            <Characteres />
        </ContainerBreakpoits>
    );
}

export default HomePage;