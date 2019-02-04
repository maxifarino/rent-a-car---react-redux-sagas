import React, { Component } from 'react';

class CarDetailItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="details-item">
                <img data-toggle="tooltip" data-placement="top" title={this.props.detail.title} src={this.props.detail.imagePath} alt="" />
                <p>{this.props.detail.text}</p>
            </div>
         );
    }
}
 
export default CarDetailItem;