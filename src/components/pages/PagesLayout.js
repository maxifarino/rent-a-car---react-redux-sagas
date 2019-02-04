import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb';

class PagesLayout extends Component {
    state = {  }
    
    render() { 
        const breadComp = this.props.hideBreadcrumb  ? null : <Breadcrumb></Breadcrumb>;

        return ( 
            <main className={"row row-p innerSection mb-5 " + this.props.customClasses}>
                {breadComp}
               {this.props.children}
            </main>
         );
    }
}
 
export default PagesLayout;