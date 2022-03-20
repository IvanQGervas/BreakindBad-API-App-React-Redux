/**
 * Barra de navegación de la paginación
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import ButtonPaginationBar from './ButtonPaginationBar';

// Hooks
import useLang from '../../../hooks/useLang';

/**
 * Barra de navegación de la paginación
 * 
 * @param {Number} currentPage      Página actual
 * @param {Function} nextPage       Renderiza la siguiente página
 * @param {Function} previousPage   Renderiza la página anterior
 * @param {Function} setPage        Renderiza una página específica
 * @param {Number} totalPages       Número total de páginas
 */
const PaginationNavBar = ({
    currentPage,
    nextPage,
    previousPage,
    setPage,
    totalPages
}) => {

    // Hook del idioma
    const [, { __ }] = useLang();

    /**
     * Renderiza un botón con el número de cada página disponible
     */
    const renderNumbersOfPages = () => {
        const elements = [];
        for (let index = 1; index <= totalPages; index++) {
            elements.push(
                <ButtonPaginationBar
                    conditionToDisable={currentPage === index}
                    key={`button-number-pagination-${index}`}
                    onClick={() => setPage(index)}>
                    {index}
                </ButtonPaginationBar>
            );

        }
        return elements;
    };

    return (
        <nav>
            <ul className="pagination justify-content-center mt-1">
                <ButtonPaginationBar
                    conditionToDisable={currentPage === 1}
                    onClick={previousPage}>
                    {__('PREVIOUS', 'Anterior')}
                </ButtonPaginationBar>
                {renderNumbersOfPages()}
                <ButtonPaginationBar
                    conditionToDisable={currentPage === totalPages}
                    onClick={nextPage}>
                    {__('NEXT', 'Siguiente')}
                </ButtonPaginationBar>
            </ul>
        </nav >
    );
};

export default PaginationNavBar;