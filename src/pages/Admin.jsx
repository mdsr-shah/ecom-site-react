import { useEffect, useState } from "react";
import ProductForm from "../components/admin/ProductForm";
import ProductTable from "../components/admin/ProductTable";
import { getProducts } from "../services/productService";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="admin-page">
      <h1>Admin Dashboard</h1>

      <ProductForm fetchProducts={fetchProducts} />

      <ProductTable
        products={products}
        fetchProducts={fetchProducts}
      />
    </main>
  );
};

export default Admin;