/**
 * Elemento lista de navegación
 * 
 */
// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Elemento lista de navegación
 * 
 * @param {Element} children        Elemento/s a renderizar
 * @param {String} [className]      Clases para la etiqueta li 
 * @param {String} route            Ruta de la navegación
 */
const LiNavigation = ({ children, className, route }) => {
    return (
        <li className={[
            'nav-item',
            className
        ].join(' ').trim()}>
            <Link
                className='nav-link'
                to={route}>
                {children}
            </Link>
        </li>
    );
};

export default LiNavigation;