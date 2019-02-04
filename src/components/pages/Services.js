import React, { Component } from 'react';
import PagesLayout from './PagesLayout';
import { TextSection } from '../sections/TextSection';
import {Row} from 'reactstrap'

class ServiceItem extends Component{
	state={}

	render(){
		return(
			<div className="col-md-3 text-center">
				<img className="mb-4" src={this.props.imagePath} />
				<h4>{this.props.name}</h4>
				<p className="description pl-3 pr-3 mb-4">{this.props.description}</p>
				<p className="btn btn-street mb-5">{this.props.price}</p>
			</div>
		);
	}
}

class ServiceCategory extends Component{
	state={
		categories: []
	}

	render(){
		return(
			<>
			{
				this.props.categories.map(category => 
					<div className="card mb-4">
				    	<div className="card-header" id="headingOne">
				      		<h5 className="mb-0">
					        	<button className="btn btn-link float-left" data-toggle="collapse" data-target={'#' + category.name}aria-expanded="true" aria-controls={category.name}>
					          	{category.name}
					        	</button>
					        	<button className="btn btn-link float-right" data-toggle="collapse" data-target={'#' + category.name} aria-expanded="true" aria-controls={category.name}>
					          	<i class="fas fa-angle-down"></i>
					        	</button>
				      		</h5>
				    	</div>
						<div id={category.name} className="collapse show" aria-labelledby="headingOne" data-parent={'#' + category.name}>
						    <div className="card-body container-fluid">
						        <Row>
									{category.items.map(item => <ServiceItem {...item}></ServiceItem>)}
								</Row>
							</div>
						</div>
					</div>
				)
			}
			</>	
		);
		
	}
}

class ServicesPage extends Component {
	//TODO get services from server
    state = { 
		services:[
			{
				name:'Adicionales',
				items:[
					{name:'Permiso Mercosur',
					description: 'Podés solicitar tu permiso para salir del país con nuestros vehículos. El mismo tiene costo adicional y debe solicitarse al momento de efectuar la reserva. ¡La aventura no tiene límites!',
					imagePath:'images/adicionales/02/permiso-mercosur.png',
					price:'$3.100'},
					{name:'Tanque Lleno',
					description: '¡No pierdas tiempo! Elegí el adicional Tanque lleno y nosotros nos encargamos de llenar el tanque cuando devuelvas el vehículo.',
					imagePath:'images/adicionales/02/tanque-lleno.png',
					price:'$3.100'},
					{name:'Silla niños',
					description: '¿Planeas un viaje en familia? Contamos con sillas para niños para que puedan viajar cómodos y seguros.',
					imagePath:'images/adicionales/02/silla-bebe.png',
					price:'$3.100'},
					{name:'GPS',
					description: 'Podés incluir como adicional un GPS para recorrer la ciudad sin problemas! Nuestros dispositivos cuentan con la versión actualizada de software.',
					imagePath:'images/adicionales/02/gps.png',
					price:'$3.100'}
				]
			},
			{
				name:'Seguros Extras',
				items:[
					{name:'Reducción de Franquicia', description:'Ahora Street cuenta con el servicio de reducción de franquicia . Contratando este adicional disminuye un 50% el monto de franquicia del vehículo!', imagePath:'images/adicionales/02/reduccion-franquicia.png', price:'$3.100'},
					{name:'Conductor adicional', description:'No hace falta que el conductor sea sólo uno, presentando registro, podés agregar un conductor adicional a tu viaje!', imagePath:'images/adicionales/02/conductor-adicional.png', price:'$3.100'},
					{name:'Protección de cristales', description:'Con este adicional sumás a la cobertura seguro para cristales laterales. Viajá sin preocupaciones!', imagePath:'images/adicionales/02/proteccion-cristales.png', price:'$3.100'},
					{name:'Co-seguro menores 25', description:'Este adicional deberá ser contratado por cualquier menor de 25 años que quisiera conducir.', imagePath:'images/adicionales/02/coseguro-25.png', price:'$3.100'}
				]
			},
			{
				name: 'Servicios Especiales',
				items:[
					{
						name:'Aeropuerto',imagePath:'images/adicionales/02/aeropuerto.png', price:'$3.100', description:'Ofrecemos servicios de entrega y recepción en Aeroparque Jorge Newberry (C.A.B.A. Bs.As.) y Ministro Pistarini (Ezeiza, Bs.As.), y Predio de Buquebús (Puerto Madero, Bs.As.). Por favor envíenos su número de vuelo y horario de llegada a <a href="mailto:info@streetrentacar.com">info@streetrentacar.com</a>'
					},
					{
						name:'Asistencia Mecánica', price:'$3.100', imagePath:'images/adicionales/02/asistencia-mecanica.png',
						description:'Todos nuestros vehículos cuentan con asistencia mecánica y servicio de grúa. El mismo se encuentra disponible las 24 horas, los 7 días de la semana.'
					},
					{
						name:'Entrega/devolución 24hs',
						price:'$3.100',
						imagePath:'images/adicionales/02/fuera-horario.png',
						description:'Para tu mayor comodidad realizamos entregas y devolucion las 24 hs del día!'
					}
				]
			}
		]
	 }

    render() { 
        return ( 
            <PagesLayout customClasses='servicesSection'>
				<TextSection title='OFRECEMOS UNA ÁMPLIA VARIEDAD DE SERVICIOS PARA FACILITAR TU VIAJE' subTitle='SERVICIOS DE ALQUILER DE AUTOS'></TextSection>
				
			<div className="col-md-12 p-0 mb-5">
				<div id="accordion">
					<ServiceCategory categories={this.state.services}></ServiceCategory>
				</div>
			</div>
            </PagesLayout>
         );
    }
}
 
export default ServicesPage;