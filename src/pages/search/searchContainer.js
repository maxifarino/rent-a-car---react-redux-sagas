import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from './../../store/actions/actionsType';
import Map from './components/map/map';
import AvailabilityItem from './components/availabilityItem/availabilityItem';
import Categories from './components/categoriesCar/categoriesCar';
import SearchHeader from './containers/searchHeaderContainer';
import SpinnerComponent from './../../components/spinner/spinner';
import SearchPanelCar from './../../components/searchPanelCar/searchPanelCar';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onInitGetAvailability();
    }

    searchAvailabilityCarsHandler = (filter) => {
        this.props.onUpdateCategoryDefault();
        this.props.onGetAvailability(filter);
        window.scrollTo(0, 0);
    }

    unselectCategory = (categoryId) => {
        this.props.onsetSelectCategory(categoryId);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <main className="row row-p busqueda Step1">
                <div className="col-md-3 filters">
                    <div className="row home-form w-100 mt-5" >
                        <SearchPanelCar
                            listPlaces={this.props.listPlaces}
                            searchAvailabilityCars={this.searchAvailabilityCarsHandler}
                            filter={this.props.filter}
                        />
                    </div>
                    <Categories
                        listCategories={this.props.listCategories}
                        unselectCategory={this.unselectCategory}
                    />
                    <Map />
                </div>

                <div className="col-md-8 car-list">
                    <SearchHeader />
                    <SpinnerComponent show={this.props.spinner} />
                    {
                        this.props.listCars.map((item) => {
                            if (item.showCar) {
                                return <AvailabilityItem item={item} />
                            }
                        })
                    }
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        listPlaces: state.searchCars.listPlaces,
        listCars: state.searchCars.listCars,
        listCategories: state.searchCars.listCategories,
        spinner: state.spinner.stateSpinner,
        filter: state.searchCars.filter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onsetSelectCategory: (categoryId) => dispatch({
            type: actionType.SET_CATEGORY_SELECTED,
            payload: categoryId
        }),
        onInitGetAvailability: () => dispatch({
            type: actionType.GET_AVAILABILITY_REQUEST
        }),
        onGetAvailability: (filter) => dispatch({
            type: actionType.GET_AVAILABILITY_REQUEST,
            payload: filter
        }),
        onUpdateCategoryDefault: () => dispatch({
            type: actionType.UPDATE_CATEGORY_DEFAULT
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);