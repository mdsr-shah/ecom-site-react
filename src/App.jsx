import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Checkout from './pages/Checkout';
import Admin from "./pages/Admin"

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;