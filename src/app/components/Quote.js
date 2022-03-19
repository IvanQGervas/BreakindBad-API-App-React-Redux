/**
 * Renderiza una frase y el nombre de su autor
 * 
 */
// Dependencias
import React from "react";

/**
 * Renderiza una frase y el nombre de su autor
 * 
 * @param {String} [author]     Nombre del autor
 * @param {String} children     Elemento o frase a renderizar
 * @param {String} [className]  Clases para el contenedor
 *                              del componente.
 */
const Quote = ({ author, children, className }) => {
    return author && (
        <div className={[
            'd-block bg-light border rounded',
            className && className
        ].join(' ').trim()}>
            <p className="text-center display-6 p-3 pb-0">"{children}"</p>
            {author &&
                <span className="d-block fst-italic text-end fs-5 pb-3 pe-5">
                    - {author}
                </span>
            }
        </div>
    ) || null;
};

export default Quote;