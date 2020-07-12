import { combineReducers } from "redux";
import view from "./view_reducer";
import sightings from "./sightings_reducer";

const rootReducer = combineReducers({ view, sightings });

export default rootReducer;
