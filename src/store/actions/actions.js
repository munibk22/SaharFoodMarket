import * as ACTION_TYPES from "./action-types";

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}


export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const userInput = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        payload: text,

    }
}


export const addBasket = () => {

    return (dispatch) => {
        console.log("Adding to basket action types");
        dispatch({
            type: ACTION_TYPES.ADD_PRODUCT
        })

    }
}


export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting Basket Numbers");
        dispatch({
            type: ACTION_TYPES.GET_NUMBERS
        })

    }
}