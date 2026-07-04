import { FaPlus, FaSearch } from "react-icons/fa";

const ProductToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  setShowModal,
}) => {
  return (
    <div className="product-toolbar">

      <div className="toolbar-header">
        <div>
          <h2>Products</h2>
          <p>Manage all products</p>
        </div>

        <button
          className="btn btn-primary add-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="btn-icon" />
          Add Product
        </button>
      </div>

      <div className="toolbar-filters">

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="1">Women</option>
          <option value="2">Men</option>
          <option value="3">Kids</option>
        </select>

      </div>

    </div>
  );
};

export default ProductToolbar;