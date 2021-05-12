import { GET_NUMBERS } from "./action-types";


export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting Basket Numbers");
        dispatch({
            type: GET_NUMBERS
        })
    }

}