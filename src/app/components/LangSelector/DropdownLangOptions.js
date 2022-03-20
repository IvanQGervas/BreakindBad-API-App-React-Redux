/**
 * Desplegable con los idiomas disponibles
 * 
 */
// Dependencias
import React, { useEffect, useRef } from "react";

// Componentes
import DropdownLangOption from './DropdownLangOption'

// Constantes
import lang, { nameOfTheLanguage } from "../../../constants/lang";

/**
 * Desplegable con los idiomas disponibles
 * 
 * @param {Function} changeLanguage Función para cambiar el idioma
 *                                  establecido en el store.
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

export default DropdownLangOptions;