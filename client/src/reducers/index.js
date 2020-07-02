import { combineReducers } from "redux";
import loginStatus from "./logInStatus";
import view from "./view";

const rootReducer = combineReducers({
	loginStatus,
	view,
});

export default rootReducer;
