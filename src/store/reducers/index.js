import { combineReducers } from "redux"
import { basketReducer } from "./basketReducer"
import Reducer1 from "./reducer1"
import UserReducer from "./user_reducer"

const rootReducer = combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer,
    basketReducer: basketReducer
})

export default rootReducer