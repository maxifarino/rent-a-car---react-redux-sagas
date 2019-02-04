import React from 'react';

const questions = (props) => {
    const listPhone = props.phones.map((item, index) => {
        return <a key={index} href={'tel:+' + item.phone}>{item.label}</a>;
    })

    return (
        <>
            <h3>¿Tenés dudas?</h3>
            <div className="phone">
                {listPhone}
            </div>
            <h3>Escribinos</h3>
            <a href={'mailto:' + props.email}>{props.email}</a>
        </>
    )
}

export default questions;