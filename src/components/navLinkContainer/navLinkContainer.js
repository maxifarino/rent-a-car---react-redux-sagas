/**React */
import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Nav, NavItem, NavLink } from 'reactstrap';

/**Bootstrap */
import { LinkContainer } from 'react-router-bootstrap';

/**Constants */
import * as pages from './../../core/constants';

const navLinkContainer = (props) => {

    const { t } = props;

    return (
        <Nav className='navbar-nav'>
            <LinkContainer to={'/'} exact>
                <NavItem>
                    <NavLink href=''>Home</NavLink>
                </NavItem>
            </LinkContainer>

            {props.pages.includes(pages.PROMOTIONS) > 0 &&
                <LinkContainer to={'/promotions'} exact>
                    <NavItem>
                        <NavLink href=''>{t('promociones')}</NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.SERVICES) > 0 &&
                <LinkContainer to={'/services'} exact>
                    <NavItem>
                        <NavLink href=''> {t('servicios')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.FLEET) > 0 &&
                <LinkContainer to={'/fleet'} exact>
                    <NavItem>
                        <NavLink href=''> {t('flota')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.COMPANIES) > 0 &&
                <LinkContainer to={'/companies'} exact>
                    <NavItem>
                        <NavLink href=''> {t('empresas')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.CONDITIONS) > 0 &&
                <LinkContainer to={'/conditions'} exact>
                    <NavItem>
                        <NavLink href=''> {t('condiciones')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.NEWS) > 0 &&
                <LinkContainer to={'/news'} exact>
                    <NavItem>
                        <NavLink href=''> {t('novedades')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

            {props.pages.includes(pages.CONTACT) > 0 &&
                <LinkContainer to={'/contact'} exact>
                    <NavItem>
                        <NavLink href=''> {t('contacto')} </NavLink>
                    </NavItem>
                </LinkContainer>
            }

        </Nav>
    )
}

export default withNamespaces()(navLinkContainer);