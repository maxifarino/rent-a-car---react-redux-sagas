import React from 'react';

const carImage = (props) => (
    <img className="img-fluid" src={props.srcImage} alt={props.altName}></img>
)

export default carImage;