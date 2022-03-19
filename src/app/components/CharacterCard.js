/**
 * Componente card con datos de un personaje
 * 
 */
// Dependencias
import React from "react";
import { Link } from "react-router-dom";

// Hooks
import useLang from "../../hooks/useLang";

// Componentes
import ImageFrame from "../containers/ImageFrame";

/**
 * Componente card los datos de un personaje.
 * Renderiza los datos mínimos para identificar un personaje,
 * y redirige a una vista del personaje con más datos sobre él.
 * 
 * @param {Object} character    Datos del personaje 
 */
const CharacterCard = ({ character }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    // Datos del personaje utilizados
    const { img, name, nickname } = character;

    return (
        <div className="p-3 p-md-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="border h-100">
                {img &&
                    <ImageFrame
                        alt={name && `img-${name}`}
                        classNameImg="card-img-top character-img-card"
                        src={img} />
                }
                {(name || nickname) &&
                    <div className="card-body">
                        {name &&
                            <h5 className="card-title">{name}</h5>
                        }
                        {nickname &&
                            <p className="card-text"><em>{nickname}</em></p>
                        }
                        <Link
                            className="btn btn-dark"
                            to={`/character/${name}`}>
                            {__('SHOW_MORE', 'Ver más')}
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default CharacterCard;