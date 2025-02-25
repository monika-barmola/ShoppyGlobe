import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
