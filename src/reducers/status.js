import {
    ERROR_ALERT
} from '../actions';

/**
 * Reducer que gerencia actions relacionadas a modal de status
 */
function status(state = [], action) {
    switch (action.type) {
        case ERROR_ALERT:
            return errorMessage(state, action);
        default:
            return state;
    }
}

function errorMessage(state, action){
    if(action.payload.error_message){
        return {
            icon: 'fa fa-close fa-2x',
            className: 'alert-danger',
            message: action.payload.error_message,
            autohide: true,
            showModal: true
        };
    }
}

export default status;