import { ADD_PRODUCT, GET_NUMBERS } from "../actions/action-types";


const initialState = {
    basketNumbers: 0
}


export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            console.log("added")
            return {

                basketNumbers: state.basketNumbers + 1
            }
        case GET_NUMBERS:
            return {
                ...state
            }
        default:
            return state;
    }
}