import ProductCard from "./ProductCard";

const ProductGrid = ({
    products,
    onShowDetails
}) => {

    return (

        <>

            {products.map(product => (

                <ProductCard

                    key={product.product_id}

                    product={product}

                    onShowDetails={onShowDetails}

                />

            ))}

        </>

    );

};

export default ProductGrid;