import { useEffect, useState } from "react";

import OrdersTable from "../../components/admin/OrdersTable";
import OrderModal from "../../components/admin/OrderModal";

import {
  getOrders
} from "../../services/orderService";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const fetchOrders = async () => {

    try {

      const data = await getOrders();

      setOrders(data);

    }

    catch(err){

      console.log(err);

    }

  };

  useEffect(()=>{

      fetchOrders();

  },[]);

  return(

    <div className="orders-page">

        <OrdersTable

            orders={orders}

            setSelectedOrder={setSelectedOrder}

            setShowModal={setShowModal}

        />

        <OrderModal

            selectedOrder={selectedOrder}

            showModal={showModal}

            setShowModal={setShowModal}

            fetchOrders={fetchOrders}

        />

    </div>

  );

};

export default Orders;