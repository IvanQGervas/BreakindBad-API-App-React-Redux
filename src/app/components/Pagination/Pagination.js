/**
 * Componente de paginación
 * 
 */
// Dependencias
import React, { useState, useEffect } from 'react';

// Componentes
import HandlerError from '../HandlerError';
import PaginationNavBar from './PaginationNavBar';

// Hooks
import useLang from '../../../hooks/useLang';

/**
 * Renderiza una paginación con los elementos recibidos
 * 
 * @param {Array} elements           Elementos renderizados en la paginación
 * @param {Number} [elementsPerPage] Número máximo de elementos por página
 */
const Pagination = ({ elements, elementsPerPage = 12 }) => {

    // Página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Elementos de la página actual
    const [currentElements, setCurrentElements] = useState();

    // Hook del idioma
    const [, { __ }] = useLang();

    // Número total de páginas
    const totalPages = Math.ceil(elements.length / elementsPerPage);

    /**
     * Suma 1 al valor del estado (currentPage), renderizando
     * los elementos de la siguiente página.
     */
    const nextPage = () => {
        // Si la página actual es la última disponible, se detiene la ejecución
        if (currentPage === totalPages) { return; }
        setCurrentPage(currentPage + 1)
    };

    /**
     * Resta 1 al valor del estado (currentPage), renderizando
     * los elementos de la anterior página.
     */
    const previousPage = () => {
        // Si la página actual es la primera, se detiene la ejecución
        if (currentPage === 1) { return; }
        setCurrentPage(currentPage - 1)
    };

    // Efecto que establece en el estado (currentElements) los elementos que debe
    // renderizar el componente según la página actual y los elementos por página.
    // Tambien hace scroll hasta el inicio del componente.
    useEffect(() => {
        if (elements && elements.length > 0) {
            const indexOfLastPost = currentPage * elementsPerPage;
            const indexOfFirstPost = indexOfLastPost - elementsPerPage;
            setCurrentElements(elements.slice(indexOfFirstPost, indexOfLastPost));
            window.scrollTo({ top: 340 });
        }
    }, [currentPage, elements]);

    return (
        <>
            {!elements || elements && elements.length === 0
                ? <HandlerError errMsg={__('ERR_MSG_PAGINATION', 'Error en la paginación.')} />
                : <>
                    <p className='col-12 fst-italic fw-light fs-6 text-end m-0'>
                        {__('PAGINATION_PAGE', 'Página')} {currentPage}/{totalPages}
                    </p>
                    {currentElements}
                    <PaginationNavBar
                        currentPage={currentPage}
                        nextPage={nextPage}
                        previousPage={previousPage}
                        setPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </>
            }
        </>
    )
};

export default Pagination;