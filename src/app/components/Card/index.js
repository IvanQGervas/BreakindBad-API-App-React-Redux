/**
 * Componente card
 * 
 */
// Dependencias
import React from "react";
import { Link } from "react-router-dom";

// Hooks
import useLang from "../../../hooks/useLang";

// Componentes
import ImageFrame from "../ImageFrame";

/**
 * Componente card.
 * Puede renderizar una imagen, título, texto secundario
 * y una ruta de navegación asignada a un botón.
 * En función de los datos recibidos.
 * 
 * @param {String} [className]      Clases para el contenedor del componente
 * @param {String} [img]            Ruta de la imagen renderizada
 * @param {String} [navigationUrl]  Ruta de navegación para el botón
 * @param {String} [title]          Título de la card
 * @param {String} [secondaryText]  Texto secundario de la card
 */
const Card = ({ className, img, navigationUrl, title, secondaryText }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <div className={className}>
            <div className="border h-100">
                {img &&
                    <ImageFrame
                        alt={title && `img-${title}`}
                        classNameImg="card-img-top character-img-card"
                        src={img} />
                }
                {(title || secondaryText) &&
                    <div className="card-body">
                        {title &&
                            <h5 className="card-title">{title}</h5>
                        }
                        {secondaryText &&
                            <p className="card-text"><em>{secondaryText}</em></p>
                        }
                        {navigationUrl &&
                            <Link
                                className="btn btn-dark"
                                to={navigationUrl}>
                                {__('SHOW_MORE', 'Ver más')}
                            </Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Card;