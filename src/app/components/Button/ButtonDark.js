// Dependencias
import React from 'react';

// Componentes
import Button from './Button';

/**
 * Botón dark
 *
 * @param {Object} props Props del componente
 */
const ButtonDark = (props) => {
    return (
        <Button
            {...props}
            className={[
                'btn-dark',
                props.className && props.className
            ].join(' ').trim()}
            type={props.type || 'button'}>
            {props.children}
        </Button>
    );
};

export default ButtonDark;