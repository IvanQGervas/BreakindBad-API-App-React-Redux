/**
 * Componente con las rutas disponibles de la web
 * 
 */
// Dependencias
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Componentes
import CharacterPage from '../../pages/CharacterPage'
import HomePage from '../../pages/HomePage'

// Constantes
import routes from "../../../constants/routes";

/**
 * Componente con las rutas disponibles de la web.
 * Renderiza los componentes página según la URL.
 */
const MainAndRoutingContainer = () => {
    return (
        <Routes>
            {/* Página de inicio */}
            <Route path={routes.HomePage} element={<HomePage />} />
            {/* Datos de un personaje */}
            <Route path={routes.CharacterPage} element={<CharacterPage />} />
            {/* Datos de un personaje aleatorio */}
            <Route path={routes.RandomCharacterPage} element={<CharacterPage />} />
            {/* Si no es una ruta establecida */}
            <Route path='*' element={<Navigate to={routes.HomePage} replace />} />
        </Routes>
    );
}

export default MainAndRoutingContainer;