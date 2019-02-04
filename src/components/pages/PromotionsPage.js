import React, { Component } from 'react';
import PagesLayout from './PagesLayout';
import { PromotionList, PromotionListContainer } from '../simpleComponents/Promotion';
import { TextSection } from '../sections/TextSection';

class PromotionsPage extends Component {
    state={}

    render() { 
        return ( 
            <PagesLayout>
                <TextSection title="DISFRUTÁ DE TU ALQUILER AL MEJOR PRECIO CON LAS PROMOS DE STREET" subTitle="PROMOCIONES PARA ALQUILAR AUTOS" ></TextSection>
                <div class="col-md-12 p-0 mb-5">
                    <div class="container-fluid">
                        <PromotionListContainer>
                            <PromotionList ></PromotionList>
                        </PromotionListContainer>
                    </div>
                </div>
            </PagesLayout>
         );
    }
}
 
export default PromotionsPage;