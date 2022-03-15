/**
 * Componente banner
 * 
 */
// Dependencias
import React from "react";

/**
 * Banner
 * 
 * @param {String} [classNameContainer] Clases para el contenedor del banner
 * @param {String} [secondaryText]      Texto secundario
 * @param {String} [title]              Título del banner
 */
const Banner = ({ classNameContainer, secondaryText, title }) => {
    return (
        <div className={[
            'row',
            classNameContainer && classNameContainer
        ].join(' ').trim()}>
            <div className="col-sm-7">
                <h1 className="display-4 fst-italic">
                    {title}
                </h1>
                {secondaryText &&
                    <p className="lead my-3">
                        {secondaryText}
                    </p>
                }
            </div>
        </div>
    );
}

export default Banner;