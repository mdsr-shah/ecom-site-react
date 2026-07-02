import axios from "axios";

const API = "http://localhost:5000/settings";

export const getSettings = async () => {

  const response = await axios.get(API);

  return response.data;

};

export const updateSettings = async (data) => {

  const response = await axios.put(API, data);

  return response.data;

};