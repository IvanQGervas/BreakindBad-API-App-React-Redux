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
 * @param {String} [Tag]        Etiqueta HTML del título
 * @param {String} title        Texto del título
 * @param {Boolean} [separator] Indica si se renderiza o no
 *                              la línea de separación.
 */
const TitlePage = ({ className, Tag = 'h1', title, separator = true }) => {
    return (
        <>
            <Tag className={className}>{title}</Tag>
            {separator && <hr />}
        </>
    );
};

export default TitlePage;