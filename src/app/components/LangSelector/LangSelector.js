/**
 * Componente selector que permite cambiar el idioma de la aplicación
 * 
 */
// Dependencias
import React, { useState } from "react";

// Componentes
import DropdownLangOptions from "./DropdownLangOptions";
import FlagIcon from './FlagIcon'
import ImageFrame from "../ImageFrame";

// Utilidades
import arrowDown from '../../assets/svg/arrow-down.svg'

// Hooks
import useLang from "../../../hooks/useLang";

/**
 * Selector que permite cambiar el idioma de la aplicación.
 * Muestra una bandera del idioma establecido, y renderiza
 * un desplegable con todas las opciones disponibles.
 */
const LangSelector = () => {

    // Estado que establece el renderizado del desplegable con
    // los idiomas disponibles para seleccionar.
    const [displayDropdown, setDisplayDropdown] = useState(false);

    // Hook del idioma
    const [
        // Idioma actual del estado de la store
        { lang: currentLang },
        // Función para cambiar el idioma de la store
        { changeLanguage }
    ] = useLang();

    /**
     * Establece en el estado (displayDropdown) el valor
     * booelano contrario al que ya tenga.
     */
    const handlerDisplayDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    };

    return (
        <div className="language-selector" onClick={handlerDisplayDropdown}>
            <FlagIcon langCode={currentLang} />
            <ImageFrame alt={'arrow-dropdown'} src={arrowDown} />
            {displayDropdown &&
                <DropdownLangOptions
                    changeLanguage={changeLanguage}
                    handlerDisplay={handlerDisplayDropdown} />
            }
        </div>
    );
};

export default LangSelector;