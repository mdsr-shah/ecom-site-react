import { useEffect, useState } from "react";

import ProductToolbar from "../../components/admin/ProductToolbar";
import ProductModal from "../../components/admin/ProductModal";
import ProductTable from "../../components/admin/ProductTable";

import { getProducts } from "../../services/productService";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const fetchProducts = async () => {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

const filteredProducts = (products || []).filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "" ||
    product.category_id === Number(category);

  return matchesSearch && matchesCategory;
});

  return (
    <>

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        setShowModal={setShowModal}
      />

      <ProductModal
    showModal={showModal}
    setShowModal={setShowModal}
    fetchProducts={fetchProducts}
    editingProduct={editingProduct}
    setEditingProduct={setEditingProduct}
/>

      <ProductTable
        products={filteredProducts}
        fetchProducts={fetchProducts}
        setEditingProduct={setEditingProduct}
        setShowModal={setShowModal}
      />

    </>
  );
};

export default Products;