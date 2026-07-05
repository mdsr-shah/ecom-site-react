import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    changeQuantity,
    cartTotal,
  } = useCart();

  const IMAGE_URL = import.meta.env.VITE_API_URL;

  // Don't render anything if closed
  if (!isOpen) return null;

  return (
    <>
      {/* Dark overlay */}
      <div
        className="cart-overlay"
        onClick={onClose}
      />

      {/* Side drawer */}
      <aside className="cart-panel">

        {/* Close button */}
        <button
          className="overlay-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>
          Shopping Cart ({cart.length})
        </h2>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-icon">
              🛍️
            </div>

            <p>Your cart is empty</p>

            <Link
              to="/"
              className="add-to-cart-btn"
              onClick={onClose}
            >
              Start Shopping
            </Link>

          </div>

        ) : (

          <>

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  key={item.product_id}
                  className="cart-item"
                >

                  <img
                    src={`${IMAGE_URL}${item.image}`}
                    alt={item.name}
                    className="cart-item-thumb"
                  />

                  <div className="cart-item-content">

                    <div className="cart-item-details">

                      <h4>{item.name}</h4>

                      <p className="price">

                        Rs. {item.price}

                      </p>

                    </div>

                    <div className="quantity-wrapper">

                      <button
                        className="qty-btn"
                        onClick={() =>
                          changeQuantity(item.product_id, -1)
                        }
                      >
                        -
                      </button>

                      <span className="quantity">

                        {item.quantity}

                      </span>

                      <button
                        className="qty-btn"
                        onClick={() =>
                          changeQuantity(item.product_id, 1)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="cart-item-right">

                    <div className="item-total">

                      Rs. {item.price * item.quantity}

                    </div>

                    <button
                      className="remove-item-btn"
                      onClick={() =>
                        removeFromCart(item.product_id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="cart-footer">

              <div className="cart-total">

                <span>Total Amount</span>

                <strong>

                  Rs. {cartTotal}

                </strong>

              </div>

              <Link
                to="/checkout"
                className="place-order-btn"
                onClick={onClose}
              >
                PROCEED TO CHECKOUT
              </Link>

            </div>

          </>

        )}

      </aside>
    </>
  );
};

export default CartDrawer;