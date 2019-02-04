import React, { Component } from 'react';

export class LoginModal extends Component{

    render(){
        return(
            <div className="loginModal modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ingresar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <form>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="mail"><i className="far fa-envelope"></i></span>
                                        </div>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="mail"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-street mb-3">Ingresar</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <div className="col-5 text-left">
                                <a href="registro.html"><i className="fas fa-user-circle"></i> Crear cuenta</a>
                            </div>
                            <div className="col-7 text-right">
                                <a href="restablecer-password.html">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}