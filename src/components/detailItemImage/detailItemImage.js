import React from 'react';

const detailItemImage = (props) => {

    return (
        <img data-toggle="tooltip"
            data-placement="top"
            title={props.title}
            src={"images/cars/details/"+props.typeIcon}
            alt={props.title}
        />
    )
}

export default detailItemImage;