import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherReducer";

const rootReducer = combineReducers({
  weatherDetails: weatherReducer,
});

export default rootReducer;
