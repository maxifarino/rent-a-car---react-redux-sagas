import React, { Component } from 'react';
import PagesLayout from './PagesLayout';
import GoogleMap from '../simpleComponents/GoogleMap';

class ContactPage extends Component {
    state = {  
		googleMapConfig:{
			link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7271605886226!2d-58.46062118448529!3d-34.56046288047079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d4baee7e69%3A0xc8bc5babb3b6b784!2sStreet+Rent+a+Car!5e0!3m2!1ses-419!2sar!4v1541274918584",
			height: "400px"
		}
	}
    render() { 
        return ( 
            <PagesLayout>
                <div class="col-md-6 offset-md-3 text-center mb-4 claim">
					<h2 class="mb-3">¿TENÉS DUDAS? CONTACTATE CON NOSOTROS</h2>
					<h1 >CONTACTO</h1>
				</div>
				<div class="col-md-12 p-0 mb-5">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-4 mb-5 map">
								<GoogleMap config={this.state.googleMapConfig}></GoogleMap>
							</div>
							<div class="col-md-3 office-details">
								<h3>BELGRANO, BUENOS AIRES</h3>
								<p>
									Av. Cabildo 2280. Loc 38, CABA<br/>
									De Lunes a Viernes de 09 a 18hs. <br/>
									Sábados de 10 a 15hs					
								</p>
								<ul class="list-unstyled">
									<li><a href="tel:08002208733"><i class="fas fa-phone txt-yellow"></i> 0800 220 8733</a></li>
									<li><a href="tel:+541152633844"><i class="fas fa-phone txt-yellow"></i>  +54 (11) 5263 3844</a></li>
									<li><a target="_blank" href="https://api.whatsapp.com/send?phone=5491131412805"><i class="fab fa-whatsapp txt-yellow"></i>  +54 (9) 11 3141 2805 </a></li>
									<li><a href="mailto:reservas@streetrentacar.com"><i class="far fa-envelope txt-yellow"></i> reservas@streetrentacar.com</a></li>
								</ul>
							</div>
							<div class="col-md-5">
								<form>
									<input class="form-control mb-3" type="text" placeholder="Nombre y Apellido" />
									<div class="row mb-3">
										<div class="col">
											<input type="mail" class="form-control" placeholder="Mail" />
										</div>
										<div class="col">
											<input type="text" class="form-control" placeholder="Teléfono" />
										</div>
									</div>
									<textarea class="form-control mb-4" rows="5" placeholder="Dejá tu mensaje..."></textarea>
									<button type="submit" class="btn btn-street">Enviar</button>
								</form>
							</div>						
						</div>
					</div>
				</div>
            </PagesLayout>
         );
    }
}
 
export default ContactPage;