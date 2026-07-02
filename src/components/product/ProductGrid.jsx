import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </>
  );
};

export default ProductGrid;