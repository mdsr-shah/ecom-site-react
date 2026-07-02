import axios from "axios";

const API="http://localhost:5000/customers";

export const getCustomers=async()=>{

const response=await axios.get(API);

return response.data;

};