import React from 'react';

const breadCrumb = (props) => {
    
    return (
        <ol class="breadcrumb">
                 {props.children}   
        </ol>
    );
}

export default breadCrumb;  