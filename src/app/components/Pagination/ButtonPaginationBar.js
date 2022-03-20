/**
 * Botón de navegación en la paginación
 * 
 */
// Dependencias
import React from 'react';

/**
 * Botón de navegación en la paginación
 * 
 * @param {Element} children              Elemento/s hijo/s
 * @param {Boolean} conditionToDisable    Condición para deshabilitar el botón
 * @param {Function} onClick              Función ejecutada por el botón
 */
const ButtonPaginationBar = ({ children, conditionToDisable, onClick }) =>
    <li className={[
        'page-item',
        conditionToDisable && 'disabled'
    ].join(' ').trim()}>
        <button
            className="page-link"
            onClick={onClick}>
            {children}
        </button>
    </li>;

export default ButtonPaginationBar;