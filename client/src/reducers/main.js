import { combineReducers } from "redux";
import logReducer from "./isLogged";

const allReducers = combineReducers({
	loggedIn: logReducer,
	
});

export default allReducers;
