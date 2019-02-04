import React, {Component} from 'react';

class QualificationQuoteSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-calidad parallax text-light row row-p pt-5 pb-5 text-center">
			<div className="col-md-6 offset-md-3 pb-4 pt-4">
				<p className="home-stars">
					<i className="fas fa-star txt-yellow"></i> 
					<i className="fas fa-star txt-yellow"></i>
					<i className="fas fa-star txt-yellow"></i>
					<i className="fas fa-star txt-yellow"></i>
					<i className="fas fa-star txt-yellow"></i>
				</p>
				<h4 className="mb-3">CALIDAD Y SERVICIO</h4>
				<p className="mb-4">Somos una agencia Argentina de alquiler de autos. Trabajamos día a día para ofrecer siempre el mejor servicio y precio del mercado. Nuestro trabajo es hacer que tengas una experiencia satisfactoria, por lo que nuestra flota consta de autos 0KM y damos atención personalizada a cada uno de nuestros clientes. ¡Te invitamos a hacer tu reserva online!</p>
				<p>MÁS DE<strong> 22.543</strong> CLIENTES SATISFECHOS / CALIFICACIÓN<strong> 4.85</strong></p>				
			</div>
		</div>

         );
    }
}
 
export default QualificationQuoteSection;