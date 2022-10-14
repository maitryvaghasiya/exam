import { combineReducers } from "redux";
import { authUserReducer } from "./auth.reducer";
import { homeReducer } from "./home.reducer";

export const rootReducer = combineReducers({
    auth : authUserReducer,
    home: homeReducer
})