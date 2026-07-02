import { X, Search } from "lucide-react";

const SearchOverlay = ({
  isOpen,
  onClose,
  searchTerm,
  setSearchTerm,
  results,
  onProductClick,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="search-backdrop"
        onClick={onClose}
      />

      <div className="search-overlay">

        <div className="search-header">

          <div>

            <h3>Search Super Store</h3>

            <h1>What are you looking for?</h1>

          </div>

          <button
            className="search-close"
            onClick={onClose}
          >
            <X size={28} />
          </button>

        </div>

        <div className="search-input-wrapper">

          <Search size={22} />

          <input
            autoFocus
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className="quick-search">

          <button onClick={() => setSearchTerm("Cotton")}>Cotton</button>
          <button onClick={() => setSearchTerm("Linen")}>Linen</button>
          <button onClick={() => setSearchTerm("Dress")}>Dress</button>
          <button onClick={() => setSearchTerm("Sale")}>Sale</button>

        </div>

        <div className="search-results">

          {searchTerm.trim() === "" ? (

            <p className="search-placeholder">
              Start typing to search products...
            </p>

          ) : results.length === 0 ? (

            <p className="search-placeholder">
              No products found.
            </p>

          ) : (

            <div className="search-grid">

              {results.map((product) => (

                <div
                  key={product.product_id}
                  className="search-card"
                  onClick={() => onProductClick(product)}
                >

                  <img
                    src={product.image_url}
                    alt={product.title}
                  />

                  <h4>{product.title}</h4>

                  <span>
                    Rs. {product.price}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
};

export default SearchOverlay;