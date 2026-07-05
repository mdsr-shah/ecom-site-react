import { useState, useEffect, useMemo } from "react";
import ProductModal from "../product/ProductModal";
import { Search, X } from "lucide-react";
import api from "../../services/api";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
const [showModal, setShowModal] = useState(false);
const IMAGE_URL = import.meta.env.VITE_API_URL;

const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);

    // Optional: close the search overlay behind the modal
    // onClose();
};


  useEffect(() => {
    if (!isOpen) return;

    api
      .get("/products/all")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return products.filter((product) => {
      return (
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (product.description &&
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
      );
    });
  }, [products, searchTerm]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="search-backdrop"
        onClick={onClose}
      ></div>

      <div className="search-overlay">

        <div className="search-header">

          <div>

            <span className="search-small-title">
              SEARCH
            </span>

            <h2>
              What are you looking for?
            </h2>

          </div>

          <button
            className="search-close"
            onClick={onClose}
          >
            <X size={30} />
          </button>

        </div>

        <div className="search-input-wrapper">

          <Search size={22} />

          <input
            autoFocus
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <div className="quick-search">

          <button onClick={() => setSearchTerm("Dress")}>
            Dress
          </button>

          <button onClick={() => setSearchTerm("Shoes")}>
            Shoes
          </button>

          <button onClick={() => setSearchTerm("Jeans")}>
            Jeans
          </button>

          <button onClick={() => setSearchTerm("Cotton")}>
            Cotton
          </button>

          <button onClick={() => setSearchTerm("Kids")}>
            Kids
          </button>

        </div>

        <div className="search-results">

          {searchTerm === "" ? (

            <div className="search-placeholder">

              Start typing to search products...

            </div>

          ) : filteredProducts.length === 0 ? (

            <div className="search-placeholder">

              No matching products found.

            </div>

          ) : (

            <div className="search-grid">

              {filteredProducts.map((product) => (

               <div
  className="search-card"
  key={product.product_id}
>

  <img
    src={`${IMAGE_URL}${product.image_url}`}
    alt={product.title}
  />

  <div className="search-card-body">

    <h4>{product.title}</h4>

    <p>
      {product.description?.substring(0, 70)}...
    </p>

    <span>
      Rs. {product.price}
    </span>

    <button
      className="details-btn"
      onClick={() => handleShowDetails(product)}
    >
      Show Details
    </button>

  </div>

</div>

              ))}

            </div>

          )}

        </div>

      </div>
      <ProductModal
    product={selectedProduct}
    isOpen={showModal}
    onClose={() => setShowModal(false)}
/>
    </>
  );
};

export default SearchOverlay;