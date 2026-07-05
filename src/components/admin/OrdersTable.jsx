import { getOrder } from "../../services/orderService";

const OrdersTable = ({
    orders,
    setSelectedOrder,
    setShowModal
})=>{

    const openOrder = async(id)=>{

        try{

            const data = await getOrder(id);

            setSelectedOrder(data);

            setShowModal(true);

        }

        catch(err){

            console.log(err);

        }

    };

    return(

<div className="product-table">

<table>

<thead>

<tr>

<th>ID</th>

<th>Customer</th>

<th>Total</th>

<th>Status</th>

<th>Date</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

orders.map(order=>(

<tr key={order.order_id}>

<td>#{order.order_id}</td>

<td>{order.full_name}</td>

<td>Rs. {order.total_amount}</td>

<td>

<span className={`status ${(order.order_status || "pending").toLowerCase()}`}>

{order.order_status || "Pending"}

</span>

</td>

<td>

{new Date(order.order_date).toLocaleDateString()}

</td>

<td>

<button

className="btn-primary"

onClick={()=>openOrder(order.order_id)}

>

View

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

    );

};

export default OrdersTable;