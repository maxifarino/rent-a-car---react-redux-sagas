import * as actionType from './actionsType';

/** SET_CONFIGURATIONS_SUCCESS */
export const setConfigurationsSuccess = (configurations) => {    
    return {
        type: actionType.SET_CONFIGURATIONS_SUCCESS,
        payload: configurations
    }
}