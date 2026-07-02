import axios from "axios";

const API="http://localhost:5000/dashboard";

export const getDashboard=async()=>{

const response=await axios.get(API);

return response.data;

};