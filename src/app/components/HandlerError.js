/**
 * Componente manejador de errores
 */
// Dependencias
import React from "react";

// Hooks
import useLang from "../../hooks/useLang";

// Componentes
import { ButtonLight } from './Button'

/**
 * Manejador de errores.
 * Renderiza una alerta de error. Puede recibir una
 * función de callback asociada a un botón.
 * 
 * @param {String} [errMsg]       Mensaje de error
 * @param {Object} [handlerErr]   Objeto con una función de cb para
 *                                un botón y texto del botón.
 *                                Claves del objeto: {cbErr, textButton}.
 * @param {String} [typeAlert]    Tipo de alerta
 */
const HandlerError = ({ errMsg, handlerErr, typeAlert = 'danger' }) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    // Texto por defecto
    const errMsgDefault = __('ERR_MSG_DEFAULT', 'Vaya, parece que ha habido un error.');

    // Texto por defecto para el botón
    const errMsgButtonDefault = __('TRY_AGAIN', 'Volver a intentarlo');

    return (
        <div className="row">
            <div className={`col-8 offset-2 alert alert-${typeAlert}`}>
                <p className="text-center">{errMsg || errMsgDefault}</p>
                {handlerErr && handlerErr.cbErr &&
                    <ButtonLight
                        className="d-block mx-auto"
                        onClick={handlerErr.cbErr}>
                        {handlerErr.textButton || errMsgButtonDefault}
                    </ButtonLight>
                }
            </div>
        </div>
    );
};

export default HandlerError;