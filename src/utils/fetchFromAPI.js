import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
    "X-RapidAPI-Host": process.env.REACT_APP_XRapidAPIHost,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
