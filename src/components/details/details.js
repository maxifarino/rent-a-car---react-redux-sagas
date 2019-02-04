import React from 'react';
import DetailsItem from '../detailsItem/detailsItem';
import { withNamespaces } from 'react-i18next';

const details = (props) => {
    const { t } = props;
    return (
        
        <div class="details">
            <DetailsItem title={t('personas')} typeIcon="person.png" item={"X" + props.item.passengers} />
            <DetailsItem title={t('ValijasGrandes')} typeIcon="luggage-lg.png" item={"X" + props.item.bigLuggage} />
            <DetailsItem title={t('ValijasChicas')} typeIcon="luggage-xs.png" item={"X" + props.item.smallLuggage} />
            <DetailsItem title={t('cajas')} typeIcon="caja.png" item={props.item.gearbox} />
            <DetailsItem title={t('aireAcondicionado')} typeIcon="caja.png" item={props.item.airConditioner ? 'SI' : 'NO'} />
            <DetailsItem title={t('ABS')} typeIcon="ABS.png" item='SI' />
            <DetailsItem title={t('direccion')} typeIcon="direction.png" item={props.item.steering} />
            <DetailsItem title={t('airbug')} typeIcon="airbug.png" item='SI' />
            <DetailsItem title={t('gps')} typeIcon="gps.png" item='NO' />
        </div>
    )
}
export default withNamespaces()(details);