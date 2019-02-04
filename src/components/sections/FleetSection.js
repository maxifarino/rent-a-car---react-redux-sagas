import React, {Component} from 'react';
import { CategoryListContainer, FleetCarousel } from '../simpleComponents/CategoryListContainer';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

class FleetSection extends Component {
	state = {  }
	
    render() { 
        return ( 
            <Row className="home-cars row-p mt-5 mb-5 pt-5 pb-5">
				<Col md={4}>
					<h3>MAYOR FLOTA DE VEHÍCULOS AUTOMÁTICOS Y 0KM DEL MERCADO</h3>
					<p className="mb-5">Street posee reposición permanente de su flota para garantizar la mejor experiencia en tu viaje. Además contamos con linea de vehículos automáticos para que puedas elegir el auto más acorde a tus gustos al volante.</p>
					<Link to={'/fleet'} className="btn btn-street" >VER FLOTA COMPLETA</Link>
				</Col>
				<Col md={{size:7, offset:1}}>
					<CategoryListContainer>
						<FleetCarousel  slidesToShow={2} slidesToScroll={2}></FleetCarousel>
					</CategoryListContainer>
				</Col>
			</Row>
         );
    }
}
 
export default FleetSection;