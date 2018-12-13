import { combineReducers } from 'redux';
import status from './status';
import contatos from './contatos';
/**
 * Importa os reducers
 */
const rootReducer = combineReducers({
    status,
    contatos
});

export default rootReducer;