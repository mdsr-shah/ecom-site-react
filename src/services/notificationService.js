import axios from "axios";

const API = "http://localhost:5000/notifications";

export const getNotifications = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const getUnreadCount = async () => {
  const res = await axios.get(`${API}/count`);
  return res.data;
};

export const markAllRead = async () => {
  const res = await axios.put(`${API}/read`);
  return res.data;
};