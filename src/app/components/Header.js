/**
 * Cabecera de la aplicación y componentes relacionados de navegación
 * 
 */
// Dependencias
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Componentes
import ContainerBreakpoits from '../containers/ContainerBreakpoits';

// Constantes
import routes from '../../constants/routes';

// Hooks
import useLang from '../../hooks/useLang'

/**
 * Cabecera de la aplicación
 */
const Header = () => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <ContainerBreakpoits>
                <Link
                    className='navbar-brand'
                    to={routes.HomePage}>
                    Breaking Bad App
                </Link>
                <UlNavigation>
                    <LiNavigation route={routes.HomePage}>
                        {__('HEADER_HOME_LINK', 'Inicio')}
                    </LiNavigation>
                    <LiNavigation route={routes.CharacterPage}>
                        {__('HEADER_RANDOM_CHARACTER_LINK', 'Personaje aleatorio')}
                    </LiNavigation>
                </UlNavigation>
            </ContainerBreakpoits>
        </nav>
    );
}

/**
 * Lista desordenada de navegación
 * 
 * @param {Element} children        Elemento/s a renderizar
 * @param {String} className        Clases para la etiqueta ul
 */
const UlNavigation = ({ children, className }) => {

    return (
        <ul className={[
            'navbar-nav',
            className
        ].join(' ').trim()}>
            {children}
        </ul>
    );
}

/**
 * Elemento lista de navegación
 * 
 * @param {Element} children        Elemento/s a renderizar
 * @param {String} className        Clases para la etiqueta li 
 * @param {String} classNameLink    Clases para el componente de navegación
 * @param {String} route            Ruta de la navegación
 */
const LiNavigation = ({ children, className, classNameLink, route }) => {

    // Ruta actual
    const { pathname } = useLocation();

    return (
        <li className={[
            'nav-item',
            className
        ].join(' ').trim()}>
            <Link
                className={[
                    'nav-link',
                    classNameLink,
                    // TODO: Arreglar esto
                    pathname === route && 'active'
                ].join(' ').trim()}
                to={route}>
                {children}
            </Link>
        </li>
    );
};

export default Header;