import { combineReducers } from "redux";
import apartmentsReducer from "./apartments/apartments.reducer";

const reducers = combineReducers({
    apartmentsReducer
});

export default reducers;