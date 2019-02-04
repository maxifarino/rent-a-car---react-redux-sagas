import React, { Component } from 'react';

class SearchPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="row home-form w-100 mt-5">
			        <form class="pt-4 pb-5 pl-4 pr-4">
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
					        <div class="col-lg-6 col-md-6 col-6">
					        	<p>Fecha de Retiro</p>
					            <div class="form-group">
					                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
					                    <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
					                        <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
					                    </div>
					                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4"/>
					                </div>
					            </div>
					        </div>
					        <div class="col-lg-6 col-md-6 col-6">
					        	<p>Hora de Retiro</p>
					            <div class="form-group">
					                <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
					                    <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
					                        <div class="input-group-text"><i class="far fa-clock"></i></div>
					                    </div>
					                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3"/>
					                </div>
					            </div>
					        </div>
					    </div>
					    <div class="row mt-1">
					        <div class="col-lg-6 col-md-6 col-6">
					        	<p>Fecha de Devolución</p>
					            <div class="form-group">
					                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
					                    <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
					                        <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
					                    </div>
					                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4"/>
					                </div>
					            </div>
					        </div>
					        <div class="col-lg-6 col-md-6 col-6">
					        	<p>Hora de Devolución</p>
					            <div class="form-group">
					                <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
					                    <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
					                        <div class="input-group-text"><i class="far fa-clock"></i></div>
					                    </div>
					                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3"/>
					                </div>
					            </div>
					        </div>
			        	</div>          
			        	<div class="row">
			        		<div class="col-12">
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
			        	</div>
			        </form>
			    </div> 
         );
    }
}
 
export default SearchPanel;