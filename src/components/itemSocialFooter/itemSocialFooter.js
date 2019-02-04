import React from 'react';

const itemSocialFooter = (props) => {

    return (

        <li className="float-left">
            <a target="_blank" href={props.url}>
                <i className={props.class}></i>
            </a>
        </li>

    )
}

export default itemSocialFooter;