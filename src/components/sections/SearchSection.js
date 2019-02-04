import React, { Component } from 'react';
import SearchPanelCar from './../searchPanelCar/searchPanelCar';
import { withNamespaces } from 'react-i18next';

class SearchSection extends Component {

    render() {
        const { t } = this.props;

        return (
            <main className="row slider">
                <section className="home-form col-md-5">
                    <h3 className="quote">{t('ViajarEsVivir')}</h3>
                    <SearchPanelCar listPlaces={this.props.listPlaces} actionBtn={this.props.actionBtn} redirectToSearchPage={this.props.redirectToSearchPage}></SearchPanelCar>
                </section>
            </main>
        );
    }
}

export default withNamespaces()(SearchSection);