// Dependencias
import React from 'react';

/**
 * Botón común
 *
 * @param {Object} props Props del componente
 */
 const Button = (props) => {
    return (
        <button
            {...props}
            className={[
                'btn',
                props.className && props.className
            ].join(' ').trim()}
            onClick={props.onClick}
            type={props.type}>
            {props.children}
        </button>
    );
};

export default Button;