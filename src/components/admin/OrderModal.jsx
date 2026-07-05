import { useEffect, useState } from "react";
import { updateOrderStatus } from "../../services/orderService";

const OrderModal = ({
  selectedOrder,
  showModal,
  setShowModal,
  fetchOrders,
}) => {

  const [status, setStatus] = useState("");
  const IMAGE_URL = "http://localhost:5000";

  useEffect(() => {

    if (selectedOrder) {

      setStatus(selectedOrder.order.order_status);

    }

  }, [selectedOrder]);

  if (!showModal || !selectedOrder) return null;

  const handleSave = async () => {

    await updateOrderStatus(

      selectedOrder.order.order_id,

      status

    );

    fetchOrders();

    setShowModal(false);

  };

  return (

    <div className="admin-modal-overlay">

      <div className="admin-modal">

        <div className="admin-modal-header">

          <h2>

            Order #{selectedOrder.order.order_id}

          </h2>

          <button onClick={() => setShowModal(false)}>

            ✕

          </button>

        </div>

        <div className="admin-modal-body">

          <div className="admin-customer-section">

            <h3>Customer Information</h3>

            <p><strong>Name:</strong> {selectedOrder.order.full_name}</p>

            <p><strong>Email:</strong> {selectedOrder.order.email}</p>

            <p><strong>Address:</strong> {selectedOrder.order.shipping_address}</p>

          </div>

          <hr />

          <div className="admin-products-section">

            <h3>Products</h3>

            {

              selectedOrder.items.map(item => (

                <div
                  className="order-item"
                  key={item.order_item_id}
                >

                  <img
                    src={`${IMAGE_URL}${item.image_url}`}
                    alt={item.title}
                  />

                  <div className="admin-order-details">

                    <h4>{item.title}</h4>

                    <p>Quantity : {item.quantity}</p>

                    <p>Rs. {item.price}</p>

                  </div>

                </div>

              ))

            }

          </div>

          <hr />

          <div className="admin-status-section">

            <h3>Order Status</h3>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >

              <option>Pending</option>

              <option>Processing</option>

              <option>Shipped</option>

              <option>Delivered</option>

              <option>Cancelled</option>

            </select>

          </div>

        </div>

        <div className="admin-modal-footer">

          <button
            className="btn-success"
            onClick={handleSave}
          >

            Save Changes

          </button>

        </div>

      </div>

    </div>

  );

};

export default OrderModal;