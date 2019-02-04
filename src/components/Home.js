import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionType from './../store/actions/actionsType';
import { HomeTextSection } from './sections/TextSection'
import PromotionsSection from './sections/PromotionsSection';
import FleetSection from './sections/FleetSection';
import QualificationQuoteSection from './sections/QualificationQuoteSection';
import SearchSection from './sections/SearchSection';
import { MercadoPagoCardsPromotionsSection } from './sections/MercadoPagoCardsPromotionsSection';

class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInitActionButtonSearchAvailability();
    this.props.onInitPlaces();
    this.props.onInitCategories();
  }

  redirectToSearchPageHandler = (filter) => {
    this.props.onSetFormatFilterAvailability(filter);
    this.props.history.push("/search");
  }
 
  render() {
    return (
      <>
        <SearchSection
          listPlaces={this.props.listPlaces}
          actionBtn={this.props.actionBtnFindCar}
          redirectToSearchPage={this.redirectToSearchPageHandler}          
        />

        <HomeTextSection title="ALQUILER DE AUTOS EN BUENOS AIRES" subTitle="COMPRÁ SEGURO CON LA MEJOR FINANCIACIÓN" ></HomeTextSection>
        <MercadoPagoCardsPromotionsSection ></MercadoPagoCardsPromotionsSection>
        <PromotionsSection ></PromotionsSection>
        <FleetSection></FleetSection>
        <QualificationQuoteSection></QualificationQuoteSection>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    listPlaces: state.searchCars.listPlaces,
    listCars: state.searchCars.listCars,
    listCategories: state.searchCars.listCategories,
    actionBtnFindCar: state.searchCars.actionBtnFindCar
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPlaces: () => dispatch({
      type: actionType.GET_PLACES_REQUEST
    }),
    onInitCategories: () => dispatch({
      type: actionType.GET_CATEGORIES_REQUEST
    }),
    onInitActionButtonSearchAvailability: () => dispatch({
      type: actionType.ACTION_BUTTON_FIND_CAR,
      payload: actionType.ACTION_REDIRECT
    }),
    onSetFormatFilterAvailability: (filter) => dispatch({
      type: actionType.SET_FORMAT_FILTER_AVAILABILITY,
      payload: filter
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
