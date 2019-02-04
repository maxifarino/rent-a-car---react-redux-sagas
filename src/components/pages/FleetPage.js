import React, { Component } from 'react';
import PagesLayout from './PagesLayout';
import { TextSection } from '../sections/TextSection';
import { CategoryListContainer, FleetNavigator, FleetCarousel } from '../simpleComponents/CategoryListContainer';
import { Col, Row } from 'reactstrap';

class FleetPage extends Component {
	state = {  }
	
    render() { 
        return ( 
            <PagesLayout customClasses='flotaSection'>
				<TextSection title='MAYOR FLOTA DE VEHÍCULOS AUTOMÁTICOS Y 0KM DEL MERCADO' subTitle='FLOTA DE AUTOS EN ALQUILER'></TextSection>
				<Col md={12} className='p-0 mb-5'>
					<div className="container-fluid">
						<Row className="mb-5">
							<Col md={3} className="CategoryFilter">
								<CategoryListContainer>
									<FleetNavigator></FleetNavigator>
								</CategoryListContainer>		
							</Col>
							<Col md={9} className="flotaCarDetails">
								<CategoryListContainer>
									<FleetCarousel slidesToShow={1} slidesToScroll={1}></FleetCarousel>
								</CategoryListContainer>
							</Col>
						</Row>
					</div>
				</Col>
			</PagesLayout>
         );
    }
}
 

export default FleetPage;