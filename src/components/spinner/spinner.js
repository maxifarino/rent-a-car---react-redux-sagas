import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import spinner from './../../assets/spinner/loading.gif';

class SpinnerComponent extends Component {

    showSpinner = () => {
        const { t } = this.props;
        if (this.props.show) {
            return (
                <div class="spinner" >
                    <img className="spinner-image"src={spinner} alt="spinner" />
                    <div>
                        <p className="title-response-search">{t('espereUnosSegundos')}</p>
                        <p className="description-response-search">{t('opcionesParaTuViaje')}</p>
                    </div>
                </div >
            );
        } else return null;
    }

    render() {
        return (
            this.showSpinner()
        );
    }
}

export default withNamespaces()(SpinnerComponent);