import * as actionType from './../actions/actionsType';

const initialState = {
    stateSpinner: false
}

const showSpinner = (state) => {    
    return {
        ...state,
        stateSpinner:true
    }
}

const hideSpinner = (state) => {
    return {
        ...state,
        stateSpinner:false
    }
}

const reduce = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SHOW_SPINNER: return showSpinner(state);
        case actionType.HIDE_SPINNER: return hideSpinner(state);
    }

    return state;
}

export default reduce;