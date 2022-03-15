/**
 * Contenedor que representa la etiqueta <main> (contenido principal).
 * Este tiene el routing y es donde se renderizan las diferentes páginas.
 */
// Dependencias
import React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes
import CharacterPage from '../pages/CharacterPage'
import HomePage from '../pages/HomePage'

// Constantes
import routes from "../../constants/routes";

/**
 * Contenedor del contenido principal
 */
const MainAndRoutingContainer = () => {
    return (
        <Routes>
            <Route path={routes.HomePage} element={<HomePage />} />
            <Route path={routes.CharacterPage} element={<CharacterPage />} />
            {/* TODO: Pagina 404 */}
        </Routes>
    );
}

export default MainAndRoutingContainer;