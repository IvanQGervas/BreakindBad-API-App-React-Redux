/**
 * Contenedor general para las imágenes de la aplicación
 * 
 */
// Dependencias
import React from "react";

/**
 * Contenedor general para las imágenes de la aplicación.
 * Renderiza una etiqueta img dentro de un marco (<div>) o no,
 * dependiendo de las props. Este es el utilizado para renderizar
 * todas las imágenes de la web con la idea de tener un control global.
 * 
 * @param {String} alt              Etiqueta alt de HTML que reemplaza
 *                                  la imagen en caso de no renderizarse.
 * @param {String} [classNameFrame] Clases para el marco
 * @param {String} [classNameImg]   Clases para la imagen
 * @param {Boolean} [frame]         Determina si se renderiza con marco
 * @param {String} src              Ruta de la imagen
 */
const ImageFrame = ({
    alt = '',
    classNameFrame,
    classNameImg,
    frame = false,
    src
}) => {
    return frame
        ? <div className={classNameFrame}>
            <img
                alt={alt}
                className={classNameImg}
                src={src} />
        </div>
        : <img
            alt={alt}
            className={classNameImg}
            src={src} />;
};

export default ImageFrame;