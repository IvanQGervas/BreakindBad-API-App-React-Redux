/**
 * Rutas de acceso finales a los servicios
 */

// Constantes
// URL base de la API de Breaking Bad
const API_BREAKINGBAD = 'https://www.breakingbadapi.com/api';

// ENDPOINTS
const endPoints = {
    // API BreakingBad
    breakingBadApi: {
        // Todos los personajes
        getAllCharacters: `${API_BREAKINGBAD}/characters`,
        // Frases de un personaje por su nombre
        getQuotesFromCharacterName:
            (name) => `${API_BREAKINGBAD}/quote?author=${name}`
    }
};

export default endPoints;