/**
 * Opción del selector de idiomas
 * 
 */
// Dependencias
import React from "react";

// Componentes
import FlagIcon from "./FlagIcon";

// Constantes
import lang, { nameOfTheLanguage } from "../../../constants/lang";


/**
 * Opción del selector de idiomas.
 * Renderiza la bandera de un idioma y su nombre
 * con el código del idioma.
 * Al hacer click sobre él establece el idioma en el
 * store de la aplicación.
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

export default DropdownLangOption;