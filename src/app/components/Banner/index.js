/**
 * Componente banner
 * 
 */
// Dependencias
import React from 'react';

/**
 * Banner.
 * Renderiza un banner que puede recibir clases, título y texto secundario
 * 
 * @param {String} [classNameContainer] Clases para el contenedor
 *                                      del componente.
 * @param {String} [secondaryText]      Texto secundario
 * @param {String} [title]              Título del banner
 */
const Banner = ({ classNameContainer, secondaryText, title }) => {
    return (
        <div className={[
            'row',
            classNameContainer && classNameContainer
        ].join(' ').trim()}>
            {(title || secondaryText) &&
                <div className="col-sm-7">
                    {title &&
                        <h1 className="display-4 fst-italic">
                            {title}
                        </h1>
                    }
                    {secondaryText &&
                        <p className="lead my-3">
                            {secondaryText}
                        </p>
                    }
                </div>
            }
        </div>
    );
};

export default Banner;