/**
 * Componente de paginación y componentes relacionados
 * 
 */
// Dependencias
import React, { useState, useEffect } from 'react';

// Hooks
import useLang from '../../hooks/useLang';

// Componentes
import HandlerError from './HandlerError';

/**
 * Renderiza una paginación con los elementos recibidos
 * 
 * @param {Array} elements           Elementos renderizados en la paginación
 * @param {Number} [elementsPerPage] Número máximo de elementos por página
 */
 const Pagination = ({ elements, elementsPerPage = 12 }) => {

    // Página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Elementos de la página
    const [currentElements, setCurrentElements] = useState([]);

    // Hook del idioma
    const [, {__}] = useLang();

    // Número total de páginas
    const totalPages = Math.ceil(elements.length / elementsPerPage);

    /**
     * Suma +1 al valor del estado (currentPage), renderizando
     * los elementos de la siguiente página.
     */
    const nextPage = () => {
        // Si la página actual es la última disponible, se detiene la ejecución
        if (currentPage === totalPages) { return; }
        setCurrentPage(currentPage + 1)
    };

    /**
     * Resta -1 al valor del estado (currentPage), renderizando
     * los elementos de la anterior página.
     */
    const previousPage = () => {
        // Si la página actual es la primera, se detiene la ejecución
        if (currentPage === 1) { return; }
        setCurrentPage(currentPage - 1)
    };

    // Efecto que establece en el estado (currentElements) los elementos que debe
    // renderizar el componente según la página actual y los elementos por página.
    useEffect(() => {
        if (elements && elements.length > 0) {
            const indexOfLastPost = currentPage * elementsPerPage;
            const indexOfFirstPost = indexOfLastPost - elementsPerPage;
            setCurrentElements(elements.slice(indexOfFirstPost, indexOfLastPost));
        }
    }, [currentPage, elements]);

    return (
        <>
            {currentElements && currentElements.length > 0 &&
                <>
                    {currentElements}
                    < PaginationNavBar
                        currentPage={currentPage}
                        nextPage={nextPage}
                        previousPage={previousPage}
                        setPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </> ||
                <HandlerError errMsg={__('Error en la paginación.')}/>
            }
        </>
    )
};


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
        for (let i = 1; i <= totalPages; i++) {
            elements.push(
                <ButtonPaginationBar
                    conditionToDisable={currentPage === i}
                    key={`button-number-pagination-${i}`}
                    onClick={() => setPage(i)}>
                    {i}
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


/**
 * Botón de navegación en la paginación
 * 
 * @param {Element} children              Elemento/s hijo/s
 * @param {Boolean} conditionToDisable    Condición para deshabilitar el botón
 * @param {Function} onClick              Función ejecutada por el botón
 */
const ButtonPaginationBar = ({ children, conditionToDisable, onClick }) =>
    <li className={[
        'page-item',
        conditionToDisable && 'disabled'
    ].join(' ').trim()}>
        <button
            className="page-link"
            onClick={onClick}>
            {children}
        </button>
    </li>;

export default Pagination;