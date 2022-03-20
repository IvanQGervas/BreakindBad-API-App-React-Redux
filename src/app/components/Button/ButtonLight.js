// Dependencias
import React from 'react';

// Componentes
import Button from './Button';

/**
 * Botón light
 *
 * @param {Object} props Props del componente
 */
const ButtonLight = (props) => {
    return (
        <Button
            {...props}
            className={[
                'btn-light',
                props.className && props.className
            ].join(' ').trim()}
            type={props.type || 'button'}>
            {props.children}
        </Button>
    );
};

export default ButtonLight;