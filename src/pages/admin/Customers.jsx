import {useEffect,useState} from "react";

import CustomerToolbar from "../../components/admin/CustomerToolbar";

import CustomersTable from "../../components/admin/CustomersTable";

import {getCustomers} from "../../services/customerService";

const Customers=()=>{

const [customers,setCustomers]=useState([]);

const [search,setSearch]=useState("");

const fetchCustomers=async()=>{

try{

const data=await getCustomers();

setCustomers(data);

}

catch(err){

console.log(err);

}

};

useEffect(()=>{

fetchCustomers();

},[]);

const filteredCustomers=customers.filter(customer=>

customer.full_name.toLowerCase().includes(search.toLowerCase())

||

customer.email.toLowerCase().includes(search.toLowerCase())

);

return(

<>

<CustomerToolbar

search={search}

setSearch={setSearch}

/>

<CustomersTable

customers={filteredCustomers}

/>

</>

);

};

export default Customers;