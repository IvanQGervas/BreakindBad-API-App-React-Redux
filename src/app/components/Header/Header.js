/**
 * Cabecera de la aplicación
 * 
 */
// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';

// Componentes
import ContainerBreakpoints from '../ContainerBreakpoints';
import LangSelector from '../LangSelector';
import LiNavigation from './LiNavigation';
import UlNavigation from './UlNavigation';

// Constantes
import routes from '../../../constants/routes';

// Hooks
import useLang from '../../../hooks/useLang'
import ImageFrame from '../ImageFrame';

// Utilidades
import logo from '../../assets/images/logo.png'

/**
 * Cabecera de la aplicación.
 * Permite navegar entre las páginas: Inicio y personaje aleatorio.
 * Sin salir de la aplicación o acceder mediante URL.
 */
const Header = () => {

    // Hook del idioma
    const [, { __ }] = useLang();

    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <ContainerBreakpoints>
                <Link
                    className='navbar-brand'
                    to={routes.HomePage}>
                    <ImageFrame alt='logo' classNameImg='logo-header me-1' src={logo} />
                    <span className='d-none d-sm-inline'>Breaking Bad App</span>
                </Link>
                <div className='d-flex align-items-center'>
                    <UlNavigation>
                        <LiNavigation route={routes.HomePage}>
                            {__('HEADER_HOME_LINK', 'Inicio')}
                        </LiNavigation>
                    </UlNavigation>
                    <UlNavigation>
                        <LiNavigation route={routes.RandomCharacterPage}>
                            {__('HEADER_RANDOM_CHARACTER_LINK', 'Personaje aleatorio')}
                        </LiNavigation>
                    </UlNavigation>
                    <LangSelector />
                </div>
            </ContainerBreakpoints>
        </nav>
    );
};

export default Header;