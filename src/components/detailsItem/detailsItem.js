import React from 'react';
import DetailItemImage from './../detailItemImage/detailItemImage';

const detailsItem = (props) => {

    return (
        <div className="details-item">
            <DetailItemImage typeIcon={props.typeIcon} title={props.title}/>
            <p>{props.item}</p>
        </div>
    )
}

export default detailsItem;