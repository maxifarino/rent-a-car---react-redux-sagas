import React from 'react';

const gridColumn = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default gridColumn;