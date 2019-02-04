import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PromotionListContainer, { PromotionCarousel } from '../simpleComponents/Promotion';

class PromotionsSection extends Component {
    state = {  }
    render() { 
        return (  
          <div className="home-promos row">
            <div className ="container-fluid">
              <div className ="row row-p mt-5 mb-5">
                <div className="col-md-4 pt-5 pb-5">
                  <h3>GRANDES VIAJES,<br/>GRANDES PROMOCIONES</h3>
                  <p className="mb-5 lead">QUEREMOS LO MEJOR PARA TU VIAJE, CONOCÉ LAS PROMOS QUE TENEMOS PARA VOS!</p>
                  <Link to={'/promotions'} className="btn btn-street">VER TODAS LAS PROMOS</Link>
                </div>
                <div className="col-md-7 offset-md-1">
                  <PromotionListContainer>
                    <PromotionCarousel></PromotionCarousel>
                  </PromotionListContainer>
                </div>          
              </div>
            </div>
          </div>
        );
    }
}
 
export default PromotionsSection;