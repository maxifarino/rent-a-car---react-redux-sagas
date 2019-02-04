import React from 'react';
import * as page from './../../core/constants';

const access = (props) => {

    return (
        <>
            <h3>ACCESOS</h3>
            <ul className="list-inline">

                {props.data.pages.includes(page.SIGN_IN) > 0 &&
                    <li>
                        <a href="#">Registrarme</a>
                    </li>
                }

                {props.data.pages.includes(page.BUY_OUR_CARS) > 0 &&
                    <li>
                        <a href="#">Comprá nuestros autos</a>
                    </li>
                }

                {props.data.pages.includes(page.PUT_YOUR_CAR_TO_WORK) > 0 &&
                    <li>
                        <a href="#">Poné tu auto a trabajar</a>
                    </li>
                }

                {props.data.pages.includes(page.FRANCHISE) > 0 &&
                    <li>
                        <a href="#">Franquicias</a>
                    </li>
                }

            </ul>
        </>
    )
}

export default access;