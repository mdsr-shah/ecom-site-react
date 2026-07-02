import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ProductGrid from '../../components/product/ProductGrid';
import CartDrawer from '../../components/layout/CartDrawer';
import CategoryDirectory from '../../components/category/Category'
import { womenCategories } from '../../data/womenCategories';
import SearchOverlay from '../../components/website/SearchOverlay';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const { addToCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  axios
    .get("http://localhost:5000/products")
    .then((res) => {
      setProducts(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);

  const handleAddToCart = (product) => {
    const cartProduct = {
      id: product._product_id,
      name: product.title,
      price: Math.round(product.price * 280), // Convert to PKR
      image: product.thumbnail
    };
    addToCart(cartProduct);
  };

  const loadMoreProducts = () => {

  setVisibleProducts((prev) => prev + 6);

};

const womenProducts = products.filter(
  product => product.category_id === 1
);

  return (
    <>
      <section className="page-hero" aria-labelledby="women-hero-title">
        <p className="page-hero__eyebrow">Women</p>
        <h1 id="women-hero-title">Women's Clothing & Accessories</h1>
        <p>Original everyday pieces, summer layers, and soft essentials designed for simple daily styling.</p>
        <a href="#women-offers" className="page-hero__link">Shop seasonal picks</a>
        
        <figure className="page-hero__media">
          <img 
            src="https://images.pexels.com/photos/16216189/pexels-photo-16216189.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Woman wearing casual outfit" 
          />
        </figure>
      </section>

      {/* Promo Banner */}
      <section id="women-sale" className="promo-banner">
        <h2>Monsoon Refresh</h2>
        <p>Fresh everyday staples, light fabrics, and easy outfit updates.</p>
        <a href="#women-offers">View women's offers</a>
      </section>
    

      <CategoryDirectory
        title="Search by category"
        categories={womenCategories}
      />
       
      {/* Product Section */}
     <section id="women-offers" className="product-feature-list">
    <h2>Limited-Time Offers</h2>

   {loading ? (
     <p>Loading products... </p>
    ) : (
    <>
    <ProductGrid products={womenProducts.slice(0, visibleProducts)}
    />
  
  {visibleProducts < products.length && (
  <div className="load-more-wrapper">
      <button className="load-more-btn" onClick={loadMoreProducts}>
        Load More
      </button>
  </div>
  )}

</>

  )}

</section>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Home;