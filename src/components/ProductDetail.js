import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock Available:</strong> {product.stock > 0 ? `${product.stock} items` : "Out of stock"}</p>
      <p><strong>Rating:</strong> ⭐{product.rating} / 5</p>
    </div>
  );
};

export default ProductDetail;
