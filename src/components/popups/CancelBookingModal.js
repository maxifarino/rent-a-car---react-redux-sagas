import React, { Component } from 'react';

export class CancelBookingModal extends Component{
    render(){
        return(
            <div className="loginModal modal fade" id="cancelModal" tabIndex="-1" role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cancelar reserva</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-center">
                              <form>
                                  <div className="form-group">
                                      <div className="input-group mb-3">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="mail"><i className="fas fa-male"></i></span>
                                          </div>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido"/>
                                    </div>
                                </div>
                                  <div className="form-group">
                                      <div className="input-group mb-3">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="mail"><i className="fas fa-file-alt"></i></span>
                                          </div>
                                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Nº de Reserva" />
                                    </div>
                                </div>
                                  <button type="submit" className="btn btn-street mb-3">Cancelar</button>
                            </form>
                        </div>
                    </div>
                  </div>
            </div>
        );
    }
}