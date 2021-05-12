import * as ACTION_TYPES from "../actions/action-types";

const initialState = {
    userInput: "",

}



const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_INPUT:
            return {
                ...state,
                userInput: action.payload
            }

        default:
            return state

    }

}

export default UserReducer;