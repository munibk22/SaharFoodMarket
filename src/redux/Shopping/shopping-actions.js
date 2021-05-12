import * as actionsTypes from "./shopping-types";




export const addToCart = (id) => {
    return {
        type: actionsTypes.ADD_TO_CART,
        payload: {
            id: id
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionsTypes.REMOVE_FROM_CART,
        payload: {
            id: id
        }
    }
}


// export const adjustQty = (id, value) => {
//     return {
//         type: actionsTypes.ADJUST_QTY,
//         payload: {
//             id: id,
//             qty: value,

//         }
//     }
// }

export const loadCurrentItem = (item) => {
    return {
        type: actionsTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}