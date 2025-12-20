import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API;

import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECAST_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  SET_CITY,
} from "../constants/constants";

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};

export const fetchCurrentWeather = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER,
    payload: data,
  };
};

export const fetchForecastWeather = (data) => {
  return {
    type: FETCH_FORECAST_WEATHER,
    payload: data,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

// -----  Thunk -------
export const fetchWeather = (city) => {
  // this function was provided by the middleware
  return async (dispatch) => {
    dispatch(fetchWeatherPending());
    try {
      const currentWeather = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const forecastDetails = await axios(
        `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      // console.log(response);
      // console.log(forecastDetails);

      dispatch(fetchCurrentWeather(currentWeather.data));
      dispatch(fetchForecastWeather(forecastDetails.data.list));
    } catch (error) {
      dispatch(fetchWeatherError("Something went wrong"));
    }
  };
};
