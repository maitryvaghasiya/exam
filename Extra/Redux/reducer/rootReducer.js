import { combineReducers } from "redux";
import { authUserReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
    auth : authUserReducer
})