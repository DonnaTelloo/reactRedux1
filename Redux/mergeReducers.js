import { combineReducers } from 'redux';
import StoreReducer from './Store/Reducer';
import UserReducer from './User/Reducer';

const rootReducer = combineReducers({
    STORE: StoreReducer,
    USER: UserReducer
})

export default rootReducer;