import { createStore } from "redux";
import rootReducer from './mergeReducers'

const store = createStore(rootReducer);

export default store;