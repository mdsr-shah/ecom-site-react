const CustomersTable=({

customers

})=>{

return(

<div className="product-table">

<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Email</th>

<th>City</th>

<th>Orders</th>

<th>Total Spent</th>

<th>Joined</th>

</tr>

</thead>

<tbody>

{

customers.map(customer=>(

<tr key={customer.user_id}>

<td>

#{customer.user_id}

</td>

<td>

{customer.full_name}

</td>

<td>

{customer.email}

</td>

<td>

{customer.city}

</td>

<td>

{customer.total_orders}

</td>

<td>

Rs. {customer.total_spent}

</td>

<td>

{

new Date(

customer.created_at

).toLocaleDateString()

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

};

export default CustomersTable;