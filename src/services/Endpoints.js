/**
 * Rutas de acceso finales a los servicios
 */

// Constantes
// URL Base de la API de Breaking Bad
const API_BREAKINGBAD = 'https://www.breakingbadapi.com/api';

// ENDPOINTS
const endPoints = {
    // API BreakingBad
    breakingBadApi: {
        // Todos los personajes
        getAllCharacters: `${API_BREAKINGBAD}/characters`
    }
};

export default endPoints;