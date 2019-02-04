import React, { Component } from 'react';

const whatsApp = (props) => {
    return (
        <>
            {props.data.showWhatsApp &&
                <div className="float-right access-item mr-3" >
                    <a target="_blank" href={'https://api.whatsapp.com/send?phone=' + props.data.whatsApp.phone}>
                        <div className="float-right ml-2"><img width="38" className="img-responsive" src="images/Whatsapp.png" /></div>
                        <p className="float-left mt-1"><span>Whatsapp</span><br />{props.data.whatsApp.label}</p>
                    </a>
                </div >
            }
        </>
    )

}

export default whatsApp;