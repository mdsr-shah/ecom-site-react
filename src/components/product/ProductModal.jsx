import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const IMAGE_URL = "http://localhost:5000/";


  if (!isOpen || !product) return null;

  const price = Number(product.price);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select color and size");
      return;
    }

    addToCart({
      product_id: product.product_id,
      name: product.title,
      price: price,
      image: product.image_url,
      color: selectedColor,
      size: selectedSize
    });
    onClose();
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '28px' }}>
          ✕
        </button>

        <div className="product-modal-grid">
          <div className="product-modal-image">
            <img src={`${IMAGE_URL}${product.image_url}`} alt={product.title} />
          </div>

          <div>
            <h1 id="modal-product-title">{product.title}</h1>
            <p id="modal-product-price" style={{ fontSize: '26px', fontWeight: '800', color: '#e60012' }}>
              Rs. {price}
            </p>
            <p id="modal-product-desc">{product.description}</p>

            {/* Colors */}
            <div style={{ margin: '20px 0' }}>
              <strong>Color</strong>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {['Black', 'White', 'Blue', 'Red'].map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`color-option-btn ${selectedColor === color ? 'active' : ''}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div style={{ margin: '20px 0' }}>
              <strong>Size</strong>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-option-btn ${selectedSize === size ? 'active' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleAddToCart} className="add-to-cart-btn" style={{ width: '100%', marginTop: '20px' }}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;