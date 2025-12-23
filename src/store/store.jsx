import { applyMiddleware, compose, createStore } from "redux";
import { weatherReducer } from "./reducers/WeatherReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
// const reduxDevtools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
