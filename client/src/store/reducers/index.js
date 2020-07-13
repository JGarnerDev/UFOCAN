import { combineReducers } from "redux";
import view from "./view_reducer";
import sightings from "./sightings_reducer";
import map from "./map_reducer";

const rootReducer = combineReducers({ view, sightings, map });

export default rootReducer;
