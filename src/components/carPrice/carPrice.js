import React from 'react';
import { withNamespaces } from 'react-i18next';

const carPrice = (props) => {
    const { t } = props;
    return (
        <>
            <p className="rent-days mb-0 mt-2">{t('alquilerPor')}<span> {props.totalDays} </span>{t('dias')}</p>
            <p className="rent-price mt-0 mb-0"><span>{t('ARS')}</span>  {props.price}</p>
            <a className="btn btn-street main-btn d-block mt-1 mb-3" href="busqueda-2.html">{t('reservarEnMostrador')}</a>
            <a className="second-btn d-block" href="#"><i class="fas fa-angle-right"></i> {t('pagoOnline')} <strong> ARS $2.820</strong></a>
        </>
    );
}

export default withNamespaces()(carPrice);