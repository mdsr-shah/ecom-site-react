import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  setIsProcessing(true);

  setTimeout(() => {

    const orderId =
      'SS' +
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    setOrderNumber(orderId);

    setIsProcessing(false);

    setShowModal(true);

  }, 1500);
};

const handleModalClose = () => {

  setShowModal(false);

  clearCart();

  navigate('/');

};

  if (cart.length === 0) {
    
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Your cart is empty</h2>
        <a href="/" className="add-to-cart-btn">Go Back to Shopping</a>
      </div>
    );
  }

  return (
    <main className="checkout-page">
      <section className="checkout-form-section">
        <h1>Checkout</h1>
        
        <form id="checkout-form" className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span>*</span></label>
            <input type="text" id="fullName" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span>*</span></label>
            <input type="email" id="email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number <span>*</span></label>
            <input type="tel" id="phone" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="city">City <span>*</span></label>
            <input type="text" id="city" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address <span>*</span></label>
            <textarea id="address" rows="4" required onChange={handleChange}></textarea>
          </div>

          <button 
            type="submit" 
            className="place-order-btn" 
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "CONFIRM ORDER"}
          </button>
        </form>
      </section>

      {/* Order Summary */}
      <aside className="checkout-summary">
        <h2>Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="summary-item">
            <span>{item.name} × {item.quantity}</span>
            <span>Rs. {item.price * item.quantity}</span>
          </div>
        ))}
        
        <div className="summary-item">
          <span>Subtotal</span>
          <span>Rs. {cartTotal}</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        
        <div className="summary-total">
          <span>Total Amount</span>
          <strong>Rs. {cartTotal}</strong>
        </div>
      </aside>

      {showModal && (

  <div className="order-modal">

    <div className="order-modal-content">

      <h2>

        🎉 Order Placed Successfully!

      </h2>

      <p id="modal-order-id">

        Order ID: {orderNumber}

      </p>

      <div id="modal-order-items">

        {cart.map((item) => (

          <div
            key={item.id}
            className="summary-item"
          >

            <span>

              {item.name}

              {' × '}

              {item.quantity}

            </span>

            <span>

              Rs.

              {' '}

              {item.price * item.quantity}

            </span>

          </div>

        ))}

      </div>

      <div className="modal-total">

        <strong>

          Total:

          {' '}

          Rs. {cartTotal}

        </strong>

      </div>

      <button
        className="place-order-btn"
        onClick={handleModalClose}
      >

        Continue Shopping

      </button>

    </div>

  </div>

)}
    </main>
  );
};

export default Checkout;