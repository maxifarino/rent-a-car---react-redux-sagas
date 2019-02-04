import React from 'react';

const logo = (props) => {    
    return (
        <>
            {
                props.show &&
                <a href="index.html" className="navbar-brand">
                    <img width="120" src="images/logo.png" alt="Logo Street Rent a Car" />
                </a>
            }
        </>
    )
}

export default logo;