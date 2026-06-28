import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Search, User, Heart } from 'lucide-react';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__brand">
          <Link to="/" className="site-logo" aria-label="Super Store home">
            <span className="site-logo__tile">SUPER</span>
            <span className="site-logo__tile">STORE</span>
          </Link>
        </div>

        <nav className="primary-nav">
          <ul className="primary-nav__list">
            <li><Link to="/">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><a href="#">Baby</a></li>
          </ul>
        </nav>

        <nav className="utility-nav">
          <ul className="utility-nav__list">
            <li>
              <button className="utility-nav__icon">
                <Search size={22} strokeWidth={2} />
              </button>
            </li>
            <li>
              <button className="utility-nav__icon">
                <Heart size={22} strokeWidth={2} />
              </button>
            </li>
            <li>
              <button className="utility-nav__icon">
                <User size={22} strokeWidth={2} />
              </button>
            </li>
            <li>
              <button 
                className="utility-nav__icon utility-nav__icon--cart"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={22} strokeWidth={2} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;