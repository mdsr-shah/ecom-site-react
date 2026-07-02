import axios from "axios";

const API = "http://localhost:5000/orders";

export const getOrders = async () => {
    const res = await axios.get(API);
    return res.data;
};

export const getOrder = async(id)=>{
    const res = await axios.get(`${API}/${id}`);
    return res.data;
};

export const updateOrderStatus = async(id,status)=>{
    const res = await axios.put(`${API}/${id}`,{
        order_status:status
    });
    return res.data;
};