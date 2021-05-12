import { createStore } from "redux";
import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null,

}

// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case actionTypes.ADD_TO_CART:
//             return {}
//         case actionTypes.REMOVE_FROM_CART:
//             return {}

//         case actionTypes.LOAD_CURRENT_ITEM:
//             return {}
//         default:
//             return;

//     }
// }


function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return state.concat([action.payload])
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state
    }
}

const shopReducer = createStore(todosReducer)


export default shopReducer;
