// import data from ""
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(rootReducer, composeWithDevTools());

export default store;
