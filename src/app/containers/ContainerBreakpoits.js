/**
 * Contenedor por los breakpoints generales del diseño
 * 
 */
// Dependencias
import React from "react";

/**
 * Contenedor por los breakpoints generales del diseño
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