import React, { Component } from 'react';
import PagesLayout from '../PagesLayout';
import AdditionalItem from './AdditionalItem';
import Breadcrumb from '../../Breadcrumb';
import CarDetailItem from '../search/CarDetailItem';

class CheckoutPage extends Component {
    state = { 
        additionals: []
     }
    render() { 
        return ( 
            <PagesLayout customClasses='busqueda Step2' showBreadcrumb={false}>
            <div class="busqueda-accordion">
		    	<div id="accordion">
				  	<div class="card">
				    	<div class="card-header" id="headingOne">
				      	<h5 class="mb-0">
				        	<button data-toggle="collapse" data-target="#busquedaMobile" aria-expanded="true" aria-controls="collapseOne">
				        		<p class="lugar float-left text-uppercase mb-0 mr-4"><i class="fas fa-map-marker-alt mr-2"></i> Belgrano</p>
				        		<p class="fecha float-left mb-0"><i class="far fa-calendar-alt mr-2"></i> 06/06 - 08/06</p>
				        	</button>
				        	<button class="float-right text-right" data-toggle="collapse" data-target="#busquedaMobile" aria-expanded="true" aria-controls="collapseOne">
				        		<p class="mb-0"><i class="fas fa-angle-down"></i></p>
				        	</button>
				      	</h5>
				    	</div>
					    <div id="busquedaMobile" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
					      	<div class="card-body">
						        <form class="pt-4 pb-4 pl-4 pr-4 home-form">
						        	<div class="row mt-2">
						        		<div class="col-md-12">
									        <div class="form-group">
									            <p>Lugar de entrega</p>
									            <div class="input-group">
								                    <div class="input-group-append">
								                        <div class="input-group-text"><i class="fas fa-map-marker-alt"></i></div>
								                    </div>
									                <select id="Address1" class="form-control datetimepicker-input">
											            <optgroup label="Oficinas" value="Oficinas">
											                <option selected="selected"><i class="fas fa-map-marker-alt"></i> Oficina Belgrano</option>
											                <option><i class="fas fa-map-marker-alt"></i> Aeropuerto El Palomar</option>
											            </optgroup>
											            <optgroup label="Terminales" value="Terminales">
											                <option><i class="fas fa-map-marker-alt"></i> Aeropuerto de Ezeiza</option>
											                <option><i class="fas fa-map-marker-alt"></i> Aeroparque J. Newbery</option>
											                <option><i class="fas fa-map-marker-alt"></i> Buquebus Puerto Madero</option>
											                <option><i class="fas fa-map-marker-alt"></i> Terminal de Omnibus Retiro</option>
											            </optgroup>
											            <optgroup label="Capital Federal" value="Capital Federal">
											                <option><i class="fas fa-map-marker-alt"></i> Capital Federal a domicilio </option>
											            </optgroup>
											            <optgroup label="Gran Buenos Aires" value="Gran Buenos Aires  ">
											                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 15 km)</option>
											                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 30km )</option>
											                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 45km)</option>
											            </optgroup>
										            </select>
								                </div>

									        </div>	 		        			
						        		</div>
						        	</div>
						        	<div class="row">
						        		<div class="col-md-12">
									        <button type="button" class="btn differentDeliveryPlace pl-0 mb-2" data-toggle="collapse" data-target="#Address2btn">Diferente lugar de devolución</button>
									        <div id="Address2btn" class="collapse">
									            <div class="form-group">
										            <p>Lugar de devolución</p>
										            <div class="input-group">
									                    <div class="input-group-append">
									                        <div class="input-group-text"><i class="fas fa-map-marker-alt"></i></div>
									                    </div>
										                <select id="Address1" class="form-control datetimepicker-input">
												            <optgroup label="Oficinas" value="Oficinas">
												                <option selected="selected"><i class="fas fa-map-marker-alt"></i> Oficina Belgrano</option>
												                <option><i class="fas fa-map-marker-alt"></i> Aeropuerto El Palomar</option>
												            </optgroup>
												            <optgroup label="Terminales" value="Terminales">
												                <option><i class="fas fa-map-marker-alt"></i> Aeropuerto de Ezeiza</option>
												                <option><i class="fas fa-map-marker-alt"></i> Aeroparque J. Newbery</option>
												                <option><i class="fas fa-map-marker-alt"></i> Buquebus Puerto Madero</option>
												                <option><i class="fas fa-map-marker-alt"></i> Terminal de Omnibus Retiro</option>
												            </optgroup>
												            <optgroup label="Capital Federal" value="Capital Federal">
												                <option><i class="fas fa-map-marker-alt"></i> Capital Federal a domicilio </option>
												            </optgroup>
												            <optgroup label="Gran Buenos Aires" value="Gran Buenos Aires  ">
												                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 15 km)</option>
												                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 30km )</option>
												                <option><i class="fas fa-map-marker-alt"></i> ARBA (Hasta 45km)</option>
												            </optgroup>
											            </select>
									                </div>
									            </div>
									        </div>	
									    </div>
						        	</div>
						        	<div class="row mt-1">
								        <div class="col-lg-3 col-md-6 col-6">
								        	<p>Fecha de Retiro</p>
								            <div class="form-group">
								                <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
								                    <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
								                        <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
								                    </div>
								                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker1"/>
								                </div>
								            </div>
								        </div>
								        <div class="col-lg-3 col-md-6 col-6">
								        	<p>Hora de Retiro</p>
								            <div class="form-group">
								                <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
								                    <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
								                        <div class="input-group-text"><i class="far fa-clock"></i></div>
								                    </div>
								                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker2"/>
								                </div>
								            </div>
								        </div>
								        <div class="col-lg-3 col-md-6 col-6">
								        	<p>Fecha de Devolución</p>
								            <div class="form-group">
								                <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
								                    <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
								                        <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
								                    </div>
								                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3"/>
								                </div>
								            </div>
								        </div>
								        <div class="col-lg-3 col-md-6 col-6">
								        	<p>Hora de Devolución</p>
								            <div class="form-group">
								                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
								                    <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
								                        <div class="input-group-text"><i class="far fa-clock"></i></div>
								                    </div>
								                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4"/>
								                </div>
								            </div>
								        </div>
						        	</div>          
						        	<div class="row">
						        		<div class="col-md-6 mb-4">
								        	<p class="mb-3">Kilómetros</p>
								        	<label class="special-checkbox d-inline mr-3">200 Km diarios
												<input type="checkbox"/>
												<span class="checkmark"></span>
											</label>
											<label class="special-checkbox d-inline">KM ilimitados
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>
						        		</div>
						        		<div class="col-md-6">
								        	<p>Código promocional</p>
						                    <div class="form-group">
								                <div class="input-group">
								                    <div class="input-group-append">
								                        <div class="input-group-text"><i class="fas fa-star"></i></div>
								                    </div>
								                    <input type="text" class="form-control datetimepicker-input" placeholder="Escribí tu código" />
								                </div>
								            </div>
						        		</div>
						        	</div>
						        	<div class="row mt-4 mb-3">
						        		<div class="col-md-12">
						        			<a href="busqueda.html" class="btn btn-street">ENCONTRÁ TU VEHICULO</a>
						        		</div>
						        	</div>
						        </form>
					      	</div>
					    </div>
				  	</div>
				</div>
		    </div>
		    <div class="car-summary">
		    	<div class="car-image text-center mb-3">
		    		<img class="img-fluid" src="images/cars/car.jpg" alt="" />
				</div>
				<div class="car-info mt-1">
					<h2 class="car-name mt-1">AGILE LS 1.4 5P</h2>
					<p class="car-category mb-0">Categoría <span class="text-uppercase">chicos</span></p>
				</div>
				<div class="edit-car mt-1">
					<a href="busqueda-1.html"><i class="fas fa-pencil-alt"></i></a>
				</div>
		    </div>
	    	<div class="container-fluid">
		    	<div class="row">
				    <Breadcrumb></Breadcrumb>
	    		</div>
	    		<div class="row mb-5">
		    		<div class="col-md-9 special-width">
		    			<div class="row">
		    				<div class="col-md-6 title-col1">
		    					<h2>¡QUE NADA TE HAGA FALTA!</h2>
		    					<p>ADICIONALES PARA TU VIAJE</p>
		    				</div>
		    				<div class="col-md-6 text-right back-link">
		    					<a class="back d-block" href="busqueda-1.html"><i class="fas fa-angle-double-left"></i> Elegir otro auto</a>
		    				</div>
		    			</div>
		    			<div class="row adicionales-block">
		    				<table class="table table-hover adicionales-table">
								<tbody>
									{this.state.additionals.map(ad => <AdditionalItem additional={ad}></AdditionalItem>)}
								</tbody>
							</table>
	    				</div>
						<div class="row adicionales-block form-datos pt-1 mb-5">
							<div class="container-fluid p-0">
								<div class="row">
									<div class="col-md-6"><h2>Datos del Conductor y contacto</h2></div>
									<div class="col-md-6 text-right register-user"><a class="" href=""><i class="fa fa-user"></i> Soy usuario registrado. Recuperar mis datos.</a></div>
								</div>
							</div>
							<form class="container-fluid p-0">
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<input class="form-control" placeholder="Nombre y Apellido" data-val="true" data-val-required="The Name field is required." id="Booking_Customer_Name" name="Booking.Customer.Name" type="text" value=""/ >
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<input class="form-control" placeholder="Mail" data-val="true" data-val-email="The Mail field is not a valid e-mail address." data-val-required="The Mail field is required." id="Booking_Customer_Mail" name="Booking.Customer.Mail" type="text" value="" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<input class="form-control" placeholder="Teléfono" data-val="true" data-val-required="The Phone field is required." id="Booking_Customer_Phone" name="Booking.Customer.Phone" type="text" value="" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-8">
										<div class="form-group">
											<input class="form-control" placeholder="Domicilio" data-val="true" data-val-required="The Address field is required." id="Booking_Customer_Address" name="Booking.Customer.Address" type="text" value="" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<input class="form-control" placeholder="DNI/Licencia" data-val="true" data-val-required="The Document field is required." id="Booking_Customer_Document" name="Booking.Customer.Document" type="text" value="" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 text-right register">
										<div class="form-group">
											<label class="special-checkbox d-inline"><input type="checkbox" /><span class="checkmark" ></span></label>
											<span> Registrarme</span>
										</div>	
									</div>
								</div>
	    					</form>
	    					<div class="container-fluid p-0">
								<div class="row">
									<div class="col-md-12 mb-4">
		    							<hr class="separator mb-5" />
		    							<div class="form-group conditions">
											<label class="special-checkbox d-inline"><input type="checkbox" /><span class="checkmark" ></span></label>
											<span>  Leí y acepto las<a href="#"> Condiciones de compra</a> y la<a href="#">  Política de privacidad</a></span>
										</div>
										<a class="btn btn-street mt-3 payment-button" href="pago.html">Pagar reserva</a>
		    						</div>
			    					<div class="col-md-12 mt-3 send-budget">
			    						<a href="#"><i class="far fa-envelope"></i> Enviar cotización por mail</a>
			    						<a href="#"><i class="fas fa-print"></i> Imprimir</a>
			    					</div>
								</div>
							</div>
	    					
	    				</div>
	    			</div>
		    		<div class="col-md-3 rent-details-col"> 
			    		<div class="row title-col2">
			    			<div class="col-md-12">
			    				<h3>¡EXELENTE ELECCIÓN!</h3>
			    				<p>Es hora de armar las valijas</p>
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
											{this.state.booking.car.details.map(detail => <CarDetailItem detail={detail}></CarDetailItem>)}
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
	    	</div>
            </PagesLayout>
         );
    }
}
 
export default CheckoutPage;