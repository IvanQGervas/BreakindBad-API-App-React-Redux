/**
 * Componente título de página
 * 
 */
// Dependencias
import React from "react";

/**
 * Título de la página
 * 
 * @param {String} [className]  Clase para el título
 * @param {String} children     Elemento renderizado dentro de la etiqueta
 * @param {String} [Tag]        Etiqueta HTML del título
 * @param {Boolean} [separator] Indica si se renderiza o no
 *                              la línea de separación.
 */
const TitlePage = ({ className, children, Tag = 'h1', separator = true }) => {
    return (
        <>
            <Tag className={className}>{children}</Tag>
            {separator && <hr />}
        </>
    );
};

export default TitlePage;