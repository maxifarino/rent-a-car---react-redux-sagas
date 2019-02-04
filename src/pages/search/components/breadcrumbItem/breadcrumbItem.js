import React from 'react';

const breadcrumbItem = (props) => {    
    return (
        <li className={props.active ? 'breadcrumb-item active' : 'breadcrumb-item'}><a href="#">{props.title}</a></li>
    );
}

export default breadcrumbItem;                                