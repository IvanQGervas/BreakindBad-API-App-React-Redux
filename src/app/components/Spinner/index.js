/**
 * Componente spinner animado
 * 
 */
// Dependencias
import React from "react";

/**
 * Spinner animado.
 * 
 * @param {string} [dimensions] Tamaño del spinner
 */
const Spinner = ({ dimensions = '80px' }) => {
    return <div
        className="spinner-border text-secondary mt-4 mx-auto"
        style={{ height: dimensions, width: dimensions }} />;
};

export default Spinner;