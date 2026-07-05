import api from "./api";

export const getOrders = async () => {
    const res = await api.get("/orders");
    return res.data;
};

export const getOrder = async(id)=>{
    const res = await api.get(`/orders/${id}`);
    return res.data;
};

export const updateOrderStatus = async(id,status)=>{
    const res = await api.put(`/orders/${id}`,{
        order_status:status
    });
    return res.data;
};