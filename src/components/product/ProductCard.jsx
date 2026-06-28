import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const price = Number(product.price);

  return (
    <article className="product-card">
      <img 
        src={product.image_url} 
        alt={product.title} 
        className="product-image"
      />
      
      <div className="product-info">
        <h3>{product.title}</h3>
        
        <p className="product-description">
          {product.description ? product.description.substring(0, 75) + '...' : ''}
        </p>
        
        <p className="product-price">
          <strong>Rs. {price}</strong>
        </p>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id: product.id,
              name: product.title,
              price: price,
              image: product.image_url
            });
          }}
          className="add-to-cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;