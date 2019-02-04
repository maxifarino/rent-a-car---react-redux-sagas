import * as actionType from './actionsType';

/** SHOW SPINNER */
export const showSpinner = () => {    
    return {
        type: actionType.SHOW_SPINNER
    }
}

/** HIDE SPINNER */
export const hideSpinner = () => {
    return {
        type: actionType.HIDE_SPINNER
    }
}