import React from 'react';
import Details from './../../../../components/details/details';
import CarPrice from './../../../../components/carPrice/carPrice';
import CarImage from './../../../../components/carImage/carImage';
import { withNamespaces } from 'react-i18next';

const availabilityItem = (props) => {
    const titleFranchise = "Debes disponer del monto en tu línea de crédito para realizar el alquiler";
    const { t } = props;

    return (
        <div className="row car-item mb-3 pt-4 pb-4 pl-4 pr-4">
            <div className="col-md-3 car-image">
                <CarImage srcImage={props.item.imagePath} altName={props.item.name} />
            </div>

            <div className="col-md-6 pl-4 car-details">
                <h2 className="car-name mt-1">{props.item.name} {props.item.doors}{t('PasajerosInicial')}</h2>
                <p className="car-category">{t('categoria')} <span>{props.item.category.name}</span></p>
                <Details item={props.item} />
                <p className="franchise mb-0">
                    <i className="fas fa-info-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title={titleFranchise}
                    ></i>
                    <strong> {t('franquicia')} </strong>
                    <span>${props.item.franchise}</span>
                </p>
            </div>

            <div class="col-md-3 text-center car-price">
                <CarPrice totalDays={props.item.totalDays} price={props.item.price} />
            </div>
        </div>
    )
}

export default withNamespaces()(availabilityItem);