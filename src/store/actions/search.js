import * as actionType from './actionsType';

/** SET_FILTER_SEARCH_CARS */
export const setFilterSearchCars = (filterData) => {
    return {
        type: actionType.SET_FILTER_SEARCH_CARS,
        payload: filterData
    }
}

/** GET_AVAILABILITY_SUCCESS */
export const getAvailabilitySuccess = (availabilityData) => {    
    return {
        type: actionType.SET_AVAILABILITY_SUCCESS,
        payload: availabilityData
    }
}

/** GET_PLACES_SUCCESS */
export const getPlacesSuccess = (placesData) => {
    return {
        type: actionType.SET_PLACES_SUCCESS,
        payload: placesData
    }
}

/** SET_CATEGORIES_SUCCESS */
export const setCategoriesSuccess = (categoriesData) => {
    return {
        type: actionType.SET_CATEGORIE_SUCCESS,
        payload: categoriesData
    }
}

/** SET_SELECTED_CATEGORY */
export const setCategorySelected = (categorieData) => {
    return {
        type: actionType.SET_CATEGORY_SELECTED,
        payload: categorieData
    }
}

/**ACTION_BUTTON_FIND_CAR */
export const setActionBtnFindCar = (typeAction) => {
    return {
        type: actionType.ACTION_BUTTON_FIND_CAR,
        payload: typeAction
    }
}

/**SET_FORMAT_FILTER_AVAILABILITY */
export const setFormatFilterAvailability = (action) => {    
    return {
        type: actionType.SET_FORMAT_FILTER_AVAILABILITY,
        payload: action.payload
    }
}

/**CLEAN_LIST_CARS */
export const cleanListCars = (action) => {    
    return {
        type: actionType.CLEAN_LIST_CARS
    }
}

