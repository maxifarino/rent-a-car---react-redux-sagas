import { put, select } from "redux-saga/effects";
import * as actions from './../actions/search';
import * as spinnerActions from './../actions/spinner';
import axios from './../../core/axios-instance';
import { getFilter } from './../selectors/selectors';

const URL_GET_CATEGORIES = 'data/getCategories';
const URL_GET_PLACES = 'data/getPlaces';
const URL_GET_AVAILABILITY = 'data/getCategories';


/** SET_AVAILABILITY_REQUEST */
export function* getAvailabilityRequest(action) {

    yield put(actions.cleanListCars());
    yield put(spinnerActions.showSpinner());

    if (action && action.payload)
        yield put(actions.setFormatFilterAvailability(action));

    const filterResponse = yield select(getFilter);
    const response = yield axios.get(URL_GET_CATEGORIES);
    yield put(spinnerActions.hideSpinner());
    yield put(actions.getAvailabilitySuccess(response.data));
}

/** GET_PLACES_REQUEST */
export function* getPlacesRequest(action) {
    const response = yield axios.get(URL_GET_PLACES);
    yield put(actions.getPlacesSuccess(response.data));
}

/** GET_CATEGORIES_REQUEST */
export function* getCategoriesRequest(action) {
    const response = yield axios.get(URL_GET_CATEGORIES);
    yield put(actions.setCategoriesSuccess(response.data));
}