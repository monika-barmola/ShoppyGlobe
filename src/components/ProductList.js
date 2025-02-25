import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
