import React, { Component } from 'react';

class AvailabilityItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="row car-item mb-3 pt-4 pb-4 pl-4 pr-4">
                <div class="col-md-3 car-image">
                    <img class="img-fluid" src="images/cars/car.jpg" alt="" />
                </div>
                <div class="col-md-6 pl-4 car-details">
                    <h2 class="car-name mt-1">AGILE LS 1.4 5P</h2>
                    <p class="car-category">Categoría <span>chicos</span></p>
                    <div class="details">
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Personas" src='/images/cars/details/person.png' alt="" />
                            <p>X4</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Valijas Grandes" src='/images/cars/details/luggage-lg.png' alt="" />
                            <p>X2</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Valijas Chicas" src='/images/cars/details/luggage-xs.png' alt="" />
                            <p>X2</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Caja" src='/images/cars/details/caja.png' alt="" />
                            <p>Auto</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Aire Acondicionado" src="images/cars/details/airconditioner.png" alt="" />
                            <p>Sí</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="ABS" src='/images/cars/details/abs.png' alt="" />
                            <p>Sí</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Dirección" src="images/cars/details/direction.png" alt="" />
                            <p>Asist.</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="Airbugs" src="images/cars/details/airbug.png" alt="" />
                            <p>Sí</p>
                        </div>
                        <div class="details-item">
                            <img data-toggle="tooltip" data-placement="top" title="GPS Integrado" src='/images/cars/details/gps.png' alt="" />
                            <p>Sí</p>
                        </div>
                    </div>
                    <p class="franchise mb-0"><i class="fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Debes disponer del monto en tu línea de crédito para realizar el alquiler"></i><strong> Franquicia </strong><span>$12.000</span></p>
                </div>
                {/* <!-- Detalles en mobile --> */}
                <div class="mobile-details">
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Personas" src="images/cars/details/person.png" alt="" />
                        <p>X4</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Valijas Grandes" src="images/cars/details/luggage-lg.png" alt="" />
                        <p>X2</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Valijas Chicas" src="images/cars/details/luggage-xs.png" alt="" />
                        <p>X2</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Caja" src="images/cars/details/caja.png" alt="" />
                        <p>Auto</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Aire Acondicionado" src="images/cars/details/airconditioner.png" alt="" />
                        <p>Sí</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="ABS" src="/images/cars/details/abs.png" alt="" />
                        <p>Sí</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Dirección" src="/images/cars/details/direction.png" alt="" />
                        <p>Asist.</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="Airbugs" src='/images/cars/details/airbug.png' alt="" />
                        <p>Sí</p>
                    </div>
                    <div class="details-item">
                        <img data-toggle="tooltip" data-placement="top" title="GPS Integrado" src="/images/cars/details/gps.png" alt="" />
                        <p>Sí</p>
                    </div>
                </div>
                {/* <!-- end: Detalles en mobile --> */}
                <div class="col-md-3 text-center car-price">
                    <p class="rent-days mb-0 mt-2">Alquiler por<span> 2 </span>días</p>
                    <p class="rent-price mt-0 mb-0"><span>ARS</span>  $2.350</p>
                    <a class="btn btn-street main-btn d-block mt-1 mb-3" href="busqueda-2.html">RESERVA EN MOSTRADOR</a>
                    <a class="second-btn d-block" href="#"><i class="fas fa-angle-right"></i> Pago online <strong> ARS $2.820</strong></a>
                </div>
            </div>
         );
    }
}
 
export default AvailabilityItem;