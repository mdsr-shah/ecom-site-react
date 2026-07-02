import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ProductGrid from '../../components/product/ProductGrid';
import CartDrawer from '../../components/layout/CartDrawer';
import CategoryDirectory from '../../components/category/Category'
import { menCategories } from '../../data/menCategories';
import { kidsCategories } from '../../data/kidsCategories';
import axios from 'axios';


const Kids = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const { addToCart } = useCart();

useEffect(() => {
  axios.get("http://localhost:5000/products")
    .then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
}, []);

  const handleAddToCart = (product) => {
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: Math.round(product.price * 280),
      image: product.thumbnail
    };
    addToCart(cartProduct);
  };

   const loadMoreProducts = () => {

  setVisibleProducts((prev) => prev + 6);

};

const kidsProducts = products.filter(product => product.category_id === 3);

  return (
    <>
      <section className="page-hero" aria-labelledby="kids-hero-title">
        <p className="page-hero__eyebrow">Kids</p>
        <h1 id="kids-hero-title">Kids Clothing & Accessories</h1>
        <p>Comfortable everyday clothes, playful layers, and durable pieces for active days.</p>
        <a href="#kids-offers" className="page-hero__link">Shop seasonal picks</a>
        
        <figure className="page-hero__media">
          <img 
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Kids clothing" 
          />
        </figure>
      </section>

      <section id="kids-sale" className="promo-banner">
        <h2>Playday Picks</h2>
        <p>Soft outfits, easy layers, and colorful basics for school and weekends.</p>
        <a href="#kids-offers">View kids offers</a>
      </section>

      <CategoryDirectory
        title="Search by category"
        categories={kidsCategories}
      />

      <section id="kids-offers" className="product-feature-list">
        <h2>Featured Kids Essentials</h2>
        
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
          <ProductGrid 
            products={kidsProducts.slice(0, visibleProducts)} />

             {visibleProducts < products.length && (
              <div className="load-more-wrapper">
                 <button className="load-more-btn" onClick={loadMoreProducts}>
                    Load More
                  </button>
              </div>
               )}</>
        )}
      </section>

       <CartDrawer isOpen={false} onClose={() => {}} /> {/* Controlled by Header */}
    </>
  );
};

export default Kids;