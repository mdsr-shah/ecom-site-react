import { deleteProduct } from "../../services/productService";




const ProductTable = ({
    products,
    fetchProducts,
    setEditingProduct,
    setShowModal
}) => {
  
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await deleteProduct(id);

    alert("Product deleted successfully!");

    fetchProducts(); // Refresh table
  } catch (error) {
    console.error(error);
    alert("Failed to delete product.");
  }
};

  
  
    return (
    <section className="product-table">
      <h2>All Products</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>

              <td>
                <img
                  src={product.image_url}
                  alt={product.title}
                  width="60"
                />
              </td>

              <td>{product.title}</td>

              <td>Rs. {product.price}</td>

              <td>{product.stock}</td>

              <td>{product.category_id}</td>

              <td>
                <button
    onClick={() => {
        setEditingProduct(product);
        setShowModal(true);
    }}>Edit</button>
                <button onClick={()=> handleDelete(product.product_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;