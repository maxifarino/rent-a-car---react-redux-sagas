import React from 'react';


const itemSocial = (props) => {

    return (
        <li  className="nav-item">
            <a className="nav-link" target="_blank" href={props.url}>
                <i className={props.class}></i>
            </a>
        </li>
    )
}

export default itemSocial;