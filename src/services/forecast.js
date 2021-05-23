import { SEARCH_CITY_API, FORECAST_WEATHER_API } from '../constants';

export const findCity = (city) => {
  const queryURL = `${SEARCH_CITY_API}?query=${city}`;
  return fetch(queryURL).then((response) => response.json());
};

export const getForecastByWoeid = (woeid) => {
  const queryURL = `${FORECAST_WEATHER_API}${woeid}/`;
  return fetch(queryURL).then((response) => response.json());
};
