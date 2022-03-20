/**
 * Lista desordenada de navegación
 * 
 */
// Dependencias
import React from 'react';

/**
 * Lista desordenada de navegación
 * 
 * @param {Element} children        Elemento/s a renderizar
 * @param {String} [className]      Clases para la etiqueta ul
 */
 const UlNavigation = ({ children, className }) => {

    return (
        <ul className={[
            'navbar-nav',
            className
        ].join(' ').trim()}>
            {children}
        </ul>
    );
};

export default UlNavigation;