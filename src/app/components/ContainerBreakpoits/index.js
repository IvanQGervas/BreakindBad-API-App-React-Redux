/**
 * Contenedor con los breakpoints generales
 * 
 */
// Dependencias
import React from "react";

/**
 * Contenedor con los breakpoints generales.
 * Este es utilizado en los componentes situados
 * más arriba en el DOM, como componentes página,
 * para mantener una línea general en el diseño de la web. 
 * 
 * @param {Element} children    Elemento hijo
 * @param {String} [className]  Clases para el contenedor
 */
const ContainerBreakpoits = ({ children, className }) => {
    return (
        <div className={[
            'container-fluid',
            className || 'col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col'
        ].join(' ').trim()}>
            {children}
        </div>
    );
}

export default ContainerBreakpoits;