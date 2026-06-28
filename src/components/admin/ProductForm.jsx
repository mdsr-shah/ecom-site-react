import { useState } from "react";
import { createProduct } from "../../services/productService";

const ProductForm = ({ fetchProducts }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(formData);

      alert("Product added successfully!");

      setFormData({
        title: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        image_url: ""
      });

      fetchProducts();

    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <section className="product-form">

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Product Name"
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
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={formData.image_url}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Product
        </button>

      </form>

    </section>
  );
};

export default ProductForm;