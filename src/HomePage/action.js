//import { fetchAction } from "../fetchAction";

const fetchAction = (action) => {
  const { endpoint, payload, verb } = action;

  const result = new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: verb,
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => console.log("error: ",error));
  });
  return result;
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URI = process.env.REACT_APP_BASE_URI;

export const getBannerEvents =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/highlight/`,
  }).then((res) => callback(res))
}

export const getUpcommingEvents =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/upcoming/`,
  }).then((res) => callback(res))
}

export const getRecentEvents =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/recent/`,
  }).then((res) => callback(res))
}

export const getAboutUs =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/about_us/`,
  }).then((res) => callback(res))
}

export const getEventTypes =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/choices/event_types/`,
  }).then((res) => callback(res))
}

export const getPeopleSpeakers =({callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/7/people/speakers/`,
  }).then((res) => callback(res))
}

export const getFilterUpcomming =({eventId, callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/upcoming/?event_type=${eventId}`,
  }).then((res) => callback(res))
}
export const getFilterRecent =({eventId, callback}) => {
  return fetchAction({
    endpoint: `${BASE_URL+BASE_URI}/base/events/recent/?event_type=${eventId}`,
  }).then((res) => callback(res))
}