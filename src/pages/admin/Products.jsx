import { useEffect, useState } from "react";

import ProductToolbar from "../../components/admin/ProductToolbar";
import ProductModal from "../../components/admin/ProductModal";
import ProductTable from "../../components/admin/ProductTable";
import Pagination from "../../components/admin/Pagination";

import { getProducts } from "../../services/productService";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  const limit = 10;

  const [totalPages, setTotalPages] = useState(1);

  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = async () => {

    try {

      const data = await getProducts(page, limit, search,category);

      setProducts(data.products);
      setTotalPages(data.totalPages);
      setTotalProducts(data.totalProducts);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, [page,search,category]);


    useEffect(() => {
        setPage(1); // Reset to first page when search or category changes
    }, [search, category]);



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
        products={products}
        fetchProducts={fetchProducts}
        setEditingProduct={setEditingProduct}
        setShowModal={setShowModal}
      />

      <Pagination 
        page={page}
        limit={limit}
        totalProducts={totalProducts}
        totalPages={totalPages}
        setPage={setPage}

      />

    </>
  );
};

export default Products;