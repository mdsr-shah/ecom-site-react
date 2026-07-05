import api from "./api";

export const getNotifications = async () => {
  const res = await api.get("/notifications");
  return res.data;
};

export const getUnreadCount = async () => {
  const res = await api.get("/notifications/count");
  return res.data;
};

export const markAllRead = async () => {
  const res = await api.put("/notifications/read");
  return res.data;
};