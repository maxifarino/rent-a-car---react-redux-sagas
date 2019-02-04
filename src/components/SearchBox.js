import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Select, { components } from 'react-select';
import { PlacesListContainer } from './simpleComponents/PlaceListContainer';
import { Route, Link } from 'react-router-dom';


export class PlaceCarousel extends Component {
    state = {}


    render() {

        const Option = (props) => {            
            return (
                <components.Option {...props}>
                    <i className={"fas mr-2 " + (props.data.category == 'airport' ? "fa-plane" : "fa-building")}></i>
                    {props.data.name}
                </components.Option>
            );
        };

        const ValueContainer = ({ children, ...props }) => (
            <components.ValueContainer {...props}>
                <i style={{ color: props.theme.colors.primary25 }} className="fas fa-map-marker-alt"></i>
                {children}
            </components.ValueContainer>
        );

        return (
            <Select
                isClearable
                isLoading={this.props.isLoading}
                isDisabled={this.props.isLoading}
                options={this.props.places}
                components={{ Option, ValueContainer }}
                styles={{
                    input: base => ({
                        ...base,
                        marginLeft: '10px'
                    }),
                    placeholder: base => ({
                        ...base,
                        marginLeft: "20px"
                    }),
                    singleValue: base => ({
                        ...base,
                        marginLeft: "20px"
                    })
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#FCDE2F',
                        primary: 'black',
                    }
                })}
            />
        );
    }
}

export class SearchBox extends Component {

    render() {
        const { t } = this.props;




        return (

            <form className="pt-4 pb-4 pl-4 pr-4">
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="form-group">
                            <p>{t("deliveryPlace")}</p>
                            <PlacesListContainer>
                                <PlaceCarousel {...this.props}></PlaceCarousel>

                            </PlacesListContainer>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button type="button" class="btn differentDeliveryPlace pl-0 mb-2" data-toggle="collapse" data-target="#Address2btn">Diferente lugar de devolución</button>
                        <div id="Address2btn" class="collapse">
                            <div class="form-group">
                                <p>Lugar de devolución</p>
                                <div class="input-group">
                                    <div class="input-group-append">
                                        <div class="input-group-text"><i class="fas fa-map-marker-alt"></i></div>
                                    </div>
                                    <select id="Address1" class="form-control datetimepicker-input">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-lg-3 col-md-6 col-6">
                        <p>Fecha de Retiro</p>
                        <div class="form-group">
                            <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
                                <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
                                </div>
                                <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6">
                        <p>Hora de Retiro</p>
                        <div class="form-group">
                            <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
                                <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="far fa-clock"></i></div>
                                </div>
                                <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6">
                        <p>Fecha de Devolución</p>
                        <div class="form-group">
                            <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
                                <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
                                </div>
                                <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6">
                        <p>Hora de Devolución</p>
                        <div class="form-group">
                            <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
                                <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="far fa-clock"></i></div>
                                </div>
                                <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <p className="mb-3">Kilómetros</p>
                        <label className="special-checkbox d-inline mr-3">200 Km diarios
            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="special-checkbox d-inline">KM ilimitados
            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <p>Código promocional</p>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="input-group-text"><i className="fas fa-star"></i></div>
                                </div>
                                <input type="text" className="form-control datetimepicker-input" placeholder="Escribí tu código" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-3">
                    <div className="col-md-12">
                        <Link to="/search" className="btn btn-street">ENCONTRÁ TU VEHICULO</Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default withNamespaces()(SearchBox)