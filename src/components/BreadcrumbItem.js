import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BreadcrumbItem extends Component {
    state = {  }
    render() { 
        return ( 
            <li className={"breadcrumb-item " + (this.props.linkInfo.isActive ? 'active' : '')}>
             {
                this.props.linkInfo.link ?
                    (<Link to={this.props.linkInfo.link}>{this.props.linkInfo.text}</Link>) : 
                    (this.props.linkInfo.text)
             }
            </li>
         );
    }
}
 
export default BreadcrumbItem;