import { combineReducers } from "redux";
import special from "./special";

const rootReducer = combineReducers({ special: special });
export default rootReducer;