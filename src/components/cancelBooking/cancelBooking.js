import React from 'react';

const cancelBooking = (props) => {
    return (
        <>
            {props.show &&
                <div className="float-right access-item mr-3">
                    <a href="#" data-toggle="modal" data-target="#cancelModal">
                        <div className="float-right ml-2"><i className="fa fa-ban"></i></div>
                        <p className="float-left mt-1"><span>Cancelar</span><br />Reserva</p>
                    </a>
                    {/* TODO:  <CancelBookingModal></CancelBookingModal> */}
                </div>
            }
        </>
    )
}

export default cancelBooking;