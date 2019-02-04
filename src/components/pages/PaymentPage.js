import React, { Component } from 'react';
import PagesLayout from './PagesLayout';

class PaymentPage extends Component {
    state = {  }
    render() { 
        return ( 
            <PagesLayout>
                <div class="row mb-5">
		    		<div class="col-md-9 special-width">
		    			<div class="row">
		    				<div class="col-md-12 title-col1">
		    					<h2>COMPRA PROTEGIDA</h2>
		    					<p>SITIO ASEGURADO PARA TRANSACCIONES</p>
		    				</div>
		    			</div>
		    			<div class="row adicionales-block pb-1">
		    				<img width="60" height="60" class="mr-4" src="images/ssl.jpg" alt="Certificado de seguridad SSL" />
		    				<img width="280" height="42" class="mt-2" src="images/compra-segura.jpg" alt="Compra segura" />
		    			</div>
		    			<div class="row adicionales-block pb-1 pt-3 payment-code">
		    				<div class="col-md-12 p-0">
		    					<p class="mb-1">Orden Nº 0000001</p>
		    					<p><strong>TOTAL A ABONAR $5.674,00</strong></p>
		    					<hr />
		    				</div>
		    			</div>
						<div class="row adicionales-block form-datos mb-5 pt-3">
							<form class="col-md-10 form-pago">
								<div class="row">
									<div class="col-md-5">
										<div class="form-group">
											<label for="medio-pago">Medio de pago</label>
											<select class="form-control" id="banco">
										      	<option>Elegir...</option>
										      	<option>VISA</option>
										      	<option>MasterCard</option>
										      	<option>American Express</option>
										    </select>
										</div>
									</div>
									<div class="col-md-5">
										<div class="form-group">
											<label for="banco">Banco</label>
											<select class="form-control" id="banco">
										      	<option>Elegir...</option>
										      	<option>Santander Rio</option>
										      	<option>Banco Francés</option>
										      	<option>Banco Patagonia</option>
										      	<option>Banco Galicia</option>
										      	<option>Banco HSBC</option>
										    </select>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
										    <label for="cuotas">Cuotas</label>
										    <select class="form-control" id="cuotas">
										      	<option>1 ¡Sin interés!</option>
										      	<option>2 ¡Sin interés!</option>
										      	<option>3 ¡Sin interés!</option>
										      	<option>4</option>
										      	<option>5</option>
										      	<option>6</option>
										    </select>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-5">
										<div class="form-group">
											<label for="nombre-titular">Titular de Tarjeta</label>
											<input class="form-control" placeholder="" data-val="true" id="nombre-titular" type="text" value="" />
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label for="tipo-documento">Tipo Doc.</label>
											<select class="form-control" id="tipo-documento">
										      	<option>DNI</option>
										      	<option>Pasaporte</option>
										    </select>
										</div>
									</div>
									<div class="col-md-5">
										<div class="form-group">
											<label for="documento">Documento</label>
											<input class="form-control" placeholder="" data-val="true" id="documento" type="text" value="" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="numero-tarjeta">Número de tarjeta</label>
											<input class="form-control" placeholder="" data-val="true" id="numero-tarjeta" type="text" value="" />
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label for="codigo">Código</label>
											<input class="form-control" placeholder="" data-val="true" id="codigo" type="text" value="" />
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label for="mes">Mes vencimiento</label>
											<input class="form-control" placeholder="" data-val="true" id="mes" type="text" value="" />
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label for="anio">Año vencimiento</label>
											<input class="form-control" placeholder="" data-val="true" id="anio" type="text" value="" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<a data-toggle="collapse" href="#card2" role="button" aria-expanded="false"><small>+ Agregar tarjeta</small></a>
										<p><small>Se cargará un 50% del monto de alquiler en cada tarjeta.</small></p>
									</div>
									<div class="collapse col-md-12 p-0" id="card2">
									  	<div class="card-body container-fluid ">
		    								<div class="row">
												<div class="col-md-5">
													<div class="form-group">
														<label for="medio-pago">Medio de pago</label>
														<select class="form-control" id="banco">
													      	<option>Elegir...</option>
													      	<option>VISA</option>
													      	<option>MasterCard</option>
													      	<option>American Express</option>
													    </select>
													</div>
												</div>
												<div class="col-md-5">
													<div class="form-group">
														<label for="banco">Banco</label>
														<select class="form-control" id="banco">
													      	<option>Elegir...</option>
													      	<option>Santander Rio</option>
													      	<option>Banco Francés</option>
													      	<option>Banco Patagonia</option>
													      	<option>Banco Galicia</option>
													      	<option>Banco HSBC</option>
													    </select>
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
													    <label for="cuotas">Cuotas</label>
													    <select class="form-control" id="cuotas">
													      	<option>1 ¡Sin interés!</option>
													      	<option>2 ¡Sin interés!</option>
													      	<option>3 ¡Sin interés!</option>
													      	<option>4</option>
													      	<option>5</option>
													      	<option>6</option>
													    </select>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-5">
													<div class="form-group">
														<label for="nombre-titular">Titular de Tarjeta</label>
														<input class="form-control" placeholder="" data-val="true" id="nombre-titular" type="text" value="" />
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label for="tipo-documento">Tipo Doc.</label>
														<select class="form-control" id="tipo-documento">
													      	<option>DNI</option>
													      	<option>Pasaporte</option>
													    </select>
													</div>
												</div>
												<div class="col-md-5">
													<div class="form-group">
														<label for="documento">Documento</label>
														<input class="form-control" placeholder="" data-val="true" id="documento" type="text" value="" />
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label for="numero-tarjeta">Número de tarjeta</label>
														<input class="form-control" placeholder="" data-val="true" id="numero-tarjeta" type="text" value="" />
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label for="codigo">Código</label>
														<input class="form-control" placeholder="" data-val="true" id="codigo" type="text" value="" />
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label for="mes">Mes vencimiento</label>
														<input class="form-control" placeholder="" data-val="true" id="mes" type="text" value="" />
													</div>
												</div>
												<div class="col-md-2">
													<div class="form-group">
														<label for="anio">Año vencimiento</label>
														<input class="form-control" placeholder="" data-val="true" id="anio" type="text" value="" />
													</div>
												</div>
											</div>
									  	</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 mb-4">
										<a class="btn btn-street mt-3 payment-button" href="gracias.html">Pagar reserva</a>
		    						</div>
								</div>
	    					</form>
	    					<div class="col-md-2 see-promos">
	    						<a href="#"><i class="fas fa-angle-double-right"></i> Ver promociones</a>
	    					</div>
	    					<div class="col-md-12">
	    						<img width="260" height="40" class="mt-4" src="images/mercado-pago.jpg" alt="Procesado por Mercado Pago" />
	    					</div>
		    				
	    				</div>
    				</div>
		    		<div class="col-md-3 rent-details-col"> 
			    		<div class="row title-col2">
			    			<div class="col-md-12">
			    				<h3>DETALLE DE TU RESERVA</h3>
			    				<p>Tu vehículo ya se encuentra reservado</p>
			    			</div>
		    			</div>
		    			<div class="row">
		    				<div class="col-md-12">
		    					<div class="rent-details">
			    					<div class="car-item">
				    					<div class="car-details">
											<h2 class="car-name mt-1">AGILE LS 1.4 5P</h2>
											<p class="car-category mb-0">Categoría <span>chicos</span> - <span class="km">200 KM diarios</span></p>
				    						<p class="franchise mb-3"><i class="fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Debes disponer del monto en tu línea de crédito para realizar el alquiler"></i><strong> Franquicia </strong><span>$12.000</span></p>
				    					</div>
				    					<div class="car-image text-center mb-3">
											<img class="img-fluid" src="images/cars/car.jpg" alt="" />
										</div>
										<div class="details">
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
												<img data-toggle="tooltip" data-placement="top" title="ABS" src="images/cars/details/abs.png" alt="" />
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
												<img data-toggle="tooltip" data-placement="top" title="GPS Integrado" src="images/cars/details/gps.png" alt="" />
												<p>Sí</p>
											</div>
										</div>	
			    					</div>
									<hr />
			    					<div class="PickupDetails">
			    						<h4>Entrega</h4>
			    						<p>Oficina Belgrano -<span class="date"> 05/06/2018</span> <span class="hour">09:00 hs</span></p>
			    						<h4>Devolución</h4>
			    						<p>Oficina Belgrano -<span class="date"> 08/06/2018</span> <span class="hour">09:00 hs</span></p>
			    					</div>
			    					<hr />
			    					<div class="payment-details">
			    						<h4 class="mb-3">Detalle de pago</h4>
			    						<ul class="list-unstyled">
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Alquiler </span> <span class="item-price">$4.270 (Valor diario $427)</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Retiro en Oficina Belgrano</span> <span class="item-price">$0.00</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Devolucion en Buquebús - Pto. Madero</span> <span class="item-price">$338</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">GPS</span> <span class="item-price">$200 p/día ($2.000)</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Conductor adicional</span> <span class="item-price">$225 p/día ($2.250)</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Permiso Mercosur</span> <span class="item-price">$600</span></li>
			    							<li><i class="fas fa-plus"></i> <span class="item-name">Seguro</span> <span class="item-price">$1.200</span></li>
			    							<li><i class="fas fa-minus"></i> <span class="item-name">Descuento 15% de Descuento Pago en efectivo</span> <span class="item-price">$452</span></li>
			    						</ul>
			    					</div>
		    					</div>
		    					<div class="payment mt-3">
		    						<div class="row text-light">
			    						<div class="col-md-6">
			    							<h3 class="total-name">Total a pagar</h3>
			    							<p class="days">Por 10 días de alquiler</p>
			    						</div>
			    						<div class="col-md-6 text-right">
			    							<p class="total-price">$5.559</p>
			    							<p class="diario">Valor diario <span>$555</span></p>
			    						</div>		    							
		    						</div>
		    					</div>
		    				</div>
		    			</div>
		    		</div>
	    		</div>	    		
            </PagesLayout>
         );
    }
}
 
export default PaymentPage;