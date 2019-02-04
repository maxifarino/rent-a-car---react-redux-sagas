import React from 'react';

const gridRow = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default gridRow;