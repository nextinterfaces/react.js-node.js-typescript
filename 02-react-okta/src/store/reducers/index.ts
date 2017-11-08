import { combineReducers } from "redux";
import ContextReducer from "./ContextReducer";
import UIReducer from "./UIReducer";

export default combineReducers({
    context: ContextReducer,
    uiReducer: UIReducer
});
