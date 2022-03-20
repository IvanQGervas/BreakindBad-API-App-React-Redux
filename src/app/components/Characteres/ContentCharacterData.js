/**
 * Componente que renderiza los datos disponibles de un personaje
 * 
 */
// Dependencias
import React from "react";

// Componentes
import ElementContentData from './ElementContentData'

// Hooks
import useLang from "../../../hooks/useLang";

/**
 * Componente que renderiza los datos disponibles del personaje
 * 
 * @param {Object} character    Datos del personaje 
 */
const ContentCharacterData = ({ character }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <div className="col-12 col-sm-8 col-lg-7 offset-lg-1 mt-2">
            <div className="row">
                {character.name &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('NAME', 'Nombre')}
                        data={character.name}
                    />
                }
                {character.birthday &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('BIRTHDAY', 'Cumpleaños')}
                        data={character.birthday}
                    />
                }
                {character.nickname &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('NICKNAME', 'Alias')}
                        data={character.nickname}
                    />
                }
                {character.category &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('CATEGORY', 'Categoria')}
                        data={character.category}
                    />
                }
                {character.portrayed &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('PORTRAYED', 'Protagonizado por')}
                        data={character.portrayed}
                    />
                }
                {character.status &&
                    <ElementContentData
                        className='col-6 border-bottom'
                        typeData={__('STATUS', 'Estado')}
                        data={character.status}
                    />
                }
                {character.occupation &&
                    <ElementContentData
                        className='col-12'
                        typeData={__('OCCUPATION', 'Ocupación')}
                        data={character.occupation.join(', ')}
                    />
                }
            </div>
        </div>
    );
};

export default ContentCharacterData;