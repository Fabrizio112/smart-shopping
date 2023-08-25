import { ACTIONS, initialProductsState } from "../helpers/const";


export const CartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            const existProductAdd = state.findIndex(product => product.id === action.payload.id)
            if (existProductAdd < 0) {
                const newState = [...state, action.payload]
                return newState
            } else {
                const newState = structuredClone(state)
                newState[existProductAdd].quantity += 1
                return newState
            }
        case ACTIONS.REMOVE_FROM_CART:
            const existProductRemove = state.findIndex(product => product.id === action.payload.id)
            const newState = structuredClone(state)
            newState[existProductRemove].quantity -= 1
            if (newState[existProductRemove].quantity === 0) {
                return state.filter(el => el.id != action.payload.id)
            }
            return newState
        case ACTIONS.CLEAN_CART:
            return initialProductsState
        default:
            break;
    }

}