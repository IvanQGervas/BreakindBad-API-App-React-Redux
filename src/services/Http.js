/**
 *  Tipos de peticiones Http usadas en la aplicación
 *
 */


/**
 * Realiza una solicitud GET Http con encabezado
 * @param {String} url
 */
export function get(url) {
    return fetch(url, {
        method: 'GET',
    });
}