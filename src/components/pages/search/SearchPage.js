import React, { Component } from 'react';
import PagesLayout from '../PagesLayout';
import AvailabilityItem from './AvailabilityItem';
import Breadcrumb from '../../Breadcrumb';
import PlaceMap from './PlaceMap';
import CategoryFilter from './CategoryFilter';
import SearchPanel from './SearchPanel';

class SearchPage extends Component {
    state = { 
		Breadcrumb: [
			{text:'Busqueda', link:'#', isActive:true},
			{text:'Checkout'},
			{text:'Pago'},
		]
	 }
    render() { 
        return (  
            <PagesLayout customClasses="busqueda" hideBreadcrumb={true}>
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
												<input type="checkbox" />
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
		    <div class="col-md-3 filters">	
			    <SearchPanel></SearchPanel>

			    <CategoryFilter></CategoryFilter>
			
                <PlaceMap></PlaceMap>
		    </div>

		    <div class="col-md-9 car-list">
		    	<div class="row pl-0">
		    		<div class="col-md-6 pl-0">
                    <Breadcrumb showHome={false} items={this.state.Breadcrumb}></Breadcrumb>
		    			{/* <ol class="breadcrumb">
							
							<li class="breadcrumb-item"><a href="#">Checkout</a></li>
							<li class="breadcrumb-item">Pago</li>
						</ol> */}
		    		</div>
		    		<div class="col-md-6 notification-1" id="notification1">
		    			<p><i class="far fa-calendar-alt"></i> Un usuario acaba de realizar una reserva desde Buenos Aires. <button onclick="myFunction()">X</button></p>
		    		</div>
				</div>
				
				<AvailabilityItem></AvailabilityItem>
				
				<AvailabilityItem></AvailabilityItem>
				
				<AvailabilityItem></AvailabilityItem>
				
		    </div>
            </PagesLayout>
        );
    }
}
 
export default SearchPage;