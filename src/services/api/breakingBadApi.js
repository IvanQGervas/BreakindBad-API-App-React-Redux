/**
 * Servicio API Breaking Bad
 *
 */

// Peticiones Http y API End Points
import { EndPoints, Http } from '../index';

/**
 * Obtiene el listado de todos los personajes
 */
export function getAllCharacters() {
    return Http.get(EndPoints.breakingBadApi.getAllCharacters)
        .then(res => res.json());
}