/**
 * Componente que renderiza un tipo de dato y su valor
 * 
 */
// Dependencias
import React from "react";

/**
 * Renderiza un tipo de dato y su valor
 * 
 * @param {String} [className]  Clases para el contenedor del componente
 * @param {String} data         Valor del dato
 * @param {String} typeData     Tipo de dato
 */
const ElementContentData = ({ className, data, typeData }) => {
    return data && typeData && (
        <div className={[
            'py-2 d-flex flex-column',
            className && className
        ].join(' ').trim()}>
            <p className="fs-5 fw-bold m-0">{typeData}</p>
            <span className="fs-4 fw-light">{data}</span>
        </div>
    ) || null;
};

export default ElementContentData;