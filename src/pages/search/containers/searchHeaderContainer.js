import React, { Component } from 'react';

import BreadCrumb from './../containers/breadcrumbContainer';
import BreadCrumbItem from './../components/breadcrumbItem/breadcrumbItem';
import Notification from './../components/notification/notification';

class SearchHeaderContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row pl-0">
                <div class="col-md-6 pl-0">
                    <BreadCrumb>
                        <BreadCrumbItem active title="Busqueda" />
                        <BreadCrumbItem title="Checkout" />
                        <BreadCrumbItem title="Pago" />
                    </BreadCrumb>
                </div>
                <Notification />
            </div>
        );
    }

}

export default SearchHeaderContainer;