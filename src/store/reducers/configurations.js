import * as actionType from './../actions/actionsType';

const initialState = {
    title: null,
    subtitle: null,
    header: {
        showWhatsApp: false,
        whatsApp: null,
        showCancelBooking: false,
        showLogin: true,
        Phone: null
    },
    footer: {
        ShowLogo: false,
        Subtitle: null,
        ShowSocialNetworks: false,
        ShowSitemap: false,
        ShowAfipService: false,
        AfipService: null,
        OtherPhones: []
    },
    socialNetworks: [],
    pages: []
}

const setConfigurationsSuccess = (state, action) => {
    console.log('setConfigurationsSuccess');
    return {
        ...state,
        socialNetworks: [...action.payload.socialNetwors],
        footer: Object.assign({}, action.payload.footer)
    }
}

const reduce = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SET_CONFIGURATIONS_SUCCESS: return setConfigurationsSuccess(state, action)
    }

    return state;
}

export default reduce;