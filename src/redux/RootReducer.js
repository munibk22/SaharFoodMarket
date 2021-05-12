import { combineReducers } from "redux";
import shopReducer from "./Shopping/shopping-reducer";


const reducer = (state, action) => {
    return { shop: shopReducer }
}

// const rootReducer = combineReducers({
//     shop: shopReducer,

// });

export default reducer;
