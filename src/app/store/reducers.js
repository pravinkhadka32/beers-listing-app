import { combineReducers } from 'redux';
import { homeReducers } from '../../home';

const createRootReducer = () =>
    combineReducers({
        ...homeReducers
    });

export default createRootReducer;