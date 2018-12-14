import { combineReducers } from 'redux';
import ContatosReducer from './contatos';
/**
 * Importa os reducers
 */
const rootReducer = combineReducers({
    contatos : ContatosReducer
});

export default rootReducer;