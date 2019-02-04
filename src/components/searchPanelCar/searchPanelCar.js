import React, { Component } from 'react';
import SearchBoxPlace from './../../UI/searchBoxPlace/searchBoxPlace';
import * as actionTypes from './../../store/actions/actionsType';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KilometersCheckbox from './../../UI/kilometersCheckbox/kilometersCheckbox';
import DropDowTime from './../../UI/dropDowTime/dropDowTime';
import { getHour, getminutes } from './../../core/utils';
import { withNamespaces } from 'react-i18next';
import DeliveryPlace from './../deliveryPlace/deliveryPlace';

class SearchPanelCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            pickUpHour: 0,
            pickUpMinutes: 0,
            pickUpPlace: null,
            endDate: new Date(),
            deliveryHour: 0,
            deliveryMinutes: 0,
            deliveryPlace: null,
            promotionCode: "",
            kmPerday: 200,
            kmPerdaySelected: true,
            unLimitedSelected: false,
            showLink: true,
            showDeliveryPlace: false
        }
    }

    componentDidMount() {
        if (this.props.filter) {
            this.setState({
                startDate: new Date(this.props.filter.from),
                endDate: new Date(this.props.filter.to),
                pickUpHour: getHour(this.props.filter.from),
                pickUpMinutes: getminutes(this.props.filter.from),
                deliveryHour: getHour(this.props.filter.to),
                deliveryMinutes: getminutes(this.props.filter.to),
                promotionCode: this.props.filter.promotioncode,
                pickUpPlace: this.props.filter.idPickUp ?
                    {
                        value: this.props.filter.idPickUp,
                        label: this.props.listPlaces.find(x => x.value == this.props.filter.idPickUp).label
                    } : null,
                deliveryPlace: this.props.filter.idDelivery ?
                    {
                        value: this.props.filter.idDelivery,
                        label: this.props.listPlaces.find(x => x.value == this.props.filter.idDelivery).label
                    } : null,
                kmPerdaySelected: this.props.filter.kmperday == 200,
                unLimitedSelected: this.props.filter.kmperday == 0,
                showLink: this.props.filter.showLink,
                showDeliveryPlace: this.props.filter.showDeliveryPlace
            })
        }
    }

    /** */
    searchAvailabilityCarsHandler = (e) => {
        e.preventDefault();
        this.props.searchAvailabilityCars(this.state);
    }

    /** */
    redirectHandler = (e) => {
        e.preventDefault();
        this.props.redirectToSearchPage(this.state);
    }

    /** */
    pickUpPlaceChangeHandler = (selectedOption) => {
        if (selectedOption) {
            this.setState({ pickUpPlace: { value: selectedOption.value, label: selectedOption.label, rentlyEndpointName: selectedOption.rentlyEndpointName } });
        } else {
            this.setState({ pickUpPlace: null });
        }
    }

    deliveryPlaceChangeHandler = (selectedOption) => {
        if (selectedOption) {
            this.setState({ deliveryPlace: { value: selectedOption.value, label: selectedOption.label, rentlyEndpointName: selectedOption.rentlyEndpointName } });
        } else {
            this.setState({ deliveryPlace: null });
        }
    }

    /** */
    changeStartHandler = (value) => {
        if (value >= this.state.endDate)
            this.setState({ startDate: value, endDate: value });
        else
            this.setState({ startDate: value });
    }

    /** */
    changeEndHandler = (value) => {
        if (value >= this.state.startDate)
            this.setState({ endDate: value });
    }

    /** */
    kilometersChangeHandler = (value) => {
        this.setState({ kmPerday: value });
    }

    /** */
    changePromotionCodeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    /** */
    onChangePickUpHourHandler = (value) => {
        this.setState({ pickUpHour: value['hour'] })
    }

    /** */
    onChangePickUpMinutesHandler = (value) => {
        this.setState({ pickUpMinutes: value['minutes'] })
    }

    /** */
    onChangeDeliveryHourHandler = (value) => {
        this.setState({ deliveryHour: value['hour'] })
    }

    /** */
    onChangeDeliveryMinutesHandler = (value) => {
        this.setState({ deliveryMinutes: value['minutes'] })
    }

    /** */
    onChangeDeliveryPlaceLink = () => {
        this.setState({ showLink: false, showDeliveryPlace: true });
    }

    render() {
        const { t } = this.props;
        const title = t('encontraTuVehiculo');
        const buttonRedirect = <button onClick={this.redirectHandler} className="btn btn-street">{title}</button>;
        const buttonSearchAvailability = <button onClick={this.searchAvailabilityCarsHandler} className="btn btn-street">{title}</button>;
        const elementButton = this.props.actionBtn == actionTypes.ACTION_REDIRECT ? buttonRedirect : buttonSearchAvailability;

        return (
            <form className="pt-4 pb-5 pl-4 pr-4">
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="form-group">
                            <p>{t('LugarDeEntrega')}</p>
                            <div>
                                <SearchBoxPlace data={this.props.listPlaces} placeSelected={this.state.pickUpPlace} placeChangeHandler={this.pickUpPlaceChangeHandler} ></SearchBoxPlace>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <div className="form-group">
                            <DeliveryPlace
                                showLink={this.state.showLink}
                                showDeliveryPlace={this.state.showDeliveryPlace}
                                data={this.props.listPlaces}
                                placeSelected={this.state.deliveryPlace}
                                onChangeDeliveryPlaceLink={this.onChangeDeliveryPlaceLink}
                                placeChangeHandler={this.deliveryPlaceChangeHandler} />
                        </div>
                    </div>
                </div>

                {/*component fecha de retiro*/}
                <div className="row mt-1">
                    <div className="col-lg-6 col-md-6 col-6">
                        <p>{t('fechaDeRetiro')}</p>
                        <div className="form-group">
                            <div className="input-group date" data-target-input="nearest">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        selectsStart
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onChange={this.changeStartHandler}
                                        className="form-control datetimepicker-input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <p>{t('fechaDeDevolucion')}</p>
                        <div className="form-group">
                            <div className="input-group date">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        selectsEnd
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onChange={this.changeEndHandler}
                                        className="form-control datetimepicker-input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*component hora de retiro*/}
                <div className="row mt-1">
                    <div className="col-lg-6 col-md-6 col-6">
                        <p>{t('horaDeRetiro')}</p>
                        <div className="form-group">
                            <div className="input-group date" data-target-input="nearest">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="far fa-clock"></i></div>
                                </div>
                                <DropDowTime
                                    hour={this.state.pickUpHour}
                                    minutes={this.state.pickUpMinutes}
                                    onChangeHourHandler={this.onChangePickUpHourHandler}
                                    onChangeMinutesHandler={this.onChangePickUpMinutesHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <p>{t('horaDeDevolucion')}</p>
                        <div className="form-group">
                            <div className="input-group date" data-target-input="nearest">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="far fa-clock"></i></div>
                                </div>
                                <DropDowTime
                                    hour={this.state.deliveryHour}
                                    minutes={this.state.deliveryMinutes}
                                    onChangeHourHandler={this.onChangeDeliveryHourHandler}
                                    onChangeMinutesHandler={this.onChangeDeliveryMinutesHandler} />
                            </div>
                        </div>
                    </div>
                </div>

                {/*component Kilometros*/}
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <p className="mb-3">{t('kilometros')}</p>
                        <KilometersCheckbox
                            kilometersChange={this.kilometersChangeHandler}
                            kmPerday={this.state.kmPerdaySelected}
                            unLimited={this.state.unLimitedSelected} />
                    </div>

                    <div className="col-md-6">
                        <p>{t('codigoDePromocion')}</p>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="fas fa-star"></i></div>
                                </div>
                                <input
                                    type="text"
                                    name='promotionCode'
                                    value={this.state.promotionCode}
                                    onChange={this.changePromotionCodeHandler}
                                    className="form-control datetimepicker-input"
                                    placeholder={t('EscribiTuCodigo')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        {elementButton}
                    </div>
                </div>
            </form>

        );
    }
}

export default withNamespaces()(SearchPanelCar);