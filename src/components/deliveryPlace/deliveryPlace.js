import React, { Component } from 'react';
import SearchBoxPlace from './../../UI/searchBoxPlace/searchBoxPlace';
import { withNamespaces } from 'react-i18next';

class DeliveryPlace extends Component {

    constructor(props) {
        super(props);
    }

    deliveryLinkHandler = event => {
        event.preventDefault();
        this.props.onChangeDeliveryPlaceLink();
    };

    render() {
        const { t } = this.props;
        return (
            <>
                <button
                    style={{ display: this.props.showLink ? 'block' : 'none' }}
                    onClick={this.deliveryLinkHandler}
                    className="btn differentDeliveryPlace pl-0 mb-2" >
                    {t('DiferenteLugarDeDevolucion')}
                </button>

                <div style={{ display: this.props.showDeliveryPlace ? 'block' : 'none' }}>
                    <p>{t('LugarDeDevolucion')}</p>
                    <SearchBoxPlace data={this.props.data} placeSelected={this.props.placeSelected} placeChangeHandler={this.props.placeChangeHandler} />
                </div>
            </>
        );
    }
}

export default withNamespaces()(DeliveryPlace);