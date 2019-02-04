import { put, select } from "redux-saga/effects";
import axios from './../../core/axios-instance';
import * as actions from './../actions/configurations';


/* URLS */
const URL_GET_CONFIGURATIONS = 'data/getCategories';

/** GET_CONFIGURATIONS_REQUEST */
export function* getConfigurationsRequest(action) {

    const response = {
        footer: {
            ShowLogo: false,
            Subtitle: null,
            ShowSocialNetworks: false,
            ShowSitemap: false,
            ShowAfipService: false,
            AfipService: null,
            OtherPhones: []
        },
        socialNetwors: [
            { url: 'https://www.facebook.com/FansStreetRentACar/', class: 'fab fa-facebook-f' },
            { url: 'https://twitter.com/StreetRentaCar', class: 'fab fa-twitter' },
            { url: 'https://www.instagram.com/StreetRentaCar/', class: 'fab fa-instagram' }
        ]
    }
    
    yield put(actions.setConfigurationsSuccess(response));
}