import {
    ORDER_PRODUCT
} from './Constants'

const initialState = {
    products: [
        {
            id: 1,
            name: "ბანანა",
            quantity: 23,
            price: "40₾"
        },
        {
            id: 2,
            name: "ტორტი",
            quantity: 40,
            price: "1₾"
        },
        {
            id: 3,
            name: "ვაშლი",
            quantity: 120,
            price: "3₾"
        }
    ]
}

const StoreReducer = (state = initialState, action) => {
    switch(action.type){
        case ORDER_PRODUCT: return {
            ...state,
            Cake: {
                ...state.Cake,
                quantity: state.Cake.quantity - 1
            }
        }
        default: return state
    }
}

export default StoreReducer