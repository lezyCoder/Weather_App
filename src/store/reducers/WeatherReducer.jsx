import { useReducer } from "react";

import {
  FETCH_CURRENT_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_FORECAST_WEATHER,
  SET_CITY,
  FETCH_WEATHER_PENDING,
} from "../constants/constants";


const initialState = {
  city: "Delhi",
  loading: false,
  error: null,
  currentWeather: null,
  forecastWeather: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING: {
      return { ...state, loading: true, error: null };
    }
    case FETCH_CURRENT_WEATHER: {
      return {
        ...state,
        loading: false,
        currentWeather: action.payload,
      };
    }
    case FETCH_FORECAST_WEATHER: {
      return {
        ...state,
        loading: false,
        forecastWeather: action.payload,
      };
    }
    case FETCH_WEATHER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    default:
      return state;
  }
};
