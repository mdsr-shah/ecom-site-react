import api from "./api";

export const placeOrder = async (orderData) => {
  const response = await api.post("/checkout", orderData);
  return response.data;
};