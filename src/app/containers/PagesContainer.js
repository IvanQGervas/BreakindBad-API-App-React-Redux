/**
 * Contenedor con todas las paginas, renderizas con react-router-dom
 * 
 */
// Dependencias
import React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes
import HomePage from '../pages/HomePage'
import CharacterPage from '../pages/CharacterPage'

// Constantes
import routes from "../../constants/routes";

/**
 * Contenedor con todas las paginas
 */
const PagesContiner = () => {
    return(
        <Routes>
            <Route path={routes.HomePage} element={<HomePage />}/>
            <Route path={routes.CharacterPage} element={<CharacterPage />}/>
            {/* TODO: Pagina 404 */}
        </Routes>
    );
}

export default PagesContiner;