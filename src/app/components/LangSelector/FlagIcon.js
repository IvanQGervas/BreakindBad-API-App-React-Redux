/**
 * Renderiza un icono con una bandera
 * 
 */
// Dependencias
import React from "react";

// Componentes
import ImageFrame from "../ImageFrame";

// Constantes
import langFlag from "../../../constants/langFlag";

/**
 * Renderiza un icono con una bandera
 * La bandera renderizada depende del código de idioma recibido.
 * 
 * @param {String} [className]  Clases para la imagen
 * @param {String} langCode     Código del idioma
 * @param {String} [onClick]    Función ejecutada al hacer
 *                              click en la imagen.
 */
const FlagIcon = ({ className, langCode, onClick }) =>
    langFlag[langCode]
        ? <ImageFrame
            alt={`${langCode} flag`}
            className={[
                className && className
            ].join(' ').trim()}
            onClick={onClick}
            src={langFlag[langCode]} />
        : null;

export default FlagIcon;