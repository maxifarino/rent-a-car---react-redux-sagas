import React from 'react';

const loggingAccount = (props) => {
    return (
        <>
            {
                props.show &&
                <div className="float-right access-item mr-3">
                    <a href="#" data-toggle="modal" data-target="#loginModal">
                        <div className="float-right ml-2"><i className="fa fa-user"></i></div>
                        <p className="float-left mt-1"><span>Ingresar</span><br />Mi cuenta</p>
                    </a>
                    {/* TODO:  <LoginModal></LoginModal> */}
                </div>
            }
        </>
    )
}

export default loggingAccount;