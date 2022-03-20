/**
 * Servicio API Breaking Bad
 *
 */

// Peticiones Http y end points
import { EndPoints, Http } from '../index';

/**
 * Obtiene el listado de todos los personajes
 * 
 * @return  Retorna la respuesta de la petición 
 */
export function getAllCharacters() {
    return Http.get(EndPoints.breakingBadApi.getAllCharacters)
        .then(res => res.json());
}

/**
 * Obtiene las frases de un personaje por su nombre
 * 
 * @param {String} name Nombre del personaje
 * @return  Retorna la respuesta de la petición 
 */
export function getRandomQuoteWithCharacterName(charName) {
    return Http.get(
        EndPoints.breakingBadApi.getRandomQuoteWithCharacterName(charName)
    )
        .then(res => res.json());
}