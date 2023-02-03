import { combineReducers } from "redux";
import logincheck from "./logincheck";
import special from "./special";

const rootReducer = combineReducers({ special, logincheck });
export default rootReducer;