import { useEffect, useState } from "react";
import { createProduct, updateProduct } from "../../services/productService";

const ProductModal = ({
  showModal,
  setShowModal,
  fetchProducts,
  editingProduct,
  setEditingProduct,
}) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: "",
  });

  useEffect(() => {

    if (editingProduct) {

      setFormData({
        title: editingProduct.title,
        description: editingProduct.description,
        price: editingProduct.price,
        stock: editingProduct.stock,
        category_id: editingProduct.category_id,
        image_url: editingProduct.image_url,
      });

    } else {

      setFormData({
        title: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        image_url: "",
      });

    }

  }, [editingProduct]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingProduct) {

        await updateProduct(editingProduct.product_id, formData);

        alert("Product Updated!");

      } else {

        await createProduct(formData);

        alert("Product Added!");

      }

      fetchProducts();

      setShowModal(false);

      setEditingProduct(null);

    } catch (err) {

      console.error(err);

      alert("Operation Failed");

    }

  };

  if (!showModal) return null;

  return (

    <div className="admin-modal-overlay">

      <div className="admin-modal">

        <div className="admin-modal-header">

          <h2>

            {editingProduct ? "Edit Product" : "Add Product"}

          </h2>

          <button
            onClick={() => {

              setShowModal(false);

              setEditingProduct(null);

            }}
          >
            ✕
          </button>

        </div>

        <div className="admin-modal-body">

          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            <input
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />

            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              required
            >

              <option value="">Select Category</option>

              <option value="1">Women</option>

              <option value="2">Men</option>

              <option value="3">Kids</option>

            </select>

            <input
              name="image_url"
              placeholder="Image URL"
              value={formData.image_url}
              onChange={handleChange}
              required
            />

            <div className="admin-modal-footer">

              <button
                type="button"
                className="btn-danger"
                onClick={() => {

                  setShowModal(false);

                  setEditingProduct(null);

                }}
              >

                Cancel

              </button>

              <button
                type="submit"
                className="btn-success"
              >

                {editingProduct ? "Update Product" : "Save Product"}

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );

};

export default ProductModal;