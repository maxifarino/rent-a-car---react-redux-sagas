import * as actionType from './../actions/actionsType';
import { formatDateWithTime } from './../../core/utils';

const initialState = {
    filter: {
        from: null,
        to: null,
        delivery: null,
        pickup: null,
        promotioncode: null,
        kmperday: null,
        typeKmPerday: null,
        idPickUp: null,
        rentlyEndpointNamePickUp: null,
        idDelivery: null,
        rentlyEndpointNameDelivery: null
    },
    deliveryPlace: {
        showLink: true,
        showDeliveryPlace: false
    },
    listCars: [],
    listPlaces: [],
    listCategories: [],
    actionBtnFindCar: null
}

const setCategoriesSuccess = (state, action) => {

    state.listCategories = [];
    state.listCars = [];
    state.listCategories.push({ id: -1, name: 'Todo', isChecked: true });
    action.payload.forEach(element => {
        state.listCategories.push({ id: element.id, name: element.name, isChecked: false });
    });

    return {
        ...state,
        listCategories: [...state.listCategories]
    }
}

const updateCategoryDefault = (state) => {
    state.listCategories[0].isChecked = true;
    state.listCategories.forEach(x => {
        if (x.id != -1) {
            x.isChecked = false;
        }
    });

    return {
        ...state,
        listCategories: [...state.listCategories]
    }
}

const setCategorySelected = (state, action) => {

    if (action.payload != -1) {
        state.listCategories[0].isChecked = false;
        state.listCategories.forEach(x => {
            if (x.id == action.payload) {
                x.isChecked = !x.isChecked;
            }
        })
    }
    else {
        state.listCategories[0].isChecked = true;
        state.listCategories.forEach(x => {
            if (x.id != -1) {
                x.isChecked = false;
            }
        })
    }

    state.listCategories.forEach(category => {
        state.listCars.forEach(car => {
            if (action.payload == -1) {
                car.showCar = true;
            } else {
                if (car.category.id == category.id)
                    car.showCar = category.isChecked;
            }
        })
    })

    return {
        ...state,
        listCategories: [...state.listCategories],
        listCars: [...state.listCars]
    }
}

const setPlacesSuccess = (state, action) => {
    state.listPlaces = [];
    action.payload.forEach((element) => {
        state.listPlaces.push({ value: element.id, label: element.name, category: element.category, rentlyEndpointName: element.rentlyEndpointName });
    });

    return {
        ...state,
        listPlaces: [...state.listPlaces]
    }
}

const setAvailabilitySuccess = (state, action) => {
    state.listCars = [];
    action.payload.forEach(element => {
        element.models.forEach(model => {
            model.showCar = true;
            state.listCars.push(model);
        })
    });

    return {
        ...state,
        listCars: [...state.listCars]
    }
}

const setActionButtonFindCar = (state, action) => {
    state.actionBtnFindCar = action.payload;
    return {
        ...state,
        ...state.actionBtnFindCar
    }
}

const setFilterAvailabilityFormat = (state, action) => {

    const fromDate = formatDateWithTime(action.payload.startDate, action.payload.pickUpHour, action.payload.pickUpMinutes);
    const toDate = formatDateWithTime(action.payload.endDate, action.payload.deliveryHour, action.payload.deliveryMinutes);
    const promotionCode = action.payload.promotionCode;
    const kmPerday = action.payload.kmPerday;
    const idPickUp = action.payload.pickUpPlace ? action.payload.pickUpPlace.value : null
    const rentlyEndpointNamePickUp = action.payload.pickUpPlace ? action.payload.pickUpPlace.rentlyEndpointName : null;
    const idDelivery = action.payload.deliveryPlace ? action.payload.deliveryPlace.value : null
    const rentlyEndpointNameDelivery = action.payload.deliveryPlace ? action.payload.deliveryPlace.rentlyEndpointName : null;

    const filter = {
        from: fromDate,
        to: toDate,
        promotioncode: promotionCode,
        kmperday: kmPerday,
        idPickUp,
        rentlyEndpointNamePickUp,
        idDelivery,
        rentlyEndpointNameDelivery,
        showLink: action.payload.showLink,
        showDeliveryPlace: !action.payload.showLink
    }

    return {
        ...state,
        filter: filter
    }
}

const cleanListCars = (state) => {
    state.listCars = [];
    return {
        ...state,
        listCars: [...state.listCars]
    }
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case actionType.UPDATE_CATEGORY_DEFAULT: return updateCategoryDefault(state);
        case actionType.SET_FORMAT_FILTER_AVAILABILITY: return setFilterAvailabilityFormat(state, action);
        case actionType.ACTION_BUTTON_FIND_CAR: return setActionButtonFindCar(state, action);
        case actionType.SET_AVAILABILITY_SUCCESS: return setAvailabilitySuccess(state, action);
        case actionType.SET_PLACES_SUCCESS: return setPlacesSuccess(state, action);
        case actionType.SET_CATEGORY_SELECTED: return setCategorySelected(state, action);
        case actionType.SET_CATEGORIE_SUCCESS: return setCategoriesSuccess(state, action);
        case actionType.CLEAN_LIST_CARS: return cleanListCars(state);
    }
    return state;
}

export default reduce;