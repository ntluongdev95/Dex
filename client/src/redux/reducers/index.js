import { combineReducers } from "redux";
import { blockchainReducer } from "./blockchainReducer";
import { buttonReducer } from "./buttonReducer";


export default combineReducers({
    blockchain:blockchainReducer,
    button:buttonReducer,
})