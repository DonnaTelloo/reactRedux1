import {
    ADD_TO_CART
} from './Constants'

const initialState = {
    orderedProducts: []
};

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const arr = state.orderedProducts.push(action.payload);
            return {
                ...state,
                orderedProducts: arr
            }
        default: return state
    }
}

export default UserReducer