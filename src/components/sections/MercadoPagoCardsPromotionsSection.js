
import React, {Component} from 'react'
import CreditCardPromotion from '../simpleComponents/CreditCardPromotion';
import Slider from 'react-slick'

export class MercadoPagoCardsPromotionsSection extends Component{
	constructor(props) {
		super(props);
		//TODO obtener desde configuracion
		this.state = {
			cards: [{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"}, 
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"},
			{imagePath:"/images/bancos/banco-1.jpg", text:"12 PAGOS SIN INTERES!"}
		]
		};
	  }
	
	render(){

			var settings = {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: 6,
				slidesToScroll: 3,
				autoplay: true,
				autoplaySpeed: 2000,
				pauseOnHover: true,
				initialSlide: 0,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			};
		
        return(
					<div className="home-banks row row-p mb-5">
						<div className="col-md-2 mb-3 text-center">
							<h4>¡PAGÁ EN CUOTAS<br/><strong>SIN INTERÉS!</strong></h4>
							<a target="_blank" href="https://www.mercadopago.com.ar/cuotas"><i className="fa fa-angle-right"></i> Ver todas las promos</a>
						</div>
						<div className="col-md-10">
							<Slider {...settings}>
								{ this.state.cards.map((c, i)=> <CreditCardPromotion key={i} card={c}></CreditCardPromotion>)}
							</Slider>
						</div>
					</div>
				);
	}
}