import { useCart } from "../../context/CartContext";

const ProductCard = ({
  product,
  onShowDetails
}) => {

  const { addToCart } = useCart();

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
          {product.description?.substring(0,70)}...
        </p>

        <p className="product-price">
          Rs. {product.price}
        </p>

        <button
          className="details-btn"
          onClick={() => onShowDetails(product)}
        >
          Show Details
        </button>

        <button
          className="add-to-cart-btn"
          onClick={() =>
            addToCart({
              id: product.product_id,
              name: product.title,
              price: product.price,
              image: product.image_url
            })
          }
        >
          Add To Cart
        </button>

      </div>

    </article>

  );

};

export default ProductCard;