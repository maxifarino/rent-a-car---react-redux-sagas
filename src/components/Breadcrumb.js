import React, { Component } from 'react';
import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends Component {
    state = { 
        items: this.props.items ? this.props.items : [],
        showHome: this.props.showHome != undefined ?  this.props.showHome : true
     }

//TODO fix element name    
    render() { 
        return ( 
            <div className="col-md-12 pl-0 mb-3">
            <ol className="breadcrumb">
                {
                    this.state.showHome &&
                        <BreadcrumbItem linkInfo={{link:'/', text:'Home', isActive:false}}></BreadcrumbItem>

                }
                
                {
                    this.state.items.lenght > 0 ?
                        this.state.items.map(item => <BreadcrumbItem linkInfo={item}></BreadcrumbItem>) :
                        <BreadcrumbItem linkInfo={{link:'#', text: 'asd', isActive:true}}></BreadcrumbItem>
                }
            </ol>
        </div>
         );
    }
}
 
export default Breadcrumb;