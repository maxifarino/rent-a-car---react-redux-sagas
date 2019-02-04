import React, { Component } from 'react';

class AdditionalItem extends Component {
    state = {  }
    render() { 
        return ( 
            <tr class="first">
                <td><label class="special-checkbox d-inline"><input type="checkbox" /><span class="checkmark"></span></label></td>
                <td><img width="40" class="d-inline" src={this.props.additional.imagePath} alt={this.props.additionals.name} /></td>
                <td>{this.props.additional.name}</td>
                <td class="text-right">{this.props.additional.price}</td>
            </tr>
         );
    }
}
 
export default AdditionalItem;