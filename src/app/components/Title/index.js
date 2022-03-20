/**
 * Componente título
 * 
 */
// Dependencias
import React from "react";

/**
 * Componente título.
 * Renderiza un título con una línea separadora debajo de él,
 * según las props recibidas.
 * Por defecto su etiqueta es <h1>.
 * 
 * @param {String} [className]  Clase para el título
 * @param {String} children     Elemento renderizado dentro de la etiqueta
 * @param {String} [Tag]        Etiqueta HTML del título
 * @param {Boolean} [separator] Indica si se renderiza o no
 *                              la línea de separación.
 */
const Title = ({ className, children, Tag = 'h1', separator = true }) => {
    return (
        <>
            <Tag className={className}>{children}</Tag>
            {separator && <hr />}
        </>
    );
};

export default Title;