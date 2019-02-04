import React from 'react';

const slogan = (props) => {
    return (
        <div className="float-right slogan ml-2">
            <a href={props.data.phone}>{props.data.label}</a><br />
            <p>{props.data.title}</p>
        </div>
    )
}

export default slogan;