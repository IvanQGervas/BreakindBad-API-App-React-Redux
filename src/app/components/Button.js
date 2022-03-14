/**
 * Botones
 *
 */
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
            type={(props.submit || props.type === '"submit') ? 'submit' : props.type}
            className={[
                'btn',
                props.className && props.className
            ].join(' ').trim()}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};


/**
 * Botón primario
 *
 * @param {Object} props Props del componente
 */
const ButtonPrimary = (props) => {
    return (
        <Button type="button"
            className={[
                'btn btn--primary',
                props.className && props.className
            ].join(' ').trim()}
            {...props}>
            {props.children}
        </Button>
    );
};


/**
 * Botón light
 *
 * @param {Object} props Props del componente
 */
const ButtonLight = (props) => {
    return (
        <Button type="button"
            className={[
                'btn btn-light',
                props.className && props.className
            ].join(' ').trim()}
            {...props}>
            {props.children}
        </Button>
    );
};


/**
 * Botón dark
 *
 * @param {Object} props Props del componente
 */
const ButtonDark = (props) => {
    return (
        <Button type="button"
            className={[
                'btn btn-dark',
                props.className && props.className
            ].join(' ').trim()}
            {...props}>
            {props.children}
        </Button>
    );
};

export {
    Button,
    ButtonDark,
    ButtonLight,
    ButtonPrimary
};

export default Button;