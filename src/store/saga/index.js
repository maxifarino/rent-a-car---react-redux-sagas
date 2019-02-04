import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionsType from './../actions/actionsType';
import { getAvailabilityRequest, getPlacesRequest, getCategoriesRequest } from './search';
import { getConfigurationsRequest } from './configurations';

export function* car() {    
    yield takeEvery(actionsType.GET_AVAILABILITY_REQUEST, getAvailabilityRequest);
    yield takeEvery(actionsType.GET_PLACES_REQUEST, getPlacesRequest);
    yield takeEvery(actionsType.GET_CATEGORIES_REQUEST, getCategoriesRequest);    
}

export function* configurations() {    
    yield takeEvery(actionsType.GET_CONFIGURATIONS_REQUEST, getConfigurationsRequest);
}