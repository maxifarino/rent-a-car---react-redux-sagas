import React, { Component } from 'react';

class CreditCardPromotion extends Component {
    state = {  }

    render() { 
        const { index, ...props } = this.props;

        return ( 
            <div {...props} className='credit-card-promotion'>
		 		<img className="img-fluid" src={this.props.card.imagePath} alt="" />
                <p className="text-center">{this.props.card.text}</p>
			</div>
         );
    }
}
 
export default CreditCardPromotion;