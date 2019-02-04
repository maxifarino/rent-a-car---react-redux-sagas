import React from 'react';
import * as page from './../../core/constants';

const siteMap = (props) => {

    return (
        <>
            <h3>SITE MAP</h3>
            <ul className="list-inline">
                <li>
                    <a href="#">Home</a>
                </li>

                {props.data.includes(page.PROMOTIONS) > 0 &&
                    <li>
                        <a href="#">Promociones</a>
                    </li>
                }

                {props.data.includes(page.SERVICES) > 0 &&
                    <li>
                        <a href="#">Servicios</a>
                    </li>
                }

                {props.data.includes(page.FLEET) > 0 &&
                    <li>
                        <a href="#">Flota</a>
                    </li>
                }

                {props.data.includes(page.COMPANIES) > 0 &&
                    <li>
                        <a href="#">Empresas</a>
                    </li>
                }

                {props.data.includes(page.CONDITIONS) > 0 &&
                    <li>
                        <a href="#">Condiciones</a>
                    </li>
                }

                {props.data.includes(page.NEWS) > 0 &&
                    <li>
                        <a href="#">Novedades</a>
                    </li>
                }

                {props.data.includes(page.CONTACT) > 0 &&
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                }

            </ul>
        </>
    )
}

export default siteMap;