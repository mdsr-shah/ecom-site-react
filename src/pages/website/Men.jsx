import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ProductGrid from '../../components/product/ProductGrid';
import CartDrawer from '../../components/layout/CartDrawer';
import CategoryDirectory from '../../components/category/Category'
import { menCategories } from '../../data/menCategories';
import axios from 'axios'; 

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const { addToCart } = useCart();

useEffect(() => {
  axios.get("/products/all")
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
      id: product.product_id,
      name: product.title,
      price: product.price,
      image: product.image_url
    };
    addToCart(cartProduct);
  };

  const loadMoreProducts = () => {

  setVisibleProducts((prev) => prev + 6);

};

const menProducts = products.filter(product => product.category_id === 2);

  return (
    <>
      <section className="page-hero" aria-labelledby="men-hero-title">
        <p className="page-hero__eyebrow">Men</p>
        <h1 id="men-hero-title">Men's Clothing & Accessories</h1>
        <p>Clean essentials, relaxed fits, and practical layers made for everyday routines.</p>
        <a href="#men-offers" className="page-hero__link">Shop seasonal picks</a>
        
        <figure className="page-hero__media">
          <img 
            src="https://images.pexels.com/photos/18031216/pexels-photo-18031216.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Man wearing casual outfit" 
          />
        </figure>
      </section>

      <section id="men-sale" className="promo-banner">
        <h2>Weekend Reset</h2>
        <p>Easy shirts, soft tees, and city-ready trousers at seasonal prices.</p>
        <a href="#men-offers">View men's offers</a>
      </section>

      <CategoryDirectory
        title="Search by category"
        categories={menCategories}
      />

      <section id="men-offers" className="product-feature-list">
        <h2>Limited-Time Offers</h2>
        
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
          <ProductGrid products={menProducts.slice(0, visibleProducts)}/>

         {visibleProducts < menProducts.length && (
  <div className="load-more-wrapper">
      <button className="load-more-btn" onClick={loadMoreProducts}>
        Load More
      </button>
  </div>
        )}
        </>
        )}
      </section>

      <CartDrawer isOpen={false} onClose={() => {}} /> {/* Controlled by Header */}
    </>
  );
};

export default Men;