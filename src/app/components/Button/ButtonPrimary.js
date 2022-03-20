// Dependencias
import React from 'react';

// Componentes
import Button from './Button';

/**
 * Botón primario
 *
 * @param {Object} props Props del componente
 */
const ButtonPrimary = (props) => {
    return (
        <Button
            {...props}
            className={[
                'btn--primary',
                props.className && props.className
            ].join(' ').trim()}
            type={props.type || 'button'}>
            {props.children}
        </Button>
    );
};

export default ButtonPrimary;