// TODO: Convertir todos los img con svg en un componente
/**
 * Componente selector desplegable para cambiar de idioma
 * 
 */
// Dependencias
import React, { useEffect, useRef, useState } from "react";

// Constantes
import lang, { nameOfTheLanguage } from "../../constants/lang";
import langFlag from "../../constants/langFlag";

// Utilidades
import arrowDown from '../utils/svg/arrow-down.svg'

// Hooks
import useLang from "../../hooks/useLang";

/**
 * Selector desplegable para cambiar de idioma
 */
const DropdownLangSelector = () => {

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
            <img alt={'arrow-dropdown'} src={arrowDown} />
            {displayDropdown &&
                <DropdownLangOptions
                    changeLanguage={changeLanguage}
                    handlerDisplay={handlerDisplayDropdown} />
            }
        </div>
    );
};


/**
 * Contenedor con los idiomas disponibles (desplegable)
 * 
 * @param {Function} changeLanguage Función para cambiar el idioma
 *                                  utilizado en el store.
 * @param {Function} handlerDisplay Manejador del renderizado
 *                                  de este mismo componente.
 */
const DropdownLangOptions = ({ changeLanguage, handlerDisplay }) => {

    // Referencia del contendor principal del componente
    const dropdownOptionsRef = useRef();

    /**
     * Renderiza todos los idiomas disponibles
     */
    const renderOptions = () => {
        return lang && Object.keys(lang).map((langCode, index) => {
            if (lang[langCode] && nameOfTheLanguage[langCode]) {
                return <DropdownLangOption
                    changeLanguage={changeLanguage}
                    langCode={langCode}
                    key={`${langCode}-${index}`} />;
            }
        });
    };

    // Efecto que oculta el componente al hacer click fuera de él
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (
                dropdownOptionsRef.current &&
                dropdownOptionsRef.current.contains &&
                !dropdownOptionsRef.current.contains(event.target)
            ) {
                handlerDisplay(false);
            }
        });
    });

    return (
        <div className="language-selector--options" ref={dropdownOptionsRef}>
            {renderOptions()}
        </div>
    );
};


/**
 * Opción con un idioma para el desplegable.
 * Renderiza la bandera del idioma y su nombre.
 * 
 * @param {Function} changeLanguage Función para cambiar el idioma
 *                                  utilizado en el store.
 * @param {String} langCode         Código del idioma
 */
const DropdownLangOption = ({ changeLanguage, langCode }) => {
    return (
        <div onClick={() => changeLanguage(lang[langCode])}>
            <FlagIcon langCode={lang[langCode]} />
            <span>{nameOfTheLanguage[langCode].toUpperCase()}</span>
        </div>
    );
};


/**
 * Renderiza la imagen de la bandera correspondiente
 * al código de idioma recibido.
 * 
 * @param {String} [className]  Clases para la imagen
 * @param {String} langCode     Código del idioma
 * @param {String} [onClick]    Función ejecutada al hacer
 *                              click en la imagen.
 */
const FlagIcon = ({ className, langCode, onClick }) =>
    langFlag[langCode]
        ? <img
            alt={`${langCode} flag`}
            className={[
                className && className
            ].join(' ').trim()}
            onClick={onClick}
            src={langFlag[langCode]} />
        : null;

export default DropdownLangSelector;