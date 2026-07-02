import axios from "axios";

const API_URL = "http://localhost:5000/checkout";

export const placeOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};